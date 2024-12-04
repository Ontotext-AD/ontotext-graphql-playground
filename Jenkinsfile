pipeline {
    agent {
        label env.AGENT
    }

    tools {
        nodejs 'nodejs-20.11.1'
    }

    environment {
        REPO_URL = 'https://github.com/Ontotext-AD/ontotext-graphql-playground'
        GIT_PIPELINE = "Ontotext GraphQL Playground Component"
    }

    stages {
        stage('Build Info') {
            steps {
                script {
                    echo "Agent: ${env.AGENT}"
                    echo "Building branch: ${env.BRANCH_NAME}"
                }
            }
        }

        stage('Install & Build') {
            steps {
                sh 'docker-compose up --build'
                sh 'npm run install:component:ci'
                sh 'npm run build:component'
            }
        }

        stage('Align folder permissions') {
            steps {
                sh 'sudo chown -R \$(id -u):\$(id -g) .'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Cypress Test') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }

    post {

        always {
            sh "docker-compose down --remove-orphans --rmi all"
        }

        success {
            updateGitlabCommitStatus name: "${GIT_PIPELINE}", state: 'success'
            echo "Build successful - GitLab commit status updated."
        }

        unstable {
            updateGitlabCommitStatus name: "${GIT_PIPELINE}", state: 'failed'
            echo "Build unstable - GitLab commit status updated as failed."
        }

        failure {
            updateGitlabCommitStatus name: "${GIT_PIPELINE}", state: 'failed'
            echo "Build failed - GitLab commit status updated as failed."
            emailext(
                to: env.GITLAB_USER_EMAIL,
                from: "Jenkins <hudson@ontotext.com>",
                subject: '''[Jenkins] $PROJECT_NAME - Build #$BUILD_NUMBER - Failed!''',
                mimeType: 'text/html',
                body: '''${SCRIPT, template="groovy-html.template"}'''
            )
        }

        aborted {
            updateGitlabCommitStatus name: "${GIT_PIPELINE}", state: 'canceled'
            echo "Build aborted - GitLab commit status updated as canceled."
        }
    }
}
