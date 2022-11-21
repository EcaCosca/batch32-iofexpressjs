const express=require("express");
const path=require("path");
const ejs=require("ejs");
const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'assets/views'));

app.use(express.static(path.resolve(__dirname,'assets')));

app.get("/test-ejs",(req,res)=>{
    res.render('index',{myTitle: "my first title"});
});

app.listen(3000,()=>{
    console.log(`express server running on 3000`);
});

// https://tutorial.techaltum.com/ejs.html