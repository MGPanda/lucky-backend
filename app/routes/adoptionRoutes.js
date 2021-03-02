const express = require('express');

// const config = require('./config');

const adoptionController = require('../controllers/adoptionController');

const router = express.Router();

router.route('/adoption')
    .get(adoptionController.listAdoptions)
    .post(adoptionController.createAdoption);


router.route('/adoption/:id')
    .get(adoptionController.findAdoptionById)
    .patch(adoptionController.deactivateAdoption);

// router.route('/img')
//     .post(imgController.single('img'), function (req, res) {
//         if (req.file) {
//             res.json({
//                 url: 'http://' + config.server.host + ':' + config.server.port + '/' + req.file.filename
//             });
//         } else {
//             res.json({
//                 error: 'Imagen no soportada'
//             });
//         }

//     });

module.exports = router;