const allowedOrigin = require("./allowedOrigin")

const corsOption = {
    origin: (origin,callback)=>{
        if(allowedOrigin.indexOf(origin) !== 1){
            callback(null,true)

        }else{
            callback(new Error("origin is invalid"))
        }
    },
    optionSuccessStatus: 200
}

module.exports = corsOption