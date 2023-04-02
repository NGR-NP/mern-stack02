const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "title is required",
        },
        desc: {
            type: String,
            required: "desc is required",
        },
        imgUrl: {
            type: String,
            required: "image is required",
        },
        slug: {
            type: String,
            required: "slug is required",
        },
        price: {
            type: Number,
            required: "price is required",
        },
        color: {
            type: Array,
            required: "color is required"
        },
        size: {
            type: Array,
            required: "size is required"
        },
        qty: {
            type: Number,
            required: "quantity is required",
        },
        category: [{ type: Schema.Types.ObjectId, ref: "Category" }]
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Products', ProductSchema)