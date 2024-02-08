const mongoose = require("mongoose")
require("dotenv").config()

const connectToDataBase = ()=>{
    mongoose.connect(process.env.MONGODB_URL)

    mongoose.connection.on("connected", ()=>{
        console.log("database connection is successful")
    })

    mongoose.connection.on("error", (err)=>{
        console.log("database  connection failed", err.message)
    })
}

module.exports = {connectToDataBase}