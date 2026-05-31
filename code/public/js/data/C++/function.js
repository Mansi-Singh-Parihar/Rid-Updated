QuizData.questions.push(
{
  id: 'cpp_functions_1',
  topicId: 'cpp_functions',
  question: 'Write a function that adds two integers and returns the result.',
  mathSolution: 'Function with parameters and return value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    cout << "Sum: " << result << endl;\n    return 0;\n}',
  hint: 'Function syntax: return_type name(parameters) { body }'
},
{
  id: 'cpp_functions_2',
  topicId: 'cpp_functions',
  question: 'Write a void function that prints a greeting without returning a value.',
  mathSolution: 'void functions perform actions but return nothing.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid greet(string name) {\n    cout << "Hello, " << name << "!" << endl;\n}\n\nint main() {\n    greet("John");\n    greet("Alice");\n    return 0;\n}',
  hint: 'void functions do not have a return statement (or have return; without value).'
},
{
  id: 'cpp_functions_3',
  topicId: 'cpp_functions',
  question: 'Create a function with default parameters.',
  mathSolution: 'Default values are used when arguments are omitted.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid display(string name, int age = 18, string city = "Unknown") {\n    cout << "Name: " << name << ", Age: " << age << ", City: " << city << endl;\n}\n\nint main() {\n    display("John", 25, "NYC");\n    display("Alice", 30);\n    display("Bob");\n    return 0;\n}',
  hint: 'Default parameters must be declared from rightmost to leftmost.'
},
{
  id: 'cpp_functions_4',
  topicId: 'cpp_functions',
  question: 'Implement function overloading for different data types.',
  mathSolution: 'Multiple functions with same name but different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\ndouble max(double a, double b) {\n    return (a > b) ? a : b;\n}\n\nint max(int a, int b, int c) {\n    return max(max(a, b), c);\n}\n\nint main() {\n    cout << max(5, 3) << endl;\n    cout << max(5.5, 3.2) << endl;\n    cout << max(5, 8, 2) << endl;\n    return 0;\n}',
  hint: 'Function overloading is resolved at compile time based on arguments.'
},
{
  id: 'cpp_functions_5',
  topicId: 'cpp_functions',
  question: 'Pass arguments by value (copy) to function.',
  mathSolution: 'By value copies the argument; original unchanged.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int x) {\n    x++;\n    cout << "Inside function: " << x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(num);\n    cout << "After: " << num << endl;  // Still 10\n    return 0;\n}',
  hint: 'Pass by value creates a copy, so original variable is not modified.'
},
{
  id: 'cpp_functions_6',
  topicId: 'cpp_functions',
  question: 'Pass arguments by reference to modify original.',
  mathSolution: 'By reference accesses the original variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int &x) {\n    x++;\n    cout << "Inside function: " << x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(num);\n    cout << "After: " << num << endl;  // Now 11\n    return 0;\n}',
  hint: 'Use & to pass by reference; changes affect original variable.'
},
{
  id: 'cpp_functions_7',
  topicId: 'cpp_functions',
  question: 'Pass pointer to modify original variable.',
  mathSolution: 'Pointer allows indirect access to variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int *x) {\n    (*x)++;\n    cout << "Inside function: " << *x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(&num);\n    cout << "After: " << num << endl;  // Now 11\n    return 0;\n}',
  hint: 'Pass address using &, receive with *, and dereference to modify.'
},
{
  id: 'cpp_functions_8',
  topicId: 'cpp_functions',
  question: 'Write a recursive function to calculate factorial.',
  mathSolution: 'Function calls itself with modified parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    cout << "5! = " << factorial(5) << endl;\n    cout << "10! = " << factorial(10) << endl;\n    return 0;\n}',
  hint: 'Recursive functions must have a base case to stop recursion.'
},
{
  id: 'cpp_functions_9',
  topicId: 'cpp_functions',
  question: 'Write a recursive function for Fibonacci series.',
  mathSolution: 'Fibonacci: F(n) = F(n-1) + F(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    cout << "Fibonacci(0): " << fibonacci(0) << endl;\n    cout << "Fibonacci(5): " << fibonacci(5) << endl;\n    cout << "Fibonacci(10): " << fibonacci(10) << endl;\n    return 0;\n}',
  hint: 'Recursive Fibonacci has exponential time complexity; use memoization for optimization.'
},
{
  id: 'cpp_functions_10',
  topicId: 'cpp_functions',
  question: 'Use inline function to reduce function call overhead.',
  mathSolution: 'inline suggests compiler to replace call with code.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << "Square of " << i << " is " << square(i) << endl;\n    }\n    return 0;\n}',
  hint: 'inline is a request; compiler may ignore for large functions.'
},
{
  id: 'cpp_functions_11',
  topicId: 'cpp_functions',
  question: 'Return multiple values using reference parameters.',
  mathSolution: 'Use references to return additional values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid getMinMax(int arr[], int size, int &min, int &max) {\n    min = arr[0];\n    max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) min = arr[i];\n        if (arr[i] > max) max = arr[i];\n    }\n}\n\nint main() {\n    int numbers[] = {5, 2, 8, 1, 9, 3, 7};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    int minVal, maxVal;\n    \n    getMinMax(numbers, size, minVal, maxVal);\n    cout << "Min: " << minVal << ", Max: " << maxVal << endl;\n    \n    return 0;\n}',
  hint: 'Reference parameters allow functions to "return" multiple values.'
},
{
  id: 'cpp_functions_12',
  topicId: 'cpp_functions',
  question: 'Return multiple values using struct.',
  mathSolution: 'Return a struct containing all required values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct MinMax {\n    int min;\n    int max;\n};\n\nMinMax getMinMax(int arr[], int size) {\n    MinMax result;\n    result.min = arr[0];\n    result.max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < result.min) result.min = arr[i];\n        if (arr[i] > result.max) result.max = arr[i];\n    }\n    return result;\n}\n\nint main() {\n    int numbers[] = {5, 2, 8, 1, 9, 3, 7};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    MinMax result = getMinMax(numbers, size);\n    cout << "Min: " << result.min << ", Max: " << result.max << endl;\n    \n    return 0;\n}',
  hint: 'Structs provide a clean way to return multiple values.'
},
{
  id: 'cpp_functions_13',
  topicId: 'cpp_functions',
  question: 'Use function overloading for different number of parameters.',
  mathSolution: 'Same function name with different parameter counts.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint area(int side) {\n    return side * side;\n}\n\nint area(int length, int width) {\n    return length * width;\n}\n\ndouble area(double radius) {\n    return 3.14159 * radius * radius;\n}\n\nint main() {\n    cout << "Square area (5): " << area(5) << endl;\n    cout << "Rectangle area (4,6): " << area(4, 6) << endl;\n    cout << "Circle area (3.0): " << area(3.0) << endl;\n    return 0;\n}',
  hint: 'Overloading by number of parameters is valid.'
},
{
  id: 'cpp_functions_14',
  topicId: 'cpp_functions',
  question: 'Pass array to function by pointer.',
  mathSolution: 'Arrays decay to pointers when passed to functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid printArray(int *arr, int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\nvoid doubleArray(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        arr[i] *= 2;\n    }\n}\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    cout << "Original: ";\n    printArray(numbers, size);\n    \n    doubleArray(numbers, size);\n    \n    cout << "Doubled: ";\n    printArray(numbers, size);\n    \n    return 0;\n}',
  hint: 'Array parameter can be written as int* arr or int arr[].'
},
{
  id: 'cpp_functions_15',
  topicId: 'cpp_functions',
  question: 'Pass 2D array to function with column size specified.',
  mathSolution: 'Second dimension must be specified for 2D arrays.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconst int COLS = 3;\n\nvoid printMatrix(int matrix[][COLS], int rows) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < COLS; j++) {\n            cout << matrix[i][j] << " ";\n        }\n        cout << endl;\n    }\n}\n\nvoid transpose(int matrix[][COLS], int rows, int result[][rows]) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < COLS; j++) {\n            result[j][i] = matrix[i][j];\n        }\n    }\n}\n\nint main() {\n    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int transposed[3][2];\n    \n    cout << "Original matrix:\\n";\n    printMatrix(matrix, 2);\n    \n    transpose(matrix, 2, transposed);\n    \n    cout << "Transposed matrix:\\n";\n    printMatrix(transposed, 3);\n    \n    return 0;\n}',
  hint: 'For 2D arrays, all dimensions except the first must be known at compile time.'
},
{
  id: 'cpp_functions_16',
  topicId: 'cpp_functions',
  question: 'Use const parameters for read-only access.',
  mathSolution: 'const prevents modification of parameter.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid display(const string &str) {\n    // str += "!";  // Error: cannot modify const reference\n    cout << str << endl;\n}\n\nint getArea(const int &width, const int &height) {\n    return width * height;\n}\n\nint main() {\n    string message = "Hello World";\n    display(message);\n    \n    cout << "Area: " << getArea(5, 10) << endl;\n    \n    return 0;\n}',
  hint: 'const parameters document that input won\'t be modified.'
},
{
  "id": "cpp_functions_17",
  "topicId": "cpp_functions",
  "question": "Create function template for generic programming.",
  "mathSolution": "Templates work with any data type.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate <typename T>\nvoid swap(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    cout << max(5, 3) << endl;\n    cout << max(5.5, 3.2) << endl;\n    cout << max('A', 'Z') << endl;\n    \n    int x = 10, y = 20;\n    swap(x, y);\n    cout << \"x=\" << x << \", y=\" << y << endl;\n    \n    return 0;\n}",
  "hint": "Template functions are defined with template<typename T> before function."
},
{
  id: 'cpp_functions_18',
  topicId: 'cpp_functions',
  question: 'Use function template with multiple type parameters.',
  mathSolution: 'Specify multiple template parameters for different types.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(5, 3) << endl;           // int\n    cout << add(5, 3.14) << endl;        // double\n    cout << add(5.5, 3) << endl;         // double\n    cout << add(5.5, 3.14f) << endl;      // double\n    \n    // Using different types\n    cout << add(string("Hello "), "World") << endl;\n    \n    return 0;\n}',
  hint: 'Use auto as return type with trailing decltype for generic arithmetic.'
},
{
  id: 'cpp_functions_19',
  topicId: 'cpp_functions',
  question: 'Create function with initializer_list parameter.',
  mathSolution: 'initializer_list allows variable number of arguments of same type.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\nint sum(initializer_list<int> numbers) {\n    int total = 0;\n    for (int n : numbers) {\n        total += n;\n    }\n    return total;\n}\n\nint main() {\n    cout << sum({1, 2, 3, 4, 5}) << endl;\n    cout << sum({10, 20, 30}) << endl;\n    cout << sum({1, 2}) << endl;\n    cout << sum({}) << endl;\n    \n    return 0;\n}',
  hint: 'initializer_list provides a way to accept variable arguments like {...}.'
},
{
  id: 'cpp_functions_20',
  topicId: 'cpp_functions',
  question: 'Use lambda expression as function argument.',
  mathSolution: 'Lambda can be passed directly to algorithms or functions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    // Lambda to check even numbers\n    auto isEven = [](int n) { return n % 2 == 0; };\n    \n    int evenCount = count_if(numbers.begin(), numbers.end(), isEven);\n    cout << "Even numbers: " << evenCount << endl;\n    \n    // Lambda to square numbers\n    transform(numbers.begin(), numbers.end(), numbers.begin(), \n              [](int n) { return n * n; });\n    \n    cout << "Squared numbers: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda syntax: [capture](parameters) -> return_type { body }'
},
{
  id: 'cpp_functions_21',
  topicId: 'cpp_functions',
  question: 'Create lambda with capture by value and reference.',
  mathSolution: 'Capture list defines how outside variables are accessed.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int multiplier = 10;\n    int offset = 5;\n    \n    // Capture by value (copies)\n    auto byValue = [multiplier](int x) { return x * multiplier; };\n    \n    // Capture by reference (can modify)\n    auto byReference = [&offset](int x) { offset += x; return offset; };\n    \n    // Capture all by value\n    auto allByValue = [=](int x) { return x * multiplier + offset; };\n    \n    // Capture all by reference\n    auto allByRef = [&](int x) { multiplier = x; return multiplier; };\n    \n    cout << "By value: " << byValue(5) << endl;\n    cout << "By reference: " << byReference(5) << endl;\n    cout << "Offset now: " << offset << endl;\n    \n    return 0;\n}',
  hint: '[=] captures all by value, [&] captures all by reference.'
},
{
  id: 'cpp_functions_22',
  topicId: 'cpp_functions',
  question: 'Use constexpr function for compile-time computation.',
  mathSolution: 'constexpr functions can be evaluated at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nconstexpr int square(int x) {\n    return x * x;\n}\n\nint main() {\n    // Compile-time computation\n    constexpr int fact5 = factorial(5);\n    constexpr int sq10 = square(10);\n    constexpr int arrSize = square(5);\n    int arr[arrSize];  // Valid because arrSize is compile-time constant\n    \n    cout << "5! = " << fact5 << endl;\n    cout << "10^2 = " << sq10 << endl;\n    \n    // Can also be called at runtime\n    int n = 6;\n    cout << "6! = " << factorial(n) << endl;\n    \n    return 0;\n}',
  hint: 'constexpr functions can be used where compile-time constants are required.'
},
{
  id: 'cpp_functions_23',
  topicId: 'cpp_functions',
  question: 'Use function returning pointer to local variable (dangerous - demonstrate).',
  mathSolution: 'Never return pointer to local variable (undefined behavior).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// DANGEROUS: Returns pointer to local variable\nint* badFunction() {\n    int local = 42;\n    return &local;  // local will be destroyed after function returns\n}\n\n// CORRECT: Use static or allocate on heap\nint* correctFunction() {\n    static int staticVar = 42;  // Static variable persists\n    return &staticVar;\n}\n\nint main() {\n    int* ptr = correctFunction();\n    cout << "Value: " << *ptr << endl;\n    \n    // This is undefined behavior\n    // int* bad = badFunction();\n    // cout << *bad << endl;\n    \n    return 0;\n}',
  hint: 'Never return pointers to local variables; they are destroyed when function exits.'
},
{
  id: 'cpp_functions_24',
  topicId: 'cpp_functions',
  question: 'Use function returning reference to local variable (dangerous).',
  mathSolution: 'Returning reference to local variable causes dangling reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// DANGEROUS: Returns reference to local variable\nint& badFunction() {\n    int local = 42;\n    return local;  // local will be destroyed\n}\n\n// CORRECT: Return reference to static or global\nint& correctFunction() {\n    static int staticVar = 42;\n    return staticVar;\n}\n\nint main() {\n    int& ref = correctFunction();\n    cout << "Value: " << ref << endl;\n    ref = 100;\n    cout << "Modified: " << correctFunction() << endl;\n    \n    // This is undefined behavior\n    // int& bad = badFunction();\n    \n    return 0;\n}',
  hint: 'Only return references to variables that outlive the function (static, global, parameters).'
},
{
  id: 'cpp_functions_25',
  topicId: 'cpp_functions',
  question: 'Use std::function to store callable objects.',
  mathSolution: 'std::function can hold functions, lambdas, function objects.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    // Store regular function\n    function<int(int, int)> func1 = add;\n    cout << "add(5,3) = " << func1(5, 3) << endl;\n    \n    // Store lambda\n    function<int(int, int)> func2 = [](int a, int b) { return a * b; };\n    cout << "multiply(5,3) = " << func2(5, 3) << endl;\n    \n    // Store member function\n    struct Calculator {\n        int divide(int a, int b) { return a / b; }\n    } calc;\n    function<int(Calculator&, int, int)> func3 = &Calculator::divide;\n    cout << "divide(10,2) = " << func3(calc, 10, 2) << endl;\n    \n    return 0;\n}',
  hint: '#include <functional> for std::function.'
},
{
  id: 'cpp_functions_26',
  topicId: 'cpp_functions',
  question: 'Use function pointer to call function dynamically.',
  mathSolution: 'Function pointers store address of functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    // Function pointer declaration\n    int (*operation)(int, int);\n    \n    operation = add;\n    cout << "add(5,3) = " << operation(5, 3) << endl;\n    \n    operation = subtract;\n    cout << "subtract(5,3) = " << operation(5, 3) << endl;\n    \n    operation = multiply;\n    cout << "multiply(5,3) = " << operation(5, 3) << endl;\n    \n    // Array of function pointers\n    int (*operations[])(int, int) = {add, subtract, multiply};\n    \n    for (int i = 0; i < 3; i++) {\n        cout << "Result " << i << ": " << operations[i](10, 5) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Function pointer syntax: return_type (*name)(parameter_types)'
},
{
  id: 'cpp_functions_27',
  topicId: 'cpp_functions',
  question: 'Create variadic function using initializer_list.',
  mathSolution: 'initializer_list accepts variable number of arguments.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\ntemplate<typename T>\nT sum(initializer_list<T> numbers) {\n    T total = 0;\n    for (const T& num : numbers) {\n        total += num;\n    }\n    return total;\n}\n\ntemplate<typename T>\nT average(initializer_list<T> numbers) {\n    if (numbers.size() == 0) return 0;\n    T total = sum(numbers);\n    return total / numbers.size();\n}\n\nint main() {\n    cout << "Sum: " << sum({1, 2, 3, 4, 5}) << endl;\n    cout << "Average: " << average({10, 20, 30, 40, 50}) << endl;\n    cout << "Sum (double): " << sum({1.1, 2.2, 3.3}) << endl;\n    \n    return 0;\n}',
  hint: 'initializer_list provides a typed way to accept variable arguments.'
},
{
  id: 'cpp_functions_28',
  topicId: 'cpp_functions',
  question: 'Use default arguments with reference parameters.',
  mathSolution: 'Default arguments can be used with references.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid configure(int& value, int increment = 1) {\n    value += increment;\n}\n\nvoid logMessage(const string& message, const string& prefix = "[INFO]") {\n    cout << prefix << " " << message << endl;\n}\n\nint main() {\n    int counter = 0;\n    configure(counter);\n    cout << "Counter: " << counter << endl;\n    configure(counter, 5);\n    cout << "Counter: " << counter << endl;\n    \n    logMessage("Application started");\n    logMessage("Error occurred", "[ERROR]");\n    logMessage("Process completed", "[SUCCESS]");\n    \n    return 0;\n}',
  hint: 'Default arguments work with references; reference must be to modifiable lvalue.'
},
{
  "id": "cpp_functions_29",
  "topicId": "cpp_functions",
  "question": "Create function with noexcept specification.",
  "mathSolution": "noexcept indicates function does not throw exceptions.",
  "codeSolution": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid noThrow() noexcept {\n    cout << \"This function guarantees no exceptions\" << endl;\n}\n\nvoid mayThrow() {\n    throw runtime_error(\"Exception from mayThrow\");\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"noThrow() is noexcept: \" << noexcept(noThrow()) << endl;\n    cout << \"mayThrow() is noexcept: \" << noexcept(mayThrow()) << endl;\n    \n    try {\n        // noThrow();  // Safe, won't throw\n        mayThrow();\n    } catch (const exception& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "noexcept enables compiler optimizations and indicates exception safety."
},
{
  id: 'cpp_functions_30',
  topicId: 'cpp_functions',
  question: 'Use trailing return type syntax (C++11).',
  mathSolution: 'auto function(parameters) -> return_type syntax.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Traditional\nint add1(int a, int b) {\n    return a + b;\n}\n\n// Trailing return type\nauto add2(int a, int b) -> int {\n    return a + b;\n}\n\n// Useful with templates\ntemplate<typename T, typename U>\nauto multiply(T a, U b) -> decltype(a * b) {\n    return a * b;\n}\n\nint main() {\n    cout << "add1: " << add1(5, 3) << endl;\n    cout << "add2: " << add2(5, 3) << endl;\n    cout << "multiply(5, 3.14): " << multiply(5, 3.14) << endl;\n    \n    return 0;\n}',
  hint: 'Trailing return type is useful when return type depends on parameters.'
},
{
  id: 'cpp_functions_31',
  topicId: 'cpp_functions',
  question: 'Use decltype to deduce return type.',
  mathSolution: 'decltype(expression) yields type of expression.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\n// Using decltype for return type\nauto getFunction() -> decltype(&add) {\n    return &add;\n}\n\nint main() {\n    auto func = getFunction();\n    cout << "Result: " << func(10, 20) << endl;\n    \n    int x = 10;\n    double y = 3.14;\n    \n    // decltype with expression\n    decltype(x + y) result = x + y;\n    cout << "Type of result: " << typeid(result).name() << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic programming where type depends on parameters.'
},
{
  id: 'cpp_functions_32',
  topicId: 'cpp_functions',
  question: 'Create function that returns array using std::array.',
  mathSolution: 'Return std::array instead of C-style array.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\narray<int, 5> createArray() {\n    array<int, 5> arr = {1, 2, 3, 4, 5};\n    return arr;\n}\n\nint main() {\n    array<int, 5> numbers = createArray();\n    \n    cout << "Array elements: ";\n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Return std::array instead of C-style arrays for safety and convenience.'
},
{
  id: 'cpp_functions_33',
  topicId: 'cpp_functions',
  question: 'Use function overloading with const parameters.',
  mathSolution: 'const can be used to overload functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid print(int &value) {\n    cout << "Non-const reference: " << value << endl;\n}\n\nvoid print(const int &value) {\n    cout << "Const reference: " << value << endl;\n}\n\nvoid process(int *ptr) {\n    cout << "Non-const pointer" << endl;\n}\n\nvoid process(const int *ptr) {\n    cout << "Pointer to const" << endl;\n}\n\nint main() {\n    int x = 42;\n    const int y = 100;\n    \n    print(x);  // Calls non-const version\n    print(y);  // Calls const version\n    \n    process(&x);\n    process(&y);\n    \n    return 0;\n}',
  hint: 'Overloading on const is valid for references and pointers.'
},
{
  id: 'cpp_functions_34',
  topicId: 'cpp_functions',
  question: 'Use static variables inside function to preserve state.',
  mathSolution: 'static local variable retains value between calls.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint counter() {\n    static int count = 0;\n    count++;\n    return count;\n}\n\nvoid trackCalls() {\n    static int callCount = 0;\n    callCount++;\n    cout << "Function called " << callCount << " times" << endl;\n}\n\ndouble runningAverage(double value) {\n    static double sum = 0;\n    static int count = 0;\n    sum += value;\n    count++;\n    return sum / count;\n}\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << "Call " << i+1 << ": counter() = " << counter() << endl;\n    }\n    \n    trackCalls();\n    trackCalls();\n    trackCalls();\n    \n    cout << runningAverage(10) << endl;\n    cout << runningAverage(20) << endl;\n    cout << runningAverage(30) << endl;\n    \n    return 0;\n}',
  hint: 'static variables in functions are initialized only once and persist across calls.'
},
{
  id: 'cpp_functions_35',
  topicId: 'cpp_functions',
  question: 'Create function that returns a lambda.',
  mathSolution: 'Functions can return lambda expressions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nauto createMultiplier(int factor) {\n    return [factor](int x) { return x * factor; };\n}\n\nauto createCounter() {\n    int count = 0;\n    return [=]() mutable { return ++count; };\n}\n\nauto createAdder(int a) {\n    return [a](int b) { return a + b; };\n}\n\nint main() {\n    auto times2 = createMultiplier(2);\n    auto times5 = createMultiplier(5);\n    \n    cout << "Times 2 (5): " << times2(5) << endl;\n    cout << "Times 5 (5): " << times5(5) << endl;\n    \n    auto counter = createCounter();\n    cout << counter() << endl;\n    cout << counter() << endl;\n    cout << counter() << endl;\n    \n    auto add5 = createAdder(5);\n    cout << "Add 5 to 10: " << add5(10) << endl;\n    \n    return 0;\n}',
  hint: 'Returning lambdas allows creation of custom function objects.'
},
{
  "id": "cpp_functions_36",
  "topicId": "cpp_functions",
  "question": "Write function that validates user input with reference parameter.",
  "mathSolution": "Use references to return validation status and value.",
  "codeSolution": "#include <iostream>\n#include <limits>\n#include <string>\nusing namespace std;\n\nbool getInt(const string& prompt, int& value) {\n    cout << prompt;\n    cin >> value;\n    \n    if (cin.fail()) {\n        cin.clear();\n        cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n        return false;\n    }\n    cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n    return true;\n}\n\nbool getIntWithinRange(const string& prompt, int& value, int minVal, int maxVal) {\n    if (!getInt(prompt, value)) {\n        return false;\n    }\n    if (value < minVal || value > maxVal) {\n        return false;\n    }\n    return true;\n}\n\nint main() {\n    int age = 0;\n    int score = 0;\n    \n    cout << \"=== Age Input ===\" << endl;\n    if (getIntWithinRange(\"Enter age (1-150): \", age, 1, 150)) {\n        cout << \"Valid age: \" << age << endl;\n    } else {\n        cout << \"Invalid age input\" << endl;\n    }\n    \n    cout << \"\\n=== Score Input ===\" << endl;\n    if (getIntWithinRange(\"Enter score (0-100): \", score, 0, 100)) {\n        cout << \"Valid score: \" << score << endl;\n    } else {\n        cout << \"Invalid score input\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Use boolean return with reference parameters for functions that can fail."
},
{
  id: 'cpp_functions_37',
  topicId: 'cpp_functions',
  question: 'Create function that swaps any two variables (template).',
  mathSolution: 'Template function works with any data type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nvoid mySwap(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    cout << "Before swap: x=" << x << ", y=" << y << endl;\n    mySwap(x, y);\n    cout << "After swap: x=" << x << ", y=" << y << endl;\n    \n    double a = 1.5, b = 2.5;\n    cout << "\\nBefore swap: a=" << a << ", b=" << b << endl;\n    mySwap(a, b);\n    cout << "After swap: a=" << a << ", b=" << b << endl;\n    \n    string s1 = "Hello", s2 = "World";\n    cout << "\\nBefore swap: s1=\\"" << s1 << "\\", s2=\\"" << s2 << "\\"" << endl;\n    mySwap(s1, s2);\n    cout << "After swap: s1=\\"" << s1 << "\\", s2=\\"" << s2 << "\\"" << endl;\n    \n    return 0;\n}',
  hint: 'Template functions work for any type that supports assignment and copy construction.'
},
{
  id: 'cpp_functions_38',
  topicId: 'cpp_functions',
  question: 'Create function to compute power using recursion and binary exponentiation.',
  mathSolution: 'Efficient exponentiation for integer powers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nlong long powerRecursive(int base, int exponent) {\n    if (exponent == 0) return 1;\n    if (exponent == 1) return base;\n    \n    long long half = powerRecursive(base, exponent / 2);\n    if (exponent % 2 == 0) {\n        return half * half;\n    } else {\n        return half * half * base;\n    }\n}\n\nint main() {\n    cout << "2^10 = " << powerRecursive(2, 10) << endl;\n    cout << "3^8 = " << powerRecursive(3, 8) << endl;\n    cout << "5^5 = " << powerRecursive(5, 5) << endl;\n    \n    return 0;\n}',
  hint: 'Recursive binary exponentiation uses O(log n) time instead of O(n).'
},
{
  id: 'cpp_functions_39',
  topicId: 'cpp_functions',
  question: 'Use array reference parameter for fixed-size arrays.',
  mathSolution: 'Pass array by reference to preserve size information.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<size_t N>\nvoid printArray(const int (&arr)[N]) {\n    cout << "Array size: " << N << ", elements: ";\n    for (size_t i = 0; i < N; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\ntemplate<size_t N>\nvoid reverseArray(int (&arr)[N]) {\n    for (size_t i = 0; i < N / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[N - 1 - i];\n        arr[N - 1 - i] = temp;\n    }\n}\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {10, 20, 30, 40};\n    \n    printArray(arr1);\n    reverseArray(arr1);\n    printArray(arr1);\n    \n    printArray(arr2);\n    reverseArray(arr2);\n    printArray(arr2);\n    \n    return 0;\n}',
  hint: 'Template parameter for array size preserves size information when passing arrays by reference.'
},
{
  id: 'cpp_functions_40',
  topicId: 'cpp_functions',
  question: 'Create function with constexpr if (C++17) for compile-time branching.',
  mathSolution: 'if constexpr eliminates dead branches at compile time.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nvoid printInfo(const T& value) {\n    if constexpr (is_integral<T>::value) {\n        cout << "Integral type: " << value << endl;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << "Floating point type: " << value << endl;\n    } else if constexpr (is_same<T, string>::value) {\n        cout << "String: \\"" << value << "\\"" << endl;\n    } else {\n        cout << "Other type" << endl;\n    }\n}\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        return value * 2;\n    } else {\n        return value + value;\n    }\n}\n\nint main() {\n    printInfo(42);\n    printInfo(3.14);\n    printInfo(string("Hello"));\n    printInfo(true);\n    \n    cout << "process(5): " << process(5) << endl;\n    cout << "process(3.14): " << process(3.14) << endl;\n    \n    return 0;\n}',
  hint: 'if constexpr discards branches that are not taken at compile time.'
},
{
  id: 'cpp_functions_41',
  topicId: 'cpp_functions',
  question: 'Create function with [[nodiscard]] attribute (C++17).',
  mathSolution: '[[nodiscard]] warns if return value is ignored.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n[[nodiscard]] int getValue() {\n    return 42;\n}\n\n[[nodiscard]] bool isPositive(int value) {\n    return value > 0;\n}\n\nclass Resource {\npublic:\n    [[nodiscard]] bool isAllocated() const {\n        return true;\n    }\n};\n\nint main() {\n    int val = getValue();  // OK: value used\n    cout << "Value: " << val << endl;\n    \n    // getValue();  // Warning: ignoring return value\n    \n    if (isPositive(10)) {  // OK: used in condition\n        cout << "Positive" << endl;\n    }\n    \n    Resource res;\n    bool allocated = res.isAllocated();  // OK\n    // res.isAllocated();  // Warning: ignoring return value\n    \n    return 0;\n}',
  hint: '[[nodiscard]] prevents accidental loss of important return values.'
},
{
  id: 'cpp_functions_42',
  topicId: 'cpp_functions',
  question: 'Create function with [[maybe_unused]] attribute (C++17).',
  mathSolution: '[[maybe_unused]] suppresses warnings for unused variables/parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid function([[maybe_unused]] int param1, int param2) {\n    // param1 is intentionally unused in release builds\n    cout << "Parameter 2: " << param2 << endl;\n}\n\nint main() {\n    [[maybe_unused]] int debugVariable = 42;\n    \n    #ifdef DEBUG\n        cout << "Debug: " << debugVariable << endl;\n    #endif\n    \n    function(10, 20);\n    \n    [[maybe_unused]] auto result = []() {\n        // This lambda is defined but may not be called\n        return 100;\n    };\n    \n    return 0;\n}',
  hint: '[[maybe_unused]] silences compiler warnings about unused entities.'
},
{
  id: 'cpp_functions_43',
  topicId: 'cpp_functions',
  question: 'Create function to compute GCD using Euclidean algorithm.',
  mathSolution: 'GCD(a,b) = GCD(b, a%b) until b=0.',
  codeSolution: '#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nint gcd(int a, int b) {\n    a = abs(a);\n    b = abs(b);\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\n\nint gcdRecursive(int a, int b) {\n    if (b == 0) return a;\n    return gcdRecursive(b, a % b);\n}\n\nint lcm(int a, int b) {\n    return a / gcd(a, b) * b;\n}\n\nint main() {\n    cout << "GCD(48, 18): " << gcd(48, 18) << endl;\n    cout << "GCD(100, 35): " << gcdRecursive(100, 35) << endl;\n    cout << "LCM(12, 18): " << lcm(12, 18) << endl;\n    \n    return 0;\n}',
  hint: 'Euclidean algorithm is efficient for GCD calculation.'
},
{
  id: 'cpp_functions_44',
  topicId: 'cpp_functions',
  question: 'Create function to check if number is prime.',
  mathSolution: 'Check divisibility up to sqrt(n).',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    if (n <= 3) return true;\n    if (n % 2 == 0 || n % 3 == 0) return false;\n    \n    for (int i = 5; i <= sqrt(n); i += 6) {\n        if (n % i == 0 || n % (i + 2) == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nvoid printPrimes(int n) {\n    cout << "Primes up to " << n << ": ";\n    for (int i = 2; i <= n; i++) {\n        if (isPrime(i)) {\n            cout << i << " ";\n        }\n    }\n    cout << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    cout << "Is 17 prime? " << isPrime(17) << endl;\n    cout << "Is 25 prime? " << isPrime(25) << endl;\n    \n    printPrimes(50);\n    \n    return 0;\n}',
  hint: 'Check divisibility only up to sqrt(n) and skip even numbers after 2.'
},
{
  "id": "cpp_functions_45",
  "topicId": "cpp_functions",
  "question": "Create function to convert number to binary string.",
  "mathSolution": "Repeatedly divide by 2 and record remainders.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring toBinary(int n) {\n    if (n == 0) return \"0\";\n    \n    string binary;\n    unsigned int num = n;  // Handle negative numbers\n    \n    while (num > 0) {\n        binary += (num % 2) ? '1' : '0';\n        num /= 2;\n    }\n    \n    reverse(binary.begin(), binary.end());\n    return binary;\n}\n\nstring toBinaryWithPadding(int n, int width) {\n    string binary = toBinary(n);\n    if (binary.length() < static_cast<size_t>(width)) {\n        binary = string(width - binary.length(), '0') + binary;\n    }\n    return binary;\n}\n\nint main() {\n    cout << \"42 in binary: \" << toBinary(42) << endl;\n    cout << \"255 in binary: \" << toBinary(255) << endl;\n    cout << \"10 in binary (8-bit): \" << toBinaryWithPadding(10, 8) << endl;\n    cout << \"-5 in binary (32-bit): \" << toBinary(-5) << endl;\n    \n    return 0;\n}",
  "hint": "Binary conversion uses division by 2; reverse for correct order."
},
{
  id: 'cpp_functions_46',
  topicId: 'cpp_functions',
  question: 'Create function to check if number is perfect square.',
  mathSolution: 'Check if integer square root squared equals number.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isPerfectSquare(int n) {\n    if (n < 0) return false;\n    int root = sqrt(n);\n    return root * root == n;\n}\n\nint nextPerfectSquare(int n) {\n    int root = ceil(sqrt(n));\n    return root * root;\n}\n\nint previousPerfectSquare(int n) {\n    if (n <= 0) return -1;\n    int root = floor(sqrt(n - 1));\n    return root * root;\n}\n\nint main() {\n    int numbers[] = {16, 25, 26, 49, 50, 81};\n    \n    for (int n : numbers) {\n        cout << n << " is perfect square? " << boolalpha << isPerfectSquare(n) << endl;\n    }\n    \n    cout << "Next perfect square after 50: " << nextPerfectSquare(50) << endl;\n    cout << "Previous perfect square before 50: " << previousPerfectSquare(50) << endl;\n    \n    return 0;\n}',
  hint: 'Perfect squares have integer square roots.'
},
{
  id: 'cpp_functions_47',
  topicId: 'cpp_functions',
  question: 'Create function to compute nCr (combinations).',
  mathSolution: 'nCr = n! / (r! * (n-r)!).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nlong long factorial(int n) {\n    long long result = 1;\n    for (int i = 2; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nlong long nCr(int n, int r) {\n    if (r < 0 || r > n) return 0;\n    if (r == 0 || r == n) return 1;\n    \n    // Optimize: use smaller of r and n-r\n    if (r > n - r) r = n - r;\n    \n    long long result = 1;\n    for (int i = 1; i <= r; i++) {\n        result = result * (n - r + i) / i;\n    }\n    return result;\n}\n\nint main() {\n    cout << "C(5,2) = " << nCr(5, 2) << endl;\n    cout << "C(10,3) = " << nCr(10, 3) << endl;\n    cout << "C(10,7) = " << nCr(10, 7) << endl;\n    \n    return 0;\n}',
  hint: 'Use multiplicative formula to avoid large intermediate values.'
},
{
  id: 'cpp_functions_48',
  topicId: 'cpp_functions',
  question: 'Create function to compute nth Catalan number.',
  mathSolution: 'C(n) = sum(C(i) * C(n-1-i)) for i=0 to n-1.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long catalanRecursive(int n) {\n    if (n <= 1) return 1;\n    \n    long long result = 0;\n    for (int i = 0; i < n; i++) {\n        result += catalanRecursive(i) * catalanRecursive(n - 1 - i);\n    }\n    return result;\n}\n\nlong long catalanDP(int n) {\n    vector<long long> dp(n + 1);\n    dp[0] = 1;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < i; j++) {\n            dp[i] += dp[j] * dp[i - 1 - j];\n        }\n    }\n    \n    return dp[n];\n}\n\nint main() {\n    cout << "Catalan numbers (0-10):\\n";\n    for (int i = 0; i <= 10; i++) {\n        cout << "C(" << i << ") = " << catalanDP(i) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Catalan numbers appear in many combinatorial counting problems.'
},
{
  id: 'cpp_functions_49',
  topicId: 'cpp_functions',
  question: 'Create function that returns multiple values using tuple (C++11).',
  mathSolution: 'std::tuple can hold multiple values of different types.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\ntuple<int, double, string> getPersonInfo() {\n    return make_tuple(25, 5.8, "John");\n}\n\ntuple<int, int, int> getMinMaxSum(int arr[], int size) {\n    int minVal = arr[0], maxVal = arr[0], sum = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < minVal) minVal = arr[i];\n        if (arr[i] > maxVal) maxVal = arr[i];\n        sum += arr[i];\n    }\n    return make_tuple(minVal, maxVal, sum);\n}\n\nint main() {\n    // Using structured bindings (C++17)\n    auto [age, height, name] = getPersonInfo();\n    cout << "Name: " << name << ", Age: " << age << ", Height: " << height << endl;\n    \n    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    auto [minVal, maxVal, sum] = getMinMaxSum(numbers, size);\n    cout << "Min: " << minVal << ", Max: " << maxVal << ", Sum: " << sum << endl;\n    \n    // Without structured bindings (C++11)\n    tuple<int, double, string> info = getPersonInfo();\n    cout << "Age: " << get<0>(info) << ", Height: " << get<1>(info) << endl;\n    \n    return 0;\n}',
  hint: 'tuple allows returning multiple values without creating a struct.'
},
{
  id: 'cpp_functions_50',
  topicId: 'cpp_functions',
  question: 'Create comprehensive function demonstration program.',
  mathSolution: 'Combine multiple function concepts in one program.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\n// Function declarations\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\ndouble divide(double a, double b) { return b != 0 ? a / b : 0; }\n\n// Template function\ntemplate<typename T>\nT max(T a, T b) { return (a > b) ? a : b; }\n\n// Recursive function\nlong long factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\n// Function with default parameters\nvoid greet(string name, string greeting = "Hello") {\n    cout << greeting << ", " << name << "!" << endl;\n}\n\n// Overloaded functions\nint area(int side) { return side * side; }\ndouble area(double radius) { return 3.14159 * radius * radius; }\nint area(int length, int width) { return length * width; }\n\n// Function returning multiple values via references\nvoid getMinMax(const vector<int>& numbers, int& minVal, int& maxVal) {\n    minVal = numbers[0];\n    maxVal = numbers[0];\n    for (int n : numbers) {\n        if (n < minVal) minVal = n;\n        if (n > maxVal) maxVal = n;\n    }\n}\n\n// Lambda function\nauto createMultiplier(int factor) {\n    return [factor](int x) { return x * factor; };\n}\n\nint main() {\n    cout << "=== Function Demonstration ===\\n\\n";\n    \n    // 1. Basic functions\n    cout << "1. Basic arithmetic:\\n";\n    cout << "   add(10,5) = " << add(10, 5) << endl;\n    cout << "   subtract(10,5) = " << subtract(10, 5) << endl;\n    cout << "   multiply(10,5) = " << multiply(10, 5) << endl;\n    cout << "   divide(10,3) = " << divide(10, 3) << endl;\n    \n    // 2. Template function\n    cout << "\\n2. Template function:\\n";\n    cout << "   max(5,3) = " << max(5, 3) << endl;\n    cout << "   max(5.5,3.2) = " << max(5.5, 3.2) << endl;\n    \n    // 3. Recursion\n    cout << "\\n3. Recursion:\\n";\n    cout << "   factorial(5) = " << factorial(5) << endl;\n    \n    // 4. Default parameters\n    cout << "\\n4. Default parameters:\\n";\n    greet("John");\n    greet("Alice", "Hi");\n    \n    // 5. Function overloading\n    cout << "\\n5. Function overloading:\\n";\n    cout << "   area(5) = " << area(5) << endl;\n    cout << "   area(5.0) = " << area(5.0) << endl;\n    cout << "   area(4,6) = " << area(4, 6) << endl;\n    \n    // 6. Reference parameters\n    cout << "\\n6. Reference parameters:\\n";\n    vector<int> numbers = {5, 2, 8, 1, 9, 3, 7};\n    int minVal, maxVal;\n    getMinMax(numbers, minVal, maxVal);\n    cout << "   Min: " << minVal << ", Max: " << maxVal << endl;\n    \n    // 7. Lambda functions\n    cout << "\\n7. Lambda functions:\\n";\n    auto doubleIt = createMultiplier(2);\n    auto tripleIt = createMultiplier(3);\n    cout << "   double 5 = " << doubleIt(5) << endl;\n    cout << "   triple 5 = " << tripleIt(5) << endl;\n    \n    // 8. Function with array\n    cout << "\\n8. Array processing:\\n";\n    vector<int> data = {10, 20, 30, 40, 50};\n    transform(data.begin(), data.end(), data.begin(), [](int x) { return x * x; });\n    cout << "   Squares: ";\n    for (int x : data) cout << x << " ";\n    cout << endl;\n    \n    // 9. constexpr concept\n    cout << "\\n9. Compile-time concept:\\n";\n    constexpr int SIZE = 10;\n    int arr[SIZE];\n    cout << "   Array size: " << SIZE << endl;\n    \n    // 10. Static local variable\n    cout << "\\n10. Static local variable:\\n";\n    auto counter = []() {\n        static int count = 0;\n        return ++count;\n    };\n    cout << "   Call 1: " << counter() << endl;\n    cout << "   Call 2: " << counter() << endl;\n    cout << "   Call 3: " << counter() << endl;\n    \n    cout << "\\n=== End of Demonstration ===\\n";\n    \n    return 0;\n}',
  hint: 'This comprehensive example demonstrates various function concepts in C++.'
}
);