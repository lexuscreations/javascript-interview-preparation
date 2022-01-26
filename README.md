# interview
```
// ------------------------------------------------
// remove - only first occurance - [1]
{
    const arr = [1, 2, 3, 2, 4, 4, 4]
    let index
    let isFound = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!isFound) {
                    index = i;
                    isFound = true
                }
            }
        }
    }

    arr.splice(index, 1)
    console.log(arr)
}

// ------------------------------------------------
// remove - all first occurance
{
    const arr = [1, 2, 3, 2, 4, 4, 4]
    for (let i = 0; i < arr.length; i++) arr.lastIndexOf(arr[i]) !== i && arr.splice(i, 1)
    console.log(arr)
}

// ------------------------------------------------
// remove - only first occurance - [2]
{
    const arr = [1, 2, 3, 2, 4, 4, 4]

    let isFound = false
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== i && !isFound) {
            arr.splice(i, 1)
            isFound = true
        }
    }
    console.log(arr)
}

// ------------------------------------------------
// remove - all duplicates - [1]
{
    const arr = [1, 2, 3, 2, 4, 4, 4]
    const unique = [...new Set(arr)]
    console.log(unique);
}

// ------------------------------------------------
// remove - when you already have the duplicate element
{
    const arr = [1, 2, 3, 2, 4, 4, 4]
    const index = arr.splice(arr.indexOf(2), 1)
    console.log(arr);
}

// ------------------------------------------------
// remove - all duplicates - [2]
// {
//     const arr = [1,2,3,2,4,4,4]
//     arr
//     console.log(arr);
// }

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// ------------------------------------------------
// reason - by reference - memoryAddress - nonPrimitive type
{
    (() => "use strict")()
    const a = { a: 2 };
    b = a
    b.a = 1
    c = {}
    console.log(a, b);
    console.log(a == a);
    console.log(a == b);
    console.log(a == c);
}
// solution****************************** spreadOperator
{
    (() => "use strict")()
    const a = { a: 2 };
    b = {...a }
    b.a = 1
    c = {}
    console.log(a, b);
    console.log(a == a);
    console.log(a == b);
    console.log(a == c);
}
// ------------------------------------------------
```
