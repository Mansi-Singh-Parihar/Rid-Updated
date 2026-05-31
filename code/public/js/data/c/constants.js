QuizData.questions.push(
  // ========== CONST KEYWORD BASICS (1-10) ==========
  {
    id: 'c_constants_001',
    topicId: 'c_constants',
    question: 'Declare and print a constant integer variable named MAX_VALUE with value 100.',
    mathSolution: 'const integer declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int MAX_VALUE = 100;\n    printf("MAX_VALUE = %d\\n", MAX_VALUE);\n    return 0;\n}',
    hint: 'Use const keyword before data type'
  },
  {
    id: 'c_constants_002',
    topicId: 'c_constants',
    question: 'Declare and print a constant float variable named PI with value 3.14159.',
    mathSolution: 'const float declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const float PI = 3.14159f;\n    printf("PI = %.5f\\n", PI);\n    return 0;\n}',
    hint: 'Add f suffix for float'
  },
  {
    id: 'c_constants_003',
    topicId: 'c_constants',
    question: 'Declare and print a constant double variable named GRAVITY with value 9.81.',
    mathSolution: 'const double declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const double GRAVITY = 9.81;\n    printf("GRAVITY = %.2f m/s²\\n", GRAVITY);\n    return 0;\n}',
    hint: 'Double is default for floating point'
  },
  {
    id: 'c_constants_004',
    topicId: 'c_constants',
    question: 'Declare and print a constant character variable named GRADE with value \'A\'.',
    mathSolution: 'const char declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char GRADE = \'A\';\n    printf("GRADE = %c\\n", GRADE);\n    return 0;\n}',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_005',
    topicId: 'c_constants',
    question: 'Declare and print a constant string using const char* with value "Hello".',
    mathSolution: 'const string declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char* MESSAGE = "Hello";\n    printf("MESSAGE = %s\\n", MESSAGE);\n    return 0;\n}',
    hint: 'String literals are const by convention'
  },
  {
    id: 'c_constants_006',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to an integer and print the value.',
    mathSolution: 'const pointer declaration and usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int* const ptr = &x;\n    printf("Value through const pointer: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'const after * means pointer is constant'
  },
  {
    id: 'c_constants_007',
    topicId: 'c_constants',
    question: 'Declare a pointer to a constant integer and print the value.',
    mathSolution: 'pointer to const data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    const int* ptr = &x;\n    printf("Value through pointer to const: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'const before * means data is constant'
  },
  {
    id: 'c_constants_008',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to a constant integer and print the value.',
    mathSolution: 'const pointer to const data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    const int* const ptr = &x;\n    printf("Value: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Both pointer and data are constant'
  },
  {
    id: 'c_constants_009',
    topicId: 'c_constants',
    question: 'Declare a constant array of integers and print its elements.',
    mathSolution: 'const array declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int numbers[] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Array elements cannot be modified'
  },
  {
    id: 'c_constants_010',
    topicId: 'c_constants',
    question: 'Write a function that uses const parameter to prevent array modification.',
    mathSolution: 'const function parameter',
    codeSolution: '#include <stdio.h>\n\nvoid printArray(const int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    printArray(nums, 5);\n    return 0;\n}',
    hint: 'Use const to protect read-only parameters'
  },

  // ========== #DEFINE CONSTANTS (11-20) ==========
  {
    id: 'c_constants_011',
    topicId: 'c_constants',
    question: 'Define a macro named MAX_STUDENTS with value 100 and print it.',
    mathSolution: '#define integer constant and printing',
    codeSolution: '#include <stdio.h>\n#define MAX_STUDENTS 100\n\nint main() {\n    printf("MAX_STUDENTS = %d\\n", MAX_STUDENTS);\n    return 0;\n}',
    hint: 'No equals sign or semicolon'
  },
  {
    id: 'c_constants_012',
    topicId: 'c_constants',
    question: 'Define a macro named PI with value 3.14159 and calculate area of circle.',
    mathSolution: '#define float constant usage',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle with radius %.1f = %.2f\\n", radius, area);\n    return 0;\n}',
    hint: 'Preprocessor does simple text replacement'
  },
  {
    id: 'c_constants_013',
    topicId: 'c_constants',
    question: 'Define a macro named GRADE with value \'A\' and print it.',
    mathSolution: '#define character constant',
    codeSolution: '#include <stdio.h>\n#define GRADE \'A\'\n\nint main() {\n    printf("GRADE = %c\\n", GRADE);\n    return 0;\n}',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_014',
    topicId: 'c_constants',
    question: 'Define a macro named GREETING with "Hello" and print it.',
    mathSolution: '#define string constant',
    codeSolution: '#include <stdio.h>\n#define GREETING "Hello"\n\nint main() {\n    printf("GREETING = %s\\n", GREETING);\n    return 0;\n}',
    hint: 'String constants use double quotes'
  },
  {
    id: 'c_constants_015',
    topicId: 'c_constants',
    question: 'Create a macro SQUARE that squares a number and demonstrate it.',
    mathSolution: '#define macro function',
    codeSolution: '#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n\nint main() {\n    int num = 5;\n    printf("Square of %d = %d\\n", num, SQUARE(num));\n    return 0;\n}',
    hint: 'Use parentheses to avoid precedence issues'
  },
  {
    id: 'c_constants_016',
    topicId: 'c_constants',
    question: 'Create a macro MAX that returns maximum of two values and test it.',
    mathSolution: '#define conditional macro',
    codeSolution: '#include <stdio.h>\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\nint main() {\n    int x = 10, y = 20;\n    printf("Max of %d and %d = %d\\n", x, y, MAX(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator for condition'
  },
  {
    id: 'c_constants_017',
    topicId: 'c_constants',
    question: 'Use #undef to undefine a macro and demonstrate.',
    mathSolution: '#undef directive',
    codeSolution: '#include <stdio.h>\n#define TEMP 100\n\nint main() {\n    printf("TEMP = %d\\n", TEMP);\n    #undef TEMP\n    #ifndef TEMP\n        printf("TEMP is undefined after #undef\\n");\n    #endif\n    return 0;\n}',
    hint: '#undef removes macro definition'
  },
  {
    id: 'c_constants_018',
    topicId: 'c_constants',
    question: 'Create a multi-line macro that prints two lines.',
    mathSolution: 'Multi-line #define',
    codeSolution: '#include <stdio.h>\n#define PRINT_BOX \\\n    printf("********\\n\"); \\\n    printf("*  Hello *\\n\"); \\\n    printf("********\\n\")\n\nint main() {\n    PRINT_BOX;\n    return 0;\n}',
    hint: 'Use backslash at end of each line except last'
  },
  {
    id: 'c_constants_019',
    topicId: 'c_constants',
    question: 'Define an array size using #define and create an array.',
    mathSolution: '#define for array size',
    codeSolution: '#include <stdio.h>\n#define ARRAY_SIZE 5\n\nint main() {\n    int numbers[ARRAY_SIZE] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < ARRAY_SIZE; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Makes code more maintainable'
  },
  {
    id: 'c_constants_020',
    topicId: 'c_constants',
    question: 'Create a macro IS_EVEN that checks if number is even and test it.',
    mathSolution: '#define conditional',
    codeSolution: '#include <stdio.h>\n#define IS_EVEN(x) ((x) % 2 == 0)\n\nint main() {\n    int num = 10;\n    printf("%d is %s\\n", num, IS_EVEN(num) ? "even" : "odd");\n    return 0;\n}',
    hint: 'Use modulo operator'
  },

  // ========== ENUM CONSTANTS (21-30) ==========
  {
    id: 'c_constants_021',
    topicId: 'c_constants',
    question: 'Declare an enum for weekdays and print values.',
    mathSolution: 'enum declaration and printing',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    printf("MON = %d, TUE = %d, WED = %d\\n", MON, TUE, WED);\n    printf("THU = %d, FRI = %d, SAT = %d, SUN = %d\\n", THU, FRI, SAT, SUN);\n    return 0;\n}',
    hint: 'Values start at 0 by default'
  },
  {
    id: 'c_constants_022',
    topicId: 'c_constants',
    question: 'Declare an enum for colors with custom values and print them.',
    mathSolution: 'enum with custom values',
    codeSolution: '#include <stdio.h>\n\nenum Color { RED = 1, GREEN = 2, BLUE = 4 };\n\nint main() {\n    printf("RED = %d, GREEN = %d, BLUE = %d\\n", RED, GREEN, BLUE);\n    return 0;\n}',
    hint: 'Assign specific integer values'
  },
  {
    id: 'c_constants_023',
    topicId: 'c_constants',
    question: 'Declare an enum for boolean values and demonstrate usage.',
    mathSolution: 'enum for boolean',
    codeSolution: '#include <stdio.h>\n\nenum Boolean { FALSE, TRUE };\n\nint main() {\n    enum Boolean isReady = TRUE;\n    if(isReady == TRUE) {\n        printf("Ready!\\n");\n    }\n    return 0;\n}',
    hint: 'FALSE is 0, TRUE is 1 automatically'
  },
  {
    id: 'c_constants_024',
    topicId: 'c_constants',
    question: 'Use enum in a switch statement for menu options.',
    mathSolution: 'enum with switch',
    codeSolution: '#include <stdio.h>\n\nenum Menu { EXIT, ADD, DELETE };\n\nint main() {\n    enum Menu choice = ADD;\n    switch(choice) {\n        case ADD:\n            printf("Add selected\\n");\n            break;\n        case DELETE:\n            printf("Delete selected\\n");\n            break;\n        case EXIT:\n            printf("Exit selected\\n");\n            break;\n    }\n    return 0;\n}',
    hint: 'Enum makes cases readable'
  },
  {
    id: 'c_constants_025',
    topicId: 'c_constants',
    question: 'Create enum for bit flags and combine them.',
    mathSolution: 'enum for bit flags',
    codeSolution: '#include <stdio.h>\n\nenum Permissions {\n    READ = 1 << 0,\n    WRITE = 1 << 1,\n    EXEC = 1 << 2\n};\n\nint main() {\n    int perm = READ | WRITE;\n    printf("Permissions: READ | WRITE = %d\\n", perm);\n    return 0;\n}',
    hint: 'Use powers of 2 for bitwise operations'
  },
  {
    id: 'c_constants_026',
    topicId: 'c_constants',
    question: 'Use typedef with enum to create a type named Status.',
    mathSolution: 'typedef enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS, FAILURE } Status;\n\nint main() {\n    Status result = SUCCESS;\n    printf("Status = %d (SUCCESS)\\n", result);\n    return 0;\n}',
    hint: 'Allows using Status without enum keyword'
  },
  {
    id: 'c_constants_027',
    topicId: 'c_constants',
    question: 'Create enum for error codes and print them.',
    mathSolution: 'enum for error codes',
    codeSolution: '#include <stdio.h>\n\nenum ErrorCode { SUCCESS = 0, NOT_FOUND = -1, ERROR = -2 };\n\nint main() {\n    printf("SUCCESS = %d, NOT_FOUND = %d, ERROR = %d\\n", SUCCESS, NOT_FOUND, ERROR);\n    return 0;\n}',
    hint: 'Error codes can be negative'
  },
  {
    id: 'c_constants_028',
    topicId: 'c_constants',
    question: 'Create enum for months with auto-increment from JAN=1.',
    mathSolution: 'enum with auto-increment',
    codeSolution: '#include <stdio.h>\n\nenum Month { JAN = 1, FEB, MAR, APR, MAY, JUN };\n\nint main() {\n    printf("JAN = %d, FEB = %d, MAR = %d\\n", JAN, FEB, MAR);\n    return 0;\n}',
    hint: 'FEB becomes 2, MAR becomes 3, etc.'
  },
  {
    id: 'c_constants_029',
    topicId: 'c_constants',
    question: 'Declare an enum variable and assign a value.',
    mathSolution: 'enum variable declaration',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    enum Weekday today = WED;\n    printf("Today = %d (Wednesday)\\n", today);\n    return 0;\n}',
    hint: 'Use enum type and constant'
  },
  {
    id: 'c_constants_030',
    topicId: 'c_constants',
    question: 'Create enum for state machine states and demonstrate.',
    mathSolution: 'enum for state machine',
    codeSolution: '#include <stdio.h>\n\nenum State { STATE_IDLE, STATE_RUNNING, STATE_STOPPED };\n\nint main() {\n    enum State current = STATE_RUNNING;\n    printf("Current state = %d (RUNNING)\\n", current);\n    return 0;\n}',
    hint: 'Use prefix to avoid name conflicts'
  },

  // ========== INTEGER & FLOATING POINT CONSTANTS (31-40) ==========
  {
    id: 'c_constants_031',
    topicId: 'c_constants',
    question: 'Write decimal, octal, and hexadecimal representations of number 42.',
    mathSolution: 'Different integer bases',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int decimal = 42;\n    printf("Decimal: %d\\n", decimal);\n    printf("Octal: %o\\n", decimal);\n    printf("Hexadecimal: %x\\n", decimal);\n    return 0;\n}',
    hint: 'Octal starts with 0, hex with 0x'
  },
  {
    id: 'c_constants_032',
    topicId: 'c_constants',
    question: 'Write integer constants with U, L, and LL suffixes.',
    mathSolution: 'Integer suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int u = 100U;\n    long int l = 100L;\n    long long ll = 100LL;\n    printf("unsigned: %u, long: %ld, long long: %lld\\n", u, l, ll);\n    return 0;\n}',
    hint: 'U=unsigned, L=long, LL=long long'
  },
  {
    id: 'c_constants_033',
    topicId: 'c_constants',
    question: 'Write and print the maximum value for a 32-bit signed integer.',
    mathSolution: 'INT_MAX constant',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    printf("INT_MAX = %d\\n", INT_MAX);\n    return 0;\n}',
    hint: '2^31 - 1 = 2147483647'
  },
  {
    id: 'c_constants_034',
    topicId: 'c_constants',
    question: 'Write character constants for \'A\', newline, and tab and print them.',
    mathSolution: 'Character constants',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char a = \'A\';\n    char nl = \'\\n\';\n    char tab = \'\\t\';\n    printf("Character: %c%cTab before text\\n", a, tab);\n    return 0;\n}',
    hint: 'Escape sequences start with \\'
  },
  {
    id: 'c_constants_035',
    topicId: 'c_constants',
    question: 'Write floating point constants in different forms.',
    mathSolution: 'Float constant forms',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 3.14f;\n    double d = 3.14;\n    double exp = 3.14e0;\n    printf("float: %f, double: %f, exp: %f\\n", f, d, exp);\n    return 0;\n}',
    hint: 'f suffix for float, e for exponent'
  },
  {
    id: 'c_constants_036',
    topicId: 'c_constants',
    question: 'Write scientific notation for 12300 and 0.000123.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double big = 1.23e4;\n    double small = 1.23e-4;\n    printf("1.23e4 = %f\\n", big);\n    printf("1.23e-4 = %f\\n", small);\n    return 0;\n}',
    hint: 'e4 = ×10^4, e-4 = ×10^-4'
  },
  {
    id: 'c_constants_037',
    topicId: 'c_constants',
    question: 'Write float, double, and long double constants for PI.',
    mathSolution: 'Float suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float pi_f = 3.14159f;\n    double pi_d = 3.14159;\n    long double pi_ld = 3.14159L;\n    printf("float: %.5f\\n", pi_f);\n    printf("double: %.5lf\\n", pi_d);\n    return 0;\n}',
    hint: 'f for float, L for long double'
  },
  {
    id: 'c_constants_038',
    topicId: 'c_constants',
    question: 'Print a number in scientific notation using %e format.',
    mathSolution: 'Scientific notation printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double num = 12345.6789;\n    printf("%%e: %e\\n", num);\n    printf("%%E: %E\\n", num);\n    printf("%%g: %g\\n", num);\n    return 0;\n}',
    hint: '%e for scientific, %g chooses shortest representation'
  },
  {
    id: 'c_constants_039',
    topicId: 'c_constants',
    question: 'Print formatted floating point numbers with specific decimal places.',
    mathSolution: 'Formatting float output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Default: %f\\n", pi);\n    printf("2 decimals: %.2f\\n", pi);\n    printf("4 decimals: %.4f\\n", pi);\n    return 0;\n}',
    hint: 'Use %.nf where n is number of decimal places'
  },
  {
    id: 'c_constants_040',
    topicId: 'c_constants',
    question: 'Demonstrate infinity and NaN using floating point constants.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float inf = 1.0f / 0.0f;\n    float nan = 0.0f / 0.0f;\n    printf("Infinity: %f\\n", inf);\n    printf("NaN: %f\\n", nan);\n    return 0;\n}',
    hint: '1.0/0.0 gives infinity, 0.0/0.0 gives NaN'
  },

  // ========== STRING CONSTANTS & COMPARISONS (41-50) ==========
  {
    id: 'c_constants_041',
    topicId: 'c_constants',
    question: 'Create and print string constants using char array and char pointer.',
    mathSolution: 'String constants',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char *str2 = "World";\n    printf("str1 = %s, str2 = %s\\n", str1, str2);\n    return 0;\n}',
    hint: 'Array is modifiable, pointer points to constant'
  },
  {
    id: 'c_constants_042',
    topicId: 'c_constants',
    question: 'Use string constant concatenation to create "Hello World".',
    mathSolution: 'String concatenation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *msg = "Hello " "World";\n    printf("%s\\n", msg);\n    return 0;\n}',
    hint: 'Adjacent strings are concatenated'
  },
  {
    id: 'c_constants_043',
    topicId: 'c_constants',
    question: 'Create string with escape sequences for newline, tab, and quote.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Line1\\nLine2\\tQuote: \\"Hello\\"";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: '\\n newline, \\t tab, \\" quote'
  },
{
    id: 'c_constants_044',
    topicId: 'c_constants',
    question: 'Compare #define and const by creating an array size constant.',
    mathSolution: '#define vs const for array size',
    codeSolution: '#include <stdio.h>\n#define SIZE 5\n\nint main() {\n    const int size = 5;\n    int arr[SIZE] = {10, 20, 30, 40, 50};\n    \n    printf("#define SIZE = %d\\n", SIZE);\n    printf("const int size = %d\\n\\n", size);\n    printf("Array created using #define:\\n");\n    \n    for(int i = 0; i < SIZE; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    \n    printf("\\nKey differences:\\n");\n    printf("- #define: Preprocessor macro, no memory allocated\\n");\n    printf("- const: Read-only variable, memory allocated\\n\");\n    printf("- #define works for array sizes in all C standards\\n\");\n    printf(\"- const cannot be used for standard array sizes (needs VLA or malloc)\\n\");\n    \n    return 0;\n}',
    hint: '#define works for array sizes in all C standards, const requires VLA or malloc'
},
  {
    id: 'c_constants_045',
    topicId: 'c_constants',
    question: 'Replace magic number 3.14159 with a named constant PI.',
    mathSolution: 'Named constant vs magic number',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Named constants improve readability'
  },
  {
    id: 'c_constants_046',
    topicId: 'c_constants',
    question: 'Use const in function parameter to prevent modification.',
    mathSolution: 'Const correctness',
    codeSolution: '#include <stdio.h>\n\nvoid printValue(const int *ptr) {\n    printf("Value = %d\\n", *ptr);\n    // *ptr = 10; // Would cause error\n}\n\nint main() {\n    int num = 42;\n    printValue(&num);\n    return 0;\n}',
    hint: 'Const protects read-only parameters'
  },
  {
    id: 'c_constants_047',
    topicId: 'c_constants',
    question: 'Create a constant expression for array size using sizeof.',
    mathSolution: 'Constant expression',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[100];\n    int size = sizeof(arr) / sizeof(arr[0]);\n    printf("Array size = %d\\n", size);\n    return 0;\n}',
    hint: 'sizeof is compile-time constant'
  },
  {
    id: 'c_constants_048',
    topicId: 'c_constants',
    question: 'Use const for global configuration values.',
    mathSolution: 'Global constants',
    codeSolution: '#include <stdio.h>\n\nconst int MAX_USERS = 1000;\nconst char* APP_NAME = "MyApp";\n\nint main() {\n    printf("App: %s, Max Users: %d\\n", APP_NAME, MAX_USERS);\n    return 0;\n}',
    hint: 'Global constants are safer than macros for type checking'
  },
  {
    id: 'c_constants_049',
    topicId: 'c_constants',
    question: 'Create configuration constants for an application.',
    mathSolution: 'App configuration',
    codeSolution: '#include <stdio.h>\n#define APP_NAME "DataProcessor"\n#define APP_VERSION "1.0.0"\n#define MAX_USERS 1000\n\nint main() {\n    printf("%s v%s\\n", APP_NAME, APP_VERSION);\n    printf("Max Users: %d\\n", MAX_USERS);\n    return 0;\n}',
    hint: 'Centralized configuration'
  },
  {
    id: 'c_constants_050',
    topicId: 'c_constants',
    question: 'Create constants for mathematical formulas and use them.',
    mathSolution: 'Math formulas',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n#define CIRCLE_AREA(r) (PI * (r) * (r))\n#define CIRCLE_CIRCUMFERENCE(r) (2 * PI * (r))\n\nint main() {\n    float r = 5.0;\n    printf("Radius = %.1f\\n", r);\n    printf("Area = %.2f\\n", CIRCLE_AREA(r));\n    printf("Circumference = %.2f\\n", CIRCLE_CIRCUMFERENCE(r));\n    return 0;\n}',
    hint: 'Formulas as macros'
  }
);