const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesPet = express.Router();
const petController = require('../controllers/petController');


/* routesPet.route('/test')
.get((req, res)=> {
    res.json({ Mesaje: "adoptiontest"});
}); */
//PET ROUTES//

routesPet.route('/')
.get(petController.listPets)
.post(petController.addPet)


module.exports = routesPet;