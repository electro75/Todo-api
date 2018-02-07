// const MongoClient = require('mongodb').MongoClient();
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('Unable to connect to connect to MongoDb Server');
    }
    console.log('Connected To MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Do something atleast',
    //     completed: false

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert ToDo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    // db.collection('Users').insertOne({
    //     name: 'Sahil',
    //     age: 22,
    //     location: 'Mumbai, India'
    // }, (err, result)=>{
    //     if(err) {
    //         return console.log('Unable to insert ToDo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    // db.close();
});