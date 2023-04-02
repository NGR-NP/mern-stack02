const mongoose = require('mongoose')
const { MONGO_API_KEY } = require('./secrets')
const connectTomongodb = () => {
    try {
        mongoose.connect(MONGO_API_KEY)
        console.log('waiting DB connection')
    } catch (err) {
        throw err;
    }
};
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected!!")
})

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected Successfully!!")
})

module.exports = connectTomongodb