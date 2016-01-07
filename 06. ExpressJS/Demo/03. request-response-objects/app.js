'use strict';

let express = require('express');

let app = express();

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;

let messages = [];

app.get('/api/messages', function(req, res) {
  let page = (req.query.page | DEFAULT_PAGE) - 1;
  let size = (req.query.size | DEFAULT_SIZE) | 0;

  if (isNaN(page) || page < 0 ||
    isNaN(size) || size < 1) {
    res.status(400)
      .json({
        message: 'Invalid page and/or size'
      });
    return;
  }

  let result = messages.sort((m1, m2) => m1.text.localeCompare(m2.text))
    .slice(page * size, (page + 1) * size);

  res.json({
    result
  });
});

app.post('/api/messages', function(req, res) {
  let message = req.body;
  message.id = messages.length + 1;
  messages.push(message);

  res.status(201)
    .json({
      result: message
    });
});

let port = 3003;

app.listen(port, () => console.log(`Server running http://localhost:${port}`));