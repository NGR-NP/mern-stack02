const mongoose = require("mongoose")
const TODO = new mongoose.Schema({
    title: {
        type: String,
        require
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
}, { timestamps: true })

module.exports = mongoose.model("Todo", TODO);