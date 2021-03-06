const Application = require('../models/Application');

// una asociacion puede listar todas las solicitudes que tenga
async function listApplications(req, res) {
    try {
        const result = await Application.find();
        res.json({
            results: result
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

//lista las adopciones de un usuario concreto
async function listApplicationsByUserId(req, res) {
    try {
        const applications = await Application.find().populate({
            path: 'pet',
            select: ['name', 'city', 'gender', 'images', '_id'] // solo selecciono los datos que necesito en front
        });
        const result = applications.filter(application => application.userId == req.params.id); // en result guardamos todas las solicitudes realizadas por un id concreto
        res.json({
            results: result
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

// cuando el user rellena el formulario de adopcion, se crea una nueva solicitud
async function createApplication(req, res) {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.json({
            saved: true
        });
    } catch (err) {
        res.json({
            saved: false
        });
    }
}

// podemos cambiar el estado de una solicitud
async function changeStatusById(req, res) {
    try {
        await Application.findByIdAndUpdate(req.params.id, {
            status: req.body,
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

module.exports = {
    listApplications,
    createApplication,
    listApplicationsByUserId,
    changeStatusById
}