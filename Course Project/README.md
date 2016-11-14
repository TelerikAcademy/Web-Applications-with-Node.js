# Course Project
_Web applications with Node.js_

This document describes the **course project assignment** for the [Web applications with Node.js course](telerikacademy.com/courses/courses/Details/400) at Telerik Academy.

## Project Description

Design and implement a **Standard Web application** using [Node.js](http://nodejs.org), [Express](expressjs.com) and [MongoDB](https://www.mongodb.com/).  

It can be a discussion forum, blog system, e-commerce site, online gaming site, social network, or any other web application by your choice.

The application should have a:

- **public part** (accessible without authentication)
- **private part** (available for registered users)

### Public Part

The **public part** of your projects should be **visible without authentication**.
  - Using [Pug](https://pugjs.orghttps://goo.gl/forms/hOQg9O1laMDIFTo13
- Use **MongoDB**  - Using [Pug](https://pugjs.orghttps://goo.gl/forms/hOQg9O1laMDIFTo13

  - As data storage
  - Optionally, you may use **Mongoose** or any other ODM framework
- Create a data/service layer for accessing the database
- Use [Passport](http://passportjs.org/) - for managing **users**
  - Your registered users should have at least one of the two roles: **user**

### Application front-end (client) - **up to 35%**

- Use any framework of your choice for the front-end
  - Optional, not required
  - KendoUI, AngularJS, Angular 2, Knockout, Bootstrap, etc...
- Implement responsive design
  - It may be based on **Bootstrap**, **Materialize** or any other UI framework
- Use AJAX with the AJAX routes from the server
- Apply **error handling** and **data validation** to avoid crashes when invalid data is entered
- Write at least **10 different unit tests** for your controllers and data logic
- Prevent yourself from **security** holes (XSS, XSRF, Parameter Tampering, etc.)
  - Handle correctly the **special HTML characters** and tags like `<script>`, `<br />`, etc.

### Application Creativity - **up to 10%**

- Think of a innovative application
  - Not yet another blog system, forum, pseudo-imdb, or something similar or boring

##  General Requirements

- Use Git
  - Github, GitLab, Bitbucket, or other
- Brief **documentation** of the project and the project architecture
  - As `README.md` file at the root of the github repository

### Optional Requirements

- Nice looking UI supporting of all modern and old Web browsers
- Good usability (easy to use UI)
- Record a short video showcasing your application
  - ~1-2 minutes, just show the interesting features
  - Do not record register/login functionality, this is not interesting...

### Deliverables

- Upload your application in the cloud
  - MS Azure, HerokuCloud, Amazon, all are fine
- Register your application at [Our Showcase System](http://best.telerikacademy.com)
  - Link to the live application
  - Link to the video
  - Link to the github repository

### Public Project Defense

Each team will have to make a **public defense** of its work in front of a trainer (for about 30 minutes), in which each of the team members will answer to the trainer's questions individually.

The public defense includes:

- Live **demonstration** of the developed web application (prepare sample data).
- Explain application structure and its back-end and front-end **source code**
- Show the **commit logs** in the source control repository to prove a contribution from all team members.
- May include a simple task for each team member
  - The task must be implemented immediately

### Give Feedback about Your Teammates

You will be invited to **provide feedback** about all your teammates, their attitude to this project, their technical skills, their team working skills, their contribution to the project, etc.
The feedback is important part of the project evaluation so **take it seriously** and be honest.
