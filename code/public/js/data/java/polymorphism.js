QuizData.questions.push(
  // COMPILE-TIME POLYMORPHISM (METHOD OVERLOADING) (6)
  {
    id: "polymorphism_1",
    topicId: "polymorphism",
    question: "Demonstrate method overloading with different parameter types.",
    mathSolution: "Same method name, different parameter types",
    codeSolution: 'public class Main {\n    static class Calculator {\n        int add(int a, int b) { return a + b; }\n        double add(double a, double b) { return a + b; }\n        String add(String a, String b) { return a + b; }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println("Int sum: " + calc.add(10, 20));\n        System.out.println("Double sum: " + calc.add(10.5, 20.7));\n        System.out.println("String concat: " + calc.add("Hello", "World"));\n    }\n}',
    hint: "Same method name, different parameter types",
  },
  {
    id: "polymorphism_2",
    topicId: "polymorphism",
    question: "Method overloading with different number of parameters.",
    mathSolution: "Same method name, different parameter count",
    codeSolution: 'public class Main {\n    static class Area {\n        double calculate(double radius) { return Math.PI * radius * radius; }\n        double calculate(double length, double width) { return length * width; }\n        double calculate(double a, double b, double c) { return a + b + c; }\n    }\n    public static void main(String[] args) {\n        Area area = new Area();\n        System.out.println("Circle area: " + area.calculate(5));\n        System.out.println("Rectangle area: " + area.calculate(4, 6));\n        System.out.println("Sum of three: " + area.calculate(1, 2, 3));\n    }\n}',
    hint: "Different number of parameters",
  },
  {
    id: "polymorphism_3",
    topicId: "polymorphism",
    question: "Method overloading with different order of parameters.",
    mathSolution: "Same method name, different parameter order",
    codeSolution: 'public class Main {\n    static class Display {\n        void show(String name, int age) { System.out.println(name + " is " + age + " years old"); }\n        void show(int age, String name) { System.out.println("Age " + age + ", Name: " + name); }\n    }\n    public static void main(String[] args) {\n        Display d = new Display();\n        d.show("Alice", 25);\n        d.show(30, "Bob");\n    }\n}',
    hint: "Order of parameters distinguishes methods",
  },
  {
    id: "polymorphism_4",
    topicId: "polymorphism",
    question: "Method overloading with type promotion.",
    mathSolution: "Automatic type promotion in overloading",
    codeSolution: 'public class Main {\n    static class Promo {\n        void show(int a) { System.out.println("int method: " + a); }\n        void show(double a) { System.out.println("double method: " + a); }\n        void show(byte a) { System.out.println("byte method: " + a); }\n    }\n    public static void main(String[] args) {\n        Promo p = new Promo();\n        p.show(10);\n        p.show(10.5f);\n        p.show(65);\n        p.show((byte)5);\n    }\n}',
    hint: "byte -> short -> int -> long -> float -> double",
  },
  {
    id: "polymorphism_5",
    topicId: "polymorphism",
    question: "Method overloading with varargs.",
    mathSolution: "Variable arguments as overloaded method",
    codeSolution: 'public class Main {\n    static class VarargsDemo {\n        void print(String... args) {\n            System.out.print("Varargs (" + args.length + "): ");\n            for(String s : args) System.out.print(s + " ");\n            System.out.println();\n        }\n        void print(String s1) { System.out.println("Single: " + s1); }\n        void print(String s1, String s2) { System.out.println("Two: " + s1 + " and " + s2); }\n    }\n    public static void main(String[] args) {\n        VarargsDemo v = new VarargsDemo();\n        v.print("Hello");\n        v.print("Hello", "World");\n        v.print("A", "B", "C");\n        v.print();\n    }\n}',
    hint: "Varargs is least specific in overloading",
  },
  {
    id: "polymorphism_6",
    topicId: "polymorphism",
    question: "Constructor overloading.",
    mathSolution: "Multiple constructors in same class",
    codeSolution: 'public class Main {\n    static class Employee {\n        int id; String name; double salary;\n        Employee() { this(0, "Unknown", 0.0); System.out.println("Default constructor"); }\n        Employee(int id) { this(id, "Unknown", 0.0); System.out.println("Constructor with id"); }\n        Employee(int id, String name) { this(id, name, 0.0); System.out.println("Constructor with id and name"); }\n        Employee(int id, String name, double salary) {\n            this.id = id; this.name = name; this.salary = salary;\n            System.out.println("Constructor with all fields");\n        }\n        void display() { System.out.println(id + ", " + name + ", $" + salary); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee(101);\n        Employee e3 = new Employee(102, "Alice");\n        Employee e4 = new Employee(103, "Bob", 50000);\n        e1.display(); e2.display(); e3.display(); e4.display();\n    }\n}',
    hint: "Constructors can be overloaded like methods",
  },

  // RUNTIME POLYMORPHISM (METHOD OVERRIDING) (7)
  {
    id: "polymorphism_7",
    topicId: "polymorphism",
    question: "Basic runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal makes sound"); } }\n    static class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }\n    static class Cat extends Animal { void sound() { System.out.println("Cat meows"); } }\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n        Animal[] animals = {new Dog(), new Cat(), new Animal()};\n        for(Animal a : animals) a.sound();\n    }\n}',
    hint: "Actual method called based on object at runtime",
  },
  {
    id: "polymorphism_8",
    topicId: "polymorphism",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution: 'public class Main {\n    static class Shape { void draw() { System.out.println("Drawing shape"); } }\n    static class Circle extends Shape { void draw() { System.out.println("Drawing circle"); } }\n    static class Rectangle extends Shape { void draw() { System.out.println("Drawing rectangle"); } }\n    static class Triangle extends Shape { void draw() { System.out.println("Drawing triangle"); } }\n    static class Canvas { void drawShape(Shape s) { s.draw(); } }\n    public static void main(String[] args) {\n        Canvas canvas = new Canvas();\n        canvas.drawShape(new Circle());\n        canvas.drawShape(new Rectangle());\n        canvas.drawShape(new Triangle());\n        canvas.drawShape(new Shape());\n    }\n}',
    hint: "Method works with any Shape subclass",
  },
  {
    id: "polymorphism_9",
    topicId: "polymorphism",
    question: "Polymorphic return types.",
    mathSolution: "Method returns parent type, can return any child",
    codeSolution: 'public class Main {\n    static class Animal { String type = "Animal"; }\n    static class Dog extends Animal { String breed = "Labrador"; }\n    static class Cat extends Animal { String color = "Black"; }\n    static class AnimalFactory {\n        Animal getAnimal(String type) {\n            if(type.equals("dog")) return new Dog();\n            if(type.equals("cat")) return new Cat();\n            return new Animal();\n        }\n    }\n    public static void main(String[] args) {\n        AnimalFactory factory = new AnimalFactory();\n        Animal a1 = factory.getAnimal("dog");\n        Animal a2 = factory.getAnimal("cat");\n        System.out.println("Type: " + a1.type);\n        if(a1 instanceof Dog) {\n            Dog d = (Dog) a1;\n            System.out.println("Dog breed: " + d.breed);\n        }\n        System.out.println("Type: " + a2.type);\n    }\n}',
    hint: "Return type can be parent, actual object can be child",
  },
  {
    id: "polymorphism_10",
    topicId: "polymorphism",
    question: "Dynamic method dispatch with superclass reference.",
    mathSolution: "Decision at runtime which method to call",
    codeSolution: 'public class Main {\n    static class Bank { double getRate() { return 0; } }\n    static class SBI extends Bank { double getRate() { return 8.5; } }\n    static class ICICI extends Bank { double getRate() { return 9.2; } }\n    static class HDFC extends Bank { double getRate() { return 8.9; } }\n    public static void main(String[] args) {\n        Bank b;\n        b = new SBI();\n        System.out.println("SBI Rate: " + b.getRate());\n        b = new ICICI();\n        System.out.println("ICICI Rate: " + b.getRate());\n        b = new HDFC();\n        System.out.println("HDFC Rate: " + b.getRate());\n    }\n}',
    hint: "Method resolution happens at runtime",
  },
  {
    id: "polymorphism_11",
    topicId: "polymorphism",
    question: "Polymorphism with abstract classes.",
    mathSolution: "Abstract methods enforce polymorphism",
    codeSolution: 'public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        abstract void stop();\n        void display() { System.out.println("This is a vehicle"); }\n    }\n    static class Car extends Vehicle {\n        void start() { System.out.println("Car started with key"); }\n        void stop() { System.out.println("Car stopped"); }\n    }\n    static class Bike extends Vehicle {\n        void start() { System.out.println("Bike started with kick"); }\n        void stop() { System.out.println("Bike stopped"); }\n    }\n    static class ElectricCar extends Vehicle {\n        void start() { System.out.println("Electric car started silently"); }\n        void stop() { System.out.println("Electric car stopped"); }\n    }\n    public static void main(String[] args) {\n        Vehicle[] vehicles = {new Car(), new Bike(), new ElectricCar()};\n        for(Vehicle v : vehicles) {\n            v.start();\n            v.display();\n            v.stop();\n            System.out.println();\n        }\n    }\n}',
    hint: "Abstract classes are designed for polymorphism",
  },
  {
    id: "polymorphism_12",
    topicId: "polymorphism",
    question: "Polymorphism with interfaces.",
    mathSolution: "Interface references can point to implementing classes",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Drawable { void draw(); }\n    static class Circle implements Drawable { public void draw() { System.out.println("Drawing circle"); } }\n    static class Rectangle implements Drawable { public void draw() { System.out.println("Drawing rectangle"); } }\n    static class Text implements Drawable { public void draw() { System.out.println("Drawing text"); } }\n    public static void main(String[] args) {\n        Drawable d1 = new Circle();\n        Drawable d2 = new Rectangle();\n        Drawable d3 = new Text();\n        d1.draw(); d2.draw(); d3.draw();\n        List<Drawable> list = Arrays.asList(new Circle(), new Rectangle(), new Text());\n        for(Drawable d : list) d.draw();\n    }\n}',
    hint: "Interfaces enable polymorphic behavior across unrelated classes",
  },
  {
    id: "polymorphism_13",
    topicId: "polymorphism",
    question: "Polymorphism with method overriding and super call.",
    mathSolution: "super to call parent's overridden method",
    codeSolution: 'public class Main {\n    static class Parent { void show() { System.out.println("Parent show"); } }\n    static class Child extends Parent { void show() { super.show(); System.out.println("Child show"); } }\n    static class GrandChild extends Child { void show() { super.show(); System.out.println("GrandChild show"); } }\n    public static void main(String[] args) {\n        Parent p = new GrandChild();\n        p.show();\n    }\n}',
    hint: "super can call immediate parent's method",
  },

  // DOWNCASTING AND INSTANCEOF (3)
  {
    id: "polymorphism_14",
    topicId: "polymorphism",
    question: "Safe downcasting using instanceof.",
    mathSolution: "Check type before casting",
    codeSolution: 'public class Main {\n    static class Employee { void work() { System.out.println("Employee working"); } }\n    static class Manager extends Employee { void manage() { System.out.println("Manager managing"); } }\n    static class Developer extends Employee { void code() { System.out.println("Developer coding"); } }\n    public static void main(String[] args) {\n        Employee emp = new Manager();\n        if(emp instanceof Manager) {\n            Manager m = (Manager) emp;\n            m.manage();\n            m.work();\n        }\n        if(emp instanceof Developer) {\n            Developer d = (Developer) emp;\n            d.code();\n        } else {\n            System.out.println("Not a developer");\n        }\n    }\n}',
    hint: "Always use instanceof before downcasting",
  },
  {
  id: "polymorphism_15",
  topicId: "polymorphism",
  question: "Pattern matching for instanceof (Java 16+).",
  mathSolution: "Modern instanceof with variable declaration",
  codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal sound"); } }\n    static class Dog extends Animal { void bark() { System.out.println("Dog barking"); } }\n    static class Cat extends Animal { void meow() { System.out.println("Cat meowing"); } }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        // Traditional instanceof (works on all Java versions)\n        if(a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        }\n        if(a instanceof Cat) {\n            Cat c = (Cat) a;\n            c.meow();\n        } else {\n            System.out.println("Not a cat");\n        }\n        // Traditional ternary (no pattern matching)\n        String type = (a instanceof Dog) ? "It is a Dog" : "Not a dog";\n        System.out.println(type);\n    }\n}',
  hint: "Traditional instanceof with explicit casting (compatible with older Java)",
},
  {
    id: "polymorphism_16",
    topicId: "polymorphism",
    question: "ClassCastException with invalid downcasting.",
    mathSolution: "Understanding runtime type errors",
    codeSolution: 'public class Main {\n    static class Fruit {}\n    static class Apple extends Fruit { void makeAppleJuice() { System.out.println("Apple juice"); } }\n    static class Orange extends Fruit { void makeOrangeJuice() { System.out.println("Orange juice"); } }\n    public static void main(String[] args) {\n        Fruit f = new Apple();\n        Apple a = (Apple) f;\n        a.makeAppleJuice();\n        try {\n            Orange o = (Orange) f;\n            o.makeOrangeJuice();\n        } catch(ClassCastException e) {\n            System.out.println("Cannot cast Apple to Orange: " + e);\n        }\n        if(f instanceof Orange) {\n            Orange o = (Orange) f;\n            o.makeOrangeJuice();\n        } else {\n            System.out.println("Not an orange");\n        }\n    }\n}',
    hint: "Downcasting only works for actual object type",
  },

  // COVARIANT RETURN TYPES (2)
  {
    id: "polymorphism_17",
    topicId: "polymorphism",
    question: "Covariant return types in overridden methods.",
    mathSolution: "Override can return subtype of parent's return type",
    codeSolution: 'public class Main {\n    static class Animal { Animal reproduce() { System.out.println("Animal reproduces"); return new Animal(); } }\n    static class Dog extends Animal { Dog reproduce() { System.out.println("Dog gives birth to puppies"); return new Dog(); } }\n    static class Cat extends Animal { Cat reproduce() { System.out.println("Cat gives birth to kittens"); return new Cat(); } }\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Dog puppy = dog.reproduce();\n        Animal animal = new Cat();\n        Cat kitten = (Cat) animal.reproduce();\n        System.out.println("Covariant returns work!");\n    }\n}',
    hint: "Covariant return types reduce need for casting",
  },
  {
  id: "polymorphism_18",
  topicId: "polymorphism",
  question: "Covariant return types with interfaces.",
  mathSolution: "Interface methods can have covariant returns",
  codeSolution: 'public class Main {\n    static class Animal {\n        Animal reproduce() {\n            System.out.println("Animal reproduces");\n            return new Animal();\n        }\n    }\n    static class Dog extends Animal {\n        @Override\n        Dog reproduce() {\n            System.out.println("Dog gives birth to puppies");\n            return new Dog();\n        }\n    }\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Dog puppy = dog.reproduce(); // covariant return: Dog, not Animal\n        System.out.println("Covariant return works: " + puppy.getClass().getSimpleName());\n    }\n}',
  hint: "Overridden method can return a subtype of the parent's return type",
},

  // POLYMORPHISM WITH STATIC METHODS (2)
  {
    id: "polymorphism_19",
    topicId: "polymorphism",
    question: "Static methods are not polymorphic (method hiding).",
    mathSolution: "Static methods are resolved at compile-time",
    codeSolution: 'public class Main {\n    static class Parent {\n        static void staticMethod() { System.out.println("Parent static"); }\n        void instanceMethod() { System.out.println("Parent instance"); }\n    }\n    static class Child extends Parent {\n        static void staticMethod() { System.out.println("Child static"); }\n        void instanceMethod() { System.out.println("Child instance"); }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.staticMethod();   // Parent static (compile-time binding)\n        p.instanceMethod(); // Child instance (runtime binding)\n        Parent.staticMethod();\n        Child.staticMethod();\n    }\n}',
    hint: "Static methods are hidden, not overridden",
  },
  {
    id: "polymorphism_20",
    topicId: "polymorphism",
    question: "Polymorphism with static methods - best practices.",
    mathSolution: "Avoid calling static methods polymorphically",
    codeSolution: 'public class Main {\n    static class Utility {\n        static String getType() { return "Utility"; }\n    }\n    static class DatabaseUtility extends Utility {\n        static String getType() { return "DatabaseUtility"; }\n    }\n    static class BetterUtility {\n        String getType() { return "BetterUtility"; }\n    }\n    static class BetterDatabaseUtility extends BetterUtility {\n        String getType() { return "BetterDatabaseUtility"; }\n    }\n    public static void main(String[] args) {\n        Utility u = new DatabaseUtility();\n        System.out.println("Static call: " + u.getType()); // Utility.getType()\n        BetterUtility bu = new BetterDatabaseUtility();\n        System.out.println("Instance call: " + bu.getType()); // polymorphic\n    }\n}',
    hint: "Use instance methods for polymorphic behavior",
  },

  // POLYMORPHISM WITH FIELDS (2)
  {
    id: "polymorphism_21",
    topicId: "polymorphism",
    question: "Fields are not polymorphic (variable hiding).",
    mathSolution: "Field access based on reference type, not object",
    codeSolution: 'public class Main {\n    static class Parent { String name = "Parent"; int value = 100; }\n    static class Child extends Parent { String name = "Child"; int value = 200; }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        Child c = new Child();\n        System.out.println("p.name: " + p.name); // Parent\n        System.out.println("p.value: " + p.value); // 100\n        System.out.println("c.name: " + c.name); // Child\n        System.out.println("c.value: " + c.value); // 200\n        System.out.println("((Parent)c).name: " + ((Parent)c).name); // Parent\n    }\n}',
    hint: "Fields are resolved at compile-time, not runtime",
  },
  {
    id: "polymorphism_22",
    topicId: "polymorphism",
    question: "Use methods to access fields polymorphically.",
    mathSolution: "Getter methods can be overridden for polymorphic field access",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name = "Person";\n        String getName() { return name; }\n    }\n    static class Student extends Person {\n        private String name = "Student";\n        String getName() { return name; }\n        String getParentName() { return super.getName(); }\n    }\n    public static void main(String[] args) {\n        Person p = new Student();\n        System.out.println("Polymorphic name: " + p.getName()); // Student\n        Student s = new Student();\n        System.out.println("Child name: " + s.getName());\n        System.out.println("Parent name: " + s.getParentName());\n    }\n}',
    hint: "Use getter/setter methods for polymorphic behavior",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "polymorphism_23",
    topicId: "polymorphism",
    question: "Polymorphism in collections.",
    mathSolution: "Store different types in collection using parent type",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Payment { void pay(double amount); }\n    static class CreditCard implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " using Credit Card"); } }\n    static class PayPal implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " using PayPal"); } }\n    static class Cash implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " in Cash"); } }\n    static class ShoppingCart {\n        List<Payment> payments = new ArrayList<>();\n        void addPaymentMethod(Payment p) { payments.add(p); }\n        void checkout(double total) {\n            System.out.println("Total: $" + total);\n            for(Payment p : payments) p.pay(total / payments.size());\n        }\n    }\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addPaymentMethod(new CreditCard());\n        cart.addPaymentMethod(new PayPal());\n        cart.addPaymentMethod(new Cash());\n        cart.checkout(300);\n    }\n}',
    hint: "Collections can hold different types via polymorphism",
  },
  {
    id: "polymorphism_24",
    topicId: "polymorphism",
    question: "Strategy pattern using polymorphism.",
    mathSolution: "Behavioral pattern using polymorphic interfaces",
    codeSolution: 'public class Main {\n    interface SortingStrategy { void sort(int[] arr); }\n    static class BubbleSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Bubble Sort"); } }\n    static class QuickSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Quick Sort"); } }\n    static class MergeSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Merge Sort"); } }\n    static class Sorter {\n        private SortingStrategy strategy;\n        void setStrategy(SortingStrategy s) { strategy = s; }\n        void executeSort(int[] arr) { strategy.sort(arr); }\n    }\n    public static void main(String[] args) {\n        Sorter sorter = new Sorter();\n        int[] data = {5,2,8,1,9};\n        sorter.setStrategy(new BubbleSort());\n        sorter.executeSort(data);\n        sorter.setStrategy(new QuickSort());\n        sorter.executeSort(data);\n        sorter.setStrategy(new MergeSort());\n        sorter.executeSort(data);\n    }\n}',
    hint: "Polymorphism enables strategy pattern",
  },
  {
    id: "polymorphism_25",
    topicId: "polymorphism",
    question: "Factory pattern returning polymorphic types.",
    mathSolution: "Factory creates objects of different types",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Notification { void send(String message); }\n    static class EmailNotification implements Notification { public void send(String message) { System.out.println("Sending Email: " + message); } }\n    static class SMSNotification implements Notification { public void send(String message) { System.out.println("Sending SMS: " + message); } }\n    static class PushNotification implements Notification { public void send(String message) { System.out.println("Sending Push: " + message); } }\n    static class NotificationFactory {\n        Notification createNotification(String type) {\n            if(type.equals("email")) return new EmailNotification();\n            if(type.equals("sms")) return new SMSNotification();\n            if(type.equals("push")) return new PushNotification();\n            throw new IllegalArgumentException("Unknown type: " + type);\n        }\n    }\n    public static void main(String[] args) {\n        NotificationFactory factory = new NotificationFactory();\n        String[] types = {"email", "sms", "push"};\n        for(String type : types) {\n            Notification n = factory.createNotification(type);\n            n.send("Hello " + type);\n        }\n        List<Notification> notifications = new ArrayList<>();\n        notifications.add(factory.createNotification("email"));\n        notifications.add(factory.createNotification("sms"));\n        notifications.add(factory.createNotification("push"));\n        for(Notification n : notifications) n.send("Broadcast message");\n    }\n}',
    hint: "Factory pattern uses polymorphism extensively",
  },
  {
  "id": "polymorphism_26",
  "topicId": "polymorphism",
  "question": "Demonstrate method overloading where one method accepts a `String` and another accepts an `Object`. Show how Java chooses the most specific method.",
  "mathSolution": "Java selects the most specific method during compile-time based on argument types.",
  "codeSolution": "public class Main {\n    static class OverloadDemo {\n        void print(Object obj) { System.out.println(\"Object: \" + obj); }\n        void print(String str) { System.out.println(\"String: \" + str); }\n    }\n    public static void main(String[] args) {\n        OverloadDemo demo = new OverloadDemo();\n        demo.print(\"Hello\");      // calls String version\n        demo.print(42);            // autoboxed to Integer, calls Object version\n    }\n}",
  "hint": "String is more specific than Object."
},
  {
    "id": "polymorphism_27",
    "topicId": "polymorphism",
    "question": "Write a method that accepts a `Number` and uses instanceof to check its exact subtype (Integer, Double). Demonstrate runtime type identification.",
    "mathSolution": "Use `instanceof` to differentiate between subtypes at runtime.",
    "codeSolution": "public class Main {\n    static void process(Number n) {\n        if (n instanceof Integer) {\n            System.out.println(\"Integer: \" + n.intValue());\n        } else if (n instanceof Double) {\n            System.out.println(\"Double: \" + n.doubleValue());\n        } else {\n            System.out.println(\"Other Number: \" + n);\n        }\n    }\n    public static void main(String[] args) {\n        process(100);\n        process(3.14);\n        process(99L);\n    }\n}",
    "hint": "Use instanceof to check exact type."
  },
  {
    "id": "polymorphism_28",
    "topicId": "polymorphism",
    "question": "Create a class hierarchy: `Vehicle` (abstract), `Car`, `Bike`. Override a method `getMaxSpeed()`. Store objects in an array and call the method polymorphically.",
    "mathSolution": "Abstract method forces subclasses to provide implementation, demonstrating runtime polymorphism.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        abstract int getMaxSpeed();\n    }\n    static class Car extends Vehicle {\n        int getMaxSpeed() { return 180; }\n    }\n    static class Bike extends Vehicle {\n        int getMaxSpeed() { return 120; }\n    }\n    public static void main(String[] args) {\n        Vehicle[] vehicles = { new Car(), new Bike() };\n        for (Vehicle v : vehicles) {\n            System.out.println(v.getClass().getSimpleName() + \" max speed: \" + v.getMaxSpeed());\n        }\n    }\n}",
    "hint": "Abstract method forces overriding."
  },
  {
    "id": "polymorphism_29",
    "topicId": "polymorphism",
    "question": "Write a generic method that accepts a list of any type and prints each element using polymorphism. Use wildcard `? extends Object`.",
    "mathSolution": "Unbounded wildcard works with any list type.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static void printList(List<?> list) {\n        for (Object elem : list) {\n            System.out.println(elem);\n        }\n    }\n    public static void main(String[] args) {\n        printList(Arrays.asList(1, 2, 3));\n        printList(Arrays.asList(\"A\", \"B\", \"C\"));\n    }\n}",
    "hint": "List<?> works with any type."
  },
  {
    "id": "polymorphism_30",
    "topicId": "polymorphism",
    "question": "Create an interface `ComparableShape` with method `double area()`. Implement two classes `Circle` and `Rectangle`. Write a method that returns the shape with larger area using polymorphism.",
    "mathSolution": "Interface defines contract; method compares via area.",
    "codeSolution": "public class Main {\n    interface ComparableShape {\n        double area();\n    }\n    static class Circle implements ComparableShape {\n        double radius;\n        Circle(double r) { radius = r; }\n        public double area() { return Math.PI * radius * radius; }\n    }\n    static class Rectangle implements ComparableShape {\n        double l, w;\n        Rectangle(double l, double w) { this.l = l; this.w = w; }\n        public double area() { return l * w; }\n    }\n    static ComparableShape larger(ComparableShape a, ComparableShape b) {\n        return a.area() > b.area() ? a : b;\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5);\n        Rectangle r = new Rectangle(10, 2);\n        ComparableShape larger = larger(c, r);\n        System.out.println(\"Larger area: \" + larger.area());\n    }\n}",
    "hint": "Interface enables polymorphic comparison."
  },
  {
    "id": "polymorphism_31",
    "topicId": "polymorphism",
    "question": "Write a method that takes a `Collection<? extends Number>` and returns the average as double. Show it works with `List<Integer>` and `List<Double>`.",
    "mathSolution": "Upper bounded wildcard allows reading numbers.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static double average(Collection<? extends Number> coll) {\n        if (coll.isEmpty()) return 0.0;\n        double sum = 0.0;\n        for (Number n : coll) sum += n.doubleValue();\n        return sum / coll.size();\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1, 2, 3, 4, 5);\n        List<Double> dbls = Arrays.asList(1.5, 2.5, 3.5);\n        System.out.println(\"Average ints: \" + average(ints));\n        System.out.println(\"Average doubles: \" + average(dbls));\n    }\n}",
    "hint": "Use `? extends Number` for reading numbers."
  },
  {
    "id": "polymorphism_32",
    "topicId": "polymorphism",
    "question": "Create a method that accepts a `Supplier<T>` and returns a `T` instance. Use lambda to supply different types (String, Integer).",
    "mathSolution": "Supplier is a functional interface that provides an instance.",
    "codeSolution": "import java.util.function.Supplier;\npublic class Main {\n    static <T> T getInstance(Supplier<T> supplier) {\n        return supplier.get();\n    }\n    public static void main(String[] args) {\n        String str = getInstance(() -> \"Hello\");\n        Integer num = getInstance(() -> 42);\n        System.out.println(str);\n        System.out.println(num);\n    }\n}",
    "hint": "Supplier lambda returns new objects."
  },
  {
    "id": "polymorphism_33",
    "topicId": "polymorphism",
    "question": "Demonstrate that private methods are not overridden. Create a parent class with a private method, and a child class with same signature. Show that parent's method is not visible.",
    "mathSolution": "Private methods are not inherited and cannot be overridden.",
    "codeSolution": "public class Main {\n    static class Parent {\n        private void show() { System.out.println(\"Parent private\"); }\n        public void callShow() { show(); }\n    }\n    static class Child extends Parent {\n        // This is a new method, not overriding\n        private void show() { System.out.println(\"Child private\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.callShow(); // calls Parent's show (private)\n    }\n}",
    "hint": "Private methods are hidden, not overridden."
  },
  {
    "id": "polymorphism_34",
    "topicId": "polymorphism",
    "question": "Use method overloading with `int` and `Integer` parameters. Show which one gets called when passing an `int` and when passing an `Integer`.",
    "mathSolution": "Primitive int matches int method; autoboxing calls Integer method only if int method is absent.",
    "codeSolution": "public class Main {\n    static void test(int x) { System.out.println(\"int version: \" + x); }\n    static void test(Integer x) { System.out.println(\"Integer version: \" + x); }\n    public static void main(String[] args) {\n        test(5);      // calls int\n        test(Integer.valueOf(10)); // calls Integer\n    }\n}",
    "hint": "Exact match before autoboxing."
  },
  {
    "id": "polymorphism_35",
    "topicId": "polymorphism",
    "question": "Write a polymorphic method that accepts a `List<? super Integer>` and adds numbers 1 to 5 to it. Show it works with `List<Number>` and `List<Object>`.",
    "mathSolution": "Lower bounded wildcard allows adding Integer or its subclasses.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static void addNumbers(List<? super Integer> list) {\n        for (int i = 1; i <= 5; i++) list.add(i);\n    }\n    public static void main(String[] args) {\n        List<Number> numList = new ArrayList<>();\n        List<Object> objList = new ArrayList<>();\n        addNumbers(numList);\n        addNumbers(objList);\n        System.out.println(\"Numbers: \" + numList);\n        System.out.println(\"Objects: \" + objList);\n    }\n}",
    "hint": "`? super Integer` allows adding Integers."
  },
  {
    "id": "polymorphism_36",
    "topicId": "polymorphism",
    "question": "Create a method that returns a `Function<T, R>` that converts a string to its length (String -> Integer) and another that converts integer to string (Integer -> String). Compose them.",
    "mathSolution": "Function composition using `andThen`.",
    "codeSolution": "import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<String, Integer> length = s -> s.length();\n        Function<Integer, String> toString = n -> \"Number: \" + n;\n        Function<String, String> lengthToString = length.andThen(toString);\n        System.out.println(lengthToString.apply(\"Hello\"));\n    }\n}",
    "hint": "Use `andThen` to chain functions."
  },
  {
    "id": "polymorphism_37",
    "topicId": "polymorphism",
    "question": "Write a polymorphic method that takes a `Consumer<T>` and applies it to each element of a list. Use it with different consumers (print, square).",
    "mathSolution": "Consumer is a functional interface for side effects.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Consumer;\npublic class Main {\n    static <T> void forEach(List<T> list, Consumer<T> consumer) {\n        for (T t : list) consumer.accept(t);\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        forEach(nums, n -> System.out.println(\"Value: \" + n));\n        List<String> words = Arrays.asList(\"a\", \"bc\", \"def\");\n        forEach(words, s -> System.out.println(\"Length: \" + s.length()));\n    }\n}",
    "hint": "Consumer can perform any action."
  },
  {
    "id": "polymorphism_38",
    "topicId": "polymorphism",
    "question": "Demonstrate that a subclass can return a more specific type when overriding a method (covariant return). Example: Parent method returns `Number`, Child returns `Integer`.",
    "mathSolution": "Covariant return allows narrowing return type.",
    "codeSolution": "public class Main {\n    static class Parent {\n        Number getValue() { return 10; }\n    }\n    static class Child extends Parent {\n        @Override\n        Integer getValue() { return 20; }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.println(p.getValue());\n    }\n}",
    "hint": "Overriding method can return a subtype of the parent's return type."
  },
  {
    "id": "polymorphism_39",
    "topicId": "polymorphism",
    "question": "Write a method that accepts a `Predicate<T>` and filters a list, returning a new list. Use it to filter even numbers and strings starting with 'A'.",
    "mathSolution": "Predicate tests condition; filter collects matching elements.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Predicate;\npublic class Main {\n    static <T> List<T> filter(List<T> list, Predicate<T> pred) {\n        List<T> result = new ArrayList<>();\n        for (T t : list) if (pred.test(t)) result.add(t);\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1,2,3,4,5,6);\n        System.out.println(filter(nums, n -> n % 2 == 0));\n        List<String> words = Arrays.asList(\"Apple\", \"Banana\", \"Avocado\");\n        System.out.println(filter(words, s -> s.startsWith(\"A\")));\n    }\n}",
    "hint": "Predicate returns boolean for each element."
  },
  {
    "id": "polymorphism_40",
    "topicId": "polymorphism",
    "question": "Create an enum `Operation` with constants `PLUS`, `MINUS`, `TIMES`, `DIVIDE`. Each constant implements an abstract method `apply(int a, int b)`. Use polymorphism to perform arithmetic.",
    "mathSolution": "Enum with abstract method per constant.",
    "codeSolution": "public class Main {\n    enum Operation {\n        PLUS { int apply(int a, int b) { return a + b; } },\n        MINUS { int apply(int a, int b) { return a - b; } },\n        TIMES { int apply(int a, int b) { return a * b; } },\n        DIVIDE { int apply(int a, int b) { return a / b; } };\n        abstract int apply(int a, int b);\n    }\n    public static void main(String[] args) {\n        int x = 10, y = 5;\n        for (Operation op : Operation.values()) {\n            System.out.println(op + \": \" + op.apply(x, y));\n        }\n    }\n}",
    "hint": "Enum constants can have their own method implementations."
  }
);