QuizData.questions.push(
  {
    id: "py_async_1",
    topicId: "py_async",
    question: "Write a simple async function that prints 'Hello' and then 'World' after a 1-second delay.",
    mathSolution: "Use asyncio.sleep(1) to create a 1-second delay",
    codeSolution: "import asyncio\n\nasync def say_hello():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasyncio.run(say_hello())",
    hint: "Define function with `async def`, use `await asyncio.sleep(1)`"
  },
  {
    id: "py_async_2",
    topicId: "py_async",
    question: "Create an async function that returns 'Task Complete' after 2 seconds and print the result.",
    mathSolution: "Function returns string after 2s delay",
    codeSolution: "import asyncio\n\nasync def complete_task():\n    await asyncio.sleep(2)\n    return 'Task Complete'\n\nasync def main():\n    result = await complete_task()\n    print(result)\n\nasyncio.run(main())",
    hint: "Use `return` statement after await"
  },
  {
    id: "py_async_3",
    topicId: "py_async",
    question: "Run two async functions concurrently using asyncio.gather().",
    mathSolution: "Both functions execute simultaneously, total time ~2s",
    codeSolution: "import asyncio\n\nasync def task1():\n    await asyncio.sleep(2)\n    print('Task 1 done')\n\nasync def task2():\n    await asyncio.sleep(1)\n    print('Task 2 done')\n\nasync def main():\n    await asyncio.gather(task1(), task2())\n\nasyncio.run(main())",
    hint: "Use `asyncio.gather()` to run multiple coroutines"
  },
  {
    id: "py_async_4",
    topicId: "py_async",
    question: "Create a list of 5 coroutines that sleep for different times and run them concurrently.",
    mathSolution: "5 tasks run concurrently, total time = max sleep time",
    codeSolution: "import asyncio\n\nasync def sleep_task(seconds):\n    await asyncio.sleep(seconds)\n    print(f'Slept for {seconds}s')\n\nasync def main():\n    tasks = [sleep_task(i) for i in [1, 2, 3, 1, 2]]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use list comprehension to create tasks and unpack with *"
  },
  {
    id: "py_async_5",
    topicId: "py_async",
    question: "Implement a timeout for an async function using asyncio.wait_for().",
    mathSolution: "Function raises TimeoutError if execution exceeds given time",
    codeSolution: "import asyncio\n\nasync def slow_function():\n    await asyncio.sleep(5)\n    return 'Done'\n\nasync def main():\n    try:\n        result = await asyncio.wait_for(slow_function(), timeout=2)\n        print(result)\n    except asyncio.TimeoutError:\n        print('Function timed out')\n\nasyncio.run(main())",
    hint: "Wrap await with `asyncio.wait_for(coroutine, timeout)`"
  },
  {
    id: "py_async_6",
    topicId: "py_async",
    question: "Create an async generator that yields numbers 1 to 5 with 0.5s delay between each.",
    mathSolution: "Generator yields 5 values with 0.5s intervals",
    codeSolution: "import asyncio\n\nasync def async_counter():\n    for i in range(1, 6):\n        await asyncio.sleep(0.5)\n        yield i\n\nasync def main():\n    async for num in async_counter():\n        print(num)\n\nasyncio.run(main())",
    hint: "Use `yield` in async function and `async for` to iterate"
  },
  {
    id: "py_async_7",
    topicId: "py_async",
    question: "Use asyncio.Queue to pass messages between producer and consumer coroutines.",
    mathSolution: "Producer puts 5 items, consumer gets them concurrently",
    codeSolution: "import asyncio\n\nasync def producer(queue):\n    for i in range(5):\n        await asyncio.sleep(0.5)\n        await queue.put(f'item {i}')\n        print(f'Produced item {i}')\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        print(f'Consumed {item}')\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue()\n    producer_task = asyncio.create_task(producer(queue))\n    consumer_task = asyncio.create_task(consumer(queue))\n    await producer_task\n    await queue.join()\n    consumer_task.cancel()\n\nasyncio.run(main())",
    hint: "Use `asyncio.Queue()` for async communication"
  },
  {
    id: "py_async_8",
    topicId: "py_async",
    question: "Create a semaphore to limit concurrent execution to 3 tasks.",
    mathSolution: "Semaphore allows only 3 tasks to run concurrently",
    codeSolution: "import asyncio\n\nasync def worker(semaphore, id):\n    async with semaphore:\n        print(f'Worker {id} started')\n        await asyncio.sleep(2)\n        print(f'Worker {id} finished')\n\nasync def main():\n    semaphore = asyncio.Semaphore(3)\n    tasks = [worker(semaphore, i) for i in range(10)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `asyncio.Semaphore(n)` and `async with semaphore:`"
  },
  {
    id: "py_async_9",
    topicId: "py_async",
    question: "Cancel a running task using task.cancel().",
    mathSolution: "Task raises CancelledError when cancelled",
    codeSolution: "import asyncio\n\nasync def long_task():\n    try:\n        await asyncio.sleep(10)\n    except asyncio.CancelledError:\n        print('Task was cancelled')\n        raise\n\nasync def main():\n    task = asyncio.create_task(long_task())\n    await asyncio.sleep(1)\n    task.cancel()\n    try:\n        await task\n    except asyncio.CancelledError:\n        print('Main caught cancellation')\n\nasyncio.run(main())",
    hint: "Use `task.cancel()` and handle `asyncio.CancelledError`"
  },
  {
    id: "py_async_10",
    topicId: "py_async",
    question: "Use asyncio.shield() to protect a task from cancellation.",
    mathSolution: "Shielded task continues even if surrounding task is cancelled",
    codeSolution: "import asyncio\n\nasync def critical_task():\n    await asyncio.sleep(3)\n    print('Critical task completed')\n    return 'Important data'\n\nasync def main():\n    task = asyncio.create_task(critical_task())\n    shielded = asyncio.shield(task)\n    await asyncio.sleep(1)\n    task.cancel()\n    try:\n        result = await shielded\n        print(f'Got result: {result}')\n    except asyncio.CancelledError:\n        print('Shielded task was not cancelled')\n\nasyncio.run(main())",
    hint: "Wrap task with `asyncio.shield()` to prevent cancellation"
  },
  {
    id: "py_async_11",
    topicId: "py_async",
    question: "Create a custom event loop policy to use a different event loop.",
    mathSolution: "Set custom policy for event loop creation",
    codeSolution: "import asyncio\n\nclass MyEventLoopPolicy(asyncio.DefaultEventLoopPolicy):\n    def new_event_loop(self):\n        loop = super().new_event_loop()\n        print('Custom event loop created')\n        return loop\n\nasync def main():\n    print('Running in custom event loop')\n\nasyncio.set_event_loop_policy(MyEventLoopPolicy())\nasyncio.run(main())",
    hint: "Subclass `DefaultEventLoopPolicy` and override methods"
  },
  {
    id: "py_async_12",
    topicId: "py_async",
    question: "Use asyncio.as_completed() to process tasks as they complete.",
    mathSolution: "Tasks yield results in completion order, not start order",
    codeSolution: "import asyncio\n\nasync def task_with_delay(id, delay):\n    await asyncio.sleep(delay)\n    return f'Task {id} completed after {delay}s'\n\nasync def main():\n    tasks = [\n        task_with_delay(1, 3),\n        task_with_delay(2, 1),\n        task_with_delay(3, 2)\n    ]\n    for coro in asyncio.as_completed(tasks):\n        result = await coro\n        print(result)\n\nasyncio.run(main())",
    hint: "Use `asyncio.as_completed()` to iterate over tasks in completion order"
  },
  {
    id: "py_async_13",
    topicId: "py_async",
    question: "Create a subprocess using asyncio and read its output.",
    mathSolution: "Run 'echo hello' and capture stdout",
    codeSolution: "import asyncio\n\nasync def run_subprocess():\n    proc = await asyncio.create_subprocess_shell(\n        'echo hello',\n        stdout=asyncio.subprocess.PIPE,\n        stderr=asyncio.subprocess.PIPE\n    )\n    stdout, stderr = await proc.communicate()\n    print(f'stdout: {stdout.decode()}')\n\nasyncio.run(run_subprocess())",
    hint: "Use `asyncio.create_subprocess_shell()` or `create_subprocess_exec()`"
  },
  {
    id: "py_async_14",
    topicId: "py_async",
    question: "Use asyncio.locks.Lock to prevent race conditions.",
    mathSolution: "Lock ensures only one coroutine accesses shared resource at a time",
    codeSolution: "import asyncio\n\ncounter = 0\n\nasync def increment(lock):\n    global counter\n    async with lock:\n        temp = counter\n        await asyncio.sleep(0.1)\n        counter = temp + 1\n\nasync def main():\n    lock = asyncio.Lock()\n    tasks = [increment(lock) for _ in range(10)]\n    await asyncio.gather(*tasks)\n    print(f'Final counter: {counter}')\n\nif __name__ == '__main__':\n    # Works with Python 3.7+\n    asyncio.run(main())",
    hint: "Use `async with lock:` to protect critical sections"
},
  {
    id: "py_async_15",
    topicId: "py_async",
    question: "Implement an async context manager using __aenter__ and __aexit__.",
    mathSolution: "Context manager sets up and tears down async resources",
    codeSolution: "import asyncio\n\nclass AsyncResource:\n    async def __aenter__(self):\n        print('Acquiring resource')\n        await asyncio.sleep(1)\n        return self\n    \n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        print('Releasing resource')\n        await asyncio.sleep(1)\n    \n    async def use(self):\n        print('Using resource')\n\nasync def main():\n    async with AsyncResource() as resource:\n        await resource.use()\n\nasyncio.run(main())",
    hint: "Define `__aenter__` and `__aexit__` methods"
  },
  {
    id: "py_async_16",
    topicId: "py_async",
    question: "Use asyncio.create_task() to run multiple tasks concurrently.",
    mathSolution: "Create and await multiple tasks for concurrent execution",
    codeSolution: "import asyncio\n\nasync def print_numbers():\n    for i in range(5):\n        print(i)\n        await asyncio.sleep(0.5)\n\nasync def print_letters():\n    for letter in 'abcde':\n        print(letter)\n        await asyncio.sleep(0.3)\n\nasync def main():\n    task1 = asyncio.create_task(print_numbers())\n    task2 = asyncio.create_task(print_letters())\n    await task1\n    await task2\n\nasyncio.run(main())",
    hint: "Use `asyncio.create_task()` to schedule coroutines"
  },
  {
    id: "py_async_17",
    topicId: "py_async",
    question: "Handle exceptions in gather() using return_exceptions=True.",
    mathSolution: "Gather returns exceptions as values instead of raising",
    codeSolution: "import asyncio\n\nasync def might_fail(id):\n    if id == 2:\n        raise ValueError(f'Task {id} failed')\n    await asyncio.sleep(id)\n    return f'Task {id} succeeded'\n\nasync def main():\n    results = await asyncio.gather(\n        might_fail(1),\n        might_fail(2),\n        might_fail(3),\n        return_exceptions=True\n    )\n    for result in results:\n        if isinstance(result, Exception):\n            print(f'Caught: {result}')\n        else:\n            print(f'Result: {result}')\n\nasyncio.run(main())",
    hint: "Set `return_exceptions=True` in gather()"
  },
  {
    id: "py_async_18",
    topicId: "py_async",
    question: "Create a future manually and set its result.",
    mathSolution: "Future resolves with set_result() after delay",
    codeSolution: "import asyncio\n\nasync def set_future(future):\n    await asyncio.sleep(2)\n    future.set_result('Future is done')\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    future = loop.create_future()\n    asyncio.create_task(set_future(future))\n    result = await future\n    print(result)\n\nasyncio.run(main())",
    hint: "Use `loop.create_future()` to create a future"
  },
  {
    id: "py_async_19",
    topicId: "py_async",
    question: "Use asyncio.wait() with different return conditions (FIRST_COMPLETED).",
    mathSolution: "Wait returns when first task completes",
    codeSolution: "import asyncio\n\nasync def my_task(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(my_task('A', 3)),\n        asyncio.create_task(my_task('B', 1)),\n        asyncio.create_task(my_task('C', 2))\n    ]\n    done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)\n    for t in done:\n        print(f'Completed: {t.result()}')\n    for t in pending:\n        t.cancel()\n\nasyncio.run(main())",
    hint: "Use `return_when=asyncio.FIRST_COMPLETED`"
},
  {
    id: "py_async_20",
    topicId: "py_async",
    question: "Implement a simple async TCP echo server.",
    mathSolution: "Server echoes received data back to client",
    codeSolution: "import asyncio\n\nasync def handle_client(reader, writer):\n    data = await reader.read(100)\n    message = data.decode()\n    addr = writer.get_extra_info('peername')\n    print(f'Received {message} from {addr}')\n    writer.write(data)\n    await writer.drain()\n    writer.close()\n    await writer.wait_closed()\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())",
    hint: "Use `asyncio.start_server()`"
  },
  {
    id: "py_async_21",
    topicId: "py_async",
    question: "Create a TCP client that connects to the echo server.",
    mathSolution: "Client sends message and receives echo",
    codeSolution: "import asyncio\n\nasync def tcp_client():\n    reader, writer = await asyncio.open_connection('127.0.0.1', 8888)\n    message = 'Hello World'\n    writer.write(message.encode())\n    await writer.drain()\n    data = await reader.read(100)\n    print(f'Received: {data.decode()}')\n    writer.close()\n    await writer.wait_closed()\n\nasyncio.run(tcp_client())",
    hint: "Use `asyncio.open_connection()`"
  },
  {
    id: "py_async_22",
    topicId: "py_async",
    question: "Use asyncio.ensure_future() to schedule a coroutine.",
    mathSolution: "Alternative to create_task() for scheduling",
    codeSolution: "import asyncio\n\nasync def say_hello():\n    await asyncio.sleep(1)\n    print('Hello')\n\nasync def main():\n    task = asyncio.ensure_future(say_hello())\n    await task\n\nasyncio.run(main())",
    hint: "`asyncio.ensure_future()` schedules coroutine execution"
  },
  {
    id: "py_async_23",
    topicId: "py_async",
    question: "Implement a rate limiter using asyncio.Semaphore.",
    mathSolution: "Limit to 2 requests per second",
    codeSolution: "import asyncio\n\nclass RateLimiter:\n    def __init__(self, rate):\n        self.semaphore = asyncio.Semaphore(rate)\n    \n    async def acquire(self):\n        await self.semaphore.acquire()\n        asyncio.create_task(self.release())\n    \n    async def release(self):\n        await asyncio.sleep(1)\n        self.semaphore.release()\n\nasync def make_request(limiter, id):\n    await limiter.acquire()\n    print(f'Request {id} started')\n    await asyncio.sleep(0.5)\n    print(f'Request {id} finished')\n\nasync def main():\n    limiter = RateLimiter(2)\n    tasks = [make_request(limiter, i) for i in range(10)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use semaphore with timed release for rate limiting"
  },
  {
    id: "py_async_24",
    topicId: "py_async",
    question: "Use asyncio.Condition to coordinate coroutines.",
    mathSolution: "Condition allows coroutines to wait for notifications",
    codeSolution: "import asyncio\n\nasync def consumer(condition, name):\n    async with condition:\n        print(f'{name} waiting')\n        await condition.wait()\n        print(f'{name} notified')\n\nasync def producer(condition):\n    await asyncio.sleep(2)\n    async with condition:\n        condition.notify_all()\n    print('Producer notified all')\n\nasync def main():\n    condition = asyncio.Condition()\n    consumers = [consumer(condition, f'Consumer {i}') for i in range(3)]\n    tasks = [asyncio.create_task(c) for c in consumers]\n    tasks.append(asyncio.create_task(producer(condition)))\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `condition.wait()` and `condition.notify()`"
  },
  {
    id: "py_async_25",
    topicId: "py_async",
    question: "Implement an async iterator that generates Fibonacci numbers.",
    mathSolution: "Async iterator yields Fibonacci sequence with delays",
    codeSolution: "import asyncio\n\nclass AsyncFibonacci:\n    def __init__(self, limit):\n        self.limit = limit\n        self.a, self.b = 0, 1\n        self.count = 0\n    \n    def __aiter__(self):\n        return self\n    \n    async def __anext__(self):\n        if self.count >= self.limit:\n            raise StopAsyncIteration\n        await asyncio.sleep(0.5)\n        result = self.a\n        self.a, self.b = self.b, self.a + self.b\n        self.count += 1\n        return result\n\nasync def main():\n    async for num in AsyncFibonacci(10):\n        print(num)\n\nasyncio.run(main())",
    hint: "Implement `__aiter__` and `__anext__` methods"
  },
  {
    id: "py_async_26",
    topicId: "py_async",
    question: "Use asyncio.run_coroutine_threadsafe() from another thread.",
    mathSolution: "Submit coroutine to event loop from different thread",
    codeSolution: "import asyncio\nimport threading\nimport time\n\nasync def async_task():\n    await asyncio.sleep(0.5)\n    return 'Hello from async_task'\n\ndef run_in_thread(loop):\n    # This runs in a separate thread\n    future = asyncio.run_coroutine_threadsafe(async_task(), loop)\n    result = future.result()  # Wait for result\n    print(f'Thread received: {result}')\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    # Create thread\n    thread = threading.Thread(target=run_in_thread, args=(loop,))\n    thread.start()\n    \n    # Do other async work while thread runs\n    print('Main: Doing other work...')\n    await asyncio.sleep(1)\n    \n    thread.join()\n    print('Main: Done')\n\nasyncio.run(main())",
    hint: "Use `asyncio.run_coroutine_threadsafe()` for cross-thread operations"
},
  {
    id: "py_async_27",
    topicId: "py_async",
    question: "Use asyncio.gather() to run multiple tasks concurrently and handle results.",
    mathSolution: "gather() runs multiple coroutines concurrently and returns results",
    codeSolution: "import asyncio\n\nasync def task(name, delay):\n    await asyncio.sleep(delay)\n    print(f'Task {name} completed after {delay}s')\n    return f'Result-{name}'\n\nasync def main():\n    # Run multiple tasks concurrently\n    results = await asyncio.gather(\n        task('A', 2),\n        task('B', 1),\n        task('C', 3)\n    )\n    \n    print(f'\\nAll tasks completed!')\n    for i, result in enumerate(results):\n        print(f'Task {chr(65+i)} returned: {result}')\n\nasyncio.run(main())",
    hint: "Use `asyncio.gather()` to run multiple coroutines concurrently"
},
  {
    id: "py_async_28",
    topicId: "py_async",
    question: "Use asyncio.wait_for() to set a timeout on an operation.",
    mathSolution: "wait_for() raises TimeoutError if coroutine takes too long",
    codeSolution: "import asyncio\n\nasync def fetch_data(name, delay):\n    print(f'Fetching {name}...')\n    await asyncio.sleep(delay)\n    return f'Data from {name}'\n\nasync def main():\n    try:\n        # Timeout after 3 seconds\n        result = await asyncio.wait_for(fetch_data('API', 2), timeout=3)\n        print(f'Success: {result}')\n    except asyncio.TimeoutError:\n        print('Operation timed out')\n    \n    try:\n        # This will timeout\n        result = await asyncio.wait_for(fetch_data('Slow API', 5), timeout=2)\n        print(f'Success: {result}')\n    except asyncio.TimeoutError:\n        print('Slow API timed out after 2 seconds')\n\nasyncio.run(main())",
    hint: "Use `asyncio.wait_for(coroutine, timeout)` for timeouts (Python 3.7+)"
},
  {
    id: "py_async_29",
    topicId: "py_async",
    question: "Implement a simple async file reader using aiofiles (simulate with asyncio).",
    mathSolution: "Simulate async file reading with delays",
    codeSolution: "import asyncio\n\nclass AsyncFile:\n    def __init__(self, filename):\n        self.filename = filename\n        self.content = ['line 1\\n', 'line 2\\n', 'line 3\\n']\n    \n    async def readline(self):\n        await asyncio.sleep(0.1)\n        if self.content:\n            return self.content.pop(0)\n        return ''\n\nasync def read_file():\n    file = AsyncFile('test.txt')\n    while True:\n        line = await file.readline()\n        if not line:\n            break\n        print(line.strip())\n\nasyncio.run(read_file())",
    hint: "Simulate async I/O with await asyncio.sleep()"
  },
  {
    id: "py_async_30",
    topicId: "py_async",
    question: "Create a pool of workers using asyncio.Queue.",
    mathSolution: "Multiple workers process tasks from queue",
    codeSolution: "import asyncio\n\nasync def worker(name, queue):\n    while True:\n        task = await queue.get()\n        if task is None:\n            break\n        print(f'Worker {name} processing task {task}')\n        await asyncio.sleep(task)\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue()\n    for i in range(10):\n        await queue.put(i % 3 + 1)\n    for i in range(3):\n        await queue.put(None)\n    workers = [asyncio.create_task(worker(f'W{i}', queue)) for i in range(3)]\n    await asyncio.gather(*workers)\n\nasyncio.run(main())",
    hint: "Use None as sentinel to stop workers"
  },
  {
    id: "py_async_31",
    topicId: "py_async",
    question: "Implement a retry mechanism for failed async operations.",
    mathSolution: "Retry operation up to 3 times with exponential backoff",
    codeSolution: "import asyncio\n\nasync def unreliable_operation():\n    import random\n    if random.random() < 0.7:\n        raise ValueError('Operation failed')\n    return 'Success'\n\nasync def retry_operation(max_retries=3):\n    for attempt in range(max_retries):\n        try:\n            result = await unreliable_operation()\n            return result\n        except Exception as e:\n            print(f'Attempt {attempt + 1} failed: {e}')\n            if attempt < max_retries - 1:\n                wait_time = 2 ** attempt\n                await asyncio.sleep(wait_time)\n    raise Exception('All retries failed')\n\nasync def main():\n    try:\n        result = await retry_operation()\n        print(result)\n    except Exception as e:\n        print(e)\n\nasyncio.run(main())",
    hint: "Use exponential backoff with asyncio.sleep()"
  },
  {
    id: "py_async_32",
    topicId: "py_async",
    question: "Use asyncio.Event to signal between coroutines.",
    mathSolution: "Event allows one coroutine to signal others",
    codeSolution: "import asyncio\n\nasync def waiter(event, name):\n    print(f'{name} waiting for event')\n    await event.wait()\n    print(f'{name} received event')\n\nasync def setter(event):\n    await asyncio.sleep(2)\n    print('Setting event')\n    event.set()\n\nasync def main():\n    event = asyncio.Event()\n    waiters = [waiter(event, f'Waiter {i}') for i in range(3)]\n    tasks = [asyncio.create_task(w) for w in waiters]\n    tasks.append(asyncio.create_task(setter(event)))\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `event.wait()` and `event.set()`"
  },
  {
    id: "py_async_33",
    topicId: "py_async",
    question: "Implement a simple async HTTP client using asyncio.open_connection.",
    mathSolution: "Send HTTP GET request and parse response",
    codeSolution: "import asyncio\n\nasync def fetch_http():\n    reader, writer = await asyncio.open_connection('example.com', 80)\n    request = 'GET / HTTP/1.0\\r\\nHost: example.com\\r\\n\\r\\n'\n    writer.write(request.encode())\n    await writer.drain()\n    response = await reader.read(1024)\n    writer.close()\n    await writer.wait_closed()\n    print(response.decode()[:200])\n\nasyncio.run(fetch_http())",
    hint: "Format HTTP request correctly with CRLF"
  },
  {
    id: "py_async_34",
    topicId: "py_async",
    question: "Use asyncio.Barrier to synchronize multiple coroutines.",
    mathSolution: "Barrier waits for all coroutines to reach a point",
    codeSolution: "import asyncio\n\nasync def worker(barrier, name):\n    print(f'{name} working')\n    await asyncio.sleep(name)\n    print(f'{name} waiting at barrier')\n    await barrier.wait()\n    print(f'{name} passed barrier')\n\nasync def main():\n    barrier = asyncio.Barrier(3)\n    tasks = [worker(barrier, i) for i in range(1, 4)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `asyncio.Barrier(n)` for n-party synchronization"
  },
  {
    id: "py_async_35",
    topicId: "py_async",
    question: "Create a timeout decorator for async functions.",
    mathSolution: "Decorator adds timeout capability to any async function",
    codeSolution: "import asyncio\nfrom functools import wraps\n\ndef timeout(seconds):\n    def decorator(func):\n        @wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                raise TimeoutError(f'Function {func.__name__} timed out')\n        return wrapper\n    return decorator\n\n@timeout(2)\nasync def slow_function():\n    await asyncio.sleep(3)\n    return 'Done'\n\nasync def main():\n    try:\n        result = await slow_function()\n        print(result)\n    except TimeoutError as e:\n        print(e)\n\nasyncio.run(main())",
    hint: "Use `asyncio.wait_for()` inside decorator"
  },
  {
    id: "py_async_36",
    topicId: "py_async",
    question: "Implement a circuit breaker pattern for async functions.",
    mathSolution: "Circuit breaker prevents calls when failure threshold reached",
    codeSolution: "import asyncio\nfrom datetime import datetime, timedelta\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n    \n    async def call(self, func, *args, **kwargs):\n        if self.state == 'OPEN':\n            if datetime.now() - self.last_failure_time > timedelta(seconds=self.recovery_timeout):\n                self.state = 'HALF_OPEN'\n            else:\n                raise Exception('Circuit breaker is OPEN')\n        \n        try:\n            result = await func(*args, **kwargs)\n            if self.state == 'HALF_OPEN':\n                self.state = 'CLOSED'\n                self.failure_count = 0\n            return result\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = datetime.now()\n            if self.failure_count >= self.failure_threshold:\n                self.state = 'OPEN'\n            raise e\n\nasync def unstable_function():\n    import random\n    if random.random() < 0.8:\n        raise ValueError('Failed')\n    return 'Success'\n\nasync def main():\n    breaker = CircuitBreaker()\n    for i in range(10):\n        try:\n            result = await breaker.call(unstable_function)\n            print(f'Call {i}: {result}')\n        except Exception as e:\n            print(f'Call {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Track failure count and state transitions"
  },
  {
    id: "py_async_37",
    topicId: "py_async",
    question: "Use asyncio.StreamReader and StreamWriter for simple chat.",
    mathSolution: "Implement a basic chat server",
    codeSolution: "import asyncio\n\nclients = set()\n\nasync def handle_client(reader, writer):\n    clients.add(writer)\n    addr = writer.get_extra_info('peername')\n    print(f'New connection from {addr}')\n    \n    try:\n        while True:\n            data = await reader.read(100)\n            if not data:\n                break\n            message = data.decode()\n            print(f'Received from {addr}: {message}')\n            for client in clients:\n                if client != writer:\n                    client.write(f'{addr}: {message}'.encode())\n                    await client.drain()\n    except asyncio.CancelledError:\n        pass\n    finally:\n        clients.remove(writer)\n        writer.close()\n        await writer.wait_closed()\n        print(f'Connection from {addr} closed')\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())",
    hint: "Maintain set of clients for broadcasting"
  },
  {
    id: "py_async_38",
    topicId: "py_async",
    question: "Implement a task that runs periodically using asyncio.",
    mathSolution: "Run a task every N seconds",
    codeSolution: "import asyncio\n\nasync def periodic_task(interval):\n    count = 0\n    while True:\n        count += 1\n        print(f'Periodic task executed {count} times')\n        await asyncio.sleep(interval)\n\nasync def main():\n    task = asyncio.create_task(periodic_task(2))\n    await asyncio.sleep(10)\n    task.cancel()\n    try:\n        await task\n    except asyncio.CancelledError:\n        print('Periodic task cancelled')\n\nasyncio.run(main())",
    hint: "Use while loop with asyncio.sleep()"
  },
  {
    id: "py_async_39",
    topicId: "py_async",
    question: "Use asyncio.Queue with maxsize to implement a bounded buffer.",
    mathSolution: "Queue size limited to maxsize items",
    codeSolution: "import asyncio\n\nasync def producer(queue):\n    for i in range(10):\n        await queue.put(i)\n        print(f'Produced {i}, queue size: {queue.qsize()}')\n        await asyncio.sleep(0.1)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        print(f'Consumed {item}')\n        await asyncio.sleep(0.3)\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue(maxsize=3)\n    producer_task = asyncio.create_task(producer(queue))\n    consumer_task = asyncio.create_task(consumer(queue))\n    await producer_task\n    await queue.join()\n    consumer_task.cancel()\n\nasyncio.run(main())",
    hint: "Queue.put() will wait when queue is full"
  },
  {
    id: "py_async_40",
    topicId: "py_async",
    question: "Implement a simple async cache with TTL.",
    mathSolution: "Cache stores values with time-based expiration",
    codeSolution: "import asyncio\nimport time\n\nclass AsyncCache:\n    def __init__(self, ttl=5):\n        self.cache = {}\n        self.ttl = ttl\n    \n    async def get(self, key):\n        if key in self.cache:\n            value, timestamp = self.cache[key]\n            if time.time() - timestamp < self.ttl:\n                return value\n            else:\n                del self.cache[key]\n        return None\n    \n    async def set(self, key, value):\n        self.cache[key] = (value, time.time())\n\nasync def expensive_operation(key, cache):\n    result = await cache.get(key)\n    if result:\n        print(f'Cache hit for {key}')\n        return result\n    \n    print(f'Cache miss for {key}, computing...')\n    await asyncio.sleep(2)\n    result = f'Result for {key}'\n    await cache.set(key, result)\n    return result\n\nasync def main():\n    cache = AsyncCache()\n    for key in ['A', 'B', 'A']:\n        result = await expensive_operation(key, cache)\n        print(result)\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Store timestamp with cached values"
  },
  {
    id: "py_async_41",
    topicId: "py_async",
    question: "Use asyncio.gather with error handling for mixed results.",
    mathSolution: "Handle individual task results with error recovery",
    codeSolution: "import asyncio\n\nasync def task_with_handling(id):\n    try:\n        if id == 2:\n            raise ValueError(f'Task {id} failed')\n        await asyncio.sleep(id)\n        return f'Task {id} result'\n    except Exception as e:\n        return f'Task {id} error: {e}'\n\nasync def main():\n    results = await asyncio.gather(*[task_with_handling(i) for i in range(1, 5)])\n    for result in results:\n        print(result)\n\nasyncio.run(main())",
    hint: "Handle exceptions inside each task"
  },
  {
    id: "py_async_42",
    topicId: "py_async",
    question: "Implement a simple async task scheduler with priorities.",
    mathSolution: "Tasks executed based on priority levels",
    codeSolution: "import asyncio\nimport heapq\n\nclass PriorityScheduler:\n    def __init__(self):\n        self.queue = []\n        self.counter = 0\n    \n    async def add_task(self, priority, coro):\n        self.counter += 1\n        heapq.heappush(self.queue, (priority, self.counter, coro))\n    \n    async def run(self):\n        while self.queue:\n            priority, _, coro = heapq.heappop(self.queue)\n            result = await coro\n            print(f'Task with priority {priority} completed: {result}')\n\nasync def sample_task(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    scheduler = PriorityScheduler()\n    await scheduler.add_task(2, sample_task('Low priority', 0.5))\n    await scheduler.add_task(1, sample_task('High priority', 1))\n    await scheduler.add_task(1, sample_task('Another high', 0.3))\n    await scheduler.run()\n\nasyncio.run(main())",
    hint: "Use heapq for priority queue implementation"
  },
  {
    id: "py_async_43",
    topicId: "py_async",
    question: "Use asyncio.current_task() to get current task information.",
    mathSolution: "Get name and details of currently running task",
    codeSolution: "import asyncio\n\nasync def task_with_info(name):\n    current = asyncio.current_task()\n    current.set_name(name)\n    print(f'Task name: {current.get_name()}')\n    print(f'Task: {current}')\n    await asyncio.sleep(1)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(task_with_info('Task A')),\n        asyncio.create_task(task_with_info('Task B'))\n    ]\n    results = await asyncio.gather(*tasks)\n    print(results)\n\nasyncio.run(main())",
    hint: "Use `asyncio.current_task()` to get current task"
  },
  {
    id: "py_async_44",
    topicId: "py_async",
    question: "Implement a simple async debounce function.",
    mathSolution: "Debounce delays function execution until no new calls for specified time",
    codeSolution: "import asyncio\n\nclass Debouncer:\n    def __init__(self, delay):\n        self.delay = delay\n        self.task = None\n    \n    async def call(self, func, *args, **kwargs):\n        if self.task:\n            self.task.cancel()\n        \n        async def debounced():\n            await asyncio.sleep(self.delay)\n            return await func(*args, **kwargs)\n        \n        self.task = asyncio.create_task(debounced())\n        return await self.task\n\nasync def search(query):\n    print(f'Searching for: {query}')\n    await asyncio.sleep(0.5)\n    return f'Results for {query}'\n\nasync def main():\n    debouncer = Debouncer(1)\n    queries = ['a', 'ab', 'abc', 'abcd']\n    for query in queries:\n        result = await debouncer.call(search, query)\n        print(result)\n        await asyncio.sleep(0.2)\n\nasyncio.run(main())",
    hint: "Cancel previous task before scheduling new one"
  },
  {
    id: "py_async_45",
    topicId: "py_async",
    question: "Use asyncio.to_thread() to run blocking code in thread pool.",
    mathSolution: "Run CPU-bound or blocking code without blocking event loop",
    codeSolution: "import asyncio\nimport time\n\ndef blocking_io():\n    time.sleep(2)\n    return 'Blocking operation result'\n\nasync def main():\n    print('Starting blocking operation')\n    result = await asyncio.to_thread(blocking_io)\n    print(f'Got: {result}')\n    \n    # Non-blocking task runs concurrently\n    async def other_task():\n        for i in range(5):\n            await asyncio.sleep(0.5)\n            print(f'Other task: {i}')\n    \n    await asyncio.gather(\n        asyncio.to_thread(blocking_io),\n        other_task()\n    )\n\nasyncio.run(main())",
    hint: "Use `asyncio.to_thread()` for blocking functions"
  },
  {
    id: "py_async_46",
    topicId: "py_async",
    question: "Implement a simple async pipeline with multiple stages.",
    mathSolution: "Data flows through processing stages concurrently",
    codeSolution: "import asyncio\n\nasync def stage1(input_queue, output_queue):\n    while True:\n        item = await input_queue.get()\n        if item is None:\n            await output_queue.put(None)\n            break\n        processed = item * 2\n        print(f'Stage 1: {item} -> {processed}')\n        await asyncio.sleep(0.3)\n        await output_queue.put(processed)\n\nasync def stage2(input_queue, output_queue):\n    while True:\n        item = await input_queue.get()\n        if item is None:\n            await output_queue.put(None)\n            break\n        processed = item + 10\n        print(f'Stage 2: {item} -> {processed}')\n        await asyncio.sleep(0.2)\n        await output_queue.put(processed)\n\nasync def producer(queue):\n    for i in range(5):\n        await queue.put(i)\n        await asyncio.sleep(0.1)\n    await queue.put(None)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        if item is None:\n            break\n        print(f'Final result: {item}')\n\nasync def main():\n    queue1 = asyncio.Queue()\n    queue2 = asyncio.Queue()\n    queue3 = asyncio.Queue()\n    \n    await asyncio.gather(\n        producer(queue1),\n        stage1(queue1, queue2),\n        stage2(queue2, queue3),\n        consumer(queue3)\n    )\n\nasyncio.run(main())",
    hint: "Use None as sentinel to signal completion"
  },
  {
    id: "py_async_47",
    topicId: "py_async",
    question: "Use asyncio.all_tasks() to get all running tasks.",
    mathSolution: "List all currently scheduled tasks",
    codeSolution: "import asyncio\n\nasync def task_with_name(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(task_with_name(f'Task {i}', i))\n        for i in range(1, 4)\n    ]\n    \n    all_tasks = asyncio.all_tasks()\n    current = asyncio.current_task()\n    \n    print(f'Total tasks: {len(all_tasks)}')\n    for task in all_tasks:\n        if task != current:\n            print(f'Task: {task}')\n    \n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "`asyncio.all_tasks()` returns set of all pending tasks"
  },
  {
    id: "py_async_48",
    topicId: "py_async",
    question: "Implement a simple async pub/sub system.",
    mathSolution: "Publishers send messages to multiple subscribers",
    codeSolution: "import asyncio\n\nclass PubSub:\n    def __init__(self):\n        self.subscribers = {}\n    \n    def subscribe(self, topic):\n        if topic not in self.subscribers:\n            self.subscribers[topic] = []\n        queue = asyncio.Queue()\n        self.subscribers[topic].append(queue)\n        return queue\n    \n    async def publish(self, topic, message):\n        if topic in self.subscribers:\n            for queue in self.subscribers[topic]:\n                await queue.put(message)\n\nasync def subscriber(name, topic, pubsub):\n    queue = pubsub.subscribe(topic)\n    while True:\n        message = await queue.get()\n        if message is None:\n            break\n        print(f'{name} received: {message}')\n\nasync def main():\n    pubsub = PubSub()\n    \n    sub1 = asyncio.create_task(subscriber('Sub1', 'news', pubsub))\n    sub2 = asyncio.create_task(subscriber('Sub2', 'news', pubsub))\n    sub3 = asyncio.create_task(subscriber('Sub3', 'sports', pubsub))\n    \n    await pubsub.publish('news', 'Breaking news!')\n    await pubsub.publish('sports', 'Sports update')\n    await asyncio.sleep(1)\n    \n    # Cleanup\n    for task in [sub1, sub2, sub3]:\n        task.cancel()\n\nasyncio.run(main())",
    hint: "Maintain queues per topic for subscribers"
  },
  {
    id: "py_async_49",
    topicId: "py_async",
    question: "Use asyncio.run_in_executor() with ProcessPoolExecutor.",
    mathSolution: "Run CPU-intensive tasks in separate processes",
    codeSolution: "import asyncio\nimport concurrent.futures\nimport math\n\ndef cpu_intensive(n):\n    return sum(math.sqrt(i) for i in range(n))\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    with concurrent.futures.ProcessPoolExecutor() as pool:\n        tasks = [\n            loop.run_in_executor(pool, cpu_intensive, 10**7)\n            for _ in range(4)\n        ]\n        results = await asyncio.gather(*tasks)\n        print(f'Results: {[int(r) for r in results]}')\n\nasyncio.run(main())",
    hint: "Use ProcessPoolExecutor for CPU-bound tasks"
  },
  {
    id: "py_async_50",
    topicId: "py_async",
    question: "Implement a graceful shutdown handler for async applications.",
    mathSolution: "Handle signals to clean up resources on shutdown",
    codeSolution: "import asyncio\nimport signal\n\nasync def main_task():\n    try:\n        while True:\n            print('Working...')\n            await asyncio.sleep(1)\n    except asyncio.CancelledError:\n        print('Main task cancelled, cleaning up...')\n        await asyncio.sleep(2)\n        print('Cleanup complete')\n\nasync def shutdown(signal, loop):\n    print(f'Received signal {signal.name}, shutting down...')\n    tasks = [t for t in asyncio.all_tasks() if t is not asyncio.current_task()]\n    for task in tasks:\n        task.cancel()\n    await asyncio.gather(*tasks, return_exceptions=True)\n    loop.stop()\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    for sig in (signal.SIGTERM, signal.SIGINT):\n        loop.add_signal_handler(sig, lambda s=sig: asyncio.create_task(shutdown(s, loop)))\n    \n    try:\n        await main_task()\n    except asyncio.CancelledError:\n        print('Main task was cancelled')\n\nif __name__ == '__main__':\n    asyncio.run(main())",
    hint: "Use `loop.add_signal_handler()` for graceful shutdown"
  });