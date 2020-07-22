const axios = require('axios');

const inputController = {};
const apiKey = '7da2a5b726e7e85f365949e1c85e722e';
const movieQueryHard =
  'https://api.themoviedb.org/3/search/movie?api_key=7da2a5b726e7e85f365949e1c85e722e&language=en-US&query=The%20Lion%20King&page=1&include_adult=false';

inputController.getActor = (req, res, next) => {
  const { query } = req.body;
  const actorString = query.split(' ').join('%20');
  const actorQuery = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${actorString}&page=1&include_adult=false`;

  axios
    .get(actorQuery)
    .then((data) => {
      // if (data.data.total_results === 0)
      if (data.data.total_results === 0) return next();
      //   return res.status(404).send('Could not find actor or movie');
      const actorCreditsQuery = `https://api.themoviedb.org/3/person/${data.data.results[0].id}/movie_credits?api_key=${apiKey}&language=en-US`;

      axios.get(actorCreditsQuery).then((movieCredits) => {
        const payload = {
          actor: data.data.results[0],
          credits: movieCredits.data,
        };
        res.locals.payload = payload;
        // res.status(200).json(payload);
        return next();
      });
    })
    .catch((err) => next(err));
};

inputController.getMovie = (req, res, next) => {
  const { query } = req.body;
  const movieString = query.split(' ').join('%20');
  const movieQuery = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieString}&page=1&include_adult=false`;

  axios
    .get(movieQuery)
    .then((data) => {
      if (data.data.total_results === 0) return next();
      const movieCastQuery = `https://api.themoviedb.org/3/movie/${data.data.results[0].id}/credits?api_key=${apiKey}`;
      //   return res.status(404).send('Could not find actor or movie');
      // console.log(data.data.results[0]);
      axios.get(movieCastQuery).then((response) => {
        // console.log(response.data.cast);
        const cast = response.data.cast.map((actor) => {
          return {
            id: actor.id,
            character: actor.character,
            name: actor.name,
          };
        });
        const payload = {
          cast,
          movieName: data.data.results[0].title,
        };
        console.log(payload);
        res.locals.payload = payload;
        next();
      });
    })
    .catch((err) => next(err));
};

module.exports = inputController;
