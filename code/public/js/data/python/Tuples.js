QuizData.questions.push(
  {
    id: "py_tuple_1",
    topicId: "py_tuple",
    question: "Create an empty tuple and print it.",
    mathSolution: "Use empty parentheses to create an empty tuple.",
    codeSolution: "my_tuple = ()\nprint(my_tuple)  # ()",
    hint: "Use `()` for empty tuple",
  },
  {
    id: "py_tuple_2",
    topicId: "py_tuple",
    question: "Create a tuple with 5 integer elements and print it.",
    mathSolution: "Use parentheses and separate elements with commas.",
    codeSolution:
      "numbers = (10, 20, 30, 40, 50)\nprint(numbers)  # (10, 20, 30, 40, 50)",
    hint: "Use `(element1, element2, ...)`",
  },
  {
    id: "py_tuple_3",
    topicId: "py_tuple",
    question: "Create a tuple with mixed data types (int, float, str, bool).",
    mathSolution: "Tuples can store elements of different types.",
    codeSolution:
      'mixed = (1, 2.5, "Hello", True)\nprint(mixed)  # (1, 2.5, "Hello", True)',
    hint: "Just put different types inside parentheses",
  },
  {
    id: "py_tuple_4",
    topicId: "py_tuple",
    question:
      "Create a tuple with a single element (value 5) and print its type.",
    mathSolution: "Single element tuple needs a trailing comma.",
    codeSolution:
      'single_tuple = (5,)\nprint(type(single_tuple))  # <class "tuple">\nprint(single_tuple)  # (5,)',
    hint: "Use `(value,)` with a comma",
  },
  {
    id: "py_tuple_5",
    topicId: "py_tuple",
    question:
      "Create a tuple using tuple() constructor from list [1, 2, 3, 4, 5].",
    mathSolution: "tuple() converts iterable to tuple.",
    codeSolution:
      "my_list = [1, 2, 3, 4, 5]\nmy_tuple = tuple(my_list)\nprint(my_tuple)  # (1, 2, 3, 4, 5)",
    hint: "Use `tuple(list_name)`",
  },
  {
    id: "py_tuple_6",
    topicId: "py_tuple",
    question:
      'Access the first element of tuple ("apple", "banana", "cherry").',
    mathSolution: "Tuple indexing starts at 0.",
    codeSolution:
      'fruits = ("apple", "banana", "cherry")\nprint(fruits[0])  # apple',
    hint: "Use index 0 for first element",
  },
  {
    id: "py_tuple_7",
    topicId: "py_tuple",
    question:
      "Access the last element of tuple (10, 20, 30, 40, 50) using negative indexing.",
    mathSolution: "Negative index -1 refers to last element.",
    codeSolution: "numbers = (10, 20, 30, 40, 50)\nprint(numbers[-1])  # 50",
    hint: "Use `-1` for last element",
  },
  {
    id: "py_tuple_8",
    topicId: "py_tuple",
    question:
      "Slice a tuple (1, 2, 3, 4, 5, 6, 7, 8) to get elements from index 2 to 5.",
    mathSolution: "Slicing uses [start:end] where end is exclusive.",
    codeSolution:
      "nums = (1, 2, 3, 4, 5, 6, 7, 8)\nslice_tuple = nums[2:6]\nprint(slice_tuple)  # (3, 4, 5, 6)",
    hint: "Use `[start:end]` where end is exclusive",
  },
  {
    id: "py_tuple_9",
    topicId: "py_tuple",
    question:
      "Get every 2nd element from tuple (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) using slicing with step.",
    mathSolution: "Slicing with step: [start:stop:step].",
    codeSolution:
      "nums = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\nresult = nums[::2]\nprint(result)  # (1, 3, 5, 7, 9)",
    hint: "Use `[::2]` for every 2nd element",
  },
  {
    id: "py_tuple_10",
    topicId: "py_tuple",
    question: "Reverse a tuple (1, 2, 3, 4, 5) using slicing.",
    mathSolution: "Use step -1 to reverse.",
    codeSolution:
      "original = (1, 2, 3, 4, 5)\nreversed_tuple = original[::-1]\nprint(reversed_tuple)  # (5, 4, 3, 2, 1)",
    hint: "Use `[::-1]`",
  },
  {
    id: "py_tuple_11",
    topicId: "py_tuple",
    question: 'Find the length of tuple ("a", "b", "c", "d", "e") using len().',
    mathSolution: "len() returns number of elements.",
    codeSolution:
      'letters = ("a", "b", "c", "d", "e")\nprint(len(letters))  # 5',
    hint: "Use `len(tuple_name)`",
  },
  {
    id: "py_tuple_12",
    topicId: "py_tuple",
    question:
      'Check if element 25 exists in tuple (10, 20, 30, 40, 50) using "in" operator.',
    mathSolution: '"in" operator returns boolean.',
    codeSolution:
      "numbers = (10, 20, 30, 40, 50)\nprint(25 in numbers)  # False\nprint(30 in numbers)  # True",
    hint: "Use `element in tuple`",
  },
  {
    id: "py_tuple_13",
    topicId: "py_tuple",
    question:
      "Count occurrences of 2 in tuple (1, 2, 2, 3, 2, 4, 2, 5) using count() method.",
    mathSolution: "count() returns frequency of element.",
    codeSolution: "nums = (1, 2, 2, 3, 2, 4, 2, 5)\nprint(nums.count(2))  # 4",
    hint: "Use `.count(value)`",
  },
  {
    id: "py_tuple_14",
    topicId: "py_tuple",
    question:
      'Find index of "banana" in tuple ("apple", "banana", "cherry", "banana") using index() method.',
    mathSolution: "index() returns first occurrence position.",
    codeSolution:
      'fruits = ("apple", "banana", "cherry", "banana")\nprint(fruits.index("banana"))  # 1',
    hint: "Use `.index(value)`",
  },
  {
    id: "py_tuple_15",
    topicId: "py_tuple",
    question:
      "Concatenate two tuples (1, 2, 3) and (4, 5, 6) using + operator.",
    mathSolution: "+ operator joins tuples.",
    codeSolution:
      "tuple1 = (1, 2, 3)\ntuple2 = (4, 5, 6)\nresult = tuple1 + tuple2\nprint(result)  # (1, 2, 3, 4, 5, 6)",
    hint: "Use `tuple1 + tuple2`",
  },
  {
    id: "py_tuple_16",
    topicId: "py_tuple",
    question: "Repeat tuple (1, 2) three times using * operator.",
    mathSolution: "* operator repeats tuple elements.",
    codeSolution:
      "original = (1, 2)\nrepeated = original * 3\nprint(repeated)  # (1, 2, 1, 2, 1, 2)",
    hint: "Use `tuple * number`",
  },
  {
    id: "py_tuple_17",
    topicId: "py_tuple",
    question:
      "Find sum of all elements in tuple (5, 10, 15, 20, 25) using sum().",
    mathSolution: "sum() adds all numeric elements.",
    codeSolution:
      "numbers = (5, 10, 15, 20, 25)\ntotal = sum(numbers)\nprint(total)  # 75",
    hint: "Use `sum(tuple_name)`",
  },
  {
    id: "py_tuple_18",
    topicId: "py_tuple",
    question:
      "Find maximum and minimum values in tuple (8, 3, 12, 5, 20, 1) using max() and min().",
    mathSolution: "max() returns largest, min() returns smallest.",
    codeSolution:
      "numbers = (8, 3, 12, 5, 20, 1)\nprint(max(numbers))  # 20\nprint(min(numbers))  # 1",
    hint: "Use `max()` and `min()` functions",
  },
  {
    id: "py_tuple_19",
    topicId: "py_tuple",
    question: "Convert tuple (1, 2, 3) to a list using list() constructor.",
    mathSolution: "list() converts tuple to list.",
    codeSolution:
      "my_tuple = (1, 2, 3)\nmy_list = list(my_tuple)\nprint(my_list)  # [1, 2, 3]",
    hint: "Use `list(tuple_name)`",
  },
  {
    id: "py_tuple_20",
    topicId: "py_tuple",
    question: "Convert list [4, 5, 6] to tuple using tuple() constructor.",
    mathSolution: "tuple() converts list to tuple.",
    codeSolution:
      "my_list = [4, 5, 6]\nmy_tuple = tuple(my_list)\nprint(my_tuple)  # (4, 5, 6)",
    hint: "Use `tuple(list_name)`",
  },
  {
    id: "py_tuple_21",
    topicId: "py_tuple",
    question:
      "Unpack tuple (10, 20, 30) into three variables a, b, c and print them.",
    mathSolution: "Tuple unpacking assigns each element to a variable.",
    codeSolution:
      "numbers = (10, 20, 30)\na, b, c = numbers\nprint(a, b, c)  # 10 20 30",
    hint: "Use `var1, var2, var3 = tuple`",
  },
  {
    id: "py_tuple_22",
    topicId: "py_tuple",
    question: "Swap two variables a=5 and b=10 using tuple unpacking.",
    mathSolution: "Use (a, b) = (b, a) to swap.",
    codeSolution: "a = 5\nb = 10\na, b = b, a\nprint(a, b)  # 10 5",
    hint: "Use `a, b = b, a`",
  },
  {
    id: "py_tuple_23",
    topicId: "py_tuple",
    question:
      "Use * operator to collect remaining elements while unpacking tuple (1, 2, 3, 4, 5) into first, rest.",
    mathSolution: "*rest collects multiple elements into a list.",
    codeSolution:
      "numbers = (1, 2, 3, 4, 5)\nfirst, *rest = numbers\nprint(first)  # 1\nprint(rest)   # [2, 3, 4, 5]",
    hint: "Use `*variable_name` to collect remaining",
  },
  {
    id: "py_tuple_24",
    topicId: "py_tuple",
    question:
      "Check if two tuples (1, 2, 3) and (1, 2, 3) are equal using == operator.",
    mathSolution: "== compares element by element.",
    codeSolution:
      "tuple1 = (1, 2, 3)\ntuple2 = (1, 2, 3)\nprint(tuple1 == tuple2)  # True",
    hint: "Use `==` for comparison",
  },
  {
    id: "py_tuple_25",
    topicId: "py_tuple",
    question: "Compare tuples (1, 2, 3) and (1, 2, 4) lexicographically.",
    mathSolution: "Python compares element by element.",
    codeSolution:
      "tuple1 = (1, 2, 3)\ntuple2 = (1, 2, 4)\nprint(tuple1 < tuple2)  # True (since 3 < 4)",
    hint: "Comparison is lexicographic (element by element)",
  },
  {
    id: "py_tuple_26",
    topicId: "py_tuple",
    question:
      'Loop through tuple ("red", "green", "blue") and print each color using for loop.',
    mathSolution: "Tuples are iterable with for loop.",
    codeSolution:
      'colors = ("red", "green", "blue")\nfor color in colors:\n    print(color)',
    hint: "Use `for element in tuple:`",
  },
  {
    id: "py_tuple_27",
    topicId: "py_tuple",
    question: "Loop through tuple with index using enumerate().",
    mathSolution: "enumerate() returns index and value.",
    codeSolution:
      'fruits = ("apple", "banana", "cherry")\nfor index, fruit in enumerate(fruits):\n    print(f"{index}: {fruit}")',
    hint: "Use `for i, item in enumerate(tuple):`",
  },
  {
    id: "py_tuple_28",
    topicId: "py_tuple",
    question:
      "Create a nested tuple ((1, 2), (3, 4), (5, 6)) and access element 4.",
    mathSolution: "Use double indexing for nested tuples.",
    codeSolution: "nested = ((1, 2), (3, 4), (5, 6))\nprint(nested[1][1])  # 4",
    hint: "Use `tuple[index1][index2]`",
  },
  {
    id: "py_tuple_29",
    topicId: "py_tuple",
    question: "Create a tuple of 5 zeros using tuple multiplication.",
    mathSolution: "Multiply tuple containing zero.",
    codeSolution: "zeros = (0,) * 5\nprint(zeros)  # (0, 0, 0, 0, 0)",
    hint: "Use `(0,) * number`",
  },
  {
    id: "py_tuple_30",
    topicId: "py_tuple",
    question: "Sort a tuple (3, 1, 4, 1, 5, 9, 2) using sorted() function.",
    mathSolution: "sorted() returns a sorted list (tuple is immutable).",
    codeSolution:
      "numbers = (3, 1, 4, 1, 5, 9, 2)\nsorted_list = sorted(numbers)\nprint(sorted_list)  # [1, 1, 2, 3, 4, 5, 9]",
    hint: "Use `sorted(tuple_name)` which returns list",
  },
  {
    id: "py_tuple_31",
    topicId: "py_tuple",
    question: "Create a tuple from user input for 3 numbers using input().",
    mathSolution: "Collect inputs, convert to int, create tuple.",
    codeSolution:
      'a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\nc = int(input("Enter third number: "))\nmy_tuple = (a, b, c)\nprint(my_tuple)',
    hint: "Use `tuple(variable1, variable2, ...)`",
  },
  {
    id: "py_tuple_32",
    topicId: "py_tuple",
    question:
      "Check if all elements in tuple (True, True, True) are True using all().",
    mathSolution: "all() returns True if all elements are truthy.",
    codeSolution: "flags = (True, True, True)\nprint(all(flags))  # True",
    hint: "Use `all(tuple_name)`",
  },
  {
    id: "py_tuple_33",
    topicId: "py_tuple",
    question:
      "Check if any element in tuple (False, False, True, False) is True using any().",
    mathSolution: "any() returns True if at least one element is truthy.",
    codeSolution:
      "flags = (False, False, True, False)\nprint(any(flags))  # True",
    hint: "Use `any(tuple_name)`",
  },
  {
    id: "py_tuple_34",
    topicId: "py_tuple",
    question:
      "Find the element-wise sum of two tuples (1, 2, 3) and (4, 5, 6) using zip().",
    mathSolution: "zip() pairs elements, then sum each pair.",
    codeSolution:
      "t1 = (1, 2, 3)\nt2 = (4, 5, 6)\nresult = tuple(a + b for a, b in zip(t1, t2))\nprint(result)  # (5, 7, 9)",
    hint: "Use `zip()` with comprehension",
  },
  {
    id: "py_tuple_35",
    topicId: "py_tuple",
    question: 'Convert string "Python" to tuple of characters.',
    mathSolution: "tuple() on string creates tuple of characters.",
    codeSolution:
      'text = "Python"\nchar_tuple = tuple(text)\nprint(char_tuple)  # ("P", "y", "t", "h", "o", "n")',
    hint: "Use `tuple(string_name)`",
  },
  {
    id: "py_tuple_36",
    topicId: "py_tuple",
    question:
      "Check if tuple (1, 2, 3) is immutable by trying to change an element and handling the error.",
    mathSolution: "Tuples do not support item assignment.",
    codeSolution:
      'my_tuple = (1, 2, 3)\ntry:\n    my_tuple[0] = 10\nexcept TypeError:\n    print("Tuples are immutable!")',
    hint: "Tuples cannot be modified after creation",
  },
  {
    id: "py_tuple_37",
    topicId: "py_tuple",
    question:
      'Create a named tuple "Point" with fields x and y, and create a point (3, 4).',
    mathSolution: "namedtuple from collections module.",
    codeSolution:
      'from collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(3, 4)\nprint(p.x, p.y)  # 3 4',
    hint: 'Use `namedtuple("Name", ["field1", "field2"])`',
  },
  {
    id: "py_tuple_38",
    topicId: "py_tuple",
    question:
      "Convert tuple (10, 20, 30, 40, 50) to a string using str() and join.",
    mathSolution: "Convert each element to string, then join.",
    codeSolution:
      'nums = (10, 20, 30, 40, 50)\nstr_tuple = " ".join(str(x) for x in nums)\nprint(str_tuple)  # "10 20 30 40 50"',
    hint: "Use generator expression with join",
  },
  {
    id: "py_tuple_39",
    topicId: "py_tuple",
    question:
      "Remove duplicates from tuple (1, 2, 2, 3, 3, 3, 4, 5, 5) while preserving order.",
    mathSolution: "Convert to dict.fromkeys() or loop with set.",
    codeSolution:
      "original = (1, 2, 2, 3, 3, 3, 4, 5, 5)\nunique = tuple(dict.fromkeys(original))\nprint(unique)  # (1, 2, 3, 4, 5)",
    hint: "Use `tuple(dict.fromkeys(original))`",
  },
  {
    id: "py_tuple_40",
    topicId: "py_tuple",
    question:
      "Find common elements between two tuples (1, 2, 3, 4) and (3, 4, 5, 6) using set intersection.",
    mathSolution: "Convert to sets, find intersection, convert back to tuple.",
    codeSolution:
      "t1 = (1, 2, 3, 4)\nt2 = (3, 4, 5, 6)\ncommon = tuple(set(t1) & set(t2))\nprint(common)  # (3, 4)",
    hint: "Use `tuple(set(t1) & set(t2))`",
  },
  {
    id: "py_tuple_41",
    topicId: "py_tuple",
    question:
      "Find elements present in first tuple but not in second (difference) for (1, 2, 3, 4) and (3, 4, 5, 6).",
    mathSolution: "Use set difference.",
    codeSolution:
      "t1 = (1, 2, 3, 4)\nt2 = (3, 4, 5, 6)\ndifference = tuple(set(t1) - set(t2))\nprint(difference)  # (1, 2)",
    hint: "Use `tuple(set(t1) - set(t2))`",
  },
  {
    id: "py_tuple_42",
    topicId: "py_tuple",
    question:
      "Create a tuple of squares of numbers 1 to 10 using generator expression.",
    mathSolution: "Generator expression inside tuple() constructor.",
    codeSolution:
      "squares = tuple(x**2 for x in range(1, 11))\nprint(squares)  # (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)",
    hint: "Use `tuple(x**2 for x in range(1,11))`",
  },
  {
    id: "py_tuple_43",
    topicId: "py_tuple",
    question:
      "Count total number of elements in nested tuple (1, (2, 3), (4, (5, 6)), 7) including nested.",
    mathSolution: "Write recursive function or flatten.",
    codeSolution:
      "def count_elements(t):\n    count = 0\n    for item in t:\n        if isinstance(item, tuple):\n            count += count_elements(item)\n        else:\n            count += 1\n    return count\n\nnested = (1, (2, 3), (4, (5, 6)), 7)\nprint(count_elements(nested))  # 7",
    hint: "Use recursion for nested tuples",
  },
  {
    id: "py_tuple_44",
    topicId: "py_tuple",
    question:
      "Find the tuple with maximum sum from a list of tuples [(1, 2), (3, 4, 5), (10,), (6, 7)].",
    mathSolution: "Use max() with key=sum.",
    codeSolution:
      "tuples_list = [(1, 2), (3, 4, 5), (10,), (6, 7)]\nmax_tuple = max(tuples_list, key=sum)\nprint(max_tuple)  # (3, 4, 5)",
    hint: "Use `max(list, key=sum)`",
  },
  {
    id: "py_tuple_45",
    topicId: "py_tuple",
    question:
      "Sort list of tuples by second element: [(1, 4), (2, 2), (3, 3), (4, 1)].",
    mathSolution: "Use sorted() with key=lambda x: x[1].",
    codeSolution:
      "points = [(1, 4), (2, 2), (3, 3), (4, 1)]\nsorted_points = sorted(points, key=lambda x: x[1])\nprint(sorted_points)  # [(4, 1), (2, 2), (3, 3), (1, 4)]",
    hint: "Use `key=lambda x: x[1]`",
  },
  {
    id: "py_tuple_46",
    topicId: "py_tuple",
    question:
      'Convert list of pairs to dictionary using tuple conversion: [("a", 1), ("b", 2), ("c", 3)].',
    mathSolution: "dict() constructor accepts list of tuples.",
    codeSolution:
      'pairs = [("a", 1), ("b", 2), ("c", 3)]\ndictionary = dict(pairs)\nprint(dictionary)  # {"a": 1, "b": 2, "c": 3}',
    hint: "Use `dict(list_of_tuples)`",
  },
  {
    id: "py_tuple_47",
    topicId: "py_tuple",
    question:
      "Merge multiple tuples (1, 2), (3, 4), (5, 6) into a single tuple using sum() with start value.",
    mathSolution: "sum() with empty tuple start concatenates.",
    codeSolution:
      "t1 = (1, 2)\nt2 = (3, 4)\nt3 = (5, 6)\nmerged = sum((t1, t2, t3), ())\nprint(merged)  # (1, 2, 3, 4, 5, 6)",
    hint: "Use `sum((tuple1, tuple2, ...), ())`",
  },
  {
    id: "py_tuple_48",
    topicId: "py_tuple",
    question:
      "Check if two tuples (1, 2, 3) and (1, 2, 3) reference the same object in memory.",
    mathSolution: "is operator checks object identity.",
    codeSolution:
      "t1 = (1, 2, 3)\nt2 = (1, 2, 3)\nprint(t1 is t2)  # May be False (implementation dependent)\nprint(t1 == t2)  # True (always)",
    hint: "Use `is` for identity, `==` for equality",
  },
  {
    id: "py_tuple_49",
    topicId: "py_tuple",
    question:
      "Create tuple of 10 random integers between 1 and 100 using random module.",
    mathSolution: "Use random.randint() in comprehension.",
    codeSolution:
      "import random\nrandom_tuple = tuple(random.randint(1, 100) for _ in range(10))\nprint(random_tuple)",
    hint: "Use `random.randint()`",
  },
  {
    id: "py_tuple_50",
    topicId: "py_tuple",
    question:
      "Find the most frequent element in tuple (1, 2, 2, 3, 3, 3, 4, 4, 4, 4) using max() with key.",
    mathSolution: "Use max() with tuple.count as key.",
    codeSolution:
      "numbers = (1, 2, 2, 3, 3, 3, 4, 4, 4, 4)\nmost_frequent = max(set(numbers), key=numbers.count)\nprint(most_frequent)  # 4",
    hint: "Use `max(set(tuple), key=tuple.count)`",
  },
);
