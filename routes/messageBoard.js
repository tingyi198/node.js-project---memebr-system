var express = require('express');
var firebaseDb = require('../connections/firebase_admin_connect');
var router = express.Router();

router.post('/', function (req, res) {

  req.checkBody('content', '內容不可為空值').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors[0].msg);
    res.redirect('/');
  } else {
    // get nickname
    firebaseDb.ref('user/' + req.session.uid).once('value', function (snapshot) {
      var nickname = snapshot.val().nickname;

      // 寫入 list 內
      var ref = firebaseDb.ref('list').push();
      var listContent = {
        nickname: nickname,
        content: req.body.content
      };
      ref.set(listContent)
        .then(function () {
          res.redirect('/');
        })
    });
  }
})
module.exports = router;