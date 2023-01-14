const express = require('express');
const app = express();

const fs = require("fs");

const engines = require('consolidate');
const hbs = require('handlebars');

const path = require('path'); 

app.set('port', (process.env.PORT || 3000));

//app.use(express.static('/views'));
app.use(express.static(path.join(__dirname, '/views')));

app.engine('hbs', engines.handlebars);
app.set('view engine', 'hbs');


app.get('/', function (request, response) {
    response.render('index');
});

app.get('/portfolio', function (request, response) {
  response.render('portfolio');
});


// endpoint for /resume
app.get('/resume', function (request, response) {
  // express.js
  response.download('./docs/Nicolas Schroeder CV.pdf');
});



app.listen(app.get('port'));
console.log('listening 3000');
