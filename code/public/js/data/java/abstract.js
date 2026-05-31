QuizData.questions.push(
  // ABSTRACT CLASSES - BASIC (5)
  {
    id: "abstraction_1",
    topicId: "abstraction",
    question: "Create an abstract class with abstract method.",
    mathSolution: "Abstract class cannot be instantiated, abstract methods have no body",
    codeSolution: 'public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        void stop() { System.out.println("Vehicle stopping"); }\n    }\n    static class Car extends Vehicle {\n        void start() { System.out.println("Car starting with key"); }\n    }\n    static class Bike extends Vehicle {\n        void start() { System.out.println("Bike starting with kick"); }\n    }\n    public static void main(String[] args) {\n        Car car = new Car();\n        car.start();\n        car.stop();\n        Bike bike = new Bike();\n        bike.start();\n        bike.stop();\n    }\n}',
    hint: "Abstract methods must be implemented by concrete subclasses",
  },
  {
    id: "abstraction_2",
    topicId: "abstraction",
    question: "Abstract class with constructor.",
    mathSolution: "Abstract classes can have constructors",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        String color;\n        Shape(String color) { this.color = color; System.out.println("Shape constructor called with color: " + color); }\n        abstract double area();\n        void displayColor() { System.out.println("Color: " + color); }\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(String color, double radius) { super(color); this.radius = radius; System.out.println("Circle constructor called"); }\n        double area() { return Math.PI * radius * radius; }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle("Red", 5);\n        c.displayColor();\n        System.out.println("Area: " + c.area());\n    }\n}',
    hint: "Abstract class constructors are called via super()",
  },
  {
    id: "abstraction_3",
    topicId: "abstraction",
    question: "Abstract class with concrete methods.",
    mathSolution: "Abstract classes can provide default implementations",
    codeSolution: 'public class Main {\n    static abstract class Database {\n        abstract void connect();\n        abstract void disconnect();\n        void executeQuery(String sql) {\n            connect();\n            System.out.println("Executing: " + sql);\n            disconnect();\n        }\n        void log(String message) { System.out.println("[LOG] " + message); }\n    }\n    static class MySQLDatabase extends Database {\n        void connect() { System.out.println("Connecting to MySQL database"); }\n        void disconnect() { System.out.println("Disconnecting from MySQL"); }\n    }\n    static class PostgreSQLDatabase extends Database {\n        void connect() { System.out.println("Connecting to PostgreSQL database"); }\n        void disconnect() { System.out.println("Disconnecting from PostgreSQL"); }\n    }\n    public static void main(String[] args) {\n        MySQLDatabase mysql = new MySQLDatabase();\n        mysql.executeQuery("SELECT * FROM users");\n        mysql.log("Query executed");\n        System.out.println();\n        PostgreSQLDatabase pg = new PostgreSQLDatabase();\n        pg.executeQuery("SELECT * FROM products");\n    }\n}',
    hint: "Concrete methods provide common functionality",
  },
  {
    id: "abstraction_4",
    topicId: "abstraction",
    question: "Abstract class with final methods.",
    mathSolution: "Final methods in abstract class cannot be overridden",
    codeSolution: 'public class Main {\n    static abstract class Template {\n        final void performTask() {\n            step1();\n            step2();\n            step3();\n        }\n        abstract void step1();\n        abstract void step2();\n        void step3() { System.out.println("Step 3: Default implementation"); }\n    }\n    static class DataProcessor extends Template {\n        void step1() { System.out.println("DataProcessor: Loading data"); }\n        void step2() { System.out.println("DataProcessor: Processing data"); }\n    }\n    static class FileProcessor extends Template {\n        void step1() { System.out.println("FileProcessor: Opening file"); }\n        void step2() { System.out.println("FileProcessor: Reading file"); }\n        void step3() { System.out.println("FileProcessor: Closing file"); }\n    }\n    public static void main(String[] args) {\n        DataProcessor dp = new DataProcessor();\n        dp.performTask();\n        System.out.println();\n        FileProcessor fp = new FileProcessor();\n        fp.performTask();\n    }\n}',
    hint: "final methods in abstract class define fixed algorithm",
  },
  {
    id: "abstraction_5",
    topicId: "abstraction",
    question: "Abstract class with static methods.",
    mathSolution: "Static methods in abstract class",
    codeSolution: 'public class Main {\n    static abstract class Calculator {\n        static int add(int a, int b) { return a + b; }\n        static int multiply(int a, int b) { return a * b; }\n        abstract double calculate(double x);\n    }\n    static class SquareCalculator extends Calculator {\n        double calculate(double x) { return x * x; }\n    }\n    static class CubeCalculator extends Calculator {\n        double calculate(double x) { return x * x * x; }\n    }\n    public static void main(String[] args) {\n        System.out.println("Add: " + Calculator.add(10, 20));\n        System.out.println("Multiply: " + Calculator.multiply(5, 6));\n        SquareCalculator sq = new SquareCalculator();\n        System.out.println("Square of 5: " + sq.calculate(5));\n        CubeCalculator cb = new CubeCalculator();\n        System.out.println("Cube of 3: " + cb.calculate(3));\n    }\n}',
    hint: "Static methods belong to class, not instance",
  },

  // INTERFACES - BASIC (5)
  {
    id: "abstraction_6",
    topicId: "abstraction",
    question: "Create and implement a simple interface.",
    mathSolution: "Interface defines contract, classes implement",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n        int VERSION = 1;\n    }\n    static class Circle implements Drawable {\n        public void draw() { System.out.println("Drawing circle"); }\n    }\n    static class Rectangle implements Drawable {\n        public void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d1 = new Circle();\n        Drawable d2 = new Rectangle();\n        d1.draw();\n        d2.draw();\n        System.out.println("Version: " + Drawable.VERSION);\n    }\n}',
    hint: "Interface methods are implicitly public abstract",
  },
  {
    id: "abstraction_7",
    topicId: "abstraction",
    question: "Implement multiple interfaces.",
    mathSolution: "A class can implement multiple interfaces",
    codeSolution: 'public class Main {\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    interface Runnable { void run(); }\n    static class Duck implements Flyable, Swimmable, Runnable {\n        public void fly() { System.out.println("Duck flying"); }\n        public void swim() { System.out.println("Duck swimming"); }\n        public void run() { System.out.println("Duck running"); }\n    }\n    static class Plane implements Flyable {\n        public void fly() { System.out.println("Plane flying"); }\n    }\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.fly();\n        d.swim();\n        d.run();\n        Plane p = new Plane();\n        p.fly();\n    }\n}',
    hint: "Multiple inheritance of type in Java",
  },
  {
    id: "abstraction_8",
    topicId: "abstraction",
    question: "Interface extending another interface.",
    mathSolution: "Interfaces can extend multiple interfaces",
    codeSolution: 'public class Main {\n    interface BasicAnimal { void eat(); void sleep(); }\n    interface Pet { void play(); }\n    interface GuardDog extends BasicAnimal { void guard(); }\n    interface FriendlyDog extends BasicAnimal, Pet { void wagTail(); }\n    static class Labrador implements FriendlyDog {\n        public void eat() { System.out.println("Labrador eating"); }\n        public void sleep() { System.out.println("Labrador sleeping"); }\n        public void play() { System.out.println("Labrador playing"); }\n        public void wagTail() { System.out.println("Labrador wagging tail"); }\n    }\n    static class GermanShepherd implements GuardDog {\n        public void eat() { System.out.println("German Shepherd eating"); }\n        public void sleep() { System.out.println("German Shepherd sleeping"); }\n        public void guard() { System.out.println("German Shepherd guarding"); }\n    }\n    public static void main(String[] args) {\n        Labrador lab = new Labrador();\n        lab.eat();\n        lab.play();\n        lab.wagTail();\n        GermanShepherd gs = new GermanShepherd();\n        gs.guard();\n    }\n}',
    hint: "Interface inheritance builds complex contracts",
  },
  {
    id: "abstraction_9",
    topicId: "abstraction",
    question: "Default methods in interfaces (Java 8+).",
    mathSolution: "Default methods provide implementation in interfaces",
    codeSolution: 'public class Main {\n    interface Logger {\n        void log(String message);\n        default void logInfo(String message) { log("[INFO] " + message); }\n        default void logError(String message) { log("[ERROR] " + message); }\n        static void logSystem(String message) { System.out.println("[SYSTEM] " + message); }\n    }\n    static class ConsoleLogger implements Logger {\n        public void log(String message) { System.out.println("Console: " + message); }\n    }\n    static class FileLogger implements Logger {\n        public void log(String message) { System.out.println("File: " + message); }\n        public void logInfo(String message) { log("[FILE-INFO] " + message); }\n    }\n    public static void main(String[] args) {\n        ConsoleLogger console = new ConsoleLogger();\n        console.logInfo("Application started");\n        console.logError("Null pointer exception");\n        FileLogger file = new FileLogger();\n        file.logInfo("Data saved");\n        Logger.logSystem("System check");\n    }\n}',
    hint: "Default methods add functionality without breaking existing code",
  },
  {
    id: "abstraction_10",
    topicId: "abstraction",
    question: "Private methods in interfaces (Java 9+).",
    mathSolution: "Private methods help share code between default methods",
    codeSolution: 'public class Main {\n    interface PaymentProcessor {\n        void processPayment(double amount);\n        default void processCardPayment(double amount) {\n            validateAmount(amount);\n            logTransaction("CARD", amount);\n            processPayment(amount);\n        }\n        default void processUPIPayment(double amount) {\n            validateAmount(amount);\n            logTransaction("UPI", amount);\n            processPayment(amount);\n        }\n        private void validateAmount(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Invalid amount");\n            System.out.println("Amount validated: $" + amount);\n        }\n        private static void logTransaction(String type, double amount) {\n            System.out.println(type + " transaction of $" + amount + " initiated");\n        }\n    }\n    static class PayPalProcessor implements PaymentProcessor {\n        public void processPayment(double amount) { System.out.println("Processing payment via PayPal"); }\n    }\n    public static void main(String[] args) {\n        PayPalProcessor pp = new PayPalProcessor();\n        pp.processCardPayment(100.50);\n        pp.processUPIPayment(75.25);\n    }\n}',
    hint: "Private methods encapsulate common logic in interfaces",
  },

  // ABSTRACT CLASS VS INTERFACE (4)
  {
    id: "abstraction_11",
    topicId: "abstraction",
    question: "Abstract class vs Interface - when to use which.",
    mathSolution: "Abstract class for common base, interface for contract",
    codeSolution: 'public class Main {\n    static abstract class Bird {\n        String name; int age;\n        Bird(String name, int age) { this.name = name; this.age = age; }\n        abstract void makeSound();\n        void eat() { System.out.println(name + " is eating"); }\n    }\n    interface Flyable { void fly(); }\n    interface Singable { void sing(); }\n    interface Swimmable { void swim(); }\n    static class Sparrow extends Bird implements Flyable, Singable {\n        Sparrow(String name, int age) { super(name, age); }\n        void makeSound() { System.out.println(name + " chirps"); }\n        public void fly() { System.out.println(name + " flies fast"); }\n        public void sing() { System.out.println(name + " sings sweetly"); }\n    }\n    static class Penguin extends Bird implements Swimmable {\n        Penguin(String name, int age) { super(name, age); }\n        void makeSound() { System.out.println(name + " honks"); }\n        public void swim() { System.out.println(name + " swims"); }\n    }\n    public static void main(String[] args) {\n        Sparrow s = new Sparrow("Jack", 2);\n        s.makeSound();\n        s.fly();\n        s.sing();\n        s.eat();\n        Penguin p = new Penguin("Penny", 3);\n        p.makeSound();\n        p.swim();\n    }\n}',
    hint: "Abstract class: is-a relationship; Interface: can-do relationship",
  },
  {
    id: "abstraction_12",
    topicId: "abstraction",
    question: "Abstract class with both abstract and concrete methods.",
    mathSolution: "Abstract class provides partial implementation",
    codeSolution: 'public class Main {\n    static abstract class ReportGenerator {\n        public final void generateReport() {\n            openFile();\n            writeHeader();\n            writeBody();\n            writeFooter();\n            closeFile();\n        }\n        private void openFile() { System.out.println("Opening report file"); }\n        private void closeFile() { System.out.println("Closing report file"); }\n        protected abstract void writeHeader();\n        protected abstract void writeBody();\n        protected void writeFooter() { System.out.println("Writing default footer"); }\n    }\n    static class PDFReport extends ReportGenerator {\n        protected void writeHeader() { System.out.println("PDF Header with logo"); }\n        protected void writeBody() { System.out.println("PDF Body with tables"); }\n    }\n    static class CSVReport extends ReportGenerator {\n        protected void writeHeader() { System.out.println("CSV Header: ID,Name,Amount"); }\n        protected void writeBody() { System.out.println("CSV Body: 1,John,100.50"); }\n        protected void writeFooter() { System.out.println("CSV Footer: Total rows: 1"); }\n    }\n    public static void main(String[] args) {\n        PDFReport pdf = new PDFReport();\n        pdf.generateReport();\n        System.out.println();\n        CSVReport csv = new CSVReport();\n        csv.generateReport();\n    }\n}',
    hint: "Template method pattern uses abstract class",
  },
  {
    id: "abstraction_13",
    topicId: "abstraction",
    question: "Interface with default, static, and private methods.",
    mathSolution: "Modern interfaces have multiple method types",
    codeSolution: 'public class Main {\n    interface Calculator {\n        int calculate(int x, int y);\n        default int add(int a, int b) { log("Adding " + a + " and " + b); return a + b; }\n        default int multiply(int a, int b) { log("Multiplying " + a + " and " + b); return a * b; }\n        private void log(String operation) { System.out.println("[LOG] " + operation); }\n        static void showVersion() { System.out.println("Calculator version 1.0"); }\n    }\n    static class SimpleCalculator implements Calculator {\n        public int calculate(int x, int y) { return x + y; }\n        public int multiply(int a, int b) { return a * b * 2; }\n    }\n    public static void main(String[] args) {\n        SimpleCalculator calc = new SimpleCalculator();\n        System.out.println("Add: " + calc.add(5, 3));\n        System.out.println("Multiply: " + calc.multiply(5, 3));\n        System.out.println("Calculate: " + calc.calculate(10, 20));\n        Calculator.showVersion();\n    }\n}',
    hint: "Interfaces evolved to include implementation",
  },
  {
    id: "abstraction_14",
    topicId: "abstraction",
    question: "Diamond problem with default methods.",
    mathSolution: "Resolving multiple interface inheritance conflict",
    codeSolution: 'public class Main {\n    interface A { default void show() { System.out.println("A show"); } }\n    interface B { default void show() { System.out.println("B show"); } }\n    interface C extends A, B {\n        default void show() { A.super.show(); B.super.show(); System.out.println("C show"); }\n    }\n    static class D implements A, B {\n        public void show() { A.super.show(); System.out.println("D show"); }\n    }\n    static class E implements C {} // inherits C\'s resolved show\n    public static void main(String[] args) {\n        C c = new C() {};\n        c.show();\n        System.out.println();\n        D d = new D();\n        d.show();\n        System.out.println();\n        E e = new E();\n        e.show();\n    }\n}',
    hint: "Use super to call specific interface default method",
  },

  // ABSTRACTION IN REAL-WORLD SCENARIOS (5)
  {
    id: "abstraction_15",
    topicId: "abstraction",
    question: "Data Access Object (DAO) pattern with abstraction.",
    mathSolution: "Abstract DAO for database operations",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class User {\n        int id; String name; String email;\n        User(int id, String n, String e) { this.id = id; name = n; email = e; }\n        public String toString() { return id + ": " + name + " <" + email + ">"; }\n    }\n    interface UserDAO {\n        void save(User user);\n        User findById(int id);\n        List<User> findAll();\n        void delete(int id);\n        void update(User user);\n    }\n    static class InMemoryUserDAO implements UserDAO {\n        private Map<Integer, User> database = new HashMap<>();\n        private int nextId = 1;\n        public void save(User user) { user.id = nextId++; database.put(user.id, user); System.out.println("Saved: " + user); }\n        public User findById(int id) { return database.get(id); }\n        public List<User> findAll() { return new ArrayList<>(database.values()); }\n        public void delete(int id) { database.remove(id); }\n        public void update(User user) { database.put(user.id, user); }\n    }\n    public static void main(String[] args) {\n        UserDAO userDAO = new InMemoryUserDAO();\n        userDAO.save(new User(0, "Alice", "alice@email.com"));\n        userDAO.save(new User(0, "Bob", "bob@email.com"));\n        System.out.println("All users: " + userDAO.findAll());\n        User user = userDAO.findById(1);\n        System.out.println("Found: " + user);\n        userDAO.delete(2);\n        System.out.println("After delete: " + userDAO.findAll());\n    }\n}',
    hint: "Abstraction allows swapping implementations easily",
  },
  {
    id: "abstraction_16",
    topicId: "abstraction",
    question: "Strategy pattern using interfaces.",
    mathSolution: "Different algorithms through abstraction",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface CompressionStrategy {\n        byte[] compress(byte[] data);\n        String getAlgorithmName();\n    }\n    static class ZipCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using ZIP algorithm"); return data; }\n        public String getAlgorithmName() { return "ZIP"; }\n    }\n    static class GzipCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using GZIP algorithm"); return data; }\n        public String getAlgorithmName() { return "GZIP"; }\n    }\n    static class RarCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using RAR algorithm"); return data; }\n        public String getAlgorithmName() { return "RAR"; }\n    }\n    static class FileCompressor {\n        private CompressionStrategy strategy;\n        void setStrategy(CompressionStrategy s) { strategy = s; }\n        void compressFile(String filename, byte[] data) {\n            System.out.println("Compressing " + filename + " using " + strategy.getAlgorithmName());\n            byte[] compressed = strategy.compress(data);\n            System.out.println("Compression complete");\n        }\n    }\n    public static void main(String[] args) {\n        FileCompressor compressor = new FileCompressor();\n        byte[] data = "Sample file content".getBytes();\n        compressor.setStrategy(new ZipCompression());\n        compressor.compressFile("document.txt", data);\n        compressor.setStrategy(new GzipCompression());\n        compressor.compressFile("image.jpg", data);\n        compressor.setStrategy(new RarCompression());\n        compressor.compressFile("backup.dat", data);\n    }\n}',
    hint: "Strategy pattern encapsulates interchangeable algorithms",
  },
  {
    id: "abstraction_17",
    topicId: "abstraction",
    question: "Factory pattern with abstract product.",
    mathSolution: "Abstract factory creates abstract products",
    codeSolution: 'public class Main {\n    interface Button { void render(); void onClick(); }\n    static class WindowsButton implements Button {\n        public void render() { System.out.println("Rendering Windows style button"); }\n        public void onClick() { System.out.println("Windows button clicked"); }\n    }\n    static class MacButton implements Button {\n        public void render() { System.out.println("Rendering Mac style button"); }\n        public void onClick() { System.out.println("Mac button clicked"); }\n    }\n    static class LinuxButton implements Button {\n        public void render() { System.out.println("Rendering Linux style button"); }\n        public void onClick() { System.out.println("Linux button clicked"); }\n    }\n    interface GUIFactory { Button createButton(); }\n    static class WindowsFactory implements GUIFactory { public Button createButton() { return new WindowsButton(); } }\n    static class MacFactory implements GUIFactory { public Button createButton() { return new MacButton(); } }\n    static class LinuxFactory implements GUIFactory { public Button createButton() { return new LinuxButton(); } }\n    public static void main(String[] args) {\n        GUIFactory factory;\n        String os = System.getProperty("os.name").toLowerCase();\n        if(os.contains("win")) factory = new WindowsFactory();\n        else if(os.contains("mac")) factory = new MacFactory();\n        else factory = new LinuxFactory();\n        Button button = factory.createButton();\n        button.render();\n        button.onClick();\n    }\n}',
    hint: "Abstract factory creates families of related objects",
  },
  {
    id: "abstraction_18",
    topicId: "abstraction",
    question: "Adapter pattern using interfaces.",
    mathSolution: "Adapt one interface to another",
    codeSolution: 'public class Main {\n    interface MediaPlayer { void play(String audioType, String fileName); }\n    interface AdvancedMediaPlayer { void playVlc(String fileName); void playMp4(String fileName); }\n    static class VlcPlayer implements AdvancedMediaPlayer {\n        public void playVlc(String fileName) { System.out.println("Playing vlc file: " + fileName); }\n        public void playMp4(String fileName) { /* do nothing */ }\n    }\n    static class Mp4Player implements AdvancedMediaPlayer {\n        public void playVlc(String fileName) { /* do nothing */ }\n        public void playMp4(String fileName) { System.out.println("Playing mp4 file: " + fileName); }\n    }\n    static class MediaAdapter implements MediaPlayer {\n        AdvancedMediaPlayer advancedMusicPlayer;\n        MediaAdapter(String audioType) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedMusicPlayer = new VlcPlayer();\n            else if(audioType.equalsIgnoreCase("mp4")) advancedMusicPlayer = new Mp4Player();\n        }\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedMusicPlayer.playVlc(fileName);\n            else if(audioType.equalsIgnoreCase("mp4")) advancedMusicPlayer.playMp4(fileName);\n        }\n    }\n    static class AudioPlayer implements MediaPlayer {\n        MediaAdapter mediaAdapter;\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("mp3")) System.out.println("Playing mp3 file: " + fileName);\n            else if(audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {\n                mediaAdapter = new MediaAdapter(audioType);\n                mediaAdapter.play(audioType, fileName);\n            } else System.out.println("Invalid media type");\n        }\n    }\n    public static void main(String[] args) {\n        AudioPlayer player = new AudioPlayer();\n        player.play("mp3", "song.mp3");\n        player.play("mp4", "video.mp4");\n        player.play("vlc", "movie.vlc");\n        player.play("avi", "random.avi");\n    }\n}',
    hint: "Adapter makes incompatible interfaces work together",
  },
  {
    id: "abstraction_19",
    topicId: "abstraction",
    question: "Observer pattern using interfaces.",
    mathSolution: "Subject notifies observers through abstraction",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Observer { void update(String message); }\n    interface Subject { void attach(Observer o); void detach(Observer o); void notifyObservers(String message); }\n    static class NewsAgency implements Subject {\n        private List<Observer> observers = new ArrayList<>();\n        private String news;\n        public void attach(Observer o) { observers.add(o); }\n        public void detach(Observer o) { observers.remove(o); }\n        public void notifyObservers(String message) { for(Observer o : observers) o.update(message); }\n        public void setNews(String news) { this.news = news; System.out.println("\\nNews published: " + news); notifyObservers(news); }\n    }\n    static class EmailSubscriber implements Observer {\n        private String name;\n        EmailSubscriber(String name) { this.name = name; }\n        public void update(String message) { System.out.println("Email to " + name + ": Breaking news - " + message); }\n    }\n    static class SMSSubscriber implements Observer {\n        private String phone;\n        SMSSubscriber(String phone) { this.phone = phone; }\n        public void update(String message) { System.out.println("SMS to " + phone + ": Alert - " + message); }\n    }\n    static class AppNotification implements Observer {\n        public void update(String message) { System.out.println("Mobile app notification: " + message); }\n    }\n    public static void main(String[] args) {\n        NewsAgency agency = new NewsAgency();\n        Observer email1 = new EmailSubscriber("Alice");\n        Observer email2 = new EmailSubscriber("Bob");\n        Observer sms = new SMSSubscriber("+1234567890");\n        Observer app = new AppNotification();\n        agency.attach(email1);\n        agency.attach(email2);\n        agency.attach(sms);\n        agency.attach(app);\n        agency.setNews("Java 21 released!");\n        agency.detach(email2);\n        agency.setNews("New features in Java");\n    }\n}',
    hint: "Observer pattern implements publish-subscribe",
  },
  {
    "id": "abstraction_20",
    "topicId": "abstraction",
    "question": "Create an abstract class with a generic type parameter T. Implement a concrete subclass that stores an integer value.",
    "mathSolution": "Generic abstract class allows type parameter to be specified by subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Storage<T> {\n        abstract void store(T item);\n        abstract T retrieve();\n    }\n    static class IntegerStorage extends Storage<Integer> {\n        private Integer value;\n        void store(Integer item) { value = item; }\n        Integer retrieve() { return value; }\n    }\n    public static void main(String[] args) {\n        IntegerStorage storage = new IntegerStorage();\n        storage.store(42);\n        System.out.println(\"Stored value: \" + storage.retrieve());\n    }\n}",
    "hint": "Use <T> after abstract class name and override methods with concrete type."
  },
  {
    "id": "abstraction_21",
    "topicId": "abstraction",
    "question": "Define an interface with a generic method that accepts any type and returns a string representation.",
    "mathSolution": "Generic methods in interfaces allow type flexibility.",
    "codeSolution": "public class Main {\n    interface Formatter {\n        <T> String format(T value);\n    }\n    static class SimpleFormatter implements Formatter {\n        public <T> String format(T value) {\n            return \"Formatted: \" + value.toString();\n        }\n    }\n    public static void main(String[] args) {\n        SimpleFormatter formatter = new SimpleFormatter();\n        System.out.println(formatter.format(123));\n        System.out.println(formatter.format(\"Hello\"));\n    }\n}",
    "hint": "Declare <T> before return type in interface method."
  },
  {
    "id": "abstraction_22",
    "topicId": "abstraction",
    "question": "Create an abstract class that partially implements an interface. A concrete class should complete the implementation.",
    "mathSolution": "Abstract class can provide default implementations for some interface methods.",
    "codeSolution": "public class Main {\n    interface Worker {\n        void start();\n        void stop();\n    }\n    static abstract class BaseWorker implements Worker {\n        public void start() { System.out.println(\"Worker started\"); }\n        // stop() remains abstract\n    }\n    static class ConcreteWorker extends BaseWorker {\n        public void stop() { System.out.println(\"Worker stopped\"); }\n    }\n    public static void main(String[] args) {\n        ConcreteWorker w = new ConcreteWorker();\n        w.start();\n        w.stop();\n    }\n}",
    "hint": "Abstract class can implement some interface methods, leaving others abstract."
  },
  {
    "id": "abstraction_23",
    "topicId": "abstraction",
    "question": "Create two interfaces with default methods having the same signature. Resolve the conflict in a class implementing both.",
    "mathSolution": "Class must override the conflicting default method and optionally call specific super methods.",
    "codeSolution": "public class Main {\n    interface A { default void show() { System.out.println(\"A\"); } }\n    interface B { default void show() { System.out.println(\"B\"); } }\n    static class C implements A, B {\n        public void show() {\n            A.super.show();\n            B.super.show();\n            System.out.println(\"C\");\n        }\n    }\n    public static void main(String[] args) {\n        new C().show();\n    }\n}",
    "hint": "Override and use InterfaceName.super.methodName()."
  },
  {
    "id": "abstraction_24",
    "topicId": "abstraction",
    "question": "Define an abstract class with a final variable that is initialized in the constructor. Use it in a concrete subclass.",
    "mathSolution": "Final instance variables must be assigned before constructor completes.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        final String registrationNumber;\n        Vehicle(String regNo) { registrationNumber = regNo; }\n        abstract void move();\n    }\n    static class Car extends Vehicle {\n        Car(String regNo) { super(regNo); }\n        void move() { System.out.println(\"Car moving. Reg: \" + registrationNumber); }\n    }\n    public static void main(String[] args) {\n        Car c = new Car(\"ABC-1234\");\n        c.move();\n    }\n}",
    "hint": "Final variables can be set in constructor and are then immutable."
  },
  {
    "id": "abstraction_25",
    "topicId": "abstraction",
    "question": "Create an interface with a static factory method that returns an instance of a class implementing that interface.",
    "mathSolution": "Static methods in interfaces can provide factory instances.",
    "codeSolution": "public class Main {\n    interface Greeting {\n        void sayHello();\n        static Greeting createEnglish() {\n            return () -> System.out.println(\"Hello!\");\n        }\n        static Greeting createSpanish() {\n            return () -> System.out.println(\"Hola!\");\n        }\n    }\n    public static void main(String[] args) {\n        Greeting english = Greeting.createEnglish();\n        Greeting spanish = Greeting.createSpanish();\n        english.sayHello();\n        spanish.sayHello();\n    }\n}",
    "hint": "Static interface methods are called on the interface name, not on implementing classes."
  },
  {
    "id": "abstraction_26",
    "topicId": "abstraction",
    "question": "Write an abstract class with an abstract method that throws a checked exception. Implement the method in a subclass.",
    "mathSolution": "Abstract method can declare exceptions; subclasses must handle or propagate.",
    "codeSolution": "public class Main {\n    static abstract class FileHandler {\n        abstract void readFile(String path) throws java.io.IOException;\n    }\n    static class TextFileHandler extends FileHandler {\n        void readFile(String path) throws java.io.IOException {\n            System.out.println(\"Reading file: \" + path);\n            if (path.equals(\"missing.txt\"))\n                throw new java.io.IOException(\"File not found\");\n        }\n    }\n    public static void main(String[] args) {\n        TextFileHandler handler = new TextFileHandler();\n        try {\n            handler.readFile(\"data.txt\");\n            handler.readFile(\"missing.txt\");\n        } catch(java.io.IOException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Subclass may throw the same exception or a subclass, not a broader checked exception."
  },
  {
    "id": "abstraction_27",
    "topicId": "abstraction",
    "question": "Design an interface with two default methods where one calls the other. Use it in a class without overriding.",
    "mathSolution": "Default methods can call each other, providing reusable behavior.",
    "codeSolution": "public class Main {\n    interface Calculator {\n        default int add(int a, int b) { return a + b; }\n        default int addTwice(int a, int b) { return add(a, b) + add(a, b); }\n    }\n    static class MyCalc implements Calculator {}\n    public static void main(String[] args) {\n        MyCalc calc = new MyCalc();\n        System.out.println(\"Add: \" + calc.add(3,5));\n        System.out.println(\"Add twice: \" + calc.addTwice(3,5));\n    }\n}",
    "hint": "Default methods can invoke other default or abstract methods of the same interface."
  },
  {
    "id": "abstraction_28",
    "topicId": "abstraction",
    "question": "Create an abstract class with a protected abstract method. Implement it in a subclass from a different package (simulate using same file).",
    "mathSolution": "Protected abstract methods are accessible only within the same package or by subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Parent {\n        protected abstract void display();\n    }\n    static class Child extends Parent {\n        protected void display() { System.out.println(\"Child implementation\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}",
    "hint": "Protected access allows subclasses to implement the method regardless of package."
  },
  {
    "id": "abstraction_29",
    "topicId": "abstraction",
    "question": "Define an interface with a private static method that is used by a default method to perform common logic.",
    "mathSolution": "Private static methods in interfaces encapsulate reusable code without exposing it.",
    "codeSolution": "public class Main {\n    interface Logger {\n        default void logError(String msg) {\n            String formatted = format(\"ERROR\", msg);\n            System.out.println(formatted);\n        }\n        default void logInfo(String msg) {\n            String formatted = format(\"INFO\", msg);\n            System.out.println(formatted);\n        }\n        private static String format(String level, String msg) {\n            return \"[\" + level + \"] \" + msg;\n        }\n    }\n    static class App implements Logger {}\n    public static void main(String[] args) {\n        App app = new App();\n        app.logError(\"Something went wrong\");\n        app.logInfo(\"Application started\");\n    }\n}",
    "hint": "Private static methods are accessible only within the interface."
  },
  {
    "id": "abstraction_30",
    "topicId": "abstraction",
    "question": "Create an abstract class with an abstract method that returns an instance of the same abstract type (self-referential).",
    "mathSolution": "Abstract methods can return the abstract type, allowing fluent interfaces.",
    "codeSolution": "public class Main {\n    static abstract class Shape {\n        abstract Shape scale(double factor);\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        Shape scale(double factor) {\n            radius *= factor;\n            return this;\n        }\n        void display() { System.out.println(\"Radius: \" + radius); }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5);\n        c.scale(2).scale(0.5);\n        c.display();\n    }\n}",
    "hint": "Return type can be abstract class; subclass returns itself for method chaining."
  },
  {
    "id": "abstraction_31",
    "topicId": "abstraction",
    "question": "Implement an interface that extends two other interfaces and adds a new abstract method. Use it in a concrete class.",
    "mathSolution": "Interface can extend multiple interfaces, combining their contracts.",
    "codeSolution": "public class Main {\n    interface Readable { void read(); }\n    interface Writable { void write(); }\n    interface ReadWrite extends Readable, Writable { void close(); }\n    static class FileHandler implements ReadWrite {\n        public void read() { System.out.println(\"Reading\"); }\n        public void write() { System.out.println(\"Writing\"); }\n        public void close() { System.out.println(\"Closing\"); }\n    }\n    public static void main(String[] args) {\n        FileHandler fh = new FileHandler();\n        fh.read();\n        fh.write();\n        fh.close();\n    }\n}",
    "hint": "Implementing class must override all abstract methods from all parent interfaces."
  },
  {
    "id": "abstraction_32",
    "topicId": "abstraction",
    "question": "Create an abstract class that implements Comparable and provides natural ordering by an integer field.",
    "mathSolution": "Abstract classes can implement interfaces; subclasses inherit the comparison logic.",
    "codeSolution": "public class Main {\n    static abstract class Entity implements Comparable<Entity> {\n        int id;\n        Entity(int id) { this.id = id; }\n        public int compareTo(Entity other) {\n            return Integer.compare(this.id, other.id);\n        }\n        abstract void display();\n    }\n    static class User extends Entity {\n        User(int id) { super(id); }\n        void display() { System.out.println(\"User ID: \" + id); }\n    }\n    public static void main(String[] args) {\n        User u1 = new User(10);\n        User u2 = new User(5);\n        System.out.println(\"u1.compareTo(u2): \" + u1.compareTo(u2));\n    }\n}",
    "hint": "Abstract class can provide common comparator logic for all subclasses."
  },
  {
    "id": "abstraction_33",
    "topicId": "abstraction",
    "question": "Write an interface with a default method that uses a lambda expression to process a collection.",
    "mathSolution": "Default methods can utilize functional programming features.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Processor {\n        default void processAll(List<String> items) {\n            items.forEach(item -> System.out.println(\"Processing: \" + item));\n        }\n    }\n    static class BatchProcessor implements Processor {}\n    public static void main(String[] args) {\n        BatchProcessor bp = new BatchProcessor();\n        bp.processAll(Arrays.asList(\"A\", \"B\", \"C\"));\n    }\n}",
    "hint": "Lambda expressions can be used inside default methods for iteration."
  },
  {
    "id": "abstraction_34",
    "topicId": "abstraction",
    "question": "Create an abstract class that holds a static counter to track number of instances created. Increment it in constructor.",
    "mathSolution": "Static variables are shared across all instances, even of subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Base {\n        static int instanceCount = 0;\n        Base() { instanceCount++; }\n        abstract void identify();\n    }\n    static class A extends Base {\n        void identify() { System.out.println(\"A\"); }\n    }\n    static class B extends Base {\n        void identify() { System.out.println(\"B\"); }\n    }\n    public static void main(String[] args) {\n        new A();\n        new B();\n        new A();\n        System.out.println(\"Total instances: \" + Base.instanceCount);\n    }\n}",
    "hint": "Static members are inherited, but each subclass shares the same static variable."
  },
  {
    "id": "abstraction_35",
    "topicId": "abstraction",
    "question": "Design an interface with an abstract method that takes a variable number of arguments (varargs). Implement it.",
    "mathSolution": "Varargs can be used in interface abstract methods.",
    "codeSolution": "public class Main {\n    interface Concatenator {\n        String concat(String... parts);\n    }\n    static class SimpleConcatenator implements Concatenator {\n        public String concat(String... parts) {\n            StringBuilder sb = new StringBuilder();\n            for (String p : parts) sb.append(p);\n            return sb.toString();\n        }\n    }\n    public static void main(String[] args) {\n        SimpleConcatenator c = new SimpleConcatenator();\n        System.out.println(c.concat(\"Hello\", \" \", \"World\"));\n    }\n}",
    "hint": "Varargs in methods are treated as arrays inside the method body."
  },
  {
    "id": "abstraction_36",
    "topicId": "abstraction",
    "question": "Create an abstract class with a default method that returns a custom object. Use it in a subclass.",
    "mathSolution": "Abstract classes can provide concrete methods that return instances.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static abstract class DataProvider {\n        List<String> getDefaultData() {\n            return Arrays.asList(\"Default1\", \"Default2\");\n        }\n        abstract void process();\n    }\n    static class MyProvider extends DataProvider {\n        void process() {\n            System.out.println(\"Processing: \" + getDefaultData());\n        }\n    }\n    public static void main(String[] args) {\n        MyProvider mp = new MyProvider();\n        mp.process();\n    }\n}",
    "hint": "Concrete methods in abstract classes can be inherited and used by subclasses."
  },
  {
    "id": "abstraction_37",
    "topicId": "abstraction",
    "question": "Implement a marker interface (empty) and use instanceof to conditionally execute logic.",
    "mathSolution": "Marker interfaces tag classes for special processing.",
    "codeSolution": "public class Main {\n    interface Secure { }\n    static class User { }\n    static class Admin implements Secure { }\n    public static void main(String[] args) {\n        Object[] objs = { new User(), new Admin() };\n        for (Object obj : objs) {\n            if (obj instanceof Secure) {\n                System.out.println(obj.getClass().getSimpleName() + \" is secure\");\n            } else {\n                System.out.println(obj.getClass().getSimpleName() + \" is not secure\");\n            }\n        }\n    }\n}",
    "hint": "Marker interfaces have no methods; they are used as a flag for type checking."
  },
  {
    "id": "abstraction_38",
    "topicId": "abstraction",
    "question": "Create an abstract class with a template method that uses primitive operations implemented by subclasses. Example: beverage preparation.",
    "mathSolution": "Template method pattern: skeleton algorithm with steps implemented in subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Beverage {\n        final void prepare() {\n            boilWater();\n            brew();\n            pourInCup();\n            addCondiments();\n        }\n        void boilWater() { System.out.println(\"Boiling water\"); }\n        void pourInCup() { System.out.println(\"Pouring into cup\"); }\n        abstract void brew();\n        abstract void addCondiments();\n    }\n    static class Tea extends Beverage {\n        void brew() { System.out.println(\"Steeping tea\"); }\n        void addCondiments() { System.out.println(\"Adding lemon\"); }\n    }\n    static class Coffee extends Beverage {\n        void brew() { System.out.println(\"Dripping coffee\"); }\n        void addCondiments() { System.out.println(\"Adding sugar and milk\"); }\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Tea:\");\n        new Tea().prepare();\n        System.out.println(\"\\nCoffee:\");\n        new Coffee().prepare();\n    }\n}",
    "hint": "Template method is final to prevent subclasses from altering the algorithm structure."
  },
  {
    "id": "abstraction_39",
    "topicId": "abstraction",
    "question": "Define an abstract class with an abstract method that has a covariant return type. Override it in a subclass.",
    "mathSolution": "Covariant return allows overriding method to return a more specific subtype.",
    "codeSolution": "public class Main {\n    static abstract class Animal {\n        abstract Animal reproduce();\n    }\n    static class Dog extends Animal {\n        Dog reproduce() {\n            System.out.println(\"Dog gives birth to puppies\");\n            return new Dog();\n        }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        Dog puppy = d.reproduce();\n        System.out.println(\"New puppy created\");\n    }\n}",
    "hint": "Override method can return a subtype of the original return type (covariant)."
  },
  {
    "id": "abstraction_40",
    "topicId": "abstraction",
    "question": "Create a functional interface (single abstract method) and use it with a lambda expression to sort a list of strings by length.",
    "mathSolution": "Functional interfaces enable lambda expressions for concise implementation.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    @FunctionalInterface\n    interface StringComparator {\n        int compare(String s1, String s2);\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Christina\", \"Dave\");\n        StringComparator byLength = (a, b) -> a.length() - b.length();\n        names.sort(byLength::compare);\n        System.out.println(names);\n    }\n}",
    "hint": "Functional interfaces can be used with method references as well as lambdas."
  }

);