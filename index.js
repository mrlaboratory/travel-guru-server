const express = require('express')
const app = express()
const port = 3000
const destinations = require('./data/destination.json')

const cors = require('cors')
app.use(cors())

app.get('/',(req,res)=> {
    res.send(destinations)
})
app.get('/:id',(req,res)=> {
    const id = req.params.id
    const sleceted = destinations.find(s => s.id == id)
    res.send(sleceted)
})


app.listen(port,()=> {
    console.log('Travel guru server is running')
})