
/*
    Create class CircularQueue with the following methods: 

    - enqueue : write pointer advances forward and loop back to the beginning once it reaches the end of the queue. 
                The method should return the item enqueued if successful, otherwise null. 

    - dequeue : read pointer advances forward. When dequeuing, return item, otherwise null. 

    * The write pointer should not be allowed to move past the read pointer 
      and the read pointer should not be able to advance past data written. 

*/

class CircularQueue 
{
    constructor(size)
    {
        this.queue = [];
        this.write = 0;
        this.read = 0;
        this.max = size - 1;

        while(size > 0)
        {
            this.queue.push(null);
            size--;
        }
    }

    print()
    {
        return this.queue;
    }

    enqueue(item)
    {
        if(this.queue[this.write] !== null)
        {
            return null;
        }

        this.queue[this.write] = item;

        this.write = (this.write + 1) % this.max;

        return item;
    }

    dequeue()
    {
        if(this.queue[this.read] === null)
        {
            return null;
        }

        const item = this.queue[this.read];

        this.queue[this.read] = null;

        this.read = (this.read + 1) % this.max;

        return item;
    }
}