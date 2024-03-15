require('dotenv').config();

const express = require('express');
const app = express();

const auth = require('./routes/auth');
const token = require('./routes/token');

app.use('/auth', auth);
app.use('/token', token);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("\u001b[31m" + `[SERVER] API is running on port ${PORT}/`)
})