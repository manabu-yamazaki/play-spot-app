  # =========ローカルと本番切り替え===========
# FROM node:18.16.1-alpine
# WORKDIR /usr/src/app
FROM nginx:1.15.8

RUN rm -f /etc/nginx/conf.d/*

ADD nginx.conf /etc/nginx/conf.d/fitO2.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
  # ======================================
