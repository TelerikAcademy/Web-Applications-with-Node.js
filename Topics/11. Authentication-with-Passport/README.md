<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Passport.js
## Implementing Authentication and Authorization

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of Contents
- Why bother with authentication and authorization?
- What is Passport.js?
- Why use Passport.js?
- Setting up Passport
    - Local strategy
    - Other strategies


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
<!-- # Passport.js
## What is Passport, why use it -->

<!-- attr: { style: 'font-size: 0.9em' } -->
# What is Passport.js
- **Passport.js** is an authentication middleware for Node.js
- **Passport.js** is an open source library
    - [Public repository](https://github.com/jaredhanson/passport)
- Provides many authentication strategies
    - _Examples_: Local, OpenID, Facebook, GitHub, etc

<!-- attr: { style: 'font-size: 0.95em' } -->
# Why use Passport.js
- **Modular** - use only what you need, nothing more
- **Ease of use** - integration in an application is easy
- **Rich choice** of authentication strategies
- **Extensible** - allows developers to implement custom strategies
- **Combine strategies** - developers can use multiple strategies for the same application

<!-- attr: { style: 'font-size: 0.95em' } -->
# Why use Passport.js
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
- **Passport.js** is a **npm package**
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

# Configuration
- Server middleware

```js
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'purple unicorn' }));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
```

<!-- attr: { style: 'font-size: 0.9em', hasScriptWrapper: true } -->
# Configuration
- HTML forms send url encoded data by default, hence `bodyParser.urlencoded`
    - With `bodyParser.json` credentials can be read from request body
- `express-session` is a middleware that stores data about sessions
    - `passport.session` builds on top of `express-session`

<!-- attr: { style: 'font-size: 0.95em', hasScriptWrapper: true } -->
# Configuration
- Configuring the local strategy

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

<!-- attr: { style: 'font-size: 0.9em', hasScriptWrapper: true } -->
# Configuration
- Serialization and deserialization

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

<!-- attr: { style: 'font-size: 0.8em', hasScriptWrapper: true } -->
# Configuration
- Setup а route that returns a form

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

<!-- attr: { style: 'font-size: 0.9em', hasScriptWrapper: true } -->
# Configuration
- Set up app routes

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
# Setting Passport up
## [Demo](./demos/app.js)

<!-- section start -->