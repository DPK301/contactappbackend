const express = require('express')
const cors = require('cors')
const logic = require('./services/logics')
const cntServer = express()

cntServer.use(cors({origin:'http://localhost:3000'}))

cntServer.use(express.json())

cntServer.listen(8000,()=>{
    console.log("listening on port 8000");
})

cntServer.get('/get-all-details',(req,res)=>{
    logic.getAllContact().then((response)=>{res.status(response.statusCode).json(response)})
})

 cntServer.post('/add-contact',(req,res)=>{
    logic.addContact(
        req.body.city,
        req.body.street,
        req.body.zipcode,
        req.body.firstname,
        req.body.lastname,
        req.body.id,
        req.body.email,
        req.body.username,
        req.body.phone
    ).then((response)=>{res.status(response.statusCode).json(response)})
 })
 cntServer.delete('/delete-an-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
 })
 
 cntServer.get('/get-an-contact/:id',(req,res)=>{
    logic.getanContact(req.params.id).then((response)=>{res.status(response.statusCode).json(response);})
 })

 cntServer.post('/update-an-contact/:id',(req,res)=>{
    logic.upadteanContact(req.params.id,req.body.city,req.body.street,req.body.zipcode,req.body.firstname,req.body.lastname,req.body.email,req.body.username,req.body.phone).then((response)=>{res.status(response.statusCode).json(response);})
})