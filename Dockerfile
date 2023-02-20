# what's base image?
FROM node:19.6.0-alpine

# creating directory for the app
RUN mkdir -p /home/app
WORKDIR /home/app

# copy app to the directory
COPY . .

# add `/home/app/node_modules/.bin` to $PATH

# install dependencies
RUN npm install
RUN npm install -g serve --save

# when the container launches run the following command
CMD ["npm", "start"]
