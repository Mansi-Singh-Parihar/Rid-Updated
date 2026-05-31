QuizData.questions.push(
{
  id: 'cpp_variables_1',
  topicId: 'cpp_variables',
  question: 'Declare and initialize an integer variable in C++.',
  mathSolution: 'Use int keyword followed by variable name and assignment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    cout << "Age: " << age << endl;\n    return 0;\n}',
  hint: 'int stores whole numbers (positive or negative).'
},
{
  id: 'cpp_variables_2',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a floating-point (float) variable.',
  mathSolution: 'Use float keyword for single-precision decimal numbers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    float price = 19.99f;\n    cout << "Price: $" << price << endl;\n    return 0;\n}',
  hint: 'Add f suffix to specify float literal, otherwise default is double.'
},
{
  id: 'cpp_variables_3',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a double variable for higher precision.',
  mathSolution: 'Use double keyword for double-precision floating point.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double pi = 3.14159265359;\n    double largeNumber = 1.23456789e10;\n    cout << "PI = " << pi << endl;\n    cout << "Large number = " << largeNumber << endl;\n    return 0;\n}',
  hint: 'double has more precision than float (about 15 decimal digits).'
},
{
  "id": "cpp_variables_4",
  "topicId": "cpp_variables",
  "question": "Declare and initialize a character variable.",
  "mathSolution": "Use char keyword with single quotes.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'A';\n    char symbol = '$';\n    char digit = '7';\n    \n    cout << \"Grade: \" << grade << endl;\n    cout << \"Symbol: \" << symbol << endl;\n    cout << \"Digit: \" << digit << endl;\n    \n    return 0;\n}",
  "hint": "char stores a single character in single quotes, not double quotes."
},
{
  id: 'cpp_variables_5',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a boolean variable.',
  mathSolution: 'Use bool keyword with true or false values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isActive = true;\n    bool isComplete = false;\n    \n    cout << "isActive: " << isActive << endl;   // Prints 1\n    cout << "isComplete: " << isComplete << endl; // Prints 0\n    cout << boolalpha;  // Format to print true/false\n    cout << "isActive: " << isActive << endl;   // Prints true\n    cout << "isComplete: " << isComplete << endl; // Prints false\n    return 0;\n}',
  hint: 'bool values print as 1/0 by default, use boolalpha for true/false.'
},
{
  id: 'cpp_variables_6',
  topicId: 'cpp_variables',
  question: 'Declare multiple variables of same type in one statement.',
  mathSolution: 'Separate variable names with commas after type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10, c = 15;\n    double x = 1.1, y = 2.2, z = 3.3;\n    \n    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;\n    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;\n    return 0;\n}',
  hint: 'Multiple declarations can save space but may reduce readability.'
},
{
  id: 'cpp_variables_7',
  topicId: 'cpp_variables',
  question: 'Declare variables without initialization (default values).',
  mathSolution: 'Variables declared without initialization contain garbage values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint globalVar;  // Zero-initialized\n\nint main() {\n    int localVar;  // Contains garbage value\n    static int staticVar;  // Zero-initialized\n    \n    cout << "Global: " << globalVar << endl;\n    cout << "Static: " << staticVar << endl;\n    cout << "Local (garbage): " << localVar << endl;\n    return 0;\n}',
  hint: 'Always initialize local variables to avoid undefined behavior.'
},
{
  "id": "cpp_variables_8",
  "topicId": "cpp_variables",
  "question": "Use const keyword for immutable variables.",
  "mathSolution": "const variables cannot be modified after initialization.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    const int MAX_USERS = 100;\n    const char NEWLINE = '\\n';\n    \n    cout << \"PI = \" << PI << NEWLINE;\n    cout << \"MAX_USERS = \" << MAX_USERS << NEWLINE;\n    // PI = 3.14;  // Error: cannot modify const variable\n    \n    return 0;\n}",
  "hint": "const variables must be initialized at declaration time."
},
{
  id: 'cpp_variables_9',
  topicId: 'cpp_variables',
  question: 'Use constexpr for compile-time constants.',
  mathSolution: 'constexpr evaluated at compile time, more efficient than const.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconstexpr int square(int x) {\n    return x * x;\n}\n\nint main() {\n    constexpr int SIZE = 10;\n    constexpr int AREA = SIZE * SIZE;\n    constexpr int SQUARE_OF_5 = square(5);\n    \n    cout << "SIZE: " << SIZE << endl;\n    cout << "AREA: " << AREA << endl;\n    cout << "Square of 5: " << SQUARE_OF_5 << endl;\n    \n    int arr[SIZE];  // Valid because SIZE is compile-time constant\n    return 0;\n}',
  hint: 'constexpr guarantees compile-time evaluation when possible.'
},
{
  id: 'cpp_variables_10',
  topicId: 'cpp_variables',
  question: 'Declare unsigned integer variables (only positive values).',
  mathSolution: 'Use unsigned keyword to store only non-negative values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int count = 100;\n    unsigned short smallNum = 65535;\n    unsigned long largeNum = 4294967295UL;\n    \n    cout << "Count: " << count << endl;\n    cout << "Small: " << smallNum << endl;\n    cout << "Large: " << largeNum << endl;\n    \n    // unsigned int age = -5;  // Wraps around to large positive number\n    // cout << "Age: " << age << endl;  // Prints large number (4294967291)\n    return 0;\n}',
  hint: 'Unsigned types cannot store negative values and have double the positive range.'
},
{
  id: 'cpp_variables_11',
  topicId: 'cpp_variables',
  question: 'Declare short and long integer variables.',
  mathSolution: 'Use short and long modifiers for different size integers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    short small = 32767;           // Usually 2 bytes\n    int normal = 2147483647;       // Usually 4 bytes\n    long large = 2147483647L;      // Usually 4 or 8 bytes\n    long long veryLarge = 9223372036854775807LL;  // Usually 8 bytes\n    \n    cout << "short size: " << sizeof(short) << " bytes" << endl;\n    cout << "int size: " << sizeof(int) << " bytes" << endl;\n    cout << "long size: " << sizeof(long) << " bytes" << endl;\n    cout << "long long size: " << sizeof(long long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'Size of types depends on system architecture (use sizeof to check).'
},
{
  "id": "cpp_variables_12",
  "topicId": "cpp_variables",
  "question": "Use auto keyword for type deduction.",
  "mathSolution": "auto deduces variable type from initializer expression.",
  "codeSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto num = 42;           // int\n    auto pi = 3.14159;       // double\n    auto letter = 'A';       // char\n    auto name = \"John\";      // const char*\n    auto vec = vector<int>{1, 2, 3};  // vector<int>\n    \n    cout << \"num: \" << num << endl;\n    cout << \"pi: \" << pi << endl;\n    cout << \"letter: \" << letter << endl;\n    cout << \"name: \" << name << endl;\n    cout << \"vec size: \" << vec.size() << endl;\n    \n    return 0;\n}",
  "hint": "auto prevents type mismatches and simplifies complex type declarations."
},
{
  id: 'cpp_variables_13',
  topicId: 'cpp_variables',
  question: 'Declare and use string variables.',
  mathSolution: 'Include string header and use std::string type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "John Doe";\n    string city = "New York";\n    string greeting = "Hello, " + name + "!";\n    \n    cout << "Name: " << name << endl;\n    cout << "City: " << city << endl;\n    cout << "Greeting: " << greeting << endl;\n    cout << "Length: " << name.length() << endl;\n    \n    return 0;\n}',
  hint: '#include <string> is required for string type.'
},
{
  id: 'cpp_variables_14',
  topicId: 'cpp_variables',
  question: 'Use reference variable as alias to another variable.',
  mathSolution: 'Reference is declared with & and must be initialized.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int original = 100;\n    int &ref = original;  // ref is reference to original\n    \n    cout << "Original: " << original << endl;\n    cout << "Reference: " << ref << endl;\n    \n    ref = 200;  // Changes original through reference\n    cout << "After modifying ref: " << original << endl;\n    \n    return 0;\n}',
  hint: 'References must be initialized when declared and cannot be reassigned.'
},
{
  id: 'cpp_variables_15',
  topicId: 'cpp_variables',
  question: 'Use pointer variable to store memory address.',
  mathSolution: 'Pointer declared with *, stores address of another variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int value = 42;\n    int *ptr = &value;  // ptr points to value\n    \n    cout << "Value: " << value << endl;\n    cout << "Address of value: " << &value << endl;\n    cout << "Pointer value (address): " << ptr << endl;\n    cout << "Dereferenced pointer: " << *ptr << endl;\n    \n    *ptr = 100;  // Changes value through pointer\n    cout << "After dereference: " << value << endl;\n    \n    return 0;\n}',
  hint: 'Use & to get address, * to dereference and access value.'
},
{
  id: 'cpp_variables_16',
  topicId: 'cpp_variables',
  question: 'Use nullptr for null pointers (C++11).',
  mathSolution: 'nullptr is type-safe null pointer literal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int *ptr1 = nullptr;  // Equivalent to NULL but type-safe\n    int *ptr2 = NULL;     // Old C-style (not type-safe)\n    \n    if (ptr1 == nullptr) {\n        cout << "ptr1 is null" << endl;\n    }\n    \n    // ptr1 = 42;  // Error: cannot assign int to pointer\n    ptr1 = new int(42);\n    \n    if (ptr1 != nullptr) {\n        cout << "ptr1 points to: " << *ptr1 << endl;\n    }\n    \n    delete ptr1;\n    ptr1 = nullptr;  // Good practice after delete\n    \n    return 0;\n}',
  hint: 'Always set pointers to nullptr after deleting to avoid dangling pointers.'
},
{
  id: 'cpp_variables_17',
  topicId: 'cpp_variables',
  question: 'Declare void pointer for generic addressing.',
  mathSolution: 'void* can point to any type but cannot be dereferenced directly.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    double pi = 3.14159;\n    char letter = \'X\';\n    \n    void *ptr;\n    \n    ptr = &num;\n    cout << "Integer pointer: " << *(static_cast<int*>(ptr)) << endl;\n    \n    ptr = &pi;\n    cout << "Double pointer: " << *(static_cast<double*>(ptr)) << endl;\n    \n    ptr = &letter;\n    cout << "Char pointer: " << *(static_cast<char*>(ptr)) << endl;\n    \n    return 0;\n}',
  hint: 'void* must be cast to specific type before dereferencing.'
},
{
  id: 'cpp_variables_18',
  topicId: 'cpp_variables',
  question: 'Declare constant pointer and pointer to constant.',
  mathSolution: 'const affects pointer address or pointed value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20;\n    \n    // Pointer to constant (cannot change pointed value)\n    const int *ptr1 = &x;\n    // *ptr1 = 30;  // Error: cannot modify value through ptr1\n    ptr1 = &y;      // OK: can change pointer itself\n    \n    // Constant pointer (cannot change pointer address)\n    int *const ptr2 = &x;\n    *ptr2 = 30;     // OK: can modify value\n    // ptr2 = &y;   // Error: cannot change pointer\n    \n    // Constant pointer to constant\n    const int *const ptr3 = &x;\n    // *ptr3 = 30;  // Error: cannot modify value\n    // ptr3 = &y;   // Error: cannot modify pointer\n    \n    cout << "x: " << x << ", y: " << y << endl;\n    \n    return 0;\n}',
  hint: 'Read const declarations from right to left for correct interpretation.'
},
{
  id: 'cpp_variables_19',
  topicId: 'cpp_variables',
  question: 'Use size_t for array indexing and sizes.',
  mathSolution: 'size_t is unsigned integer type for sizes.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    size_t length = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Array length: " << length << endl;\n    \n    for (size_t i = 0; i < length; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    size_t vecSize = vec.size();\n    cout << "Vector size: " << vecSize << endl;\n    \n    return 0;\n}',
  hint: 'size_t is the type returned by sizeof and container size() methods.'
},
{
  id: 'cpp_variables_20',
  topicId: 'cpp_variables',
  question: 'Declare and use enumerations (enum).',
  mathSolution: 'enum defines set of named integer constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Traditional enum (unscoped)\nenum Color { RED, GREEN, BLUE };\n\n// Enum class (scoped, C++11)\nenum class Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Weekday today = Weekday::WED;\n    \n    cout << "Color value: " << myColor << endl;  // Prints 1\n    \n    // cout << today;  // Error: enum class not implicitly convertible\n    cout << "Weekday: " << static_cast<int>(today) << endl;\n    \n    if (myColor == GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use enum class for type-safe enumerations (C++11).'
},
{
  id: 'cpp_variables_21',
  topicId: 'cpp_variables',
  question: 'Use decltype to get type of expression.',
  mathSolution: 'decltype deduces type without evaluating expression.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    decltype(a) c = a;           // c is int\n    decltype(b) d = b;           // d is double\n    decltype(a + b) result = a + b;  // result is double\n    \n    cout << "Type of c: " << typeid(c).name() << endl;\n    cout << "Type of d: " << typeid(d).name() << endl;\n    cout << "Type of result: " << typeid(result).name() << endl;\n    \n    // decltype with expressions\n    decltype( (a) ) refToA = a;  // reference to int\n    refToA = 20;\n    cout << "a after modification: " << a << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic programming and templates.'
},
{
  id: 'cpp_variables_22',
  topicId: 'cpp_variables',
  question: 'Declare static variables with static storage duration.',
  mathSolution: 'static variables retain value between function calls.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid counter() {\n    static int count = 0;  // Initialized only once\n    count++;\n    cout << "Called " << count << " times" << endl;\n}\n\nint main() {\n    counter();  // Called 1 times\n    counter();  // Called 2 times\n    counter();  // Called 3 times\n    \n    return 0;\n}',
  hint: 'Static local variables are initialized only once and persist across calls.'
},
{
  id: 'cpp_variables_23',
  topicId: 'cpp_variables',
  question: 'Declare extern variables for sharing across files.',
  mathSolution: 'extern declares variable defined in another file.',
  codeSolution: '// file1.cpp\n// int globalCount = 100;  // Definition\n\n// file2.cpp\n// extern int globalCount;  // Declaration\n// \n// int main() {\n//     cout << "Global count: " << globalCount << endl;\n//     return 0;\n// }',
  hint: 'extern declares variable without defining it.'
},
{
  id: 'cpp_variables_24',
  topicId: 'cpp_variables',
  question: 'Use volatile keyword for variables that can change unexpectedly.',
  mathSolution: 'volatile prevents compiler optimizations on variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    volatile int sensorValue = 100;  // May change externally\n    \n    while (sensorValue == 100) {\n        // Compiler won\'t optimize this check away\n        cout << "Waiting for sensor change" << endl;\n        break;  // Prevent infinite loop in example\n    }\n    \n    // Without volatile, compiler might optimize repeated access\n    volatile int *hardwareReg = reinterpret_cast<volatile int*>(0x4000);\n    int value = *hardwareReg;  // Always read from memory\n    \n    return 0;\n}',
  hint: 'volatile is used for memory-mapped I/O, signal handlers, and multi-threading.'
},
{
  id: 'cpp_variables_25',
  topicId: 'cpp_variables',
  question: 'Use mutable keyword in class for modification in const functions.',
  mathSolution: 'mutable allows modification of member in const member functions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\nprivate:\n    mutable int logCount = 0;  // Can be modified in const functions\n    string name;\n    \npublic:\n    Logger(const string& n) : name(n) {}\n    \n    void log(const string& message) const {\n        logCount++;  // Allowed because mutable\n        cout << "[" << name << "] " << message << endl;\n    }\n    \n    int getLogCount() const {\n        return logCount;\n    }\n};\n\nint main() {\n    const Logger logger("App");\n    logger.log("Starting");\n    logger.log("Processing");\n    logger.log("Finished");\n    \n    cout << "Log count: " << logger.getLogCount() << endl;\n    \n    return 0;\n}',
  hint: 'mutable is useful for caching, logging, and mutexes in const contexts.'
},
{
  id: 'cpp_variables_26',
  topicId: 'cpp_variables',
  question: 'Initialize variables using uniform initialization (curly braces).',
  mathSolution: 'Use {} for initialization to prevent narrowing conversions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int a{10};\n    double b{3.14};\n    char c{\'X\'};\n    string s{"Hello"};\n    int arr[]{1, 2, 3, 4, 5};\n    vector<int> v{1, 2, 3, 4, 5};\n    \n    cout << "a: " << a << endl;\n    cout << "b: " << b << endl;\n    cout << "c: " << c << endl;\n    cout << "s: " << s << endl;\n    \n    // int x{3.14};  // Error: narrowing conversion from double to int\n    int y = 3.14;     // OK, but truncates (bad practice)\n    \n    return 0;\n}',
  hint: 'Uniform initialization prevents narrowing conversions and works everywhere.'
},
{
  id: 'cpp_variables_27',
  topicId: 'cpp_variables',
  question: 'Use structured bindings for multiple variable assignment (C++17).',
  mathSolution: 'Structured bindings unpack tuples, pairs, and structs.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Pair\n    pair<int, string> p = {1, "John"};\n    auto [id, name] = p;\n    cout << "ID: " << id << ", Name: " << name << endl;\n    \n    // Tuple\n    tuple<int, double, string> t = {42, 3.14, "Hello"};\n    auto [num, pi, msg] = t;\n    cout << "Num: " << num << ", Pi: " << pi << ", Msg: " << msg << endl;\n    \n    // Array\n    int arr[] = {10, 20, 30};\n    auto [x, y, z] = arr;\n    cout << "x,y,z: " << x << ", " << y << ", " << z << endl;\n    \n    // Struct\n    struct Point { int x; int y; };\n    Point pt = {5, 10};\n    auto [px, py] = pt;\n    cout << "Point: (" << px << ", " << py << ")" << endl;\n    \n    // Map iteration\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    for (const auto& [person, age] : ages) {\n        cout << person << " is " << age << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Structured bindings (C++17) make working with compound types easier.'
},
{
  id: 'cpp_variables_28',
  topicId: 'cpp_variables',
  question: 'Initialize variables with different numeric bases (hex, octal).',
  mathSolution: 'Use prefixes: 0x for hex, 0 for octal.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int decimal = 42;\n    int hex = 0x2A;      // 42 in hexadecimal\n    int octal = 052;      // 42 in octal\n    int binary = 0b101010; // 42 in binary (C++14)\n    \n    cout << "Decimal: " << decimal << endl;\n    cout << "Hexadecimal: " << hex << endl;\n    cout << "Octal: " << octal << endl;\n    cout << "Binary: " << binary << endl;\n    \n    // Formatting output\n    cout << showbase;\n    cout << "Decimal: " << dec << decimal << endl;\n    cout << "Hexadecimal: " << hex << decimal << endl;\n    cout << "Octal: " << oct << decimal << endl;\n    \n    return 0;\n}',
  hint: 'Use different bases for bit manipulation and hardware programming.'
},
{
  id: 'cpp_variables_29',
  topicId: 'cpp_variables',
  question: 'Use suffixes for numeric literals.',
  mathSolution: 'Suffixes specify type of numeric literal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto num1 = 42;        // int\n    auto num2 = 42U;       // unsigned int\n    auto num3 = 42L;       // long\n    auto num4 = 42UL;      // unsigned long\n    auto num5 = 42LL;      // long long\n    auto num6 = 42ULL;     // unsigned long long\n    \n    auto pi1 = 3.14;       // double\n    auto pi2 = 3.14f;      // float\n    auto pi3 = 3.14l;      // long double\n    \n    auto big = 1\'000\'000;  // Digit separators (C++14)\n    auto hex = 0xFF\'FF\'FF;\n    auto bin = 0b1111\'0000;\n    \n    cout << "num1: " << num1 << endl;\n    cout << "big: " << big << endl;\n    cout << "hex: " << hex << endl;\n    \n    return 0;\n}',
  hint: 'Literal suffixes help avoid overflow and precision issues.'
},
{
  id: 'cpp_variables_30',
  topicId: 'cpp_variables',
  question: 'Use type aliases (typedef and using) for complex types.',
  mathSolution: 'Type aliases create alternative names for types.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n// typedef (C++98)\ntypedef unsigned long ulong;\ntypedef vector<int> IntVector;\ntypedef void (*FunctionPtr)(int);\n\n// using (C++11, more flexible)\nusing ULong = unsigned long;\nusing IntVec = vector<int>;\nusing FuncPtr = void(*)(int);\n\n// Template alias\nusing StringVec = vector<string>;\n\ntemplate<typename T>\nusing Vec = vector<T>;\n\nint main() {\n    ulong x = 100;\n    IntVector numbers = {1, 2, 3, 4, 5};\n    StringVec names = {"Alice", "Bob", "Charlie"};\n    \n    Vec<double> doubles = {1.1, 2.2, 3.3};\n    \n    cout << "x: " << x << endl;\n    cout << "Numbers size: " << numbers.size() << endl;\n    cout << "Names: ";\n    for (const auto& name : names) {\n        cout << name << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'using is more readable than typedef, especially for function pointers.'
},
{
  id: 'cpp_variables_31',
  topicId: 'cpp_variables',
  question: 'Initialize variable with different constructors (direct vs copy).',
  mathSolution: 'Different initialization syntaxes: direct, copy, uniform.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass MyClass {\npublic:\n    int value;\n    MyClass(int v) : value(v) {}\n};\n\nint main() {\n    // Copy initialization\n    int a = 10;\n    string s1 = "Hello";\n    \n    // Direct initialization\n    int b(20);\n    string s2("World");\n    \n    // Uniform initialization (C++11)\n    int c{30};\n    string s3{"C++"};\n    int arr[]{1, 2, 3};\n    \n    // Different for classes\n    MyClass obj1 = MyClass(5);   // Copy initialization\n    MyClass obj2(5);              // Direct initialization\n    MyClass obj3{5};              // Uniform initialization\n    \n    cout << "a,b,c: " << a << ", " << b << ", " << c << endl;\n    cout << "s1,s2,s3: " << s1 << ", " << s2 << ", " << s3 << endl;\n    \n    return 0;\n}',
  hint: 'Uniform initialization {} is recommended for consistency and safety.'
},
{
  id: 'cpp_variables_32',
  topicId: 'cpp_variables',
  question: 'Initialize variables with zero using value initialization.',
  mathSolution: 'Use {} or () for zero-initialization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a{};      // Zero-initialized: 0\n    double b{};   // Zero-initialized: 0.0\n    bool c{};     // Zero-initialized: false\n    char d{};     // Zero-initialized: \'\\0\'\n    int arr[5]{}; // All elements zero-initialized\n    \n    // With parentheses\n    int e();  // Warning: function declaration, not variable\n    int f = int();  // Value-initialized to 0\n    \n    cout << "a: " << a << endl;\n    cout << "b: " << b << endl;\n    cout << "c: " << c << endl;\n    cout << "d: " << (d ? "not null" : "null") << endl;\n    cout << "arr[0]: " << arr[0] << endl;\n    \n    return 0;\n}',
  hint: 'Value initialization {} sets primitive types to 0/false/nullptr.'
},
{
  id: 'cpp_variables_33',
  topicId: 'cpp_variables',
  question: 'Use thread_local for thread-local storage (C++11).',
  mathSolution: 'thread_local gives each thread its own copy of variable.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nthread_local int threadId = 0;\n\nvoid worker(int id) {\n    threadId = id;\n    cout << "Thread " << id << ", threadId = " << threadId << endl;\n    threadId++;\n    cout << "Thread " << id << ", after increment: " << threadId << endl;\n}\n\nint main() {\n    thread t1(worker, 1);\n    thread t2(worker, 2);\n    thread t3(worker, 3);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    return 0;\n}',
  hint: 'thread_local variables have separate instances for each thread.'
},
{
  id: 'cpp_variables_34',
  topicId: 'cpp_variables',
  question: 'Understand integer overflow behavior.',
  mathSolution: 'Signed integer overflow is undefined behavior.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    // Signed overflow - undefined behavior (avoid)\n    int maxInt = INT_MAX;\n    cout << "INT_MAX: " << maxInt << endl;\n    // maxInt++ would be UB\n    \n    // Unsigned overflow - wraps around (defined)\n    unsigned int maxUnsigned = UINT_MAX;\n    cout << "UINT_MAX: " << maxUnsigned << endl;\n    maxUnsigned++;\n    cout << "After increment: " << maxUnsigned << endl;  // Wraps to 0\n    \n    // Check before operation\n    int a = INT_MAX - 5;\n    int b = 10;\n    if (a > INT_MAX - b) {\n        cout << "Would overflow!" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Unsigned overflow wraps around; signed overflow is undefined behavior.'
},
{
  id: 'cpp_variables_35',
  topicId: 'cpp_variables',
  question: 'Understand floating-point precision issues.',
  mathSolution: 'Floating-point numbers cannot represent all decimals exactly.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    cout << setprecision(20);\n    \n    double a = 0.1;\n    double b = 0.2;\n    double c = a + b;\n    \n    cout << "0.1 = " << a << endl;\n    cout << "0.2 = " << b << endl;\n    cout << "0.1 + 0.2 = " << c << endl;\n    \n    if (c == 0.3) {\n        cout << "Equal" << endl;\n    } else {\n        cout << "Not equal due to precision" << endl;\n    }\n    \n    // Comparison with tolerance\n    double epsilon = 1e-10;\n    if (abs(c - 0.3) < epsilon) {\n        cout << "Equal within tolerance" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Never compare floating-point numbers directly; use tolerance.'
},
{
  id: 'cpp_variables_36',
  topicId: 'cpp_variables',
  question: 'Use wchar_t for wide characters (Unicode).',
  mathSolution: 'wchar_t stores wide characters, useful for Unicode.',
  codeSolution: '#include <iostream>\n#include <locale>\nusing namespace std;\n\nint main() {\n    wchar_t wchar = L\'A\';\n    wchar_t unicode = L\'\\u03A9\';  // Greek Omega\n    const wchar_t* wstr = L"Hello World";\n    \n    wcout.imbue(locale(""));  // Enable Unicode output\n    \n    wcout << L"wchar_t character: " << wchar << endl;\n    wcout << L"Unicode char: " << unicode << endl;\n    wcout << L"Wide string: " << wstr << endl;\n    \n    // Size\n    cout << "Size of wchar_t: " << sizeof(wchar_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'wchar_t size is platform-dependent (2 bytes on Windows, 4 on Linux).'
},
{
  id: 'cpp_variables_37',
  topicId: 'cpp_variables',
  question: 'Use char16_t and char32_t for Unicode (C++11).',
  mathSolution: 'char16_t (UTF-16) and char32_t (UTF-32) for Unicode.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    char16_t u16 = u\'A\';\n    char32_t u32 = U\'\\u03A9\';  // Omega\n    \n    const char16_t* u16str = u"Hello UTF-16";\n    const char32_t* u32str = U"Hello UTF-32";\n    \n    cout << "Size of char16_t: " << sizeof(char16_t) << " bytes" << endl;\n    cout << "Size of char32_t: " << sizeof(char32_t) << " bytes" << endl;\n    \n    // Conversion to string (platform-dependent)\n    string utf8 = u8"UTF-8 string";\n    cout << "UTF-8: " << utf8 << endl;\n    \n    return 0;\n}',
  hint: 'Use fixed-width Unicode types for portable internationalization.'
},
{
  id: 'cpp_variables_38',
  topicId: 'cpp_variables',
  question: 'Create and use variable template (C++14).',
  mathSolution: 'Variable templates allow templated variables.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\ntemplate<typename T>\nconstexpr T pi = T(3.1415926535897932385);\n\ntemplate<typename T>\nT square(T x) {\n    return x * x;\n}\n\nint main() {\n    // Variable template instantiation\n    double piDouble = pi<double>;\n    float piFloat = pi<float>;\n    int piInt = pi<int>;  // Truncated\n    \n    cout.precision(15);\n    cout << "pi<double>: " << piDouble << endl;\n    cout << "pi<float>: " << piFloat << endl;\n    cout << "pi<int>: " << piInt << endl;\n    \n    // Using with expressions\n    auto area = pi<double> * square(5.0);\n    cout << "Area: " << area << endl;\n    \n    return 0;\n}',
  hint: 'Variable templates simplify generic programming with constants.'
},
{
  id: 'cpp_variables_39',
  topicId: 'cpp_variables',
  question: 'Use [[maybe_unused]] attribute to suppress warnings.',
  mathSolution: '[[maybe_unused]] indicates variable may be unused intentionally.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    [[maybe_unused]] int debugCode = 42;  // Suppresses warning\n    \n    // In debug builds, the variable is used\n    #ifdef DEBUG\n        cout << "Debug code: " << debugCode << endl;\n    #endif\n    \n    [[maybe_unused]] auto result = []() {\n        return 100;\n    };\n    \n    // Can be used in conditional compilation\n    #ifdef ENABLE_FEATURE\n        int featureEnabled = 1;\n        cout << "Feature enabled" << endl;\n    #endif\n    \n    return 0;\n}',
  hint: '[[maybe_unused]] silences compiler warnings about unused variables.'
},
{
  id: 'cpp_variables_40',
  topicId: 'cpp_variables',
  question: 'Declare variable with [[nodiscard]] attribute (C++17).',
  mathSolution: '[[nodiscard]] warns if return value is ignored.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n[[nodiscard]] int getValue() {\n    return 42;\n}\n\nclass Resource {\npublic:\n    [[nodiscard]] bool isAllocated() const {\n        return true;\n    }\n};\n\n// For enum (C++17)\nenum class [[nodiscard]] ErrorCode {\n    Success,\n    Failure\n};\n\nErrorCode doSomething() {\n    return ErrorCode::Success;\n}\n\nint main() {\n    int val = getValue();  // OK: value used\n    cout << "Value: " << val << endl;\n    \n    // getValue();  // Warning: ignoring return value\n    \n    Resource res;\n    bool allocated = res.isAllocated();  // OK\n    \n    // res.isAllocated();  // Warning: ignoring return value\n    \n    auto result = doSomething();  // OK\n    // doSomething();  // Warning: ignoring return value\n    \n    return 0;\n}',
  hint: '[[nodiscard]] prevents accidental loss of important return values.'
},
{
  id: 'cpp_variables_41',
  topicId: 'cpp_variables',
  question: 'Understand variable scope (global, local, block).',
  mathSolution: 'Variables have different visibility based on declaration location.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint globalVar = 100;  // Global scope\n\nint main() {\n    int localVar = 50;  // Local scope\n    \n    cout << "Global variable: " << globalVar << endl;\n    cout << "Local variable: " << localVar << endl;\n    \n    {  // Block scope\n        int blockVar = 25;\n        cout << "Block variable: " << blockVar << endl;\n        // blockVar inaccessible outside this block\n    }\n    // cout << blockVar;  // Error: not in scope\n    \n    // Shadowing\n    int globalVar = 200;  // Shadows global variable\n    cout << "Local globalVar: " << globalVar << endl;\n    cout << "Actual global: " << ::globalVar << endl;  // Using scope resolution\n    \n    return 0;\n}\n\nvoid anotherFunction() {\n    // cout << localVar;  // Error: not in scope\n    cout << "Global in function: " << globalVar << endl;  // OK\n}',
  hint: 'Variables have limited scope to prevent naming conflicts.'
},
{
  id: 'cpp_variables_42',
  topicId: 'cpp_variables',
  question: 'Use extern to access global variable from another file.',
  mathSolution: 'extern declares variable defined in another translation unit.',
  codeSolution: '// file1.cpp\n// int sharedCounter = 0;  // Definition\n\n// file2.cpp\n// extern int sharedCounter;  // Declaration\n// \n// int main() {\n//     sharedCounter++;\n//     cout << "Counter: " << sharedCounter << endl;\n//     return 0;\n// }',
  hint: 'extern allows sharing variables across source files.'
},
{
  id: 'cpp_variables_43',
  topicId: 'cpp_variables',
  question: 'Initialize variables using std::optional for nullable values (C++17).',
  mathSolution: 'optional can hold value or nothing.',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\nusing namespace std;\n\noptional<int> findUser(const string& name) {\n    if (name == "John") {\n        return 42;  // Found user ID\n    }\n    return nullopt;  // User not found\n}\n\nint main() {\n    auto user1 = findUser("John");\n    auto user2 = findUser("Jane");\n    \n    if (user1.has_value()) {\n        cout << "User found: " << *user1 << endl;\n    } else {\n        cout << "User not found" << endl;\n    }\n    \n    // Value or default\n    int id = user2.value_or(-1);\n    cout << "ID for Jane: " << id << endl;\n    \n    // Structured binding (optional)\n    if (auto user = findUser("John")) {\n        cout << "Found in if: " << *user << endl;\n    }\n    \n    return 0;\n}',
  hint: 'optional eliminates need for sentinel values like -1 or nullptr.'
},
{
  id: 'cpp_variables_44',
  topicId: 'cpp_variables',
  question: 'Use std::variant for type-safe union (C++17).',
  mathSolution: 'variant can hold one of several types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    data = 42;\n    cout << "Integer: " << get<int>(data) << endl;\n    \n    data = 3.14;\n    cout << "Double: " << get<double>(data) << endl;\n    \n    data = "Hello";\n    cout << "String: " << get<string>(data) << endl;\n    \n    // Type checking\n    if (holds_alternative<int>(data)) {\n        cout << "Holds int" << endl;\n    } else if (holds_alternative<string>(data)) {\n        cout << "Holds string" << endl;\n    }\n    \n    // Alternative with visitor (std::visit)\n    auto visitor = [](auto&& arg) {\n        cout << "Value: " << arg << endl;\n    };\n    visit(visitor, data);\n    \n    // Getting with default\n    string* str = get_if<string>(&data);\n    if (str) {\n        cout << "String value: " << *str << endl;\n    }\n    \n    return 0;\n}',
  hint: 'variant is safer than union, providing type checking.'
},
{
  id: 'cpp_variables_45',
  topicId: 'cpp_variables',
  question: 'Use std::any for type-safe container of any type (C++17).',
  mathSolution: 'any can hold any copyable type.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    value = 42;\n    cout << "Holds int: " << any_cast<int>(value) << endl;\n    \n    value = 3.14;\n    cout << "Holds double: " << any_cast<double>(value) << endl;\n    \n    value = string("Hello");\n    cout << "Holds string: " << any_cast<string>(value) << endl;\n    \n    // Check type\n    if (value.type() == typeid(string)) {\n        cout << "Contains string" << endl;\n    }\n    \n    // Safe access\n    if (auto ptr = any_cast<string>(&value)) {\n        cout << "Safe access: " << *ptr << endl;\n    }\n    \n    // Reset\n    value.reset();\n    cout << "Has value: " << value.has_value() << endl;\n    \n    return 0;\n}',
  hint: 'any provides type-safe storage for any value, similar to void* but safer.'
},
{
  id: 'cpp_variables_46',
  topicId: 'cpp_variables',
  question: 'Use structured bindings with pair/tuple (C++17).',
  mathSolution: 'Structured bindings unpack into multiple variables.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Pair\n    pair<int, string> p = {1, "Apple"};\n    auto [id, name] = p;\n    cout << "ID: " << id << ", Name: " << name << endl;\n    \n    // Tuple\n    tuple<int, double, string, char> t = {100, 3.14, "Hello", \'X\'};\n    auto [num, pi, msg, ch] = t;\n    cout << "num: " << num << ", pi: " << pi << ", msg: " << msg << ", ch: " << ch << endl;\n    \n    // Map iteration\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 35}};\n    for (const auto& [person, age] : ages) {\n        cout << person << " is " << age << " years old" << endl;\n    }\n    \n    // Function returning tuple\n    auto getData = []() -> tuple<int, double, string> {\n        return {42, 9.81, "gravity"};\n    };\n    \n    auto [val, g, desc] = getData();\n    cout << "Value: " << val << ", g: " << g << ", desc: " << desc << endl;\n    \n    return 0;\n}',
  hint: 'Structured bindings make code more readable when working with compound types.'
},
{
  id: 'cpp_variables_47',
  topicId: 'cpp_variables',
  question: 'Initialize aggregates using designated initializers (C++20).',
  mathSolution: 'Designated initializers allow named initialization of struct members.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Point {\n    double x;\n    double y;\n    double z = 0.0;  // Default member initializer\n};\n\nstruct Person {\n    string name;\n    int age;\n    string city;\n};\n\nstruct Address {\n    string street;\n    int zip;\n    string country = "USA";\n};\n\nint main() {\n    // Designated initializers (C++20)\n    Point p1 = {.x = 10.0, .y = 20.0};\n    Point p2 = {.y = 30.0, .x = 40.0};  // Order doesn\'t matter\n    \n    cout << "p1: (" << p1.x << ", " << p1.y << ", " << p1.z << ")" << endl;\n    cout << "p2: (" << p2.x << ", " << p2.y << ", " << p2.z << ")" << endl;\n    \n    Person person = {.name = "John", .age = 30, .city = "NYC"};\n    cout << "Person: " << person.name << ", " << person.age << ", " << person.city << endl;\n    \n    // Mixed designated and regular initializers (some compilers)\n    Address addr = {.street = "Main St", .zip = 10001};\n    cout << "Address: " << addr.street << ", " << addr.zip << ", " << addr.country << endl;\n    \n    return 0;\n}',
  hint: 'Designated initializers (C++20) improve code readability for structs.'
},
{
  id: 'cpp_variables_48',
  topicId: 'cpp_variables',
  question: 'Understand lifetime of temporary objects.',
  mathSolution: 'Temporary objects are destroyed at the end of full expression.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Widget {\npublic:\n    int data;\n    Widget(int d) : data(d) {\n        cout << "Widget(" << data << ") created" << endl;\n    }\n    ~Widget() {\n        cout << "Widget destroyed" << endl;\n    }\n    \n    Widget operator+(const Widget& other) const {\n        return Widget(data + other.data);\n    }\n};\n\nint main() {\n    {\n        Widget w1(10);\n        Widget w2(20);\n        Widget w3 = w1 + w2;  // Temporary for w1 + w2\n        cout << "Sum: " << w3.data << endl;\n    }\n    \n    cout << "--- End of block ---" << endl;\n    \n    // Temporary lifetime extension with const reference\n    const Widget& ref = Widget(100);  // Lifetime extended\n    cout << "Ref value: " << ref.data << endl;\n    \n    return 0;\n}',
  hint: 'Temporary objects are destroyed immediately unless bound to const reference.'
},
{
  id: 'cpp_variables_49',
  topicId: 'cpp_variables',
  question: 'Create complete variable demonstration program.',
  mathSolution: 'Combine multiple variable concepts in one program.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\n#include <memory>\nusing namespace std;\n\n// Global variable\nint globalCount = 0;\n\n// Class with static member\nclass Counter {\nprivate:\n    static int totalInstances;\n    int instanceId;\n    \npublic:\n    Counter() : instanceId(++totalInstances) {}\n    \n    static int getTotalInstances() { return totalInstances; }\n    int getId() const { return instanceId; }\n};\n\nint Counter::totalInstances = 0;\n\nint main() {\n    // Primitive types\n    int integer = 42;\n    double floating = 3.14159;\n    char character = \'A\';\n    bool boolean = true;\n    \n    // Modern types\n    auto deduced = "auto deduction";\n    constexpr int compileTime = 100;\n    \n    // String\n    string text = "Hello, C++ Variables!";\n    \n    // Container\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    \n    // Pointer and reference\n    int *ptr = &integer;\n    int &ref = integer;\n    \n    // Smart pointer\n    auto smartPtr = make_unique<string>(text);\n    \n    // Static local\n    static int callCount = 0;\n    callCount++;\n    \n    // Class instances\n    Counter c1, c2, c3;\n    \n    // Output all variables\n    cout << "=== Variable Demonstration ===" << endl;\n    cout << "Integer: " << integer << endl;\n    cout << "Double: " << floating << endl;\n    cout << "Char: " << character << endl;\n    cout << "Bool: " << boolalpha << boolean << endl;\n    cout << "Auto: " << deduced << endl;\n    cout << "Constexpr: " << compileTime << endl;\n    cout << "String: " << text << endl;\n    cout << "Vector size: " << numbers.size() << endl;\n    cout << "Pointer value: " << *ptr << endl;\n    cout << "Reference value: " << ref << endl;\n    cout << "Smart pointer: " << *smartPtr << endl;\n    cout << "Static call count: " << callCount << endl;\n    cout << "Global count: " << globalCount << endl;\n    cout << "Counter instances: " << Counter::getTotalInstances() << endl;\n    \n    // Size information\n    cout << "\\n=== Type Sizes ===" << endl;\n    cout << "sizeof(int): " << sizeof(int) << " bytes" << endl;\n    cout << "sizeof(double): " << sizeof(double) << " bytes" << endl;\n    cout << "sizeof(char): " << sizeof(char) << " bytes" << endl;\n    cout << "sizeof(bool): " << sizeof(bool) << " bytes" << endl;\n    cout << "sizeof(string): " << sizeof(string) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'C++ provides diverse variable types for different programming needs.'
},
{
  id: 'cpp_variables_50',
  topicId: 'cpp_variables',
  question: 'Demonstrate variable scope and shadowing with local and global variables.',
  mathSolution: 'Local variables shadow global variables within their scope.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint globalVar = 100;\n\nint main() {\n    int localVar = 50;\n    int globalVar = 200;  // Shadows global variable\n    \n    cout << "Local variable: " << localVar << endl;\n    cout << "Shadowed globalVar: " << globalVar << endl;\n    cout << "Actual global (::globalVar): " << ::globalVar << endl;\n    \n    {\n        int blockVar = 25;\n        cout << "Block variable: " << blockVar << endl;\n    }\n    // cout << blockVar;  // Error: not in scope\n    \n    return 0;\n}',
  hint: 'Variables are only accessible within their declared scope.'
}
);