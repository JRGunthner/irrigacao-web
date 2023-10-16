FROM node:19.9-alpine
WORKDIR /usr/app
COPY . /app/
COPY package*.json .
RUN npm install
COPY . .
ARG API=""
EXPOSE 5173
ENTRYPOINT ["npm", "run", "start"]
