
Drop Database If Exists SpaceShipCentral_DB;

Create Database If Not Exists SpaceShipCentral_DB;

Use SpaceShipCentral_DB;


CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    First_Name VARCHAR(30) NOT NULL,
    Last_Name VARCHAR(30) NOT NULL,
    User_Name VARCHAR(30) NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(50) NOT NULL
);


Create Table SpaceShips (
    id INT Not Null AUTO_INCREMENT Primary Key,
    Name VARCHAR(255) Not Null UNIQUE,
    Universe VARCHAR(255) Not Null
);
