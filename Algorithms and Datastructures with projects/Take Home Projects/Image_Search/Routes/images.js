
const express = require('express');
const router = express.Router();
const recentSearches = [];


router.get('/query/:search', async (req, res) => {
    try
    {
        const searchTerm = req.params.search;
        const page = req.query.page || 1;

        recentSearches.unshift({
            term: searchTerm,
            when: new Date()
        });

        if(recentSearches.length > 10)
        {
            recentSearches.pop();
        }

        const limit = 10;

        const url = `https://commons.wikimedia.org/w/api.php?action=query` +
            `&generator=search` +
            `&gsrsearch=${encodeURIComponent(searchTerm)}` +
            `&gsrnamespace=6` +
            `&gsrlimit=${limit}` +
            `&gsroffset=${(page - 1) * limit}` +
            `&prop=imageinfo` +
            `&iiprop=url` +
            `&format=json` +
            `&origin=*`;

        const response = await fetch(url);
        const data = await response.json();

        if(!data.query)
        {
            return res.json([]);
        }
        
        const images = Object.values(data.query.pages).map((image) => {
            return {
                imageUrl: image.imageinfo[0].url,
                description: image.title, 
                pageUrl: `https://commons.wikimedia.org/wiki/${image.title.replaceAll(" ", "_")}`
            }
        });

        res.json(images);
    }

    catch(err)
    {
        res.status(500).json({
            error: err.message
        });
    }
});

router.get('/recent', (req, res) => {
    res.json(recentSearches);
});

module.exports = router;