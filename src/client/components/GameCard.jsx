import React from 'react';

const GameCard = (props) => {
  const { data, idx } = props;

  const cardStyle = (sub) => {
    if (sub.subject === 'actor') return 'actor';
    return 'movie';
  };

  return (
    <div className="gameCard" id={`card${idx}`}>
      <div className={`${cardStyle(data)}`}>{data.subject}</div>
      <div className="name">{data.name}</div>
    </div>
  );
};

export default GameCard;
