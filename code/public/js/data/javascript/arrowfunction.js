QuizData.questions.push(
{
  id: 'js_arrow_1',
  topicId: 'js_arrow',
  question: 'Write an arrow function that adds two numbers and returns the result.',
  mathSolution: 'Use => syntax with parameters.',
  codeSolution: 'const add = (a, b) => a + b;\nconsole.log(add(5, 3));  // 8',
  hint: 'Arrow function with single expression has implicit return.'
},
{
  id: 'js_arrow_2',
  topicId: 'js_arrow',
  question: 'Write an arrow function that multiplies two numbers using explicit return.',
  mathSolution: 'Use curly braces and return keyword.',
  codeSolution: 'const multiply = (a, b) => {\n    return a * b;\n};\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Use `{}` and `return` for multiple statements.'
},
{
  id: 'js_arrow_3',
  topicId: 'js_arrow',
  question: 'Write an arrow function with single parameter (no parentheses needed).',
  mathSolution: 'Single parameter can omit parentheses.',
  codeSolution: 'const square = x => x * x;\nconsole.log(square(5));  // 25',
  hint: 'You can omit parentheses with one parameter.'
},
{
  id: 'js_arrow_4',
  topicId: 'js_arrow',
  question: 'Write an arrow function with no parameters (empty parentheses).',
  mathSolution: 'Use empty parentheses for no parameters.',
  codeSolution: 'const greet = () => "Hello World!";\nconsole.log(greet());  // Hello World!',
  hint: 'Use `()` for zero parameters.'
},
{
  id: 'js_arrow_5',
  topicId: 'js_arrow',
  question: 'Write an arrow function that returns an object literal.',
  mathSolution: 'Wrap object in parentheses to avoid ambiguity.',
  codeSolution: 'const createPerson = (name, age) => ({ name, age });\nconsole.log(createPerson("Alice", 25));  // { name: "Alice", age: 25 }',
  hint: 'Wrap object literal in `()` to distinguish from block.'
},
{
  id: 'js_arrow_6',
  topicId: 'js_arrow',
  question: 'Use arrow function with array map() to double values.',
  mathSolution: 'Arrow function as callback for map.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: 'Arrow functions are perfect for array methods.'
},
{
  id: 'js_arrow_7',
  topicId: 'js_arrow',
  question: 'Use arrow function with filter() to get even numbers.',
  mathSolution: 'Arrow function returns boolean for filter.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'Return true to keep element in filtered array.'
},
{
  id: 'js_arrow_8',
  topicId: 'js_arrow',
  question: 'Use arrow function with reduce() to sum array.',
  mathSolution: 'Arrow function as accumulator callback.',
  codeSolution: 'const numbers = [10, 20, 30];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 60',
  hint: 'Reduce takes accumulator and current values.'
},
{
  id: 'js_arrow_9',
  topicId: 'js_arrow',
  question: 'Use arrow function with forEach() to print array elements.',
  mathSolution: 'Arrow function as forEach callback.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach(fruit => console.log(fruit));',
  hint: 'forEach executes function for each array element.'
},
{
  id: 'js_arrow_10',
  topicId: 'js_arrow',
  question: 'Show that arrow functions do not have their own "this".',
  mathSolution: 'Arrow functions inherit "this" from parent scope.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    getName: () => {\n        return this.name;  // this is not obj, but outer scope\n    }\n};\nconsole.log(obj.getName());  // undefined (not "My Object")',
  hint: 'Arrow functions don\'t bind their own `this`.'
},
{
  id: 'js_arrow_11',
  topicId: 'js_arrow',
  question: 'Show that arrow functions work well with setTimeout to preserve this.',
  mathSolution: 'Arrow functions don\'t create their own this binding.',
  codeSolution: 'const obj = {\n    name: "Alice",\n    delayedGreet: function() {\n        setTimeout(() => {\n            console.log(`Hello, ${this.name}!`);  // Hello, Alice!\n        }, 1000);\n    }\n};\nobj.delayedGreet();',
  hint: 'Arrow function preserves `this` from surrounding scope.'
},
{
  id: 'js_arrow_12',
  topicId: 'js_arrow',
  question: 'Compare arrow function with regular function for this binding in event handler.',
  mathSolution: 'Arrow function doesn\'t have its own this for DOM events.',
  codeSolution: '// button.addEventListener("click", () => {\n//     console.log(this);  // window (not button)\n// });\n// button.addEventListener("click", function() {\n//     console.log(this);  // button element\n// });',
  hint: 'Regular functions bind this to event target, arrows to parent scope.'
},
{
  id: 'js_arrow_13',
  topicId: 'js_arrow',
  question: 'Show that arrow functions cannot be used as constructors with new.',
  mathSolution: 'Arrow functions lack internal [[Construct]] method.',
  codeSolution: 'const Person = (name) => {\n    this.name = name;\n};\n// const p = new Person("John");  // TypeError: Person is not a constructor',
  hint: 'Arrow functions cannot be used with `new` keyword.'
},
{
  id: 'js_arrow_14',
  topicId: 'js_arrow',
  question: 'Show that arrow functions do not have prototype property.',
  mathSolution: 'Arrow functions don\'t have prototype property.',
  codeSolution: 'const arrowFunc = () => {};\nfunction regularFunc() {}\nconsole.log(arrowFunc.prototype);  // undefined\nconsole.log(regularFunc.prototype);  // { constructor: f }',
  hint: 'Arrow functions cannot be used as constructor functions.'
},
{
  id: 'js_arrow_15',
  topicId: 'js_arrow',
  question: 'Show that arrow functions don\'t have arguments object.',
  mathSolution: 'Arrow functions inherit arguments from parent scope.',
  codeSolution: 'const arrow = () => {\n    console.log(arguments);  // ReferenceError or outer arguments\n};\nfunction regular() {\n    const arrow = () => console.log(arguments);\n    arrow();\n}\nregular(1, 2, 3);  // [Arguments] { 0:1, 1:2, 2:3 }',
  hint: 'Use rest parameters `(...args)` instead of arguments.'
},
{
  id: 'js_arrow_16',
  topicId: 'js_arrow',
  question: 'Use rest parameters in arrow function instead of arguments.',
  mathSolution: 'Rest parameters collect arguments into array.',
  codeSolution: 'const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Use `...rest` parameter instead of `arguments`.'
},
{
  id: 'js_arrow_17',
  topicId: 'js_arrow',
  question: 'Write an arrow function that returns a function (closure).',
  mathSolution: 'Arrow function returning another arrow function.',
  codeSolution: 'const multiplier = factor => number => number * factor;\nconst double = multiplier(2);\nconsole.log(double(5));  // 10\nconst triple = multiplier(3);\nconsole.log(triple(5));  // 15',
  hint: 'Arrow functions can return functions (currying).'
},
{
  id: 'js_arrow_18',
  topicId: 'js_arrow',
  question: 'Use arrow function with sort() to sort numbers.',
  mathSolution: 'Arrow function defines comparison logic.',
  codeSolution: 'const numbers = [3, 1, 4, 1, 5, 9];\nconst sorted = numbers.sort((a, b) => a - b);\nconsole.log(sorted);  // [1, 1, 3, 4, 5, 9]',
  hint: 'Return negative, zero, or positive for sort comparison.'
},
{
  id: 'js_arrow_19',
  topicId: 'js_arrow',
  question: 'Use arrow function to sort array of objects by property.',
  mathSolution: 'Access object property in comparison.',
  codeSolution: 'const people = [\n    { name: "John", age: 30 },\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 35 }\n];\nconst sortedByAge = people.sort((a, b) => a.age - b.age);\nconsole.log(sortedByAge);  // Alice(25), John(30), Bob(35)',
  hint: 'Compare object properties in arrow function.'
},
{
  id: 'js_arrow_20',
  topicId: 'js_arrow',
  question: 'Use arrow function with setTimeout for delayed execution.',
  mathSolution: 'Arrow function as setTimeout callback.',
  codeSolution: 'setTimeout(() => {\n    console.log("Delayed message");\n}, 1000);',
  hint: 'Arrow functions work well as timer callbacks.'
},
{
  id: 'js_arrow_21',
  topicId: 'js_arrow',
  question: 'Use arrow function with setInterval for repeated execution.',
  mathSolution: 'Arrow function as interval callback.',
  codeSolution: 'let count = 0;\nconst interval = setInterval(() => {\n    count++;\n    console.log(`Tick ${count}`);\n    if (count === 5) clearInterval(interval);\n}, 1000);',
  hint: 'Use setInterval for repeated actions.'
},
{
  id: 'js_arrow_22',
  topicId: 'js_arrow',
  question: 'Use arrow function with event listeners (caution with this).',
  mathSolution: 'Arrow function doesn\'t bind this to event target.',
  codeSolution: '// const button = document.querySelector("button");\n// button.addEventListener("click", (event) => {\n//     console.log(this);  // window (not button)\n//     console.log(event.target);  // button element\n// });',
  hint: 'Use `event.target` to access element in arrow function.'
},
{
  id: 'js_arrow_23',
  topicId: 'js_arrow',
  question: 'Write an immediately invoked arrow function (IIFE).',
  mathSolution: 'Wrap arrow function in parentheses and call immediately.',
  codeSolution: '(() => {\n    console.log("Arrow IIFE executed!");\n})();  // Arrow IIFE executed!',
  hint: 'IIFE runs immediately after definition.'
},
{
  id: 'js_arrow_24',
  topicId: 'js_arrow',
  question: 'Use arrow function with promise .then() for chaining.',
  mathSolution: 'Arrow functions as promise handlers.',
  codeSolution: 'Promise.resolve(5)\n    .then(num => num * 2)\n    .then(num => num + 3)\n    .then(result => console.log(result));  // 13',
  hint: 'Arrow functions are great for promise chains.'
},
{
  id: 'js_arrow_25',
  topicId: 'js_arrow',
  question: 'Use arrow function with async/await.',
  mathSolution: 'Async arrow function returns promise.',
  codeSolution: 'const fetchData = async (url) => {\n    const response = await fetch(url);\n    return response.json();\n};\n// fetchData("https://api.example.com/data").then(data => console.log(data));',
  hint: 'Use `async () => {}` for async arrow functions.'
},
{
  id: 'js_arrow_26',
  topicId: 'js_arrow',
  question: 'Write an arrow function that throws an error.',
  mathSolution: 'Use throw statement inside arrow function body.',
  codeSolution: 'const divide = (a, b) => {\n    if (b === 0) throw new Error("Division by zero");\n    return a / b;\n};\ntry {\n    console.log(divide(10, 0));\n} catch (error) {\n    console.log(error.message);  // Division by zero\n}',
  hint: 'Use `{}` body when you need to throw error.'
},
{
  id: 'js_arrow_27',
  topicId: 'js_arrow',
  question: 'Show that arrow functions cannot be generators (no yield).',
  mathSolution: 'Arrow functions cannot use yield keyword.',
  codeSolution: '// const generator =* () => { yield 1; }  // SyntaxError\nfunction* regularGenerator() {\n    yield 1;\n    yield 2;\n}\nconst gen = regularGenerator();\nconsole.log(gen.next().value);  // 1',
  hint: 'Use regular functions for generators (`function*`).'
},
{
  id: 'js_arrow_28',
  topicId: 'js_arrow',
  question: 'Use arrow function with ternary operator for conditional return.',
  mathSolution: 'Ternary inside arrow function for concise conditionals.',
  codeSolution: 'const getFee = (isMember) => isMember ? "$2.00" : "$10.00";\nconsole.log(getFee(true));   // $2.00\nconsole.log(getFee(false));  // $10.00',
  hint: 'Ternary operator works well with implicit return.'
},
{
  id: 'js_arrow_29',
  topicId: 'js_arrow',
  question: 'Use arrow function with logical operators for short-circuiting.',
  mathSolution: 'Logical && and || for conditional execution.',
  codeSolution: 'const greet = (name) => name && `Hello, ${name}!`;\nconsole.log(greet("John"));  // Hello, John!\nconsole.log(greet(null));    // null',
  hint: 'Logical operators can create concise conditional returns.'
},
{
  id: 'js_arrow_30',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a simple pipe/compose functions.',
  mathSolution: 'Arrow functions for functional composition.',
  codeSolution: 'const add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst compose = (f, g) => x => f(g(x));\nconst add2ThenMultiply3 = compose(multiply3, add2);\nconsole.log(add2ThenMultiply3(5));  // (5+2)*3 = 21',
  hint: 'Arrow functions enable functional composition.'
},
{
  id: 'js_arrow_31',
  topicId: 'js_arrow',
  question: 'Use arrow function with array find() method.',
  mathSolution: 'Arrow function as predicate for find.',
  codeSolution: 'const users = [\n    { id: 1, name: "Alice" },\n    { id: 2, name: "Bob" },\n    { id: 3, name: "Charlie" }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Bob" }',
  hint: '`find()` returns first element matching condition.'
},
{
  id: 'js_arrow_32',
  topicId: 'js_arrow',
  question: 'Use arrow function with array some() method.',
  mathSolution: 'Arrow function checks if any element passes test.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true',
  hint: '`some()` returns true if any element passes.'
},
{
  id: 'js_arrow_33',
  topicId: 'js_arrow',
  question: 'Use arrow function with array every() method.',
  mathSolution: 'Arrow function checks if all elements pass test.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true',
  hint: '`every()` returns true only if all elements pass.'
},
{
  id: 'js_arrow_34',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a memoized function.',
  mathSolution: 'Arrow function with closure for cache.',
  codeSolution: 'const memoize = (fn) => {\n    const cache = {};\n    return (...args) => {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            cache[key] = fn(...args);\n        }\n        return cache[key];\n    };\n};\nconst slowSquare = memoize(x => {\n    console.log("Computing...");\n    return x * x;\n});\nconsole.log(slowSquare(5));  // Computing... 25\nconsole.log(slowSquare(5));  // 25 (cached)',
  hint: 'Arrow functions work well for memoization.'
},
{
  id: 'js_arrow_35',
  topicId: 'js_arrow',
  question: 'Use arrow function with object method shorthand comparison.',
  mathSolution: 'Arrow functions vs method shorthand for object methods.',
  codeSolution: 'const obj = {\n    regularMethod() {\n        console.log(this);  // obj\n    },\n    arrowMethod: () => {\n        console.log(this);  // outer scope (window/global)\n    }\n};\nobj.regularMethod();  // {regularMethod: f, arrowMethod: f}\nobj.arrowMethod();    // Window/global object',
  hint: 'Use method shorthand for object methods needing `this`.'
},
{
  id: 'js_arrow_36',
  topicId: 'js_arrow',
  question: 'Use arrow function to curry a function.',
  mathSolution: 'Arrow functions enable easy currying.',
  codeSolution: 'const add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3));  // 6\nconst add5 = add(5);\nconst add5and3 = add5(3);\nconsole.log(add5and3(2));  // 10',
  hint: 'Currying transforms multi-argument function into chain.'
},
{
  id: 'js_arrow_37',
  topicId: 'js_arrow',
  question: 'Use arrow function to debounce a function.',
  mathSolution: 'Arrow function with closure for debouncing.',
  codeSolution: 'const debounce = (fn, delay) => {\n    let timeoutId;\n    return (...args) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n};\nconst log = () => console.log("Called");\nconst debouncedLog = debounce(log, 500);\ndebouncedLog();\ndebouncedLog();\ndebouncedLog();  // Only one call after 500ms pause',
  hint: 'Debounce delays execution until after pause.'
},
{
  id: 'js_arrow_38',
  topicId: 'js_arrow',
  question: 'Use arrow function to throttle a function.',
  mathSolution: 'Arrow function with closure for throttling.',
  codeSolution: 'const throttle = (fn, delay) => {\n    let lastCall = 0;\n    return (...args) => {\n        const now = Date.now();\n        if (now - lastCall >= delay) {\n            lastCall = now;\n            fn(...args);\n        }\n    };\n};\nconst log = () => console.log("Called");\nconst throttledLog = throttle(log, 1000);\nthrottledLog();  // Called\nthrottledLog();  // Ignored (too soon)',
  hint: 'Throttle limits calls to once per time interval.'
},
{
  id: 'js_arrow_39',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a once function.',
  mathSolution: 'Arrow function that executes only once.',
  codeSolution: 'const once = (fn) => {\n    let called = false;\n    let result;\n    return (...args) => {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n};\nconst initialize = once(() => {\n    console.log("Initializing...");\n    return 42;\n});\nconsole.log(initialize());  // Initializing... 42\nconsole.log(initialize());  // 42 (no second message)',
  hint: 'Once function runs only first time it\'s called.'
},
{
  id: 'js_arrow_40',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a partial application.',
  mathSolution: 'Fix some arguments with arrow functions.',
  codeSolution: 'const multiply = (a, b, c) => a * b * c;\nconst multiplyBy2 = (b, c) => multiply(2, b, c);\nconst multiplyBy2And3 = (c) => multiply(2, 3, c);\nconsole.log(multiplyBy2(3, 4));     // 2*3*4 = 24\nconsole.log(multiplyBy2And3(5));    // 2*3*5 = 30',
  hint: 'Partial application fixes some arguments.'
},
{
  id: 'js_arrow_41',
  topicId: 'js_arrow',
  question: 'Use arrow function to flatten array with reduce.',
  mathSolution: 'Arrow function with spread for flattening.',
  codeSolution: 'const flatten = (arr) => arr.reduce((flat, item) => \n    flat.concat(Array.isArray(item) ? flatten(item) : item), []\n);\nconsole.log(flatten([1, [2, [3, [4]]]]));  // [1,2,3,4]',
  hint: 'Recursive arrow function for nested arrays.'
},
{
  id: 'js_arrow_42',
  topicId: 'js_arrow',
  question: 'Use arrow function to group array elements by property.',
  mathSolution: 'Arrow function with reduce for grouping.',
  codeSolution: 'const groupBy = (arr, key) => arr.reduce((group, item) => {\n    const val = item[key];\n    group[val] = group[val] || [];\n    group[val].push(item);\n    return group;\n}, {});\nconst people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconsole.log(groupBy(people, "age"));\n// { 25: [{name:"Alice",age:25}, {name:"Charlie",age:25}], 30: [{name:"Bob",age:30}] }',
  hint: 'Use reduce to group objects by property value.'
},
{
  id: 'js_arrow_43',
  topicId: 'js_arrow',
  question: 'Use arrow function to remove falsy values from array.',
  mathSolution: 'Arrow function with filter(Boolean) pattern.',
  codeSolution: 'const removeFalsy = (arr) => arr.filter(Boolean);\nconst values = [0, 1, false, 2, "", 3, null, undefined, "hello"];\nconsole.log(removeFalsy(values));  // [1, 2, 3, "hello"]',
  hint: '`filter(Boolean)` removes all falsy values.'
},
{
  id: 'js_arrow_44',
  topicId: 'js_arrow',
  question: 'Use arrow function to get unique values from array.',
  mathSolution: 'Arrow function with Set and spread.',
  codeSolution: 'const unique = (arr) => [...new Set(arr)];\nconsole.log(unique([1, 2, 2, 3, 4, 4, 5]));  // [1,2,3,4,5]',
  hint: 'Set automatically removes duplicates.'
},
{
  id: 'js_arrow_45',
  topicId: 'js_arrow',
  question: 'Use arrow function to chunk array into smaller arrays.',
  mathSolution: 'Arrow function with slice in loop.',
  codeSolution: 'const chunk = (arr, size) => {\n    return arr.reduce((chunks, item, index) => {\n        const chunkIndex = Math.floor(index / size);\n        if (!chunks[chunkIndex]) chunks[chunkIndex] = [];\n        chunks[chunkIndex].push(item);\n        return chunks;\n    }, []);\n};\nconsole.log(chunk([1,2,3,4,5,6,7,8], 3));  // [[1,2,3], [4,5,6], [7,8]]',
  hint: 'Calculate chunk index using division.'
},
{
  id: 'js_arrow_46',
  topicId: 'js_arrow',
  question: 'Use arrow function to deep clone an object.',
  mathSolution: 'Arrow function with recursion for deep clone.',
  codeSolution: 'const deepClone = (obj) => {\n    if (obj === null || typeof obj !== "object") return obj;\n    if (Array.isArray(obj)) return obj.map(item => deepClone(item));\n    return Object.keys(obj).reduce((clone, key) => {\n        clone[key] = deepClone(obj[key]);\n        return clone;\n    }, {});\n};\nconst original = { a: 1, b: { c: 2 } };\nconst copy = deepClone(original);\ncopy.b.c = 3;\nconsole.log(original.b.c);  // 2 (unchanged)',
  hint: 'Recursively copy nested objects and arrays.'
},
{
  id: 'js_arrow_47',
  topicId: 'js_arrow',
  question: 'Use arrow function to check if two objects are equal deeply.',
  mathSolution: 'Recursive arrow function for deep equality.',
  codeSolution: 'const deepEqual = (obj1, obj2) => {\n    if (obj1 === obj2) return true;\n    if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;\n    if (obj1 === null || obj2 === null) return false;\n    const keys1 = Object.keys(obj1);\n    const keys2 = Object.keys(obj2);\n    if (keys1.length !== keys2.length) return false;\n    return keys1.every(key => deepEqual(obj1[key], obj2[key]));\n};\nconsole.log(deepEqual({ a:1, b:{c:2} }, { a:1, b:{c:2} }));  // true\nconsole.log(deepEqual({ a:1 }, { a:2 }));  // false',
  hint: 'Recursively compare all properties.'
},
{
  id: 'js_arrow_48',
  topicId: 'js_arrow',
  question: 'Use arrow function to get intersection of two arrays.',
  mathSolution: 'Arrow function with filter and includes.',
  codeSolution: 'const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));\nconsole.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]',
  hint: 'Filter elements present in both arrays.'
},
{
  id: 'js_arrow_49',
  topicId: 'js_arrow',
  question: 'Use arrow function to get difference of two arrays.',
  mathSolution: 'Arrow function for symmetric difference.',
  codeSolution: 'const difference = (arr1, arr2) => [\n    ...arr1.filter(item => !arr2.includes(item)),\n    ...arr2.filter(item => !arr1.includes(item))\n];\nconsole.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));  // [1, 2, 5, 6]',
  hint: 'Elements that are in one array but not both.'
},
{
  id: 'js_arrow_50',
  topicId: 'js_arrow',
  question: 'Use arrow function to calculate average of array numbers.',
  mathSolution: 'Arrow function with reduce for average calculation.',
  codeSolution: 'const average = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;\nconsole.log(average([10, 20, 30, 40, 50]));  // 30\nconsole.log(average([1, 2, 3, 4, 5]));       // 3',
  hint: 'Sum array then divide by length.'
}
);