# syntax=docker/dockerfile:1
#   creates a layer from Docker image.
FROM node:16.16.0
# For clarity and reliability, you should always use absolute paths for your WORKDIR.
# Also, you should use WORKDIR instead of proliferating instructions
# like RUN cd … && do-something, which are hard to read, troubleshoot, and maintain.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#   adds files from your Docker client’s current directory.
COPY . /usr/src/app
#   Split long or complex RUN statements on multiple lines separated with backslashes
#   to make your Dockerfile more readable, understandable, and maintainable.
RUN apt-get update && apt-get install -y
RUN npm install
RUN npm run build
#   The EXPOSE instruction indicates the ports on which a container listens
#   for connections. Consequently, you should use the common,
#   traditional port for your application.
EXPOSE 3000
#   specifies what command to run within the container.
CMD "npm" "run" "dev"
