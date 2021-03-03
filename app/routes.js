const express = require('express');


const router = express.Router();
const routerUser = require('./routes/RoutesUser');
const routesNews = require('./routes/RoutesNews');
const routesAdoption = require('./routes/RoutesAdoption');
const routesPet = require('./routes/RoutesPet');
const routesAppointment = require('./routes/RoutesAppointment');
const routesSpecies = require('./routes/RoutesSpecies');
const routesApplication = require('./routes/RoutesApplication');
const routesVisit = require('./routes/RoutesVisit');
const routesImg = require('./routes/RoutesImg');

router.use('/', routerUser);
router.route('/')
    .get((req, res) => {
        res.json({
            Mensaje: "welcome"
        });
    });

router.use('/news', routesNews);
router.use('/pet', routesPet);
router.use('/species', routesSpecies);
router.use('/adoption', routesAdoption);
router.use('/appointment', routesAppointment);
router.use('/application', routesApplication);
router.use('/visit', routesVisit);
router.use('/img', routesImg);


module.exports = router;