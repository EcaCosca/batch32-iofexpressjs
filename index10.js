const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')

app.get('/postlist', (req, res) =>{
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => res.send(response.data))
    .catch(err=>console.log(err))
})

app.listen(port,()=>{
  console.log(`Server running http://localhost:${port}/`);
});

// https://axios-http.com/docs/intro