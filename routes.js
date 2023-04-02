const routes = require("express").Router()
const authRoutes = require("./src/auth/auth.routes")

routes.use('/auth', authRoutes)

module.exports = routes