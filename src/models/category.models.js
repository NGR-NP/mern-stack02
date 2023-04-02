const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "enter new category",
            unique: true
        },
        slug: {
            type: String,
            required: "enter new slug"
        },
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("Category", CategorySchema)