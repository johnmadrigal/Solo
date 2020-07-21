const express = require('express');
cnst axios = require('axios');

const movies = express.Router();

const apiKey = '7da2a5b726e7e85f365949e1c85e722e';

movies.get('/', (req, res) => {
  res.status(200).send('Backend connected to movies router');
});

movies.post('/', (req, res) => {
  const { actor } = req.body;

  res.status(200).send(`Successful post request with ${actor}`);
});

module.exports = movies;
