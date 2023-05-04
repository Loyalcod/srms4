const express = require("express")
const app = express()
require("dotenv").config()
const credentials = require("./middleWare/credentials")
const corsOption = require("./config/corsOption")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/db")
connectDB()

const port = process.env.PORT

app.use(credentials)
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send("hello this the home page")
})

// adminRouter crude
const AdminRouter = require("./router/adminRouter")
app.use('/admin',AdminRouter)

// result router crude
const resultRouter = require("./router/resultRouter")
app.use("/result",resultRouter)

// verification Authentication
const verifyAuthication = require("./middleWare/authHeaders")
app.use(verifyAuthication)

// student class router crude
const studentClassRouter = require("./router/studentClassRouter")
app.use("/classes",studentClassRouter) 

// student router crude
const StudentRouter = require("./router/studentRouter")
app.use("/student",StudentRouter)

// subject router crude
const SubjectRouter = require("./router/subjectRouter")
app.use("/subject",SubjectRouter)

//  combo router crude
const comboRouter = require("./router/comboRouter")
app.use('/combo',comboRouter)



// total count router crude
const totalCountRouter = require("./router/totalCoutRouter")
app.use("/total", totalCountRouter)





app.listen(port, ()=>{
    console.log("this yaaya server is running")
})