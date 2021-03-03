const bodyParser = require('body-parser');

const router = require('../routes');


//Este archivo configura Express. inicia el Bodyparser y asigna las rutas// 
function expressLoader(app) {

    app.use(bodyParser.json());

    app.use(router);
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
      
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, authorization"
        );
        res.header(
          "Access-Control-Allow-Methods",
          "PUT, GET, POST, DELETE, OPTIONS"
        );
        next();
      });

    app.use(function (req, res) {
        res.status(404).json({
            error: 'Not found'
        });
    });
}

module.exports = expressLoader;