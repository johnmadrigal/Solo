const express = require('express');
const axios = require('axios');

const movies = express.Router();

const apiKey = '7da2a5b726e7e85f365949e1c85e722e';
const sampleQuery =
  'https://api.themoviedb.org/3/search/person?api_key=7da2a5b726e7e85f365949e1c85e722e&language=en-US&query=Paul%20Rudd&page=1&include_adult=false';

const movieCreditQuery =
  'https://api.themoviedb.org/3/person/22226/movie_credits?api_key=7da2a5b726e7e85f365949e1c85e722e&language=en-US';

movies.get('/', (req, res) => {
  res.status(200).send('Backend connected to movies router');
});

movies.post('/', (req, res) => {
  console.log('NODE_ENV', process.env.NODE_ENV);
  const { actor } = req.body;
  const actorString = actor.split(' ').join('%20');
  // console.log(actorString);
  const actorQuery = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${actorString}&page=1&include_adult=false`;

  axios
    .get(actorQuery)
    .then((data) => {
      // console.log('data.data.results[0]', data.data.results[0]);
      const actorCreditsQuery = `https://api.themoviedb.org/3/person/${data.data.results[0].id}/movie_credits?api_key=${apiKey}&language=en-US`;

      axios.get(actorCreditsQuery).then((movieCredits) => {
        // console.log(movieCredits.data);
        // .catch((err) => console.log('err from moviecreds', err));
        const payload = {
          actor: data.data.results[0],
          credits: movieCredits.data,
        };
        // data.data.results
        res.status(200).json(payload);
      });
    })
    .catch((err) => console.log('err', err));
  // res.status(200).send(`Successful post request with ${actor}`);
});

module.exports = movies;
