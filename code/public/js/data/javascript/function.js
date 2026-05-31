QuizData.questions.push(
{
  id: 'js_functions_1',
  topicId: 'js_functions',
  question: 'Write a function declaration that adds two numbers and returns the result.',
  mathSolution: 'Use function keyword with parameters.',
  codeSolution: 'function add(a, b) {\n    return a + b;\n}\nconsole.log(add(5, 3));  // 8',
  hint: 'Use `function name(parameters) { return value; }`'
},
{
  id: 'js_functions_2',
  topicId: 'js_functions',
  question: 'Write a function expression that multiplies two numbers.',
  mathSolution: 'Assign anonymous function to variable.',
  codeSolution: 'const multiply = function(a, b) {\n    return a * b;\n};\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Function expression is stored in a variable.'
},
{
  id: 'js_functions_3',
  topicId: 'js_functions',
  question: 'Write an arrow function that subtracts two numbers.',
  mathSolution: 'Use => syntax, implicit return for single expression.',
  codeSolution: 'const subtract = (a, b) => a - b;\nconsole.log(subtract(10, 4));  // 6',
  hint: 'Arrow functions with single expression have implicit return.'
},
{
  id: 'js_functions_4',
  topicId: 'js_functions',
  question: 'Write a function with default parameter value.',
  mathSolution: 'Assign default in parameter list.',
  codeSolution: 'function greet(name = "Guest") {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet());  // Hello, Guest!\nconsole.log(greet("John"));  // Hello, John!',
  hint: 'Use `param = defaultValue` in function definition.'
},
{
  id: 'js_functions_5',
  topicId: 'js_functions',
  question: 'Write a function that accepts rest parameters (...args).',
  mathSolution: 'Rest parameter collects all arguments into array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Use `...parameterName` to collect remaining arguments.'
},
{
  id: 'js_functions_6',
  topicId: 'js_functions',
  question: 'Write a function that returns the maximum of three numbers.',
  mathSolution: 'Use Math.max or compare manually.',
  codeSolution: 'function maxOfThree(a, b, c) {\n    return Math.max(a, b, c);\n}\nconsole.log(maxOfThree(10, 25, 15));  // 25',
  hint: 'Use `Math.max()` for multiple numbers.'
},
{
  id: 'js_functions_7',
  topicId: 'js_functions',
  question: 'Write a recursive function to calculate factorial.',
  mathSolution: 'n! = n * (n-1)!, base case n <= 1.',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5));  // 120',
  hint: 'Recursive functions call themselves with modified parameters.'
},
{
  id: 'js_functions_8',
  topicId: 'js_functions',
  question: 'Write a function that checks if a number is even using return value.',
  mathSolution: 'Return boolean based on modulus.',
  codeSolution: 'function isEven(num) {\n    return num % 2 === 0;\n}\nconsole.log(isEven(4));  // true\nconsole.log(isEven(7));  // false',
  hint: 'Return boolean directly from comparison.'
},
{
  id: 'js_functions_9',
  topicId: 'js_functions',
  question: 'Write a function that returns multiple values using object.',
  mathSolution: 'Return object with multiple properties.',
  codeSolution: 'function getMinMax(arr) {\n    return {\n        min: Math.min(...arr),\n        max: Math.max(...arr)\n    };\n}\nconsole.log(getMinMax([3, 7, 1, 9, 4]));  // {min:1, max:9}',
  hint: 'Use object literal to return multiple values.'
},
{
  id: 'js_functions_10',
  topicId: 'js_functions',
  question: 'Write a function that uses closure to create counter.',
  mathSolution: 'Inner function retains access to outer variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    };\n}\nconst counter = createCounter();\nconsole.log(counter());  // 1\nconsole.log(counter());  // 2',
  hint: 'Inner function has access to outer function\'s variables.'
},
{
  id: 'js_functions_11',
  topicId: 'js_functions',
  question: 'Write a function that uses callback to process array.',
  mathSolution: 'Pass function as argument to another function.',
  codeSolution: 'function processArray(arr, callback) {\n    let result = [];\n    for (let item of arr) {\n        result.push(callback(item));\n    }\n    return result;\n}\nfunction double(x) { return x * 2; }\nconsole.log(processArray([1,2,3], double));  // [2,4,6]',
  hint: 'Callback functions are passed as arguments.'
},
{
  id: 'js_functions_12',
  topicId: 'js_functions',
  question: 'Write an Immediately Invoked Function Expression (IIFE).',
  mathSolution: 'Define and execute function immediately.',
  codeSolution: '(function() {\n    console.log("IIFE executed!");  // IIFE executed!\n})();\n\n(() => console.log("Arrow IIFE"))();  // Arrow IIFE',
  hint: 'Wrap function in parentheses and call immediately.'
},
{
  id: 'js_functions_13',
  topicId: 'js_functions',
  question: 'Write a function that demonstrates hoisting (function declaration).',
  mathSolution: 'Function declarations are hoisted completely.',
  codeSolution: 'console.log(sayHello("World"));  // Hello, World!\nfunction sayHello(name) {\n    return `Hello, ${name}!`;\n}',
  hint: 'Function declarations can be called before definition.'
},
{
  id: 'js_functions_14',
  topicId: 'js_functions',
  question: 'Show that function expressions are not hoisted.',
  mathSolution: 'Only variable declaration is hoisted, not assignment.',
  codeSolution: '// console.log(sayHi("John"));  // TypeError\nconst sayHi = function(name) {\n    return `Hi, ${name}!`;\n};\nconsole.log(sayHi("John"));  // Hi, John!',
  hint: 'Function expressions follow variable hoisting rules.'
},
{
  id: 'js_functions_15',
  topicId: 'js_functions',
  question: 'Write a higher-order function that returns a function.',
  mathSolution: 'Function that returns another function.',
  codeSolution: 'function multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\nconst double = multiplyBy(2);\nconsole.log(double(5));  // 10',
  hint: 'Return function from another function (closure).'
},
{
  id: 'js_functions_16',
  topicId: 'js_functions',
  question: 'Write a function that uses the arguments object.',
  mathSolution: 'arguments is array-like object of all parameters.',
  codeSolution: 'function sumAllArgs() {\n    let sum = 0;\n    for (let i = 0; i < arguments.length; i++) {\n        sum += arguments[i];\n    }\n    return sum;\n}\nconsole.log(sumAllArgs(1, 2, 3, 4));  // 10',
  hint: '`arguments` works only in non-arrow functions.'
},
{
  id: 'js_functions_17',
  topicId: 'js_functions',
  question: 'Write a function using call() method.',
  mathSolution: 'call() invokes function with specified this value.',
  codeSolution: 'function introduce() {\n    return `I am ${this.name} and I am ${this.age} years old.`;\n}\nconst person = { name: "Alice", age: 25 };\nconsole.log(introduce.call(person));  // I am Alice and I am 25 years old.',
  hint: '`call()` sets `this` and passes arguments individually.'
},
{
  id: 'js_functions_18',
  topicId: 'js_functions',
  question: 'Write a function using apply() method.',
  mathSolution: 'apply() similar to call but arguments as array.',
  codeSolution: 'function sum(a, b, c) {\n    return a + b + c;\n}\nconst numbers = [1, 2, 3];\nconsole.log(sum.apply(null, numbers));  // 6',
  hint: '`apply()` takes array of arguments.'
},
{
  id: 'js_functions_19',
  topicId: 'js_functions',
  question: 'Write a function using bind() method.',
  mathSolution: 'bind() returns new function with bound this value.',
  codeSolution: 'const person = { name: "Bob" };\nfunction greet() {\n    return `Hello, ${this.name}!`;\n}\nconst boundGreet = greet.bind(person);\nconsole.log(boundGreet());  // Hello, Bob!',
  hint: '`bind()` creates permanent this binding.'
},
{
  id: 'js_functions_20',
  topicId: 'js_functions',
  question: 'Write an arrow function that preserves lexical this.',
  mathSolution: 'Arrow functions don\'t have their own this.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    getDelayedName: function() {\n        setTimeout(() => {\n            console.log(this.name);  // My Object (arrow preserves this)\n        }, 100);\n    }\n};\nobj.getDelayedName();',
  hint: 'Arrow functions inherit `this` from surrounding scope.'
},
{
  id: 'js_functions_21',
  topicId: 'js_functions',
  question: 'Write a function that uses default parameters with expression.',
  mathSolution: 'Default parameters can be expressions.',
  codeSolution: 'function getPrice(price, tax = price * 0.08) {\n    return price + tax;\n}\nconsole.log(getPrice(100));  // 108\nconsole.log(getPrice(100, 10));  // 110',
  hint: 'Default parameter can reference previous parameters.'
},
{
  id: 'js_functions_22',
  topicId: 'js_functions',
  question: 'Write a generator function that yields values.',
  mathSolution: 'Use function* and yield keyword.',
  codeSolution: 'function* numberGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nconst gen = numberGenerator();\nconsole.log(gen.next().value);  // 1\nconsole.log(gen.next().value);  // 2\nconsole.log(gen.next().value);  // 3',
  hint: 'Generator functions use `function*` and `yield`.'
},
{
  id: 'js_functions_23',
  topicId: 'js_functions',
  question: 'Write an async function that returns a promise.',
  mathSolution: 'async functions always return a promise.',
  codeSolution: 'async function fetchData() {\n    return "Data loaded";\n}\nfetchData().then(result => console.log(result));  // Data loaded',
  hint: '`async` keyword makes function return a promise.'
},
{
  id: 'js_functions_24',
  topicId: 'js_functions',
  question: 'Write a function with error handling using try-catch.',
  mathSolution: 'Use try-catch to handle exceptions gracefully.',
  codeSolution: 'function divide(a, b) {\n    try {\n        if (b === 0) throw new Error("Division by zero");\n        return a / b;\n    } catch (error) {\n        return `Error: ${error.message}`;\n    }\n}\nconsole.log(divide(10, 0));  // Error: Division by zero',
  hint: 'Use `throw` to create custom errors.'
},
{
  id: 'js_functions_25',
  topicId: 'js_functions',
  question: 'Write a pure function (no side effects).',
  mathSolution: 'Pure function returns same output for same input.',
  codeSolution: 'function pureAdd(a, b) {\n    return a + b;  // No side effects, no external state\n}\nconsole.log(pureAdd(2, 3));  // 5\nconsole.log(pureAdd(2, 3));  // 5 (always same)',
  hint: 'Pure functions don\'t modify external state.'
},
{
  id: 'js_functions_26',
  topicId: 'js_functions',
  question: 'Write an impure function (has side effects).',
  mathSolution: 'Impure function modifies external state.',
  codeSolution: 'let counter = 0;\nfunction impureIncrement() {\n    counter++;  // Side effect: modifies external variable\n    return counter;\n}\nconsole.log(impureIncrement());  // 1\nconsole.log(impureIncrement());  // 2',
  hint: 'Impure functions modify external state or have side effects.'
},
{
  id: 'js_functions_27',
  topicId: 'js_functions',
  question: 'Write a memoized function to cache results.',
  mathSolution: 'Cache results to avoid recomputation.',
  codeSolution: 'function memoize(fn) {\n    const cache = {};\n    return function(...args) {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            cache[key] = fn(...args);\n        }\n        return cache[key];\n    };\n}\nconst slowSquare = memoize(x => {\n    console.log("Computing...");\n    return x * x;\n});\nconsole.log(slowSquare(5));  // Computing... 25\nconsole.log(slowSquare(5));  // 25 (from cache)',
  hint: 'Cache stores results for repeated arguments.'
},
{
  id: 'js_functions_28',
  topicId: 'js_functions',
  question: 'Write a curry function that converts f(a,b,c) to f(a)(b)(c).',
  mathSolution: 'Currying transforms function to chain of single-argument functions.',
  codeSolution: 'function curry(fn) {\n    return function curried(...args) {\n        if (args.length >= fn.length) {\n            return fn(...args);\n        }\n        return (...more) => curried(...args, ...more);\n    };\n}\nfunction sum(a, b, c) { return a + b + c; }\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2)(3));  // 6',
  hint: 'Currying breaks down multi-argument functions.'
},
{
  id: 'js_functions_29',
  topicId: 'js_functions',
  question: 'Write a function composition function.',
  mathSolution: 'Compose multiple functions into one.',
  codeSolution: 'function compose(...fns) {\n    return function(x) {\n        return fns.reduceRight((acc, fn) => fn(acc), x);\n    };\n}\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst composed = compose(multiply3, add2);\nconsole.log(composed(5));  // (5+2)*3 = 21',
  hint: 'Composition applies functions from right to left.'
},
{
  id: 'js_functions_30',
  topicId: 'js_functions',
  question: 'Write a pipe function (left-to-right composition).',
  mathSolution: 'Pipe is composition from left to right.',
  codeSolution: 'function pipe(...fns) {\n    return function(x) {\n        return fns.reduce((acc, fn) => fn(acc), x);\n    };\n}\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst piped = pipe(add2, multiply3);\nconsole.log(piped(5));  // (5+2)*3 = 21',
  hint: 'Pipe applies functions left to right.'
},
{
  id: 'js_functions_31',
  topicId: 'js_functions',
  question: 'Write a function that uses destructuring in parameters.',
  mathSolution: 'Destructure object directly in parameter list.',
  codeSolution: 'function printPerson({ name, age, city = "Unknown" }) {\n    return `${name} is ${age} years old from ${city}`;\n}\nconst person = { name: "Alice", age: 30 };\nconsole.log(printPerson(person));  // Alice is 30 years old from Unknown',
  hint: 'Use `{ prop1, prop2 }` in parameters for object destructuring.'
},
{
  id: 'js_functions_32',
  topicId: 'js_functions',
  question: 'Write a function that uses array destructuring in parameters.',
  mathSolution: 'Destructure array elements in parameter list.',
  codeSolution: 'function getFirstAndLast([first, ...rest]) {\n    const last = rest.pop();\n    return { first, last };\n}\nconsole.log(getFirstAndLast([10, 20, 30, 40]));  // {first:10, last:40}',
  hint: 'Use `[first, second]` in parameters for array destructuring.'
},
{
  id: 'js_functions_33',
  topicId: 'js_functions',
  question: 'Write a function that checks if a string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'function isPalindrome(str) {\n    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n    return cleaned === cleaned.split("").reverse().join("");\n}\nconsole.log(isPalindrome("A man, a plan, a canal: Panama"));  // true',
  hint: 'Clean string by removing non-alphanumeric characters.'
},
{
  id: 'js_functions_34',
  topicId: 'js_functions',
  question: 'Write a function that counts character frequency.',
  mathSolution: 'Use object to track character counts.',
  codeSolution: 'function charFrequency(str) {\n    const freq = {};\n    for (let char of str) {\n        freq[char] = (freq[char] || 0) + 1;\n    }\n    return freq;\n}\nconsole.log(charFrequency("hello"));  // {h:1, e:1, l:2, o:1}',
  hint: 'Use object property as counter.'
},
{
  id: 'js_functions_35',
  topicId: 'js_functions',
  question: 'Write a function that finds the first non-repeating character.',
  mathSolution: 'Count frequencies, find first with count 1.',
  codeSolution: 'function firstNonRepeating(str) {\n    const freq = {};\n    for (let char of str) freq[char] = (freq[char] || 0) + 1;\n    for (let char of str) {\n        if (freq[char] === 1) return char;\n    }\n    return null;\n}\nconsole.log(firstNonRepeating("swiss"));  // "w"',
  hint: 'Two passes: one for counting, one for finding.'
},
{
  id: 'js_functions_36',
  topicId: 'js_functions',
  question: 'Write a function that flattens nested arrays (any depth).',
  mathSolution: 'Recursively flatten arrays.',
  codeSolution: 'function flattenDeep(arr) {\n    return arr.reduce((flat, item) => {\n        return flat.concat(Array.isArray(item) ? flattenDeep(item) : item);\n    }, []);\n}\nconsole.log(flattenDeep([1, [2, [3, [4]]]]));  // [1,2,3,4]',
  hint: 'Use recursion to handle nested arrays.'
},
{
  id: 'js_functions_37',
  topicId: 'js_functions',
  question: 'Write a function that returns unique elements from array.',
  mathSolution: 'Use Set for unique values.',
  codeSolution: 'function unique(arr) {\n    return [...new Set(arr)];\n}\nconsole.log(unique([1, 2, 2, 3, 4, 4, 5]));  // [1,2,3,4,5]',
  hint: '`new Set(arr)` automatically removes duplicates.'
},
{
  id: 'js_functions_38',
  topicId: 'js_functions',
  question: 'Write a function that rotates array by k positions.',
  mathSolution: 'Slice and concatenate.',
  codeSolution: 'function rotateArray(arr, k) {\n    k = k % arr.length;\n    return [...arr.slice(-k), ...arr.slice(0, -k)];\n}\nconsole.log(rotateArray([1,2,3,4,5], 2));  // [4,5,1,2,3]',
  hint: 'Use slice() to split array and spread to combine.'
},
{
  id: 'js_functions_39',
  topicId: 'js_functions',
  question: 'Write a throttle function that limits function calls.',
  mathSolution: 'Throttle ensures max one call per time interval.',
  codeSolution: 'function throttle(fn, delay) {\n    let lastCall = 0;\n    return function(...args) {\n        const now = Date.now();\n        if (now - lastCall >= delay) {\n            lastCall = now;\n            return fn(...args);\n        }\n    };\n}\nconst throttledLog = throttle(() => console.log("Called"), 1000);',
  hint: 'Throttle limits execution rate.'
},
{
  id: 'js_functions_40',
  topicId: 'js_functions',
  question: 'Write a debounce function that delays function execution.',
  mathSolution: 'Debounce waits for pause in calls before executing.',
  codeSolution: 'function debounce(fn, delay) {\n    let timeoutId;\n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n}\nconst debouncedLog = debounce(() => console.log("Called"), 500);',
  hint: 'Debounce resets timer on each call.'
},
{
  id: 'js_functions_41',
  topicId: 'js_functions',
  question: 'Write a once function that executes only once.',
  mathSolution: 'Use closure to track if function was called.',
  codeSolution: 'function once(fn) {\n    let called = false;\n    let result;\n    return function(...args) {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n}\nconst initialize = once(() => console.log("Initialized"));\ninitialize();  // Initialized\ninitialize();  // (no output)',
  hint: 'Once function runs only the first time.'
},
{
  id: 'js_functions_42',
  topicId: 'js_functions',
  question: 'Write a function that converts callback-based function to promise.',
  mathSolution: 'Wrap callback function in Promise constructor.',
  codeSolution: 'function promisify(fn) {\n    return function(...args) {\n        return new Promise((resolve, reject) => {\n            fn(...args, (error, result) => {\n                if (error) reject(error);\n                else resolve(result);\n            });\n        });\n    };\n}\n// Example with Node.js fs.readFile would work',
  hint: 'Promisify converts error-first callbacks to promises.'
},
{
  id: 'js_functions_43',
  topicId: 'js_functions',
  question: 'Write a function that implements sleep/pause using promise.',
  mathSolution: 'Return promise that resolves after timeout.',
  codeSolution: 'function sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function demo() {\n    console.log("Start");\n    await sleep(1000);\n    console.log("After 1 second");\n}\ndemo();',
  hint: '`await sleep(ms)` pauses async function execution.'
},
{
  id: 'js_functions_44',
  topicId: 'js_functions',
  question: 'Write a function that retries failed promises.',
  mathSolution: 'Retry logic with recursion and error handling.',
  codeSolution: 'async function retry(fn, retries = 3) {\n    try {\n        return await fn();\n    } catch (error) {\n        if (retries > 0) {\n            console.log(`Retrying... ${retries} attempts left`);\n            return retry(fn, retries - 1);\n        }\n        throw error;\n    }\n}\n// Usage: retry(() => someAsyncFunction(), 3)',
  hint: 'Recursively retry on failure until retries exhausted.'
},
{
  id: 'js_functions_45',
  topicId: 'js_functions',
  question: 'Write a function that measures execution time.',
  mathSolution: 'Use console.time or Date to measure.',
  codeSolution: 'function measureTime(fn) {\n    return function(...args) {\n        const start = performance.now();\n        const result = fn(...args);\n        const end = performance.now();\n        console.log(`Execution time: ${end - start}ms`);\n        return result;\n    };\n}\nconst timedSum = measureTime(() => {\n    let sum = 0;\n    for (let i = 0; i < 1000000; i++) sum += i;\n    return sum;\n});\ntimedSum();',
  hint: 'Use `performance.now()` for precise timing.'
},
{
  id: 'js_functions_46',
  topicId: 'js_functions',
  question: 'Write a function that deep clones an object.',
  mathSolution: 'Handle nested objects and arrays recursively.',
  codeSolution: 'function deepClone(obj) {\n    if (obj === null || typeof obj !== "object") return obj;\n    if (Array.isArray(obj)) return obj.map(item => deepClone(item));\n    const cloned = {};\n    for (let key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            cloned[key] = deepClone(obj[key]);\n        }\n    }\n    return cloned;\n}\nconst original = { a: 1, b: { c: 2 } };\nconst copy = deepClone(original);\ncopy.b.c = 3;\nconsole.log(original.b.c);  // 2 (unchanged)',
  hint: 'Recursively copy nested structures.'
},
{
  id: 'js_functions_47',
  topicId: 'js_functions',
  question: 'Write a function that merges two objects deeply.',
  mathSolution: 'Recursively merge nested properties.',
  codeSolution: 'function deepMerge(obj1, obj2) {\n    const result = { ...obj1 };\n    for (let key in obj2) {\n        if (obj2.hasOwnProperty(key)) {\n            if (typeof obj2[key] === "object" && obj2[key] !== null && !Array.isArray(obj2[key])) {\n                result[key] = deepMerge(obj1[key] || {}, obj2[key]);\n            } else {\n                result[key] = obj2[key];\n            }\n        }\n    }\n    return result;\n}\nconsole.log(deepMerge({ a: 1, b: { x: 1 } }, { b: { y: 2 }, c: 3 }));  // { a:1, b:{x:1,y:2}, c:3 }',
  hint: 'Recursively merge nested objects.'
},
{
  id: 'js_functions_48',
  topicId: 'js_functions',
  question: 'Write a function that implements setTimeout using promises.',
  mathSolution: 'Create promise that resolves after delay.',
  codeSolution: 'function wait(ms) {\n    return new Promise(resolve => {\n        setTimeout(resolve, ms);\n    });\n}\nwait(1000).then(() => console.log("1 second passed"));',
  hint: 'Wrap setTimeout in Promise constructor.'
},
{
  id: 'js_functions_49',
  topicId: 'js_functions',
  question: 'Write a function that implements Promise.all from scratch.',
  mathSolution: 'Track all promises, resolve when all complete.',
  codeSolution: 'function promiseAll(promises) {\n    return new Promise((resolve, reject) => {\n        const results = [];\n        let completed = 0;\n        promises.forEach((promise, index) => {\n            Promise.resolve(promise)\n                .then(result => {\n                    results[index] = result;\n                    completed++;\n                    if (completed === promises.length) resolve(results);\n                })\n                .catch(reject);\n        });\n    });\n}\n// Usage: promiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log)',
  hint: 'Track completion count and store results in order.'
},
{
  id: 'js_functions_50',
  topicId: 'js_functions',
  question: 'Write a function that implements Promise.race from scratch.',
  mathSolution: 'Resolve or reject with first settled promise.',
  codeSolution: 'function promiseRace(promises) {\n    return new Promise((resolve, reject) => {\n        promises.forEach(promise => {\n            Promise.resolve(promise)\n                .then(resolve)\n                .catch(reject);\n        });\n    });\n}\n// Usage: promiseRace([Promise.resolve(1), Promise.reject("error")]).then(console.log)',
  hint: 'First promise that settles determines outcome.'
}
);