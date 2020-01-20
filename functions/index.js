const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

admin.initializeApp();
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: 'https://notes.codyb.co' }));

app.post('/functions/save', async (req, res) => {
  try {
    const { title, content } = req.body;
    await admin.database().ref('/notes').push({ title, content });
    res.status(200).json({ message: 'Note saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Note rejected on save' });
  }
});

exports.app = functions.https.onRequest(app);
