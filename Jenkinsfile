pipeline {  
    agent any
    tools 
    { nodejs '16.10.0' }  
   
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        /*stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        } */
    }
}
