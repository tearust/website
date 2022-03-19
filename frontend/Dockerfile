FROM nginx:alpine
RUN mkdir /etc/letsencrypt

ADD dist /www/doc
COPY nginx/proxy.conf /etc/nginx/conf.d/proxy.conf
