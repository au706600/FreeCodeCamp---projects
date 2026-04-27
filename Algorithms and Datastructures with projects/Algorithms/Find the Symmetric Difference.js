// Function to find the symmetric difference between two or more arrays

function sym(...args)
{
    if (args.length == 0)
    {
        return [];
    }

    let arr = args.map(e => [...new Set(e)]);
    let result = arr[0];

    for(let i = 1; i < arr.length; i++)
    {
        let temp = [];
        let base = result;
        let next = arr[i];

        base.forEach(e => {
            if(!next.includes(e))
            {
                temp.push(e);
            }
        });

        next.forEach(e => {
            if(!base.includes(e))
            {
                temp.push(e);
            }
        });

        result = temp;
    }

    return result;
}

// Some test cases
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // Should return [3, 4, 5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // Should return [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // Should return [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // Should return [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // Should return [1, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])) // Should return [2, 3, 4, 6, 7]