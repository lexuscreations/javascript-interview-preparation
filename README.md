```javascript
// to use __dirname in { "type": "module" } -> (package.json)
/* 1). */ import { fileURLToPath } from "url";
/* 2). */ const __filename = fileURLToPath(import.meta.url);
/* 3). */ const __dirname = path.dirname(__filename);
```

<hr />

### 1). Question
![image](https://user-images.githubusercontent.com/120416755/216376656-9f60056d-2158-4ce3-8230-b18353cb3c4b.png)
- <i>Solution</i>
    - #### 1).
          const dup_arr = [1,2,3,8,2,7,3,4];
          console.log([...new Set([1,2,3,8,2,7,3,4])]);
              
    - #### 2).
          const dup_arr = [1,2,3,8,2,7,3,4];
          for (let i = 0; i < dup_arr.length; i++) {
              for (let j = 0; j < dup_arr.length; j++) {
                  if (dup_arr[i] == dup_arr[j] && i != j) {
                      dup_arr.splice(j, 1)
                  }
              }
          }
          console.log(dup_arr);
              
### 2). Question
### Reverse entire 2d array javascript
- <i>Solution</i>
    - #### 1).
          const N_Arr = [[1,2,3], [4,5,6], [7,8,9]]
          console.log(N_Arr.map(p_arr => p_arr.reverse()).reverse());
              
    - #### 2).
          const N_Arr = [[1,2,3], [4,5,6], [7,8,9]]
          const reversed_N_Arr = []
          for (let i = N_Arr.length-1; i >= 0; i--) {
              const temp = []
              for (let j = N_Arr[i].length-1; j >= 0; j--) {
                  temp.push(N_Arr[i][j])
              }
              reversed_N_Arr.push(temp)
          }
          console.log(reversed_N_Arr);
              

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

