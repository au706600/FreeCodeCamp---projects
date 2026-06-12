
/*
function Node(element)
{
    this.element = element;
    this.next = null;
}

*/

/*
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

var Cat = new Node('Cat');
var Dog = new Node('Dog');

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;
*/

//---------------------------------------------------------------

// Implementing custom map wrapper and singly linked list

function LinkedList()
{
    var length = 0;
    var head = null;

    var Node = function(element)
    {
        this.element = element;
        this.next = null;
    }

    this.Head = function()
    {
        return head;
    }

    this.Size = function()
    {
        return length;
    }

    // Add node to linked list
    this.Add = function(element)
    {
        var node = new Node(element);

        if(head === null)
        {
            head = node;
        }
        else
        {
            var current = head;

            while(current.next !== null)
            {
                current = current.next;
            }

            current.next = node;
        }

        length++; 
    }

    // Remove node from linked list
    this.Remove = function(element)
    {
        var current = head;
        var previous = null;

        while(current !== null)
        {
            if(current.element === element)
            {
                if(previous === null)
                {
                    head = current.next;
                }

                else
                {
                    previous.next = current.next;
                }

                length--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    // Check if linked list is empty
    this.isEmpty = function()
    {
        return length === 0;
    }

    // Takes element as argument and returns that element's index in the linked list
    // If the element is not found in linked list, return -1
    this.indexAt = function(element)
    {
        var current = head;
        var idx = 0;

        while(current !== null)
        {
            if(current.element === element)
            {
                return idx;
            }

            current = current.next;
            idx++;
        }

        return -1;
    }

    // Takes index as argument and returns the element at the given index
    // If no element is found, return undefined
    this.elementAt = function(idx)
    {
        var current = head;
        var i = 0; 

        while(current !== null)
        {
            if(i === idx)
            {
                return current.element;
            }

            current = current.next;
            i++;
        }
        return undefined; 
    }

    // Removes and returns a node at given index. The method should return null
    // if given index is either negative or greater than or equal to the length of linked list
    this.removeAt = function(index)
    {
        // Check if linked list is one element

        if(head !== null && head.next === null)
        {
            var value = head.element;
            head = null;
            length--;
            return value;
        }

        var current = head;
        var previous = null;
        var i = 0;

        while(current !== null)
        {
            if(i === index)
            {
                if(previous === null)
                {
                    head = current.next;
                }

                else
                {
                    previous.next = current.next;
                    length--;
                    return current.element;
                }
            }

            previous = current;
            current = current.next;
            i++;
        }

        return null;
    }

    // Adds an element at a given index. Returns false if an element could not be added
    this.addAt = function(index, element)
    {
        if(index > length)
        {
            return false;
        }
        
        var i = 0;
        var node = new Node(element);

        if(index === 0)
        {
            node.next = head;
            head = node;
            length++;
            return true;
        }

        if(head === null)
        {
            head = node;
        }
        else
        {
            if(i === index)
            {
                var current = head;

                while(current.next !== null)
                {
                    current = current.next;
                }

                current.next = node;
                i++;
            }
            length++;
            return true;
        }

        return false;
    }

    // Prints elements of linked list
    this.Print = function()
    {
        var current = head;

        while(current !== null)
        {
            console.log('Linked list elements: ', current.element);
            current = current.next;
        }
        return;
    }

}

var linkedList = new LinkedList();

linkedList.Add('Kitten');
linkedList.Add('Puppy');
linkedList.Add('Snake');

linkedList.Add('Lion');
linkedList.Add('Tiger');
linkedList.Add('Dog');


linkedList.Remove('Dog');

linkedList.Print();

linkedList.addAt(3, 'Dog');

linkedList.Print();



