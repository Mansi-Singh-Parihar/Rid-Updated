// ============================================================
// RANGE PROBLEMS
// ============================================================

const rangeProblems = [
  {
    id: 1,
    title: "Print Numbers in a Range",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "range-print",
    category: "Problem Solving",
    tags: ["range", "loop", "basic"],
    desc: "Given two integers <code>start</code> and <code>end</code>, print all numbers from <code>start</code> to <code>end</code> inclusive, separated by spaces.",
    examples: [
      { input: "1 5", output: "1 2 3 4 5", explanation: "Print numbers from 1 to 5." },
      { input: "10 15", output: "10 11 12 13 14 15", explanation: "Print numbers from 10 to 15." },
      { input: "5 5", output: "5", explanation: "Single number range." }
    ],
    testCases: [
      { input: "1 5", output: "1 2 3 4 5" },
      { input: "10 15", output: "10 11 12 13 14 15" },
      { input: "5 5", output: "5" },
      { input: "3 8", output: "3 4 5 6 7 8" }
    ],
    constraints: ["1 <= start <= end <= 1000"],
    videoId: "x8Lawok8E5w",
    videoStart: 1095,
    videoEnd: 1160,
    starterCode: {
      python: "start, end = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "start, end = map(int, input().split())\nresult = []\nfor i in range(start, end+1):\n    result.append(str(i))\nprint(' '.join(result))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        StringBuilder sb = new StringBuilder();\n        for(int i = start; i <= end; i++)\n            sb.append(i).append(\" \");\n        System.out.println(sb.toString().trim());\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    for(int i = start; i <= end; i++)\n        cout << i << \" \";\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    for(int i = start; i <= end; i++)\n        printf(\"%d \", i);\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nconst result = [];\nfor(let i = start; i <= end; i++) result.push(i);\nconsole.log(result.join(' '));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        for(int i = start; i <= end; i++)\n            Console.Write(i + (i == end ? \"\" : \" \"));\n    }\n}"
    },
    algorithmSteps: [
      "Read start and end values",
      "Create a loop from start to end",
      "Print each number",
      "Add space between numbers"
    ],
    mathSolution: "Simple iteration from start to end inclusive.",
    timeComplexity: "O(n) where n = end-start+1",
    spaceComplexity: "O(1)",
    hint: "Use a for loop from start to end and print each number."
  },
  {
    id: 2,
    title: "Sum of Numbers in a Range",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "range-sum",
    category: "Problem Solving",
    tags: ["range", "sum", "formula", "loop"],
    desc: "Given two integers <code>start</code> and <code>end</code>, calculate and print the sum of all numbers from <code>start</code> to <code>end</code> inclusive.",
    examples: [
      { input: "1 5", output: "15", explanation: "1+2+3+4+5 = 15" },
      { input: "3 7", output: "25", explanation: "3+4+5+6+7 = 25" },
      { input: "10 10", output: "10", explanation: "Single number sum." }
    ],
    testCases: [
      { input: "1 5", output: "15" },
      { input: "3 7", output: "25" },
      { input: "10 10", output: "10" },
      { input: "1 100", output: "5050" }
    ],
    constraints: ["1 <= start <= end <= 1000"],
    videoId: "x8Lawok8E5w",
    videoStart: 1239,
    videoEnd: 1317,
    starterCode: {
      python: "start, end = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "start, end = map(int, input().split())\nn = end - start + 1\nsum_result = (start + end) * n // 2\nprint(sum_result)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        int n = end - start + 1;\n        int sum = (start + end) * n / 2;\n        System.out.println(sum);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    int n = end - start + 1;\n    int sum = (start + end) * n / 2;\n    cout << sum;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    int n = end - start + 1;\n    int sum = (start + end) * n / 2;\n    printf(\"%d\", sum);\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nconst n = end - start + 1;\nconst sum = (start + end) * n / 2;\nconsole.log(sum);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        int n = end - start + 1;\n        int sum = (start + end) * n / 2;\n        Console.WriteLine(sum);\n    }\n}"
    },
    algorithmSteps: [
      "Read start and end values",
      "Calculate number of terms: n = end - start + 1",
      "Apply arithmetic progression formula: sum = (first + last) * n / 2",
      "Print the sum"
    ],
    mathSolution: "Use AP formula: Sum = (start + end) × (end - start + 1) ÷ 2",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use the formula (first + last) * n / 2 instead of loop for better efficiency."
  },
  {
    id: 3,
    title: "Alternate Even Numbers",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "pattern-printing",
    category: "Problem Solving",
    tags: ["even numbers", "alternate", "loop"],
    desc: "Given a limit n, print every second even number (2,6,10,14,...) up to n.",
    examples: [
      { input: "10", output: "2 6 10", explanation: "Even numbers: 2,4,6,8,10; alternate gives 2,6,10." },
      { input: "15", output: "2 6 10 14", explanation: "Even numbers up to 15: 2,4,6,8,10,12,14; alternate gives 2,6,10,14." }
    ],
    testCases: [
      { input: "10", output: "2 6 10" },
      { input: "15", output: "2 6 10 14" },
      { input: "5", output: "2" }
    ],
    constraints: ["1 <= n <= 1000"],
    videoId: "n1ugHoaWyHE",
    videoStart: 1215,
    videoEnd: 1360,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\ncount = 0\nfor i in range(2, n+1, 2):\n    if count % 2 == 0:\n        print(i, end=' ')\n    count += 1",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int count = 0;\n        for(int i = 2; i <= n; i += 2) {\n            if(count % 2 == 0)\n                System.out.print(i + \" \");\n            count++;\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int count = 0;\n    for(int i = 2; i <= n; i += 2) {\n        if(count % 2 == 0)\n            cout << i << \" \";\n        count++;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int count = 0;\n    for(int i = 2; i <= n; i += 2) {\n        if(count % 2 == 0)\n            printf(\"%d \", i);\n        count++;\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet count = 0;\nfor(let i = 2; i <= n; i += 2) {\n    if(count % 2 === 0) process.stdout.write(i + ' ');\n    count++;\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int count = 0;\n        for(int i = 2; i <= n; i += 2) {\n            if(count % 2 == 0)\n                Console.Write(i + \" \");\n            count++;\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read limit n",
      "Initialize counter to 0",
      "Iterate even numbers from 2 to n",
      "If counter is even, print the number",
      "Increment counter each time"
    ],
    mathSolution: "Alternate even numbers are those at even positions in the list of evens.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use a separate counter to track the index of even numbers."
  },
  {
    id: 4,
    title: "Alternate Even Numbers Divisible by 4",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "pattern-printing",
    category: "Problem Solving",
    tags: ["divisibility", "alternate", "even numbers"],
    desc: "Given a limit n, print every second number among those that are even and divisible by 4.",
    examples: [
      { input: "20", output: "4 12 20", explanation: "Even numbers divisible by 4: 4,8,12,16,20; alternate gives 4,12,20." },
      { input: "30", output: "4 12 20 28", explanation: "Sequence: 4,8,12,16,20,24,28; alternate gives 4,12,20,28." }
    ],
    testCases: [
      { input: "20", output: "4 12 20" },
      { input: "30", output: "4 12 20 28" },
      { input: "10", output: "4" }
    ],
    constraints: ["1 <= n <= 1000"],
    videoId: "vAObDuT93oo",
    videoStart: 470,
    videoEnd: 605,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\ncount = 0\nfor i in range(2, n+1, 2):\n    if i % 4 == 0:\n        if count % 2 == 0:\n            print(i, end=' ')\n        count += 1",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int count = 0;\n        for(int i = 2; i <= n; i += 2) {\n            if(i % 4 == 0) {\n                if(count % 2 == 0)\n                    System.out.print(i + \" \");\n                count++;\n            }\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int count = 0;\n    for(int i = 2; i <= n; i += 2) {\n        if(i % 4 == 0) {\n            if(count % 2 == 0)\n                cout << i << \" \";\n            count++;\n        }\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int count = 0;\n    for(int i = 2; i <= n; i += 2) {\n        if(i % 4 == 0) {\n            if(count % 2 == 0)\n                printf(\"%d \", i);\n            count++;\n        }\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet count = 0;\nfor(let i = 2; i <= n; i += 2) {\n    if(i % 4 === 0) {\n        if(count % 2 === 0) process.stdout.write(i + ' ');\n        count++;\n    }\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int count = 0;\n        for(int i = 2; i <= n; i += 2) {\n            if(i % 4 == 0) {\n                if(count % 2 == 0)\n                    Console.Write(i + \" \");\n                count++;\n            }\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read limit n",
      "Initialize counter to 0",
      "Iterate even numbers from 2 to n",
      "If number is divisible by 4, check if counter is even",
      "If yes, print the number",
      "Increment counter"
    ],
    mathSolution: "Only numbers divisible by 4 are considered, then take alternate among them.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Filter numbers divisible by 4 first, then apply alternate selection."
  },
  {
    id: 5,
    title: "Print All Perfect Numbers in a Range",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "number-theory",
    category: "Problem Solving",
    tags: ["perfect number", "divisors", "range"],
    desc: "Given a range [start, end], print all perfect numbers (sum of proper divisors equals the number).",
    examples: [
      { input: "1 30", output: "6 28", explanation: "6 and 28 are perfect numbers (1+2+3=6, 1+2+4+7+14=28)." },
      { input: "1 100", output: "6 28", explanation: "Only 6 and 28 in 1-100." }
    ],
    testCases: [
      { input: "1 30", output: "6 28" },
      { input: "1 100", output: "6 28" },
      { input: "1 500", output: "6 28 496" }
    ],
    constraints: ["1 <= start <= end <= 10000"],
    videoId: "vAObDuT93oo",
    videoStart: 816,
    videoEnd: 1015,
    starterCode: {
      python: "start, end = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "start, end = map(int, input().split())\nfor num in range(start, end+1):\n    s = 0\n    for i in range(1, num):\n        if num % i == 0:\n            s += i\n    if s == num:\n        print(num, end=' ')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int s = sc.nextInt(), e = sc.nextInt();\n        for(int num = s; num <= e; num++) {\n            int sum = 0;\n            for(int i = 1; i < num; i++) {\n                if(num % i == 0) sum += i;\n            }\n            if(sum == num) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int s, e; cin >> s >> e;\n    for(int num = s; num <= e; num++) {\n        int sum = 0;\n        for(int i = 1; i < num; i++) {\n            if(num % i == 0) sum += i;\n        }\n        if(sum == num) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int s, e; scanf(\"%d %d\",&s,&e);\n    for(int num = s; num <= e; num++) {\n        int sum = 0;\n        for(int i = 1; i < num; i++) {\n            if(num % i == 0) sum += i;\n        }\n        if(sum == num) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "const [s, e] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nfor(let num = s; num <= e; num++) {\n    let sum = 0;\n    for(let i = 1; i < num; i++) {\n        if(num % i === 0) sum += i;\n    }\n    if(sum === num) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int s = int.Parse(inp[0]), e = int.Parse(inp[1]);\n        for(int num = s; num <= e; num++) {\n            int sum = 0;\n            for(int i = 1; i < num; i++) {\n                if(num % i == 0) sum += i;\n            }\n            if(sum == num) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read start and end values",
      "For each number in the range, compute sum of its proper divisors",
      "If sum equals the number, print it"
    ],
    mathSolution: "A perfect number equals the sum of its proper divisors.",
    timeComplexity: "O((end-start+1) * sqrt(end))",
    spaceComplexity: "O(1)",
    hint: "Use nested loops: outer for numbers, inner for divisors up to sqrt(num)."
  },
  {
    id: 6,
    title: "Palindrome Numbers from 1 to 100",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "palindrome",
    category: "Problem Solving",
    tags: ["palindrome", "numbers", "range"],
    desc: "Print all palindrome numbers between 1 and 100. A palindrome number reads the same forwards and backwards.",
    examples: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99", explanation: "All single-digit numbers and two-digit palindromes with same digits." }
    ],
    testCases: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    if str(num) == str(num)[::-1]:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 100; i++) {\n            String s = Integer.toString(i);\n            String rev = new StringBuilder(s).reverse().toString();\n            if(s.equals(rev)) System.out.print(i + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 100; i++) {\n        string s = to_string(i);\n        string r = s;\n        reverse(r.begin(), r.end());\n        if(s == r) cout << i << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 100; i++) {\n        int rev = 0, temp = i;\n        while(temp > 0) {\n            rev = rev * 10 + temp % 10;\n            temp /= 10;\n        }\n        if(i == rev) printf(\"%d \", i);\n    }\n    return 0;\n}",
      javascript: "for(let i = 1; i <= 100; i++) {\n    const s = i.toString();\n    if(s === s.split('').reverse().join('')) process.stdout.write(i + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int i = 1; i <= 100; i++) {\n            string s = i.ToString();\n            char[] arr = s.ToCharArray();\n            Array.Reverse(arr);\n            if(s == new string(arr)) Console.Write(i + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Iterate numbers from 1 to 100",
      "Convert number to string",
      "Reverse the string and compare with original",
      "If equal, print the number"
    ],
    mathSolution: "A palindrome number remains unchanged when its digits are reversed.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "Use string reversal or digit extraction to check palindrome."
  },
  {
    id: 7,
    title: "Armstrong Numbers from 1 to 100",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "armstrong-number",
    category: "Problem Solving",
    tags: ["armstrong", "narcissistic", "range"],
    desc: "Print all Armstrong numbers (narcissistic numbers) between 1 and 100. An n-digit number is an Armstrong number if sum of its digits each raised to power n equals the number.",
    examples: [
      { input: "", output: "1 2 3 4 5 6 7 8 9", explanation: "Single-digit numbers are Armstrong numbers." }
    ],
    testCases: [
      { input: "", output: "1 2 3 4 5 6 7 8 9" }
    ],
    constraints: [],
    videoId: "qbsXaP_-2bE",
    videoStart: 357,
    videoEnd: 462,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    digits = len(str(num))\n    s = sum(int(d)**digits for d in str(num))\n    if s == num:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            int temp = num, sum = 0, digits = String.valueOf(num).length();\n            while(temp > 0) {\n                int d = temp % 10;\n                sum += Math.pow(d, digits);\n                temp /= 10;\n            }\n            if(sum == num) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, sum = 0, digits = to_string(num).length();\n        while(temp > 0) {\n            int d = temp % 10;\n            sum += pow(d, digits);\n            temp /= 10;\n        }\n        if(sum == num) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, sum = 0, digits = 0, n = num;\n        while(n > 0) { digits++; n /= 10; }\n        temp = num;\n        while(temp > 0) {\n            int d = temp % 10;\n            sum += pow(d, digits);\n            temp /= 10;\n        }\n        if(sum == num) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    const s = num.toString();\n    let sum = 0;\n    for(let ch of s) sum += Math.pow(parseInt(ch), s.length);\n    if(sum === num) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            string s = num.ToString();\n            int sum = 0;\n            foreach(char c in s) sum += (int)Math.Pow(c - '0', s.Length);\n            if(sum == num) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "For each number from 1 to 100",
      "Count the number of digits",
      "Compute sum of each digit raised to the power of digit count",
      "If sum equals the number, print it"
    ],
    mathSolution: "Armstrong numbers satisfy sum of digit powers = number.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "Use digit extraction and Math.pow for the calculation."
  },
  {
    id: 8,
    title: "Perfect Numbers from 1 to 100",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "number-theory",
    category: "Problem Solving",
    tags: ["perfect number", "range", "divisors"],
    desc: "Find and print all perfect numbers between 1 and 100.",
    examples: [
      { input: "", output: "6 28", explanation: "6 and 28 are perfect numbers (1+2+3=6, 1+2+4+7+14=28)." }
    ],
    testCases: [
      { input: "", output: "6 28" }
    ],
    constraints: [],
    videoId: "qbsXaP_-2bE",
    videoStart: 536,
    videoEnd: 654,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    s = 0\n    for i in range(1, num):\n        if num % i == 0: s += i\n    if s == num: print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            int sum = 0;\n            for(int i = 1; i < num; i++) {\n                if(num % i == 0) sum += i;\n            }\n            if(sum == num) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int sum = 0;\n        for(int i = 1; i < num; i++) {\n            if(num % i == 0) sum += i;\n        }\n        if(sum == num) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int sum = 0;\n        for(int i = 1; i < num; i++) {\n            if(num % i == 0) sum += i;\n        }\n        if(sum == num) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    let sum = 0;\n    for(let i = 1; i < num; i++) {\n        if(num % i === 0) sum += i;\n    }\n    if(sum === num) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            int sum = 0;\n            for(int i = 1; i < num; i++) {\n                if(num % i == 0) sum += i;\n            }\n            if(sum == num) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Loop numbers 1 to 100",
      "For each number, compute sum of its proper divisors",
      "If sum equals the number, print it"
    ],
    mathSolution: "A perfect number equals the sum of its proper divisors.",
    timeComplexity: "O(100 * 100)",
    spaceComplexity: "O(1)",
    hint: "Proper divisors exclude the number itself."
  },
  {
    id: 9,
    title: "Prime Numbers in a Given Interval",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "prime-numbers",
    category: "Problem Solving",
    tags: ["prime", "range", "loops"],
    desc: "Given a range [start, end], print all prime numbers in that interval.",
    examples: [
      { input: "1 50", output: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47", explanation: "All primes up to 50." },
      { input: "10 20", output: "11 13 17 19", explanation: "Primes between 10 and 20." }
    ],
    testCases: [
      { input: "1 50", output: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47" },
      { input: "10 20", output: "11 13 17 19" },
      { input: "100 110", output: "101 103 107 109" }
    ],
    constraints: ["1 <= start <= end <= 10000"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "start, end = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "start, end = map(int, input().split())\nfor num in range(start, end+1):\n    if num > 1:\n        for i in range(2, int(num**0.5)+1):\n            if num % i == 0: break\n        else:\n            print(num, end=' ')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int s = sc.nextInt(), e = sc.nextInt();\n        for(int num = s; num <= e; num++) {\n            if(num < 2) continue;\n            boolean prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int s, e; cin >> s >> e;\n    for(int num = s; num <= e; num++) {\n        if(num < 2) continue;\n        bool prime = true;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = false; break; }\n        }\n        if(prime) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int s, e; scanf(\"%d %d\",&s,&e);\n    for(int num = s; num <= e; num++) {\n        if(num < 2) continue;\n        int prime = 1;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = 0; break; }\n        }\n        if(prime) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "const [s, e] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nfor(let num = s; num <= e; num++) {\n    if(num < 2) continue;\n    let prime = true;\n    for(let i = 2; i * i <= num; i++) {\n        if(num % i === 0) { prime = false; break; }\n    }\n    if(prime) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int s = int.Parse(inp[0]), e = int.Parse(inp[1]);\n        for(int num = s; num <= e; num++) {\n            if(num < 2) continue;\n            bool prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read start and end values",
      "For each number in range, check if it is prime",
      "If prime, print it"
    ],
    mathSolution: "A prime number has no divisors other than 1 and itself.",
    timeComplexity: "O((end-start+1) * sqrt(end))",
    spaceComplexity: "O(1)",
    hint: "Optimize primality check by iterating up to √num."
  },
  {
    id: 10,
    title: "Count and Sum of Primes from 50 to 500",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "prime-numbers",
    category: "Problem Solving",
    tags: ["prime", "count", "sum", "range"],
    desc: "Count all prime numbers between 50 and 500 (inclusive) and compute their sum.",
    examples: [
      { input: "", output: "Count=95 Sum=21536", explanation: "As given in the PDF." }
    ],
    testCases: [
      { input: "", output: "Count=95 Sum=21536" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "count = 0; total = 0\nfor num in range(50, 501):\n    if num > 1:\n        for i in range(2, int(num**0.5)+1):\n            if num % i == 0: break\n        else:\n            count += 1; total += num\nprint(f'Count={count} Sum={total}')",
      java: "public class Main {\n    public static void main(String[] args) {\n        int count = 0, sum = 0;\n        for(int num = 50; num <= 500; num++) {\n            boolean prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime && num > 1) {\n                count++;\n                sum += num;\n            }\n        }\n        System.out.println(\"Count=\" + count + \" Sum=\" + sum);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int count = 0, sum = 0;\n    for(int num = 50; num <= 500; num++) {\n        bool prime = true;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = false; break; }\n        }\n        if(prime && num > 1) {\n            count++;\n            sum += num;\n        }\n    }\n    cout << \"Count=\" << count << \" Sum=\" << sum;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int count = 0, sum = 0;\n    for(int num = 50; num <= 500; num++) {\n        int prime = 1;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = 0; break; }\n        }\n        if(prime && num > 1) {\n            count++;\n            sum += num;\n        }\n    }\n    printf(\"Count=%d Sum=%d\", count, sum);\n    return 0;\n}",
      javascript: "let count = 0, sum = 0;\nfor(let num = 50; num <= 500; num++) {\n    let prime = true;\n    for(let i = 2; i * i <= num; i++) {\n        if(num % i === 0) { prime = false; break; }\n    }\n    if(prime && num > 1) {\n        count++;\n        sum += num;\n    }\n}\nconsole.log(`Count=${count} Sum=${sum}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int count = 0, sum = 0;\n        for(int num = 50; num <= 500; num++) {\n            bool prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime && num > 1) {\n                count++;\n                sum += num;\n            }\n        }\n        Console.WriteLine($\"Count={count} Sum={sum}\");\n    }\n}"
    },
    algorithmSteps: [
      "Initialize count and sum to 0",
      "Loop numbers from 50 to 500",
      "Check if the number is prime",
      "If prime, increment count and add to sum",
      "Output count and sum"
    ],
    mathSolution: "Primes are numbers with exactly two divisors.",
    timeComplexity: "O(500 * √500)",
    spaceComplexity: "O(1)",
    hint: "Use the same prime-checking method as before."
  },
  {
    id: 11,
    title: "Largest Prime in a Range",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "prime-numbers",
    category: "Problem Solving",
    tags: ["prime", "range", "maximum"],
    desc: "Given a range [start, end], find the largest prime number in that range.",
    examples: [
      { input: "10 50", output: "47", explanation: "The largest prime ≤50 is 47." },
      { input: "1 10", output: "7", explanation: "The largest prime up to 10 is 7." }
    ],
    testCases: [
      { input: "10 50", output: "47" },
      { input: "1 10", output: "7" },
      { input: "20 30", output: "29" }
    ],
    constraints: ["1 <= start <= end <= 10000"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "start, end = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int start, end; cin >> start >> end;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int start, end; scanf(\"%d %d\",&start,&end);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [start, end] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int start = int.Parse(input[0]);\n        int end = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "start, end = map(int, input().split())\nlargest = None\nfor num in range(end, start-1, -1):\n    if num > 1:\n        for i in range(2, int(num**0.5)+1):\n            if num % i == 0: break\n        else:\n            largest = num\n            break\nprint(largest if largest else 'No prime')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int s = sc.nextInt(), e = sc.nextInt();\n        int largest = -1;\n        for(int num = e; num >= s; num--) {\n            if(num < 2) continue;\n            boolean prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime) { largest = num; break; }\n        }\n        System.out.println(largest);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int s, e; cin >> s >> e;\n    int largest = -1;\n    for(int num = e; num >= s; num--) {\n        if(num < 2) continue;\n        bool prime = true;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = false; break; }\n        }\n        if(prime) { largest = num; break; }\n    }\n    cout << largest;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int s, e; scanf(\"%d %d\",&s,&e);\n    int largest = -1;\n    for(int num = e; num >= s; num--) {\n        if(num < 2) continue;\n        int prime = 1;\n        for(int i = 2; i * i <= num; i++) {\n            if(num % i == 0) { prime = 0; break; }\n        }\n        if(prime) { largest = num; break; }\n    }\n    printf(\"%d\", largest);\n    return 0;\n}",
      javascript: "const [s, e] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nlet largest = -1;\nfor(let num = e; num >= s; num--) {\n    if(num < 2) continue;\n    let prime = true;\n    for(let i = 2; i * i <= num; i++) {\n        if(num % i === 0) { prime = false; break; }\n    }\n    if(prime) { largest = num; break; }\n}\nconsole.log(largest);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] inp = Console.ReadLine().Split();\n        int s = int.Parse(inp[0]), e = int.Parse(inp[1]);\n        int largest = -1;\n        for(int num = e; num >= s; num--) {\n            if(num < 2) continue;\n            bool prime = true;\n            for(int i = 2; i * i <= num; i++) {\n                if(num % i == 0) { prime = false; break; }\n            }\n            if(prime) { largest = num; break; }\n        }\n        Console.WriteLine(largest);\n    }\n}"
    },
    algorithmSteps: [
      "Read start and end values",
      "Loop from end down to start",
      "Check each number for primality",
      "Stop at the first prime found (largest)",
      "Print the prime or -1 if none"
    ],
    mathSolution: "The largest prime is found by checking from the top downwards.",
    timeComplexity: "O((end-start+1) * √end)",
    spaceComplexity: "O(1)",
    hint: "Traverse from end to start to find largest quickly."
  },
  {
    id: 12,
    title: "Harshad Numbers from 1 to 100",
    difficulty: "hard",
    topic: "range-problems",
    subtopic: "digit-sum",
    category: "Problem Solving",
    tags: ["Harshad", "Niven", "digit sum", "range"],
    desc: "Print all Harshad (Niven) numbers between 1 and 100 (divisible by sum of digits).",
    examples: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 10 12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100", explanation: "Numbers divisible by the sum of their digits." }
    ],
    testCases: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 10 12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    s = sum(int(d) for d in str(num))\n    if num % s == 0:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            int temp = num, sum = 0;\n            while(temp > 0) {\n                sum += temp % 10;\n                temp /= 10;\n            }\n            if(num % sum == 0) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, sum = 0;\n        while(temp > 0) {\n            sum += temp % 10;\n            temp /= 10;\n        }\n        if(num % sum == 0) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, sum = 0;\n        while(temp > 0) {\n            sum += temp % 10;\n            temp /= 10;\n        }\n        if(num % sum == 0) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    let sum = 0, temp = num;\n    while(temp > 0) { sum += temp % 10; temp = Math.floor(temp / 10); }\n    if(num % sum === 0) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            int sum = 0, temp = num;\n            while(temp > 0) { sum += temp % 10; temp /= 10; }\n            if(num % sum == 0) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "For each number 1 to 100, compute sum of its digits",
      "Check if the number is divisible by its digit sum",
      "If yes, print the number"
    ],
    mathSolution: "Harshad numbers are divisible by the sum of their digits.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "Sum digits by extracting each digit with modulo."
  },
  {
    id: 13,
    title: "Spy Numbers from 1 to 100",
    difficulty: "hard",
    topic: "range-problems",
    subtopic: "digit-sum",
    category: "Problem Solving",
    tags: ["spy number", "digit sum", "digit product", "range"],
    desc: "Print all spy numbers from 1 to 100. A spy number has sum of digits equal to product of digits.",
    examples: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 22", explanation: "1-9 have sum=product; 22: 2+2=4, 2*2=4." }
    ],
    testCases: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 22" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    s = 0; p = 1; temp = num\n    while temp > 0:\n        d = temp % 10\n        s += d; p *= d\n        temp //= 10\n    if s == p:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            int sum = 0, prod = 1, temp = num;\n            while(temp > 0) {\n                int d = temp % 10;\n                sum += d; prod *= d;\n                temp /= 10;\n            }\n            if(sum == prod) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int sum = 0, prod = 1, temp = num;\n        while(temp > 0) {\n            int d = temp % 10;\n            sum += d; prod *= d;\n            temp /= 10;\n        }\n        if(sum == prod) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int sum = 0, prod = 1, temp = num;\n        while(temp > 0) {\n            int d = temp % 10;\n            sum += d; prod *= d;\n            temp /= 10;\n        }\n        if(sum == prod) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    let sum = 0, prod = 1, temp = num;\n    while(temp > 0) {\n        let d = temp % 10;\n        sum += d; prod *= d;\n        temp = Math.floor(temp / 10);\n    }\n    if(sum === prod) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            int sum = 0, prod = 1, temp = num;\n            while(temp > 0) {\n                int d = temp % 10;\n                sum += d; prod *= d;\n                temp /= 10;\n            }\n            if(sum == prod) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Loop numbers 1 to 100",
      "For each number, compute sum and product of digits",
      "If sum equals product, print the number"
    ],
    mathSolution: "Spy numbers satisfy sum of digits = product of digits.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "For two-digit numbers, only 22 works in this range."
  },
  {
    id: 14,
    title: "Duck Numbers from 1 to 100",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "digit-zero",
    category: "Problem Solving",
    tags: ["duck number", "digit zero", "range"],
    desc: "Print all duck numbers from 1 to 100. A duck number contains at least one zero, but not as the first digit.",
    examples: [
      { input: "", output: "10 20 30 40 50 60 70 80 90 100", explanation: "Numbers with zero in them (excluding leading zero)." }
    ],
    testCases: [
      { input: "", output: "10 20 30 40 50 60 70 80 90 100" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    s = str(num)\n    if '0' in s[1:]:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            String s = Integer.toString(num);\n            if(s.indexOf('0') > 0) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        string s = to_string(num);\n        if(s.find('0') != string::npos && s[0] != '0')\n            cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    for(int num = 10; num <= 100; num++) {\n        int temp = num;\n        int hasZero = 0;\n        while(temp > 0) {\n            if(temp % 10 == 0) { hasZero = 1; break; }\n            temp /= 10;\n        }\n        if(hasZero) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    let s = num.toString();\n    if(s.includes('0') && s[0] !== '0') process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            string s = num.ToString();\n            if(s.Contains('0') && s[0] != '0') Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Loop numbers 1 to 100",
      "Convert number to string",
      "Check if string contains '0' after the first character",
      "Print if true"
    ],
    mathSolution: "Duck numbers have at least one zero, but the first digit is non-zero.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "Ignore the leading digit when checking for zero."
  },
  {
    id: 15,
    title: "Automorphic Numbers from 1 to 1000",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "automorphic-number",
    category: "Problem Solving",
    tags: ["automorphic", "square", "range"],
    desc: "Print all automorphic numbers up to 1000. An automorphic number's square ends with the number itself.",
    examples: [
      { input: "", output: "1 5 6 25 76 376 625", explanation: "5^2=25 ends with 5, 25^2=625 ends with 25, 376^2=141376 ends with 376, etc." }
    ],
    testCases: [
      { input: "", output: "1 5 6 25 76 376 625" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 1001):\n    square = num * num\n    if str(square).endswith(str(num)):\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 1000; num++) {\n            long sq = (long)num * num;\n            if(String.valueOf(sq).endsWith(String.valueOf(num)))\n                System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 1000; num++) {\n        long long sq = (long long)num * num;\n        string s = to_string(sq), t = to_string(num);\n        if(s.size() >= t.size() && s.substr(s.size() - t.size()) == t)\n            cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    for(int num = 1; num <= 1000; num++) {\n        int sq = num * num;\n        char s[10], t[10];\n        sprintf(s, \"%d\", sq);\n        sprintf(t, \"%d\", num);\n        int slen = strlen(s), tlen = strlen(t);\n        if(slen >= tlen && strcmp(s + slen - tlen, t) == 0)\n            printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 1000; num++) {\n    let sq = num * num;\n    if(sq.toString().endsWith(num.toString())) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 1000; num++) {\n            long sq = (long)num * num;\n            if(sq.ToString().EndsWith(num.ToString())) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Loop numbers 1 to 1000",
      "Compute square of the number",
      "Check if the square ends with the original number",
      "Print if true"
    ],
    mathSolution: "Automorphic numbers appear at the end of their square.",
    timeComplexity: "O(1000 * log10(1000))",
    spaceComplexity: "O(1)",
    hint: "Use string suffix matching for simplicity."
  },
  {
    id: 16,
    title: "Disarium Numbers from 1 to 100",
    difficulty: "easy",
    topic: "range-problems",
    subtopic: "disarium-number",
    category: "Problem Solving",
    tags: ["disarium", "digit power", "range"],
    desc: "Print all Disarium numbers between 1 and 100. A Disarium number equals the sum of its digits each raised to its position (starting from 1).",
    examples: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 89", explanation: "89: 8^1 + 9^2 = 8 + 81 = 89." }
    ],
    testCases: [
      { input: "", output: "1 2 3 4 5 6 7 8 9 89" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "for num in range(1, 101):\n    s = str(num)\n    total = sum(int(d)**(i+1) for i, d in enumerate(s))\n    if total == num:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            String s = Integer.toString(num);\n            int sum = 0;\n            for(int i = 0; i < s.length(); i++) {\n                int d = s.charAt(i) - '0';\n                sum += Math.pow(d, i + 1);\n            }\n            if(sum == num) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        string s = to_string(num);\n        int sum = 0;\n        for(int i = 0; i < s.length(); i++) {\n            int d = s[i] - '0';\n            sum += pow(d, i + 1);\n        }\n        if(sum == num) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\n#include <string.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        char s[5];\n        sprintf(s, \"%d\", num);\n        int len = strlen(s), sum = 0;\n        for(int i = 0; i < len; i++) {\n            int d = s[i] - '0';\n            sum += pow(d, i + 1);\n        }\n        if(sum == num) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "for(let num = 1; num <= 100; num++) {\n    let s = num.toString();\n    let sum = 0;\n    for(let i = 0; i < s.length; i++) sum += Math.pow(parseInt(s[i]), i + 1);\n    if(sum === num) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        for(int num = 1; num <= 100; num++) {\n            string s = num.ToString();\n            int sum = 0;\n            for(int i = 0; i < s.Length; i++) {\n                int d = int.Parse(s[i].ToString());\n                sum += (int)Math.Pow(d, i + 1);\n            }\n            if(sum == num) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "For each number 1 to 100",
      "Convert number to string to access digit positions",
      "Compute sum of digit^(position+1)",
      "If sum equals the number, print it"
    ],
    mathSolution: "Disarium numbers satisfy sum of digit^position = number.",
    timeComplexity: "O(100 * log10(100))",
    spaceComplexity: "O(1)",
    hint: "Position starts from 1 for the leftmost digit."
  },
  {
    id: 17,
    title: "Peterson Numbers from 1 to 500",
    difficulty: "medium",
    topic: "range-problems",
    subtopic: "peterson-number",
    category: "Problem Solving",
    tags: ["peterson", "factorial", "digit factorial sum", "range"],
    desc: "Print all Peterson numbers up to 500. A Peterson number equals the sum of factorials of its digits.",
    examples: [
      { input: "", output: "1 2 145", explanation: "1! =1, 2! =2, 145: 1!+4!+5! = 1+24+120=145." }
    ],
    testCases: [
      { input: "", output: "1 2 145" }
    ],
    constraints: [],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "# Write your code here",
      java: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      javascript: "// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "fact = [1,1,2,6,24,120,720,5040,40320,362880]\nfor num in range(1, 501):\n    s = 0\n    temp = num\n    while temp > 0:\n        s += fact[temp % 10]\n        temp //= 10\n    if s == num:\n        print(num, end=' ')",
      java: "public class Main {\n    public static void main(String[] args) {\n        int[] fact = {1,1,2,6,24,120,720,5040,40320,362880};\n        for(int num = 1; num <= 500; num++) {\n            int sum = 0, temp = num;\n            while(temp > 0) {\n                sum += fact[temp % 10];\n                temp /= 10;\n            }\n            if(sum == num) System.out.print(num + \" \");\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int fact[] = {1,1,2,6,24,120,720,5040,40320,362880};\n    for(int num = 1; num <= 500; num++) {\n        int sum = 0, temp = num;\n        while(temp > 0) {\n            sum += fact[temp % 10];\n            temp /= 10;\n        }\n        if(sum == num) cout << num << \" \";\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int fact[] = {1,1,2,6,24,120,720,5040,40320,362880};\n    for(int num = 1; num <= 500; num++) {\n        int sum = 0, temp = num;\n        while(temp > 0) {\n            sum += fact[temp % 10];\n            temp /= 10;\n        }\n        if(sum == num) printf(\"%d \", num);\n    }\n    return 0;\n}",
      javascript: "const fact = [1,1,2,6,24,120,720,5040,40320,362880];\nfor(let num = 1; num <= 500; num++) {\n    let sum = 0, temp = num;\n    while(temp > 0) {\n        sum += fact[temp % 10];\n        temp = Math.floor(temp / 10);\n    }\n    if(sum === num) process.stdout.write(num + ' ');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int[] fact = {1,1,2,6,24,120,720,5040,40320,362880};\n        for(int num = 1; num <= 500; num++) {\n            int sum = 0, temp = num;\n            while(temp > 0) {\n                sum += fact[temp % 10];\n                temp /= 10;\n            }\n            if(sum == num) Console.Write(num + \" \");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Precompute factorials of digits 0-9",
      "Loop numbers 1 to 500",
      "For each number, compute sum of factorials of its digits",
      "If sum equals the number, print it"
    ],
    mathSolution: "Peterson numbers equal the sum of digit factorials.",
    timeComplexity: "O(500 * log10(500))",
    spaceComplexity: "O(1)",
    hint: "Precompute factorials for efficiency."
  }
];



// Export
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...rangeProblems.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", rangeProblems.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = rangeProblems;
}

