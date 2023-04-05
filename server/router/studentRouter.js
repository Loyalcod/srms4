const express = require("express")
const { registerStudent, getAllstudent, getOneStudent, updateStudent, deleteoneStudent } = require("../controller/studentCrude")
const router = express.Router()


router.post('/',registerStudent)

router.get('/',getAllstudent)

router.get("/:studentId",getOneStudent)

router.patch("/:studentId",updateStudent)

router.delete("/:studentId/:studentClassId", deleteoneStudent)



module.exports = router