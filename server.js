const app = require('./src/config/express')
const connectToDB = require('./src/config/mongodb')
const PROT = 8080

app.listen(PROT, () => {
    connectToDB();
    console.log(`server started on Prot ${PROT} \n http://localhost:${PROT}`)
})