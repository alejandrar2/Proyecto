const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());

app.use(express.static('public'));//use se utiliza para ejecutar middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log('Servidor montado en el puerto 3000');
});