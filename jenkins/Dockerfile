FROM jenkins/jenkins:lts

# Переключаемся на root-пользователя
USER root

# Устанавливаем Docker в контейнер Jenkins
RUN apt-get update && apt-get install -y docker.io

# Переключаемся обратно на пользователя Jenkins
USER jenkins

