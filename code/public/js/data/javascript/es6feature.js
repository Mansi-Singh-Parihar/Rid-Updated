QuizData.questions.push(
{
  id: 'js_es6_1',
  topicId: 'js_es6',
  question: 'Use let keyword for block-scoped variable declaration.',
  mathSolution: 'let creates variables scoped to the nearest block {}',
  codeSolution: '{\n    let x = 10;\n    console.log(x);  // 10\n}\n// console.log(x);  // ReferenceError: x is not defined\n\nfor (let i = 0; i < 3; i++) {\n    // i is scoped to loop iteration\n}\n// console.log(i);  // ReferenceError',
  hint: 'let has block scope, var has function scope.'
},
{
  id: 'js_es6_2',
  topicId: 'js_es6',
  question: 'Use const keyword for immutable variable binding.',
  mathSolution: 'const creates block-scoped constant that cannot be reassigned.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159\n// PI = 3.14;  // TypeError: Assignment to constant variable\n\nconst person = { name: "John" };\nperson.name = "Jane";  // Allowed: object properties can change\nconsole.log(person.name);  // Jane\n// person = {};  // TypeError: cannot reassign',
  hint: 'const prevents reassignment, not mutation of object properties.'
},
{
  id: 'js_es6_3',
  topicId: 'js_es6',
  question: 'Use arrow functions with implicit return.',
  mathSolution: 'Arrow functions with single expression have implicit return.',
  codeSolution: '// Traditional function\nfunction add(a, b) { return a + b; }\n\n// Arrow function with implicit return\nconst add = (a, b) => a + b;\n\n// Single parameter can omit parentheses\nconst square = x => x * x;\n\n// No parameters need empty parentheses\nconst greet = () => "Hello World";\n\nconsole.log(add(5, 3));   // 8\nconsole.log(square(4));   // 16\nconsole.log(greet());     // Hello World',
  hint: 'Arrow functions with {} need explicit return; without {} have implicit return.'
},
{
  id: 'js_es6_4',
  topicId: 'js_es6',
  question: 'Use arrow functions with explicit return (multiple statements).',
  mathSolution: 'Use curly braces and return keyword for multiple statements.',
  codeSolution: 'const processData = (data) => {\n    const result = data * 2;\n    console.log(`Processing: ${data}`);\n    return result;\n};\n\nconsole.log(processData(5));  // Processing: 5\\n10\n\n// Arrow function returning object literal (wrap in parentheses)\nconst createPerson = (name, age) => ({ name, age });\nconsole.log(createPerson("John", 30));  // { name: "John", age: 30 }',
  hint: 'Wrap object literal in parentheses() when using implicit return.'
},
{
  id: 'js_es6_5',
  topicId: 'js_es6',
  question: 'Use template literals for string interpolation.',
  mathSolution: 'Use backticks and ${} for embedding expressions.',
  codeSolution: 'const name = "John";\nconst age = 30;\n\n// String interpolation\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);  // My name is John and I am 30 years old.\n\n// Expression evaluation\nconst result = `2 + 3 = ${2 + 3}`;\nconsole.log(result);  // 2 + 3 = 5\n\n// Function calls in template\nconst upperName = `${name.toUpperCase()}`;\nconsole.log(upperName);  // JOHN',
  hint: 'Template literals use backticks (`) and ${expression} syntax.'
},
{
  id: 'js_es6_6',
  topicId: 'js_es6',
  question: 'Use multi-line strings with template literals.',
  mathSolution: 'Template literals preserve line breaks.',
  codeSolution: 'const multiLine = `\n    Line 1\n    Line 2\n    Line 3\n`;\nconsole.log(multiLine);\n//     Line 1\n//     Line 2\n//     Line 3\n\nconst html = `\n    <div>\n        <h1>Title</h1>\n        <p>Content</p>\n    </div>\n`;\nconsole.log(html);',
  hint: 'Line breaks are preserved automatically in template literals.'
},
{
  id: 'js_es6_7',
  topicId: 'js_es6',
  question: 'Use destructuring assignment for arrays.',
  mathSolution: 'Extract array values into variables using pattern matching.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\n\n// Basic destructuring\nconst [first, second] = numbers;\nconsole.log(first, second);  // 1 2\n\n// Skip elements\nconst [a, , b] = numbers;\nconsole.log(a, b);  // 1 3\n\n// Rest operator\nconst [head, ...tail] = numbers;\nconsole.log(head, tail);  // 1 [2, 3, 4, 5]\n\n// Default values\nconst [x = 0, y = 0] = [10];\nconsole.log(x, y);  // 10 0',
  hint: 'Use [var1, var2] = array to destructure arrays.'
},
{
  id: 'js_es6_8',
  topicId: 'js_es6',
  question: 'Use destructuring assignment for objects.',
  mathSolution: 'Extract object properties into variables.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\n\n// Basic destructuring\nconst { name, age } = person;\nconsole.log(name, age);  // John 30\n\n// Renaming variables\nconst { name: personName, city: location } = person;\nconsole.log(personName, location);  // John NYC\n\n// Default values\nconst { job = "Unemployed" } = person;\nconsole.log(job);  // Unemployed\n\n// Nested destructuring\nconst user = { profile: { username: "john_doe", email: "john@example.com" } };\nconst { profile: { username } } = user;\nconsole.log(username);  // john_doe',
  hint: 'Use {prop1, prop2} = object to destructure objects.'
},
{
  id: 'js_es6_9',
  topicId: 'js_es6',
  question: 'Use destructuring in function parameters.',
  mathSolution: 'Destructure objects directly in function signature.',
  codeSolution: '// Destructuring object parameter\nfunction printPerson({ name, age, city = "Unknown" }) {\n    console.log(`${name} is ${age} years old from ${city}`);\n}\n\nprintPerson({ name: "John", age: 30 });\n// John is 30 years old from Unknown\n\n// Destructuring array parameter\nfunction getFirstAndLast([first, ...rest]) {\n    const last = rest.pop();\n    return { first, last };\n}\n\nconsole.log(getFirstAndLast([10, 20, 30, 40]));  // { first: 10, last: 40 }',
  hint: 'Destructuring in parameters is great for configuration objects.'
},
{
  id: 'js_es6_10',
  topicId: 'js_es6',
  question: 'Use spread operator (...) to expand arrays.',
  mathSolution: 'Spread expands array elements into individual items.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\n// Combine arrays\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]\n\n// Copy array\nconst copy = [...arr1];\nconsole.log(copy);  // [1, 2, 3]\n\n// Spread in function calls\nconst numbers = [5, 10, 15];\nconst max = Math.max(...numbers);\nconsole.log(max);  // 15\n\n// Convert string to array\nconst chars = [..."hello"];\nconsole.log(chars);  // ["h","e","l","l","o"]',
  hint: 'Spread operator (...) expands iterable elements.'
},
{
  id: 'js_es6_11',
  topicId: 'js_es6',
  question: 'Use spread operator (...) to copy and merge objects.',
  mathSolution: 'Spread copies object properties into new object.',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\n\n// Merge objects\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }\n\n// Copy object\nconst copy = { ...obj1 };\nconsole.log(copy);  // { a: 1, b: 2 }\n\n// Override properties\nconst user = { name: "John", age: 30 };\nconst updated = { ...user, age: 31, city: "NYC" };\nconsole.log(updated);  // { name: "John", age: 31, city: "NYC" }',
  hint: 'Spread in objects merges properties, later properties override earlier.'
},
{
  id: 'js_es6_12',
  topicId: 'js_es6',
  question: 'Use rest parameters (...) to collect remaining arguments.',
  mathSolution: 'Rest parameters collect arguments into an array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\n\nconsole.log(sumAll(1, 2, 3));      // 6\nconsole.log(sumAll(1, 2, 3, 4, 5)); // 15\n\n// Rest with regular parameters\nfunction greet(greeting, ...names) {\n    return `${greeting}, ${names.join(" and ")}!`;\n}\n\nconsole.log(greet("Hello", "John", "Jane", "Bob"));\n// Hello, John and Jane and Bob!',
  hint: 'Rest parameters (...) must be the last parameter.'
},
{
  id: 'js_es6_13',
  topicId: 'js_es6',
  question: 'Use default parameters in functions.',
  mathSolution: 'Assign default values to function parameters.',
  codeSolution: 'function greet(name = "Guest", greeting = "Hello") {\n    return `${greeting}, ${name}!`;\n}\n\nconsole.log(greet());              // Hello, Guest!\nconsole.log(greet("John"));        // Hello, John!\nconsole.log(greet("Jane", "Hi"));  // Hi, Jane!\n\n// Default with expressions\nfunction multiply(a, b = a * 2) {\n    return a * b;\n}\n\nconsole.log(multiply(5));    // 50 (5 * 10)\nconsole.log(multiply(5, 3)); // 15',
  hint: 'Default parameters work with undefined only, not null.'
},
{
  id: 'js_es6_14',
  topicId: 'js_es6',
  question: 'Use enhanced object literals (property shorthand).',
  mathSolution: 'Use variable name as property name when they match.',
  codeSolution: 'const name = "John";\nconst age = 30;\n\n// Property shorthand\nconst person = { name, age };\nconsole.log(person);  // { name: "John", age: 30 }\n\n// Method shorthand\nconst calculator = {\n    add(a, b) { return a + b; },\n    multiply(a, b) { return a * b; }\n};\n\nconsole.log(calculator.add(5, 3));      // 8\nconsole.log(calculator.multiply(5, 3)); // 15',
  hint: 'Property shorthand: { name } instead of { name: name }'
},
{
  id: 'js_es6_15',
  topicId: 'js_es6',
  question: 'Use computed property names in objects.',
  mathSolution: 'Use expressions in square brackets for dynamic property names.',
  codeSolution: 'const prefix = "user";\nconst id = 123;\n\nconst obj = {\n    [`${prefix}_name`]: "John",\n    [`${prefix}_${id}`]: "Active",\n    ["is" + "Admin"]: true\n};\n\nconsole.log(obj.user_name);     // John\nconsole.log(obj.user_123);      // Active\nconsole.log(obj.isAdmin);       // true\n\n// Dynamic method names\nconst methodName = "calculate";\nconst math = {\n    [methodName](a, b) { return a + b; }\n};\n\nconsole.log(math.calculate(5, 3));  // 8',
  hint: 'Computed properties: [expression]: value'
},
{
  id: 'js_es6_16',
  topicId: 'js_es6',
  question: 'Use for...of loop to iterate over iterables.',
  mathSolution: 'for...of iterates over values of iterable objects.',
  codeSolution: 'const arr = [10, 20, 30];\nfor (const value of arr) {\n    console.log(value);  // 10, 20, 30\n}\n\nconst str = "hello";\nfor (const char of str) {\n    console.log(char);  // h, e, l, l, o\n}\n\nconst map = new Map([["a", 1], ["b", 2]]);\nfor (const [key, value] of map) {\n    console.log(`${key}: ${value}`);  // a: 1, b: 2\n}\n\nconst set = new Set([1, 2, 3]);\nfor (const value of set) {\n    console.log(value);  // 1, 2, 3\n}',
  hint: 'for...of works with arrays, strings, maps, sets, and other iterables.'
},
{
  id: 'js_es6_17',
  topicId: 'js_es6',
  question: 'Use includes() method for strings and arrays.',
  mathSolution: 'includes() checks if value exists in array or string.',
  codeSolution: '// Array includes\nconst fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));    // false\n\n// String includes\nconst message = "Hello World";\nconsole.log(message.includes("World"));   // true\nconsole.log(message.includes("world"));   // false (case-sensitive)\n\n// With start position\nconsole.log(fruits.includes("apple", 1)); // false (starts at index 1)',
  hint: 'includes() returns boolean, perfect for conditions.'
},
{
  id: 'js_es6_18',
  topicId: 'js_es6',
  question: 'Use startsWith() and endsWith() string methods.',
  mathSolution: 'Check if string starts or ends with specific substring.',
  codeSolution: 'const url = "https://example.com";\nconsole.log(url.startsWith("https"));   // true\nconsole.log(url.startsWith("http"));    // true\nconsole.log(url.endsWith(".com"));      // true\n\nconst filename = "image.jpg";\nconsole.log(filename.endsWith(".jpg")); // true\nconsole.log(filename.endsWith(".png")); // false\n\n// With position parameter\nconsole.log(url.startsWith("example", 8));  // true (start at index 8)',
  hint: 'startsWith() and endsWith() are case-sensitive.'
},
{
  id: 'js_es6_19',
  topicId: 'js_es6',
  question: 'Use repeat() method for strings.',
  mathSolution: 'repeat() repeats string specified number of times.',
  codeSolution: 'console.log("Ha".repeat(3));      // HaHaHa\nconsole.log("=".repeat(10));       // ==========\nconsole.log(" ".repeat(5) + "Hi");  //      Hi\n\n// Creating ASCII art\nfunction drawLine(length) {\n    return "-".repeat(length);\n}\nconsole.log(drawLine(20));  // --------------------\n\n// Padding strings\nfunction padLeft(str, length, char = " ") {\n    return char.repeat(Math.max(0, length - str.length)) + str;\n}\nconsole.log(padLeft("42", 5, "0"));  // 00042',
  hint: 'repeat() returns new string, original unchanged.'
},
{
  id: 'js_es6_20',
  topicId: 'js_es6',
  question: 'Use padStart() and padEnd() string methods.',
  mathSolution: 'Pad string to specific length with characters.',
  codeSolution: '// Pad start\nconsole.log("5".padStart(3, "0"));     // 005\nconsole.log("123".padStart(5, "*"));   // **123\nconsole.log("hi".padStart(10));        // "        hi"\n\n// Pad end\nconsole.log("5".padEnd(3, "0"));       // 500\nconsole.log("123".padEnd(5, "*"));     // 123**\n\n// Aligning numbers\nconst numbers = [1, 10, 100, 1000];\nnumbers.forEach(n => {\n    console.log(n.toString().padStart(5, " "));\n});\n//     1\n//    10\n//   100\n//  1000',
  hint: 'padStart adds to beginning, padEnd adds to end.'
},
{
  id: 'js_es6_21',
  topicId: 'js_es6',
  question: 'Use trimStart() and trimEnd() string methods.',
  mathSolution: 'Remove whitespace from start or end of string.',
  codeSolution: 'const str = "  Hello World  ";\nconsole.log(str.trimStart());  // "Hello World  "\nconsole.log(str.trimEnd());    // "  Hello World"\nconsole.log(str.trim());       // "Hello World"\n\n// Useful for user input\nconst userInput = "   john@example.com   ";\nconst email = userInput.trim();\nconsole.log(email);  // "john@example.com"',
  hint: 'trimStart() removes leading spaces, trimEnd() removes trailing spaces.'
},
{
  id: 'js_es6_22',
  topicId: 'js_es6',
  question: 'Use Array.from() to convert iterables to arrays.',
  mathSolution: 'Array.from() creates array from array-like or iterable objects.',
  codeSolution: '// From string\nconst chars = Array.from("hello");\nconsole.log(chars);  // ["h","e","l","l","o"]\n\n// From Set\nconst set = new Set([1, 2, 3]);\nconst arr = Array.from(set);\nconsole.log(arr);  // [1, 2, 3]\n\n// With mapping function\nconst doubled = Array.from([1, 2, 3], x => x * 2);\nconsole.log(doubled);  // [2, 4, 6]\n\n// Creating range\nconst range = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(range);  // [1, 2, 3, 4, 5]',
  hint: 'Array.from() works on any iterable or array-like object.'
},
{
  id: 'js_es6_23',
  topicId: 'js_es6',
  question: 'Use Array.of() to create arrays from arguments.',
  mathSolution: 'Array.of() creates array with given elements.',
  codeSolution: '// Array.of vs Array constructor\nconsole.log(Array.of(1, 2, 3));     // [1, 2, 3]\nconsole.log(Array(1, 2, 3));        // [1, 2, 3]\n\n// Difference with single number\nconsole.log(Array.of(5));    // [5]\nconsole.log(Array(5));       // [empty x5]\n\n// With mixed types\nconsole.log(Array.of("a", 1, true, null));  // ["a", 1, true, null]',
  hint: 'Array.of() avoids ambiguity of Array() constructor.'
},
{
  id: 'js_es6_24',
  topicId: 'js_es6',
  question: 'Use find() and findIndex() array methods.',
  mathSolution: 'find returns first matching element, findIndex returns index.',
  codeSolution: 'const users = [\n    { id: 1, name: "John" },\n    { id: 2, name: "Jane" },\n    { id: 3, name: "Bob" }\n];\n\n// Find user by condition\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Jane" }\n\n// Find index\nconst index = users.findIndex(u => u.name === "Bob");\nconsole.log(index);  // 2\n\n// Not found returns undefined / -1\nconst notFound = users.find(u => u.id === 99);\nconsole.log(notFound);  // undefined\nconsole.log(users.findIndex(u => u.id === 99));  // -1',
  hint: 'find() returns element, findIndex() returns index or -1.'
},
{
  id: 'js_es6_25',
  topicId: 'js_es6',
  question: 'Use findLast() and findLastIndex() array methods (ES2023).',
  mathSolution: 'Search array from end to beginning.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44, 12];\n\n// Find last element > 10\nconst last = numbers.findLast(n => n > 10);\nconsole.log(last);  // 44 (from end, first match)\n\n// Find last index\nconst lastIndex = numbers.findLastIndex(n => n === 12);\nconsole.log(lastIndex);  // 5 (last occurrence)\n\n// Traditional find searches from start\nconst first = numbers.find(n => n === 12);\nconsole.log(first);  // 12 (first occurrence)',
  hint: 'findLast() and findLastIndex() search from the end.'
},
{
  id: 'js_es6_26',
  topicId: 'js_es6',
  question: 'Use flat() and flatMap() array methods.',
  mathSolution: 'flat() flattens nested arrays, flatMap() maps then flattens.',
  codeSolution: '// flat()\nconst nested = [1, [2, 3], [4, [5, 6]]];\nconsole.log(nested.flat());      // [1, 2, 3, 4, [5, 6]]\nconsole.log(nested.flat(2));     // [1, 2, 3, 4, 5, 6]\n\n// flatMap()\nconst sentences = ["Hello world", "Good morning"];\nconst words = sentences.flatMap(s => s.split(" "));\nconsole.log(words);  // ["Hello", "world", "Good", "morning"]\n\n// flatMap with filtering\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.flatMap(x => x % 2 === 0 ? [x] : []);\nconsole.log(result);  // [2, 4]',
  hint: 'flatMap() is like map().flat() but more efficient.'
},
{
  id: 'js_es6_27',
  topicId: 'js_es6',
  question: 'Use Map data structure (key-value pairs with any key type).',
  mathSolution: 'Map allows objects, functions, any type as keys.',
  codeSolution: 'const map = new Map();\n\n// Set values\nmap.set("name", "John");\nmap.set(42, "answer");\nmap.set(true, "boolean");\n\n// Get values\nconsole.log(map.get("name"));  // John\nconsole.log(map.get(42));      // answer\n\n// Check existence\nconsole.log(map.has("name"));  // true\n\n// Delete\nmap.delete("name");\n\n// Size\nconsole.log(map.size);  // 2\n\n// Iteration\nfor (const [key, value] of map) {\n    console.log(`${key} => ${value}`);\n}',
  hint: 'Map uses any data type as key, unlike objects which convert keys to strings.'
},
{
  id: 'js_es6_28',
  topicId: 'js_es6',
  question: 'Use Set data structure (unique values collection).',
  mathSolution: 'Set stores unique values of any type.',
  codeSolution: 'const set = new Set();\n\n// Add values\nset.add(1);\nset.add(2);\nset.add(2);  // Duplicate ignored\nset.add(3);\n\nconsole.log(set);  // Set(3) {1, 2, 3}\n\n// Check existence\nconsole.log(set.has(2));  // true\nconsole.log(set.has(5));  // false\n\n// Delete\nset.delete(2);\n\n// Size\nconsole.log(set.size);  // 2\n\n// Remove duplicates from array\nconst arr = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(arr)];\nconsole.log(unique);  // [1, 2, 3, 4, 5]',
  hint: 'Set automatically eliminates duplicate values.'
},
{
  id: 'js_es6_29',
  topicId: 'js_es6',
  question: 'Use WeakMap and WeakSet for memory-efficient storage.',
  mathSolution: 'WeakMap/WeakSet hold weak references, allow garbage collection.',
  codeSolution: 'let obj = { name: "John" };\nconst weakMap = new WeakMap();\nweakMap.set(obj, "metadata");\nconsole.log(weakMap.get(obj));  // metadata\n\n// When obj is garbage collected, entry is removed\nobj = null;  // WeakMap entry becomes eligible for GC\n\n// WeakSet\nlet user = { id: 1 };\nconst weakSet = new WeakSet();\nweakSet.add(user);\nconsole.log(weakSet.has(user));  // true\nuser = null;  // WeakSet entry eligible for GC\n\n// WeakMap keys must be objects\n// weakMap.set("string", "value");  // TypeError',
  hint: 'WeakMap/WeakSet prevent memory leaks in caches and listeners.'
},
{
  id: 'js_es6_30',
  topicId: 'js_es6',
  question: 'Use Symbol primitive type for unique identifiers.',
  mathSolution: 'Symbol creates unique, immutable identifiers.',
  codeSolution: '// Create symbols\nconst sym1 = Symbol("id");\nconst sym2 = Symbol("id");\nconsole.log(sym1 === sym2);  // false (always unique)\n\n// As object keys\nconst obj = {\n    [sym1]: "secret value",\n    name: "John"\n};\nconsole.log(obj[sym1]);  // secret value\n\n// Symbols are not enumerable\nconsole.log(Object.keys(obj));  // ["name"]\n\n// Well-known symbols\nconst myIterable = {\n    [Symbol.iterator]: function* () {\n        yield 1;\n        yield 2;\n        yield 3;\n    }\n};\nfor (const val of myIterable) {\n    console.log(val);  // 1, 2, 3\n}',
  hint: 'Every Symbol is unique, even with same description.'
},
{
  id: 'js_es6_31',
  topicId: 'js_es6',
  question: 'Use class syntax for object-oriented programming.',
  mathSolution: 'class provides cleaner syntax for constructor functions and inheritance.',
  codeSolution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    speak() {\n        return `${this.name} makes a sound`;\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);\n        this.breed = breed;\n    }\n    \n    speak() {\n        return `${this.name} barks loudly!`;\n    }\n    \n    getBreed() {\n        return this.breed;\n    }\n}\n\nconst rex = new Dog("Rex", "German Shepherd");\nconsole.log(rex.speak());      // Rex barks loudly!\nconsole.log(rex.getBreed());   // German Shepherd',
  hint: 'class syntax is syntactic sugar over prototypes.'
},
{
  id: 'js_es6_32',
  topicId: 'js_es6',
  question: 'Use getters and setters in classes.',
  mathSolution: 'get/set keywords define computed properties with validation.',
  codeSolution: 'class Rectangle {\n    constructor(width, height) {\n        this._width = width;\n        this._height = height;\n    }\n    \n    get area() {\n        return this._width * this._height;\n    }\n    \n    get perimeter() {\n        return 2 * (this._width + this._height);\n    }\n    \n    set width(value) {\n        if (value > 0) this._width = value;\n        else throw new Error("Width must be positive");\n    }\n    \n    get width() {\n        return this._width;\n    }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);  // 50\nrect.width = 8;\nconsole.log(rect.area);  // 80',
  hint: 'Getters/setters are accessed like properties, not methods.'
},
{
  id: 'js_es6_33',
  topicId: 'js_es6',
  question: 'Use static methods and properties in classes.',
  mathSolution: 'static keyword defines class-level methods/properties.',
  codeSolution: 'class MathUtils {\n    static PI = 3.14159;\n    static E = 2.71828;\n    \n    static add(a, b) {\n        return a + b;\n    }\n    \n    static multiply(a, b) {\n        return a * b;\n    }\n    \n    static factorial(n) {\n        if (n <= 1) return 1;\n        return n * this.factorial(n - 1);\n    }\n}\n\nconsole.log(MathUtils.PI);           // 3.14159\nconsole.log(MathUtils.add(5, 3));    // 8\nconsole.log(MathUtils.factorial(5)); // 120\n\n// Cannot call on instances\n// const math = new MathUtils();\n// math.add(1, 2);  // TypeError',
  hint: 'Static members belong to class, not instances.'
},
{
  id: 'js_es6_34',
  topicId: 'js_es6',
  question: 'Use private class fields (# syntax).',
  mathSolution: 'Private fields are accessible only within class.',
  codeSolution: 'class BankAccount {\n    #balance = 0;\n    #accountNumber;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.#accountNumber = accountNumber;\n        this.#balance = initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) this.#balance += amount;\n        return this.#balance;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}\n\nconst account = new BankAccount("12345", 1000);\nconsole.log(account.getBalance());  // 1000\n// console.log(account.#balance);   // SyntaxError: Private field',
  hint: 'Private fields (#) are truly private, not just convention.'
},
{
  id: 'js_es6_35',
  topicId: 'js_es6',
  question: 'Use exponentiation operator (**).',
  mathSolution: '** operator raises first operand to power of second.',
  codeSolution: '// Basic exponentiation\nconsole.log(2 ** 3);   // 8\nconsole.log(5 ** 2);   // 25\nconsole.log(10 ** 0);  // 1\n\n// Exponentiation assignment\nlet x = 2;\nx **= 3;\nconsole.log(x);  // 8\n\n// Large numbers\nconsole.log(2 ** 10);  // 1024\nconsole.log(10 ** 6);  // 1000000\n\n// Before ES6: Math.pow\nconsole.log(Math.pow(2, 3));  // 8 (old way)',
  hint: '** is cleaner than Math.pow() for exponentiation.'
},
{
  id: 'js_es6_36',
  topicId: 'js_es6',
  question: 'Use Number methods: isNaN(), isFinite(), isInteger(), isSafeInteger().',
  mathSolution: 'Improved Number methods avoid global function coercion issues.',
  codeSolution: '// Number.isNaN (strict vs global isNaN)\nconsole.log(Number.isNaN(NaN));      // true\nconsole.log(Number.isNaN("hello"));   // false\nconsole.log(isNaN("hello"));          // true (coerces)\n\n// Number.isFinite\nconsole.log(Number.isFinite(100));    // true\nconsole.log(Number.isFinite(Infinity)); // false\n\n// Number.isInteger\nconsole.log(Number.isInteger(42));    // true\nconsole.log(Number.isInteger(42.5));  // false\n\n// Number.isSafeInteger (within 2^53-1)\nconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));  // true\nconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false',
  hint: 'Number methods don\'t coerce values like global functions do.'
},
{
  id: 'js_es6_37',
  topicId: 'js_es6',
  question: 'Use Object.assign() to copy and merge objects.',
  mathSolution: 'Object.assign() copies enumerable own properties.',
  codeSolution: 'const target = { a: 1 };\nconst source = { b: 2, c: 3 };\n\n// Copy properties\nObject.assign(target, source);\nconsole.log(target);  // { a: 1, b: 2, c: 3 }\n\n// Merge multiple objects\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { c: 3 };\nconst merged = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged);  // { a: 1, b: 2, c: 3 }\n\n// Override properties\nconst config = { theme: "light", language: "en" };\nconst override = { theme: "dark" };\nObject.assign(config, override);\nconsole.log(config);  // { theme: "dark", language: "en" }',
  hint: 'Object.assign() modifies the target object and returns it.'
},
{
  id: 'js_es6_38',
  topicId: 'js_es6',
  question: 'Use Object.keys(), Object.values(), Object.entries().',
  mathSolution: 'Get arrays of keys, values, or key-value pairs from object.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\n\n// Object.keys\nconst keys = Object.keys(person);\nconsole.log(keys);  // ["name", "age", "city"]\n\n// Object.values\nconst values = Object.values(person);\nconsole.log(values);  // ["John", 30, "NYC"]\n\n// Object.entries\nconst entries = Object.entries(person);\nconsole.log(entries);  // [["name","John"], ["age",30], ["city","NYC"]]\n\n// Iterate with entries\nfor (const [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Object.entries() is great for iterating over objects.'
},
{
  id: 'js_es6_39',
  topicId: 'js_es6',
  question: 'Use Object.fromEntries() to convert entries back to object.',
  mathSolution: 'Object.fromEntries() creates object from key-value pairs.',
  codeSolution: 'const entries = [["name", "John"], ["age", 30], ["city", "NYC"]];\nconst person = Object.fromEntries(entries);\nconsole.log(person);  // { name: "John", age: 30, city: "NYC" }\n\n// Convert Map to object\nconst map = new Map([["a", 1], ["b", 2]]);\nconst obj = Object.fromEntries(map);\nconsole.log(obj);  // { a: 1, b: 2 }\n\n// Transform object using entries\nconst doubled = Object.fromEntries(\n    Object.entries({ a: 1, b: 2, c: 3 }).map(([k, v]) => [k, v * 2])\n);\nconsole.log(doubled);  // { a: 2, b: 4, c: 6 }',
  hint: 'Object.fromEntries() reverses Object.entries().'
},
{
  id: 'js_es6_40',
  topicId: 'js_es6',
  question: 'Use Promise for asynchronous operations.',
  mathSolution: 'Promise represents eventual completion of async operation.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => {\n        setTimeout(() => resolve(`Waited ${ms}ms`), ms);\n    });\n}\n\n// Using promise\nconst promise = delay(1000);\npromise.then(result => console.log(result));  // Waited 1000ms\n\n// Promise chain\nfetch("https://api.example.com/data")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));\n\n// Promise.all for parallel\nPromise.all([delay(100), delay(200), delay(300)])\n    .then(results => console.log(results));  // ["Waited 100ms", ...]',
  hint: 'Promises avoid callback hell and provide better error handling.'
},
{
  id: 'js_es6_41',
  topicId: 'js_es6',
  question: 'Use async/await syntax for cleaner async code.',
  mathSolution: 'async functions return promises, await pauses execution.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function fetchData() {\n    try {\n        console.log("Start");\n        await delay(1000);\n        console.log("After 1 second");\n        \n        const response = await fetch("https://api.example.com/data");\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error("Error:", error);\n    }\n}\n\nfetchData();\n\n// Top-level await (in modules)\n// const data = await fetch("https://api.example.com/data");',
  hint: 'await only works inside async functions (or top-level in modules).'
},
{
  id: 'js_es6_42',
  topicId: 'js_es6',
  question: 'Use default export in modules.',
  mathSolution: 'Modules export values for use in other files.',
  codeSolution: '// math.js (export)\nexport default function add(a, b) {\n    return a + b;\n}\n\nexport const PI = 3.14159;\n\n// app.js (import)\nimport add, { PI } from "./math.js";\nconsole.log(add(5, 3));  // 8\nconsole.log(PI);          // 3.14159\n\n// HTML usage (type="module")\n// <script type="module" src="app.js"></script>',
  hint: 'Module exports are static and hoisted.'
},
{
  id: 'js_es6_43',
  topicId: 'js_es6',
  question: 'Use dynamic import() for lazy loading.',
  mathSolution: 'import() returns promise for on-demand module loading.',
  codeSolution: '// Lazy load module on demand\nasync function loadModule() {\n    const module = await import("./heavy-module.js");\n    module.default();\n}\n\n// Conditional loading\nif (featureFlag) {\n    const { heavyFunction } = await import("./heavy.js");\n    heavyFunction();\n}\n\n// React code splitting pattern\nfunction MyComponent() {\n    const [module, setModule] = useState(null);\n    \n    useEffect(() => {\n        import("./ChartComponent.js").then(comp => setModule(comp));\n    }, []);\n    \n    return module ? <module.default /> : <div>Loading...</div>;\n}',
  hint: 'Dynamic import reduces initial bundle size.'
},
{
  id: 'js_es6_44',
  topicId: 'js_es6',
  question: 'Use generator functions (function*).',
  mathSolution: 'Generators can pause and resume execution with yield.',
  codeSolution: 'function* numberGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next().value);  // 1\nconsole.log(gen.next().value);  // 2\nconsole.log(gen.next().value);  // 3\nconsole.log(gen.next().done);   // true\n\n// Infinite generator\nfunction* idGenerator() {\n    let id = 1;\n    while (true) {\n        yield id++;\n    }\n}\n\nconst ids = idGenerator();\nconsole.log(ids.next().value);  // 1\nconsole.log(ids.next().value);  // 2',
  hint: 'Generator functions use function* and yield keyword.'
},
{
  id: 'js_es6_45',
  topicId: 'js_es6',
  question: 'Use for...of with iterable objects (custom iterators).',
  mathSolution: 'Implement Symbol.iterator for custom iterables.',
  codeSolution: 'const range = {\n    start: 1,\n    end: 5,\n    [Symbol.iterator]() {\n        let current = this.start;\n        const end = this.end;\n        \n        return {\n            next() {\n                if (current <= end) {\n                    return { value: current++, done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n};\n\nfor (const num of range) {\n    console.log(num);  // 1, 2, 3, 4, 5\n}\n\n// Spread works with iterables too\nconsole.log([...range]);  // [1, 2, 3, 4, 5]',
  hint: 'Iterable protocol: implement [Symbol.iterator]() returning { next() }'
},
{
  id: 'js_es6_46',
  topicId: 'js_es6',
  question: 'Use Proxy for custom object behavior.',
  mathSolution: 'Proxy intercepts and customizes operations on objects.',
  codeSolution: 'const target = { name: "John", age: 30 };\n\nconst handler = {\n    get(obj, prop) {\n        if (prop === "age") {\n            return obj[prop] + " years old";\n        }\n        return obj[prop];\n    },\n    set(obj, prop, value) {\n        if (prop === "age" && (value < 0 || value > 150)) {\n            throw new Error("Invalid age");\n        }\n        obj[prop] = value;\n        return true;\n    }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.age);  // 30 years old\nproxy.age = 31;\nconsole.log(proxy.age);  // 31 years old\n// proxy.age = -5;  // Error: Invalid age',
  hint: 'Proxy enables validation, logging, computed properties, etc.'
},
{
  id: 'js_es6_47',
  topicId: 'js_es6',
  question: 'Use Reflect API for default object operations.',
  mathSolution: 'Reflect provides methods for interceptable operations.',
  codeSolution: 'const obj = { name: "John" };\n\n// Traditional vs Reflect\nconsole.log("name" in obj);           // true\nconsole.log(Reflect.has(obj, "name")); // true\n\ndelete obj.name;\nconsole.log(obj.name);                 // undefined\n\nReflect.set(obj, "age", 30);\nconsole.log(Reflect.get(obj, "age"));  // 30\n\n// Useful with Proxy\nconst handler = {\n    get(target, prop, receiver) {\n        console.log(`Getting ${prop}`);\n        return Reflect.get(target, prop, receiver);\n    },\n    set(target, prop, value, receiver) {\n        console.log(`Setting ${prop} to ${value}`);\n        return Reflect.set(target, prop, value, receiver);\n    }\n};\n\nconst proxy = new Proxy({}, handler);\nproxy.name = "John";  // Setting name to John\nconsole.log(proxy.name);  // Getting name\\nJohn',
  hint: 'Reflect API provides standard methods for proxy handlers.'
},
{
  id: 'js_es6_48',
  topicId: 'js_es6',
  question: 'Use String.prototype.trim() for whitespace removal.',
  mathSolution: 'trim() removes whitespace from both ends of string.',
  codeSolution: 'const str = "  Hello World  ";\nconsole.log(str.trim());      // "Hello World"\nconsole.log(str.trimStart()); // "Hello World  "\nconsole.log(str.trimEnd());   // "  Hello World"\n\n// Form validation\nconst email = "  user@example.com  ";\nconst cleanEmail = email.trim();\nconsole.log(cleanEmail);  // "user@example.com"\n\n// Multi-line text\nconst text = `\n    Line 1\n    Line 2\n`;\nconsole.log(text.trim());  // "Line 1\\n    Line 2"',
  hint: 'trim() is essential for sanitizing user input.'
},
{
  id: 'js_es6_49',
  topicId: 'js_es6',
  question: 'Use Array.prototype.fill() to fill arrays with values.',
  mathSolution: 'fill() sets array elements to static value.',
  codeSolution: '// Create array of zeros\nconst zeros = new Array(5).fill(0);\nconsole.log(zeros);  // [0, 0, 0, 0, 0]\n\n// Fill part of array\nconst arr = [1, 2, 3, 4, 5];\narr.fill(0, 1, 4);\nconsole.log(arr);  // [1, 0, 0, 0, 5]\n\n// Fill with objects (same reference!)\nconst objArr = new Array(3).fill({});\nobjArr[0].name = "John";\nconsole.log(objArr[1].name);  // John (same object reference)',
  hint: 'fill() with objects creates references, not copies.'
},
{
  id: 'js_es6_50',
  topicId: 'js_es6',
  question: 'Use Array.prototype.copyWithin() to copy array elements.',
  mathSolution: 'copyWithin() copies portion of array to another location.',
  codeSolution: 'const arr = [1, 2, 3, 4, 5];\n\n// Copy from index 3 to 4 to position 0\narr.copyWithin(0, 3, 5);\nconsole.log(arr);  // [4, 5, 3, 4, 5]\n\nconst arr2 = [1, 2, 3, 4, 5];\n// Copy from start to position 2\narr2.copyWithin(2, 0, 2);\nconsole.log(arr2);  // [1, 2, 1, 2, 5]\n\n// Without end parameter (copy to end)\nconst arr3 = [1, 2, 3, 4, 5];\narr3.copyWithin(1, 3);\nconsole.log(arr3);  // [1, 4, 5, 4, 5]',
  hint: 'copyWithin() modifies array in place, doesn\'t change length.'
}
);