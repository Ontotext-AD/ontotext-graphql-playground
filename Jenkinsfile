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
        COMPOSE_PROJECT_NAME = "${JOB_NAME}_${BUILD_NUMBER}"
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

        stage('Log Info') {
            steps {
                echo "Pipeline: ${GIT_PIPELINE}"
                echo "Repository: ${REPO_URL}"
            }
        }

        stage('Install & Build') {
            steps {
                // Export COMPOSE_PROJECT_NAME for use in docker-compose
                sh "export COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME}"
                sh 'docker-compose -p ${COMPOSE_PROJECT_NAME} up --build --abort-on-container-exit'
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
            sh "docker-compose -p ${COMPOSE_PROJECT_NAME}  down --remove-orphans --rmi all || true"
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
