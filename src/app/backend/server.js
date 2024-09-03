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
