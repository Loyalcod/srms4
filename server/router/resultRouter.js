const express = require("express")
const { registerResult, getallResult, checkResult, getOneResult, editandupdateResult, deleteResult } = require("../controller/resultCrude")
const router = express.Router()

router.post("/",registerResult)

router.get('/', getallResult)

router.get('/:email/:regNo',checkResult)

router.get("/:resultId", getOneResult)

router.patch("/:resultId",editandupdateResult)

router.delete('/:resultId/:studentId/:subjectId', deleteResult)


module.exports = router