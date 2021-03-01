const bodyParser = require('body-parser');

const routes = require('../routes');

//Este archivo configura Express. inicia el Bodyparser y asigna las rutas// 
function expressLoader(app) {

    app.use(bodyParser.json());

    app.use(routes);

    app.use(function (req, res) {
        res.status(404).json({ error: 'Not found' });
    });
}

module.exports = expressLoader;
