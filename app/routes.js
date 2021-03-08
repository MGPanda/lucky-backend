const express = require('express');


const router = express.Router();
const routesShelter = require('./routes/RoutesShelter');
const routesUser = require('./routes/RoutesUser');
const routesNews = require('./routes/RoutesNews');
const routesPet = require('./routes/RoutesPet');
const routesSpecies = require('./routes/RoutesSpecies');
const routesApplication = require('./routes/RoutesApplication');
const routesVisit = require('./routes/RoutesVisit');
const routesImg = require('./routes/RoutesImg');

router.use('/', routesUser);
router.route('/')
    .get((req, res) => {
        res.json({
            Mensaje: "welcome"
        });
    });

router.use('/shelter', routesShelter);
router.use('/news', routesNews);
router.use('/pet', routesPet);
router.use('/species', routesSpecies);
router.use('/application', routesApplication);
router.use('/visit', routesVisit);
router.use('/img', routesImg);


module.exports = router;