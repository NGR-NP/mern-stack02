const express = require('express')
const dotenv = require("dotenv")
require('dotenv').config()
const TodoRoutes = require('../todo/routes/todo.Routes');
const app = express()

app.use(express.json())
app.use('/api/todo', TodoRoutes);

module.exports = app;