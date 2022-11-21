const express = require('express');
const app = express();
const fileSystem = require('fs');
const port = 3000;
const axios = require('axios')

app.get('/postlist', (req, res) =>{
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(response =>{
        let package = JSON.stringify(response.data)
        console.log(package)
        fileSystem.writeFile('posts.json', package, function (err) {
            console.log(err);
            res.send("Success")
        })
    })
    .catch(err=>console.log(err))
})

app.listen(port,()=>{
  console.log(`Server running http://localhost:${port}/`);
});

// https://axios-http.com/docs/intro

// https://www.geeksforgeeks.org/node-js-fs-writefile-method/

// https://medium.com/geekculture/nodejs-express-axios-and-the-basic-set-up-fe88a0b75dca

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response