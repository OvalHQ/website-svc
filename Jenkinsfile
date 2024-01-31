pipeline {
  environment {
    imageRepo = 'oval/web-ui'
    commitSha = sh(returnStdout: true, script: "git log -1 --pretty=format:'%h'").trim()
    imageName = "${imageRepo}:${commitSha}"
    buildArgs = sh(returnStdout: true, script: " ~/buildargs.sh ~/env/oval/web-ui.env")
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
            sh 'docker build -t ${imageName} ${buildArgs} .'
          }
      }
      stage('Deploy Application') {
          steps {
             sh 'docker stop web-ui || true && docker rm web-ui || true'
             sh 'docker run -d -p 127.0.0.1:4003:3000 --name web-ui --env-file ~/env/oval/web-ui.env ${imageName}'
          }
      }
  }
}
