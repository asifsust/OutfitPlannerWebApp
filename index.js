var express = require ('express');

const app = express();
const port = 8000;

require('./routes/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));