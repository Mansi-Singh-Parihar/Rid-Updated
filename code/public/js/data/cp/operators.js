QuizData.questions.push(
  // ============ LEVEL 1: ARITHMETIC OPERATORS (1-10) ============
  {
    id: 'c_operators_001',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate arithmetic operators: +, -, *, /, %.',
    mathSolution: 'Basic arithmetic operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Addition (a + b) = %d\\n", a + b);\n    printf("Subtraction (a - b) = %d\\n", a - b);\n    printf("Multiplication (a * b) = %d\\n", a * b);\n    printf("Division (a / b) = %d (integer division)\\n", a / b);\n    printf("Modulus (a %% b) = %d (remainder)\\n", a % b);\n    \n    return 0;\n}',
    hint: 'Arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus/remainder)'
  },
  {
    id: 'c_operators_002',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate integer division vs float division.',
    mathSolution: 'Integer vs float division',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    float x = 10.0f, y = 3.0f;\n    \n    printf("Integer division: %d / %d = %d\\n", a, b, a / b);\n    printf("Float division: %.1f / %.1f = %.2f\\n", x, y, x / y);\n    \n    // Mixed type division\n    printf("Mixed division (int/float): %d / %.1f = %.2f\\n", a, y, a / y);\n    printf("Mixed division (float/int): %.1f / %d = %.2f\\n", x, b, x / b);\n    \n    return 0;\n}',
    hint: 'Integer division truncates toward zero; float division gives decimal results'
  },
  {
    id: 'c_operators_003',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate modulus operator with positive and negative numbers.',
    mathSolution: 'Modulus with negative numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("10 %% 3 = %d\\n", 10 % 3);\n    printf("10 %% -3 = %d\\n", 10 % -3);\n    printf("-10 %% 3 = %d\\n", -10 % 3);\n    printf("-10 %% -3 = %d\\n", -10 % -3);\n    \n    printf("\\nNote: Modulus result has same sign as dividend\\n");\n    \n    return 0;\n}',
    hint: 'In C, modulus result has the same sign as the dividend (left operand)'
  },
  {
    id: 'c_operators_004',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence in arithmetic expressions.',
    mathSolution: 'Operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    printf("a + b * c = %d (multiplication first)\\n", a + b * c);\n    printf("(a + b) * c = %d (parentheses change order)\\n", (a + b) * c);\n    printf("a * b / c = %d (left to right for same precedence)\\n", a * b / c);\n    printf("a / b * c = %d (left to right)\\n", a / b * c);\n    \n    return 0;\n}',
    hint: 'Operator precedence: * / % have higher precedence than + -. Use parentheses for clarity'
  },
  {
    id: 'c_operators_005',
    topicId: 'c_operators',
    question: 'Write a program to calculate area and perimeter of rectangle using arithmetic operators.',
    mathSolution: 'Rectangle area and perimeter',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float length, width, area, perimeter;\n    \n    printf("Enter length of rectangle: ");\n    scanf("%f", &length);\n    printf("Enter width of rectangle: ");\n    scanf("%f", &width);\n    \n    area = length * width;\n    perimeter = 2 * (length + width);\n    \n    printf("\\nLength = %.2f, Width = %.2f\\n", length, width);\n    printf("Area = %.2f square units\\n", area);\n    printf("Perimeter = %.2f units\\n", perimeter);\n    \n    return 0;\n}',
    hint: 'Area = length × width, Perimeter = 2 × (length + width)'
  },
  {
    id: 'c_operators_006',
    topicId: 'c_operators',
    question: 'Write a program to calculate simple interest using arithmetic operators.',
    mathSolution: 'Simple interest calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest, amount;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest (%%): ");\n    scanf("%f", &rate);\n    printf("Enter time (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    amount = principal + interest;\n    \n    printf("\\nPrincipal = %.2f\\n", principal);\n    printf("Rate = %.2f%%\\n", rate);\n    printf("Time = %.2f years\\n", time);\n    printf("Simple Interest = %.2f\\n", interest);\n    printf("Total Amount = %.2f\\n", amount);\n    \n    return 0;\n}',
    hint: 'Simple Interest = (P × R × T) / 100'
  },
  {
    id: 'c_operators_007',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using arithmetic operators without third variable.',
    mathSolution: 'Swap using arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;  // a becomes 30\n    b = a - b;  // b becomes 10\n    a = a - b;  // a becomes 20\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Swap using addition and subtraction: a = a + b; b = a - b; a = a - b;'
  },
  {
    id: 'c_operators_008',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is even or odd using modulus operator.',
    mathSolution: 'Even/odd check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is even if num % 2 == 0, odd if num % 2 == 1'
  },
  {
    id: 'c_operators_009',
    topicId: 'c_operators',
    question: 'Write a program to find the last digit of a number using modulus operator.',
    mathSolution: 'Last digit extraction',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, lastDigit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    lastDigit = num % 10;\n    \n    printf("Number: %d\\n", num);\n    printf("Last digit: %d\\n", lastDigit);\n    \n    // For negative numbers\n    printf("\\nFor negative numbers:\\n");\n    printf("-123 %% 10 = %d\\n", -123 % 10);\n    \n    return 0;\n}',
    hint: 'num % 10 gives the last digit of a number'
  },
  {
    id: 'c_operators_010',
    topicId: 'c_operators',
    question: 'Write a program to extract digits from a number using division and modulus.',
    mathSolution: 'Extract digits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 12345;\n    int d1, d2, d3, d4, d5;\n    \n    d5 = num % 10;        // last digit\n    num = num / 10;        // remove last digit\n    d4 = num % 10;\n    num = num / 10;\n    d3 = num % 10;\n    num = num / 10;\n    d2 = num % 10;\n    num = num / 10;\n    d1 = num % 10;\n    \n    printf("Original number: 12345\\n");\n    printf("Digits: %d %d %d %d %d\\n", d1, d2, d3, d4, d5);\n    \n    return 0;\n}',
    hint: 'Use num % 10 to get last digit, num / 10 to remove last digit'
  },

  // ============ LEVEL 2: RELATIONAL OPERATORS (11-15) ============
  {
    id: 'c_operators_011',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate relational operators: <, >, <=, >=, ==, !=.',
    mathSolution: 'Relational operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("a < b  = %d\\n", a < b);\n    printf("a > b  = %d\\n", a > b);\n    printf("a <= b = %d\\n", a <= b);\n    printf("a >= b = %d\\n", a >= b);\n    printf("a == b = %d\\n", a == b);\n    printf("a != b = %d\\n", a != b);\n    \n    return 0;\n}',
    hint: 'Relational operators return 1 (true) or 0 (false)'
  },
  {
    id: 'c_operators_012',
    topicId: 'c_operators',
    question: 'Write a program to find the largest of two numbers using relational operators.',
    mathSolution: 'Largest of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    \n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    \n    if(a > b) {\n        printf("%d is larger than %d\\n", a, b);\n    } else if(b > a) {\n        printf("%d is larger than %d\\n", b, a);\n    } else {\n        printf("Both numbers are equal\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Use > and < operators to compare numbers'
  },
  {
    id: 'c_operators_013',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is positive, negative, or zero using relational operators.',
    mathSolution: 'Positive/negative check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check num > 0 for positive, num < 0 for negative'
  },
  {
    id: 'c_operators_014',
    topicId: 'c_operators',
    question: 'Write a program to check if a person is eligible to vote using relational operators.',
    mathSolution: 'Voting eligibility',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age;\n    const int VOTING_AGE = 18;\n    \n    printf("Enter your age: ");\n    scanf("%d", &age);\n    \n    if(age >= VOTING_AGE) {\n        printf("You are eligible to vote\\n");\n        printf("Age %d is >= %d\\n", age, VOTING_AGE);\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("You need %d more years\\n", VOTING_AGE - age);\n    }\n    \n    return 0;\n}',
    hint: 'Voting eligibility: age >= 18'
  },
  {
    id: 'c_operators_015',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate common mistake: using = instead of ==.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    \n    // Common mistake: using = instead of ==\n    if(a = 10) {  // Assignment, not comparison!\n        printf("This always executes because a = 10 is true\\n");\n        printf("Value of a is now %d\\n", a);\n    }\n    \n    // Correct way\n    a = 5;\n    if(a == 10) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Correct: a == 10 is false\\n");\n    }\n    \n    return 0;\n}',
    hint: '= is assignment, == is equality comparison. Never use = in conditions'
  },

  // ============ LEVEL 3: LOGICAL OPERATORS (16-20) ============
  {
    id: 'c_operators_016',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate logical operators: && (AND), || (OR), ! (NOT).',
    mathSolution: 'Logical operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 5;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // AND operator\n    printf("(a > c) && (b > a) = %d\\n", (a > c) && (b > a));\n    printf("(a > b) && (b > c) = %d\\n", (a > b) && (b > c));\n    \n    // OR operator\n    printf("(a > b) || (b > c) = %d\\n", (a > b) || (b > c));\n    printf("(a > b) || (a < c) = %d\\n", (a > b) || (a < c));\n    \n    // NOT operator\n    printf("!(a > b) = %d\\n", !(a > b));\n    printf("!(a < b) = %d\\n", !(a < b));\n    \n    return 0;\n}',
    hint: '&& returns true if both true, || returns true if at least one true, ! reverses the result'
  },
  {
    id: 'c_operators_017',
    topicId: 'c_operators',
    question: 'Write a program to check if a year is leap year using logical operators.',
    mathSolution: 'Leap year check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year;\n    \n    printf("Enter a year: ");\n    scanf("%d", &year);\n    \n    // Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)\n    if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    \n    return 0;\n}',
    hint: 'Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)'
  },
  {
    id: 'c_operators_018',
    topicId: 'c_operators',
    question: 'Write a program to check if a character is vowel using logical operators.',
    mathSolution: 'Vowel check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    // Check for both uppercase and lowercase vowels\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_operators_019',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate short-circuit evaluation in logical operators.',
    mathSolution: 'Short-circuit evaluation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 0, b = 10;\n    \n    // In &&, if first is false, second is not evaluated\n    if(a != 0 && (b / a) > 5) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Short-circuit: division by zero avoided\\n");\n    }\n    \n    // In ||, if first is true, second is not evaluated\n    a = 5;\n    if(a > 0 || (b / 0)) {\n        printf("Short-circuit: second expression not evaluated\\n");\n    }\n    \n    return 0;\n}',
    hint: 'In &&, if left is false, right is not evaluated. In ||, if left is true, right is not evaluated'
  },
  {
    id: 'c_operators_020',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is in a specific range using logical operators.',
    mathSolution: 'Range check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    int lower = 10, upper = 50;\n    \n    printf("Enter a number between %d and %d: ", lower, upper);\n    scanf("%d", &num);\n    \n    if(num >= lower && num <= upper) {\n        printf("%d is within the range [%d, %d]\\n", num, lower, upper);\n    } else {\n        printf("%d is outside the range\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'Use && to check if a number is within range: num >= lower && num <= upper'
  },

  // ============ LEVEL 4: ASSIGNMENT OPERATORS (21-25) ============
  {
    id: 'c_operators_021',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate assignment operators: =, +=, -=, *=, /=, %=.',
    mathSolution: 'Assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    \n    printf("Initial a = %d\\n", a);\n    \n    a += 5;  // a = a + 5\n    printf("After a += 5: %d\\n", a);\n    \n    a -= 3;  // a = a - 3\n    printf("After a -= 3: %d\\n", a);\n    \n    a *= 2;  // a = a * 2\n    printf("After a *= 2: %d\\n", a);\n    \n    a /= 4;  // a = a / 4\n    printf("After a /= 4: %d\\n", a);\n    \n    a %= 3;  // a = a % 3\n    printf("After a %%= 3: %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Assignment operators combine arithmetic with assignment: +=, -=, *=, /=, %='
  },
  {
    id: 'c_operators_022',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise assignment operators: &=, |=, ^=, <<=, >>=.',
    mathSolution: 'Bitwise assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    \n    printf("Initial a = %u (binary: 1100)\\n", a);\n    \n    a &= 10;  // a = a & 10 (1100 & 1010 = 1000 = 8)\n    printf("After a &= 10: %u (binary: 1000)\\n", a);\n    \n    a |= 5;   // a = a | 5 (1000 | 0101 = 1101 = 13)\n    printf("After a |= 5: %u (binary: 1101)\\n", a);\n    \n    a ^= 6;   // a = a ^ 6 (1101 ^ 0110 = 1011 = 11)\n    printf("After a ^= 6: %u (binary: 1011)\\n", a);\n    \n    a <<= 2;  // a = a << 2 (1011 << 2 = 101100 = 44)\n    printf("After a <<= 2: %u\\n", a);\n    \n    a >>= 1;  // a = a >> 1 (101100 >> 1 = 10110 = 22)\n    printf("After a >>= 1: %u\\n", a);\n    \n    return 0;\n}',
    hint: 'Bitwise assignment operators: &= (AND), |= (OR), ^= (XOR), <<= (left shift), >>= (right shift)'
  },
 {
    id: 'c_operators_023',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate chained assignment.',
    mathSolution: 'Chained assignment (right to left)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    int x, y;\n    \n    a = b = c = 10;  // Chained assignment (right to left)\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("c = %d\\n", c);\n    \n    // Assignment in expression\n    x = (y = 5) + 3;\n    printf("\\nx = (y = 5) + 3 => x = %d, y = %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'Assignment operators associate right-to-left: a = b = c = 10 means c = 10, b = c, a = b'
},
  {
    id: 'c_operators_024',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate compound assignment for calculations.',
    mathSolution: 'Compound assignment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sum = 0, product = 1;\n    int numbers[] = {2, 3, 4, 5};\n    \n    printf("Numbers: ");\n    for(int i = 0; i < 4; i++) {\n        printf("%d ", numbers[i]);\n        sum += numbers[i];      // sum = sum + numbers[i]\n        product *= numbers[i];   // product = product * numbers[i]\n    }\n    \n    printf("\\nSum = %d\\n", sum);\n    printf("Product = %d\\n", product);\n    \n    return 0;\n}',
    hint: 'Compound assignment operators are commonly used in loops for accumulation'
  },
  {
    id: 'c_operators_025',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate difference between assignment and equality.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    \n    // Assignment (=) assigns a value\n    printf("Assignment: a = b sets a to %d\\n", a = b);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    // Reset values\n    a = 5, b = 10;\n    \n    // Equality (==) compares values\n    printf("\\nEquality: a == b is %d\\n", a == b);\n    printf("a = %d, b = %d unchanged\\n", a, b);\n    \n    return 0;\n}',
    hint: '= assigns a value, == compares values. Never confuse them!'
  },

  // ============ LEVEL 5: INCREMENT/DECREMENT OPERATORS (26-30) ============
  {
    id: 'c_operators_026',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix increment operators.',
    mathSolution: 'Prefix vs postfix increment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = ++a;  // Prefix increment: first increment, then use\n    y = b++;  // Postfix increment: first use, then increment\n    \n    printf("After ++a: a = %d, x = %d\\n", a, x);\n    printf("After b++: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("++a + b++ = %d\\n", ++a + b++);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '++a increments then returns value, a++ returns value then increments'
  },
  {
    id: 'c_operators_027',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix decrement operators.',
    mathSolution: 'Prefix vs postfix decrement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = --a;  // Prefix decrement: first decrement, then use\n    y = b--;  // Postfix decrement: first use, then decrement\n    \n    printf("After --a: a = %d, x = %d\\n", a, x);\n    printf("After b--: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("--a + b-- = %d\\n", --a + b--);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '--a decrements then returns value, a-- returns value then decrements'
  },
  {
    id: 'c_operators_028',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment operators in loops.',
    mathSolution: 'Increment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Using i++ in for loop:\\n");\n    for(int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing ++i in for loop:\\n");\n    for(int i = 1; i <= 5; ++i) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing i-- in while loop:\\n");\n    int i = 5;\n    while(i > 0) {\n        printf("%d ", i--);\n    }\n    \n    printf("\\n\\nUsing --i in while loop:\\n");\n    i = 5;\n    while(i > 0) {\n        printf("%d ", --i);\n    }\n    \n    return 0;\n}',
    hint: 'In for loops, i++ and ++i behave the same when used alone'
  },
  {
    id: 'c_operators_029',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate multiple increment/decrement in one expression.',
    mathSolution: 'Multiple increments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    int result = ++a + a++ + --b + b--;\n    \n    printf("++a + a++ + --b + b-- = %d\\n", result);\n    printf("Final: a = %d, b = %d\\n", a, b);\n    \n    printf("\\nNote: Behavior can be compiler-dependent!\\n");\n    \n    return 0;\n}',
    hint: 'Avoid multiple increments in one expression - behavior may be undefined or compiler-dependent'
  },
  {
    id: 'c_operators_030',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment/decrement with pointers.',
    mathSolution: 'Increment with pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    \n    printf("Array: 10, 20, 30, 40, 50\\n");\n    printf("Initial *ptr = %d\\n", *ptr);\n    \n    printf("\\nPointer arithmetic:\\n");\n    printf("*ptr++ = %d (first %d, then ptr moves)\\n", *ptr++, *ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    printf("\\n*++ptr = %d (first ptr moves, then dereference)\\n", *++ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    return 0;\n}',
    hint: '*ptr++ dereferences then increments pointer, *++ptr increments pointer then dereferences'
  },

  // ============ LEVEL 6: BITWISE OPERATORS (31-40) ============
  {
    id: 'c_operators_031',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise AND (&) operator.',
    mathSolution: 'Bitwise AND',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a & b = %u (binary: 1000 = 8)\\n", a & b);\n    \n    // Common use: checking if a bit is set\n    unsigned int flag = 8;  // 1000 binary\n    if(a & flag) {\n        printf("\\nBit 3 is set in a\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Bitwise AND (&) sets each bit to 1 if both bits are 1'
  },
  {
    id: 'c_operators_032',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise OR (|) operator.',
    mathSolution: 'Bitwise OR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a | b = %u (binary: 1110 = 14)\\n", a | b);\n    \n    // Common use: setting bits\n    unsigned int flags = 0;\n    flags = flags | 4;  // set bit 2\n    printf("\\nflags after setting bit 2: %u\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bitwise OR (|) sets each bit to 1 if at least one bit is 1'
  },
  {
    id: 'c_operators_033',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise XOR (^) operator.',
    mathSolution: 'Bitwise XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a ^ b = %u (binary: 0110 = 6)\\n", a ^ b);\n    \n    // XOR properties\n    unsigned int c = 7;\n    printf("\\nXOR properties:\\n");\n    printf("c ^ c = %u\\n", c ^ c);  // Always 0\n    printf("c ^ 0 = %u\\n", c ^ 0);  // Always c\n    \n    return 0;\n}',
    hint: 'Bitwise XOR (^) sets each bit to 1 if bits are different'
  },
  {
    id: 'c_operators_034',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise NOT (~) operator.',
    mathSolution: 'Bitwise NOT (ones complement)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 00000000 00000000 00000000 00001100\n    \n    printf("a = %u\\n", a);\n    printf("~a = %u (all bits flipped)\\n", ~a);\n    \n    // For smaller types\n    unsigned char b = 12;  // 00001100\n    printf("\\nunsigned char b = %u\\n", b);\n    printf("~b = %u (as int: %d)\\n", ~b, ~b);\n    \n    return 0;\n}',
    hint: 'Bitwise NOT (~) flips all bits (ones complement)'
  },
  {
    id: 'c_operators_035',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate left shift (<<) operator.',
    mathSolution: 'Left shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 5;  // 0101 in binary\n    \n    printf("a = %u (binary: 0101)\\n", a);\n    printf("a << 1 = %u (binary: 1010 = %d, multiply by 2)\\n", a << 1, a << 1);\n    printf("a << 2 = %u (binary: 10100 = %d, multiply by 4)\\n", a << 2, a << 2);\n    printf("a << 3 = %u (binary: 101000 = %d, multiply by 8)\\n", a << 3, a << 3);\n    \n    return 0;\n}',
    hint: 'Left shift (<<) shifts bits left, equivalent to multiplying by 2^n'
  },
  {
    id: 'c_operators_036',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate right shift (>>) operator.',
    mathSolution: 'Right shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 40;  // 101000 in binary\n    \n    printf("a = %u (binary: 101000)\\n", a);\n    printf("a >> 1 = %u (binary: 10100 = %d, divide by 2)\\n", a >> 1, a >> 1);\n    printf("a >> 2 = %u (binary: 1010 = %d, divide by 4)\\n", a >> 2, a >> 2);\n    printf("a >> 3 = %u (binary: 101 = %d, divide by 8)\\n", a >> 3, a >> 3);\n    \n    // Right shift on signed numbers\n    signed int b = -40;\n    printf("\\nSigned right shift: -40 >> 2 = %d\\n", b >> 2);\n    \n    return 0;\n}',
    hint: 'Right shift (>>) shifts bits right, equivalent to dividing by 2^n (implementation-defined for signed)'
  },
  {
    id: 'c_operators_037',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is power of 2 using bitwise operators.',
    mathSolution: 'Power of 2 check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    // Power of 2 if num > 0 and (num & (num-1)) == 0\n    if(num > 0 && (num & (num - 1)) == 0) {\n        printf("%d is a power of 2\\n", num);\n    } else {\n        printf("%d is not a power of 2\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is power of 2 if it has exactly one bit set: (num & (num-1)) == 0'
  },
  {
    id: 'c_operators_038',
    topicId: 'c_operators',
    question: 'Write a program to count number of set bits using bitwise operators.',
    mathSolution: 'Count set bits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int num, count = 0;\n    \n    printf("Enter a number: ");\n    scanf("%u", &num);\n    \n    unsigned int original = num;\n    while(num) {\n        count += num & 1;  // Check if LSB is set\n        num >>= 1;         // Right shift\n    }\n    \n    printf("Number of set bits in %u = %d\\n", original, count);\n    \n    return 0;\n}',
    hint: 'Use num & 1 to check LSB, then shift right until number becomes 0'
  },
  {
    id: 'c_operators_039',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using XOR operator.',
    mathSolution: 'Swap using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR swap: a = a ^ b; b = a ^ b; a = a ^ b; Works without temporary variable'
  },
  {
    id: 'c_operators_040',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bit masking using bitwise operators.',
    mathSolution: 'Bit masking',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int flags = 0b11011010;  // Example flag register\n    unsigned int mask;\n    \n    printf("Original flags: 0x%X (binary: 11011010)\\n", flags);\n    \n    // Check if bit 3 is set (using mask)\n    mask = 0b00001000;  // Bit 3 mask\n    if(flags & mask) {\n        printf("Bit 3 is set\\n");\n    }\n    \n    // Set bit 2\n    mask = 0b00000100;\n    flags = flags | mask;\n    printf("After setting bit 2: 0x%X\\n", flags);\n    \n    // Clear bit 5\n    mask = 0b00100000;\n    flags = flags & ~mask;\n    printf("After clearing bit 5: 0x%X\\n", flags);\n    \n    // Toggle bit 4\n    mask = 0b00010000;\n    flags = flags ^ mask;\n    printf("After toggling bit 4: 0x%X\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bit masking: & (check/clear), | (set), ^ (toggle), ~ (invert mask for clearing)'
  },

  // ============ LEVEL 7: TERNARY/CONDITIONAL OPERATOR (41-45) ============
  {
    id: 'c_operators_041',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate ternary operator (?:) for conditional expressions.',
    mathSolution: 'Ternary operator basics',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int max;\n    \n    // Ternary operator: condition ? value_if_true : value_if_false\n    max = (a > b) ? a : b;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Maximum = %d\\n", max);\n    \n    // Using ternary directly in printf\n    printf("The numbers are %s\\n", (a == b) ? "equal" : "not equal");\n    \n    return 0;\n}',
    hint: 'Ternary operator: condition ? expr1 : expr2 returns expr1 if condition true, else expr2'
  },
  {
    id: 'c_operators_042',
    topicId: 'c_operators',
    question: 'Write a program to find the largest of three numbers using ternary operator.',
    mathSolution: 'Largest of three using ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    \n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    \n    // Nested ternary operators\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    \n    printf("Numbers: %d, %d, %d\\n", a, b, c);\n    printf("Largest: %d\\n", max);\n    \n    return 0;\n}',
    hint: 'Nested ternary operators: condition1 ? (condition2 ? expr1 : expr2) : (condition3 ? expr3 : expr4)'
  },
  {
    id: 'c_operators_043',
    topicId: 'c_operators',
    question: 'Write a program to check even/odd using ternary operator.',
    mathSolution: 'Even/odd with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    \n    return 0;\n}',
    hint: 'Ternary operator can be used directly in printf for conditional output'
  },
  {
    id: 'c_operators_044',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate nested ternary operators for grade calculation.',
    mathSolution: 'Grade calculation with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks;\n    char grade;\n    \n    printf("Enter marks (0-100): ");\n    scanf("%d", &marks);\n    \n    grade = (marks >= 90) ? \'A\' :\n            (marks >= 80) ? \'B\' :\n            (marks >= 70) ? \'C\' :\n            (marks >= 60) ? \'D\' : \'F\';\n    \n    printf("Marks: %d\\n", marks);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Nested ternaries can replace if-else chains but can become hard to read'
  },
  {
    id: 'c_operators_045',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate ternary operator for absolute value.',
    mathSolution: 'Absolute value with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, abs;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    abs = (num < 0) ? -num : num;\n    \n    printf("Original number: %d\\n", num);\n    printf("Absolute value: %d\\n", abs);\n    \n    return 0;\n}',
    hint: 'Absolute value: (num < 0) ? -num : num'
  },

  // ============ LEVEL 8: SIZEOF AND OTHER OPERATORS (46-50) ============
  {
    id: 'c_operators_046',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate sizeof operator with different data types.',
    mathSolution: 'sizeof operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("sizeof fundamental types:\\n");\n    printf("sizeof(char) = %lu byte\\n", sizeof(char));\n    printf("sizeof(short) = %lu bytes\\n", sizeof(short));\n    printf("sizeof(int) = %lu bytes\\n", sizeof(int));\n    printf("sizeof(long) = %lu bytes\\n", sizeof(long));\n    printf("sizeof(float) = %lu bytes\\n", sizeof(float));\n    printf("sizeof(double) = %lu bytes\\n", sizeof(double));\n    \n    printf("\\nsizeof with variables:\\n");\n    int arr[10];\n    struct { int x; int y; } point;\n    \n    printf("sizeof(arr) = %lu bytes\\n", sizeof(arr));\n    printf("sizeof(point) = %lu bytes\\n", sizeof(point));\n    \n    return 0;\n}',
    hint: 'sizeof operator returns size in bytes of a type or variable'
  },
  {
    id: 'c_operators_047',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate comma operator (,) and its use.',
    mathSolution: 'Comma operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    \n    // Comma operator in for loop\n    printf("Using comma operator in for loop:\\n");\n    for(a = 1, b = 10; a <= b; a++, b--) {\n        printf("a = %d, b = %d\\n", a, b);\n    }\n    \n    // Comma operator in expressions\n    int x = (5, 10, 15);  // Evaluates all, returns last\n    printf("\\nint x = (5, 10, 15); x = %d\\n", x);\n    \n    // Multiple statements in one line\n    int i = 1, j = 2, k = 3;\n    printf("i = %d, j = %d, k = %d\\n", i, j, k);\n    \n    return 0;\n}',
    hint: 'Comma operator evaluates expressions left to right and returns value of the rightmost expression'
  },
  {
    id: 'c_operators_048',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate pointer operators: & (address-of) and * (dereference).',
    mathSolution: 'Pointer operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr;\n    \n    // & operator (address-of)\n    ptr = &num;\n    \n    printf("Value of num: %d\\n", num);\n    printf("Address of num: %p\\n", &num);\n    printf("Value of ptr: %p\\n", ptr);\n    \n    // * operator (dereference)\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    \n    // Modify through pointer\n    *ptr = 100;\n    printf("After *ptr = 100, num = %d\\n", num);\n    \n    return 0;\n}',
    hint: '& gives address of variable, * gives value at address (dereference)'
  },
  {
    id: 'c_operators_049',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence table with examples.',
    mathSolution: 'Operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // Precedence examples\n    printf("\\nPrecedence examples:\\n");\n    printf("a + b * c = %d (multiplication first)\\n", a + b * c);\n    printf("(a + b) * c = %d\\n", (a + b) * c);\n    \n    printf("a > b && b > c = %d (relational before logical)\\n", a > b && b > c);\n    printf("a > b || b < c = %d\\n", a > b || b < c);\n    \n    printf("++a * b-- = %d\\n", ++a * b--);\n    \n    // Precedence table summary\n    printf("\\nPrecedence (highest to lowest):\\n");\n    printf("1. Postfix: (), [], ., ->, ++, --\\n");\n    printf("2. Unary: +, -, !, ~, ++, --, *, &, sizeof\\n");\n    printf("3. Multiplicative: *, /, %%\\n");\n    printf("4. Additive: +, -\\n");\n    printf("5. Shift: <<, >>\\n");\n    printf("6. Relational: <, >, <=, >=\\n");\n    printf("7. Equality: ==, !=\\n");\n    printf("8. Bitwise AND: &\\n");\n    printf("9. Bitwise XOR: ^\\n");\n    printf("10. Bitwise OR: |\\n");\n    printf("11. Logical AND: &&\\n");\n    printf("12. Logical OR: ||\\n");\n    printf("13. Conditional: ?:\\n");\n    printf("14. Assignment: =, +=, -=, etc.\\n");\n    printf("15. Comma: ,\\n");\n    \n    return 0;\n}',
    hint: 'Use parentheses to make precedence clear instead of relying on memorization'
  },
  {
    id: 'c_operators_050',
    topicId: 'c_operators',
    question: 'Write a comprehensive program demonstrating all operator types.',
    mathSolution: 'All operators demonstration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4, result;\n    unsigned int x = 12, y = 10;\n    int original_a;\n    \n    printf("=== ARITHMETIC OPERATORS ===\\n");\n    printf("a = %d, b = %d\\n", a, b);\n    printf("a + b = %d\\n", a + b);\n    printf("a - b = %d\\n", a - b);\n    printf("a * b = %d\\n", a * b);\n    printf("a / b = %d\\n", a / b);\n    printf("a %% b = %d\\n\\n", a % b);\n    \n    printf("=== RELATIONAL OPERATORS ===\\n");\n    printf("a > b = %d\\n", a > b);\n    printf("a < b = %d\\n", a < b);\n    printf("a == b = %d\\n\\n", a == b);\n    \n    printf("=== LOGICAL OPERATORS ===\\n");\n    printf("(a > b) && (a > 10) = %d\\n", (a > b) && (a > 10));\n    printf("(a < b) || (a > 10) = %d\\n", (a < b) || (a > 10));\n    printf("!(a == b) = %d\\n\\n", !(a == b));\n    \n    printf("=== BITWISE OPERATORS ===\\n");\n    printf("x = %u, y = %u\\n", x, y);\n    printf("x & y = %u\\n", x & y);\n    printf("x | y = %u\\n", x | y);\n    printf("x ^ y = %u\\n\\n", x ^ y);\n    \n    printf("=== SHIFT OPERATORS ===\\n");\n    printf("x << 1 = %u\\n", x << 1);\n    printf("x >> 1 = %u\\n\\n", x >> 1);\n    \n    printf("=== ASSIGNMENT OPERATORS ===\\n");\n    result = 10;\n    printf("result = %d\\n", result);\n    result += 5;\n    printf("result += 5 = %d\\n", result);\n    result *= 2;\n    printf("result *= 2 = %d\\n\\n", result);\n    \n    printf("=== INCREMENT/DECREMENT ===\\n");\n    int c = 5;\n    printf("c = %d\\n", c);\n    printf("++c = %d\\n", ++c);\n    printf("c = %d\\n", c);\n    printf("c++ = %d\\n", c++);\n    printf("c = %d\\n\\n", c);\n    \n    printf("=== TERNARY OPERATOR ===\\n");\n    int max = (15 > 4) ? 15 : 4;\n    printf("Max of 15 and 4 = %d\\n\\n", max);\n    \n    printf("=== SIZEOF OPERATOR ===\\n");\n    printf("sizeof(int) = %lu bytes\\n\\n\", sizeof(int));\n    \n    printf("=== POINTER OPERATORS ===\\n");\n    int num = 42;\n    int *ptr = &num;\n    printf("num = %d\\n", num);\n    printf("*ptr = %d\\n", *ptr);\n    \n    return 0;\n}',
    hint: 'This program demonstrates arithmetic, relational, logical, bitwise, shift, assignment, increment/decrement, ternary, sizeof, and pointer operators'
}
);