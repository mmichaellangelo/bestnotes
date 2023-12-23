FROM node:latest
WORKDIR /app
ENV NODE_ENV development

COPY package*.json .
RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]