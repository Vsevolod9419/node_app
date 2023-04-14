FROM node

WORKDIR /app/src 

COPY package*.json .

RUN npm i

COPY . .

CMD ["node", "app.js"]