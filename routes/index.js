var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!',
    database: 'mern-login-reg'
});

connection.connect(function(err) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Yay! You are connected to the database!');
})

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express'});
// })

module.exports = router;