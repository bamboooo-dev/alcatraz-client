FROM node:14.14.0

RUN mkdir /ui

WORKDIR /ui
COPY . /ui

RUN yarn install

EXPOSE 3000
CMD sh -c "yarn build && yarn start"
