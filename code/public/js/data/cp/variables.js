QuizData.questions.push(
  // ========== BASIC VARIABLE DECLARATION (QUESTIONS 1-10) ==========
  {
    id: 'c_var_001',
    topicId: 'c_variables',
    question: 'Write a program to declare an integer variable and print its value.',
    mathSolution: 'Integer variable declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    printf("Value of num: %d", num);\n    return 0;\n}',
    hint: 'Use int keyword to declare integer variables'
  },
  {
    id: 'c_var_002',
    topicId: 'c_variables',
    question: 'Write a program to declare a float variable and print its value.',
    mathSolution: 'Float variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float price = 99.99;\n    printf("Price: %.2f", price);\n    return 0;\n}',
    hint: 'Use float for decimal numbers, %.2f prints 2 decimal places'
  },
  {
    id: 'c_var_003',
    topicId: 'c_variables',
    question: 'Write a program to declare a character variable and print it.',
    mathSolution: 'Character variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char grade = \'A\';\n    printf("Grade: %c", grade);\n    return 0;\n}',
    hint: 'Character variables use single quotes and %c format specifier'
  },
  {
    id: 'c_var_004',
    topicId: 'c_variables',
    question: 'Write a program to declare a double variable and print it.',
    mathSolution: 'Double variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Value of pi: %.10lf", pi);\n    return 0;\n}',
    hint: 'double has more precision than float, use %lf format specifier'
  },
  {
    id: 'c_var_005',
    topicId: 'c_variables',
    question: 'Write a program to declare multiple variables of different types in one line.',
    mathSolution: 'Multiple variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    float x = 1.5, y = 2.5;\n    char ch1 = \'X\', ch2 = \'Y\';\n    \n    printf("Integers: %d, %d, %d\\n", a, b, c);\n    printf("Floats: %.1f, %.1f\\n", x, y);\n    printf("Chars: %c, %c\\n", ch1, ch2);\n    \n    return 0;\n}',
    hint: 'You can declare multiple variables of same type separated by commas'
  },
  {
    id: 'c_var_006',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable initialization at declaration vs later.',
    mathSolution: 'Variable initialization timing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;        // Initialized at declaration\n    int b;            // Declared but not initialized\n    b = 10;           // Initialized later\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    \n    return 0;\n}',
    hint: 'Variables can be initialized at declaration or later in the code'
  },
  {
    id: 'c_var_007',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate uninitialized variable (shows garbage value).',
    mathSolution: 'Uninitialized variables contain garbage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x;  // Uninitialized - contains garbage value\n    float y;  // Uninitialized - contains garbage\n    char z;  // Uninitialized - contains garbage\n    \n    printf("x (uninitialized): %d\\n", x);\n    printf("y (uninitialized): %f\\n", y);\n    printf("z (uninitialized): %c\\n", z);\n    \n    return 0;\n}',
    hint: 'Local variables contain garbage values if not initialized'
  },
  {
    id: 'c_var_008',
    topicId: 'c_variables',
    question: 'Write a program to find the size of different variable types using sizeof operator.',
    mathSolution: 'Size of variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a;\n    float b;\n    double c;\n    char d;\n    \n    printf("Size of int: %lu bytes\\n", sizeof(a));\n    printf("Size of float: %lu bytes\\n", sizeof(b));\n    printf("Size of double: %lu bytes\\n", sizeof(c));\n    printf("Size of char: %lu byte\\n", sizeof(d));\n    \n    return 0;\n}',
    hint: 'sizeof operator returns size in bytes'
  },
  {
    id: 'c_var_009',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable naming conventions (valid and invalid).',
    mathSolution: 'Variable naming rules',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Valid variable names\n    int age = 25;\n    int _salary = 50000;\n    int num1 = 10;\n    int student_age = 20;\n    \n    // Invalid names (commented out - would cause errors)\n    // int 1num = 10;     // Cannot start with digit\n    // int my-name = 5;    // Hyphen not allowed\n    // int float = 3.14;   // Keywords not allowed\n    // int my name = 10;    // Spaces not allowed\n    \n    printf("age: %d\\n", age);\n    printf("_salary: %d\\n", _salary);\n    printf("num1: %d\\n", num1);\n    printf("student_age: %d\\n", student_age);\n    \n    return 0;\n}',
    hint: 'Variable names can have letters, digits, underscore; cannot start with digit'
  },
  {
    id: 'c_var_010',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate case sensitivity in variable names.',
    mathSolution: 'C is case sensitive',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    int Age = 30;\n    int AGE = 40;\n    int aGe = 50;\n    \n    printf("age = %d\\n", age);\n    printf("Age = %d\\n", Age);\n    printf("AGE = %d\\n", AGE);\n    printf("aGe = %d\\n", aGe);\n    \n    return 0;\n}',
    hint: 'age, Age, AGE are all different variables in C'
  },

  // ========== INTEGER VARIABLES (QUESTIONS 11-20) ==========
  {
    id: 'c_var_011',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different integer types: int, short, long.',
    mathSolution: 'Integer type modifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    short int si = 32000;\n    int i = 100000;\n    long int li = 5000000;\n    long long int lli = 9000000000;\n    \n    printf("short int: %d\\n", si);\n    printf("int: %d\\n", i);\n    printf("long int: %ld\\n", li);\n    printf("long long int: %lld\\n", lli);\n    \n    printf("\\nSizes:\\n");\n    printf("short: %lu bytes\\n", sizeof(si));\n    printf("int: %lu bytes\\n", sizeof(i));\n    printf("long: %lu bytes\\n", sizeof(li));\n    printf("long long: %lu bytes\\n", sizeof(lli));\n    \n    return 0;\n}',
    hint: 'Use %ld for long, %lld for long long'
  },
  {
    id: 'c_var_012',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate unsigned integer variables.',
    mathSolution: 'Unsigned integers (only positive)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int positive = 4294967295;\n    unsigned short small = 65535;\n    \n    printf("unsigned int max: %u\\n", positive);\n    printf("unsigned short max: %hu\\n", small);\n    \n    // This would give warning or error\n    // unsigned int neg = -10;  // Cannot store negative\n    \n    return 0;\n}',
    hint: 'unsigned variables store only non-negative values, use %u format specifier'
  },
  {
    id: 'c_var_013',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer overflow.',
    mathSolution: 'Integer overflow concept',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int max = INT_MAX;\n    printf("Maximum int: %d\\n", max);\n    \n    max = max + 1;  // Overflow\n    printf("After adding 1: %d (overflow)\\n", max);\n    \n    unsigned int umax = UINT_MAX;\n    printf("\\nUnsigned max: %u\\n", umax);\n    umax = umax + 1;\n    printf("After adding 1: %u (wraps to 0)\\n", umax);\n    \n    return 0;\n}',
    hint: 'Integers wrap around when they exceed their maximum value'
  },
  {
    id: 'c_var_014',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different ways to initialize integers.',
    mathSolution: 'Integer initialization methods',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;        // Decimal\n    int b = 0b1010;    // Binary (C23) - may not work in older compilers\n    int c = 012;        // Octal\n    int d = 0xA;        // Hexadecimal\n    int e;              // Uninitialized\n    e = 10;             // Assignment later\n    \n    printf("Decimal 10: %d\\n", a);\n    printf("Binary 1010: %d\\n", b);\n    printf("Octal 12: %d\\n", c);\n    printf("Hex A: %d\\n", d);\n    printf("Assigned later: %d\\n", e);\n    \n    return 0;\n}',
    hint: 'Integers can be initialized in decimal, octal (prefix 0), or hex (prefix 0x)'
  },
  {
    id: 'c_var_015',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables using a temporary variable.',
    mathSolution: 'Swapping with temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int temp;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    temp = a;\n    a = b;\n    b = temp;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use a temporary variable to hold one value during swap'
  },
  {
    id: 'c_var_016',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables without using a temporary variable.',
    mathSolution: 'Swapping without temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;\n    b = a - b;\n    a = a - b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use addition and subtraction to swap without temp variable'
  },
  {
    id: 'c_var_017',
    topicId: 'c_variables',
    question: 'Write a program to swap two integers using XOR operator.',
    mathSolution: 'Swapping using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR (^) can be used to swap values without overflow risk'
  },
  {
    id: 'c_var_018',
    topicId: 'c_variables',
    question: 'Write a program to find the maximum and minimum of two integers.',
    mathSolution: 'Max and min of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40;\n    int max, min;\n    \n    if(a > b) {\n        max = a;\n        min = b;\n    } else {\n        max = b;\n        min = a;\n    }\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Maximum = %d\\n", max);\n    printf("Minimum = %d\\n", min);\n    \n    return 0;\n}',
    hint: 'Use if-else or ternary operator to find max/min'
  },
  {
    id: 'c_var_019',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable scope inside blocks.',
    mathSolution: 'Variable scope',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;  // Outer scope\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int y = 20;  // Inner scope\n        printf("Inner y = %d\\n", y);\n        printf("Inner can access outer x = %d\\n", x);\n        \n        x = 30;  // Modifying outer variable\n    }\n    \n    // printf("y = %d", y);  // Error: y not accessible here\n    printf("Outer x after modification = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Variables declared in inner blocks are not accessible outside'
  },
  {
    id: 'c_var_020',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable shadowing.',
    mathSolution: 'Variable shadowing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int x = 20;  // Shadows outer x\n        printf("Inner x (shadows outer) = %d\\n", x);\n        \n        {\n            int x = 30;  // Shadows both\n            printf("Innermost x = %d\\n", x);\n        }\n        \n        printf("Back to inner x = %d\\n", x);\n    }\n    \n    printf("Back to outer x = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Inner variables can have same name and hide outer variables'
  },

  // ========== FLOAT AND DOUBLE VARIABLES (QUESTIONS 21-30) ==========
  {
    id: 'c_var_021',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate float and double precision differences.',
    mathSolution: 'Precision of float vs double',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0 / 3.0;\n    double d = 1.0 / 3.0;\n    \n    printf("float (6 decimal): %.6f\\n", f);\n    printf("float (12 decimal): %.12f\\n", f);\n    printf("double (6 decimal): %.6lf\\n", d);\n    printf("double (12 decimal): %.12lf\\n", d);\n    printf("double (15 decimal): %.15lf\\n", d);\n    \n    return 0;\n}',
    hint: 'double has more precision than float'
  },
  {
    id: 'c_var_022',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate scientific notation for float variables.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float avogadro = 6.022e23;      // 6.022 × 10^23\n    float planck = 6.626e-34;       // 6.626 × 10^-34\n    double speed = 3.0e8;           // 3.0 × 10^8\n    \n    printf("Avogadro number: %e\\n", avogadro);\n    printf("Planck constant: %e\\n", planck);\n    printf("Speed of light: %.2e m/s\\n", speed);\n    \n    return 0;\n}',
    hint: 'Use e or E for scientific notation, %e format specifier'
  },
  {
    id: 'c_var_023',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate floating point precision issues.',
    mathSolution: 'Floating point precision problems',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a = 0.1;\n    float b = 0.2;\n    float sum = a + b;\n    \n    printf("0.1 + 0.2 = %.20f\\n", sum);\n    printf("Expected: 0.3\\n");\n    \n    if(sum == 0.3) {\n        printf("Equal\\n");\n    } else {\n        printf("Not equal due to precision issues\\n");\n    }\n    \n    float tolerance = 0.000001;\n    if(fabs(sum - 0.3) < tolerance) {\n        printf("Approximately equal within tolerance\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Never compare floats directly with ==, use tolerance'
  },
{
    id: 'c_var_024',
    topicId: 'c_variables',
    question: 'Write a program to convert Celsius to Fahrenheit using float variables.',
    mathSolution: 'Temperature conversion using formula F = (C × 9/5) + 32',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit;\n    \n    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;\n    \n    printf("%.2f°C = %.2f°F\\n", celsius, fahrenheit);\n    \n    return 0;\n}',
    hint: 'Formula: F = (C × 9/5) + 32'
},
{
    id: 'c_var_025',
    topicId: 'c_variables',
    question: 'Write a program to calculate area of circle using float variables.',
    mathSolution: 'Area of circle using formula A = πr²',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float radius = 7.5;\n    float area;\n    const float PI = 3.14159;\n    \n    area = PI * radius * radius;\n    \n    printf("Radius = %.2f\\n", radius);\n    printf("Area = %.2f square units\\n", area);\n    \n    return 0;\n}',
    hint: 'Area = πr²'
},

  {
    id: 'c_var_026',
    topicId: 'c_variables',
    question: 'Write a program to calculate simple interest using float variables.',
    mathSolution: 'Simple Interest = (P × R × T)/100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest: ");\n    scanf("%f", &rate);\n    printf("Enter time period (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    \n    printf("\\nPrincipal: %.2f\\n", principal);\n    printf("Rate: %.2f%%\\n", rate);\n    printf("Time: %.2f years\\n", time);\n    printf("Simple Interest: %.2f\\n", interest);\n    printf("Total Amount: %.2f\\n", principal + interest);\n    \n    return 0;\n}',
    hint: 'Simple interest formula: (P × R × T)/100'
  },
  {
    id: 'c_var_027',
    topicId: 'c_variables',
    question: 'Write a program to calculate compound interest using double variables.',
    mathSolution: 'A = P(1 + r/n)^(nt)',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double principal, rate, time, amount, interest;\n    int n;\n    \n    printf("Enter principal amount: ");\n    scanf("%lf", &principal);\n    printf("Enter annual rate (as decimal, e.g., 0.05 for 5%%): ");\n    scanf("%lf", &rate);\n    printf("Enter time (years): ");\n    scanf("%lf", &time);\n    printf("Enter number of times compounded per year: ");\n    scanf("%d", &n);\n    \n    amount = principal * pow(1 + rate/n, n * time);\n    interest = amount - principal;\n    \n    printf("\\nPrincipal: %.2lf\\n", principal);\n    printf("Rate: %.2lf%%\\n", rate * 100);\n    printf("Time: %.2lf years\\n", time);\n    printf("Compounded %d times per year\\n", n);\n    printf("Compound Interest: %.2lf\\n", interest);\n    printf("Total Amount: %.2lf\\n", amount);\n    \n    return 0;\n}',
    hint: 'Use pow() function from math.h for exponentiation'
  },
  {
    id: 'c_var_028',
    topicId: 'c_variables',
    question: 'Write a program to find the roots of a quadratic equation using double variables.',
    mathSolution: 'ax² + bx + c = 0, roots = [-b ± √(b² - 4ac)] / 2a',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, discriminant, root1, root2, realPart, imagPart;\n    \n    printf("Enter coefficients a, b, c: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    discriminant = b * b - 4 * a * c;\n    \n    if(discriminant > 0) {\n        root1 = (-b + sqrt(discriminant)) / (2 * a);\n        root2 = (-b - sqrt(discriminant)) / (2 * a);\n        printf("Roots are real and different: %.2lf and %.2lf\\n", root1, root2);\n    } else if(discriminant == 0) {\n        root1 = root2 = -b / (2 * a);\n        printf("Roots are real and equal: %.2lf and %.2lf\\n", root1, root2);\n    } else {\n        realPart = -b / (2 * a);\n        imagPart = sqrt(-discriminant) / (2 * a);\n        printf("Roots are complex: %.2lf + %.2lfi and %.2lf - %.2lfi\\n", realPart, imagPart, realPart, imagPart);\n    }\n    \n    return 0;\n}',
    hint: 'Use discriminant to determine nature of roots'
  },
  {
    id: 'c_var_029',
    topicId: 'c_variables',
    question: 'Write a program to calculate the distance between two points using double variables.',
    mathSolution: 'Distance = √[(x₂-x₁)² + (y₂-y₁)²]',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double x1, y1, x2, y2, distance;\n    \n    printf("Enter coordinates of first point (x1 y1): ");\n    scanf("%lf %lf", &x1, &y1);\n    printf("Enter coordinates of second point (x2 y2): ");\n    scanf("%lf %lf", &x2, &y2);\n    \n    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));\n    \n    printf("\\nFirst point: (%.2lf, %.2lf)\\n", x1, y1);\n    printf("Second point: (%.2lf, %.2lf)\\n", x2, y2);\n    printf("Distance between points: %.2lf\\n", distance);\n    \n    return 0;\n}',
    hint: 'Use sqrt() and pow() from math.h'
  },
  {
    id: 'c_var_030',
    topicId: 'c_variables',
    question: 'Write a program to calculate the area of a triangle using Herons formula with double variables.',
    mathSolution: 'Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, s, area;\n    \n    printf("Enter three sides of triangle: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    if(a + b > c && a + c > b && b + c > a) {\n        s = (a + b + c) / 2;\n        area = sqrt(s * (s - a) * (s - b) * (s - c));\n        \n        printf("\\nTriangle sides: %.2lf, %.2lf, %.2lf\\n", a, b, c);\n        printf("Semi-perimeter: %.2lf\\n", s);\n        printf("Area of triangle: %.2lf square units\\n", area);\n    } else {\n        printf("Invalid triangle! Sides do not satisfy triangle inequality.\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check triangle inequality before calculating area'
  },

  // ========== CHARACTER VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_var_031',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character variables and their ASCII values.',
    mathSolution: 'Characters and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch1 = \'A\';\n    char ch2 = \'a\';\n    char ch3 = \'0\';\n    char ch4 = \'$\';\n    \n    printf("Character: %c, ASCII: %d\\n", ch1, ch1);\n    printf("Character: %c, ASCII: %d\\n", ch2, ch2);\n    printf("Character: %c, ASCII: %d\\n", ch3, ch3);\n    printf("Character: %c, ASCII: %d\\n", ch4, ch4);\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers (ASCII values)'
  },
  {
    id: 'c_var_032',
    topicId: 'c_variables',
    question: 'Write a program to convert uppercase to lowercase using character variables.',
    mathSolution: 'Case conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char upper = \'M\';\n    char lower;\n    \n    lower = upper + 32;\n    \n    printf("Uppercase: %c\\n", upper);\n    printf("Lowercase: %c\\n", lower);\n    \n    char ch = \'z\';\n    printf("\\n\'%c\' in uppercase: %c\\n", ch, ch - 32);\n    \n    return 0;\n}',
    hint: 'ASCII difference between uppercase and lowercase is 32'
  },
  {
    id: 'c_var_033',
    topicId: 'c_variables',
    question: 'Write a program to check if a character is vowel or consonant.',
    mathSolution: 'Vowel/consonant check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Check for both uppercase and lowercase vowels'
  },
  {
    id: 'c_var_034',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate escape sequences in character variables.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char newline = \'\\n\';\n    char tab = \'\\t\';\n    char backslash = \'\\\\\';\n    char singlequote = \'\\\'\';\n    char doublequote = \'\"\';\n    \n    printf("Newline character: First line%cSecond line\\n", newline);\n    printf("Tab character: Before%cAfter\\n", tab);\n    printf("Backslash: %c\\n", backslash);\n    printf("Single quote: %c\\n", singlequote);\n    printf("Double quote: %c\\n", doublequote);\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash'
  },
  {
    id: 'c_var_035',
    topicId: 'c_variables',
    question: 'Write a program to read a character and print its next character.',
    mathSolution: 'Character arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    printf("You entered: %c\\n", ch);\n    printf("Next character: %c\\n", ch + 1);\n    printf("ASCII of next: %d\\n", ch + 1);\n    \n    return 0;\n}',
    hint: 'Characters can be used in arithmetic operations'
  },
  {
    id: 'c_var_036',
    topicId: 'c_variables',
    question: 'Write a program to print all ASCII characters from 32 to 126.',
    mathSolution: 'ASCII table printable characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i;\n    \n    printf("ASCII Table (32 to 126):\\n");\n    printf("----------------------\\n");\n    \n    for(i = 32; i <= 126; i++) {\n        printf("ASCII %3d: %c", i, i);\n        if((i - 31) % 5 == 0) printf("\\n");\n        else printf("\\t");\n    }\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers, can be used in loops'
  },
  {
    id: 'c_var_037',
    topicId: 'c_variables',
    question: 'Write a program to count vowels and consonants in a string using character variables.',
    mathSolution: 'Count vowels and consonants',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[100];\n    int vowels = 0, consonants = 0, i;\n    \n    printf("Enter a string: ");\n    fgets(str, sizeof(str), stdin);\n    \n    for(i = 0; str[i] != \'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(isalpha(ch)) {\n            if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        }\n    }\n    \n    printf("String: %s", str);\n    printf("Vowels: %d\\n", vowels);\n    printf("Consonants: %d\\n", consonants);\n    \n    return 0;\n}',
    hint: 'Use tolower() from ctype.h to handle both cases'
  },
  {
    id: 'c_var_038',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate digit character to integer conversion.',
    mathSolution: 'char digit to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char digit1 = \'5\';\n    char digit2 = \'9\';\n    \n    int num1 = digit1 - \'0\';\n    int num2 = digit2 - \'0\';\n    \n    printf("Character digit: %c -> Integer: %d\\n", digit1, num1);\n    printf("Character digit: %c -> Integer: %d\\n", digit2, num2);\n    \n    int sum = num1 + num2;\n    printf("Sum of digits: %d + %d = %d\\n", num1, num2, sum);\n    \n    return 0;\n}',
    hint: 'Subtract \'0\' from digit character to get integer value'
  },
  {
    id: 'c_var_039',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character classification using ctype.h functions.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char test_chars[] = {\'A\', \'a\', \'5\', \'$\', \' \', \'\\n\', \'Z\', \'z\', \'0\', \'\\t\'};\n    int n = sizeof(test_chars) / sizeof(test_chars[0]);\n    \n    printf("Character Classification\\n\\n");\n    printf("Char  isdigit isalpha isalnum islower isupper isspace ispunct\\n");\n    printf("----  ------- ------- ------- ------- ------- ------- -------\\n");\n    \n    for(int i = 0; i < n; i++) {\n        char c = test_chars[i];\n        printf("  %c   %7d %7d %7d %7d %7d %7d %7d\\n",\n               c,\n               isdigit(c) ? 1 : 0,\n               isalpha(c) ? 1 : 0,\n               isalnum(c) ? 1 : 0,\n               islower(c) ? 1 : 0,\n               isupper(c) ? 1 : 0,\n               isspace(c) ? 1 : 0,\n               ispunct(c) ? 1 : 0);\n    }\n    \n    return 0;\n}',
    hint: 'ctype.h functions test character properties'
  },
  {
    id: 'c_var_040',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate octal and hexadecimal escape sequences in characters.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char octal_A = \'\\101\';\n    char octal_B = \'\\102\';\n    char hex_A = \'\\x41\';\n    char hex_Z = \'\\x5A\';\n    char hex_a = \'\\x61\';\n    \n    printf("Octal \\\\101: %c\\n", octal_A);\n    printf("Octal \\\\102: %c\\n", octal_B);\n    printf("Hex \\\\x41: %c\\n", hex_A);\n    printf("Hex \\\\x5A: %c\\n", hex_Z);\n    printf("Hex \\\\x61: %c\\n", hex_a);\n    \n    return 0;\n}',
    hint: 'Use \\ooo for octal and \\xhh for hexadecimal escape sequences'
  },

  // ========== TYPE CONVERSION (QUESTIONS 41-50) ==========
  {
    id: 'c_var_041',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate implicit type conversion.',
    mathSolution: 'Implicit type conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 2;\n    float result1, result2;\n    \n    result1 = a / b;\n    result2 = (float)a / b;\n    \n    printf("int a = %d, int b = %d\\n", a, b);\n    printf("a / b (integer division): %f\\n", result1);\n    printf("(float)a / b (float division): %f\\n", result2);\n    \n    float x = 5.5;\n    int y = 2;\n    float z = x + y;\n    printf("\\n5.5 + 2 = %f (int promoted to float)\\n", z);\n    \n    return 0;\n}',
    hint: 'In mixed expressions, lower type is promoted to higher type'
  },
  {
    id: 'c_var_042',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate explicit type casting.',
    mathSolution: 'Explicit type casting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 10.75;\n    int i;\n    char c;\n    \n    i = (int)f;\n    c = (char)i;\n    \n    printf("float f = %f\\n", f);\n    printf("int i = (int)f = %d (fraction lost)\\n", i);\n    printf("char c = (char)i = %c\\n", c);\n    \n    int a = 5, b = 2;\n    float result = (float)a / b;\n    printf("\\n(float)%d / %d = %f\\n", a, b, result);\n    \n    return 0;\n}',
    hint: 'Use (type)variable for explicit casting'
  },
  {
    id: 'c_var_043',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer to character conversion.',
    mathSolution: 'Int to char conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int ascii;\n    \n    for(ascii = 65; ascii <= 70; ascii++) {\n        printf("ASCII %d = Character %c\\n", ascii, (char)ascii);\n    }\n    \n    int num = 97;\n    char ch = (char)num;\n    printf("\\nInteger %d as character: %c\\n", num, ch);\n    \n    return 0;\n}',
    hint: 'Integers can be cast to characters to get ASCII representation'
  },
  {
    id: 'c_var_044',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate char to int conversion.',
    mathSolution: 'Char to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'Z\';\n    int ascii = (int)ch;\n    \n    printf("Character: %c\\n", ch);\n    printf("ASCII value: %d\\n", ascii);\n    \n    char digit = \'7\';\n    int num = digit - \'0\';\n    \n    printf("\\nDigit character: %c\\n", digit);\n    printf("As integer: %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Subtracting \'0\' converts digit character to integer'
  },
  {
    id: 'c_var_045',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate potential data loss in type conversion.',
    mathSolution: 'Data loss in conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int large = 1000;\n    char small;\n    float f = 1234.5678;\n    int truncated;\n    \n    small = (char)large;\n    truncated = (int)f;\n    \n    printf("int large = %d\\n", large);\n    printf("char small = (char)large = %d (data lost)\\n", small);\n    \n    printf("\\nfloat f = %f\\n", f);\n    printf("int truncated = (int)f = %d (fraction lost)\\n", truncated);\n    \n    return 0;\n}',
    hint: 'Converting to smaller types may lose data'
  },
  {
    id: 'c_var_046',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate automatic promotion in expressions.',
    mathSolution: 'Type promotion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char c = \'A\';\n    short s = 1000;\n    int i = 50000;\n    float f = 3.14;\n    double d = 2.71828;\n    \n    printf("Type promotion in expressions:\\n");\n    printf("char + int: %d (result type: int)\\n", c + i);\n    printf("short + int: %d (result type: int)\\n", s + i);\n    printf("int + float: %f (result type: float)\\n", i + f);\n    printf("float + double: %lf (result type: double)\\n", f + d);\n    \n    printf("\\nSize of results:\\n");\n    printf("sizeof(c + i): %zu bytes\\n", sizeof(c + i));\n    printf("sizeof(i + f): %zu bytes\\n", sizeof(i + f));\n    \n    return 0;\n}',
    hint: 'Types are promoted to the highest type in expression'
  },
  {
    id: 'c_var_047',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate overflow in type conversion.',
    mathSolution: 'Conversion overflow',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    long long big = LLONG_MAX;\n    int normal;\n    \n    printf("long long max: %lld\\n", big);\n    normal = (int)big;\n    printf("After casting to int: %d (overflow)\\n\\n", normal);\n    \n    double large_double = 1.8e308;\n    float small_float;\n    \n    printf("double large: %e\\n", large_double);\n    small_float = (float)large_double;\n    printf("After casting to float: %e (overflow to infinity)\\n", small_float);\n    \n    return 0;\n}',
    hint: 'Casting from larger to smaller type can cause overflow'
  },
  {
    id: 'c_var_048',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate signed to unsigned conversion.',
    mathSolution: 'Signed to unsigned conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int signed_num = -50;\n    unsigned int unsigned_num;\n    \n    unsigned_num = (unsigned int)signed_num;\n    \n    printf("Signed int: %d\\n", signed_num);\n    printf("After casting to unsigned: %u\\n", unsigned_num);\n    \n    int a = -10;\n    unsigned int b = 5;\n    \n    printf("\\nSigned + unsigned:\\n");\n    printf("%d + %u = %u\\n", a, b, a + b);\n    \n    if(a < b) {\n        printf("%d < %u is true\\n", a, b);\n    } else {\n        printf("%d < %u is false (due to conversion)\\n", a, b);\n    }\n    \n    return 0;\n}',
    hint: 'Negative signed values become large positive when cast to unsigned'
  },
  {
    id: 'c_var_049',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate truncation in floating point to integer conversion.',
    mathSolution: 'Truncation in conversion',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double values[] = {5.7, 5.2, -5.7, -5.2, 5.0};\n    int n = sizeof(values) / sizeof(values[0]);\n    \n    printf("Floating point to integer truncation:\\n");\n    printf("Original  (int)cast  floor  ceil  round\\n");\n    printf("--------  ---------  -----  ----  -----\\n");\n    \n    for(int i = 0; i < n; i++) {\n        double val = values[i];\n        printf("%8.2f  %8d  %5.0f  %5.0f  %5.0f\\n",\n               val,\n               (int)val,\n               floor(val),\n               ceil(val),\n               round(val));\n    }\n    \n    return 0;\n}',
    hint: 'Casting truncates toward zero; floor/ceil/round provide other behaviors'
  },
 {
    id: 'c_structure_050',
    topicId: 'c_structure',
    question: 'Use typedef with a structure to create a new type name and display the values.',
    mathSolution: 'Typedef with structure to create Point type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point p1 = {10, 20};\n    printf("Point coordinates:\\n");\n    printf("x = %d\\n", p1.x);\n    printf("y = %d\\n", p1.y);\n    return 0;\n}',
    hint: 'typedef creates an alias for a structure type'
}
);

