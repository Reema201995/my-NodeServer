const express = require('express');
const app = express();
const path = require("path");
const compression = require('compression');
const cors = require('cors');
const routes = express.Router();

// frontend or UI will be listened on port 3000. 
app.use(cors({origin: ['http://localhost:3000']}));

require('./conection.js');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Here we connect to the static html file/files 
app.use(express.static(path.join(__dirname, './your-directory-name')));

require('./router')(routes);
app.use('/api', routes);

module.exports = app;