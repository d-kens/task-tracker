FROM node:20.14-alpine3.20

# Use a non-root user for security
USER node

WORKDIR /app

# Copy package.json and package-lock.json (if present) first
COPY --chown=node:node package*.json ./

# Clean npm cache to prevent potential issues
RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=node:node . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
