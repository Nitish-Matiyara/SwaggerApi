const express = require("express")
const swaggerUI = require("swagger-ui-express")
const swaggerFile = require("./swagger_output.json")
const studentRouter = require("./routes/studentRouter")
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile) )
app.use("/student", studentRouter)

app.listen(8001, ()=>{
    console.log('Server started successfully on port 8001')
})
