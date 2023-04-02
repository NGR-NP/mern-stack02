const app = require('./src/config/express')
const connectTomongodb = require('./src/config/mongodb')

const PORT = 8080

app.listen((PORT), () => {
    console.log(`Server Started
    
    Host: http://localhost:${PORT}`)
    connectTomongodb()
})