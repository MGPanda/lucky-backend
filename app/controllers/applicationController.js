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
        const applications = await Application.find();
        const result = applications.filter(application => application.userId == req.params.id);
        const id = result[0]._id;
        const userApplications = await Application.findById(id);
        res.json({
            results: userApplications
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

module.exports = {
    listApplications,
    createApplication,
    listApplicationsByUserId
}