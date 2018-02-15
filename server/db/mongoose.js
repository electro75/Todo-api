var mongoose = require('mongoose');
var moment = require('moment');

//copy the link from "To connect using a driver via the standard MongoDB URI" section
//insert db user name and password here
var LOCAL_MONGO = require('./keys').LOCAL_MONGO;
var REMOTE_MONGO = require('./keys').REMOTE_MONGO;

// const REMOTE_MONGO = 'mongodb://sahil7595:12345678@ds233208.mlab.com:33208/todos-api';
// const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';

const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connected to Mongo instance: ${ MONGO_URI }`)
}, (err) => {
    console.log('Error connecting to Mongo instance: ', err);
});

module.export = { mongoose };
