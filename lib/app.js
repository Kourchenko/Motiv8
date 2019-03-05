"use strict";

var bodyparser = require('body-parser');

var http = require('http');

var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
var server = http.createServer(app);

var LOCAL_ENV = require('./config/local.json');

var routes = require('./config/routes');

var DB_GROUPS = require('./static/local/mock_database/groups');

var DB_USERS = require('./static/local/mock_database/users');

var DB_GOALS = require('./static/local/mock_database/goals');

var DB_MESSAGES = require('./static/local/mock_database/chat_messages'); // Group Endpoints


app.get(routes.API_GET_GROUPS, function (req, res) {
  // Validate if userId is a valid user in database
  var userFound = DB_USERS.find(function (user) {
    return user.id === req.body.userId;
  }) || null;

  if (userFound == null) {
    return res.status(404);
  }

  return res.status.send(DB_GROUPS);
}); // Goal Endpoints
// User Endpoints
// Chat Endpoints

console.log(LOCAL_ENV);