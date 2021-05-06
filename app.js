const express = require('express');
//import express from 'express';
const students =  require('./data/students.json');

// The major difference between require and import , is that require will automatically scan node_modules to find modules, but import , which comes from ES6, won't. Most people use babel to compile import and export , which makes import act the same as require .

const port = 3000;
const server = express();
server.listen(port, () => {
    console.log('server started');
});

//endpoints / routes
server.get('/', (req,res) => {
    console.log('my first route');
    res.send('my first response');
})

server.get('/students', (req,res) => {
    res.json(students);
})


//to test post, put and delete methods , we need postman

server.post('/students', (req,res) => {
    res.json(students);
})

server.put('/students', (req,res) => {
    res.json(students);
})

server.delete('/students', (req,res) => {
    res.json(students);
})


server.post('/coronaFight', (req,res) => {
    res.end();
    //to send a 200 success response instead of sending any other data use end() method
})





