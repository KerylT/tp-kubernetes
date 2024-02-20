FROM node:14

WORKDIR /app

COPY package-lock.json /app/
COPY app.js /app/

RUN npm install express

EXPOSE 5555:3000

CMD ["node", "app.js"]
