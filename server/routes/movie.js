const express = require('express');
const axios = require('axios');
const inputController = require('../controllers/inputController.js');

const movies = express.Router();

const apiKey = '7da2a5b726e7e85f365949e1c85e722e';
const sampleQuery =
  'https://api.themoviedb.org/3/search/person?api_key=7da2a5b726e7e85f365949e1c85e722e&language=en-US&query=Paul%20Rudd&page=1&include_adult=false';

const movieCreditQuery =
  'https://api.themoviedb.org/3/person/22226/movie_credits?api_key=7da2a5b726e7e85f365949e1c85e722e&language=en-US';

movies.get('/', (req, res) => {
  res.status(200).send('Backend connected to movies router');
});
// console.log('NODE_ENV', process.env.NODE_ENV);

movies.post('/', inputController.getMovie, inputController.getActor, (req, res) => {
  res.status(200).send(res.locals.payload || {});
});

module.exports = movies;
