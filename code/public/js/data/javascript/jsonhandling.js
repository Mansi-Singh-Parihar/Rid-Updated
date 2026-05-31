QuizData.questions.push(
{
  id: 'js_json_1',
  topicId: 'js_json',
  question: 'Convert JavaScript object to JSON string using JSON.stringify().',
  mathSolution: 'JSON.stringify() serializes object to JSON string.',
  codeSolution: 'const person = { name: "John", age: 30, city: "New York" };\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"name":"John","age":30,"city":"New York"}',
  hint: 'Use JSON.stringify() to convert object to string.'
},
{
  id: 'js_json_2',
  topicId: 'js_json',
  question: 'Convert JSON string back to JavaScript object using JSON.parse().',
  mathSolution: 'JSON.parse() deserializes JSON string to object.',
  codeSolution: 'const jsonString = \'{"name":"John","age":30,"city":"New York"}\';\nconst person = JSON.parse(jsonString);\nconsole.log(person.name);  // John\nconsole.log(person.age);   // 30',
  hint: 'Use JSON.parse() to convert JSON string to object.'
},
{
  id: 'js_json_3',
  topicId: 'js_json',
  question: 'Pretty print JSON with indentation using JSON.stringify() spacing parameter.',
  mathSolution: 'Add spacing parameter for formatted output.',
  codeSolution: 'const person = { name: "John", age: 30, address: { city: "NYC", zip: 10001 } };\nconst prettyJson = JSON.stringify(person, null, 2);\nconsole.log(prettyJson);\n// {\n//   "name": "John",\n//   "age": 30,\n//   "address": {\n//     "city": "NYC",\n//     "zip": 10001\n//   }\n// }',
  hint: 'JSON.stringify(obj, null, 2) formats with 2 spaces.'
},
{
  id: 'js_json_4',
  topicId: 'js_json',
  question: 'Use replacer function in JSON.stringify() to filter properties.',
  mathSolution: 'Replacer function controls which properties are included.',
  codeSolution: 'const user = { id: 1, name: "John", password: "secret", email: "john@example.com" };\nconst safeJson = JSON.stringify(user, (key, value) => {\n    if (key === "password") return undefined;\n    return value;\n});\nconsole.log(safeJson);  // {"id":1,"name":"John","email":"john@example.com"}',
  hint: 'Return undefined from replacer to omit property.'
},
{
  id: 'js_json_5',
  topicId: 'js_json',
  question: 'Use replacer array in JSON.stringify() to whitelist properties.',
  mathSolution: 'Replacer array specifies which properties to include.',
  codeSolution: 'const user = { id: 1, name: "John", age: 30, email: "john@example.com" };\nconst filteredJson = JSON.stringify(user, ["id", "name"]);\nconsole.log(filteredJson);  // {"id":1,"name":"John"}',
  hint: 'Pass array of property names as replacer to whitelist.'
},
{
  id: 'js_json_6',
  topicId: 'js_json',
  question: 'Parse JSON with reviver function to transform values.',
  mathSolution: 'Reviver function can modify parsed values.',
  codeSolution: 'const jsonString = \'{"name":"John","birthDate":"1990-01-15T00:00:00.000Z"}\';\nconst data = JSON.parse(jsonString, (key, value) => {\n    if (key === "birthDate") return new Date(value);\n    return value;\n});\nconsole.log(data.birthDate instanceof Date);  // true\nconsole.log(data.birthDate.getFullYear());    // 1990',
  hint: 'Use reviver to convert date strings to Date objects.'
},
{
  id: 'js_json_7',
  topicId: 'js_json',
  question: 'Handle circular reference error in JSON.stringify().',
  mathSolution: 'Circular references cause TypeError, need custom replacer.',
  codeSolution: 'const obj = { name: "John" };\nobj.self = obj;  // Circular reference\n\n// This would throw: JSON.stringify(obj);\n\n// Solution: Custom replacer to handle circular references\nfunction circularReplacer() {\n    const seen = new WeakSet();\n    return (key, value) => {\n        if (typeof value === "object" && value !== null) {\n            if (seen.has(value)) return "[Circular]";\n            seen.add(value);\n        }\n        return value;\n    };\n}\nconst safeJson = JSON.stringify(obj, circularReplacer());\nconsole.log(safeJson);  // {"name":"John","self":"[Circular]"}',
  hint: 'Track seen objects in WeakSet to detect circular references.'
},
{
  id: 'js_json_8',
  topicId: 'js_json',
  question: 'Handle BigInt serialization in JSON.',
  mathSolution: 'JSON.stringify() throws error with BigInt, need custom replacer.',
  codeSolution: 'const data = { id: 12345678901234567890n, name: "John" };\n// JSON.stringify(data);  // TypeError: Do not know how to serialize a BigInt\n\nconst jsonString = JSON.stringify(data, (key, value) => {\n    if (typeof value === "bigint") {\n        return value.toString();\n    }\n    return value;\n});\nconsole.log(jsonString);  // {"id":"12345678901234567890","name":"John"}',
  hint: 'Convert BigInt to string in replacer function.'
},
{
  id: 'js_json_9',
  topicId: 'js_json',
  question: 'Serialize Date objects to ISO string.',
  mathSolution: 'Date objects become ISO strings in JSON.',
  codeSolution: 'const event = { name: "Meeting", date: new Date("2024-01-15T10:30:00Z") };\nconst jsonString = JSON.stringify(event);\nconsole.log(jsonString);  // {"name":"Meeting","date":"2024-01-15T10:30:00.000Z"}\n\n// Parse back\nconst parsed = JSON.parse(jsonString);\nparsed.date = new Date(parsed.date);  // Convert back to Date\nconsole.log(parsed.date.getHours());  // 10',
  hint: 'Date objects become ISO strings, need conversion on parse.'
},
{
  id: 'js_json_10',
  topicId: 'js_json',
  question: 'Serialize undefined, Symbol, and function values.',
  mathSolution: 'These values are omitted or become null in JSON.',
  codeSolution: 'const data = {\n    name: "John",\n    age: undefined,      // Omitted\n    id: Symbol("id"),    // Omitted\n    greet: function() {}  // Omitted\n};\nconsole.log(JSON.stringify(data));  // {"name":"John"}\n\n// In arrays, they become null\nconst arr = [1, undefined, 2, function() {}, 3];\nconsole.log(JSON.stringify(arr));  // [1,null,2,null,3]',
  hint: 'undefined, Symbol, functions are omitted in objects, become null in arrays.'
},
{
  id: 'js_json_11',
  topicId: 'js_json',
  question: 'Handle JSON parsing errors with try-catch.',
  mathSolution: 'Always wrap JSON.parse in try-catch for invalid JSON.',
  codeSolution: 'function safeJSONParse(jsonString, fallback = null) {\n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        console.error("Invalid JSON:", error.message);\n        return fallback;\n    }\n}\n\nconsole.log(safeJSONParse(\'{"name":"John"}\'));  // {name: "John"}\nconsole.log(safeJSONParse(\'invalid json\'));     // null (with error log)',
  hint: 'Always use try-catch with JSON.parse for user input.'
},
{
  id: 'js_json_12',
  topicId: 'js_json',
  question: 'Serialize Map and Set objects to JSON.',
  mathSolution: 'Map and Set need conversion to array for JSON.',
  codeSolution: 'const map = new Map([["name", "John"], ["age", 30]]);\nconst set = new Set([1, 2, 3, 3, 4]);\n\nconst data = {\n    map: Array.from(map.entries()),\n    set: Array.from(set)\n};\n\nconst jsonString = JSON.stringify(data);\nconsole.log(jsonString);  // {"map":[["name","John"],["age",30]],"set":[1,2,3,4]}\n\n// Parse back\nconst parsed = JSON.parse(jsonString);\nconst recoveredMap = new Map(parsed.map);\nconst recoveredSet = new Set(parsed.set);\nconsole.log(recoveredMap.get("name"));  // John',
  hint: 'Convert Map/Set to arrays before stringifying.'
},
{
  id: 'js_json_13',
  topicId: 'js_json',
  question: 'Use toJSON() method for custom serialization.',
  mathSolution: 'Objects with toJSON() method control their serialization.',
  codeSolution: 'class User {\n    constructor(name, password) {\n        this.name = name;\n        this.password = password;\n    }\n    \n    toJSON() {\n        // Don\'t include password in JSON\n        return {\n            name: this.name,\n            hashed: true\n        };\n    }\n}\n\nconst user = new User("John", "secret123");\nconsole.log(JSON.stringify(user));  // {"name":"John","hashed":true}',
  hint: 'Implement toJSON() method for custom JSON representation.'
},
{
  id: 'js_json_14',
  topicId: 'js_json',
  question: 'Deep clone object using JSON.parse(JSON.stringify()).',
  mathSolution: 'JSON methods create deep copy (with limitations).',
  codeSolution: 'const original = {\n    name: "John",\n    address: {\n        city: "NYC",\n        zip: 10001\n    },\n    hobbies: ["reading", "gaming"]\n};\n\nconst deepCopy = JSON.parse(JSON.stringify(original));\ndeepCopy.address.city = "Boston";\ndeepCopy.hobbies.push("swimming");\n\nconsole.log(original.address.city);  // NYC (unchanged)\nconsole.log(original.hobbies);       // ["reading", "gaming"] (unchanged)',
  hint: 'Use JSON methods for quick deep clone (loses functions, undefined, dates).'
},
{
  id: 'js_json_15',
  topicId: 'js_json',
  question: 'Understand JSON.stringify() limitations for deep cloning.',
  mathSolution: 'JSON methods cannot clone functions, undefined, symbols, or circular refs.',
  codeSolution: 'const original = {\n    name: "John",\n    greet: () => "Hello",  // Function - will be lost\n    age: undefined,         // Undefined - will be lost\n    id: Symbol("id"),       // Symbol - will be lost\n    date: new Date()        // Date - becomes string\n};\n\nconst clone = JSON.parse(JSON.stringify(original));\nconsole.log(clone.greet);  // undefined\nconsole.log(clone.age);    // undefined\nconsole.log(clone.id);     // undefined\nconsole.log(typeof clone.date);  // string (not Date object)',
  hint: 'JSON clone loses functions, undefined, symbols, and converts dates to strings.'
},
{
  id: 'js_json_16',
  topicId: 'js_json',
  question: 'Format JSON for readability with custom spacing.',
  mathSolution: 'Use third parameter for indentation (spaces or string).',
  codeSolution: 'const data = { name: "John", age: 30, address: { city: "NYC" } };\n\n// 4 spaces\nconsole.log(JSON.stringify(data, null, 4));\n\n// Tab character\nconsole.log(JSON.stringify(data, null, "\\t"));\n\n// Custom string\nconsole.log(JSON.stringify(data, null, "--"));',
  hint: 'Third parameter in JSON.stringify() controls formatting.'
},
{
  id: 'js_json_17',
  topicId: 'js_json',
  question: 'Validate if string is valid JSON.',
  mathSolution: 'Try-catch JSON.parse to check validity.',
  codeSolution: 'function isValidJSON(str) {\n    try {\n        JSON.parse(str);\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\n\nconsole.log(isValidJSON(\'{"name":"John"}\'));  // true\nconsole.log(isValidJSON(\'name: John\'));       // false\nconsole.log(isValidJSON(\'42\'));               // true (valid JSON number)\nconsole.log(isValidJSON(\'"hello"\'));          // true (valid JSON string)',
  hint: 'Use try-catch JSON.parse() to validate JSON strings.'
},
{
  id: 'js_json_18',
  topicId: 'js_json',
  question: 'Remove circular references before JSON.stringify().',
  mathSolution: 'Use replacer with WeakSet to detect cycles.',
  codeSolution: 'function getCircularReplacer() {\n    const seen = new WeakSet();\n    return (key, value) => {\n        if (typeof value === "object" && value !== null) {\n            if (seen.has(value)) return "[Circular Reference]";\n            seen.add(value);\n        }\n        return value;\n    };\n}\n\nconst obj = { a: 1 };\nobj.b = obj;  // Circular reference\n\nconst jsonString = JSON.stringify(obj, getCircularReplacer());\nconsole.log(jsonString);  // {"a":1,"b":"[Circular Reference]"}',
  hint: 'Track seen objects to detect and handle circular references.'
},
{
  id: 'js_json_19',
  topicId: 'js_json',
  question: 'Serialize objects with getters to JSON.',
  mathSolution: 'Getters are properly serialized by JSON.stringify().',
  codeSolution: 'const person = {\n    firstName: "John",\n    lastName: "Doe",\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    }\n};\n\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"firstName":"John","lastName":"Doe","fullName":"John Doe"}',
  hint: 'JSON.stringify() includes values from getters.'
},
{
  id: 'js_json_20',
  topicId: 'js_json',
  question: 'Escape special characters in JSON strings.',
  mathSolution: 'JSON.stringify() automatically escapes special characters.',
  codeSolution: 'const data = {\n    message: \'He said, "Hello!\\\\nHow are you?"\',\n    path: "C:\\\\Users\\\\John",\n    unicode: "😀🎉"\n};\n\nconst jsonString = JSON.stringify(data);\nconsole.log(jsonString);\n// {"message":"He said, \\"Hello!\\nHow are you?\\"","path":"C:\\\\Users\\\\John","unicode":"😀🎉"}\n\n// Parse back (works correctly)\nconst parsed = JSON.parse(jsonString);\nconsole.log(parsed.message);  // He said, "Hello!\nHow are you?"',
  hint: 'JSON.stringify() handles quotes, backslashes, newlines, and Unicode.'
},
{
  id: 'js_json_21',
  topicId: 'js_json',
  question: 'Compare two JSON objects for equality.',
  mathSolution: 'Stringify both and compare strings (order-sensitive).',
  codeSolution: 'function isJSONEqual(obj1, obj2) {\n    return JSON.stringify(obj1) === JSON.stringify(obj2);\n}\n\nconst objA = { name: "John", age: 30 };\nconst objB = { name: "John", age: 30 };\nconst objC = { age: 30, name: "John" };\n\nconsole.log(isJSONEqual(objA, objB));  // true\nconsole.log(isJSONEqual(objA, objC));  // false (different key order)\n\n// For deep equality ignoring order, use library like Lodash or custom function',
  hint: 'String comparison is order-sensitive; key order matters.'
},
{
  id: 'js_json_22',
  topicId: 'js_json',
  question: 'Sort object keys before stringifying for consistent output.',
  mathSolution: 'Use replacer to sort keys before serialization.',
  codeSolution: 'function stringifySorted(obj, space = 0) {\n    const sortedKeys = Object.keys(obj).sort();\n    const sortedObj = {};\n    sortedKeys.forEach(key => {\n        sortedObj[key] = obj[key];\n    });\n    return JSON.stringify(sortedObj, null, space);\n}\n\nconst obj = { b: 2, a: 1, c: 3 };\nconsole.log(stringifySorted(obj));  // {"a":1,"b":2,"c":3}\nconsole.log(JSON.stringify(obj));    // {"b":2,"a":1,"c":3}',
  hint: 'Sort keys before stringifying for deterministic output.'
},
{
  id: 'js_json_23',
  topicId: 'js_json',
  question: 'Parse large JSON files without loading entire file (streaming).',
  mathSolution: 'Use streaming JSON parsers for large data.',
  codeSolution: '// For Node.js streaming JSON parsing\n// const { parse } = require("jsonstream2");\n// \n// async function processLargeJSON(filename) {\n//     const stream = fs.createReadStream(filename);\n//     const parser = parse("*");\n//     \n//     stream.pipe(parser);\n//     \n//     for await (const item of parser) {\n//         console.log(item);  // Process each item\n//     }\n// }\n\n// Browser: Use streaming with fetch\nasync function streamJSONArray(url, onItem) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    let buffer = "";\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        \n        buffer += decoder.decode(value, { stream: true });\n        const lines = buffer.split("\\n");\n        buffer = lines.pop();\n        \n        for (const line of lines) {\n            if (line.trim()) {\n                try {\n                    onItem(JSON.parse(line));\n                } catch (e) {\n                    console.error("Parse error:", e);\n                }\n            }\n        }\n    }\n}',
  hint: 'Use streaming for large JSON files to reduce memory usage.'
},
{
  id: 'js_json_24',
  topicId: 'js_json',
  question: 'Merge multiple JSON objects.',
  mathSolution: 'Use spread operator or Object.assign() to merge.',
  codeSolution: 'const obj1 = { name: "John", age: 30 };\nconst obj2 = { city: "NYC", country: "USA" };\nconst obj3 = { age: 31, job: "Engineer" };\n\nconst merged = { ...obj1, ...obj2, ...obj3 };\nconsole.log(merged);  // { name: "John", age: 31, city: "NYC", country: "USA", job: "Engineer" }\n\n// Or using Object.assign\nconst merged2 = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged2);  // Same result',
  hint: 'Later objects override properties from earlier ones.'
},
{
  id: 'js_json_25',
  topicId: 'js_json',
  question: 'Extract specific properties from JSON object.',
  mathSolution: 'Use destructuring or custom function to pick properties.',
  codeSolution: 'const user = { id: 1, name: "John", age: 30, email: "john@example.com", password: "secret" };\n\n// Using destructuring\nconst { password, ...safeUser } = user;\nconsole.log(safeUser);  // { id: 1, name: "John", age: 30, email: "john@example.com" }\n\n// Custom pick function\nfunction pick(obj, keys) {\n    return keys.reduce((result, key) => {\n        if (key in obj) result[key] = obj[key];\n        return result;\n    }, {});\n}\n\nconst partial = pick(user, ["id", "name"]);\nconsole.log(partial);  // { id: 1, name: "John" }',
  hint: 'Use destructuring with rest operator to exclude properties.'
},
{
  id: 'js_json_26',
  topicId: 'js_json',
  question: 'Transform JSON data structure (remap keys).',
  mathSolution: 'Create new object with transformed keys.',
  codeSolution: 'const data = {\n    first_name: "John",\n    last_name: "Doe",\n    user_age: 30\n};\n\nconst transformed = Object.keys(data).reduce((result, key) => {\n    const newKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());\n    result[newKey] = data[key];\n    return result;\n}, {});\n\nconsole.log(transformed);  // { firstName: "John", lastName: "Doe", userAge: 30 }',
  hint: 'Use reduce with regex to transform keys.'
},
{
  id: 'js_json_27',
  topicId: 'js_json',
  question: 'Flatten nested JSON object into single level.',
  mathSolution: 'Recursively flatten nested structures.',
  codeSolution: 'function flattenJSON(obj, parentKey = "", result = {}) {\n    for (let key in obj) {\n        const newKey = parentKey ? `${parentKey}.${key}` : key;\n        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n            flattenJSON(obj[key], newKey, result);\n        } else {\n            result[newKey] = obj[key];\n        }\n    }\n    return result;\n}\n\nconst nested = {\n    user: {\n        name: "John",\n        address: {\n            city: "NYC",\n            zip: 10001\n        }\n    },\n    active: true\n};\n\nconst flattened = flattenJSON(nested);\nconsole.log(flattened);\n// {\n//   "user.name": "John",\n//   "user.address.city": "NYC",\n//   "user.address.zip": 10001,\n//   "active": true\n// }',
  hint: 'Recursively traverse object to create flattened structure.'
},
{
  id: 'js_json_28',
  topicId: 'js_json',
  question: 'Unflatten JSON object (restore nested structure).',
  mathSolution: 'Split dot notation keys to rebuild nested object.',
  codeSolution: 'function unflattenJSON(flatObj) {\n    const result = {};\n    for (let key in flatObj) {\n        const parts = key.split(".");\n        let current = result;\n        for (let i = 0; i < parts.length - 1; i++) {\n            const part = parts[i];\n            if (!current[part]) current[part] = {};\n            current = current[part];\n        }\n        current[parts[parts.length - 1]] = flatObj[key];\n    }\n    return result;\n}\n\nconst flattened = {\n    "user.name": "John",\n    "user.address.city": "NYC",\n    "user.address.zip": 10001,\n    "active": true\n};\n\nconst nested = unflattenJSON(flattened);\nconsole.log(nested);\n// {\n//   user: { name: "John", address: { city: "NYC", zip: 10001 } },\n//   active: true\n// }',
  hint: 'Split dot notation and build nested structure.'
},
{
  id: 'js_json_29',
  topicId: 'js_json',
  question: 'Remove null and undefined values from JSON object.',
  mathSolution: 'Filter out null/undefined recursively.',
  codeSolution: 'function removeNullUndefined(obj) {\n    if (Array.isArray(obj)) {\n        return obj.map(item => removeNullUndefined(item)).filter(item => item !== null && item !== undefined);\n    } else if (obj !== null && typeof obj === "object") {\n        return Object.keys(obj).reduce((result, key) => {\n            const value = removeNullUndefined(obj[key]);\n            if (value !== null && value !== undefined) {\n                result[key] = value;\n            }\n            return result;\n        }, {});\n    }\n    return obj;\n}\n\nconst data = {\n    name: "John",\n    age: null,\n    city: undefined,\n    address: {\n        street: "Main St",\n        zip: null,\n        country: "USA"\n    },\n    tags: [null, "active", undefined, "verified"]\n};\n\nconst cleaned = removeNullUndefined(data);\nconsole.log(cleaned);\n// {\n//   name: "John",\n//   address: { street: "Main St", country: "USA" },\n//   tags: ["active", "verified"]\n// }',
  hint: 'Recursively clean object and array properties.'
},
{
  id: 'js_json_30',
  topicId: 'js_json',
  question: 'Deep freeze JSON object using Object.freeze() recursively.',
  mathSolution: 'Recursively freeze all nested objects.',
  codeSolution: 'function deepFreeze(obj) {\n    Object.freeze(obj);\n    Object.keys(obj).forEach(key => {\n        if (typeof obj[key] === "object" && obj[key] !== null && !Object.isFrozen(obj[key])) {\n            deepFreeze(obj[key]);\n        }\n    });\n    return obj;\n}\n\nconst config = {\n    api: {\n        url: "https://api.example.com",\n        timeout: 5000\n    },\n    version: "1.0"\n};\n\ndeepFreeze(config);\n// config.api.timeout = 6000;  // TypeError in strict mode (fails silently in sloppy mode)\nconsole.log(Object.isFrozen(config));      // true\nconsole.log(Object.isFrozen(config.api));  // true',
  hint: 'Deep freeze prevents modification of JSON objects.'
},
{
  id: 'js_json_31',
  topicId: 'js_json',
  question: 'Calculate size of JSON object in bytes.',
  mathSolution: 'Stringify and measure length in bytes.',
  codeSolution: 'function getJSONSize(obj) {\n    const jsonString = JSON.stringify(obj);\n    // UTF-8: each character is 1-4 bytes\n    return new Blob([jsonString]).size;\n}\n\nconst data = {\n    name: "John Doe",\n    age: 30,\n    address: "123 Main Street, New York, NY 10001"\n};\n\nconst sizeInBytes = getJSONSize(data);\nconsole.log(`JSON size: ${sizeInBytes} bytes`);\nconsole.log(`JSON size: ${(sizeInBytes / 1024).toFixed(2)} KB`);\n\n// Alternative: manual UTF-8 byte calculation\nfunction utf8Length(str) {\n    let length = 0;\n    for (let i = 0; i < str.length; i++) {\n        const code = str.charCodeAt(i);\n        if (code < 0x80) length += 1;\n        else if (code < 0x800) length += 2;\n        else length += 3;\n    }\n    return length;\n}',
  hint: 'Use Blob or TextEncoder to calculate actual byte size.'
},
{
  id: 'js_json_32',
  topicId: 'js_json',
  question: 'Pretty print JSON with custom colors in console.',
  mathSolution: 'Use ANSI color codes or console styling.',
  codeSolution: 'function prettyPrintJSON(obj, indent = 2) {\n    const jsonString = JSON.stringify(obj, null, indent);\n    // Colorize using ANSI codes (Node.js) or CSS (browser)\n    const colorized = jsonString.replace(/("(\\\\.|[^"\\\\])*")/g, match => `\\x1b[32m${match}\\x1b[0m`) // strings green\n        .replace(/(\\d+)/g, match => `\\x1b[33m${match}\\x1b[0m`) // numbers yellow\n        .replace(/(true|false)/g, match => `\\x1b[35m${match}\\x1b[0m`) // booleans magenta\n        .replace(/(null)/g, match => `\\x1b[36m${match}\\x1b[0m`); // null cyan\n    \n    console.log(colorized);\n}\n\nconst data = { name: "John", age: 30, active: true, address: null };\nprettyPrintJSON(data);\n\n// Browser version\nfunction consolePrettyPrint(obj) {\n    console.log("%c" + JSON.stringify(obj, null, 2), \n        "color: #4CAF50; font-family: monospace;");\n}',
  hint: 'Use ANSI codes in Node.js or CSS in browser for colored JSON.'
},
{
  id: 'js_json_33',
  topicId: 'js_json',
  question: 'Parse JSON with comments (JSON5 or custom).',
  mathSolution: 'Remove comments before parsing or use JSON5 library.',
  codeSolution: '// JSON5 library supports comments, trailing commas\n// npm install json5\n// const JSON5 = require("json5");\n\nfunction parseJSONWithComments(jsonString) {\n    // Remove single-line comments\n    let cleaned = jsonString.replace(/\\/\\/.*$/gm, "");\n    // Remove multi-line comments\n    cleaned = cleaned.replace(/\\/\\*[\\s\\S]*?\\*\\//g, "");\n    // Remove trailing commas\n    cleaned = cleaned.replace(/,(\\s*[}\]])/g, "$1");\n    \n    return JSON.parse(cleaned);\n}\n\nconst jsonWithComments = `{\n    // User information\n    "name": "John", /* This is John */\n    "age": 30,\n    "tags": [\n        "developer",  // Primary role\n        "designer",   // Secondary role\n    ],\n}`;\n\nconst parsed = parseJSONWithComments(jsonWithComments);\nconsole.log(parsed);  // { name: "John", age: 30, tags: ["developer", "designer"] }',
  hint: 'Remove comments and trailing commas before parsing standard JSON.'
},
{
  id: 'js_json_34',
  topicId: 'js_json',
  question: 'Minify JSON by removing whitespace.',
  mathSolution: 'Use JSON.stringify() without spacing or custom minifier.',
  codeSolution: 'function minifyJSON(obj) {\n    return JSON.stringify(obj);\n}\n\nconst pretty = {\n    name: "John",\n    age: 30,\n    address: {\n        city: "NYC",\n        zip: 10001\n    }\n};\n\nconsole.log(JSON.stringify(pretty, null, 2));  // Pretty (132 characters)\nconsole.log(minifyJSON(pretty));                // Minified (62 characters)',
  hint: 'JSON.stringify(obj) produces minified output by default.'
},
{
  id: 'js_json_35',
  topicId: 'js_json',
  question: 'Convert JSON to YAML format.',
  mathSolution: 'Recursively convert JSON structure to YAML syntax.',
  codeSolution: 'function jsonToYaml(obj, indent = 0) {\n    const spaces = "  ".repeat(indent);\n    let yaml = "";\n    \n    if (Array.isArray(obj)) {\n        for (const item of obj) {\n            if (typeof item === "object" && item !== null) {\n                yaml += `${spaces}- \\n${jsonToYaml(item, indent + 1)}`;\n            } else {\n                yaml += `${spaces}- ${item}\\n`;\n            }\n        }\n    } else if (typeof obj === "object" && obj !== null) {\n        for (const [key, value] of Object.entries(obj)) {\n            if (typeof value === "object" && value !== null) {\n                yaml += `${spaces}${key}:\\n${jsonToYaml(value, indent + 1)}`;\n            } else {\n                yaml += `${spaces}${key}: ${value}\\n`;\n            }\n        }\n    } else {\n        yaml = `${obj}`;\n    }\n    \n    return yaml;\n}\n\nconst data = {\n    name: "John",\n    age: 30,\n    hobbies: [\"reading\", \"gaming\"],\n    address: {\n        city: \"NYC\",\n        zip: 10001\n    }\n};\n\nconsole.log(jsonToYaml(data));\n// name: John\n// age: 30\n// hobbies:\n//   - reading\n//   - gaming\n// address:\n//   city: NYC\n//   zip: 10001',
  hint: 'Recursively convert nested objects/arrays to YAML syntax.'
},
{
  id: 'js_json_36',
  topicId: 'js_json',
  question: 'Validate JSON schema using AJV or simple validation.',
  mathSolution: 'Check required fields and types against schema.',
  codeSolution: 'function validateSchema(obj, schema) {\n    const errors = [];\n    \n    for (const [key, rules] of Object.entries(schema)) {\n        if (rules.required && !(key in obj)) {\n            errors.push(`Missing required field: ${key}`);\n            continue;\n        }\n        \n        if (key in obj) {\n            const value = obj[key];\n            \n            if (rules.type && typeof value !== rules.type) {\n                errors.push(`Field ${key} should be ${rules.type}, got ${typeof value}`);\n            }\n            \n            if (rules.min !== undefined && value < rules.min) {\n                errors.push(`Field ${key} should be at least ${rules.min}`);\n            }\n            \n            if (rules.max !== undefined && value > rules.max) {\n                errors.push(`Field ${key} should be at most ${rules.max}`);\n            }\n            \n            if (rules.pattern && !rules.pattern.test(value)) {\n                errors.push(`Field ${key} does not match pattern`);\n            }\n        }\n    }\n    \n    return errors;\n}\n\nconst schema = {\n    name: { required: true, type: "string" },\n    age: { required: true, type: "number", min: 0, max: 150 },\n    email: { type: "string", pattern: /^[^@]+@[^@]+\\.[^@]+$/ }\n};\n\nconst validData = { name: "John", age: 30, email: "john@example.com" };\nconst invalidData = { name: "John", age: 200 };\n\nconsole.log(validateSchema(validData, schema));   // []\nconsole.log(validateSchema(invalidData, schema)); // ["Missing required field: email", "Field age should be at most 150"]',
  hint: 'Define schema with required fields, types, and constraints.'
},
{
  id: 'js_json_37',
  topicId: 'js_json',
  question: 'Patch/update JSON object using JSON Patch (RFC 6902).',
  mathSolution: 'Apply operations (add, remove, replace) to JSON object.',
  codeSolution: 'function applyJSONPatch(obj, patch) {\n    const result = JSON.parse(JSON.stringify(obj)); // Deep copy\n    \n    for (const operation of patch) {\n        const { op, path, value } = operation;\n        const pathParts = path.split("/").filter(p => p !== "");\n        let current = result;\n        \n        for (let i = 0; i < pathParts.length - 1; i++) {\n            const part = pathParts[i];\n            if (!current[part]) current[part] = {};\n            current = current[part];\n        }\n        \n        const lastKey = pathParts[pathParts.length - 1];\n        \n        switch (op) {\n            case "add":\n            case "replace":\n                current[lastKey] = value;\n                break;\n            case "remove":\n                delete current[lastKey];\n                break;\n        }\n    }\n    \n    return result;\n}\n\nconst original = { name: "John", age: 30, address: { city: "NYC" } };\n\nconst patch = [\n    { op: "replace", path: "/name", value: "Jane" },\n    { op: "add", path: "/email", value: "jane@example.com" },\n    { op: "remove", path: "/address/city" }\n];\n\nconst patched = applyJSONPatch(original, patch);\nconsole.log(patched);\n// { name: "Jane", age: 30, address: {}, email: "jane@example.com" }',
  hint: 'JSON Patch operations: add, remove, replace, copy, move, test.'
},
{
  id: 'js_json_38',
  topicId: 'js_json',
  question: 'Diff two JSON objects to find differences.',
  mathSolution: 'Recursively compare objects and return changes.',
  codeSolution: 'function jsonDiff(obj1, obj2, path = "") {\n    const differences = {};\n    \n    // Check for added/modified keys\n    for (const key in obj2) {\n        const currentPath = path ? `${path}.${key}` : key;\n        const val1 = obj1?.[key];\n        const val2 = obj2[key];\n        \n        if (typeof val1 === "object" && typeof val2 === "object" && val1 !== null && val2 !== null) {\n            const nestedDiff = jsonDiff(val1, val2, currentPath);\n            if (Object.keys(nestedDiff).length > 0) {\n                differences[currentPath] = nestedDiff;\n            }\n        } else if (val1 !== val2) {\n            differences[currentPath] = { from: val1, to: val2 };\n        }\n    }\n    \n    // Check for removed keys\n    for (const key in obj1) {\n        if (!(key in obj2)) {\n            const currentPath = path ? `${path}.${key}` : key;\n            differences[currentPath] = { from: obj1[key], to: undefined };\n        }\n    }\n    \n    return differences;\n}\n\nconst oldData = { name: "John", age: 30, city: "LA" };\nconst newData = { name: "John", age: 31, country: "USA" };\n\nconst diff = jsonDiff(oldData, newData);\nconsole.log(diff);\n// {\n//   age: { from: 30, to: 31 },\n//   city: { from: "LA", to: undefined },\n//   country: { from: undefined, to: "USA" }\n// }',
  hint: 'Recursively compare objects to detect added, removed, and changed fields.'
},
{
  id: 'js_json_39',
  topicId: 'js_json',
  question: 'JSONPath query to extract data from JSON.',
  mathSolution: 'Implement simple JSONPath parser or use library.',
  codeSolution: 'function jsonPath(obj, path) {\n    const parts = path.split(".");\n    let current = obj;\n    \n    for (const part of parts) {\n        if (current === undefined || current === null) return undefined;\n        \n        // Handle array notation [0]\n        const arrayMatch = part.match(/(\\w+)\\[(\\d+)\\]/);\n        if (arrayMatch) {\n            const [, arrayName, index] = arrayMatch;\n            current = current[arrayName]?.[parseInt(index)];\n        } else {\n            current = current[part];\n        }\n    }\n    \n    return current;\n}\n\nconst data = {\n    user: {\n        name: "John",\n        age: 30,\n        hobbies: [\"reading\", \"gaming\", \"coding\"]\n    },\n    active: true\n};\n\nconsole.log(jsonPath(data, "user.name"));           // John\nconsole.log(jsonPath(data, "user.hobbies[1]"));    // gaming\nconsole.log(jsonPath(data, "active"));              // true\nconsole.log(jsonPath(data, "user.address.city"));   // undefined',
  hint: 'Implement simple path notation for JSON property access.'
},
{
  id: 'js_json_40',
  topicId: 'js_json',
  question: 'Convert JSON to XML format.',
  mathSolution: 'Recursively convert JSON structure to XML elements.',
  codeSolution: 'function jsonToXml(obj, rootName = "root") {\n    let xml = `<${rootName}>`;\n    \n    function buildXml(data, indent = "") {\n        let result = "";\n        \n        if (Array.isArray(data)) {\n            for (const item of data) {\n                result += buildXml(item, indent);\n            }\n        } else if (typeof data === "object" && data !== null) {\n            for (const [key, value] of Object.entries(data)) {\n                if (Array.isArray(value)) {\n                    for (const item of value) {\n                        result += `<${key}>${buildXml(item, "")}</${key}>`;\n                    }\n                } else if (typeof value === "object" && value !== null) {\n                    result += `<${key}>${buildXml(value, "")}</${key}>`;\n                } else {\n                    result += `<${key}>${escapeXml(String(value))}</${key}>`;\n                }\n            }\n        } else {\n            result += escapeXml(String(data));\n        }\n        \n        return result;\n    }\n    \n    function escapeXml(str) {\n        return str.replace(/[&<>]/g, (match) => {\n            if (match === "&") return "&amp;";\n            if (match === "<") return "&lt;";\n            if (match === ">") return "&gt;";\n            return match;\n        });\n    }\n    \n    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {\n        xml += buildXml(obj);\n    } else {\n        xml += escapeXml(String(obj));\n    }\n    \n    xml += `</${rootName}>`;\n    return xml;\n}\n\nconst data = {\n    user: {\n        name: "John Doe",\n        age: 30,\n        hobbies: [\"reading\", \"coding\"]\n    }\n};\n\nconst xml = jsonToXml(data, "data");\nconsole.log(xml);\n// <data><user><name>John Doe</name><age>30</age><hobbies>reading</hobbies><hobbies>coding</hobbies></user></data>',
  hint: 'Recursively convert JSON objects to XML elements.'
},
{
  id: 'js_json_41',
  topicId: 'js_json',
  question: 'Compress JSON string using LZ-string or similar.',
  mathSolution: 'Use compression library to reduce JSON size.',
  codeSolution: '// Using LZ-string library (simplified example)\n// npm install lz-string\n// const LZString = require("lz-string");\n\nfunction compressJSON(obj) {\n    const jsonString = JSON.stringify(obj);\n    // Simulate compression (base64 encoding for demo)\n    const compressed = btoa(unescape(encodeURIComponent(jsonString)));\n    return compressed;\n}\n\nfunction decompressJSON(compressed) {\n    const jsonString = decodeURIComponent(escape(atob(compressed)));\n    return JSON.parse(jsonString);\n}\n\nconst original = {\n    users: Array(100).fill().map((_, i) => ({ id: i, name: `User ${i}` }))\n};\n\nconst compressed = compressJSON(original);\nconsole.log(`Original size: ${JSON.stringify(original).length} bytes`);\nconsole.log(`Compressed size: ${compressed.length} bytes`);\n\nconst decompressed = decompressJSON(compressed);\nconsole.log(decompressed.users.length);  // 100',
  hint: 'Use compression for large JSON data transfer (base64 is not real compression).'
},
{
  id: 'js_json_42',
  topicId: 'js_json',
  question: 'Stream JSON array to browser using fetch and ReadableStream.',
  mathSolution: 'Parse JSON array incrementally as it streams.',
  codeSolution: 'async function streamJSONArray(url, onItem) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    let buffer = "";\n    let arrayDepth = 0;\n    let itemBuffer = "";\n    const openBrackets = [];\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        \n        buffer += decoder.decode(value, { stream: true });\n        \n        let i = 0;\n        while (i < buffer.length) {\n            const char = buffer[i];\n            \n            if (char === \'[\') arrayDepth++;\n            if (char === \']\') arrayDepth--;\n            \n            if (arrayDepth === 1 && char !== \'[\' && char !== \']\') {\n                itemBuffer += char;\n            }\n            \n            if (arrayDepth === 1 && (char === \',\' || (i === buffer.length - 1 && arrayDepth === 0))) {\n                if (itemBuffer.trim()) {\n                    try {\n                        const item = JSON.parse(itemBuffer.trim());\n                        onItem(item);\n                    } catch (e) {\n                        console.error("Parse error:", e);\n                    }\n                }\n                itemBuffer = "";\n            }\n            \n            i++;\n        }\n    }\n}\n\n// Usage\n// streamJSONArray("/api/large-array\", (item) => {\n//     console.log(\"Received:\", item);\n// });',
  hint: 'Stream JSON arrays to handle large datasets without loading all at once.'
},
{
  id: 'js_json_43',
  topicId: 'js_json',
  question: 'Convert JSON to CSV format.',
  mathSolution: 'Extract headers and rows from JSON array.',
  codeSolution: 'function jsonToCsv(json, headers = null) {\n    if (!Array.isArray(json) || json.length === 0) return "";\n    \n    // Extract headers\n    const allHeaders = headers || Object.keys(json[0]);\n    \n    // Escape CSV field\n    function escapeCSV(field) {\n        if (typeof field === "string" && (field.includes(",") || field.includes("\"") || field.includes("\\n"))) {\n            return `"${field.replace(/"/g, "\"\"")}"`;\n        }\n        return field;\n    }\n    \n    // Create header row\n    const headerRow = allHeaders.join(",");\n    \n    // Create data rows\n    const dataRows = json.map(item => {\n        return allHeaders.map(header => escapeCSV(item[header] ?? "")).join(",");\n    });\n    \n    return [headerRow, ...dataRows].join("\\n");\n}\n\nconst users = [\n    { name: "John Doe", age: 30, email: "john@example.com" },\n    { name: "Jane Smith", age: 25, email: "jane@example.com" }\n];\n\nconst csv = jsonToCsv(users);\nconsole.log(csv);\n// name,age,email\n// John Doe,30,john@example.com\n// Jane Smith,25,jane@example.com',
  hint: 'Convert JSON array to CSV with proper field escaping.'
},
{
  id: 'js_json_44',
  topicId: 'js_json',
  question: 'Parse CSV to JSON.',
  mathSolution: 'Parse CSV rows into JSON objects.',
  codeSolution: 'function csvToJson(csvString) {\n    const lines = csvString.trim().split("\\n");\n    if (lines.length < 2) return [];\n    \n    const headers = lines[0].split(",").map(h => h.trim());\n    const results = [];\n    \n    for (let i = 1; i < lines.length; i++) {\n        const values = [];\n        let inQuotes = false;\n        let currentValue = "";\n        const line = lines[i];\n        \n        for (let j = 0; j < line.length; j++) {\n            const char = line[j];\n            \n            if (char === \'"\') {\n                inQuotes = !inQuotes;\n            } else if (char === \',\' && !inQuotes) {\n                values.push(currentValue);\n                currentValue = "";\n            } else {\n                currentValue += char;\n            }\n        }\n        values.push(currentValue);\n        \n        const row = {};\n        headers.forEach((header, index) => {\n            let value = values[index] || "";\n            // Remove quotes\n            if (value.startsWith(\'"\') && value.endsWith(\'"\')) {\n                value = value.slice(1, -1).replace(/\"\"/g, \'"\');\n            }\n            row[header] = value;\n        });\n        results.push(row);\n    }\n    \n    return results;\n}\n\nconst csv = `name,age,email\n"John Doe",30,john@example.com\n"Jane Smith",25,jane@example.com`;\n\nconst json = csvToJson(csv);\nconsole.log(json);\n// [\n//   { name: "John Doe", age: "30", email: "john@example.com" },\n//   { name: "Jane Smith", age: "25", email: "jane@example.com" }\n// ]',
  hint: 'Parse CSV with support for quoted fields and escaped quotes.'
},
{
  id: 'js_json_45',
  topicId: 'js_json',
  question: 'Query JSON data using JavaScript array methods.',
  mathSolution: 'Use filter, map, reduce for JSON data queries.',
  codeSolution: 'const data = [\n    { id: 1, name: "John", age: 30, city: "NYC", active: true },\n    { id: 2, name: "Jane", age: 25, city: "LA", active: true },\n    { id: 3, name: "Bob", age: 35, city: "NYC", active: false },\n    { id: 4, name: "Alice", age: 28, city: "Chicago", active: true }\n];\n\n// Filter active users in NYC\nconst activeNYC = data.filter(user => user.active && user.city === "NYC");\nconsole.log(activeNYC);  // [{ id: 1, name: "John", ... }]\n\n// Group by city\nconst groupByCity = data.reduce((group, user) => {\n    group[user.city] = group[user.city] || [];\n    group[user.city].push(user);\n    return group;\n}, {});\nconsole.log(groupByCity);\n\n// Get average age\nconst avgAge = data.reduce((sum, user) => sum + user.age, 0) / data.length;\nconsole.log(avgAge);  // 29.5\n\n// Find user by name\nconst user = data.find(u => u.name === "Alice");\nconsole.log(user);  // { id: 4, name: "Alice", ... }',
  hint: 'Use array methods for powerful JSON data queries.'
},
{
  id: 'js_json_46',
  topicId: 'js_json',
  question: 'Sort JSON array by multiple fields.',
  mathSolution: 'Use sort with comparator that checks multiple fields.',
  codeSolution: 'const users = [\n    { name: "John", age: 30, city: "NYC" },\n    { name: "Alice", age: 25, city: "LA" },\n    { name: "Bob", age: 30, city: "Chicago" },\n    { name: "Alice", age: 28, city: "Boston" }\n];\n\nfunction sortByMultipleFields(...fields) {\n    return (a, b) => {\n        for (const field of fields) {\n            const [key, direction = "asc"] = typeof field === "string" \n                ? [field, "asc"] \n                : [field.key, field.direction];\n            \n            const aVal = a[key];\n            const bVal = b[key];\n            \n            if (aVal < bVal) return direction === "asc" ? -1 : 1;\n            if (aVal > bVal) return direction === "asc" ? 1 : -1;\n        }\n        return 0;\n    };\n}\n\n// Sort by name ascending, then age descending\nconst sorted = users.sort(sortByMultipleFields(\n    "name",\n    { key: "age", direction: "desc" }\n));\n\nconsole.log(sorted);\n// Alice (28), Alice (25), Bob (30), John (30)',
  hint: 'Create comparator that checks multiple fields sequentially.'
},
{
  id: 'js_json_47',
  topicId: 'js_json',
  question: 'Deep search in JSON object for value.',
  mathSolution: 'Recursively search all properties for matching value.',
  codeSolution: 'function deepSearch(obj, searchValue, path = "") {\n    const results = [];\n    \n    if (obj === null || typeof obj !== "object") {\n        if (obj === searchValue) {\n            results.push({ path: path.substring(1), value: obj });\n        }\n        return results;\n    }\n    \n    if (Array.isArray(obj)) {\n        obj.forEach((item, index) => {\n            const newPath = path ? `${path}[${index}]` : `[${index}]`;\n            results.push(...deepSearch(item, searchValue, newPath));\n        });\n    } else {\n        for (const [key, value] of Object.entries(obj)) {\n            const newPath = path ? `${path}.${key}` : key;\n            if (value === searchValue) {\n                results.push({ path: newPath, value });\n            }\n            results.push(...deepSearch(value, searchValue, newPath));\n        }\n    }\n    \n    return results;\n}\n\nconst data = {\n    user: {\n        name: "John",\n        age: 30,\n        address: {\n            city: "NYC",\n            zip: 10001\n        },\n        tags: [\"developer\", \"designer\", { level: \"senior\" }]\n    }\n};\n\nconst results = deepSearch(data, "senior");\nconsole.log(results);  // [{ path: "user.tags[2].level", value: "senior" }]\n\nconst allStrings = deepSearch(data, "NYC");\nconsole.log(allStrings);  // [{ path: "user.address.city", value: "NYC" }]',
  hint: 'Recursively traverse JSON to find matching values.'
},
{
  id: 'js_json_48',
  topicId: 'js_json',
  question: 'Transform JSON keys from camelCase to snake_case.',
  mathSolution: 'Recursively convert keys using regex.',
  codeSolution: 'function camelToSnake(obj) {\n    if (Array.isArray(obj)) {\n        return obj.map(item => camelToSnake(item));\n    } else if (obj !== null && typeof obj === "object") {\n        const result = {};\n        for (const [key, value] of Object.entries(obj)) {\n            const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);\n            result[snakeKey] = camelToSnake(value);\n        }\n        return result;\n    }\n    return obj;\n}\n\nfunction snakeToCamel(obj) {\n    if (Array.isArray(obj)) {\n        return obj.map(item => snakeToCamel(item));\n    } else if (obj !== null && typeof obj === "object") {\n        const result = {};\n        for (const [key, value] of Object.entries(obj)) {\n            const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());\n            result[camelKey] = snakeToCamel(value);\n        }\n        return result;\n    }\n    return obj;\n}\n\nconst camelData = {\n    firstName: "John",\n    lastName: "Doe",\n    userAddress: {\n        streetName: \"Main St\",\n        zipCode: 10001\n    }\n};\n\nconst snakeData = camelToSnake(camelData);\nconsole.log(snakeData);\n// {\n//   first_name: "John",\n//   last_name: "Doe",\n//   user_address: {\n//     street_name: "Main St",\n//     zip_code: 10001\n//   }\n// }\n\nconst backToCamel = snakeToCamel(snakeData);\nconsole.log(backToCamel);  // Original camelCase structure',
  hint: 'Convert between camelCase and snake_case recursively.'
},
{
  id: 'js_json_49',
  topicId: 'js_json',
  question: 'Encrypt/Decrypt JSON data for secure storage.',
  mathSolution: 'Use Web Crypto API to encrypt JSON before storage.',
  codeSolution: 'async function encryptJSON(data, password) {\n    const jsonString = JSON.stringify(data);\n    const encoder = new TextEncoder();\n    const dataBuffer = encoder.encode(jsonString);\n    \n    // Generate key from password\n    const keyMaterial = await crypto.subtle.importKey(\n        "raw",\n        encoder.encode(password),\n        "PBKDF2",\n        false,\n        ["deriveKey"]\n    );\n    \n    const key = await crypto.subtle.deriveKey(\n        {\n            name: "PBKDF2",\n            salt: encoder.encode("salt"),\n            iterations: 100000,\n            hash: "SHA-256"\n        },\n        keyMaterial,\n        { name: "AES-GCM", length: 256 },\n        false,\n        ["encrypt", "decrypt"]\n    );\n    \n    const iv = crypto.getRandomValues(new Uint8Array(12));\n    const encrypted = await crypto.subtle.encrypt(\n        { name: "AES-GCM", iv },\n        key,\n        dataBuffer\n    );\n    \n    return {\n        encrypted: Array.from(new Uint8Array(encrypted)),\n        iv: Array.from(iv)\n    };\n}\n\nasync function decryptJSON(encryptedData, password) {\n    const encoder = new TextEncoder();\n    const keyMaterial = await crypto.subtle.importKey(\n        "raw",\n        encoder.encode(password),\n        "PBKDF2",\n        false,\n        ["deriveKey"]\n    );\n    \n    const key = await crypto.subtle.deriveKey(\n        {\n            name: "PBKDF2",\n            salt: encoder.encode("salt"),\n            iterations: 100000,\n            hash: "SHA-256"\n        },\n        keyMaterial,\n        { name: "AES-GCM", length: 256 },\n        false,\n        ["encrypt", "decrypt"]\n    );\n    \n    const decrypted = await crypto.subtle.decrypt(\n        { name: "AES-GCM", iv: new Uint8Array(encryptedData.iv) },\n        key,\n        new Uint8Array(encryptedData.encrypted)\n    );\n    \n    const decoder = new TextDecoder();\n    return JSON.parse(decoder.decode(decrypted));\n}\n\n// Usage\n// const secret = { password: "secret123", token: "abc123" };\n// const encrypted = await encryptJSON(secret, "mypassword");\n// const decrypted = await decryptJSON(encrypted, "mypassword");\n// console.log(decrypted);  // Original data',
  hint: 'Use Web Crypto API for secure JSON encryption.'
},
{
  id: 'js_json_50',
  topicId: 'js_json',
  question: 'Build complete JSON CRUD operations in-memory database.',
  mathSolution: 'Create array-based JSON store with full CRUD operations.',
  codeSolution: 'class JSONDatabase {\n    constructor(name = "db") {\n        this.name = name;\n        this.data = [];\n        this.nextId = 1;\n        this.loadFromStorage();\n    }\n    \n    loadFromStorage() {\n        const saved = localStorage.getItem(this.name);\n        if (saved) {\n            const loaded = JSON.parse(saved);\n            this.data = loaded.data;\n            this.nextId = loaded.nextId;\n        }\n    }\n    \n    saveToStorage() {\n        localStorage.setItem(this.name, JSON.stringify({\n            data: this.data,\n            nextId: this.nextId\n        }));\n    }\n    \n    insert(item) {\n        const newItem = { id: this.nextId++, ...item };\n        this.data.push(newItem);\n        this.saveToStorage();\n        return newItem;\n    }\n    \n    find(query = {}) {\n        return this.data.filter(item => {\n            return Object.entries(query).every(([key, value]) => item[key] === value);\n        });\n    }\n    \n    findOne(id) {\n        return this.data.find(item => item.id === id);\n    }\n    \n    update(id, updates) {\n        const index = this.data.findIndex(item => item.id === id);\n        if (index === -1) return null;\n        \n        this.data[index] = { ...this.data[index], ...updates };\n        this.saveToStorage();\n        return this.data[index];\n    }\n    \n    delete(id) {\n        const index = this.data.findIndex(item => item.id === id);\n        if (index === -1) return false;\n        \n        this.data.splice(index, 1);\n        this.saveToStorage();\n        return true;\n    }\n    \n    query(conditions) {\n        let results = this.data;\n        \n        if (conditions.filter) {\n            results = results.filter(conditions.filter);\n        }\n        \n        if (conditions.sort) {\n            results = [...results].sort(conditions.sort);\n        }\n        \n        if (conditions.limit) {\n            results = results.slice(0, conditions.limit);\n        }\n        \n        if (conditions.skip) {\n            results = results.slice(conditions.skip);\n        }\n        \n        return results;\n    }\n    \n    getAll() {\n        return this.data;\n    }\n    \n    clear() {\n        this.data = [];\n        this.nextId = 1;\n        this.saveToStorage();\n    }\n}\n\n// Usage example\nconst db = new JSONDatabase("myDB");\n\n// Insert\ndb.insert({ name: "John", age: 30, city: "NYC" });\ndb.insert({ name: "Jane", age: 25, city: "LA" });\n\n// Find\nconst users = db.find({ city: "NYC" });\nconsole.log(users);  // [{ id: 1, name: "John", age: 30, city: "NYC" }]\n\n// Update\ndb.update(1, { age: 31 });\n\n// Query with conditions\nconst results = db.query({\n    filter: user => user.age >= 25,\n    sort: (a, b) => a.age - b.age,\n    limit: 10\n});\nconsole.log(results);\n\n// Delete\ndb.delete(2);\n\n// Get all\nconsole.log(db.getAll());',
  hint: 'Simple in-memory JSON database with CRUD and query operations.'
}
);