const mongoose = require("mongoose")


const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: ["username already exist", true],
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
},{timestamps: true})

const adminModel = mongoose.model('admin',adminSchema)
module.exports = adminModel