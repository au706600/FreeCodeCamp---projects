

// Function to find pairwise matches in an array
function pairwise(arr, arg)
{
    if(arr.length == 0)
    {
        return 0;
    }

    let map = new Map();
    let pair = [];
    let used = new Set();
    let sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        let difference = arg - arr[i];

        if(map.has(difference))
        {
            let indices = map.get(difference);

            indices.forEach(e => {
                if(!used.has(e) && !used.has(i))
                {
                    pair.push([e, i]);
                    used.add(e);
                    used.add(i);
                }
            });
        }

        // Check if the current element is not in the map
        if(!map.has(arr[i]))
        {
            map.set(arr[i], []);
        }

        map.get(arr[i]).push(i); // Store the index of the current element
    }

    // Calculate the sum of all unique pairs
   for(let i = 0; i < pair.length; i++)
   {
       sum += pair[i][0] + pair[i][1];
   }

    return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // Should return 11
console.log(pairwise([1, 3, 2, 4], 4)); // Should return 1
console.log(pairwise([1, 1, 1], 2)); // Should return 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // Should return 10
console.log(pairwise([], 100)); // Should return 0.