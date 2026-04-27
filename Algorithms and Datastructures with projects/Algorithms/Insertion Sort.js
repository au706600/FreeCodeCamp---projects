
function insertionSort(arr)
{
    if(arr.length == 0)
    {
        return [];
    }

    let sortedArray = [...arr];
    let n = sortedArray.length;

    for(let i = 1; i < n; i++)
    {
        let key = sortedArray[i];

        let j;

        for(j = i - 1; j >= 0; j--)
        {
            if(sortedArray[j] > key)
            {
                sortedArray[j + 1] = sortedArray[j];
            }

            else
            {
                break;
            }
        }
        sortedArray[j + 1] = key;
        
    }
    return sortedArray;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // Should return [2, 3, 4, 5, 8]