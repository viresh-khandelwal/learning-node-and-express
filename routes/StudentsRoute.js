const express = require('express');
const router = express.Router();
const students =  require('../data/students.json');
const mongoose = require('mongoose');

//to create database schema and model
const studentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    course: String
})

const studentsModel = mongoose.model('Student', studentsSchema);

//to get all records from of db 
router.get('/', (req,res) => {
   studentsModel.find().then((error,data) => {
       if(error){
        res.status(500).send(error);
       }else{
           res.json(data)
       } 
   })
})


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

//to update an object in mongo DB database
router.put('/:id', (req,res) => {
   studentsModel.findById(req.params.id, (err,student) => {
       if(err){
           res.status(500).send(err);
       }else if(student){
           student.name = req.body.name;
           student.course = req.body.course;
           student.save().then((err,data) => {
               if(err){
                   res.status(500).send(err);
               }else{
                   res.send(student);
               }
           })
       }
   })
})

//to remove an object from mongoDB database
router.delete('/:id', (req,res) => {
    studentsModel.findByIdAndRemove(req.params.id, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        if(data){
            res.status(500).send(`student with id ${req.params.id} has been deleted`);
        }
    })
})

//to get a specific object from mongoDB database by adding a parameter in request
router.get('/:id', (req,res) => {
    studentsModel.findById(req.params.id, (err, data) => {
        if(err){
            res.status(404).send()
        }else{
            res.send(data);
        }
    })
})

module.exports = router;