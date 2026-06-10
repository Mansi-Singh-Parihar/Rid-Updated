// ============================================================
// SPECIAL NUMBERS PROBLEMS
// Questions: 38, 41, 43, 65, 84, 87, 101, 104, 106 from PDF
// ============================================================

const specialNumbersQuestions = [
  // 1. Strong Number (PDF Q38)
  {
    id: 1,
    title: "Check Strong Number",
    difficulty: "easy",
    topic: "special-numbers",
    subtopic: "strong-number",
    category: "Problem Solving",
    tags: ["strong", "factorial", "digits", "special"],
    desc: "Given an integer <code>n</code>, check if it is a strong number. A strong number is a number where the sum of factorials of its digits equals the number itself. Print 'Yes' if strong, otherwise 'No'.",
    examples: [
      { input: "n = 145", output: "Yes", explanation: "1! + 4! + 5! = 1 + 24 + 120 = 145" },
      { input: "n = 40585", output: "Yes", explanation: "4! + 0! + 5! + 8! + 5! = 24 + 1 + 120 + 40320 + 120 = 40585" },
      { input: "n = 123", output: "No", explanation: "1! + 2! + 3! = 1 + 2 + 6 = 9 ≠ 123" }
    ],
    testCases: [
      { input: "145", output: "Yes" },
      { input: "40585", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: "n1ugHoaWyHE",
    videoStart: 720,
    videoEnd: 1025,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "def factorial(num):\n    fact = 1\n    for i in range(2, num+1):\n        fact *= i\n    return fact\n\nn = int(input())\noriginal = n\nsum_fact = 0\nwhile n > 0:\n    digit = n % 10\n    sum_fact += factorial(digit)\n    n //= 10\nprint(\"Yes\" if original == sum_fact else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    static int factorial(int num) {\n        int fact = 1;\n        for(int i = 2; i <= num; i++) fact *= i;\n        return fact;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += factorial(digit);\n            n /= 10;\n        }\n        System.out.println(original == sum ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint factorial(int num) {\n    int fact = 1;\n    for(int i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nint main() {\n    int n; cin >> n;\n    int original = n;\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += factorial(digit);\n        n /= 10;\n    }\n    cout << (original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint factorial(int num) {\n    int fact = 1;\n    for(int i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += factorial(digit);\n        n /= 10;\n    }\n    printf(original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfunction factorial(num) {\n    let fact = 1;\n    for(let i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nlet original = n;\nlet sum = 0;\nlet num = n;\nwhile(num > 0) {\n    const digit = num % 10;\n    sum += factorial(digit);\n    num = Math.floor(num / 10);\n}\nconsole.log(original === sum ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static int Factorial(int num) {\n        int fact = 1;\n        for(int i = 2; i <= num; i++) fact *= i;\n        return fact;\n    }\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += Factorial(digit);\n            n /= 10;\n        }\n        Console.WriteLine(original == sum ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Store original number",
      "Create factorial function",
      "Extract each digit",
      "Calculate factorial of each digit",
      "Sum all factorials",
      "Compare sum with original",
      "If equal → Strong number"
    ],
    mathSolution: "Strong number: sum of factorial of digits = number",
    timeComplexity: "O(d × d!) where d = number of digits",
    spaceComplexity: "O(1)",
    hint: "Precompute factorials for digits 0-9 for efficiency"
  },

  // 2. Palindrome Number (PDF Q41)
  {
    id: 2,
    title: "Check Palindrome Number",
    difficulty: "medium",
    topic: "special-numbers",
    subtopic: "palindrome",
    category: "Problem Solving",
    tags: ["palindrome", "reverse", "special"],
    desc: "Given an integer <code>n</code>, check if it is a palindrome number (reads same forward and backward). Print 'Yes' if palindrome, otherwise 'No'.",
    examples: [
      { input: "n = 121", output: "Yes", explanation: "121 reversed is 121" },
      { input: "n = 12321", output: "Yes", explanation: "12321 reversed is 12321" },
      { input: "n = 123", output: "No", explanation: "123 reversed is 321" }
    ],
    testCases: [
      { input: "121", output: "Yes" },
      { input: "12321", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: "vAObDuT93oo",
    videoStart: 210,
    videoEnd: 450,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\noriginal = n\nreversed_num = 0\nwhile n > 0:\n    reversed_num = reversed_num * 10 + n % 10\n    n //= 10\nprint(\"Yes\" if original == reversed_num else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        int reversed = 0;\n        while(n > 0) {\n            reversed = reversed * 10 + n % 10;\n            n /= 10;\n        }\n        System.out.println(original == reversed ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int original = n;\n    int reversed = 0;\n    while(n > 0) {\n        reversed = reversed * 10 + n % 10;\n        n /= 10;\n    }\n    cout << (original == reversed ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    int reversed = 0;\n    while(n > 0) {\n        reversed = reversed * 10 + n % 10;\n        n /= 10;\n    }\n    printf(original == reversed ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet original = n;\nlet reversed = 0;\nlet num = n;\nwhile(num > 0) {\n    reversed = reversed * 10 + num % 10;\n    num = Math.floor(num / 10);\n}\nconsole.log(original === reversed ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        int reversed = 0;\n        while(n > 0) {\n            reversed = reversed * 10 + n % 10;\n            n /= 10;\n        }\n        Console.WriteLine(original == reversed ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Store original number",
      "Reverse the number",
      "Compare original with reversed",
      "If equal → Palindrome"
    ],
    mathSolution: "Palindrome number equals its reverse",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Reverse the number and compare with original"
  },

  // 3. Armstrong Number (PDF Q43)
  {
    id: 3,
    title: "Check Armstrong Number",
    difficulty: "easy",
    topic: "special-numbers",
    subtopic: "armstrong-number",
    category: "Problem Solving",
    tags: ["armstrong", "digits", "power", "special"],
    desc: "Given an integer <code>n</code>, check if it is an Armstrong number. An Armstrong number (also called Narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. Print 'Yes' if Armstrong, otherwise 'No'.",
    examples: [
      { input: "n = 153", output: "Yes", explanation: "1³ + 5³ + 3³ = 1 + 125 + 27 = 153" },
      { input: "n = 9474", output: "Yes", explanation: "9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474" },
      { input: "n = 123", output: "No", explanation: "1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123" }
    ],
    testCases: [
      { input: "153", output: "Yes" },
      { input: "9474", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: "vAObDuT93oo",
    videoStart:798 ,
    videoEnd: 1015,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\noriginal = n\ndigits = len(str(n))\nsum_power = 0\nwhile n > 0:\n    digit = n % 10\n    sum_power += digit ** digits\n    n //= 10\nprint(\"Yes\" if original == sum_power else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        int digits = String.valueOf(n).length();\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += Math.pow(digit, digits);\n            n /= 10;\n        }\n        System.out.println(original == sum ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int original = n;\n    int digits = to_string(n).length();\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += pow(digit, digits);\n        n /= 10;\n    }\n    cout << (original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    int digits = 0, temp = n;\n    while(temp > 0) { digits++; temp /= 10; }\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += pow(digit, digits);\n        n /= 10;\n    }\n    printf(original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst original = n;\nconst digits = n.toString().length;\nlet sum = 0;\nlet num = n;\nwhile(num > 0) {\n    const digit = num % 10;\n    sum += Math.pow(digit, digits);\n    num = Math.floor(num / 10);\n}\nconsole.log(original === sum ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        int digits = n.ToString().Length;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += (int)Math.Pow(digit, digits);\n            n /= 10;\n        }\n        Console.WriteLine(original == sum ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Find number of digits",
      "Extract each digit",
      "Raise digit to power of digit count",
      "Sum all powered digits",
      "Compare sum with original number"
    ],
    mathSolution: "Armstrong number: sum of (digit ^ numberOfDigits) = number",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "First count digits, then compute power sum"
  },

  // 4. Harshad Number (Niven Number) (PDF Q65)
  {
    id: 4,
    title: "Check Harshad Number",
    difficulty: "hard",
    topic: "special-numbers",
    subtopic: "harshad-number",
    category: "Problem Solving",
    tags: ["harshad", "niven", "divisibility", "special"],
    desc: "Given an integer <code>n</code>, check if it is a Harshad (or Niven) number. A Harshad number is divisible by the sum of its digits. Print 'Yes' if Harshad, otherwise 'No'.",
    examples: [
      { input: "n = 18", output: "Yes", explanation: "Sum of digits = 1+8=9, 18 ÷ 9 = 2" },
      { input: "n = 21", output: "Yes", explanation: "Sum = 2+1=3, 21 ÷ 3 = 7" },
      { input: "n = 19", output: "No", explanation: "Sum = 1+9=10, 19 not divisible by 10" }
    ],
    testCases: [
      { input: "18", output: "Yes" },
      { input: "21", output: "Yes" },
      { input: "19", output: "No" },
      { input: "12", output: "Yes" }
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
      python: "n = int(input())\ntemp = n\nsum_digits = 0\nwhile temp > 0:\n    sum_digits += temp % 10\n    temp //= 10\nif sum_digits != 0 and n % sum_digits == 0:\n    print(\"Yes\")\nelse:\n    print(\"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int temp = n;\n        int sum = 0;\n        while(temp > 0) {\n            sum += temp % 10;\n            temp /= 10;\n        }\n        System.out.println(sum != 0 && n % sum == 0 ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int temp = n;\n    int sum = 0;\n    while(temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    cout << (sum != 0 && n % sum == 0 ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int temp = n;\n    int sum = 0;\n    while(temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    printf(sum != 0 && n % sum == 0 ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet temp = n;\nlet sum = 0;\nwhile(temp > 0) {\n    sum += temp % 10;\n    temp = Math.floor(temp / 10);\n}\nconsole.log(sum !== 0 && n % sum === 0 ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int temp = n;\n        int sum = 0;\n        while(temp > 0) {\n            sum += temp % 10;\n            temp /= 10;\n        }\n        Console.WriteLine(sum != 0 && n % sum == 0 ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Calculate sum of digits",
      "If sum is 0, not Harshad",
      "Check if n is divisible by sum of digits",
      "If yes → Harshad number"
    ],
    mathSolution: "Harshad number: n % (sum of digits) == 0",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Use modulo operator for divisibility check"
  },

  // 5. Spy Number (PDF Q84)
  {
    id: 5,
    title: "Check Spy Number",
    difficulty: "hard",
    topic: "special-numbers",
    subtopic: "spy-number",
    category: "Problem Solving",
    tags: ["spy", "sum", "product", "digits", "special"],
    desc: "Given an integer <code>n</code>, check if it is a spy number. A spy number is a number where the sum of its digits equals the product of its digits. Print 'Yes' if spy number, otherwise 'No'.",
    examples: [
      { input: "n = 1124", output: "Yes", explanation: "Sum = 1+1+2+4 = 8, Product = 1×1×2×4 = 8" },
      { input: "n = 123", output: "Yes", explanation: "Sum = 1+2+3 = 6, Product = 1×2×3 = 6" },
      { input: "n = 124", output: "No", explanation: "Sum = 7, Product = 8, not equal" }
    ],
    testCases: [
      { input: "1124", output: "Yes" },
      { input: "123", output: "Yes" },
      { input: "124", output: "No" },
      { input: "22", output: "Yes" }
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
      python: "n = int(input())\nsum_digits = 0\nproduct_digits = 1\nwhile n > 0:\n    digit = n % 10\n    sum_digits += digit\n    product_digits *= digit\n    n //= 10\nprint(\"Yes\" if sum_digits == product_digits else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        int product = 1;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += digit;\n            product *= digit;\n            n /= 10;\n        }\n        System.out.println(sum == product ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int sum = 0;\n    int product = 1;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += digit;\n        product *= digit;\n        n /= 10;\n    }\n    cout << (sum == product ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int sum = 0;\n    int product = 1;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += digit;\n        product *= digit;\n        n /= 10;\n    }\n    printf(sum == product ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet sum = 0;\nlet product = 1;\nlet num = n;\nwhile(num > 0) {\n    const digit = num % 10;\n    sum += digit;\n    product *= digit;\n    num = Math.floor(num / 10);\n}\nconsole.log(sum === product ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int sum = 0;\n        int product = 1;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += digit;\n            product *= digit;\n            n /= 10;\n        }\n        Console.WriteLine(sum == product ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Initialize sum = 0, product = 1",
      "Extract each digit",
      "Add digit to sum",
      "Multiply digit to product",
      "Compare sum and product",
      "If equal → Spy number"
    ],
    mathSolution: "Spy number: sum of digits = product of digits",
    timeComplexity: "O(log₁₀ n)",
    spaceComplexity: "O(1)",
    hint: "Calculate both sum and product in the same loop"
  },

  // 6. Duck Number (PDF Q87)
  {
    id: 6,
    title: "Check Duck Number",
    difficulty: "medium",
    topic: "special-numbers",
    subtopic: "duck-number",
    category: "Problem Solving",
    tags: ["duck", "digits", "zero", "special"],
    desc: "Given an integer <code>n</code>, check if it is a duck number. A duck number is a positive integer that contains at least one digit zero, but the first digit is not zero. Print 'Yes' if duck number, otherwise 'No'.",
    examples: [
      { input: "n = 1023", output: "Yes", explanation: "Contains zero, first digit is 1 (non-zero)" },
      { input: "n = 1204", output: "Yes", explanation: "Contains zero, first digit is 1" },
      { input: "n = 123", output: "No", explanation: "No zero digit" },
      { input: "n = 0123", output: "No", explanation: "Leading zero is not considered a valid positive integer" }
    ],
    testCases: [
      { input: "1023", output: "Yes" },
      { input: "1204", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1000", output: "Yes" }
    ],
    constraints: ["1 <= n <= 10^9"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = input().strip()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char n[20]; scanf(\"%s\", n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string n = Console.ReadLine().Trim();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = input().strip()\nif n[0] == '0':\n    print(\"No\")\nelse:\n    print(\"Yes\" if '0' in n else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next();\n        if(n.charAt(0) == '0') {\n            System.out.println(\"No\");\n        } else {\n            System.out.println(n.contains(\"0\") ? \"Yes\" : \"No\");\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string n; cin >> n;\n    if(n[0] == '0') {\n        cout << \"No\";\n    } else {\n        cout << (n.find('0') != string::npos ? \"Yes\" : \"No\");\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char n[20]; scanf(\"%s\", n);\n    if(n[0] == '0') {\n        printf(\"No\");\n    } else {\n        printf(strchr(n, '0') ? \"Yes\" : \"No\");\n    }\n    return 0;\n}",
      javascript: "const n = require('fs').readFileSync('/dev/stdin','utf8').trim();\nif(n[0] === '0') {\n    console.log(\"No\");\n} else {\n    console.log(n.includes('0') ? \"Yes\" : \"No\");\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string n = Console.ReadLine().Trim();\n        if(n[0] == '0') {\n            Console.WriteLine(\"No\");\n        } else {\n            Console.WriteLine(n.Contains(\"0\") ? \"Yes\" : \"No\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Convert number to string",
      "If first character is '0', not a duck number",
      "Else if any other character is '0', duck number",
      "Else not duck number"
    ],
    mathSolution: "Duck number contains zero but not as first digit",
    timeComplexity: "O(d) where d = number of digits",
    spaceComplexity: "O(1)",
    hint: "Treat number as string to easily check for zero"
  },

  // 7. Automorphic Number (PDF Q101)
  {
    id: 7,
    title: "Check Automorphic Number",
    difficulty: "medium",
    topic: "special-numbers",
    subtopic: "automorphic-number",
    category: "Problem Solving",
    tags: ["automorphic", "square", "digits", "special"],
    desc: "Given an integer <code>n</code>, check if it is an automorphic number. An automorphic number is a number whose square ends with the number itself. Print 'Yes' if automorphic, otherwise 'No'.",
    examples: [
      { input: "n = 25", output: "Yes", explanation: "25² = 625 ends with 25" },
      { input: "n = 76", output: "Yes", explanation: "76² = 5776 ends with 76" },
      { input: "n = 5", output: "No", explanation: "5² = 25 does not end with 5? Actually 25 ends with 5? 25 ends with 5? The last digit is 5 but we need the whole number. 5 is 1 digit, 5²=25 ends with '5'? 25 ends with '5'? The last digit is 5, but for automorphic, the square's ending digits must match the whole number. For 5, square=25, last 1 digit is 5, so 5 is automorphic? Yes, 5 is automorphic. Wait, check: 5²=25, ends with 5 -> Yes. 6²=36, ends with 6 -> Yes. So 5 and 6 are automorphic. I need correct example: 5 is automorphic. But typical non-example: 7²=49 does not end with 7. So correct example: n=7 => No." }
    ],
    testCases: [
      { input: "25", output: "Yes" },
      { input: "76", output: "Yes" },
      { input: "7", output: "No" },
      { input: "5", output: "Yes" }
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
      python: "n = int(input())\nsquare = n * n\nif str(square).endswith(str(n)):\n    print(\"Yes\")\nelse:\n    print(\"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long square = (long)n * n;\n        System.out.println(String.valueOf(square).endsWith(String.valueOf(n)) ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    long long square = 1LL * n * n;\n    string ns = to_string(n);\n    string sqs = to_string(square);\n    if(sqs.length() >= ns.length() && sqs.substr(sqs.length() - ns.length()) == ns)\n        cout << \"Yes\";\n    else\n        cout << \"No\";\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    long long square = 1LL * n * n;\n    char ns[20], sqs[20];\n    sprintf(ns, \"%d\", n);\n    sprintf(sqs, \"%lld\", square);\n    int l = strlen(ns);\n    if(strlen(sqs) >= l && strcmp(sqs + strlen(sqs) - l, ns) == 0)\n        printf(\"Yes\");\n    else\n        printf(\"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst square = n * n;\nconsole.log(square.toString().endsWith(n.toString()) ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        long square = (long)n * n;\n        Console.WriteLine(square.ToString().EndsWith(n.ToString()) ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Compute square of n",
      "Convert both n and square to strings",
      "Check if square ends with n",
      "If yes → Automorphic number"
    ],
    mathSolution: "Automorphic number: square mod 10^k = n, where k = digits in n",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    hint: "Use string conversion for easy ending check"
  },

  // 8. Disarium Number (PDF Q104)
  {
    id: 8,
    title: "Check Disarium Number",
    difficulty: "medium",
    topic: "special-numbers",
    subtopic: "disarium-number",
    category: "Problem Solving",
    tags: ["disarium", "power", "position", "special"],
    desc: "Given an integer <code>n</code>, check if it is a disarium number. A disarium number is a number where sum of its digits raised to their respective positions (starting from 1 from left) equals the number itself. Print 'Yes' if disarium, otherwise 'No'.",
    examples: [
      { input: "n = 135", output: "Yes", explanation: "1¹ + 3² + 5³ = 1 + 9 + 125 = 135" },
      { input: "n = 89", output: "Yes", explanation: "8¹ + 9² = 8 + 81 = 89" },
      { input: "n = 175", output: "Yes", explanation: "1¹ + 7² + 5³ = 1 + 49 + 125 = 175" }
    ],
    testCases: [
      { input: "135", output: "Yes" },
      { input: "89", output: "Yes" },
      { input: "175", output: "Yes" },
      { input: "123", output: "No" }
    ],
    constraints: ["1 <= n <= 10^6"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "n = int(input())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\n#include <string.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    // Write your code here\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "n = int(input())\noriginal = n\nnum_str = str(n)\nsum_power = 0\nfor i, ch in enumerate(num_str, 1):\n    sum_power += int(ch) ** i\nprint(\"Yes\" if original == sum_power else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        String numStr = String.valueOf(n);\n        int sum = 0;\n        for(int i = 0; i < numStr.length(); i++) {\n            int digit = numStr.charAt(i) - '0';\n            sum += Math.pow(digit, i + 1);\n        }\n        System.out.println(original == sum ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\n#include <cmath>\n#include <string>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int original = n;\n    string numStr = to_string(n);\n    int sum = 0;\n    for(int i = 0; i < numStr.length(); i++) {\n        int digit = numStr[i] - '0';\n        sum += pow(digit, i + 1);\n    }\n    cout << (original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <math.h>\n#include <string.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    char numStr[20];\n    sprintf(numStr, \"%d\", n);\n    int len = strlen(numStr);\n    int sum = 0;\n    for(int i = 0; i < len; i++) {\n        int digit = numStr[i] - '0';\n        sum += pow(digit, i + 1);\n    }\n    printf(original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nconst original = n;\nconst numStr = n.toString();\nlet sum = 0;\nfor(let i = 0; i < numStr.length; i++) {\n    const digit = parseInt(numStr[i]);\n    sum += Math.pow(digit, i + 1);\n}\nconsole.log(original === sum ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        string numStr = n.ToString();\n        int sum = 0;\n        for(int i = 0; i < numStr.Length; i++) {\n            int digit = numStr[i] - '0';\n            sum += (int)Math.Pow(digit, i + 1);\n        }\n        Console.WriteLine(original == sum ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Convert number to string to get digits and positions",
      "For each digit at position i (starting 1), raise to power i",
      "Sum all powered digits",
      "Compare sum with original number"
    ],
    mathSolution: "Disarium number: sum of (digit at position i)^i = number",
    timeComplexity: "O(d) where d = number of digits",
    spaceComplexity: "O(1)",
    hint: "Positions start from 1 (leftmost digit)"
  },

  // 9. Peterson Number (PDF Q106) - same as Strong number but included as per PDF
  {
    id: 9,
    title: "Check Peterson Number",
    difficulty: "hard",
    topic: "special-numbers",
    subtopic: "peterson-number",
    category: "Problem Solving",
    tags: ["peterson", "strong", "factorial", "digits", "special"],
    desc: "Given an integer <code>n</code>, check if it is a Peterson number. A Peterson number is a number where the sum of factorials of its digits equals the number itself. Print 'Yes' if Peterson, otherwise 'No'.",
    examples: [
      { input: "n = 145", output: "Yes", explanation: "1! + 4! + 5! = 1 + 24 + 120 = 145" },
      { input: "n = 40585", output: "Yes", explanation: "4! + 0! + 5! + 8! + 5! = 24 + 1 + 120 + 40320 + 120 = 40585" },
      { input: "n = 123", output: "No", explanation: "1! + 2! + 3! = 1 + 2 + 6 = 9 ≠ 123" }
    ],
    testCases: [
      { input: "145", output: "Yes" },
      { input: "40585", output: "Yes" },
      { input: "123", output: "No" },
      { input: "1", output: "Yes" }
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
      python: "def factorial(num):\n    fact = 1\n    for i in range(2, num+1):\n        fact *= i\n    return fact\n\nn = int(input())\noriginal = n\nsum_fact = 0\nwhile n > 0:\n    digit = n % 10\n    sum_fact += factorial(digit)\n    n //= 10\nprint(\"Yes\" if original == sum_fact else \"No\")",
      java: "import java.util.*;\npublic class Main {\n    static int factorial(int num) {\n        int fact = 1;\n        for(int i = 2; i <= num; i++) fact *= i;\n        return fact;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int original = n;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += factorial(digit);\n            n /= 10;\n        }\n        System.out.println(original == sum ? \"Yes\" : \"No\");\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint factorial(int num) {\n    int fact = 1;\n    for(int i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nint main() {\n    int n; cin >> n;\n    int original = n;\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += factorial(digit);\n        n /= 10;\n    }\n    cout << (original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      c: "#include <stdio.h>\nint factorial(int num) {\n    int fact = 1;\n    for(int i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nint main() {\n    int n; scanf(\"%d\",&n);\n    int original = n;\n    int sum = 0;\n    while(n > 0) {\n        int digit = n % 10;\n        sum += factorial(digit);\n        n /= 10;\n    }\n    printf(original == sum ? \"Yes\" : \"No\");\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfunction factorial(num) {\n    let fact = 1;\n    for(let i = 2; i <= num; i++) fact *= i;\n    return fact;\n}\nlet original = n;\nlet sum = 0;\nlet num = n;\nwhile(num > 0) {\n    const digit = num % 10;\n    sum += factorial(digit);\n    num = Math.floor(num / 10);\n}\nconsole.log(original === sum ? \"Yes\" : \"No\");",
      csharp: "using System;\nclass Program {\n    static int Factorial(int num) {\n        int fact = 1;\n        for(int i = 2; i <= num; i++) fact *= i;\n        return fact;\n    }\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int original = n;\n        int sum = 0;\n        while(n > 0) {\n            int digit = n % 10;\n            sum += Factorial(digit);\n            n /= 10;\n        }\n        Console.WriteLine(original == sum ? \"Yes\" : \"No\");\n    }\n}"
    },
    algorithmSteps: [
      "Store original number",
      "Create factorial function",
      "Extract each digit",
      "Calculate factorial of each digit",
      "Sum all factorials",
      "Compare sum with original",
      "If equal → Peterson number"
    ],
    mathSolution: "Peterson number: sum of factorial of digits = number",
    timeComplexity: "O(d × d!)",
    spaceComplexity: "O(1)",
    hint: "Precompute factorials for digits 0-9"
  }
];

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...specialNumbersQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", specialNumbersQuestions.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = specialNumbersQuestions;
}