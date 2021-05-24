const express = require('express');
//import express from 'express';
import studentsRoute from './routes/StudentsRoute';

// The major difference between require and import , is that require will automatically scan node_modules to find modules, but import , which comes from ES6, won't. Most people use babel to compile import and export , which makes import act the same as require .

const port = 3000;
const server = express();
server.listen(port, () => {
    console.log('server started');
});

server.use('/students', studentsRoute);

//endpoints / routes
server.get('/', (req,res) => {
    console.log('my first route');
    res.send('my first response');
})



server.post('/coronaFight', (req,res) => {
    res.end();
    //to send a 200 success response instead of sending any other data use end() method
})




