QuizData.questions.push(
{
  id: 'py_lambda_1',
  topicId: 'py_lambda',
  question: 'Create a lambda function that adds 10 to a given number.',
  mathSolution: 'Lambda functions are anonymous single-expression functions.',
  codeSolution: 'add_10 = lambda x: x + 10\nprint(add_10(5))  # Output: 15',
  hint: 'Lambda syntax: lambda arguments: expression'
},
{
  id: 'py_lambda_2',
  topicId: 'py_lambda',
  question: 'Write a lambda function that multiplies two numbers.',
  mathSolution: 'Lambda can take multiple arguments separated by commas.',
  codeSolution: 'multiply = lambda a, b: a * b\nprint(multiply(4, 5))  # Output: 20',
  hint: 'Multiple arguments work like in regular functions.'
},
{
  id: 'py_lambda_3',
  topicId: 'py_lambda',
  question: 'Create a lambda function to check if a number is even.',
  mathSolution: 'Use modulo operator to check divisibility by 2.',
  codeSolution: 'is_even = lambda x: x % 2 == 0\nprint(is_even(6))  # Output: True\nprint(is_even(7))  # Output: False',
  hint: 'Returns boolean True/False.'
},
{
  id: 'py_lambda_4',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to square all numbers in a list.',
  mathSolution: 'map() applies lambda to each element of the list.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # Output: [1, 4, 9, 16, 25]',
  hint: 'map() returns iterator, convert to list to see results.'
},
{
  id: 'py_lambda_5',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to get only odd numbers from a list.',
  mathSolution: 'filter() keeps elements where lambda returns True.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nodds = list(filter(lambda x: x % 2 == 1, numbers))\nprint(odds)  # Output: [1, 3, 5, 7]',
  hint: 'filter() selects elements that satisfy condition.'
},
{
  id: 'py_lambda_6',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort a list of tuples by second element.',
  mathSolution: 'key parameter specifies function to extract comparison key.',
  codeSolution: 'pairs = [(1, "apple"), (3, "banana"), (2, "cherry")]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])\nprint(sorted_pairs)  # Sorted alphabetically by fruit name',
  hint: 'lambda x: x[1] extracts second element of each tuple.'
},
{
  id: 'py_lambda_7',
  topicId: 'py_lambda',
  question: 'Create a lambda function that returns the length of a string.',
  mathSolution: 'Use len() function inside lambda.',
  codeSolution: 'string_length = lambda s: len(s)\nprint(string_length("hello"))  # Output: 5',
  hint: 'Lambda can call other functions.'
},
{
  id: 'py_lambda_8',
  topicId: 'py_lambda',
  question: 'Use lambda with max() to find the longest word in a list.',
  mathSolution: 'key parameter tells max() what to base comparison on.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nlongest = max(words, key=lambda x: len(x))\nprint(longest)  # Output: banana',
  hint: 'key=lambda x: len(x) compares by length.'
},
{
  id: 'py_lambda_9',
  topicId: 'py_lambda',
  question: 'Create a lambda function that converts Celsius to Fahrenheit.',
  mathSolution: 'Formula: F = C * 9/5 + 32',
  codeSolution: 'c_to_f = lambda c: (c * 9/5) + 32\nprint(c_to_f(0))   # Output: 32.0\nprint(c_to_f(100)) # Output: 212.0',
  hint: 'Use floating point for accurate conversion.'
},
{
  id: 'py_lambda_10',
  topicId: 'py_lambda',
  question: 'Use lambda with reduce() to find the product of all numbers in a list.',
  mathSolution: 'reduce() cumulatively applies lambda to pairs of elements.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce() is in functools module.'
},
{
  id: 'py_lambda_11',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the first character of a string.',
  mathSolution: 'Index into string using [0].',
  codeSolution: 'first_char = lambda s: s[0] if s else None\nprint(first_char("hello"))  # Output: h\nprint(first_char(""))       # Output: None',
  hint: 'Handle empty strings to avoid IndexError.'
},
{
  id: 'py_lambda_12',
  topicId: 'py_lambda',
  question: 'Use lambda with list comprehension to create a list of lambda functions.',
  mathSolution: 'Each lambda captures different value from loop.',
  codeSolution: 'multipliers = [lambda x, i=i: x * i for i in range(1, 4)]\nprint(multipliers[0](5))  # Output: 5\nprint(multipliers[1](5))  # Output: 10\nprint(multipliers[2](5))  # Output: 15',
  hint: 'Use default argument i=i to capture current value.'
},
{
  id: 'py_lambda_13',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the absolute value of a number.',
  mathSolution: 'Use conditional expression to handle negative numbers.',
  codeSolution: 'abs_value = lambda x: x if x >= 0 else -x\nprint(abs_value(-5))  # Output: 5\nprint(abs_value(3))   # Output: 3',
  hint: 'Ternary operator: value_if_true if condition else value_if_false'
},
{
  id: 'py_lambda_14',
  topicId: 'py_lambda',
  question: 'Use lambda with any() to check if any number in list is even.',
  mathSolution: 'any() returns True if any element satisfies condition.',
  codeSolution: 'numbers = [1, 3, 5, 6, 7]\nhas_even = any(map(lambda x: x % 2 == 0, numbers))\nprint(has_even)  # Output: True',
  hint: 'Combine map() with any() for efficient checking.'
},
{
  id: 'py_lambda_15',
  topicId: 'py_lambda',
  question: 'Use lambda with all() to check if all numbers in list are positive.',
  mathSolution: 'all() returns True only if all elements satisfy condition.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\nall_positive = all(map(lambda x: x > 0, numbers))\nprint(all_positive)  # Output: True',
  hint: 'all() is equivalent to AND operation on all elements.'
},
{
  id: 'py_lambda_16',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the reverse of a string.',
  mathSolution: 'Use slicing [::-1] to reverse string.',
  codeSolution: 'reverse_str = lambda s: s[::-1]\nprint(reverse_str("hello"))  # Output: olleh',
  hint: 'Slicing works on strings too.'
},
{
  id: 'py_lambda_17',
  topicId: 'py_lambda',
  question: 'Use lambda with min() to find the smallest number by absolute value.',
  mathSolution: 'key parameter can use abs() function.',
  codeSolution: 'numbers = [-5, 3, -2, 7, -1]\nsmallest_abs = min(numbers, key=lambda x: abs(x))\nprint(smallest_abs)  # Output: -1',
  hint: 'abs() returns absolute value.'
},
{
  id: 'py_lambda_18',
  topicId: 'py_lambda',
  question: 'Create a lambda that checks if a string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'is_palindrome = lambda s: s == s[::-1]\nprint(is_palindrome("radar"))  # Output: True\nprint(is_palindrome("hello"))  # Output: False',
  hint: 'Case-sensitive comparison; convert to lowercase if needed.'
},
{
  id: 'py_lambda_19',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort dictionary items by value.',
  mathSolution: 'items() returns key-value pairs, sort by value.',
  codeSolution: 'scores = {"Alice": 85, "Bob": 92, "Charlie": 78}\nsorted_by_score = sorted(scores.items(), key=lambda x: x[1])\nprint(sorted_by_score)  # [("Charlie",78), ("Alice",85), ("Bob",92)]',
  hint: 'x[0] is key, x[1] is value.'
},
{
  id: 'py_lambda_20',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the factorial of a number using recursion (not recommended).',
  mathSolution: 'Lambda can call itself recursively, but avoid for clarity.',
  codeSolution: 'factorial = lambda n: 1 if n <= 1 else n * factorial(n-1)\nprint(factorial(5))  # Output: 120',
  hint: 'Recursive lambdas need a name to refer to themselves.'
},
{
  id: 'py_lambda_21',
  topicId: 'py_lambda',
  question: 'Use lambda with list.sort() to sort strings by their last character.',
  mathSolution: 'key extracts last character for comparison.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nwords.sort(key=lambda x: x[-1])\nprint(words)  # Sorted by last character: banana, apple, date, cherry',
  hint: 'x[-1] gets last character of string.'
},
{
  id: 'py_lambda_22',
  topicId: 'py_lambda',
  question: 'Create a lambda that converts a string to uppercase.',
  mathSolution: 'Use upper() string method.',
  codeSolution: 'to_upper = lambda s: s.upper()\nprint(to_upper("hello"))  # Output: HELLO',
  hint: 'String methods work inside lambda.'
},
{
  id: 'py_lambda_23',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to remove empty strings from a list.',
  mathSolution: 'Empty string evaluates to False in boolean context.',
  codeSolution: 'strings = ["hello", "", "world", "", "python"]\nnon_empty = list(filter(lambda x: x, strings))\nprint(non_empty)  # Output: ["hello", "world", "python"]',
  hint: 'Empty string is falsy, non-empty strings are truthy.'
},
{
  id: 'py_lambda_24',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the sum of digits of a number.',
  mathSolution: 'Convert to string, sum digits, convert back.',
  codeSolution: 'sum_digits = lambda n: sum(int(d) for d in str(n))\nprint(sum_digits(123))  # Output: 6\nprint(sum_digits(456))  # Output: 15',
  hint: 'Use generator expression inside sum().'
},
{
  id: 'py_lambda_25',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to add corresponding elements of two lists.',
  mathSolution: 'zip() combines lists, map applies lambda to pairs.',
  codeSolution: 'list1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nsums = list(map(lambda x, y: x + y, list1, list2))\nprint(sums)  # Output: [5, 7, 9]',
  hint: 'map() can take multiple iterables.'
},
{
  id: 'py_lambda_26',
  topicId: 'py_lambda',
  question: 'Create a lambda that checks if a number is prime (simple version).',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'is_prime = lambda n: n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\nprint(is_prime(7))   # Output: True\nprint(is_prime(10))  # Output: False',
  hint: 'all() with generator stops early when condition fails.'
},
{
  id: 'py_lambda_27',
  topicId: 'py_lambda',
  question: 'Use lambda with max() to find the most frequent element in a list.',
  mathSolution: 'Use count() method as key function.',
  codeSolution: 'numbers = [1, 2, 3, 2, 2, 4, 5, 2]\nmost_frequent = max(set(numbers), key=lambda x: numbers.count(x))\nprint(most_frequent)  # Output: 2',
  hint: 'set() removes duplicates for unique candidates.'
},
{
  id: 'py_lambda_28',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the type of a variable as string.',
  mathSolution: 'Use type() and __name__ to get type name.',
  codeSolution: 'get_type = lambda x: type(x).__name__\nprint(get_type(5))        # Output: int\nprint(get_type("hello"))  # Output: str\nprint(get_type([1,2]))    # Output: list',
  hint: '__name__ gives class name as string.'
},
{
  id: 'py_lambda_29',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort strings by number of vowels.',
  mathSolution: 'Count vowels in each string for sorting key.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nvowel_count = lambda s: sum(1 for c in s.lower() if c in "aeiou")\nsorted_words = sorted(words, key=vowel_count)\nprint(sorted_words)  # Sorted by vowel count',
  hint: 'Count vowels using generator expression.'
},
{
  id: 'py_lambda_30',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns True if a number is a perfect square.',
  mathSolution: 'Check if square root is integer.',
  codeSolution: 'is_perfect_square = lambda n: int(n**0.5)**2 == n\nprint(is_perfect_square(16))  # Output: True\nprint(is_perfect_square(20))  # Output: False',
  hint: 'Compare square of integer square root with original.'
},
{
  id: 'py_lambda_31',
  topicId: 'py_lambda',
  question: 'Use lambda with reduce() to find the maximum element in a list.',
  mathSolution: 'reduce() can compare pairs and keep larger.',
  codeSolution: 'from functools import reduce\nnumbers = [3, 7, 2, 9, 1, 5]\nmaximum = reduce(lambda x, y: x if x > y else y, numbers)\nprint(maximum)  # Output: 9',
  hint: 'lambda returns the larger of two values.'
},
{
  id: 'py_lambda_32',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the n-th power of a number (currying style).',
  mathSolution: 'Return a lambda that captures the exponent.',
  codeSolution: 'power = lambda exp: lambda base: base ** exp\nsquare = power(2)\ncube = power(3)\nprint(square(5))  # Output: 25\nprint(cube(5))    # Output: 125',
  hint: 'This demonstrates closure in lambda.'
},
{
  id: 'py_lambda_33',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to convert list of strings to integers.',
  mathSolution: 'int() function converts string to integer.',
  codeSolution: 'str_nums = ["1", "2", "3", "4", "5"]\nint_nums = list(map(lambda x: int(x), str_nums))\nprint(int_nums)  # Output: [1, 2, 3, 4, 5]',
  hint: 'map(int, str_nums) works too, but lambda shows concept.'
},
{
  id: 'py_lambda_34',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the gcd of two numbers using Euclidean algorithm.',
  mathSolution: 'Recursive lambda for GCD calculation.',
  codeSolution: 'gcd = lambda a, b: a if b == 0 else gcd(b, a % b)\nprint(gcd(48, 18))  # Output: 6',
  hint: 'Euclidean algorithm: gcd(a,b) = gcd(b, a%b) until b=0.'
},
{
  id: 'py_lambda_35',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to get numbers within a specific range.',
  mathSolution: 'Combine conditions with and operator.',
  codeSolution: 'numbers = [5, 12, 8, 15, 3, 20, 7]\nin_range = list(filter(lambda x: 10 <= x <= 20, numbers))\nprint(in_range)  # Output: [12, 15, 20]',
  hint: 'Python allows chained comparisons like 10 <= x <= 20.'
},
{
  id: 'py_lambda_36',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the factorial of a number using math.prod.',
  mathSolution: 'Use math.prod with range for efficient factorial.',
  codeSolution: 'import math\nfactorial = lambda n: math.prod(range(1, n+1))\nprint(factorial(5))  # Output: 120',
  hint: 'math.prod multiplies all elements in iterable.'
},
{
  id: 'py_lambda_37',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort complex numbers by their magnitude.',
  mathSolution: 'Magnitude = sqrt(x² + y²) for complex numbers.',
  codeSolution: 'complex_nums = [3+4j, 1+2j, 5j, 2-2j]\nsorted_by_mag = sorted(complex_nums, key=lambda x: abs(x))\nprint(sorted_by_mag)  # Sorted by distance from origin',
  hint: 'abs() on complex returns magnitude.'
},
{
  id: 'py_lambda_38',
  topicId: 'py_lambda',
  question: 'Create a lambda that checks if a string contains only alphabets.',
  mathSolution: 'Use isalpha() string method.',
  codeSolution: 'is_alpha = lambda s: s.isalpha()\nprint(is_alpha("hello"))   # Output: True\nprint(is_alpha("hello123")) # Output: False',
  hint: 'isalpha() returns True if all characters are alphabetic.'
},
{
  id: 'py_lambda_39',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to capitalize first letter of each word in a list.',
  mathSolution: 'Use string methods to capitalize.',
  codeSolution: 'words = ["hello", "world", "python"]\ncapitalized = list(map(lambda x: x.capitalize(), words))\nprint(capitalized)  # Output: ["Hello", "World", "Python"]',
  hint: 'capitalize() makes first letter uppercase, rest lowercase.'
},
{
  id: 'py_lambda_40',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the product of a list of numbers using reduce.',
  mathSolution: 'Use reduce with multiplication lambda.',
  codeSolution: 'from functools import reduce\nnumbers = [2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce() is perfect for cumulative operations.'
},
{
  id: 'py_lambda_41',
  topicId: 'py_lambda',
  question: 'Use lambda with any() to check if any string starts with a vowel.',
  mathSolution: 'Check first character of each string.',
  codeSolution: 'words = ["apple", "banana", "cherry"]\nvowel_start = any(map(lambda x: x[0].lower() in "aeiou", words))\nprint(vowel_start)  # Output: True (apple starts with a)',
  hint: 'x[0] gets first character, handle lowercase.'
},
{
  id: 'py_lambda_42',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the n-th Fibonacci number.',
  mathSolution: 'Use recursion for Fibonacci sequence.',
  codeSolution: 'fib = lambda n: n if n <= 1 else fib(n-1) + fib(n-2)\nprint(fib(7))  # Output: 13',
  hint: 'Inefficient for large n; for demonstration only.'
},
{
  id: 'py_lambda_43',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to remove None values from a list.',
  mathSolution: 'None is falsy, so filter by truthiness.',
  codeSolution: 'values = [1, None, 2, None, 3, 4, None]\nclean = list(filter(lambda x: x is not None, values))\nprint(clean)  # Output: [1, 2, 3, 4]',
  hint: 'Use "is not None" to specifically check for None.'
},
{
  id: 'py_lambda_44',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the sum of squares of numbers in a list.',
  mathSolution: 'Use sum with generator expression.',
  codeSolution: 'sum_squares = lambda lst: sum(x**2 for x in lst)\nprint(sum_squares([1, 2, 3, 4]))  # Output: 30 (1+4+9+16)',
  hint: 'Generator expression avoids creating intermediate list.'
},
{
  id: 'py_lambda_45',
  topicId: 'py_lambda',
  question: 'Use lambda with max() to find the element with maximum absolute value.',
  mathSolution: 'key function returns absolute value for comparison.',
  codeSolution: 'numbers = [-10, 5, -20, 3, 8]\nmax_abs = max(numbers, key=lambda x: abs(x))\nprint(max_abs)  # Output: -20',
  hint: 'abs(-20) = 20 is largest absolute value.'
},
{
  id: 'py_lambda_46',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the mean of a list of numbers.',
  mathSolution: 'Sum divided by length.',
  codeSolution: 'mean = lambda lst: sum(lst) / len(lst) if lst else 0\nprint(mean([1, 2, 3, 4, 5]))  # Output: 3.0',
  hint: 'Handle empty list to avoid division by zero.'
},
{
  id: 'py_lambda_47',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort strings by their length, then alphabetically.',
  mathSolution: 'Key can return tuple for multiple sort criteria.',
  codeSolution: 'words = ["apple", "kiwi", "banana", "cherry"]\nsorted_words = sorted(words, key=lambda x: (len(x), x))\nprint(sorted_words)  # Sorted by length, then alphabetically',
  hint: 'Tuple key: first length, then string itself.'
},
{
  id: 'py_lambda_48',
  topicId: 'py_lambda',
  question: 'Create a lambda that implements a simple calculator.',
  mathSolution: 'Use dictionary mapping operations to lambdas.',
  codeSolution: 'calculator = {\n    "add": lambda x, y: x + y,\n    "sub": lambda x, y: x - y,\n    "mul": lambda x, y: x * y,\n    "div": lambda x, y: x / y if y != 0 else "Cannot divide by zero"\n}\n\nprint(calculator["add"](5, 3))\nprint(calculator["sub"](10, 4))\nprint(calculator["mul"](6, 2))\nprint(calculator["div"](10, 2))\nprint(calculator["div"](10, 0))',
  hint: 'Store lambdas in dictionary for dynamic dispatch.'
},
{
  id: 'py_lambda_49',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to apply different operations to list elements.',
  mathSolution: 'Map a function that chooses operation based on index.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\noperations = [lambda x: x*2, lambda x: x**2, lambda x: x+10]\nresult = list(map(lambda x: operations[x[0] % len(operations)](x[1]), enumerate(numbers)))\nprint(result)  # Alternating operations: [2, 4, 13, 8, 10]',
  hint: 'Use modulo to cycle through operations.'
},
{
  id: 'py_lambda_50',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns a function for linear equations (y = mx + b).',
  mathSolution: 'Return lambda that captures slope and intercept.',
  codeSolution: 'linear_eq = lambda m, b: lambda x: m * x + b\nline1 = linear_eq(2, 3)  # y = 2x + 3\nline2 = linear_eq(-1, 5) # y = -x + 5\nprint(line1(4))  # Output: 11\nprint(line2(4))  # Output: 1',
  hint: 'This demonstrates closure - inner lambda remembers m and b.'
}
);