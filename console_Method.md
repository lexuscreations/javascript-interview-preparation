## Here are some of the most commonly used console methods in JavaScript, along with code examples and their expected output:

<hr />

### 1). console.log(): This method is used to log information to the console. It takes [any / n] number of arguments and outputs them to the console.

```javascript
console.log("Hello"); // Hello
const msg = 'Hey'
console.log(`${msg} buddy`); // Hey buddy
console.log(`This is
multi line msg`); // This is
                    // multi line msg

console.log(true); // true

console.log(5); // 5

console.log(NaN); // NaN

console.log(null); // null

console.log(undefined); // undefined

console.log(BigInt(56465465465465)); // 56465465465465n

console.log(Symbol('foo')); // Symbol(foo)

console.log(/^[a-z]+/g); // /^[a-z]+/g
console.log(RegExp('\\d{3}-\\d{2}-\\d{4}')); // /\d{3}-\d{2}-\d{4}/

console.log([5, 4, 4, 6]); // [5, 4, 4, 6]

console.log({age: 90}); // {age: 90}

console.log((()=>{})); // ()=>{}

console.log(new Date()); // Mon Apr 10 2023 01:38:33 GMT+0530 (India Standard Time)
```

<hr />

### 2). console.info(): This method is similar to console.log(), but is intended for informative messages.

```javascript
console.info("This is an informative message."); // This is an informative message.
```

![image](https://user-images.githubusercontent.com/72046165/230794490-4f406827-af74-49ab-ba4a-2ab8ce9653e2.png)

<hr />

### 3). console.warn(): This method is used to log warning messages to the console.

```javascript
console.warn("This is a warning message."); // This is a warning message.
```

![image](https://user-images.githubusercontent.com/72046165/230794552-e0e015ec-dd68-4216-86bf-cc8c993d4ca9.png)

<hr />

### 4). console.error(): This method is used to log error messages to the console.

```javascript
console.error("This is an error message."); // This is an error message.
```

![image](https://user-images.githubusercontent.com/72046165/230794647-c8ad4034-1e28-410f-a6e9-fa2702d0bd9d.png)

<hr />

### 5). console.table(): This method is used to display tabular / object data as a table.

```javascript
const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 }
];

console.table(data);
```

![image](https://user-images.githubusercontent.com/72046165/230794730-9eee89e1-d4bc-4fa1-8fd6-d54527588ac6.png)

<hr />

### 6). console.time(): This method is used to start a timer. Use console.timeEnd() to stop the timer and log the elapsed time.

```javascript
console.time("timer");

for (let i = 0; i < 1000000; i++) {
  // do something
}

console.timeEnd("timer"); // timer: 3.76708984375 ms
```

![image](https://user-images.githubusercontent.com/72046165/230794772-3ff53e39-8d3f-49e0-9131-17f43ab3c5e6.png)

<hr />

### 7). console.group() or console.groupCollapsed(): This method is used to group console output together.

![image](https://user-images.githubusercontent.com/72046165/230794370-d1660905-331c-4b14-a36a-e696e8fcde0d.png)
