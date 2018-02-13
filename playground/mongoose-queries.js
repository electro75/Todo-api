const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a7c2a0cc2e7a10730d4b1e1';

// User.find({
//     _id:id
// }).then((users)=>{
//     console.log('User: ',users);
// })

User.findById(id).then((user)=>{
    if(!user) {
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2));
},(e)=>{
    console.log(e)
})
// var id = '5a826ee50bec0e1954180515';

// if(!ObjectId.isValid(id)) {
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos by find', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo by findOne: ', todo);
// })

// Todo.findById(id).then((todo)=>{
//     if(!todo) {
//         return console.log('Id Not found');
//     }
//     console.log("Todo by id: ",todo)
// }).catch((e)=>{
//     console.log(e);
// })
