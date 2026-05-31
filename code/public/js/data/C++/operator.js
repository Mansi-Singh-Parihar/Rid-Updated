QuizData.questions.push(
{
  id: 'cpp_operators_1',
  topicId: 'cpp_operators',
  question: 'Use arithmetic operators (+, -, *, /, %) for basic calculations.',
  mathSolution: 'Arithmetic operators perform mathematical operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    \n    cout << "Addition: " << a + b << endl;       // 13\n    cout << "Subtraction: " << a - b << endl;    // 7\n    cout << "Multiplication: " << a * b << endl; // 30\n    cout << "Division: " << a / b << endl;       // 3 (integer division)\n    cout << "Modulus: " << a % b << endl;        // 1 (remainder)\n    \n    double x = 10.0, y = 3.0;\n    cout << "Double division: " << x / y << endl; // 3.33333\n    \n    return 0;\n}',
  hint: '% operator works only with integers; for float division, use /.'
},
{
  id: 'cpp_operators_2',
  topicId: 'cpp_operators',
  question: 'Use increment (++) and decrement (--) operators.',
  mathSolution: 'Prefix increments before use, postfix increments after use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    \n    // Postfix increment\n    cout << "Postfix x++: " << x++ << endl;  // Prints 5, then x=6\n    cout << "After postfix: " << x << endl;   // 6\n    \n    // Prefix increment\n    int y = 5;\n    cout << "Prefix ++y: " << ++y << endl;    // y=6, prints 6\n    \n    // Decrement\n    int z = 5;\n    cout << "Prefix --z: " << --z << endl;    // 4\n    cout << "Postfix z--: " << z-- << endl;    // Prints 4, then z=3\n    cout << "Final z: " << z << endl;          // 3\n    \n    return 0;\n}',
  hint: 'Prefix (++x) changes then uses; postfix (x++) uses then changes.'
},
{
  id: 'cpp_operators_3',
  topicId: 'cpp_operators',
  question: 'Use assignment operators (=, +=, -=, *=, /=, %=).',
  mathSolution: 'Compound assignment operators combine operation with assignment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    \n    x += 5;   // x = x + 5\n    cout << "x += 5: " << x << endl;   // 15\n    \n    x -= 3;   // x = x - 3\n    cout << "x -= 3: " << x << endl;   // 12\n    \n    x *= 2;   // x = x * 2\n    cout << "x *= 2: " << x << endl;   // 24\n    \n    x /= 4;   // x = x / 4\n    cout << "x /= 4: " << x << endl;   // 6\n    \n    x %= 5;   // x = x % 5\n    cout << "x %= 5: " << x << endl;   // 1\n    \n    return 0;\n}',
  hint: 'Compound operators are more concise and can be more efficient.'
},
{
  id: 'cpp_operators_4',
  topicId: 'cpp_operators',
  question: 'Use relational operators (==, !=, <, >, <=, >=).',
  mathSolution: 'Relational operators compare values and return boolean.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    \n    cout << boolalpha;  // Print true/false instead of 1/0\n    \n    cout << "a == b: " << (a == b) << endl;  // false\n    cout << "a != b: " << (a != b) << endl;  // true\n    cout << "a < b: " << (a < b) << endl;    // true\n    cout << "a > b: " << (a > b) << endl;    // false\n    cout << "a <= b: " << (a <= b) << endl;  // true\n    cout << "a >= b: " << (a >= b) << endl;  // false\n    \n    return 0;\n}',
  hint: 'Relational operators return bool values (true/false).'
},
{
  id: 'cpp_operators_5',
  topicId: 'cpp_operators',
  question: 'Use logical operators (&&, ||, !).',
  mathSolution: 'Logical operators combine boolean expressions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool a = true, b = false;\n    \n    cout << boolalpha;\n    \n    cout << "a && b: " << (a && b) << endl;  // false (AND)\n    cout << "a || b: " << (a || b) << endl;  // true  (OR)\n    cout << "!a: " << (!a) << endl;          // false (NOT)\n    cout << "!b: " << (!b) << endl;          // true\n    \n    int x = 10, y = 20, z = 30;\n    bool result = (x < y) && (y < z);  // true && true = true\n    cout << "(x < y) && (y < z): " << result << endl;\n    \n    return 0;\n}',
  hint: '&& and || short-circuit: evaluation stops when result is determined.'
},
{
  id: 'cpp_operators_6',
  topicId: 'cpp_operators',
  question: 'Use bitwise operators (&, |, ^, ~, <<, >>).',
  mathSolution: 'Bitwise operators manipulate individual bits in integers.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nint main() {\n    int a = 0b1010;  // 10 in decimal\n    int b = 0b1100;  // 12 in decimal\n    \n    cout << "a = " << bitset<4>(a) << " (\" << a << \")\" << endl;\n    cout << \"b = \" << bitset<4>(b) << \" (\" << b << \")\" << endl;\n    \n    cout << \"a & b (AND): \" << bitset<4>(a & b) << \" (\" << (a & b) << \")\" << endl;\n    cout << \"a | b (OR): \" << bitset<4>(a | b) << \" (\" << (a | b) << \")\" << endl;\n    cout << \"a ^ b (XOR): \" << bitset<4>(a ^ b) << \" (\" << (a ^ b) << \")\" << endl;\n    cout << \"~a (NOT): \" << bitset<4>(~a & 0xF) << \" (\" << (~a & 0xF) << \")\" << endl;\n    cout << \"a << 1 (left shift): \" << bitset<4>(a << 1) << \" (\" << (a << 1) << \")\" << endl;\n    cout << \"a >> 1 (right shift): \" << bitset<4>(a >> 1) << \" (\" << (a >> 1) << \")\" << endl;\n    \n    return 0;\n}',
  hint: 'Bitwise operators work on individual bits; use for flags and low-level programming.'
},
{
  id: 'cpp_operators_7',
  topicId: 'cpp_operators',
  question: 'Use ternary conditional operator (?:).',
  mathSolution: 'Ternary operator is a shorthand for if-else.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    \n    int max = (a > b) ? a : b;\n    cout << "Max: " << max << endl;  // 20\n    \n    int min = (a < b) ? a : b;\n    cout << "Min: " << min << endl;  // 10\n    \n    // Nested ternary\n    int x = 15;\n    string result = (x > 0) ? ((x > 10) ? \"Greater than 10\" : \"Between 1 and 10\") : \"Negative\";\n    cout << result << endl;  // Greater than 10\n    \n    return 0;\n}',
  hint: 'Ternary operator: condition ? true_value : false_value'
},
{
  id: 'cpp_operators_8',
  topicId: 'cpp_operators',
  question: 'Use sizeof operator to get size of types.',
  mathSolution: 'sizeof returns size in bytes of a type or variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Size of fundamental types (in bytes):" << endl;\n    cout << "char: " << sizeof(char) << endl;\n    cout << "short: " << sizeof(short) << endl;\n    cout << "int: " << sizeof(int) << endl;\n    cout << "long: " << sizeof(long) << endl;\n    cout << "long long: " << sizeof(long long) << endl;\n    cout << "float: " << sizeof(float) << endl;\n    cout << "double: " << sizeof(double) << endl;\n    cout << "bool: " << sizeof(bool) << endl;\n    \n    int arr[10];\n    cout << "\\nSize of array: " << sizeof(arr) << " bytes" << endl;\n    cout << "Number of elements: " << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'sizeof is an operator, not a function; parentheses needed for types but optional for variables.'
},
{
  id: 'cpp_operators_9',
  topicId: 'cpp_operators',
  question: 'Use address-of (&) and dereference (*) operators.',
  mathSolution: '& gets memory address, * accesses value at address.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int* ptr = &x;  // & gets address of x\n    \n    cout << "Value of x: \" << x << endl;\n    cout << \"Address of x: \" << &x << endl;\n    cout << \"Pointer ptr: \" << ptr << endl;\n    cout << \"Value at ptr: \" << *ptr << endl;  // * dereferences\n    \n    *ptr = 100;  // Change x through pointer\n    cout << \"After *ptr = 100, x: \" << x << endl;\n    \n    return 0;\n}',
  hint: '& gets address; * dereferences (accesses value at address).'
},
{
  id: 'cpp_operators_10',
  topicId: 'cpp_operators',
  question: 'Use member access operators (. and ->).',
  mathSolution: 'Dot accesses struct/class members; arrow for pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Point {\n    int x, y;\n    void display() { cout << "(" << x << ", " << y << ")" << endl; }\n};\n\nint main() {\n    Point p1 = {10, 20};\n    p1.display();        // Dot operator\n    p1.x = 30;           // Dot operator for member\n    \n    Point* ptr = &p1;\n    ptr->display();      // Arrow operator\n    ptr->y = 40;         // Arrow operator for member\n    \n    cout << "After modification: ";\n    p1.display();        // (30, 40)\n    \n    return 0;\n}',
  hint: 'Use -> for pointers; use . for objects/references.'
},
{
  id: 'cpp_operators_11',
  topicId: 'cpp_operators',
  question: 'Use comma operator to evaluate multiple expressions.',
  mathSolution: 'Comma operator evaluates all expressions, returns last value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    \n    // Comma in variable declaration (not operator)\n    a = 5, b = 10, c = 15;\n    \n    // Comma operator in expressions\n    int result = (a++, b++, a + b);\n    cout << \"a: \" << a << \", b: \" << b << \", result: \" << result << endl;\n    \n    // In for loops\n    for (int i = 0, j = 10; i < j; i++, j--) {\n        cout << \"i: \" << i << \", j: \" << j << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Comma operator has lowest precedence; use parentheses for clarity.'
},
{
  id: 'cpp_operators_12',
  topicId: 'cpp_operators',
  question: 'Use type casting operators (static_cast, dynamic_cast, const_cast, reinterpret_cast).',
  mathSolution: 'C++ provides four explicit casting operators for type conversion.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    // static_cast - compile-time conversion\n    double pi = 3.14159;\n    int intPi = static_cast<int>(pi);\n    cout << "static_cast: \" << intPi << endl;  // 3\n    \n    // const_cast - add/remove const\n    const int constValue = 100;\n    int* modifiable = const_cast<int*>(&constValue);\n    // *modifiable = 200;  // Undefined behavior if original is const\n    \n    // reinterpret_cast - low-level bit casting\n    long address = reinterpret_cast<long>(&pi);\n    cout << \"Address as long: \" << hex << address << endl;\n    \n    // dynamic_cast - runtime polymorphic conversion\n    Base* basePtr = new Derived();\n    Derived* derivedPtr = dynamic_cast<Derived*>(basePtr);\n    if (derivedPtr) {\n        cout << \"dynamic_cast successful\" << endl;\n    }\n    \n    delete basePtr;\n    return 0;\n}',
  hint: 'Prefer C++-style casts over C-style casts for type safety.'
},
{
  id: 'cpp_operators_13',
  topicId: 'cpp_operators',
  question: 'Use scope resolution operator (::).',
  mathSolution: ':: accesses global variables, namespace members, static members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint value = 10;  // Global variable\n\nnamespace MyNamespace {\n    int value = 20;\n    void display() { cout << \"Inside namespace: \" << value << endl; }\n}\n\nclass MyClass {\npublic:\n    static int count;\n    static void show() { cout << \"Count: \" << count << endl; }\n};\n\nint MyClass::count = 5;\n\nint main() {\n    int value = 30;  // Local variable\n    \n    cout << \"Local: \" << value << endl;\n    cout << \"Global: \" << ::value << endl;\n    cout << \"Namespace: \" << MyNamespace::value << endl;\n    \n    MyNamespace::display();\n    \n    MyClass::show();\n    \n    return 0;\n}',
  hint: ':: resolves scope; useful for accessing global variables when shadowed.'
},
{
  id: 'cpp_operators_14',
  topicId: 'cpp_operators',
  question: 'Use new and delete operators for dynamic memory.',
  mathSolution: 'new allocates memory, delete frees memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Single variable\n    int* ptr = new int(42);\n    cout << \"Value: \" << *ptr << endl;\n    cout << \"Address: \" << ptr << endl;\n    delete ptr;\n    \n    // Array\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = i * 10;\n    }\n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n    delete[] arr;\n    \n    // new with placement (advanced)\n    char buffer[sizeof(int)];\n    int* placed = new(buffer) int(99);\n    cout << \"Placement new: \" << *placed << endl;\n    placed->~int();  // Manual destructor call\n    \n    return 0;\n}',
  hint: 'Use delete for single variable, delete[] for array allocated with new[].'
},
{
  id: 'cpp_operators_15',
  topicId: 'cpp_operators',
  question: 'Use operator precedence and associativity.',
  mathSolution: 'Operators have different precedence determining evaluation order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 2 + 3 * 4;    // Multiplication has higher precedence\n    cout << \"2 + 3 * 4 = \" << a << endl;  // 14, not 20\n    \n    int b = (2 + 3) * 4;  // Parentheses override precedence\n    cout << \"(2 + 3) * 4 = \" << b << endl;  // 20\n    \n    // Precedence table (highest to lowest):\n    // 1. () [] . ->\n    // 2. ++ -- + - ! ~ * & (type) sizeof\n    // 3. * / %\n    // 4. + -\n    // 5. << >>\n    // 6. < <= > >=\n    // 7. == !=\n    // 8. &\n    // 9. ^\n    // 10. |\n    // 11. &&\n    // 12. ||\n    // 13. ?:\n    // 14. = += -= etc.\n    // 15. ,\n    \n    bool c = 5 > 3 && 2 < 4;  // > and < have higher precedence than &&\n    cout << \"5 > 3 && 2 < 4 = \" << boolalpha << c << endl;  // true\n    \n    return 0;\n}',
  hint: 'Use parentheses to make complex expressions clear and avoid precedence bugs.'
},
{
  "id": "cpp_operators_16",
  "topicId": "cpp_operators",
  "question": "Use short-circuit evaluation in logical operators.",
  "mathSolution": "&& and || evaluate left side first; may skip right side.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nbool check1() {\n    cout << \"check1 called\" << endl;\n    return false;\n}\n\nbool check2() {\n    cout << \"check2 called\" << endl;\n    return true;\n}\n\nint main() {\n    cout << \"AND with false first: \";\n    if (check1() && check2()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    // check2() never called because check1() returns false\n    \n    cout << \"\\nOR with true first: \";\n    if (check2() || check1()) {\n        cout << \"True\" << endl;\n    }\n    // check1() never called because check2() returns true\n    \n    // Short-circuit can be used for safe pointer access\n    int* ptr = nullptr;\n    if (ptr && *ptr == 10) {  // Safe: doesn't dereference null\n        cout << \"Value is 10\" << endl;\n    } else {\n        cout << \"\\nPointer is null, so dereference avoided\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Short-circuit evaluation can prevent errors and improve performance."
},
{
  id: 'cpp_operators_17',
  topicId: 'cpp_operators',
  question: 'Use pointer arithmetic operators (+, -, ++, --).',
  mathSolution: 'Adding to pointer moves it by element size, not bytes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int* ptr = arr;  // Points to &arr[0]\n    \n    cout << \"*ptr = \" << *ptr << endl;  // 10\n    \n    ptr++;  // Move to next element\n    cout << \"After ptr++: *ptr = \" << *ptr << endl;  // 20\n    \n    ptr += 2;  // Move 2 elements forward\n    cout << \"After ptr += 2: *ptr = \" << *ptr << endl;  // 40\n    \n    ptr--;  // Move back one element\n    cout << \"After ptr--: *ptr = \" << *ptr << endl;  // 30\n    \n    // Pointer difference\n    int* start = arr;\n    int* end = arr + 5;\n    ptrdiff_t diff = end - start;\n    cout << \"Elements between: \" << diff << endl;  // 5\n    \n    return 0;\n}',
  hint: 'Adding n to pointer moves it by n * sizeof(type) bytes.'
},

{
  id: 'cpp_operators_18',
  topicId: 'cpp_operators',
  question: 'Use subscript operator [] for array access.',
  mathSolution: 'Subscript operator accesses elements by index (0-based).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    cout << "arr[0] = " << arr[0] << endl;  // 10\n    cout << "arr[2] = " << arr[2] << endl;  // 30\n    cout << "arr[4] = " << arr[4] << endl;  // 50\n    \n    // Modifying through subscript\n    arr[1] = 25;\n    cout << "After modification, arr[1] = " << arr[1] << endl;  // 25\n    \n    // Pointer and subscript equivalence\n    int* ptr = arr;\n    cout << "ptr[3] = " << ptr[3] << endl;  // 40\n    cout << "*(ptr + 3) = " << *(ptr + 3) << endl;  // 40\n    \n    return 0;\n}',
  hint: 'arr[i] is equivalent to *(arr + i) in C++.'
},
{
  id: 'cpp_operators_19',
  topicId: 'cpp_operators',
  question: 'Use function call operator ().',
  mathSolution: 'Function call operator invokes functions and functors.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nclass Multiplier {\n    int factor;\npublic:\n    Multiplier(int f) : factor(f) {}\n    int operator()(int x) { return x * factor; }\n};\n\nint main() {\n    // Function call\n    int result = add(5, 3);\n    cout << "add(5, 3) = " << result << endl;\n    \n    // Function pointer call\n    int (*funcPtr)(int, int) = &add;\n    cout << "funcPtr(5, 3) = " << funcPtr(5, 3) << endl;\n    \n    // Functor (function object)\n    Multiplier times2(2);\n    cout << "times2(5) = " << times2(5) << endl;  // 10\n    \n    return 0;\n}',
  hint: 'Function call operator () can be overloaded to create functors.'
},
{
  id: 'cpp_operators_20',
  topicId: 'cpp_operators',
  question: 'Use throw operator for exception handling.',
  mathSolution: 'throw operator signals an exception condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw \"Division by zero error\";\n    }\n    return a / b;\n}\n\nint main() {\n    double x = 10.0, y = 0.0;\n    \n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Caught: " << error << endl;\n    }\n    \n    // throw without argument rethrows current exception\n    try {\n        throw 42;\n    } catch (int e) {\n        cout << "Caught int: " << e << endl;\n        throw;  // Rethrows\n    }\n    \n    return 0;\n}',
  hint: 'throw transfers control to the nearest catch handler.'
},
{
  "id": "cpp_operators_21",
  "topicId": "cpp_operators",
  "question": "Use cast operators (C-style cast).",
  "mathSolution": "C-style cast performs type conversion (less safe).",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Converting between numeric types\n    double pi = 3.14159;\n    int intPi = (int)pi;\n    cout << \"intPi = \" << intPi << endl;  // 3\n    \n    int x = 65;\n    char ch = (char)x;\n    cout << \"ch = \" << ch << endl;  // 'A'\n    \n    // Pointer casting\n    void* voidPtr = &x;\n    int* intPtr = (int*)voidPtr;\n    cout << \"*intPtr = \" << *intPtr << endl;  // 65\n    \n    // Dangerous: reinterpret cast via C-style\n    float f = 3.14f;\n    int* notSafe = (int*)&f;\n    cout << \"Reinterpreted (unsafe): \" << *notSafe << endl;  // Garbage/undefined behavior\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_22',
  topicId: 'cpp_operators',
  question: 'Override new and delete operators for custom memory management.',
  mathSolution: 'Overload new/delete to control memory allocation.',
  codeSolution: '#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nclass MyClass {\npublic:\n    static void* operator new(size_t size) {\n        cout << "Custom new called. Size: " << size << endl;\n        void* ptr = malloc(size);\n        if (!ptr) throw bad_alloc();\n        return ptr;\n    }\n    \n    static void operator delete(void* ptr) {\n        cout << "Custom delete called" << endl;\n        free(ptr);\n    }\n    \n    MyClass() { cout << "Constructor called" << endl; }\n    ~MyClass() { cout << "Destructor called" << endl; }\n};\n\nint main() {\n    MyClass* obj = new MyClass();\n    delete obj;\n    \n    // Array version\n    void* operator new[](size_t size) {\n        cout << "Array new called\" << endl;\n        return malloc(size);\n    }\n    \n    void operator delete[](void* ptr) {\n        cout << \"Array delete called\" << endl;\n        free(ptr);\n    }\n    \n    MyClass* arr = new MyClass[3];\n    delete[] arr;\n    \n    return 0;\n}',
  hint: 'Custom new/delete can be used for pooling, tracking, or debugging.'
},
{
  id: 'cpp_operators_23',
  topicId: 'cpp_operators',
  question: 'Use operator overloading for user-defined types.',
  mathSolution: 'Operator overloading defines behavior for custom types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\n    double real, imag;\npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    bool operator==(const Complex& other) {\n        return real == other.real && imag == other.imag;\n    }\n    \n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    \n    cout << \"c1: \"; c1.display();\n    cout << \"c2: \"; c2.display();\n    cout << \"c1 + c2: \"; c3.display();\n    cout << \"c1 - c2: \"; c4.display();\n    \n    if (c1 == c2) {\n        cout << \"Equal\" << endl;\n    } else {\n        cout << \"Not equal\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Operator overloading makes custom types behave like built-in types.'
},
{
  id: 'cpp_operators_24',
  topicId: 'cpp_operators',
  question: 'Overload stream insertion and extraction operators (<< and >>).',
  mathSolution: 'Overload << and >> for custom output/input formatting.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\n    int x, y;\npublic:\n    Point(int a = 0, int b = 0) : x(a), y(b) {}\n    \n    friend ostream& operator<<(ostream& os, const Point& p) {\n        os << \"(\" << p.x << \", \" << p.y << \")\";\n        return os;\n    }\n    \n    friend istream& operator>>(istream& is, Point& p) {\n        cout << \"Enter x and y: \";\n        is >> p.x >> p.y;\n        return is;\n    }\n};\n\nint main() {\n    Point p1(10, 20);\n    Point p2;\n    \n    cout << \"p1 = \" << p1 << endl;\n    \n    cin >> p2;\n    cout << \"p2 = \" << p2 << endl;\n    \n    return 0;\n}',
  hint: 'Return reference to stream to allow chaining (cout << a << b).'
},
{
  id: 'cpp_operators_25',
  topicId: 'cpp_operators',
  question: 'Overload prefix and postfix increment/decrement operators.',
  mathSolution: 'Postfix operators take dummy int parameter to distinguish from prefix.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\n    int value;\npublic:\n    Counter(int v = 0) : value(v) {}\n    \n    // Prefix increment (++c)\n    Counter& operator++() {\n        ++value;\n        return *this;\n    }\n    \n    // Postfix increment (c++)\n    Counter operator++(int) {\n        Counter temp = *this;\n        ++value;\n        return temp;\n    }\n    \n    // Prefix decrement (--c)\n    Counter& operator--() {\n        --value;\n        return *this;\n    }\n    \n    // Postfix decrement (c--)\n    Counter operator--(int) {\n        Counter temp = *this;\n        --value;\n        return temp;\n    }\n    \n    void display() { cout << \"Value: \" << value << endl; }\n};\n\nint main() {\n    Counter c(5);\n    \n    cout << \"Prefix ++c: \";\n    ++c;\n    c.display();  // 6\n    \n    cout << \"Postfix c++: \";\n    c++;\n    c.display();  // 7\n    \n    cout << \"Prefix --c: \";\n    --c;\n    c.display();  // 6\n    \n    cout << \"Postfix c--: \";\n    c--;\n    c.display();  // 5\n    \n    return 0;\n}',
  hint: 'Prefix returns reference, postfix returns copy for efficiency.'
},
{
  id: 'cpp_operators_26',
  topicId: 'cpp_operators',
  question: 'Overload subscript operator [] for custom container.',
  mathSolution: 'Return reference to allow assignment to element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SafeArray {\n    int arr[10];\npublic:\n    SafeArray() {\n        for (int i = 0; i < 10; i++) arr[i] = 0;\n    }\n    \n    int& operator[](int index) {\n        if (index < 0 || index >= 10) {\n            cout << \"Index out of bounds!\" << endl;\n            return arr[0];  // return safe reference\n        }\n        return arr[index];\n    }\n    \n    const int& operator[](int index) const {\n        if (index < 0 || index >= 10) {\n            cout << \"Index out of bounds!\" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n};\n\nint main() {\n    SafeArray arr;\n    \n    arr[3] = 42;\n    arr[7] = 99;\n    \n    cout << \"arr[3] = \" << arr[3] << endl;  // 42\n    cout << \"arr[7] = \" << arr[7] << endl;  // 99\n    \n    arr[15] = 100;  // Out of bounds warning\n    \n    return 0;\n}',
  hint: 'Provide both const and non-const versions for proper const correctness.'
},
{
  id: 'cpp_operators_27',
  topicId: 'cpp_operators',
  question: 'Overload function call operator () for functors.',
  mathSolution: 'operator() allows objects to behave like functions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass MultiplyBy {\n    int factor;\npublic:\n    MultiplyBy(int f) : factor(f) {}\n    \n    int operator()(int x) const {\n        return x * factor;\n    }\n};\n\nclass Accumulator {\n    int sum;\npublic:\n    Accumulator() : sum(0) {}\n    \n    void operator()(int x) {\n        sum += x;\n    }\n    \n    int getSum() const { return sum; }\n};\n\nint main() {\n    MultiplyBy times3(3);\n    cout << "times3(5) = \" << times3(5) << endl;  // 15\n    \n    vector<int> nums = {1, 2, 3, 4, 5};\n    \n    // Using functor with transform\n    vector<int> result(nums.size());\n    transform(nums.begin(), nums.end(), result.begin(), MultiplyBy(2));\n    \n    cout << \"Doubled: \";\n    for (int x : result) cout << x << \" \";\n    cout << endl;\n    \n    // Using functor with for_each\n    Accumulator acc;\n    for_each(nums.begin(), nums.end(), acc);\n    cout << \"Sum: \" << acc.getSum() << endl;\n    \n    return 0;\n}',
  hint: 'Functors can maintain state between calls unlike regular functions.'
},
{
  id: 'cpp_operators_28',
  topicId: 'cpp_operators',
  question: 'Overload dereference operator * and arrow operator -> for smart pointers.',
  mathSolution: 'Smart pointers overload * and -> for pointer-like behavior.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass SmartPointer {\n    T* ptr;\npublic:\n    SmartPointer(T* p = nullptr) : ptr(p) {}\n    \n    ~SmartPointer() { delete ptr; }\n    \n    T& operator*() {\n        return *ptr;\n    }\n    \n    T* operator->() {\n        return ptr;\n    }\n    \n    T* get() { return ptr; }\n};\n\nclass MyClass {\npublic:\n    void display() { cout << \"Hello from MyClass!\" << endl; }\n    int value = 42;\n};\n\nint main() {\n    SmartPointer<MyClass> sp(new MyClass());\n    \n    sp->display();  // Arrow operator\n    cout << \"Value: \" << (*sp).value << endl;  // Dereference operator\n    cout << \"Via ->: \" << sp->value << endl;\n    \n    return 0;\n}',
  hint: 'Overloaded -> must return pointer or object with overloaded ->.'
},
{
  id: 'cpp_operators_29',
  topicId: 'cpp_operators',
  question: 'Use operator precedence with parentheses for complex expressions.',
  mathSolution: 'Parentheses explicitly control evaluation order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 3, c = 2, d = 4;\n    \n    // Without parentheses (operator precedence applies)\n    int result1 = a + b * c - d;\n    cout << \"a + b * c - d = \" << result1 << endl;\n    // 5 + (3*2) - 4 = 5 + 6 - 4 = 7\n    \n    // With parentheses\n    int result2 = (a + b) * (c - d);\n    cout << \"(a + b) * (c - d) = \" << result2 << endl;\n    // (5+3) * (2-4) = 8 * (-2) = -16\n    \n    int result3 = a + (b * (c - d));\n    cout << \"a + (b * (c - d)) = \" << result3 << endl;\n    // 5 + (3 * (2-4)) = 5 + (3 * -2) = 5 - 6 = -1\n    \n    // Complex boolean expression\n    bool condition = (a > b) && (c < d) || (b == c);\n    cout << boolalpha << \"Complex: \" << condition << endl;\n    \n    return 0;\n}',
  hint: 'Use parentheses to clarify intent, not just when necessary.'
},
{
  id: 'cpp_operators_30',
  topicId: 'cpp_operators',
  question: 'Use compound assignment operators with custom types.',
  mathSolution: 'Overload +=, -=, etc. for efficiency and convenience.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vector3D {\n    int x, y, z;\npublic:\n    Vector3D(int a = 0, int b = 0, int c = 0) : x(a), y(b), z(c) {}\n    \n    Vector3D& operator+=(const Vector3D& other) {\n        x += other.x;\n        y += other.y;\n        z += other.z;\n        return *this;\n    }\n    \n    Vector3D& operator-=(const Vector3D& other) {\n        x -= other.x;\n        y -= other.y;\n        z -= other.z;\n        return *this;\n    }\n    \n    void display() const {\n        cout << \"(\" << x << \", \" << y << \", \" << z << \")\" << endl;\n    }\n};\n\nint main() {\n    Vector3D v1(1, 2, 3);\n    Vector3D v2(4, 5, 6);\n    \n    cout << \"v1: \"; v1.display();\n    cout << \"v2: \"; v2.display();\n    \n    v1 += v2;\n    cout << \"v1 += v2: \"; v1.display();\n    \n    v1 -= v2;\n    cout << \"v1 -= v2: \"; v1.display();\n    \n    return 0;\n}',
  hint: 'Compound assignment operators are more efficient than separate operation and assignment.'
},
{
  id: 'cpp_operators_31',
  topicId: 'cpp_operators',
  question: 'Use sizeof with expressions and types.',
  mathSolution: 'sizeof can be applied to types, expressions, and variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    double arr[10];\n    \n    // sizeof with types\n    cout << "sizeof(int): \" << sizeof(int) << \" bytes\" << endl;\n    cout << \"sizeof(double): \" << sizeof(double) << \" bytes\" << endl;\n    \n    // sizeof with variables\n    cout << \"sizeof(x): \" << sizeof(x) << \" bytes\" << endl;\n    cout << \"sizeof(arr): \" << sizeof(arr) << \" bytes\" << endl;\n    \n    // sizeof with expressions (not evaluated)\n    int y = 10;\n    cout << \"sizeof(y + 5): \" << sizeof(y + 5) << \" bytes\" << endl;\n    cout << \"y is still: \" << y << \" (not evaluated)\" << endl;\n    \n    // sizeof with array elements\n    int array[20];\n    int elementCount = sizeof(array) / sizeof(array[0]);\n    cout << \"Array elements: \" << elementCount << endl;\n    \n    return 0;\n}',
  hint: 'sizeof expression is evaluated at compile time, not runtime.'
},
{
  id: 'cpp_operators_32',
  topicId: 'cpp_operators',
  question: 'Use typeid operator for runtime type information.',
  mathSolution: 'typeid returns type_info object describing type.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    int i = 42;\n    double d = 3.14;\n    string s = \"Hello\";\n    Base* basePtr = new Derived();\n    \n    cout << "Type of i: \" << typeid(i).name() << endl;\n    cout << \"Type of d: \" << typeid(d).name() << endl;\n    cout << \"Type of s: \" << typeid(s).name() << endl;\n    \n    // Polymorphic types (requires RTTI)\n    cout << \"Static type: \" << typeid(basePtr).name() << endl;\n    cout << \"Dynamic type: \" << typeid(*basePtr).name() << endl;\n    \n    // Comparing types\n    if (typeid(i) == typeid(int)) {\n        cout << \"i is int\" << endl;\n    }\n    \n    delete basePtr;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI (Runtime Type Information) enabled.'
},
{
  id: 'cpp_operators_33',
  topicId: 'cpp_operators',
  question: 'Use throw, try, catch for exception handling.',
  mathSolution: 'try block contains code that might throw; catch handles exceptions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass MyException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return \"Custom exception occurred\";\n    }\n};\n\nint divide(int a, int b) {\n    if (b == 0) {\n        throw runtime_error(\"Division by zero!\");\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        int result = divide(10, 0);\n        cout << \"Result: \" << result << endl;\n    } catch (const runtime_error& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    try {\n        throw MyException();\n    } catch (const MyException& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    // Multiple catches\n    try {\n        throw 42;\n    } catch (const char* e) {\n        cout << \"String: \" << e << endl;\n    } catch (int e) {\n        cout << \"Integer: \" << e << endl;\n    } catch (...) {\n        cout << \"Unknown exception\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Always catch by reference to avoid slicing and for polymorphism.'
},
{
  "id": "cpp_operators_34",
  "topicId": "cpp_operators",
  "question": "Use noexcept operator for exception specification.",
  "mathSolution": "noexcept indicates function does not throw exceptions.",
  "codeSolution": "#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nvoid mayThrow(bool b) {\n    if (b) throw 42;\n}\n\nvoid neverThrow() noexcept {\n    cout << \"Safe function\" << endl;\n}\n\ntemplate<typename T>\nvoid process(T x) noexcept(noexcept(T(x))) {\n    // Conditional noexcept\n    cout << \"Processing value\" << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    \n    // noexcept operator checks if expression is noexcept\n    cout << \"mayThrow(false) is noexcept: \" << noexcept(mayThrow(false)) << endl;\n    cout << \"neverThrow() is noexcept: \" << noexcept(neverThrow()) << endl;\n    cout << \"int() is noexcept: \" << noexcept(int()) << endl;\n    \n    // Test conditional noexcept template\n    int value = 42;\n    process(value);\n    \n    // noexcept function cannot throw\n    try {\n        neverThrow();  // This function is noexcept, won't throw\n        cout << \"No exception thrown from neverThrow()\" << endl;\n    } catch (...) {\n        cout << \"Caught\" << endl;  // Won't execute\n    }\n    \n    // Example of noexcept in move operations\n    class MyClass {\n    public:\n        MyClass(MyClass&&) noexcept {}\n        MyClass(const MyClass&) {}\n    };\n    \n    cout << \"MyClass move constructor is noexcept: \" \n         << noexcept(MyClass(std::declval<MyClass>())) << endl;\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_35',
  topicId: 'cpp_operators',
  question: 'Use alignof operator for alignment requirements.',
  mathSolution: 'alignof returns alignment requirement in bytes.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nstruct SimpleStruct {\n    char c;\n    int i;\n};\n\nstruct AlignedStruct {\n    alignas(16) int i;\n    char c;\n};\n\nalignas(32) int alignedArray[10];\n\nint main() {\n    cout << \"alignof(char): \" << alignof(char) << endl;\n    cout << \"alignof(int): \" << alignof(int) << endl;\n    cout << \"alignof(double): \" << alignof(double) << endl;\n    cout << \"alignof(SimpleStruct): \" << alignof(SimpleStruct) << endl;\n    cout << \"alignof(AlignedStruct): \" << alignof(AlignedStruct) << endl;\n    \n    cout << \"alignof(alignedArray): \" << alignof(decltype(alignedArray)) << endl;\n    \n    // alignas specifier for variables\n    alignas(64) int cacheAlignedInt;\n    cout << \"alignof(cacheAlignedInt): \" << alignof(decltype(cacheAlignedInt)) << endl;\n    \n    return 0;\n}',
  hint: 'alignof helps with memory optimization and hardware-specific code.'
},
{
  id: 'cpp_operators_36',
  topicId: 'cpp_operators',
  question: 'Use new and delete with placement syntax.',
  mathSolution: 'Placement new constructs object in pre-allocated memory.',
  codeSolution: '#include <iostream>\n#include <new>\nusing namespace std;\n\nstruct Point {\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {\n        cout << \"Point constructed at \" << this << endl;\n    }\n    ~Point() {\n        cout << \"Point destroyed\" << endl;\n    }\n};\n\nint main() {\n    // Allocate raw memory\n    char buffer[sizeof(Point)];\n    cout << \"Buffer address: \" << (void*)buffer << endl;\n    \n    // Placement new\n    Point* p = new(buffer) Point(10, 20);\n    \n    cout << \"Point at: \" << p << endl;\n    cout << \"x = \" << p->x << \", y = \" << p->y << endl;\n    \n    // Manual destructor call (required for placement new)\n    p->~Point();\n    \n    // Multiple objects in array buffer\n    alignas(Point) char bigBuffer[sizeof(Point) * 3];\n    Point* arr = reinterpret_cast<Point*>(bigBuffer);\n    \n    for (int i = 0; i < 3; i++) {\n        new(&arr[i]) Point(i * 10, i * 20);\n    }\n    \n    for (int i = 0; i < 3; i++) {\n        cout << \"arr[\" << i << \"]: (\" << arr[i].x << \", \" << arr[i].y << \")\" << endl;\n        arr[i].~Point();\n    }\n    \n    return 0;\n}',
  hint: 'Placement new is useful for memory pools and custom allocators.'
},
{
  "id": "cpp_operators_37",
  "topicId": "cpp_operators",
  "question": "Use dynamic_cast for safe downcasting with polymorphic types.",
  "mathSolution": "dynamic_cast returns null or throws bad_cast for invalid casts.",
  "codeSolution": "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << \"Drawing shape\" << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    void radius() { cout << \"Circle radius method\" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"Drawing square\" << endl; }\n    void side() { cout << \"Square side method\" << endl; }\n};\n\nint main() {\n    Shape* shapePtr = new Circle();\n    shapePtr->draw();\n    \n    // Downcast with dynamic_cast\n    Circle* circlePtr = dynamic_cast<Circle*>(shapePtr);\n    if (circlePtr) {\n        cout << \"Successfully cast to Circle\" << endl;\n        circlePtr->radius();\n    }\n    \n    // Invalid cast returns nullptr\n    Square* squarePtr = dynamic_cast<Square*>(shapePtr);\n    if (squarePtr) {\n        cout << \"This won't print\" << endl;\n    } else {\n        cout << \"Invalid cast to Square (returns nullptr)\" << endl;\n    }\n    \n    // Reference version throws bad_cast on failure\n    try {\n        Circle& circleRef = dynamic_cast<Circle&>(*shapePtr);\n        circleRef.radius();\n        \n        Square& squareRef = dynamic_cast<Square&>(*shapePtr);  // Throws bad_cast\n        squareRef.side();  // This line won't execute\n    } catch (const bad_cast& e) {\n        cout << \"bad_cast caught: \" << e.what() << endl;\n    }\n    \n    delete shapePtr;\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_38',
  topicId: 'cpp_operators',
  question: 'Use reinterpret_cast for low-level bit casting.',
  mathSolution: 'reinterpret_cast performs unsafe type punning.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Convert between unrelated pointer types\n    int intValue = 0x12345678;\n    int* intPtr = &intValue;\n    char* charPtr = reinterpret_cast<char*>(intPtr);\n    \n    cout << hex << \"int value: \" << intValue << endl;\n    cout << \"Bytes: \";\n    for (size_t i = 0; i < sizeof(int); i++) {\n        cout << static_cast<int>(charPtr[i]) << \" \";\n    }\n    cout << endl;\n    \n    // Convert pointer to integer (bit representation)\n    uintptr_t address = reinterpret_cast<uintptr_t>(intPtr);\n    cout << \"Address as uintptr_t: \" << hex << address << endl;\n    \n    // Convert back\n    int* recoveredPtr = reinterpret_cast<int*>(address);\n    cout << \"Recovered value: \" << *recoveredPtr << endl;\n    \n    // Type punning (dangerous - may break strict aliasing)\n    float f = 3.14159f;\n    int i = reinterpret_cast<int&>(f);\n    cout << \"Float: \" << f << \", as int: \" << hex << i << endl;\n    \n    return 0;\n}',
  hint: 'reinterpret_cast is implementation-defined and platform-specific; use sparingly.'
},
{
  id: 'cpp_operators_39',
  topicId: 'cpp_operators',
  question: 'Use const_cast to add or remove const qualifier.',
  mathSolution: 'const_cast modifies constness of a variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid printInt(int* ptr) {\n    cout << \"Value: \" << *ptr << endl;\n}\n\nvoid modifyInt(int* ptr) {\n    *ptr = 100;\n}\n\nint main() {\n    const int constValue = 50;\n    const int* constPtr = &constValue;\n    \n    // Remove const to call non-const function\n    int* modifiable = const_cast<int*>(constPtr);\n    \n    printInt(modifiable);  // OK: prints 50\n    // modifyInt(modifiable);  // Dangerous: modifying actually const memory\n    \n    // Practical use: calling legacy code\n    int actualMutable = 30;\n    const int* mutablePtr = &actualMutable;\n    modifyInt(const_cast<int*>(mutablePtr));\n    cout << \"Modified original: \" << actualMutable << endl;\n    \n    // Using const_cast to remove const from reference\n    const int& constRef = actualMutable;\n    int& mutableRef = const_cast<int&>(constRef);\n    mutableRef = 200;\n    cout << \"After const_cast reference: \" << actualMutable << endl;\n    \n    return 0;\n}',
  hint: 'Only use const_cast when you know the object isn\'t truly const.'
},
{
  id: 'cpp_operators_40',
  topicId: 'cpp_operators',
  question: 'Use static_cast for well-defined conversions.',
  mathSolution: 'static_cast performs safe, compile-time conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    // Numeric conversions\n    double pi = 3.14159;\n    int intPi = static_cast<int>(pi);\n    cout << \"intPi: \" << intPi << endl;  // 3\n    \n    // Implicit conversions made explicit\n    float f = static_cast<float>(pi);\n    cout << \"float: \" << f << endl;\n    \n    // Upcast (Derived to Base) - safe\n    Derived derived;\n    Base* basePtr = static_cast<Base*>(&derived);\n    \n    // Downcast (Base to Derived) - requires caution\n    Base* baseObj = new Derived();\n    Derived* derivedPtr = static_cast<Derived*>(baseObj);\n    cout << \"Downcast successful\" << endl;\n    \n    // Conversion through void*\n    int value = 42;\n    void* voidPtr = static_cast<void*>(&value);\n    int* intPtr = static_cast<int*>(voidPtr);\n    cout << \"Through void*: \" << *intPtr << endl;\n    \n    delete baseObj;\n    \n    return 0;\n}',
  hint: 'static_cast is preferred over C-style cast for well-defined conversions.'
},
{
  id: 'cpp_operators_41',
  topicId: 'cpp_operators',
  question: 'Use operator precedence with logical and relational operators.',
  mathSolution: 'Understand evaluation order to avoid common mistakes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 3, c = 2, d = 4;\n    \n    // Common precedence mistake\n    bool result1 = a == b && c < d;\n    cout << \"a == b && c < d: \" << boolalpha << result1 << endl;\n    // Actually: (a == b) && (c < d)\n    \n    // Another common mistake\n    bool result2 = a > b || b == c && d < c;\n    cout << \"a > b || b == c && d < c: \" << result2 << endl;\n    // && has higher precedence than ||\n    \n    // Assignment inside condition (often mistake)\n    int x = 10;\n    if (x = 5) {  // Assignment, not comparison\n        cout << \"This always executes (x = 5)\" << endl;\n    }\n    \n    // Correct comparison\n    if (x == 5) {\n        cout << \"x equals 5\" << endl;\n    }\n    \n    // Complex condition with parentheses for clarity\n    if ((a > b) && ((c < d) || (a == c))) {\n        cout << \"Complex condition satisfied\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'When in doubt, use parentheses to make precedence explicit.'
},
{
  id: 'cpp_operators_42',
  topicId: 'cpp_operators',
  question: 'Use bitwise shift operators for multiplication/division by powers of 2.',
  mathSolution: 'Left shift (<<) multiplies by 2; right shift (>>) divides by 2.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 16;\n    \n    // Left shift multiplication\n    cout << \"n << 1 = \" << (n << 1) << endl;  // 32 (16 * 2)\n    cout << \"n << 2 = \" << (n << 2) << endl;  // 64 (16 * 4)\n    cout << \"n << 3 = \" << (n << 3) << endl;  // 128 (16 * 8)\n    \n    // Right shift division\n    cout << \"n >> 1 = \" << (n >> 1) << endl;  // 8 (16 / 2)\n    cout << \"n >> 2 = \" << (n >> 2) << endl;  // 4 (16 / 4)\n    cout << \"n >> 3 = \" << (n >> 3) << endl;  // 2 (16 / 8)\n    \n    // Efficient multiplication by power of two\n    int x = 5;\n    x <<= 4;  // x * 16\n    cout << \"5 * 16 = \" << x << endl;\n    \n    // Getting individual bits\n    int flags = 0b10101010;\n    int thirdBit = (flags >> 2) & 1;\n    cout << \"Third bit: \" << thirdBit << endl;\n    \n    return 0;\n}',
  hint: 'Bit shifts are faster than multiplication/division for powers of two.'
},
{
  id: 'cpp_operators_43',
  topicId: 'cpp_operators',
  question: 'Use bitwise operators for flag manipulation.',
  mathSolution: 'Use | to set bits, & to clear bits, ^ to toggle bits.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nconst int READ = 1 << 0;     // 1\nconst int WRITE = 1 << 1;    // 2\nconst int EXECUTE = 1 << 2;  // 4\nconst int DELETE = 1 << 3;   // 8\n\nint main() {\n    int permissions = 0;\n    \n    // Set flags\n    permissions |= READ;\n    permissions |= WRITE;\n    cout << \"After setting READ and WRITE: \" << bitset<4>(permissions) << endl;\n    \n    // Check flag\n    if (permissions & READ) {\n        cout << \"Has READ permission\" << endl;\n    }\n    \n    // Toggle flag\n    permissions ^= EXECUTE;\n    cout << \"After toggling EXECUTE: \" << bitset<4>(permissions) << endl;\n    \n    // Clear flag\n    permissions &= ~WRITE;\n    cout << \"After clearing WRITE: \" << bitset<4>(permissions) << endl;\n    \n    // Multiple flags at once\n    permissions = READ | EXECUTE;\n    cout << \"READ | EXECUTE: \" << bitset<4>(permissions) << endl;\n    \n    // Check multiple flags\n    if ((permissions & (READ | EXECUTE)) == (READ | EXECUTE)) {\n        cout << \"Has both READ and EXECUTE\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Bitwise flags are memory-efficient for storing multiple boolean states.'
},
{
  id: 'cpp_operators_44',
  topicId: 'cpp_operators',
  question: 'Use ternary operator for conditional initialization.',
  mathSolution: 'Ternary operator provides inline conditional assignment.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    \n    // Conditional assignment\n    int max = (a > b) ? a : b;\n    string result = (a > b) ? \"a is greater\" : \"b is greater\";\n    \n    cout << \"Max: \" << max << endl;\n    cout << result << endl;\n    \n    // Nested ternary\n    int x = 0;\n    string type = (x > 0) ? \"positive\" : ((x < 0) ? \"negative\" : \"zero\");\n    cout << \"x is \" << type << endl;\n    \n    // In constexpr contexts (C++11)\n    constexpr int val = 5;\n    constexpr int absVal = (val > 0) ? val : -val;\n    cout << \"Absolute value: \" << absVal << endl;\n    \n    // Using in return statement\n    auto min = [](int a, int b) { return (a < b) ? a : b; };\n    cout << \"min(50, 30) = \" << min(50, 30) << endl;\n    \n    return 0;\n}',
  hint: 'Ternary operator can replace simple if-else for concise code.'
},
{
  id: 'cpp_operators_45',
  topicId: 'cpp_operators',
  question: 'Use comma operator in for loops.',
  mathSolution: 'Comma operator allows multiple expressions in loop control.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Multiple initializations and increments\n    for (int i = 0, j = 10; i < j; i++, j--) {\n        cout << \"i = \" << i << \", j = \" << j << endl;\n    }\n    \n    // Multiple variables in loop\n    int sum = 0, product = 1;\n    for (int i = 1; i <= 5; i++, sum += i, product *= i) {\n        // Loop body\n    }\n    cout << \"Sum: \" << sum << \", Product: \" << product << endl;\n    \n    // Comma in while loop\n    int x = 0, y = 10;\n    while (x < y, x < 5) {  // Uses rightmost expression\n        cout << \"x = \" << x << endl;\n        x++;\n    }\n    \n    // Comma operator returning last value\n    int a = (5, 10, 15);\n    cout << \"a = \" << a << endl;  // 15\n    \n    return 0;\n}',
  hint: 'Comma operator evaluates all expressions but returns only last value.'
},
{
  id: 'cpp_operators_46',
  topicId: 'cpp_operators',
  question: 'Use operator precedence with shift and bitwise operations.',
  mathSolution: 'Shift has higher precedence than bitwise operators.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nint main() {\n    int a = 0b1010;\n    int b = 0b1100;\n    \n    // Shift has higher precedence than &, |, ^\n    int result1 = a << 1 & b;\n    cout << \"a << 1 & b: \" << bitset<4>(result1) << endl;\n    // Equivalent to: (a << 1) & b\n    \n    int result2 = a & b << 2;\n    cout << \"a & b << 2: \" << bitset<8>(result2) << endl;\n    // Equivalent to: a & (b << 2)\n    \n    // Without parentheses, precedence matters\n    int result3 = a << 2 | b;\n    cout << \"a << 2 | b: \" << bitset<8>(result3) << endl;\n    \n    // Use parentheses for clarity\n    int result4 = (a << 2) | (b << 1);\n    cout << \"(a << 2) | (b << 1): \" << bitset<8>(result4) << endl;\n    \n    // Comparison with shift operators\n    bool condition = (a << 1) == 20;\n    cout << \"(a << 1) == 20: \" << boolalpha << condition << endl;\n    \n    return 0;\n}',
  hint: 'Always use parentheses when mixing shift and bitwise operators.'
},
{
  id: 'cpp_operators_47',
  topicId: 'cpp_operators',
  question: 'Use decltype with expressions for type deduction.',
  mathSolution: 'decltype(expression) deduces type without evaluation.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    // decltype with variables\n    decltype(a) c = a;      // c is int\n    decltype(b) d = b;      // d is double\n    \n    cout << "c type: \" << typeid(c).name() << endl;\n    cout << \"d type: \" << typeid(d).name() << endl;\n    \n    // decltype with expressions\n    decltype(a + b) e = a + b;  // e is double (promotion)\n    cout << \"a + b type: \" << typeid(e).name() << endl;\n    \n    // decltype with parentheses (gives reference)\n    decltype((a)) ref = a;  // reference to int\n    ref = 20;\n    cout << \"a after reference modification: \" << a << endl;\n    \n    // decltype with function call\n    int add(int, int);\n    decltype(add(0, 0)) result = 42;  // result is int\n    \n    // For trailing return types\n    auto multiply = [](auto x, auto y) -> decltype(x * y) {\n        return x * y;\n    };\n    \n    cout << \"multiply(5, 3.14): \" << multiply(5, 3.14) << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic code and preserving expression type.'
},
{
  id: 'cpp_operators_48',
  topicId: 'cpp_operators',
  question: 'Use noexcept operator to check exception safety.',
  mathSolution: 'noexcept(expression) evaluates expression\'s noexcept guarantee.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid f1() noexcept {}\nvoid f2() {}\nvoid f3() noexcept(false) {}\n\ntemplate<typename T>\nvoid moveIfNoexcept(T& src, T& dest) noexcept(noexcept(dest = move(src))) {\n    if constexpr (noexcept(dest = move(src))) {\n        dest = move(src);\n        cout << \"Move used (noexcept)\" << endl;\n    } else {\n        dest = src;\n        cout << \"Copy used (not noexcept)\" << endl;\n    }\n}\n\nint main() {\n    cout << boolalpha;\n    \n    // Testing noexcept-ness\n    cout << \"f1() is noexcept: \" << noexcept(f1()) << endl;\n    cout << \"f2() is noexcept: \" << noexcept(f2()) << endl;\n    cout << \"f3() is noexcept: \" << noexcept(f3()) << endl;\n    \n    // noexcept with expressions\n    int a = 5;\n    cout << \"int() is noexcept: \" << noexcept(int()) << endl;\n    \n    // Conditional noexcept\n    vector<int> v1, v2;\n    moveIfNoexcept(v1, v2);\n    \n    return 0;\n}',
  hint: 'noexcept operator enables compile-time checks for exception safety.'
},
{
  id: 'cpp_operators_49',
  topicId: 'cpp_operators',
  question: 'Use user-defined literals with operator"" for custom suffixes.',
  mathSolution: 'operator"" defines custom literal suffixes.',
  codeSolution: '#include <iostream>\n#include <chrono>\nusing namespace std::chrono_literals;\nusing namespace std;\n\n// Custom literal for kilometers\nlong double operator\"\" _km(long double x) {\n    return x * 1000.0;\n}\n\n// Custom literal for miles to meters\nlong double operator\"\" _mi(long double x) {\n    return x * 1609.34;\n}\n\n// Custom literal for bytes\nconstexpr unsigned long long operator\"\" _KB(unsigned long long x) {\n    return x * 1024;\n}\n\nconstexpr unsigned long long operator\"\" _MB(unsigned long long x) {\n    return x * 1024 * 1024;\n}\n\n// Custom literal for degrees to radians\nconstexpr long double operator\"\" _deg(long double x) {\n    return x * 3.14159265358979323846L / 180.0;\n}\n\nint main() {\n    auto distance = 10.0_km;\n    auto miles = 5.0_mi;\n    auto memory = 1_MB;\n    auto angle = 180.0_deg;\n    \n    cout << \"10 km = \" << distance << \" meters\" << endl;\n    cout << \"5 miles = \" << miles << \" meters\" << endl;\n    cout << \"1 MB = \" << memory << \" bytes\" << endl;\n    cout << \"180 degrees = \" << angle << \" radians\" << endl;\n    \n    // Standard literals (C++14)\n    using namespace std::chrono_literals;\n    auto sec = 5s;\n    cout << \"5 seconds = \" << sec.count() << \" seconds\" << endl;\n    \n    return 0;\n}',
  hint: 'User-defined literals make code more expressive and units-aware.'
},
{
  id: 'cpp_operators_50',
  topicId: 'cpp_operators',
  question: 'Combine multiple operators in comprehensive expression example.',
  mathSolution: 'Use various operators together understanding precedence.',
  codeSolution: '#include <iostream>\n#include <bitset>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    cout << "=== Comprehensive Operators Demo ===" << endl;\n    \n    // Arithmetic and assignment\n    int a = 10, b = 3, c = 5;\n    a += b * c;  // Multiplication before addition\n    cout << "a += b * c -> a = " << a << endl;\n    \n    // Logical and relational\n    bool condition = (a > b) && (c < a) || (b == c);\n    cout << "Condition result: " << boolalpha << condition << endl;\n    \n    // Bitwise operations\n    int flags = 0b1010;\n    flags |= 0b0101;  // Set bits\n    flags ^= 0b1100;  // Toggle bits\n    flags &= 0b1111;  // Mask bits\n    cout << "Flags: " << bitset<4>(flags) << endl;\n    \n    // Pointer and address\n    int x = 42;\n    int* ptr = &x;\n    cout << "*ptr = " << *ptr << ", &x = " << &x << endl;\n    \n    // Ternary\n    int maxVal = (a > b) ? (a > c ? a : c) : (b > c ? b : c);\n    cout << "Maximum of a,b,c: " << maxVal << endl;\n    \n    // Scope resolution and memory\n    vector<int> vec = {1, 2, 3, 4, 5};\n    auto sum = [&]() -> int {\n        int s = 0;\n        for (int v : vec) s += v;\n        return s;\n    };\n    cout << "Sum of vector: " << sum() << endl;\n    \n    // Cast operators\n    double pi = 3.14159;\n    int intPi = static_cast<int>(pi);\n    cout << "static_cast<int>(pi): " << intPi << endl;\n    \n    // sizeof\n    cout << "sizeof(vector<int>): " << sizeof(vec) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'Understanding operator precedence is crucial for writing correct code.'
}
);