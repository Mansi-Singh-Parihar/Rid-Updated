QuizData.questions.push(
  {
    id: "java_opp_1",
    topicId: "java_oop",
    question: "What is a class in Java?",
    mathSolution: "Class is a blueprint for creating objects",
    codeSolution: 'public class Main {\n    static class Car {\n        String color;\n        void drive() {\n            System.out.println("Driving...");\n        }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = "Red";\n        System.out.println("Car color: " + myCar.color);\n        myCar.drive();\n    }\n}',
    hint: "Class defines properties and behaviors"
  },
  {
    id: "java_opp_2",
    topicId: "java_oop",
    question: "What is an object in Java?",
    mathSolution: "Object is an instance of a class",
    codeSolution: 'public class Main {\n    static class Car {\n        String color;\n        void drive() { System.out.println("Driving..."); }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = "Red";\n        myCar.drive();\n        System.out.println("Object created successfully");\n    }\n}',
    hint: "Use new keyword to create object"
  },
  {
    id: "java_opp_3",
    topicId: "java_oop",
    question: "How do you create a constructor?",
    mathSolution: "Constructor initializes object state",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        Student(String n) {\n            name = n;\n            System.out.println("Constructor called. Name: " + name);\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Alice");\n    }\n}',
    hint: "Constructor has same name as class"
  },
  {
    id: "java_opp_4",
    topicId: "java_oop",
    question: "What is method overloading?",
    mathSolution: "Multiple methods with same name but different parameters",
    codeSolution: 'public class Main {\n    static class Calculator {\n        int add(int a, int b) { return a + b; }\n        int add(int a, int b, int c) { return a + b + c; }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println("add(2,3) = " + calc.add(2,3));\n        System.out.println("add(2,3,4) = " + calc.add(2,3,4));\n    }\n}',
    hint: "Same method name, different parameters"
  },
  {
    id: "java_opp_5",
    topicId: "java_oop",
    question: "What is inheritance in Java?",
    mathSolution: "Child class acquires properties of parent class",
    codeSolution: 'public class Main {\n    static class Animal {\n        void eat() { System.out.println("Eating..."); }\n    }\n    static class Dog extends Animal {\n        void bark() { System.out.println("Barking..."); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.bark();\n    }\n}',
    hint: "Use extends keyword"
  },
  {
    id: "java_opp_6",
    topicId: "java_oop",
    question: "How do you use super keyword?",
    mathSolution: "Super refers to parent class",
    codeSolution: 'public class Main {\n    static class Parent {\n        Parent() { System.out.println("Parent constructor"); }\n    }\n    static class Child extends Parent {\n        Child() {\n            super();\n            System.out.println("Child constructor");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n    }\n}',
    hint: "super() calls parent constructor"
  },
  {
    id: "java_opp_7",
    topicId: "java_oop",
    question: "What is method overriding?",
    mathSolution: "Child class redefines parent class method",
    codeSolution: 'public class Main {\n    static class Animal {\n        void sound() { System.out.println("Animal sound"); }\n    }\n    static class Cat extends Animal {\n        @Override\n        void sound() { System.out.println("Meow"); }\n    }\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}',
    hint: "Same method signature in child class"
  },
  {
    id: "java_opp_8",
    topicId: "java_oop",
    question: "What is encapsulation?",
    mathSolution: "Hiding data and providing public methods",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private double balance;\n        public void deposit(double amount) { balance += amount; }\n        public double getBalance() { return balance; }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(1000);\n        System.out.println("Balance: " + acc.getBalance());\n    }\n}',
    hint: "Use private variables, public methods"
  },
  {
    id: "java_opp_9",
    topicId: "java_oop",
    question: "How do you create a getter and setter?",
    mathSolution: "Methods to access and modify private fields",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        public String getName() { return name; }\n        public void setName(String n) { name = n; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setName("John");\n        System.out.println("Name: " + p.getName());\n    }\n}',
    hint: "Getter returns, setter sets value"
  },
  {
    id: "java_opp_10",
    topicId: "java_oop",
    question: "What is abstraction in Java?",
    mathSolution: "Hiding implementation details",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract void draw();\n    }\n    static class Circle extends Shape {\n        void draw() { System.out.println("Drawing circle"); }\n    }\n    public static void main(String[] args) {\n        Shape s = new Circle();\n        s.draw();\n    }\n}',
    hint: "Use abstract classes or interfaces"
  },
  {
    id: "java_opp_11",
    topicId: "java_oop",
    question: "What is an interface?",
    mathSolution: "Contract that classes must implement",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n    }\n    static class Rectangle implements Drawable {\n        public void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d = new Rectangle();\n        d.draw();\n    }\n}',
    hint: "Use implements keyword"
  },
  {
    id: "java_opp_12",
    topicId: "java_oop",
    question: "What is polymorphism?",
    mathSolution: "Same method behaves differently for different objects",
    codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal sound"); } }\n    static class Dog extends Animal { void sound() { System.out.println("Bark"); } }\n    static class Cat extends Animal { void sound() { System.out.println("Meow"); } }\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n    }\n}',
    hint: "Many forms - compile time and runtime"
  },
  {
    id: "java_opp_13",
    topicId: "java_oop",
    question: "What is this keyword?",
    mathSolution: "Refers to current object instance",
    codeSolution: 'public class Main {\n    static class Employee {\n        String name;\n        Employee(String name) { this.name = name; }\n        void print() { System.out.println("Name: " + this.name); }\n    }\n    public static void main(String[] args) {\n        Employee e = new Employee("Alice");\n        e.print();\n    }\n}',
    hint: "Use this to refer to instance variables"
  },
  {
    id: "java_opp_14",
    topicId: "java_oop",
    question: "What is static keyword?",
    mathSolution: "Belongs to class rather than object",
    codeSolution: 'public class Main {\n    static class Counter {\n        static int count = 0;\n        Counter() { count++; }\n    }\n    public static void main(String[] args) {\n        new Counter(); new Counter(); new Counter();\n        System.out.println("Total objects: " + Counter.count);\n    }\n}',
    hint: "Static members shared across objects"
  },
  {
    id: "java_opp_15",
    topicId: "java_oop",
    question: "How do you create a static method?",
    mathSolution: "Method that can be called without object",
    codeSolution: 'public class Main {\n    static class MathUtils {\n        static int square(int x) { return x * x; }\n    }\n    public static void main(String[] args) {\n        int result = MathUtils.square(5);\n        System.out.println("Square of 5: " + result);\n    }\n}',
    hint: "Static methods belong to class"
  },
  {
  id: "java_opp_16",
  topicId: "java_oop",
  question: "What is final keyword?",
  mathSolution: "Makes variable constant, method non-overridable, class non-extendable",
  codeSolution: 'public class Main {\n    static final int MAX = 100;\n    static void display() {\n        System.out.println("Constant MAX: " + MAX);\n    }\n    public static void main(String[] args) {\n        display();\n    }\n}',
  hint: "Final prevents modification/inheritance"
},
  {
    id: "java_opp_17",
    topicId: "java_oop",
    question: "What is multiple inheritance in Java?",
    mathSolution: "Java doesn't support multiple inheritance with classes",
    codeSolution: 'public class Main {\n    interface A { void methodA(); }\n    interface B { void methodB(); }\n    static class C implements A, B {\n        public void methodA() { System.out.println("A"); }\n        public void methodB() { System.out.println("B"); }\n    }\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.methodA();\n        obj.methodB();\n        System.out.println("Multiple inheritance achieved via interfaces");\n    }\n}',
    hint: "Use interfaces for multiple inheritance"
  },
  {
    id: "java_opp_18",
    topicId: "java_oop",
    question: "What is package in Java?",
    mathSolution: "Grouping related classes and interfaces",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Packages organize classes. Example: package com.example;");\n    }\n}',
    hint: "Package organizes classes"
  },
  {
    id: "java_opp_19",
    topicId: "java_oop",
    question: "How do you import a package?",
    mathSolution: "Use import statement",
    codeSolution: 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("Imported");\n        System.out.println(list.get(0));\n    }\n}',
    hint: "Import before class declaration"
  },
  {
  id: "java_opp_20",
  topicId: "java_oop",
  question: "What is access modifier private?",
  mathSolution: "Accessible only within same class",
  codeSolution: 'public class Main {\n    private static int data = 100;\n    private static void show() {\n        System.out.println("Private data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "Most restrictive access"
},
  {
  id: "java_opp_21",
  topicId: "java_oop",
  question: "What is access modifier public?",
  mathSolution: "Accessible from anywhere",
  codeSolution: 'public class Main {\n    public static int data = 200;\n    public static void show() {\n        System.out.println("Public data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "Least restrictive access"
},
  {
    id: "java_opp_22",
    topicId: "java_oop",
    question: "What is access modifier protected?",
    mathSolution: "Accessible within package and subclasses",
    codeSolution: 'public class Main {\n    protected static int data = 300;\n    protected static void show() { System.out.println("Protected data: " + data); }\n    public static void main(String[] args) {\n        show();\n    }\n}',
    hint: "Protected = package + subclasses"
  },
  {
  id: "java_opp_23",
  topicId: "java_oop",
  question: "What is default access modifier?",
  mathSolution: "Accessible only within same package",
  codeSolution: 'public class Main {\n    static int data = 400;\n    static void show() {\n        System.out.println("Default data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "No keyword means package-private"
},
  {
    id: "java_opp_24",
    topicId: "java_oop",
    question: "What is constructor chaining?",
    mathSolution: "Calling one constructor from another",
    codeSolution: 'public class Main {\n    static class Example {\n        Example() { this(10); System.out.println("No-arg"); }\n        Example(int x) { System.out.println("Parameterized: " + x); }\n    }\n    public static void main(String[] args) {\n        Example e = new Example();\n    }\n}',
    hint: "Use this() to call another constructor"
  },
  {
    id: "java_opp_25",
    topicId: "java_oop",
    question: "What is default constructor?",
    mathSolution: "Constructor provided by Java if none defined",
    codeSolution: 'public class Main {\n    static class Example {}\n    public static void main(String[] args) {\n        Example e = new Example();\n        System.out.println("Default constructor works");\n    }\n}',
    hint: "No-argument constructor by default"
  },
  {
    id: "java_opp_26",
    topicId: "java_oop",
    question: "What is parameterized constructor?",
    mathSolution: "Constructor that accepts parameters",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        Student(String n) { name = n; }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Bob");\n        System.out.println("Student name: " + s.name);\n    }\n}',
    hint: "Constructor with parameters"
  },
  {
    id: "java_opp_27",
    topicId: "java_oop",
    question: "What is copy constructor?",
    mathSolution: "Constructor that creates object from another object",
    codeSolution: 'public class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        Point(Point p) { this.x = p.x; this.y = p.y; }\n    }\n    public static void main(String[] args) {\n        Point p1 = new Point(5, 10);\n        Point p2 = new Point(p1);\n        System.out.println("p2: (" + p2.x + "," + p2.y + ")");\n    }\n}',
    hint: "Constructor takes object of same class"
  },
  {
    id: "java_opp_28",
    topicId: "java_oop",
    question: "What is garbage collection?",
    mathSolution: "Automatic memory management",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        for(int i=0; i<1000; i++) {\n            new Object();\n        }\n        System.out.println("Garbage collection is automatic in Java");\n    }\n}',
    hint: "System.gc() suggests but not guarantees"
  },
  {
  id: "java_opp_29",
  topicId: "java_oop",
  question: "What is finalize method?",
  mathSolution: "Called before garbage collection (deprecated)",
  codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("finalize() is deprecated. Use try-with-resources or Cleaner instead.");\n        System.out.println("Example: try (FileReader fr = new FileReader(\\"file.txt\\")) { ... }");\n    }\n}',
  hint: "Deprecated in newer Java versions – avoid using"
},
  {
    id: "java_opp_30",
    topicId: "java_oop",
    question: "What is instanceof operator?",
    mathSolution: "Checks if object is instance of a class",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean result = str instanceof String;\n        System.out.println("str instanceof String: " + result);\n    }\n}',
    hint: "Use for type checking"
  },
  {
    id: "java_opp_31",
    topicId: "java_oop",
    question: "What is object cloning?",
    mathSolution: "Creating copy of an object",
    codeSolution: 'public class Main {\n    static class Example implements Cloneable {\n        int val;\n        Example(int v) { val = v; }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return super.clone();\n        }\n    }\n    public static void main(String[] args) throws CloneNotSupportedException {\n        Example e1 = new Example(42);\n        Example e2 = (Example) e1.clone();\n        System.out.println("Cloned value: " + e2.val);\n    }\n}',
    hint: "Implement Cloneable interface"
  },
  {
    id: "java_opp_32",
    topicId: "java_oop",
    question: "What is shallow copy?",
    mathSolution: "Copies object but not nested objects",
    codeSolution: 'public class Main {\n    static class Address { String city; Address(String c) { city = c; } }\n    static class Person implements Cloneable {\n        String name; Address addr;\n        Person(String n, String c) { name = n; addr = new Address(c); }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return super.clone();\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        Person p1 = new Person("John", "NYC");\n        Person p2 = (Person) p1.clone();\n        System.out.println(p2.addr.city);\n        System.out.println("Shallow copy: both share same Address");\n    }\n}',
    hint: "Shallow copy shares nested objects"
  },
  {
    id: "java_opp_33",
    topicId: "java_oop",
    question: "What is deep copy?",
    mathSolution: "Copies object and all nested objects",
    codeSolution: 'public class Main {\n    static class Address implements Cloneable {\n        String city;\n        Address(String c) { city = c; }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return new Address(this.city);\n        }\n    }\n    static class Person implements Cloneable {\n        String name; Address addr;\n        Person(String n, String c) { name = n; addr = new Address(c); }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            Person p = (Person) super.clone();\n            p.addr = (Address) addr.clone();\n            return p;\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        Person p1 = new Person("John", "NYC");\n        Person p2 = (Person) p1.clone();\n        System.out.println("Deep copy: separate Address objects");\n    }\n}',
    hint: "Deep copy clones all references"
  },
  {
    id: "java_opp_34",
    topicId: "java_oop",
    question: "What is abstract class?",
    mathSolution: "Class that cannot be instantiated",
    codeSolution: 'public class Main {\n    static abstract class Animal {\n        abstract void sound();\n        void sleep() { System.out.println("Sleeping"); }\n    }\n    static class Dog extends Animal {\n        void sound() { System.out.println("Bark"); }\n    }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n        a.sleep();\n    }\n}',
    hint: "Can have both abstract and concrete methods"
  },
  {
    id: "java_opp_35",
    topicId: "java_oop",
    question: "What is abstract method?",
    mathSolution: "Method without body, must be overridden",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract double area();\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        double area() { return Math.PI * radius * radius; }\n    }\n    public static void main(String[] args) {\n        Shape s = new Circle(5);\n        System.out.println("Area: " + s.area());\n    }\n}',
    hint: "Abstract methods end with semicolon"
  },
  {
    id: "java_opp_36",
    topicId: "java_oop",
    question: "Interface vs Abstract class difference?",
    mathSolution: "Interface has only abstract methods (before Java 8)",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n        default void show() { System.out.println("Default method"); }\n    }\n    static class Circle implements Drawable {\n        public void draw() { System.out.println("Draw circle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d = new Circle();\n        d.draw();\n        d.show();\n    }\n}',
    hint: "Interface supports multiple inheritance"
  },
  {
    id: "java_opp_37",
    topicId: "java_oop",
    question: "What is default method in interface?",
    mathSolution: "Method with implementation in interface (Java 8+)",
    codeSolution: 'public class Main {\n    interface Printer {\n        default void print() {\n            System.out.println("Default print");\n        }\n    }\n    static class MyPrinter implements Printer {}\n    public static void main(String[] args) {\n        Printer p = new MyPrinter();\n        p.print();\n    }\n}',
    hint: "Use default keyword"
  },
  {
    id: "java_opp_38",
    topicId: "java_oop",
    question: "What is static method in interface?",
    mathSolution: "Static method in interface (Java 8+)",
    codeSolution: 'public class Main {\n    interface MathOperation {\n        static int add(int a, int b) { return a + b; }\n    }\n    public static void main(String[] args) {\n        int sum = MathOperation.add(5, 3);\n        System.out.println("Sum: " + sum);\n    }\n}',
    hint: "Call using interface name"
  },
  {
    id: "java_opp_39",
    topicId: "java_oop",
    question: "What is private method in interface?",
    mathSolution: "Helper method in interface (Java 9+)",
    codeSolution: 'public class Main {\n    interface Logger {\n        private void log(String msg) { System.out.println("LOG: " + msg); }\n        default void info(String msg) { log(msg); }\n    }\n    static class App implements Logger {}\n    public static void main(String[] args) {\n        App a = new App();\n        a.info("Hello from private method");\n    }\n}',
    hint: "For code reuse in interface"
  },
  {
    id: "java_opp_40",
    topicId: "java_oop",
    question: "What is functional interface?",
    mathSolution: "Interface with single abstract method",
    codeSolution: '@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator add = (a, b) -> a + b;\n        System.out.println("Sum: " + add.calculate(5, 3));\n    }\n}',
    hint: "Can be used with lambda expressions"
  },
  {
    id: "java_opp_41",
    topicId: "java_oop",
    question: "What is lambda expression?",
    mathSolution: "Short way to implement functional interface",
    codeSolution: '@FunctionalInterface\ninterface MathOp { int operate(int a, int b); }\npublic class Main {\n    public static void main(String[] args) {\n        MathOp add = (x, y) -> x + y;\n        MathOp multiply = (x, y) -> x * y;\n        System.out.println("Add: " + add.operate(5,3));\n        System.out.println("Multiply: " + multiply.operate(5,3));\n    }\n}',
    hint: "-> separates parameters and body"
  },
  {
    id: "java_opp_42",
    topicId: "java_oop",
    question: "What is method reference?",
    mathSolution: "Shorter lambda syntax",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(System.out::println);\n    }\n}',
    hint: "Use :: operator"
  },
  {
    id: "java_opp_43",
    topicId: "java_oop",
    question: "What is enum in Java?",
    mathSolution: "Fixed set of constants",
    codeSolution: 'enum Day { MONDAY, TUESDAY, WEDNESDAY }\npublic class Main {\n    public static void main(String[] args) {\n        Day today = Day.MONDAY;\n        System.out.println("Today is " + today);\n    }\n}',
    hint: "Enum can have fields and methods"
  },
  {
  id: "java_opp_44",
  topicId: "java_oop",
  question: "What is record in Java?",
  mathSolution: "Immutable data carrier (Java 14+)",
  codeSolution: 'public class Main {\n    static class Point {\n        private final int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        int x() { return x; }\n        int y() { return y; }\n        @Override\n        public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }\n    }\n    public static void main(String[] args) {\n        Point p = new Point(10, 20);\n        System.out.println(p);\n    }\n}',
  hint: "Auto-generates constructor, getters, equals, hashCode (simulated here)"
},
  {
  id: "java_opp_45",
  topicId: "java_oop",
  question: "What is sealed class?",
  mathSolution: "Restricts which classes can extend (Java 17+)",
  codeSolution: 'public class Main {\n    static class Animal {}\n    static class Dog extends Animal {}\n    static class Cat extends Animal {}\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println("Sealed classes are a preview feature. Here we use normal inheritance.");\n        System.out.println("In sealed class: permits Dog, Cat – others cannot extend.");\n    }\n}',
  hint: "Use sealed, permits keywords (preview in Java 17)"
},
  {
    id: "java_opp_46",
    topicId: "java_oop",
    question: "What is nested class?",
    mathSolution: "Class defined inside another class",
    codeSolution: 'public class Main {\n    static class Outer {\n        class Inner { void show() { System.out.println("Inner class"); } }\n        static class StaticNested { static void display() { System.out.println("Static nested"); } }\n    }\n    public static void main(String[] args) {\n        Outer.Inner inner = new Outer().new Inner();\n        inner.show();\n        Outer.StaticNested.display();\n    }\n}',
    hint: "Inner class has access to outer class members"
  },
  {
    id: "java_opp_47",
    topicId: "java_oop",
    question: "What is anonymous class?",
    mathSolution: "Class without name for one-time use",
    codeSolution: 'public class Main {\n    interface Greeting { void greet(); }\n    public static void main(String[] args) {\n        Greeting g = new Greeting() {\n            public void greet() { System.out.println("Hello from anonymous"); }\n        };\n        g.greet();\n    }\n}',
    hint: "Use new keyword with interface/class"
  },
  {
  id: "java_opp_48",
  topicId: "java_oop",
  question: "What is Object class?",
  mathSolution: "Parent of all classes in Java",
  codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Object class is the root parent of all classes in Java.");\n        System.out.println("Every class implicitly extends java.lang.Object.");\n    }\n}',
  hint: "java.lang.Object is root class"
},
  {
    id: "java_opp_49",
    topicId: "java_oop",
    question: "How to override toString() method?",
    mathSolution: "Provide string representation of object",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        Person(String n) { name = n; }\n        @Override\n        public String toString() { return "Person: " + name; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice");\n        System.out.println(p);\n    }\n}',
    hint: "Called when object is printed"
  },
  {
    id: "java_opp_50",
    topicId: "java_oop",
    question: "How to override equals() method?",
    mathSolution: "Define object equality",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        @Override\n        public boolean equals(Object obj) {\n            if (this == obj) return true;\n            if (obj == null || getClass() != obj.getClass()) return false;\n            Person p = (Person) obj;\n            return age == p.age && name.equals(p.name);\n        }\n    }\n    public static void main(String[] args) {\n        Person p1 = new Person("John", 25);\n        Person p2 = new Person("John", 25);\n        System.out.println("p1 equals p2: " + p1.equals(p2));\n    }\n}',
    hint: "Also override hashCode()"
  }
);