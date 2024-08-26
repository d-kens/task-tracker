FROM node:20.14-alpine3.20

# Use a non-root user for security
USER node

WORKDIR /app

COPY --chown=node:node package*.json ./
COPY --chown=node:node tsconfig.build.json ./
COPY --chown=node:node tsconfig.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD ["npm", "run", "start:dev","--", "--host", "0.0.0.0"]