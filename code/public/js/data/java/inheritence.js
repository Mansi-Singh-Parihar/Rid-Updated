QuizData.questions.push(
  // BASIC INHERITANCE (4)
  {
    id: "inheritance_1",
    topicId: "inheritance",
    question: "Create a simple inheritance hierarchy with Animal and Dog classes.",
    mathSolution: "Child class extends parent class",
    codeSolution: 'public class Main {\n    static class Animal {\n        void eat() { System.out.println("Animal is eating"); }\n    }\n    static class Dog extends Animal {\n        void bark() { System.out.println("Dog is barking"); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.bark();\n    }\n}',
    hint: "Use extends keyword",
  },
  {
    id: "inheritance_2",
    topicId: "inheritance",
    question: "Demonstrate multi-level inheritance.",
    mathSolution: "Grandparent -> Parent -> Child",
    codeSolution: 'public class Main {\n    static class Vehicle {\n        void move() { System.out.println("Vehicle moves"); }\n    }\n    static class Car extends Vehicle {\n        void wheels() { System.out.println("Car has 4 wheels"); }\n    }\n    static class SportsCar extends Car {\n        void turbo() { System.out.println("SportsCar has turbo"); }\n    }\n    public static void main(String[] args) {\n        SportsCar sc = new SportsCar();\n        sc.move();\n        sc.wheels();\n        sc.turbo();\n    }\n}',
    hint: "Chain of inheritance",
  },
  {
    id: "inheritance_3",
    topicId: "inheritance",
    question: "Access parent class fields in child class.",
    mathSolution: "Child inherits non-private fields",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        int age;\n        Person(String n, int a) { name = n; age = a; }\n    }\n    static class Student extends Person {\n        int rollNo;\n        Student(String n, int a, int r) { super(n, a); rollNo = r; }\n        void display() { System.out.println("Name: " + name + ", Age: " + age + ", Roll: " + rollNo); }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Alice", 20, 101);\n        s.display();\n    }\n}',
    hint: "super() calls parent constructor",
  },
  {
    id: "inheritance_4",
    topicId: "inheritance",
    question: "Use protected members for inheritance access.",
    mathSolution: "protected members accessible in child classes",
    codeSolution: 'public class Main {\n    static class Parent {\n        private int privateVar = 10;\n        protected int protectedVar = 20;\n        public int publicVar = 30;\n        int defaultVar = 40;\n    }\n    static class Child extends Parent {\n        void display() {\n            // System.out.println(privateVar); // ERROR\n            System.out.println("Protected: " + protectedVar);\n            System.out.println("Public: " + publicVar);\n            System.out.println("Default: " + defaultVar);\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}',
    hint: "protected is between private and public",
  },

  // METHOD OVERRIDING (4)
  {
    id: "inheritance_5",
    topicId: "inheritance",
    question: "Override a method in child class.",
    mathSolution: "Child provides specific implementation",
    codeSolution: 'public class Main {\n    static class Shape {\n        void draw() { System.out.println("Drawing shape"); }\n    }\n    static class Circle extends Shape {\n        @Override\n        void draw() { System.out.println("Drawing circle"); }\n    }\n    static class Rectangle extends Shape {\n        @Override\n        void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Shape s1 = new Circle();\n        Shape s2 = new Rectangle();\n        s1.draw();\n        s2.draw();\n    }\n}',
    hint: "@Override annotation recommended",
  },
  {
    id: "inheritance_6",
    topicId: "inheritance",
    question: "Call parent class overridden method using super.",
    mathSolution: "super.method() calls parent version",
    codeSolution: 'public class Main {\n    static class Parent {\n        void display() { System.out.println("Parent display"); }\n    }\n    static class Child extends Parent {\n        @Override\n        void display() {\n            super.display();\n            System.out.println("Child display");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}',
    hint: "super to access parent's method",
  },
  {
    id: "inheritance_7",
    topicId: "inheritance",
    question: "Rules of method overriding - return types.",
    mathSolution: "Covariant return types allowed",
    codeSolution: 'public class Main {\n    static class Parent {\n        Object getValue() { return "Parent value"; }\n    }\n    static class Child extends Parent {\n        @Override\n        String getValue() { return "Child value"; }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        System.out.println(c.getValue());\n    }\n}',
    hint: "Can return subtype of parent's return type",
  },
  {
    id: "inheritance_8",
    topicId: "inheritance",
    question: "Cannot override static methods - method hiding.",
    mathSolution: "Static methods are hidden, not overridden",
    codeSolution: 'public class Main {\n    static class Parent {\n        static void staticMethod() { System.out.println("Parent static"); }\n        void instanceMethod() { System.out.println("Parent instance"); }\n    }\n    static class Child extends Parent {\n        static void staticMethod() { System.out.println("Child static"); }\n        @Override\n        void instanceMethod() { System.out.println("Child instance"); }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.staticMethod();   // Parent static (resolved at compile time)\n        p.instanceMethod(); // Child instance (runtime polymorphic)\n    }\n}',
    hint: "Static methods are resolved at compile-time",
  },

  // CONSTRUCTORS IN INHERITANCE (3)
  {
    id: "inheritance_9",
    topicId: "inheritance",
    question: "Constructor chaining in inheritance.",
    mathSolution: "Parent constructor called before child",
    codeSolution: 'public class Main {\n    static class A { A() { System.out.println("A constructor"); } }\n    static class B extends A { B() { System.out.println("B constructor"); } }\n    static class C extends B { C() { System.out.println("C constructor"); } }\n    public static void main(String[] args) {\n        C c = new C();\n    }\n}',
    hint: "Constructors execute from top to bottom",
  },
  {
    id: "inheritance_10",
    topicId: "inheritance",
    question: "Call parameterized parent constructor using super().",
    mathSolution: "super() must be first statement",
    codeSolution: 'public class Main {\n    static class Employee {\n        String name; double salary;\n        Employee(String n, double s) { name = n; salary = s; System.out.println("Employee constructor"); }\n    }\n    static class Manager extends Employee {\n        double bonus;\n        Manager(String n, double s, double b) { super(n, s); bonus = b; System.out.println("Manager constructor"); }\n        void display() { System.out.println(name + ", Salary: $" + salary + ", Bonus: $" + bonus); }\n    }\n    public static void main(String[] args) {\n        Manager m = new Manager("John", 50000, 5000);\n        m.display();\n    }\n}',
    hint: "super() with parameters",
  },
  {
    id: "inheritance_11",
    topicId: "inheritance",
    question: "Implicit super() call if no parent constructor defined.",
    mathSolution: "Default constructor inserted automatically",
    codeSolution: 'public class Main {\n    static class Parent {}\n    static class Child extends Parent {\n        Child() { System.out.println("Child constructor"); }\n    }\n    static class Parent2 {\n        Parent2(int x) { System.out.println("Parent2 param: " + x); }\n    }\n    static class Child2 extends Parent2 {\n        Child2() { super(10); System.out.println("Child2 constructor"); }\n    }\n    public static void main(String[] args) {\n        System.out.println("--- Default ---");\n        Child c = new Child();\n        System.out.println("--- Parameterized parent ---");\n        Child2 c2 = new Child2();\n    }\n}',
    hint: "If parent has no default constructor, must call super explicitly",
  },

  // POLYMORPHISM (3)
  {
    id: "inheritance_12",
    topicId: "inheritance",
    question: "Runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution: 'public class Main {\n    static class Animal {\n        void sound() { System.out.println("Animal makes sound"); }\n    }\n    static class Cat extends Animal {\n        void sound() { System.out.println("Cat meows"); }\n    }\n    static class Dog extends Animal {\n        void sound() { System.out.println("Dog barks"); }\n    }\n    public static void main(String[] args) {\n        Animal a1 = new Cat();\n        Animal a2 = new Dog();\n        a1.sound();\n        a2.sound();\n        Animal[] animals = {new Cat(), new Dog(), new Animal()};\n        for(Animal a : animals) a.sound();\n    }\n}',
    hint: "Actual method called based on object type at runtime",
  },
  {
    id: "inheritance_13",
    topicId: "inheritance",
    question: "Use instanceof to check object type.",
    mathSolution: "instanceof operator for type checking",
    codeSolution: 'public class Main {\n    static class Vehicle {}\n    static class Car extends Vehicle {}\n    static class Bike extends Vehicle {}\n    public static void main(String[] args) {\n        Vehicle v1 = new Car();\n        Vehicle v2 = new Bike();\n        System.out.println("v1 instanceof Car: " + (v1 instanceof Car));\n        System.out.println("v1 instanceof Bike: " + (v1 instanceof Bike));\n        System.out.println("v1 instanceof Vehicle: " + (v1 instanceof Vehicle));\n        if(v1 instanceof Car) {\n            Car c = (Car) v1;\n            System.out.println("Casted to Car");\n        }\n    }\n}',
    hint: "Always check before downcasting",
  },
  {
    id: "inheritance_14",
    topicId: "inheritance",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution: 'public class Main {\n    static class Media {\n        void play() { System.out.println("Playing media"); }\n    }\n    static class Song extends Media {\n        void play() { System.out.println("Playing song"); }\n    }\n    static class Video extends Media {\n        void play() { System.out.println("Playing video"); }\n    }\n    static class Player {\n        void playMedia(Media m) { m.play(); }\n    }\n    public static void main(String[] args) {\n        Player p = new Player();\n        p.playMedia(new Song());\n        p.playMedia(new Video());\n        p.playMedia(new Media());\n    }\n}',
    hint: "Method works with any Media subclass",
  },

  // ABSTRACT CLASSES (3)
  {
    id: "inheritance_15",
    topicId: "inheritance",
    question: "Create abstract class with abstract methods.",
    mathSolution: "Abstract classes cannot be instantiated",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract double area();\n        void display() { System.out.println("Area: " + area()); }\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        double area() { return Math.PI * radius * radius; }\n    }\n    static class Rectangle extends Shape {\n        double l, w;\n        Rectangle(double len, double wid) { l = len; w = wid; }\n        double area() { return l * w; }\n    }\n    public static void main(String[] args) {\n        Shape c = new Circle(5);\n        Shape r = new Rectangle(4, 6);\n        c.display();\n        r.display();\n    }\n}',
    hint: "Abstract methods must be implemented by concrete subclasses",
  },
  {
    id: "inheritance_16",
    topicId: "inheritance",
    question: "Abstract class with constructor.",
    mathSolution: "Abstract classes can have constructors",
    codeSolution: 'public class Main {\n    static abstract class Database {\n        String connection;\n        Database(String conn) { connection = conn; System.out.println("Connecting to " + connection); }\n        abstract void query(String sql);\n    }\n    static class MySQL extends Database {\n        MySQL(String conn) { super(conn); }\n        void query(String sql) { System.out.println("MySQL executing: " + sql); }\n    }\n    static class PostgreSQL extends Database {\n        PostgreSQL(String conn) { super(conn); }\n        void query(String sql) { System.out.println("PostgreSQL executing: " + sql); }\n    }\n    public static void main(String[] args) {\n        MySQL db1 = new MySQL("localhost:3306/mydb");\n        db1.query("SELECT * FROM users");\n    }\n}',
    hint: "Abstract class constructors called via super()",
  },
  {
    id: "inheritance_17",
    topicId: "inheritance",
    question: "Abstract class can have concrete methods.",
    mathSolution: "Abstract classes can provide default implementations",
    codeSolution: 'import java.util.Date;\npublic class Main {\n    static abstract class Logger {\n        abstract void log(String message);\n        void logWithTimestamp(String message) {\n            String timestamp = new Date().toString();\n            log("[" + timestamp + "] " + message);\n        }\n        void logError(String error) { log("ERROR: " + error); }\n    }\n    static class ConsoleLogger extends Logger {\n        void log(String message) { System.out.println("Console: " + message); }\n    }\n    public static void main(String[] args) {\n        ConsoleLogger logger = new ConsoleLogger();\n        logger.logWithTimestamp("Application started");\n        logger.logError("Null pointer exception");\n    }\n}',
    hint: "Abstract classes can provide partial implementation",
  },

  // FINAL KEYWORD IN INHERITANCE (2)
  {
    id: "inheritance_18",
    topicId: "inheritance",
    question: "Prevent inheritance using final class.",
    mathSolution: "final classes cannot be extended",
    codeSolution: 'public class Main {\n    static final class MathConstants {\n        static final double PI = 3.14159;\n    }\n    static class Calculator {\n        double circleArea(double r) { return MathConstants.PI * r * r; }\n    }\n    public static void main(String[] args) {\n        System.out.println("PI: " + MathConstants.PI);\n        Calculator calc = new Calculator();\n        System.out.println("Area: " + calc.circleArea(5));\n    }\n}',
    hint: "final class for security/immutability",
  },
  {
    id: "inheritance_19",
    topicId: "inheritance",
    question: "Prevent method overriding using final method.",
    mathSolution: "final methods cannot be overridden",
    codeSolution: 'public class Main {\n    static class Parent {\n        final void show() { System.out.println("This is final method"); }\n        void normal() { System.out.println("Normal method"); }\n    }\n    static class Child extends Parent {\n        // void show() {} // would cause error\n        void normal() { System.out.println("Overridden normal method"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.show();\n        c.normal();\n    }\n}',
    hint: "final methods for critical implementations",
  },

  // OBJECT CLASS METHODS (2)
  {
    id: "inheritance_20",
    topicId: "inheritance",
    question: "Override toString() method inherited from Object.",
    mathSolution: "toString() provides string representation",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        @Override\n        public String toString() { return "Person[name=" + name + ", age=" + age + "]"; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25);\n        System.out.println(p);\n    }\n}',
    hint: "All classes inherit from Object",
  },
  {
    id: "inheritance_21",
    topicId: "inheritance",
    question: "Override equals() and hashCode() methods.",
    mathSolution: "Proper implementation for object equality",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student {\n        int id; String name;\n        Student(int i, String n) { id = i; name = n; }\n        @Override\n        public boolean equals(Object obj) {\n            if(this == obj) return true;\n            if(obj == null || getClass() != obj.getClass()) return false;\n            Student s = (Student) obj;\n            return id == s.id && Objects.equals(name, s.name);\n        }\n        @Override\n        public int hashCode() { return Objects.hash(id, name); }\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student(101, "Alice");\n        Student s2 = new Student(101, "Alice");\n        Student s3 = new Student(102, "Bob");\n        System.out.println("s1.equals(s2): " + s1.equals(s2));\n        System.out.println("s1.equals(s3): " + s1.equals(s3));\n        Set<Student> set = new HashSet<>();\n        set.add(s1);\n        set.add(s2);\n        System.out.println("Set size: " + set.size());\n    }\n}',
    hint: "equals and hashCode must be consistent",
  },

  // INTERFACE VS ABSTRACT CLASS (3)
  {
    id: "inheritance_22",
    topicId: "inheritance",
    question: "Implement multiple interfaces.",
    mathSolution: "Java supports multiple interface inheritance",
    codeSolution: 'public class Main {\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    static class Duck implements Flyable, Swimmable {\n        public void fly() { System.out.println("Duck flying"); }\n        public void swim() { System.out.println("Duck swimming"); }\n    }\n    static class Plane implements Flyable {\n        public void fly() { System.out.println("Plane flying"); }\n    }\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.fly();\n        d.swim();\n        Plane p = new Plane();\n        p.fly();\n    }\n}',
    hint: "A class can implement multiple interfaces",
  },
  {
    id: "inheritance_23",
    topicId: "inheritance",
    question: "Default methods in interfaces.",
    mathSolution: "Interfaces can have default implementations",
    codeSolution: 'public class Main {\n    interface Vehicle {\n        void start();\n        default void honk() { System.out.println("Beep beep!"); }\n        static void service() { System.out.println("Vehicle service"); }\n    }\n    static class Car implements Vehicle {\n        public void start() { System.out.println("Car starting"); }\n    }\n    static class Bike implements Vehicle {\n        public void start() { System.out.println("Bike starting"); }\n        public void honk() { System.out.println("Bike horn: Tring tring!"); }\n    }\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.start();\n        c.honk();\n        Bike b = new Bike();\n        b.start();\n        b.honk();\n        Vehicle.service();\n    }\n}',
    hint: "default methods add functionality without breaking existing code",
  },
  {
    id: "inheritance_24",
    topicId: "inheritance",
    question: "Diamond problem with multiple inheritance of interfaces.",
    mathSolution: "Java resolves with explicit override",
    codeSolution: 'public class Main {\n    interface A { default void show() { System.out.println("A show"); } }\n    interface B { default void show() { System.out.println("B show"); } }\n    static class C implements A, B {\n        public void show() {\n            A.super.show();\n            B.super.show();\n            System.out.println("C show");\n        }\n    }\n    public static void main(String[] args) {\n        C c = new C();\n        c.show();\n    }\n}',
    hint: "Use super to call specific interface default method",
  },

  // COMPOSITION VS INHERITANCE (1)
  {
    id: "inheritance_25",
    topicId: "inheritance",
    question: "Prefer composition over inheritance.",
    mathSolution: "Has-a relationship vs Is-a relationship",
    codeSolution: 'public class Main {\n    static class Engine {\n        void start() { System.out.println("Engine started"); }\n        void stop() { System.out.println("Engine stopped"); }\n    }\n    static class Car { // Composition: Car has Engine\n        private Engine engine;\n        private String model;\n        Car(String m) { model = m; engine = new Engine(); }\n        void startCar() { System.out.print(model + ": "); engine.start(); }\n        void stopCar() { System.out.print(model + ": "); engine.stop(); }\n        void drive() { System.out.println(model + " driving"); }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car("Tesla");\n        myCar.startCar();\n        myCar.drive();\n        myCar.stopCar();\n    }\n}',
    hint: "Favor composition over inheritance for flexibility",
  },
  {
    "id": "inheritance_26",
    "topicId": "inheritance",
    "question": "Demonstrate field hiding (shadowing) in inheritance. Create a parent class with a variable `value` and a child class that also declares `value`. Show that the child's variable hides the parent's, and access the parent's variable using `super`.",
    "mathSolution": "Fields are resolved at compile-time based on reference type; child's field hides parent's.",
    "codeSolution": "public class Main {\n    static class Parent {\n        int value = 10;\n    }\n    static class Child extends Parent {\n        int value = 20;\n        void display() {\n            System.out.println(\"Child value: \" + value);\n            System.out.println(\"Parent value: \" + super.value);\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}",
    "hint": "Use `super.field` to access hidden parent field."
  },
  {
    "id": "inheritance_27",
    "topicId": "inheritance",
    "question": "Create a subclass that overloads the constructor with different parameters, calling different super constructors using `super()` based on the arguments.",
    "mathSolution": "Subclass constructors can choose which parent constructor to invoke.",
    "codeSolution": "public class Main {\n    static class Employee {\n        String name;\n        int id;\n        Employee() { this(\"Unknown\", 0); }\n        Employee(String name) { this(name, 0); }\n        Employee(String name, int id) { this.name = name; this.id = id; }\n    }\n    static class Manager extends Employee {\n        String department;\n        Manager() { super(); department = \"General\"; }\n        Manager(String name) { super(name); department = \"General\"; }\n        Manager(String name, int id, String dept) { super(name, id); department = dept; }\n        void display() { System.out.println(name + \" (ID:\" + id + \") - \" + department); }\n    }\n    public static void main(String[] args) {\n        new Manager().display();\n        new Manager(\"Alice\").display();\n        new Manager(\"Bob\", 101, \"IT\").display();\n    }\n}",
    "hint": "Overload subclass constructors to call different parent constructors."
  },
  {
    "id": "inheritance_28",
    "topicId": "inheritance",
    "question": "Override a method in child class that throws a more specific checked exception than the parent (allowed). Also show that overriding cannot throw a broader checked exception.",
    "mathSolution": "Child method can throw subclass of parent's exception or none, but not a broader exception.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static class Parent {\n        void readFile() throws IOException {\n            System.out.println(\"Parent reading\");\n        }\n    }\n    static class Child extends Parent {\n        @Override\n        void readFile() throws FileNotFoundException {\n            System.out.println(\"Child reading (narrower exception)\");\n        }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        try {\n            p.readFile();\n        } catch(IOException e) {}\n    }\n}",
    "hint": "Overriding method can throw a subclass of the parent's exception (covariant exceptions)."
  },
  {
    "id": "inheritance_29",
    "topicId": "inheritance",
    "question": "Use `super` to call a parent method that has been overridden, but also access a hidden parent field from within a method.",
    "mathSolution": "`super` can access both methods and fields that are hidden/overridden.",
    "codeSolution": "public class Main {\n    static class Parent {\n        String msg = \"Parent message\";\n        void show() { System.out.println(\"Parent show\"); }\n    }\n    static class Child extends Parent {\n        String msg = \"Child message\";\n        void show() {\n            super.show();\n            System.out.println(\"Child show\");\n            System.out.println(\"Parent msg: \" + super.msg);\n        }\n    }\n    public static void main(String[] args) {\n        new Child().show();\n    }\n}",
    "hint": "Use `super.method()` and `super.field` to access parent's members."
  },
  {
    "id": "inheritance_30",
    "topicId": "inheritance",
    "question": "Define a static nested class inside a parent class and extend it in a child class's static nested class. Demonstrate inheritance of static nested classes.",
    "mathSolution": "Static nested classes can extend each other within the inheritance hierarchy.",
    "codeSolution": "public class Main {\n    static class OuterParent {\n        static class Nested {\n            void display() { System.out.println(\"Parent nested\"); }\n        }\n    }\n    static class OuterChild extends OuterParent {\n        static class Nested extends OuterParent.Nested {\n            void display() {\n                super.display();\n                System.out.println(\"Child nested\");\n            }\n        }\n    }\n    public static void main(String[] args) {\n        OuterChild.Nested nested = new OuterChild.Nested();\n        nested.display();\n    }\n}",
    "hint": "Static nested classes are independent but can be extended across inheritance."
  },
  {
    "id": "inheritance_31",
    "topicId": "inheritance",
    "question": "Observe the order of execution of instance initializer blocks and constructors in a multi-level inheritance hierarchy.",
    "mathSolution": "Instance initializers run after superclass constructor but before the current class constructor body.",
    "codeSolution": "public class Main {\n    static class A {\n        { System.out.println(\"A instance init\"); }\n        A() { System.out.println(\"A constructor\"); }\n    }\n    static class B extends A {\n        { System.out.println(\"B instance init\"); }\n        B() { System.out.println(\"B constructor\"); }\n    }\n    static class C extends B {\n        { System.out.println(\"C instance init\"); }\n        C() { System.out.println(\"C constructor\"); }\n    }\n    public static void main(String[] args) {\n        new C();\n    }\n}",
    "hint": "Order: superclass constructor → instance init → constructor body for each level."
  },
  {
    "id": "inheritance_32",
    "topicId": "inheritance",
    "question": "Demonstrate safe downcasting using instanceof and then cast to call child-specific methods.",
    "mathSolution": "Always check type with instanceof before downcasting to avoid ClassCastException.",
    "codeSolution": "public class Main {\n    static class Animal { void sound() { System.out.println(\"Animal sound\"); } }\n    static class Dog extends Animal { void bark() { System.out.println(\"Dog barking\"); } }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        }\n        a = new Animal();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        } else {\n            System.out.println(\"Not a Dog\");\n        }\n    }\n}",
    "hint": "Check with instanceof before casting."
  },
  {
    "id": "inheritance_33",
    "topicId": "inheritance",
    "question": "Override a protected method in a child class and change its access modifier to public (allowed, since it's broader).",
    "mathSolution": "Overriding method can increase accessibility (protected → public) but cannot reduce it.",
    "codeSolution": "public class Main {\n    static class Parent {\n        protected void display() { System.out.println(\"Parent display\"); }\n    }\n    static class Child extends Parent {\n        @Override\n        public void display() { System.out.println(\"Child display\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n        Parent p = new Child();\n        p.display();\n    }\n}",
    "hint": "Overriding method can have a less restrictive access modifier."
  },
  {
    "id": "inheritance_34",
    "topicId": "inheritance",
    "question": "Call a child's overridden method from the parent constructor. Show the pitfall (method called before child is fully constructed).",
    "mathSolution": "Overridden methods called from parent constructor use child's implementation even though child's fields may not be initialized.",
    "codeSolution": "public class Main {\n    static class Parent {\n        Parent() { display(); }\n        void display() { System.out.println(\"Parent display\"); }\n    }\n    static class Child extends Parent {\n        private String value = \"Child value\";\n        Child() { System.out.println(\"Child constructor\"); }\n        @Override\n        void display() { System.out.println(\"Child display: \" + value); }\n    }\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
    "hint": "Avoid calling overridden methods in constructor; they may run before child's fields are initialized."
  },
  {
    "id": "inheritance_35",
    "topicId": "inheritance",
    "question": "Create an abstract class that extends another abstract class. Implement only some abstract methods, leaving others for further subclasses.",
    "mathSolution": "Abstract classes can inherit from abstract classes and optionally implement methods.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        abstract void stop();\n    }\n    static abstract class Car extends Vehicle {\n        void start() { System.out.println(\"Car starting\"); }\n    }\n    static class ElectricCar extends Car {\n        void stop() { System.out.println(\"Electric car stopping\"); }\n    }\n    public static void main(String[] args) {\n        ElectricCar ec = new ElectricCar();\n        ec.start();\n        ec.stop();\n    }\n}",
    "hint": "An abstract class can partially implement an abstract parent."
  },
   {
    "id": "inheritance_36",
    "topicId": "inheritance",
    "question": "Create an interface with a default method that calls an abstract method. Implement the interface and provide the abstract method.",
    "mathSolution": "Default methods can invoke abstract methods to define a template.",
    "codeSolution": "public class Main {\n    interface Formatter {\n        String format(String s);\n        default void printFormatted(String s) {\n            System.out.println(\"Formatted: \" + format(s));\n        }\n    }\n    static class UpperCaseFormatter implements Formatter {\n        public String format(String s) { return s.toUpperCase(); }\n    }\n    public static void main(String[] args) {\n        UpperCaseFormatter uf = new UpperCaseFormatter();\n        uf.printFormatted(\"hello\");\n    }\n}",
    "hint": "Default methods can use abstract methods as building blocks."
  },
  {
    "id": "inheritance_37",
    "topicId": "inheritance",
    "question": "Inherit a final variable from a parent class. Show that it can be accessed but not modified by the child.",
    "mathSolution": "Final variables are immutable and accessible to subclasses.",
    "codeSolution": "public class Main {\n    static class Parent {\n        final int VALUE = 100;\n    }\n    static class Child extends Parent {\n        void display() { System.out.println(\"Final VALUE: \" + VALUE); }\n    }\n    public static void main(String[] args) {\n        new Child().display();\n    }\n}",
    "hint": "Final fields are inherited but cannot be reassigned."
  },
  {
    "id": "inheritance_38",
    "topicId": "inheritance",
    "question": "Override a method that is declared as synchronized in the parent. The child's override may or may not be synchronized.",
    "mathSolution": "synchronized is not part of the method signature; it can be added or removed in overrides.",
    "codeSolution": "public class Main {\n    static class Parent {\n        synchronized void syncMethod() {\n            System.out.println(\"Parent synchronized method\");\n        }\n    }\n    static class Child extends Parent {\n        void syncMethod() { // not synchronized\n            System.out.println(\"Child non-synchronized override\");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.syncMethod();\n    }\n}",
    "hint": "synchronized modifier is not required to match in overrides."
  },
  {
    "id": "inheritance_39",
    "topicId": "inheritance",
    "question": "Create a generic parent class (Box<T>) and extend it with a concrete type (StringBox). Show usage of type parameter inheritance.",
    "mathSolution": "Subclass can specify the generic type parameter of the parent.",
    "codeSolution": "public class Main {\n    static class Box<T> {\n        T item;\n        void set(T item) { this.item = item; }\n        T get() { return item; }\n    }\n    static class StringBox extends Box<String> {\n        void print() { System.out.println(\"StringBox: \" + get()); }\n    }\n    public static void main(String[] args) {\n        StringBox sb = new StringBox();\n        sb.set(\"Hello Generics\");\n        sb.print();\n    }\n}",
    "hint": "Subclass can bind parent's type parameter to a concrete type."
  },
  {
    "id": "inheritance_40",
    "topicId": "inheritance",
    "question": "Create an anonymous class that extends an abstract class with a single abstract method and instantiate it.",
    "mathSolution": "Anonymous class provides inline implementation.",
    "codeSolution": "public class Main {\n    static abstract class Greeting {\n        abstract void sayHello();\n    }\n    public static void main(String[] args) {\n        Greeting g = new Greeting() {\n            void sayHello() { System.out.println(\"Hello from anonymous class!\"); }\n        };\n        g.sayHello();\n    }\n}",
    "hint": "Anonymous classes are a concise way to subclass on the fly."
  }
);