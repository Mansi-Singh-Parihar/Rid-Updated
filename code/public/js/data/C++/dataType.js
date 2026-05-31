QuizData.questions.push(
{
  id: 'cpp_datatypes_1',
  topicId: 'cpp_datatypes',
  question: 'Declare and use int data type for whole numbers.',
  mathSolution: 'int stores integer values (positive, negative, or zero).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    int temperature = -10;\n    int count = 1000;\n    \n    cout << "Age: " << age << endl;\n    cout << "Temperature: " << temperature << endl;\n    cout << "Count: " << count << endl;\n    return 0;\n}',
  hint: 'int typically uses 4 bytes (range: -2,147,483,648 to 2,147,483,647).'
},
{
  id: 'cpp_datatypes_2',
  topicId: 'cpp_datatypes',
  question: 'Use short int for smaller integer range.',
  mathSolution: 'short uses less memory but has smaller range.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    short smallNumber = 32767;\n    short negativeNumber = -32768;\n    \n    cout << "Small number: " << smallNumber << endl;\n    cout << "Negative number: " << negativeNumber << endl;\n    cout << "Size of short: " << sizeof(short) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'short is 2 bytes, range: -32,768 to 32,767.'
},
{
  id: 'cpp_datatypes_3',
  topicId: 'cpp_datatypes',
  question: 'Use long int for larger integer values.',
  mathSolution: 'long provides extended range for integers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    long population = 7800000000L;\n    long largeNumber = 2147483647L;\n    \n    cout << "World population: " << population << endl;\n    cout << "Large number: " << largeNumber << endl;\n    cout << "Size of long: " << sizeof(long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long is typically 4 or 8 bytes depending on system.'
},
{
  id: 'cpp_datatypes_4',
  topicId: 'cpp_datatypes',
  question: 'Use long long int for very large integers.',
  mathSolution: 'long long provides maximum integer range.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    long long bigNumber = 9223372036854775807LL;\n    long long distanceToGalaxy = 9460730472580800LL;\n    \n    cout << "Max long long: " << bigNumber << endl;\n    cout << "Distance in km: " << distanceToGalaxy << endl;\n    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long long is 8 bytes, range: -9.2e18 to 9.2e18.'
},
{
  id: 'cpp_datatypes_5',
  topicId: 'cpp_datatypes',
  question: 'Use unsigned int for non-negative integers.',
  mathSolution: 'unsigned types store only zero or positive values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int positive = 4294967295U;\n    unsigned int count = 100;\n    \n    cout << "Maximum unsigned: " << positive << endl;\n    cout << "Count: " << count << endl;\n    cout << "Size of unsigned int: " << sizeof(unsigned int) << " bytes" << endl;\n    \n    // unsigned int negative = -5;  // Wraps around to large positive\n    return 0;\n}',
  hint: 'Unsigned types have double the positive range of signed types.'
},
{
  id: 'cpp_datatypes_6',
  topicId: 'cpp_datatypes',
  question: 'Use float for single-precision floating-point numbers.',
  mathSolution: 'float stores decimal numbers with 6-7 decimal digits precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    float price = 19.99f;\n    float pi = 3.14159f;\n    float scientific = 1.23e-4f;\n    \n    cout << fixed << setprecision(2);\n    cout << "Price: $" << price << endl;\n    cout << "PI: " << pi << endl;\n    cout << "Scientific: " << scientific << endl;\n    cout << "Size of float: " << sizeof(float) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'float has about 6-7 decimal digits of precision, uses 4 bytes.'
},
{
  id: 'cpp_datatypes_7',
  topicId: 'cpp_datatypes',
  question: 'Use double for double-precision floating-point numbers.',
  mathSolution: 'double provides about 15 decimal digits precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double pi = 3.141592653589793;\n    double avogadro = 6.02214076e23;\n    double small = 1.23456789012345e-10;\n    \n    cout << setprecision(15);\n    cout << "PI: " << pi << endl;\n    cout << "Avogadro\'s number: " << avogadro << endl;\n    cout << "Small number: " << small << endl;\n    cout << "Size of double: " << sizeof(double) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'double has about 15-16 decimal digits precision, uses 8 bytes.'
},
{
  id: 'cpp_datatypes_8',
  topicId: 'cpp_datatypes',
  question: 'Use long double for extended precision floating-point.',
  mathSolution: 'long double provides highest precision (80 bits on some systems).',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    long double pi = 3.14159265358979323846L;\n    long double precise = 1.234567890123456789L;\n    \n    cout << setprecision(20);\n    cout << "Long double PI: " << pi << endl;\n    cout << "Precise value: " << precise << endl;\n    cout << "Size of long double: " << sizeof(long double) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long double precision varies (80 bits on x86, 16 bytes).'
},
{
  id: 'cpp_datatypes_9',
  topicId: 'cpp_datatypes',
  question: 'Use char for single character storage.',
  mathSolution: 'char stores ASCII characters (1 byte).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char letter = \'A\';\n    char digit = \'9\';\n    char symbol = \'$\';\n    char newline = \'\\n\';\n    \n    cout << "Letter: " << letter << endl;\n    cout << "Digit: " << digit << endl;\n    cout << "Symbol: " << symbol << endl;\n    cout << "ASCII value of A: " << static_cast<int>(letter) << endl;\n    cout << "Size of char: " << sizeof(char) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'char is 1 byte, stores values from -128 to 127 or 0 to 255.'
},
{
  id: 'cpp_datatypes_10',
  topicId: 'cpp_datatypes',
  question: 'Use signed char and unsigned char variants.',
  mathSolution: 'signed char can store negative values, unsigned char only positive.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    signed char sChar = -100;\n    unsigned char uChar = 200;\n    \n    cout << "Signed char: " << static_cast<int>(sChar) << endl;\n    cout << "Unsigned char: " << static_cast<int>(uChar) << endl;\n    cout << "Size of signed char: " << sizeof(signed char) << " bytes" << endl;\n    cout << "Size of unsigned char: " << sizeof(unsigned char) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'unsigned char range: 0-255, signed char range: -128 to 127.'
},
{
  id: 'cpp_datatypes_11',
  topicId: 'cpp_datatypes',
  question: 'Use bool data type for boolean values.',
  mathSolution: 'bool stores true or false (1 byte).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isReady = true;\n    bool isComplete = false;\n    \n    cout << "isReady: " << isReady << endl;        // prints 1\n    cout << "isComplete: " << isComplete << endl;  // prints 0\n    cout << boolalpha;  // Format flag for true/false\n    cout << "isReady: " << isReady << endl;        // prints true\n    cout << "isComplete: " << isComplete << endl;  // prints false\n    cout << "Size of bool: " << sizeof(bool) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'bool is 1 byte and can be true or false (1 or 0).'
},
{
  id: 'cpp_datatypes_12',
  topicId: 'cpp_datatypes',
  question: 'Use wchar_t for wide characters (Unicode).',
  mathSolution: 'wchar_t stores wide characters for international text.',
  codeSolution: '#include <iostream>\n#include <locale>\nusing namespace std;\n\nint main() {\n    wchar_t wc = L\'A\';\n    wchar_t unicode = L\'\\u03A9\';  // Greek Omega\n    const wchar_t* wstr = L"Hello World";\n    \n    wcout.imbue(locale(""));\n    wcout << L"Wide char: " << wc << endl;\n    wcout << L"Unicode char: " << unicode << endl;\n    wcout << L"Wide string: " << wstr << endl;\n    cout << "Size of wchar_t: " << sizeof(wchar_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'wchar_t size is platform-dependent (2 bytes on Windows, 4 on Linux).'
},
{
  id: 'cpp_datatypes_13',
  topicId: 'cpp_datatypes',
  question: 'Use char16_t and char32_t for fixed-width Unicode.',
  mathSolution: 'char16_t (UTF-16) and char32_t (UTF-32) for Unicode.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char16_t u16char = u\'A\';\n    char32_t u32char = U\'\\u03A9\';\n    \n    const char16_t* u16str = u"UTF-16 string";\n    const char32_t* u32str = U"UTF-32 string";\n    \n    cout << "Size of char16_t: " << sizeof(char16_t) << " bytes" << endl;\n    cout << "Size of char32_t: " << sizeof(char32_t) << " bytes" << endl;\n    cout << "char16_t value: " << static_cast<int>(u16char) << endl;\n    cout << "char32_t value: " << static_cast<int>(u32char) << endl;\n    \n    return 0;\n}',
  hint: 'char16_t is 2 bytes (UTF-16), char32_t is 4 bytes (UTF-32).'
},
{
  id: 'cpp_datatypes_14',
  topicId: 'cpp_datatypes',
  question: 'Use size_t for sizes and indices (unsigned).',
  mathSolution: 'size_t is platform-independent unsigned integer for sizes.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    size_t arrSize = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Array size: " << arrSize << endl;\n    \n    for (size_t i = 0; i < arrSize; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    size_t vecSize = vec.size();\n    cout << "Vector size: " << vecSize << endl;\n    cout << "Size of size_t: " << sizeof(size_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'size_t is unsigned and large enough to represent any object size.'
},
{
  id: 'cpp_datatypes_15',
  topicId: 'cpp_datatypes',
  question: 'Use ptrdiff_t for pointer difference.',
  mathSolution: 'ptrdiff_t stores signed difference between pointers.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int* start = &arr[0];\n    int* end = &arr[4];\n    \n    ptrdiff_t diff = end - start;\n    \n    cout << "Pointer difference: " << diff << endl;\n    cout << "Size of ptrdiff_t: " << sizeof(ptrdiff_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'ptrdiff_t can be negative (signed) unlike size_t.'
},
{
  id: 'cpp_datatypes_16',
  topicId: 'cpp_datatypes',
  question: 'Use nullptr_t for null pointer type.',
  mathSolution: 'nullptr_t is the type of nullptr literal.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    nullptr_t null_ptr = nullptr;\n    int* ptr = nullptr;\n    \n    if (ptr == null_ptr) {\n        cout << "ptr is null" << endl;\n    }\n    \n    cout << "Size of nullptr_t: " << sizeof(nullptr_t) << " bytes" << endl;\n    \n    // Overload resolution with nullptr\n    void func(int*) { cout << "Pointer overload" << endl; }\n    void func(nullptr_t) { cout << "nullptr_t overload" << endl; }\n    \n    func(nullptr);  // Calls nullptr_t overload\n    \n    return 0;\n}',
  hint: 'nullptr_t is a distinct type, not an integer type.'
},
{
  id: 'cpp_datatypes_17',
  topicId: 'cpp_datatypes',
  question: 'Create and use typedef aliases for data types.',
  mathSolution: 'typedef creates alternative names for existing types.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntypedef unsigned long ulong;\ntypedef vector<int> IntVector;\ntypedef int (*FunctionPtr)(int, int);\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    ulong large = 1000000UL;\n    IntVector numbers = {1, 2, 3, 4, 5};\n    FunctionPtr ptr = &add;\n    \n    cout << "Large number: " << large << endl;\n    cout << "Vector size: " << numbers.size() << endl;\n    cout << "Function result: " << ptr(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'typedef improves code readability and portability.'
},
{
  id: 'cpp_datatypes_18',
  topicId: 'cpp_datatypes',
  question: 'Use using keyword for type aliases (modern C++).',
  mathSolution: 'using provides clearer syntax especially for templates.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\nusing namespace std;\n\nusing ulong = unsigned long;\nusing IntVec = vector<int>;\nusing StringMap = map<string, int>;\n\ntemplate<typename T>\nusing Vec = vector<T>;\n\nint main() {\n    ulong count = 1000UL;\n    IntVec numbers = {1, 2, 3, 4, 5};\n    StringMap ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    Vec<double> doubles = {1.1, 2.2, 3.3};\n    \n    cout << "Count: " << count << endl;\n    cout << "Numbers size: " << numbers.size() << endl;\n    cout << "Ages size: " << ages.size() << endl;\n    cout << "Doubles size: " << doubles.size() << endl;\n    \n    return 0;\n}',
  hint: 'using is more readable than typedef, especially for function pointers.'
},
{
  id: 'cpp_datatypes_19',
  topicId: 'cpp_datatypes',
  question: 'Use enum for named integer constants.',
  mathSolution: 'enum defines a set of named integral constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum Color { RED, GREEN, BLUE };\nenum Status { IDLE = 0, ACTIVE = 1, STOPPED = 2 };\nenum Days { MON = 1, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Status current = ACTIVE;\n    Days today = WED;\n    \n    cout << "Color value: " << myColor << endl;     // 1\n    cout << "Status value: " << current << endl;    // 1\n    cout << "Day value: " << today << endl;         // 3\n    \n    if (myColor == GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'enum values start at 0 by default and increment by 1.'
},
{
  id: 'cpp_datatypes_20',
  topicId: 'cpp_datatypes',
  question: 'Use enum class (scoped enums) for type safety (C++11).',
  mathSolution: 'enum class provides strong type safety and scoping.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Color { RED, GREEN, BLUE };\nenum class TrafficLight { RED, YELLOW, GREEN };\nenum class Status : char { OK = \'O\', ERROR = \'E\', WAITING = \'W\' };\n\nint main() {\n    Color myColor = Color::GREEN;\n    TrafficLight light = TrafficLight::GREEN;\n    Status status = Status::OK;\n    \n    // Cannot compare different enum classes\n    // if (myColor == light)  // Error: different types\n    \n    if (myColor == Color::GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    cout << "Status value: " << static_cast<char>(status) << endl;\n    \n    return 0;\n}',
  hint: 'enum class prevents naming conflicts and implicit conversions.'
},
{
  id: 'cpp_datatypes_21',
  topicId: 'cpp_datatypes',
  question: 'Create enumerations with explicit values.',
  mathSolution: 'Assign specific values to enum constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum HttpStatus {\n    OK = 200,\n    CREATED = 201,\n    ACCEPTED = 202,\n    BAD_REQUEST = 400,\n    UNAUTHORIZED = 401,\n    FORBIDDEN = 403,\n    NOT_FOUND = 404,\n    INTERNAL_ERROR = 500\n};\n\nenum BitFlags {\n    FLAG_READ = 1 << 0,    // 1\n    FLAG_WRITE = 1 << 1,   // 2\n    FLAG_EXECUTE = 1 << 2, // 4\n    FLAG_DELETE = 1 << 3    // 8\n};\n\nint main() {\n    HttpStatus error = NOT_FOUND;\n    int flags = FLAG_READ | FLAG_WRITE;\n    \n    cout << "Error code: " << error << endl;\n    cout << "Flags: " << flags << endl;\n    \n    if (flags & FLAG_READ) {\n        cout << "Read permission granted" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Enum values can be any integer constant expression.'
},
{
  id: 'cpp_datatypes_22',
  topicId: 'cpp_datatypes',
  question: 'Use std::string for string manipulation.',
  mathSolution: 'string is a dynamic string class from STL.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello";\n    string str2 = "World";\n    string str3 = str1 + " " + str2;\n    \n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    cout << "Concatenated: " << str3 << endl;\n    cout << "Length: " << str3.length() << endl;\n    cout << "First char: " << str3[0] << endl;\n    cout << "Substring: " << str3.substr(0, 5) << endl;\n    \n    if (str1 == "Hello") {\n        cout << "Strings match" << endl;\n    }\n    \n    return 0;\n}',
  hint: '#include <string> is required for std::string type.'
},
{
  id: 'cpp_datatypes_23',
  topicId: 'cpp_datatypes',
  question: 'Use std::vector for dynamic arrays.',
  mathSolution: 'vector is a dynamic array that grows automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers;\n    \n    numbers.push_back(10);\n    numbers.push_back(20);\n    numbers.push_back(30);\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "Capacity: " << numbers.capacity() << endl;\n    cout << "Elements: ";\n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    numbers.pop_back();\n    cout << "After pop, size: " << numbers.size() << endl;\n    \n    return 0;\n}',
  hint: 'vector provides O(1) amortized push_back and random access.'
},
{
  id: 'cpp_datatypes_24',
  topicId: 'cpp_datatypes',
  question: 'Use std::array for fixed-size arrays.',
  mathSolution: 'array is a fixed-size container with STL interface.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\nint main() {\n    array<int, 5> numbers = {10, 20, 30, 40, 50};\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "First element: " << numbers.front() << endl;\n    cout << "Last element: " << numbers.back() << endl;\n    \n    for (size_t i = 0; i < numbers.size(); i++) {\n        cout << numbers[i] << " ";\n    }\n    cout << endl;\n    \n    // bounds checking\n    try {\n        cout << numbers.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Out of range: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'array has fixed size determined at compile time.'
},
{
  id: 'cpp_datatypes_25',
  topicId: 'cpp_datatypes',
  question: 'Use std::pair for storing two values.',
  mathSolution: 'pair holds two heterogeneous values.',
  codeSolution: '#include <iostream>\n#include <utility>\n#include <string>\nusing namespace std;\n\nint main() {\n    pair<int, string> p1(1, "Apple");\n    pair<int, string> p2 = {2, "Banana"};\n    auto p3 = make_pair(3, "Cherry");\n    \n    cout << "p1: " << p1.first << ", " << p1.second << endl;\n    cout << "p2: " << p2.first << ", " << p2.second << endl;\n    cout << "p3: " << p3.first << ", " << p3.second << endl;\n    \n    // Comparison\n    if (p1 < p2) {\n        cout << "p1 comes before p2" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'pair is useful for returning two values from a function.'
},
{
  id: 'cpp_datatypes_26',
  topicId: 'cpp_datatypes',
  question: 'Use std::tuple for storing multiple values.',
  mathSolution: 'tuple can hold any number of heterogeneous values.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\nint main() {\n    tuple<int, double, string, char> t1(42, 3.14, "Hello", \'X\');\n    auto t2 = make_tuple(100, 9.81, "Gravity", \'G\');\n    \n    cout << "Tuple size: " << tuple_size<decltype(t1)>::value << endl;\n    cout << "Element 0: " << get<0>(t1) << endl;\n    cout << "Element 1: " << get<1>(t1) << endl;\n    cout << "Element 2: " << get<2>(t1) << endl;\n    cout << "Element 3: " << get<3>(t1) << endl;\n    \n    // Unpack with structured binding (C++17)\n    auto [num, pi, msg, ch] = t2;\n    cout << "Unpacked: " << num << ", " << pi << ", " << msg << ", " << ch << endl;\n    \n    return 0;\n}',
  hint: 'tuple is a fixed-size collection of heterogeneous values.'
},
{
  id: 'cpp_datatypes_27',
  topicId: 'cpp_datatypes',
  question: 'Use std::optional for values that may not exist (C++17).',
  mathSolution: 'optional can hold a value or represent "no value".',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\nusing namespace std;\n\noptional<int> findUser(const string& name) {\n    if (name == "John") return 42;\n    if (name == "Alice") return 100;\n    return nullopt;\n}\n\nint main() {\n    auto user1 = findUser("John");\n    auto user2 = findUser("Unknown");\n    \n    if (user1.has_value()) {\n        cout << "User found: " << *user1 << endl;\n    }\n    \n    cout << "Value or default: " << user2.value_or(-1) << endl;\n    \n    // Optional with type conversion\n    optional<int> opt1 = 5;\n    optional<int> opt2 = nullopt;\n    \n    cout << "opt1: " << opt1.value_or(0) << endl;\n    cout << "opt2: " << opt2.value_or(999) << endl;\n    \n    return 0;\n}',
  hint: 'optional avoids sentinel values and expresses intent clearly.'
},
{
  id: 'cpp_datatypes_28',
  topicId: 'cpp_datatypes',
  question: 'Use std::variant for type-safe union (C++17).',
  mathSolution: 'variant holds one of several possible types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    data = 42;\n    cout << "Holds int: " << get<int>(data) << endl;\n    \n    data = 3.14159;\n    cout << "Holds double: " << get<double>(data) << endl;\n    \n    data = "Hello C++";\n    cout << "Holds string: " << get<string>(data) << endl;\n    \n    // Type checking\n    if (holds_alternative<string>(data)) {\n        cout << "Currently holds a string" << endl;\n    }\n    \n    // Visitor pattern\n    auto visitor = [](auto&& arg) {\n        cout << "Visitor: " << arg << endl;\n    };\n    visit(visitor, data);\n    \n    return 0;\n}',
  hint: 'variant is type-safe and prevents type-related bugs.'
},
{
  id: 'cpp_datatypes_29',
  topicId: 'cpp_datatypes',
  question: 'Use std::any for storing any type (C++17).',
  mathSolution: 'any can hold any copyable type.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    value = 42;\n    cout << "Integer: " << any_cast<int>(value) << endl;\n    \n    value = 3.14159;\n    cout << "Double: " << any_cast<double>(value) << endl;\n    \n    value = string("Hello");\n    cout << "String: " << any_cast<string>(value) << endl;\n    \n    // Type checking\n    if (value.type() == typeid(string)) {\n        cout << "Contains string type" << endl;\n    }\n    \n    // Safe access\n    if (auto ptr = any_cast<string>(&value)) {\n        cout << "Safe access: " << *ptr << endl;\n    }\n    \n    value.reset();\n    cout << "Has value: " << value.has_value() << endl;\n    \n    return 0;\n}',
  hint: 'any is a type-safe container for single values of any type.'
},
{
  id: 'cpp_datatypes_30',
  topicId: 'cpp_datatypes',
  question: 'Use std::byte for raw memory operations (C++17).',
  mathSolution: 'byte represents a byte of memory, not character.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    byte b1{0x0F};  // Hexadecimal initialization\n    byte b2{0b00001111};  // Binary initialization\n    \n    byte b3 = b1 | b2;    // Bitwise OR\n    byte b4 = b1 & b2;    // Bitwise AND\n    byte b5 = b1 ^ b2;    // Bitwise XOR\n    \n    cout << "b1: " << hex << static_cast<int>(b1) << endl;\n    cout << "b2: " << static_cast<int>(b2) << endl;\n    cout << "b3 (OR): " << static_cast<int>(b3) << endl;\n    cout << "b4 (AND): " << static_cast<int>(b4) << endl;\n    \n    // Convert from int\n    byte fromInt = static_cast<byte>(0xAB);\n    int toInt = static_cast<int>(fromInt);\n    \n    return 0;\n}',
  hint: 'byte is preferred over char for raw byte manipulation.'
},
{
  id: 'cpp_datatypes_31',
  topicId: 'cpp_datatypes',
  question: 'Check data type sizes using sizeof operator.',
  mathSolution: 'sizeof returns size in bytes of type or variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "=== Fundamental Types ===" << endl;\n    cout << "sizeof(char): " << sizeof(char) << " bytes" << endl;\n    cout << "sizeof(short): " << sizeof(short) << " bytes" << endl;\n    cout << "sizeof(int): " << sizeof(int) << " bytes" << endl;\n    cout << "sizeof(long): " << sizeof(long) << " bytes" << endl;\n    cout << "sizeof(long long): " << sizeof(long long) << " bytes" << endl;\n    \n    cout << "\\n=== Floating Types ===" << endl;\n    cout << "sizeof(float): " << sizeof(float) << " bytes" << endl;\n    cout << "sizeof(double): " << sizeof(double) << " bytes" << endl;\n    cout << "sizeof(long double): " << sizeof(long double) << " bytes" << endl;\n    \n    cout << "\\n=== Other Types ===" << endl;\n    cout << "sizeof(bool): " << sizeof(bool) << " bytes" << endl;\n    cout << "sizeof(void*): " << sizeof(void*) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'sizeof is an operator, not a function, evaluated at compile time.'
},
{
  id: 'cpp_datatypes_32',
  topicId: 'cpp_datatypes',
  question: 'Use typeid to get type information at runtime.',
  mathSolution: 'typeid returns type_info object describing type.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    int x = 42;\n    double y = 3.14;\n    string s = "Hello";\n    \n    cout << "Type of x: " << typeid(x).name() << endl;\n    cout << "Type of y: " << typeid(y).name() << endl;\n    cout << "Type of s: " << typeid(s).name() << endl;\n    \n    // Polymorphic types\n    Base* base = new Derived();\n    cout << "Dynamic type: " << typeid(*base).name() << endl;\n    \n    // Compare types\n    if (typeid(x) == typeid(int)) {\n        cout << "x is int" << endl;\n    }\n    \n    delete base;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI (Runtime Type Information) to be enabled.'
},
{
  id: 'cpp_datatypes_33',
  topicId: 'cpp_datatypes',
  question: 'Use decltype for type deduction at compile time.',
  mathSolution: 'decltype deduces the type of an expression.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    decltype(a) c = a;           // c is int\n    decltype(b) d = b;           // d is double\n    decltype(a + b) e = a + b;   // e is double (promotion)\n    \n    cout << "Type of c: " << typeid(c).name() << endl;\n    cout << "Type of d: " << typeid(d).name() << endl;\n    cout << "Type of e: " << typeid(e).name() << endl;\n    \n    // decltype with parentheses\n    decltype((a)) ref = a;  // reference to int\n    ref = 20;\n    cout << "a modified via reference: " << a << endl;\n    \n    // decltype with function\n    auto add = [](int x, int y) -> decltype(x + y) {\n        return x + y;\n    };\n    \n    cout << "Add result: " << add(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful in generic programming and trailing return types.'
},
{
  id: 'cpp_datatypes_34',
  topicId: 'cpp_datatypes',
  question: 'Check type compatibility with is_same type trait.',
  mathSolution: 'is_same checks if two types are identical at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nint main() {\n    cout << boolalpha;\n    \n    cout << "int and int: " << is_same<int, int>::value << endl;\n    cout << "int and long: " << is_same<int, long>::value << endl;\n    cout << "int and const int: " << is_same<int, const int>::value << endl;\n    \n    // With decltype\n    int x = 10;\n    cout << "x type and int: " << is_same<decltype(x), int>::value << endl;\n    \n    // Removing const\n    cout << "int and const int (with remove_const): "\n         << is_same<int, remove_const<const int>::type>::value << endl;\n    \n    // With auto\n    auto y = 20;\n    cout << "auto y is int: " << is_same<decltype(y), int>::value << endl;\n    \n    return 0;\n}',
  hint: 'Type traits enable compile-time type introspection and optimization.'
},
{
  id: 'cpp_datatypes_35',
  topicId: 'cpp_datatypes',
  question: 'Use std::nullptr_t for null pointer type.',
  mathSolution: 'nullptr_t is the type of the nullptr literal.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nvoid func(int) { cout << "int overload" << endl; }\nvoid func(char*) { cout << "char* overload" << endl; }\nvoid func(nullptr_t) { cout << "nullptr_t overload" << endl; }\n\nint main() {\n    int* ptr = nullptr;\n    nullptr_t null_val = nullptr;\n    \n    cout << "Size of nullptr_t: " << sizeof(nullptr_t) << " bytes" << endl;\n    \n    if (ptr == null_val) {\n        cout << "Pointer is null" << endl;\n    }\n    \n    // Function overload resolution\n    func(0);        // calls int overload\n    func(nullptr);  // calls nullptr_t overload\n    func(NULL);     // may call int overload (ambiguous in C++)\n    \n    return 0;\n}',
  hint: 'nullptr is type-safe and distinguishes null pointer from integer 0.'
},
{
  "id": "cpp_datatypes_36",
  "topicId": "cpp_datatypes",
  "question": "Use auto for automatic type deduction.",
  "mathSolution": "auto deduces type from initializer expression.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto i = 42;           // int\n    auto d = 3.14;         // double\n    auto c = 'A';          // char\n    auto s = \"Hello\";      // const char*\n    auto v = vector<int>{1, 2, 3};  // vector<int>\n    \n    // With const and references\n    const auto ci = i;\n    auto& ri = i;\n    auto&& rri = 42;  // forwarding reference\n    \n    // Range-based for loops\n    vector<string> names = {\"Alice\", \"Bob\", \"Charlie\"};\n    for (const auto& name : names) {\n        cout << name << endl;\n    }\n    \n    // Complex types\n    map<string, vector<int>> data;\n    data[\"key\"] = {1, 2, 3};\n    auto it = data.begin();  // iterator type\n    \n    return 0;\n}",
  "hint": "auto makes code more maintainable and reduces verbosity."
},
{
  "id": "cpp_datatypes_37",
  "topicId": "cpp_datatypes",
  "question": "Understand integer promotion and conversion rules.",
  "mathSolution": "Smaller integer types are promoted to int in expressions.",
  "codeSolution": "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nint main() {\n    char c = 'A';\n    short s = 100;\n    int i = 1000;\n    unsigned int u = 2000;\n    long l = 3000L;\n    \n    // Integer promotion\n    auto result1 = c + s;    // char and short promoted to int\n    cout << \"c + s type: \" << typeid(result1).name() << endl;\n    \n    // Usual arithmetic conversions\n    auto result2 = i + u;    // int converted to unsigned\n    cout << \"i + u type: \" << typeid(result2).name() << endl;\n    \n    auto result3 = i + l;    // int converted to long\n    cout << \"i + l type: \" << typeid(result3).name() << endl;\n    \n    // Mixed signed/unsigned\n    int signedNum = -1;\n    unsigned int unsignedNum = 1;\n    auto result4 = signedNum + unsignedNum;\n    cout << \"Signed + unsigned: \" << result4 << endl;  // Large number\n    \n    return 0;\n}",
  "hint": "Understand implicit conversions to avoid unexpected results."
},
{
  id: 'cpp_datatypes_38',
  topicId: 'cpp_datatypes',
  question: 'Create and use fixed-width integer types (C++11).',
  mathSolution: 'Fixed-width types guarantee exact size across platforms.',
  codeSolution: '#include <iostream>\n#include <cstdint>\nusing namespace std;\n\nint main() {\n    int8_t i8 = -128;\n    uint8_t u8 = 255;\n    int16_t i16 = -32768;\n    uint16_t u16 = 65535;\n    int32_t i32 = -2147483648LL;\n    uint32_t u32 = 4294967295U;\n    int64_t i64 = -9223372036854775807LL - 1;\n    uint64_t u64 = 18446744073709551615ULL;\n    \n    cout << \"int8_t: \" << static_cast<int>(i8) << endl;\n    cout << \"uint8_t: \" << static_cast<int>(u8) << endl;\n    cout << \"int16_t: \" << i16 << endl;\n    cout << \"uint16_t: \" << u16 << endl;\n    cout << \"int32_t: \" << i32 << endl;\n    cout << \"uint32_t: \" << u32 << endl;\n    cout << \"int64_t: \" << i64 << endl;\n    cout << \"uint64_t: \" << u64 << endl;\n    \n    cout << \"Size of int32_t: \" << sizeof(int32_t) << \" bytes\" << endl;\n    \n    return 0;\n}',
  hint: 'Fixed-width types ensure consistent behavior across platforms.'
},
{
  id: 'cpp_datatypes_39',
  topicId: 'cpp_datatypes',
  question: 'Use std::initializer_list for uniform initialization.',
  mathSolution: 'initializer_list allows list initialization of containers.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\n#include <vector>\nusing namespace std;\n\nclass MyClass {\npublic:\n    MyClass(initializer_list<int> list) {\n        cout << "Elements: \";\n        for (int val : list) {\n            cout << val << \" \";\n        }\n        cout << endl;\n    }\n};\n\nvoid printNumbers(initializer_list<int> nums) {\n    cout << \"Count: \" << nums.size() << endl;\n    for (int n : nums) {\n        cout << n << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    MyClass obj{1, 2, 3, 4, 5};\n    \n    printNumbers({10, 20, 30});\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    int arr[]{1, 2, 3, 4, 5};\n    \n    return 0;\n}',
  hint: 'initializer_list enables uniform initialization across types.'
},
{
  id: 'cpp_datatypes_40',
  topicId: 'cpp_datatypes',
  question: 'Understand lvalue and rvalue references.',
  mathSolution: '& is lvalue reference, && is rvalue reference (move semantics).',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid process(const string& s) {\n    cout << "Lvalue reference: \" << s << endl;\n}\n\nvoid process(string&& s) {\n    cout << \"Rvalue reference: \" << s << endl;\n}\n\nint main() {\n    string str = \"Hello\";\n    \n    process(str);           // Lvalue: calls lvalue overload\n    process(\"World\");       // Rvalue: calls rvalue overload\n    process(std::move(str)); // Rvalue: converts lvalue to rvalue\n    \n    // After move, str is in valid but unspecified state\n    cout << \"After move: \" << str << endl;\n    \n    return 0;\n}',
  hint: 'Rvalue references enable move semantics for efficiency.'
},
{
  id: 'cpp_datatypes_41',
  topicId: 'cpp_datatypes',
  question: 'Use const qualifier with data types.',
  mathSolution: 'const makes variables immutable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    const int MAX_VALUE = 100;\n    const double PI = 3.14159;\n    const char NEWLINE = \'\\n\';\n    \n    cout << "MAX_VALUE: \" << MAX_VALUE << NEWLINE;\n    cout << \"PI: \" << PI << NEWLINE;\n    \n    // const with pointers\n    int x = 10, y = 20;\n    const int* ptr1 = &x;   // pointer to const (cannot change value)\n    int* const ptr2 = &x;   // const pointer (cannot change address)\n    const int* const ptr3 = &x;  // const pointer to const\n    \n    // ptr1 is a pointer to constant integer\n    // *ptr1 = 30;  // Error\n    ptr1 = &y;  // OK\n    \n    // ptr2 is a constant pointer\n    *ptr2 = 30;  // OK\n    // ptr2 = &y;  // Error\n    \n    return 0;\n}',
  hint: 'const improves code safety and documents intent.'
},
{
  "id": "cpp_datatypes_42",
  "topicId": "cpp_datatypes",
  "question": "Use volatile qualifier for special memory locations.",
  "mathSolution": "volatile prevents compiler optimizations on variable.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    volatile int sensorValue = 100;  // May change externally\n    \n    // Compiler won't optimize this loop away\n    while (sensorValue == 100) {\n        cout << \"Waiting for sensor change\" << endl;\n        break;  // Break to avoid infinite loop in example\n    }\n    \n    volatile int* hardwareReg = reinterpret_cast<volatile int*>(0x4000);\n    int value = *hardwareReg;  // Always read from memory\n    \n    cout << \"Value from hardware register: \" << value << endl;\n    \n    return 0;\n}"
},
{
  id: 'cpp_datatypes_43',
  topicId: 'cpp_datatypes',
  question: 'Create user-defined literal operators (C++11).',
  mathSolution: 'User-defined literals extend literal syntax.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Length literals\nlong double operator\"\" _cm(long double x) { return x / 100.0; }\nlong double operator\"\" _m(long double x) { return x; }\nlong double operator\"\" _km(long double x) { return x * 1000.0; }\n\n// Time literals\nconstexpr long long operator\"\" _s(unsigned long long x) { return x; }\nconstexpr long long operator\"\" _min(unsigned long long x) { return x * 60; }\nconstexpr long long operator\"\" _h(unsigned long long x) { return x * 3600; }\n\n// String literals\nstring operator\"\" _suffix(const char* str, size_t len) {\n    return string(str, len) + \" (custom)\";\n}\n\nint main() {\n    auto length = 1.5_m + 30.0_cm;\n    cout << "Total length: \" << length << \" meters\" << endl;\n    \n    auto seconds = 2_h + 30_min + 45_s;\n    cout << \"Total seconds: \" << seconds << endl;\n    \n    auto text = \"Hello\"_suffix;\n    cout << text << endl;\n    \n    return 0;\n}',
  hint: 'User-defined literals improve code expressiveness.'
},
{
  id: 'cpp_datatypes_44',
  topicId: 'cpp_datatypes',
  question: 'Use std::complex for complex numbers.',
  mathSolution: 'complex template handles mathematical complex numbers.',
  codeSolution: '#include <iostream>\n#include <complex>\nusing namespace std;\n\nint main() {\n    complex<double> c1(3.0, 4.0);   // 3 + 4i\n    complex<double> c2(1.0, 2.0);   // 1 + 2i\n    \n    cout << "c1: " << c1 << endl;\n    cout << "c2: " << c2 << endl;\n    cout << "c1 + c2: " << c1 + c2 << endl;\n    cout << "c1 - c2: " << c1 - c2 << endl;\n    cout << "c1 * c2: " << c1 * c2 << endl;\n    cout << "c1 / c2: " << c1 / c2 << endl;\n    \n    cout << "Real part: " << real(c1) << endl;\n    cout << "Imag part: " << imag(c1) << endl;\n    cout << "Magnitude: " << abs(c1) << endl;\n    cout << "Phase angle: " << arg(c1) << endl;\n    cout << "Conjugate: " << conj(c1) << endl;\n    \n    return 0;\n}',
  hint: 'std::complex provides mathematical operations for complex numbers.'
},
{
  id: 'cpp_datatypes_45',
  topicId: 'cpp_datatypes',
  question: 'Use std::bitset for fixed-size bit sequences.',
  mathSolution: 'bitset provides efficient bit manipulation.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nint main() {\n    bitset<8> b1(0b10101010);\n    bitset<8> b2(string(\"11001100\"));\n    \n    cout << \"b1: \" << b1 << endl;\n    cout << \"b2: \" << b2 << endl;\n    cout << \"b1 & b2: \" << (b1 & b2) << endl;\n    cout << \"b1 | b2: \" << (b1 | b2) << endl;\n    cout << \"b1 ^ b2: \" << (b1 ^ b2) << endl;\n    cout << \"~b1: \" << (~b1) << endl;\n    \n    cout << \"b1[0]: \" << b1[0] << endl;\n    cout << \"b1 count: \" << b1.count() << endl;\n    cout << \"b1 size: \" << b1.size() << endl;\n    cout << \"b1 any: \" << b1.any() << endl;\n    cout << \"b1 none: \" << b1.none() << endl;\n    \n    b1.set(3);\n    b1.reset(2);\n    b1.flip(0);\n    cout << \"After modifications: \" << b1 << endl;\n    \n    return 0;\n}',
  hint: 'bitset is efficient for fixed-size bit operations.'
},
{
  "id": "cpp_datatypes_46",
  "topicId": "cpp_datatypes",
  "question": "Create and use raw string literals (C++11).",
  "mathSolution": "Raw string literals ignore escape sequences.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Raw string literal - escape sequences are treated as literal characters\n    string path = R\"(C:\\Program Files\\MyApp)\";\n    string regex = R\"(\\(\\w+\\)\\(\\w+\\.txt\\))\";\n    string multiline = R\"(Line 1\\nLine 2\\tTabbed)\";\n    string html = R\"(\n    <div>\n        <h1>Title</h1>\n        <p>Content</p>\n    </div>\n)\";\n    \n    cout << \"Path: \" << path << endl;\n    cout << \"Regex: \" << regex << endl;\n    cout << \"Multiline: \" << multiline << endl;\n    cout << \"HTML: \" << html << endl;\n    \n    // Raw string with custom delimiter\n    string custom = R\"delimiter(This can contain )\" and ( because of delimiter)delimiter\";\n    cout << \"Custom delimiter: \" << custom << endl;\n    \n    return 0;\n}"
},
{
  id: 'cpp_datatypes_47',
  topicId: 'cpp_datatypes',
  question: 'Use std::string_view for read-only string access (C++17).',
  mathSolution: 'string_view provides non-owning view of string data.',
  codeSolution: '#include <iostream>\n#include <string_view>\n#include <string>\nusing namespace std;\n\nvoid printString(string_view sv) {\n    cout << "String view: " << sv << ", length: " << sv.length() << endl;\n}\n\nint main() {\n    string s = "Hello World";\n    const char* cstr = "C-style string";\n    \n    printString(s);          // from std::string\n    printString(cstr);       // from const char*\n    printString("Literal");  // from string literal\n    \n    string_view sv = \"Hello\";\n    sv.remove_prefix(2);    // "llo\"\n    sv.remove_suffix(1);    // "ll\"\n    cout << \"After remove: \" << sv << endl;\n    \n    // No allocation, just viewing\n    string_view data = s;\n    cout << \"Data: \" << data << endl;\n    \n    return 0;\n}',
  hint: 'string_view avoids copying and is efficient for read-only access.'
},
{
  id: 'cpp_datatypes_48',
  topicId: 'cpp_datatypes',
  question: 'Use std::span for contiguous sequence view (C++20).',
  mathSolution: 'span provides non-owning view of arrays and containers.',
  codeSolution: '#include <iostream>\n#include <span>\n#include <vector>\nusing namespace std;\n\nvoid process(span<int> data) {\n    cout << "Processing " << data.size() << " elements: ";\n    for (int& val : data) {\n        val *= 2;\n        cout << val << " ";\n    }\n    cout << endl;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    vector<int> vec = {6, 7, 8, 9, 10};\n    \n    process(arr);\n    process(vec);\n    process({11, 12, 13, 14, 15});\n    \n    span<int> sp(arr);\n    cout << "First element: " << sp[0] << endl;\n    cout << "Size: " << sp.size() << endl;\n    \n    span<int> sub = sp.subspan(1, 3);\n    cout << "Subspan: ";\n    for (int val : sub) cout << val << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'span is a lightweight view into contiguous data.'
},
{
  id: 'cpp_datatypes_49',
  topicId: 'cpp_datatypes',
  question: 'Use type traits for compile-time type properties (C++11).',
  mathSolution: 'Type traits provide type information at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nvoid checkType() {\n    cout << "is_integral: " << is_integral<T>::value << endl;\n    cout << "is_floating_point: " << is_floating_point<T>::value << endl;\n    cout << "is_pointer: " << is_pointer<T>::value << endl;\n    cout << "is_const: " << is_const<T>::value << endl;\n    cout << "is_reference: " << is_reference<T>::value << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    \n    cout << "int: " << endl;\n    checkType<int>();\n    \n    cout << "\\ndouble: " << endl;\n    checkType<double>();\n    \n    cout << "\\nint*: " << endl;\n    checkType<int*>();\n    \n    cout << "\\nconst int&: " << endl;\n    checkType<const int&>();\n    \n    // conditional type selection\n    using MyType = conditional<sizeof(int) == 4, int, long>::type;\n    cout << "\\nMyType selected: " << typeid(MyType).name() << endl;\n    \n    // enable_if example\n    // template<typename T>\n    // typename enable_if<is_integral<T>::value, T>::type\n    // absolute(T x) { return x < 0 ? -x : x; }\n    // \n    // cout << "Absolute of -5: " << absolute(-5) << endl;\n    \n    return 0;\n}',
  hint: 'Type traits enable template metaprogramming and SFINAE.'
},
{
  "id": "cpp_datatypes_50",
  "topicId": "cpp_datatypes",
  "question": "Create complete data type demonstration program.",
  "mathSolution": "Combine multiple data types in comprehensive example.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <optional>\n#include <variant>\n#include <any>\nusing namespace std;\n\nint main() {\n    cout << \"=== C++ Data Types Demonstration ===\" << endl;\n    \n    // Primitive types\n    int integer = 42;\n    double floating = 3.14159265359;\n    char character = 'A';\n    bool boolean = true;\n    \n    cout << \"Integer: \" << integer << endl;\n    cout << \"Double: \" << floating << endl;\n    cout << \"Char: \" << character << endl;\n    cout << \"Bool: \" << boolalpha << boolean << endl;\n    \n    // STL containers\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    string text = \"Hello Modern C++\";\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    cout << \"\\nVector: \";\n    for (int n : numbers) cout << n << \" \";\n    cout << endl;\n    \n    cout << \"String: \" << text << endl;\n    cout << \"Map size: \" << ages.size() << endl;\n    \n    // Modern types\n    optional<int> maybeValue = 100;\n    variant<int, double, string> variantData = \"Variant\";\n    any anyValue = 3.14;\n    \n    cout << \"\\nOptional has value: \" << maybeValue.has_value() << endl;\n    cout << \"Optional value: \" << maybeValue.value() << endl;\n    cout << \"Variant holds: \" << get<string>(variantData) << endl;\n    cout << \"Any holds double: \" << any_cast<double>(anyValue) << endl;\n    \n    // Type information\n    cout << \"\\nType Information:\" << endl;\n    cout << \"Size of int: \" << sizeof(int) << \" bytes\" << endl;\n    cout << \"Size of double: \" << sizeof(double) << \" bytes\" << endl;\n    cout << \"Size of string: \" << sizeof(string) << \" bytes\" << endl;\n    \n    return 0;\n}",
  "hint": "C++ provides diverse data types for different programming needs."
}
);