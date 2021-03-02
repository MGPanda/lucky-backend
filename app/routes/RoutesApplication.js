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
    .get(applicationController.listApplications) // listar todas las solicitudes
    .post(applicationController.createApplication); // crear nueva solicitud

routesApplication.route('/:id')
    .patch(applicationController.changeStatusById); // cambiar el estado de una solicitud pasando su id por param

routesApplication.route('/user/:id')
    .get(applicationController.listApplicationsByUserId); // listar las solicitudes de un usario concreto (pasamos el userId por param)

module.exports = routesApplication;