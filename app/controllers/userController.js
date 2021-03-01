const User = require('../models/User');
const crudUser = require('../business/crudUser');


async function createUser(req, res) {
    try {
       // const {name, username,password}= req.body;

        const newUser = new User(req.body);
       
        
        await newUser.save();
        res.json({saved: true, newUser});
    }
    catch(err) {
        console.log(err);
        res.json({error: 'Error al consultar DB!'});
    }
}

async function logout(req, res) {
    res.json({a: 'hola'});
};

async function Login(req, res) {
    /* try {
        crudUser.getUserByUsername(req.body.username)
        .then(function (userFound) {
           // res.json(userFound);
                if (userFound) {
                    if (userFound.checkPassword(req.body.password)) {
                        res.json(userFound);
                        //return done(null, userFound);
                    }
                    else {
                      //  done(null, false);
                      res.status(404).send("Datos incorrectos");
                    }
                }
                else {
                   // done(null, false);
                   res.status(404).send("Datos incorrectos");
                } 
            });
    } catch(err) {
        console.log(err);
        res.json({error: 'Error al consultar DB!'});
    } */
}


module.exports = {
    createUser,
    Login,
    logout,
};
