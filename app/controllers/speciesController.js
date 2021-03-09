const Species = require('../models/Species');


async function listSpecies(req, res){
    try {
        const results = await Species.find();
        res.json({results: results})
    } catch (error) {
        res.json({errors: error.message});
    }
}

async function createSpecies(req, res) {
    try {
        const newSpecies = new Species (req.body);
        console.log(req.body);
        await newSpecies.save();

        res.json({
            saved: true,
            newSpecies
        });
    
    }
    catch (err) {

        res.json({
            error: 'Error al consultar DB!'
        });
    }
}

module.exports={
    listSpecies,
    createSpecies
}