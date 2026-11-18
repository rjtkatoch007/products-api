const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://rjtkatoch007_db_user:Q0Nsb0cuO6p91pAR@cluster0.lfphut5.mongodb.net/'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db('shop');
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
