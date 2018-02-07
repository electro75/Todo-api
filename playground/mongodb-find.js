// const MongoClient = require('mongodb').MongoClient();
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('Unable to connect to connect to MongoDb Server');
    }
    console.log('Connected To MongoDB server');

    // db.collection('Todos',).find(
    //     {
    //          _id: new ObjectID('5a7a8cc25a00d815544dcb47')
    //     }
    // ).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // })
    // db.collection('Todos',).find().count().then((count)=>{
    //     console.log(`Todos Count: ${ count }`);
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // })
    db.collection('Users').find({ name: 'Sahil' }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Nai hua ', err);
    })
    // db.close();
});