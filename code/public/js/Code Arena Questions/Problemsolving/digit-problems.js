// ============================================================
// DIGIT QUESTIONS
// ============================================================

  const digitProblem = [
 {
    id: 1,
    title: "Reverse a Number",
    difficulty: "easy",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "reverse", "modulo"],
    desc: "Given an integer <code>n</code>, reverse its digits and print the reversed number.",
    examples: [
      { input: "n = 12345", output: "54321", explanation: "Reversing 12345 gives 54321" },
      { input: "n = 100", output: "1", explanation: "Reversing 100 gives 1 (leading zeros are dropped)" },
      { input: "n = 121", output: "121", explanation: "121 reversed is 121 (palindrome)" }
    ],
    testCases: [
      { input: "12345", output: "54321" },
      { input: "100", output: "1" },
      { input: "121", output: "121" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: "_cc0wRUTumA",
    videoStart: 994,
    videoEnd: 1229,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nrev = 0\nwhile n > 0:\n    digit = n % 10\n    rev = rev * 10 + digit\n    n //= 10\nprint(rev)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        System.out.println(rev);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    cout << rev;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    printf(\"%d\", rev);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet rev = 0;\nlet num = n;\nwhile (num > 0) {\n    rev = rev * 10 + (num % 10);\n    num = Math.floor(num / 10);\n}\nconsole.log(rev);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        Console.WriteLine(rev);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize rev = 0",
      "While n > 0: extract digit = n % 10",
      "Update rev = rev * 10 + digit",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print rev"
    ],
    mathSolution: "Each extracted digit is added to rev after shifting rev left by one decimal place.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use formula: rev = rev * 10 + (n % 10) to build reversed number."
  },
{
    id: 2,
    title: "Find Sum, Count and Product of Digits",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "sum", "count", "product", "modulo"],
    desc: "Given an integer <code>n</code>, find the sum, count and product of its digits.",
    examples: [
      { input: "n = 46425", output: "Sum of digits = 21\nCount of digits = 5\nProduct of digits = 960", explanation: "4+6+4+2+5 = 21, 5 digits, 4×6×4×2×5 = 960" },
      { input: "n = 123", output: "Sum of digits = 6\nCount of digits = 3\nProduct of digits = 6", explanation: "1+2+3 = 6, 3 digits, 1×2×3 = 6" }
    ],
    testCases: [
      { input: "46425", output: "Sum of digits = 21\nCount of digits = 5\nProduct of digits = 960" },
      { input: "123", output: "Sum of digits = 6\nCount of digits = 3\nProduct of digits = 6" },
      { input: "505", output: "Sum of digits = 10\nCount of digits = 3\nProduct of digits = 0" },
      { input: "7", output: "Sum of digits = 7\nCount of digits = 1\nProduct of digits = 7" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: "_cc0wRUTumA",
    videoStart: 220,
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
      python: "n = int(input())\ntemp = n\nsum_d = 0\ncount = 0\nproduct = 1\nif n == 0:\n    sum_d = 0\n    count = 1\n    product = 0\nelse:\n    while temp > 0:\n        digit = temp % 10\n        sum_d += digit\n        product *= digit\n        count += 1\n        temp //= 10\nprint(f\"Sum of digits = {sum_d}\")\nprint(f\"Count of digits = {count}\")\nprint(f\"Product of digits = {product}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int temp = n, sum = 0, count = 0, product = 1;\n        if (n == 0) {\n            sum = 0; count = 1; product = 0;\n        } else {\n            while (temp > 0) {\n                int digit = temp % 10;\n                sum += digit;\n                product *= digit;\n                count++;\n                temp /= 10;\n            }\n        }\n        System.out.println(\"Sum of digits = \" + sum);\n        System.out.println(\"Count of digits = \" + count);\n        System.out.println(\"Product of digits = \" + product);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int temp = n, sum = 0, count = 0, product = 1;\n    if (n == 0) {\n        sum = 0; count = 1; product = 0;\n    } else {\n        while (temp > 0) {\n            int digit = temp % 10;\n            sum += digit;\n            product *= digit;\n            count++;\n            temp /= 10;\n        }\n    }\n    cout << \"Sum of digits = \" << sum << \"\\n\";\n    cout << \"Count of digits = \" << count << \"\\n\";\n    cout << \"Product of digits = \" << product;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int temp = n, sum = 0, count = 0, product = 1;\n    if (n == 0) {\n        sum = 0; count = 1; product = 0;\n    } else {\n        while (temp > 0) {\n            int digit = temp % 10;\n            sum += digit;\n            product *= digit;\n            count++;\n            temp /= 10;\n        }\n    }\n    printf(\"Sum of digits = %d\\n\", sum);\n    printf(\"Count of digits = %d\\n\", count);\n    printf(\"Product of digits = %d\", product);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet temp = n, sum = 0, count = 0, product = 1;\nif (n === 0) {\n    sum = 0; count = 1; product = 0;\n} else {\n    while (temp > 0) {\n        let digit = temp % 10;\n        sum += digit;\n        product *= digit;\n        count++;\n        temp = Math.floor(temp / 10);\n    }\n}\nconsole.log(`Sum of digits = ${sum}`);\nconsole.log(`Count of digits = ${count}`);\nconsole.log(`Product of digits = ${product}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int temp = n, sum = 0, count = 0, product = 1;\n        if (n == 0) {\n            sum = 0; count = 1; product = 0;\n        } else {\n            while (temp > 0) {\n                int digit = temp % 10;\n                sum += digit;\n                product *= digit;\n                count++;\n                temp /= 10;\n            }\n        }\n        Console.WriteLine($\"Sum of digits = {sum}\");\n        Console.WriteLine($\"Count of digits = {count}\");\n        Console.WriteLine($\"Product of digits = {product}\");\n    }\n}"
    },
    algorithmSteps: [
      "Handle special case n = 0 separately",
      "Initialize sum = 0, count = 0, product = 1",
      "While n > 0: extract digit = n % 10",
      "Add digit to sum, multiply to product, increment count",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print sum, count, and product"
    ],
    mathSolution: "Extract digits using modulo 10, then divide by 10 to remove last digit.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use modulo (%) to get last digit and division (/) to remove it. Handle n=0 separately."
  },
  {
    id: 3,
    title: "Maximum Digit in a Number",
    difficulty: "easy",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "maximum", "modulo"],
    desc: "Given an integer <code>n</code>, find and print the maximum digit present in it.",
    examples: [
      { input: "n = 59342", output: "9", explanation: "Digits are 5,9,3,4,2, maximum is 9" },
      { input: "n = 1000", output: "1", explanation: "Digits are 1,0,0,0, maximum is 1" },
      { input: "n = 888", output: "8", explanation: "All digits are 8, maximum is 8" }
    ],
    testCases: [
      { input: "59342", output: "9" },
      { input: "1000", output: "1" },
      { input: "888", output: "8" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: "_cc0wRUTumA",
    videoStart: 226,
    videoEnd: 395,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\nmax_digit = 0\nif n == 0:\n    max_digit = 0\nelse:\n    while n > 0:\n        digit = n % 10\n        if digit > max_digit:\n            max_digit = digit\n        n //= 10\nprint(max_digit)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int maxDigit = 0;\n        if (n == 0) maxDigit = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit > maxDigit) maxDigit = digit;\n                n /= 10;\n            }\n        }\n        System.out.println(maxDigit);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int maxDigit = 0;\n    if (n == 0) maxDigit = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > maxDigit) maxDigit = digit;\n            n /= 10;\n        }\n    }\n    cout << maxDigit;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int maxDigit = 0;\n    if (n == 0) maxDigit = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > maxDigit) maxDigit = digit;\n            n /= 10;\n        }\n    }\n    printf(\"%d\", maxDigit);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet maxDigit = 0;\nlet num = n;\nif (num === 0) maxDigit = 0;\nelse {\n    while (num > 0) {\n        let digit = num % 10;\n        if (digit > maxDigit) maxDigit = digit;\n        num = Math.floor(num / 10);\n    }\n}\nconsole.log(maxDigit);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int maxDigit = 0;\n        if (n == 0) maxDigit = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit > maxDigit) maxDigit = digit;\n                n /= 10;\n            }\n        }\n        Console.WriteLine(maxDigit);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize maxDigit = 0",
      "While n > 0: extract digit = n % 10",
      "If digit > maxDigit, update maxDigit",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print maxDigit"
    ],
    mathSolution: "Compare each digit with current maximum and update accordingly.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Initialize max with 0 and update when a larger digit is found."
  },
  {
    id: 4,
    title: "Check if Digits are in Increasing Order",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "increasing-order", "string"],
    desc: "Given an integer <code>n</code>, check whether its digits are in strictly increasing order from left to right.",
    examples: [
      { input: "n = 12349", output: "Digits are in increasing order", explanation: "1<2<3<4<9, so increasing order" },
      { input: "n = 1223", output: "Digits are not in increasing order", explanation: "2 is not less than 2" },
      { input: "n = 5", output: "Digits are in increasing order", explanation: "Single digit is always in order" }
    ],
    testCases: [
      { input: "12349", output: "Digits are in increasing order" },
      { input: "1223", output: "Digits are not in increasing order" },
      { input: "5", output: "Digits are in increasing order" },
      { input: "13579", output: "Digits are in increasing order" }
    ],
    constraints: ["0 <= n <= 10^9"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char n[100]; scanf(\"%s\", n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string n = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = input()\nflag = True\nfor i in range(len(n) - 1):\n    if n[i] >= n[i + 1]:\n        flag = False\n        break\nif flag:\n    print(\"Digits are in increasing order\")\nelse:\n    print(\"Digits are not in increasing order\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next();\n        boolean flag = true;\n        for (int i = 0; i < n.length() - 1; i++) {\n            if (n.charAt(i) >= n.charAt(i + 1)) {\n                flag = false;\n                break;\n            }\n        }\n        if (flag) System.out.println(\"Digits are in increasing order\");\n        else System.out.println(\"Digits are not in increasing order\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string n; cin >> n;\n    bool flag = true;\n    for (int i = 0; i < n.length() - 1; i++) {\n        if (n[i] >= n[i + 1]) {\n            flag = false;\n            break;\n        }\n    }\n    if (flag) cout << \"Digits are in increasing order\";\n    else cout << \"Digits are not in increasing order\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char n[100]; scanf(\"%s\", n);\n    int flag = 1;\n    for (int i = 0; i < strlen(n) - 1; i++) {\n        if (n[i] >= n[i + 1]) {\n            flag = 0;\n            break;\n        }\n    }\n    if (flag) printf(\"Digits are in increasing order\");\n    else printf(\"Digits are not in increasing order\");\n    return 0;\n}",
      javascript: "const n = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet flag = true;\nfor (let i = 0; i < n.length - 1; i++) {\n    if (n[i] >= n[i + 1]) {\n        flag = false;\n        break;\n    }\n}\nif (flag) console.log(\"Digits are in increasing order\");\nelse console.log(\"Digits are not in increasing order\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string n = Console.ReadLine();\n        bool flag = true;\n        for (int i = 0; i < n.Length - 1; i++) {\n            if (n[i] >= n[i + 1]) {\n                flag = false;\n                break;\n            }\n        }\n        if (flag) Console.WriteLine(\"Digits are in increasing order\");\n        else Console.WriteLine(\"Digits are not in increasing order\");\n    }\n}"
    },
    algorithmSteps: [
      "Convert number to string to preserve digit order",
      "Initialize flag = true",
      "Loop i from 0 to length-2",
      "Compare current digit with next digit",
      "If current >= next, set flag = false and break",
      "After loop, print result based on flag"
    ],
    mathSolution: "Each digit must be strictly smaller than the digit to its right.",
    timeComplexity: "O(d) where d is number of digits",
    spaceComplexity: "O(1)",
    hint: "Convert number to string for easy digit-by-digit comparison."
  },
  {
    id: 5,
    title: "Smallest Digit in a Number",
    difficulty: "easy",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "minimum", "modulo"],
    desc: "Given an integer <code>n</code>, find and print the smallest digit present in it.",
    examples: [
      { input: "n = 59342", output: "2", explanation: "Digits are 5,9,3,4,2, smallest is 2" },
      { input: "n = 1000", output: "0", explanation: "Digits are 1,0,0,0, smallest is 0" },
      { input: "n = 888", output: "8", explanation: "All digits are 8, smallest is 8" }
    ],
    testCases: [
      { input: "59342", output: "2" },
      { input: "1000", output: "0" },
      { input: "888", output: "8" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nsmall = 9\nif n == 0:\n    small = 0\nelse:\n    while n > 0:\n        digit = n % 10\n        if digit < small:\n            small = digit\n        n //= 10\nprint(small)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int small = 9;\n        if (n == 0) small = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit < small) small = digit;\n                n /= 10;\n            }\n        }\n        System.out.println(small);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int small = 9;\n    if (n == 0) small = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit < small) small = digit;\n            n /= 10;\n        }\n    }\n    cout << small;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int small = 9;\n    if (n == 0) small = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit < small) small = digit;\n            n /= 10;\n        }\n    }\n    printf(\"%d\", small);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet small = 9;\nlet num = n;\nif (num === 0) small = 0;\nelse {\n    while (num > 0) {\n        let digit = num % 10;\n        if (digit < small) small = digit;\n        num = Math.floor(num / 10);\n    }\n}\nconsole.log(small);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int small = 9;\n        if (n == 0) small = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit < small) small = digit;\n                n /= 10;\n            }\n        }\n        Console.WriteLine(small);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize small = 9 (largest possible digit)",
      "If n == 0, small = 0",
      "While n > 0: extract digit = n % 10",
      "If digit < small, update small",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print small"
    ],
    mathSolution: "Compare each digit with current minimum and update accordingly.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Initialize small with 9 and update when a smaller digit is found."
  },
  {
    id: 6,
    title: "Count Number of Digits",
    difficulty: "easy",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "count", "modulo"],
    desc: "Given an integer <code>n</code>, count and print the number of digits in it.",
    examples: [
      { input: "n = 45896", output: "5", explanation: "45896 has 5 digits" },
      { input: "n = 100", output: "3", explanation: "100 has 3 digits" },
      { input: "n = 7", output: "1", explanation: "7 has 1 digit" }
    ],
    testCases: [
      { input: "45896", output: "5" },
      { input: "100", output: "3" },
      { input: "7", output: "1" },
      { input: "0", output: "1" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\ncount = 0\nif n == 0:\n    count = 1\nelse:\n    while n > 0:\n        n //= 10\n        count += 1\nprint(count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int count = 0;\n        if (n == 0) count = 1;\n        else {\n            while (n > 0) {\n                n /= 10;\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int count = 0;\n    if (n == 0) count = 1;\n    else {\n        while (n > 0) {\n            n /= 10;\n            count++;\n        }\n    }\n    cout << count;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int count = 0;\n    if (n == 0) count = 1;\n    else {\n        while (n > 0) {\n            n /= 10;\n            count++;\n        }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet count = 0;\nlet num = n;\nif (num === 0) count = 1;\nelse {\n    while (num > 0) {\n        num = Math.floor(num / 10);\n        count++;\n    }\n}\nconsole.log(count);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int count = 0;\n        if (n == 0) count = 1;\n        else {\n            while (n > 0) {\n                n /= 10;\n                count++;\n            }\n        }\n        Console.WriteLine(count);\n    }\n}"
    },
    algorithmSteps: [
      "If n == 0, answer is 1",
      "Initialize count = 0",
      "While n > 0: remove last digit (n = n/10) and increment count",
      "Print count"
    ],
    mathSolution: "Keep dividing number by 10 until it becomes 0, counting each division.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use a loop to repeatedly divide the number by 10 until it becomes 0."
  },
  {
    id: 7,
    title: "Sum of Digits Until Single Digit (Digital Root)",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "digit-sum", "digital-root", "loop"],
    desc: "Given an integer <code>n</code>, keep adding its digits until the sum becomes a single digit (find digital root).",
    examples: [
      { input: "n = 987", output: "6", explanation: "9+8+7=24, 2+4=6" },
      { input: "n = 9999", output: "9", explanation: "9+9+9+9=36, 3+6=9" },
      { input: "n = 5", output: "5", explanation: "Single digit remains 5" }
    ],
    testCases: [
      { input: "987", output: "6" },
      { input: "9999", output: "9" },
      { input: "5", output: "5" },
      { input: "12345", output: "6" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nwhile n >= 10:\n    s = 0\n    while n > 0:\n        s += n % 10\n        n //= 10\n    n = s\nprint(n)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        while (n >= 10) {\n            int s = 0;\n            while (n > 0) {\n                s += n % 10;\n                n /= 10;\n            }\n            n = s;\n        }\n        System.out.println(n);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    while (n >= 10) {\n        int s = 0;\n        while (n > 0) {\n            s += n % 10;\n            n /= 10;\n        }\n        n = s;\n    }\n    cout << n;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    while (n >= 10) {\n        int s = 0;\n        while (n > 0) {\n            s += n % 10;\n            n /= 10;\n        }\n        n = s;\n    }\n    printf(\"%d\", n);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet num = n;\nwhile (num >= 10) {\n    let s = 0;\n    while (num > 0) {\n        s += num % 10;\n        num = Math.floor(num / 10);\n    }\n    num = s;\n}\nconsole.log(num);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        while (n >= 10) {\n            int s = 0;\n            while (n > 0) {\n                s += n % 10;\n                n /= 10;\n            }\n            n = s;\n        }\n        Console.WriteLine(n);\n    }\n}"
    },
    algorithmSteps: [
      "While number has more than 1 digit (n >= 10):",
      "  Initialize sum = 0",
      "  Extract each digit and add to sum",
      "  Set n = sum",
      "Print n"
    ],
    mathSolution: "This is also known as finding the digital root of a number.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    hint: "Use nested loops: outer loop runs until number is single digit, inner loop sums digits."
  },
  {
    id: 8,
    title: "Largest Digit in a Number",
    difficulty: "easy",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "maximum", "modulo"],
    desc: "Given an integer <code>n</code>, find and print the largest digit present in it.",
    examples: [
      { input: "n = 45826", output: "8", explanation: "Digits are 4,5,8,2,6, largest is 8" },
      { input: "n = 1000", output: "1", explanation: "Digits are 1,0,0,0, largest is 1" },
      { input: "n = 999", output: "9", explanation: "All digits are 9, largest is 9" }
    ],
    testCases: [
      { input: "45826", output: "8" },
      { input: "1000", output: "1" },
      { input: "999", output: "9" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nlargest = 0\nif n == 0:\n    largest = 0\nelse:\n    while n > 0:\n        digit = n % 10\n        if digit > largest:\n            largest = digit\n        n //= 10\nprint(largest)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int largest = 0;\n        if (n == 0) largest = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit > largest) largest = digit;\n                n /= 10;\n            }\n        }\n        System.out.println(largest);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int largest = 0;\n    if (n == 0) largest = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > largest) largest = digit;\n            n /= 10;\n        }\n    }\n    cout << largest;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int largest = 0;\n    if (n == 0) largest = 0;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > largest) largest = digit;\n            n /= 10;\n        }\n    }\n    printf(\"%d\", largest);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet largest = 0;\nlet num = n;\nif (num === 0) largest = 0;\nelse {\n    while (num > 0) {\n        let digit = num % 10;\n        if (digit > largest) largest = digit;\n        num = Math.floor(num / 10);\n    }\n}\nconsole.log(largest);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int largest = 0;\n        if (n == 0) largest = 0;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit > largest) largest = digit;\n                n /= 10;\n            }\n        }\n        Console.WriteLine(largest);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize largest = 0",
      "If n == 0, largest = 0",
      "While n > 0: extract digit = n % 10",
      "If digit > largest, update largest",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print largest"
    ],
    mathSolution: "Compare each digit with current maximum and update accordingly.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Initialize largest with 0 and update when a larger digit is found."
  },
  {
    id: 9,
    title: "Sum of Odd Digits in a Number",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "odd", "sum", "modulo"],
    desc: "Given an integer <code>n</code>, find and print the sum of all odd digits present in it.",
    examples: [
      { input: "n = 23954", output: "17", explanation: "Odd digits are 3,9,5, sum = 3+9+5=17" },
      { input: "n = 2468", output: "0", explanation: "No odd digits, sum = 0" },
      { input: "n = 1357", output: "16", explanation: "1+3+5+7=16" }
    ],
    testCases: [
      { input: "23954", output: "17" },
      { input: "2468", output: "0" },
      { input: "1357", output: "16" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nsum_odd = 0\nwhile n > 0:\n    digit = n % 10\n    if digit % 2 != 0:\n        sum_odd += digit\n    n //= 10\nprint(sum_odd)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sumOdd = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 != 0) sumOdd += digit;\n            n /= 10;\n        }\n        System.out.println(sumOdd);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int sumOdd = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 != 0) sumOdd += digit;\n        n /= 10;\n    }\n    cout << sumOdd;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int sumOdd = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 != 0) sumOdd += digit;\n        n /= 10;\n    }\n    printf(\"%d\", sumOdd);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet sumOdd = 0;\nlet num = n;\nwhile (num > 0) {\n    let digit = num % 10;\n    if (digit % 2 !== 0) sumOdd += digit;\n    num = Math.floor(num / 10);\n}\nconsole.log(sumOdd);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int sumOdd = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 != 0) sumOdd += digit;\n            n /= 10;\n        }\n        Console.WriteLine(sumOdd);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize sumOdd = 0",
      "While n > 0: extract digit = n % 10",
      "If digit is odd (digit % 2 != 0), add to sumOdd",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print sumOdd"
    ],
    mathSolution: "Odd digits are not divisible by 2 (remainder 1 when divided by 2).",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use modulo 2 to check if a digit is odd."
  },
  {
    id: 10,
    title: "Count Even and Odd Digits in a Number",
    difficulty: "hard",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "even", "odd", "count", "modulo"],
    desc: "Given an integer <code>n</code>, count how many even digits and how many odd digits are present.",
    examples: [
      { input: "n = 45826", output: "Even digits: 4, Odd digits: 1", explanation: "Even: 4,8,2,6 (4 counts), Odd: 5 (1 count)" },
      { input: "n = 12345", output: "Even digits: 2, Odd digits: 3", explanation: "Even: 2,4 (2 counts), Odd: 1,3,5 (3 counts)" }
    ],
    testCases: [
      { input: "45826", output: "Even digits: 4, Odd digits: 1" },
      { input: "12345", output: "Even digits: 2, Odd digits: 3" },
      { input: "222", output: "Even digits: 3, Odd digits: 0" },
      { input: "0", output: "Even digits: 1, Odd digits: 0" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\neven_count = 0\nodd_count = 0\nif n == 0:\n    even_count = 1\nelse:\n    while n > 0:\n        digit = n % 10\n        if digit % 2 == 0:\n            even_count += 1\n        else:\n            odd_count += 1\n        n //= 10\nprint(f\"Even digits: {even_count}, Odd digits: {odd_count}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int even = 0, odd = 0;\n        if (n == 0) even = 1;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit % 2 == 0) even++;\n                else odd++;\n                n /= 10;\n            }\n        }\n        System.out.println(\"Even digits: \" + even + \", Odd digits: \" + odd);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int even = 0, odd = 0;\n    if (n == 0) even = 1;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) even++;\n            else odd++;\n            n /= 10;\n        }\n    }\n    cout << \"Even digits: \" << even << \", Odd digits: \" << odd;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int even = 0, odd = 0;\n    if (n == 0) even = 1;\n    else {\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) even++;\n            else odd++;\n            n /= 10;\n        }\n    }\n    printf(\"Even digits: %d, Odd digits: %d\", even, odd);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet even = 0, odd = 0;\nlet num = n;\nif (num === 0) even = 1;\nelse {\n    while (num > 0) {\n        let digit = num % 10;\n        if (digit % 2 === 0) even++;\n        else odd++;\n        num = Math.floor(num / 10);\n    }\n}\nconsole.log(`Even digits: ${even}, Odd digits: ${odd}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int even = 0, odd = 0;\n        if (n == 0) even = 1;\n        else {\n            while (n > 0) {\n                int digit = n % 10;\n                if (digit % 2 == 0) even++;\n                else odd++;\n                n /= 10;\n            }\n        }\n        Console.WriteLine($\"Even digits: {even}, Odd digits: {odd}\");\n    }\n}"
    },
    algorithmSteps: [
      "Initialize even = 0, odd = 0",
      "If n == 0, even = 1 (digit 0 is even)",
      "While n > 0: extract digit = n % 10",
      "If digit is even, increment even, else increment odd",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print both counts"
    ],
    mathSolution: "Even digits are divisible by 2, odd digits are not.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use two counters: one for even digits, one for odd digits."
  },
  {
    id: 11,
    title: "Difference Between Sum of Even and Odd Digits",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "even", "odd", "difference", "modulo"],
    desc: "Given an integer <code>n</code>, find the absolute difference between the sum of even digits and sum of odd digits.",
    examples: [
      { input: "n = 45826", output: "15", explanation: "Even sum: 4+8+2+6=20, Odd sum: 5, Difference = |20-5| = 15" },
      { input: "n = 1234", output: "2", explanation: "Even sum: 2+4=6, Odd sum: 1+3=4, Difference = |6-4| = 2" }
    ],
    testCases: [
      { input: "45826", output: "15" },
      { input: "1234", output: "2" },
      { input: "135", output: "9" },
      { input: "246", output: "12" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nsum_even = 0\nsum_odd = 0\nif n == 0:\n    sum_even = 0\nelse:\n    while n > 0:\n        digit = n % 10\n        if digit % 2 == 0:\n            sum_even += digit\n        else:\n            sum_odd += digit\n        n //= 10\nprint(abs(sum_even - sum_odd))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sumEven = 0, sumOdd = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) sumEven += digit;\n            else sumOdd += digit;\n            n /= 10;\n        }\n        System.out.println(Math.abs(sumEven - sumOdd));\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int sumEven = 0, sumOdd = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 == 0) sumEven += digit;\n        else sumOdd += digit;\n        n /= 10;\n    }\n    cout << abs(sumEven - sumOdd);\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int sumEven = 0, sumOdd = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 == 0) sumEven += digit;\n        else sumOdd += digit;\n        n /= 10;\n    }\n    printf(\"%d\", abs(sumEven - sumOdd));\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet sumEven = 0, sumOdd = 0;\nlet num = n;\nwhile (num > 0) {\n    let digit = num % 10;\n    if (digit % 2 === 0) sumEven += digit;\n    else sumOdd += digit;\n    num = Math.floor(num / 10);\n}\nconsole.log(Math.abs(sumEven - sumOdd));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int sumEven = 0, sumOdd = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) sumEven += digit;\n            else sumOdd += digit;\n            n /= 10;\n        }\n        Console.WriteLine(Math.Abs(sumEven - sumOdd));\n    }\n}"
    },
    algorithmSteps: [
      "Initialize sumEven = 0, sumOdd = 0",
      "While n > 0: extract digit = n % 10",
      "If digit is even, add to sumEven, else add to sumOdd",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print absolute difference |sumEven - sumOdd|"
    ],
    mathSolution: "Calculate both sums separately, then find absolute difference.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use absolute value function to ensure positive difference."
  },
  {
    id: 12,
    title: "Sum of Prime Digits in a Number",
    difficulty: "medium",
    topic: "digit-problems",
    subtopic: "digit-problems",
    category: "Problem Solving",
    tags: ["digits", "prime", "sum", "modulo"],
    desc: "Given an integer <code>n</code>, find the sum of all prime digits (2, 3, 5, 7) present in it.",
    examples: [
      { input: "n = 23954", output: "10", explanation: "Prime digits are 2,3,5, sum = 2+3+5=10" },
      { input: "n = 1468", output: "0", explanation: "No prime digits (prime digits are 2,3,5,7)" },
      { input: "n = 2357", output: "17", explanation: "2+3+5+7=17" }
    ],
    testCases: [
      { input: "23954", output: "10" },
      { input: "1468", output: "0" },
      { input: "2357", output: "17" },
      { input: "7", output: "7" }
    ],
    constraints: ["0 <= n <= 10^9"],
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
      python: "n = int(input())\nsum_prime = 0\nprime_digits = {2, 3, 5, 7}\nwhile n > 0:\n    digit = n % 10\n    if digit in prime_digits:\n        sum_prime += digit\n    n //= 10\nprint(sum_prime)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sumPrime = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit == 2 || digit == 3 || digit == 5 || digit == 7)\n                sumPrime += digit;\n            n /= 10;\n        }\n        System.out.println(sumPrime);\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int sumPrime = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit == 2 || digit == 3 || digit == 5 || digit == 7)\n            sumPrime += digit;\n        n /= 10;\n    }\n    cout << sumPrime;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int sumPrime = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit == 2 || digit == 3 || digit == 5 || digit == 7)\n            sumPrime += digit;\n        n /= 10;\n    }\n    printf(\"%d\", sumPrime);\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet sumPrime = 0;\nlet num = n;\nconst primeDigits = [2, 3, 5, 7];\nwhile (num > 0) {\n    let digit = num % 10;\n    if (primeDigits.includes(digit)) sumPrime += digit;\n    num = Math.floor(num / 10);\n}\nconsole.log(sumPrime);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int sumPrime = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit == 2 || digit == 3 || digit == 5 || digit == 7)\n                sumPrime += digit;\n            n /= 10;\n        }\n        Console.WriteLine(sumPrime);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize sumPrime = 0",
      "Create set of prime digits: 2, 3, 5, 7",
      "While n > 0: extract digit = n % 10",
      "If digit is in prime digits set, add to sumPrime",
      "Remove last digit (n = n / 10)",
      "Repeat until n becomes 0",
      "Print sumPrime"
    ],
    mathSolution: "Prime digits are single-digit prime numbers: 2, 3, 5, 7.",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Check each digit against the set of prime digits {2, 3, 5, 7}."
  }
];

//export

if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];

 digitProblem.forEach(q => {
    window.questions.push(createQuestion(q));
  });

  console.log("✅ Digit questions loaded:", digitProblem.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = digitProblem;
}