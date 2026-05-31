QuizData.questions.push(
{
  id: 'js_objects_1',
  topicId: 'js_objects',
  question: 'Create an object using object literal syntax with name and age properties.',
  mathSolution: 'Use curly braces with key-value pairs.',
  codeSolution: 'const person = {\n    name: "John",\n    age: 30\n};\nconsole.log(person);  // { name: "John", age: 30 }',
  hint: 'Use `{ key: value }` syntax.'
},
{
  id: 'js_objects_2',
  topicId: 'js_objects',
  question: 'Create an object using Object() constructor.',
  mathSolution: 'Use new Object() to create empty object then add properties.',
  codeSolution: 'const person = new Object();\nperson.name = "Alice";\nperson.age = 25;\nconsole.log(person);  // { name: "Alice", age: 25 }',
  hint: '`new Object()` creates empty object.'
},
{
  id: 'js_objects_3',
  topicId: 'js_objects',
  question: 'Access object properties using dot notation.',
  mathSolution: 'Use object.propertyName to access value.',
  codeSolution: 'const car = { brand: "Toyota", year: 2020 };\nconsole.log(car.brand);  // Toyota\nconsole.log(car.year);   // 2020',
  hint: 'Use `.` followed by property name.'
},
{
  id: 'js_objects_4',
  topicId: 'js_objects',
  question: 'Access object properties using bracket notation.',
  mathSolution: 'Use object["propertyName"] with string key.',
  codeSolution: 'const car = { brand: "Honda", year: 2021 };\nconsole.log(car["brand"]);  // Honda\nconsole.log(car["year"]);   // 2021',
  hint: 'Use `["property"]` with quotes.'
},
{
  id: 'js_objects_5',
  topicId: 'js_objects',
  question: 'Add new property to existing object using dot notation.',
  mathSolution: 'Assign value to new property name.',
  codeSolution: 'const person = { name: "John" };\nperson.age = 30;\nperson.city = "New York";\nconsole.log(person);  // { name: "John", age: 30, city: "New York" }',
  hint: 'Simply assign to new property name.'
},
{
  id: 'js_objects_6',
  topicId: 'js_objects',
  question: 'Update existing property value in object.',
  mathSolution: 'Assign new value to existing property.',
  codeSolution: 'const person = { name: "John", age: 25 };\nperson.age = 30;\nconsole.log(person);  // { name: "John", age: 30 }',
  hint: 'Assign new value to property.'
},
{
  id: 'js_objects_7',
  topicId: 'js_objects',
  question: 'Delete property from object using delete operator.',
  mathSolution: 'delete object.property removes property.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\ndelete person.age;\nconsole.log(person);  // { name: "John", city: "NYC" }',
  hint: 'Use `delete object.property`.'
},
{
  id: 'js_objects_8',
  topicId: 'js_objects',
  question: 'Check if property exists using in operator.',
  mathSolution: '"property" in object returns boolean.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconsole.log("name" in person);  // true\nconsole.log("city" in person);  // false',
  hint: 'Use `"property" in object`.'
},
{
  id: 'js_objects_9',
  topicId: 'js_objects',
  question: 'Check if property exists using hasOwnProperty() method.',
  mathSolution: 'object.hasOwnProperty("property") checks own properties.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconsole.log(person.hasOwnProperty("name"));  // true\nconsole.log(person.hasOwnProperty("toString"));  // false (inherited)',
  hint: '`hasOwnProperty()` ignores inherited properties.'
},
{
  id: 'js_objects_10',
  topicId: 'js_objects',
  question: 'Get all keys of object using Object.keys() method.',
  mathSolution: 'Object.keys() returns array of property names.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst keys = Object.keys(person);\nconsole.log(keys);  // ["name", "age", "city"]',
  hint: '`Object.keys()` returns array of keys.'
},
{
  id: 'js_objects_11',
  topicId: 'js_objects',
  question: 'Get all values of object using Object.values() method.',
  mathSolution: 'Object.values() returns array of property values.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst values = Object.values(person);\nconsole.log(values);  // ["John", 30, "NYC"]',
  hint: '`Object.values()` returns array of values.'
},
{
  id: 'js_objects_12',
  topicId: 'js_objects',
  question: 'Get key-value pairs using Object.entries() method.',
  mathSolution: 'Object.entries() returns array of [key, value] pairs.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst entries = Object.entries(person);\nconsole.log(entries);  // [["name", "John"], ["age", 30]]',
  hint: '`Object.entries()` returns 2D array of pairs.'
},
{
  id: 'js_objects_13',
  topicId: 'js_objects',
  question: 'Iterate over object properties using for...in loop.',
  mathSolution: 'for...in iterates over enumerable properties.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}',
  hint: 'Use `for (let key in object)`.'
},
{
  id: 'js_objects_14',
  topicId: 'js_objects',
  question: 'Iterate over object using Object.keys() with forEach().',
  mathSolution: 'Get keys array then iterate.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nObject.keys(person).forEach(key => {\n    console.log(`${key}: ${person[key]}`);\n});',
  hint: 'Combine `Object.keys()` and `forEach()`.'
},
{
  id: 'js_objects_15',
  topicId: 'js_objects',
  question: 'Iterate using Object.entries() with for...of and destructuring.',
  mathSolution: 'Destructure [key, value] pairs directly.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nfor (let [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Use destructuring in for...of loop.'
},
{
  id: 'js_objects_16',
  topicId: 'js_objects',
  question: 'Compute property names dynamically using computed property names.',
  mathSolution: 'Use [expression] as property name in object literal.',
  codeSolution: 'const propName = "dynamicKey";\nconst obj = {\n    [propName]: "dynamic value",\n    [`computed_${Date.now()}`]: "timestamped"\n};\nconsole.log(obj);',
  hint: 'Use `[expression]` for dynamic keys.'
},
{
  id: 'js_objects_17',
  topicId: 'js_objects',
  question: 'Use property value shorthand (same name as variable).',
  mathSolution: 'If variable name matches property name, can use shorthand.',
  codeSolution: 'const name = "Alice";\nconst age = 25;\nconst person = { name, age };\nconsole.log(person);  // { name: "Alice", age: 25 }',
  hint: 'Omit value when variable and property name match.'
},
{
  id: 'js_objects_18',
  topicId: 'js_objects',
  question: 'Copy object using spread operator (shallow copy).',
  mathSolution: '{...original} creates shallow copy.',
  codeSolution: 'const original = { name: "John", age: 30 };\nconst copy = { ...original };\ncopy.age = 31;\nconsole.log(original.age);  // 30 (unchanged)\nconsole.log(copy.age);      // 31',
  hint: 'Use `{...obj}` for shallow copy.'
},
{
  id: 'js_objects_19',
  topicId: 'js_objects',
  question: 'Merge two objects using spread operator.',
  mathSolution: '{...obj1, ...obj2} merges properties (later overwrites earlier).',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 3, c: 4 }',
  hint: 'Later properties override earlier ones.'
},
{
  id: 'js_objects_20',
  topicId: 'js_objects',
  question: 'Merge objects using Object.assign() method.',
  mathSolution: 'Object.assign(target, ...sources) merges objects.',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst merged = Object.assign({}, obj1, obj2);\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }',
  hint: 'Use `Object.assign(target, source)`.'
},
{
  id: 'js_objects_21',
  topicId: 'js_objects',
  question: 'Add method to object (function as property).',
  mathSolution: 'Assign function to property name.',
  codeSolution: 'const calculator = {\n    add: function(a, b) {\n        return a + b;\n    }\n};\nconsole.log(calculator.add(5, 3));  // 8',
  hint: 'Methods are functions stored as properties.'
},
{
  id: 'js_objects_22',
  topicId: 'js_objects',
  question: 'Use method shorthand syntax in object literal.',
  mathSolution: 'Omit function keyword and colon.',
  codeSolution: 'const calculator = {\n    add(a, b) {\n        return a + b;\n    },\n    multiply(a, b) {\n        return a * b;\n    }\n};\nconsole.log(calculator.add(5, 3));      // 8\nconsole.log(calculator.multiply(5, 3)); // 15',
  hint: 'Method shorthand: `methodName() {}`.'
},
{
  id: 'js_objects_23',
  topicId: 'js_objects',
  question: 'Use arrow function as object method (caution with this).',
  mathSolution: 'Arrow functions don\'t have their own this.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    regularMethod() {\n        console.log(this.name);  // "My Object"\n    },\n    arrowMethod: () => {\n        console.log(this.name);  // undefined (lexical this)\n    }\n};\nobj.regularMethod();\nobj.arrowMethod();',
  hint: 'Arrow functions inherit `this` from outer scope.'
},
{
  id: 'js_objects_24',
  topicId: 'js_objects',
  question: 'Access object method that uses "this" to access other properties.',
  mathSolution: 'Use this.propertyName inside method.',
  codeSolution: 'const person = {\n    firstName: "John",\n    lastName: "Doe",\n    fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    }\n};\nconsole.log(person.fullName());  // John Doe',
  hint: 'Use `this` to access object\'s own properties.'
},
{
  id: 'js_objects_25',
  topicId: 'js_objects',
  question: 'Freeze object using Object.freeze() (cannot modify properties).',
  mathSolution: 'Object.freeze() makes object immutable.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.freeze(obj);\nobj.age = 31;  // Fails silently (or error in strict mode)\nconsole.log(obj.age);  // 30 (unchanged)',
  hint: '`Object.freeze()` prevents modifications.'
},
{
  id: 'js_objects_26',
  topicId: 'js_objects',
  question: 'Seal object using Object.seal() (can modify existing, cannot add/delete).',
  mathSolution: 'Object.seal() prevents adding/deleting properties.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.seal(obj);\nobj.age = 31;     // OK (modify existing)\nobj.city = "NYC"; // Fails (cannot add)\ndelete obj.name;  // Fails (cannot delete)\nconsole.log(obj); // { name: "John", age: 31 }',
  hint: '`Object.seal()` allows modification but not addition/deletion.'
},
{
  id: 'js_objects_27',
  topicId: 'js_objects',
  question: 'Prevent extension using Object.preventExtensions().',
  mathSolution: 'Cannot add new properties, but can modify/delete existing.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.preventExtensions(obj);\nobj.age = 31;     // OK (modify)\nobj.city = "NYC"; // Fails (cannot add)\ndelete obj.name;  // OK (can delete)\nconsole.log(obj); // { age: 31 }',
  hint: '`preventExtensions()` stops new properties only.'
},
{
  id: 'js_objects_28',
  topicId: 'js_objects',
  question: 'Check if object is frozen using Object.isFrozen().',
  mathSolution: 'Returns true if object is frozen.',
  codeSolution: 'const obj1 = { name: "John" };\nconst obj2 = { name: "Jane" };\nObject.freeze(obj2);\nconsole.log(Object.isFrozen(obj1));  // false\nconsole.log(Object.isFrozen(obj2));  // true',
  hint: '`Object.isFrozen()` checks frozen status.'
},
{
  id: 'js_objects_29',
  topicId: 'js_objects',
  question: 'Define property with custom descriptor using Object.defineProperty().',
  mathSolution: 'Define property with configurable, enumerable, writable attributes.',
  codeSolution: 'const obj = {};\nObject.defineProperty(obj, "hidden", {\n    value: "secret",\n    enumerable: false,  // won\'t show in Object.keys\n    writable: false,    // read-only\n    configurable: false\n});\nconsole.log(obj.hidden);  // secret\nconsole.log(Object.keys(obj));  // [] (hidden not enumerated)',
  hint: 'Property descriptors control property behavior.'
},
{
  id: 'js_objects_30',
  topicId: 'js_objects',
  question: 'Define multiple properties using Object.defineProperties().',
  mathSolution: 'Define multiple properties with descriptors at once.',
  codeSolution: 'const obj = {};\nObject.defineProperties(obj, {\n    name: { value: "John", writable: true },\n    age: { value: 30, writable: false },\n    city: { value: "NYC", enumerable: true }\n});\nconsole.log(obj);  // { city: "NYC", name: "John", age: 30 }',
  hint: '`defineProperties()` defines multiple properties.'
},
{
  id: 'js_objects_31',
  topicId: 'js_objects',
  question: 'Get property descriptor using Object.getOwnPropertyDescriptor().',
  mathSolution: 'Returns descriptor object for specified property.',
  codeSolution: 'const obj = { name: "John" };\nconst descriptor = Object.getOwnPropertyDescriptor(obj, "name");\nconsole.log(descriptor);\n// { value: "John", writable: true, enumerable: true, configurable: true }',
  hint: 'Use to inspect property attributes.'
},
{
  id: 'js_objects_32',
  topicId: 'js_objects',
  question: 'Create object with null prototype (no inheritance).',
  mathSolution: 'Object.create(null) creates object without prototype.',
  codeSolution: 'const cleanObj = Object.create(null);\ncleanObj.name = "John";\nconsole.log(cleanObj.name);  // John\nconsole.log(cleanObj.toString);  // undefined (no prototype)',
  hint: '`Object.create(null)` removes prototype chain.'
},
{
  id: 'js_objects_33',
  topicId: 'js_objects',
  question: 'Create object with specified prototype using Object.create().',
  mathSolution: 'Object.create(proto) creates object inheriting from proto.',
  codeSolution: 'const parent = { greet() { return "Hello"; } };\nconst child = Object.create(parent);\nchild.name = "Alice";\nconsole.log(child.greet());  // Hello (inherited)\nconsole.log(child.name);     // Alice (own)',
  hint: '`Object.create()` sets prototype of new object.'
},
{
  id: 'js_objects_34',
  topicId: 'js_objects',
  question: 'Get prototype of object using Object.getPrototypeOf().',
  mathSolution: 'Returns prototype (internal [[Prototype]]).',
  codeSolution: 'const parent = { greet() { return "Hi"; } };\nconst child = Object.create(parent);\nconst proto = Object.getPrototypeOf(child);\nconsole.log(proto === parent);  // true\nconsole.log(proto.greet());     // Hi',
  hint: '`getPrototypeOf()` returns prototype object.'
},
{
  id: 'js_objects_35',
  topicId: 'js_objects',
  question: 'Set prototype of object using Object.setPrototypeOf().',
  mathSolution: 'Changes prototype of existing object.',
  codeSolution: 'const obj = { name: "John" };\nconst proto = { greet() { return "Hello"; } };\nObject.setPrototypeOf(obj, proto);\nconsole.log(obj.greet());  // Hello\nconsole.log(obj.name);     // John',
  hint: '`setPrototypeOf()` changes object\'s prototype.'
},
{
  id: 'js_objects_36',
  topicId: 'js_objects',
  question: 'Check if object has own property (not inherited).',
  mathSolution: 'Use hasOwnProperty() to check own properties.',
  codeSolution: 'const parent = { inherited: "from parent" };\nconst child = Object.create(parent);\nchild.own = "own property";\nconsole.log(child.hasOwnProperty("own"));        // true\nconsole.log(child.hasOwnProperty("inherited"));  // false',
  hint: '`hasOwnProperty()` ignores inherited properties.'
},
{
  id: 'js_objects_37',
  topicId: 'js_objects',
  question: 'Get all own property names including non-enumerable using getOwnPropertyNames().',
  mathSolution: 'Returns array of all own property names (including non-enumerable).',
  codeSolution: 'const obj = {};\nObject.defineProperty(obj, "hidden", { value: "secret", enumerable: false });\nobj.visible = "public";\nconsole.log(Object.keys(obj));                    // ["visible"]\nconsole.log(Object.getOwnPropertyNames(obj));     // ["hidden", "visible"]',
  hint: '`getOwnPropertyNames()` includes non-enumerable properties.'
},
{
  id: 'js_objects_38',
  topicId: 'js_objects',
  question: 'Get own property symbols using Object.getOwnPropertySymbols().',
  mathSolution: 'Returns array of symbol properties.',
  codeSolution: 'const sym1 = Symbol("id");\nconst sym2 = Symbol("key");\nconst obj = {\n    [sym1]: "symbol value 1",\n    [sym2]: "symbol value 2",\n    regular: "normal"\n};\nconst symbols = Object.getOwnPropertySymbols(obj);\nconsole.log(symbols);  // [Symbol(id), Symbol(key)]\nconsole.log(obj[symbols[0]]);  // symbol value 1',
  hint: 'Symbol properties are not included in Object.keys().'
},
{
  id: 'js_objects_39',
  topicId: 'js_objects',
  question: 'Use destructuring to extract properties from object.',
  mathSolution: 'Use {prop1, prop2} = object syntax.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst { name, age } = person;\nconsole.log(name);  // John\nconsole.log(age);   // 30',
  hint: 'Use `{ property1, property2 } = object`.'
},
{
  id: 'js_objects_40',
  topicId: 'js_objects',
  question: 'Use destructuring with renaming properties.',
  mathSolution: '{oldName: newName} syntax renames while destructuring.',
  codeSolution: 'const person = { firstName: "John", lastName: "Doe" };\nconst { firstName: fName, lastName: lName } = person;\nconsole.log(fName);  // John\nconsole.log(lName);  // Doe',
  hint: 'Use `{ oldName: newName }` to rename variables.'
},
{
  id: 'js_objects_41',
  topicId: 'js_objects',
  question: 'Use destructuring with default values.',
  mathSolution: 'Provide default value if property is undefined.',
  codeSolution: 'const person = { name: "John" };\nconst { name, age = 25, city = "Unknown" } = person;\nconsole.log(name);  // John\nconsole.log(age);   // 25 (default used)\nconsole.log(city);  // Unknown (default used)',
  hint: 'Use `{ prop = defaultValue }` syntax.'
},
{
  id: 'js_objects_42',
  topicId: 'js_objects',
  question: 'Use nested destructuring for nested objects.',
  mathSolution: 'Match structure of nested object.',
  codeSolution: 'const user = {\n    id: 1,\n    profile: {\n        name: "Alice",\n        address: {\n            city: "Paris",\n            zip: "75001"\n        }\n    }\n};\nconst { profile: { name, address: { city } } } = user;\nconsole.log(name);  // Alice\nconsole.log(city);  // Paris',
  hint: 'Match nested braces to object structure.'
},
{
  id: 'js_objects_43',
  topicId: 'js_objects',
  question: 'Use destructuring in function parameters.',
  mathSolution: 'Destructure object directly in parameter list.',
  codeSolution: 'function printPerson({ name, age, city = "Unknown" }) {\n    console.log(`${name} is ${age} from ${city}`);\n}\nconst person = { name: "John", age: 30 };\nprintPerson(person);  // John is 30 from Unknown',
  hint: 'Destructure parameters directly in function definition.'
},
{
  id: 'js_objects_44',
  topicId: 'js_objects',
  question: 'Convert object to JSON string using JSON.stringify().',
  mathSolution: 'JSON.stringify() converts object to JSON string.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"name":"John","age":30,"city":"NYC"}',
  hint: 'Use `JSON.stringify(obj)` to serialize.'
},
{
  id: 'js_objects_45',
  topicId: 'js_objects',
  question: 'Parse JSON string to object using JSON.parse().',
  mathSolution: 'JSON.parse() converts JSON string to object.',
  codeSolution: 'const jsonString = \'{"name":"John","age":30,"city":"NYC"}\';\nconst person = JSON.parse(jsonString);\nconsole.log(person.name);  // John\nconsole.log(person.age);   // 30',
  hint: 'Use `JSON.parse(jsonString)` to deserialize.'
},
{
  id: 'js_objects_46',
  topicId: 'js_objects',
  question: 'Deep clone object using JSON methods (limitations).',
  mathSolution: 'JSON.parse(JSON.stringify(obj)) creates deep copy.',
  codeSolution: 'const original = { name: "John", address: { city: "NYC" } };\nconst deepCopy = JSON.parse(JSON.stringify(original));\ndeepCopy.address.city = "Boston";\nconsole.log(original.address.city);  // NYC (unchanged)\nconsole.log(deepCopy.address.city);   // Boston',
  hint: 'Works but loses functions, undefined, symbols, dates.'
},
{
  id: 'js_objects_47',
  topicId: 'js_objects',
  question: 'Check if two objects are equal (shallow comparison).',
  mathSolution: 'Compare references or properties manually.',
  codeSolution: 'function shallowEqual(obj1, obj2) {\n    const keys1 = Object.keys(obj1);\n    const keys2 = Object.keys(obj2);\n    if (keys1.length !== keys2.length) return false;\n    return keys1.every(key => obj1[key] === obj2[key]);\n}\nconst objA = { a: 1, b: 2 };\nconst objB = { a: 1, b: 2 };\nconst objC = { a: 1, b: 3 };\nconsole.log(shallowEqual(objA, objB));  // true\nconsole.log(shallowEqual(objA, objC));  // false',
  hint: 'Objects are compared by reference, not values.'
},
{
  id: 'js_objects_48',
  topicId: 'js_objects',
  question: 'Create getter and setter using object literal syntax.',
  mathSolution: 'Use get and set keywords for computed properties.',
  codeSolution: 'const person = {\n    firstName: "John",\n    lastName: "Doe",\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    },\n    set fullName(name) {\n        [this.firstName, this.lastName] = name.split(" ");\n    }\n};\nconsole.log(person.fullName);  // John Doe\nperson.fullName = "Jane Smith";\nconsole.log(person.firstName);  // Jane\nconsole.log(person.lastName);   // Smith',
  hint: 'Use `get` and `set` keywords for computed properties.'
},
{
  id: 'js_objects_49',
  topicId: 'js_objects',
  question: 'Count number of own properties in object.',
  mathSolution: 'Use Object.keys().length to count enumerable properties.',
  codeSolution: 'const obj = { a: 1, b: 2, c: 3, d: 4 };\nconst count = Object.keys(obj).length;\nconsole.log(count);  // 4\n\n// Including non-enumerable\nconst allCount = Object.getOwnPropertyNames(obj).length;\nconsole.log(allCount);  // 4',
  hint: '`Object.keys(obj).length` counts enumerable properties.'
},
{
  id: 'js_objects_50',
  topicId: 'js_objects',
  question: 'Convert object to Map for better key flexibility.',
  mathSolution: 'Use Object.entries() to convert to Map.',
  codeSolution: 'const obj = { name: "John", age: 30, city: "NYC" };\nconst map = new Map(Object.entries(obj));\nconsole.log(map.get("name"));  // John\nconsole.log(map.get("age"));   // 30\n\n// Convert back to object\nconst backToObj = Object.fromEntries(map);\nconsole.log(backToObj);  // { name: "John", age: 30, city: "NYC" }',
  hint: '`Object.fromEntries()` converts Map/entries back to object.'
}
);