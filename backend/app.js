const express = require("express")
const cors = require("cors")
require("dotenv").config()
const sql = require("./db/conexion")
const app = express()

//Views
const lista = require("./view/lista")

//Midlewares
app.use(express.json())
app.use(cors())

async function serverStart() {
    await sql.authenticate();
    app.listen(3001,()=>{
        console.log("Server start on http:localhost:3001")
    })
}

serverStart()
lista(app);