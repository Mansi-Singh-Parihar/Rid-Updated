QuizData.questions.push(
{
  id: 'py_gen_1',
  topicId: 'py_generators',
  question: 'Create a simple generator function that yields numbers from 1 to n.',
  mathSolution: 'Use yield keyword in a loop to generate values one at a time.',
  codeSolution: 'def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\n# Usage\nprint("Counting up to 5:")\nfor num in count_up_to(5):\n    print(num)  # Prints 1,2,3,4,5',
  hint: 'yield produces a value and pauses function execution.'
},
{
  id: 'py_gen_2',
  topicId: 'py_generators',
  question: 'Create a generator that yields even numbers up to a limit.',
  mathSolution: 'Use modulo operator to check even numbers and yield them.',
  codeSolution: 'def even_numbers(limit):\n    for i in range(0, limit+1, 2):\n        yield i\n\n# Usage\nevens = even_numbers(10)\nprint(list(evens))  # [0,2,4,6,8,10]',
  hint: 'range() with step 2 generates even numbers efficiently.'
},
{
  id: 'py_gen_3',
  topicId: 'py_generators',
  question: 'Write a generator that yields Fibonacci numbers indefinitely.',
  mathSolution: 'Use infinite loop with yield to generate Fibonacci sequence.',
  codeSolution: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Usage\nfib = fibonacci()\nprint("First 10 Fibonacci numbers:")\nfor _ in range(10):\n    print(next(fib))  # Prints first 10 Fibonacci numbers',
  hint: 'Use next() to get next value from infinite generator.'
},
{
  id: 'py_gen_4',
  topicId: 'py_generators',
  question: 'Create a generator that reads data line by line (simulated).',
  mathSolution: 'Yield each line to demonstrate lazy evaluation.',
  codeSolution: 'def read_simulated_lines(data):\n    for line in data.split("\\n"):\n        yield line.strip()\n\n# Usage\nsample_data = "Line 1\\nLine 2\\nLine 3\\nLine 4"\nprint("Reading lines:")\nfor line in read_simulated_lines(sample_data):\n    print(f"  Processing: {line}")',
  hint: 'Generators are perfect for processing large datasets lazily.'
},
{
  id: 'py_gen_5',
  topicId: 'py_generators',
  question: 'Use generator expression to create squares of numbers.',
  mathSolution: 'Generator expressions use () instead of [] and yield values lazily.',
  codeSolution: 'squares = (x**2 for x in range(10))\n\n# Usage\nprint("Squares of 0-9:")\nfor square in squares:\n    print(square)  # Prints 0,1,4,9,16,25,36,49,64,81',
  hint: 'Generator expressions are memory-efficient compared to list comprehensions.'
},
{
  id: 'py_gen_6',
  topicId: 'py_generators',
  question: 'Create a generator that yields prime numbers up to n.',
  mathSolution: 'Check each number for primality and yield if prime.',
  codeSolution: 'def primes(limit):\n    def is_prime(num):\n        if num < 2:\n            return False\n        for i in range(2, int(num**0.5) + 1):\n            if num % i == 0:\n                return False\n        return True\n    \n    for num in range(2, limit + 1):\n        if is_prime(num):\n            yield num\n\n# Usage\nprint("Prime numbers up to 20:")\nprint(list(primes(20)))  # [2,3,5,7,11,13,17,19]',
  hint: 'Only check divisors up to square root for efficiency.'
},
{
  id: 'py_gen_7',
  topicId: 'py_generators',
  question: 'Use asyncio.wait_for() to set a timeout on an operation.',
  mathSolution: 'wait_for() raises TimeoutError if coroutine takes too long',
  codeSolution: 'import asyncio\n\nasync def fetch_data(name, delay):\n    print(f\'Fetching {name}...\')\n    await asyncio.sleep(delay)\n    return f\'Data from {name}\'\n\nasync def main():\n    try:\n        result = await asyncio.wait_for(fetch_data(\'API\', 2), timeout=3)\n        print(f\'Success: {result}\')\n    except asyncio.TimeoutError:\n        print(\'Operation timed out\')\n    \n    try:\n        result = await asyncio.wait_for(fetch_data(\'Slow API\', 5), timeout=2)\n        print(f\'Success: {result}\')\n    except asyncio.TimeoutError:\n        print(\'Slow API timed out after 2 seconds\')\n\nasyncio.run(main())',
  hint: 'Use `asyncio.wait_for(coroutine, timeout)` for timeouts (Python 3.7+)'
},
{
  id: 'py_gen_8',
  topicId: 'py_generators',
  question: 'Create a generator that yields chunks of data from a list.',
  mathSolution: 'Split iterable into chunks of specified size.',
  codeSolution: 'def chunks(iterable, chunk_size):\n    for i in range(0, len(iterable), chunk_size):\n        yield iterable[i:i + chunk_size]\n\n# Usage\ndata = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(f"Data: {data}")\nprint("Chunks of size 3:")\nfor chunk in chunks(data, 3):\n    print(f"  {chunk}")',
  hint: 'Useful for batch processing large datasets.'
},
{
  id: 'py_gen_9',
  topicId: 'py_generators',
  question: 'Implement range() function using generator.',
  mathSolution: 'Create custom range generator with start, stop, step parameters.',
  codeSolution: 'def my_range(start, stop=None, step=1):\n    if stop is None:\n        start, stop = 0, start\n    if step > 0:\n        while start < stop:\n            yield start\n            start += step\n    else:\n        while start > stop:\n            yield start\n            start += step\n\n# Usage\nprint("my_range(5):")\nfor i in my_range(5):\n    print(i, end=" ")  # 0,1,2,3,4\n\nprint("\\n\\nmy_range(2, 10, 2):")\nfor i in my_range(2, 10, 2):\n    print(i, end=" ")  # 2,4,6,8\nprint()',
  hint: 'Handle different parameter combinations like built-in range.'
},
{
  id: 'py_gen_10',
  topicId: 'py_generators',
  question: 'Create a generator that yields random numbers within a range.',
  mathSolution: 'Use random module with infinite loop.',
  codeSolution: 'import random\n\ndef random_numbers(low, high, count=None):\n    if count is None:\n        while True:\n            yield random.randint(low, high)\n    else:\n        for _ in range(count):\n            yield random.randint(low, high)\n\n# Usage\nprint("First 5 random numbers (1-100):")\nrands = random_numbers(1, 100)\nfor _ in range(5):\n    print(next(rands))',
  hint: 'Generators can be finite or infinite based on logic.'
},
{
  id: 'py_gen_11',
  topicId: 'py_generators',
  question: 'Write a generator that yields permutations of a list.',
  mathSolution: 'Use recursion to generate all permutations.',
  codeSolution: 'def permutations(items):\n    if len(items) <= 1:\n        yield items\n    else:\n        for i in range(len(items)):\n            for perm in permutations(items[:i] + items[i+1:]):\n                yield [items[i]] + perm\n\n# Usage\nprint("Permutations of [1,2,3]:")\nfor perm in permutations([1,2,3]):\n    print(perm)',
  hint: 'Recursive generators can generate combinatorial sequences.'
},
{
  id: 'py_gen_12',
  topicId: 'py_generators',
  question: 'Create a generator that yields sliding windows of a sequence.',
  mathSolution: 'Yield consecutive windows of specified size.',
  codeSolution: 'def sliding_window(sequence, window_size):\n    for i in range(len(sequence) - window_size + 1):\n        yield sequence[i:i + window_size]\n\n# Usage\nnumbers = [10, 20, 30, 40, 50, 60]\nprint(f"Sequence: {numbers}")\nprint(f"Windows of size 3:")\nfor window in sliding_window(numbers, 3):\n    print(f"  {window}")',
  hint: 'Useful for time series analysis and moving averages.'
},
{
  id: 'py_gen_13',
  topicId: 'py_generators',
  question: 'Implement zip() function using generator.',
  mathSolution: 'Take multiple iterables and yield tuples of corresponding elements.',
  codeSolution: 'def my_zip(*iterables):\n    iterators = [iter(it) for it in iterables]\n    while True:\n        try:\n            yield tuple(next(it) for it in iterators)\n        except StopIteration:\n            break\n\n# Usage\nnames = ["Alice", "Bob", "Charlie"]\nages = [25, 30, 35]\nprint("Zipped names and ages:")\nfor name, age in my_zip(names, ages):\n    print(f"  {name} is {age} years old")',
  hint: 'Stop when shortest iterable is exhausted.'
},
{
  id: 'py_gen_14',
  topicId: 'py_generators',
  question: 'Create a generator that yields unique elements from a sequence.',
  mathSolution: 'Keep track of seen elements and yield new ones.',
  codeSolution: 'def unique_elements(iterable):\n    seen = set()\n    for item in iterable:\n        if item not in seen:\n            seen.add(item)\n            yield item\n\n# Usage\nitems = [1, 2, 2, 3, 3, 3, 4, 5, 5]\nprint(f"Original: {items}")\nprint(f"Unique: {list(unique_elements(items))}")',
  hint: 'Use set to track seen items efficiently.'
},
{
  id: 'py_gen_15',
  topicId: 'py_generators',
  question: 'Write a generator that yields flattened nested lists.',
  mathSolution: 'Recursively traverse nested structure and yield non-list items.',
  codeSolution: 'def flatten(nested_list):\n    for item in nested_list:\n        if isinstance(item, list):\n            yield from flatten(item)\n        else:\n            yield item\n\n# Usage\nnested = [1, [2, [3, 4]], 5, [6, 7]]\nprint(f"Nested: {nested}")\nprint(f"Flattened: {list(flatten(nested))}")',
  hint: 'yield from delegates to sub-generator recursively.'
},
{
  id: 'py_gen_16',
  topicId: 'py_generators',
  question: 'Create a generator that yields infinite powers of 2.',
  mathSolution: 'Use while loop with multiplication.',
  codeSolution: 'def powers_of_two():\n    n = 1\n    while True:\n        yield n\n        n *= 2\n\n# Usage\npowers = powers_of_two()\nprint("First 10 powers of 2:")\nfor _ in range(10):\n    print(next(powers), end=" ")',
  hint: 'Infinite generators need next() or break to stop.'
},
{
  id: 'py_gen_17',
  topicId: 'py_generators',
  question: 'Implement enumerate() using generator.',
  mathSolution: 'Yield index and value pairs from iterable.',
  codeSolution: 'def my_enumerate(iterable, start=0):\n    index = start\n    for item in iterable:\n        yield index, item\n        index += 1\n\n# Usage\nfruits = ["apple", "banana", "cherry"]\nprint("Enumerated fruits (starting at 1):")\nfor i, fruit in my_enumerate(fruits, 1):\n    print(f"  {i}: {fruit}")',
  hint: 'Start parameter allows custom starting index.'
},
{
  id: 'py_gen_18',
  topicId: 'py_generators',
  question: 'Write a generator that yields infinite powers of 2 (another example).',
  mathSolution: 'Use while loop with multiplication.',
  codeSolution: 'def powers_of_two_limit(limit):\n    n = 1\n    while n <= limit:\n        yield n\n        n *= 2\n\n# Usage\nprint("Powers of 2 up to 100:")\nfor power in powers_of_two_limit(100):\n    print(power, end=" ")',
  hint: 'Infinite generators need next() or break to stop.'
},
{
  id: 'py_gen_19',
  topicId: 'py_generators',
  question: 'Write a generator that yields batches of data from a large list.',
  mathSolution: 'Fetch records in batches to manage memory.',
  codeSolution: 'def batch_fetch(data, batch_size=3):\n    for i in range(0, len(data), batch_size):\n        yield data[i:i+batch_size]\n\n# Usage\nlarge_data = list(range(20))\nprint(f"Data: {large_data}")\nprint("Batches of size 5:")\nfor batch in batch_fetch(large_data, 5):\n    print(f"  {batch}")',
  hint: 'Batch processing prevents loading all data into memory at once.'
},
{
  id: 'py_gen_20',
  topicId: 'py_generators',
  question: 'Create a generator that yields items in reverse order.',
  mathSolution: 'Use list reversal or iteration from end.',
  codeSolution: 'def reverse_items(iterable):\n    for item in reversed(list(iterable)):\n        yield item\n\n# Usage\nitems = [10, 20, 30, 40, 50]\nprint(f"Original: {items}")\nprint("Reversed:")\nfor item in reverse_items(items):\n    print(f"  {item}")',
  hint: 'Convert to list first for reverse iteration.'
},
{
  id: 'py_gen_21',
  topicId: 'py_generators',
  question: 'Implement a generator that yields distinct permutations (without duplicates).',
  mathSolution: 'Skip duplicates when generating permutations.',
  codeSolution: 'def distinct_permutations(items):\n    items = sorted(items)\n    used = [False] * len(items)\n    \n    def generate(current):\n        if len(current) == len(items):\n            yield tuple(current)\n            return\n        last_used = None\n        for i in range(len(items)):\n            if not used[i] and items[i] != last_used:\n                used[i] = True\n                yield from generate(current + [items[i]])\n                used[i] = False\n                last_used = items[i]\n    \n    yield from generate([])\n\n# Usage\nprint("Distinct permutations of [1,1,2]:")\nprint(list(distinct_permutations([1,1,2])))',
  hint: 'Sort items and skip same values to avoid duplicates.'
},
{
  id: 'py_gen_22',
  topicId: 'py_generators',
  question: 'Create a generator that yields combinations of a given length.',
  mathSolution: 'Recursively generate all combinations.',
  codeSolution: 'def combinations(items, r):\n    if r == 0:\n        yield []\n    elif r == len(items):\n        yield items\n    elif r < len(items):\n        for combo in combinations(items[1:], r-1):\n            yield [items[0]] + combo\n        for combo in combinations(items[1:], r):\n            yield combo\n\n# Usage\nitems = [1, 2, 3, 4]\nprint(f"Combinations of {items} of length 2:")\nfor combo in combinations(items, 2):\n    print(combo)',
  hint: 'Combinations are order-independent selections.'
},
{
  id: 'py_gen_23',
  topicId: 'py_generators',
  question: 'Write a generator that yields Cartesian product of iterables.',
  mathSolution: 'Nested loops with recursion for multiple iterables.',
  codeSolution: 'def product(*iterables, repeat=1):\n    if repeat > 1:\n        iterables = iterables * repeat\n    \n    pools = [tuple(pool) for pool in iterables]\n    result = [[]]\n    for pool in pools:\n        result = [x+[y] for x in result for y in pool]\n    for prod in result:\n        yield tuple(prod)\n\n# Usage\nprint("Cartesian product of [1,2] and ["a","b"]:")\nfor p in product([1,2], ["a","b"]):\n    print(p)',
  hint: 'Cartesian product is all possible ordered pairs/tuples.'
},
{
  id: 'py_gen_24',
  topicId: 'py_generators',
  question: 'Create a generator that yields infinite repeating cycle of elements.',
  mathSolution: 'Repeat elements indefinitely using modulo indexing.',
  codeSolution: 'def cycle(iterable):\n    saved = []\n    for element in iterable:\n        yield element\n        saved.append(element)\n    while saved:\n        for element in saved:\n            yield element\n\n# Usage\ncolors = cycle(["red", "green", "blue"])\nprint("First 5 colors in cycle:")\nfor _ in range(5):\n    print(next(colors))',
  hint: 'Save elements first time to repeat them later.'
},
{
  id: 'py_gen_25',
  topicId: 'py_generators',
  question: 'Implement accumulate() generator that yields running totals.',
  mathSolution: 'Keep running sum and yield after each addition.',
  codeSolution: 'def accumulate(iterable):\n    total = 0\n    for item in iterable:\n        total += item\n        yield total\n\n# Usage\nnumbers = [1, 2, 3, 4, 5]\nprint(f"Original: {numbers}")\nprint(f"Running totals: {list(accumulate(numbers))}")',
  hint: 'Useful for prefix sums and running statistics.'
},
{
  id: 'py_gen_26',
  topicId: 'py_generators',
  question: 'Create a generator that yields pairwise elements (a,b), (b,c), (c,d).',
  mathSolution: 'Use two pointers: previous and current.',
  codeSolution: 'def pairwise(iterable):\n    iterator = iter(iterable)\n    try:\n        prev = next(iterator)\n    except StopIteration:\n        return\n    for curr in iterator:\n        yield (prev, curr)\n        prev = curr\n\n# Usage\nprint("Pairwise of [1,2,3,4,5]:")\nprint(list(pairwise([1,2,3,4,5])))',
  hint: 'Useful for calculating differences between consecutive elements.'
},
{
  id: 'py_gen_27',
  topicId: 'py_generators',
  question: 'Write a generator that yields only items at even indices.',
  mathSolution: 'Use enumerate to track index and yield when index is even.',
  codeSolution: 'def even_indexed(iterable):\n    for i, item in enumerate(iterable):\n        if i % 2 == 0:\n            yield item\n\n# Usage\nitems = [10, 20, 30, 40, 50, 60, 70]\nprint(f"Original: {items}")\nprint(f"Even-indexed items: {list(even_indexed(items))}")',
  hint: 'First element is index 0 (even).'
},
{
  id: 'py_gen_28',
  topicId: 'py_generators',
  question: 'Create a generator that yields items with their indices reversed.',
  mathSolution: 'Start from end and move backwards.',
  codeSolution: 'def enumerate_reversed(iterable):\n    items = list(iterable)\n    for i in range(len(items)-1, -1, -1):\n        yield i, items[i]\n\n# Usage\nprint("Reversed indices of [\'a\',\'b\',\'c\']:")\nfor i, val in enumerate_reversed(["a","b","c"]):\n    print(f"  {i}:{val}")',
  hint: 'Convert to list to access by index from end.'
},
{
  id: 'py_gen_29',
  topicId: 'py_generators',
  question: 'Implement a generator that yields Fibonacci numbers with memoization.',
  mathSolution: 'Cache computed values for efficiency.',
  codeSolution: 'def fibonacci_memo():\n    cache = {0: 0, 1: 1}\n    def fib(n):\n        if n not in cache:\n            cache[n] = fib(n-1) + fib(n-2)\n        return cache[n]\n    n = 0\n    while True:\n        yield fib(n)\n        n += 1\n\n# Usage\nfib = fibonacci_memo()\nprint("First 10 Fibonacci numbers:")\nfor _ in range(10):\n    print(next(fib), end=" ")\nprint()',
  hint: 'Memoization prevents redundant calculations.'
},
{
  id: 'py_gen_30',
  topicId: 'py_generators',
  question: 'Create a generator that yields the Collatz sequence for a starting number.',
  mathSolution: 'Apply Collatz rules: if even n/2, if odd 3n+1 until 1.',
  codeSolution: 'def collatz(n):\n    yield n\n    while n != 1:\n        if n % 2 == 0:\n            n = n // 2\n        else:\n            n = 3 * n + 1\n        yield n\n\n# Usage\nprint("Collatz sequence starting at 13:")\nprint(list(collatz(13)))',
  hint: 'Collatz conjecture: sequence always reaches 1.'
},
{
  id: 'py_gen_31',
  topicId: 'py_generators',
  question: 'Write a generator that yields prime factors of a number.',
  mathSolution: 'Divide by smallest primes repeatedly.',
  codeSolution: 'def prime_factors(n):\n    # Factor out 2s\n    while n % 2 == 0:\n        yield 2\n        n = n // 2\n    \n    # Factor out odd primes\n    i = 3\n    while i * i <= n:\n        while n % i == 0:\n            yield i\n            n = n // i\n        i += 2\n    \n    if n > 1:\n        yield n\n\n# Usage\nprint("Prime factors of 84:")\nprint(list(prime_factors(84)))',
  hint: 'Factor out all 2s first, then odd numbers.'
},
{
  id: 'py_gen_32',
  topicId: 'py_generators',
  question: 'Create a generator that yields dates in a range (date generator).',
  mathSolution: 'Use datetime module and yield dates incrementally.',
  codeSolution: 'from datetime import datetime, timedelta\n\ndef date_range(start_date, end_date):\n    current = start_date\n    while current <= end_date:\n        yield current\n        current += timedelta(days=1)\n\n# Usage\nstart = datetime(2024, 1, 1)\nend = datetime(2024, 1, 5)\nprint("Dates from Jan 1 to Jan 5 2024:")\nfor date in date_range(start, end):\n    print(date.strftime("%Y-%m-%d"))',
  hint: 'timedelta(days=1) increments by one day.'
},
{
  id: 'py_gen_33',
  topicId: 'py_generators',
  question: 'Implement a generator that yields paginated results from a large dataset.',
  mathSolution: 'Fetch next page when current page is exhausted.',
  codeSolution: 'def paginate(data, page_size=3):\n    for i in range(0, len(data), page_size):\n        yield data[i:i+page_size]\n\n# Usage\ndataset = [f"Item {i}" for i in range(1, 11)]\nprint(f"Total items: {len(dataset)}")\nprint("Pages:")\nfor page_num, page in enumerate(paginate(dataset, 3), 1):\n    print(f"  Page {page_num}: {page}")',
  hint: 'Continue fetching until empty page is returned.'
},
{
  id: 'py_gen_34',
  topicId: 'py_generators',
  question: 'Create a generator that yields rolling averages of a sequence.',
  mathSolution: 'Maintain window and compute average for each position.',
  codeSolution: 'def rolling_average(iterable, window_size):\n    window = []\n    for value in iterable:\n        window.append(value)\n        if len(window) > window_size:\n            window.pop(0)\n        if len(window) == window_size:\n            yield sum(window) / window_size\n\n# Usage\nprices = [10, 12, 11, 13, 14, 12, 15]\nprint(f"Prices: {prices}")\nprint("3-day rolling averages:")\nfor avg in rolling_average(prices, 3):\n    print(f"  {avg:.2f}")',
  hint: 'Rolling average smooths out short-term fluctuations.'
},
{
  id: 'py_gen_35',
  topicId: 'py_generators',
  question: 'Write a generator that yields all substrings of a string.',
  mathSolution: 'Generate all possible start and end positions.',
  codeSolution: 'def substrings(s):\n    length = len(s)\n    for i in range(length):\n        for j in range(i + 1, length + 1):\n            yield s[i:j]\n\n# Usage\nprint("All substrings of \'abc\':")\nprint(list(substrings("abc")))',
  hint: 'Time complexity O(n²) for generating all substrings.'
},
{
  id: 'py_gen_36',
  topicId: 'py_generators',
  question: 'Create a generator that yields lines matching a pattern from data.',
  mathSolution: 'Use regex pattern to filter lines.',
  codeSolution: 'import re\n\ndef grep_regex(pattern, data):\n    regex = re.compile(pattern)\n    for line in data.split("\\n"):\n        if regex.search(line):\n            yield line.strip()\n\n# Usage\nsample_data = "John: 123-45-6789\\nJane: 987-65-4321\\nBob: 123456789\\nAlice: 111-22-3333"\nprint("Sample data:")\nprint(sample_data)\nprint("\\nLines containing SSN pattern (XXX-XX-XXXX):")\nfor line in grep_regex(r"\\d{3}-\\d{2}-\\d{4}", sample_data):\n    print(f"  {line}")',
  hint: 'regex.search() finds pattern anywhere in line.'
},
{
  id: 'py_gen_37',
  topicId: 'py_generators',
  question: 'Implement a generator that yields only items satisfying a predicate.',
  mathSolution: 'Filter items using predicate function.',
  codeSolution: 'def filter_generator(predicate, iterable):\n    for item in iterable:\n        if predicate(item):\n            yield item\n\n# Usage\nnumbers = [1, 2, 3, 4, 5, 6]\nprint(f"Original: {numbers}")\nprint(f"Odd numbers: {list(filter_generator(lambda x: x % 2 == 1, numbers))}")',
  hint: 'This is similar to built-in filter() function.'
},
{
  id: 'py_gen_38',
  topicId: 'py_generators',
  question: 'Create a generator that yields transformed items (map functionality).',
  mathSolution: 'Apply transformation function to each item.',
  codeSolution: 'def map_generator(transform, iterable):\n    for item in iterable:\n        yield transform(item)\n\n# Usage\nnumbers = [1, 2, 3, 4]\nprint(f"Original: {numbers}")\nprint(f"Squares: {list(map_generator(lambda x: x**2, numbers))}")',
  hint: 'This is similar to built-in map() function.'
},
{
  id: 'py_gen_39',
  topicId: 'py_generators',
  question: 'Write a generator that yields first n elements from an iterable (take functionality).',
  mathSolution: 'Yield items until count reaches n.',
  codeSolution: 'def take(n, iterable):\n    iterator = iter(iterable)\n    for _ in range(n):\n        try:\n            yield next(iterator)\n        except StopIteration:\n            break\n\n# Usage\ninfinite = (x for x in range(1000000))\nfirst_5 = list(take(5, infinite))\nprint(f"First 5 numbers from infinite generator: {first_5}")',
  hint: 'Useful for limiting infinite generators.'
},
{
  id: 'py_gen_40',
  topicId: 'py_generators',
  question: 'Create a generator that yields items while condition is true (takewhile).',
  mathSolution: 'Stop yielding when predicate becomes false.',
  codeSolution: 'def take_while(predicate, iterable):\n    for item in iterable:\n        if not predicate(item):\n            break\n        yield item\n\n# Usage\nnumbers = [2, 4, 6, 7, 8, 10]\nprint(f"Original: {numbers}")\nprint(f"Take while even: {list(take_while(lambda x: x % 2 == 0, numbers))}")',
  hint: 'Stops at first item that fails predicate.'
},
{
  id: 'py_gen_41',
  topicId: 'py_generators',
  question: 'Implement a generator that drops items while condition is true (dropwhile).',
  mathSolution: 'Skip items while predicate true, then yield all remaining.',
  codeSolution: 'def drop_while(predicate, iterable):\n    iterator = iter(iterable)\n    for item in iterator:\n        if not predicate(item):\n            yield item\n            break\n    for item in iterator:\n        yield item\n\n# Usage\nnumbers = [2, 4, 6, 7, 8, 10]\nprint(f"Original: {numbers}")\nprint(f"Drop while even: {list(drop_while(lambda x: x % 2 == 0, numbers))}")',
  hint: 'Skip initial matching items, yield everything after.'
},
{
  id: 'py_gen_42',
  topicId: 'py_generators',
  question: 'Create a generator that yields permutations with repetition.',
  mathSolution: 'Allow elements to be reused in permutations.',
  codeSolution: 'def permutations_with_repetition(items, r):\n    if r == 0:\n        yield []\n    else:\n        for item in items:\n            for perm in permutations_with_repetition(items, r-1):\n                yield [item] + perm\n\n# Usage\nitems = [1, 2]\nprint(f"Permutations with repetition of {items} of length 2:")\nfor perm in permutations_with_repetition(items, 2):\n    print(perm)',
  hint: 'Each position can be any element, regardless of previous picks.'
},
{
  id: 'py_gen_43',
  topicId: 'py_generators',
  question: 'Write a generator that yields combinations with replacement.',
  mathSolution: 'Allow elements to be reused but maintain non-decreasing order.',
  codeSolution: 'def combinations_with_replacement(items, r):\n    if r == 0:\n        yield []\n    else:\n        for i, item in enumerate(items):\n            for combo in combinations_with_replacement(items[i:], r-1):\n                yield [item] + combo\n\n# Usage\nitems = [1, 2, 3]\nprint(f"Combinations with replacement of {items} of length 2:")\nfor combo in combinations_with_replacement(items, 2):\n    print(combo)',
  hint: 'Combinations with replacement allow repeated elements.'
},
{
  id: 'py_gen_44',
  topicId: 'py_generators',
  question: 'Create a generator that yields all possible binary strings of length n.',
  mathSolution: 'Recursively generate 0 and 1 for each position.',
  codeSolution: 'def binary_strings(n):\n    if n == 0:\n        yield ""\n    else:\n        for s in binary_strings(n-1):\n            yield "0" + s\n            yield "1" + s\n\n# Usage\nprint("All binary strings of length 3:")\nprint(list(binary_strings(3)))',
  hint: 'Total 2ⁿ strings will be generated.'
},
{
  id: 'py_gen_45',
  topicId: 'py_generators',
  question: 'Implement a generator that yields all subsets (power set).',
  mathSolution: 'For each element, either include or exclude it.',
  codeSolution: 'def power_set(items):\n    if not items:\n        yield []\n    else:\n        first = items[0]\n        rest = items[1:]\n        for subset in power_set(rest):\n            yield subset\n            yield [first] + subset\n\n# Usage\nitems = [1, 2, 3]\nprint(f"Power set of {items}:")\nfor subset in power_set(items):\n    print(subset)',
  hint: 'Power set has 2ⁿ elements including empty set.'
},
{
  id: 'py_gen_46',
  topicId: 'py_generators',
  question: 'Create a generator that yields partitions of an integer.',
  mathSolution: 'Generate all ways to write n as sum of positive integers.',
  codeSolution: 'def integer_partitions(n, max_part=None):\n    if max_part is None:\n        max_part = n\n    if n == 0:\n        yield []\n    for i in range(min(max_part, n), 0, -1):\n        for p in integer_partitions(n - i, i):\n            yield [i] + p\n\n# Usage\nprint("Integer partitions of 4:")\nfor partition in integer_partitions(4):\n    print(partition)',
  hint: 'Order doesn\'t matter, so generate non-increasing sequences.'
},
{
  id: 'py_gen_47',
  topicId: 'py_generators',
  question: 'Write a generator that yields all permutations of parentheses (balanced).',
  mathSolution: 'Track open/close counts and generate valid combinations.',
  codeSolution: 'def balanced_parentheses(n):\n    def generate(s, open_count, close_count):\n        if len(s) == 2 * n:\n            yield s\n        else:\n            if open_count < n:\n                yield from generate(s + "(", open_count + 1, close_count)\n            if close_count < open_count:\n                yield from generate(s + ")", open_count, close_count + 1)\n    \n    yield from generate("", 0, 0)\n\n# Usage\nprint("All balanced parentheses for n=3:")\nprint(list(balanced_parentheses(3)))',
  hint: 'Close count never exceeds open count during generation.'
},
{
  id: 'py_gen_48',
  topicId: 'py_generators',
  question: 'Create a generator that yields all paths in a grid (from top-left to bottom-right).',
  mathSolution: 'Recursively move right or down until reaching target.',
  codeSolution: 'def grid_paths(rows, cols, path=None):\n    if path is None:\n        path = [(0,0)]\n    r, c = path[-1]\n    if r == rows-1 and c == cols-1:\n        yield path[:]\n    else:\n        if r + 1 < rows:\n            path.append((r+1, c))\n            yield from grid_paths(rows, cols, path)\n            path.pop()\n        if c + 1 < cols:\n            path.append((r, c+1))\n            yield from grid_paths(rows, cols, path)\n            path.pop()\n\n# Usage\nprint("All paths in 2x2 grid:")\nfor path in grid_paths(2, 2):\n    print(path)',
  hint: 'Only moves right and down are allowed.'
},
{
  id: 'py_gen_49',
  topicId: 'py_generators',
  question: 'Implement a generator that yields all anagrams of a word.',
  mathSolution: 'Generate all permutations of characters and filter duplicates.',
  codeSolution: 'def anagrams(word):\n    if len(word) <= 1:\n        yield word\n    else:\n        seen = set()\n        for i, char in enumerate(word):\n            if char in seen:\n                continue\n            seen.add(char)\n            remaining = word[:i] + word[i+1:]\n            for perm in anagrams(remaining):\n                yield char + perm\n\n# Usage\nprint("Anagrams of \'abc\':")\nprint(list(anagrams("abc")))\nprint("\\nAnagrams of \'aab\' (no duplicates):")\nprint(list(anagrams("aab")))',
  hint: 'Skip duplicate characters at same position to avoid duplicates.'
},
{
  id: 'py_gen_50',
  topicId: 'py_generators',
  question: 'Create a generator that yields all combinations that sum to target (like coin change).',
  mathSolution: 'Generate combinations that sum exactly to target, using numbers unlimited times.',
  codeSolution: 'def combinations_sum(numbers, target):\n    numbers = sorted(numbers)\n    \n    def generate(start, current_sum, path):\n        if current_sum == target:\n            yield path[:]\n            return\n        if current_sum > target:\n            return\n        for i in range(start, len(numbers)):\n            path.append(numbers[i])\n            yield from generate(i, current_sum + numbers[i], path)\n            path.pop()\n    \n    yield from generate(0, 0, [])\n\n# Usage\ncoins = [2, 3, 5]\ntarget = 8\nprint(f"Ways to make {target} using coins {coins}:")\nfor combo in combinations_sum(coins, target):\n    print(combo)',
  hint: 'Start index prevents permutations of same combination.'
}
);