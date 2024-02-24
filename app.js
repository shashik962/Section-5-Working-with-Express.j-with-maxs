
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
      console.log('This always run!');
      next();
});


app.use('/admin', adminRoutes);
app.use(shopRoutes);




app.use((req, res, next) => {
      res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);
