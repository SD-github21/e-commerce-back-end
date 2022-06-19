![License](https://img.shields.io/badge/License-ISC-ff69b4)

# **E-Commerce Back End**

## **Description**
The purpose of this project was to build a back end for an e-commerce site and to configure a working Express.js API to use Sequelize to interact with a MySQL database in order to perform CRUD operations. 

<br>

## **Table of Contents**
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Built With](#built-with)<br>
[Walkthrough Video](#video-of-e-commerce-back-end)<br>

<br>

### **User Story**
AS A manager at an internet retail company<br>
I WANT a back end for my e-commerce website that uses the latest technologies<br>
SO THAT my company can compete with other e-commerce companies<br>

### **Acceptance Criteria**
GIVEN a functional Express.js API <br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file <br>
THEN I am able to connect to a database using Sequelize <br>
WHEN I enter schema and seed commands <br>
THEN a development database is created and is seeded with test data <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Sequelize models are synced to the MySQL database <br>
WHEN I open API GET routes in Insomnia for categories, products, or tags <br>
THEN the data for each of these routes is displayed in a formatted JSON <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia <br>
THEN I am able to successfully create, update, and delete data in my database <br>

<br>

### **Installation**
(1) Click [here](https://nodejs.org/en/) to install Node.js on your local machine if you haven't already done so. Choose the latest LTS version for the most recent stable release.
<br><br> 
(2) Download MySQL onto your machine if you haven't already done so. Use the following installation guide for detailed instructions on how to do this:<br>
https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide
<br><br>
(3) Clone this repository on your local machine.<br><br>
(4) Navigate to the repository folder.<br><br>
(5) Type the following command in the command line to download all required packages/modules.dependencies:<br>

    npm install

<br>

### **Usage**
(1) In order to connect to a MySQL database, you must create a .env file that contains the following information:

    DB_NAME = 'ecommerce_db'
    DB_USER = 'yourusername'
    DB_PW = 'yourpassword'

(2) Enter the following in the command line:

    mysql -u root -p 

This will prompt you to enter your MySQL password. 
<br>
<br>
(3) After you enter your password, you will see the MySQL command line. Enter the following command in the command line:

    source db/schema;

You should see the following lines printed in the command line indicating that the database has been successfully created:

    Query OK, 4 rows affected (0.17 sec)
    Query OK, 1 row affected (0.01 sec)

(4) Type "quit" in the MySQL command line. Then type the following in the command line to seed the SQL database:

    node seeds/index.js

You should see numerous SQL statements and then confirmation of data having been seeded:

![alt text](images/seeded-data.png)

(5) Type the following command:

    npm start

OR

    node server.js

You should see the following image in your command line indicating that the server is started and the Sequelize models are synced to the MySQL database:

![alt text](images/synced-models.png)
<br>
<br>

(6) You can open API GET routes for categories, products, or tags in Insomnia and view the data for each route in a formatted JSON. You can also test API POST, PUT, and DELETE routes in Insomnia to create, update, and delete data in the database. Visit the [Walkthrough Video](#video-of-e-commerce-back-end) to see all routes in action in Insomnia. Below is a sample picture of the GET route for all categories in Insomnia:

![alt text](images/sample-get-all-categories-request.png)

<br>

### **License**
This project is covered under the following license: ISC<br>
https://opensource.org/licenses/ISC


<br>

### **Contributing**
This project does not include any contributors

<br>

### **Tests**
No tests were utilized in the creation of this application.

<br>

### **Built With**
* JavaScript
* Node.js
* MySQL
* Express.js
* Sequelize
* dotenv 
* mysql2

<br>

### **Video of E-Commerce Back End**
https://drive.google.com/file/d/1TbCglYm2l_k9ycyw7vveUoNs8jDgKBWu/view