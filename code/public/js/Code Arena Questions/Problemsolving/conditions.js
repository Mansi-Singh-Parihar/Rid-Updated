// ============================================================
// CONDITION PROBLEMS - 2 QUESTIONS
// ============================================================

const conditionQuestions = [
  {
    id: 1,
    title: "Greatest of Two Numbers",
    difficulty: "easy",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["if-else", "comparison"],
    desc: "Given two integers a and b, print the greatest number.",
    examples: [
      { input: "5 9", output: "9", explanation: "9 is greater than 5." },
      { input: "10 3", output: "10", explanation: "10 is greater than 3." }
    ],
    testCases: [
      { input: "5 9", output: "9" },
      { input: "10 3", output: "10" },
      { input: "7 7", output: "7" }
    ],
    constraints: ["-10^6 <= a, b <= 10^6"],
    videoId: "Nj7ARFjJMg8",
    videoStart: 196,
    videoEnd: 280,
    starterCode: {
      python: "a,b = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin >> a >> b;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d %d\",&a,&b);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a,b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a,b = map(int, input().split())\nprint(a if a > b else b)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt();\n        System.out.println(a > b ? a : b);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin>>a>>b;\n    cout << (a>b?a:b);\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d %d\",&a,&b);\n    printf(\"%d\", a>b?a:b);\n    return 0;\n}",
      javascript: "const [a,b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nconsole.log(a>b?a:b);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]);\n        Console.WriteLine(a>b?a:b);\n    }\n}"
    },
    algorithmSteps: [
      "Read two integers a and b from input",
      "Compare a and b using > operator",
      "If a > b, then print a as the greatest number",
      "Else, print b as the greatest number"
    ],
    mathSolution: "Compare both numbers using > operator.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use if-else statement to compare two numbers."
  },
  {
    id: 2,
    title: "Greatest of Three Numbers",
    difficulty: "easy",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["if-else", "comparison"],
    desc: "Given three integers a, b, c, print the greatest number.",
    examples: [
      { input: "4 7 2", output: "7", explanation: "7 is the greatest." },
      { input: "10 10 5", output: "10", explanation: "10 is the greatest." }
    ],
    testCases: [
      { input: "4 7 2", output: "7" },
      { input: "10 10 5", output: "10" },
      { input: "1 2 3", output: "3" }
    ],
    constraints: ["-10^6 <= a, b, c <= 10^6"],
    videoId: "Nj7ARFjJMg8",
    videoStart: 377,
    videoEnd: 480,
    starterCode: {
      python: "a,b,c = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt(), c=sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b,c; cin>>a>>b>>c;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b,c; scanf(\"%d %d %d\",&a,&b,&c);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a,b,c] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]), c=int.Parse(input[2]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a,b,c = map(int, input().split())\nprint(max(a,b,c))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(),b=sc.nextInt(),c=sc.nextInt();\n        System.out.println(Math.max(a,Math.max(b,c)));\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int a,b,c; cin>>a>>b>>c;\n    cout<<max({a,b,c});\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b,c; scanf(\"%d %d %d\",&a,&b,&c);\n    int m=a>b?a:b; m=m>c?m:c;\n    printf(\"%d\",m);\n    return 0;\n}",
      javascript: "const [a,b,c] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nconsole.log(Math.max(a,b,c));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]), c=int.Parse(input[2]);\n        Console.WriteLine(Math.Max(a,Math.Max(b,c)));\n    }\n}"
    },
    algorithmSteps: [
      "Read three integers a, b, c from input",
      "Compare a with b and c",
      "If a is greater than both, print a",
      "Else if b is greater than both, print b",
      "Else print c"
    ],
    mathSolution: "Compare each number with the other two to find the maximum.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use nested if-else or Math.max()."
  },
  {
    id: 3,
    title: "Check Positive or Negative Number",
    difficulty: "easy",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["if-else", "comparison"],
    desc: "Check whether a given number is positive, negative, or zero.",
    examples: [
      { input: "-5", output: "Negative", explanation: "-5 is less than 0." },
      { input: "10", output: "Positive", explanation: "10 is greater than 0." }
    ],
    testCases: [
      { input: "-5", output: "Negative" },
      { input: "10", output: "Positive" },
      { input: "0", output: "Zero" }
    ],
    constraints: ["-10^6 <= n <= 10^6"],
    videoId: "Nj7ARFjJMg8",
    videoStart: 540,
    videoEnd: 593,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nif n > 0: print('Positive')\nelif n < 0: print('Negative')\nelse: print('Zero')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        if(n>0) System.out.println(\"Positive\");\n        else if(n<0) System.out.println(\"Negative\");\n        else System.out.println(\"Zero\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    if(n>0) cout<<\"Positive\";\n    else if(n<0) cout<<\"Negative\";\n    else cout<<\"Zero\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n>0) printf(\"Positive\");\n    else if(n<0) printf(\"Negative\");\n    else printf(\"Zero\");\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n>0) console.log('Positive');\nelse if(n<0) console.log('Negative');\nelse console.log('Zero');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        if(n>0) Console.WriteLine(\"Positive\");\n        else if(n<0) Console.WriteLine(\"Negative\");\n        else Console.WriteLine(\"Zero\");\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "If n > 0, print 'Positive'",
      "Else if n < 0, print 'Negative'",
      "Else print 'Zero'"
    ],
    mathSolution: "Numbers greater than zero are positive, less than zero are negative.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use if-else if-else ladder."
  },
  {
    id: 4,
    title: "Even or Odd",
    difficulty: "easy",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["modulo", "if-else"],
    desc: "Check whether a given number is even or odd.",
    examples: [
      { input: "10", output: "Even", explanation: "10 is divisible by 2." },
      { input: "7", output: "Odd", explanation: "7 is not divisible by 2." }
    ],
    testCases: [
      { input: "10", output: "Even" },
      { input: "7", output: "Odd" },
      { input: "0", output: "Even" }
    ],
    constraints: ["-10^6 <= n <= 10^6"],
    videoId: "Nj7ARFjJMg8",
    videoStart: 687,
    videoEnd: 730,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nprint('Even' if n % 2 == 0 else 'Odd')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        System.out.println(n%2==0?\"Even\":\"Odd\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    cout<<(n%2==0?\"Even\":\"Odd\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    printf(n%2==0?\"Even\":\"Odd\");\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconsole.log(n%2==0?'Even':'Odd');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        Console.WriteLine(n%2==0?\"Even\":\"Odd\");\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Compute n % 2",
      "If remainder is 0, print 'Even'",
      "Else print 'Odd'"
    ],
    mathSolution: "Even numbers are divisible by 2, odd numbers leave remainder 1.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use modulus operator % to check divisibility by 2."
  },
  {
    id: 5,
    title: "Voting Eligibility",
    difficulty: "easy",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["if-else", "comparison"],
    desc: "Check whether a person is eligible to vote based on age (>=18).",
    examples: [
      { input: "20", output: "Eligible to vote", explanation: "Age 20 is greater than or equal to 18." },
      { input: "16", output: "Not eligible to vote", explanation: "Age 16 is less than 18." }
    ],
    testCases: [
      { input: "20", output: "Eligible to vote" },
      { input: "16", output: "Not eligible to vote" },
      { input: "18", output: "Eligible to vote" }
    ],
    constraints: ["0 <= age <= 150"],
    videoId: "Nj7ARFjJMg8",
    videoStart: 799,
    videoEnd: 882,
    starterCode: {
      python: "age = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int age = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int age; cin >> age;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int age; scanf(\"%d\",&age);\n    // Write your code here\n    return 0;\n}",
      javascript: "const age = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int age = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "age = int(input())\nprint('Eligible to vote' if age >= 18 else 'Not eligible to vote')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int age=sc.nextInt();\n        System.out.println(age>=18?\"Eligible to vote\":\"Not eligible to vote\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int age; cin>>age;\n    cout<<(age>=18?\"Eligible to vote\":\"Not eligible to vote\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int age; scanf(\"%d\",&age);\n    printf(age>=18?\"Eligible to vote\":\"Not eligible to vote\");\n    return 0;\n}",
      javascript: "const age=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconsole.log(age>=18?'Eligible to vote':'Not eligible to vote');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int age=int.Parse(Console.ReadLine());\n        Console.WriteLine(age>=18?\"Eligible to vote\":\"Not eligible to vote\");\n    }\n}"
    },
    algorithmSteps: [
      "Read age",
      "If age >= 18, print 'Eligible to vote'",
      "Else print 'Not eligible to vote'"
    ],
    mathSolution: "Minimum voting age is 18.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use >= operator."
  },
  {
    id: 6,
    title: "Leap Year Check",
    difficulty: "medium",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["if-else", "modulo", "logical operators"],
    desc: "Check whether a given year is a leap year or not.",
    examples: [
      { input: "2024", output: "Leap Year", explanation: "2024 is divisible by 4 and not by 100." },
      { input: "1900", output: "Not Leap Year", explanation: "1900 is divisible by 100 but not by 400." }
    ],
    testCases: [
      { input: "2024", output: "Leap Year" },
      { input: "1900", output: "Not Leap Year" },
      { input: "2000", output: "Leap Year" }
    ],
    constraints: ["1 <= year <= 10000"],
    videoId: "6BGi2ePbY7o",
    videoStart: 66,
    videoEnd: 139,
    starterCode: {
      python: "year = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int year = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int year; cin >> year;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int year; scanf(\"%d\",&year);\n    // Write your code here\n    return 0;\n}",
      javascript: "const year = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int year = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "year = int(input())\nif (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):\n    print('Leap Year')\nelse:\n    print('Not Leap Year')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int y=sc.nextInt();\n        if((y%400==0)||(y%4==0&&y%100!=0)) System.out.println(\"Leap Year\");\n        else System.out.println(\"Not Leap Year\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int y; cin>>y;\n    if((y%400==0)||(y%4==0&&y%100!=0)) cout<<\"Leap Year\";\n    else cout<<\"Not Leap Year\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int y; scanf(\"%d\",&y);\n    if((y%400==0)||(y%4==0&&y%100!=0)) printf(\"Leap Year\");\n    else printf(\"Not Leap Year\");\n    return 0;\n}",
      javascript: "const y=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif((y%400==0)||(y%4==0&&y%100!=0)) console.log('Leap Year');\nelse console.log('Not Leap Year');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int y=int.Parse(Console.ReadLine());\n        if((y%400==0)||(y%4==0&&y%100!=0)) Console.WriteLine(\"Leap Year\");\n        else Console.WriteLine(\"Not Leap Year\");\n    }\n}"
    },
    algorithmSteps: [
      "Read year",
      "If year divisible by 400, leap year",
      "Else if year divisible by 4 and not divisible by 100, leap year",
      "Else not leap year"
    ],
    mathSolution: "Leap year rules: divisible by 400, or divisible by 4 but not by 100.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use logical OR and AND conditions."
  },
  {
    id: 7,
    title: "Check Last Digit Even or Odd",
    difficulty: "hard",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["modulo", "digit extraction"],
    desc: "Given a number, check whether its last digit is even or odd.",
    examples: [
      { input: "545785", output: "Odd", explanation: "Last digit is 5, which is odd." },
      { input: "1234", output: "Even", explanation: "Last digit is 4, even." }
    ],
    testCases: [
      { input: "545785", output: "Odd" },
      { input: "1234", output: "Even" },
      { input: "0", output: "Even" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: "_cc0wRUTumA",
    videoStart: 525,
    videoEnd: 593,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nlast = n % 10\nprint('Even' if last % 2 == 0 else 'Odd')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int last=n%10;\n        System.out.println(last%2==0?\"Even\":\"Odd\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    int last=n%10;\n    cout<<(last%2==0?\"Even\":\"Odd\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int last=n%10;\n    printf(last%2==0?\"Even\":\"Odd\");\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst last=n%10;\nconsole.log(last%2==0?'Even':'Odd');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        int last=n%10;\n        Console.WriteLine(last%2==0?\"Even\":\"Odd\");\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Extract last digit using n % 10",
      "Check if last digit is even (divisible by 2)",
      "Print 'Even' or 'Odd' accordingly"
    ],
    mathSolution: "Last digit determines parity.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use modulo operator to get last digit."
  },
  {
    id: 8,
    title: "Check Equality Without Comparison Operators",
    difficulty: "medium",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["bitwise", "XOR", "equality"],
    desc: "Given two numbers, check if they are equal without using comparison operators (==, !=, >, <, etc.).",
    examples: [
      { input: "5 5", output: "Numbers are Equal", explanation: "5 XOR 5 = 0." },
      { input: "5 3", output: "Numbers are Not Equal", explanation: "5 XOR 3 != 0." }
    ],
    testCases: [
      { input: "5 5", output: "Numbers are Equal" },
      { input: "5 3", output: "Numbers are Not Equal" },
      { input: "0 0", output: "Numbers are Equal" }
    ],
    constraints: ["-10^6 <= a, b <= 10^6"],
    videoId: null,
    videoStart: 0,
    videoEnd: null,
    starterCode: {
      python: "a,b = map(int, input().split())\n# Write your code here (without using comparison operators)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt();\n        // Write your code here (without using comparison operators)\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin>>a>>b;\n    // Write your code here (without using comparison operators)\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d %d\",&a,&b);\n    // Write your code here (without using comparison operators)\n    return 0;\n}",
      javascript: "const [a,b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here (without using comparison operators)",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]);\n        // Write your code here (without using comparison operators)\n    }\n}"
    },
    solution: {
      python: "a,b = map(int, input().split())\nif a ^ b == 0:\n    print('Numbers are Equal')\nelse:\n    print('Numbers are Not Equal')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt();\n        if((a^b)==0) System.out.println(\"Numbers are Equal\");\n        else System.out.println(\"Numbers are Not Equal\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin>>a>>b;\n    if((a^b)==0) cout<<\"Numbers are Equal\";\n    else cout<<\"Numbers are Not Equal\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d %d\",&a,&b);\n    if((a^b)==0) printf(\"Numbers are Equal\");\n    else printf(\"Numbers are Not Equal\");\n    return 0;\n}",
      javascript: "const [a,b]=require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nif((a^b)==0) console.log('Numbers are Equal');\nelse console.log('Numbers are Not Equal');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]);\n        if((a^b)==0) Console.WriteLine(\"Numbers are Equal\");\n        else Console.WriteLine(\"Numbers are Not Equal\");\n    }\n}"
    },
    algorithmSteps: [
      "Read two integers a and b",
      "Compute XOR (a ^ b)",
      "If result is 0, numbers are equal; else not equal"
    ],
    mathSolution: "XOR of two equal numbers is 0; XOR of different numbers is non-zero.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use bitwise XOR operator ^."
  },
   {
    id: 9,
    title: "Determine the Type of Triangle",
    difficulty: "hard",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["triangle", "inequality", "geometry", "nested-if"],
    desc: "Given three sides of a triangle, determine if it forms a valid triangle. If valid, print whether it is Equilateral, Isosceles, or Scalene.",
    examples: [
      { input: "5 5 5", output: "Equilateral Triangle", explanation: "All three sides are equal" },
      { input: "5 5 3", output: "Isosceles Triangle", explanation: "Two sides are equal" },
      { input: "3 4 5", output: "Scalene Triangle", explanation: "All sides are different" },
      { input: "1 1 3", output: "Invalid Triangle", explanation: "1+1 is not greater than 3" }
    ],
    testCases: [
      { input: "5 5 5", output: "Equilateral Triangle" },
      { input: "5 5 3", output: "Isosceles Triangle" },
      { input: "3 4 5", output: "Scalene Triangle" },
      { input: "1 1 3", output: "Invalid Triangle" },
      { input: "0 5 5", output: "Invalid Triangle" }
    ],
    constraints: ["0 <= sides <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "a,b,c = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt(), c=sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b,c; cin>>a>>b>>c;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b,c; scanf(\"%d%d%d\",&a,&b,&c);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a,b,c] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]), c=int.Parse(input[2]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a,b,c = map(int, input().split())\nif a<=0 or b<=0 or c<=0 or a+b<=c or b+c<=a or a+c<=b:\n    print('Invalid Triangle')\nelif a==b==c:\n    print('Equilateral Triangle')\nelif a==b or b==c or a==c:\n    print('Isosceles Triangle')\nelse:\n    print('Scalene Triangle')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt(), c=sc.nextInt();\n        if(a<=0 || b<=0 || c<=0 || a+b<=c || b+c<=a || a+c<=b)\n            System.out.println(\"Invalid Triangle\");\n        else if(a==b && b==c)\n            System.out.println(\"Equilateral Triangle\");\n        else if(a==b || b==c || a==c)\n            System.out.println(\"Isosceles Triangle\");\n        else\n            System.out.println(\"Scalene Triangle\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b,c; cin>>a>>b>>c;\n    if(a<=0 || b<=0 || c<=0 || a+b<=c || b+c<=a || a+c<=b)\n        cout<<\"Invalid Triangle\";\n    else if(a==b && b==c)\n        cout<<\"Equilateral Triangle\";\n    else if(a==b || b==c || a==c)\n        cout<<\"Isosceles Triangle\";\n    else\n        cout<<\"Scalene Triangle\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b,c; scanf(\"%d%d%d\",&a,&b,&c);\n    if(a<=0 || b<=0 || c<=0 || a+b<=c || b+c<=a || a+c<=b)\n        printf(\"Invalid Triangle\");\n    else if(a==b && b==c)\n        printf(\"Equilateral Triangle\");\n    else if(a==b || b==c || a==c)\n        printf(\"Isosceles Triangle\");\n    else\n        printf(\"Scalene Triangle\");\n    return 0;\n}",
      javascript: "const [a,b,c]=require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nif(a<=0 || b<=0 || c<=0 || a+b<=c || b+c<=a || a+c<=b)\n    console.log('Invalid Triangle');\nelse if(a==b && b==c)\n    console.log('Equilateral Triangle');\nelse if(a==b || b==c || a==c)\n    console.log('Isosceles Triangle');\nelse\n    console.log('Scalene Triangle');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]), b=int.Parse(input[1]), c=int.Parse(input[2]);\n        if(a<=0 || b<=0 || c<=0 || a+b<=c || b+c<=a || a+c<=b)\n            Console.WriteLine(\"Invalid Triangle\");\n        else if(a==b && b==c)\n            Console.WriteLine(\"Equilateral Triangle\");\n        else if(a==b || b==c || a==c)\n            Console.WriteLine(\"Isosceles Triangle\");\n        else\n            Console.WriteLine(\"Scalene Triangle\");\n    }\n}"
    },
    algorithmSteps: [
      "Read three sides a, b, c",
      "Check validity: all sides > 0 and triangle inequality",
      "If invalid → print 'Invalid Triangle'",
      "Else if all sides equal → 'Equilateral Triangle'",
      "Else if any two sides equal → 'Isosceles Triangle'",
      "Else → 'Scalene Triangle'"
    ],
    mathSolution: "Triangle inequality + side comparisons",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "First check triangle inequality, then check equality conditions"
  },
  {
    id: 10,
    title: "Calculate Electricity Bill",
    difficulty: "medium",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["slab-rate", "calculation", "nested-if"],
    desc: "Calculate electricity bill based on units consumed. Slab rates: First 100 units: ₹5/unit, Next 100 units: ₹7/unit, Above 200 units: ₹10/unit. Print total bill amount.",
    examples: [
      { input: "units = 80", output: "Bill: ₹400", explanation: "80 × 5 = 400" },
      { input: "units = 150", output: "Bill: ₹850", explanation: "100×5 + 50×7 = 500 + 350 = 850" },
      { input: "units = 250", output: "Bill: ₹1850", explanation: "100×5 + 100×7 + 50×10 = 500 + 700 + 500 = 1700" }
    ],
    testCases: [
      { input: "80", output: "Bill: ₹400" },
      { input: "150", output: "Bill: ₹850" },
      { input: "250", output: "Bill: ₹1700" },
      { input: "0", output: "Bill: ₹0" }
    ],
    constraints: ["0 <= units <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "units = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int units = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int units; cin >> units;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int units; scanf(\"%d\",&units);\n    // Write your code here\n    return 0;\n}",
      javascript: "const units = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int units = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "units = int(input())\nif units <= 100:\n    bill = units * 5\nelif units <= 200:\n    bill = 100 * 5 + (units - 100) * 7\nelse:\n    bill = 100 * 5 + 100 * 7 + (units - 200) * 10\nprint(f'Bill: ₹{bill}')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int units=sc.nextInt();\n        int bill;\n        if(units<=100) bill=units*5;\n        else if(units<=200) bill=100*5+(units-100)*7;\n        else bill=100*5+100*7+(units-200)*10;\n        System.out.println(\"Bill: ₹\"+bill);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int units; cin>>units;\n    int bill;\n    if(units<=100) bill=units*5;\n    else if(units<=200) bill=100*5+(units-100)*7;\n    else bill=100*5+100*7+(units-200)*10;\n    cout<<\"Bill: ₹\"<<bill;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int units,bill; scanf(\"%d\",&units);\n    if(units<=100) bill=units*5;\n    else if(units<=200) bill=100*5+(units-100)*7;\n    else bill=100*5+100*7+(units-200)*10;\n    printf(\"Bill: ₹%d\",bill);\n    return 0;\n}",
      javascript: "const units=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet bill;\nif(units<=100) bill=units*5;\nelse if(units<=200) bill=100*5+(units-100)*7;\nelse bill=100*5+100*7+(units-200)*10;\nconsole.log(`Bill: ₹${bill}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int units=int.Parse(Console.ReadLine());\n        int bill;\n        if(units<=100) bill=units*5;\n        else if(units<=200) bill=100*5+(units-100)*7;\n        else bill=100*5+100*7+(units-200)*10;\n        Console.WriteLine($\"Bill: ₹{bill}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read units consumed",
      "If units ≤ 100: bill = units × 5",
      "Else if units ≤ 200: bill = 500 + (units-100) × 7",
      "Else: bill = 500 + 700 + (units-200) × 10",
      "Print total bill"
    ],
    mathSolution: "Slab-based pricing calculation",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use if-else if ladder for different slabs"
  },
  {
    id: 11,
    title: "Find the Quadrant of a Point",
    difficulty: "hard",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["quadrant", "coordinate-geometry", "nested-if"],
    desc: "Given coordinates (x, y), determine whether the point lies in Quadrant I, II, III, IV, on X-axis, on Y-axis, or at Origin.",
    examples: [
      { input: "x=5, y=3", output: "Quadrant I", explanation: "x>0, y>0" },
      { input: "x=-4, y=2", output: "Quadrant II", explanation: "x<0, y>0" },
      { input: "x=-3, y=-5", output: "Quadrant III", explanation: "x<0, y<0" },
      { input: "x=6, y=-2", output: "Quadrant IV", explanation: "x>0, y<0" },
      { input: "x=0, y=4", output: "On Y-axis", explanation: "x=0, y≠0" },
      { input: "x=5, y=0", output: "On X-axis", explanation: "y=0, x≠0" },
      { input: "x=0, y=0", output: "Origin", explanation: "Both zero" }
    ],
    testCases: [
      { input: "5 3", output: "Quadrant I" },
      { input: "-4 2", output: "Quadrant II" },
      { input: "-3 -5", output: "Quadrant III" },
      { input: "6 -2", output: "Quadrant IV" },
      { input: "0 4", output: "On Y-axis" },
      { input: "5 0", output: "On X-axis" },
      { input: "0 0", output: "Origin" }
    ],
    constraints: ["-10^6 <= x, y <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "x,y = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x=sc.nextInt(), y=sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int x,y; cin>>x>>y;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int x,y; scanf(\"%d%d\",&x,&y);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [x,y] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int x=int.Parse(input[0]), y=int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "x,y = map(int, input().split())\nif x==0 and y==0:\n    print('Origin')\nelif x==0:\n    print('On Y-axis')\nelif y==0:\n    print('On X-axis')\nelif x>0 and y>0:\n    print('Quadrant I')\nelif x<0 and y>0:\n    print('Quadrant II')\nelif x<0 and y<0:\n    print('Quadrant III')\nelse:\n    print('Quadrant IV')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int x=sc.nextInt(), y=sc.nextInt();\n        if(x==0 && y==0) System.out.println(\"Origin\");\n        else if(x==0) System.out.println(\"On Y-axis\");\n        else if(y==0) System.out.println(\"On X-axis\");\n        else if(x>0 && y>0) System.out.println(\"Quadrant I\");\n        else if(x<0 && y>0) System.out.println(\"Quadrant II\");\n        else if(x<0 && y<0) System.out.println(\"Quadrant III\");\n        else System.out.println(\"Quadrant IV\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int x,y; cin>>x>>y;\n    if(x==0 && y==0) cout<<\"Origin\";\n    else if(x==0) cout<<\"On Y-axis\";\n    else if(y==0) cout<<\"On X-axis\";\n    else if(x>0 && y>0) cout<<\"Quadrant I\";\n    else if(x<0 && y>0) cout<<\"Quadrant II\";\n    else if(x<0 && y<0) cout<<\"Quadrant III\";\n    else cout<<\"Quadrant IV\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int x,y; scanf(\"%d%d\",&x,&y);\n    if(x==0 && y==0) printf(\"Origin\");\n    else if(x==0) printf(\"On Y-axis\");\n    else if(y==0) printf(\"On X-axis\");\n    else if(x>0 && y>0) printf(\"Quadrant I\");\n    else if(x<0 && y>0) printf(\"Quadrant II\");\n    else if(x<0 && y<0) printf(\"Quadrant III\");\n    else printf(\"Quadrant IV\");\n    return 0;\n}",
      javascript: "const [x,y]=require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nif(x==0 && y==0) console.log('Origin');\nelse if(x==0) console.log('On Y-axis');\nelse if(y==0) console.log('On X-axis');\nelse if(x>0 && y>0) console.log('Quadrant I');\nelse if(x<0 && y>0) console.log('Quadrant II');\nelse if(x<0 && y<0) console.log('Quadrant III');\nelse console.log('Quadrant IV');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int x=int.Parse(input[0]), y=int.Parse(input[1]);\n        if(x==0 && y==0) Console.WriteLine(\"Origin\");\n        else if(x==0) Console.WriteLine(\"On Y-axis\");\n        else if(y==0) Console.WriteLine(\"On X-axis\");\n        else if(x>0 && y>0) Console.WriteLine(\"Quadrant I\");\n        else if(x<0 && y>0) Console.WriteLine(\"Quadrant II\");\n        else if(x<0 && y<0) Console.WriteLine(\"Quadrant III\");\n        else Console.WriteLine(\"Quadrant IV\");\n    }\n}"
    },
    algorithmSteps: [
      "Read coordinates x and y",
      "If both zero → Origin",
      "Else if x=0 → On Y-axis",
      "Else if y=0 → On X-axis",
      "Else if x>0 and y>0 → Quadrant I",
      "Else if x<0 and y>0 → Quadrant II",
      "Else if x<0 and y<0 → Quadrant III",
      "Else → Quadrant IV"
    ],
    mathSolution: "Based on signs of x and y coordinates",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Check zero conditions first, then signs"
  },
  {
    id: 12,
    title: "Movie Ticket Price Calculator",
    difficulty: "medium",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["ticket-pricing", "nested-if", "real-life"],
    desc: "Calculate movie ticket price based on age and day type. Rules: Children (age < 12): ₹100, Adults (12-59): ₹200, Seniors (age ≥ 60): ₹150. Weekend (Saturday/Sunday): extra ₹50. Print final ticket price.",
    examples: [
      { input: "age=8, day=weekday", output: "Ticket Price: ₹100", explanation: "Child price" },
      { input: "age=25, day=weekend", output: "Ticket Price: ₹250", explanation: "Adult ₹200 + weekend ₹50" },
      { input: "age=65, day=weekday", output: "Ticket Price: ₹150", explanation: "Senior price" },
      { input: "age=10, day=weekend", output: "Ticket Price: ₹150", explanation: "Child ₹100 + weekend ₹50" }
    ],
    testCases: [
      { input: "8\nweekday", output: "Ticket Price: ₹100" },
      { input: "25\nweekend", output: "Ticket Price: ₹250" },
      { input: "65\nweekday", output: "Ticket Price: ₹150" },
      { input: "10\nweekend", output: "Ticket Price: ₹150" },
      { input: "30\nweekday", output: "Ticket Price: ₹200" }
    ],
    constraints: ["0 <= age <= 120", "day is either 'weekday' or 'weekend'"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "age = int(input())\nday = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int age = sc.nextInt();\n        String day = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int age; string day;\n    cin >> age >> day;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    int age; char day[10];\n    scanf(\"%d %s\",&age,day);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst age = parseInt(input[0]);\nconst day = input[1];\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int age = int.Parse(Console.ReadLine());\n        string day = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "age = int(input())\nday = input()\nif age < 12:\n    price = 100\nelif age < 60:\n    price = 200\nelse:\n    price = 150\nif day == 'weekend':\n    price += 50\nprint(f'Ticket Price: ₹{price}')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int age=sc.nextInt();\n        String day=sc.next();\n        int price;\n        if(age<12) price=100;\n        else if(age<60) price=200;\n        else price=150;\n        if(day.equals(\"weekend\")) price+=50;\n        System.out.println(\"Ticket Price: ₹\"+price);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int age; string day;\n    cin>>age>>day;\n    int price;\n    if(age<12) price=100;\n    else if(age<60) price=200;\n    else price=150;\n    if(day==\"weekend\") price+=50;\n    cout<<\"Ticket Price: ₹\"<<price;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    int age; char day[10];\n    scanf(\"%d %s\",&age,day);\n    int price;\n    if(age<12) price=100;\n    else if(age<60) price=200;\n    else price=150;\n    if(strcmp(day,\"weekend\")==0) price+=50;\n    printf(\"Ticket Price: ₹%d\",price);\n    return 0;\n}",
      javascript: "const input=require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst age=parseInt(input[0]);\nconst day=input[1];\nlet price;\nif(age<12) price=100;\nelse if(age<60) price=200;\nelse price=150;\nif(day==='weekend') price+=50;\nconsole.log(`Ticket Price: ₹${price}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int age=int.Parse(Console.ReadLine());\n        string day=Console.ReadLine();\n        int price;\n        if(age<12) price=100;\n        else if(age<60) price=200;\n        else price=150;\n        if(day==\"weekend\") price+=50;\n        Console.WriteLine($\"Ticket Price: ₹{price}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read age and day type",
      "Determine base price based on age group",
      "If day is weekend, add ₹50 surcharge",
      "Print final ticket price"
    ],
    mathSolution: "Age-based pricing + weekend surcharge",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use if-else for age groups, then add weekend surcharge"
  },
  {
    id: 13,
    title: "Rock, Paper, Scissors Winner",
    difficulty: "hard",
    topic: "conditions",
    subtopic: "conditions",
    category: "Problem Solving",
    tags: ["game", "nested-if", "logic"],
    desc: "Given choices of two players (Rock, Paper, Scissors), determine the winner. Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Print 'Player 1 wins', 'Player 2 wins', or 'Draw'.",
    examples: [
      { input: "Rock Scissors", output: "Player 1 wins", explanation: "Rock beats Scissors" },
      { input: "Paper Rock", output: "Player 1 wins", explanation: "Paper beats Rock" },
      { input: "Scissors Rock", output: "Player 2 wins", explanation: "Rock beats Scissors" },
      { input: "Rock Rock", output: "Draw", explanation: "Same choice" }
    ],
    testCases: [
      { input: "Rock Scissors", output: "Player 1 wins" },
      { input: "Paper Rock", output: "Player 1 wins" },
      { input: "Scissors Rock", output: "Player 2 wins" },
      { input: "Rock Rock", output: "Draw" },
      { input: "Scissors Paper", output: "Player 1 wins" }
    ],
    constraints: ["Input choices: 'Rock', 'Paper', or 'Scissors' (case-sensitive)"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "p1, p2 = input().split()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String p1 = sc.next();\n        String p2 = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string p1, p2; cin>>p1>>p2;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char p1[10], p2[10];\n    scanf(\"%s %s\",p1,p2);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [p1,p2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        string p1=input[0], p2=input[1];\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "p1, p2 = input().split()\nif p1 == p2:\n    print('Draw')\nelif (p1 == 'Rock' and p2 == 'Scissors') or \\\n     (p1 == 'Scissors' and p2 == 'Paper') or \\\n     (p1 == 'Paper' and p2 == 'Rock'):\n    print('Player 1 wins')\nelse:\n    print('Player 2 wins')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String p1=sc.next(), p2=sc.next();\n        if(p1.equals(p2)) System.out.println(\"Draw\");\n        else if((p1.equals(\"Rock\") && p2.equals(\"Scissors\")) ||\n                (p1.equals(\"Scissors\") && p2.equals(\"Paper\")) ||\n                (p1.equals(\"Paper\") && p2.equals(\"Rock\")))\n            System.out.println(\"Player 1 wins\");\n        else\n            System.out.println(\"Player 2 wins\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string p1,p2; cin>>p1>>p2;\n    if(p1==p2) cout<<\"Draw\";\n    else if((p1==\"Rock\" && p2==\"Scissors\") ||\n            (p1==\"Scissors\" && p2==\"Paper\") ||\n            (p1==\"Paper\" && p2==\"Rock\"))\n        cout<<\"Player 1 wins\";\n    else\n        cout<<\"Player 2 wins\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char p1[10],p2[10]; scanf(\"%s %s\",p1,p2);\n    if(strcmp(p1,p2)==0) printf(\"Draw\");\n    else if((strcmp(p1,\"Rock\")==0 && strcmp(p2,\"Scissors\")==0) ||\n            (strcmp(p1,\"Scissors\")==0 && strcmp(p2,\"Paper\")==0) ||\n            (strcmp(p1,\"Paper\")==0 && strcmp(p2,\"Rock\")==0))\n        printf(\"Player 1 wins\");\n    else\n        printf(\"Player 2 wins\");\n    return 0;\n}",
      javascript: "const [p1,p2]=require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');\nif(p1===p2) console.log('Draw');\nelse if((p1==='Rock' && p2==='Scissors') ||\n        (p1==='Scissors' && p2==='Paper') ||\n        (p1==='Paper' && p2==='Rock'))\n    console.log('Player 1 wins');\nelse\n    console.log('Player 2 wins');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        string p1=input[0], p2=input[1];\n        if(p1==p2) Console.WriteLine(\"Draw\");\n        else if((p1==\"Rock\" && p2==\"Scissors\") ||\n                (p1==\"Scissors\" && p2==\"Paper\") ||\n                (p1==\"Paper\" && p2==\"Rock\"))\n            Console.WriteLine(\"Player 1 wins\");\n        else\n            Console.WriteLine(\"Player 2 wins\");\n    }\n}"
    },
    algorithmSteps: [
      "Read choices of both players",
      "If both choices are same → Draw",
      "Check winning conditions for Player 1",
      "If Player 1 wins → 'Player 1 wins'",
      "Else → 'Player 2 wins'"
    ],
    mathSolution: "Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "List all winning conditions for Player 1, else Player 2 wins"
  }
];

// Export
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...conditionQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", conditionQuestions.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = conditionQuestions;
}