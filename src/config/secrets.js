require("dotenv").config({})
module.exports = {
    MONGO_API_KEY: process.env.MONGO_API_KEY,
    JWT_SEC: 'Secret Token ;)',
    REFRESH_SEC: 'Super Secret Token:o',
}