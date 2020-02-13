const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const sessionFileStore = require('session-file-store');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const config = require('../config');
const toDoList = require('./ToDoList');

//Application

const app = express();
const FileStore = sessionFileStore(expressSession);
app.set('views', process.cwd() + '/templates');
app.engine('hb', handlebars({ defaultLayout: null, extname: '.hb'}));
app.use(morgan(config.logFormat));
app.use(expressSession({ ...config.sessionOptions,  saveUninitialized: false, store: new FileStore()}));
app.use(express.static('./static'));
app.use(bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true,
}));
app.use(bodyParser.json());


//Routers
app.use(toDoList.router);

app.use(function (req, res) {
    res.status(404);
    res.send("The requested url " + req.url + " was not found on this server");
});

module.exports = { app };