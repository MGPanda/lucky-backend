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

async function getShelter(req, res) {
    try {
        const result = await Shelter.findById(req.params.id);
        res.json({result: result})
        
    } catch (error) {

        res.json({errors: error.message})
    }
}

/**
 * @returns {Promise}
 */
function listShelters(req, res) {

    Shelter.find().then(function (shelter) {
        res.send(shelter);
    });
    
}

async function editShelter(req, res){

    try {
        Shelter.findOneAndUpdate({_id: req.params.id}, req.body);

        res.json({modify: Shelter});

    } catch (error) {

        res.json({error: error.message});
    }
   
}

module.exports = {
    createShelter,
    getShelterByEmail,
    getShelter,
    listShelters,
    editShelter,

};
