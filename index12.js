let express = require('express');
let app = express();
let port = 3000;

app.get('/', (req, res) =>{
    res.send('Testing PM2')
    console.log('GET request')
})

app.listen(port,()=>{
  console.log(`Server running http://localhost:${port}/`);
});
// https://github.com/Unitech/pm2

// https://www.npmjs.com/package/pm2

// https://www.tecmint.com/install-pm2-to-run-nodejs-apps-on-linux-server/

// https://www.youtube.com/watch?v=ebdKIU6SDHI&ab_channel=Code6

// EXERCISE 12

// npm install pm2 -g
// sudo npm i -g pm2

// pm2 start index12.js

// EXERCISE 13

// pm2 start index12.js -i max
// pm2 start index12.js -i max -f


// EXERCISE 14

// pm2 start index12.js --watch

// EXERCISE 15

// pm2 logs
