const admin = require('firebase-admin');
const serviceAccount = require('./ServicesAccountKey.json'); // Ensure this file exists

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// verifyToken function to check Firebase ID tokens middleware
const express = require('express');
const app = express();

async function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized');
    }
    const idToken = authHeader.split('Bearer ')[1];
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken; // Attach user info to request
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).send('Unauthorized');
    }
}

// Example route that uses the verifyToken middleware
app.get('/api/protected', verifyToken, (req, res) => {
    res.send(`Hello ${req.user.email}, you are authorized!`);
});

