QuizData.questions.push({
    Id: "py_dec_1",
    topicId: "py_decorators",
    question: "Create a simple decorator that prints 'Before' and 'After' function execution.",
    mathSolution: "Decorator wraps function with pre and post execution code",
    codeSolution: "def simple_decorator(func):\n    def wrapper():\n        print('Before function execution')\n        func()\n        print('After function execution')\n    return wrapper\n\n@simple_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()",
    hint: "Define inner wrapper function that calls original function"
},
{
    Id: "py_dec_2",
    topicId: "py_decorators",
    question: "Create a decorator that measures execution time of a function.",
    mathSolution: "Measure time before and after function call",
    codeSolution: "import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.4f} seconds')\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return 'Done'\n\nresult = slow_function()\nprint(f'Result: {result}')",
    hint: "Use time.time() before and after function call"
},
{
    Id: "py_dec_3",
    topicId: "py_decorators",
    question: "Create a decorator that logs function calls with arguments.",
    mathSolution: "Log function name and arguments when called",
    codeSolution: "def logger_decorator(func):\n    def wrapper(*args, **kwargs):\n        print(f'Calling {func.__name__} with args={args}, kwargs={kwargs}')\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} returned {result}')\n        return result\n    return wrapper\n\n@logger_decorator\ndef add(a, b):\n    return a + b\n\n@logger_decorator\ndef greet(name, greeting='Hello'):\n    return f'{greeting}, {name}'\n\nadd(3, 5)\ngreet('Alice', greeting='Hi')",
    hint: "Capture *args and **kwargs to log all arguments"
},
{
    Id: "py_dec_4",
    topicId: "py_decorators",
    question: "Create a decorator that caches return values (memoization).",
    mathSolution: "Store results in cache dictionary keyed by arguments",
    codeSolution: "def cache_decorator(func):\n    cache = {}\n    \n    def wrapper(*args, **kwargs):\n        key = str(args) + str(sorted(kwargs.items()))\n        \n        if key in cache:\n            print(f'Cache hit for {args}')\n            return cache[key]\n        \n        print(f'Cache miss for {args}')\n        result = func(*args, **kwargs)\n        cache[key] = result\n        return result\n    \n    return wrapper\n\n@cache_decorator\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n@cache_decorator\ndef expensive_calculation(x, y):\n    print(f'Calculating {x} + {y}...')\n    return x + y\n\nprint(fibonacci(10))\nprint(expensive_calculation(5, 3))\nprint(expensive_calculation(5, 3))  # Cached",
    hint: "Use dictionary to store results with argument tuple as key"
},
{
    Id: "py_dec_5",
    topicId: "py_decorators",
    question: "Create a decorator that validates function arguments.",
    mathSolution: "Check arguments before function execution",
    codeSolution: "def validate_positive(func):\n    def wrapper(*args, **kwargs):\n        for arg in args:\n            if isinstance(arg, (int, float)) and arg < 0:\n                raise ValueError(f'Argument {arg} must be positive')\n        for key, value in kwargs.items():\n            if isinstance(value, (int, float)) and value < 0:\n                raise ValueError(f'Argument {key}={value} must be positive')\n        return func(*args, **kwargs)\n    return wrapper\n\n@validate_positive\ndef calculate_area(length, width):\n    return length * width\n\n@validate_positive\ndef set_temperature(temp):\n    return f'Temperature set to {temp}'\n\nprint(calculate_area(5, 3))\ntry:\n    calculate_area(-5, 3)\nexcept ValueError as e:\n    print(f'Error: {e}')",
    hint: "Check each argument's type and value before calling function"
},
{
    Id: "py_dec_6",
    topicId: "py_decorators",
    question: "Create a decorator that retries failed function calls.",
    mathSolution: "Retry function up to max_attempts if exception occurs",
    codeSolution: "import time\nimport random\n\ndef retry_decorator(max_attempts=3, delay=1):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f'Attempt {attempt + 1} failed: {e}')\n                    if attempt < max_attempts - 1:\n                        print(f'Retrying in {delay} seconds...')\n                        time.sleep(delay)\n                    else:\n                        print('Max attempts reached')\n                        raise\n        return wrapper\n    return decorator\n\n@retry_decorator(max_attempts=3, delay=1)\ndef unstable_network_call():\n    if random.random() < 0.7:\n        raise ConnectionError('Network timeout')\n    return 'Success!'\n\nfor i in range(5):\n    try:\n        result = unstable_network_call()\n        print(f'Result: {result}')\n    except Exception as e:\n        print(f'Failed: {e}')\n    print('-' * 20)",
    hint: "Use loop with try/except, sleep between retries"
},
{
    Id: "py_dec_7",
    topicId: "py_decorators",
    question: "Create a decorator that limits function call rate (rate limiting).",
    mathSolution: "Track call times and enforce minimum interval",
    codeSolution: "import time\n\ndef rate_limiter(max_calls_per_second):\n    min_interval = 1.0 / max_calls_per_second\n    last_called = [0.0]\n    \n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            elapsed = time.time() - last_called[0]\n            if elapsed < min_interval:\n                sleep_time = min_interval - elapsed\n                print(f'Rate limit: sleeping for {sleep_time:.2f}s')\n                time.sleep(sleep_time)\n            \n            result = func(*args, **kwargs)\n            last_called[0] = time.time()\n            return result\n        return wrapper\n    return decorator\n\n@rate_limiter(max_calls_per_second=2)\ndef api_call(request_id):\n    print(f'Processing API call {request_id}')\n    return f'Response {request_id}'\n\nfor i in range(5):\n    print(api_call(i))",
    hint: "Track last call time and sleep if called too soon"
},
{
    Id: "py_dec_8",
    topicId: "py_decorators",
    question: "Create a decorator that ensures function returns a specific type.",
    mathSolution: "Check return type and convert/raise error if wrong",
    codeSolution: "def ensure_return_type(expected_type):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            if not isinstance(result, expected_type):\n                raise TypeError(f'Expected return type {expected_type.__name__}, got {type(result).__name__}')\n            return result\n        return wrapper\n    return decorator\n\n@ensure_return_type(int)\ndef add_to_int(a, b):\n    return a + b\n\n@ensure_return_type(str)\ndef format_name(first, last):\n    return f'{first} {last}'\n\nprint(add_to_int(5, 3))\nprint(format_name('John', 'Doe'))\n\ntry:\n    add_to_int(5, 3.5)  # Returns float\nexcept TypeError as e:\n    print(f'Error: {e}')",
    hint: "Use isinstance() to check return type"
},
{
    Id: "py_dec_9",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout using threading (cross-platform).",
    mathSolution: "Use threading.Timer to implement timeout",
    codeSolution: "import threading\nimport functools\nimport time\n\nclass TimeoutError(Exception):\n    pass\n\ndef timeout_decorator(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = []\n            error = []\n            \n            def target():\n                try:\n                    result.append(func(*args, **kwargs))\n                except Exception as e:\n                    error.append(e)\n            \n            thread = threading.Thread(target=target)\n            thread.daemon = True\n            thread.start()\n            thread.join(timeout=seconds)\n            \n            if thread.is_alive():\n                raise TimeoutError(f'Function timed out after {seconds} seconds')\n            \n            if error:\n                raise error[0]\n            \n            return result[0]\n        return wrapper\n    return decorator\n\n@timeout_decorator(2)\ndef slow_function():\n    time.sleep(3)\n    return 'Finished'\n\n@timeout_decorator(2)\ndef fast_function():\n    time.sleep(1)\n    return 'Fast function done'\n\nprint('Fast function:')\nprint(fast_function())\nprint('\\nSlow function:')\ntry:\n    print(slow_function())\nexcept TimeoutError as e:\n    print(f'Timeout: {e}')",
    hint: "Use threading with join(timeout) for cross-platform timeout"
},
{
    Id: "py_dec_10",
    topicId: "py_decorators",
    question: "Create a decorator that preserves function metadata using functools.wraps.",
    mathSolution: "functools.wraps copies function name, docstring, etc.",
    codeSolution: "import functools\n\ndef my_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        \"\"\"Wrapper function\"\"\"\n        print(f'Calling {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@my_decorator\ndef example_function(x):\n    \"\"\"This is an example function.\"\"\"\n    return x * 2\n\nprint(f'Function name: {example_function.__name__}')\nprint(f'Docstring: {example_function.__doc__}')\nprint(f'Module: {example_function.__module__}')\nprint(f'\\nResult: {example_function(5)}')",
    hint: "Always use @functools.wraps in decorators to preserve metadata"
},
{
    Id: "py_dec_11",
    topicId: "py_decorators",
    question: "Create a decorator that counts function calls.",
    mathSolution: "Increment counter each time function is called",
    codeSolution: "import functools\n\ndef call_counter(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        wrapper.count += 1\n        print(f'{func.__name__} called {wrapper.count} times')\n        return func(*args, **kwargs)\n    wrapper.count = 0\n    return wrapper\n\n@call_counter\ndef say_hello(name):\n    return f'Hello, {name}'\n\n@call_counter\ndef add(a, b):\n    return a + b\n\nprint(say_hello('Alice'))\nprint(say_hello('Bob'))\nprint(add(3, 5))\nprint(add(10, 20))\n\nprint(f'\\nTotal calls to say_hello: {say_hello.count}')\nprint(f'Total calls to add: {add.count}')",
    hint: "Add attribute to wrapper function to store count"
},
{
    Id: "py_dec_12",
    topicId: "py_decorators",
    question: "Create a decorator that checks authorization (user role).",
    mathSolution: "Check if user has required role before executing",
    codeSolution: "import functools\n\ndef requires_role(required_role):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(user, *args, **kwargs):\n            if user.get('role') != required_role:\n                raise PermissionError(f'User {user[\"name\"]} needs {required_role} role')\n            return func(user, *args, **kwargs)\n        return wrapper\n    return decorator\n\n@requires_role('admin')\ndef delete_user(user, user_id):\n    return f'User {user_id} deleted by {user[\"name\"]}'\n\n@requires_role('user')\ndef view_profile(user, profile_id):\n    return f'Viewing profile {profile_id}'\n\nadmin_user = {'name': 'Alice', 'role': 'admin'}\nregular_user = {'name': 'Bob', 'role': 'user'}\n\nprint(delete_user(admin_user, 123))\nprint(view_profile(regular_user, 456))\n\ntry:\n    print(delete_user(regular_user, 789))\nexcept PermissionError as e:\n    print(f'Error: {e}')",
    hint: "Pass user object as first argument to check permissions"
},
{
    Id: "py_dec_13",
    topicId: "py_decorators",
    question: "Create a decorator that adds HTML tags to function output.",
    mathSolution: "Wrap function output in HTML tags",
    codeSolution: "import functools\n\ndef html_tag(tag_name):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            return f'<{tag_name}>{result}</{tag_name}>'\n        return wrapper\n    return decorator\n\n@html_tag('h1')\ndef title(text):\n    return text\n\n@html_tag('p')\ndef paragraph(text):\n    return text\n\n@html_tag('div')\n@html_tag('section')\ndef nested_content(text):\n    return text\n\nprint(title('Welcome to My Site'))\nprint(paragraph('This is a paragraph'))\nprint(nested_content('Nested content'))",
    hint: "Decorators can be stacked (applied bottom-up)"
},
{
    Id: "py_dec_14",
    topicId: "py_decorators",
    question: "Create a decorator that memoizes function results with TTL (time-to-live).",
    mathSolution: "Cache results with expiration timestamp",
    codeSolution: "import time\nimport functools\n\ndef memoize_ttl(ttl_seconds):\n    def decorator(func):\n        cache = {}\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            current_time = time.time()\n            \n            if key in cache:\n                result, timestamp = cache[key]\n                if current_time - timestamp < ttl_seconds:\n                    print(f'Cache hit for {args}')\n                    return result\n                else:\n                    print(f'Cache expired for {args}')\n            \n            print(f'Computing result for {args}')\n            result = func(*args, **kwargs)\n            cache[key] = (result, current_time)\n            return result\n        \n        return wrapper\n    return decorator\n\n@memoize_ttl(ttl_seconds=2)\ndef expensive_operation(x, y):\n    time.sleep(1)\n    return x * y\n\nprint(expensive_operation(5, 3))\nprint(expensive_operation(5, 3))\nprint(expensive_operation(5, 3))\n\ntime.sleep(3)\nprint(expensive_operation(5, 3))",
    hint: "Store timestamp with cached value for expiration check"
},
{
    Id: "py_dec_15",
    topicId: "py_decorators",
    question: "Create a decorator that debounces function calls (rate limiting with reset).",
    mathSolution: "Delay execution until calls stop for specified time",
    codeSolution: "import time\nimport threading\nimport functools\n\ndef debounce(wait_seconds):\n    def decorator(func):\n        timer = None\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            nonlocal timer\n            \n            def call_func():\n                func(*args, **kwargs)\n            \n            if timer is not None:\n                timer.cancel()\n            \n            timer = threading.Timer(wait_seconds, call_func)\n            timer.start()\n            \n        return wrapper\n    return decorator\n\n@debounce(2)\ndef search(query):\n    print(f'Searching for: {query}')\n\nprint('User typing: \"a\"')\nsearch('a')\ntime.sleep(0.5)\n\nprint('User typing: \"ap\"')\nsearch('ap')\ntime.sleep(0.5)\n\nprint('User typing: \"app\"')\nsearch('app')\ntime.sleep(0.5)\n\nprint('User typing: \"appl\"')\nsearch('appl')\ntime.sleep(0.5)\n\nprint('User typing: \"apple\"')\nsearch('apple')\n\nprint('Waiting for debounce...')\ntime.sleep(3)",
    hint: "Use threading.Timer to delay execution, cancel previous timer"
},
{
    Id: "py_dec_16",
    topicId: "py_decorators",
    question: "Create a decorator that throttles function calls (max once per period).",
    mathSolution: "Prevent function from being called more than once in time period",
    codeSolution: "import time\nimport functools\n\ndef throttle(period_seconds):\n    def decorator(func):\n        last_called = 0\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            nonlocal last_called\n            current_time = time.time()\n            \n            if current_time - last_called >= period_seconds:\n                result = func(*args, **kwargs)\n                last_called = current_time\n                return result\n            else:\n                print(f'Throttled: wait {period_seconds - (current_time - last_called):.1f}s')\n                return None\n        \n        return wrapper\n    return decorator\n\n@throttle(3)\ndef make_request(url):\n    print(f'Making request to {url}')\n    return f'Response from {url}'\n\nprint(make_request('api.example.com'))\nprint(make_request('api.example.com'))\nprint(make_request('api.example.com'))\ntime.sleep(3)\nprint(make_request('api.example.com'))",
    hint: "Track last call time and reject if within period"
},
{
    Id: "py_dec_17",
    topicId: "py_decorators",
    question: "Create a decorator that adds retry with exponential backoff.",
    mathSolution: "Increase delay exponentially between retries",
    codeSolution: "import time\nimport random\nimport functools\n\ndef retry_exponential(max_retries=5, base_delay=1):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All {max_retries} retries failed')\n                        raise\n                    \n                    delay = base_delay * (2 ** attempt) + random.uniform(0, 0.1)\n                    print(f'Attempt {attempt + 1} failed. Retrying in {delay:.2f}s...')\n                    time.sleep(delay)\n            \n        return wrapper\n    return decorator\n\n@retry_exponential(max_retries=4, base_delay=1)\ndef flaky_service():\n    if random.random() < 0.7:\n        raise ValueError('Service temporarily unavailable')\n    return 'Service response'\n\nfor i in range(3):\n    try:\n        result = flaky_service()\n        print(f'Success: {result}')\n    except Exception as e:\n        print(f'Final failure: {e}')\n    print('-' * 30)",
    hint: "Use exponential formula: delay = base_delay * (2^attempt)"
},
{
    Id: "py_dec_18",
    topicId: "py_decorators",
    question: "Create a decorator that validates function output against a schema.",
    mathSolution: "Check if return value matches expected structure",
    codeSolution: "import functools\n\ndef validate_output(schema):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            \n            def validate_value(value, expected_type):\n                if expected_type == 'int':\n                    return isinstance(value, int)\n                elif expected_type == 'float':\n                    return isinstance(value, (int, float))\n                elif expected_type == 'str':\n                    return isinstance(value, str)\n                elif expected_type == 'list':\n                    return isinstance(value, list)\n                elif expected_type == 'dict':\n                    return isinstance(value, dict)\n                return True\n            \n            if isinstance(schema, dict):\n                for key, expected_type in schema.items():\n                    if key not in result:\n                        raise ValueError(f'Missing key {key} in output')\n                    if not validate_value(result[key], expected_type):\n                        raise TypeError(f'Key {key} should be {expected_type}')\n            \n            return result\n        return wrapper\n    return decorator\n\n@validate_output({'name': 'str', 'age': 'int', 'scores': 'list'})\ndef get_student_data():\n    return {'name': 'Alice', 'age': 20, 'scores': [85, 90, 78]}\n\n@validate_output({'x': 'float', 'y': 'float'})\ndef get_point():\n    return {'x': 10, 'y': 20.5}\n\nprint(get_student_data())\nprint(get_point())",
    hint: "Recursively validate dictionary structure and types"
},
{
    Id: "py_dec_19",
    topicId: "py_decorators",
    question: "Create a decorator that adds singleton pattern to a class.",
    mathSolution: "Ensure only one instance of class is created",
    codeSolution: "import functools\n\ndef singleton(cls):\n    instances = {}\n    \n    @functools.wraps(cls)\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    \n    return get_instance\n\n@singleton\nclass DatabaseConnection:\n    def __init__(self):\n        self.connection_id = id(self)\n        print(f'Creating new database connection (ID: {self.connection_id})')\n    \n    def query(self, sql):\n        return f'Executing: {sql} on connection {self.connection_id}'\n\n@singleton\nclass Configuration:\n    def __init__(self):\n        self.settings = {}\n        print('Loading configuration...')\n    \n    def get(self, key):\n        return self.settings.get(key)\n\ndb1 = DatabaseConnection()\ndb2 = DatabaseConnection()\nprint(f'db1 is db2: {db1 is db2}')\nprint(db1.query('SELECT * FROM users'))\nprint(db2.query('SELECT * FROM products'))\n\nconfig1 = Configuration()\nconfig2 = Configuration()\nprint(f'config1 is config2: {config1 is config2}')",
    hint: "Store instance in class-level dictionary"
},
{
    Id: "py_dec_20",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout using threading (cross-platform).",
    mathSolution: "Use threading.Timer to interrupt long-running function",
    codeSolution: "import threading\nimport functools\nimport time\n\nclass TimeoutError(Exception):\n    pass\n\ndef timeout(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = []\n            error = []\n            \n            def target():\n                try:\n                    result.append(func(*args, **kwargs))\n                except Exception as e:\n                    error.append(e)\n            \n            thread = threading.Thread(target=target)\n            thread.daemon = True\n            thread.start()\n            thread.join(timeout=seconds)\n            \n            if thread.is_alive():\n                raise TimeoutError(f'Function timed out after {seconds} seconds')\n            \n            if error:\n                raise error[0]\n            \n            return result[0]\n        return wrapper\n    return decorator\n\n@timeout(2)\ndef slow_function():\n    time.sleep(3)\n    return 'Finished'\n\n@timeout(2)\ndef fast_function():\n    time.sleep(1)\n    return 'Fast function done'\n\nprint(fast_function())\n\ntry:\n    print(slow_function())\nexcept TimeoutError as e:\n    print(f'Timeout: {e}')",
    hint: "Use threading with join(timeout) for cross-platform timeout"
},
{
    Id: "py_dec_21",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker pattern.",
    mathSolution: "Prevent calls after too many failures, reset after timeout",
    codeSolution: "import time\nimport functools\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n\ndef circuit_breaker(failure_threshold=3, recovery_timeout=5):\n    breaker = CircuitBreaker(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            current_time = time.time()\n            \n            if breaker.state == 'OPEN':\n                if current_time - breaker.last_failure_time > breaker.recovery_timeout:\n                    breaker.state = 'HALF_OPEN'\n                    print('Circuit half-open - testing...')\n                else:\n                    raise Exception('Circuit breaker is OPEN')\n            \n            try:\n                result = func(*args, **kwargs)\n                \n                if breaker.state == 'HALF_OPEN':\n                    breaker.state = 'CLOSED'\n                    breaker.failure_count = 0\n                    print('Circuit closed -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                breaker.failure_count += 1\n                breaker.last_failure_time = current_time\n                \n                if breaker.failure_count >= breaker.failure_threshold:\n                    breaker.state = 'OPEN'\n                    print('Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@circuit_breaker(failure_threshold=2, recovery_timeout=3)\ndef unreliable_service():\n    import random\n    if random.random() < 0.7:\n        raise ValueError('Service failed')\n    return 'Service success'\n\nfor i in range(10):\n    try:\n        result = unreliable_service()\n        print(f'Call {i}: {result}')\n    except Exception as e:\n        print(f'Call {i}: {e}')\n    time.sleep(1)",
    hint: "Track failure count and state transitions"
},
{
    Id: "py_dec_22",
    topicId: "py_decorators",
    question: "Create a decorator that adds logging with different log levels.",
    mathSolution: "Log function calls with specified severity level",
    codeSolution: "import functools\nimport datetime\n\nclass Logger:\n    def __init__(self, name='app'):\n        self.name = name\n    \n    def log(self, level, message):\n        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')\n        print(f'[{timestamp}] {level}: {self.name} - {message}')\n\ndef log_level(level='INFO'):\n    logger = Logger()\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            logger.log(level, f'Calling {func.__name__} with args={args}, kwargs={kwargs}')\n            try:\n                result = func(*args, **kwargs)\n                logger.log(level, f'{func.__name__} returned {result}')\n                return result\n            except Exception as e:\n                logger.log('ERROR', f'{func.__name__} raised {e}')\n                raise\n        return wrapper\n    return decorator\n\n@log_level('INFO')\ndef add(a, b):\n    return a + b\n\n@log_level('DEBUG')\ndef divide(a, b):\n    if b == 0:\n        raise ValueError('Division by zero')\n    return a / b\n\nprint(add(5, 3))\nprint('-' * 30)\nprint(divide(10, 2))\nprint('-' * 30)\ntry:\n    print(divide(10, 0))\nexcept:\n    pass",
    hint: "Use different log levels (INFO, DEBUG, ERROR, WARNING)"
},
{
    Id: "py_dec_23",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with max size (LRU).",
    mathSolution: "Implement Least Recently Used cache eviction",
    codeSolution: "import functools\nfrom collections import OrderedDict\n\ndef lru_cache(maxsize=128):\n    def decorator(func):\n        cache = OrderedDict()\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                cache.move_to_end(key)\n                print(f'Cache hit: {args}')\n                return cache[key]\n            \n            print(f'Cache miss: {args}')\n            result = func(*args, **kwargs)\n            \n            cache[key] = result\n            if len(cache) > maxsize:\n                removed_key, _ = cache.popitem(last=False)\n                print(f'Evicted: {removed_key}')\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@lru_cache(maxsize=3)\ndef expensive_func(n):\n    print(f'Computing {n}...')\n    return n * n\n\nfor i in [1, 2, 3, 1, 4, 5, 2, 3]:\n    print(f'Result: {expensive_func(i)}\\n')",
    hint: "Use OrderedDict to track access order"
},
{
    Id: "py_dec_24",
    topicId: "py_decorators",
    question: "Create a decorator that adds performance profiling.",
    mathSolution: "Track time spent in function and number of calls",
    codeSolution: "import time\nimport functools\n\nclass Profiler:\n    def __init__(self):\n        self.stats = {}\n    \n    def __call__(self, func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            start = time.perf_counter()\n            result = func(*args, **kwargs)\n            end = time.perf_counter()\n            \n            elapsed = end - start\n            \n            if func.__name__ not in self.stats:\n                self.stats[func.__name__] = {\n                    'calls': 0,\n                    'total_time': 0,\n                    'min_time': float('inf'),\n                    'max_time': 0\n                }\n            \n            stats = self.stats[func.__name__]\n            stats['calls'] += 1\n            stats['total_time'] += elapsed\n            stats['min_time'] = min(stats['min_time'], elapsed)\n            stats['max_time'] = max(stats['max_time'], elapsed)\n            \n            return result\n        return wrapper\n    \n    def report(self):\n        print('\\n=== Profiling Report ===')\n        for func_name, stats in self.stats.items():\n            avg_time = stats['total_time'] / stats['calls']\n            print(f\"{func_name}:\")\n            print(f\"  Calls: {stats['calls']}\")\n            print(f\"  Total: {stats['total_time']:.4f}s\")\n            print(f\"  Avg: {avg_time:.4f}s\")\n            print(f\"  Min: {stats['min_time']:.4f}s\")\n            print(f\"  Max: {stats['max_time']:.4f}s\")\n\nprofiler = Profiler()\n\n@profiler\ndef slow_function():\n    time.sleep(0.5)\n    return 'Slow done'\n\n@profiler\ndef fast_function():\n    time.sleep(0.1)\n    return 'Fast done'\n\nfor _ in range(3):\n    slow_function()\n    fast_function()\n\nprofiler.report()",
    hint: "Use perf_counter() for precise timing"
},
{
    Id: "py_dec_25",
    topicId: "py_decorators",
    question: "Create a decorator that adds a retry with custom backoff strategy.",
    mathSolution: "Support different backoff algorithms: linear, exponential, fibonacci",
    codeSolution: "import time\nimport random\nimport functools\n\ndef backoff_retry(max_retries=5, backoff_type='exponential', base_delay=1):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All retries failed')\n                        raise\n                    \n                    if backoff_type == 'linear':\n                        delay = base_delay * (attempt + 1)\n                    elif backoff_type == 'exponential':\n                        delay = base_delay * (2 ** attempt)\n                    elif backoff_type == 'fibonacci':\n                        fib = [1, 1]\n                        for i in range(2, attempt + 2):\n                            fib.append(fib[i-1] + fib[i-2])\n                        delay = base_delay * fib[attempt]\n                    else:\n                        delay = base_delay\n                    \n                    jitter = random.uniform(0, 0.1 * delay)\n                    total_delay = delay + jitter\n                    \n                    print(f'Attempt {attempt + 1} failed. Retrying in {total_delay:.2f}s')\n                    time.sleep(total_delay)\n        \n        return wrapper\n    return decorator\n\n@backoff_retry(max_retries=4, backoff_type='linear', base_delay=1)\ndef linear_retry():\n    if random.random() < 0.6:\n        raise Exception('Failed')\n    return 'Success'\n\n@backoff_retry(max_retries=4, backoff_type='exponential', base_delay=1)\ndef exp_retry():\n    if random.random() < 0.6:\n        raise Exception('Failed')\n    return 'Success'\n\nprint('Linear backoff:')\nfor i in range(3):\n    try:\n        print(linear_retry())\n    except:\n        print('Failed\\n')\n\nprint('\\nExponential backoff:')\nfor i in range(3):\n    try:\n        print(exp_retry())\n    except:\n        print('Failed\\n')",
    hint: "Add jitter to prevent thundering herd problem"
},
{
    Id: "py_dec_26",
    topicId: "py_decorators",
    question: "Create a decorator that adds a database transaction wrapper.",
    mathSolution: "Begin, commit, or rollback transaction based on success/failure",
    codeSolution: "import functools\n\nclass Database:\n    def __init__(self):\n        self.data = {}\n        self.in_transaction = False\n    \n    def begin(self):\n        print('Beginning transaction')\n        self.in_transaction = True\n        self.snapshot = self.data.copy()\n    \n    def commit(self):\n        print('Committing transaction')\n        self.in_transaction = False\n        self.snapshot = None\n    \n    def rollback(self):\n        print('Rolling back transaction')\n        if self.in_transaction:\n            self.data = self.snapshot\n            self.in_transaction = False\n    \n    def insert(self, key, value):\n        if self.in_transaction:\n            self.data[key] = value\n            print(f'Inserted {key}={value} (in transaction)')\n        else:\n            raise Exception('Not in transaction')\n\ndb = Database()\n\ndef transactional(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        db.begin()\n        try:\n            result = func(*args, **kwargs)\n            db.commit()\n            return result\n        except Exception as e:\n            db.rollback()\n            print(f'Transaction rolled back due to: {e}')\n            raise\n    return wrapper\n\n@transactional\ndef update_database_success():\n    db.insert('user1', 'Alice')\n    db.insert('user2', 'Bob')\n    print('Operations successful')\n    return 'Success'\n\n@transactional\ndef update_database_failure():\n    db.insert('user3', 'Charlie')\n    raise ValueError('Something went wrong')\n    db.insert('user4', 'David')\n\ntry:\n    print(update_database_success())\n    print(f'Database: {db.data}')\nexcept:\n    pass\n\nprint('\\n' + '='*30)\ntry:\n    print(update_database_failure())\nexcept:\n    print(f'Database after failure: {db.data}')",
    hint: "Save snapshot before transaction for rollback"
},
{
    Id: "py_dec_27",
    topicId: "py_decorators",
    question: "Create a decorator that adds input validation using type hints.",
    mathSolution: "Check function arguments against type hints",
    codeSolution: "import functools\nimport inspect\n\ndef validate_types(func):\n    sig = inspect.signature(func)\n    \n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        bound = sig.bind(*args, **kwargs)\n        bound.apply_defaults()\n        \n        for name, value in bound.arguments.items():\n            param = sig.parameters[name]\n            if param.annotation != inspect.Parameter.empty:\n                expected = param.annotation\n                if not isinstance(value, expected):\n                    raise TypeError(f'Argument {name} should be {expected.__name__}, got {type(value).__name__}')\n        \n        return func(*args, **kwargs)\n    \n    return wrapper\n\n@validate_types\ndef process_user(name: str, age: int, active: bool = True):\n    return f'{name} ({age}) - {\"Active\" if active else \"Inactive\"}'\n\n@validate_types\ndef calculate(a: float, b: float) -> float:\n    return a + b\n\nprint(process_user('Alice', 30, True))\nprint(calculate(5.5, 3.2))\n\ntry:\n    print(process_user('Bob', '25', True))\nexcept TypeError as e:\n    print(f'Error: {e}')\n\ntry:\n    print(calculate(5, '3'))\nexcept TypeError as e:\n    print(f'Error: {e}')",
    hint: "Use inspect.signature to get parameter annotations"
},
{
    Id: "py_dec_28",
    topicId: "py_decorators",
    question: "Create a decorator that adds a delay before function execution.",
    mathSolution: "Sleep for specified seconds before calling function",
    codeSolution: "import time\nimport functools\n\ndef delay(seconds, jitter=False):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            wait_time = seconds\n            if jitter:\n                import random\n                wait_time = seconds + random.uniform(-0.5, 0.5)\n            \n            print(f'Waiting {wait_time:.2f} seconds...')\n            time.sleep(wait_time)\n            result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@delay(2)\ndef say_hello(name):\n    return f'Hello, {name}'\n\n@delay(1, jitter=True)\ndef make_request():\n    return 'Request completed'\n\nprint(say_hello('Alice'))\nprint('-' * 20)\nfor i in range(3):\n    print(make_request())",
    hint: "Add jitter to prevent synchronized requests"
},
{
    Id: "py_dec_29",
    topicId: "py_decorators",
    question: "Create a decorator that adds a fallback value on failure.",
    mathSolution: "Return fallback value if function raises exception",
    codeSolution: "import functools\n\ndef fallback(fallback_value):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            try:\n                return func(*args, **kwargs)\n            except Exception as e:\n                print(f'Error: {e}. Using fallback value.')\n                return fallback_value\n        return wrapper\n    return decorator\n\n@fallback('Unknown')\ndef get_user_name(user_id):\n    users = {1: 'Alice', 2: 'Bob'}\n    if user_id not in users:\n        raise ValueError(f'User {user_id} not found')\n    return users[user_id]\n\n@fallback(0)\ndef divide(a, b):\n    return a / b\n\nprint(get_user_name(1))\nprint(get_user_name(3))\nprint(divide(10, 2))\nprint(divide(10, 0))",
    hint: "Catch all exceptions and return fallback value"
},
{
    Id: "py_dec_30",
    topicId: "py_decorators",
    question: "Create a decorator that adds a lock for thread safety.",
    mathSolution: "Use threading.Lock to prevent race conditions",
    codeSolution: "import threading\nimport functools\nimport time\n\ndef synchronized(lock=None):\n    if lock is None:\n        lock = threading.Lock()\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            with lock:\n                return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\nclass Counter:\n    def __init__(self):\n        self.value = 0\n        self.lock = threading.Lock()\n    \n    @synchronized()\n    def increment(self):\n        temp = self.value\n        time.sleep(0.0001)\n        self.value = temp + 1\n    \n    @synchronized()\n    def decrement(self):\n        temp = self.value\n        time.sleep(0.0001)\n        self.value = temp - 1\n    \n    def get_value(self):\n        return self.value\n\ncounter = Counter()\n\ndef worker(increment=True):\n    for _ in range(100):\n        if increment:\n            counter.increment()\n        else:\n            counter.decrement()\n\nthreads = []\nfor i in range(10):\n    t = threading.Thread(target=worker, args=(i < 5,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f'Final counter value: {counter.get_value()}')",
    hint: "Use with lock: context manager for thread safety"
},
{
    Id: "py_dec_31",
    topicId: "py_decorators",
    question: "Create a decorator that adds a read-only property to a class.",
    mathSolution: "Make attribute readable but not writable",
    codeSolution: "def readonly_property(func):\n    return property(func)\n\nclass Person:\n    def __init__(self, name, birth_year):\n        self._name = name\n        self._birth_year = birth_year\n    \n    @readonly_property\n    def name(self):\n        return self._name\n    \n    @readonly_property\n    def birth_year(self):\n        return self._birth_year\n    \n    @readonly_property\n    def age(self):\n        from datetime import date\n        return date.today().year - self._birth_year\n\np = Person('Alice', 1990)\nprint(f'Name: {p.name}')\nprint(f'Birth year: {p.birth_year}')\nprint(f'Age: {p.age}')",
    hint: "property() creates read-only attribute without setter"
},
{
    Id: "py_dec_32",
    topicId: "py_decorators",
    question: "Create a decorator that adds a deprecated warning.",
    mathSolution: "Warn when deprecated function is called",
    codeSolution: "import functools\nimport warnings\n\ndef deprecated(message=None):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            warning_msg = message or f'{func.__name__} is deprecated'\n            warnings.warn(warning_msg, DeprecationWarning, stacklevel=2)\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@deprecated('Use new_function() instead')\ndef old_function():\n    return 'Doing something old'\n\n@deprecated()\ndef another_old_function():\n    return 'Also deprecated'\n\nprint(old_function())\nprint(another_old_function())\n\nprint('\\nRun with: python -W always script.py to see warnings')",
    hint: "Use warnings.warn() with DeprecationWarning"
},
{
    Id: "py_dec_33",
    topicId: "py_decorators",
    question: "Create a decorator that adds memoization with disk persistence.",
    mathSolution: "Cache results to disk using pickle",
    codeSolution: "import functools\nimport pickle\nimport hashlib\nimport os\nimport time\n\ndef disk_cache(cache_dir='cache'):\n    def decorator(func):\n        os.makedirs(cache_dir, exist_ok=True)\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key_data = f'{func.__name__}:{args}:{sorted(kwargs.items())}'\n            key = hashlib.md5(key_data.encode()).hexdigest()\n            cache_path = os.path.join(cache_dir, f'{key}.pickle')\n            \n            if os.path.exists(cache_path):\n                mod_time = os.path.getmtime(cache_path)\n                print(f'Cache hit: {key} (cached {time.ctime(mod_time)})')\n                with open(cache_path, 'rb') as f:\n                    return pickle.load(f)\n            \n            print(f'Cache miss: {key}')\n            result = func(*args, **kwargs)\n            with open(cache_path, 'wb') as f:\n                pickle.dump(result, f)\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@disk_cache(cache_dir='function_cache')\ndef expensive_computation(n):\n    print(f'Computing {n}...')\n    time.sleep(2)\n    return n * n\n\nprint(expensive_computation(5))\nprint(expensive_computation(5))\nprint(expensive_computation(10))\nprint(expensive_computation(10))\n\nimport shutil\nshutil.rmtree('function_cache', ignore_errors=True)",
    hint: "Use hashlib to create unique filename from arguments"
},
{
    Id: "py_dec_34",
    topicId: "py_decorators",
    question: "Create a decorator that adds a rate limiter per user/IP.",
    mathSolution: "Track calls per identifier with time window",
    codeSolution: "import time\nimport functools\nfrom collections import defaultdict\n\nclass RateLimiter:\n    def __init__(self):\n        self.calls = defaultdict(list)\n    \n    def is_allowed(self, key, max_calls, window_seconds):\n        now = time.time()\n        self.calls[key] = [t for t in self.calls[key] if now - t < window_seconds]\n        \n        if len(self.calls[key]) < max_calls:\n            self.calls[key].append(now)\n            return True\n        return False\n\nrate_limiter = RateLimiter()\n\ndef rate_limit_by_key(key_func, max_calls, window_seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = key_func(*args, **kwargs)\n            \n            if rate_limiter.is_allowed(key, max_calls, window_seconds):\n                return func(*args, **kwargs)\n            else:\n                raise Exception(f'Rate limit exceeded for {key}')\n        \n        return wrapper\n    return decorator\n\n@rate_limit_by_key(lambda user_id: f'user:{user_id}', max_calls=3, window_seconds=10)\ndef api_call(user_id):\n    return f'API response for user {user_id}'\n\nfor user in [1, 2, 1, 1, 1, 1]:\n    try:\n        print(api_call(user))\n    except Exception as e:\n        print(f'Error: {e}')\n    time.sleep(1)",
    hint: "Generate key dynamically from arguments (user ID, IP, etc.)"
},
{
    Id: "py_dec_35",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with background refresh.",
    mathSolution: "Refresh cache in background before it expires",
    codeSolution: "import time\nimport threading\nimport functools\n\ndef background_refresh(ttl_seconds=60, refresh_before=10):\n    def decorator(func):\n        cache = {}\n        lock = threading.Lock()\n        refresh_threads = {}\n        \n        def refresh_key(key, args, kwargs):\n            time.sleep(ttl_seconds - refresh_before)\n            with lock:\n                if key in cache:\n                    print(f'Background refreshing {key}')\n                    result = func(*args, **kwargs)\n                    cache[key] = (result, time.time())\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            with lock:\n                if key in cache:\n                    result, timestamp = cache[key]\n                    age = time.time() - timestamp\n                    \n                    if age < ttl_seconds:\n                        print(f'Cache hit: {key} (age: {age:.1f}s)')\n                        return result\n                    else:\n                        print(f'Cache expired: {key}')\n                \n                print(f'Computing: {key}')\n                result = func(*args, **kwargs)\n                cache[key] = (result, time.time())\n                \n                if key not in refresh_threads or not refresh_threads[key].is_alive():\n                    refresh_threads[key] = threading.Thread(\n                        target=refresh_key, args=(key, args, kwargs), daemon=True\n                    )\n                    refresh_threads[key].start()\n                \n                return result\n        \n        return wrapper\n    return decorator\n\n@background_refresh(ttl_seconds=5, refresh_before=2)\ndef get_data(item_id):\n    print(f'Fetching data for {item_id}...')\n    time.sleep(1)\n    return f'Data for {item_id}'\n\nfor i in range(10):\n    print(get_data('A'))\n    time.sleep(1.5)",
    hint: "Start background thread to refresh cache before expiration"
},
{
    Id: "py_dec_36",
    topicId: "py_decorators",
    question: "Create a decorator that adds conditional execution based on predicate.",
    mathSolution: "Only execute function if predicate returns True",
    codeSolution: "import functools\n\ndef conditional(predicate):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            if predicate(*args, **kwargs):\n                print(f'Condition met, executing {func.__name__}')\n                return func(*args, **kwargs)\n            else:\n                print(f'Condition not met, skipping {func.__name__}')\n                return None\n        return wrapper\n    return decorator\n\ndef is_positive(x):\n    return x > 0\n\ndef is_admin(user):\n    return user.get('role') == 'admin'\n\n@conditional(is_positive)\ndef sqrt(x):\n    return x ** 0.5\n\n@conditional(is_admin)\ndef delete_user(user, user_id):\n    return f'User {user_id} deleted by {user[\"name\"]}'\n\nprint(sqrt(16))\nprint(sqrt(-5))\n\nadmin = {'name': 'Alice', 'role': 'admin'}\nuser = {'name': 'Bob', 'role': 'user'}\nprint(delete_user(admin, 123))\nprint(delete_user(user, 456))",
    hint: "Pass same arguments to predicate and function"
},
{
    Id: "py_dec_37",
    topicId: "py_decorators",
    question: "Create a decorator that adds method tracing with indentation.",
    mathSolution: "Track nested function calls with indentation level",
    codeSolution: "import functools\n\nclass Tracer:\n    def __init__(self):\n        self.indent = 0\n    \n    def trace(self, func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            indent_str = '  ' * self.indent\n            print(f'{indent_str}→ Entering {func.__name__}(args={args}, kwargs={kwargs})')\n            \n            self.indent += 1\n            try:\n                result = func(*args, **kwargs)\n                print(f'{indent_str}← {func.__name__} returned {result}')\n                return result\n            except Exception as e:\n                print(f'{indent_str}← {func.__name__} raised {e}')\n                raise\n            finally:\n                self.indent -= 1\n        \n        return wrapper\n\ntracer = Tracer()\n\n@tracer.trace\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\n@tracer.trace\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint('Factorial of 3:')\nfactorial(3)\n\nprint('\\nFibonacci of 4:')\nfibonacci(4)",
    hint: "Use global indent counter to show call hierarchy"
},
{
    Id: "py_dec_38",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout with asyncio.",
    mathSolution: "Use asyncio.wait_for for async function timeout",
    codeSolution: "import asyncio\nimport functools\n\ndef async_timeout(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                print(f'Function {func.__name__} timed out after {seconds}s')\n                raise\n        return wrapper\n    return decorator\n\n@async_timeout(2)\nasync def slow_async():\n    await asyncio.sleep(3)\n    return 'Slow result'\n\n@async_timeout(2)\nasync def fast_async():\n    await asyncio.sleep(1)\n    return 'Fast result'\n\nasync def main():\n    print(await fast_async())\n    try:\n        print(await slow_async())\n    except asyncio.TimeoutError:\n        print('Caught timeout')\n\nasyncio.run(main())",
    hint: "Use asyncio.wait_for() for timeout in async functions"
},
{
    Id: "py_dec_39",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker for async functions.",
    mathSolution: "Async circuit breaker with failure tracking",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass AsyncCircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n        self.lock = asyncio.Lock()\n\ndef async_circuit_breaker(failure_threshold=3, recovery_timeout=5):\n    breaker = AsyncCircuitBreaker(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with breaker.lock:\n                current_time = time.time()\n                \n                if breaker.state == 'OPEN':\n                    if current_time - breaker.last_failure_time > breaker.recovery_timeout:\n                        breaker.state = 'HALF_OPEN'\n                        print('Circuit half-open - testing...')\n                    else:\n                        raise Exception('Circuit breaker is OPEN')\n            \n            try:\n                result = await func(*args, **kwargs)\n                \n                async with breaker.lock:\n                    if breaker.state == 'HALF_OPEN':\n                        breaker.state = 'CLOSED'\n                        breaker.failure_count = 0\n                        print('Circuit closed -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                async with breaker.lock:\n                    breaker.failure_count += 1\n                    breaker.last_failure_time = time.time()\n                    \n                    if breaker.failure_count >= breaker.failure_threshold:\n                        breaker.state = 'OPEN'\n                        print('Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@async_circuit_breaker(failure_threshold=2, recovery_timeout=3)\nasync def unreliable_async():\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.7:\n        raise ValueError('Async service failed')\n    return 'Async success'\n\nasync def main():\n    for i in range(10):\n        try:\n            result = await unreliable_async()\n            print(f'Call {i}: {result}')\n        except Exception as e:\n            print(f'Call {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Use asyncio.Lock for thread-safe state updates"
},
{
    Id: "py_dec_40",
    topicId: "py_decorators",
    question: "Create a decorator that adds retry with async/await.",
    mathSolution: "Async retry decorator with configurable delays",
    codeSolution: "import asyncio\nimport functools\n\ndef async_retry(max_retries=3, delay=1, backoff=2):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            last_exception = None\n            \n            for attempt in range(max_retries):\n                try:\n                    return await func(*args, **kwargs)\n                except Exception as e:\n                    last_exception = e\n                    if attempt < max_retries - 1:\n                        wait_time = delay * (backoff ** attempt)\n                        print(f'Attempt {attempt + 1} failed. Retrying in {wait_time}s...')\n                        await asyncio.sleep(wait_time)\n                    else:\n                        print(f'All {max_retries} attempts failed')\n            \n            raise last_exception\n        \n        return wrapper\n    return decorator\n\n@async_retry(max_retries=4, delay=1, backoff=2)\nasync def flaky_async():\n    import random\n    if random.random() < 0.6:\n        raise ValueError('Async operation failed')\n    return 'Async operation succeeded'\n\nasync def main():\n    for i in range(3):\n        try:\n            result = await flaky_async()\n            print(f'Success: {result}')\n        except Exception as e:\n            print(f'Final failure: {e}')\n        print('-' * 30)\n\nasyncio.run(main())",
    hint: "Use await asyncio.sleep() for non-blocking delays"
},
{
    Id: "py_dec_41",
    topicId: "py_decorators",
    question: "Create a decorator that adds a semaphore for concurrent limits.",
    mathSolution: "Limit number of concurrent async function calls",
    codeSolution: "import asyncio\nimport functools\n\ndef async_concurrent_limit(limit=5):\n    semaphore = asyncio.Semaphore(limit)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with semaphore:\n                print(f'Acquired semaphore. Available: {semaphore._value}')\n                return await func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@async_concurrent_limit(limit=3)\nasync def limited_task(task_id, duration):\n    print(f'Task {task_id} starting (will take {duration}s)')\n    await asyncio.sleep(duration)\n    print(f'Task {task_id} finished')\n    return f'Result {task_id}'\n\nasync def main():\n    tasks = [\n        limited_task(i, 2) for i in range(10)\n    ]\n    results = await asyncio.gather(*tasks)\n    print(f'All results: {results}')\n\nasyncio.run(main())",
    hint: "Use asyncio.Semaphore to limit concurrent executions"
},
{
    Id: "py_dec_42",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with async support.",
    mathSolution: "Async memoization with cache storage",
    codeSolution: "import asyncio\nimport functools\n\ndef async_cache(maxsize=128):\n    def decorator(func):\n        cache = {}\n        pending = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                print(f'Cache hit: {key}')\n                return cache[key]\n            \n            if key in pending:\n                print(f'Already computing: {key}, waiting...')\n                return await pending[key]\n            \n            print(f'Computing: {key}')\n            future = asyncio.create_task(func(*args, **kwargs))\n            pending[key] = future\n            \n            try:\n                result = await future\n                cache[key] = result\n                \n                if len(cache) > maxsize:\n                    oldest = next(iter(cache))\n                    del cache[oldest]\n                    print(f'Evicted: {oldest}')\n                \n                return result\n            finally:\n                del pending[key]\n        \n        return wrapper\n    return decorator\n\n@async_cache(maxsize=3)\nasync def expensive_async(n):\n    print(f'Starting expensive calculation for {n}')\n    await asyncio.sleep(2)\n    return n * n\n\nasync def main():\n    print(await expensive_async(5))\n    print(await expensive_async(10))\n    print(await expensive_async(5))\n    print(await expensive_async(3))\n    print(await expensive_async(7))\n    print(await expensive_async(5))\n\nasyncio.run(main())",
    hint: "Track pending futures to avoid duplicate computations"
},
{
    Id: "py_dec_43",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout with fallback for async.",
    mathSolution: "Return fallback value if async function times out",
    codeSolution: "import asyncio\nimport functools\n\ndef async_timeout_fallback(seconds, fallback_value):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                print(f'Function {func.__name__} timed out after {seconds}s, using fallback')\n                return fallback_value\n        return wrapper\n    return decorator\n\n@async_timeout_fallback(2, 'Default response')\nasync def fetch_data(source):\n    import random\n    delay = random.uniform(1, 3)\n    print(f'Fetching from {source} (will take {delay:.1f}s)')\n    await asyncio.sleep(delay)\n    return f'Data from {source}'\n\nasync def main():\n    sources = ['API', 'Database', 'Cache']\n    for source in sources:\n        result = await fetch_data(source)\n        print(f'Result: {result}\\n')\n\nasyncio.run(main())",
    hint: "Catch TimeoutError and return fallback value"
},
{
    Id: "py_dec_44",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker with async/await.",
    mathSolution: "Async circuit breaker with half-open state",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass AsyncCircuitBreakerState:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n        self.lock = asyncio.Lock()\n\ndef async_circuit_breaker_with_half_open(failure_threshold=3, recovery_timeout=5):\n    state = AsyncCircuitBreakerState(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with state.lock:\n                current_time = time.time()\n                \n                if state.state == 'OPEN':\n                    if current_time - state.last_failure_time > state.recovery_timeout:\n                        state.state = 'HALF_OPEN'\n                        print('🔓 Circuit HALF-OPEN - allowing trial request')\n                    else:\n                        print('🔴 Circuit OPEN - request rejected')\n                        raise Exception('Circuit breaker is OPEN')\n                \n                if state.state == 'HALF_OPEN':\n                    print('🟡 Circuit HALF-OPEN - trial request')\n            \n            try:\n                result = await func(*args, **kwargs)\n                \n                async with state.lock:\n                    if state.state == 'HALF_OPEN':\n                        state.state = 'CLOSED'\n                        state.failure_count = 0\n                        print('🟢 Circuit CLOSED -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                async with state.lock:\n                    state.failure_count += 1\n                    state.last_failure_time = time.time()\n                    \n                    if state.failure_count >= state.failure_threshold or state.state == 'HALF_OPEN':\n                        state.state = 'OPEN'\n                        print('🔴 Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@async_circuit_breaker_with_half_open(failure_threshold=2, recovery_timeout=3)\nasync def unstable_service(request_id):\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.6:\n        raise ValueError(f'Service {request_id} failed')\n    return f'Service {request_id} succeeded'\n\nasync def main():\n    for i in range(12):\n        try:\n            result = await unstable_service(i)\n            print(f'✅ Request {i}: {result}')\n        except Exception as e:\n            print(f'❌ Request {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Use HALF_OPEN state to test recovery"
},
{
    Id: "py_dec_45",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with TTL for async.",
    mathSolution: "Async cache with time-based expiration",
    codeSolution: "import asyncio\nimport functools\nimport time\n\ndef async_cache_ttl(ttl_seconds=60):\n    def decorator(func):\n        cache = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            current_time = time.time()\n            \n            if key in cache:\n                result, timestamp = cache[key]\n                if current_time - timestamp < ttl_seconds:\n                    print(f'Cache hit: {key}')\n                    return result\n                else:\n                    print(f'Cache expired: {key}')\n            \n            print(f'Computing: {key}')\n            result = await func(*args, **kwargs)\n            cache[key] = (result, current_time)\n            \n            if len(cache) > 100:\n                expired = [k for k, (_, ts) in cache.items() if current_time - ts >= ttl_seconds]\n                for k in expired:\n                    del cache[k]\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@async_cache_ttl(ttl_seconds=3)\nasync def fetch_data(item):\n    print(f'Fetching {item} from slow source...')\n    await asyncio.sleep(1)\n    return f'Data for {item}'\n\nasync def main():\n    print(await fetch_data('A'))\n    print(await fetch_data('B'))\n    print(await fetch_data('A'))\n    \n    await asyncio.sleep(4)\n    print(await fetch_data('A'))\n\nasyncio.run(main())",
    hint: "Store timestamp with cached value for TTL check"
},
{
    Id: "py_dec_46",
    topicId: "py_decorators",
    question: "Create a decorator that adds a retry with exponential backoff for async.",
    mathSolution: "Async retry with increasing delays",
    codeSolution: "import asyncio\nimport functools\nimport random\n\ndef async_retry_exponential(max_retries=5, base_delay=1, max_delay=60):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return await func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All {max_retries} attempts failed')\n                        raise\n                    \n                    delay = min(base_delay * (2 ** attempt), max_delay)\n                    jitter = random.uniform(0, 0.1 * delay)\n                    total_delay = delay + jitter\n                    \n                    print(f'Attempt {attempt + 1} failed. Retrying in {total_delay:.2f}s...')\n                    await asyncio.sleep(total_delay)\n        \n        return wrapper\n    return decorator\n\n@async_retry_exponential(max_retries=4, base_delay=1)\nasync def flaky_api(endpoint):\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.5:\n        raise ConnectionError(f'Failed to connect to {endpoint}')\n    return f'Response from {endpoint}'\n\nasync def main():\n    endpoints = ['users', 'posts', 'comments']\n    for endpoint in endpoints:\n        try:\n            result = await flaky_api(endpoint)\n            print(f'✅ Success: {result}')\n        except Exception as e:\n            print(f'❌ Failed: {e}')\n        print('-' * 30)\n\nasyncio.run(main())",
    hint: "Use min() to cap maximum delay"
},
{
    Id: "py_dec_47",
    topicId: "py_decorators",
    question: "Create a decorator that adds a bulkhead pattern (separate semaphores per endpoint).",
    mathSolution: "Isolate failures by limiting concurrent calls per resource",
    codeSolution: "import asyncio\nimport functools\n\nclass Bulkhead:\n    def __init__(self):\n        self.semaphores = {}\n        self.lock = asyncio.Lock()\n    \n    async def get_semaphore(self, key, max_concurrent):\n        async with self.lock:\n            if key not in self.semaphores:\n                self.semaphores[key] = asyncio.Semaphore(max_concurrent)\n            return self.semaphores[key]\n\nbulkhead = Bulkhead()\n\ndef bulkhead_decorator(key_func, max_concurrent=5):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = key_func(*args, **kwargs)\n            semaphore = await bulkhead.get_semaphore(key, max_concurrent)\n            \n            async with semaphore:\n                print(f'[{key}] Acquired (concurrent: {max_concurrent - semaphore._value + 1}/{max_concurrent})')\n                return await func(*args, **kwargs)\n        \n        return wrapper\n    return decorator\n\n@bulkhead_decorator(lambda service: service, max_concurrent=2)\nasync def call_service(service, duration):\n    print(f'Calling {service}...')\n    await asyncio.sleep(duration)\n    return f'{service} response'\n\nasync def main():\n    tasks = []\n    for i in range(5):\n        tasks.append(call_service('auth', 2))\n    for i in range(5):\n        tasks.append(call_service('payments', 3))\n    \n    results = await asyncio.gather(*tasks, return_exceptions=True)\n    print(f'Completed {len([r for r in results if not isinstance(r, Exception)])} calls')\n\nasyncio.run(main())",
    hint: "Create separate semaphores per resource key"
},
{
    Id: "py_dec_48",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache stampede protection.",
    mathSolution: "Prevent multiple simultaneous cache rebuilds",
    codeSolution: "import asyncio\nimport functools\n\ndef cache_stampede_protection(ttl_seconds=60):\n    def decorator(func):\n        cache = {}\n        pending = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                value, timestamp = cache[key]\n                import time\n                age = time.time() - timestamp\n                \n                if age < ttl_seconds * 0.8:\n                    return value\n                \n                if age < ttl_seconds:\n                    if key not in pending:\n                        print(f'Stale cache for {key}, refreshing in background')\n                        pending[key] = asyncio.create_task(func(*args, **kwargs))\n                        pending[key].add_done_callback(lambda _: pending.pop(key, None))\n                    return value\n            \n            if key in pending:\n                print(f'Waiting for {key} computation')\n                return await pending[key]\n            \n            print(f'Computing fresh value for {key}')\n            pending[key] = asyncio.create_task(func(*args, **kwargs))\n            try:\n                result = await pending[key]\n                import time\n                cache[key] = (result, time.time())\n                return result\n            finally:\n                pending.pop(key, None)\n        \n        return wrapper\n    return decorator\n\n@cache_stampede_protection(ttl_seconds=5)\nasync def expensive_query(query):\n    print(f'Executing expensive query: {query}')\n    await asyncio.sleep(2)\n    return f'Result for {query}'\n\nasync def main():\n    tasks = [expensive_query('SELECT * FROM users') for _ in range(10)]\n    results = await asyncio.gather(*tasks)\n    print(f'All results: {results[:3]}... (total {len(results)})')\n\nasyncio.run(main())",
    hint: "Use stale-while-revalidate pattern with background refresh"
},
{
    Id: "py_dec_49",
    topicId: "py_decorators",
    question: "Create a decorator that adds a rate limiter with token bucket algorithm.",
    mathSolution: "Token bucket rate limiting with async support",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass TokenBucket:\n    def __init__(self, rate, capacity):\n        self.rate = rate\n        self.capacity = capacity\n        self.tokens = capacity\n        self.last_refill = time.time()\n        self.lock = asyncio.Lock()\n    \n    async def consume(self, tokens=1):\n        async with self.lock:\n            now = time.time()\n            elapsed = now - self.last_refill\n            self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)\n            self.last_refill = now\n            \n            if self.tokens >= tokens:\n                self.tokens -= tokens\n                return True\n            return False\n\ndef token_bucket_rate_limit(rate=1, capacity=5):\n    bucket = TokenBucket(rate, capacity)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            if await bucket.consume():\n                return await func(*args, **kwargs)\n            else:\n                raise Exception('Rate limit exceeded')\n        return wrapper\n    return decorator\n\n@token_bucket_rate_limit(rate=2, capacity=3)\nasync def api_request(request_id):\n    print(f'Processing request {request_id}')\n    await asyncio.sleep(0.5)\n    return f'Response {request_id}'\n\nasync def main():\n    tasks = []\n    for i in range(10):\n        tasks.append(api_request(i))\n        if i % 3 == 2:\n            await asyncio.sleep(1)\n    \n    for i, task in enumerate(tasks):\n        try:\n            result = await task\n            print(f'✅ {result}')\n        except Exception as e:\n            print(f'❌ Request {i}: {e}')\n\nasyncio.run(main())",
    hint: "Refill tokens based on elapsed time since last check"
},
{
    Id: "py_dec_50",
    topicId: "py_decorators",
    question: "Create a decorator that adds a distributed lock using Redis (simulated).",
    mathSolution: "Distributed locking to prevent concurrent execution across processes",
    codeSolution: "import asyncio\nimport functools\nimport time\nimport uuid\n\nclass DistributedLock:\n    def __init__(self):\n        self.locks = {}\n    \n    async def acquire(self, lock_name, timeout=10, retry_interval=0.1):\n        lock_id = str(uuid.uuid4())\n        start = time.time()\n        \n        while time.time() - start < timeout:\n            if lock_name not in self.locks:\n                self.locks[lock_name] = lock_id\n                return lock_id\n            await asyncio.sleep(retry_interval)\n        \n        return None\n    \n    async def release(self, lock_name, lock_id):\n        if lock_name in self.locks and self.locks[lock_name] == lock_id:\n            del self.locks[lock_name]\n            return True\n        return False\n\ndistributed_lock = DistributedLock()\n\ndef distributed_lock_decorator(lock_name_func, timeout=10):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            lock_name = lock_name_func(*args, **kwargs)\n            lock_id = await distributed_lock.acquire(lock_name, timeout)\n            \n            if not lock_id:\n                raise Exception(f'Could not acquire lock: {lock_name}')\n            \n            try:\n                print(f'Acquired lock: {lock_name}')\n                return await func(*args, **kwargs)\n            finally:\n                await distributed_lock.release(lock_name, lock_id)\n                print(f'Released lock: {lock_name}')\n        \n        return wrapper\n    return decorator\n\n@distributed_lock_decorator(lambda user_id: f'user:{user_id}')\nasync def update_user(user_id):\n    print(f'Updating user {user_id}...')\n    await asyncio.sleep(2)\n    return f'User {user_id} updated'\n\nasync def main():\n    tasks = [\n        update_user(123),\n        update_user(123),\n        update_user(456),\n        update_user(456),\n        update_user(123)\n    ]\n    \n    results = await asyncio.gather(*tasks, return_exceptions=True)\n    for i, result in enumerate(results):\n        if isinstance(result, Exception):\n            print(f'Task {i}: Failed - {result}')\n        else:\n            print(f'Task {i}: {result}')\n\nasyncio.run(main())",
    hint: "Use unique lock ID to prevent releasing locks held by others"
}
);