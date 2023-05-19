const mongoose = require("mongoose")
mongoose.set('strictQuery' , false)

const Connect = async (url) => {
    try {
      await mongoose.connect(url)
    } catch (error) {
        console.log(error);
    }
} 

module.exports = Connect