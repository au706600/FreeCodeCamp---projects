
function Sort_arr(array)
{
    if(array.length == 0)
    {
        return [];
    }

    let sort_array = [...array];

    let n = sort_array.length;

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(sort_array[j] > sort_array[j + 1])
            {
                let temp = sort_array[j];
                sort_array[j] = sort_array[j + 1];
                sort_array[j + 1] = temp;
            }
        }
    }

    return sort_array;
}

console.log(Sort_arr([5, 3, 8, 4, 2])); // Should return [2, 3, 4, 5, 8]

console.log(Sort_arr([5, 3, 8, 4, 2, 1, 7, 6])); // Should return [1, 2, 3, 4, 5, 6, 7, 8]

console.log(Sort_arr([])); // Should return []

console.log(Sort_arr([1])); // Should return [1]
console.log(Sort_arr([2, 1])); // Should return [1, 2]