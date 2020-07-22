import React from 'react';
import AddFavorite from './AddFavorite.jsx';
import FavoriteCard from './FavoriteCard.jsx';

const FavoritesContainer = (props) => {
  const { favorites, handleAdd, favSubject, handleFavSubject } = props;
  return (
    <div className="favContainer">
      <AddFavorite
        handleAdd={handleAdd}
        favSubject={favSubject}
        handleFavSubject={handleFavSubject}
      />
      {favorites.map((fav) => (
        <FavoriteCard name={fav} />
      ))}
    </div>
  );
};

export default FavoritesContainer;
