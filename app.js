const express = require('express');
//import express from 'express';
const studentsRoute = require('./routes/StudentsRoute');
const morgan = require('morgan');
const mongoose = require('mongoose');

const db_user_name = 'viresh';
const db_pwd = 'Viresh%4019'; //actual password is Viresh@19 but @ needs to be url encoded to %40
const DB_URL = 'mongodb+srv://viresh:'+db_pwd+'@mongo-db-learning.82bygnn.mongodb.net/?retryWrites=true&w=majority';

// The major difference between require and import , is that require will automatically scan node_modules to find modules, but import , which comes from ES6, won't. Most people use babel to compile import and export , which makes import act the same as require .

const port = 3000;
const server = express();
server.use(express.json()); //this is written to make the code able to fetch body from request body
server.listen(port, () => {
    console.log('server started');
});

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.once('open', () => {
    console.log('db connected');
})

//morgan is a middleware that is used to log requests in console. A middleware is anything that access to request , response objects and next function of any request
server.use(morgan('tiny'));

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




