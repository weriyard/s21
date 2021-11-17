def applications = ["aaa", "bbb"]
def environment  = env.ENVIRONMENT
def version      = env.VERSION
def jobs         = [:]

if (applications.size() < 1) {
    error("ERROR: APPLICATIONS must be a comma-delimited list of applications to build")
}

for (int i = 0; i < applications.size(); i++) {
    def app = applications[i]
    jobs["jobs-${app}"] = {
        node {
            stage("Build ${app}") {
                build job: 'Application-Builder', parameters: [
                    string(name: 'APPLICATION', value: app),
                    string(name: 'ENVIRONMENT', value: environment),
                    string(name: 'VERSION',     value: version)
                ]
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
