const mongoose = require("mongoose");
const { Schema } = mongoose;

const footwearSchema = new Schema({
  name: String,
  category: String,
  colour: [String],
  material: String,
  length: String,
  size:String, 
  brand: String,
  shoetype: String,
  price: String,
  image: String,

});

const bagSchema = new Schema ({
  name: String,
  category: String,
  colour: [String],
  material: String,
  length: String,
  size: String,
  brand: String,
  price: String,
  image: String,

})

const footwear = mongoose.model("footwear", footwearSchema);

module.exports = footwear ;

const bag = mongoose.model("bag", bagSchema)

module.exports = bag ;