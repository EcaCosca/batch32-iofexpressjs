const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res,next) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/showGet', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => console.log(`Server running http://localhost:${port}/`))

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET

// https://www.npmjs.com/package/body-parser