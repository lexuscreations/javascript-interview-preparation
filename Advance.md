```javascript
const a = 5

{
  const a = 5
  console.log("bracket", a)
}

console.log("inGlobal", a)
// create scope anywhere with -> { } | let and const are block scoped
// helpful in switch-case where we need to create same name variable in each case statement, ex - const result = "something"
```

<hr />

```javascript
const person = { name: "John", age: 34 }

if ("name" in person) console.log("before", person.name) // before John
delete person.name
if ("name" in person) console.log("after-delete", person.name) // this if block will not gonna execute
```

<hr />

```javascript
// polyfill - Math.floor()
Math.myCusFloor = a => ~~a
Math.myCusFloor(5.0) // 5
Math.myCusFloor(5.1) // 5
Math.myCusFloor(5.9) // 5
```

<hr />

```javascript
let aa = 1, b = 2, c = 3
aa = (b++, c++, b + c) // a = 7, b = 3, c = 4
console.log(aa) // 7
// we can write comma separated multiple expressions, wrapping with parentheses in one line
// and it's javascript default behavior, will return last expression - after solving -> a+b / 3 + 4
```

<hr />

```javascript
// not recommended - just for knowledge
const x = 10
eval("x = 20")
console.log(x) // 20
// String.fromCharCode(97, 108, 101, 114, 116, 40, 49, 41) // we'll gonna get string - "alert(1)"
eval(String.fromCharCode(97, 108, 101, 114, 116, 40, 49, 41)); // and here we'll gonna get 1 in alert
// eval execute javascript piece of code, which is in string - "alert(1)"
// 'a'.charCodeAt(0) - just to verify
```

<hr />

```javascript
// not recommended - just for knowledge
// The with statement adds the given object to the head of this scope chain during the evaluation of its statement body. Every unqualified name would first be searched within the object (through a in check) before searching in the upper scope chain.
const person = { name: "John" }
with (person) {
  console.log(name) // John
}
```

<hr />

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, my name is " + this.name)
  },
}
person.greet() // Hello, my name is John
const greet = person.greet
greet() // Hello, my name is undefined
// 
// solution -> greet.call(person)
```

<hr />

```javascript
const sym1 = Symbol()
const sym2 = Symbol("foo")
const sym3 = Symbol("foo")
console.log(sym1 === sym2) // false
console.log(sym2 === sym3) // false
// Symbol built-in object, returns symbol primitive, that's guaranteed to be unique
```

<hr />

```javascript
// NaN, special value, indicates - mathematical operation failed to produce meaningful result

console.log(typeof NaN) // "number"
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false
console.log(Math.sqrt(144)) // 12
console.log(Math.sqrt(-144)) // NaN

// NaN considered non-equivalent value, even to itself. behavior defined by IEEE 754 floating-point standard, which JavaScript follows

// Number.NaN or window.NaN -> you can check

// console.log(0 / 0 === NaN) -> wrong (this will not gonna work, don't do this) - instead use -> console.log(isNaN(0/0)) // true

// isNaN(NaN); // true | isNaN(123); // false | isNaN("hello"); // true
```

<hr />

```javascript
// not recommended - just for knowledge

// Function constructor ->  new Function | Function

// The function declaration, function defined with function keyword, same we can create with the help of this 'new Function constructor', we can pass n numbers of arguments [but / and] the last argument will gonna be the actual function [logic / body] only

// new Function(functionBody)
// new Function(arg0, functionBody)
// new Function(arg0, arg1, functionBody)
// new Function(arg0, arg1, /* … ,*/ argN, functionBody)

// Note - can be [ called / create ] with or without new keyword as well, both create new Function instance

new Function(String.fromCharCode(97, 108, 101, 114, 116, 40, 49, 41))() // here we'll gonna get 1 in alert
// in javascript, we usually get return value, front and same in back as well, in above line, calling newly created `function() { alert(1) }` at the end `()` which returned by `new Function` constructor

const sayHello = Function('alert("Hello")')
sayHello() // here we'll gonna get Hello in alert

const additionTwoNoFn = new Function("a", "b", "return a + b")
console.log(additionTwoNoFn(2, 3)) // 5

const sum = new Function('a', 'b', 'return a + b')
const add = Function("a, b, c", "return a + b + c")
console.log(sum(2, 3)) // 5
console.log(add(2, 3, 4)) // 9

// new Function('a', 'b', 'return a + b') // basic syntax
// new Function('a,b', 'return a + b') // comma-separated
// new Function('a , b', 'return a + b') // comma-separated with spaces
// new Function("a, b, c", "return a + b + c") // formatted
```

<hr />

```javascript
// Helmet helps secure, Express apps by setting various HTTP headers
import helmet from "helmet"
import cors from "cors"

app.use(cors())
// enable CORS (Cross-Origin Resource Sharing) for all routes, declare [right above / before] helmet middleware, this enable's - `origin` -> '*', (e.g. https://example.com), 'methods' -> GET, PUT, POST, DELETE, and OPTIONS. | headers ->  Content-Type, Authorization, and X-Requested-With | credentials -> default `false`

app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })) // (CORP)
// This ensures that resources on your site can only be shared with other origins if the appropriate CORS headers are included in the response.
// it is not a replacement for the CORS mechanism. However, it can be used as an additional layer of security to prevent cross-site data leaks in browsers that support it.

// ----remove
// X-Powered-By: Express
// helmet remove this from headers

// ----add
// X-DNS-Prefetch-Control: off
// the default behavior of some browsers to go through the link on your page, even before the user clicks on then to resolve their DNS records, (resolving the ULR to the matching ip address)
// 
// X-Frame-Options: SAMEORIGIN
// to prevent clickJacking attack, -> having some static assets to serve in iframes (clients) and want to whitelist some origins only to be allowed and for all other origins denies the access to this resource.
// 
// Strict-Transport-Security: max-age=15552000; includeSubDomains
// Load all content from your domain over HTTPS and also Refuse to connect in case of certificate errors and warnings.
//
// X-Download-Options: noopen
// This value instructs the browser not to open the downloaded file automatically, and instead to prompt the user to save the file or open it with a different application. (ex. prevent untrusted .exe or .mp3/mp4, etc.)
// 
// X-Content-Type-Options:nosniff
// only for some browser -> prevent browser to [sniffing / inference] the MIME-type of response content - and now by setting this up, means -> to saying, just do [believe / trust] on content-type header instead
// 
// X-XSS-Protection: 1; mode=block
// to prevent XSS attacks, -> For example, you can set the "X-XSS-Protection" header to "1; mode=block" to enable the browser's built-in XSS filter
```

<hr />

```javascript
// To Preventing XSS attacks

// Input validation: Validate all user input on the server-side, including form data, query parameters, and HTTP headers. This can be done using a validation library such as validator.js or express-validator

// Output encoding: Use output encoding to prevent any user input from being interpreted as code. This can be done using libraries like DOMPurify or sanitize-html

// HTTP response headers: such as Content Security Policy (CSP) and X-XSS-Protection to prevent XSS attacks

// Use a template engine: such as Handlebars or EJS that automatically escapes user input by default

// Keep dependencies up-to-date: with the latest security patches to minimize the risk of XSS attacks
```

<hr />

```javascript
// recursion, reverseString
const reverseString = str => str.length <= 1 ? str : reverseString(str.slice(1)) + str[0]
console.log(reverseString("hello world"))
```

<hr />

```javascript
// recursion, flatten multidimensional array
const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a
console.log(flatten([0, 1, 2, [[[3, 4]]]]))
```

<hr />

```javascript
// recursion / currying, add n numbers
// this implementation uses currying to build up a chain of functions that add numbers together, and recursion to keep adding numbers until the final result is reached
const total = a => b => b ? total(a+b) : a
console.log(total(5)(8)(1)(45)())
```

<hr />

```javascript
// to check exact type in javascript

// (Object.prototype.toString.call({a: 5}).replaceAll(/[\[\]]+/g, '').split(" ")[1] === 'Object') // true

const typeOf = i => Object.prototype.toString.call(i).replaceAll(/[\[\]]+/g, '').split(" ")[1]
['', 64, true, undefined, null, BigInt(5), Symbol(), [], {}, /^/, (()=>{})].map(v => typeOf(v))
// ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'BigInt', 'Symbol', 'Array', 'Object', 'RegExp', 'Function']
```

<hr />

```javascript
// wordCount without directly using any inbuilt function

const wordCount = str => {
  let count = 0
  let isWord = false

  for (let i = 0, len = str.length; i < len; i++) {
    if (/\w/.test(str[i])) {
      isWord = true
    } else if (isWord) {
        count++
        isWord = false
    }
  }

  return isWord ? ++count : count
}

console.log(wordCount(" The  quick brown  ")) // Output: 3
```

<hr />

```javascript
// difference - PUT vs PATCH

// PUT is used to completely [ replace / update complete ] the entire resource
//  PATCH is used to partially update a resource [update single key: value]
```

<hr />

```javascript
// lean() mongodb / mongoose -> what, when, why, disadvantages
// 
// what -> used to improve performance of queries by returning, plain JavaScript object instead of a full-fledged Mongoose document
// default, Mongoose returns documents, instances of mongoose.Document class
// which provides a lot of extra functionality such as getters, setters, and methods for saving and deleting documents
// 
// when -> we want to reduces the amount of memory used by the query, want significantly improved query performance, and just want plan data to return in response
// 
// why -> extra functionality comes at the cost of increased memory usage and slower query performance
// 
// disadvantages -> lose access to some of the functionality provided by mongoose.Document, such as virtual properties, pre and post hooks, and middleware
```

<hr />

```javascript
// import fs from 'fs';
// ReadFile vs CreateReadStream

// In summary, ReadFile is a synchronous blocking operation that reads the entire contents of a file into memory, while CreateReadStream is an asynchronous non-blocking operation that reads a file in small chunks or streams, making it more suitable for reading large files
```

<hr />

```javascript
// setTimeout, Promise, setImmediate, process.nextTick

async function test() {
  console.log('above'); // 1
  setTimeout(function () {
    console.log("setTimeout"); // 5
  }, 0);
  await new Promise((res, rej) => {
      console.log('Promise') // 2
      res()
  })
  setImmediate(function () {
    console.log("set immediate"); // 6
  });
  process.nextTick(function () {
    console.log("Next tick 1"); // 4
  });
  console.log('bottom'); // 3
}

test()
```
