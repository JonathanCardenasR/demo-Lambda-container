//Imports
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const router = require('./src/routes/routes');


const PORT = 5000;

//Routes


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}. http://localhost:${4200}/`)
});