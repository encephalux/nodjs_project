FROM ubuntu
ENV DOCKER_ENV=DOCKER_ENV
SHELL ["/usr/bin/bash", "-c"]
RUN apt-get update && \
    apt-get install -y curl gpg && \
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
    apt-get install -y nodejs && \
    npm i -g nodemon && \
    mkdir /node_app
EXPOSE 3000
VOLUME ["/node_app"]
WORKDIR /node_app
CMD nodemon server.js -e js,yaml,pug
