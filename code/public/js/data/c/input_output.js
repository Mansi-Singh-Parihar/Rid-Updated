QuizData.questions.push(
  // ========== BASIC printf OUTPUT (1-5) ==========
  {
    id: 'c_io_1',
    topicId: 'c_input_output',
    question: 'Write a program to print "Hello, World!" using printf.',
    mathSolution: 'Basic output using printf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    hint: 'Use printf("text");'
  },
  {
    id: 'c_io_2',
    topicId: 'c_input_output',
    question: 'Write a program to print your name using printf.',
    mathSolution: 'String output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("John Doe\\n");\n    return 0;\n}',
    hint: 'Place your name inside quotes'
  },
  {
    id: 'c_io_3',
    topicId: 'c_input_output',
    question: 'Write a program to print numbers 1 to 5 on same line with spaces.',
    mathSolution: 'Print multiple numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("1 2 3 4 5\\n");\n    return 0;\n}',
    hint: 'Use spaces between numbers'
  },
  {
    id: 'c_io_4',
    topicId: 'c_input_output',
    question: 'Write a program to print pattern:\n*\n**\n***',
    mathSolution: 'Print pattern using escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("*\\n**\\n***\\n");\n    return 0;\n}',
    hint: 'Use \\n for new line'
  },
  {
    id: 'c_io_5',
    topicId: 'c_input_output',
    question: 'Write a program to print integer 100 and float 3.14 using format specifiers.',
    mathSolution: 'Format specifiers %d and %f',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Integer: %d\\n", 100);\n    printf("Float: %.2f\\n", 3.14);\n    return 0;\n}',
    hint: 'Use %d for integers, %f for floats'
  },

  // ========== SINGLE INPUT USING scanf (6-15) ==========
  {
    id: 'c_io_6',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input from user and print it.',
    mathSolution: 'Read and print integer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}',
    hint: 'Use scanf("%d", &variable);'
  },
  {
    id: 'c_io_7',
    topicId: 'c_input_output',
    question: 'Write a program to take one float input and print it with 2 decimal places.',
    mathSolution: 'Read and print float',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float num;\n    printf("Enter a decimal number: ");\n    scanf("%f", &num);\n    printf("You entered: %.2f\\n", num);\n    return 0;\n}',
    hint: 'Use %f for float, %.2f for 2 decimal places'
  },
  {
    id: 'c_io_8',
    topicId: 'c_input_output',
    question: 'Write a program to take one character input and print its ASCII value.',
    mathSolution: 'Character and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    printf("ASCII value of %c is %d\\n", ch, ch);\n    return 0;\n}',
    hint: 'Use %c for char, %d prints ASCII value'
  },
  {
    id: 'c_io_9',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its square.',
    mathSolution: 'Calculate square',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("Square of %d is %d\\n", num, num * num);\n    return 0;\n}',
    hint: 'Square = num * num'
  },
  {
    id: 'c_io_10',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and check if it is even or odd.',
    mathSolution: 'Even-odd check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 2 == 0)\n        printf("%d is even\\n", num);\n    else\n        printf("%d is odd\\n", num);\n    return 0;\n}',
    hint: 'Use modulo operator %'
  },
  {
    id: 'c_io_11',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its multiplication table up to 10.',
    mathSolution: 'Multiplication table',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    for(int i = 1; i <= 10; i++) {\n        printf("%d x %d = %d\\n", num, i, num * i);\n    }\n    return 0;\n}',
    hint: 'Use loop from 1 to 10'
  },
  {
    id: 'c_io_12',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print whether it is positive, negative, or zero.',
    mathSolution: 'Sign check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num > 0)\n        printf("Positive\\n");\n    else if(num < 0)\n        printf("Negative\\n");\n    else\n        printf("Zero\\n");\n    return 0;\n}',
    hint: 'Use if-else if-else ladder'
  },
  {
    id: 'c_io_13',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its factorial.',
    mathSolution: 'Calculate factorial with validation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, fact = 1;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        printf("Invalid input\\n");\n        return 0;\n    }\n    for(int i = 1; i <= num; i++) {\n        fact *= i;\n    }\n    printf("Factorial of %d is %d\\n", num, fact);\n    return 0;\n}',
    hint: 'Factorial is not defined for negative numbers'
  },
  {
    id: 'c_io_14',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print sum of digits.',
    mathSolution: 'Sum of digits (handle negative)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int num, sum = 0, digit;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    int temp = abs(num);\n    while(temp > 0) {\n        digit = temp % 10;\n        sum += digit;\n        temp /= 10;\n    }\n    printf("Sum of digits of %d is %d\\n", num, sum);\n    return 0;\n}',
    hint: 'Use abs() for negative numbers'
  },
  {
    id: 'c_io_15',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its reverse.',
    mathSolution: 'Reverse number (handle negative)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int num, reverse = 0, digit;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    int temp = abs(num);\n    while(temp > 0) {\n        digit = temp % 10;\n        reverse = reverse * 10 + digit;\n        temp /= 10;\n    }\n    if(num < 0) reverse = -reverse;\n    printf("Reverse of %d is %d\\n", num, reverse);\n    return 0;\n}',
    hint: 'Handle negative numbers using abs()'
  },

  // ========== TWO INPUTS (16-35) - MULTIPLE PROMPTS ==========
  {
    id: 'c_io_16',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers as input and print their sum.',
    mathSolution: 'Sum of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Sum = %d\\n", a + b);\n    return 0;\n}',
    hint: 'Use separate prompts for each input'
  },
  {
    id: 'c_io_17',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers as input and print their product.',
    mathSolution: 'Product of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Product = %d\\n", a * b);\n    return 0;\n}',
    hint: 'Multiply a and b'
  },
  {
    id: 'c_io_18',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print the larger one.',
    mathSolution: 'Find maximum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a > b)\n        printf("Larger = %d\\n", a);\n    else\n        printf("Larger = %d\\n", b);\n    return 0;\n}',
    hint: 'Compare using if-else'
  },
  {
    id: 'c_io_19',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and swap them.',
    mathSolution: 'Swap two numbers using temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Before swap: a=%d, b=%d\\n", a, b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf("After swap: a=%d, b=%d\\n", a, b);\n    return 0;\n}',
    hint: 'Use third variable temp'
  },
  {
    id: 'c_io_20',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their average as float.',
    mathSolution: 'Average with type casting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    float avg = (float)(a + b) / 2;\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float before division'
  },
  {
    id: 'c_io_21',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their division result as float.',
    mathSolution: 'Division with zero check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter dividend: ");\n    scanf("%d", &a);\n    printf("Enter divisor: ");\n    scanf("%d", &b);\n    if(b == 0) {\n        printf("Division by zero error\\n");\n        return 0;\n    }\n    float result = (float)a / b;\n    printf("%d / %d = %.2f\\n", a, b, result);\n    return 0;\n}',
    hint: 'Check if divisor is zero'
  },
  {
    id: 'c_io_22',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their remainder (modulus).',
    mathSolution: 'Modulus operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Remainder = %d\\n", a % b);\n    return 0;\n}',
    hint: 'Use % operator'
  },
  {
    id: 'c_io_23',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if first is divisible by second.',
    mathSolution: 'Divisibility check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a % b == 0)\n        printf("%d is divisible by %d\\n", a, b);\n    else\n        printf("%d is not divisible by %d\\n", a, b);\n    return 0;\n}',
    hint: 'Check if remainder is zero'
  },
  {
    id: 'c_io_24',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print all numbers between them.',
    mathSolution: 'Print range correctly',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a > b) {\n        int temp = a;\n        a = b;\n        b = temp;\n    }\n    printf("Numbers between %d and %d: ", a, b);\n    for(int i = a + 1; i < b; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Swap if a > b'
  },
  {
    id: 'c_io_25',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate power (first^second).',
    mathSolution: 'Power calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int base, exp, result = 1;\n    printf("Enter base: ");\n    scanf("%d", &base);\n    printf("Enter exponent: ");\n    scanf("%d", &exp);\n    for(int i = 1; i <= exp; i++) {\n        result *= base;\n    }\n    printf("%d^%d = %d\\n", base, exp, result);\n    return 0;\n}',
    hint: 'Multiply base exponent times'
  },
  {
    id: 'c_io_26',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate GCD (HCF).',
    mathSolution: 'Euclidean algorithm with abs',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    printf("GCD of %d and %d is %d\\n", a, b, x);\n    return 0;\n}',
    hint: 'Use abs() for safety'
  },
  {
    id: 'c_io_27',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate LCM.',
    mathSolution: 'LCM using GCD safely',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    int lcm = abs(a * b) / x;\n    printf("LCM of %d and %d is %d\\n", a, b, lcm);\n    return 0;\n}',
    hint: 'Use abs() and GCD'
  },
  {
    id: 'c_io_28',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if they are equal.',
    mathSolution: 'Equality check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a == b)\n        printf("Numbers are equal\\n");\n    else\n        printf("Numbers are not equal\\n");\n    return 0;\n}',
    hint: 'Use == operator'
  },
  {
    id: 'c_io_29',
    topicId: 'c_input_output',
    question: 'Write a program to take name (string) and age (int) as input and print them.',
    mathSolution: 'String input with spaces',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char name[50];\n    int age;\n    printf("Enter name: ");\n    fgets(name, sizeof(name), stdin);\n    printf("Enter age: ");\n    scanf("%d", &age);\n    printf("Name: %sAge: %d\\n", name, age);\n    return 0;\n}',
    hint: 'Use fgets() for full name input'
  },
  {
    id: 'c_io_30',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print if their sum is even or odd.',
    mathSolution: 'Even-odd of sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int sum = a + b;\n    if(sum % 2 == 0)\n        printf("Sum is even\\n");\n    else\n        printf("Sum is odd\\n");\n    return 0;\n}',
    hint: 'Calculate sum then check modulo'
  },
  {
    id: 'c_io_31',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and find the distance between them (absolute difference).',
    mathSolution: 'Absolute difference',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int diff = abs(a - b);\n    printf("Distance between %d and %d is %d\\n", a, b, diff);\n    return 0;\n}',
    hint: 'Use abs() function from stdlib.h'
  },
  {
    id: 'c_io_32',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print the smaller one.',
    mathSolution: 'Find minimum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int min = (a < b) ? a : b;\n    printf("Smaller = %d\\n", min);\n    return 0;\n}',
    hint: 'Use ternary operator ? :'
  },
  {
    id: 'c_io_33',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and count numbers divisible by 3 in that range.',
    mathSolution: 'Count divisible numbers in range',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, count = 0;\n    printf("Enter start number: ");\n    scanf("%d", &a);\n    printf("Enter end number: ");\n    scanf("%d", &b);\n    for(int i = a; i <= b; i++) {\n        if(i % 3 == 0) count++;\n    }\n    printf("Numbers divisible by 3 between %d and %d: %d\\n", a, b, count);\n    return 0;\n}',
    hint: 'Loop from a to b and check divisibility'
  },
  {
    id: 'c_io_34',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if they are co-prime (GCD=1).',
    mathSolution: 'Co-prime with abs',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    if(x == 1)\n        printf("%d and %d are co-prime\\n", a, b);\n    else\n        printf("%d and %d are not co-prime\\n", a, b);\n    return 0;\n}',
    hint: 'Check GCD == 1'
  },
  {
  id: 'c_io_35',
  topicId: 'c_input_output',
  question: 'Write a program to take side of a square as input and calculate its area and perimeter.',
  mathSolution: 'Area = side × side, Perimeter = 4 × side',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    float side, area, perimeter;\n    printf("Enter side of square: ");\n    scanf("%f", &side);\n    area = side * side;\n    perimeter = 4 * side;\n    printf("Area of square = %.2f\\n", area);\n    printf("Perimeter of square = %.2f\\n", perimeter);\n    return 0;\n}',
  hint: 'Area = side², Perimeter = 4 × side'
},

  // ========== THREE OR MORE INPUTS (36-45) ==========
  {
    id: 'c_io_36',
    topicId: 'c_input_output',
    question: 'Write a program to take three integers and print their sum and average.',
    mathSolution: 'Sum and average of three numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Enter third number: ");\n    scanf("%d", &c);\n    int sum = a + b + c;\n    float avg = sum / 3.0;\n    printf("Sum = %d\\n", sum);\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Sum all three, divide by 3 for average'
  },
  {
    id: 'c_io_37',
    topicId: 'c_input_output',
    question: 'Write a program to take three integers and find the largest among them.',
    mathSolution: 'Maximum of three numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Enter third number: ");\n    scanf("%d", &c);\n    max = a;\n    if(b > max) max = b;\n    if(c > max) max = c;\n    printf("Largest number = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare sequentially'
  },
  {
    id: 'c_io_38',
    topicId: 'c_input_output',
    question: 'Write a program to take three sides of triangle and check if it forms a valid triangle.',
    mathSolution: 'Triangle validity check (sum of two sides > third side)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter first side: ");\n    scanf("%d", &a);\n    printf("Enter second side: ");\n    scanf("%d", &b);\n    printf("Enter third side: ");\n    scanf("%d", &c);\n    if((a + b > c) && (a + c > b) && (b + c > a))\n        printf("Valid triangle\\n");\n    else\n        printf("Invalid triangle\\n");\n    return 0;\n}',
    hint: 'Sum of any two sides must be greater than third'
  },
  {
  id: 'c_io_39',
  topicId: 'c_input_output',
  question: 'Write a program to take length and breadth of a rectangle as input and calculate its area and perimeter.',
  mathSolution: 'Area = length × breadth, Perimeter = 2 × (length + breadth)',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    float l, b, area, perimeter;\n    printf("Enter length: ");\n    scanf("%f", &l);\n    printf("Enter breadth: ");\n    scanf("%f", &b);\n    area = l * b;\n    perimeter = 2 * (l + b);\n    printf("Area of rectangle = %.2f\\n", area);\n    printf("Perimeter of rectangle = %.2f\\n", perimeter);\n    return 0;\n}',
  hint: 'Area = l × b, Perimeter = 2 × (l + b)'
},
  {
    id: 'c_io_40',
    topicId: 'c_input_output',
    question: 'Write a program to take marks of 5 subjects and calculate percentage.',
    mathSolution: 'Percentage calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks[5], sum = 0;\n    for(int i = 0; i < 5; i++) {\n        printf("Enter marks for subject %d: ", i+1);\n        scanf("%d", &marks[i]);\n        sum += marks[i];\n    }\n    float percentage = sum / 5.0;\n    printf("Total = %d\\n", sum);\n    printf("Percentage = %.2f%%\\n", percentage);\n    return 0;\n}',
    hint: 'Loop through 5 subjects for input'
  },
  {
    id: 'c_io_41',
    topicId: 'c_input_output',
    question: 'Write a program to take N (size) and N integers, then print their sum and average.',
    mathSolution: 'Dynamic array sum and average',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n        sum += arr[i];\n    }\n    printf("Sum = %d\\n", sum);\n    printf("Average = %.2f\\n", (float)sum / n);\n    return 0;\n}',
    hint: 'First ask N, then loop N times for inputs'
  },
  {
    id: 'c_io_42',
    topicId: 'c_input_output',
    question: 'Write a program to take N and N integers, then find maximum and minimum.',
    mathSolution: 'Find max and min from array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n, max, min;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    max = min = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max) max = arr[i];\n        if(arr[i] < min) min = arr[i];\n    }\n    printf("Maximum = %d\\n", max);\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Initialize max/min with first element'
  },
  {
    id: 'c_io_43',
    topicId: 'c_input_output',
    question: 'Write a program to take a 3x3 matrix (9 inputs) and print it in matrix format.',
    mathSolution: '2D array input and output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3];\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("Enter mat[%d][%d]: ", i, j);\n            scanf("%d", &mat[i][j]);\n        }\n    }\n    printf("\\nMatrix:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Nested loops for 2D array input'
  },
  {
    id: 'c_io_44',
    topicId: 'c_input_output',
    question: 'Write a program to take 5 integers and print them in reverse order.',
    mathSolution: 'Array reversal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5];\n    for(int i = 0; i < 5; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    printf("Reverse order: ");\n    for(int i = 4; i >= 0; i--) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Loop from last index to first'
  },
  {
    id: 'c_io_45',
    topicId: 'c_input_output',
    question: 'Write a program to take two 2x2 matrices (8 inputs) and print their sum.',
    mathSolution: 'Matrix addition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int A[2][2], B[2][2], C[2][2];\n    printf("Enter first 2x2 matrix:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("A[%d][%d]: ", i, j);\n            scanf("%d", &A[i][j]);\n        }\n    }\n    printf("Enter second 2x2 matrix:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("B[%d][%d]: ", i, j);\n            scanf("%d", &B[i][j]);\n            C[i][j] = A[i][j] + B[i][j];\n        }\n    }\n    printf("\\nSum Matrix:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements of both matrices'
  },

  // ========== ADVANCED MULTIPLE INPUTS (46-50) ==========
  {
    id: 'c_io_46',
    topicId: 'c_input_output',
    question: 'Write a program to take N and N integers, then print only even numbers.',
    mathSolution: 'Filter even numbers from array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    printf("Even numbers: ");\n    for(int i = 0; i < n; i++) {\n        if(arr[i] % 2 == 0) {\n            printf("%d ", arr[i]);\n        }\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Check arr[i] % 2 == 0 for even numbers'
  },
  {
    id: 'c_io_47',
    topicId: 'c_input_output',
    question: 'Write a program to take N and N integers, then sort them in ascending order.',
    mathSolution: 'Bubble sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n, temp;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf("Sorted array: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use nested loops for bubble sort'
  },
  {
    id: 'c_io_48',
    topicId: 'c_input_output',
    question: 'Write a program to take student records: N, then for each student name and marks (2 inputs each).',
    mathSolution: 'Struct-like multiple records',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter number of students: ");\n    scanf("%d", &n);\n    char names[n][50];\n    int marks[n];\n    for(int i = 0; i < n; i++) {\n        printf("Student %d name: ", i+1);\n        scanf("%s", names[i]);\n        printf("Student %d marks: ", i+1);\n        scanf("%d", &marks[i]);\n    }\n    printf("\\nStudent Records:\\n");\n    for(int i = 0; i < n; i++) {\n        printf("%s: %d\\n", names[i], marks[i]);\n    }\n    return 0;\n}',
    hint: 'Store names in 2D array, marks in 1D array'
  },
  {
    id: 'c_io_49',
    topicId: 'c_input_output',
    question: 'Write a program to take 10 integers and count how many are positive, negative, and zero.',
    mathSolution: 'Count positive, negative, zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10], pos = 0, neg = 0, zero = 0;\n    for(int i = 0; i < 10; i++) {\n        printf("Enter number %d: ", i+1);\n        scanf("%d", &arr[i]);\n        if(arr[i] > 0) pos++;\n        else if(arr[i] < 0) neg++;\n        else zero++;\n    }\n    printf("Positive: %d\\n", pos);\n    printf("Negative: %d\\n", neg);\n    printf("Zero: %d\\n", zero);\n    return 0;\n}',
    hint: 'Use counters for each category'
  },
  {
    id: 'c_io_50',
    topicId: 'c_input_output',
    question: 'Write a program to take N and N integers, then find the second largest element.',
    mathSolution: 'Find second largest',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        printf("Enter element %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    int first = INT_MIN, second = INT_MIN;\n    for(int i = 0; i < n; i++) {\n        if(arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if(arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    if(second == INT_MIN)\n        printf("No second largest element\\n");\n    else\n        printf("Second largest = %d\\n", second);\n    return 0;\n}',
    hint: 'Track both largest and second largest'
  }
);