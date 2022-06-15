# Stage 1 - the build process
FROM node:14-alpine as build-deps
USER "root"
WORKDIR /usr/src/app

ARG BRANCH

ENV REACT_APP_NODE_ENV=$BRANCH

COPY package.json ./
COPY . ./
RUN apk add git
RUN npm install
RUN npm run build
RUN npm start &

# Stage 2 - the production environment

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
RUN mkdir -p /root/ssl-certs

ARG BRANCH
COPY ./deployment/${BRANCH}/apache-ssl.key /root/
COPY ./deployment/${BRANCH}/apache-ssl.crt /root/ssl-certs/

RUN apk update && apk upgrade

# copy the nginx config to the server
# TODO - a file already exits there . if it causes the issue . first delete that file and then copy.
COPY ./deployment/${BRANCH}/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443 3176
CMD ["nginx", "-g", "daemon off;"]
