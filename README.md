## OpenClassRooms Project 7 - Programmation Full-Stack avec Vue.js, Node, Express et MongoDB

***Final project for the Full-Stack specialization***

<br/>

[![Maintainability](https://api.codeclimate.com/v1/badges/40fa82a95394adcac7c0/maintainability)](https://codeclimate.com/github/lauralazzaro/P7-fullstack-openclassrooms/maintainability)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/91c95f761eda4b6c864808ce8735a506)](https://www.codacy.com/gh/lauralazzaro/P7-fullstack-openclassrooms/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lauralazzaro/P7-fullstack-openclassrooms&amp;utm_campaign=Badge_Grade)


## Overview

Create a company social network.


## Technologies 

- Node.js (express)
- MySQL (Sequelize)
- Vue.js
- Webpack
- Bootstrap


## Download and Installation

- Import the database "projet7.sql"


- Modify the .env file in the /server folder by replacing the username and password with the username and password to connect to your MySQL server


- Open the /server folder in your terminal/console and run: 
> npm install 

- Start the server with:
> npm run start 

- Open the /client folder in your terminal/console and run
> npm install

- Start the Vue part with:
> npm run dev


## Signup

To create a new user, insert a valid email format (or even a valid email as it will be crypted and I will not have access to it) and a password with:
-  minimum length 8
-  maximum length 100
-  with uppercase letters
-  with lowercase letters
-  have two digits
-  have no space

If you want to test the application with "moderator" rights (to simulate the HR) login with:

> email: moderator@email.com
> 
> password: Email123