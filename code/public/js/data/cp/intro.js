// C INTRODUCTION TOPIC - 50 QUESTIONS
// This file must be loaded after 00-init.js and 02-topics.js

(function() {
    // Check if QuizData exists
    if (typeof QuizData === 'undefined') {
        console.error('QuizData not defined! Make sure 00-init.js is loaded first.');
        return;
    }

    // Questions for C Introduction topic
    QuizData.questions.push(
        {
            id: 'c_intro_1',
            topicId: 'c_intro',
            question: 'What is C programming language?',
            mathSolution: 'C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C is a middle-level language");\n    return 0;\n}',
            hint: 'Developed at Bell Labs in 1972'
        },
        {
            id: 'c_intro_2',
            topicId: 'c_intro',
            question: 'Who developed C language?',
            mathSolution: 'Dennis Ritchie developed C language in 1972 at Bell Labs.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Dennis Ritchie");\n    return 0;\n}',
            hint: 'American computer scientist at Bell Labs'
        },
        {
            id: 'c_intro_3',
            topicId: 'c_intro',
            question: 'What are key features of C?',
            mathSolution: 'Simple, Portable, Fast, Pointers, Structured Language',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Features: Simple, Portable, Fast, Pointers");\n    return 0;\n}',
            hint: 'List important features'
        },
        {
            id: 'c_intro_4',
            topicId: 'c_intro',
            question: 'Why is C called middle-level language?',
            mathSolution: 'C combines high-level and low-level language features.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C has high-level functions and low-level pointers");\n    return 0;\n}',
            hint: 'Both high and low level features'
        },
        {
            id: 'c_intro_5',
            topicId: 'c_intro',
            question: 'What are advantages of C?',
            mathSolution: 'Fast, Portable, Modular, Rich Library',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Advantages: Fast, Portable, Modular, Rich Library");\n    return 0;\n}',
            hint: 'Mention at least 4 advantages'
        },
        {
            id: 'c_intro_6',
            topicId: 'c_intro',
            question: 'What are applications of C?',
            mathSolution: 'OS, Embedded Systems, Compilers, Databases',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Applications: OS, Embedded, Compilers, Databases");\n    return 0;\n}',
            hint: 'Where performance matters'
        },
        {
            id: 'c_intro_7',
            topicId: 'c_intro',
            question: 'Is C case-sensitive? Give example.',
            mathSolution: 'Yes, C is case-sensitive. "count" and "Count" are different.',
            codeSolution: '#include <stdio.h>\nint main() {\n    int count=10, Count=20;\n    printf("count=%d Count=%d", count, Count);\n    return 0;\n}',
            hint: 'Uppercase and lowercase are different'
        },
        {
            id: 'c_intro_8',
            topicId: 'c_intro',
            question: 'What is a compiler? Name some C compilers.',
            mathSolution: 'Compiler converts C code to machine code. GCC, Clang, Turbo C',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compilers: GCC, Clang, Turbo C, MSVC");\n    return 0;\n}',
            hint: 'GCC is most popular'
        },
        {
            id: 'c_intro_9',
            topicId: 'c_intro',
            question: 'What is an IDE? Name some for C.',
            mathSolution: 'IDE is Integrated Development Environment. Code::Blocks, VS Code, Dev-C++',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("IDEs: Code::Blocks, VS Code, Dev-C++, CLion");\n    return 0;\n}',
            hint: 'Editor + Compiler + Debugger'
        },
        {
            id: 'c_intro_10',
            topicId: 'c_intro',
            question: 'What is extension of C source file?',
            mathSolution: 'Source: .c, Executable: .exe or .out',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Source: .c, Executable: .exe or .out");\n    return 0;\n}',
            hint: 'C files end with .c'
        },
        {
            id: 'c_intro_11',
            topicId: 'c_intro',
            question: 'What is use of #include <stdio.h>?',
            mathSolution: 'Includes standard I/O library for printf, scanf',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("#include <stdio.h> provides printf and scanf");\n    return 0;\n}',
            hint: 'For input/output functions'
        },
        {
            id: 'c_intro_12',
            topicId: 'c_intro',
            question: 'What is main() function?',
            mathSolution: 'main() is entry point where program execution begins',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("main() is program entry point");\n    return 0;\n}',
            hint: 'Program starts here'
        },
        {
            id: 'c_intro_13',
            topicId: 'c_intro',
            question: 'What does return 0 mean?',
            mathSolution: 'return 0 indicates successful execution to OS',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("return 0 means success");\n    return 0;\n}',
            hint: 'Tells OS program ran fine'
        },
        {
            id: 'c_intro_14',
            topicId: 'c_intro',
            question: 'What are tokens in C?',
            mathSolution: 'Smallest units: Keywords, Identifiers, Constants, Strings, Operators, Symbols',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Tokens: Keywords, Identifiers, Constants, Operators");\n    return 0;\n}',
            hint: '6 types of tokens'
        },
        {
            id: 'c_intro_15',
            topicId: 'c_intro',
            question: 'What are keywords? Give examples.',
            mathSolution: 'Reserved words: int, char, if, else, for, while',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Keywords: int, char, if, else, for, while, return");\n    return 0;\n}',
            hint: 'Cannot use as variable names'
        },
        {
            id: 'c_intro_16',
            topicId: 'c_intro',
            question: 'What are identifiers? Rules for naming?',
            mathSolution: 'Names for variables/functions. Letters, digits, underscore; no digit start',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Valid: age, _salary, num1. Invalid: 123abc");\n    return 0;\n}',
            hint: 'Only letters, digits, underscore'
        },
        {
            id: 'c_intro_17',
            topicId: 'c_intro',
            question: 'What is whitespace in C?',
            mathSolution: 'Spaces, tabs, newlines - improves readability',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Whitespace: spaces, tabs, newlines");\n    return 0;\n}',
            hint: 'Ignored by compiler'
        },
        {
            id: 'c_intro_18',
            topicId: 'c_intro',
            question: 'What are comments? Write syntax.',
            mathSolution: '// for single line, /* */ for multi-line',
            codeSolution: '#include <stdio.h>\nint main() {\n    // Single line comment\n    printf("Comments: // and /* */");\n    return 0;\n}',
            hint: 'Make code readable'
        },
        {
            id: 'c_intro_19',
            topicId: 'c_intro',
            question: 'What is purpose of semicolon?',
            mathSolution: 'Semicolon terminates statements in C',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Semicolon ends every statement");\n    return 0;\n}',
            hint: 'Every statement ends with ;'
        },
        {
            id: 'c_intro_20',
            topicId: 'c_intro',
            question: 'What are header files? Examples?',
            mathSolution: 'Contain function declarations. stdio.h, math.h, string.h',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Headers: stdio.h, math.h, string.h, stdlib.h");\n    return 0;\n}',
            hint: 'Provide reusable functions'
        },
        {
            id: 'c_intro_21',
            topicId: 'c_intro',
            question: 'Difference between #include and #define?',
            mathSolution: '#include inserts files, #define creates macros',
            codeSolution: '#include <stdio.h>\n#define MSG "Macro"\nint main() {\n    printf("#include inserts, #define creates macros");\n    return 0;\n}',
            hint: 'Both are preprocessor directives'
        },
        {
            id: 'c_intro_22',
            topicId: 'c_intro',
            question: 'What are escape sequences? Examples?',
            mathSolution: '\\n newline, \\t tab, \\\\ backslash',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Escape: \\n newline, \\t tab, \\\\ backslash");\n    return 0;\n}',
            hint: 'Start with backslash'
        },
        {
            id: 'c_intro_23',
            topicId: 'c_intro',
            question: 'Difference between compilation and execution?',
            mathSolution: 'Compilation converts to machine code, execution runs it',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compilation: code to machine code, Execution: runs it");\n    return 0;\n}',
            hint: 'Compile once, execute many times'
        },
        {
            id: 'c_intro_24',
            topicId: 'c_intro',
            question: 'Difference between syntax and semantics?',
            mathSolution: 'Syntax is grammar, semantics is meaning',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Syntax: rules, Semantics: meaning");\n    return 0;\n}',
            hint: 'Syntax = how, Semantics = what'
        },
        {
            id: 'c_intro_25',
            topicId: 'c_intro',
            question: 'What is ASCII? Why important?',
            mathSolution: 'ASCII maps characters to numbers (0-127)',
            codeSolution: '#include <stdio.h>\nint main() {\n    char ch = 65;\n    printf("ASCII: A = %c = %d", ch, ch);\n    return 0;\n}',
            hint: 'Characters stored as numbers'
        },
        {
            id: 'c_intro_26',
            topicId: 'c_intro',
            question: 'Why is C portable?',
            mathSolution: 'Same code runs on different platforms with compilers',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C is portable - compilers exist for all platforms");\n    return 0;\n}',
            hint: 'Write once, compile anywhere'
        },
        {
            id: 'c_intro_27',
            topicId: 'c_intro',
            question: 'What are basic data types?',
            mathSolution: 'int, char, float, double, void',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Data types: int, char, float, double, void");\n    return 0;\n}',
            hint: '5 basic data types'
        },
        {
            id: 'c_intro_28',
            topicId: 'c_intro',
            question: 'What are format specifiers?',
            mathSolution: '%d int, %f float, %c char, %s string',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("%%d=int, %%f=float, %%c=char, %%s=string");\n    return 0;\n}',
            hint: 'Used in printf and scanf'
        },
        {
            id: 'c_intro_29',
            topicId: 'c_intro',
            question: 'Difference between declaration and definition?',
            mathSolution: 'Declaration tells compiler, definition allocates memory',
            codeSolution: '#include <stdio.h>\nextern int x;\nint x=10;\nint main() {\n    printf("Declaration: tells, Definition: allocates");\n    return 0;\n}',
            hint: 'Definition = declaration + memory'
        },
        {
            id: 'c_intro_30',
            topicId: 'c_intro',
            question: 'Difference between = and ==?',
            mathSolution: '= assignment, == comparison',
            codeSolution: '#include <stdio.h>\nint main() {\n    int a=5,b=5;\n    if(a==b) printf("= assigns, == compares");\n    return 0;\n}',
            hint: 'Common mistake in conditions'
        },
        {
            id: 'c_intro_31',
            topicId: 'c_intro',
            question: 'Steps to write and execute C program?',
            mathSolution: 'Edit → Save → Compile → Link → Execute',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Steps: Edit, Save, Compile, Link, Execute");\n    return 0;\n}',
            hint: '5 main steps'
        },
        {
            id: 'c_intro_32',
            topicId: 'c_intro',
            question: 'What is linker? What does it do?',
            mathSolution: 'Combines object files and libraries into executable',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Linker combines object files into executable");\n    return 0;\n}',
            hint: 'Runs after compiler'
        },
        {
            id: 'c_intro_33',
            topicId: 'c_intro',
            question: 'Types of errors in C?',
            mathSolution: 'Syntax, Semantic, Runtime, Logical, Linker',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Errors: Syntax, Semantic, Runtime, Logical, Linker");\n    return 0;\n}',
            hint: 'Different stages'
        },
        {
            id: 'c_intro_34',
            topicId: 'c_intro',
            question: 'Difference between runtime and compile-time error?',
            mathSolution: 'Compile-time caught by compiler, runtime occurs during execution',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compile-time: caught by compiler, Runtime: during execution");\n    return 0;\n}',
            hint: 'Compiler catches first'
        },
        {
            id: 'c_intro_35',
            topicId: 'c_intro',
            question: 'Write Hello World program.',
            mathSolution: 'Use printf to display message',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
            hint: 'First program in C'
        },
        {
            id: 'c_intro_36',
            topicId: 'c_intro',
            question: 'What is preprocessor?',
            mathSolution: 'Processes #include, #define before compilation',
            codeSolution: '#include <stdio.h>\n#define MSG "Preprocessor"\nint main() {\n    printf("%s handles #include and #define", MSG);\n    return 0;\n}',
            hint: 'Runs before compiler'
        },
        {
            id: 'c_intro_37',
            topicId: 'c_intro',
            question: 'Difference between void main() and int main()?',
            mathSolution: 'int main() is standard, void main() is non-standard',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("int main() is standard, void main() is not");\n    return 0;\n}',
            hint: 'Standard C uses int main()'
        },
        {
            id: 'c_intro_38',
            topicId: 'c_intro',
            question: 'What are preprocessor directives? Examples?',
            mathSolution: '#include, #define, #ifdef, #endif',
            codeSolution: '#include <stdio.h>\n#define MAX 100\nint main() {\n    printf("Directives: #include, #define, #ifdef");\n    return 0;\n}',
            hint: 'Start with # symbol'
        },
        {
            id: 'c_intro_39',
            topicId: 'c_intro',
            question: 'Difference between printf and scanf?',
            mathSolution: 'printf outputs, scanf inputs',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("printf outputs, scanf inputs");\n    return 0;\n}',
            hint: 'Output vs Input'
        },
        {
            id: 'c_intro_40',
            topicId: 'c_intro',
            question: 'Write program to add two numbers.',
            mathSolution: 'Use int variables and + operator',
            codeSolution: '#include <stdio.h>\nint main() {\n    int a=5, b=10, sum;\n    sum = a + b;\n    printf("Sum = %d", sum);\n    return 0;\n}',
            hint: 'Use + operator'
        },
        {
            id: 'c_intro_41',
            topicId: 'c_intro',
            question: 'What is variable? Give example.',
            mathSolution: 'Named memory location that stores data',
            codeSolution: '#include <stdio.h>\nint main() {\n    int x = 10;\n    printf("Variable x = %d", x);\n    return 0;\n}',
            hint: 'Stores data in memory'
        },
        {
            id: 'c_intro_42',
            topicId: 'c_intro',
            question: 'What is constant? Give example.',
            mathSolution: 'Fixed value that cannot change',
            codeSolution: '#include <stdio.h>\nint main() {\n    const int MAX = 100;\n    printf("Constant MAX = %d", MAX);\n    return 0;\n}',
            hint: 'Value cannot be modified'
        },
        {
            id: 'c_intro_43',
            topicId: 'c_intro',
            question: 'What is operator? Give types.',
            mathSolution: 'Performs operations. Arithmetic, Relational, Logical',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Operators: Arithmetic, Relational, Logical");\n    return 0;\n}',
            hint: 'Performs operations on data'
        },
        {
            id: 'c_intro_44',
            topicId: 'c_intro',
            question: 'What is if statement?',
            mathSolution: 'Executes code block if condition is true',
            codeSolution: '#include <stdio.h>\nint main() {\n    int a=5;\n    if(a>0) printf("if executes when condition is true");\n    return 0;\n}',
            hint: 'Conditional execution'
        },
        {
            id: 'c_intro_45',
            topicId: 'c_intro',
            question: 'What is loop? Name types in C.',
            mathSolution: 'Repeats code. for, while, do-while',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Loops: for, while, do-while");\n    return 0;\n}',
            hint: 'Used for repetition'
        },
        {
            id: 'c_intro_46',
            topicId: 'c_intro',
            question: 'What is break statement?',
            mathSolution: 'Exits loop immediately',
            codeSolution: '#include <stdio.h>\nint main() {\n    for(int i=1;i<=5;i++) {\n        if(i==3) break;\n        printf("%d ",i);\n    }\n    return 0;\n}',
            hint: 'Exits loop'
        },
        {
            id: 'c_intro_47',
            topicId: 'c_intro',
            question: 'What is continue statement?',
            mathSolution: 'Skips current iteration',
            codeSolution: '#include <stdio.h>\nint main() {\n    for(int i=1;i<=5;i++) {\n        if(i==3) continue;\n        printf("%d ",i);\n    }\n    return 0;\n}',
            hint: 'Skips to next iteration'
        },
        {
            id: 'c_intro_48',
            topicId: 'c_intro',
            question: 'What is array?',
            mathSolution: 'Collection of same data type elements',
            codeSolution: '#include <stdio.h>\nint main() {\n    int arr[5] = {1,2,3,4,5};\n    printf("First element: %d", arr[0]);\n    return 0;\n}',
            hint: 'Stores multiple values'
        },
        {
            id: 'c_intro_49',
            topicId: 'c_intro',
            question: 'What is function?',
            mathSolution: 'Block of code that performs specific task',
            codeSolution: '#include <stdio.h>\nvoid greet() {\n    printf("Hello");\n}\nint main() {\n    greet();\n    return 0;\n}',
            hint: 'Reusable code block'
        },
        {
            id: 'c_intro_50',
            topicId: 'c_intro',
            question: 'What is pointer?',
            mathSolution: 'Variable that stores memory address',
            codeSolution: '#include <stdio.h>\nint main() {\n    int x=10;\n    int *ptr = &x;\n    printf("Value: %d, Address: %p", x, ptr);\n    return 0;\n}',
            hint: 'Stores memory address'
        }
    );

    console.log('C Intro questions loaded successfully! Total:', QuizData.questions.filter(q => q.topicId === 'c_intro').length);
})();