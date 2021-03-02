const applicationController = require('../controllers/applicationController');
const express = require('express');
const routesApplication = express.Router();

// routesApplication.route('/test')
//     .get((req, res) => {
//         res.json({
//             Mesaje: "applicationtest"
//         });
//     });

routesApplication.route('/')
    .get(applicationController.listApplications)
    .post(applicationController.createApplication);

routesApplication.route('/user/:id')
    .get(applicationController.listApplicationsByUserId);

module.exports = routesApplication;