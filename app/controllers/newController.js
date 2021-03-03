const New = require('../models/New');

async function listNews(req, res) {
    try {
        const result = await New.find();
        res.json({
            results: result
        });
    } catch (err) {
        res.json({
            error: 'Error al consultar la base de datos'
        });
    }
}

async function createNew(req, res) {
    try {
        const newNew = new New(req.body);
        await newNew.save();
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
    listNews,
    createNew
}