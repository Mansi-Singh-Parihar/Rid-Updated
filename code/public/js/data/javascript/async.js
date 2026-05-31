QuizData.questions.push(
{
  id: 'js_async_1',
  topicId: 'js_async',
  question: 'Declare an async function that returns a string.',
  mathSolution: 'async keyword makes function return a promise.',
  codeSolution: 'async function greet() {\n    return "Hello World";\n}\ngreet().then(result => console.log(result));  // Hello World',
  hint: 'Async functions automatically return a promise.'
},
{
  id: 'js_async_2',
  topicId: 'js_async',
  question: 'Use await to wait for promise resolution.',
  mathSolution: 'await pauses execution until promise resolves.',
  codeSolution: 'async function getData() {\n    const result = await Promise.resolve("Data loaded");\n    console.log(result);  // Data loaded\n}\ngetData();',
  hint: 'await only works inside async functions.'
},
{
  id: 'js_async_3',
  topicId: 'js_async',
  question: 'Handle promise rejection with try-catch in async function.',
  mathSolution: 'Use try-catch block to handle errors.',
  codeSolution: 'async function fetchData() {\n    try {\n        const result = await Promise.reject("Error occurred");\n        console.log(result);\n    } catch (error) {\n        console.log(`Caught: ${error}`);  // Caught: Error occurred\n    }\n}\nfetchData();',
  hint: 'try-catch works with await for error handling.'
},
{
  id: 'js_async_4',
  topicId: 'js_async',
  question: 'Use await with multiple promises sequentially.',
  mathSolution: 'await each promise one after another.',
  codeSolution: 'async function sequential() {\n    const result1 = await Promise.resolve("First");\n    console.log(result1);\n    const result2 = await Promise.resolve("Second");\n    console.log(result2);\n}\nsequential();  // First, Second',
  hint: 'Each await waits for previous to complete.'
},
{
  id: 'js_async_5',
  topicId: 'js_async',
  question: 'Run multiple promises in parallel with Promise.all() and await.',
  mathSolution: 'Use Promise.all() with await for parallel execution.',
  codeSolution: 'async function parallel() {\n    const [result1, result2] = await Promise.all([\n        Promise.resolve("First"),\n        Promise.resolve("Second")\n    ]);\n    console.log(result1, result2);  // First Second\n}\nparallel();',
  hint: 'Promise.all() runs promises concurrently.'
},
{
  id: 'js_async_6',
  topicId: 'js_async',
  question: 'Create delay function using promise and await.',
  mathSolution: 'Return promise that resolves after setTimeout.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function demo() {\n    console.log("Start");\n    await delay(1000);\n    console.log("After 1 second");\n}\ndemo();',
  hint: 'await delay(ms) pauses execution.'
},
{
  id: 'js_async_7',
  topicId: 'js_async',
  question: 'Use async/await with fetch API.',
  mathSolution: 'await fetch() and await response.json().',
  codeSolution: 'async function getUser() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n        const user = await response.json();\n        console.log(user.name);\n    } catch (error) {\n        console.log("Fetch failed:", error);\n    }\n}\n// getUser();  // Uncomment to run',
  hint: 'await both fetch and json() methods.'
},
{
  id: 'js_async_8',
  topicId: 'js_async',
  question: 'Use Promise.allSettled() with async/await.',
  mathSolution: 'allSettled waits for all promises to settle.',
  codeSolution: 'async function allSettledDemo() {\n    const results = await Promise.allSettled([\n        Promise.resolve("Success"),\n        Promise.reject("Failure"),\n        Promise.resolve("Another success")\n    ]);\n    results.forEach(result => {\n        if (result.status === "fulfilled") {\n            console.log(`Value: ${result.value}`);\n        } else {\n            console.log(`Reason: ${result.reason}`);\n        }\n    });\n}\nallSettledDemo();',
  hint: 'allSettled never rejects, always resolves.'
},
{
  id: 'js_async_9',
  topicId: 'js_async',
  question: 'Use Promise.race() with async/await.',
  mathSolution: 'race resolves/rejects with first settled promise.',
  codeSolution: 'async function raceDemo() {\n    const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\n    const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));\n    const result = await Promise.race([fast, slow]);\n    console.log(result);  // Fast\n}\nraceDemo();',
  hint: 'race returns first promise that completes.'
},
{
  id: 'js_async_10',
  topicId: 'js_async',
  question: 'Use Promise.any() with async/await.',
  mathSolution: 'any returns first fulfilled promise, ignores rejections.',
  codeSolution: 'async function anyDemo() {\n    const result = await Promise.any([\n        Promise.reject("Error"),\n        Promise.resolve("Success"),\n        Promise.resolve("Another")\n    ]);\n    console.log(result);  // Success\n}\nanyDemo();',
  hint: 'any ignores rejections, needs at least one success.'
},
{
  id: 'js_async_11',
  topicId: 'js_async',
  question: 'Create async function that returns a promise explicitly.',
  mathSolution: 'async functions always return promise, can return manually.',
  codeSolution: 'async function getValue() {\n    return Promise.resolve(42);\n}\ngetValue().then(v => console.log(v));  // 42',
  hint: 'Returning promise from async works fine.'
},
{
  id: 'js_async_12',
  topicId: 'js_async',
  question: 'Throw error in async function to reject promise.',
  mathSolution: 'throw inside async rejects the returned promise.',
  codeSolution: 'async function throwError() {\n    throw new Error("Something went wrong");\n}\nthrowError().catch(err => console.log(err.message));  // Something went wrong',
  hint: 'throw in async = reject promise.'
},
{
  id: 'js_async_13',
  topicId: 'js_async',
  question: 'Use async/await with try-catch-finally.',
  mathSolution: 'finally runs after success or error.',
  codeSolution: 'async function withFinally() {\n    try {\n        await Promise.resolve("Success");\n        console.log("Operation successful");\n    } catch (error) {\n        console.log("Error:", error);\n    } finally {\n        console.log("Cleanup complete");\n    }\n}\nwithFinally();',
  hint: 'finally is great for cleanup code.'
},
{
  id: 'js_async_14',
  topicId: 'js_async',
  question: 'Convert promise chain to async/await.',
  mathSolution: 'Replace .then() with await and .catch() with try-catch.',
  codeSolution: '// Promise chain\nfunction promiseChain() {\n    return Promise.resolve(5)\n        .then(n => n * 2)\n        .then(n => n + 3);\n}\n// Async/await version\nasync function asyncVersion() {\n    let n = await Promise.resolve(5);\n    n = n * 2;\n    n = n + 3;\n    return n;\n}\nasyncVersion().then(console.log);  // 13',
  hint: 'await makes async code look synchronous.'
},
{
  id: 'js_async_15',
  topicId: 'js_async',
  question: 'Use await with Promise.resolve() for consistent handling.',
  mathSolution: 'await works with any value, not just promises.',
  codeSolution: 'async function demo() {\n    const num = await 42;\n    const str = await "Hello";\n    const bool = await true;\n    console.log(num, str, bool);  // 42 Hello true\n}\ndemo();',
  hint: 'await wraps non-promise values in Promise.resolve().'
},
{
  id: 'js_async_16',
  topicId: 'js_async',
  question: 'Create async function that processes array with for loop.',
  mathSolution: 'Use for loop with await for sequential processing.',
  codeSolution: 'async function processArray(items) {\n    const results = [];\n    for (const item of items) {\n        const result = await Promise.resolve(item * 2);\n        results.push(result);\n    }\n    return results;\n}\nprocessArray([1, 2, 3, 4]).then(r => console.log(r));  // [2, 4, 6, 8]',
  hint: 'for loop with await processes sequentially.'
},
{
  id: 'js_async_17',
  topicId: 'js_async',
  question: 'Use for...of with await for sequential async iteration.',
  mathSolution: 'for...of works with await for async iterables.',
  codeSolution: 'async function* asyncGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nasync function iterate() {\n    for await (const value of asyncGenerator()) {\n        console.log(value);  // 1, 2, 3\n    }\n}\niterate();',
  hint: 'for await...of iterates over async iterables.'
},
{
  id: 'js_async_18',
  topicId: 'js_async',
  question: 'Handle multiple promises with Promise.all() error recovery.',
  mathSolution: 'Use allSettled or individual try-catch for error recovery.',
  codeSolution: 'async function handleErrors() {\n    const promises = [\n        Promise.resolve(1),\n        Promise.reject("Error"),\n        Promise.resolve(3)\n    ];\n    const results = await Promise.allSettled(promises);\n    const successful = results.filter(r => r.status === "fulfilled").map(r => r.value);\n    console.log(successful);  // [1, 3]\n}\nhandleErrors();',
  hint: 'allSettled allows partial success.'
},
{
  id: 'js_async_19',
  topicId: 'js_async',
  question: 'Create async function with timeout using Promise.race().',
  mathSolution: 'Race operation against timeout promise.',
  codeSolution: 'function withTimeout(promise, ms) {\n    const timeout = new Promise((_, reject) => \n        setTimeout(() => reject(new Error("Timeout")), ms)\n    );\n    return Promise.race([promise, timeout]);\n}\nasync function fetchWithTimeout() {\n    try {\n        const slowOp = new Promise(resolve => setTimeout(() => resolve("Done"), 2000));\n        const result = await withTimeout(slowOp, 1000);\n        console.log(result);\n    } catch (error) {\n        console.log(error.message);  // Timeout\n    }\n}\nfetchWithTimeout();',
  hint: 'Race async operation with timeout promise.'
},
{
  id: 'js_async_20',
  topicId: 'js_async',
  question: 'Use async/await with file reading (Node.js example).',
  mathSolution: 'Use fs.promises for promise-based file operations.',
  codeSolution: '// Node.js example\n// const fs = require("fs").promises;\n// async function readFile() {\n//     try {\n//         const data = await fs.readFile("file.txt", "utf8");\n//         console.log(data);\n//     } catch (err) {\n//         console.log(err.message);\n//     }\n// }\n// readFile();',
  hint: 'Use fs.promises API for promise-based file operations.'
},
{
  id: 'js_async_21',
  topicId: 'js_async',
  question: 'Implement retry logic with async/await.',
  mathSolution: 'Retry failed async operations recursively.',
  codeSolution: 'async function retry(fn, retries = 3) {\n    try {\n        return await fn();\n    } catch (error) {\n        if (retries > 0) {\n            console.log(`Retrying... ${retries} left`);\n            return retry(fn, retries - 1);\n        }\n        throw error;\n    }\n}\nlet attempts = 0;\nconst flakyFn = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Failed");\n    return "Success";\n};\nretry(flakyFn, 3).then(console.log).catch(console.log);  // Success',
  hint: 'Recursive retry with decreasing retry count.'
},
{
  id: 'js_async_22',
  topicId: 'js_async',
  question: 'Use async/await with map() - careful with concurrency.',
  mathSolution: 'map with await processes sequentially, use Promise.all for parallel.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\n// Sequential with for-of\nasync function sequential() {\n    const results = [];\n    for (const n of numbers) {\n        results.push(await Promise.resolve(n * 2));\n    }\n    return results;\n}\n// Parallel with Promise.all\nasync function parallel() {\n    return await Promise.all(numbers.map(async n => {\n        return await Promise.resolve(n * 2);\n    }));\n}\nsequential().then(console.log);  // [2,4,6,8]\nparallel().then(console.log);   // [2,4,6,8]',
  hint: 'map with async callback runs in parallel, not sequential.'
},
{
  id: 'js_async_23',
  topicId: 'js_async',
  question: 'Use async/await with reduce() for sequential accumulation.',
  mathSolution: 'reduce with await for sequential async operations.',
  codeSolution: 'async function sequentialSum(numbers) {\n    const sum = await numbers.reduce(async (accPromise, num) => {\n        const acc = await accPromise;\n        return acc + num;\n    }, Promise.resolve(0));\n    return sum;\n}\nsequentialSum([1, 2, 3, 4, 5]).then(console.log);  // 15',
  hint: 'await inside reduce requires careful handling.'
},
{
  id: 'js_async_24',
  topicId: 'js_async',
  question: 'Create async function that caches results.',
  mathSolution: 'Cache promises or results to avoid duplicate work.',
  codeSolution: 'const cache = new Map();\nasync function getData(key) {\n    if (cache.has(key)) return cache.get(key);\n    const promise = new Promise(resolve => {\n        setTimeout(() => resolve(`Data for ${key}`), 1000);\n    });\n    cache.set(key, promise);\n    return promise;\n}\nasync function demo() {\n    const data1 = await getData("user1");\n    const data2 = await getData("user1");  // Uses cached promise\n    console.log(data1, data2);\n}\ndemo();',
  hint: 'Cache async operations to avoid redundant work.'
},
{
  id: 'js_async_25',
  topicId: 'js_async',
  question: 'Use top-level await (ES2022).',
  mathSolution: 'await can be used at module top level.',
  codeSolution: '// In module (.mjs or type="module"):\n// const data = await fetch("https://api.example.com/data");\n// console.log(data);\n// Note: Only works in modules, not in regular scripts',
  hint: 'Top-level await only works in ES modules.'
},
{
  id: 'js_async_26',
  topicId: 'js_async',
  question: 'Implement debounced async function.',
  mathSolution: 'Debounce with promise that cancels previous calls.',
  codeSolution: 'function debounceAsync(fn, delay) {\n    let timeoutId;\n    let rejectFn;\n    return function(...args) {\n        if (rejectFn) rejectFn(new Error("Cancelled"));\n        return new Promise((resolve, reject) => {\n            rejectFn = reject;\n            clearTimeout(timeoutId);\n            timeoutId = setTimeout(async () => {\n                try {\n                    const result = await fn(...args);\n                    resolve(result);\n                } catch (err) {\n                    reject(err);\n                }\n                rejectFn = null;\n            }, delay);\n        });\n    };\n}\nconst search = debounceAsync(async query => {\n    return `Results for: ${query}`;\n}, 300);\nsearch("a").then(console.log);\nsearch("ab").then(console.log);\nsearch("abc").then(console.log);  // Only last call executes',
  hint: 'Cancel previous pending async operations.'
},
{
  id: 'js_async_27',
  topicId: 'js_async',
  question: 'Implement rate limiter with async/await.',
  mathSolution: 'Queue requests and process with delay.',
  codeSolution: 'class RateLimiter {\n    constructor(limit, interval) {\n        this.limit = limit;\n        this.interval = interval;\n        this.tokens = limit;\n        this.lastRefill = Date.now();\n    }\n    async acquire() {\n        const now = Date.now();\n        const timePassed = now - this.lastRefill;\n        if (timePassed >= this.interval) {\n            this.tokens = this.limit;\n            this.lastRefill = now;\n        }\n        if (this.tokens > 0) {\n            this.tokens--;\n            return;\n        }\n        const waitTime = this.interval - timePassed;\n        await new Promise(resolve => setTimeout(resolve, waitTime));\n        return this.acquire();\n    }\n    async execute(fn) {\n        await this.acquire();\n        return fn();\n    }\n}\nconst limiter = new RateLimiter(2, 1000);\nfor (let i = 0; i < 5; i++) {\n    limiter.execute(async () => {\n        console.log(`Request ${i} at ${Date.now()}`);\n    });\n}',
  hint: 'Rate limiting controls request frequency.'
},
{
  id: 'js_async_28',
  topicId: 'js_async',
  question: 'Create async queue for sequential processing.',
  mathSolution: 'Queue that processes tasks one at a time.',
  codeSolution: 'class AsyncQueue {\n    constructor() {\n        this.queue = [];\n        this.processing = false;\n    }\n    async add(task) {\n        return new Promise((resolve, reject) => {\n            this.queue.push({ task, resolve, reject });\n            this.process();\n        });\n    }\n    async process() {\n        if (this.processing) return;\n        this.processing = true;\n        while (this.queue.length > 0) {\n            const { task, resolve, reject } = this.queue.shift();\n            try {\n                const result = await task();\n                resolve(result);\n            } catch (err) {\n                reject(err);\n            }\n        }\n        this.processing = false;\n    }\n}\nconst queue = new AsyncQueue();\nqueue.add(() => delay(1000).then(() => console.log(1)));\nqueue.add(() => delay(500).then(() => console.log(2)));\nqueue.add(() => delay(100).then(() => console.log(3)));\n// Output: 1, 2, 3 (in order)',
  hint: 'Queue ensures FIFO execution order.'
},
{
  id: 'js_async_29',
  topicId: 'js_async',
  question: 'Use async/await with Web Workers.',
  mathSolution: 'Wrap worker messages in promises.',
  codeSolution: '// Main thread\n// function runWorker(worker, data) {\n//     return new Promise((resolve, reject) => {\n//         worker.onmessage = e => resolve(e.data);\n//         worker.onerror = e => reject(e);\n//         worker.postMessage(data);\n//     });\n// }\n// async function compute() {\n//     const worker = new Worker("worker.js");\n//     const result = await runWorker(worker, 1000000);\n//     console.log(result);\n//     worker.terminate();\n// }\n// compute();',
  hint: 'Async/await works well with worker promises.'
},
{
  id: 'js_async_30',
  topicId: 'js_async',
  question: 'Create async function that polls until condition is met.',
  mathSolution: 'Poll with setTimeout in async loop.',
  codeSolution: 'async function waitFor(condition, interval = 100, timeout = 5000) {\n    const startTime = Date.now();\n    while (true) {\n        if (condition()) return;\n        if (Date.now() - startTime >= timeout) {\n            throw new Error("Timeout");\n        }\n        await new Promise(resolve => setTimeout(resolve, interval));\n    }\n}\nlet ready = false;\nsetTimeout(() => { ready = true; }, 2000);\nwaitFor(() => ready).then(() => console.log("Ready!"));',
  hint: 'Polling loop with await delay.'
},
{
  id: 'js_async_31',
  topicId: 'js_async',
  question: 'Use async/await with IndexedDB.',
  mathSolution: 'Wrap IndexedDB operations in promises.',
  codeSolution: '// Simplified IndexedDB wrapper\n// function openDB(name, version) {\n//     return new Promise((resolve, reject) => {\n//         const request = indexedDB.open(name, version);\n//         request.onsuccess = () => resolve(request.result);\n//         request.onerror = () => reject(request.error);\n//     });\n// }\n// async function saveData(data) {\n//     const db = await openDB("myDB", 1);\n//     const transaction = db.transaction(["store"], "readwrite");\n//     const store = transaction.objectStore("store");\n//     return new Promise((resolve, reject) => {\n//         const request = store.add(data);\n//         request.onsuccess = () => resolve();\n//         request.onerror = () => reject(request.error);\n//     });\n// }\n// await saveData({ id: 1, name: "John" });',
  hint: 'Wrap callback-based APIs in promises.'
},
{
  id: 'js_async_32',
  topicId: 'js_async',
  question: 'Implement semaphore for concurrency control with async/await.',
  mathSolution: 'Limit number of concurrent async operations.',
  codeSolution: 'class Semaphore {\n    constructor(max) {\n        this.max = max;\n        this.active = 0;\n        this.queue = [];\n    }\n    async acquire() {\n        if (this.active < this.max) {\n            this.active++;\n            return;\n        }\n        await new Promise(resolve => this.queue.push(resolve));\n    }\n    release() {\n        if (this.queue.length > 0) {\n            const resolve = this.queue.shift();\n            resolve();\n        } else {\n            this.active--;\n        }\n    }\n    async run(fn) {\n        await this.acquire();\n        try {\n            return await fn();\n        } finally {\n            this.release();\n        }\n    }\n}\nconst semaphore = new Semaphore(2);\nconst tasks = [1,2,3,4,5].map(x => \n    semaphore.run(async () => {\n        await delay(1000);\n        console.log(`Task ${x} done at ${Date.now()}`);\n    })\n);\nPromise.all(tasks);',
  hint: 'Semaphore limits concurrent operations.'
},
{
  id: 'js_async_33',
  topicId: 'js_async',
  question: 'Use async/await with requestAnimationFrame for animations.',
  mathSolution: 'Wrap requestAnimationFrame in promise.',
  codeSolution: 'function animateFrame() {\n    return new Promise(resolve => {\n        requestAnimationFrame(resolve);\n    });\n}\nasync function animate() {\n    let position = 0;\n    while (position < 200) {\n        position += 5;\n        console.log(`Position: ${position}`);\n        await animateFrame();\n    }\n}\n// animate();  // Will animate over multiple frames',
  hint: 'Await requestAnimationFrame for smooth animations.'
},
{
  id: 'js_async_34',
  topicId: 'js_async',
  question: 'Handle uncaught rejections in async functions.',
  mathSolution: 'Add global unhandledrejection handler.',
  codeSolution: 'window.addEventListener("unhandledrejection", event => {\n    console.log("Unhandled rejection:", event.reason);\n});\nasync function throwError() {\n    throw new Error("Async error");\n}\nthrowError();  // Triggers unhandledrejection\n// Better: Always catch async function calls',
  hint: 'Always catch async function calls to avoid unhandled rejections.'
},
{
  id: 'js_async_35',
  topicId: 'js_async',
  question: 'Convert callback to async function using promisify pattern.',
  mathSolution: 'Wrap callback-based function in async/await friendly wrapper.',
  codeSolution: 'function promisify(fn) {\n    return function(...args) {\n        return new Promise((resolve, reject) => {\n            fn(...args, (err, result) => {\n                if (err) reject(err);\n                else resolve(result);\n            });\n        });\n    };\n}\n// Example with setTimeout\nfunction callbackDelay(ms, callback) {\n    setTimeout(() => callback(null, `Waited ${ms}ms`), ms);\n}\nconst delayPromise = promisify(callbackDelay);\nasync function demo() {\n    const result = await delayPromise(500);\n    console.log(result);\n}\ndemo();',
  hint: 'Promisify converts error-first callbacks to promises.'
},
{
  id: 'js_async_36',
  topicId: 'js_async',
  question: 'Use async/await with stream processing (Node.js example).',
  mathSolution: 'Process streams with async iteration.',
  codeSolution: '// Node.js stream example\n// const { Readable } = require("stream");\n// async function processStream(stream) {\n//     for await (const chunk of stream) {\n//         console.log(chunk);\n//     }\n// }\n// const stream = Readable.from(["Hello", " ", "World"]);\n// processStream(stream);  // Hello, [space], World',
  hint: 'for await...of works with Node.js streams.'
},
{
  id: 'js_async_37',
  topicId: 'js_async',
  question: 'Implement async memoization with TTL (time to live).',
  mathSolution: 'Cache results with expiration time.',
  codeSolution: 'function memoizeAsync(fn, ttl = 60000) {\n    const cache = new Map();\n    return async function(...args) {\n        const key = JSON.stringify(args);\n        const cached = cache.get(key);\n        if (cached && Date.now() - cached.timestamp < ttl) {\n            return cached.value;\n        }\n        const value = await fn(...args);\n        cache.set(key, { value, timestamp: Date.now() });\n        return value;\n    };\n}\nconst expensiveOp = memoizeAsync(async x => {\n    console.log(`Computing ${x}...`);\n    return x * 2;\n}, 5000);\nexpensiveOp(5).then(console.log);  // Computing 5... 10\nexpensiveOp(5).then(console.log);  // 10 (cached)',
  hint: 'Cache with expiration time.'
},
{
  id: 'js_async_38',
  topicId: 'js_async',
  question: 'Use async/await with batch processing and progress reporting.',
  mathSolution: 'Process batches and report progress.',
  codeSolution: 'async function processBatch(items, batchSize, processor, onProgress) {\n    const results = [];\n    for (let i = 0; i < items.length; i += batchSize) {\n        const batch = items.slice(i, i + batchSize);\n        const batchResults = await Promise.all(batch.map(processor));\n        results.push(...batchResults);\n        if (onProgress) {\n            onProgress(Math.min(i + batchSize, items.length), items.length);\n        }\n    }\n    return results;\n}\nconst items = Array.from({ length: 10 }, (_, i) => i);\nconst processor = async x => {\n    await delay(100);\n    return x * 2;\n};\nprocessBatch(items, 3, processor, (done, total) => {\n    console.log(`Progress: ${done}/${total}`);\n}).then(results => console.log(results));',
  hint: 'Report progress in batch processing.'
},
{
  id: 'js_async_39',
  topicId: 'js_async',
  question: 'Create async function with abort signal for cancellation.',
  mathSolution: 'Use AbortController with async operations.',
  codeSolution: 'async function fetchWithAbort(url, signal) {\n    if (signal.aborted) throw new Error("Aborted");\n    const response = await fetch(url, { signal });\n    return response.json();\n}\nconst controller = new AbortController();\nsetTimeout(() => controller.abort(), 100);\nfetchWithAbort("https://jsonplaceholder.typicode.com/users/1", controller.signal)\n    .then(data => console.log(data))\n    .catch(err => console.log(err.message));  // Aborted or The user aborted a request',
  hint: 'AbortController cancels fetch and other async operations.'
},
{
  id: 'js_async_40',
  topicId: 'js_async',
  question: 'Implement async function with exponential backoff.',
  mathSolution: 'Increase delay exponentially on each retry.',
  codeSolution: 'async function fetchWithBackoff(fn, maxRetries = 5, baseDelay = 100) {\n    for (let i = 0; i <= maxRetries; i++) {\n        try {\n            return await fn();\n        } catch (error) {\n            if (i === maxRetries) throw error;\n            const delay = baseDelay * Math.pow(2, i);\n            console.log(`Retry ${i + 1} after ${delay}ms`);\n            await new Promise(resolve => setTimeout(resolve, delay));\n        }\n    }\n}\nlet attempts = 0;\nconst flakyFetch = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Network error");\n    return "Success";\n};\nfetchWithBackoff(flakyFetch, 5).then(console.log);  // Success',
  hint: 'Exponential backoff prevents overwhelming servers.'
},
{
  id: 'js_async_41',
  topicId: 'js_async',
  question: 'Use async/await with WebSocket.',
  mathSolution: 'Wrap WebSocket events in promises.',
  codeSolution: 'function createWebSocket(url) {\n    return new Promise((resolve, reject) => {\n        const ws = new WebSocket(url);\n        ws.onopen = () => resolve(ws);\n        ws.onerror = () => reject(new Error("Connection failed"));\n    });\n}\nfunction sendMessage(ws, message) {\n    return new Promise((resolve, reject) => {\n        ws.send(message);\n        ws.onmessage = (event) => resolve(event.data);\n        ws.onerror = () => reject(new Error("Send failed"));\n    });\n}\n// async function chat() {\n//     const ws = await createWebSocket("wss://echo.websocket.org");\n//     const response = await sendMessage(ws, "Hello WebSocket");\n//     console.log(response);\n//     ws.close();\n// }\n// chat();',
  hint: 'Promise wrapper for WebSocket events.'
},
{
  id: 'js_async_42',
  topicId: 'js_async',
  question: 'Implement async function that runs with max concurrency.',
  mathSolution: 'Limit number of parallel async operations.',
  codeSolution: 'async function runWithConcurrency(tasks, concurrency) {\n    const results = [];\n    const executing = new Set();\n    for (const task of tasks) {\n        const promise = task().then(result => {\n            executing.delete(promise);\n            return result;\n        });\n        executing.add(promise);\n        results.push(promise);\n        if (executing.size >= concurrency) {\n            await Promise.race(executing);\n        }\n    }\n    return Promise.all(results);\n}\nconst tasks = [1,2,3,4,5,6,7,8,9,10].map(x => async () => {\n    await delay(Math.random() * 500);\n    console.log(`Task ${x} done`);\n    return x;\n});\nrunWithConcurrency(tasks, 3).then(console.log);',
  hint: 'Control concurrency without external libraries.'
},
{
  id: 'js_async_43',
  topicId: 'js_async',
  question: 'Use async/await with async generator for pagination.',
  mathSolution: 'Async generator yields pages as they arrive.',
  codeSolution: 'async function* paginatePages(getPage) {\n    let page = 1;\n    let hasMore = true;\n    while (hasMore) {\n        const { items, hasMore: more } = await getPage(page);\n        yield items;\n        hasMore = more;\n        page++;\n    }\n}\nconst api = {\n    getPage: async (page) => ({\n        items: [`Item ${page * 3 - 2}`, `Item ${page * 3 - 1}`, `Item ${page * 3}`],\n        hasMore: page < 3\n    })\n};\nasync function getAllItems() {\n    const allItems = [];\n    for await (const page of paginatePages(api.getPage)) {\n        allItems.push(...page);\n    }\n    return allItems;\n}\ngetAllItems().then(items => console.log(items));  // 9 items',
  hint: 'Async generators yield values asynchronously.'
},
{
  id: 'js_async_44',
  topicId: 'js_async',
  question: 'Handle race conditions with async/await.',
  mathSolution: 'Use flags or AbortController to prevent stale responses.',
  codeSolution: 'let currentRequest = 0;\nasync function search(query) {\n    const requestId = ++currentRequest;\n    const results = await fetch(`/api/search?q=${query}`).then(r => r.json());\n    if (requestId !== currentRequest) {\n        console.log("Stale response ignored");\n        return null;\n    }\n    return results;\n}\n// Alternately with AbortController\nasync function searchWithAbort(query, signal) {\n    const response = await fetch(`/api/search?q=${query}`, { signal });\n    return response.json();\n}\nlet controller;\nasync function handleSearch(query) {\n    if (controller) controller.abort();\n    controller = new AbortController();\n    try {\n        const results = await searchWithAbort(query, controller.signal);\n        console.log(results);\n    } catch (err) {\n        if (err.name !== "AbortError") throw err;\n    }\n}\n// handleSearch("a"); // Cancels previous search',
  hint: 'Cancel outdated requests to prevent race conditions.'
},
{
  id: 'js_async_45',
  topicId: 'js_async',
  question: 'Use async/await with localStorage (async wrapper).',
  mathSolution: 'localStorage is sync, but can be wrapped for consistency.',
  codeSolution: 'const asyncStorage = {\n    getItem(key) {\n        return Promise.resolve(localStorage.getItem(key));\n    },\n    setItem(key, value) {\n        return Promise.resolve(localStorage.setItem(key, value));\n    },\n    removeItem(key) {\n        return Promise.resolve(localStorage.removeItem(key));\n    }\n};\nasync function savePreferences(prefs) {\n    await asyncStorage.setItem("preferences", JSON.stringify(prefs));\n    const saved = await asyncStorage.getItem("preferences");\n    console.log(JSON.parse(saved));\n}\nsavePreferences({ theme: "dark", fontSize: 14 });',
  hint: 'Wrap sync APIs in Promise.resolve() for async consistency.'
},
{
  id: 'js_async_46',
  topicId: 'js_async',
  question: 'Create async function that attempts multiple URLs until success.',
  mathSolution: 'Try URLs sequentially until one works.',
  codeSolution: 'async function tryUrls(urls) {\n    for (const url of urls) {\n        try {\n            const response = await fetch(url);\n            if (response.ok) {\n                return await response.json();\n            }\n        } catch (err) {\n            console.log(`Failed: ${url}`);\n        }\n    }\n    throw new Error("All URLs failed");\n}\nconst urls = [\n    "https://api1.example.com/data",\n    "https://api2.example.com/data",\n    "https://api3.example.com/data"\n];\n// tryUrls(urls).then(data => console.log(data)).catch(console.log);',
  hint: 'Fallback to backup URLs on failure.'
},
{
  id: 'js_async_47',
  topicId: 'js_async',
  question: 'Use async/await with Promise.all for parallel processing with limit.',
  mathSolution: 'Combine concurrency limiting with parallel execution.',
  codeSolution: 'async function mapConcurrent(items, mapper, concurrency) {\n    const results = [];\n    const chunks = [];\n    for (let i = 0; i < items.length; i += concurrency) {\n        chunks.push(items.slice(i, i + concurrency));\n    }\n    for (const chunk of chunks) {\n        const chunkResults = await Promise.all(chunk.map(mapper));\n        results.push(...chunkResults);\n    }\n    return results;\n}\nconst items = [1,2,3,4,5,6,7,8,9,10];\nconst mapper = async x => {\n    await delay(100);\n    return x * 2;\n};\nmapConcurrent(items, mapper, 3).then(results => console.log(results));  // [2,4,6,8,10,12,14,16,18,20]',
  hint: 'Process in chunks with Promise.all for each chunk.'
},
{
  id: 'js_async_48',
  topicId: 'js_async',
  question: 'Create async function that chains multiple API calls with data transformation.',
  mathSolution: 'Sequential async operations with data flow.',
  codeSolution: 'async function getUserWithDetails(userId) {\n    // Fetch user\n    const user = await fetch(`/api/users/${userId}`).then(r => r.json());\n    // Fetch user\'s posts using user data\n    const posts = await fetch(`/api/users/${user.id}/posts`).then(r => r.json());\n    // Fetch comments for first post\n    const comments = posts[0] ? await fetch(`/api/posts/${posts[0].id}/comments`).then(r => r.json()) : [];\n    // Transform data\n    return {\n        ...user,\n        postCount: posts.length,\n        latestComments: comments.slice(0, 3)\n    };\n}\n// getUserWithDetails(1).then(data => console.log(data));',
  hint: 'Chain dependent API calls with await.'
},
{
  id: 'js_async_49',
  topicId: 'js_async',
  question: 'Use async/await with mutation observer (simplified).',
  mathSolution: 'Wrap MutationObserver in promise.',
  codeSolution: 'function waitForElement(selector) {\n    return new Promise((resolve) => {\n        const element = document.querySelector(selector);\n        if (element) {\n            resolve(element);\n            return;\n        }\n        const observer = new MutationObserver(() => {\n            const element = document.querySelector(selector);\n            if (element) {\n                observer.disconnect();\n                resolve(element);\n            }\n        });\n        observer.observe(document.body, { childList: true, subtree: true });\n    });\n}\n// async function demo() {\n//     console.log("Waiting for element...");\n//     const element = await waitForElement(".dynamic-content");\n//     console.log("Element found:", element);\n// }\n// demo();',
  hint: 'Wait for DOM elements to appear asynchronously.'
},
{
  id: 'js_async_50',
  topicId: 'js_async',
  question: 'Comprehensive: Build async data pipeline with error handling and retries.',
  mathSolution: 'Combine all patterns in production-ready pipeline.',
  codeSolution: 'class DataPipeline {\n    constructor() {\n        this.cache = new Map();\n    }\n    async fetchWithRetry(url, retries = 3) {\n        for (let i = 0; i <= retries; i++) {\n            try {\n                const response = await fetch(url);\n                if (!response.ok) throw new Error(`HTTP ${response.status}`);\n                return await response.json();\n            } catch (err) {\n                if (i === retries) throw err;\n                await this.delay(Math.pow(2, i) * 100);\n            }\n        }\n    }\n    async getCachedOrFetch(url, ttl = 60000) {\n        const cached = this.cache.get(url);\n        if (cached && Date.now() - cached.timestamp < ttl) {\n            return cached.data;\n        }\n        const data = await this.fetchWithRetry(url);\n        this.cache.set(url, { data, timestamp: Date.now() });\n        return data;\n    }\n    async processUserData(userId) {\n        try {\n            const [user, posts] = await Promise.all([\n                this.getCachedOrFetch(`/api/users/${userId}`),\n                this.getCachedOrFetch(`/api/users/${userId}/posts`)\n            ]);\n            const processedPosts = await Promise.all(posts.map(async post => {\n                const comments = await this.getCachedOrFetch(`/api/posts/${post.id}/comments`);\n                return { ...post, commentCount: comments.length };\n            }));\n            return { user, posts: processedPosts, timestamp: Date.now() };\n        } catch (error) {\n            console.error(`Pipeline failed for user ${userId}:`, error);\n            throw error;\n        }\n    }\n    delay(ms) {\n        return new Promise(resolve => setTimeout(resolve, ms));\n    }\n}\nconst pipeline = new DataPipeline();\n// pipeline.processUserData(1)\n//     .then(data => console.log(data))\n//     .catch(err => console.error(err));',
  hint: 'Production-ready async pipeline with caching, retries, and parallel requests.'
}
);