const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesSpecies = express.Router();
const speciesController = require('../controllers/speciesController');



/* routesSpecies.route('/test')
.get((req, res)=> {
    res.json({ Mesaje: "adoptiontest"});
}); */
routesSpecies.route('/register')
    .post(speciesController.createSpecies);



routesSpecies.route('/')
.get(speciesController.listSpecies)



module.exports = routesSpecies;