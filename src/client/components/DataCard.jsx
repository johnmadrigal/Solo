import React from 'react';

const DataCard = (props) => {
  console.log(props);
  if (Object.keys(props.data).length === 0) {
    return <h3>no data</h3>;
  }
  if (props.data.actor) {
    return (
      <div>
        <h3>{props.data.actor.name}</h3>
        <h3>
          Known for
          {props.data.credits.cast.map((movie) => (
            <li key={movie.credit_id}>
              {movie.title} ({movie.release_date})- {movie.character}
            </li>
          ))}
        </h3>
      </div>
    );
  }
  if (props.data.movieName) {
    return (
      <div>
        <h3>{props.data.movieName}</h3>
        <h3>
          Cast members:
          {props.data.cast.map((actor) => (
            <li key={actor.id}>
              {actor.name} - {actor.character}
            </li>
          ))}
        </h3>
      </div>
    );
  }
};

export default DataCard;
