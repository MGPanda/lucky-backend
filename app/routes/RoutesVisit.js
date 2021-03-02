const visitController = require('../controllers/visitController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const visitRouter = express.Router();

visitRouter.route("/delete/:id")
    .delete(visitController.deleteVisit);

// const userController = require('../controllers/userController');
// const express = require('express');
// const passport = require('passport');
// const authController = require('../controllers/authController');
// const routerUser = express.Router();
// //LOGIN ROUTES//
//
//
// routerUser.route('/login')
//     .post(passport.authenticate('login-local', { session: false }), authController.getToken);
//
// routerUser.route('/register')
//     .post(userController.createUser);
//
//
// routerUser.route('/logout')
//     .get(function(req, res){
//         req.logout();
//         res.redirect('/');
//     });
//
// module.exports = routerUser;
//
// const userController = require('../controllers/userController');
// const express = require('express');
// const passport = require('passport');
// const authController = require('../controllers/authController');
// const routesPet = express.Router();
// const petController = require('../controllers/petController');
//
//
// /* routesPet.route('/test')
// .get((req, res)=> {
//     res.json({ Mesaje: "adoptiontest"});
// }); */
// //PET ROUTES//
//
// routesPet.route('/')
//     .get(petController.listPets)
//     .post(petController.addPet)
//
//
// module.exports = routesPet;