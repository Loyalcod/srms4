const allowedOrigin = require("../config/allowedOrigin")

const credentials = async(req,res,next)=>{
    const origin = req.headers.origin
    if(allowedOrigin.includes(origin)){
        res.headers("Access-Control-Allow-Credentails", true)
    }
    next()
}

module.exports = credentials