FROM node:latest

WORKDIR /apps/ui

COPY package*.json ./

RUN npm install

COPY . .

# RUN yarn install

# EXPOSE 5173

CMD ["npm", "run", "dev"]