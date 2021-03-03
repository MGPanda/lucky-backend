const bodyParser = require('body-parser');

const router = require('../routes');


//Este archivo configura Express. inicia el Bodyparser y asigna las rutas// 
function expressLoader(app) {

    app.use(bodyParser.json());

    app.use(router);
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    })

    app.use(function (req, res) {
        res.status(404).json({
            error: 'Not found'
        });
    });
}

module.exports = expressLoader;