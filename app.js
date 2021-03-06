const express = require('express');
const bodyParser = require('body-parser')
const morgan =  require('morgan');
const app = express();
const router = express.Router();

const index = require('./routes/index.js');



//middleware
app.use(bodyParser.json());
app.use(morgan())

//Routes
app.use('/', index);

//Server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log('Servering on Port: ', port)});