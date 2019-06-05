
var admin = require("firebase-admin");

var serviceAccount = require("../member-56705-firebase-adminsdk-qctra-dcca29659e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://member-56705.firebaseio.com"
});

var db = admin.database();

module.exports = db;