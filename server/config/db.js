const mongoose = require("mongoose")


const connectDB = async(req,res)=>{
    
    mongoose.set('strictQuery',false)
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`the db is connected to the ${conn.connection.host}`)
        
    } catch (error) {
        console.log({error:error.message})
        process.exit(1)
    }
}

module.exports = connectDB