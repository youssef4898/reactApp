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
   
    sh "docker build -t youssef1998/reactwebapp:latestv2 ."

      sh 'docker login -u "youssef1998" -p "123456789" docker.io '
      sh 'echo "docker logged in "'
    sh "docker push youssef1998/reactwebapp:latestv2"
  }
}
   
  stage('Deploy to Kubernetes') {
  steps {

      // Update the Kubernetes deployment with the new image tag
      sh "k3s kubectl create deployment you-deployment --image=youssef1998/reactwebapp:latestv2"
      sh "kubectl expose deployment you-deployment --type=NodePort --port=8089 --target-port=3000"

      sh "sleep 300"

      sh "k3s kubectl delete deployment/you-deployment"
      sh "k3s kubectl delete svc you-deployment"

    }
  }



    }
}
