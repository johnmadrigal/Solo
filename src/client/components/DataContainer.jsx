import React from 'react';
import DataCard from './DataCard.jsx';

const DataContainer = (props) => {
  const { data } = props;

  if (Object.keys(data).length === 0) {
    return <div />;
  }
  if (data.actor) {
    return (
      <div>
        <h3>{data.actor.name}</h3>
        <div className="accordion" id="accordionExample">
          {data.credits.cast.map((movie, idx) => (
            <DataCard key={movie.credit_id} data={movie} index={`collapse${idx}`} />
          ))}
        </div>
      </div>
    );
  }
  if (props.data.movieName) {
    return (
      <div>
        <h3>{data.movieName}</h3>
        <div className="accordion" id="accordionExample">
          Cast members:
          {data.cast.map((actor, idx) => (
            <DataCard key={actor.credit_id} data={actor} index={`collapse${idx}`} />
          ))}
        </div>
      </div>
    );
  }
};

export default DataContainer;
