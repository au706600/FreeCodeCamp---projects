// Function to check for repeated characters

function hasRepeats(s)
{
    return /(.)\1/.test(s); // Check for repeated characters
}

// Function to get all permutations of a string
function getPermutations(str)
{
    if(str.length <= 1)
    {
        return [str]; // 
    }

    let perm = [];

    for(let i = 0; i < str.length; i++)
    {
        let char = str[i];
        let rest = str.slice(0, i) + str.slice(i + 1);

        getPermutations(rest).forEach(e => {
            perm.push(char + e);
        });
    }
    return perm;
}

// Function to count the number of unique permutations of a string
function permAlone(str)
{
    return getPermutations(str).filter(s => !hasRepeats(s)).length;
}
       

console.log(permAlone('aab')); // Should return 2

console.log(permAlone('aaa')); // Should return 0

console.log(permAlone('aabb')); // Should return 8

console.log(permAlone('abcdefa')); // Should return 3600

console.log(permAlone('abfdefa')); // Should return 2640

console.log(permAlone('zzzzzzz')); // Should return 0

console.log(permAlone('a')); // Should return 1
