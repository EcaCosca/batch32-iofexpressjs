const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json()) // allows to accept data in a json format
app.use(express.urlencoded()) //allows to decode the unnecesary information from the request and just gets me the data
app.use(express.static('public')) // html being static

app.get('/',(req,res,next) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.post('/showPost', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => console.log(`Server running http://localhost:${port}/`))