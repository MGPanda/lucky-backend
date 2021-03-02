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
        // const result = await Adoption.findById(req.params.id).populate('user');
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

// async function editAdoption(req, res) {
//     try {
//         const result = await Adoption.findByIdAndUpdate(req.params.id, {
//             name: req.body.name,
//         });
//         res.json({
//             saved: true
//         });

//     } catch (err) {
//         res.json({
//             error: 'Error al consultar la base de datos'
//         });
//     }
// }

module.exports = {
    listAdoptions,
    findAdoptionById,
    createAdoption,
    deactivateAdoption,
    // editAdoption
}