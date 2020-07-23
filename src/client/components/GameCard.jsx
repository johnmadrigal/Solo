import React from 'react';

const GameCard = (props) => {
  const { data } = props;

  const cardStyle = (sub) => {
    if (sub.subject === 'actor') return 'actor';
    return 'movie';
  };

  return (
    <div className="gameCard">
      <div className={cardStyle(data)}>{data.subject}</div>
      <div>{data.name}</div>
    </div>
  );
};

export default GameCard;
