var express = require('express');
var firebaseDb = require('../connections/firebase_admin_connect');
var router = express.Router();

router.get('/', function (req, res) {

    firebaseDb.ref('user/' + req.session.uid).once('value', function (snapshot) {
        var nickname = snapshot.val().nickname;
        res.render('user', {
            title: '會員專區',
            nickname: nickname
        });
    });
})
module.exports = router;