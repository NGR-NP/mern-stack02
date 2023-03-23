const mongoose = require('mongoose')
const MongoApi = process.env.MONGOAPI
const connectToDB = () => {
    try {
        mongoose.connect(MongoApi)
        console.log("starting mongoDB connection");
    } catch (err) {
        throw err
    }
}
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})
module.exports = connectToDB