var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('dotenv').config()

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "member-56705.firebaseapp.com",
  databaseURL: "https://member-56705.firebaseio.com",
  projectId: "member-56705",
  storageBucket: "member-56705.appspot.com",
  messagingSenderId: "599603918935",
  appId: "1:599603918935:web:8b99458af74ff8d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;