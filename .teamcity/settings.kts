import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildFeatures.perfmon
import jetbrains.buildServer.configs.kotlin.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.buildSteps.script
import jetbrains.buildServer.configs.kotlin.triggers.vcs

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2023.11"

project {

    buildType(ProductionPipeline)
    buildType(StagingPipeline)
    buildTypesOrder = arrayListOf(StagingPipeline, ProductionPipeline)
}

object ProductionPipeline : BuildType({
    name = "Production Pipeline"

    allowExternalStatus = true
    maxRunningBuilds = 1
    publishArtifacts = PublishMode.SUCCESSFUL

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
        branchFilter = "+:<default>"
    }

    steps {
        dockerCommand {
            name = "Build"
            id = "DockerCommand"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "graph.prod/web-ui"
            }
        }
        script {
            name = "Test"
            id = "Test"
            scriptContent = """echo "Test World""""
        }
    }

    triggers {
        vcs {
            branchFilter = "+:<default>"
        }
    }

    features {
        perfmon {
        }
    }
})

object StagingPipeline : BuildType({
    name = "Staging Pipeline"

    allowExternalStatus = true
    maxRunningBuilds = 1
    publishArtifacts = PublishMode.SUCCESSFUL

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
        branchFilter = "+:<default>"
    }

    steps {
        script {
            name = "Test"
            id = "Test"
            scriptContent = """echo "Test World""""
        }
        dockerCommand {
            name = "Build"
            id = "DockerCommand"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "418553830250.dkr.ecr.us-east-1.amazonaws.com/graph.staging/web-ui:latest"
            }
        }
        dockerCommand {
            name = "Push"
            id = "Push"
            commandType = push {
                namesAndTags = "418553830250.dkr.ecr.us-east-1.amazonaws.com/graph.staging/web-ui:latest"
            }
        }
        script {
            name = "Deploy"
            id = "Deploy"
            scriptContent = """echo "Deploy application""""
        }
    }

    triggers {
        vcs {
            branchFilter = "+:<default>"
        }
    }

    features {
        perfmon {
        }
    }
})
