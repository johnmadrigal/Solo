import React from 'react';

const DataCard = (props) => {
  console.log(props);
  if (!props.data.actor) {
    return <h3>no data</h3>;
  }
  return (
    <div>
      <h3>{props.data.actor.name}</h3>
      <h3>
        Known for
        {props.data.credits.cast.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </h3>
    </div>
  );
};

export default DataCard;
