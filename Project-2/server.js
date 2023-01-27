const express = require('express');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

const routes = require('./config/routes.js');

const app = express()

app.use('/', routes);

// Configure express-session middleware
app.use(expressSession({
  secret: '8242010',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// Configure cookie-parser middleware
app.use(cookieParser());

// Configure handlebars as the template engine for the express app
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');