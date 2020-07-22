const Favorite = require('../models/favoritesModel');

const favoriteController = {};

favoriteController.createFavorite = (req, res, next) => {
  const { query } = req.body;
  Favorite.create({ name: query }, (err, fav) => {
    if (err) return next(err);
    res.locals.fav = fav;
    return next();
  });
};

favoriteController.getFavoritesList = (req, res, next) => {
  Favorite.find({}, (err, favs) => {
    if (err) return next(err);
    res.locals.favs = favs;
    return next();
  });
};

module.exports = favoriteController;
