# Task 1: Promisify

Asynchronous functions in Node.js often accept a callback as their last argument. That callback looks like that:

```js
function cb(error, result) {
    // ...
}
```

Functions like `fs.readFile`, `fs.writeFile` and `fs.readdir` all accepts such callbacks as their last parameter.

Your task is to write a function called `promisify`, which accepts a functions that takes a callback as a last parameters and converts
that function to a function that does not accept a callback, but instead returns a promise. To get a better understanding, see the use
cases of `promisify` that are shown below:

```js
/**
 * @param {function}
 * @returns {function}
 */
function promisify(asyncFn) {
    // you code here
}
```

```js
const fs = require('fs');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

readFile(__filename).then(console.log); // should print contents of this file
readdir('./').then(console.log); // should print file names in current dir

readFile('./john/george/something.txt')
    .then(console.log)
    .catch(error => console.log('error', error)); // should print error if the path is invalid
```

# Task 2: Get request
Implemented the following function that performs HTTP GET requests using the native `http` module. Read the JSDoc comments for more specific information.

```js
'use strict';

const http = require('http');

/**
 * Performs an HTTP GET request the provided url, with the provided headers and timeout limit.
 * @param {string} url - url to which the get request will be sent.
 * @param {Map.<string, string>} headers - all headers that should be set to the request in the form of key-value pairs.
 * @param {number} timeout - time in milliseconds after which, if the response has not arrived, the request is considered failed.
 * @returns {Promise.<string>} - Promise that resolves when the request is successful and is rejected in case of timeout or error.
 */
function httpGet(url, headers, timeout) {
    // you code
}
```

# Task 3: Parallel get requests

Your task is to implement a function that performs concurrent **GET** requests and writes the responses of those requests in files.
The function has the following signature:

```js
/**
 * Performs concurrent http get requests to the given urls and writes the responses to the specified directory.
 * @param {[string]} urls - an array of urls to which you should make get requests.
 * @param {*} concLimit - the maximum number of requests that are allowed to run concurrently.
 * @param {*} timeout - is the time in milliseconds after which you should signal a timeout to a request to a url.
 * @param {*} destDir - the path to the directory in which you should save the responses from the requests.
 * @returns {Promise} - resolved when all downloads complete successfully and rejected otherwise.
 */
function httpGetConcurrent(urls, concLimit, timeout, destDir) {
    // your code
}
```

- use the names of the urls to name the destination files.
    - for example, you can download the url `https://google.com` in `destDir/google-com.txt`.

Here are some sample use cases of `httpGetConcurrent`:

```js
const urls = ['https://google.com', 'https://protonmail.com', 'https://telerikacademy.com'];

httpGetConcurrent(urls, 2, 3000, './downloads').then(() => console.log('done'));
```

- this should initially fire two **GET** requests. When one of them completes or times out, the third get request should be fired.
    - responses should be saved in `./downloads`
    - time out for a request is 3 seconds


```js
const urls = ['https://nodejs.org', 'https://nodeschool.io', 'https://gmail.com', 'https://youtube.com'];

httpGetConcurrent(urls, 10, 3000, './stuff').then(() => console.log('done'));
```

- since `urls.length` < `concLimit`, all requests are fired at the start.

## Bonus
- Implement **retry count** for requests - how many times a request should be retried if it fails.
- Handle or implement error handling of your choice for file system problems and errors. Some cases to consider:
    - `destDir` does not exist
    - not enough disk space
    - write to disk fails for some other reason
