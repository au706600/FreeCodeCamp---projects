
/*
    Create Set class that has the following methods: 

    - add : adds a value to the set collection as long as the value does not already exist in the set. It returns true
            if the value was successfully added and false otherwise. 

    - remove : removes a value of the set collection, where it checks beforehand if the value already exists in the set
               If it does then it removes the value and returns true and false otherwise. 

    - union : unifies two sets

    - intersection : finds intersection (common elements) between two sets

    - difference : finds difference between two sets. 

    - isSubsetOf : Checks if the first set is subset of second set. 

*/


class Set 
{
    constructor()
    {
        this.dictionary = {};
        this.length = 0;
    }

    has(x)
    {
        // undefined represents the absence of a value or the uninitialized state of a variable
        if(this.dictionary[x] !== undefined)
        {
            return true;
        }
        return false; 
    }

    values()
    {
        return Object.values(this.dictionary); 
    }

    add(x)
    {
        if(!this.has(x))
        {
            this.dictionary[x] = x;
            this.length++;
            return true;
        }
        return false; 
    }

    remove(x)
    {
        if(this.has(x))
        {
            delete this.dictionary[x];
            this.length--;
            return true;
        }
        return false; 
    }

    size()
    {
        return this.length; 
    }

    union(set1)
    {
        /*

        // Creating new object
        const unionSet = new Set();

        for(const ele of this.values())
        {
            unionSet.add(ele);
        }

        for(const ele of set1.values())
        {
            unionSet.add(ele);
        }

        return unionSet;

        */

        // If mutating set directly

        for(const ele of set1.values())
        {
            this.add(ele);
        }

        return this;
    }

    intersection(set1)
    {
        const intersectSet = new Set();

        for(const ele of set1.values())
        {
            if(this.has(ele))
            {
                intersectSet.add(ele);
            }
        }

        return intersectSet;
    }

    difference(set1)
    {
        const differenceSet = new Set();

        for(const ele of this.values())
        {
            if(!set1.has(ele))
            {
                differenceSet.add(ele);
            }
        }

        return differenceSet;
    }

    isSubsetOf(set1)
    {
        for(const ele of this.values())
        {
            if(set1.has(ele))
            {
                this.remove(ele);
            }
        }

        if(this.size() === 0)
        {
            return true;
        }
        else
        {
            return false; 
        }
    }
    
}

let set = new Set();
let set1 = new Set();
//let unionSet = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log(set.values()); // Returns [1, 2, 3, 4, 5]

set1.add(5);
set1.add(6);
set1.add(7);
set1.add(8);
set1.add(9);
set1.add(10);

set.union(set1);

console.log(set.values()); // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
// If based on implementation where a new object is created
unionSet.add(6);
unionSet.add(7);
unionSet.add(8);
unionSet.add(9);
unionSet.add(10);

let result = set.union(unionSet);

console.log(result.values()); // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/

