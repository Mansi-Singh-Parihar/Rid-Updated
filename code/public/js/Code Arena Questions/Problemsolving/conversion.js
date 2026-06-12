// ============================================================
// CONVERSION PROBLEMS - 10 QUESTIONS (EASY, MEDIUM, HARD MIXED)
// ============================================================

const conversionQuestions = [
  // ==================== EASY (4 Questions) ====================
  {
    id: 1,
    title: "Convert Decimal to Binary",
    difficulty: "easy",
    topic: "conversion",
    subtopic: "decimal-to-binary",
    category: "Problem Solving",
    tags: ["conversion", "decimal", "binary", "easy"],
    desc: "Given a decimal number <code>n</code>, convert it to binary and print the binary representation.",
    examples: [
      { input: "n = 10", output: "1010", explanation: "10 in binary is 1010" },
      { input: "n = 5", output: "101", explanation: "5 in binary is 101" },
      { input: "n = 0", output: "0", explanation: "0 in binary is 0" }
    ],
    testCases: [
      { input: "10", output: "1010" },
      { input: "5", output: "101" },
      { input: "0", output: "0" },
      { input: "15", output: "1111" }
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
      python: "n = int(input())\nif n == 0:\n    print('0')\nelse:\n    binary = ''\n    while n > 0:\n        binary = str(n % 2) + binary\n        n //= 2\n    print(binary)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n == 0) System.out.println(\"0\");\n        else {\n            StringBuilder binary = new StringBuilder();\n            while(n > 0) {\n                binary.insert(0, n % 2);\n                n /= 2;\n            }\n            System.out.println(binary);\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n == 0) cout << \"0\";\n    else {\n        string binary = \"\";\n        while(n > 0) {\n            binary += to_string(n % 2);\n            n /= 2;\n        }\n        reverse(binary.begin(), binary.end());\n        cout << binary;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n == 0) printf(\"0\");\n    else {\n        int binary[32], i = 0;\n        while(n > 0) {\n            binary[i++] = n % 2;\n            n /= 2;\n        }\n        for(int j = i-1; j >= 0; j--) printf(\"%d\", binary[j]);\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n === 0) console.log('0');\nelse {\n    let binary = '';\n    let num = n;\n    while(num > 0) {\n        binary = (num % 2) + binary;\n        num = Math.floor(num / 2);\n    }\n    console.log(binary);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n == 0) Console.WriteLine(\"0\");\n        else {\n            string binary = \"\";\n            while(n > 0) {\n                binary = (n % 2) + binary;\n                n /= 2;\n            }\n            Console.WriteLine(binary);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "If n == 0, print '0'",
      "Else: while n > 0: get remainder n%2, add to front, divide n by 2"
    ],
    mathSolution: "Repeatedly divide by 2 and collect remainders in reverse",
    timeComplexity: "O(log₂ n)",
    spaceComplexity: "O(log₂ n)",
    hint: "Collect remainders in reverse order"
  },
  {
    id: 2,
    title: "Convert Binary to Decimal",
    difficulty: "easy",
    topic: "conversion",
    subtopic: "binary-to-decimal",
    category: "Problem Solving",
    tags: ["conversion", "binary", "decimal", "easy"],
    desc: "Given a binary string <code>s</code>, convert it to decimal and print the decimal number.",
    examples: [
      { input: "s = '1010'", output: "10", explanation: "Binary 1010 = 10 decimal" },
      { input: "s = '101'", output: "5", explanation: "Binary 101 = 5 decimal" },
      { input: "s = '0'", output: "0", explanation: "Binary 0 = 0 decimal" }
    ],
    testCases: [
      { input: "1010", output: "10" },
      { input: "101", output: "5" },
      { input: "0", output: "0" },
      { input: "1111", output: "15" }
    ],
    constraints: ["1 <= |s| <= 32", "String contains only 0 and 1"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\ndecimal = 0\nfor digit in s:\n    decimal = decimal * 2 + int(digit)\nprint(decimal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int decimal = 0;\n        for(int i = 0; i < s.length(); i++) {\n            decimal = decimal * 2 + (s.charAt(i) - '0');\n        }\n        System.out.println(decimal);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    int decimal = 0;\n    for(char c : s) {\n        decimal = decimal * 2 + (c - '0');\n    }\n    cout << decimal;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33]; scanf(\"%s\",s);\n    int decimal = 0;\n    for(int i = 0; i < strlen(s); i++) {\n        decimal = decimal * 2 + (s[i] - '0');\n    }\n    printf(\"%d\", decimal);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet decimal = 0;\nfor(let i = 0; i < s.length; i++) {\n    decimal = decimal * 2 + parseInt(s[i]);\n}\nconsole.log(decimal);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        int decimal = 0;\n        for(int i = 0; i < s.Length; i++) {\n            decimal = decimal * 2 + (s[i] - '0');\n        }\n        Console.WriteLine(decimal);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize decimal = 0",
      "For each digit in binary string:",
      "  - decimal = decimal × 2 + digit",
      "Print decimal"
    ],
    mathSolution: "Horner's method: scan left to right",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use decimal = decimal * 2 + digit approach"
  },
 {
    id: 3,
    title: "Convert Decimal to Hexadecimal",
    difficulty: "medium",
    topic: "conversion",
    subtopic: "decimal-to-hexadecimal",
    category: "Problem Solving",
    tags: ["conversion", "decimal", "hexadecimal", "medium"],
    desc: "Given a decimal number <code>n</code>, convert it to hexadecimal and print the hexadecimal representation (uppercase letters A-F).",
    examples: [
      { input: "n = 255", output: "FF", explanation: "255 in hex is FF" },
      { input: "n = 26", output: "1A", explanation: "26 in hex is 1A" },
      { input: "n = 0", output: "0", explanation: "0 in hex is 0" }
    ],
    testCases: [
      { input: "255", output: "FF" },
      { input: "26", output: "1A" },
      { input: "0", output: "0" },
      { input: "16", output: "10" }
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
      python: "n = int(input())\nif n == 0:\n    print('0')\nelse:\n    hex_chars = '0123456789ABCDEF'\n    hex_str = ''\n    while n > 0:\n        hex_str = hex_chars[n % 16] + hex_str\n        n //= 16\n    print(hex_str)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n == 0) System.out.println(\"0\");\n        else {\n            String hexChars = \"0123456789ABCDEF\";\n            StringBuilder hex = new StringBuilder();\n            while(n > 0) {\n                hex.insert(0, hexChars.charAt(n % 16));\n                n /= 16;\n            }\n            System.out.println(hex);\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n == 0) cout << \"0\";\n    else {\n        string hexChars = \"0123456789ABCDEF\";\n        string hex = \"\";\n        while(n > 0) {\n            hex += hexChars[n % 16];\n            n /= 16;\n        }\n        reverse(hex.begin(), hex.end());\n        cout << hex;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n == 0) printf(\"0\");\n    else {\n        char hex[32];\n        int i = 0;\n        while(n > 0) {\n            int rem = n % 16;\n            hex[i++] = (rem < 10) ? rem + '0' : rem - 10 + 'A';\n            n /= 16;\n        }\n        for(int j = i-1; j >= 0; j--) printf(\"%c\", hex[j]);\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n === 0) console.log('0');\nelse {\n    const hexChars = '0123456789ABCDEF';\n    let hex = '';\n    let num = n;\n    while(num > 0) {\n        hex = hexChars[num % 16] + hex;\n        num = Math.floor(num / 16);\n    }\n    console.log(hex);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n == 0) Console.WriteLine(\"0\");\n        else {\n            string hexChars = \"0123456789ABCDEF\";\n            string hex = \"\";\n            while(n > 0) {\n                hex = hexChars[n % 16] + hex;\n                n /= 16;\n            }\n            Console.WriteLine(hex);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "If n == 0, print '0'",
      "Else: while n > 0: get remainder n%16, convert to hex digit, add to front, divide n by 16"
    ],
    mathSolution: "Repeatedly divide by 16, map 10-15 to A-F",
    timeComplexity: "O(log₁₆ n)",
    spaceComplexity: "O(log₁₆ n)",
    hint: "Use a string '0123456789ABCDEF' for digit mapping"
  },
  {
    id: 4,
    title: "Convert Octal to Decimal",
    difficulty: "easy",
    topic: "conversion",
    subtopic: "octal-to-decimal",
    category: "Problem Solving",
    tags: ["conversion", "octal", "decimal", "easy"],
    desc: "Given an octal string <code>s</code>, convert it to decimal and print the decimal number.",
    examples: [
      { input: "s = '12'", output: "10", explanation: "Octal 12 = 10 decimal" },
      { input: "s = '10'", output: "8", explanation: "Octal 10 = 8 decimal" },
      { input: "s = '0'", output: "0", explanation: "Octal 0 = 0 decimal" }
    ],
    testCases: [
      { input: "12", output: "10" },
      { input: "10", output: "8" },
      { input: "0", output: "0" },
      { input: "101", output: "65" }
    ],
    constraints: ["1 <= |s| <= 10", "String contains digits 0-7"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[11]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\ndecimal = 0\nfor digit in s:\n    decimal = decimal * 8 + int(digit)\nprint(decimal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int decimal = 0;\n        for(int i = 0; i < s.length(); i++) {\n            decimal = decimal * 8 + (s.charAt(i) - '0');\n        }\n        System.out.println(decimal);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    int decimal = 0;\n    for(char c : s) {\n        decimal = decimal * 8 + (c - '0');\n    }\n    cout << decimal;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[11]; scanf(\"%s\",s);\n    int decimal = 0;\n    for(int i = 0; i < strlen(s); i++) {\n        decimal = decimal * 8 + (s[i] - '0');\n    }\n    printf(\"%d\", decimal);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet decimal = 0;\nfor(let i = 0; i < s.length; i++) {\n    decimal = decimal * 8 + parseInt(s[i]);\n}\nconsole.log(decimal);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        int decimal = 0;\n        for(int i = 0; i < s.Length; i++) {\n            decimal = decimal * 8 + (s[i] - '0');\n        }\n        Console.WriteLine(decimal);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize decimal = 0",
      "For each digit in octal string:",
      "  - decimal = decimal × 8 + digit",
      "Print decimal"
    ],
    mathSolution: "Horner's method: scan left to right with base 8",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use decimal = decimal * 8 + digit approach"
  },

  // ==================== MEDIUM (3 Questions) ====================
    {
    id: 5,
    title: "Convert Decimal to Octal",
    difficulty: "easy",
    topic: "conversion",
    subtopic: "decimal-to-octal",
    category: "Problem Solving",
    tags: ["conversion", "decimal", "octal", "easy"],
    desc: "Given a decimal number <code>n</code>, convert it to octal and print the octal representation.",
    examples: [
      { input: "n = 10", output: "12", explanation: "10 in octal is 12" },
      { input: "n = 8", output: "10", explanation: "8 in octal is 10" },
      { input: "n = 0", output: "0", explanation: "0 in octal is 0" }
    ],
    testCases: [
      { input: "10", output: "12" },
      { input: "8", output: "10" },
      { input: "0", output: "0" },
      { input: "65", output: "101" }
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
      python: "n = int(input())\nif n == 0:\n    print('0')\nelse:\n    octal = ''\n    while n > 0:\n        octal = str(n % 8) + octal\n        n //= 8\n    print(octal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n == 0) System.out.println(\"0\");\n        else {\n            StringBuilder octal = new StringBuilder();\n            while(n > 0) {\n                octal.insert(0, n % 8);\n                n /= 8;\n            }\n            System.out.println(octal);\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if(n == 0) cout << \"0\";\n    else {\n        string octal = \"\";\n        while(n > 0) {\n            octal += to_string(n % 8);\n            n /= 8;\n        }\n        reverse(octal.begin(), octal.end());\n        cout << octal;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    if(n == 0) printf(\"0\");\n    else {\n        int octal[32], i = 0;\n        while(n > 0) {\n            octal[i++] = n % 8;\n            n /= 8;\n        }\n        for(int j = i-1; j >= 0; j--) printf(\"%d\", octal[j]);\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nif(n === 0) console.log('0');\nelse {\n    let octal = '';\n    let num = n;\n    while(num > 0) {\n        octal = (num % 8) + octal;\n        num = Math.floor(num / 8);\n    }\n    console.log(octal);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        if(n == 0) Console.WriteLine(\"0\");\n        else {\n            string octal = \"\";\n            while(n > 0) {\n                octal = (n % 8) + octal;\n                n /= 8;\n            }\n            Console.WriteLine(octal);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "If n == 0, print '0'",
      "Else: while n > 0: get remainder n%8, add to front, divide n by 8"
    ],
    mathSolution: "Repeatedly divide by 8 and collect remainders in reverse",
    timeComplexity: "O(log₈ n)",
    spaceComplexity: "O(log₈ n)",
    hint: "Similar to binary conversion but use base 8"
  },
  {
    id: 6,
    title: "Convert Hexadecimal to Decimal",
    difficulty: "medium",
    topic: "conversion",
    subtopic: "hexadecimal-to-decimal",
    category: "Problem Solving",
    tags: ["conversion", "hexadecimal", "decimal", "medium"],
    desc: "Given a hexadecimal string <code>s</code> (uppercase letters A-F), convert it to decimal and print the decimal number.",
    examples: [
      { input: "s = 'FF'", output: "255", explanation: "FF in hex = 255 decimal" },
      { input: "s = '1A'", output: "26", explanation: "1A in hex = 26 decimal" },
      { input: "s = '0'", output: "0", explanation: "0 in hex = 0 decimal" }
    ],
    testCases: [
      { input: "FF", output: "255" },
      { input: "1A", output: "26" },
      { input: "0", output: "0" },
      { input: "10", output: "16" }
    ],
    constraints: ["1 <= |s| <= 6", "String contains 0-9, A-F"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[7]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\ndecimal = 0\nhex_map = '0123456789ABCDEF'\nfor ch in s:\n    decimal = decimal * 16 + hex_map.index(ch)\nprint(decimal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int decimal = 0;\n        for(int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            int val;\n            if(ch >= '0' && ch <= '9') val = ch - '0';\n            else val = ch - 'A' + 10;\n            decimal = decimal * 16 + val;\n        }\n        System.out.println(decimal);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    int decimal = 0;\n    for(char ch : s) {\n        int val;\n        if(ch >= '0' && ch <= '9') val = ch - '0';\n        else val = ch - 'A' + 10;\n        decimal = decimal * 16 + val;\n    }\n    cout << decimal;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[7]; scanf(\"%s\",s);\n    int decimal = 0;\n    for(int i = 0; i < strlen(s); i++) {\n        int val;\n        if(s[i] >= '0' && s[i] <= '9') val = s[i] - '0';\n        else val = s[i] - 'A' + 10;\n        decimal = decimal * 16 + val;\n    }\n    printf(\"%d\", decimal);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst hexMap = '0123456789ABCDEF';\nlet decimal = 0;\nfor(let i = 0; i < s.length; i++) {\n    decimal = decimal * 16 + hexMap.indexOf(s[i]);\n}\nconsole.log(decimal);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        int decimal = 0;\n        foreach(char ch in s) {\n            int val;\n            if(ch >= '0' && ch <= '9') val = ch - '0';\n            else val = ch - 'A' + 10;\n            decimal = decimal * 16 + val;\n        }\n        Console.WriteLine(decimal);\n    }\n}"
    },
    algorithmSteps: [
      "Initialize decimal = 0",
      "For each character in hex string:",
      "  - Convert char to value (0-15)",
      "  - decimal = decimal × 16 + value",
      "Print decimal"
    ],
    mathSolution: "Horner's method with base 16, map A=10 to F=15",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Convert A-F to values 10-15"
  },
 {
    id: 7,
    title: "Convert Binary to Hexadecimal",
    difficulty: "hard",
    topic: "conversion",
    subtopic: "binary-to-hexadecimal",
    category: "Problem Solving",
    tags: ["conversion", "binary", "hexadecimal", "hard"],
    desc: "Given a binary string <code>s</code>, convert it to hexadecimal and print the hexadecimal representation (uppercase A-F).",
    examples: [
      { input: "s = '1010'", output: "A", explanation: "Binary 1010 = Hex A" },
      { input: "s = '1111'", output: "F", explanation: "Binary 1111 = Hex F" },
      { input: "s = '1101'", output: "D", explanation: "Binary 1101 = Hex D" }
    ],
    testCases: [
      { input: "1010", output: "A" },
      { input: "1111", output: "F" },
      { input: "1101", output: "D" },
      { input: "101011", output: "2B" }
    ],
    constraints: ["1 <= |s| <= 32", "String contains only 0 and 1"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\n# Pad with leading zeros to make length multiple of 4\nwhile len(s) % 4 != 0:\n    s = '0' + s\nhex_chars = '0123456789ABCDEF'\nhex_str = ''\nfor i in range(0, len(s), 4):\n    group = s[i:i+4]\n    val = int(group, 2)\n    hex_str += hex_chars[val]\nprint(hex_str)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        while(s.length() % 4 != 0) s = \"0\" + s;\n        String hexChars = \"0123456789ABCDEF\";\n        StringBuilder hex = new StringBuilder();\n        for(int i = 0; i < s.length(); i += 4) {\n            int val = Integer.parseInt(s.substring(i, i+4), 2);\n            hex.append(hexChars.charAt(val));\n        }\n        System.out.println(hex);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    while(s.length() % 4 != 0) s = \"0\" + s;\n    string hexChars = \"0123456789ABCDEF\";\n    string hex = \"\";\n    for(int i = 0; i < s.length(); i += 4) {\n        int val = 0;\n        for(int j = 0; j < 4; j++) {\n            val = val * 2 + (s[i+j] - '0');\n        }\n        hex += hexChars[val];\n    }\n    cout << hex;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33]; scanf(\"%s\",s);\n    int len = strlen(s);\n    int pad = (4 - len % 4) % 4;\n    for(int i = 0; i < pad; i++) printf(\"0\");\n    for(int i = 0; i < len; i++) printf(\"%c\", s[i]);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet padded = s;\nwhile(padded.length % 4 !== 0) padded = '0' + padded;\nconst hexChars = '0123456789ABCDEF';\nlet hex = '';\nfor(let i = 0; i < padded.length; i += 4) {\n    const group = padded.substr(i, 4);\n    const val = parseInt(group, 2);\n    hex += hexChars[val];\n}\nconsole.log(hex);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        while(s.Length % 4 != 0) s = \"0\" + s;\n        string hexChars = \"0123456789ABCDEF\";\n        string hex = \"\";\n        for(int i = 0; i < s.Length; i += 4) {\n            int val = Convert.ToInt32(s.Substring(i, 4), 2);\n            hex += hexChars[val];\n        }\n        Console.WriteLine(hex);\n    }\n}"
    },
    algorithmSteps: [
      "Pad binary string with leading zeros to make length multiple of 4",
      "Group binary digits in sets of 4 from left",
      "Convert each 4-bit group to hex digit (0-F)",
      "Print concatenated hex digits"
    ],
    mathSolution: "Group binary digits in 4s, convert each group to hex",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    hint: "Each 4 binary digits = 1 hex digit"
  },

  // ==================== HARD (3 Questions) ====================
 {
    id: 8,
    title: "Convert Binary to Octal",
    difficulty: "medium",
    topic: "conversion",
    subtopic: "binary-to-octal",
    category: "Problem Solving",
    tags: ["conversion", "binary", "octal", "medium"],
    desc: "Given a binary string <code>s</code>, convert it to octal and print the octal representation.",
    examples: [
      { input: "s = '1010'", output: "12", explanation: "Binary 1010 = Octal 12" },
      { input: "s = '1111'", output: "17", explanation: "Binary 1111 = Octal 17" },
      { input: "s = '0'", output: "0", explanation: "Binary 0 = Octal 0" }
    ],
    testCases: [
      { input: "1010", output: "12" },
      { input: "1111", output: "17" },
      { input: "0", output: "0" },
      { input: "1101", output: "15" }
    ],
    constraints: ["1 <= |s| <= 32", "String contains only 0 and 1"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\n# Pad with leading zeros to make length multiple of 3\nwhile len(s) % 3 != 0:\n    s = '0' + s\noctal = ''\nfor i in range(0, len(s), 3):\n    group = s[i:i+3]\n    val = int(group, 2)\n    octal += str(val)\nprint(octal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Pad with leading zeros\n        while(s.length() % 3 != 0) s = \"0\" + s;\n        StringBuilder octal = new StringBuilder();\n        for(int i = 0; i < s.length(); i += 3) {\n            int val = Integer.parseInt(s.substring(i, i+3), 2);\n            octal.append(val);\n        }\n        System.out.println(octal);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    while(s.length() % 3 != 0) s = \"0\" + s;\n    string octal = \"\";\n    for(int i = 0; i < s.length(); i += 3) {\n        int val = 0;\n        for(int j = 0; j < 3; j++) {\n            val = val * 2 + (s[i+j] - '0');\n        }\n        octal += to_string(val);\n    }\n    cout << octal;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[33], padded[33];\n    scanf(\"%s\",s);\n    int len = strlen(s);\n    int pad = (3 - len % 3) % 3;\n    for(int i = 0; i < pad; i++) printf(\"0\");\n    printf(\"%s\", s);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet padded = s;\nwhile(padded.length % 3 !== 0) padded = '0' + padded;\nlet octal = '';\nfor(let i = 0; i < padded.length; i += 3) {\n    const group = padded.substr(i, 3);\n    const val = parseInt(group, 2);\n    octal += val;\n}\nconsole.log(octal);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        while(s.Length % 3 != 0) s = \"0\" + s;\n        string octal = \"\";\n        for(int i = 0; i < s.Length; i += 3) {\n            int val = Convert.ToInt32(s.Substring(i, 3), 2);\n            octal += val;\n        }\n        Console.WriteLine(octal);\n    }\n}"
    },
    algorithmSteps: [
      "Pad binary string with leading zeros to make length multiple of 3",
      "Group binary digits in sets of 3 from left",
      "Convert each 3-bit group to octal digit (0-7)",
      "Print concatenated octal digits"
    ],
    mathSolution: "Group binary digits in 3s, convert each group to octal",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    hint: "Each 3 binary digits = 1 octal digit"
  },
  {
    id: 9,
    title: "Convert Octal to Hexadecimal",
    difficulty: "hard",
    topic: "conversion",
    subtopic: "octal-to-hexadecimal",
    category: "Problem Solving",
    tags: ["conversion", "octal", "hexadecimal", "hard"],
    desc: "Given an octal string <code>s</code>, convert it to hexadecimal and print the hexadecimal representation (uppercase A-F).",
    examples: [
      { input: "s = '12'", output: "A", explanation: "Octal 12 = 10 decimal = Hex A" },
      { input: "s = '17'", output: "F", explanation: "Octal 17 = 15 decimal = Hex F" },
      { input: "s = '0'", output: "0", explanation: "Octal 0 = Hex 0" }
    ],
    testCases: [
      { input: "12", output: "A" },
      { input: "17", output: "F" },
      { input: "0", output: "0" },
      { input: "25", output: "15" }
    ],
    constraints: ["1 <= |s| <= 10", "String contains digits 0-7"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[11]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\n# Step 1: Octal to Decimal\ndecimal = 0\nfor digit in s:\n    decimal = decimal * 8 + int(digit)\n# Step 2: Decimal to Hexadecimal\nif decimal == 0:\n    print('0')\nelse:\n    hex_chars = '0123456789ABCDEF'\n    hex_str = ''\n    while decimal > 0:\n        hex_str = hex_chars[decimal % 16] + hex_str\n        decimal //= 16\n    print(hex_str)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Octal to Decimal\n        int decimal = 0;\n        for(int i = 0; i < s.length(); i++) {\n            decimal = decimal * 8 + (s.charAt(i) - '0');\n        }\n        // Decimal to Hexadecimal\n        if(decimal == 0) System.out.println(\"0\");\n        else {\n            String hexChars = \"0123456789ABCDEF\";\n            StringBuilder hex = new StringBuilder();\n            while(decimal > 0) {\n                hex.insert(0, hexChars.charAt(decimal % 16));\n                decimal /= 16;\n            }\n            System.out.println(hex);\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Octal to Decimal\n    int decimal = 0;\n    for(char c : s) {\n        decimal = decimal * 8 + (c - '0');\n    }\n    // Decimal to Hexadecimal\n    if(decimal == 0) cout << \"0\";\n    else {\n        string hexChars = \"0123456789ABCDEF\";\n        string hex = \"\";\n        while(decimal > 0) {\n            hex += hexChars[decimal % 16];\n            decimal /= 16;\n        }\n        reverse(hex.begin(), hex.end());\n        cout << hex;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[11]; scanf(\"%s\",s);\n    // Octal to Decimal\n    int decimal = 0;\n    for(int i = 0; i < strlen(s); i++) {\n        decimal = decimal * 8 + (s[i] - '0');\n    }\n    // Decimal to Hexadecimal\n    if(decimal == 0) printf(\"0\");\n    else {\n        char hex[32];\n        int i = 0;\n        while(decimal > 0) {\n            int rem = decimal % 16;\n            hex[i++] = (rem < 10) ? rem + '0' : rem - 10 + 'A';\n            decimal /= 16;\n        }\n        for(int j = i-1; j >= 0; j--) printf(\"%c\", hex[j]);\n    }\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Octal to Decimal\nlet decimal = 0;\nfor(let i = 0; i < s.length; i++) {\n    decimal = decimal * 8 + parseInt(s[i]);\n}\n// Decimal to Hexadecimal\nif(decimal === 0) console.log('0');\nelse {\n    const hexChars = '0123456789ABCDEF';\n    let hex = '';\n    while(decimal > 0) {\n        hex = hexChars[decimal % 16] + hex;\n        decimal = Math.floor(decimal / 16);\n    }\n    console.log(hex);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Octal to Decimal\n        int decimal = 0;\n        for(int i = 0; i < s.Length; i++) {\n            decimal = decimal * 8 + (s[i] - '0');\n        }\n        // Decimal to Hexadecimal\n        if(decimal == 0) Console.WriteLine(\"0\");\n        else {\n            string hexChars = \"0123456789ABCDEF\";\n            string hex = \"\";\n            while(decimal > 0) {\n                hex = hexChars[decimal % 16] + hex;\n                decimal /= 16;\n            }\n            Console.WriteLine(hex);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Step 1: Convert octal to decimal (multiply by 8 and add digit)",
      "Step 2: Convert decimal to hexadecimal (divide by 16, collect remainders)",
      "Print hexadecimal result"
    ],
    mathSolution: "Two-step conversion: octal → decimal → hexadecimal",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Convert to decimal first, then to hexadecimal"
  },
  {
    id: 10,
    title: "Convert Hexadecimal to Octal",
    difficulty: "hard",
    topic: "conversion",
    subtopic: "hexadecimal-to-octal",
    category: "Problem Solving",
    tags: ["conversion", "hexadecimal", "octal", "hard"],
    desc: "Given a hexadecimal string <code>s</code> (uppercase A-F), convert it to octal and print the octal representation.",
    examples: [
      { input: "s = 'A'", output: "12", explanation: "Hex A = 10 decimal = Octal 12" },
      { input: "s = 'F'", output: "17", explanation: "Hex F = 15 decimal = Octal 17" },
      { input: "s = '0'", output: "0", explanation: "Hex 0 = Octal 0" }
    ],
    testCases: [
      { input: "A", output: "12" },
      { input: "F", output: "17" },
      { input: "0", output: "0" },
      { input: "1A", output: "32" }
    ],
    constraints: ["1 <= |s| <= 6", "String contains 0-9, A-F"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[7]; scanf(\"%s\",s);\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\n# Step 1: Hexadecimal to Decimal\ndecimal = 0\nhex_map = '0123456789ABCDEF'\nfor ch in s:\n    decimal = decimal * 16 + hex_map.index(ch)\n# Step 2: Decimal to Octal\nif decimal == 0:\n    print('0')\nelse:\n    octal = ''\n    while decimal > 0:\n        octal = str(decimal % 8) + octal\n        decimal //= 8\n    print(octal)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // Hex to Decimal\n        int decimal = 0;\n        for(int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            int val;\n            if(ch >= '0' && ch <= '9') val = ch - '0';\n            else val = ch - 'A' + 10;\n            decimal = decimal * 16 + val;\n        }\n        // Decimal to Octal\n        if(decimal == 0) System.out.println(\"0\");\n        else {\n            StringBuilder octal = new StringBuilder();\n            while(decimal > 0) {\n                octal.insert(0, decimal % 8);\n                decimal /= 8;\n            }\n            System.out.println(octal);\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; cin >> s;\n    // Hex to Decimal\n    int decimal = 0;\n    for(char ch : s) {\n        int val;\n        if(ch >= '0' && ch <= '9') val = ch - '0';\n        else val = ch - 'A' + 10;\n        decimal = decimal * 16 + val;\n    }\n    // Decimal to Octal\n    if(decimal == 0) cout << \"0\";\n    else {\n        string octal = \"\";\n        while(decimal > 0) {\n            octal += to_string(decimal % 8);\n            decimal /= 8;\n        }\n        reverse(octal.begin(), octal.end());\n        cout << octal;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[7]; scanf(\"%s\",s);\n    // Hex to Decimal\n    int decimal = 0;\n    for(int i = 0; i < strlen(s); i++) {\n        int val;\n        if(s[i] >= '0' && s[i] <= '9') val = s[i] - '0';\n        else val = s[i] - 'A' + 10;\n        decimal = decimal * 16 + val;\n    }\n    // Decimal to Octal\n    if(decimal == 0) printf(\"0\");\n    else {\n        int octal[32], i = 0;\n        while(decimal > 0) {\n            octal[i++] = decimal % 8;\n            decimal /= 8;\n        }\n        for(int j = i-1; j >= 0; j--) printf(\"%d\", octal[j]);\n    }\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst hexMap = '0123456789ABCDEF';\n// Hex to Decimal\nlet decimal = 0;\nfor(let i = 0; i < s.length; i++) {\n    decimal = decimal * 16 + hexMap.indexOf(s[i]);\n}\n// Decimal to Octal\nif(decimal === 0) console.log('0');\nelse {\n    let octal = '';\n    while(decimal > 0) {\n        octal = (decimal % 8) + octal;\n        decimal = Math.floor(decimal / 8);\n    }\n    console.log(octal);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Hex to Decimal\n        int decimal = 0;\n        for(int i = 0; i < s.Length; i++) {\n            char ch = s[i];\n            int val;\n            if(ch >= '0' && ch <= '9') val = ch - '0';\n            else val = ch - 'A' + 10;\n            decimal = decimal * 16 + val;\n        }\n        // Decimal to Octal\n        if(decimal == 0) Console.WriteLine(\"0\");\n        else {\n            string octal = \"\";\n            while(decimal > 0) {\n                octal = (decimal % 8) + octal;\n                decimal /= 8;\n            }\n            Console.WriteLine(octal);\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Step 1: Convert hexadecimal to decimal",
      "Step 2: Convert decimal to octal",
      "Print octal result"
    ],
    mathSolution: "Two-step conversion: hex → decimal → octal",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Convert to decimal first, then to octal"
  }
];

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...conversionQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", conversionQuestions.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = conversionQuestions;
}