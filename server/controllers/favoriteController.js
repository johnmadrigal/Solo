const Favorite = require('../models/favoritesModel');

const favoriteController = {};

favoriteController.createFavorite = (req, res, next) => {
  Favorite.create({ name: 'test0' }, (err, fav) => {
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
