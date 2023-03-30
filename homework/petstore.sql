--Create a new file petstore.sql. Create a pet store database, with 2 mySQL tables, pets and owners. 
--Each table should have at least 3 properties. Insert one pet and one owner into appropriate tables.
create database petstore;

create table owners (
  ownerId INT  AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(20) NOT NULL,
  lastName  VARCHAR(20) NOT NULL,
  email VARCHAR(30),
  phone VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--add 2 inserts
insert into owners (firstName, lastName, email, phone)
Values ('Nick', 'Morgan', 'Nicholas.Morgan2002@aol.com', '954-PUPS');

insert into pets (ownerId, vaccinations, petType)
Values (1, true, 'labrador');

create table pets (
  petId INT  AUTO_INCREMENT PRIMARY KEY,
  ownerId INT NOT NULL,
  vaccinations BOOLEAN NOT NULL,
  petType VARCHAR(30) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


--Run a query in your terminal to print all of the data in the pets table.
select * from pets;