const { verifyJwt, verifyUser, verifyAdmin } = require('../auth/auth.middleware')
const { getUsers, getUser, createUser, deleteUser } = require('./user.controller')

const userRoutes = require('express').Router()

userRoutes.use(verifyJwt)
userRoutes.get('/:id', verifyUser, getUser)
userRoutes.delete('/', deleteUser)
userRoutes.use(verifyAdmin)
userRoutes.get('/', getUsers)
userRoutes.post('/', createUser)

module.exports = userRoutes