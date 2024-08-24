FROM node:20.14-alpine3.20

USER node

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
