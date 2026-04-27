
function merge(left, right)
{

    //let firstHalf = array.slice(0, mid);
    //let secondHalf = array.slice(mid, array.length);
    let merged = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length)
    {
        if(left[i] <= right[j])
        {
            merged.push(left[i]);
            i++;
        }

        else
        {
            merged.push(right[j]);
            j++;
        }
    }

    while(i < left.length)
    {
        merged.push(left[i]);
        i++;
    }

    while(j < right.length)
    {
        merged.push(right[j]);
        j++;
    }

    return merged;
} 

function mergeSort(array)
{

    if(array.length <= 1)
    {
        return array;   
    }

    const mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}


console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));