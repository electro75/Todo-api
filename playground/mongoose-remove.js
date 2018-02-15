const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//     console.log(res)
// })

Todo.findByIdAndRemove('5a82b0a025e44c0c98243386').then((todo)=>{
    console.log(todo);
})