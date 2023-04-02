const authRoutes = require('express').Router()
const { login, register } = require('./auth.controller')


authRoutes.post('/login', login)
authRoutes.post('/register', register)

module.exports = authRoutes