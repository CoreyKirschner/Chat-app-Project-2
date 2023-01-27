const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/questions', (req, res) => {
  // code to handle getting all questions
});

app.post('/questions', (req, res) => {
  // code to handle creating a new question
});

// other routes for updating, deleting, etc

module.exports = app;