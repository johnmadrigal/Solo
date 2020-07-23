import React from 'react';
import DataCard from './DataCard.jsx';

const DataContainer = (props) => {
  if (Object.keys(props.data).length === 0) {
    return <h3>No Data</h3>;
  }
  if (props.data.actor) {
    // console.log(props.data);
    return (
      <div>
        <h3>{props.data.actor.name}</h3>
        <div className="accordion" id="accordionExample">
          {props.data.credits.cast.map((movie, idx) => (
            <DataCard key={movie.credit_id} movie={movie} index={`collapse${idx}`} />
          ))}
          {/* <h3>
            Known for
            {props.data.credits.cast.map((movie) => (
              <li key={movie.credit_id}>
                {movie.title} ({movie.release_date})- {movie.character}
              </li>
            ))}
          </h3> */}
        </div>
      </div>
    );
  }
  if (props.data.movieName) {
    return (
      <div>
        <h3>{props.data.movieName}</h3>
        <div className="accordion">
          <h3>
            Cast members:
            {props.data.cast.map((actor) => (
              <li key={actor.id}>
                {actor.name} - {actor.character}
              </li>
            ))}
          </h3>
        </div>
      </div>
    );
  }
};

export default DataContainer;
