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

favoriteController.deleteFavorite = (req, res, next) => {
  const { id } = req.params;
  Favorite.findOneAndDelete({ _id: id }, (err, data) => {
    if (err) return next(err);
    res.locals.deleted = data;
    return next();
  });
};

module.exports = favoriteController;
