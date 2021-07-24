FROM nginx:alpine
RUN mkdir /etc/letsencrypt

ADD dist /www/dist
COPY nginx/proxy.conf /etc/nginx/conf.d/proxy.conf
