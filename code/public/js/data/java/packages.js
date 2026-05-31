QuizData.questions.push(
  // BASIC PACKAGE CREATION (4)
  {
    id: "package_1",
    topicId: "package",
    question: "Create a simple package and add a class.",
    mathSolution: "Package declaration must be first statement",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Package example: com.myapp.Hello");\n        System.out.println("File: com/myapp/Hello.java");\n        System.out.println("package com.myapp;");\n        System.out.println("public class Hello { public void sayHello() { System.out.println(\\"Hello from package\\"); } }");\n        System.out.println("\\nThen in another file: import com.myapp.Hello;");\n    }\n}',
    hint: "Package declaration at top of file",
  },
  {
    id: "package_2",
    topicId: "package",
    question: "Create multiple classes in same package.",
    mathSolution: "Classes in same package don't need import",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Classes in same package: no import needed");\n        System.out.println("// File: com/math/Calculator.java");\n        System.out.println("package com.math; public class Calculator { public int add(int a,int b){return a+b;} }");\n        System.out.println("// File: com/math/Main.java");\n        System.out.println("package com.math; public class Main { public static void main(String[] args) { Calculator c = new Calculator(); System.out.println(c.add(5,3)); } }");\n    }\n}',
    hint: "Same package classes can access each other directly",
  },
  {
    id: "package_3",
    topicId: "package",
    question: "Package with nested directory structure.",
    mathSolution: "Package names match directory structure",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Nested package example: com.company.utils.Helper");\n        System.out.println("Directory: com/company/utils/Helper.java");\n        System.out.println("package com.company.utils;");\n        System.out.println("\\nImport: import com.company.utils.Helper;");\n    }\n}',
    hint: "Directory structure must match package hierarchy",
  },
  {
    id: "package_4",
    topicId: "package",
    question: "Default package (no package declaration).",
    mathSolution: "Classes without package are in default package",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Default package: no package declaration");\n        System.out.println("class DefaultClass { void show() {} }");\n        System.out.println("class AnotherClass { public static void main(String[] args) { new DefaultClass().show(); } }");\n        System.out.println("\\nNote: Avoid default package in production.");\n    }\n}',
    hint: "Default package is for small programs only, avoid in production",
  },

  // IMPORT STATEMENTS (4)
  {
    id: "package_5",
    topicId: "package",
    question: "Import single class from another package.",
    mathSolution: "Use import with fully qualified class name",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Import single class: import com.library.Book;");\n        System.out.println("// Then use: Book b = new Book();");\n    }\n}',
    hint: "Import specific class you need",
  },
  {
    id: "package_6",
    topicId: "package",
    question: "Import entire package using wildcard.",
    mathSolution: "import package.* imports all classes in package",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Wildcard import: import java.util.*;");\n        List<String> list = new ArrayList<>();\n        list.add("Works");\n        System.out.println("ArrayList and List imported via wildcard: " + list);\n    }\n}',
    hint: "Wildcard imports all classes but not subpackages",
  },
  {
    id: "package_7",
    topicId: "package",
    question: "Static import for static members.",
    mathSolution: "import static allows direct use of static members",
    codeSolution: 'import static java.lang.Math.*;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("PI = " + PI);\n        System.out.println("sqrt(25) = " + sqrt(25));\n        System.out.println("Static import avoids Math.PI, Math.sqrt");\n    }\n}',
    hint: "Static import for frequently used static members",
  },
  {
    id: "package_8",
    topicId: "package",
    question: "Import class with same name from different packages.",
    mathSolution: "Use fully qualified names to resolve ambiguity",
    codeSolution: 'import java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        Date utilDate = new Date();\n        java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());\n        System.out.println("java.util.Date: " + utilDate);\n        System.out.println("java.sql.Date: " + sqlDate);\n    }\n}',
    hint: "Use fully qualified names for ambiguous imports",
  },

  // PACKAGE ACCESS CONTROL (4)
  {
    id: "package_9",
    topicId: "package",
    question: "Package-private (default) access modifier.",
    mathSolution: "Default access allows access within same package",
    codeSolution: 'public class Main {\n    static class Person { String address = "NYC"; } // package-private\n    public static void main(String[] args) {\n        Person p = new Person();\n        System.out.println("Package-private field accessible within same package: " + p.address);\n        System.out.println("// In different package, would not compile");\n    }\n}',
    hint: "Default access = package-private",
  },
  {
    id: "package_10",
    topicId: "package",
    question: "Protected access across packages via inheritance.",
    mathSolution: "Protected members accessible in subclasses even in different packages",
    codeSolution: 'public class Main {\n    static class Animal { protected String species = "Canine"; }\n    static class Dog extends Animal {\n        void display() { System.out.println("Protected species accessible in subclass: " + species); }\n    }\n    public static void main(String[] args) {\n        new Dog().display();\n    }\n}',
    hint: "Protected = package + subclasses (even in different packages)",
  },
  {
    id: "package_11",
    topicId: "package",
    question: "Public classes and members across packages.",
    mathSolution: "Public members accessible everywhere",
    codeSolution: 'public class Main {\n    public static final String VERSION = "1.0";\n    public static void main(String[] args) {\n        System.out.println("Public constant VERSION = " + VERSION);\n        System.out.println("Public method called.");\n    }\n}',
    hint: "Public API should expose only necessary members",
  },
  {
    id: "package_12",
    topicId: "package",
    question: "Package structure for encapsulation.",
    mathSolution: "Use packages to hide implementation details",
    codeSolution: 'public class Main {\n    static class BookRepository { void save(String title) { System.out.println("Saved: " + title); } }\n    public static void main(String[] args) {\n        BookRepository repo = new BookRepository();\n        repo.save("Java Programming");\n        System.out.println("// Package-private class hidden from outside package");\n    }\n}',
    hint: "Hide implementation details with package-private access",
  },

  // PACKAGE HIERARCHY AND NAMING (3)
  {
    id: "package_13",
    topicId: "package",
    question: "Package naming conventions.",
    mathSolution: "Reverse domain name convention for uniqueness",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Naming convention: com.company.project.module");\n        System.out.println("Example: com.google.maps, org.apache.commons");\n        System.out.println("Prevents naming conflicts.");\n    }\n}',
    hint: "Convention: com.company.project.module",
  },
  {
    id: "package_14",
    topicId: "package",
    question: "Subpackages and directory structure.",
    mathSolution: "Subpackages don't automatically import parent packages",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Subpackages: com.app.model and com.app.utils");\n        System.out.println("Classes in com.app must import com.app.model.User explicitly.");\n        System.out.println("// import com.app.model.User;");\n    }\n}',
    hint: "Subpackages are separate packages, not automatically imported",
  },
  {
    id: "package_15",
    topicId: "package",
    question: "Import class from subpackage.",
    mathSolution: "Use full package path including subpackage",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Import from subpackage: import com.company.domain.address.Address;");\n        System.out.println("Full path includes all subpackages.");\n    }\n}',
    hint: "Subpackages require full import path",
  },

  // BUILT-IN PACKAGES (3)
  {
    id: "package_16",
    topicId: "package",
    question: "Use java.lang package (automatically imported).",
    mathSolution: "java.lang is automatically imported",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String text = "Hello";\n        System.out.println(text.toUpperCase());\n        double sqrt = Math.sqrt(25);\n        System.out.println("Square root: " + sqrt);\n        System.out.println("java.lang.String, Math, System are auto-imported.");\n    }\n}',
    hint: "java.lang is implicitly imported in every Java file",
  },
  {
    id: "package_17",
    topicId: "package",
    question: "Use java.util package for collections.",
    mathSolution: "java.util contains utility classes",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("Alice", "Bob");\n        Map<String, Integer> map = new HashMap<>();\n        map.put("Alice", 25);\n        System.out.println("List: " + list);\n        System.out.println("Map: " + map);\n    }\n}',
    hint: "java.util has collections, date, scanner, etc.",
  },
  {
    id: "package_18",
    topicId: "package",
    question: "Use java.io package for file operations.",
    mathSolution: "java.io contains input/output classes",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File f = new File("test.txt");\n        System.out.println("File object created: " + f.getPath());\n        System.out.println("(File operations need try-catch in real code)");\n    }\n}',
    hint: "java.io for file and stream operations",
  },

  // PACKAGE CREATION WITH JAR (3)
  {
    id: "package_19",
    topicId: "package",
    question: "Compile and run classes with packages from command line.",
    mathSolution: "Use javac with -d and java with fully qualified names",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Compile: javac -d . com/example/Hello.java");\n        System.out.println("Run: java com.example.Hello");\n        System.out.println("-d . creates directory structure.");\n    }\n}',
    hint: "-d . creates directory structure matching package",
  },
  {
    id: "package_20",
    topicId: "package",
    question: "Create and use JAR file with packages.",
    mathSolution: "JAR files bundle compiled packages",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Create JAR: jar cfm mylib.jar manifest.txt com");\n        System.out.println("Use: javac -cp mylib.jar MyApp.java");\n        System.out.println("Run: java -cp mylib.jar;. MyApp");\n    }\n}',
    hint: "JAR files package multiple packages for distribution",
  },
  {
    id: "package_21",
    topicId: "package",
    question: "Package with versioning and module-info (Java 9+).",
    mathSolution: "Module system for explicit package exports",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("module-info.java example:");\n        System.out.println("module com.myapp.core { exports com.myapp.core.api; }");\n        System.out.println("Modules provide stronger encapsulation than packages.");\n    }\n}',
    hint: "Java 9+ modules provide stronger encapsulation",
  },

  // COMMON PACKAGE MISTAKES AND SOLUTIONS (4)
  {
    id: "package_22",
    topicId: "package",
    question: "Fix package declaration mismatch error.",
    mathSolution: "Package declaration must match directory structure",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Error: package com.example.app; but file in wrong folder.");\n        System.out.println("Fix: Place file in com/example/app/ directory.");\n    }\n}',
    hint: "Directory structure must mirror package hierarchy",
  },
  {
    id: "package_23",
    topicId: "package",
    question: "Resolve name conflicts with packages.",
    mathSolution: "Use fully qualified names or aliases",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        java.util.Date utilDate = new java.util.Date();\n        java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());\n        System.out.println("Fully qualified names resolve conflict: " + utilDate);\n    }\n}',
    hint: "Fully qualified names resolve ambiguity",
  },
  {
    id: "package_24",
    topicId: "package",
    question: "Classpath and package dependencies.",
    mathSolution: "Set classpath to include package roots",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("javac -cp lib/mylib.jar src/MyApp.java -d classes");\n        System.out.println("java -cp classes;lib/mylib.jar com.myapp.Main");\n        System.out.println("Classpath must include root of package structure.");\n    }\n}',
    hint: "Classpath must include all directories and JARs with packages",
  },
  {
    id: "package_25",
    topicId: "package",
    question: "Package visibility with reflection.",
    mathSolution: "Reflection can bypass package access restrictions",
    codeSolution: 'import java.lang.reflect.Field;\npublic class Main {\n    static class Hidden { private String secret = "Top Secret"; }\n    public static void main(String[] args) throws Exception {\n        Hidden h = new Hidden();\n        Field f = Hidden.class.getDeclaredField("secret");\n        f.setAccessible(true);\n        System.out.println("Reflection accessed private field: " + f.get(h));\n        System.out.println("Reflection bypasses package-private and private.");\n    }\n}',
    hint: "Reflection can bypass encapsulation but modules can restrict it",
  },
  {
    "id": "package_26",
    "topicId": "package",
    "question": "Create a package `com.example.math` containing a class `Calculator` with a static method `add(int a, int b)`. Then in another class in the default package, import and use it.",
    "mathSolution": "Demonstrate package creation, compilation, and usage across packages.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/math/Calculator.java\");\n        System.out.println(\"package com.example.math;\");\n        System.out.println(\"public class Calculator {\");\n        System.out.println(\"    public static int add(int a, int b) { return a + b; }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: Main.java (default package)\");\n        System.out.println(\"import com.example.math.Calculator;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        System.out.println(Calculator.add(5, 3));\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Use `import com.example.math.Calculator;` and compile with `javac -d . com/example/math/Calculator.java Main.java`."
  },
  {
    "id": "package_27",
    "topicId": "package",
    "question": "Create a package `com.example.utils` with two classes: `StringHelper` (has a static method `reverse`) and `NumberHelper` (has a static method `isEven`). Write a program that imports both and uses them.",
    "mathSolution": "Show multiple classes in same package and import them in another package.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/utils/StringHelper.java\");\n        System.out.println(\"package com.example.utils;\");\n        System.out.println(\"public class StringHelper {\");\n        System.out.println(\"    public static String reverse(String s) { return new StringBuilder(s).reverse().toString(); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/utils/NumberHelper.java\");\n        System.out.println(\"package com.example.utils;\");\n        System.out.println(\"public class NumberHelper {\");\n        System.out.println(\"    public static boolean isEven(int n) { return n % 2 == 0; }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: Main.java (default package)\");\n        System.out.println(\"import com.example.utils.*;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        System.out.println(StringHelper.reverse(\\\"hello\\\"));\");\n        System.out.println(\"        System.out.println(NumberHelper.isEven(10));\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Use wildcard import `import com.example.utils.*;` to import both classes."
  },
  {
    "id": "package_28",
    "topicId": "package",
    "question": "Define an interface `Drawable` in package `com.example.shapes` with method `void draw()`. Implement it in class `Circle` in the same package. Then in a different package `com.example.app`, use the interface.",
    "mathSolution": "Interface and implementation in different packages accessed via import.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/shapes/Drawable.java\");\n        System.out.println(\"package com.example.shapes;\");\n        System.out.println(\"public interface Drawable { void draw(); }\");\n        System.out.println(\"\\n// File: com/example/shapes/Circle.java\");\n        System.out.println(\"package com.example.shapes;\");\n        System.out.println(\"public class Circle implements Drawable {\");\n        System.out.println(\"    public void draw() { System.out.println(\\\"Drawing circle\\\"); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/app/Main.java\");\n        System.out.println(\"package com.example.app;\");\n        System.out.println(\"import com.example.shapes.Drawable;\");\n        System.out.println(\"import com.example.shapes.Circle;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        Drawable d = new Circle();\");\n        System.out.println(\"        d.draw();\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Interface and class must be public to be accessed from another package."
  },
  {
  "id": "package_29",
  "topicId": "package",
  "question": "Create a `Logger` interface with a static method `getLogger(String name)` that returns a lambda-based logger. Place it in package `com.example.logging`. Use it in a different package.",
  "mathSolution": "Static methods in interfaces allow factory methods.",
  "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/logging/Logger.java\");\n        System.out.println(\"package com.example.logging;\");\n        System.out.println(\"@FunctionalInterface\");\n        System.out.println(\"public interface Logger {\");\n        System.out.println(\"    void log(String message);\");\n        System.out.println(\"    static Logger getLogger(String name) {\");\n        System.out.println(\"        return msg -> System.out.println(\\\"[\\\" + name + \\\"] \\\" + msg);\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/app/Main.java\");\n        System.out.println(\"package com.example.app;\");\n        System.out.println(\"import com.example.logging.Logger;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        Logger log = Logger.getLogger(\\\"App\\\");\");\n        System.out.println(\"        log.log(\\\"Application started\\\");\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
  "hint": "Static methods in interfaces are called on the interface name."
},
  {
    "id": "package_30",
    "topicId": "package",
    "question": "Create two packages: `com.example.model` with class `User` and `com.example.service` with class `UserService`. `UserService` should use `User`. Compile and run from command line, specifying classpath.",
    "mathSolution": "Cross-package dependency and classpath setup.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/model/User.java\");\n        System.out.println(\"package com.example.model;\");\n        System.out.println(\"public class User {\");\n        System.out.println(\"    private String name;\");\n        System.out.println(\"    public User(String name) { this.name = name; }\");\n        System.out.println(\"    public String getName() { return name; }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/service/UserService.java\");\n        System.out.println(\"package com.example.service;\");\n        System.out.println(\"import com.example.model.User;\");\n        System.out.println(\"public class UserService {\");\n        System.out.println(\"    public void printUser(User u) {\");\n        System.out.println(\"        System.out.println(\\\"User: \\\" + u.getName());\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/Main.java\");\n        System.out.println(\"package com.example;\");\n        System.out.println(\"import com.example.model.User;\");\n        System.out.println(\"import com.example.service.UserService;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        User u = new User(\\\"Alice\\\");\");\n        System.out.println(\"        new UserService().printUser(u);\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\nCompile: javac -d . com/example/model/User.java com/example/service/UserService.java com/example/Main.java\");\n        System.out.println(\"Run: java com.example.Main\");\n    }\n}",
    "hint": "Compile all .java files together; run with fully qualified class name."
  },
  {
    "id": "package_31",
    "topicId": "package",
    "question": "Create an enum `Priority` in package `com.example.constants` with values `LOW, MEDIUM, HIGH`. Use it in another class in a different package.",
    "mathSolution": "Enums can be in packages and imported.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/constants/Priority.java\");\n        System.out.println(\"package com.example.constants;\");\n        System.out.println(\"public enum Priority { LOW, MEDIUM, HIGH }\");\n        System.out.println(\"\\n// File: com/example/app/Task.java\");\n        System.out.println(\"package com.example.app;\");\n        System.out.println(\"import com.example.constants.Priority;\");\n        System.out.println(\"public class Task {\");\n        System.out.println(\"    private Priority priority;\");\n        System.out.println(\"    public Task(Priority p) { priority = p; }\");\n        System.out.println(\"    public void show() { System.out.println(\\\"Priority: \\\" + priority); }\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        new Task(Priority.HIGH).show();\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Enums are imported like classes."
  },
  {
    "id": "package_32",
    "topicId": "package",
    "question": "Create a utility class `StringUtils` in package `com.example.util` with a private constructor and static methods `isEmpty` and `capitalize`. Demonstrate usage.",
    "mathSolution": "Utility class with private constructor to prevent instantiation.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/util/StringUtils.java\");\n        System.out.println(\"package com.example.util;\");\n        System.out.println(\"public class StringUtils {\");\n        System.out.println(\"    private StringUtils() { throw new UnsupportedOperationException(\\\"Utility class\\\"); }\");\n        System.out.println(\"    public static boolean isEmpty(String s) { return s == null || s.trim().isEmpty(); }\");\n        System.out.println(\"    public static String capitalize(String s) {\");\n        System.out.println(\"        if (isEmpty(s)) return s;\");\n        System.out.println(\"        return s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase();\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: Main.java\");\n        System.out.println(\"import com.example.util.StringUtils;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        System.out.println(StringUtils.isEmpty(\\\"\\\"));\");\n        System.out.println(\"        System.out.println(StringUtils.capitalize(\\\"hello\\\"));\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Private constructor prevents instantiation; all methods are static."
  },
  {
    "id": "package_33",
    "topicId": "package",
    "question": "Create a package `com.example.data` with a class `Person` (fields name, age). Create another class `PersonValidator` in a different package `com.example.validation` that uses `Person` and checks age > 0 and name not empty.",
    "mathSolution": "Cross-package dependency and validation logic.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/data/Person.java\");\n        System.out.println(\"package com.example.data;\");\n        System.out.println(\"public class Person {\");\n        System.out.println(\"    public String name;\");\n        System.out.println(\"    public int age;\");\n        System.out.println(\"    public Person(String name, int age) { this.name = name; this.age = age; }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/validation/PersonValidator.java\");\n        System.out.println(\"package com.example.validation;\");\n        System.out.println(\"import com.example.data.Person;\");\n        System.out.println(\"public class PersonValidator {\");\n        System.out.println(\"    public static boolean isValid(Person p) {\");\n        System.out.println(\"        return p.name != null && !p.name.trim().isEmpty() && p.age > 0;\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: Main.java\");\n        System.out.println(\"import com.example.data.Person;\");\n        System.out.println(\"import com.example.validation.PersonValidator;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        Person p1 = new Person(\\\"Alice\\\", 25);\");\n        System.out.println(\"        Person p2 = new Person(\\\"\\\", -5);\");\n        System.out.println(\"        System.out.println(PersonValidator.isValid(p1));\");\n        System.out.println(\"        System.out.println(PersonValidator.isValid(p2));\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Validator class is in different package, imports Person."
  },
  {
    "id": "package_34",
    "topicId": "package",
    "question": "Use the default (no) package to quickly test a class, then refactor it into a named package. Show the steps by printing both versions.",
    "mathSolution": "Demonstrate moving from default package to named package.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// Version 1: default package (no package declaration)\");\n        System.out.println(\"public class Test {\");\n        System.out.println(\"    public static void main(String[] args) { System.out.println(\\\"Default package\\\"); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// Version 2: named package\");\n        System.out.println(\"package com.example.test;\");\n        System.out.println(\"public class Test {\");\n        System.out.println(\"    public static void main(String[] args) { System.out.println(\\\"Named package\\\"); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\nTo run version 2: java com.example.test.Test\");\n    }\n}",
    "hint": "Default package classes cannot be imported by named packages; avoid in production."
  },
   {
    "id": "package_35",
    "topicId": "package",
    "question": "Create a package `com.example.generic` with a generic class `Box<T>`. In another package, create a subclass `StringBox` that fixes T to String and add a method `toUpperCase`. Demonstrate usage.",
    "mathSolution": "Generic classes in packages and inheritance across packages.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/generic/Box.java\");\n        System.out.println(\"package com.example.generic;\");\n        System.out.println(\"public class Box<T> {\");\n        System.out.println(\"    private T item;\");\n        System.out.println(\"    public void set(T item) { this.item = item; }\");\n        System.out.println(\"    public T get() { return item; }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/specific/StringBox.java\");\n        System.out.println(\"package com.example.specific;\");\n        System.out.println(\"import com.example.generic.Box;\");\n        System.out.println(\"public class StringBox extends Box<String> {\");\n        System.out.println(\"    public String toUpperCase() {\");\n        System.out.println(\"        String val = get();\");\n        System.out.println(\"        return val != null ? val.toUpperCase() : null;\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: Main.java\");\n        System.out.println(\"import com.example.specific.StringBox;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        StringBox sb = new StringBox();\");\n        System.out.println(\"        sb.set(\\\"hello\\\");\");\n        System.out.println(\"        System.out.println(sb.toUpperCase());\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "Subclass extends parameterized superclass from another package."
  },
  {
    "id": "package_36",
    "topicId": "package",
    "question": "Create a package `com.example.annotation` with a custom annotation `@Author` (with element `name`). Use it on a class in another package and retrieve the annotation via reflection.",
    "mathSolution": "Custom annotations in packages and runtime reflection.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/annotation/Author.java\");\n        System.out.println(\"package com.example.annotation;\");\n        System.out.println(\"import java.lang.annotation.*;\");\n        System.out.println(\"@Retention(RetentionPolicy.RUNTIME)\");\n        System.out.println(\"@Target(ElementType.TYPE)\");\n        System.out.println(\"public @interface Author { String name(); }\");\n        System.out.println(\"\\n// File: com/example/app/MyClass.java\");\n        System.out.println(\"package com.example.app;\");\n        System.out.println(\"import com.example.annotation.Author;\");\n        System.out.println(\"@Author(name = \\\"Alice\\\")\");\n        System.out.println(\"public class MyClass {}\");\n        System.out.println(\"\\n// File: Main.java\");\n        System.out.println(\"import com.example.app.MyClass;\");\n        System.out.println(\"import com.example.annotation.Author;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) {\");\n        System.out.println(\"        Author a = MyClass.class.getAnnotation(Author.class);\");\n        System.out.println(\"        System.out.println(\\\"Author: \\\" + a.name());\");\n        System.out.println(\"    }\");\n        System.out.println(\"}\");\n    }\n}",
    "hint": "RetentionPolicy.RUNTIME is required for reflection."
  },
  {
    "id": "package_37",
    "topicId": "package",
    "question": "Create a package `com.example.resources` and include a text file `data.txt` in the classpath. Read the file using `getResourceAsStream` and print its content.",
    "mathSolution": "Reading resources from package using ClassLoader.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// Place data.txt in com/example/resources/ folder\");\n        System.out.println(\"Content of data.txt: Hello from resource\");\n        System.out.println(\"\\n// Code to read:\");\n        System.out.println(\"InputStream is = Main.class.getResourceAsStream(\\\"/com/example/resources/data.txt\\\");\");\n        System.out.println(\"BufferedReader br = new BufferedReader(new InputStreamReader(is));\");\n        System.out.println(\"String line = br.readLine();\");\n        System.out.println(\"System.out.println(line);\");\n        System.out.println(\"\\nOutput: Hello from resource\");\n    }\n}",
    "hint": "Use `getResourceAsStream` with absolute path starting with '/'."
  },
  {
    "id": "package_38",
    "topicId": "package",
    "question": "Use jar command to create an executable JAR with a manifest specifying the main class in a package. Show the commands and the MANIFEST.MF content.",
    "mathSolution": "Executable JAR creation with package structure.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: com/example/app/Main.java\");\n        System.out.println(\"package com.example.app;\");\n        System.out.println(\"public class Main {\");\n        System.out.println(\"    public static void main(String[] args) { System.out.println(\\\"Hello from JAR\\\"); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// Manifest.txt\");\n        System.out.println(\"Main-Class: com.example.app.Main\");\n        System.out.println(\"\\n// Commands:\");\n        System.out.println(\"javac -d . com/example/app/Main.java\");\n        System.out.println(\"jar cfm myapp.jar Manifest.txt com\");\n        System.out.println(\"java -jar myapp.jar\");\n    }\n}",
    "hint": "Manifest must end with a newline; Main-Class is fully qualified."
  },
  {
    "id": "package_39",
    "topicId": "package",
    "question": "Create a module `com.example.module` (module-info.java) that exports a package `com.example.module.api` and requires java.logging. Compile and run using module path.",
    "mathSolution": "Java Platform Module System (JPMS) basics.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"// File: module-info.java\");\n        System.out.println(\"module com.example.module {\");\n        System.out.println(\"    exports com.example.module.api;\");\n        System.out.println(\"    requires java.logging;\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// File: com/example/module/api/Hello.java\");\n        System.out.println(\"package com.example.module.api;\");\n        System.out.println(\"import java.util.logging.Logger;\");\n        System.out.println(\"public class Hello {\");\n        System.out.println(\"    private static final Logger LOG = Logger.getLogger(Hello.class.getName());\");\n        System.out.println(\"    public static void sayHello() { LOG.info(\\\"Hello from module\\\"); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// Commands:\");\n        System.out.println(\"javac -d mods/com.example.module module-info.java com/example/module/api/Hello.java\");\n        System.out.println(\"java --module-path mods -m com.example.module/com.example.module.api.Hello\");\n    }\n}",
    "hint": "module-info.java must be at project root, not inside package directories."
  },
  {
    "id": "package_40",
    "topicId": "package",
    "question": "Create a package `com.example.dynamic` and use reflection to instantiate a class `DynamicClass` that is not accessible directly (e.g., package-private). Show how reflection breaks encapsulation.",
    "mathSolution": "Reflection can access non-public classes and members across packages.",
    "codeSolution": "import java.lang.reflect.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        System.out.println(\"// File: com/example/dynamic/DynamicClass.java\");\n        System.out.println(\"package com.example.dynamic;\");\n        System.out.println(\"class DynamicClass { // package-private\");\n        System.out.println(\"    private String secret = \\\"Hidden\\\";\");\n        System.out.println(\"    private void reveal() { System.out.println(secret); }\");\n        System.out.println(\"}\");\n        System.out.println(\"\\n// Reflection code:\");\n        System.out.println(\"Class<?> clazz = Class.forName(\\\"com.example.dynamic.DynamicClass\\\");\");\n        System.out.println(\"Object obj = clazz.getDeclaredConstructor().newInstance();\");\n        System.out.println(\"Field f = clazz.getDeclaredField(\\\"secret\\\");\");\n        System.out.println(\"f.setAccessible(true);\");\n        System.out.println(\"System.out.println(f.get(obj));\");\n        System.out.println(\"Method m = clazz.getDeclaredMethod(\\\"reveal\\\");\");\n        System.out.println(\"m.setAccessible(true);\");\n        System.out.println(\"m.invoke(obj);\");\n    }\n}",
    "hint": "Reflection with `setAccessible(true)` bypasses access control."
  }
);