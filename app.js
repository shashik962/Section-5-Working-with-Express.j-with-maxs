
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
      console.log('This always run!');
      next();
});

app.use('/add-product', (req, res, next) => {
      console.log('In the another middleware here!');
      res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
});

app.use('/', (req, res, next) => {
      console.log('In the another middleware here!');
      res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
