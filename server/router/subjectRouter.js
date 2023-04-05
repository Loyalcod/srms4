const express = require("express")
const { registerSubject, getallSubject, getSubject, editSubject, deleteSubject } = require("../controller/subjectCrude")
const router = express.Router()


router.post('/',registerSubject)

router.get("/",getallSubject)

router.get("/:subjectId",getSubject)

router.patch("/:subjectId",editSubject)

router.delete("/:subjectId",deleteSubject)

module.exports = router