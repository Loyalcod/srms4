const mongoose = require("mongoose")


const studentSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    regNo: {
        type: Number,
        required: true,
        unique: ["registration no. already exist",true],
        dropDups: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        lowercase: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Others"]
    },
    dob:{
        type: String,
        required: true
    },
    studentClassId: {type: mongoose.Types.ObjectId, ref: "class"},
    subjectId: [{type: mongoose.Types.ObjectId, ref: "subject"}],
    resultId: [{type: mongoose.Types.ObjectId, ref: "result"}]
},{timestamps: true})

const studentModel = mongoose.model('student',studentSchema)
module.exports = studentModel