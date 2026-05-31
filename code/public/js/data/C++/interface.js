QuizData.questions.push(
{
  id: 'cpp_interfaces_1',
  topicId: 'cpp_interfaces',
  question: 'Create a simple interface using abstract base class with pure virtual functions.',
  mathSolution: 'Interface defines contract with pure virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nclass Square : public Drawable {\npublic:\n    void draw() override { cout << "Drawing square" << endl; }\n};\n\nint main() {\n    Drawable* shapes[] = {new Circle(), new Square()};\n    for (auto s : shapes) s->draw();\n    for (auto s : shapes) delete s;\n    return 0;\n}',
  hint: 'Interface classes have only pure virtual functions and no data members.'
},
{
  id: 'cpp_interfaces_2',
  topicId: 'cpp_interfaces',
  question: 'Create interface with multiple pure virtual functions.',
  mathSolution: 'Interface can define multiple methods that implementing classes must provide.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double area() override { return width * height; }\n    double perimeter() override { return 2 * (width + height); }\n    void draw() override { cout << "Drawing rectangle" << endl; }\n};\n\nint main() {\n    Rectangle rect(5, 3);\n    cout << "Area: " << rect.area() << ", Perimeter: " << rect.perimeter() << endl;\n    rect.draw();\n    return 0;\n}',
  hint: 'All pure virtual functions must be implemented by concrete classes.'
},
{
  id: 'cpp_interfaces_3',
  topicId: 'cpp_interfaces',
  question: 'Implement multiple inheritance from multiple interfaces.',
  mathSolution: 'A class can implement multiple interface contracts.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;\n    virtual ~Resizable() {}\n};\n\nclass Button : public Drawable, public Resizable {\nprivate:\n    string label;\n    double size;\npublic:\n    Button(string lbl) : label(lbl), size(1.0) {}\n    void draw() override { cout << "Drawing button: " << label << endl; }\n    void resize(double factor) override { size *= factor; cout << "Button resized by " << factor << endl; }\n};\n\nint main() {\n    Button btn("Click Me");\n    btn.draw();\n    btn.resize(1.5);\n    return 0;\n}',
  hint: 'Multiple interface inheritance allows combining contracts from different sources.'
},
{
  id: 'cpp_interfaces_4',
  topicId: 'cpp_interfaces',
  question: 'Use interface as function parameter for polymorphism.',
  mathSolution: 'Interface references allow polymorphic function parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print() = 0;\n    virtual ~Printable() {}\n};\n\nclass Document : public Printable {\nprivate:\n    string content;\npublic:\n    Document(string c) : content(c) {}\n    void print() override { cout << "Document: " << content << endl; }\n};\n\nclass Photo : public Printable {\nprivate:\n    string caption;\npublic:\n    Photo(string c) : caption(c) {}\n    void print() override { cout << "Photo: " << caption << endl; }\n};\n\nvoid printItem(Printable& item) {\n    item.print();\n}\n\nint main() {\n    Document doc("Report\");\n    Photo photo(\"Vacation\");\n    printItem(doc);\n    printItem(photo);\n    return 0;\n}',
  hint: 'Interface references enable polymorphic function parameters.'
},
{
  id: 'cpp_interfaces_5',
  topicId: 'cpp_interfaces',
  question: 'Use interface pointer for polymorphic containers.',
  mathSolution: 'Containers of interface pointers hold different implementations.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void speak() = 0;\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Woof!" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void speak() override { cout << "Meow!" << endl; }\n};\n\nclass Cow : public Animal {\npublic:\n    void speak() override { cout << "Moo!" << endl; }\n};\n\nint main() {\n    vector<Animal*> animals;\n    animals.push_back(new Dog());\n    animals.push_back(new Cat());\n    animals.push_back(new Cow());\n    \n    for (auto a : animals) a->speak();\n    for (auto a : animals) delete a;\n    return 0;\n}',
  hint: 'Interface pointers enable polymorphic containers.'
},
{
  id: 'cpp_interfaces_6',
  topicId: 'cpp_interfaces',
  question: 'Create interface with default methods using virtual destructor.',
  mathSolution: 'Interfaces should always have virtual destructor for proper cleanup.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Resource {\npublic:\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual ~Resource() { cout << "Resource destroyed" << endl; }\n};\n\nclass FileResource : public Resource {\npublic:\n    void open() override { cout << "File opened" << endl; }\n    void close() override { cout << "File closed" << endl; }\n    ~FileResource() { cout << "FileResource destroyed" << endl; }\n};\n\nint main() {\n    Resource* res = new FileResource();\n    res->open();\n    res->close();\n    delete res;  // Calls both destructors correctly\n    return 0;\n}',
  hint: 'Always include virtual destructor in interface classes.'
},
{
  id: 'cpp_interfaces_7',
  topicId: 'cpp_interfaces',
  question: 'Create interface with pure virtual function returning reference.',
  mathSolution: 'Interface methods can return references to other interfaces.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& msg) = 0;\n    virtual ~Logger() {}\n};\n\nclass Service {\npublic:\n    virtual Logger& getLogger() = 0;\n    virtual void process() = 0;\n    virtual ~Service() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& msg) override { cout << "[LOG] " << msg << endl; }\n};\n\nclass DataService : public Service {\nprivate:\n    ConsoleLogger logger;\npublic:\n    Logger& getLogger() override { return logger; }\n    void process() override {\n        getLogger().log("Processing data");\n        cout << "Data processed" << endl;\n    }\n};\n\nint main() {\n    DataService service;\n    service.process();\n    return 0;\n}',
  hint: 'Interface methods can return references to other interfaces.'
},
{
  id: 'cpp_interfaces_8',
  topicId: 'cpp_interfaces',
  question: 'Use interface with smart pointers for automatic memory management.',
  mathSolution: 'Smart pointers with interfaces enable RAII for polymorphic objects.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "○ \"; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"□ \"; }\n};\n\nint main() {\n    vector<unique_ptr<Shape>> shapes;\n    shapes.push_back(make_unique<Circle>());\n    shapes.push_back(make_unique<Square>());\n    shapes.push_back(make_unique<Circle>());\n    \n    for (const auto& s : shapes) s->draw();\n    cout << endl;\n    return 0;\n}',
  hint: 'Smart pointers manage interface object lifetimes automatically.'
},
{
  "id": "cpp_interfaces_9",
  "topicId": "cpp_interfaces",
  "question": "Create interface factory pattern.",
  "mathSolution": "Factory creates objects implementing specific interface.",
  "codeSolution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ProductA : public Product {\npublic:\n    void use() override { cout << \"Using Product A\" << endl; }\n};\n\nclass ProductB : public Product {\npublic:\n    void use() override { cout << \"Using Product B\" << endl; }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(char type) {\n        if (type == 'A') return make_unique<ProductA>();\n        if (type == 'B') return make_unique<ProductB>();\n        return nullptr;\n    }\n};\n\nint main() {\n    auto product = Factory::create('A');\n    if (product) product->use();\n    product = Factory::create('B');\n    if (product) product->use();\n    return 0;\n}",
  "hint": "Factory pattern returns objects implementing the interface."
},
{
  id: 'cpp_interfaces_10',
  topicId: 'cpp_interfaces',
  question: 'Use interface segregation principle (multiple small interfaces).',
  mathSolution: 'Split large interfaces into smaller, focused interfaces.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Flyable {\npublic:\n    virtual void fly() = 0;\n    virtual ~Flyable() {}\n};\n\nclass Swimmable {\npublic:\n    virtual void swim() = 0;\n    virtual ~Swimmable() {}\n};\n\nclass Walkable {\npublic:\n    virtual void walk() = 0;\n    virtual ~Walkable() {}\n};\n\nclass Duck : public Flyable, public Swimmable, public Walkable {\npublic:\n    void fly() override { cout << "Duck flying\" << endl; }\n    void swim() override { cout << \"Duck swimming\" << endl; }\n    void walk() override { cout << \"Duck walking\" << endl; }\n};\n\nclass Penguin : public Swimmable, public Walkable {\npublic:\n    void swim() override { cout << \"Penguin swimming\" << endl; }\n    void walk() override { cout << \"Penguin walking\" << endl; }\n};\n\nint main() {\n    Duck d;\n    Penguin p;\n    d.fly(); d.swim(); d.walk();\n    p.swim(); p.walk();\n    return 0;\n}',
  hint: 'Interface segregation principle: many client-specific interfaces are better.'
},
{
  id: 'cpp_interfaces_11',
  topicId: 'cpp_interfaces',
  question: 'Create interface with const methods.',
  mathSolution: 'Interface methods can be const for read-only operations.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Readable {\npublic:\n    virtual string read() const = 0;\n    virtual ~Readable() {}\n};\n\nclass FileReader : public Readable {\nprivate:\n    string content;\npublic:\n    FileReader(const string& c) : content(c) {}\n    string read() const override { return content; }\n};\n\nvoid printContent(const Readable& r) {\n    cout << r.read() << endl;\n}\n\nint main() {\n    FileReader reader(\"Hello World\");\n    printContent(reader);\n    return 0;\n}',
  hint: 'Const interface methods guarantee read-only access.'
},
{
  id: 'cpp_interfaces_12',
  topicId: 'cpp_interfaces',
  question: 'Use interface as callback mechanism.',
  mathSolution: 'Interface callbacks enable event-driven programming.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass EventListener {\npublic:\n    virtual void onEvent(const string& event) = 0;\n    virtual ~EventListener() {}\n};\n\nclass Button {\nprivate:\n    vector<EventListener*> listeners;\n    string label;\npublic:\n    Button(string lbl) : label(lbl) {}\n    void addListener(EventListener* l) { listeners.push_back(l); }\n    void click() {\n        cout << "Button clicked: \" << label << endl;\n        for (auto l : listeners) l->onEvent(\"click:\" + label);\n    }\n};\n\nclass Logger : public EventListener {\npublic:\n    void onEvent(const string& event) override {\n        cout << \"[LOG] Event: \" << event << endl;\n    }\n};\n\nint main() {\n    Button btn(\"Submit\");\n    Logger logger;\n    btn.addListener(&logger);\n    btn.click();\n    return 0;\n}',
  hint: 'Interfaces are natural for implementing callback mechanisms.'
},
{
  id: 'cpp_interfaces_13',
  topicId: 'cpp_interfaces',
  question: 'Create interface with template method pattern.',
  mathSolution: 'Interface defines algorithm skeleton, implementations provide details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass DataProcessor {\npublic:\n    virtual void loadData() = 0;\n    virtual void processData() = 0;\n    virtual void saveData() = 0;\n    virtual ~DataProcessor() {}\n    \n    void process() {  // Template method\n        loadData();\n        processData();\n        saveData();\n    }\n};\n\nclass CSVProcessor : public DataProcessor {\npublic:\n    void loadData() override { cout << \"Loading CSV file\" << endl; }\n    void processData() override { cout << \"Processing CSV data\" << endl; }\n    void saveData() override { cout << \"Saving CSV results\" << endl; }\n};\n\nint main() {\n    CSVProcessor processor;\n    processor.process();\n    return 0;\n}',
  hint: 'Template method pattern uses interface to define algorithm structure.'
},
{
  id: 'cpp_interfaces_14',
  topicId: 'cpp_interfaces',
  question: 'Create interface with private inheritance for implementation hiding.',
  mathSolution: 'Private inheritance hides interface implementation details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print() = 0;\n    virtual ~Printable() {}\n};\n\nclass Document {\nprivate:\n    string content;\npublic:\n    Document(const string& c) : content(c) {}\n    void display() { cout << content << endl; }\n};\n\nclass Report : private Document, public Printable {\npublic:\n    Report(const string& c) : Document(c) {}\n    void print() override { display(); }\n};\n\nint main() {\n    Report r(\"Annual Report\");\n    Printable* p = &r;\n    p->print();\n    // r.display(); // Error: display is private due to private inheritance\n    return 0;\n}',
  hint: 'Private inheritance can hide implementation while exposing interface.'
},
{
  id: 'cpp_interfaces_15',
  topicId: 'cpp_interfaces',
  question: 'Use dynamic_cast to query interface implementation.',
  mathSolution: 'dynamic_cast checks if object implements specific interface.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;\n    virtual ~Resizable() {}\n};\n\nclass Shape : public Drawable, public Resizable {\nprivate:\n    double size;\npublic:\n    Shape() : size(1.0) {}\n    void draw() override { cout << \"Drawing shape\" << endl; }\n    void resize(double factor) override { size *= factor; cout << \"Resized by \" << factor << endl; }\n};\n\nint main() {\n    Drawable* d = new Shape();\n    d->draw();\n    \n    Resizable* r = dynamic_cast<Resizable*>(d);\n    if (r) r->resize(2.0);\n    \n    delete d;\n    return 0;\n}',
  hint: 'dynamic_cast queries whether an object implements an interface.'
},
{
  id: 'cpp_interfaces_16',
  topicId: 'cpp_interfaces',
  question: 'Create interface with static factory method.',
  mathSolution: 'Interface can provide static factory methods for creation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& msg) = 0;\n    virtual ~Logger() {}\n    \n    static unique_ptr<Logger> createConsoleLogger();\n    static unique_ptr<Logger> createFileLogger(const string& filename);\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& msg) override { cout << \"[CONSOLE] \" << msg << endl; }\n};\n\nclass FileLogger : public Logger {\nprivate:\n    string filename;\npublic:\n    FileLogger(const string& f) : filename(f) {}\n    void log(const string& msg) override { cout << \"[FILE:\" << filename << \"] \" << msg << endl; }\n};\n\nunique_ptr<Logger> Logger::createConsoleLogger() {\n    return make_unique<ConsoleLogger>();\n}\n\nunique_ptr<Logger> Logger::createFileLogger(const string& filename) {\n    return make_unique<FileLogger>(filename);\n}\n\nint main() {\n    auto console = Logger::createConsoleLogger();\n    auto file = Logger::createFileLogger(\"app.log\");\n    console->log(\"Hello\");\n    file->log(\"World\");\n    return 0;\n}',
  hint: 'Interfaces can provide static factory methods for object creation.'
},
{
  id: 'cpp_interfaces_17',
  topicId: 'cpp_interfaces',
  question: 'Use interface for dependency injection.',
  mathSolution: 'Interfaces enable loose coupling through dependency injection.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Database {\npublic:\n    virtual void query(const string& sql) = 0;\n    virtual ~Database() {}\n};\n\nclass MySQLDatabase : public Database {\npublic:\n    void query(const string& sql) override { cout << \"MySQL: \" << sql << endl; }\n};\n\nclass PostgreSQLDatabase : public Database {\npublic:\n    void query(const string& sql) override { cout << \"PostgreSQL: \" << sql << endl; }\n};\n\nclass UserService {\nprivate:\n    unique_ptr<Database> db;\npublic:\n    UserService(unique_ptr<Database> database) : db(move(database)) {}\n    void getUsers() { db->query(\"SELECT * FROM users\"); }\n};\n\nint main() {\n    UserService service(make_unique<MySQLDatabase>());\n    service.getUsers();\n    \n    UserService service2(make_unique<PostgreSQLDatabase>());\n    service2.getUsers();\n    return 0;\n}',
  hint: 'Interfaces enable dependency injection and loose coupling.'
},
{
  id: 'cpp_interfaces_18',
  topicId: 'cpp_interfaces',
  question: 'Create interface with noexcept specification.',
  mathSolution: 'Interface methods can specify exception guarantees.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    virtual int add(int a, int b) noexcept = 0;\n    virtual int divide(int a, int b) = 0;\n    virtual ~Calculator() {}\n};\n\nclass SimpleCalculator : public Calculator {\npublic:\n    int add(int a, int b) noexcept override { return a + b; }\n    int divide(int a, int b) override {\n        if (b == 0) throw runtime_error(\"Division by zero\");\n        return a / b;\n    }\n};\n\nint main() {\n    SimpleCalculator calc;\n    cout << calc.add(5, 3) << endl;\n    try {\n        cout << calc.divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'noexcept in interfaces documents exception safety guarantees.'
},
{
  id: 'cpp_interfaces_19',
  topicId: 'cpp_interfaces',
  question: 'Implement interface using CRTP for static polymorphism.',
  mathSolution: 'CRTP provides compile-time interface implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Drawable {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n};\n\nclass Circle : public Drawable<Circle> {\npublic:\n    void drawImpl() { cout << "Drawing circle" << endl; }\n};\n\nclass Square : public Drawable<Square> {\npublic:\n    void drawImpl() { cout << "Drawing square" << endl; }\n};\n\ntemplate<typename T>\nvoid render(Drawable<T>& shape) {\n    shape.draw();\n}\n\nint main() {\n    Circle c;\n    Square s;\n    render(c);\n    render(s);\n    return 0;\n}',
  hint: 'CRTP enables static polymorphism without virtual functions.'
},
{
  id: 'cpp_interfaces_20',
  topicId: 'cpp_interfaces',
  question: 'Use interface with std::variant for type-safe unions.',
  mathSolution: 'std::variant with visitor pattern implements compile-time interface.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nstruct Circle {\n    void draw() const { cout << \"○ \"; }\n};\n\nstruct Square {\n    void draw() const { cout << \"□ \"; }\n};\n\nstruct Triangle {\n    void draw() const { cout << \"▲ \"; }\n};\n\nusing Shape = variant<Circle, Square, Triangle>;\n\nint main() {\n    vector<Shape> shapes;\n    shapes.push_back(Circle{});\n    shapes.push_back(Square{});\n    shapes.push_back(Triangle{});\n    shapes.push_back(Circle{});\n    \n    auto drawVisitor = [](const auto& shape) { shape.draw(); };\n    \n    for (const auto& shape : shapes) {\n        visit(drawVisitor, shape);\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'std::variant provides compile-time interface through visitors.'
},
{
  id: 'cpp_interfaces_21',
  topicId: 'cpp_interfaces',
  question: 'Create interface with type erasure for non-intrusive design.',
  mathSolution: 'Type erasure hides concrete types behind uniform interface.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Drawable {\nprivate:\n    struct Concept {\n        virtual void draw() = 0;\n        virtual ~Concept() {}\n    };\n    \n    template<typename T>\n    struct Model : Concept {\n        T object;\n        Model(const T& obj) : object(obj) {}\n        void draw() override { object.draw(); }\n    };\n    \n    unique_ptr<Concept> pimpl;\n    \npublic:\n    template<typename T>\n    Drawable(const T& obj) : pimpl(make_unique<Model<T>>(obj)) {}\n    \n    void draw() { pimpl->draw(); }\n};\n\nstruct Circle {\n    void draw() const { cout << \"Circle\"; }\n};\n\nstruct Square {\n    void draw() const { cout << \"Square\"; }\n};\n\nint main() {\n    Drawable d1(Circle{});\n    Drawable d2(Square{});\n    \n    d1.draw(); cout << endl;\n    d2.draw(); cout << endl;\n    \n    return 0;\n}',
  hint: 'Type erasure creates interface without inheritance requirements.'
},
{
  id: 'cpp_interfaces_22',
  topicId: 'cpp_interfaces',
  question: 'Use interface with std::function for polymorphic callbacks.',
  mathSolution: 'std::function wraps any callable satisfying interface contract.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\nusing namespace std;\n\nclass Button {\nprivate:\n    vector<function<void()>> clickHandlers;\n    string label;\n    \npublic:\n    Button(const string& lbl) : label(lbl) {}\n    void addClickHandler(function<void()> handler) { clickHandlers.push_back(handler); }\n    void click() {\n        cout << "Button " << label << " clicked" << endl;\n        for (auto& h : clickHandlers) h();\n    }\n};\n\nint main() {\n    Button btn("Submit");\n    \n    btn.addClickHandler([]() { cout << "  - Logging click" << endl; });\n    btn.addClickHandler([]() { cout << "  - Sending event" << endl; });\n    btn.addClickHandler([]() { cout << "  - Updating UI" << endl; });\n    \n    btn.click();\n    return 0;\n}',
  hint: 'std::function provides callable interface for any function object.'
},
{
  id: 'cpp_interfaces_23',
  topicId: 'cpp_interfaces',
  question: 'Create interface with concept (C++20) for compile-time checking.',
  mathSolution: 'Concepts define compile-time interface requirements.',
  codeSolution: '#include <iostream>\n#include <concepts>\nusing namespace std;\n\ntemplate<typename T>\nconcept Drawable = requires(T t) {\n    { t.draw() } -> convertible_to<void>;\n};\n\ntemplate<typename T>\nconcept Resizable = requires(T t, double factor) {\n    { t.resize(factor) } -> convertible_to<void>;\n};\n\nstruct Circle {\n    void draw() { cout << \"Circle\"; }\n};\n\nstruct Square {\n    void draw() { cout << \"Square\"; }\n    void resize(double f) { cout << \" resize(\" << f << \")\"; }\n};\n\ntemplate<Drawable T>\nvoid render(const T& shape) {\n    shape.draw();\n}\n\ntemplate<Drawable T>\nvoid process(T& shape) {\n    shape.draw();\n    if constexpr (Resizable<T>) {\n        shape.resize(1.5);\n    }\n    cout << endl;\n}\n\nint main() {\n    Circle c;\n    Square s;\n    render(c); cout << endl;\n    process(s);\n    return 0;\n}',
  hint: 'Concepts provide compile-time interface constraints (C++20).'
},
{
  id: 'cpp_interfaces_24',
  topicId: 'cpp_interfaces',
  question: 'Create interface with virtual inheritance to avoid diamond problem.',
  mathSolution: 'Virtual inheritance ensures single interface instance in multiple inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Colored {\npublic:\n    virtual string getColor() = 0;\n    virtual ~Colored() {}\n};\n\nclass ColoredDrawable : public virtual Drawable, public virtual Colored {\n    // Combines both interfaces\n};\n\nclass Circle : public ColoredDrawable {\nprivate:\n    string color;\npublic:\n    Circle(const string& c) : color(c) {}\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    string getColor() override { return color; }\n};\n\nint main() {\n    Circle c(\"red\");\n    Drawable* d = &c;\n    Colored* col = &c;\n    d->draw();\n    cout << \"Color: \" << col->getColor() << endl;\n    return 0;\n}',
  hint: 'Virtual inheritance prevents duplicate interface base classes.'
},
{
  id: 'cpp_interfaces_25',
  topicId: 'cpp_interfaces',
  question: 'Use interface with placement new for custom memory management.',
  mathSolution: 'Placement new can construct interface objects in pre-allocated memory.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Widget {\npublic:\n    virtual void process() = 0;\n    virtual ~Widget() {}\n};\n\nclass ConcreteWidget : public Widget {\npublic:\n    void process() override { cout << \"Processing widget\" << endl; }\n};\n\nint main() {\n    alignas(ConcreteWidget) char buffer[sizeof(ConcreteWidget)];\n    \n    Widget* widget = new(buffer) ConcreteWidget();\n    widget->process();\n    widget->~Widget();  // Manual destructor call\n    \n    // Using unique_ptr with custom deleter for placement new\n    auto deleter = [](Widget* w) { w->~Widget(); };\n    unique_ptr<Widget, decltype(deleter)> widget2(new(buffer) ConcreteWidget(), deleter);\n    widget2->process();\n    \n    return 0;\n}',
  hint: 'Interfaces can be used with placement new for custom allocation.'
},
{
  id: 'cpp_interfaces_26',
  topicId: 'cpp_interfaces',
  question: 'Create interface with friend function for operator overloading.',
  mathSolution: 'Interfaces can declare friend operators for custom types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print(ostream& os) const = 0;\n    virtual ~Printable() {}\n    \n    friend ostream& operator<<(ostream& os, const Printable& p) {\n        p.print(os);\n        return os;\n    }\n};\n\nclass Point : public Printable {\nprivate:\n    int x, y;\npublic:\n    Point(int a, int b) : x(a), y(b) {}\n    void print(ostream& os) const override { os << \"(\" << x << \",\" << y << \")\"; }\n};\n\nint main() {\n    Point p(10, 20);\n    cout << \"Point: \" << p << endl;\n    return 0;\n}',
  hint: 'Interfaces can declare friend operators for consistent I/O.'
},
{
  id: 'cpp_interfaces_27',
  topicId: 'cpp_interfaces',
  question: 'Use interface for logging abstraction.',
  mathSolution: 'Logging interface enables multiple logging implementations.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <ctime>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& level, const string& msg) = 0;\n    virtual ~Logger() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& level, const string& msg) override {\n        cout << "[" << level << "] " << msg << endl;\n    }\n};\n\nclass TimestampLogger : public Logger {\nprivate:\n    unique_ptr<Logger> logger;\npublic:\n    TimestampLogger(unique_ptr<Logger> log) : logger(move(log)) {}\n    void log(const string& level, const string& msg) override {\n        time_t now = time(nullptr);\n        string timestamp = ctime(&now);\n        timestamp.pop_back();\n        logger->log(level, timestamp + ": " + msg);\n    }\n};\n\nint main() {\n    auto logger = make_unique<TimestampLogger>(make_unique<ConsoleLogger>());\n    logger->log("INFO", "Application started");\n    return 0;\n}',
  hint: 'Logger abstraction allows decorator pattern with interfaces.'
},
{
  "id": "cpp_interfaces_28",
  "topicId": "cpp_interfaces",
  "question": "Create interface for serialization.",
  "mathSolution": "Serialization interface allows polymorphic serialization.",
  "codeSolution": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Serializable {\npublic:\n    virtual void serialize(ostream& os) const = 0;\n    virtual void deserialize(istream& is) = 0;\n    virtual ~Serializable() {}\n};\n\nclass Person : public Serializable {\nprivate:\n    string name;\n    int age;\npublic:\n    Person() : name(\"\"), age(0) {}\n    Person(const string& n, int a) : name(n), age(a) {}\n    \n    void serialize(ostream& os) const override { \n        os << name << \",\" << age; \n    }\n    \n    void deserialize(istream& is) override {\n        string line;\n        getline(is, line);\n        size_t commaPos = line.find(',');\n        if (commaPos != string::npos) {\n            name = line.substr(0, commaPos);\n            age = stoi(line.substr(commaPos + 1));\n        }\n    }\n    \n    void display() const { \n        cout << name << \" (\" << age << \")\" << endl; \n    }\n};\n\nint main() {\n    Person p1(\"John\", 30);\n    stringstream ss;\n    p1.serialize(ss);\n    \n    cout << \"Serialized data: \" << ss.str() << endl;\n    \n    Person p2;\n    p2.deserialize(ss);\n    cout << \"Deserialized: \";\n    p2.display();\n    \n    return 0;\n}",
  "hint": "Serialization interface provides uniform serialization mechanism."
},
{
  id: 'cpp_interfaces_29',
  topicId: 'cpp_interfaces',
  question: 'Create interface for iterator pattern.',
  mathSolution: 'Iterator interface enables uniform container traversal.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Iterator {\npublic:\n    virtual void next() = 0;\n    virtual bool done() const = 0;\n    virtual int current() const = 0;\n    virtual ~Iterator() {}\n};\n\nclass VectorIterator : public Iterator {\nprivate:\n    const vector<int>& data;\n    size_t index;\npublic:\n    VectorIterator(const vector<int>& v) : data(v), index(0) {}\n    void next() override { if (index < data.size()) index++; }\n    bool done() const override { return index >= data.size(); }\n    int current() const override { return data[index]; }\n};\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40};\n    VectorIterator it(numbers);\n    while (!it.done()) {\n        cout << it.current() << \" \";\n        it.next();\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Iterator interface provides uniform traversal for different containers.'
},
{
  id: 'cpp_interfaces_30',
  topicId: 'cpp_interfaces',
  question: 'Use interface for command pattern.',
  mathSolution: 'Command interface encapsulates operations as objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Command {\npublic:\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n    virtual ~Command() {}\n};\n\nclass Light {\npublic:\n    void on() { cout << \"Light ON\" << endl; }\n    void off() { cout << \"Light OFF\" << endl; }\n};\n\nclass LightOnCommand : public Command {\nprivate:\n    Light& light;\npublic:\n    LightOnCommand(Light& l) : light(l) {}\n    void execute() override { light.on(); }\n    void undo() override { light.off(); }\n};\n\nclass LightOffCommand : public Command {\nprivate:\n    Light& light;\npublic:\n    LightOffCommand(Light& l) : light(l) {}\n    void execute() override { light.off(); }\n    void undo() override { light.on(); }\n};\n\nint main() {\n    Light livingRoom;\n    vector<unique_ptr<Command>> commands;\n    commands.push_back(make_unique<LightOnCommand>(livingRoom));\n    commands.push_back(make_unique<LightOffCommand>(livingRoom));\n    for (auto& cmd : commands) cmd->execute();\n    commands.back()->undo();\n    return 0;\n}',
  hint: 'Command interface encapsulates requests as objects.'
},
{
  id: 'cpp_interfaces_31',
  topicId: 'cpp_interfaces',
  question: 'Create interface for state pattern.',
  mathSolution: 'State interface encapsulates state-specific behavior.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass State {\npublic:\n    virtual void handle() = 0;\n    virtual ~State() {}\n};\n\nclass Context {\nprivate:\n    unique_ptr<State> state;\npublic:\n    void setState(unique_ptr<State> s) { state = move(s); }\n    void request() { if (state) state->handle(); }\n};\n\nclass ConcreteStateA : public State {\npublic:\n    void handle() override { cout << \"Handling State A\" << endl; }\n};\n\nclass ConcreteStateB : public State {\npublic:\n    void handle() override { cout << \"Handling State B\" << endl; }\n};\n\nint main() {\n    Context context;\n    context.setState(make_unique<ConcreteStateA>());\n    context.request();\n    context.setState(make_unique<ConcreteStateB>());\n    context.request();\n    return 0;\n}',
  hint: 'State interface encapsulates varying behavior per state.'
},
{
  id: 'cpp_interfaces_32',
  topicId: 'cpp_interfaces',
  question: 'Use interface for strategy pattern.',
  mathSolution: 'Strategy interface encapsulates interchangeable algorithms.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass SortingStrategy {\npublic:\n    virtual void sort(vector<int>& data) = 0;\n    virtual ~SortingStrategy() {}\n};\n\nclass BubbleSort : public SortingStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using bubble sort\" << endl;\n        for (size_t i = 0; i < data.size(); i++) {\n            for (size_t j = 0; j < data.size() - i - 1; j++) {\n                if (data[j] > data[j + 1]) swap(data[j], data[j + 1]);\n            }\n        }\n    }\n};\n\nclass QuickSort : public SortingStrategy {\npublic:\n    void sort(vector<int>& data) override { cout << \"Using quick sort\" << endl; }\n};\n\nclass DataProcessor {\nprivate:\n    unique_ptr<SortingStrategy> strategy;\n    vector<int> data;\npublic:\n    void setStrategy(unique_ptr<SortingStrategy> s) { strategy = move(s); }\n    void add(int val) { data.push_back(val); }\n    void process() { if (strategy) strategy->sort(data); }\n};\n\nint main() {\n    DataProcessor dp;\n    dp.add(5); dp.add(2); dp.add(8); dp.add(1);\n    dp.setStrategy(make_unique<BubbleSort>());\n    dp.process();\n    return 0;\n}',
  hint: 'Strategy interface allows interchangeable algorithms at runtime.'
},
{
  id: 'cpp_interfaces_33',
  topicId: 'cpp_interfaces',
  question: 'Create interface for observer pattern.',
  mathSolution: 'Observer interface defines update contract.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Observer {\npublic:\n    virtual void update(const string& message) = 0;\n    virtual ~Observer() {}\n};\n\nclass Subject {\nprivate:\n    vector<Observer*> observers;\npublic:\n    void attach(Observer* obs) { observers.push_back(obs); }\n    void notify(const string& msg) { for (auto o : observers) o->update(msg); }\n};\n\nclass ConcreteObserver : public Observer {\nprivate:\n    string name;\npublic:\n    ConcreteObserver(const string& n) : name(n) {}\n    void update(const string& message) override {\n        cout << name << \" received: \" << message << endl;\n    }\n};\n\nint main() {\n    Subject subject;\n    ConcreteObserver o1(\"Observer1\"), o2(\"Observer2\");\n    subject.attach(&o1);\n    subject.attach(&o2);\n    subject.notify(\"Hello Observers!\");\n    return 0;\n}',
  hint: 'Observer interface enables event-driven architecture.'
},
{
  id: 'cpp_interfaces_34',
  topicId: 'cpp_interfaces',
  question: 'Use interface for visitor pattern double dispatch.',
  mathSolution: 'Visitor interface enables operations on object structures.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Circle;\nclass Rectangle;\n\nclass Visitor {\npublic:\n    virtual void visit(Circle& c) = 0;\n    virtual void visit(Rectangle& r) = 0;\n    virtual ~Visitor() {}\n};\n\nclass Shape {\npublic:\n    virtual void accept(Visitor& v) = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void accept(Visitor& v) override { v.visit(*this); }\n    void draw() { cout << \"Circle\"; }\n};\n\nclass Rectangle : public Shape {\npublic:\n    void accept(Visitor& v) override { v.visit(*this); }\n    void draw() { cout << \"Rectangle\"; }\n};\n\nclass DrawVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override { c.draw(); }\n    void visit(Rectangle& r) override { r.draw(); }\n};\n\nint main() {\n    Circle c;\n    Rectangle r;\n    DrawVisitor drawer;\n    c.accept(drawer); cout << endl;\n    r.accept(drawer); cout << endl;\n    return 0;\n}',
  hint: 'Visitor interface enables double dispatch for operations.'
},
{
  id: 'cpp_interfaces_35',
  topicId: 'cpp_interfaces',
  question: 'Create interface for adapter pattern.',
  mathSolution: 'Adapter interface bridges incompatible interfaces.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass OldSystem {\npublic:\n    void oldRequest() { cout << \"Old system request\" << endl; }\n};\n\nclass NewSystem {\npublic:\n    virtual void newRequest() = 0;\n    virtual ~NewSystem() {}\n};\n\nclass Adapter : public NewSystem {\nprivate:\n    unique_ptr<OldSystem> oldSystem;\npublic:\n    Adapter() : oldSystem(make_unique<OldSystem>()) {}\n    void newRequest() override { oldSystem->oldRequest(); }\n};\n\nint main() {\n    unique_ptr<NewSystem> system = make_unique<Adapter>();\n    system->newRequest();\n    return 0;\n}',
  hint: 'Adapter interface allows incompatible systems to work together.'
},
{
  id: 'cpp_interfaces_36',
  topicId: 'cpp_interfaces',
  question: 'Use interface for bridge pattern.',
  mathSolution: 'Bridge interface separates abstraction from implementation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass DrawingAPI {\npublic:\n    virtual void drawCircle(double x, double y, double r) = 0;\n    virtual ~DrawingAPI() {}\n};\n\nclass DrawingAPI1 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API1: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass Shape {\nprotected:\n    unique_ptr<DrawingAPI> drawingAPI;\npublic:\n    Shape(unique_ptr<DrawingAPI> api) : drawingAPI(move(api)) {}\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass CircleShape : public Shape {\nprivate:\n    double x, y, radius;\npublic:\n    CircleShape(double cx, double cy, double r, unique_ptr<DrawingAPI> api)\n        : Shape(move(api)), x(cx), y(cy), radius(r) {}\n    void draw() override { drawingAPI->drawCircle(x, y, radius); }\n};\n\nint main() {\n    CircleShape circle(5, 5, 10, make_unique<DrawingAPI1>());\n    circle.draw();\n    return 0;\n}',
  hint: 'Bridge interface decouples abstraction from implementation.'
},
{
  id: 'cpp_interfaces_37',
  topicId: 'cpp_interfaces',
  question: 'Create interface for proxy pattern.',
  mathSolution: 'Proxy interface controls access to real object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Image {\npublic:\n    virtual void display() = 0;\n    virtual ~Image() {}\n};\n\nclass RealImage : public Image {\nprivate:\n    string filename;\n    void load() { cout << "Loading " << filename << endl; }\npublic:\n    RealImage(const string& f) : filename(f) { load(); }\n    void display() override { cout << "Displaying " << filename << endl; }\n};\n\nclass ImageProxy : public Image {\nprivate:\n    string filename;\n    unique_ptr<RealImage> realImage;\npublic:\n    ImageProxy(const string& f) : filename(f) {}\n    void display() override {\n        if (!realImage) realImage = make_unique<RealImage>(filename);\n        realImage->display();\n    }\n};\n\nint main() {\n    ImageProxy proxy("photo.jpg");\n    cout << "Proxy created, image not loaded" << endl;\n    proxy.display();\n    proxy.display();\n    return 0;\n}',
  hint: 'Proxy interface controls access to real objects.'
},
{
  id: 'cpp_interfaces_38',
  topicId: 'cpp_interfaces',
  question: 'Use interface for decorator pattern.',
  mathSolution: 'Decorator interface wraps and enhances existing objects.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Coffee {\npublic:\n    virtual double cost() = 0;\n    virtual string description() = 0;\n    virtual ~Coffee() {}\n};\n\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() override { return 5.0; }\n    string description() override { return \"Simple coffee\"; }\n};\n\nclass CoffeeDecorator : public Coffee {\nprotected:\n    unique_ptr<Coffee> coffee;\npublic:\n    CoffeeDecorator(unique_ptr<Coffee> c) : coffee(move(c)) {}\n};\n\nclass MilkDecorator : public CoffeeDecorator {\npublic:\n    MilkDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() override { return coffee->cost() + 2.0; }\n    string description() override { return coffee->description() + \", milk\"; }\n};\n\nint main() {\n    auto coffee = make_unique<SimpleCoffee>();\n    coffee = make_unique<MilkDecorator>(move(coffee));\n    cout << coffee->description() << \": $\" << coffee->cost() << endl;\n    return 0;\n}',
  hint: 'Decorator interface adds behavior dynamically.'
},
{
  id: 'cpp_interfaces_39',
  topicId: 'cpp_interfaces',
  question: 'Create interface for facade pattern.',
  mathSolution: 'Facade interface simplifies complex subsystem.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CPU {\npublic:\n    void start() { cout << \"CPU started\" << endl; }\n    void execute() { cout << \"CPU executing\" << endl; }\n};\n\nclass Memory {\npublic:\n    void load() { cout << \"Memory loaded\" << endl; }\n};\n\nclass HardDrive {\npublic:\n    void read() { cout << \"Hard drive reading\" << endl; }\n};\n\nclass ComputerFacade {\nprivate:\n    CPU cpu;\n    Memory memory;\n    HardDrive hd;\npublic:\n    void start() {\n        cpu.start();\n        memory.load();\n        hd.read();\n        cpu.execute();\n        cout << \"Computer ready\" << endl;\n    }\n};\n\nint main() {\n    ComputerFacade computer;\n    computer.start();\n    return 0;\n}',
  hint: 'Facade interface simplifies subsystem interaction.'
},
{
  "id": "cpp_interfaces_40",
  "topicId": "cpp_interfaces",
  "question": "Use interface for flyweight pattern.",
  "mathSolution": "Flyweight interface shares common state among objects.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Character {\npublic:\n    virtual void display(int x, int y) = 0;\n    virtual ~Character() {}\n};\n\nclass ConcreteCharacter : public Character {\nprivate:\n    char symbol;\n    string font;\npublic:\n    ConcreteCharacter(char s, const string& f) : symbol(s), font(f) {}\n    void display(int x, int y) override {\n        cout << \"Character '\" << symbol << \"' at (\" << x << \",\" << y \n             << \") font: \" << font << endl;\n    }\n};\n\nclass CharacterFactory {\nprivate:\n    unordered_map<string, shared_ptr<Character>> cache;\npublic:\n    shared_ptr<Character> getCharacter(char c, const string& font) {\n        string key = string(1, c) + font;\n        if (cache.find(key) == cache.end()) {\n            cache[key] = make_shared<ConcreteCharacter>(c, font);\n            cout << \"Creating new character: \" << key << endl;\n        }\n        return cache[key];\n    }\n    \n    size_t getCacheSize() const {\n        return cache.size();\n    }\n};\n\nint main() {\n    CharacterFactory factory;\n    auto a1 = factory.getCharacter('A', \"Arial\");\n    auto a2 = factory.getCharacter('A', \"Arial\");\n    auto b1 = factory.getCharacter('B', \"Arial\");\n    \n    a1->display(0, 0);\n    a2->display(10, 0);\n    b1->display(20, 0);\n    \n    cout << \"\\nUnique characters cached: \" << factory.getCacheSize() << endl;\n    cout << \"(Only 2 unique characters created for 3 uses)\" << endl;\n    \n    return 0;\n}",
  "hint": "Flyweight interface enables efficient sharing of objects."
},
{
  id: 'cpp_interfaces_41',
  topicId: 'cpp_interfaces',
  question: 'Create interface for mediator pattern.',
  mathSolution: 'Mediator interface centralizes communication between objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Colleague;\n\nclass Mediator {\npublic:\n    virtual void notify(Colleague* sender, const string& event) = 0;\n    virtual ~Mediator() {}\n};\n\nclass Colleague {\nprotected:\n    Mediator* mediator;\npublic:\n    Colleague(Mediator* m) : mediator(m) {}\n};\n\nclass ConcreteMediator : public Mediator {\nprivate:\n    vector<Colleague*> colleagues;\npublic:\n    void addColleague(Colleague* c) { colleagues.push_back(c); }\n    void notify(Colleague* sender, const string& event) override {\n        for (auto c : colleagues) if (c != sender) cout << \"Mediator: \" << event << endl;\n    }\n};\n\nclass Component1 : public Colleague {\npublic:\n    Component1(Mediator* m) : Colleague(m) {}\n    void doSomething() { mediator->notify(this, \"Component1 event\"); }\n};\n\nint main() {\n    ConcreteMediator mediator;\n    Component1 c1(&mediator);\n    mediator.addColleague(&c1);\n    c1.doSomething();\n    return 0;\n}',
  hint: 'Mediator interface reduces coupling between components.'
},
{
  id: 'cpp_interfaces_42',
  topicId: 'cpp_interfaces',
  question: 'Use interface for memento pattern.',
  mathSolution: 'Memento interface captures and restores object state.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Memento {\npublic:\n    virtual string getState() const = 0;\n    virtual ~Memento() {}\n};\n\nclass ConcreteMemento : public Memento {\nprivate:\n    string state;\npublic:\n    ConcreteMemento(const string& s) : state(s) {}\n    string getState() const override { return state; }\n};\n\nclass Originator {\nprivate:\n    string state;\npublic:\n    void setState(const string& s) { state = s; cout << \"State: \" << state << endl; }\n    unique_ptr<Memento> save() { return make_unique<ConcreteMemento>(state); }\n    void restore(unique_ptr<Memento> m) { state = m->getState(); cout << \"Restored: \" << state << endl; }\n};\n\nint main() {\n    Originator originator;\n    originator.setState(\"State1\");\n    auto saved = originator.save();\n    originator.setState(\"State2\");\n    originator.restore(move(saved));\n    return 0;\n}',
  hint: 'Memento interface enables state capture and restoration.'
},
{
  id: 'cpp_interfaces_43',
  topicId: 'cpp_interfaces',
  question: 'Create interface for chain of responsibility.',
  mathSolution: 'Handler interface forms chain for request processing.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Handler {\nprotected:\n    unique_ptr<Handler> next;\npublic:\n    void setNext(unique_ptr<Handler> h) { next = move(h); }\n    virtual void handleRequest(int level) {\n        if (next) next->handleRequest(level);\n    }\n    virtual ~Handler() {}\n};\n\nclass ConcreteHandler1 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 10) cout << \"Handler1 processed \" << level << endl;\n        else Handler::handleRequest(level);\n    }\n};\n\nclass ConcreteHandler2 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 20) cout << \"Handler2 processed \" << level << endl;\n        else Handler::handleRequest(level);\n    }\n};\n\nint main() {\n    auto h1 = make_unique<ConcreteHandler1>();\n    auto h2 = make_unique<ConcreteHandler2>();\n    h1->setNext(move(h2));\n    h1->handleRequest(5);\n    h1->handleRequest(15);\n    return 0;\n}',
  hint: 'Handler interface enables request processing chain.'
},
{
  id: 'cpp_interfaces_44',
  topicId: 'cpp_interfaces',
  question: 'Use interface for prototype pattern.',
  mathSolution: 'Prototype interface defines cloning method.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Prototype {\npublic:\n    virtual unique_ptr<Prototype> clone() const = 0;\n    virtual void display() const = 0;\n    virtual ~Prototype() {}\n};\n\nclass ConcretePrototype : public Prototype {\nprivate:\n    int id;\n    string name;\npublic:\n    ConcretePrototype(int i, const string& n) : id(i), name(n) {}\n    ConcretePrototype(const ConcretePrototype& other) : id(other.id), name(other.name) {}\n    unique_ptr<Prototype> clone() const override {\n        return make_unique<ConcretePrototype>(*this);\n    }\n    void display() const override { cout << id << \": \" << name << endl; }\n};\n\nint main() {\n    ConcretePrototype original(1, \"Original\");\n    auto clone = original.clone();\n    original.display();\n    clone->display();\n    return 0;\n}',
  hint: 'Prototype interface enables object cloning.'
},
{
  id: 'cpp_interfaces_45',
  topicId: 'cpp_interfaces',
  question: 'Create interface for builder pattern.',
  mathSolution: 'Builder interface constructs complex objects step by step.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Product {\nprivate:\n    string parts[3];\npublic:\n    void setPart(int index, const string& part) { parts[index] = part; }\n    void show() { for (int i = 0; i < 3; i++) cout << parts[i] << \" \"; cout << endl; }\n};\n\nclass Builder {\npublic:\n    virtual void buildPartA() = 0;\n    virtual void buildPartB() = 0;\n    virtual void buildPartC() = 0;\n    virtual Product getResult() = 0;\n    virtual ~Builder() {}\n};\n\nclass ConcreteBuilder : public Builder {\nprivate:\n    Product product;\npublic:\n    void buildPartA() override { product.setPart(0, \"PartA\"); }\n    void buildPartB() override { product.setPart(1, \"PartB\"); }\n    void buildPartC() override { product.setPart(2, \"PartC\"); }\n    Product getResult() override { return product; }\n};\n\nclass Director {\nprivate:\n    Builder& builder;\npublic:\n    Director(Builder& b) : builder(b) {}\n    void construct() {\n        builder.buildPartA();\n        builder.buildPartB();\n        builder.buildPartC();\n    }\n};\n\nint main() {\n    ConcreteBuilder builder;\n    Director director(builder);\n    director.construct();\n    Product product = builder.getResult();\n    product.show();\n    return 0;\n}',
  hint: 'Builder interface constructs complex objects step by step.'
},
{
  id: 'cpp_interfaces_46',
  topicId: 'cpp_interfaces',
  question: 'Use interface for singleton pattern.',
  mathSolution: 'Singleton interface ensures single instance access.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Singleton {\nprivate:\n    static unique_ptr<Singleton> instance;\n    Singleton() { cout << \"Singleton created\" << endl; }\npublic:\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n    \n    static Singleton* getInstance() {\n        if (!instance) instance = make_unique<Singleton>();\n        return instance.get();\n    }\n    \n    void doSomething() { cout << \"Singleton doing work\" << endl; }\n};\n\nunique_ptr<Singleton> Singleton::instance = nullptr;\n\nint main() {\n    Singleton* s1 = Singleton::getInstance();\n    Singleton* s2 = Singleton::getInstance();\n    cout << \"Same instance? \" << (s1 == s2 ? \"Yes\" : \"No\") << endl;\n    s1->doSomething();\n    return 0;\n}',
  hint: 'Singleton interface ensures single instance of a class.'
},
{
  id: 'cpp_interfaces_47',
  topicId: 'cpp_interfaces',
  question: 'Create interface for pool pattern.',
  mathSolution: 'Pool interface manages reusable object instances.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <memory>\nusing namespace std;\n\nclass Resource {\nprivate:\n    int id;\n    static int nextId;\npublic:\n    Resource() : id(nextId++) { cout << \"Resource \" << id << \" created\" << endl; }\n    ~Resource() { cout << \"Resource \" << id << \" destroyed\" << endl; }\n    void use() { cout << \"Using resource \" << id << endl; }\n};\n\nint Resource::nextId = 1;\n\nclass ResourcePool {\nprivate:\n    queue<unique_ptr<Resource>> pool;\n    size_t maxSize;\npublic:\n    ResourcePool(size_t size) : maxSize(size) {\n        for (size_t i = 0; i < size; i++) pool.push(make_unique<Resource>());\n    }\n    \n    unique_ptr<Resource> acquire() {\n        if (pool.empty()) return make_unique<Resource>();\n        auto res = move(pool.front());\n        pool.pop();\n        return res;\n    }\n    \n    void release(unique_ptr<Resource> res) {\n        if (pool.size() < maxSize) pool.push(move(res));\n    }\n};\n\nint main() {\n    ResourcePool pool(2);\n    auto r1 = pool.acquire();\n    auto r2 = pool.acquire();\n    r1->use();\n    r2->use();\n    pool.release(move(r1));\n    auto r3 = pool.acquire();\n    r3->use();\n    return 0;\n}',
  hint: 'Pool interface manages reusable resource objects.'
},
{
  id: 'cpp_interfaces_48',
  topicId: 'cpp_interfaces',
  question: 'Use interface for null object pattern.',
  mathSolution: 'Null object interface provides default do-nothing behavior.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& msg) = 0;\n    virtual ~Logger() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& msg) override { cout << \"[LOG] \" << msg << endl; }\n};\n\nclass NullLogger : public Logger {\npublic:\n    void log(const string& msg) override { /* do nothing */ }\n};\n\nclass Application {\nprivate:\n    unique_ptr<Logger> logger;\npublic:\n    Application(unique_ptr<Logger> log) : logger(move(log)) {}\n    void run() { logger->log(\"Application running\"); }\n};\n\nint main() {\n    Application app1(make_unique<ConsoleLogger>());\n    Application app2(make_unique<NullLogger>());\n    app1.run();\n    app2.run();\n    return 0;\n}',
  hint: 'Null object interface provides safe default behavior.'
},
{
  id: 'cpp_interfaces_49',
  topicId: 'cpp_interfaces',
  question: 'Create interface for composite pattern.',
  mathSolution: 'Composite interface allows uniform treatment of leaf and composite.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Graphic {\npublic:\n    virtual void draw() = 0;\n    virtual ~Graphic() {}\n};\n\nclass Circle : public Graphic {\npublic:\n    void draw() override { cout << \"○ \"; }\n};\n\nclass Square : public Graphic {\npublic:\n    void draw() override { cout << \"□ \"; }\n};\n\nclass CompositeGraphic : public Graphic {\nprivate:\n    vector<unique_ptr<Graphic>> children;\npublic:\n    void add(unique_ptr<Graphic> g) { children.push_back(move(g)); }\n    void draw() override { for (auto& g : children) g->draw(); }\n};\n\nint main() {\n    auto composite = make_unique<CompositeGraphic>();\n    composite->add(make_unique<Circle>());\n    composite->add(make_unique<Square>());\n    composite->add(make_unique<Circle>());\n    composite->draw(); cout << endl;\n    return 0;\n}',
  hint: 'Composite interface treats part and whole uniformly.'
},
{
  id: 'cpp_interfaces_50',
  topicId: 'cpp_interfaces',
  question: 'Create comprehensive interface demonstration program.',
  mathSolution: 'Combine multiple interface concepts in complete example.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\n// 1. Basic interface\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\n// 2. Another interface\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;\n    virtual ~Resizable() {}\n};\n\n// 3. Multiple interface implementation\nclass Shape : public Drawable, public Resizable {\nprotected:\n    double size;\n    string name;\npublic:\n    Shape(const string& n) : size(1.0), name(n) {}\n    void resize(double factor) override { size *= factor; }\n};\n\nclass Circle : public Shape {\npublic:\n    Circle() : Shape(\"Circle\") {}\n    void draw() override { cout << \"○ (size: \" << size << \") \"; }\n};\n\nclass Square : public Shape {\npublic:\n    Square() : Shape(\"Square\") {}\n    void draw() override { cout << \"□ (size: \" << size << \") \"; }\n};\n\n// 4. Factory interface\nclass ShapeFactory {\npublic:\n    virtual unique_ptr<Drawable> create() = 0;\n    virtual ~ShapeFactory() {}\n};\n\nclass CircleFactory : public ShapeFactory {\npublic:\n    unique_ptr<Drawable> create() override { return make_unique<Circle>(); }\n};\n\nclass SquareFactory : public ShapeFactory {\npublic:\n    unique_ptr<Drawable> create() override { return make_unique<Square>(); }\n};\n\n// 5. Observer interface\nclass Observer {\npublic:\n    virtual void onDraw() = 0;\n    virtual ~Observer() {}\n};\n\nclass DrawObserver : public Observer {\npublic:\n    void onDraw() override { cout << \"[Observed] \"; }\n};\n\n// 6. Composite interface\nclass CompositeDrawable : public Drawable {\nprivate:\n    vector<unique_ptr<Drawable>> children;\n    vector<Observer*> observers;\npublic:\n    void add(unique_ptr<Drawable> d) { children.push_back(move(d)); }\n    void attach(Observer* o) { observers.push_back(o); }\n    void draw() override {\n        for (auto o : observers) o->onDraw();\n        for (auto& c : children) c->draw();\n    }\n};\n\nint main() {\n    cout << \"=== Interface Demonstration ===\\n\\n\";\n    \n    // Factory pattern\n    CircleFactory circleFactory;\n    SquareFactory squareFactory;\n    \n    // Create shapes\n    auto circle = circleFactory.create();\n    auto square = squareFactory.create();\n    \n    // Resize if supported\n    if (auto resizable = dynamic_cast<Resizable*>(circle.get())) {\n        resizable->resize(2.0);\n    }\n    \n    // Draw individual shapes\n    cout << \"Individual shapes:\\n\";\n    circle->draw(); cout << endl;\n    square->draw(); cout << endl;\n    \n    // Composite pattern\n    cout << \"\\nComposite shape:\\n\";\n    auto composite = make_unique<CompositeDrawable>();\n    DrawObserver observer;\n    composite->attach(&observer);\n    composite->add(circleFactory.create());\n    composite->add(squareFactory.create());\n    composite->add(circleFactory.create());\n    composite->draw(); cout << endl;\n    \n    // Container of interfaces\n    cout << \"\\nContainer of shapes:\\n\";\n    vector<unique_ptr<Drawable>> shapes;\n    shapes.push_back(circleFactory.create());\n    shapes.push_back(squareFactory.create());\n    shapes.push_back(circleFactory.create());\n    shapes.push_back(squareFactory.create());\n    \n    for (auto& s : shapes) s->draw();\n    cout << endl;\n    \n    cout << \"\\n=== Interface Concepts Demonstrated ===\" << endl;\n    cout << \"1. Interface definition with pure virtual functions\" << endl;\n    cout << \"2. Multiple interface inheritance\" << endl;\n    cout << \"3. Factory pattern with interfaces\" << endl;\n    cout << \"4. Observer pattern with interfaces\" << endl;\n    cout << \"5. Composite pattern with interfaces\" << endl;\n    cout << \"6. Polymorphic containers with interfaces\" << endl;\n    cout << \"7. Dynamic casting to query interfaces\" << endl;\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of multiple interface design patterns.'
}
);