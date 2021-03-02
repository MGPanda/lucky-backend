const Adoption = require('../models/Adoption');

async function listAdoptions(req, res) {
    try {
        const result = await Adoption.find();
        res.json({
            results: result
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

async function findAdoptionById(req, res) {
    try {
        const result = await Adoption.findById(req.params.id);
        res.json({
            results: result
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

async function createAdoption(req, res) {
    try {
        const newAdoption = new Adoption(req.body);
        await newAdoption.save();
        res.json({
            saved: true
        });
    } catch (err) {
        res.json({
            saved: false
        });
    }
}

async function deactivateAdoption(req, res) {
    try {
        await Adoption.findByIdAndUpdate(req.params.id, {
            active: false,
        });
        res.json({
            saved: true
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}


// no hacer caso a esto porque no está bien
async function changeStatus(req, res) {
    try {
        const result = listAdoptions();
        result.applicants.forEach(applicant => {
            if (applicant.applicant.idUser === req.params.idUser) {
                applicant.status = req.body.status;
            }
        });
        // await Adoption.findOneAndUpdate(req.params.id, {
        //     applicants: req.body.status,
        // });
        // res.json({
        //     saved: true
        // });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

// esto tampoco funciona, es solo ideas
async function addApplicant(req, res) {
    try {
        const adoptions = await Adoption.find();
        // console.log(adoptions);

        const result = [];
        adoptions.forEach(adoption => {
            console.log(adoption.petId);
            console.log(req.params.petId);
            let id = adoption.petId;
            if (id === req.params.petId) {
                console.log('hola');
                // result.push(adoption);
            }
        });
        // const result = adoptions.filter(adoption => adoption.petId === req.params.petId);
        // console.log(result);
        res.json({
            results: adoptions
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }


    // try {
    //     const adoptions = await Adoption.find();
    //     await Adoption.findByIdAndUpdate(req.params.id, {
    //         name: req.body.name,
    //     });
    //     res.json({
    //         saved: true
    //     });

    // } catch (err) {
    //     res.json({
    //         error: 'Error al consultar la base de datos'
    //     });
    // }
}


module.exports = {
    listAdoptions,
    findAdoptionById,
    createAdoption,
    deactivateAdoption,
    changeStatus,
    addApplicant
}