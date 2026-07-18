
// https://www.w3schools.com/nodejs/nodejs_rest_api.asp

const express = require('express');
const app = express();
const path = require('path');
//import { searchWikipedia } from './wikipedia_viewer.js';
const { searchWikipedia } = require('./wikipedia_viewer.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wikipedia_viewer.html'));
});

app.post('/wiki', async (req, res) => {
    const query = req.body.query;

    const searchWiki = await searchWikipedia(query);

    res.json(searchWiki);
    //console.log("searchWiki: ", searchWiki);
});

app.listen(8000, () => {
    console.log(`Listening on http://localhost:8000`);
});