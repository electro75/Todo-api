var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { user } = require('./models/user');

var app = expresss();

app.post('/todos', (req, res)=>{
    
})

app.listen(3000 , ()=>{
    console.log('Starting on port 3000');
})
