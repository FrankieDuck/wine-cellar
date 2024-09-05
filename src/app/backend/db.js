const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

let dbConnection

const uri = `mongodb+srv://${process.env.MONGO_EMAIL}:${process.env.MONGO_KEY}.gsxle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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