#create database examendb;
SET GLOBAL host_cache_size=0; #desabilita cache , puede sobrecargar y hacer trabajar mas a mysql 
create database IF NOT EXISTS examendb;
use db2;

CREATE TABLE IF NOT EXISTS datos (
    id int not null auto_increment primary key,
    nombre varchar(50) not null
);
insert into datos values(1, "cesar");
insert into datos values(2, "pacho");
insert into datos values(3, "teves");
