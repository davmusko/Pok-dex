const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.set('view engine', 'pug');
// app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
// path.dirname(process.mainModule.filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
