import React from 'react';

const FavoriteCard = (props) => {
  const { subject, handleRemove } = props;
  return (
    <div className="fav">
      <button id={subject._id} onClick={handleRemove}>
        -
      </button>
      <h3>{subject.name}</h3>
    </div>
  );
};

export default FavoriteCard;
