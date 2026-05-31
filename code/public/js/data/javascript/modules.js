QuizData.questions.push(
{
  id: 'js_modules_1',
  topicId: 'js_modules',
  question: 'Create and export a simple function using named export.',
  mathSolution: 'Use export keyword to export functions, variables, or classes.',
  codeSolution: '// math.js\nexport function add(a, b) {\n    return a + b;\n}\n\n// app.js\nimport { add } from "./math.js";\nconsole.log(add(5, 3));  // 8',
  hint: 'Named exports use curly braces during import.'
},
{
  id: 'js_modules_2',
  topicId: 'js_modules',
  question: 'Export multiple named functions from a module.',
  mathSolution: 'Export multiple items using export keyword before each.',
  codeSolution: '// operations.js\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\nexport function multiply(a, b) { return a * b; }\n\n// app.js\nimport { add, subtract, multiply } from "./operations.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(5, 3)); // 2\nconsole.log(multiply(5, 3)); // 15',
  hint: 'Import multiple named exports by listing them in braces.'
},
{
  id: 'js_modules_3',
  topicId: 'js_modules',
  question: 'Export variables and constants from a module.',
  mathSolution: 'Export variables, constants, and functions similarly.',
  codeSolution: '// constants.js\nexport const PI = 3.14159;\nexport const E = 2.71828;\nexport let counter = 0;\nexport function increment() { counter++; }\n\n// app.js\nimport { PI, E, counter, increment } from "./constants.js";\nconsole.log(PI);  // 3.14159\nincrement();\nconsole.log(counter);  // 1',
  hint: 'Exported variables can be modified if not const.'
},
{
  id: 'js_modules_4',
  topicId: 'js_modules',
  question: 'Use default export to export a single value.',
  mathSolution: 'Default export exports one main value from a module.',
  codeSolution: '// calculator.js\nexport default function add(a, b) {\n    return a + b;\n}\n\n// app.js\nimport add from "./calculator.js";\nconsole.log(add(5, 3));  // 8',
  hint: 'Default exports don\'t use braces during import.'
},
{
  id: 'js_modules_5',
  topicId: 'js_modules',
  question: 'Combine default export with named exports.',
  mathSolution: 'Module can have one default and multiple named exports.',
  codeSolution: '// math.js\nexport default function add(a, b) { return a + b; }\nexport const PI = 3.14159;\nexport function subtract(a, b) { return a - b; }\n\n// app.js\nimport add, { PI, subtract } from "./math.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(PI);              // 3.14159\nconsole.log(subtract(5, 3)); // 2',
  hint: 'Import default first, then named exports in braces.'
},
{
  id: 'js_modules_6',
  topicId: 'js_modules',
  question: 'Export class from a module.',
  mathSolution: 'ES6 classes can be exported as named or default exports.',
  codeSolution: '// person.js\nexport class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n}\n\n// app.js\nimport { Person } from "./person.js";\nconst john = new Person("John", 30);\nconsole.log(john.greet());  // Hello, my name is John',
  hint: 'Classes can be exported just like functions.'
},
{
  id: 'js_modules_7',
  topicId: 'js_modules',
  question: 'Use export ... as to rename exported names.',
  mathSolution: 'Alias exports using "as" keyword.',
  codeSolution: '// math.js\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\n\n// app.js\nimport { add as sum, subtract as difference } from "./math.js";\nconsole.log(sum(5, 3));       // 8\nconsole.log(difference(5, 3)); // 2',
  hint: 'Use `export { original as alias }` syntax.'
},
{
  id: 'js_modules_8',
  topicId: 'js_modules',
  question: 'Use import ... as to rename imported names.',
  mathSolution: 'Import with alias using "as" keyword.',
  codeSolution: '// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add as sum } from "./math.js";\nconsole.log(sum(5, 3));  // 8',
  hint: 'Rename imports to avoid naming conflicts.'
},
{
  id: 'js_modules_9',
  topicId: 'js_modules',
  question: 'Use import * as to import all named exports as namespace.',
  mathSolution: 'Import everything as a single object.',
  codeSolution: '// math.js\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\nexport const PI = 3.14159;\n\n// app.js\nimport * as Math from "./math.js";\nconsole.log(Math.add(5, 3));      // 8\nconsole.log(Math.subtract(5, 3)); // 2\nconsole.log(Math.PI);              // 3.14159',
  hint: 'Namespace import groups all named exports into an object.'
},
{
  id: 'js_modules_10',
  topicId: 'js_modules',
  question: 'Use dynamic import() for lazy loading modules.',
  mathSolution: 'import() returns a promise that resolves to module.',
  codeSolution: '// heavy-module.js\nexport default function heavyComputation() {\n    return "Result";\n}\n\n// app.js\nasync function loadModule() {\n    const module = await import("./heavy-module.js");\n    console.log(module.default());  // Result\n}\nloadModule();',
  hint: 'Dynamic import enables code splitting and lazy loading.'
},
{
  id: 'js_modules_11',
  topicId: 'js_modules',
  question: 'Use dynamic import with destructuring.',
  mathSolution: 'Destructure the imported module object.',
  codeSolution: '// math.js\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\n\n// app.js\nconst { add, subtract } = await import("./math.js");\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(5, 3)); // 2',
  hint: 'Destructure dynamic import result for concise syntax.'
},
{
  id: 'js_modules_12',
  topicId: 'js_modules',
  question: 'Import JSON file as module (requires loader).',
  mathSolution: 'JSON files can be imported directly with proper configuration.',
  codeSolution: '// data.json\n// {\n//     "name": "John",\n//     "age": 30\n// }\n\n// app.js (with appropriate bundler/webpack config)\nimport data from "./data.json" assert { type: "json" };\nconsole.log(data.name);  // John\nconsole.log(data.age);   // 30',
  hint: 'Use import assertions for JSON imports in modern browsers.'
},
{
  id: 'js_modules_13',
  topicId: 'js_modules',
  question: 'Re-export modules (export from).',
  mathSolution: 'Combine exports from multiple modules.',
  codeSolution: '// add.js\nexport function add(a, b) { return a + b; }\n\n// subtract.js\nexport function subtract(a, b) { return a - b; }\n\n// index.js\nexport { add } from "./add.js";\nexport { subtract } from "./subtract.js";\n\n// app.js\nimport { add, subtract } from "./index.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(5, 3)); // 2',
  hint: 'Re-exporting creates convenient entry points to modules.'
},
{
  id: 'js_modules_14',
  topicId: 'js_modules',
  question: 'Use export default with anonymous function.',
  mathSolution: 'Export default can be an anonymous function.',
  codeSolution: '// logger.js\nexport default function(message) {\n    console.log(`[LOG] ${message}`);\n}\n\n// app.js\nimport log from "./logger.js";\nlog("Hello World");  // [LOG] Hello World',
  hint: 'Default exports can be anonymous, imported with any name.'
},
{
  id: 'js_modules_15',
  topicId: 'js_modules',
  question: 'Export default with class expression.',
  mathSolution: 'Default export class without explicit name.',
  codeSolution: '// animal.js\nexport default class {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        return `${this.name} makes a sound`;\n    }\n}\n\n// app.js\nimport Animal from "./animal.js";\nconst dog = new Animal("Rex");\nconsole.log(dog.speak());  // Rex makes a sound',
  hint: 'Anonymous default exports are common for single-purpose modules.'
},
{
  id: 'js_modules_16',
  topicId: 'js_modules',
  question: 'Export already defined variables using export {} syntax.',
  mathSolution: 'Declare variables, then export them in a block.',
  codeSolution: '// config.js\nconst API_URL = "https://api.example.com";\nconst TIMEOUT = 5000;\nconst RETRY_COUNT = 3;\n\nexport { API_URL, TIMEOUT, RETRY_COUNT };\n\n// app.js\nimport { API_URL, TIMEOUT, RETRY_COUNT } from "./config.js";\nconsole.log(API_URL);  // https://api.example.com',
  hint: 'Export after declaration is useful for organizing exports.'
},
{
  id: 'js_modules_17',
  topicId: 'js_modules',
  question: 'Use export with alias (export { original as alias }).',
  mathSolution: 'Export original name with different alias.',
  codeSolution: '// utils.js\nfunction addNumbers(a, b) { return a + b; }\nfunction multiplyNumbers(a, b) { return a * b; }\n\nexport {\n    addNumbers as add,\n    multiplyNumbers as multiply\n};\n\n// app.js\nimport { add, multiply } from "./utils.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(multiply(5, 3)); // 15',
  hint: 'Alias exports provide cleaner API at module boundaries.'
},
{
  id: 'js_modules_18',
  topicId: 'js_modules',
  question: 'Import module for side effects only.',
  mathSolution: 'Import without binding to execute module code.',
  codeSolution: '// init.js\nconsole.log("Module initialized");\nwindow.globalConfig = { theme: "dark" };\n\n// app.js\nimport "./init.js";  // Logs: Module initialized\nconsole.log(window.globalConfig.theme);  // dark',
  hint: 'Importing for side effects runs the module code once.'
},
{
  id: 'js_modules_19',
  topicId: 'js_modules',
  question: 'Use default export with primitive value.',
  mathSolution: 'Export strings, numbers, booleans as default.',
  codeSolution: '// settings.js\nexport default "production";\n\n// app.js\nimport env from "./settings.js";\nconsole.log(env);  // production',
  hint: 'Primitives can be exported as default.'
},
{
  id: 'js_modules_20',
  topicId: 'js_modules',
  question: 'Conditional dynamic import with feature detection.',
  mathSolution: 'Load module based on runtime condition.',
  codeSolution: '// feature.js\nexport function featureA() { return "Feature A"; }\nexport function featureB() { return "Feature B"; }\n\n// app.js\nconst useFeatureA = true;\nif (useFeatureA) {\n    const { featureA } = await import("./feature.js");\n    console.log(featureA());  // Feature A\n} else {\n    const { featureB } = await import("./feature.js");\n    console.log(featureB());\n}',
  hint: 'Dynamic import allows loading different modules conditionally.'
},
{
  id: 'js_modules_21',
  topicId: 'js_modules',
  question: 'Import with default and named exports together.',
  mathSolution: 'Combine default and named imports in one statement.',
  codeSolution: '// math.js\nexport default function add(a, b) { return a + b; }\nexport const PI = 3.14159;\nexport function subtract(a, b) { return a - b; }\n\n// app.js\nimport add, { PI, subtract } from "./math.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(PI);              // 3.14159\nconsole.log(subtract(5, 3)); // 2',
  hint: 'Default import first, then named imports in braces.'
},
{
  id: 'js_modules_22',
  topicId: 'js_modules',
  question: 'Use import.meta.url to get module URL.',
  mathSolution: 'import.meta contains metadata about current module.',
  codeSolution: '// module.js\nconsole.log(import.meta.url);  // file:///path/to/module.js\n\n// app.js\nimport "./module.js";',
  hint: 'import.meta.url gives the full URL of the module.'
},
{
  id: 'js_modules_23',
  topicId: 'js_modules',
  question: 'Export async function from module.',
  mathSolution: 'Async functions can be exported like regular functions.',
  codeSolution: '// api.js\nexport async function fetchUser(id) {\n    const response = await fetch(`/api/users/${id}`);\n    return response.json();\n}\n\n// app.js\nimport { fetchUser } from "./api.js";\nconst user = await fetchUser(1);\nconsole.log(user);',
  hint: 'Async exports work seamlessly with async/await.'
},
{
  id: 'js_modules_24',
  topicId: 'js_modules',
  question: 'Use export with generator function.',
  mathSolution: 'Generator functions can be exported.',
  codeSolution: '// counter.js\nexport function* idGenerator() {\n    let id = 1;\n    while (true) {\n        yield id++;\n    }\n}\n\n// app.js\nimport { idGenerator } from "./counter.js";\nconst gen = idGenerator();\nconsole.log(gen.next().value);  // 1\nconsole.log(gen.next().value);  // 2\nconsole.log(gen.next().value);  // 3',
  hint: 'Generator functions maintain state across yields.'
},
{
  id: 'js_modules_25',
  topicId: 'js_modules',
  question: 'Module circular dependency handling.',
  mathSolution: 'ES modules handle circular dependencies correctly.',
  codeSolution: '// a.js\nimport { b } from "./b.js";\nexport const a = "A";\nconsole.log("a.js", b);\n\n// b.js\nimport { a } from "./a.js";\nexport const b = "B";\nconsole.log("b.js", a);\n\n// app.js\nimport "./a.js";\n// Output shows modules handle circular references',
  hint: 'ES modules automatically handle circular dependencies.'
},
{
  id: 'js_modules_26',
  topicId: 'js_modules',
  question: 'Re-export from another module with export * from.',
  mathSolution: 'Export all named exports from another module.',
  codeSolution: '// math.js\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\n\n// index.js\nexport * from "./math.js";\n\n// app.js\nimport { add, subtract } from "./index.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(5, 3)); // 2',
  hint: 'export * from re-exports everything except default.'
},
{
  id: 'js_modules_27',
  topicId: 'js_modules',
  question: 'Re-export from module with alias.',
  mathSolution: 'Combine re-export with renaming.',
  codeSolution: '// a.js\nexport function originalName() { return "original"; }\n\n// index.js\nexport { originalName as renamed } from "./a.js";\n\n// app.js\nimport { renamed } from "./index.js";\nconsole.log(renamed());  // original',
  hint: 'Re-exports can also rename the exported value.'
},
{
  id: 'js_modules_28',
  topicId: 'js_modules',
  question: 'Module evaluation and caching.',
  mathSolution: 'Modules are evaluated only once, cached after first import.',
  codeSolution: '// counter.js\nexport let count = 0;\nexport function increment() { count++; }\n\n// app.js\nimport { count, increment } from "./counter.js";\nconsole.log(count);  // 0\nincrement();\n\n// another.js\nimport { count } from "./counter.js";\nconsole.log(count);  // 1 (cached, not 0)',
  hint: 'Module instances are shared across all imports.'
},
{
  id: 'js_modules_29',
  topicId: 'js_modules',
  question: 'Use import.meta.resolve() to resolve module specifiers.',
  mathSolution: 'Resolve module specifiers to full URLs.',
  codeSolution: '// app.js\nconst moduleURL = import.meta.resolve("./utils.js");\nconsole.log(moduleURL);  // Full URL to utils.js',
  hint: 'import.meta.resolve() is experimental in some environments.'
},
{
  id: 'js_modules_30',
  topicId: 'js_modules',
  question: 'Create module that exports promise.',
  mathSolution: 'Export a promise that resolves to module content.',
  codeSolution: '// data.js\nexport const dataPromise = fetch("/api/data").then(r => r.json());\n\n// app.js\nimport { dataPromise } from "./data.js";\nconst data = await dataPromise;\nconsole.log(data);',
  hint: 'Promises can be exported directly from modules.'
},
{
  id: 'js_modules_31',
  topicId: 'js_modules',
  question: 'Export const enum pattern.',
  mathSolution: 'Export constant objects as enum substitutes.',
  codeSolution: '// colors.js\nexport const Colors = {\n    RED: "red",\n    GREEN: "green",\n    BLUE: "blue"\n};\n\n// app.js\nimport { Colors } from "./colors.js";\nconsole.log(Colors.RED);   // red\nconsole.log(Colors.GREEN); // green',
  hint: 'Use frozen objects for enum-like constants.'
},
{
  id: 'js_modules_32',
  topicId: 'js_modules',
  question: 'Import JSON file with dynamic import.',
  mathSolution: 'Load JSON file dynamically using import().',
  codeSolution: '// config.json\n// { "apiUrl": "https://api.example.com", "timeout": 5000 }\n\n// app.js\nconst config = await import("./config.json", { assert: { type: "json" } });\nconsole.log(config.default.apiUrl);  // https://api.example.com',
  hint: 'Dynamic import works with JSON import assertions.'
},
{
  id: 'js_modules_33',
  topicId: 'js_modules',
  question: 'Module scope isolation (variables not global).',
  mathSolution: 'Module variables are scoped to module, not global.',
  codeSolution: '// module.js\nconst privateVar = "I am private";\nexport const publicVar = "I am public";\n\n// app.js\nimport { publicVar } from "./module.js";\nconsole.log(publicVar);     // I am public\n// console.log(privateVar);  // ReferenceError',
  hint: 'Top-level variables in modules are module-scoped.'
},
{
  id: 'js_modules_34',
  topicId: 'js_modules',
  question: 'Use export with destructuring.',
  mathSolution: 'Export destructured values.',
  codeSolution: '// config.js\nconst config = {\n    apiUrl: "https://api.example.com",\n    timeout: 5000,\n    retries: 3\n};\n\nexport const { apiUrl, timeout, retries } = config;\n\n// app.js\nimport { apiUrl, timeout, retries } from "./config.js";\nconsole.log(apiUrl);  // https://api.example.com',
  hint: 'Destructuring exports makes selective import easier.'
},
{
  id: 'js_modules_35',
  topicId: 'js_modules',
  question: 'Export different types mixed together.',
  mathSolution: 'Module can export functions, classes, variables, etc.',
  codeSolution: '// toolkit.js\nexport const VERSION = "1.0.0";\nexport function helper() { return "help"; }\nexport class Tool {\n    use() { return "tool used"; }\n}\nexport default { name: "Toolkit" };\n\n// app.js\nimport toolkit, { VERSION, helper, Tool } from "./toolkit.js";\nconsole.log(VERSION);          // 1.0.0\nconsole.log(helper());         // help\nconsole.log(new Tool().use()); // tool used\nconsole.log(toolkit.name);     // Toolkit',
  hint: 'Modules can mix export types for flexible APIs.'
},
{
  id: 'js_modules_36',
  topicId: 'js_modules',
  question: 'Conditional export using ternary pattern.',
  mathSolution: 'Choose what to export based on environment.',
  codeSolution: '// platform.js\nconst isBrowser = typeof window !== "undefined";\n\nexport const storage = isBrowser \n    ? { get: (k) => localStorage.getItem(k), set: (k, v) => localStorage.setItem(k, v) }\n    : { get: (k) => null, set: (k, v) => {} };\n\n// app.js\nimport { storage } from "./platform.js";\nstorage.set("key", "value");',
  hint: 'Conditional exports adapt to different environments.'
},
{
  id: 'js_modules_37',
  topicId: 'js_modules',
  question: 'Module augmentation pattern.',
  mathSolution: 'Extend existing modules with additional exports.',
  codeSolution: '// core.js\nexport class Core {\n    base() { return "base"; }\n}\n\n// extended.js\nimport { Core } from "./core.js";\n\nexport class Extended extends Core {\n    extended() { return "extended"; }\n}\nexport const extendedVersion = "2.0.0";\n\n// app.js\nimport { Extended, extendedVersion } from "./extended.js";\nconst obj = new Extended();\nconsole.log(obj.base());      // base\nconsole.log(obj.extended());  // extended\nconsole.log(extendedVersion); // 2.0.0',
  hint: 'Module augmentation builds upon existing modules.'
},
{
  id: 'js_modules_38',
  topicId: 'js_modules',
  question: 'Lazy load module on user interaction.',
  mathSolution: 'Use dynamic import in event handler.',
  codeSolution: '// heavy-widget.js\nexport function renderWidget() {\n    console.log("Widget rendered");\n    return "<div>Widget</div>";\n}\n\n// app.js\ndocument.getElementById("loadBtn").addEventListener("click", async () => {\n    const { renderWidget } = await import("./heavy-widget.js");\n    renderWidget();\n});',
  hint: 'Dynamic import reduces initial load time.'
},
{
  id: 'js_modules_39',
  topicId: 'js_modules',
  question: 'Module initialization function pattern.',
  mathSolution: 'Export initialization function for async setup.',
  codeSolution: '// database.js\nlet initialized = false;\nlet db;\n\nexport async function initDatabase() {\n    if (!initialized) {\n        db = await openConnection();\n        initialized = true;\n    }\n    return db;\n}\n\nasync function openConnection() {\n    return { connected: true };\n}\n\nexport async function query(sql) {\n    const conn = await initDatabase();\n    return conn.query(sql);\n}\n\n// app.js\nimport { query } from "./database.js";\nconst result = await query("SELECT * FROM users");',
  hint: 'Initialize expensive resources when first needed.'
},
{
  id: 'js_modules_40',
  topicId: 'js_modules',
  question: 'Deprecation warning for exported function.',
  mathSolution: 'Add warning when deprecated export is used.',
  codeSolution: '// api.js\nexport const oldApi = (function() {\n    console.warn("oldApi is deprecated, use newApi instead");\n    return function(...args) {\n        // Legacy implementation\n        return args.reduce((a, b) => a + b, 0);\n    };\n})();\n\nexport function newApi(...args) {\n    return args.reduce((a, b) => a + b, 0);\n}\n\n// app.js\nimport { oldApi } from "./api.js";\noldApi(1, 2, 3);  // Warning shown',
  hint: 'Warn users about deprecated APIs gracefully.'
},
{
  id: 'js_modules_41',
  topicId: 'js_modules',
  question: 'Versioned module exports.',
  mathSolution: 'Export versioned APIs for backward compatibility.',
  codeSolution: '// calculator-v1.js\nexport const addV1 = (a, b) => a + b;\nexport const multiplyV1 = (a, b) => a * b;\n\n// calculator-v2.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\nexport const subtract = (a, b) => a - b;\n\n// index.js\nexport * as v1 from "./calculator-v1.js";\nexport * as v2 from "./calculator-v2.js";\n\n// app.js\nimport { v1, v2 } from "./index.js";\nconsole.log(v1.addV1(5, 3));   // 8\nconsole.log(v2.add(5, 3));     // 8\nconsole.log(v2.subtract(5, 3)); // 2',
  hint: 'Version namespaces allow multiple versions simultaneously.'
},
{
  id: 'js_modules_42',
  topicId: 'js_modules',
  question: 'Module hot reload pattern (development).',
  mathSolution: 'Handle module updates without refreshing page.',
  codeSolution: '// module.js\nexport let data = { value: 1 };\nexport function updateData(newVal) { data.value = newVal; }\n\n// app.js\nimport { data, updateData } from "./module.js";\n\nif (import.meta.hot) {\n    import.meta.hot.accept("./module.js", (newModule) => {\n        console.log("Module updated");\n        // Update references\n        updateData = newModule.updateData;\n    });\n}',
  hint: 'HMR enables live reload of modules during development.'
},
{
  id: 'js_modules_43',
  topicId: 'js_modules',
  question: 'Export from node_modules package.',
  mathSolution: 'Re-export external package for convenience.',
  codeSolution: '// libraries.js\nexport { v4 as uuid } from "uuid";\nexport { default as axios } from "axios";\nexport { format, parse } from "date-fns";\n\n// app.js\nimport { uuid, axios, format } from "./libraries.js";\nconst id = uuid();\nconst response = await axios.get("/api/data");\nconsole.log(format(new Date(), "yyyy-MM-dd"));',
  hint: 'Central re-exports simplify dependency management.'
},
{
  id: 'js_modules_44',
  topicId: 'js_modules',
  question: 'Export with type checking using JSDoc.',
  mathSolution: 'Add JSDoc comments to exported functions.',
  codeSolution: '// math.js\n/**\n * Adds two numbers together\n * @param {number} a - First number\n * @param {number} b - Second number\n * @returns {number} Sum of a and b\n */\nexport function add(a, b) {\n    return a + b;\n}\n\n// app.js\nimport { add } from "./math.js";\n// IDE will show type information from JSDoc',
  hint: 'JSDoc provides type information for exported APIs.'
},
{
  id: 'js_modules_45',
  topicId: 'js_modules',
  question: 'Export web worker module.',
  mathSolution: 'Create and export worker module code.',
  codeSolution: '// worker.js\nexport function createWorker() {\n    return new Worker(new URL("./task-worker.js", import.meta.url));\n}\n\n// task-worker.js\nself.onmessage = (e) => {\n    const result = e.data * 2;\n    self.postMessage(result);\n};\n\n// app.js\nimport { createWorker } from "./worker.js";\nconst worker = createWorker();\nworker.onmessage = (e) => console.log(e.data);\nworker.postMessage(21);  // Logs 42',
  hint: 'Modules can create Web Workers with proper URLs.'
},
{
  id: 'js_modules_46',
  topicId: 'js_modules',
  question: 'Module exporting Web Components.',
  mathSolution: 'Define and export custom elements.',
  codeSolution: '// custom-button.js\nexport class CustomButton extends HTMLElement {\n    constructor() {\n        super();\n        this.innerHTML = `<button>Click me</button>`;\n    }\n}\n\nif (!customElements.get("custom-button")) {\n    customElements.define("custom-button", CustomButton);\n}\n\n// app.js\nimport "./custom-button.js";\n// <custom-button></custom-button> works in HTML',
  hint: 'Web Components can be distributed as modules.'
},
{
  id: 'js_modules_47',
  topicId: 'js_modules',
  question: 'Module for singleton pattern.',
  mathSolution: 'Module instance as singleton across imports.',
  codeSolution: '// store.js\nclass Store {\n    constructor() {\n        this.data = {};\n    }\n    set(key, value) { this.data[key] = value; }\n    get(key) { return this.data[key]; }\n}\n\nexport const store = new Store();\n\n// app.js\nimport { store } from "./store.js";\nstore.set("user", "John");\n\n// another.js\nimport { store } from "./store.js";\nconsole.log(store.get("user"));  // John (same instance)',
  hint: 'Module exports create natural singletons.'
},
{
  id: 'js_modules_48',
  topicId: 'js_modules',
  question: 'Export constant frozen object.',
  mathSolution: 'Freeze exported object to prevent modification.',
  codeSolution: '// config.js\nexport const CONFIG = Object.freeze({\n    API_URL: "https://api.example.com",\n    TIMEOUT: 5000,\n    RETRY_COUNT: 3\n});\n\n// app.js\nimport { CONFIG } from "./config.js";\nconsole.log(CONFIG.API_URL);  // https://api.example.com\n// CONFIG.API_URL = "other";   // TypeError in strict mode',
  hint: 'Object.freeze makes exported constants truly immutable.'
},
{
  id: 'js_modules_49',
  topicId: 'js_modules',
  question: 'Create module with sub-modules pattern.',
  mathSolution: 'Modularize functionality into sub-modules.',
  codeSolution: '// math/index.js\nexport { add } from "./add.js";\nexport { subtract } from "./subtract.js";\nexport { multiply } from "./multiply.js";\n\n// math/add.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add, subtract, multiply } from "./math/index.js";\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(5, 3)); // 2\nconsole.log(multiply(5, 3)); // 15',
  hint: 'Sub-modules organize large codebases effectively.'
},
{
  id: 'js_modules_50',
  topicId: 'js_modules',
  question: 'Build complete module system demonstration.',
  mathSolution: 'Combine multiple module patterns in a real example.',
  codeSolution: '// ----- Logger Module -----\n// logger.js\nexport const LOG_LEVELS = {\n    INFO: "INFO",\n    WARN: "WARN",\n    ERROR: "ERROR"\n};\n\nlet logLevel = LOG_LEVELS.INFO;\n\nexport function setLogLevel(level) { logLevel = level; }\n\nexport function log(level, message) {\n    if (level === LOG_LEVELS.ERROR || level === logLevel) {\n        console.log(`[${level}] ${message}`);\n    }\n}\n\n// ----- API Module -----\n// api.js\nimport { log, LOG_LEVELS } from "./logger.js";\n\nconst API_BASE = "https://jsonplaceholder.typicode.com";\n\nexport async function fetchPosts() {\n    log(LOG_LEVELS.INFO, "Fetching posts...");\n    try {\n        const response = await fetch(`${API_BASE}/posts`);\n        const data = await response.json();\n        log(LOG_LEVELS.INFO, `Fetched ${data.length} posts`);\n        return data;\n    } catch (error) {\n        log(LOG_LEVELS.ERROR, `Failed: ${error.message}`);\n        throw error;\n    }\n}\n\nexport async function fetchUser(id) {\n    log(LOG_LEVELS.INFO, `Fetching user ${id}...`);\n    const response = await fetch(`${API_BASE}/users/${id}`);\n    return response.json();\n}\n\n// ----- User Module -----\n// user-service.js\nimport { fetchUser } from "./api.js";\nimport { log, LOG_LEVELS, setLogLevel } from "./logger.js";\n\nexport { setLogLevel } from "./logger.js";\n\nlet currentUser = null;\n\nexport async function loadUser(id) {\n    currentUser = await fetchUser(id);\n    log(LOG_LEVELS.INFO, `User loaded: ${currentUser.name}`);\n    return currentUser;\n}\n\nexport function getCurrentUser() {\n    return currentUser;\n}\n\nexport function clearUser() {\n    currentUser = null;\n    log(LOG_LEVELS.INFO, "User cleared");\n}\n\n// ----- Default Export -----\n// index.js\nexport { LOG_LEVELS, setLogLevel, log } from "./logger.js";\nexport { fetchPosts, fetchUser } from "./api.js";\nexport { loadUser, getCurrentUser, clearUser } from "./user-service.js";\n\n// ----- Main App -----\n// app.js\nimport {\n    loadUser,\n    getCurrentUser,\n    fetchPosts,\n    setLogLevel,\n    LOG_LEVELS\n} from "./index.js";\n\n// Set log level to see all messages\nsetLogLevel(LOG_LEVELS.INFO);\n\nasync function main() {\n    console.log("=== App Started ===");\n    \n    // Load user\n    const user = await loadUser(1);\n    console.log("Current user:", getCurrentUser().name);\n    \n    // Fetch posts\n    const posts = await fetchPosts();\n    console.log(`First post: ${posts[0].title}`);\n}\n\nmain().catch(console.error);\n\n// Export app functions\n// Other modules can import from this entry point',
  hint: 'Complete module system with logging, API, and user management.'
}
);