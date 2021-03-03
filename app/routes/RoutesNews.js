const newController = require('../controllers/newController');
const express = require('express');
const routesNews = express.Router();

routesNews.route('/')
    .get(newController.listNews)
    .post(newController.createNew);

module.exports = routesNews;