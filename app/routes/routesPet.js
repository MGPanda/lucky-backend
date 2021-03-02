const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesPet = express.Router();



routesPet.route('/test')
.get((req, res)=> {
    res.json({ Mesaje: "adoptiontest"});
});


module.exports = routesPet;