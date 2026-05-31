QuizData.questions.push(
{
  id: 'js_error_1',
  topicId: 'js_error',
  question: 'Use try-catch block to handle runtime errors.',
  mathSolution: 'try block contains code that may throw, catch handles errors.',
  codeSolution: 'try {\n    const result = 10 / 0;\n    console.log(result);  // Infinity (no error)\n    throw new Error("Custom error");\n} catch (error) {\n    console.log("Caught:", error.message);  // Caught: Custom error\n}',
  hint: 'Wrap risky code in try block, handle errors in catch.'
},
{
  id: 'js_error_2',
  topicId: 'js_error',
  question: 'Use try-catch-finally to always execute cleanup code.',
  mathSolution: 'finally block runs regardless of error occurrence.',
  codeSolution: 'try {\n    console.log("Trying...");\n    throw new Error("Something went wrong");\n} catch (error) {\n    console.log("Caught:", error.message);\n} finally {\n    console.log("Cleanup always runs");  // Always executes\n}',
  hint: 'Use finally for cleanup code that must run always.'
},
{
  id: 'js_error_3',
  topicId: 'js_error',
  question: 'Throw a generic Error object.',
  mathSolution: 'Use throw new Error() to create and throw error.',
  codeSolution: 'function validateAge(age) {\n    if (age < 0) {\n        throw new Error("Age cannot be negative");\n    }\n    if (age < 18) {\n        throw new Error("Must be 18 or older");\n    }\n    return "Valid age";\n}\n\ntry {\n    console.log(validateAge(-5));\n} catch (error) {\n    console.log(error.message);  // Age cannot be negative\n}',
  hint: 'Use throw to create custom error conditions.'
},
{
  id: 'js_error_4',
  topicId: 'js_error',
  question: 'Create custom error class extending Error.',
  mathSolution: 'Extend Error class to create custom error types.',
  codeSolution: 'class ValidationError extends Error {\n    constructor(message, field) {\n        super(message);\n        this.name = "ValidationError";\n        this.field = field;\n    }\n}\n\nclass NetworkError extends Error {\n    constructor(message, statusCode) {\n        super(message);\n        this.name = "NetworkError";\n        this.statusCode = statusCode;\n    }\n}\n\ntry {\n    throw new ValidationError("Invalid email format", "email");\n} catch (error) {\n    if (error instanceof ValidationError) {\n        console.log(`${error.name}: ${error.message} (field: ${error.field})`);\n    }\n}',
  hint: 'Custom error classes help differentiate error types.'
},
{
  id: 'js_error_5',
  topicId: 'js_error',
  question: 'Catch specific error types using instanceof.',
  mathSolution: 'Use instanceof to check error type in catch block.',
  codeSolution: 'class DatabaseError extends Error {}\nclass AuthError extends Error {}\n\ntry {\n    // Simulate different errors\n    throw new DatabaseError("Connection failed");\n} catch (error) {\n    if (error instanceof DatabaseError) {\n        console.log("DB Error:", error.message);\n    } else if (error instanceof AuthError) {\n        console.log("Auth Error:", error.message);\n    } else {\n        console.log("Unknown error:", error.message);\n    }\n}',
  hint: 'Use instanceof to handle different error types differently.'
},
{
  id: 'js_error_6',
  topicId: 'js_error',
  question: 'Rethrow error after partial handling.',
  mathSolution: 'Catch, log, then throw again for upper level.',
  codeSolution: 'function processData(data) {\n    try {\n        // Attempt processing\n        if (!data) throw new Error("No data provided");\n        return data.toUpperCase();\n    } catch (error) {\n        console.log("Logging error in processData:", error.message);\n        throw error;  // Rethrow for caller to handle\n    }\n}\n\ntry {\n    processData(null);\n} catch (error) {\n    console.log("Upper level caught:", error.message);\n}',
  hint: 'Rethrow when error needs handling at multiple levels.'
},
{
  id: 'js_error_7',
  topicId: 'js_error',
  question: 'Handle synchronous errors in async/await with try-catch.',
  mathSolution: 'Wrap await calls in try-catch blocks.',
  codeSolution: 'async function fetchData() {\n    try {\n        const response = await fetch("https://invalid.url");\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.log("Fetch failed:", error.message);\n        return null;\n    }\n}\n\nfetchData();',
  hint: 'Always use try-catch with await to handle promise rejections.'
},
{
  id: 'js_error_8',
  topicId: 'js_error',
  question: 'Catch errors in Promise chains with .catch().',
  mathSolution: 'Use .catch() at end of promise chain.',
  codeSolution: 'Promise.resolve("data")\n    .then(data => {\n        throw new Error("Processing failed");\n    })\n    .then(result => console.log(result))\n    .catch(error => {\n        console.log("Caught in chain:", error.message);\n    });',
  hint: 'A single .catch() at chain end handles all errors.'
},
{
  id: 'js_error_9',
  topicId: 'js_error',
  question: 'Handle unhandled promise rejections globally.',
  mathSolution: 'Use unhandledrejection event listener.',
  codeSolution: 'window.addEventListener("unhandledrejection", (event) => {\n    console.log("Unhandled rejection:", event.reason);\n    event.preventDefault();  // Prevent console error\n});\n\n// This rejection will be caught by the handler\nPromise.reject("Something failed");',
  hint: 'Global handler prevents unhandled rejection crashes.'
},
{
  id: 'js_error_10',
  topicId: 'js_error',
  question: 'Handle uncaught errors globally in Node.js.',
  mathSolution: 'Use process.on("uncaughtException") handler.',
  codeSolution: '// Node.js only\n// process.on("uncaughtException", (error) => {\n//     console.log("Uncaught exception:", error.message);\n//     process.exit(1);  // Exit after logging\n// });\n// \n// throw new Error("Something broke");',
  hint: 'Global exception handling prevents crashes but should be used sparingly.'
},
{
  id: 'js_error_11',
  topicId: 'js_error',
  question: 'Access error stack trace for debugging.',
  mathSolution: 'Error objects have stack property with call stack.',
  codeSolution: 'function functionA() {\n    functionB();\n}\n\nfunction functionB() {\n    throw new Error("Error in functionB");\n}\n\ntry {\n    functionA();\n} catch (error) {\n    console.log("Message:", error.message);\n    console.log("Stack trace:\\n", error.stack);\n}',
  hint: 'error.stack shows the call chain leading to error.'
},
{
  id: 'js_error_12',
  topicId: 'js_error',
  question: 'Create error with specific name property.',
  mathSolution: 'Set name property to identify error type.',
  codeSolution: 'const error = new Error("Invalid input");\nerror.name = "InputError";\n\ntry {\n    throw error;\n} catch (err) {\n    console.log(err.name);      // InputError\n    console.log(err.message);   // Invalid input\n}',
  hint: 'Custom name helps identify error types without classes.'
},
{
  id: 'js_error_13',
  topicId: 'js_error',
  question: 'Handle TypeError when accessing undefined property.',
  mathSolution: 'Catch TypeError and provide fallback.',
  codeSolution: 'const obj = null;\n\ntry {\n    console.log(obj.name.toUpperCase());  // TypeError\n} catch (error) {\n    if (error instanceof TypeError) {\n        console.log("Property access error:", error.message);\n        console.log("Using default value instead");\n    }\n}',
  hint: 'TypeError occurs when accessing properties on null/undefined.'
},
{
  id: 'js_error_14',
  topicId: 'js_error',
  question: 'Handle RangeError for invalid numeric ranges.',
  mathSolution: 'Catch RangeError when values exceed limits.',
  codeSolution: 'function factorial(n) {\n    if (n < 0) {\n        throw new RangeError("Factorial not defined for negative numbers");\n    }\n    if (n > 170) {\n        throw new RangeError("Number too large, would cause Infinity");\n    }\n    let result = 1;\n    for (let i = 2; i <= n; i++) result *= i;\n    return result;\n}\n\ntry {\n    console.log(factorial(-5));\n} catch (error) {\n    if (error instanceof RangeError) {\n        console.log("Range error:", error.message);\n    }\n}',
  hint: 'RangeError indicates numeric value out of allowed range.'
},
{
  id: 'js_error_15',
  topicId: 'js_error',
  question: 'Handle ReferenceError for undefined variables.',
  mathSolution: 'Catch ReferenceError when variable doesn\'t exist.',
  codeSolution: 'try {\n    console.log(undefinedVariable);  // ReferenceError\n} catch (error) {\n    if (error instanceof ReferenceError) {\n        console.log("Variable not defined:", error.message);\n    }\n}\n\n// Better: Use typeof check\nif (typeof someVariable !== "undefined") {\n    console.log(someVariable);\n}',
  hint: 'ReferenceError occurs when accessing undeclared variables.'
},
{
  id: 'js_error_16',
  topicId: 'js_error',
  question: 'Handle SyntaxError from eval() or JSON.parse().',
  mathSolution: 'Catch SyntaxError when parsing invalid JSON or code.',
  codeSolution: 'function safeParseJSON(jsonString) {\n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        if (error instanceof SyntaxError) {\n            console.log("Invalid JSON syntax:", error.message);\n            return null;\n        }\n        throw error;\n    }\n}\n\nsafeParseJSON(\'{"name": "John"\');  // Missing closing brace\nsafeParseJSON(\'{"name": "John"}\');  // Works',
  hint: 'Always catch SyntaxError when parsing JSON or using eval().'
},
{
  id: 'js_error_17',
  topicId: 'js_error',
  question: 'Handle URIError from encodeURIComponent() with malformed URI.',
  mathSolution: 'URIError occurs with malformed URI strings.',
  codeSolution: 'function safeEncodeURI(str) {\n    try {\n        return encodeURIComponent(str);\n    } catch (error) {\n        if (error instanceof URIError) {\n            console.log("Malformed URI:", error.message);\n            return null;\n        }\n        throw error;\n    }\n}\n\nconsole.log(safeEncodeURI("hello world"));  // hello%20world\n// Some malformed strings can cause URIError',
  hint: 'URIError occurs with invalid character sequences in URIs.'
},
{
  id: 'js_error_18',
  topicId: 'js_error',
  question: 'Use optional chaining (?.) to avoid TypeError.',
  mathSolution: 'Optional chaining returns undefined instead of throwing.',
  codeSolution: 'const user = null;\n\n// Without optional chaining - throws TypeError\n// console.log(user.name);\n\n// With optional chaining - returns undefined\nconsole.log(user?.name);  // undefined\n\n// Chaining multiple levels\nconst data = { profile: { address: { city: "NYC" } } };\nconsole.log(data?.profile?.address?.city);     // NYC\nconsole.log(data?.profile?.address?.zip);      // undefined\nconsole.log(data?.nonexistent?.property);      // undefined',
  hint: 'Optional chaining prevents TypeError from null/undefined access.'
},
{
  id: 'js_error_19',
  topicId: 'js_error',
  question: 'Use nullish coalescing (??) for default values.',
  mathSolution: '?? provides default for null/undefined values.',
  codeSolution: 'function getUsername(user) {\n    return user?.name ?? "Guest";\n}\n\nconsole.log(getUsername(null));              // Guest\nconsole.log(getUsername(undefined));         // Guest\nconsole.log(getUsername({ name: "John" }));  // John\nconsole.log(getUsername({ name: "" }));      // "" (empty string not nullish)',
  hint: '?? only checks for null or undefined, not other falsy values.'
},
{
  id: 'js_error_20',
  topicId: 'js_error',
  question: 'Use try-catch with finally for resource cleanup.',
  mathSolution: 'finally ensures resources are released regardless of error.',
  codeSolution: 'let fileHandle = null;\n\nfunction readFile() {\n    try {\n        fileHandle = openFile();  // Simulated file open\n        console.log("File opened");\n        // Process file\n        if (errorCondition) throw new Error("Processing error");\n        return fileHandle.read();\n    } catch (error) {\n        console.log("Error:", error.message);\n        return null;\n    } finally {\n        if (fileHandle) {\n            fileHandle.close();\n            console.log("File closed");\n        }\n    }\n}\n\nfunction openFile() { return { close: () => {}, read: () => "data" }; }\nconst errorCondition = true;\nreadFile();',
  hint: 'finally is perfect for closing files, DB connections, etc.'
},
{
  id: 'js_error_21',
  topicId: 'js_error',
  question: 'Handle async errors with .catch() on promise.',
  mathSolution: 'Attach .catch() to handle promise rejections.',
  codeSolution: 'async function fetchUser(id) {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n}\n\n// Handling with .catch()\nfetchUser(999)\n    .then(user => console.log(user))\n    .catch(error => console.log("Promise catch:", error.message));',
  hint: 'Always attach .catch() to promises or use try-catch with await.'
},
{
  id: 'js_error_22',
  topicId: 'js_error',
  question: 'Handle errors in Promise.all() gracefully.',
  mathSolution: 'Use Promise.allSettled() or handle rejection separately.',
  codeSolution: 'const promises = [\n    Promise.resolve(1),\n    Promise.reject("Error in promise 2"),\n    Promise.resolve(3)\n];\n\n// Promise.all fails fast\nPromise.all(promises)\n    .then(results => console.log(results))\n    .catch(error => console.log("Promise.all failed:", error));\n\n// Promise.allSettled never fails\nPromise.allSettled(promises)\n    .then(results => {\n        const successful = results.filter(r => r.status === "fulfilled");\n        const failed = results.filter(r => r.status === "rejected");\n        console.log("Successful:", successful.length);\n        console.log("Failed:", failed.length);\n    });',
  hint: 'Use allSettled when you need all results regardless of failures.'
},
{
  id: 'js_error_23',
  topicId: 'js_error',
  question: 'Handle errors in async/await with multiple try-catch blocks.',
  mathSolution: 'Use separate try-catch for different async operations.',
  codeSolution: 'async function processUserData(userId) {\n    let user, posts;\n    \n    try {\n        user = await fetch(`/api/users/${userId}`).then(r => r.json());\n    } catch (error) {\n        console.log("Failed to fetch user:", error.message);\n        return null;\n    }\n    \n    try {\n        posts = await fetch(`/api/users/${userId}/posts`).then(r => r.json());\n    } catch (error) {\n        console.log("Failed to fetch posts, but user data available");\n        posts = [];\n    }\n    \n    return { user, posts };\n}\n\nprocessUserData(1);',
  hint: 'Separate try-catch blocks allow partial success.'
},
{
  id: 'js_error_24',
  topicId: 'js_error',
  question: 'Add custom properties to error objects.',
  mathSolution: 'Attach additional data to error for better debugging.',
  codeSolution: 'function validateUser(user) {\n    const errors = [];\n    \n    if (!user.name) {\n        const error = new Error("Name is required");\n        error.code = "MISSING_NAME";\n        error.field = "name";\n        error.statusCode = 400;\n        throw error;\n    }\n    \n    if (user.age < 0) {\n        const error = new Error("Invalid age");\n        error.code = "INVALID_AGE";\n        error.field = "age";\n        error.value = user.age;\n        throw error;\n    }\n}\n\ntry {\n    validateUser({ age: -5 });\n} catch (error) {\n    console.log(`Error ${error.code}: ${error.message}`);\n    console.log(`Field: ${error.field}, Value: ${error.value}`);\n}',
  hint: 'Add custom properties like code, field, statusCode to errors.'
},
{
  id: 'js_error_25',
  topicId: 'js_error',
  question: 'Create error wrapper for API responses.',
  mathSolution: 'Wrap API errors with status codes and messages.',
  codeSolution: 'class APIError extends Error {\n    constructor(message, statusCode, data = null) {\n        super(message);\n        this.name = "APIError";\n        this.statusCode = statusCode;\n        this.data = data;\n    }\n}\n\nasync function apiRequest(url, options) {\n    const response = await fetch(url, options);\n    \n    if (!response.ok) {\n        const errorData = await response.json().catch(() => ({}));\n        throw new APIError(\n            errorData.message || `HTTP ${response.status}`,\n            response.status,\n            errorData\n        );\n    }\n    \n    return response.json();\n}\n\n// Usage\n// try {\n//     await apiRequest("/api/users", {});\n// } catch (error) {\n//     if (error instanceof APIError) {\n//         console.log(`API Error ${error.statusCode}: ${error.message}`);\n//     }\n// }',
  hint: 'Wrap API errors with status codes for better handling.'
},
{
  id: 'js_error_26',
  topicId: 'js_error',
  question: 'Validate function parameters and throw TypeError.',
  mathSolution: 'Check parameter types and throw descriptive errors.',
  codeSolution: 'function calculateArea(width, height) {\n    if (typeof width !== "number") {\n        throw new TypeError(`Width must be a number, got ${typeof width}`);\n    }\n    if (typeof height !== "number") {\n        throw new TypeError(`Height must be a number, got ${typeof height}`);\n    }\n    if (width <= 0) {\n        throw new RangeError(`Width must be positive, got ${width}`);\n    }\n    if (height <= 0) {\n        throw new RangeError(`Height must be positive, got ${height}`);\n    }\n    \n    return width * height;\n}\n\ntry {\n    calculateArea("10", 5);\n} catch (error) {\n    console.log(error.name + ":", error.message);\n}',
  hint: 'Validate inputs early and throw descriptive errors.'
},
{
  id: 'js_error_27',
  topicId: 'js_error',
  question: 'Use assert function for invariant checking.',
  mathSolution: 'Create assertion function to check conditions.',
  codeSolution: 'function assert(condition, message, ErrorClass = Error) {\n    if (!condition) {\n        throw new ErrorClass(message);\n    }\n}\n\nfunction withdrawMoney(balance, amount) {\n    assert(\n        typeof balance === "number",\n        "Balance must be a number",\n        TypeError\n    );\n    assert(\n        typeof amount === "number",\n        "Amount must be a number",\n        TypeError\n    );\n    assert(\n        amount > 0,\n        "Amount must be positive",\n        RangeError\n    );\n    assert(\n        balance >= amount,\n        "Insufficient funds",\n        Error\n    );\n    \n    return balance - amount;\n}\n\ntry {\n    withdrawMoney(100, 200);\n} catch (error) {\n    console.log(error.message);  // Insufficient funds\n}',
  hint: 'Assertion functions make invariant checking concise.'
},
{
  id: 'js_error_28',
  topicId: 'js_error',
  question: 'Handle errors in event listeners.',
  mathSolution: 'Wrap event handler code in try-catch.',
  codeSolution: '// HTML: <button id="myButton">Click</button>\nconst button = document.getElementById("myButton");\n\nbutton.addEventListener("click", (event) => {\n    try {\n        // Risky operation\n        const data = JSON.parse(localStorage.getItem("config"));\n        processData(data);\n    } catch (error) {\n        console.log("Error in click handler:", error.message);\n        // Show user-friendly message\n        button.textContent = "Error occurred";\n    }\n});\n\nfunction processData(data) {\n    if (!data) throw new Error("No data found");\n    console.log(data);\n}',
  hint: 'Always catch errors in event handlers to prevent silent failures.'
},
{
  id: 'js_error_29',
  topicId: 'js_error',
  question: 'Handle errors in setTimeout and setInterval.',
  mathSolution: 'Wrap callback code in try-catch.',
  codeSolution: '// setTimeout with error handling\nsetTimeout(() => {\n    try {\n        // Code that might throw\n        throw new Error("Async error in timeout");\n    } catch (error) {\n        console.log("Caught in timeout:", error.message);\n    }\n}, 1000);\n\n// setInterval with error handling\nconst interval = setInterval(() => {\n    try {\n        console.log("Tick");\n        // Simulate occasional error\n        if (Math.random() < 0.3) {\n            throw new Error("Random error");\n        }\n    } catch (error) {\n        console.log("Error in interval:", error.message);\n        // Interval continues despite error\n    }\n}, 1000);\n\n// Clear after 5 seconds\nsetTimeout(() => clearInterval(interval), 5000);',
  hint: 'Async callbacks need internal try-catch as errors don\'t bubble.'
},
{
  id: 'js_error_30',
  topicId: 'js_error',
  question: 'Implement retry logic with error handling.',
  mathSolution: 'Retry failed operations with exponential backoff.',
  codeSolution: 'async function retryOperation(operation, maxRetries = 3, delay = 1000) {\n    let lastError;\n    \n    for (let attempt = 1; attempt <= maxRetries; attempt++) {\n        try {\n            console.log(`Attempt ${attempt}/${maxRetries}`);\n            return await operation();\n        } catch (error) {\n            lastError = error;\n            console.log(`Attempt ${attempt} failed:`, error.message);\n            \n            if (attempt === maxRetries) break;\n            \n            const waitTime = delay * Math.pow(2, attempt - 1);\n            console.log(`Waiting ${waitTime}ms before retry...`);\n            await new Promise(resolve => setTimeout(resolve, waitTime));\n        }\n    }\n    \n    throw new Error(`All ${maxRetries} attempts failed. Last error: ${lastError.message}`);\n}\n\nlet attempts = 0;\nconst flakyOperation = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Temporary failure");\n    return "Success!";\n};\n\nretryOperation(flakyOperation, 3, 500)\n    .then(result => console.log(result))\n    .catch(error => console.log(error.message));',
  hint: 'Implement exponential backoff for retrying failed operations.'
},
{
  id: 'js_error_31',
  topicId: 'js_error',
  question: 'Create error logger for debugging.',
  mathSolution: 'Centralized error logging function.',
  codeSolution: 'const errorLogger = {\n    errors: [],\n    \n    log(error, context = {}) {\n        const errorEntry = {\n            id: Date.now(),\n            timestamp: new Date().toISOString(),\n            name: error.name,\n            message: error.message,\n            stack: error.stack,\n            context,\n            url: window.location.href,\n            userAgent: navigator.userAgent\n        };\n        \n        this.errors.push(errorEntry);\n        console.error(`[${errorEntry.timestamp}] ${error.name}: ${error.message}`, context);\n        \n        // Could send to server\n        // this.sendToServer(errorEntry);\n        \n        return errorEntry;\n    },\n    \n    getErrors() {\n        return this.errors;\n    },\n    \n    clear() {\n        this.errors = [];\n    }\n};\n\n// Usage\ntry {\n    throw new TypeError("Invalid operation");\n} catch (error) {\n    errorLogger.log(error, { userId: 123, operation: "processData" });\n}\n\nconsole.log(errorLogger.getErrors().length);  // 1',
  hint: 'Centralized logging helps with debugging and monitoring.'
},
{
  id: 'js_error_32',
  topicId: 'js_error',
  question: 'Use error boundary pattern in synchronous code.',
  mathSolution: 'Wrap entire function in try-catch as boundary.',
  codeSolution: 'function errorBoundary(fn, fallbackValue = null) {\n    return function(...args) {\n        try {\n            return fn(...args);\n        } catch (error) {\n            console.log(`Error in ${fn.name}:`, error.message);\n            return typeof fallbackValue === "function" \n                ? fallbackValue(error) \n                : fallbackValue;\n        }\n    };\n}\n\nconst riskyFunction = (num) => {\n    if (num < 0) throw new Error("Negative number not allowed");\n    return Math.sqrt(num);\n};\n\nconst safeSqrt = errorBoundary(riskyFunction, 0);\n\nconsole.log(safeSqrt(16));   // 4\nconsole.log(safeSqrt(-1));   // 0 (fallback)\nconsole.log(safeSqrt(25));   // 5',
  hint: 'Error boundary pattern wraps functions to prevent crashes.'
},
{
  id: 'js_error_33',
  topicId: 'js_error',
  question: 'Handle promise rejection without .catch() using async wrapper.',
  mathSolution: 'Create wrapper that catches promise rejections.',
  codeSolution: 'function asyncHandler(asyncFn) {\n    return function(...args) {\n        asyncFn(...args).catch(error => {\n            console.log(`Async error in ${asyncFn.name}:`, error.message);\n            // Handle or rethrow as needed\n        });\n    };\n}\n\n// Without wrapper - unhandled rejection\n// async function fetchUser(id) {\n//     const response = await fetch(`/api/users/${id}`);\n//     return response.json();\n// }\n\n// With wrapper - error caught\nconst safeFetchUser = asyncHandler(async function fetchUser(id) {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n});\n\nsafeFetchUser(999);  // Error caught, no unhandled rejection',
  hint: 'Wrap async functions to automatically catch all rejections.'
},
{
  id: 'js_error_34',
  topicId: 'js_error',
  question: 'Handle JSON parsing errors with default values.',
  mathSolution: 'Provide fallback when JSON.parse fails.',
  codeSolution: 'function safeParseJSON(jsonString, fallback = null) {\n    if (typeof jsonString !== "string") {\n        return fallback;\n    }\n    \n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        if (error instanceof SyntaxError) {\n            console.log("Invalid JSON, using fallback");\n            return fallback;\n        }\n        throw error;\n    }\n}\n\n// Test cases\nconsole.log(safeParseJSON(\'{"name":"John"}\'));      // {name: "John"}\nconsole.log(safeParseJSON(\'invalid json\'));         // null\nconsole.log(safeParseJSON(\'invalid\', {}));          // {}\nconsole.log(safeParseJSON(\'{"name": "John"\', []));  // []',
  hint: 'Always provide fallback when parsing external JSON.'
},
{
  id: 'js_error_35',
  topicId: 'js_error',
  question: 'Catch and rethrow with additional context.',
  mathSolution: 'Add context before rethrowing original error.',
  codeSolution: 'async function fetchUserWithContext(userId) {\n    try {\n        const response = await fetch(`/api/users/${userId}`);\n        if (!response.ok) {\n            throw new Error(`HTTP ${response.status}`);\n        }\n        return await response.json();\n    } catch (error) {\n        // Add context without losing original error\n        error.context = { userId, timestamp: Date.now() };\n        error.message = `Failed to fetch user ${userId}: ${error.message}`;\n        throw error;\n    }\n}\n\nasync function processRequest() {\n    try {\n        const user = await fetchUserWithContext(999);\n        console.log(user);\n    } catch (error) {\n        console.log("Error:", error.message);\n        console.log("Context:", error.context);\n    }\n}\n\nprocessRequest();',
  hint: 'Add context to errors before rethrowing for better debugging.'
},
{
  id: 'js_error_36',
  topicId: 'js_error',
  question: 'Use finally to restore state after error.',
  mathSolution: 'Restore application state in finally block.',
  codeSolution: 'class ButtonManager {\n    constructor(buttonId) {\n        this.button = document.getElementById(buttonId);\n        this.originalText = this.button?.textContent || "";\n    }\n    \n    async performAction() {\n        if (!this.button) return;\n        \n        // Save state\n        const originalText = this.button.textContent;\n        this.button.disabled = true;\n        this.button.textContent = "Processing...";\n        \n        try {\n            // Risky operation\n            await this.doAsyncWork();\n            this.button.textContent = "Success!";\n        } catch (error) {\n            this.button.textContent = "Error!";\n            console.log(error.message);\n        } finally {\n            // Always restore button\n            setTimeout(() => {\n                this.button.disabled = false;\n                this.button.textContent = originalText;\n            }, 2000);\n        }\n    }\n    \n    async doAsyncWork() {\n        // Simulate async work\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                Math.random() > 0.5 ? resolve() : reject(new Error("Failed"));\n            }, 1000);\n        });\n    }\n}\n\n// const manager = new ButtonManager("submitBtn");\n// manager.performAction();',
  hint: 'Use finally to restore UI state, close resources, etc.'
},
{
  id: 'js_error_37',
  topicId: 'js_error',
  question: 'Create validation error aggregation.',
  mathSolution: 'Collect multiple validation errors before throwing.',
  codeSolution: 'class ValidationError extends Error {\n    constructor(errors) {\n        super("Validation failed");\n        this.name = "ValidationError";\n        this.errors = errors;\n    }\n}\n\nfunction validateUser(user) {\n    const errors = [];\n    \n    if (!user.name) {\n        errors.push({ field: "name", message: "Name is required" });\n    } else if (user.name.length < 2) {\n        errors.push({ field: "name", message: "Name must be at least 2 characters" });\n    }\n    \n    if (!user.email) {\n        errors.push({ field: "email", message: "Email is required" });\n    } else if (!user.email.includes("@")) {\n        errors.push({ field: "email", message: "Invalid email format" });\n    }\n    \n    if (user.age !== undefined && (user.age < 0 || user.age > 150)) {\n        errors.push({ field: "age", message: "Age must be between 0 and 150" });\n    }\n    \n    if (errors.length > 0) {\n        throw new ValidationError(errors);\n    }\n    \n    return true;\n}\n\ntry {\n    validateUser({ email: "invalid", age: -5 });\n} catch (error) {\n    if (error instanceof ValidationError) {\n        console.log(`Validation failed with ${error.errors.length} errors:`);\n        error.errors.forEach(err => {\n            console.log(`  - ${err.field}: ${err.message}`);\n        });\n    }\n}',
  hint: 'Collect all validation errors before throwing for better UX.'
},
{
  id: 'js_error_38',
  topicId: 'js_error',
  question: 'Handle specific error codes in catch block.',
  mathSolution: 'Check error code or property to determine handling.',
  codeSolution: 'class DatabaseError extends Error {\n    constructor(message, code) {\n        super(message);\n        this.name = "DatabaseError";\n        this.code = code;\n    }\n}\n\nasync function queryDatabase(sql) {\n    // Simulate database errors\n    if (sql.includes("DROP")) {\n        throw new DatabaseError("Permission denied", "ER_NO_PERMISSION");\n    }\n    if (sql.includes("SELECT")) {\n        throw new DatabaseError("Table not found", "ER_NO_SUCH_TABLE");\n    }\n    return { rows: [] };\n}\n\nasync function executeQuery(sql) {\n    try {\n        return await queryDatabase(sql);\n    } catch (error) {\n        if (error.code === "ER_NO_PERMISSION") {\n            console.log("Permission error, logging attempt");\n            return null;\n        }\n        if (error.code === "ER_NO_SUCH_TABLE") {\n            console.log("Table missing, creating...");\n            // Create table logic\n            return { rows: [] };\n        }\n        throw error;\n    }\n}\n\nexecuteQuery("SELECT * FROM users");',
  hint: 'Use error codes for granular error handling.'
},
{
  id: 'js_error_39',
  topicId: 'js_error',
  question: 'Handle errors in Web Workers.',
  mathSolution: 'Listen to error events from worker.',
  codeSolution: '// Main thread\nconst worker = new Worker("worker.js");\n\nworker.onerror = (error) => {\n    console.log("Worker error:", error.message);\n    console.log("Line:", error.lineno);\n    console.log("File:", error.filename);\n};\n\nworker.onmessage = (event) => {\n    console.log("Worker result:", event.data);\n};\n\n// Send message to worker\nworker.postMessage({ task: "complex calculation" });\n\n// worker.js (separate file)\n// self.onmessage = function(event) {\n//     try {\n//         // Simulate error\n//         throw new Error("Something went wrong in worker");\n//         self.postMessage("result");\n//     } catch (error) {\n//         self.postMessage({ error: error.message });\n//     }\n// };',
  hint: 'Use onerror handler and try-catch inside workers.'
},
{
  id: 'js_error_40',
  topicId: 'js_error',
  question: 'Handle errors in callback functions.',
  mathSolution: 'Use error-first callback pattern.',
  codeSolution: '// Error-first callback pattern\nfunction readFile(filename, callback) {\n    // Simulate async operation\n    setTimeout(() => {\n        if (filename === "valid.txt") {\n            callback(null, "File contents");\n        } else {\n            callback(new Error(`File not found: ${filename}`), null);\n        }\n    }, 100);\n}\n\n// Using the callback\nreadFile("invalid.txt", (error, data) => {\n    if (error) {\n        console.log("Error:", error.message);\n        return;\n    }\n    console.log("Data:", data);\n});\n\n// Promise wrapper for callback\nfunction readFilePromise(filename) {\n    return new Promise((resolve, reject) => {\n        readFile(filename, (error, data) => {\n            if (error) reject(error);\n            else resolve(data);\n        });\n    });\n}\n\nreadFilePromise("valid.txt")\n    .then(data => console.log(data))\n    .catch(error => console.log(error.message));',
  hint: 'Error-first callbacks: first parameter is error, second is result.'
},
{
  id: 'js_error_41',
  topicId: 'js_error',
  question: 'Handle errors in chained operations with logging.',
  mathSolution: 'Log each step and catch errors at the end.',
  codeSolution: 'class OperationLogger {\n    constructor(context) {\n        this.context = context;\n        this.steps = [];\n    }\n    \n    async step(name, operation) {\n        this.steps.push({ name, status: "started", time: Date.now() });\n        try {\n            const result = await operation();\n            this.steps[this.steps.length - 1].status = "completed";\n            this.steps[this.steps.length - 1].timeEnd = Date.now();\n            return result;\n        } catch (error) {\n            this.steps[this.steps.length - 1].status = "failed";\n            this.steps[this.steps.length - 1].error = error.message;\n            throw error;\n        }\n    }\n    \n    getLog() {\n        return {\n            context: this.context,\n            steps: this.steps,\n            summary: {\n                totalSteps: this.steps.length,\n                completed: this.steps.filter(s => s.status === "completed").length,\n                failed: this.steps.filter(s => s.status === "failed").length\n            }\n        };\n    }\n}\n\nasync function complexProcess() {\n    const logger = new OperationLogger("user-data-process");\n    \n    try {\n        const user = await logger.step("fetch-user", async () => {\n            const res = await fetch("/api/users/1");\n            return res.json();\n        });\n        \n        const posts = await logger.step("fetch-posts", async () => {\n            const res = await fetch(`/api/users/${user.id}/posts`);\n            return res.json();\n        });\n        \n        const processed = await logger.step("process-data", async () => {\n            return posts.map(p => ({ ...p, processed: true }));\n        });\n        \n        return processed;\n    } catch (error) {\n        console.log("Process failed:", error.message);\n        console.log("Operation log:", logger.getLog());\n        throw error;\n    }\n}\n\n// complexProcess().catch(console.log);',
  hint: 'Logging each step helps debug complex async operations.'
},
{
  id: 'js_error_42',
  topicId: 'js_error',
  question: 'Handle errors in recursive functions.',
  mathSolution: 'Add base case error handling in recursion.',
  codeSolution: 'function deepSearch(obj, target, depth = 0, maxDepth = 100) {\n    if (depth > maxDepth) {\n        throw new Error(`Maximum recursion depth (${maxDepth}) exceeded`);\n    }\n    \n    if (obj === null || typeof obj !== "object") {\n        return obj === target;\n    }\n    \n    try {\n        for (const key in obj) {\n            if (deepSearch(obj[key], target, depth + 1, maxDepth)) {\n                return true;\n            }\n        }\n        return false;\n    } catch (error) {\n        if (error.message.includes("recursion depth")) {\n            throw error;\n        }\n        console.log(`Error at depth ${depth}:`, error.message);\n        return false;\n    }\n}\n\nconst circular = { a: 1 };\ncircular.self = circular;\n\ntry {\n    console.log(deepSearch(circular, 1));  // true\n    console.log(deepSearch(circular, 99)); // false\n    \n    // This would cause stack overflow without maxDepth\n    deepSearch(circular, 1, 0, 10);\n} catch (error) {\n    console.log("Caught:", error.message);\n}',
  hint: 'Always add max depth limit in recursive functions.'
},
{
  id: 'js_error_43',
  topicId: 'js_error',
  question: 'Use error boundaries in React (concept example).',
  mathSolution: 'React error boundaries catch render errors.',
  codeSolution: '// React error boundary pattern (conceptual)\nclass ErrorBoundary {\n    constructor() {\n        this.hasError = false;\n        this.error = null;\n    }\n    \n    static getDerivedStateFromError(error) {\n        return { hasError: true, error };\n    }\n    \n    componentDidCatch(error, errorInfo) {\n        console.log("Error caught by boundary:", error);\n        console.log("Component stack:", errorInfo.componentStack);\n        // Send to error reporting service\n    }\n    \n    render(children, fallback) {\n        if (this.hasError) {\n            return fallback;\n        }\n        return children;\n    }\n}\n\n// Usage pattern\n// <ErrorBoundary>\n//     <RiskyComponent />\n// </ErrorBoundary>\n\n// JavaScript analog: try-catch with component wrapper\nfunction withErrorBoundary(Component, FallbackComponent) {\n    return function WrappedComponent(props) {\n        try {\n            return Component(props);\n        } catch (error) {\n            console.log("Component error:", error);\n            return FallbackComponent({ error, ...props });\n        }\n    };\n}',
  hint: 'Error boundaries prevent entire UI from crashing on component errors.'
},
{
  id: 'js_error_44',
  topicId: 'js_error',
  question: 'Handle errors in async iterators.',
  mathSolution: 'Use try-catch inside async iteration.',
  codeSolution: 'async function* asyncGenerator() {\n    yield 1;\n    yield 2;\n    throw new Error("Generator error");\n    yield 3;\n}\n\nasync function processAsyncGenerator() {\n    try {\n        for await (const value of asyncGenerator()) {\n            console.log("Value:", value);\n        }\n    } catch (error) {\n        console.log("Caught generator error:", error.message);\n    }\n}\n\n// Manual iteration with error handling\nasync function processManually() {\n    const iterator = asyncGenerator();\n    \n    while (true) {\n        try {\n            const { done, value } = await iterator.next();\n            if (done) break;\n            console.log("Manual iteration:", value);\n        } catch (error) {\n            console.log("Error in iteration:", error.message);\n            break;\n        }\n    }\n}\n\nprocessAsyncGenerator();\nprocessManually();',
  hint: 'Async iterators can throw, handle with try-catch in for await loop.'
},
{
  id: 'js_error_45',
  topicId: 'js_error',
  question: 'Handle errors in streaming data.',
  mathSolution: 'Catch errors during stream processing.',
  codeSolution: 'async function processStream(url) {\n    try {\n        const response = await fetch(url);\n        const reader = response.body.getReader();\n        const decoder = new TextDecoder();\n        \n        while (true) {\n            try {\n                const { done, value } = await reader.read();\n                if (done) break;\n                \n                const chunk = decoder.decode(value, { stream: true });\n                console.log("Chunk received:", chunk.substring(0, 50));\n                \n                // Process chunk\n                if (chunk.includes("error")) {\n                    throw new Error("Malformed data in stream");\n                }\n            } catch (chunkError) {\n                console.log("Error processing chunk:", chunkError.message);\n                // Continue reading next chunks\n                continue;\n            }\n        }\n    } catch (streamError) {\n        console.log("Stream error:", streamError.message);\n    }\n}\n\n// processStream("/api/large-data");',
  hint: 'Handle both stream-level and chunk-level errors separately.'
},
{
  id: 'js_error_46',
  topicId: 'js_error',
  question: 'Create fallback chain for failed operations.',
  mathSolution: 'Try multiple strategies sequentially.',
  codeSolution: 'async function fallbackFetch(urls, options = {}) {\n    const errors = [];\n    \n    for (const url of urls) {\n        try {\n            console.log(`Trying: ${url}`);\n            const response = await fetch(url, options);\n            if (response.ok) {\n                const data = await response.json();\n                return { data, url };\n            }\n            throw new Error(`HTTP ${response.status}`);\n        } catch (error) {\n            errors.push({ url, error: error.message });\n            console.log(`Failed: ${url} - ${error.message}`);\n        }\n    }\n    \n    throw new Error(`All ${urls.length} fallbacks failed. Errors: ${JSON.stringify(errors)}`);\n}\n\nconst urls = [\n    "https://api1.example.com/data",\n    "https://api2.example.com/data",\n    "https://api3.example.com/data"\n];\n\n// fallbackFetch(urls)\n//     .then(result => console.log("Success from:", result.url))\n//     .catch(error => console.log("All failed:", error.message));',
  hint: 'Use fallback chain for critical operations.'
},
{
  id: 'js_error_47',
  topicId: 'js_error',
  question: 'Handle errors in event emitters (Node.js).',
  mathSolution: 'Listen to error events on EventEmitter.',
  codeSolution: '// Node.js EventEmitter example\nconst EventEmitter = require("events");\n\nclass SafeEmitter extends EventEmitter {\n    emit(event, ...args) {\n        if (event === "error") {\n            try {\n                return super.emit(event, ...args);\n            } catch (error) {\n                console.log("Error event handler threw:", error.message);\n                return false;\n            }\n        }\n        return super.emit(event, ...args);\n    }\n}\n\nconst emitter = new SafeEmitter();\n\n// Always attach error handler\nemitter.on("error", (error) => {\n    console.log("Caught error:", error.message);\n});\n\n// Emit events\nemitter.emit("data", "some data");\n\n// Error without handler would crash in regular EventEmitter\nemitter.emit("error", new Error("Something went wrong"));',
  hint: 'Always attach error listeners to EventEmitters.'
},
{
  id: 'js_error_48',
  topicId: 'js_error',
  question: 'Implement graceful shutdown on error.',
  mathSolution: 'Handle termination signals and cleanup gracefully.',
  codeSolution: '// Node.js graceful shutdown example\n// process.on("SIGTERM", gracefulShutdown);\n// process.on("SIGINT", gracefulShutdown);\n\nasync function gracefulShutdown(signal) {\n    console.log(`${signal} received, shutting down gracefully...`);\n    \n    const cleanupTasks = [\n        closeDatabase(),\n        closeServer(),\n        flushLogs()\n    ];\n    \n    try {\n        await Promise.all(cleanupTasks);\n        console.log("Cleanup completed");\n        process.exit(0);\n    } catch (error) {\n        console.log("Error during cleanup:", error.message);\n        process.exit(1);\n    }\n}\n\nfunction closeDatabase() {\n    return new Promise(resolve => {\n        console.log("Closing database...");\n        setTimeout(resolve, 500);\n    });\n}\n\nfunction closeServer() {\n    return new Promise(resolve => {\n        console.log("Closing server...");\n        setTimeout(resolve, 500);\n    });\n}\n\nfunction flushLogs() {\n    return new Promise(resolve => {\n        console.log("Flushing logs...");\n        setTimeout(resolve, 200);\n    });\n}\n\n// Uncomment to test (Node.js only)\n// process.emit("SIGTERM");',
  hint: 'Graceful shutdown ensures resources are cleaned up properly.'
},
{
  id: 'js_error_49',
  topicId: 'js_error',
  question: 'Use Sentry or error monitoring service (conceptual).',
  mathSolution: 'Capture errors with monitoring service.',
  codeSolution: '// Sentry integration example (conceptual)\nclass ErrorMonitor {\n    constructor(dsn) {\n        this.dsn = dsn;\n        this.enabled = true;\n    }\n    \n    captureException(error, context = {}) {\n        if (!this.enabled) return;\n        \n        const errorReport = {\n            message: error.message,\n            stack: error.stack,\n            name: error.name,\n            timestamp: new Date().toISOString(),\n            url: typeof window !== "undefined" ? window.location.href : null,\n            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,\n            ...context\n        };\n        \n        console.log("Sending to error monitoring:", errorReport);\n        // In real implementation: send to Sentry/LogRocket/etc.\n        // this.send(errorReport);\n    }\n    \n    captureMessage(message, level = "info") {\n        console.log(`[${level}] ${message}`);\n    }\n    \n    wrap(fn, context = {}) {\n        return (...args) => {\n            try {\n                return fn(...args);\n            } catch (error) {\n                this.captureException(error, context);\n                throw error;\n            }\n        };\n    }\n}\n\nconst monitor = new ErrorMonitor("https://example.com/error-tracking");\n\n// Wrap existing function\nconst safeAPI = monitor.wrap(\n    (url) => fetch(url).then(r => r.json()),\n    { source: "API call" }\n);\n\n// Usage\n// safeAPI("https://invalid.url").catch(() => {});  // Error captured by monitor',
  hint: 'Use error monitoring services in production for debugging.'
},
{
  id: 'js_error_50',
  topicId: 'js_error',
  question: 'Build comprehensive error handling service.',
  mathSolution: 'Complete error handling service with multiple features.',
  codeSolution: 'class ErrorHandlerService {\n    constructor(options = {}) {\n        this.env = options.env || "development";\n        this.onErrorCallback = options.onError || null;\n        this.errorHistory = [];\n        this.maxHistorySize = options.maxHistorySize || 100;\n        this.enableLogging = options.enableLogging !== false;\n    }\n    \n    handle(error, context = {}) {\n        const normalizedError = this.normalizeError(error);\n        \n        const errorReport = {\n            id: this.generateId(),\n            timestamp: new Date().toISOString(),\n            environment: this.env,\n            error: normalizedError,\n            context,\n            stack: error.stack,\n            url: this.getCurrentURL(),\n            userAgent: this.getUserAgent()\n        };\n        \n        this.addToHistory(errorReport);\n        \n        if (this.enableLogging) {\n            this.logError(errorReport);\n        }\n        \n        if (this.onErrorCallback) {\n            this.onErrorCallback(errorReport);\n        }\n        \n        return errorReport;\n    }\n    \n    normalizeError(error) {\n        if (typeof error === "string") {\n            return {\n                name: "StringError",\n                message: error,\n                type: "string"\n            };\n        }\n        \n        if (error instanceof Error) {\n            return {\n                name: error.name,\n                message: error.message,\n                type: "error",\n                code: error.code,\n                statusCode: error.statusCode\n            };\n        }\n        \n        return {\n            name: "UnknownError",\n            message: String(error),\n            type: "unknown"\n        };\n    }\n    \n    logError(errorReport) {\n        const logMethod = this.env === "production" ? console.error : console.log;\n        logMethod(`[ERROR] ${errorReport.error.name}: ${errorReport.error.message}`);\n        if (this.env !== "production") {\n            console.log("Context:", errorReport.context);\n            console.log("Stack:", errorReport.stack);\n        }\n    }\n    \n    addToHistory(errorReport) {\n        this.errorHistory.unshift(errorReport);\n        if (this.errorHistory.length > this.maxHistorySize) {\n            this.errorHistory.pop();\n        }\n    }\n    \n    generateId() {\n        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;\n    }\n    \n    getCurrentURL() {\n        if (typeof window !== "undefined") return window.location.href;\n        return null;\n    }\n    \n    getUserAgent() {\n        if (typeof navigator !== "undefined") return navigator.userAgent;\n        return null;\n    }\n    \n    async try(fn, context = {}, fallback = null) {\n        try {\n            return await fn();\n        } catch (error) {\n            this.handle(error, context);\n            return typeof fallback === "function" ? fallback(error) : fallback;\n        }\n    }\n    \n    getHistory() {\n        return [...this.errorHistory];\n    }\n    \n    clearHistory() {\n        this.errorHistory = [];\n    }\n    \n    wrap(fn, context = {}) {\n        return async (...args) => {\n            try {\n                return await fn(...args);\n            } catch (error) {\n                this.handle(error, { ...context, args });\n                throw error;\n            }\n        };\n    }\n    \n    createBoundary(componentName) {\n        return async (fn) => {\n            return this.try(fn, { component: componentName });\n        };\n    }\n}\n\n// Usage example\nconst errorHandler = new ErrorHandlerService({\n    env: "development",\n    onError: (report) => {\n        // Send to server\n        console.log("Sending error to server:", report.id);\n    }\n});\n\nasync function demo() {\n    // Method 1: try/catch wrapper\n    const result = await errorHandler.try(async () => {\n        throw new Error("Something failed");\n        return "success";\n    }, { operation: "test" }, "fallback value");\n    \n    console.log("Got:", result);  // "fallback value"\n    \n    // Method 2: Wrap function\n    const riskyFunction = errorHandler.wrap(\n        async (value) => {\n            if (value < 0) throw new Error("Negative not allowed");\n            return value * 2;\n        },\n        { functionName: "riskyFunction" }\n    );\n    \n    try {\n        await riskyFunction(-1);\n    } catch (error) {\n        // Error already handled\n        console.log("Caught error at top level");\n    }\n    \n    // Method 3: Create component boundary\n    const componentBoundary = errorHandler.createBoundary("UserProfile");\n    const safeComponent = await componentBoundary(async () => {\n        throw new Error("Render error");\n    });\n    \n    // View error history\n    console.log("Error history:", errorHandler.getHistory().length);\n}\n\ndemo();',
  hint: 'Production-ready error handling service with logging, history, and fallbacks.'
}
);