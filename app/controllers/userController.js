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


async function getUser(req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.json({result: result})
        
    } catch (error) {

        res.json({errors: error.message})
    }
}

/**
 * @returns {json}
 */
function listUsers(req, res) {
        
        User.find().then(function (Users) {
            res.send(Users);
        });
        
    }
    
async function editUser(req, res){

        try {
            User.findOneAndUpdate({_id: req.params.id}, req.body);

            res.json({modify: User});

        } catch (error) {

            res.json({error: error.message});
        }
       
    }


module.exports = {
    
    createUser,
    getUserByEmail,
    getUser,
    listUsers,
    editUser,

};
