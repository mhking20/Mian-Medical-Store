const mongoose = require("mongoose")

const Admin = mongoose.Schema({
    fullname : String,
    username : String,
    password : String
})

module.exports = mongoose.model("Admins" , Admin)