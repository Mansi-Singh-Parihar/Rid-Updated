QuizData.questions.push(
  // BASIC EXCEPTION CONCEPTS (5)
  {
    id: "exception_1",
    topicId: "exception",
    question: "Handle ArithmeticException when dividing by zero.",
    mathSolution: "Division by zero throws ArithmeticException",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println("Result: " + result);\n        } catch(ArithmeticException e) {\n            System.out.println("Cannot divide by zero: " + e.getMessage());\n        }\n    }\n}',
    hint: "Use try-catch for division by zero",
  },
  {
    id: "exception_2",
    topicId: "exception",
    question: "Handle ArrayIndexOutOfBoundsException.",
    mathSolution: "Accessing invalid array index",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1,2,3};\n        try {\n            System.out.println(arr[5]);\n        } catch(ArrayIndexOutOfBoundsException e) {\n            System.out.println("Array index out of bounds: " + e);\n        }\n    }\n}',
    hint: "Catch when index exceeds array length",
  },
  {
    id: "exception_3",
    topicId: "exception",
    question: "Handle NullPointerException.",
    mathSolution: "Calling method on null object",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        try {\n            System.out.println(str.length());\n        } catch(NullPointerException e) {\n            System.out.println("Object is null: " + e);\n        }\n    }\n}',
    hint: "Check for null before method calls",
  },
  {
    id: "exception_4",
    topicId: "exception",
    question: "Handle NumberFormatException.",
    mathSolution: "Parsing invalid number string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String invalid = "abc";\n        try {\n            int num = Integer.parseInt(invalid);\n        } catch(NumberFormatException e) {\n            System.out.println("Invalid number format: " + invalid);\n        }\n    }\n}',
    hint: "ParseInt expects numeric string",
  },
  {
    id: "exception_5",
    topicId: "exception",
    question: "Use multiple catch blocks.",
    mathSolution: "Different exceptions handled separately",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[5];\n            arr[10] = 30/0;  // first ArithmeticException, then ArrayIndexOutOfBounds\n        } catch(ArithmeticException e) {\n            System.out.println("Arithmetic error: " + e);\n        } catch(ArrayIndexOutOfBoundsException e) {\n            System.out.println("Array index error: " + e);\n        }\n    }\n}',
    hint: "Multiple catch for different exceptions",
  },

  // TRY-CATCH-FINALLY (5)
  {
    id: "exception_6",
    topicId: "exception",
    question: "Use finally block that always executes.",
    mathSolution: "Finally executes regardless of exception",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println("In try");\n            int result = 10/0;\n        } catch(ArithmeticException e) {\n            System.out.println("In catch");\n        } finally {\n            System.out.println("Finally always executes");\n        }\n    }\n}',
    hint: "Finally runs after try/catch",
  },
  {
    id: "exception_7",
    topicId: "exception",
    question: "Finally executes even without exception.",
    mathSolution: "Finally runs even in normal flow",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println("No exception here");\n        } finally {\n            System.out.println("Finally block executed");\n        }\n        System.out.println("After try-finally");\n    }\n}',
    hint: "Finally always runs",
  },
  {
    id: "exception_8",
    topicId: "exception",
    question: "Return from try with finally block.",
    mathSolution: "Finally runs even before return",
    codeSolution: 'public class Main {\n    static int test() {\n        try {\n            System.out.println("In try");\n            return 1;\n        } finally {\n            System.out.println("Finally before return");\n        }\n    }\n    public static void main(String[] args) {\n        int result = test();\n        System.out.println("Returned value: " + result);\n    }\n}',
    hint: "Finally executes before return",
  },
  {
    id: "exception_9",
    topicId: "exception",
    question: "Close resource in finally block.",
    mathSolution: "Finally ensures resource cleanup",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        FileReader reader = null;\n        try {\n            reader = new FileReader("test.txt");\n            System.out.println("File opened (simulated)");\n        } catch(IOException e) {\n            System.out.println("File error: " + e);\n        } finally {\n            try {\n                if(reader != null) reader.close();\n                System.out.println("File closed in finally");\n            } catch(IOException e) {\n                System.out.println("Close error: " + e);\n            }\n        }\n    }\n}',
    hint: "Close resources in finally",
  },
  {
    id: "exception_10",
    topicId: "exception",
    question: "Try-with-resources for automatic cleanup.",
    mathSolution: "AutoCloseable resources close automatically",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try(FileReader fr = new FileReader("test.txt")) {\n            System.out.println("File opened and will close automatically");\n        } catch(IOException e) {\n            System.out.println("IO Exception: " + e);\n        }\n    }\n}',
    hint: "Resources declared in try() close automatically",
  },

  // THROW AND THROWS (5)
  {
    id: "exception_11",
    topicId: "exception",
    question: "Throw ArithmeticException manually.",
    mathSolution: "Explicitly throw exception",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        int age = 15;\n        try {\n            if(age < 18) {\n                throw new ArithmeticException("Not eligible to vote");\n            }\n            System.out.println("Eligible");\n        } catch(ArithmeticException e) {\n            System.out.println("Caught: " + e.getMessage());\n        }\n    }\n}',
    hint: "Use throw keyword",
  },
  {
    id: "exception_12",
    topicId: "exception",
    question: "Use throws keyword in method declaration.",
    mathSolution: "Declare exceptions method can throw",
    codeSolution: 'public class Main {\n    static void validateAge(int age) throws ArithmeticException {\n        if(age < 18) throw new ArithmeticException("Underage");\n    }\n    public static void main(String[] args) {\n        try {\n            validateAge(16);\n        } catch(ArithmeticException e) {\n            System.out.println("Caught: " + e);\n        }\n    }\n}',
    hint: "throws in method signature",
  },
  {
    id: "exception_13",
    topicId: "exception",
    question: "Throw custom checked exception.",
    mathSolution: "Create and throw custom exception",
    codeSolution: 'public class Main {\n    static class InsufficientFundsException extends Exception {\n        InsufficientFundsException(String msg) { super(msg); }\n    }\n    public static void main(String[] args) {\n        double balance = 500;\n        double withdraw = 600;\n        try {\n            if(withdraw > balance) {\n                throw new InsufficientFundsException("Low balance");\n            }\n        } catch(InsufficientFundsException e) {\n            System.out.println("Caught: " + e.getMessage());\n        }\n    }\n}',
    hint: "Extend Exception for checked exception",
  },
  {
    id: "exception_14",
    topicId: "exception",
    question: "Throw custom unchecked exception.",
    mathSolution: "Extend RuntimeException for unchecked",
    codeSolution: 'public class Main {\n    static class InvalidInputException extends RuntimeException {\n        InvalidInputException(String msg) { super(msg); }\n    }\n    public static void main(String[] args) {\n        String input = "";\n        try {\n            if(input.isEmpty()) {\n                throw new InvalidInputException("Input cannot be empty");\n            }\n        } catch(InvalidInputException e) {\n            System.out.println("Caught: " + e.getMessage());\n        }\n    }\n}',
    hint: "Extend RuntimeException for unchecked",
  },
  {
    id: "exception_15",
    topicId: "exception",
    question: "Rethrow exception after logging.",
    mathSolution: "Catch, log, then rethrow",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            try {\n                int result = 10/0;\n            } catch(ArithmeticException e) {\n                System.out.println("Logging error: " + e);\n                throw e; // rethrowing\n            }\n        } catch(ArithmeticException e) {\n            System.out.println("Rethrown exception caught: " + e);\n        }\n    }\n}',
    hint: "Use throw in catch to rethrow",
  },

  // EXCEPTION HIERARCHY (5)
  {
    id: "exception_16",
    topicId: "exception",
    question: "Catch multiple exceptions with single catch (Java 7+).",
    mathSolution: "Multi-catch using pipe operator",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[5];\n            arr[10] = 10/0;  // either division by zero or array index\n        } catch(ArithmeticException | ArrayIndexOutOfBoundsException e) {\n            System.out.println("Exception: " + e.getClass().getSimpleName());\n        }\n    }\n}',
    hint: "Use | between exception types",
  },
  {
    id: "exception_17",
    topicId: "exception",
    question: "Catch Exception (parent) for any exception.",
    mathSolution: "Parent catch handles all child exceptions",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            String str = null;\n            System.out.println(str.length());\n        } catch(Exception e) {\n            System.out.println("Caught exception: " + e);\n        }\n    }\n}',
    hint: "Exception is parent of all checked exceptions",
  },
  {
    id: "exception_18",
    topicId: "exception",
    question: "Order of catch blocks (specific first).",
    mathSolution: "Specific before general",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[5];\n            arr[10] = 10/0;  // division by zero first\n        } catch(ArithmeticException e) {\n            System.out.println("Arithmetic first (specific)");\n        } catch(ArrayIndexOutOfBoundsException e) {\n            System.out.println("Array index second");\n        } catch(Exception e) {\n            System.out.println("General last");\n        }\n    }\n}',
    hint: "Put specific exceptions before general",
  },
  {
  id: "exception_19",
  topicId: "exception",
  question: "Get exception details using methods.",
  mathSolution: "Use exception methods for info",
  codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10/0;\n        } catch(ArithmeticException e) {\n            System.out.println("Message: " + e.getMessage());\n            System.out.println("Class: " + e.getClass());\n            System.out.println("Exception details retrieved (no stack trace printed to avoid stderr)");\n        }\n    }\n}',
  hint: "getMessage(), getClass() – avoid printStackTrace() in online runners",
},
  {
    id: "exception_20",
    topicId: "exception",
    question: "Chained exceptions using initCause.",
    mathSolution: "Link exceptions together",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            try {\n                int result = 10/0;\n            } catch(ArithmeticException e) {\n                RuntimeException re = new RuntimeException("Wrapped");\n                re.initCause(e);\n                throw re;\n            }\n        } catch(RuntimeException re) {\n            System.out.println("Cause: " + re.getCause());\n        }\n    }\n}',
    hint: "initCause() links exceptions",
  },

  // PRACTICAL SCENARIOS (5)
  {
    id: "exception_21",
    topicId: "exception",
    question: "Handle FileNotFoundException.",
    mathSolution: "File not found when reading",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            FileReader fr = new FileReader("nonexistent.txt");\n        } catch(FileNotFoundException e) {\n            System.out.println("File not found: " + e);\n        }\n    }\n}',
    hint: "Checked exception must be handled",
  },
  {
    id: "exception_22",
    topicId: "exception",
    question: "Handle IOException during file read.",
    mathSolution: "IO operations can throw IOException",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            FileWriter fw = new FileWriter("output.txt");\n            fw.write("Hello");\n            fw.close();\n            System.out.println("Write completed (simulated)");\n        } catch(IOException e) {\n            System.out.println("IO Error: " + e);\n        }\n    }\n}',
    hint: "IOException covers many file errors",
  },
  {
    id: "exception_23",
    topicId: "exception",
    question: "Handle ClassNotFoundException.",
    mathSolution: "Class not found at runtime",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            Class.forName("com.example.NonexistentClass");\n        } catch(ClassNotFoundException e) {\n            System.out.println("Class not found: " + e);\n        }\n    }\n}',
    hint: "Class.forName() throws this",
  },
  {
    id: "exception_24",
    topicId: "exception",
    question: "Handle InterruptedException in thread sleep.",
    mathSolution: "Thread.sleep throws InterruptedException",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println("Sleeping...");\n            Thread.sleep(1000);\n            System.out.println("Awake");\n        } catch(InterruptedException e) {\n            System.out.println("Sleep interrupted: " + e);\n        }\n    }\n}',
    hint: "InterruptedException is checked",
  },
  {
    id: "exception_25",
    topicId: "exception",
    question: "Try-catch in loop to continue despite errors.",
    mathSolution: "Continue processing even if one iteration fails",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String[] numbers = {"10", "20", "abc", "30"};\n        int sum = 0;\n        for(String num : numbers) {\n            try {\n                sum += Integer.parseInt(num);\n            } catch(NumberFormatException e) {\n                System.out.println("Skipping invalid: " + num);\n            }\n        }\n        System.out.println("Sum: " + sum);\n    }\n}',
    hint: "Catch inside loop to continue processing",
  },
  {
    "id": "exception_26",
    "topicId": "exception",
    "question": "Demonstrate exception propagation: method A calls method B which throws an exception. Catch the exception in method A.",
    "mathSolution": "Exception propagates up the call stack until caught.",
    "codeSolution": "public class Main {\n    static void methodB() throws ArithmeticException {\n        int result = 10 / 0;\n    }\n    static void methodA() {\n        try {\n            methodB();\n        } catch(ArithmeticException e) {\n            System.out.println(\"Caught in methodA: \" + e.getMessage());\n        }\n    }\n    public static void main(String[] args) {\n        methodA();\n    }\n}",
    "hint": "Exception travels from methodB to methodA."
  },
  {
    "id": "exception_27",
    "topicId": "exception",
    "question": "Write a method that declares throws Exception but does not actually throw any. Call it and handle accordingly.",
    "mathSolution": "Method can declare exceptions it may not throw; callers still need to handle.",
    "codeSolution": "public class Main {\n    static void safeMethod() throws Exception {\n        System.out.println(\"No exception thrown\");\n    }\n    public static void main(String[] args) {\n        try {\n            safeMethod();\n        } catch(Exception e) {\n            System.out.println(\"This won't execute\");\n        }\n    }\n}",
    "hint": "Declaring throws does not force the method to throw."
  },
  {
    "id": "exception_28",
    "topicId": "exception",
    "question": "Override a method that declares an exception with a subclass that does not declare any exception. Demonstrate that it's allowed.",
    "mathSolution": "Overriding method can narrow the exception (or omit it).",
    "codeSolution": "class Parent {\n    void process() throws Exception {\n        System.out.println(\"Parent throws Exception\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void process() {\n        System.out.println(\"Child throws nothing\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.process();\n    }\n}",
    "hint": "Overriding method can remove checked exceptions."
  },
  {
    "id": "exception_29",
    "topicId": "exception",
    "question": "Create a try-catch block that catches a generic Exception but also uses finally to log a message. Demonstrate that finally runs even when caught.",
    "mathSolution": "Finally executes after catch block.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[2];\n            arr[5] = 10;\n        } catch(Exception e) {\n            System.out.println(\"Caught: \" + e.getClass().getSimpleName());\n        } finally {\n            System.out.println(\"Finally block executed\");\n        }\n    }\n}",
    "hint": "Finally runs after catch regardless."
  },
  {
    "id": "exception_30",
    "topicId": "exception",
    "question": "Use try-with-resources to manage two resources: FileReader and BufferedReader. Simulate reading a file.",
    "mathSolution": "Multiple resources can be declared in try-with-resources separated by semicolons.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileReader fr = new FileReader(\"test.txt\");\n             BufferedReader br = new BufferedReader(fr)) {\n            System.out.println(\"Resources opened and will close automatically\");\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Declare multiple resources separated by ;"
  },
  {
    "id": "exception_31",
    "topicId": "exception",
    "question": "Create a custom checked exception named InvalidAgeException. Write a method that throws it if age < 18. Handle it.",
    "mathSolution": "Custom checked exception extends Exception.",
    "codeSolution": "class InvalidAgeException extends Exception {\n    InvalidAgeException(String msg) { super(msg); }\n}\npublic class Main {\n    static void checkAge(int age) throws InvalidAgeException {\n        if (age < 18) throw new InvalidAgeException(\"Age must be 18 or above\");\n    }\n    public static void main(String[] args) {\n        try {\n            checkAge(16);\n        } catch(InvalidAgeException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use extends Exception for checked exception."
  },
  {
    "id": "exception_32",
    "topicId": "exception",
    "question": "Create a custom unchecked exception named NegativeNumberException. Throw it if a number is negative.",
    "mathSolution": "Custom unchecked exception extends RuntimeException.",
    "codeSolution": "class NegativeNumberException extends RuntimeException {\n    NegativeNumberException(String msg) { super(msg); }\n}\npublic class Main {\n    static void process(int num) {\n        if (num < 0) throw new NegativeNumberException(\"Negative not allowed: \" + num);\n        System.out.println(\"Number is \" + num);\n    }\n    public static void main(String[] args) {\n        try {\n            process(-5);\n        } catch(NegativeNumberException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n        process(10);\n    }\n}",
    "hint": "Extend RuntimeException for unchecked exception."
  },
  {
    "id": "exception_33",
    "topicId": "exception",
    "question": "Demonstrate that a finally block can change the return value of a method if it contains a return statement.",
    "mathSolution": "finally block return overrides previous return.",
    "codeSolution": "public class Main {\n    static int test() {\n        try {\n            return 1;\n        } finally {\n            return 2;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Return value: \" + test());\n    }\n}",
    "hint": "finally return overrides try/catch return."
  },
  {
    "id": "exception_34",
    "topicId": "exception",
    "question": "Write a method that throws an exception and then call it from a method that does not handle it (propagates). Catch it in main.",
    "mathSolution": "Exception propagates up if not caught.",
    "codeSolution": "class MyException extends Exception {\n    MyException(String msg) { super(msg); }\n}\npublic class Main {\n    static void level2() throws MyException {\n        throw new MyException(\"Error in level2\");\n    }\n    static void level1() throws MyException {\n        level2();\n    }\n    public static void main(String[] args) {\n        try {\n            level1();\n        } catch(MyException e) {\n            System.out.println(\"Caught in main: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Methods can propagate exception without catching."
  },
  {
  "id": "exception_35",
  "topicId": "exception",
  "question": "Use printStackTrace() to print the stack trace of an exception (without causing compilation error in online runner).",
  "mathSolution": "printStackTrace() writes to stderr; some online compilers flag it as error. Use getMessage() or toString() instead.",
  "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch(ArithmeticException e) {\n            System.out.println(\"Exception details: \" + e.toString());\n        }\n    }\n}",
  "hint": "Use e.toString() to get exception details without stack trace."
},
  {
  "id": "exception_36",
  "topicId": "exception",
  "question": "Create a method that throws NullPointerException when a string is null. Use a custom message with Objects.requireNonNull.",
  "mathSolution": "Objects.requireNonNull throws NullPointerException with custom message.",
  "codeSolution": "import java.util.Objects;\npublic class Main {\n    static void printLength(String s) {\n        String nonNull = Objects.requireNonNull(s, \"String cannot be null\");\n        System.out.println(\"Length: \" + nonNull.length());\n    }\n    public static void main(String[] args) {\n        try {\n            printLength(null);\n        } catch(NullPointerException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n        printLength(\"Hello\");\n    }\n}",
  "hint": "Objects.requireNonNull throws NPE with message."
},
  {
    "id": "exception_37",
    "topicId": "exception",
    "question": "Handle exception from Integer.parseInt() by providing a default value using a separate method.",
    "mathSolution": "Catch NumberFormatException and return default.",
    "codeSolution": "public class Main {\n    static int parseIntOrDefault(String str, int defaultValue) {\n        try {\n            return Integer.parseInt(str);\n        } catch(NumberFormatException e) {\n            return defaultValue;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Parsed '123': \" + parseIntOrDefault(\"123\", 0));\n        System.out.println(\"Parsed 'abc': \" + parseIntOrDefault(\"abc\", -1));\n    }\n}",
    "hint": "Return default value on parse failure."
  },
  {
    "id": "exception_38",
    "topicId": "exception",
    "question": "Write a recursive method that throws StackOverflowError (without handling). Observe that it's an Error, not Exception.",
    "mathSolution": "StackOverflowError is an Error, not a checked exception.",
    "codeSolution": "public class Main {\n    static void recursive(int i) {\n        System.out.println(i);\n        recursive(i+1);\n    }\n    public static void main(String[] args) {\n        try {\n            recursive(1);\n        } catch(StackOverflowError e) {\n            System.out.println(\"StackOverflowError caught: \" + e);\n        }\n    }\n}",
    "hint": "StackOverflowError is an Error, can be caught but not recommended."
  },
  {
    "id": "exception_39",
    "topicId": "exception",
    "question": "Create a try block with multiple catch blocks where one catch is for Exception (parent) and another for ArithmeticException (child). Show order matters.",
    "mathSolution": "Parent catch (Exception) must come after specific child catches.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch(ArithmeticException e) {\n            System.out.println(\"Specific catch: ArithmeticException\");\n        } catch(Exception e) {\n            System.out.println(\"General catch: Exception\");\n        }\n    }\n}",
    "hint": "Specific exceptions must be caught before general ones."
  },
  {
    "id": "exception_40",
    "topicId": "exception",
    "question": "Demonstrate that a finally block can throw its own exception, overriding the original exception.",
    "mathSolution": "If finally throws, original exception is lost.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            try {\n                throw new RuntimeException(\"Original exception\");\n            } finally {\n                throw new RuntimeException(\"Finally exception\");\n            }\n        } catch(RuntimeException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Exception in finally replaces the original exception."
  }
);