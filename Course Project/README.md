# Course Project
_Web applications with Node.js_

This document describes the **course project assignment** for the [Web applications with Node.js course](telerikacademy.com/courses/courses/Details/438) at Telerik Academy.

## Project Description

Design and implement a **Standard Web application** using [Node.js](http://nodejs.org), [Express](expressjs.com) and [MongoDB](https://www.mongodb.com/).  

It can be a discussion forum, blog system, e-commerce site, online gaming site, social network, or any other web application by your choice.

The application should have a:

- **public part** (accessible without authentication)
- **private part** (available for registered users)

### Public Part

The **public part** of your projects should be **visible without authentication**.
This public part could be the application start page, application statistics, the user login and user registration forms, as well as the public data of the users, e.g. the blog posts in a blog system, the public offers in a bid system, the products in an e-commerce system, etc.

### Private Part (Registered users area)

**Registered users** should have personal area in the web application accessible after **successful login**.
This area could hold for example the user's profiles management functionality, the user's offers in a bid system, the user's posts in a blog system, the user's photos in a photo sharing system, the user's contacts in a social network, etc.

## Technical Requirements

Your Web application should use the following technologies, frameworks and development techniques:

### Application Back-end (Server) - up to 40%

- At least **5 different public dynamic web pages**
  - Using [Pug](https://pugjs.org/)
- At least **3 different private (authenticated) dynamic web pages**
  - Using [Pug](https://pugjs.org/)
- At least **5 different public RESTful routes** for AJAX
- At least **1 private (authenticated) route** for AJAX
- Use **Express** for the server
  - Use an **MV-*** pattern
- Use **MongoDB**
  - As data storage
  - Do not use Mongoose
- Create a data/service layer for accessing the database
- Use [Passport](http://passportjs.org/) - for managing **users**
- Implement WebSockets
  - Using Socket.io or anything else

### Application front-end (client) - up to 25%

- Use any framework of your choice for the front-end
  - Optional, not required
  - KendoUI, AngularJS, Angular 2, Knockout, Bootstrap, etc...
- Implement responsive design
  - It may be based on **Bootstrap**, **Materialize** or any other UI framework
- Use at least **one AJAX form and/or WebSockets communication**
- Apply **error handling** and **data validation** to avoid crashes when invalid data is entered
- Use loaders, modals and notifications when applicable
- Prevent yourself from **security** holes (XSS, XSRF, Parameter Tampering, etc.)
  - Handle correctly the **special HTML characters** and tags like `<script>`, `<br />`, etc.
- Create usable UI
  - No need to be pretty, but **usable**

### Testing - up to 25%

- Unit test your application backend
  - 50%+ code coverage is required
    - Less will not win the points
- Write functional tests with selenium
  - Any webdriver is Ok
    - Gecko, Chrome, PhantomJS, SlimerJS, etc...
  - Test 50% of the application routes
    - Less will not win the points
- Write integration tests for AJAX routes
  - With supertest

### Deployment in Amazon Web Services (AWS) - up to 10%

- Deploy your application in AWS
- Use MongoDB from AWS

### Bonus requirements - up to 10%

- Setup a continious integration environment
  - Jenkins, CircleCI, or anything else
- Unit testing the client code
- Usage of containers

##  General Requirements

- Use Git
  - Github, Gitlab, Bitbucket, or other
- Brief **documentation** of the project and the project architecture
  - As `README.md` file at the root of the github repository

### Optional Requirements

- Nice looking UI supporting of all modern and old Web browsers
- Record a short video showcasing your application
  - ~1-2 minutes, just show the interesting features
  - Do not record register/login functionality, this is not interesting...

### Deliverables

- Upload your application in the cloud
  - Amazon Web Services
- Register your application at [Our Showcase System](http://best.telerikacademy.com)
  - Link to the live application
  - Link to the video
  - Link to the github repository

### Public Project Defense

Each team will have to make a **public defense** of its work in front of a trainer (for about 30 minutes), in which each of the team members will answer to the trainer's questions individually.

The public defense includes:

- Live **demonstration** of the developed web application (prepare sample data).
- Explain application structure and its back-end and front-end **source code**
- Run the tests
- Show the **commit logs** in the source control repository to prove a contribution from all team members.
- May include a simple task for each team member
  - The task must be implemented immediately

### Give Feedback about Your Teammates

You will be invited to **provide feedback** about all your teammates, their attitude to this project, their technical skills, their team working skills, their contribution to the project, etc.
The feedback is important part of the project evaluation so **take it seriously** and be honest.
