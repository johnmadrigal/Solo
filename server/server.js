const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');

const favoritesRouter = require(path.resolve(__dirname, './routes/favorites.js'));

const moviesRouter = require(path.resolve(__dirname, './routes/movie.js'));

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '../')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.use('/movies', moviesRouter);

app.use('/favorites', favoritesRouter);
// app.get('/api', (req, res) => res.send)

app.use('*', (req, res) => {
  res.status(400).send('Bad Request');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware',
    status: 400,
    message: { err: 'An error occurred' },
  };
  return res.status(400).json(defaultErr.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
