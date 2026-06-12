QuizData.questions.push(
  // ========== BASIC DATA TYPES (QUESTIONS 1-10) ==========
  {
    id: 'c_datatypes_001',
    topicId: 'c_datatypes',
    question: 'Declare variables of basic data types: int, float, double, and char.',
    mathSolution: 'Basic data type declarations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int integerVar = 10;\n    float floatVar = 3.14;\n    double doubleVar = 3.14159;\n    char charVar = \'A\';\n    \n    printf("int: %d\\n", integerVar);\n    printf("float: %.2f\\n", floatVar);\n    printf("double: %.5lf\\n", doubleVar);\n    printf("char: %c\\n", charVar);\n    \n    return 0;\n}',
    hint: 'Use format: data_type variable_name;'
  },
  {
    id: 'c_datatypes_002',
    topicId: 'c_datatypes',
    question: 'Initialize an int variable "age" with value 25, float "price" with 99.99, and char "grade" with "A".',
    mathSolution: 'Variable initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float price = 99.99f;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Price: %.2f\\n", price);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Use = for initialization, f suffix for float'
  },
  {
    id: 'c_datatypes_003',
    topicId: 'c_datatypes',
    question: 'Find the size of int, float, double, and char using sizeof operator.',
    mathSolution: 'Using sizeof operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Size of int: %zu bytes\\n", sizeof(int));\n    printf("Size of float: %zu bytes\\n", sizeof(float));\n    printf("Size of double: %zu bytes\\n", sizeof(double));\n    printf("Size of char: %zu byte\\n", sizeof(char));\n    \n    return 0;\n}',
    hint: 'sizeof returns size in bytes, use %zu format specifier'
  },
  {
    id: 'c_datatypes_004',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values of int type using limits.h.',
    mathSolution: 'Integer ranges from limits.h',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    printf("INT_MIN: %d\\n", INT_MIN);\n    printf("INT_MAX: %d\\n", INT_MAX);\n    \n    return 0;\n}',
    hint: 'limits.h contains constants for integer type ranges'
  },
  {
    id: 'c_datatypes_005',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between float and double precision by dividing 1 by 3.',
    mathSolution: 'Float vs Double precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0f / 3.0f;\n    double d = 1.0 / 3.0;\n    printf("float: %.15f\\n", f);\n    printf("double: %.15lf\\n", d);\n    \n    return 0;\n}',
    hint: 'double shows more decimal digits of precision'
  },
  {
    id: 'c_datatypes_006',
    topicId: 'c_datatypes',
    question: 'Use correct format specifiers to print an int, float, double, and char.',
    mathSolution: 'Format specifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 42;\n    float f = 3.14f;\n    double d = 2.718;\n    char c = \'X\';\n    printf("int: %%d = %d\\n", i);\n    printf("float: %%f = %f\\n", f);\n    printf("double: %%lf = %lf\\n", d);\n    printf("char: %%c = %c\\n", c);\n    \n    return 0;\n}',
    hint: '%d for int, %f for float, %lf for double, %c for char'
  },
  {
    id: 'c_datatypes_007',
    topicId: 'c_datatypes',
    question: 'Declare a signed int and an unsigned int, assign negative and positive values.',
    mathSolution: 'Signed vs Unsigned',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    signed int si = -100;\n    unsigned int ui = 100;\n    printf("signed: %d\\n", si);\n    printf("unsigned: %u\\n", ui);\n    \n    return 0;\n}',
    hint: 'unsigned stores only non-negative values, use %u format specifier'
  },
  {
    id: 'c_datatypes_008',
    topicId: 'c_datatypes',
    question: 'Declare short, long, and long long int variables with appropriate suffixes.',
    mathSolution: 'Integer type modifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    short int s = 1000;\n    long int l = 100000L;\n    long long int ll = 10000000000LL;\n    printf("short: %d\\n", s);\n    printf("long: %ld\\n", l);\n    printf("long long: %lld\\n", ll);\n    \n    return 0;\n}',
    hint: 'Use L suffix for long, LL for long long'
  },
  {
    id: 'c_datatypes_009',
    topicId: 'c_datatypes',
    question: 'Create a void pointer and use it to point to an integer variable.',
    mathSolution: 'Void pointer usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    void *ptr = &num;\n    printf("Value: %d\\n", *(int*)ptr);\n    \n    return 0;\n}',
    hint: 'void* is generic, must cast before dereferencing'
  },
  {
    id: 'c_datatypes_010',
    topicId: 'c_datatypes',
    question: 'Declare and use a boolean variable using stdbool.h.',
    mathSolution: 'Boolean type in C',
    codeSolution: '#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    bool isReady = true;\n    if(isReady) {\n        printf("Ready!\\n");\n    }\n    \n    return 0;\n}',
    hint: 'bool, true, false are defined in stdbool.h'
  },

  // ========== INTEGER DATA TYPES (QUESTIONS 11-20) ==========
  {
    id: 'c_datatypes_011',
    topicId: 'c_datatypes',
    question: 'Demonstrate integer overflow by adding 1 to INT_MAX.',
    mathSolution: 'Integer overflow',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int max = INT_MAX;\n    printf("MAX: %d\\n", max);\n    max = max + 1;\n    printf("MAX + 1: %d (overflow)\\n", max);\n    \n    return 0;\n}',
    hint: 'Integers wrap around when exceeding maximum value'
  },
  {
    id: 'c_datatypes_012',
    topicId: 'c_datatypes',
    question: 'Write the decimal number 42 in octal, hexadecimal, and binary representations.',
    mathSolution: 'Integer representations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int decimal = 42;\n    printf("Decimal: %d\\n", decimal);\n    printf("Octal: %o\\n", decimal);\n    printf("Hex: %x\\n", decimal);\n    \n    return 0;\n}',
    hint: 'Octal prefix: 0, Hex prefix: 0x'
  },
  {
    id: 'c_datatypes_013',
    topicId: 'c_datatypes',
    question: 'Add a char and an int, show that char is promoted to int.',
    mathSolution: 'Integer promotion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'A\';  // ASCII 65\n    int num = 10;\n    int result = ch + num;\n    printf("\'A\'(%d) + %d = %d\\n", ch, num, result);\n    \n    return 0;\n}',
    hint: 'char is promoted to int in arithmetic operations'
  },
  {
    id: 'c_datatypes_014',
    topicId: 'c_datatypes',
    question: 'Use integer suffixes to specify long, unsigned, and long long constants.',
    mathSolution: 'Integer suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    long l = 42L;\n    unsigned u = 42U;\n    long long ll = 42LL;\n    unsigned long ul = 42UL;\n    printf("long: %ld\\n", l);\n    printf("unsigned: %u\\n", u);\n    printf("long long: %lld\\n", ll);\n    printf("unsigned long: %lu\\n", ul);\n    \n    return 0;\n}',
    hint: 'L = long, U = unsigned, LL = long long, can be combined'
  },
  {
    id: 'c_datatypes_015',
    topicId: 'c_datatypes',
    question: 'Compare the sizes of int and long on your system using sizeof.',
    mathSolution: 'Int vs Long size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("int size: %zu bytes\\n", sizeof(int));\n    printf("long size: %zu bytes\\n", sizeof(long));\n    if(sizeof(int) == sizeof(long))\n        printf("Same size\\n");\n    else\n        printf("Different sizes\\n");\n    \n    return 0;\n}',
    hint: 'Sizes vary by system, long is at least as large as int'
  },
  {
    id: 'c_datatypes_016',
    topicId: 'c_datatypes',
    question: 'Use size_t for array indexing and print its size.',
    mathSolution: 'size_t data type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    for(size_t i = 0; i < 5; i++) {\n        printf("arr[%zu] = %d\\n", i, arr[i]);\n    }\n    printf("size_t size: %zu bytes\\n", sizeof(size_t));\n    \n    return 0;\n}',
    hint: 'size_t is unsigned, use %zu format specifier'
  },
  {
    id: 'c_datatypes_017',
    topicId: 'c_datatypes',
    question: 'Calculate the difference between two pointers using ptrdiff_t.',
    mathSolution: 'ptrdiff_t for pointer difference',
    codeSolution: '#include <stdio.h>\n#include <stddef.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int *p1 = &arr[0];\n    int *p2 = &arr[4];\n    ptrdiff_t diff = p2 - p1;\n    printf("Difference: %td elements\\n", diff);\n    \n    return 0;\n}',
    hint: 'ptrdiff_t is signed, use %td format specifier'
  },
  {
    id: 'c_datatypes_018',
    topicId: 'c_datatypes',
    question: 'Declare variables of fixed-width integer types: int8_t, uint16_t, int32_t.',
    mathSolution: 'Fixed-width integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nint main() {\n    int8_t i8 = 127;\n    uint16_t u16 = 65535;\n    int32_t i32 = 2147483647;\n    printf("int8_t: %d\\n", i8);\n    printf("uint16_t: %u\\n", u16);\n    printf("int32_t: %d\\n", i32);\n    \n    return 0;\n}',
    hint: 'stdint.h provides types with exact bit widths'
  },
  {
    id: 'c_datatypes_019',
    topicId: 'c_datatypes',
    question: 'Use int_least16_t and int_fast32_t types and print their sizes.',
    mathSolution: 'Least and fast integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nint main() {\n    int_least16_t least = 100;\n    int_fast32_t fast = 1000;\n    printf("int_least16_t size: %zu bytes\\n", sizeof(least));\n    printf("int_fast32_t size: %zu bytes\\n", sizeof(fast));\n    \n    return 0;\n}',
    hint: 'least = minimum size, fast = fastest type with minimum bits'
  },
  {
    id: 'c_datatypes_020',
    topicId: 'c_datatypes',
    question: 'Print the maximum values of intmax_t and uintmax_t.',
    mathSolution: 'Maximum-width integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n#include <inttypes.h>\n\nint main() {\n    intmax_t imax = INTMAX_MAX;\n    uintmax_t umax = UINTMAX_MAX;\n    printf("intmax_t max: %jd\\n", imax);\n    printf("uintmax_t max: %ju\\n", umax);\n    \n    return 0;\n}',
    hint: 'intmax_t is largest signed, uintmax_t largest unsigned'
  },

  // ========== FLOATING POINT DATA TYPES (QUESTIONS 21-30) ==========
  {
    id: 'c_datatypes_021',
    topicId: 'c_datatypes',
    question: 'Declare float, double, and long double variables with appropriate suffixes.',
    mathSolution: 'Floating point declarations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 3.14f;\n    double d = 3.14159;\n    long double ld = 3.1415926535L;\n    printf("float: %.2f\\n", f);\n    printf("double: %.5lf\\n", d);\n    printf("long double: %.10Lf\\n", ld);\n    \n    return 0;\n}',
    hint: 'f suffix for float, L for long double, no suffix for double'
  },
  {
    id: 'c_datatypes_022',
    topicId: 'c_datatypes',
    question: 'Print a number in scientific notation using %e format specifier.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double num = 12345.6789;\n    printf("%%e: %e\\n", num);\n    printf("%%E: %E\\n", num);\n    printf("%%g: %g\\n", num);\n    \n    return 0;\n}',
    hint: '%e for scientific, %g chooses shortest representation'
  },
  {
    id: 'c_datatypes_023',
    topicId: 'c_datatypes',
    question: 'Demonstrate floating point precision issues by comparing 0.1 + 0.2 with 0.3.',
    mathSolution: 'Floating point precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float sum = 0.1f + 0.2f;\n    if(sum == 0.3f)\n        printf("Equal\\n");\n    else\n        printf("Not equal: %.20f\\n", sum);\n    \n    return 0;\n}',
    hint: 'Never compare floats directly with == due to precision issues'
  },
  {
    id: 'c_datatypes_024',
    topicId: 'c_datatypes',
    question: 'Use an epsilon value to correctly compare two floating point numbers.',
    mathSolution: 'Float comparison with epsilon',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float a = 0.1f + 0.2f;\n    float b = 0.3f;\n    float epsilon = 0.000001f;\n    float diff = a - b;\n    \n    if(diff < 0) diff = -diff;\n    \n    if(diff < epsilon)\n        printf("Approximately equal\\n");\n    else\n        printf("Not equal\\n");\n    \n    return 0;\n}',
    hint: 'Compare absolute difference with a small epsilon value'
  },
  {
    id: 'c_datatypes_025',
    topicId: 'c_datatypes',
    question: 'Generate infinity and NaN by dividing by zero and zero by zero.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float infinity = 1.0f / 0.0f;\n    float notANumber = 0.0f / 0.0f;\n    \n    printf("Infinity: %f\\n", infinity);\n    printf("NaN: %f\\n", notANumber);\n    \n    return 0;\n}',
    hint: '1.0/0.0 gives infinity, 0.0/0.0 gives NaN'
  },
  {
    id: 'c_datatypes_026',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values for float using float.h.',
    mathSolution: 'Float ranges',
    codeSolution: '#include <stdio.h>\n#include <float.h>\n\nint main() {\n    printf("FLT_MIN: %e\\n", FLT_MIN);\n    printf("FLT_MAX: %e\\n", FLT_MAX);\n    printf("FLT_DIG: %d digits precision\\n", FLT_DIG);\n    \n    return 0;\n}',
    hint: 'float.h contains floating point limits'
  },
  {
    id: 'c_datatypes_027',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference in precision between float and double.',
    mathSolution: 'Float vs Double precision comparison',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0f / 3.0f;\n    double d = 1.0 / 3.0;\n    printf("float:  %.15f\\n", f);\n    printf("double: %.15lf\\n", d);\n    printf("float size: %zu, double size: %zu\\n", sizeof(f), sizeof(d));\n    \n    return 0;\n}',
    hint: 'double has more precision and larger size'
  },
  {
    id: 'c_datatypes_028',
    topicId: 'c_datatypes',
    question: 'Format floating point numbers with specific decimal places.',
    mathSolution: 'Formatting float output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Default: %f\\n", pi);\n    printf("2 decimals: %.2f\\n", pi);\n    printf("4 decimals: %.4f\\n", pi);\n    printf("10 decimals: %.10f\\n", pi);\n    \n    return 0;\n}',
    hint: 'Use %.nf where n is number of decimal places'
  },
  {
    id: 'c_datatypes_029',
    topicId: 'c_datatypes',
    question: 'Convert a double to int and observe the loss of fractional part.',
    mathSolution: 'Double to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159;\n    int intPi = (int)pi;\n    printf("double: %f\\n", pi);\n    printf("int: %d (fraction lost)\\n", intPi);\n    \n    return 0;\n}',
    hint: 'Casting to int truncates the fractional part'
  },
  {
    id: 'c_datatypes_030',
    topicId: 'c_datatypes',
    question: 'Use long double for high precision calculations.',
    mathSolution: 'Long double precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    long double pi = 3.14159265358979323846L;\n    printf("long double: %.20Lf\\n", pi);\n    printf("Size: %zu bytes\\n", sizeof(pi));\n    \n    return 0;\n}',
    hint: 'Use %Lf format specifier for long double'
  },

  // ========== CHARACTER DATA TYPES (QUESTIONS 31-40) ==========
  {
    id: 'c_datatypes_031',
    topicId: 'c_datatypes',
    question: 'Declare a char variable and print its value as character and as integer.',
    mathSolution: 'Char as character and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'A\';\n    printf("Character: %c\\n", ch);\n    printf("ASCII value: %d\\n", ch);\n    \n    return 0;\n}',
    hint: 'char is stored as integer (ASCII value)'
  },
  {
    id: 'c_datatypes_032',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between signed char and unsigned char.',
    mathSolution: 'Signed vs Unsigned char',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    signed char sc = -100;\n    unsigned char uc = 200;\n    printf("signed: %d\\n", sc);\n    printf("unsigned: %u\\n", uc);\n    \n    return 0;\n}',
    hint: 'signed char range: -128 to 127, unsigned: 0 to 255'
  },
  {
    id: 'c_datatypes_033',
    topicId: 'c_datatypes',
    question: 'Use escape sequences to print special characters.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Newline: First\\nSecond\\n");\n    printf("Tab: Before\\tAfter\\n");\n    printf("Backslash: \\\\ \\n");\n    printf("Quote: \\"Hello\\"\\n");\n    \n    return 0;\n}',
    hint: 'Common escapes: \\n, \\t, \\\\, \\", \\\''
  },
  {
    id: 'c_datatypes_034',
    topicId: 'c_datatypes',
    question: 'Print characters using their ASCII values in a loop.',
    mathSolution: 'ASCII values to characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i = 65; i <= 70; i++) {\n        printf("ASCII %d: %c\\n", i, i);\n    }\n    \n    return 0;\n}',
    hint: 'ASCII 65-70 are A, B, C, D, E, F'
  },
  {
    id: 'c_datatypes_035',
    topicId: 'c_datatypes',
    question: 'Use octal and hexadecimal escape sequences in character constants.',
    mathSolution: 'Octal and hex escapes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char octal = \'\\101\';  // Octal 101 = \'A\'\n    char hex = \'\\x42\';     // Hex 42 = \'B\'\n    printf("Octal: %c, Hex: %c\\n", octal, hex);\n    \n    return 0;\n}',
    hint: '\\ooo for octal, \\xhh for hexadecimal'
  },
  {
    id: 'c_datatypes_036',
    topicId: 'c_datatypes',
    question: 'Declare and initialize a wide character using wchar_t.',
    mathSolution: 'Wide characters',
    codeSolution: '#include <stdio.h>\n#include <wchar.h>\n#include <locale.h>\n\nint main() {\n    setlocale(LC_ALL, "");\n    wchar_t wch = L\'A\';\n    wprintf(L"Wide char: %lc\\n", wch);\n    \n    return 0;\n}',
    hint: 'Use L prefix, %lc for printing, need setlocale()'
  },
  {
    id: 'c_datatypes_037',
    topicId: 'c_datatypes',
    question: 'Convert a character to uppercase using arithmetic.',
    mathSolution: 'Char arithmetic for case conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char lower = \'a\';\n    char upper = lower - 32;  // \'a\' - 32 = \'A\'\n    printf("%c -> %c\\n", lower, upper);\n    \n    return 0;\n}',
    hint: 'ASCII: \'a\'=97, \'A\'=65, difference is 32'
  },
  {
    id: 'c_datatypes_038',
    topicId: 'c_datatypes',
    question: 'Check if a character is digit, letter, or special character.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'7\';\n    if(ch >= \'0\' && ch <= \'9\')\n        printf("Digit\\n");\n    else if((ch >= \'A\' && ch <= \'Z\') || (ch >= \'a\' && ch <= \'z\'))\n        printf("Letter\\n");\n    else\n        printf("Special\\n");\n    \n    return 0;\n}',
    hint: 'Use ASCII ranges for classification'
  },
  {
    id: 'c_datatypes_039',
    topicId: 'c_datatypes',
    question: 'Demonstrate char16_t and char32_t types from uchar.h.',
    mathSolution: 'UTF-16 and UTF-32 characters',
    codeSolution: '#include <stdio.h>\n#include <uchar.h>\n\nint main() {\n    char16_t c16 = u\'A\';\n    char32_t c32 = U\'B\';\n    printf("char16_t size: %zu\\n", sizeof(c16));\n    printf("char32_t size: %zu\\n", sizeof(c32));\n    \n    return 0;\n}',
    hint: 'Use u prefix for UTF-16, U for UTF-32'
  },
  {
    id: 'c_datatypes_040',
    topicId: 'c_datatypes',
    question: 'Create a string (character array) and print it.',
    mathSolution: 'String as char array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    char name[20] = "John";\n    printf("%s\\n", str);\n    printf("%s\\n", name);\n    \n    return 0;\n}',
    hint: 'Strings are null-terminated character arrays'
  },

  // ========== DERIVED DATA TYPES (QUESTIONS 41-50) ==========
  {
    id: 'c_datatypes_041',
    topicId: 'c_datatypes',
    question: 'Declare and initialize an integer array of size 5 and print its elements.',
    mathSolution: 'Array declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    \n    return 0;\n}',
    hint: 'Use curly braces {} for initialization'
  },
  {
    id: 'c_datatypes_042',
    topicId: 'c_datatypes',
    question: 'Declare a pointer to an integer and use it to modify the value.',
    mathSolution: 'Pointer declaration and usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr = &num;\n    *ptr = 100;\n    printf("num is now: %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Use & to get address, * to dereference'
  },
  {
    id: 'c_datatypes_043',
    topicId: 'c_datatypes',
    question: 'Define a structure for a student with name, roll number, and marks.',
    mathSolution: 'Structure definition and usage',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int rollNo;\n    float marks;\n};\n\nint main() {\n    struct Student s1 = {"John", 101, 85.5};\n    printf("Name: %s\\n", s1.name);\n    printf("Roll No: %d\\n", s1.rollNo);\n    printf("Marks: %.1f\\n", s1.marks);\n    \n    return 0;\n}',
    hint: 'Use struct keyword, members inside curly braces'
  },
  {
    id: 'c_datatypes_044',
    topicId: 'c_datatypes',
    question: 'Create a structure variable and access its members.',
    mathSolution: 'Structure variable and member access',
    codeSolution: '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    struct Point p1 = {10, 20};\n    printf("x = %d, y = %d\\n", p1.x, p1.y);\n    \n    return 0;\n}',
    hint: 'Use dot operator to access members'
  },
  {
    id: 'c_datatypes_045',
    topicId: 'c_datatypes',
    question: 'Define a union that can store either an int or a float.',
    mathSolution: 'Union definition',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("int: %d\\n", d.i);\n    d.f = 3.14;\n    printf("float: %.2f\\n", d.f);\n    \n    return 0;\n}',
    hint: 'Union members share same memory location'
  },
  {
    id: 'c_datatypes_046',
    topicId: 'c_datatypes',
    question: 'Demonstrate that union members share memory by modifying one and observing another.',
    mathSolution: 'Union memory sharing',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data data;\n    data.i = 42;\n    printf("i = %d\\n", data.i);\n    data.f = 3.14f;\n    printf("f = %f, i = %d (corrupted)\\n", data.f, data.i);\n    \n    return 0;\n}',
    hint: 'Setting one member affects others in union'
  },
  {
    id: 'c_datatypes_047',
    topicId: 'c_datatypes',
    question: 'Define an enum for weekdays (Monday to Sunday) and print values.',
    mathSolution: 'Enumeration definition and usage',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    enum Weekday today = WED;\n    printf("Wednesday value: %d\\n", today);\n    printf("Monday: %d, Tuesday: %d\\n", MON, TUE);\n    \n    return 0;\n}',
    hint: 'By default, first value is 0, increments by 1'
  },
  {
    id: 'c_datatypes_048',
    topicId: 'c_datatypes',
    question: 'Create an enum with custom values and use it.',
    mathSolution: 'Enum with custom values',
    codeSolution: '#include <stdio.h>\n\nenum Color { RED = 1, GREEN = 3, BLUE = 5 };\n\nint main() {\n    enum Color myColor = GREEN;\n    printf("Green value: %d\\n", myColor);\n    printf("Red: %d, Blue: %d\\n", RED, BLUE);\n    \n    return 0;\n}',
    hint: 'You can assign specific integer values to enum constants'
  },
  {
    id: 'c_datatypes_049',
    topicId: 'c_datatypes',
    question: 'Use typedef to create an alias for int as Integer.',
    mathSolution: 'Typedef usage',
    codeSolution: '#include <stdio.h>\n\ntypedef int Integer;\n\nint main() {\n    Integer age = 25;\n    printf("Age: %d\\n", age);\n    \n    return 0;\n}',
    hint: 'typedef creates a new name for an existing type'
  },
  {
    id: 'c_datatypes_050',
    topicId: 'c_datatypes',
    question: 'Use typedef with a structure to create a new type name.',
    mathSolution: 'Typedef with structure',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point p1 = {10, 20};\n    printf("Point: (%d, %d)\\n", p1.x, p1.y);\n    \n    return 0;\n}',
    hint: 'Allows using Point instead of struct Point'
  } 
);