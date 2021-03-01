const jwt = require('jsonwebtoken');

const config = require('../config');

function getToken(req, res, next) {
    try {
        const token = jwt.sign(
            req.body,// Desde el cliente nos tienen que pasar un json con username y password
            config.server.secret,
            { expiresIn: config.server.jwt.expiresIn });
        res.status(200).json({ error: false, token });
    }
    catch (err) {
        next(err);
    }
}

function verifyToken(req, res, next) {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, config.server.secret);
            next();
        }
        else {
            res.status(400).json({ error: true, message: 'Lack of authorization header' });
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    getToken,
    verifyToken,
};
