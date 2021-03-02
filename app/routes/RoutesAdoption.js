const adoptionController = require('../controllers/adoptionController');
const express = require('express');
const routesAdoption = express.Router();

// routesAdoption.route('/test')
//     .get((req, res) => {
//         res.json({
//             Mesaje: "adoptiontest"
//         });
//     });

routesAdoption.route('/')
    .get(adoptionController.listAdoptions)
    .post(adoptionController.createAdoption);


routesAdoption.route('/:id')
    .get(adoptionController.findAdoptionById);


routesAdoption.route('/deactivate/:id')
    .patch(adoptionController.deactivateAdoption);

// estas dos últimas rutas no funcionan.
routesAdoption.route('/status/:id/:idUser')
    .patch(adoptionController.changeStatus);

routesAdoption.route('/add/:petId')
    .get(adoptionController.addApplicant);

module.exports = routesAdoption;