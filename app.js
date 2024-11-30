const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let tasks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect('/');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
