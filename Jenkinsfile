pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t simple-node-app .'
      }
    }

    stage('Test') {
      steps {
        sh 'docker run --rm simple-node-app npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker stop simple-node-app || true
docker rm simple-node-app || true
docker run -d -p 3000:3000 --name simple-node-app simple-node-app'''
      }
    }

  }
}