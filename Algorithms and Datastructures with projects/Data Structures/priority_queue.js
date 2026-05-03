
/* 
    Create a priority queue class that has the following methods: 

    - enqueue : Adding items with a priority 

    - dequeue : removing and returning items

    - size : return the number of items in the queue

    - front : return the element at the front of the queue (one with the highest priority)

    - isEmpty : check if queue is empty

*/

function PriorityQueue()
{
    this.collection = [];

    this.enqueue = function(x)
    {
        if(this.collection.length === 0)
        {
            this.collection.push(x);
            return;
        }

        for(let i = 0; i < this.collection.length; i++)
        {
            if(x[1] < this.collection[i][1])
            {
                this.collection.splice(i, 0, x);
                return;
            }
        }

        this.collection.push(x);
    }

    this.dequeue = function()
    {
        return this.collection.shift();
    }

    this.size = function()
    {
        return this.collection.length;
    }

    this.front = function()
    {
        return this.collection[0][0];
    }

    this.isEmpty = function()
    {
        return this.collection.length === 0;
    }
}

// ---------------------------------------------------------

let collection = new PriorityQueue([]);

collection.enqueue(['human', 1]);
collection.enqueue(['kitten', 2]);
collection.enqueue(['dog', 2]);
collection.enqueue(['rabbit', 2]);

collection.dequeue();
collection.dequeue();

console.log(collection.size()); // 2
console.log(collection.front()); // dog
console.log(collection.isEmpty()); // false