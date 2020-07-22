import React from 'react';

const FavoriteCard = (props) => {
  const { subject } = props;
  return (
    <div>
      <h3>{subject.name}</h3>
    </div>
  );
};

export default FavoriteCard;
