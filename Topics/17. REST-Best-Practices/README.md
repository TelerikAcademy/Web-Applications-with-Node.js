<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# REST API
##  Best practices and common mistakes

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of Contents

- Terminologies
- Real world example
- Guide lines

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Terminologies -->

# Terminologies

- **Resource** is an object or representation of something, which has some associated data with it `or/and` there can be set of methods to operate on it. 

**Example:** `Animals`, `schools` and `employees` are resources and `get`, `add`, `update`, `adopt` are the operations to be performed on these resources.

<!-- attr: {showInPresentation: true} -->
<!-- # Terminologies -->

- **Collections** are set of resources, e.g Companies is the collection of Company resource.
- **URL** (**U**niform **R**esource **L**ocator) is a path through which a resource can be located and some actions can be performed on it.

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Real life example
## How some companies build their APIs


# Common API Solution

- Let's take an example API of companies that have some `Employees`:
  - `POST /addNewEmployee`
  - `POST /updateEmployee`
  - `POST /deleteEmployee`
  - `POST /deleteAllEmployees`
  - `POST /promoteEmployee`
  - `POST /promoteAllEmployees`
  - `POST /sortAllEmployeesByName`
  - `POST /sortAllEmployeesBySalary`

# Issues

- What **issues** does the example above cause?
    - There will be tons of other endpoints like these
    - They will contain redundant actions
    - They will be a pain to maintain
- What is the **source** of the issue?
    - The `URL` contains not only `resource` (noun), but an `action` (verb) as well
    - This limits our flexability and violates the `CRUD` principle

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Guide lines
## Build clean and simple to use API

# Key Requirements 

An API is a developer's UI - just like any UI, it's important to ensure the user's experience is thought out carefully!

  - It should use standards where they **make sense**
  - It should be friendly to the developer and be **explorable** via a browser address bar
  - It should be **simple**, **intuitive** and **consistent** to make adoption not only easy, but pleasant

# Rules to follow
- In order to adhere to those requirements, there are a few `"golden"` rules we could follow:
    - Use nouns but not verbs
        - Allows us to implement `CRUD`
    - Use plural nouns
        - We are working with collections, afterall
        - Allows us to use a common controller
    - Use sub-resourcing relation
    - Use API versioning

# HTTP methods (verbs)
  - **GET** - requests data from the resource and should not produce any side effect
  - **POST** - requests the server to create a resource in the database
  - **PUT** - requests the server to update resource or create the resource, if it doesn’t exist
  - **DELETE** - requests that the resources, or its instance, should be removed from the database.

# Apply CRUD

- Let's take the example above and fix it a bit by applying the `CRUD` principle:
  - `POST /addNewEmployee`
    - Becomes **POST /employees**
  - `POST /updateEmployee`
    - Becomes **PUT /employees/:id**
  - `POST /deleteEmployee`
    - Becomes **DELETE /employees/:id**
- What about the rest of the API?

# Sub-resourcing

- In those cases where a certain `resource` is under another `resource`, we need to apply sub-resourcing:

  - `POST /promoteEmployee`
    - Becomes **POST /employees/:id/promote**
  - `POST /demoteEmployee`
    - Becomes **POST /employees/:id/demote**
  - What about `POST /promoteAllEmployees`?
    - Invoking mass action on a resource is an **anti-pattern**
        - Could be acceptable if constraints are applied

<!-- attr: {showInPresentation: true} -->
<!-- # Sub-resourcing -->

- Another example of sub-resourcing is when you have an `Employees` resource of a `Company` looks like this:
    - `GET /companies/:id/employees`
    - `GET /companies/:id/employees/:id`
    - `PUT /companies/:id/employees/:id`
- Only applicable when the sub-resource **cannot / should not** be accessed directly

# Searching, sorting, filtering and pagination

  - All of these actions are simply the query on one dataset (`aka.` resource / collection)
    - There will be **no** new set of APIs (routes) to handle these actions.
    - We need to append the query params with the **GET** method API.

# Searching and sorting

  - **Searching** - When searching the employee name in `employees` resource, the API endpoint should be:
    - `GET /employees?search=Pesho`
  - **Sorting** - When sorting the `employees` resource, the API endpoint should be:
    - `GET /employees?sort=name_asc`
    
# Filtering and pagination

  - **Filtering** - For filtering the dataset, we can pass various options through query params:
    - `GET /companies?category=banking&location=india`
  - **Pagination** - When the dataset is too large, we divide the data set into smaller chunks
    - Improves the performance 
    - It is easier to handle the response
    - `GET /employees?skip=10&take=5` (3rd page)
    - `GET /employees?page=3` (3rd page)

# Versioning

- When your APIs are being consumed by the world, upgrading the APIs with some `breaking change` would also lead to `breaking` the existing products or services using your APIs
  - `POST `** /v1**`/employees/:id/promote`
- If there is any major breaking update, we can name the new set of APIs as v2

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Final result

# Initial API

- Let's take an example API of companies that have some `Employees`:
  - `POST /addNewEmployee`
  - `POST /updateEmployee`
  - `POST /deleteEmployee`
  - `POST /deleteAllEmployees`
  - `POST /promoteEmployee`
  - `POST /promoteAllEmployees`
  - `POST /sortAllEmployeesByName`
  - `POST /sortAllEmployeesBySalary`

# Refactored API

- Let's take an example API of companies that have some `Employees`:
  - `POST /v1/employees`
  - `PUT /v1/employees/:id`
  - `DELETE /v1/employees/:id`
  - `POST /v1/employees/:id/promote`
  - `GET /v1/employees?sort=name_asc,salary_desc&count=12`

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Questions?