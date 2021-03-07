const express=require("express");

const app= express();

const mongoose= require("mongoose");

const bodyparser=require("body-parser");

const newproducts= require("./newproduct.model")

// const products=require("./product.nmodel")

const path=require('path');

var url="mongodb+srv://jaydeep:jaydeep2000@newcluster.rys4w.mongodb.net/Chocolate?retryWrites=true&w=majority";






mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true,dbName: "Chocolate"}).
then(()=>{console.log("connected to Database")})
.catch(()=>{console.log("connection failed");});

app.use("/",express.static(path.join(__dirname,'angular')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
  next();


});



app.get("/newproducts",(req,res,next)=>{
  newproducts.find().
    then(documents=>{
    res.status(200).json(documents);
    console.log(documents);
  })
})


app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'angular',"index.html"));
  next();
});




module.exports=app;
