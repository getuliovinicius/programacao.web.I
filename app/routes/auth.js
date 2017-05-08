// app/routes/auth.js

var passport = require('passport');

module.exports = function(app) {
    app.get('authgithub', passport.authenticate('github'));
    app.get('authgithub/callback', passport.authenticate('github', {
        successRedirect: '/'
    }));
}