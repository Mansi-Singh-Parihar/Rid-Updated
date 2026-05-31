QuizData.questions.push(
{
  id: 'js_loop_1',
  topicId: 'js_loop',
  question: 'Use for loop to print numbers from 1 to 5.',
  mathSolution: 'Initialize counter, set condition, increment.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    console.log(i);  // 1,2,3,4,5\n}',
  hint: 'Use `for (let i = 1; i <= 5; i++)`'
},
{
  id: 'js_loop_2',
  topicId: 'js_loop',
  question: 'Use for loop to print numbers from 10 down to 1.',
  mathSolution: 'Start from 10, decrement until 1.',
  codeSolution: 'for (let i = 10; i >= 1; i--) {\n    console.log(i);  // 10,9,8,...,1\n}',
  hint: 'Use `i--` to decrement.'
},
{
  id: 'js_loop_3',
  topicId: 'js_loop',
  question: 'Use for loop to print even numbers from 2 to 10.',
  mathSolution: 'Start at 2, increment by 2 each time.',
  codeSolution: 'for (let i = 2; i <= 10; i += 2) {\n    console.log(i);  // 2,4,6,8,10\n}',
  hint: 'Use `i += 2` for step size.'
},
{
  id: 'js_loop_4',
  topicId: 'js_loop',
  question: 'Use for loop to calculate sum of numbers from 1 to 10.',
  mathSolution: 'Accumulate sum in a variable.',
  codeSolution: 'let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n    sum += i;\n}\nconsole.log(sum);  // 55',
  hint: 'Initialize sum = 0 before loop.'
},
{
  id: 'js_loop_5',
  topicId: 'js_loop',
  question: 'Use for loop to calculate factorial of 5 (5!).',
  mathSolution: 'Multiply numbers from 1 to 5.',
  codeSolution: 'let fact = 1;\nfor (let i = 1; i <= 5; i++) {\n    fact *= i;\n}\nconsole.log(fact);  // 120',
  hint: 'Start fact = 1 and multiply each iteration.'
},
{
  id: 'js_loop_6',
  topicId: 'js_loop',
  question: 'Use while loop to print numbers from 1 to 5.',
  mathSolution: 'Initialize counter before loop, increment inside.',
  codeSolution: 'let i = 1;\nwhile (i <= 5) {\n    console.log(i);  // 1,2,3,4,5\n    i++;\n}',
  hint: 'Don\'t forget to increment inside loop.'
},
{
  id: 'js_loop_7',
  topicId: 'js_loop',
  question: 'Use do-while loop to print numbers from 1 to 5.',
  mathSolution: 'Executes at least once before checking condition.',
  codeSolution: 'let i = 1;\ndo {\n    console.log(i);  // 1,2,3,4,5\n    i++;\n} while (i <= 5);',
  hint: 'do-while runs body first, then checks condition.'
},
{
  id: 'js_loop_8',
  topicId: 'js_loop',
  question: 'Use for loop to iterate over an array of fruits.',
  mathSolution: 'Use array length as condition.',
  codeSolution: 'let fruits = ["apple", "banana", "orange"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}',
  hint: 'Use `fruits.length` in condition.'
},
{
  id: 'js_loop_9',
  topicId: 'js_loop',
  question: 'Use for...of loop to iterate over an array.',
  mathSolution: 'for...of directly gives values.',
  codeSolution: 'let colors = ["red", "green", "blue"];\nfor (let color of colors) {\n    console.log(color);  // red, green, blue\n}',
  hint: 'Use `for (let item of array)`'
},
{
  id: 'js_loop_10',
  topicId: 'js_loop',
  question: 'Use for...in loop to iterate over object properties.',
  mathSolution: 'for...in iterates over enumerable properties.',
  codeSolution: 'let person = { name: "John", age: 30, city: "NYC" };\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}',
  hint: 'Use `for (let key in object)`'
},
{
  id: 'js_loop_11',
  topicId: 'js_loop',
  question: 'Use break statement to exit loop when number 5 is found.',
  mathSolution: 'Break stops loop execution completely.',
  codeSolution: 'for (let i = 1; i <= 10; i++) {\n    if (i === 5) {\n        break;\n    }\n    console.log(i);  // 1,2,3,4\n}',
  hint: '`break` exits the loop immediately.'
},
{
  id: 'js_loop_12',
  topicId: 'js_loop',
  question: 'Use continue statement to skip printing number 5.',
  mathSolution: 'Continue skips current iteration.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    if (i === 5) {\n        continue;\n    }\n    console.log(i);  // 1,2,3,4\n}',
  hint: '`continue` skips to next iteration.'
},
{
  id: 'js_loop_13',
  topicId: 'js_loop',
  question: 'Use nested for loop to print multiplication table (1-3).',
  mathSolution: 'Outer loop for rows, inner for columns.',
  codeSolution: 'for (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        console.log(`${i} * ${j} = ${i * j}`);\n    }\n}',
  hint: 'Inner loop completes all iterations for each outer iteration.'
},
{
  id: 'js_loop_14',
  topicId: 'js_loop',
  question: 'Use while loop to find first number divisible by 7 greater than 50.',
  mathSolution: 'Keep incrementing until condition met.',
  codeSolution: 'let num = 51;\nwhile (num % 7 !== 0) {\n    num++;\n}\nconsole.log(num);  // 56',
  hint: 'Condition checks divisibility by 7.'
},
{
  id: 'js_loop_15',
  topicId: 'js_loop',
  question: 'Use do-while to ensure user input is collected at least once.',
  mathSolution: 'Execute input prompt, check condition after.',
  codeSolution: 'let password;\ndo {\n    password = "secret";  // Simulating user input\n} while (password !== "secret");\nconsole.log("Access granted");',
  hint: 'do-while guarantees at least one execution.'
},
{
  id: 'js_loop_16',
  topicId: 'js_loop',
  question: 'Use for loop to reverse an array.',
  mathSolution: 'Start from last index to first.',
  codeSolution: 'let arr = [1, 2, 3, 4, 5];\nfor (let i = arr.length - 1; i >= 0; i--) {\n    console.log(arr[i]);  // 5,4,3,2,1\n}',
  hint: 'Start from `arr.length - 1` and decrement.'
},
{
  id: 'js_loop_17',
  topicId: 'js_loop',
  question: 'Use for loop to find largest number in array.',
  mathSolution: 'Initialize max with first element, compare each.',
  codeSolution: 'let numbers = [23, 45, 12, 67, 34];\nlet max = numbers[0];\nfor (let i = 1; i < numbers.length; i++) {\n    if (numbers[i] > max) {\n        max = numbers[i];\n    }\n}\nconsole.log(max);  // 67',
  hint: 'Start max with first element, compare rest.'
},
{
  id: 'js_loop_18',
  topicId: 'js_loop',
  question: 'Use for loop to count vowels in a string.',
  mathSolution: 'Check each character if it\'s a vowel.',
  codeSolution: 'let str = "Hello World";\nlet count = 0;\nlet vowels = "aeiouAEIOU";\nfor (let i = 0; i < str.length; i++) {\n    if (vowels.includes(str[i])) {\n        count++;\n    }\n}\nconsole.log(count);  // 3',
  hint: 'Use `.includes()` to check vowels.'
},
{
  id: 'js_loop_19',
  topicId: 'js_loop',
  question: 'Use while loop to reverse a number.',
  mathSolution: 'Extract digits using modulo and division.',
  codeSolution: 'let num = 12345;\nlet reversed = 0;\nwhile (num > 0) {\n    reversed = reversed * 10 + (num % 10);\n    num = Math.floor(num / 10);\n}\nconsole.log(reversed);  // 54321',
  hint: 'Use `% 10` to get last digit, `/ 10` to remove it.'
},
{
  id: 'js_loop_20',
  topicId: 'js_loop',
  question: 'Use for loop to check if number is prime.',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'let n = 17;\nlet isPrime = true;\nif (n < 2) isPrime = false;\nfor (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) {\n        isPrime = false;\n        break;\n    }\n}\nconsole.log(isPrime);  // true',
  hint: 'Loop only up to square root of n.'
},
{
  id: 'js_loop_21',
  topicId: 'js_loop',
  question: 'Use for loop to print Fibonacci series up to 10 terms.',
  mathSolution: 'Start with 0,1, then each term is sum of previous two.',
  codeSolution: 'let a = 0, b = 1;\nconsole.log(a);  // 0\nconsole.log(b);  // 1\nfor (let i = 3; i <= 10; i++) {\n    let c = a + b;\n    console.log(c);\n    a = b;\n    b = c;\n}',
  hint: 'Update a and b after each iteration.'
},
{
  id: 'js_loop_22',
  topicId: 'js_loop',
  question: 'Use nested loops to print star pattern (right triangle).',
  mathSolution: 'Outer loop for rows, inner for stars.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    let stars = "";\n    for (let j = 1; j <= i; j++) {\n        stars += "*";\n    }\n    console.log(stars);\n}',
  hint: 'Inner loop runs i times for row i.'
},
{
  id: 'js_loop_23',
  topicId: 'js_loop',
  question: 'Use forEach loop to iterate over array.',
  mathSolution: 'forEach accepts callback function.',
  codeSolution: 'let numbers = [10, 20, 30];\nnumbers.forEach(function(num) {\n    console.log(num);  // 10,20,30\n});',
  hint: '`array.forEach(callback)` is array method.'
},
{
  id: 'js_loop_24',
  topicId: 'js_loop',
  question: 'Use forEach with arrow function to double array values.',
  mathSolution: 'Modify each element using callback.',
  codeSolution: 'let arr = [1, 2, 3, 4];\nlet doubled = [];\narr.forEach(num => doubled.push(num * 2));\nconsole.log(doubled);  // [2,4,6,8]',
  hint: 'Use arrow function syntax `=>`.'
},
{
  id: 'js_loop_25',
  topicId: 'js_loop',
  question: 'Use map() to create new array with squared values.',
  mathSolution: 'map returns new transformed array.',
  codeSolution: 'let numbers = [1, 2, 3, 4];\nlet squares = numbers.map(n => n * n);\nconsole.log(squares);  // [1,4,9,16]',
  hint: '`map()` returns a new array without modifying original.'
},
{
  id: 'js_loop_26',
  topicId: 'js_loop',
  question: 'Use filter() to get even numbers from array.',
  mathSolution: 'filter returns array with elements that pass test.',
  codeSolution: 'let numbers = [1, 2, 3, 4, 5, 6];\nlet evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2,4,6]',
  hint: 'Return true in callback to keep element.'
},
{
  id: 'js_loop_27',
  topicId: 'js_loop',
  question: 'Use reduce() to sum all array elements.',
  mathSolution: 'reduce accumulates values.',
  codeSolution: 'let numbers = [10, 20, 30, 40];\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 100',
  hint: '`reduce` takes accumulator and current value.'
},
{
  id: 'js_loop_28',
  topicId: 'js_loop',
  question: 'Use some() to check if any number is greater than 10.',
  mathSolution: 'some returns true if at least one passes test.',
  codeSolution: 'let numbers = [5, 8, 12, 3];\nlet hasLarge = numbers.some(n => n > 10);\nconsole.log(hasLarge);  // true',
  hint: '`some()` returns boolean.'
},
{
  id: 'js_loop_29',
  topicId: 'js_loop',
  question: 'Use every() to check if all numbers are positive.',
  mathSolution: 'every returns true only if all pass test.',
  codeSolution: 'let numbers = [2, 4, 6, 8];\nlet allPositive = numbers.every(n => n > 0);\nconsole.log(allPositive);  // true',
  hint: '`every()` checks all elements satisfy condition.'
},
{
  id: 'js_loop_30',
  topicId: 'js_loop',
  question: 'Use find() to get first number greater than 10.',
  mathSolution: 'find returns first element that passes test.',
  codeSolution: 'let numbers = [5, 12, 8, 15];\nlet found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: '`find()` returns element, not index.'
},
{
  id: 'js_loop_31',
  topicId: 'js_loop',
  question: 'Use findIndex() to get index of first number greater than 10.',
  mathSolution: 'findIndex returns index, -1 if not found.',
  codeSolution: 'let numbers = [5, 12, 8, 15];\nlet index = numbers.findIndex(n => n > 10);\nconsole.log(index);  // 1',
  hint: '`findIndex()` returns index of first match.'
},
{
  id: 'js_loop_32',
  topicId: 'js_loop',
  question: 'Use for loop to create multiplication table for 5.',
  mathSolution: 'Loop from 1 to 10 and multiply.',
  codeSolution: 'let num = 5;\nfor (let i = 1; i <= 10; i++) {\n    console.log(`${num} * ${i} = ${num * i}`);\n}',
  hint: 'Print formatted string with template literals.'
},
{
  id: 'js_loop_33',
  topicId: 'js_loop',
  question: 'Use while loop to sum digits of a number.',
  mathSolution: 'Extract digits using modulo until number becomes 0.',
  codeSolution: 'let num = 1234;\nlet sum = 0;\nwhile (num > 0) {\n    sum += num % 10;\n    num = Math.floor(num / 10);\n}\nconsole.log(sum);  // 10',
  hint: 'Use `% 10` and `/ 10` to extract digits.'
},
{
  id: 'js_loop_34',
  topicId: 'js_loop',
  question: 'Use for loop with label to break outer loop.',
  mathSolution: 'Labels identify loops for break/continue.',
  codeSolution: 'outer: for (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        if (i === 2 && j === 2) {\n            break outer;\n        }\n        console.log(i, j);\n    }\n}',
  hint: 'Use `labelName:` before loop and `break labelName;`'
},
{
  id: 'js_loop_35',
  topicId: 'js_loop',
  question: 'Use infinite loop with break condition.',
  mathSolution: 'while(true) with break when condition met.',
  codeSolution: 'let count = 1;\nwhile (true) {\n    console.log(count);\n    if (count === 5) break;\n    count++;\n}',
  hint: 'Always include break condition to avoid infinite loop.'
},
{
  id: 'js_loop_36',
  topicId: 'js_loop',
  question: 'Use for...of with string to iterate characters.',
  mathSolution: 'Strings are iterable in for...of.',
  codeSolution: 'let str = "Hello";\nfor (let char of str) {\n    console.log(char);  // H,e,l,l,o\n}',
  hint: 'for...of works on any iterable (string, array, map, set).'
},
{
  id: 'js_loop_37',
  topicId: 'js_loop',
  question: 'Use for...in with array (not recommended, shows indices).',
  mathSolution: 'for...in iterates over enumerable property names.',
  codeSolution: 'let arr = ["a", "b", "c"];\nfor (let index in arr) {\n    console.log(index);  // 0,1,2 (strings)\n}',
  hint: 'Use for...of for arrays, for...in for objects.'
},
{
  id: 'js_loop_38',
  topicId: 'js_loop',
  question: 'Use Object.keys() with forEach to iterate object.',
  mathSolution: 'Object.keys returns array of property names.',
  codeSolution: 'let person = { name: "Alice", age: 25, city: "Paris" };\nObject.keys(person).forEach(key => {\n    console.log(`${key}: ${person[key]}`);\n});',
  hint: 'Combine Object.keys() with forEach for objects.'
},
{
  id: 'js_loop_39',
  topicId: 'js_loop',
  question: 'Use Object.values() to iterate object values.',
  mathSolution: 'Object.values returns array of property values.',
  codeSolution: 'let person = { name: "Bob", age: 30, city: "London" };\nObject.values(person).forEach(value => {\n    console.log(value);  // Bob,30,London\n});',
  hint: 'Object.values() gives values without keys.'
},
{
  id: 'js_loop_40',
  topicId: 'js_loop',
  question: 'Use Object.entries() to iterate key-value pairs.',
  mathSolution: 'Object.entries returns array of [key, value] pairs.',
  codeSolution: 'let person = { name: "Charlie", age: 35 };\nfor (let [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Use destructuring `[key, value]` in for...of.'
},
{
  id: 'js_loop_41',
  topicId: 'js_loop',
  question: 'Use for loop to remove duplicates from array.',
  mathSolution: 'Create new array, add if not already present.',
  codeSolution: 'let arr = [1, 2, 2, 3, 4, 4, 5];\nlet unique = [];\nfor (let i = 0; i < arr.length; i++) {\n    if (!unique.includes(arr[i])) {\n        unique.push(arr[i]);\n    }\n}\nconsole.log(unique);  // [1,2,3,4,5]',
  hint: 'Check if element already exists in result array.'
},
{
  id: 'js_loop_42',
  topicId: 'js_loop',
  question: 'Use Set to remove duplicates (modern approach).',
  mathSolution: 'Set stores unique values automatically.',
  codeSolution: 'let arr = [1, 2, 2, 3, 4, 4, 5];\nlet unique = [...new Set(arr)];\nconsole.log(unique);  // [1,2,3,4,5]',
  hint: '`new Set(arr)` creates set of unique values.'
},
{
  id: 'js_loop_43',
  topicId: 'js_loop',
  question: 'Use for loop to flatten nested array (one level).',
  mathSolution: 'Concatenate each sub-array to result.',
  codeSolution: 'let nested = [[1, 2], [3, 4], [5, 6]];\nlet flat = [];\nfor (let i = 0; i < nested.length; i++) {\n    for (let j = 0; j < nested[i].length; j++) {\n        flat.push(nested[i][j]);\n    }\n}\nconsole.log(flat);  // [1,2,3,4,5,6]',
  hint: 'Use nested loops to access inner array elements.'
},
{
  id: 'js_loop_44',
  topicId: 'js_loop',
  question: 'Use flat() method to flatten array (modern approach).',
  mathSolution: 'flat() concatenates sub-arrays up to depth.',
  codeSolution: 'let nested = [[1, 2], [3, 4], [5, 6]];\nlet flat = nested.flat();\nconsole.log(flat);  // [1,2,3,4,5,6]',
  hint: '`array.flat(depth)` flattens nested arrays.'
},
{
  id: 'js_loop_45',
  topicId: 'js_loop',
  question: 'Use for loop to find common elements in two arrays.',
  mathSolution: 'Compare each element of first with second array.',
  codeSolution: 'let arr1 = [1, 2, 3, 4];\nlet arr2 = [3, 4, 5, 6];\nlet common = [];\nfor (let i = 0; i < arr1.length; i++) {\n    if (arr2.includes(arr1[i])) {\n        common.push(arr1[i]);\n    }\n}\nconsole.log(common);  // [3,4]',
  hint: 'Check if arr2 includes element from arr1.'
},
{
  id: 'js_loop_46',
  topicId: 'js_loop',
  question: 'Use for loop to find factorial using while loop.',
  mathSolution: 'Multiply numbers from n down to 1.',
  codeSolution: 'function factorial(n) {\n    let result = 1;\n    while (n > 1) {\n        result *= n;\n        n--;\n    }\n    return result;\n}\nconsole.log(factorial(5));  // 120',
  hint: 'Decrement n after multiplication.'
},
{
  id: 'js_loop_47',
  topicId: 'js_loop',
  question: 'Use for loop to print pyramid pattern.',
  mathSolution: 'Spaces then stars in each row.',
  codeSolution: 'let n = 5;\nfor (let i = 1; i <= n; i++) {\n    let spaces = " ".repeat(n - i);\n    let stars = "*".repeat(2 * i - 1);\n    console.log(spaces + stars);\n}',
  hint: 'Use `.repeat()` method for repeated characters.'
},
{
  id: 'js_loop_48',
  topicId: 'js_loop',
  question: 'Use for loop to iterate over Map object.',
  mathSolution: 'Map has forEach method and is iterable.',
  codeSolution: 'let myMap = new Map([\n    ["name", "John"],\n    ["age", 30]\n]);\nfor (let [key, value] of myMap) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Maps are iterable with for...of and destructuring.'
},
{
  id: 'js_loop_49',
  topicId: 'js_loop',
  question: 'Use for loop to iterate over Set object.',
  mathSolution: 'Set is iterable with for...of.',
  codeSolution: 'let mySet = new Set([1, 2, 3, 4, 5]);\nfor (let value of mySet) {\n    console.log(value);  // 1,2,3,4,5\n}',
  hint: 'Set maintains insertion order for iteration.'
},
{
  id: 'js_loop_50',
  topicId: 'js_loop',
  question: 'Performance comparison: Print 1-10 using for, while, do-while.',
  mathSolution: 'Different loop syntaxes, same result.',
  codeSolution: '// for loop\nfor (let i = 1; i <= 10; i++) console.log(i);\n\n// while loop\nlet i = 1;\nwhile (i <= 10) {\n    console.log(i);\n    i++;\n}\n\n// do-while loop\nlet j = 1;\ndo {\n    console.log(j);\n    j++;\n} while (j <= 10);',
  hint: 'Choose loop based on use case: for (known count), while (unknown), do-while (at least once).'
}
);