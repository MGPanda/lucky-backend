const Shelter = require('../models/Shelter');



/**
 * @param {array} formdata
 * @returns {json}
 */

async function createShelter(req, res) {
    try {
        const newShelter = new Shelter(req.body);        
        await newShelter.save();
        res.json({saved: true, newShelter});
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
function getShelterByEmail(email) {
    return Shelter.findOne({email: email});
}

/**
 * @param {String} shelterId
 * @returns {Promise}
 */
function getShelter(shelterId) {
    return Shelter.findById(shelterId);
}

/**
 * @returns {Promise}
 */
function listShelters(req, res) {
    //return Shelter.find();
    Shelter.find().then(function (shelter) {
        res.send(shelter);
    });
    
}

module.exports = {
    createShelter,
    getShelterByEmail,
    getShelter,
    listShelters,

};
