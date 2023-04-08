```javascript
// to use __dirname in { "type": "module" } -> (package.json)
/* 1). */ import { fileURLToPath } from "url";
/* 2). */ const __filename = fileURLToPath(import.meta.url);
/* 3). */ const __dirname = path.dirname(__filename);
```

# Javascript Interview Questions
https://pandao.github.io/editor.md/en.html
```javascript
// ------------------------------------------------
// remove - only first duplicate occurance - [1]
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

![image](https://user-images.githubusercontent.com/72046165/162038772-c7eeb748-fac3-4a42-bd52-f14fb5a91213.png)

![image](https://user-images.githubusercontent.com/72046165/162039608-ac9e733c-2cbd-4ef4-affc-9d3d93ec106a.png)

![image](https://user-images.githubusercontent.com/72046165/162039940-d2c5b240-4b5a-40a5-91a5-929618d2e6fd.png)
```
isArr = Object.prototype.toString.call(data) == '[object Array]';
// working with jquery
var isArr = $.isArray(data);
```


![image](https://user-images.githubusercontent.com/72046165/162050555-22ef0b0b-35f1-4d71-8e60-b5677a63c497.png)

