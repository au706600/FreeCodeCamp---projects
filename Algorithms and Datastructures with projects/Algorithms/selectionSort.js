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
        let min_element = sort_array[i];
        let min_index = i;
        for(let j = i + 1; j < n; j++)
        {
            if(sort_array[j] < min_element)
            {
                min_element = sort_array[j];
                min_index = j;
            }
        }

        let temp = sort_array[i];
        sort_array[i] = min_element;
        sort_array[min_index] = temp;
    }

    return sort_array;
}

console.log(Sort_arr([5, 3, 8, 4, 2])); // Should return [2, 3, 4, 5, 8]

console.log(Sort_arr([5, 3, 8, 4, 2, 1, 7, 6])); // Should return [1, 2, 3, 4, 5, 6, 7, 8]

console.log(Sort_arr([])); // Should return []

console.log(Sort_arr([1])); // Should return [1]
console.log(Sort_arr([2, 1])); // Should return [1, 2]