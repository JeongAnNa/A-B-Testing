FROM node:10

WORKDIR /app

COPY ./ .

RUN npm install

ARG LOCAL_AZ

ENV AZ="${LOCAL_AZ}"
RUN echo "AZ=$AZ" >> .env

CMD [ "npm", "start" ]