const Student = require("../model/studentModel")
const StudentClass = require("../model/studentClassModel")
const Subject = require("../model/subjectModel")
const Result = require("../model/resultModel")
const combo = require("../model/stdSbjComboModel")


exports.totalcount = async(req,res)=>{
    try {
        const studentCount = await Student.count()
        const studentClasscount = await StudentClass.count()
        const subjectCount = await Subject.count()
        const resultCount = await Result.count()
        const comboCount = await combo.count()

        res.json({
            studentCount,
            studentClasscount,
            subjectCount,
            resultCount,
            comboCount
        })
        
    } catch (error) {
        res.json({error:error.message})
    }
}