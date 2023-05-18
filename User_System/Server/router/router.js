const router = require("express").Router()
const {getproducts, postproducts} = require("../components/components")

router.route("/").get(getproducts).post(postproducts)


module.exports = router