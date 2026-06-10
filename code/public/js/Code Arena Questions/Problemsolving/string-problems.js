// ============================================================
// STRING PROBLEMS - 15 QUESTIONS (IDs 1 to 15)
// ============================================================

const stringQuestions = [
  {
    id: 1,
    title: "Reverse a String",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "string-manipulation",
    category: "Problem Solving",
    tags: ["two-pointers", "reversal", "string"],
    desc: "Given a string, reverse it and print the reversed string.",
    examples: [
      { input: "hello", output: "olleh", explanation: "Characters reversed: h→o? Actually 'hello' reversed is 'olleh'" },
      { input: "world", output: "dlrow", explanation: "Reversed order of characters" }
    ],
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "world", output: "dlrow" },
      { input: "a b c", output: "c b a" },
      { input: "12345", output: "54321" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: "_cc0wRUTumA",
    videoStart: 1434,
    videoEnd: 1623,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nprint(s[::-1])",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String rev = new StringBuilder(s).reverse().toString();\n        System.out.println(rev);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    reverse(s.begin(), s.end());\n    cout << s;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    int len = strlen(s);\n    for(int i=0; i<len/2; i++) {\n        char temp = s[i];\n        s[i] = s[len-1-i];\n        s[len-1-i] = temp;\n    }\n    printf(\"%s\", s);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(s.split('').reverse().join(''));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        char[] arr = s.ToCharArray();\n        Array.Reverse(arr);\n        Console.WriteLine(new string(arr));\n    }\n}"
    },
    algorithmSteps: [
      "Read input string",
      "Reverse using built-in method or two-pointer swap",
      "Print reversed string"
    ],
    mathSolution: "Reverse the sequence of characters",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for new string or O(1) for in-place",
    hint: "Use two pointers to swap characters from both ends"
  },
  {
    id: 2,
    title: "Count Characters in Name",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "character-counting",
    category: "Problem Solving",
    tags: ["length", "string"],
    desc: "Given a name (string), count and print the total number of characters present (including spaces if any).",
    examples: [
      { input: "John Doe", output: "8", explanation: "Characters: J o h n space D o e = 8" },
      { input: "Alice", output: "5", explanation: "A l i c e = 5 characters" }
    ],
    testCases: [
      { input: "John Doe", output: "8" },
      { input: "Alice", output: "5" },
      { input: "A", output: "1" },
      { input: "", output: "0" }
    ],
    constraints: ["0 <= string length <= 10^5"],
    videoId: "x8Lawok8E5w",
    videoStart: 117,
    videoEnd: 178,
    starterCode: {
      python: "name = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name; getline(cin, name);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char name[100005]; fgets(name, sizeof(name), stdin);\n    name[strcspn(name, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const name = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string name = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "name = input()\nprint(len(name))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.nextLine();\n        System.out.println(name.length());\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name; getline(cin, name);\n    cout << name.length();\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char name[100005]; fgets(name, sizeof(name), stdin);\n    name[strcspn(name, \"\\n\")] = 0;\n    printf(\"%lu\", strlen(name));\n    return 0;\n}",
      javascript: "const name = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(name.length);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string name = Console.ReadLine();\n        Console.WriteLine(name.Length);\n    }\n}"
    },
    algorithmSteps: ["Read name", "Output length using built-in length property/function"],
    mathSolution: "Length of string = number of characters",
    timeComplexity: "O(1) for built-in length, O(n) if counting manually",
    spaceComplexity: "O(1)",
    hint: "Use .length() in Java/C#, len() in Python, .length in JavaScript"
  },
  {
    id: 3,
    title: "Count and Print Vowels in Name",
    difficulty: "medium",
    topic: "string-problems",
    subtopic: "vowel-count",
    category: "Problem Solving",
    tags: ["loops", "vowels", "string-traversal"],
    desc: "Given a name (string), count and print all the vowels (a, e, i, o, u - case insensitive) present in it. Also print the total vowel count.",
    examples: [
      { input: "Alice", output: "Vowels: A i e\nTotal vowels: 3", explanation: "A, i, e are vowels" },
      { input: "John", output: "Vowels: o\nTotal vowels: 1", explanation: "Only 'o' is vowel" }
    ],
    testCases: [
      { input: "Alice", output: "Vowels: A i e\nTotal vowels: 3" },
      { input: "John", output: "Vowels: o\nTotal vowels: 1" },
      { input: "bcdfg", output: "Vowels: \nTotal vowels: 0" },
      { input: "AEIOU", output: "Vowels: A E I O U\nTotal vowels: 5" }
    ],
    constraints: ["1 <= name length <= 10^5"],
    videoId: "x8Lawok8E5w",
    videoStart: 222,
    videoEnd: 380,
    starterCode: {
      python: "name = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name; getline(cin, name);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint main() {\n    char name[100005]; fgets(name, sizeof(name), stdin);\n    name[strcspn(name, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const name = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string name = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "name = input()\nvowels = []\ncount = 0\nvowel_set = set('aeiouAEIOU')\nfor ch in name:\n    if ch in vowel_set:\n        vowels.append(ch)\n        count += 1\nprint('Vowels:', ' '.join(vowels))\nprint('Total vowels:', count)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String name=sc.nextLine();\n        StringBuilder vowels=new StringBuilder();\n        int count=0;\n        String vowelSet=\"aeiouAEIOU\";\n        for(char c:name.toCharArray()) {\n            if(vowelSet.indexOf(c)!=-1) {\n                vowels.append(c).append(\" \");\n                count++;\n            }\n        }\n        System.out.println(\"Vowels: \"+vowels.toString().trim());\n        System.out.println(\"Total vowels: \"+count);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name; getline(cin,name);\n    string vowels=\"\";\n    int count=0;\n    string vowelSet=\"aeiouAEIOU\";\n    for(char c:name) {\n        if(vowelSet.find(c)!=string::npos) {\n            vowels+=c;\n            vowels+=\" \";\n            count++;\n        }\n    }\n    cout<<\"Vowels: \"<<vowels<<endl;\n    cout<<\"Total vowels: \"<<count;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint main() {\n    char name[100005]; fgets(name, sizeof(name), stdin);\n    name[strcspn(name, \"\\n\")]=0;\n    char vowels[100005]=\"\";\n    int count=0;\n    char *vowelSet=\"aeiouAEIOU\";\n    for(int i=0; name[i]; i++) {\n        if(strchr(vowelSet, name[i])) {\n            char temp[2]={name[i],' '};\n            strcat(vowels, temp);\n            count++;\n        }\n    }\n    printf(\"Vowels: %s\\n\", vowels);\n    printf(\"Total vowels: %d\", count);\n    return 0;\n}",
      javascript: "const name = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet vowels = [];\nlet count = 0;\nconst vowelSet = 'aeiouAEIOU';\nfor(let ch of name) {\n    if(vowelSet.includes(ch)) {\n        vowels.push(ch);\n        count++;\n    }\n}\nconsole.log('Vowels:', vowels.join(' '));\nconsole.log('Total vowels:', count);",
      csharp: "using System;\nusing System.Text;\nclass Program {\n    static void Main() {\n        string name = Console.ReadLine();\n        StringBuilder vowels = new StringBuilder();\n        int count = 0;\n        string vowelSet = \"aeiouAEIOU\";\n        foreach(char c in name) {\n            if(vowelSet.Contains(c)) {\n                vowels.Append(c).Append(' ');\n                count++;\n            }\n        }\n        Console.WriteLine($\"Vowels: {vowels.ToString().Trim()}\");\n        Console.WriteLine($\"Total vowels: {count}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read name",
      "Initialize empty list for vowels and count=0",
      "For each character, if vowel (case-insensitive), add to list and increment count",
      "Print vowels separated by space and total count"
    ],
    mathSolution: "Vowels are letters a, e, i, o, u (both cases)",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) to store vowels",
    hint: "Convert name to lowercase for easy comparison or use a set of vowels"
  },
  {
    id: 4,
    title: "Print Index and Character",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "string-traversal",
    category: "Problem Solving",
    tags: ["loops", "index", "enumeration"],
    desc: "Given a string, print each character along with its index (starting from 0). Format: 'Index: i, Character: ch' per line.",
    examples: [
      { input: "abc", output: "Index: 0, Character: a\nIndex: 1, Character: b\nIndex: 2, Character: c", explanation: "Print index and character for each position" },
      { input: "Hello", output: "Index: 0, Character: H\nIndex: 1, Character: e\nIndex: 2, Character: l\nIndex: 3, Character: l\nIndex: 4, Character: o", explanation: "Indices from 0 to length-1" }
    ],
    testCases: [
      { input: "abc", output: "Index: 0, Character: a\nIndex: 1, Character: b\nIndex: 2, Character: c" },
      { input: "Hi", output: "Index: 0, Character: H\nIndex: 1, Character: i" },
      { input: "A", output: "Index: 0, Character: A" },
      { input: "", output: "" }
    ],
    constraints: ["0 <= string length <= 10^5"],
    videoId:"x8Lawok8E5w",
    videoStart: 995,
    videoEnd: 1067,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nfor i, ch in enumerate(s):\n    print(f\"Index: {i}, Character: {ch}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        for(int i=0; i<s.length(); i++) {\n            System.out.println(\"Index: \"+i+\", Character: \"+s.charAt(i));\n        }\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    for(int i=0; i<s.length(); i++) {\n        cout << \"Index: \" << i << \", Character: \" << s[i] << endl;\n    }\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    for(int i=0; s[i]; i++) {\n        printf(\"Index: %d, Character: %c\\n\", i, s[i]);\n    }\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nfor(let i=0; i<s.length; i++) {\n    console.log(`Index: ${i}, Character: ${s[i]}`);\n}",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        for(int i=0; i<s.Length; i++) {\n            Console.WriteLine($\"Index: {i}, Character: {s[i]}\");\n        }\n    }\n}"
    },
    algorithmSteps: [
      "Read string s",
      "Loop i from 0 to length-1",
      "Print 'Index: i, Character: s[i]'"
    ],
    mathSolution: "Index represents position in 0-based indexing",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use a for loop with index variable"
  },
  {
    id: 5,
    title: "Palindrome String Check",
    difficulty: "hard",
    topic: "string-problems",
    subtopic: "palindrome",
    category: "Problem Solving",
    tags: ["two-pointers", "palindrome", "string"],
    desc: "Given a string, check if it is a palindrome (reads same forwards and backwards). Ignore case? The PDF example uses 'madam'. We'll keep case-sensitive as typical. Print 'Palindrome' or 'Not Palindrome'.",
    examples: [
      { input: "madam", output: "Palindrome", explanation: "madam reversed is madam" },
      { input: "hello", output: "Not Palindrome", explanation: "hello reversed is olleh, not equal" }
    ],
    testCases: [
      { input: "madam", output: "Palindrome" },
      { input: "hello", output: "Not Palindrome" },
      { input: "racecar", output: "Palindrome" },
      { input: "a", output: "Palindrome" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: "vAObDuT93oo",
    videoStart: 1238,
    videoEnd: 1449,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nif s == s[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String rev = new StringBuilder(s).reverse().toString();\n        System.out.println(s.equals(rev) ? \"Palindrome\" : \"Not Palindrome\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    string rev = s;\n    reverse(rev.begin(), rev.end());\n    cout << (s == rev ? \"Palindrome\" : \"Not Palindrome\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    int len = strlen(s);\n    int isPal = 1;\n    for(int i=0; i<len/2; i++) {\n        if(s[i] != s[len-1-i]) { isPal=0; break; }\n    }\n    printf(isPal ? \"Palindrome\" : \"Not Palindrome\");\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst rev = s.split('').reverse().join('');\nconsole.log(s === rev ? 'Palindrome' : 'Not Palindrome');",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        char[] arr = s.ToCharArray();\n        Array.Reverse(arr);\n        string rev = new string(arr);\n        Console.WriteLine(s == rev ? \"Palindrome\" : \"Not Palindrome\");\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Reverse string using built-in or two-pointer",
      "Compare original with reversed",
      "Print result"
    ],
    mathSolution: "Palindrome reads same forward and backward",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for reversal or O(1) with two pointers",
    hint: "Compare characters from both ends moving inward"
  },
  {
    id: 6,
    title: "Count Uppercase and Lowercase Letters",
    difficulty: "medium",
    topic: "string-problems",
    subtopic: "case-counting",
    category: "Problem Solving",
    tags: ["loops", "case-check", "counting"],
    desc: "Given a string, count the number of uppercase letters and lowercase letters. Ignore non-alphabetic characters. Print 'Uppercase: X, Lowercase: Y'.",
    examples: [
      { input: "Hello World", output: "Uppercase: 2, Lowercase: 8", explanation: "H, W uppercase; e,l,l,o,o,r,l,d lowercase (space ignored)" },
      { input: "CODING", output: "Uppercase: 6, Lowercase: 0", explanation: "All uppercase" }
    ],
    testCases: [
      { input: "Hello World", output: "Uppercase: 2, Lowercase: 8" },
      { input: "CODING", output: "Uppercase: 6, Lowercase: 0" },
      { input: "python", output: "Uppercase: 0, Lowercase: 6" },
      { input: "AaBb", output: "Uppercase: 2, Lowercase: 2" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nupper = sum(1 for ch in s if ch.isupper())\nlower = sum(1 for ch in s if ch.islower())\nprint(f'Uppercase: {upper}, Lowercase: {lower}')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        int upper=0, lower=0;\n        for(char c:s.toCharArray()) {\n            if(Character.isUpperCase(c)) upper++;\n            else if(Character.isLowerCase(c)) lower++;\n        }\n        System.out.println(\"Uppercase: \"+upper+\", Lowercase: \"+lower);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    int upper=0, lower=0;\n    for(char c:s) {\n        if(isupper(c)) upper++;\n        else if(islower(c)) lower++;\n    }\n    cout<<\"Uppercase: \"<<upper<<\", Lowercase: \"<<lower;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    int upper=0, lower=0;\n    for(int i=0; s[i]; i++) {\n        if(isupper(s[i])) upper++;\n        else if(islower(s[i])) lower++;\n    }\n    printf(\"Uppercase: %d, Lowercase: %d\", upper, lower);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nlet upper=0, lower=0;\nfor(let ch of s) {\n    if(ch>='A' && ch<='Z') upper++;\n    else if(ch>='a' && ch<='z') lower++;\n}\nconsole.log(`Uppercase: ${upper}, Lowercase: ${lower}`);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        int upper=0, lower=0;\n        foreach(char c in s) {\n            if(char.IsUpper(c)) upper++;\n            else if(char.IsLower(c)) lower++;\n        }\n        Console.WriteLine($\"Uppercase: {upper}, Lowercase: {lower}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Initialize upper=0, lower=0",
      "Loop each character, if uppercase increment upper, if lowercase increment lower",
      "Print counts"
    ],
    mathSolution: "Classify characters by ASCII ranges or built-in functions",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use isupper()/islower() or compare with 'A'-'Z' and 'a'-'z'"
  },
  {
    id: 7,
    title: "Remove Vowels from String",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "string-manipulation",
    category: "Problem Solving",
    tags: ["filtering", "vowels", "string"],
    desc: "Given a string, remove all vowels (a, e, i, o, u - both cases) and print the resulting string.",
    examples: [
      { input: "Hello World", output: "Hll Wrld", explanation: "Removed e, o, o" },
      { input: "Programming", output: "Prgrmmng", explanation: "Removed o, a, i" }
    ],
    testCases: [
      { input: "Hello World", output: "Hll Wrld" },
      { input: "Programming", output: "Prgrmmng" },
      { input: "AEIOUaeiou", output: "" },
      { input: "bcdfg", output: "bcdfg" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nusing System.Text;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nvowels = 'aeiouAEIOU'\nresult = ''.join(ch for ch in s if ch not in vowels)\nprint(result)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        StringBuilder sb=new StringBuilder();\n        String vowels=\"aeiouAEIOU\";\n        for(char c:s.toCharArray()) {\n            if(vowels.indexOf(c)==-1) sb.append(c);\n        }\n        System.out.println(sb.toString());\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    string result=\"\";\n    string vowels=\"aeiouAEIOU\";\n    for(char c:s) {\n        if(vowels.find(c)==string::npos) result+=c;\n    }\n    cout<<result;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")]=0;\n    char result[100005];\n    int j=0;\n    char *vowels=\"aeiouAEIOU\";\n    for(int i=0; s[i]; i++) {\n        if(!strchr(vowels, s[i])) result[j++]=s[i];\n    }\n    result[j]=0;\n    printf(\"%s\", result);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst vowels = 'aeiouAEIOU';\nconst result = s.split('').filter(ch => !vowels.includes(ch)).join('');\nconsole.log(result);",
      csharp: "using System;\nusing System.Text;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        StringBuilder sb = new StringBuilder();\n        string vowels = \"aeiouAEIOU\";\n        foreach(char c in s) {\n            if(!vowels.Contains(c)) sb.Append(c);\n        }\n        Console.WriteLine(sb.ToString());\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Define vowel set",
      "Iterate characters, keep only non-vowels",
      "Print new string"
    ],
    mathSolution: "Filter out vowels",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for result",
    hint: "Build a new string excluding vowels"
  },
  {
    id: 8,
    title: "Check Anagrams",
    difficulty: "medium",
    topic: "string-problems",
    subtopic: "anagram",
    category: "Problem Solving",
    tags: ["sorting", "frequency", "anagram"],
    desc: "Given two strings, check if they are anagrams (contain the same characters with same frequencies, case-sensitive). Print 'Anagram' or 'Not Anagram'.",
    examples: [
      { input: "listen\nsilent", output: "Anagram", explanation: "Both have same letters" },
      { input: "hello\nworld", output: "Not Anagram", explanation: "Different character sets" }
    ],
    testCases: [
      { input: "listen\nsilent", output: "Anagram" },
      { input: "hello\nworld", output: "Not Anagram" },
      { input: "angel\nangle", output: "Anagram" },
      { input: "abc\nabcc", output: "Not Anagram" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s1 = input()\ns2 = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s1 = sc.nextLine();\n        String s2 = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s1, s2; getline(cin, s1); getline(cin, s2);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint main() {\n    char s1[100005], s2[100005];\n    fgets(s1, sizeof(s1), stdin); fgets(s2, sizeof(s2), stdin);\n    s1[strcspn(s1,\"\\n\")]=0; s2[strcspn(s2,\"\\n\")]=0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s1 = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n')[0];\nconst s2 = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n')[1];\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s1 = Console.ReadLine();\n        string s2 = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s1 = input()\ns2 = input()\nif sorted(s1) == sorted(s2):\n    print('Anagram')\nelse:\n    print('Not Anagram')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s1=sc.nextLine();\n        String s2=sc.nextLine();\n        char[] a1=s1.toCharArray();\n        char[] a2=s2.toCharArray();\n        Arrays.sort(a1);\n        Arrays.sort(a2);\n        System.out.println(Arrays.equals(a1,a2)?\"Anagram\":\"Not Anagram\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s1, s2; getline(cin, s1); getline(cin, s2);\n    sort(s1.begin(), s1.end());\n    sort(s2.begin(), s2.end());\n    cout << (s1==s2 ? \"Anagram\" : \"Not Anagram\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint cmp(const void *a, const void *b) { return *(char*)a - *(char*)b; }\nint main() {\n    char s1[100005], s2[100005];\n    fgets(s1, sizeof(s1), stdin); fgets(s2, sizeof(s2), stdin);\n    s1[strcspn(s1,\"\\n\")]=0; s2[strcspn(s2,\"\\n\")]=0;\n    int len1=strlen(s1), len2=strlen(s2);\n    if(len1!=len2) { printf(\"Not Anagram\"); return 0; }\n    qsort(s1, len1, sizeof(char), cmp);\n    qsort(s2, len2, sizeof(char), cmp);\n    printf(strcmp(s1,s2)==0?\"Anagram\":\"Not Anagram\");\n    return 0;\n}",
      javascript: "const [s1, s2] = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst sortStr = s => s.split('').sort().join('');\nconsole.log(sortStr(s1) === sortStr(s2) ? 'Anagram' : 'Not Anagram');",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        string s1 = Console.ReadLine();\n        string s2 = Console.ReadLine();\n        var sorted1 = s1.OrderBy(c=>c).ToArray();\n        var sorted2 = s2.OrderBy(c=>c).ToArray();\n        Console.WriteLine(new string(sorted1) == new string(sorted2) ? \"Anagram\" : \"Not Anagram\");\n    }\n}"
    },
    algorithmSteps: [
      "Read two strings",
      "Sort characters of both strings",
      "Compare sorted strings",
      "If equal print 'Anagram' else 'Not Anagram'"
    ],
    mathSolution: "Anagrams have identical character frequency",
    timeComplexity: "O(n log n) due to sorting",
    spaceComplexity: "O(n)",
    hint: "Alternatively use frequency array of size 256 for O(n) time"
  },
  {
    id: 9,
    title: "Frequency of Each Character",
    difficulty: "medium",
    topic: "string-problems",
    subtopic: "frequency-count",
    category: "Problem Solving",
    tags: ["hashmap", "counting", "frequency"],
    desc: "Given a string, find the frequency (count) of each character present. Print each character and its count, one per line. Order does not matter.",
    examples: [
      { input: "apple", output: "a:1\np:2\nl:1\ne:1", explanation: "Count of each letter" },
      { input: "hello", output: "h:1\ne:1\nl:2\no:1", explanation: "l appears twice" }
    ],
    testCases: [
      { input: "apple", output: "a:1\np:2\nl:1\ne:1" },
      { input: "hello", output: "h:1\ne:1\nl:2\no:1" },
      { input: "aabb", output: "a:2\nb:2" },
      { input: "a", output: "a:1" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nfreq = {}\nfor ch in s:\n    freq[ch] = freq.get(ch, 0) + 1\nfor ch, count in freq.items():\n    print(f\"{ch}:{count}\")",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        Map<Character,Integer> map=new HashMap<>();\n        for(char c:s.toCharArray()) map.put(c, map.getOrDefault(c,0)+1);\n        for(Map.Entry<Character,Integer> e:map.entrySet())\n            System.out.println(e.getKey()+\":\"+e.getValue());\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    unordered_map<char,int> freq;\n    for(char c:s) freq[c]++;\n    for(auto &p:freq) cout<<p.first<<\":\"<<p.second<<endl;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")]=0;\n    int freq[128]={0};\n    for(int i=0; s[i]; i++) freq[(int)s[i]]++;\n    for(int i=0; i<128; i++) {\n        if(freq[i]>0) printf(\"%c:%d\\n\", i, freq[i]);\n    }\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst freq = {};\nfor(let ch of s) freq[ch] = (freq[ch]||0)+1;\nfor(let [ch,count] of Object.entries(freq)) console.log(`${ch}:${count}`);",
      csharp: "using System;\nusing System.Collections.Generic;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        Dictionary<char,int> freq = new Dictionary<char,int>();\n        foreach(char c in s) {\n            if(freq.ContainsKey(c)) freq[c]++;\n            else freq[c]=1;\n        }\n        foreach(var kv in freq) Console.WriteLine($\"{kv.Key}:{kv.Value}\");\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Create empty map/dictionary for frequency",
      "Loop each character, increment count",
      "Print each character and its count"
    ],
    mathSolution: "Frequency count using hash map or array",
    timeComplexity: "O(n)",
    spaceComplexity: "O(k) where k is distinct characters",
    hint: "Use an array of size 256 for ASCII characters"
  },
  {
    id: 10,
    title: "Replace Spaces with Hyphens",
    difficulty: "hard",
    topic: "string-problems",
    subtopic: "string-replacement",
    category: "Problem Solving",
    tags: ["replace", "string"],
    desc: "Given a string, replace all space characters ' ' with hyphens '-' and print the modified string.",
    examples: [
      { input: "Hello World", output: "Hello-World", explanation: "Space replaced by hyphen" },
      { input: "Python Programming Language", output: "Python-Programming-Language", explanation: "Spaces become hyphens" }
    ],
    testCases: [
      { input: "Hello World", output: "Hello-World" },
      { input: "Python Programming Language", output: "Python-Programming-Language" },
      { input: "NoSpaces", output: "NoSpaces" },
      { input: "   ", output: "---" }
    ],
    constraints: ["0 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nprint(s.replace(' ', '-'))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        System.out.println(s.replace(' ', '-'));\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    for(char &c:s) if(c==' ') c='-';\n    cout<<s;\n    return 0;\n}",
      c: "#include <stdio.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    for(int i=0; s[i]; i++) if(s[i]==' ') s[i]='-';\n    printf(\"%s\", s);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(s.replace(/ /g, '-'));",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        Console.WriteLine(s.Replace(' ', '-'));\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Replace each space with hyphen using replace function or loop",
      "Print modified string"
    ],
    mathSolution: "Character substitution",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for new string or O(1) in-place",
    hint: "Use built-in replace if available"
  },
  {
    id: 11,
    title: "Reverse Each Word",
    difficulty: "medium",
    topic: "string-problems",
    subtopic: "word-reversal",
    category: "Problem Solving",
    tags: ["split", "reverse", "join"],
    desc: "Given a string, reverse each word individually (word order remains same, but characters in each word reversed). Print the modified string.",
    examples: [
      { input: "Hello World", output: "olleH dlroW", explanation: "Hello -> olleH, World -> dlroW" },
      { input: "Python Programming", output: "nohtyP gnimmargorP", explanation: "Each word reversed" }
    ],
    testCases: [
      { input: "Hello World", output: "olleH dlroW" },
      { input: "Python Programming", output: "nohtyP gnimmargorP" },
      { input: "a b c", output: "a b c" },
      { input: "abc", output: "cba" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nusing System.Text;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nwords = s.split()\nreversed_words = [word[::-1] for word in words]\nprint(' '.join(reversed_words))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        String[] words = s.split(\" \");\n        StringBuilder result=new StringBuilder();\n        for(String w:words) {\n            result.append(new StringBuilder(w).reverse()).append(\" \");\n        }\n        System.out.println(result.toString().trim());\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    stringstream ss(s);\n    string word, result;\n    while(ss >> word) {\n        reverse(word.begin(), word.end());\n        result += word + \" \";\n    }\n    if(!result.empty()) result.pop_back();\n    cout << result;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nvoid reverse(char *start, char *end) {\n    while(start<end) { char t=*start; *start=*end; *end=t; start++; end--; }\n}\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s,\"\\n\")]=0;\n    char *word_start = s;\n    for(char *p=s; ; p++) {\n        if(*p==' ' || *p=='\\0') {\n            reverse(word_start, p-1);\n            if(*p=='\\0') break;\n            word_start = p+1;\n        }\n    }\n    printf(\"%s\", s);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst result = s.split(' ').map(word => word.split('').reverse().join('')).join(' ');\nconsole.log(result);",
      csharp: "using System;\nusing System.Text;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        string[] words = s.Split(' ');\n        StringBuilder sb = new StringBuilder();\n        foreach(string w in words) {\n            char[] arr = w.ToCharArray();\n            Array.Reverse(arr);\n            sb.Append(new string(arr)).Append(' ');\n        }\n        Console.WriteLine(sb.ToString().Trim());\n    }\n}"
    },
    algorithmSteps: [
      "Split string into words by spaces",
      "For each word, reverse its characters",
      "Join reversed words with spaces",
      "Print result"
    ],
    mathSolution: "Reversal of each word individually",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    hint: "Split then reverse each part"
  },
  {
    id: 12,
    title: "Longest Word in String",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "word-length",
    category: "Problem Solving",
    tags: ["split", "max-length"],
    desc: "Given a string, find and print the longest word. If multiple words have same maximum length, print the first one.",
    examples: [
      { input: "The quick brown fox", output: "quick", explanation: "quick has length 5, others shorter" },
      { input: "Python is powerful", output: "powerful", explanation: "powerful length 8" }
    ],
    testCases: [
      { input: "The quick brown fox", output: "quick" },
      { input: "Python is powerful", output: "powerful" },
      { input: "a ab abc", output: "abc" },
      { input: "Hello", output: "Hello" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nwords = s.split()\nlongest = max(words, key=len)\nprint(longest)",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        String[] words = s.split(\" \");\n        String longest = \"\";\n        for(String w:words) if(w.length()>longest.length()) longest=w;\n        System.out.println(longest);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    stringstream ss(s);\n    string word, longest;\n    while(ss>>word) if(word.length()>longest.length()) longest=word;\n    cout<<longest;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s,\"\\n\")]=0;\n    char longest[100005]=\"\";\n    char word[100005];\n    int i=0, j=0;\n    while(1) {\n        if(s[i]==' ' || s[i]=='\\0') {\n            if(j>0) {\n                word[j]='\\0';\n                if(strlen(word)>strlen(longest)) strcpy(longest, word);\n                j=0;\n            }\n            if(s[i]=='\\0') break;\n        } else {\n            word[j++]=s[i];\n        }\n        i++;\n    }\n    printf(\"%s\", longest);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst words = s.split(' ');\nlet longest = words[0];\nfor(let w of words) if(w.length > longest.length) longest = w;\nconsole.log(longest);",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        string[] words = s.Split(' ');\n        string longest = words.OrderByDescending(w => w.Length).First();\n        Console.WriteLine(longest);\n    }\n}"
    },
    algorithmSteps: [
      "Split string into words",
      "Initialize longest = empty",
      "Iterate words, update longest if current word longer",
      "Print longest"
    ],
    mathSolution: "Find maximum length word",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for split",
    hint: "Compare lengths while iterating"
  },
  {
    id: 13,
    title: "String Contains Only Digits",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "digit-check",
    category: "Problem Solving",
    tags: ["isdigit", "validation"],
    desc: "Given a string, check if it contains only digits (0-9). Print 'Only Digits' or 'Not Only Digits'.",
    examples: [
      { input: "12345", output: "Only Digits", explanation: "All characters are digits" },
      { input: "123a5", output: "Not Only Digits", explanation: "'a' is not a digit" }
    ],
    testCases: [
      { input: "12345", output: "Only Digits" },
      { input: "123a5", output: "Not Only Digits" },
      { input: "0", output: "Only Digits" },
      { input: "", output: "Only Digits" }
    ],
    constraints: ["0 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nif s.isdigit():\n    print('Only Digits')\nelse:\n    print('Not Only Digits')",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        boolean onlyDigits = s.matches(\"\\\\d*\");\n        System.out.println(onlyDigits?\"Only Digits\":\"Not Only Digits\");\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    bool onlyDigits = true;\n    for(char c:s) if(!isdigit(c)) { onlyDigits=false; break; }\n    cout<<(onlyDigits?\"Only Digits\":\"Not Only Digits\");\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s,\"\\n\")]=0;\n    int only=1;\n    for(int i=0; s[i]; i++) if(!isdigit(s[i])) { only=0; break; }\n    printf(only?\"Only Digits\":\"Not Only Digits\");\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(/^\\d*$/.test(s) ? 'Only Digits' : 'Not Only Digits');",
      csharp: "using System;\nusing System.Linq;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        bool onlyDigits = s.All(char.IsDigit);\n        Console.WriteLine(onlyDigits ? \"Only Digits\" : \"Not Only Digits\");\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Check if every character is digit using built-in or loop",
      "Print result"
    ],
    mathSolution: "All characters must be in '0'-'9'",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    hint: "Use isdigit() function"
  },
  {
    id: 14,
    title: "Count Words in Sentence",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "word-count",
    category: "Problem Solving",
    tags: ["split", "counting"],
    desc: "Given a sentence (words separated by spaces), count and print the number of words.",
    examples: [
      { input: "Python is easy to learn", output: "5", explanation: "5 words separated by spaces" },
      { input: "Hello World", output: "2", explanation: "Two words" }
    ],
    testCases: [
      { input: "Python is easy to learn", output: "5" },
      { input: "Hello World", output: "2" },
      { input: "One", output: "1" },
      { input: "", output: "0" }
    ],
    constraints: ["0 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nwords = s.split()\nprint(len(words))",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        String[] words = s.trim().split(\" \");\n        if(s.trim().isEmpty()) System.out.println(0);\n        else System.out.println(words.length);\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    stringstream ss(s);\n    string word;\n    int count=0;\n    while(ss>>word) count++;\n    cout<<count;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s,\"\\n\")]=0;\n    int count=0;\n    int inWord=0;\n    for(int i=0; s[i]; i++) {\n        if(s[i]==' ') inWord=0;\n        else if(!inWord) { inWord=1; count++; }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst words = s.split(/\\s+/).filter(w => w.length>0);\nconsole.log(words.length);",
      csharp: "using System;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        string[] words = s.Split(new char[]{' '}, StringSplitOptions.RemoveEmptyEntries);\n        Console.WriteLine(words.Length);\n    }\n}"
    },
    algorithmSteps: [
      "Read sentence",
      "Split by spaces (handle multiple spaces, trim)",
      "Count number of non-empty parts",
      "Print count"
    ],
    mathSolution: "Number of space-separated sequences",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    hint: "Use split function and count resulting array length"
  },
  {
    id: 15,
    title: "Capitalize First Letter of Each Word",
    difficulty: "easy",
    topic: "string-problems",
    subtopic: "capitalization",
    category: "Problem Solving",
    tags: ["title-case", "string"],
    desc: "Given a string, capitalize the first letter of each word (remaining letters lowercase). Print the transformed string.",
    examples: [
      { input: "python programming language", output: "Python Programming Language", explanation: "Each word's first letter uppercase" },
      { input: "hello world", output: "Hello World", explanation: "Capitalize H and W" }
    ],
    testCases: [
      { input: "python programming language", output: "Python Programming Language" },
      { input: "hello world", output: "Hello World" },
      { input: "a", output: "A" },
      { input: "HELLO WORLD", output: "Hello World" }
    ],
    constraints: ["1 <= string length <= 10^5"],
    videoId: null,
    videoStart: 0,
    videoEnd: 0,
    starterCode: {
      python: "s = input()\n# Write your code here",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // Write your code here\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    // Write your code here\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s, \"\\n\")] = 0;\n    // Write your code here\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\n// Write your code here",
      csharp: "using System;\nusing System.Globalization;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        // Write your code here\n    }\n}"
    },
    solution: {
      python: "s = input()\nprint(s.title())",
      java: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        String s=sc.nextLine();\n        String[] words = s.split(\" \");\n        StringBuilder result=new StringBuilder();\n        for(String w:words) {\n            if(w.length()>0) {\n                result.append(Character.toUpperCase(w.charAt(0)))\n                      .append(w.substring(1).toLowerCase()).append(\" \");\n            }\n        }\n        System.out.println(result.toString().trim());\n    }\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s; getline(cin, s);\n    stringstream ss(s);\n    string word, result;\n    while(ss>>word) {\n        if(!word.empty()) {\n            word[0] = toupper(word[0]);\n            for(int i=1; i<word.length(); i++) word[i] = tolower(word[i]);\n            result += word + \" \";\n        }\n    }\n    if(!result.empty()) result.pop_back();\n    cout << result;\n    return 0;\n}",
      c: "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\nint main() {\n    char s[100005]; fgets(s, sizeof(s), stdin);\n    s[strcspn(s,\"\\n\")]=0;\n    int cap=1;\n    for(int i=0; s[i]; i++) {\n        if(s[i]==' ') cap=1;\n        else if(cap) { s[i]=toupper(s[i]); cap=0; }\n        else s[i]=tolower(s[i]);\n    }\n    printf(\"%s\", s);\n    return 0;\n}",
      javascript: "const s = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst result = s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');\nconsole.log(result);",
      csharp: "using System;\nusing System.Globalization;\nclass Program {\n    static void Main() {\n        string s = Console.ReadLine();\n        TextInfo ti = CultureInfo.CurrentCulture.TextInfo;\n        Console.WriteLine(ti.ToTitleCase(s.ToLower()));\n    }\n}"
    },
    algorithmSteps: [
      "Read string",
      "Split into words",
      "For each word, capitalize first letter and lower case rest",
      "Join with spaces and print"
    ],
    mathSolution: "Title case conversion",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    hint: "Use built-in title() if available, otherwise iterate"
  }
];

// Export
if (typeof window !== 'undefined') {
  if (!window.questions) window.questions = [];
 //xp
   window.questions.push(
    ...stringQuestions.map(q => createQuestion(q))
  );
 console.log("✅ Conversion questions loaded:", stringQuestions.length);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = stringQuestions;
}