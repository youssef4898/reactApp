pipeline {
    agent any
    
    stages {
       stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
  stage('Build and push Docker image') {
 
 
  steps {
   
    sh "docker build -t youssef1998/reactwebapp:latest ."

      sh 'docker login -u "youssef1998" -p "123456789" docker.io '
      sh 'echo "docker logged in "'
      // Push the Docker image to Docker Hub with the new tag
    sh "docker push youssef1998/reactwebapp:latest"
  }
}
   
  stage('Deploy to Kubernetes') {
  steps {

      // Update the Kubernetes deployment with the new image tag
      sh "k3s kubectl create deployment you-deployment --image=youssef1998/reactwebapp:latest"
      sh "kubectl expose deployment my-deployment --type=NodePort --port=3000 --target-port=8085"


      sh "sleep 300"

      // Delete the Kubernetes deployment
      sh "k3s kubectl delete deployment/you-deployment"

    }
  }



    }
}
