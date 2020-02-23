const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');
const bodyParser = require ('body-parser');

const mysql = require('mysql');
//password is stored as a environment
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.mysqlPassword,
    database: 'world'
});

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./middleware/confirmDevice')(app,express,multer,path);
require('./middleware/confirmURL')(app,express,multer,path);
require('./routes/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/views'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));