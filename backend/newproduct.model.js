var mongoose= require("mongoose");

var mydata=new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  img: String,
  name: String,
  price: Number

},{collection : 'Newproducts'});


module.exports=mongoose.model("Newproducts",mydata);
