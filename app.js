const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require("./config/db");


dotenv.config({ path: "./config/config.env" })

connectDB()

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Handlebars 
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', 
  extname: '.hbs'
}
))
app.set('view engine', '.hbs')

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} on ${PORT} betta go catch it`
  )
);
