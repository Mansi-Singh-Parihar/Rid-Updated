QuizData.questions.push(
{
  id: 'cpp_exceptions_1',
  topicId: 'cpp_exceptions',
  question: 'Use basic try-catch block to handle division by zero.',
  mathSolution: 'try block contains risky code; catch handles exceptions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw "Division by zero!";\n    }\n    return a / b;\n}\n\nint main() {\n    double x = 10, y = 0;\n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Error: " << error << endl;\n    }\n    return 0;\n}',
  hint: 'Use try-catch to handle runtime errors gracefully.'
},
{
  id: 'cpp_exceptions_2',
  topicId: 'cpp_exceptions',
  question: 'Catch multiple exception types with different catch blocks.',
  mathSolution: 'Use multiple catch blocks for different exception types.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid testFunction(int value) {\n    if (value == 1) throw runtime_error("Runtime error");\n    if (value == 2) throw logic_error("Logic error");\n    if (value == 3) throw "String exception";\n    if (value == 4) throw 42;\n}\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        try {\n            testFunction(i);\n            cout << "No exception for " << i << endl;\n        } catch (const runtime_error& e) {\n            cout << "Runtime error caught: " << e.what() << endl;\n        } catch (const logic_error& e) {\n            cout << "Logic error caught: " << e.what() << endl;\n        } catch (const char* e) {\n            cout << "String exception: " << e << endl;\n        } catch (int e) {\n            cout << "Integer exception: " << e << endl;\n        } catch (...) {\n            cout << "Unknown exception caught" << endl;\n        }\n    }\n    return 0;\n}',
  hint: 'Multiple catch blocks handle different exception types.'
},
{
  id: 'cpp_exceptions_3',
  topicId: 'cpp_exceptions',
  question: 'Use try-catch-finally equivalent (using RAII).',
  mathSolution: 'Use destructor for cleanup as C++ doesn\'t have finally.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired" << endl; }\n    ~Resource() { cout << "Resource released" << endl; }\n    void use() { cout << "Using resource" << endl; }\n};\n\nint main() {\n    try {\n        Resource res;\n        res.use();\n        throw runtime_error("Something went wrong");\n        cout << "This won\'t execute" << endl;\n    } catch (const exception& e) {\n        cout << "Exception caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'RAII ensures cleanup even when exceptions occur.'
},
{
  id: 'cpp_exceptions_4',
  topicId: 'cpp_exceptions',
  question: 'Create custom exception class derived from std::exception.',
  mathSolution: 'Inherit from std::exception and override what().',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass InvalidAgeException : public exception {\nprivate:\n    string message;\npublic:\n    InvalidAgeException(int age) {\n        message = "Invalid age: " + to_string(age) + ". Age must be between 0 and 150.";\n    }\n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nvoid setAge(int age) {\n    if (age < 0 || age > 150) {\n        throw InvalidAgeException(age);\n    }\n    cout << "Age set to " << age << endl;\n}\n\nint main() {\n    try {\n        setAge(200);\n    } catch (const InvalidAgeException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Custom exceptions provide meaningful error information.'
},
{
  id: 'cpp_exceptions_5',
  topicId: 'cpp_exceptions',
  question: 'Rethrow exception after partial handling.',
  mathSolution: 'Use throw without argument to rethrow caught exception.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid innerFunction() {\n    throw runtime_error("Error in inner function");\n}\n\nvoid middleFunction() {\n    try {\n        innerFunction();\n    } catch (const runtime_error& e) {\n        cout << "Middle: Logging error: " << e.what() << endl;\n        throw;  // Rethrow\n    }\n}\n\nint main() {\n    try {\n        middleFunction();\n    } catch (const runtime_error& e) {\n        cout << "Main: Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Rethrow (throw;) preserves original exception type.'
},
{
  id: 'cpp_exceptions_6',
  topicId: 'cpp_exceptions',
  question: 'Use noexcept specifier for functions that don\'t throw.',
  mathSolution: 'noexcept indicates function won\'t throw exceptions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid safeFunction() noexcept {\n    cout << "This function never throws" << endl;\n}\n\nvoid mayThrow(bool condition) {\n    if (condition) throw runtime_error("Error!");\n}\n\nint main() {\n    cout << boolalpha;\n    cout << "safeFunction is noexcept: " << noexcept(safeFunction()) << endl;\n    cout << "mayThrow(false) is noexcept: " << noexcept(mayThrow(false)) << endl;\n    \n    safeFunction();\n    \n    try {\n        mayThrow(true);\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'noexcept enables compiler optimizations and indicates exception safety.'
},
{
  id: 'cpp_exceptions_7',
  topicId: 'cpp_exceptions',
  question: 'Create exception hierarchy with multiple levels.',
  mathSolution: 'Derive custom exceptions from base exception classes.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass DatabaseException : public exception {\nprotected:\n    string message;\npublic:\n    DatabaseException(const string& msg) : message(msg) {}\n    const char* what() const noexcept override { return message.c_str(); }\n};\n\nclass ConnectionException : public DatabaseException {\npublic:\n    ConnectionException(const string& db) : \n        DatabaseException("Failed to connect to database: " + db) {}\n};\n\nclass QueryException : public DatabaseException {\npublic:\n    QueryException(const string& sql) : \n        DatabaseException("Query failed: " + sql) {}\n};\n\nclass TimeoutException : public DatabaseException {\npublic:\n    TimeoutException(int seconds) : \n        DatabaseException("Query timeout after " + to_string(seconds) + " seconds") {}\n};\n\nint main() {\n    try {\n        throw ConnectionException("users.db");\n    } catch (const TimeoutException& e) {\n        cout << "Timeout: " << e.what() << endl;\n    } catch (const QueryException& e) {\n        cout << "Query: " << e.what() << endl;\n    } catch (const ConnectionException& e) {\n        cout << "Connection: " << e.what() << endl;\n    } catch (const DatabaseException& e) {\n        cout << "Database: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Exception hierarchy allows handling at different granularity levels.'
},
{
  id: 'cpp_exceptions_8',
  topicId: 'cpp_exceptions',
  question: 'Use function try block for constructor exception handling.',
  mathSolution: 'Function try block catches exceptions in initializer list.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource(int value) {\n        if (value < 0) throw runtime_error("Invalid resource value");\n        cout << "Resource created with value " << value << endl;\n    }\n};\n\nclass Container {\nprivate:\n    Resource res1;\n    Resource res2;\npublic:\n    Container(int v1, int v2) \n        try : res1(v1), res2(v2) {\n        cout << "Container created" << endl;\n    } catch (const exception& e) {\n        cout << "Container constructor caught: " << e.what() << endl;\n        throw;  // rethrow\n    }\n};\n\nint main() {\n    try {\n        Container c(10, -5);\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Function try block catches exceptions from member initializers.'
},
{
  id: 'cpp_exceptions_9',
  topicId: 'cpp_exceptions',
  question: 'Use standard exception classes (runtime_error, logic_error).',
  mathSolution: 'Use STL exception classes for common error types.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <cmath>\n#include <string>\nusing namespace std;\n\ndouble safeSqrt(double x) {\n    if (x < 0) {\n        throw domain_error("Cannot take square root of negative number");\n    }\n    return sqrt(x);\n}\n\nint stringToInt(const string& str) {\n    try {\n        return stoi(str);\n    } catch (const invalid_argument& e) {\n        throw logic_error("Invalid number format: " + str);\n    } catch (const out_of_range& e) {\n        throw range_error("Number out of range: " + str);\n    }\n}\n\nint main() {\n    try {\n        cout << safeSqrt(-5) << endl;\n    } catch (const domain_error& e) {\n        cout << "Domain error: " << e.what() << endl;\n    }\n    \n    try {\n        stringToInt("abc");\n    } catch (const logic_error& e) {\n        cout << "Logic error: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Standard exceptions provide common error categories.'
},
{
  id: 'cpp_exceptions_10',
  topicId: 'cpp_exceptions',
  question: 'Use nested try-catch blocks for different exception levels.',
  mathSolution: 'Nested try blocks handle exceptions at different levels.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid level3() {\n    throw runtime_error("Error at level 3");\n}\n\nvoid level2() {\n    try {\n        level3();\n    } catch (const logic_error& e) {\n        cout << "Level2 caught logic_error" << endl;\n    }\n    cout << "Level2 continues" << endl;\n}\n\nvoid level1() {\n    try {\n        level2();\n    } catch (const runtime_error& e) {\n        cout << "Level1 caught runtime_error: " << e.what() << endl;\n        throw;  // rethrow to main\n    }\n}\n\nint main() {\n    try {\n        level1();\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Nested try blocks allow different handling strategies.'
},
{
  id: 'cpp_exceptions_11',
  topicId: 'cpp_exceptions',
  question: 'Use exception specification with throw() (deprecated but works).',
  mathSolution: 'throw() indicates function throws no exceptions (deprecated).',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid oldStyle() throw() {\n    cout << "This function promises not to throw (deprecated)" << endl;\n    // throw runtime_error("Will cause unexpected");\n}\n\nvoid modernStyle() noexcept {\n    cout << "Modern noexcept function" << endl;\n}\n\nint main() {\n    oldStyle();\n    modernStyle();\n    \n    cout << "Function called successfully" << endl;\n    return 0;\n}',
  hint: 'Use noexcept instead of throw() in modern C++.'
},
{
  id: 'cpp_exceptions_12',
  topicId: 'cpp_exceptions',
  question: 'Catch all exceptions using ellipsis (...).',
  mathSolution: 'Catch-all handler catches any exception type.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid throwAnything(int type) {\n    switch(type) {\n        case 1: throw 42;\n        case 2: throw string("String error");\n        case 3: throw runtime_error("Runtime error");\n        case 4: throw "C-string error";\n    }\n}\n\nint main() {\n    for (int i = 1; i <= 4; i++) {\n        try {\n            throwAnything(i);\n        } catch (const exception& e) {\n            cout << "Standard exception: " << e.what() << endl;\n        } catch (...) {\n            cout << "Unknown exception caught for type " << i << endl;\n        }\n    }\n    return 0;\n}',
  hint: 'Catch-all (...) handles any exception type as last resort.'
},
{
  id: 'cpp_exceptions_13',
  topicId: 'cpp_exceptions',
  question: 'Use exception in constructor to prevent invalid object creation.',
  mathSolution: 'Throw exception when object cannot be properly initialized.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass PositiveNumber {\nprivate:\n    int value;\npublic:\n    PositiveNumber(int v) : value(v) {\n        if (v <= 0) {\n            throw invalid_argument("Number must be positive");\n        }\n        cout << "PositiveNumber created with value " << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nint main() {\n    try {\n        PositiveNumber p1(10);\n        cout << "p1 value: " << p1.getValue() << endl;\n        \n        PositiveNumber p2(-5);\n        cout << "This won\'t execute" << endl;\n    } catch (const invalid_argument& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Throw from constructor to prevent invalid object creation.'
},
{
  id: 'cpp_exceptions_14',
  topicId: 'cpp_exceptions',
  question: 'Use exception in destructor (caution: avoid throwing).',
  mathSolution: 'Destructors should not throw to avoid termination.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    bool isOpen;\npublic:\n    FileHandler() : isOpen(true) {\n        cout << "File opened" << endl;\n    }\n    \n    ~FileHandler() {\n        try {\n            // Close file - don\'t throw\n            isOpen = false;\n            cout << "File closed" << endl;\n        } catch (...) {\n            // Swallow exceptions in destructor\n            cerr << "Error during cleanup" << endl;\n        }\n    }\n};\n\nint main() {\n    try {\n        FileHandler fh;\n        throw runtime_error("Something went wrong");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Destructors should not throw exceptions to avoid std::terminate.'
},
{
  id: 'cpp_exceptions_15',
  topicId: 'cpp_exceptions',
  question: 'Use exception with resource management (RAII).',
  mathSolution: 'RAII ensures resources are freed even on exceptions.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    string dbName;\npublic:\n    DatabaseConnection(const string& name) : dbName(name) {\n        cout << "Connected to " << dbName << endl;\n    }\n    ~DatabaseConnection() {\n        cout << "Disconnected from " << dbName << endl;\n    }\n    void query(const string& sql) {\n        if (sql.empty()) throw runtime_error("Empty query");\n        cout << "Executing: " << sql << endl;\n    }\n};\n\nint main() {\n    try {\n        DatabaseConnection db("mydb");\n        db.query("SELECT * FROM users");\n        db.query("");  // Will throw\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'RAII guarantees resource cleanup regardless of exceptions.'
},
{
  id: 'cpp_exceptions_16',
  topicId: 'cpp_exceptions',
  question: 'Use exception in smart pointer custom deleter.',
  mathSolution: 'Custom deleters can handle exceptions during cleanup.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <cstdio>\nusing namespace std;\n\nstruct FileCloser {\n    void operator()(FILE* file) const {\n        if (file) {\n            cout << "Closing file" << endl;\n            fclose(file);\n        }\n    }\n};\n\nint main() {\n    try {\n        unique_ptr<FILE, FileCloser> file(fopen("test.txt", "w"));\n        if (!file) {\n            throw runtime_error("Failed to open file");\n        }\n        fprintf(file.get(), "Hello\\n");\n        // File automatically closed even if exception thrown\n        throw runtime_error("Error after file write");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Smart pointers with custom deleters provide exception-safe cleanup.'
},
{
  id: 'cpp_exceptions_17',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::optional for error handling.',
  mathSolution: 'std::optional avoids exceptions for expected failures.',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\noptional<int> parseInt(const string& str) {\n    try {\n        return stoi(str);\n    } catch (...) {\n        return nullopt;\n    }\n}\n\ndouble divide(double a, double b) {\n    if (b == 0) throw runtime_error("Division by zero");\n    return a / b;\n}\n\nint main() {\n    auto result = parseInt("123abc");\n    if (result.has_value()) {\n        cout << "Parsed: " << result.value() << endl;\n    } else {\n        cout << "Invalid number" << endl;\n    }\n    \n    try {\n        cout << divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Use optional for expected failures, exceptions for unexpected errors.'
},
{
  id: 'cpp_exceptions_18',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::expected (C++23-like simulation).',
  mathSolution: 'Expected pattern returns either value or error.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\ntemplate<typename T, typename E>\nclass Expected {\nprivate:\n    variant<T, E> data;\npublic:\n    Expected(const T& value) : data(value) {}\n    Expected(const E& error) : data(error) {}\n    \n    bool has_value() const { return holds_alternative<T>(data); }\n    T value() const { return get<T>(data); }\n    E error() const { return get<E>(data); }\n};\n\nExpected<int, string> divide(int a, int b) {\n    if (b == 0) return Expected<int, string>("Division by zero");\n    return Expected<int, string>(a / b);\n}\n\nint main() {\n    auto result = divide(10, 2);\n    if (result.has_value()) {\n        cout << "Result: " << result.value() << endl;\n    } else {\n        cout << "Error: " << result.error() << endl;\n    }\n    \n    auto errorResult = divide(10, 0);\n    if (!errorResult.has_value()) {\n        cout << "Expected error: " << errorResult.error() << endl;\n    }\n    return 0;\n}',
  hint: 'Expected pattern makes error handling explicit.'
},
{
  id: 'cpp_exceptions_19',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::current_exception for deferred handling.',
  mathSolution: 'Capture current exception for later processing.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\nusing namespace std;\n\nexception_ptr capturedException;\n\nvoid riskyFunction() {\n    try {\n        throw runtime_error("Critical error occurred");\n    } catch (...) {\n        capturedException = current_exception();\n        cout << "Exception captured" << endl;\n    }\n}\n\nvoid processLater() {\n    if (capturedException) {\n        try {\n            rethrow_exception(capturedException);\n        } catch (const exception& e) {\n            cout << "Processed later: " << e.what() << endl;\n        }\n    }\n}\n\nint main() {\n    riskyFunction();\n    cout << "Doing other work" << endl;\n    processLater();\n    return 0;\n}',
  hint: 'current_exception captures exception for deferred handling.'
},
{
  id: 'cpp_exceptions_20',
  topicId: 'cpp_exceptions',
  question: 'Use exception with nested exceptions (std::nested_exception).',
  mathSolution: 'Nested exceptions preserve original error context.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid level3() {\n    throw runtime_error("Original error at level 3");\n}\n\nvoid level2() {\n    try {\n        level3();\n    } catch (...) {\n        throw_with_nested(runtime_error("Error at level 2"));\n    }\n}\n\nvoid level1() {\n    try {\n        level2();\n    } catch (...) {\n        throw_with_nested(runtime_error("Error at level 1"));\n    }\n}\n\nvoid printNested(const exception& e, int level = 0) {\n    cout << string(level * 2, \' \') << e.what() << endl;\n    try {\n        rethrow_if_nested(e);\n    } catch (const exception& nested) {\n        printNested(nested, level + 1);\n    }\n}\n\nint main() {\n    try {\n        level1();\n    } catch (const exception& e) {\n        cout << "Exception chain:" << endl;\n        printNested(e);\n    }\n    return 0;\n}',
  hint: 'nested_exception preserves full exception chain.'
},
{
  id: 'cpp_exceptions_21',
  topicId: 'cpp_exceptions',
  question: 'Use exception in multithreaded environment.',
  mathSolution: 'Exceptions must be caught within each thread.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <stdexcept>\n#include <future>\nusing namespace std;\n\nvoid threadFunction() {\n    try {\n        throw runtime_error("Error in thread");\n    } catch (const exception& e) {\n        cout << "Thread caught: " << e.what() << endl;\n    }\n}\n\nint asyncFunction() {\n    throw runtime_error("Async error");\n    return 42;\n}\n\nint main() {\n    // Thread exception handling\n    thread t(threadFunction);\n    t.join();\n    \n    // Async with future\n    future<int> result = async(launch::async, asyncFunction);\n    try {\n        int value = result.get();\n        cout << "Value: " << value << endl;\n    } catch (const exception& e) {\n        cout << "Async caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Exceptions don\'t propagate between threads automatically.'
},
{
  id: 'cpp_exceptions_22',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::terminate handler.',
  mathSolution: 'Set custom terminate handler for uncaught exceptions.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <cstdlib>\n#include <stdexcept>\nusing namespace std;\n\nvoid myTerminate() {\n    cout << "Custom terminate handler called" << endl;\n    cout << "Uncaught exception occurred" << endl;\n    exit(1);\n}\n\nclass ThrowInDestructor {\npublic:\n    ~ThrowInDestructor() {\n        throw runtime_error("Exception in destructor");  // Causes terminate\n    }\n};\n\nint main() {\n    set_terminate(myTerminate);\n    \n    try {\n        ThrowInDestructor obj;\n        throw runtime_error("Main exception");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    cout << "This won\'t execute if terminate called" << endl;\n    return 0;\n}',
  hint: 'set_terminate customizes behavior for uncaught exceptions.'
},
{
  id: 'cpp_exceptions_23',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::uncaught_exceptions for exception safety.',
  mathSolution: 'Detect if exception is currently being handled.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\nusing namespace std;\n\nclass ExceptionAware {\npublic:\n    ~ExceptionAware() {\n        if (uncaught_exceptions() > 0) {\n            cout << "Destructor called during stack unwinding" << endl;\n        } else {\n            cout << "Normal destruction" << endl;\n        }\n    }\n};\n\nint main() {\n    cout << "Normal scope:" << endl;\n    {\n        ExceptionAware ea;\n    }\n    \n    cout << "\\nDuring exception:" << endl;\n    try {\n        ExceptionAware ea;\n        throw runtime_error("Error");\n    } catch (...) {\n        cout << "Exception caught" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'uncaught_exceptions() detects if stack is unwinding due to exception.'
},
{
  id: 'cpp_exceptions_24',
  topicId: 'cpp_exceptions',
  question: 'Use exception in template functions.',
  mathSolution: 'Templates can throw exceptions with type-independent handling.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nT divide(T a, T b) {\n    if (b == 0) {\n        throw runtime_error("Division by zero in template function");\n    }\n    return a / b;\n}\n\ntemplate<typename T>\nT safeGet(const vector<T>& vec, size_t index) {\n    if (index >= vec.size()) {\n        throw out_of_range("Index out of range");\n    }\n    return vec[index];\n}\n\nint main() {\n    try {\n        cout << divide(10, 2) << endl;\n        cout << divide(10.5, 2.5) << endl;\n        cout << divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << "Caught in template: " << e.what() << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3};\n    try {\n        cout << safeGet(vec, 5) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Out of range: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Template functions can throw exceptions like regular functions.'
},
{
  id: 'cpp_exceptions_25',
  topicId: 'cpp_exceptions',
  question: 'Use exception in lambda expressions.',
  mathSolution: 'Lambdas can throw and handle exceptions.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    auto safeDivide = [](int a, int b) -> int {\n        if (b == 0) throw runtime_error("Division by zero");\n        return a / b;\n    };\n    \n    auto tryOperation = [](function<int()> op) {\n        try {\n            return op();\n        } catch (const exception& e) {\n            cout << "Operation failed: " << e.what() << endl;\n            return -1;\n        }\n    };\n    \n    int result1 = tryOperation([&]() { return safeDivide(10, 2); });\n    int result2 = tryOperation([&]() { return safeDivide(10, 0); });\n    \n    cout << "Result1: " << result1 << endl;\n    cout << "Result2: " << result2 << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas can throw exceptions; handle them in calling context.'
},
{
  id: 'cpp_exceptions_26',
  topicId: 'cpp_exceptions',
  question: 'Use exception with move semantics.',
  mathSolution: 'Move operations should be noexcept for performance.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\n\nclass Widget {\nprivate:\n    int* data;\n    size_t size;\npublic:\n    Widget(size_t s) : size(s), data(new int[s]) {}\n    \n    // Move constructor - should be noexcept\n    Widget(Widget&& other) noexcept \n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n    \n    // Copy constructor may throw\n    Widget(const Widget& other) : size(other.size), data(new int[other.size]) {\n        cout << "Copying widget (may throw)" << endl;\n        if (size > 1000000) throw bad_alloc();\n    }\n    \n    ~Widget() { delete[] data; }\n};\n\nint main() {\n    vector<Widget> widgets;\n    widgets.reserve(10);\n    \n    try {\n        Widget w1(100);\n        widgets.push_back(move(w1));  // Uses move (noexcept)\n        \n        Widget w2(2000000);\n        widgets.push_back(w2);  // May throw during copy\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Mark move operations noexcept for better performance.'
},
{
  id: 'cpp_exceptions_27',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::exception_ptr for thread communication.',
  mathSolution: 'exception_ptr transfers exceptions between threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <future>\n#include <stdexcept>\nusing namespace std;\n\nexception_ptr globalException;\n\nvoid workerThread() {\n    try {\n        throw runtime_error("Error in worker thread");\n    } catch (...) {\n        globalException = current_exception();\n    }\n}\n\nint main() {\n    thread t(workerThread);\n    t.join();\n    \n    if (globalException) {\n        try {\n            rethrow_exception(globalException);\n        } catch (const exception& e) {\n            cout << "Exception from thread: " << e.what() << endl;\n        }\n    }\n    \n    // Using packaged_task for automatic exception propagation\n    packaged_task<int()> task([]() {\n        throw runtime_error("Error in packaged_task");\n        return 42;\n    });\n    \n    future<int> result = task.get_future();\n    thread t2(move(task));\n    \n    try {\n        int value = result.get();\n    } catch (const exception& e) {\n        cout << "Packaged_task exception: " << e.what() << endl;\n    }\n    \n    t2.join();\n    return 0;\n}',
  hint: 'exception_ptr allows exception propagation between threads.'
},
{
  id: 'cpp_exceptions_28',
  topicId: 'cpp_exceptions',
  question: 'Use exception in constexpr functions (C++20).',
  mathSolution: 'constexpr functions can throw, but not in constant evaluation.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nconstexpr int safeDivide(int a, int b) {\n    if (b == 0) {\n        throw runtime_error("Division by zero");\n    }\n    return a / b;\n}\n\nint main() {\n    // Compile-time evaluation (must not throw)\n    constexpr int result1 = safeDivide(10, 2);\n    cout << "Compile-time result: " << result1 << endl;\n    \n    // Runtime evaluation (can throw)\n    int x = 10, y = 0;\n    try {\n        int result2 = safeDivide(x, y);\n        cout << "Runtime result: " << result2 << endl;\n    } catch (const exception& e) {\n        cout << "Runtime caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'constexpr functions can throw, but not during constant evaluation.'
},
{
  "id": "cpp_exceptions_29",
  "topicId": "cpp_exceptions",
  "question": "Use exception with custom error codes conversion.",
  "mathSolution": "Convert error codes to exceptions for uniform handling.",
  "codeSolution": "#include <iostream>\n#include <system_error>\n#include <cerrno>\n#include <cstring>\n#include <stdexcept>\nusing namespace std;\n\nclass FileError : public runtime_error {\npublic:\n    FileError(const string& filename, int errCode)\n        : runtime_error(\"Failed to open '\" + filename + \"': \" + strerror(errCode)) {}\n};\n\nvoid openFile(const string& filename) {\n    FILE* file = fopen(filename.c_str(), \"r\");\n    if (!file) {\n        throw FileError(filename, errno);\n    }\n    fclose(file);\n    cout << \"File opened successfully\" << endl;\n}\n\nint main() {\n    try {\n        openFile(\"nonexistent.txt\");\n    } catch (const FileError& e) {\n        cout << \"File error: \" << e.what() << endl;\n    }\n    \n    // Converting system_error\n    try {\n        throw system_error(make_error_code(errc::permission_denied));\n    } catch (const system_error& e) {\n        cout << \"System error: \" << e.what() << \", code: \" << e.code() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Convert legacy error codes to exceptions for consistent error handling."
},
{
  "id": "cpp_exceptions_30",
  "topicId": "cpp_exceptions",
  "question": "Use exception with RAII for transaction rollback.",
  "mathSolution": "RAII ensures transaction rollback on exception.",
  "codeSolution": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Transaction {\nprivate:\n    bool committed;\npublic:\n    Transaction() : committed(false) {\n        cout << \"Transaction started\" << endl;\n    }\n    \n    void commit() {\n        committed = true;\n        cout << \"Transaction committed\" << endl;\n    }\n    \n    void rollback() {\n        cout << \"Transaction rolled back\" << endl;\n    }\n    \n    ~Transaction() {\n        if (!committed) {\n            rollback();\n        }\n    }\n};\n\nvoid updateDatabase() {\n    Transaction tx;\n    // Perform database operations\n    cout << \"Updating database...\" << endl;\n    \n    // Simulate error\n    throw runtime_error(\"Database constraint violation\");\n    \n    tx.commit();  // Won't be reached if exception thrown\n}\n\nint main() {\n    try {\n        updateDatabase();\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    return 0;\n}",
  "hint": "RAII ensures transaction rollback when exceptions occur."
},
{
  id: 'cpp_exceptions_31',
  topicId: 'cpp_exceptions',
  question: 'Use exception with resource acquisition is initialization (RAII).',
  mathSolution: 'Constructor acquires resource, destructor releases on exception.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass ScopedLock {\nprivate:\n    bool& locked;\npublic:\n    ScopedLock(bool& l) : locked(l) {\n        if (locked) throw runtime_error("Already locked");\n        locked = true;\n        cout << "Lock acquired" << endl;\n    }\n    ~ScopedLock() {\n        if (locked) {\n            locked = false;\n            cout << "Lock released" << endl;\n        }\n    }\n};\n\nint main() {\n    bool lockFlag = false;\n    \n    try {\n        ScopedLock lock1(lockFlag);\n        // Critical section\n        cout << "In critical section" << endl;\n        throw runtime_error("Error in critical section");\n        ScopedLock lock2(lockFlag);  // Won\'t execute\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'RAII provides exception-safe resource management.'
},
{
  id: 'cpp_exceptions_32',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::lock_guard for mutex safety.',
  mathSolution: 'lock_guard automatically unlocks mutex on exception.',
  codeSolution: '#include <iostream>\n#include <mutex>\n#include <thread>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nmutex mtx;\n\nvoid criticalSection(int id) {\n    lock_guard<mutex> lock(mtx);\n    cout << "Thread " << id << " entered critical section" << endl;\n    \n    if (id == 2) {\n        throw runtime_error("Error in thread " + to_string(id));\n    }\n    \n    cout << "Thread " << id << " leaving" << endl;\n}\n\nint main() {\n    thread t1([]() { \n        try { criticalSection(1); } \n        catch (const exception& e) { cout << "Caught: " << e.what() << endl; }\n    });\n    \n    thread t2([]() { \n        try { criticalSection(2); } \n        catch (const exception& e) { cout << "Caught: " << e.what() << endl; }\n    });\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'lock_guard ensures mutex is released even if exception occurs.'
},
{
  id: 'cpp_exceptions_33',
  topicId: 'cpp_exceptions',
  question: 'Use exception in copy constructor for deep copy failures.',
  mathSolution: 'Copy constructor can throw when resource allocation fails.',
  codeSolution: '#include <iostream>\n#include <cstring>\n#include <stdexcept>\nusing namespace std;\n\nclass String {\nprivate:\n    char* data;\n    size_t len;\npublic:\n    String(const char* str) {\n        len = strlen(str);\n        data = new char[len + 1];\n        strcpy(data, str);\n    }\n    \n    String(const String& other) : len(other.len) {\n        cout << "Copy constructor called" << endl;\n        if (len > 1000000) {\n            throw bad_alloc();\n        }\n        data = new char[len + 1];\n        strcpy(data, other.data);\n    }\n    \n    ~String() { delete[] data; }\n    \n    void display() const { cout << data << endl; }\n};\n\nint main() {\n    String s1("Hello");\n    \n    try {\n        String s2 = s1;  // OK\n        s2.display();\n        \n        String s3("This is a very long string that will cause allocation failure");\n        String s4 = s3;  // May throw if len > threshold\n    } catch (const bad_alloc& e) {\n        cout << "Memory allocation failed: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Copy constructors may throw when allocating resources.'
},
{
  id: 'cpp_exceptions_34',
  topicId: 'cpp_exceptions',
  question: 'Use exception in assignment operator with copy-and-swap.',
  mathSolution: 'Copy-and-swap provides strong exception guarantee.',
  codeSolution: '#include <iostream>\n#include <algorithm>\n#include <stdexcept>\nusing namespace std;\n\nclass Array {\nprivate:\n    int* data;\n    size_t size;\n    \n    void swap(Array& other) noexcept {\n        std::swap(data, other.data);\n        std::swap(size, other.size);\n    }\n    \npublic:\n    Array(size_t n) : size(n), data(new int[n]) {\n        cout << "Array of size " << n << " created" << endl;\n    }\n    \n    Array(const Array& other) : size(other.size), data(new int[other.size]) {\n        cout << "Copy constructor" << endl;\n        if (size > 1000000) throw bad_alloc();\n        copy(other.data, other.data + size, data);\n    }\n    \n    Array& operator=(Array other) {\n        cout << "Assignment operator (copy-and-swap)" << endl;\n        swap(other);\n        return *this;\n    }\n    \n    ~Array() { delete[] data; }\n};\n\nint main() {\n    try {\n        Array a1(100);\n        Array a2(1000);\n        a2 = a1;  // Strong exception guarantee\n        \n        Array a3(2000000);\n        a1 = a3;  // May throw during copy\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Copy-and-swap idiom provides strong exception guarantee.'
},
{
  id: 'cpp_exceptions_35',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::vector::at() for bounds checking.',
  mathSolution: 'at() throws out_of_range exception for invalid index.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40, 50};\n    \n    cout << "Accessing valid indices:" << endl;\n    for (int i = 0; i < 5; i++) {\n        cout << numbers.at(i) << " ";\n    }\n    cout << endl;\n    \n    cout << "\\nAttempting out-of-bounds access:" << endl;\n    try {\n        cout << numbers.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Caught out_of_range: " << e.what() << endl;\n    }\n    \n    // Using [] operator doesn\'t throw\n    cout << "\\nUsing [] operator: " << numbers[10] << " (undefined behavior)" << endl;\n    \n    return 0;\n}',
  hint: 'vector::at() provides bounds checking with exception safety.'
},
{
  id: 'cpp_exceptions_36',
  topicId: 'cpp_exceptions',
  question: 'Use exception with dynamic_cast for reference types.',
  mathSolution: 'dynamic_cast for references throws bad_cast on failure.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nint main() {\n    Derived1 d1;\n    Base& baseRef = d1;\n    \n    try {\n        Derived1& d1Ref = dynamic_cast<Derived1&>(baseRef);\n        cout << "Cast to Derived1 successful" << endl;\n        \n        Derived2& d2Ref = dynamic_cast<Derived2&>(baseRef);\n        cout << "Cast to Derived2 successful" << endl;\n    } catch (const bad_cast& e) {\n        cout << "bad_cast caught: " << e.what() << endl;\n    }\n    \n    // Pointer version returns nullptr\n    Derived2* d2Ptr = dynamic_cast<Derived2*>(&baseRef);\n    if (!d2Ptr) {\n        cout << "Pointer cast returned nullptr" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'dynamic_cast throws bad_cast for references, returns nullptr for pointers.'
},
{
  id: 'cpp_exceptions_37',
  topicId: 'cpp_exceptions',
  question: 'Use exception with type_info comparison.',
  mathSolution: 'type_info comparison can be used for type checking.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\n#include <stdexcept>\nusing namespace std;\n\nclass Animal { virtual void speak() {} };\nclass Dog : public Animal {};\nclass Cat : public Animal {};\n\nvoid processAnimal(Animal& animal) {\n    if (typeid(animal) == typeid(Dog)) {\n        cout << "Processing Dog" << endl;\n    } else if (typeid(animal) == typeid(Cat)) {\n        cout << "Processing Cat" << endl;\n    } else {\n        throw runtime_error("Unknown animal type");\n    }\n}\n\nint main() {\n    Dog dog;\n    Cat cat;\n    \n    processAnimal(dog);\n    processAnimal(cat);\n    \n    // Animal animal;  // Uncomment would throw\n    \n    return 0;\n}',
  hint: 'typeid comparison enables runtime type checking.'
},
{
  id: 'cpp_exceptions_38',
  topicId: 'cpp_exceptions',
  question: 'Use exception in lambda with capture by reference.',
  mathSolution: 'Lambdas can capture variables and throw exceptions.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    int divisor = 0;\n    \n    auto divide = [&](int a) -> int {\n        if (divisor == 0) {\n            throw runtime_error("Division by zero in lambda");\n        }\n        return a / divisor;\n    };\n    \n    try {\n        cout << divide(10) << endl;\n    } catch (const exception& e) {\n        cout << "Lambda exception: " << e.what() << endl;\n    }\n    \n    divisor = 2;\n    try {\n        cout << divide(10) << endl;\n    } catch (const exception& e) {\n        cout << "Lambda exception: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambdas can throw exceptions when captured values cause errors.'
},
{
  id: 'cpp_exceptions_39',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::unique_ptr and custom deleter.',
  mathSolution: 'Custom deleter in unique_ptr can handle exceptions.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <cstdlib>\nusing namespace std;\n\nstruct DatabaseDeleter {\n    void operator()(void* db) const {\n        cout << "Closing database connection" << endl;\n        // Simulate cleanup\n        free(db);\n    }\n};\n\nint main() {\n    unique_ptr<void, DatabaseDeleter> db(malloc(1024), DatabaseDeleter());\n    \n    try {\n        cout << "Using database" << endl;\n        throw runtime_error("Query execution failed");\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    \n    // DatabaseDeleter called automatically\n    return 0;\n}',
  hint: 'Custom deleters in smart pointers work even when exceptions are thrown.'
},
{
  id: 'cpp_exceptions_40',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::shared_ptr and weak_ptr.',
  mathSolution: 'shared_ptr handles exceptions during construction.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource(int id) {\n        cout << "Resource " << id << " created" << endl;\n        if (id == 3) throw runtime_error("Cannot create resource 3");\n    }\n    ~Resource() { cout << "Resource destroyed" << endl; }\n};\n\nint main() {\n    shared_ptr<Resource> r1, r2, r3;\n    \n    try {\n        r1 = make_shared<Resource>(1);\n        r2 = make_shared<Resource>(2);\n        r3 = make_shared<Resource>(3);  // Throws\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    // r1 and r2 will be destroyed automatically\n    cout << "Exiting main" << endl;\n    return 0;\n}',
  hint: 'make_shared provides exception safety for resource allocation.'
},
{
  id: 'cpp_exceptions_41',
  topicId: 'cpp_exceptions',
  question: 'Use exception in const member functions.',
  mathSolution: 'const member functions can throw exceptions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <vector>\nusing namespace std;\n\nclass DataStore {\nprivate:\n    vector<int> data;\npublic:\n    void add(int value) { data.push_back(value); }\n    \n    int get(size_t index) const {\n        if (index >= data.size()) {\n            throw out_of_range("Index out of range in const method");\n        }\n        return data[index];\n    }\n    \n    size_t size() const { return data.size(); }\n};\n\nint main() {\n    DataStore store;\n    store.add(10);\n    store.add(20);\n    store.add(30);\n    \n    const DataStore& constStore = store;\n    \n    try {\n        cout << constStore.get(0) << endl;\n        cout << constStore.get(5) << endl;  // Throws\n    } catch (const out_of_range& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'const member functions can throw exceptions for logic errors.'
},
{
  id: 'cpp_exceptions_42',
  topicId: 'cpp_exceptions',
  question: 'Use exception in static member functions.',
  mathSolution: 'Static member functions can throw like regular functions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nclass Calculator {\npublic:\n    static int divide(int a, int b) {\n        if (b == 0) {\n            throw invalid_argument("Division by zero in static method");\n        }\n        return a / b;\n    }\n    \n    static int validate(int value, int minVal, int maxVal) {\n        if (value < minVal || value > maxVal) {\n            throw out_of_range("Value out of range: " + to_string(value));\n        }\n        return value;\n    }\n};\n\nint main() {\n    try {\n        cout << Calculator::divide(10, 2) << endl;\n        cout << Calculator::divide(10, 0) << endl;\n    } catch (const invalid_argument& e) {\n        cout << "Invalid argument: " << e.what() << endl;\n    }\n    \n    try {\n        Calculator::validate(100, 1, 50);\n    } catch (const out_of_range& e) {\n        cout << "Out of range: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Static member functions can use exceptions like non-static functions.'
},
{
  id: 'cpp_exceptions_43',
  topicId: 'cpp_exceptions',
  question: 'Use exception with CRTP for type-specific error handling.',
  mathSolution: 'CRTP enables compile-time polymorphism for exception handling.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void process() {\n        try {\n            static_cast<Derived*>(this)->processImpl();\n        } catch (const exception& e) {\n            cout << "Base caught: " << e.what() << endl;\n            throw;\n        }\n    }\n};\n\nclass Handler1 : public Base<Handler1> {\npublic:\n    void processImpl() {\n        cout << "Handler1 processing" << endl;\n        throw runtime_error("Error in Handler1");\n    }\n};\n\nclass Handler2 : public Base<Handler2> {\npublic:\n    void processImpl() {\n        cout << "Handler2 processing" << endl;\n        // No error\n    }\n};\n\nint main() {\n    try {\n        Handler1 h1;\n        h1.process();\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    \n    Handler2 h2;\n    h2.process();  // No exception\n    \n    return 0;\n}',
  hint: 'CRTP can provide consistent exception handling across derived classes.'
},
{
  id: 'cpp_exceptions_44',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::invoke for callable wrapping.',
  mathSolution: 'std::invoke can propagate exceptions from callables.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <stdexcept>\nusing namespace std;\n\nclass SafeCaller {\npublic:\n    template<typename Func, typename... Args>\n    static auto safeInvoke(Func&& func, Args&&... args) \n        -> decltype(func(args...)) {\n        try {\n            return func(forward<Args>(args)...);\n        } catch (const exception& e) {\n            cout << "SafeCaller caught: " << e.what() << endl;\n            throw;\n        }\n    }\n};\n\nint divide(int a, int b) {\n    if (b == 0) throw runtime_error("Division by zero");\n    return a / b;\n}\n\nint main() {\n    try {\n        int result = SafeCaller::safeInvoke(divide, 10, 0);\n        cout << "Result: " << result << endl;\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    \n    auto lambda = []() {\n        throw logic_error("Lambda error");\n        return 42;\n    };\n    \n    try {\n        SafeCaller::safeInvoke(lambda);\n    } catch (const exception& e) {\n        cout << "Main caught lambda error: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'std::invoke wrapper can provide centralized exception handling.'
},
{
  id: 'cpp_exceptions_45',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::apply for tuple unpacking.',
  mathSolution: 'std::apply propagates exceptions from tuple elements.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <stdexcept>\nusing namespace std;\n\nint divide(int a, int b) {\n    if (b == 0) throw runtime_error("Division by zero");\n    return a / b;\n}\n\nint add(int a, int b) { return a + b; }\n\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    auto operations = make_tuple(divide, add, multiply);\n    auto values = make_tuple(10, 2);\n    \n    try {\n        // Apply each operation to values\n        auto result1 = apply(divide, values);\n        cout << "Division: " << result1 << endl;\n        \n        auto result2 = apply(add, values);\n        cout << "Addition: " << result2 << endl;\n        \n        auto zeroValues = make_tuple(10, 0);\n        auto result3 = apply(divide, zeroValues);  // Throws\n        cout << "Division by zero: " << result3 << endl;\n    } catch (const exception& e) {\n        cout << "Exception in apply: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'std::apply propagates exceptions from the called function.'
},
{
  id: 'cpp_exceptions_46',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::accumulate and custom operation.',
  mathSolution: 'Custom accumulation operations can throw exceptions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\n#include <stdexcept>\nusing namespace std;\n\nint safeAdd(int a, int b) {\n    if (a > 1000000 || b > 1000000) {\n        throw overflow_error("Value too large");\n    }\n    return a + b;\n}\n\nint main() {\n    vector<int> numbers = {100, 200, 300, 400, 500};\n    \n    try {\n        int sum = accumulate(numbers.begin(), numbers.end(), 0, safeAdd);\n        cout << "Sum: " << sum << endl;\n    } catch (const overflow_error& e) {\n        cout << "Overflow: " << e.what() << endl;\n    }\n    \n    vector<int> largeNumbers = {1000000, 2000000, 3000000};\n    try {\n        int sum = accumulate(largeNumbers.begin(), largeNumbers.end(), 0, safeAdd);\n        cout << "Large sum: " << sum << endl;\n    } catch (const overflow_error& e) {\n        cout << "Overflow caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Custom operations in STL algorithms can throw exceptions.'
},
{
  id: 'cpp_exceptions_47',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::sort and custom comparator.',
  mathSolution: 'Comparators can throw exceptions during sorting.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stdexcept>\nusing namespace std;\n\nclass ThresholdChecker {\nprivate:\n    int threshold;\npublic:\n    ThresholdChecker(int t) : threshold(t) {}\n    \n    bool operator()(int a, int b) const {\n        if (a > threshold || b > threshold) {\n            throw out_of_range("Value exceeds threshold");\n        }\n        return a < b;\n    }\n};\n\nint main() {\n    vector<int> numbers = {5, 2, 8, 1, 9, 3, 7};\n    \n    try {\n        sort(numbers.begin(), numbers.end(), ThresholdChecker(10));\n        cout << "Sorted with threshold 10:" << endl;\n        for (int n : numbers) cout << n << " ";\n        cout << endl;\n    } catch (const exception& e) {\n        cout << "Sort exception: " << e.what() << endl;\n    }\n    \n    vector<int> largeNumbers = {5, 2, 15, 1, 9, 3, 7};\n    try {\n        sort(largeNumbers.begin(), largeNumbers.end(), ThresholdChecker(10));\n    } catch (const out_of_range& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Custom comparators in sort can throw exceptions during comparison.'
},
{
  id: 'cpp_exceptions_48',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::async and future.',
  mathSolution: 'Exceptions in async tasks propagate through future::get().',
  codeSolution: '#include <iostream>\n#include <future>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nint asyncTask(int id) {\n    if (id == 2) {\n        throw runtime_error("Error in async task " + to_string(id));\n    }\n    return id * 100;\n}\n\nint main() {\n    auto f1 = async(launch::async, asyncTask, 1);\n    auto f2 = async(launch::async, asyncTask, 2);\n    auto f3 = async(launch::async, asyncTask, 3);\n    \n    try {\n        cout << "Result 1: " << f1.get() << endl;\n        cout << "Result 2: " << f2.get() << endl;  // Throws\n        cout << "Result 3: " << f3.get() << endl;\n    } catch (const exception& e) {\n        cout << "Async exception: " << e.what() << endl;\n    }\n    \n    // Check other futures\n    try {\n        cout << "Result 3 (after catch): " << f3.get() << endl;\n    } catch (const exception& e) {\n        cout << "Another exception: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Exceptions in async tasks are stored and rethrown on future::get().'
},
{
  id: 'cpp_exceptions_49',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::packaged_task and std::future.',
  mathSolution: 'packaged_task captures exceptions for later retrieval.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <stdexcept>\n#include <thread>\nusing namespace std;\n\nint taskFunction(int x) {\n    if (x < 0) {\n        throw domain_error("Negative input not allowed");\n    }\n    return x * x;\n}\n\nint main() {\n    packaged_task<int(int)> task(taskFunction);\n    future<int> result = task.get_future();\n    \n    thread t(move(task), -5);\n    \n    try {\n        int value = result.get();\n        cout << "Result: " << value << endl;\n    } catch (const domain_error& e) {\n        cout << "Domain error: " << e.what() << endl;\n    }\n    \n    t.join();\n    \n    // Second task without error\n    packaged_task<int(int)> task2(taskFunction);\n    future<int> result2 = task2.get_future();\n    thread t2(move(task2), 5);\n    \n    try {\n        int value = result2.get();\n        cout << "Result: " << value << endl;\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    \n    t2.join();\n    return 0;\n}',
  hint: 'packaged_task captures exceptions and returns them via future.'
},
{
  id: 'cpp_exceptions_50',
  topicId: 'cpp_exceptions',
  question: 'Create comprehensive exception handling demonstration.',
  mathSolution: 'Combine multiple exception handling techniques.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <memory>\n#include <vector>\n#include <fstream>\n#include <string>\nusing namespace std;\n\n// Custom exception hierarchy\nclass AppException : public exception {\nprotected:\n    string message;\npublic:\n    AppException(const string& msg) : message(msg) {}\n    const char* what() const noexcept override { return message.c_str(); }\n};\n\nclass ConfigurationError : public AppException {\npublic:\n    ConfigurationError(const string& msg) : AppException("Config: " + msg) {}\n};\n\nclass DatabaseError : public AppException {\npublic:\n    DatabaseError(const string& msg) : AppException("Database: " + msg) {}\n};\n\n// RAII resource manager\nclass DatabaseConnection {\nprivate:\n    string connectionString;\n    bool connected;\npublic:\n    DatabaseConnection(const string& conn) : connectionString(conn), connected(false) {\n        cout << "Opening connection to " << conn << endl;\n        if (conn.empty()) throw DatabaseError("Empty connection string");\n        connected = true;\n    }\n    \n    ~DatabaseConnection() {\n        if (connected) {\n            cout << "Closing connection to " << connectionString << endl;\n        }\n    }\n    \n    void execute(const string& query) {\n        if (!connected) throw DatabaseError("Not connected");\n        if (query.empty()) throw DatabaseError("Empty query");\n        cout << "Executing: " << query << endl;\n    }\n};\n\n// Configuration loader\nclass ConfigLoader {\npublic:\n    static string loadConnectionString(const string& configFile) {\n        ifstream file(configFile);\n        if (!file.is_open()) {\n            throw ConfigurationError("Cannot open config file: " + configFile);\n        }\n        \n        string connStr;\n        getline(file, connStr);\n        if (connStr.empty()) {\n            throw ConfigurationError("Empty connection string in config");\n        }\n        return connStr;\n    }\n};\n\n// Business logic\nclass DataProcessor {\nprivate:\n    unique_ptr<DatabaseConnection> connection;\n    \npublic:\n    DataProcessor(const string& configFile) {\n        string connStr = ConfigLoader::loadConnectionString(configFile);\n        connection = make_unique<DatabaseConnection>(connStr);\n    }\n    \n    void process(const vector<string>& queries) {\n        for (const auto& query : queries) {\n            try {\n                connection->execute(query);\n            } catch (const DatabaseError& e) {\n                cout << "Query failed, continuing: " << e.what() << endl;\n            }\n        }\n    }\n};\n\nint main() {\n    cout << "=== Comprehensive Exception Handling Demo ===" << endl << endl;\n    \n    // Example 1: Configuration error\n    cout << "1. Testing configuration errors:" << endl;\n    try {\n        DataProcessor processor("nonexistent.conf");\n    } catch (const ConfigurationError& e) {\n        cout << "Config error: " << e.what() << endl;\n    }\n    \n    // Example 2: Database connection error\n    cout << "\\n2. Testing database errors:" << endl;\n    try {\n        DatabaseConnection db("");\n    } catch (const DatabaseError& e) {\n        cout << "DB error: " << e.what() << endl;\n    }\n    \n    // Example 3: Successful processing\n    cout << "\\n3. Testing successful processing:" << endl;\n    // Create config file first\n    ofstream config("test.conf");\n    config << "localhost:3306";\n    config.close();\n    \n    try {\n        DataProcessor processor("test.conf");\n        vector<string> queries = {\n            "SELECT * FROM users",\n            "",  // Empty query - will throw but be caught\n            "INSERT INTO logs VALUES(\'success\')"\n        };\n        processor.process(queries);\n    } catch (const AppException& e) {\n        cout << "App error: " << e.what() << endl;\n    }\n    \n    // Example 4: Nested exception handling\n    cout << "\\n4. Testing nested exceptions:" << endl;\n    try {\n        try {\n            throw runtime_error("Original error");\n        } catch (...) {\n            throw_with_nested(ConfigurationError("Configuration failed"));\n        }\n    } catch (const ConfigurationError& e) {\n        cout << "Caught: " << e.what() << endl;\n        try {\n            rethrow_if_nested(e);\n        } catch (const exception& nested) {\n            cout << "  Nested: " << nested.what() << endl;\n        }\n    }\n    \n    // Example 5: noexcept guarantee\n    cout << "\\n5. Testing noexcept guarantee:" << endl;\n    auto safeFunction = []() noexcept {\n        cout << "This function promises not to throw" << endl;\n    };\n    \n    cout << "safeFunction is noexcept: " << boolalpha << noexcept(safeFunction()) << endl;\n    safeFunction();\n    \n    cout << "\\n=== Exception Handling Concepts Demonstrated ===" << endl;\n    cout << "1. Custom exception hierarchy" << endl;\n    cout << "2. RAII for resource management" << endl;\n    cout << "3. Exception propagation" << endl;\n    cout << "4. Nested exceptions" << endl;\n    cout << "5. Exception safety with smart pointers" << endl;\n    cout << "6. Catching and continuing pattern" << endl;\n    cout << "7. noexcept specifier" << endl;\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of multiple exception handling techniques in C++.'
}
);