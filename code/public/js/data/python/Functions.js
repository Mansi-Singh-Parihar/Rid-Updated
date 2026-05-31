QuizData.questions.push(
{
  id: 'py_func_1',
  topicId: 'py_functions',
  question: 'Write a function that takes two numbers as arguments and returns their sum.',
  mathSolution: 'Define a function with parameters and return the result.',
  codeSolution: 'def add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(2, 3))  # Output: 5',
  hint: 'Use the return statement to send back the result.'
},
{
  id: 'py_func_2',
  topicId: 'py_functions',
  question: 'Create a function that checks if a number is even or odd.',
  mathSolution: 'Use modulo operator to check divisibility by 2.',
  codeSolution: 'def is_even(num):\n    return num % 2 == 0\n\nprint(is_even(4))  # Output: True',
  hint: 'Return True if number % 2 == 0, otherwise False.'
},
{
  id: 'py_func_3',
  topicId: 'py_functions',
  question: 'Write a function with default parameters for greeting.',
  mathSolution: 'Assign default values to parameters that can be overridden.',
  codeSolution: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet("Alice"))  # Output: Hello, Alice!',
  hint: 'Default parameters are used when arguments are not provided.'
},
{
  id: 'py_func_4',
  topicId: 'py_functions',
  question: 'Create a function that returns multiple values (min and max of a list).',
  mathSolution: 'Return a tuple containing multiple values.',
  codeSolution: 'def min_max(numbers):\n    return min(numbers), max(numbers)\n\nprint(min_max([1, 2, 3, 4]))  # Output: (1, 4)',
  hint: 'Multiple values are returned as a tuple by default.'
},
{
  id: 'py_func_5',
  topicId: 'py_functions',
  question: 'Write a function with variable number of arguments (*args).',
  mathSolution: 'Use *args to accept any number of positional arguments.',
  codeSolution: 'def sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3))  # Output: 6',
  hint: '*args collects all positional arguments into a tuple.'
},
{
  id: 'py_func_6',
  topicId: 'py_functions',
  question: 'Create a function with variable number of keyword arguments (**kwargs).',
  mathSolution: 'Use **kwargs to accept any number of keyword arguments.',
  codeSolution: 'def print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nprint_info(name="John", age=20)',
  hint: '**kwargs collects all keyword arguments into a dictionary.'
},
{
  id: 'py_func_7',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate factorial of a number.',
  mathSolution: 'Base case: n=0 returns 1; recursive case: n * factorial(n-1).',
  codeSolution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # Output: 120',
  hint: 'Recursive functions call themselves with modified parameters.'
},
{
  id: 'py_func_8',
  topicId: 'py_functions',
  question: 'Create a lambda function to double a number.',
  mathSolution: 'Lambda functions are anonymous single-expression functions.',
  codeSolution: 'double = lambda x: x * 2\nprint(double(5))  # Output: 10',
  hint: 'Lambda functions are defined without def keyword.'
},
{
  id: 'py_func_9',
  topicId: 'py_functions',
  question: 'Use map() function with lambda to square all elements in a list.',
  mathSolution: 'map() applies a function to every item in an iterable.',
  codeSolution: 'numbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # Output: [1, 4, 9, 16]',
  hint: 'map() returns an iterator, convert to list to see results.'
},
{
  id: 'py_func_10',
  topicId: 'py_functions',
  question: 'Use filter() to get only even numbers from a list.',
  mathSolution: 'filter() keeps items where function returns True.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # Output: [2, 4, 6]',
  hint: 'filter() returns iterator, convert to list to see results.'
},

{
  id: 'py_func_11',
  topicId: 'py_functions',
  question: 'Use reduce() to find product of all numbers in a list.',
  mathSolution: 'reduce() cumulatively applies function to items.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 24',
  hint: 'reduce() is in functools module, not built-in.'
},
{
  id: 'py_func_12',
  topicId: 'py_functions',
  question: 'Write a function that returns another function (closure).',
  mathSolution: 'Inner function remembers variables from outer scope.',
  codeSolution: 'def multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = multiplier(2)\nprint(double(5))  # Output: 10',
  hint: 'Closures capture and remember outer variables.'
},
{
  id: 'py_func_13',
  topicId: 'py_functions',
  question: 'Create a decorator that prints function execution time.',
  mathSolution: 'Decorators wrap functions to add functionality.',
  codeSolution: 'import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"Time: {end-start:.4f}s")\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return "Done"\n\nprint(slow_function())',
  hint: 'Decorators use @ syntax and modify function behavior.'
},
{
  id: 'py_func_14',
  topicId: 'py_functions',
  question: 'Write a decorator that caches function results (memoization).',
  mathSolution: 'Store results in cache to avoid recomputation.',
  codeSolution: 'def memoize(func):\n    cache = {}\n    def wrapper(*args):\n        if args in cache:\n            return cache[args]\n        cache[args] = func(*args)\n        return cache[args]\n    return wrapper\n\n@memoize\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # Output: 8',
  hint: 'Cache dictionary stores results for given arguments.'
},

{
  id: 'py_func_15',
  topicId: 'py_functions',
  question: 'Create a generator function that yields Fibonacci numbers.',
  mathSolution: 'Generators use yield to produce values one at a time.',
  codeSolution: 'def fibonacci_generator(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci_generator(5)))  # Output: [0, 1, 1, 2, 3]',
  hint: 'yield pauses function, saving state for next call.'
},

{
  id: 'py_func_16',
  topicId: 'py_functions',
  question: 'Write a function with type hints for parameters and return value.',
  mathSolution: 'Type hints improve code readability and enable static checking.',
  codeSolution: 'def greet(name: str, age: int) -> str:\n    return f"{name} is {age} years old"\n\nprint(greet("Alice", 25))  # Output: Alice is 25 years old',
  hint: 'Type hints don\'t enforce types but document them.'
},
{
  id: 'py_func_17',
  topicId: 'py_functions',
  question: 'Create a function that uses global variable with global keyword.',
  mathSolution: 'global keyword allows modifying variables in global scope.',
  codeSolution: 'counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n    return counter\n\nprint(increment())  # Output: 1\nprint(increment())  # Output: 2',
  hint: 'Avoid global variables when possible; they make code harder to debug.'
},
{
  id: 'py_func_18',
  topicId: 'py_functions',
  question: 'Write a function that demonstrates variable scope (local vs global).',
  mathSolution: 'Variables inside function are local unless declared global.',
  codeSolution: 'x = 10\n\ndef scope_demo():\n    x = 5\n    print(f"Local x: {x}")\n\nscope_demo()\nprint(f"Global x: {x}")',
  hint: 'Local variables don\'t affect global variables with same name.'
},
{
  id: 'py_func_19',
  topicId: 'py_functions',
  question: 'Create a function that validates input using docstring.',
  mathSolution: 'Docstrings document function purpose and usage.',
  codeSolution: 'def divide(a: float, b: float) -> float:\n    if b == 0:\n        raise ValueError("Denominator cannot be zero")\n    return a / b\n\nprint(divide(10, 2))  # Output: 5.0',
  hint: 'Docstrings are accessible via help(function) or function.__doc__.'
},
{
  id: 'py_func_20',
  topicId: 'py_functions',
  question: 'Write a function that uses nonlocal keyword in nested function.',
  mathSolution: 'nonlocal allows modifying variables in enclosing scope.',
  codeSolution: 'def outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\n\ncounter = outer()\nprint(counter())  # Output: 1\nprint(counter())  # Output: 2',
  hint: 'nonlocal is for nested functions, global for module scope.'
},
{
  id: 'py_func_21',
  topicId: 'py_functions',
  question: 'Create a function that accepts both positional and keyword arguments.',
  mathSolution: 'Combine *args and **kwargs for flexibility.',
  codeSolution: 'def flexible_function(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\nflexible_function(1, 2, name="Alice")',
  hint: 'args is tuple, kwargs is dictionary.'
},
{
  id: 'py_func_22',
  topicId: 'py_functions',
  question: 'Write a function with keyword-only arguments.',
  mathSolution: 'Arguments after * are keyword-only.',
  codeSolution: 'def create_user(name, age, *, city="Unknown"):\n    return f"{name} from {city}"\n\nprint(create_user("John", 30, city="NYC"))',
  hint: 'Keyword-only arguments must be specified by name.'
},
{
  id: 'py_func_23',
  topicId: 'py_functions',
  question: 'Create a function with positional-only arguments.',
  mathSolution: 'Arguments before / are positional-only.',
  codeSolution: 'def power(x, y, /):\n    return x ** y\n\nprint(power(2, 3))  # Output: 8',
  hint: 'Positional-only arguments cannot be passed by keyword.'
},
{
  id: 'py_func_24',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate Fibonacci numbers.',
  mathSolution: 'fib(n)=fib(n-1)+fib(n-2).',
  codeSolution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # Output: 8',
  hint: 'Be careful with recursion depth.'
},
{
  id: 'py_func_25',
  topicId: 'py_functions',
  question: 'Create a function that implements tail recursion concept.',
  mathSolution: 'Pass accumulator to avoid extra computation.',
  codeSolution: 'def factorial_tail(n, acc=1):\n    if n == 0:\n        return acc\n    return factorial_tail(n-1, acc*n)\n\nprint(factorial_tail(5))  # Output: 120',
  hint: 'Python does not optimize tail recursion.'
},
{
  id: 'py_func_26',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.partial to fix arguments.',
  mathSolution: 'partial creates new function with some arguments fixed.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))\nprint(cube(5))',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_func_27',
  topicId: 'py_functions',
  question: 'Create a function that uses lru_cache for optimization.',
  mathSolution: 'lru_cache caches function results automatically.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'lru_cache caches results based on arguments.'
},
{
  id: 'py_func_28',
  topicId: 'py_functions',
  question: 'Write a function that implements currying.',
  mathSolution: 'Currying converts multi-argument functions into chained single-argument functions.',
  codeSolution: 'def curry(func):\n    def curried(*args):\n        if len(args) >= func.__code__.co_argcount:\n            return func(*args)\n        return lambda *more: curried(*(args + more))\n    return curried\n\n@curry\ndef add_three(a, b, c):\n    return a + b + c\n\nprint(add_three(1)(2)(3))',
  hint: 'Currying allows partial function application.'
},
{
  id: 'py_func_29',
  topicId: 'py_functions',
  question: 'Create a function that uses eval() safely.',
  mathSolution: 'Evaluate expressions with restricted environment.',
  codeSolution: 'def safe_eval(expression):\n    allowed = {"abs": abs, "pow": pow}\n    return eval(expression, {"__builtins__": {}}, allowed)',
  hint: 'Avoid eval with untrusted input.'
},
{
  id: 'py_func_30',
  topicId: 'py_functions',
  question: 'Write a function that uses exec() to execute dynamic code.',
  mathSolution: 'exec runs dynamically generated Python code.',
  codeSolution: 'def create_function():\n    namespace = {}\n    code = """\ndef greet():\n    return "Hello World"\n"""\n    exec(code, namespace)\n    return namespace["greet"]\n\nf = create_function()\nprint(f())',
  hint: 'exec should be used carefully.'
},
{
  id: 'py_func_31',
  topicId: 'py_functions',
  question: 'Create a function that acts as a context manager using contextlib.',
  mathSolution: 'contextlib provides utilities for working with context managers.',
  codeSolution: 'from contextlib import contextmanager\nfrom io import StringIO\n\n@contextmanager\ndef managed_file(initial_value=""):\n    f = StringIO(initial_value)\n    try:\n        yield f\n    finally:\n        f.close()\n\n# Usage\nwith managed_file() as f:\n    f.write("Hello World")\n    print(f.getvalue())',
  hint: 'contextmanager decorator turns generator into context manager.'
},

{
  id: 'py_func_32',
  topicId: 'py_functions',
  question: 'Write a function that uses property decorator for getter/setter.',
  mathSolution: 'property decorator creates managed attributes.',
  codeSolution: 'class Person:\n    def __init__(self, name):\n        self._name = name\n\n    @property\n    def name(self):\n        return self._name\n\n    @name.setter\n    def name(self, value):\n        if not isinstance(value, str):\n            raise TypeError("Name must be string")\n        self._name = value',
  hint: 'Property methods allow controlled attribute access.'
},
{
  id: 'py_func_33',
  topicId: 'py_functions',
  question: 'Create a function that uses staticmethod and classmethod.',
  mathSolution: 'staticmethod does not use self/cls; classmethod receives class.',
  codeSolution: 'class MathOperations:\n    def __init__(self, value):\n        self.value = int(value)\n\n    @staticmethod\n    def add(x, y):\n        return x + y\n\n    @classmethod\n    def create_from_string(cls, string):\n        return cls(string)\n\n# Usage\nprint(MathOperations.add(2, 3))\nobj = MathOperations.create_from_string("10")\nprint(obj.value)',
  hint: 'staticmethod = no self, classmethod = receives class.'
},

{
  id: 'py_func_34',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.wraps to preserve metadata in decorators.',
  mathSolution: 'wraps preserves original function metadata.',
  codeSolution: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print("Before function")\n        result = func(*args, **kwargs)\n        print("After function")\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    """Say hello docstring"""\n    print("Hello!")\n\nprint(say_hello.__name__)\nprint(say_hello.__doc__)',
  hint: 'wraps keeps function identity intact.'
},
{
  id: 'py_func_35',
  topicId: 'py_functions',
  question: 'Create a function that implements function overloading using singledispatch.',
  mathSolution: 'singledispatch selects function based on input type.',
  codeSolution: 'from functools import singledispatch\n\n@singledispatch\ndef process(data):\n    return f"Default: {data}"\n\n@process.register(int)\ndef _(data):\n    return data * 2\n\n@process.register(str)\ndef _(data):\n    return data.upper()\n\n@process.register(list)\ndef _(data):\n    return sum(data)\n\n# Usage\nprint(process(10))\nprint(process("hello"))\nprint(process([1, 2, 3]))\nprint(process(3.5))',
  hint: 'Function behavior changes by type.'
},
{
  id: 'py_func_36',
  topicId: 'py_functions',
  question: 'Write a function that uses inspect module to get function signature.',
  mathSolution: 'inspect reveals function structure.',
  codeSolution: 'import inspect\n\ndef example(a, b=2, *args, **kwargs):\n    pass\n\nsig = inspect.signature(example)\nprint(sig)',
  hint: 'inspect helps analyze functions at runtime.'
},
{
  id: 'py_func_37',
  topicId: 'py_functions',
  question: 'Create a function that validates arguments using function annotations.',
  mathSolution: 'Annotations define expected types.',
  codeSolution: 'def validate(func):\n    def wrapper(*args):\n        annotations = func.__annotations__\n        for name, value in zip(func.__code__.co_varnames, args):\n            if name in annotations and not isinstance(value, annotations[name]):\n                raise TypeError(f"{name} must be {annotations[name]}")\n        return func(*args)\n    return wrapper\n\n@validate\ndef greet(name: str, age: int):\n    return f"{name} is {age}"\n\nprint(greet("Alice", 25))',
  hint: 'Annotations help enforce type rules.'
},
{
  id: 'py_func_38',
  topicId: 'py_functions',
  question: 'Write a function that uses yield from to delegate to another generator.',
  mathSolution: 'yield from delegates iteration.',
  codeSolution: 'def sub():\n    yield 1\n    yield 2\n\ndef main():\n    yield "Start"\n    yield from sub()\n    yield "End"\n\nprint(list(main()))',
  hint: 'Simplifies nested generators.'
},
{
  id: 'py_func_39',
  topicId: 'py_functions',
  question: 'Create a function that implements coroutine with send() method.',
  mathSolution: 'Coroutines receive values dynamically.',
  codeSolution: 'def coroutine():\n    while True:\n        value = yield\n        print("Received:", value)\n\nc = coroutine()\nnext(c)\nc.send("Hello")\nc.send("World")',
  hint: 'send() passes values into generator.'
},
{
  id: 'py_func_40',
  topicId: 'py_functions',
  question: 'Write a function that uses yield to create an infinite sequence.',
  mathSolution: 'Generators can be infinite.',
  codeSolution: 'def infinite():\n    n = 0\n    while True:\n        yield n\n        n += 2\n\nit = infinite()\nprint(next(it))\nprint(next(it))\nprint(next(it))',
  hint: 'Use carefully to avoid infinite loops.'
},
{
  id: 'py_func_41',
  topicId: 'py_functions',
  question: 'Create a function that uses itertools for efficient looping.',
  mathSolution: 'itertools provides fast iteration tools.',
  codeSolution: 'import itertools\n\ncount = 0\nfor c in itertools.cycle(["A", "B"]):\n    print(c)\n    count += 1\n    if count == 4:\n        break',
  hint: 'cycle repeats values endlessly.'
},
{
  id: 'py_func_42',
  topicId: 'py_functions',
  question: 'Write a function that implements memoization manually.',
  mathSolution: 'Cache stores previous results.',
  codeSolution: 'def memoize(func):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = func(n)\n        return cache[n]\n    return wrapper\n\n@memoize\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))',
  hint: 'Improves performance using caching.'
},
{
  id: 'py_func_43',
  topicId: 'py_functions',
  question: 'Create a function that uses __call__ to make objects callable.',
  mathSolution: '__call__ makes objects behave like functions.',
  codeSolution: 'class A:\n    def __init__(self, x):\n        self.x = x\n    def __call__(self, y):\n        return self.x * y\n\nobj = A(5)\nprint(obj(2))',
  hint: 'Objects can act like functions.'
},
{
  id: 'py_func_44',
  topicId: 'py_functions',
  question: 'Write a function that demonstrates function introspection.',
  mathSolution: 'Functions store metadata.',
  codeSolution: 'def example(a, b=2):\n    """docstring"""\n    return a + b\n\nprint(example.__name__)\nprint(example.__doc__)\nprint(example.__defaults__)',
  hint: 'Use __name__, __doc__, __defaults__.'
},
{
  id: 'py_func_45',
  topicId: 'py_functions',
  question: 'Create a function that uses eval() to create dynamic functions.',
  mathSolution: 'Generate function code as string and evaluate.',
  codeSolution: 'def create_power_function(exponent):\n    return eval(f"lambda x: x ** {exponent}")\n\nsquare = create_power_function(2)\ncube = create_power_function(3)\n\nprint(square(5))\nprint(cube(5))',
  hint: 'Dynamic function creation should be used sparingly.'
},
{
  id: 'py_func_46',
  topicId: 'py_functions',
  question: 'Write a function that implements the strategy pattern using functions.',
  mathSolution: 'Pass different functions as strategies.',
  codeSolution: 'def bubble_sort(arr):\n    return sorted(arr)\n\ndef quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    less = [x for x in arr[1:] if x <= pivot]\n    greater = [x for x in arr[1:] if x > pivot]\n    return quick_sort(less) + [pivot] + quick_sort(greater)\n\ndef process_data(data, strategy):\n    return strategy(data)\n\nnumbers = [3, 1, 4, 1, 5]\nprint(process_data(numbers, bubble_sort))\nprint(process_data(numbers, quick_sort))',
  hint: 'Functions as first-class objects enable strategy pattern.'
},
{
  id: 'py_func_47',
  topicId: 'py_functions',
  question: 'Create a function that uses zip to combine multiple iterables.',
  mathSolution: 'zip combines iterables element-wise.',
  codeSolution: 'def combine_lists(names, ages, cities):\n    combined = []\n    for name, age, city in zip(names, ages, cities):\n        combined.append({"name": name, "age": age, "city": city})\n    return combined\n\nprint(combine_lists(["A"], [20], ["X"]))',
  hint: 'zip stops at shortest iterable; use zip_longest for all.'
},
{
  id: 'py_func_48',
  topicId: 'py_functions',
  question: 'Write a function that uses enumerate with custom start index.',
  mathSolution: 'enumerate adds counter to iterable.',
  codeSolution: 'def add_line_numbers(lines, start=1):\n    numbered = []\n    for i, line in enumerate(lines, start):\n        numbered.append(f"{i}: {line}")\n    return numbered\n\nprint(add_line_numbers(["a","b"], 5))',
  hint: 'enumerate(start=n) begins counting at n.'
},
{
  id: 'py_func_49',
  topicId: 'py_functions',
  question: 'Create a function that demonstrates function composition.',
  mathSolution: 'Combine multiple functions to create new functions.',
  codeSolution: 'def compose(*functions):\n    def composed(arg):\n        result = arg\n        for func in reversed(functions):\n            result = func(result)\n        return result\n    return composed\n\ndef add_one(x): return x + 1\ndef square(x): return x * x\ndef double(x): return x * 2\n\nprocess = compose(double, square, add_one)\nprint(process(3))',
  hint: 'Function composition chains operations together.'
},
{
  id: 'py_func_50',
  topicId: 'py_functions',
  question: 'Write a function that implements pipe operator style data processing.',
  mathSolution: 'Create Pipe class that allows method chaining for functions.',
  codeSolution: 'class Pipe:\n    def __init__(self, value):\n        self.value = value\n    def then(self, func, *args, **kwargs):\n        return Pipe(func(self.value, *args, **kwargs))\n    def get(self):\n        return self.value\n\nresult = (Pipe([1, 2, 3, 4, 5])\n    .then(lambda x: [i*2 for i in x])\n    .then(lambda x: [i for i in x if i > 5])\n    .then(sum)\n    .get())\n\nprint(result)',
  hint: 'Pipe pattern enables fluent interfaces for data processing.'
}
);