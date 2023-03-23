const mongoose = require("mongoose")
const TODO = new mongoose.Schema({
    title: {
        type: String,
        require
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending",
    },
}, { timestamps: true })

module.exports = mongoose.model("Todo", TODO);