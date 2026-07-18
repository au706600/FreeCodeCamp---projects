

async function searchWikipedia(query) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;

    const response = await fetch(url);
    const data = await response.json();

    /*
    data.query.search.forEach((page) => {
        console.log(page.title);
        console.log(page.snippet);
        console.log(`https://en.wikipedia.org/?curid=${page.pageid}`);
    });

    */

    return data.query.search;

    //console.log(data.query.search);
    //console.log(`https://en.wikipedia.org/?curid=${data.pageid}`);
}

module.exports = { searchWikipedia };

//searchWikipedia("JavaScript");
