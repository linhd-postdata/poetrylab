# build environment
FROM node:12.16.3-alpine as build
WORKDIR /app
COPY package.json ./
RUN yarn --network-timeout 300000
COPY . ./
RUN yarn build:docker

# production environment
FROM nginx:stable-alpine
ENV API_HOST evi.linhd.uned.es
ENV API_PORT 5004
ENV REACT_APP_API_ROOT http://evi.linhd.uned.es:5004
COPY --from=build /app/build /usr/share/nginx/html
COPY ./docker/nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
