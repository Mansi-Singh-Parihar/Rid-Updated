QuizData.questions.push(
{
  id: 'cpp_templates_1',
  topicId: 'cpp_templates',
  question: 'Create a simple function template that returns the maximum of two values.',
  mathSolution: 'Template allows function to work with any data type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << max(5, 3) << endl;           // int\n    cout << max(5.5, 3.2) << endl;       // double\n    cout << max(\'A\', \'Z\') << endl;       // char\n    cout << max(string("apple"), string("banana")) << endl; // string\n    return 0;\n}',
  hint: 'Function template syntax: template<typename T> T func(T a, T b)'
},
{
  id: 'cpp_templates_2',
  topicId: 'cpp_templates',
  question: 'Create a function template with multiple type parameters.',
  mathSolution: 'Multiple template parameters allow different types for different arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(5, 3) << endl;           // int + int = int\n    cout << add(5, 3.14) << endl;        // int + double = double\n    cout << add(5.5, 3) << endl;         // double + int = double\n    cout << add(string("Hello"), " World") << endl;  // string concatenation\n    return 0;\n}',
  hint: 'Multiple template parameters: template<typename T, typename U>'
},
{
  id: 'cpp_templates_3',
  topicId: 'cpp_templates',
  question: 'Create a class template for a generic Box that can hold any type.',
  mathSolution: 'Class templates allow creating type-independent classes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(const T& c) : content(c) {}\n    void set(const T& c) { content = c; }\n    T get() const { return content; }\n    void display() const { cout << "Box contains: " << content << endl; }\n};\n\nint main() {\n    Box<int> intBox(42);\n    Box<double> doubleBox(3.14);\n    Box<string> stringBox("Hello");\n    \n    intBox.display();\n    doubleBox.display();\n    stringBox.display();\n    \n    return 0;\n}',
  hint: 'Class template: template<typename T> class ClassName { ... }'
},
{
  id: 'cpp_templates_4',
  topicId: 'cpp_templates',
  question: 'Create a function template with non-type template parameter (array size).',
  mathSolution: 'Non-type template parameters accept compile-time constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T, size_t N>\nT arraySum(const T (&arr)[N]) {\n    T sum = 0;\n    for (size_t i = 0; i < N; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int intArr[] = {1, 2, 3, 4, 5};\n    double doubleArr[] = {1.1, 2.2, 3.3};\n    \n    cout << arraySum(intArr) << endl;      // 15\n    cout << arraySum(doubleArr) << endl;   // 6.6\n    \n    return 0;\n}',
  hint: 'Non-type template parameter: template<typename T, size_t N>'
},
{
  id: 'cpp_templates_5',
  topicId: 'cpp_templates',
  question: 'Use template specialization for specific data types.',
  mathSolution: 'Template specialization provides custom implementation for specific types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Printer {\npublic:\n    void print(const T& value) {\n        cout << "Generic: " << value << endl;\n    }\n};\n\n// Specialization for bool\ntemplate<>\nclass Printer<bool> {\npublic:\n    void print(const bool& value) {\n        cout << "Boolean: " << (value ? "true" : "false") << endl;\n    }\n};\n\n// Specialization for string\ntemplate<>\nclass Printer<string> {\npublic:\n    void print(const string& value) {\n        cout << "String: \\\"" << value << "\\\"\" << endl;\n    }\n};\n\nint main() {\n    Printer<int> p1;\n    Printer<double> p2;\n    Printer<bool> p3;\n    Printer<string> p4;\n    \n    p1.print(42);\n    p2.print(3.14);\n    p3.print(true);\n    p4.print(\"Hello\");\n    \n    return 0;\n}',
  hint: 'Full specialization: template<> class ClassName<SpecificType> { ... }'
},
{
  id: 'cpp_templates_6',
  topicId: 'cpp_templates',
  question: 'Create a variadic template function to sum any number of arguments.',
  mathSolution: 'Variadic templates accept variable number of arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Base case\nint sum() { return 0; }\n\n// Recursive variadic template\ntemplate<typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}\n\ntemplate<typename T, typename... Args>\nvoid printAll(T first, Args... args) {\n    cout << first;\n    ((cout << \", \" << args), ...);  // Fold expression (C++17)\n    cout << endl;\n}\n\nint main() {\n    cout << sum(1, 2, 3, 4, 5) << endl;      // 15\n    cout << sum(1.1, 2.2, 3.3) << endl;      // 6.6\n    \n    printAll(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic template: template<typename... Args>'
},
{
  id: 'cpp_templates_7',
  topicId: 'cpp_templates',
  question: 'Use fold expressions to simplify variadic templates (C++17).',
  mathSolution: 'Fold expressions reduce parameter packs with binary operators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (args + ...);  // Unary right fold\n}\n\ntemplate<typename... Args>\nauto product(Args... args) {\n    return (args * ...);\n}\n\ntemplate<typename... Args>\nvoid printAll(Args... args) {\n    (cout << ... << args) << endl;  // Left fold with comma\n}\n\ntemplate<typename... Args>\nbool allTrue(Args... args) {\n    return (args && ...);\n}\n\nint main() {\n    cout << sum(1, 2, 3, 4) << endl;        // 10\n    cout << product(2, 3, 4) << endl;       // 24\n    printAll(\"Hello\", \" \", \"World\", \"!\");\n    cout << allTrue(true, true, false) << endl;  // false\n    \n    return 0;\n}',
  hint: 'Fold expressions: (args + ...) expands to (arg1 + (arg2 + (arg3 + ...)))'
},
{
  id: 'cpp_templates_8',
  topicId: 'cpp_templates',
  question: 'Create a template with default template parameters.',
  mathSolution: 'Default template parameters provide default types.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T = int, size_t Size = 10>\nclass FixedArray {\nprivate:\n    T arr[Size];\npublic:\n    void fill(const T& value) {\n        for (size_t i = 0; i < Size; i++) arr[i] = value;\n    }\n    void display() {\n        for (size_t i = 0; i < Size; i++) cout << arr[i] << \" \";\n        cout << endl;\n    }\n};\n\ntemplate<typename T = double>\nT multiply(T a, T b) {\n    return a * b;\n}\n\nint main() {\n    FixedArray<> intArray;        // Uses default int, 10\n    FixedArray<double, 5> doubleArray;\n    \n    intArray.fill(5);\n    doubleArray.fill(3.14);\n    \n    intArray.display();\n    doubleArray.display();\n    \n    cout << multiply(5, 3) << endl;       // Uses int\n    cout << multiply(5.5, 2.0) << endl;   // Uses double\n    \n    return 0;\n}',
  hint: 'Default template parameters: template<typename T = int, size_t N = 10>'
},
{
  id: 'cpp_templates_9',
  topicId: 'cpp_templates',
  question: 'Use SFINAE (Substitution Failure Is Not An Error) to enable/disable functions.',
  mathSolution: 'SFINAE selects appropriate function overloads at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\n// For integral types\ntemplate<typename T>\ntypename enable_if<is_integral<T>::value, T>::type\ndoubleValue(T x) {\n    cout << "Integral version: \";\n    return x * 2;\n}\n\n// For floating point types\ntemplate<typename T>\ntypename enable_if<is_floating_point<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Floating point version: \";\n    return x * 2.0;\n}\n\n// For string type\ntemplate<typename T>\ntypename enable_if<is_same<T, string>::value, string>::type\ndoubleValue(T x) {\n    cout << \"String version: \";\n    return x + x;\n}\n\nint main() {\n    cout << doubleValue(5) << endl;        // Integral\n    cout << doubleValue(5.5) << endl;      // Floating point\n    cout << doubleValue(string(\"Hi\")) << endl;  // String\n    \n    return 0;\n}',
  hint: 'SFINAE uses enable_if to conditionally include functions.'
},
{
  id: 'cpp_templates_10',
  topicId: 'cpp_templates',
  question: 'Use type traits to check properties of types at compile time.',
  mathSolution: 'Type traits provide compile-time type information.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nvoid checkType() {\n    cout << "is_integral: " << is_integral<T>::value << endl;\n    cout << "is_floating_point: " << is_floating_point<T>::value << endl;\n    cout << "is_pointer: " << is_pointer<T>::value << endl;\n    cout << "is_const: " << is_const<T>::value << endl;\n    cout << "is_reference: " << is_reference<T>::value << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    \n    cout << "int:" << endl;\n    checkType<int>();\n    \n    cout << "\\ndouble:" << endl;\n    checkType<double>();\n    \n    cout << "\\nint*:" << endl;\n    checkType<int*>();\n    \n    cout << "\\nconst int&:" << endl;\n    checkType<const int&>();\n    \n    // Using type traits in algorithms\n    cout << "\\nIs integral: " << is_integral_v<int> << endl;  // C++17\n    \n    return 0;\n}',
  hint: 'Type traits in <type_traits> provide compile-time type introspection.'
},
{
  id: 'cpp_templates_11',
  topicId: 'cpp_templates',
  question: 'Create a template alias for complex types.',
  mathSolution: 'Template aliases simplify complex template type names.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\n// Template alias\ntemplate<typename T>\nusing Vector = vector<T>;\n\ntemplate<typename K, typename V>\nusing Map = map<K, V>;\n\ntemplate<typename T>\nusing SharedPtr = shared_ptr<T>;\n\n// Alias for function pointer\ntemplate<typename R, typename... Args>\nusing FunctionPtr = R(*)(Args...);\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    Vector<int> v = {1, 2, 3, 4, 5};\n    Map<string, int> m = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    cout << \"Vector: \";\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    \n    cout << \"Map: \";\n    for (const auto& [key, val] : m) {\n        cout << key << \":\" << val << \" \";\n    }\n    cout << endl;\n    \n    FunctionPtr<int, int, int> func = add;\n    cout << \"Function result: \" << func(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'Template alias: template<typename T> using Alias = OriginalType<T>;'
},
{
  id: 'cpp_templates_12',
  topicId: 'cpp_templates',
  question: 'Create a variadic class template for tuple-like structure.',
  mathSolution: 'Variadic class templates can store heterogeneous types.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\n// Base case\ntemplate<typename... Types>\nclass MyTuple {};\n\n// Recursive case\ntemplate<typename First, typename... Rest>\nclass MyTuple<First, Rest...> : public MyTuple<Rest...> {\nprivate:\n    First value;\npublic:\n    MyTuple(First f, Rest... r) : MyTuple<Rest...>(r...), value(f) {}\n    \n    First getValue() const { return value; }\n};\n\n// Helper to get element\n template<size_t Index, typename First, typename... Rest>\nstruct GetHelper {\n    static auto get(const MyTuple<First, Rest...>& tuple) {\n        return GetHelper<Index - 1, Rest...>::get(tuple);\n    }\n};\n\ntemplate<typename First, typename... Rest>\nstruct GetHelper<0, First, Rest...> {\n    static First get(const MyTuple<First, Rest...>& tuple) {\n        return tuple.getValue();\n    }\n};\n\ntemplate<size_t Index, typename... Types>\nauto get(const MyTuple<Types...>& tuple) {\n    return GetHelper<Index, Types...>::get(tuple);\n}\n\nint main() {\n    MyTuple<int, double, string> t(42, 3.14, \"Hello\");\n    \n    cout << get<0>(t) << endl;  // 42\n    cout << get<1>(t) << endl;  // 3.14\n    cout << get<2>(t) << endl;  // Hello\n    \n    return 0;\n}',
  hint: 'Variadic class templates enable tuple-like constructs.'
},
{
  id: 'cpp_templates_13',
  topicId: 'cpp_templates',
  question: 'Use CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'CRTP enables compile-time polymorphism without virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public Shape<Circle> {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    void drawImpl() { cout << \"Drawing circle with radius \" << radius << endl; }\n    double areaImpl() { return 3.14159 * radius * radius; }\n};\n\nclass Rectangle : public Shape<Rectangle> {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    void drawImpl() { cout << \"Drawing rectangle \" << width << \"x\" << height << endl; }\n    double areaImpl() { return width * height; }\n};\n\ntemplate<typename T>\nvoid process(Shape<T>& shape) {\n    shape.draw();\n    cout << \"Area: \" << shape.area() << endl;\n}\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    process(c);\n    process(r);\n    \n    return 0;\n}',
  hint: 'CRTP: class Derived : public Base<Derived>'
},
{
  id: 'cpp_templates_14',
  topicId: 'cpp_templates',
  question: 'Create a template with parameter pack expansion.',
  mathSolution: 'Parameter packs can be expanded in multiple contexts.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <utility>\nusing namespace std;\n\n// Expanding into function arguments\ntemplate<typename... Args>\nvoid printArgs(Args... args) {\n    (cout << ... << args) << endl;\n}\n\n// Expanding into initializer list\ntemplate<typename... Args>\nauto makeVector(Args... args) {\n    return vector<int>{args...};\n}\n\n// Expanding into tuple\ntemplate<typename... Args>\nauto makeTuple(Args... args) {\n    return make_tuple(args...);\n}\n\n// Expanding into template arguments\ntemplate<typename... Types>\nstruct TypeList {};\n\ntemplate<typename... Types>\nvoid processTypes() {\n    TypeList<Types...> list;\n    cout << \"Type list size: \" << sizeof...(Types) << endl;\n}\n\nint main() {\n    printArgs(1, 2, 3, 4, 5);\n    \n    auto vec = makeVector(10, 20, 30, 40);\n    cout << \"Vector size: \" << vec.size() << endl;\n    \n    auto tup = makeTuple(42, 3.14, \"Hello\");\n    cout << get<0>(tup) << \", \" << get<1>(tup) << \", \" << get<2>(tup) << endl;\n    \n    processTypes<int, double, string>();\n    \n    return 0;\n}',
  hint: 'Parameter packs expand with ... in various contexts.'
},
{
  id: 'cpp_templates_15',
  topicId: 'cpp_templates',
  question: 'Use template template parameters for higher-order templates.',
  mathSolution: 'Template template parameters accept templates as arguments.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T, template<typename> class Container>\nclass MyContainer {\nprivate:\n    Container<T> data;\npublic:\n    void add(const T& value) { data.push_back(value); }\n    void display() {\n        for (const auto& item : data) {\n            cout << item << \" \";\n        }\n        cout << endl;\n    }\n};\n\n// C++11 style with template template parameter\ntemplate<typename T, template<typename, typename...> class Container, typename... Args>\nclass AdvancedContainer {\nprivate:\n    Container<T, Args...> data;\npublic:\n    void add(const T& value) { data.push_back(value); }\n    size_t size() const { return data.size(); }\n};\n\nint main() {\n    MyContainer<int, vector> vc;\n    vc.add(10);\n    vc.add(20);\n    vc.display();\n    \n    AdvancedContainer<int, vector> avc;\n    avc.add(1);\n    avc.add(2);\n    cout << \"Size: \" << avc.size() << endl;\n    \n    return 0;\n}',
  hint: 'Template template parameter: template<typename> class Container'
},
{
  id: 'cpp_templates_16',
  topicId: 'cpp_templates',
  question: 'Create a template with explicit specialization for arrays.',
  mathSolution: 'Template specialization provides optimized implementation for arrays.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Primary template for any type\ntemplate<typename T>\nvoid printSize(const T& value) {\n    cout << \"Size: \" << sizeof(value) << \" bytes\" << endl;\n}\n\n// Partial specialization for arrays\ntemplate<typename T, size_t N>\nvoid printSize(const T (&arr)[N]) {\n    cout << \"Array has \" << N << \" elements, total size: \" << sizeof(arr) << \" bytes\" << endl;\n}\n\n// Full specialization for char arrays\ntemplate<size_t N>\nvoid printSize(const char (&arr)[N]) {\n    cout << \"String length: \" << N - 1 << \", \\\"\" << arr << \"\\\"\" << endl;\n}\n\nint main() {\n    int x = 42;\n    double d = 3.14;\n    int arr[] = {1, 2, 3, 4, 5};\n    char str[] = \"Hello\";\n    \n    printSize(x);\n    printSize(d);\n    printSize(arr);\n    printSize(str);\n    \n    return 0;\n}',
  hint: 'Partial specialization: template<typename T, size_t N> for arrays'
},
{
  id: 'cpp_templates_17',
  topicId: 'cpp_templates',
  question: 'Use static_assert with templates for compile-time constraints.',
  mathSolution: 'static_assert validates template parameters at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nclass NumericContainer {\n    static_assert(is_arithmetic<T>::value, \"T must be arithmetic type\");\nprivate:\n    T value;\npublic:\n    NumericContainer(T v) : value(v) {}\n    T get() const { return value; }\n};\n\ntemplate<typename T>\nT safeDivide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \" divide requires arithmetic types\");\n    if (b == 0) throw runtime_error(\"Division by zero\");\n    return a / b;\n}\n\ntemplate<size_t N>\nclass FixedBuffer {\n    static_assert(N > 0 && N <= 1024, \"Buffer size must be between 1 and 1024\");\n    char buffer[N];\npublic:\n    size_t size() const { return N; }\n};\n\nint main() {\n    NumericContainer<int> n1(42);    // OK\n    // NumericContainer<string> n2(\"Hello\");  // Error\n    \n    cout << safeDivide(10, 2) << endl;\n    \n    FixedBuffer<100> buf1;   // OK\n    // FixedBuffer<2000> buf2;  // Error\n    \n    return 0;\n}',
  hint: 'static_assert catches template parameter errors at compile time.'
},
{
  id: 'cpp_templates_18',
  topicId: 'cpp_templates',
  question: 'Create a function template with perfect forwarding.',
  mathSolution: 'Perfect forwarding preserves value category of arguments.',
  codeSolution: '#include <iostream>\n#include <utility>\nusing namespace std;\n\nvoid process(int& x) { cout << "Lvalue reference: " << x << endl; }\nvoid process(int&& x) { cout << "Rvalue reference: " << x << endl; }\nvoid process(const int& x) { cout << "Const lvalue: " << x << endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    process(forward<T>(arg));\n}\n\nclass Widget {\npublic:\n    Widget() { cout << "Widget created" << endl; }\n    Widget(const Widget&) { cout << "Widget copied" << endl; }\n    Widget(Widget&&) { cout << "Widget moved" << endl; }\n};\n\ntemplate<typename T>\nvoid createWidget(T&& arg) {\n    Widget w(forward<T>(arg));\n}\n\nint main() {\n    int a = 10;\n    const int b = 20;\n    \n    wrapper(a);      // Lvalue\n    wrapper(30);     // Rvalue\n    wrapper(b);      // Const lvalue\n    \n    Widget w1;\n    createWidget(w1);           // Copy\n    createWidget(Widget());     // Move\n    \n    return 0;\n}',
  hint: 'Perfect forwarding: template<typename T> void func(T&& arg) { other(forward<T>(arg)); }'
},
{
  id: 'cpp_templates_19',
  topicId: 'cpp_templates',
  question: 'Use decltype with templates for return type deduction.',
  mathSolution: 'decltype deduces exact type of expression for return type.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\n#include <string>\nusing namespace std;\n\ntemplate<typename Container>\nauto front(Container& c) -> decltype(c.front()) {\n    return c.front();\n}\n\ntemplate<typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\ntemplate<typename Func, typename... Args>\nauto call(Func f, Args... args) -> decltype(f(args...)) {\n    return f(args...);\n}\n\nint square(int x) { return x * x; }\ndouble cube(double x) { return x * x * x; }\n\nint main() {\n    vector<int> v = {1, 2, 3};\n    list<double> l = {1.1, 2.2, 3.3};\n    \n    cout << front(v) << endl;  // int\n    cout << front(l) << endl;  // double\n    \n    cout << add(5, 3.14) << endl;      // double\n    cout << add(string(\"Hello\"), \" World\") << endl;  // string\n    \n    cout << call(square, 5) << endl;\n    cout << call(cube, 3.0) << endl;\n    \n    return 0;\n}',
  hint: 'decltype deduces expression type without evaluation.'
},
{
  id: 'cpp_templates_20',
  topicId: 'cpp_templates',
  question: 'Create a template with dependent types using typename keyword.',
  mathSolution: 'typename disambiguates dependent types in templates.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename Container>\nvoid printContainer(const Container& c) {\n    typename Container::const_iterator it;\n    for (it = c.begin(); it != c.end(); ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n}\n\ntemplate<typename T>\nclass Wrapper {\npublic:\n    using value_type = T;\n    using reference = T&;\n    using const_reference = const T&;\n};\n\ntemplate<typename T>\nvoid processWrapper(const Wrapper<T>& w) {\n    typename Wrapper<T>::value_type val;\n    cout << \"Processing wrapper...\" << endl;\n}\n\ntemplate<typename T>\nclass Container {\npublic:\n    using iterator = T*;\n    using const_iterator = const T*;\n    \n    iterator begin() { return data; }\n    iterator end() { return data + size; }\n    \nprivate:\n    T data[10];\n    size_t size = 10;\n};\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    printContainer(v);\n    \n    Wrapper<int> w;\n    processWrapper(w);\n    \n    return 0;\n}',
  hint: 'Use typename for dependent types: typename T::iterator'
},
{
  id: 'cpp_templates_21',
  topicId: 'cpp_templates',
  question: 'Use template deduction guides (C++17) for class templates.',
  mathSolution: 'Deduction guides enable automatic template parameter deduction.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(const T& c) : content(c) {}\n    void display() { cout << \"Box contains: \" << content << endl; }\n};\n\n// Deduction guide\nBox(const char*) -> Box<string>;\n\ntemplate<typename T, typename U>\nclass Pair {\npublic:\n    T first;\n    U second;\n    Pair(T f, U s) : first(f), second(s) {}\n};\n\n// Deduction guide for Pair\nPair(const char*, const char*) -> Pair<string, string>;\n\nint main() {\n    Box b1(42);           // Deduced as Box<int>\n    Box b2(3.14);         // Deduced as Box<double>\n    Box b3(\"Hello\");      // Deduced as Box<string> (via deduction guide)\n    \n    b1.display();\n    b2.display();\n    b3.display();\n    \n    Pair p1(1, 2);                // Pair<int, int>\n    Pair p2(3.14, \"pi\");         // Pair<double, const char*>\n    Pair p3(\"Hello\", \"World\");   // Pair<string, string> (via deduction guide)\n    \n    return 0;\n}',
  hint: 'Deduction guides: Box(const char*) -> Box<string>;'
},
{
  id: 'cpp_templates_22',
  topicId: 'cpp_templates',
  question: 'Create a template with constexpr if for compile-time branching (C++17).',
  mathSolution: 'if constexpr discards false branches at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        cout << \"Integral: \";\n        return value * 2;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << \"Floating point: \";\n        return value * 2.0;\n    } else if constexpr (is_same<T, string>::value) {\n        cout << \"String: \";\n        return value + value;\n    } else {\n        cout << \"Other: \";\n        return value;\n    }\n}\n\ntemplate<typename T>\nvoid printInfo(const T& value) {\n    if constexpr (is_pointer<T>::value) {\n        cout << \"Pointer to: \" << *value << endl;\n    } else if constexpr (is_array<T>::value) {\n        cout << \"Array of size: \" << sizeof(value) / sizeof(value[0]) << endl;\n    } else {\n        cout << \"Value: \" << value << endl;\n    }\n}\n\nint main() {\n    cout << process(42) << endl;\n    cout << process(3.14) << endl;\n    cout << process(string(\"Hi\")) << endl;\n    \n    int x = 10;\n    int arr[] = {1, 2, 3};\n    \n    printInfo(5);\n    printInfo(&x);\n    printInfo(arr);\n    \n    return 0;\n}',
  hint: 'if constexpr eliminates branches not taken at compile time.'
},
{
  id: 'cpp_templates_23',
  topicId: 'cpp_templates',
  question: 'Create template variables for compile-time constants (C++14).',
  mathSolution: 'Variable templates allow templated constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nconstexpr T pi = T(3.1415926535897932385);\n\ntemplate<typename T>\nconstexpr T euler = T(2.71828182845904523536);\n\ntemplate<typename T>\nconstexpr T zero = T(0);\n\ntemplate<typename T>\nconstexpr T square(T x) { return x * x; }\n\nint main() {\n    double piDouble = pi<double>;\n    float piFloat = pi<float>;\n    int piInt = pi<int>;  // Truncated\n    \n    cout.precision(15);\n    cout << \"pi<double>: \" << piDouble << endl;\n    cout << \"pi<float>: \" << piFloat << endl;\n    cout << \"pi<int>: \" << piInt << endl;\n    \n    cout << \"euler<double>: \" << euler<double> << endl;\n    cout << \"zero<int>: \" << zero<int> << endl;\n    \n    cout << \"square(5): \" << square(5) << endl;\n    \n    return 0;\n}',
  hint: 'Variable template: template<typename T> constexpr T variable = T(value);'
},
{
  id: 'cpp_templates_24',
  topicId: 'cpp_templates',
  question: 'Use concepts to constrain template parameters (C++20).',
  mathSolution: 'Concepts define requirements for template arguments.',
  codeSolution: '#include <iostream>\n#include <concepts>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nconcept Numeric = requires(T a, T b) {\n    { a + b } -> convertible_to<T>;\n    { a - b } -> convertible_to<T>;\n    { a * b } -> convertible_to<T>;\n    { a / b } -> convertible_to<T>;\n    { a > b } -> convertible_to<bool>;\n};\n\ntemplate<typename T>\nconcept Printable = requires(T t) {\n    { cout << t } -> convertible_to<ostream&>;\n};\n\ntemplate<Numeric T>\nT add(T a, T b) {\n    return a + b;\n}\n\ntemplate<Numeric T>\nT multiply(T a, T b) {\n    return a * b;\n}\n\ntemplate<Printable T>\nvoid print(const T& value) {\n    cout << value << endl;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << multiply(4, 2) << endl;\n    \n    print(42);\n    print(\"Hello\");\n    print(3.14);\n    \n    // add(\"a\", \"b\");  // Error: string does not satisfy Numeric concept\n    \n    return 0;\n}',
  hint: 'Concepts: template<typename T> concept Name = requires(T t) { ... }'
},
{
  id: 'cpp_templates_25',
  topicId: 'cpp_templates',
  question: 'Create a template with requires clause for constraints (C++20).',
  mathSolution: 'requires clause specifies template parameter requirements.',
  codeSolution: '#include <iostream>\n#include <concepts>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T>\nrequires is_integral_v<T>\nT doubleValue(T x) {\n    return x * 2;\n}\n\ntemplate<typename T>\nrequires is_floating_point_v<T>\ndouble half(T x) {\n    return x / 2.0;\n}\n\ntemplate<typename Container>\nrequires requires(Container c) {\n    { c.begin() } -> input_iterator;\n    { c.end() } -> input_iterator;\n}\nvoid printContainer(const Container& c) {\n    for (const auto& item : c) {\n        cout << item << \" \";\n    }\n    cout << endl;\n}\n\ntemplate<typename T>\nrequires requires(T t) {\n    { t.size() } -> convertible_to<size_t>;\n    { t.empty() } -> convertible_to<bool>;\n}\nvoid checkContainer(const T& c) {\n    cout << \"Size: \" << c.size() << \", Empty: \" << (c.empty() ? \"Yes\" : \"No\") << endl;\n}\n\nint main() {\n    cout << doubleValue(5) << endl;   // OK\n    // cout << doubleValue(5.5) << endl; // Error\n    \n    cout << half(5.5) << endl;        // OK\n    \n    vector<int> v = {1, 2, 3, 4, 5};\n    list<string> l = {\"a\", \"b\", \"c\"};\n    \n    printContainer(v);\n    printContainer(l);\n    \n    checkContainer(v);\n    checkContainer(l);\n    \n    return 0;\n}',
  hint: 'requires clause: template<typename T> requires condition'
},
{
  id: 'cpp_templates_26',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time factorial computation.',
  mathSolution: 'Template metaprogramming computes values at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<int N>\nstruct Factorial {\n    static constexpr int value = N * Factorial<N - 1>::value;\n};\n\ntemplate<>\nstruct Factorial<0> {\n    static constexpr int value = 1;\n};\n\ntemplate<int N>\nstruct Fibonacci {\n    static constexpr int value = Fibonacci<N - 1>::value + Fibonacci<N - 2>::value;\n};\n\ntemplate<>\nstruct Fibonacci<0> {\n    static constexpr int value = 0;\n};\n\ntemplate<>\nstruct Fibonacci<1> {\n    static constexpr int value = 1;\n};\n\ntemplate<int N>\nstruct PowerOfTwo {\n    static constexpr int value = 2 * PowerOfTwo<N - 1>::value;\n};\n\ntemplate<>\nstruct PowerOfTwo<0> {\n    static constexpr int value = 1;\n};\n\nint main() {\n    cout << \"5! = \" << Factorial<5>::value << endl;\n    cout << \"10! = \" << Factorial<10>::value << endl;\n    \n    cout << \"Fibonacci(10) = \" << Fibonacci<10>::value << endl;\n    \n    cout << \"2^10 = \" << PowerOfTwo<10>::value << endl;\n    \n    // Compile-time arrays\n    int arr[Factorial<5>::value];\n    cout << \"Array size: \" << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'Template metaprogramming uses recursive templates for compile-time computation.'
},
{
  id: 'cpp_templates_27',
  topicId: 'cpp_templates',
  question: 'Create a type trait to check if a type is a vector.',
  mathSolution: 'Type traits provide compile-time type information.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T>\nstruct IsVector : false_type {};\n\ntemplate<typename T>\nstruct IsVector<vector<T>> : true_type {};\n\ntemplate<typename T>\nstruct IsList : false_type {};\n\ntemplate<typename T>\nstruct IsList<list<T>> : true_type {};\n\ntemplate<typename T>\nstruct RemovePointer {\n    using type = T;\n};\n\ntemplate<typename T>\nstruct RemovePointer<T*> {\n    using type = T;\n};\n\ntemplate<typename T>\nvoid checkType() {\n    if constexpr (IsVector<T>::value) {\n        cout << \"Type is a vector\" << endl;\n    } else if constexpr (IsList<T>::value) {\n        cout << \"Type is a list\" << endl;\n    } else {\n        cout << \"Type is neither vector nor list\" << endl;\n    }\n}\n\nint main() {\n    cout << boolalpha;\n    \n    cout << IsVector<vector<int>>::value << endl;   // true\n    cout << IsVector<list<int>>::value << endl;     // false\n    \n    cout << IsList<vector<int>>::value << endl;     // false\n    cout << IsList<list<int>>::value << endl;       // true\n    \n    checkType<vector<int>>();\n    checkType<list<double>>();\n    checkType<int>();\n    \n    RemovePointer<int*>::type x = 42;\n    cout << \"RemovePointer: \" << x << endl;\n    \n    return 0;\n}',
  hint: 'Type traits are partial specializations for metaprogramming.'
},
{
  id: 'cpp_templates_28',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time integer sequences (C++14).',
  mathSolution: 'Integer sequences enable compile-time iteration.',
  codeSolution: '#include <iostream>\n#include <utility>\nusing namespace std;\n\ntemplate<typename T, T... Ints>\nvoid printSequence(integer_sequence<T, Ints...>) {\n    ((cout << Ints << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename T, T N>\nusing make_integer_sequence = integer_sequence<T, __integer_pack(N)...>;\n\ntemplate<size_t... Is>\nvoid printIndices(index_sequence<Is...>) {\n    ((cout << Is << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename Tuple, size_t... Is>\nvoid printTupleImpl(const Tuple& t, index_sequence<Is...>) {\n    ((cout << get<Is>(t) << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename... Args>\nvoid printTuple(const tuple<Args...>& t) {\n    printTupleImpl(t, index_sequence_for<Args...>{});\n}\n\nint main() {\n    using MySeq = integer_sequence<int, 1, 2, 3, 4, 5>;\n    printSequence(MySeq{});\n    \n    using MyIndex = index_sequence<0, 1, 2, 3, 4>;\n    printIndices(MyIndex{});\n    \n    auto t = make_tuple(10, 20, 30, 40);\n    printTuple(t);\n    \n    return 0;\n}',
  hint: 'integer_sequence enables compile-time indexing and iteration.'
},
{
  id: 'cpp_templates_29',
  topicId: 'cpp_templates',
  question: 'Create a template metafunction for type selection (conditional).',
  mathSolution: 'Metafunction selects type based on condition.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<bool Condition, typename T, typename F>\nstruct Conditional {\n    using type = T;\n};\n\ntemplate<typename T, typename F>\nstruct Conditional<false, T, F> {\n    using type = F;\n};\n\ntemplate<bool Condition, typename T, typename F>\nusing conditional_t = typename Conditional<Condition, T, F>::type;\n\ntemplate<typename T>\nstruct IsPointer {\n    static constexpr bool value = false;\n};\n\ntemplate<typename T>\nstruct IsPointer<T*> {\n    static constexpr bool value = true;\n};\n\ntemplate<typename T>\nstruct MakeConst {\n    using type = const T;\n};\n\ntemplate<typename T>\nstruct MakeConst<T*> {\n    using type = const T*;\n};\n\nint main() {\n    using Type1 = conditional_t<true, int, double>;\n    using Type2 = conditional_t<false, int, double>;\n    \n    cout << boolalpha;\n    cout << \"IsPointer<int>: \" << IsPointer<int>::value << endl;\n    cout << \"IsPointer<int*>: \" << IsPointer<int*>::value << endl;\n    \n    cout << \"Same types: \" << is_same<Type1, int>::value << endl;\n    cout << \"Same types: \" << is_same<Type2, double>::value << endl;\n    \n    return 0;\n}',
  hint: 'Template metafunctions compute types at compile time.'
},
{
  id: 'cpp_templates_30',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time assert (static_assert).',
  mathSolution: 'static_assert validates template parameters at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nclass SimpleVector {\n    static_assert(!is_const<T>::value, \"Vector element cannot be const\");\n    static_assert(!is_volatile<T>::value, \"Vector element cannot be volatile\");\n    static_assert(is_copy_constructible<T>::value, \"T must be copy constructible\");\n    \n    T* data;\n    size_t size;\npublic:\n    SimpleVector(size_t n) : size(n), data(new T[n]) {}\n    ~SimpleVector() { delete[] data; }\n};\n\ntemplate<typename T, size_t N>\nclass FixedArray {\n    static_assert(N > 0, \"Array size must be positive\");\n    static_assert(N <= 1000, \"Array size too large\");\n    T arr[N];\npublic:\n    size_t size() const { return N; }\n};\n\ntemplate<typename T>\nT safeDivide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \"Division requires arithmetic types\");\n    if (b == 0) throw runtime_error(\"Division by zero\");\n    return a / b;\n}\n\nint main() {\n    SimpleVector<int> v1(10);          // OK\n    // SimpleVector<const int> v2(10);  // Error\n    \n    FixedArray<int, 50> fa1;           // OK\n    // FixedArray<int, 0> fa2;          // Error\n    // FixedArray<int, 2000> fa3;       // Error\n    \n    cout << safeDivide(10, 2) << endl;\n    \n    return 0;\n}',
  hint: 'static_assert provides compile-time validation of conditions.'
},
{
  id: 'cpp_templates_31',
  topicId: 'cpp_templates',
  question: 'Create a variadic template to compute maximum of arguments.',
  mathSolution: 'Variadic templates can compute maximum using fold expressions.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\ntemplate<typename T>\nT maximum(T x) {\n    return x;\n}\n\ntemplate<typename T, typename... Args>\nT maximum(T first, Args... rest) {\n    T maxRest = maximum(rest...);\n    return (first > maxRest) ? first : maxRest;\n}\n\n// Using fold expression (C++17)\ntemplate<typename... Args>\nauto maxFold(Args... args) {\n    return max({args...});\n}\n\n// Min using fold\ntemplate<typename... Args>\nauto minFold(Args... args) {\n    return min({args...});\n}\n\ntemplate<typename... Args>\nvoid printAll(Args... args) {\n    ((cout << args << \" \"), ...);\n    cout << endl;\n}\n\nint main() {\n    cout << maximum(5, 2, 8, 1, 9, 3) << endl;  // 9\n    cout << maximum(5.5, 3.2, 7.1, 2.4) << endl; // 7.1\n    cout << maximum(\"apple\", \"banana\", \"cherry\") << endl;  // cherry\n    \n    cout << maxFold(1, 5, 3, 9, 2) << endl;\n    cout << minFold(1, 5, 3, 9, 2) << endl;\n    \n    printAll(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic templates enable processing of variable argument lists.'
},
{
  "id": "cpp_templates_32",
  "topicId": "cpp_templates",
  "question": "Create a template for compile-time string hashing.",
  "mathSolution": "Constexpr template computes hash at compile time.",
  "codeSolution": "#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nconstexpr unsigned long long hashString(const char* str, unsigned long long hash = 5381) {\n    return (*str == 0) ? hash : hashString(str + 1, (hash * 33) ^ static_cast<unsigned long long>(*str));\n}\n\nconstexpr unsigned long long operator\"\" _hash(const char* str, size_t) {\n    return hashString(str);\n}\n\ntemplate<unsigned long long H>\nstruct HashValue {\n    static constexpr unsigned long long value = H;\n};\n\nvoid processByHash(unsigned long long hash) {\n    cout << \"Runtime hash: \" << hash << endl;\n}\n\ntemplate<unsigned long long Hash>\nvoid processByHash() {\n    cout << \"Compile-time hash: \" << Hash << endl;\n}\n\nint main() {\n    constexpr auto hash1 = hashString(\"Hello\");\n    constexpr auto hash2 = \"World\"_hash;\n    constexpr auto hash3 = \"C++\"_hash;\n    \n    cout << \"Hash of 'Hello': \" << hash1 << endl;\n    cout << \"Hash of 'World': \" << hash2 << endl;\n    cout << \"Hash of 'C++': \" << hash3 << endl;\n    \n    processByHash(hash1);\n    processByHash<hash1>();\n    processByHash<hash3>();\n    \n    return 0;\n}",
  "hint": "constexpr template functions enable compile-time computation."
},
{
  id: 'cpp_templates_33',
  topicId: 'cpp_templates',
  question: 'Create a template for type erasure using std::function.',
  mathSolution: 'Type erasure hides concrete types behind uniform interface.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <memory>\nusing namespace std;\n\ntemplate<typename T>\nclass Printable {\nprivate:\n    struct Concept {\n        virtual void print() = 0;\n        virtual ~Concept() {}\n    };\n    \n    template<typename U>\n    struct Model : Concept {\n        U data;\n        Model(const U& u) : data(u) {}\n        void print() override { cout << data; }\n    };\n    \n    unique_ptr<Concept> pimpl;\n    \npublic:\n    template<typename U>\n    Printable(const U& value) : pimpl(make_unique<Model<U>>(value)) {}\n    \n    void print() const { pimpl->print(); }\n};\n\nint main() {\n    Printable<int> p1(42);\n    Printable<double> p2(3.14);\n    Printable<string> p3(\"Hello\");\n    \n    p1.print(); cout << endl;\n    p2.print(); cout << endl;\n    p3.print(); cout << endl;\n    \n    // Type erasure with std::function\n    vector<function<void()>> callbacks;\n    callbacks.push_back([]() { cout << \"Lambda 1\" << endl; });\n    callbacks.push_back([]() { cout << \"Lambda 2\" << endl; });\n    callbacks.push_back([]() { cout << \"Lambda 3\" << endl; });\n    \n    for (const auto& cb : callbacks) cb();\n    \n    return 0;\n}',
  hint: 'Type erasure provides uniform interface for different types.'
},
{
  id: 'cpp_templates_34',
  topicId: 'cpp_templates',
  question: 'Create a policy-based template design.',
  mathSolution: 'Policy templates enable compile-time algorithm selection.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// Sorting policies\ntemplate<typename T>\nstruct Ascending {\n    bool operator()(const T& a, const T& b) const { return a < b; }\n};\n\ntemplate<typename T>\nstruct Descending {\n    bool operator()(const T& a, const T& b) const { return a > b; }\n};\n\n// Threading policies\nstruct SingleThreaded {\n    static void lock() {}\n    static void unlock() {}\n};\n\nstruct MultiThreaded {\n    static void lock() { cout << \"Locking mutex\" << endl; }\n    static void unlock() { cout << \"Unlocking mutex\" << endl; }\n};\n\n// Container with policies\ntemplate<typename T, typename Compare = Ascending<T>, typename Threading = SingleThreaded>\nclass SortedContainer {\nprivate:\n    vector<T> data;\n    Compare comp;\n    \npublic:\n    void insert(const T& value) {\n        Threading::lock();\n        data.push_back(value);\n        sort(data.begin(), data.end(), comp);\n        Threading::unlock();\n    }\n    \n    void display() const {\n        for (const auto& v : data) cout << v << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    SortedContainer<int, Ascending<int>> asc;\n    asc.insert(5);\n    asc.insert(2);\n    asc.insert(8);\n    asc.insert(1);\n    cout << \"Ascending: \";\n    asc.display();\n    \n    SortedContainer<int, Descending<int>> desc;\n    desc.insert(5);\n    desc.insert(2);\n    desc.insert(8);\n    desc.insert(1);\n    cout << \"Descending: \";\n    desc.display();\n    \n    SortedContainer<int, Ascending<int>, MultiThreaded> threadSafe;\n    threadSafe.insert(10);\n    threadSafe.insert(5);\n    cout << \"Thread-safe: \";\n    threadSafe.display();\n    \n    return 0;\n}',
  hint: 'Policy-based design allows compile-time selection of behaviors.'
},
{
  id: 'cpp_templates_35',
  topicId: 'cpp_templates',
  question: 'Create a template with tag dispatching.',
  mathSolution: 'Tag dispatching selects overloads based on type traits.',
  codeSolution: '#include <iostream>\n#include <iterator>\n#include <vector>\n#include <list>\nusing namespace std;\n\n// Tags\nstruct random_access_tag {};\nstruct bidirectional_tag {};\nstruct forward_tag {};\n\n// Tag for iterator category\ntemplate<typename Iterator>\nstruct iterator_category {\n    using type = forward_tag;\n};\n\ntemplate<typename T>\nstruct iterator_category<T*> {\n    using type = random_access_tag;\n};\n\n// Algorithm implementations\nvoid advance(random_access_tag, int& pos, int n) {\n    pos += n;\n    cout << \"Random access advance\" << endl;\n}\n\nvoid advance(bidirectional_tag, int& pos, int n) {\n    if (n > 0) pos += n;\n    else pos -= n;\n    cout << \"Bidirectional advance\" << endl;\n}\n\nvoid advance(forward_tag, int& pos, int n) {\n    for (int i = 0; i < n; i++) pos++;\n    cout << \"Forward advance\" << endl;\n}\n\ntemplate<typename Iterator>\nvoid myAdvance(Iterator it, int n) {\n    using Category = typename iterator_category<Iterator>::type;\n    advance(Category{}, n, n);\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int* ptr = arr;\n    myAdvance(ptr, 3);\n    cout << *ptr << endl;\n    \n    return 0;\n}',
  hint: 'Tag dispatching enables compile-time algorithm selection based on type properties.'
},
{
  id: 'cpp_templates_36',
  topicId: 'cpp_templates',
  question: 'Create a template for tuple-like type with index-based access.',
  mathSolution: 'Index-based access using integer sequences.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\ntemplate<typename... Types>\nclass MyTuple {\nprivate:\n    tuple<Types...> data;\n    \n    template<size_t I>\n    auto& getImpl() {\n        return get<I>(data);\n    }\n    \n    template<size_t... Is>\n    void printImpl(index_sequence<Is...>) {\n        ((cout << get<Is>(data) << \" \"), ...);\n        cout << endl;\n    }\n    \npublic:\n    MyTuple(Types... args) : data(args...) {}\n    \n    template<size_t I>\n    auto& get() {\n        return getImpl<I>();\n    }\n    \n    void print() {\n        printImpl(index_sequence_for<Types...>{});\n    }\n    \n    size_t size() const { return sizeof...(Types); }\n};\n\nint main() {\n    MyTuple<int, double, string> t(42, 3.14, \"Hello\");\n    \n    cout << get<0>(t) << endl;\n    cout << get<1>(t) << endl;\n    cout << get<2>(t) << endl;\n    \n    t.print();\n    cout << \"Tuple size: \" << t.size() << endl;\n    \n    get<0>(t) = 100;\n    t.print();\n    \n    return 0;\n}',
  hint: 'Tuple-like types use integer sequences for index-based access.'
},
{
  id: 'cpp_templates_37',
  topicId: 'cpp_templates',
  question: 'Create a template for type-safe printf using variadic templates.',
  mathSolution: 'Variadic templates enable type-safe printf implementation.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid safePrintf(const char* format) {\n    cout << format;\n}\n\ntemplate<typename T, typename... Args>\nvoid safePrintf(const char* format, T value, Args... args) {\n    while (*format) {\n        if (*format == '%' && *(format + 1) == '%') {\n            cout << '%';\n            format += 2;\n        } else if (*format == '%') {\n            cout << value;\n            safePrintf(format + 2, args...);\n            return;\n        } else {\n            cout << *format++;\n        }\n    }\n}\n\ntemplate<typename... Args>\nvoid print(Args... args) {\n    ((cout << args << \" \"), ...);\n    cout << endl;\n}\n\nint main() {\n    safePrintf(\"Integer: %\\n\", 42);\n    safePrintf(\"Double: %\\n\", 3.14);\n    safePrintf(\"String: %\\n\", string(\"Hello\"));\n    safePrintf(\"Multiple: %, %, %\\n\", 1, 2.5, \"Three\");\n    \n    print(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic templates enable type-safe implementations of printf-like functions.'
},
{
  id: 'cpp_templates_38',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time matrix operations.',
  mathSolution: 'Template metaprogramming computes matrix operations at compile time.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\ntemplate<typename T, size_t Rows, size_t Cols>\nclass Matrix {\nprivate:\n    array<array<T, Cols>, Rows> data;\n    \npublic:\n    Matrix() {\n        for (size_t i = 0; i < Rows; i++)\n            for (size_t j = 0; j < Cols; j++)\n                data[i][j] = T();\n    }\n    \n    T& operator()(size_t i, size_t j) { return data[i][j]; }\n    const T& operator()(size_t i, size_t j) const { return data[i][j]; }\n    \n    template<size_t OtherCols>\n    Matrix<T, Rows, OtherCols> operator*(const Matrix<T, Cols, OtherCols>& other) const {\n        Matrix<T, Rows, OtherCols> result;\n        for (size_t i = 0; i < Rows; i++) {\n            for (size_t j = 0; j < OtherCols; j++) {\n                T sum = T();\n                for (size_t k = 0; k < Cols; k++) {\n                    sum += data[i][k] * other(k, j);\n                }\n                result(i, j) = sum;\n            }\n        }\n        return result;\n    }\n    \n    void display() const {\n        for (size_t i = 0; i < Rows; i++) {\n            for (size_t j = 0; j < Cols; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    Matrix<int, 2, 3> A;\n    A(0,0) = 1; A(0,1) = 2; A(0,2) = 3;\n    A(1,0) = 4; A(1,1) = 5; A(1,2) = 6;\n    \n    Matrix<int, 3, 2> B;\n    B(0,0) = 7; B(0,1) = 8;\n    B(1,0) = 9; B(1,1) = 10;\n    B(2,0) = 11; B(2,1) = 12;\n    \n    auto C = A * B;\n    \n    cout << \"Matrix A (2x3):\\n\";\n    A.display();\n    \n    cout << \"\\nMatrix B (3x2):\\n\";\n    B.display();\n    \n    cout << \"\\nMatrix C = A * B (2x2):\\n\";\n    C.display();\n    \n    return 0;\n}',
  hint: 'Template matrix operations enable compile-time dimension checking.'
},
{
  id: 'cpp_templates_39',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time finite state machine.',
  mathSolution: 'Templates can encode state machines at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct RedState;\nstruct GreenState;\nstruct YellowState;\n\ntemplate<typename State>\nclass TrafficLight {\npublic:\n    void transition();\n};\n\nstruct RedState {\n    static void print() { cout << \"Red light\" << endl; }\n    using NextState = GreenState;\n};\n\nstruct GreenState {\n    static void print() { cout << \"Green light\" << endl; }\n    using NextState = YellowState;\n};\n\nstruct YellowState {\n    static void print() { cout << \"Yellow light\" << endl; }\n    using NextState = RedState;\n};\n\ntemplate<>\nclass TrafficLight<RedState> {\npublic:\n    void transition() {\n        RedState::print();\n        TrafficLight<GreenState> next;\n        next.transition();\n    }\n};\n\ntemplate<>\nclass TrafficLight<GreenState> {\npublic:\n    void transition() {\n        GreenState::print();\n        TrafficLight<YellowState> next;\n        next.transition();\n    }\n};\n\ntemplate<>\nclass TrafficLight<YellowState> {\npublic:\n    void transition() {\n        YellowState::print();\n        TrafficLight<RedState> next;\n        next.transition();\n    }\n};\n\ntemplate<int N>\nstruct Countdown {\n    static constexpr int value = N;\n    static void print() {\n        cout << value << \"... \";\n        Countdown<N-1>::print();\n    }\n};\n\ntemplate<>\nstruct Countdown<0> {\n    static void print() { cout << \"Go!\" << endl; }\n};\n\nint main() {\n    TrafficLight<RedState> light;\n    light.transition();\n    \n    Countdown<5>::print();\n    \n    return 0;\n}',
  hint: 'Template state machines provide compile-time state verification.'
},
{
  id: 'cpp_templates_40',
  topicId: 'cpp_templates',
  question: 'Use template specialization for optimizing boolean operations.',
  mathSolution: 'Template specialization can optimize for specific types.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\n// Generic implementation\ntemplate<typename T>\nvoid bitwiseAnd(T a, T b) {\n    cout << a & b << endl;\n}\n\n// Specialization for int\ntemplate<>\nvoid bitwiseAnd<int>(int a, int b) {\n    cout << \"Int AND: \" << (a & b) << endl;\n}\n\n// Specialization for bitset\ntemplate<size_t N>\nvoid bitwiseAnd(bitset<N> a, bitset<N> b) {\n    cout << \"Bitset AND: \" << (a & b) << endl;\n}\n\ntemplate<typename T>\nclass OptimizedVector {\n    T* data;\n    size_t size;\npublic:\n    OptimizedVector(size_t n) : size(n), data(new T[n]) {}\n    ~OptimizedVector() { delete[] data; }\n    \n    void fill(const T& value) {\n        for (size_t i = 0; i < size; i++) data[i] = value;\n    }\n};\n\n// Specialization for bool (optimized)\ntemplate<>\nclass OptimizedVector<bool> {\n    char* data;\n    size_t size;\npublic:\n    OptimizedVector(size_t n) : size(n), data(new char[(n + 7) / 8]) {}\n    ~OptimizedVector() { delete[] data; }\n    \n    void fill(bool value) {\n        unsigned char byte = value ? 0xFF : 0x00;\n        for (size_t i = 0; i < (size + 7) / 8; i++) data[i] = byte;\n    }\n};\n\nint main() {\n    bitwiseAnd(5, 3);\n    bitwiseAnd(bitset<4>(0b1010), bitset<4>(0b1100));\n    \n    OptimizedVector<int> v1(100);\n    OptimizedVector<bool> v2(100);\n    v1.fill(42);\n    v2.fill(true);\n    \n    cout << \"Specialized vector created successfully\" << endl;\n    \n    return 0;\n}',
  hint: 'Template specializations optimize for specific types.'
},
{
  id: 'cpp_templates_41',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time sort (bubble sort).',
  mathSolution: 'Constexpr templates can sort arrays at compile time.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\n// Bubble sort at compile time\ntemplate<typename T, size_t N>\nconstexpr void swap(T (&arr)[N], size_t i, size_t j) {\n    T temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}\n\ntemplate<typename T, size_t N>\nconstexpr void bubbleSort(T (&arr)[N]) {\n    for (size_t i = 0; i < N - 1; i++) {\n        for (size_t j = 0; j < N - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr, j, j + 1);\n            }\n        }\n    }\n}\n\ntemplate<typename T, size_t N>\nconstexpr array<T, N> sortArray(const T (&arr)[N]) {\n    array<T, N> result;\n    for (size_t i = 0; i < N; i++) result[i] = arr[i];\n    \n    for (size_t i = 0; i < N - 1; i++) {\n        for (size_t j = 0; j < N - i - 1; j++) {\n            if (result[j] > result[j + 1]) {\n                T temp = result[j];\n                result[j] = result[j + 1];\n                result[j + 1] = temp;\n            }\n        }\n    }\n    return result;\n}\n\nint main() {\n    constexpr int arr[] = {5, 2, 8, 1, 9, 3};\n    constexpr auto sorted = sortArray(arr);\n    \n    cout << \"Original: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    cout << \"Sorted: \";\n    for (int x : sorted) cout << x << \" \";\n    cout << endl;\n    \n    // Compile-time array\n    constexpr int arr2[] = {3, 1, 4, 1, 5, 9};\n    constexpr auto sorted2 = sortArray(arr2);\n    \n    return 0;\n}',
  hint: 'Constexpr templates enable compile-time algorithms.'
},
{
  id: 'cpp_templates_42',
  topicId: 'cpp_templates',
  question: 'Create a template for type-safe unit conversions.',
  mathSolution: 'Template units provide compile-time dimensional analysis.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<int Mass, int Length, int Time>\nstruct Dimension {\n    static constexpr int mass = Mass;\n    static constexpr int length = Length;\n    static constexpr int time = Time;\n};\n\nusing NoDimension = Dimension<0, 0, 0>;\nusing Mass = Dimension<1, 0, 0>;\nusing Length = Dimension<0, 1, 0>;\nusing Time = Dimension<0, 0, 1>;\nusing Velocity = Dimension<0, 1, -1>;\nusing Acceleration = Dimension<0, 1, -2>;\nusing Force = Dimension<1, 1, -2>;\n\ntemplate<typename D, typename T = double>\nclass Quantity {\nprivate:\n    T value;\npublic:\n    Quantity(T v) : value(v) {}\n    T getValue() const { return value; }\n    \n    template<typename D2>\n    Quantity<D, T> operator+(const Quantity<D2, T>& other) const {\n        static_assert(is_same<D, D2>::value, \"Dimension mismatch in addition\");\n        return Quantity<D, T>(value + other.getValue());\n    }\n    \n    template<typename D2>\n    Quantity<D, T> operator-(const Quantity<D2, T>& other) const {\n        static_assert(is_same<D, D2>::value, \"Dimension mismatch in subtraction\");\n        return Quantity<D, T>(value - other.getValue());\n    }\n    \n    template<typename D2>\n    auto operator*(const Quantity<D2, T>& other) const {\n        using NewDim = Dimension<D::mass + D2::mass, D::length + D2::length, D::time + D2::time>;\n        return Quantity<NewDim, T>(value * other.getValue());\n    }\n    \n    template<typename D2>\n    auto operator/(const Quantity<D2, T>& other) const {\n        using NewDim = Dimension<D::mass - D2::mass, D::length - D2::length, D::time - D2::time>;\n        return Quantity<NewDim, T>(value / other.getValue());\n    }\n};\n\nint main() {\n    Quantity<Length> distance(10.0);\n    Quantity<Time> time(2.0);\n    Quantity<Mass> mass(5.0);\n    \n    auto velocity = distance / time;\n    auto acceleration = velocity / time;\n    auto force = mass * acceleration;\n    \n    cout << \"Distance: \" << distance.getValue() << \" m\" << endl;\n    cout << \"Time: \" << time.getValue() << \" s\" << endl;\n    cout << \"Velocity: \" << velocity.getValue() << \" m/s\" << endl;\n    cout << \"Acceleration: \" << acceleration.getValue() << \" m/s^2\" << endl;\n    cout << \"Force: \" << force.getValue() << \" N\" << endl;\n    \n    // auto invalid = distance + time;  // Compile error: dimension mismatch\n    \n    return 0;\n}',
  hint: 'Template dimension analysis provides compile-time unit safety.'
},
{
  "id": "cpp_templates_43",
  "topicId": "cpp_templates",
  "question": "Create a template for compile-time regular expressions.",
  "mathSolution": "Constexpr templates can parse patterns at compile time.",
  "codeSolution": "#include <iostream>\n#include <array>\nusing namespace std;\n\n// Compile-time string\ntemplate<size_t N>\nstruct CompileString {\n    char data[N];\n    constexpr CompileString(const char (&str)[N]) {\n        for (size_t i = 0; i < N; i++) data[i] = str[i];\n    }\n    constexpr size_t size() const { return N - 1; }  // Exclude null terminator\n    constexpr const char* c_str() const { return data; }\n};\n\n// Compile-time contains\ntemplate<size_t N1, size_t N2>\nconstexpr bool contains(const CompileString<N1>& str, const CompileString<N2>& pattern) {\n    if (pattern.size() > str.size()) return false;\n    for (size_t i = 0; i <= str.size() - pattern.size(); i++) {\n        bool found = true;\n        for (size_t j = 0; j < pattern.size(); j++) {\n            if (str.data[i + j] != pattern.data[j]) {\n                found = false;\n                break;\n            }\n        }\n        if (found) return true;\n    }\n    return false;\n}\n\n// Compile-time starts_with\ntemplate<size_t N1, size_t N2>\nconstexpr bool startsWith(const CompileString<N1>& str, const CompileString<N2>& prefix) {\n    if (prefix.size() > str.size()) return false;\n    for (size_t i = 0; i < prefix.size(); i++) {\n        if (str.data[i] != prefix.data[i]) return false;\n    }\n    return true;\n}\n\n// Compile-time ends_with\ntemplate<size_t N1, size_t N2>\nconstexpr bool endsWith(const CompileString<N1>& str, const CompileString<N2>& suffix) {\n    if (suffix.size() > str.size()) return false;\n    size_t start = str.size() - suffix.size();\n    for (size_t i = 0; i < suffix.size(); i++) {\n        if (str.data[start + i] != suffix.data[i]) return false;\n    }\n    return true;\n}\n\n// Compile-time string literal helper\ntemplate<size_t N>\nconstexpr auto makeCompileString(const char (&str)[N]) {\n    return CompileString<N>(str);\n}\n\nint main() {\n    constexpr auto hello = makeCompileString(\"Hello World\");\n    constexpr auto world = makeCompileString(\"World\");\n    constexpr auto hello2 = makeCompileString(\"Hello\");\n    constexpr auto exe = makeCompileString(\".exe\");\n    \n    constexpr bool hasWorld = contains(hello, world);\n    constexpr bool startsHello = startsWith(hello, hello2);\n    constexpr bool endsExe = endsWith(hello, exe);\n    \n    cout << boolalpha;\n    cout << \"Contains 'World': \" << hasWorld << endl;\n    cout << \"Starts with 'Hello': \" << startsHello << endl;\n    cout << \"Ends with '.exe': \" << endsExe << endl;\n    \n    return 0;\n}",
  "hint": "Compile-time strings enable pattern matching at compile time."
},
{
  id: 'cpp_templates_44',
  topicId: 'cpp_templates',
  question: 'Create a template for type-safe printf with format string checking.',
  mathSolution: 'Template metaprogramming can validate format strings at compile time.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename... Args>\nvoid printf(const char* format, Args... args) {\n    // Simplified implementation\n    cout << format, ...;\n}\n\n// Compile-time format checker\ntemplate<char... Chars>\nstruct FormatChecker {\n    static constexpr bool valid = true;\n};\n\ntemplate<char First, char... Rest>\nstruct FormatChecker<First, Rest...> {\n    static constexpr bool valid = (First != '%') || (sizeof...(Rest) > 0 && Rest...);\n};\n\ntemplate<typename... Args>\nvoid safePrint(const char* format, Args... args) {\n    // Runtime check in this simplified version\n    cout << format;\n    ((cout << \" \" << args), ...);\n    cout << endl;\n}\n\nint main() {\n    safePrint(\"Integer: %\", 42);\n    safePrint(\"Double: %\", 3.14);\n    safePrint(\"String: %\", string(\"Hello\"));\n    safePrint(\"Multiple: %, %, %\", 1, 2.5, \"Three\");\n    \n    safePrint(\"Mixed types: \", 1, 2.5, \"string\", \'c\');\n    \n    return 0;\n}',
  hint: 'Template metaprogramming can validate format strings compile-time.'
},
{
  id: 'cpp_templates_45',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time vector math.',
  mathSolution: 'Constexpr templates enable compile-time vector computations.',
  codeSolution: '#include <iostream>\n#include <array>\n#include <cmath>\nusing namespace std;\n\ntemplate<typename T, size_t N>\nclass Vector {\nprivate:\n    array<T, N> data;\n    \npublic:\n    constexpr Vector() : data{} {}\n    constexpr Vector(initializer_list<T> list) {\n        size_t i = 0;\n        for (const T& val : list) {\n            if (i < N) data[i++] = val;\n        }\n    }\n    \n    constexpr T& operator[](size_t i) { return data[i]; }\n    constexpr const T& operator[](size_t i) const { return data[i]; }\n    \n    constexpr Vector operator+(const Vector& other) const {\n        Vector result;\n        for (size_t i = 0; i < N; i++) {\n            result[i] = data[i] + other[i];\n        }\n        return result;\n    }\n    \n    constexpr Vector operator-(const Vector& other) const {\n        Vector result;\n        for (size_t i = 0; i < N; i++) {\n            result[i] = data[i] - other[i];\n        }\n        return result;\n    }\n    \n    constexpr T dot(const Vector& other) const {\n        T result = 0;\n        for (size_t i = 0; i < N; i++) {\n            result += data[i] * other[i];\n        }\n        return result;\n    }\n    \n    constexpr T magnitudeSquared() const {\n        return dot(*this);\n    }\n    \n    double magnitude() const {\n        return sqrt(magnitudeSquared());\n    }\n};\n\nint main() {\n    constexpr Vector<int, 3> v1{1, 2, 3};\n    constexpr Vector<int, 3> v2{4, 5, 6};\n    \n    constexpr auto v3 = v1 + v2;\n    constexpr auto dot = v1.dot(v2);\n    \n    cout << \"v1 + v2 = (\";\n    for (int i = 0; i < 3; i++) {\n        cout << v3[i];\n        if (i < 2) cout << \", \";\n    }\n    cout << \")\" << endl;\n    \n    cout << \"v1 · v2 = \" << dot << endl;\n    \n    return 0;\n}',
  hint: 'Constexpr template vectors enable compile-time linear algebra.'
},
{
  id: 'cpp_templates_46',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time rational numbers.',
  mathSolution: 'Templates can represent rational numbers at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<int Num, int Den = 1>\nstruct Rational {\n    static constexpr int num = Num;\n    static constexpr int den = Den;\n    \n    static constexpr double value = static_cast<double>(Num) / Den;\n    \n    template<int OtherNum, int OtherDen>\n    struct Add {\n        using type = Rational<Num * OtherDen + OtherNum * Den, Den * OtherDen>;\n    };\n    \n    template<int OtherNum, int OtherDen>\n    struct Multiply {\n        using type = Rational<Num * OtherNum, Den * OtherDen>;\n    };\n};\n\ntemplate<int N, int D>\nconstexpr Rational<N, D> makeRational() {\n    return Rational<N, D>();\n}\n\ntemplate<typename R1, typename R2>\nstruct AddRationals {\n    using type = Rational<R1::num * R2::den + R2::num * R1::den, R1::den * R2::den>;\n};\n\ntemplate<typename R1, typename R2>\nstruct MultiplyRationals {\n    using type = Rational<R1::num * R2::num, R1::den * R2::den>;\n};\n\nint main() {\n    using R1 = Rational<1, 2>;\n    using R2 = Rational<1, 3>;\n    \n    using Sum = AddRationals<R1, R2>::type;\n    using Product = MultiplyRationals<R1, R2>::type;\n    \n    cout << \"1/2 = \" << R1::value << endl;\n    cout << \"1/3 = \" << R2::value << endl;\n    cout << \"Sum = \" << Sum::value << \" (\" << Sum::num << \"/\" << Sum::den << \")\" << endl;\n    cout << \"Product = \" << Product::value << \" (\" << Product::num << \"/\" << Product::den << \")\" << endl;\n    \n    return 0;\n}',
  hint: 'Template metaprogramming can represent rational numbers at compile time.'
},
{
  "id": "cpp_templates_47",
  "topicId": "cpp_templates",
  "question": "Create a template for type-safe event system.",
  "mathSolution": "Template event system provides type-safe event handling.",
  "codeSolution": "#include <iostream>\n#include <functional>\n#include <unordered_map>\n#include <typeindex>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Event {\npublic:\n    virtual ~Event() {}\n};\n\ntemplate<typename T>\nclass EventHandler {\npublic:\n    virtual void handle(const T& event) = 0;\n    virtual ~EventHandler() {}\n};\n\ntemplate<typename T>\nclass EventDispatcher {\nprivate:\n    vector<unique_ptr<EventHandler<T>>> handlers;\n    \npublic:\n    template<typename H>\n    void addHandler(H&& handler) {\n        handlers.push_back(make_unique<H>(std::forward<H>(handler)));\n    }\n    \n    void dispatch(const T& event) {\n        for (const auto& h : handlers) {\n            h->handle(event);\n        }\n    }\n};\n\nstruct MouseClickEvent : Event {\n    int x, y;\n    MouseClickEvent(int a, int b) : x(a), y(b) {}\n};\n\nstruct KeyPressEvent : Event {\n    char key;\n    KeyPressEvent(char k) : key(k) {}\n};\n\nclass MouseHandler : public EventHandler<MouseClickEvent> {\npublic:\n    void handle(const MouseClickEvent& e) override {\n        cout << \"Mouse clicked at (\" << e.x << \", \" << e.y << \")\" << endl;\n    }\n};\n\nclass KeyHandler : public EventHandler<KeyPressEvent> {\npublic:\n    void handle(const KeyPressEvent& e) override {\n        cout << \"Key pressed: \" << e.key << endl;\n    }\n};\n\nint main() {\n    EventDispatcher<MouseClickEvent> mouseDispatcher;\n    EventDispatcher<KeyPressEvent> keyDispatcher;\n    \n    mouseDispatcher.addHandler(MouseHandler());\n    keyDispatcher.addHandler(KeyHandler());\n    \n    mouseDispatcher.dispatch(MouseClickEvent(100, 200));\n    keyDispatcher.dispatch(KeyPressEvent('A'));\n    \n    return 0;\n}",
  "hint": "Template event system provides type-safe event handling and dispatching."
},
{
  id: 'cpp_templates_48',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time FizzBuzz.',
  mathSolution: 'Templates compute FizzBuzz at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<int N>\nstruct FizzBuzz {\n    static void print() {\n        FizzBuzz<N-1>::print();\n        if (N % 15 == 0) {\n            cout << \"FizzBuzz \";\n        } else if (N % 3 == 0) {\n            cout << \"Fizz \";\n        } else if (N % 5 == 0) {\n            cout << \"Buzz \";\n        } else {\n            cout << N << \" \";\n        }\n    }\n};\n\ntemplate<>\nstruct FizzBuzz<0> {\n    static void print() {}\n};\n\ntemplate<int N>\nconstexpr auto fizzBuzzString() {\n    if constexpr (N == 0) {\n        return \"\";\n    } else if constexpr (N % 15 == 0) {\n        return fizzBuzzString<N-1>() + \"FizzBuzz \";\n    } else if constexpr (N % 3 == 0) {\n        return fizzBuzzString<N-1>() + \"Fizz \";\n    } else if constexpr (N % 5 == 0) {\n        return fizzBuzzString<N-1>() + \"Buzz \";\n    } else {\n        return fizzBuzzString<N-1>() + to_string(N) + \" \";\n    }\n}\n\ntemplate<int N>\nstruct FizzBuzzArray {\n    static constexpr auto value = fizzBuzzString<N>();\n};\n\nint main() {\n    cout << \"FizzBuzz up to 15:\" << endl;\n    FizzBuzz<15>::print();\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Compile-time FizzBuzz demonstrates template metaprogramming capabilities.'
},
{
  id: 'cpp_templates_49',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time base conversion.',
  mathSolution: 'Templates can convert numbers to different bases at compile time.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\n// Compile-time power\ntemplate<int Base, int Exp>\nstruct Power {\n    static constexpr int value = Base * Power<Base, Exp - 1>::value;\n};\n\ntemplate<int Base>\nstruct Power<Base, 0> {\n    static constexpr int value = 1;\n};\n\n// Compile-time number to string\ntemplate<int N, int Base = 10>\nstruct ToString {\n    static constexpr string value = ToString<N / Base, Base>::value + to_string(N % Base);\n};\n\ntemplate<int Base>\nstruct ToString<0, Base> {\n    static constexpr string value = \"0\";\n};\n\n// Compile-time binary to decimal\ntemplate<const char* Binary>\nstruct BinaryToDecimal {\n    static constexpr int value = /* compile-time binary conversion */ 0;\n};\n\n// Simplified compile-time binary literal\ntemplate<char... Bits>\nstruct Binary {\n    static constexpr int value = 0;\n};\n\nint main() {\n    constexpr int dec = 42;\n    constexpr int hex = 0x2A;\n    constexpr int oct = 052;\n    \n    cout << \"Decimal: \" << dec << endl;\n    cout << \"Hexadecimal: \" << hex << endl;\n    cout << \"Octal: \" << oct << endl;\n    \n    return 0;\n}',
  hint: 'Template metaprogramming handles compile-time numeric conversions.'
},
{
  id: 'cpp_templates_50',
  topicId: 'cpp_templates',
  question: 'Create comprehensive template demonstration program.',
  mathSolution: 'Combine multiple template concepts in one example.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <array>\n#include <string>\n#include <type_traits>\nusing namespace std;\n\n// 1. Function template\ntemplate<typename T>\nT max(T a, T b) { return (a > b) ? a : b; }\n\n// 2. Class template\ntemplate<typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(const T& c) : content(c) {}\n    void display() { cout << "Box contains: " << content << endl; }\n    T get() const { return content; }\n};\n\n// 3. Template specialization\ntemplate<>\nclass Box<bool> {\nprivate:\n    bool content;\npublic:\n    Box(bool c) : content(c) {}\n    void display() { cout << "Box contains: " << (content ? "true" : "false") << endl; }\n    bool get() const { return content; }\n};\n\n// 4. Variadic template\ntemplate<typename... Args>\nvoid print(Args... args) {\n    ((cout << args << " "), ...);\n    cout << endl;\n}\n\n// 5. Non-type template parameter\ntemplate<typename T, size_t N>\nclass FixedArray {\nprivate:\n    T arr[N];\npublic:\n    void fill(const T& value) {\n        for (size_t i = 0; i < N; i++) arr[i] = value;\n    }\n    size_t size() const { return N; }\n};\n\n// 6. Template alias\ntemplate<typename T>\nusing Vec = vector<T>;\n\n// 7. CRTP for static polymorphism\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() {\n        static_cast<Derived*>(this)->implementation();\n    }\n};\n\nclass Derived : public Base<Derived> {\npublic:\n    void implementation() { cout << "Derived implementation" << endl; }\n};\n\n// 8. Type traits\ntemplate<typename T>\nvoid checkType() {\n    if constexpr (is_integral<T>::value) {\n        cout << "Integral type" << endl;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << "Floating point type" << endl;\n    } else {\n        cout << "Other type" << endl;\n    }\n}\n\n// 9. Fold expression\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (args + ...);\n}\n\n// 10. Perfect forwarding\ntemplate<typename Func, typename... Args>\nauto call(Func&& f, Args&&... args) {\n    return f(forward<Args>(args)...);\n}\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    cout << "=== Template Demonstration ===\\n\\n";\n    \n    // 1. Function template\n    cout << "1. Function template: " << max(5, 3) << endl;\n    \n    // 2. Class template\n    Box<int> intBox(42);\n    Box<double> doubleBox(3.14);\n    Box<string> stringBox("Hello");\n    intBox.display();\n    doubleBox.display();\n    stringBox.display();\n    \n    // 3. Template specialization\n    Box<bool> boolBox(true);\n    boolBox.display();\n    \n    // 4. Variadic template\n    cout << "4. Variadic template: ";\n    print(1, 2.5, "Hello", \'A\');\n    \n    // 5. Non-type parameter\n    FixedArray<int, 5> fa;\n    fa.fill(42);\n    cout << "5. Fixed array size: " << fa.size() << endl;\n    \n    // 6. Template alias\n    Vec<int> v = {1, 2, 3};\n    cout << "6. Vector alias size: " << v.size() << endl;\n    \n    // 7. CRTP\n    cout << "7. CRTP: ";\n    Derived d;\n    d.interface();\n    \n    // 8. Type traits\n    cout << "8. Type traits: ";\n    checkType<int>();\n    checkType<double>();\n    \n    // 9. Fold expression\n    cout << "9. Fold expression sum: " << sum(1, 2, 3, 4, 5) << endl;\n    \n    // 10. Perfect forwarding\n    cout << "10. Perfect forwarding: " << call(add, 10, 20) << endl;\n    \n    cout << "\\n=== Template Concepts Demonstrated ===\\n\";\n    cout << \"1. Function templates\\n\";\n    cout << \"2. Class templates\\n\";\n    cout << \"3. Template specialization\\n\";\n    cout << \"4. Variadic templates\\n\";\n    cout << \"5. Non-type template parameters\\n\";\n    cout << \"6. Template aliases\\n\";\n    cout << \"7. CRTP (static polymorphism)\\n\";\n    cout << \"8. Type traits\\n\";\n    cout << \"9. Fold expressions\\n\";\n    cout << \"10. Perfect forwarding\\n\";\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of multiple template concepts in C++.'
}
);
