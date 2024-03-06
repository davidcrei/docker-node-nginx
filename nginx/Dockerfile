FROM nginx:latest

COPY nginx.conf /etc/nginx/conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]