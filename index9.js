let express = require('express');
let app = express();
let port = 3000;

app.get('/number/:id', (req, res) =>{
    res.send(`The number is ${req.params.id}`)
})

app.listen(port,()=>{
  console.log(`Server running http://localhost:${port}/`);
});