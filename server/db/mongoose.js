var mongoose = require('mongoose');
var moment = require('moment');
var REMOTE_MONGO = require('./keys').REMOTE_MONGO;
// const REMOTE_MONGO = 'mongodb://sahil7595:12345678@ds233208.mlab.com:33208/todos-api';

var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);
var db = {
  dev : 'mongodb://localhost:27017/TodoApp',
  test : 'mongodb://localhost:27017/TodoAppTest',
  mlab : REMOTE_MONGO
};
if(process.env.PORT){
  process.env.MONGODB_URI = db.mlab;
} else {
  process.env.PORT = 3000;
  if(env === 'development'){
    process.env.MONGODB_URI = db.dev;
  } else if (env === 'test'){
    process.env.MONGODB_URI = db.test;
  }
}

//copy the link from "To connect using a driver via the standard MongoDB URI" section
//insert db user name and password here



const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';

// const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connected to Mongo instance: ${ MONGO_URI }`)
}, (err) => {
    console.log('Error connecting to Mongo instance: ', err);
});

module.export = { mongoose };
