const Result = require("../model/resultModel")
const Student = require("../model/studentModel")
const Subject = require("../model/subjectModel")


exports.registerResult = async(req,res)=>{
    if(!(req.body.studentId || req.body.subjectId || req.body.classId || req.body.mark )) return res.status(400).json({error:"data not formatted properly"})

    const { studentId, subjectId, classId, mark } = req.body

    try {
        const resultCheck = await Result.exists({studentId, subjectId, classId})
        if(resultCheck) return res.status(401).json({error:"data already exist"})
        const createResult = await Result.create({
            studentId,
            subjectId,
            classId,
            mark
        })

        const pushResultIdintoStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$push: {resultId: createResult._id}}
        )

        const pushResultIdintoSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {result: createResult._id}}
        )

        res.json(createResult)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getallResult = async(req,res)=>{
    try {
        const getResult = await Result.find()
        .populate('studentId').populate("subjectId").populate("classId")
        res.json(getResult)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.checkResult = async(req,res)=>{
    const { email, regNO } = req.params

    try {

        const detailsExist = await Student.exists({email, regNO})
        if(!detailsExist) return res.status(401).json({error: "student data deos not exist"})

        const showResult = await Student.find({email, regNO})
        .populate("studentClassId").populate({
            path: "resultId",
            populate: {
                path: "subjectId"
            }
        })

        res.json(showResult)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneResult = async(req,res)=>{
    const { resultId } = req.params

    try {
        const getStudent = await Result.findById(resultId)
        .populate('studentId').populate("subjectId").populate("classId")
        res.json(getStudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.editandupdateResult = async (req,res)=>{
    const { resultId } = req.params

    const mark = req.body.mark === ""? Result.mark : req.body.mark

    try {
        const updateMark = await Result.updateOne(
            {_id: resultId},
            {$set: {mark}}
        )
        res.json(updateMark)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteResult = async (req,res)=>{
    const { resultId, studentId, subjectId } = req.params

    try {
        const removeResultIdFromStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$pull: {resultId}}
        )
        const removeResultIdFromSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$pull: {result: resultId}}
        )

        const delResult = await Result.deleteOne({_id: resultId})
        res.json({delResult})
        
    } catch (error) {
        res.json({error:error.message})
    }
}