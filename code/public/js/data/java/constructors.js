QuizData.questions.push(
  // BASIC CONSTRUCTORS (4)
  {
    id: "constructor_1",
    topicId: "constructor",
    question: "Create a simple default constructor.",
    mathSolution: "Constructor has same name as class, no return type",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        int age;\n        Student() {\n            name = "Unknown";\n            age = 0;\n            System.out.println("Default constructor called");\n        }\n        void display() {\n            System.out.println("Name: " + name + ", Age: " + age);\n        }\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.display();\n    }\n}',
    hint: "Constructor is called when object is created with new",
  },
  {
    id: "constructor_2",
    topicId: "constructor",
    question: "Create parameterized constructor.",
    mathSolution: "Constructor with parameters to initialize object",
    codeSolution: 'public class Main {\n    static class Rectangle {\n        double length, width;\n        Rectangle(double l, double w) {\n            length = l;\n            width = w;\n            System.out.println("Parameterized constructor called");\n        }\n        double area() {\n            return length * width;\n        }\n    }\n    public static void main(String[] args) {\n        Rectangle r1 = new Rectangle(5.5, 3.2);\n        System.out.println("Area: " + r1.area());\n    }\n}',
    hint: "Parameters passed during object creation",
  },
  {
    id: "constructor_3",
    topicId: "constructor",
    question: "Multiple constructors - constructor overloading.",
    mathSolution: "Class can have multiple constructors with different parameters",
    codeSolution: 'public class Main {\n    static class Box {\n        double length, width, height;\n        Box() { length = width = height = 1; System.out.println("Default Box"); }\n        Box(double side) { length = width = height = side; System.out.println("Cube Box"); }\n        Box(double l, double w, double h) { length = l; width = w; height = h; System.out.println("Parameterized Box"); }\n        double volume() { return length * width * height; }\n    }\n    public static void main(String[] args) {\n        Box b1 = new Box();\n        Box b2 = new Box(5);\n        Box b3 = new Box(2, 3, 4);\n        System.out.println("Volume b1: " + b1.volume());\n        System.out.println("Volume b2: " + b2.volume());\n        System.out.println("Volume b3: " + b3.volume());\n    }\n}',
    hint: "Overloaded constructors provide flexibility",
  },
  {
    id: "constructor_4",
    topicId: "constructor",
    question: "Constructor with default values if not provided.",
    mathSolution: "Use constructor chaining for defaults",
    codeSolution: 'public class Main {\n    static class Employee {\n        int id; String name; double salary;\n        Employee() { this(0, "Unknown", 0.0); }\n        Employee(int id) { this(id, "Unknown", 0.0); }\n        Employee(int id, String name) { this(id, name, 0.0); }\n        Employee(int id, String name, double salary) {\n            this.id = id; this.name = name; this.salary = salary;\n        }\n        void display() { System.out.println(id + ", " + name + ", $" + salary); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee(101);\n        Employee e3 = new Employee(102, "Alice");\n        Employee e4 = new Employee(103, "Bob", 50000);\n        e1.display(); e2.display(); e3.display(); e4.display();\n    }\n}',
    hint: "this() calls another constructor in same class",
  },

  // CONSTRUCTOR CHAINING (4)
  {
    id: "constructor_5",
    topicId: "constructor",
    question: "Constructor chaining using this() keyword.",
    mathSolution: "One constructor calls another using this()",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age; String city;\n        Person() { this("Unknown", 0, "Unknown"); System.out.println("No-arg constructor"); }\n        Person(String name) { this(name, 0, "Unknown"); System.out.println("One-arg constructor"); }\n        Person(String name, int age) { this(name, age, "Unknown"); System.out.println("Two-arg constructor"); }\n        Person(String name, int age, String city) {\n            this.name = name; this.age = age; this.city = city;\n            System.out.println("Three-arg constructor");\n        }\n        void display() { System.out.println(name + ", " + age + ", " + city); }\n    }\n    public static void main(String[] args) {\n        Person p1 = new Person();\n        System.out.println("---");\n        Person p2 = new Person("Alice");\n        System.out.println("---");\n        Person p3 = new Person("Bob", 25);\n        System.out.println("---");\n        Person p4 = new Person("Charlie", 30, "NYC");\n    }\n}',
    hint: "this() must be first statement in constructor",
  },
  {
    id: "constructor_6",
    topicId: "constructor",
    question: "Constructor chaining with inheritance using super().",
    mathSolution: "Child constructor calls parent constructor",
    codeSolution: 'public class Main {\n    static class Animal {\n        String type;\n        Animal() { this("Unknown animal"); System.out.println("Animal default constructor"); }\n        Animal(String type) { this.type = type; System.out.println("Animal parameterized constructor"); }\n    }\n    static class Dog extends Animal {\n        String breed;\n        Dog() { this("Unknown breed"); System.out.println("Dog default constructor"); }\n        Dog(String breed) {\n            super("Dog");\n            this.breed = breed;\n            System.out.println("Dog parameterized constructor");\n        }\n        void display() { System.out.println("Type: " + type + ", Breed: " + breed); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog("Labrador");\n        d.display();\n    }\n}',
    hint: "super() calls parent constructor, must be first",
  },
  {
    id: "constructor_7",
    topicId: "constructor",
    question: "Implicit super() call if parent has default constructor.",
    mathSolution: "If no super(), default parent constructor called",
    codeSolution: 'public class Main {\n    static class Parent {\n        Parent() { System.out.println("Parent constructor"); }\n    }\n    static class Child extends Parent {\n        Child() { System.out.println("Child constructor"); }\n    }\n    static class GrandChild extends Child {\n        GrandChild() { System.out.println("GrandChild constructor"); }\n    }\n    public static void main(String[] args) {\n        GrandChild gc = new GrandChild();\n    }\n}',
    hint: "If no super(), default parent constructor called",
  },
  {
    id: "constructor_8",
    topicId: "constructor",
    question: "Parent must have default constructor if child doesn't call super explicitly.",
    mathSolution: "If parent lacks default constructor, child must call super explicitly",
    codeSolution: 'public class Main {\n    static class Parent {\n        String name;\n        Parent(String name) { this.name = name; System.out.println("Parent constructor: " + name); }\n    }\n    static class Child extends Parent {\n        int age;\n        Child(String name, int age) {\n            super(name);\n            this.age = age;\n            System.out.println("Child constructor");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child("Alice", 10);\n    }\n}',
    hint: "If parent has no default constructor, child must call super explicitly",
  },

  // COPY CONSTRUCTORS (3)
  {
    id: "constructor_9",
    topicId: "constructor",
    question: "Create a copy constructor to duplicate objects.",
    mathSolution: "Constructor that takes same type object as parameter",
    codeSolution: 'public class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        Point(Point p) { this.x = p.x; this.y = p.y; System.out.println("Copy constructor called"); }\n        void display() { System.out.println("(" + x + ", " + y + ")"); }\n    }\n    public static void main(String[] args) {\n        Point p1 = new Point(5, 10);\n        Point p2 = new Point(p1);\n        Point p3 = p1;\n        p1.x = 100;\n        System.out.print("p1: "); p1.display();\n        System.out.print("p2: "); p2.display();\n        System.out.print("p3: "); p3.display();\n    }\n}',
    hint: "Copy constructor creates new object with same values",
  },
  {
    id: "constructor_10",
    topicId: "constructor",
    question: "Deep copy vs shallow copy in copy constructor.",
    mathSolution: "Copy constructor should handle reference types properly",
    codeSolution: 'public class Main {\n    static class Address {\n        String city;\n        Address(String c) { city = c; }\n        Address(Address a) { city = a.city; }\n    }\n    static class Person {\n        String name;\n        Address address;\n        Person(String n, Address a) { name = n; address = a; }\n        Person(Person p) { this.name = p.name; this.address = p.address; }\n        Person deepCopy(Person p) { return new Person(p.name, new Address(p.address)); }\n        void display() { System.out.println(name + " lives in " + address.city); }\n    }\n    public static void main(String[] args) {\n        Address a = new Address("NYC");\n        Person p1 = new Person("Alice", a);\n        Person p2 = new Person(p1);\n        Person p3 = p1.deepCopy(p1);\n        p1.address.city = "Boston";\n        System.out.print("p1: "); p1.display();\n        System.out.print("p2: "); p2.display();\n        System.out.print("p3: "); p3.display();\n    }\n}',
    hint: "Deep copy creates copies of referenced objects too",
  },
  {
    id: "constructor_11",
    topicId: "constructor",
    question: "Copy constructor with complex objects.",
    mathSolution: "Copy all fields including collections",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Course {\n        String name;\n        Course(String n) { name = n; }\n        Course(Course c) { name = c.name; }\n    }\n    static class Student {\n        String name;\n        List<Course> courses;\n        Student(String n, List<Course> c) { name = n; courses = c; }\n        Student(Student s) {\n            this.name = s.name;\n            this.courses = new ArrayList<>();\n            for(Course c : s.courses) this.courses.add(new Course(c));\n        }\n        void display() {\n            System.out.print(name + " takes: ");\n            for(Course c : courses) System.out.print(c.name + " ");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        List<Course> courses = Arrays.asList(new Course("Math"), new Course("Science"));\n        Student s1 = new Student("Alice", courses);\n        Student s2 = new Student(s1);\n        s1.courses.set(0, new Course("Physics"));\n        s1.display();\n        s2.display();\n    }\n}',
    hint: "Collections need deep copying for complete independence",
  },

  // PRIVATE CONSTRUCTORS AND SINGLETON (3)
  {
    id: "constructor_12",
    topicId: "constructor",
    question: "Private constructor for singleton pattern.",
    mathSolution: "Private constructor prevents external instantiation",
    codeSolution: 'public class Main {\n    static class Singleton {\n        private static Singleton instance;\n        public String value;\n        private Singleton() { value = "Initial value"; System.out.println("Singleton created"); }\n        public static Singleton getInstance() {\n            if(instance == null) instance = new Singleton();\n            return instance;\n        }\n    }\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        s1.value = "Changed value";\n        System.out.println(s2.value);\n        System.out.println(s1 == s2);\n    }\n}',
    hint: "Private constructor for controlled instantiation",
  },
  {
    id: "constructor_13",
    topicId: "constructor",
    question: "Singleton with lazy initialization and thread safety.",
    mathSolution: "Thread-safe singleton with double-checked locking",
    codeSolution: 'public class Main {\n    static class ThreadSafeSingleton {\n        private static volatile ThreadSafeSingleton instance;\n        private ThreadSafeSingleton() { System.out.println("Instance created"); }\n        public static ThreadSafeSingleton getInstance() {\n            if(instance == null) {\n                synchronized(ThreadSafeSingleton.class) {\n                    if(instance == null) instance = new ThreadSafeSingleton();\n                }\n            }\n            return instance;\n        }\n    }\n    public static void main(String[] args) {\n        Runnable task = () -> ThreadSafeSingleton.getInstance();\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        Thread t3 = new Thread(task);\n        t1.start(); t2.start(); t3.start();\n        try { t1.join(); t2.join(); t3.join(); } catch(InterruptedException e) {}\n        System.out.println("Only one instance should be created.");\n    }\n}',
    hint: "Double-checked locking prevents multiple instances",
  },
  {
    id: "constructor_14",
    topicId: "constructor",
    question: "Utility class with private constructor.",
    mathSolution: "Private constructor prevents instantiation of utility class",
    codeSolution: 'public class Main {\n    static class MathUtils {\n        private MathUtils() { throw new UnsupportedOperationException("Utility class"); }\n        public static double circleArea(double r) { return Math.PI * r * r; }\n        public static double circleCircumference(double r) { return 2 * Math.PI * r; }\n        public static int factorial(int n) { if(n <= 1) return 1; return n * factorial(n-1); }\n    }\n    public static void main(String[] args) {\n        System.out.println("Area: " + MathUtils.circleArea(5));\n        System.out.println("Circumference: " + MathUtils.circleCircumference(5));\n        System.out.println("Factorial: " + MathUtils.factorial(5));\n    }\n}',
    hint: "Utility classes often have private constructors",
  },

  // CONSTRUCTOR WITH INHERITANCE (3)
  {
    id: "constructor_15",
    topicId: "constructor",
    question: "Constructor execution order in inheritance.",
    mathSolution: "Parent constructor executes before child",
    codeSolution: 'public class Main {\n    static class A { A() { System.out.println("A constructor"); } }\n    static class B extends A { B() { System.out.println("B constructor"); } }\n    static class C extends B { C() { System.out.println("C constructor"); } }\n    public static void main(String[] args) {\n        System.out.println("Creating C object:");\n        C c = new C();\n        System.out.println("\\nCreating B object:");\n        B b = new B();\n        System.out.println("\\nCreating A object:");\n        A a = new A();\n    }\n}',
    hint: "Constructors execute from top to bottom of hierarchy",
  },
  {
    id: "constructor_16",
    topicId: "constructor",
    question: "Passing parameters to parent constructor.",
    mathSolution: "Use super() with parameters",
    codeSolution: 'public class Main {\n    static class Vehicle {\n        String brand; int year;\n        Vehicle(String brand, int year) { this.brand = brand; this.year = year; System.out.println("Vehicle: " + brand + ", " + year); }\n    }\n    static class Car extends Vehicle {\n        String model;\n        Car(String brand, int year, String model) { super(brand, year); this.model = model; System.out.println("Car: " + model); }\n    }\n    static class SportsCar extends Car {\n        boolean turbo;\n        SportsCar(String brand, int year, String model, boolean turbo) { super(brand, year, model); this.turbo = turbo; System.out.println("SportsCar turbo: " + turbo); }\n        void display() { System.out.println(brand + " " + model + " " + year + " Turbo: " + turbo); }\n    }\n    public static void main(String[] args) {\n        SportsCar sc = new SportsCar("Ferrari", 2023, "F8", true);\n        sc.display();\n    }\n}',
    hint: "super() passes parameters up the chain",
  },
  {
    id: "constructor_17",
    topicId: "constructor",
    question: "Calling parent constructor conditionally.",
    mathSolution: "Different super() calls based on conditions",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        Person() { this.name = "Unknown"; System.out.println("Person default"); }\n        Person(String name) { this.name = name; System.out.println("Person param"); }\n    }\n    static class Employee extends Person {\n        int id;\n        Employee() { super(); this.id = 0; System.out.println("Employee default"); }\n        Employee(String name, int id) { super(name); this.id = id; System.out.println("Employee param"); }\n        Employee(int id) { this("Unknown", id); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee("Alice", 101);\n        Employee e3 = new Employee(102);\n    }\n}',
    hint: "Choose which parent constructor to call",
  },

  // EXCEPTIONS IN CONSTRUCTORS (2)
  {
    id: "constructor_18",
    topicId: "constructor",
    question: "Throw exceptions from constructor.",
    mathSolution: "Constructors can throw exceptions",
    codeSolution: 'public class Main {\n    static class Account {\n        String accountNo; double balance;\n        Account(String accountNo, double balance) {\n            if(accountNo == null || accountNo.isEmpty()) throw new IllegalArgumentException("Account number cannot be empty");\n            if(balance < 0) throw new IllegalArgumentException("Initial balance cannot be negative");\n            this.accountNo = accountNo; this.balance = balance;\n            System.out.println("Account created: " + accountNo);\n        }\n        void display() { System.out.println("Account: " + accountNo + ", Balance: $" + balance); }\n    }\n    public static void main(String[] args) {\n        try {\n            Account a1 = new Account("ACC123", 1000);\n            a1.display();\n            Account a2 = new Account("", 500);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n        try {\n            Account a3 = new Account("ACC456", -100);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n    }\n}',
    hint: "Validate parameters and throw exceptions",
  },
  {
    id: "constructor_19",
    topicId: "constructor",
    question: "Handle checked exceptions in constructor.",
    mathSolution: "Constructor can throw checked exceptions",
    codeSolution: 'import java.io.*;\npublic class Main {\n    static class FileProcessor {\n        File file; BufferedReader reader;\n        FileProcessor(String fileName) throws FileNotFoundException {\n            file = new File(fileName);\n            reader = new BufferedReader(new FileReader(file));\n            System.out.println("File opened: " + fileName);\n        }\n        String readLine() throws IOException { return reader.readLine(); }\n        void close() throws IOException { if(reader != null) reader.close(); }\n    }\n    public static void main(String[] args) {\n        try {\n            FileProcessor fp = new FileProcessor("test.txt");\n            String line = fp.readLine();\n            System.out.println("Read: " + line);\n            fp.close();\n        } catch(FileNotFoundException e) { System.out.println("File not found: " + e.getMessage());\n        } catch(IOException e) { System.out.println("IO Error: " + e.getMessage()); }\n    }\n}',
    hint: "Declare exceptions in constructor signature",
  },

  // STATIC AND FINAL IN CONSTRUCTORS (2)
  {
    id: "constructor_20",
    topicId: "constructor",
    question: "Initialize final variables in constructor.",
    mathSolution: "Final variables must be initialized in constructor",
    codeSolution: 'public class Main {\n    static class Employee {\n        final int id; final String name;\n        static int count = 0;\n        Employee(int id, String name) {\n            this.id = id; this.name = name;\n            count++;\n            System.out.println("Employee created. Total: " + count);\n        }\n        void display() { System.out.println("ID: " + id + ", Name: " + name); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee(101, "Alice");\n        Employee e2 = new Employee(102, "Bob");\n        e1.display();\n    }\n}',
    hint: "Final instance variables must be initialized in constructor",
  },
  {
    id: "constructor_21",
    topicId: "constructor",
    question: "Static block vs constructor initialization.",
    mathSolution: "Static blocks run once, constructors run per object",
    codeSolution: 'public class Main {\n    static class Database {\n        static String connection;\n        String table;\n        static {\n            connection = "Connected to DB";\n            System.out.println("Static block: " + connection);\n        }\n        {\n            System.out.println("Instance initializer for: " + table);\n            if(table == null) table = "default_table";\n        }\n        Database(String table) {\n            this.table = table;\n            System.out.println("Constructor: table = " + this.table);\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Creating first object:");\n        Database db1 = new Database("users");\n        System.out.println("\\nCreating second object:");\n        Database db2 = new Database("products");\n    }\n}',
    hint: "Order: static block -> instance init -> constructor",
  },

  // PRACTICAL APPLICATIONS (4)
  {
    id: "constructor_22",
    topicId: "constructor",
    question: "Builder pattern using constructor.",
    mathSolution: "Constructor with Builder pattern for many parameters",
    codeSolution: 'public class Main {\n    static class Computer {\n        private String cpu, ram, storage, gpu;\n        private boolean bluetooth;\n        private Computer(Builder b) { cpu = b.cpu; ram = b.ram; storage = b.storage; gpu = b.gpu; bluetooth = b.bluetooth; }\n        static class Builder {\n            private String cpu, ram, storage, gpu = "Integrated";\n            private boolean bluetooth = false;\n            Builder(String cpu, String ram, String storage) { this.cpu = cpu; this.ram = ram; this.storage = storage; }\n            Builder setGpu(String gpu) { this.gpu = gpu; return this; }\n            Builder setBluetooth(boolean bt) { this.bluetooth = bt; return this; }\n            Computer build() { return new Computer(this); }\n        }\n        void display() {\n            System.out.println("CPU: " + cpu + ", RAM: " + ram + ", Storage: " + storage);\n            System.out.println("GPU: " + gpu + ", Bluetooth: " + bluetooth);\n        }\n    }\n    public static void main(String[] args) {\n        Computer comp1 = new Computer.Builder("i7", "16GB", "512GB").setGpu("NVIDIA RTX").setBluetooth(true).build();\n        Computer comp2 = new Computer.Builder("i5", "8GB", "256GB").build();\n        comp1.display();\n        System.out.println("---");\n        comp2.display();\n    }\n}',
    hint: "Builder pattern handles many optional parameters",
  },
  {
    id: "constructor_23",
    topicId: "constructor",
    question: "Factory method using private constructor.",
    mathSolution: "Private constructor with static factory methods",
    codeSolution: 'public class Main {\n    static class Color {\n        private int r, g, b;\n        private Color(int r, int g, int b) { this.r = r; this.g = g; this.b = b; }\n        static Color fromRGB(int r, int g, int b) { return new Color(r, g, b); }\n        static Color fromHex(String hex) {\n            int r = Integer.parseInt(hex.substring(0,2),16);\n            int g = Integer.parseInt(hex.substring(2,4),16);\n            int b = Integer.parseInt(hex.substring(4,6),16);\n            return new Color(r, g, b);\n        }\n        static Color red() { return new Color(255,0,0); }\n        void display() { System.out.printf("RGB(%d,%d,%d) Hex: #%02X%02X%02X%n", r, g, b, r, g, b); }\n    }\n    public static void main(String[] args) {\n        Color c1 = Color.fromRGB(100,150,200);\n        Color c2 = Color.fromHex("FFAABB");\n        Color c3 = Color.red();\n        c1.display(); c2.display(); c3.display();\n    }\n}',
    hint: "Static factory methods provide meaningful names",
  },
  {
    id: "constructor_24",
    topicId: "constructor",
    question: "Immutable class with constructor.",
    mathSolution: "Constructor initializes all fields, no setters",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static final class ImmutablePerson {\n        private final String name;\n        private final int age;\n        private final List<String> hobbies;\n        ImmutablePerson(String name, int age, List<String> hobbies) {\n            this.name = name; this.age = age;\n            this.hobbies = new ArrayList<>(hobbies);\n        }\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public List<String> getHobbies() { return new ArrayList<>(hobbies); }\n    }\n    public static void main(String[] args) {\n        List<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\n        ImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n        hobbies.add("Swimming");\n        System.out.println(p.getName() + ", " + p.getAge());\n        System.out.println("Hobbies: " + p.getHobbies());\n    }\n}',
    hint: "Defensive copying ensures immutability",
  },
  {
    id: "constructor_25",
    topicId: "constructor",
    question: "Constructor with validation logic.",
    mathSolution: "Validate parameters before initializing",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private String accountNumber, accountHolder;\n        private double balance;\n        private static final double MIN_BALANCE = 500;\n        BankAccount(String accountNumber, String accountHolder, double initialBalance) {\n            if(accountNumber == null || accountNumber.length() < 10) throw new IllegalArgumentException("Invalid account number");\n            if(accountHolder == null || accountHolder.trim().isEmpty()) throw new IllegalArgumentException("Account holder name required");\n            if(initialBalance < MIN_BALANCE) throw new IllegalArgumentException("Minimum balance required: " + MIN_BALANCE);\n            this.accountNumber = accountNumber;\n            this.accountHolder = accountHolder;\n            this.balance = initialBalance;\n            System.out.println("Account created for " + accountHolder);\n        }\n        void display() { System.out.println("Account: " + accountNumber + ", Holder: " + accountHolder + ", Balance: $" + balance); }\n    }\n    public static void main(String[] args) {\n        try {\n            BankAccount a1 = new BankAccount("ACC12345678", "John Doe", 1000);\n            a1.display();\n            BankAccount a2 = new BankAccount("ACC123", "Jane", 100);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n        try {\n            BankAccount a3 = new BankAccount("ACC87654321", "", 1000);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n    }\n}',
    hint: "Validate all inputs in constructor",
  },
   {
    "id": "constructor_26",
    "topicId": "constructor",
    "question": "Create a constructor that accepts a variable number of integers (varargs) and stores them in an array. Print all numbers.",
    "mathSolution": "Varargs constructor allows flexible number of arguments treated as array.",
    "codeSolution": "public class Main {\n    static class NumberHolder {\n        private int[] values;\n        NumberHolder(int... nums) {\n            values = nums;\n            System.out.println(\"Varargs constructor called\");\n        }\n        void display() {\n            System.out.print(\"Numbers: \");\n            for(int n : values) System.out.print(n + \" \");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        NumberHolder h1 = new NumberHolder(1, 2, 3);\n        NumberHolder h2 = new NumberHolder(10, 20, 30, 40, 50);\n        h1.display();\n        h2.display();\n    }\n}",
    "hint": "Varargs are treated as array inside the constructor; call with any number of arguments."
  },
  {
    "id": "constructor_27",
    "topicId": "constructor",
    "question": "Implement a constructor that calculates factorial of a number recursively during object creation and stores the result.",
    "mathSolution": "Constructor can call a recursive method to compute value.",
    "codeSolution": "public class Main {\n    static class Factorial {\n        int value;\n        Factorial(int n) {\n            value = factorial(n);\n            System.out.println(n + \"! = \" + value);\n        }\n        private int factorial(int n) {\n            if(n <= 1) return 1;\n            return n * factorial(n - 1);\n        }\n    }\n    public static void main(String[] args) {\n        new Factorial(5);\n        new Factorial(6);\n    }\n}",
    "hint": "Recursive method can be private and called from constructor."
  },
  {
    "id": "constructor_28",
    "topicId": "constructor",
    "question": "Create a constructor that initializes a StringBuilder with a given string and then appends a suffix. Print the final string.",
    "mathSolution": "Constructor can perform multiple operations on mutable objects.",
    "codeSolution": "public class Main {\n    static class TextBuilder {\n        StringBuilder sb;\n        TextBuilder(String base, String suffix) {\n            sb = new StringBuilder(base);\n            sb.append(suffix);\n            System.out.println(\"Constructed string: \" + sb);\n        }\n    }\n    public static void main(String[] args) {\n        new TextBuilder(\"Hello\", \" World!\");\n        new TextBuilder(\"Java\", \" is fun\");\n    }\n}",
    "hint": "Use StringBuilder for efficient string manipulation in constructor."
  },
  {
    "id": "constructor_29",
    "topicId": "constructor",
    "question": "Create an enum with constants and write a constructor that takes an enum value to initialize a field. Print the description.",
    "mathSolution": "Constructor can accept enum parameters to configure object.",
    "codeSolution": "public class Main {\n    enum Priority { LOW, MEDIUM, HIGH }\n    static class Task {\n        Priority priority;\n        String name;\n        Task(String name, Priority p) {\n            this.name = name;\n            this.priority = p;\n            System.out.println(\"Task '\" + name + \"' has priority \" + priority);\n        }\n    }\n    public static void main(String[] args) {\n        new Task(\"Write code\", Priority.HIGH);\n        new Task(\"Test\", Priority.MEDIUM);\n    }\n}",
    "hint": "Enums can be used to limit valid values in constructor."
  },
  {
    "id": "constructor_30",
    "topicId": "constructor",
    "question": "Implement a constructor that uses java.util.Date to validate that a provided year is in the future. Throw exception if not.",
    "mathSolution": "Constructor can use system classes for validation.",
    "codeSolution": "import java.util.Calendar;\npublic class Main {\n    static class FutureEvent {\n        int year;\n        FutureEvent(int year) {\n            int currentYear = Calendar.getInstance().get(Calendar.YEAR);\n            if(year <= currentYear) {\n                throw new IllegalArgumentException(\"Year must be in the future\");\n            }\n            this.year = year;\n            System.out.println(\"Event scheduled for year \" + year);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new FutureEvent(2025);\n            new FutureEvent(2020);\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use Calendar or LocalDate for date validation in constructor."
  },
  {
    "id": "constructor_31",
    "topicId": "constructor",
    "question": "Write a constructor that creates a defensive copy of a list passed as parameter. Modify the original list after object creation to prove immutability.",
    "mathSolution": "Defensive copying prevents external modification of internal state.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Team {\n        private List<String> members;\n        Team(List<String> members) {\n            this.members = new ArrayList<>(members);\n        }\n        List<String> getMembers() {\n            return new ArrayList<>(members);\n        }\n    }\n    public static void main(String[] args) {\n        List<String> original = new ArrayList<>(Arrays.asList(\"Alice\", \"Bob\"));\n        Team team = new Team(original);\n        original.add(\"Charlie\");\n        System.out.println(\"Original after change: \" + original);\n        System.out.println(\"Team members: \" + team.getMembers());\n    }\n}",
    "hint": "Create a new ArrayList from the passed list in constructor to avoid external changes."
  },
  {
    "id": "constructor_32",
    "topicId": "constructor",
    "question": "Create a constructor that initializes a static counter every time a new object is created. Also print the count inside constructor.",
    "mathSolution": "Static variable can count instances, including those from subclasses.",
    "codeSolution": "public class Main {\n    static class Item {\n        static int counter = 0;\n        int id;\n        Item() {\n            id = ++counter;\n            System.out.println(\"Created item #\" + id);\n        }\n    }\n    static class Product extends Item {\n        Product() { super(); }\n    }\n    public static void main(String[] args) {\n        new Item();\n        new Product();\n        new Item();\n        System.out.println(\"Total items created: \" + Item.counter);\n    }\n}",
    "hint": "Static variable is shared across all instances and subclasses."
  },
  {
    "id": "constructor_33",
    "topicId": "constructor",
    "question": "Design a constructor that accepts a string and converts it to uppercase using String.toUpperCase() before storing. Print stored value.",
    "mathSolution": "Constructor can transform input before assignment.",
    "codeSolution": "public class Main {\n    static class Message {\n        String content;\n        Message(String msg) {\n            this.content = msg.toUpperCase();\n            System.out.println(\"Stored: \" + content);\n        }\n    }\n    public static void main(String[] args) {\n        new Message(\"hello world\");\n        new Message(\"java is fun\");\n    }\n}",
    "hint": "Apply string transformations like toUpperCase() in constructor."
  },
  {
    "id": "constructor_34",
    "topicId": "constructor",
    "question": "Create a constructor that uses a static factory method pattern to return a pre-configured object (like a default configuration).",
    "mathSolution": "Private constructor with public static factory method.",
    "codeSolution": "public class Main {\n    static class Config {\n        String url;\n        int timeout;\n        private Config(String url, int timeout) {\n            this.url = url;\n            this.timeout = timeout;\n        }\n        static Config defaultConfig() {\n            return new Config(\"http://localhost\", 5000);\n        }\n        static Config custom(String url, int timeout) {\n            return new Config(url, timeout);\n        }\n        void display() {\n            System.out.println(\"URL: \" + url + \", Timeout: \" + timeout);\n        }\n    }\n    public static void main(String[] args) {\n        Config def = Config.defaultConfig();\n        Config cust = Config.custom(\"https://api.example.com\", 3000);\n        def.display();\n        cust.display();\n    }\n}",
    "hint": "Factory methods provide meaningful names and can return cached instances."
  },
  {
    "id": "constructor_35",
    "topicId": "constructor",
    "question": "Create a constructor that accepts an array and returns a new array with elements in reverse order (store reversed array).",
    "mathSolution": "Constructor can process array input and produce derived data.",
    "codeSolution": "import java.util.Arrays;\npublic class Main {\n    static class Reverser {\n        int[] reversed;\n        Reverser(int[] original) {\n            reversed = new int[original.length];\n            for(int i = 0; i < original.length; i++) {\n                reversed[i] = original[original.length - 1 - i];\n            }\n        }\n        void display() {\n            System.out.println(\"Reversed: \" + Arrays.toString(reversed));\n        }\n    }\n    public static void main(String[] args) {\n        Reverser r1 = new Reverser(new int[]{1,2,3,4});\n        Reverser r2 = new Reverser(new int[]{10,20,30});\n        r1.display();\n        r2.display();\n    }\n}",
    "hint": "Constructor can compute reversed array during object creation."
  },
  {
    "id": "constructor_36",
    "topicId": "constructor",
    "question": "Implement a constructor that accepts a string and checks if it is a palindrome. Store the result as boolean and print it.",
    "mathSolution": "Constructor can perform business logic and store derived values.",
    "codeSolution": "public class Main {\n    static class PalindromeChecker {\n        boolean isPalindrome;\n        PalindromeChecker(String s) {\n            String clean = s.replaceAll(\"\\\\s+\", \"\").toLowerCase();\n            String reversed = new StringBuilder(clean).reverse().toString();\n            isPalindrome = clean.equals(reversed);\n            System.out.println(\"\\\"\" + s + \"\\\" is palindrome? \" + isPalindrome);\n        }\n    }\n    public static void main(String[] args) {\n        new PalindromeChecker(\"racecar\");\n        new PalindromeChecker(\"hello world\");\n        new PalindromeChecker(\"A man a plan a canal panama\");\n    }\n}",
    "hint": "Use StringBuilder.reverse() to check palindrome in constructor."
  },
  {
    "id": "constructor_37",
    "topicId": "constructor",
    "question": "Create a constructor that uses java.time.LocalDate to parse a date string and store it. Handle parsing exception.",
    "mathSolution": "Constructor can use date/time API to validate and parse input.",
    "codeSolution": "import java.time.LocalDate;\nimport java.time.format.DateTimeParseException;\npublic class Main {\n    static class Event {\n        LocalDate date;\n        Event(String dateStr) {\n            try {\n                this.date = LocalDate.parse(dateStr);\n                System.out.println(\"Date set: \" + date);\n            } catch(DateTimeParseException e) {\n                System.out.println(\"Invalid date format: \" + dateStr);\n                this.date = LocalDate.now();\n            }\n        }\n    }\n    public static void main(String[] args) {\n        new Event(\"2024-12-25\");\n        new Event(\"invalid\");\n    }\n}",
    "hint": "Use LocalDate.parse() with try-catch for robust date initialization."
  },
  {
    "id": "constructor_38",
    "topicId": "constructor",
    "question": "Write a constructor that initializes a 2D array with random integers between 1 and 100. Print the array.",
    "mathSolution": "Constructor can allocate and fill multi-dimensional arrays.",
    "codeSolution": "import java.util.Random;\npublic class Main {\n    static class RandomMatrix {\n        int[][] matrix;\n        RandomMatrix(int rows, int cols) {\n            Random rand = new Random();\n            matrix = new int[rows][cols];\n            for(int i = 0; i < rows; i++) {\n                for(int j = 0; j < cols; j++) {\n                    matrix[i][j] = rand.nextInt(100) + 1;\n                }\n            }\n        }\n        void display() {\n            for(int[] row : matrix) {\n                for(int val : row) System.out.print(val + \" \");\n                System.out.println();\n            }\n        }\n    }\n    public static void main(String[] args) {\n        new RandomMatrix(3, 4).display();\n    }\n}",
    "hint": "Use nested loops to fill array in constructor."
  },
  {
    "id": "constructor_39",
    "topicId": "constructor",
    "question": "Create a constructor that uses a custom checked exception to reject negative radius for a Circle class.",
    "mathSolution": "Constructor can throw custom checked exception to enforce invariants.",
    "codeSolution": "public class Main {\n    static class NegativeRadiusException extends Exception {\n        NegativeRadiusException(String msg) { super(msg); }\n    }\n    static class Circle {\n        double radius;\n        Circle(double r) throws NegativeRadiusException {\n            if(r < 0) throw new NegativeRadiusException(\"Radius cannot be negative: \" + r);\n            this.radius = r;\n            System.out.println(\"Circle created with radius \" + r);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new Circle(5);\n            new Circle(-2);\n        } catch(NegativeRadiusException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Declare throws in constructor signature and use custom exception class."
  },
  {
    "id": "constructor_40",
    "topicId": "constructor",
    "question": "Construct a class that takes a string and ensures it is not null or empty using Objects.requireNonNull and a custom message.",
    "mathSolution": "Use Objects.requireNonNull for concise validation.",
    "codeSolution": "import java.util.Objects;\npublic class Main {\n    static class User {\n        String name;\n        User(String name) {\n            this.name = Objects.requireNonNull(name, \"Name cannot be null\");\n            if(this.name.trim().isEmpty()) {\n                throw new IllegalArgumentException(\"Name cannot be empty\");\n            }\n            System.out.println(\"User created: \" + this.name);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new User(\"Alice\");\n            new User(null);\n        } catch(Exception e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n        try {\n            new User(\"\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Objects.requireNonNull throws NullPointerException with custom message."
  }
);