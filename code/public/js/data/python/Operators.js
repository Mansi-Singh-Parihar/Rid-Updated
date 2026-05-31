QuizData.questions.push(
{
  id: 'py_ops_1',
  topicId: 'py_operators',
  question: 'Write a function `add(a, b)` that returns the sum of two numbers using the `+` operator.',
  mathSolution: 'The + operator performs arithmetic addition.',
  codeSolution: 'def add(a, b):\n    return a + b\n\nprint(add(5, 3))  # 8',
  hint: 'Simply use `a + b`.'
},
{
  id: 'py_ops_2',
  topicId: 'py_operators',
  question: 'Write a function `remainder(a, b)` that returns the remainder when a is divided by b using the `%` operator.',
  mathSolution: 'The % operator returns the remainder of division.',
  codeSolution: 'def remainder(a, b):\n    return a % b\n\nprint(remainder(10, 3))  # 1',
  hint: 'Use `a % b`.'
},
{
  id: 'py_ops_3',
  topicId: 'py_operators',
  question: 'Write a function `is_even(n)` that returns True if n is even, using the `%` operator.',
  mathSolution: 'If n % 2 == 0, the number is even.',
  codeSolution: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))  # True\nprint(is_even(5))  # False',
  hint: 'Check remainder when divided by 2.'
},
{
  id: 'py_ops_4',
  topicId: 'py_operators',
  question: 'Swap two variables `a` and `b` without using a temporary variable. Use tuple unpacking (which involves assignment).',
  mathSolution: 'Tuple assignment swaps values.',
  codeSolution: 'a, b = 5, 10\na, b = b, a\nprint(a, b)  # 10 5',
  hint: 'Use `a, b = b, a`.'
},
{
  id: 'py_ops_5',
  topicId: 'py_operators',
  question: 'Write a function `floor_divide(a, b)` that returns the integer division result using the `//` operator.',
  mathSolution: '// performs floor division (quotient without remainder).',
  codeSolution: 'def floor_divide(a, b):\n    return a // b\n\nprint(floor_divide(10, 3))  # 3',
  hint: 'Use `a // b`.'
},
{
  id: 'py_ops_6',
  topicId: 'py_operators',
  question: 'Write a function `power(base, exp)` that returns base raised to exp using the `**` operator.',
  mathSolution: '** is the exponentiation operator.',
  codeSolution: 'def power(base, exp):\n    return base ** exp\n\nprint(power(2, 3))  # 8',
  hint: 'Use `base ** exp`.'
},
{
  id: 'py_ops_7',
  topicId: 'py_operators',
  question: 'Compare two strings lexicographically using comparison operators. Write a function `is_less(s1, s2)` that returns True if s1 < s2.',
  mathSolution: 'Strings are compared lexicographically using ASCII values.',
  codeSolution: 'def is_less(s1, s2):\n    return s1 < s2\n\nprint(is_less("apple", "banana"))  # True\nprint(is_less("zebra", "ant"))  # False',
  hint: 'Use `<` directly.'
},
{
  id: 'py_ops_8',
  topicId: 'py_operators',
  question: 'Write a function `in_range(x, low, high)` that returns True if x is between low and high (inclusive) using logical `and`.',
  mathSolution: 'Combine comparisons with `and`.',
  codeSolution: 'def in_range(x, low, high):\n    return low <= x <= high\n\nprint(in_range(5, 1, 10))  # True\nprint(in_range(15, 1, 10))  # False',
  hint: 'Python allows chaining: `low <= x <= high`.'
},
{
  id: 'py_ops_9',
  topicId: 'py_operators',
  question: 'Write a function `toggle(flag)` that toggles a boolean value using the `not` operator.',
  mathSolution: '`not` inverts a boolean.',
  codeSolution: 'def toggle(flag):\n    return not flag\n\nprint(toggle(True))  # False\nprint(toggle(False))  # True',
  hint: 'Return `not flag`.'
},
{
  id: 'py_ops_10',
  topicId: 'py_operators',
  question: 'Use bitwise AND (`&`) to check if a number is odd. Write a function `is_odd_bitwise(n)`.',
  mathSolution: 'n & 1 returns 1 if last bit is set (odd).',
  codeSolution: 'def is_odd_bitwise(n):\n    return (n & 1) == 1\n\nprint(is_odd_bitwise(7))  # True\nprint(is_odd_bitwise(8))  # False',
  hint: 'Check the least significant bit.'
},
{
  id: 'py_ops_11',
  topicId: 'py_operators',
  question: 'Use left shift (`<<`) to multiply a number by 8. Write a function `multiply_by_8(n)`.',
  mathSolution: 'Left shift by 3 bits multiplies by 2³ = 8.',
  codeSolution: 'def multiply_by_8(n):\n    return n << 3\n\nprint(multiply_by_8(5))  # 40 (5 * 8)',
  hint: '`n << 3` is equivalent to n * 8.'
},
{
  id: 'py_ops_12',
  topicId: 'py_operators',
  question: 'Write a function `in_list(item, lst)` that returns True if item is in the list using the `in` operator.',
  mathSolution: '`in` tests membership.',
  codeSolution: 'def in_list(item, lst):\n    return item in lst\n\nprint(in_list(3, [1, 2, 3, 4]))  # True\nprint(in_list(5, [1, 2, 3, 4]))  # False',
  hint: 'Use `item in lst`.'
},
{
  id: 'py_ops_13',
  topicId: 'py_operators',
  question: 'Write a function `is_same_object(a, b)` that returns True if a and b are the same object using the `is` operator.',
  mathSolution: '`is` checks identity (same memory address).',
  codeSolution: 'def is_same_object(a, b):\n    return a is b\n\nx = [1, 2]\ny = x\nz = [1, 2]\nprint(is_same_object(x, y))  # True\nprint(is_same_object(x, z))  # False',
  hint: 'Use `a is b`.'
},
{
  id: 'py_ops_14',
  topicId: 'py_operators',
  question: 'Demonstrate short-circuit evaluation of `and`. Write a function `safe_divide(a, b)` that returns a/b if b != 0, else None, using `and` to avoid division by zero.',
  mathSolution: '`b and a/b` works because if b is 0 (falsy), it returns 0; otherwise it returns a/b.',
  codeSolution: 'def safe_divide(a, b):\n    return a / b if b != 0 else None\n\nprint(safe_divide(10, 2))  # 5.0\nprint(safe_divide(10, 0))  # None',
  hint: 'Use conditional expression: return a/b only when b is not zero.'
},
{
  id: 'py_ops_15',
  topicId: 'py_operators',
  question: 'Write a function `max_of_two(a, b)` that returns the larger of two numbers using the ternary operator (conditional expression).',
  mathSolution: 'Use `a if a > b else b`.',
  codeSolution: 'def max_of_two(a, b):\n    return a if a > b else b\n\nprint(max_of_two(10, 20))  # 20\nprint(max_of_two(30, 15))  # 30',
  hint: 'Ternary: `x if condition else y`.'
},
{
  id: 'py_ops_16',
  topicId: 'py_operators',
  question: 'Use the walrus operator `:=` to read lines from a file until empty. Write code that reads and prints lines using a while loop.',
  mathSolution: 'The assignment expression allows assignment in the loop condition.',
  codeSolution: '# with open("file.txt") as f:\n#     while (line := f.readline()):\n#         print(line, end="")\nprint("Walrus operator example: while (line := f.readline()):")',
  hint: '`while (line := f.readline()):`'
},
{
  id: 'py_ops_17',
  topicId: 'py_operators',
  question: 'Given the expression `2 + 3 * 4`, what is the result and why? Write code to compute it.',
  mathSolution: 'Multiplication has higher precedence, so 3*4=12, then +2 = 14.',
  codeSolution: 'result = 2 + 3 * 4\nprint(result)  # 14\nprint("Because * has higher precedence than +")',
  hint: 'Operator precedence: `*` before `+`.'
},
{
  id: 'py_ops_18',
  topicId: 'py_operators',
  question: 'Use the `+=` assignment operator to accumulate a sum. Write a function `sum_list(lst)` that returns the sum of all elements.',
  mathSolution: '`+=` adds and assigns.',
  codeSolution: 'def sum_list(lst):\n    total = 0\n    for x in lst:\n        total += x\n    return total\n\nprint(sum_list([1, 2, 3, 4, 5]))  # 15',
  hint: '`total += x` is equivalent to `total = total + x`.'
},
{
  id: 'py_ops_19',
  topicId: 'py_operators',
  question: 'Use bitwise OR (`|`) to set a flag. Write a function `set_flag(flags, mask)` that returns flags with the bits in mask set to 1.',
  mathSolution: '`flags | mask` sets bits where mask has 1.',
  codeSolution: 'def set_flag(flags, mask):\n    return flags | mask\n\nprint(set_flag(0b0000, 0b0101))  # 5 (0b0101)',
  hint: 'Use `flags | mask`.'
},
{
  id: 'py_ops_20',
  topicId: 'py_operators',
  question: 'Swap two integers using XOR bitwise operator without a temporary variable.',
  mathSolution: 'XOR swap: a ^= b; b ^= a; a ^= b.',
  codeSolution: 'a = 5\nb = 10\na = a ^ b\nb = a ^ b\na = a ^ b\nprint(a, b)  # 10 5',
  hint: 'Perform three XOR operations.'
},
{
  id: 'py_ops_21',
  topicId: 'py_operators',
  question: 'Write a function `is_power_of_two(n)` that returns True if n is a power of two, using bitwise `&`.',
  mathSolution: 'A power of two has exactly one bit set; n & (n-1) == 0 for n>0.',
  codeSolution: 'def is_power_of_two(n):\n    return n > 0 and (n & (n-1)) == 0\n\nprint(is_power_of_two(8))  # True\nprint(is_power_of_two(10))  # False',
  hint: 'Check `n & (n-1) == 0`.'
},
{
  id: 'py_ops_22',
  topicId: 'py_operators',
  question: 'Write a simple calculator function `calculate(a, b, op)` that uses operators `+`, `-`, `*`, `/` based on op string.',
  mathSolution: 'Use if‑elif or a dictionary mapping operators to functions.',
  codeSolution: 'def calculate(a, b, op):\n    if op == "+": return a + b\n    if op == "-": return a - b\n    if op == "*": return a * b\n    if op == "/": return a / b\n    return None\n\nprint(calculate(10, 5, "+"))  # 15\nprint(calculate(10, 5, "*"))  # 50',
  hint: 'Chain conditionals or use a dict.'
},
{
  id: 'py_ops_23',
  topicId: 'py_operators',
  question: 'Use modulo `%` to extract the last digit of an integer. Write a function `last_digit(n)` that returns the units digit.',
  mathSolution: 'n % 10 gives the last digit in base 10.',
  codeSolution: 'def last_digit(n):\n    return abs(n) % 10\n\nprint(last_digit(123))  # 3\nprint(last_digit(-456))  # 6',
  hint: 'Take absolute value to handle negatives.'
},
{
  id: 'py_ops_24',
  topicId: 'py_operators',
  question: 'Use floor division `//` to remove the last digit of an integer. Write a function `remove_last_digit(n)` that returns n without its last digit.',
  mathSolution: 'n // 10 discards the last digit.',
  codeSolution: 'def remove_last_digit(n):\n    return n // 10\n\nprint(remove_last_digit(123))  # 12\nprint(remove_last_digit(4567))  # 456',
  hint: 'Use `// 10`.'
},
{
  id: 'py_ops_25',
  topicId: 'py_operators',
  question: 'Convert seconds to hours, minutes, and seconds using `//` and `%`. Write a function `convert_seconds(sec)` that returns a tuple (hours, minutes, seconds).',
  mathSolution: 'hours = sec // 3600, remainder = sec % 3600, minutes = remainder // 60, seconds = remainder % 60.',
  codeSolution: 'def convert_seconds(sec):\n    hours = sec // 3600\n    remainder = sec % 3600\n    minutes = remainder // 60\n    seconds = remainder % 60\n    return (hours, minutes, seconds)\n\nprint(convert_seconds(3665))  # (1, 1, 5)',
  hint: 'Use floor division and modulo.'
},
{
  id: 'py_ops_26',
  topicId: 'py_operators',
  question: 'Write a function `is_leap_year(year)` that returns True if year is a leap year using logical operators.',
  mathSolution: 'Leap year if divisible by 4 but not by 100, unless divisible by 400.',
  codeSolution: 'def is_leap_year(year):\n    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\n\nprint(is_leap_year(2024))  # True\nprint(is_leap_year(1900))  # False\nprint(is_leap_year(2000))  # True',
  hint: 'Combine conditions with `and`/`or`.'
},
{
  id: 'py_ops_27',
  topicId: 'py_operators',
  question: 'Check if a substring exists in a string using `in`. Write a function `contains_substring(s, sub)` that returns True if sub is in s.',
  mathSolution: '`sub in s` tests membership.',
  codeSolution: 'def contains_substring(s, sub):\n    return sub in s\n\nprint(contains_substring("Hello World", "World"))  # True\nprint(contains_substring("Hello World", "Python"))  # False',
  hint: 'Use `sub in s`.'
},
{
  id: 'py_ops_28',
  topicId: 'py_operators',
  question: 'Check if a variable is `None` using the `is` operator. Write a function `is_none(x)` that returns True if x is None.',
  mathSolution: '`is` compares identity; `None` is a singleton.',
  codeSolution: 'def is_none(x):\n    return x is None\n\nprint(is_none(None))  # True\nprint(is_none(0))  # False\nprint(is_none(""))  # False',
  hint: 'Use `x is None`.'
},
{
  id: 'py_ops_29',
  topicId: 'py_operators',
  question: 'Use `not` to check if a list is empty. Write a function `is_empty(lst)` that returns True if list has no elements.',
  mathSolution: 'Empty list is falsy; `not lst` returns True.',
  codeSolution: 'def is_empty(lst):\n    return not lst\n\nprint(is_empty([]))  # True\nprint(is_empty([1, 2, 3]))  # False',
  hint: '`not lst` works because empty list is False.'
},
{
  id: 'py_ops_30',
  topicId: 'py_operators',
  question: 'Use `and` and `or` to provide a default value. Write a function `get_first_non_none(lst)` that returns the first non‑None element, or None if all are None.',
  mathSolution: 'Use a loop, or with `or` short‑circuit: `a or b or c` returns first truthy.',
  codeSolution: 'def get_first_non_none(lst):\n    for x in lst:\n        if x is not None:\n            return x\n    return None\n\nprint(get_first_non_none([None, None, 5, None]))  # 5\nprint(get_first_non_none([None, None, None]))  # None',
  hint: 'Iterate and check.'
},
{
  id: 'py_ops_31',
  topicId: 'py_operators',
  question: 'Use bitwise XOR (`^`) to find the element that appears odd number of times in a list (all others appear even). Write a function `find_odd_occurrence(lst)`.',
  mathSolution: 'XOR of all elements cancels out pairs, leaving the odd one.',
  codeSolution: 'def find_odd_occurrence(lst):\n    result = 0\n    for num in lst:\n        result ^= num\n    return result\n\nprint(find_odd_occurrence([1, 2, 3, 2, 1, 3, 5]))  # 5',
  hint: 'XOR is commutative and associative; x^x=0.'
},
{
  id: 'py_ops_32',
  topicId: 'py_operators',
  question: 'Use the bitwise NOT `~` to get the negative of a number in two’s complement (i.e., `~x + 1` = -x). Write a function `negate(x)` that returns -x using ~.',
  mathSolution: 'In two’s complement, `-x = ~x + 1`.',
  codeSolution: 'def negate(x):\n    return ~x + 1\n\nprint(negate(5))  # -5\nprint(negate(-5))  # 5',
  hint: '`~x + 1` equals -x.'
},
{
  id: 'py_ops_33',
  topicId: 'py_operators',
  question: 'Use assignment operators `-=`, `*=`, `/=` to modify a variable. Write a function `apply_operations(x)` that subtracts 2, multiplies by 3, and divides by 4, returning the result.',
  mathSolution: 'Chain assignment operations.',
  codeSolution: 'def apply_operations(x):\n    x -= 2\n    x *= 3\n    x /= 4\n    return x\n\nprint(apply_operations(10))  # (10-2)=8, 8*3=24, 24/4=6.0',
  hint: 'Use `x -= 2`, etc.'
},
{
  id: 'py_ops_34',
  topicId: 'py_operators',
  question: 'Use the `in` operator to check if a key exists in a dictionary. Write a function `key_exists(d, key)` that returns True if key is in d.',
  mathSolution: '`key in d` tests dictionary membership.',
  codeSolution: 'def key_exists(d, key):\n    return key in d\n\nprint(key_exists({"a": 1, "b": 2}, "a"))  # True\nprint(key_exists({"a": 1, "b": 2}, "c"))  # False',
  hint: 'Use `key in d`.'
},
{
  id: 'py_ops_35',
  topicId: 'py_operators',
  question: 'Use the `is not` operator to check if a variable is not None. Write a function `is_not_none(x)`.',
  mathSolution: '`x is not None` returns True if x is not None.',
  codeSolution: 'def is_not_none(x):\n    return x is not None\n\nprint(is_not_none(10))  # True\nprint(is_not_none(None))  # False',
  hint: 'Use `x is not None`.'
},
{
  id: 'py_ops_36',
  topicId: 'py_operators',
  question: 'Demonstrate operator precedence with parentheses. Write an expression that computes `(2+3)*4` without using parentheses, then with parentheses, and explain the difference.',
  mathSolution: 'Without parentheses: `2+3*4` = 14 (because * first). With parentheses: `(2+3)*4` = 20.',
  codeSolution: 'without_paren = 2 + 3 * 4\nwith_paren = (2 + 3) * 4\nprint(without_paren, with_paren)  # 14 20\nprint("Without parentheses: multiplication first")\nprint("With parentheses: addition first")',
  hint: 'Parentheses override default precedence.'
},
{
  id: 'py_ops_37',
  topicId: 'py_operators',
  question: 'Use floor division `//` and modulo `%` to compute the quotient and remainder. Write a function `quotient_remainder(a, b)` that returns both.',
  mathSolution: 'quotient = a // b, remainder = a % b.',
  codeSolution: 'def quotient_remainder(a, b):\n    return a // b, a % b\n\nq, r = quotient_remainder(17, 5)\nprint(f"Quotient: {q}, Remainder: {r}")  # Quotient: 3, Remainder: 2',
  hint: 'Return a tuple.'
},
{
  id: 'py_ops_38',
  topicId: 'py_operators',
  question: 'Use the `**` operator to compute compound interest. Write a function `compound_interest(principal, rate, years)` that returns final amount (A = P*(1+r)^t).',
  mathSolution: 'A = principal * (1 + rate) ** years.',
  codeSolution: 'def compound_interest(principal, rate, years):\n    return principal * (1 + rate) ** years\n\nprint(compound_interest(1000, 0.05, 3))  # 1157.625',
  hint: 'Use `**` for exponent.'
},
{
  id: 'py_ops_39',
  topicId: 'py_operators',
  question: 'Check if a number is divisible by another using `%`. Write a function `is_divisible(a, b)` that returns True if a is divisible by b.',
  mathSolution: 'a % b == 0 means divisible.',
  codeSolution: 'def is_divisible(a, b):\n    return a % b == 0\n\nprint(is_divisible(10, 2))  # True\nprint(is_divisible(10, 3))  # False',
  hint: 'Check remainder zero.'
},
{
  id: 'py_ops_40',
  topicId: 'py_operators',
  question: 'Use the `<<` and `>>` operators to pack two 4‑bit numbers into one byte. Write functions `pack(a, b)` (both 0‑15) and `unpack(byte)`.',
  mathSolution: 'pack: byte = (a << 4) | b; unpack: a = byte >> 4, b = byte & 0x0F.',
  codeSolution: 'def pack(a, b):\n    return (a << 4) | b\n\ndef unpack(byte):\n    return (byte >> 4, byte & 0x0F)\n\nb = pack(12, 5)\nprint(b)  # 197 (0b11000101)\na, b_val = unpack(b)\nprint(f"a={a}, b={b_val}")  # a=12, b=5',
  hint: 'Shift and mask.'
},
{
  id: 'py_ops_41',
  topicId: 'py_operators',
  question: 'Use modulo `%` for circular indexing. Write a function `circular_access(lst, i)` that returns lst[i % len(lst)] to handle negative or large indices.',
  mathSolution: 'Index modulo length wraps around.',
  codeSolution: 'def circular_access(lst, i):\n    return lst[i % len(lst)]\n\nlst = ["a", "b", "c", "d"]\nprint(circular_access(lst, 5))  # "b" (index 1)\nprint(circular_access(lst, -1))  # "d" (index 3)',
  hint: 'Use `i % len(lst)` as index.'
},
{
  id: 'py_ops_42',
  topicId: 'py_operators',
  question: 'Use floor division `//` for pagination. Write a function `page_number(item_index, items_per_page)` that returns which page the item falls on (0‑based page).',
  mathSolution: 'page = item_index // items_per_page.',
  codeSolution: 'def page_number(item_index, items_per_page):\n    return item_index // items_per_page\n\nprint(page_number(15, 10))  # 1 (second page, 0-based)\nprint(page_number(25, 10))  # 2 (third page)',
  hint: 'Integer division gives page number.'
},
{
  id: 'py_ops_43',
  topicId: 'py_operators',
  question: 'Use the ternary operator to return the absolute value of a number. Write a function `abs_value(x)`.',
  mathSolution: '`x if x >= 0 else -x`.',
  codeSolution: 'def abs_value(x):\n    return x if x >= 0 else -x\n\nprint(abs_value(5))  # 5\nprint(abs_value(-7))  # 7',
  hint: 'Conditional expression.'
},
{
  id: 'py_ops_44',
  topicId: 'py_operators',
  question: 'Use the `not in` operator to check if an item is not in a list. Write a function `not_in_list(item, lst)`.',
  mathSolution: '`item not in lst` returns True if absent.',
  codeSolution: 'def not_in_list(item, lst):\n    return item not in lst\n\nprint(not_in_list(5, [1, 2, 3]))  # True\nprint(not_in_list(2, [1, 2, 3]))  # False',
  hint: 'Use `not in`.'
},
{
  id: 'py_ops_45',
  topicId: 'py_operators',
  question: 'Use the `&` operator to check if a number is a power of two (alternate method).',
  mathSolution: 'Power of two has exactly one bit set; `n & (n-1) == 0` for n>0.',
  codeSolution: 'def is_power_of_two_alt(n):\n    return n > 0 and (n & (n-1)) == 0\n\nprint(is_power_of_two_alt(16))  # True\nprint(is_power_of_two_alt(18))  # False',
  hint: 'Same as earlier but different wording.'
},
{
  id: 'py_ops_46',
  topicId: 'py_operators',
  question: 'Use the `|` operator to combine two sets (union). Write a function `union_sets(s1, s2)` that returns the union.',
  mathSolution: '`s1 | s2` returns a new set.',
  codeSolution: 'def union_sets(s1, s2):\n    return s1 | s2\n\nprint(union_sets({1, 2, 3}, {3, 4, 5}))  # {1, 2, 3, 4, 5}',
  hint: 'Use `|`.'
},
{
  id: 'py_ops_47',
  topicId: 'py_operators',
  question: 'Use the `&` operator to find intersection of two sets.',
  mathSolution: '`s1 & s2` returns common elements.',
  codeSolution: 'def intersect_sets(s1, s2):\n    return s1 & s2\n\nprint(intersect_sets({1, 2, 3}, {3, 4, 5}))  # {3}',
  hint: 'Use `&`.'
},
{
  id: 'py_ops_48',
  topicId: 'py_operators',
  question: 'Use the `^` operator to find symmetric difference of two sets.',
  mathSolution: '`s1 ^ s2` returns elements in either but not both.',
  codeSolution: 'def sym_diff_sets(s1, s2):\n    return s1 ^ s2\n\nprint(sym_diff_sets({1, 2, 3}, {3, 4, 5}))  # {1, 2, 4, 5}',
  hint: 'Use `^`.'
},
{
  id: 'py_ops_49',
  topicId: 'py_operators',
  question: 'Write a function `is_positive(n)` that returns True if n > 0, using comparison operator.',
  mathSolution: '`n > 0`.',
  codeSolution: 'def is_positive(n):\n    return n > 0\n\nprint(is_positive(5))  # True\nprint(is_positive(-3))  # False\nprint(is_positive(0))  # False',
  hint: 'Use `>`.'
},
{
  id: 'py_ops_50',
  topicId: 'py_operators',
  question: 'Write a function `is_within_bounds(x, lower, upper)` that returns True if lower ≤ x ≤ upper using chained comparison.',
  mathSolution: 'Chained comparison: `lower <= x <= upper`.',
  codeSolution: 'def is_within_bounds(x, lower, upper):\n    return lower <= x <= upper\n\nprint(is_within_bounds(5, 1, 10))  # True\nprint(is_within_bounds(0, 1, 10))  # False',
  hint: 'Python allows chaining.'
});