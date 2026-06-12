
var Map = function()
{
    // Wrapper around javascript object
    this.collection = {};

    // Accepts key value pair to add to the map
    this.add = function(key, value)
    {
        return this.collection[key] = value;
    }

    // Accepts a key and removes the associated (key, value) pair
    this.remove = function(key)
    {
        delete this.collection[key];

        // Second method via destructuring
        // const {key, ...rest} = this.collection;
    }

    // Accepts a key and returns the stored value
    this.get = function(keys)
    {
        return this.collection[keys];
    }

    // Accepts a key and returns true if the key exists or false if it doesn't
    this.has = function(key)
    {
        return this.collection.hasOwnProperty(key);
    }

    // Returns an array of all the values in the map
    this.values = function()
    {
        return Object.values(this.collection);
    }

    // Returns the number of items in the map
    this.size = function()
    {
        return Object.keys(this.collection).length;
    }

    // Empties the map
    this.clear = function()
    {
        this.collection = {};
    }
}