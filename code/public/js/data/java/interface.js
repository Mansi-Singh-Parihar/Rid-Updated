QuizData.questions.push(
  // BASIC INTERFACES (4)
  {
    id: "interface_1",
    topicId: "interface",
    question: "Create and implement a basic interface.",
    mathSolution: "Interface defines contract, classes implement",
    codeSolution: 'public class Main {\n    interface Drawable { void draw(); }\n    static class Circle implements Drawable { public void draw() { System.out.println("Drawing circle"); } }\n    static class Rectangle implements Drawable { public void draw() { System.out.println("Drawing rectangle"); } }\n    public static void main(String[] args) {\n        Drawable d1 = new Circle();\n        Drawable d2 = new Rectangle();\n        d1.draw();\n        d2.draw();\n    }\n}',
    hint: "Interface methods are implicitly public abstract",
  },
  {
    id: "interface_2",
    topicId: "interface",
    question: "Interface with constants (fields).",
    mathSolution: "Interface fields are public static final by default",
    codeSolution: 'public class Main {\n    interface Constants { int MAX_VALUE = 100; String APP_NAME = "MyApp"; double PI = 3.14159; }\n    static class Calculator implements Constants {\n        void display() { System.out.println("App: " + APP_NAME); System.out.println("Max: " + MAX_VALUE); System.out.println("PI: " + PI); }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        calc.display();\n        System.out.println("PI from interface: " + Constants.PI);\n    }\n}',
    hint: "Interface fields are implicitly public static final",
  },
  {
    id: "interface_3",
    topicId: "interface",
    question: "Implement multiple interfaces.",
    mathSolution: "A class can implement multiple interfaces",
    codeSolution: 'public class Main {\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    interface Runnable { void run(); }\n    static class Duck implements Flyable, Swimmable, Runnable {\n        public void fly() { System.out.println("Duck flying"); }\n        public void swim() { System.out.println("Duck swimming"); }\n        public void run() { System.out.println("Duck running"); }\n    }\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.fly();\n        d.swim();\n        d.run();\n        System.out.println("Duck implements: " + ((d instanceof Flyable) ? "Flyable " : "") + ((d instanceof Swimmable) ? "Swimmable " : "") + ((d instanceof Runnable) ? "Runnable" : ""));\n    }\n}',
    hint: "Java supports multiple inheritance of type",
  },
  {
    id: "interface_4",
    topicId: "interface",
    question: "Interface extending another interface.",
    mathSolution: "Interfaces can extend multiple interfaces",
    codeSolution: 'public class Main {\n    interface BasicAnimal { void eat(); void sleep(); }\n    interface Pet { void play(); }\n    interface FriendlyDog extends BasicAnimal, Pet { void wagTail(); }\n    static class Labrador implements FriendlyDog {\n        public void eat() { System.out.println("Labrador eating"); }\n        public void sleep() { System.out.println("Labrador sleeping"); }\n        public void play() { System.out.println("Labrador playing"); }\n        public void wagTail() { System.out.println("Labrador wagging tail"); }\n    }\n    public static void main(String[] args) {\n        Labrador lab = new Labrador();\n        lab.eat();\n        lab.sleep();\n        lab.play();\n        lab.wagTail();\n    }\n}',
    hint: "Interface extends can combine contracts",
  },

  // DEFAULT METHODS (4)
  {
    id: "interface_5",
    topicId: "interface",
    question: "Interface with default method (Java 8+).",
    mathSolution: "Default methods provide implementation in interfaces",
    codeSolution: 'public class Main {\n    interface Logger {\n        void log(String message);\n        default void logInfo(String message) { log("[INFO] " + message); }\n        default void logError(String message) { log("[ERROR] " + message); }\n    }\n    static class ConsoleLogger implements Logger {\n        public void log(String message) { System.out.println("Console: " + message); }\n    }\n    static class FileLogger implements Logger {\n        public void log(String message) { System.out.println("File: " + message); }\n        public void logInfo(String message) { log("[FILE-INFO] " + message); }\n    }\n    public static void main(String[] args) {\n        ConsoleLogger console = new ConsoleLogger();\n        console.logInfo("Application started");\n        console.logError("Null pointer");\n        FileLogger file = new FileLogger();\n        file.logInfo("Data saved");\n    }\n}',
    hint: "Default methods add functionality without breaking existing code",
  },
  {
    id: "interface_6",
    topicId: "interface",
    question: "Default method with multiple inheritance conflict.",
    mathSolution: "Class must override conflicting default methods",
    codeSolution: 'public class Main {\n    interface A { default void show() { System.out.println("A show"); } }\n    interface B { default void show() { System.out.println("B show"); } }\n    static class C implements A, B {\n        public void show() { A.super.show(); B.super.show(); System.out.println("C show"); }\n    }\n    static class D implements A {}\n    static class E implements A, B {\n        public void show() { A.super.show(); }\n    }\n    public static void main(String[] args) {\n        new C().show();\n        new D().show();\n        new E().show();\n    }\n}',
    hint: "Use super to call specific interface default method",
  },
  {
  id: "interface_7",
  topicId: "interface",
  question: "Default method vs abstract class method.",
  mathSolution: "Class methods take precedence over default methods",
  codeSolution: 'public class Main {\n    interface Playable { default void play() { System.out.println("Playing in interface"); } }\n    static abstract class Game { public void play() { System.out.println("Playing in abstract class"); } }\n    static class VideoGame extends Game implements Playable {}\n    static class BoardGame implements Playable {}\n    static class CardGame extends Game implements Playable {\n        public void play() { super.play(); Playable.super.play(); System.out.println("Playing card game"); }\n    }\n    public static void main(String[] args) {\n        new VideoGame().play();\n        new BoardGame().play();\n        new CardGame().play();\n    }\n}',
  hint: "Class methods take precedence over default methods",
},
  {
    id: "interface_8",
    topicId: "interface",
    question: "Default method with diamond inheritance.",
    mathSolution: "Diamond problem resolution in interfaces",
    codeSolution: 'public class Main {\n    interface X { default void message() { System.out.println("X message"); } }\n    interface Y extends X { default void message() { System.out.println("Y message"); } }\n    interface Z extends X { default void message() { System.out.println("Z message"); } }\n    interface W extends Y, Z { default void message() { Y.super.message(); Z.super.message(); System.out.println("W message"); } }\n    static class MyClass implements W {}\n    static class MyClass2 implements Y, Z {\n        public void message() { Y.super.message(); System.out.println("MyClass2 message"); }\n    }\n    public static void main(String[] args) {\n        new MyClass().message();\n        new MyClass2().message();\n    }\n}',
    hint: "Most specific default method wins, otherwise override required",
  },

  // STATIC METHODS IN INTERFACES (3)
  {
    id: "interface_9",
    topicId: "interface",
    question: "Static methods in interfaces (Java 8+).",
    mathSolution: "Static methods belong to interface, not implementing classes",
    codeSolution: 'public class Main {\n    interface MathOperations {\n        static int add(int a, int b) { return a + b; }\n        static int multiply(int a, int b) { return a * b; }\n        static double power(double base, double exp) { return Math.pow(base, exp); }\n    }\n    static class Calculator implements MathOperations {}\n    public static void main(String[] args) {\n        System.out.println("Add: " + MathOperations.add(10, 20));\n        System.out.println("Multiply: " + MathOperations.multiply(5, 6));\n        System.out.println("Power: " + MathOperations.power(2, 3));\n    }\n}',
    hint: "Static methods in interfaces are like utility methods",
  },
  {
    id: "interface_10",
    topicId: "interface",
    question: "Static method vs default method.",
    mathSolution: "Static methods are not inherited, default methods are",
    codeSolution: 'public class Main {\n    interface Utility {\n        static void staticMethod() { System.out.println("Static method in interface"); }\n        default void defaultMethod() { System.out.println("Default method in interface"); }\n    }\n    static class MyClass implements Utility {\n        void test() { defaultMethod(); Utility.staticMethod(); }\n    }\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        obj.defaultMethod();\n        Utility.staticMethod();\n        obj.test();\n    }\n}',
    hint: "Static methods are not part of the contract for implementing classes",
  },
  {
    id: "interface_11",
    topicId: "interface",
    question: "Private methods in interfaces (Java 9+).",
    mathSolution: "Private methods help share code between default methods",
    codeSolution: 'public class Main {\n    interface PaymentProcessor {\n        default void processCreditCard(double amount) { validateAmount(amount); log("Processing credit card payment: $" + amount); chargeCard(amount); }\n        default void processPayPal(double amount) { validateAmount(amount); log("Processing PayPal payment: $" + amount); chargePayPal(amount); }\n        private void validateAmount(double amount) { System.out.println("Amount validated: $" + amount); }\n        private void log(String message) { System.out.println("[LOG] " + message); }\n        private static void chargeCard(double amount) { System.out.println("Charging credit card: $" + amount); }\n        private static void chargePayPal(double amount) { System.out.println("Charging PayPal account: $" + amount); }\n    }\n    static class MyProcessor implements PaymentProcessor {}\n    public static void main(String[] args) {\n        MyProcessor processor = new MyProcessor();\n        processor.processCreditCard(100.50);\n        processor.processPayPal(75.25);\n    }\n}',
    hint: "Private methods encapsulate common logic in interfaces",
  },

  // MARKER INTERFACES (2)
  {
    id: "interface_12",
    topicId: "interface",
    question: "Create and use marker interface.",
    mathSolution: "Marker interfaces have no methods, just tag classes",
    codeSolution: 'public class Main {\n    interface Auditable {}\n    static class Employee implements Auditable, Cloneable {\n        String name; double salary;\n        Employee(String n, double s) { name = n; salary = s; }\n        public Employee clone() throws CloneNotSupportedException { return (Employee) super.clone(); }\n    }\n    static class Product {}\n    static class AuditService {\n        static void audit(Object obj) { System.out.println(obj.getClass().getSimpleName() + (obj instanceof Auditable ? " is auditable" : " is not auditable")); }\n    }\n    public static void main(String[] args) throws Exception {\n        Employee emp = new Employee("Alice", 50000);\n        Product prod = new Product();\n        AuditService.audit(emp);\n        AuditService.audit(prod);\n        Employee emp2 = emp.clone();\n        System.out.println(emp2.name + " - cloned");\n    }\n}',
    hint: "Marker interfaces add metadata to classes",
  },
  {
    id: "interface_13",
    topicId: "interface",
    question: "Custom marker interface for runtime behavior.",
    mathSolution: "Marker interfaces enable conditional logic",
    codeSolution: 'public class Main {\n    interface Cacheable {}\n    interface Loggable {}\n    interface Validatable {}\n    static class User implements Cacheable, Validatable { String username, password; User(String u, String p) { username = u; password = p; } }\n    static class Order implements Loggable, Validatable { int orderId; double amount; Order(int id, double amt) { orderId = id; amount = amt; } }\n    static class Discount implements Cacheable { String code; double percentage; Discount(String c, double p) { code = c; percentage = p; } }\n    static class ServiceLayer {\n        void processObject(Object obj) {\n            System.out.println("\\nProcessing: " + obj.getClass().getSimpleName());\n            if(obj instanceof Validatable) System.out.println("  - Validating object");\n            if(obj instanceof Cacheable) System.out.println("  - Caching object");\n            if(obj instanceof Loggable) System.out.println("  - Logging operation");\n        }\n    }\n    public static void main(String[] args) {\n        ServiceLayer service = new ServiceLayer();\n        service.processObject(new User("john", "pass123"));\n        service.processObject(new Order(1001, 299.99));\n        service.processObject(new Discount("SAVE10", 10.0));\n    }\n}',
    hint: "Marker interfaces enable runtime type checking",
  },

  // FUNCTIONAL INTERFACES (3)
  {
    id: "interface_14",
    topicId: "interface",
    question: "Create custom functional interface.",
    mathSolution: "@FunctionalInterface ensures single abstract method",
    codeSolution: 'public class Main {\n    @FunctionalInterface interface StringProcessor { String process(String input); }\n    public static void main(String[] args) {\n        StringProcessor toUpper = s -> s.toUpperCase();\n        StringProcessor toLower = s -> s.toLowerCase();\n        StringProcessor reverse = s -> new StringBuilder(s).reverse().toString();\n        System.out.println(toUpper.process("hello"));\n        System.out.println(toLower.process("WORLD"));\n        System.out.println(reverse.process("Java"));\n    }\n}',
    hint: "@FunctionalInterface is optional but recommended",
  },
  {
    id: "interface_15",
    topicId: "interface",
    question: "Predefined functional interfaces in java.util.function.",
    mathSolution: "Java provides common functional interfaces",
    codeSolution: 'import java.util.function.*; import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<String> isEmpty = s -> s.isEmpty();\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        System.out.println("Is \'hello\' empty? " + isEmpty.test("hello"));\n        System.out.println("Is 4 even? " + isEven.test(4));\n        Function<String, Integer> lengthFunc = s -> s.length();\n        System.out.println("Length: " + lengthFunc.apply("Hello"));\n        Consumer<String> printer = s -> System.out.print(s + " ");\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(printer);\n        System.out.println();\n        Supplier<Double> random = () -> Math.random();\n        System.out.println("Random: " + random.get());\n        BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;\n        System.out.println("Sum: " + sum.apply(10, 20));\n        UnaryOperator<String> quote = s -> "\'" + s + "\'";\n        System.out.println(quote.apply("Hello"));\n    }\n}',
    hint: "java.util.function package has many functional interfaces",
  },
  {
    id: "interface_16",
    topicId: "interface",
    question: "Compose functional interfaces.",
    mathSolution: "Functional interfaces can be composed using default methods",
    codeSolution: 'import java.util.function.*;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<String> startsWithA = s -> s.startsWith("A");\n        Predicate<String> endsWithE = s -> s.endsWith("e");\n        Predicate<String> startsWithAAndEndsWithE = startsWithA.and(endsWithE);\n        System.out.println("\'Alice\' starts with A and ends with e? " + startsWithAAndEndsWithE.test("Alice"));\n        \n        Function<Integer, Integer> square = x -> x * x;\n        Function<Integer, Integer> addOne = x -> x + 1;\n        Function<Integer, Integer> squareThenAddOne = square.andThen(addOne);\n        System.out.println("Square then add one (5): " + squareThenAddOne.apply(5));\n        \n        Consumer<String> print = s -> System.out.print(s);\n        Consumer<String> printNewLine = s -> System.out.println();\n        Consumer<String> printWithStars = s -> System.out.print("*" + s + "*");\n        Consumer<String> printPipeline = print.andThen(printWithStars).andThen(printNewLine);\n        printPipeline.accept("Hello");\n    }\n}',
    hint: "Functional interfaces have andThen(), compose(), and(), or() methods",
  },

  // INTERFACE VS ABSTRACT CLASS (3)
  {
    id: "interface_17",
    topicId: "interface",
    question: "Interface vs Abstract Class - when to use.",
    mathSolution: "Abstract class for common state, interface for contract",
    codeSolution: 'public class Main {\n    static abstract class Vehicle {\n        protected String brand; protected int year;\n        Vehicle(String brand, int year) { this.brand = brand; this.year = year; }\n        abstract void start();\n        void displayInfo() { System.out.println(brand + " (" + year + ")"); }\n    }\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    static class FlyingCar extends Vehicle implements Flyable, Swimmable {\n        FlyingCar(String brand, int year) { super(brand, year); }\n        void start() { System.out.println("Flying car starting"); }\n        public void fly() { System.out.println("Flying car flying"); }\n        public void swim() { System.out.println("Flying car swimming"); }\n    }\n    public static void main(String[] args) {\n        FlyingCar fc = new FlyingCar("Future Motors", 2025);\n        fc.displayInfo();\n        fc.start();\n        fc.fly();\n        fc.swim();\n    }\n}',
    hint: "Abstract class: is-a; Interface: can-do",
  },
  {
    id: "interface_18",
    topicId: "interface",
    question: "Interface evolution - adding methods without breaking code.",
    mathSolution: "Default methods enable interface evolution",
    codeSolution: 'public class Main {\n    interface CalculatorV1 { int add(int a, int b); }\n    static class SimpleCalc implements CalculatorV1 { public int add(int a, int b) { return a + b; } }\n    interface CalculatorV2 extends CalculatorV1 {\n        default int subtract(int a, int b) { return a - b; }\n        default int multiply(int a, int b) { return a * b; }\n    }\n    static class AdvancedCalc implements CalculatorV2 {\n        public int add(int a, int b) { return a + b; }\n        public int multiply(int a, int b) { return a * b * 2; }\n    }\n    public static void main(String[] args) {\n        SimpleCalc calc1 = new SimpleCalc();\n        System.out.println("Add: " + calc1.add(10, 5));\n        AdvancedCalc calc2 = new AdvancedCalc();\n        System.out.println("Add: " + calc2.add(10, 5));\n        System.out.println("Subtract: " + calc2.subtract(10, 5));\n        System.out.println("Multiply: " + calc2.multiply(10, 5));\n    }\n}',
    hint: "Default methods allow interface evolution without breaking existing implementations",
  },
  {
    id: "interface_19",
    topicId: "interface",
    question: "Adapter pattern using interface.",
    mathSolution: "Adapter makes incompatible interfaces work together",
    codeSolution: 'public class Main {\n    interface MediaPlayer { void play(String audioType, String fileName); }\n    interface AdvancedMediaPlayer { void playVlc(String fileName); void playMp4(String fileName); }\n    static class VlcPlayer implements AdvancedMediaPlayer { public void playVlc(String fn) { System.out.println("Playing vlc file: " + fn); } public void playMp4(String fn) {} }\n    static class Mp4Player implements AdvancedMediaPlayer { public void playVlc(String fn) {} public void playMp4(String fn) { System.out.println("Playing mp4 file: " + fn); } }\n    static class MediaAdapter implements MediaPlayer {\n        AdvancedMediaPlayer advancedPlayer;\n        MediaAdapter(String audioType) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedPlayer = new VlcPlayer();\n            else if(audioType.equalsIgnoreCase("mp4")) advancedPlayer = new Mp4Player();\n        }\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedPlayer.playVlc(fileName);\n            else if(audioType.equalsIgnoreCase("mp4")) advancedPlayer.playMp4(fileName);\n        }\n    }\n    static class AudioPlayer implements MediaPlayer {\n        MediaAdapter adapter;\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("mp3")) System.out.println("Playing mp3 file: " + fileName);\n            else if(audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {\n                adapter = new MediaAdapter(audioType);\n                adapter.play(audioType, fileName);\n            } else System.out.println("Invalid media type: " + audioType);\n        }\n    }\n    public static void main(String[] args) {\n        AudioPlayer player = new AudioPlayer();\n        player.play("mp3", "song.mp3");\n        player.play("mp4", "video.mp4");\n        player.play("vlc", "movie.vlc");\n        player.play("avi", "random.avi");\n    }\n}',
    hint: "Adapter pattern uses interfaces to make incompatible classes work together",
  },

  // NESTED INTERFACES (2)
  {
    id: "interface_20",
    topicId: "interface",
    question: "Interface inside a class (nested interface).",
    mathSolution: "Interfaces can be nested within classes",
    codeSolution: 'public class Main {\n    static class OuterClass {\n        private String data = "Outer data";\n        interface NestedInterface { void display(); }\n        class Inner implements NestedInterface { public void display() { System.out.println("Inner accessing: " + data); } }\n        NestedInterface getInner() { return new Inner(); }\n    }\n    static class OutsideImpl implements OuterClass.NestedInterface { public void display() { System.out.println("Outside implementation"); } }\n    public static void main(String[] args) {\n        OuterClass outer = new OuterClass();\n        OuterClass.NestedInterface inner = outer.getInner();\n        inner.display();\n        OuterClass.NestedInterface outside = new OutsideImpl();\n        outside.display();\n        OuterClass.NestedInterface anonymous = new OuterClass.NestedInterface() { public void display() { System.out.println("Anonymous implementation"); } };\n        anonymous.display();\n    }\n}',
    hint: "Nested interfaces are static by default",
  },
  {
    id: "interface_21",
    topicId: "interface",
    question: "Interface inside another interface (nested interface).",
    mathSolution: "Interfaces can be nested within interfaces",
    codeSolution: 'public class Main {\n    interface OuterInterface {\n        void outerMethod();\n        interface InnerInterface { void innerMethod(); }\n        interface Constants { int MAX = 100; int MIN = 0; String APP_NAME = "MyApp"; }\n    }\n    static class MyClass implements OuterInterface, OuterInterface.InnerInterface {\n        public void outerMethod() { System.out.println("Outer method implementation"); }\n        public void innerMethod() { System.out.println("Inner method implementation"); }\n        void showConstants() { System.out.println("Max: " + OuterInterface.Constants.MAX + ", Min: " + OuterInterface.Constants.MIN + ", App: " + OuterInterface.Constants.APP_NAME); }\n    }\n    static class OnlyInner implements OuterInterface.InnerInterface { public void innerMethod() { System.out.println("Only inner implemented"); } }\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        obj.outerMethod();\n        obj.innerMethod();\n        obj.showConstants();\n        OnlyInner inner = new OnlyInner();\n        inner.innerMethod();\n    }\n}',
    hint: "Nested interfaces help organize related interfaces",
  },

  // REAL-WORLD PATTERNS (4)
  {
    id: "interface_22",
    topicId: "interface",
    question: "DAO pattern using interfaces.",
    mathSolution: "Interface defines data access contract",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class User { int id; String name; String email; User(int id, String n, String e) { this.id = id; name = n; email = e; } public String toString() { return id + ": " + name + " <" + email + ">"; } }\n    interface UserDAO {\n        void save(User user); User findById(int id); List<User> findAll(); void update(User user); void delete(int id); User findByEmail(String email);\n    }\n    static class InMemoryUserDAO implements UserDAO {\n        private Map<Integer, User> database = new HashMap<>();\n        private int nextId = 1;\n        public void save(User user) { user.id = nextId++; database.put(user.id, user); System.out.println("Saved: " + user); }\n        public User findById(int id) { return database.get(id); }\n        public List<User> findAll() { return new ArrayList<>(database.values()); }\n        public void update(User user) { if(database.containsKey(user.id)) { database.put(user.id, user); System.out.println("Updated: " + user); } }\n        public void delete(int id) { database.remove(id); System.out.println("Deleted user with id: " + id); }\n        public User findByEmail(String email) { for(User u : database.values()) if(u.email.equals(email)) return u; return null; }\n    }\n    public static void main(String[] args) {\n        UserDAO userDAO = new InMemoryUserDAO();\n        userDAO.save(new User(0, "Alice", "alice@email.com"));\n        userDAO.save(new User(0, "Bob", "bob@email.com"));\n        System.out.println("All users: " + userDAO.findAll());\n        System.out.println("Find by id 1: " + userDAO.findById(1));\n        System.out.println("Find by email: " + userDAO.findByEmail("bob@email.com"));\n        User alice = userDAO.findById(1);\n        alice.name = "Alice Smith";\n        userDAO.update(alice);\n        userDAO.delete(2);\n        System.out.println("After delete: " + userDAO.findAll());\n    }\n}',
    hint: "DAO interfaces separate contract from implementation",
  },
  {
    id: "interface_23",
    topicId: "interface",
    question: "Observer pattern using interfaces.",
    mathSolution: "Subject notifies observers through interface",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Observer { void update(String message); }\n    interface Subject { void attach(Observer o); void detach(Observer o); void notifyObservers(String message); }\n    static class NewsAgency implements Subject {\n        private List<Observer> observers = new ArrayList<>();\n        public void attach(Observer o) { observers.add(o); }\n        public void detach(Observer o) { observers.remove(o); }\n        public void notifyObservers(String message) { for(Observer o : observers) o.update(message); }\n        public void publishNews(String news) { System.out.println("\\nNews published: " + news); notifyObservers(news); }\n    }\n    static class EmailSubscriber implements Observer { String name; EmailSubscriber(String n) { name = n; } public void update(String message) { System.out.println("Email to " + name + ": Breaking news - " + message); } }\n    static class SMSSubscriber implements Observer { String phone; SMSSubscriber(String p) { phone = p; } public void update(String message) { System.out.println("SMS to " + phone + ": Alert - " + message); } }\n    static class AppNotification implements Observer { public void update(String message) { System.out.println("Mobile app notification: " + message); } }\n    public static void main(String[] args) {\n        NewsAgency agency = new NewsAgency();\n        Observer email1 = new EmailSubscriber("Alice");\n        Observer email2 = new EmailSubscriber("Bob");\n        Observer sms = new SMSSubscriber("+1234567890");\n        Observer app = new AppNotification();\n        agency.attach(email1); agency.attach(email2); agency.attach(sms); agency.attach(app);\n        agency.publishNews("Java 21 released!");\n        agency.detach(email2);\n        agency.publishNews("New features in Java");\n    }\n}',
    hint: "Observer pattern uses interface for loose coupling",
  },
  {
    id: "interface_24",
    topicId: "interface",
    question: "Strategy pattern using interfaces.",
    mathSolution: "Strategy interface defines algorithm contract",
    codeSolution: 'public class Main {\n    interface CompressionStrategy { byte[] compress(byte[] data); String getAlgorithmName(); }\n    static class ZipCompression implements CompressionStrategy { public byte[] compress(byte[] data) { System.out.println("Compressing using ZIP algorithm"); return data; } public String getAlgorithmName() { return "ZIP"; } }\n    static class GzipCompression implements CompressionStrategy { public byte[] compress(byte[] data) { System.out.println("Compressing using GZIP algorithm"); return data; } public String getAlgorithmName() { return "GZIP"; } }\n    static class RarCompression implements CompressionStrategy { public byte[] compress(byte[] data) { System.out.println("Compressing using RAR algorithm"); return data; } public String getAlgorithmName() { return "RAR"; } }\n    static class FileCompressor {\n        private CompressionStrategy strategy;\n        void setStrategy(CompressionStrategy s) { strategy = s; }\n        void compressFile(String filename, byte[] data) { System.out.println("Compressing " + filename + " using " + strategy.getAlgorithmName()); strategy.compress(data); System.out.println("Compression complete"); }\n    }\n    public static void main(String[] args) {\n        FileCompressor compressor = new FileCompressor();\n        byte[] data = "Sample file content".getBytes();\n        compressor.setStrategy(new ZipCompression());\n        compressor.compressFile("document.txt", data);\n        compressor.setStrategy(new GzipCompression());\n        compressor.compressFile("image.jpg", data);\n        compressor.setStrategy(new RarCompression());\n        compressor.compressFile("backup.dat", data);\n    }\n}',
    hint: "Strategy pattern encapsulates interchangeable algorithms",
  },
  {
    id: "interface_25",
    topicId: "interface",
    question: "Factory pattern with interface.",
    mathSolution: "Factory creates objects that implement common interface",
    codeSolution: 'public class Main {\n    interface Button { void render(); void onClick(); }\n    static class WindowsButton implements Button { public void render() { System.out.println("Rendering Windows button"); } public void onClick() { System.out.println("Windows button clicked"); } }\n    static class MacButton implements Button { public void render() { System.out.println("Rendering Mac button"); } public void onClick() { System.out.println("Mac button clicked"); } }\n    static class LinuxButton implements Button { public void render() { System.out.println("Rendering Linux button"); } public void onClick() { System.out.println("Linux button clicked"); } }\n    interface ButtonFactory { Button createButton(); }\n    static class WindowsFactory implements ButtonFactory { public Button createButton() { return new WindowsButton(); } }\n    static class MacFactory implements ButtonFactory { public Button createButton() { return new MacButton(); } }\n    static class LinuxFactory implements ButtonFactory { public Button createButton() { return new LinuxButton(); } }\n    static class UIFactory {\n        static ButtonFactory getFactoryForOS() {\n            String os = System.getProperty("os.name").toLowerCase();\n            if(os.contains("win")) return new WindowsFactory();\n            if(os.contains("mac")) return new MacFactory();\n            return new LinuxFactory();\n        }\n    }\n    public static void main(String[] args) {\n        ButtonFactory factory = UIFactory.getFactoryForOS();\n        Button button = factory.createButton();\n        button.render();\n        button.onClick();\n    }\n}',
    hint: "Factory pattern uses interfaces to decouple client from concrete classes",
  },
   {
    "id": "interface_26",
    "topicId": "interface",
    "question": "Create a generic interface `Transformer<T, R>` with a method `R transform(T input)`. Implement it to convert String to its length and Integer to its string representation.",
    "mathSolution": "Generic interfaces allow type parameters for flexible transformations.",
    "codeSolution": "public class Main {\n    interface Transformer<T, R> {\n        R transform(T input);\n    }\n    public static void main(String[] args) {\n        Transformer<String, Integer> length = s -> s.length();\n        System.out.println(\"Length of 'Java': \" + length.transform(\"Java\"));\n        Transformer<Integer, String> toString = n -> \"Number: \" + n;\n        System.out.println(toString.transform(42));\n    }\n}",
    "hint": "Declare interface with two type parameters and implement using lambda."
  },
  {
    "id": "interface_27",
    "topicId": "interface",
    "question": "Define an interface with a generic method that accepts a bounded wildcard parameter. Implement it to process a list of numbers and return their sum.",
    "mathSolution": "Generic methods with bounded wildcards increase flexibility.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Calculator {\n        double sum(List<? extends Number> numbers);\n    }\n    static class SumCalculator implements Calculator {\n        public double sum(List<? extends Number> numbers) {\n            double total = 0;\n            for (Number n : numbers) total += n.doubleValue();\n            return total;\n        }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new SumCalculator();\n        System.out.println(\"Sum of ints: \" + calc.sum(Arrays.asList(1,2,3)));\n        System.out.println(\"Sum of doubles: \" + calc.sum(Arrays.asList(1.5,2.5,3.5)));\n    }\n}",
    "hint": "Use `? extends Number` to accept any Number subclass."
  },
  {
    "id": "interface_28",
    "topicId": "interface",
    "question": "Create a functional interface `Validator<T>` with a method `boolean validate(T t)`. Use a lambda to validate that a string is not empty and another to validate that an integer is positive.",
    "mathSolution": "Functional interfaces are ideal for validation rules.",
    "codeSolution": "public class Main {\n    @FunctionalInterface\n    interface Validator<T> {\n        boolean validate(T t);\n    }\n    public static void main(String[] args) {\n        Validator<String> nonEmpty = s -> s != null && !s.trim().isEmpty();\n        Validator<Integer> positive = n -> n > 0;\n        System.out.println(\"Is 'Hello' non-empty? \" + nonEmpty.validate(\"Hello\"));\n        System.out.println(\"Is '' non-empty? \" + nonEmpty.validate(\"\"));\n        System.out.println(\"Is 5 positive? \" + positive.validate(5));\n        System.out.println(\"Is -3 positive? \" + positive.validate(-3));\n    }\n}",
    "hint": "Define a functional interface with single abstract method."
  },
  {
    "id": "interface_29",
    "topicId": "interface",
    "question": "Design an interface `Sortable` with a default method `void sort(List<T> list)` that uses `Collections.sort`. Provide a static method that returns a Comparator for natural order.",
    "mathSolution": "Default methods can provide common behavior; static methods can offer utilities.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Sortable {\n        default <T extends Comparable<T>> void sort(List<T> list) {\n            Collections.sort(list);\n        }\n        static <T extends Comparable<T>> Comparator<T> naturalOrder() {\n            return Comparator.naturalOrder();\n        }\n    }\n    static class Sorter implements Sortable {}\n    public static void main(String[] args) {\n        Sorter sorter = new Sorter();\n        List<Integer> numbers = new ArrayList<>(Arrays.asList(3,1,4,1,5));\n        sorter.sort(numbers);\n        System.out.println(\"Sorted numbers: \" + numbers);\n        List<String> words = Arrays.asList(\"banana\", \"apple\", \"cherry\");\n        words.sort(Sortable.naturalOrder());\n        System.out.println(\"Sorted words: \" + words);\n    }\n}",
    "hint": "Use default method to sort, static method to return comparator."
  },
  {
    "id": "interface_30",
    "topicId": "interface",
    "question": "Create an interface `Logger` with a default method that logs a message with a timestamp. Provide a concrete class that also implements a custom formatting.",
    "mathSolution": "Default methods can provide reusable logic across implementations.",
    "codeSolution": "import java.time.LocalDateTime;\npublic class Main {\n    interface Logger {\n        void log(String message);\n        default void logWithTimestamp(String message) {\n            log(\"[\" + LocalDateTime.now() + \"] \" + message);\n        }\n    }\n    static class ConsoleLogger implements Logger {\n        public void log(String message) {\n            System.out.println(\"CONSOLE: \" + message);\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        ConsoleLogger logger = new ConsoleLogger();\n        logger.logWithTimestamp(\"Application started\");\n        Thread.sleep(100);\n        logger.logWithTimestamp(\"Processing...\");\n    }\n}",
    "hint": "Default method can call abstract method to ensure logging with timestamp."
  },
  {
    "id": "interface_31",
    "topicId": "interface",
    "question": "Define an interface `Command` with a method `void execute()`. Implement it using lambda for different actions (print, compute). Store commands in a list and execute all.",
    "mathSolution": "Command pattern with lambda simplifies code.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Command {\n        void execute();\n    }\n    public static void main(String[] args) {\n        List<Command> commands = new ArrayList<>();\n        commands.add(() -> System.out.println(\"Hello World\"));\n        commands.add(() -> System.out.println(\"Current time: \" + System.currentTimeMillis()));\n        commands.add(() -> {\n            int sum = 0;\n            for (int i = 1; i <= 5; i++) sum += i;\n            System.out.println(\"Sum of 1..5: \" + sum);\n        });\n        for (Command cmd : commands) cmd.execute();\n    }\n}",
    "hint": "Functional interface `Command` can be implemented with lambda expressions."
  },
  {
    "id": "interface_32",
    "topicId": "interface",
    "question": "Create an interface `Cacheable` with a default method to compute a key from an object. Use it in a class that stores objects in a map.",
    "mathSolution": "Default method can define common behavior across implementations.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Cacheable {\n        default String getKey() {\n            return this.getClass().getSimpleName() + \"_\" + hashCode();\n        }\n    }\n    static class Product implements Cacheable {\n        String name;\n        Product(String name) { this.name = name; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        Map<String, Object> cache = new HashMap<>();\n        Product p1 = new Product(\"Laptop\");\n        Product p2 = new Product(\"Mouse\");\n        cache.put(p1.getKey(), p1);\n        cache.put(p2.getKey(), p2);\n        cache.forEach((key, val) -> System.out.println(key + \" -> \" + val));\n    }\n}",
    "hint": "Default method can return a unique key based on class and hash."
  },
  {
    "id": "interface_33",
    "topicId": "interface",
    "question": "Write an interface `StringTransformer` with a single abstract method `String transform(String s)`. Use it to create a pipeline of transformations: trim, uppercase, add prefix.",
    "mathSolution": "Functional interfaces enable composition of operations.",
    "codeSolution": "public class Main {\n    interface StringTransformer {\n        String transform(String s);\n        default StringTransformer andThen(StringTransformer after) {\n            return s -> after.transform(transform(s));\n        }\n    }\n    public static void main(String[] args) {\n        StringTransformer trim = String::trim;\n        StringTransformer toUpper = String::toUpperCase;\n        StringTransformer addPrefix = s -> \"[PREFIX] \" + s;\n        StringTransformer pipeline = trim.andThen(toUpper).andThen(addPrefix);\n        System.out.println(pipeline.transform(\"  hello world  \"));\n    }\n}",
    "hint": "Default method `andThen` allows chaining of transformations."
  },
  {
    "id": "interface_34",
    "topicId": "interface",
    "question": "Create an interface `Resource` with a private method to validate resource path. Use it in default methods `open()` and `close()` that call the private validator.",
    "mathSolution": "Private methods in interfaces encapsulate helper logic.",
    "codeSolution": "public class Main {\n    interface Resource {\n        String getPath();\n        default void open() {\n            validate();\n            System.out.println(\"Opening resource: \" + getPath());\n        }\n        default void close() {\n            System.out.println(\"Closing resource: \" + getPath());\n        }\n        private void validate() {\n            if (getPath() == null || getPath().isEmpty()) {\n                throw new IllegalArgumentException(\"Invalid resource path\");\n            }\n            System.out.println(\"Validation passed for: \" + getPath());\n        }\n    }\n    static class FileResource implements Resource {\n        private String path;\n        FileResource(String path) { this.path = path; }\n        public String getPath() { return path; }\n    }\n    public static void main(String[] args) {\n        Resource res = new FileResource(\"data.txt\");\n        res.open();\n        res.close();\n    }\n}",
    "hint": "Private methods can be used within default methods for common tasks."
  },
  {
    "id": "interface_35",
    "topicId": "interface",
    "question": "Implement an interface `Iterable<T>` style custom interface with a default method `forEach` that accepts a `Consumer<T>` (functional interface).",
    "mathSolution": "Default method provides iteration over custom data structure.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Consumer;\npublic class Main {\n    interface MyIterable<T> {\n        Iterator<T> iterator();\n        default void forEach(Consumer<? super T> action) {\n            for (Iterator<T> it = iterator(); it.hasNext();) {\n                action.accept(it.next());\n            }\n        }\n    }\n    static class SimpleList<T> implements MyIterable<T> {\n        private List<T> list = new ArrayList<>();\n        void add(T item) { list.add(item); }\n        public Iterator<T> iterator() { return list.iterator(); }\n    }\n    public static void main(String[] args) {\n        SimpleList<Integer> numbers = new SimpleList<>();\n        numbers.add(10); numbers.add(20); numbers.add(30);\n        numbers.forEach(n -> System.out.println(\"Number: \" + n));\n    }\n}",
    "hint": "Provide default forEach using iterator."
  },
  {
    "id": "interface_36",
    "topicId": "interface",
    "question": "Create an interface `Poolable` with a static factory method that returns a new instance. Show how to get objects from a pool.",
    "mathSolution": "Static interface methods can serve as factories.",
    "codeSolution": "public class Main {\n    interface Poolable {\n        void reset();\n        static Poolable createNew() {\n            return new DefaultPoolable();\n        }\n    }\n    static class DefaultPoolable implements Poolable {\n        public void reset() { System.out.println(\"Resetting object\"); }\n    }\n    public static void main(String[] args) {\n        Poolable p1 = Poolable.createNew();\n        Poolable p2 = Poolable.createNew();\n        p1.reset();\n        p2.reset();\n    }\n}",
    "hint": "Static method in interface can instantiate a default implementation."
  },
  {
    "id": "interface_37",
    "topicId": "interface",
    "question": "Write an interface `JsonSerializable` with a default method `toJson()` that uses a private helper to escape quotes. Override in a class to provide custom fields.",
    "mathSolution": "Default methods can call private helpers for common formatting.",
    "codeSolution": "public class Main {\n    interface JsonSerializable {\n        String toJson();\n        private String escape(String s) {\n            return s.replace(\"\\\"\", \"\\\\\\\"\");\n        }\n        default String formatValue(String key, String value) {\n            return \"\\\"\" + escape(key) + \"\\\": \\\"\" + escape(value) + \"\\\"\";\n        }\n    }\n    static class Person implements JsonSerializable {\n        String name; int age;\n        Person(String name, int age) { this.name = name; this.age = age; }\n        public String toJson() {\n            return \"{\" + formatValue(\"name\", name) + \",\" + formatValue(\"age\", String.valueOf(age)) + \"}\";\n        }\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Alice\", 30);\n        System.out.println(p.toJson());\n    }\n}",
    "hint": "Private helper method can be reused in default and static methods."
  },
  {
    "id": "interface_38",
    "topicId": "interface",
    "question": "Create an interface `Supplier<T>` (similar to java.util.function.Supplier) with a default method `getSafely` that returns null if exception occurs during `get()`. Implement for random number generation.",
    "mathSolution": "Default methods can provide fallback behavior.",
    "codeSolution": "public class Main {\n    interface Supplier<T> {\n        T get() throws Exception;\n        default T getSafely() {\n            try {\n                return get();\n            } catch (Exception e) {\n                return null;\n            }\n        }\n    }\n    public static void main(String[] args) {\n        Supplier<Integer> random = () -> (int)(Math.random() * 100);\n        Supplier<Integer> faulty = () -> { throw new Exception(\"Failed\"); };\n        System.out.println(\"Random: \" + random.getSafely());\n        System.out.println(\"Faulty: \" + faulty.getSafely());\n    }\n}",
    "hint": "Default method can catch exceptions and return a safe value."
  },
  {
    "id": "interface_39",
    "topicId": "interface",
    "question": "Define an interface `Configuration` with constant groups using nested interfaces (e.g., `Database`, `App`). Access constants without implementing.",
    "mathSolution": "Nested interfaces help organize related constants.",
    "codeSolution": "public class Main {\n    interface Configuration {\n        interface Database {\n            String URL = \"jdbc:mysql://localhost:3306/mydb\";\n            String USER = \"root\";\n            String PASSWORD = \"secret\";\n        }\n        interface App {\n            String NAME = \"MyApplication\";\n            int VERSION = 1;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(\"DB URL: \" + Configuration.Database.URL);\n        System.out.println(\"App Name: \" + Configuration.App.NAME);\n    }\n}",
    "hint": "Interfaces nested inside interfaces are static by default."
  },
  {
    "id": "interface_40",
    "topicId": "interface",
    "question": "Create an interface `Identifiable` with a static method that returns the class name as identifier. Implement in multiple classes and use without instantiation.",
    "mathSolution": "Static methods in interfaces provide utility functions related to the interface.",
    "codeSolution": "public class Main {\n    interface Identifiable {\n        static String getIdentifier(Class<?> clazz) {\n            return clazz.getSimpleName() + \"_ID\";\n        }\n    }\n    class User {}\n    class Product {}\n    public static void main(String[] args) {\n        System.out.println(\"User identifier: \" + Identifiable.getIdentifier(User.class));\n        System.out.println(\"Product identifier: \" + Identifiable.getIdentifier(Product.class));\n    }\n}",
    "hint": "Static method can operate on Class objects to provide identifiers."
  }
);