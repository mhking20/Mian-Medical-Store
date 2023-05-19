const router = require("express").Router()
const {getproducts} = require("../components/components")

router.route("/").get(getproducts)

module.exports = router