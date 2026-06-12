// ============================================================
// BASIC I/O QUESTIONS - Character & Digit Operations
// ============================================================

const basicIOQuestions = [
  {
    id: 1,
    title: "Check Digit is Present in Number or Not",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "digit-check",
    category: "Problem Solving",
    tags: ["digits", "search", "loop", "easy"],
    desc: "Given a number <code>n</code> and a digit <code>d</code>, check if the digit exists in the number. Print 'Yes' if found, otherwise 'No'.",
    examples: [
      { input: "n = 125464, d = 5", output: "Yes", explanation: "Digit 5 is present" },
      { input: "n = 125464, d = 3", output: "No", explanation: "Digit 3 is not present" },
      { input: "n = 12345, d = 1", output: "Yes", explanation: "Digit 1 is present" },
      { input: "n = 100, d = 0", output: "Yes", explanation: "Digit 0 is present" }
    ],
    testCases: [
      { input: "125464\n5", output: "Yes" },
      { input: "125464\n3", output: "No" },
      { input: "12345\n1", output: "Yes" },
      { input: "100\n0", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^9", "0 <= d <= 9"],
    videoId: "6BGi2ePbY7o",
    videoStart: 195,
    videoEnd:287 ,
    starterCode: {
      python: "n = int(input())\nd = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int d = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n, d; cin >> n >> d;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n, d; scanf(\"%d%d\",&n,&d);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst n = input[0];\nconst d = input[1];\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int d = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nd = int(input())\nfound = False\nif n == 0 and d == 0:\n    found = True\nelse:\n    while n > 0:\n        if n % 10 == d:\n            found = True\n            break\n        n //= 10\nprint('Yes' if found else 'No')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int d = sc.nextInt();\n        boolean found = false;\n        if(n == 0 && d == 0) found = true;\n        else {\n            while(n > 0) {\n                if(n % 10 == d) {\n                    found = true;\n                    break;\n                }\n                n /= 10;\n            }\n        }\n        System.out.println(found ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n, d; cin >> n >> d;\n    bool found = false;\n    if(n == 0 && d == 0) found = true;\n    else {\n        while(n > 0) {\n            if(n % 10 == d) {\n                found = true;\n                break;\n            }\n            n /= 10;\n        }\n    }\n    cout << (found ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n, d; scanf(\"%d%d\",&n,&d);\n    int found = 0;\n    if(n == 0 && d == 0) found = 1;\n    else {\n        while(n > 0) {\n            if(n % 10 == d) {\n                found = 1;\n                break;\n            }\n            n /= 10;\n        }\n    }\n    printf(found ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nlet n = input[0];\nconst d = input[1];\nlet found = false;\nfor(let i = 0; i < n.length; i++) {\n    if(n[i] === d) {\n        found = true;\n        break;\n    }\n}\nconsole.log(found ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int d = int.Parse(Console.ReadLine());\n        bool found = false;\n        if(n == 0 && d == 0) found = true;\n        else {\n            while(n > 0) {\n                if(n % 10 == d) {\n                    found = true;\n                    break;\n                }\n                n /= 10;\n            }\n        }\n        Console.WriteLine(found ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Read number n and digit d",
      "Handle special case: n=0 and d=0",
      "While n > 0: extract last digit using n % 10",
      "If last digit equals d, print 'Yes' and exit",
      "Remove last digit (n = n / 10)",
      "If loop completes, print 'No'"
    ],
    mathSolution: "Extract digits using modulo operation",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use modulo operator (%) to get last digit and division to remove it"
  },
  {
    id: 2,
    title: "Check Character Type",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "character-check",
    category: "Problem Solving",
    tags: ["character", "ascii", "conditional", "easy"],
    desc: "Given a character, check whether it is lowercase letter, uppercase letter, digit, or other character. Print the appropriate message.",
    examples: [
      { input: "ch = 'a'", output: "Lowercase", explanation: "'a' is lowercase" },
      { input: "ch = 'Z'", output: "Uppercase", explanation: "'Z' is uppercase" },
      { input: "ch = '5'", output: "Digit", explanation: "'5' is digit" },
      { input: "ch = '@'", output: "Other", explanation: "'@' is other" }
    ],
    testCases: [
      { input: "a", output: "Lowercase" },
      { input: "Z", output: "Uppercase" },
      { input: "5", output: "Digit" },
      { input: "@", output: "Other" },
      { input: "m", output: "Lowercase" },
      { input: "9", output: "Digit" }
    ],
    constraints: ["Single character input"],
    videoId: "6BGi2ePbY7o",
    videoStart: 340,
    videoEnd: 486,
    starterCode: {
      python: "ch = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    // Write your code here\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = Console.ReadLine()[0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ch = input()\nif ch.islower():\n    print('Lowercase')\nelif ch.isupper():\n    print('Uppercase')\nelif ch.isdigit():\n    print('Digit')\nelse:\n    print('Other')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch = sc.next().charAt(0);\n        if(ch >= 'a' && ch <= 'z') System.out.println(\"Lowercase\");\n        else if(ch >= 'A' && ch <= 'Z') System.out.println(\"Uppercase\");\n        else if(ch >= '0' && ch <= '9') System.out.println(\"Digit\");\n        else System.out.println(\"Other\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    if(ch >= 'a' && ch <= 'z') cout << \"Lowercase\";\n    else if(ch >= 'A' && ch <= 'Z') cout << \"Uppercase\";\n    else if(ch >= '0' && ch <= '9') cout << \"Digit\";\n    else cout << \"Other\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    if(ch >= 'a' && ch <= 'z') printf(\"Lowercase\");\n    else if(ch >= 'A' && ch <= 'Z') printf(\"Uppercase\");\n    else if(ch >= '0' && ch <= '9') printf(\"Digit\");\n    else printf(\"Other\");\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim();\nif(ch >= 'a' && ch <= 'z') console.log('Lowercase');\nelse if(ch >= 'A' && ch <= 'Z') console.log('Uppercase');\nelse if(ch >= '0' && ch <= '9') console.log('Digit');\nelse console.log('Other');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = Console.ReadLine()[0];\n        if(ch >= 'a' && ch <= 'z') Console.WriteLine(\"Lowercase\");\n        else if(ch >= 'A' && ch <= 'Z') Console.WriteLine(\"Uppercase\");\n        else if(ch >= '0' && ch <= '9') Console.WriteLine(\"Digit\");\n        else Console.WriteLine(\"Other\");\n    }\n}"
    },
    algorithmSteps: [
      "Read character",
      "Check if between 'a'-'z' → Lowercase",
      "Else if between 'A'-'Z' → Uppercase",
      "Else if between '0'-'9' → Digit",
      "Else → Other"
    ],
    mathSolution: "Use ASCII ranges",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "ASCII: a=97, A=65, 0=48"
  },
  {
    id: 3,
    title: "Check Character is Present in String or Not",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "string-search",
    category: "Problem Solving",
    tags: ["string", "character", "search", "easy"],
    desc: "Given a string <code>s</code> and a character <code>ch</code>, check if the character exists in the string. Print 'Yes' if found, otherwise 'No'.",
    examples: [
      { input: "s = 'hello world', ch = 'o'", output: "Yes", explanation: "'o' is present" },
      { input: "s = 'hello world', ch = 'z'", output: "No", explanation: "'z' is not present" },
      { input: "s = 'programming', ch = 'g'", output: "Yes", explanation: "'g' is present" },
      { input: "s = 'abc', ch = 'A'", output: "No", explanation: "Case sensitive" }
    ],
    testCases: [
      { input: "hello world\no", output: "Yes" },
      { input: "hello world\nz", output: "No" },
      { input: "programming\ng", output: "Yes" },
      { input: "abc\nA", output: "No" }
    ],
    constraints: ["1 <= |s| <= 1000", "Single character input"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\nch = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        char ch = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; char ch;\n    getline(cin, s);\n    cin >> ch;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000], ch;\n    fgets(s, 1000, stdin);\n    scanf(\"%c\",&ch);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst s = input[0];\nconst ch = input[1];\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        char ch = Console.ReadLine()[0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nch = input()\nif ch in s:\n    print('Yes')\nelse:\n    print('No')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        char ch = sc.next().charAt(0);\n        if(s.indexOf(ch) != -1)\n            System.out.println(\"Yes\");\n        else\n            System.out.println(\"No\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; char ch;\n    getline(cin, s);\n    cin >> ch;\n    if(s.find(ch) != string::npos)\n        cout << \"Yes\";\n    else\n        cout << \"No\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000], ch;\n    fgets(s, 1000, stdin);\n    scanf(\"%c\",&ch);\n    if(strchr(s, ch) != NULL)\n        printf(\"Yes\");\n    else\n        printf(\"No\");\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst s = input[0];\nconst ch = input[1];\nif(s.includes(ch))\n    console.log(\"Yes\");\nelse\n    console.log(\"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        char ch = Console.ReadLine()[0];\n        if(s.Contains(ch))\n            Console.WriteLine(\"Yes\");\n        else\n            Console.WriteLine(\"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Read string s and character ch",
      "Search for ch in s",
      "If found → print 'Yes'",
      "If not found → print 'No'"
    ],
    mathSolution: "Use built-in string search functions",
    timeComplexity: "O(n) where n is string length",
    spaceComplexity: "O(1)",
    hint: "Use 'in' operator (Python), indexOf() (Java), find() (C++), includes() (JavaScript), Contains() (C#)"
  },
// ============================================================
// BASIC I/O PROBLEMS - ADDITIONAL 7 QUESTIONS (ID 3 to 9)
// ============================================================
// Add these to your existing basicIOQuestions array

  {
    id: 4,
    title: "Check Character is Vowel or Consonant",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "character-check",
    category: "Problem Solving",
    tags: ["character", "vowel", "consonant", "conditional"],
    desc: "Given a character (alphabet), check whether it is a vowel or consonant. Vowels are A, E, I, O, U (both cases). Print 'Vowel' if vowel, otherwise 'Consonant'.",
    examples: [
      { input: "A", output: "Vowel", explanation: "A is a vowel" },
      { input: "b", output: "Consonant", explanation: "b is a consonant" }
    ],
    testCases: [
      { input: "A", output: "Vowel" },
      { input: "b", output: "Consonant" },
      { input: "E", output: "Vowel" },
      { input: "z", output: "Consonant" },
      { input: "I", output: "Vowel" }
    ],
    constraints: ["Single alphabet character input (a-z or A-Z)"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "ch = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    // Write your code here\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = Console.ReadLine()[0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ch = input().lower()\nif ch in 'aeiou':\n    print('Vowel')\nelse:\n    print('Consonant')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        char ch=sc.next().toLowerCase().charAt(0);\n        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')\n            System.out.println(\"Vowel\");\n        else\n            System.out.println(\"Consonant\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin>>ch;\n    ch=tolower(ch);\n    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')\n        cout<<\"Vowel\";\n    else\n        cout<<\"Consonant\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    ch=tolower(ch);\n    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')\n        printf(\"Vowel\");\n    else\n        printf(\"Consonant\");\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim().toLowerCase();\nif('aeiou'.includes(ch))\n    console.log('Vowel');\nelse\n    console.log('Consonant');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = char.ToLower(Console.ReadLine()[0]);\n        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')\n            Console.WriteLine(\"Vowel\");\n        else\n            Console.WriteLine(\"Consonant\");\n    }\n}"
    },
    algorithmSteps: [
      "Read character",
      "Convert to lowercase for case-insensitive check",
      "Check if character is in vowel set {a, e, i, o, u}",
      "If yes → print 'Vowel'",
      "If no → print 'Consonant'"
    ],
    mathSolution: "Vowels are specific letters in the alphabet",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Convert to lowercase first to handle both cases"
  },
  {
    id: 5,
    title: "Print ASCII Value of a Character",
    difficulty: "medium",
    topic: "basic-iop",
    subtopic: "ascii",
    category: "Problem Solving",
    tags: ["character", "ascii", "typecasting"],
    desc: "Given a character, print its ASCII value (integer representation).",
    examples: [
      { input: "A", output: "65", explanation: "ASCII value of 'A' is 65" },
      { input: "a", output: "97", explanation: "ASCII value of 'a' is 97" }
    ],
    testCases: [
      { input: "A", output: "65" },
      { input: "a", output: "97" },
      { input: "0", output: "48" },
      { input: "@", output: "64" }
    ],
    constraints: ["Single character input"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "ch = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    // Write your code here\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = Console.ReadLine()[0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ch = input()\nprint(ord(ch))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        char ch=sc.next().charAt(0);\n        System.out.println((int)ch);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin>>ch;\n    cout<<(int)ch;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch; scanf(\"%c\",&ch);\n    printf(\"%d\",ch);\n    return 0;\n}",
      javascript: "const ch = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(ch.charCodeAt(0));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        char ch = Console.ReadLine()[0];\n        Console.WriteLine((int)ch);\n    }\n}"
    },
    algorithmSteps: [
      "Read character",
      "Convert character to its integer ASCII value",
      "Print the ASCII value"
    ],
    mathSolution: "Each character has a corresponding integer code (ASCII)",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use typecasting (int)char or built-in functions like ord()"
  },
  {
    id: 6,
    title: "Print Character from Given ASCII Value",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "ascii",
    category: "Problem Solving",
    tags: ["ascii", "character", "typecasting"],
    desc: "Given an ASCII value (integer), print the corresponding character.",
    examples: [
      { input: "65", output: "A", explanation: "ASCII 65 corresponds to 'A'" },
      { input: "97", output: "a", explanation: "ASCII 97 corresponds to 'a'" }
    ],
    testCases: [
      { input: "65", output: "A" },
      { input: "97", output: "a" },
      { input: "48", output: "0" },
      { input: "64", output: "@" }
    ],
    constraints: ["32 <= ascii <= 126 (printable ASCII)"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "ascii_val = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int ascii_val = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int ascii_val; cin >> ascii_val;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int ascii_val; scanf(\"%d\",&ascii_val);\n    // Write your code here\n    return 0;\n}",
      javascript: "const ascii_val = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int ascii_val = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ascii_val = int(input())\nprint(chr(ascii_val))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int ascii_val=sc.nextInt();\n        System.out.println((char)ascii_val);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int ascii_val; cin>>ascii_val;\n    cout<<(char)ascii_val;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int ascii_val; scanf(\"%d\",&ascii_val);\n    printf(\"%c\",ascii_val);\n    return 0;\n}",
      javascript: "const ascii_val = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconsole.log(String.fromCharCode(ascii_val));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int ascii_val = int.Parse(Console.ReadLine());\n        Console.WriteLine((char)ascii_val);\n    }\n}"
    },
    algorithmSteps: [
      "Read integer ASCII value",
      "Convert integer to corresponding character",
      "Print the character"
    ],
    mathSolution: "Each ASCII code maps to a specific character",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use typecasting (char)int or built-in functions like chr()"
  },
  {
    id: 7,
    title: "Compare Two Characters (Same or Different)",
    difficulty: "medium",
    topic: "basic-iop",
    subtopic: "character-comparison",
    category: "Problem Solving",
    tags: ["character", "comparison", "conditional"],
    desc: "Given two characters, check if they are the same or different. Print 'Same' if equal, otherwise 'Different'.",
    examples: [
      { input: "A A", output: "Same", explanation: "Both characters are 'A'" },
      { input: "A B", output: "Different", explanation: "Characters are different" }
    ],
    testCases: [
      { input: "A A", output: "Same" },
      { input: "A B", output: "Different" },
      { input: "a a", output: "Same" },
      { input: "a A", output: "Different" }
    ],
    constraints: ["Two single character inputs (case-sensitive)"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "ch1 = input()\nch2 = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch1 = sc.next().charAt(0);\n        char ch2 = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch1, ch2; cin >> ch1 >> ch2;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch1, ch2; scanf(\"%c %c\",&ch1,&ch2);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [ch1, ch2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        char ch1 = input[0][0];\n        char ch2 = input[1][0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ch1 = input()\nch2 = input()\nprint('Same' if ch1 == ch2 else 'Different')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        char ch1=sc.next().charAt(0);\n        char ch2=sc.next().charAt(0);\n        System.out.println(ch1==ch2?\"Same\":\"Different\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    char ch1, ch2; cin>>ch1>>ch2;\n    cout<<(ch1==ch2?\"Same\":\"Different\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char ch1, ch2; scanf(\"%c %c\",&ch1,&ch2);\n    printf(ch1==ch2?\"Same\":\"Different\");\n    return 0;\n}",
      javascript: "const [ch1, ch2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\nconsole.log(ch1===ch2?'Same':'Different');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        Console.WriteLine(input[0]==input[1]?\"Same\":\"Different\");\n    }\n}"
    },
    algorithmSteps: [
      "Read two characters",
      "Compare them using equality operator",
      "If equal → print 'Same'",
      "If not equal → print 'Different'"
    ],
    mathSolution: "Direct character comparison",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use == operator for character comparison"
  },
  {
    id: 8,
    title: "Check Two Characters are Equal (Ignore Case)",
    difficulty: "easy",
    topic: "basic-iop",
    subtopic: "character-comparison",
    category: "Problem Solving",
    tags: ["character", "case-insensitive", "comparison"],
    desc: "Given two characters, check if they are the same ignoring case (uppercase/lowercase). Print 'Same' if equal ignoring case, otherwise 'Different'.",
    examples: [
      { input: "A a", output: "Same", explanation: "Same letter ignoring case" },
      { input: "A B", output: "Different", explanation: "Different letters" },
      { input: "z Z", output: "Same", explanation: "Same letter ignoring case" }
    ],
    testCases: [
      { input: "A a", output: "Same" },
      { input: "A B", output: "Different" },
      { input: "z Z", output: "Same" },
      { input: "m M", output: "Same" }
    ],
    constraints: ["Two single alphabet character inputs"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "ch1 = input()\nch2 = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char ch1 = sc.next().charAt(0);\n        char ch2 = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n    char ch1, ch2; cin >> ch1 >> ch2;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char ch1, ch2; scanf(\"%c %c\",&ch1,&ch2);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [ch1, ch2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        char ch1 = input[0][0];\n        char ch2 = input[1][0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "ch1 = input().lower()\nch2 = input().lower()\nprint('Same' if ch1 == ch2 else 'Different')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        char ch1=Character.toLowerCase(sc.next().charAt(0));\n        char ch2=Character.toLowerCase(sc.next().charAt(0));\n        System.out.println(ch1==ch2?\"Same\":\"Different\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n    char ch1, ch2; cin>>ch1>>ch2;\n    ch1=tolower(ch1); ch2=tolower(ch2);\n    cout<<(ch1==ch2?\"Same\":\"Different\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char ch1, ch2; scanf(\"%c %c\",&ch1,&ch2);\n    ch1=tolower(ch1); ch2=tolower(ch2);\n    printf(ch1==ch2?\"Same\":\"Different\");\n    return 0;\n}",
      javascript: "const [ch1, ch2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\nconsole.log(ch1.toLowerCase()===ch2.toLowerCase()?'Same':'Different');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        Console.WriteLine(input[0].ToLower()==input[1].ToLower()?\"Same\":\"Different\");\n    }\n}"
    },
    algorithmSteps: [
      "Read two characters",
      "Convert both to lowercase (or uppercase)",
      "Compare the converted characters",
      "If equal → print 'Same'",
      "If not equal → print 'Different'"
    ],
    mathSolution: "Case-insensitive comparison by normalizing case",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use tolower() or toLowerCase() to ignore case"
  },
  {
    id: 9,
    title: "Count Spaces in a String",
    difficulty: "medium",
    topic: "basic-iop",
    subtopic: "string-counting",
    category: "Problem Solving",
    tags: ["string", "spaces", "counting", "loop"],
    desc: "Given a string, count the number of space characters (' ') in it. Print the count.",
    examples: [
      { input: "Hello World", output: "1", explanation: "One space between Hello and World" },
      { input: "Hello   World", output: "3", explanation: "Three spaces between Hello and World" }
    ],
    testCases: [
      { input: "Hello World", output: "1" },
      { input: "Hello   World", output: "3" },
      { input: "NoSpacesHere", output: "0" },
      { input: "  leading and trailing  ", output: "4" }
    ],
    constraints: ["1 <= string length <= 1000"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000];\n    fgets(s, 1000, stdin);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\ncount = s.count(' ')\nprint(count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        int count=0;\n        for(char c:s.toCharArray()) if(c==' ') count++;\n        System.out.println(count);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    int count=0;\n    for(char c:s) if(c==' ') count++;\n    cout<<count;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000];\n    fgets(s, 1000, stdin);\n    int count=0;\n    for(int i=0;s[i]!='\\0';i++) if(s[i]==' ') count++;\n    printf(\"%d\",count);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8');\nlet count=0;\nfor(let i=0;i<s.length;i++) if(s[i]===' ') count++;\nconsole.log(count);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s=Console.ReadLine();\n        int count=0;\n        foreach(char c in s) if(c==' ') count++;\n        Console.WriteLine(count);\n    }\n}"
    },
    algorithmSteps: [
      "Read string s",
      "Initialize count = 0",
      "Iterate through each character in string",
      "If character is space (' '), increment count",
      "Print count"
    ],
    mathSolution: "Count occurrences of space character",
    timeComplexity: "O(n) where n is string length",
    spaceComplexity: "O(1)",
    hint: "Use count() method or loop through characters"
  },
  {
    id: 10,
    title: "Count Occurrences of a Character in a String",
    difficulty: "hard",
    topic: "basic-iop",
    subtopic: "string-counting",
    category: "Problem Solving",
    tags: ["string", "character", "frequency", "counting"],
    desc: "Given a string and a character, count how many times the character appears in the string. Print the count.",
    examples: [
      { input: "hello\nl", output: "2", explanation: "'l' appears twice in 'hello'" },
      { input: "programming\ng", output: "2", explanation: "'g' appears twice" }
    ],
    testCases: [
      { input: "hello\nl", output: "2" },
      { input: "programming\ng", output: "2" },
      { input: "aaaaa\na", output: "5" },
      { input: "abcde\nz", output: "0" }
    ],
    constraints: ["1 <= string length <= 1000", "Single character"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\nch = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        char ch = sc.next().charAt(0);\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; char ch;\n    getline(cin, s);\n    cin >> ch;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000], ch;\n    fgets(s, 1000, stdin);\n    scanf(\"%c\",&ch);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst s = input[0];\nconst ch = input[1];\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        char ch = Console.ReadLine()[0];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nch = input()\ncount = s.count(ch)\nprint(count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        char ch=sc.next().charAt(0);\n        int count=0;\n        for(char c:s.toCharArray()) if(c==ch) count++;\n        System.out.println(count);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; char ch;\n    getline(cin, s);\n    cin >> ch;\n    int count=0;\n    for(char c:s) if(c==ch) count++;\n    cout<<count;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[1000], ch;\n    fgets(s, 1000, stdin);\n    scanf(\"%c\",&ch);\n    int count=0;\n    for(int i=0;s[i]!='\\0';i++) if(s[i]==ch) count++;\n    printf(\"%d\",count);\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst s = input[0];\nconst ch = input[1];\nlet count=0;\nfor(let i=0;i<s.length;i++) if(s[i]===ch) count++;\nconsole.log(count);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s=Console.ReadLine();\n        char ch=Console.ReadLine()[0];\n        int count=0;\n        foreach(char c in s) if(c==ch) count++;\n        Console.WriteLine(count);\n    }\n}"
    },
    algorithmSteps: [
      "Read string s",
      "Read character ch to count",
      "Initialize count = 0",
      "Iterate through each character in string",
      "If character equals ch, increment count",
      "Print count"
    ],
    mathSolution: "Count frequency of character in string",
    timeComplexity: "O(n) where n is string length",
    spaceComplexity: "O(1)",
    hint: "Use count() method or loop through characters"
  },
];

if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];

  basicIOQuestions.forEach(q => {
    window.questions.push(createQuestion(q));
  });

  console.log("✅ Basic I/O questions loaded:", basicIOQuestions.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = basicIOQuestions;
}