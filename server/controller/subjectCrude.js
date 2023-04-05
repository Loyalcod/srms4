const Subject = require("../model/subjectModel")


exports.registerSubject = async(req,res)=>{
    if(!(req.body.subjectName || req.body.subjectCode)) return res.status(400).json({error:"data not formatted properly"})
    const { subjectName, subjectCode } = req.body

    try {
        const subjectExist = await Subject.find({$or: [{subjectName},{subjectCode}]})
    if(subjectExist.length !== 0) {
        return res.status(401).json({error:"subject already exist"})
    }
    const newSubject = new Subject({subjectName, subjectCode})
    const saveSubject = await newSubject.save()
    res.json(saveSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getallSubject = async(req,res)=>{
    try {
        const allSubject = await Subject.find()
        res.json(allSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getSubject = async(req,res)=>{
    const { subjectId } = req.params 

    try {
        const oneSubject = await Subject.findById(subjectId)
        res.json(oneSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.editSubject = async(req,res)=>{
    if(!(req.body.subjectName || req.body.subjectCode)) return res.status(400).json({error:"data not formatted properly"})
   
    const { subjectId } = req.params

    const subjectName = req.body.subjectName === '' ? Subject.subjectName : req.body.subjectName
    const subjectCode = req.body.subjectCode === '' ? Subject.subjectCode : req.body.subjectCode

    try {
        const editSubject = await Subject.updateOne(
            {_id: subjectId},
            {$set: {subjectName,subjectCode}}
        )
        res.json(editSubject)

    } catch (error) {
        
    }
}

exports.deleteSubject = async(req,res)=>{

    const { subjectId } = req.params

    try {
        const delSubject = await Subject.deleteOne({_id: subjectId})
        res.json(delSubject)
        
    } catch (error) {
        res.json({error:error.message})
    }
}