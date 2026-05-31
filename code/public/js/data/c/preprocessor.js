QuizData.questions.push(
  // ========== BASIC #DEFINE MACROS (1-10) ==========
  {
    id: 'c_pre_1',
    topicId: 'c_preprocessor',
    question: 'Write a program to define PI macro and calculate circle area.',
    mathSolution: 'Area = π × r²',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Use #define for constant values'
  },
  {
    id: 'c_pre_2',
    topicId: 'c_preprocessor',
    question: 'Write a program to define SQUARE macro and use it.',
    mathSolution: 'Calculate square of number',
    codeSolution: '#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n\nint main() {\n    int num = 5;\n    printf("Square of %d = %d\\n", num, SQUARE(num));\n    return 0;\n}',
    hint: 'Always wrap parameters in parentheses'
  },
  {
    id: 'c_pre_3',
    topicId: 'c_preprocessor',
    question: 'Write a program to define MAX macro to find maximum of two numbers.',
    mathSolution: 'Return larger of two values',
    codeSolution: '#include <stdio.h>\n#define MAX(a,b) ((a) > (b) ? (a) : (b))\n\nint main() {\n    int x = 25, y = 40;\n    printf("Max of %d and %d = %d\\n", x, y, MAX(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_4',
    topicId: 'c_preprocessor',
    question: 'Write a program to define MIN macro to find minimum of two numbers.',
    mathSolution: 'Return smaller of two values',
    codeSolution: '#include <stdio.h>\n#define MIN(a,b) ((a) < (b) ? (a) : (b))\n\nint main() {\n    int x = 25, y = 40;\n    printf("Min of %d and %d = %d\\n", x, y, MIN(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_5',
    topicId: 'c_preprocessor',
    question: 'Write a program to define ABS macro for absolute value.',
    mathSolution: '|x| = x if x>=0, -x if x<0',
    codeSolution: '#include <stdio.h>\n#define ABS(x) ((x) < 0 ? -(x) : (x))\n\nint main() {\n    int num = -15;\n    printf("Absolute value of %d = %d\\n", num, ABS(num));\n    return 0;\n}',
    hint: 'Check sign and negate if negative'
  },
  {
    id: 'c_pre_6',
    topicId: 'c_preprocessor',
    question: 'Write a program to define IS_EVEN macro to check if number is even.',
    mathSolution: 'Return 1 if even, 0 if odd',
    codeSolution: '#include <stdio.h>\n#define IS_EVEN(x) ((x) % 2 == 0)\n\nint main() {\n    int num = 10;\n    if(IS_EVEN(num))\n        printf("%d is even\\n", num);\n    else\n        printf("%d is odd\\n", num);\n    return 0;\n}',
    hint: 'Check remainder when divided by 2'
  },
  {
    id: 'c_pre_7',
    topicId: 'c_preprocessor',
    question: 'Write a program to use stringizing operator # to print variable name and value.',
    mathSolution: 'Convert parameter to string',
    codeSolution: '#include <stdio.h>\n#define PRINT_VAR(x) printf(#x " = %d\\n", x)\n\nint main() {\n    int value = 42;\n    PRINT_VAR(value);\n    return 0;\n}',
    hint: '# before parameter turns it to string'
  },
  {
    id: 'c_pre_8',
    topicId: 'c_preprocessor',
    question: 'Write a program to use token pasting operator ## to create variable names.',
    mathSolution: 'Concatenate tokens to form new identifier',
    codeSolution: '#include <stdio.h>\n#define MAKE_VAR(name, num) name ## num\n\nint main() {\n    int var1 = 100;\n    int var2 = 200;\n    printf("var1 = %d, var2 = %d\\n", MAKE_VAR(var,1), MAKE_VAR(var,2));\n    return 0;\n}',
    hint: '## joins tokens together'
  },
  {
    id: 'c_pre_9',
    topicId: 'c_preprocessor',
    question: 'Write a program to use predefined macro __LINE__ to print current line number.',
    mathSolution: 'Get source line number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("This is line %d\\n", __LINE__);\n    printf("This is line %d\\n", __LINE__);\n    return 0;\n}',
    hint: '__LINE__ expands to current line number'
  },
  {
    id: 'c_pre_10',
    topicId: 'c_preprocessor',
    question: 'Write a program to use predefined macros __FILE__, __DATE__, __TIME__.',
    mathSolution: 'Print file name, compilation date and time',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("File: %s\\n", __FILE__);\n    printf("Compiled on: %s at %s\\n", __DATE__, __TIME__);\n    return 0;\n}',
    hint: '__FILE__ gives filename, __DATE__ and __TIME__ give compilation info'
  },

  // ========== CONDITIONAL COMPILATION (11-20) ==========
  {
    id: 'c_pre_11',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifdef for conditional debug printing.',
    mathSolution: 'Print debug info only if DEBUG is defined',
    codeSolution: '#include <stdio.h>\n#define DEBUG\n\nint main() {\n    #ifdef DEBUG\n        printf("Debug mode enabled\\n");\n    #endif\n    printf("Normal execution\\n");\n    return 0;\n}',
    hint: '#ifdef checks if macro is defined'
  },
  {
    id: 'c_pre_12',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifndef for conditional compilation.',
    mathSolution: 'Execute code if macro is NOT defined',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #ifndef RELEASE\n        printf("Development build\\n");\n    #endif\n    return 0;\n}',
    hint: '#ifndef executes if macro not defined'
  },
  {
    id: 'c_pre_13',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #if to check numeric condition.',
    mathSolution: 'Compile based on constant expression',
    codeSolution: '#include <stdio.h>\n#define VERSION 2\n\nint main() {\n    #if VERSION >= 2\n        printf("Version 2 or higher\\n");\n    #else\n        printf("Older version\\n");\n    #endif\n    return 0;\n}',
    hint: '#if evaluates constant expressions'
  },
  {
    id: 'c_pre_14',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #elif for multiple conditions.',
    mathSolution: 'Else-if chain in preprocessor',
    codeSolution: '#include <stdio.h>\n#define LEVEL 2\n\nint main() {\n    #if LEVEL == 1\n        printf("Level 1\\n");\n    #elif LEVEL == 2\n        printf("Level 2\\n");\n    #else\n        printf("Unknown level\\n");\n    #endif\n    return 0;\n}',
    hint: 'Chain conditions with #elif'
  },
  {
    id: 'c_pre_15',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #undef to remove macro definition.',
    mathSolution: 'Undefine and redefine macro',
    codeSolution: '#include <stdio.h>\n#define VALUE 10\n\nint main() {\n    printf("Before undef: VALUE = %d\\n", VALUE);\n    #undef VALUE\n    #define VALUE 20\n    printf("After redefinition: VALUE = %d\\n", VALUE);\n    return 0;\n}',
    hint: '#undef removes macro from symbol table'
  },
  {
    id: 'c_pre_16',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #if defined() with logical operators.',
    mathSolution: 'Check multiple macros',
    codeSolution: '#include <stdio.h>\n#define DEBUG\n#define VERBOSE\n\nint main() {\n    #if defined(DEBUG) && defined(VERBOSE)\n        printf("Debug and verbose mode\\n");\n    #elif defined(DEBUG)\n        printf("Debug mode only\\n");\n    #endif\n    return 0;\n}',
    hint: 'Use defined() operator with &&'
  },
  {
    id: 'c_pre_17',
    topicId: 'c_preprocessor',
    question: 'Write a program to detect compiler using predefined macros.',
    mathSolution: 'Identify which compiler is being used',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #if defined(__GNUC__)\n        printf("GCC compiler\\n");\n    #elif defined(_MSC_VER)\n        printf("MSVC compiler\\n");\n    #else\n        printf("Unknown compiler\\n");\n    #endif\n    return 0;\n}',
    hint: 'Different compilers define different macros'
  },
  {
    id: 'c_pre_18',
    topicId: 'c_preprocessor',
    question: 'Write a program to detect operating system using predefined macros.',
    mathSolution: 'Identify target OS',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #if defined(__linux__)\n        printf("Linux OS\\n");\n    #elif defined(_WIN32)\n        printf("Windows OS\\n");\n    #elif defined(__APPLE__)\n        printf("macOS\\n");\n    #else\n        printf("Unknown OS\\n");\n    #endif\n    return 0;\n}',
    hint: 'OS-specific predefined macros'
  },
  {
    id: 'c_pre_19',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #warning to show compile-time message.',
    mathSolution: 'Generate warning during compilation',
    codeSolution: '#include <stdio.h>\n#warning "This feature is experimental"\n\nint main() {\n    printf("Program running\\n");\n    return 0;\n}',
    hint: '#warning shows message but continues compilation'
  },
 {
    id: 'c_pre_20',
    topicId: 'c_preprocessor',
    question: 'Write a program to demonstrate conditional compilation using #ifdef and #else.',
    mathSolution: 'Conditional compilation based on macro definition',
    codeSolution: '#include <stdio.h>\n\n// Define this macro to enable feature\n// #define FEATURE_ENABLED\n\nint main() {\n    #ifdef FEATURE_ENABLED\n        printf("Feature is enabled\\n");\n    #else\n        printf("Feature is disabled\\n");\n    #endif\n    return 0;\n}',
    hint: 'Use #ifdef to conditionally compile code'
}
,
  // ========== VARIADIC MACROS (21-30) ==========
  {
    id: 'c_pre_21',
    topicId: 'c_preprocessor',
    question: 'Write a program to create variadic macro for debug printing.',
    mathSolution: 'Macro with variable arguments',
    codeSolution: '#include <stdio.h>\n#define DEBUG_PRINT(fmt, ...) printf("DEBUG: " fmt "\\n", __VA_ARGS__)\n\nint main() {\n    int x = 42;\n    DEBUG_PRINT("Value is %d", x);\n    return 0;\n}',
    hint: 'Use ... and __VA_ARGS__ for variable arguments'
  },
  {
    id: 'c_pre_22',
    topicId: 'c_preprocessor',
    question: 'Write a program to create variadic macro that works with zero arguments.',
    mathSolution: 'Handle empty variable arguments',
    codeSolution: '#include <stdio.h>\n#define LOG(fmt, ...) printf(fmt "\\n", ##__VA_ARGS__)\n\nint main() {\n    LOG("Simple message");\n    LOG("Value: %d", 100);\n    return 0;\n}',
    hint: 'GNU extension ## removes comma if __VA_ARGS__ empty'
  },
  {
    id: 'c_pre_23',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for array size calculation.',
    mathSolution: 'Number of elements in array',
    codeSolution: '#include <stdio.h>\n#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    printf("Array size = %zu\\n", ARRAY_SIZE(numbers));\n    return 0;\n}',
    hint: 'Total bytes divided by element size'
  },
  {
    id: 'c_pre_24',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for safe malloc with type casting.',
    mathSolution: 'Allocate with type checking',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#define NEW(type) (type*)malloc(sizeof(type))\n\nint main() {\n    int *p = NEW(int);\n    *p = 42;\n    printf("Value = %d\\n", *p);\n    free(p);\n    return 0;\n}',
    hint: 'Macro does sizeof on type'
  },
  {
    id: 'c_pre_25',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to swap two integers.',
    mathSolution: 'Exchange values of a and b',
    codeSolution: '#include <stdio.h>\n#define SWAP(a,b) do { int temp = a; a = b; b = temp; } while(0)\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    SWAP(x, y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
    hint: 'Use do-while(0) for multi-statement macros'
  },
  {
    id: 'c_pre_26',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for bit manipulation (set bit).',
    mathSolution: 'Set specific bit in integer',
    codeSolution: '#include <stdio.h>\n#define SET_BIT(x, b) ((x) |= (1 << (b)))\n\nint main() {\n    int flags = 0;\n    SET_BIT(flags, 3);\n    printf("Flags after setting bit 3 = %d\\n", flags);\n    return 0;\n}',
    hint: 'Set bit using OR with mask'
  },
  {
    id: 'c_pre_27',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for bit manipulation (test bit).',
    mathSolution: 'Check if bit is set',
    codeSolution: '#include <stdio.h>\n#define TEST_BIT(x, b) (((x) >> (b)) & 1)\n\nint main() {\n    int flags = 8; // binary 1000, bit 3 set\n    printf("Bit 3 is %d\\n", TEST_BIT(flags, 3));\n    printf("Bit 2 is %d\\n", TEST_BIT(flags, 2));\n    return 0;\n}',
    hint: 'Shift right and mask with 1'
  },
  {
    id: 'c_pre_28',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to check if number is power of 2.',
    mathSolution: 'Powers of 2 have exactly one bit set',
    codeSolution: '#include <stdio.h>\n#define IS_POWER_OF_2(x) ((x) && !((x) & ((x)-1)))\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5, 8, 16};\n    for(int i = 0; i < 7; i++) {\n        if(IS_POWER_OF_2(nums[i]))\n            printf("%d is power of 2\\n", nums[i]);\n    }\n    return 0;\n}',
    hint: 'x & (x-1) clears lowest set bit'
  },
  {
    id: 'c_pre_29',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to clamp value between min and max.',
    mathSolution: 'Limit value to range',
    codeSolution: '#include <stdio.h>\n#define CLAMP(x, min, max) ((x) < (min) ? (min) : ((x) > (max) ? (max) : (x)))\n\nint main() {\n    int values[] = {5, 15, 25, 35};\n    for(int i = 0; i < 4; i++) {\n        printf("Value %d clamped to 10-30 = %d\\n\", values[i], CLAMP(values[i], 10, 30));\n    }\n    return 0;\n}',
    hint: 'Use nested ternary operators'
  },
  {
    id: 'c_pre_30',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to align value up to boundary.',
    mathSolution: 'Round up to multiple of align',
    codeSolution: '#include <stdio.h>\n#define ALIGN_UP(val, align) (((val) + (align)-1) & ~((align)-1))\n\nint main() {\n    int sizes[] = {1, 5, 10, 15};\n    for(int i = 0; i < 4; i++) {\n        printf("%d aligned to 8 = %d\\n\", sizes[i], ALIGN_UP(sizes[i], 8));\n    }\n    return 0;\n}',
    hint: 'Mask off low bits after adding alignment-1'
  },

  // ========== PREDEFINED MACROS AND STRINGIFICATION (31-40) ==========
  {
    id: 'c_pre_31',
    topicId: 'c_preprocessor',
    question: 'Write a program to use __func__ predefined identifier for function name.',
    mathSolution: 'Get current function name (C99)',
    codeSolution: '#include <stdio.h>\n\nvoid myFunction() {\n    printf("Inside function: %s\\n", __func__);\n}\n\nint main() {\n    myFunction();\n    printf("Inside function: %s\\n", __func__);\n    return 0;\n}',
    hint: '__func__ expands to current function name'
  },
  {
    id: 'c_pre_32',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #pragma once for header guard simulation.',
    mathSolution: 'Prevent multiple inclusion',
    codeSolution: '#include <stdio.h>\n// #pragma once equivalent using traditional guards\n#ifndef HEADER_GUARD\n#define HEADER_GUARD\n// This code only included once\n#endif\n\nint main() {\n    printf("Header guard demonstration\\n");\n    return 0;\n}',
    hint: 'Traditional header guards prevent multiple inclusion'
  },
  {
    id: 'c_pre_33',
    topicId: 'c_preprocessor',
    question: 'Write a program to use _Static_assert for compile-time assertion (C11).',
    mathSolution: 'Check conditions at compile time',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    _Static_assert(sizeof(int) == 4, "int must be 4 bytes");\n    printf("Compile-time assertion passed\\n");\n    return 0;\n}',
    hint: '_Static_assert checks condition at compile time'
  },
  {
    id: 'c_pre_34',
    topicId: 'c_preprocessor',
    question: 'Write a program to create debug macro with file and line information.',
    mathSolution: 'Include file name and line number in debug output',
    codeSolution: '#include <stdio.h>\n#define DBG(msg) printf("Debug [%s:%d]: %s\\n", __FILE__, __LINE__, msg)\n\nint main() {\n    DBG("Program started");\n    DBG("Processing data");\n    DBG("Program ended");\n    return 0;\n}',
    hint: 'Use __FILE__ and __LINE__ macros'
  },
  {
    id: 'c_pre_35',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for min with type safety using _Generic (C11).',
    mathSolution: 'Type-generic min macro',
    codeSolution: '#include <stdio.h>\n\nint min_int(int a, int b) { return a < b ? a : b; }\nfloat min_float(float a, float b) { return a < b ? a : b; }\n#define MIN(a,b) _Generic((a), int: min_int, float: min_float)(a,b)\n\nint main() {\n    printf("Min of 10 and 20 = %d\\n\", MIN(10, 20));\n    printf(\"Min of 3.14 and 2.71 = %.2f\\n\", MIN(3.14f, 2.71f));\n    return 0;\n}',
    hint: 'C11 _Generic enables type-generic macros'
  },
  {
    id: 'c_pre_36',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #line directive to change line numbering.',
    mathSolution: 'Reset line numbers for error messages',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line before #line: %d\\n", __LINE__);\n    #line 100 "custom.c"\n    printf("Line after #line: %d\\n", __LINE__);\n    return 0;\n}',
    hint: '#line changes line number for error reporting'
  },
  {
    id: 'c_pre_37',
    topicId: 'c_preprocessor',
    question: 'Write a program to use anonymous enum as constant with #define.',
    mathSolution: 'Define constants without enum tag',
    codeSolution: '#include <stdio.h>\n\nenum { MAX_USERS = 100, BUFFER_SIZE = 1024 };\n\nint main() {\n    printf("MAX_USERS = %d\\n\", MAX_USERS);\n    printf(\"BUFFER_SIZE = %d\\n\", BUFFER_SIZE);\n    return 0;\n}',
    hint: 'Anonymous enum provides integer constants'
  },
  {
    id: 'c_pre_38',
    topicId: 'c_preprocessor',
    question: 'Write a program to use conditional compilation for platform-specific code.',
    mathSolution: 'Different code for different platforms',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #ifdef _WIN32\n        printf("Windows path: C:\\\\Users\\\\name\\n\");\n    #else\n        printf(\"Unix path: /home/name\\n\");\n    #endif\n    return 0;\n}',
    hint: 'Use platform-specific predefined macros'
  },
  {
    id: 'c_pre_39',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifdef for feature detection.',
    mathSolution: 'Enable features based on macros',
    codeSolution: '#include <stdio.h>\n#define HAVE_MATH\n\nint main() {\n    #ifdef HAVE_MATH\n        printf("Math features enabled\\n");\n    #endif\n    printf("Core features always enabled\\n");\n    return 0;\n}',
    hint: 'Check for feature macros before using them'
  },
  {
    id: 'c_pre_40',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for error logging with function name.',
    mathSolution: 'Log errors with function context',
    codeSolution: '#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n#define LOG_ERROR(msg) fprintf(stderr, "Error in %s: %s\\n", __func__, msg)\n\nvoid testFunction() {\n    LOG_ERROR("Invalid parameter");\n}\n\nint main() {\n    testFunction();\n    return 0;\n}',
    hint: 'Include function name using __func__'
  },

  // ========== ADVANCED MACRO APPLICATIONS (41-50) ==========
  {
    id: 'c_pre_41',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for assert with custom message.',
    mathSolution: 'Assert with detailed message',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#define ASSERT(cond, msg) do { if(!(cond)) { fprintf(stderr, "Assertion failed: %s (%s:%d)\\n\", msg, __FILE__, __LINE__); exit(1); } } while(0)\n\nint main() {\n    int x = 5;\n    ASSERT(x > 0, "x must be positive");\n    printf("Assertion passed\\n");\n    return 0;\n}',
    hint: 'Include file and line info in assertion'
  },
  {
    id: 'c_pre_42',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for loop unrolling simulation.',
    mathSolution: 'Repeat statement multiple times',
    codeSolution: '#include <stdio.h>\n#define UNROLL4(stmt) do { stmt; stmt; stmt; stmt; } while(0)\n\nint main() {\n    int counter = 0;\n    UNROLL4(counter++);\n    printf("Counter after unrolled loop: %d\\n", counter);\n    return 0;\n}',
    hint: 'Repeat statement four times'
  },
  {
    id: 'c_pre_43',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for compile-time warning about deprecated feature.',
    mathSolution: 'Mark code as deprecated',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define DEPRECATED __attribute__((deprecated))\n#else\n#define DEPRECATED\n#endif\n\nDEPRECATED void oldFunction() {\n    printf("This function is deprecated\\n");\n}\n\nint main() {\n    oldFunction();\n    return 0;\n}',
    hint: 'Compiler attributes for deprecation warnings'
  },
  {
    id: 'c_pre_44',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for weak symbol (allows overriding).',
    mathSolution: 'Function can be replaced by another definition',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define WEAK __attribute__((weak))\n#else\n#define WEAK\n#endif\n\nWEAK void defaultHandler() {\n    printf("Default handler\\n");\n}\n\nint main() {\n    defaultHandler();\n    return 0;\n}',
    hint: 'Weak symbols can be overridden'
  },
  {
    id: 'c_pre_45',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for packed structure (no padding).',
    mathSolution: 'Eliminate padding between structure members',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define PACKED __attribute__((packed))\n#else\n#define PACKED\n#endif\n\nstruct PACKED Data {\n    char c;\n    int i;\n};\n\nint main() {\n    printf("Size of packed struct: %zu\\n\", sizeof(struct Data));\n    return 0;\n}',
    hint: 'Prevents compiler from adding padding'
  },
  {
    id: 'c_pre_46',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for constructor (runs before main).',
    mathSolution: 'Function automatically called before main',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define CONSTRUCTOR __attribute__((constructor))\n#else\n#define CONSTRUCTOR\n#endif\n\nCONSTRUCTOR void init() {\n    printf("Initialization before main\\n");\n}\n\nint main() {\n    printf("Main function\\n");\n    return 0;\n}',
    hint: 'GCC constructor attribute'
  },
  {
    id: 'c_pre_47',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for likely/unlikely branch prediction.',
    mathSolution: 'Hint compiler about branch probability',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define likely(x)   __builtin_expect(!!(x), 1)\n#define unlikely(x) __builtin_expect(!!(x), 0)\n#else\n#define likely(x)   (x)\n#define unlikely(x) (x)\n#endif\n\nint main() {\n    int error = 0;\n    if(unlikely(error)) {\n        printf("Error handler (unlikely path)\\n\");\n    } else {\n        printf(\"Normal path (likely)\\n\");\n    }\n    return 0;\n}',
    hint: 'GCC __builtin_expect for optimization'
  },
  {
    id: 'c_pre_48',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for attribute unused to suppress warnings.',
    mathSolution: 'Mark parameter as intentionally unused',
    codeSolution: '#include <stdio.h>\n#ifdef __GNUC__\n#define UNUSED __attribute__((unused))\n#else\n#define UNUSED\n#endif\n\nvoid func(int UNUSED param) {\n    printf("Parameter not used intentionally\\n\");\n}\n\nint main() {\n    func(42);\n    return 0;\n}',
    hint: 'Silences unused parameter warnings'
  },
  {
    id: 'c_pre_49',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for container_of (get struct from member).',
    mathSolution: 'Compute structure address from member pointer',
    codeSolution: '#include <stdio.h>\n#include <stddef.h>\n#define container_of(ptr, type, member) ((type *)((char *)(ptr) - offsetof(type, member)))\n\ntypedef struct {\n    int a;\n    int b;\n} MyStruct;\n\nint main() {\n    MyStruct s = {10, 20};\n    int *ptr = &s.b;\n    MyStruct *recovered = container_of(ptr, MyStruct, b);\n    printf("Recovered struct a = %d\\n\", recovered->a);\n    return 0;\n}',
    hint: 'Subtract member offset from pointer'
  },
  {
    id: 'c_pre_50',
    topicId: 'c_preprocessor',
    question: 'Write a program to create X-macro pattern for enum and string array.',
    mathSolution: 'Define list once, use multiple times',
    codeSolution: '#include <stdio.h>\n\n#define COLORS \\\n    X(RED) \\\n    X(GREEN) \\\n    X(BLUE)\n\n#define X(name) name,\nenum Color { COLORS };\n#undef X\n\n#define X(name) #name,\nconst char *colorNames[] = { COLORS };\n#undef X\n\nint main() {\n    for(int i = 0; i < 3; i++) {\n        printf("Color %d = %s\\n\", i, colorNames[i]);\n    }\n    return 0;\n}',
    hint: 'X-macros generate enum and strings from same list'
  }
);