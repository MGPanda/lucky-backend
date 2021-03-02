const express = require('express');
const passport = require('passport');

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const petController = require('./controllers/petController');
const router = express.Router();

router.route('/')
    .get((req, res)=> {
        res.json({ Mesaje: "welcome"});
    });
 

//LOGIN ROUTES//

router.route('/login')
    .post(passport.authenticate('login-local', { session: false }), authController.getToken);

router.route('/register')
    .post(userController.createUser);


router.route('/logout')
    .get(function(req, res){
        req.logout();
        res.redirect('/');
      });

/*
router.route('/test')
    .get(
        authController.verifyToken, 
        userController);*/
//USER ROUTES//


//PET ROUTES//

router.route('/pets')
.post(petController.addPet)


module.exports = router;
