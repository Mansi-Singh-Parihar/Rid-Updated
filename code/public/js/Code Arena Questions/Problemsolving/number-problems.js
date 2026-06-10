// ============================================================
// NUMBER PROBLEMS - 6 QUESTIONS (ID 1 to 6)
// ============================================================

const numberQuestions = [
  {
    id: 1,
    title: "Check Perfect Square",
    difficulty: "easy",
    topic: "number-problems",
    subtopic: "perfect-square",
    category: "Problem Solving",
    tags: ["math", "sqrt", "conditionals"],
    desc: "Given an integer n, check whether it is a perfect square or not. A perfect square is a number that can be expressed as the square of an integer. Print 'Perfect Square' or 'Not a Perfect Square'.",
    examples: [
      { input: "25", output: "Perfect Square", explanation: "5 × 5 = 25" },
      { input: "20", output: "Not a Perfect Square", explanation: "No integer squared gives 20" }
    ],
    testCases: [
      { input: "25", output: "Perfect Square" },
      { input: "20", output: "Not a Perfect Square" },
      { input: "1", output: "Perfect Square" },
      { input: "0", output: "Perfect Square" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: null,
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
      python: "n = int(input())\nroot = int(n ** 0.5)\nif root * root == n:\n    print('Perfect Square')\nelse:\n    print('Not a Perfect Square')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int root=(int)Math.sqrt(n);\n        System.out.println(root*root==n?\"Perfect Square\":\"Not a Perfect Square\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    int root=sqrt(n);\n    cout<<(root*root==n?\"Perfect Square\":\"Not a Perfect Square\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int root=sqrt(n);\n    printf(root*root==n?\"Perfect Square\":\"Not a Perfect Square\");\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst root=Math.floor(Math.sqrt(n));\nconsole.log(root*root===n?'Perfect Square':'Not a Perfect Square');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        int root=(int)Math.Sqrt(n);\n        Console.WriteLine(root*root==n?\"Perfect Square\":\"Not a Perfect Square\");\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Calculate integer square root using sqrt()",
      "Multiply the root by itself",
      "If product equals n, print 'Perfect Square' else 'Not a Perfect Square'"
    ],
    mathSolution: "A number n is a perfect square if floor(sqrt(n))^2 == n",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use sqrt() function and compare square of integer root with original number"
  },
  {
    id: 2,
    title: "Swap Two Numbers",
    difficulty: "easy",
    topic: "number-problems",
    subtopic: "swap",
    category: "Problem Solving",
    tags: ["swap", "variables", "temporary-variable"],
    desc: "Given two integers a and b, swap their values. Print the values after swapping.",
    examples: [
      { input: "5 10", output: "10 5", explanation: "After swapping, first becomes second and second becomes first" },
      { input: "-3 7", output: "7 -3", explanation: "Swap works with negative numbers too" }
    ],
    testCases: [
      { input: "5 10", output: "10 5" },
      { input: "-3 7", output: "7 -3" },
      { input: "0 100", output: "100 0" },
      { input: "42 42", output: "42 42" }
    ],
    constraints: ["-10^9 <= a, b <= 10^9"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "a, b = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin>>a>>b;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d%d\",&a,&b);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [a,b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int a = int.Parse(input[0]);\n        int b = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "a, b = map(int, input().split())\na, b = b, a\nprint(a, b)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt();\n        int b=sc.nextInt();\n        int temp=a;\n        a=b;\n        b=temp;\n        System.out.println(a+\" \"+b);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int a,b; cin>>a>>b;\n    int temp=a; a=b; b=temp;\n    cout<<a<<\" \"<<b;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int a,b; scanf(\"%d%d\",&a,&b);\n    int temp=a; a=b; b=temp;\n    printf(\"%d %d\",a,b);\n    return 0;\n}",
      javascript: "const [a,b] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nconsole.log(b,a);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input=Console.ReadLine().Split();\n        int a=int.Parse(input[0]);\n        int b=int.Parse(input[1]);\n        int temp=a; a=b; b=temp;\n        Console.WriteLine(a+\" \"+b);\n    }\n}"
    },
    algorithmSteps: [
      "Read two integers a and b",
      "Store value of a in a temporary variable",
      "Assign value of b to a",
      "Assign value of temporary variable to b",
      "Print a and b"
    ],
    mathSolution: "Use a temporary variable to hold one value during the exchange",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use a third variable to store one number temporarily"
  },
  {
    id: 3,
    title: "Check Prime Number",
    difficulty: "medium",
    topic: "number-problems",
    subtopic: "prime",
    category: "Problem Solving",
    tags: ["prime", "loops", "optimization"],
    desc: "Given an integer n, check whether it is a prime number or not. A prime number is greater than 1 and has no positive divisors other than 1 and itself. Print 'Prime Number' or 'Not a Prime Number'.",
    examples: [
      { input: "7", output: "Prime Number", explanation: "7 is divisible only by 1 and 7" },
      { input: "10", output: "Not a Prime Number", explanation: "10 has divisors 2 and 5" }
    ],
    testCases: [
      { input: "7", output: "Prime Number" },
      { input: "10", output: "Not a Prime Number" },
      { input: "2", output: "Prime Number" },
      { input: "1", output: "Not a Prime Number" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: null,
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
      python: "n = int(input())\nif n <= 1:\n    print('Not a Prime Number')\nelse:\n    prime = True\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            prime = False\n            break\n    print('Prime Number' if prime else 'Not a Prime Number')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        if(n<=1) System.out.println(\"Not a Prime Number\");\n        else {\n            boolean prime=true;\n            for(int i=2;i<=Math.sqrt(n);i++) {\n                if(n%i==0){ prime=false; break; }\n            }\n            System.out.println(prime?\"Prime Number\":\"Not a Prime Number\");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    if(n<=1) cout<<\"Not a Prime Number\";\n    else {\n        bool prime=true;\n        for(int i=2;i<=sqrt(n);i++) {\n            if(n%i==0){ prime=false; break; }\n        }\n        cout<<(prime?\"Prime Number\":\"Not a Prime Number\");\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n<=1) printf(\"Not a Prime Number\");\n    else {\n        int prime=1;\n        for(int i=2;i<=sqrt(n);i++) {\n            if(n%i==0){ prime=0; break; }\n        }\n        printf(prime?\"Prime Number\":\"Not a Prime Number\");\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n<=1) console.log('Not a Prime Number');\nelse {\n    let prime=true;\n    for(let i=2;i<=Math.sqrt(n);i++) {\n        if(n%i===0){ prime=false; break; }\n    }\n    console.log(prime?'Prime Number':'Not a Prime Number');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        if(n<=1) Console.WriteLine(\"Not a Prime Number\");\n        else {\n            bool prime=true;\n            for(int i=2;i<=Math.Sqrt(n);i++) {\n                if(n%i==0){ prime=false; break; }\n            }\n            Console.WriteLine(prime?\"Prime Number\":\"Not a Prime Number\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "If n <= 1, it's not prime",
      "Loop i from 2 to sqrt(n)",
      "If n % i == 0, then n is not prime",
      "If no divisor found, n is prime"
    ],
    mathSolution: "A prime number has exactly two distinct factors: 1 and itself. Check divisibility only up to square root.",
    timeComplexity: "O(√n)",
    spaceComplexity: "O(1)",
    hint: "Only need to check divisors up to square root of n"
  },
  {
    id: 4,
    title: "Nearest Prime Number",
    difficulty: "medium",
    topic: "number-problems",
    subtopic: "prime",
    category: "Problem Solving",
    tags: ["prime", "search", "nearest"],
    desc: "Given an integer n, find the prime number closest to n. If two primes are equally close, choose the smaller one. Print the nearest prime number.",
    examples: [
      { input: "20", output: "19", explanation: "19 is prime and distance 1; 23 is distance 3, so 19 is closer" },
      { input: "30", output: "29", explanation: "29 is distance 1; 31 is also distance 1, but we choose the smaller (29)" }
    ],
    testCases: [
      { input: "20", output: "19" },
      { input: "30", output: "29" },
      { input: "10", output: "11" },
      { input: "2", output: "2" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: null,
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
      python: "def is_prime(x):\n    if x<2: return False\n    for i in range(2,int(x**0.5)+1):\n        if x%i==0: return False\n    return True\n\nn=int(input())\nfor offset in range(0, n+1):\n    if n-offset>=2 and is_prime(n-offset):\n        print(n-offset)\n        break\n    if is_prime(n+offset):\n        print(n+offset)\n        break",
      java: "import java.util.*;\npublic class Main {\n    static boolean isPrime(int x) {\n        if(x<2) return false;\n        for(int i=2;i<=Math.sqrt(x);i++) if(x%i==0) return false;\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        for(int offset=0;;offset++) {\n            if(n-offset>=2 && isPrime(n-offset)) { System.out.println(n-offset); break; }\n            if(isPrime(n+offset)) { System.out.println(n+offset); break; }\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nbool isPrime(int x) {\n    if(x<2) return false;\n    for(int i=2;i<=sqrt(x);i++) if(x%i==0) return false;\n    return true;\n}\nint main() {\n    int n; cin>>n;\n    for(int offset=0;;offset++) {\n        if(n-offset>=2 && isPrime(n-offset)) { cout<<n-offset; break; }\n        if(isPrime(n+offset)) { cout<<n+offset; break; }\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint isPrime(int x) {\n    if(x<2) return 0;\n    for(int i=2;i<=sqrt(x);i++) if(x%i==0) return 0;\n    return 1;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int offset=0;;offset++) {\n        if(n-offset>=2 && isPrime(n-offset)) { printf(\"%d\",n-offset); break; }\n        if(isPrime(n+offset)) { printf(\"%d\",n+offset); break; }\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst isPrime=(x)=>{\n    if(x<2) return false;\n    for(let i=2;i<=Math.sqrt(x);i++) if(x%i===0) return false;\n    return true;\n};\nfor(let offset=0;;offset++) {\n    if(n-offset>=2 && isPrime(n-offset)) { console.log(n-offset); break; }\n    if(isPrime(n+offset)) { console.log(n+offset); break; }\n}",
      csharp: "using System;\nclass Program {\n    static bool IsPrime(int x) {\n        if(x<2) return false;\n        for(int i=2;i<=Math.Sqrt(x);i++) if(x%i==0) return false;\n        return true;\n    }\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        for(int offset=0;;offset++) {\n            if(n-offset>=2 && IsPrime(n-offset)) { Console.WriteLine(n-offset); break; }\n            if(IsPrime(n+offset)) { Console.WriteLine(n+offset); break; }\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Define helper function to check primality",
      "Read integer n",
      "Start offset = 0",
      "Check lower candidate (n - offset) if >=2 and prime, print and stop",
      "Check upper candidate (n + offset) if prime, print and stop",
      "Increment offset and repeat"
    ],
    mathSolution: "Search outward from n: first check n, then n-1 and n+1, then n-2 and n+2, etc. Stop at first prime found.",
    timeComplexity: "O(k√k) where k is distance to nearest prime",
    spaceComplexity: "O(1)",
    hint: "Search both lower and higher numbers simultaneously, starting from the given number"
  },
  {
    id: 5,
    title: "First N Prime Numbers",
    difficulty: "hard",
    topic: "number-problems",
    subtopic: "prime",
    category: "Problem Solving",
    tags: ["prime", "loops", "generation"],
    desc: "Given an integer n, print the first n prime numbers separated by spaces.",
    examples: [
      { input: "5", output: "2 3 5 7 11", explanation: "First 5 prime numbers" },
      { input: "3", output: "2 3 5", explanation: "First 3 prime numbers" }
    ],
    testCases: [
      { input: "5", output: "2 3 5 7 11" },
      { input: "3", output: "2 3 5" },
      { input: "1", output: "2" },
      { input: "10", output: "2 3 5 7 11 13 17 19 23 29" }
    ],
    constraints: ["1 <= n <= 1000"],
    videoId: null,
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
      python: "n=int(input())\ncount=0\nnum=2\nwhile count<n:\n    prime=True\n    for i in range(2,int(num**0.5)+1):\n        if num%i==0:\n            prime=False\n            break\n    if prime:\n        print(num,end=' ')\n        count+=1\n    num+=1",
      java: "import java.util.*;\npublic class Main {\n    static boolean isPrime(int x) {\n        if(x<2) return false;\n        for(int i=2;i<=Math.sqrt(x);i++) if(x%i==0) return false;\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int count=0, num=2;\n        while(count<n) {\n            if(isPrime(num)) {\n                System.out.print(num+\" \");\n                count++;\n            }\n            num++;\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nbool isPrime(int x) {\n    if(x<2) return false;\n    for(int i=2;i<=sqrt(x);i++) if(x%i==0) return false;\n    return true;\n}\nint main() {\n    int n; cin>>n;\n    int count=0, num=2;\n    while(count<n) {\n        if(isPrime(num)) {\n            cout<<num<<\" \";\n            count++;\n        }\n        num++;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint isPrime(int x) {\n    if(x<2) return 0;\n    for(int i=2;i<=sqrt(x);i++) if(x%i==0) return 0;\n    return 1;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    int count=0, num=2;\n    while(count<n) {\n        if(isPrime(num)) {\n            printf(\"%d \",num);\n            count++;\n        }\n        num++;\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst isPrime=(x)=>{\n    if(x<2) return false;\n    for(let i=2;i<=Math.sqrt(x);i++) if(x%i===0) return false;\n    return true;\n};\nlet count=0, num=2, result=[];\nwhile(count<n) {\n    if(isPrime(num)) { result.push(num); count++; }\n    num++;\n}\nconsole.log(result.join(' '));",
      csharp: "using System;\nclass Program {\n    static bool IsPrime(int x) {\n        if(x<2) return false;\n        for(int i=2;i<=Math.Sqrt(x);i++) if(x%i==0) return false;\n        return true;\n    }\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        int count=0, num=2;\n        while(count<n) {\n            if(IsPrime(num)) {\n                Console.Write(num+\" \");\n                count++;\n            }\n            num++;\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "Initialize count = 0, num = 2",
      "While count < n:",
      "  - Check if num is prime",
      "  - If yes, print num and increment count",
      "  - Increment num",
      "Print all primes separated by space"
    ],
    mathSolution: "Test each integer starting from 2 for primality; stop after finding n primes.",
    timeComplexity: "O(n * √m) where m is the nth prime",
    spaceComplexity: "O(1)",
    hint: "Use a helper function to check primality and keep counting until you reach n primes"
  },
  {
    id: 6,
    title: "Check Fibonacci Number",
    difficulty: "medium",
    topic: "number-problems",
    subtopic: "fibonacci",
    category: "Problem Solving",
    tags: ["fibonacci", "loops", "sequence"],
    desc: "Given an integer n, check whether it belongs to the Fibonacci sequence. The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8, 13, ... Print 'Fibonacci Number' or 'Not a Fibonacci Number'.",
    examples: [
      { input: "21", output: "Fibonacci Number", explanation: "21 appears in Fibonacci series (0,1,1,2,3,5,8,13,21)" },
      { input: "22", output: "Not a Fibonacci Number", explanation: "22 is not in the Fibonacci sequence" }
    ],
    testCases: [
      { input: "21", output: "Fibonacci Number" },
      { input: "22", output: "Not a Fibonacci Number" },
      { input: "0", output: "Fibonacci Number" },
      { input: "13", output: "Fibonacci Number" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: null,
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
      python: "n=int(input())\na,b=0,1\nif n==0 or n==1:\n    print('Fibonacci Number')\nelse:\n    fib=False\n    while b<n:\n        a,b=b,a+b\n    if b==n:\n        print('Fibonacci Number')\n    else:\n        print('Not a Fibonacci Number')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int a=0,b=1;\n        if(n==0||n==1) System.out.println(\"Fibonacci Number\");\n        else {\n            while(b<n) {\n                int temp=a+b;\n                a=b;\n                b=temp;\n            }\n            System.out.println(b==n?\"Fibonacci Number\":\"Not a Fibonacci Number\");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    int a=0,b=1;\n    if(n==0||n==1) cout<<\"Fibonacci Number\";\n    else {\n        while(b<n) {\n            int temp=a+b;\n            a=b;\n            b=temp;\n        }\n        cout<<(b==n?\"Fibonacci Number\":\"Not a Fibonacci Number\");\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int a=0,b=1;\n    if(n==0||n==1) printf(\"Fibonacci Number\");\n    else {\n        while(b<n) {\n            int temp=a+b;\n            a=b;\n            b=temp;\n        }\n        printf(b==n?\"Fibonacci Number\":\"Not a Fibonacci Number\");\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet a=0,b=1;\nif(n===0||n===1) console.log('Fibonacci Number');\nelse {\n    while(b<n) {\n        let temp=a+b;\n        a=b;\n        b=temp;\n    }\n    console.log(b===n?'Fibonacci Number':'Not a Fibonacci Number');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        int a=0,b=1;\n        if(n==0||n==1) Console.WriteLine(\"Fibonacci Number\");\n        else {\n            while(b<n) {\n                int temp=a+b;\n                a=b;\n                b=temp;\n            }\n            Console.WriteLine(b==n?\"Fibonacci Number\":\"Not a Fibonacci Number\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "If n is 0 or 1, it's a Fibonacci number",
      "Initialize a=0, b=1",
      "Generate Fibonacci numbers while b < n:",
      "  - Set a, b = b, a+b",
      "If b equals n, print 'Fibonacci Number' else 'Not a Fibonacci Number'"
    ],
    mathSolution: "Generate Fibonacci numbers up to n; if n matches any generated number, it's a Fibonacci number.",
    timeComplexity: "O(log n) – number of Fibonacci terms up to n",
    spaceComplexity: "O(1)",
    hint: "Keep generating Fibonacci numbers until you reach or exceed n, then compare"
  },
   {
    id: 7,
    title: "Swap Odd and Even Bits",
    difficulty: "easy",
    topic: "number-problems",
    subtopic: "bit-manipulation",
    category: "Problem Solving",
    tags: ["bit-manipulation", "bits", "swap-bits"],
    desc: "Given an integer n, swap all odd and even bits (bit positions 0 and 1, 2 and 3, etc.). Bit 0 is the least significant bit (rightmost). Print the resulting number after swapping.",
    examples: [
      { input: "23", output: "43", explanation: "23 = 10111 (binary), after swapping odd/even bits becomes 101011 = 43" },
      { input: "10", output: "5", explanation: "10 = 1010 (binary), after swapping becomes 0101 = 5" }
    ],
    testCases: [
      { input: "23", output: "43" },
      { input: "10", output: "5" },
      { input: "0", output: "0" },
      { input: "1", output: "2" },
      { input: "2", output: "1" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: null,
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
      python: "n = int(input())\n# Extract all even bits (positions 0,2,4,...) and shift right by 1\n# Extract all odd bits (positions 1,3,5,...) and shift left by 1\neven_bits = (n & 0x55555555) << 1   # 0x55555555 = 0101010101010101...\nodd_bits = (n & 0xAAAAAAAA) >> 1    # 0xAAAAAAAA = 1010101010101010...\nresult = even_bits | odd_bits\nprint(result)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int evenBits = (n & 0x55555555) << 1;\n        int oddBits = (n & 0xAAAAAAAA) >> 1;\n        int result = evenBits | oddBits;\n        System.out.println(result);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    int evenBits = (n & 0x55555555) << 1;\n    int oddBits = (n & 0xAAAAAAAA) >> 1;\n    int result = evenBits | oddBits;\n    cout<<result;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int evenBits = (n & 0x55555555) << 1;\n    int oddBits = (n & 0xAAAAAAAA) >> 1;\n    int result = evenBits | oddBits;\n    printf(\"%d\",result);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst evenBits = (n & 0x55555555) << 1;\nconst oddBits = (n & 0xAAAAAAAA) >> 1;\nconst result = evenBits | oddBits;\nconsole.log(result);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int evenBits = (n & 0x55555555) << 1;\n        int oddBits = (n & 0xAAAAAAAA) >> 1;\n        int result = evenBits | oddBits;\n        Console.WriteLine(result);\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Extract even-position bits using mask 0x55555555 (alternating 0 and 1 starting with 1 at LSB)",
      "Shift even bits left by 1 to move them to odd positions",
      "Extract odd-position bits using mask 0xAAAAAAAA (alternating 1 and 0 starting with 0 at LSB)",
      "Shift odd bits right by 1 to move them to even positions",
      "Combine using OR operation",
      "Print the result"
    ],
    mathSolution: "Use bitwise AND with masks to isolate odd/even bits, then shift and OR them together.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use masks: 0x55555555 for even bits (binary 010101...), 0xAAAAAAAA for odd bits (binary 101010...)"
  },
  {
    id: 8,
    title: "Find Position of Rightmost Set Bit",
    difficulty: "medium",
    topic: "number-problems",
    subtopic: "bit-manipulation",
    category: "Problem Solving",
    tags: ["bit-manipulation", "bits", "lowest-set-bit"],
    desc: "Given an integer n, find the position (1-based from right) of the rightmost set bit (1). If the number is 0, print 0. Print the position of the rightmost set bit.",
    examples: [
      { input: "12", output: "3", explanation: "12 = 1100 binary, rightmost 1 is at position 3" },
      { input: "7", output: "1", explanation: "7 = 111 binary, rightmost 1 is at position 1" }
    ],
    testCases: [
      { input: "12", output: "3" },
      { input: "7", output: "1" },
      { input: "0", output: "0" },
      { input: "8", output: "4" },
      { input: "1", output: "1" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: null,
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
      python: "n = int(input())\nif n == 0:\n    print(0)\nelse:\n    # Method 1: Using n & -n\n    pos = 1\n    while (n & 1) == 0:\n        n >>= 1\n        pos += 1\n    print(pos)\n    \n    # Method 2: Using log2 (n & -n) + 1\n    # position = (n & -n).bit_length()\n    # print(position)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        if(n==0) System.out.println(0);\n        else {\n            int pos=1;\n            while((n&1)==0) {\n                n>>=1;\n                pos++;\n            }\n            System.out.println(pos);\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin>>n;\n    if(n==0) cout<<0;\n    else {\n        int pos=1;\n        while((n&1)==0) {\n            n>>=1;\n            pos++;\n        }\n        cout<<pos;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n==0) printf(\"0\");\n    else {\n        int pos=1;\n        while((n&1)==0) {\n            n>>=1;\n            pos++;\n        }\n        printf(\"%d\",pos);\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n===0) console.log(0);\nelse {\n    let num=n, pos=1;\n    while((num&1)===0) {\n        num>>=1;\n        pos++;\n    }\n    console.log(pos);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        if(n==0) Console.WriteLine(0);\n        else {\n            int pos=1;\n            while((n&1)==0) {\n                n>>=1;\n                pos++;\n            }\n            Console.WriteLine(pos);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "If n is 0, print 0",
      "Initialize position = 1",
      "While the least significant bit is 0:",
      "  - Right shift n by 1",
      "  - Increment position",
      "Print the position"
    ],
    mathSolution: "Keep right-shifting until the least significant bit becomes 1; count shifts.",
    timeComplexity: "O(number of trailing zeros)",
    spaceComplexity: "O(1)",
    hint: "Use while loop to check (n & 1) and right shift until you find a 1"
  },
  {
    id: 9,
    title: "Happy Number",
    difficulty: "medium",
    topic: "number-problems",
    subtopic: "happy-number",
    category: "Problem Solving",
    tags: ["loops", "set", "cycle-detection"],
    desc: "A happy number is a number that eventually reaches 1 when replaced by the sum of squares of its digits repeatedly. If it enters a cycle that does not include 1, it's an unhappy number. Print 'Happy Number' or 'Unhappy Number'.",
    examples: [
      { input: "19", output: "Happy Number", explanation: "1²+9²=82 → 8²+2²=68 → 6²+8²=100 → 1²+0²+0²=1" },
      { input: "2", output: "Unhappy Number", explanation: "2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 (cycle)" }
    ],
    testCases: [
      { input: "19", output: "Happy Number" },
      { input: "2", output: "Unhappy Number" },
      { input: "1", output: "Happy Number" },
      { input: "7", output: "Happy Number" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <unordered_set>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#define MAX 1000\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "def sum_squares(x):\n    total = 0\n    while x > 0:\n        total += (x % 10) ** 2\n        x //= 10\n    return total\n\nn = int(input())\nseen = set()\nwhile n != 1 and n not in seen:\n    seen.add(n)\n    n = sum_squares(n)\nprint('Happy Number' if n == 1 else 'Unhappy Number')",
      java: "import java.util.*;\npublic class Main {\n    static int sumSquares(int x) {\n        int sum=0;\n        while(x>0) {\n            int d=x%10;\n            sum+=d*d;\n            x/=10;\n        }\n        return sum;\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        HashSet<Integer> seen=new HashSet<>();\n        while(n!=1 && !seen.contains(n)) {\n            seen.add(n);\n            n=sumSquares(n);\n        }\n        System.out.println(n==1?\"Happy Number\":\"Unhappy Number\");\n    }\n}",
      cpp: "#include <iostream>\n#include <unordered_set>\nusing namespace std;\nint sumSquares(int x) {\n    int sum=0;\n    while(x>0) {\n        int d=x%10;\n        sum+=d*d;\n        x/=10;\n    }\n    return sum;\n}\nint main() {\n    int n; cin>>n;\n    unordered_set<int> seen;\n    while(n!=1 && seen.find(n)==seen.end()) {\n        seen.insert(n);\n        n=sumSquares(n);\n    }\n    cout<<(n==1?\"Happy Number\":\"Unhappy Number\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint sumSquares(int x) {\n    int sum=0;\n    while(x>0) {\n        int d=x%10;\n        sum+=d*d;\n        x/=10;\n    }\n    return sum;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    int seen[1000]={0};\n    while(n!=1 && !seen[n]) {\n        seen[n]=1;\n        n=sumSquares(n);\n    }\n    printf(n==1?\"Happy Number\":\"Unhappy Number\");\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst sumSquares=(x)=>{\n    let sum=0;\n    while(x>0) {\n        let d=x%10;\n        sum+=d*d;\n        x=Math.floor(x/10);\n    }\n    return sum;\n};\nlet seen=new Set();\nlet num=n;\nwhile(num!==1 && !seen.has(num)) {\n    seen.add(num);\n    num=sumSquares(num);\n}\nconsole.log(num===1?'Happy Number':'Unhappy Number');",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static int SumSquares(int x) {\n        int sum=0;\n        while(x>0) {\n            int d=x%10;\n            sum+=d*d;\n            x/=10;\n        }\n        return sum;\n    }\n    static void Main() {\n        int n=int.Parse(Console.ReadLine());\n        HashSet<int> seen=new HashSet<int>();\n        while(n!=1 && !seen.Contains(n)) {\n            seen.Add(n);\n            n=SumSquares(n);\n        }\n        Console.WriteLine(n==1?\"Happy Number\":\"Unhappy Number\");\n    }\n}"
    },
    algorithmSteps: [
      "Read integer n",
      "Define function to compute sum of squares of digits",
      "Create a set to track seen numbers",
      "While n != 1 and n not in seen:",
      "  - Add n to seen",
      "  - n = sum of squares of digits of n",
      "If n == 1, print 'Happy Number' else 'Unhappy Number'"
    ],
    mathSolution: "Use cycle detection with a hash set; if you see a number twice before reaching 1, it's unhappy.",
    timeComplexity: "O(log n) average, with cycle detection",
    spaceComplexity: "O(number of unique numbers in cycle)",
    hint: "Use a set to detect cycles. If you encounter a number you've seen before and it's not 1, it's unhappy."
  },
  {
    id: 10,
    title: "Next Greater Number Using Same Digits",
    difficulty: "hard",
    topic: "number-problems",
    subtopic: "permutation",
    category: "Problem Solving",
    tags: ["next-permutation", "digits", "string", "sorting"],
    desc: "Given an integer n, find the smallest number greater than n that can be formed using the same digits. If no such number exists, print 'No greater number'.",
    examples: [
      { input: "123", output: "132", explanation: "Next permutation of digits: 132" },
      { input: "534976", output: "536479", explanation: "Next greater number with same digits" },
      { input: "321", output: "No greater number", explanation: "Already the largest permutation" }
    ],
    testCases: [
      { input: "123", output: "132" },
      { input: "534976", output: "536479" },
      { input: "321", output: "No greater number" },
      { input: "111", output: "No greater number" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "def next_greater(n):\n    digits = list(str(n))\n    i = len(digits) - 2\n    while i >= 0 and digits[i] >= digits[i+1]:\n        i -= 1\n    if i < 0:\n        return None\n    j = len(digits) - 1\n    while digits[j] <= digits[i]:\n        j -= 1\n    digits[i], digits[j] = digits[j], digits[i]\n    digits[i+1:] = reversed(digits[i+1:])\n    return int(''.join(digits))\n\nn = int(input())\nresult = next_greater(n)\nprint(result if result else 'No greater number')",
      java: "import java.util.*;\npublic class Main {\n    static Integer nextGreater(int n) {\n        char[] digits = String.valueOf(n).toCharArray();\n        int i = digits.length - 2;\n        while(i>=0 && digits[i] >= digits[i+1]) i--;\n        if(i<0) return null;\n        int j = digits.length - 1;\n        while(digits[j] <= digits[i]) j--;\n        char temp = digits[i];\n        digits[i] = digits[j];\n        digits[j] = temp;\n        int left=i+1, right=digits.length-1;\n        while(left<right) {\n            temp=digits[left];\n            digits[left]=digits[right];\n            digits[right]=temp;\n            left++; right--;\n        }\n        return Integer.parseInt(new String(digits));\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        Integer result=nextGreater(n);\n        System.out.println(result==null?\"No greater number\":result);\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin>>s;\n    if(next_permutation(s.begin(), s.end()))\n        cout<<s;\n    else\n        cout<<\"No greater number\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint compare(const void *a, const void *b) { return *(char*)a - *(char*)b; }\nint main() {\n    char s[12]; scanf(\"%s\",s);\n    int len=strlen(s);\n    int i=len-2;\n    while(i>=0 && s[i]>=s[i+1]) i--;\n    if(i<0) printf(\"No greater number\");\n    else {\n        int j=len-1;\n        while(s[j]<=s[i]) j--;\n        char temp=s[i]; s[i]=s[j]; s[j]=temp;\n        qsort(s+i+1, len-i-1, sizeof(char), compare);\n        printf(\"%s\",s);\n    }\n    return 0;\n}",
      javascript: "const n=parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst nextGreater=(num)=>{\n    let digits=num.toString().split('');\n    let i=digits.length-2;\n    while(i>=0 && digits[i]>=digits[i+1]) i--;\n    if(i<0) return null;\n    let j=digits.length-1;\n    while(digits[j]<=digits[i]) j--;\n    [digits[i], digits[j]] = [digits[j], digits[i]];\n    let left=i+1, right=digits.length-1;\n    while(left<right) {\n        [digits[left], digits[right]] = [digits[right], digits[left]];\n        left++; right--;\n    }\n    return parseInt(digits.join(''));\n};\nlet result=nextGreater(n);\nconsole.log(result===null?\"No greater number\":result);",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        char[] digits = Console.ReadLine().ToCharArray();\n        int i = digits.Length - 2;\n        while(i>=0 && digits[i] >= digits[i+1]) i--;\n        if(i<0) Console.WriteLine(\"No greater number\");\n        else {\n            int j = digits.Length - 1;\n            while(digits[j] <= digits[i]) j--;\n            char temp = digits[i];\n            digits[i] = digits[j];\n            digits[j] = temp;\n            Array.Reverse(digits, i+1, digits.Length-i-1);\n            Console.WriteLine(new string(digits));\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Convert number to digit array/string",
      "Find the first digit (from right) that is smaller than next digit (pivot)",
      "If no such digit exists, no greater number possible",
      "Find smallest digit to the right of pivot that is larger than pivot",
      "Swap pivot with that digit",
      "Reverse the digits after pivot to get the smallest arrangement",
      "Convert back to number and print"
    ],
    mathSolution: "Next permutation algorithm: find pivot, find successor, swap, reverse suffix.",
    timeComplexity: "O(d) where d is number of digits",
    spaceComplexity: "O(d)",
    hint: "Use next_permutation in C++ or implement the standard algorithm: find decreasing suffix, find pivot, find rightmost larger, swap, reverse suffix"
  }
];

// Export
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...numberQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", numberQuestions.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = numberQuestions;
}