pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force'
                sh 'chown -R 111:115 "/.npm"'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './bdo-mvp/jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './bdo-mvp/jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)?'
                sh './bdo-mvp/jenkins/scripts/kill.sh'
            }
        }
    }
}
