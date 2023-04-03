const { verifyAdmin, verifyJwt } = require('../auth/auth.middleware')
const { getProductById, getProducts, updateProduct, deleteProduct, createProduct } = require('./product.controller')
const productRoute = require('express').Router()

productRoute.get('/', getProducts)
productRoute.get('/:id', getProductById)

productRoute.use(verifyJwt)
productRoute.use(verifyAdmin)
productRoute.post('/', createProduct)
productRoute.put('/:id', updateProduct)
productRoute.delete('/:id', deleteProduct)

module.exports = productRoute