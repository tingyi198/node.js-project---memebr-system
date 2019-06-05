var express = require('express');
var router = express.Router();
var firebase = require('../connections/firebase_connect');
var firebaseDb = require('../connections/firebase_admin_connect');
var fireAuth = firebase.auth();

router.get('/', function (req, res) {
    res.render('login', {
        title: '登入',
        error: req.flash('error')
    });
})
router.post('/', function (req, res) {

    var email = req.body.email;
    var password = req.body.passwd;

    fireAuth.signInWithEmailAndPassword(email, password)
        .then(function (user) {
            req.session.uid = user.user.uid;
            res.redirect('/');
        })
        .catch(function (error) {
            req.flash('error', error.message);
            res.redirect('/login');
        })

})
module.exports = router;