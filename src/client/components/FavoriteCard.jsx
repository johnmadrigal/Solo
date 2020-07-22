import React from 'react';

const FavoriteCard = (props) => {
  const { name } = props;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default FavoriteCard;
