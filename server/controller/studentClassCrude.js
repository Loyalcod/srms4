const StudentClass = require("../model/studentClassModel")


exports.ClassesCreate = async(req,res)=>{
    if(!(req.body.className || req.body.grade )) return res.status(400).json({error:"data not formatted properly"})

    const { className, grade } = req.body

    try {
        const classExist = await StudentClass.exists({className, grade})
        if(classExist) return res.status(401).json({error:"class already exist"})
        const createClass = await StudentClass.create({
            className,
            grade
        })
        res.json(createClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getallclasses = async (req,res)=>{
    try {
        const getstudentClass = await StudentClass.find()
        res.json(getstudentClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneStudentClass = async(req,res)=>{
    const {classId} = req.params

    try {
        const oneStudentClass = await StudentClass.findById(classId)
        res.json(oneStudentClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.editandUpdateStudentClass = async(req,res)=>{
    const { classId } = req.params

    const className = req.body.className == "" ? StudentClass.className : req.body.className
    const grade = req.body.grade == ""? StudentClass.grade : req.body.grade

    try {
        const updateEditedClass = await StudentClass.updateOne(
            {_id: classId},
            {$set: {
                className,
                grade
            }}
        )
        res.json(updateEditedClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteStudentClass = async(req,res)=>{
    const { classId } = req.params

    try {
        const delStudent = await StudentClass.deleteOne({_id: classId})
        res.json(delStudent)
        
    } catch (error) {
        res.json({error:error.message})
    }
}