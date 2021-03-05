pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '--publish -p 3001:3001 -u root:root'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // Skip test execution
        /*
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }*/
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)?'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
