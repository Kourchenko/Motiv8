const bodyparser = require('body-parser');
const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const server = http.createServer(app);
const config = require('./config/local.json');
const routes = require ('./config/routes').routes;

const DB_GROUPS = require('./static/local/mock_database/groups');
const DB_USERS = require('./static/local/mock_database/users');
const DB_GOALS = require('./static/local/mock_database/goals');
const DB_MESSAGES = require('./static/local/mock_database/chat_messages');


// Group Endpoints
app.get(routes.API_GET_GROUPS, (req, res) => {
    // Validate if userId is a valid user in database
    const userFound = DB_USERS.find(user => user.id === req.body.userId) || null;
    if (userFound == null) {
        return res.status(404);
    }
    return res.status.send(DB_GROUPS);
});

// Goal Endpoints


// User Endpoints

// Chat Endpoints


app.listen(config.port, () => {
    console.log();
    console.log("Listening on port:", config.port);
    console.log("Close Server with CTRL+C");
});