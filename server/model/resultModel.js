const mongoose = require("mongoose")


const resultSchema = mongoose.Schema({
    studentId: {type: mongoose.Types.ObjectId, ref:"student"},
    subjectId: {type: mongoose.Types.ObjectId, ref: "subject"},
    classId: {type: mongoose.Types.ObjectId, ref: "class"},
    mark: {
        type: Number,
        required: true
    }
},{timestamps: true})

const resultModel = mongoose.model("result",resultSchema)
module.exports = resultModel