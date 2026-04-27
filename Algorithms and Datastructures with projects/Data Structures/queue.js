
/*
    Create a queue (FIFO) class that has the following methods: 

    - enqueue : push an element to the tail of the queue

    - dequeue : removes and returns the front element

    - front : retrieves front element

    - size : returns length 

    - isEmpty : check if queue is empty

*/

function Queue()
{
    var collection = [];

    this.enqueue = function(x)
    {
        collection.push(x); // Push element to end of array
    }

    this.dequeue = function()
    {
        /* 
            Another way of dequeuing would be: 

            const indexFrontElement = collection.indexOf(collection[0]);

            const removeFrontElement = collection.splice(indexFrontElement, 1)[0];

            return removeFrontElement;
        */

        return collection.shift(); // Retrieves the front element of array
    }

    this.front = function()
    {
        return collection[0]; // Return front element
    }

    this.size = function()
    {
        return collection.length;
    }

    this.isEmpty = function()
    {
        return collection.length === 0;
    }
}

//-----------------------------------------------

// Instantiate class

var collection = new Queue();

collection.enqueue(10);
collection.enqueue(15);
collection.enqueue(20);
collection.enqueue(25);
collection.enqueue(30);

console.log(collection.dequeue());
console.log(collection.dequeue());

console.log(collection.front());
console.log(collection.size());
console.log(collection.isEmpty());