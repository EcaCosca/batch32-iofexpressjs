let express = require('express');
let app = express();
let path = require('path');
let PORT = 3000;

// Without middleware
app.put('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    };

    let fileName = 'file.html';
    
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

    
});

// Susi's solution
// app.put("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// https://www.geeksforgeeks.org/express-js-res-sendfile-function/