<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# RESTful APIs with Express
## REST Architecture with Express

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
# Table of Contents
- REST - quick overview
- Advantages of RESTful Architecture
- What is RESTful API
- RESTful API using Node.js and Express
    - CRUD(Create, Read, Update, Delete)
    - Restricted APIs

<!-- section start -->
<!-- attr: { class: 'slide-section', hasScriptWrapper: true } -->
# REST and RESTful
## Quick overview

<!-- attr: { style: 'font-size: 0.9em' } -->
# REST
- **REST** stands for **Representational State Transfer**
- **REST** is a set of architectural principles
- **REST** advocates:
    - **Client-Server architecture** - client and server should be separate systems
    - **Stateless communication** - a request should carry the neccessary information to be understood
    - **Cache** - Responses should be marked as cacheable or non-cacheable
    - **Uniform interface** between different components of the system

<!-- attr: { style: 'font-size: 0.95em' } -->
# Advantages of RESTful
- **Client-Server architecture**
    - Better separation of concerns, allows the different parts of a system to evolve independently
    - Server can be reused by different clients
    - Easier to isolate, therefore easir to test and maintain
- **Stateless communication**
    - Better visibility - monitoring a single request is easier
    - Better scalability - not storing data between requests

# Advantages of RESTful
- **Cache**
    - allows clients to cache response
    - improves performance and scalability, because fewer trips to the server are required
- **Uniform interface**
    - simplified and consistent communication between components
    - decouples the providing of a service from it's implementation

<!-- attr: { style: 'font-size: 0.8em' } -->
# RESTful APIs
- Web APIs that match the **REST** constraints are considered **RESTful**
- Consider two APIs with the same functionality:
- RESTful:
```http
GET     /products/1052/reviews
POST    /products/1052/reviews
DELETE  /products/1052/reviews/10
GET     /products/1052/reviews/10
```
- Not RESTful:
```http
GET     /reviews?product_id=1052
POST    /post_review?product_id=1052
POST    /remove_review?product_id=1052&review_id=10
GET     /reviews?product_id=1052&review=10
```

<!-- attr: { style: 'font-size: 0.9em' } -->
# RESTful APIs
- Which style is more consistent and standartized?
- If both APIs are updated, which API documentation will you have to read more of?
- Assume the first request work - for which API can you tell whether the other 3 will?

# Some RESTful tips
- HTTP methods:
    - `GET` method for read-only requests
    - `POST` method for creation requests
    - `PUT` or `PATCH` for update requests
    - `DELETE` for remove requests

<!-- attr: { style: 'font-size: 0.9em' } -->
# Some RESTful tips
- When operating on a collection - `users` for example
```http
GET /users  - all users, may be filtered by query params
POST /users - create a new user
```

- Operating on a record
```http
GET /users/ID    - return the user with the matching ID
DELETE /users/ID - remove the user with the matching ID
PATCH /users/ID  - update the user with the given ID
PUT /users/ID    - replace the user with the given ID
```

<!-- section start -->
<!-- attr: { class: 'section-start', showInPresentation: true } -->
<!-- RESTful API using Express
## [Demo](./demos) -->

<!-- section start -->
<!-- attr: { class: 'slide-section', showInPresentation: true } -->
<!-- # Authentication with Passportjs
## Questions? -->

<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Web Applications with Node.js
    - [official page](http://academy.telerik.com/student-courses/software-technologies/web-applications-with-node-js/about)
- Telerik Academy @ Facebook
    - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
    - [telerikacademy.com](https://telerikacademy.com)