const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`))

app.post("/fakedata",async(req,response)=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then((json)=>{
        response.status(200).json({apiStatues : true,data:json})
    }).catch((err)=>{
        response.status(500).json({apiStatues : false,data:res.data})
    })
})