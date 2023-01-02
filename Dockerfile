FROM node:alpine

WORKDIR /app

COPY package*.json yarn.lock /app/
# RUN yarn add node-sass && yarn upgrade postcss && yarn upgrade
# RUN npm install -g node-gyp 
RUN yarn install 
COPY . ./
CMD [ "yarn", "run", "start"]
