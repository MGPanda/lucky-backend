const passport = require('passport');

const localStrategies = require('./strategies/localStrategyLoader');

function passportLoader(app) {

    passport.use('login-local', localStrategies.loginStrategy);

    app.use(passport.initialize());
}

module.exports = passportLoader;
