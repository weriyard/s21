pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "HURRAAAAAAAAAAAAAA"; exit 0'
            }
        }

        stage('Test-2') {
            steps {
                sh 'echo "HURRAAAAAAAAAAAAAA"; exit 0'
            }
        }

        stage('Test-4') {
            steps {
                sh 'echo "HURRAAAAAAAAAAAAAA"; exit 0'
            }
        }

        stage('Build') {
            steps {
                echo 'Building..'
    
		    script {
                    for(int i=0; i < 10; i++) {
                        stage(list[i]){
                            echo "Element: $i"
                        }
                    }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }

    }


    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}