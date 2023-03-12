pipeline {
    agent any
    
    stages {
       /* stage('Build') { 
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

      sh 'docker login -u "youssef1998" -p "123456789" docker.io '
      sh 'echo "docker logged in "'
      // Push the Docker image to Docker Hub with the new tag
    sh "docker push youssef1998/reactwebapp:${TAG}"
  }
}*/
   
  stage('Deploy to Kubernetes') {
  steps {

      // Update the Kubernetes deployment with the new image tag
      sh "k3s kubectl set image deployment/you-deployment you-container=youssef1998/reactwebapp:${TAG}"

      // Wait for the deployment to finish rolling out
      sh "k3s kubectl rollout status deployment/you-deployment"
      
      sh "sleep 300"

      // Delete the Kubernetes deployment
      sh "k3s kubectl delete deployment/you-deployment"

    }
  }



    }
}
