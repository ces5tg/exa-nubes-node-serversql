
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=123
ENV MYSQL_DATABASE=db2
COPY ./script.sql /docker-entrypoint-initdb.d/
EXPOSE 3306

CMD ["mysqld"]