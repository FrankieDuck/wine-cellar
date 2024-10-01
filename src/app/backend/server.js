const express = require('express');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

let db;

connectToDb((err) => {
    if (!err) {
        db = getDb();
        app.listen(PORT, () => {
            console.log(`Backend is running on http://localhost:${PORT}`);
        });
    } else {
        console.error('Failed to connect to the database.');
    }
});

// Endpoint to fetch all wines from the 'wines' collection
app.get("/wines", async (req, res) => {
    const page = parseInt(req.query.p) || 0;
    const winesPerPage = 100;

    try {
        const wines = await db.collection('wines')
            .find()
            .sort({ Country: 1 })
            .skip(page * winesPerPage)
            .limit(winesPerPage)
            .toArray();

        res.status(200).json(wines);
    } catch (error) {
        console.error('Error fetching wines:', error);
        res.status(500).json({ error: 'Could not fetch data' });
    }
});

// Endpoint to fetch wines by type from the 'wines' collection
app.get("/wines/type/:type", async (req, res) => {
    const { type } = req.params;
    const page = parseInt(req.query.p) || 0;
    const winesPerPage = 100;

    try {
        const wines = await db.collection('wines')
            .find({ Type: type })
            .sort({ Country: 1 })
            .skip(page * winesPerPage)
            .limit(winesPerPage)
            .toArray();

        res.status(200).json(wines);
    } catch (error) {
        console.error('Error fetching wines:', error);
        res.status(500).json({ error: 'Could not fetch data' });
    }
});

// Endpoint to fetch a wine by ID from the 'wines' collection
app.get("/wines/:id", async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        try {
            const wine = await db.collection('wines').findOne({ _id: new ObjectId(req.params.id) });
            res.status(200).json(wine);
        } catch (error) {
            console.error('Error fetching wine:', error);
            res.status(500).json({ error: 'Could not fetch data' });
        }
    } else {
        res.status(400).json({ error: 'Invalid ID format' });
    }
});

// Endpoint to create a new wine record in the 'wines' collection
app.post("/wines", async (req, res) => {
    const wine = req.body;

    try {
        const result = await db.collection('wines').insertOne(wine);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating wine record:', err);
        res.status(500).json({ error: "Could not create a new wine record" });
    }
});

// Endpoint to delete a wine by ID from the 'wines' collection
app.delete('/wines/:id', async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        try {
            const result = await db.collection('wines').deleteOne({ _id: new ObjectId(req.params.id) });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error deleting wine:', error);
            res.status(500).json({ error: 'Could not delete wine record' });
        }
    } else {
        res.status(400).json({ error: 'Invalid ID format' });
    }
});

// Endpoint to update a wine by ID in the 'wines' collection
app.patch('/wines/:id', async (req, res) => {
    const updates = req.body;

    if (ObjectId.isValid(req.params.id)) {
        try {
            const result = await db.collection('wines').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error updating wine:', error);
            res.status(500).json({ error: 'Could not update wine record' });
        }
    } else {
        res.status(400).json({ error: 'Invalid ID format' });
    }
});

// PERSONAL COLLECTION API
app.get("/personal_collection", async (req, res) => {
    try {
        const wines = await db.collection('personal_collection')
            .find()
            .sort({ Country: 1 })
            .toArray();

        res.status(200).json(wines);
    } catch (error) {
        console.error('Error fetching personal collection wines:', error);
        res.status(500).json({ error: 'Could not fetch data' });
    }
});

app.post("/personal_collection", async (req, res) => {
    const wine = req.body;

    if (!wine._id) {
        return res.status(400).json({ error: "Wine must have an _id" });
    }

    try {
        const result = await db.collection('personal_collection').insertOne(wine);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating wine record:', err);
        res.status(500).json({ error: "Could not create a new wine record" });
    }
});

app.delete('/personal_collection/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await db.collection('personal_collection').deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            console.log(`No document found with ID: ${id}`);
            res.status(404).json({ error: 'Wine not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(`Error deleting wine with ID ${id}:`, error);
        res.status(500).json({ error: 'Could not delete wine record' });
    }
});

app.patch('/personal_collection/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        const result = await db.collection('personal_collection').updateOne(
            { _id: id },
            { $set: updates }
        );

        if (result.matchedCount === 0) {
            console.log(`No document found with ID: ${id}`);
            res.status(404).json({ error: 'Wine not found' });
        } else if (result.modifiedCount === 0) {
            res.status(200).json({ message: 'No changes were made' });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(`Error updating wine with ID ${id}:`, error);
        res.status(500).json({ error: 'Could not update wine record' });
    }
});
