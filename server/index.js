const express = require('express');
const app = express();
const routes = require("./api")
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/cookbook', (req, res) => {
  res.send('Hello Cookbook!');
});


app.use('/api', routes)

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
