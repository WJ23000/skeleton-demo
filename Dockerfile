FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY dist/ /usr/share/nginx/html/

COPY default.conf /etc/conf.d/default.conf

EXPOSE 80