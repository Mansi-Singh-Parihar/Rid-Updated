// ============================================================
// FACTOR & DIVISIBILITY PROBLEMS
// Questions: 19, 20, 25, 26, 55, 56, 59 from PDF
// ============================================================

const factorDivisibilityQuestions = [
  // 1. Find Factors of a Number (PDF Q19)
  {
    id: 1,
    title: "Find Factors of a Number",
    difficulty: "easy",
    topic: "factor-divisibility",
    subtopic: "factors",
    category: "Problem Solving",
    tags: ["factors", "loop", "basic"],
    desc: "Given an integer <code>n</code>, print all factors of <code>n</code> in ascending order separated by spaces.",
    examples: [
      { input: "n = 12", output: "1 2 3 4 6 12", explanation: "All numbers that divide 12 exactly." },
      { input: "n = 7", output: "1 7", explanation: "Prime numbers have only 1 and itself as factors." },
      { input: "n = 1", output: "1", explanation: "1 has only one factor." }
    ],
    testCases: [
      { input: "12", output: "1 2 3 4 6 12" },
      { input: "7", output: "1 7" },
      { input: "1", output: "1" },
      { input: "24", output: "1 2 3 4 6 8 12 24" }
    ],
    constraints: ["1 <= n <= 10^4"],
    videoId: "x9EBC_KRWxc",
    videoStart: 462,
    videoEnd: 510,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nfor i in range(1, n+1):\n    if n % i == 0:\n        print(i, end=' ')\nprint()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            if(n % i == 0) System.out.print(i + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) if(n % i == 0) cout << i << \" \";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) if(n % i == 0) printf(\"%d \", i);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet res = [];\nfor(let i = 1; i <= n; i++) if(n % i === 0) res.push(i);\nconsole.log(res.join(' '));",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        var res = new List<int>();\n        for(int i = 1; i <= n; i++) if(n % i == 0) res.Add(i);\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Loop i from 1 to n",
      "If n % i == 0, print i",
      "Continue loop"
    ],
    mathSolution: "A factor divides the number exactly without remainder.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use modulo operator (%) to check divisibility."
  },

  // 2. Find Sum, Product and Count of Factors (PDF Q20)
  {
    id: 2,
    title: "Sum, Product and Count of Factors",
    difficulty: "easy",
    topic: "factor-divisibility",
    subtopic: "factors",
    category: "Problem Solving",
    tags: ["factors", "sum", "product", "count"],
    desc: "Given an integer <code>n</code>, calculate the sum, product, and total count of all its factors.",
    examples: [
      { input: "n = 6", output: "Sum = 12\nProduct = 36\nCount = 4", explanation: "Factors of 6: 1,2,3,6 => Sum=12, Product=36, Count=4." },
      { input: "n = 10", output: "Sum = 18\nProduct = 100\nCount = 4", explanation: "Factors: 1,2,5,10 => Sum=18, Product=100, Count=4." }
    ],
    testCases: [
      { input: "6", output: "Sum = 12\nProduct = 36\nCount = 4" },
      { input: "10", output: "Sum = 18\nProduct = 100\nCount = 4" },
      { input: "12", output: "Sum = 28\nProduct = 1728\nCount = 6" },
      { input: "1", output: "Sum = 1\nProduct = 1\nCount = 1" }
    ],
    constraints: ["1 <= n <= 1000"],
    videoId: "x9EBC_KRWxc",
    videoStart: 541,
    videoEnd: 677,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\ns, p, c = 0, 1, 0\nfor i in range(1, n+1):\n    if n % i == 0:\n        s += i\n        p *= i\n        c += 1\nprint(f\"Sum = {s}\\nProduct = {p}\\nCount = {c}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int s = 0, p = 1, c = 0;\n        for(int i = 1; i <= n; i++) {\n            if(n % i == 0) {\n                s += i;\n                p *= i;\n                c++;\n            }\n        }\n        System.out.println(\"Sum = \" + s + \"\\nProduct = \" + p + \"\\nCount = \" + c);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n, s = 0, p = 1, c = 0; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        if(n % i == 0) {\n            s += i; p *= i; c++;\n        }\n    }\n    cout << \"Sum = \" << s << \"\\nProduct = \" << p << \"\\nCount = \" << c;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n, s = 0, p = 1, c = 0; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        if(n % i == 0) {\n            s += i; p *= i; c++;\n        }\n    }\n    printf(\"Sum = %d\\nProduct = %d\\nCount = %d\", s, p, c);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet s = 0, p = 1, c = 0;\nfor(let i = 1; i <= n; i++) {\n    if(n % i === 0) {\n        s += i; p *= i; c++;\n    }\n}\nconsole.log(`Sum = ${s}\\nProduct = ${p}\\nCount = ${c}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int s = 0, p = 1, c = 0;\n        for(int i = 1; i <= n; i++) {\n            if(n % i == 0) {\n                s += i; p *= i; c++;\n            }\n        }\n        Console.WriteLine($\"Sum = {s}\\nProduct = {p}\\nCount = {c}\");\n    }\n}"
    },
    algorithmSteps: [
      "Initialize sum=0, product=1, count=0",
      "Loop i from 1 to n",
      "If i divides n, add to sum, multiply to product, increment count",
      "Print results"
    ],
    mathSolution: "Sum = addition of all factors, Product = multiplication of all factors, Count = total number of factors.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Keep three separate variables for sum, product, and count."
  },

  // 3. Count Factors of a Number (PDF Q25)
  {
    id: 3,
    title: "Count Factors of a Number",
    difficulty: "medium",
    topic: "factor-divisibility",
    subtopic: "factors",
    category: "Problem Solving",
    tags: ["factors", "count", "basic"],
    desc: "Given an integer <code>n</code>, count how many factors it has.",
    examples: [
      { input: "n = 12", output: "6", explanation: "Factors: 1,2,3,4,6,12 => count=6." },
      { input: "n = 13", output: "2", explanation: "Prime numbers have exactly 2 factors." }
    ],
    testCases: [
      { input: "12", output: "6" },
      { input: "13", output: "2" },
      { input: "1", output: "1" },
      { input: "24", output: "8" }
    ],
    constraints: ["1 <= n <= 10^5"],
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
      python: "n = int(input())\ncount = 0\nfor i in range(1, n+1):\n    if n % i == 0:\n        count += 1\nprint(count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int count = 0;\n        for(int i = 1; i <= n; i++) if(n % i == 0) count++;\n        System.out.println(count);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n, count = 0; cin >> n;\n    for(int i = 1; i <= n; i++) if(n % i == 0) count++;\n    cout << count;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n, count = 0; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) if(n % i == 0) count++;\n    printf(\"%d\", count);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet count = 0;\nfor(let i = 1; i <= n; i++) if(n % i === 0) count++;\nconsole.log(count);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int count = 0;\n        for(int i = 1; i <= n; i++) if(n % i == 0) count++;\n        Console.WriteLine(count);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize count=0",
      "Loop i=1 to n",
      "If n%i==0, increment count",
      "Print count"
    ],
    mathSolution: "Count all numbers from 1 to n that divide n exactly.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use a counter variable."
  },

  // 4. Find All Factors of a Number (PDF Q26) - similar to Q1 but kept distinct per PDF
  {
    id: 4,
    title: "Print All Factors of a Number",
    difficulty: "easy",
    topic: "factor-divisibility",
    subtopic: "factors",
    category: "Problem Solving",
    tags: ["factors", "loop", "divisibility"],
    desc: "Given an integer <code>n</code>, print all its factors in increasing order separated by spaces.",
    examples: [
      { input: "n = 12", output: "1 2 3 4 6 12", explanation: "All divisors of 12." },
      { input: "n = 17", output: "1 17", explanation: "Prime number has only two factors." }
    ],
    testCases: [
      { input: "12", output: "1 2 3 4 6 12" },
      { input: "17", output: "1 17" },
      { input: "1", output: "1" }
    ],
    constraints: ["1 <= n <= 10^4"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    if n % i == 0:\n        print(i, end=' ')\nprint()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) if(n % i == 0) System.out.print(i + \" \");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) if(n % i == 0) cout << i << \" \";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) if(n % i == 0) printf(\"%d \", i);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet res = [];\nfor(let i = 1; i <= n; i++) if(n % i === 0) res.push(i);\nconsole.log(res.join(' '));",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        var list = new List<string>();\n        for(int i = 1; i <= n; i++) if(n % i == 0) list.Add(i.ToString());\n        Console.WriteLine(string.Join(\" \", list));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "Loop i=1 to n",
      "If n%i==0, print i"
    ],
    mathSolution: "A factor divides n without remainder.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Same as finding all divisors."
  },

  // 5. Find Prime Factors of a Number (PDF Q55)
  {
    id: 5,
    title: "Prime Factors of a Number",
    difficulty: "medium",
    topic: "factor-divisibility",
    subtopic: "prime-factors",
    category: "Problem Solving",
    tags: ["prime", "factors", "loop"],
    desc: "Given an integer <code>n</code>, print all its prime factors (each prime factor only once, in increasing order).",
    examples: [
      { input: "n = 60", output: "2 3 5", explanation: "60 = 2^2 * 3 * 5, prime factors are 2,3,5." },
      { input: "n = 13", output: "13", explanation: "Prime number itself is the only prime factor." }
    ],
    testCases: [
      { input: "60", output: "2 3 5" },
      { input: "13", output: "13" },
      { input: "12", output: "2 3" },
      { input: "100", output: "2 5" }
    ],
    constraints: ["2 <= n <= 10^5"],
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
      python: "n = int(input())\ni = 2\nwhile i * i <= n:\n    if n % i == 0:\n        print(i, end=' ')\n        while n % i == 0:\n            n //= i\n    i += 1\nif n > 1:\n    print(n)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 2; i * i <= n; i++) {\n            if(n % i == 0) {\n                System.out.print(i + \" \");\n                while(n % i == 0) n /= i;\n            }\n        }\n        if(n > 1) System.out.print(n);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 2; i * i <= n; i++) {\n        if(n % i == 0) {\n            cout << i << \" \";\n            while(n % i == 0) n /= i;\n        }\n    }\n    if(n > 1) cout << n;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 2; i * i <= n; i++) {\n        if(n % i == 0) {\n            printf(\"%d \", i);\n            while(n % i == 0) n /= i;\n        }\n    }\n    if(n > 1) printf(\"%d\", n);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet num = n, res = [];\nfor(let i = 2; i * i <= num; i++) {\n    if(num % i === 0) {\n        res.push(i);\n        while(num % i === 0) num /= i;\n    }\n}\nif(num > 1) res.push(num);\nconsole.log(res.join(' '));",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        var list = new List<int>();\n        for(int i = 2; i * i <= n; i++) {\n            if(n % i == 0) {\n                list.Add(i);\n                while(n % i == 0) n /= i;\n            }\n        }\n        if(n > 1) list.Add(n);\n        Console.WriteLine(string.Join(\" \", list));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 2 to sqrt(n):",
      "  If i divides n, print i and remove all factors of i from n",
      "If remaining n > 1, print n"
    ],
    mathSolution: "Prime factors are prime numbers that multiply to give n.",
    timeComplexity: "O(√n)",
    spaceComplexity: "O(1)",
    hint: "Divide n by i repeatedly after printing i."
  },

  // 6. Check Co-prime Numbers (PDF Q56)
  {
    id: 6,
    title: "Check Co-prime Numbers",
    difficulty: "hard",
    topic: "factor-divisibility",
    subtopic: "gcd-lcm",
    category: "Problem Solving",
    tags: ["coprime", "gcd", "math"],
    desc: "Given two integers <code>a</code> and <code>b</code>, check if they are co-prime (i.e., GCD = 1).",
    examples: [
      { input: "8 15", output: "Co-prime Numbers", explanation: "GCD(8,15)=1." },
      { input: "8 12", output: "Not Co-prime Numbers", explanation: "GCD(8,12)=4 ≠ 1." }
    ],
    testCases: [
      { input: "8 15", output: "Co-prime Numbers" },
      { input: "8 12", output: "Not Co-prime Numbers" },
      { input: "7 13", output: "Co-prime Numbers" },
      { input: "14 21", output: "Not Co-prime Numbers" }
    ],
    constraints: ["1 <= a, b <= 10^4"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "a, b = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b; cin >> a >> b;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a, b; scanf(\"%d%d\",&a,&b);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a, b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int a = int.Parse(inp[0]);\n        int b = int.Parse(inp[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a, b = map(int, input().split())\ngcd = 1\nfor i in range(1, min(a, b) + 1):\n    if a % i == 0 and b % i == 0:\n        gcd = i\nif gcd == 1:\n    print(\"Co-prime Numbers\")\nelse:\n    print(\"Not Co-prime Numbers\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int gcd = 1;\n        for(int i = 1; i <= Math.min(a, b); i++) {\n            if(a % i == 0 && b % i == 0) gcd = i;\n        }\n        System.out.println(gcd == 1 ? \"Co-prime Numbers\" : \"Not Co-prime Numbers\");\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int a, b, gcd = 1; cin >> a >> b;\n    for(int i = 1; i <= min(a, b); i++) {\n        if(a % i == 0 && b % i == 0) gcd = i;\n    }\n    cout << (gcd == 1 ? \"Co-prime Numbers\" : \"Not Co-prime Numbers\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a, b, gcd = 1; scanf(\"%d%d\",&a,&b);\n    int limit = a < b ? a : b;\n    for(int i = 1; i <= limit; i++) {\n        if(a % i == 0 && b % i == 0) gcd = i;\n    }\n    printf(gcd == 1 ? \"Co-prime Numbers\" : \"Not Co-prime Numbers\");\n    return 0;\n}",
      javascript: "const [a, b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nlet gcd = 1;\nfor(let i = 1; i <= Math.min(a, b); i++) {\n    if(a % i === 0 && b % i === 0) gcd = i;\n}\nconsole.log(gcd === 1 ? \"Co-prime Numbers\" : \"Not Co-prime Numbers\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int a = int.Parse(inp[0]);\n        int b = int.Parse(inp[1]);\n        int gcd = 1;\n        for(int i = 1; i <= Math.Min(a, b); i++) {\n            if(a % i == 0 && b % i == 0) gcd = i;\n        }\n        Console.WriteLine(gcd == 1 ? \"Co-prime Numbers\" : \"Not Co-prime Numbers\");\n    }\n}"
    },
    algorithmSteps: [
      "Find GCD by checking common divisors",
      "If GCD == 1, numbers are co-prime",
      "Else not co-prime"
    ],
    mathSolution: "Two numbers are co-prime if their greatest common divisor is 1.",
    timeComplexity: "O(min(a,b))",
    spaceComplexity: "O(1)",
    hint: "You can also use Euclidean algorithm for efficiency."
  },

  // 7. Find GCD and LCM of Two Numbers (PDF Q59)
  {
    id: 7,
    title: "GCD and LCM of Two Numbers",
    difficulty: "medium",
    topic: "factor-divisibility",
    subtopic: "gcd-lcm",
    category: "Problem Solving",
    tags: ["gcd", "lcm", "math"],
    desc: "Given two integers <code>a</code> and <code>b</code>, find their Greatest Common Divisor (GCD) and Least Common Multiple (LCM).",
    examples: [
      { input: "12 18", output: "GCD = 6\nLCM = 36", explanation: "GCD(12,18)=6, LCM=12*18/6=36." },
      { input: "5 7", output: "GCD = 1\nLCM = 35", explanation: "Co-prime numbers." }
    ],
    testCases: [
      { input: "12 18", output: "GCD = 6\nLCM = 36" },
      { input: "5 7", output: "GCD = 1\nLCM = 35" },
      { input: "8 12", output: "GCD = 4\nLCM = 24" },
      { input: "24 36", output: "GCD = 12\nLCM = 72" }
    ],
    constraints: ["1 <= a, b <= 10^4"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "a, b = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b; cin >> a >> b;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a, b; scanf(\"%d%d\",&a,&b);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a, b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int a = int.Parse(inp[0]);\n        int b = int.Parse(inp[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a, b = map(int, input().split())\ngcd = 1\nfor i in range(1, min(a, b) + 1):\n    if a % i == 0 and b % i == 0:\n        gcd = i\nlcm = a * b // gcd\nprint(f\"GCD = {gcd}\\nLCM = {lcm}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int gcd = 1;\n        for(int i = 1; i <= Math.min(a, b); i++) {\n            if(a % i == 0 && b % i == 0) gcd = i;\n        }\n        int lcm = a * b / gcd;\n        System.out.println(\"GCD = \" + gcd + \"\\nLCM = \" + lcm);\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int a, b, gcd = 1; cin >> a >> b;\n    for(int i = 1; i <= min(a, b); i++) {\n        if(a % i == 0 && b % i == 0) gcd = i;\n    }\n    cout << \"GCD = \" << gcd << \"\\nLCM = \" << a * b / gcd;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a, b, gcd = 1; scanf(\"%d%d\",&a,&b);\n    int limit = a < b ? a : b;\n    for(int i = 1; i <= limit; i++) {\n        if(a % i == 0 && b % i == 0) gcd = i;\n    }\n    int lcm = a * b / gcd;\n    printf(\"GCD = %d\\nLCM = %d\", gcd, lcm);\n    return 0;\n}",
      javascript: "const [a, b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nlet gcd = 1;\nfor(let i = 1; i <= Math.min(a, b); i++) {\n    if(a % i === 0 && b % i === 0) gcd = i;\n}\nconst lcm = a * b / gcd;\nconsole.log(`GCD = ${gcd}\\nLCM = ${lcm}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int a = int.Parse(inp[0]);\n        int b = int.Parse(inp[1]);\n        int gcd = 1;\n        for(int i = 1; i <= Math.Min(a, b); i++) {\n            if(a % i == 0 && b % i == 0) gcd = i;\n        }\n        int lcm = a * b / gcd;\n        Console.WriteLine($\"GCD = {gcd}\\nLCM = {lcm}\");\n    }\n}"
    },
    algorithmSteps: [
      "Find GCD by iterating common divisors",
      "Calculate LCM = (a * b) / GCD",
      "Print both"
    ],
    mathSolution: "LCM(a,b) * GCD(a,b) = a * b",
    timeComplexity: "O(min(a,b))",
    spaceComplexity: "O(1)",
    hint: "Use Euclidean algorithm for faster GCD."
  },
  {
    id: 8,
    title: "Check Perfect Number",
    difficulty: "hard",
    topic: "factor-divisibility",
    subtopic: "perfect-number",
    category: "Problem Solving",
    tags: ["perfect", "factors", "sum", "hard"],
    desc: "Given an integer <code>n</code>, determine whether it is a Perfect Number or not. A perfect number is a positive integer that equals the sum of its proper divisors (excluding itself).",
    examples: [
      { input: "n = 6", output: "Perfect Number", explanation: "Proper divisors: 1,2,3 → Sum = 6" },
      { input: "n = 28", output: "Perfect Number", explanation: "Proper divisors: 1,2,4,7,14 → Sum = 28" },
      { input: "n = 12", output: "Not a Perfect Number", explanation: "Proper divisors: 1,2,3,4,6 → Sum = 16 ≠ 12" },
      { input: "n = 496", output: "Perfect Number", explanation: "496 is a perfect number" }
    ],
    testCases: [
      { input: "6", output: "Perfect Number" },
      { input: "28", output: "Perfect Number" },
      { input: "12", output: "Not a Perfect Number" },
      { input: "496", output: "Perfect Number" },
      { input: "8128", output: "Perfect Number" }
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
      python: "n = int(input())\nif n <= 1:\n    print('Not a Perfect Number')\nelse:\n    sum_div = 1\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            sum_div += i\n            if i != n // i:\n                sum_div += n // i\n    if sum_div == n:\n        print('Perfect Number')\n    else:\n        print('Not a Perfect Number')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n <= 1) {\n            System.out.println(\"Not a Perfect Number\");\n            return;\n        }\n        int sum = 1;\n        for(int i = 2; i <= Math.sqrt(n); i++) {\n            if(n % i == 0) {\n                sum += i;\n                if(i != n / i) sum += n / i;\n            }\n        }\n        System.out.println(sum == n ? \"Perfect Number\" : \"Not a Perfect Number\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n <= 1) {\n        cout << \"Not a Perfect Number\";\n        return 0;\n    }\n    int sum = 1;\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) {\n            sum += i;\n            if(i != n / i) sum += n / i;\n        }\n    }\n    cout << (sum == n ? \"Perfect Number\" : \"Not a Perfect Number\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n <= 1) {\n        printf(\"Not a Perfect Number\");\n        return 0;\n    }\n    int sum = 1;\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) {\n            sum += i;\n            if(i != n / i) sum += n / i;\n        }\n    }\n    printf(sum == n ? \"Perfect Number\" : \"Not a Perfect Number\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n <= 1) {\n    console.log('Not a Perfect Number');\n} else {\n    let sum = 1;\n    for(let i = 2; i <= Math.sqrt(n); i++) {\n        if(n % i === 0) {\n            sum += i;\n            if(i !== n / i) sum += n / i;\n        }\n    }\n    console.log(sum === n ? 'Perfect Number' : 'Not a Perfect Number');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n <= 1) {\n            Console.WriteLine(\"Not a Perfect Number\");\n            return;\n        }\n        int sum = 1;\n        for(int i = 2; i <= Math.Sqrt(n); i++) {\n            if(n % i == 0) {\n                sum += i;\n                if(i != n / i) sum += n / i;\n            }\n        }\n        Console.WriteLine(sum == n ? \"Perfect Number\" : \"Not a Perfect Number\");\n    }\n}"
    },
    algorithmSteps: [
      "If n <= 1, not perfect",
      "Initialize sum = 1 (since 1 is always a divisor)",
      "Loop i from 2 to sqrt(n)",
      "If i divides n, add i and n/i to sum",
      "After loop, if sum == n → Perfect Number"
    ],
    mathSolution: "Perfect number equals sum of its proper divisors (excluding itself)",
    timeComplexity: "O(√n)",
    spaceComplexity: "O(1)",
    hint: "Optimize by iterating only up to square root and adding both divisors"
  },
  {
    id: 9,
    title: "Prime Factorization with Frequency",
    difficulty: "hard",
    topic: "factor-divisibility",
    subtopic: "prime-factors",
    category: "Problem Solving",
    tags: ["prime", "factors", "frequency", "hard"],
    desc: "Given an integer <code>n</code>, print all its prime factors along with the number of times each factor occurs (frequency). Output format: 'prime^count' for each factor.",
    examples: [
      { input: "n = 60", output: "2^2 * 3^1 * 5^1", explanation: "60 = 2² × 3¹ × 5¹" },
      { input: "n = 100", output: "2^2 * 5^2", explanation: "100 = 2² × 5²" },
      { input: "n = 13", output: "13^1", explanation: "Prime number" },
      { input: "n = 72", output: "2^3 * 3^2", explanation: "72 = 2³ × 3²" }
    ],
    testCases: [
      { input: "60", output: "2^2 * 3^1 * 5^1" },
      { input: "100", output: "2^2 * 5^2" },
      { input: "13", output: "13^1" },
      { input: "72", output: "2^3 * 3^2" },
      { input: "36", output: "2^2 * 3^2" }
    ],
    constraints: ["2 <= n <= 10^6"],
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
      python: "n = int(input())\nfactors = []\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n        count = 0\n        while n % i == 0:\n            n //= i\n            count += 1\n        factors.append(f\"{i}^{count}\")\nif n > 1:\n    factors.append(f\"{n}^1\")\nprint(' * '.join(factors))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<String> factors = new ArrayList<>();\n        for(int i = 2; i <= Math.sqrt(n); i++) {\n            if(n % i == 0) {\n                int count = 0;\n                while(n % i == 0) {\n                    n /= i;\n                    count++;\n                }\n                factors.add(i + \"^\" + count);\n            }\n        }\n        if(n > 1) factors.add(n + \"^1\");\n        System.out.println(String.join(\" * \", factors));\n    }\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <cmath>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    vector<string> factors;\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) {\n            int count = 0;\n            while(n % i == 0) {\n                n /= i;\n                count++;\n            }\n            factors.push_back(to_string(i) + \"^\" + to_string(count));\n        }\n    }\n    if(n > 1) factors.push_back(to_string(n) + \"^1\");\n    for(int i = 0; i < factors.size(); i++) {\n        if(i > 0) cout << \" * \";\n        cout << factors[i];\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int first = 1;\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) {\n            int count = 0;\n            while(n % i == 0) {\n                n /= i;\n                count++;\n            }\n            if(!first) printf(\" * \");\n            printf(\"%d^%d\", i, count);\n            first = 0;\n        }\n    }\n    if(n > 1) {\n        if(!first) printf(\" * \");\n        printf(\"%d^1\", n);\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet num = n;\nlet factors = [];\nfor(let i = 2; i <= Math.sqrt(num); i++) {\n    if(num % i === 0) {\n        let count = 0;\n        while(num % i === 0) {\n            num /= i;\n            count++;\n        }\n        factors.push(`${i}^${count}`);\n    }\n}\nif(num > 1) factors.push(`${num}^1`);\nconsole.log(factors.join(' * '));",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        var factors = new List<string>();\n        for(int i = 2; i <= Math.Sqrt(n); i++) {\n            if(n % i == 0) {\n                int count = 0;\n                while(n % i == 0) {\n                    n /= i;\n                    count++;\n                }\n                factors.Add($\"{i}^{count}\");\n            }\n        }\n        if(n > 1) factors.Add($\"{n}^1\");\n        Console.WriteLine(string.Join(\" * \", factors));\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "For i from 2 to sqrt(n):",
      "  - If i divides n, count how many times it divides",
      "  - Store 'i^count' in result array",
      "  - Divide n by i repeatedly",
      "If remaining n > 1, add 'n^1'",
      "Print factors joined by ' * '"
    ],
    mathSolution: "Prime factorization with exponents",
    timeComplexity: "O(√n)",
    spaceComplexity: "O(log n)",
    hint: "Use a while loop to count frequency of each prime factor"
  },
  {
    id: 10,
    title: "Find GCD of N Numbers",
    difficulty: "hard",
    topic: "factor-divisibility",
    subtopic: "gcd-lcm",
    category: "Problem Solving",
    tags: ["gcd", "array", "hard"],
    desc: "Given N integers, find the Greatest Common Divisor (GCD) of all the numbers.",
    examples: [
      { input: "N = 4, numbers = [12, 18, 24, 36]", output: "GCD = 6", explanation: "GCD of 12,18,24,36 is 6" },
      { input: "N = 3, numbers = [5, 10, 15]", output: "GCD = 5", explanation: "GCD of 5,10,15 is 5" },
      { input: "N = 3, numbers = [7, 13, 19]", output: "GCD = 1", explanation: "All are prime and different" }
    ],
    testCases: [
      { input: "4\n12 18 24 36", output: "GCD = 6" },
      { input: "3\n5 10 15", output: "GCD = 5" },
      { input: "3\n7 13 19", output: "GCD = 1" },
      { input: "5\n16 24 32 40 48", output: "GCD = 8" }
    ],
    constraints: ["1 <= N <= 100", "1 <= arr[i] <= 10^4"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\narr = list(map(int, input().split()))\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int arr[100];\n    for(int i=0; i<n; i++) cin >> arr[i];\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int arr[100];\n    for(int i=0; i<n; i++) scanf(\"%d\",&arr[i]);\n    // Write your code here\n    return 0;\n}",
      javascript: "const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int[] arr = Console.ReadLine().Split().Select(int.Parse).ToArray();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nn = int(input())\narr = list(map(int, input().split()))\nresult = arr[0]\nfor i in range(1, n):\n    result = gcd(result, arr[i])\nprint(f'GCD = {result}')",
      java: "import java.util.*;\npublic class Main {\n    static int gcd(int a, int b) {\n        while(b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int result = arr[0];\n        for(int i=1; i<n; i++) result = gcd(result, arr[i]);\n        System.out.println(\"GCD = \" + result);\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint gcd(int a, int b) {\n    while(b) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\nint main() {\n    int n; cin >> n;\n    int arr[100];\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int result = arr[0];\n    for(int i=1; i<n; i++) result = gcd(result, arr[i]);\n    cout << \"GCD = \" << result;\n    return 0;\n}",
      c: "#include <stdio.h>\nint gcd(int a, int b) {\n    while(b) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    int arr[100];\n    for(int i=0; i<n; i++) scanf(\"%d\",&arr[i]);\n    int result = arr[0];\n    for(int i=1; i<n; i++) result = gcd(result, arr[i]);\n    printf(\"GCD = %d\", result);\n    return 0;\n}",
      javascript: "function gcd(a, b) {\n    while(b !== 0) {\n        let temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nlet result = arr[0];\nfor(let i = 1; i < n; i++) result = gcd(result, arr[i]);\nconsole.log(`GCD = ${result}`);",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static int Gcd(int a, int b) {\n        while(b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int[] arr = Console.ReadLine().Split().Select(int.Parse).ToArray();\n        int result = arr[0];\n        for(int i = 1; i < n; i++) result = Gcd(result, arr[i]);\n        Console.WriteLine($\"GCD = {result}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read N and array of N numbers",
      "Initialize result as first element",
      "For each remaining element:",
      "  - Compute GCD of result and current element using Euclidean algorithm",
      "  - Update result = GCD",
      "Print final GCD"
    ],
    mathSolution: "GCD is associative: gcd(a,b,c) = gcd(gcd(a,b),c)",
    timeComplexity: "O(N × log M) where M is max number",
    spaceComplexity: "O(1)",
    hint: "Use Euclidean algorithm to find GCD of two numbers repeatedly"
  }
];

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...factorDivisibilityQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", factorDivisibilityQuestions.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = factorDivisibilityQuestions;
}