//app/routes/auth.js

var passport = require('passport');

module.exports = function(app) {

    /** LOGIN */
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', {
        successRedirect: '/'
    }));

    /** LOGOUT */
    app.get('/logout', function(req, res) {
        req.logOut(); // exposto pelo passport
        res.redirect('/');
    });
    
}