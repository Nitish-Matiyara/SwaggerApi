const express = require("express")
const router = express.Router()

let studentData = [
    {
    id: 1,
    firstname: "Allu",
    lastname: "Arjun",
    age: 37,
    contact: 1234567890

},
{
    id: 2,
    firstname: "Kajal",
    lastname: "Agrawal",
    age: 35,
    contact: 1234567899

},
{
    id: 3,
    firstname: "Tammanah",
    lastname: "Bhatia",
    age: 37,
    contact: 1234512345

}
]

//--CREATE 
router.post("/", (req,res)=>{
    const {id, firstname, lastname, age, contact} = req.body
    studentData = [req.body, ...studentData]
    res.status(200).send(studentData)
})

//--READ
router.get("/", (req,res)=>{
    res.status(200).send(studentData)
})

//--READ BY ID
router.get("/:id", (req,res)=>{
    const getStudent = studentData.find( user => user.id === parseInt(req.params.id))
    res.status(200).send(getStudent)
})


//--UPDATE
router.put("/:id", (req,res)=>{
    let updateStudent = studentData.filter( user => user.id !== parseInt(req.params.id))
   

    let data = {
        id: req.params.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        contact: req.body.contact
    }
    updateStudent.push(data)
    res.status(200).send(updateStudent)
  
})

//--DELETE    
router.delete("/:id", (req,res)=>{
    const student = studentData.filter( user => user.id !== parseInt(req.params.id))
    res.status(200).send(student)
})

module.exports = router;