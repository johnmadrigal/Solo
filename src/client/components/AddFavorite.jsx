import React, { useState } from 'react';
import InputCard from './InputCard.jsx';

const AddFavorite = (props) => {
  const { handleAdd, favSubject, handleFavSubject } = props;
  return (
    <div className="addFav">
      <button onClick={handleAdd}>+</button>
      <InputCard
        handleSubmit={handleAdd}
        handleSubject={handleFavSubject}
        currSubject={favSubject}
      />
    </div>
  );
};

export default AddFavorite;
