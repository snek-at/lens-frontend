FROM node:18-bullseye

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

EXPOSE 9000

ENTRYPOINT ["yarn", "gatsby", "serve", "-H", "0.0.0.0"]