const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

let dbConnection

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

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