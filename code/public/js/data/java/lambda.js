QuizData.questions.push(
  // BASIC LAMBDA SYNTAX (4)
  {
    id: "lambda_1",
    topicId: "lambda",
    question: "Write a lambda expression with no parameters.",
    mathSolution: "Empty parentheses for zero-parameter lambda",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        Runnable r2 = () -> System.out.println("Hello from lambda");\n        r2.run();\n    }\n}',
    hint: "Use () for no parameters",
  },
  {
    id: "lambda_2",
    topicId: "lambda",
    question: "Write a lambda expression with one parameter.",
    mathSolution: "Single parameter can omit parentheses",
    codeSolution: 'import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<Integer, Integer> square = x -> x * x;\n        System.out.println("Square of 5: " + square.apply(5));\n    }\n}',
    hint: "Parentheses optional for single parameter",
  },
  {
    id: "lambda_3",
    topicId: "lambda",
    question: "Write a lambda expression with multiple parameters.",
    mathSolution: "Multiple parameters require parentheses",
    codeSolution: 'public class Main {\n    interface MathOperation { int operate(int a, int b); }\n    public static void main(String[] args) {\n        MathOperation addition = (a, b) -> a + b;\n        MathOperation multiplication = (a, b) -> a * b;\n        System.out.println("10 + 5 = " + addition.operate(10, 5));\n        System.out.println("10 * 5 = " + multiplication.operate(10, 5));\n    }\n}',
    hint: "Multiple parameters need parentheses",
  },
  {
    id: "lambda_4",
    topicId: "lambda",
    question: "Write a lambda expression with multiple statements in body.",
    mathSolution: "Multi-statement lambda requires curly braces and return",
    codeSolution: 'public class Main {\n    interface StringProcessor { String process(String s); }\n    public static void main(String[] args) {\n        StringProcessor processor = (str) -> {\n            String trimmed = str.trim();\n            String upper = trimmed.toUpperCase();\n            return "Processed: " + upper;\n        };\n        System.out.println(processor.process("  hello world  "));\n    }\n}',
    hint: "Use {} for multiple statements and explicit return",
  },

  // FUNCTIONAL INTERFACES (5)
  {
    id: "lambda_5",
    topicId: "lambda",
    question: "Use Predicate functional interface with lambda.",
    mathSolution: "Predicate<T> tests a condition and returns boolean",
    codeSolution: 'import java.util.function.Predicate;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<String> isEmpty = s -> s.isEmpty();\n        System.out.println("Is 4 even? " + isEven.test(4));\n        System.out.println("Is 7 even? " + isEven.test(7));\n        System.out.println("Is \'\' empty? " + isEmpty.test(""));\n        System.out.println("Is \'Hello\' empty? " + isEmpty.test("Hello"));\n    }\n}',
    hint: "Predicate returns boolean with test() method",
  },
  {
    id: "lambda_6",
    topicId: "lambda",
    question: "Use Function functional interface with lambda.",
    mathSolution: "Function<T,R> transforms T to R",
    codeSolution: 'import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<String, Integer> stringLength = s -> s.length();\n        Function<Integer, String> intToString = n -> "Number: " + n;\n        Function<String, String> quote = s -> "\'" + s + "\'";\n        System.out.println("Length of \'Hello\': " + stringLength.apply("Hello"));\n        System.out.println(intToString.apply(42));\n        System.out.println(quote.apply("Lambda"));\n        Function<String, String> quoteLength = stringLength.andThen(len -> "Length: " + len);\n        System.out.println(quoteLength.apply("Hello World"));\n    }\n}',
    hint: "Function has apply() method",
  },
  {
    id: "lambda_7",
    topicId: "lambda",
    question: "Use Consumer functional interface with lambda.",
    mathSolution: "Consumer<T> accepts input but returns no result",
    codeSolution: 'import java.util.function.Consumer;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        Consumer<String> print = s -> System.out.print(s + " ");\n        Consumer<String> printWithStars = s -> System.out.print("*" + s + "* ");\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        System.out.print("Names: ");\n        names.forEach(print);\n        System.out.print("\\nWith stars: ");\n        names.forEach(printWithStars);\n        Consumer<String> printTwice = print.andThen(print);\n        System.out.print("\\nTwice: ");\n        names.forEach(printTwice);\n        System.out.println();\n    }\n}',
    hint: "Consumer has accept() method",
  },
  {
    id: "lambda_8",
    topicId: "lambda",
    question: "Use Supplier functional interface with lambda.",
    mathSolution: "Supplier<T> provides a value with no input",
    codeSolution: 'import java.util.function.Supplier;\nimport java.util.Random;\npublic class Main {\n    public static void main(String[] args) {\n        Supplier<String> greeting = () -> "Hello, World!";\n        Supplier<Integer> randomNumber = () -> new Random().nextInt(100);\n        Supplier<Double> randomDouble = () -> Math.random() * 100;\n        System.out.println(greeting.get());\n        System.out.println("Random number: " + randomNumber.get());\n        System.out.println("Random double: " + randomDouble.get());\n        Supplier<Double> pi = () -> 3.14159;\n        System.out.println("Pi: " + pi.get());\n    }\n}',
    hint: "Supplier has get() method",
  },
  {
    id: "lambda_9",
    topicId: "lambda",
    question: "Combine multiple Predicates using and(), or(), negate().",
    mathSolution: "Predicate logical operations for complex conditions",
    codeSolution: 'import java.util.function.Predicate;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<Integer> isPositive = n -> n > 0;\n        Predicate<Integer> isDivisibleBy3 = n -> n % 3 == 0;\n        Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);\n        System.out.println("4 is even and positive: " + isEvenAndPositive.test(4));\n        System.out.println("-2 is even and positive: " + isEvenAndPositive.test(-2));\n        Predicate<Integer> isEvenOrDivisibleBy3 = isEven.or(isDivisibleBy3);\n        System.out.println("9 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(9));\n        System.out.println("5 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(5));\n        Predicate<Integer> isOdd = isEven.negate();\n        System.out.println("7 is odd: " + isOdd.test(7));\n        List<Integer> numbers = Arrays.asList(-3, -2, -1, 0, 1, 2, 3, 4, 5);\n        System.out.print("Even and positive: ");\n        numbers.stream().filter(isEven.and(isPositive)).forEach(n -> System.out.print(n + " "));\n        System.out.println();\n    }\n}',
    hint: "Predicate has and(), or(), negate() methods",
  },

  // LAMBDA WITH COLLECTIONS (5)
  {
    id: "lambda_10",
    topicId: "lambda",
    question: "Iterate over collection using forEach with lambda.",
    mathSolution: "forEach takes Consumer lambda",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> fruits = Arrays.asList("Apple", "Banana", "Orange", "Mango");\n        fruits.forEach(fruit -> System.out.println("I like " + fruit));\n        System.out.println("\\nUppercase:");\n        fruits.forEach(fruit -> System.out.println(fruit.toUpperCase()));\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("Alice", 25);\n        ages.put("Bob", 30);\n        ages.put("Charlie", 28);\n        ages.forEach((name, age) -> System.out.println(name + " is " + age + " years old"));\n    }\n}',
    hint: "forEach is a default method in Iterable",
  },
  {
    id: "lambda_11",
    topicId: "lambda",
    question: "Filter a list using lambda with Stream API.",
    mathSolution: "filter() with Predicate lambda",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println("Even numbers: " + evens);\n        List<Integer> greaterThan5 = numbers.stream().filter(n -> n > 5).collect(Collectors.toList());\n        System.out.println("Greater than 5: " + greaterThan5);\n        List<String> names = Arrays.asList("Alice", "Bob", "Anna", "Charlie", "Amanda");\n        List<String> startsWithA = names.stream().filter(name -> name.startsWith("A")).collect(Collectors.toList());\n        System.out.println("Names starting with A: " + startsWithA);\n    }\n}',
    hint: "filter() returns a new stream with matching elements",
  },
  {
    id: "lambda_12",
    topicId: "lambda",
    question: "Transform a list using map() with lambda.",
    mathSolution: "map() applies Function to each element",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("alice", "bob", "charlie");\n        List<String> upperNames = names.stream().map(name -> name.toUpperCase()).collect(Collectors.toList());\n        System.out.println("Uppercase: " + upperNames);\n        List<Integer> nameLengths = names.stream().map(name -> name.length()).collect(Collectors.toList());\n        System.out.println("Lengths: " + nameLengths);\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        List<Integer> squares = numbers.stream().map(n -> n * n).collect(Collectors.toList());\n        System.out.println("Squares: " + squares);\n    }\n}',
    hint: "map() transforms each element",
  },
  {
    id: "lambda_13",
    topicId: "lambda",
    question: "Sort a list using lambda comparator.",
    mathSolution: "Comparator as lambda for custom sorting",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Collections;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Charlie", "Alice", "Bob", "David");\n        System.out.println("Original: " + names);\n        Collections.sort(names);\n        System.out.println("Natural order: " + names);\n        Collections.sort(names, (a, b) -> a.length() - b.length());\n        System.out.println("By length: " + names);\n        Collections.sort(names, (a, b) -> b.compareTo(a));\n        System.out.println("Reverse alphabetical: " + names);\n        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);\n        numbers.sort((a, b) -> a - b);\n        System.out.println("Numbers ascending: " + numbers);\n        numbers.sort((a, b) -> b - a);\n        System.out.println("Numbers descending: " + numbers);\n    }\n}',
    hint: "Comparator is a functional interface",
  },
  {
    id: "lambda_14",
    topicId: "lambda",
    question: "Use reduce() to aggregate stream elements.",
    mathSolution: "reduce() combines elements using binary operator",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        int sum = numbers.stream().reduce(0, (a, b) -> a + b);\n        System.out.println("Sum: " + sum);\n        int product = numbers.stream().reduce(1, (a, b) -> a * b);\n        System.out.println("Product: " + product);\n        int max = numbers.stream().reduce(Integer.MIN_VALUE, (a, b) -> a > b ? a : b);\n        System.out.println("Max: " + max);\n        int min = numbers.stream().reduce(Integer.MAX_VALUE, (a, b) -> a < b ? a : b);\n        System.out.println("Min: " + min);\n        List<String> words = Arrays.asList("Hello", " ", "World", "!");\n        String sentence = words.stream().reduce("", (a, b) -> a + b);\n        System.out.println("Concatenated: " + sentence);\n    }\n}',
    hint: "reduce() combines elements into single result",
  },

  // METHOD REFERENCES (3)
  {
    id: "lambda_15",
    topicId: "lambda",
    question: "Use static method reference.",
    mathSolution: "ClassName::staticMethodName",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    static class MathUtils {\n        static int square(int x) { return x * x; }\n        static boolean isEven(int x) { return x % 2 == 0; }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        numbers.stream().map(MathUtils::square).forEach(x -> System.out.print(x + " "));\n        System.out.println("\\nEven numbers:");\n        numbers.stream().filter(MathUtils::isEven).forEach(x -> System.out.print(x + " "));\n        System.out.println();\n    }\n}',
    hint: "Static method reference uses Class::method",
  },
  {
    id: "lambda_16",
    topicId: "lambda",
    question: "Use instance method reference.",
    mathSolution: "object::instanceMethod or Class::instanceMethod",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    static class Printer {\n        void print(String s) { System.out.println("Printing: " + s); }\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        Printer printer = new Printer();\n        names.forEach(printer::print);\n        System.out.println("\\nUppercase:");\n        names.stream().map(String::toUpperCase).forEach(System.out::println);\n    }\n}',
    hint: "Two types: bound and unbound method references",
  },
  {
    id: "lambda_17",
    topicId: "lambda",
    question: "Use constructor reference.",
    mathSolution: "ClassName::new",
    codeSolution: 'import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    static class Person {\n        String name;\n        Person() { name = "Unknown"; }\n        Person(String name) { this.name = name; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        Supplier<Person> personFactory = Person::new;\n        Person p1 = personFactory.get();\n        System.out.println("Default person: " + p1);\n        Function<String, Person> personCreator = Person::new;\n        Person p2 = personCreator.apply("Alice");\n        System.out.println("Named person: " + p2);\n        List<String> names = Arrays.asList("Bob", "Charlie", "David");\n        List<Person> people = names.stream().map(Person::new).collect(Collectors.toList());\n        System.out.println("People: " + people);\n        Function<Integer, String[]> arrayCreator = String[]::new;\n        String[] array = arrayCreator.apply(5);\n        System.out.println("Array length: " + array.length);\n    }\n}',
    hint: "Constructor references create new objects",
  },

  // ADVANCED LAMBDA CONCEPTS (5)
  {
    id: "lambda_18",
    topicId: "lambda",
    question: "Create custom functional interface.",
    mathSolution: "@FunctionalInterface annotation ensures single abstract method",
    codeSolution: 'public class Main {\n    @FunctionalInterface\n    interface StringFormatter {\n        String format(String s1, String s2);\n        default void printHelp() { System.out.println("Formats two strings"); }\n        static StringFormatter createJoiner(String delimiter) {\n            return (s1, s2) -> s1 + delimiter + s2;\n        }\n    }\n    public static void main(String[] args) {\n        StringFormatter joiner = (a, b) -> a + " " + b;\n        System.out.println(joiner.format("Hello", "World"));\n        StringFormatter csv = (a, b) -> a + "," + b;\n        System.out.println(csv.format("Apple", "Banana"));\n        StringFormatter reverser = (a, b) -> new StringBuilder(a + b).reverse().toString();\n        System.out.println(reverser.format("AB", "CD"));\n        StringFormatter customJoiner = StringFormatter.createJoiner(" - ");\n        System.out.println(customJoiner.format("First", "Second"));\n    }\n}',
    hint: "@FunctionalInterface is optional but recommended",
  },
  {
    id: "lambda_19",
    topicId: "lambda",
    question: "Lambda with effectively final variables.",
    mathSolution: "Lambda can access effectively final local variables",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        String prefix = "Name: "; // effectively final\n        int multiplier = 2;\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(name -> System.out.println(prefix + name));\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        numbers.stream().map(n -> n * multiplier).forEach(n -> System.out.print(n + " "));\n        System.out.println();\n        class Example {\n            int instanceCounter = 0;\n            void process() { numbers.forEach(n -> instanceCounter++); }\n        }\n        System.out.println("Instance variable can be modified inside lambda.");\n    }\n}',
    hint: "Local variables must be effectively final (not changed after initialization)",
  },
  {
  id: "lambda_20",
  topicId: "lambda",
  question: "Handle checked exceptions in lambda.",
  mathSolution: "Wrap checked exceptions or use custom functional interface",
  codeSolution: 'import java.util.function.Function;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    @FunctionalInterface\n    interface ThrowingFunction<T, R> { R apply(T t) throws Exception; }\n\n    @SuppressWarnings("unchecked")\n    static <T, R> Function<T, R> wrap(ThrowingFunction<T, R> throwingFunction) {\n        return t -> {\n            try {\n                return throwingFunction.apply(t);\n            } catch (Exception e) {\n                // Return error message as String (safe because R is expected to be String in this demo)\n                return (R) ("Error: " + e.getMessage());\n            }\n        };\n    }\n\n    static String riskyOperation(String s) throws Exception {\n        if (s.equals("error")) {\n            throw new Exception("Simulated checked exception");\n        }\n        return "Processed: " + s;\n    }\n\n    public static void main(String[] args) {\n        List<String> inputs = Arrays.asList("hello", "world", "error", "lambda");\n        \n        // Solution 1: inline try-catch\n        System.out.println("Inline try-catch:");\n        inputs.stream().map(name -> {\n            try {\n                return riskyOperation(name);\n            } catch (Exception e) {\n                return "Error: " + e.getMessage();\n            }\n        }).forEach(System.out::println);\n        \n        // Solution 2: wrap helper (returns error message internally)\n        System.out.println("\\nUsing wrapper:");\n        inputs.stream()\n            .map(wrap(s -> riskyOperation(s)))\n            .forEach(System.out::println);\n        \n        System.out.println("\\nHandled checked exceptions in lambda (no crashes).");\n    }\n}',
  hint: "Standard functional interfaces don't throw checked exceptions – wrap and return error",
},
  {
    id: "lambda_21",
    topicId: "lambda",
    question: "Use flatMap() for nested collections.",
    mathSolution: "flatMap flattens multiple streams into one",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<List<Integer>> nestedNumbers = Arrays.asList(\n            Arrays.asList(1, 2, 3),\n            Arrays.asList(4, 5, 6),\n            Arrays.asList(7, 8, 9)\n        );\n        System.out.println("Nested: " + nestedNumbers);\n        List<Integer> flattened = nestedNumbers.stream().flatMap(list -> list.stream()).collect(Collectors.toList());\n        System.out.println("Flattened: " + flattened);\n        List<String> words = Arrays.asList("Hello", "World");\n        List<Character> characters = words.stream().flatMap(word -> word.chars().mapToObj(c -> (char) c)).collect(Collectors.toList());\n        System.out.println("Characters: " + characters);\n        List<String> sentences = Arrays.asList("Java is great", "Lambda expressions are cool");\n        List<String> allWords = sentences.stream().flatMap(sentence -> Arrays.stream(sentence.split(" "))).collect(Collectors.toList());\n        System.out.println("All words: " + allWords);\n    }\n}',
    hint: "flatMap() is map() + flattening",
  },
  {
    id: "lambda_22",
    topicId: "lambda",
    question: "Use groupingBy with lambda for complex grouping.",
    mathSolution: "Collectors.groupingBy with classifier function",
    codeSolution: 'import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    static class Person { String name; int age; String city; Person(String n, int a, String c) { name=n; age=a; city=c; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Person> people = Arrays.asList(\n            new Person("Alice", 25, "NYC"),\n            new Person("Bob", 30, "LA"),\n            new Person("Charlie", 25, "NYC"),\n            new Person("David", 30, "Chicago"),\n            new Person("Eve", 25, "LA")\n        );\n        Map<String, List<Person>> byCity = people.stream().collect(Collectors.groupingBy(p -> p.city));\n        System.out.println("By city: " + byCity);\n        Map<Integer, List<Person>> byAge = people.stream().collect(Collectors.groupingBy(p -> p.age));\n        System.out.println("By age: " + byAge);\n        Map<String, List<Person>> byAgeRange = people.stream().collect(Collectors.groupingBy(p -> p.age < 30 ? "Under 30" : "30 and over"));\n        System.out.println("By age range: " + byAgeRange);\n        Map<String, Long> countByCity = people.stream().collect(Collectors.groupingBy(p -> p.city, Collectors.counting()));\n        System.out.println("Count by city: " + countByCity);\n    }\n}',
    hint: "groupingBy creates Map from classifier function",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "lambda_23",
    topicId: "lambda",
    question: "Implement event handler using lambda.",
    mathSolution: "Lambda simplifies event listener implementation",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface ActionListener { void actionPerformed(String source); }\n    static class Button {\n        private List<ActionListener> listeners = new ArrayList<>();\n        void addActionListener(ActionListener listener) { listeners.add(listener); }\n        void click() { listeners.forEach(l -> l.actionPerformed("Button clicked")); }\n    }\n    public static void main(String[] args) {\n        Button button1 = new Button();\n        button1.addActionListener(new ActionListener() {\n            public void actionPerformed(String msg) { System.out.println("Button 1: " + msg); }\n        });\n        Button button2 = new Button();\n        button2.addActionListener(e -> System.out.println("Button 2: " + e));\n        Button button3 = new Button();\n        button3.addActionListener(e -> {\n            System.out.println("Button 3: " + e);\n            System.out.println("Event source: button3");\n        });\n        button1.click();\n        button2.click();\n        button3.click();\n    }\n}',
    hint: "Lambda makes event handling concise",
  },
  {
    id: "lambda_24",
    topicId: "lambda",
    question: "Use lambda with custom sorting of objects.",
    mathSolution: "Comparator.comparing with lambda for multi-level sorting",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Employee {\n        String name; double salary; int age;\n        Employee(String n, double s, int a) { name=n; salary=s; age=a; }\n        double getSalary() { return salary; }\n        int getAge() { return age; }\n        public String toString() { return name + "($" + salary + "," + age + ")"; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice", 75000, 25),\n            new Employee("Bob", 65000, 30),\n            new Employee("Charlie", 75000, 28),\n            new Employee("David", 80000, 35),\n            new Employee("Eve", 65000, 22)\n        );\n        employees.sort((e1, e2) -> Double.compare(e1.salary, e2.salary));\n        System.out.println("By salary: " + employees);\n        employees.sort((e1, e2) -> Double.compare(e2.salary, e1.salary));\n        System.out.println("By salary desc: " + employees);\n        employees.sort((e1, e2) -> e1.name.compareTo(e2.name));\n        System.out.println("By name: " + employees);\n        employees.sort((e1, e2) -> {\n            if(e1.salary != e2.salary) return Double.compare(e1.salary, e2.salary);\n            else return Integer.compare(e1.age, e2.age);\n        });\n        System.out.println("By salary then age: " + employees);\n        employees.sort(Comparator.comparing(Employee::getSalary).thenComparing(Employee::getAge).reversed());\n        System.out.println("Using Comparator.comparing: " + employees);\n    }\n}',
    hint: "Lambda enables flexible sorting logic",
  },
  {
    id: "lambda_25",
    topicId: "lambda",
    question: "Implement strategy pattern with lambda.",
    mathSolution: "Lambda replaces strategy interface implementations",
    codeSolution: 'import java.util.function.Function;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    static void processPayment(double amount, Function<Double, String> processor) {\n        System.out.println(processor.apply(amount));\n    }\n    public static void main(String[] args) {\n        Function<Double, String> creditCard = amount -> "Paid $" + amount + " using Credit Card (fee: $" + (amount * 0.02) + ")";\n        Function<Double, String> paypal = amount -> "Paid $" + amount + " using PayPal (fee: $" + (amount * 0.03) + ")";\n        Function<Double, String> bitcoin = amount -> "Paid $" + amount + " using Bitcoin (fee: $" + (amount * 0.01) + ")";\n        Function<Double, String> cash = amount -> "Paid $" + amount + " in Cash (no fee)";\n        processPayment(100.50, creditCard);\n        processPayment(75.25, paypal);\n        processPayment(200.00, bitcoin);\n        processPayment(50.00, cash);\n        processPayment(30.00, amount -> "Gift card payment of $" + amount + " (balance: $" + (amount - 5) + ")");\n        List<Double> prices = Arrays.asList(10.0, 20.0, 30.0);\n        Function<Double, Double> noDiscount = price -> price;\n        Function<Double, Double> tenPercentOff = price -> price * 0.9;\n        System.out.println("\\nPrices with different discounts:");\n        prices.stream().map(noDiscount).forEach(p -> System.out.print(p + " "));\n        System.out.println();\n        prices.stream().map(tenPercentOff).forEach(p -> System.out.print(p + " "));\n        System.out.println();\n    }\n}',
    hint: "Strategy pattern becomes trivial with lambdas",
  },
   {
    "id": "lambda_26",
    "topicId": "lambda",
    "question": "Create a lambda that takes two integers and returns their greatest common divisor (GCD). Use a custom functional interface.",
    "mathSolution": "Implement Euclidean algorithm using lambda.",
    "codeSolution": "public class Main {\n    interface GCDCalculator { int gcd(int a, int b); }\n    public static void main(String[] args) {\n        GCDCalculator gcd = (a, b) -> {\n            while (b != 0) { int temp = b; b = a % b; a = temp; }\n            return a;\n        };\n        System.out.println(\"GCD of 48 and 18: \" + gcd.gcd(48, 18));\n        System.out.println(\"GCD of 56 and 98: \" + gcd.gcd(56, 98));\n    }\n}",
    "hint": "Euclidean algorithm: while b != 0, set a = b, b = a % b."
  },
  {
    "id": "lambda_27",
    "topicId": "lambda",
    "question": "Write a lambda that takes a list of integers and returns the count of numbers greater than a threshold. Use a functional interface that accepts a List<Integer> and an int threshold.",
    "mathSolution": "Use stream filter and count.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Counter { int countAbove(List<Integer> list, int threshold); }\n    public static void main(String[] args) {\n        Counter counter = (list, threshold) ->\n            (int) list.stream().filter(n -> n > threshold).count();\n        List<Integer> numbers = Arrays.asList(5, 12, 8, 3, 15, 7);\n        System.out.println(\"Above 10: \" + counter.countAbove(numbers, 10));\n        System.out.println(\"Above 5: \" + counter.countAbove(numbers, 5));\n    }\n}",
    "hint": "Use stream().filter().count() and cast to int."
  },
  {
    "id": "lambda_28",
    "topicId": "lambda",
    "question": "Use a lambda with a custom functional interface to convert a string to its acronym (first letter of each word).",
    "mathSolution": "Split string, take first character of each word, join.",
    "codeSolution": "public class Main {\n    interface AcronymGenerator { String generate(String phrase); }\n    public static void main(String[] args) {\n        AcronymGenerator acronym = phrase -> {\n            String[] words = phrase.split(\" \");\n            StringBuilder sb = new StringBuilder();\n            for (String w : words) sb.append(Character.toUpperCase(w.charAt(0)));\n            return sb.toString();\n        };\n        System.out.println(acronym.generate(\"World Health Organization\"));\n        System.out.println(acronym.generate(\"Java Programming Language\"));\n    }\n}",
    "hint": "Split on space, take charAt(0) of each word."
  },
  {
  "id": "lambda_29",
  "topicId": "lambda",
  "question": "Write a lambda that returns a formatted string of a list of objects using a delimiter and a transformer function.",
  "mathSolution": "Use stream map and collect with joining.",
  "codeSolution": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface ListFormatter<T> { String format(List<T> list, Function<T, String> transformer, String delimiter); }\n    public static void main(String[] args) {\n        ListFormatter<Integer> intFormatter = (list, transformer, delim) ->\n            list.stream().map(transformer).collect(Collectors.joining(delim));\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        System.out.println(intFormatter.format(nums, n -> \"[\" + n + \"]\", \"-\"));\n        \n        ListFormatter<String> strFormatter = (list, transformer, delim) ->\n            list.stream().map(transformer).collect(Collectors.joining(delim));\n        List<String> words = Arrays.asList(\"Hello\", \"World\");\n        System.out.println(strFormatter.format(words, s -> s.toUpperCase(), \" \"));\n    }\n}",
  "hint": "Use map() and Collectors.joining()."
},
  {
    "id": "lambda_30",
    "topicId": "lambda",
    "question": "Create a lambda that reverses the order of characters in each word of a sentence, preserving word order.",
    "mathSolution": "Split, reverse each word, join.",
    "codeSolution": "public class Main {\n    interface WordReverser { String reverseWords(String sentence); }\n    public static void main(String[] args) {\n        WordReverser reverser = sentence -> {\n            String[] words = sentence.split(\" \");\n            StringBuilder result = new StringBuilder();\n            for (String w : words) {\n                result.append(new StringBuilder(w).reverse().toString()).append(\" \");\n            }\n            return result.toString().trim();\n        };\n        System.out.println(reverser.reverseWords(\"Hello World\"));\n        System.out.println(reverser.reverseWords(\"Java Lambda Expression\"));\n    }\n}",
    "hint": "Use StringBuilder.reverse() for each word."
  },
  {
    "id": "lambda_31",
    "topicId": "lambda",
    "question": "Write a lambda that checks if a given string is a valid email address (contains @ and .). Use Predicate.",
    "mathSolution": "Predicate with contains check.",
    "codeSolution": "import java.util.function.Predicate;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<String> isValidEmail = email -> email != null && email.contains(\"@\") && email.contains(\".\");\n        System.out.println(isValidEmail.test(\"test@example.com\"));\n        System.out.println(isValidEmail.test(\"invalid\"));\n        System.out.println(isValidEmail.test(\"user@domain\"));\n    }\n}",
    "hint": "Check for '@' and '.' in the string."
  },
  {
    "id": "lambda_32",
    "topicId": "lambda",
    "question": "Use a lambda to sort a list of strings by their length, then alphabetically for same length.",
    "mathSolution": "Comparator with thenComparing.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"cat\", \"banana\", \"apple\", \"dog\", \"car\");\n        words.sort(Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder()));\n        System.out.println(words);\n    }\n}",
    "hint": "Use Comparator.comparingInt and thenComparing."
  },
  {
    "id": "lambda_33",
    "topicId": "lambda",
    "question": "Create a lambda that takes a BiFunction to combine two strings and then apply a function to the result.",
    "mathSolution": "Use andThen on BiFunction.",
    "codeSolution": "import java.util.function.BiFunction;\nimport java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        BiFunction<String, String, String> concat = (a, b) -> a + b;\n        Function<String, String> toUpper = String::toUpperCase;\n        BiFunction<String, String, String> combined = concat.andThen(toUpper);\n        System.out.println(combined.apply(\"hello \", \"world\"));\n        System.out.println(combined.apply(\"java \", \"lambda\"));\n    }\n}",
    "hint": "Use BiFunction.andThen() to chain operations."
  },
  {
    "id": "lambda_34",
    "topicId": "lambda",
    "question": "Write a lambda that filters a list of integers and returns a list of only prime numbers. Use a custom functional interface.",
    "mathSolution": "Check primality for each number.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface PrimeFilter { List<Integer> getPrimes(List<Integer> numbers); }\n    static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i <= Math.sqrt(n); i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        PrimeFilter primeFilter = list -> {\n            List<Integer> result = new ArrayList<>();\n            for (int n : list) if (isPrime(n)) result.add(n);\n            return result;\n        };\n        List<Integer> numbers = Arrays.asList(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);\n        System.out.println(\"Primes: \" + primeFilter.getPrimes(numbers));\n    }\n}",
    "hint": "Helper method to check primality; filter using loop."
  },
  {
    "id": "lambda_35",
    "topicId": "lambda",
    "question": "Use a lambda to find the longest string in a list. If multiple, return the first one. Use BinaryOperator.",
    "mathSolution": "BinaryOperator.reduce with length comparison.",
    "codeSolution": "import java.util.*;\nimport java.util.function.BinaryOperator;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"cat\", \"elephant\", \"dog\", \"giraffe\", \"hippopotamus\");\n        BinaryOperator<String> longest = (s1, s2) -> s1.length() >= s2.length() ? s1 : s2;\n        String result = words.stream().reduce(longest).orElse(null);\n        System.out.println(\"Longest string: \" + result);\n    }\n}",
    "hint": "Use stream.reduce with a BinaryOperator."
  },
  {
    "id": "lambda_36",
    "topicId": "lambda",
    "question": "Write a lambda that returns a map of word frequencies from a list of strings using a custom functional interface.",
    "mathSolution": "Use Collectors.groupingBy and counting.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface FrequencyCounter { Map<String, Long> countFrequencies(List<String> words); }\n    public static void main(String[] args) {\n        FrequencyCounter counter = words -> words.stream()\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"banana\", \"apple\");\n        System.out.println(counter.countFrequencies(words));\n    }\n}",
    "hint": "Use Collectors.groupingBy with counting downstream."
  },
  {
    "id": "lambda_37",
    "topicId": "lambda",
    "question": "Create a lambda that takes a string and returns the number of vowels in it. Use a custom functional interface.",
    "mathSolution": "Count vowels (a,e,i,o,u) case-insensitive.",
    "codeSolution": "public class Main {\n    interface VowelCounter { int countVowels(String str); }\n    public static void main(String[] args) {\n        VowelCounter counter = s -> {\n            int count = 0;\n            for (char c : s.toLowerCase().toCharArray()) {\n                if (\"aeiou\".indexOf(c) != -1) count++;\n            }\n            return count;\n        };\n        System.out.println(counter.countVowels(\"Hello World\"));\n        System.out.println(counter.countVowels(\"Lambda Expressions\"));\n    }\n}",
    "hint": "Convert to lowercase and check against vowel set."
  },
  {
    "id": "lambda_38",
    "topicId": "lambda",
    "question": "Use a lambda to perform a binary operation (addition, subtraction, multiplication) on two integers selected by an operator character. Use a map of lambdas.",
    "mathSolution": "Map<Character, IntBinaryOperator>.",
    "codeSolution": "import java.util.*;\nimport java.util.function.IntBinaryOperator;\npublic class Main {\n    public static void main(String[] args) {\n        Map<Character, IntBinaryOperator> operations = new HashMap<>();\n        operations.put('+', (a, b) -> a + b);\n        operations.put('-', (a, b) -> a - b);\n        operations.put('*', (a, b) -> a * b);\n        operations.put('/', (a, b) -> a / b);\n        int x = 10, y = 5;\n        System.out.println(x + \" + \" + y + \" = \" + operations.get('+').applyAsInt(x, y));\n        System.out.println(x + \" - \" + y + \" = \" + operations.get('-').applyAsInt(x, y));\n        System.out.println(x + \" * \" + y + \" = \" + operations.get('*').applyAsInt(x, y));\n        System.out.println(x + \" / \" + y + \" = \" + operations.get('/').applyAsInt(x, y));\n    }\n}",
    "hint": "Store lambdas in a map keyed by operator."
  },
  {
    "id": "lambda_39",
    "topicId": "lambda",
    "question": "Write a lambda that returns a new list containing the squares of the elements of the input list, but only if the original element is even. Use Stream API.",
    "mathSolution": "Filter even, map to square, collect.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface SquareEven { List<Integer> squareEven(List<Integer> numbers); }\n    public static void main(String[] args) {\n        SquareEven processor = list -> list.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .collect(Collectors.toList());\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);\n        System.out.println(\"Squares of evens: \" + processor.squareEven(nums));\n    }\n}",
    "hint": "Use filter, map, and collect."
  },
  {
    "id": "lambda_40",
    "topicId": "lambda",
    "question": "Create a lambda that returns the average of a list of integers, returning 0 if empty. Use a custom functional interface.",
    "mathSolution": "Calculate sum and count, return average.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface AverageCalculator { double average(List<Integer> numbers); }\n    public static void main(String[] args) {\n        AverageCalculator avgCalc = list -> {\n            if (list.isEmpty()) return 0.0;\n            int sum = 0;\n            for (int n : list) sum += n;\n            return (double) sum / list.size();\n        };\n        List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);\n        System.out.println(\"Average: \" + avgCalc.average(nums));\n        System.out.println(\"Empty list: \" + avgCalc.average(new ArrayList<>()));\n    }\n}",
    "hint": "Handle empty list to avoid division by zero."
  }
);