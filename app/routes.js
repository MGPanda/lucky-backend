const express = require('express');
const router = express.Router();
const routerUser = require('./routes/RoutesUser');
const routesNews = require('./routes/RoutesNews');
const routesAdoption = require('./routes/RoutesAdoption');
const routesPet = require('./routes/RoutesPet');
const routesAppointment = require('./routes/RoutesAppointment');
const routesSpecies = require('./routes/RoutesSpecies');

router.use('/', routerUser);
router.route('/')
    .get((req, res)=> {
        res.json({ Mesaje: "welcome"});
    });

router.use('/news', routesNews);
router.use('/pet', routesPet);
router.use('/species', routesSpecies);
router.use('/adoption', routesAdoption);
router.use('/appointment', routesAppointment);



module.exports = router;
