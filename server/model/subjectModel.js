const mongoose = require("mongoose")


const subjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    studentId: [{type: mongoose.Types.ObjectId, ref: 'student'}],
    result: [{type: mongoose.Types.ObjectId, ref: 'result'}]

},{timestamps: true})


const SubjectModel = mongoose.model('subject',subjectSchema)
module.exports = SubjectModel