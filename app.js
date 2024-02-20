const express = require('express');
const app = express();
const port = process.env.APP_PORT || 5555;
const message = process.env.MESSAGE || "Hello World";

app.get('/motd', (req, res) => {
    res.json({'message' : message})
});

app.listen(port, () => {
    console.log('Server run on port 5555')
});