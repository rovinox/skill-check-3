require("dotenv").config()
const massive = require("massive")
const express = require("express")
const ch = require("./crontroller/HouseCtrl")



const app= express()



const {SERVER_PORT, CONNECTING_STRING} = process.env
massive(CONNECTING_STRING).then(db =>{
    app.set("db", db)
}).catch(err => console.log(err))


app.use(express.json())


app.get("/api/houses", ch.allHouse )


app.listen( SERVER_PORT, () => console.log(`listing on ${SERVER_PORT}`))
