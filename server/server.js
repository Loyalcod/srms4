const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/db")
connectDB()
app.use(cors())
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello this the home page")
})

// adminRouter crude
const AdminRouter = require("./router/adminRouter")
app.use('/admin',AdminRouter)

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

// result router crude
const resultRouter = require("./router/resultRouter")
app.use("/result",resultRouter)

// total count router crude
const totalCountRouter = require("./router/totalCoutRouter")
app.use("/total", totalCountRouter)





app.listen(port, ()=>{
    console.log("this yaaya server is running")
})