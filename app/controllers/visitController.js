const Visit = require('../models/Visit');


async function postVisit(req, res) {
    try {
        const visit = new Visit(req.body);
        await visit.save();
        res.json({saved: true});
    } catch (e) {
        res.json({error: e.message});
    }
}

async function getVisits(req, res) {
    try {
        const result = Visit.find();
        res.json({result: result});
    } catch (e) {
        res.json({error: e.message});
    }
}

async function getVisit(req, res) {
    try {
        const result = Visit.findById(req.params.id);
        res.json({visit: result});
    } catch (e) {
        res.json({error: e.message});
    }
}

async function patchVisit(req, res) {
    try {
        const result = Visit.findOneAndUpdate(/*TODO Params?*/);
    } catch (e) {
        res.json({error: e.message});
    }
}

async function deleteVisit(req, res) {
    try {
        const visit = Visit.findByIdAndDelete(req.params.id);
        res.json({deleted: visit});
    } catch (e) {
        res.json({error: e.message});
    }
}

module.exports = {
    postVisit,
    getVisit,
    getVisits,
    patchVisit,
    deleteVisit,
}