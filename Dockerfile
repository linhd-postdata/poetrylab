# build environment
FROM node:12.16.3-alpine as build
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN yarn --network-timeout 300000
COPY . ./
RUN yarn build:docker

# production environment
FROM nginx:stable-alpine
ENV API_HOST postdata.uned.es
ENV API_PORT 5000
COPY --from=build /app/build /usr/share/nginx/html
COPY ./docker/nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
