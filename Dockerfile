# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some depenendencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

ENV MONGODB_USERNAME=afsan007
ENV MONGODB_PASSWORD=af930611040
# Default command
CMD ["npm", "start"]