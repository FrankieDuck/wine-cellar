const { MongoClient } = require('mongodb');

let dbConnection

const uri = 'mongodb+srv://frankieduck15:EcVgTehaUAaxSutr@cluster0.gsxle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'wine';

const connectToDb = async (cb) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        dbConnection = client.db(dbName);
        console.log('Connected to MongoDB Atlas');
        cb();
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        cb(err);
    }
};

const getDb = () => dbConnection;

module.exports = { connectToDb, getDb };