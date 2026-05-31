QuizData.questions.push(
  // ========== BASIC STRUCTURE (QUESTIONS 1-15) ==========
  {
    id: 'c_structure_001',
    topicId: 'c_structure',
    question: 'Write the basic structure of a C program that includes the stdio.h header file and has a main function.',
    mathSolution: 'Basic C program structure with header and main function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'Every C program needs header files and a main function'
  },
  {
    id: 'c_structure_002',
    topicId: 'c_structure',
    question: 'Write a C program that prints "Hello, World!" using the printf function.',
    mathSolution: 'Program with printf statement inside main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
    hint: 'printf is used for output and is defined in stdio.h'
  },
  {
    id: 'c_structure_003',
    topicId: 'c_structure',
    question: 'Write a C program that includes comments explaining each part: header, main function, and return statement.',
    mathSolution: 'Program with documentation comments',
    codeSolution: '#include <stdio.h>  // Preprocessor directive: includes standard input/output library\n\nint main() {        // Main function: program execution starts here\n    // This is a comment - prints a message\n    printf("Learning C Structure");  // Statement: prints text\n    return 0;       // Return statement: indicates successful completion\n}',
    hint: 'Use // for single-line comments and /* */ for multi-line comments'
  },
 {
    id: 'c_structure_004',
    topicId: 'c_structure',
    question: 'Write a C program that uses two header files: stdio.h and string.h, and finds the length of a string.',
    mathSolution: 'Program with multiple header files using strlen()',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    int len = strlen(str);\n    printf("Length of string is: %d\\n", len);\n    return 0;\n}',
    hint: 'string.h contains strlen() function to find string length'
},
  {
    id: 'c_structure_005',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variable declaration inside the main function.',
    mathSolution: 'Variable declaration and initialization in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Variable declarations\n    int age = 25;\n    float salary = 55000.50;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Salary: %.2f\\n", salary);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Variables must be declared before they are used'
  },
  {
    id: 'c_structure_006',
    topicId: 'c_structure',
    question: 'Write a program that takes input from user using scanf and displays it using printf.',
    mathSolution: 'Program with input and output operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int number;\n    \n    printf("Enter a number: ");\n    scanf("%d", &number);\n    \n    printf("You entered: %d", number);\n    \n    return 0;\n}',
    hint: 'scanf requires & before variable name for basic data types'
  },
  {
    id: 'c_structure_007',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of curly braces to define the body of main function.',
    mathSolution: 'Block structure with curly braces',
    codeSolution: '#include <stdio.h>\n\nint main()\n{  // Opening brace - start of block\n    printf("Curly braces define the block");\n    printf("All statements inside braces are part of main");\n    return 0;\n}  // Closing brace - end of block',
    hint: 'Curly braces {} define the scope and body of functions'
  },
  {
    id: 'c_structure_008',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the correct syntax of a C program with proper indentation.',
    mathSolution: 'Program with proper indentation and formatting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num1 = 10;\n    int num2 = 20;\n    int sum = num1 + num2;\n    \n    if (sum > 0) {\n        printf("Sum is positive: %d\\n", sum);\n    }\n    \n    return 0;\n}',
    hint: 'Proper indentation makes code readable'
  },
  {
    id: 'c_structure_009',
    topicId: 'c_structure',
    question: 'Write a program that uses both preprocessor directives and comments at the top of the program.',
    mathSolution: 'Program with preprocessor directives and header comments',
    codeSolution: '/*\n * Program: Structure Demo\n * Author: Student\n * Description: Demonstrates preprocessor directives\n */\n\n#include <stdio.h>  // For input/output\n#define MAX 100      // Constant definition\n\nint main() {\n    printf("Maximum value: %d", MAX);\n    return 0;\n}',
    hint: 'Preprocessor directives start with # and are processed before compilation'
  },
  {
    id: 'c_structure_010',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple statements in the main function.',
    mathSolution: 'Multiple sequential statements in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    int c;\n    \n    c = a + b;\n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("Sum = %d\\n", c);\n    \n    c = a * b;\n    printf("Product = %d\\n", c);\n    \n    return 0;\n}',
    hint: 'Statements are executed sequentially in the order they appear'
  },
  {
    id: 'c_structure_011',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of escape sequences in printf statements.',
    mathSolution: 'Program with escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\n");      // \\n for new line\n    printf("Line 2\\tTabbed\\n");  // \\t for tab\n    printf("Quote: \\"Hello\\"\\n"); // \\" for double quote\n    printf("Backslash: \\\\\\\\n");    // \\\\ for backslash\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash (\\)'
  },
  {
    id: 'c_structure_012',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the return value of main function as 0 for success.',
    mathSolution: 'Program with return 0 statement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program executed successfully\\n");\n    \n    return 0;  // Indicates successful completion to operating system\n}',
    hint: 'return 0 means program executed successfully, non-zero means error'
  },
  {
    id: 'c_structure_013',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of int main() with return 0.',
    mathSolution: 'Program with standard int main() function and return statement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Using int main function\\n");\n    return 0;\n}',
    hint: 'int main() is the standard entry point in C'
},
  {
    id: 'c_structure_014',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of empty main function with only return statement.',
    mathSolution: 'Minimal valid C program',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'This is the smallest valid C program'
  },
  {
    id: 'c_structure_015',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of #define to create a constant and use it in main.',
    mathSolution: 'Program with #define preprocessor directive',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n#define MESSAGE "Area of Circle"\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    \n    printf("%s: %.2f", MESSAGE, area);\n    \n    return 0;\n}',
    hint: '#define creates macros that are replaced before compilation'
  },

  // ========== MULTIPLE FUNCTIONS (QUESTIONS 16-30) ==========
  {
    id: 'c_structure_016',
    topicId: 'c_structure',
    question: 'Write a program with two functions: main() and a user-defined function printMessage() that prints "Hello from function".',
    mathSolution: 'Program with multiple functions',
    codeSolution: '#include <stdio.h>\n\n// Function declaration (prototype)\nvoid printMessage();\n\nint main() {\n    printf("Calling function from main:\\n");\n    printMessage();  // Function call\n    return 0;\n}\n\n// Function definition\nvoid printMessage() {\n    printf("Hello from function\\n");\n}',
    hint: 'Functions must be declared before they are called'
  },
  {
    id: 'c_structure_017',
    topicId: 'c_structure',
    question: 'Write a program with a function that takes two integers as parameters and returns their sum.',
    mathSolution: 'Function with parameters and return value',
    codeSolution: '#include <stdio.h>\n\n// Function declaration\nint add(int a, int b);\n\nint main() {\n    int x = 15, y = 25;\n    int result = add(x, y);\n    \n    printf("%d + %d = %d\\n", x, y, result);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}',
    hint: 'Parameters pass data to functions, return sends data back'
  },
  {
    id: 'c_structure_018',
    topicId: 'c_structure',
    question: 'Write a program with three functions: main(), getNumber(), and displayNumber(). Get input in getNumber() and display in displayNumber().',
    mathSolution: 'Program with multiple functions for input and output',
    codeSolution: '#include <stdio.h>\n\nint getNumber();\nvoid displayNumber(int num);\n\nint main() {\n    int num = getNumber();\n    displayNumber(num);\n    return 0;\n}\n\nint getNumber() {\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    return n;\n}\n\nvoid displayNumber(int num) {\n    printf("You entered: %d\\n", num);\n}',
    hint: 'Functions can be organized for specific tasks'
  },
  {
    id: 'c_structure_019',
    topicId: 'c_structure',
    question: 'Write a program where main() calls function1(), function1() calls function2(), and function2() prints a message.',
    mathSolution: 'Nested function calls',
    codeSolution: '#include <stdio.h>\n\nvoid function1();\nvoid function2();\n\nint main() {\n    printf("Main function starts\\n");\n    function1();\n    printf("Main function ends\\n");\n    return 0;\n}\n\nvoid function1() {\n    printf("Function1 starts\\n");\n    function2();\n    printf("Function1 ends\\n");\n}\n\nvoid function2() {\n    printf("Inside Function2\\n");\n}',
    hint: 'Functions can call other functions in a chain'
  },
  {
    id: 'c_structure_020',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function prototype placed before main and function definition after main.',
    mathSolution: 'Function prototype vs definition placement',
    codeSolution: '#include <stdio.h>\n\n// Function prototypes (declarations)\nint multiply(int x, int y);\nvoid printResult(int value);\n\nint main() {\n    int a = 8, b = 7;\n    int product = multiply(a, b);\n    printResult(product);\n    return 0;\n}\n\n// Function definitions\nint multiply(int x, int y) {\n    return x * y;\n}\n\nvoid printResult(int value) {\n    printf("Result: %d\\n", value);\n}',
    hint: 'Prototypes tell compiler about functions before their definitions'
  },
  {
    id: 'c_structure_021',
    topicId: 'c_structure',
    question: 'Write a program with a function that returns nothing (void) and takes no parameters.',
    mathSolution: 'Void function with no parameters',
    codeSolution: '#include <stdio.h>\n\nvoid displayWelcome();\n\nint main() {\n    displayWelcome();\n    return 0;\n}\n\nvoid displayWelcome() {\n    printf("Welcome to C Programming!\\n");\n    printf("This function returns nothing.\\n");\n}',
    hint: 'void indicates no return value and/or no parameters'
  },
  {
    id: 'c_structure_022',
    topicId: 'c_structure',
    question: 'Write a program with a function that calculates square of a number and returns the result.',
    mathSolution: 'Function with single parameter and return value',
    codeSolution: '#include <stdio.h>\n\nfloat square(float num);\n\nint main() {\n    float number = 4.5;\n    float result = square(number);\n    \n    printf("Square of %.2f is %.2f\\n", number, result);\n    return 0;\n}\n\nfloat square(float num) {\n    return num * num;\n}',
    hint: 'Function can return any data type'
  },
  {
    id: 'c_structure_023',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates calling a function multiple times from main with different arguments.',
    mathSolution: 'Multiple function calls with different arguments',
    codeSolution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("Max of 10 and 20: %d\\n", max(10, 20));\n    printf("Max of 35 and 15: %d\\n", max(35, 15));\n    printf("Max of 40 and 40: %d\\n", max(40, 40));\n    \n    return 0;\n}\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}',
    hint: 'Functions can be called any number of times'
  },
  {
    id: 'c_structure_024',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates a function calling itself (recursion) to calculate factorial.',
    mathSolution: 'Recursive function structure',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n);\n\nint main() {\n    int num = 5;\n    int fact = factorial(num);\n    \n    printf("Factorial of %d = %d\\n", num, fact);\n    return 0;\n}\n\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;  // Base case\n    }\n    return n * factorial(n - 1);  // Recursive call\n}',
    hint: 'Recursive functions call themselves with a base condition to stop'
  },
  {
    id: 'c_structure_025',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function overloading is not supported in C (show error comment).',
    mathSolution: 'C does not support function overloading',
    codeSolution: '#include <stdio.h>\n\n// C does not support function overloading\n// This will cause a compilation error if uncommented\n/*\nint add(int a, int b) {\n    return a + b;\n}\n\nfloat add(float a, float b) {  // Error: duplicate function name\n    return a + b;\n}\n*/\n\nint addInt(int a, int b) {\n    return a + b;\n}\n\nfloat addFloat(float a, float b) {\n    return a + b;\n}\n\nint main() {\n    printf("Int sum: %d\\n", addInt(5, 10));\n    printf("Float sum: %.2f\\n", addFloat(5.5, 3.7));\n    return 0;\n}',
    hint: 'In C, each function must have a unique name'
  },
  {
    id: 'c_structure_026',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing arrays to functions.',
    mathSolution: 'Array passing to functions',
    codeSolution: '#include <stdio.h>\n\nvoid printArray(int arr[], int size);\nint findSum(int arr[], int size);\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Array elements: ");\n    printArray(numbers, size);\n    \n    int sum = findSum(numbers, size);\n    printf("\\nSum of elements: %d\\n", sum);\n    \n    return 0;\n}\n\nvoid printArray(int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n    }\n}\n\nint findSum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}',
    hint: 'Arrays are passed by reference (address) to functions'
  },
  {
    id: 'c_structure_027',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing structures to functions.',
    mathSolution: 'Structure passing to functions',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nvoid displayStudent(struct Student s);\nvoid updateMarks(struct Student *s, float newMarks);\n\nint main() {\n    struct Student s1 = {101, "Alice", 85.5};\n    \n    printf("Before update:\\n");\n    displayStudent(s1);\n    \n    updateMarks(&s1, 95.5);\n    \n    printf("\\nAfter update:\\n");\n    displayStudent(s1);\n    \n    return 0;\n}\n\nvoid displayStudent(struct Student s) {\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s.roll, s.name, s.marks);\n}\n\nvoid updateMarks(struct Student *s, float newMarks) {\n    s->marks = newMarks;\n}',
    hint: 'Structures can be passed by value or by reference using pointers'
  },
  {
    id: 'c_structure_028',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function returning a structure.',
    mathSolution: 'Function returning structure',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nstruct Student createStudent(int r, char n[], float m);\n\nint main() {\n    struct Student s1 = createStudent(102, "Bob", 78.5);\n    \n    printf("Roll: %d\\n", s1.roll);\n    printf("Name: %s\\n", s1.name);\n    printf("Marks: %.2f\\n", s1.marks);\n    \n    return 0;\n}\n\nstruct Student createStudent(int r, char n[], float m) {\n    struct Student s;\n    s.roll = r;\n    strcpy(s.name, n);\n    s.marks = m;\n    return s;\n}',
    hint: 'Functions can return structures'
  },
 {
    id: 'c_structure_029',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates macro and inline function concept in C.',
    mathSolution: 'Macro vs Inline function concept',
    codeSolution: '#include <stdio.h>\n\n// Macro (works like inline but text substitution)\n#define SQUARE(x) ((x) * (x))\n\n// Static inline function (better compatibility)\nstatic inline int cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    int num = 5;\n    \n    printf("Square of %d: %d (using macro)\\n", num, SQUARE(num));\n    printf("Cube of %d: %d (using inline function)\\n", num, cube(num));\n    \n    return 0;\n}',
    hint: 'Use static inline for better compatibility with C89/C99 compilers'
},
  {
    id: 'c_structure_030',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested functions (not standard C, GCC extension).',
    mathSolution: 'Nested functions (GCC extension)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Demonstrating nested function (GCC extension):\\n");\n    \n    // Nested function definition (GCC specific)\n    void innerFunction() {\n        printf("This is inner function\\n");\n    }\n    \n    innerFunction();\n    \n    return 0;\n}',
    hint: 'Nested functions are not standard C, but supported in GCC'
  },

  // ========== GLOBAL VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_structure_031',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable declared outside all functions.',
    mathSolution: 'Global variable declaration and usage',
    codeSolution: '#include <stdio.h>\n\n// Global variable\nint globalCount = 0;\n\nvoid increment();\nvoid display();\n\nint main() {\n    printf("Initial global count: %d\\n", globalCount);\n    \n    increment();\n    increment();\n    display();\n    \n    globalCount = 100;  // Can be modified directly\n    printf("Modified in main: %d\\n", globalCount);\n    \n    return 0;\n}\n\nvoid increment() {\n    globalCount++;  // Accessing global variable\n}\n\nvoid display() {\n    printf("Current global count: %d\\n", globalCount);\n}',
    hint: 'Global variables are accessible to all functions'
  },
  {
    id: 'c_structure_032',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates local variable with same name as global variable.',
    mathSolution: 'Local vs Global variable with same name',
    codeSolution: '#include <stdio.h>\n\nint value = 100;  // Global variable\n\nint main() {\n    int value = 200;  // Local variable - hides global\n    \n    printf("Local value: %d\\n", value);\n    \n    // Access global variable using extern\n    {\n        extern int value;\n        printf("Global value: %d\\n", value);\n    }\n    \n    return 0;\n}',
    hint: 'Local variable takes precedence over global with same name'
  },
  {
    id: 'c_structure_033',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static global variable limited to file scope.',
    mathSolution: 'Static global variable',
    codeSolution: '#include <stdio.h>\n\nstatic int fileScopeVar = 50;  // Static global - visible only in this file\n\nvoid function1() {\n    printf("In function1: %d\\n", fileScopeVar);\n}\n\nvoid function2() {\n    printf("In function2: %d\\n", fileScopeVar);\n}\n\nint main() {\n    function1();\n    function2();\n    \n    fileScopeVar = 200;\n    printf("After change in main: %d\\n", fileScopeVar);\n    \n    return 0;\n}',
    hint: 'static global variables have file scope only'
  },
  {
    id: 'c_structure_034',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates initialization of global and local variables.',
    mathSolution: 'Variable initialization differences',
    codeSolution: '#include <stdio.h>\n\nint globalInt;        // Automatically initialized to 0\nfloat globalFloat;    // Automatically initialized to 0.0\nchar globalChar;      // Automatically initialized to \'\\0\'\n\nint main() {\n    int localInt;      // Uninitialized - contains garbage\n    float localFloat;  // Uninitialized - contains garbage\n    char localChar;    // Uninitialized - contains garbage\n    \n    printf("Global int: %d\\n", globalInt);\n    printf("Global float: %f\\n", globalFloat);\n    printf("Global char: [%d]\\n", globalChar);\n    \n    printf("Local int: %d\\n", localInt);\n    printf("Local float: %f\\n", localFloat);\n    printf("Local char: [%d]\\n", localChar);\n    \n    return 0;\n}',
    hint: 'Global variables are automatically initialized to zero, locals are not'
  },
  {
    id: 'c_structure_035',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple global variables across different data types.',
    mathSolution: 'Multiple global variables',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\n// Multiple global variables\nint studentCount = 0;\nfloat averageMarks = 0.0;\nchar schoolName[50] = "ABC School";\nconst int MAX_STUDENTS = 100;\n\nvoid addStudent();\nvoid displaySchoolInfo();\n\nint main() {\n    displaySchoolInfo();\n    \n    addStudent();\n    addStudent();\n    \n    printf("\\nAfter adding students:\\n");\n    printf("Student count: %d\\n", studentCount);\n    \n    return 0;\n}\n\nvoid addStudent() {\n    studentCount++;\n}\n\nvoid displaySchoolInfo() {\n    printf("School: %s\\n", schoolName);\n    printf("Max students: %d\\n", MAX_STUDENTS);\n    printf("Current students: %d\\n", studentCount);\n}',
    hint: 'Global variables can be of any data type'
  },
  {
    id: 'c_structure_036',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable modification in multiple functions.',
    mathSolution: 'Global variable modification across functions',
    codeSolution: '#include <stdio.h>\n\nint counter = 0;\n\nvoid incrementBy1() {\n    counter += 1;\n    printf("Incremented by 1: %d\\n", counter);\n}\n\nvoid incrementBy5() {\n    counter += 5;\n    printf("Incremented by 5: %d\\n", counter);\n}\n\nvoid decrementBy2() {\n    counter -= 2;\n    printf("Decremented by 2: %d\\n", counter);\n}\n\nvoid reset() {\n    counter = 0;\n    printf("Reset to: %d\\n", counter);\n}\n\nint main() {\n    incrementBy1();\n    incrementBy5();\n    incrementBy1();\n    decrementBy2();\n    reset();\n    \n    return 0;\n}',
    hint: 'All functions can modify global variables'
  },
  {
    id: 'c_structure_037',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global array declaration and usage.',
    mathSolution: 'Global array in program structure',
    codeSolution: '#include <stdio.h>\n\n// Global array\nint marks[5] = {85, 90, 78, 92, 88};\nint size = 5;\n\nvoid displayMarks();\nint findAverage();\nvoid updateMark(int index, int newMark);\n\nint main() {\n    printf("Original marks: ");\n    displayMarks();\n    \n    printf("Average: %d\\n", findAverage());\n    \n    updateMark(2, 95);\n    printf("\\nAfter update: ");\n    displayMarks();\n    \n    return 0;\n}\n\nvoid displayMarks() {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", marks[i]);\n    }\n    printf("\\n");\n}\n\nint findAverage() {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += marks[i];\n    }\n    return sum / size;\n}\n\nvoid updateMark(int index, int newMark) {\n    if(index >= 0 && index < size) {\n        marks[index] = newMark;\n    }\n}',
    hint: 'Global arrays are accessible to all functions'
  },
  {
    id: 'c_structure_038',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global pointer variable.',
    mathSolution: 'Global pointer variable',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint *globalPtr;\nint value = 100;\n\nvoid allocateAndSet();\nvoid displayValue();\nvoid freeMemory();\n\nint main() {\n    printf("Value: %d\\n", value);\n    \n    globalPtr = &value;\n    printf("Through pointer: %d\\n", *globalPtr);\n    \n    allocateAndSet();\n    displayValue();\n    freeMemory();\n    \n    return 0;\n}\n\nvoid allocateAndSet() {\n    globalPtr = (int*)malloc(sizeof(int));\n    *globalPtr = 500;\n}\n\nvoid displayValue() {\n    if(globalPtr != NULL) {\n        printf("Allocated value: %d\\n", *globalPtr);\n    }\n}\n\nvoid freeMemory() {\n    free(globalPtr);\n    globalPtr = NULL;\n}',
    hint: 'Global pointers can be used across functions for dynamic memory'
  },
  {
    id: 'c_structure_039',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global structure variable.',
    mathSolution: 'Global structure variable',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Employee {\n    int id;\n    char name[50];\n    float salary;\n};\n\n// Global structure variable\nstruct Employee emp;\n\nvoid inputEmployee();\nvoid displayEmployee();\nvoid giveHike(float percentage);\n\nint main() {\n    inputEmployee();\n    printf("\\nOriginal details:\\n");\n    displayEmployee();\n    \n    giveHike(10);\n    printf("\\nAfter hike:\\n");\n    displayEmployee();\n    \n    return 0;\n}\n\nvoid inputEmployee() {\n    emp.id = 1001;\n    strcpy(emp.name, "John Doe");\n    emp.salary = 50000.0;\n}\n\nvoid displayEmployee() {\n    printf("ID: %d\\n", emp.id);\n    printf("Name: %s\\n", emp.name);\n    printf("Salary: %.2f\\n", emp.salary);\n}\n\nvoid giveHike(float percentage) {\n    emp.salary += emp.salary * percentage / 100;\n}',
    hint: 'Global structures can be accessed and modified by any function'
  },
  {
    id: 'c_structure_040',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global constant variable.',
    mathSolution: 'Global const variable',
    codeSolution: '#include <stdio.h>\n\n// Global constants\nconst float TAX_RATE = 0.18;\nconst int MAX_EMPLOYEES = 50;\nconst char COMPANY[] = "Tech Solutions";\n\nfloat calculateTax(float amount);\nvoid displayCompanyInfo();\n\nint main() {\n    displayCompanyInfo();\n    \n    float amount = 10000;\n    float tax = calculateTax(amount);\n    \n    printf("Amount: %.2f\\n", amount);\n    printf("Tax (%.0f%%): %.2f\\n", TAX_RATE * 100, tax);\n    printf("Total: %.2f\\n", amount + tax);\n    \n    return 0;\n}\n\nfloat calculateTax(float amount) {\n    return amount * TAX_RATE;\n}\n\nvoid displayCompanyInfo() {\n    printf("Company: %s\\n", COMPANY);\n    printf("Max Employees: %d\\n", MAX_EMPLOYEES);\n}',
    hint: 'Global constants cannot be modified'
  },

  // ========== STATIC VARIABLES (QUESTIONS 41-45) ==========
  {
    id: 'c_structure_041',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable inside a function maintaining its value between calls.',
    mathSolution: 'Static local variable persistence',
    codeSolution: '#include <stdio.h>\n\nvoid counter();\n\nint main() {\n    printf("Calling counter 5 times:\\n");\n    for(int i = 0; i < 5; i++) {\n        counter();\n    }\n    return 0;\n}\n\nvoid counter() {\n    static int count = 0;  // Static variable - initialized once\n    int normal = 0;        // Normal variable - initialized each call\n    \n    count++;\n    normal++;\n    \n    printf("Static: %d, Normal: %d\\n", count, normal);\n}',
    hint: 'Static local variables retain their value between function calls'
  },
  {
    id: 'c_structure_042',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable used for function call counting.',
    mathSolution: 'Static variable for counting function calls',
    codeSolution: '#include <stdio.h>\n\nvoid trackFunction();\n\nint main() {\n    trackFunction();\n    trackFunction();\n    trackFunction();\n    trackFunction();\n    \n    return 0;\n}\n\nvoid trackFunction() {\n    static int callCount = 0;\n    callCount++;\n    \n    printf("This function has been called %d time(s)\\n", callCount);\n}',
    hint: 'Static variables are perfect for counting'
  },
  {
    id: 'c_structure_043',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable for generating unique IDs.',
    mathSolution: 'Static variable for unique ID generation',
    codeSolution: '#include <stdio.h>\n\nint generateID();\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        int id = generateID();\n        printf("Generated ID: %d\\n", id);\n    }\n    \n    return 0;\n}\n\nint generateID() {\n    static int nextID = 1001;  // Starting ID\n    return nextID++;  // Return current and increment for next\n}',
    hint: 'Static variables can maintain state across function calls'
  },
  {
    id: 'c_structure_044',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable with different initial values.',
    mathSolution: 'Static variable initialization',
    codeSolution: '#include <stdio.h>\n\nvoid showValues();\n\nint main() {\n    showValues();\n    showValues();\n    showValues();\n    \n    return 0;\n}\n\nvoid showValues() {\n    static int staticVar1 = 0;     // Explicitly initialized to 0\n    static int staticVar2;         // Implicitly initialized to 0\n    static int staticVar3 = 10;    // Initialized to 10\n    \n    printf("StaticVar1: %d, StaticVar2: %d, StaticVar3: %d\\n", \n            staticVar1++, staticVar2++, staticVar3++);\n}',
    hint: 'Static variables are initialized only once at program startup'
  },
  {
    id: 'c_structure_045',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable in recursive function.',
    mathSolution: 'Static variable in recursion',
    codeSolution: '#include <stdio.h>\n\nvoid recursiveFunction(int n);\n\nint main() {\n    printf("Calling recursive function:\\n");\n    recursiveFunction(3);\n    \n    return 0;\n}\n\nvoid recursiveFunction(int n) {\n    static int depth = 0;\n    depth++;\n    \n    printf("Depth: %d, n: %d\\n", depth, n);\n    \n    if(n > 0) {\n        recursiveFunction(n - 1);\n    }\n    \n    depth--;\n    printf("Returning from depth: %d\\n", depth + 1);\n}',
    hint: 'Static variables maintain value across all recursive calls'
  },

  // ========== HEADER FILES (QUESTIONS 46-50) ==========
{
    id: 'c_structure_046',
    topicId: 'c_structure',
    question: 'What is the purpose of header files in C? Demonstrate by creating function declarations that would typically go in a header file.',
    mathSolution: 'Header files contain function declarations and macros for code organization',
    codeSolution: '#include <stdio.h>\n\n// These declarations would typically be in a header file (mymath.h)\n// Function declarations (prototypes)\nint add(int a, int b);\nint subtract(int a, int b);\nint multiply(int a, int b);\nfloat divide(int a, int b);\n\n// Function definitions (would be in mymath.c)\nint add(int a, int b) { \n    return a + b; \n}\n\nint subtract(int a, int b) { \n    return a - b; \n}\n\nint multiply(int a, int b) { \n    return a * b; \n}\n\nfloat divide(int a, int b) { \n    return (float)a / b; \n}\n\n// Main program\nint main() {\n    int x = 20, y = 5;\n    \n    printf("Add: %d\\n", add(x, y));\n    printf("Subtract: %d\\n", subtract(x, y));\n    printf("Multiply: %d\\n", multiply(x, y));\n    printf("Divide: %.2f\\n", divide(x, y));\n    \n    return 0;\n}',
    hint: 'Header files contain function declarations. This example shows all code in one file for demonstration.'
},
 {
    id: 'c_structure_047',
    topicId: 'c_structure',
    question: 'Write a program that defines constants using #define directive and uses them in calculations.',
    mathSolution: 'Using #define to create constants',
    codeSolution: '#include <stdio.h>\n\n#define PI 3.14159\n#define MAX_SIZE 100\n#define COMPANY_NAME "TechCorp"\n#define BRAND \'T\'\n\nint main() {\n    printf("PI: %f\\n", PI);\n    printf("MAX_SIZE: %d\\n", MAX_SIZE);\n    printf("COMPANY_NAME: %s\\n", COMPANY_NAME);\n    printf("BRAND: %c\\n", BRAND);\n    \n    float radius = 10;\n    float area = PI * radius * radius;\n    printf("Area of circle: %.2f\\n", area);\n    \n    return 0;\n}',
    hint: '#define creates constants that are replaced by preprocessor'
},
{
    id: 'c_structure_048',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of multiple standard header files.',
    mathSolution: 'Including and using multiple standard headers',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    // stdio.h functions\n    char name[50] = "John Doe";\n    printf("Name: %s\\n", name);\n    \n    // string.h functions\n    printf("Length of name: %lu\\n", strlen(name));\n    \n    // stdlib.h functions\n    int num = atoi("123");\n    printf("Converted string to int: %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Different header files provide different functionalities: stdio.h (I/O), string.h (strings), stdlib.h (conversion)'
},
{
    id: 'c_structure_049',
    topicId: 'c_structure',
    question: 'What is the difference between #include <stdio.h> and #include "myfile.h"? Explain with comments.',
    mathSolution: '< > searches system directories, " " searches current directory first',
    codeSolution: '#include <stdio.h>   // Angle brackets: For system/standard headers\n#include <stdlib.h>  // Searches in system include directories\n\nint main() {\n    printf("Demonstrating include syntax:\\n");\n    printf("#include < > : System/standard headers\\n");\n    printf("#include \" \" : User-defined headers\\n");\n    printf("Note: \" \" also works for system headers but not recommended\\n");\n    return 0;\n}',
    hint: '< > for standard library headers, " " for your own header files'
},
{
    id: 'c_structure_050',
    topicId: 'c_structure',
    question: 'Write a program that shows how #ifndef, #define, and #endif work together.',
    mathSolution: 'Conditional compilation with header guard pattern',
    codeSolution: '#include <stdio.h>\n\n#ifndef MY_HEADER\n#define MY_HEADER\n    #define GREETING "Hello from header!\\n"\n    #define PI 3.14159\n#endif\n\nint main() {\n    printf("%s", GREETING);\n    printf("PI value: %.5f\\n", PI);\n    printf("\\nHow it works:\\n");\n    printf("1. #ifndef MY_HEADER - Checks if MY_HEADER is NOT defined\\n");\n    printf("2. #define MY_HEADER - Defines it (first time only)\\n");\n    printf("3. #endif - Ends the if-block\\n");\n    return 0;\n}',
    hint: 'This pattern prevents multiple inclusions of the same code'
}
);