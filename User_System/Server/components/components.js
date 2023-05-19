const model = require("../db/Products_Model")

const getproducts = async (req , res) => {
  try {
    const products = await model.find()
    res.status(200).json({products})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getproducts}