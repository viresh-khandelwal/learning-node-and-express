const express = require('express');
const router = express.Router();
const students =  require('../data/students.json');


router.get('/', (req,res) => {
    res.json(students);
})


//to test post, put and delete methods , we need postman

router.post('/', (req,res) => {
    res.json(students);
})

router.put('/', (req,res) => {
    res.json(students);
})

router.delete('/', (req,res) => {
    res.json(students);
})

//to get path parameters from request
router.get('/:id', (req,res) => {
    let student = students.find((student) => {
       if(student.id === req.params.id){
           return student;
       }
    });
    student ? res.send(student) : res.send('no record found');
})

module.exports = router;