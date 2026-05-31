QuizData.questions.push(
{
  id: 'js_closure_1',
  topicId: 'js_closure',
  question: 'Create a basic closure where inner function accesses outer variable.',
  mathSolution: 'Inner function retains access to outer function\'s variables.',
  codeSolution: 'function outer() {\n    let message = "Hello from outer";\n    \n    function inner() {\n        console.log(message);  // Accesses outer variable\n    }\n    \n    return inner;\n}\n\nconst myFunction = outer();\nmyFunction();  // Hello from outer',
  hint: 'Functions remember the scope where they were created.'
},
{
  id: 'js_closure_2',
  topicId: 'js_closure',
  question: 'Create a counter using closure.',
  mathSolution: 'Closure maintains private counter variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    \n    return function() {\n        count++;\n        return count;\n    };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\nconsole.log(counter1());  // 1\nconsole.log(counter1());  // 2\nconsole.log(counter2());  // 1 (independent counter)',
  hint: 'Each closure has its own private copy of variables.'
},
{
  id: 'js_closure_3',
  topicId: 'js_closure',
  question: 'Create a closure with multiple methods (counter with increment/decrement).',
  mathSolution: 'Return object with functions sharing private variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        decrement: function() {\n            count--;\n            return count;\n        },\n        getValue: function() {\n            return count;\n        },\n        reset: function() {\n            count = 0;\n            return count;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment());  // 1\nconsole.log(counter.increment());  // 2\nconsole.log(counter.decrement());  // 1\nconsole.log(counter.getValue());   // 1\ncounter.reset();\nconsole.log(counter.getValue());   // 0',
  hint: 'Multiple functions can share the same closure scope.'
},
{
  id: 'js_closure_4',
  topicId: 'js_closure',
  question: 'Use closure to create private variables (encapsulation).',
  mathSolution: 'Variables inside closure are not accessible from outside.',
  codeSolution: 'function createPerson(name, age) {\n    let _name = name;\n    let _age = age;\n    \n    return {\n        getName: function() {\n            return _name;\n        },\n        getAge: function() {\n            return _age;\n        },\n        setAge: function(newAge) {\n            if (newAge >= 0 && newAge < 150) {\n                _age = newAge;\n                return true;\n            }\n            return false;\n        }\n    };\n}\n\nconst person = createPerson("John", 30);\nconsole.log(person.getName());     // John\nconsole.log(person._name);         // undefined (private)\nperson.setAge(31);\nconsole.log(person.getAge());      // 31\nperson.setAge(200);                // Invalid\nconsole.log(person.getAge());      // 31 (unchanged)',
  hint: 'Closures enable true data privacy in JavaScript.'
},
{
  id: 'js_closure_5',
  topicId: 'js_closure',
  question: 'Fix loop closure issue (classic problem with var).',
  mathSolution: 'Use closure to capture loop variable correctly.',
  codeSolution: '// Problem with var - this prints 3,3,3\nfor (var i = 0; i < 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 100);\n}\n\n// Solution 1: IIFE closure\nfor (var i = 0; i < 3; i++) {\n    (function(j) {\n        setTimeout(function() {\n            console.log(j);\n        }, 100);\n    })(i);\n}\n\n// Solution 2: Use let (block scope)\nfor (let i = 0; i < 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 100);\n}',
  hint: 'IIFE creates new closure scope for each loop iteration.'
},
{
  id: 'js_closure_6',
  topicId: 'js_closure',
  question: 'Create function factory using closures.',
  mathSolution: 'Generate similar functions with different parameters.',
  codeSolution: 'function multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\n\nconst double = multiplyBy(2);\nconst triple = multiplyBy(3);\nconst quadruple = multiplyBy(4);\n\nconsole.log(double(5));    // 10\nconsole.log(triple(5));    // 15\nconsole.log(quadruple(5)); // 20',
  hint: 'Function factories create customized functions using closures.'
},
{
  id: 'js_closure_7',
  topicId: 'js_closure',
  question: 'Create memoization (caching) using closure.',
  mathSolution: 'Cache stores results of expensive operations.',
  codeSolution: 'function memoize(fn) {\n    const cache = {};\n    \n    return function(...args) {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            console.log("Computing result for:", args);\n            cache[key] = fn(...args);\n        } else {\n            console.log("Returning cached result for:", args);\n        }\n        return cache[key];\n    };\n}\n\nfunction expensiveOperation(x) {\n    // Simulate expensive calculation\n    return x * x;\n}\n\nconst memoizedSquare = memoize(expensiveOperation);\nconsole.log(memoizedSquare(5));  // Computing... 25\nconsole.log(memoizedSquare(5));  // Cached... 25\nconsole.log(memoizedSquare(10)); // Computing... 100',
  hint: 'Cache object persists in closure between function calls.'
},
{
  id: 'js_closure_8',
  topicId: 'js_closure',
  question: 'Create once function (runs only once) using closure.',
  mathSolution: 'Flag variable in closure tracks if function executed.',
  codeSolution: 'function once(fn) {\n    let called = false;\n    let result;\n    \n    return function(...args) {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n}\n\nconst initialize = once(() => {\n    console.log("Initializing...");\n    return { status: "ready", timestamp: Date.now() };\n});\n\nconsole.log(initialize());  // Initializing... { status: "ready", ... }\nconsole.log(initialize());  // { status: "ready", ... } (no log)\nconsole.log(initialize());  // Same cached result',
  hint: 'Flag variable tracks whether function has been called.'
},
{
  id: 'js_closure_9',
  topicId: 'js_closure',
  question: 'Create debounce function using closure.',
  mathSolution: 'Timer reference preserved across calls.',
  codeSolution: 'function debounce(fn, delay) {\n    let timeoutId;\n    \n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            fn(...args);\n        }, delay);\n    };\n}\n\nconst searchAPI = debounce((query) => {\n    console.log(`Searching for: ${query}`);\n}, 500);\n\nsearchAPI("h");\nsearchAPI("he");\nsearchAPI("hel");\nsearchAPI("hell");\nsearchAPI("hello");\n// Only "Searching for: hello" logs after 500ms',
  hint: 'timeoutId persists across calls, allowing debouncing.'
},
{
  id: 'js_closure_10',
  topicId: 'js_closure',
  question: 'Create throttle function using closure.',
  mathSolution: 'Track last execution time in closure.',
  codeSolution: 'function throttle(fn, limit) {\n    let lastCall = 0;\n    \n    return function(...args) {\n        const now = Date.now();\n        if (now - lastCall >= limit) {\n            lastCall = now;\n            fn(...args);\n        }\n    };\n}\n\nconst logScroll = throttle(() => {\n    console.log("Scroll event at:", new Date().toISOString());\n}, 1000);\n\n// Simulate rapid scrolls\nfor (let i = 0; i < 10; i++) {\n    setTimeout(() => logScroll(), i * 100);\n}\n// Only executes ~once per second',
  hint: 'lastCall timestamp persists in closure scope.'
},
{
  id: 'js_closure_11',
  topicId: 'js_closure',
  question: 'Create currying function using closure.',
  mathSolution: 'Accumulate arguments using nested closures.',
  codeSolution: 'function curry(fn) {\n    return function curried(...args) {\n        if (args.length >= fn.length) {\n            return fn(...args);\n        }\n        return function(...more) {\n            return curried(...args, ...more);\n        };\n    };\n}\n\nfunction sum(a, b, c) {\n    return a + b + c;\n}\n\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2)(3));  // 6\nconsole.log(curriedSum(1, 2)(3));  // 6\nconsole.log(curriedSum(1)(2, 3));  // 6',
  hint: 'Each currying level returns new closure with accumulated args.'
},
{
  id: 'js_closure_12',
  topicId: 'js_closure',
  question: 'Create partial application using closure.',
  mathSolution: 'Fix some arguments, return function for remaining.',
  codeSolution: 'function partial(fn, ...fixedArgs) {\n    return function(...remainingArgs) {\n        return fn(...fixedArgs, ...remainingArgs);\n    };\n}\n\nfunction greet(greeting, name, punctuation) {\n    return `${greeting}, ${name}${punctuation}`;\n}\n\nconst sayHello = partial(greet, "Hello");\nconst sayHelloJohn = partial(sayHello, "John");\n\nconsole.log(sayHelloJohn("!"));      // Hello, John!\nconsole.log(sayHello("Jane", "?"));  // Hello, Jane?',
  hint: 'Partial application fixes some arguments, returns closure for rest.'
},
{
  id: 'js_closure_13',
  topicId: 'js_closure',
  question: 'Create iterator using closure.',
  mathSolution: 'Maintain index state in closure.',
  codeSolution: 'function createIterator(array) {\n    let index = 0;\n    \n    return {\n        next: function() {\n            if (index < array.length) {\n                return { value: array[index++], done: false };\n            }\n            return { done: true };\n        },\n        hasNext: function() {\n            return index < array.length;\n        },\n        reset: function() {\n            index = 0;\n        }\n    };\n}\n\nconst iterator = createIterator(["a", "b", "c"]);\nconsole.log(iterator.next());  // { value: "a", done: false }\nconsole.log(iterator.next());  // { value: "b", done: false }\nconsole.log(iterator.hasNext());  // true\nconsole.log(iterator.next());  // { value: "c", done: false }\nconsole.log(iterator.next());  // { done: true }\niterator.reset();\nconsole.log(iterator.next().value);  // "a"',
  hint: 'Index variable persists, tracking iteration position.'
},
{
  id: 'js_closure_14',
  topicId: 'js_closure',
  question: 'Create event listener with closure to remember state.',
  mathSolution: 'Closure maintains state across event invocations.',
  codeSolution: 'function createClickCounter(element) {\n    let clickCount = 0;\n    \n    element.addEventListener("click", function() {\n        clickCount++;\n        console.log(`Clicked ${clickCount} times`);\n        element.textContent = `Clicks: ${clickCount}`;\n    });\n    \n    return function() {\n        return clickCount;\n    };\n}\n\n// HTML: <button id="myButton">Click me</button>\n// const button = document.getElementById("myButton");\n// const getCount = createClickCounter(button);\n// Each click logs the count and updates button text',
  hint: 'Event handler closure remembers click count between events.'
},
{
  id: 'js_closure_15',
  topicId: 'js_closure',
  question: 'Create module pattern using closure (revealing module pattern).',
  mathSolution: 'Return object with only wanted public methods.',
  codeSolution: 'const calculator = (function() {\n    let result = 0;\n    let history = [];\n    \n    function add(x) {\n        result += x;\n        history.push(`Added ${x}`);\n        return result;\n    }\n    \n    function subtract(x) {\n        result -= x;\n        history.push(`Subtracted ${x}`);\n        return result;\n    }\n    \n    function multiply(x) {\n        result *= x;\n        history.push(`Multiplied by ${x}`);\n        return result;\n    }\n    \n    function getValue() {\n        return result;\n    }\n    \n    function getHistory() {\n        return [...history];\n    }\n    \n    function reset() {\n        result = 0;\n        history = [];\n        return result;\n    }\n    \n    return {\n        add, subtract, multiply,\n        getValue, getHistory, reset\n    };\n})();\n\nconsole.log(calculator.add(5));     // 5\nconsole.log(calculator.multiply(2)); // 10\nconsole.log(calculator.subtract(3)); // 7\nconsole.log(calculator.getValue());   // 7\nconsole.log(calculator.getHistory()); // ["Added 5", "Multiplied by 2", "Subtracted 3"]',
  hint: 'The module pattern creates encapsulated code with private state.'
},
{
  id: 'js_closure_16',
  topicId: 'js_closure',
  question: 'Create function that remembers state between calls.',
  mathSolution: 'Use closure to track running totals or averages.',
  codeSolution: 'function createRunningAverage() {\n    let sum = 0;\n    let count = 0;\n    \n    return function(number) {\n        sum += number;\n        count++;\n        return sum / count;\n    };\n}\n\nconst avg = createRunningAverage();\nconsole.log(avg(10));  // 10\nconsole.log(avg(20));  // 15\nconsole.log(avg(30));  // 20\nconsole.log(avg(40));  // 25',
  hint: 'Sum and count persist across multiple calls.'
},
{
  id: 'js_closure_17',
  topicId: 'js_closure',
  question: 'Create function that generates unique IDs.',
  mathSolution: 'Increment counter stored in closure.',
  codeSolution: 'function createIdGenerator(prefix = "id") {\n    let counter = 0;\n    \n    return function() {\n        counter++;\n        return `${prefix}_${counter}`;\n    };\n}\n\nconst generateUserId = createIdGenerator("user");\nconst generateProductId = createIdGenerator("product");\n\nconsole.log(generateUserId());    // user_1\nconsole.log(generateUserId());    // user_2\nconsole.log(generateProductId()); // product_1\nconsole.log(generateProductId()); // product_2',
  hint: 'Each generator has its own independent counter.'
},
{
  id: 'js_closure_18',
  topicId: 'js_closure',
  question: 'Create function that limits number of calls.',
  mathSolution: 'Track call count in closure.',
  codeSolution: 'function limitCalls(fn, maxCalls) {\n    let calls = 0;\n    \n    return function(...args) {\n        if (calls < maxCalls) {\n            calls++;\n            return fn(...args);\n        }\n        console.log("Function limit reached");\n        return undefined;\n    };\n}\n\nconst limitedLog = limitCalls((msg) => console.log(msg), 3);\nlimitedLog("Call 1");  // Call 1\nlimitedLog("Call 2");  // Call 2\nlimitedLog("Call 3");  // Call 3\nlimitedLog("Call 4");  // Function limit reached (no output)',
  hint: 'Call counter tracks how many times function executed.'
},
{
  id: 'js_closure_19',
  topicId: 'js_closure',
  question: 'Create function that delays execution (sleep).',
  mathSolution: 'Preserve arguments and context in closure.',
  codeSolution: 'function delay(fn, ms) {\n    return function(...args) {\n        setTimeout(() => {\n            fn(...args);\n        }, ms);\n    };\n}\n\nconst delayedGreet = delay((name) => {\n    console.log(`Hello, ${name}!`);\n}, 1000);\n\ndelayedGreet("John");  // Hello, John! after 1 second\n\n// With arguments\nconst delayedSum = delay((a, b) => {\n    console.log(`Sum: ${a + b}`);\n}, 2000);\n\ndelayedSum(5, 3);  // Sum: 8 after 2 seconds',
  hint: 'Delay function returns closure that preserves arguments for setTimeout.'
},
{
  id: 'js_closure_20',
  topicId: 'js_closure',
  question: 'Create function that returns different results on each call.',
  mathSolution: 'Maintain state sequence in closure.',
  codeSolution: 'function createCycler(...values) {\n    let index = 0;\n    \n    return function() {\n        const result = values[index];\n        index = (index + 1) % values.length;\n        return result;\n    };\n}\n\nconst getColor = createCycler("red", "green", "blue", "yellow");\nconsole.log(getColor());  // red\nconsole.log(getColor());  // green\nconsole.log(getColor());  // blue\nconsole.log(getColor());  // yellow\nconsole.log(getColor());  // red (cycles back)',
  hint: 'Index cycles through values array, wrapping around.'
},
{
  id: 'js_closure_21',
  topicId: 'js_closure',
  question: 'Create function that caches results by argument.',
  mathSolution: 'Use object in closure to store computed values.',
  codeSolution: 'function createCache() {\n    const cache = {};\n    \n    return {\n        get: function(key) {\n            return cache[key];\n        },\n        set: function(key, value) {\n            cache[key] = value;\n        },\n        has: function(key) {\n            return key in cache;\n        },\n        delete: function(key) {\n            delete cache[key];\n        },\n        clear: function() {\n            Object.keys(cache).forEach(key => delete cache[key]);\n        }\n    };\n}\n\nconst userCache = createCache();\nuserCache.set("user_1", { name: "John", age: 30 });\nuserCache.set("user_2", { name: "Jane", age: 25 });\n\nconsole.log(userCache.get("user_1"));  // { name: "John", age: 30 }\nconsole.log(userCache.has("user_3"));  // false\nuserCache.delete("user_2");\nconsole.log(userCache.has("user_2"));  // false',
  hint: 'Cache object persists, storing results between calls.'
},
{
  id: 'js_closure_22',
  topicId: 'js_closure',
  question: 'Create function with configurable behavior.',
  mathSolution: 'Configure function once, use many times.',
  codeSolution: 'function createFormatter(config) {\n    return function(value) {\n        if (config.prefix) value = config.prefix + value;\n        if (config.suffix) value = value + config.suffix;\n        if (config.uppercase) value = value.toUpperCase();\n        if (config.lowercase) value = value.toLowerCase();\n        if (config.padStart) value = value.padStart(config.padStart);\n        if (config.padEnd) value = value.padEnd(config.padEnd);\n        return value;\n    };\n}\n\nconst formatCurrency = createFormatter({\n    prefix: "$",\n    suffix: ".00\",\n    uppercase: false\n});\n\nconst formatCode = createFormatter({\n    uppercase: true,\n    padStart: 10,\n    suffix: "_CODE\"\n});\n\nconsole.log(formatCurrency(100));  // $100.00\nconsole.log(formatCode("ABC\"));    // "       ABC_CODE"',
  hint: 'Configuration stored in closure, applied every call.'
},
{
  id: 'js_closure_23',
  topicId: 'js_closure',
  question: 'Create function that validates based on rule set.',
  mathSolution: 'Validation rules stored in closure.',
  codeSolution: 'function createValidator(rules) {\n    return function(value) {\n        const errors = [];\n        \n        if (rules.required && (!value || value.trim() === "")) {\n            errors.push("Field is required");\n        }\n        if (rules.minLength && value.length < rules.minLength) {\n            errors.push(`Minimum length is ${rules.minLength}`);\n        }\n        if (rules.maxLength && value.length > rules.maxLength) {\n            errors.push(`Maximum length is ${rules.maxLength}`);\n        }\n        if (rules.pattern && !rules.pattern.test(value)) {\n            errors.push(`Invalid format`);\n        }\n        if (rules.custom && !rules.custom(value)) {\n            errors.push(rules.customMessage || "Invalid value");\n        }\n        \n        return {\n            isValid: errors.length === 0,\n            errors: errors\n        };\n    };\n}\n\nconst validateEmail = createValidator({\n    required: true,\n    pattern: /^[^@]+@[^@]+\\.[^@]+$/,\n    minLength: 5,\n    maxLength: 100\n});\n\nconst validateUsername = createValidator({\n    required: true,\n    minLength: 3,\n    maxLength: 20,\n    pattern: /^[a-zA-Z0-9_]+$/,\n    custom: (value) => !value.includes("admin"),\n    customMessage: "Username cannot contain \'admin\'"\n});\n\nconsole.log(validateEmail("john@example.com"));  // { isValid: true, errors: [] }\nconsole.log(validateEmail("invalid"));           // { isValid: false, errors: [...] }',
  hint: 'Validation rules become permanent part of validator function.'
},
{
  id: 'js_closure_24',
  topicId: 'js_closure',
  question: 'Create function for rate limiting API calls.',
  mathSolution: 'Track timestamps of recent calls.',
  codeSolution: 'function createRateLimiter(limit, windowMs) {\n    const calls = [];\n    \n    return function() {\n        const now = Date.now();\n        \n        // Remove old calls outside time window\n        while (calls.length && calls[0] < now - windowMs) {\n            calls.shift();\n        }\n        \n        if (calls.length < limit) {\n            calls.push(now);\n            return true;\n        }\n        return false;\n    };\n}\n\nconst rateLimiter = createRateLimiter(3, 10000); // 3 calls per 10 seconds\n\nfor (let i = 0; i < 10; i++) {\n    console.log(`Call ${i}:`, rateLimiter() ? "Allowed\" : "Blocked\");\n}',
  hint: 'Calls array tracks each call timestamp for rate limiting.'
},
{
  id: 'js_closure_25',
  topicId: 'js_closure',
  question: 'Create function that retries another function.',
  mathSolution: 'Retry count and delay stored in closure.',
  codeSolution: 'function retryable(maxRetries, delay = 1000) {\n    return function(fn) {\n        return async function(...args) {\n            let lastError;\n            \n            for (let i = 0; i <= maxRetries; i++) {\n                try {\n                    return await fn(...args);\n                } catch (error) {\n                    lastError = error;\n                    console.log(`Attempt ${i + 1} failed, retrying in ${delay}ms`);\n                    await new Promise(resolve => setTimeout(resolve, delay));\n                }\n            }\n            throw lastError;\n        };\n    };\n}\n\nconst retryableOperation = retryable(3, 500);\n\nlet attempts = 0;\nconst flakyFunction = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Temporary failure");\n    return "Success!";\n};\n\nconst robustFunction = retryableOperation(flakyFunction);\nrobustFunction().then(console.log).catch(console.log);  // Success! after retries',
  hint: 'Retry function returns closure that wraps target function.'
},
{
  id: 'js_closure_26',
  topicId: 'js_closure',
  question: 'Create function composition using closures.',
  mathSolution: 'Combine multiple functions into pipeline.',
  codeSolution: 'function compose(...functions) {\n    return function(initialValue) {\n        return functions.reduceRight((value, fn) => fn(value), initialValue);\n    };\n}\n\nfunction pipe(...functions) {\n    return function(initialValue) {\n        return functions.reduce((value, fn) => fn(value), initialValue);\n    };\n}\n\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst square = x => x * x;\n\nconst composed = compose(square, multiply3, add2);\nconst piped = pipe(add2, multiply3, square);\n\nconsole.log(composed(5));  // ((5+2)*3)^2 = 441\nconsole.log(piped(5));     // ((5+2)*3)^2 = 441\n\n// Create specific pipelines\nconst processOrder = pipe(\n    x => x * 0.9,    // 10% discount\n    x => x + 5,       // shipping\n    x => Math.round(x * 100) / 100  // round to 2 decimals\n);\n\nconsole.log(processOrder(100));  // (100*0.9)+5 = 95.00',
  hint: 'Compose/pipe accumulates transformations in closure.'
},
{
  id: 'js_closure_27',
  topicId: 'js_closure',
  question: 'Create function for state machine using closure.',
  mathSolution: 'Current state stored in closure, transitions return new state.',
  codeSolution: 'function createStateMachine(initialState, transitions) {\n    let currentState = initialState;\n    \n    return function(action) {\n        const nextState = transitions[currentState]?.[action];\n        if (nextState) {\n            currentState = nextState;\n            return { state: currentState, changed: true };\n        }\n        return { state: currentState, changed: false, error: \"Invalid transition\" };\n    };\n}\n\nconst trafficLight = createStateMachine(\"red\", {\n    red: { next: \"green\", timer: 3000 },\n    green: { next: \"yellow\", timer: 2000 },\n    yellow: { next: \"red\", timer: 1000 }\n});\n\nconsole.log(trafficLight(\"next\"));  // { state: \"green\", changed: true }\nconsole.log(trafficLight(\"next\"));  // { state: \"yellow\", changed: true }\nconsole.log(trafficLight(\"next\"));  // { state: \"red\", changed: true }\nconsole.log(trafficLight(\"reset\")); // { state: \"red\", changed: false, error: \"Invalid transition\" }',
  hint: 'State machine transitions stored in closure, current state preserved.'
},
{
  id: 'js_closure_28',
  topicId: 'js_closure',
  question: 'Create function for lazy evaluation using closure.',
  mathSolution: 'Computation deferred until value needed.',
  codeSolution: 'function lazy(fn) {\n    let computed = false;\n    let result;\n    \n    return function() {\n        if (!computed) {\n            result = fn();\n            computed = true;\n        }\n        return result;\n    };\n}\n\nconst expensiveComputation = lazy(() => {\n    console.log("Performing expensive calculation...\");\n    let sum = 0;\n    for (let i = 0; i < 1000000; i++) sum += i;\n    return sum;\n});\n\nconsole.log("Lazy function created, not computed yet\");\nconsole.log(expensiveComputation());  // Performs calculation\nconsole.log(expensiveComputation());  // Returns cached result (no calculation)',
  hint: 'Lazy evaluation defers work until first access.'
},
{
  id: 'js_closure_29',
  topicId: 'js_closure',
  question: 'Create function with undo/redo functionality.',
  mathSolution: 'Maintain history stack in closure.',
  codeSolution: 'function createUndoable(initialValue) {\n    let current = initialValue;\n    const history = [initialValue];\n    let position = 0;\n    \n    return {\n        get: () => current,\n        set: (value) => {\n            current = value;\n            history.length = position + 1;\n            history.push(value);\n            position++;\n        },\n        undo: () => {\n            if (position > 0) {\n                position--;\n                current = history[position];\n                return current;\n            }\n            return null;\n        },\n        redo: () => {\n            if (position < history.length - 1) {\n                position++;\n                current = history[position];\n                return current;\n            }\n            return null;\n        },\n        getHistory: () => [...history]\n    };\n}\n\nconst state = createUndoable(0);\nstate.set(10);\nstate.set(20);\nstate.set(30);\nconsole.log(state.get());  // 30\nstate.undo();\nconsole.log(state.get());  // 20\nstate.undo();\nconsole.log(state.get());  // 10\nstate.redo();\nconsole.log(state.get());  // 20\nconsole.log(state.getHistory());  // [0, 10, 20, 30]',
  hint: 'History stack and position pointer stored in closure.'
},
{
  id: 'js_closure_30',
  topicId: 'js_closure',
  question: 'Create function for time-based caching (TTL).',
  mathSolution: 'Store timestamps with cached values.',
  codeSolution: 'function createTTLCache(ttlMs = 60000) {\n    const cache = new Map();\n    \n    return {\n        set: (key, value) => {\n            cache.set(key, {\n                value,\n                expires: Date.now() + ttlMs\n            });\n        },\n        get: (key) => {\n            const item = cache.get(key);\n            if (!item) return null;\n            if (Date.now() > item.expires) {\n                cache.delete(key);\n                return null;\n            }\n            return item.value;\n        },\n        has: (key) => {\n            const item = cache.get(key);\n            if (!item) return false;\n            if (Date.now() > item.expires) {\n                cache.delete(key);\n                return false;\n            }\n            return true;\n        },\n        clear: () => cache.clear()\n    };\n}\n\nconst userCache = createTTLCache(5000); // 5 seconds TTL\nuserCache.set(\"user_1\", { name: \"John\" });\nconsole.log(userCache.get(\"user_1\"));  // { name: \"John\" }\nsetTimeout(() => {\n    console.log(userCache.get(\"user_1\"));  // null (expired)\n}, 6000);',
  hint: 'Cache stores value and expiration timestamp.'
},
{
  id: 'js_closure_31',
  topicId: 'js_closure',
  question: 'Create function for batch processing with delay.',
  mathSolution: 'Accumulate items and process after delay.',
  codeSolution: 'function createBatcher(processBatch, delay = 100) {\n    let batch = [];\n    let timeoutId;\n    \n    return function(item) {\n        batch.push(item);\n        \n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            if (batch.length > 0) {\n                processBatch([...batch]);\n                batch = [];\n            }\n        }, delay);\n    };\n}\n\nconst logBatch = createBatcher((items) => {\n    console.log(`Processing batch of ${items.length} items:`, items);\n}, 500);\n\nlogBatch(\"item1\");\nlogBatch(\"item2\");\nlogBatch(\"item3\");\nsetTimeout(() => logBatch(\"item4\"), 300);  // Joins first batch\nsetTimeout(() => logBatch(\"item5\"), 600);  // New batch',
  hint: 'Batcher collects items and processes batches together.'
},
{
  id: 'js_closure_32',
  topicId: 'js_closure',
  question: 'Create function for polling with interval.',
  mathSolution: 'Preserve interval reference for stopping.',
  codeSolution: 'function createPoller(fn, interval) {\n    let isRunning = false;\n    let intervalId;\n    \n    function poll() {\n        if (!isRunning) return;\n        fn();\n        intervalId = setTimeout(poll, interval);\n    }\n    \n    return {\n        start: () => {\n            if (!isRunning) {\n                isRunning = true;\n                poll();\n            }\n        },\n        stop: () => {\n            isRunning = false;\n            if (intervalId) {\n                clearTimeout(intervalId);\n                intervalId = null;\n            }\n        },\n        isActive: () => isRunning\n    };\n}\n\nconst poller = createPoller(() => {\n    console.log(\"Checking for updates at\", new Date().toLocaleTimeString());\n}, 2000);\n\npoller.start();\n// Stop after 7 seconds\nsetTimeout(() => {\n    poller.stop();\n    console.log(\"Polling stopped\");\n}, 7000);',
  hint: 'Poller maintains running state and interval ID.'
},
{
  id: 'js_closure_33',
  topicId: 'js_closure',
  question: 'Create function for subscriber/publisher pattern.',
  mathSolution: 'Maintain subscriber list in closure.',
  codeSolution: 'function createEventBus() {\n    const subscribers = {};\n    \n    return {\n        subscribe: (event, callback) => {\n            if (!subscribers[event]) {\n                subscribers[event] = [];\n            }\n            subscribers[event].push(callback);\n            \n            // Return unsubscribe function\n            return () => {\n                const index = subscribers[event].indexOf(callback);\n                if (index > -1) {\n                    subscribers[event].splice(index, 1);\n                }\n            };\n        },\n        emit: (event, data) => {\n            if (subscribers[event]) {\n                subscribers[event].forEach(callback => {\n                    callback(data);\n                });\n            }\n        },\n        clear: (event) => {\n            if (event) delete subscribers[event];\n            else Object.keys(subscribers).forEach(key => delete subscribers[key]);\n        }\n    };\n}\n\nconst bus = createEventBus();\n\nconst unsubscribe = bus.subscribe(\"user-login\", (user) => {\n    console.log(`User ${user.name} logged in at ${user.time}`);\n});\n\nbus.subscribe(\"user-login\", (user) => {\n    console.log(`Welcome, ${user.name}!`);\n});\n\nbus.emit(\"user-login\", { name: \"John\", time: Date.now() });\n\nunsubscribe();  // Remove first subscriber\nbus.emit(\"user-login\", { name: \"Jane\", time: Date.now() });\n// Only second subscriber runs',
  hint: 'Event bus maintains subscriber registry in closure.'
},
{
  id: 'js_closure_34',
  topicId: 'js_closure',
  question: 'Create function for timeout with promise.',
  mathSolution: 'Closure preserves timer reference.',
  codeSolution: 'function createTimeout(delay) {\n    let timeoutId;\n    let rejectFn;\n    \n    const timeoutPromise = new Promise((resolve, reject) => {\n        rejectFn = reject;\n        timeoutId = setTimeout(() => {\n            reject(new Error(`Timeout after ${delay}ms`));\n        }, delay);\n    });\n    \n    return {\n        promise: timeoutPromise,\n        cancel: () => {\n            clearTimeout(timeoutId);\n            rejectFn({ cancelled: true });\n        }\n    };\n}\n\nconst timeout = createTimeout(3000);\ntimeout.promise.catch(err => console.log(err.message));\n\n// Cancel after 1 second\nsetTimeout(() => timeout.cancel(), 1000);',
  hint: 'Timeout preserves IDs and reject functions.'
},
{
  id: 'js_closure_35',
  topicId: 'js_closure',
  question: 'Create function for transform stream processing.',
  mathSolution: 'Maintain buffer and state between chunks.',
  codeSolution: 'function createLineSplitter() {\n    let buffer = \"\";\n    \n    return function(chunk) {\n        buffer += chunk;\n        const lines = buffer.split(\"\\n\");\n        buffer = lines.pop() || \"\";\n        return lines;\n    };\n}\n\nconst splitter = createLineSplitter();\n\nconsole.log(splitter(\"Hello\\nWorld\\nTest\"));  // [\"Hello\", \"World\"]\nconsole.log(splitter(\"ing\\nMore\\nData\\n\"));   // [\"Testing\", \"More\", \"Data\"]\nconsole.log(splitter(\"Final\"));                // [] (buffered)\nconsole.log(splitter(\"\\nComplete\"));          // [\"Final\", \"Complete\"]',
  hint: 'Buffer persists between calls for partial data.'
},
{
  id: 'js_closure_36',
  topicId: 'js_closure',
  question: 'Create throttled queue for API requests.',
  mathSolution: 'Queue and processing state in closure.',
  codeSolution: 'function createThrottledQueue(limit = 2, interval = 1000) {\n    const queue = [];\n    let active = 0;\n    let lastRun = 0;\n    \n    async function process() {\n        if (queue.length === 0 || active >= limit) return;\n        \n        const now = Date.now();\n        const timeSinceLast = now - lastRun;\n        if (timeSinceLast < interval / limit) {\n            setTimeout(process, interval / limit - timeSinceLast);\n            return;\n        }\n        \n        const { fn, resolve, reject } = queue.shift();\n        active++;\n        lastRun = Date.now();\n        \n        try {\n            const result = await fn();\n            resolve(result);\n        } catch (error) {\n            reject(error);\n        } finally {\n            active--;\n            process();\n        }\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst throttledRequest = createThrottledQueue(2, 1000);\n\nfor (let i = 0; i < 5; i++) {\n    throttledRequest(async () => {\n        console.log(`Request ${i} at ${Date.now()}`);\n        return i;\n    });\n}',
  hint: 'Queue stores pending requests, processes at limited rate.'
},
{
  id: 'js_closure_37',
  topicId: 'js_closure',
  question: 'Create function for simple dependency injection.',
  mathSolution: 'Dependencies stored in closure for later use.',
  codeSolution: 'function createContainer() {\n    const dependencies = {};\n    const instances = {};\n    \n    return {\n        register: (name, dependency) => {\n            dependencies[name] = dependency;\n        },\n        factory: (name, factoryFn) => {\n            dependencies[name] = factoryFn;\n        },\n        get: (name) => {\n            if (instances[name]) return instances[name];\n            \n            const dependency = dependencies[name];\n            if (!dependency) throw new Error(`Dependency ${name} not found`);\n            \n            if (typeof dependency === \"function\" && !dependency.prototype) {\n                // Factory function\n                instances[name] = dependency(this);\n            } else {\n                instances[name] = dependency;\n            }\n            \n            return instances[name];\n        },\n        clear: () => {\n            Object.keys(instances).forEach(key => delete instances[key]);\n        }\n    };\n}\n\nconst container = createContainer();\n\ncontainer.register(\"config\", { apiUrl: \"https://api.example.com\", timeout: 5000 });\ncontainer.factory(\"apiClient\", (c) => {\n    const config = c.get(\"config\");\n    return {\n        fetch: (endpoint) => fetch(`${config.apiUrl}/${endpoint}`)\n    };\n});\n\nconst apiClient = container.get(\"apiClient\");\nconsole.log(apiClient.fetch);  // Function\n// apiClient.fetch(\"users\") would make request',
  hint: 'Container stores registration and resolved instances.'
},
{
  id: 'js_closure_38',
  topicId: 'js_closure',
  question: 'Create function for request deduplication.',
  mathSolution: 'Track in-flight requests by key.',
  codeSolution: 'function createRequestDeduplicator() {\n    const pendingRequests = new Map();\n    \n    return async function(requestFn, key) {\n        if (pendingRequests.has(key)) {\n            console.log(`Deduplicating request for: ${key}`);\n            return pendingRequests.get(key);\n        }\n        \n        const promise = requestFn().finally(() => {\n            pendingRequests.delete(key);\n        });\n        \n        pendingRequests.set(key, promise);\n        return promise;\n    };\n}\n\nconst dedupe = createRequestDeduplicator();\n\nlet callCount = 0;\nconst fetchUser = async () => {\n    callCount++;\n    await new Promise(r => setTimeout(r, 100));\n    return { id: 1, name: \"John\" };\n};\n\n// Multiple identical requests\nPromise.all([\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_2\")\n]).then(results => {\n    console.log(`Fetch called ${callCount} times`);  // Called 2 times\n});',
  hint: 'PendingRequests Map stores in-progress promises.'
},
{
  id: 'js_closure_39',
  topicId: 'js_closure',
  question: 'Create function for circular buffer.',
  mathSolution: 'Buffer array and pointer stored in closure.',
  codeSolution: 'function createCircularBuffer(size) {\n    const buffer = new Array(size);\n    let writeIndex = 0;\n    let readIndex = 0;\n    let count = 0;\n    \n    return {\n        write: (value) => {\n            buffer[writeIndex] = value;\n            writeIndex = (writeIndex + 1) % size;\n            if (count < size) count++;\n            else readIndex = (readIndex + 1) % size;\n        },\n        read: () => {\n            if (count === 0) return null;\n            const value = buffer[readIndex];\n            readIndex = (readIndex + 1) % size;\n            count--;\n            return value;\n        },\n        peek: () => count === 0 ? null : buffer[readIndex],\n        size: () => count,\n        capacity: () => size,\n        clear: () => {\n            writeIndex = 0;\n            readIndex = 0;\n            count = 0;\n        }\n    };\n}\n\nconst buffer = createCircularBuffer(3);\nbuffer.write(1);\nbuffer.write(2);\nbuffer.write(3);\nbuffer.write(4);  // Overwrites 1\nconsole.log(buffer.read());  // 2\nconsole.log(buffer.read());  // 3\nconsole.log(buffer.read());  // 4\nconsole.log(buffer.read());  // null',
  hint: 'Circular buffer maintains indices and count in closure.'
},
{
  id: 'js_closure_40',
  topicId: 'js_closure',
  question: 'Create function with automatic resource cleanup.',
  mathSolution: 'Resource reference and cleanup in closure.',
  codeSolution: 'function withResource(create, cleanup) {\n    return async function(callback) {\n        const resource = await create();\n        try {\n            return await callback(resource);\n        } finally {\n            await cleanup(resource);\n        }\n    };\n}\n\n// Example: File operations\nconst withFile = withResource(\n    () => ({ fd: 123, name: \"test.txt\", content: \"data\" }),\n    async (file) => console.log(`Closing file: ${file.name}`)\n);\n\n// Example: Database connection\nconst withDB = withResource(\n    async () => ({ connected: true, query: (sql) => `Result of ${sql}` }),\n    async (db) => console.log(\"Disconnecting database\")\n);\n\nwithFile(async (file) => {\n    console.log(`Reading ${file.name}`);\n    return file.content;\n}).then(console.log);\n\nwithDB(async (db) => {\n    console.log(db.query(\"SELECT * FROM users\"));\n    return \"done\";\n});',
  hint: 'Resource manager ensures cleanup happens regardless of errors.'
},
{
  id: 'js_closure_41',
  topicId: 'js_closure',
  question: 'Create function for pub/sub with wildcard topics.',
  mathSolution: 'Topic matching logic in closure.',
  codeSolution: 'function createWildcardEventBus() {\n    const subscribers = new Map();\n    \n    function matchTopic(topic, pattern) {\n        const topicParts = topic.split(\".\");\n        const patternParts = pattern.split(\".\");\n        \n        if (patternParts.length > topicParts.length) return false;\n        \n        for (let i = 0; i < patternParts.length; i++) {\n            if (patternParts[i] === \"**\") return true;\n            if (patternParts[i] !== \"*\" && patternParts[i] !== topicParts[i]) return false;\n        }\n        return true;\n    }\n    \n    return {\n        subscribe: (pattern, callback) => {\n            if (!subscribers.has(pattern)) {\n                subscribers.set(pattern, []);\n            }\n            subscribers.get(pattern).push(callback);\n            \n            return () => {\n                const callbacks = subscribers.get(pattern);\n                const index = callbacks.indexOf(callback);\n                if (index > -1) callbacks.splice(index, 1);\n            };\n        },\n        publish: (topic, data) => {\n            subscribers.forEach((callbacks, pattern) => {\n                if (matchTopic(topic, pattern)) {\n                    callbacks.forEach(cb => cb(data, topic));\n                }\n            });\n        }\n    };\n}\n\nconst bus = createWildcardEventBus();\n\nbus.subscribe(\"user.*\", (data, topic) => {\n    console.log(`Wildcard: ${topic} ->`, data);\n});\n\nbus.subscribe(\"user.login\", (data) => {\n    console.log(`User logged in: ${data.name}`);\n});\n\nbus.publish(\"user.login\", { name: \"John\", time: Date.now() });\nbus.publish(\"user.logout\", { name: \"John\" });\nbus.publish(\"system.alert\", { message: \"Warning\" });  // Not matched',
  hint: 'Wildcard matcher enables flexible topic subscriptions.'
},
{
  id: 'js_closure_42',
  topicId: 'js_closure',
  question: 'Create function for priority queue.',
  mathSolution: 'Items stored with priority, sorted on insertion.',
  codeSolution: 'function createPriorityQueue() {\n    const items = [];\n    \n    return {\n        enqueue: (value, priority = 0) => {\n            items.push({ value, priority });\n            items.sort((a, b) => b.priority - a.priority);\n        },\n        dequeue: () => {\n            if (items.length === 0) return null;\n            return items.shift().value;\n        },\n        peek: () => items[0]?.value || null,\n        size: () => items.length,\n        isEmpty: () => items.length === 0\n    };\n}\n\nconst pq = createPriorityQueue();\npq.enqueue(\"low priority\", 1);\npq.enqueue(\"high priority\", 10);\npq.enqueue(\"medium priority\", 5);\npq.enqueue(\"critical\", 100);\n\nconsole.log(pq.dequeue());  // critical\nconsole.log(pq.dequeue());  // high priority\nconsole.log(pq.dequeue());  // medium priority\nconsole.log(pq.dequeue());  // low priority',
  hint: 'Priority queue maintains sorted order in closure.'
},
{
  id: 'js_closure_43',
  topicId: 'js_closure',
  question: 'Create function for sliding window statistics.',
  mathSolution: 'Maintain window array and running stats.',
  codeSolution: 'function createSlidingWindow(windowSize) {\n    const window = [];\n    let sum = 0;\n    \n    return {\n        add: (value) => {\n            window.push(value);\n            sum += value;\n            if (window.length > windowSize) {\n                sum -= window.shift();\n            }\n        },\n        getAverage: () => {\n            if (window.length === 0) return 0;\n            return sum / window.length;\n        },\n        getMax: () => window.length === 0 ? 0 : Math.max(...window),\n        getMin: () => window.length === 0 ? 0 : Math.min(...window),\n        getSize: () => window.length,\n        clear: () => {\n            window.length = 0;\n            sum = 0;\n        }\n    };\n}\n\nconst stats = createSlidingWindow(5);\n[10, 20, 30, 40, 50, 60, 70].forEach(v => {\n    stats.add(v);\n    console.log(`Avg of last ${stats.getSize()}: ${stats.getAverage()}`);\n});\n// Keeps only last 5 values, rolling average',
  hint: 'Sliding window maintains sum for O(1) average calculation.'
},
{
  id: 'js_closure_44',
  topicId: 'js_closure',
  question: 'Create function for retry with exponential backoff.',
  mathSolution: 'Track attempt count and calculate delay.',
  codeSolution: 'function createRetryWithBackoff(maxRetries, baseDelay = 100, maxDelay = 10000) {\n    return function(fn) {\n        let attempt = 0;\n        \n        async function execute() {\n            try {\n                return await fn();\n            } catch (error) {\n                if (attempt >= maxRetries) throw error;\n                \n                const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);\n                console.log(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms`);\n                attempt++;\n                \n                await new Promise(resolve => setTimeout(resolve, delay));\n                return execute();\n            }\n        }\n        \n        return execute();\n    };\n}\n\nlet attempts = 0;\nconst flakyOp = () => {\n    attempts++;\n    if (attempts < 4) throw new Error(`Attempt ${attempts} failed`);\n    return \"Success after retries\";\n};\n\nconst withBackoff = createRetryWithBackoff(5, 100, 2000);\nwithBackoff(flakyOp).then(console.log).catch(console.log);',
  hint: 'Exponential backoff increases delay between retries.'
},
{
  id: 'js_closure_45',
  topicId: 'js_closure',
  question: 'Create function for rate-limited queue with time window.',
  mathSolution: 'Track request times within window.',
  codeSolution: 'function createRateLimitedQueue(maxRequests, windowMs) {\n    const queue = [];\n    const requestTimes = [];\n    let processing = false;\n    \n    async function process() {\n        if (processing) return;\n        processing = true;\n        \n        while (queue.length > 0) {\n            const now = Date.now();\n            // Clean old timestamps\n            while (requestTimes.length && requestTimes[0] <= now - windowMs) {\n                requestTimes.shift();\n            }\n            \n            if (requestTimes.length >= maxRequests) {\n                const waitTime = requestTimes[0] + windowMs - now;\n                await new Promise(resolve => setTimeout(resolve, waitTime));\n                continue;\n            }\n            \n            const { fn, resolve, reject } = queue.shift();\n            requestTimes.push(Date.now());\n            \n            try {\n                const result = await fn();\n                resolve(result);\n            } catch (error) {\n                reject(error);\n            }\n        }\n        \n        processing = false;\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst limited = createRateLimitedQueue(2, 1000);\n\nfor (let i = 0; i < 10; i++) {\n    limited(async () => {\n        console.log(`Request ${i} at ${Date.now() % 10000}`);\n        return i;\n    }).catch(console.log);\n}',
  hint: 'Queue ensures request rate doesn\'t exceed limit.'
},
{
  id: 'js_closure_46',
  topicId: 'js_closure',
  question: 'Create function for property path access (lodash.get style).',
  mathSolution: 'Path parsing and traversal cached in closure.',
  codeSolution: 'function createPathGetter(path) {\n    const keys = path.split(\".\");\n    \n    return function(obj) {\n        let current = obj;\n        for (const key of keys) {\n            if (current === null || current === undefined) return undefined;\n            current = current[key];\n        }\n        return current;\n    };\n}\n\nconst data = {\n    user: {\n        profile: {\n            name: \"John Doe\",\n            address: {\n                city: \"New York\",\n                zip: 10001\n            }\n        }\n    }\n};\n\nconst getName = createPathGetter(\"user.profile.name\");\nconst getCity = createPathGetter(\"user.profile.address.city\");\nconst getMissing = createPathGetter(\"user.profile.phone\");\n\nconsole.log(getName(data));   // John Doe\nconsole.log(getCity(data));   // New York\nconsole.log(getMissing(data)); // undefined',
  hint: 'Pre-parsed path stored in closure for performance.'
},
{
  id: 'js_closure_47',
  topicId: 'js_closure',
  question: 'Create function for LIFO cache (LRU - Least Recently Used).',
  mathSolution: 'Maintain order array and cache map.',
  codeSolution: 'function createLRUCache(capacity) {\n    const cache = new Map();\n    const order = [];\n    \n    return {\n        get: (key) => {\n            if (!cache.has(key)) return null;\n            \n            // Move to end (most recent)\n            const index = order.indexOf(key);\n            order.splice(index, 1);\n            order.push(key);\n            return cache.get(key);\n        },\n        set: (key, value) => {\n            if (cache.has(key)) {\n                const index = order.indexOf(key);\n                order.splice(index, 1);\n            } else if (order.length >= capacity) {\n                const oldest = order.shift();\n                cache.delete(oldest);\n            }\n            \n            cache.set(key, value);\n            order.push(key);\n        },\n        has: (key) => cache.has(key),\n        size: () => cache.size,\n        clear: () => {\n            cache.clear();\n            order.length = 0;\n        }\n    };\n}\n\nconst lru = createLRUCache(3);\nlru.set(\"a\", 1);\nlru.set(\"b\", 2);\nlru.set(\"c\", 3);\nlru.get(\"a\");  // Makes \"a\" most recent\nlru.set(\"d\", 4);  // Removes \"b\" (least recent)\n\nconsole.log(lru.get(\"a\"));  // 1 (exists)\nconsole.log(lru.get(\"b\"));  // null (evicted)\nconsole.log(lru.get(\"c\"));  // 3 (exists)\nconsole.log(lru.get(\"d\"));  // 4 (exists)',
  hint: 'LRU cache tracks access order in separate array.'
},
{
  id: 'js_closure_48',
  topicId: 'js_closure',
  question: 'Create function for async queue with concurrency limit.',
  mathSolution: 'Track active tasks and pending queue.',
  codeSolution: 'function createAsyncQueue(concurrency = 3) {\n    const queue = [];\n    let active = 0;\n    \n    async function process() {\n        if (active >= concurrency || queue.length === 0) return;\n        \n        active++;\n        const { fn, resolve, reject } = queue.shift();\n        \n        try {\n            const result = await fn();\n            resolve(result);\n        } catch (error) {\n            reject(error);\n        } finally {\n            active--;\n            process();\n        }\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst asyncQueue = createAsyncQueue(2);\n\nfunction createDelayedTask(id, delay) {\n    return () => new Promise(resolve => {\n        setTimeout(() => {\n            console.log(`Task ${id} completed at ${Date.now() % 10000}`);\n            resolve(id);\n        }, delay);\n    });\n}\n\n// Start 5 tasks with concurrency limit 2\nfor (let i = 0; i < 5; i++) {\n    asyncQueue(createDelayedTask(i, 1000)).then(console.log);\n}',
  hint: 'Queue controls how many tasks run simultaneously.'
},
{
  id: 'js_closure_49',
  topicId: 'js_closure',
  question: 'Create function for time-limited cache with cleanup.',
  mathSolution: 'Cache entries with expiration, auto-cleanup.',
  codeSolution: 'function createTimedCache(defaultTTL = 60000) {\n    const cache = new Map();\n    let cleanupInterval;\n    \n    function startCleanup(interval = 30000) {\n        if (cleanupInterval) clearInterval(cleanupInterval);\n        cleanupInterval = setInterval(() => {\n            const now = Date.now();\n            for (const [key, { expires }] of cache) {\n                if (expires <= now) {\n                    cache.delete(key);\n                }\n            }\n        }, interval);\n    }\n    \n    function stopCleanup() {\n        if (cleanupInterval) {\n            clearInterval(cleanupInterval);\n            cleanupInterval = null;\n        }\n    }\n    \n    return {\n        set: (key, value, ttl = defaultTTL) => {\n            cache.set(key, {\n                value,\n                expires: Date.now() + ttl\n            });\n        },\n        get: (key) => {\n            const item = cache.get(key);\n            if (!item) return null;\n            if (item.expires <= Date.now()) {\n                cache.delete(key);\n                return null;\n            }\n            return item.value;\n        },\n        has: (key) => {\n            const item = cache.get(key);\n            if (!item) return false;\n            if (item.expires <= Date.now()) {\n                cache.delete(key);\n                return false;\n            }\n            return true;\n        },\n        delete: (key) => cache.delete(key),\n        clear: () => cache.clear(),\n        size: () => cache.size,\n        startCleanup,\n        stopCleanup\n    };\n}\n\nconst cache = createTimedCache(2000);\ncache.set(\"key1\", \"value1\");\nconsole.log(cache.get(\"key1\"));  // value1\nsetTimeout(() => {\n    console.log(cache.get(\"key1\"));  // null (expired)\n}, 3000);',
  hint: 'Timed cache auto-removes expired entries periodically.'
},
{
  id: 'js_closure_50',
  topicId: 'js_closure',
  question: 'Build complete state management store (Redux-like).',
  mathSolution: 'Store state, listeners, and actions in closure.',
  codeSolution: 'function createStore(initialState, reducer) {\n    let state = initialState;\n    let listeners = [];\n    let isDispatching = false;\n    \n    function getState() {\n        return state;\n    }\n    \n    function dispatch(action) {\n        if (isDispatching) {\n            throw new Error(\"Reducers may not dispatch actions\");\n        }\n        \n        try {\n            isDispatching = true;\n            state = reducer(state, action);\n        } finally {\n            isDispatching = false;\n        }\n        \n        listeners.forEach(listener => listener());\n        return action;\n    }\n    \n    function subscribe(listener) {\n        listeners.push(listener);\n        \n        return function unsubscribe() {\n            const index = listeners.indexOf(listener);\n            if (index > -1) listeners.splice(index, 1);\n        };\n    }\n    \n    function replaceReducer(newReducer) {\n        reducer = newReducer;\n        dispatch({ type: \"@@INIT\" });\n    }\n    \n    // Initialize\n    dispatch({ type: \"@@INIT\" });\n    \n    return { getState, dispatch, subscribe, replaceReducer };\n}\n\n// Example usage\nconst initialState = {\n    counter: 0,\n    user: null,\n    loading: false\n};\n\nfunction rootReducer(state = initialState, action) {\n    switch (action.type) {\n        case \"INCREMENT\":\n            return { ...state, counter: state.counter + 1 };\n        case \"DECREMENT\":\n            return { ...state, counter: state.counter - 1 };\n        case \"SET_USER\":\n            return { ...state, user: action.payload };\n        case \"SET_LOADING\":\n            return { ...state, loading: action.payload };\n        default:\n            return state;\n    }\n}\n\nconst store = createStore(initialState, rootReducer);\n\nconst unsubscribe = store.subscribe(() => {\n    console.log(\"State changed:\", store.getState());\n});\n\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"DECREMENT\" });\nstore.dispatch({ type: \"SET_USER\", payload: { name: \"John\", id: 1 } });\n\nconsole.log(\"Final state:\", store.getState());\nunsubscribe();',
  hint: 'Complete Redux-like store using closures for state and subscriptions.'
}
);