// Require Modules
const express = require('express');
const indexRouter = require("./routes/index");
const entrysRouter = require("./routes/entrys");
const morgan = require('morgan');
const methodOverride = require('method-override')
const port = process.env.PORT || 3000;


// Create the Express App
const app = express();

require('dotenv').config()
require('./config/database');

// Configure the App (app.set)

// We'll use the ejs view engine
app.set('view engine', 'ejs');

// Mount Middleware (app.use)
app.use(function(req, res, next){
  console.log("Time middleware activated")
  // Add a time property to the req object:
  req.time = new Date().toLocaleTimeString();
  next();
})

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));

// Mount Routes
app.use('/', indexRouter);
app.use('/entrys', entrysRouter);


// Tell the App to Listen (AKA the web server) on Port 3000
app.listen(port, function() {
  console.log("Express is listening on port 3000...")
})