QuizData.questions.push(
{
  "id": "cpp_inheritance_1",
  "topicId": "cpp_inheritance",
  "question": "Create a basic inheritance relationship between base and derived class.",
  "mathSolution": "Derived class inherits members from base class using : public Base.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Animal is eating\" << endl;\n    }\n    \n    void sleep() {\n        cout << \"Animal is sleeping\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Dog barks: Woof! Woof!\" << endl;\n    }\n};\n\nint main() {\n    Dog myDog;\n    myDog.eat();   // Inherited from Animal\n    myDog.sleep(); // Inherited from Animal\n    myDog.bark();  // Dog's own method\n    return 0;\n}",
  "hint": "Use colon and access specifier to inherit: class Derived : public Base"
},
{
  id: 'cpp_inheritance_2',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate protected members in inheritance.',
  mathSolution: 'Protected members are accessible in derived classes but not outside.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int year;\n    \npublic:\n    Vehicle(string b, int y) : brand(b), year(y) {}\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \npublic:\n    Car(string b, string m, int y) : Vehicle(b, y), model(m) {}\n    \n    void display() {\n        // Accessing protected members from base class\n        cout << brand << " " << model << " (" << year << ")" << endl;\n    }\n};\n\nint main() {\n    Car myCar("Toyota", "Camry", 2022);\n    myCar.display();\n    // cout << myCar.brand; // Error: protected member\n    return 0;\n}',
  hint: 'protected members are accessible in derived classes but private outside class hierarchy.'
},
{
  id: 'cpp_inheritance_3',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate single inheritance with constructor chaining.',
  mathSolution: 'Base class constructor is called before derived class constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() {\n        cout << "Base constructor called" << endl;\n    }\n    \n    Base(int x) {\n        cout << "Base parameterized constructor: " << x << endl;\n    }\n    \n    ~Base() {\n        cout << "Base destructor called" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() {\n        cout << "Derived constructor called" << endl;\n    }\n    \n    Derived(int y) : Base(y) {\n        cout << "Derived parameterized constructor: " << y << endl;\n    }\n    \n    ~Derived() {\n        cout << "Derived destructor called" << endl;\n    }\n};\n\nint main() {\n    cout << "Creating Derived object:\\n";\n    Derived d1;\n    \n    cout << "\\nCreating Derived object with parameter:\\n";\n    Derived d2(100);\n    \n    return 0;\n}',
  hint: 'Base class constructor executes before derived class constructor body.'
},
{
  id: 'cpp_inheritance_4',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate multi-level inheritance.',
  mathSolution: 'Class inherits from another derived class, forming a chain.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {\n        cout << "Animal constructor: " << name << endl;\n    }\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n};\n\nclass Mammal : public Animal {\nprotected:\n    int legs;\n    \npublic:\n    Mammal(string n, int l) : Animal(n), legs(l) {\n        cout << "Mammal constructor: " << legs << " legs" << endl;\n    }\n    \n    void walk() {\n        cout << name << " is walking on " << legs << " legs" << endl;\n    }\n};\n\nclass Dog : public Mammal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b, int l) : Mammal(n, l), breed(b) {\n        cout << "Dog constructor: " << breed << endl;\n    }\n    \n    void bark() {\n        cout << name << " barks: Woof!" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd", 4);\n    myDog.eat();\n    myDog.walk();\n    myDog.bark();\n    \n    return 0;\n}',
  hint: 'Multi-level inheritance creates hierarchy: Animal -> Mammal -> Dog.'
},
{
  id: 'cpp_inheritance_5',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate multiple inheritance.',
  mathSolution: 'Class inherits from multiple base classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Flying {\npublic:\n    void fly() {\n        cout << "Flying in the sky" << endl;\n    }\n};\n\nclass Swimming {\npublic:\n    void swim() {\n        cout << "Swimming in water" << endl;\n    }\n};\n\nclass Walking {\npublic:\n    void walk() {\n        cout << "Walking on land" << endl;\n    }\n};\n\nclass Duck : public Flying, public Swimming, public Walking {\nprivate:\n    string name;\n    \npublic:\n    Duck(string n) : name(n) {}\n    \n    void quack() {\n        cout << name << " says: Quack! Quack!" << endl;\n    }\n};\n\nint main() {\n    Duck donald("Donald");\n    donald.fly();\n    donald.swim();\n    donald.walk();\n    donald.quack();\n    \n    return 0;\n}',
  hint: 'Multiple inheritance: class Derived : public Base1, public Base2'
},
{
  id: 'cpp_inheritance_6',
  topicId: 'cpp_inheritance',
  question: 'Resolve ambiguity in multiple inheritance using scope resolution.',
  mathSolution: 'Use class::member syntax to specify which base class member to use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base1 {\npublic:\n    void display() {\n        cout << "Base1 display" << endl;\n    }\n};\n\nclass Base2 {\npublic:\n    void display() {\n        cout << "Base2 display" << endl;\n    }\n};\n\nclass Derived : public Base1, public Base2 {\npublic:\n    void show() {\n        Base1::display();  // Resolve ambiguity\n        Base2::display();\n    }\n    \n    void display() {\n        Base1::display();  // Override with resolution\n    }\n};\n\nint main() {\n    Derived d;\n    d.Base1::display();  // Explicit resolution\n    d.Base2::display();\n    d.show();\n    d.display();\n    \n    return 0;\n}',
  hint: 'Use scope resolution operator (::) to resolve naming conflicts in multiple inheritance.'
},
{
  id: 'cpp_inheritance_7',
  topicId: 'cpp_inheritance',
  question: 'Use virtual inheritance to solve diamond problem.',
  mathSolution: 'Virtual inheritance ensures only one copy of grandparent class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal() {\n        cout << "Animal constructor" << endl;\n    }\n    \n    void speak() {\n        cout << "Animal speaks" << endl;\n    }\n};\n\n// Virtual inheritance\nclass Mammal : virtual public Animal {\npublic:\n    Mammal() { cout << "Mammal constructor" << endl; }\n};\n\nclass Bird : virtual public Animal {\npublic:\n    Bird() { cout << "Bird constructor" << endl; }\n};\n\nclass Bat : public Mammal, public Bird {\npublic:\n    Bat() { cout << "Bat constructor" << endl; }\n    \n    void fly() {\n        cout << "Bat flying" << endl;\n    }\n};\n\nint main() {\n    Bat bat;\n    bat.speak();  // No ambiguity - single Animal instance\n    bat.fly();\n    \n    return 0;\n}',
  hint: 'Virtual inheritance solves diamond problem by sharing single base instance.'
},
{
  id: 'cpp_inheritance_8',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate public inheritance (is-a relationship).',
  mathSolution: 'Public inheritance models "is-a" relationship.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    Shape(string c) : color(c) {}\n    \n    virtual double area() = 0;\n    virtual void draw() {\n        cout << "Drawing " << color << " shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing " << color << " circle with radius " << radius << endl;\n    }\n};\n\nint main() {\n    Circle circle("red", 5.0);\n    \n    // Circle IS-A Shape\n    Shape* shapePtr = &circle;\n    \n    cout << "Area: " << shapePtr->area() << endl;\n    shapePtr->draw();\n    \n    return 0;\n}',
  hint: 'Public inheritance represents "is-a" relationship in object-oriented design.'
},
{
  id: 'cpp_inheritance_9',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate private inheritance (has-a relationship).',
  mathSolution: 'Private inheritance models "implemented-in-terms-of" relationship.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Stack : private vector<int> {\npublic:\n    void push(int value) {\n        push_back(value);\n    }\n    \n    void pop() {\n        if (!empty()) pop_back();\n    }\n    \n    int top() {\n        if (!empty()) return back();\n        return -1;\n    }\n    \n    bool empty() {\n        return vector<int>::empty();\n    }\n    \n    size_t size() {\n        return vector<int>::size();\n    }\n};\n\nint main() {\n    Stack s;\n    s.push(10);\n    s.push(20);\n    s.push(30);\n    \n    cout << "Top: " << s.top() << endl;\n    cout << "Size: " << s.size() << endl;\n    \n    s.pop();\n    cout << "After pop, top: " << s.top() << endl;\n    \n    // Stack s2 = s;  // Error: private inheritance hides copy operations\n    \n    return 0;\n}',
  hint: 'Private inheritance is used for "has-a" or "implemented-in-terms-of" relationships.'
},
{
  id: 'cpp_inheritance_10',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate protected inheritance.',
  mathSolution: 'Protected inheritance makes public/protected members protected in derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << "Public function" << endl; }\nprotected:\n    void protectedFunc() { cout << "Protected function" << endl; }\nprivate:\n    void privateFunc() { cout << "Private function" << endl; }\n};\n\nclass Derived : protected Base {\npublic:\n    void accessBase() {\n        publicFunc();    // OK: becomes protected\n        protectedFunc(); // OK: becomes protected\n        // privateFunc(); // Error: private in Base\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void accessFurther() {\n        publicFunc();    // OK: protected in Derived, accessible here\n        protectedFunc(); // OK: protected in Derived\n    }\n};\n\nint main() {\n    Derived d;\n    // d.publicFunc();   // Error: publicFunc is protected in Derived\n    d.accessBase();      // OK: public member of Derived\n    \n    Further f;\n    f.accessFurther();    // OK\n    \n    return 0;\n}',
  hint: 'Protected inheritance is rarely used; prefer composition over protected inheritance.'
},
{
  id: 'cpp_inheritance_11',
  topicId: 'cpp_inheritance',
  question: 'Override virtual functions in derived class.',
  mathSolution: 'Use override keyword to explicitly override virtual function.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n    \n    virtual void print() {\n        cout << "Base print" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display() override {\n        cout << "Derived display" << endl;\n    }\n    \n    void print() override final {\n        cout << "Derived print (final)" << endl;\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void display() override {\n        cout << "Further display" << endl;\n    }\n    \n    // void print() override;  // Error: print is final in Derived\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->display();  // Calls Derived version\n    ptr->print();    // Calls Derived version\n    \n    delete ptr;\n    \n    return 0;\n}',
  hint: 'override keyword catches signature mismatches at compile time.'
},
{
  id: 'cpp_inheritance_12',
  topicId: 'cpp_inheritance',
  question: 'Use final specifier to prevent further inheritance.',
  mathSolution: 'final prevents class from being inherited or method from being overridden.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base final {\npublic:\n    void display() {\n        cout << "Base class cannot be inherited" << endl;\n    }\n};\n\n// class Derived : public Base { };  // Error: Base is final\n\nclass Shape {\npublic:\n    virtual void draw() final {\n        cout << "Drawing shape" << endl;\n    }\n    \n    virtual void move() {\n        cout << "Moving shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    // void draw() override { }  // Error: draw is final\n    \n    void move() override {\n        cout << "Moving circle" << endl;\n    }\n};\n\nint main() {\n    Base b;\n    b.display();\n    \n    Circle c;\n    c.draw();  // Calls final method from Shape\n    c.move();\n    \n    return 0;\n}',
  hint: 'final specifier provides strong guarantees for class design.'
},
{
  id: 'cpp_inheritance_13',
  topicId: 'cpp_inheritance',
  question: 'Create abstract base class with pure virtual functions.',
  mathSolution: 'Pure virtual function (=0) makes class abstract, cannot instantiate.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() override {\n        return width * height;\n    }\n    \n    double perimeter() override {\n        return 2 * (width + height);\n    }\n    \n    void draw() override {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[] = {new Circle(5), new Rectangle(4, 6)};\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        cout << "Perimeter: " << s->perimeter() << endl;\n        s->draw();\n        delete s;\n    }\n    \n    return 0;\n}',
  hint: 'Abstract classes define interfaces that derived classes must implement.'
},
{
  id: 'cpp_inheritance_14',
  topicId: 'cpp_inheritance',
  question: 'Call base class virtual function from derived class using scope resolution.',
  mathSolution: 'Base::function() calls base class version even if overridden.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void process() {\n        cout << "Base processing" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void process() override {\n        cout << "Derived starting" << endl;\n        Base::process();  // Call base version explicitly\n        cout << "Derived finishing" << endl;\n    }\n};\n\nclass Advanced : public Derived {\npublic:\n    void process() override {\n        cout << "Advanced begin" << endl;\n        Derived::process();  // Call immediate base\n        cout << "Advanced end" << endl;\n    }\n};\n\nint main() {\n    Advanced a;\n    a.process();\n    \n    return 0;\n}',
  hint: 'Use Base::function() to call base class version inside overridden function.'
},
{
  "id": "cpp_inheritance_15",
  "topicId": "cpp_inheritance",
  "question": "Demonstrate upcasting (derived to base).",
  "mathSolution": "Derived class pointer can be implicitly converted to base pointer.",
  "codeSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() {\n        cout << \"Animal makes sound\" << endl;\n    }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override {\n        cout << \"Dog barks: Woof!\" << endl;\n    }\n    \n    void wagTail() {\n        cout << \"Dog wags tail\" << endl;\n    }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override {\n        cout << \"Cat meows: Meow!\" << endl;\n    }\n};\n\nint main() {\n    // Upcasting - implicit conversion\n    Dog dog;\n    Animal* animalPtr = &dog;\n    animalPtr->sound();  // Calls Dog's sound (polymorphic)\n    \n    // Vector of base pointers\n    vector<Animal*> animals;\n    animals.push_back(new Dog());\n    animals.push_back(new Cat());\n    animals.push_back(new Dog());\n    \n    for (Animal* a : animals) {\n        a->sound();\n        delete a;\n    }\n    \n    return 0;\n}",
  "hint": "Upcasting is safe and always allowed in inheritance hierarchies."
},
{
  id: 'cpp_inheritance_16',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate downcasting using dynamic_cast.',
  mathSolution: 'dynamic_cast safely converts base pointer to derived pointer.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << "Animal sound" << endl; }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "Woof!" << endl; }\n    void fetch() { cout << "Dog fetches ball" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override { cout << "Meow!" << endl; }\n    void climb() { cout << "Cat climbs tree" << endl; }\n};\n\nint main() {\n    Animal* animals[] = {new Dog(), new Cat(), new Dog()};\n    \n    for (Animal* a : animals) {\n        a->sound();\n        \n        // Downcast to Dog\n        if (Dog* dog = dynamic_cast<Dog*>(a)) {\n            dog->fetch();\n        }\n        \n        // Downcast to Cat\n        if (Cat* cat = dynamic_cast<Cat*>(a)) {\n            cat->climb();\n        }\n        \n        delete a;\n    }\n    \n    // Reference downcasting\n    Dog d;\n    Animal& animalRef = d;\n    \n    try {\n        Dog& dogRef = dynamic_cast<Dog&>(animalRef);\n        dogRef.fetch();\n    } catch (const bad_cast& e) {\n        cout << "Bad cast: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'dynamic_cast requires at least one virtual function in base class.'
},
{
  id: 'cpp_inheritance_17',
  topicId: 'cpp_inheritance',
  question: 'Use typeid to get runtime type information in inheritance.',
  mathSolution: 'typeid returns type_info for polymorphic objects at runtime.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func() {}\n    virtual ~Base() {}\n};\n\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nvoid process(Base* ptr) {\n    if (typeid(*ptr) == typeid(Derived1)) {\n        cout << "Processing Derived1" << endl;\n    } else if (typeid(*ptr) == typeid(Derived2)) {\n        cout << "Processing Derived2" << endl;\n    } else {\n        cout << "Processing Base" << endl;\n    }\n}\n\nint main() {\n    Base* b1 = new Base();\n    Base* d1 = new Derived1();\n    Base* d2 = new Derived2();\n    \n    process(b1);\n    process(d1);\n    process(d2);\n    \n    // Get type names\n    cout << "Type of d1: " << typeid(*d1).name() << endl;\n    cout << "Type of d2: " << typeid(*d2).name() << endl;\n    \n    delete b1;\n    delete d1;\n    delete d2;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI and works only on polymorphic types for dynamic info.'
},
{
  id: 'cpp_inheritance_18',
  topicId: 'cpp_inheritance',
  question: 'Create class hierarchies with virtual destructors.',
  mathSolution: 'Virtual destructors ensure proper cleanup of derived objects.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\n    \npublic:\n    Derived() {\n        data = new int[100];\n        cout << "Derived constructor, allocated memory" << endl;\n    }\n    \n    ~Derived() {\n        delete[] data;\n        cout << "Derived destructor, freed memory" << endl;\n    }\n};\n\nclass WithoutVirtual {\npublic:\n    ~WithoutVirtual() { cout << "WithoutVirtual destructor" << endl; }\n};\n\nclass Leaky : public WithoutVirtual {\nprivate:\n    int* leak;\n    \npublic:\n    Leaky() { leak = new int[100]; cout << "Leaky constructor" << endl; }\n    ~Leaky() { delete[] leak; cout << "Leaky destructor" << endl; }\n};\n\nint main() {\n    cout << "With virtual destructor:" << endl;\n    Base* ptr = new Derived();\n    delete ptr;  // Calls both destructors\n    \n    cout << "\\nWithout virtual destructor:" << endl;\n    WithoutVirtual* leaky = new Leaky();\n    delete leaky;  // Only calls WithoutVirtual destructor - memory leak!\n    \n    return 0;\n}',
  hint: 'Always make destructor virtual in polymorphic base classes.'
},
{
  "id": "cpp_inheritance_19",
  "topicId": "cpp_inheritance",
  "question": "Use using declaration to change access level of inherited members.",
  "mathSolution": "using Base::member can change access in derived class.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << \"Public function\" << endl; }\nprotected:\n    void protectedFunc() { cout << \"Protected function\" << endl; }\nprivate:\n    void privateFunc() { cout << \"Private function\" << endl; }\n};\n\nclass Derived : private Base {\npublic:\n    // Make Base's public function public again\n    using Base::publicFunc;\n    \n    // Make Base's protected function public\n    using Base::protectedFunc;\n    \n    // Cannot access privateFunc to make it public\n    \n    void show() {\n        publicFunc();    // OK: made public\n        protectedFunc(); // OK: made public\n    }\n};\n\nint main() {\n    Derived d;\n    d.publicFunc();     // Accessible (using declaration)\n    d.protectedFunc();  // Accessible (using declaration)\n    // d.privateFunc(); // Error: still private\n    \n    return 0;\n}",
  "hint": "using declaration can change access level of inherited members."
},
{
  id: 'cpp_inheritance_20',
  topicId: 'cpp_inheritance',
  question: 'Hide base class function with derived class function (non-virtual).',
  mathSolution: 'Non-virtual functions are statically bound, hiding base version.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void display() {\n        cout << "Base display" << endl;\n    }\n    \n    void show() {\n        cout << "Base show" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    // Hiding base class display (not overriding - no virtual)\n    void display() {\n        cout << "Derived display" << endl;\n    }\n    \n    // Can still call base version using scope resolution\n    void callBaseDisplay() {\n        Base::display();\n    }\n};\n\nint main() {\n    Derived d;\n    d.display();          // Calls Derived version\n    d.Base::display();    // Calls Base version\n    d.callBaseDisplay();  // Calls Base version\n    d.show();             // Inherited as is (not hidden)\n    \n    Base* ptr = &d;\n    ptr->display();       // Calls Base version (static binding)\n    \n    return 0;\n}',
  hint: 'Non-virtual functions are resolved at compile time based on pointer type.'
},
{
  id: 'cpp_inheritance_21',
  topicId: 'cpp_inheritance',
  question: 'Use CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'Derived class inherits from template instantiated with itself.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public Shape<Circle> {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    void drawImpl() {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n    \n    double areaImpl() {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public Shape<Rectangle> {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    void drawImpl() {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n    \n    double areaImpl() {\n        return width * height;\n    }\n};\n\ntemplate<typename T>\nvoid render(Shape<T>& shape) {\n    shape.draw();\n    cout << "Area: " << shape.area() << endl;\n}\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    render(c);\n    render(r);\n    \n    return 0;\n}',
  hint: 'CRTP enables static polymorphism without virtual function overhead.'
},
{
  id: 'cpp_inheritance_22',
  topicId: 'cpp_inheritance',
  question: 'Use mixin classes for multiple inheritance of behavior.',
  mathSolution: 'Mixins add specific functionality to classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Printable {\npublic:\n    void print() const {\n        static_cast<const T*>(this)->printImpl();\n    }\n};\n\ntemplate<typename T>\nclass Serializable {\npublic:\n    void serialize() const {\n        static_cast<const T*>(this)->serializeImpl();\n    }\n};\n\nclass Person : public Printable<Person>, public Serializable<Person> {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    Person(string n, int a) : name(n), age(a) {}\n    \n    void printImpl() const {\n        cout << "Person: " << name << ", " << age << endl;\n    }\n    \n    void serializeImpl() const {\n        cout << "Serializing: " << name << "," << age << endl;\n    }\n};\n\nclass LoggerMixin {\npublic:\n    void log(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n};\n\nclass TimestampMixin {\npublic:\n    string getTimestamp() {\n        return "2024-01-01 12:00:00";\n    }\n};\n\nclass DataProcessor : public LoggerMixin, public TimestampMixin {\npublic:\n    void process() {\n        log("Processing started at " + getTimestamp());\n        // Processing logic\n        log("Processing completed");\n    }\n};\n\nint main() {\n    Person p("John", 30);\n    p.print();\n    p.serialize();\n    \n    DataProcessor dp;\n    dp.process();\n    \n    return 0;\n}',
  hint: 'Mixins provide reusable behavior that can be composed as needed.'
},
{
  id: 'cpp_inheritance_23',
  topicId: 'cpp_inheritance',
  question: 'Inherit from std::exception to create custom exception class.',
  mathSolution: 'Derive from std::exception and override what() method.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass InvalidAgeException : public exception {\nprivate:\n    string message;\n    \npublic:\n    InvalidAgeException(int age) {\n        message = "Invalid age: " + to_string(age) + ". Age must be between 0 and 150.";\n    }\n    \n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nclass NegativeValueException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "Value cannot be negative";\n    }\n};\n\nclass DivisionByZeroException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "Division by zero is not allowed";\n    }\n};\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw DivisionByZeroException();\n    }\n    return a / b;\n}\n\nvoid setAge(int age) {\n    if (age < 0 || age > 150) {\n        throw InvalidAgeException(age);\n    }\n    cout << "Age set to " << age << endl;\n}\n\nint main() {\n    try {\n        setAge(200);\n    } catch (const InvalidAgeException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    try {\n        divide(10, 0);\n    } catch (const DivisionByZeroException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Deriving from std::exception allows exceptions to be caught polymorphically.'
},
{
  id: 'cpp_inheritance_24',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with smart pointers for automatic cleanup.',
  mathSolution: 'Smart pointers manage polymorphic objects safely.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Widget {\npublic:\n    virtual void render() = 0;\n    virtual ~Widget() {}\n};\n\nclass Button : public Widget {\npublic:\n    void render() override {\n        cout << "Rendering button" << endl;\n    }\n};\n\nclass TextBox : public Widget {\npublic:\n    void render() override {\n        cout << "Rendering text box" << endl;\n    }\n};\n\nclass Window {\nprivate:\n    vector<unique_ptr<Widget>> widgets;\n    \npublic:\n    void addWidget(unique_ptr<Widget> widget) {\n        widgets.push_back(move(widget));\n    }\n    \n    void renderAll() {\n        for (const auto& w : widgets) {\n            w->render();\n        }\n    }\n};\n\nint main() {\n    Window window;\n    window.addWidget(make_unique<Button>());\n    window.addWidget(make_unique<TextBox>());\n    window.addWidget(make_unique<Button>());\n    \n    window.renderAll();\n    \n    return 0;\n}',
  hint: 'Smart pointers with inheritance enable automatic memory management of polymorphic objects.'
},
{
  id: 'cpp_inheritance_25',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate slicing problem when passing derived by value.',
  mathSolution: 'Passing derived object by value to base parameter slices the object.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void identify() {\n        cout << "I am Base" << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int extraData[100];  // Extra data that will be sliced\n    \npublic:\n    void identify() override {\n        cout << "I am Derived" << endl;\n    }\n};\n\nvoid processByValue(Base b) {\n    b.identify();  // Calls Base::identify (sliced!)\n}\n\nvoid processByReference(Base& b) {\n    b.identify();  // Calls Derived::identify (polymorphic)\n}\n\nvoid processByPointer(Base* b) {\n    b->identify();  // Calls Derived::identify (polymorphic)\n}\n\nint main() {\n    Derived d;\n    \n    cout << "By value (slicing): ";\n    processByValue(d);    // Sliced - loses Derived part\n    \n    cout << "By reference: \";\n    processByReference(d); // No slicing\n    \n    cout << \"By pointer: \";\n    processByPointer(&d);  // No slicing\n    \n    // Array of base objects - also slices\n    Base bases[2];\n    bases[0] = d;  // Slicing occurs\n    bases[0].identify();  // Calls Base::identify\n    \n    return 0;\n}',
  hint: 'Avoid slicing by using pointers or references for polymorphic types.'
},
{
  id: 'cpp_inheritance_26',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with factory pattern for object creation.',
  mathSolution: 'Factory creates appropriate derived type based on parameters.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override {\n        cout << "Using Product A" << endl;\n    }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override {\n        cout << "Using Product B" << endl;\n    }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(const string& type) {\n        if (type == "A") {\n            return make_unique<ConcreteProductA>();\n        } else if (type == "B") {\n            return make_unique<ConcreteProductB>();\n        }\n        return nullptr;\n    }\n};\n\nint main() {\n    auto productA = Factory::create("A");\n    auto productB = Factory::create("B");\n    \n    productA->use();\n    productB->use();\n    \n    return 0;\n}',
  hint: 'Factory pattern centralizes object creation logic using inheritance.'
},
{
  id: 'cpp_inheritance_27',
  topicId: 'cpp_inheritance',
  question: 'Create template class with inheritance.',
  mathSolution: 'Template classes can be used as base or derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Base {\nprotected:\n    T value;\n    \npublic:\n    Base(T v) : value(v) {}\n    \n    virtual void display() {\n        cout << "Base value: " << value << endl;\n    }\n};\n\ntemplate<typename T>\nclass Derived : public Base<T> {\nprivate:\n    T multiplier;\n    \npublic:\n    Derived(T v, T m) : Base<T>(v), multiplier(m) {}\n    \n    void display() override {\n        cout << "Derived value: " << this->value << ", multiplied: " << this->value * multiplier << endl;\n    }\n};\n\nclass IntDerived : public Base<int> {\npublic:\n    IntDerived(int v) : Base<int>(v) {}\n    \n    void display() override {\n        cout << "IntDerived: " << value << endl;\n    }\n};\n\nint main() {\n    Base<int>* b1 = new Derived<int>(10, 5);\n    Base<double>* b2 = new Derived<double>(3.14, 2);\n    Base<int>* b3 = new IntDerived(42);\n    \n    b1->display();\n    b2->display();\n    b3->display();\n    \n    delete b1;\n    delete b2;\n    delete b3;\n    \n    return 0;\n}',
  hint: 'Template inheritance allows creating generic class hierarchies.'
},
{
  id: 'cpp_inheritance_28',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with nested classes.',
  mathSolution: 'Nested classes can inherit from outer class or other nested classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Outer {\nprotected:\n    int outerData;\n    \npublic:\n    Outer(int d) : outerData(d) {}\n    \n    class InnerBase {\n    protected:\n        int innerData;\n        \n    public:\n        InnerBase(int d) : innerData(d) {}\n        virtual void show() {\n            cout << \"InnerBase: \" << innerData << endl;\n        }\n    };\n    \n    class InnerDerived : public InnerBase {\n    private:\n        int extra;\n        \n    public:\n        InnerDerived(int d, int e) : InnerBase(d), extra(e) {}\n        \n        void show() override {\n            cout << \"InnerDerived: \" << innerData << \", extra: \" << extra << endl;\n        }\n    };\n};\n\nclass DerivedOuter : public Outer {\npublic:\n    DerivedOuter(int d) : Outer(d) {}\n    \n    class DeepInner : public Outer::InnerBase {\n    public:\n        DeepInner(int d) : Outer::InnerBase(d) {}\n        \n        void show() override {\n            cout << \"DeepInner: \" << innerData << endl;\n        }\n    };\n};\n\nint main() {\n    Outer::InnerDerived inner1(10, 20);\n    DerivedOuter::DeepInner inner2(30);\n    \n    inner1.show();\n    inner2.show();\n    \n    return 0;\n}',
  hint: 'Nested classes can participate in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_29',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with constexpr constructors.',
  mathSolution: 'constexpr constructors enable compile-time object creation in inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprotected:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n};\n\nclass ColorPoint : public Point {\nprivate:\n    int color;\n    \npublic:\n    constexpr ColorPoint(int a, int b, int c) : Point(a, b), color(c) {}\n    \n    constexpr int getColor() const { return color; }\n};\n\nint main() {\n    // Compile-time objects\n    constexpr Point p(10, 20);\n    constexpr ColorPoint cp(30, 40, 0xFF0000);\n    \n    // Compile-time array size\n    int arr[p.getX()];  // Valid if p.getX() is constexpr\n    \n    cout << \"Point: (\" << cp.getX() << \", \" << cp.getY() << \")\" << endl;\n    cout << \"Color: \" << hex << cp.getColor() << endl;\n    \n    return 0;\n}',
  hint: 'constexpr inheritance enables compile-time evaluation of derived objects.'
},
{
  id: 'cpp_inheritance_30',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with friend functions and classes.',
  mathSolution: 'Friend relationships are not inherited automatically.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int secret;\n    \nprotected:\n    int protectedData;\n    \npublic:\n    Base() : secret(100), protectedData(50) {}\n    \n    friend void showBase(Base& b);\n    friend class FriendOfBase;\n};\n\nvoid showBase(Base& b) {\n    cout << \"Friend function accessing Base secret: \" << b.secret << endl;\n}\n\nclass FriendOfBase {\npublic:\n    void access(Base& b) {\n        cout << \"Friend class accessing Base secret: \" << b.secret << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int derivedSecret;\n    \npublic:\n    Derived() : derivedSecret(200) {}\n};\n\nvoid showDerived(Derived& d) {\n    // cout << d.secret;  // Error: friend of Base, not of Derived\n    cout << \"Friend function can access derived? \";\n    // showBase(d);  // OK: upcasting to Base\n}\n\nint main() {\n    Base b;\n    Derived d;\n    \n    showBase(b);\n    showBase(d);  // Works due to upcasting\n    \n    FriendOfBase fob;\n    fob.access(b);\n    // fob.access(d);  // Error: d is Derived, not Base\n    \n    return 0;\n}',
  hint: 'Friendship is not inherited; derived classes do not automatically gain base\'s friends.'
},
{
  id: 'cpp_inheritance_31',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with operator overloading.',
  mathSolution: 'Operators can be inherited and overridden in derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Number {\nprotected:\n    int value;\n    \npublic:\n    Number(int v) : value(v) {}\n    \n    virtual Number operator+(const Number& other) const {\n        return Number(value + other.value);\n    }\n    \n    virtual void display() const {\n        cout << \"Number: \" << value << endl;\n    }\n};\n\nclass Complex : public Number {\nprivate:\n    int imag;\n    \npublic:\n    Complex(int r, int i) : Number(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) const {\n        return Complex(value + other.value, imag + other.imag);\n    }\n    \n    void display() const override {\n        cout << \"Complex: \" << value << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Number n1(10), n2(20);\n    Number n3 = n1 + n2;\n    n3.display();\n    \n    Complex c1(5, 3), c2(2, 4);\n    Complex c3 = c1 + c2;\n    c3.display();\n    \n    return 0;\n}',
  hint: 'Operator overloading works with inheritance like regular member functions.'
},
{
  id: 'cpp_inheritance_32',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with static members.',
  mathSolution: 'Static members are shared across base and all derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    static int objectCount;\n    static int getCount() { return objectCount; }\n    \n    Base() { objectCount++; }\n    virtual ~Base() { objectCount--; }\n};\n\nint Base::objectCount = 0;\n\nclass Derived1 : public Base {\npublic:\n    Derived1() { cout << \"Derived1 created, total: \" << objectCount << endl; }\n    ~Derived1() { cout << \"Derived1 destroyed, total: \" << objectCount << endl; }\n};\n\nclass Derived2 : public Base {\npublic:\n    Derived2() { cout << \"Derived2 created, total: \" << objectCount << endl; }\n    ~Derived2() { cout << \"Derived2 destroyed, total: \" << objectCount << endl; }\n};\n\nint main() {\n    cout << \"Initial count: \" << Base::objectCount << endl;\n    \n    {\n        Derived1 d1;\n        Derived2 d2;\n        Derived1 d3;\n        \n        cout << \"Current count from Base: \" << Base::getCount() << endl;\n        cout << \"Current count from Derived: \" << Derived1::getCount() << endl;\n    }\n    \n    cout << \"Final count: \" << Base::objectCount << endl;\n    \n    return 0;\n}',
  hint: 'Static members are shared across entire inheritance hierarchy.'
},
{
  id: 'cpp_inheritance_33',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with const member functions.',
  mathSolution: 'const member functions can be overridden with const versions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() const {\n        cout << "Base const display" << endl;\n    }\n    \n    virtual void modify() {\n        cout << "Base modify" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display() const override {\n        cout << "Derived const display" << endl;\n    }\n    \n    void modify() override {\n        cout << "Derived modify" << endl;\n    }\n};\n\nvoid process(const Base& obj) {\n    obj.display();  // Calls const version\n    // obj.modify();  // Error: cannot call non-const on const object\n}\n\nint main() {\n    Derived d;\n    const Base& ref = d;\n    \n    ref.display();  // Calls Derived::display (const version)\n    \n    process(d);\n    \n    return 0;\n}',
  hint: 'const-correctness is preserved in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_34',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic container with clone pattern (virtual copy constructor).',
  mathSolution: 'Implement virtual clone method for polymorphic copying.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() const = 0;\n    virtual void draw() const = 0;\n    virtual unique_ptr<Shape> clone() const = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        cout << "Circle (r=" << radius << ")" << endl;\n    }\n    \n    unique_ptr<Shape> clone() const override {\n        return make_unique<Circle>(*this);\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() const override {\n        return width * height;\n    }\n    \n    void draw() const override {\n        cout << "Rectangle (" << width << "x" << height << ")" << endl;\n    }\n    \n    unique_ptr<Shape> clone() const override {\n        return make_unique<Rectangle>(*this);\n    }\n};\n\nclass ShapeCollection {\nprivate:\n    vector<unique_ptr<Shape>> shapes;\n    \npublic:\n    void add(unique_ptr<Shape> shape) {\n        shapes.push_back(move(shape));\n    }\n    \n    ShapeCollection clone() const {\n        ShapeCollection newCollection;\n        for (const auto& shape : shapes) {\n            newCollection.add(shape->clone());\n        }\n        return newCollection;\n    }\n    \n    void drawAll() const {\n        for (const auto& shape : shapes) {\n            shape->draw();\n        }\n    }\n};\n\nint main() {\n    ShapeCollection collection;\n    collection.add(make_unique<Circle>(5));\n    collection.add(make_unique<Rectangle>(4, 6));\n    collection.add(make_unique<Circle>(3));\n    \n    ShapeCollection copy = collection.clone();\n    \n    cout << "Original:\\n\";\n    collection.drawAll();\n    \n    cout << "\\nCopy:\\n\";\n    copy.drawAll();\n    \n    return 0;\n}',
  hint: 'Virtual clone method provides deep copying for polymorphic objects.'
},
{
  id: 'cpp_inheritance_35',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with std::variant for discriminated unions.',
  mathSolution: 'std::variant can hold any type from a set, including derived classes.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nclass ShapeBase {\npublic:\n    virtual void draw() const = 0;\n    virtual ~ShapeBase() {}\n};\n\nclass Circle : public ShapeBase {\npublic:\n    void draw() const override { cout << "O\"; }\n};\n\nclass Square : public ShapeBase {\npublic:\n    void draw() const override { cout << \"[]\"; }\n};\n\nclass Triangle : public ShapeBase {\npublic:\n    void draw() const override { cout << \"/\\\\\\\"; }\n};\n\nint main() {\n    vector<variant<Circle, Square, Triangle>> shapes;\n    \n    shapes.push_back(Circle());\n    shapes.push_back(Square());\n    shapes.push_back(Triangle());\n    shapes.push_back(Circle());\n    \n    for (const auto& shape : shapes) {\n        visit([](const auto& s) { s.draw(); }, shape);\n        cout << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'std::variant provides type-safe union of inherited types.'
},
{
  id: 'cpp_inheritance_36',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with thread_local storage.',
  mathSolution: 'thread_local variables can be inherited and have separate instances per thread.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <vector>\nusing namespace std;\n\nclass Counter {\nprotected:\n    static thread_local int count;\n    \npublic:\n    void increment() { count++; }\n    int getCount() const { return count; }\n};\n\nthread_local int Counter::count = 0;\n\nclass DerivedCounter : public Counter {\npublic:\n    void decrement() { count--; }\n};\n\nvoid threadFunction(int id, int increments) {\n    DerivedCounter dc;\n    for (int i = 0; i < increments; i++) {\n        dc.increment();\n    }\n    cout << \"Thread \" << id << \" count: \" << dc.getCount() << endl;\n}\n\nint main() {\n    vector<thread> threads;\n    \n    for (int i = 0; i < 5; i++) {\n        threads.emplace_back(threadFunction, i, 1000);\n    }\n    \n    for (auto& t : threads) {\n        t.join();\n    }\n    \n    DerivedCounter mainCounter;\n    mainCounter.increment();\n    cout << \"Main thread count: \" << mainCounter.getCount() << endl;\n    \n    return 0;\n}',
  hint: 'thread_local storage is per-thread, even in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_37',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with alignas and alignment specifiers.',
  mathSolution: 'Alignment specifiers can be inherited and affect derived class layout.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nstruct alignas(64) CacheAligned {\n    int data;\n    char padding;\n};\n\nstruct CacheAlignedDerived : public CacheAligned {\n    int moreData;\n};\n\nstruct Normal {\n    int data;\n    char padding;\n};\n\nint main() {\n    cout << "Alignment of CacheAligned: \" << alignof(CacheAligned) << endl;\n    cout << \"Size of CacheAligned: \" << sizeof(CacheAligned) << endl;\n    \n    cout << \"Alignment of CacheAlignedDerived: \" << alignof(CacheAlignedDerived) << endl;\n    cout << \"Size of CacheAlignedDerived: \" << sizeof(CacheAlignedDerived) << endl;\n    \n    cout << \"Alignment of Normal: \" << alignof(Normal) << endl;\n    cout << \"Size of Normal: \" << sizeof(Normal) << endl;\n    \n    return 0;\n}',
  hint: 'Alignment is inherited and can affect derived class memory layout.'
},
{
  id: 'cpp_inheritance_38',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with [[no_unique_address]] attribute (C++20).',
  mathSolution: '[[no_unique_address]] allows empty base optimization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Empty {\n    // Empty class\n};\n\nclass EmptyBaseOptimized : private Empty {\n    int data;\n};\n\nclass NoEmptyBaseOptimization {\n    Empty e;\n    int data;\n};\n\nclass EmptyWithAttribute {\n    // Empty with attribute\n};\n\nclass Optimized : private EmptyWithAttribute {\n    [[no_unique_address]] EmptyWithAttribute e2;\n    int data;\n};\n\nint main() {\n    cout << "Size of Empty: \" << sizeof(Empty) << endl;\n    cout << \"Size with empty base optimization: \" << sizeof(EmptyBaseOptimized) << endl;\n    cout << \"Size without optimization: \" << sizeof(NoEmptyBaseOptimization) << endl;\n    \n    return 0;\n}',
  hint: 'Empty base optimization (EBO) reduces memory usage for classes with empty base classes.'
},
{
  id: 'cpp_inheritance_39',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with std::enable_shared_from_this.',
  mathSolution: 'Enable shared_from_this to get shared_ptr from this pointer in derived classes.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Widget : public enable_shared_from_this<Widget> {\npublic:\n    virtual void process() {\n        cout << "Processing widget" << endl;\n    }\n    \n    shared_ptr<Widget> getShared() {\n        return shared_from_this();\n    }\n};\n\nclass Button : public Widget {\npublic:\n    void process() override {\n        cout << "Processing button" << endl;\n    }\n    \n    void click() {\n        auto self = shared_from_this();\n        cout << "Button clicked, ref count: \" << self.use_count() << endl;\n    }\n};\n\nint main() {\n    auto button = make_shared<Button>();\n    button->click();\n    button->process();\n    \n    auto widget = button->getShared();\n    widget->process();\n    \n    return 0;\n}',
  hint: 'enable_shared_from_this works correctly with inheritance when base provides it.'
},
{
  id: 'cpp_inheritance_40',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic iterator using inheritance.',
  mathSolution: 'Inheritance can create type-erased iterators for heterogeneous containers.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass IteratorBase {\npublic:\n    virtual void next() = 0;\n    virtual bool done() const = 0;\n    virtual int current() const = 0;\n    virtual ~IteratorBase() {}\n};\n\ntemplate<typename T>\nclass VectorIterator : public IteratorBase {\nprivate:\n    const vector<T>& vec;\n    size_t index;\n    \npublic:\n    VectorIterator(const vector<T>& v) : vec(v), index(0) {}\n    \n    void next() override { index++; }\n    bool done() const override { return index >= vec.size(); }\n    int current() const override { return vec[index]; }\n};\n\nclass Container {\nprivate:\n    vector<int> data;\n    \npublic:\n    void add(int val) { data.push_back(val); }\n    \n    unique_ptr<IteratorBase> createIterator() const {\n        return make_unique<VectorIterator<int>>(data);\n    }\n};\n\nint main() {\n    Container c;\n    c.add(10);\n    c.add(20);\n    c.add(30);\n    c.add(40);\n    \n    auto it = c.createIterator();\n    while (!it->done()) {\n        cout << it->current() << " \";\n        it->next();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Polymorphic iterators enable generic iteration over different container types.'
},
{
  "id": "cpp_inheritance_41",
  "topicId": "cpp_inheritance",
  "question": "Use inheritance with virtual functions and default arguments.",
  "mathSolution": "Default arguments are statically bound, not dynamically with virtual functions.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show(int x = 10) {\n        cout << \"Base show: \" << x << endl;\n    }\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    void show(int x = 20) override {\n        cout << \"Derived show: \" << x << endl;\n    }\n};\n\nint main() {\n    Base* b = new Derived();\n    b->show();  // Uses Base's default argument (10) but Derived's function body\n    \n    Derived* d = new Derived();\n    d->show();  // Uses Derived's default argument (20)\n    \n    Base* b2 = new Base();\n    b2->show();  // Uses Base's default argument (10)\n    \n    delete b;\n    delete d;\n    delete b2;\n    \n    return 0;\n}",
  "hint": "Default arguments are resolved at compile time based on static type, not dynamic type."
},
{
  id: 'cpp_inheritance_42',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with virtual function call in constructor/destructor.',
  mathSolution: 'Virtual functions in constructor/destructor call the current class version, not derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() {\n        cout << "Base constructor" << endl;\n        display();  // Calls Base::display, not Derived\n    }\n    \n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n    \n    ~Base() {\n        cout << "Base destructor" << endl;\n        display();  // Calls Base::display\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() {\n        cout << "Derived constructor" << endl;\n    }\n    \n    void display() override {\n        cout << "Derived display" << endl;\n    }\n    \n    ~Derived() {\n        cout << "Derived destructor" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    return 0;\n}',
  hint: 'Virtual functions do not work polymorphically in constructors and destructors.'
},
{
  id: 'cpp_inheritance_43',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with CRTP for static polymorphism in numeric types.',
  mathSolution: 'CRTP provides compile-time polymorphism for numeric operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass VectorBase {\npublic:\n    Derived operator+(const Derived& other) const {\n        Derived result = static_cast<const Derived&>(*this);\n        const Derived& derived = static_cast<const Derived&>(*this);\n        for (size_t i = 0; i < derived.size(); i++) {\n            result[i] = derived[i] + other[i];\n        }\n        return result;\n    }\n    \n    Derived operator*(double scalar) const {\n        Derived result = static_cast<const Derived&>(*this);\n        const Derived& derived = static_cast<const Derived&>(*this);\n        for (size_t i = 0; i < derived.size(); i++) {\n            result[i] = derived[i] * scalar;\n        }\n        return result;\n    }\n};\n\nclass Vector3D : public VectorBase<Vector3D> {\nprivate:\n    double data[3];\n    \npublic:\n    Vector3D(double x = 0, double y = 0, double z = 0) {\n        data[0] = x; data[1] = y; data[2] = z;\n    }\n    \n    double& operator[](size_t i) { return data[i]; }\n    const double& operator[](size_t i) const { return data[i]; }\n    \n    size_t size() const { return 3; }\n    \n    void display() const {\n        cout << \"(\" << data[0] << \", \" << data[1] << \", \" << data[2] << \")\" << endl;\n    }\n};\n\nint main() {\n    Vector3D v1(1, 2, 3);\n    Vector3D v2(4, 5, 6);\n    \n    Vector3D v3 = v1 + v2;\n    Vector3D v4 = v1 * 2.5;\n    \n    v3.display();\n    v4.display();\n    \n    return 0;\n}',
  hint: 'CRTP in numeric types enables operator overloading without virtual overhead.'
},
{
  id: 'cpp_inheritance_44',
  topicId: 'cpp_inheritance',
  question: 'Create interface classes using multiple inheritance.',
  mathSolution: 'Abstract base classes define interfaces that derived classes implement.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Clickable {\npublic:\n    virtual void onClick() = 0;\n    virtual ~Clickable() {}\n};\n\nclass Hoverable {\npublic:\n    virtual void onHover() = 0;\n    virtual ~Hoverable() {}\n};\n\nclass Button : public Drawable, public Clickable, public Hoverable {\nprivate:\n    string text;\n    \npublic:\n    Button(string t) : text(t) {}\n    \n    void draw() override {\n        cout << \"Drawing Button: \" << text << endl;\n    }\n    \n    void onClick() override {\n        cout << \"Button clicked: \" << text << endl;\n    }\n    \n    void onHover() override {\n        cout << \"Button hovered: \" << text << endl;\n    }\n};\n\nvoid render(Drawable& d) { d.draw(); }\nvoid handleClick(Clickable& c) { c.onClick(); }\n\nint main() {\n    Button btn(\"Submit\");\n    \n    render(btn);\n    handleClick(btn);\n    btn.onHover();\n    \n    return 0;\n}',
  hint: 'Multiple interface inheritance is a common design pattern in C++.'
},
{
  id: 'cpp_inheritance_45',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with static_assert for compile-time constraints.',
  mathSolution: 'static_assert ensures derived classes meet requirements at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename Derived>\nclass ShapeBase {\npublic:\n    void draw() {\n        static_assert(is_same<decltype(static_cast<Derived*>(this)->drawImpl()), void>::value,\n                      "Derived class must implement drawImpl()");\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        static_assert(is_convertible<decltype(static_cast<Derived*>(this)->areaImpl()), double>::value,\n                      "areaImpl() must return double");\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public ShapeBase<Circle> {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    void drawImpl() {\n        cout << "Drawing circle" << endl;\n    }\n    \n    double areaImpl() {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public ShapeBase<Rectangle> {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    void drawImpl() {\n        cout << "Drawing rectangle" << endl;\n    }\n    \n    double areaImpl() {\n        return width * height;\n    }\n};\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    c.draw();\n    cout << "Area: " << c.area() << endl;\n    \n    r.draw();\n    cout << "Area: " << r.area() << endl;\n    \n    return 0;\n}',
  hint: 'static_assert in base templates can enforce derived class contracts at compile time.'
},
{
  id: 'cpp_inheritance_46',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with [[nodiscard]] attribute.',
  mathSolution: '[[nodiscard]] can be inherited and applied to virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Resource {\npublic:\n    [[nodiscard]] virtual bool isAllocated() const {\n        return false;\n    }\n    \n    virtual ~Resource() {}\n};\n\nclass FileResource : public Resource {\npublic:\n    [[nodiscard]] bool isAllocated() const override {\n        return true;\n    }\n};\n\n[[nodiscard]] Resource* createResource() {\n    return new FileResource();\n}\n\nint main() {\n    FileResource fr;\n    \n    // fr.isAllocated();  // Warning: [[nodiscard]] ignored\n    bool allocated = fr.isAllocated();  // OK\n    cout << "Allocated: " << allocated << endl;\n    \n    // createResource();  // Warning: [[nodiscard]] ignored\n    Resource* res = createResource();  // OK\n    delete res;\n    \n    return 0;\n}',
  hint: '[[nodiscard]] attribute helps prevent ignoring important return values in inheritance.'
},
{
  id: 'cpp_inheritance_47',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with consteval and constinit specifiers (C++20).',
  mathSolution: 'consteval functions in base classes can be overridden with consteval.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass MathConstants {\npublic:\n    consteval virtual double getPi() const {\n        return 3.14159;\n    }\n    \n    consteval virtual double getE() const {\n        return 2.71828;\n    }\n};\n\nclass AdvancedMath : public MathConstants {\npublic:\n    consteval double getPi() const override {\n        return 3.141592653589793;\n    }\n    \n    consteval double getE() const override {\n        return 2.718281828459045;\n    }\n};\n\nint main() {\n    constexpr AdvancedMath math;\n    constexpr double pi = math.getPi();\n    constexpr double e = math.getE();\n    \n    cout << "Pi: \" << pi << endl;\n    cout << \"E: \" << e << endl;\n    \n    return 0;\n}',
  hint: 'consteval functions enforce compile-time evaluation in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_48',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic value type using std::any with inheritance.',
  mathSolution: 'std::any can store any type, including polymorphic objects.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() const override { cout << "○\"; }\n};\n\nclass Square : public Drawable {\npublic:\n    void draw() const override { cout << \"□\"; }\n};\n\nclass Triangle : public Drawable {\npublic:\n    void draw() const override { cout << \"▲\"; }\n};\n\nint main() {\n    vector<any> shapes;\n    shapes.push_back(Circle());\n    shapes.push_back(Square());\n    shapes.push_back(Triangle());\n    shapes.push_back(Circle());\n    \n    for (const auto& shape : shapes) {\n        if (const auto* c = any_cast<Circle>(&shape)) {\n            c->draw();\n        } else if (const auto* s = any_cast<Square>(&shape)) {\n            s->draw();\n        } else if (const auto* t = any_cast<Triangle>(&shape)) {\n            t->draw();\n        }\n        cout << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'std::any with inheritance provides type-erased polymorphic containers.'
},
{
  id: 'cpp_inheritance_49',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with source_location (C++20) for logging.',
  mathSolution: 'source_location captures file, line, function names in inheritance.',
  codeSolution: '#include <iostream>\n#include <source_location>\nusing namespace std;\n\nclass Logger {\nprotected:\n    void log(const string& msg, \n             const source_location& location = source_location::current()) {\n        cout << location.file_name() << \":\" << location.line()\n             << \" \" << location.function_name() << endl;\n        cout << \"  \" << msg << endl;\n    }\n};\n\nclass DatabaseLogger : public Logger {\npublic:\n    void connect() {\n        log(\"Connecting to database\");\n        // Connection logic\n    }\n    \n    void query(const string& sql) {\n        log(\"Executing: \" + sql);\n        // Query logic\n    }\n};\n\nclass FileLogger : public Logger {\npublic:\n    void write(const string& data) {\n        log(\"Writing: \" + data);\n    }\n};\n\nint main() {\n    DatabaseLogger dbLogger;\n    dbLogger.connect();\n    dbLogger.query(\"SELECT * FROM users\");\n    \n    FileLogger fileLogger;\n    fileLogger.write(\"Important data\");\n    \n    return 0;\n}',
  hint: 'source_location provides accurate call information in logging frameworks.'
},
{
  id: 'cpp_inheritance_50',
  topicId: 'cpp_inheritance',
  question: 'Create comprehensive inheritance demonstration program.',
  mathSolution: 'Combine multiple inheritance concepts in a complete example.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\n#include <typeinfo>\nusing namespace std;\n\n// Base interface\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    Shape(const string& c) : color(c) {}\n    virtual ~Shape() {}\n    virtual double area() const = 0;\n    virtual double perimeter() const = 0;\n    virtual void draw() const = 0;\n    virtual void info() const {\n        cout << \"Color: \" << color << endl;\n    }\n    \n    string getColor() const { return color; }\n};\n\n// Derived class 1\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(const string& c, double r) : Shape(c), radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() const override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() const override {\n        cout << \"○\";\n    }\n    \n    void info() const override {\n        Shape::info();\n        cout << \"Radius: \" << radius << endl;\n    }\n};\n\n// Derived class 2\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(const string& c, double w, double h) : Shape(c), width(w), height(h) {}\n    \n    double area() const override {\n        return width * height;\n    }\n    \n    double perimeter() const override {\n        return 2 * (width + height);\n    }\n    \n    void draw() const override {\n        cout << \"□\";\n    }\n    \n    void info() const override {\n        Shape::info();\n        cout << \"Dimensions: \" << width << \"x\" << height << endl;\n    }\n};\n\n// Template container using inheritance\nclass ShapeContainer {\nprivate:\n    vector<unique_ptr<Shape>> shapes;\n    \npublic:\n    void add(unique_ptr<Shape> shape) {\n        shapes.push_back(move(shape));\n    }\n    \n    void drawAll() const {\n        for (const auto& s : shapes) {\n            s->draw();\n            cout << \" \";\n        }\n        cout << endl;\n    }\n    \n    double totalArea() const {\n        double total = 0;\n        for (const auto& s : shapes) {\n            total += s->area();\n        }\n        return total;\n    }\n    \n    void printInfo() const {\n        for (const auto& s : shapes) {\n            cout << typeid(*s).name() << \":\" << endl;\n            s->info();\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    cout << \"=== Comprehensive Inheritance Demo ===\\n\\n\";\n    \n    ShapeContainer container;\n    container.add(make_unique<Circle>(\"red\", 5));\n    container.add(make_unique<Rectangle>(\"blue\", 4, 6));\n    container.add(make_unique<Circle>(\"green\", 3));\n    container.add(make_unique<Rectangle>(\"yellow\", 2, 3));\n    \n    cout << \"Shapes: \";\n    container.drawAll();\n    \n    cout << \"\\nTotal area: \" << container.totalArea() << endl;\n    \n    cout << \"\\nDetails:\\n\";\n    container.printInfo();\n    \n    cout << \"\\n=== Concepts Demonstrated ===\" << endl;\n    cout << \"1. Base class with pure virtual functions (abstraction)\" << endl;\n    cout << \"2. Derived classes implementing virtual functions\" << endl;\n    cout << \"3. Protected members for inheritance\" << endl;\n    cout << \"4. Virtual destructor for proper cleanup\" << endl;\n    cout << \"5. Polymorphic containers using base pointers\" << endl;\n    cout << \"6. Runtime type information with typeid\" << endl;\n    cout << \"7. Smart pointers with inheritance\" << endl;\n    \n    return 0;\n}',
  hint: 'This comprehensive example demonstrates multiple inheritance concepts in one program.'
}
);