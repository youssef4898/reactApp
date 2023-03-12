pipeline {
    agent any
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
  stage('Build and push Docker image') {
 
      environment {
    TAG = '1'
  }
  steps {
    

    script {
      TAG = TAG.toInteger() + 1
    }

    sh "docker build -t youssef1998/reactwebapp:${TAG} ."

    withDockerRegistry([credentialsId: "docker-hub", url: ""]) {
     /* sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'*/
        sh 'echo "docker logged in "'
    }

    // Push the Docker image to Docker Hub with the new tag
    sh "docker push youssef1998/reactwebapp:${TAG}"
  }
}

    }
}
