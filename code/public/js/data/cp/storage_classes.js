QuizData.questions.push(
  // ========== AUTO STORAGE CLASS (1-10) ==========
  {
    id: 'c_storage_01',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate auto storage class (default for local variables).',
    mathSolution: 'auto variables are created on stack and destroyed when function ends',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    auto int x = 10;\n    int y = 20;  // auto is default\n    printf("x = %d, y = %d\\n", x, y);\n}\n\nint main() {\n    func();\n    return 0;\n}',
    hint: 'auto is optional, all local variables are auto by default'
  },
  {
    id: 'c_storage_02',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that auto variables contain garbage if uninitialized.',
    mathSolution: 'Uninitialized auto variables have indeterminate values',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    int x;  // uninitialized auto variable\n    printf("Uninitialized value: %d\\n", x);\n}\n\nint main() {\n    func();\n    return 0;\n}',
    hint: 'Always initialize local variables to avoid garbage values'
  },
  {
    id: 'c_storage_03',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that auto variables are destroyed after function ends.',
    mathSolution: 'Local variables lose their values after function returns',
    codeSolution: '#include <stdio.h>\n\nvoid setValue() {\n    int x = 100;\n    printf("Inside setValue: x = %d\\n", x);\n}\n\nint main() {\n    setValue();\n    // x is not accessible here\n    printf("After function call\\n");\n    return 0;\n}',
    hint: 'Auto variables have automatic storage duration'
  },
  {
    id: 'c_storage_04',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare multiple auto variables of different types.',
    mathSolution: 'Auto variables can be any data type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    auto int a = 5;\n    auto float b = 3.14;\n    auto char c = \'A\';\n    printf("int: %d, float: %.2f, char: %c\\n", a, b, c);\n    return 0;\n}',
    hint: 'Different types can be declared as auto'
  },
  {
    id: 'c_storage_05',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare auto array.',
    mathSolution: 'Arrays can also be auto storage class',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    auto int arr[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Array elements are also stored on stack'
  },
  {
    id: 'c_storage_06',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate register storage class.',
    mathSolution: 'register suggests storing variable in CPU register for faster access',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int counter = 0;\n    for(register int i = 0; i < 1000; i++) {\n        counter++;\n    }\n    printf("Counter = %d\\n", counter);\n    return 0;\n}',
    hint: 'Compiler may ignore register keyword'
  },
  {
    id: 'c_storage_07',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that address of register variable cannot be taken.',
    mathSolution: 'Register variables may not have memory addresses',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int x = 10;\n    // int *p = &x;  // Error: cannot take address of register variable\n    printf("Register variable x = %d\\n", x);\n    return 0;\n}',
    hint: 'Registers don\'t have memory addresses'
  },
  {
    id: 'c_storage_08',
    topicId: 'c_storage_classes',
    question: 'Write a program to use register variable for frequently accessed data.',
    mathSolution: 'Register is often used for loop counters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int sum = 0;\n    for(register int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Good for counters and accumulators in loops'
  },
  {
    id: 'c_storage_09',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare multiple register variables.',
    mathSolution: 'Limited number of CPU registers available',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int a = 1, b = 2, c = 3;\n    register int result = a + b + c;\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Only suggestion to compiler, may be ignored if too many'
  },
  {
    id: 'c_storage_10',
    topicId: 'c_storage_classes',
    question: 'Write a program to initialize register variable.',
    mathSolution: 'Register variables can be initialized like normal variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int x = 100;\n    printf("Initialized register value = %d\\n", x);\n    return 0;\n}',
    hint: 'Initialization is allowed for register variables'
  },

  // ========== STATIC LOCAL VARIABLES (11-20) ==========
  {
    id: 'c_storage_11',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate static local variable retains value between calls.',
    mathSolution: 'Static local variables persist across function calls',
    codeSolution: '#include <stdio.h>\n\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf("Call count = %d\\n", count);\n}\n\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}',
    hint: 'Static variables are initialized only once'
  },
  {
    id: 'c_storage_12',
    topicId: 'c_storage_classes',
    question: 'Write a program to show static local variable is zero-initialized by default.',
    mathSolution: 'Static variables are automatically initialized to zero',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    static int x;  // automatically initialized to 0\n    printf("Static value = %d\\n", x);\n    x++;\n}\n\nint main() {\n    func();\n    func();\n    func();\n    return 0;\n}',
    hint: 'Static variables are zero-initialized unlike auto variables'
  },
  {
    id: 'c_storage_13',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static array inside function.',
    mathSolution: 'Static array persists between function calls',
    codeSolution: '#include <stdio.h>\n\nint* getArray() {\n    static int arr[5] = {1, 2, 3, 4, 5};\n    return arr;\n}\n\nint main() {\n    int *ptr = getArray();\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", ptr[i]);\n    }\n    return 0;\n}',
    hint: 'Safe to return pointer to static array'
  },
  {
    id: 'c_storage_14',
    topicId: 'c_storage_classes',
    question: 'Write a program to generate unique IDs using static variable.',
    mathSolution: 'Static counter increments each time function is called',
    codeSolution: '#include <stdio.h>\n\nint getNextID() {\n    static int id = 1000;\n    return id++;\n}\n\nint main() {\n    printf("ID1 = %d\\n", getNextID());\n    printf("ID2 = %d\\n", getNextID());\n    printf("ID3 = %d\\n", getNextID());\n    return 0;\n}',
    hint: 'Static variable preserves state between calls'
  },
  {
    id: 'c_storage_15',
    topicId: 'c_storage_classes',
    question: 'Write a program to implement one-time initialization using static flag.',
    mathSolution: 'Static flag ensures initialization happens only once',
    codeSolution: '#include <stdio.h>\n\nvoid initialize() {\n    static int done = 0;\n    if(!done) {\n        printf("Initializing resources...\\n");\n        done = 1;\n    }\n    printf("Function called\\n");\n}\n\nint main() {\n    initialize();\n    initialize();\n    initialize();\n    return 0;\n}',
    hint: 'Common pattern for lazy initialization'
  },
  {
    id: 'c_storage_16',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare static global variable.',
    mathSolution: 'Static global variable is visible only within the file',
    codeSolution: '#include <stdio.h>\n\nstatic int fileCounter = 0;\n\nvoid increment() {\n    fileCounter++;\n}\n\nint getCount() {\n    return fileCounter;\n}\n\nint main() {\n    increment();\n    increment();\n    printf("Count = %d\\n", getCount());\n    return 0;\n}',
    hint: 'Static global has internal linkage'
  },
  {
    id: 'c_storage_17',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare static function.',
    mathSolution: 'Static function is visible only within the file',
    codeSolution: '#include <stdio.h>\n\nstatic void helper() {\n    printf("Helper function called\\n");\n}\n\nint main() {\n    helper();\n    return 0;\n}',
    hint: 'Static functions are used for information hiding'
  },
  {
    id: 'c_storage_18',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate static const combination.',
    mathSolution: 'Static const for file-scoped constants',
    codeSolution: '#include <stdio.h>\n\nstatic const double PI = 3.14159;\n\nint main() {\n    double radius = 5.0;\n    double area = PI * radius * radius;\n    printf("Area = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Constant and private to the file'
  },
  {
    id: 'c_storage_19',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static for memoization (caching).',
    mathSolution: 'Cache computed results in static array',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    static int cache[10] = {1, 1, 2, 6, 24, 0};\n    if(n < 0 || n > 9) return -1;\n    if(cache[n] != 0) return cache[n];\n    cache[n] = n * factorial(n-1);\n    return cache[n];\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    printf("6! = %d\\n", factorial(6));\n    return 0;\n}',
    hint: 'Memoization pattern for optimization'
  },
  {
    id: 'c_storage_20',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static for random number generator state.',
    mathSolution: 'Static variable preserves RNG state between calls',
    codeSolution: '#include <stdio.h>\n\nunsigned int simpleRand() {\n    static unsigned int seed = 1;\n    seed = seed * 1103515245 + 12345;\n    return (seed >> 16) & 0x7FFF;\n}\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        printf("Random %d = %u\\n", i+1, simpleRand());\n    }\n    return 0;\n}',
    hint: 'Linear congruential generator'
  },

  // ========== EXTERN STORAGE CLASS (21-30) ==========
// ========== EXTERN STORAGE CLASS (21-30) - CORRECTED ==========
{
  id: 'c_storage_21',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate that static global variable is file-scoped.',
  mathSolution: 'Static global variable is visible only within the file',
  codeSolution: '#include <stdio.h>\n\nstatic int fileStatic = 100;\n\nvoid showFileStatic() {\n    printf("File static value = %d\\n", fileStatic);\n}\n\nint main() {\n    showFileStatic();\n    return 0;\n}',
  hint: 'Static global has internal linkage'
},
{
  id: 'c_storage_22',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate static function (internal linkage).',
  mathSolution: 'Static function is visible only within the file',
  codeSolution: '#include <stdio.h>\n\nstatic void internalHelper() {\n    printf("Internal helper function called\\n");\n}\n\nint main() {\n    internalHelper();\n    return 0;\n}',
  hint: 'Static functions cannot be called from other files'
},
{
  id: 'c_storage_23',
  topicId: 'c_storage_classes',
  question: 'Write a program to show that global variables have external linkage by default.',
  mathSolution: 'Global variables can be accessed from other files',
  codeSolution: '#include <stdio.h>\n\nint globalVar = 500;\n\nvoid showGlobal() {\n    printf("Global variable = %d\\n", globalVar);\n}\n\nint main() {\n    showGlobal();\n    return 0;\n}',
  hint: 'Global variables are extern by default'
},
{
  id: 'c_storage_24',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate multiple extern declarations of same variable.',
  mathSolution: 'Same variable can be declared extern multiple times',
  codeSolution: '#include <stdio.h>\n\nextern int shared;\nextern int shared;\nextern int shared;\n\nint shared = 250;\n\nint main() {\n    printf("Shared value = %d\\n", shared);\n    return 0;\n}',
  hint: 'Only one definition allowed, multiple declarations fine'
},
{
  id: 'c_storage_25',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static variable in recursion to count calls.',
  mathSolution: 'Static variable shared across all recursive calls',
  codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    static int callCount = 0;\n    callCount++;\n    printf("Call #%d, n=%d\\n", callCount, n);\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int result = factorial(4);\n    printf("4! = %d\\n", result);\n    return 0;\n}',
  hint: 'Static variable persists across all recursive calls'
},
{
  id: 'c_storage_26',
  topicId: 'c_storage_classes',
  question: 'Write a program to track maximum recursion depth using static.',
  mathSolution: 'Static variables can track depth across recursive calls',
  codeSolution: '#include <stdio.h>\n\nvoid recurse(int n) {\n    static int depth = 0;\n    static int maxDepth = 0;\n    depth++;\n    if(depth > maxDepth) maxDepth = depth;\n    if(n > 0) recurse(n-1);\n    depth--;\n    if(depth == 0) {\n        printf("Max recursion depth = %d\\n", maxDepth);\n    }\n}\n\nint main() {\n    recurse(5);\n    return 0;\n}',
  hint: 'Monitor recursion depth with static variables'
},
{
  id: 'c_storage_27',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static pointer for lazy allocation.',
  mathSolution: 'Static pointer allocated only once',
  codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint* getBuffer() {\n    static int* buffer = NULL;\n    if(!buffer) {\n        buffer = (int*)malloc(5 * sizeof(int));\n        for(int i = 0; i < 5; i++) buffer[i] = (i + 1) * 10;\n        printf("Buffer initialized\\n");\n    }\n    return buffer;\n}\n\nint main() {\n    int *buf = getBuffer();\n    int *buf2 = getBuffer();\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", buf[i]);\n    }\n    free(buf);\n    return 0;\n}',
  hint: 'Lazy initialization pattern'
},
{
  id: 'c_storage_28',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate static variable in block scope.',
  mathSolution: 'Static variable persists across block entries',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i = 1; i <= 5; i++) {\n        static int x = 0;\n        x++;\n        printf("Iteration %d: static x = %d\\n", i, x);\n    }\n    return 0;\n}',
  hint: 'Static in block has function lifetime, block visibility'
},
{
  id: 'c_storage_29',
  topicId: 'c_storage_classes',
  question: 'Write a program to combine auto, register, and static variables.',
  mathSolution: 'Different storage classes for different purposes',
  codeSolution: '#include <stdio.h>\n\nstatic int globalStatic = 0;\n\nvoid demo() {\n    static int localStatic = 0;\n    auto int autoVar = 5;\n    register int regVar = 10;\n    localStatic++;\n    globalStatic++;\n    printf("Local static=%d, Global static=%d, Auto=%d, Register=%d\\n", \n           localStatic, globalStatic, autoVar, regVar);\n}\n\nint main() {\n    demo();\n    demo();\n    demo();\n    return 0;\n}',
  hint: 'Different storage classes have different behaviors'
},
{
  id: 'c_storage_30',
  topicId: 'c_storage_classes',
  question: 'Write a program to implement singleton pattern using static.',
  mathSolution: 'Single instance of object using static pointer',
  codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int data;\n} Singleton;\n\nSingleton* getInstance() {\n    static Singleton instance = {99};\n    return &instance;\n}\n\nint main() {\n    Singleton *s1 = getInstance();\n    Singleton *s2 = getInstance();\n    printf("s1 data = %d, s2 data = %d\\n", s1->data, s2->data);\n    return 0;\n}',
  hint: 'Singleton ensures only one instance'
},

// ========== PRACTICAL APPLICATIONS (31-40) ==========
{
  id: 'c_storage_31',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for error counter.',
  mathSolution: 'Accumulate errors across function calls',
  codeSolution: '#include <stdio.h>\n\nvoid logError(const char* msg) {\n    static int errorCount = 0;\n    errorCount++;\n    printf("Error #%d: %s\\n", errorCount, msg);\n}\n\nint main() {\n    logError("File not found");\n    logError("Memory allocation failed");\n    logError("Network timeout");\n    return 0;\n}',
  hint: 'Static tracks error count across calls'
},
{
  id: 'c_storage_32',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for parser state machine.',
  mathSolution: 'Static variable stores parser state between calls',
  codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nchar processChar(char c) {\n    static int inWord = 0;\n    if(isalpha(c)) {\n        if(!inWord) {\n            inWord = 1;\n            return \'W\';\n        }\n    } else {\n        if(inWord) {\n            inWord = 0;\n            return \'S\';\n        }\n    }\n    return 0;\n}\n\nint main() {\n    char str[] = "hello world test";\n    for(int i = 0; str[i]; i++) {\n        char r = processChar(str[i]);\n        if(r) printf("%c ", r);\n    }\n    return 0;\n}',
  hint: 'Parser state preserved between calls'
},
{
  id: 'c_storage_33',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for log file handle.',
  mathSolution: 'Static FILE pointer opened once',
  codeSolution: '#include <stdio.h>\n\nvoid logMessage(const char* msg) {\n    static int logged = 0;\n    if(!logged) {\n        printf("Log file opened (simulated)\\n");\n        logged = 1;\n    }\n    printf("LOG: %s\\n", msg);\n}\n\nint main() {\n    logMessage("Program started");\n    logMessage("Processing data");\n    logMessage("Program ended");\n    return 0;\n}',
  hint: 'Resource opened only once'
},
{
  id: 'c_storage_34',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for lookup table initialization.',
  mathSolution: 'Static array initialized once',
  codeSolution: '#include <stdio.h>\n\nconst char* getMonthName(int month) {\n    static const char* months[] = {\n        "Jan", "Feb", "Mar", "Apr", "May", "Jun",\n        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"\n    };\n    if(month >= 1 && month <= 12) return months[month-1];\n    return "Invalid";\n}\n\nint main() {\n    for(int i = 1; i <= 12; i++) {\n        printf("%d = %s\\n", i, getMonthName(i));\n    }\n    return 0;\n}',
  hint: 'Static lookup table initialized once'
},
{
  id: 'c_storage_35',
  topicId: 'c_storage_classes',
  question: 'Write a program to compare auto vs static in recursion.',
  mathSolution: 'Auto creates new copy each call, static shared across calls',
  codeSolution: '#include <stdio.h>\n\nvoid compareDepth(int n) {\n    static int staticDepth = 0;\n    int autoDepth = 0;\n    staticDepth++;\n    autoDepth++;\n    printf("n=%d, static=%d, auto=%d\\n", n, staticDepth, autoDepth);\n    if(n > 0) compareDepth(n-1);\n}\n\nint main() {\n    compareDepth(3);\n    return 0;\n}',
  hint: 'Static accumulates, auto resets'
},
{
  id: 'c_storage_36',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for function call counter.',
  mathSolution: 'Count how many times function is called',
  codeSolution: '#include <stdio.h>\n\nint getCallCount() {\n    static int calls = 0;\n    calls++;\n    return calls;\n}\n\nint main() {\n    printf("Call 1: %d\\n", getCallCount());\n    printf("Call 2: %d\\n", getCallCount());\n    printf("Call 3: %d\\n", getCallCount());\n    return 0;\n}',
  hint: 'Simple function call counter'
},
{
  id: 'c_storage_37',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate external linkage with global variable.',
  mathSolution: 'Variables with external linkage can be accessed across functions',
  codeSolution: '#include <stdio.h>\n\nint sharedCounter = 0;\n\nvoid increment() {\n    sharedCounter++;\n}\n\nvoid display() {\n    printf("Counter = %d\\n", sharedCounter);\n}\n\nint main() {\n    increment();\n    increment();\n    display();\n    return 0;\n}',
  hint: 'Global variables have external linkage by default'
},
{
  id: 'c_storage_38',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate internal linkage with static global.',
  mathSolution: 'Static global variables visible only within file',
  codeSolution: '#include <stdio.h>\n\nstatic int filePrivate = 50;\n\nvoid showPrivate() {\n    printf("Private value = %d\\n", filePrivate);\n}\n\nint main() {\n    showPrivate();\n    return 0;\n}',
  hint: 'Static global has internal linkage'
},
{
  id: 'c_storage_39',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for default argument simulation.',
  mathSolution: 'Static variable can simulate default parameters',
  codeSolution: '#include <stdio.h>\n\nint multiply(int a, int b) {\n    static int defaultCalled = 0;\n    if(!defaultCalled) {\n        printf("Default multiplier set to 2\\n");\n        defaultCalled = 1;\n    }\n    return a * b;\n}\n\nint main() {\n    printf("10 * 2 = %d\\n", multiply(10, 2));\n    printf("5 * 2 = %d\\n", multiply(5, 2));\n    return 0;\n}',
  hint: 'Static can simulate default arguments'
},
{
  id: 'c_storage_40',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for Fibonacci memoization.',
  mathSolution: 'Cache Fibonacci results in static array',
  codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    static int cache[100] = {0, 1, 1};\n    if(n <= 2) return cache[n];\n    if(cache[n] != 0) return cache[n];\n    cache[n] = fib(n-1) + fib(n-2);\n    return cache[n];\n}\n\nint main() {\n    for(int i = 0; i <= 10; i++) {\n        printf("fib(%d) = %d\\n", i, fib(i));\n    }\n    return 0;\n}',
  hint: 'Memoization optimizes recursive Fibonacci'
},

// ========== ADVANCED STATIC APPLICATIONS (41-50) ==========
{
  id: 'c_storage_41',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for configuration cache.',
  mathSolution: 'Cache configuration values',
  codeSolution: '#include <stdio.h>\n\nint getConfig(const char* key) {\n    static int configLoaded = 0;\n    static int value = 0;\n    if(!configLoaded) {\n        value = 100;\n        configLoaded = 1;\n        printf("Config loaded\\n");\n    }\n    return value;\n}\n\nint main() {\n    printf("Config1 = %d\\n", getConfig("key1"));\n    printf("Config2 = %d\\n", getConfig("key2"));\n    printf("Config3 = %d\\n", getConfig("key3"));\n    return 0;\n}',
  hint: 'Static tracks configuration loading state'
},
{
  id: 'c_storage_42',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for performance monitoring.',
  mathSolution: 'Static accumulates performance metrics',
  codeSolution: '#include <stdio.h>\n\nvoid processItem(int item) {\n    static int processed = 0;\n    static int totalValue = 0;\n    processed++;\n    totalValue += item;\n    if(processed % 2 == 0) {\n        printf("Average of last 2: %.1f\\n", totalValue / 2.0);\n        totalValue = 0;\n    }\n}\n\nint main() {\n    for(int i = 1; i <= 6; i++) {\n        processItem(i * 5);\n    }\n    return 0;\n}',
  hint: 'Static for rolling statistics'
},
{
  id: 'c_storage_43',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for circular buffer index.',
  mathSolution: 'Static index wraps around',
  codeSolution: '#include <stdio.h>\n\nvoid addToBuffer(int value) {\n    static int buffer[4] = {0};\n    static int index = 0;\n    buffer[index] = value;\n    printf("Added %d at position %d\\n", value, index);\n    index = (index + 1) % 4;\n}\n\nint main() {\n    for(int i = 1; i <= 6; i++) {\n        addToBuffer(i * 10);\n    }\n    return 0;\n}',
  hint: 'Static maintains circular buffer state'
},
{
  id: 'c_storage_44',
  topicId: 'c_storage_classes',
  question: 'Write a program to use register for optimized loop.',
  mathSolution: 'Register suggests compiler to use CPU register',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    register int sum = 0;\n    for(register int i = 1; i <= 1000; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
  hint: 'Register for frequently accessed variables'
},
{
  id: 'c_storage_45',
  topicId: 'c_storage_classes',
  question: 'Write a program to show auto vs static scope difference.',
  mathSolution: 'Auto dies after block, static persists',
  codeSolution: '#include <stdio.h>\n\nint* getStaticPointer() {\n    static int staticVar = 100;\n    return &staticVar;\n}\n\nint main() {\n    int *p1 = getStaticPointer();\n    int *p2 = getStaticPointer();\n    printf("p1 = %d, p2 = %d\\n", *p1, *p2);\n    *p1 = 200;\n    printf("After change: p1 = %d, p2 = %d\\n", *p1, *p2);\n    return 0;\n}',
  hint: 'Static persists between calls'
},
{
  id: 'c_storage_46',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate storage class for string literals.',
  mathSolution: 'String literals have static storage duration',
  codeSolution: '#include <stdio.h>\n\nconst char* getMessage(int n) {\n    if(n == 1) return "First Message\";\n    return \"Second Message\";\n}\n\nint main() {\n    const char *msg1 = getMessage(1);\n    const char *msg2 = getMessage(2);\n    printf("%s\\n\", msg1);\n    printf(\"%s\\n\", msg2);\n    return 0;\n}',
  hint: 'String literals are static'
},
{
  id: 'c_storage_47',
  topicId: 'c_storage_classes',
  question: 'Write a program to combine static and auto variables in nested blocks.',
  mathSolution: 'Static persists, auto reinitializes',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 3; i++) {\n        static int staticX = 0;\n        int autoX = 0;\n        staticX++;\n        autoX++;\n        printf("Iteration %d: staticX=%d, autoX=%d\\n\", i+1, staticX, autoX);\n    }\n    return 0;\n}',
  hint: 'Static retains value, auto reinitializes'
},
{
  id: 'c_storage_48',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for unique ID generator.',
  mathSolution: 'Static counter generates unique IDs',
  codeSolution: '#include <stdio.h>\n\nint getUniqueID() {\n    static int nextID = 1;\n    return nextID++;\n}\n\nint main() {\n    printf("ID1 = %d\\n", getUniqueID());\n    printf("ID2 = %d\\n", getUniqueID());\n    printf("ID3 = %d\\n", getUniqueID());\n    printf("ID4 = %d\\n", getUniqueID());\n    return 0;\n}',
  hint: 'Static retains counter value'
},
{
  id: 'c_storage_49',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate register variable in local scope.',
  mathSolution: 'Register variable can be used like normal variable',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    register int x = 42;\n    register int y = 58;\n    register int z = x + y;\n    printf("x = %d, y = %d, sum = %d\\n\", x, y, z);\n    return 0;\n}',
  hint: 'Register suggests fast access, but cannot take address'
},
{
  id: 'c_storage_50',
  topicId: 'c_storage_classes',
  question: 'Write a program to combine all storage class concepts.',
  mathSolution: 'Demonstration of auto, register, static, extern',
  codeSolution: '#include <stdio.h>\n\nstatic int globalStatic = 0;\nint globalExtern = 50;\n\nvoid demo() {\n    static int staticLocal = 10;\n    auto int autoLocal = 20;\n    register int regLocal = 30;\n    \n    staticLocal++;\n    globalStatic++;\n    globalExtern++;\n    \n    printf("Static local: %d, Auto: %d, Register: %d\\n\", \n           staticLocal, autoLocal, regLocal);\n    printf(\"Global static: %d, Global extern: %d\\n\", \n           globalStatic, globalExtern);\n}\n\nint main() {\n    demo();\n    demo();\n    demo();\n    return 0;\n}',
  hint: 'All storage classes demonstrate different behaviors'
}

);