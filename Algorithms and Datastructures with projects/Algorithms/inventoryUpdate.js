
// Function to update the inventory with two arrays
function updateInventory(arr1, arr2)
{
    if (arr1.length == 0)
    {
        let delivery = [...arr2];

        delivery.sort(function(a,b)
        {
            if(a[1] < b[1])
            {
                return -1;
            }

            if(a[1] > b[1])
            {
                return 1
            }
            return 0;
        });

        return delivery;
    }

    if(arr2.length == 0)
    {
        return arr1;
    }

    if(arr1.length == 0 && arr2.length == 0)
    {
        return [];
    }

    let inventory = [...arr1];

    arr2.forEach(e => {
        let item = inventory.find(i => i[1] === e[1]);
        
        if(item)
        {
            item[0] += e[0];
        }

        else
        {
            inventory.push([e[0], e[1]]);
        }
    });

    inventory.sort(function (a,b){
        if(a[1] < b[1])
        {
            return -1;
        }

        if(a[1] > b[1])
        {
            return 1
        }
        return 0;
    });

    return inventory;
}

// Should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

// Should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []));

// [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

// [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));