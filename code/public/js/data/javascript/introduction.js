QuizData.questions.push(
{
  id: 'js_intro_1',
  topicId: 'js_intro',
  question: 'Write a JavaScript program that prints "Hello World" to the console.',
  mathSolution: 'Use console.log() to output text.',
  codeSolution: 'console.log("Hello World");',
  hint: 'console.log() is used for debugging and output.'
},
{
  id: 'js_intro_2',
  topicId: 'js_intro',
  question: 'Declare a variable using var and assign it a value.',
  mathSolution: 'var declares function-scoped or globally-scoped variable.',
  codeSolution: 'var message = "Hello JavaScript";\nconsole.log(message);  // Hello JavaScript',
  hint: 'var is function-scoped (older way, avoid in modern code).'
},
{
  id: 'js_intro_3',
  topicId: 'js_intro',
  question: 'Declare a variable using let and assign it a value.',
  mathSolution: 'let declares block-scoped variable.',
  codeSolution: 'let age = 25;\nconsole.log(age);  // 25',
  hint: 'let is block-scoped and preferred over var.'
},
{
  id: 'js_intro_4',
  topicId: 'js_intro',
  question: 'Declare a constant using const that cannot be reassigned.',
  mathSolution: 'const declares block-scoped constant.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159\n// PI = 3.14;  // Error: Assignment to constant variable',
  hint: 'const prevents reassignment, but object properties can still change.'
},
{
  id: 'js_intro_5',
  topicId: 'js_intro',
  question: 'Create a simple function that adds two numbers.',
  mathSolution: 'function keyword defines reusable block of code.',
  codeSolution: 'function add(a, b) {\n    return a + b;\n}\nconsole.log(add(5, 3));  // 8',
  hint: 'Functions can take parameters and return values.'
},
{
  id: 'js_intro_6',
  topicId: 'js_intro',
  question: 'Create an arrow function that multiplies two numbers.',
  mathSolution: 'Arrow function provides concise syntax.',
  codeSolution: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Arrow functions have implicit return with single expression.'
},
{
  id: 'js_intro_7',
  topicId: 'js_intro',
  question: 'Use template literals to create a string with variables.',
  mathSolution: 'Backticks allow embedding expressions with ${}.',
  codeSolution: 'const name = "John";\nconst age = 30;\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);',
  hint: 'Template literals use backticks (`) and ${} interpolation.'
},
{
  id: 'js_intro_8',
  topicId: 'js_intro',
  question: 'Create an array of fruits using array literal syntax.',
  mathSolution: 'Arrays store multiple values in ordered list.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'Use [] for array literal.'
},
{
  id: 'js_intro_9',
  topicId: 'js_intro',
  question: 'Access array elements using index and find array length.',
  mathSolution: 'Array indices start at 0, length property returns count.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconsole.log(colors[0]);     // red\nconsole.log(colors.length);  // 3',
  hint: 'First element index is 0, last is length-1.'
},
{
  id: 'js_intro_10',
  topicId: 'js_intro',
  question: 'Use push() and pop() methods to manipulate array.',
  mathSolution: 'push adds to end, pop removes from end.',
  codeSolution: 'const numbers = [1, 2, 3];\nnumbers.push(4);\nconsole.log(numbers);  // [1, 2, 3, 4]\nnumbers.pop();\nconsole.log(numbers);  // [1, 2, 3]',
  hint: 'push/pop modify the original array.'
},
{
  id: 'js_intro_11',
  topicId: 'js_intro',
  question: 'Create an object using object literal syntax.',
  mathSolution: 'Objects store key-value pairs for structured data.',
  codeSolution: 'const person = {\n    name: "John",\n    age: 30,\n    city: "New York"\n};\nconsole.log(person.name);  // John',
  hint: 'Use {} for object literal.'
},
{
  id: 'js_intro_12',
  topicId: 'js_intro',
  question: 'Access and modify object properties using dot notation.',
  mathSolution: 'Dot notation accesses property values.',
  codeSolution: 'const car = { brand: "Toyota", year: 2020 };\nconsole.log(car.brand);  // Toyota\ncar.year = 2021;\nconsole.log(car.year);   // 2021',
  hint: 'Use dot or bracket notation to access properties.'
},
{
  id: 'js_intro_13',
  topicId: 'js_intro',
  question: 'Use if-else statement to check if number is positive or negative.',
  mathSolution: 'Conditional execution based on boolean expression.',
  codeSolution: 'const num = -5;\nif (num > 0) {\n    console.log("Positive");\n} else if (num < 0) {\n    console.log("Negative");\n} else {\n    console.log("Zero");\n}',
  hint: 'if-else executes code based on condition.'
},
{
  id: 'js_intro_14',
  topicId: 'js_intro',
  question: 'Use for loop to print numbers from 1 to 5.',
  mathSolution: 'For loop repeats code with counter variable.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}',
  hint: 'For loop syntax: for(init; condition; increment)'
},
{
  id: 'js_intro_15',
  topicId: 'js_intro',
  question: 'Use while loop to calculate sum of numbers from 1 to 10.',
  mathSolution: 'While loop continues while condition is true.',
  codeSolution: 'let sum = 0;\nlet i = 1;\nwhile (i <= 10) {\n    sum += i;\n    i++;\n}\nconsole.log(sum);  // 55',
  hint: 'While loop checks condition before each iteration.'
},
{
  id: 'js_intro_16',
  topicId: 'js_intro',
  question: 'Create a simple calculator using switch statement.',
  mathSolution: 'Switch executes different code blocks based on value.',
  codeSolution: 'function calculate(a, b, op) {\n    switch(op) {\n        case "+": return a + b;\n        case "-": return a - b;\n        case "*": return a * b;\n        case "/": return b !== 0 ? a / b : "Cannot divide by zero";\n        default: return "Invalid operator";\n    }\n}\nconsole.log(calculate(10, 5, "+"));  // 15',
  hint: 'switch is efficient for multiple equal comparisons.'
},
{
  id: 'js_intro_17',
  topicId: 'js_intro',
  question: 'Use typeof operator to check data type of variables.',
  mathSolution: 'typeof returns string indicating type.',
  codeSolution: 'console.log(typeof 42);        // number\nconsole.log(typeof "hello");    // string\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object (historical bug)',
  hint: 'typeof helps identify variable types at runtime.'
},
{
  id: 'js_intro_18',
  topicId: 'js_intro',
  question: 'Create an immediately invoked function expression (IIFE).',
  mathSolution: 'IIFE runs immediately after definition.',
  codeSolution: '(function() {\n    console.log("IIFE executed!");\n})();\n\n// Arrow function IIFE\n(() => console.log("Arrow IIFE"))();',
  hint: 'Wrap function in parentheses and call immediately.'
},
{
  id: 'js_intro_19',
  topicId: 'js_intro',
  question: 'Use ternary operator for conditional assignment.',
  mathSolution: 'condition ? value_if_true : value_if_false',
  codeSolution: 'const age = 18;\nconst status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);  // Adult',
  hint: 'Ternary operator is shorthand for simple if-else.'
},
{
  id: 'js_intro_20',
  topicId: 'js_intro',
  question: 'Create a simple class with constructor and method.',
  mathSolution: 'Class defines blueprint for objects.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n}\nconst john = new Person("John", 30);\nconsole.log(john.greet());  // Hello, my name is John',
  hint: 'Classes are syntactic sugar over prototypes.'
},
{
  id: 'js_intro_21',
  topicId: 'js_intro',
  question: 'Use spread operator to copy an array.',
  mathSolution: 'Spread (...) expands array into elements.',
  codeSolution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original);  // [1, 2, 3]\nconsole.log(copy);      // [1, 2, 3, 4]',
  hint: 'Spread creates shallow copy of array.'
},
{
  id: 'js_intro_22',
  topicId: 'js_intro',
  question: 'Use rest parameters to collect remaining arguments.',
  mathSolution: 'Rest parameter collects arguments into array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Rest parameters must be the last parameter.'
},
{
  id: 'js_intro_23',
  topicId: 'js_intro',
  question: 'Use destructuring to extract values from array.',
  mathSolution: 'Destructuring unpacks values into variables.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconsole.log(first, second);  // red green',
  hint: 'Array destructuring uses [] on left side.'
},
{
  id: 'js_intro_24',
  topicId: 'js_intro',
  question: 'Use object destructuring to extract properties.',
  mathSolution: 'Object destructuring unpacks properties.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst { name, age } = person;\nconsole.log(name, age);  // John 30',
  hint: 'Object destructuring uses {} on left side.'
},
{
  id: 'js_intro_25',
  topicId: 'js_intro',
  question: 'Use map() to transform array elements.',
  mathSolution: 'map creates new array with transformed values.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: 'map does not modify original array.'
},
{
  id: 'js_intro_26',
  topicId: 'js_intro',
  question: 'Use filter() to get even numbers from array.',
  mathSolution: 'filter returns elements that pass test.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'filter returns new array with elements where callback returns true.'
},
{
  id: 'js_intro_27',
  topicId: 'js_intro',
  question: 'Use reduce() to sum all array elements.',
  mathSolution: 'reduce accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: 'reduce takes accumulator and current value.'
},
{
  id: 'js_intro_28',
  topicId: 'js_intro',
  question: 'Use forEach() to iterate over array.',
  mathSolution: 'forEach executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach(fruit => console.log(fruit));',
  hint: 'forEach doesn\'t return anything, just iterates.'
},
{
  id: 'js_intro_29',
  topicId: 'js_intro',
  question: 'Use find() to get first element greater than 10.',
  mathSolution: 'find returns first element matching condition.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: 'find returns element, not index.'
},
{
  id: 'js_intro_30',
  topicId: 'js_intro',
  question: 'Use some() and every() for array validation.',
  mathSolution: 'some checks if any element passes, every checks all.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconsole.log(numbers.some(n => n > 5));   // true\nconsole.log(numbers.every(n => n % 2 === 0));  // true',
  hint: 'some/every return boolean values.'
},
{
  id: 'js_intro_31',
  topicId: 'js_intro',
  question: 'Create a promise that resolves after delay.',
  mathSolution: 'Promise represents future completion/error.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(1000).then(() => console.log("1 second passed"));',
  hint: 'Promise constructor takes executor with resolve/reject.'
},
{
  id: 'js_intro_32',
  topicId: 'js_intro',
  question: 'Handle promise rejection using catch.',
  mathSolution: 'catch handles rejected promises.',
  codeSolution: 'function failPromise() {\n    return new Promise((resolve, reject) => {\n        reject("Something went wrong");\n    });\n}\nfailPromise()\n    .then(result => console.log(result))\n    .catch(error => console.log(error));  // Something went wrong',
  hint: 'catch is for handling errors in promises.'
},
{
  id: 'js_intro_33',
  topicId: 'js_intro',
  question: 'Use async/await for cleaner promise handling.',
  mathSolution: 'async functions return promises, await pauses execution.',
  codeSolution: 'async function fetchData() {\n    const result = await Promise.resolve("Data loaded");\n    console.log(result);\n}\nfetchData();  // Data loaded',
  hint: 'await only works inside async functions.'
},
{
  id: 'js_intro_34',
  topicId: 'js_intro',
  question: 'Use try-catch with async/await.',
  mathSolution: 'try-catch handles errors in async functions.',
  codeSolution: 'async function safeFetch() {\n    try {\n        const result = await Promise.reject("Error occurred");\n        console.log(result);\n    } catch (error) {\n        console.log("Caught:", error);\n    }\n}\nsafeFetch();  // Caught: Error occurred',
  hint: 'Always use try-catch with await for error handling.'
},
{
  id: 'js_intro_35',
  topicId: 'js_intro',
  question: 'Use Promise.all to wait for multiple promises.',
  mathSolution: 'Promise.all resolves when all promises resolve.',
  codeSolution: 'const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3])\n    .then(results => console.log(results));  // [1, 2, 3]',
  hint: 'Promise.all rejects if any promise rejects.'
},
{
  id: 'js_intro_36',
  topicId: 'js_intro',
  question: 'Create a Set to store unique values.',
  mathSolution: 'Set automatically removes duplicates.',
  codeSolution: 'const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = new Set(numbers);\nconsole.log([...unique]);  // [1, 2, 3, 4, 5]',
  hint: 'Set stores only unique values.'
},
{
  id: 'js_intro_37',
  topicId: 'js_intro',
  question: 'Create a Map for key-value storage.',
  mathSolution: 'Map allows any type as key.',
  codeSolution: 'const map = new Map();\nmap.set("name", "John");\nmap.set(42, "answer");\nconsole.log(map.get("name"));  // John\nconsole.log(map.get(42));      // answer',
  hint: 'Map preserves insertion order.'
},
{
  id: 'js_intro_38',
  topicId: 'js_intro',
  question: 'Use JSON.stringify() to convert object to JSON string.',
  mathSolution: 'JSON.stringify serializes object to string.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"name":"John","age":30}',
  hint: 'JSON.stringify converts objects to strings.'
},
{
  id: 'js_intro_39',
  topicId: 'js_intro',
  question: 'Use JSON.parse() to convert JSON string to object.',
  mathSolution: 'JSON.parse deserializes JSON string.',
  codeSolution: 'const jsonString = \'{"name":"John","age":30}\';\nconst person = JSON.parse(jsonString);\nconsole.log(person.name);  // John',
  hint: 'JSON.parse converts JSON strings back to objects.'
},
{
  id: 'js_intro_40',
  topicId: 'js_intro',
  question: 'Use localStorage to store and retrieve data.',
  mathSolution: 'localStorage persists data across sessions.',
  codeSolution: 'localStorage.setItem("key", "value");\nconst value = localStorage.getItem("key");\nconsole.log(value);  // value\nlocalStorage.removeItem("key");',
  hint: 'localStorage stores key-value pairs as strings.'
},
{
  id: 'js_intro_41',
  topicId: 'js_intro',
  question: 'Use sessionStorage for temporary storage.',
  mathSolution: 'sessionStorage persists only for current session.',
  codeSolution: 'sessionStorage.setItem("temp", "temporary");\nconst temp = sessionStorage.getItem("temp");\nconsole.log(temp);  // temporary\nsessionStorage.clear();',
  hint: 'sessionStorage clears when tab/window closes.'
},
{
  id: 'js_intro_42',
  topicId: 'js_intro',
  question: 'Use Date object to get current timestamp.',
  mathSolution: 'Date provides methods for date/time operations.',
  codeSolution: 'const now = new Date();\nconsole.log(now.toLocaleString());\nconsole.log(Date.now());  // milliseconds since epoch',
  hint: 'new Date() creates current date/time object.'
},
{
  id: 'js_intro_43',
  topicId: 'js_intro',
  question: 'Use Math object for mathematical operations.',
  mathSolution: 'Math provides built-in mathematical constants and functions.',
  codeSolution: 'console.log(Math.PI);           // 3.14159\nconsole.log(Math.sqrt(16));      // 4\nconsole.log(Math.random());       // random number 0-1\nconsole.log(Math.max(10, 20, 5)); // 20',
  hint: 'Math is a built-in object with useful methods.'
},
{
  id: 'js_intro_44',
  topicId: 'js_intro',
  question: 'Use Number methods for type conversion and checks.',
  mathSolution: 'Number provides methods for numeric operations.',
  codeSolution: 'console.log(Number("123"));        // 123\nconsole.log(parseInt("123.45"));   // 123\nconsole.log(parseFloat("123.45")); // 123.45\nconsole.log(Number.isNaN(NaN));     // true',
  hint: 'Use Number() or parseInt/parseFloat for conversion.'
},
{
  id: 'js_intro_45',
  topicId: 'js_intro',
  question: 'Use String methods for text manipulation.',
  mathSolution: 'String provides many methods for manipulation.',
  codeSolution: 'const str = "Hello World";\nconsole.log(str.length);         // 11\nconsole.log(str.toUpperCase());  // HELLO WORLD\nconsole.log(str.includes("World")); // true\nconsole.log(str.slice(6, 11));   // World',
  hint: 'String methods do not modify original string.'
},
{
  id: 'js_intro_46',
  topicId: 'js_intro',
  question: 'Use Array methods sort() and reverse().',
  mathSolution: 'sort arranges elements, reverse reverses order.',
  codeSolution: 'const arr = [3, 1, 4, 1, 5];\narr.sort();\nconsole.log(arr);  // [1, 1, 3, 4, 5]\narr.reverse();\nconsole.log(arr);  // [5, 4, 3, 1, 1]',
  hint: 'sort modifies original array, use compare function for numbers.'
},
{
  id: 'js_intro_47',
  topicId: 'js_intro',
  question: 'Use Math.floor and Math.ceil for rounding.',
  mathSolution: 'floor rounds down, ceil rounds up.',
  codeSolution: 'console.log(Math.floor(3.7));  // 3\nconsole.log(Math.ceil(3.2));   // 4\nconsole.log(Math.round(3.5));   // 4\nconsole.log(Math.trunc(3.7));   // 3',
  hint: 'floor always rounds down, ceil always rounds up.'
},
{
  id: 'js_intro_48',
  topicId: 'js_intro',
  question: 'Use console methods for debugging.',
  mathSolution: 'console provides various output methods.',
  codeSolution: 'console.log("Log message");\nconsole.error("Error message");\nconsole.warn("Warning message");\nconsole.table([{name: "John"}, {name: "Jane"}]);',
  hint: 'console methods help with debugging different message types.'
},
{
  id: 'js_intro_49',
  topicId: 'js_intro',
  question: 'Use setTimeout and setInterval for timing.',
  mathSolution: 'setTimeout delays execution, setInterval repeats.',
  codeSolution: 'setTimeout(() => console.log("Delayed"), 1000);\nlet count = 0;\nconst interval = setInterval(() => {\n    count++;\n    console.log("Tick", count);\n    if (count === 3) clearInterval(interval);\n}, 1000);',
  hint: 'setTimeout runs once, setInterval runs repeatedly.'
},
{
  id: 'js_intro_50',
  topicId: 'js_intro',
  question: 'Create comprehensive demonstration of JavaScript basics.',
  mathSolution: 'Combine multiple concepts in one example.',
  codeSolution: '// Variables and data types\nlet name = "John";\nconst age = 30;\nconst hobbies = ["reading", "gaming"];\n\n// Object\nconst person = { name, age, hobbies };\n\n// Function\nconst greet = (p) => `Hello, ${p.name}!`;\n\n// Array methods\nconst squared = hobbies.map(h => h.toUpperCase());\n\n// Conditional\nif (age >= 18) console.log("Adult");\n\n// Loop\nfor (let h of hobbies) console.log(h);\n\n// Promise\nconst promise = Promise.resolve("Done");\npromise.then(console.log);\n\n// Output\nconsole.log(greet(person));\nconsole.log(squared);',
  hint: 'JavaScript combines many features for powerful programming.'
}
);