const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesUser = express.Router();


//LOGIN ROUTES//


routesUser.route('/login')
    .post(passport.authenticate('login-local', { session: false }), authController.getToken);

    routesUser.route('/register')
    .post(userController.createUser);

    routesUser.route('/logout')
    .get(function(req, res){
        req.logout();
        res.redirect('/');
      });

      routesUser.route('/list')
    .get(userController.listUsers);

module.exports = routesUser;

