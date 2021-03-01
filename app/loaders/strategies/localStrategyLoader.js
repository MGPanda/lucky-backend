const LocalStrategy = require('passport-local').Strategy;

const crudUser = require('../../business/crudUser');

const loginStrategy = new LocalStrategy(
    {
        usernameField: 'username',
        passReqToCallback: true,
    },
    function (req, username, password, done) {
        crudUser.getUserByUsername(req.body.username)
        .then(function (userFound) {
            if (userFound) {
                if (userFound.checkPassword(req.body.password)) {
                    return done(null, userFound);
                }
                else {
                    done(null, false);
                }
            }
            else {
                done(null, false);
            }
        })
        .catch(function (err) {
            done(err)
        });
    }
);

module.exports = {
    loginStrategy,
};
