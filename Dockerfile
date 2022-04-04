#FROM is the base image for which we will run our application
FROM nginx:latest

#COPY files and directories from the application'
COPY . /usr/share/nginx/html

#EXPOSE port on docker for it to use
EXPOSE 80
