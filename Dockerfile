# Specify a base image
FROM node:14.0-slim

WORKDIR /usr/app


# Install some depenendencies
COPY ./package.json ./
RUN npm install

ENV MLAB_USERNAME=afsan007
ENV MLAB_PASSWORD=af930611040
ENV MLAB_URL=ds261648.mlab.com

COPY ./ ./

# Default command
CMD ["npm", "start"]
