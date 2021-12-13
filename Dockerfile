FROM node:lts-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
# Copy app files
COPY . .
# Expose port
EXPOSE 8080
# Start the app
CMD [ "npm", "run", "serve" ]