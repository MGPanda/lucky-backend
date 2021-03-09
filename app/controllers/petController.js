const Pet = require('../models/Pet');


async function listPets(req, res) {
    try {
        const results = await Pet.find();
        res.json({
            results: results
        });
    } catch (error) {
        res.json({
            errors: error.message
        })
    }
}

async function listPetId(req, res) {
    try {
        const result = await Pet.findById(req.params.id).populate('species').populate('shelter').exec();
        res.json({
            result: result
        })

    } catch (error) {
        res.json({
            errors: error.message
        })
    }
}

async function addPet(req, res) {
    try {
        const thisPet = new Pet(req.body);
        await thisPet.save();
        res.json({
            results: [thisPet]
        });
    } catch (error) {
        res.json({
            errors: error.message
        });
    }
}

async function deletePet() {
    try {

        await Pet.findByIdAndDelete(req.params.id);
        res.json({
            delete: true
        });

    } catch (error) {
        res.json({
            error: error.message
        });
    }
}

async function editPet(req, res) {

    try {

        Pet.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        res.json({
            modify: pet
        });
    } catch (error) {

        res.json({
            error: error.message
        });
    }

}






module.exports = {
    addPet,
    listPets,
    listPetId,
    editPet,
    deletePet
}