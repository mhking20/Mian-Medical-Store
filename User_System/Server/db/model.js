const mongoose = require("mongoose")

const Product = mongoose.Schema({
    name : {type : String},
    image : {type : String},
    price : {type : Number},
    instock : {type : Number}
})

module.exports = mongoose.model("Products" , Product)