# HTTP & Async in Node.js Workshop

You are given a few simple tasks in order to exercise the skills learned through the first lectures from the **Node.js** course. The main goal is to improve your knowledge on using `async operations`, `modules` and building the design of your applications, all that in a Node.js environment.  

# General description

Extend the IMDB scrapper from [here](https://github.com/Minkov/imdb-scapper). Now, the scrapper only parses simple information about each movie (its title and id in IMDB).

# Task 1: Fork the repository

- Fork the repository in your account
- Add your teammates as committers

# Task 2: Extract more modules from the `app.js` file

- Extract the `wait()` method
- Find a way to improve the generation of urls
  - i.e. use some kind of string formatters
    - _Hint_ [Lodash](https://lodash.com/) and [its template engine](https://lodash.com/docs/4.17.2#template) may be your solution\
- Extract all "magic" values to meaningful constants
- Extract into a module all **simple-movie-scrapping** functionality
  - `app.js` should be just the entry-point of the application

# Task 3: Fill your database

- Using the **simple-movie-scrapping** functionality, extract in your database ~2000 movies

# Task 4: Get full information about each movies

- Write functionality for extracting detailed information for the simple movies
  - Store them in a new collection, i.e. `MovieDetails`
  - **Do not change the `SimpleMovie` mongoose model in any way**

- For each movie extract:
  - At least one cover image (its link)
  - Optional trailer (its link), if one is available
  - Title
  - Description/Storyline
  - Categories (Genres)
  - Release date
  - List of actors
    - Nested documents
    - Have name of the role in the movie, name, id in IMDB and profile image (its link)
  - Use [this page](http://www.imdb.com/title/tt1211837/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2495768522&pf_rd_r=1CS87QBS7W60MRC6JFS0&pf_rd_s=right-7&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t0) for reference

# Task 5: Get information about actors

- Write functionality for extracting detailed information for actors
  - Store them in a new collection, i.e. `Actors`
  - **Do not store actors detailed info in `SimpleMovie` or `MovieDetails` mongoose models**

- For each actor extract:
  - At least profile image (its link)
  - Name
  - Biography
  - A list of movies, he took part in:
    - For each movie extract name of the movie, the id of the Movie in IMDB, and the name of the character
  - Use [this page](http://www.imdb.com/name/nm0000375/?ref_=nv_sr_2) for reference


# Task 6: Review

- Review your application and think of a way to improve the quality
  - More abstraction of the modules
  - Extracting constants and "magic" values
  - etc...

# Task 7: Submit the code

- Each team member submits the team's solution at [the course page](https://telerikacademy.com/Courses/Courses/Details/400)
