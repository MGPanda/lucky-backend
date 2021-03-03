const newController = require('../controllers/newController');
const express = require('express');
// const passport = require('passport');
// const authController = require('../controllers/authController');
const routesNews = express.Router();

// routesNews.route('/test')
// .get((req, res)=> {
//     res.json({ Mesaje: "adoptiontest"});
// });

routesNews.route('/')
    .get(newController.listNews)
    .post(newController.createNew);

module.exports = routesNews;