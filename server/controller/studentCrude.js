const Student = require("../model/studentModel")
const StudentClass = require("../model/studentClassModel")

exports.registerStudent = async(req,res)=>{
    if(!(req.body.fullname || req.body.regNo || req.body.email || req.body.gender || req.body.dob || req.body.studentClassId )) return res.status(400).json({error:"data is not formatted properly"})

    const { fullname, regNo, email, gender, dob, studentClassId } = req.body

    try {
        const regNoExist = await Student.exists({regNo})
        if(regNoExist) return res.status(401).json({error:"registration number have been used"})
        const emailExist = await Student.exists({email})
        if(emailExist) return res.status(401).json({error: "this email have been used"})
        const createstudent = await Student.create({
            fullname,
            regNo,
            email,
            gender,
            dob,
            studentClassId
        })

        const updateStudentClass = await StudentClass.findById(studentClassId)
        updateStudentClass.studentId.push(createstudent._id)
        const updatedStudentClass = await updateStudentClass.save()

        res.json(createstudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getAllstudent = async(req,res)=>{
    try {
        const allstudent = await Student.find().populate('studentClassId')
        .populate("subjectId")
        res.json(allstudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneStudent = async (req,res)=>{
    const { studentId } = req.params

    try {
        const student = await Student.findById(studentId)
        res.json(student)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateStudent = async (req,res)=>{

    const { studentId } = req.params

    if(!(req.body.fullname || req.body.regNo || req.body.email || req.body.gender || req.body.dob || req.body.studentClassId )) return res.status(400).json({error:"data is not formatted properly"})

    const { fullname, regNo, email, gender, dob, studentClassId } = req.body

    try {
        const classCheck = await Student.findById(studentId)
        if(classCheck.studentClassId !== studentClassId){

            const removeStudentFromClass = await StudentClass.findOneAndUpdate(
                {studentId},
                {$pull: {studentId}}
            )
            const pushStudentinclass = await StudentClass.findByIdAndUpdate(
                {_id: studentClassId},
                {$push: {studentId}}
            )
        }

        const updateStudent = await Student.updateOne(
            {_id: studentId},
            {$set: {
                fullname,
                regNo,
                email,
                gender,
                dob,
                studentClassId
            }}
        )

        res.json(updateStudent)
        
    } catch (error) {
        res.json({error:error.message})
    }
    
}

exports.deleteoneStudent = async(req,res)=>{

    const { studentId, studentClassId } = req.params

    try {
        const removeStudentIdFromStudentclass = await StudentClass.findOneAndUpdate(
            {_id: studentClassId},
            {$pull: {studentId:studentId}}
        )

        const delStudent = await Student.deleteOne({_id:studentId})
        res.json(delStudent)

    } catch (error) {
        res.json({error:error.message})
    }
}