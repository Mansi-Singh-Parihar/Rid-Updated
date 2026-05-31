QuizData.questions.push(
  {
    id: 'py_dict_1',
    topicId: 'py_dict',
    question: 'Create an empty dictionary named "my_dict".',
    mathSolution: 'Initialize an empty dictionary using curly braces.',
    codeSolution: 'my_dict = {}\nprint(f"Empty dictionary: {my_dict}")',
    hint: 'Use {} to create empty dictionary'
  },
  {
    id: 'py_dict_2',
    topicId: 'py_dict',
    question: 'Create a dictionary with keys "name", "age", "city" and values "John", 25, "New York".',
    mathSolution: 'Dictionary with string keys and mixed value types.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nprint(f"Person: {person}")',
    hint: 'Use {key: value, key: value} syntax'
  },
  {
    id: 'py_dict_3',
    topicId: 'py_dict',
    question: 'Create a dictionary using dict() constructor with keyword arguments.',
    mathSolution: 'Use dict() with key=value pairs (keys become strings).',
    codeSolution: 'person = dict(name="John", age=25, city="New York")\nprint(f"Person: {person}")',
    hint: 'dict(key=value, key=value)'
  },
  {
    id: 'py_dict_4',
    topicId: 'py_dict',
    question: 'Create a dictionary from a list of tuples [("a",1), ("b",2)].',
    mathSolution: 'Convert list of key-value pairs to dictionary.',
    codeSolution: 'pairs = [("a", 1), ("b", 2)]\nmy_dict = dict(pairs)\nprint(f"Dictionary from tuples: {my_dict}")',
    hint: 'dict() accepts list of tuples'
  },
  {
    id: 'py_dict_5',
    topicId: 'py_dict',
    question: 'Access the value of key "name" from dictionary {"name": "John", "age": 25}.',
    mathSolution: 'Use square bracket notation with the key.',
    codeSolution: 'person = {"name": "John", "age": 25}\nname = person["name"]\nprint(f"Name: {name}")',
    hint: 'dictionary[key] returns value'
  },
  {
    id: 'py_dict_6',
    topicId: 'py_dict',
    question: 'Access the value of key "city" using get() method with default "Unknown".',
    mathSolution: 'get() returns default if key not found instead of KeyError.',
    codeSolution: 'person = {"name": "John", "age": 25}\ncity = person.get("city", "Unknown")\nprint(f"City: {city}")',
    hint: 'get(key, default) avoids KeyError'
  },
  {
    id: 'py_dict_7',
    topicId: 'py_dict',
    question: 'Add a new key "email" with value "john@example.com" to an existing dictionary.',
    mathSolution: 'Assign value to new key using assignment operator.',
    codeSolution: 'person = {"name": "John", "age": 25}\nperson["email"] = "john@example.com"\nprint(f"Updated dict: {person}")',
    hint: 'dict[new_key] = value'
  },
  {
    id: 'py_dict_8',
    topicId: 'py_dict',
    question: 'Update the value of key "age" to 26 in dictionary.',
    mathSolution: 'Reassign new value to existing key.',
    codeSolution: 'person = {"name": "John", "age": 25}\nperson["age"] = 26\nprint(f"Updated age: {person}")',
    hint: 'dict[existing_key] = new_value'
  },
  {
    id: 'py_dict_9',
    topicId: 'py_dict',
    question: 'Delete key "city" from dictionary using del statement.',
    mathSolution: 'Use del keyword with the key to remove.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\ndel person["city"]\nprint(f"After deletion: {person}")',
    hint: 'del dict[key]'
  },
  {
    id: 'py_dict_10',
    topicId: 'py_dict',
    question: 'Remove key "age" using pop() method and store its value.',
    mathSolution: 'pop() removes key and returns its value.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nage = person.pop("age")\nprint(f"Removed age: {age}, Dict: {person}")',
    hint: 'pop(key) returns removed value'
  },
  {
    id: 'py_dict_11',
    topicId: 'py_dict',
    question: 'Remove and return the last inserted key-value pair using popitem().',
    mathSolution: 'popitem() removes and returns (key, value) pair (LIFO order).',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nitem = person.popitem()\nprint(f"Removed item: {item}, Dict: {person}")',
    hint: 'popitem() returns (key, value)'
  },
  {
    id: 'py_dict_12',
    topicId: 'py_dict',
    question: 'Check if key "name" exists in dictionary using in operator.',
    mathSolution: 'in operator returns True if key exists.',
    codeSolution: 'person = {"name": "John", "age": 25}\nexists = "name" in person\nprint(f"Key \'name\' exists: {exists}")',
    hint: 'use "key" in dict'
  },
  {
    id: 'py_dict_13',
    topicId: 'py_dict',
    question: 'Get all keys from dictionary using keys() method.',
    mathSolution: 'keys() returns a view of all keys.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nkeys = person.keys()\nprint(f"Keys: {list(keys)}")',
    hint: 'dict.keys() returns keys view'
  },
  {
    id: 'py_dict_14',
    topicId: 'py_dict',
    question: 'Get all values from dictionary using values() method.',
    mathSolution: 'values() returns a view of all values.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nvalues = person.values()\nprint(f"Values: {list(values)}")',
    hint: 'dict.values() returns values view'
  },
  {
    id: 'py_dict_15',
    topicId: 'py_dict',
    question: 'Get all key-value pairs as tuples using items() method.',
    mathSolution: 'items() returns view of (key, value) tuples.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nitems = person.items()\nprint(f"Items: {list(items)}")',
    hint: 'dict.items() returns (key, value) pairs'
  },
  {
    id: 'py_dict_16',
    topicId: 'py_dict',
    question: 'Iterate through dictionary and print each key and value.',
    mathSolution: 'Use for loop with items() to get both key and value.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nfor key, value in person.items():\n    print(f"{key}: {value}")',
    hint: 'for key, value in dict.items():'
  },
  {
    id: 'py_dict_17',
    topicId: 'py_dict',
    question: 'Get the length (number of keys) of a dictionary.',
    mathSolution: 'len() returns number of key-value pairs.',
    codeSolution: 'person = {"name": "John", "age": 25, "city": "New York"}\nlength = len(person)\nprint(f"Dictionary length: {length}")',
    hint: 'len(dict) returns item count'
  },
  {
    id: 'py_dict_18',
    topicId: 'py_dict',
    question: 'Clear all items from a dictionary using clear() method.',
    mathSolution: 'clear() removes all key-value pairs.',
    codeSolution: 'person = {"name": "John", "age": 25}\nperson.clear()\nprint(f"After clear: {person}")',
    hint: 'dict.clear() empties dictionary'
  },
  {
    id: 'py_dict_19',
    topicId: 'py_dict',
    question: 'Create a copy of a dictionary using copy() method.',
    mathSolution: 'copy() creates shallow copy.',
    codeSolution: 'original = {"name": "John", "age": 25}\nnew_dict = original.copy()\nprint(f"Original: {original}, Copy: {new_dict}")',
    hint: 'dict.copy() creates shallow copy'
  },
  {
    id: 'py_dict_20',
    topicId: 'py_dict',
    question: 'Merge two dictionaries using update() method.',
    mathSolution: 'update() adds/updates key-value pairs from another dict.',
    codeSolution: 'dict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\ndict1.update(dict2)\nprint(f"Merged dict: {dict1}")',
    hint: 'dict1.update(dict2)'
  },
  {
    id: 'py_dict_21',
    topicId: 'py_dict',
    question: 'Merge two dictionaries using | operator (Python 3.9+).',
    mathSolution: '| creates new merged dictionary.',
    codeSolution: 'dict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\nmerged = dict1 | dict2\nprint(f"Merged: {merged}")',
    hint: 'dict1 | dict2'
  },
  {
    id: 'py_dict_22',
    topicId: 'py_dict',
    question: 'Update dictionary with another dict, overwriting existing keys using |= (Python 3.9+).',
    mathSolution: '|= updates dict in-place with another dict.',
    codeSolution: 'dict1 = {"a": 1, "b": 2}\ndict2 = {"b": 10, "c": 3}\ndict1 |= dict2\nprint(f"Updated dict: {dict1}")',
    hint: 'dict1 |= dict2'
  },
  {
    id: 'py_dict_23',
    topicId: 'py_dict',
    question: 'Set default value for key "phone" if not exists using setdefault().',
    mathSolution: 'setdefault() returns value if key exists, else sets and returns default.',
    codeSolution: 'person = {"name": "John", "age": 25}\nphone = person.setdefault("phone", "123-4567")\nprint(f"Phone: {phone}, Dict: {person}")',
    hint: 'setdefault(key, default)'
  },
  {
    id: 'py_dict_24',
    topicId: 'py_dict',
    question: 'Create dictionary from two lists: keys ["a","b","c"] and values [1,2,3] using zip().',
    mathSolution: 'zip() pairs keys and values, dict() creates dictionary.',
    codeSolution: 'keys = ["a", "b", "c"]\nvalues = [1, 2, 3]\nmy_dict = dict(zip(keys, values))\nprint(f"Dictionary from lists: {my_dict}")',
    hint: 'dict(zip(keys, values))'
  },
  {
    id: 'py_dict_25',
    topicId: 'py_dict',
    question: 'Create a dictionary comprehension for numbers 1-5 as keys and their squares as values.',
    mathSolution: '{key: value for key in iterable}',
    codeSolution: 'squares = {x: x**2 for x in range(1, 6)}\nprint(f"Squares dictionary: {squares}")',
    hint: '{k: v for k in iterable}'
  },
  {
    id: 'py_dict_26',
    topicId: 'py_dict',
    question: 'Create dictionary comprehension with condition for even numbers only.',
    mathSolution: 'Add if condition after for loop.',
    codeSolution: 'even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}\nprint(f"Even squares: {even_squares}")',
    hint: 'add if condition at the end'
  },
  {
    id: 'py_dict_27',
    topicId: 'py_dict',
    question: 'Invert a dictionary {1:"a", 2:"b"} to {"a":1, "b":2} using comprehension.',
    mathSolution: 'Swap keys and values.',
    codeSolution: 'original = {1: "a", 2: "b", 3: "c"}\ninverted = {v: k for k, v in original.items()}\nprint(f"Inverted dict: {inverted}")',
    hint: '{v: k for k, v in dict.items()}'
  },
  {
    id: 'py_dict_28',
    topicId: 'py_dict',
    question: 'Count frequency of characters in string "hello" using dictionary.',
    mathSolution: 'Iterate string, increment count for each character.',
    codeSolution: 'text = "hello"\nfreq = {}\nfor char in text:\n    freq[char] = freq.get(char, 0) + 1\nprint(f"Character frequency: {freq}")',
    hint: 'Use get() with default 0'
  },
  {
    id: 'py_dict_29',
    topicId: 'py_dict',
    question: 'Count frequency of words in sentence using dictionary.',
    mathSolution: 'Split sentence into words, count each word.',
    codeSolution: 'sentence = "the cat and the dog and the bird"\nwords = sentence.split()\nword_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\nprint(f"Word frequency: {word_count}")',
    hint: 'split() and dictionary'
  },
  {
    id: 'py_dict_30',
    topicId: 'py_dict',
    question: 'Use defaultdict from collections to count letters automatically.',
    mathSolution: 'defaultdict provides default value for missing keys.',
    codeSolution: 'from collections import defaultdict\nword_count = defaultdict(int)\nwords = ["apple", "banana", "apple", "cherry"]\nfor word in words:\n    word_count[word] += 1\nprint(f"Defaultdict count: {dict(word_count)}")',
    hint: 'defaultdict(int) initializes missing keys to 0'
  },
  {
    id: 'py_dict_31',
    topicId: 'py_dict',
    question: 'Use defaultdict with list to group items.',
    mathSolution: 'defaultdict(list) creates empty list for missing keys.',
    codeSolution: 'from collections import defaultdict\nby_age = defaultdict(list)\npeople = [("John", 25), ("Jane", 25), ("Bob", 30)]\nfor name, age in people:\n    by_age[age].append(name)\nprint(f"Grouped by age: {dict(by_age)}")',
    hint: 'defaultdict(list) for grouping'
  },
  {
    id: 'py_dict_32',
    topicId: 'py_dict',
    question: 'Use Counter from collections to count elements in list.',
    mathSolution: 'Counter automatically counts frequencies.',
    codeSolution: 'from collections import Counter\nitems = ["a", "b", "c", "a", "b", "a"]\ncounter = Counter(items)\nprint(f"Counter: {counter}")',
    hint: 'Counter(iterable)'
  },
  {
    id: 'py_dict_33',
    topicId: 'py_dict',
    question: 'Get most common elements from Counter (top 2).',
    mathSolution: 'most_common() returns list of (element, count) sorted.',
    codeSolution: 'from collections import Counter\nitems = ["a", "b", "c", "a", "b", "a"]\ncounter = Counter(items)\nmost_common = counter.most_common(2)\nprint(f"Most common: {most_common}")',
    hint: 'counter.most_common(n)'
  },
  {
    id: 'py_dict_34',
    topicId: 'py_dict',
    question: 'Create OrderedDict that maintains insertion order.',
    mathSolution: 'OrderedDict remembers order keys were added.',
    codeSolution: 'from collections import OrderedDict\nod = OrderedDict()\nod["banana"] = 3\nod["apple"] = 5\nod["orange"] = 2\nprint(f"OrderedDict: {list(od.items())}")',
    hint: 'OrderedDict preserves insertion order'
  },
  {
    id: 'py_dict_35',
    topicId: 'py_dict',
    question: 'Sort dictionary by keys and create new ordered dictionary.',
    mathSolution: 'Use sorted() on dict items and convert to OrderedDict.',
    codeSolution: 'from collections import OrderedDict\nmy_dict = {"banana": 3, "apple": 5, "orange": 2}\nsorted_by_key = OrderedDict(sorted(my_dict.items()))\nprint(f"Sorted by key: {sorted_by_key}")',
    hint: 'OrderedDict(sorted(dict.items()))'
  },
  {
    id: 'py_dict_36',
    topicId: 'py_dict',
    question: 'Sort dictionary by values in descending order.',
    mathSolution: 'Use sorted() with key=lambda item: item[1], reverse=True.',
    codeSolution: 'from collections import OrderedDict\nmy_dict = {"banana": 3, "apple": 5, "orange": 2}\nsorted_by_value = OrderedDict(sorted(my_dict.items(), key=lambda x: x[1], reverse=True))\nprint(f"Sorted by value desc: {sorted_by_value}")',
    hint: 'key=lambda x: x[1] for values'
  },
  {
    id: 'py_dict_37',
    topicId: 'py_dict',
    question: 'Convert two lists into nested dictionary: {a: {b: c}} using zip and dict comprehension.',
    mathSolution: 'Nested comprehension for hierarchical mapping.',
    codeSolution: 'keys = ["x", "y"]\nsubkeys = ["p", "q"]\nvalues = [[1, 2], [3, 4]]\nnested = {k: {sk: v for sk, v in zip(subkeys, vals)} for k, vals in zip(keys, values)}\nprint(f"Nested dict: {nested}")',
    hint: 'Nested dictionary comprehension'
  },
  {
    id: 'py_dict_38',
    topicId: 'py_dict',
    question: 'Merge two dictionaries with common keys, summing values using dict comprehension.',
    mathSolution: 'Use union of keys and sum values from both.',
    codeSolution: 'dict1 = {"a": 1, "b": 2, "c": 3}\ndict2 = {"b": 4, "c": 5, "d": 6}\nmerged = {k: dict1.get(k, 0) + dict2.get(k, 0) for k in set(dict1) | set(dict2)}\nprint(f"Merged with sum: {merged}")',
    hint: 'set union for all keys'
  },
  {
    id: 'py_dict_39',
    topicId: 'py_dict',
    question: 'Filter dictionary to keep only items with value > 10.',
    mathSolution: 'Dictionary comprehension with condition.',
    codeSolution: 'scores = {"John": 85, "Jane": 92, "Bob": 78, "Alice": 95}\nhigh_scores = {k: v for k, v in scores.items() if v > 90}\nprint(f"High scores: {high_scores}")',
    hint: 'if condition in comprehension'
  },
  {
    id: 'py_dict_40',
    topicId: 'py_dict',
    question: 'Apply function (square) to all values in dictionary.',
    mathSolution: 'Transform values using comprehension.',
    codeSolution: 'numbers = {"a": 1, "b": 2, "c": 3}\nsquared = {k: v**2 for k, v in numbers.items()}\nprint(f"Squared values: {squared}")',
    hint: '{k: func(v) for k, v in dict.items()}'
  },
  {
    id: 'py_dict_41',
    topicId: 'py_dict',
    question: 'Swap keys and values in dictionary with duplicate value handling (list of keys).',
    mathSolution: 'Use defaultdict(list) to collect multiple keys for same value.',
    codeSolution: 'original = {"a": 1, "b": 2, "c": 1}\ninverted = {}\nfor k, v in original.items():\n    if v not in inverted:\n        inverted[v] = [k]\n    else:\n        inverted[v].append(k)\nprint(f"Inverted with duplicates: {inverted}")',
    hint: 'Handle duplicate values with list'
  },
  {
    id: 'py_dict_42',
    topicId: 'py_dict',
    question: 'Create dictionary using dict.fromkeys() with default value 0 for keys ["a","b","c"].',
    mathSolution: 'fromkeys() creates new dict with specified keys and common value.',
    codeSolution: 'keys = ["a", "b", "c"]\nmy_dict = dict.fromkeys(keys, 0)\nprint(f"Fromkeys dict: {my_dict}")',
    hint: 'dict.fromkeys(keys, default_value)'
  },
  {
    id: 'py_dict_43',
    topicId: 'py_dict',
    question: 'Get value with default using get() when key may not exist.',
    mathSolution: 'get() returns None or default if key missing instead of KeyError.',
    codeSolution: 'person = {"name": "John"}\nage = person.get("age", "Not provided")\nprint(f"Age: {age}")',
    hint: 'get(key, default) safe access'
  },
  
);