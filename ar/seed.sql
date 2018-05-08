-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS awair;
-- Creates the "blogger" database --
CREATE DATABASE awair;


CREATE TABLE awair 
(
	id int NOT NULL AUTO_INCREMENT,
	Timestamp decimal NOT NULL,
	MAC varchar(14) NOT NULL,
	PM1 decimal NOT NULL,
    PM25 decimal NOT NULL,
    PM10 decimal NOT NULL,
	Temp decimal NOT NULL,
	Lat decimal NOT NULL,
    Lon decimal NOT NULL,
    Alt decimal NOT NULL,
    CO int NOT NULL,
    NO int NOT NULL,
	PRIMARY KEY (id)
);