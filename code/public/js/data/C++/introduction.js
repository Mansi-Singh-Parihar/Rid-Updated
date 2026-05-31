QuizData.questions.push(
{
  id: 'cpp_intro_1',
  topicId: 'cpp_intro',
  question: 'Write a simple C++ program that prints "Hello World" to console.',
  mathSolution: 'Use #include <iostream> and cout to output text.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}',
  hint: 'main() function is the entry point of every C++ program.'
},
{
  id: 'cpp_intro_2',
  topicId: 'cpp_intro',
  question: 'Declare and initialize integer, float, and char variables in C++.',
  mathSolution: 'Use data types: int, float, char for variable declaration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    float price = 99.99;\n    char grade = \'A\';\n    \n    cout << "Age: " << age << endl;\n    cout << "Price: " << price << endl;\n    cout << "Grade: " << grade << endl;\n    return 0;\n}',
  hint: 'C++ is statically typed - variables must have declared types.'
},
{
  id: 'cpp_intro_3',
  topicId: 'cpp_intro',
  question: 'Demonstrate the use of const keyword for constants.',
  mathSolution: 'const variables cannot be modified after initialization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    const int MAX_STUDENTS = 100;\n    \n    cout << "PI = " << PI << endl;\n    cout << "MAX_STUDENTS = " << MAX_STUDENTS << endl;\n    // PI = 3.14;  // Error: cannot modify const\n    return 0;\n}',
  hint: 'const variables must be initialized at declaration.'
},
{
  id: 'cpp_intro_4',
  topicId: 'cpp_intro',
  question: 'Take user input using cin and display it.',
  mathSolution: 'Use cin to read input and cout to display output.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    \n    cout << "Enter your name: ";\n    cin >> name;\n    cout << "Enter your age: ";\n    cin >> age;\n    \n    cout << "Hello " << name << ", you are " << age << " years old" << endl;\n    return 0;\n}',
  hint: 'Use >> operator with cin to read input from user.'
},
{
  id: 'cpp_intro_5',
  topicId: 'cpp_intro',
  question: 'Demonstrate arithmetic operators in C++.',
  mathSolution: 'Use +, -, *, /, % operators for calculations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    \n    cout << "Sum: " << a + b << endl;\n    cout << "Difference: " << a - b << endl;\n    cout << "Product: " << a * b << endl;\n    cout << "Quotient: " << a / b << endl;\n    cout << "Remainder: " << a % b << endl;\n    return 0;\n}',
  hint: '% operator works only with integers, returns remainder.'
},
{
  id: 'cpp_intro_6',
  topicId: 'cpp_intro',
  question: 'Demonstrate increment (++) and decrement (--) operators.',
  mathSolution: 'Prefix increments before use, postfix increments after use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    \n    cout << "Postfix increment: " << x++ << endl;  // prints 5, then x=6\n    cout << "After postfix: " << x << endl;\n    \n    int y = 5;\n    cout << "Prefix increment: " << ++y << endl;   // increments to 6, then prints\n    \n    int z = 5;\n    cout << "Prefix decrement: " << --z << endl;   // prints 4\n    return 0;\n}',
  hint: 'Prefix (++x) increments first, then uses value; postfix (x++) uses value first, then increments.'
},
{
  id: 'cpp_intro_7',
  topicId: 'cpp_intro',
  question: 'Use if-else statement to check if a number is positive or negative.',
  mathSolution: 'Use if-else with comparison operators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num > 0) {\n        cout << num << " is positive" << endl;\n    } else if (num < 0) {\n        cout << num << " is negative" << endl;\n    } else {\n        cout << "Number is zero" << endl;\n    }\n    return 0;\n}',
  hint: 'if-else allows conditional execution of code blocks.'
},
{
  id: 'cpp_intro_8',
  topicId: 'cpp_intro',
  question: 'Use switch statement for multiple condition checking.',
  mathSolution: 'switch is efficient for checking equality against multiple values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cout << "Enter day number (1-7): ";\n    cin >> day;\n    \n    switch(day) {\n        case 1: cout << "Monday" << endl; break;\n        case 2: cout << "Tuesday" << endl; break;\n        case 3: cout << "Wednesday" << endl; break;\n        case 4: cout << "Thursday" << endl; break;\n        case 5: cout << "Friday" << endl; break;\n        case 6: cout << "Saturday" << endl; break;\n        case 7: cout << "Sunday" << endl; break;\n        default: cout << "Invalid day" << endl;\n    }\n    return 0;\n}',
  hint: 'break prevents fall-through to next case; default handles unmatched values.'
},
{
  id: 'cpp_intro_9',
  topicId: 'cpp_intro',
  question: 'Use for loop to print numbers from 1 to 10.',
  mathSolution: 'For loop has initialization, condition, and increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'For loop syntax: for(initialization; condition; increment/decrement)'
},
{
  id: 'cpp_intro_10',
  topicId: 'cpp_intro',
  question: 'Use while loop to calculate sum of numbers from 1 to n.',
  mathSolution: 'While loop continues while condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0, i = 1;\n    cout << "Enter n: ";\n    cin >> n;\n    \n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n    cout << "Sum from 1 to " << n << " = " << sum << endl;\n    return 0;\n}',
  hint: 'While loop checks condition before executing the body.'
},
{
  id: 'cpp_intro_11',
  topicId: 'cpp_intro',
  question: 'Use do-while loop to ensure loop executes at least once.',
  mathSolution: 'do-while executes body first, then checks condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    \n    do {\n        cout << "Enter a positive number: ";\n        cin >> num;\n    } while (num <= 0);\n    \n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'do-while guarantees at least one iteration.'
},
{
  id: 'cpp_intro_12',
  topicId: 'cpp_intro',
  question: 'Create and access elements of an array in C++.',
  mathSolution: 'Array stores multiple elements of same type in contiguous memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    for (int i = 0; i < 5; i++) {\n        cout << "numbers[" << i << "] = " << numbers[i] << endl;\n    }\n    return 0;\n}',
  hint: 'Access array elements using index (0-based indexing).'
},
{
  id: 'cpp_intro_13',
  topicId: 'cpp_intro',
  question: 'Find the largest element in an array.',
  mathSolution: 'Initialize max with first element and compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 12, 3, 25, 8, 19};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int maxVal = arr[0];\n    \n    for (int i = 1; i < n; i++) {\n        if (arr[i] > maxVal) {\n            maxVal = arr[i];\n        }\n    }\n    cout << "Largest element: " << maxVal << endl;\n    return 0;\n}',
  hint: 'Use sizeof(arr)/sizeof(arr[0]) to get array length.'
},
{
  id: 'cpp_intro_14',
  topicId: 'cpp_intro',
  question: 'Create a function that adds two numbers and returns the result.',
  mathSolution: 'Function has return type, name, parameters, and body.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int x = 5, y = 3;\n    int result = add(x, y);\n    cout << "Sum: " << result << endl;\n    return 0;\n}',
  hint: 'Functions help organize code and avoid repetition.'
},
{
  id: 'cpp_intro_15',
  topicId: 'cpp_intro',
  question: 'Use function overloading to create multiple functions with same name.',
  mathSolution: 'Function overloading allows functions with same name but different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint add(int a, int b, int c) {\n    return a + b + c;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << add(5, 3, 2) << endl;\n    return 0;\n}',
  hint: 'Function overloading is resolved at compile time based on arguments.'
},
{
  id: 'cpp_intro_16',
  topicId: 'cpp_intro',
  question: 'Create a function with default parameters.',
  mathSolution: 'Default parameter values are used when arguments are omitted.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid greet(string name = "Guest", string greeting = "Hello") {\n    cout << greeting << ", " << name << "!" << endl;\n}\n\nint main() {\n    greet();\n    greet("John");\n    greet("Alice", "Hi");\n    return 0;\n}',
  hint: 'Default parameters must be declared from rightmost to leftmost.'
},
{
  id: 'cpp_intro_17',
  topicId: 'cpp_intro',
  question: 'Use reference variables in C++.',
  mathSolution: 'References are aliases to existing variables, created with &.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int &ref = x;\n    \n    cout << "x = " << x << ", ref = " << ref << endl;\n    \n    ref = 20;\n    cout << "After changing ref: x = " << x << endl;\n    \n    return 0;\n}',
  hint: 'References must be initialized when declared and cannot be changed to refer to another variable.'
},
{
  id: 'cpp_intro_18',
  topicId: 'cpp_intro',
  question: 'Pass arguments to function by reference.',
  mathSolution: 'Pass by reference allows function to modify original variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    cout << "Before swap: x=" << x << ", y=" << y << endl;\n    swap(x, y);\n    cout << "After swap: x=" << x << ", y=" << y << endl;\n    return 0;\n}',
  hint: 'Pass by reference avoids copying large objects and allows modification.'
},
{
  id: 'cpp_intro_19',
  topicId: 'cpp_intro',
  question: 'Use inline function to reduce function call overhead.',
  mathSolution: 'inline suggests compiler to replace function call with code.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    int n = 5;\n    cout << "Square of " << n << " = " << square(n) << endl;\n    return 0;\n}',
  hint: 'inline is a request; compiler may ignore for large functions.'
},
{
  id: 'cpp_intro_20',
  topicId: 'cpp_intro',
  question: 'Define and use namespace to avoid name conflicts.',
  mathSolution: 'Namespaces group identifiers and prevent naming collisions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nnamespace Math {\n    int add(int a, int b) { return a + b; }\n    const double PI = 3.14159;\n}\n\nnamespace Physics {\n    double add(double a, double b) { return a + b; }\n}\n\nint main() {\n    cout << "Math::add(5,3) = " << Math::add(5, 3) << endl;\n    cout << "Physics::add(5.5,3.2) = " << Physics::add(5.5, 3.2) << endl;\n    cout << "Math::PI = " << Math::PI << endl;\n    return 0;\n}',
  hint: 'Use :: scope resolution operator to access namespace members.'
},
{
  id: 'cpp_intro_21',
  topicId: 'cpp_intro',
  question: 'Create and use a simple structure (struct) in C++.',
  mathSolution: 'Structure groups multiple variables of different types.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    float gpa;\n};\n\nint main() {\n    Student s1;\n    s1.name = "John Doe";\n    s1.age = 20;\n    s1.gpa = 3.8;\n    \n    Student s2 = {"Jane Smith", 22, 3.9};\n    \n    cout << "Student 1: " << s1.name << ", Age: " << s1.age << ", GPA: " << s1.gpa << endl;\n    cout << "Student 2: " << s2.name << ", Age: " << s2.age << ", GPA: " << s2.gpa << endl;\n    return 0;\n}',
  hint: 'Structures in C++ can also contain functions (unlike C).'
},
{
  id: 'cpp_intro_22',
  topicId: 'cpp_intro',
  question: 'Create and use enum (enumeration) in C++.',
  mathSolution: 'Enum defines a set of named integer constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum Color { RED, GREEN, BLUE };\nenum Day { MON = 1, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Day today = WED;\n    \n    cout << "Color value: " << myColor << endl;\n    cout << "Day value: " << today << endl;\n    \n    if (myColor == GREEN) {\n        cout << "Color is Green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'By default, enumerators start at 0 and increment by 1.'
},
{
  id: 'cpp_intro_23',
  topicId: 'cpp_intro',
  question: 'Use dynamic memory allocation with new and delete.',
  mathSolution: 'new allocates memory on heap, delete frees it.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int *p = new int;\n    *p = 42;\n    cout << "Value: " << *p << endl;\n    delete p;\n    \n    int *arr = new int[5];\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    for (int i = 0; i < 5; i++) cout << arr[i] << " ";\n    cout << endl;\n    delete[] arr;\n    \n    return 0;\n}',
  hint: 'Use delete for single variable, delete[] for array allocation.'
},
{
  id: 'cpp_intro_24',
  topicId: 'cpp_intro',
  question: 'Use pointer variables to store memory addresses.',
  mathSolution: 'Pointer holds address of another variable, declared with *.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    \n    cout << "Value of x: " << x << endl;\n    cout << "Address of x: " << &x << endl;\n    cout << "Value of ptr: " << ptr << endl;\n    cout << "Value pointed by ptr: " << *ptr << endl;\n    \n    *ptr = 20;\n    cout << "New value of x: " << x << endl;\n    \n    return 0;\n}',
  hint: 'Use & to get address, * to dereference pointer and access value.'
},
{
  id: 'cpp_intro_25',
  topicId: 'cpp_intro',
  question: 'Use string class for string manipulation.',
  mathSolution: 'string class provides many methods for string operations.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello";\n    string str2 = "World";\n    \n    string str3 = str1 + " " + str2;\n    cout << "Concatenated: " << str3 << endl;\n    \n    cout << "Length: " << str3.length() << endl;\n    cout << "First character: " << str3[0] << endl;\n    cout << "Substring (0,5): " << str3.substr(0, 5) << endl;\n    \n    if (str1 == "Hello") cout << "Strings match" << endl;\n    \n    return 0;\n}',
  hint: 'Include <string> header and use std::string.'
},
{
  id: 'cpp_intro_26',
  topicId: 'cpp_intro',
  question: 'Use vector container from STL.',
  mathSolution: 'vector is dynamic array that grows automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers;\n    \n    numbers.push_back(10);\n    numbers.push_back(20);\n    numbers.push_back(30);\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "Elements: ";\n    for (int i = 0; i < numbers.size(); i++) {\n        cout << numbers[i] << " ";\n    }\n    cout << endl;\n    \n    numbers.pop_back();\n    cout << "After pop, size: " << numbers.size() << endl;\n    \n    return 0;\n}',
  hint: 'vector is part of STL; include <vector> header.'
},
{
  id: 'cpp_intro_27',
  topicId: 'cpp_intro',
  question: 'Use range-based for loop to iterate over container.',
  mathSolution: 'Range-based for loop simplifies iteration over arrays/containers.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    vector<string> names = {"Alice", "Bob", "Charlie"};\n    \n    cout << "Array elements: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    cout << "Names: ";\n    for (const auto &name : names) {\n        cout << name << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Range-based for loop syntax: for(type var : container)'
},
{
  id: 'cpp_intro_28',
  topicId: 'cpp_intro',
  question: 'Use auto keyword for type deduction.',
  mathSolution: 'auto lets compiler deduce variable type automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto x = 10;\n    auto y = 3.14;\n    auto name = "John";\n    \n    vector<int> numbers = {1, 2, 3};\n    auto it = numbers.begin();\n    \n    cout << "x = " << x << ", y = " << y << endl;\n    \n    for (auto num : numbers) {\n        cout << num << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'auto is especially useful for complex iterator types.'
},
{
  id: 'cpp_intro_29',
  topicId: 'cpp_intro',
  question: 'Write a simple class with constructor and member function.',
  mathSolution: 'Class defines blueprint with data members and member functions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    Person(string n, int a) {\n        name = n;\n        age = a;\n    }\n    \n    void introduce() {\n        cout << "Hello, my name is " << name << " and I am " << age << " years old." << endl;\n    }\n    \n    void haveBirthday() {\n        age++;\n        cout << name << " is now " << age << " years old!" << endl;\n    }\n};\n\nint main() {\n    Person p1("John", 25);\n    p1.introduce();\n    p1.haveBirthday();\n    \n    return 0;\n}',
  hint: 'Member functions have access to private data members.'
},
{
  id: 'cpp_intro_30',
  topicId: 'cpp_intro',
  question: 'Use constructor initializer list for efficient initialization.',
  mathSolution: 'Initializer list initializes members before constructor body.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int id;\n    double gpa;\n    \npublic:\n    Student(string n, int i, double g) : name(n), id(i), gpa(g) {\n        cout << "Student created: " << name << endl;\n    }\n    \n    void display() {\n        cout << "ID: " << id << ", Name: " << name << ", GPA: " << gpa << endl;\n    }\n};\n\nint main() {\n    Student s1("Alice", 1001, 3.8);\n    s1.display();\n    return 0;\n}',
  hint: 'Initializer list is more efficient than assignment in constructor body.'
},
{
  id: 'cpp_intro_31',
  topicId: 'cpp_intro',
  question: 'Demonstrate inheritance between classes.',
  mathSolution: 'Derived class inherits members from base class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {}\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n    \n    void sleep() {\n        cout << name << " is sleeping" << endl;\n    }\n};\n\nclass Dog : public Animal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b) : Animal(n), breed(b) {}\n    \n    void bark() {\n        cout << name << " barks: Woof! Woof!" << endl;\n    }\n    \n    void wagTail() {\n        cout << name << " wags tail" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd");\n    myDog.eat();\n    myDog.sleep();\n    myDog.bark();\n    myDog.wagTail();\n    return 0;\n}',
  hint: 'Derived class inherits all public and protected members of base class.'
},
{
  id: 'cpp_intro_32',
  topicId: 'cpp_intro',
  question: 'Use function overriding in inheritance.',
  mathSolution: 'Override base class virtual function in derived class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() {\n        cout << "Base class area" << endl;\n        return 0;\n    }\n    \n    virtual void draw() {\n        cout << "Drawing shape" << endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nint main() {\n    Circle circle(5);\n    cout << "Area: " << circle.area() << endl;\n    circle.draw();\n    return 0;\n}',
  hint: 'Use virtual keyword in base class and override in derived class.'
},
{
  id: 'cpp_intro_33',
  topicId: 'cpp_intro',
  question: 'Demonstrate polymorphism with virtual functions.',
  mathSolution: 'Base class pointer to derived class calls overridden function.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n    void draw() override { cout << "Drawing Circle" << endl; }\n};\n\nclass Rectangle : public Shape {\n    double w, h;\npublic:\n    Rectangle(double width, double height) : w(width), h(height) {}\n    double area() override { return w * h; }\n    void draw() override { cout << "Drawing Rectangle" << endl; }\n};\n\nint main() {\n    vector<Shape*> shapes;\n    shapes.push_back(new Circle(5));\n    shapes.push_back(new Rectangle(4, 6));\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        s->draw();\n    }\n    \n    for (Shape* s : shapes) delete s;\n    return 0;\n}',
  hint: 'Virtual functions enable runtime polymorphism.'
},
{
  id: 'cpp_intro_34',
  topicId: 'cpp_intro',
  question: 'Create and use constructor with member initializer list.',
  mathSolution: 'Initializer list initializes const and reference members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    const int x;\n    const int y;\n    int& refCount;\n    \npublic:\n    Point(int xVal, int yVal, int& count) : x(xVal), y(yVal), refCount(count) {\n        refCount++;\n    }\n    \n    void display() const {\n        cout << "Point(" << x << ", " << y << ")" << endl;\n    }\n};\n\nint main() {\n    int count = 0;\n    Point p1(10, 20, count);\n    Point p2(30, 40, count);\n    \n    p1.display();\n    p2.display();\n    cout << "Number of points: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Member initializer list is required for const and reference members.'
},
{
  id: 'cpp_intro_35',
  topicId: 'cpp_intro',
  question: 'Demonstrate friend function accessing private members.',
  mathSolution: 'Friend function is not a member but can access private members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int width, height;\n    \npublic:\n    Box(int w, int h) : width(w), height(h) {}\n    \n    friend int getArea(Box b);\n    friend void displayBox(Box b);\n};\n\nint getArea(Box b) {\n    return b.width * b.height;\n}\n\nvoid displayBox(Box b) {\n    cout << "Box: " << b.width << " x " << b.height << endl;\n}\n\nint main() {\n    Box box(10, 20);\n    displayBox(box);\n    cout << "Area: " << getArea(box) << endl;\n    return 0;\n}',
  hint: 'Friend functions are not members but have access to private data.'
},
{
  id: 'cpp_intro_36',
  topicId: 'cpp_intro',
  question: 'Use static members and static functions in class.',
  mathSolution: 'Static members are shared across all instances of class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int count;\n    int id;\n    \npublic:\n    Counter() {\n        count++;\n        id = count;\n    }\n    \n    static int getCount() {\n        return count;\n    }\n    \n    void display() {\n        cout << "Object " << id << " created. Total objects: " << count << endl;\n    }\n};\n\nint Counter::count = 0;\n\nint main() {\n    Counter c1, c2, c3;\n    c1.display();\n    c2.display();\n    c3.display();\n    \n    cout << "Total objects (static function): " << Counter::getCount() << endl;\n    return 0;\n}',
  hint: 'Static data members must be defined outside the class.'
},
{
  id: 'cpp_intro_37',
  topicId: 'cpp_intro',
  question: 'Demonstrate operator overloading for custom class.',
  mathSolution: 'Define operators for user-defined types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4);\n    Complex c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    \n    cout << "c1: "; c1.display();\n    cout << "c2: "; c2.display();\n    cout << "c1 + c2: "; c3.display();\n    cout << "c1 - c2: "; c4.display();\n    \n    return 0;\n}',
  hint: 'Overloaded operators provide intuitive syntax for custom types.'
},
{
  id: 'cpp_intro_38',
  topicId: 'cpp_intro',
  question: 'Use try-catch block for exception handling.',
  mathSolution: 'try block contains code that may throw, catch handles exceptions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw "Division by zero error";\n    }\n    return a / b;\n}\n\nint main() {\n    double x, y;\n    cout << "Enter two numbers: ";\n    cin >> x >> y;\n    \n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Error: " << error << endl;\n    }\n    \n    return 0;\n}',
  hint: 'C++ supports multiple catch blocks for different exception types.'
},
{
  id: 'cpp_intro_39',
  topicId: 'cpp_intro',
  question: 'Create and use file I/O to write and read data.',
  mathSolution: 'Use ifstream for reading, ofstream for writing files.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Writing to file\n    ofstream outFile("test.txt");\n    if (outFile.is_open()) {\n        outFile << "Hello World" << endl;\n        outFile << "Line 2" << endl;\n        outFile.close();\n        cout << "File written successfully" << endl;\n    }\n    \n    // Reading from file\n    ifstream inFile("test.txt");\n    string line;\n    if (inFile.is_open()) {\n        cout << "File contents:" << endl;\n        while (getline(inFile, line)) {\n            cout << line << endl;\n        }\n        inFile.close();\n    }\n    \n    return 0;\n}',
  hint: 'Include <fstream> header for file operations.'
},
{
  id: 'cpp_intro_40',
  topicId: 'cpp_intro',
  question: 'Use smart pointers (unique_ptr) for automatic memory management.',
  mathSolution: 'unique_ptr automatically deletes object when out of scope.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired" << endl; }\n    ~Resource() { cout << "Resource released" << endl; }\n    void work() { cout << "Working..." << endl; }\n};\n\nint main() {\n    {\n        unique_ptr<Resource> ptr(new Resource());\n        ptr->work();\n    }\n    \n    cout << "Out of scope" << endl;\n    \n    return 0;\n}',
  hint: 'Smart pointers prevent memory leaks by automatic cleanup.'
},
{
  id: 'cpp_intro_41',
  topicId: 'cpp_intro',
  question: 'Create template function for generic programming.',
  mathSolution: 'Templates allow functions to work with any data type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate <typename T>\nvoid swap(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    cout << "max(5, 3): " << max(5, 3) << endl;\n    cout << "max(5.5, 3.2): " << max(5.5, 3.2) << endl;\n    \n    int x = 10, y = 20;\n    swap(x, y);\n    cout << "After swap: x=" << x << ", y=" << y << endl;\n    \n    return 0;\n}',
  hint: 'Template functions generate code at compile time for each type used.'
},
{
  id: 'cpp_intro_42',
  topicId: 'cpp_intro',
  question: 'Create template class for generic data structures.',
  mathSolution: 'Template classes allow creating type-independent containers.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T>\nclass Pair {\nprivate:\n    T first, second;\n    \npublic:\n    Pair(T a, T b) : first(a), second(b) {}\n    \n    T getMax() {\n        return (first > second) ? first : second;\n    }\n    \n    T getMin() {\n        return (first < second) ? first : second;\n    }\n    \n    void display() {\n        cout << "(" << first << ", " << second << ")" << endl;\n    }\n};\n\nint main() {\n    Pair<int> p1(10, 20);\n    Pair<double> p2(5.5, 3.2);\n    Pair<string> p3("Apple", "Banana");\n    \n    p1.display();\n    cout << "Max: " << p1.getMax() << endl;\n    \n    p2.display();\n    cout << "Max: " << p2.getMax() << endl;\n    \n    p3.display();\n    cout << "Min: " << p3.getMin() << endl;\n    \n    return 0;\n}',
  hint: 'Template classes are instantiated with specific types at compile time.'
},
{
  id: 'cpp_intro_43',
  topicId: 'cpp_intro',
  question: 'Use lambda expressions in C++11.',
  mathSolution: 'Lambda is anonymous function that can capture variables.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {5, 2, 8, 1, 9, 3};\n    \n    auto print = [](int n) { cout << n << " "; };\n    \n    cout << "Numbers: ";\n    for_each(numbers.begin(), numbers.end(), print);\n    cout << endl;\n    \n    sort(numbers.begin(), numbers.end(), [](int a, int b) {\n        return a > b;\n    });\n    \n    cout << "Descending: ";\n    for_each(numbers.begin(), numbers.end(), print);\n    cout << endl;\n    \n    int multiplier = 10;\n    auto multiply = [multiplier](int n) { return n * multiplier; };\n    \n    cout << "Multiplied by 10: ";\n    for (int n : numbers) {\n        cout << multiply(n) << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda syntax: [capture](parameters) -> return_type { body }'
},
{
  id: 'cpp_intro_44',
  topicId: 'cpp_intro',
  question: 'Understand lvalue and rvalue references (move semantics).',
  mathSolution: '&& denotes rvalue reference for move semantics.',
  codeSolution: '#include <iostream>\n#include <utility>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    int* data;\n    int size;\n    \npublic:\n    Buffer(int s) : size(s) {\n        data = new int[size];\n        cout << "Buffer allocated" << endl;\n    }\n    \n    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "Buffer moved" << endl;\n    }\n    \n    ~Buffer() {\n        delete[] data;\n        cout << "Buffer destroyed" << endl;\n    }\n};\n\nint main() {\n    Buffer b1(100);\n    Buffer b2 = move(b1);\n    \n    return 0;\n}',
  hint: 'Move semantics avoids unnecessary copying of resources.'
},
{
  id: 'cpp_intro_45',
  topicId: 'cpp_intro',
  question: 'Use chrono library for timing operations.',
  mathSolution: 'std::chrono provides high-precision time measurement.',
  codeSolution: '#include <iostream>\n#include <chrono>\n#include <thread>\nusing namespace std;\nusing namespace std::chrono;\n\nint main() {\n    auto start = high_resolution_clock::now();\n    \n    this_thread::sleep_for(milliseconds(500));\n    \n    auto end = high_resolution_clock::now();\n    auto duration = duration_cast<microseconds>(end - start);\n    \n    cout << "Time taken: " << duration.count() << " microseconds" << endl;\n    cout << " = " << duration_cast<milliseconds>(end - start).count() << " milliseconds" << endl;\n    \n    return 0;\n}',
  hint: 'Include <chrono> header for high-precision timing.'
},
{
  id: 'cpp_intro_46',
  topicId: 'cpp_intro',
  question: 'Use random number generation in C++11.',
  mathSolution: 'Use random_device, mt19937, and uniform_int_distribution.',
  codeSolution: '#include <iostream>\n#include <random>\nusing namespace std;\n\nint main() {\n    random_device rd;\n    mt19937 gen(rd());\n    \n    uniform_int_distribution<> intDist(1, 100);\n    uniform_real_distribution<> realDist(0.0, 1.0);\n    \n    cout << "Random integers: ";\n    for (int i = 0; i < 5; i++) {\n        cout << intDist(gen) << " ";\n    }\n    cout << endl;\n    \n    cout << "Random doubles: ";\n    for (int i = 0; i < 5; i++) {\n        cout << realDist(gen) << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use <random> header for better randomness than rand().'
},
{
  id: 'cpp_intro_47',
  topicId: 'cpp_intro',
  question: 'Use constexpr for compile-time evaluation.',
  mathSolution: 'constexpr forces evaluation at compile time when possible.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nconstexpr int square(int x) {\n    return x * x;\n}\n\nint main() {\n    constexpr int result = factorial(5);\n    constexpr int sq = square(7);\n    \n    cout << "5! = " << result << endl;\n    cout << "7^2 = " << sq << endl;\n    \n    int runtime = 10;\n    int runtimeSquare = square(runtime);\n    cout << "10^2 = " << runtimeSquare << endl;\n    \n    return 0;\n}',
  hint: 'constexpr functions can be evaluated at compile time or runtime.'
},
{
  id: 'cpp_intro_48',
  topicId: 'cpp_intro',
  question: 'Use decltype for type deduction.',
  mathSolution: 'decltype deduces type of expression at compile time.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    decltype(a) c = a;\n    decltype(b) d = b;\n    decltype(a + b) e = a + b;\n    \n    cout << "Type of c: " << typeid(c).name() << endl;\n    cout << "Type of d: " << typeid(d).name() << endl;\n    cout << "Type of e: " << typeid(e).name() << endl;\n    \n    auto add = [](auto x, auto y) -> decltype(x + y) {\n        return x + y;\n    };\n    \n    cout << "add(5, 3.2) = " << add(5, 3.2) << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic programming and auto return types.'
},
{
  id: 'cpp_intro_49',
  topicId: 'cpp_intro',
  question: 'Use initializer list for uniform initialization.',
  mathSolution: 'Braced initialization {} works for all types.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Point {\npublic:\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {}\n};\n\nint main() {\n    int a{10};\n    double b{3.14};\n    string s{"Hello"};\n    vector<int> v{1, 2, 3, 4, 5};\n    int arr[]{1, 2, 3, 4, 5};\n    \n    Point p{10, 20};\n    \n    cout << "a = " << a << endl;\n    cout << "b = " << b << endl;\n    cout << "s = " << s << endl;\n    cout << "Vector: ";\n    for (int n : v) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Uniform initialization prevents narrowing conversions and works everywhere.'
},
{
  id: 'cpp_intro_50',
  topicId: 'cpp_intro',
  question: 'Create a complete program demonstrating multiple C++ features.',
  mathSolution: 'Combine classes, templates, STL, and modern C++ features.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <string>\nusing namespace std;\n\ntemplate <typename T>\nclass DataProcessor {\nprivate:\n    vector<T> data;\n    \npublic:\n    void add(T item) { data.push_back(item); }\n    \n    T sum() {\n        return accumulate(data.begin(), data.end(), T(0));\n    }\n    \n    double average() {\n        if (data.empty()) return 0;\n        return static_cast<double>(sum()) / data.size();\n    }\n    \n    void sort() {\n        std::sort(data.begin(), data.end());\n    }\n    \n    void display() {\n        for (const auto& item : data) {\n            cout << item << " ";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    DataProcessor<int> intProcessor;\n    intProcessor.add(5);\n    intProcessor.add(3);\n    intProcessor.add(8);\n    intProcessor.add(1);\n    \n    cout << "Before sort: ";\n    intProcessor.display();\n    \n    intProcessor.sort();\n    cout << "After sort: ";\n    intProcessor.display();\n    \n    cout << "Sum: " << intProcessor.sum() << endl;\n    cout << "Average: " << intProcessor.average() << endl;\n    \n    DataProcessor<string> stringProcessor;\n    stringProcessor.add("apple");\n    stringProcessor.add("banana");\n    stringProcessor.add("cherry");\n    \n    cout << "Strings: ";\n    stringProcessor.display();\n    \n    return 0;\n}',
  hint: 'Modern C++ provides powerful features for generic and efficient programming.'
}
);