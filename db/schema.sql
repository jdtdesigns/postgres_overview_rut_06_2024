\c postgres;

DROP DATABASE IF EXISTS students_db;

CREATE DATABASE students_db;

\c students_db;

CREATE TABLE courses (
	id SERIAL PRIMARY KEY,
	course_name VARCHAR(250),
	course_type VARCHAR(250)
);

CREATE TABLE students (
	id SERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	course_name VARCHAR(250)
);