QuizData.questions.push(
{
  id: 'js_arrays_1',
  topicId: 'js_arrays',
  question: 'Create an array of fruits using array literal syntax.',
  mathSolution: 'Use square brackets to create array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'Use `[]` for array literal.'
},
{
  id: 'js_arrays_2',
  topicId: 'js_arrays',
  question: 'Create an array using Array() constructor.',
  mathSolution: 'Use new Array() to create array.',
  codeSolution: 'const numbers = new Array(1, 2, 3, 4, 5);\nconsole.log(numbers);  // [1, 2, 3, 4, 5]',
  hint: 'Use `new Array()` constructor.'
},
{
  id: 'js_arrays_3',
  topicId: 'js_arrays',
  question: 'Access first and last elements of an array using indexes.',
  mathSolution: 'Index 0 for first, length-1 for last.',
  codeSolution: 'const colors = ["red", "green", "blue", "yellow"];\nconsole.log(colors[0]);  // red\nconsole.log(colors[colors.length - 1]);  // yellow',
  hint: 'Array indexes start at 0.'
},
{
  id: 'js_arrays_4',
  topicId: 'js_arrays',
  question: 'Get the length of an array using length property.',
  mathSolution: 'length property returns number of elements.',
  codeSolution: 'const items = ["a", "b", "c", "d"];\nconsole.log(items.length);  // 4',
  hint: 'Use `array.length` property.'
},
{
  id: 'js_arrays_5',
  topicId: 'js_arrays',
  question: 'Add element to end of array using push() method.',
  mathSolution: 'push() adds element and returns new length.',
  codeSolution: 'const fruits = ["apple", "banana"];\nfruits.push("orange");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`push()` adds to end of array.'
},
{
  id: 'js_arrays_6',
  topicId: 'js_arrays',
  question: 'Remove last element from array using pop() method.',
  mathSolution: 'pop() removes last element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.pop();\nconsole.log(removed);  // orange\nconsole.log(fruits);   // ["apple", "banana"]',
  hint: '`pop()` removes from end.'
},
{
  id: 'js_arrays_7',
  topicId: 'js_arrays',
  question: 'Add element to beginning of array using unshift() method.',
  mathSolution: 'unshift() adds element to start and returns new length.',
  codeSolution: 'const fruits = ["banana", "orange"];\nfruits.unshift("apple");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`unshift()` adds to beginning.'
},
{
  id: 'js_arrays_8',
  topicId: 'js_arrays',
  question: 'Remove first element from array using shift() method.',
  mathSolution: 'shift() removes first element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.shift();\nconsole.log(removed);  // apple\nconsole.log(fruits);   // ["banana", "orange"]',
  hint: '`shift()` removes from beginning.'
},
{
  id: 'js_arrays_9',
  topicId: 'js_arrays',
  question: 'Find index of an element using indexOf() method.',
  mathSolution: 'indexOf() returns first index or -1 if not found.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.indexOf("banana"));  // 1\nconsole.log(fruits.indexOf("grape"));   // -1',
  hint: 'Use `indexOf()` to find position.'
},
{
  id: 'js_arrays_10',
  topicId: 'js_arrays',
  question: 'Check if array includes an element using includes() method.',
  mathSolution: 'includes() returns true or false.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));   // false',
  hint: '`includes()` returns boolean.'
},
{
  id: 'js_arrays_11',
  topicId: 'js_arrays',
  question: 'Join array elements into string using join() method.',
  mathSolution: 'join() combines elements with separator.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.join(", "));  // "apple, banana, orange"\nconsole.log(fruits.join("-"));    // "apple-banana-orange"',
  hint: '`join()` converts array to string.'
},
{
  id: 'js_arrays_12',
  topicId: 'js_arrays',
  question: 'Convert string to array using split() method.',
  mathSolution: 'split() divides string by separator into array.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`split()` is string method that returns array.'
},
{
  id: 'js_arrays_13',
  topicId: 'js_arrays',
  question: 'Extract portion of array using slice() method.',
  mathSolution: 'slice(start, end) returns new array without modifying original.',
  codeSolution: 'const numbers = [10, 20, 30, 40, 50];\nconst sliced = numbers.slice(1, 4);\nconsole.log(sliced);  // [20, 30, 40]\nconsole.log(numbers); // [10,20,30,40,50] (unchanged)',
  hint: '`slice()` doesn\'t modify original array.'
},
{
  id: 'js_arrays_14',
  topicId: 'js_arrays',
  question: 'Modify array by adding/removing elements using splice() method.',
  mathSolution: 'splice(start, deleteCount, ...items) modifies original array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nfruits.splice(1, 2, "grape", "kiwi");\nconsole.log(fruits);  // ["apple", "grape", "kiwi", "mango"]',
  hint: '`splice()` modifies original array.'
},
{
  id: 'js_arrays_15',
  topicId: 'js_arrays',
  question: 'Remove elements using splice() without adding new ones.',
  mathSolution: 'splice(start, deleteCount) removes elements.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst removed = fruits.splice(1, 2);\nconsole.log(removed);  // ["banana", "orange"]\nconsole.log(fruits);   // ["apple", "mango"]',
  hint: 'splice returns removed elements.'
},
{
  id: 'js_arrays_16',
  topicId: 'js_arrays',
  question: 'Insert elements using splice() without removing.',
  mathSolution: 'splice(start, 0, ...items) inserts elements.',
  codeSolution: 'const fruits = ["apple", "mango"];\nfruits.splice(1, 0, "banana", "orange");\nconsole.log(fruits);  // ["apple", "banana", "orange", "mango"]',
  hint: 'Set deleteCount to 0 to insert only.'
},
{
  id: 'js_arrays_17',
  topicId: 'js_arrays',
  question: 'Create shallow copy of array using spread operator.',
  mathSolution: '[...array] creates new array with same elements.',
  codeSolution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original);  // [1, 2, 3]\nconsole.log(copy);      // [1, 2, 3, 4]',
  hint: '`[...array]` creates shallow copy.'
},
{
  id: 'js_arrays_18',
  topicId: 'js_arrays',
  question: 'Combine two arrays using concat() method.',
  mathSolution: 'concat() merges arrays and returns new array.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = arr1.concat(arr2);\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: '`concat()` doesn\'t modify original arrays.'
},
{
  id: 'js_arrays_19',
  topicId: 'js_arrays',
  question: 'Combine arrays using spread operator.',
  mathSolution: '[...arr1, ...arr2] merges arrays.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: 'Spread operator `...` can combine arrays.'
},
{
  id: 'js_arrays_20',
  topicId: 'js_arrays',
  question: 'Reverse array using reverse() method.',
  mathSolution: 'reverse() modifies original array.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nnumbers.reverse();\nconsole.log(numbers);  // [5, 4, 3, 2, 1]',
  hint: '`reverse()` modifies original array.'
},
{
  id: 'js_arrays_21',
  topicId: 'js_arrays',
  question: 'Sort array of strings alphabetically using sort() method.',
  mathSolution: 'sort() sorts strings lexicographically.',
  codeSolution: 'const fruits = ["banana", "apple", "orange", "grape"];\nfruits.sort();\nconsole.log(fruits);  // ["apple", "banana", "grape", "orange"]',
  hint: 'Default sort works on strings.'
},
{
  id: 'js_arrays_22',
  topicId: 'js_arrays',
  question: 'Sort array of numbers correctly using sort() with compare function.',
  mathSolution: 'compare function (a,b) => a-b sorts numbers ascending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);  // [2, 5, 10, 35, 80]\nnumbers.sort((a, b) => b - a);\nconsole.log(numbers);  // [80, 35, 10, 5, 2]',
  hint: 'Use compare function for numeric sort.'
},
{
  id: 'js_arrays_23',
  topicId: 'js_arrays',
  question: 'Iterate over array using for loop.',
  mathSolution: 'Use index from 0 to length-1.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}',
  hint: 'Traditional for loop with index.'
},
{
  id: 'js_arrays_24',
  topicId: 'js_arrays',
  question: 'Iterate over array using for...of loop.',
  mathSolution: 'for...of gives values directly.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfor (const fruit of fruits) {\n    console.log(fruit);\n}',
  hint: '`for...of` iterates values, not indexes.'
},
{
  id: 'js_arrays_25',
  topicId: 'js_arrays',
  question: 'Iterate over array using forEach() method.',
  mathSolution: 'forEach executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach((fruit, index) => {\n    console.log(`${index}: ${fruit}`);\n});',
  hint: '`forEach()` is array method for iteration.'
},
{
  id: 'js_arrays_26',
  topicId: 'js_arrays',
  question: 'Create new array by transforming each element using map().',
  mathSolution: 'map() returns new array with transformed values.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: '`map()` transforms each element.'
},
{
  id: 'js_arrays_27',
  topicId: 'js_arrays',
  question: 'Filter array elements using filter() method.',
  mathSolution: 'filter() returns new array with elements passing test.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: '`filter()` keeps elements where callback returns true.'
},
{
  id: 'js_arrays_28',
  topicId: 'js_arrays',
  question: 'Reduce array to single value using reduce() method.',
  mathSolution: 'reduce() accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: '`reduce()` takes accumulator and current value.'
},
{
  id: 'js_arrays_29',
  topicId: 'js_arrays',
  question: 'Find first element matching condition using find() method.',
  mathSolution: 'find() returns first element passing test.',
  codeSolution: 'const users = [\n    { id: 1, name: "Alice" },\n    { id: 2, name: "Bob" },\n    { id: 3, name: "Charlie" }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Bob" }',
  hint: '`find()` returns first match, not all.'
},
{
  id: 'js_arrays_30',
  topicId: 'js_arrays',
  question: 'Check if any element passes test using some() method.',
  mathSolution: 'some() returns true if any element passes.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true',
  hint: '`some()` returns boolean for "any".'
},
{
  id: 'js_arrays_31',
  topicId: 'js_arrays',
  question: 'Check if all elements pass test using every() method.',
  mathSolution: 'every() returns true if all elements pass.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true',
  hint: '`every()` returns boolean for "all".'
},
{
  id: 'js_arrays_32',
  topicId: 'js_arrays',
  question: 'Flatten nested array one level using flat() method.',
  mathSolution: 'flat() concatenates sub-arrays.',
  codeSolution: 'const nested = [1, [2, 3], [4, [5, 6]]];\nconst flatOnce = nested.flat();\nconsole.log(flatOnce);  // [1, 2, 3, 4, [5, 6]]',
  hint: '`flat()` flattens to specified depth.'
},
{
  id: 'js_arrays_33',
  topicId: 'js_arrays',
  question: 'Flatten nested array completely using flat() with Infinity.',
  mathSolution: 'flat(Infinity) flattens all nested arrays.',
  codeSolution: 'const nested = [1, [2, [3, [4, [5]]]]];\nconst flatAll = nested.flat(Infinity);\nconsole.log(flatAll);  // [1, 2, 3, 4, 5]',
  hint: 'Use `flat(Infinity)` for deep flattening.'
},
{
  id: 'js_arrays_34',
  topicId: 'js_arrays',
  question: 'Create array from iterable using Array.from() method.',
  mathSolution: 'Array.from() converts iterable to array.',
  codeSolution: 'const str = "hello";\nconst arr = Array.from(str);\nconsole.log(arr);  // ["h", "e", "l", "l", "o"]\n\nconst set = new Set([1, 2, 3]);\nconsole.log(Array.from(set));  // [1, 2, 3]',
  hint: '`Array.from()` works on any iterable.'
},
{
  id: 'js_arrays_35',
  topicId: 'js_arrays',
  question: 'Create array filled with values using fill() method.',
  mathSolution: 'fill() fills array with static value.',
  codeSolution: 'const arr = new Array(5).fill(0);\nconsole.log(arr);  // [0, 0, 0, 0, 0]\n\nconst partial = [1, 2, 3, 4, 5];\npartial.fill(0, 1, 4);\nconsole.log(partial);  // [1, 0, 0, 0, 5]',
  hint: 'fill(value, start, end) fills portion.'
},
{
  id: 'js_arrays_36',
  topicId: 'js_arrays',
  question: 'Remove duplicate values from array using Set.',
  mathSolution: 'Set stores unique values automatically.',
  codeSolution: 'const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);  // [1, 2, 3, 4, 5]',
  hint: 'Convert to Set then back to array.'
},
{
  id: 'js_arrays_37',
  topicId: 'js_arrays',
  question: 'Find maximum value in array using spread with Math.max().',
  mathSolution: 'Math.max(...array) finds maximum.',
  codeSolution: 'const numbers = [10, 5, 20, 15, 8];\nconst max = Math.max(...numbers);\nconsole.log(max);  // 20\nconst min = Math.min(...numbers);\nconsole.log(min);  // 5',
  hint: 'Spread array into Math.max/min.'
},
{
  id: 'js_arrays_38',
  topicId: 'js_arrays',
  question: 'Find maximum using reduce() method.',
  mathSolution: 'reduce() comparing each element.',
  codeSolution: 'const numbers = [10, 5, 20, 15, 8];\nconst max = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0]);\nconsole.log(max);  // 20',
  hint: 'Use reduce to track maximum value.'
},
{
  id: 'js_arrays_39',
  topicId: 'js_arrays',
  question: 'Check if array is empty using length property.',
  mathSolution: 'length === 0 means empty array.',
  codeSolution: 'const empty = [];\nconst notEmpty = [1, 2, 3];\nconsole.log(empty.length === 0);     // true\nconsole.log(notEmpty.length === 0);  // false',
  hint: 'Check `array.length === 0`.'
},
{
  id: 'js_arrays_40',
  topicId: 'js_arrays',
  question: 'Clear all elements from array.',
  mathSolution: 'Set length to 0 or assign empty array.',
  codeSolution: 'let arr = [1, 2, 3, 4, 5];\narr.length = 0;\nconsole.log(arr);  // []\n\n// Or assign new empty array\narr = [1, 2, 3];\narr = [];\nconsole.log(arr);  // []',
  hint: 'Set `array.length = 0` to clear.'
},
{
  id: 'js_arrays_41',
  topicId: 'js_arrays',
  question: 'Get last element of array without modifying.',
  mathSolution: 'Access with length-1 index or slice().',
  codeSolution: 'const arr = [1, 2, 3, 4, 5];\nconst last = arr[arr.length - 1];\nconsole.log(last);  // 5\n\n// Using slice\nconst lastSlice = arr.slice(-1)[0];\nconsole.log(lastSlice);  // 5',
  hint: 'Use `arr[arr.length - 1]` or `slice(-1)`.'
},
{
  id: 'js_arrays_42',
  topicId: 'js_arrays',
  question: 'Check if value is array using Array.isArray().',
  mathSolution: 'Array.isArray() returns true for arrays.',
  codeSolution: 'console.log(Array.isArray([1, 2, 3]));  // true\nconsole.log(Array.isArray({ a: 1 }));      // false\nconsole.log(Array.isArray("hello"));        // false',
  hint: 'Use `Array.isArray()` instead of `typeof`.'
},
{
  id: 'js_arrays_43',
  topicId: 'js_arrays',
  question: 'Create array with sequence of numbers using Array.from() with mapper.',
  mathSolution: 'Array.from({length}, (_,i) => i+1) creates range.',
  codeSolution: 'const range = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(range);  // [1, 2, 3, 4, 5]\n\nconst evens = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);\nconsole.log(evens);  // [2, 4, 6, 8, 10]',
  hint: 'Use `Array.from()` with mapping function.'
},
{
  id: 'js_arrays_44',
  topicId: 'js_arrays',
  question: 'Find index of element with condition using findIndex().',
  mathSolution: 'findIndex() returns index of first passing element.',
  codeSolution: 'const numbers = [10, 20, 30, 40, 50];\nconst index = numbers.findIndex(n => n > 25);\nconsole.log(index);  // 2 (value 30)\n\nconst notFound = numbers.findIndex(n => n > 100);\nconsole.log(notFound);  // -1',
  hint: '`findIndex()` returns index or -1.'
},
{
  id: 'js_arrays_45',
  topicId: 'js_arrays',
  question: 'Check if array is sorted ascending.',
  mathSolution: 'Check if each element ≤ next element.',
  codeSolution: 'function isSorted(arr) {\n    return arr.every((val, i) => i === 0 || val >= arr[i - 1]);\n}\nconsole.log(isSorted([1, 2, 3, 4, 5]));  // true\nconsole.log(isSorted([1, 3, 2, 4, 5]));  // false',
  hint: 'Use `every()` to compare consecutive elements.'
},
{
  id: 'js_arrays_46',
  topicId: 'js_arrays',
  question: 'Intersection of two arrays using filter() and includes().',
  mathSolution: 'Filter elements present in both arrays.',
  codeSolution: 'const arr1 = [1, 2, 3, 4, 5];\nconst arr2 = [3, 4, 5, 6, 7];\nconst intersection = arr1.filter(item => arr2.includes(item));\nconsole.log(intersection);  // [3, 4, 5]',
  hint: 'Filter one array for elements in the other.'
},
{
  id: 'js_arrays_47',
  topicId: 'js_arrays',
  question: 'Difference of two arrays (elements in one but not both).',
  mathSolution: 'Filter elements not in other array.',
  codeSolution: 'const arr1 = [1, 2, 3, 4, 5];\nconst arr2 = [3, 4, 5, 6, 7];\nconst difference = [\n    ...arr1.filter(item => !arr2.includes(item)),\n    ...arr2.filter(item => !arr1.includes(item))\n];\nconsole.log(difference);  // [1, 2, 6, 7]',
  hint: 'Symmetric difference is items not in both.'
},
{
  id: 'js_arrays_48',
  topicId: 'js_arrays',
  question: 'Chunk array into smaller arrays of given size.',
  mathSolution: 'Use slice() in loop with step size.',
  codeSolution: 'function chunk(arr, size) {\n    const result = [];\n    for (let i = 0; i < arr.length; i += size) {\n        result.push(arr.slice(i, i + size));\n    }\n    return result;\n}\nconsole.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));\n// [[1,2,3], [4,5,6], [7,8]]',
  hint: 'Increment loop by chunk size.'
},
{
  id: 'js_arrays_49',
  topicId: 'js_arrays',
  question: 'Rotate array to right by k positions.',
  mathSolution: 'Slice and concatenate in rotated order.',
  codeSolution: 'function rotateRight(arr, k) {\n    k = k % arr.length;\n    return [...arr.slice(-k), ...arr.slice(0, -k)];\n}\nconsole.log(rotateRight([1, 2, 3, 4, 5], 2));  // [4, 5, 1, 2, 3]',
  hint: 'Use negative index with slice for rotation.'
},
{
  id: 'js_arrays_50',
  topicId: 'js_arrays',
  question: 'Group array elements by property using reduce().',
  mathSolution: 'Use reduce to build object grouped by key.',
  codeSolution: 'const people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 },\n    { name: "David", age: 30 }\n];\nconst groupedByAge = people.reduce((group, person) => {\n    const age = person.age;\n    if (!group[age]) group[age] = [];\n    group[age].push(person);\n    return group;\n}, {});\nconsole.log(groupedByAge);\n// {\n//   25: [{name:"Alice",age:25}, {name:"Charlie",age:25}],\n//   30: [{name:"Bob",age:30}, {name:"David",age:30}]\n// }',
  hint: 'Use reduce to create grouped object.'
}
);