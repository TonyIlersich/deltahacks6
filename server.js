// includes
const express = require('express');
const bodyParser = require('body-parser');

console.log('server starting...');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}`);
app.use(bodyParser.urlencoded());

// This exposes client files to the browser
app.use(express.static('build'));

// This endpoint provides the index.ejs file
app.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server running on port ${port}`));