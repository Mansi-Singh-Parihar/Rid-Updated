QuizData.questions.push(
{
  id: 'cpp_oop_1',
  topicId: 'cpp_oop',
  question: 'Create a simple class with public members and access them.',
  mathSolution: 'Class defines blueprint; objects are instances.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n};\n\nint main() {\n    Person p1;\n    p1.name = "John";\n    p1.age = 25;\n    \n    cout << "Name: " << p1.name << ", Age: " << p1.age << endl;\n    return 0;\n}',
  hint: 'Use . operator to access members of an object.'
},
{
  id: 'cpp_oop_2',
  topicId: 'cpp_oop',
  question: 'Create a class with private members and public getter/setter methods.',
  mathSolution: 'Encapsulation hides data, provides controlled access.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\n    string accountNumber;\n    \npublic:\n    void setBalance(double b) { balance = b; }\n    double getBalance() { return balance; }\n    \n    void setAccountNumber(string acc) { accountNumber = acc; }\n    string getAccountNumber() { return accountNumber; }\n    \n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount > 0 && amount <= balance) balance -= amount;\n    }\n};\n\nint main() {\n    BankAccount acc;\n    acc.setBalance(1000);\n    acc.setAccountNumber("12345");\n    \n    acc.deposit(500);\n    cout << "Balance: " << acc.getBalance() << endl;\n    \n    return 0;\n}',
  hint: 'Private members are accessible only within the class.'
},
{
  id: 'cpp_oop_3',
  topicId: 'cpp_oop',
  question: 'Create a class with constructor and destructor.',
  mathSolution: 'Constructor initializes objects; destructor cleans up.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int rollNo;\n    \npublic:\n    // Constructor\n    Student(string n, int r) {\n        name = n;\n        rollNo = r;\n        cout << "Student created: " << name << endl;\n    }\n    \n    // Destructor\n    ~Student() {\n        cout << "Student destroyed: " << name << endl;\n    }\n    \n    void display() {\n        cout << "Name: " << name << ", Roll No: " << rollNo << endl;\n    }\n};\n\nint main() {\n    Student s1("John", 101);\n    Student s2("Alice", 102);\n    \n    s1.display();\n    s2.display();\n    \n    return 0;\n}',
  hint: 'Destructor is called automatically when object goes out of scope.'
},
{
  id: 'cpp_oop_4',
  topicId: 'cpp_oop',
  question: 'Use constructor initializer list for efficient initialization.',
  mathSolution: 'Initializer list initializes members before constructor body.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    const int id;\n    static int count;\n    \npublic:\n    // Constructor with initializer list\n    Point(int a, int b) : x(a), y(b), id(++count) {\n        cout << "Point " << id << " created at (" << x << "," << y << ")" << endl;\n    }\n    \n    void display() {\n        cout << "Point(" << x << "," << y << ")" << endl;\n    }\n};\n\nint Point::count = 0;\n\nint main() {\n    Point p1(10, 20);\n    Point p2(30, 40);\n    \n    return 0;\n}',
  hint: 'Use initializer list for const members, references, and efficiency.'
},
{
  id: 'cpp_oop_5',
  topicId: 'cpp_oop',
  question: 'Demonstrate inheritance with base and derived classes.',
  mathSolution: 'Derived class inherits members from base class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {}\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n    \n    void sleep() {\n        cout << name << " is sleeping" << endl;\n    }\n};\n\nclass Dog : public Animal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b) : Animal(n), breed(b) {}\n    \n    void bark() {\n        cout << name << " barks: Woof! Woof!" << endl;\n    }\n    \n    void wagTail() {\n        cout << name << " wags tail" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd");\n    myDog.eat();\n    myDog.sleep();\n    myDog.bark();\n    myDog.wagTail();\n    \n    return 0;\n}',
  hint: 'Use : public BaseClass to inherit from base class.'
},
{
  id: 'cpp_oop_6',
  topicId: 'cpp_oop',
  question: 'Demonstrate multi-level inheritance.',
  mathSolution: 'Derived class inherits from another derived class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    \npublic:\n    Vehicle(string b) : brand(b) {}\n    \n    void honk() {\n        cout << brand << " vehicle honks!" << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprotected:\n    string model;\n    \npublic:\n    Car(string b, string m) : Vehicle(b), model(m) {}\n    \n    void drive() {\n        cout << brand << " " << model << " is driving" << endl;\n    }\n};\n\nclass SportsCar : public Car {\nprivate:\n    int topSpeed;\n    \npublic:\n    SportsCar(string b, string m, int speed) : Car(b, m), topSpeed(speed) {}\n    \n    void race() {\n        cout << brand << " " << model << " racing at " << topSpeed << " km/h" << endl;\n    }\n};\n\nint main() {\n    SportsCar ferrari("Ferrari", "F8 Tributo", 340);\n    ferrari.honk();\n    ferrari.drive();\n    ferrari.race();\n    \n    return 0;\n}',
  hint: 'Multi-level inheritance creates hierarchy: Animal -> Mammal -> Dog.'
},
{
  id: 'cpp_oop_7',
  topicId: 'cpp_oop',
  question: 'Demonstrate multiple inheritance.',
  mathSolution: 'Class inherits from multiple base classes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Flying {\npublic:\n    void fly() {\n        cout << "Flying in the sky!" << endl;\n    }\n};\n\nclass Swimming {\npublic:\n    void swim() {\n        cout << "Swimming in water!" << endl;\n    }\n};\n\nclass Duck : public Flying, public Swimming {\nprivate:\n    string name;\n    \npublic:\n    Duck(string n) : name(n) {}\n    \n    void quack() {\n        cout << name << " says: Quack! Quack!" << endl;\n    }\n};\n\nint main() {\n    Duck donald("Donald");\n    donald.fly();\n    donald.swim();\n    donald.quack();\n    \n    return 0;\n}',
  hint: 'Multiple inheritance: class Derived : public Base1, public Base2'
},
{
  id: 'cpp_oop_8',
  topicId: 'cpp_oop',
  question: 'Use virtual functions for runtime polymorphism.',
  mathSolution: 'Virtual functions allow overriding in derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() {\n        cout << "Base class area" << endl;\n        return 0;\n    }\n    \n    virtual void draw() {\n        cout << "Drawing shape" << endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() override {\n        return width * height;\n    }\n    \n    void draw() override {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    Shape* shapes[2];\n    shapes[0] = new Circle(5);\n    shapes[1] = new Rectangle(4, 6);\n    \n    for (int i = 0; i < 2; i++) {\n        cout << "Area: " << shapes[i]->area() << endl;\n        shapes[i]->draw();\n    }\n    \n    delete shapes[0];\n    delete shapes[1];\n    \n    return 0;\n}',
  hint: 'virtual keyword enables dynamic dispatch at runtime.'
},
{
  id: 'cpp_oop_9',
  topicId: 'cpp_oop',
  question: 'Use pure virtual functions to create abstract classes.',
  mathSolution: 'Abstract classes cannot be instantiated.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual function\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n};\n\nclass Square : public Shape {\nprivate:\n    double side;\n    \npublic:\n    Square(double s) : side(s) {}\n    \n    double area() override {\n        return side * side;\n    }\n    \n    void draw() override {\n        cout << "Drawing square" << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[] = {new Circle(5), new Square(4)};\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        s->draw();\n        delete s;\n    }\n    \n    return 0;\n}',
  hint: 'Pure virtual functions: virtual return_type func() = 0;'
},
{
  id: 'cpp_oop_10',
  topicId: 'cpp_oop',
  question: 'Use static members to share data across all instances.',
  mathSolution: 'Static members belong to class, not instances.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int count;\n    int id;\n    \npublic:\n    Counter() {\n        count++;\n        id = count;\n    }\n    \n    static int getCount() {\n        return count;\n    }\n    \n    void display() {\n        cout << "Object " << id << " created. Total: " << count << endl;\n    }\n};\n\nint Counter::count = 0;\n\nint main() {\n    Counter c1, c2, c3;\n    \n    c1.display();\n    c2.display();\n    c3.display();\n    \n    cout << "Total objects: " << Counter::getCount() << endl;\n    \n    return 0;\n}',
  hint: 'Static members are initialized outside the class definition.'
},
{
  id: 'cpp_oop_11',
  topicId: 'cpp_oop',
  question: 'Use const member functions (read-only methods).',
  mathSolution: 'const methods cannot modify object state.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() const {\n        // width = 10;  // Error: cannot modify in const function\n        return width * height;\n    }\n    \n    double perimeter() const {\n        return 2 * (width + height);\n    }\n    \n    void scale(double factor) {\n        width *= factor;\n        height *= factor;\n    }\n    \n    void display() const {\n        cout << "Rectangle: " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    const Rectangle rect(10, 20);\n    \n    cout << "Area: " << rect.area() << endl;\n    cout << "Perimeter: " << rect.perimeter() << endl;\n    rect.display();\n    \n    // rect.scale(2);  // Error: cannot call non-const on const object\n    \n    return 0;\n}',
  hint: 'const member functions can be called on const objects.'
},
{
  id: 'cpp_oop_12',
  topicId: 'cpp_oop',
  question: 'Use friend function to access private members.',
  mathSolution: 'Friend functions are not members but can access private data.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length, width, height;\n    \npublic:\n    Box(int l, int w, int h) : length(l), width(w), height(h) {}\n    \n    // Friend function declaration\n    friend int calculateVolume(Box b);\n    friend void displayBox(Box b);\n};\n\n// Friend function definition\nint calculateVolume(Box b) {\n    return b.length * b.width * b.height;  // Accessing private members\n}\n\nvoid displayBox(Box b) {\n    cout << "Box: " << b.length << "x" << b.width << "x" << b.height << endl;\n}\n\nint main() {\n    Box box(10, 5, 3);\n    \n    displayBox(box);\n    cout << "Volume: " << calculateVolume(box) << endl;\n    \n    return 0;\n}',
  hint: 'Friend functions are declared inside class with friend keyword.'
},
{
  "id": "cpp_oop_13",
  "topicId": "cpp_oop",
  "question": "Use friend class to allow another class access to private members.",
  "mathSolution": "Friend class can access private members of another class.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Engine {\nprivate:\n    int horsepower;\n    string type;\n    \npublic:\n    Engine(int hp, string t) : horsepower(hp), type(t) {}\n    \n    friend class Car;  // Car can access Engine's private members\n};\n\nclass Car {\nprivate:\n    string model;\n    Engine engine;\n    \npublic:\n    Car(string m, int hp, string t) : model(m), engine(hp, t) {}\n    \n    void display() {\n        cout << \"Car: \" << model << endl;\n        cout << \"Engine: \" << engine.type << \" (\" << engine.horsepower << \" HP)\" << endl;\n    }\n};\n\nint main() {\n    Car myCar(\"Tesla Model S\", 670, \"Electric\");\n    myCar.display();\n    \n    return 0;\n}",
  "hint": "friend class grants full access to private members."
},
{
  id: 'cpp_oop_14',
  topicId: 'cpp_oop',
  question: 'Use this pointer to refer to current object.',
  mathSolution: 'this pointer points to current object instance.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprivate:\n    string name;\n    double salary;\n    \npublic:\n    Employee(string name, double salary) {\n        this->name = name;      // Using this to resolve name conflict\n        this->salary = salary;\n    }\n    \n    Employee& setSalary(double salary) {\n        this->salary = salary;\n        return *this;           // Return reference for chaining\n    }\n    \n    Employee& setBonus(double bonus) {\n        this->salary += bonus;\n        return *this;\n    }\n    \n    void display() {\n        cout << "Employee: " << this->name << ", Salary: $" << this->salary << endl;\n    }\n};\n\nint main() {\n    Employee emp("John", 50000);\n    \n    emp.setSalary(55000).setBonus(5000);  // Method chaining\n    emp.display();\n    \n    return 0;\n}',
  hint: 'this pointer is available in non-static member functions.'
},
{
  id: 'cpp_oop_15',
  topicId: 'cpp_oop',
  question: 'Implement operator overloading for custom class.',
  mathSolution: 'Overload operators to work with user-defined types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    // Operator overloading\n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    Complex operator*(const Complex& other) {\n        return Complex(real * other.real - imag * other.imag,\n                       real * other.imag + imag * other.real);\n    }\n    \n    bool operator==(const Complex& other) {\n        return real == other.real && imag == other.imag;\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    Complex c5 = c1 * c2;\n    \n    cout << "c1: "; c1.display();\n    cout << "c2: "; c2.display();\n    cout << "c1 + c2: "; c3.display();\n    cout << "c1 - c2: "; c4.display();\n    cout << "c1 * c2: "; c5.display();\n    \n    return 0;\n}',
  hint: 'Operator overloading makes user-defined types behave like built-in types.'
},
{
  id: 'cpp_oop_16',
  topicId: 'cpp_oop',
  question: 'Overload stream insertion (<<) and extraction (>>) operators.',
  mathSolution: 'Implement as friend functions for custom I/O.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    Point(int a = 0, int b = 0) : x(a), y(b) {}\n    \n    friend ostream& operator<<(ostream& os, const Point& p) {\n        os << "(" << p.x << ", " << p.y << ")";\n        return os;\n    }\n    \n    friend istream& operator>>(istream& is, Point& p) {\n        cout << "Enter x and y: ";\n        is >> p.x >> p.y;\n        return is;\n    }\n};\n\nint main() {\n    Point p1(10, 20);\n    Point p2;\n    \n    cout << "p1 = " << p1 << endl;\n    \n    cin >> p2;\n    cout << "p2 = " << p2 << endl;\n    \n    return 0;\n}',
  hint: 'Return reference to stream to enable chaining.'
},
{
  id: 'cpp_oop_17',
  topicId: 'cpp_oop',
  question: 'Overload prefix and postfix increment operators.',
  mathSolution: 'Postfix takes dummy int parameter to distinguish.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int value;\n    \npublic:\n    Counter(int v = 0) : value(v) {}\n    \n    // Prefix increment (++c)\n    Counter& operator++() {\n        ++value;\n        return *this;\n    }\n    \n    // Postfix increment (c++)\n    Counter operator++(int) {\n        Counter temp = *this;\n        ++value;\n        return temp;\n    }\n    \n    // Prefix decrement (--c)\n    Counter& operator--() {\n        --value;\n        return *this;\n    }\n    \n    // Postfix decrement (c--)\n    Counter operator--(int) {\n        Counter temp = *this;\n        --value;\n        return temp;\n    }\n    \n    friend ostream& operator<<(ostream& os, const Counter& c) {\n        os << c.value;\n        return os;\n    }\n};\n\nint main() {\n    Counter c(5);\n    \n    cout << "Initial: " << c << endl;\n    cout << "Prefix ++c: " << ++c << endl;\n    cout << "Postfix c++: " << c++ << endl;\n    cout << "After postfix: " << c << endl;\n    \n    return 0;\n}',
  hint: 'Postfix returns a copy, prefix returns reference for efficiency.'
},
{
  id: 'cpp_oop_18',
  topicId: 'cpp_oop',
  question: 'Overload subscript operator [] for custom container.',
  mathSolution: 'Return reference to allow assignment to elements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SafeArray {\nprivate:\n    int arr[10];\n    \npublic:\n    SafeArray() {\n        for (int i = 0; i < 10; i++) arr[i] = 0;\n    }\n    \n    int& operator[](int index) {\n        if (index < 0 || index >= 10) {\n            cout << "Index out of bounds!" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n    \n    const int& operator[](int index) const {\n        if (index < 0 || index >= 10) {\n            cout << "Index out of bounds!" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n};\n\nint main() {\n    SafeArray arr;\n    \n    arr[3] = 42;\n    arr[7] = 99;\n    \n    cout << "arr[3] = " << arr[3] << endl;\n    cout << "arr[7] = " << arr[7] << endl;\n    \n    return 0;\n}',
  hint: 'Provide const version for const objects.'
},
{
  id: 'cpp_oop_19',
  topicId: 'cpp_oop',
  question: 'Create a copy constructor for deep copying.',
  mathSolution: 'Copy constructor creates copy of existing object.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* str;\n    int length;\n    \npublic:\n    // Constructor\n    String(const char* s) {\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n    \n    // Copy constructor (deep copy)\n    String(const String& other) {\n        length = other.length;\n        str = new char[length + 1];\n        strcpy(str, other.str);\n        cout << "Copy constructor called" << endl;\n    }\n    \n    // Destructor\n    ~String() {\n        delete[] str;\n    }\n    \n    void display() {\n        cout << str << endl;\n    }\n    \n    void modify(const char* s) {\n        delete[] str;\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;  // Copy constructor called\n    \n    cout << "s1: "; s1.display();\n    cout << "s2: "; s2.display();\n    \n    s1.modify("World");\n    \n    cout << "After modifying s1:\\n";\n    cout << "s1: "; s1.display();\n    cout << "s2: "; s2.display();  // Unchanged (deep copy)\n    \n    return 0;\n}',
  hint: 'Copy constructor is called when object is passed by value or initialized from another object.'
},
{
  id: 'cpp_oop_20',
  topicId: 'cpp_oop',
  question: 'Implement move constructor and move assignment operator (C++11).',
  mathSolution: 'Move semantics transfer ownership of resources.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    char* data;\n    int size;\n    \npublic:\n    // Constructor\n    Buffer(int s) : size(s) {\n        data = new char[size];\n        cout << "Buffer of size " << size << " created" << endl;\n    }\n    \n    // Destructor\n    ~Buffer() {\n        delete[] data;\n        cout << "Buffer destroyed" << endl;\n    }\n    \n    // Copy constructor\n    Buffer(const Buffer& other) : size(other.size) {\n        data = new char[size];\n        memcpy(data, other.data, size);\n        cout << "Copy constructor" << endl;\n    }\n    \n    // Move constructor\n    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "Move constructor" << endl;\n    }\n    \n    // Move assignment operator\n    Buffer& operator=(Buffer&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            size = other.size;\n            other.data = nullptr;\n            other.size = 0;\n            cout << "Move assignment" << endl;\n        }\n        return *this;\n    }\n};\n\nint main() {\n    Buffer b1(100);\n    Buffer b2 = move(b1);  // Move constructor\n    Buffer b3(50);\n    b3 = move(b2);         // Move assignment\n    \n    return 0;\n}',
  hint: 'Move semantics improve performance by transferring resources instead of copying.'
},
{
  id: 'cpp_oop_21',
  topicId: 'cpp_oop',
  question: 'Create a class with static factory method.',
  mathSolution: 'Static method creates and returns class instances.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Color {\nprivate:\n    int r, g, b;\n    \n    // Private constructor\n    Color(int red, int green, int blue) : r(red), g(green), b(blue) {}\n    \npublic:\n    // Factory methods\n    static Color red() {\n        return Color(255, 0, 0);\n    }\n    \n    static Color green() {\n        return Color(0, 255, 0);\n    }\n    \n    static Color blue() {\n        return Color(0, 0, 255);\n    }\n    \n    static Color white() {\n        return Color(255, 255, 255);\n    }\n    \n    static Color black() {\n        return Color(0, 0, 0);\n    }\n    \n    static Color custom(int red, int green, int blue) {\n        return Color(red, green, blue);\n    }\n    \n    void display() {\n        cout << "RGB(" << r << ", " << g << ", " << b << ")" << endl;\n    }\n};\n\nint main() {\n    Color c1 = Color::red();\n    Color c2 = Color::green();\n    Color c3 = Color::custom(100, 150, 200);\n    \n    c1.display();\n    c2.display();\n    c3.display();\n    \n    return 0;\n}',
  hint: 'Factory pattern centralizes object creation logic.'
},
{
  id: 'cpp_oop_22',
  topicId: 'cpp_oop',
  question: 'Create a singleton class pattern.',
  mathSolution: 'Ensures only one instance of class exists.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    static DatabaseConnection* instance;\n    bool connected;\n    \n    // Private constructor\n    DatabaseConnection() : connected(false) {\n        cout << "DatabaseConnection created" << endl;\n    }\n    \npublic:\n    // Delete copy constructor and assignment\n    DatabaseConnection(const DatabaseConnection&) = delete;\n    DatabaseConnection& operator=(const DatabaseConnection&) = delete;\n    \n    static DatabaseConnection* getInstance() {\n        if (instance == nullptr) {\n            instance = new DatabaseConnection();\n        }\n        return instance;\n    }\n    \n    void connect() {\n        if (!connected) {\n            connected = true;\n            cout << "Connected to database" << endl;\n        }\n    }\n    \n    void disconnect() {\n        if (connected) {\n            connected = false;\n            cout << "Disconnected from database" << endl;\n        }\n    }\n    \n    void query(const string& sql) {\n        if (connected) {\n            cout << "Executing: " << sql << endl;\n        } else {\n            cout << "Not connected!" << endl;\n        }\n    }\n};\n\nDatabaseConnection* DatabaseConnection::instance = nullptr;\n\nint main() {\n    DatabaseConnection* db1 = DatabaseConnection::getInstance();\n    DatabaseConnection* db2 = DatabaseConnection::getInstance();\n    \n    cout << "Same instance? " << (db1 == db2 ? "Yes" : "No") << endl;\n    \n    db1->connect();\n    db1->query("SELECT * FROM users");\n    \n    return 0;\n}',
  hint: 'Singleton ensures only one instance exists globally.'
},
{
  id: 'cpp_oop_23',
  topicId: 'cpp_oop',
  question: 'Create a class with nested class (inner class).',
  mathSolution: 'Class defined inside another class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass LinkedList {\nprivate:\n    class Node {\n    public:\n        int data;\n        Node* next;\n        Node(int val) : data(val), next(nullptr) {}\n    };\n    \n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void insert(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    // Iterator class\n    class Iterator {\n    private:\n        Node* current;\n    public:\n        Iterator(Node* node) : current(node) {}\n        \n        int operator*() { return current->data; }\n        \n        Iterator& operator++() {\n            current = current->next;\n            return *this;\n        }\n        \n        bool operator!=(const Iterator& other) {\n            return current != other.current;\n        }\n    };\n    \n    Iterator begin() { return Iterator(head); }\n    Iterator end() { return Iterator(nullptr); }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.insert(10);\n    list.insert(20);\n    list.insert(30);\n    \n    for (int val : list) {\n        cout << val << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Nested classes are used for helper classes closely tied to outer class.'
},
{
  id: 'cpp_oop_24',
  topicId: 'cpp_oop',
  question: 'Use virtual destructor for proper cleanup of derived objects.',
  mathSolution: 'Virtual destructor ensures derived destructor is called.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\n    \npublic:\n    Derived() {\n        data = new int[100];\n        cout << "Derived constructor, allocated memory" << endl;\n    }\n    \n    ~Derived() {\n        delete[] data;\n        cout << "Derived destructor, freed memory" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    delete ptr;  // Calls Derived destructor then Base destructor\n    \n    return 0;\n}',
  hint: 'Always make destructor virtual in polymorphic base classes.'
},
{
  "id": "cpp_oop_25",
  "topicId": "cpp_oop",
  "question": "Create RAII (Resource Acquisition Is Initialization) class.",
  "mathSolution": "Resource management using constructor/destructor.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    FILE* file;\n    string filename;\n    \npublic:\n    FileHandler(const string& name, const string& mode) : filename(name) {\n        const char* m = mode.c_str();\n        file = fopen(name.c_str(), m);\n        if (file) {\n            cout << \"File '\" << filename << \"' opened successfully\" << endl;\n        } else {\n            cout << \"Failed to open file\" << endl;\n        }\n    }\n    \n    ~FileHandler() {\n        if (file) {\n            fclose(file);\n            cout << \"File '\" << filename << \"' closed\" << endl;\n        }\n    }\n    \n    void write(const string& text) {\n        if (file) {\n            fprintf(file, \"%s\\n\", text.c_str());\n        }\n    }\n    \n    // Prevent copying\n    FileHandler(const FileHandler&) = delete;\n    FileHandler& operator=(const FileHandler&) = delete;\n    \n    // Allow moving\n    FileHandler(FileHandler&& other) noexcept : file(other.file), filename(other.filename) {\n        other.file = nullptr;\n    }\n};\n\nint main() {\n    {\n        FileHandler fh(\"test.txt\", \"w\");\n        fh.write(\"Hello RAII!\");\n        // File automatically closed when fh goes out of scope\n    }\n    cout << \"File already closed\" << endl;\n    \n    return 0;\n}",
  "hint": "RAII ensures resources are properly released when objects go out of scope."
},
{
  "id": "cpp_oop_26",
  "topicId": "cpp_oop",
  "question": "Use dynamic_cast for safe downcasting.",
  "mathSolution": "dynamic_cast returns null or throws bad_cast for invalid casts.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << \"Drawing shape\" << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    void radius() { cout << \"Circle radius method\" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"Drawing square\" << endl; }\n    void side() { cout << \"Square side method\" << endl; }\n};\n\nint main() {\n    Shape* shapePtr = new Circle();\n    \n    // Downcast with dynamic_cast\n    Circle* circlePtr = dynamic_cast<Circle*>(shapePtr);\n    if (circlePtr) {\n        cout << \"Successfully cast to Circle\" << endl;\n        circlePtr->radius();\n    }\n    \n    // Invalid cast returns nullptr\n    Square* squarePtr = dynamic_cast<Square*>(shapePtr);\n    if (squarePtr) {\n        cout << \"This won't print\" << endl;\n    } else {\n        cout << \"Invalid cast to Square\" << endl;\n    }\n    \n    delete shapePtr;\n    \n    return 0;\n}",
  "hint": "dynamic_cast requires at least one virtual function in base class."
},
{
  id: 'cpp_oop_27',
  topicId: 'cpp_oop',
  question: 'Use typeid to get runtime type information.',
  mathSolution: 'typeid returns type_info object for polymorphic types.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nint main() {\n    Base* b1 = new Derived1();\n    Base* b2 = new Derived2();\n    \n    cout << "Type of b1: " << typeid(*b1).name() << endl;\n    cout << "Type of b2: " << typeid(*b2).name() << endl;\n    \n    if (typeid(*b1) == typeid(Derived1)) {\n        cout << "b1 points to Derived1" << endl;\n    }\n    \n    if (typeid(*b2) == typeid(Derived2)) {\n        cout << "b2 points to Derived2" << endl;\n    }\n    \n    delete b1;\n    delete b2;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI to be enabled.'
},
{
  id: 'cpp_oop_28',
  topicId: 'cpp_oop',
  question: 'Create template class for generic data structures.',
  mathSolution: 'Template classes work with any data type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nclass Stack {\nprivate:\n    static const int MAX = 100;\n    T arr[MAX];\n    int top;\n    \npublic:\n    Stack() : top(-1) {}\n    \n    void push(T value) {\n        if (top < MAX - 1) {\n            arr[++top] = value;\n        }\n    }\n    \n    T pop() {\n        if (top >= 0) {\n            return arr[top--];\n        }\n        return T();\n    }\n    \n    T peek() {\n        if (top >= 0) return arr[top];\n        return T();\n    }\n    \n    bool isEmpty() { return top == -1; }\n    int size() { return top + 1; }\n};\n\nint main() {\n    Stack<int> intStack;\n    intStack.push(10);\n    intStack.push(20);\n    intStack.push(30);\n    \n    cout << "Int stack pop: " << intStack.pop() << endl;\n    \n    Stack<string> stringStack;\n    stringStack.push("Hello");\n    stringStack.push("World");\n    \n    cout << "String stack pop: " << stringStack.pop() << endl;\n    \n    return 0;\n}',
  hint: 'Template classes are defined with template<typename T> before class.'
},
{
  id: 'cpp_oop_29',
  topicId: 'cpp_oop',
  question: 'Create class with constexpr constructor (C++11).',
  mathSolution: 'constexpr constructor creates compile-time constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n    \n    constexpr Point operator+(const Point& other) const {\n        return Point(x + other.x, y + other.y);\n    }\n};\n\nint main() {\n    constexpr Point p1(10, 20);\n    constexpr Point p2(5, 5);\n    constexpr Point p3 = p1 + p2;\n    \n    cout << "p3: (" << p3.getX() << ", " << p3.getY() << ")" << endl;\n    \n    // Compile-time array size\n    int arr[p3.getX()];\n    cout << "Array size: " << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'constexpr objects and functions are evaluated at compile time.'
},
{
  id: 'cpp_oop_30',
  topicId: 'cpp_oop',
  question: 'Use final specifier to prevent inheritance.',
  mathSolution: 'final keyword prevents further overriding or inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n};\n\nclass Derived final : public Base {\npublic:\n    void display() override {\n        cout << "Derived display" << endl;\n    }\n};\n\n// class Further : public Derived { };  // Error: Derived is final\n\nclass Shape final {\n    // This class cannot be inherited\n};\n\nclass AnotherBase {\npublic:\n    virtual void process() final {\n        cout << "Final method cannot be overridden" << endl;\n    }\n    \n    virtual void calculate() {\n        cout << "Can be overridden" << endl;\n    }\n};\n\nclass AnotherDerived : public AnotherBase {\npublic:\n    // void process() override { }  // Error: process is final\n    void calculate() override {\n        cout << "Overridden calculate" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    d.display();\n    \n    AnotherDerived ad;\n    ad.process();\n    ad.calculate();\n    \n    return 0;\n}',
  hint: 'final prevents inheritance of class or overriding of virtual function.'
},
{
  id: 'cpp_oop_31',
  topicId: 'cpp_oop',
  question: 'Use override specifier for virtual functions.',
  mathSolution: 'override ensures function is overriding a virtual from base.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func1() { cout << "Base func1" << endl; }\n    virtual void func2(int x) { cout << "Base func2: " << x << endl; }\n    virtual void func3() { cout << "Base func3" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void func1() override {\n        cout << "Derived func1" << endl;\n    }\n    \n    void func2(int x) override {\n        cout << "Derived func2: " << x * 2 << endl;\n    }\n    \n    // void func3(int x) override { }  // Error: no matching virtual func\n    \n    // Compiler will catch signature mismatches\n};\n\nint main() {\n    Derived d;\n    d.func1();\n    d.func2(5);\n    \n    return 0;\n}',
  hint: 'override helps catch errors when base class virtual function signature changes.'
},
{
  id: 'cpp_oop_32',
  topicId: 'cpp_oop',
  question: 'Create class with explicit constructor to prevent implicit conversion.',
  mathSolution: 'explicit prevents automatic type conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    explicit Integer(int v) : value(v) {\n        cout << "Integer created with value: " << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    explicit Complex(double r) : real(r), imag(0) {}\n    Complex(double r, double i) : real(r), imag(i) {}\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    // Integer i1 = 10;  // Error: implicit conversion not allowed\n    Integer i1(10);      // OK: explicit constructor\n    Integer i2 = Integer(20);  // OK: explicit\n    \n    // Complex c1 = 3.14;  // Error: explicit constructor\n    Complex c1(3.14);      // OK: explicit\n    Complex c2(3.14, 2.5); // OK: not explicit\n    \n    cout << "Integer value: " << i1.getValue() << endl;\n    c1.display();\n    c2.display();\n    \n    return 0;\n}',
  hint: 'explicit prevents unwanted implicit conversions that can lead to bugs.'
},
{
  id: 'cpp_oop_33',
  topicId: 'cpp_oop',
  question: 'Use default and delete keywords for special member functions.',
  mathSolution: 'default generates default implementation; delete removes function.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass DefaultExample {\npublic:\n    DefaultExample() = default;  // Use compiler-generated default constructor\n    ~DefaultExample() = default; // Use compiler-generated destructor\n    \n    // Copy operations\n    DefaultExample(const DefaultExample&) = default;\n    DefaultExample& operator=(const DefaultExample&) = default;\n    \n    // Move operations (C++11)\n    DefaultExample(DefaultExample&&) = default;\n    DefaultExample& operator=(DefaultExample&&) = default;\n};\n\nclass NonCopyable {\npublic:\n    NonCopyable() = default;\n    ~NonCopyable() = default;\n    \n    // Delete copy operations\n    NonCopyable(const NonCopyable&) = delete;\n    NonCopyable& operator=(const NonCopyable&) = delete;\n    \n    // Allow move (optional)\n    NonCopyable(NonCopyable&&) = default;\n    NonCopyable& operator=(NonCopyable&&) = default;\n};\n\nint main() {\n    DefaultExample ex1;\n    DefaultExample ex2 = ex1;  // Copy allowed\n    \n    NonCopyable nc1;\n    // NonCopyable nc2 = nc1;  // Error: copy constructor is deleted\n    \n    cout << "Default and delete usage demonstrated" << endl;\n    \n    return 0;\n}',
  hint: '=default requests compiler-generated version; =delete disables the function.'
},
{
  id: 'cpp_oop_34',
  topicId: 'cpp_oop',
  question: 'Create polymorphic container using base class pointers.',
  mathSolution: 'Base pointers can point to derived objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprotected:\n    string name;\n    double salary;\n    \npublic:\n    Employee(string n, double s) : name(n), salary(s) {}\n    virtual double calculateBonus() { return salary * 0.05; }\n    virtual void display() {\n        cout << name << ": $" << salary << ", Bonus: $" << calculateBonus() << endl;\n    }\n    virtual ~Employee() {}\n};\n\nclass Manager : public Employee {\nprivate:\n    int teamSize;\n    \npublic:\n    Manager(string n, double s, int ts) : Employee(n, s), teamSize(ts) {}\n    \n    double calculateBonus() override {\n        return salary * 0.10 + teamSize * 500;\n    }\n    \n    void display() override {\n        cout << "Manager " << name << ": $" << salary << ", Bonus: $" << calculateBonus() << endl;\n    }\n};\n\nclass Developer : public Employee {\nprivate:\n    string language;\n    \npublic:\n    Developer(string n, double s, string lang) : Employee(n, s), language(lang) {}\n    \n    double calculateBonus() override {\n        return salary * 0.08;\n    }\n};\n\nint main() {\n    vector<Employee*> employees;\n    employees.push_back(new Employee("Alice", 50000));\n    employees.push_back(new Manager("Bob", 80000, 5));\n    employees.push_back(new Developer("Charlie", 60000, "C++"));\n    \n    for (Employee* e : employees) {\n        e->display();\n        delete e;\n    }\n    \n    return 0;\n}',
  hint: 'Base class pointers enable polymorphic behavior for derived objects.'
},
{
  id: 'cpp_oop_35',
  topicId: 'cpp_oop',
  question: 'Create class with private static member function.',
  mathSolution: 'Static member functions can be private for internal use.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\nprivate:\n    static int instanceCount;\n    \n    Logger() {\n        instanceCount++;\n    }\n    \n    static void logMessage(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n    \npublic:\n    static Logger* getInstance() {\n        logMessage("Creating logger instance");\n        return new Logger();\n    }\n    \n    static int getInstanceCount() {\n        return instanceCount;\n    }\n    \n    void info(const string& msg) {\n        cout << "[INFO] " << msg << endl;\n    }\n};\n\nint Logger::instanceCount = 0;\n\nint main() {\n    Logger* logger1 = Logger::getInstance();\n    Logger* logger2 = Logger::getInstance();\n    \n    cout << "Instances created: " << Logger::getInstanceCount() << endl;\n    \n    logger1->info("Application started");\n    \n    delete logger1;\n    delete logger2;\n    \n    return 0;\n}',
  hint: 'Private static functions are useful for internal implementation details.'
},
{
  "id": "cpp_oop_36",
  "topicId": "cpp_oop",
  "question": "Use pointer to member function for callback.",
  "mathSolution": "Store and call member functions via pointers.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <utility>\nusing namespace std;\n\nclass Button {\nprivate:\n    string label;\n    \npublic:\n    Button(string lbl) : label(lbl) {}\n    \n    void onClick() {\n        cout << \"Button '\" << label << \"' clicked\" << endl;\n    }\n    \n    void onHover() {\n        cout << \"Button '\" << label << \"' hovered\" << endl;\n    }\n};\n\nclass EventHandler {\nprivate:\n    vector<pair<Button*, void(Button::*)()>> handlers;\n    \npublic:\n    void addHandler(Button* btn, void(Button::*handler)()) {\n        handlers.push_back({btn, handler});\n    }\n    \n    void triggerAll() {\n        for (auto& handlerPair : handlers) {\n            Button* btn = handlerPair.first;\n            void(Button::*func)() = handlerPair.second;\n            (btn->*func)();\n        }\n    }\n};\n\nint main() {\n    Button btn1(\"OK\");\n    Button btn2(\"Cancel\");\n    \n    EventHandler handler;\n    handler.addHandler(&btn1, &Button::onClick);\n    handler.addHandler(&btn2, &Button::onHover);\n    \n    handler.triggerAll();\n    \n    return 0;\n}",
  "hint": "Pointer to member function syntax: (object->*funcPtr)()"
},
{
  id: 'cpp_oop_37',
  topicId: 'cpp_oop',
  question: 'Create class with mutable member variable.',
  mathSolution: 'mutable allows modification in const member functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Cache {\nprivate:\n    int data;\n    mutable int accessCount;  // Can be modified in const functions\n    \npublic:\n    Cache(int d) : data(d), accessCount(0) {}\n    \n    int getData() const {\n        accessCount++;  // Allowed because mutable\n        return data;\n    }\n    \n    int getAccessCount() const {\n        return accessCount;\n    }\n    \n    void setData(int d) {\n        data = d;\n    }\n};\n\nint main() {\n    const Cache cache(42);\n    \n    cout << "Data: " << cache.getData() << endl;\n    cout << "Data: " << cache.getData() << endl;\n    cout << "Data: " << cache.getData() << endl;\n    \n    cout << "Access count: " << cache.getAccessCount() << endl;\n    \n    return 0;\n}',
  hint: 'mutable is useful for caching, logging, and mutex locks in const functions.'
},
{
  id: 'cpp_oop_38',
  topicId: 'cpp_oop',
  question: 'Create class with reference member and member initializer list.',
  mathSolution: 'Reference members must be initialized in initializer list.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\npublic:\n    void log(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n};\n\nclass Service {\nprivate:\n    Logger& logger;  // Reference member\n    string name;\n    const int id;    // const member\n    \npublic:\n    // Reference and const must be initialized in initializer list\n    Service(string n, int i, Logger& log) : name(n), id(i), logger(log) {\n        // Cannot assign reference or const in constructor body\n    }\n    \n    void process() {\n        logger.log("Processing " + name + " (ID: " + to_string(id) + ")");\n    }\n};\n\nint main() {\n    Logger logger;\n    Service svc("Database", 1001, logger);\n    svc.process();\n    \n    return 0;\n}',
  hint: 'Reference and const members must be initialized in initializer list, not in body.'
},
{
  id: 'cpp_oop_39',
  topicId: 'cpp_oop',
  question: 'Implement class with private inheritance (has-a relationship).',
  mathSolution: 'Private inheritance is implementation inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Engine {\npublic:\n    void start() { cout << "Engine started" << endl; }\n    void stop() { cout << "Engine stopped" << endl; }\n};\n\nclass Car : private Engine {  // Private inheritance\npublic:\n    void drive() {\n        start();    // Can access public methods of Engine\n        cout << "Car is driving" << endl;\n        stop();\n    }\n};\n\nclass SportsCar : public Car {\npublic:\n    void race() {\n        // Cannot access Engine methods here (private inheritance)\n        cout << "Racing!" << endl;\n    }\n};\n\nint main() {\n    Car myCar;\n    myCar.drive();\n    \n    // myCar.start();  // Error: start is private due to private inheritance\n    \n    return 0;\n}',
  hint: 'Private inheritance is recommended only for strict has-a relationships.'
},
{
  id: 'cpp_oop_40',
  topicId: 'cpp_oop',
  question: 'Create class with protected inheritance.',
  mathSolution: 'Protected inheritance makes public/protected members protected in derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << "Public function" << endl; }\nprotected:\n    void protectedFunc() { cout << "Protected function" << endl; }\nprivate:\n    void privateFunc() { cout << "Private function" << endl; }\n};\n\nclass Derived : protected Base {\npublic:\n    void accessBase() {\n        publicFunc();    // OK: becomes protected in Derived\n        protectedFunc(); // OK: becomes protected in Derived\n        // privateFunc(); // Error: private in Base\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void accessBaseFurther() {\n        publicFunc();    // OK: protected in Derived, accessible here\n        protectedFunc(); // OK: protected in Derived, accessible here\n    }\n};\n\nint main() {\n    Derived d;\n    // d.publicFunc();   // Error: publicFunc is protected in Derived\n    d.accessBase();      // OK: public member of Derived\n    \n    return 0;\n}',
  hint: 'Protected inheritance is rarely used; prefer composition over protected inheritance.'
},
{
  id: 'cpp_oop_41',
  topicId: 'cpp_oop',
  question: 'Create class with virtual base class to solve diamond problem.',
  mathSolution: 'Virtual base class ensures only one instance of grandparent.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal() { cout << "Animal constructor" << endl; }\n    virtual void speak() { cout << "Animal speaks" << endl; }\n};\n\nclass Mammal : virtual public Animal {\npublic:\n    Mammal() { cout << "Mammal constructor" << endl; }\n};\n\nclass Bird : virtual public Animal {\npublic:\n    Bird() { cout << "Bird constructor" << endl; }\n};\n\nclass Bat : public Mammal, public Bird {\npublic:\n    Bat() { cout << "Bat constructor" << endl; }\n    \n    void speak() override {\n        cout << "Bat squeaks" << endl;\n    }\n};\n\nint main() {\n    Bat bat;\n    bat.speak();\n    \n    return 0;\n}',
  hint: 'Virtual inheritance solves diamond problem by sharing single base instance.'
},
{
  id: 'cpp_oop_42',
  topicId: 'cpp_oop',
  question: 'Use CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'Template parameter pattern enables compile-time polymorphism.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->doDraw();\n    }\n};\n\nclass Circle : public Shape<Circle> {\npublic:\n    void doDraw() {\n        cout << "Drawing circle" << endl;\n    }\n};\n\nclass Rectangle : public Shape<Rectangle> {\npublic:\n    void doDraw() {\n        cout << "Drawing rectangle" << endl;\n    }\n};\n\ntemplate<typename T>\nvoid render(Shape<T>& shape) {\n    shape.draw();\n}\n\nint main() {\n    Circle c;\n    Rectangle r;\n    \n    render(c);\n    render(r);\n    \n    return 0;\n}',
  hint: 'CRTP achieves static polymorphism without virtual function overhead.'
},
{
  id: 'cpp_oop_43',
  topicId: 'cpp_oop',
  question: 'Create class with static_assert for compile-time checks.',
  mathSolution: 'static_assert validates conditions at compile time.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nclass Container {\n    static_assert(is_default_constructible<T>::value,\n                  "T must be default constructible");\n    static_assert(is_copy_constructible<T>::value,\n                  "T must be copy constructible");\n    \n    T data;\n    \npublic:\n    Container() : data() {}\n    \n    void set(T value) { data = value; }\n    T get() const { return data; }\n};\n\nclass NonCopyable {\n    NonCopyable(const NonCopyable&) = delete;\npublic:\n    NonCopyable() = default;\n};\n\nint main() {\n    Container<int> c1;           // OK\n    Container<string> c2;        // OK\n    // Container<NonCopyable> c3; // Error: NonCopyable not copy constructible\n    \n    c1.set(42);\n    cout << c1.get() << endl;\n    \n    return 0;\n}',
  hint: 'static_assert catches errors early at compile time.'
},
{
  id: 'cpp_oop_44',
  topicId: 'cpp_oop',
  question: 'Implement class with std::unique_ptr for automatic memory management.',
  mathSolution: 'Smart pointers manage heap memory automatically.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired" << endl; }\n    ~Resource() { cout << "Resource released" << endl; }\n    void work() { cout << "Working..." << endl; }\n};\n\nclass ResourceManager {\nprivate:\n    unique_ptr<Resource> resource;\n    unique_ptr<int[]> data;\n    \npublic:\n    ResourceManager() {\n        resource = make_unique<Resource>();\n        data = make_unique<int[]>(100);\n        cout << "Manager created" << endl;\n    }\n    \n    // No need for manual delete - unique_ptr handles it\n    \n    void use() {\n        resource->work();\n        data[0] = 42;\n        cout << "Data[0] = " << data[0] << endl;\n    }\n};\n\nint main() {\n    ResourceManager manager;\n    manager.use();\n    \n    // Resources automatically released when manager goes out of scope\n    \n    return 0;\n}',
  hint: 'std::unique_ptr provides exclusive ownership and automatic cleanup.'
},
{
  id: 'cpp_oop_45',
  topicId: 'cpp_oop',
  question: 'Implement class with std::shared_ptr for shared ownership.',
  mathSolution: 'Shared pointers allow multiple owners of same resource.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Widget {\nprivate:\n    int id;\n    \npublic:\n    Widget(int i) : id(i) {\n        cout << "Widget " << id << " created" << endl;\n    }\n    \n    ~Widget() {\n        cout << "Widget " << id << " destroyed" << endl;\n    }\n    \n    void display() {\n        cout << "Widget " << id << endl;\n    }\n};\n\nclass Container {\nprivate:\n    vector<shared_ptr<Widget>> widgets;\n    \npublic:\n    void addWidget(shared_ptr<Widget> w) {\n        widgets.push_back(w);\n    }\n    \n    void showAll() {\n        for (auto& w : widgets) {\n            w->display();\n        }\n    }\n    \n    int getWidgetCount() {\n        return widgets.size();\n    }\n};\n\nint main() {\n    auto w1 = make_shared<Widget>(1);\n    auto w2 = make_shared<Widget>(2);\n    \n    Container container;\n    container.addWidget(w1);\n    container.addWidget(w2);\n    container.addWidget(w1);  // Share same widget\n    \n    cout << "Widget use count: " << w1.use_count() << endl;\n    container.showAll();\n    \n    return 0;\n}',
  hint: 'shared_ptr maintains reference count; resource freed when count reaches zero.'
},
{
  id: 'cpp_oop_46',
  topicId: 'cpp_oop',
  question: 'Create class with weak_ptr to break circular references.',
  mathSolution: 'weak_ptr observes shared_ptr without affecting reference count.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Person;\n\nclass Family {\npublic:\n    weak_ptr<Person> members[2];\n};\n\nclass Person : public enable_shared_from_this<Person> {\nprivate:\n    string name;\n    weak_ptr<Person> spouse;  // Use weak_ptr to break cycle\n    \npublic:\n    Person(string n) : name(n) {\n        cout << name << " created" << endl;\n    }\n    \n    ~Person() {\n        cout << name << " destroyed" << endl;\n    }\n    \n    void setSpouse(shared_ptr<Person> s) {\n        spouse = s;\n    }\n    \n    void display() {\n        cout << name;\n        if (auto s = spouse.lock()) {\n            cout << " is married to " << s->name;\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    {\n        auto alice = make_shared<Person>("Alice");\n        auto bob = make_shared<Person>("Bob");\n        \n        alice->setSpouse(bob);\n        bob->setSpouse(alice);\n        \n        alice->display();\n        bob->display();\n        \n        // No memory leak - weak_ptr breaks cycle\n    }\n    \n    cout << "All destroyed" << endl;\n    \n    return 0;\n}',
  hint: 'weak_ptr prevents circular reference memory leaks in shared ownership.'
},
{
  id: 'cpp_oop_47',
  topicId: 'cpp_oop',
  question: 'Create class with delegating constructor (C++11).',
  mathSolution: 'Constructor can call another constructor in same class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double width, height;\n    string color;\n    \npublic:\n    // Primary constructor\n    Rectangle(double w, double h, string c) : width(w), height(h), color(c) {\n        cout << "Rectangle: " << width << "x" << height << ", " << color << endl;\n    }\n    \n    // Delegating constructors\n    Rectangle(double side, string c) : Rectangle(side, side, c) {\n        cout << "Square constructor" << endl;\n    }\n    \n    Rectangle(double w, double h) : Rectangle(w, h, "white") {\n        cout << "With default color" << endl;\n    }\n    \n    Rectangle() : Rectangle(1.0, 1.0, "white") {\n        cout << "Default constructor" << endl;\n    }\n    \n    double area() const { return width * height; }\n};\n\nint main() {\n    Rectangle r1(5, 3, "red");\n    Rectangle r2(4, 6);\n    Rectangle r3(10, "blue");\n    Rectangle r4;\n    \n    cout << r1.area() << endl;\n    \n    return 0;\n}',
  hint: 'Delegating constructors reduce code duplication.'
},
{
  id: 'cpp_oop_48',
  topicId: 'cpp_oop',
  question: 'Create class with inline static member (C++17).',
  mathSolution: 'Inline static members can be initialized inside class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Configuration {\npublic:\n    inline static string appName = "MyApp";\n    inline static int version = 1;\n    inline static double pi = 3.14159;\n    inline static const string author = "John Doe";\n    \n    static void showConfig() {\n        cout << "App: " << appName << " v" << version << endl;\n        cout << "Author: " << author << endl;\n    }\n};\n\nclass Counter {\nprivate:\n    inline static int totalCount = 0;\n    int id;\n    \npublic:\n    Counter() : id(++totalCount) {}\n    \n    static int getCount() { return totalCount; }\n    int getId() const { return id; }\n};\n\nint main() {\n    Configuration::appName = "NewApp";\n    Configuration::showConfig();\n    \n    cout << "PI: " << Configuration::pi << endl;\n    \n    Counter c1, c2, c3;\n    cout << "Total objects: " << Counter::getCount() << endl;\n    \n    return 0;\n}',
  hint: 'C++17 allows inline static members to be defined inside class.'
},
{
  id: 'cpp_oop_49',
  topicId: 'cpp_oop',
  question: 'Create class with nested struct for configuration.',
  mathSolution: 'Nested struct provides organized configuration data.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Database {\npublic:\n    struct Config {\n        string host = "localhost";\n        int port = 3306;\n        string username = "root";\n        string password = "";\n        string database = "test";\n        int timeout = 30;\n        bool ssl = false;\n    };\n    \nprivate:\n    Config config;\n    bool connected;\n    \npublic:\n    Database(const Config& cfg) : config(cfg), connected(false) {}\n    \n    void connect() {\n        cout << "Connecting to " << config.host << ":" << config.port << endl;\n        cout << "Database: " << config.database << endl;\n        connected = true;\n    }\n    \n    void disconnect() {\n        connected = false;\n        cout << "Disconnected" << endl;\n    }\n    \n    void query(const string& sql) {\n        if (connected) {\n            cout << "Executing: " << sql << endl;\n        }\n    }\n};\n\nint main() {\n    Database::Config cfg;\n    cfg.host = "192.168.1.100";\n    cfg.port = 3307;\n    cfg.database = "production";\n    cfg.ssl = true;\n    \n    Database db(cfg);\n    db.connect();\n    db.query("SELECT * FROM users");\n    db.disconnect();\n    \n    return 0;\n}',
  hint: 'Nested structs are useful for configuration, options, and return values.'
},
{
  id: 'cpp_oop_50',
  topicId: 'cpp_oop',
  question: 'Create comprehensive class demonstrating multiple OOP concepts.',
  mathSolution: 'Combine encapsulation, inheritance, polymorphism, templates.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Abstract base class\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    Shape(const string& c) : color(c) {}\n    virtual ~Shape() {}\n    virtual double area() const = 0;\n    virtual double perimeter() const = 0;\n    virtual void draw() const = 0;\n    string getColor() const { return color; }\n};\n\n// Derived class: Circle\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r, const string& c) : Shape(c), radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() const override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() const override {\n        cout << "Drawing " << color << " circle with radius " << radius << endl;\n    }\n};\n\n// Derived class: Rectangle\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h, const string& c) : Shape(c), width(w), height(h) {}\n    \n    double area() const override {\n        return width * height;\n    }\n    \n    double perimeter() const override {\n        return 2 * (width + height);\n    }\n    \n    void draw() const override {\n        cout << "Drawing " << color << " rectangle " << width << "x" << height << endl;\n    }\n};\n\n// Template class for container\nclass ShapeContainer {\nprivate:\n    vector<unique_ptr<Shape>> shapes;\n    \npublic:\n    void add(unique_ptr<Shape> shape) {\n        shapes.push_back(move(shape));\n    }\n    \n    void drawAll() const {\n        cout << "\\n=== All Shapes ===\\n";\n        for (const auto& shape : shapes) {\n            shape->draw();\n            cout << "  Area: " << shape->area() << endl;\n            cout << "  Perimeter: " << shape->perimeter() << endl;\n        }\n    }\n    \n    double totalArea() const {\n        double sum = 0;\n        for (const auto& shape : shapes) {\n            sum += shape->area();\n        }\n        return sum;\n    }\n    \n    void filterByColor(const string& color) const {\n        cout << "\\n=== " << color << " Shapes ===\\n";\n        for (const auto& shape : shapes) {\n            if (shape->getColor() == color) {\n                shape->draw();\n            }\n        }\n    }\n    \n    size_t size() const { return shapes.size(); }\n};\n\n// Main demonstration\nint main() {\n    cout << "=== OOP Demonstration ===\\n";\n    \n    ShapeContainer container;\n    \n    // Creating shapes with unique_ptr\n    container.add(make_unique<Circle>(5.0, "red"));\n    container.add(make_unique<Rectangle>(4.0, 6.0, "blue"));\n    container.add(make_unique<Circle>(3.0, "green"));\n    container.add(make_unique<Rectangle>(2.0, 3.0, "red"));\n    container.add(make_unique<Circle>(4.0, "blue"));\n    \n    // Demonstrate functionality\n    container.drawAll();\n    \n    cout << "\\nTotal Area: " << container.totalArea() << endl;\n    cout << "Total Shapes: " << container.size() << endl;\n    \n    container.filterByColor("red");\n    container.filterByColor("blue");\n    \n    // Static polymorphism through templates\n    auto compareArea = [](const unique_ptr<Shape>& a, const unique_ptr<Shape>& b) {\n        return a->area() < b->area();\n    };\n    \n    // Could sort if container exposed shapes\n    cout << "\\n=== OOP Concepts Demonstrated ===" << endl;\n    cout << "1. Encapsulation: private members with public interface" << endl;\n    cout << "2. Inheritance: Circle and Rectangle derive from Shape" << endl;\n    cout << "3. Polymorphism: virtual functions called via base pointer" << endl;\n    cout << "4. Abstraction: pure virtual functions in Shape" << endl;\n    cout << "5. RAII: unique_ptr manages memory automatically" << endl;\n    \n    return 0;\n}',
  hint: 'Comprehensive example demonstrating encapsulation, inheritance, polymorphism, abstraction, and RAII.'
}
);