
import http from 'http';
import fs from 'fs';

import { getCurrentLocationTemp } from './local_weather.js';


http.createServer((req, res) => 
{
    if(req.method == 'GET')
    {
        let file = req.url; 
        if(file === '/')
        {
            file = "/local_weather.html";
        }

        fs.readFile('./public' + file, function(err, data) 
        {
            if(err)
            {
                console.error(err);
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write("404 - File not found");
                res.end();
            }

            else
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }

    else if(req.method === 'POST' && req.url === '/weather')
    {
        let body = '';

        // Initiates every time a chunk of data is received from client and reassembles data to text
        req.on('data', chunk => {
            body += chunk;
        });

        // Initiates once every data is received
        req.on('end', async () => {
            let location = JSON.parse(body);
            let getCurrentPosTemp = await getCurrentLocationTemp(location);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(getCurrentPosTemp));
            res.end();
        });

        req.on('error', err => {
            console.error('Request error: ', err);
            res.writeHead(400);
            res.end();
        });
    }
}).listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`)
}); 