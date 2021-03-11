const  favoriteController = require('../controllers/favoritesController');
const express = require('express');

const authController = require('../controllers/authController');
const routesFavorite = express.Router();

 //  .all(authController.verifyToken) PARA RESTRINGIR EL ACCESO  

routesFavorite.route('/add')
    .post(favoriteController.createFavorite);

routesFavorite.route('/list/:id') //hay q pasarle el id de usuario para que liste sus favs
    .get(favoriteController.listFavorites);

routesFavorite.route('/favs/:id') //hay q pasarle el id de usuario para que liste sus favs
    .get(favoriteController.listFavoritesPets);  

routesFavorite.route('/list')
    .post(favoriteController.findFavorite);

routesFavorite.route('/remove/:id') //el id del favorito
    .get(favoriteController.removeFavorites);

    
module.exports = routesFavorite;