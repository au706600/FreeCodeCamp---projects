
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

var Node = function()
{
    this.keys = new Map();
    this.end = false;
    this.setEnd = function()
    {
        this.end = false;
    }

    this.isEnd = function()
    {
        return this.end;
    }
};

/*
    - add method for storing objects in a trie data structure

    - isWord method for query if a given string is a word => returns a boolean value

    - print method for retrieving all the words => returns an array of all these words as string values

    Some link: https://www.geeksforgeeks.org/dsa/trie-insert-and-search/

*/

var Trie = function()
{
    this.root = new Node();

    // Add a word to the trie
    this.add = function(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.keys.has(char)) {
                node.keys.set(char, new Node());
            }
            node = node.keys.get(char);
        }

        node.setEnd();
    };

    // Check if a word exists in the trie
    this.isWord = function(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.keys.has(char)) {
                return false;
            }
            node = node.keys.get(char);
        }

        return node.isEnd();
    };

    // Return all words stored in the trie
    this.print = function() {
        let words = [];

        function search(node, string) {
            if (node.isEnd()) {
                words.push(string);
            }

            for (let [char, nextNode] of node.keys) {
                search(nextNode, string + char);
            }
        }

        search(this.root, "");

        return words;
    };
}