
const express = require('express');

const imageRoutes = require('./Routes/images.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Image Search API is running");
});

app.use('/', imageRoutes);

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});