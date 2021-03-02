const Pet = require('../models/Pet');

async function addPet(req , res){
    try {
        const thisPet = new Pet(req.body);
        await thisPet.save();
        res.json({results: [thisPet]});
    } catch (error) {
        res.json({errors: error.message});
    }
}


module.exports = {
    addPet
}