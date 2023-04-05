const express = require("express")
const { totalcount } = require("../controller/countcrude")
const router = express.Router()


router.get('/',totalcount)



module.exports = router