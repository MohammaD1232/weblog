CREATE DATABASE weblog;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    remember_me BOOLEAN,
    profile VARCHAR(255),
    about TEXT,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    active BOOLEAN DEFAULT TRUE,
    role ENUM('user', 'admin') DEFAULT 'user'
);
