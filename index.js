const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 8000;

//to upload and image
require('./middleware/setCategories.js')(app,express,multer,path);
require('./routes/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/views'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));