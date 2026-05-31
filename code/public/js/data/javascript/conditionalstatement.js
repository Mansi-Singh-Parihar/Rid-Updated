QuizData.questions.push(
{
  id: 'js_conditionals_1',
  topicId: 'js_conditionals',
  question: 'Write an if statement that prints "Adult" if age >= 18.',
  mathSolution: 'Use if condition to check age.',
  codeSolution: 'let age = 20;\nif (age >= 18) {\n    console.log("Adult");  // Adult\n}',
  hint: 'Use `if (age >= 18)`'
},
{
  id: 'js_conditionals_2',
  topicId: 'js_conditionals',
  question: 'Write if-else statement that prints "Even" if number is even, else "Odd".',
  mathSolution: 'Check remainder when divided by 2.',
  codeSolution: 'let num = 7;\nif (num % 2 === 0) {\n    console.log("Even");\n} else {\n    console.log("Odd");  // Odd\n}',
  hint: 'Use `%` operator with `===`'
},
{
  id: 'js_conditionals_3',
  topicId: 'js_conditionals',
  question: 'Write if-else if-else to print "Positive", "Negative", or "Zero".',
  mathSolution: 'Compare number with 0.',
  codeSolution: 'let num = -5;\nif (num > 0) {\n    console.log("Positive");\n} else if (num < 0) {\n    console.log("Negative");\n} else {\n    console.log("Zero");  // Negative\n}',
  hint: 'Use `>`, `<`, and `===`'
},
{
  id: 'js_conditionals_4',
  topicId: 'js_conditionals',
  question: 'Nested if: Check if number is positive and then check if it\'s even.',
  mathSolution: 'First check positivity, then check evenness.',
  codeSolution: 'let num = 12;\nif (num > 0) {\n    if (num % 2 === 0) {\n        console.log("Positive even");  // Positive even\n    }\n}',
  hint: 'Place one if inside another.'
},
{
  id: 'js_conditionals_5',
  topicId: 'js_conditionals',
  question: 'Use ternary operator to assign "Pass" if marks >= 33 else "Fail".',
  mathSolution: 'result = marks >= 33 ? "Pass" : "Fail"',
  codeSolution: 'let marks = 45;\nlet result = marks >= 33 ? "Pass" : "Fail";\nconsole.log(result);  // Pass',
  hint: 'Use `condition ? valueIfTrue : valueIfFalse`'
},
{
  id: 'js_conditionals_6',
  topicId: 'js_conditionals',
  question: 'Check if a year is leap year using if-else.',
  mathSolution: 'Divisible by 4 but not by 100, unless divisible by 400.',
  codeSolution: 'let year = 2024;\nif ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {\n    console.log("Leap year");  // Leap year\n} else {\n    console.log("Not leap year");\n}',
  hint: 'Combine conditions with `&&` and `||`'
},
{
  id: 'js_conditionals_7',
  topicId: 'js_conditionals',
  question: 'Check if a character is a vowel using if statement.',
  mathSolution: 'Check if char in "aeiouAEIOU".',
  codeSolution: 'let ch = "e";\nif ("aeiouAEIOU".includes(ch)) {\n    console.log("Vowel");  // Vowel\n} else {\n    console.log("Consonant");\n}',
  hint: 'Use `.includes()` method with string.'
},
{
  id: 'js_conditionals_8',
  topicId: 'js_conditionals',
  question: 'Find largest of three numbers using if-else if-else.',
  mathSolution: 'Compare numbers sequentially.',
  codeSolution: 'let a = 10, b = 25, c = 15;\nif (a >= b && a >= c) {\n    console.log(`Largest: ${a}`);\n} else if (b >= a && b >= c) {\n    console.log(`Largest: ${b}`);  // Largest: 25\n} else {\n    console.log(`Largest: ${c}`);\n}',
  hint: 'Compare each with others using `&&`'
},
{
  id: 'js_conditionals_9',
  topicId: 'js_conditionals',
  question: 'Check if a string is empty using if-else.',
  mathSolution: 'Empty string is falsy.',
  codeSolution: 'let s = "";\nif (s) {\n    console.log("Not empty");\n} else {\n    console.log("Empty");  // Empty\n}',
  hint: 'Directly check `if (s)`'
},
{
  id: 'js_conditionals_10',
  topicId: 'js_conditionals',
  question: 'Check if an array is empty using if-else.',
  mathSolution: 'Check length property.',
  codeSolution: 'let arr = [];\nif (arr.length > 0) {\n    console.log("Has elements");\n} else {\n    console.log("Empty");  // Empty\n}',
  hint: 'Use `if (arr.length === 0)`'
},
{
  id: 'js_conditionals_11',
  topicId: 'js_conditionals',
  question: 'Grade calculator: A(>=90), B(>=75), C(>=60), D(>=45), F(<45).',
  mathSolution: 'Use if-else if chain.',
  codeSolution: 'let marks = 85;\nif (marks >= 90) {\n    console.log("A");\n} else if (marks >= 75) {\n    console.log("B");  // B\n} else if (marks >= 60) {\n    console.log("C");\n} else if (marks >= 45) {\n    console.log("D");\n} else {\n    console.log("F");\n}',
  hint: 'Check from highest to lowest.'
},
{
  id: 'js_conditionals_12',
  topicId: 'js_conditionals',
  question: 'Check if a number is divisible by both 3 and 5 using if.',
  mathSolution: 'Use `&&` operator.',
  codeSolution: 'let num = 15;\nif (num % 3 === 0 && num % 5 === 0) {\n    console.log("Divisible by 3 and 5");  // Divisible by 3 and 5\n}',
  hint: 'Check both conditions with `&&`'
},
{
  id: 'js_conditionals_13',
  topicId: 'js_conditionals',
  question: 'Check if a number is between 1 and 100 inclusive using if.',
  mathSolution: 'Use comparison operators.',
  codeSolution: 'let num = 50;\nif (num >= 1 && num <= 100) {\n    console.log("In range");  // In range\n} else {\n    console.log("Out of range");\n}',
  hint: '`num >= 1 && num <= 100`'
},
{
  id: 'js_conditionals_14',
  topicId: 'js_conditionals',
  question: 'Check if a string starts with specific letter using if.',
  mathSolution: 'Use string indexing or startsWith().',
  codeSolution: 'let s = "JavaScript";\nif (s[0] === "J") {\n    console.log("Starts with J");  // Starts with J\n}',
  hint: 'Access first character with `[0]` or use `.startsWith()`'
},
{
  id: 'js_conditionals_15',
  topicId: 'js_conditionals',
  question: 'Check if two strings are equal ignoring case.',
  mathSolution: 'Convert both to same case.',
  codeSolution: 'let s1 = "Hello";\nlet s2 = "hello";\nif (s1.toLowerCase() === s2.toLowerCase()) {\n    console.log("Same");  // Same\n} else {\n    console.log("Different");\n}',
  hint: 'Use `.toLowerCase()` method.'
},
{
  id: 'js_conditionals_16',
  topicId: 'js_conditionals',
  question: 'Check if a number is a perfect square using if.',
  mathSolution: 'Square root should be integer.',
  codeSolution: 'let num = 16;\nlet sqrt = Math.sqrt(num);\nif (sqrt === Math.floor(sqrt)) {\n    console.log("Perfect square");  // Perfect square\n}',
  hint: 'Check if sqrt is integer using `Math.floor()`'
},
{
  id: 'js_conditionals_17',
  topicId: 'js_conditionals',
  question: 'Check if a year is a century year (ends with 00).',
  mathSolution: 'Check if divisible by 100.',
  codeSolution: 'let year = 1900;\nif (year % 100 === 0) {\n    console.log("Century year");  // Century year\n} else {\n    console.log("Not century year");\n}',
  hint: 'Use `% 100 === 0`'
},
{
  id: 'js_conditionals_18',
  topicId: 'js_conditionals',
  question: 'Check if a triangle is valid given three sides.',
  mathSolution: 'Sum of any two sides > third side.',
  codeSolution: 'let a = 3, b = 4, c = 5;\nif (a + b > c && b + c > a && a + c > b) {\n    console.log("Valid triangle");  // Valid triangle\n} else {\n    console.log("Invalid triangle");\n}',
  hint: 'Check triangle inequality with `&&`'
},
{
  id: 'js_conditionals_19',
  topicId: 'js_conditionals',
  question: 'Check if a number is prime using if-else (simple version).',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'let n = 17;\nlet isPrime = true;\nif (n < 2) {\n    isPrime = false;\n} else {\n    for (let i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i === 0) {\n            isPrime = false;\n            break;\n        }\n    }\n}\nconsole.log(isPrime ? "Prime" : "Not prime");  // Prime',
  hint: 'Check divisors up to square root using `Math.sqrt()`'
},
{
  id: 'js_conditionals_20',
  topicId: 'js_conditionals',
  question: 'Check if a character is a digit using if.',
  mathSolution: 'Use regular expression or char code.',
  codeSolution: 'let ch = "7";\nif (ch >= "0" && ch <= "9") {\n    console.log("Digit");  // Digit\n} else {\n    console.log("Not digit");\n}',
  hint: 'Compare with character codes or use regex `/\\d/`'
},
{
  id: 'js_conditionals_21',
  topicId: 'js_conditionals',
  question: 'Check if a character is uppercase or lowercase.',
  mathSolution: 'Compare with character codes.',
  codeSolution: 'let ch = "A";\nif (ch >= "A" && ch <= "Z") {\n    console.log("Uppercase");  // Uppercase\n} else if (ch >= "a" && ch <= "z") {\n    console.log("Lowercase");\n} else {\n    console.log("Not a letter");\n}',
  hint: 'Check ASCII ranges A-Z and a-z'
},
{
  id: 'js_conditionals_22',
  topicId: 'js_conditionals',
  question: 'Simple login system using if-else.',
  mathSolution: 'Check username and password.',
  codeSolution: 'let username = "admin";\nlet password = "1234";\nif (username === "admin" && password === "1234") {\n    console.log("Login successful");  // Login successful\n} else {\n    console.log("Login failed");\n}',
  hint: 'Use `&&` to check both conditions'
},
{
  id: 'js_conditionals_23',
  topicId: 'js_conditionals',
  question: 'Check if a number is a multiple of 7 or 11.',
  mathSolution: 'Use `||` operator.',
  codeSolution: 'let num = 14;\nif (num % 7 === 0 || num % 11 === 0) {\n    console.log("Multiple of 7 or 11");  // Multiple of 7 or 11\n} else {\n    console.log("Not multiple");\n}',
  hint: 'Use `%` with `||`'
},
{
  id: 'js_conditionals_24',
  topicId: 'js_conditionals',
  question: 'Check if a string is palindrome using if.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'let s = "madam";\nlet reversed = s.split("").reverse().join("");\nif (s === reversed) {\n    console.log("Palindrome");  // Palindrome\n} else {\n    console.log("Not palindrome");\n}',
  hint: 'Use `.split("").reverse().join("")` to reverse'
},
{
  id: 'js_conditionals_25',
  topicId: 'js_conditionals',
  question: 'Check if a number is positive and even using nested if.',
  mathSolution: 'First check positive, then even.',
  codeSolution: 'let num = 8;\nif (num > 0) {\n    if (num % 2 === 0) {\n        console.log("Positive even");  // Positive even\n    }\n}',
  hint: 'Nest conditions inside each other'
},
{
  id: 'js_conditionals_26',
  topicId: 'js_conditionals',
  question: 'Check if a number is Armstrong number (3 digits: a³+b³+c³).',
  mathSolution: 'Cube each digit and sum.',
  codeSolution: 'let num = 153;\nlet strNum = num.toString();\nlet sum = 0;\nfor (let digit of strNum) {\n    sum += Math.pow(parseInt(digit), 3);\n}\nif (sum === num) {\n    console.log("Armstrong");  // Armstrong\n} else {\n    console.log("Not Armstrong");\n}',
  hint: 'Convert to string, extract digits, and cube them using `Math.pow()`'
},
{
  id: 'js_conditionals_27',
  topicId: 'js_conditionals',
  question: 'Check if a year is a millennium year (ends with 000).',
  mathSolution: 'Check if divisible by 1000.',
  codeSolution: 'let year = 2000;\nif (year % 1000 === 0) {\n    console.log("Millennium year");  // Millennium year\n} else {\n    console.log("Not millennium year");\n}',
  hint: 'Use `% 1000 === 0`'
},
{
  id: 'js_conditionals_28',
  topicId: 'js_conditionals',
  question: 'Check if a number is a palindrome (same forward and backward).',
  mathSolution: 'Convert to string and compare with reverse.',
  codeSolution: 'let num = 121;\nlet strNum = num.toString();\nif (strNum === strNum.split("").reverse().join("")) {\n    console.log("Palindrome");  // Palindrome\n} else {\n    console.log("Not palindrome");\n}',
  hint: 'Convert to string and reverse'
},
{
  id: 'js_conditionals_29',
  topicId: 'js_conditionals',
  question: 'Check if a triangle is equilateral, isosceles, or scalene.',
  mathSolution: 'Compare side lengths.',
  codeSolution: 'let a = 5, b = 5, c = 5;\nif (a === b && b === c) {\n    console.log("Equilateral");  // Equilateral\n} else if (a === b || b === c || a === c) {\n    console.log("Isosceles");\n} else {\n    console.log("Scalene");\n}',
  hint: 'Compare all three sides using `===` and `||`'
},
{
  id: 'js_conditionals_30',
  topicId: 'js_conditionals',
  question: 'Check if a number is positive and not greater than 100.',
  mathSolution: 'Combine conditions.',
  codeSolution: 'let num = 50;\nif (num > 0 && num <= 100) {\n    console.log("Positive <= 100");  // Positive <= 100\n}',
  hint: 'Use `&&` to combine conditions'
},
{
  id: 'js_conditionals_31',
  topicId: 'js_conditionals',
  question: 'Check if a character is alphabet using if.',
  mathSolution: 'Check ASCII range.',
  codeSolution: 'let ch = "Z";\nif ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {\n    console.log("Alphabet");  // Alphabet\n} else {\n    console.log("Not alphabet");\n}',
  hint: 'Check uppercase A-Z or lowercase a-z'
},
{
  id: 'js_conditionals_32',
  topicId: 'js_conditionals',
  question: 'Check if a number is between 10 and 20 or between 30 and 40.',
  mathSolution: 'Use `||` with ranges.',
  codeSolution: 'let num = 15;\nif ((num >= 10 && num <= 20) || (num >= 30 && num <= 40)) {\n    console.log("In valid range");  // In valid range\n} else {\n    console.log("Out of range");\n}',
  hint: 'Use `||` between two range checks'
},
{
  id: 'js_conditionals_33',
  topicId: 'js_conditionals',
  question: 'Check if a string contains only spaces using if.',
  mathSolution: 'Use trim() or regex.',
  codeSolution: 'let s = "   ";\nif (s.trim() === "") {\n    console.log("Only spaces");  // Only spaces\n} else {\n    console.log("Contains other chars");\n}',
  hint: 'Use `.trim()` to remove spaces and check if empty'
},
{
  id: 'js_conditionals_34',
  topicId: 'js_conditionals',
  question: 'Check if a number is a perfect number (sum of divisors equals number).',
  mathSolution: 'Sum proper divisors and compare.',
  codeSolution: 'let num = 6;\nlet sum = 0;\nfor (let i = 1; i < num; i++) {\n    if (num % i === 0) sum += i;\n}\nif (sum === num) {\n    console.log("Perfect number");  // Perfect number\n} else {\n    console.log("Not perfect");\n}',
  hint: 'Sum all proper divisors (excluding the number itself)'
},
{
  id: 'js_conditionals_35',
  topicId: 'js_conditionals',
  question: 'Check if a number is a strong number (sum of digit factorials equals number).',
  mathSolution: 'Sum factorial of each digit.',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nlet num = 145;\nlet strNum = num.toString();\nlet sum = 0;\nfor (let digit of strNum) {\n    sum += factorial(parseInt(digit));\n}\nif (sum === num) {\n    console.log("Strong number");  // Strong number\n} else {\n    console.log("Not strong");\n}',
  hint: 'Create a factorial function or precompute factorial values'
},
{
  id: 'js_conditionals_36',
  topicId: 'js_conditionals',
  question: 'Check if a number is a Harshad number (divisible by sum of its digits).',
  mathSolution: 'Sum digits and check divisibility.',
  codeSolution: 'let num = 18;\nlet strNum = num.toString();\nlet digitSum = 0;\nfor (let digit of strNum) {\n    digitSum += parseInt(digit);\n}\nif (num % digitSum === 0) {\n    console.log("Harshad number");  // Harshad number\n} else {\n    console.log("Not Harshad");\n}',
  hint: 'num % sum_of_digits === 0'
},
{
  id: 'js_conditionals_37',
  topicId: 'js_conditionals',
  question: 'Check if a number is a duck number (contains 0 but doesn\'t start with 0).',
  mathSolution: 'Check if "0" in string and first char not "0".',
  codeSolution: 'let num = "102";\nif (num.includes("0") && num[0] !== "0") {\n    console.log("Duck number");  // Duck number\n} else {\n    console.log("Not duck");\n}',
  hint: 'Check for zero and leading zero using `.includes()`'
},
{
  id: 'js_conditionals_38',
  topicId: 'js_conditionals',
  question: 'Check if a number is a spy number (sum of digits = product of digits).',
  mathSolution: 'Calculate sum and product of digits.',
  codeSolution: 'let num = 123;\nlet strNum = num.toString();\nlet sum = 0, product = 1;\nfor (let digit of strNum) {\n    let d = parseInt(digit);\n    sum += d;\n    product *= d;\n}\nif (sum === product) {\n    console.log("Spy number");  // Spy number\n} else {\n    console.log("Not spy");\n}',
  hint: 'Compare sum and product of digits'
},
{
  id: 'js_conditionals_39',
  topicId: 'js_conditionals',
  question: 'Check if a number is a neon number (square\'s sum of digits equals number).',
  mathSolution: 'Square number and sum its digits.',
  codeSolution: 'let num = 9;\nlet square = num * num;\nlet squareStr = square.toString();\nlet digitSum = 0;\nfor (let digit of squareStr) {\n    digitSum += parseInt(digit);\n}\nif (digitSum === num) {\n    console.log("Neon number");  // Neon number\n} else {\n    console.log("Not neon");\n}',
  hint: 'Square digit sum should equal original number'
},
{
  id: 'js_conditionals_40',
  topicId: 'js_conditionals',
  question: 'Check if a number is a buzz number (ends with 7 or divisible by 7).',
  mathSolution: 'Check last digit or divisibility.',
  codeSolution: 'let num = 14;\nif (num % 7 === 0 || num % 10 === 7) {\n    console.log("Buzz number");  // Buzz number\n} else {\n    console.log("Not buzz");\n}',
  hint: 'Use `% 7 === 0 || % 10 === 7`'
},
{
  id: 'js_conditionals_41',
  topicId: 'js_conditionals',
  question: 'Check if an array is sorted in ascending order using if.',
  mathSolution: 'Compare each element with next.',
  codeSolution: 'let arr = [1, 2, 3, 4, 5];\nlet isSorted = true;\nfor (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] > arr[i + 1]) {\n        isSorted = false;\n        break;\n    }\n}\nif (isSorted) {\n    console.log("Sorted");  // Sorted\n} else {\n    console.log("Not sorted");\n}',
  hint: 'Loop through array comparing each element with the next'
},
{
  id: 'js_conditionals_42',
  topicId: 'js_conditionals',
  question: 'Check if a number is a sunny number (n+1 is perfect square).',
  mathSolution: 'Check if sqrt(n+1) is integer.',
  codeSolution: 'let num = 8;\nlet sqrt = Math.sqrt(num + 1);\nif (sqrt === Math.floor(sqrt)) {\n    console.log("Sunny number");  // Sunny number\n} else {\n    console.log("Not sunny");\n}',
  hint: 'Square root of (num+1) should be integer'
},
{
  id: 'js_conditionals_43',
  topicId: 'js_conditionals',
  question: 'Check if a number is a fascinating number (multiply by 2 and 3 and concatenate has all digits 1-9 once).',
  mathSolution: 'Concatenate n, 2n, 3n and check digits.',
  codeSolution: 'let num = 192;\nlet concat = num.toString() + (num*2).toString() + (num*3).toString();\nlet sorted = concat.split("").sort().join("");\nif (sorted === "123456789") {\n    console.log("Fascinating");  // Fascinating\n} else {\n    console.log("Not fascinating");\n}',
  hint: 'Check for digits 1-9 each exactly once'
},
{
  id: 'js_conditionals_44',
  topicId: 'js_conditionals',
  question: 'Check if a number is a disarium number (sum of digits ^ position equals number).',
  mathSolution: 'Sum digit^position for each digit.',
  codeSolution: 'let num = 89;\nlet strNum = num.toString();\nlet sum = 0;\nfor (let i = 0; i < strNum.length; i++) {\n    sum += Math.pow(parseInt(strNum[i]), i + 1);\n}\nif (sum === num) {\n    console.log("Disarium");  // Disarium\n} else {\n    console.log("Not disarium");\n}',
  hint: 'Power depends on position (1-indexed)'
},
{
  id: 'js_conditionals_45',
  topicId: 'js_conditionals',
  question: 'Check if a number is an automorphic number (square ends with the number).',
  mathSolution: 'Check if square ends with original number.',
  codeSolution: 'let num = 25;\nlet square = num * num;\nif (square.toString().endsWith(num.toString())) {\n    console.log("Automorphic");  // Automorphic\n} else {\n    console.log("Not automorphic");\n}',
  hint: 'Use `.endsWith()` method'
},
{
  id: 'js_conditionals_46',
  topicId: 'js_conditionals',
  question: 'Check if a string is a valid identifier (starts with letter/$/_, rest alphanumeric/$/_ ).',
  mathSolution: 'Use regex or character checking.',
  codeSolution: 'let s = "_valid1";\nlet isValid = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s);\nif (isValid) {\n    console.log("Valid identifier");  // Valid identifier\n} else {\n    console.log("Invalid identifier");\n}',
  hint: 'Use regex `/^[a-zA-Z_$][a-zA-Z0-9_$]*$/`'
},
{
  id: 'js_conditionals_47',
  topicId: 'js_conditionals',
  question: 'Check if three numbers can form a Pythagorean triplet.',
  mathSolution: 'a² + b² = c² after sorting.',
  codeSolution: 'let a = 3, b = 4, c = 5;\nlet sides = [a, b, c].sort((x, y) => x - y);\nif (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)) {\n    console.log("Pythagorean triplet");  // Pythagorean triplet\n} else {\n    console.log("Not triplet");\n}',
  hint: 'Square of two smaller equals square of largest using `Math.pow()`'
},
{
  id: 'js_conditionals_48',
  topicId: 'js_conditionals',
  question: 'Check if a year is a century leap year (leap year rule for centuries).',
  mathSolution: 'Century years leap only if divisible by 400.',
  codeSolution: 'let year = 2000;\nif (year % 100 === 0) {\n    if (year % 400 === 0) {\n        console.log("Century leap year");  // Century leap year\n    } else {\n        console.log("Century non-leap");\n    }\n} else {\n    console.log("Not century year");\n}',
  hint: 'Century years need %400 test'
},
{
  id: 'js_conditionals_49',
  topicId: 'js_conditionals',
  question: 'Check if a number is a magic number (sum of digits repeatedly until single digit = 1).',
  mathSolution: 'Keep summing digits until 1 digit, check if 1.',
  codeSolution: 'let num = 19;\nwhile (num > 9) {\n    let sum = 0;\n    let strNum = num.toString();\n    for (let digit of strNum) {\n        sum += parseInt(digit);\n    }\n    num = sum;\n}\nif (num === 1) {\n    console.log("Magic number");  // Magic number\n} else {\n    console.log("Not magic");\n}',
  hint: 'Repeatedly sum digits until single digit'
},
{
  id: 'js_conditionals_50',
  topicId: 'js_conditionals',
  question: 'Check if a number is a pronic number (product of two consecutive integers).',
  mathSolution: 'Check if n = k*(k+1) for some integer k.',
  codeSolution: 'let num = 30;\nlet isPronic = false;\nfor (let i = 1; i <= Math.sqrt(num); i++) {\n    if (i * (i + 1) === num) {\n        isPronic = true;\n        break;\n    }\n}\nif (isPronic) {\n    console.log("Pronic number");  // Pronic number\n} else {\n    console.log("Not pronic");\n}',
  hint: 'Check for i*(i+1) === n using loop'
}
);