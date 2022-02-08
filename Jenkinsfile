pipeline {
  environment {
    imageRepo = 'oval/website'
    commitSha = sh(returnStdout: true, script: "git log -1 --pretty=format:'%h'").trim()
    imageName = "${imageRepo}:${commitSha}"
    buildArgs = sh(returnStdout: true, script: "grep -v '^#' ~/env/core-ui.env | xargs").trim()
  }

  agent any
  stages {
      stage('Clone Source') {
          steps {
            checkout scm
          }
      }
      stage('Build Image') {
          steps {
            sh 'export ${buildArgs} && docker build -t ${imageName} --build-arg NEXT_PUBLIC_SERVER_URL --build-arg REACT_APP_SENTRY_DSN --build-arg REACT_APP_SENTRY_ENVIRONMENT .'
          }
      }
      stage('Deploy Application') {
          steps {
             sh 'docker stop oval-website || true && docker rm oval-website || true'
             sh 'docker run -d -p 127.0.0.1:3006:3000 --name oval-website ${imageName}'
             sh 'docker system prune -a -f || true'
          }
      }
      stage('Cleanup Build') {
          steps {
             sh 'docker system prune -a -f || true'
          }
      }
  }
}


