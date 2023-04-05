const jwt = require("jsonwebtoken")

const verifyAuthication = async (req,res,next)=>{
    const getCookie = req.cookies.jwt
    if(!getCookie) return res.status(401).json({message: "jwt cookie not present"})
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).json({message: "authHeader not present"})
    authToken = authHeader.split(" ")[1]
    jwt.verify(authToken,process.env.ACCESS_JWT_SECRET,(err,payload)=>{
        if(err) return res.status(401).json({message: "invalide token"})
    })
    next()
}

module.exports = verifyAuthication