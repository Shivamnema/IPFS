const express = require('express');
const IPFS = require('ipfs');
const bodyParser = require('body-parser')
const app = express();
const fileUpload = require('./routes/fileupload.js');


const node = new IPFS();


//middleware
app.use(bodyParser.json());

//Routes
app.use('/fileUpload', fileUpload);


//Server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log('Servering on Port: ', port)});