pipeline {  
    agent {
        docker {
            withDockerRegistry([credentialsId: "docker-hub", url: ""]){
            image 'node:lts-buster-slim'
                args '-p 3000:3000'}
        }
    }
   
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        } 
    }
}
