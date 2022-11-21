const express = require('express')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.use(methodOverride('_method'))

app.post('/', (req,res)=>{
    res.send('POST request')
})

app.put('/', (req,res)=>{
    res.send('PUT request')
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})