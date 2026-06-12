// ============================================================
// PATTERN PROBLEMS - MIXED (Easy, Medium, Hard)
// ============================================================

const patternProblems = [
 {
    id: 1,
    title: "Inverted Right Triangle Pattern",
    difficulty: "easy",
    topic: "patterns",
    subtopic: "inverted-triangle",
    category: "Problem Solving",
    tags: ["patterns", "inverted", "triangle", "easy"],
    desc: "Print an inverted right-angled triangle star pattern with <code>n</code> rows.",
    examples: [
      { input: "n = 3", output: "***\n**\n*", explanation: "3 rows inverted" },
      { input: "n = 5", output: "*****\n****\n***\n**\n*", explanation: "5 rows inverted" }
    ],
    testCases: [
      { input: "3", output: "***\n**\n*" },
      { input: "5", output: "*****\n****\n***\n**\n*" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(n, 0, -1):\n    print('*' * i)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = n; i >= 1; i--) {\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = n; i >= 1; i--) {\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = n; i >= 1; i--) {\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = n; i >= 1; i--) console.log('*'.repeat(i));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = n; i >= 1; i--) Console.WriteLine(new string('*', i));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from n down to 1: print i stars",
      "Move to next line"
    ],
    mathSolution: "Row i has i stars, decreasing",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Use decreasing loop"
  },
  {
    id: 2,
    title: "Print Number Triangle Pattern",
    difficulty: "easy",
    topic: "patterns",
    subtopic: "number-triangle",
    category: "Problem Solving",
    tags: ["patterns", "numbers", "triangle", "easy"],
    desc: "Print a right-angled triangle pattern with numbers from 1 to row number.",
    examples: [
      { input: "n = 3", output: "1\n12\n123", explanation: "Numbers 1 to row" },
      { input: "n = 5", output: "1\n12\n123\n1234\n12345", explanation: "Numbers 1 to row" }
    ],
    testCases: [
      { input: "3", output: "1\n12\n123" },
      { input: "5", output: "1\n12\n123\n1234\n12345" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    for j in range(1, i+1):\n        print(j, end='')\n    print()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) System.out.print(j);\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << j;\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) printf(\"%d\",j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) {\n    let row = '';\n    for(let j = 1; j <= i; j++) row += j;\n    console.log(row);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) Console.Write(j);\n            Console.WriteLine();\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 1 to n: print numbers 1 to i",
      "Move to next line"
    ],
    mathSolution: "Row i has numbers 1 through i",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Similar to star pattern but print numbers"
  },
  {
    id: 3,
    title: "Print Floyd's Triangle",
    difficulty: "medium",
    topic: "patterns",
    subtopic: "floyd-triangle",
    category: "Problem Solving",
    tags: ["patterns", "floyd", "numbers", "medium"],
    desc: "Print Floyd's Triangle with <code>n</code> rows (consecutive numbers).",
    examples: [
      { input: "n = 3", output: "1\n2 3\n4 5 6", explanation: "Consecutive numbers" },
      { input: "n = 4", output: "1\n2 3\n4 5 6\n7 8 9 10", explanation: "Consecutive numbers" }
    ],
    testCases: [
      { input: "3", output: "1\n2 3\n4 5 6" },
      { input: "4", output: "1\n2 3\n4 5 6\n7 8 9 10" }
    ],
    constraints: ["1 <= n <= 20"],
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
      python: "n = int(input())\nnum = 1\nfor i in range(1, n+1):\n    for j in range(1, i+1):\n        print(num, end=' ')\n        num += 1\n    print()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int num = 1;\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) System.out.print(num++ + \" \");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int num = 1;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << num++ << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    int num = 1;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) printf(\"%d \", num++);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet num = 1;\nfor(let i = 1; i <= n; i++) {\n    let row = [];\n    for(let j = 1; j <= i; j++) row.push(num++);\n    console.log(row.join(' '));\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int num = 1;\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) Console.Write(num++ + \" \");\n            Console.WriteLine();\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Initialize num = 1",
      "For i from 1 to n: print i numbers, increment num each time",
      "Move to next line"
    ],
    mathSolution: "Consecutive numbers in triangular arrangement",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Maintain a counter that increments"
  },
    {
    id: 4,
    title: "Diamond Star Pattern",
    difficulty: "hard",
    topic: "patterns",
    subtopic: "diamond",
    category: "Problem Solving",
    tags: ["patterns", "diamond", "stars", "hard"],
    desc: "Print a diamond star pattern with <code>n</code> rows (n should be odd).",
    examples: [
      { input: "n = 3", output: " *\n***\n *", explanation: "3 rows diamond" },
      { input: "n = 5", output: "  *\n ***\n*****\n ***\n  *", explanation: "5 rows diamond" }
    ],
    testCases: [
      { input: "3", output: " *\n***\n *" },
      { input: "5", output: "  *\n ***\n*****\n ***\n  *" }
    ],
    constraints: ["1 <= n <= 49, n is odd"],
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
      python: "n = int(input())\n# Upper half\nfor i in range(1, n+1, 2):\n    print(' ' * ((n-i)//2) + '*' * i)\n# Lower half\nfor i in range(n-2, 0, -2):\n    print(' ' * ((n-i)//2) + '*' * i)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i += 2) {\n            for(int j = 1; j <= (n-i)/2; j++) System.out.print(\" \");\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n        for(int i = n-2; i >= 1; i -= 2) {\n            for(int j = 1; j <= (n-i)/2; j++) System.out.print(\" \");\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i += 2) {\n        for(int j = 1; j <= (n-i)/2; j++) cout << \" \";\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    for(int i = n-2; i >= 1; i -= 2) {\n        for(int j = 1; j <= (n-i)/2; j++) cout << \" \";\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i += 2) {\n        for(int j = 1; j <= (n-i)/2; j++) printf(\" \");\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    for(int i = n-2; i >= 1; i -= 2) {\n        for(int j = 1; j <= (n-i)/2; j++) printf(\" \");\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i += 2) console.log(' '.repeat((n-i)/2) + '*'.repeat(i));\nfor(let i = n-2; i >= 1; i -= 2) console.log(' '.repeat((n-i)/2) + '*'.repeat(i));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i += 2) Console.WriteLine(new string(' ', (n-i)/2) + new string('*', i));\n        for(int i = n-2; i >= 1; i -= 2) Console.WriteLine(new string(' ', (n-i)/2) + new string('*', i));\n    }\n}"
    },
    algorithmSteps: [
      "Read n (odd)",
      "Upper half: i from 1 to n step 2: spaces = (n-i)/2, stars = i",
      "Lower half: i from n-2 to 1 step -2: spaces = (n-i)/2, stars = i"
    ],
    mathSolution: "Diamond = pyramid + inverted pyramid",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Divide into upper and lower halves"
  },
  {
    id: 5,
    title: "Hollow Square Pattern",
    difficulty: "medium",
    topic: "patterns",
    subtopic: "hollow-square",
    category: "Problem Solving",
    tags: ["patterns", "hollow", "square", "medium"],
    desc: "Print a hollow square pattern of stars with border only.",
    examples: [
      { input: "n = 3", output: "***\n* *\n***", explanation: "3x3 hollow" },
      { input: "n = 5", output: "*****\n*   *\n*   *\n*   *\n*****", explanation: "5x5 hollow" }
    ],
    testCases: [
      { input: "3", output: "***\n* *\n***" },
      { input: "5", output: "*****\n*   *\n*   *\n*   *\n*****" }
    ],
    constraints: ["3 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(n):\n    if i == 0 or i == n-1:\n        print('*' * n)\n    else:\n        print('*' + ' ' * (n-2) + '*')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 0; i < n; i++) {\n            if(i == 0 || i == n-1) {\n                for(int j = 0; j < n; j++) System.out.print(\"*\");\n            } else {\n                System.out.print(\"*\");\n                for(int j = 0; j < n-2; j++) System.out.print(\" \");\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 0; i < n; i++) {\n        if(i == 0 || i == n-1) {\n            for(int j = 0; j < n; j++) cout << \"*\";\n        } else {\n            cout << \"*\";\n            for(int j = 0; j < n-2; j++) cout << \" \";\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 0; i < n; i++) {\n        if(i == 0 || i == n-1) {\n            for(int j = 0; j < n; j++) printf(\"*\");\n        } else {\n            printf(\"*\");\n            for(int j = 0; j < n-2; j++) printf(\" \");\n            printf(\"*\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 0; i < n; i++) {\n    if(i === 0 || i === n-1) console.log('*'.repeat(n));\n    else console.log('*' + ' '.repeat(n-2) + '*');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 0; i < n; i++) {\n            if(i == 0 || i == n-1) Console.WriteLine(new string('*', n));\n            else Console.WriteLine(\"*\" + new string(' ', n-2) + \"*\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 0 to n-1:",
      "  - If first or last row: print n stars",
      "  - Else: print star, n-2 spaces, star"
    ],
    mathSolution: "Border only, interior spaces",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "First and last rows full, others have stars at ends"
  },
{
    id: 6,
    title: "Right Triangle Pattern",
    difficulty: "easy",
    topic: "patterns",
    subtopic: "right-triangle",
    category: "Problem Solving",
    tags: ["patterns", "triangle", "stars", "easy"],
    desc: "Print a right-angled triangle star pattern with <code>n</code> rows.",
    examples: [
      { input: "n = 3", output: "*\n**\n***", explanation: "3 rows triangle" },
      { input: "n = 5", output: "*\n**\n***\n****\n*****", explanation: "5 rows triangle" }
    ],
    testCases: [
      { input: "3", output: "*\n**\n***" },
      { input: "5", output: "*\n**\n***\n****\n*****" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    print('*' * i)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) console.log('*'.repeat(i));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) Console.WriteLine(new string('*', i));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 1 to n: print i stars",
      "Move to next line"
    ],
    mathSolution: "Row i has i stars",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Inner loop runs i times"
  },
  {
    id: 7,
    title: " Alphabet Triangle Pattern",
    difficulty: "medium",
    topic: "patterns",
    subtopic: "alphabet-triangle",
    category: "Problem Solving",
    tags: ["patterns", "alphabet", "triangle", "medium"],
    desc: "Print a right-angled triangle pattern with alphabets. Each row starts with 'A' and increments.",
    examples: [
      { input: "n = 3", output: "A\nAB\nABC", explanation: "First 3 alphabets" },
      { input: "n = 5", output: "A\nAB\nABC\nABCD\nABCDE", explanation: "First 5 alphabets" }
    ],
    testCases: [
      { input: "3", output: "A\nAB\nABC" },
      { input: "5", output: "A\nAB\nABC\nABCD\nABCDE" }
    ],
    constraints: ["1 <= n <= 26"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    for j in range(1, i+1):\n        print(chr(64 + j), end='')\n    print()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) System.out.print((char)(64 + j));\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << char(64 + j);\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) printf(\"%c\", 64 + j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) {\n    let row = '';\n    for(let j = 1; j <= i; j++) row += String.fromCharCode(64 + j);\n    console.log(row);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) Console.Write((char)(64 + j));\n            Console.WriteLine();\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n (max 26)",
      "For i from 1 to n: print alphabets A to (A+i-1)",
      "Move to next line"
    ],
    mathSolution: "ASCII: 65='A'",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Use ASCII values: char(64+j)"
  },
  {
    id: 8,
    title: "Print Pascal's Triangle",
    difficulty: "hard",
    topic: "patterns",
    subtopic: "pascal-triangle",
    category: "Problem Solving",
    tags: ["patterns", "pascal", "binomial", "hard"],
    desc: "Print Pascal's Triangle with <code>n</code> rows.",
    examples: [
      { input: "n = 3", output: "  1\n 1 1\n1 2 1", explanation: "3 rows Pascal" },
      { input: "n = 5", output: "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1", explanation: "5 rows Pascal" }
    ],
    testCases: [
      { input: "3", output: "  1\n 1 1\n1 2 1" },
      { input: "5", output: "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1" }
    ],
    constraints: ["1 <= n <= 15"],
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
      python: "n = int(input())\nfor i in range(n):\n    num = 1\n    print(' ' * (n - i - 1), end='')\n    for j in range(i + 1):\n        print(num, end=' ')\n        num = num * (i - j) // (j + 1)\n    print()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 0; i < n; i++) {\n            int num = 1;\n            for(int j = 1; j <= n - i; j++) System.out.print(\" \");\n            for(int j = 0; j <= i; j++) {\n                System.out.print(num + \" \");\n                num = num * (i - j) / (j + 1);\n            }\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 0; i < n; i++) {\n        int num = 1;\n        for(int j = 1; j <= n - i; j++) cout << \" \";\n        for(int j = 0; j <= i; j++) {\n            cout << num << \" \";\n            num = num * (i - j) / (j + 1);\n        }\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 0; i < n; i++) {\n        int num = 1;\n        for(int j = 1; j <= n - i; j++) printf(\" \");\n        for(int j = 0; j <= i; j++) {\n            printf(\"%d \", num);\n            num = num * (i - j) / (j + 1);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 0; i < n; i++) {\n    let num = 1;\n    let row = ' '.repeat(n - i - 1);\n    for(let j = 0; j <= i; j++) {\n        row += num + ' ';\n        num = num * (i - j) / (j + 1);\n    }\n    console.log(row);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 0; i < n; i++) {\n            int num = 1;\n            for(int j = 1; j <= n - i; j++) Console.Write(\" \");\n            for(int j = 0; j <= i; j++) {\n                Console.Write(num + \" \");\n                num = num * (i - j) / (j + 1);\n            }\n            Console.WriteLine();\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 0 to n-1:",
      "  - Initialize num = 1",
      "  - Print spaces for alignment",
      "  - For j from 0 to i:",
      "    - Print num",
      "    - Update num = num * (i-j) / (j+1)",
      "  - Move to next line"
    ],
    mathSolution: "Each element is C(i,j) using recurrence",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Use formula: C(i,j) = C(i,j-1) * (i-j+1)/j"
  },
 {
    id: 9,
    title: "Print Butterfly Pattern",
    difficulty: "hard",
    topic: "patterns",
    subtopic: "butterfly",
    category: "Problem Solving",
    tags: ["patterns", "butterfly", "symmetry", "hard"],
    desc: "Print a beautiful butterfly pattern with <code>n</code> wingspan.",
    examples: [
      { input: "n = 3", output: "*   *\n** **\n*****\n** **\n*   *", explanation: "3 wingspan butterfly" },
      { input: "n = 5", output: "*        *\n**      **\n***    ***\n****  ****\n**********\n****  ****\n***    ***\n**      **\n*        *", explanation: "5 wingspan butterfly" }
    ],
    testCases: [
      { input: "3", output: "*   *\n** **\n*****\n** **\n*   *" },
      { input: "5", output: "*        *\n**      **\n***    ***\n****  ****\n**********\n****  ****\n***    ***\n**      **\n*        *" }
    ],
    constraints: ["1 <= n <= 30"],
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
      python: "n = int(input())\n# Upper half\nfor i in range(1, n+1):\n    print('*' * i + ' ' * (2*(n-i)) + '*' * i)\n# Lower half\nfor i in range(n-1, 0, -1):\n    print('*' * i + ' ' * (2*(n-i)) + '*' * i)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            for(int j = 1; j <= 2*(n-i); j++) System.out.print(\" \");\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n        for(int i = n-1; i >= 1; i--) {\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            for(int j = 1; j <= 2*(n-i); j++) System.out.print(\" \");\n            for(int j = 1; j <= i; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        for(int j = 1; j <= 2*(n-i); j++) cout << \" \";\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        for(int j = 1; j <= 2*(n-i); j++) cout << \" \";\n        for(int j = 1; j <= i; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        for(int j = 1; j <= 2*(n-i); j++) printf(\" \");\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        for(int j = 1; j <= 2*(n-i); j++) printf(\" \");\n        for(int j = 1; j <= i; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) console.log('*'.repeat(i) + ' '.repeat(2*(n-i)) + '*'.repeat(i));\nfor(let i = n-1; i >= 1; i--) console.log('*'.repeat(i) + ' '.repeat(2*(n-i)) + '*'.repeat(i));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) Console.WriteLine(new string('*', i) + new string(' ', 2*(n-i)) + new string('*', i));\n        for(int i = n-1; i >= 1; i--) Console.WriteLine(new string('*', i) + new string(' ', 2*(n-i)) + new string('*', i));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "Upper half: i from 1 to n: i stars, 2*(n-i) spaces, i stars",
      "Lower half: i from n-1 to 1: i stars, 2*(n-i) spaces, i stars"
    ],
    mathSolution: "Symmetrical butterfly pattern",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Spaces between wings = 2*(n-i)"
  },
  
 {
    id: 10,
    title: "Inverted Star Pyramid Pattern",
    difficulty: "medium",
    topic: "patterns",
    subtopic: "inverted-pyramid",
    category: "Problem Solving",
    tags: ["patterns", "inverted", "pyramid", "medium"],
    desc: "Print an inverted centered star pyramid pattern with <code>n</code> rows.",
    examples: [
      { input: "n = 3", output: "*****\n ***\n  *", explanation: "3 rows inverted pyramid" },
      { input: "n = 5", output: "*********\n *******\n  *****\n   ***\n    *", explanation: "5 rows inverted pyramid" }
    ],
    testCases: [
      { input: "3", output: "*****\n ***\n  *" },
      { input: "5", output: "*********\n *******\n  *****\n   ***\n    *" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(n, 0, -1):\n    print(' ' * (n-i) + '*' * (2*i-1))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = n; i >= 1; i--) {\n            for(int j = 1; j <= n-i; j++) System.out.print(\" \");\n            for(int j = 1; j <= 2*i-1; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = n; i >= 1; i--) {\n        for(int j = 1; j <= n-i; j++) cout << \" \";\n        for(int j = 1; j <= 2*i-1; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = n; i >= 1; i--) {\n        for(int j = 1; j <= n-i; j++) printf(\" \");\n        for(int j = 1; j <= 2*i-1; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = n; i >= 1; i--) console.log(' '.repeat(n-i) + '*'.repeat(2*i-1));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = n; i >= 1; i--) Console.WriteLine(new string(' ', n-i) + new string('*', 2*i-1));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from n down to 1: print (n-i) spaces + (2i-1) stars",
      "Move to next line"
    ],
    mathSolution: "Reverse of pyramid",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Reverse loop from n to 1"
  },
  {
    id: 11,
    title: "Print Rectangle Pattern",
    difficulty: "easy",
    topic: "patterns",
    subtopic: "rectangle-pattern",
    category: "Problem Solving",
    tags: ["patterns", "rectangle", "nested-loops", "easy"],
    desc: "Print a rectangle pattern of stars with <code>rows</code> and <code>cols</code> dimensions.",
    examples: [
      { input: "rows = 3, cols = 4", output: "****\n****\n****", explanation: "3 rows, 4 columns" },
      { input: "rows = 4, cols = 6", output: "******\n******\n******\n******", explanation: "4 rows, 6 columns" }
    ],
    testCases: [
      { input: "3 4", output: "****\n****\n****" },
      { input: "4 6", output: "******\n******\n******\n******" }
    ],
    constraints: ["1 <= rows, cols <= 50"],
    videoId: "",
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "rows, cols = map(int, input().split())\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int rows = sc.nextInt();\n        int cols = sc.nextInt();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int rows, cols; cin >> rows >> cols;\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int rows, cols; scanf(\"%d%d\",&rows,&cols);\n    // Write your code here\n    return 0;\n}",
      javascript: "const [rows, cols] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int rows = int.Parse(input[0]);\n        int cols = int.Parse(input[1]);\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "rows, cols = map(int, input().split())\nfor i in range(rows):\n    print('*' * cols)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int rows = sc.nextInt();\n        int cols = sc.nextInt();\n        for(int i = 0; i < rows; i++) {\n            for(int j = 0; j < cols; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int rows, cols; cin >> rows >> cols;\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int rows, cols; scanf(\"%d%d\",&rows,&cols);\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const [rows, cols] = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);\nfor(let i = 0; i < rows; i++) console.log('*'.repeat(cols));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string[] input = Console.ReadLine().Split();\n        int rows = int.Parse(input[0]);\n        int cols = int.Parse(input[1]);\n        for(int i = 0; i < rows; i++) Console.WriteLine(new string('*', cols));\n    }\n}"
    },
    algorithmSteps: [
      "Read rows and cols",
      "For i from 1 to rows: print cols stars",
      "Move to next line"
    ],
    mathSolution: "rows × cols rectangle of stars",
    timeComplexity: "O(rows × cols)",
    spaceComplexity: "O(1)",
    hint: "Outer loop rows, inner loop columns"
  },
   {
    id: 12,
    title: " Hollow Triangle Pattern",
    difficulty: "hard",
    topic: "patterns",
    subtopic: "hollow-triangle",
    category: "Problem Solving",
    tags: ["patterns", "hollow", "triangle", "hard"],
    desc: "Print a hollow right-angled triangle star pattern (border only).",
    examples: [
      { input: "n = 3", output: "*\n**\n***", explanation: "3 rows hollow (full for n=3)" },
      { input: "n = 5", output: "*\n**\n* *\n*  *\n*****", explanation: "5 rows hollow" }
    ],
    testCases: [
      { input: "3", output: "*\n**\n***" },
      { input: "5", output: "*\n**\n* *\n*  *\n*****" }
    ],
    constraints: ["3 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    if i == 1:\n        print('*')\n    elif i == n:\n        print('*' * n)\n    else:\n        print('*' + ' ' * (i-2) + '*')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            if(i == 1) System.out.println(\"*\");\n            else if(i == n) {\n                for(int j = 1; j <= n; j++) System.out.print(\"*\");\n                System.out.println();\n            } else {\n                System.out.print(\"*\");\n                for(int j = 1; j <= i-2; j++) System.out.print(\" \");\n                System.out.println(\"*\");\n            }\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        if(i == 1) cout << \"*\" << endl;\n        else if(i == n) {\n            for(int j = 1; j <= n; j++) cout << \"*\";\n            cout << endl;\n        } else {\n            cout << \"*\";\n            for(int j = 1; j <= i-2; j++) cout << \" \";\n            cout << \"*\" << endl;\n        }\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        if(i == 1) printf(\"*\\n\");\n        else if(i == n) {\n            for(int j = 1; j <= n; j++) printf(\"*\");\n            printf(\"\\n\");\n        } else {\n            printf(\"*\");\n            for(int j = 1; j <= i-2; j++) printf(\" \");\n            printf(\"*\\n\");\n        }\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) {\n    if(i === 1) console.log('*');\n    else if(i === n) console.log('*'.repeat(n));\n    else console.log('*' + ' '.repeat(i-2) + '*');\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) {\n            if(i == 1) Console.WriteLine(\"*\");\n            else if(i == n) Console.WriteLine(new string('*', n));\n            else Console.WriteLine(\"*\" + new string(' ', i-2) + \"*\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 1 to n:",
      "  - If i == 1: print single star",
      "  - Else if i == n: print n stars",
      "  - Else: print star, i-2 spaces, star"
    ],
    mathSolution: "Border only: first row 1 star, last row full",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "First row has 1 star, last row has n stars"
  },
  {
    id: 13,
    title: "Print Square Pattern",
    difficulty: "easy",
    topic: "patterns",
    subtopic: "square-pattern",
    category: "Problem Solving",
    tags: ["patterns", "square", "nested-loops", "easy"],
    desc: "Print a square pattern of stars with <code>n</code> rows and <code>n</code> columns.",
    examples: [
      { input: "n = 3", output: "***\n***\n***", explanation: "3x3 square" },
      { input: "n = 5", output: "*****\n*****\n*****\n*****\n*****", explanation: "5x5 square" }
    ],
    testCases: [
      { input: "3", output: "***\n***\n***" },
      { input: "5", output: "*****\n*****\n*****\n*****\n*****" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(n):\n    print('*' * n)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 0; i < n; i++) console.log('*'.repeat(n));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 0; i < n; i++) Console.WriteLine(new string('*', n));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 1 to n: print n stars",
      "Move to next line"
    ],
    mathSolution: "n × n square of stars",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Use nested loops"
  },
  {
    id: 14,
    title: "Star Pyramid Pattern",
    difficulty: "medium",
    topic: "patterns",
    subtopic: "star-pyramid",
    category: "Problem Solving",
    tags: ["patterns", "pyramid", "stars", "medium"],
    desc: "Print a centered star pyramid pattern with <code>n</code> rows.",
    examples: [
      { input: "n = 3", output: "  *\n ***\n*****", explanation: "3 rows pyramid" },
      { input: "n = 5", output: "    *\n   ***\n  *****\n *******\n*********", explanation: "5 rows pyramid" }
    ],
    testCases: [
      { input: "3", output: "  *\n ***\n*****" },
      { input: "5", output: "    *\n   ***\n  *****\n *******\n*********" }
    ],
    constraints: ["1 <= n <= 50"],
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
      python: "n = int(input())\nfor i in range(1, n+1):\n    print(' ' * (n-i) + '*' * (2*i-1))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= n-i; j++) System.out.print(\" \");\n            for(int j = 1; j <= 2*i-1; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << \" \";\n        for(int j = 1; j <= 2*i-1; j++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) printf(\" \");\n        for(int j = 1; j <= 2*i-1; j++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= n; i++) console.log(' '.repeat(n-i) + '*'.repeat(2*i-1));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= n; i++) Console.WriteLine(new string(' ', n-i) + new string('*', 2*i-1));\n    }\n}"
    },
    algorithmSteps: [
      "Read n",
      "For i from 1 to n: print (n-i) spaces + (2i-1) stars",
      "Move to next line"
    ],
    mathSolution: "Spaces decrease, stars increase",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Stars = 2*i-1, Spaces = n-i"
  },
  {
    id: 15,
    title: "X Pattern using Stars",
    difficulty: "hard",
    topic: "patterns",
    subtopic: "x-pattern",
    category: "Problem Solving",
    tags: ["patterns", "x-shape", "diagonals", "hard"],
    desc: "Print an X pattern (cross) of stars with size <code>n</code> (n should be odd).",
    examples: [
      { input: "n = 3", output: "* *\n *\n* *", explanation: "3x3 X pattern" },
      { input: "n = 5", output: "*   *\n * *\n  *\n * *\n*   *", explanation: "5x5 X pattern" }
    ],
    testCases: [
      { input: "3", output: "* *\n *\n* *" },
      { input: "5", output: "*   *\n * *\n  *\n * *\n*   *" }
    ],
    constraints: ["3 <= n <= 50, n is odd"],
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
      python: "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == j or i + j == n - 1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                if(i == j || i + j == n - 1) System.out.print(\"*\");\n                else System.out.print(\" \");\n            }\n            System.out.println();\n        }\n    }\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            if(i == j || i + j == n - 1) cout << \"*\";\n            else cout << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\",&n);\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            if(i == j || i + j == n - 1) printf(\"*\");\n            else printf(\" \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      javascript: "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 0; i < n; i++) {\n    let row = '';\n    for(let j = 0; j < n; j++) {\n        row += (i === j || i + j === n - 1) ? '*' : ' ';\n    }\n    console.log(row);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                if(i == j || i + j == n - 1) Console.Write(\"*\");\n                else Console.Write(\" \");\n            }\n            Console.WriteLine();\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read n (odd)",
      "For i from 0 to n-1:",
      "  - For j from 0 to n-1:",
      "    - If i==j or i+j==n-1: print star",
      "    - Else: print space",
      "  - Move to next line"
    ],
    mathSolution: "Print stars on main diagonal and anti-diagonal",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    hint: "Two diagonals: i==j and i+j==n-1"
  }
];

// Export
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
//xp
   window.questions.push(
    ...patternProblems.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", patternProblems.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = patternProblems;
}