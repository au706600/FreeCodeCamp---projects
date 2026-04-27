
/*
    Create a stack (LIFO) class that has the following methods: 

    - push: pushes an element to the top of stack

    - pop: removes and retrieves the top element of stack

    - peek: returns the top element of stack

    - isEmpty: checks if stack is empty

    - clear: removes all elements of stack

*/

function Stack()
{
    var collection = [];

    this.push = function(x)
    {
        collection.push(x); // Pushes element to the back of array simulating top of stack
    }

    this.pop = function()
    {
        return collection.pop(); // Removes and returns the last element of array
    }

    this.peek = function()
    {
        let n = collection.length;
        return collection[n - 1]; // Last element
    }

    this.isEmpty = function()
    {
        return collection.length === 0; 
    }

    this.clear = function()
    {
        collection.length = 0;
    }
}

//-----------------------------------------------------

// Instantiate class

var collection = new Stack();

collection.push(6);
collection.push(10);

console.log(collection.pop());

console.log(collection.peek());
console.log(collection.isEmpty());
collection.clear();
console.log(collection.isEmpty());
