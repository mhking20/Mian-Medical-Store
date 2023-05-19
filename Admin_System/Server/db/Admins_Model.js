const mongoose = require("mongoose")

const Admin = mongoose.Schema({
    fullname : String,
    username : String,
    address : String,
    password : String
})

module.exports = mongoose.model("Admins" , Admin)