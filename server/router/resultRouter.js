const express = require("express")
const { registerResult, getallResult, checkResult, getOneResult, editandupdateResult, deleteResult } = require("../controller/resultCrude")
const router = express.Router()
const verifyAuthication = require("../middleWare/authHeaders") 

router.post("/",verifyAuthication, registerResult)

router.get('/',verifyAuthication, getallResult)

router.get('/:email/:regNo',verifyAuthication,checkResult)

router.get("/:resultId",verifyAuthication, getOneResult)

router.patch("/:resultId",verifyAuthication, editandupdateResult)

router.delete('/:resultId/:studentId/:subjectId',verifyAuthication, deleteResult)


module.exports = router