const express = require("express")
const { ClassesCreate, getallclasses, getOneStudentClass, editandUpdateStudentClass, deleteStudentClass } = require("../controller/studentClassCrude")
const router = express.Router()


router.post('/',ClassesCreate)

router.get('/',getallclasses)

router.get('/:classId', getOneStudentClass)

router.patch("/:classId", editandUpdateStudentClass)

router.delete("/:classId", deleteStudentClass)



module.exports = router