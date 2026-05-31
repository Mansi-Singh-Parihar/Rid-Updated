QuizData.questions.push(
{
  id: 'cpp_abstraction_1',
  topicId: 'cpp_abstraction',
  question: 'Use abstract base class with pure virtual functions to define interface.',
  mathSolution: 'Abstract classes define interface, derived classes implement details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n    double perimeter() override { return 2 * 3.14159 * radius; }\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nint main() {\n    Shape* s = new Circle(5);\n    cout << "Area: " << s->area() << endl;\n    s->draw();\n    delete s;\n    return 0;\n}',
  hint: 'Abstraction hides implementation details, exposes only essential features.'
},
{
  id: 'cpp_abstraction_2',
  topicId: 'cpp_abstraction',
  question: 'Create interface using pure virtual functions only (no data members).',
  mathSolution: 'Interface class defines only virtual functions, no implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual void resize(double factor) = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    void draw() override { cout << "Circle radius: " << radius << endl; }\n    void resize(double factor) override { radius *= factor; }\n};\n\nint main() {\n    Drawable* d = new Circle(5);\n    d->draw();\n    d->resize(2);\n    d->draw();\n    delete d;\n    return 0;\n}',
  hint: 'Interfaces provide pure abstraction with no implementation.'
},
{
  id: 'cpp_abstraction_3',
  topicId: 'cpp_abstraction',
  question: 'Use private members to hide implementation details.',
  mathSolution: 'Private members encapsulate data, accessible only through public methods.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    string accountNumber;\n    double balance;\n    string pin;\n    \n    bool validatePin(const string& inputPin) {\n        return pin == inputPin;\n    }\n    \npublic:\n    BankAccount(string acc, double initial, string p) \n        : accountNumber(acc), balance(initial), pin(p) {}\n    \n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    \n    bool withdraw(double amount, string inputPin) {\n        if (validatePin(inputPin) && amount <= balance) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    double getBalance(string inputPin) {\n        return validatePin(inputPin) ? balance : -1;\n    }\n};\n\nint main() {\n    BankAccount acc("12345", 1000, "1234");\n    acc.deposit(500);\n    if (acc.withdraw(200, "1234")) {\n        cout << "Withdrawal successful\\n";\n    }\n    cout << "Balance: " << acc.getBalance("1234") << endl;\n    return 0;\n}',
  hint: 'Private members hide implementation, public methods provide controlled access.'
},
{
  id: 'cpp_abstraction_4',
  topicId: 'cpp_abstraction',
  question: 'Use protected members for inheritance-based abstraction.',
  mathSolution: 'Protected members accessible to derived classes, hidden from outside.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int speed;\n    \n    virtual void startEngine() = 0;\n    \npublic:\n    Vehicle(string b) : brand(b), speed(0) {}\n    \n    void accelerate(int amount) {\n        speed += amount;\n        cout << brand << " accelerating to " << speed << " km/h\\n";\n    }\n    \n    void brake(int amount) {\n        speed = max(0, speed - amount);\n        cout << brand << " slowed to " << speed << " km/h\\n";\n    }\n    \n    virtual void displayInfo() {\n        cout << brand << " at " << speed << " km/h" << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \nprotected:\n    void startEngine() override {\n        cout << brand << " " << model << " engine started\\n";\n    }\n    \npublic:\n    Car(string b, string m) : Vehicle(b), model(m) {}\n    \n    void drive() {\n        startEngine();\n        accelerate(10);\n    }\n};\n\nint main() {\n    Car myCar("Toyota", "Camry");\n    myCar.drive();\n    myCar.displayInfo();\n    return 0;\n}',
  hint: 'Protected abstraction allows controlled inheritance-based extension.'
},
{
  id: 'cpp_abstraction_5',
  topicId: 'cpp_abstraction',
  question: 'Use static member functions for class-level abstraction.',
  mathSolution: 'Static functions provide functionality without object instantiation.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass MathUtils {\nprivate:\n    static double toRadians(double degrees) {\n        return degrees * 3.14159 / 180.0;\n    }\n    \npublic:\n    static double sin(double degrees) {\n        return std::sin(toRadians(degrees));\n    }\n    \n    static double cos(double degrees) {\n        return std::cos(toRadians(degrees));\n    }\n    \n    static double tan(double degrees) {\n        return std::tan(toRadians(degrees));\n    }\n    \n    static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n};\n\nint main() {\n    cout << "sin(30°): " << MathUtils::sin(30) << endl;\n    cout << "cos(60°): " << MathUtils::cos(60) << endl;\n    cout << "5! = " << MathUtils::factorial(5) << endl;\n    return 0;\n}',
  hint: 'Static functions provide abstraction without requiring object state.'
},
{
  id: 'cpp_abstraction_6',
  topicId: 'cpp_abstraction',
  question: 'Use nested classes for implementation abstraction.',
  mathSolution: 'Nested classes hide helper classes within outer class scope.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass LinkedList {\nprivate:\n    class Node {\n    public:\n        int data;\n        Node* next;\n        Node(int val) : data(val), next(nullptr) {}\n    };\n    \n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void add(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    void display() {\n        Node* current = head;\n        while (current) {\n            cout << current->data << " ";\n            current = current->next;\n        }\n        cout << endl;\n    }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.add(10);\n    list.add(20);\n    list.add(30);\n    list.display();\n    return 0;\n}',
  hint: 'Nested classes hide implementation complexity from users.'
},
{
  id: 'cpp_abstraction_7',
  topicId: 'cpp_abstraction',
  question: 'Use const member functions for read-only abstraction.',
  mathSolution: 'const methods promise not to modify object state.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    mutable int accessCount;\n    \npublic:\n    Person(string n, int a) : name(n), age(a), accessCount(0) {}\n    \n    string getName() const {\n        accessCount++;\n        return name;\n    }\n    \n    int getAge() const {\n        accessCount++;\n        return age;\n    }\n    \n    int getAccessCount() const {\n        return accessCount;\n    }\n    \n    void celebrateBirthday() {\n        age++;\n    }\n};\n\nint main() {\n    const Person john("John", 25);\n    cout << john.getName() << " is " << john.getAge() << endl;\n    // john.celebrateBirthday(); // Error: cannot call non-const on const object\n    cout << "Access count: " << john.getAccessCount() << endl;\n    return 0;\n}',
  hint: 'const methods provide read-only abstraction, guaranteeing no modification.'
},
{
  id: 'cpp_abstraction_8',
  topicId: 'cpp_abstraction',
  question: 'Use typedef/using for type abstraction.',
  mathSolution: 'Type aliases hide complex type details.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\n// Type abstraction\ntypedef unsigned long long uint64;\nusing StringVector = vector<string>;\nusing StringIntMap = map<string, int>;\nusing Callback = void(*)(int);\n\nclass DataStore {\nprivate:\n    using DataType = vector<pair<string, double>>;\n    DataType data;\n    \npublic:\n    using iterator = DataType::iterator;\n    using const_iterator = DataType::const_iterator;\n    \n    void add(const string& key, double value) {\n        data.push_back({key, value});\n    }\n    \n    iterator begin() { return data.begin(); }\n    iterator end() { return data.end(); }\n    const_iterator begin() const { return data.begin(); }\n    const_iterator end() const { return data.end(); }\n};\n\nint main() {\n    uint64 largeNumber = 123456789012345ULL;\n    StringVector names = {\"Alice\", \"Bob\", \"Charlie\"};\n    StringIntMap ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    DataStore store;\n    store.add(\"x\", 10.5);\n    store.add(\"y\", 20.3);\n    \n    for (const auto& [key, val] : store) {\n        cout << key << ": " << val << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Type aliases simplify complex type declarations and improve readability.'
},
{
  id: 'cpp_abstraction_9',
  topicId: 'cpp_abstraction',
  question: 'Use enum class for type-safe constants abstraction.',
  mathSolution: 'enum class provides scoped, type-safe enumerations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Status {\n    OK = 200,\n    CREATED = 201,\n    BAD_REQUEST = 400,\n    UNAUTHORIZED = 401,\n    NOT_FOUND = 404,\n    SERVER_ERROR = 500\n};\n\nenum class Color { RED, GREEN, BLUE };\nenum class TrafficLight { RED, YELLOW, GREEN };\n\nclass HttpResponse {\nprivate:\n    Status status;\n    string message;\n    \npublic:\n    HttpResponse(Status s, const string& msg) : status(s), message(msg) {}\n    \n    int getStatusCode() const {\n        return static_cast<int>(status);\n    }\n    \n    string getStatusText() const {\n        switch(status) {\n            case Status::OK: return \"OK\";\n            case Status::CREATED: return \"Created\";\n            case Status::BAD_REQUEST: return \"Bad Request\";\n            case Status::UNAUTHORIZED: return \"Unauthorized\";\n            default: return \"Unknown\";\n        }\n    }\n};\n\nint main() {\n    HttpResponse response(Status::OK, \"Success\");\n    cout << response.getStatusCode() << \": \" << response.getStatusText() << endl;\n    \n    // Status s = 200;  // Error: cannot convert int to enum class\n    // if (Color::RED == TrafficLight::RED)  // Error: different types\n    \n    return 0;\n}',
  hint: 'enum class provides type-safe abstraction with scoped constants.'
},
{
  id: 'cpp_abstraction_10',
  topicId: 'cpp_abstraction',
  question: 'Use function pointers for behavioral abstraction.',
  mathSolution: 'Function pointers abstract algorithm selection.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\nint max(int a, int b) { return (a > b) ? a : b; }\nint min(int a, int b) { return (a < b) ? a : b; }\n\nclass Calculator {\nprivate:\n    using Operation = int(*)(int, int);\n    Operation currentOp;\n    \npublic:\n    Calculator(Operation op) : currentOp(op) {}\n    \n    void setOperation(Operation op) { currentOp = op; }\n    \n    int compute(int a, int b) {\n        return currentOp(a, b);\n    }\n};\n\nint main() {\n    Calculator calc(add);\n    cout << "5 + 3 = \" << calc.compute(5, 3) << endl;\n    \n    calc.setOperation(multiply);\n    cout << \"5 * 3 = \" << calc.compute(5, 3) << endl;\n    \n    calc.setOperation(max);\n    cout << \"max(5,3) = \" << calc.compute(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'Function pointers allow abstraction of algorithms and callbacks.'
},
{
  id: 'cpp_abstraction_11',
  topicId: 'cpp_abstraction',
  question: 'Use std::function for polymorphic callable abstraction.',
  mathSolution: 'std::function stores any callable object.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\nusing namespace std;\n\nstruct Multiplier {\n    int factor;\n    int operator()(int x) const { return x * factor; }\n};\n\nclass EventProcessor {\nprivate:\n    vector<function<void(int)>> handlers;\n    \npublic:\n    void addHandler(function<void(int)> handler) {\n        handlers.push_back(handler);\n    }\n    \n    void process(int data) {\n        for (const auto& handler : handlers) {\n            handler(data);\n        }\n    }\n};\n\nint main() {\n    EventProcessor processor;\n    \n    // Lambda\n    processor.addHandler([](int x) { cout << \"Lambda: \" << x * 2 << endl; });\n    \n    // Function pointer\n    processor.addHandler([](int x) { cout << \"Function: \" << x + 10 << endl; });\n    \n    // Function object\n    processor.addHandler(Multiplier{3});\n    \n    // Capture lambda\n    int offset = 100;\n    processor.addHandler([offset](int x) { cout << \"Captured: \" << x + offset << endl; });\n    \n    processor.process(5);\n    \n    return 0;\n}',
  hint: 'std::function provides type-erased callable abstraction.'
},
{
  id: 'cpp_abstraction_12',
  topicId: 'cpp_abstraction',
  question: 'Use lambda expressions for inline functional abstraction.',
  mathSolution: 'Lambdas abstract small, local operations.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    // Lambda for filtering\n    auto isEven = [](int n) { return n % 2 == 0; };\n    \n    // Lambda for transformation\n    auto square = [](int n) { return n * n; };\n    \n    // Lambda for accumulation\n    auto sum = [](int a, int b) { return a + b; };\n    \n    vector<int> evens;\n    copy_if(numbers.begin(), numbers.end(), back_inserter(evens), isEven);\n    \n    vector<int> squares;\n    transform(evens.begin(), evens.end(), back_inserter(squares), square);\n    \n    int total = accumulate(squares.begin(), squares.end(), 0, sum);\n    \n    cout << "Sum of squares of evens: \" << total << endl;\n    \n    // Generic lambda\n    auto add = [](auto a, auto b) { return a + b; };\n    cout << \"add(5,3) = \" << add(5, 3) << endl;\n    cout << \"add(5.5,3.2) = \" << add(5.5, 3.2) << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas provide lightweight functional abstraction.'
},
{
  id: 'cpp_abstraction_13',
  topicId: 'cpp_abstraction',
  question: 'Use RAII for resource management abstraction.',
  mathSolution: 'RAII ties resource lifetime to object lifetime.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <mutex>\nusing namespace std;\n\nclass FileHandle {\nprivate:\n    FILE* file;\n    string filename;\n    \npublic:\n    FileHandle(const string& name, const string& mode) : filename(name) {\n        file = fopen(name.c_str(), mode.c_str());\n        if (!file) throw runtime_error(\"Cannot open file\");\n        cout << \"File opened: \" << filename << endl;\n    }\n    \n    ~FileHandle() {\n        if (file) {\n            fclose(file);\n            cout << \"File closed: \" << filename << endl;\n        }\n    }\n    \n    void write(const string& data) {\n        if (file) fprintf(file, \"%s\\n\", data.c_str());\n    }\n    \n    FileHandle(const FileHandle&) = delete;\n    FileHandle& operator=(const FileHandle&) = delete;\n};\n\nclass MutexLock {\nprivate:\n    mutex& mtx;\n    \npublic:\n    explicit MutexLock(mutex& m) : mtx(m) {\n        mtx.lock();\n        cout << \"Mutex locked\" << endl;\n    }\n    \n    ~MutexLock() {\n        mtx.unlock();\n        cout << \"Mutex unlocked\" << endl;\n    }\n};\n\nint main() {\n    {\n        FileHandle file(\"test.txt\", \"w\");\n        file.write(\"Hello RAII\");\n    }\n    \n    mutex m;\n    {\n        MutexLock lock(m);\n        cout << \"Critical section\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'RAII abstracts resource management ensuring automatic cleanup.'
},
{
  id: 'cpp_abstraction_14',
  topicId: 'cpp_abstraction',
  question: 'Use smart pointers for memory management abstraction.',
  mathSolution: 'Smart pointers automate memory deallocation.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Widget {\nprivate:\n    int id;\npublic:\n    Widget(int i) : id(i) { cout << \"Widget \" << id << \" created\\n\"; }\n    ~Widget() { cout << \"Widget \" << id << \" destroyed\\n\"; }\n    void process() { cout << \"Processing widget \" << id << endl; }\n};\n\nclass Container {\nprivate:\n    vector<unique_ptr<Widget>> widgets;\n    \npublic:\n    void add(unique_ptr<Widget> w) {\n        widgets.push_back(move(w));\n    }\n    \n    void processAll() {\n        for (const auto& w : widgets) {\n            w->process();\n        }\n    }\n};\n\nint main() {\n    Container c;\n    c.add(make_unique<Widget>(1));\n    c.add(make_unique<Widget>(2));\n    c.add(make_unique<Widget>(3));\n    \n    c.processAll();\n    \n    auto shared = make_shared<Widget>(10);\n    auto shared2 = shared;\n    cout << \"Reference count: \" << shared.use_count() << endl;\n    \n    return 0;\n}',
  hint: 'Smart pointers abstract memory management, preventing leaks.'
},
{
  id: 'cpp_abstraction_15',
  topicId: 'cpp_abstraction',
  question: 'Use template specialization for type-specific abstraction.',
  mathSolution: 'Templates abstract algorithms from data types.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cstring>\nusing namespace std;\n\ntemplate<typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Template specialization for const char*\ntemplate<>\nconst char* maximum<const char*>(const char* a, const char* b) {\n    return (strcmp(a, b) > 0) ? a : b;\n}\n\n// Class template specialization\ntemplate<typename T>\nclass Wrapper {\nprivate:\n    T value;\npublic:\n    Wrapper(T v) : value(v) {}\n    void display() { cout << \"Generic: \" << value << endl; }\n};\n\ntemplate<>\nclass Wrapper<string> {\nprivate:\n    string value;\npublic:\n    Wrapper(const string& v) : value(v) {}\n    void display() { cout << \"String specialization: \\\"\" << value << \"\\\"\" << endl; }\n};\n\nint main() {\n    cout << maximum(5, 3) << endl;\n    cout << maximum(5.5, 3.2) << endl;\n    cout << maximum(\"apple\", \"banana\") << endl;\n    \n    Wrapper<int> w1(42);\n    Wrapper<string> w2(\"Hello\");\n    w1.display();\n    w2.display();\n    \n    return 0;\n}',
  hint: 'Template specialization provides type-specific implementation abstraction.'
},
{
  id: 'cpp_abstraction_16',
  topicId: 'cpp_abstraction',
  question: 'Use variadic templates for flexible parameter abstraction.',
  mathSolution: 'Variadic templates accept variable number of arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Base case\nvoid print() {}\n\n// Recursive variadic template\ntemplate<typename T, typename... Args>\nvoid print(T first, Args... args) {\n    cout << first << \" \";\n    print(args...);\n}\n\n// Sum function\ntemplate<typename T>\nT sum(T t) { return t; }\n\ntemplate<typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}\n\n// Tuple-like data structure\ntemplate<typename... Types>\nclass Tuple {\n    // Implementation omitted for brevity\n};\n\nint main() {\n    print(1, 2, 3, 4, 5);\n    cout << endl;\n    print(\"Hello\", \"World\", 42, 3.14);\n    cout << endl;\n    \n    cout << \"Sum: \" << sum(1, 2, 3, 4, 5) << endl;\n    cout << \"Sum: \" << sum(1.1, 2.2, 3.3) << endl;\n    \n    return 0;\n}',
  hint: 'Variadic templates abstract over variable argument lists.'
},
{
  id: 'cpp_abstraction_17',
  topicId: 'cpp_abstraction',
  question: 'Use SFINAE for conditional abstraction.',
  mathSolution: 'SFINAE enables compile-time conditional function selection.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\n// For integral types\ntemplate<typename T>\ntypename enable_if<is_integral<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Integral version: \";\n    return x * 2;\n}\n\n// For floating point types\ntemplate<typename T>\ntypename enable_if<is_floating_point<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Floating point version: \";\n    return x * 2.0;\n}\n\n// For string type\ntemplate<typename T>\ntypename enable_if<is_same<T, string>::value, string>::type\ndoubleValue(T x) {\n    cout << \"String version: \";\n    return x + x;\n}\n\nclass IsEven {\npublic:\n    template<typename T>\n    auto operator()(T x) -> decltype(x % 2 == 0) {\n        return x % 2 == 0;\n    }\n};\n\nint main() {\n    cout << doubleValue(5) << endl;\n    cout << doubleValue(5.5) << endl;\n    cout << doubleValue(string(\"Hi\")) << endl;\n    \n    IsEven isEven;\n    cout << \"5 is even? \" << isEven(5) << endl;\n    cout << \"4 is even? \" << isEven(4) << endl;\n    \n    return 0;\n}',
  hint: 'SFINAE abstracts conditional compilation based on type traits.'
},
{
  id: 'cpp_abstraction_18',
  topicId: 'cpp_abstraction',
  question: 'Use concept (C++20) for constraint-based abstraction.',
  mathSolution: 'Concepts define requirements on template parameters.',
  codeSolution: '#include <iostream>\n#include <concepts>\nusing namespace std;\n\ntemplate<typename T>\nconcept Numeric = requires(T a, T b) {\n    { a + b } -> convertible_to<T>;\n    { a - b } -> convertible_to<T>;\n    { a * b } -> convertible_to<T>;\n    { a / b } -> convertible_to<T>;\n    { a > b } -> convertible_to<bool>;\n};\n\ntemplate<typename T>\nconcept Printable = requires(T t) {\n    { cout << t } -> convertible_to<ostream&>;\n};\n\ntemplate<Numeric T>\nT add(T a, T b) {\n    return a + b;\n}\n\ntemplate<Numeric T>\nT multiply(T a, T b) {\n    return a * b;\n}\n\ntemplate<Printable T>\nvoid print(const T& value) {\n    cout << value << endl;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << multiply(4, 2) << endl;\n    \n    print(42);\n    print(\"Hello\");\n    print(3.14);\n    \n    // add(\"a\", \"b\");  // Error: string does not satisfy Numeric concept\n    \n    return 0;\n}',
  hint: 'Concepts provide expressive constraints for template abstractions.'
},
{
  id: 'cpp_abstraction_19',
  topicId: 'cpp_abstraction',
  question: 'Use inline namespaces for versioning abstraction.',
  mathSolution: 'Inline namespaces hide versioning details from users.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nnamespace Library {\n    inline namespace v2 {\n        void function() {\n            cout << \"Library v2 function called\" << endl;\n        }\n        \n        class Widget {\n        public:\n            void process() { cout << \"Widget v2 process\" << endl; }\n        };\n    }\n    \n    namespace v1 {\n        void function() {\n            cout << \"Library v1 function called\" << endl;\n        }\n    }\n}\n\nint main() {\n    Library::function();  // Calls v2 version (inline)\n    Library::Widget w;\n    w.process();\n    \n    // Can still access v1 explicitly\n    Library::v1::function();\n    \n    return 0;\n}',
  hint: 'Inline namespaces abstract library versioning from users.'
},
{
  id: 'cpp_abstraction_20',
  topicId: 'cpp_abstraction',
  question: 'Use attribute specifiers for compiler abstraction.',
  mathSolution: 'Attributes provide implementation-defined behavior hints.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n[[nodiscard]] int getValue() {\n    return 42;\n}\n\n[[deprecated(\"Use newFunction() instead\")]]\nvoid oldFunction() {\n    cout << \"Old function\" << endl;\n}\n\nvoid newFunction() {\n    cout << \"New function\" << endl;\n}\n\n[[noreturn]] void fatalError() {\n    cout << \"Fatal error!\" << endl;\n    throw runtime_error(\"Fatal\");\n}\n\n[[maybe_unused]] int debugInfo = 100;\n\nint main() {\n    // getValue();  // Warning: nodiscard ignored\n    int val = getValue();  // OK\n    \n    oldFunction();  // Deprecated warning\n    newFunction();\n    \n    return 0;\n}',
  hint: 'Attributes abstract compiler-specific hints and warnings.'
},
{
  id: 'cpp_abstraction_21',
  topicId: 'cpp_abstraction',
  question: 'Use pimpl idiom for implementation hiding.',
  mathSolution: 'Pointer to Implementation hides class internals.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\n// Public interface (Widget.h)\nclass Widget {\npublic:\n    Widget();\n    ~Widget();\n    void process();\n    \nprivate:\n    struct Impl;\n    unique_ptr<Impl> pImpl;\n};\n\n// Implementation (Widget.cpp)\nstruct Widget::Impl {\n    int data;\n    string name;\n    \n    void doWork() {\n        cout << \"Working with \" << name << \": \" << data << endl;\n    }\n};\n\nWidget::Widget() : pImpl(make_unique<Impl>()) {\n    pImpl->data = 42;\n    pImpl->name = \"Widget\";\n}\n\nWidget::~Widget() = default;\n\nvoid Widget::process() {\n    pImpl->doWork();\n}\n\nint main() {\n    Widget w;\n    w.process();\n    \n    return 0;\n}',
  hint: 'Pimpl idiom hides implementation details from header files.'
},
{
  "id": "cpp_abstraction_22",
  "topicId": "cpp_abstraction",
  "question": "Use factory method pattern for object creation abstraction.",
  "mathSolution": "Factory abstracts object creation logic.",
  "codeSolution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override { cout << \"Using Product A\" << endl; }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override { cout << \"Using Product B\" << endl; }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(char type) {\n        switch(type) {\n            case 'A': return make_unique<ConcreteProductA>();\n            case 'B': return make_unique<ConcreteProductB>();\n            default: return nullptr;\n        }\n    }\n};\n\nint main() {\n    auto product = Factory::create('A');\n    if (product) product->use();\n    \n    product = Factory::create('B');\n    if (product) product->use();\n    \n    return 0;\n}",
  "hint": "Factory method abstracts object creation from client code."
},
{
  id: 'cpp_abstraction_23',
  topicId: 'cpp_abstraction',
  question: 'Use builder pattern for complex object construction abstraction.',
  mathSolution: 'Builder abstracts step-by-step object construction.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Computer {\nprivate:\n    string cpu;\n    string ram;\n    string storage;\n    string gpu;\n    \npublic:\n    void setCPU(const string& c) { cpu = c; }\n    void setRAM(const string& r) { ram = r; }\n    void setStorage(const string& s) { storage = s; }\n    void setGPU(const string& g) { gpu = g; }\n    \n    void specs() const {\n        cout << \"CPU: \" << cpu << \", RAM: \" << ram \n             << \", Storage: \" << storage << \", GPU: \" << gpu << endl;\n    }\n};\n\nclass ComputerBuilder {\nprivate:\n    Computer computer;\n    \npublic:\n    ComputerBuilder& setCPU(const string& cpu) {\n        computer.setCPU(cpu);\n        return *this;\n    }\n    \n    ComputerBuilder& setRAM(const string& ram) {\n        computer.setRAM(ram);\n        return *this;\n    }\n    \n    ComputerBuilder& setStorage(const string& storage) {\n        computer.setStorage(storage);\n        return *this;\n    }\n    \n    ComputerBuilder& setGPU(const string& gpu) {\n        computer.setGPU(gpu);\n        return *this;\n    }\n    \n    Computer build() {\n        return computer;\n    }\n};\n\nint main() {\n    Computer gamingPC = ComputerBuilder()\n        .setCPU(\"Intel i9\")\n        .setRAM(\"32GB\")\n        .setStorage(\"1TB SSD\")\n        .setGPU(\"RTX 4080\")\n        .build();\n    \n    gamingPC.specs();\n    \n    return 0;\n}',
  hint: 'Builder pattern abstracts complex object construction.'
},
{
  id: 'cpp_abstraction_24',
  topicId: 'cpp_abstraction',
  question: 'Use facade pattern for subsystem abstraction.',
  mathSolution: 'Facade provides simplified interface to complex subsystem.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CPU {\npublic:\n    void start() { cout << \"CPU starting...\" << endl; }\n    void execute() { cout << \"CPU executing\" << endl; }\n};\n\nclass Memory {\npublic:\n    void load() { cout << \"Loading memory...\" << endl; }\n};\n\nclass HardDrive {\npublic:\n    void read() { cout << \"Reading from hard drive...\" << endl; }\n};\n\nclass ComputerFacade {\nprivate:\n    CPU cpu;\n    Memory memory;\n    HardDrive hardDrive;\n    \npublic:\n    void startComputer() {\n        cout << \"Starting computer...\" << endl;\n        cpu.start();\n        memory.load();\n        hardDrive.read();\n        cpu.execute();\n        cout << \"Computer ready!\" << endl;\n    }\n};\n\nint main() {\n    ComputerFacade computer;\n    computer.startComputer();\n    \n    return 0;\n}',
  hint: 'Facade pattern abstracts complex system behind simple interface.'
},
{
  id: 'cpp_abstraction_25',
  topicId: 'cpp_abstraction',
  question: 'Use proxy pattern for access control abstraction.',
  mathSolution: 'Proxy controls access to real object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Image {\npublic:\n    virtual void display() = 0;\n    virtual ~Image() {}\n};\n\nclass RealImage : public Image {\nprivate:\n    string filename;\n    \n    void loadFromDisk() {\n        cout << \"Loading: \" << filename << endl;\n    }\n    \npublic:\n    RealImage(const string& file) : filename(file) {\n        loadFromDisk();\n    }\n    \n    void display() override {\n        cout << \"Displaying: \" << filename << endl;\n    }\n};\n\nclass ImageProxy : public Image {\nprivate:\n    string filename;\n    unique_ptr<RealImage> realImage;\n    \npublic:\n    ImageProxy(const string& file) : filename(file) {}\n    \n    void display() override {\n        if (!realImage) {\n            realImage = make_unique<RealImage>(filename);\n        }\n        realImage->display();\n    }\n};\n\nint main() {\n    ImageProxy image(\"photo.jpg\");\n    cout << \"Proxy created, image not loaded yet\" << endl;\n    image.display();\n    image.display();  // Already loaded\n    \n    return 0;\n}',
  hint: 'Proxy pattern abstracts access control and lazy initialization.'
},
{
  id: 'cpp_abstraction_26',
  topicId: 'cpp_abstraction',
  question: 'Use decorator pattern for dynamic behavior abstraction.',
  mathSolution: 'Decorator adds behavior without modifying original object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Coffee {\npublic:\n    virtual double cost() const = 0;\n    virtual string description() const = 0;\n    virtual ~Coffee() {}\n};\n\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() const override { return 5.0; }\n    string description() const override { return \"Simple coffee\"; }\n};\n\nclass CoffeeDecorator : public Coffee {\nprotected:\n    unique_ptr<Coffee> coffee;\n    \npublic:\n    CoffeeDecorator(unique_ptr<Coffee> c) : coffee(move(c)) {}\n};\n\nclass MilkDecorator : public CoffeeDecorator {\npublic:\n    MilkDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() const override { return coffee->cost() + 2.0; }\n    string description() const override { return coffee->description() + \", milk\"; }\n};\n\nclass SugarDecorator : public CoffeeDecorator {\npublic:\n    SugarDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() const override { return coffee->cost() + 1.0; }\n    string description() const override { return coffee->description() + \", sugar\"; }\n};\n\nint main() {\n    auto coffee = make_unique<SimpleCoffee>();\n    coffee = make_unique<MilkDecorator>(move(coffee));\n    coffee = make_unique<SugarDecorator>(move(coffee));\n    \n    cout << coffee->description() << \": $\" << coffee->cost() << endl;\n    \n    return 0;\n}',
  hint: 'Decorator pattern abstracts dynamic behavior addition.'
},
{
  id: 'cpp_abstraction_27',
  topicId: 'cpp_abstraction',
  question: 'Use strategy pattern for algorithm abstraction.',
  mathSolution: 'Strategy encapsulates interchangeable algorithms.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass SortStrategy {\npublic:\n    virtual void sort(vector<int>& data) = 0;\n    virtual ~SortStrategy() {}\n};\n\nclass BubbleSort : public SortStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using bubble sort\" << endl;\n        for (size_t i = 0; i < data.size(); i++) {\n            for (size_t j = 0; j < data.size() - i - 1; j++) {\n                if (data[j] > data[j + 1]) {\n                    swap(data[j], data[j + 1]);\n                }\n            }\n        }\n    }\n};\n\nclass QuickSort : public SortStrategy {\nprivate:\n    void quickSort(vector<int>& data, int left, int right) {\n        if (left >= right) return;\n        int pivot = data[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (data[j] <= pivot) swap(data[i++], data[j]);\n        }\n        swap(data[i], data[right]);\n        quickSort(data, left, i - 1);\n        quickSort(data, i + 1, right);\n    }\n    \npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using quick sort\" << endl;\n        quickSort(data, 0, data.size() - 1);\n    }\n};\n\nclass DataProcessor {\nprivate:\n    unique_ptr<SortStrategy> strategy;\n    vector<int> data;\n    \npublic:\n    void setStrategy(unique_ptr<SortStrategy> s) {\n        strategy = move(s);\n    }\n    \n    void addData(int val) { data.push_back(val); }\n    \n    void process() {\n        if (strategy) {\n            strategy->sort(data);\n        }\n    }\n    \n    void display() {\n        for (int val : data) cout << val << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    DataProcessor processor;\n    processor.addData(5);\n    processor.addData(2);\n    processor.addData(8);\n    processor.addData(1);\n    processor.addData(9);\n    \n    processor.setStrategy(make_unique<BubbleSort>());\n    processor.process();\n    processor.display();\n    \n    return 0;\n}',
  hint: 'Strategy pattern abstracts interchangeable algorithms.'
},
{
  id: 'cpp_abstraction_28',
  topicId: 'cpp_abstraction',
  question: 'Use observer pattern for event notification abstraction.',
  mathSolution: 'Observer abstracts communication between objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Observer {\npublic:\n    virtual void update(const string& message) = 0;\n    virtual ~Observer() {}\n};\n\nclass Subject {\nprivate:\n    vector<Observer*> observers;\n    \npublic:\n    void attach(Observer* obs) {\n        observers.push_back(obs);\n    }\n    \n    void notify(const string& message) {\n        for (Observer* obs : observers) {\n            obs->update(message);\n        }\n    }\n};\n\nclass Logger : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << \"[LOG] \" << message << endl;\n    }\n};\n\nclass EmailNotifier : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << \"[EMAIL] Sending: \" << message << endl;\n    }\n};\n\nclass DataModel : public Subject {\nprivate:\n    string data;\n    \npublic:\n    void setData(const string& newData) {\n        data = newData;\n        notify(\"Data changed to: \" + data);\n    }\n};\n\nint main() {\n    DataModel model;\n    Logger logger;\n    EmailNotifier email;\n    \n    model.attach(&logger);\n    model.attach(&email);\n    \n    model.setData(\"Hello World\");\n    model.setData(\"New Value\");\n    \n    return 0;\n}',
  hint: 'Observer pattern abstracts event-driven communication.'
},
{
  id: 'cpp_abstraction_29',
  topicId: 'cpp_abstraction',
  question: 'Use command pattern for operation abstraction.',
  mathSolution: 'Command encapsulates requests as objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Command {\npublic:\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n    virtual ~Command() {}\n};\n\nclass Light {\npublic:\n    void on() { cout << \"Light is ON\" << endl; }\n    void off() { cout << \"Light is OFF\" << endl; }\n};\n\nclass LightOnCommand : public Command {\nprivate:\n    Light& light;\n    \npublic:\n    LightOnCommand(Light& l) : light(l) {}\n    void execute() override { light.on(); }\n    void undo() override { light.off(); }\n};\n\nclass LightOffCommand : public Command {\nprivate:\n    Light& light;\n    \npublic:\n    LightOffCommand(Light& l) : light(l) {}\n    void execute() override { light.off(); }\n    void undo() override { light.on(); }\n};\n\nclass RemoteControl {\nprivate:\n    vector<unique_ptr<Command>> history;\n    \npublic:\n    void press(unique_ptr<Command> cmd) {\n        cmd->execute();\n        history.push_back(move(cmd));\n    }\n    \n    void undo() {\n        if (!history.empty()) {\n            history.back()->undo();\n            history.pop_back();\n        }\n    }\n};\n\nint main() {\n    Light livingRoom;\n    RemoteControl remote;\n    \n    remote.press(make_unique<LightOnCommand>(livingRoom));\n    remote.press(make_unique<LightOffCommand>(livingRoom));\n    remote.undo();\n    \n    return 0;\n}',
  hint: 'Command pattern abstracts operations as objects.'
},
{
  id: 'cpp_abstraction_30',
  topicId: 'cpp_abstraction',
  question: 'Use state pattern for state-based behavior abstraction.',
  mathSolution: 'State encapsulates behavior for different states.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass State {\npublic:\n    virtual void handle() = 0;\n    virtual ~State() {}\n};\n\nclass StateA : public State {\npublic:\n    void handle() override {\n        cout << \"Handling in State A\" << endl;\n    }\n};\n\nclass StateB : public State {\npublic:\n    void handle() override {\n        cout << \"Handling in State B\" << endl;\n    }\n};\n\nclass Context {\nprivate:\n    unique_ptr<State> state;\n    \npublic:\n    void setState(unique_ptr<State> s) {\n        state = move(s);\n    }\n    \n    void request() {\n        if (state) state->handle();\n    }\n};\n\nint main() {\n    Context context;\n    \n    context.setState(make_unique<StateA>());\n    context.request();\n    \n    context.setState(make_unique<StateB>());\n    context.request();\n    \n    return 0;\n}',
  hint: 'State pattern abstracts state-specific behavior.'
},
{
  id: 'cpp_abstraction_31',
  topicId: 'cpp_abstraction',
  question: 'Use visitor pattern for operation abstraction on object structures.',
  mathSolution: 'Visitor abstracts operations on composite objects.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Circle;\nclass Rectangle;\n\nclass Visitor {\npublic:\n    virtual void visit(Circle& c) = 0;\n    virtual void visit(Rectangle& r) = 0;\n    virtual ~Visitor() {}\n};\n\nclass Shape {\npublic:\n    virtual void accept(Visitor& v) = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    double getRadius() const { return radius; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double getWidth() const { return width; }\n    double getHeight() const { return height; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass AreaVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override {\n        cout << \"Circle area: \" << 3.14159 * c.getRadius() * c.getRadius() << endl;\n    }\n    void visit(Rectangle& r) override {\n        cout << \"Rectangle area: \" << r.getWidth() * r.getHeight() << endl;\n    }\n};\n\nclass DrawVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override { cout << \"Drawing Circle\" << endl; }\n    void visit(Rectangle& r) override { cout << \"Drawing Rectangle\" << endl; }\n};\n\nint main() {\n    Circle circle(5);\n    Rectangle rect(4, 6);\n    \n    AreaVisitor areaCalc;\n    DrawVisitor drawer;\n    \n    circle.accept(areaCalc);\n    circle.accept(drawer);\n    rect.accept(areaCalc);\n    rect.accept(drawer);\n    \n    return 0;\n}',
  hint: 'Visitor pattern abstracts operations on object structures.'
},
{
  id: 'cpp_abstraction_32',
  topicId: 'cpp_abstraction',
  question: 'Use iterator pattern for container traversal abstraction.',
  mathSolution: 'Iterator abstracts sequential access to containers.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nclass Container {\nprivate:\n    vector<T> items;\n    \npublic:\n    void add(const T& item) { items.push_back(item); }\n    \n    class Iterator {\n    private:\n        typename vector<T>::iterator it;\n    public:\n        Iterator(typename vector<T>::iterator i) : it(i) {}\n        T& operator*() { return *it; }\n        Iterator& operator++() { ++it; return *this; }\n        bool operator!=(const Iterator& other) { return it != other.it; }\n    };\n    \n    Iterator begin() { return Iterator(items.begin()); }\n    Iterator end() { return Iterator(items.end()); }\n};\n\nint main() {\n    Container<int> numbers;\n    numbers.add(10);\n    numbers.add(20);\n    numbers.add(30);\n    \n    for (auto it = numbers.begin(); it != numbers.end(); ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n    \n    for (int n : numbers) {  // Works with range-based for\n        cout << n << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Iterator pattern abstracts container traversal.'
},
{
  id: 'cpp_abstraction_33',
  topicId: 'cpp_abstraction',
  question: 'Use adapter pattern for interface compatibility abstraction.',
  mathSolution: 'Adapter converts one interface to another.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass OldSystem {\npublic:\n    void oldRequest() {\n        cout << \"Old system request\" << endl;\n    }\n};\n\nclass NewSystem {\npublic:\n    virtual void newRequest() = 0;\n    virtual ~NewSystem() {}\n};\n\nclass Adapter : public NewSystem {\nprivate:\n    unique_ptr<OldSystem> oldSystem;\n    \npublic:\n    Adapter() : oldSystem(make_unique<OldSystem>()) {}\n    \n    void newRequest() override {\n        oldSystem->oldRequest();\n    }\n};\n\nclass Client {\nprivate:\n    unique_ptr<NewSystem> system;\n    \npublic:\n    Client(unique_ptr<NewSystem> s) : system(move(s)) {}\n    \n    void execute() {\n        system->newRequest();\n    }\n};\n\nint main() {\n    Client client(make_unique<Adapter>());\n    client.execute();\n    \n    return 0;\n}',
  hint: 'Adapter pattern abstracts interface conversion.'
},
{
  id: 'cpp_abstraction_34',
  topicId: 'cpp_abstraction',
  question: 'Use bridge pattern for abstraction and implementation decoupling.',
  mathSolution: 'Bridge separates abstraction from implementation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass DrawingAPI {\npublic:\n    virtual void drawCircle(double x, double y, double r) = 0;\n    virtual ~DrawingAPI() {}\n};\n\nclass DrawingAPI1 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API1: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass DrawingAPI2 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API2: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass Shape {\nprotected:\n    unique_ptr<DrawingAPI> drawingAPI;\n    \npublic:\n    Shape(unique_ptr<DrawingAPI> api) : drawingAPI(move(api)) {}\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass CircleShape : public Shape {\nprivate:\n    double x, y, radius;\n    \npublic:\n    CircleShape(double cx, double cy, double r, unique_ptr<DrawingAPI> api)\n        : Shape(move(api)), x(cx), y(cy), radius(r) {}\n    \n    void draw() override {\n        drawingAPI->drawCircle(x, y, radius);\n    }\n};\n\nint main() {\n    CircleShape circle1(5, 5, 10, make_unique<DrawingAPI1>());\n    CircleShape circle2(10, 10, 20, make_unique<DrawingAPI2>());\n    \n    circle1.draw();\n    circle2.draw();\n    \n    return 0;\n}',
  hint: 'Bridge pattern abstracts separation of interface from implementation.'
},
{
  "id": "cpp_abstraction_35",
  "topicId": "cpp_abstraction",
  "question": "Use flyweight pattern for shared state abstraction.",
  "mathSolution": "Flyweight shares common state among many objects.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Character {\nprivate:\n    char symbol;\n    string font;\n    int size;\n    \npublic:\n    Character(char s, const string& f, int sz) : symbol(s), font(f), size(sz) {}\n    \n    void display(int x, int y) const {\n        cout << \"Character '\" << symbol << \"' at (\" << x << \",\" << y \n             << \") font: \" << font << \", size: \" << size << endl;\n    }\n};\n\nclass CharacterFactory {\nprivate:\n    unordered_map<string, shared_ptr<Character>> characters;\n    \n    string getKey(char c, const string& font, int size) {\n        return string(1, c) + font + to_string(size);\n    }\n    \npublic:\n    shared_ptr<Character> getCharacter(char c, const string& font, int size) {\n        string key = getKey(c, font, size);\n        if (characters.find(key) == characters.end()) {\n            characters[key] = make_shared<Character>(c, font, size);\n            cout << \"Creating new character: \" << key << endl;\n        }\n        return characters[key];\n    }\n    \n    size_t getCacheSize() const {\n        return characters.size();\n    }\n};\n\nint main() {\n    CharacterFactory factory;\n    \n    auto c1 = factory.getCharacter('A', \"Arial\", 12);\n    auto c2 = factory.getCharacter('A', \"Arial\", 12);  // Shared (reused)\n    auto c3 = factory.getCharacter('B', \"Arial\", 12);  // New\n    \n    c1->display(0, 0);\n    c2->display(10, 0);\n    c3->display(20, 0);\n    \n    cout << \"\\nTotal unique characters cached: \" << factory.getCacheSize() << endl;\n    \n    return 0;\n}",
  "hint": "Flyweight pattern abstracts shared state among similar objects."
},
{
  id: 'cpp_abstraction_36',
  topicId: 'cpp_abstraction',
  question: 'Use mediator pattern for communication abstraction.',
  mathSolution: 'Mediator centralizes communication between objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Colleague;\n\nclass Mediator {\npublic:\n    virtual void notify(Colleague* sender, const string& event) = 0;\n    virtual ~Mediator() {}\n};\n\nclass Colleague {\nprotected:\n    Mediator* mediator;\n    \npublic:\n    Colleague(Mediator* m) : mediator(m) {}\n    virtual ~Colleague() {}\n};\n\nclass ConcreteMediator : public Mediator {\nprivate:\n    vector<Colleague*> colleagues;\n    \npublic:\n    void addColleague(Colleague* c) { colleagues.push_back(c); }\n    \n    void notify(Colleague* sender, const string& event) override {\n        for (Colleague* c : colleagues) {\n            if (c != sender) {\n                cout << \"Mediator forwarding: \" << event << endl;\n            }\n        }\n    }\n};\n\nclass Component1 : public Colleague {\npublic:\n    Component1(Mediator* m) : Colleague(m) {}\n    void doSomething() {\n        cout << \"Component1 does something\" << endl;\n        mediator->notify(this, \"Event from Component1\");\n    }\n};\n\nclass Component2 : public Colleague {\npublic:\n    Component2(Mediator* m) : Colleague(m) {}\n    void doSomethingElse() {\n        cout << \"Component2 does something else\" << endl;\n        mediator->notify(this, \"Event from Component2\");\n    }\n};\n\nint main() {\n    ConcreteMediator mediator;\n    Component1 comp1(&mediator);\n    Component2 comp2(&mediator);\n    \n    mediator.addColleague(&comp1);\n    mediator.addColleague(&comp2);\n    \n    comp1.doSomething();\n    comp2.doSomethingElse();\n    \n    return 0;\n}',
  hint: 'Mediator pattern abstracts communication between objects.'
},
{
  id: 'cpp_abstraction_37',
  topicId: 'cpp_abstraction',
  question: 'Use memento pattern for state preservation abstraction.',
  mathSolution: 'Memento captures and restores object state.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Memento {\nprivate:\n    string state;\n    \npublic:\n    Memento(const string& s) : state(s) {}\n    string getState() const { return state; }\n};\n\nclass Originator {\nprivate:\n    string state;\n    \npublic:\n    void setState(const string& s) {\n        state = s;\n        cout << \"State set to: \" << state << endl;\n    }\n    \n    string getState() const { return state; }\n    \n    unique_ptr<Memento> createMemento() {\n        return make_unique<Memento>(state);\n    }\n    \n    void restoreMemento(unique_ptr<Memento> m) {\n        state = m->getState();\n        cout << \"State restored to: \" << state << endl;\n    }\n};\n\nclass Caretaker {\nprivate:\n    vector<unique_ptr<Memento>> mementos;\n    \npublic:\n    void addMemento(unique_ptr<Memento> m) {\n        mementos.push_back(move(m));\n    }\n    \n    unique_ptr<Memento> getMemento(int index) {\n        if (index >= 0 && index < mementos.size()) {\n            return move(mementos[index]);\n        }\n        return nullptr;\n    }\n};\n\nint main() {\n    Originator originator;\n    Caretaker caretaker;\n    \n    originator.setState(\"State 1\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 2\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 3\");\n    \n    originator.restoreMemento(caretaker.getMemento(0));\n    \n    return 0;\n}',
  hint: 'Memento pattern abstracts state capture and restoration.'
},
{
  id: 'cpp_abstraction_38',
  topicId: 'cpp_abstraction',
  question: 'Use prototype pattern for object cloning abstraction.',
  mathSolution: 'Prototype abstracts object creation through cloning.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Prototype {\npublic:\n    virtual unique_ptr<Prototype> clone() const = 0;\n    virtual void display() const = 0;\n    virtual ~Prototype() {}\n};\n\nclass ConcretePrototype : public Prototype {\nprivate:\n    int id;\n    string name;\n    double value;\n    \npublic:\n    ConcretePrototype(int i, const string& n, double v) \n        : id(i), name(n), value(v) {}\n    \n    ConcretePrototype(const ConcretePrototype& other)\n        : id(other.id), name(other.name), value(other.value) {}\n    \n    unique_ptr<Prototype> clone() const override {\n        return make_unique<ConcretePrototype>(*this);\n    }\n    \n    void display() const override {\n        cout << "ID: \" << id << \", Name: \" << name << \", Value: \" << value << endl;\n    }\n};\n\nint main() {\n    ConcretePrototype original(1, \"Original\", 99.99);\n    auto clone = original.clone();\n    \n    original.display();\n    clone->display();\n    \n    return 0;\n}',
  hint: 'Prototype pattern abstracts object cloning.'
},
{
  id: 'cpp_abstraction_39',
  topicId: 'cpp_abstraction',
  question: 'Use chain of responsibility for request handling abstraction.',
  mathSolution: 'Chain passes request along handler chain.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Handler {\nprotected:\n    unique_ptr<Handler> next;\n    \npublic:\n    void setNext(unique_ptr<Handler> h) {\n        next = move(h);\n    }\n    \n    virtual void handleRequest(int level) {\n        if (next) next->handleRequest(level);\n    }\n    \n    virtual ~Handler() {}\n};\n\nclass ConcreteHandler1 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 10) {\n            cout << \"Handler1 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler2 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 20) {\n            cout << \"Handler2 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler3 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 30) {\n            cout << \"Handler3 processed request level \" << level << endl;\n        } else {\n            cout << \"Request level \" << level << \" cannot be processed\" << endl;\n        }\n    }\n};\n\nint main() {\n    auto h1 = make_unique<ConcreteHandler1>();\n    auto h2 = make_unique<ConcreteHandler2>();\n    auto h3 = make_unique<ConcreteHandler3>();\n    \n    h1->setNext(move(h2));\n    h1->setNext(move(h3));\n    \n    h1->handleRequest(5);\n    h1->handleRequest(15);\n    h1->handleRequest(25);\n    h1->handleRequest(35);\n    \n    return 0;\n}',
  hint: 'Chain of Responsibility abstracts request handling delegation.'
},
{
  id: 'cpp_abstraction_40',
  topicId: 'cpp_abstraction',
  question: 'Use interceptor pattern for cross-cutting concerns abstraction.',
  mathSolution: 'Interceptors abstract pre/post processing.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <functional>\n#include <chrono>\nusing namespace std;\n\nclass Interceptor {\npublic:\n    virtual void before(const string& method) = 0;\n    virtual void after(const string& method) = 0;\n    virtual ~Interceptor() {}\n};\n\nclass LoggingInterceptor : public Interceptor {\npublic:\n    void before(const string& method) override {\n        cout << "[LOG] Before calling " << method << endl;\n    }\n    \n    void after(const string& method) override {\n        cout << "[LOG] After calling " << method << endl;\n    }\n};\n\nclass TimingInterceptor : public Interceptor {\nprivate:\n    chrono::time_point<chrono::high_resolution_clock> start;\n    \npublic:\n    void before(const string& method) override {\n        start = chrono::high_resolution_clock::now();\n        cout << "[TIME] Starting " << method << endl;\n    }\n    \n    void after(const string& method) override {\n        auto end = chrono::high_resolution_clock::now();\n        auto duration = chrono::duration_cast<chrono::microseconds>(end - start);\n        cout << "[TIME] " << method << " took " << duration.count() << " microseconds" << endl;\n    }\n};\n\nclass Service {\nprivate:\n    vector<Interceptor*> interceptors;\n    \npublic:\n    void addInterceptor(Interceptor* i) { interceptors.push_back(i); }\n    \n    void execute(const string& method) {\n        for (auto i : interceptors) i->before(method);\n        cout << "Executing: " << method << endl;\n        for (auto i : interceptors) i->after(method);\n    }\n};\n\nint main() {\n    Service service;\n    LoggingInterceptor logger;\n    TimingInterceptor timer;\n    \n    service.addInterceptor(&logger);\n    service.addInterceptor(&timer);\n    \n    service.execute("processData");\n    \n    return 0;\n}',
  hint: 'Interceptor pattern abstracts cross-cutting concerns.'
},
{
  id: 'cpp_abstraction_41',
  topicId: 'cpp_abstraction',
  question: 'Use registry pattern for object lookup abstraction.',
  mathSolution: 'Registry provides centralized object access.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <memory>\nusing namespace std;\n\nclass Service {\npublic:\n    virtual void execute() = 0;\n    virtual ~Service() {}\n};\n\nclass ServiceA : public Service {\npublic:\n    void execute() override { cout << \"Service A executing\" << endl; }\n};\n\nclass ServiceB : public Service {\npublic:\n    void execute() override { cout << \"Service B executing\" << endl; }\n};\n\nclass ServiceRegistry {\nprivate:\n    unordered_map<string, unique_ptr<Service>> services;\n    \npublic:\n    void registerService(const string& name, unique_ptr<Service> service) {\n        services[name] = move(service);\n    }\n    \n    Service* getService(const string& name) {\n        if (services.find(name) != services.end()) {\n            return services[name].get();\n        }\n        return nullptr;\n    }\n    \n    void executeAll() {\n        for (auto& [name, service] : services) {\n            cout << \"Executing \" << name << \": \";\n            service->execute();\n        }\n    }\n};\n\nint main() {\n    ServiceRegistry registry;\n    registry.registerService(\"A\", make_unique<ServiceA>());\n    registry.registerService(\"B\", make_unique<ServiceB>());\n    \n    auto serviceA = registry.getService(\"A\");\n    if (serviceA) serviceA->execute();\n    \n    registry.executeAll();\n    \n    return 0;\n}',
  hint: 'Registry pattern abstracts object lookup and management.'
},
{
  id: 'cpp_abstraction_42',
  topicId: 'cpp_abstraction',
  question: 'Use object pool pattern for resource reuse abstraction.',
  mathSolution: 'Object pool abstracts reusable object management.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <memory>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    int id;\n    static int nextId;\n    \npublic:\n    DatabaseConnection() : id(nextId++) {\n        cout << \"Connection \" << id << \" created\" << endl;\n    }\n    \n    ~DatabaseConnection() {\n        cout << \"Connection \" << id << \" destroyed\" << endl;\n    }\n    \n    void query(const string& sql) {\n        cout << \"Connection \" << id << \" executing: \" << sql << endl;\n    }\n    \n    void reset() {\n        cout << \"Connection \" << id << \" reset\" << endl;\n    }\n};\n\nint DatabaseConnection::nextId = 1;\n\nclass ConnectionPool {\nprivate:\n    queue<unique_ptr<DatabaseConnection>> pool;\n    size_t maxSize;\n    \npublic:\n    ConnectionPool(size_t size) : maxSize(size) {\n        for (size_t i = 0; i < size; i++) {\n            pool.push(make_unique<DatabaseConnection>());\n        }\n    }\n    \n    unique_ptr<DatabaseConnection> acquire() {\n        if (pool.empty()) {\n            cout << \"Pool empty, creating new connection\" << endl;\n            return make_unique<DatabaseConnection>();\n        }\n        auto conn = move(pool.front());\n        pool.pop();\n        return conn;\n    }\n    \n    void release(unique_ptr<DatabaseConnection> conn) {\n        if (pool.size() < maxSize) {\n            conn->reset();\n            pool.push(move(conn));\n        }\n        // Otherwise connection gets destroyed\n    }\n};\n\nint main() {\n    ConnectionPool pool(2);\n    \n    auto conn1 = pool.acquire();\n    conn1->query(\"SELECT * FROM users\");\n    \n    auto conn2 = pool.acquire();\n    conn2->query(\"SELECT * FROM products\");\n    \n    pool.release(move(conn1));\n    pool.release(move(conn2));\n    \n    auto conn3 = pool.acquire();\n    conn3->query(\"SELECT * FROM orders\");\n    \n    return 0;\n}',
  hint: 'Object pool abstracts resource reuse for performance.'
},
{
  id: 'cpp_abstraction_43',
  topicId: 'cpp_abstraction',
  question: 'Use null object pattern for default behavior abstraction.',
  mathSolution: 'Null object provides do-nothing implementation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& message) = 0;\n    virtual ~Logger() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& message) override {\n        cout << \"[LOG] \" << message << endl;\n    }\n};\n\nclass NullLogger : public Logger {\npublic:\n    void log(const string& message) override {\n        // Do nothing\n    }\n};\n\nclass Application {\nprivate:\n    unique_ptr<Logger> logger;\n    \npublic:\n    Application(unique_ptr<Logger> log) : logger(move(log)) {}\n    \n    void run() {\n        logger->log(\"Application started\");\n        logger->log(\"Processing data\");\n        logger->log(\"Application finished\");\n    }\n};\n\nint main() {\n    Application app1(make_unique<ConsoleLogger>());\n    Application app2(make_unique<NullLogger>());\n    \n    cout << \"With logger:\" << endl;\n    app1.run();\n    \n    cout << \"\\nWithout logger (null object):\" << endl;\n    app2.run();\n    \n    return 0;\n}',
  hint: 'Null object pattern abstracts default empty behavior.'
},
{
  id: 'cpp_abstraction_44',
  topicId: 'cpp_abstraction',
  question: 'Use composite pattern for tree structure abstraction.',
  mathSolution: 'Composite treats individual and composite objects uniformly.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Graphic {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Graphic() {}\n};\n\nclass Circle : public Graphic {\npublic:\n    void draw() const override { cout << \"○ \"; }\n};\n\nclass Square : public Graphic {\npublic:\n    void draw() const override { cout << \"□ \"; }\n};\n\nclass CompositeGraphic : public Graphic {\nprivate:\n    vector<unique_ptr<Graphic>> children;\n    \npublic:\n    void add(unique_ptr<Graphic> graphic) {\n        children.push_back(move(graphic));\n    }\n    \n    void draw() const override {\n        for (const auto& child : children) {\n            child->draw();\n        }\n    }\n};\n\nint main() {\n    auto circle1 = make_unique<Circle>();\n    auto circle2 = make_unique<Circle>();\n    auto square = make_unique<Square>();\n    \n    auto composite = make_unique<CompositeGraphic>();\n    composite->add(move(circle1));\n    composite->add(move(square));\n    \n    auto root = make_unique<CompositeGraphic>();\n    root->add(move(circle2));\n    root->add(move(composite));\n    \n    cout << \"Drawing root: \";\n    root->draw();\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Composite pattern abstracts part-whole hierarchies.'
},
{
  id: 'cpp_abstraction_45',
  topicId: 'cpp_abstraction',
  question: 'Use dependency injection for dependency abstraction.',
  mathSolution: 'Dependency injection abstracts object creation from usage.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Database {\npublic:\n    virtual void connect() = 0;\n    virtual void query(const string& sql) = 0;\n    virtual ~Database() {}\n};\n\nclass MySQLDatabase : public Database {\npublic:\n    void connect() override { cout << \"Connecting to MySQL\" << endl; }\n    void query(const string& sql) override { cout << \"MySQL: \" << sql << endl; }\n};\n\nclass PostgreSQLDatabase : public Database {\npublic:\n    void connect() override { cout << \"Connecting to PostgreSQL\" << endl; }\n    void query(const string& sql) override { cout << \"PostgreSQL: \" << sql << endl; }\n};\n\nclass UserService {\nprivate:\n    unique_ptr<Database> db;\n    \npublic:\n    // Dependency injection via constructor\n    UserService(unique_ptr<Database> database) : db(move(database)) {}\n    \n    void getUsers() {\n        db->connect();\n        db->query(\"SELECT * FROM users\");\n    }\n};\n\nint main() {\n    auto userService1 = make_unique<UserService>(make_unique<MySQLDatabase>());\n    auto userService2 = make_unique<UserService>(make_unique<PostgreSQLDatabase>());\n    \n    userService1->getUsers();\n    userService2->getUsers();\n    \n    return 0;\n}',
  hint: 'DI pattern abstracts dependency creation from usage.'
},
{
  id: 'cpp_abstraction_46',
  topicId: 'cpp_abstraction',
  question: 'Use service locator for service location abstraction.',
  mathSolution: 'Service locator centralizes service access.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <memory>\nusing namespace std;\n\nclass Service {\npublic:\n    virtual void execute() = 0;\n    virtual ~Service() {}\n};\n\nclass EmailService : public Service {\npublic:\n    void execute() override { cout << "Sending email" << endl; }\n};\n\nclass SMSService : public Service {\npublic:\n    void execute() override { cout << "Sending SMS" << endl; }\n};\n\nclass ServiceLocator {\nprivate:\n    static unordered_map<string, shared_ptr<Service>> services;\n    \npublic:\n    static void registerService(const string& name, shared_ptr<Service> service) {\n        services[name] = service;\n    }\n    \n    static shared_ptr<Service> getService(const string& name) {\n        if (services.find(name) != services.end()) {\n            return services[name];\n        }\n        return nullptr;\n    }\n};\n\nunordered_map<string, shared_ptr<Service>> ServiceLocator::services;\n\nint main() {\n    ServiceLocator::registerService("email", make_shared<EmailService>());\n    ServiceLocator::registerService("sms", make_shared<SMSService>());\n    \n    auto email = ServiceLocator::getService("email");\n    if (email) email->execute();\n    \n    auto sms = ServiceLocator::getService("sms");\n    if (sms) sms->execute();\n    \n    return 0;\n}',
  hint: 'Service locator abstracts service discovery mechanism.'
},
{
  id: 'cpp_abstraction_47',
  topicId: 'cpp_abstraction',
  question: 'Use CRTP for static interface abstraction.',
  mathSolution: 'CRTP enables static polymorphism without virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() {\n        static_cast<Derived*>(this)->implementation();\n    }\n    \n    void common() {\n        cout << "Common functionality" << endl;\n        static_cast<Derived*>(this)->implementation();\n    }\n};\n\nclass Derived1 : public Base<Derived1> {\npublic:\n    void implementation() {\n        cout << "Derived1 implementation" << endl;\n    }\n};\n\nclass Derived2 : public Base<Derived2> {\npublic:\n    void implementation() {\n        cout << "Derived2 implementation" << endl;\n    }\n};\n\ntemplate<typename T>\nvoid process(Base<T>& obj) {\n    obj.common();\n}\n\nint main() {\n    Derived1 d1;\n    Derived2 d2;\n    \n    d1.interface();\n    d2.interface();\n    \n    process(d1);\n    process(d2);\n    \n    return 0;\n}',
  hint: 'CRTP provides static abstraction without virtual overhead.'
},
{
  id: 'cpp_abstraction_48',
  topicId: 'cpp_abstraction',
  question: 'Use type erasure for runtime type abstraction.',
  mathSolution: 'Type erasure hides concrete types behind uniform interface.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Printable {\nprivate:\n    struct Concept {\n        virtual void print() const = 0;\n        virtual ~Concept() {}\n    };\n    \n    template<typename T>\n    struct Model : Concept {\n        T data;\n        Model(const T& d) : data(d) {}\n        void print() const override { cout << data; }\n    };\n    \n    unique_ptr<Concept> pimpl;\n    \npublic:\n    template<typename T>\n    Printable(const T& value) : pimpl(make_unique<Model<T>>(value)) {}\n    \n    void print() const { pimpl->print(); }\n};\n\nint main() {\n    Printable p1(42);\n    Printable p2(3.14);\n    Printable p3(string(\"Hello\"));\n    \n    p1.print(); cout << endl;\n    p2.print(); cout << endl;\n    p3.print(); cout << endl;\n    \n    return 0;\n}',
  hint: 'Type erasure abstracts concrete types behind common interface.'
},
{
  id: 'cpp_abstraction_49',
  topicId: 'cpp_abstraction',
  question: 'Use policy-based design for behavioral abstraction.',
  mathSolution: 'Policies abstract algorithms into template parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Policies\ntemplate<typename T>\nstruct AddPolicy {\n    T apply(const T& a, const T& b) const { return a + b; }\n};\n\ntemplate<typename T>\nstruct MultiplyPolicy {\n    T apply(const T& a, const T& b) const { return a * b; }\n};\n\ntemplate<typename T>\nstruct MaxPolicy {\n    T apply(const T& a, const T& b) const { return (a > b) ? a : b; }\n};\n\n// Class using policy\ntemplate<typename T, typename Operation = AddPolicy<T>>\nclass Calculator {\nprivate:\n    Operation op;\n    \npublic:\n    T compute(const T& a, const T& b) const {\n        return op.apply(a, b);\n    }\n};\n\nint main() {\n    Calculator<int, AddPolicy<int>> addCalc;\n    Calculator<int, MultiplyPolicy<int>> mulCalc;\n    Calculator<int, MaxPolicy<int>> maxCalc;\n    \n    cout << addCalc.compute(5, 3) << endl;\n    cout << mulCalc.compute(5, 3) << endl;\n    cout << maxCalc.compute(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'Policy-based design abstracts behavior through template parameters.'
},
{
  id: 'cpp_abstraction_50',
  topicId: 'cpp_abstraction',
  question: 'Create comprehensive abstraction demonstration program.',
  mathSolution: 'Combine multiple abstraction techniques in one example.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <functional>\n#include <vector>\nusing namespace std;\n\n// 1. Interface abstraction\nclass Drawable {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Drawable() {}\n};\n\n// 2. Implementation abstraction through private members\nclass Circle : public Drawable {\nprivate:\n    double radius;\n    string color;\n    \npublic:\n    Circle(double r, const string& c) : radius(r), color(c) {}\n    void draw() const override {\n        cout << \"Drawing \" << color << \" circle with radius \" << radius << endl;\n    }\n};\n\n// 3. Factory abstraction\nclass ShapeFactory {\npublic:\n    static unique_ptr<Drawable> createCircle(double r, const string& c) {\n        return make_unique<Circle>(r, c);\n    }\n};\n\n// 4. Type abstraction (using)\nusing ShapePtr = unique_ptr<Drawable>;\nusing ShapeCollection = vector<ShapePtr>;\n\n// 5. Algorithm abstraction via lambda\nclass Renderer {\npublic:\n    static void renderAll(const ShapeCollection& shapes, function<void(const Drawable&)> renderer) {\n        for (const auto& shape : shapes) {\n            renderer(*shape);\n        }\n    }\n};\n\n// 6. CRTP for static polymorphism\ntemplate<typename Derived>\nclass ShapeBase {\npublic:\n    void info() const {\n        cout << \"Shape type: \";\n        static_cast<const Derived*>(this)->printType();\n    }\n};\n\nclass Rectangle : public ShapeBase<Rectangle>, public Drawable {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    void draw() const override {\n        cout << \"Drawing rectangle \" << width << \"x\" << height << endl;\n    }\n    void printType() const { cout << \"Rectangle\" << endl; }\n};\n\n// 7. Policy-based design\ntemplate<typename T, typename DrawPolicy>\nclass ColoredShape : public Drawable {\nprivate:\n    T shape;\n    DrawPolicy policy;\n    \npublic:\n    ColoredShape(const T& s) : shape(s) {}\n    void draw() const override {\n        policy.draw(shape);\n    }\n};\n\nstruct SimpleDraw {\n    void draw(const Drawable& shape) const { shape.draw(); }\n};\n\nint main() {\n    cout << \"=== Abstraction Demonstration ===\\n\\n\";\n    \n    // Factory abstraction\n    ShapeCollection shapes;\n    shapes.push_back(ShapeFactory::createCircle(5, \"red\"));\n    shapes.push_back(ShapeFactory::createCircle(3, \"blue\"));\n    shapes.push_back(make_unique<Rectangle>(4, 6));\n    \n    // Runtime polymorphism\n    cout << \"1. Runtime Polymorphism:\\n\";\n    for (const auto& shape : shapes) {\n        shape->draw();\n    }\n    \n    // Algorithm abstraction\n    cout << \"\\n2. Algorithm Abstraction with lambdas:\\n\";\n    Renderer::renderAll(shapes, [](const Drawable& s) { s.draw(); });\n    \n    // Static polymorphism (CRTP)\n    cout << \"\\n3. Static Polymorphism (CRTP):\\n\";\n    Rectangle rect(5, 7);\n    rect.info();\n    \n    // Policy-based design\n    cout << \"\\n4. Policy-Based Design:\\n\";\n    ColoredShape<Circle, SimpleDraw> coloredCircle(Circle(2, \"green\"));\n    coloredCircle.draw();\n    \n    // Type abstraction\n    cout << \"\\n5. Type Abstraction (using & typedef):\\n\";\n    ShapeCollection shapes2;\n    shapes2.push_back(make_unique<Circle>(4, \"yellow\"));\n    shapes2.push_back(make_unique<Rectangle>(3, 5));\n    \n    for (ShapePtr& s : shapes2) {\n        s->draw();\n    }\n    \n    cout << \"\\n=== End of Abstraction Demo ===\\n\";\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of multiple abstraction techniques.'
}
);