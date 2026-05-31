QuizData.questions.push(
{
  id: 'js_var_1',
  topicId: 'js_var',
  question: 'Declare a variable using var and assign it value 10, then print it.',
  mathSolution: 'Use var keyword to declare variable.',
  codeSolution: 'var num = 10;\nconsole.log(num);  // 10',
  hint: 'Use `var variableName = value;`'
},
{
  id: 'js_var_2',
  topicId: 'js_var',
  question: 'Declare a variable using let and assign it value "Hello", then print it.',
  mathSolution: 'Use let keyword for block-scoped variable.',
  codeSolution: 'let message = "Hello";\nconsole.log(message);  // Hello',
  hint: 'Use `let variableName = value;`'
},
{
  id: 'js_var_3',
  topicId: 'js_var',
  question: 'Declare a constant using const for PI value 3.14159 and print it.',
  mathSolution: 'Use const for values that never change.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159',
  hint: 'Use `const VARIABLE_NAME = value;` (uppercase for constants)'
},
{
  id: 'js_var_4',
  topicId: 'js_var',
  question: 'Declare a var variable, reassign it a new value, and print both values.',
  mathSolution: 'var allows reassignment.',
  codeSolution: 'var age = 20;\nconsole.log(age);  // 20\nage = 25;\nconsole.log(age);  // 25',
  hint: 'You can reassign var variables anytime.'
},
{
  id: 'js_var_5',
  topicId: 'js_var',
  question: 'Declare a let variable, reassign it, and print the new value.',
  mathSolution: 'let allows reassignment.',
  codeSolution: 'let score = 50;\nconsole.log(score);  // 50\nscore = 75;\nconsole.log(score);  // 75',
  hint: 'let variables can be reassigned.'
},
{
  id: 'js_var_6',
  topicId: 'js_var',
  question: 'Try to reassign a const variable and observe the error (comment the error).',
  mathSolution: 'const cannot be reassigned.',
  codeSolution: 'const NAME = "John";\nconsole.log(NAME);  // John\n// NAME = "Jane";  // TypeError: Assignment to constant variable',
  hint: 'const variables cannot be reassigned after declaration.'
},
{
  id: 'js_var_7',
  topicId: 'js_var',
  question: 'Declare multiple variables (var, let, const) in one line and print them.',
  mathSolution: 'Use commas to declare multiple variables.',
  codeSolution: 'var a = 1, b = 2;\nlet c = 3, d = 4;\nconst E = 5, F = 6;\nconsole.log(a, b, c, d, E, F);  // 1 2 3 4 5 6',
  hint: 'Separate with commas: `var x=1, y=2;`'
},
{
  id: 'js_var_8',
  topicId: 'js_var',
  question: 'Demonstrate variable hoisting with var (print before declaration).',
  mathSolution: 'var declarations are hoisted (undefined before assignment).',
  codeSolution: 'console.log(x);  // undefined\nvar x = 5;\nconsole.log(x);  // 5',
  hint: 'var is hoisted to the top of its scope.'
},
{
  id: 'js_var_9',
  topicId: 'js_var',
  question: 'Show that let is not hoisted (ReferenceError).',
  mathSolution: 'let is hoisted but not initialized (Temporal Dead Zone).',
  codeSolution: '// console.log(y);  // ReferenceError: Cannot access before initialization\nlet y = 10;\nconsole.log(y);  // 10',
  hint: 'let variables are in TDZ until declaration.'
},
{
  id: 'js_var_10',
  topicId: 'js_var',
  question: 'Declare a variable without any keyword (bad practice) and print it.',
  mathSolution: 'Without keyword creates global property (avoid this).',
  codeSolution: 'z = 100;\nconsole.log(z);  // 100',
  hint: 'Always use var, let, or const to declare variables.'
},
{
  id: 'js_var_11',
  topicId: 'js_var',
  question: 'Demonstrate block scope with let inside an if block.',
  mathSolution: 'let is block-scoped, accessible only inside {}.',
  codeSolution: 'if (true) {\n    let blockVar = "Inside block";\n    console.log(blockVar);  // Inside block\n}\n// console.log(blockVar);  // ReferenceError',
  hint: 'let variables are only accessible within the block they are declared.'
},
{
  id: 'js_var_12',
  topicId: 'js_var',
  question: 'Demonstrate function scope with var inside a function.',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'function test() {\n    var funcVar = "Inside function";\n    console.log(funcVar);  // Inside function\n}\ntest();\n// console.log(funcVar);  // ReferenceError',
  hint: 'var is accessible anywhere inside the function.'
},
{
  id: 'js_var_13',
  topicId: 'js_var',
  question: 'Show that var ignores block scope (accessible outside if block).',
  mathSolution: 'var is not block-scoped, leaks outside blocks.',
  codeSolution: 'if (true) {\n    var leakVar = "I leak out!";\n}\nconsole.log(leakVar);  // I leak out!',
  hint: 'var variables are function-scoped, not block-scoped.'
},
{
  id: 'js_var_14',
  topicId: 'js_var',
  question: 'Redeclare a var variable multiple times and print.',
  mathSolution: 'var allows redeclaration in same scope.',
  codeSolution: 'var city = "New York";\nvar city = "Los Angeles";\nconsole.log(city);  // Los Angeles',
  hint: 'var can be redeclared without error.'
},
{
  id: 'js_var_15',
  topicId: 'js_var',
  question: 'Try to redeclare a let variable (error) and comment the error.',
  mathSolution: 'let does not allow redeclaration in same scope.',
  codeSolution: 'let country = "USA";\n// let country = "Canada";  // SyntaxError: Identifier already declared\nconsole.log(country);  // USA',
  hint: 'let cannot be redeclared in the same scope.'
},
{
  id: 'js_var_16',
  topicId: 'js_var',
  question: 'Declare a const object and modify its property (allowed).',
  mathSolution: 'const prevents reassignment, not mutation.',
  codeSolution: 'const person = { name: "Alice", age: 25 };\nperson.age = 26;\nconsole.log(person);  // { name: "Alice", age: 26 }',
  hint: 'const objects can have their properties changed.'
},
{
  id: 'js_var_17',
  topicId: 'js_var',
  question: 'Declare a const array and modify its elements (allowed).',
  mathSolution: 'const arrays can be mutated.',
  codeSolution: 'const colors = ["red", "blue"];\ncolors.push("green");\nconsole.log(colors);  // ["red", "blue", "green"]',
  hint: 'const arrays can use array methods like push(), pop().'
},
{
  id: 'js_var_18',
  topicId: 'js_var',
  question: 'Try to reassign a const array (error) and comment the error.',
  mathSolution: 'const cannot be reassigned to a new array.',
  codeSolution: 'const nums = [1, 2, 3];\n// nums = [4, 5, 6];  // TypeError: Assignment to constant variable\nconsole.log(nums);  // [1, 2, 3]',
  hint: 'const reference cannot change, even for arrays/objects.'
},
{
  id: 'js_var_19',
  topicId: 'js_var',
  question: 'Demonstrate global scope with var (window property in browsers).',
  mathSolution: 'var in global scope becomes window property.',
  codeSolution: 'var globalVar = "I am global";\nconsole.log(window.globalVar);  // I am global (in browser)',
  hint: 'Global var creates property on window object.'
},
{
  id: 'js_var_20',
  topicId: 'js_var',
  question: 'Show that let in global scope does NOT become window property.',
  mathSolution: 'let does not create property on window object.',
  codeSolution: 'let globalLet = "I am also global";\nconsole.log(window.globalLet);  // undefined (in browser)',
  hint: 'let and const do not add properties to window.'
},
{
  id: 'js_var_21',
  topicId: 'js_var',
  question: 'Use template literals with variables to create a sentence.',
  mathSolution: 'Use backticks and ${} for interpolation.',
  codeSolution: 'let name = "Bob";\nlet age = 30;\nconsole.log(`My name is ${name} and I am ${age} years old.`);  // My name is Bob and I am 30 years old.',
  hint: 'Use backticks (`) and ${variable} syntax.'
},
{
  id: 'js_var_22',
  topicId: 'js_var',
  question: 'Declare a variable without initializing it (undefined).',
  mathSolution: 'Variables declared without value are undefined.',
  codeSolution: 'let undeclaredVar;\nconsole.log(undeclaredVar);  // undefined',
  hint: 'Variables are undefined until assigned a value.'
},
{
  id: 'js_var_23',
  topicId: 'js_var',
  question: 'Check type of undefined variable using typeof.',
  mathSolution: 'typeof returns "undefined" for uninitialized variables.',
  codeSolution: 'let unknown;\nconsole.log(typeof unknown);  // undefined',
  hint: 'Use `typeof variable` to check type.'
},
{
  id: 'js_var_24',
  topicId: 'js_var',
  question: 'Declare a variable with var inside a loop and access outside (works).',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    var loopVar = i;\n}\nconsole.log(loopVar);  // 2',
  hint: 'var inside loop is accessible outside the loop.'
},
{
  id: 'js_var_25',
  topicId: 'js_var',
  question: 'Declare a variable with let inside a loop and try to access outside (error).',
  mathSolution: 'let is block-scoped, inaccessible outside loop.',
  codeSolution: 'for (let j = 0; j < 3; j++) {\n    let blockScoped = j;\n}\n// console.log(blockScoped);  // ReferenceError',
  hint: 'let is only accessible within the loop block.'
},
{
  id: 'js_var_26',
  topicId: 'js_var',
  question: 'Use const for a function expression.',
  mathSolution: 'const prevents reassignment of function variable.',
  codeSolution: 'const greet = function() {\n    return "Hello!";\n};\nconsole.log(greet());  // Hello!',
  hint: 'const is commonly used for function expressions.'
},
{
  id: 'js_var_27',
  topicId: 'js_var',
  question: 'Use let for a counter in a for loop (preferred way).',
  mathSolution: 'let creates a new binding for each iteration.',
  codeSolution: 'for (let i = 0; i < 3; i++) {\n    console.log(i);  // 0, 1, 2\n}',
  hint: 'Always use let for loop counters.'
},
{
  id: 'js_var_28',
  topicId: 'js_var',
  question: 'Compare var vs let in a setTimeout loop (Classic interview question).',
  mathSolution: 'var creates one variable; let creates block-scoped per iteration.',
  codeSolution: '// With var\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 3, 3, 3\n}\n// With let\nfor (let j = 0; j < 3; j++) {\n    setTimeout(() => console.log(j), 100);  // 0, 1, 2\n}',
  hint: 'let creates a new scope for each loop iteration.'
},
{
  id: 'js_var_29',
  topicId: 'js_var',
  question: 'Declare multiple const variables with computed names.',
  mathSolution: 'Use object literal or computed property names (ES6).',
  codeSolution: 'const key = "score";\nconst obj = {\n    [key]: 100\n};\nconsole.log(obj.score);  // 100',
  hint: 'Use square brackets [] for computed property names.'
},
{
  id: 'js_var_30',
  topicId: 'js_var',
  question: 'Swap two variables using destructuring assignment.',
  mathSolution: 'Use array destructuring to swap values.',
  codeSolution: 'let a = 5, b = 10;\n[a, b] = [b, a];\nconsole.log(a, b);  // 10 5',
  hint: 'Use `[a, b] = [b, a]` for swapping.'
},
{
  id: 'js_var_31',
  topicId: 'js_var',
  question: 'Use const for a variable that should never change (best practice).',
  mathSolution: 'Use const by default, let only if reassignment needed.',
  codeSolution: 'const MAX_USERS = 100;\nconst API_URL = "https://api.example.com";\nconsole.log(MAX_USERS, API_URL);',
  hint: 'Always prefer const over let when possible.'
},
{
  id: 'js_var_32',
  topicId: 'js_var',
  question: 'Demonstrate Temporal Dead Zone (TDZ) with let.',
  mathSolution: 'TDZ is period between entering scope and declaration.',
  codeSolution: '{\n    // TDZ starts\n    // console.log(tdzVar);  // ReferenceError\n    let tdzVar = "Now safe";\n    console.log(tdzVar);  // Now safe\n}',
  hint: 'Cannot access let variables before declaration.'
},
{
  id: 'js_var_33',
  topicId: 'js_var',
  question: 'Show that var ignores TDZ (can access before declaration).',
  mathSolution: 'var is hoisted and initialized with undefined.',
  codeSolution: '{\n    console.log(varVar);  // undefined (no TDZ)\n    var varVar = "Works fine";\n    console.log(varVar);  // Works fine\n}',
  hint: 'var is initialized as undefined, no TDZ.'
},
{
  id: 'js_var_34',
  topicId: 'js_var',
  question: 'Declare a variable using let in a switch statement (block scope).',
  mathSolution: 'switch creates a block, let is scoped to it.',
  codeSolution: 'let value = "A";\nswitch(value) {\n    case "A":\n        let message = "Found A";\n        console.log(message);  // Found A\n        break;\n}\n// console.log(message);  // ReferenceError',
  hint: 'let in switch is block-scoped to the case.'
},
{
  id: 'js_var_35',
  topicId: 'js_var',
  question: 'Create a variable with var in a switch case (no block scope issues).',
  mathSolution: 'var is function-scoped, leaks out of switch.',
  codeSolution: 'switch("B") {\n    case "B":\n        var leakMessage = "I leak";\n        console.log(leakMessage);  // I leak\n}\nconsole.log(leakMessage);  // I leak (accessible)',
  hint: 'var ignores switch block boundaries.'
},
{
  id: 'js_var_36',
  topicId: 'js_var',
  question: 'Use destructuring to extract variables from an object.',
  mathSolution: 'Use {} on left side to extract properties.',
  codeSolution: 'const user = { name: "Alice", age: 25, city: "Paris" };\nconst { name, age } = user;\nconsole.log(name, age);  // Alice 25',
  hint: 'Use `const { prop1, prop2 } = object;` syntax.'
},
{
  id: 'js_var_37',
  topicId: 'js_var',
  question: 'Use destructuring to extract variables from an array.',
  mathSolution: 'Use [] on left side to extract array elements.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconsole.log(first, second);  // red green',
  hint: 'Use `const [var1, var2] = array;` syntax.'
},
{
  id: 'js_var_38',
  topicId: 'js_var',
  question: 'Set default values in destructuring assignment.',
  mathSolution: 'Use = to provide default values.',
  codeSolution: 'const [a = 1, b = 2] = [10];\nconsole.log(a, b);  // 10 2\nconst { x = 5, y = 10 } = { x: 20 };\nconsole.log(x, y);  // 20 10',
  hint: 'Add = defaultValue after variable name.'
},
{
  id: 'js_var_39',
  topicId: 'js_var',
  question: 'Rename variables during object destructuring.',
  mathSolution: 'Use colon : to rename extracted properties.',
  codeSolution: 'const person = { firstName: "John", lastName: "Doe" };\nconst { firstName: fName, lastName: lName } = person;\nconsole.log(fName, lName);  // John Doe',
  hint: 'Use `{ oldName: newName }` syntax.'
},
{
  id: 'js_var_40',
  topicId: 'js_var',
  question: 'Use rest operator (...) with destructuring.',
  mathSolution: 'Rest collects remaining elements into an array.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = numbers;\nconsole.log(first, second);  // 1 2\nconsole.log(rest);  // [3, 4, 5]',
  hint: 'Use `...rest` to collect remaining items.'
},
{
  id: 'js_var_41',
  topicId: 'js_var',
  question: 'Use spread operator to copy an array into a new variable.',
  mathSolution: 'Use ... to spread array elements.',
  codeSolution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original);  // [1, 2, 3]\nconsole.log(copy);  // [1, 2, 3, 4]',
  hint: '`const copy = [...original]` creates a shallow copy.'
},
{
  id: 'js_var_42',
  topicId: 'js_var',
  question: 'Use spread operator to merge two objects.',
  mathSolution: 'Use ... to spread object properties.',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }',
  hint: '`const merged = {...obj1, ...obj2}` merges objects.'
},
{
  id: 'js_var_43',
  topicId: 'js_var',
  question: 'Show variable scope difference between var in function vs block.',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'function testScope() {\n    if (true) {\n        var functionScoped = "I am in function";\n        let blockScoped = "I am in block";\n    }\n    console.log(functionScoped);  // I am in function\n    // console.log(blockScoped);  // ReferenceError\n}\ntestScope();',
  hint: 'var escapes blocks but not functions.'
},
{
  id: 'js_var_44',
  topicId: 'js_var',
  question: 'Create a variable using const and freeze the object (Object.freeze).',
  mathSolution: 'Object.freeze prevents property changes.',
  codeSolution: 'const config = Object.freeze({ apiKey: "12345", timeout: 5000 });\nconfig.apiKey = "newkey";  // Fails silently or error in strict mode\nconsole.log(config.apiKey);  // 12345',
  hint: 'Use `Object.freeze()` to make const object immutable.'
},
{
  id: 'js_var_45',
  topicId: 'js_var',
  question: 'Check if a variable is defined using typeof (safe way).',
  mathSolution: 'typeof returns "undefined" for undeclared variables.',
  codeSolution: 'if (typeof myVar !== "undefined") {\n    console.log("Variable exists");\n} else {\n    console.log("Variable not defined");  // This runs\n}',
  hint: 'Use `typeof` to check existence without ReferenceError.'
},
{
  id: 'js_var_46',
  topicId: 'js_var',
  question: 'Chain variable assignments (multiple variables same value).',
  mathSolution: 'Assignment returns value, can chain = operator.',
  codeSolution: 'let a, b, c;\na = b = c = 10;\nconsole.log(a, b, c);  // 10 10 10',
  hint: 'Assignment works from right to left.'
},
{
  id: 'js_var_47',
  topicId: 'js_var',
  question: 'Use const with for...of loop (const works because new binding per iteration).',
  mathSolution: 'const in for...of creates new binding each iteration.',
  codeSolution: 'const arr = [10, 20, 30];\nfor (const value of arr) {\n    console.log(value);  // 10, 20, 30\n    // value = 100;  // TypeError (can\'t reassign)\n}',
  hint: 'const works in for...of because each iteration gets new binding.'
},
{
  id: 'js_var_48',
  topicId: 'js_var',
  question: 'Use let in for...in loop to iterate object properties.',
  mathSolution: 'let works with for...in to get property names.',
  codeSolution: 'const person = { name: "Alice", age: 30, city: "Boston" };\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n// name: Alice\n// age: 30\n// city: Boston',
  hint: 'Use for...in to iterate object keys.'
},
{
  id: 'js_var_49',
  topicId: 'js_var',
  question: 'Create block scope using curly braces with let and const.',
  mathSolution: 'Any {} creates a block scope for let/const.',
  codeSolution: '{\n    let blockLet = "Inside block";\n    const blockConst = "Also inside block";\n    console.log(blockLet);  // Inside block\n    console.log(blockConst);  // Also inside block\n}\n// console.log(blockLet);  // ReferenceError\n// console.log(blockConst);  // ReferenceError',
  hint: 'Use {} to create isolated scopes with let/const.'
},
{
  id: 'js_var_50',
  topicId: 'js_var',
  question: 'Best practice: Declare variables with const vs let (real-world example).',
  mathSolution: 'Use const by default, let when reassignment needed.',
  codeSolution: 'const TAX_RATE = 0.08;  // Never changes\nlet total = 100;  // Changes\nlet discount = 10;  // Changes\ntotal = total - discount;\nconst finalTotal = total + (total * TAX_RATE);  // Calculated once\nconsole.log(finalTotal);  // 97.2',
  hint: 'Default to const, use let only for variables that need reassignment.'
}
);