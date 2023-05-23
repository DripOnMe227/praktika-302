require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require("./router/index")
const pc_router = require("./pc_router/index")

const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", router, pc_router)

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`server started on port = ${PORT}`)
        })
    } catch(e){
        console.log(e)
    }
}

start()