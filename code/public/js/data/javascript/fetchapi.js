QuizData.questions.push(
{
  id: 'js_fetch_1',
  topicId: 'js_fetch',
  question: 'Make a basic GET request using fetch().',
  mathSolution: 'fetch() returns promise that resolves to Response object.',
  codeSolution: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'fetch() takes URL as first argument.'
},
{
  id: 'js_fetch_2',
  topicId: 'js_fetch',
  question: 'Use async/await with fetch for GET request.',
  mathSolution: 'await fetch() and await response.json() for cleaner syntax.',
  codeSolution: 'async function getPost() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error("Error:", error);\n    }\n}\ngetPost();',
  hint: 'await both fetch() and response.json().'
},
{
  id: 'js_fetch_3',
  topicId: 'js_fetch',
  question: 'Check response status before parsing JSON.',
  mathSolution: 'Use response.ok or check response.status.',
  codeSolution: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => {\n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        return response.json();\n    })\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Always check response.ok before parsing.'
},
{
  id: 'js_fetch_4',
  topicId: 'js_fetch',
  question: 'Make POST request with JSON data using fetch().',
  mathSolution: 'Use method: "POST" and body with JSON.stringify().',
  codeSolution: 'const newPost = {\n    title: "My Post",\n    body: "This is the content",\n    userId: 1\n};\nfetch("https://jsonplaceholder.typicode.com/posts", {\n    method: "POST",\n    headers: {\n        "Content-Type": "application/json"\n    },\n    body: JSON.stringify(newPost)\n})\n    .then(response => response.json())\n    .then(data => console.log("Created:", data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Set Content-Type header to application/json.'
},
{
  id: 'js_fetch_5',
  topicId: 'js_fetch',
  question: 'Make PUT request to update existing resource.',
  mathSolution: 'Use method: "PUT" with updated data.',
  codeSolution: 'const updatedPost = {\n    id: 1,\n    title: "Updated Title",\n    body: "Updated content",\n    userId: 1\n};\nfetch("https://jsonplaceholder.typicode.com/posts/1", {\n    method: "PUT",\n    headers: {\n        "Content-Type": "application/json"\n    },\n    body: JSON.stringify(updatedPost)\n})\n    .then(response => response.json())\n    .then(data => console.log("Updated:", data))\n    .catch(error => console.error("Error:", error));',
  hint: 'PUT replaces entire resource.'
},
{
  id: 'js_fetch_6',
  topicId: 'js_fetch',
  question: 'Make PATCH request for partial update.',
  mathSolution: 'Use method: "PATCH" with only changed fields.',
  codeSolution: 'const partialUpdate = {\n    title: "New Title Only"\n};\nfetch("https://jsonplaceholder.typicode.com/posts/1", {\n    method: "PATCH",\n    headers: {\n        "Content-Type": "application/json"\n    },\n    body: JSON.stringify(partialUpdate)\n})\n    .then(response => response.json())\n    .then(data => console.log("Patched:", data))\n    .catch(error => console.error("Error:", error));',
  hint: 'PATCH only updates specified fields.'
},
{
  id: 'js_fetch_7',
  topicId: 'js_fetch',
  question: 'Make DELETE request to remove resource.',
  mathSolution: 'Use method: "DELETE" without body.',
  codeSolution: 'fetch("https://jsonplaceholder.typicode.com/posts/1", {\n    method: "DELETE"\n})\n    .then(response => {\n        if (response.ok) {\n            console.log("Post deleted successfully");\n        }\n    })\n    .catch(error => console.error("Error:", error));',
  hint: 'DELETE requests typically don\'t have a body.'
},
{
  id: 'js_fetch_8',
  topicId: 'js_fetch',
  question: 'Send query parameters in GET request.',
  mathSolution: 'Append query string to URL or use URLSearchParams.',
  codeSolution: 'const params = new URLSearchParams({\n    userId: 1,\n    _limit: 5\n});\nfetch(`https://jsonplaceholder.typicode.com/posts?${params}`)\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Use URLSearchParams to build query string.'
},
{
  id: 'js_fetch_9',
  topicId: 'js_fetch',
  question: 'Set custom headers in fetch request.',
  mathSolution: 'Add headers object in fetch options.',
  codeSolution: 'fetch("https://jsonplaceholder.typicode.com/posts/1", {\n    headers: {\n        "Authorization": "Bearer my-token-123",\n        "X-Custom-Header": "custom-value",\n        "Accept": "application/json"\n    }\n})\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Headers object contains request metadata.'
},
{
  id: 'js_fetch_10',
  topicId: 'js_fetch',
  question: 'Handle different response types (text, blob, json).',
  mathSolution: 'Use appropriate response method based on content type.',
  codeSolution: '// For JSON\nfetch(url).then(res => res.json());\n// For text\nfetch(url).then(res => res.text());\n// For image/blob\nfetch(imageUrl).then(res => res.blob());\n// For array buffer\nfetch(url).then(res => res.arrayBuffer());',
  hint: 'Response methods: .json(), .text(), .blob(), .arrayBuffer(), .formData()'
},
{
  id: 'js_fetch_11',
  topicId: 'js_fetch',
  question: 'Upload file using fetch with FormData.',
  mathSolution: 'Use FormData object with multipart/form-data.',
  codeSolution: 'async function uploadFile(file) {\n    const formData = new FormData();\n    formData.append("file", file);\n    formData.append("name", "example.jpg");\n    \n    try {\n        const response = await fetch("https://api.example.com/upload", {\n            method: "POST",\n            body: formData\n        });\n        const result = await response.json();\n        console.log("Uploaded:", result);\n    } catch (error) {\n        console.error("Upload failed:", error);\n    }\n}',
  hint: 'Don\'t set Content-Type header; browser sets it with boundary.'
},
{
  id: 'js_fetch_12',
  topicId: 'js_fetch',
  question: 'Track upload progress using fetch (limited).',
  mathSolution: 'Use XMLHttpRequest for progress, fetch doesn\'t support progress.',
  codeSolution: '// fetch doesn\'t have built-in upload progress\n// Use XMLHttpRequest for progress tracking\nfunction uploadWithProgress(file, onProgress) {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.upload.addEventListener("progress", (e) => {\n            if (e.lengthComputable) {\n                onProgress(e.loaded / e.total);\n            }\n        });\n        xhr.onload = () => resolve(xhr.response);\n        xhr.onerror = () => reject(xhr.statusText);\n        xhr.open("POST", "https://api.example.com/upload");\n        const formData = new FormData();\n        formData.append("file", file);\n        xhr.send(formData);\n    });\n}',
  hint: 'Use XMLHttpRequest for upload/download progress with fetch.'
},
{
  id: 'js_fetch_13',
  topicId: 'js_fetch',
  question: 'Abort fetch request using AbortController.',
  mathSolution: 'Pass signal from AbortController to fetch.',
  codeSolution: 'const controller = new AbortController();\nconst signal = controller.signal;\n\nfetch("https://jsonplaceholder.typicode.com/posts/1", { signal })\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => {\n        if (error.name === "AbortError") {\n            console.log("Fetch aborted");\n        } else {\n            console.error("Error:", error);\n        }\n    });\n\n// Abort after 1 second\nsetTimeout(() => controller.abort(), 1000);',
  hint: 'AbortController cancels in-flight fetch requests.'
},
{
  id: 'js_fetch_14',
  topicId: 'js_fetch',
  question: 'Set timeout for fetch request using AbortController.',
  mathSolution: 'Abort after specified time.',
  codeSolution: 'function fetchWithTimeout(url, timeout = 5000) {\n    const controller = new AbortController();\n    const timeoutId = setTimeout(() => controller.abort(), timeout);\n    \n    return fetch(url, { signal: controller.signal })\n        .then(response => {\n            clearTimeout(timeoutId);\n            return response;\n        })\n        .catch(error => {\n            clearTimeout(timeoutId);\n            if (error.name === "AbortError") {\n                throw new Error("Request timeout");\n            }\n            throw error;\n        });\n}\n\nfetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error.message));',
  hint: 'Race fetch against timeout using abort.'
},
{
  id: 'js_fetch_15',
  topicId: 'js_fetch',
  question: 'Handle redirects in fetch (redirect option).',
  mathSolution: 'Use redirect option: follow, error, or manual.',
  codeSolution: '// Follow redirects (default)\nfetch(url, { redirect: "follow" });\n\n// Error on redirect\nfetch(url, { redirect: "error" })\n    .catch(err => console.log("Redirect not allowed"));\n\n// Manual redirect handling\nfetch(url, { redirect: "manual" })\n    .then(response => {\n        if (response.type === "opaqueredirect") {\n            console.log("Redirected, cannot follow manually");\n        }\n        return response;\n    });',
  hint: 'redirect: "error" throws error on redirect.'
},
{
  id: 'js_fetch_16',
  topicId: 'js_fetch',
  question: 'Send cookies with fetch using credentials option.',
  mathSolution: 'Set credentials: "include" to send cookies cross-origin.',
  codeSolution: 'fetch("https://api.example.com/user", {\n    credentials: "include"  // Send cookies\n})\n    .then(response => response.json())\n    .then(data => console.log(data));\n\n// Options:\n// "omit" - no cookies (default)\n// "same-origin" - send only for same origin\n// "include" - send for cross-origin too',
  hint: 'credentials: "include" sends cookies cross-origin.'
},
{
  id: 'js_fetch_17',
  topicId: 'js_fetch',
  question: 'Make multiple fetch requests in parallel with Promise.all().',
  mathSolution: 'Use Promise.all to wait for all fetches.',
  codeSolution: 'async function fetchMultiple() {\n    try {\n        const [posts, users, comments] = await Promise.all([\n            fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),\n            fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),\n            fetch("https://jsonplaceholder.typicode.com/comments").then(r => r.json())\n        ]);\n        console.log(`Posts: ${posts.length}, Users: ${users.length}, Comments: ${comments.length}`);\n    } catch (error) {\n        console.error("One or more requests failed:", error);\n    }\n}\nfetchMultiple();',
  hint: 'Promise.all runs requests in parallel.'
},
{
  id: 'js_fetch_18',
  topicId: 'js_fetch',
  question: 'Handle failed requests with retry logic.',
  mathSolution: 'Retry fetch on failure with exponential backoff.',
  codeSolution: 'async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {\n    for (let i = 0; i <= retries; i++) {\n        try {\n            const response = await fetch(url, options);\n            if (!response.ok) throw new Error(`HTTP ${response.status}`);\n            return response;\n        } catch (error) {\n            if (i === retries) throw error;\n            console.log(`Retry ${i + 1}/${retries} after ${delay}ms`);\n            await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));\n        }\n    }\n}\n\nfetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("All retries failed:", error));',
  hint: 'Implement exponential backoff for retries.'
},
{
  id: 'js_fetch_19',
  topicId: 'js_fetch',
  question: 'Send authentication token in fetch request.',
  mathSolution: 'Add Authorization header with token.',
  codeSolution: 'const token = "your-jwt-token-here";\n\nfetch("https://api.example.com/protected", {\n    method: "GET",\n    headers: {\n        "Authorization": `Bearer ${token}`,\n        "Content-Type": "application/json"\n    }\n})\n    .then(response => {\n        if (!response.ok) throw new Error("Unauthorized");\n        return response.json();\n    })\n    .then(data => console.log(data))\n    .catch(error => console.error("Auth error:", error));',
  hint: 'Use Authorization: Bearer <token> header.'
},
{
  id: 'js_fetch_20',
  topicId: 'js_fetch',
  question: 'Parse response headers from fetch.',
  mathSolution: 'Use response.headers to access header values.',
  codeSolution: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => {\n        console.log("Content-Type:", response.headers.get("content-type"));\n        console.log("Content-Length:", response.headers.get("content-length"));\n        console.log("Cache-Control:", response.headers.get("cache-control"));\n        \n        // Iterate over all headers\n        response.headers.forEach((value, name) => {\n            console.log(`${name}: ${value}`);\n        });\n        \n        return response.json();\n    })\n    .then(data => console.log(data));',
  hint: 'Use response.headers.get() for specific headers.'
},
{
  id: 'js_fetch_21',
  topicId: 'js_fetch',
  question: 'Download file as blob and create object URL.',
  mathSolution: 'Convert response to blob, create URL.createObjectURL().',
  codeSolution: 'async function downloadImage(url) {\n    try {\n        const response = await fetch(url);\n        const blob = await response.blob();\n        const imageUrl = URL.createObjectURL(blob);\n        \n        // Display image\n        const img = document.createElement("img");\n        img.src = imageUrl;\n        document.body.appendChild(img);\n        \n        // Clean up\n        setTimeout(() => URL.revokeObjectURL(imageUrl), 10000);\n    } catch (error) {\n        console.error("Download failed:", error);\n    }\n}\n// downloadImage("https://example.com/image.jpg");',
  hint: 'Use blob() for binary data, revokeObjectURL for cleanup.'
},
{
  id: 'js_fetch_22',
  topicId: 'js_fetch',
  question: 'Use fetch with mode option (cors, no-cors, same-origin).',
  mathSolution: 'Set mode to control CORS behavior.',
  codeSolution: '// CORS request (default for cross-origin)\nfetch("https://api.example.com/data", { mode: "cors" });\n\n// Same origin only\nfetch("/api/data", { mode: "same-origin" });\n\n// No CORS (opaque response)\nfetch("https://api.example.com/data", { mode: "no-cors" })\n    .then(response => {\n        console.log(response.type);  // "opaque"\n        // Cannot read response body\n    });',
  hint: 'mode: "no-cors" gives opaque response with no readable body.'
},
{
  id: 'js_fetch_23',
  topicId: 'js_fetch',
  question: 'Cache responses using fetch cache option.',
  mathSolution: 'Use cache option to control caching behavior.',
  codeSolution: '// Default cache behavior\nfetch(url, { cache: "default" });\n\n// Force reload (bypass cache)\nfetch(url, { cache: "reload" });\n\n// Only use cache (no network)\nfetch(url, { cache: "only-if-cached" });\n\n// Don\'t use cache\nfetch(url, { cache: "no-store" });\n\n// Force cache (use cache even if stale)\nfetch(url, { cache: "force-cache" });',
  hint: 'cache option controls HTTP cache behavior.'
},
{
  id: 'js_fetch_24',
  topicId: 'js_fetch',
  question: 'Send form data as x-www-form-urlencoded.',
  mathSolution: 'Use URLSearchParams as body.',
  codeSolution: 'const params = new URLSearchParams();\nparams.append("username", "john");\nparams.append("password", "secret123");\n\nfetch("https://api.example.com/login", {\n    method: "POST",\n    headers: {\n        "Content-Type": "application/x-www-form-urlencoded"\n    },\n    body: params\n})\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Use URLSearchParams for form-urlencoded data.'
},
{
  id: 'js_fetch_25',
  topicId: 'js_fetch',
  question: 'Send raw JSON string in fetch body.',
  mathSolution: 'JSON.stringify() object and set Content-Type.',
  codeSolution: 'const data = {\n    name: "John Doe",\n    email: "john@example.com",\n    age: 30\n};\n\nfetch("https://api.example.com/users", {\n    method: "POST",\n    headers: {\n        "Content-Type": "application/json",\n        "Accept": "application/json"\n    },\n    body: JSON.stringify(data)\n})\n    .then(response => response.json())\n    .then(result => console.log("Created:", result))\n    .catch(error => console.error("Error:", error));',
  hint: 'Always stringify JSON before sending as body.'
},
{
  id: 'js_fetch_26',
  topicId: 'js_fetch',
  question: 'Implement request interceptor for fetch.',
  mathSolution: 'Wrap fetch to add common headers/options.',
  codeSolution: 'const apiClient = {\n    baseURL: "https://api.example.com",\n    token: null,\n    \n    async request(url, options = {}) {\n        const fullUrl = this.baseURL + url;\n        const headers = {\n            "Content-Type": "application/json",\n            ...options.headers\n        };\n        \n        if (this.token) {\n            headers["Authorization"] = `Bearer ${this.token}`;\n        }\n        \n        const response = await fetch(fullUrl, {\n            ...options,\n            headers\n        });\n        \n        if (!response.ok) {\n            throw new Error(`HTTP ${response.status}`);\n        }\n        \n        return response.json();\n    },\n    \n    get(url) {\n        return this.request(url, { method: "GET" });\n    },\n    \n    post(url, data) {\n        return this.request(url, {\n            method: "POST",\n            body: JSON.stringify(data)\n        });\n    }\n};\n\n// Usage\n// apiClient.token = "my-token";\n// apiClient.get("/users/1").then(console.log);',
  hint: 'Create wrapper function for common fetch configuration.'
},
{
  id: 'js_fetch_27',
  topicId: 'js_fetch',
  question: 'Use fetch with response streaming (ReadableStream).',
  mathSolution: 'Access response.body as ReadableStream.',
  codeSolution: 'async function streamResponse(url) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        const chunk = decoder.decode(value, { stream: true });\n        console.log("Received chunk:", chunk);\n    }\n}\n\n// For JSON streaming\nasync function streamJSON(url) {\n    const response = await fetch(url);\n    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        console.log("Text chunk:", value);\n    }\n}\n// streamResponse("https://example.com/large-file.txt");',
  hint: 'Use response.body.getReader() for streaming data.'
},
{
  id: 'js_fetch_28',
  topicId: 'js_fetch',
  question: 'Make fetch request with custom user-agent.',
  mathSolution: 'Set User-Agent header in fetch options.',
  codeSolution: 'fetch("https://api.example.com/data", {\n    headers: {\n        "User-Agent": "MyApp/1.0 (Contact: support@example.com)"\n    }\n})\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));',
  hint: 'Set User-Agent header for API identification.'
},
{
  id: 'js_fetch_29',
  topicId: 'js_fetch',
  question: 'Handle gzip/deflate compressed responses.',
  mathSolution: 'fetch automatically decompresses gzip/deflate.',
  codeSolution: '// fetch automatically handles compression\nfetch("https://jsonplaceholder.typicode.com/posts")\n    .then(response => {\n        console.log("Content-Encoding:", response.headers.get("content-encoding"));\n        return response.json();\n    })\n    .then(data => console.log(`Received ${data.length} items`))\n    .catch(error => console.error("Error:", error));\n\n// To disable automatic decompression\nfetch(url, { headers: { "Accept-Encoding": "identity" } });',
  hint: 'fetch automatically decompresses gzip/deflate responses.'
},
{
  id: 'js_fetch_30',
  topicId: 'js_fetch',
  question: 'Implement request queue for rate limiting.',
  mathSolution: 'Queue requests to respect API rate limits.',
  codeSolution: 'class RequestQueue {\n    constructor(limit = 5, interval = 1000) {\n        this.queue = [];\n        this.active = 0;\n        this.limit = limit;\n        this.interval = interval;\n        this.lastRequest = 0;\n    }\n    \n    async request(url, options = {}) {\n        return new Promise((resolve, reject) => {\n            this.queue.push({ url, options, resolve, reject });\n            this.process();\n        });\n    }\n    \n    async process() {\n        if (this.active >= this.limit || this.queue.length === 0) return;\n        \n        const now = Date.now();\n        const timeSinceLast = now - this.lastRequest;\n        if (timeSinceLast < this.interval) {\n            setTimeout(() => this.process(), this.interval - timeSinceLast);\n            return;\n        }\n        \n        this.active++;\n        const { url, options, resolve, reject } = this.queue.shift();\n        this.lastRequest = Date.now();\n        \n        try {\n            const response = await fetch(url, options);\n            const data = await response.json();\n            resolve(data);\n        } catch (error) {\n            reject(error);\n        } finally {\n            this.active--;\n            this.process();\n        }\n    }\n}\n\nconst queue = new RequestQueue(2, 1000);\n// queue.request("/api/data1").then(console.log);\n// queue.request("/api/data2").then(console.log);',
  hint: 'Queue requests to respect API rate limits.'
},
{
  id: 'js_fetch_31',
  topicId: 'js_fetch',
  question: 'Detect online/offline status before fetch.',
  mathSolution: 'Check navigator.onLine and listen to online/offline events.',
  codeSolution: 'async function fetchWithOfflineCheck(url, options = {}) {\n    if (!navigator.onLine) {\n        console.log("Device is offline");\n        // Return cached data or show message\n        throw new Error("No internet connection");\n    }\n    \n    try {\n        const response = await fetch(url, options);\n        return response;\n    } catch (error) {\n        if (error.message === "Failed to fetch") {\n            console.log("Network request failed");\n        }\n        throw error;\n    }\n}\n\n// Listen to connectivity changes\nwindow.addEventListener("online", () => console.log("Back online"));\nwindow.addEventListener("offline", () => console.log("Offline"));\n\n// fetchWithOfflineCheck("https://api.example.com/data");',
  hint: 'Check navigator.onLine before making request.'
},
{
  id: 'js_fetch_32',
  topicId: 'js_fetch',
  question: 'Implement fetch with fallback to cached data.',
  mathSolution: 'Use cache-first network-fallback strategy.',
  codeSolution: 'async function fetchWithCache(url, cacheName = "my-cache") {\n    try {\n        // Try network first\n        const networkResponse = await fetch(url);\n        if (networkResponse.ok) {\n            // Cache the response\n            const cache = await caches.open(cacheName);\n            cache.put(url, networkResponse.clone());\n            return networkResponse;\n        }\n    } catch (error) {\n        console.log("Network failed, trying cache");\n    }\n    \n    // Fallback to cache\n    const cache = await caches.open(cacheName);\n    const cachedResponse = await cache.match(url);\n    if (cachedResponse) {\n        return cachedResponse;\n    }\n    \n    throw new Error("No data available");\n}\n\nfetchWithCache("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error));',
  hint: 'Use Cache API for offline fallback.'
},
{
  id: 'js_fetch_33',
  topicId: 'js_fetch',
  question: 'Send multiple files in single fetch request.',
  mathSolution: 'Append multiple files to FormData object.',
  codeSolution: 'async function uploadMultipleFiles(files) {\n    const formData = new FormData();\n    \n    files.forEach((file, index) => {\n        formData.append(`file${index}`, file);\n    });\n    \n    formData.append("description", "Multiple file upload");\n    \n    try {\n        const response = await fetch("https://api.example.com/upload-multiple", {\n            method: "POST",\n            body: formData\n        });\n        const result = await response.json();\n        console.log("Uploaded:", result);\n    } catch (error) {\n        console.error("Upload failed:", error);\n    }\n}\n\n// Usage: uploadMultipleFiles([file1, file2, file3]);',
  hint: 'Append all files to same FormData object.'
},
{
  id: 'js_fetch_34',
  topicId: 'js_fetch',
  question: 'Parse JSON response with reviver function.',
  mathSolution: 'Use JSON.parse reviver parameter.',
  codeSolution: 'fetch("https://api.example.com/data")\n    .then(response => response.json())\n    .then(data => {\n        // Default JSON.parse\n        console.log(data);\n    });\n\n// Custom reviver function\nfetch("https://api.example.com/dates")\n    .then(response => response.text())\n    .then(text => {\n        const data = JSON.parse(text, (key, value) => {\n            // Convert ISO date strings to Date objects\n            if (typeof value === "string" && /^\\d{4}-\\d{2}-\\d{2}/.test(value)) {\n                return new Date(value);\n            }\n            return value;\n        });\n        console.log(data);\n    });',
  hint: 'Use reviver function in JSON.parse for custom conversion.'
},
{
  id: 'js_fetch_35',
  topicId: 'js_fetch',
  question: 'Handle large JSON responses with streaming.',
  mathSolution: 'Parse JSON incrementally as it streams.',
  codeSolution: 'async function streamJSONArray(url) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    let buffer = "";\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        \n        buffer += decoder.decode(value, { stream: true });\n        const lines = buffer.split("\\n");\n        buffer = lines.pop();\n        \n        for (const line of lines) {\n            if (line.trim()) {\n                try {\n                    const item = JSON.parse(line);\n                    console.log("Received item:", item);\n                } catch (e) {\n                    console.error("Parse error:", e);\n                }\n            }\n        }\n    }\n}\n\n// For NDJSON (Newline Delimited JSON) format\n// streamJSONArray("https://example.com/large-data.ndjson");',
  hint: 'Parse JSON stream line by line for large datasets.'
},
{
  id: 'js_fetch_36',
  topicId: 'js_fetch',
  question: 'Implement batch requests to reduce API calls.',
  mathSolution: 'Combine multiple requests into single batch.',
  codeSolution: 'class BatchRequest {\n    constructor() {\n        this.queue = [];\n        this.timeout = null;\n        this.batchDelay = 100;\n    }\n    \n    async add(endpoint, data = null) {\n        return new Promise((resolve, reject) => {\n            this.queue.push({ endpoint, data, resolve, reject });\n            this.schedule();\n        });\n    }\n    \n    schedule() {\n        if (this.timeout) return;\n        this.timeout = setTimeout(() => this.process(), this.batchDelay);\n    }\n    \n    async process() {\n        this.timeout = null;\n        const batch = [...this.queue];\n        this.queue = [];\n        \n        const requests = batch.map(item => ({\n            endpoint: item.endpoint,\n            data: item.data\n        }));\n        \n        try {\n            const response = await fetch("/api/batch", {\n                method: "POST",\n                headers: { "Content-Type": "application/json" },\n                body: JSON.stringify({ requests })\n            });\n            const results = await response.json();\n            \n            batch.forEach((item, index) => {\n                if (results[index].error) {\n                    item.reject(new Error(results[index].error));\n                } else {\n                    item.resolve(results[index].data);\n                }\n            });\n        } catch (error) {\n            batch.forEach(item => item.reject(error));\n        }\n    }\n}\n\n// const batch = new BatchRequest();\n// batch.add("/users/1").then(console.log);\n// batch.add("/posts/1").then(console.log);',
  hint: 'Batch multiple requests into one API call.'
},
{
  id: 'js_fetch_37',
  topicId: 'js_fetch',
  question: 'Use fetch with WebSocket fallback for real-time.',
  mathSolution: 'Try WebSocket first, fallback to polling fetch.',
  codeSolution: 'class RealtimeClient {\n    constructor(url) {\n        this.url = url;\n        this.useWebSocket = true;\n        this.connect();\n    }\n    \n    connect() {\n        if (this.useWebSocket && window.WebSocket) {\n            try {\n                this.ws = new WebSocket(this.url.replace("http", "ws"));\n                this.ws.onmessage = (event) => this.onMessage(JSON.parse(event.data));\n                this.ws.onerror = () => this.fallbackToPolling();\n                return;\n            } catch (e) {\n                this.fallbackToPolling();\n            }\n        } else {\n            this.fallbackToPolling();\n        }\n    }\n    \n    fallbackToPolling() {\n        this.useWebSocket = false;\n        this.poll();\n    }\n    \n    async poll() {\n        while (true) {\n            try {\n                const response = await fetch(`${this.url}/updates`);\n                const data = await response.json();\n                this.onMessage(data);\n                await new Promise(resolve => setTimeout(resolve, 2000));\n            } catch (error) {\n                console.error("Polling error:", error);\n                await new Promise(resolve => setTimeout(resolve, 5000));\n            }\n        }\n    }\n    \n    onMessage(data) {\n        console.log("Received:", data);\n    }\n}\n\n// const client = new RealtimeClient("https://api.example.com");',
  hint: 'Fallback to polling when WebSocket is unavailable.'
},
{
  id: 'js_fetch_38',
  topicId: 'js_fetch',
  question: 'Implement fetch with CSRF token protection.',
  mathSolution: 'Add CSRF token to request headers.',
  codeSolution: 'function getCSRFToken() {\n    return document.querySelector(\'meta[name="csrf-token"]\').getAttribute("content");\n}\n\nfunction fetchWithCSRF(url, options = {}) {\n    const csrfToken = getCSRFToken();\n    \n    const headers = {\n        "X-CSRF-Token": csrfToken,\n        ...options.headers\n    };\n    \n    return fetch(url, {\n        ...options,\n        headers\n    });\n}\n\n// Usage for POST requests\nconst data = { name: "John" };\nfetchWithCSRF("/api/users", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(data)\n})\n    .then(response => response.json())\n    .then(data => console.log(data));',
  hint: 'Include CSRF token in headers for state-changing requests.'
},
{
  id: 'js_fetch_39',
  topicId: 'js_fetch',
  question: 'Implement request deduplication for same URLs.',
  mathSolution: 'Cache in-flight promises for identical URLs.',
  codeSolution: 'const pendingRequests = new Map();\n\nfunction dedupeFetch(url, options = {}) {\n    const key = `${url}_${JSON.stringify(options)}`;\n    \n    if (pendingRequests.has(key)) {\n        console.log("Deduplicating request to:", url);\n        return pendingRequests.get(key);\n    }\n    \n    const promise = fetch(url, options)\n        .then(response => {\n            pendingRequests.delete(key);\n            return response;\n        })\n        .catch(error => {\n            pendingRequests.delete(key);\n            throw error;\n        });\n    \n    pendingRequests.set(key, promise);\n    return promise;\n}\n\n// Multiple identical requests will share the same promise\ndedupeFetch("/api/data").then(r => r.json()).then(console.log);\ndedupeFetch("/api/data").then(r => r.json()).then(console.log);\ndedupeFetch("/api/data").then(r => r.json()).then(console.log);\n// Only one actual request is made',
  hint: 'Deduplicate concurrent requests for same resource.'
},
{
  id: 'js_fetch_40',
  topicId: 'js_fetch',
  question: 'Implement fetch with request signing for API authentication.',
  mathSolution: 'Sign request with HMAC or other signature.',
  codeSolution: 'async function signRequest(url, method, body, secret) {\n    const timestamp = Date.now();\n    const nonce = Math.random().toString(36);\n    const dataToSign = `${method}\\n${url}\\n${timestamp}\\n${nonce}\\n${body || ""}`;\n    \n    // Simulate HMAC signing (use crypto.subtle in real implementation)\n    const encoder = new TextEncoder();\n    const keyData = encoder.encode(secret);\n    const messageData = encoder.encode(dataToSign);\n    \n    const cryptoKey = await crypto.subtle.importKey(\n        "raw",\n        keyData,\n        { name: "HMAC", hash: "SHA-256" },\n        false,\n        ["sign"]\n    );\n    \n    const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);\n    const signatureHex = Array.from(new Uint8Array(signature))\n        .map(b => b.toString(16).padStart(2, "0"))\n        .join("");\n    \n    return signatureHex;\n}\n\nasync function signedFetch(url, options = {}, secret) {\n    const method = options.method || "GET";\n    const body = options.body;\n    const signature = await signRequest(url, method, body, secret);\n    \n    const headers = {\n        ...options.headers,\n        "X-Signature": signature,\n        "X-Timestamp": Date.now().toString()\n    };\n    \n    return fetch(url, { ...options, headers });\n}\n\n// signedFetch("/api/data", {}, "my-secret-key")\n//     .then(response => response.json())\n//     .then(console.log);',
  hint: 'Sign requests to authenticate with API.'
},
{
  id: 'js_fetch_41',
  topicId: 'js_fetch',
  question: 'Use fetch with GraphQL query.',
  mathSolution: 'Send GraphQL query in POST body.',
  codeSolution: 'const graphqlQuery = {\n    query: `\n        query GetUser($id: ID!) {\n            user(id: $id) {\n                id\n                name\n                email\n                posts {\n                    title\n                }\n            }\n        }\n    `,\n    variables: {\n        id: "1"\n    }\n};\n\nfetch("https://api.graphql.com/graphql", {\n    method: "POST",\n    headers: {\n        "Content-Type": "application/json",\n        "Authorization": "Bearer your-token"\n    },\n    body: JSON.stringify(graphqlQuery)\n})\n    .then(response => response.json())\n    .then(data => console.log(data.data.user))\n    .catch(error => console.error("GraphQL error:", error));',
  hint: 'GraphQL queries go in POST body with query field.'
},
{
  id: 'js_fetch_42',
  topicId: 'js_fetch',
  question: 'Handle different response content types automatically.',
  mathSolution: 'Check Content-Type header to parse appropriately.',
  codeSolution: 'async function smartFetch(url, options = {}) {\n    const response = await fetch(url, options);\n    const contentType = response.headers.get("content-type");\n    \n    let data;\n    if (contentType && contentType.includes("application/json")) {\n        data = await response.json();\n    } else if (contentType && contentType.includes("text/")) {\n        data = await response.text();\n    } else if (contentType && contentType.includes("image/")) {\n        data = await response.blob();\n    } else {\n        data = await response.arrayBuffer();\n    }\n    \n    return {\n        ok: response.ok,\n        status: response.status,\n        headers: response.headers,\n        data\n    };\n}\n\nsmartFetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(result => console.log("JSON:", result.data))\n    .catch(error => console.error(error));\n\nsmartFetch("https://example.com/image.jpg")\n    .then(result => console.log("Blob size:", result.data.size));',
  hint: 'Parse response based on Content-Type header.'
},
{
  id: 'js_fetch_43',
  topicId: 'js_fetch',
  question: 'Implement fetch with request compression (send compressed data).',
  mathSolution: 'Compress request body before sending.',
  codeSolution: 'async function compressData(data) {\n    const stream = new Blob([data]).stream();\n    const compressedStream = stream.pipeThrough(new CompressionStream("gzip"));\n    const compressedBlob = await new Response(compressedStream).blob();\n    return compressedBlob;\n}\n\nasync function fetchWithCompression(url, data) {\n    const jsonString = JSON.stringify(data);\n    const compressedBody = await compressData(jsonString);\n    \n    return fetch(url, {\n        method: "POST",\n        headers: {\n            "Content-Type": "application/json",\n            "Content-Encoding": "gzip"\n        },\n        body: compressedBody\n    });\n}\n\nconst largeData = { text: "A".repeat(10000) };\n// fetchWithCompression("/api/upload", largeData)\n//     .then(response => response.json())\n//     .then(console.log);',
  hint: 'Use CompressionStream to compress request body.'
},
{
  id: 'js_fetch_44',
  topicId: 'js_fetch',
  question: 'Decompress Brotli compressed responses.',
  mathSolution: 'fetch handles Brotli automatically with proper Accept-Encoding.',
  codeSolution: '// fetch automatically decompresses Brotli if server sends it\nfetch("https://example.com/brotli-data", {\n    headers: {\n        "Accept-Encoding": "br, gzip, deflate"\n    }\n})\n    .then(response => {\n        console.log("Content-Encoding:", response.headers.get("content-encoding"));\n        return response.json();\n    })\n    .then(data => console.log(data))\n    .catch(error => console.error(error));\n\n// Manual decompression if needed\nasync function manualDecompress(response) {\n    const contentType = response.headers.get("content-type");\n    const contentEncoding = response.headers.get("content-encoding");\n    \n    if (contentEncoding === "br") {\n        const blob = await response.blob();\n        const decompressedStream = blob.stream()\n            .pipeThrough(new DecompressionStream("brotli"));\n        const decompressedResponse = new Response(decompressedStream);\n        \n        if (contentType?.includes("application/json")) {\n            return decompressedResponse.json();\n        }\n        return decompressedResponse.text();\n    }\n    \n    return response;\n}',
  hint: 'Modern browsers support Brotli decompression automatically.'
},
{
  id: 'js_fetch_45',
  topicId: 'js_fetch',
  question: 'Use fetch with Server-Sent Events (SSE).',
  mathSolution: 'Fetch doesn\'t support SSE natively, use EventSource.',
  codeSolution: '// EventSource for SSE (not fetch)\nconst eventSource = new EventSource("https://api.example.com/events");\n\neventSource.onmessage = (event) => {\n    const data = JSON.parse(event.data);\n    console.log("SSE message:", data);\n};\n\neventSource.addEventListener("custom-event", (event) => {\n    console.log("Custom event:", event.data);\n});\n\neventSource.onerror = (error) => {\n    console.error("SSE error:", error);\n    eventSource.close();\n};\n\n// Close connection when done\n// eventSource.close();\n\n// Alternative: Using fetch for SSE (advanced)\nasync function fetchSSE(url) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    let buffer = "";\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        \n        buffer += decoder.decode(value, { stream: true });\n        const messages = buffer.split("\\n\\n");\n        buffer = messages.pop();\n        \n        for (const message of messages) {\n            if (message.startsWith("data:")) {\n                const data = message.slice(5).trim();\n                console.log("SSE data:", JSON.parse(data));\n            }\n        }\n    }\n}\n\n// fetchSSE("https://api.example.com/stream");',
  hint: 'Use EventSource for Server-Sent Events, not fetch.'
},
{
  id: 'js_fetch_46',
  topicId: 'js_fetch',
  question: 'Implement fetch with OAuth 2.0 token refresh.',
  mathSolution: 'Refresh token when receiving 401 response.',
  codeSolution: 'class AuthenticatedFetch {\n    constructor(baseURL, getToken, refreshToken) {\n        this.baseURL = baseURL;\n        this.getToken = getToken;\n        this.refreshToken = refreshToken;\n        this.isRefreshing = false;\n        this.queue = [];\n    }\n    \n    async request(url, options = {}) {\n        const token = await this.getToken();\n        \n        const makeRequest = async (retry = true) => {\n            const response = await fetch(this.baseURL + url, {\n                ...options,\n                headers: {\n                    "Authorization": `Bearer ${token}`,\n                    ...options.headers\n                }\n            });\n            \n            if (response.status === 401 && retry) {\n                return this.handleTokenExpiration(url, options);\n            }\n            \n            return response;\n        };\n        \n        return makeRequest();\n    }\n    \n    async handleTokenExpiration(url, options) {\n        if (this.isRefreshing) {\n            return new Promise((resolve, reject) => {\n                this.queue.push({ resolve, reject, url, options });\n            });\n        }\n        \n        this.isRefreshing = true;\n        \n        try {\n            await this.refreshToken();\n            this.isRefreshing = false;\n            \n            // Retry queued requests\n            this.queue.forEach(({ resolve, reject, url, options }) => {\n                this.request(url, options).then(resolve).catch(reject);\n            });\n            this.queue = [];\n            \n            // Retry current request\n            return this.request(url, options);\n        } catch (error) {\n            this.isRefreshing = false;\n            this.queue.forEach(({ reject }) => reject(error));\n            this.queue = [];\n            throw error;\n        }\n    }\n}\n\n// Usage\n// const api = new AuthenticatedFetch(\n//     "https://api.example.com",\n//     () => localStorage.getItem("access_token"),\n//     async () => {\n//         const refresh = localStorage.getItem("refresh_token");\n//         const response = await fetch("/auth/refresh", {\n//             method: "POST",\n//             body: JSON.stringify({ refresh_token: refresh })\n//         });\n//         const { access_token } = await response.json();\n//         localStorage.setItem("access_token", access_token);\n//     }\n// );\n// api.request("/user").then(res => res.json()).then(console.log);',
  hint: 'Automatically refresh expired tokens on 401 response.'
},
{
  id: 'js_fetch_47',
  topicId: 'js_fetch',
  question: 'Implement fetch with response validation.',
  mathSolution: 'Validate response structure before using data.',
  codeSolution: 'function validateResponse(data, schema) {\n    for (const [key, type] of Object.entries(schema)) {\n        if (!(key in data)) {\n            throw new Error(`Missing required field: ${key}`);\n        }\n        if (typeof data[key] !== type) {\n            throw new Error(`Field ${key} should be ${type}, got ${typeof data[key]}`);\n        }\n    }\n    return true;\n}\n\nasync function fetchAndValidate(url, schema, options = {}) {\n    const response = await fetch(url, options);\n    \n    if (!response.ok) {\n        throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n    }\n    \n    const data = await response.json();\n    \n    try {\n        validateResponse(data, schema);\n        return data;\n    } catch (error) {\n        console.error("Response validation failed:", error.message);\n        throw new Error(`Invalid response format: ${error.message}`);\n    }\n}\n\nconst userSchema = {\n    id: "number",\n    name: "string",\n    email: "string"\n};\n\nfetchAndValidate("https://jsonplaceholder.typicode.com/users/1", userSchema)\n    .then(user => console.log("Valid user:", user))\n    .catch(error => console.error("Validation error:", error));',
  hint: 'Validate API response structure before use.'
},
{
  id: 'js_fetch_48',
  topicId: 'js_fetch',
  question: 'Implement fetch with request/response logging for debugging.',
  mathSolution: 'Log request and response details.',
  codeSolution: 'function createLoggingFetch(logger = console) {\n    return async function loggingFetch(url, options = {}) {\n        const requestId = Math.random().toString(36).substring(7);\n        const startTime = Date.now();\n        \n        logger.log(`[${requestId}] Request: ${options.method || "GET"} ${url}`);\n        \n        if (options.body) {\n            const bodyForLog = typeof options.body === "string" \n                ? options.body \n                : JSON.stringify(options.body);\n            logger.log(`[${requestId}] Body:`, bodyForLog.substring(0, 200));\n        }\n        \n        try {\n            const response = await fetch(url, options);\n            const duration = Date.now() - startTime;\n            \n            logger.log(`[${requestId}] Response: ${response.status} ${response.statusText} (${duration}ms)`);\n            \n            // Clone response to read body without consuming\n            const clonedResponse = response.clone();\n            const contentType = response.headers.get("content-type");\n            \n            if (contentType?.includes("application/json")) {\n                const data = await clonedResponse.json();\n                logger.log(`[${requestId}] Data:`, data);\n            } else if (contentType?.includes("text/")) {\n                const text = await clonedResponse.text();\n                logger.log(`[${requestId}] Data:`, text.substring(0, 500));\n            }\n            \n            return response;\n        } catch (error) {\n            const duration = Date.now() - startTime;\n            logger.error(`[${requestId}] Error: ${error.message} (${duration}ms)`);\n            throw error;\n        }\n    };\n}\n\nconst fetchWithLogging = createLoggingFetch();\n// fetchWithLogging("https://jsonplaceholder.typicode.com/posts/1");',
  hint: 'Log request/response details for debugging.'
},
{
  id: 'js_fetch_49',
  topicId: 'js_fetch',
  question: 'Implement fetch with automatic retry on network errors.',
  mathSolution: 'Retry failed requests with exponential backoff.',
  codeSolution: 'async function resilientFetch(url, options = {}, maxRetries = 3) {\n    let lastError;\n    \n    for (let attempt = 0; attempt <= maxRetries; attempt++) {\n        try {\n            const response = await fetch(url, options);\n            \n            // Don\'t retry client errors (4xx except 429)\n            if (response.status >= 400 && response.status < 500 && response.status !== 429) {\n                return response;\n            }\n            \n            // Retry on server errors (5xx) or rate limiting (429)\n            if (response.status >= 500 || response.status === 429) {\n                throw new Error(`HTTP ${response.status}`);\n            }\n            \n            return response;\n        } catch (error) {\n            lastError = error;\n            \n            if (attempt === maxRetries) {\n                break;\n            }\n            \n            const delay = Math.min(1000 * Math.pow(2, attempt), 10000);\n            console.log(`Retry ${attempt + 1}/${maxRetries} after ${delay}ms`);\n            await new Promise(resolve => setTimeout(resolve, delay));\n        }\n    }\n    \n    throw lastError;\n}\n\n// Usage\nresilientFetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("All retries failed:", error));',
  hint: 'Retry on network errors and server errors only.'
},
{
  id: 'js_fetch_50',
  topicId: 'js_fetch',
  question: 'Comprehensive: Build complete API client with fetch.',
  mathSolution: 'Full-featured API client with interceptors, caching, retries.',
  codeSolution: 'class APIClient {\n    constructor(baseURL, options = {}) {\n        this.baseURL = baseURL;\n        this.defaultHeaders = options.headers || {};\n        this.timeout = options.timeout || 30000;\n        this.retries = options.retries || 3;\n        this.interceptors = {\n            request: [],\n            response: [],\n            error: []\n        };\n        this.cache = new Map();\n    }\n    \n    addInterceptor(type, handler) {\n        this.interceptors[type].push(handler);\n    }\n    \n    async request(endpoint, options = {}) {\n        const url = this.baseURL + endpoint;\n        let requestOptions = {\n            method: "GET",\n            headers: { ...this.defaultHeaders, ...options.headers },\n            ...options\n        };\n        \n        // Apply request interceptors\n        for (const interceptor of this.interceptors.request) {\n            requestOptions = await interceptor(requestOptions, url);\n        }\n        \n        // Check cache for GET requests\n        const cacheKey = `${url}_${JSON.stringify(requestOptions)}`;\n        if (requestOptions.method === "GET" && this.cache.has(cacheKey)) {\n            const cached = this.cache.get(cacheKey);\n            if (Date.now() - cached.timestamp < 60000) { // 1 minute TTL\n                return cached.data;\n            }\n        }\n        \n        // Make request with timeout and retries\n        const response = await this.fetchWithTimeout(url, requestOptions);\n        \n        // Parse response\n        let data;\n        const contentType = response.headers.get("content-type");\n        if (contentType?.includes("application/json")) {\n            data = await response.json();\n        } else if (contentType?.includes("text/")) {\n            data = await response.text();\n        } else {\n            data = await response.blob();\n        }\n        \n        // Apply response interceptors\n        for (const interceptor of this.interceptors.response) {\n            data = await interceptor(data, response);\n        }\n        \n        // Cache GET responses\n        if (requestOptions.method === "GET") {\n            this.cache.set(cacheKey, { data, timestamp: Date.now() });\n        }\n        \n        return data;\n    }\n    \n    async fetchWithTimeout(url, options) {\n        for (let attempt = 0; attempt <= this.retries; attempt++) {\n            try {\n                const controller = new AbortController();\n                const timeoutId = setTimeout(() => controller.abort(), this.timeout);\n                \n                const response = await fetch(url, {\n                    ...options,\n                    signal: controller.signal\n                });\n                \n                clearTimeout(timeoutId);\n                \n                if (!response.ok) {\n                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n                }\n                \n                return response;\n            } catch (error) {\n                if (attempt === this.retries) {\n                    // Apply error interceptors\n                    for (const interceptor of this.interceptors.error) {\n                        await interceptor(error, attempt);\n                    }\n                    throw error;\n                }\n                \n                const delay = Math.min(1000 * Math.pow(2, attempt), 5000);\n                await new Promise(resolve => setTimeout(resolve, delay));\n            }\n        }\n    }\n    \n    get(endpoint, options = {}) {\n        return this.request(endpoint, { ...options, method: "GET" });\n    }\n    \n    post(endpoint, data, options = {}) {\n        return this.request(endpoint, {\n            ...options,\n            method: "POST",\n            headers: { "Content-Type": "application/json", ...options.headers },\n            body: JSON.stringify(data)\n        });\n    }\n    \n    put(endpoint, data, options = {}) {\n        return this.request(endpoint, {\n            ...options,\n            method: "PUT",\n            headers: { "Content-Type": "application/json", ...options.headers },\n            body: JSON.stringify(data)\n        });\n    }\n    \n    delete(endpoint, options = {}) {\n        return this.request(endpoint, { ...options, method: "DELETE" });\n    }\n    \n    clearCache() {\n        this.cache.clear();\n    }\n}\n\n// Usage example\nconst api = new APIClient("https://jsonplaceholder.typicode.com", {\n    timeout: 5000,\n    retries: 2,\n    headers: {\n        "Accept": "application/json"\n    }\n});\n\n// Add auth interceptor\napi.addInterceptor("request", async (config) => {\n    const token = localStorage.getItem("token");\n    if (token) {\n        config.headers = {\n            ...config.headers,\n            "Authorization": `Bearer ${token}`\n        };\n    }\n    return config;\n});\n\n// Add logging interceptor\napi.addInterceptor("response", async (data, response) => {\n    console.log(`API Response: ${response.status}`, data);\n    return data;\n});\n\n// Make requests\n// api.get("/posts/1").then(data => console.log(data));\n// api.post("/posts", { title: "New Post", body: "Content" }).then(console.log);',
  hint: 'Production-ready API client with interceptors, caching, retries, and timeout.'
}
);