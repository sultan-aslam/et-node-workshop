const express = require('express');
const app = express();
const port = 5000;

const students = [
  { name: 'John', age: 18 },
  { name: 'Doe', age: 20 }
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs', { students });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
