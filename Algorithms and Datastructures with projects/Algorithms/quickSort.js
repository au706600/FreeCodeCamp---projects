
function sorting_As_Subarray(array)
{
    if(array.length == 0)
    {
        return [];
    }

    let sort_array = [...array];
    let pivot = sort_array[0];
    let subarray_less = [];
    let subarray_Equal = []; 
    let subArray_bigger = [];

    sort_array.filter((element) => {
        if(element < pivot)
        {
            subarray_less.push(element);
        }

        else if(element > pivot)
        {
            subArray_bigger.push(element);
        }

        else
        {
            subarray_Equal.push(element);
        }
    });

    return sorting_As_Subarray(subarray_less).concat(subarray_Equal, sorting_As_Subarray(subArray_bigger));

}

console.log(sorting_As_Subarray([5, 3, 8, 4, 2, 2])); // Should return [2, 3, 4, 5, 8]

console.log(sorting_As_Subarray([5, 3, 8, 4, 2, 1, 7, 6])); // Should return [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sorting_As_Subarray([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));