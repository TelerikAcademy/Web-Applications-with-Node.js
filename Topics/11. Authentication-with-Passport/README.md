<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Passportjs
## Implementing Authentication and Authorization

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
# Table of Contents
- Why bother with authentication and authorization?
- What is Passportjs?
- Why use Passportjs?
- Setting up Passport
    - Local strategy
- OAuth and OAuth providers
    - Quick explanation
    - Using a third-party provider


<!-- section start -->

<!-- attr: { class: 'slide-section', showInPresentation: true, style: 'font-size: 0.9em' } -->
<!-- # Authentication and Authorization
## Who are you? Are you allowed to do this? -->

<!-- attr: { hasScriptWrapper: true, style: 'font-size: 0.95em' } -->
# Quick explanations
- <strong style="color: #E650A0">Authentication</strong> and <strong style="color: #50B4E6">Authorization</strong> ARE NOT the same thing
- <strong style="color: #E650A0">Authentication</strong> is the way to provide your indentity
    - Described by the question **Who are you?**
- <strong style="color: #50B4E6">Authorization</strong> is a way to declare what priveleges you have
    - Descirbed by the question **What are you allowed to do?**

<!-- attr: { hasScriptWrapper: true, style: 'font-size: 0.9em' } -->
# Motivation
- Reasons to implement Authentication and/or Authorization
    - **Persistently associate information with a concrete user**
        - _Examples_: User profile, action history, etc
    - **Provide several levels of access**
        - _Examples_: regular user, moderator, admin
    - **Provide security when dealing with sensitive information**
        - _Examples_: Financial transactions

<!-- section start -->
<!-- attr: { class: 'slide-section', showInPresentation: true } -->
<!-- # Passportjs
## What is Passport, why use it -->

<!-- attr: { style: 'font-size: 0.9em' } -->
# What is Passportjs
- **Passportjs** is an authentication middleware for Node.js
- **Passportjs** is an open source library
    - [Public repository](https://github.com/jaredhanson/passport)
- Provides many authentication strategies
    - _Examples_: Local, OpenID, Facebook, GitHub, etc

<!-- attr: { style: 'font-size: 0.95em' } -->
# Why use Passportjs
- **Modular** - use only what you need, nothing more
- **Ease of use** - integration in an application is easy
- **Rich choice** of authentication strategies
- **Extensible** - allows developers to implement custom strategies
- **Combine strategies** - developers can use multiple strategies for the same application
<!-- attr: { style: 'font-size: 0.95em', showInPresentation: true } -->
<!-- # Why use Passportjs -->
- **Unopinionated** - can be used with any data storage/client
- **Open source** - you can always take a read through the source code
- **Small codebase** - simple, easy to read, easy to configure
- **Well documented** - visit http://passportjs.org/docs

<!-- section start -->
<!-- attr: { class: 'slide-section', showInPresentation: true } -->
<!-- # Integrating Passport
## From `npm install` to the login screen -->

<!-- attr: { style: 'font-size: 0.8em' } -->
# Getting Passport
- **Passportjs** is a **npm package**
    - this is the core module
    - install with
```
npm install passport --save
```
- Authentication strategies are separated from the core module
    - you have to additionally install a strategy via npm
    - Local strategy: 
```
npm install passport-local --save
```

<!-- attr: { style: 'font-size: 0.9em', hasScriptWrapper: true } -->
# Configuration
- You should have the following dependencies in your `package.json`

```json
{
    "dependencies": {
        "body-parser": "^1.15.2",
        "cookie-parser": "^1.4.3",
        "express": "^4.14.0",
        "express-session": "^1.14.2",
        "passport": "^0.3.2",
        "passport-local": "^1.0.0"
    }
}
```

- Perform `npm install` to install the dependencies

<!-- attr: { style: 'font-size: 0.95em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- Configure server middleware:

```js
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'purple unicorn' }));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
```

<!-- attr: { style: 'font-size: 0.9em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- HTML forms send url encoded data by default, hence `bodyParser.urlencoded`
    - With `bodyParser.json` credentials can be read from request body
- `express-session` is a middleware that stores data about sessions
    - `passport.session` builds on top of `express-session`

<!-- attr: { style: 'font-size: 0.95em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- Configure the local strategy:

```js
passport.use(new LocalStrategy(
function (username, password, done) {
    data
     .userByUsername(username)
     .then(user => {
         if(user && 
            passwordMatches(user.password, password)) {
                done(null, user);
            }

        done(null, false);
     })
     .catch(error => done(error, false));
}));
```

<!-- attr: { style: 'font-size: 0.9em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- Set serialization and deserialization:

```js
passport.serializeUser((user, done) => {
    // if a valid user is passed
    // serialize user information in the session
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // user the id from the serialized session
    data.userById(id)
        .then(user => {
            if(user)
                return done(null, user);

            done(null, false)
        })
        .catch(error => done(error, false));
});
```

<!-- attr: { style: 'font-size: 0.8em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- Setup а route that returns a form:

```js
app.post('/login', 
    passport.authenticate('local', { 
        failureRedirect: '/login'
    }),
    (req, res) => {
        res.status(200)
        .send('<h1>Worked!</h1>')
    });

app.get('/login', (req, res) => res.status(200).send(`
< form method="POST" action="/login">
   < input type="text" name="username">
   < input type="text" name="password">
   < input type="submit" value="Submit">
< /form>`));
```

<!-- attr: { style: 'font-size: 0.9em', showInPresentation: true, hasScriptWrapper: true } -->
<!-- # Configuration -->
- Setup app routes:

```js
// use isAuthenticated method from passport to determine
// whether a user is authorized or not
app.get('/profile', (req, res) => {
    if(!req.isAuthenticated())
        return res.status(401)
                  .redirect('/unauthorized');

    res.status(200)
       .send(`Welcome, ${req.user.username}!`);
});

app.get('/unauthorized', (req, res) => {
    res.status(200)
       .send('<h1>Wa wa!</h1>');
});
```

<!-- attr: { class: 'slide-section', showInPresentation: true } -->
<!-- # Setting Passport up -->
## [Demo](./demos/app.js)

<!-- section start -->
<!-- attr: { class: 'slide-section', hasScriptWrapper: true, showInPresentation: true } -->
<!-- # OAuth and OAuth providers
## Facebook, Twitter, GitHub, etc -->

# OAuth
- **OAuth** is an authentication protocol
    - Allows users to authenticate themselves in applications without sharing their credentials
- **OAuth** authentication is done using a thirdy-party **provider**
- _Example_: sign in pastebin.com with Facebook, Twitter or Google account

# How does OAuth work?
1. The client performs a login request to the server
1. The client will be redirected to the provider
1. Login with the provider on the provider's web page
1. The provider will issue the client a token
1. The client will be redirected back to the server
1. The token from the provider will be used for authentication

<!-- attr: { hasScriptWrapper: true } -->
# OAuth flow
<img class="slide-image" src="./imgs/oauth.jpg" style="top:15%; left:10%; width:80%">


# OAuth with Passportjs
- Passport supports **OAuth 1.0** and **OAuth 2.0**
- Passport also has a rich set of **OAuth** provider strategies
    - Facebook, GitHub, LinkedIn, Google, etc
- Browse the strategies at http://passportjs.org/

<!-- attr: { class: 'slide-section', showInPresentation: true } -->
<!-- # Using a third-party provider -->
## [Demo](./demos/authentication-with-github)

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