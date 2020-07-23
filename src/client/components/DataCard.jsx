import React from 'react';

const DataCard = (props) => {
  const { data, index } = props;

  if (data.title) {
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
              {data.title}
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
            <h6>
              <strong>Overview</strong>
            </h6>
            <p>{data.overview}</p>
            <p>Role: {data.character}</p>
          </div>
        </div>
      </div>
    );
  }
  if (data.name) {
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
              {data.name}
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
            <p>
              <strong>Role: </strong>
              {data.character}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default DataCard;
