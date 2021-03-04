const User = require('../models/User');



/**
 * @param {array} formdata
 * @returns {json}
 */

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);        
        await newUser.save();
        res.json({saved: true, newUser});
    }
    catch(err) {
        console.log(err);
        res.json({error: 'Error al consultar DB!'});
    }
}
/**
 * @param {String} email
 * @returns {Promise}
 */
function getUserByEmail(email) {
    return User.findOne({email: email});
}

/**
 * @param {String} userId
 * @returns {Promise}
 */
function getUser(userId) {
    return User.findById(userId);
}

/**
 * @returns {json}
 */
function listUsers(req, res) {
        
        User.find().then(function (Users) {
            res.send(Users);
        });
        
    }


module.exports = {
    createUser,
    getUserByEmail,
    getUser,
    listUsers,

};
