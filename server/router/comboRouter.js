const express = require("express")
const { registerCombo, getcombo, getonecombo, toggleStatus, deleteCombo } = require("../controller/stdSbjComboCrude")
const router = express.Router()


router.post('/',registerCombo)

router.get('/',getcombo)

router.get('/:comboId',getonecombo)

router.get('/toggole/:comboId',toggleStatus)

router.delete("/:comboId/:studentId/:subjectId", deleteCombo)


module.exports = router