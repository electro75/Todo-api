// const MongoClient = require('mongodb').MongoClient();
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('Unable to connect to connect to MongoDb Server');
    }
    console.log('Connected To MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a7ac6e8a7f88922750000cd')
    // },{
    //     $set: {
    //         text: "Walk The Dogs"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( docs => console.log(docs));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a7a943e2cf658101c9be3bd')
    },{
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( docs => console.log(docs))
    // db.close();
});