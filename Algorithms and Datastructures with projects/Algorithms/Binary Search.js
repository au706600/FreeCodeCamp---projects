
// Binary Search Algorithm

/*
Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

Find the middle value of a sorted array. If value == target return true (The value has been found and the search is complete).
If middle value < target, search right half of array in next compare.
If middle value > target, search left half of array in next compare.
If after searching the whole array the value is not present, return false (The array has been searched and the value is not in the array).
As you can see, you are successively halving an array, which gives you the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!

Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If the value is not found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5]
*/

function binarySearch(arrayList, value)
{
    let left = 0, right = arrayList.length - 1;
    let arrayPath = [];

    while(left <= right)
    {
        const mid = Math.floor(left + (right - left) / 2);
        arrayPath.push(arrayList[mid]);

        if(arrayList[mid] == value)
        {
            return arrayPath;
        }

        else if(arrayList[mid] < value)
        {
            left = mid + 1;
        }

        else
        {
            right = mid - 1;
        }
    }

    return "Value Not Found";

}

// Our test array
const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70];

// Test cases

console.log(binarySearch(testArray, 0)); // Should return [13, 5, 2, 0]
console.log(binarySearch(testArray, 1)); // Should return [13, 5, 2, 0, 1]
console.log(binarySearch(testArray, 6)) // Should return "Value Not Found"
console.log(binarySearch(testArray, 13)); // Should return [13]