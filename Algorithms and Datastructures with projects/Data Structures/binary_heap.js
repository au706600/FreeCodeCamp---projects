
/* 
    For an array implementation of a heap, this is typically accomplished in three steps:

    - Add the new element to the end of the array.

    - If the element is larger than its parent, switch them.

    - Continue switching until the new element is either smaller than its parent or you reach the root of the tree.
    
    - Finally, a print method is added which returns an array of all the items that have been added to the heap.


*/

var MaxHeap = function()
{
    let heap = [null];

    this.insert = function(num) {
        heap.push(num);

        let index = heap.length - 1;

        while (index > 1 && heap[index] > heap[Math.floor(index / 2)]) 
        {
            let parentIndex = Math.floor(index / 2);

            // Swap child and parent
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];

            index = parentIndex;
        }
    };

    /*
        * The remove method should return the greatest value that has been added to our max heap and remove it from the heap. 

        It should also reorder the heap, so the heap property is maintained. After removing an element, 
        the next greatest element retaining in the heap should become the root. 

        For max heap, removing a element is done in the following way: 

        - Move the last element in the heap into the root position. 

        - If either child of the root is greater than it, swap the root with the child of greater value. 

        - Continue swapping until the parent is greater than both children or you reach the last level in the tree. 
    */
    this.remove = function()
    {
        let heap = this.heap;
        
        if (heap.length === 0) 
        {
            return null;
        }
            
        if (heap.length === 1) 
        {
            return heap.pop();
        }

        const max = heap[0];

        heap[0] = heap.pop();

        let index = 0;

        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let largest = index;

            if (left < heap.length && heap[left] > heap[largest]) {
                largest = left;
            }

            if (right < heap.length && heap[right] > heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [heap[index], heap[largest]] = [heap[largest], heap[index]];

            index = largest;
        }

        return max;
    };

    this.print = function() {
        return heap;
    };

}

function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  
    this.heap = [];

  // swap helper
  this.swap = function(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  };

  // parent index
  this.parent = function(i) {
    return Math.floor((i - 1) / 2);
  };

  // children
  this.left = function(i) {
    return 2 * i + 1;
  };

  this.right = function(i) {
    return 2 * i + 2;
  };

  // Insert (bubble up)
  this.insert = function(num) {
    this.heap.push(num);

    let index = this.heap.length - 1;

    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) 
    {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  };

  // Remove (bubble down)
  this.remove = function() {
    if (this.heap.length === 0) 
    {
        return null;
    }

    if (this.heap.length === 1)
        {
            return this.heap.pop();
        } 

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();

    let index = 0;

    while (true) {
      let left = this.left(index);
      let right = this.right(index);
      let smallest = index;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) 
        {
            smallest = left;
        }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) 
        {
            smallest = right;
        }

      if (smallest === index) 
        {
            break;
        }

      this.swap(index, smallest);
      index = smallest;
    }

    return min;
  };

  // Heap Sort
  this.sort = function() {
    let result = [];
    let copy = [...this.heap];

    while (this.heap.length > 0) {
      result.push(this.remove());
    }

    this.heap = copy; // restore original heap

    return result;
  };
};