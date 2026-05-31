QuizData.questions.push(
  {
    id: 'py_var_1',
    topicId: 'py_var',
    question: 'What will be the output of `print(2 ** 3)`?',
    mathSolution: '2 raised to power 3 = 8',
    codeSolution: 'print(2 ** 3)  # 8',
    hint: '`**` is the exponentiation operator.'
  },
  {
    id: 'py_var_2',
    topicId: 'py_var',
    question: 'How do you swap two variables in Python?',
    mathSolution: 'Use tuple unpacking: a, b = b, a',
    codeSolution: 'a = 5; b = 10\na, b = b, a\nprint(a, b)  # 10 5',
    hint: 'Python evaluates the right-hand side first, then unpacks.'
  },
  {
    id: 'py_var_3',
    topicId: 'py_var',
    question: 'What is the data type of the variable `x` after `x = 3.14`?',
    mathSolution: 'float',
    codeSolution: 'x = 3.14\nprint(type(x))  # <class \'float\'>',
    hint: 'Any number with a decimal point is a float.'
  },
  {
    id: 'py_var_4',
    topicId: 'py_var',
    question: 'How do you convert the string "123" to an integer?',
    mathSolution: 'Use int(): int("123")',
    codeSolution: 's = "123"\nnum = int(s)\nprint(num)  # 123',
    hint: 'The `int()` function converts strings to integers if they contain digits.'
  },
  {
    id: 'py_var_5',
    topicId: 'py_var',
    question: 'What will be the output of `print(type(True))`?',
    mathSolution: '<class \'bool\'>',
    codeSolution: 'print(type(True))  # <class \'bool\'>',
    hint: 'True and False are booleans.'
  },
  {
    id: 'py_var_6',
    topicId: 'py_var',
    question: 'Which of the following variable names is invalid: `_myvar`, `2var`, `my_var`, `var2`?',
    mathSolution: '2var is invalid because it starts with a digit.',
    codeSolution: '# Valid: _myvar, my_var, var2\n# Invalid: 2var (syntax error)',
    hint: 'Variable names cannot start with a digit.'
  },
  {
    id: 'py_var_7',
    topicId: 'py_var',
    question: 'How do you assign the same value `10` to three variables `a`, `b`, `c` in one line?',
    mathSolution: 'Use chained assignment: a = b = c = 10',
    codeSolution: 'a = b = c = 10\nprint(a, b, c)  # 10 10 10',
    hint: 'All variables point to the same integer object.'
  },
  {
    id: 'py_var_8',
    topicId: 'py_var',
    question: 'What is the output of `x = 5; y = 2; print(x / y)`?',
    mathSolution: '2.5 (float division)',
    codeSolution: 'x = 5; y = 2; print(x / y)  # 2.5',
    hint: '`/` always returns a float in Python 3.'
  },
  {
    id: 'py_var_9',
    topicId: 'py_var',
    question: 'What is the result of `x = 5 // 2`?',
    mathSolution: '2 (integer division)',
    codeSolution: 'x = 5 // 2\nprint(x)  # 2',
    hint: '`//` performs floor division (integer division).'
  },
  {
    id: 'py_var_10',
    topicId: 'py_var',
    question: 'How do you check the memory address of a variable?',
    mathSolution: 'Use id() function',
    codeSolution: 'x = 10\nprint(id(x))  # e.g., 140736524987872',
    hint: '`id()` returns the unique identifier (memory address) of an object.'
  },
  {
    id: 'py_var_11',
    topicId: 'py_var',
    question: 'What will be the output of `x = 10; y = x; x = 20; print(y)`?',
    mathSolution: '10 (integers are immutable, y still refers to original 10)',
    codeSolution: 'x = 10\ny = x\nx = 20\nprint(y)  # 10',
    hint: 'Integers are immutable; reassigning x creates a new object.'
  },
  {
    id: 'py_var_12',
    topicId: 'py_var',
    question: 'What is the difference between `==` and `is`?',
    mathSolution: '== checks value equality, is checks identity (same object)',
    codeSolution: 'a = [1,2]; b = [1,2]\nprint(a == b)  # True\nprint(a is b)  # False',
    hint: '`==` compares content, `is` compares memory location.'
  },
  {
    id: 'py_var_13',
    topicId: 'py_var',
    question: 'How do you delete a variable?',
    mathSolution: 'Use del statement',
    codeSolution: 'x = 5\ndel x\n# print(x) would raise NameError',
    hint: '`del` removes the reference to an object.'
  },
  {
    id: 'py_var_14',
    topicId: 'py_var',
    question: 'What is the output of `x = None; print(x is None)`?',
    mathSolution: 'True',
    codeSolution: 'x = None\nprint(x is None)  # True',
    hint: '`None` is a singleton, so `is` works for comparison.'
  },
  {
    id: 'py_var_15',
    topicId: 'py_var',
    question: 'How do you create a constant variable in Python?',
    mathSolution: 'There is no built-in constant, but by convention use uppercase names.',
    codeSolution: 'PI = 3.14159  # Convention: treat as constant',
    hint: 'Uppercase names indicate a constant by convention.'
  },
  {
    id: 'py_var_16',
    topicId: 'py_var',
    question: 'What will be the output of `x = "5"; y = 2; print(x * y)`?',
    mathSolution: '"55" (string repetition)',
    codeSolution: 'x = "5"; y = 2; print(x * y)  # 55',
    hint: 'Multiplying a string repeats it.'
  },
  {
    id: 'py_var_17',
    topicId: 'py_var',
    question: 'How do you get the type of a variable?',
    mathSolution: 'Use type() function',
    codeSolution: 'var = 3.14\nprint(type(var))  # <class \'float\'>',
    hint: '`type()` returns the type of the object.'
  },
  {
    id: 'py_var_18',
    topicId: 'py_var',
    question: 'What is the output of `print(0.1 + 0.2 == 0.3)`?',
    mathSolution: 'False (due to floating point precision; 0.1 + 0.2 = 0.30000000000000004)',
    codeSolution: 'print(0.1 + 0.2 == 0.3)  # False',
    hint: 'Floating point arithmetic can have small precision errors.'
  },
  {
    id: 'py_var_19',
    topicId: 'py_var',
    question: 'How do you assign values to multiple variables from a list?',
    mathSolution: 'Use unpacking: a, b, c = [1, 2, 3]',
    codeSolution: 'lst = [1, 2, 3]\na, b, c = lst\nprint(a, b, c)  # 1 2 3',
    hint: 'The number of variables must match the list length.'
  },
  {
  id: 'py_var_20',
  topicId: 'py_var',
  question: 'How can you store and reuse the result of a previous calculation in a Python script?',
  mathSolution: 'Assign the result of an expression to a variable and reuse it later.',
  codeSolution: 'result = 5 + 3\nprint(result) #8\nprint(result * 2)#16',
  hint: 'Use variables to store intermediate results in scripts instead of `_`.'
},
  {
    id: 'py_var_21',
    topicId: 'py_var',
    question: 'How do you convert a float to an integer?',
    mathSolution: 'Use int() which truncates toward zero.',
    codeSolution: 'f = 3.9\ni = int(f)\nprint(i)  # 3',
    hint: '`int()` truncates decimal part, does not round.'
  },
  {
    id: 'py_var_22',
    topicId: 'py_var',
    question: 'What is the output of `x = 10; x += 5; print(x)`?',
    mathSolution: '15 (augmented assignment)',
    codeSolution: 'x = 10\nx += 5\nprint(x)  # 15',
    hint: '`+=` is shorthand for `x = x + 5`.'
  },
  {
    id: 'py_var_23',
    topicId: 'py_var',
    question: 'What will `bool(0)`, `bool(42)`, `bool("")`, `bool("Hello")` return?',
    mathSolution: 'False, True, False, True',
    codeSolution: 'print(bool(0), bool(42), bool(""), bool("Hello"))  # False True False True',
    hint: 'Zero, empty strings, None, empty collections are False.'
  },
  {
    id: 'py_var_24',
    topicId: 'py_var',
    question: 'How do you create a complex number?',
    mathSolution: 'Use j suffix: z = 3 + 4j',
    codeSolution: 'z = 3 + 4j\nprint(type(z))  # <class \'complex\'>',
    hint: 'The imaginary part uses `j` (not `i`).'
  },
  {
    id: 'py_var_25',
    topicId: 'py_var',
    question: 'What is the output of `x = 10; y = 20; x, y = y, x`?',
    mathSolution: 'Swaps values: x=20, y=10',
    codeSolution: 'x = 10; y = 20\nx, y = y, x\nprint(x, y)  # 20 10',
    hint: 'Tuple unpacking works even for swapping.'
  },
  {
    id: 'py_var_26',
    topicId: 'py_var',
    question: 'Can variable names start with an underscore?',
    mathSolution: 'Yes, e.g., _private, but it has special meaning in some contexts.',
    codeSolution: '_temp = 5  # valid',
    hint: 'Underscores are allowed, often used for "private" attributes.'
  },
  {
    id: 'py_var_27',
    topicId: 'py_var',
    question: 'What is the output of `print(10 / 3)` in Python 3?',
    mathSolution: '3.3333333333333335 (float division)',
    codeSolution: 'print(10 / 3)  # 3.3333333333333335',
    hint: '`/` always returns a float.'
  },
{
  id: 'py_var_28',
  topicId: 'py_var',
  question: 'How do you check if a variable is defined?',
  mathSolution: 'Check variable existence using try/except or by searching in locals() or globals() dictionaries.',
  codeSolution: 'try:\n    my_var\n    print("defined")\nexcept NameError:\n    print("not defined")\n\n# OR\nif "my_var" in locals() or "my_var" in globals():\n    print("defined")\nelse:\n    print("not defined")',
  hint: '`locals()` and `globals()` return dictionaries of current variable scopes.'
},
  {
    id: 'py_var_29',
    topicId: 'py_var',
    question: 'What is the result of `x = 5; y = 5; print(x is y)`?',
    mathSolution: 'True (small integers are cached)',
    codeSolution: 'x = 5; y = 5\nprint(x is y)  # True',
    hint: 'Python caches small integers (-5 to 256).'
  },
  {
    id: 'py_var_30',
    topicId: 'py_var',
    question: 'How do you create a variable that holds a function?',
    mathSolution: 'Assign function name without parentheses.',
    codeSolution: 'def greet():\n    return "Hello"\nmy_func = greet\nprint(my_func())  # Hello',
    hint: 'Functions are first-class objects and can be assigned.'
  },
  {
    id: 'py_var_31',
    topicId: 'py_var',
    question: 'What is the difference between global and local variables?',
    mathSolution: 'Global declared outside functions, local inside functions.',
    codeSolution: 'x = 10  # global\ndef func():\n    y = 5  # local\n    print(x, y)',
    hint: 'Local variables exist only inside the function.'
  },
  {
    id: 'py_var_32',
    topicId: 'py_var',
    question: 'How do you modify a global variable inside a function?',
    mathSolution: 'Use global keyword.',
    codeSolution: 'x = 10\ndef change():\n    global x\n    x = 20\nchange()\nprint(x)  # 20',
    hint: 'Without `global`, you would create a new local variable.'
  },
  {
    id: 'py_var_33',
    topicId: 'py_var',
    question: 'What will `a, *b, c = [1,2,3,4,5]` do?',
    mathSolution: 'a=1, b=[2,3,4], c=5 (extended unpacking)',
    codeSolution: 'a, *b, c = [1,2,3,4,5]\nprint(a, b, c)  # 1 [2, 3, 4] 5',
    hint: '`*b` collects the middle elements into a list.'
  },
  {
    id: 'py_var_34',
    topicId: 'py_var',
    question: 'What is the output of `x = "Hello"; x[0] = "h"`?',
    mathSolution: 'Error: strings are immutable',
    codeSolution: '# x[0] = "h" raises TypeError',
    hint: 'Strings cannot be modified in place.'
  },
  {
    id: 'py_var_35',
    topicId: 'py_var',
    question: 'How do you convert a number to a string?',
    mathSolution: 'Use str()',
    codeSolution: 'num = 123\ns = str(num)\nprint(s)  # "123"',
    hint: '`str()` converts to string representation.'
  },
  {
    id: 'py_var_36',
    topicId: 'py_var',
    question: 'What is the output of `print(10 ** 0.5)`?',
    mathSolution: '3.1622776601683795 (square root)',
    codeSolution: 'print(10 ** 0.5)  # 3.1622776601683795',
    hint: 'Raising to the power of 0.5 gives the square root.'
  },
  {
    id: 'py_var_37',
    topicId: 'py_var',
    question: 'How do you write a multi-line variable assignment?',
    mathSolution: 'Use backslash or parentheses.',
    codeSolution: 'total = (1 + 2 + 3 +\n         4 + 5)',
    hint: 'Parentheses allow line continuation.'
  },
  {
    id: 'py_var_38',
    topicId: 'py_var',
    question: 'What will `x = 3; y = 4; z = x ** 2 + y ** 2` compute?',
    mathSolution: '25 (3^2 + 4^2)',
    codeSolution: 'x = 3; y = 4; z = x**2 + y**2\nprint(z)  # 25',
    hint: 'It calculates the sum of squares (Pythagorean theorem).'
  },
  {
    id: 'py_var_39',
    topicId: 'py_var',
    question: 'What is the type of `x` after `x = 3 + 4j`?',
    mathSolution: 'complex',
    codeSolution: 'x = 3 + 4j\nprint(type(x))  # <class \'complex\'>',
    hint: 'Numbers with `j` are complex type.'
  },
  {
    id: 'py_var_40',
    topicId: 'py_var',
    question: 'How do you get the imaginary part of a complex number?',
    mathSolution: 'Use .imag attribute',
    codeSolution: 'z = 3 + 4j\nprint(z.imag)  # 4.0',
    hint: 'Complex numbers have `.real` and `.imag` attributes.'
  },
  {
    id: 'py_var_41',
    topicId: 'py_var',
    question: 'What is the output of `x = 256; y = 256; print(x is y)`?',
    mathSolution: 'True (Python caches small integers, -5 to 256)',
    codeSolution: 'x = 256; y = 256\nprint(x is y)  # True',
    hint: 'Integer caching applies to -5 through 256.'
  },
  {
    id: 'py_var_42',
    topicId: 'py_var',
    question: 'What is the output of `x = 257; y = 257; print(x is y)`?',
    mathSolution: 'False (beyond caching range of -5 to 256)',
    codeSolution: 'x = 257; y = 257\nprint(x is y)  # False',
    hint: 'Beyond 256, integers are not cached by default in CPython.'
  },
  {
  id: 'py_var_43',
  topicId: 'py_var',
  question: 'How do you create a variable with type hint?',
  mathSolution: 'Use colon syntax: name: type = value',
  codeSolution: 'age: int = 25\nname: str = "Alice"\n\nprint(age)\nprint(name)',
  hint: 'Type hints are optional and mainly used for readability and static type checking.'
},
  {
    id: 'py_var_44',
    topicId: 'py_var',
    question: 'What will happen if you try to use a variable before assigning it?',
    mathSolution: 'NameError is raised',
    codeSolution: '# print(x) would raise NameError if x not defined',
    hint: 'Python raises NameError for undefined variables.'
  },
  {
    id: 'py_var_45',
    topicId: 'py_var',
    question: 'How do you concatenate two strings assigned to variables?',
    mathSolution: 'Use + operator',
    codeSolution: 'first = "Hello"; second = "World"\nresult = first + " " + second\nprint(result)  # Hello World',
    hint: '`+` concatenates strings.'
  },
  {
    id: 'py_var_46',
    topicId: 'py_var',
    question: 'What is the output of `x = 5; y = 2; print(x % y)`?',
    mathSolution: '1 (modulo)',
    codeSolution: 'x = 5; y = 2; print(x % y)  # 1',
    hint: '`%` returns the remainder of division.'
  },
  {
    id: 'py_var_47',
    topicId: 'py_var',
    question: 'How do you round a float to two decimal places?',
    mathSolution: 'Use round(value, 2)',
    codeSolution: 'pi = 3.14159\nrounded = round(pi, 2)\nprint(rounded)  # 3.14',
    hint: '`round(number, ndigits)` rounds to specified digits.'
  },
  {
    id: 'py_var_48',
    topicId: 'py_var',
    question: 'What will `x = 10; y = 20; x, y = y, x + y` do?',
    mathSolution: 'x becomes 20, y becomes 30 (right side evaluated first)',
    codeSolution: 'x = 10; y = 20\nx, y = y, x + y\nprint(x, y)  # 20 30',
    hint: 'Right-hand side is evaluated completely before assignment.'
  },
  {
    id: 'py_var_49',
    topicId: 'py_var',
    question: 'What is the result of `x = int("3" * 2)`?',
    mathSolution: '33 (string "33" converted to int)',
    codeSolution: 'x = int("3" * 2)\nprint(x)  # 33',
    hint: '`"3" * 2` creates `"33"`, then `int()` converts it.'
  },
  {
    id: 'py_var_50',
    topicId: 'py_var',
    question: 'How do you find the absolute value of a number?',
    mathSolution: 'Use abs() function',
    codeSolution: 'num = -10\nprint(abs(num))  # 10',
    hint: '`abs()` returns the magnitude (non-negative value).'
  },
  {
  id: 'py_var_51',
  topicId: 'py_var',
  question: 'What is the output of `x = 0.0; print(x is 0.0)`?',
  mathSolution: 'It may be True or False depending on Python implementation, because `is` checks object identity, not value equality.',
  codeSolution: 'x = 0.0\nprint(x is 0.0)  # ⚠️ Implementation-dependent\n\n# Correct way to compare values\nprint(x == 0.0)  # ✅ True',
  hint: 'Use `==` for value comparison and `is` only for identity (e.g., None).'
},
  {
    id: 'py_var_52',
    topicId: 'py_var',
    question: 'How can you swap three variables cyclically (a->b, b->c, c->a)?',
    mathSolution: 'Use tuple unpacking: a, b, c = c, a, b',
    codeSolution: 'a=1; b=2; c=3\na, b, c = c, a, b\nprint(a,b,c)  # 3 1 2',
    hint: 'The right-hand side collects values before any assignment.'
  },
  {
    id: 'py_var_53',
    topicId: 'py_var',
    question: 'What does the `type(None)` return?',
    mathSolution: '<class \'NoneType\'>',
    codeSolution: 'print(type(None))  # <class \'NoneType\'>',
    hint: '`None` is its own type, `NoneType`.'
  },
  {
    id: 'py_var_54',
    topicId: 'py_var',
    question: 'How do you check if a variable is an integer?',
    mathSolution: 'Use isinstance(var, int)',
    codeSolution: 'x = 5\nprint(isinstance(x, int))  # True',
    hint: '`isinstance()` is preferred over `type() == int` for inheritance.'
  },
  {
    id: 'py_var_55',
    topicId: 'py_var',
    question: 'What is the result of `x = 10; x *= 2 + 3; print(x)`?',
    mathSolution: '50 (x = x * (2+3) = 10 * 5)',
    codeSolution: 'x = 10; x *= 2 + 3; print(x)  # 50',
    hint: 'Right side is evaluated first: `2+3` then `x = x * 5`.'
  },
  {
    id: 'py_var_56',
    topicId: 'py_var',
    question: 'Can you use Python keywords as variable names?',
    mathSolution: 'No, they are reserved. E.g., `if`, `for`, `while` cannot be used.',
    codeSolution: '# if = 5  # SyntaxError',
    hint: 'Keywords are reserved words in Python.'
  },
  {
    id: 'py_var_57',
    topicId: 'py_var',
    question: 'How do you convert a boolean to an integer?',
    mathSolution: 'int(True) -> 1, int(False) -> 0',
    codeSolution: 'print(int(True), int(False))  # 1 0',
    hint: 'Booleans are a subclass of integers; True=1, False=0.'
  },
  {
    id: 'py_var_58',
    topicId: 'py_var',
    question: 'What is the output of `x = 3.14; print(type(x).__name__)`?',
    mathSolution: 'float',
    codeSolution: 'x = 3.14; print(type(x).__name__)  # float',
    hint: '`__name__` gives the type name as a string.'
  },
  {
    id: 'py_var_59',
    topicId: 'py_var',
    question: 'How do you create a variable that holds multiple values (a tuple)?',
    mathSolution: 'Use parentheses: t = (1, 2, 3)',
    codeSolution: 't = (1, 2, 3)\nprint(t)  # (1, 2, 3)',
    hint: 'Tuples are immutable sequences enclosed in parentheses.'
  },
  {
    id: 'py_var_60',
    topicId: 'py_var',
    question: 'What will `x = "10"; y = 5; print(int(x) + y)` output?',
    mathSolution: '15 (after conversion)',
    codeSolution: 'x = "10"; y = 5; print(int(x) + y)  # 15',
    hint: 'Convert the string to int before addition.'
  }
);