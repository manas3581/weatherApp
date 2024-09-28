const express = require("express")
require("dotenv").config()
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send( "hello world")
})

// Calling the Api

app.post("/weather",(req,res)=>{
    const {city}  = req.body;
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
    .then((response)=>{
    
        return res.status(200).json(response.data)
    }).catch((error)=>{
        console.log(error)
        return res.status(500).json("Some Error Happend")
    })
})



app.listen(process.env.PORT || 5112,(req,res)=>{
    return "Hello world"
})
