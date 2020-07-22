const express = require('express');
const favoriteController = require('../controllers/favoriteController');

const favorite = express.Router();

favorite.post('/', favoriteController.createFavorite, (req, res) => {
  res.status(200).json(res.locals.fav || {});
});

favorite.get('/', favoriteController.getFavoritesList, (req, res) => {
  res.status(200).json(res.locals.favs || {});
});

favorite.delete(
  '/:id',
  favoriteController.deleteFavorite,
  favoriteController.getFavoritesList,
  (req, res) => {
    res.status(200).json(res.locals.favs || { deleted: 'yep' });
  }
);

module.exports = favorite;
