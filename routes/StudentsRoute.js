const express = require('express');
const router = express.Router();
const students =  require('../data/students.json');
const mongoose = require('mongoose');

router.get('/', (req,res) => {
    res.json(students);
})

//to create database schema and model
const studentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    course: String
})

const studentsModel = mongoose.model('Student', studentsSchema);


//to test post, put and delete methods , we need postman

//this will create a new student record on db
router.post('/', (req,res) => {
    const id = new mongoose.Types.ObjectId();
    let studentRecord = Object.assign({
        _id: id
    },req.body);
    let newRecord = new studentsModel(studentRecord);
    newRecord.save().then((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.json(data);
        }
    })
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