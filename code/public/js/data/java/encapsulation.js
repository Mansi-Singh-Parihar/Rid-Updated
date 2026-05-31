QuizData.questions.push(
  // BASIC ENCAPSULATION (4)
  {
    id: "encapsulation_1",
    topicId: "encapsulation",
    question: "Create a class with private fields and public getters/setters.",
    mathSolution: "Hide data, provide controlled access through methods",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        private int age;\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public void setName(String name) { this.name = name; }\n        public void setAge(int age) { if(age > 0) this.age = age; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setName("Alice");\n        p.setAge(25);\n        System.out.println(p.getName() + " is " + p.getAge() + " years old");\n    }\n}',
    hint: "Private fields + public methods = encapsulation",
  },
  {
    id: "encapsulation_2",
    topicId: "encapsulation",
    question: "Add validation in setter methods.",
    mathSolution: "Control what values can be assigned",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private String accountNumber;\n        private double balance;\n        private String accountHolder;\n        public void setAccountNumber(String accNo) {\n            if(accNo != null && accNo.length() == 10) this.accountNumber = accNo;\n            else System.out.println("Invalid account number");\n        }\n        public void setBalance(double balance) {\n            if(balance >= 0) this.balance = balance;\n            else System.out.println("Balance cannot be negative");\n        }\n        public void setAccountHolder(String name) {\n            if(name != null && !name.trim().isEmpty()) this.accountHolder = name;\n        }\n        public void display() {\n            System.out.println("Account: " + accountNumber);\n            System.out.println("Holder: " + accountHolder);\n            System.out.println("Balance: $" + balance);\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.setAccountNumber("ACC1234567");\n        acc.setAccountNumber("ACC12345678");\n        acc.setAccountHolder("John Doe");\n        acc.setBalance(1000);\n        acc.setBalance(-500);\n        acc.display();\n    }\n}',
    hint: "Setters protect data integrity",
  },
  {
    id: "encapsulation_3",
    topicId: "encapsulation",
    question: "Read-only class (only getters, no setters).",
    mathSolution: "Immutable data exposure through getters only",
    codeSolution: 'public class Main {\n    static class Product {\n        private String id;\n        private String name;\n        private double price;\n        public Product(String id, String name, double price) {\n            this.id = id; this.name = name; this.price = price;\n        }\n        public String getId() { return id; }\n        public String getName() { return name; }\n        public double getPrice() { return price; }\n    }\n    public static void main(String[] args) {\n        Product p = new Product("P101", "Laptop", 999.99);\n        System.out.println(p.getId() + ": " + p.getName() + " - $" + p.getPrice());\n    }\n}',
    hint: "Read-only class for data that shouldn't change",
  },
  {
    id: "encapsulation_4",
    topicId: "encapsulation",
    question: "Write-only class (only setters, no getters).",
    mathSolution: "Data can be set but not read directly",
    codeSolution: 'public class Main {\n    static class PasswordManager {\n        private String password;\n        public void setPassword(String password) {\n            this.password = password;\n            System.out.println("Password set and encrypted: " + encrypt(password));\n        }\n        private String encrypt(String pwd) { return "***" + pwd.hashCode() + "***"; }\n        public boolean authenticate(String input) {\n            return password != null && password.equals(input);\n        }\n    }\n    public static void main(String[] args) {\n        PasswordManager pm = new PasswordManager();\n        pm.setPassword("secret123");\n        System.out.println("Authentication: " + pm.authenticate("wrong"));\n        System.out.println("Authentication: " + pm.authenticate("secret123"));\n    }\n}',
    hint: "Write-only for sensitive data",
  },

  // GETTER/SETTER VARIATIONS (4)
  {
    id: "encapsulation_5",
    topicId: "encapsulation",
    question: "Custom getter that returns calculated value.",
    mathSolution: "Getter can compute value instead of just returning",
    codeSolution: 'public class Main {\n    static class Rectangle {\n        private double length, width;\n        public void setLength(double l) { length = l; }\n        public void setWidth(double w) { width = w; }\n        public double getArea() { return length * width; }\n        public double getPerimeter() { return 2 * (length + width); }\n        public double getLength() { return length; }\n        public double getWidth() { return width; }\n    }\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle();\n        r.setLength(5.5);\n        r.setWidth(3.2);\n        System.out.println("Length: " + r.getLength());\n        System.out.println("Width: " + r.getWidth());\n        System.out.println("Area: " + r.getArea());\n        System.out.println("Perimeter: " + r.getPerimeter());\n    }\n}',
    hint: "Getters can compute derived values",
  },
  {
    id: "encapsulation_6",
    topicId: "encapsulation",
    question: "Setter with side effects.",
    mathSolution: "Setting one field can affect others",
    codeSolution: 'public class Main {\n    static class Temperature {\n        private double celsius, fahrenheit;\n        public void setCelsius(double c) {\n            celsius = c;\n            fahrenheit = (c * 9/5) + 32;\n        }\n        public void setFahrenheit(double f) {\n            fahrenheit = f;\n            celsius = (f - 32) * 5/9;\n        }\n        public double getCelsius() { return celsius; }\n        public double getFahrenheit() { return fahrenheit; }\n    }\n    public static void main(String[] args) {\n        Temperature temp = new Temperature();\n        temp.setCelsius(25);\n        System.out.println("Celsius: " + temp.getCelsius());\n        System.out.println("Fahrenheit: " + temp.getFahrenheit());\n        temp.setFahrenheit(98.6);\n        System.out.println("Celsius: " + temp.getCelsius());\n        System.out.println("Fahrenheit: " + temp.getFahrenheit());\n    }\n}',
    hint: "Setters can maintain consistency between fields",
  },
  {
    id: "encapsulation_7",
    topicId: "encapsulation",
    question: "Getter returning defensive copy of collection.",
    mathSolution: "Protect internal collections from modification",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student {\n        private String name;\n        private List<Integer> grades = new ArrayList<>();\n        public void setName(String name) { this.name = name; }\n        public void addGrade(int grade) { grades.add(grade); }\n        public List<Integer> getGrades() { return new ArrayList<>(grades); }\n        public List<Integer> getGradesUnmodifiable() { return Collections.unmodifiableList(grades); }\n    }\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.setName("Alice");\n        s.addGrade(85);\n        s.addGrade(90);\n        List<Integer> grades = s.getGrades();\n        grades.add(95);\n        System.out.println("Original grades: " + s.getGrades());\n        List<Integer> unmod = s.getGradesUnmodifiable();\n        System.out.println("Unmodifiable view: " + unmod);\n    }\n}',
    hint: "Defensive copying prevents external modification",
  },
  {
    id: "encapsulation_8",
    topicId: "encapsulation",
    question: "Boolean getter with 'is' prefix convention.",
    mathSolution: "Boolean getters use 'is' instead of 'get'",
    codeSolution: 'public class Main {\n    static class User {\n        private boolean active, admin, loggedIn;\n        public void setActive(boolean active) { this.active = active; }\n        public void setAdmin(boolean admin) { this.admin = admin; }\n        public void setLoggedIn(boolean loggedIn) { this.loggedIn = loggedIn; }\n        public boolean isActive() { return active; }\n        public boolean isAdmin() { return admin; }\n        public boolean isLoggedIn() { return loggedIn; }\n    }\n    public static void main(String[] args) {\n        User u = new User();\n        u.setActive(true);\n        u.setAdmin(false);\n        u.setLoggedIn(true);\n        System.out.println("Active: " + u.isActive());\n        System.out.println("Admin: " + u.isAdmin());\n        System.out.println("Logged in: " + u.isLoggedIn());\n        if(u.isActive() && u.isLoggedIn()) System.out.println("User can access system");\n    }\n}',
    hint: "Convention: isXyz() for boolean getters",
  },

  // PACKAGE-LEVEL ENCAPSULATION (3)
  {
    id: "encapsulation_9",
    topicId: "encapsulation",
    question: "Use default (package-private) access modifier.",
    mathSolution: "Package-private accessible within same package",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        int age;\n        protected String city;\n        public String country;\n        public Person(String name, int age, String city, String country) {\n            this.name = name; this.age = age; this.city = city; this.country = country;\n        }\n        public String getName() { return name; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25, "NYC", "USA");\n        System.out.println("Age: " + p.age);\n        System.out.println("City: " + p.city);\n        System.out.println("Country: " + p.country);\n    }\n}',
    hint: "Default access balances encapsulation and accessibility",
  },
  {
    id: "encapsulation_10",
    topicId: "encapsulation",
    question: "Protected access in different packages.",
    mathSolution: "Protected members accessible in subclasses",
    codeSolution: 'public class Main {\n    static class Animal {\n        protected String species;\n        protected void makeSound() { System.out.println("Animal sound"); }\n    }\n    static class Dog extends Animal {\n        public void display() {\n            species = "Canine";\n            makeSound();\n            System.out.println("Species: " + species);\n        }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.display();\n    }\n}',
    hint: "Protected allows inheritance-based access across packages",
  },
  {
    id: "encapsulation_11",
    topicId: "encapsulation",
    question: "Design public API with encapsulated internals.",
    mathSolution: "Hide implementation details, expose only what's needed",
    codeSolution: 'public class Main {\n    static class Stack {\n        private int[] elements;\n        private int size;\n        private static final int DEFAULT_CAPACITY = 10;\n        public Stack() { elements = new int[DEFAULT_CAPACITY]; size = 0; }\n        public void push(int value) {\n            if(size == elements.length) resize();\n            elements[size++] = value;\n        }\n        public int pop() {\n            if(isEmpty()) throw new IllegalStateException("Stack empty");\n            return elements[--size];\n        }\n        public int peek() { if(isEmpty()) throw new IllegalStateException("Stack empty"); return elements[size-1]; }\n        public boolean isEmpty() { return size == 0; }\n        public int size() { return size; }\n        private void resize() {\n            int[] newElements = new int[elements.length * 2];\n            System.arraycopy(elements, 0, newElements, 0, size);\n            elements = newElements;\n        }\n    }\n    public static void main(String[] args) {\n        Stack stack = new Stack();\n        stack.push(10);\n        stack.push(20);\n        stack.push(30);\n        System.out.println("Pop: " + stack.pop());\n        System.out.println("Peek: " + stack.peek());\n        System.out.println("Size: " + stack.size());\n    }\n}',
    hint: "Public API should hide implementation details",
  },

  // IMMUTABLE CLASSES (3)
  {
    id: "encapsulation_12",
    topicId: "encapsulation",
    question: "Create a fully immutable class.",
    mathSolution: "All fields final, no setters, defensive copying",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static final class ImmutablePerson {\n        private final String name;\n        private final int age;\n        private final List<String> hobbies;\n        public ImmutablePerson(String name, int age, List<String> hobbies) {\n            this.name = name;\n            this.age = age;\n            this.hobbies = new ArrayList<>(hobbies);\n        }\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public List<String> getHobbies() { return new ArrayList<>(hobbies); }\n    }\n    public static void main(String[] args) {\n        List<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\n        ImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n        hobbies.add("Swimming");\n        System.out.println(p.getName() + ", " + p.getAge());\n        System.out.println("Hobbies: " + p.getHobbies());\n    }\n}',
    hint: "Immutable objects are thread-safe and reliable",
  },
  {
    id: "encapsulation_13",
    topicId: "encapsulation",
    question: "Immutable class with builder pattern.",
    mathSolution: "Builder constructs immutable objects",
    codeSolution: 'public class Main {\n    static final class Employee {\n        private final int id;\n        private final String name;\n        private final String department;\n        private final double salary;\n        private Employee(Builder builder) {\n            this.id = builder.id;\n            this.name = builder.name;\n            this.department = builder.department;\n            this.salary = builder.salary;\n        }\n        public int getId() { return id; }\n        public String getName() { return name; }\n        public String getDepartment() { return department; }\n        public double getSalary() { return salary; }\n        public static class Builder {\n            private int id;\n            private String name;\n            private String department;\n            private double salary;\n            public Builder id(int id) { this.id = id; return this; }\n            public Builder name(String name) { this.name = name; return this; }\n            public Builder department(String dept) { this.department = dept; return this; }\n            public Builder salary(double salary) { this.salary = salary; return this; }\n            public Employee build() { return new Employee(this); }\n        }\n    }\n    public static void main(String[] args) {\n        Employee emp = new Employee.Builder().id(101).name("Alice").department("Engineering").salary(75000).build();\n        System.out.println(emp.getName() + " works in " + emp.getDepartment());\n    }\n}',
    hint: "Builder pattern handles many parameters elegantly",
  },
  {
    id: "encapsulation_14",
    topicId: "encapsulation",
    question: "Defensive copying in constructor and getters.",
    mathSolution: "Protect against external modification of internal state",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student { String name; Student(String n) { name = n; } public String toString() { return name; } }\n    static class Course {\n        private final String name;\n        private final List<Student> students;\n        public Course(String name, List<Student> students) {\n            this.name = name;\n            this.students = new ArrayList<>(students);\n        }\n        public String getName() { return name; }\n        public List<Student> getStudents() { return new ArrayList<>(students); }\n        public void addStudent(Student s) { students.add(s); }\n        public int getStudentCount() { return students.size(); }\n    }\n    public static void main(String[] args) {\n        List<Student> externalList = new ArrayList<>();\n        externalList.add(new Student("Alice"));\n        externalList.add(new Student("Bob"));\n        Course course = new Course("Java", externalList);\n        externalList.add(new Student("Charlie"));\n        System.out.println("Course students: " + course.getStudents());\n        System.out.println("Count: " + course.getStudentCount());\n        List<Student> retrieved = course.getStudents();\n        retrieved.add(new Student("Dave"));\n        System.out.println("After external modify attempt: " + course.getStudents());\n    }\n}',
    hint: "Defensive copying prevents state corruption",
  },

  // ENCAPSULATION WITH INHERITANCE (3)
  {
    id: "encapsulation_15",
    topicId: "encapsulation",
    question: "Protected fields in inheritance hierarchy.",
    mathSolution: "Protected allows access in subclasses",
    codeSolution: 'public class Main {\n    static class Shape {\n        protected String color;\n        protected double area;\n        protected void calculateArea() {}\n        public void display() { System.out.println("Color: " + color + ", Area: " + area); }\n    }\n    static class Circle extends Shape {\n        private double radius;\n        public Circle(double radius, String color) { this.radius = radius; this.color = color; }\n        protected void calculateArea() { area = Math.PI * radius * radius; }\n        public void processCircle() { calculateArea(); }\n    }\n    static class Rectangle extends Shape {\n        private double length, width;\n        public Rectangle(double l, double w, String color) { length = l; width = w; this.color = color; }\n        protected void calculateArea() { area = length * width; }\n        public void processRect() { calculateArea(); }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5, "Red");\n        c.processCircle();\n        c.display();\n        Rectangle r = new Rectangle(4, 6, "Blue");\n        r.processRect();\n        r.display();\n    }\n}',
    hint: "Protected balances encapsulation and inheritance",
  },
  {
    id: "encapsulation_16",
    topicId: "encapsulation",
    question: "Template method pattern with protected abstract methods.",
    mathSolution: "Protected abstract methods define contract for subclasses",
    codeSolution: 'public class Main {\n    static abstract class DataProcessor {\n        public final void process() {\n            loadData();\n            processData();\n            saveResults();\n            cleanup();\n        }\n        protected abstract void loadData();\n        protected abstract void processData();\n        protected abstract void saveResults();\n        protected void cleanup() { System.out.println("Default cleanup"); }\n    }\n    static class CSVProcessor extends DataProcessor {\n        protected void loadData() { System.out.println("Loading CSV file"); }\n        protected void processData() { System.out.println("Processing CSV data"); }\n        protected void saveResults() { System.out.println("Saving CSV results"); }\n    }\n    static class XMLProcessor extends DataProcessor {\n        protected void loadData() { System.out.println("Loading XML file"); }\n        protected void processData() { System.out.println("Parsing XML data"); }\n        protected void saveResults() { System.out.println("Saving XML results"); }\n        protected void cleanup() { System.out.println("Closing XML parser"); }\n    }\n    public static void main(String[] args) {\n        CSVProcessor csv = new CSVProcessor();\n        csv.process();\n        System.out.println();\n        XMLProcessor xml = new XMLProcessor();\n        xml.process();\n    }\n}',
    hint: "Template method pattern uses protected abstract methods",
  },
  {
    id: "encapsulation_17",
    topicId: "encapsulation",
    question: "Accessing private fields via protected methods.",
    mathSolution: "Protected methods provide controlled access to private fields",
    codeSolution: 'public class Main {\n    static class Employee {\n        private String name;\n        private double salary;\n        public Employee(String name, double salary) { this.name = name; this.salary = salary; }\n        protected String getName() { return name; }\n        protected double getSalary() { return salary; }\n        protected double calculateBonus() { return salary * 0.1; }\n    }\n    static class Manager extends Employee {\n        private double teamBonus;\n        public Manager(String name, double salary, double teamBonus) { super(name, salary); this.teamBonus = teamBonus; }\n        public void displayDetails() {\n            System.out.println("Manager: " + getName());\n            System.out.println("Base salary: $" + getSalary());\n            System.out.println("Personal bonus: $" + calculateBonus());\n            System.out.println("Team bonus: $" + teamBonus);\n            System.out.println("Total: $" + (getSalary() + calculateBonus() + teamBonus));\n        }\n    }\n    public static void main(String[] args) {\n        Manager m = new Manager("Alice", 80000, 5000);\n        m.displayDetails();\n    }\n}',
    hint: "Protected methods give subclasses controlled access",
  },

  // ENCAPSULATION BEST PRACTICES (3)
  {
    id: "encapsulation_18",
    topicId: "encapsulation",
    question: "Prefer immutable fields where possible.",
    mathSolution: "Final fields make class thread-safe and simpler",
    codeSolution: 'public class Main {\n    static class Configuration {\n        private final String appName;\n        private final String version;\n        private final int maxUsers;\n        private final boolean debugMode;\n        public Configuration(String appName, String version, int maxUsers, boolean debugMode) {\n            this.appName = appName; this.version = version; this.maxUsers = maxUsers; this.debugMode = debugMode;\n        }\n        public String getAppName() { return appName; }\n        public String getVersion() { return version; }\n        public int getMaxUsers() { return maxUsers; }\n        public boolean isDebugMode() { return debugMode; }\n        public Configuration withMaxUsers(int newMax) { return new Configuration(appName, version, newMax, debugMode); }\n        public Configuration enableDebug() { return new Configuration(appName, version, maxUsers, true); }\n    }\n    public static void main(String[] args) {\n        Configuration config = new Configuration("MyApp", "1.0", 100, false);\n        System.out.println(config.getAppName() + " v" + config.getVersion());\n        Configuration debugConfig = config.enableDebug();\n        Configuration biggerConfig = config.withMaxUsers(500);\n        System.out.println("Original max users: " + config.getMaxUsers());\n        System.out.println("Debug mode: " + debugConfig.isDebugMode());\n        System.out.println("Bigger config: " + biggerConfig.getMaxUsers());\n    }\n}',
    hint: "Immutable fields simplify reasoning about code",
  },
  {
    id: "encapsulation_19",
    topicId: "encapsulation",
    question: "Encapsulate what varies - hide implementation details.",
    mathSolution: "Hide changing implementations behind stable interface",
    codeSolution: 'public class Main {\n    interface PaymentGateway {\n        void processPayment(double amount);\n        String getStatus();\n    }\n    static class PayPalGateway implements PaymentGateway {\n        private String apiKey;\n        private String status;\n        public PayPalGateway(String apiKey) { this.apiKey = apiKey; }\n        public void processPayment(double amount) {\n            System.out.println("Connecting to PayPal API with key: ****" + apiKey.substring(apiKey.length()-4));\n            status = "SUCCESS";\n        }\n        public String getStatus() { return status; }\n    }\n    static class StripeGateway implements PaymentGateway {\n        private String secretKey;\n        private String transactionId;\n        public StripeGateway(String secretKey) { this.secretKey = secretKey; }\n        public void processPayment(double amount) {\n            System.out.println("Stripe processing with key length: " + secretKey.length());\n            transactionId = "txn_" + System.currentTimeMillis();\n        }\n        public String getStatus() { return transactionId != null ? "COMPLETED" : "PENDING"; }\n    }\n    static class PaymentService {\n        private PaymentGateway gateway;\n        public PaymentService(PaymentGateway gateway) { this.gateway = gateway; }\n        public void pay(double amount) { gateway.processPayment(amount); System.out.println("Payment status: " + gateway.getStatus()); }\n    }\n    public static void main(String[] args) {\n        PaymentService service1 = new PaymentService(new PayPalGateway("paypal_key_123"));\n        service1.pay(100.50);\n        PaymentService service2 = new PaymentService(new StripeGateway("stripe_secret_456"));\n        service2.pay(75.25);\n    }\n}',
    hint: "Encapsulate varying implementations behind stable interfaces",
  },
  {
    id: "encapsulation_20",
    topicId: "encapsulation",
    question: "Encapsulation with validation and business rules.",
    mathSolution: "Keep business logic inside the class",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class BankAccount {\n        private String accountNumber;\n        private double balance;\n        private double overdraftLimit;\n        private List<String> transactions;\n        public BankAccount(String accountNumber, double overdraftLimit) {\n            this.accountNumber = accountNumber;\n            this.overdraftLimit = overdraftLimit;\n            this.balance = 0;\n            this.transactions = new ArrayList<>();\n            addTransaction("Account created");\n        }\n        public void deposit(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Deposit amount must be positive");\n            balance += amount;\n            addTransaction("Deposited: $" + amount);\n        }\n        public boolean withdraw(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Withdrawal amount must be positive");\n            if(amount > balance + overdraftLimit) { System.out.println("Insufficient funds"); return false; }\n            balance -= amount;\n            addTransaction("Withdrew: $" + amount);\n            return true;\n        }\n        public double getBalance() { return balance; }\n        public List<String> getTransactionHistory() { return new ArrayList<>(transactions); }\n        private void addTransaction(String transaction) { transactions.add(transaction + " - Balance: $" + balance); }\n        public void displayAccountInfo() {\n            System.out.println("Account: " + accountNumber);\n            System.out.println("Balance: $" + balance);\n            System.out.println("Overdraft limit: $" + overdraftLimit);\n            System.out.println("Available: $" + (balance + overdraftLimit));\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount("ACC123", 500);\n        acc.deposit(1000);\n        acc.withdraw(200);\n        acc.withdraw(1500);\n        acc.withdraw(1000);\n        acc.displayAccountInfo();\n        System.out.println("\\nTransactions:");\n        for(String t : acc.getTransactionHistory()) System.out.println(t);\n    }\n}',
    hint: "Business rules are encapsulated within the class",
  },
  {
    "id": "encapsulation_21",
    "topicId": "encapsulation",
    "question": "Create a class with a private field that is lazily initialized using a getter. The field is expensive to compute, so compute it only once when first accessed.",
    "mathSolution": "Lazy initialization delays resource-heavy computation until needed.",
    "codeSolution": "public class Main {\n    static class LazyData {\n        private String heavyData;\n        private String computeHeavyData() {\n            System.out.println(\"Computing heavy data...\");\n            return \"Expensive Computation Result\";\n        }\n        public String getData() {\n            if (heavyData == null) {\n                heavyData = computeHeavyData();\n            }\n            return heavyData;\n        }\n    }\n    public static void main(String[] args) {\n        LazyData data = new LazyData();\n        System.out.println(\"Object created, data not yet computed.\");\n        System.out.println(\"First access: \" + data.getData());\n        System.out.println(\"Second access: \" + data.getData());\n    }\n}",
    "hint": "Check if field is null in getter before computing."
  },
  {
    "id": "encapsulation_22",
    "topicId": "encapsulation",
    "question": "Implement a setter that validates age range (0 to 120). Throw IllegalArgumentException for invalid age.",
    "mathSolution": "Setter should enforce business rules on allowed values.",
    "codeSolution": "public class Main {\n    static class Person {\n        private int age;\n        public void setAge(int age) {\n            if (age < 0 || age > 120) {\n                throw new IllegalArgumentException(\"Age must be between 0 and 120\");\n            }\n            this.age = age;\n            System.out.println(\"Age set to \" + age);\n        }\n        public int getAge() { return age; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        try {\n            p.setAge(25);\n            p.setAge(150);\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use if condition and throw IllegalArgumentException."
  },
  {
    "id": "encapsulation_23",
    "topicId": "encapsulation",
    "question": "Create a getter that returns a formatted string representation of a private date field (using java.time.LocalDate).",
    "mathSolution": "Getter can return a transformed version of internal data.",
    "codeSolution": "import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\npublic class Main {\n    static class Event {\n        private LocalDate date;\n        public Event(int year, int month, int day) {\n            this.date = LocalDate.of(year, month, day);\n        }\n        public String getFormattedDate() {\n            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd/MM/yyyy\");\n            return date.format(formatter);\n        }\n    }\n    public static void main(String[] args) {\n        Event e = new Event(2024, 12, 25);\n        System.out.println(\"Formatted date: \" + e.getFormattedDate());\n    }\n}",
    "hint": "Use DateTimeFormatter to format date in getter."
  },
  {
    "id": "encapsulation_24",
    "topicId": "encapsulation",
    "question": "Write a setter that triggers a side effect: updating a lastModified timestamp whenever any field changes.",
    "mathSolution": "Encapsulate related state changes together.",
    "codeSolution": "import java.time.LocalDateTime;\npublic class Main {\n    static class Document {\n        private String content;\n        private LocalDateTime lastModified;\n        public void setContent(String content) {\n            this.content = content;\n            this.lastModified = LocalDateTime.now();\n            System.out.println(\"Content updated. Last modified: \" + lastModified);\n        }\n        public String getContent() { return content; }\n        public LocalDateTime getLastModified() { return lastModified; }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Document doc = new Document();\n        doc.setContent(\"First version\");\n        Thread.sleep(1000);\n        doc.setContent(\"Second version\");\n    }\n}",
    "hint": "Update lastModified inside setter."
  },
  {
    "id": "encapsulation_25",
    "topicId": "encapsulation",
    "question": "Use an enum to restrict possible values for a field in a setter. Provide a getter for the enum.",
    "mathSolution": "Enums provide compile-time safety for fixed set of values.",
    "codeSolution": "public class Main {\n    enum Status { PENDING, APPROVED, REJECTED }\n    static class Request {\n        private Status status;\n        public void setStatus(Status status) {\n            this.status = status;\n            System.out.println(\"Status set to \" + status);\n        }\n        public Status getStatus() { return status; }\n    }\n    public static void main(String[] args) {\n        Request req = new Request();\n        req.setStatus(Status.PENDING);\n        req.setStatus(Status.APPROVED);\n    }\n}",
    "hint": "Use enum type for field to limit possible values."
  },
  {
    "id": "encapsulation_26",
    "topicId": "encapsulation",
    "question": "Make a class thread-safe by adding synchronized keyword to getter and setter methods for a shared counter.",
    "mathSolution": "Synchronization ensures visibility and atomicity in multithreaded environment.",
    "codeSolution": "public class Main {\n    static class Counter {\n        private int count = 0;\n        public synchronized void increment() {\n            count++;\n        }\n        public synchronized int getCount() {\n            return count;\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Thread t1 = new Thread(() -> { for(int i=0;i<1000;i++) counter.increment(); });\n        Thread t2 = new Thread(() -> { for(int i=0;i<1000;i++) counter.increment(); });\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(\"Final count: \" + counter.getCount());\n    }\n}",
    "hint": "Use synchronized keyword on methods to prevent race conditions."
  },
  {
    "id": "encapsulation_27",
    "topicId": "encapsulation",
    "question": "Create a getter that returns an Optional to clearly indicate that a value may be absent.",
    "mathSolution": "Optional makes null handling explicit and safer.",
    "codeSolution": "import java.util.Optional;\npublic class Main {\n    static class User {\n        private String middleName;\n        public void setMiddleName(String middleName) { this.middleName = middleName; }\n        public Optional<String> getMiddleName() {\n            return Optional.ofNullable(middleName);\n        }\n    }\n    public static void main(String[] args) {\n        User u = new User();\n        System.out.println(\"Middle name present? \" + u.getMiddleName().isPresent());\n        u.setMiddleName(\"James\");\n        u.getMiddleName().ifPresent(m -> System.out.println(\"Middle name: \" + m));\n    }\n}",
    "hint": "Return Optional.ofNullable(field) in getter."
  },
  {
    "id": "encapsulation_28",
    "topicId": "encapsulation",
    "question": "Encapsulate a counter that cannot exceed a maximum limit. Provide increment and decrement methods with validation.",
    "mathSolution": "Encapsulation ensures internal state remains consistent.",
    "codeSolution": "public class Main {\n    static class BoundedCounter {\n        private int value;\n        private final int max;\n        public BoundedCounter(int max) { this.max = max; }\n        public void increment() {\n            if (value < max) {\n                value++;\n                System.out.println(\"Incremented to \" + value);\n            } else {\n                System.out.println(\"Cannot increment beyond \" + max);\n            }\n        }\n        public void decrement() {\n            if (value > 0) {\n                value--;\n                System.out.println(\"Decremented to \" + value);\n            } else {\n                System.out.println(\"Cannot decrement below 0\");\n            }\n        }\n        public int getValue() { return value; }\n    }\n    public static void main(String[] args) {\n        BoundedCounter c = new BoundedCounter(3);\n        c.increment(); c.increment(); c.increment(); c.increment();\n        c.decrement(); c.decrement(); c.decrement(); c.decrement();\n    }\n}",
    "hint": "Check bounds before updating."
  },
  {
    "id": "encapsulation_29",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a time interval (start and end as LocalTime). Provide a method to check if a given time falls within the interval.",
    "mathSolution": "Encapsulate validation logic inside the class.",
    "codeSolution": "import java.time.LocalTime;\npublic class Main {\n    static class TimeInterval {\n        private LocalTime start;\n        private LocalTime end;\n        public void setInterval(LocalTime start, LocalTime end) {\n            if (start.isAfter(end)) {\n                throw new IllegalArgumentException(\"Start must be before end\");\n            }\n            this.start = start;\n            this.end = end;\n        }\n        public boolean contains(LocalTime time) {\n            return !time.isBefore(start) && !time.isAfter(end);\n        }\n    }\n    public static void main(String[] args) {\n        TimeInterval interval = new TimeInterval();\n        interval.setInterval(LocalTime.of(9, 0), LocalTime.of(17, 0));\n        System.out.println(interval.contains(LocalTime.of(12, 0))); // true\n        System.out.println(interval.contains(LocalTime.of(18, 0))); // false\n    }\n}",
    "hint": "Validate start < end in setter."
  },
  {
    "id": "encapsulation_30",
    "topicId": "encapsulation",
    "question": "Implement a shopping cart class that encapsulates a list of items. Provide methods to add, remove, and calculate total price.",
    "mathSolution": "Encapsulate collection and related operations.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class ShoppingCart {\n        private List<String> items = new ArrayList<>();\n        private List<Double> prices = new ArrayList<>();\n        public void addItem(String name, double price) {\n            items.add(name);\n            prices.add(price);\n            System.out.println(\"Added: \" + name + \" ($\" + price + \")\");\n        }\n        public void removeItem(int index) {\n            if (index >= 0 && index < items.size()) {\n                System.out.println(\"Removed: \" + items.remove(index));\n                prices.remove(index);\n            }\n        }\n        public double getTotal() {\n            double total = 0;\n            for (double p : prices) total += p;\n            return total;\n        }\n    }\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(\"Laptop\", 1200.00);\n        cart.addItem(\"Mouse\", 25.50);\n        cart.removeItem(1);\n        System.out.println(\"Total: $\" + cart.getTotal());\n    }\n}",
    "hint": "Store items and prices in parallel lists or a map."
  },
  {
    "id": "encapsulation_31",
    "topicId": "encapsulation",
    "question": "Encapsulate a student's grades in a list and provide a method to calculate the average grade. Ensure grades are between 0 and 100.",
    "mathSolution": "Validation and business logic inside class.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Student {\n        private List<Integer> grades = new ArrayList<>();\n        public void addGrade(int grade) {\n            if (grade < 0 || grade > 100) {\n                throw new IllegalArgumentException(\"Grade must be between 0 and 100\");\n            }\n            grades.add(grade);\n        }\n        public double getAverage() {\n            if (grades.isEmpty()) return 0;\n            int sum = 0;\n            for (int g : grades) sum += g;\n            return (double) sum / grades.size();\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.addGrade(85);\n        s.addGrade(92);\n        s.addGrade(78);\n        System.out.println(\"Average grade: \" + s.getAverage());\n    }\n}",
    "hint": "Validate grade before adding to list."
  },
  {
    "id": "encapsulation_32",
    "topicId": "encapsulation",
    "question": "Create a Book class with ISBN validation (must be exactly 13 digits). Provide getters and a constructor.",
    "mathSolution": "Encapsulate validation in constructor and setter.",
    "codeSolution": "public class Main {\n    static class Book {\n        private String isbn;\n        private String title;\n        public Book(String isbn, String title) {\n            setIsbn(isbn);\n            this.title = title;\n        }\n        public void setIsbn(String isbn) {\n            if (isbn == null || !isbn.matches(\"\\\\d{13}\")) {\n                throw new IllegalArgumentException(\"ISBN must be 13 digits\");\n            }\n            this.isbn = isbn;\n        }\n        public String getIsbn() { return isbn; }\n        public String getTitle() { return title; }\n    }\n    public static void main(String[] args) {\n        try {\n            Book b1 = new Book(\"9780134685991\", \"Effective Java\");\n            System.out.println(b1.getTitle() + \" - ISBN: \" + b1.getIsbn());\n            Book b2 = new Book(\"123\", \"Invalid\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use regex to validate ISBN format."
  },
  {
    "id": "encapsulation_33",
    "topicId": "encapsulation",
    "question": "Implement a class that encapsulates a 2D point (x, y) as immutable. Provide a method to calculate distance from origin.",
    "mathSolution": "Immutable objects are inherently thread-safe and predictable.",
    "codeSolution": "public class Main {\n    static final class Point {\n        private final int x;\n        private final int y;\n        public Point(int x, int y) { this.x = x; this.y = y; }\n        public int getX() { return x; }\n        public int getY() { return y; }\n        public double distanceFromOrigin() {\n            return Math.sqrt(x*x + y*y);\n        }\n    }\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        System.out.println(\"Point: (\" + p.getX() + \", \" + p.getY() + \")\");\n        System.out.println(\"Distance from origin: \" + p.distanceFromOrigin());\n    }\n}",
    "hint": "Make fields final and provide no setters."
  },
  {
    "id": "encapsulation_34",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a counter with a maximum value. Use java.util.concurrent.atomic.AtomicInteger for thread-safe increments.",
    "mathSolution": "Atomic classes provide lock-free thread safety.",
    "codeSolution": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n    static class SafeCounter {\n        private AtomicInteger value = new AtomicInteger(0);\n        private final int max;\n        public SafeCounter(int max) { this.max = max; }\n        public boolean increment() {\n            int current;\n            do {\n                current = value.get();\n                if (current >= max) return false;\n            } while (!value.compareAndSet(current, current + 1));\n            return true;\n        }\n        public int getValue() { return value.get(); }\n    }\n    public static void main(String[] args) {\n        SafeCounter c = new SafeCounter(5);\n        for (int i = 0; i < 6; i++) {\n            System.out.println(\"Increment success: \" + c.increment());\n        }\n        System.out.println(\"Final value: \" + c.getValue());\n    }\n}",
    "hint": "Use compareAndSet for safe increment."
  },
  {
    "id": "encapsulation_35",
    "topicId": "encapsulation",
    "question": "Encapsulate a range (min and max) with validation that min <= max. Provide methods to check if a value is within range.",
    "mathSolution": "Consistency validation in constructor/setter.",
    "codeSolution": "public class Main {\n    static class Range {\n        private final int min;\n        private final int max;\n        public Range(int min, int max) {\n            if (min > max) throw new IllegalArgumentException(\"min must be <= max\");\n            this.min = min;\n            this.max = max;\n        }\n        public boolean contains(int value) {\n            return value >= min && value <= max;\n        }\n        public int getMin() { return min; }\n        public int getMax() { return max; }\n    }\n    public static void main(String[] args) {\n        Range r = new Range(10, 20);\n        System.out.println(\"Contains 15: \" + r.contains(15));\n        System.out.println(\"Contains 25: \" + r.contains(25));\n    }\n}",
    "hint": "Validate in constructor."
  },
  {
    "id": "encapsulation_36",
    "topicId": "encapsulation",
    "question": "Create a Person class that encapsulates an email address and validates it (contains '@' and '.').",
    "mathSolution": "String validation in setter.",
    "codeSolution": "public class Main {\n    static class Person {\n        private String email;\n        public void setEmail(String email) {\n            if (email == null || !email.contains(\"@\") || !email.contains(\".\")) {\n                throw new IllegalArgumentException(\"Invalid email format\");\n            }\n            this.email = email;\n            System.out.println(\"Email set to \" + email);\n        }\n        public String getEmail() { return email; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        try {\n            p.setEmail(\"test@example.com\");\n            p.setEmail(\"invalid\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Check presence of '@' and '.' in email."
  },
  {
    "id": "encapsulation_37",
    "topicId": "encapsulation",
    "question": "Implement a product class where the price can never be negative. If negative value is passed to setter, set price to 0 instead.",
    "mathSolution": "Default safe value on invalid input.",
    "codeSolution": "public class Main {\n    static class Product {\n        private double price;\n        public void setPrice(double price) {\n            if (price < 0) {\n                System.out.println(\"Invalid price, setting to 0\");\n                this.price = 0;\n            } else {\n                this.price = price;\n            }\n        }\n        public double getPrice() { return price; }\n    }\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(-10);\n        System.out.println(\"Price: $\" + p.getPrice());\n        p.setPrice(99.99);\n        System.out.println(\"Price: $\" + p.getPrice());\n    }\n}",
    "hint": "Apply correction logic in setter."
  },
  {
    "id": "encapsulation_38",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a discount percentage (0-100). Provide a getter that returns the discounted price for a given original price.",
    "mathSolution": "Business logic encapsulated in getter.",
    "codeSolution": "public class Main {\n    static class Discount {\n        private int percent;\n        public void setPercent(int percent) {\n            if (percent < 0) this.percent = 0;\n            else if (percent > 100) this.percent = 100;\n            else this.percent = percent;\n        }\n        public double applyDiscount(double price) {\n            return price * (100 - percent) / 100;\n        }\n    }\n    public static void main(String[] args) {\n        Discount d = new Discount();\n        d.setPercent(20);\n        System.out.println(\"Discounted price: $\" + d.applyDiscount(100));\n    }\n}",
    "hint": "Clamp percentage to valid range."
  },
  {
    "id": "encapsulation_39",
    "topicId": "encapsulation",
    "question": "Encapsulate a bank account with a method to transfer money to another account, ensuring sufficient balance.",
    "mathSolution": "Cross-object validation.",
    "codeSolution": "public class Main {\n    static class BankAccount {\n        private double balance;\n        public void deposit(double amount) { balance += amount; }\n        public boolean withdraw(double amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return true;\n            }\n            return false;\n        }\n        public double getBalance() { return balance; }\n        public boolean transfer(BankAccount to, double amount) {\n            if (withdraw(amount)) {\n                to.deposit(amount);\n                return true;\n            }\n            return false;\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc1 = new BankAccount();\n        BankAccount acc2 = new BankAccount();\n        acc1.deposit(1000);\n        System.out.println(\"Transfer 300: \" + acc1.transfer(acc2, 300));\n        System.out.println(\"Acc1 balance: \" + acc1.getBalance());\n        System.out.println(\"Acc2 balance: \" + acc2.getBalance());\n    }\n}",
    "hint": "Use withdraw and deposit internally for transfer."
  },
  {
    "id": "encapsulation_40",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a calendar date with month and day. Provide a method to add days, ensuring month rollover.",
    "mathSolution": "Encapsulate complex logic inside class.",
    "codeSolution": "public class Main {\n    static class SimpleDate {\n        private int day;\n        private int month;\n        private static final int[] daysInMonth = {31,28,31,30,31,30,31,31,30,31,30,31};\n        public SimpleDate(int month, int day) {\n            if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month-1])\n                throw new IllegalArgumentException(\"Invalid date\");\n            this.month = month;\n            this.day = day;\n        }\n        public void addDays(int days) {\n            day += days;\n            while (day > daysInMonth[month-1]) {\n                day -= daysInMonth[month-1];\n                month++;\n                if (month > 12) month = 1;\n            }\n        }\n        public String getDate() { return month + \"/\" + day; }\n    }\n    public static void main(String[] args) {\n        SimpleDate date = new SimpleDate(2, 28);\n        date.addDays(3);\n        System.out.println(\"After adding 3 days: \" + date.getDate());\n    }\n}",
    "hint": "Handle month overflow by decrementing days."
  }
);