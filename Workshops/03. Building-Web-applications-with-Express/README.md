# Building Web applications with Express Workshop
You are given a few simple tasks in order to exercise the skills learned through the lectures from the **Web applications with Node.js** course. The main goal is to improve your knowledge on using [Express](http://expressjs.com), [Pug](http://pugjs.com) and [MongoDB](http://mongodb.org), all that in a Node.js environment.  

# General description

Create an application about superheroes :)

##  Task 1: SuperheroesUniverse: Models

- Design the models/schemas/objects for storing superheroes, fractions, powers, etc.... Mandatory use MongoDB. Mongoose is optional.

- Create a application for storing superheroes and users:
  - Each user has **username**, **display name** and image (or just a link to such)
  - Each superhero has **name**, **secret identity**, **city that protects**, **alignment** , **story**, **image**, a **list of fractions** and a **list of powers**
    - **name**:
      - Between **3** and **60** characters long
    - **secret identity**:
      - Between **3** and **20** characters long
      - Unique
    - **alignment**:
      - One of the following: `good`, `evil` or `neutral`
    - **story**:
      - A non-empty S
    - **image**:
      - A link to an image
    - All properties are required
    - _Example:_
      - ("name": "Batman", secret identity: "Bruce Wayne", "city": "Gotham", "alignment": "good", "story": "After losing hisS parents...", "fractions": "Bat family", "Justice League", "powers": "Intelligence", "Utility belt")
  - Each power has a **name**
    - **name**:
      - Between **3** and **35** characters long
      - Unique
  - Each city has a **name** and **country**- Create
      - Between **2** and **30** characters long
      - Unique
  - Each country has a **"planet":**
    - **name**:
      - Between **2** and **30** characters long
      - Unique
  - Each "planet": has a **name**
    - **name**:
      - Between **2** and **30** characters long
      - Unique
  - Each fraction has a **name**, **alignment**, a **list of "planet":s** that it protects and a **list of members(superheroes)**
   - **name**:
     - Between **2** and **30** characters long
     - Unique
   - **alignment**:
     - On of the following: `good`, `evil` or `neutral`
   - _Examples:_
     - ("name": "Justice League", "alignment": "good", "planets": "Earth", "Oa", members: "Batman", "Superman", "Wonder woman", etc..)
     - ("name": "Green lantern Corps", "alignment": "good", "planets": "Oa", members: "John Stewart" , "Kilowog", "Hal Jordan")

##  Task 2: Create a data layer for querying data from the database

- Create a data layer for querying the different collections. Mandatory use promises for a cleaner and more consistent API.
- Build a clean solution and follow the Node.js modules architecture
 - Use promises for your data layer

##  Task 3: Web Application

- Create a standard web application for showing superheroes, using the data layer and models from the previous tasks.

### Application and functionality:

- **Signed-in Users** can:
  - Sign up, sign in or sign out of the application
  - Change their **display name** and **image**
  - List their favorite superheroes and fractions
  - Add/Remove a **superhero** or **fraction** to their favorites
  - Add a new **superhero**
    - Providing all necessary properties
  - Update superhero
    - Add to fraction
    - Remove from fraction
    - Add power
    - Remove power
  - Add a new fraction
    - Providing all necessary properties
    - Using superheroes and planets that are already in the database
      - Optionally provide functionality for adding a new superhero
  - Get details for a superhero by superheroId:
    - Showing the full information about the superhero
    - Has an **add to favorites** button
  - Get details for a fraction by fractionId:
    - Showing the full information about the fraction
    - Has an **add to favorites** button
- **Not signed-in users** can:
  - List all superheroes, with paging
    - Showing only name, secret identity, their image and alignment
  - List superheroes that have a concrete powers, with paging
    - Powers can be one or more
    - Showing only name, secret identity, their image and alignment
  - List superheroes with an alignment, with paging
    - Showing only name, secret identity, their image and alignment
  - List superheroes by city, country or planet
    - Showing only name, secret identity, their image and alignment
  - Search for superheroes, with paging
    - The results must match the name, secret identity or story of the superhero
  - Get details for a superhero by superheroId:
    - Showing the full information about the superhero
  - List fractions, with paging
    - Showing only name and alignment
  - List fractions with an alignment, with paging
    - Showing only name and alignment
  - List fractions with a planet, with paging
    - Showing only name and alignment
  - Search for fractions, with paging
    - The results must match the name
  - Get details for a fraction by fractionId:
    - Showing the full information about the fraction

#   General requirements

- Use MVC architecture
- Build a clean solution and follow the Node.js modules architecture
- Use promises for your data layer
  - Provides a cleaner and consisten way for interactions with the database
- Consider using JSON.stringify and JSON.parse methods to create jsObject from json string or vice versa.
