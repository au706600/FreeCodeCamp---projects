
const express = require('express');
const app = express();
const path = require('path');

const { showTwitchStreamers } = require('./twitch_stream_dashboard');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'twitch_stream_dashboard.html'));
});

app.post('/twitch', async (req, res) => {
    const { streamers } = req.body;
    //console.log(typeof username);
    //const twitchStreamers = await showTwitchStreamers(username);
    const twitchStreamers = await Promise.all(
        streamers.map(showTwitchStreamers)
    );
    //console.log("Twitch streamers: ", twitchStreamers);

    res.json(twitchStreamers.flat());
});

app.listen(3000, () => {
    console.log(`Server is listening on http://localhost:3000`);
});