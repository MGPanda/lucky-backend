const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesNews = express.Router();



routesNews.route('/test')
.get((req, res)=> {
    res.json({ Mesaje: "adoptiontest"});
});


module.exports = routesNews;