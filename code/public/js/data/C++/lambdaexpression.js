QuizData.questions.push(
{
  id: 'cpp_lambdas_1',
  topicId: 'cpp_lambdas',
  question: 'Create a basic lambda that prints "Hello" and call it.',
  mathSolution: 'Lambda is anonymous function defined with [](){}.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto greet = []() { cout << "Hello" << endl; };\n    greet();\n    return 0;\n}',
  hint: 'Lambda syntax: [capture](params) { body }'
},
{
  id: 'cpp_lambdas_2',
  topicId: 'cpp_lambdas',
  question: 'Create a lambda that takes parameters and returns value.',
  mathSolution: 'Lambda can accept parameters like regular functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](int a, int b) { return a + b; };\n    cout << add(5, 3) << endl;\n    return 0;\n}',
  hint: 'Lambda parameters are specified in parentheses ().'
},
{
  id: 'cpp_lambdas_3',
  topicId: 'cpp_lambdas',
  question: 'Capture local variables by value in lambda.',
  mathSolution: 'Capture list [=] captures all by value, [x] captures specific.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int multiplier = 10;\n    auto times = [multiplier](int x) { return x * multiplier; };\n    cout << times(5) << endl;\n    return 0;\n}',
  hint: 'Capture by value copies the variable into lambda.'
},
{
  id: 'cpp_lambdas_4',
  topicId: 'cpp_lambdas',
  question: 'Capture local variables by reference in lambda.',
  mathSolution: 'Capture by reference [&] allows modifying original.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int counter = 0;\n    auto increment = [&counter]() { counter++; };\n    increment();\n    increment();\n    cout << counter << endl;\n    return 0;\n}',
  hint: 'Capture by reference [&var] can modify original variable.'
},
{
  id: 'cpp_lambdas_5',
  topicId: 'cpp_lambdas',
  question: 'Capture all local variables by value using [=].',
  mathSolution: '[=] captures all used variables by copy.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    auto sum = [=]() { return a + b + c; };\n    cout << sum() << endl;\n    return 0;\n}',
  hint: '[=] captures all used variables by value.'
},
{
  id: 'cpp_lambdas_6',
  topicId: 'cpp_lambdas',
  question: 'Capture all local variables by reference using [&].',
  mathSolution: '[&] captures all used variables by reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    auto incrementAll = [&]() { a++; b++; c++; };\n    incrementAll();\n    cout << a << ", " << b << ", " << c << endl;\n    return 0;\n}',
  hint: '[&] captures all used variables by reference.'
},
{
  id: 'cpp_lambdas_7',
  topicId: 'cpp_lambdas',
  question: 'Use mixed capture: some by value, some by reference.',
  mathSolution: 'Capture list can specify multiple capture modes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20;\n    auto lambda = [x, &y]() {\n        // x is captured by value (read-only), y by reference\n        // x++; // Error: cannot modify by-value capture\n        y++;\n        return x + y;\n    };\n    cout << lambda() << endl;\n    cout << "y = " << y << endl;\n    return 0;\n}',
  hint: 'Mix capture: [x, &y] captures x by value, y by reference.'
},
{
  id: 'cpp_lambdas_8',
  topicId: 'cpp_lambdas',
  question: 'Use default capture with exceptions.',
  mathSolution: 'Default capture [=, &x] captures all by value except x by reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 30;\n    auto lambda = [=, &x]() {\n        // x captured by reference, y and z by value\n        x++;\n        // y++; // Error: y captured by value\n        return x + y + z;\n    };\n    cout << lambda() << endl;\n    cout << "x = " << x << endl;\n    return 0;\n}',
  hint: '[=, &x] captures all by value except x by reference.'
},
{
  id: 'cpp_lambdas_9',
  topicId: 'cpp_lambdas',
  question: 'Make lambda mutable to modify captured values.',
  mathSolution: 'mutable allows modification of by-value captures.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    auto counter = [count]() mutable {\n        count++;\n        return count;\n    };\n    cout << counter() << endl;\n    cout << counter() << endl;\n    cout << "Original count: " << count << endl;\n    return 0;\n}',
  hint: 'mutable allows modification of by-value captures (copies).'
},
{
  id: 'cpp_lambdas_10',
  topicId: 'cpp_lambdas',
  question: 'Specify return type explicitly using trailing return type.',
  mathSolution: '-> return_type specifies lambda return type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto divide = [](double a, double b) -> double {\n        if (b == 0) return 0;\n        return a / b;\n    };\n    cout << divide(10, 3) << endl;\n    cout << divide(10, 0) << endl;\n    return 0;\n}',
  hint: '-> type specifies return type explicitly.'
},
{
  id: 'cpp_lambdas_11',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with STL sort algorithm.',
  mathSolution: 'Lambda as comparator for custom sorting.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Lambda can be passed as comparator to sort.'
},
{
  id: 'cpp_lambdas_12',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with find_if algorithm.',
  mathSolution: 'Lambda predicate for conditional search.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 5; });\n    if (it != v.end()) {\n        cout << "First element > 5: " << *it << endl;\n    }\n    return 0;\n}',
  hint: 'Lambda predicates are useful with find_if, count_if, etc.'
},
{
  id: 'cpp_lambdas_13',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with for_each algorithm.',
  mathSolution: 'Lambda applied to each element.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    for_each(v.begin(), v.end(), [](int& x) { x *= 2; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'for_each with lambda modifies each element.'
},
{
  id: 'cpp_lambdas_14',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with transform algorithm.',
  mathSolution: 'Lambda transforms elements to new values.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    vector<int> squares(v.size());\n    transform(v.begin(), v.end(), squares.begin(), [](int x) { return x * x; });\n    \n    for (int x : squares) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'transform with lambda creates transformed range.'
},
{
  id: 'cpp_lambdas_15',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with accumulate for custom accumulation.',
  mathSolution: 'Lambda provides custom binary operation for accumulate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int product = accumulate(v.begin(), v.end(), 1, \n        [](int acc, int x) { return acc * x; });\n    cout << "Product: " << product << endl;\n    return 0;\n}',
  hint: 'Lambda can replace standard operations in accumulate.'
},
{
  id: 'cpp_lambdas_16',
  topicId: 'cpp_lambdas',
  question: 'Capture this pointer in lambda (within class).',
  mathSolution: '[this] captures current object members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int value = 0;\npublic:\n    auto getIncrementor() {\n        return [this]() { return ++value; };\n    }\n    int getValue() const { return value; }\n};\n\nint main() {\n    Counter c;\n    auto inc = c.getIncrementor();\n    cout << inc() << endl;\n    cout << inc() << endl;\n    cout << c.getValue() << endl;\n    return 0;\n}',
  hint: '[this] captures current object members by reference.'
},
{
  id: 'cpp_lambdas_17',
  topicId: 'cpp_lambdas',
  question: 'Use generic lambda with auto parameters (C++14).',
  mathSolution: 'auto parameters make lambda generic (template-like).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](auto a, auto b) { return a + b; };\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << add(string("Hello"), " World") << endl;\n    return 0;\n}',
  hint: 'Generic lambda: [](auto x, auto y) { return x + y; }'
},
{
  id: 'cpp_lambdas_18',
  topicId: 'cpp_lambdas',
  question: 'Capture by move using init capture (C++14).',
  mathSolution: 'Init capture allows moving variables into lambda.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <utility>\nusing namespace std;\n\nint main() {\n    auto ptr = make_unique<int>(42);\n    auto lambda = [capture = move(ptr)]() {\n        return *capture;\n    };\n    cout << lambda() << endl;\n    // ptr is now empty\n    return 0;\n}',
  hint: 'Init capture: [capture = move(var)] captures by move.'
},
{
  id: 'cpp_lambdas_19',
  topicId: 'cpp_lambdas',
  question: 'Store lambda in std::function for type erasure.',
  mathSolution: 'std::function can hold any callable with matching signature.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint main() {\n    function<int(int, int)> operation;\n    \n    operation = [](int a, int b) { return a + b; };\n    cout << operation(5, 3) << endl;\n    \n    operation = [](int a, int b) { return a * b; };\n    cout << operation(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'std::function stores any callable with specified signature.'
},
{
  id: 'cpp_lambdas_20',
  topicId: 'cpp_lambdas',
  question: 'Return lambda from function (lambda factory).',
  mathSolution: 'Function can return lambda for later use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nauto createMultiplier(int factor) {\n    return [factor](int x) { return x * factor; };\n}\n\nint main() {\n    auto times2 = createMultiplier(2);\n    auto times5 = createMultiplier(5);\n    \n    cout << times2(10) << endl;\n    cout << times5(10) << endl;\n    \n    return 0;\n}',
  hint: 'Return lambda for functional programming patterns.'
},
{
  id: 'cpp_lambdas_21',
  topicId: 'cpp_lambdas',
  question: 'Create immediately invoked lambda expression (IILE).',
  mathSolution: 'Lambda can be defined and called immediately.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int result = []() {\n        int a = 10, b = 20;\n        return a + b;\n    }();\n    \n    cout << result << endl;\n    \n    // With parameters\n    int sum = [](int x, int y) { return x + y; }(5, 3);\n    cout << sum << endl;\n    \n    return 0;\n}',
  hint: 'Immediately invoked lambda: []() { ... }()'
},
{
  id: 'cpp_lambdas_22',
  topicId: 'cpp_lambdas',
  question: 'Use lambda for initialization in constexpr contexts.',
  mathSolution: 'Lambda can be constexpr since C++17.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    constexpr auto square = [](int x) constexpr { return x * x; };\n    constexpr int result = square(5);\n    \n    cout << result << endl;\n    \n    // Array size from constexpr lambda\n    constexpr auto size = []() constexpr { return 10; }();\n    int arr[size];\n    \n    return 0;\n}',
  hint: 'constexpr lambda can be evaluated at compile time.'
},
{
  id: 'cpp_lambdas_23',
  topicId: 'cpp_lambdas',
  question: 'Capture structured bindings in lambda (C++20).',
  mathSolution: 'Structured bindings can be captured in lambda.',
  codeSolution: '#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    for (const auto& [name, age] : ages) {\n        auto lambda = [name, age]() {\n            cout << name << ": " << age << endl;\n        };\n        lambda();\n    }\n    \n    return 0;\n}',
  hint: 'Structured binding captures copy the values into lambda.'
},
{
  "id": "cpp_lambdas_24",
  "topicId": "cpp_lambdas",
  "question": "Use lambda with pack expansion (variadic lambda).",
  "mathSolution": "Generic lambda with parameter pack.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\ntemplate<typename... Args>\nauto makePrinter(Args... args) {\n    return [args...]() {\n        ((cout << args << \" \"), ...);\n        cout << endl;\n    };\n}\n\nint main() {\n    auto print = makePrinter(1, 2.5, \"Hello\", 'A');\n    print();\n    \n    return 0;\n}",
  "hint": "Lambda can capture parameter packs for variadic templates."
},
{
  id: 'cpp_lambdas_25',
  topicId: 'cpp_lambdas',
  question: 'Create recursive lambda using std::function.',
  mathSolution: 'Recursive lambda needs std::function to refer to itself.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint main() {\n    function<int(int)> factorial = [&](int n) -> int {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    };\n    \n    cout << factorial(5) << endl;\n    \n    return 0;\n}',
  hint: 'Recursive lambda requires capture by reference and std::function.'
},
{
  id: 'cpp_lambdas_26',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with priority_queue custom comparator.',
  mathSolution: 'Lambda defines ordering for priority_queue.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto cmp = [](int left, int right) { return left > right; };\n    priority_queue<int, vector<int>, decltype(cmp)> pq(cmp);\n    \n    pq.push(5);\n    pq.push(1);\n    pq.push(9);\n    pq.push(3);\n    \n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda as comparator for priority_queue requires decltype.'
},
{
  id: 'cpp_lambdas_27',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with set custom comparator.',
  mathSolution: 'Lambda defines ordering for set elements.',
  codeSolution: '#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    set<string, decltype(cmp)> words(cmp);\n    \n    words.insert("apple");\n    words.insert("banana");\n    words.insert("kiwi");\n    words.insert("strawberry");\n    \n    for (const auto& w : words) {\n        cout << w << " (" << w.length() << ")" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda comparator for set requires decltype.'
},
{
  id: 'cpp_lambdas_28',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with map custom key comparison.',
  mathSolution: 'Lambda defines key ordering in map.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    map<string, int, decltype(cmp)> lengthMap(cmp);\n    \n    lengthMap["apple"] = 1;\n    lengthMap["banana"] = 2;\n    lengthMap["kiwi"] = 3;\n    lengthMap["strawberry"] = 4;\n    \n    for (const auto& [key, val] : lengthMap) {\n        cout << key << " -> " << val << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda comparator for map requires decltype.'
},
{
  id: 'cpp_lambdas_29',
  topicId: 'cpp_lambdas',
  question: 'Capture by reference with lifetime management.',
  mathSolution: 'Ensure captured references outlive lambda.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nfunction<int()> createCounter() {\n    int count = 0;\n    return [&]() { return ++count; }; // DANGEROUS: count outlives\n}\n\nfunction<int()> createCounterSafe() {\n    auto count = make_shared<int>(0);\n    return [count]() { return ++(*count); };\n}\n\nint main() {\n    auto counter = createCounterSafe();\n    cout << counter() << endl;\n    cout << counter() << endl;\n    \n    return 0;\n}',
  hint: 'Capturing references to local variables is dangerous; use shared_ptr.'
},
{
  id: 'cpp_lambdas_30',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::thread for parallel execution.',
  mathSolution: 'Lambda as thread function.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    int counter = 0;\n    thread t([&counter]() {\n        for (int i = 0; i < 1000; i++) {\n            counter++;\n        }\n    });\n    \n    t.join();\n    cout << "Counter: " << counter << endl;\n    \n    return 0;\n}',
  hint: 'Lambda capture by reference for thread synchronization.'
},
{
  id: 'cpp_lambdas_31',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::async for asynchronous execution.',
  mathSolution: 'Lambda as async task.',
  codeSolution: '#include <iostream>\n#include <future>\nusing namespace std;\n\nint main() {\n    auto future = async([]() {\n        this_thread::sleep_for(chrono::seconds(1));\n        return 42;\n    });\n    \n    cout << "Waiting...\\n";\n    int result = future.get();\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with async for concurrent execution.'
},
{
  id: 'cpp_lambdas_32',
  topicId: 'cpp_lambdas',
  question: 'Use lambda as default argument (C++14).',
  mathSolution: 'Lambda can be default function parameter.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid process(int x, auto pred = [](int n) { return n > 0; }) {\n    if (pred(x)) {\n        cout << x << " is valid" << endl;\n    }\n}\n\nint main() {\n    process(5);\n    process(-3);\n    process(10, [](int n) { return n % 2 == 0; });\n    \n    return 0;\n}',
  hint: 'Lambda as default argument provides flexible behavior.'
},
{
  id: 'cpp_lambdas_33',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::optional for conditional execution.',
  mathSolution: 'Lambda processes optional value if present.',
  codeSolution: '#include <iostream>\n#include <optional>\nusing namespace std;\n\nint main() {\n    optional<int> value = 42;\n    \n    auto process = [](int x) { cout << "Value: " << x << endl; };\n    \n    if (value) {\n        process(*value);\n    }\n    \n    // Using with value_or\n    int result = value.value_or(0);\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with optional for safe value processing.'
},
{
  id: 'cpp_lambdas_34',
  topicId: 'cpp_lambdas',
  question: 'Create lambda that returns lambda (currying).',
  mathSolution: 'Lambda returning lambda implements currying.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](int a) {\n        return [a](int b) { return a + b; };\n    };\n    \n    auto add5 = add(5);\n    cout << add5(3) << endl;\n    cout << add(10)(20) << endl;\n    \n    return 0;\n}',
  hint: 'Currying: lambda returning lambda for partial application.'
},
{
  id: 'cpp_lambdas_35',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with SFINAE and decltype.',
  mathSolution: 'Lambda with decltype for type detection.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    auto lambda = [](auto x) -> decltype(x) {\n        if constexpr (is_integral_v<decltype(x)>) {\n            return x * 2;\n        } else {\n            return x;\n        }\n    };\n    return lambda(value);\n}\n\nint main() {\n    cout << process(5) << endl;\n    cout << process(3.14) << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with decltype for compile-time type detection.'
},
{
  id: 'cpp_lambdas_36',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::function for callback registration.',
  mathSolution: 'Lambda as callback in event system.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <functional>\nusing namespace std;\n\nclass Button {\nprivate:\n    vector<function<void()>> clickHandlers;\npublic:\n    void onClick(function<void()> handler) {\n        clickHandlers.push_back(handler);\n    }\n    void click() {\n        for (auto& h : clickHandlers) h();\n    }\n};\n\nint main() {\n    Button btn;\n    btn.onClick([]() { cout << "Handler 1\\n"; });\n    btn.onClick([]() { cout << "Handler 2\\n"; });\n    btn.onClick([]() { cout << "Handler 3\\n"; });\n    \n    btn.click();\n    \n    return 0;\n}',
  hint: 'Lambda callbacks enable event-driven programming.'
},
{
  id: 'cpp_lambdas_37',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::variant and std::visit.',
  mathSolution: 'Lambda visitor for variant types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    auto visitor = [](auto&& arg) {\n        cout << "Value: " << arg << endl;\n    };\n    \n    data = 42;\n    visit(visitor, data);\n    \n    data = 3.14;\n    visit(visitor, data);\n    \n    data = "Hello";\n    visit(visitor, data);\n    \n    return 0;\n}',
  hint: 'Lambda visitor with variant enables type-safe handling.'
},
{
  id: 'cpp_lambdas_38',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::any for type-erased processing.',
  mathSolution: 'Lambda processes any type stored in std::any.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    auto process = [](const any& v) {\n        if (v.type() == typeid(int)) {\n            cout << "Int: " << any_cast<int>(v) << endl;\n        } else if (v.type() == typeid(double)) {\n            cout << "Double: " << any_cast<double>(v) << endl;\n        } else if (v.type() == typeid(string)) {\n            cout << "String: " << any_cast<string>(v) << endl;\n        }\n    };\n    \n    value = 42;\n    process(value);\n    \n    value = 3.14;\n    process(value);\n    \n    value = string("Hello");\n    process(value);\n    \n    return 0;\n}',
  hint: 'Lambda with any for type-erased processing.'
},
{
  id: 'cpp_lambdas_39',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::bind for partial application.',
  mathSolution: 'Lambda vs std::bind for argument binding.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    // Using std::bind (old style)\n    auto times2_bind = bind(multiply, 2, placeholders::_1);\n    \n    // Using lambda (modern style)\n    auto times2_lambda = [](int x) { return multiply(2, x); };\n    \n    cout << times2_bind(5) << endl;\n    cout << times2_lambda(5) << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas are preferred over std::bind in modern C++.'
},
{
  id: 'cpp_lambdas_40',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with RAII for scoped resource management.',
  mathSolution: 'Lambda with RAII for automatic cleanup.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired\\n"; }\n    ~Resource() { cout << "Resource released\\n"; }\n    void use() { cout << "Using resource\\n"; }\n};\n\nint main() {\n    auto cleanup = [](Resource* r) { delete r; };\n    unique_ptr<Resource, decltype(cleanup)> ptr(new Resource(), cleanup);\n    \n    ptr->use();\n    \n    return 0;\n}',
  hint: 'Lambda as custom deleter for smart pointers.'
},
{
  id: 'cpp_lambdas_41',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::sort for complex object sorting.',
  mathSolution: 'Lambda comparator for sorting by member.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n};\n\nint main() {\n    vector<Person> people = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 20}};\n    \n    // Sort by age\n    sort(people.begin(), people.end(), \n         [](const Person& a, const Person& b) { return a.age < b.age; });\n    \n    for (const auto& p : people) {\n        cout << p.name << ": " << p.age << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda comparator for sorting objects by member.'
},
{
  id: 'cpp_lambdas_42',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::find_if for conditional search.',
  mathSolution: 'Lambda predicate for complex search condition.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nstruct Product {\n    string name;\n    double price;\n    int quantity;\n};\n\nint main() {\n    vector<Product> products = {\n        {\"Laptop\", 999.99, 10},\n        {\"Mouse\", 29.99, 50},\n        {\"Keyboard\", 79.99, 30},\n        {\"Monitor\", 299.99, 15}\n    };\n    \n    auto it = find_if(products.begin(), products.end(), \n        [](const Product& p) { return p.price < 100 && p.quantity > 20; });\n    \n    if (it != products.end()) {\n        cout << "Found: " << it->name << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda predicate for complex conditional search.'
},
{
  id: 'cpp_lambdas_43',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::transform for custom mapping.',
  mathSolution: 'Lambda mapper for element transformation.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<int> prices = {100, 200, 300, 400, 500};\n    vector<double> discounted(prices.size());\n    \n    double discount = 0.1;\n    transform(prices.begin(), prices.end(), discounted.begin(),\n        [discount](int price) { return price * (1 - discount); });\n    \n    cout << "Discounted prices: \";\n    for (double p : discounted) cout << p << " \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with transform for element-wise transformation.'
},
{
  id: 'cpp_lambdas_44',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::accumulate for custom aggregation.',
  mathSolution: 'Lambda accumulator for custom reduction.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> words = {\"Hello\", \" \", \"World\", \" \", \"from\", \" \", \"C++\"};\n    \n    string sentence = accumulate(words.begin(), words.end(), string(),\n        [](string acc, const string& word) { return acc + word; });\n    \n    cout << sentence << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with accumulate for custom aggregation.'
},
{
  id: 'cpp_lambdas_45',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::partition for conditional separation.',
  mathSolution: 'Lambda predicate for partitioning.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    auto it = partition(v.begin(), v.end(), \n        [](int x) { return x % 2 == 0; });\n    \n    cout << "Even numbers: \";\n    for (auto i = v.begin(); i != it; ++i) cout << *i << \" \";\n    cout << endl;\n    \n    cout << \"Odd numbers: \";\n    for (auto i = it; i != v.end(); ++i) cout << *i << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with partition for separating elements.'
},
{
  id: 'cpp_lambdas_46',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::remove_if for conditional removal.',
  mathSolution: 'Lambda predicate for conditional removal.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    v.erase(remove_if(v.begin(), v.end(),\n        [](int x) { return x % 2 == 0; }), v.end());\n    \n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with remove_if for conditional removal.'
},
{
  id: 'cpp_lambdas_47',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::generate for dynamic data generation.',
  mathSolution: 'Lambda generator for dynamic values.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <random>\nusing namespace std;\n\nint main() {\n    vector<int> v(10);\n    random_device rd;\n    mt19937 gen(rd());\n    uniform_int_distribution<> dis(1, 100);\n    \n    generate(v.begin(), v.end(), [&]() { return dis(gen); });\n    \n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with generate for random data generation.'
},
{
  id: 'cpp_lambdas_48',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::for_each for parallel execution.',
  mathSolution: 'Lambda with execution policy for parallel processing.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <execution>\nusing namespace std;\n\nint main() {\n    vector<int> v(1000000);\n    iota(v.begin(), v.end(), 1);\n    \n    for_each(execution::par, v.begin(), v.end(), \n        [](int& x) { x = x * x; });\n    \n    cout << "First 10: ";\n    for (int i = 0; i < 10; i++) cout << v[i] << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with parallel execution for performance.'
},
{
  id: 'cpp_lambdas_49',
  topicId: 'cpp_lambdas',
  question: 'Use lambda as predicate for std::all_of, any_of, none_of.',
  mathSolution: 'Lambda for validation algorithms.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    vector<int> v = {2, 4, 6, 8, 10};\n    \n    bool allEven = all_of(v.begin(), v.end(), \n        [](int x) { return x % 2 == 0; });\n    \n    bool anyGreater = any_of(v.begin(), v.end(), \n        [](int x) { return x > 20; });\n    \n    bool noneNegative = none_of(v.begin(), v.end(), \n        [](int x) { return x < 0; });\n    \n    cout << boolalpha;\n    cout << "All even: " << allEven << endl;\n    cout << "Any > 20: " << anyGreater << endl;\n    cout << "None negative: " << noneNegative << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with all_of/any_of/none_of for validation.'
},
{
  id: 'cpp_lambdas_50',
  topicId: 'cpp_lambdas',
  question: 'Create comprehensive lambda demonstration program.',
  mathSolution: 'Combine multiple lambda concepts in one example.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <functional>\n#include <map>\n#include <string>\n#include <memory>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << "=== Lambda Expressions Demonstration ===\\n\\n";\n    \n    // 1. Basic lambda\n    cout << "1. Basic lambda:\\n";\n    auto greet = []() { cout << "   Hello from lambda!\\n"; };\n    greet();\n    \n    // 2. Lambda with parameters and return\n    cout << "\\n2. Lambda with parameters:\\n";\n    auto add = [](int a, int b) { return a + b; };\n    cout << "   add(5,3) = " << add(5, 3) << endl;\n    \n    // 3. Capture by value and reference\n    cout << "\\n3. Capture by value and reference:\\n";\n    int counter = 0;\n    auto increment = [&counter]() { counter++; };\n    increment();\n    cout << "   Counter after increment: " << counter << endl;\n    \n    // 4. Generic lambda (C++14)\n    cout << "\\n4. Generic lambda:\\n";\n    auto print = [](auto x) { cout << "   Value: " << x << endl; };\n    print(42);\n    print(3.14);\n    print("Hello");\n    \n    // 5. Lambda with STL algorithms\n    cout << "\\n5. Lambda with STL algorithms:\\n";\n    vector<int> v = {5, 2, 8, 1, 9, 3, 7, 4, 6};\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    cout << "   Sorted descending: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    // 6. Lambda with capture initialization (C++14)\n    cout << "\\n6. Capture initialization:\\n";\n    auto unique = make_unique<int>(42);\n    auto process = [capture = move(unique)]() {\n        cout << "   Captured unique_ptr value: " << *capture << endl;\n    };\n    process();\n    \n    // 7. Return lambda from function\n    cout << "\\n7. Lambda factory:\\n";\n    auto multiplier = [](int factor) {\n        return [factor](int x) { return x * factor; };\n    };\n    auto times2 = multiplier(2);\n    auto times3 = multiplier(3);\n    cout << "   times2(5) = " << times2(5) << endl;\n    cout << "   times3(5) = " << times3(5) << endl;\n    \n    // 8. Lambda in map comparator\n    cout << "\\n8. Lambda as map comparator:\\n";\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    map<string, int, decltype(cmp)> lengthMap(cmp);\n    lengthMap["apple"] = 1;\n    lengthMap["banana"] = 2;\n    lengthMap["kiwi"] = 3;\n    cout << "   Sorted by length: ";\n    for (const auto& [key, val] : lengthMap) {\n        cout << key << " ";\n    }\n    cout << endl;\n    \n    // 9. Immediately invoked lambda\n    cout << "\\n9. Immediately invoked lambda:\\n";\n    int result = []() { return 100; }();\n    cout << "   Result: " << result << endl;\n    \n    // 10. Recursive lambda\n    cout << "\\n10. Recursive lambda:\\n";\n    function<int(int)> factorial = [&](int n) -> int {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    };\n    cout << "   factorial(5) = " << factorial(5) << endl;\n    \n    cout << "\\n=== Lambda concepts demonstrated ===\\n";\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of lambda concepts.'
}
);
