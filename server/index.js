require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;
const app = express();
const router = require("./router/index")

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async() => {
    try {
        app.listen(port, () => {
            console.log("server started at port " + port)
        })
    }catch (e) {
        console.log(e)
    }
}

start();
