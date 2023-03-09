pipeline {  
    agent any
    tools 
    { nodejs '18.14.2' }  
   
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
