QuizData.questions.push(
{
  id: 'js_promises_1',
  topicId: 'js_promises',
  question: 'Create a resolved promise using Promise.resolve().',
  mathSolution: 'Promise.resolve() creates already resolved promise.',
  codeSolution: 'const resolvedPromise = Promise.resolve("Success!");\nresolvedPromise.then(result => {\n    console.log(result);  // Success!\n});',
  hint: 'Use Promise.resolve() for immediate resolved values.'
},
{
  id: 'js_promises_2',
  topicId: 'js_promises',
  question: 'Create a rejected promise using Promise.reject().',
  mathSolution: 'Promise.reject() creates already rejected promise.',
  codeSolution: 'const rejectedPromise = Promise.reject("Error occurred!");\nrejectedPromise.catch(error => {\n    console.log(error);  // Error occurred!\n});',
  hint: 'Use Promise.reject() for immediate rejection.'
},
{
  id: 'js_promises_3',
  topicId: 'js_promises',
  question: 'Create a promise using the Promise constructor.',
  mathSolution: 'new Promise((resolve, reject) => {...}) creates promise.',
  codeSolution: 'const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve("Operation successful!");\n    }, 1000);\n});\nmyPromise.then(result => console.log(result));',
  hint: 'Call resolve() for success, reject() for failure.'
},
{
  id: 'js_promises_4',
  topicId: 'js_promises',
  question: 'Handle promise resolution using .then() method.',
  mathSolution: '.then() takes callback for resolved value.',
  codeSolution: 'const promise = Promise.resolve(42);\npromise.then(value => {\n    console.log(value);  // 42\n});',
  hint: '.then() executes when promise resolves.'
},
{
  id: 'js_promises_5',
  topicId: 'js_promises',
  question: 'Handle promise rejection using .catch() method.',
  mathSolution: '.catch() takes callback for rejected error.',
  codeSolution: 'const promise = Promise.reject("Something went wrong");\npromise.catch(error => {\n    console.log(error);  // Something went wrong\n});',
  hint: '.catch() handles errors from rejected promises.'
},
{
  id: 'js_promises_6',
  topicId: 'js_promises',
  question: 'Use .finally() to run code regardless of promise outcome.',
  mathSolution: '.finally() executes after resolve or reject.',
  codeSolution: 'const promise = Promise.resolve("Done");\npromise\n    .then(result => console.log(result))\n    .finally(() => console.log("Cleanup done"));\n// Output: Done\n//         Cleanup done',
  hint: '.finally() is great for cleanup operations.'
},
{
  id: 'js_promises_7',
  topicId: 'js_promises',
  question: 'Chain multiple .then() handlers.',
  mathSolution: '.then() returns new promise for chaining.',
  codeSolution: 'Promise.resolve(5)\n    .then(num => num * 2)\n    .then(num => num + 3)\n    .then(num => console.log(num))  // 13\n    .catch(err => console.error(err));',
  hint: 'Each .then() returns a new promise.'
},
{
  id: 'js_promises_8',
  topicId: 'js_promises',
  question: 'Return a promise from .then() for async chaining.',
  mathSolution: 'Returning promise from .then() waits for its resolution.',
  codeSolution: 'function asyncAdd(a, b) {\n    return Promise.resolve(a + b);\n}\nPromise.resolve(5)\n    .then(num => asyncAdd(num, 3))\n    .then(result => console.log(result))  // 8\n    .catch(err => console.error(err));',
  hint: 'Returning promise from .then() flattens nesting.'
},
{
  id: 'js_promises_9',
  topicId: 'js_promises',
  question: 'Throw error in .then() to trigger .catch().',
  mathSolution: 'Throwing error inside .then() goes to .catch().',
  codeSolution: 'Promise.resolve("data")\n    .then(data => {\n        throw new Error("Processing failed");\n    })\n    .catch(error => {\n        console.log(error.message);  // Processing failed\n    });',
  hint: 'Throw error to jump to catch handler.'
},
{
  id: 'js_promises_10',
  topicId: 'js_promises',
  question: 'Use Promise.all() to wait for multiple promises.',
  mathSolution: 'Promise.all() resolves when all promises resolve, rejects if any rejects.',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.resolve(2);\nconst promise3 = Promise.resolve(3);\nPromise.all([promise1, promise2, promise3])\n    .then(results => console.log(results))  // [1, 2, 3]\n    .catch(err => console.error(err));',
  hint: 'Promise.all() returns array of results in same order.'
},
{
  id: 'js_promises_11',
  topicId: 'js_promises',
  question: 'Use Promise.all() with async delays.',
  mathSolution: 'Promise.all() waits for all promises to complete.',
  codeSolution: 'const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));\nPromise.all([delay(100, "A"), delay(50, "B"), delay(80, "C")])\n    .then(results => console.log(results))  // ["A", "B", "C"] (after 100ms)\n    .catch(err => console.error(err));',
  hint: 'Promise.all() waits for slowest promise.'
},
{
  id: 'js_promises_12',
  topicId: 'js_promises',
  question: 'Handle rejection in Promise.all() (fails fast).',
  mathSolution: 'Promise.all() rejects immediately if any promise rejects.',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject("Error!");\nconst promise3 = Promise.resolve(3);\nPromise.all([promise1, promise2, promise3])\n    .then(results => console.log(results))\n    .catch(error => console.log(error));  // Error!',
  hint: 'Promise.all() fails fast on first rejection.'
},
{
  id: 'js_promises_13',
  topicId: 'js_promises',
  question: 'Use Promise.allSettled() to wait for all promises regardless of outcome.',
  mathSolution: 'Promise.allSettled() resolves when all promises settle (resolve or reject).',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject("Error!");\nconst promise3 = Promise.resolve(3);\nPromise.allSettled([promise1, promise2, promise3])\n    .then(results => {\n        results.forEach(result => {\n            if (result.status === "fulfilled") {\n                console.log(`Value: ${result.value}`);\n            } else {\n                console.log(`Reason: ${result.reason}`);\n            }\n        });\n    });',
  hint: 'allSettled never rejects, always resolves with status objects.'
},
{
  id: 'js_promises_14',
  topicId: 'js_promises',
  question: 'Use Promise.race() to get first settled promise.',
  mathSolution: 'Promise.race() resolves/rejects with first promise that settles.',
  codeSolution: 'const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\nconst slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));\nPromise.race([fast, slow])\n    .then(result => console.log(result));  // Fast',
  hint: 'Promise.race() returns first promise to settle (resolve or reject).'
},
{
  id: 'js_promises_15',
  topicId: 'js_promises',
  question: 'Use Promise.any() to get first fulfilled promise.',
  mathSolution: 'Promise.any() returns first fulfilled promise, ignores rejections.',
  codeSolution: 'const p1 = Promise.reject("Error1");\nconst p2 = Promise.resolve("Success");\nconst p3 = Promise.resolve("Another");\nPromise.any([p1, p2, p3])\n    .then(result => console.log(result))  // Success\n    .catch(err => console.log(err));',
  hint: 'Promise.any() ignores rejections, needs at least one success.'
},
{
  id: 'js_promises_16',
  topicId: 'js_promises',
  question: 'Handle Promise.any() when all promises reject.',
  mathSolution: 'Promise.any() rejects with AggregateError if all reject.',
  codeSolution: 'const p1 = Promise.reject("Error1");\nconst p2 = Promise.reject("Error2");\nPromise.any([p1, p2])\n    .then(result => console.log(result))\n    .catch(error => {\n        console.log(error instanceof AggregateError);  // true\n        console.log(error.errors);  // ["Error1", "Error2"]\n    });',
  hint: 'AggregateError contains all rejection reasons.'
},
{
  id: 'js_promises_17',
  topicId: 'js_promises',
  question: 'Create delay function using Promise and setTimeout.',
  mathSolution: 'Return promise that resolves after milliseconds.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(1000).then(() => console.log("1 second passed"));',
  hint: 'Use setTimeout inside promise constructor.'
},
{
  id: 'js_promises_18',
  topicId: 'js_promises',
  question: 'Create promise that rejects after timeout.',
  mathSolution: 'Promise that rejects if operation takes too long.',
  codeSolution: 'function timeout(ms, message = "Timeout") {\n    return new Promise((_, reject) => {\n        setTimeout(() => reject(new Error(message)), ms);\n    });\n}\ntimeout(1000).catch(err => console.log(err.message));  // Timeout',
  hint: 'Use with Promise.race() for timeout functionality.'
},
{
  id: 'js_promises_19',
  topicId: 'js_promises',
  question: 'Implement timeout for any promise using Promise.race().',
  mathSolution: 'Race a promise against a timeout promise.',
  codeSolution: 'function withTimeout(promise, ms) {\n    const timeoutPromise = new Promise((_, reject) => \n        setTimeout(() => reject(new Error("Timeout")), ms));\n    return Promise.race([promise, timeoutPromise]);\n}\nconst slowPromise = new Promise(resolve => setTimeout(() => resolve("Done"), 2000));\nwithTimeout(slowPromise, 1000)\n    .then(result => console.log(result))\n    .catch(err => console.log(err.message));  // Timeout',
  hint: 'Race your promise with a timeout promise.'
},
{
  id: 'js_promises_20',
  topicId: 'js_promises',
  question: 'Convert callback-based function to promise.',
  mathSolution: 'Wrap callback in Promise constructor.',
  codeSolution: 'function readFilePromise(filename) {\n    return new Promise((resolve, reject) => {\n        // Simulating Node.js fs.readFile\n        setTimeout(() => {\n            if (filename === "valid.txt") {\n                resolve("File content");\n            } else {\n                reject(new Error("File not found"));\n            }\n        }, 100);\n    });\n}\nreadFilePromise("valid.txt")\n    .then(content => console.log(content))\n    .catch(err => console.log(err.message));',
  hint: 'Call resolve on success, reject on error.'
},
{
  id: 'js_promises_21',
  topicId: 'js_promises',
  question: 'Create a promise that resolves with dynamic data.',
  mathSolution: 'Use setTimeout to simulate async operation.',
  codeSolution: 'function fetchUserData(userId) {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve({ id: userId, name: "John Doe", age: 30 });\n        }, 500);\n    });\n}\nfetchUserData(1).then(user => console.log(user.name));  // John Doe',
  hint: 'Promises are great for async data fetching.'
},
{
  id: 'js_promises_22',
  topicId: 'js_promises',
  question: 'Chain promises for sequential async operations.',
  mathSolution: 'Return promise from .then() for sequential execution.',
  codeSolution: 'function step1() { return Promise.resolve("Step 1 done"); }\nfunction step2(prev) { return Promise.resolve(`${prev} -> Step 2 done`); }\nfunction step3(prev) { return Promise.resolve(`${prev} -> Step 3 done`); }\nstep1()\n    .then(result => step2(result))\n    .then(result => step3(result))\n    .then(final => console.log(final));\n// Step 1 done -> Step 2 done -> Step 3 done',
  hint: 'Each step waits for previous to complete.'
},
{
  id: 'js_promises_23',
  topicId: 'js_promises',
  question: 'Handle errors in promise chain.',
  mathSolution: 'Single .catch() handles errors from anywhere in chain.',
  codeSolution: 'Promise.resolve("start")\n    .then(() => { throw new Error("Something failed"); })\n    .then(() => console.log("This won\'t run"))\n    .catch(err => console.log(`Caught: ${err.message}`))  // Caught: Something failed\n    .finally(() => console.log("Cleanup"));',
  hint: 'One catch at end handles all preceding errors.'
},
{
  id: 'js_promises_24',
  topicId: 'js_promises',
  question: 'Use Promise.resolve() to normalize values to promises.',
  mathSolution: 'Promise.resolve() wraps non-promise values.',
  codeSolution: 'function asyncOperation(value) {\n    return Promise.resolve(value).then(v => v * 2);\n}\nconsole.log(asyncOperation(5));  // Promise\nasyncOperation(5).then(r => console.log(r));  // 10',
  hint: 'Promise.resolve() creates promise from any value.'
},
{
  id: 'js_promises_25',
  topicId: 'js_promises',
  question: 'Create a promise that resolves after random time.',
  mathSolution: 'Set random timeout to simulate variable latency.',
  codeSolution: 'function randomDelay(value) {\n    const delay = Math.random() * 2000;\n    return new Promise(resolve => {\n        setTimeout(() => resolve(value), delay);\n    });\n}\nrandomDelay("Done").then(result => console.log(result));',
  hint: 'Use for testing race conditions.'
},
{
  id: 'js_promises_26',
  topicId: 'js_promises',
  question: 'Retry failed promises with recursion.',
  mathSolution: 'Retry function that calls itself on failure.',
  codeSolution: 'function retry(fn, retries = 3) {\n    return fn().catch(err => {\n        if (retries > 0) {\n            console.log(`Retrying... ${retries} left`);\n            return retry(fn, retries - 1);\n        }\n        throw err;\n    });\n}\nlet attempts = 0;\nconst flakyFunction = () => {\n    attempts++;\n    if (attempts < 3) return Promise.reject("Failed");\n    return Promise.resolve("Success");\n};\nretry(flakyFunction, 3).then(result => console.log(result));  // Success',
  hint: 'Recursive retry with decreasing retry count.'
},
{
  id: 'js_promises_27',
  topicId: 'js_promises',
  question: 'Implement Promise.all() from scratch.',
  mathSolution: 'Track all promises, resolve when all complete.',
  codeSolution: 'function myPromiseAll(promises) {\n    return new Promise((resolve, reject) => {\n        const results = [];\n        let completed = 0;\n        promises.forEach((promise, index) => {\n            Promise.resolve(promise)\n                .then(result => {\n                    results[index] = result;\n                    completed++;\n                    if (completed === promises.length) resolve(results);\n                })\n                .catch(reject);\n        });\n        if (promises.length === 0) resolve([]);\n    });\n}\nmyPromiseAll([Promise.resolve(1), Promise.resolve(2)])\n    .then(results => console.log(results));  // [1, 2]',
  hint: 'Count completed promises, store results in order.'
},
{
  id: 'js_promises_28',
  topicId: 'js_promises',
  question: 'Implement Promise.race() from scratch.',
  mathSolution: 'Resolve or reject with first settled promise.',
  codeSolution: 'function myPromiseRace(promises) {\n    return new Promise((resolve, reject) => {\n        promises.forEach(promise => {\n            Promise.resolve(promise).then(resolve).catch(reject);\n        });\n    });\n}\nconst fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\nconst slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 200));\nmyPromiseRace([fast, slow]).then(result => console.log(result));  // Fast',
  hint: 'First promise to settle determines outcome.'
},
{
  id: 'js_promises_29',
  topicId: 'js_promises',
  question: 'Implement Promise.any() from scratch.',
  mathSolution: 'Resolve with first fulfilled, reject if all reject.',
  codeSolution: 'function myPromiseAny(promises) {\n    return new Promise((resolve, reject) => {\n        const errors = [];\n        let rejectedCount = 0;\n        promises.forEach((promise, index) => {\n            Promise.resolve(promise)\n                .then(resolve)\n                .catch(err => {\n                    errors[index] = err;\n                    rejectedCount++;\n                    if (rejectedCount === promises.length) {\n                        reject(new AggregateError(errors, "All promises rejected"));\n                    }\n                });\n        });\n    });\n}\nmyPromiseAny([Promise.reject("Error"), Promise.resolve("Success")])\n    .then(result => console.log(result));  // Success',
  hint: 'Track rejections, resolve on first fulfillment.'
},
{
  id: 'js_promises_30',
  topicId: 'js_promises',
  question: 'Use promise for parallel API requests.',
  mathSolution: 'Promise.all for concurrent requests.',
  codeSolution: 'const fetchUser = () => Promise.resolve({ id: 1, name: "John" });\nconst fetchPosts = () => Promise.resolve([{ id: 1, title: "Post1" }]);\nconst fetchComments = () => Promise.resolve([{ id: 1, text: "Comment" }]);\nPromise.all([fetchUser(), fetchPosts(), fetchComments()])\n    .then(([user, posts, comments]) => {\n        console.log(user, posts, comments);\n    });',
  hint: 'Run independent async operations in parallel.'
},
{
  id: 'js_promises_31',
  topicId: 'js_promises',
  question: 'Use promise for sequential API calls (each depends on previous).',
  mathSolution: 'Chain promises for dependent operations.',
  codeSolution: 'function getUser(id) { return Promise.resolve({ id, name: "John" }); }\nfunction getPosts(userId) { return Promise.resolve([`Post by user ${userId}`]); }\nfunction getComments(postId) { return Promise.resolve([`Comment on post ${postId}`]); }\ngetUser(1)\n    .then(user => getPosts(user.id))\n    .then(posts => getComments(posts[0].id))\n    .then(comments => console.log(comments));',
  hint: 'Each step uses result from previous step.'
},
{
  id: 'js_promises_32',
  topicId: 'js_promises',
  question: 'Create a promise that resolves with set of values.',
  mathSolution: 'Resolve with object containing multiple values.',
  codeSolution: 'function fetchDashboardData() {\n    return Promise.all([\n        Promise.resolve({ stats: [1,2,3] }),\n        Promise.resolve({ recentUsers: ["Alice", "Bob"] }),\n        Promise.resolve({ notifications: 5 })\n    ]).then(([stats, users, notifications]) => ({\n        stats,\n        users,\n        notifications\n    }));\n}\nfetchDashboardData().then(data => console.log(data));',
  hint: 'Use object destructuring for clean API.'
},
{
  id: 'js_promises_33',
  topicId: 'js_promises',
  question: 'Handle promise rejection with fallback value.',
  mathSolution: 'Use .catch() to return default value.',
  codeSolution: 'function fetchData() {\n    return Promise.reject("Network error");\n}\nfetchData()\n    .catch(error => {\n        console.log(`Error: ${error}`);\n        return "Default data";\n    })\n    .then(data => console.log(data));  // Default data',
  hint: 'Return fallback value in catch handler.'
},
{
  id: 'js_promises_34',
  topicId: 'js_promises',
  question: 'Use promise to load script dynamically.',
  mathSolution: 'Create script element, resolve on load, reject on error.',
  codeSolution: 'function loadScript(src) {\n    return new Promise((resolve, reject) => {\n        const script = document.createElement("script");\n        script.src = src;\n        script.onload = () => resolve(script);\n        script.onerror = () => reject(new Error(`Failed to load ${src}`));\n        document.head.appendChild(script);\n    });\n}\n// loadScript("https://code.jquery.com/jquery-3.6.0.min.js")\n//     .then(() => console.log("Script loaded"))\n//     .catch(err => console.log(err));',
  hint: 'Works for dynamic script loading.'
},
{
  id: 'js_promises_35',
  topicId: 'js_promises',
  question: 'Implement promise with progress notification (pattern).',
  mathSolution: 'Use callback for progress, not standard promise.',
  codeSolution: 'function uploadFile(file, onProgress) {\n    return new Promise((resolve, reject) => {\n        let progress = 0;\n        const interval = setInterval(() => {\n            progress += 10;\n            onProgress(progress);\n            if (progress >= 100) {\n                clearInterval(interval);\n                resolve("Upload complete");\n            }\n        }, 200);\n    });\n}\nuploadFile("myfile.txt", progress => console.log(`Progress: ${progress}%`))\n    .then(result => console.log(result));',
  hint: 'Use callback parameter for progress updates.'
},
{
  id: 'js_promises_36',
  topicId: 'js_promises',
  question: 'Use promise for caching results.',
  mathSolution: 'Cache promise, not just value.',
  codeSolution: 'const cache = new Map();\nfunction getData(key) {\n    if (cache.has(key)) return cache.get(key);\n    const promise = new Promise(resolve => {\n        setTimeout(() => resolve(`Data for ${key}`), 1000);\n    });\n    cache.set(key, promise);\n    return promise;\n}\ngetData("user1").then(data => console.log(data));\ngetData("user1").then(data => console.log(data)); // Uses cached promise',
  hint: 'Store promise in cache to avoid duplicate async calls.'
},
{
  id: 'js_promises_37',
  topicId: 'js_promises',
  question: 'Convert Node.js callback-style function to promise (promisify).',
  mathSolution: 'Wrapper that returns promise, calls callback function.',
  codeSolution: 'function promisify(fn) {\n    return function(...args) {\n        return new Promise((resolve, reject) => {\n            fn(...args, (error, result) => {\n                if (error) reject(error);\n                else resolve(result);\n            });\n        });\n    };\n}\n// Example with setTimeout\nfunction delayCallback(ms, callback) {\n    setTimeout(() => callback(null, `Waited ${ms}ms`), ms);\n}\nconst delayPromise = promisify(delayCallback);\ndelayPromise(500).then(result => console.log(result));',
  hint: 'Promisify converts error-first callbacks to promises.'
},
{
  id: 'js_promises_38',
  topicId: 'js_promises',
  question: 'Create promise that resolves after condition becomes true.',
  mathSolution: 'Polling with setInterval, resolve when condition met.',
  codeSolution: 'function waitFor(condition, interval = 100) {\n    return new Promise(resolve => {\n        const check = setInterval(() => {\n            if (condition()) {\n                clearInterval(check);\n                resolve();\n            }\n        }, interval);\n    });\n}\nlet flag = false;\nsetTimeout(() => { flag = true; }, 1000);\nwaitFor(() => flag === true).then(() => console.log("Condition met!"));',
  hint: 'Poll until condition becomes true.'
},
{
  id: 'js_promises_39',
  topicId: 'js_promises',
  question: 'Use promise to batch multiple async operations.',
  mathSolution: 'Process array in chunks to limit concurrency.',
  codeSolution: 'async function processInBatches(items, batchSize, processor) {\n    const results = [];\n    for (let i = 0; i < items.length; i += batchSize) {\n        const batch = items.slice(i, i + batchSize);\n        const batchResults = await Promise.all(batch.map(processor));\n        results.push(...batchResults);\n    }\n    return results;\n}\nconst items = [1,2,3,4,5,6];\nconst processor = x => Promise.resolve(x * 2);\nprocessInBatches(items, 2, processor).then(results => console.log(results));',
  hint: 'Process in batches to control concurrency.'
},
{
  id: 'js_promises_40',
  topicId: 'js_promises',
  question: 'Use promise for debounced async operation.',
  mathSolution: 'Debounce with promise that cancels previous calls.',
  codeSolution: 'function debouncePromise(fn, delay) {\n    let timeoutId;\n    let rejectFn;\n    return function(...args) {\n        if (rejectFn) rejectFn(new Error("Cancelled"));\n        return new Promise((resolve, reject) => {\n            rejectFn = reject;\n            clearTimeout(timeoutId);\n            timeoutId = setTimeout(() => {\n                fn(...args).then(resolve).catch(reject);\n                rejectFn = null;\n            }, delay);\n        });\n    };\n}\nconst searchAPI = debouncePromise(query => {\n    return Promise.resolve(`Results for: ${query}`);\n}, 300);\nsearchAPI("hello").then(console.log);\nsearchAPI("hello world").then(console.log); // Only last call executes',
  hint: 'Cancel previous pending operations.'
},
{
  id: 'js_promises_41',
  topicId: 'js_promises',
  question: 'Create promise queue for sequential execution.',
  mathSolution: 'Process promises one after another using reduce.',
  codeSolution: 'class PromiseQueue {\n    constructor() {\n        this.queue = Promise.resolve();\n    }\n    add(promiseFactory) {\n        this.queue = this.queue.then(() => promiseFactory());\n        return this.queue;\n    }\n}\nconst queue = new PromiseQueue();\nqueue.add(() => delay(100).then(() => console.log(1)));\nqueue.add(() => delay(50).then(() => console.log(2)));\nqueue.add(() => delay(30).then(() => console.log(3)));\n// Output: 1, 2, 3 (in order, regardless of delay)',
  hint: 'Queue ensures sequential processing.'
},
{
  id: 'js_promises_42',
  topicId: 'js_promises',
  question: 'Use promise with paginated API requests.',
  mathSolution: 'Recursively fetch pages until complete.',
  codeSolution: 'function fetchPage(page) {\n    return Promise.resolve({ items: [`Item ${page}`], hasMore: page < 3 });\n}\nfunction fetchAll(page = 1) {\n    return fetchPage(page).then(result => {\n        if (result.hasMore) {\n            return fetchAll(page + 1).then(more => [...result.items, ...more]);\n        }\n        return result.items;\n    });\n}\nfetchAll().then(allItems => console.log(allItems));  // ["Item 1", "Item 2", "Item 3"]',
  hint: 'Recursive promises for paginated data.'
},
{
  id: 'js_promises_43',
  topicId: 'js_promises',
  question: 'Handle promise rejection with specific error types.',
  mathSolution: 'Check error instance in catch for different handling.',
  codeSolution: 'class NetworkError extends Error {}\nclass ValidationError extends Error {}\nfunction riskyOperation() {\n    return Promise.reject(new ValidationError("Invalid input"));\n}\nriskyOperation()\n    .catch(err => {\n        if (err instanceof ValidationError) {\n            console.log(`Validation: ${err.message}`);\n        } else if (err instanceof NetworkError) {\n            console.log(`Network: ${err.message}`);\n        } else {\n            console.log(`Unknown: ${err.message}`);\n        }\n    });',
  hint: 'Use custom error classes for different handling.'
},
{
  id: 'js_promises_44',
  topicId: 'js_promises',
  question: 'Ensure promise always resolves using Promise.resolve().catch().',
  mathSolution: 'Wrap in Promise.resolve().catch() to prevent unhandled rejection.',
  codeSolution: 'function safePromise(promise) {\n    return Promise.resolve(promise).catch(err => {\n        console.warn("Caught error, returning null");\n        return null;\n    });\n}\nsafePromise(Promise.reject("Error"))\n    .then(result => console.log(result));  // null',
  hint: 'Use to prevent unhandled rejections.'
},
{
  id: 'js_promises_45',
  topicId: 'js_promises',
  question: 'Use promise for memoizing expensive async operations.',
  mathSolution: 'Cache results by input parameters.',
  codeSolution: 'function memoizeAsync(fn) {\n    const cache = new Map();\n    return async function(...args) {\n        const key = JSON.stringify(args);\n        if (cache.has(key)) return cache.get(key);\n        const result = await fn(...args);\n        cache.set(key, result);\n        return result;\n    };\n}\nconst expensiveOp = memoizeAsync(x => {\n    console.log(`Computing ${x}...`);\n    return Promise.resolve(x * 2);\n});\nexpensiveOp(5).then(console.log); // Computing 5... 10\nexpensiveOp(5).then(console.log); // 10 (from cache)',
  hint: 'Memoization caches results by arguments.'
},
{
  id: 'js_promises_46',
  topicId: 'js_promises',
  question: 'Race multiple promises but continue on first success.',
  mathSolution: 'Use Promise.any() to get first success.',
  codeSolution: 'function raceSuccess(promises) {\n    return Promise.any(promises);\n}\nconst slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));\nconst medium = new Promise(resolve => setTimeout(() => resolve("Medium"), 200));\nconst fast = new Promise((_, reject) => setTimeout(() => reject("Fast failed"), 100));\nraceSuccess([slow, medium, fast])\n    .then(result => console.log(result));  // Medium (first success)',
  hint: 'Promise.any() ignores rejections, returns first success.'
},
{
  id: 'js_promises_47',
  topicId: 'js_promises',
  question: 'Use promise to implement simple polling with timeout.',
  mathSolution: 'Poll until condition or timeout.',
  codeSolution: 'function pollUntil(condition, interval = 100, timeout = 5000) {\n    const startTime = Date.now();\n    return new Promise((resolve, reject) => {\n        const check = () => {\n            if (condition()) {\n                resolve();\n            } else if (Date.now() - startTime >= timeout) {\n                reject(new Error("Timeout"));\n            } else {\n                setTimeout(check, interval);\n            }\n        };\n        check();\n    });\n}\nlet ready = false;\nsetTimeout(() => { ready = true; }, 2000);\npollUntil(() => ready, 100, 5000)\n    .then(() => console.log("Ready!"))\n    .catch(err => console.log(err.message));',
  hint: 'Poll until condition met or timeout.'
},
{
  id: 'js_promises_48',
  topicId: 'js_promises',
  question: 'Implement promise semaphore for concurrency limit.',
  mathSolution: 'Track active operations, queue waiting tasks.',
  codeSolution: 'class Semaphore {\n    constructor(max) {\n        this.max = max;\n        this.active = 0;\n        this.queue = [];\n    }\n    async acquire() {\n        if (this.active < this.max) {\n            this.active++;\n            return;\n        }\n        return new Promise(resolve => this.queue.push(resolve));\n    }\n    release() {\n        if (this.queue.length > 0) {\n            const resolve = this.queue.shift();\n            resolve();\n        } else {\n            this.active--;\n        }\n    }\n    async run(fn) {\n        await this.acquire();\n        try {\n            return await fn();\n        } finally {\n            this.release();\n        }\n    }\n}\nconst semaphore = new Semaphore(2);\nconst tasks = [1,2,3,4,5].map(x => \n    semaphore.run(() => \n        delay(1000).then(() => console.log(`Task ${x} done`))\n    )\n);\nPromise.all(tasks).then(() => console.log("All done"));',
  hint: 'Limits concurrent async operations.'
},
{
  id: 'js_promises_49',
  topicId: 'js_promises',
  question: 'Create cancelable promise pattern.',
  mathSolution: 'Use AbortController to cancel promises.',
  codeSolution: 'function cancelablePromise(executor) {\n    let rejectFn;\n    const cancel = () => rejectFn(new Error("Cancelled"));\n    const promise = new Promise((resolve, reject) => {\n        rejectFn = reject;\n        executor(resolve, reject);\n    });\n    return { promise, cancel };\n}\nconst { promise, cancel } = cancelablePromise(resolve => {\n    setTimeout(() => resolve("Done"), 5000);\n});\npromise.then(console.log).catch(err => console.log(err.message));\ncancel(); // Cancel after 1 second\nsetTimeout(() => cancel(), 1000);',
  hint: 'Return cancel function with promise.'
},
{
  id: 'js_promises_50',
  topicId: 'js_promises',
  question: 'Comprehensive: Async data pipeline with promises.',
  mathSolution: 'Combine multiple promise patterns in data processing.',
  codeSolution: '// Simulate API calls\nconst fetchUser = (id) => Promise.resolve({ id, name: `User${id}` });\nconst fetchOrders = (userId) => Promise.resolve([`Order1-${userId}`, `Order2-${userId}`]);\nconst fetchProducts = (orderIds) => Promise.all(orderIds.map(id => Promise.resolve(`Product for ${id}`)));\n\n// Pipeline\nfunction getUserOrdersProducts(userId) {\n    return fetchUser(userId)\n        .then(user => fetchOrders(user.id).then(orders => ({ user, orders })))\n        .then(data => fetchProducts(data.orders).then(products => ({ ...data, products })))\n        .then(result => {\n            console.log(`User: ${result.user.name}`);\n            console.log(`Orders: ${result.orders.length}`);\n            console.log(`Products: ${result.products}`);\n            return result;\n        })\n        .catch(err => console.error(`Pipeline failed: ${err}`));\n}\ngetUserOrdersProducts(1);',
  hint: 'Chain promises for dependent async operations.'
}
);