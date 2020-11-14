FROM node:14.14.0

RUN mkdir -p /alcatraz/ui

WORKDIR /alcatraz/ui
COPY . /alcatraz/ui

RUN yarn install

EXPOSE 3000
CMD sh -c "yarn build && yarn start"
