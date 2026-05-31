QuizData.questions.push(
{
  id: 'js_datatypes_1',
  topicId: 'js_datatypes',
  question: 'Declare a string variable and check its type using typeof.',
  mathSolution: 'Use typeof operator to get data type.',
  codeSolution: 'let str = "Hello World";\nconsole.log(typeof str);  // string',
  hint: 'Use `typeof variable` to check type.'
},
{
  id: 'js_datatypes_2',
  topicId: 'js_datatypes',
  question: 'Declare a number variable and check its type.',
  mathSolution: 'Numbers include integers and decimals.',
  codeSolution: 'let num = 42;\nconsole.log(typeof num);  // number\nlet decimal = 3.14;\nconsole.log(typeof decimal);  // number',
  hint: 'Both integers and decimals are "number" type.'
},
{
  id: 'js_datatypes_3',
  topicId: 'js_datatypes',
  question: 'Declare a boolean variable and check its type.',
  mathSolution: 'Boolean has only true/false values.',
  codeSolution: 'let isLogged = true;\nconsole.log(typeof isLogged);  // boolean\nlet isActive = false;\nconsole.log(typeof isActive);  // boolean',
  hint: 'Boolean values are true or false.'
},
{
  id: 'js_datatypes_4',
  topicId: 'js_datatypes',
  question: 'Declare an undefined variable and check its type.',
  mathSolution: 'Undefined means variable declared but no value.',
  codeSolution: 'let uncertain;\nconsole.log(typeof uncertain);  // undefined',
  hint: 'Variables without assignment are undefined.'
},
{
  id: 'js_datatypes_5',
  topicId: 'js_datatypes',
  question: 'Declare a null variable and check its type (note the quirk).',
  mathSolution: 'typeof null returns "object" (JavaScript bug).',
  codeSolution: 'let empty = null;\nconsole.log(typeof empty);  // object (historical bug)',
  hint: 'null is primitive but typeof returns "object".'
},
{
  id: 'js_datatypes_6',
  topicId: 'js_datatypes',
  question: 'Declare a symbol variable and check its type.',
  mathSolution: 'Symbol creates unique identifier.',
  codeSolution: 'let sym = Symbol("id");\nconsole.log(typeof sym);  // symbol',
  hint: 'Use `Symbol()` to create unique symbols.'
},
{
  id: 'js_datatypes_7',
  topicId: 'js_datatypes',
  question: 'Declare a bigint variable and check its type.',
  mathSolution: 'BigInt for large numbers beyond 2^53-1.',
  codeSolution: 'let bigNumber = 9007199254740991n;\nconsole.log(typeof bigNumber);  // bigint',
  hint: 'Add `n` suffix to create BigInt.'
},
{
  id: 'js_datatypes_8',
  topicId: 'js_datatypes',
  question: 'Create an array and check its type (returns object).',
  mathSolution: 'Arrays are objects in JavaScript.',
  codeSolution: 'let fruits = ["apple", "banana", "orange"];\nconsole.log(typeof fruits);  // object',
  hint: 'Use Array.isArray() to check if something is an array.'
},
{
  id: 'js_datatypes_9',
  topicId: 'js_datatypes',
  question: 'Create an object and check its type.',
  mathSolution: 'Objects are fundamental reference types.',
  codeSolution: 'let person = { name: "John", age: 30 };\nconsole.log(typeof person);  // object',
  hint: 'Objects return "object" type.'
},
{
  id: 'js_datatypes_10',
  topicId: 'js_datatypes',
  question: 'Create a function and check its type (returns function).',
  mathSolution: 'Functions are callable objects.',
  codeSolution: 'function greet() { return "Hello"; }\nconsole.log(typeof greet);  // function',
  hint: 'Functions return "function" type (special object).'
},
{
  id: 'js_datatypes_11',
  topicId: 'js_datatypes',
  question: 'Check type of NaN (Not a Number).',
  mathSolution: 'NaN is of type number despite name.',
  codeSolution: 'let notNumber = NaN;\nconsole.log(typeof notNumber);  // number',
  hint: 'NaN is a special numeric value.'
},
{
  id: 'js_datatypes_12',
  topicId: 'js_datatypes',
  question: 'Check type of Infinity.',
  mathSolution: 'Infinity is a number type.',
  codeSolution: 'let infinite = 1 / 0;\nconsole.log(typeof infinite);  // number\nconsole.log(infinite);  // Infinity',
  hint: 'Infinity represents mathematical infinity.'
},
{
  id: 'js_datatypes_13',
  topicId: 'js_datatypes',
  question: 'Convert string to number using Number() and check type.',
  mathSolution: 'Number() converts string to number.',
  codeSolution: 'let str = "123";\nlet num = Number(str);\nconsole.log(typeof num);  // number\nconsole.log(num);  // 123',
  hint: 'Use Number(), parseInt(), or parseFloat().'
},
{
  id: 'js_datatypes_14',
  topicId: 'js_datatypes',
  question: 'Convert number to string using String() and check type.',
  mathSolution: 'String() converts any type to string.',
  codeSolution: 'let num = 456;\nlet str = String(num);\nconsole.log(typeof str);  // string\nconsole.log(str);  // "456"',
  hint: 'Use String(), toString(), or + "" operator.'
},
{
  id: 'js_datatypes_15',
  topicId: 'js_datatypes',
  question: 'Convert to boolean using Boolean() and check type.',
  mathSolution: 'Boolean() converts to true/false.',
  codeSolution: 'let truthy = Boolean(1);\nlet falsy = Boolean(0);\nconsole.log(typeof truthy);  // boolean\nconsole.log(truthy, falsy);  // true false',
  hint: 'Falsy values: 0, "", null, undefined, NaN, false.'
},
{
  id: 'js_datatypes_16',
  topicId: 'js_datatypes',
  question: 'Check if a variable is an array using Array.isArray().',
  mathSolution: 'Array.isArray() returns true for arrays.',
  codeSolution: 'let arr = [1, 2, 3];\nlet obj = { a: 1 };\nconsole.log(Array.isArray(arr));  // true\nconsole.log(Array.isArray(obj));  // false',
  hint: 'Use Array.isArray() instead of typeof for arrays.'
},
{
  id: 'js_datatypes_17',
  topicId: 'js_datatypes',
  question: 'Check if a value is NaN using isNaN() function.',
  mathSolution: 'isNaN() checks if value is Not-a-Number.',
  codeSolution: 'console.log(isNaN(NaN));  // true\nconsole.log(isNaN("hello"));  // true\nconsole.log(isNaN(123));  // false',
  hint: 'Use isNaN() or Number.isNaN() for strict check.'
},
{
  id: 'js_datatypes_18',
  topicId: 'js_datatypes',
  question: 'Use Number.isNaN() for strict NaN check (recommended).',
  mathSolution: 'Number.isNaN() only true for actual NaN.',
  codeSolution: 'console.log(Number.isNaN(NaN));  // true\nconsole.log(Number.isNaN("hello"));  // false (string not converted)\nconsole.log(isNaN("hello"));  // true',
  hint: 'Number.isNaN() doesn\'t coerce values.'
},
{
  id: 'js_datatypes_19',
  topicId: 'js_datatypes',
  question: 'Check if a number is finite using isFinite().',
  mathSolution: 'isFinite() returns false for Infinity and NaN.',
  codeSolution: 'console.log(isFinite(100));  // true\nconsole.log(isFinite(Infinity));  // false\nconsole.log(isFinite(NaN));  // false',
  hint: 'Use isFinite() to check for valid numbers.'
},
{
  id: 'js_datatypes_20',
  topicId: 'js_datatypes',
  question: 'Demonstrate string concatenation with different types.',
  mathSolution: '+ operator with string causes coercion to string.',
  codeSolution: 'let str = "The answer is " + 42;\nconsole.log(typeof str);  // string\nconsole.log(str);  // The answer is 42',
  hint: 'When string is involved, + becomes concatenation.'
},
{
  id: 'js_datatypes_21',
  topicId: 'js_datatypes',
  question: 'Show type coercion with numbers and strings.',
  mathSolution: 'JavaScript automatically converts types.',
  codeSolution: 'console.log("5" - 3);  // 2 (string to number)\nconsole.log("5" + 3);  // "53" (number to string)\nconsole.log("5" * "2");  // 10 (both to numbers)',
  hint: '- * / convert to numbers, + with string concatenates.'
},
{
  id: 'js_datatypes_22',
  topicId: 'js_datatypes',
  question: 'Check type of Date object.',
  mathSolution: 'Date returns "object" type.',
  codeSolution: 'let today = new Date();\nconsole.log(typeof today);  // object\nconsole.log(today instanceof Date);  // true',
  hint: 'Use instanceof to check specific object types.'
},
{
  id: 'js_datatypes_23',
  topicId: 'js_datatypes',
  question: 'Check type of RegExp object.',
  mathSolution: 'Regular expressions return "object" type.',
  codeSolution: 'let pattern = /ab+c/;\nconsole.log(typeof pattern);  // object\nconsole.log(pattern instanceof RegExp);  // true',
  hint: 'RegExp is another object type.'
},
{
  id: 'js_datatypes_24',
  topicId: 'js_datatypes',
  question: 'Create and check type of Map object.',
  mathSolution: 'Map is an ES6 collection type.',
  codeSolution: 'let myMap = new Map();\nmyMap.set("key", "value");\nconsole.log(typeof myMap);  // object\nconsole.log(myMap instanceof Map);  // true',
  hint: 'Map returns "object" but is an instance of Map.'
},
{
  id: 'js_datatypes_25',
  topicId: 'js_datatypes',
  question: 'Create and check type of Set object.',
  mathSolution: 'Set is an ES6 collection for unique values.',
  codeSolution: 'let mySet = new Set([1, 2, 3]);\nconsole.log(typeof mySet);  // object\nconsole.log(mySet instanceof Set);  // true',
  hint: 'Set stores unique values of any type.'
},
{
  id: 'js_datatypes_26',
  topicId: 'js_datatypes',
  question: 'Use typeof on undeclared variable (safe).',
  mathSolution: 'typeof undeclared returns "undefined" (no error).',
  codeSolution: 'console.log(typeof nonExistentVariable);  // undefined (no error)',
  hint: 'typeof is safe to use on undeclared variables.'
},
{
  id: 'js_datatypes_27',
  topicId: 'js_datatypes',
  question: 'Demonstrate dynamic typing by changing variable type.',
  mathSolution: 'JavaScript variables can hold any type.',
  codeSolution: 'let dynamic = "Hello";\nconsole.log(typeof dynamic);  // string\ndynamic = 42;\nconsole.log(typeof dynamic);  // number\ndynamic = true;\nconsole.log(typeof dynamic);  // boolean',
  hint: 'Variables can change type at runtime.'
},
{
  id: 'js_datatypes_28',
  topicId: 'js_datatypes',
  question: 'Check type of empty array literal.',
  mathSolution: 'Empty array also returns "object".',
  codeSolution: 'let emptyArr = [];\nconsole.log(typeof emptyArr);  // object\nconsole.log(Array.isArray(emptyArr));  // true',
  hint: 'Always use Array.isArray() for array detection.'
},
{
  id: 'js_datatypes_29',
  topicId: 'js_datatypes',
  question: 'Check type of empty object literal.',
  mathSolution: 'Empty object returns "object".',
  codeSolution: 'let emptyObj = {};\nconsole.log(typeof emptyObj);  // object\nconsole.log(emptyObj.constructor === Object);  // true',
  hint: 'Objects have constructor property.'
},
{
  id: 'js_datatypes_30',
  topicId: 'js_datatypes',
  question: 'Use Object.prototype.toString.call() for precise type checking.',
  mathSolution: 'toString() method gives exact internal type.',
  codeSolution: 'console.log(Object.prototype.toString.call([]));  // [object Array]\nconsole.log(Object.prototype.toString.call({}));  // [object Object]\nconsole.log(Object.prototype.toString.call(null));  // [object Null]',
  hint: 'Best way to get accurate type in JavaScript.'
},
{
  id: 'js_datatypes_31',
  topicId: 'js_datatypes',
  question: 'Check if a value is an integer using Number.isInteger().',
  mathSolution: 'Number.isInteger() checks for whole numbers.',
  codeSolution: 'console.log(Number.isInteger(42));  // true\nconsole.log(Number.isInteger(42.5));  // false\nconsole.log(Number.isInteger("42"));  // false (string)',
  hint: 'Use Number.isInteger() for integer check.'
},
{
  id: 'js_datatypes_32',
  topicId: 'js_datatypes',
  question: 'Check if a value is safe integer using Number.isSafeInteger().',
  mathSolution: 'Safe integers between -(2^53-1) and 2^53-1.',
  codeSolution: 'console.log(Number.isSafeInteger(42));  // true\nconsole.log(Number.isSafeInteger(9007199254740991));  // true\nconsole.log(Number.isSafeInteger(9007199254740992));  // false',
  hint: 'Safe integers can be represented exactly.'
},
{
  id: 'js_datatypes_33',
  topicId: 'js_datatypes',
  question: 'Demonstrate truthy and falsy values with Boolean conversion.',
  mathSolution: 'Falsy: false, 0, "", null, undefined, NaN.',
  codeSolution: 'console.log(Boolean(0));  // false\nconsole.log(Boolean(""));  // false\nconsole.log(Boolean(null));  // false\nconsole.log(Boolean(undefined));  // false\nconsole.log(Boolean(NaN));  // false\nconsole.log(Boolean("hello"));  // true',
  hint: 'Only 6 falsy values in JavaScript.'
},
{
  id: 'js_datatypes_34',
  topicId: 'js_datatypes',
  question: 'Check type of document.all (historical quirk).',
  mathSolution: 'document.all returns "undefined" for type.',
  codeSolution: '// console.log(typeof document.all);  // "undefined" (in browsers)\n// This is a historical anomaly.',
  hint: 'document.all is falsy but defined.'
},
{
  id: 'js_datatypes_35',
  topicId: 'js_datatypes',
  question: 'Demonstrate automatic semicolon insertion with typeof.',
  mathSolution: 'typeof returns a string, no issues with ASI.',
  codeSolution: 'let val = 10;\nlet type = typeof\nval;\nconsole.log(type);  // "number" (ASI adds semicolon after typeof)',
  hint: 'Be careful with line breaks after typeof.'
},
{
  id: 'js_datatypes_36',
  topicId: 'js_datatypes',
  question: 'Check type of Math object.',
  mathSolution: 'Math is a built-in object.',
  codeSolution: 'console.log(typeof Math);  // object\nconsole.log(Math.PI);  // 3.141592653589793',
  hint: 'Math is not a constructor, just an object.'
},
{
  id: 'js_datatypes_37',
  topicId: 'js_datatypes',
  question: 'Check type of JSON object.',
  mathSolution: 'JSON is built-in object for parsing.',
  codeSolution: 'console.log(typeof JSON);  // object\nconsole.log(typeof JSON.parse);  // function',
  hint: 'JSON has static methods like parse() and stringify().'
},
{
  id: 'js_datatypes_38',
  topicId: 'js_datatypes',
  question: 'Create a primitive string vs String object.',
  mathSolution: 'Primitive string vs object wrapper.',
  codeSolution: 'let primitive = "hello";\nlet object = new String("hello");\nconsole.log(typeof primitive);  // string\nconsole.log(typeof object);  // object',
  hint: 'Avoid using String/Number/Boolean as constructors.'
},
{
  id: 'js_datatypes_39',
  topicId: 'js_datatypes',
  question: 'Check if two variables are same type using typeof comparison.',
  mathSolution: 'Compare typeof results.',
  codeSolution: 'let a = 42;\nlet b = 100;\nlet c = "hello";\nconsole.log(typeof a === typeof b);  // true\nconsole.log(typeof a === typeof c);  // false',
  hint: 'typeof returns strings that can be compared.'
},
{
  id: 'js_datatypes_40',
  topicId: 'js_datatypes',
  question: 'Demonstrate type coercion in if statements.',
  mathSolution: 'If statement coerces expression to boolean.',
  codeSolution: 'if ("hello") {\n    console.log("Truthy!");  // This runs\n}\nif (0) {\n    console.log("Falsy!");  // This doesn\'t run\n}',
  hint: 'Any value in condition is coerced to boolean.'
},
{
  id: 'js_datatypes_41',
  topicId: 'js_datatypes',
  question: 'Use typeof with parentheses (typeof is operator, not function).',
  mathSolution: 'typeof can be used with or without parentheses.',
  codeSolution: 'let x = 10;\nconsole.log(typeof x);  // "number"\nconsole.log(typeof(x));  // "number" (parentheses optional)',
  hint: 'typeof is an operator, parentheses are not required.'
},
{
  id: 'js_datatypes_42',
  topicId: 'js_datatypes',
  question: 'Check type of arrow function.',
  mathSolution: 'Arrow functions also return "function".',
  codeSolution: 'const arrowFunc = () => "Hello";\nconsole.log(typeof arrowFunc);  // function',
  hint: 'All functions (arrow, regular, methods) return "function".'
},
{
  id: 'js_datatypes_43',
  topicId: 'js_datatypes',
  question: 'Check type of class (ES6).',
  mathSolution: 'Classes are actually functions in JavaScript.',
  codeSolution: 'class Person {}\nconsole.log(typeof Person);  // function',
  hint: 'Class syntax is syntactic sugar over constructor functions.'
},
{
  id: 'js_datatypes_44',
  topicId: 'js_datatypes',
  question: 'Use instanceof to check if object is specific type.',
  mathSolution: 'instanceof checks prototype chain.',
  codeSolution: 'let arr = [1, 2, 3];\nlet date = new Date();\nconsole.log(arr instanceof Array);  // true\nconsole.log(date instanceof Date);  // true\nconsole.log(arr instanceof Object);  // true (all objects)',
  hint: 'instanceof works with constructors and inheritance.'
},
{
  id: 'js_datatypes_45',
  topicId: 'js_datatypes',
  question: 'Check constructor property of primitive vs object.',
  mathSolution: 'Primitives have temporary object wrappers.',
  codeSolution: 'let num = 42;\nlet numObj = new Number(42);\nconsole.log(num.constructor);  // Number()\nconsole.log(numObj.constructor);  // Number()\nconsole.log(num instanceof Number);  // false\nconsole.log(numObj instanceof Number);  // true',
  hint: 'Primitives aren\'t instances of their wrapper objects.'
},
{
  id: 'js_datatypes_46',
  topicId: 'js_datatypes',
  question: 'Demonstrate typeof with + operator precedence.',
  mathSolution: 'typeof has higher precedence than +.',
  codeSolution: 'let value = 10;\nconsole.log(typeof value + " is number");  // "number is number"\n// typeof runs first, then concatenation',
  hint: 'typeof has operator precedence, use parentheses for complex.'
},
{
  id: 'js_datatypes_47',
  topicId: 'js_datatypes',
  question: 'Create Symbol with description and check type.',
  mathSolution: 'Symbols have optional description.',
  codeSolution: 'let sym1 = Symbol("debug");\nlet sym2 = Symbol("debug");\nconsole.log(typeof sym1);  // symbol\nconsole.log(sym1 === sym2);  // false (unique)',
  hint: 'Symbols are always unique even with same description.'
},
{
  id: 'js_datatypes_48',
  topicId: 'js_datatypes',
  question: 'Use BigInt arithmetic and check type.',
  mathSolution: 'BigInt operates with BigInt only.',
  codeSolution: 'let big1 = 10n;\nlet big2 = 20n;\nlet result = big1 + big2;\nconsole.log(typeof result);  // bigint\nconsole.log(result);  // 30n',
  hint: 'Cannot mix BigInt with regular numbers without conversion.'
},
{
  id: 'js_datatypes_49',
  topicId: 'js_datatypes',
  question: 'Check type of Promise object.',
  mathSolution: 'Promise returns "object" type.',
  codeSolution: 'let myPromise = Promise.resolve(42);\nconsole.log(typeof myPromise);  // object\nconsole.log(myPromise instanceof Promise);  // true',
  hint: 'Promises are objects for async operations.'
},
{
  id: 'js_datatypes_50',
  topicId: 'js_datatypes',
  question: 'Comprehensive type checking function using multiple methods.',
  mathSolution: 'Combine typeof, instanceof, and toString for accurate checks.',
  codeSolution: 'function getType(value) {\n    if (value === null) return "null";\n    if (value === undefined) return "undefined";\n    if (Array.isArray(value)) return "array";\n    return typeof value;\n}\nconsole.log(getType(null));  // "null"\nconsole.log(getType([]));  // "array"\nconsole.log(getType({}));  // "object"\nconsole.log(getType(42));  // "number"\nconsole.log(getType("hi"));  // "string"',
  hint: 'Combine techniques for robust type checking.'
}
);