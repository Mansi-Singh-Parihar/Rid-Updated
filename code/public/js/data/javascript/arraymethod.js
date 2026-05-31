QuizData.questions.push(
{
  id: 'js_array_methods_1',
  topicId: 'js_array_methods',
  question: 'Use push() method to add element to end of array.',
  mathSolution: 'push() adds element and returns new length.',
  codeSolution: 'const fruits = ["apple", "banana"];\nconst newLength = fruits.push("orange");\nconsole.log(fruits);     // ["apple", "banana", "orange"]\nconsole.log(newLength);  // 3',
  hint: 'push() modifies original array, returns new length.'
},
{
  id: 'js_array_methods_2',
  topicId: 'js_array_methods',
  question: 'Use pop() method to remove last element from array.',
  mathSolution: 'pop() removes last element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.pop();\nconsole.log(removed);  // orange\nconsole.log(fruits);   // ["apple", "banana"]',
  hint: 'pop() removes from end, returns removed element.'
},
{
  id: 'js_array_methods_3',
  topicId: 'js_array_methods',
  question: 'Use unshift() method to add element to beginning of array.',
  mathSolution: 'unshift() adds to start, returns new length.',
  codeSolution: 'const fruits = ["banana", "orange"];\nconst newLength = fruits.unshift("apple");\nconsole.log(fruits);     // ["apple", "banana", "orange"]\nconsole.log(newLength);  // 3',
  hint: 'unshift() adds to beginning, modifies original.'
},
{
  id: 'js_array_methods_4',
  topicId: 'js_array_methods',
  question: 'Use shift() method to remove first element from array.',
  mathSolution: 'shift() removes first element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.shift();\nconsole.log(removed);  // apple\nconsole.log(fruits);   // ["banana", "orange"]',
  hint: 'shift() removes from beginning, returns removed element.'
},
{
  id: 'js_array_methods_5',
  topicId: 'js_array_methods',
  question: 'Use map() method to create new array with transformed values.',
  mathSolution: 'map() returns new array with results of callback.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]\nconsole.log(numbers);  // [1, 2, 3, 4] (unchanged)',
  hint: 'map() creates new array, doesn\'t modify original.'
},
{
  id: 'js_array_methods_6',
  topicId: 'js_array_methods',
  question: 'Use filter() method to create array with elements passing test.',
  mathSolution: 'filter() returns new array with elements where callback returns true.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'filter() keeps elements where callback returns true.'
},
{
  id: 'js_array_methods_7',
  topicId: 'js_array_methods',
  question: 'Use reduce() method to accumulate array values.',
  mathSolution: 'reduce() accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: 'reduce() takes accumulator and current value.'
},
{
  id: 'js_array_methods_8',
  topicId: 'js_array_methods',
  question: 'Use reduceRight() method to accumulate from right to left.',
  mathSolution: 'reduceRight() reduces from rightmost element.',
  codeSolution: 'const words = ["world", " ", "hello"];\nconst sentence = words.reduceRight((acc, word) => acc + word, "");\nconsole.log(sentence);  // "hello world"',
  hint: 'reduceRight() works like reduce() but from right to left.'
},
{
  id: 'js_array_methods_9',
  topicId: 'js_array_methods',
  question: 'Use forEach() method to iterate over array elements.',
  mathSolution: 'forEach() executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach((fruit, index) => {\n    console.log(`${index}: ${fruit}`);\n});\n// 0: apple\n// 1: banana\n// 2: orange',
  hint: 'forEach() doesn\'t return anything, just iterates.'
},
{
  id: 'js_array_methods_10',
  topicId: 'js_array_methods',
  question: 'Use find() method to get first element matching condition.',
  mathSolution: 'find() returns first element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: 'find() returns element, not index.'
},
{
  id: 'js_array_methods_11',
  topicId: 'js_array_methods',
  question: 'Use findIndex() method to get index of first matching element.',
  mathSolution: 'findIndex() returns index of first element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findIndex(n => n > 10);\nconsole.log(index);  // 1',
  hint: 'findIndex() returns index or -1 if not found.'
},
{
  id: 'js_array_methods_12',
  topicId: 'js_array_methods',
  question: 'Use findLast() method to get last element matching condition.',
  mathSolution: 'findLast() returns last element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.findLast(n => n > 10);\nconsole.log(found);  // 44',
  hint: 'findLast() searches from end of array.'
},
{
  id: 'js_array_methods_13',
  topicId: 'js_array_methods',
  question: 'Use findLastIndex() method to get index of last matching element.',
  mathSolution: 'findLastIndex() returns last index where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findLastIndex(n => n > 10);\nconsole.log(index);  // 4',
  hint: 'findLastIndex() searches from end, returns index.'
},
{
  id: 'js_array_methods_14',
  topicId: 'js_array_methods',
  question: 'Use some() method to check if any element passes test.',
  mathSolution: 'some() returns true if callback returns true for any element.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true\n\nconst allOdd = numbers.some(n => n % 2 !== 0);\nconsole.log(allOdd);  // true',
  hint: 'some() returns boolean, stops on first true.'
},
{
  id: 'js_array_methods_15',
  topicId: 'js_array_methods',
  question: 'Use every() method to check if all elements pass test.',
  mathSolution: 'every() returns true only if callback returns true for all elements.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true\n\nconst mixed = [2, 4, 5, 8];\nconsole.log(mixed.every(n => n % 2 === 0));  // false',
  hint: 'every() returns false as soon as one fails.'
},
{
  id: 'js_array_methods_16',
  topicId: 'js_array_methods',
  question: 'Use includes() method to check if array contains value.',
  mathSolution: 'includes() returns true if value exists in array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));   // false',
  hint: 'includes() uses strict equality (===).'
},
{
  id: 'js_array_methods_17',
  topicId: 'js_array_methods',
  question: 'Use indexOf() method to find first index of value.',
  mathSolution: 'indexOf() returns first index or -1 if not found.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "banana"];\nconsole.log(fruits.indexOf("banana"));  // 1\nconsole.log(fruits.indexOf("grape"));   // -1',
  hint: 'indexOf() searches from start.'
},
{
  id: 'js_array_methods_18',
  topicId: 'js_array_methods',
  question: 'Use lastIndexOf() method to find last index of value.',
  mathSolution: 'lastIndexOf() returns last index or -1.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "banana"];\nconsole.log(fruits.lastIndexOf("banana"));  // 3\nconsole.log(fruits.lastIndexOf("grape"));    // -1',
  hint: 'lastIndexOf() searches from end.'
},
{
  id: 'js_array_methods_19',
  topicId: 'js_array_methods',
  question: 'Use sort() method to sort array alphabetically.',
  mathSolution: 'sort() sorts strings lexicographically by default.',
  codeSolution: 'const fruits = ["banana", "apple", "orange", "grape"];\nfruits.sort();\nconsole.log(fruits);  // ["apple", "banana", "grape", "orange"]',
  hint: 'sort() modifies original array.'
},
{
  id: 'js_array_methods_20',
  topicId: 'js_array_methods',
  question: 'Use sort() with compare function to sort numbers ascending.',
  mathSolution: 'compare function (a,b) => a - b sorts numbers ascending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);  // [2, 5, 10, 35, 80]',
  hint: 'Return negative if a < b, positive if a > b.'
},
{
  id: 'js_array_methods_21',
  topicId: 'js_array_methods',
  question: 'Use sort() with compare function to sort numbers descending.',
  mathSolution: 'compare function (a,b) => b - a sorts descending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => b - a);\nconsole.log(numbers);  // [80, 35, 10, 5, 2]',
  hint: 'Return b - a for descending order.'
},
{
  id: 'js_array_methods_22',
  topicId: 'js_array_methods',
  question: 'Use reverse() method to reverse array order.',
  mathSolution: 'reverse() reverses array in place.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nnumbers.reverse();\nconsole.log(numbers);  // [5, 4, 3, 2, 1]',
  hint: 'reverse() modifies original array.'
},
{
  id: 'js_array_methods_23',
  topicId: 'js_array_methods',
  question: 'Use slice() method to extract portion of array.',
  mathSolution: 'slice(start, end) returns new array without modifying original.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango", "grape"];\nconst citrus = fruits.slice(1, 4);\nconsole.log(citrus);  // ["banana", "orange", "mango"]\nconsole.log(fruits);  // Original unchanged',
  hint: 'slice() doesn\'t modify original array.'
},
{
  id: 'js_array_methods_24',
  topicId: 'js_array_methods',
  question: 'Use slice() with negative indexes.',
  mathSolution: 'Negative index counts from end.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst lastTwo = fruits.slice(-2);\nconsole.log(lastTwo);  // ["orange", "mango"]\nconst withoutLast = fruits.slice(0, -1);\nconsole.log(withoutLast);  // ["apple", "banana", "orange"]',
  hint: '-1 is last element, -2 is second last.'
},
{
  id: 'js_array_methods_25',
  topicId: 'js_array_methods',
  question: 'Use splice() method to remove elements at specific index.',
  mathSolution: 'splice(start, deleteCount) removes elements and returns them.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst removed = fruits.splice(1, 2);\nconsole.log(removed);  // ["banana", "orange"]\nconsole.log(fruits);   // ["apple", "mango"]',
  hint: 'splice() modifies original array.'
},
{
  id: 'js_array_methods_26',
  topicId: 'js_array_methods',
  question: 'Use splice() to insert elements at specific index.',
  mathSolution: 'splice(start, 0, ...items) inserts without removing.',
  codeSolution: 'const fruits = ["apple", "mango"];\nfruits.splice(1, 0, "banana", "orange");\nconsole.log(fruits);  // ["apple", "banana", "orange", "mango"]',
  hint: 'Set deleteCount to 0 for insertion only.'
},
{
  id: 'js_array_methods_27',
  topicId: 'js_array_methods',
  question: 'Use splice() to replace elements at specific index.',
  mathSolution: 'splice(start, deleteCount, ...items) replaces elements.',
  codeSolution: 'const fruits = ["apple", "banana", "grape", "mango"];\nfruits.splice(2, 1, "orange", "kiwi");\nconsole.log(fruits);  // ["apple", "banana", "orange", "kiwi", "mango"]',
  hint: 'Replace deleteCount elements with new items.'
},
{
  id: 'js_array_methods_28',
  topicId: 'js_array_methods',
  question: 'Use concat() method to merge arrays.',
  mathSolution: 'concat() returns new array combining arrays.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = arr1.concat(arr2);\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: 'concat() doesn\'t modify original arrays.'
},
{
  id: 'js_array_methods_29',
  topicId: 'js_array_methods',
  question: 'Use join() method to convert array to string.',
  mathSolution: 'join(separator) combines elements with separator.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.join(", "));  // "apple, banana, orange"\nconsole.log(fruits.join("-"));   // "apple-banana-orange"',
  hint: 'join() returns string, default separator is comma.'
},
{
  id: 'js_array_methods_30',
  topicId: 'js_array_methods',
  question: 'Use split() method (string method) to convert string to array.',
  mathSolution: 'split() divides string into array based on separator.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'split() is string method that returns array.'
},
{
  id: 'js_array_methods_31',
  topicId: 'js_array_methods',
  question: 'Use flat() method to flatten nested array one level.',
  mathSolution: 'flat(depth) concatenates sub-arrays.',
  codeSolution: 'const nested = [1, [2, 3], [4, [5, 6]]];\nconst flatOnce = nested.flat();\nconsole.log(flatOnce);  // [1, 2, 3, 4, [5, 6]]',
  hint: 'flat() returns new array, default depth is 1.'
},
{
  id: 'js_array_methods_32',
  topicId: 'js_array_methods',
  question: 'Use flat() with Infinity to flatten completely.',
  mathSolution: 'flat(Infinity) flattens all nested arrays.',
  codeSolution: 'const nested = [1, [2, [3, [4, [5]]]]];\nconst flatAll = nested.flat(Infinity);\nconsole.log(flatAll);  // [1, 2, 3, 4, 5]',
  hint: 'Use Infinity for unlimited depth.'
},
{
  id: 'js_array_methods_33',
  topicId: 'js_array_methods',
  question: 'Use flatMap() method to map and flatten (one level).',
  mathSolution: 'flatMap() is map() followed by flat() of depth 1.',
  codeSolution: 'const sentences = ["Hello world", "Good morning"];\nconst words = sentences.flatMap(s => s.split(" "));\nconsole.log(words);  // ["Hello", "world", "Good", "morning"]\n\n// Equivalent to: sentences.map(s => s.split(" ")).flat()',
  hint: 'flatMap() is more efficient than map().flat().'
},
{
  id: 'js_array_methods_34',
  topicId: 'js_array_methods',
  question: 'Use fill() method to fill array with static value.',
  mathSolution: 'fill(value, start, end) fills portion of array.',
  codeSolution: 'const arr = new Array(5).fill(0);\nconsole.log(arr);  // [0, 0, 0, 0, 0]\n\nconst numbers = [1, 2, 3, 4, 5];\nnumbers.fill(0, 1, 4);\nconsole.log(numbers);  // [1, 0, 0, 0, 5]',
  hint: 'fill() modifies original array.'
},
{
  id: 'js_array_methods_35',
  topicId: 'js_array_methods',
  question: 'Use Array.from() to create array from iterable.',
  mathSolution: 'Array.from() converts iterable or array-like to array.',
  codeSolution: 'const str = "hello";\nconst arr = Array.from(str);\nconsole.log(arr);  // ["h", "e", "l", "l", "o"]\n\nconst set = new Set([1, 2, 3]);\nconsole.log(Array.from(set));  // [1, 2, 3]',
  hint: 'Array.from() works on any iterable.'
},
{
  id: 'js_array_methods_36',
  topicId: 'js_array_methods',
  question: 'Use Array.from() with mapping function.',
  mathSolution: 'Array.from(iterable, mapper) creates mapped array.',
  codeSolution: 'const numbers = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(numbers);  // [1, 2, 3, 4, 5]\n\nconst doubled = Array.from([1, 2, 3], x => x * 2);\nconsole.log(doubled);  // [2, 4, 6]',
  hint: 'Second argument is map function.'
},
{
  id: 'js_array_methods_37',
  topicId: 'js_array_methods',
  question: 'Use Array.of() to create array from arguments.',
  mathSolution: 'Array.of() creates array with given elements.',
  codeSolution: 'const arr1 = Array.of(1, 2, 3);\nconsole.log(arr1);  // [1, 2, 3]\n\nconst arr2 = Array.of(5);\nconsole.log(arr2);  // [5] (not [empty x5] like Array(5))',
  hint: 'Array.of() avoids ambiguity of Array() constructor.'
},
{
  id: 'js_array_methods_38',
  topicId: 'js_array_methods',
  question: 'Use isArray() method to check if value is array.',
  mathSolution: 'Array.isArray() returns true for arrays.',
  codeSolution: 'console.log(Array.isArray([1, 2, 3]));  // true\nconsole.log(Array.isArray({ a: 1 }));      // false\nconsole.log(Array.isArray("hello"));        // false',
  hint: 'Always use Array.isArray() instead of typeof for arrays.'
},
{
  id: 'js_array_methods_39',
  topicId: 'js_array_methods',
  question: 'Use keys() method to get iterator of indices.',
  mathSolution: 'keys() returns iterator of array indices.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst keys = fruits.keys();\nfor (const key of keys) {\n    console.log(key);  // 0, 1, 2\n}',
  hint: 'keys() returns iterator, not array.'
},
{
  id: 'js_array_methods_40',
  topicId: 'js_array_methods',
  question: 'Use values() method to get iterator of values.',
  mathSolution: 'values() returns iterator of array values.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst values = fruits.values();\nfor (const value of values) {\n    console.log(value);  // apple, banana, orange\n}',
  hint: 'values() returns iterator of values.'
},
{
  id: 'js_array_methods_41',
  topicId: 'js_array_methods',
  question: 'Use entries() method to get iterator of [index, value] pairs.',
  mathSolution: 'entries() returns iterator of key-value pairs.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst entries = fruits.entries();\nfor (const [index, value] of entries) {\n    console.log(`${index}: ${value}`);\n}\n// 0: apple\n// 1: banana\n// 2: orange',
  hint: 'entries() works well with destructuring.'
},
{
  id: 'js_array_methods_42',
  topicId: 'js_array_methods',
  question: 'Use copyWithin() method to copy part of array to another location.',
  mathSolution: 'copyWithin(target, start, end) copies elements within array.',
  codeSolution: 'const arr = [1, 2, 3, 4, 5];\narr.copyWithin(0, 3, 5);\nconsole.log(arr);  // [4, 5, 3, 4, 5]\n\nconst arr2 = [1, 2, 3, 4, 5];\narr2.copyWithin(2, 0, 2);\nconsole.log(arr2);  // [1, 2, 1, 2, 5]',
  hint: 'copyWithin() modifies original array.'
},
{
  id: 'js_array_methods_43',
  topicId: 'js_array_methods',
  question: 'Use at() method to access element with negative index.',
  mathSolution: 'at(index) supports negative indexing from end.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconsole.log(fruits.at(0));   // apple\nconsole.log(fruits.at(-1));  // mango\nconsole.log(fruits.at(-2));  // orange',
  hint: 'at(-1) is same as arr[arr.length - 1].'
},
{
  id: 'js_array_methods_44',
  topicId: 'js_array_methods',
  question: 'Use toReversed() method (ES2023) to reverse without modifying.',
  mathSolution: 'toReversed() returns reversed copy, original unchanged.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst reversed = original.toReversed();\nconsole.log(reversed);  // [5, 4, 3, 2, 1]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'toReversed() is immutable version of reverse().'
},
{
  id: 'js_array_methods_45',
  topicId: 'js_array_methods',
  question: 'Use toSorted() method (ES2023) to sort without modifying.',
  mathSolution: 'toSorted() returns sorted copy, original unchanged.',
  codeSolution: 'const original = [3, 1, 4, 1, 5];\nconst sorted = original.toSorted((a, b) => a - b);\nconsole.log(sorted);   // [1, 1, 3, 4, 5]\nconsole.log(original); // [3, 1, 4, 1, 5] (unchanged)',
  hint: 'toSorted() is immutable version of sort().'
},
{
  id: 'js_array_methods_46',
  topicId: 'js_array_methods',
  question: 'Use toSpliced() method (ES2023) to splice without modifying.',
  mathSolution: 'toSpliced() returns spliced copy, original unchanged.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst spliced = original.toSpliced(1, 2, 10, 20);\nconsole.log(spliced);   // [1, 10, 20, 4, 5]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'toSpliced() is immutable version of splice().'
},
{
  id: 'js_array_methods_47',
  topicId: 'js_array_methods',
  question: 'Use with() method (ES2023) to replace single element immutably.',
  mathSolution: 'with(index, value) returns new array with changed element.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst updated = original.with(2, 99);\nconsole.log(updated);   // [1, 2, 99, 4, 5]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'with() is immutable alternative to bracket assignment.'
},
{
  id: 'js_array_methods_48',
  topicId: 'js_array_methods',
  question: 'Use groupBy() method to group array elements by key.',
  mathSolution: 'groupBy() groups elements based on callback return value.',
  codeSolution: 'const people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconst grouped = Object.groupBy(people, person => person.age);\nconsole.log(grouped);\n// {\n//   25: [{name:"Alice",age:25}, {name:"Charlie",age:25}],\n//   30: [{name:"Bob",age:30}]\n// }',
  hint: 'Object.groupBy() is static method (ES2024).'
},
{
  id: 'js_array_methods_49',
  topicId: 'js_array_methods',
  question: 'Use groupByToMap() to group elements into Map.',
  mathSolution: 'groupByToMap() returns Map with grouped elements.',
  codeSolution: 'const people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconst grouped = Map.groupBy(people, person => person.age);\nconsole.log(grouped.get(25));  // [{name:"Alice",age:25}, {name:"Charlie",age:25}]\nconsole.log(grouped.get(30));  // [{name:"Bob",age:30}]',
  hint: 'Map.groupBy() returns Map instead of object.'
},
{
  id: 'js_array_methods_50',
  topicId: 'js_array_methods',
  question: 'Comprehensive: Chain multiple array methods for data processing.',
  mathSolution: 'Combine filter, map, reduce for data pipeline.',
  codeSolution: 'const products = [\n    { name: "Laptop", price: 1000, inStock: true },\n    { name: "Phone", price: 500, inStock: false },\n    { name: "Tablet", price: 300, inStock: true },\n    { name: "Monitor", price: 200, inStock: true },\n    { name: "Keyboard", price: 50, inStock: false }\n];\n\nconst totalValue = products\n    .filter(p => p.inStock)           // Keep only in stock\n    .map(p => p.price)                 // Extract prices\n    .reduce((sum, price) => sum + price, 0);  // Sum prices\n\nconsole.log(totalValue);  // 1000 + 300 + 200 = 1500',
  hint: 'Method chaining creates readable data pipelines.'
}
);