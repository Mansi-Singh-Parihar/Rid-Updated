QuizData.questions.push({
    id: "py_dty_1",
    topicId: "py_dty",
    question: "Create an integer variable and print its type.",
    mathSolution: "Integer stores whole numbers",
    codeSolution: "x = 10\nprint(type(x))  # <class 'int'>",
    hint: "Use type() function"
},
{
    id: "py_dty_2",
    topicId: "py_dty",
    question: "Create a float variable and print its type.",
    mathSolution: "Float stores decimal numbers",
    codeSolution: "x = 10.5\nprint(type(x))  # <class 'float'>",
    hint: "Use decimal point"
},
{
    id: "py_dty_3",
    topicId: "py_dty",
    question: "Create a string variable and print its type.",
    mathSolution: "String stores text",
    codeSolution: "x = 'Hello'\nprint(type(x))  # <class 'str'>",
    hint: "Use quotes"
},
{
    id: "py_dty_4",
    topicId: "py_dty",
    question: "Create a boolean variable and print its type.",
    mathSolution: "Boolean stores True/False",
    codeSolution: "x = True\nprint(type(x))  # <class 'bool'>",
    hint: "Use True or False"
},
{
    id: "py_dty_5",
    topicId: "py_dty",
    question: "Convert integer 50 to float and print result.",
    mathSolution: "Use float() function",
    codeSolution: "num = 50\nresult = float(num)\nprint(result)  # 50.0\nprint(type(result))",
    hint: "float() converts to decimal"
},
{
    id: "py_dty_6",
    topicId: "py_dty",
    question: "Convert string '100' to integer and print.",
    mathSolution: "Use int() function",
    codeSolution: "s = '100'\nnum = int(s)\nprint(num)  # 100\nprint(type(num))",
    hint: "int() converts to whole number"
},
{
    id: "py_dty_7",
    topicId: "py_dty",
    question: "Convert float 7.8 to integer and print.",
    mathSolution: "int() truncates decimal part",
    codeSolution: "x = 7.8\nresult = int(x)\nprint(result)  # 7",
    hint: "int() removes decimal"
},
{
    id: "py_dty_8",
    topicId: "py_dty",
    question: "Convert integer 65 to string and print.",
    mathSolution: "Use str() function",
    codeSolution: "num = 65\nresult = str(num)\nprint(result)  # '65'\nprint(type(result))",
    hint: "str() converts to text"
},
{
    id: "py_dty_9",
    topicId: "py_dty",
    question: "Check if variable is integer using isinstance().",
    mathSolution: "isinstance() checks type",
    codeSolution: "x = 10\nresult = isinstance(x, int)\nprint(result)  # True",
    hint: "isinstance(obj, type)"
},
{
    id: "py_dty_10",
    topicId: "py_dty",
    question: "Create a list with integers and print it.",
    mathSolution: "List stores multiple items",
    codeSolution: "numbers = [1, 2, 3, 4, 5]\nprint(numbers)\nprint(type(numbers))",
    hint: "Use square brackets"
},
{
    id: "py_dty_11",
    topicId: "py_dty",
    question: "Create a tuple with three strings and print.",
    mathSolution: "Tuple is immutable sequence",
    codeSolution: "colors = ('red', 'green', 'blue')\nprint(colors)\nprint(type(colors))",
    hint: "Use parentheses"
},
{
    id: "py_dty_12",
    topicId: "py_dty",
    question: "Create a dictionary with name and age.",
    mathSolution: "Dictionary stores key-value pairs",
    codeSolution: "person = {'name': 'Alice', 'age': 25}\nprint(person)\nprint(type(person))",
    hint: "Use curly braces with colons"
},
{
    id: "py_dty_13",
    topicId: "py_dty",
    question: "Create a set of numbers 1,2,3,3 and print (duplicate removed).",
    mathSolution: "Set stores unique values",
    codeSolution: "numbers = {1, 2, 3, 3}\nprint(numbers)  # {1, 2, 3}",
    hint: "Sets remove duplicates"
},
{
    id: "py_dty_14",
    topicId: "py_dty",
    question: "Create a None variable and print its type.",
    mathSolution: "None represents no value",
    codeSolution: "x = None\nprint(type(x))  # <class 'NoneType'>",
    hint: "None is singleton"
},
{
    id: "py_dty_15",
    topicId: "py_dty",
    question: "Create a complex number 3+4j and print its real and imaginary parts.",
    mathSolution: "Complex has real and imaginary parts",
    codeSolution: "c = 3 + 4j\nprint(f'Real: {c.real}, Imaginary: {c.imag}')",
    hint: "Use .real and .imag"
},
{
    id: "py_dty_16",
    topicId: "py_dty",
    question: "Convert list [1,2,2,3,3,4] to set to remove duplicates.",
    mathSolution: "set() removes duplicates",
    codeSolution: "my_list = [1, 2, 2, 3, 3, 4]\nmy_set = set(my_list)\nprint(my_set)  # {1, 2, 3, 4}",
    hint: "set(list) removes duplicates"
},
{
    id: "py_dty_17",
    topicId: "py_dty",
    question: "Convert set {1,2,3} back to list.",
    mathSolution: "list() converts set to list",
    codeSolution: "my_set = {1, 2, 3}\nmy_list = list(my_set)\nprint(my_list)  # [1, 2, 3]",
    hint: "list(set) converts"
},
{
    id: "py_dty_18",
    topicId: "py_dty",
    question: "Create a range from 0 to 4 and convert to list.",
    mathSolution: "range generates sequence",
    codeSolution: "r = range(5)\nmy_list = list(r)\nprint(my_list)  # [0, 1, 2, 3, 4]",
    hint: "range(stop) gives 0 to stop-1"
},
{
    id: "py_dty_19",
    topicId: "py_dty",
    question: "Check if 'hello' is string type.",
    mathSolution: "isinstance() for type checking",
    codeSolution: "x = 'hello'\nresult = isinstance(x, str)\nprint(result)  # True",
    hint: "isinstance(x, str)"
},
{
    id: "py_dty_20",
    topicId: "py_dty",
    question: "Create a bytes object from string 'Python'.",
    mathSolution: "encode() converts string to bytes",
    codeSolution: "s = 'Python'\nb = s.encode()\nprint(b)  # b'Python'\nprint(type(b))",
    hint: "Use .encode()"
},
{
    id: "py_dty_21",
    topicId: "py_dty",
    question: "Convert bytes b'Hello' back to string.",
    mathSolution: "decode() converts bytes to string",
    codeSolution: "b = b'Hello'\ns = b.decode()\nprint(s)  # Hello\nprint(type(s))",
    hint: "Use .decode()"
},
{
    id: "py_dty_22",
    topicId: "py_dty",
    question: "Create an empty list and add three numbers.",
    mathSolution: "append() adds elements",
    codeSolution: "my_list = []\nmy_list.append(10)\nmy_list.append(20)\nmy_list.append(30)\nprint(my_list)  # [10, 20, 30]",
    hint: "Use append()"
},
{
    id: "py_dty_23",
    topicId: "py_dty",
    question: "Access second element from list [10,20,30,40].",
    mathSolution: "Indexing starts at 0",
    codeSolution: "my_list = [10, 20, 30, 40]\nprint(my_list[1])  # 20",
    hint: "Index 0 is first element"
},
{
    id: "py_dty_24",
    topicId: "py_dty",
    question: "Get value for key 'age' from dictionary {'name':'Bob','age':30}.",
    mathSolution: "Use square brackets with key",
    codeSolution: "person = {'name': 'Bob', 'age': 30}\nprint(person['age'])  # 30",
    hint: "dict[key] returns value"
},
{
    id: "py_dty_25",
    topicId: "py_dty",
    question: "Add new key 'city' to dictionary {'name':'Alice'}.",
    mathSolution: "Assign value to new key",
    codeSolution: "person = {'name': 'Alice'}\nperson['city'] = 'New York'\nprint(person)  # {'name': 'Alice', 'city': 'New York'}",
    hint: "dict[new_key] = value"
},
{
    id: "py_dty_26",
    topicId: "py_dty",
    question: "Check if 5 is present in set {1,2,3,4,5}.",
    mathSolution: "Use 'in' operator",
    codeSolution: "my_set = {1, 2, 3, 4, 5}\nprint(5 in my_set)  # True\nprint(10 in my_set)  # False",
    hint: "Use 'in' operator"
},
{
    id: "py_dty_27",
    topicId: "py_dty",
    question: "Get length of list [1,2,3,4,5].",
    mathSolution: "len() returns number of elements",
    codeSolution: "my_list = [1, 2, 3, 4, 5]\nprint(len(my_list))  # 5",
    hint: "Use len() function"
},
{
    id: "py_dty_28",
    topicId: "py_dty",
    question: "Convert integer 255 to binary string.",
    mathSolution: "bin() converts to binary",
    codeSolution: "num = 255\nprint(bin(num))  # 0b11111111",
    hint: "Use bin()"
},
{
    id: "py_dty_29",
    topicId: "py_dty",
    question: "Convert integer 255 to hexadecimal string.",
    mathSolution: "hex() converts to hexadecimal",
    codeSolution: "num = 255\nprint(hex(num))  # 0xff",
    hint: "Use hex()"
},
{
    id: "py_dty_30",
    topicId: "py_dty",
    question: "Check if variable is None.",
    mathSolution: "Use 'is' operator for None",
    codeSolution: "x = None\nprint(x is None)  # True\n\ny = 10\nprint(y is None)  # False",
    hint: "Use 'is None'"
},
{
    id: "py_dty_31",
    topicId: "py_dty",
    question: "Create a frozenset from list [1,2,2,3].",
    mathSolution: "frozenset creates immutable set",
    codeSolution: "my_list = [1, 2, 2, 3]\nfs = frozenset(my_list)\nprint(fs)  # frozenset({1, 2, 3})",
    hint: "frozenset() makes immutable set"
},
{
    id: "py_dty_32",
    topicId: "py_dty",
    question: "Print all keys from dictionary {'a':1,'b':2,'c':3}.",
    mathSolution: "keys() method returns keys",
    codeSolution: "d = {'a': 1, 'b': 2, 'c': 3}\nprint(list(d.keys()))  # ['a', 'b', 'c']",
    hint: "Use .keys()"
},
{
    id: "py_dty_33",
    topicId: "py_dty",
    question: "Print all values from dictionary {'x':10,'y':20}.",
    mathSolution: "values() method returns values",
    codeSolution: "d = {'x': 10, 'y': 20}\nprint(list(d.values()))  # [10, 20]",
    hint: "Use .values()"
},
{
    id: "py_dty_34",
    topicId: "py_dty",
    question: "Merge two lists [1,2] and [3,4] using + operator.",
    mathSolution: "+ concatenates lists",
    codeSolution: "list1 = [1, 2]\nlist2 = [3, 4]\nresult = list1 + list2\nprint(result)  # [1, 2, 3, 4]",
    hint: "Use + to concatenate"
},
{
    id: "py_dty_35",
    topicId: "py_dty",
    question: "Repeat list [1,2] three times using * operator.",
    mathSolution: "* repeats list",
    codeSolution: "my_list = [1, 2]\nresult = my_list * 3\nprint(result)  # [1, 2, 1, 2, 1, 2]",
    hint: "Use * for repetition"
},
{
    id: "py_dty_36",
    topicId: "py_dty",
    question: "Check if 'apple' is in tuple ('apple','banana','orange').",
    mathSolution: "Use 'in' operator",
    codeSolution: "fruits = ('apple', 'banana', 'orange')\nprint('apple' in fruits)  # True\nprint('grape' in fruits)  # False",
    hint: "Use 'in' to check membership"
},
{
    id: "py_dty_37",
    topicId: "py_dty",
    question: "Get last element of list [10,20,30,40] using negative index.",
    mathSolution: "Index -1 gives last element",
    codeSolution: "my_list = [10, 20, 30, 40]\nprint(my_list[-1])  # 40\nprint(my_list[-2])  # 30",
    hint: "Use -1 for last element"
},
{
    id: "py_dty_38",
    topicId: "py_dty",
    question: "Get slice of list [1,2,3,4,5] from index 1 to 3.",
    mathSolution: "list[start:end] extracts slice",
    codeSolution: "my_list = [1, 2, 3, 4, 5]\nresult = my_list[1:4]\nprint(result)  # [2, 3, 4]",
    hint: "slice end index is exclusive"
},
{
    id: "py_dty_39",
    topicId: "py_dty",
    question: "Remove duplicate from string 'hello' using set.",
    mathSolution: "set() removes duplicate characters",
    codeSolution: "s = 'hello'\nunique = set(s)\nprint(unique)  # {'h', 'e', 'l', 'o'}",
    hint: "Convert string to set"
},
{
    id: "py_dty_40",
    topicId: "py_dty",
    question: "Check data type of variable without printing type name.",
    mathSolution: "Use __name__ attribute",
    codeSolution: "x = 42\ny = 'text'\nz = [1, 2]\n\nprint(type(x).__name__)  # int\nprint(type(y).__name__)  # str\nprint(type(z).__name__)  # list",
    hint: "type(x).__name__ gives type as string"
}
);