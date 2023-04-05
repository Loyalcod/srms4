const Combo = require("../model/stdSbjComboModel")
const Student = require("../model/studentModel")
const Subject = require("../model/subjectModel")


exports.registerCombo = async(req,res)=>{
    if(!(req.body.studentId || req.body.subjectId)) return res.status(400).json({error:"data not formatted properly"})
    const { studentId, subjectId } = req.body

    try {
        const subjectExist = await Student.findById(studentId)
        if(subjectExist.subjectId.includes(subjectId)) return res.status(401).json({error:"combo already exist"})

        const pushSubjectIdintoStudentId = await Student.findOneAndUpdate(
            {_id: studentId},
            {$push: {subjectId}}
        )
        const pushStudentIdintoSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {studentId}}
        )

        const saveCombo = await Combo.create({
            studentId,
            subjectId
        })

        res.json(saveCombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getcombo = async(req,res)=>{
    try {
        const allcombo = await Combo.find()
        .populate({
            path: 'studentId',
            populate: {
                path: 'studentClassId'
            }
        }).populate('subjectId')
        res.json(allcombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getonecombo = async(req,res)=>{
    const { comboId } = req.params

    try {
        const allcombo = await Combo.findById(comboId)
       res.json(allcombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.toggleStatus = async(req,res)=>{
    const { comboId } = req.params 

    try {
        const getStatus = await Combo.findById(comboId).select('status')
        var toggleStatus = getStatus.status
        toggleStatus === true ? toggleStatus = false : toggleStatus = true

        const nowToggolStatus = await Combo.updateOne(
            {_id: comboId},
            {$set: {status: toggleStatus}}
        )

        res.json(nowToggolStatus)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteCombo = async(req,res)=>{
    const { comboId, studentId, subjectId } = req.params 

    try {
        const removeSubjectIdfromStudentId = await Student.findOneAndUpdate(
            {_id: studentId},
            {$pull: {subjectId}}
        )
        const removeStudentIdfromSubjectId = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$pull: {studentId}}
        )

        const delCombo = await Combo.deleteOne({_id: comboId})
        res.json(delCombo)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

