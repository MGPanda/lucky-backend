const shelterController = require('../controllers/shelterController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesShelter = express.Router();


//LOGIN ROUTES//


routesShelter.route('/login')
    .post(passport.authenticate('login-local-shelter', { session: false }), authController.getToken);

    routesShelter.route('/register')
    .post(shelterController.createShelter);

    routesShelter.route('/logout')
    .get(function(req, res){
        req.logout();
        res.redirect('/');
      });

routesShelter.route('/list')
    .get(shelterController.listShelters);

module.exports = routesShelter;

