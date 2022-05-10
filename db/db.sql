CREATE DATABASE IF NOT EXISTS company;
USE company;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    salary INT(11) NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;
