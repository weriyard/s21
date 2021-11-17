def applications = ["aaa", "bbb"]
def environment  = env.ENVIRONMENT
def version      = env.VERSION
def jobs         = [:]


for (int i = 0; i < 10; i++) {
    def app = applications[i]
    jobs["jobs-${app}"] = {
        node {
            stage("Build ${app}") {
            }
        }
    }
}

pipeline {
    agent none
    stages {
        stage('Build apps(s)') {
            steps {
                script {
                    parallel jobs
                }
            }
        }
    }
}
