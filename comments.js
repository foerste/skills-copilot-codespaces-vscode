// Create web server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

// GET all comments
router.get('/', function(req, res, next) {
    Comment.find(function (err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
});

// POST new comment
router.post('/', auth, function(req, res, next) {
    // Add your code here
});
