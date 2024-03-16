import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildFeatures.dockerSupport
import jetbrains.buildServer.configs.kotlin.buildFeatures.perfmon
import jetbrains.buildServer.configs.kotlin.buildSteps.ScriptBuildStep
import jetbrains.buildServer.configs.kotlin.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.buildSteps.script
import jetbrains.buildServer.configs.kotlin.triggers.finishBuildTrigger
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

    params {
        param("ecr_base", "418553830250.dkr.ecr.us-east-1.amazonaws.com/graph.prod")
    }

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
        branchFilter = "+:<default>"
    }

    steps {
        script {
            name = "Test"
            id = "Test"
            workingDir = "application"
            scriptContent = """
                npm install
                npm run test
            """.trimIndent()
            dockerImage = "node:18"
            dockerImagePlatform = ScriptBuildStep.ImagePlatform.Linux
            dockerPull = true
        }
        dockerCommand {
            name = "Build"
            id = "DockerCommand"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%ecr_base%/web-ui:latest"
            }
        }
        dockerCommand {
            name = "Push"
            id = "Push"
            commandType = push {
                namesAndTags = "%ecr_base%/web-ui:latest"
            }
        }
        script {
            name = "Deploy"
            id = "Deploy"
            scriptContent = """echo "Deploy application""""
        }
    }

    triggers {
        finishBuildTrigger {
            buildType = "${StagingPipeline.id}"
            successfulOnly = true

            enforceCleanCheckout = true
        }
    }

    features {
        perfmon {
        }
        dockerSupport {
            loginToRegistry = on {
                dockerRegistryId = "PROJECT_EXT_3"
            }
        }
    }
})

object StagingPipeline : BuildType({
    name = "Staging Pipeline"

    allowExternalStatus = true
    maxRunningBuilds = 1
    publishArtifacts = PublishMode.SUCCESSFUL

    params {
        param("ecr_base", "418553830250.dkr.ecr.us-east-1.amazonaws.com/graph.staging")
    }

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
        branchFilter = "+:<default>"
    }

    steps {
        script {
            name = "Setup"
            id = "Setup"
            scriptContent = """
                #!/bin/bash
                BUILD_NUMBER=%build.number%
                GIT_HASH=%build.vcs.number%
                GIT_COMMIT_SHA=${'$'}{GIT_HASH:0:8}
                echo "##teamcity[setParameter name='git_commit_sha' value='${'$'}{GIT_COMMIT_SHA}']"
                echo "##teamcity[buildNumber '${'$'}{BUILD_NUMBER}.${'$'}{GIT_COMMIT_SHA}']"
            """.trimIndent()
        }
        script {
            name = "Test"
            id = "Test"
            workingDir = "application"
            scriptContent = """
                npm install
                npm run test
            """.trimIndent()
            dockerImage = "node:18"
            dockerImagePlatform = ScriptBuildStep.ImagePlatform.Linux
            dockerPull = true
        }
        dockerCommand {
            name = "Build"
            id = "DockerCommand"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%ecr_base%/web-ui:latest"
            }
        }
        dockerCommand {
            name = "Push"
            id = "Push"
            commandType = push {
                namesAndTags = "%ecr_base%/web-ui:latest"
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
        dockerSupport {
            loginToRegistry = on {
                dockerRegistryId = "PROJECT_EXT_3"
            }
        }
    }
})
