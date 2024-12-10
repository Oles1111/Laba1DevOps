pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker build -t simple-node-app .'
      }
    }

    stage('Test') {
      steps {
        sh 'sudo docker run --rm simple-node-app npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh '''sudo docker stop simple-node-app || true
sudo docker rm simple-node-app || true
sudo docker run -d -p 3000:3000 --name simple-node-app simple-node-app'''
      }
    }

  }
}