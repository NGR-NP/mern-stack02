const Products = require('../models/products.models')
const transformString = require("../utils/transformString")
const createProduct = async (req, res, next) => {
    const { title, desc, imgUrl, price, color, size, qty } = req.body
    const transformedSlug = transformString(title);
    const timestamp = Date.now();
    const uniqueSlug = `${transformedSlug}-${timestamp}`;


    const newProduct = new Products({
        title, desc, imgUrl,
        slug: uniqueSlug,
        price, color, size, qty
    });
    try {
        const savedProduct = await newProduct.save();
        res
            .status(200)
            .json({ message: "New Product added", product: savedProduct });
    } catch (err) {
        next(err);
    }
}


const getProducts = async (req, res, next) => {
    const { limit } = req.query;

    try {
        let products;

        if (limit) {
            products = await Products.find().sort({ createdAt: -1 }).limit(limit);
        } else {
            const allProduct = await Products.find().sort({ createdAt: -1 })
            if (!allProduct) {
                return next(ERROR(400, "No product"))
            } else {
                products = allProduct
            }
        }
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};
const getProductById = async (req, res, next) => {
    try {
        const product = await Products.findById({ _id: req.params.id });
        if (!product) return next(ERROR(400, "Product not  available"));
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

const updateProduct = async (req, res, next) => {
    const { title, desc, imgUrl, price, color, size, qty } = req.body
    try {
        const updateProductById = await Products.findByIdAndUpdate(
            { _id: req.params.id },
            { title, desc, imgUrl, price, color, size, qty },
            { new: true }
        );
        res.status(200).json({ message: "Product Updated", updateProductById });
    } catch (err) {
        next(err);
    }
};
const deleteProduct = async (req, res, next) => {
    try {
        await Products.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: "product deleted successfully" });
    } catch (err) {
        next(err);
    }
};
module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
};