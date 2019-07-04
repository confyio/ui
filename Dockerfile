FROM mhart/alpine-node:10

RUN apk add --no-cache git

ENV ON_PREMISE 1

ADD . /opt/srv
WORKDIR /opt/srv

RUN npm install
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "onpremise"]
