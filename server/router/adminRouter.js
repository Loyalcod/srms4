const express = require("express")
const { registerAdmin, loginAdmin, refreshLoginAdmin, logOutAdmin } = require("../controller/adminCrude")
const router = express.Router()

router.post('/',registerAdmin)

router.post('/login',loginAdmin)

router.get('/refreshLogin',refreshLoginAdmin)

router.get('/logout',logOutAdmin)
module.exports = router