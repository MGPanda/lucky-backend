const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routerUser = express.Router();
//LOGIN ROUTES//


routerUser.route('/login')
    .post(passport.authenticate('login-local', { session: false }), authController.getToken);

    routerUser.route('/register')
    .post(userController.createUser);


    routerUser.route('/logout')
    .get(function(req, res){
        req.logout();
        res.redirect('/');
      });

module.exports = routerUser;

