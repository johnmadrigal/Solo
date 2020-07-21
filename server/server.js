const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const moviesRouter = require(path.resolve(__dirname, './routes/movie.js'));

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.use('/movies', moviesRouter);
// app.get('/api', (req, res) => res.send)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
