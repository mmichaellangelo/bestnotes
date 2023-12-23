FROM node:latest

ENV NODE_ENV development

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]


