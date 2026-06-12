// ============================================================
// LOOPS QUESTIONS
// ============================================================

const loopsQuestions = [
  {
    "id": 1,
    "title": "Print Numbers from 1 to 100",
    "difficulty": "easy",
    "topic": "loops",
    "subtopic": "basic-io",
    "category": "Problem Solving",
    "tags": ["loop", "basic", "output"],
    "desc": "Write a program to print all numbers from 1 to 100 in separate lines.",
    "examples": [
      { "input": "No input", "output": "1\\n2\\n3\\n...\\n100", "explanation": "Numbers from 1 to 100 printed line by line." }
    ],
    "testCases": [
      { "input": "", "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100" }
    ],
    "constraints": ["No input required"],
    "videoId": "yuEy9WgOPp0",
    "videoStart": 72,
    "videoEnd": 109,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(1, 101):\n    print(i)",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 100; i++) System.out.println(i);\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 100; i++) cout << i << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 100; i++) printf(\"%d\\n\", i);\n    return 0;\n}",
      "javascript": "for(let i = 1; i <= 100; i++) console.log(i);",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        for(int i = 1; i <= 100; i++) Console.WriteLine(i);\n    }\n}"
    },
    "algorithmSteps": [
      "Initialize a loop variable i = 1",
      "While i <= 100: print the value of i",
      "Increment i by 1",
      "Repeat steps 2-3 until i > 100"
    ],
    "mathSolution": "Use a loop from 1 to 100 and print each number.",
    "timeComplexity": "O(n) where n = 100",
    "spaceComplexity": "O(1)",
    "hint": "Use a for loop with range(1, 101) in Python or equivalent in other languages."
  },
  {
    "id": 2,
    "title": "Print All Even Numbers from 1 to 100",
    "difficulty": "easy",
    "topic": "loops",
    "subtopic": "basic-io",
    "category": "Problem Solving",
    "tags": ["loop", "even-numbers", "basic"],
    "desc": "Write a program to print all even numbers from 1 to 100.",
    "examples": [
      { "input": "No input", "output": "2 4 6 8 10 ... 100", "explanation": "Even numbers between 1 and 100 printed." }
    ],
    "testCases": [
      { "input": "", "output": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100" }
    ],
    "constraints": ["No input required"],
    "videoId": "yuEy9WgOPp0",
    "videoStart": 185,
    "videoEnd": 219,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(2, 101, 2):\n    print(i, end=' ' if i < 100 else '')",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 2; i <= 100; i += 2) System.out.print(i + (i < 100 ? \" \" : \"\"));\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 2; i <= 100; i += 2) cout << i << (i < 100 ? \" \" : \"\");\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 2; i <= 100; i += 2) printf(\"%d%c\", i, (i < 100 ? ' ' : '\\n'));\n    return 0;\n}",
      "javascript": "let res = [];\nfor(let i = 2; i <= 100; i += 2) res.push(i);\nconsole.log(res.join(' '));",
      "csharp": "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        var res = new List<string>();\n        for(int i = 2; i <= 100; i += 2) res.Add(i.ToString());\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    "algorithmSteps": [
      "Initialize a loop variable i = 2 (first even number)",
      "While i <= 100: print the value of i",
      "Increment i by 2 to get next even number",
      "Repeat steps 2-3 until i > 100"
    ],
    "mathSolution": "Even numbers are divisible by 2. Start from 2 and add 2 each time.",
    "timeComplexity": "O(n) where n = 100",
    "spaceComplexity": "O(1)",
    "hint": "Use step value of 2 in your loop to get only even numbers."
  },
  {
    "id": 3,
    "title": "Sum of Natural Numbers up to N",
    "difficulty": "medium",
    "topic": "loops",
    "subtopic": "sum",
    "category": "Problem Solving",
    "tags": ["loop", "sum", "natural-numbers"],
    "desc": "Given an integer N, find the sum of natural numbers from 1 to N.",
    "examples": [
      { "input": "n = 5", "output": "Sum = 15", "explanation": "1 + 2 + 3 + 4 + 5 = 15" },
      { "input": "n = 10", "output": "Sum = 55", "explanation": "1 + 2 + ... + 10 = 55" }
    ],
    "testCases": [
      { "input": "5", "output": "Sum = 15" },
      { "input": "10", "output": "Sum = 55" },
      { "input": "1", "output": "Sum = 1" }
    ],
    "constraints": ["1 <= n <= 10000"],
    "videoId": "yuEy9WgOPp0",
    "videoStart": 315,
    "videoEnd": 398,
    "starterCode": {
      "python": "n = int(input())\n# Write your code here",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\", &n);\n    // Write your code here\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "n = int(input())\ns = 0\nfor i in range(1, n + 1):\n    s += i\nprint(f\"Sum = {s}\")",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int s = 0;\n        for(int i = 1; i <= n; i++) s += i;\n        System.out.println(\"Sum = \" + s);\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int s = 0;\n    for(int i = 1; i <= n; i++) s += i;\n    cout << \"Sum = \" << s;\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n, s = 0; scanf(\"%d\", &n);\n    for(int i = 1; i <= n; i++) s += i;\n    printf(\"Sum = %d\", s);\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet s = 0;\nfor(let i = 1; i <= n; i++) s += i;\nconsole.log(`Sum = ${s}`);",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int s = 0;\n        for(int i = 1; i <= n; i++) s += i;\n        Console.WriteLine($\"Sum = {s}\");\n    }\n}"
    },
    "algorithmSteps": [
      "Read integer n from input",
      "Initialize sum variable to 0",
      "Loop i from 1 to n",
      "Add i to sum in each iteration",
      "Print the final sum"
    ],
    "mathSolution": "Sum of first n natural numbers = n * (n + 1) / 2",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "hint": "You can also use the mathematical formula n*(n+1)/2 for O(1) solution."
  },
  {
    "id": 4,
    "title": "Sum of All Even Numbers up to N",
    "difficulty": "easy",
    "topic": "loops",
    "subtopic": "sum",
    "category": "Problem Solving",
    "tags": ["loop", "even-numbers", "sum"],
    "desc": "Given an integer N, find the sum of all even numbers from 1 to N.",
    "examples": [
      { "input": "n = 10", "output": "Sum of even numbers = 30", "explanation": "2 + 4 + 6 + 8 + 10 = 30" },
      { "input": "n = 7", "output": "Sum of even numbers = 12", "explanation": "2 + 4 + 6 = 12" }
    ],
    "testCases": [
      { "input": "10", "output": "Sum of even numbers = 30" },
      { "input": "7", "output": "Sum of even numbers = 12" },
      { "input": "2", "output": "Sum of even numbers = 2" }
    ],
    "constraints": ["1 <= n <= 10000"],
    "videoId": "yuEy9WgOPp0",
    "videoStart": 458,
    "videoEnd": 572,
    "starterCode": {
      "python": "n = int(input())\n# Write your code here",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\", &n);\n    // Write your code here\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "n = int(input())\ns = 0\nfor i in range(2, n + 1, 2):\n    s += i\nprint(f\"Sum of even numbers = {s}\")",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int s = 0;\n        for(int i = 2; i <= n; i += 2) s += i;\n        System.out.println(\"Sum of even numbers = \" + s);\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, s = 0; cin >> n;\n    for(int i = 2; i <= n; i += 2) s += i;\n    cout << \"Sum of even numbers = \" << s;\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n, s = 0; scanf(\"%d\", &n);\n    for(int i = 2; i <= n; i += 2) s += i;\n    printf(\"Sum of even numbers = %d\", s);\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nlet s = 0;\nfor(let i = 2; i <= n; i += 2) s += i;\nconsole.log(`Sum of even numbers = ${s}`);",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        int s = 0;\n        for(int i = 2; i <= n; i += 2) s += i;\n        Console.WriteLine($\"Sum of even numbers = {s}\");\n    }\n}"
    },
    "algorithmSteps": [
      "Read integer n from input",
      "Initialize sum variable to 0",
      "Loop i from 2 to n with step 2",
      "Add i to sum in each iteration",
      "Print the final sum"
    ],
    "mathSolution": "Add only numbers divisible by 2 using modulo or step loop.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "hint": "Use step=2 in your loop starting from 2."
  },
  {
    "id": 5,
    "title": "Numbers Divisible by 3 and 5 from 1 to 100",
    "difficulty": "medium",
    "topic": "loops",
    "subtopic": "divisibility",
    "category": "Problem Solving",
    "tags": ["loop", "divisibility", "and-operator"],
    "desc": "Write a program to print all numbers from 1 to 100 that are divisible by both 3 and 5.",
    "examples": [
      { "input": "No input", "output": "15 30 45 60 75 90", "explanation": "Numbers divisible by both 3 and 5 (divisible by 15)" }
    ],
    "testCases": [
      { "input": "", "output": "15 30 45 60 75 90" }
    ],
    "constraints": ["No input required"],
    "videoId": "yuEy9WgOPp0",
    "videoStart": 679,
    "videoEnd": 747,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        print(i, end=' ' if i < 90 else '')",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 100; i++) \n            if(i % 3 == 0 && i % 5 == 0) \n                System.out.print(i + (i < 90 ? \" \" : \"\"));\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 3 == 0 && i % 5 == 0) \n            cout << i << (i < 90 ? \" \" : \"\");\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 3 == 0 && i % 5 == 0) \n            printf(\"%d%c\", i, (i < 90 ? ' ' : '\\n'));\n    return 0;\n}",
      "javascript": "let res = [];\nfor(let i = 1; i <= 100; i++) \n    if(i % 3 === 0 && i % 5 === 0) res.push(i);\nconsole.log(res.join(' '));",
      "csharp": "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        var res = new List<string>();\n        for(int i = 1; i <= 100; i++) \n            if(i % 3 == 0 && i % 5 == 0) res.Add(i.ToString());\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    "algorithmSteps": [
      "Loop i from 1 to 100",
      "Check if i is divisible by 3 AND divisible by 5",
      "If true, print i",
      "Continue loop"
    ],
    "mathSolution": "Numbers divisible by both 3 and 5 are divisible by their LCM which is 15.",
    "timeComplexity": "O(n) where n = 100",
    "spaceComplexity": "O(1)",
    "hint": "Use the AND operator (&& in Java/C++, and in Python) to check both conditions."
  },
  {
    "id": 6,
    "title": "Numbers Divisible by 5 or 7 from 1 to 100",
    "difficulty": "easy",
    "topic": "loops",
    "subtopic": "divisibility",
    "category": "Problem Solving",
    "tags": ["loop", "divisibility", "or-operator"],
    "desc": "Write a program to print all numbers from 1 to 100 that are divisible by 5 or 7.",
    "examples": [
      { "input": "No input", "output": "5 7 10 14 15 20 21 25 28 30 35 40 42 45 49 50 55 56 60 63 65 70 75 77 80 84 85 90 91 95 98 100", "explanation": "Numbers divisible by 5 OR 7" }
    ],
    "testCases": [
      { "input": "", "output": "5 7 10 14 15 20 21 25 28 30 35 40 42 45 49 50 55 56 60 63 65 70 75 77 80 84 85 90 91 95 98 100" }
    ],
    "constraints": ["No input required"],
    "videoId": "x9EBC_KRWxc",
    "videoStart": 79,
    "videoEnd": 157,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(1, 101):\n    if i % 5 == 0 or i % 7 == 0:\n        print(i, end=' ')",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 100; i++) \n            if(i % 5 == 0 || i % 7 == 0) \n                System.out.print(i + \" \");\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 5 == 0 || i % 7 == 0) \n            cout << i << \" \";\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 5 == 0 || i % 7 == 0) \n            printf(\"%d \", i);\n    return 0;\n}",
      "javascript": "let res = [];\nfor(let i = 1; i <= 100; i++) \n    if(i % 5 === 0 || i % 7 === 0) res.push(i);\nconsole.log(res.join(' '));",
      "csharp": "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        var res = new List<string>();\n        for(int i = 1; i <= 100; i++) \n            if(i % 5 == 0 || i % 7 == 0) res.Add(i.ToString());\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    "algorithmSteps": [
      "Loop i from 1 to 100",
      "Check if i is divisible by 5 OR divisible by 7",
      "If true, print i",
      "Continue loop"
    ],
    "mathSolution": "Use OR operator to include numbers that satisfy at least one condition.",
    "timeComplexity": "O(n) where n = 100",
    "spaceComplexity": "O(1)",
    "hint": "Use the OR operator (|| in Java/C++, or in Python) to check either condition."
  },
  {
    "id": 7,
    "title": "Multiplication Table of a Given Number",
    "difficulty": "medium",
    "topic": "loops",
    "subtopic": "multiplication",
    "category": "Problem Solving",
    "tags": ["loop", "multiplication", "table"],
    "desc": "Given a number N, print its multiplication table from 1 to 10.",
    "examples": [
      { "input": "n = 5", "output": "5 x 1 = 5\\n5 x 2 = 10\\n5 x 3 = 15\\n5 x 4 = 20\\n5 x 5 = 25\\n5 x 6 = 30\\n5 x 7 = 35\\n5 x 8 = 40\\n5 x 9 = 45\\n5 x 10 = 50", "explanation": "Multiplication table of 5" }
    ],
    "testCases": [
      { "input": "5", "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50" },
      { "input": "3", "output": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30" },
      { "input": "10", "output": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100" }
    ],
    "constraints": ["1 <= n <= 1000"],
    "videoId": "x9EBC_KRWxc",
    "videoStart": 189,
    "videoEnd": 288,
    "starterCode": {
      "python": "n = int(input())\n# Write your code here",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\", &n);\n    // Write your code here\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\n// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "n = int(input())\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")",
      "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i = 1; i <= 10; i++) \n            System.out.println(n + \" x \" + i + \" = \" + (n * i));\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for(int i = 1; i <= 10; i++) \n        cout << n << \" x \" << i << \" = \" << n * i << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\", &n);\n    for(int i = 1; i <= 10; i++) \n        printf(\"%d x %d = %d\\n\", n, i, n * i);\n    return 0;\n}",
      "javascript": "const n = parseInt(require('fs').readFileSync('/dev/stdin','utf8').trim());\nfor(let i = 1; i <= 10; i++) \n    console.log(`${n} x ${i} = ${n * i}`);",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        for(int i = 1; i <= 10; i++) \n            Console.WriteLine($\"{n} x {i} = {n * i}\");\n    }\n}"
    },
    "algorithmSteps": [
      "Read integer n from input",
      "Loop i from 1 to 10",
      "Calculate product = n * i",
      "Print in format: n x i = product",
      "Repeat for all i"
    ],
    "mathSolution": "Multiplication table shows successive multiples of n from 1 to 10.",
    "timeComplexity": "O(10) = O(1)",
    "spaceComplexity": "O(1)",
    "hint": "Use a loop from 1 to 10 and multiply n with the loop variable."
  },
  {
    "id": 8,
    "title": "Square and Cube of Numbers from 1 to 10",
    "difficulty": "hard",
    "topic": "loops",
    "subtopic": "power",
    "category": "Problem Solving",
    "tags": ["loop", "square", "cube"],
    "desc": "Write a program to find the square and cube of each number from 1 to 10.",
    "examples": [
      { "input": "No input", "output": "1 Square: 1 Cube: 1\\n2 Square: 4 Cube: 8\\n3 Square: 9 Cube: 27\\n4 Square: 16 Cube: 64\\n5 Square: 25 Cube: 125\\n6 Square: 36 Cube: 216\\n7 Square: 49 Cube: 343\\n8 Square: 64 Cube: 512\\n9 Square: 81 Cube: 729\\n10 Square: 100 Cube: 1000", "explanation": "Square and cube of numbers 1 to 10" }
    ],
    "testCases": [
      { "input": "", "output": "1 Square: 1 Cube: 1\n2 Square: 4 Cube: 8\n3 Square: 9 Cube: 27\n4 Square: 16 Cube: 64\n5 Square: 25 Cube: 125\n6 Square: 36 Cube: 216\n7 Square: 49 Cube: 343\n8 Square: 64 Cube: 512\n9 Square: 81 Cube: 729\n10 Square: 100 Cube: 1000" }
    ],
    "constraints": ["No input required"],
    "videoId": null,
    "videoStart": 0,
    "videoEnd": null,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(1, 11):\n    print(f\"{i} Square: {i * i} Cube: {i * i * i}\")",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 10; i++) \n            System.out.println(i + \" Square: \" + (i * i) + \" Cube: \" + (i * i * i));\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 10; i++) \n        cout << i << \" Square: \" << i * i << \" Cube: \" << i * i * i << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 10; i++) \n        printf(\"%d Square: %d Cube: %d\\n\", i, i * i, i * i * i);\n    return 0;\n}",
      "javascript": "for(let i = 1; i <= 10; i++) \n    console.log(`${i} Square: ${i * i} Cube: ${i * i * i}`);",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        for(int i = 1; i <= 10; i++) \n            Console.WriteLine($\"{i} Square: {i * i} Cube: {i * i * i}\");\n    }\n}"
    },
    "algorithmSteps": [
      "Loop i from 1 to 10",
      "Calculate square = i * i",
      "Calculate cube = i * i * i",
      "Print i, square, and cube",
      "Repeat for all i"
    ],
    "mathSolution": "Square of n = n², Cube of n = n³",
    "timeComplexity": "O(10) = O(1)",
    "spaceComplexity": "O(1)",
    "hint": "Use multiplication to calculate square and cube."
  },
  {
    "id": 9,
    "title": "Numbers Divisible by 2 and 3 from 1 to 100",
    "difficulty": "easy",
    "topic": "loops",
    "subtopic": "divisibility",
    "category": "Problem Solving",
    "tags": ["loop", "divisibility", "and-operator"],
    "desc": "Write a program to print numbers from 1 to 100 that are divisible by both 2 and 3.",
    "examples": [
      { "input": "No input", "output": "6 12 18 24 30 36 42 48 54 60 66 72 78 84 90 96", "explanation": "Numbers divisible by both 2 and 3 (divisible by 6)" }
    ],
    "testCases": [
      { "input": "", "output": "6 12 18 24 30 36 42 48 54 60 66 72 78 84 90 96" }
    ],
    "constraints": ["No input required"],
    "videoId": null,
    "videoStart": 0,
    "videoEnd": null,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for i in range(1, 101):\n    if i % 2 == 0 and i % 3 == 0:\n        print(i, end=' ' if i < 96 else '')",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int i = 1; i <= 100; i++) \n            if(i % 2 == 0 && i % 3 == 0) \n                System.out.print(i + (i < 96 ? \" \" : \"\"));\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 2 == 0 && i % 3 == 0) \n            cout << i << (i < 96 ? \" \" : \"\");\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 100; i++) \n        if(i % 2 == 0 && i % 3 == 0) \n            printf(\"%d%c\", i, (i < 96 ? ' ' : '\\n'));\n    return 0;\n}",
      "javascript": "let res = [];\nfor(let i = 1; i <= 100; i++) \n    if(i % 2 === 0 && i % 3 === 0) res.push(i);\nconsole.log(res.join(' '));",
      "csharp": "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        var res = new List<string>();\n        for(int i = 1; i <= 100; i++) \n            if(i % 2 == 0 && i % 3 == 0) res.Add(i.ToString());\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    "algorithmSteps": [
      "Loop i from 1 to 100",
      "Check if i is divisible by 2 AND divisible by 3",
      "If true, print i",
      "Continue loop"
    ],
    "mathSolution": "Numbers divisible by both 2 and 3 are divisible by their LCM which is 6.",
    "timeComplexity": "O(n) where n = 100",
    "spaceComplexity": "O(1)",
    "hint": "Use the AND operator to check both divisibility conditions."
  },
  {
    "id": 10,
    "title": "Print Numbers Whose Sum of Digits is Even",
    "difficulty": "hard",
    "topic": "loops",
    "subtopic": "digit-manipulation",
    "category": "Problem Solving",
    "tags": ["loop", "digit-sum", "even"],
    "desc": "Write a program to print numbers from 1 to 100 whose sum of digits is even.",
    "examples": [
      { "input": "No input", "output": "2 4 6 8 11 13 15 17 19 20 22 24 26 28 31 33 35 37 39 40 42 44 46 48 51 53 55 57 59 60 62 64 66 68 71 73 75 77 79 80 82 84 86 88 91 93 95 97 99 100", "explanation": "Numbers whose digit sum is even" }
    ],
    "testCases": [
      { "input": "", "output": "2 4 6 8 11 13 15 17 19 20 22 24 26 28 31 33 35 37 39 40 42 44 46 48 51 53 55 57 59 60 62 64 66 68 71 73 75 77 79 80 82 84 86 88 91 93 95 97 99 100" }
    ],
    "constraints": ["No input required"],
    "videoId": null,
    "videoStart": 0,
    "videoEnd": null,
    "starterCode": {
      "python": "# Write your code here",
      "java": "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    // Write your code here\n    return 0;\n}",
      "javascript": "// Write your code here",
      "csharp": "using System;\nclass Program {\n    static void Main() {\n        // Write your code here\n    }\n}"
    },
    "solution": {
      "python": "for num in range(1, 101):\n    temp = num\n    s = 0\n    while temp > 0:\n        s += temp % 10\n        temp //= 10\n    if s % 2 == 0:\n        print(num, end=' ' if num < 100 else '')",
      "java": "public class Main {\n    public static void main(String[] args) {\n        for(int num = 1; num <= 100; num++) {\n            int temp = num, s = 0;\n            while(temp > 0) {\n                s += temp % 10;\n                temp /= 10;\n            }\n            if(s % 2 == 0) System.out.print(num + (num < 100 ? \" \" : \"\"));\n        }\n    }\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, s = 0;\n        while(temp > 0) {\n            s += temp % 10;\n            temp /= 10;\n        }\n        if(s % 2 == 0) cout << num << (num < 100 ? \" \" : \"\");\n    }\n    return 0;\n}",
      "c": "#include <stdio.h>\nint main() {\n    for(int num = 1; num <= 100; num++) {\n        int temp = num, s = 0;\n        while(temp > 0) {\n            s += temp % 10;\n            temp /= 10;\n        }\n        if(s % 2 == 0) printf(\"%d%c\", num, (num < 100 ? ' ' : '\\n'));\n    }\n    return 0;\n}",
      "javascript": "let res = [];\nfor(let num = 1; num <= 100; num++) {\n    let temp = num, s = 0;\n    while(temp > 0) {\n        s += temp % 10;\n        temp = Math.floor(temp / 10);\n    }\n    if(s % 2 === 0) res.push(num);\n}\nconsole.log(res.join(' '));",
      "csharp": "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        var res = new List<string>();\n        for(int num = 1; num <= 100; num++) {\n            int temp = num, s = 0;\n            while(temp > 0) {\n                s += temp % 10;\n                temp /= 10;\n            }\n            if(s % 2 == 0) res.Add(num.ToString());\n        }\n        Console.WriteLine(string.Join(\" \", res));\n    }\n}"
    },
    "algorithmSteps": [
      "Loop num from 1 to 100",
      "Calculate sum of digits of num",
      "Check if sum is even (sum % 2 == 0)",
      "If true, print num",
      "Continue loop"
    ],
    "mathSolution": "Sum of digits must be divisible by 2 to be even.",
    "timeComplexity": "O(100 * d) where d is number of digits (max 3)",
    "spaceComplexity": "O(1)",
    "hint": "Use modulo 10 to extract digits and sum them up."
  }
]

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
  //xp
   window.questions.push(
    ...loopsQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", loopsQuestions.length);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = loopsQuestions;
}