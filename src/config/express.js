const express = require('express')
const dotenv = require("dotenv")
require('dotenv').config()
const TodoRoutes = require('../todo/routes/todo.Routes');
const app = express()

app.use('/api', TodoRoutes);

module.exports = app;