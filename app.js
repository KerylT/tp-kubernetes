const express = require('express');
const app = express();
const port = 3000;
const message = "Hello World";

app.get('/motd', (req, res) => {
    res.json({'message' : message})
});

app.listen(port, () => {
    console.log('Server run on port 5555')
});