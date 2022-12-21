FROM node

WORKDIR /app

COPY package*.json /app
RUN npm install

# copy remaining files
COPY . /app

CMD [ "npm", "start"]
