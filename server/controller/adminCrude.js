const Admin = require("../model/adminModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.registerAdmin = async(req,res)=>{
    if(!(req.body.fullname || req.body.username || req.body.password)) return res.status(400).json({error: "data not formatted properly"})
    const { fullname, username, password } = req.body

    try {
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(password,salt)
        const adminExist = await Admin.exists({username})
        if(adminExist) return res.status(401).json({error:"admin username already exist"})
        const createAdmin = await Admin.create({
            fullname,
            username,
            password:hashpass
        })
        res.status(200).json(createAdmin)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.loginAdmin = async(req,res)=>{
    if(!(req.body.username || req.body.password)) return res.status(400).json({error:"data not formated properly"})
    const { username, password } = req.body

    try {
        const userExist = await Admin.findOne({username})
        if(userExist){
            const validatePass = await bcrypt.compare(password,userExist.password)
            if(!validatePass) return res.status(400).json({error:"incorrect password"})

            const accessToken = jwt.sign({_id: userExist._id, username: userExist.username},process.env.ACCESS_JWT_SECRET,{expiresIn: "10m"})
            const refreshToken = jwt.sign({_id: userExist._id, username: userExist.username},process.env.REFRESH_JWT_SECRET,{expiresIn: "24h"})

            const storeRefreshToken = await Admin.updateOne(
                {username},
                {$set: {refreshToken}}
            )

            const refreshCookie = res.cookie("jwt",refreshToken,{httpOnly: true, sameSite: "none", secure:true, maxAge: 24*60*60*1000})
            console.log(refreshCookie)

            res.json({accessToken,refreshToken})

        }else{
            res.status(404).json({error:"username not found"})
        }
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.refreshLoginAdmin = async(req,res)=>{
    const cookie = req.cookies
    if(!cookie?.jwt) return res.status(401).json({error:"jwt token not present"})
    const refreshToken = cookie.jwt

    try {
        const cookieExist = await Admin.exists({refreshToken})
        if(!cookieExist) return res.status(400).json({error:"refreshToken not present"})

        let adminDetial = ""
        jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET,(err,payload)=>{
            if(err) return res.status(403).json({error:"incorrect refreshtoken"})
            adminDetial = payload
        })

        const newAccesstoken = jwt.sign({adminDetial},process.env.ACCESS_JWT_SECRET,{expiresIn:"10m"})
        
        res.json({newAccesstoken})
        
    } catch (error) {
        res.json({error:error.message})
    }

}

exports.logOutAdmin = async(req,res)=>{
    const cookie = req.cookies
    if(!cookie?.jwt) return res.sendStatus(204)
    const refreshCookie = cookie?.jwt

    try {
                
        const logoutAdmin = await Admin.updateOne(
            {refreshToken:refreshCookie},
            {$set: {refreshToken:null}}
        )
        res.clearCookie('jwt',{httpOnly: true,secure:true, sameSite: "none"})
        res.sendStatus(204)
        
    } catch (error) {
        res.json({error:error.message})
    }
}