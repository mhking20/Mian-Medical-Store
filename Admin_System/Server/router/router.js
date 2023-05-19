const router = require("express").Router()
const {getproducts, postproducts} = require("../components/components")

router.route("/").get(getproducts).post(postproducts)
// router.route("/admins").get(getadmins).post(postadmin).delete(deladmins)
// router.route("/orders").get(getorders)

module.exports = router