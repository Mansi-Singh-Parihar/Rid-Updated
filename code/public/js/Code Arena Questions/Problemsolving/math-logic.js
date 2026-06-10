// ============================================================
// MATH LOGIC PROBLEMS
// Questions: 18, 24, 31, 47, 48, 61, 63 from PDF
// ============================================================

const mathLogicQuestions = [
  // 1. Factorial of a Number (PDF Q18)
  {
    id: 1,
    title: "Find Factorial of a Number",
    difficulty: "easy",
    topic: "math-logic",
    subtopic: "factorial",
    category: "Problem Solving",
    tags: ["factorial", "loop", "multiplication"],
    desc: "Given an integer <code>n</code>, calculate and print its factorial (n!). Factorial of n is product of all positive integers ≤ n.",
    examples: [
      { input: "n = 5", output: "120", explanation: "5! = 5×4×3×2×1 = 120" },
      { input: "n = 0", output: "1", explanation: "0! = 1" },
      { input: "n = 3", output: "6", explanation: "3! = 3×2×1 = 6" }
    ],
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" },
      { input: "3", output: "6" },
      { input: "10", output: "3628800" }
    ],
    constraints: ["0 <= n <= 20"],
    videoId: "x9EBC_KRWxc",
    videoStart: 362,
    videoEnd: 462,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nfact = 1\nfor i in range(2, n+1):\n    fact *= i\nprint(fact)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long fact = 1;\n        for(int i = 2; i <= n; i++) {\n            fact *= i;\n        }\n        System.out.println(fact);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    long long fact = 1;\n    for(int i = 2; i <= n; i++) {\n        fact *= i;\n    }\n    cout << fact;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    long long fact = 1;\n    for(int i = 2; i <= n; i++) {\n        fact *= i;\n    }\n    printf(\"%lld\", fact);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet fact = 1;\nfor(let i = 2; i <= n; i++) {\n    fact *= i;\n}\nconsole.log(fact);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        long fact = 1;\n        for(int i = 2; i <= n; i++) {\n            fact *= i;\n        }\n        Console.WriteLine(fact);\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Initialize fact = 1",
      "If n == 0, factorial is 1",
      "Loop i from 2 to n: fact = fact * i",
      "Print fact"
    ],
    mathSolution: "n! = n × (n-1) × ... × 2 × 1",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use long/long long data type to avoid overflow."
  },

  // 2. Factorial of a Given Number (PDF Q24 - duplicate but kept as per list)
  {
    id: 2,
    title: "Factorial of a Given Number",
    difficulty: "easy",
    topic: "math-logic",
    subtopic: "factorial",
    category: "Problem Solving",
    tags: ["factorial", "loop", "multiplication"],
    desc: "Given an integer <code>n</code>, compute its factorial (n!).",
    examples: [
      { input: "n = 5", output: "120", explanation: "5! = 5×4×3×2×1 = 120" },
      { input: "n = 0", output: "1", explanation: "0! = 1" },
      { input: "n = 6", output: "720", explanation: "6! = 720" }
    ],
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" },
      { input: "6", output: "720" },
      { input: "4", output: "24" }
    ],
    constraints: ["0 <= n <= 20"],
    videoId: "x9EBC_KRWxc",
    videoStart: 362,
    videoEnd: 462,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nfact = 1\nfor i in range(2, n+1):\n    fact *= i\nprint(fact)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long fact = 1;\n        for(int i = 2; i <= n; i++) fact *= i;\n        System.out.println(fact);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    long long fact = 1;\n    for(int i = 2; i <= n; i++) fact *= i;\n    cout << fact;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    long long fact = 1;\n    for(int i = 2; i <= n; i++) fact *= i;\n    printf(\"%lld\", fact);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet fact = 1;\nfor(let i = 2; i <= n; i++) fact *= i;\nconsole.log(fact);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        long fact = 1;\n        for(int i = 2; i <= n; i++) fact *= i;\n        Console.WriteLine(fact);\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "Initialize fact = 1",
      "Loop i from 2 to n: fact *= i",
      "Print fact"
    ],
    mathSolution: "n! = n × (n-1) × ... × 1",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Start fact = 1 and multiply iteratively."
  },

  // 3. Generate Fibonacci Series (PDF Q31)
  {
    id: 3,
    title: "Generate Fibonacci Series",
    difficulty: "medium",
    topic: "math-logic",
    subtopic: "fibonacci",
    category: "Problem Solving",
    tags: ["fibonacci", "series", "loop"],
    desc: "Given an integer <code>n</code>, print the first <code>n</code> terms of the Fibonacci series (starting from 0,1).",
    examples: [
      { input: "n = 5", output: "0 1 1 2 3", explanation: "First 5 Fibonacci numbers." },
      { input: "n = 7", output: "0 1 1 2 3 5 8", explanation: "Sequence: 0,1,1,2,3,5,8." },
      { input: "n = 1", output: "0", explanation: "Only first term." }
    ],
    testCases: [
      { input: "5", output: "0 1 1 2 3" },
      { input: "7", output: "0 1 1 2 3 5 8" },
      { input: "1", output: "0" },
      { input: "2", output: "0 1" }
    ],
    constraints: ["1 <= n <= 40"],
    videoId: "x8Lawok8E5w",
    videoStart: 507,
    videoEnd: 685,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\na, b = 0, 1\nres = []\nfor i in range(n):\n    res.append(a)\n    a, b = b, a + b\nprint(' '.join(map(str, res)))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int a = 0, b = 1;\n        for(int i = 0; i < n; i++) {\n            System.out.print(a + (i == n-1 ? \"\" : \" \"));\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int a = 0, b = 1;\n    for(int i = 0; i < n; i++) {\n        cout << a;\n        if(i != n-1) cout << \" \";\n        int next = a + b;\n        a = b;\n        b = next;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int a = 0, b = 1;\n    for(int i = 0; i < n; i++) {\n        printf(\"%d\", a);\n        if(i != n-1) printf(\" \");\n        int next = a + b;\n        a = b;\n        b = next;\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet a = 0, b = 1, res = [];\nfor(let i = 0; i < n; i++) {\n    res.push(a);\n    [a, b] = [b, a + b];\n}\nconsole.log(res.join(' '));",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int a = 0, b = 1;\n        var list = new List<int>();\n        for(int i = 0; i < n; i++) {\n            list.Add(a);\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        Console.WriteLine(string.Join(\" \", list));\n    }\n}"
    },
    algorithmSteps: [
      "Initialize a=0, b=1",
      "Loop n times:",
      "  - Print a (or store in list)",
      "  - Update: (a, b) = (b, a+b)",
      "Print all terms separated by space"
    ],
    mathSolution: "Each term is sum of previous two: F(n) = F(n-1) + F(n-2)",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use two variables to keep track of last two numbers."
  },

  // 4. Area of Triangle (PDF Q47)
  {
    id: 4,
    title: "Area of Triangle",
    difficulty: "easy",
    topic: "math-logic",
    subtopic: "area",
    category: "Problem Solving",
    tags: ["area", "geometry", "basic"],
    desc: "Given base and height of a triangle, calculate its area using formula: (base × height) / 2.",
    examples: [
      { input: "base = 10, height = 5", output: "25.0", explanation: "(10×5)/2 = 25" },
      { input: "base = 3, height = 4", output: "6.0", explanation: "(3×4)/2 = 6" }
    ],
    testCases: [
      { input: "10\n5", output: "25.0" },
      { input: "3\n4", output: "6.0" },
      { input: "0\n5", output: "0.0" }
    ],
    constraints: ["0 <= base, height <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "base = float(input())\nheight = float(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double base = sc.nextDouble();\n        double height = sc.nextDouble();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    double base, height; cin >> base >> height;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    double base, height; scanf(\"%lf%lf\",&base,&height);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst base = parseFloat(input[0]);\nconst height = parseFloat(input[1]);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        double baseVal = double.Parse(Console.ReadLine());\n        double height = double.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "base = float(input())\nheight = float(input())\narea = 0.5 * base * height\nprint(area)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double base = sc.nextDouble();\n        double height = sc.nextDouble();\n        double area = 0.5 * base * height;\n        System.out.println(area);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    double base, height; cin >> base >> height;\n    cout << 0.5 * base * height;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    double base, height; scanf(\"%lf%lf\",&base,&height);\n    printf(\"%lf\", 0.5 * base * height);\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst base = parseFloat(input[0]);\nconst height = parseFloat(input[1]);\nconsole.log(0.5 * base * height);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        double baseVal = double.Parse(Console.ReadLine());\n        double height = double.Parse(Console.ReadLine());\n        Console.WriteLine(0.5 * baseVal * height);\n    }\n}"
    },
    algorithmSteps: [
      "Read base and height as floating point numbers",
      "Compute area = 0.5 × base × height",
      "Print area"
    ],
    mathSolution: "Area = 1/2 × base × height",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use float/double for decimal results."
  },

  // 5. Area of Square (PDF Q48)
  {
    id: 5,
    title: "Area of Square",
    difficulty: "easy",
    topic: "math-logic",
    subtopic: "area",
    category: "Problem Solving",
    tags: ["area", "geometry", "basic"],
    desc: "Given side length of a square, calculate its area: side × side.",
    examples: [
      { input: "side = 4", output: "16.0", explanation: "4×4=16" },
      { input: "side = 2.5", output: "6.25", explanation: "2.5×2.5=6.25" }
    ],
    testCases: [
      { input: "4", output: "16.0" },
      { input: "2.5", output: "6.25" },
      { input: "0", output: "0.0" }
    ],
    constraints: ["0 <= side <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "side = float(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double side = sc.nextDouble();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    double side; cin >> side;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    double side; scanf(\"%lf\",&side);\n    // Write your code here\n    return 0;\n}",
      javascript: "const side = parseFloat(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        double side = double.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "side = float(input())\narea = side * side\nprint(area)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double side = sc.nextDouble();\n        System.out.println(side * side);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    double side; cin >> side;\n    cout << side * side;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    double side; scanf(\"%lf\",&side);\n    printf(\"%lf\", side * side);\n    return 0;\n}",
      javascript: "const side = parseFloat(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconsole.log(side * side);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        double side = double.Parse(Console.ReadLine());\n        Console.WriteLine(side * side);\n    }\n}"
    },
    algorithmSteps: [
      "Read side as float",
      "Compute area = side²",
      "Print area"
    ],
    mathSolution: "Area = side²",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Multiply side by itself."
  },

  // 6. Check Power of Two (PDF Q61)
  {
    id: 6,
    title: "Check Power of Two",
    difficulty: "medium",
    topic: "math-logic",
    subtopic: "power-of-two",
    category: "Problem Solving",
    tags: ["bitwise", "power", "math"],
    desc: "Given an integer <code>n</code>, check if it is a power of two (i.e., n = 2^k for some k ≥ 0). Print 'Yes' if true, otherwise 'No'.",
    examples: [
      { input: "n = 16", output: "Yes", explanation: "16 = 2^4" },
      { input: "n = 18", output: "No", explanation: "18 is not a power of two" },
      { input: "n = 1", output: "Yes", explanation: "1 = 2^0" }
    ],
    testCases: [
      { input: "16", output: "Yes" },
      { input: "18", output: "No" },
      { input: "1", output: "Yes" },
      { input: "32", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nif n > 0 and (n & (n-1)) == 0:\n    print(\"Yes\")\nelse:\n    print(\"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n > 0 && (n & (n-1)) == 0)\n            System.out.println(\"Yes\");\n        else\n            System.out.println(\"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n > 0 && (n & (n-1)) == 0)\n        cout << \"Yes\";\n    else\n        cout << \"No\";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n > 0 && (n & (n-1)) == 0)\n        printf(\"Yes\");\n    else\n        printf(\"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n > 0 && (n & (n-1)) === 0)\n    console.log(\"Yes\");\nelse\n    console.log(\"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n > 0 && (n & (n-1)) == 0)\n            Console.WriteLine(\"Yes\");\n        else\n            Console.WriteLine(\"No\");\n    }\n}"
    },
    algorithmSteps: [
      "If n <= 0 → No",
      "Check if (n & (n-1)) == 0",
      "If true → Yes, else No"
    ],
    mathSolution: "Powers of two have exactly one bit set; n & (n-1) clears that bit, result 0.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use bitwise AND: n & (n-1) == 0 for n > 0"
  },

  // 7. Sum of First N Natural Numbers (PDF Q63)
  {
    id: 7,
    title: "Sum of First N Natural Numbers",
    difficulty: "easy",
    topic: "math-logic",
    subtopic: "sum",
    category: "Problem Solving",
    tags: ["sum", "math", "formula"],
    desc: "Given an integer <code>n</code>, find the sum of the first <code>n</code> natural numbers: 1 + 2 + ... + n.",
    examples: [
      { input: "n = 10", output: "55", explanation: "1+2+...+10 = 55" },
      { input: "n = 5", output: "15", explanation: "1+2+3+4+5 = 15" },
      { input: "n = 1", output: "1", explanation: "1" }
    ],
    testCases: [
      { input: "10", output: "55" },
      { input: "5", output: "15" },
      { input: "1", output: "1" },
      { input: "100", output: "5050" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nsum_n = n * (n + 1) // 2\nprint(sum_n)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long sum = (long)n * (n + 1) / 2;\n        System.out.println(sum);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    long long sum = (long long)n * (n + 1) / 2;\n    cout << sum;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    long long sum = (long long)n * (n + 1) / 2;\n    printf(\"%lld\", sum);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst sum = n * (n + 1) / 2;\nconsole.log(sum);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        long sum = (long)n * (n + 1) / 2;\n        Console.WriteLine(sum);\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Compute sum using formula n*(n+1)/2",
      "Print sum"
    ],
    mathSolution: "Sum of first n natural numbers = n(n+1)/2",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use formula instead of loop for efficiency."
  }, {
    id: 8,
    title: "Count Trailing Zeros in Factorial",
    difficulty: "medium",
    topic: "math-logic",
    subtopic: "factorial",
    category: "Problem Solving",
    tags: ["factorial", "trailing-zeros", "math", "medium"],
    desc: "Given an integer <code>n</code>, count the number of trailing zeros in n! (factorial of n). Trailing zeros are the number of zeros at the end of the factorial value.",
    examples: [
      { input: "n = 5", output: "1", explanation: "5! = 120 → 1 trailing zero" },
      { input: "n = 10", output: "2", explanation: "10! = 3628800 → 2 trailing zeros" },
      { input: "n = 25", output: "6", explanation: "25! has 6 trailing zeros" },
      { input: "n = 100", output: "24", explanation: "100! has 24 trailing zeros" }
    ],
    testCases: [
      { input: "5", output: "1" },
      { input: "10", output: "2" },
      { input: "25", output: "6" },
      { input: "100", output: "24" },
      { input: "0", output: "0" }
    ],
    constraints: ["0 <= n <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\ncount = 0\ni = 5\nwhile n // i > 0:\n    count += n // i\n    i *= 5\nprint(count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int count = 0;\n        for(int i = 5; n / i >= 1; i *= 5) {\n            count += n / i;\n        }\n        System.out.println(count);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int count = 0;\n    for(int i = 5; n / i >= 1; i *= 5) {\n        count += n / i;\n    }\n    cout << count;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int count = 0;\n    for(int i = 5; n / i >= 1; i *= 5) {\n        count += n / i;\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet count = 0;\nfor(let i = 5; Math.floor(n / i) >= 1; i *= 5) {\n    count += Math.floor(n / i);\n}\nconsole.log(count);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int count = 0;\n        for(int i = 5; n / i >= 1; i *= 5) {\n            count += n / i;\n        }\n        Console.WriteLine(count);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize count = 0, i = 5",
      "While n / i > 0:",
      "  - Add n / i to count",
      "  - Multiply i by 5",
      "Print count"
    ],
    mathSolution: "Trailing zeros count = sum of floor(n/5) + floor(n/25) + floor(n/125) + ...",
    timeComplexity: "O(log₅ n)",
    spaceComplexity: "O(1)",
    hint: "Count number of factors of 5 in n! because each pair of 2×5 gives a zero."
  },
  {
    id: 9,
    title: "Find the Nth Fibonacci Number",
    difficulty: "hard",
    topic: "math-logic",
    subtopic: "fibonacci",
    category: "Problem Solving",
    tags: ["fibonacci", "dp", "series", "medium"],
    desc: "Given an integer <code>n</code>, find the nth Fibonacci number. Fibonacci series: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n≥2.",
    examples: [
      { input: "n = 5", output: "5", explanation: "Fibonacci: 0,1,1,2,3,5 → 5th term is 5" },
      { input: "n = 7", output: "13", explanation: "0,1,1,2,3,5,8,13 → 7th term is 13" },
      { input: "n = 0", output: "0", explanation: "F(0) = 0" },
      { input: "n = 10", output: "55", explanation: "10th Fibonacci number is 55" }
    ],
    testCases: [
      { input: "5", output: "5" },
      { input: "7", output: "13" },
      { input: "0", output: "0" },
      { input: "1", output: "1" },
      { input: "10", output: "55" }
    ],
    constraints: ["0 <= n <= 50"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nif n == 0:\n    print(0)\nelif n == 1:\n    print(1)\nelse:\n    a, b = 0, 1\n    for i in range(2, n + 1):\n        a, b = b, a + b\n    print(b)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n == 0) System.out.println(0);\n        else if(n == 1) System.out.println(1);\n        else {\n            long a = 0, b = 1;\n            for(int i = 2; i <= n; i++) {\n                long next = a + b;\n                a = b;\n                b = next;\n            }\n            System.out.println(b);\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n == 0) cout << 0;\n    else if(n == 1) cout << 1;\n    else {\n        long long a = 0, b = 1;\n        for(int i = 2; i <= n; i++) {\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n        cout << b;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n == 0) printf(\"0\");\n    else if(n == 1) printf(\"1\");\n    else {\n        long long a = 0, b = 1;\n        for(int i = 2; i <= n; i++) {\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n        printf(\"%lld\", b);\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n === 0) console.log(0);\nelse if(n === 1) console.log(1);\nelse {\n    let a = 0, b = 1;\n    for(let i = 2; i <= n; i++) {\n        let next = a + b;\n        a = b;\n        b = next;\n    }\n    console.log(b);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n == 0) Console.WriteLine(0);\n        else if(n == 1) Console.WriteLine(1);\n        else {\n            long a = 0, b = 1;\n            for(int i = 2; i <= n; i++) {\n                long next = a + b;\n                a = b;\n                b = next;\n            }\n            Console.WriteLine(b);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "If n == 0 → print 0",
      "If n == 1 → print 1",
      "Initialize a = 0, b = 1",
      "Loop i from 2 to n:",
      "  - next = a + b",
      "  - a = b",
      "  - b = next",
      "Print b"
    ],
    mathSolution: "F(n) = F(n-1) + F(n-2) with F(0)=0, F(1)=1",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use iterative approach with two variables instead of recursion"
  },
  {
    id: 10,
    title: "Check Whether a Number is an Armstrong Number",
    difficulty: "hard",
    topic: "math-logic",
    subtopic: "armstrong-number",
    category: "Problem Solving",
    tags: ["armstrong", "digits", "power", "medium"],
    desc: "Given an integer <code>n</code>, check if it is an Armstrong number. An Armstrong number (also called Narcissistic number) is a number that equals the sum of its own digits each raised to the power of the number of digits.",
    examples: [
      { input: "n = 153", output: "Yes", explanation: "1³ + 5³ + 3³ = 1 + 125 + 27 = 153" },
      { input: "n = 9474", output: "Yes", explanation: "9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474" },
      { input: "n = 123", output: "No", explanation: "1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123" },
      { input: "n = 1", output: "Yes", explanation: "1¹ = 1" },
      { input: "n = 1634", output: "Yes", explanation: "1⁴ + 6⁴ + 3⁴ + 4⁴ = 1 + 1296 + 81 + 256 = 1634" }
    ],
    testCases: [
      { input: "153", output: "Yes" },
      { input: "9474", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1", output: "Yes" },
      { input: "1634", output: "Yes" },
      { input: "8208", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\noriginal = n\ndigits = len(str(n))\nsum_power = 0\nwhile n > 0:\n    digit = n % 10\n    sum_power += digit ** digits\n    n //= 10\nif original == sum_power:\n    print('Yes')\nelse:\n    print('No')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        int digits = String.valueOf(n).length();\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += Math.pow(digit, digits);\n            n /= 10;\n        }\n        System.out.println(original == sum ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int original = n;\n    int digits = to_string(n).length();\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += pow(digit, digits);\n        n /= 10;\n    }\n    cout << (original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\n#include <string.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    int digits = 0, temp = n;\n    while(temp > 0) { digits++; temp /= 10; }\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += pow(digit, digits);\n        n /= 10;\n    }\n    printf(original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst original = n;\nconst digits = n.toString().length;\nlet sum = 0;\nlet num = n;\nwhile(num > 0) {\n    const digit = num % 10;\n    sum += Math.pow(digit, digits);\n    num = Math.floor(num / 10);\n}\nconsole.log(original === sum ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        int digits = n.ToString().Length;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += (int)Math.Pow(digit, digits);\n            n /= 10;\n        }\n        Console.WriteLine(original == sum ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Store original number",
      "Count number of digits",
      "Initialize sum = 0",
      "While n > 0:",
      "  - Extract last digit (n % 10)",
      "  - Raise digit to power of digits and add to sum",
      "  - Remove last digit (n //= 10)",
      "Compare original with sum",
      "Print 'Yes' if equal else 'No'"
    ],
    mathSolution: "Armstrong number: sum of (digit ^ digitCount) = original number",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "First count digits, then compute sum of powers"
  }
];

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...mathLogicQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", mathLogicQuestions.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = mathLogicQuestions;
}