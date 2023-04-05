const mongoose = require("mongoose")


const studentClassSchema = mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    studentId: [{type:mongoose.Types.ObjectId, ref:'student'}]
},{timestamps: true})

const studentClassModel = mongoose.model('class',studentClassSchema)
module.exports = studentClassModel