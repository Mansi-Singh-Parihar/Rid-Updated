QuizData.questions.push(
{
  id: 'cpp_constructors_1',
  topicId: 'cpp_constructors',
  question: 'Create a class with a default constructor (no parameters).',
  mathSolution: 'Default constructor initializes object with default values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    // Default constructor\n    Student() {\n        name = "Unknown";\n        age = 0;\n        cout << "Default constructor called" << endl;\n    }\n    \n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    Student s1;  // Default constructor called\n    s1.display();\n    return 0;\n}',
  hint: 'Default constructor has no parameters and is called when object is created without arguments.'
},
{
  id: 'cpp_constructors_2',
  topicId: 'cpp_constructors',
  question: 'Create a class with a parameterized constructor.',
  mathSolution: 'Parameterized constructor allows initialization with specific values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double length, width;\n    \npublic:\n    // Parameterized constructor\n    Rectangle(double l, double w) {\n        length = l;\n        width = w;\n        cout << "Rectangle created: " << length << "x" << width << endl;\n    }\n    \n    double area() {\n        return length * width;\n    }\n};\n\nint main() {\n    Rectangle rect1(5.0, 3.0);\n    Rectangle rect2(10.0, 4.0);\n    \n    cout << "Area: " << rect1.area() << endl;\n    cout << "Area: " << rect2.area() << endl;\n    \n    return 0;\n}',
  hint: 'Parameterized constructors accept arguments to initialize object with custom values.'
},
{
  id: 'cpp_constructors_3',
  topicId: 'cpp_constructors',
  question: 'Use constructor initializer list instead of assignment in body.',
  mathSolution: 'Initializer list initializes members before constructor body executes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    const int x;  // const member must use initializer list\n    const int y;\n    int& ref;     // reference must use initializer list\n    \npublic:\n    // Initializer list (more efficient)\n    Point(int a, int b, int& r) : x(a), y(b), ref(r) {\n        cout << "Point created at (" << x << "," << y << ")" << endl;\n    }\n    \n    void display() {\n        cout << "Point(" << x << "," << y << "), ref = " << ref << endl;\n    }\n};\n\nint main() {\n    int value = 100;\n    Point p(10, 20, value);\n    p.display();\n    \n    return 0;\n}',
  hint: 'Use initializer list for const members, references, and for efficiency.'
},
{
  id: 'cpp_constructors_4',
  topicId: 'cpp_constructors',
  question: 'Create a class with multiple constructors (constructor overloading).',
  mathSolution: 'Multiple constructors with different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length, width, height;\n    \npublic:\n    // Default constructor\n    Box() : length(1), width(1), height(1) {\n        cout << "Default box created" << endl;\n    }\n    \n    // Constructor with one parameter (cube)\n    Box(int side) : length(side), width(side), height(side) {\n        cout << "Cube box created: " << side << endl;\n    }\n    \n    // Constructor with three parameters\n    Box(int l, int w, int h) : length(l), width(w), height(h) {\n        cout << "Box created: " << l << "x" << w << "x" << h << endl;\n    }\n    \n    int volume() {\n        return length * width * height;\n    }\n};\n\nint main() {\n    Box b1;\n    Box b2(5);\n    Box b3(4, 3, 2);\n    \n    cout << "Volume b2: " << b2.volume() << endl;\n    \n    return 0;\n}',
  hint: 'Constructor overloading provides multiple ways to create objects.'
},
{
  id: 'cpp_constructors_5',
  topicId: 'cpp_constructors',
  question: 'Use default parameters in constructor.',
  mathSolution: 'Default parameters reduce number of constructors needed.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Timer {\nprivate:\n    int hours, minutes, seconds;\n    \npublic:\n    // Constructor with default parameters\n    Timer(int h = 0, int m = 0, int s = 0) : hours(h), minutes(m), seconds(s) {\n        cout << "Timer created: " << hours << "h " << minutes << "m " << seconds << "s" << endl;\n    }\n    \n    int totalSeconds() {\n        return hours * 3600 + minutes * 60 + seconds;\n    }\n};\n\nint main() {\n    Timer t1;                 // 0,0,0\n    Timer t2(2);              // 2,0,0\n    Timer t3(1, 30);          // 1,30,0\n    Timer t4(0, 10, 15);      // 0,10,15\n    \n    cout << "t2 total seconds: " << t2.totalSeconds() << endl;\n    \n    return 0;\n}',
  hint: 'Default parameters must be placed from rightmost to leftmost.'
},
{
  id: 'cpp_constructors_6',
  topicId: 'cpp_constructors',
  question: 'Create a copy constructor for deep copying.',
  mathSolution: 'Copy constructor creates a new object as copy of existing object.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* str;\n    int length;\n    \npublic:\n    // Constructor\n    String(const char* s) {\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n        cout << "String created: " << str << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    String(const String& other) {\n        length = other.length;\n        str = new char[length + 1];\n        strcpy(str, other.str);\n        cout << "Copy constructor called: " << str << endl;\n    }\n    \n    // Destructor\n    ~String() {\n        delete[] str;\n        cout << "String destroyed" << endl;\n    }\n    \n    void display() {\n        cout << str << endl;\n    }\n    \n    void modify(const char* s) {\n        delete[] str;\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;  // Copy constructor called\n    \n    s1.display();\n    s2.display();\n    \n    s1.modify("World");\n    \n    cout << "After modifying s1:\\n";\n    s1.display();\n    s2.display();  // Unchanged - deep copy\n    \n    return 0;\n}',
  hint: 'Copy constructor is called when object is passed by value or initialized from another object.'
},
{
  id: 'cpp_constructors_7',
  topicId: 'cpp_constructors',
  question: 'Prevent copying by deleting copy constructor.',
  mathSolution: 'Delete copy constructor to make class non-copyable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass UniqueResource {\nprivate:\n    int* data;\n    \npublic:\n    UniqueResource(int size) {\n        data = new int[size];\n        cout << "Resource allocated" << endl;\n    }\n    \n    ~UniqueResource() {\n        delete[] data;\n        cout << "Resource freed" << endl;\n    }\n    \n    // Delete copy constructor and copy assignment\n    UniqueResource(const UniqueResource&) = delete;\n    UniqueResource& operator=(const UniqueResource&) = delete;\n    \n    // Move constructor\n    UniqueResource(UniqueResource&& other) noexcept : data(other.data) {\n        other.data = nullptr;\n        cout << "Resource moved" << endl;\n    }\n    \n    void use() {\n        cout << "Using resource" << endl;\n    }\n};\n\nint main() {\n    UniqueResource res1(100);\n    UniqueResource res2 = move(res1);  // Move, not copy\n    \n    // UniqueResource res3 = res1;  // Error: copy constructor is deleted\n    \n    res2.use();\n    \n    return 0;\n}',
  hint: 'Delete copy constructor to enforce move-only or singleton semantics.'
},
{
  id: 'cpp_constructors_8',
  topicId: 'cpp_constructors',
  question: 'Create a move constructor for efficient transfer of resources.',
  mathSolution: 'Move constructor transfers ownership of resources.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor\n    Buffer(size_t s) : size(s) {\n        data = new int[size];\n        cout << "Buffer of size " << size << " allocated" << endl;\n    }\n    \n    // Destructor\n    ~Buffer() {\n        delete[] data;\n        cout << "Buffer destroyed" << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    Buffer(const Buffer& other) : size(other.size) {\n        data = new int[size];\n        copy(other.data, other.data + size, data);\n        cout << "Copy constructor (deep copy)" << endl;\n    }\n    \n    // Move constructor\n    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "Move constructor (transfer ownership)" << endl;\n    }\n    \n    void fill(int value) {\n        for (size_t i = 0; i < size; i++) data[i] = value;\n    }\n    \n    void display() {\n        cout << "Buffer[" << size << "]: ";\n        for (size_t i = 0; i < min(size, (size_t)5); i++) {\n            cout << data[i] << " ";\n        }\n        if (size > 5) cout << "...";\n        cout << endl;\n    }\n};\n\nint main() {\n    Buffer b1(1000);\n    b1.fill(42);\n    \n    Buffer b2 = move(b1);  // Move constructor\n    \n    b2.display();\n    // b1 is now in valid but unspecified state\n    \n    return 0;\n}',
  hint: 'Move constructor is called when object is initialized with std::move().'
},
{
  id: 'cpp_constructors_9',
  topicId: 'cpp_constructors',
  question: 'Use delegating constructor to call another constructor.',
  mathSolution: 'One constructor can call another constructor in same class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Employee {\nprivate:\n    string name;\n    int id;\n    double salary;\n    string department;\n    \npublic:\n    // Primary constructor\n    Employee(string n, int i, double s, string d) \n        : name(n), id(i), salary(s), department(d) {\n        cout << \"Full constructor called\" << endl;\n    }\n    \n    // Delegating constructor (name only)\n    Employee(string n) : Employee(n, 0, 0.0, \"Unknown\") {\n        cout << \"Name-only constructor delegating\" << endl;\n    }\n    \n    // Delegating constructor (name and id)\n    Employee(string n, int i) : Employee(n, i, 0.0, \"Unknown\") {\n        cout << \"Name and ID constructor delegating\" << endl;\n    }\n    \n    // Delegating constructor (name, id, salary)\n    Employee(string n, int i, double s) : Employee(n, i, s, \"General\") {\n        cout << \"Salary constructor delegating\" << endl;\n    }\n    \n    void display() {\n        cout << name << \" (ID: \" << id << \") - $\" << salary << \", \" << department << endl;\n    }\n};\n\nint main() {\n    Employee e1(\"John\");\n    Employee e2(\"Alice\", 101);\n    Employee e3(\"Bob\", 102, 50000);\n    Employee e4(\"Charlie\", 103, 60000, \"IT\");\n    \n    cout << \"\\n--- Employee Details ---\" << endl;\n    e1.display();\n    e2.display();\n    e3.display();\n    e4.display();\n    \n    return 0;\n}',
  hint: 'Delegating constructors reduce code duplication and improve maintainability.'
},
{
  id: 'cpp_constructors_10',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that throws an exception on invalid input.',
  mathSolution: 'Constructors can throw exceptions to indicate failure.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    string accountNumber;\n    double balance;\n    \npublic:\n    BankAccount(string accNum, double initialBalance) \n        : accountNumber(accNum), balance(initialBalance) {\n        if (accNum.empty()) {\n            throw invalid_argument(\"Account number cannot be empty\");\n        }\n        if (initialBalance < 0) {\n            throw invalid_argument(\"Initial balance cannot be negative\");\n        }\n        cout << \"Account \" << accountNumber << \" created with $\" << balance << endl;\n    }\n    \n    void deposit(double amount) {\n        if (amount <= 0) throw invalid_argument(\"Deposit amount must be positive\");\n        balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount <= 0) throw invalid_argument(\"Withdrawal amount must be positive\");\n        if (amount > balance) throw runtime_error(\"Insufficient funds\");\n        balance -= amount;\n    }\n    \n    double getBalance() const { return balance; }\n};\n\nint main() {\n    try {\n        BankAccount acc1(\"12345\", 1000);\n        BankAccount acc2(\"\", 500);  // Will throw\n    } catch (const invalid_argument& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    \n    try {\n        BankAccount acc3(\"67890\", -100);  // Will throw\n    } catch (const invalid_argument& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Throwing exceptions in constructor prevents creation of invalid objects.'
},
{
  id: 'cpp_constructors_11',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes const members using initializer list.',
  mathSolution: 'const members must be initialized in initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Config {\nprivate:\n    const string VERSION;\n    const int MAX_USERS;\n    const double PI;\n    \npublic:\n    // Const members must use initializer list\n    Config(string version, int maxUsers, double pi) \n        : VERSION(version), MAX_USERS(maxUsers), PI(pi) {\n        cout << \"Configuration created\" << endl;\n    }\n    \n    void display() const {\n        cout << \"Version: \" << VERSION << endl;\n        cout << \"Max Users: \" << MAX_USERS << endl;\n        cout << \"PI: \" << PI << endl;\n    }\n};\n\nint main() {\n    Config config(\"1.0\", 1000, 3.14159);\n    config.display();\n    \n    return 0;\n}',
  hint: 'const members can only be assigned in initializer list, not in constructor body.'
},
{
  id: 'cpp_constructors_12',
  topicId: 'cpp_constructors',
  question: 'Initialize reference members using initializer list.',
  mathSolution: 'References must be initialized in initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Logger {\npublic:\n    void log(const string& msg) {\n        cout << \"[LOG] \" << msg << endl;\n    }\n};\n\nclass DataProcessor {\nprivate:\n    Logger& logger;  // Reference member\n    string name;\n    \npublic:\n    // Reference must be initialized in initializer list\n    DataProcessor(string n, Logger& log) : name(n), logger(log) {\n        cout << \"DataProcessor created: \" << name << endl;\n    }\n    \n    void process() {\n        logger.log(\"Processing data for \" + name);\n        // Processing logic...\n        logger.log(\"Processing complete for \" + name);\n    }\n};\n\nint main() {\n    Logger logger;\n    DataProcessor processor(\"Database\", logger);\n    processor.process();\n    \n    return 0;\n}',
  hint: 'Reference members must be initialized in initializer list, cannot be assigned in body.'
},
{
  id: 'cpp_constructors_13',
  topicId: 'cpp_constructors',
  question: 'Initialize base class constructor in derived class.',
  mathSolution: 'Derived class constructor calls base class constructor via initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int year;\n    \npublic:\n    Vehicle(string b, int y) : brand(b), year(y) {\n        cout << \"Vehicle constructor called\" << endl;\n    }\n    \n    void display() {\n        cout << brand << \" \" << year << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \npublic:\n    Car(string b, string m, int y) : Vehicle(b, y), model(m) {\n        cout << \"Car constructor called\" << endl;\n    }\n    \n    void displayCar() {\n        cout << brand << \" \" << model << \" \" << year << endl;\n    }\n};\n\nclass SportsCar : public Car {\nprivate:\n    int topSpeed;\n    \npublic:\n    SportsCar(string b, string m, int y, int speed) : Car(b, m, y), topSpeed(speed) {\n        cout << \"SportsCar constructor called\" << endl;\n    }\n    \n    void displaySports() {\n        cout << brand << \" \" << model << \", \" << year << \", \" << topSpeed << \" km/h\" << endl;\n    }\n};\n\nint main() {\n    SportsCar ferrari(\"Ferrari\", \"F8\", 2023, 340);\n    ferrari.displaySports();\n    \n    return 0;\n}',
  hint: 'Base class constructor is called before derived class constructor body.'
},
{
  id: 'cpp_constructors_14',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with explicit keyword to prevent implicit conversion.',
  mathSolution: 'explicit prevents compiler from using constructor for implicit conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    // Explicit constructor prevents implicit conversion\n    explicit Integer(int v) : value(v) {\n        cout << \"Integer created with value: \" << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    // Non-explicit constructor (implicit conversion allowed)\n    Complex(double r) : real(r), imag(0) {}\n    \n    Complex(double r, double i) : real(r), imag(i) {}\n    \n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    // Integer i1 = 10;  // Error: implicit conversion not allowed\n    Integer i2(10);      // OK: explicit call\n    Integer i3 = Integer(20);  // OK: explicit construction\n    \n    Complex c1 = 5.5;     // OK: implicit conversion (constructor not explicit)\n    Complex c2(3.0, 4.0);\n    \n    cout << \"Integer value: \" << i2.getValue() << endl;\n    c1.display();\n    c2.display();\n    \n    return 0;\n}',
  hint: 'Use explicit to prevent unexpected implicit conversions that can cause bugs.'
},
{
  id: 'cpp_constructors_15',
  topicId: 'cpp_constructors',
  question: 'Create a class with static member initialization.',
  mathSolution: 'Static members are initialized outside the class definition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int totalObjects;\n    int id;\n    \npublic:\n    Counter() {\n        totalObjects++;\n        id = totalObjects;\n        cout << \"Object \" << id << \" created. Total: \" << totalObjects << endl;\n    }\n    \n    ~Counter() {\n        cout << \"Object \" << id << \" destroyed. Remaining: \" << --totalObjects << endl;\n    }\n    \n    static int getTotalObjects() {\n        return totalObjects;\n    }\n};\n\n// Static member initialization outside class\nint Counter::totalObjects = 0;\n\nint main() {\n    cout << \"Initial total: \" << Counter::getTotalObjects() << endl;\n    \n    Counter c1;\n    Counter c2;\n    {\n        Counter c3;\n        cout << \"Inside block, total: \" << Counter::getTotalObjects() << endl;\n    }\n    \n    cout << \"After block, total: \" << Counter::getTotalObjects() << endl;\n    \n    return 0;\n}',
  hint: 'Static members are shared across all instances and initialized outside class.'
},
{
  id: 'cpp_constructors_16',
  topicId: 'cpp_constructors',
  question: 'Use inline static member initialization (C++17).',
  mathSolution: 'Inline static members can be initialized inside class definition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Configuration {\npublic:\n    inline static string appName = "MyApplication";\n    inline static int version = 1;\n    inline static const double PI = 3.14159;\n    inline static const string author = "John Doe";\n    \n    static void showConfig() {\n        cout << appName << " v" << version << " by " << author << endl;\n    }\n};\n\nclass Counter {\nprivate:\n    inline static int count = 0;\n    int id;\n    \npublic:\n    Counter() : id(++count) {}\n    \n    static int getCount() { return count; }\n    int getId() const { return id; }\n};\n\nint main() {\n    Configuration::appName = "NewApp";\n    Configuration::showConfig();\n    \n    Counter c1, c2, c3;\n    cout << "Created " << Counter::getCount() << " objects" << endl;\n    \n    return 0;\n}',
  hint: 'C++17 allows inline static member initialization inside the class.'
},
{
  id: 'cpp_constructors_17',
  topicId: 'cpp_constructors',
  question: 'Create a constexpr constructor for compile-time objects.',
  mathSolution: 'constexpr constructor allows object creation at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n    \n    constexpr Point operator+(const Point& other) const {\n        return Point(x + other.x, y + other.y);\n    }\n    \n    void display() const {\n        cout << \"(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    // Compile-time construction\n    constexpr Point p1(10, 20);\n    constexpr Point p2(5, 5);\n    constexpr Point p3 = p1 + p2;\n    \n    // Compile-time array size\n    int arr[p3.getX()];  // Valid if p3.getX() is constexpr\n    \n    cout << \"p3: \";\n    p3.display();\n    cout << \"Array size: \" << sizeof(arr)/sizeof(arr[0]) << endl;\n    \n    // Runtime construction also works\n    int a = 30, b = 40;\n    Point p4(a, b);\n    p4.display();\n    \n    return 0;\n}',
  hint: 'constexpr constructors enable compile-time object creation and compile-time computations.'
},
{
  id: 'cpp_constructors_18',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using uniform initialization {}.',
  mathSolution: 'Uniform initialization braces {} can be used to call constructors.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    double gpa;\n    \npublic:\n    Student(string n, int a, double g) : name(n), age(a), gpa(g) {\n        cout << \"Student created: \" << name << endl;\n    }\n    \n    void display() {\n        cout << name << \", \" << age << \", GPA: \" << gpa << endl;\n    }\n};\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    Point(int a, int b) : x(a), y(b) {}\n    \n    void display() {\n        cout << \"Point(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    // Different initialization syntaxes\n    Student s1{\"Alice\", 20, 3.8};      // Uniform initialization\n    Student s2 = {\"Bob\", 22, 3.5};     // Copy list initialization\n    Student s3(\"Charlie\", 21, 3.9);    // Direct initialization\n    \n    vector<int> v{1, 2, 3, 4, 5};      // Initializer list\n    Point p{10, 20};\n    \n    s1.display();\n    s2.display();\n    s3.display();\n    p.display();\n    \n    return 0;\n}',
  hint: 'Uniform initialization {} works for arrays, containers, and custom classes.'
},
{
  id: 'cpp_constructors_19',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that takes initializer_list parameter.',
  mathSolution: 'initializer_list allows variable number of arguments.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\nclass IntArray {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor with initializer_list\n    IntArray(initializer_list<int> list) : size(list.size()) {\n        data = new int[size];\n        size_t i = 0;\n        for (int val : list) {\n            data[i++] = val;\n        }\n        cout << \"Array created with \" << size << \" elements\" << endl;\n    }\n    \n    ~IntArray() {\n        delete[] data;\n    }\n    \n    void display() {\n        cout << \"[\";\n        for (size_t i = 0; i < size; i++) {\n            cout << data[i];\n            if (i < size - 1) cout << \", \";\n        }\n        cout << \"]\" << endl;\n    }\n    \n    size_t getSize() const { return size; }\n};\n\nclass Matrix {\nprivate:\n    vector<vector<int>> data;\n    \npublic:\n    Matrix(initializer_list<initializer_list<int>> list) {\n        for (auto row : list) {\n            data.push_back(row);\n        }\n    }\n    \n    void display() {\n        for (auto& row : data) {\n            for (int val : row) {\n                cout << val << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    IntArray arr = {1, 2, 3, 4, 5};\n    arr.display();\n    \n    IntArray arr2{10, 20, 30};\n    arr2.display();\n    \n    Matrix mat = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    mat.display();\n    \n    return 0;\n}',
  hint: 'initializer_list constructors enable brace-initialization like arrays.'
},
{
  id: 'cpp_constructors_20',
  topicId: 'cpp_constructors',
  question: 'Create base and derived class constructors with different parameters.',
  mathSolution: 'Derived class constructor passes parameters to base constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Employee {\nprotected:\n    string name;\n    int id;\n    \npublic:\n    Employee(string n, int i) : name(n), id(i) {\n        cout << \"Employee constructor: \" << name << \" (ID: \" << id << \")\" << endl;\n    }\n    \n    void display() {\n        cout << name << \" - ID: \" << id << endl;\n    }\n};\n\nclass Manager : public Employee {\nprivate:\n    int teamSize;\n    \npublic:\n    Manager(string n, int i, int ts) : Employee(n, i), teamSize(ts) {\n        cout << \"Manager constructor: team size \" << teamSize << endl;\n    }\n    \n    void display() {\n        cout << name << \" (Manager) - ID: \" << id << \", Team: \" << teamSize << endl;\n    }\n};\n\nclass Director : public Manager {\nprivate:\n    int budget;\n    \npublic:\n    Director(string n, int i, int ts, int b) : Manager(n, i, ts), budget(b) {\n        cout << \"Director constructor: budget $\" << budget << endl;\n    }\n    \n    void display() {\n        cout << name << \" (Director) - ID: \" << id \n             << \", Team: \" << teamSize << \", Budget: $\" << budget << endl;\n    }\n};\n\nint main() {\n    Director dir(\"Alice\", 1001, 10, 500000);\n    cout << \"\\n--- Details ---\" << endl;\n    dir.display();\n    \n    return 0;\n}',
  hint: 'Base class constructor is called before derived class members are initialized.'
},
{
  id: 'cpp_constructors_21',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that initializes array members.',
  mathSolution: 'Array members can be initialized in initializer list or loop.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass ScoreBoard {\nprivate:\n    int scores[5];\n    \npublic:\n    // Initialize array in constructor body\n    ScoreBoard() {\n        for (int i = 0; i < 5; i++) {\n            scores[i] = 0;\n        }\n        cout << \"ScoreBoard initialized with zeros\" << endl;\n    }\n    \n    // Initialize array with values\n    ScoreBoard(int s1, int s2, int s3, int s4, int s5) {\n        scores[0] = s1;\n        scores[1] = s2;\n        scores[2] = s3;\n        scores[3] = s4;\n        scores[4] = s5;\n        cout << \"ScoreBoard initialized with custom values\" << endl;\n    }\n    \n    void display() {\n        for (int i = 0; i < 5; i++) {\n            cout << scores[i] << \" \";\n        }\n        cout << endl;\n    }\n};\n\nclass Matrix {\nprivate:\n    int data[3][3];\n    \npublic:\n    // Initialize 2D array with values\n    Matrix(int arr[3][3]) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                data[i][j] = arr[i][j];\n            }\n        }\n    }\n    \n    void display() {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    ScoreBoard sb1;\n    ScoreBoard sb2(10, 20, 30, 40, 50);\n    \n    sb1.display();\n    sb2.display();\n    \n    int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    Matrix mat(arr);\n    mat.display();\n    \n    return 0;\n}',
  hint: 'Array members can be initialized using loops or initializer lists in C++11.'
},
{
  id: 'cpp_constructors_22',
  topicId: 'cpp_constructors',
  question: 'Create a class with multiple constructors including copy and move.',
  mathSolution: 'Provide different constructors for different use cases.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Document {\nprivate:\n    string title;\n    string* content;\n    size_t length;\n    \npublic:\n    // Default constructor\n    Document() : title(\"Untitled\"), content(nullptr), length(0) {\n        cout << \"Default constructor\" << endl;\n    }\n    \n    // Parameterized constructor\n    Document(const string& t, const string& c) : title(t) {\n        length = c.length();\n        content = new char[length + 1];\n        strcpy(content, c.c_str());\n        cout << \"Parameterized constructor: \" << title << endl;\n    }\n    \n    // Copy constructor\n    Document(const Document& other) : title(other.title) {\n        length = other.length;\n        content = new char[length + 1];\n        strcpy(content, other.content);\n        cout << \"Copy constructor: \" << title << endl;\n    }\n    \n    // Move constructor\n    Document(Document&& other) noexcept \n        : title(move(other.title)), content(other.content), length(other.length) {\n        other.content = nullptr;\n        other.length = 0;\n        cout << \"Move constructor: \" << title << endl;\n    }\n    \n    // Destructor\n    ~Document() {\n        delete[] content;\n        cout << \"Destructor: \" << title << endl;\n    }\n    \n    void display() {\n        cout << \"Title: \" << title << endl;\n        if (content) cout << \"Content: \" << content << endl;\n    }\n};\n\nint main() {\n    Document doc1(\"Report\", \"Annual report content\");\n    Document doc2 = doc1;  // Copy\n    Document doc3 = move(doc1);  // Move\n    \n    doc2.display();\n    doc3.display();\n    \n    return 0;\n}',
  hint: 'Provide multiple constructors for different object creation scenarios.'
},
{
  id: 'cpp_constructors_23',
  topicId: 'cpp_constructors',
  question: 'Use = default for compiler-generated constructors.',
  mathSolution: 'default keyword requests compiler-generated default implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SimpleClass {\npublic:\n    // Request compiler-generated default constructor\n    SimpleClass() = default;\n    \n    // Request compiler-generated copy constructor\n    SimpleClass(const SimpleClass&) = default;\n    \n    // Request compiler-generated copy assignment\n    SimpleClass& operator=(const SimpleClass&) = default;\n    \n    // Request compiler-generated destructor\n    ~SimpleClass() = default;\n    \n    int value = 42;\n    string name = \"Default\";\n};\n\nclass ExplicitClass {\npublic:\n    ExplicitClass(int v) : value(v) {}\n    \n    // Default constructor still available with = default\n    ExplicitClass() = default;\n    \n    // Copy constructor explicitly defaulted\n    ExplicitClass(const ExplicitClass&) = default;\n    \n    int value = 0;\n};\n\nint main() {\n    SimpleClass s1;\n    SimpleClass s2 = s1;\n    \n    cout << s1.value << \", \" << s1.name << endl;\n    \n    ExplicitClass e1(100);\n    ExplicitClass e2;  // Default constructor\n    ExplicitClass e3 = e1;\n    \n    cout << e1.value << \", \" << e2.value << \", \" << e3.value << endl;\n    \n    return 0;\n}',
  hint: '= default is clearer than empty braces and preserves triviality.'
},
{
  id: 'cpp_constructors_24',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes vector member.',
  mathSolution: 'Initialize vector with specific values in constructor.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass DataSet {\nprivate:\n    vector<int> data;\n    string name;\n    \npublic:\n    // Default constructor\n    DataSet() : name(\"Empty\") {\n        cout << \"Empty dataset created\" << endl;\n    }\n    \n    // Constructor with initializer list\n    DataSet(initializer_list<int> list) : data(list), name(\"Initialized\") {\n        cout << \"Dataset with \" << data.size() << \" elements created\" << endl;\n    }\n    \n    // Constructor with size and default value\n    DataSet(size_t size, int defaultValue) : data(size, defaultValue), name(\"Filled\") {\n        cout << \"Dataset with \" << size << \" elements filled with \" << defaultValue << endl;\n    }\n    \n    // Constructor from another vector\n    DataSet(const vector<int>& vec, const string& n) : data(vec), name(n) {\n        cout << \"Dataset copied from vector: \" << name << endl;\n    }\n    \n    void display() {\n        cout << name << \": [\";\n        for (size_t i = 0; i < data.size() && i < 10; i++) {\n            cout << data[i];\n            if (i < data.size() - 1 && i < 9) cout << \", \";\n        }\n        if (data.size() > 10) cout << \", ...\";\n        cout << \"] (\" << data.size() << \" elements)\" << endl;\n    }\n};\n\nint main() {\n    DataSet d1;\n    DataSet d2 = {1, 2, 3, 4, 5};\n    DataSet d3(10, 0);\n    \n    vector<int> vec = {100, 200, 300};\n    DataSet d4(vec, \"Custom\");\n    \n    d1.display();\n    d2.display();\n    d3.display();\n    d4.display();\n    \n    return 0;\n}',
  hint: 'Vector constructors can be leveraged in class constructors.'
},
{
  id: 'cpp_constructors_25',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses a builder pattern for complex initialization.',
  mathSolution: 'Builder pattern separates construction from representation.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass DatabaseConfig {\nprivate:\n    string host;\n    int port;\n    string username;\n    string password;\n    string database;\n    bool useSSL;\n    int timeout;\n    \n    // Private constructor (only Builder can create)\n    DatabaseConfig() : host(\"localhost\"), port(3306), useSSL(false), timeout(30) {}\n    \npublic:\n    // Builder class\n    class Builder {\n    private:\n        DatabaseConfig config;\n        \n    public:\n        Builder& setHost(const string& h) { config.host = h; return *this; }\n        Builder& setPort(int p) { config.port = p; return *this; }\n        Builder& setUsername(const string& u) { config.username = u; return *this; }\n        Builder& setPassword(const string& p) { config.password = p; return *this; }\n        Builder& setDatabase(const string& db) { config.database = db; return *this; }\n        Builder& setSSL(bool ssl) { config.useSSL = ssl; return *this; }\n        Builder& setTimeout(int t) { config.timeout = t; return *this; }\n        \n        DatabaseConfig build() { return config; }\n    };\n    \n    void display() {\n        cout << \"Database Configuration:\" << endl;\n        cout << \"  Host: \" << host << \":\" << port << endl;\n        cout << \"  Username: \" << username << endl;\n        cout << \"  Database: \" << database << endl;\n        cout << \"  SSL: \" << (useSSL ? \"Enabled\" : \"Disabled\") << endl;\n        cout << \"  Timeout: \" << timeout << \"s\" << endl;\n    }\n};\n\nint main() {\n    DatabaseConfig config = DatabaseConfig::Builder()\n        .setHost(\"db.example.com\")\n        .setPort(5432)\n        .setUsername(\"admin\")\n        .setPassword(\"secret\")\n        .setDatabase(\"production\")\n        .setSSL(true)\n        .setTimeout(60)\n        .build();\n    \n    config.display();\n    \n    return 0;\n}',
  hint: 'Builder pattern is useful for objects with many optional parameters.'
},
{
  id: 'cpp_constructors_26',
  topicId: 'cpp_constructors',
  question: 'Create a class where constructor initializes dynamically allocated 2D array.',
  mathSolution: 'Dynamic allocation of multi-dimensional arrays in constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Matrix2D {\nprivate:\n    int** data;\n    int rows, cols;\n    \npublic:\n    // Constructor allocates 2D array\n    Matrix2D(int r, int c) : rows(r), cols(c) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = 0;\n            }\n        }\n        cout << \"Matrix \" << rows << \"x\" << cols << \" created\" << endl;\n    }\n    \n    // Constructor with initialization value\n    Matrix2D(int r, int c, int initVal) : rows(r), cols(c) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = initVal;\n            }\n        }\n        cout << \"Matrix \" << rows << \"x\" << cols << \" filled with \" << initVal << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    Matrix2D(const Matrix2D& other) : rows(other.rows), cols(other.cols) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = other.data[i][j];\n            }\n        }\n        cout << \"Matrix copy constructor\" << endl;\n    }\n    \n    // Destructor\n    ~Matrix2D() {\n        for (int i = 0; i < rows; i++) {\n            delete[] data[i];\n        }\n        delete[] data;\n        cout << \"Matrix destroyed\" << endl;\n    }\n    \n    void setValue(int i, int j, int val) {\n        if (i >= 0 && i < rows && j >= 0 && j < cols) {\n            data[i][j] = val;\n        }\n    }\n    \n    void display() {\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    Matrix2D mat1(3, 4);\n    Matrix2D mat2(3, 4, 5);\n    Matrix2D mat3 = mat2;  // Copy constructor\n    \n    mat1.setValue(0, 0, 10);\n    mat1.setValue(1, 2, 20);\n    \n    cout << \"mat1:\" << endl;\n    mat1.display();\n    cout << \"mat2:\" << endl;\n    mat2.display();\n    \n    return 0;\n}',
  hint: 'Remember to implement proper destructor and copy constructor for dynamic resources.'
},
{
  "id": "cpp_constructors_27",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that initializes a thread member.",
  "mathSolution": "Thread can be started in constructor using lambda or callable.",
  "codeSolution": "#include <iostream>\n#include <thread>\n#include <chrono>\n#include <string>\nusing namespace std;\n\nclass AsyncProcessor {\nprivate:\n    thread worker;\n    bool running;\n    \npublic:\n    AsyncProcessor() : running(true) {\n        worker = thread([this]() {\n            int count = 0;\n            while (running && count < 5) {\n                cout << \"Processing... \" << count++ << endl;\n                this_thread::sleep_for(chrono::seconds(1));\n            }\n            cout << \"Worker thread finished\" << endl;\n        });\n        cout << \"AsyncProcessor constructor: thread started\" << endl;\n    }\n    \n    ~AsyncProcessor() {\n        running = false;\n        if (worker.joinable()) {\n            worker.join();\n        }\n        cout << \"AsyncProcessor destructor: thread joined\" << endl;\n    }\n};\n\nclass Timer {\nprivate:\n    thread timerThread;\n    \npublic:\n    Timer(int seconds, const string& message) {\n        timerThread = thread([seconds, message]() {\n            this_thread::sleep_for(chrono::seconds(seconds));\n            cout << \"Timer: \" << message << endl;\n        });\n        cout << \"Timer started for \" << seconds << \" seconds\" << endl;\n    }\n    \n    ~Timer() {\n        if (timerThread.joinable()) {\n            timerThread.join();\n        }\n    }\n};\n\nint main() {\n    {\n        AsyncProcessor processor;\n        this_thread::sleep_for(chrono::seconds(6));\n    }\n    \n    {\n        Timer timer(2, \"Time's up!\");\n        this_thread::sleep_for(chrono::seconds(3));\n    }\n    \n    return 0;\n}",
  "hint": "Be careful with thread lifecycle in constructors and destructors."
},
{
  "id": "cpp_constructors_28",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that opens a file for reading/writing.",
  "mathSolution": "File streams can be opened in constructor.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    fstream file;\n    string filename;\n    bool isOpen;\n    \npublic:\n    // Constructor opens file\n    FileHandler(const string& name, ios::openmode mode) \n        : filename(name), isOpen(false) {\n        file.open(name, mode);\n        if (file.is_open()) {\n            isOpen = true;\n            cout << \"File '\" << name << \"' opened successfully\" << endl;\n        } else {\n            cout << \"Failed to open file '\" << name << \"'\" << endl;\n        }\n    }\n    \n    // Constructor for reading entire file\n    FileHandler(const string& name) : FileHandler(name, ios::in) {}\n    \n    // Destructor closes file\n    ~FileHandler() {\n        if (file.is_open()) {\n            file.close();\n            cout << \"File '\" << filename << \"' closed\" << endl;\n        }\n    }\n    \n    bool isGood() const { return isOpen && file.good(); }\n    \n    void write(const string& data) {\n        if (isGood()) {\n            file << data << endl;\n        }\n    }\n    \n    string readLine() {\n        string line;\n        if (isGood() && getline(file, line)) {\n            return line;\n        }\n        return \"\";\n    }\n};\n\nint main() {\n    {\n        FileHandler writer(\"test.txt\", ios::out);\n        if (writer.isGood()) {\n            writer.write(\"Hello, World!\");\n            writer.write(\"Second line\");\n        }\n    }\n    \n    {\n        FileHandler reader(\"test.txt\", ios::in);\n        if (reader.isGood()) {\n            string line;\n            while ((line = reader.readLine()) != \"\") {\n                cout << \"Read: \" << line << endl;\n            }\n        }\n    }\n    \n    return 0;\n}",
  "hint": "Constructors are ideal for acquiring resources (RAII)."
},
{
  "id": "cpp_constructors_29",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that initializes member objects using member initializer list ordering.",
  "mathSolution": "Member initialization order follows declaration order, not initializer list order.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Member1 {\npublic:\n    Member1() { cout << \"Member1 default\" << endl; }\n    Member1(int x) { cout << \"Member1(\" << x << \")\" << endl; }\n};\n\nclass Member2 {\npublic:\n    Member2() { cout << \"Member2 default\" << endl; }\n    Member2(int y) { cout << \"Member2(\" << y << \")\" << endl; }\n};\n\nclass Container {\nprivate:\n    Member1 m1;  // Declared first\n    Member2 m2;  // Declared second\n    int value;\n    \npublic:\n    // Initializer list order doesn't matter - members initialized in declaration order\n    Container(int x, int y) : m2(y), m1(x), value(x + y) {\n        cout << \"Container constructor\" << endl;\n    }\n    \n    // Order: m1 then m2, regardless of initializer list\n    Container() : m2(10), m1(20) {\n        cout << \"Container default\" << endl;\n    }\n};\n\nint main() {\n    cout << \"Creating container with parameters:\" << endl;\n    Container c1(5, 15);\n    \n    cout << \"\\nCreating default container:\" << endl;\n    Container c2;\n    \n    return 0;\n}",
  "hint": "Member variables are initialized in the order they are declared, not the order in initializer list."
},
{
  id: 'cpp_constructors_30',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that prevents narrowing conversions.',
  mathSolution: 'Use braces {} to prevent narrowing in constructors.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    // Constructor with brace initialization prevents narrowing\n    Integer(int v) : value(v) {}\n    \n    void display() { cout << value << endl; }\n};\n\nclass StrictNumber {\nprivate:\n    int value;\n    \npublic:\n    // Using braces in constructor prevents narrowing\n    StrictNumber(int v) : value{v} {}\n    \n    void display() { cout << value << endl; }\n};\n\nint main() {\n    // Narrowing allowed with parentheses\n    Integer i1(3.14);  // Double to int narrowing - allowed, value becomes 3\n    \n    // Narrowing prevented with braces (compile error in C++11)\n    // StrictNumber s1(3.14);  // Error: narrowing conversion\n    StrictNumber s2(42);  // OK\n    \n    cout << \"Integer with narrowing: \";\n    i1.display();\n    \n    cout << \"StrictNumber: \";\n    s2.display();\n    \n    return 0;\n}',
  hint: 'Using {} initialization prevents narrowing conversions and improves type safety.'
},
{
  id: 'cpp_constructors_31',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with try-catch block (function try block).',
  mathSolution: 'Function try block catches exceptions in initializer list.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    Resource(size_t s) : size(s) {\n        if (s == 0) throw invalid_argument(\"Size cannot be zero\");\n        data = new int[size];\n        cout << \"Resource allocated: size \" << size << endl;\n    }\n    \n    ~Resource() {\n        delete[] data;\n        cout << \"Resource freed\" << endl;\n    }\n};\n\nclass SafeContainer {\nprivate:\n    Resource res1;\n    Resource res2;\n    \npublic:\n    // Function try block catches exceptions from member initializers\n    SafeContainer(int s1, int s2) \n        try : res1(s1), res2(s2) {\n        cout << \"SafeContainer created\" << endl;\n    } catch (const exception& e) {\n        cout << \"Caught in constructor: \" << e.what() << endl;\n        // Re-throw or handle\n        throw;\n    }\n    \n    ~SafeContainer() {\n        cout << \"SafeContainer destroyed\" << endl;\n    }\n};\n\nint main() {\n    try {\n        SafeContainer sc1(10, 20);  // OK\n    } catch (const exception& e) {\n        cout << \"Main caught: \" << e.what() << endl;\n    }\n    \n    try {\n        SafeContainer sc2(0, 10);  // Will throw in res1 constructor\n    } catch (const exception& e) {\n        cout << \"Main caught error: \" << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Function try blocks allow catching exceptions from member initializer lists.'
},
{
  id: 'cpp_constructors_32',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes a mutex (C++11 threading).',
  mathSolution: 'Mutex can be initialized in constructor for thread safety.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <vector>\nusing namespace std;\n\nclass ThreadSafeCounter {\nprivate:\n    mutable mutex mtx;\n    int count;\n    \npublic:\n    ThreadSafeCounter() : count(0) {\n        cout << \"Counter initialized\" << endl;\n    }\n    \n    void increment() {\n        lock_guard<mutex> lock(mtx);\n        count++;\n    }\n    \n    int get() const {\n        lock_guard<mutex> lock(mtx);\n        return count;\n    }\n};\n\nclass DataBuffer {\nprivate:\n    mutex mtx;\n    vector<int> buffer;\n    \npublic:\n    DataBuffer() {\n        cout << \"DataBuffer created\" << endl;\n    }\n    \n    void add(int value) {\n        lock_guard<mutex> lock(mtx);\n        buffer.push_back(value);\n    }\n    \n    vector<int> getAll() {\n        lock_guard<mutex> lock(mtx);\n        return buffer;\n    }\n};\n\nint main() {\n    ThreadSafeCounter counter;\n    \n    vector<thread> threads;\n    for (int i = 0; i < 100; i++) {\n        threads.emplace_back([&counter]() {\n            counter.increment();\n        });\n    }\n    \n    for (auto& t : threads) {\n        t.join();\n    }\n    \n    cout << \"Final count: \" << counter.get() << endl;\n    \n    return 0;\n}',
  hint: 'Initialize mutex in constructor for thread-safe classes.'
},
{
  id: 'cpp_constructors_33',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that takes variadic template arguments.',
  mathSolution: 'Variadic templates allow variable number of arguments of any type.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\ntemplate<typename... Args>\nclass DataBag {\nprivate:\n    tuple<Args...> data;\n    \npublic:\n    DataBag(Args... args) : data(args...) {\n        cout << \"DataBag created with \" << sizeof...(Args) << \" arguments\" << endl;\n    }\n    \n    void display() {\n        displayTuple(data);\n    }\n    \nprivate:\n    template<size_t I = 0, typename... T>\n    typename enable_if<I == sizeof...(T)>::type displayTuple(const tuple<T...>&) {}\n    \n    template<size_t I = 0, typename... T>\n    typename enable_if<I < sizeof...(T)>::type displayTuple(const tuple<T...>& t) {\n        cout << get<I>(t);\n        if (I + 1 < sizeof...(T)) cout << \", \";\n        displayTuple<I + 1>(t);\n    }\n};\n\ntemplate<typename... Args>\nvoid log(Args... args) {\n    DataBag<Args...> bag(args...);\n    cout << \"Logging: \";\n    bag.display();\n    cout << endl;\n}\n\nint main() {\n    DataBag<int, double, string> bag1(10, 3.14, \"Hello\");\n    bag1.display();\n    cout << endl;\n    \n    DataBag<int, int, int> bag2(1, 2, 3);\n    bag2.display();\n    cout << endl;\n    \n    log(42, \"Answer\", true);\n    \n    return 0;\n}',
  hint: 'Variadic constructors enable flexible argument lists similar to make_tuple.'
},
{
  id: 'cpp_constructors_34',
  topicId: 'cpp_constructors',
  question: 'Create a class that uses constructor to allocate memory with custom alignment.',
  mathSolution: 'aligned_alloc or alignas can be used for memory alignment.',
  codeSolution: '#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nclass AlignedBuffer {\nprivate:\n    void* ptr;\n    size_t size;\n    size_t alignment;\n    \npublic:\n    AlignedBuffer(size_t sz, size_t align) : size(sz), alignment(align) {\n        ptr = aligned_alloc(align, sz);\n        if (!ptr) {\n            throw bad_alloc();\n        }\n        cout << \"Aligned buffer of \" << sz << \" bytes allocated with alignment \" << align << endl;\n    }\n    \n    ~AlignedBuffer() {\n        free(ptr);\n        cout << \"Aligned buffer freed\" << endl;\n    }\n    \n    void* get() { return ptr; }\n    \n    bool isAligned() {\n        return reinterpret_cast<uintptr_t>(ptr) % alignment == 0;\n    }\n};\n\nstruct alignas(64) CacheLine {\n    int data[16];\n};\n\nint main() {\n    AlignedBuffer buf(1024, 64);\n    \n    if (buf.isAligned()) {\n        cout << \"Buffer is correctly aligned to 64 bytes\" << endl;\n    }\n    \n    CacheLine cache;\n    cout << \"CacheLine alignment: \" << alignof(CacheLine) << \" bytes\" << endl;\n    \n    return 0;\n}',
  hint: 'aligned_alloc is C++17; use posix_memalign or _aligned_malloc for earlier versions.'
},
{
  id: 'cpp_constructors_35',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using structured bindings (C++17).',
  mathSolution: 'Structured bindings can decompose return values in constructors.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\nclass Point3D {\nprivate:\n    double x, y, z;\n    \npublic:\n    Point3D(double a, double b, double c) : x(a), y(b), z(c) {}\n    \n    void display() { cout << \"(\" << x << \", \" << y << \", \" << z << \")\" << endl; }\n};\n\nclass DataPoint {\nprivate:\n    int id;\n    string name;\n    double value;\n    \npublic:\n    // Constructor using tuple\n    DataPoint(const tuple<int, string, double>& data) \n        : id(get<0>(data)), name(get<1>(data)), value(get<2>(data)) {}\n    \n    // Constructor using structured bindings (C++17)\n    DataPoint(auto&& data) {\n        auto [i, n, v] = data;\n        id = i;\n        name = n;\n        value = v;\n    }\n    \n    void display() {\n        cout << id << \": \" << name << \" = \" << value << endl;\n    }\n};\n\nint main() {\n    auto point = make_tuple(10, 20, 30);\n    auto data = make_tuple(1, \"Temperature\", 98.6);\n    \n    // Using structured bindings\n    auto [x, y, z] = point;\n    Point3D p(x, y, z);\n    p.display();\n    \n    DataPoint dp(data);\n    dp.display();\n    \n    return 0;\n}',
  hint: 'Structured bindings make tuple unpacking cleaner in C++17.'
},
{
  id: 'cpp_constructors_36',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses SFINAE to enable/disable based on type traits.',
  mathSolution: 'SFINAE allows constructor to be conditionally enabled.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nclass NumericContainer {\nprivate:\n    int value;\n    \npublic:\n    // Only enable for integral types\n    template<typename T>\n    NumericContainer(T val, typename enable_if<is_integral<T>::value>::type* = nullptr) \n        : value(static_cast<int>(val)) {\n        cout << \"Integral constructor called\" << endl;\n    }\n    \n    // Only enable for floating point types\n    template<typename T>\n    NumericContainer(T val, typename enable_if<is_floating_point<T>::value>::type* = nullptr)\n        : value(static_cast<int>(val)) {\n        cout << \"Floating point constructor called\" << endl;\n    }\n    \n    void display() { cout << \"Value: \" << value << endl; }\n};\n\nclass SmartConstructor {\nprivate:\n    string data;\n    \npublic:\n    // Enable for types that have .c_str() method\n    template<typename T>\n    SmartConstructor(const T& obj, \n                     typename enable_if<is_same<decltype(obj.c_str()), const char*>::value>::type* = nullptr) \n        : data(obj.c_str()) {\n        cout << \"String-like constructor\" << endl;\n    }\n    \n    void display() { cout << \"Data: \" << data << endl; }\n};\n\nint main() {\n    NumericContainer nc1(42);           // Integral\n    NumericContainer nc2(3.14);         // Floating point\n    // NumericContainer nc3(\"hello\");   // Error: no matching constructor\n    \n    nc1.display();\n    nc2.display();\n    \n    string s = \"Hello World\";\n    SmartConstructor sc(s);\n    sc.display();\n    \n    return 0;\n}',
  hint: 'SFINAE (Substitution Failure Is Not An Error) enables compile-time selection of functions.'
},
{
  id: 'cpp_constructors_37',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using integer sequence (C++14).',
  mathSolution: 'Integer sequence allows compile-time indexing for initialization.',
  codeSolution: '#include <iostream>\n#include <utility>\n#include <array>\nusing namespace std;\n\ntemplate<typename T, size_t N>\nclass FixedArray {\nprivate:\n    T arr[N];\n    \n    template<size_t... Is>\n    FixedArray(const T& val, index_sequence<Is...>) : arr{((void)Is, val)...} {}\n    \npublic:\n    FixedArray(const T& val) : FixedArray(val, make_index_sequence<N>()) {}\n    \n    void display() {\n        for (size_t i = 0; i < N; i++) {\n            cout << arr[i] << \" \";\n        }\n        cout << endl;\n    }\n};\n\nclass SequenceInitializer {\nprivate:\n    array<int, 5> data;\n    \n    template<size_t... Is>\n    SequenceInitializer(index_sequence<Is...>) : data{{Is * Is...}} {}\n    \npublic:\n    SequenceInitializer() : SequenceInitializer(make_index_sequence<5>()) {}\n    \n    void display() {\n        for (auto val : data) cout << val << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    FixedArray<int, 5> arr1(10);\n    arr1.display();  // 10 10 10 10 10\n    \n    FixedArray<string, 3> arr2(\"Hello\");\n    arr2.display();\n    \n    SequenceInitializer seq;\n    seq.display();  // 0 1 4 9 16\n    \n    return 0;\n}',
  hint: 'Integer sequences enable compile-time generation of values for initialization.'
},
{
  id: 'cpp_constructors_38',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using lambda in initializer list.',
  mathSolution: 'Lambda can be called directly in initializer list for complex initialization.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass ProcessedData {\nprivate:\n    vector<int> data;\n    double average;\n    int maxVal;\n    int minVal;\n    \npublic:\n    ProcessedData(vector<int> raw) \n        : data([&raw]() {\n            auto v = raw;\n            sort(v.begin(), v.end());\n            return v;\n        }()),\n          average([this]() {\n              int sum = 0;\n              for (int x : data) sum += x;\n              return static_cast<double>(sum) / data.size();\n          }()),\n          maxVal(data.empty() ? 0 : data.back()),\n          minVal(data.empty() ? 0 : data.front()) {\n        cout << \"ProcessedData created\" << endl;\n    }\n    \n    void display() {\n        cout << \"Sorted data: \";\n        for (int x : data) cout << x << \" \";\n        cout << \"\\nAverage: \" << average << \", Min: \" << minVal << \", Max: \" << maxVal << endl;\n    }\n};\n\nclass Config {\nprivate:\n    string value;\n    \npublic:\n    Config(const string& envVar) \n        : value([&envVar]() {\n            const char* env = getenv(envVar.c_str());\n            return env ? string(env) : string(\"default\");\n        }()) {}\n    \n    void display() { cout << \"Config value: \" << value << endl; }\n};\n\nint main() {\n    ProcessedData pd({5, 2, 8, 1, 9, 3});\n    pd.display();\n    \n    return 0;\n}',
  hint: 'Lambda in initializer list can compute values before member initialization.'
},
{
  id: 'cpp_constructors_39',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses magic static for singleton pattern (C++11).',
  mathSolution: 'Static local variables are initialized in a thread-safe manner.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Singleton {\nprivate:\n    Singleton() { cout << \"Singleton instance created\" << endl; }\n    ~Singleton() { cout << \"Singleton destroyed\" << endl; }\n    \npublic:\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n    \n    static Singleton& getInstance() {\n        static Singleton instance;  // Magic static - thread-safe in C++11\n        return instance;\n    }\n    \n    void doSomething() { cout << \"Singleton doing work\" << endl; }\n};\n\nclass ConfigManager {\nprivate:\n    ConfigManager() { cout << \"ConfigManager created\" << endl; }\n    \npublic:\n    static ConfigManager& getInstance() {\n        static ConfigManager instance;\n        return instance;\n    }\n    \n    void load() { cout << \"Config loaded\" << endl; }\n};\n\nint main() {\n    Singleton::getInstance().doSomething();\n    Singleton::getInstance().doSomething();\n    \n    ConfigManager::getInstance().load();\n    \n    // Singleton s;  // Error: private constructor\n    \n    return 0;\n}',
  hint: 'Magic statics (C++11) provide thread-safe lazy initialization.'
},
{
  id: 'cpp_constructors_40',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with [[likely]] and [[unlikely]] attributes (C++20).',
  mathSolution: 'Attributes give hints to compiler for branch prediction.',
  codeSolution: '#include <iostream>\n#include <random>\nusing namespace std;\n\nclass Validator {\nprivate:\n    bool isValid;\n    \npublic:\n    Validator(int value) : isValid(false) {\n        if (value > 0 && value < 100) [[likely]] {\n            isValid = true;\n            cout << \"Valid input\" << endl;\n        } else [[unlikely]] {\n            isValid = false;\n            cout << \"Invalid input (out of range)\" << endl;\n        }\n    }\n    \n    bool isGood() const { return isValid; }\n};\n\nclass Processor {\npublic:\n    Processor(int code) {\n        if (code == 0) [[unlikely]] {\n            cout << \"Error code - special handling\" << endl;\n        } else [[likely]] {\n            cout << \"Normal processing for code \" << code << endl;\n        }\n    }\n};\n\nint main() {\n    Validator v1(50);   // Likely path\n    Validator v2(200);  // Unlikely path\n    \n    Processor p1(0);    // Unlikely path\n    Processor p2(42);   // Likely path\n    \n    return 0;\n}',
  hint: '[[likely]] and [[unlikely]] are optimization hints, not guarantees.'
},
{
  id: 'cpp_constructors_41',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::optional for optional parameters.',
  mathSolution: 'std::optional represents values that may or may not be present.',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\nusing namespace std;\n\nclass UserProfile {\nprivate:\n    string username;\n    optional<int> age;\n    optional<string> email;\n    optional<string> phone;\n    \npublic:\n    UserProfile(const string& name, \n                optional<int> a = nullopt,\n                optional<string> em = nullopt,\n                optional<string> ph = nullopt)\n        : username(name), age(a), email(em), phone(ph) {\n        cout << \"Profile created for \" << username << endl;\n    }\n    \n    void display() {\n        cout << \"Username: \" << username << endl;\n        if (age.has_value()) cout << \"Age: \" << age.value() << endl;\n        if (email.has_value()) cout << \"Email: \" << email.value() << endl;\n        if (phone.has_value()) cout << \"Phone: \" << phone.value() << endl;\n    }\n};\n\nclass ConfigurableService {\nprivate:\n    optional<int> timeout;\n    optional<bool> enableLogging;\n    optional<string> endpoint;\n    \npublic:\n    ConfigurableService(optional<int> t = nullopt,\n                        optional<bool> log = nullopt,\n                        optional<string> ep = nullopt)\n        : timeout(t), enableLogging(log), endpoint(ep) {\n        cout << \"Service configured\" << endl;\n    }\n    \n    void showConfig() {\n        cout << \"Timeout: \" << (timeout.has_value() ? to_string(timeout.value()) : \"default\") << endl;\n        cout << \"Logging: \" << (enableLogging.has_value() ? (enableLogging.value() ? \"enabled\" : \"disabled\") : \"default\") << endl;\n        cout << \"Endpoint: \" << (endpoint.has_value() ? endpoint.value() : \"default\") << endl;\n    }\n};\n\nint main() {\n    UserProfile u1(\"John\");\n    UserProfile u2(\"Alice\", 25, \"alice@example.com\");\n    UserProfile u3(\"Bob\", nullopt, nullopt, \"555-1234\");\n    \n    cout << \"\\n--- User 1 ---\" << endl;\n    u1.display();\n    cout << \"\\n--- User 2 ---\" << endl;\n    u2.display();\n    cout << \"\\n--- User 3 ---\" << endl;\n    u3.display();\n    \n    cout << \"\\n--- Service Config ---\" << endl;\n    ConfigurableService svc(30, true, \"https://api.example.com\");\n    svc.showConfig();\n    \n    return 0;\n}',
  hint: 'std::optional clearly expresses optional parameters semantic meaning.'
},
{
  id: 'cpp_constructors_42',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::variant for type-safe union.',
  mathSolution: 'std::variant can hold one of several types, checked at compile time.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nclass DataValue {\nprivate:\n    variant<int, double, string, bool> value;\n    \npublic:\n    DataValue(int v) : value(v) { cout << \"Int value\" << endl; }\n    DataValue(double v) : value(v) { cout << \"Double value\" << endl; }\n    DataValue(const string& v) : value(v) { cout << \"String value\" << endl; }\n    DataValue(bool v) : value(v) { cout << \"Bool value\" << endl; }\n    \n    void display() {\n        visit([](auto&& arg) {\n            cout << arg;\n        }, value);\n    }\n    \n    string getType() {\n        if (holds_alternative<int>(value)) return \"int\";\n        if (holds_alternative<double>(value)) return \"double\";\n        if (holds_alternative<string>(value)) return \"string\";\n        return \"bool\";\n    }\n};\n\nint main() {\n    DataValue d1(42);\n    DataValue d2(3.14);\n    DataValue d3(\"Hello\");\n    DataValue d4(true);\n    \n    cout << d1.getType() << \": \"; d1.display(); cout << endl;\n    cout << d2.getType() << \": \"; d2.display(); cout << endl;\n    cout << d3.getType() << \": \"; d3.display(); cout << endl;\n    cout << d4.getType() << \": \"; d4.display(); cout << endl;\n    \n    return 0;\n}',
  hint: 'std::variant is a type-safe union for C++17.'
},
{
  id: 'cpp_constructors_43',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::any for type-erased storage.',
  mathSolution: 'std::any can hold any copyable type, losing type information.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nclass FlexibleStorage {\nprivate:\n    any data;\n    \npublic:\n    template<typename T>\n    FlexibleStorage(T value) : data(value) {\n        cout << \"Stored value of type: \" << typeid(T).name() << endl;\n    }\n    \n    template<typename T>\n    T get() const {\n        return any_cast<T>(data);\n    }\n    \n    bool hasValue() const { return data.has_value(); }\n    \n    const type_info& type() const { return data.type(); }\n    \n    void display() {\n        if (data.type() == typeid(int)) {\n            cout << any_cast<int>(data);\n        } else if (data.type() == typeid(double)) {\n            cout << any_cast<double>(data);\n        } else if (data.type() == typeid(string)) {\n            cout << any_cast<string>(data);\n        } else {\n            cout << \"Unknown type\";\n        }\n    }\n};\n\nint main() {\n    FlexibleStorage fs1(42);\n    FlexibleStorage fs2(3.14159);\n    FlexibleStorage fs3(string(\"C++17\"));\n    \n    cout << \"fs1: \"; fs1.display(); cout << endl;\n    cout << \"fs2: \"; fs2.display(); cout << endl;\n    cout << \"fs3: \"; fs3.display(); cout << endl;\n    \n    cout << \"fs1 type: \" << fs1.type().name() << endl;\n    \n    int val = fs1.get<int>();\n    cout << \"Retrieved int: \" << val << endl;\n    \n    return 0;\n}',
  hint: 'std::any (C++17) allows storing any type without templates.'
},
{
  id: 'cpp_constructors_44',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with [[nodiscard]] attribute for important objects.',
  mathSolution: '[[nodiscard]] warns if return value (object) is ignored.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass [[nodiscard]] Result {\nprivate:\n    bool success;\n    string message;\n    \npublic:\n    Result(bool s, const string& m) : success(s), message(m) {}\n    \n    bool isSuccess() const { return success; }\n    void show() const { cout << message << endl; }\n};\n\nclass [[nodiscard]] Resource {\npublic:\n    Resource() { cout << \"Resource acquired\" << endl; }\n    ~Resource() { cout << \"Resource released\" << endl; }\n    \n    void use() { cout << \"Using resource\" << endl; }\n};\n\nResult createResource() {\n    return Result(true, \"Resource created successfully\");\n}\n\nint main() {\n    // Result r = createResource();  // OK: result used\n    // createResource();  // Warning: [[nodiscard]] ignored\n    \n    // Resource res;  // OK: object used\n    // Resource();    // Warning: temporary object ignored\n    \n    Result r = createResource();\n    r.show();\n    \n    Resource res;\n    res.use();\n    \n    return 0;\n}',
  hint: '[[nodiscard]] prevents accidental discarding of important objects.'
},
{
  id: 'cpp_constructors_45',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that initializes using an existing object (converting constructor).',
  mathSolution: 'Converting constructor allows implicit conversion from another type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass CustomString {\nprivate:\n    string data;\n    \npublic:\n    // Converting constructor (not explicit)\n    CustomString(const char* s) : data(s) {\n        cout << \"Converting from C-string\" << endl;\n    }\n    \n    CustomString(const string& s) : data(s) {\n        cout << \"Converting from std::string\" << endl;\n    }\n    \n    void display() { cout << data << endl; }\n};\n\nclass Distance {\nprivate:\n    double meters;\n    \npublic:\n    // Converting constructor from double\n    Distance(double m) : meters(m) {}\n    \n    // Converting constructor from int\n    Distance(int km) : meters(km * 1000) {}\n    \n    void display() { cout << meters << \" meters\" << endl; }\n};\n\nint main() {\n    // Implicit conversions using converting constructors\n    CustomString s1 = \"Hello\";     // const char* converted\n    CustomString s2 = string(\"World\");  // std::string converted\n    \n    Distance d1 = 5.5;     // double converted\n    Distance d2 = 3;       // int converted (3 km = 3000 m)\n    \n    s1.display();\n    s2.display();\n    d1.display();\n    d2.display();\n    \n    return 0;\n}',
  hint: 'Use explicit keyword if implicit conversions are not desired.'
},
{
  "id": "cpp_constructors_46",
  "topicId": "cpp_constructors",
  "question": "Create a class with constructor that uses sfinae to detect noexcept.",
  "mathSolution": "noexcept specifier can be conditionally applied using traits.",
  "codeSolution": "#include <iostream>\n#include <type_traits>\n#include <string>\n#include <utility>\nusing namespace std;\n\nclass NoExceptMove {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    NoExceptMove(size_t s) : size(s), data(new int[s]) {}\n    \n    // Move constructor is noexcept\n    NoExceptMove(NoExceptMove&& other) noexcept\n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n    \n    // Delete copy constructor to demonstrate move\n    NoExceptMove(const NoExceptMove&) = delete;\n    NoExceptMove& operator=(const NoExceptMove&) = delete;\n    \n    ~NoExceptMove() {\n        delete[] data;\n    }\n};\n\ntemplate<typename T>\nclass Container {\nprivate:\n    T value;\n    \npublic:\n    // Conditionally noexcept constructor\n    Container(T val) noexcept(noexcept(T(val))) : value(val) {}\n    \n    // Move constructor that preserves noexcept-ness\n    Container(Container&& other) noexcept(noexcept(T(std::move(other.value))))\n        : value(std::move(other.value)) {}\n    \n    // Delete copy constructor\n    Container(const Container&) = delete;\n    \n    T getValue() const { return value; }\n};\n\nint main() {\n    cout << boolalpha;\n    \n    Container<int> c1(42);\n    cout << \"Container<int> constructor is noexcept: \" << noexcept(Container<int>(42)) << endl;\n    cout << \"Container<int> move is noexcept: \" << noexcept(Container<int>(std::move(c1))) << endl;\n    \n    Container<string> c2(\"Hello\");\n    cout << \"\\nContainer<string> constructor is noexcept: \" << noexcept(Container<string>(\"Hello\")) << endl;\n    cout << \"Container<string> move is noexcept: \" << noexcept(Container<string>(std::move(c2))) << endl;\n    \n    NoExceptMove nm(100);\n    cout << \"\\nNoExceptMove move is noexcept: \" << noexcept(NoExceptMove(std::move(nm))) << endl;\n    \n    return 0;\n}",
  "hint": "noexcept specifiers enable move optimizations in standard containers."
},
{
  id: 'cpp_constructors_47',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::invoke_result for return type deduction.',
  mathSolution: 'std::invoke_result deduces return type of callable at compile time.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <type_traits>\n#include <cstdlib>\nusing namespace std;\n\nclass CallbackWrapper {\nprivate:\n    function<int(int)> func;\n    \npublic:\n    template<typename F>\n    CallbackWrapper(F f) : func(f) {}\n    \n    int execute(int x) { return func(x); }\n};\n\ntemplate<typename Callable>\nclass LazyExecutor {\nprivate:\n    Callable callable;\n    \npublic:\n    LazyExecutor(Callable c) : callable(c) {}\n    \n    // Use invoke_result to get return type\n    auto execute() -> typename invoke_result<Callable>::type {\n        return callable();\n    }\n};\n\nclass Factory {\npublic:\n    template<typename F>\n    static auto create(F f) -> LazyExecutor<F> {\n        return LazyExecutor<F>(f);\n    }\n};\n\nint main() {\n    auto square = [](int x) { return x * x; };\n    CallbackWrapper cw(square);\n    cout << cw.execute(5) << endl;\n    \n    auto random = []() { return rand() % 100; };\n    auto executor = Factory::create(random);\n    cout << executor.execute() << endl;\n    \n    return 0;\n}',
  hint: 'std::invoke_result helps write generic code with callables.'
},
{
  id: 'cpp_constructors_48',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::is_constructible for SFINAE.',
  mathSolution: 'std::is_constructible checks if type can be constructed from arguments.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nclass OnlyFromInt {\npublic:\n    OnlyFromInt(int) { cout << \"Constructed from int\" << endl; }\n};\n\nclass OnlyFromDouble {\npublic:\n    OnlyFromDouble(double) { cout << \"Constructed from double\" << endl; }\n};\n\ntemplate<typename T, typename Arg>\nclass ConditionalContainer {\nprivate:\n    T value;\n    \n    // Constructor enabled only if T is constructible from Arg\n    template<typename U = T>\n    ConditionalContainer(Arg arg, \n        typename enable_if<is_constructible<U, Arg>::value>::type* = nullptr) \n        : value(arg) {\n        cout << \"T constructed from Arg\" << endl;\n    }\n    \npublic:\n    // Public wrapper\n    ConditionalContainer(Arg arg) : ConditionalContainer(arg, nullptr) {}\n    \n    void display() { /* ... */ }\n};\n\nint main() {\n    ConditionalContainer<OnlyFromInt, int> ci(10);     // OK\n    // ConditionalContainer<OnlyFromInt, double> cd(3.14);  // Error: not constructible\n    \n    ConditionalContainer<OnlyFromDouble, double> cd2(3.14);  // OK\n    \n    return 0;\n}',
  hint: 'Type traits enable compile-time checks for generic constructors.'
},
{
  id: 'cpp_constructors_49',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that uses std::byte for raw memory initialization.',
  mathSolution: 'std::byte represents raw bytes for low-level operations.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nclass RawBuffer {\nprivate:\n    byte* buffer;\n    size_t length;\n    \npublic:\n    RawBuffer(size_t size) : length(size) {\n        buffer = new byte[size];\n        for (size_t i = 0; i < size; i++) {\n            buffer[i] = byte{0};\n        }\n        cout << \"Buffer of \" << size << \" bytes created\" << endl;\n    }\n    \n    RawBuffer(initializer_list<byte> bytes) : length(bytes.size()) {\n        buffer = new byte[length];\n        size_t i = 0;\n        for (auto b : bytes) {\n            buffer[i++] = b;\n        }\n        cout << \"Buffer initialized with \" << length << \" bytes\" << endl;\n    }\n    \n    ~RawBuffer() {\n        delete[] buffer;\n    }\n    \n    void set(byte value, size_t index) {\n        if (index < length) buffer[index] = value;\n    }\n    \n    void displayHex() {\n        for (size_t i = 0; i < length && i < 16; i++) {\n            cout << hex << static_cast<int>(buffer[i]) << \" \";\n        }\n        if (length > 16) cout << \"...\";\n        cout << endl;\n    }\n};\n\nint main() {\n    RawBuffer rb1(100);\n    \n    RawBuffer rb2 = {byte{0x48}, byte{0x65}, byte{0x6C}, byte{0x6C}, byte{0x6F}};\n    \n    rb1.displayHex();\n    rb2.displayHex();\n    \n    return 0;\n}',
  hint: 'std::byte (C++17) provides type-safe byte representation.'
},
{
  "id": "cpp_constructors_50",
  "topicId": "cpp_constructors",
  "question": "Create comprehensive demonstration class with multiple constructor types.",
  "mathSolution": "Combine all constructor features in one example.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <vector>\n#include <initializer_list>\n#include <memory>\n#include <utility>\nusing namespace std;\n\nclass Product {\nprivate:\n    int id;\n    string name;\n    double price;\n    static int nextId;\n    \npublic:\n    // Default constructor\n    Product() : id(nextId++), name(\"Unknown\"), price(0.0) {\n        cout << \"Default: \" << *this << endl;\n    }\n    \n    // Parameterized constructor\n    Product(const string& n, double p) : id(nextId++), name(n), price(p) {\n        cout << \"Parameterized: \" << *this << endl;\n    }\n    \n    // Copy constructor\n    Product(const Product& other) \n        : id(nextId++), name(other.name), price(other.price) {\n        cout << \"Copy: \" << *this << \" (from \" << other.id << \")\" << endl;\n    }\n    \n    // Move constructor\n    Product(Product&& other) noexcept\n        : id(nextId++), name(std::move(other.name)), price(other.price) {\n        cout << \"Move: \" << *this << \" (from \" << other.id << \")\" << endl;\n        other.id = -1;\n    }\n    \n    // Initializer list constructor\n    Product(initializer_list<string> list) : id(nextId++) {\n        auto it = list.begin();\n        name = (it != list.end()) ? *it++ : \"\";\n        price = (it != list.end()) ? std::stod(*it++) : 0.0;\n        cout << \"Initializer list: \" << *this << endl;\n    }\n    \n    // Destructor\n    ~Product() {\n        if (id != -1) {\n            cout << \"Destroying: \" << *this << endl;\n        }\n    }\n    \n    // Display\n    friend ostream& operator<<(ostream& os, const Product& p) {\n        os << \"Product[\" << p.id << \"]: '\" << p.name << \"', $\" << p.price;\n        return os;\n    }\n};\n\nint Product::nextId = 1;\n\nclass ProductManager {\nprivate:\n    vector<Product> products;\n    \npublic:\n    // Constructor with initializer list\n    ProductManager(initializer_list<Product> list) : products(list) {\n        cout << \"Manager created with \" << products.size() << \" products\" << endl;\n    }\n    \n    // Move constructor\n    ProductManager(ProductManager&& other) noexcept : products(std::move(other.products)) {\n        cout << \"Manager moved\" << endl;\n    }\n    \n    // Delete copy constructor\n    ProductManager(const ProductManager&) = delete;\n    \n    void display() const {\n        for (const auto& p : products) {\n            cout << \"  \" << p << endl;\n        }\n    }\n};\n\nint main() {\n    cout << \"=== Constructors Demonstration ===\\n\\n\";\n    \n    // Default constructor\n    Product p1;\n    \n    // Parameterized constructor\n    Product p2(\"Laptop\", 999.99);\n    \n    // Copy constructor\n    Product p3 = p2;\n    \n    // Move constructor\n    Product p4 = std::move(p2);\n    \n    // Initializer list constructor\n    Product p5 = {\"Tablet\", \"299.99\"};\n    \n    // Direct initialization\n    Product p6(\"Phone\", 599.99);\n    \n    cout << \"\\n=== Manager ===\\n\";\n    ProductManager manager = {p1, p3, p4, p5, p6};\n    manager.display();\n    \n    cout << \"\\n=== End of Program ===\\n\";\n    \n    return 0;\n}",
  "hint": "This comprehensive example demonstrates default, parameterized, copy, move, and initializer list constructors."
}
);