var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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

routet.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
})

module.exports = router;