QuizData.questions.push(
  {
    id: "string_1",
    topicId: "java_string",
    question: "How do you find the length of a given string?",
    mathSolution: "Count number of characters in string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        int length = str.length();\n        System.out.println(length);\n    }\n}',
    hint: "Use length() method"
  },
  {
    id: "string_2",
    topicId: "java_string",
    question: "Write code to convert a string to uppercase.",
    mathSolution: "Convert all characters to capital letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "hello";\n        String upper = str.toUpperCase();\n        System.out.println(upper);\n    }\n}',
    hint: "Use toUpperCase() method"
  },
  {
    id: "string_3",
    topicId: "java_string",
    question: "How do you convert a string to lowercase?",
    mathSolution: "Convert all characters to small letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "WORLD";\n        String lower = str.toLowerCase();\n        System.out.println(lower);\n    }\n}',
    hint: "Use toLowerCase() method"
  },
  {
    id: "string_4",
    topicId: "java_string",
    question: "Write code to check if two strings are equal.",
    mathSolution: "Compare strings character by character",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "Java";\n        boolean isEqual = s1.equals(s2);\n        System.out.println(isEqual);\n    }\n}',
    hint: "Use equals() method"
  },
  {
    id: "string_5",
    topicId: "java_string",
    question: "How do you get the first character of a string?",
    mathSolution: "Character at index 0",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        char first = str.charAt(0);\n        System.out.println(first);\n    }\n}',
    hint: "Use charAt() with index 0"
  },
  {
    id: "string_6",
    topicId: "java_string",
    question: "Write code to get the last character of a string.",
    mathSolution: "Character at index length-1",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        char last = str.charAt(str.length() - 1);\n        System.out.println(last);\n    }\n}',
    hint: "Use length()-1 as index"
  },
  {
    id: "string_7",
    topicId: "java_string",
    question: "How do you concatenate two strings?",
    mathSolution: "Join two strings together",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "World";\n        String result = s1 + s2;\n        System.out.println(result);\n    }\n}',
    hint: "Use + operator"
  },
  {
    id: "string_8",
    topicId: "java_string",
    question: "Write code to check if a string contains a substring.",
    mathSolution: "Check if substring exists in main string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        boolean contains = str.contains("World");\n        System.out.println(contains);\n    }\n}',
    hint: "Use contains() method"
  },
  {
    id: "string_9",
    topicId: "java_string",
    question: "How do you find the index of a character in a string?",
    mathSolution: "Find position of first occurrence",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        int index = str.indexOf(\'e\');\n        System.out.println(index);\n    }\n}',
    hint: "Use indexOf() method"
  },
  {
    id: "string_10",
    topicId: "java_string",
    question: "Write code to replace a character in a string.",
    mathSolution: "Replace all occurrences of old char with new",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String replaced = str.replace(\'l\', \'p\');\n        System.out.println(replaced);\n    }\n}',
    hint: "Use replace() method"
  },
  {
    id: "string_11",
    topicId: "java_string",
    question: "How do you check if a string is empty?",
    mathSolution: "Check if length is zero",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "";\n        boolean isEmpty = str.isEmpty();\n        System.out.println(isEmpty);\n    }\n}',
    hint: "Use isEmpty() method"
  },
  {
    id: "string_12",
    topicId: "java_string",
    question: "Write code to extract substring from a string.",
    mathSolution: "Get part of string from start to end-1",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "HelloWorld";\n        String sub = str.substring(1, 5);\n        System.out.println(sub);\n    }\n}',
    hint: "Use substring(start, end) - end exclusive"
  },
  {
    id: "string_13",
    topicId: "java_string",
    question: "How do you remove whitespace from both ends?",
    mathSolution: "Trim leading and trailing spaces",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "  Hello  ";\n        String trimmed = str.trim();\n        System.out.println(trimmed);\n    }\n}',
    hint: "Use trim() method"
  },
  {
    id: "string_14",
    topicId: "java_string",
    question: "Write code to compare strings ignoring case.",
    mathSolution: "Compare without considering case",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "JAVA";\n        boolean isEqual = s1.equalsIgnoreCase(s2);\n        System.out.println(isEqual);\n    }\n}',
    hint: "Use equalsIgnoreCase()"
  },
  {
    id: "string_15",
    topicId: "java_string",
    question: "How do you split a string by delimiter?",
    mathSolution: "Divide string into parts",
    codeSolution: 'import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String str = "apple,banana,orange";\n        String[] fruits = str.split(",");\n        System.out.println(Arrays.toString(fruits));\n    }\n}',
    hint: "Use split() with delimiter"
  },
  {
    id: "string_16",
    topicId: "java_string",
    question: "Write code to check if string starts with prefix.",
    mathSolution: "Check beginning of string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean starts = str.startsWith("He");\n        System.out.println(starts);\n    }\n}',
    hint: "Use startsWith() method"
  },
  {
    id: "string_17",
    topicId: "java_string",
    question: "How do you check if string ends with suffix?",
    mathSolution: "Check ending of string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean ends = str.endsWith("lo");\n        System.out.println(ends);\n    }\n}',
    hint: "Use endsWith() method"
  },
  {
    id: "string_18",
    topicId: "java_string",
    question: "Write code to convert string to integer.",
    mathSolution: "Parse numeric string to int",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "123";\n        int num = Integer.parseInt(str);\n        System.out.println(num);\n    }\n}',
    hint: "Use Integer.parseInt()"
  },
  {
    id: "string_19",
    topicId: "java_string",
    question: "How do you convert integer to string?",
    mathSolution: "Convert number to string representation",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        int num = 456;\n        String str = String.valueOf(num);\n        System.out.println(str);\n    }\n}',
    hint: "Use String.valueOf()"
  },
  {
    id: "string_20",
    topicId: "java_string",
    question: "Write code to repeat a string multiple times.",
    mathSolution: "Concatenate string n times",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hi";\n        String repeated = str + str + str;\n        System.out.println(repeated);\n    }\n}',
    hint: "Use concatenation (repeat not available in older Java)"
  },
  {
    id: "string_21",
    topicId: "java_string",
    question: "How do you join strings with delimiter?",
    mathSolution: "Combine multiple strings with separator",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String joined = "2024" + "-" + "01" + "-" + "15";\n        System.out.println(joined);\n    }\n}',
    hint: "Use + operator or String.join() for Java 8+"
  },
  {
    id: "string_22",
    topicId: "java_string",
    question: "Write code to check if string is blank.",
    mathSolution: "Check if string contains only whitespace",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "   ";\n        boolean isBlank = str.trim().isEmpty();\n        System.out.println(isBlank);\n    }\n}',
    hint: "Use trim() and isEmpty() for older Java"
  },
  {
    id: "string_23",
    topicId: "java_string",
    question: "How do you get character at specific index?",
    mathSolution: "Character at given position",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Computer";\n        char ch = str.charAt(3);\n        System.out.println(ch);\n    }\n}',
    hint: "Index starts from 0"
  },
  {
    id: "string_24",
    topicId: "java_string",
    question: "Write code to find last index of character.",
    mathSolution: "Find last occurrence position",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        int index = str.lastIndexOf(\'o\');\n        System.out.println(index);\n    }\n}',
    hint: "Use lastIndexOf()"
  },
  {
    id: "string_25",
    topicId: "java_string",
    question: "How do you check if strings are not equal?",
    mathSolution: "Negate equality check",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "abc";\n        String s2 = "def";\n        boolean notEqual = !s1.equals(s2);\n        System.out.println(notEqual);\n    }\n}',
    hint: "Use ! with equals()"
  },
  {
    id: "string_26",
    topicId: "java_string",
    question: "Write code to extract substring from index to end.",
    mathSolution: "Get substring starting at index",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        String sub = str.substring(3);\n        System.out.println(sub);\n    }\n}',
    hint: "substring(start) goes to end"
  },
  {
    id: "string_27",
    topicId: "java_string",
    question: "How do you replace all occurrences of a char?",
    mathSolution: "Replace old char with new everywhere",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java Programming";\n        String replaced = str.replace(\'a\', \'e\');\n        System.out.println(replaced);\n    }\n}',
    hint: "replace() works for chars"
  },
  {
    id: "string_28",
    topicId: "java_string",
    question: "Write code to convert string to char array.",
    mathSolution: "Convert to array of characters",
    codeSolution: 'import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        char[] chars = str.toCharArray();\n        System.out.println(Arrays.toString(chars));\n    }\n}',
    hint: "Use toCharArray()"
  },
  {
    id: "string_29",
    topicId: "java_string",
    question: "How do you check if string is null or empty?",
    mathSolution: "Validate string before use",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        boolean isValid = str != null && !str.isEmpty();\n        System.out.println(isValid);\n    }\n}',
    hint: "Check null first"
  },
  {
    id: "string_30",
    topicId: "java_string",
    question: "Write code to format string with variables.",
    mathSolution: "Insert variables into string template",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String name = "John";\n        int age = 25;\n        String result = String.format("Name: %s, Age: %d", name, age);\n        System.out.println(result);\n    }\n}',
    hint: "Use String.format()"
  },
  {
    id: "string_31",
    topicId: "java_string",
    question: "How do you remove all spaces from string?",
    mathSolution: "Remove every space character",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World Java";\n        String noSpaces = str.replace(" ", "");\n        System.out.println(noSpaces);\n    }\n}',
    hint: "Replace space with empty"
  },
  {
    id: "string_32",
    topicId: "java_string",
    question: "Write code to compare strings lexicographically.",
    mathSolution: "Compare alphabetically",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "apple";\n        String s2 = "banana";\n        int result = s1.compareTo(s2);\n        System.out.println(result);\n    }\n}',
    hint: "compareTo() returns negative, zero, positive"
  },
  {
    id: "string_33",
    topicId: "java_string",
    question: "How do you convert double to string?",
    mathSolution: "Convert decimal to string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        double pi = 3.14;\n        String str = Double.toString(pi);\n        System.out.println(str);\n    }\n}',
    hint: "Use Double.toString()"
  },
  {
    id: "string_34",
    topicId: "java_string",
    question: "Write code to check if string matches regex.",
    mathSolution: "Validate against pattern",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "12345";\n        boolean isDigits = str.matches("\\\\d+");\n        System.out.println(isDigits);\n    }\n}',
    hint: "Use matches() with regex"
  },
  {
    id: "string_35",
    topicId: "java_string",
    question: "How do you create string using new keyword?",
    mathSolution: "Create string object",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = new String("Hello");\n        System.out.println(str);\n    }\n}',
    hint: "String objects can be created with new"
  },
  {
    id: "string_36",
    topicId: "java_string",
    question: "Write code to get Unicode code point.",
    mathSolution: "Get ASCII/Unicode value",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java";\n        int codePoint = str.codePointAt(0);\n        System.out.println(codePoint);\n    }\n}',
    hint: "Use codePointAt()"
  },
  {
    id: "string_37",
    topicId: "java_string",
    question: "How do you check string reference equality?",
    mathSolution: "Check if same object",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "Hello";\n        boolean sameRef = (s1 == s2);\n        System.out.println(sameRef);\n    }\n}',
    hint: "== compares references"
  },
  {
    id: "string_38",
    topicId: "java_string",
    question: "Write code to create multiline string.",
    mathSolution: "String with line breaks",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String multiline = "Line 1\\nLine 2\\nLine 3";\n        System.out.println(multiline);\n    }\n}',
    hint: "Use \\n for line breaks"
  },
  {
    id: "string_39",
    topicId: "java_string",
    question: "How do you indent a string?",
    mathSolution: "Add spaces at beginning",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String indented = "    " + str;\n        System.out.println(indented);\n    }\n}',
    hint: "Simple concatenation"
  },
  {
    id: "string_40",
    topicId: "java_string",
    question: "Write code to convert string to boolean.",
    mathSolution: "Parse boolean value",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "true";\n        boolean bool = Boolean.parseBoolean(str);\n        System.out.println(bool);\n    }\n}',
    hint: "Use Boolean.parseBoolean()"
  },
  {
    id: "string_41",
    topicId: "java_string",
    question: "How do you reverse a string?",
    mathSolution: "Reverse character order",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String reversed = new StringBuilder(str).reverse().toString();\n        System.out.println(reversed);\n    }\n}',
    hint: "Use StringBuilder.reverse()"
  },
  {
    id: "string_42",
    topicId: "java_string",
    question: "Write code to count character occurrences.",
    mathSolution: "Count frequency of specific char",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java Programming";\n        char target = \'a\';\n        long count = str.chars().filter(ch -> ch == target).count();\n        System.out.println(count);\n    }\n}',
    hint: "Use stream or loop"
  },
  {
    id: "string_43",
    topicId: "java_string",
    question: "How do you check palindrome string?",
    mathSolution: "String equals its reverse",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "madam";\n        String reversed = new StringBuilder(str).reverse().toString();\n        boolean isPalindrome = str.equals(reversed);\n        System.out.println(isPalindrome);\n    }\n}',
    hint: "Compare with reverse"
  },
  {
    id: "string_44",
    topicId: "java_string",
    question: "Write code to extract all digits from string.",
    mathSolution: "Keep only numbers",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "abc123def456";\n        String digits = str.replaceAll("[^0-9]", "");\n        System.out.println(digits);\n    }\n}',
    hint: "Use replaceAll with regex"
  },
  {
    id: "string_45",
    topicId: "java_string",
    question: "How do you capitalize first letter?",
    mathSolution: "Make first character uppercase",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "java";\n        String capitalized = str.substring(0, 1).toUpperCase() + str.substring(1);\n        System.out.println(capitalized);\n    }\n}',
    hint: "Combine uppercase first + rest"
  },
  {
    id: "string_46",
    topicId: "java_string",
    question: "Write code to check for uppercase letters.",
    mathSolution: "Detect capital letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean hasUpper = !str.equals(str.toLowerCase());\n        System.out.println(hasUpper);\n    }\n}',
    hint: "Compare with lowercase"
  },
  {
    id: "string_47",
    topicId: "java_string",
    question: "How do you remove duplicate characters?",
    mathSolution: "Keep unique characters only",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "aabbcc";\n        StringBuilder sb = new StringBuilder();\n        for (char c : str.toCharArray()) {\n            if (sb.indexOf(String.valueOf(c)) == -1) {\n                sb.append(c);\n            }\n        }\n        System.out.println(sb.toString());\n    }\n}',
    hint: "Use loop and check existing characters"
  },
  {
    id: "string_48",
    topicId: "java_string",
    question: "Write code to swap two strings without third variable.",
    mathSolution: "Use concatenation",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String a = "Hello";\n        String b = "World";\n        a = a + b;\n        b = a.substring(0, a.length() - b.length());\n        a = a.substring(b.length());\n        System.out.println("a = " + a + ", b = " + b);\n    }\n}',
    hint: "Use substring after concatenation"
  },
  {
    id: "string_49",
    topicId: "java_string",
    question: "How do you find longest word in sentence?",
    mathSolution: "Find word with max length",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String sentence = "Java programming is fun";\n        String[] words = sentence.split(" ");\n        String longest = "";\n        for (String w : words) {\n            if (w.length() > longest.length()) longest = w;\n        }\n        System.out.println(longest);\n    }\n}',
    hint: "Split and compare lengths"
  },
  {
    id: "string_50",
    topicId: "java_string",
    question: "Write code to count vowels in a string.",
    mathSolution: "Count a,e,i,o,u characters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        int count = 0;\n        for (char c : str.toLowerCase().toCharArray()) {\n            if ("aeiou".indexOf(c) != -1) count++;\n        }\n        System.out.println(count);\n    }\n}',
    hint: "Check for vowels (case insensitive)"
  }
);