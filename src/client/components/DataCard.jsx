import React from 'react';

const DataCard = (props) => {
  const { movie, index } = props;
  console.log(movie);
  return (
    <div className="card">
      <div className="card-header" id="headingOnes">
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target={`#${index}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {movie.title}
          </button>
        </h2>
      </div>

      <div
        id={index}
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <h6>Overview</h6>
          <p>{movie.overview}</p>
          <p>Role: {movie.character}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
