let express = require('express');
let app = express();
let PORT = 3000;

app.delete('/', (req, res)=>{
    res.json({ good: 'yep' })
});

app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}/`);
});

// https://expressjs.com/fr/4x/api.html#res.json