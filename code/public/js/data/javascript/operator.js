QuizData.questions.push(
{
  id: 'js_operators_1',
  topicId: 'js_operators',
  question: 'Use addition operator (+) to add two numbers and print result.',
  mathSolution: 'Addition operator adds numeric values.',
  codeSolution: 'let a = 10, b = 20;\nlet sum = a + b;\nconsole.log(sum);  // 30',
  hint: 'Use `+` operator between numbers.'
},
{
  id: 'js_operators_2',
  topicId: 'js_operators',
  question: 'Use subtraction operator (-) to subtract two numbers.',
  mathSolution: 'Subtraction operator subtracts second from first.',
  codeSolution: 'let a = 25, b = 10;\nlet difference = a - b;\nconsole.log(difference);  // 15',
  hint: 'Use `-` operator between numbers.'
},
{
  id: 'js_operators_3',
  topicId: 'js_operators',
  question: 'Use multiplication operator (*) to multiply two numbers.',
  mathSolution: 'Multiplication operator multiplies values.',
  codeSolution: 'let a = 6, b = 7;\nlet product = a * b;\nconsole.log(product);  // 42',
  hint: 'Use `*` operator between numbers.'
},
{
  id: 'js_operators_4',
  topicId: 'js_operators',
  question: 'Use division operator (/) to divide two numbers.',
  mathSolution: 'Division operator returns quotient.',
  codeSolution: 'let a = 20, b = 4;\nlet quotient = a / b;\nconsole.log(quotient);  // 5',
  hint: 'Use `/` operator between numbers.'
},
{
  id: 'js_operators_5',
  topicId: 'js_operators',
  question: 'Use modulus operator (%) to get remainder of division.',
  mathSolution: 'Modulus returns remainder after division.',
  codeSolution: 'let a = 17, b = 5;\nlet remainder = a % b;\nconsole.log(remainder);  // 2',
  hint: 'Use `%` to get remainder.'
},
{
  id: 'js_operators_6',
  topicId: 'js_operators',
  question: 'Use exponentiation operator (**) to calculate power.',
  mathSolution: 'Exponentiation raises first to power of second.',
  codeSolution: 'let base = 2, exponent = 3;\nlet result = base ** exponent;\nconsole.log(result);  // 8',
  hint: 'Use `**` operator for power.'
},
{
  id: 'js_operators_7',
  topicId: 'js_operators',
  question: 'Use increment operator (++) as postfix.',
  mathSolution: 'Postfix increments after using value.',
  codeSolution: 'let x = 5;\nlet y = x++;\nconsole.log(x, y);  // 6 5',
  hint: '`x++` returns old value then increments.'
},
{
  id: 'js_operators_8',
  topicId: 'js_operators',
  question: 'Use increment operator (++) as prefix.',
  mathSolution: 'Prefix increments then uses new value.',
  codeSolution: 'let x = 5;\nlet y = ++x;\nconsole.log(x, y);  // 6 6',
  hint: '`++x` increments then returns new value.'
},
{
  id: 'js_operators_9',
  topicId: 'js_operators',
  question: 'Use decrement operator (--) as postfix.',
  mathSolution: 'Postfix decrements after using value.',
  codeSolution: 'let x = 5;\nlet y = x--;\nconsole.log(x, y);  // 4 5',
  hint: '`x--` returns old value then decrements.'
},
{
  id: 'js_operators_10',
  topicId: 'js_operators',
  question: 'Use decrement operator (--) as prefix.',
  mathSolution: 'Prefix decrements then uses new value.',
  codeSolution: 'let x = 5;\nlet y = --x;\nconsole.log(x, y);  // 4 4',
  hint: '`--x` decrements then returns new value.'
},
{
  id: 'js_operators_11',
  topicId: 'js_operators',
  question: 'Use addition assignment operator (+=).',
  mathSolution: 'Adds right operand to left and assigns.',
  codeSolution: 'let x = 10;\nx += 5;  // same as x = x + 5\nconsole.log(x);  // 15',
  hint: '`x += y` is shorthand for `x = x + y`.'
},
{
  id: 'js_operators_12',
  topicId: 'js_operators',
  question: 'Use subtraction assignment operator (-=).',
  mathSolution: 'Subtracts right from left and assigns.',
  codeSolution: 'let x = 10;\nx -= 3;  // same as x = x - 3\nconsole.log(x);  // 7',
  hint: '`x -= y` is shorthand for `x = x - y`.'
},
{
  id: 'js_operators_13',
  topicId: 'js_operators',
  question: 'Use multiplication assignment operator (*=).',
  mathSolution: 'Multiplies left by right and assigns.',
  codeSolution: 'let x = 6;\nx *= 4;  // same as x = x * 4\nconsole.log(x);  // 24',
  hint: '`x *= y` is shorthand for `x = x * y`.'
},
{
  id: 'js_operators_14',
  topicId: 'js_operators',
  question: 'Use division assignment operator (/=).',
  mathSolution: 'Divides left by right and assigns.',
  codeSolution: 'let x = 20;\nx /= 4;  // same as x = x / 4\nconsole.log(x);  // 5',
  hint: '`x /= y` is shorthand for `x = x / y`.'
},
{
  id: 'js_operators_15',
  topicId: 'js_operators',
  question: 'Use modulus assignment operator (%=).',
  mathSolution: 'Assigns remainder of division.',
  codeSolution: 'let x = 17;\nx %= 5;  // same as x = x % 5\nconsole.log(x);  // 2',
  hint: '`x %= y` is shorthand for `x = x % y`.'
},
{
  id: 'js_operators_16',
  topicId: 'js_operators',
  question: 'Use exponentiation assignment operator (**=).',
  mathSolution: 'Raises left to power of right and assigns.',
  codeSolution: 'let x = 2;\nx **= 3;  // same as x = x ** 3\nconsole.log(x);  // 8',
  hint: '`x **= y` is shorthand for `x = x ** y`.'
},
{
  id: 'js_operators_17',
  topicId: 'js_operators',
  question: 'Use equality operator (==) to compare two values.',
  mathSolution: 'Equality checks value after type coercion.',
  codeSolution: 'console.log(5 == 5);  // true\nconsole.log(5 == "5");  // true (type coercion)\nconsole.log(5 == 6);  // false',
  hint: '`==` compares values, not types.'
},
{
  id: 'js_operators_18',
  topicId: 'js_operators',
  question: 'Use strict equality operator (===) to compare.',
  mathSolution: 'Strict equality checks value AND type.',
  codeSolution: 'console.log(5 === 5);  // true\nconsole.log(5 === "5");  // false (different types)\nconsole.log(5 === 6);  // false',
  hint: '`===` compares both value and type.'
},
{
  id: 'js_operators_19',
  topicId: 'js_operators',
  question: 'Use inequality operator (!=).',
  mathSolution: 'Checks if values are not equal (with coercion).',
  codeSolution: 'console.log(5 != 3);  // true\nconsole.log(5 != "5");  // false (coerced equal)\nconsole.log(5 != 5);  // false',
  hint: '`!=` checks inequality with type coercion.'
},
{
  id: 'js_operators_20',
  topicId: 'js_operators',
  question: 'Use strict inequality operator (!==).',
  mathSolution: 'Checks if values are not equal in value or type.',
  codeSolution: 'console.log(5 !== "5");  // true (different types)\nconsole.log(5 !== 3);  // true\nconsole.log(5 !== 5);  // false',
  hint: '`!==` checks inequality without type coercion.'
},
{
  id: 'js_operators_21',
  topicId: 'js_operators',
  question: 'Use greater than operator (>).',
  mathSolution: 'Checks if left is greater than right.',
  codeSolution: 'console.log(10 > 5);  // true\nconsole.log(5 > 10);  // false\nconsole.log(5 > 5);  // false',
  hint: '`>` returns true if left > right.'
},
{
  id: 'js_operators_22',
  topicId: 'js_operators',
  question: 'Use greater than or equal operator (>=).',
  mathSolution: 'Checks if left is greater than or equal to right.',
  codeSolution: 'console.log(10 >= 5);  // true\nconsole.log(5 >= 5);  // true\nconsole.log(3 >= 5);  // false',
  hint: '`>=` returns true if left >= right.'
},
{
  id: 'js_operators_23',
  topicId: 'js_operators',
  question: 'Use less than operator (<).',
  mathSolution: 'Checks if left is less than right.',
  codeSolution: 'console.log(3 < 10);  // true\nconsole.log(10 < 5);  // false\nconsole.log(5 < 5);  // false',
  hint: '`<` returns true if left < right.'
},
{
  id: 'js_operators_24',
  topicId: 'js_operators',
  question: 'Use less than or equal operator (<=).',
  mathSolution: 'Checks if left is less than or equal to right.',
  codeSolution: 'console.log(3 <= 5);  // true\nconsole.log(5 <= 5);  // true\nconsole.log(10 <= 5);  // false',
  hint: '`<=` returns true if left <= right.'
},
{
  id: 'js_operators_25',
  topicId: 'js_operators',
  question: 'Use logical AND operator (&&).',
  mathSolution: 'Returns true if both operands are truthy.',
  codeSolution: 'console.log(true && true);  // true\nconsole.log(true && false);  // false\nconsole.log(5 > 3 && 10 > 5);  // true',
  hint: '`&&` requires both conditions to be true.'
},
{
  id: 'js_operators_26',
  topicId: 'js_operators',
  question: 'Use logical OR operator (||).',
  mathSolution: 'Returns true if at least one operand is truthy.',
  codeSolution: 'console.log(true || false);  // true\nconsole.log(false || false);  // false\nconsole.log(5 > 10 || 10 > 5);  // true',
  hint: '`||` requires at least one condition to be true.'
},
{
  id: 'js_operators_27',
  topicId: 'js_operators',
  question: 'Use logical NOT operator (!).',
  mathSolution: 'Inverts boolean value.',
  codeSolution: 'console.log(!true);  // false\nconsole.log(!false);  // true\nconsole.log(!(5 > 3));  // false',
  hint: '`!` negates the truth value.'
},
{
  id: 'js_operators_28',
  topicId: 'js_operators',
  question: 'Use ternary operator (?:) for conditional assignment.',
  mathSolution: 'condition ? value_if_true : value_if_false',
  codeSolution: 'let age = 18;\nlet status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);  // Adult',
  hint: '`condition ? trueValue : falseValue`'
},
{
  id: 'js_operators_29',
  topicId: 'js_operators',
  question: 'Use typeof operator to check variable type.',
  mathSolution: 'typeof returns string indicating type.',
  codeSolution: 'console.log(typeof 42);  // number\nconsole.log(typeof "hello");  // string\nconsole.log(typeof true);  // boolean',
  hint: '`typeof variable` returns type as string.'
},
{
  id: 'js_operators_30',
  topicId: 'js_operators',
  question: 'Use instanceof operator to check object type.',
  mathSolution: 'Checks if object is instance of constructor.',
  codeSolution: 'let arr = [1, 2, 3];\nlet date = new Date();\nconsole.log(arr instanceof Array);  // true\nconsole.log(date instanceof Date);  // true',
  hint: '`object instanceof Constructor` checks prototype chain.'
},
{
  id: 'js_operators_31',
  topicId: 'js_operators',
  question: 'Use bitwise AND operator (&).',
  mathSolution: 'Performs AND on each bit.',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a & b);  // 1 (001 binary)',
  hint: 'Bitwise AND returns 1 where both bits are 1.'
},
{
  id: 'js_operators_32',
  topicId: 'js_operators',
  question: 'Use bitwise OR operator (|).',
  mathSolution: 'Performs OR on each bit.',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a | b);  // 7 (111 binary)',
  hint: 'Bitwise OR returns 1 where at least one bit is 1.'
},
{
  id: 'js_operators_33',
  topicId: 'js_operators',
  question: 'Use bitwise XOR operator (^).',
  mathSolution: 'Performs XOR on each bit (exclusive OR).',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a ^ b);  // 6 (110 binary)',
  hint: 'XOR returns 1 where bits are different.'
},
{
  id: 'js_operators_34',
  topicId: 'js_operators',
  question: 'Use bitwise NOT operator (~).',
  mathSolution: 'Inverts all bits (returns -(n+1)).',
  codeSolution: 'let a = 5;\nconsole.log(~a);  // -6 (inverts bits: -5-1 = -6)',
  hint: '`~n` equals `-(n+1)`.'
},
{
  id: 'js_operators_35',
  topicId: 'js_operators',
  question: 'Use left shift operator (<<).',
  mathSolution: 'Shifts bits left, filling with zeros.',
  codeSolution: 'let a = 5;  // 101 binary\nconsole.log(a << 1);  // 10 (1010 binary, 5*2=10)',
  hint: 'Left shift by 1 multiplies by 2.'
},
{
  id: 'js_operators_36',
  topicId: 'js_operators',
  question: 'Use right shift operator (>>).',
  mathSolution: 'Shifts bits right, preserving sign.',
  codeSolution: 'let a = 10;  // 1010 binary\nconsole.log(a >> 1);  // 5 (101 binary, 10/2=5)',
  hint: 'Right shift by 1 divides by 2.'
},
{
  id: 'js_operators_37',
  topicId: 'js_operators',
  question: 'Use zero-fill right shift operator (>>>).',
  mathSolution: 'Shifts right, filling with zeros (unsigned).',
  codeSolution: 'let a = -5;\nconsole.log(a >>> 1);  // 2147483645 (treats as unsigned)',
  hint: '`>>>` shifts zero bits from left, works on unsigned numbers.'
},
{
  id: 'js_operators_38',
  topicId: 'js_operators',
  question: 'Use comma operator (,) to combine expressions.',
  mathSolution: 'Evaluates all, returns last value.',
  codeSolution: 'let x = (5, 10, 15);\nconsole.log(x);  // 15\nfor (let i = 0, j = 10; i < j; i++, j--) {\n    console.log(i, j);\n}',
  hint: 'Comma operator returns value of last expression.'
},
{
  id: 'js_operators_39',
  topicId: 'js_operators',
  question: 'Use delete operator to delete object property.',
  mathSolution: 'Deletes property from object.',
  codeSolution: 'let person = { name: "John", age: 30 };\ndelete person.age;\nconsole.log(person);  // { name: "John" }',
  hint: '`delete object.property` removes property.'
},
{
  id: 'js_operators_40',
  topicId: 'js_operators',
  question: 'Use in operator to check property existence.',
  mathSolution: 'Returns true if property exists in object.',
  codeSolution: 'let car = { brand: "Toyota", year: 2020 };\nconsole.log("brand" in car);  // true\nconsole.log("model" in car);  // false',
  hint: '`"property" in object` checks property existence.'
},
{
  id: 'js_operators_41',
  topicId: 'js_operators',
  question: 'Use instanceof with custom class.',
  mathSolution: 'Checks if object is instance of specific class.',
  codeSolution: 'class Animal {}\nclass Dog extends Animal {}\nlet myDog = new Dog();\nconsole.log(myDog instanceof Dog);  // true\nconsole.log(myDog instanceof Animal);  // true',
  hint: '`instanceof` works with inheritance chain.'
},
{
  id: 'js_operators_42',
  topicId: 'js_operators',
  question: 'Use new operator to create object instance.',
  mathSolution: 'Creates new instance of constructor.',
  codeSolution: 'function Person(name) {\n    this.name = name;\n}\nlet john = new Person("John");\nconsole.log(john.name);  // John',
  hint: '`new Constructor()` creates object instance.'
},
{
  id: 'js_operators_43',
  topicId: 'js_operators',
  question: 'Use void operator to evaluate expression without returning value.',
  mathSolution: 'Void evaluates expression and returns undefined.',
  codeSolution: 'console.log(void 0);  // undefined\nconsole.log(void (2 + 3));  // undefined\n// Often used with javascript: URLs',
  hint: '`void expression` always returns undefined.'
},
{
  id: 'js_operators_44',
  topicId: 'js_operators',
  question: 'Demonstrate operator precedence with parentheses.',
  mathSolution: 'Parentheses have highest precedence.',
  codeSolution: 'let result1 = 2 + 3 * 4;  // 14 (multiplication first)\nlet result2 = (2 + 3) * 4;  // 20 (parentheses first)\nconsole.log(result1, result2);  // 14 20',
  hint: 'Use `()` to control evaluation order.'
},
{
  id: 'js_operators_45',
  topicId: 'js_operators',
  question: 'Use typeof with undeclared variable (safe).',
  mathSolution: 'typeof returns "undefined" for undeclared vars.',
  codeSolution: 'console.log(typeof nonExistentVar);  // undefined (no error)',
  hint: '`typeof` is safe for checking undeclared variables.'
},
{
  id: 'js_operators_46',
  topicId: 'js_operators',
  question: 'Use nullish coalescing operator (??).',
  mathSolution: 'Returns right operand only if left is null/undefined.',
  codeSolution: 'let value = null;\nlet result = value ?? "default";\nconsole.log(result);  // default\nlet num = 0;\nconsole.log(num ?? 100);  // 0 (0 is not null/undefined)',
  hint: '`??` only checks for null or undefined, not falsy values.'
},
{
  id: 'js_operators_47',
  topicId: 'js_operators',
  question: 'Use optional chaining operator (?. ).',
  mathSolution: 'Safely access nested properties without error.',
  codeSolution: 'let user = { profile: { name: "Alice" } };\nconsole.log(user?.profile?.name);  // Alice\nconsole.log(user?.address?.city);  // undefined (no error)',
  hint: '`?.` stops evaluation if left side is null/undefined.'
},
{
  id: 'js_operators_48',
  topicId: 'js_operators',
  question: 'Combine nullish coalescing with optional chaining.',
  mathSolution: 'Safe access with default fallback.',
  codeSolution: 'let user = { name: "John" };\nlet city = user?.address?.city ?? "Unknown";\nconsole.log(city);  // Unknown (no error)',
  hint: 'Use `?.` for safe access and `??` for defaults.'
},
{
  id: 'js_operators_49',
  topicId: 'js_operators',
  question: 'Use spread operator (...) with arrays.',
  mathSolution: 'Spreads array elements into individual items.',
  codeSolution: 'let arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2];\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: '`...array` expands array elements.'
},
{
  id: 'js_operators_50',
  topicId: 'js_operators',
  question: 'Use spread operator (...) with objects.',
  mathSolution: 'Spreads object properties into new object.',
  codeSolution: 'let obj1 = { a: 1, b: 2 };\nlet obj2 = { c: 3, d: 4 };\nlet merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }',
  hint: '`...object` spreads object properties.'
}
);