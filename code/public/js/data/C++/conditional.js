QuizData.questions.push(
{
  id: 'cpp_conditionals_1',
  topicId: 'cpp_conditionals',
  question: 'Use if statement to check if a number is positive.',
  mathSolution: 'if statement executes block when condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    if (num > 0) {\n        cout << "Number is positive" << endl;\n    }\n    return 0;\n}',
  hint: 'if (condition) { // code } executes only when condition is true.'
},
{
  id: 'cpp_conditionals_2',
  topicId: 'cpp_conditionals',
  question: 'Use if-else statement for two-way branching.',
  mathSolution: 'if-else executes one block for true, another for false.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = -5;\n    if (num >= 0) {\n        cout << "Number is non-negative" << endl;\n    } else {\n        cout << "Number is negative" << endl;\n    }\n    return 0;\n}',
  hint: 'if-else provides alternative execution path.'
},
{
  id: 'cpp_conditionals_3',
  topicId: 'cpp_conditionals',
  question: 'Use if-else if-else ladder for multiple conditions.',
  mathSolution: 'Chain else-if for mutually exclusive conditions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else if (score >= 60) {\n        cout << "Grade: D" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    return 0;\n}',
  hint: 'Only first true condition executes; order matters.'
},
{
  id: 'cpp_conditionals_4',
  topicId: 'cpp_conditionals',
  question: 'Use nested if statements for multi-level conditions.',
  mathSolution: 'Place if statements inside other if statements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasLicense = true;\n    \n    if (age >= 18) {\n        cout << "Age requirement met" << endl;\n        if (hasLicense) {\n            cout << "Can drive a car" << endl;\n        } else {\n            cout << "Need to get a license first" << endl;\n        }\n    } else {\n        cout << "Too young to drive" << endl;\n    }\n    return 0;\n}',
  hint: 'Nested if creates hierarchical decision making.'
},
{
  id: 'cpp_conditionals_5',
  topicId: 'cpp_conditionals',
  question: 'Use ternary operator for simple conditional assignment.',
  mathSolution: 'condition ? true_value : false_value',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    \n    cout << "Maximum: " << max << endl;\n    \n    // Nested ternary\n    int x = 5;\n    string result = (x > 0) ? "positive" : (x < 0) ? "negative" : "zero";\n    cout << "x is " << result << endl;\n    \n    return 0;\n}',
  hint: 'Ternary operator is shorthand for simple if-else.'
},
{
  id: 'cpp_conditionals_6',
  topicId: 'cpp_conditionals',
  question: 'Use switch statement for multi-way branching.',
  mathSolution: 'switch compares integer/enum value against cases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 3;\n    \n    switch(day) {\n        case 1:\n            cout << "Monday" << endl;\n            break;\n        case 2:\n            cout << "Tuesday" << endl;\n            break;\n        case 3:\n            cout << "Wednesday" << endl;\n            break;\n        case 4:\n            cout << "Thursday" << endl;\n            break;\n        case 5:\n            cout << "Friday" << endl;\n            break;\n        case 6:\n            cout << "Saturday" << endl;\n            break;\n        case 7:\n            cout << "Sunday" << endl;\n            break;\n        default:\n            cout << "Invalid day" << endl;\n    }\n    return 0;\n}',
  hint: 'break prevents fall-through; default handles unmatched values.'
},
{
  id: 'cpp_conditionals_7',
  topicId: 'cpp_conditionals',
  question: 'Use switch with character cases.',
  mathSolution: 'switch works with char types as well.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade;\n    cout << "Enter grade (A/B/C/D/F): ";\n    cin >> grade;\n    \n    switch(grade) {\n        case \'A\':\n        case \'a\':\n            cout << "Excellent!" << endl;\n            break;\n        case \'B\':\n        case \'b\':\n            cout << "Good job!" << endl;\n            break;\n        case \'C\':\n        case \'c\':\n            cout << "Satisfactory" << endl;\n            break;\n        case \'D\':\n        case \'d\':\n            cout << "Need improvement" << endl;\n            break;\n        case \'F\':\n        case \'f\':\n            cout << "Failed" << endl;\n            break;\n        default:\n            cout << "Invalid grade" << endl;\n    }\n    return 0;\n}',
  hint: 'Multiple cases can share the same code block.'
},
{
  id: 'cpp_conditionals_8',
  topicId: 'cpp_conditionals',
  question: 'Use logical AND (&&) for multiple conditions.',
  mathSolution: '&& returns true only when both conditions are true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasID = true;\n    \n    if (age >= 21 && hasID) {\n        cout << "You can purchase alcohol" << endl;\n    } else {\n        cout << "Cannot purchase alcohol" << endl;\n    }\n    \n    int year = 2024;\n    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {\n        cout << year << " is a leap year" << endl;\n    }\n    \n    return 0;\n}',
  hint: '&& short-circuits: if first false, second not evaluated.'
},
{
  id: 'cpp_conditionals_9',
  topicId: 'cpp_conditionals',
  question: 'Use logical OR (||) for alternative conditions.',
  mathSolution: '|| returns true if at least one condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    if (ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n        ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        cout << ch << " is a vowel" << endl;\n    } else if ((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        cout << ch << " is a consonant" << endl;\n    } else {\n        cout << ch << " is not a letter" << endl;\n    }\n    \n    return 0;\n}',
  hint: '|| short-circuits: if first true, second not evaluated.'
},
{
  id: 'cpp_conditionals_10',
  topicId: 'cpp_conditionals',
  question: 'Use logical NOT (!) to negate condition.',
  mathSolution: '! reverses boolean value (true becomes false, false becomes true).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isWeekend = false;\n    \n    if (!isWeekend) {\n        cout << "Go to work" << endl;\n    } else {\n        cout << "Relax" << endl;\n    }\n    \n    int x = 0;\n    if (!x) {\n        cout << "x is zero" << endl;\n    }\n    \n    bool loggedIn = false;\n    if (!loggedIn) {\n        cout << "Please log in" << endl;\n    }\n    \n    return 0;\n}',
  hint: '! can be used to check zero, null, or false conditions.'
},
{
  id: 'cpp_conditionals_11',
  topicId: 'cpp_conditionals',
  question: 'Check even or odd number using modulus operator.',
  mathSolution: 'num % 2 == 0 means even, odd otherwise.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num % 2 == 0) {\n        cout << num << " is even" << endl;\n    } else {\n        cout << num << " is odd" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Even numbers divide by 2 with remainder 0.'
},
{
  id: 'cpp_conditionals_12',
  topicId: 'cpp_conditionals',
  question: 'Check if a number is divisible by another using % operator.',
  mathSolution: 'a % b == 0 means a is divisible by b.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, divisor;\n    cout << "Enter number and divisor: ";\n    cin >> num >> divisor;\n    \n    if (divisor == 0) {\n        cout << "Cannot divide by zero" << endl;\n    } else if (num % divisor == 0) {\n        cout << num << " is divisible by " << divisor << endl;\n    } else {\n        cout << num << " is NOT divisible by " << divisor << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Always check divisor not zero before using %.'
},
{
  id: 'cpp_conditionals_13',
  topicId: 'cpp_conditionals',
  question: 'Check if a year is leap year using nested conditions.',
  mathSolution: 'Leap year: divisible by 4, but not by 100 unless also divisible by 400.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cout << "Enter year: ";\n    cin >> year;\n    \n    if (year % 4 == 0) {\n        if (year % 100 == 0) {\n            if (year % 400 == 0) {\n                cout << year << " is a leap year" << endl;\n            } else {\n                cout << year << " is not a leap year" << endl;\n            }\n        } else {\n            cout << year << " is a leap year" << endl;\n        }\n    } else {\n        cout << year << " is not a leap year" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Leap year conditions: (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0).'
},
{
  id: 'cpp_conditionals_14',
  topicId: 'cpp_conditionals',
  question: 'Find largest of three numbers using if-else.',
  mathSolution: 'Compare numbers sequentially to find maximum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cout << "Enter three numbers: ";\n    cin >> a >> b >> c;\n    \n    int max;\n    if (a >= b && a >= c) {\n        max = a;\n    } else if (b >= a && b >= c) {\n        max = b;\n    } else {\n        max = c;\n    }\n    \n    cout << "Largest number: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Compare each number with others to find maximum.'
},
{
  id: 'cpp_conditionals_15',
  topicId: 'cpp_conditionals',
  question: 'Check if a character is uppercase or lowercase.',
  mathSolution: 'Use ASCII range checks (A-Z: 65-90, a-z: 97-122).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    if (ch >= \'A\' && ch <= \'Z\') {\n        cout << ch << " is uppercase" << endl;\n    } else if (ch >= \'a\' && ch <= \'z\') {\n        cout << ch << " is lowercase" << endl;\n    } else if (ch >= \'0\' && ch <= \'9\') {\n        cout << ch << " is a digit" << endl;\n    } else {\n        cout << ch << " is a special character" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Characters are compared using their ASCII values.'
},
{
  id: 'cpp_conditionals_16',
  topicId: 'cpp_conditionals',
  question: 'Check if three sides can form a valid triangle.',
  mathSolution: 'Triangle inequality: sum of any two sides > third side.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cout << "Enter three sides: ";\n    cin >> a >> b >> c;\n    \n    if (a + b > c && b + c > a && a + c > b) {\n        cout << "Valid triangle" << endl;\n        \n        if (a == b && b == c) {\n            cout << "Equilateral triangle" << endl;\n        } else if (a == b || b == c || a == c) {\n            cout << "Isosceles triangle" << endl;\n        } else {\n            cout << "Scalene triangle" << endl;\n        }\n    } else {\n        cout << "Invalid triangle" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Triangle inequality must hold for all three combinations.'
},
{
  id: 'cpp_conditionals_17',
  topicId: 'cpp_conditionals',
  question: 'Use conditional operator for min/max calculation.',
  mathSolution: 'Ternary operator provides concise min/max.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 15;\n    \n    int max = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);\n    int min = (x < y) ? ((x < z) ? x : z) : ((y < z) ? y : z);\n    \n    cout << "Max: " << max << ", Min: " << min << endl;\n    \n    // Simple min/max using functions\n    int minVal = (x < y) ? x : y;\n    int maxVal = (x > y) ? x : y;\n    \n    return 0;\n}',
  hint: 'Nested ternary operators can replace multiple if-else statements.'
},
{
  id: 'cpp_conditionals_18',
  topicId: 'cpp_conditionals',
  question: 'Use switch with enum for better readability.',
  mathSolution: 'enum provides named constants for switch cases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum TrafficLight { RED, YELLOW, GREEN };\n\nint main() {\n    TrafficLight light = YELLOW;\n    \n    switch(light) {\n        case RED:\n            cout << "Stop!" << endl;\n            break;\n        case YELLOW:\n            cout << "Prepare to stop" << endl;\n            break;\n        case GREEN:\n            cout << "Go!" << endl;\n            break;\n        default:\n            cout << "Invalid light" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Enum improves code readability and type safety.'
},
{
  id: 'cpp_conditionals_19',
  topicId: 'cpp_conditionals',
  question: 'Check if a number is within a range using compound conditions.',
  mathSolution: 'Use && to check both lower and upper bounds.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num >= 1 && num <= 100) {\n        cout << num << " is between 1 and 100" << endl;\n        \n        if (num >= 1 && num <= 10) {\n            cout << "Range: 1-10" << endl;\n        } else if (num >= 11 && num <= 20) {\n            cout << "Range: 11-20" << endl;\n        } else if (num >= 21 && num <= 30) {\n            cout << "Range: 21-30" << endl;\n        } else {\n            cout << "Range: 31-100" << endl;\n        }\n    } else {\n        cout << num << " is outside range 1-100" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use && to check both lower and upper bounds simultaneously.'
},
{
  id: 'cpp_conditionals_20',
  topicId: 'cpp_conditionals',
  question: 'Check if character is alphabet using conditions.',
  mathSolution: 'Check uppercase (A-Z) or lowercase (a-z) ranges.',
  codeSolution: '#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    // Using manual conditions\n    if ((ch >= \'A\' && ch <= \'Z\') || (ch >= \'a\' && ch <= \'z\')) {\n        cout << ch << " is an alphabet" << endl;\n        \n        // Check vowel or consonant\n        char lower = tolower(ch);\n        if (lower == \'a\' || lower == \'e\' || lower == \'i\' || lower == \'o\' || lower == \'u\') {\n            cout << "It is a vowel" << endl;\n        } else {\n            cout << "It is a consonant" << endl;\n        }\n    } else if (ch >= \'0\' && ch <= \'9\') {\n        cout << ch << " is a digit" << endl;\n    } else {\n        cout << ch << " is a special character" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use cctype functions (isalpha, isdigit) for easier checks.'
},
{
  id: 'cpp_conditionals_21',
  topicId: 'cpp_conditionals',
  question: 'Use switch with fall-through intentionally.',
  mathSolution: 'Omitting break allows multiple cases to execute.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int month;\n    cout << "Enter month (1-12): ";\n    cin >> month;\n    \n    int days;\n    switch(month) {\n        case 2:\n            days = 28;\n            break;\n        case 4:\n        case 6:\n        case 9:\n        case 11:\n            days = 30;\n            break;\n        case 1:\n        case 3:\n        case 5:\n        case 7:\n        case 8:\n        case 10:\n        case 12:\n            days = 31;\n            break;\n        default:\n            days = -1;\n    }\n    \n    if (days != -1) {\n        cout << "Month " << month << " has " << days << " days" << endl;\n    } else {\n        cout << "Invalid month" << endl;\n    }\n    \n    // Fall-through example\n    int count = 0;\n    switch(month) {\n        case 1:\n        case 3:\n        case 5:\n        case 7:\n        case 8:\n        case 10:\n        case 12:\n            count++;\n            // Fall through\n        case 4:\n        case 6:\n        case 9:\n        case 11:\n            count++;\n            // Fall through\n        case 2:\n            count++;\n    }\n    \n    return 0;\n}',
  hint: 'Fall-through is intentional when break is omitted.'
},
{
  id: 'cpp_conditionals_22',
  topicId: 'cpp_conditionals',
  question: 'Check if a string is empty using condition.',
  mathSolution: 'String empty if length() == 0 or empty() returns true.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    // Check if string is empty\n    if (str.empty()) {\n        cout << "String is empty" << endl;\n    } else if (str.length() < 5) {\n        cout << "String is short (length: " << str.length() << ")" << endl;\n    } else if (str.length() < 10) {\n        cout << "String is medium (length: " << str.length() << ")" << endl;\n    } else {\n        cout << "String is long (length: " << str.length() << ")" << endl;\n    }\n    \n    // Check if string contains spaces\n    bool hasSpace = false;\n    for (char c : str) {\n        if (c == \' \') {\n            hasSpace = true;\n            break;\n        }\n    }\n    \n    if (hasSpace) {\n        cout << "String contains spaces" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use .empty() or .length() to check if string has content.'
},
{
  id: 'cpp_conditionals_23',
  topicId: 'cpp_conditionals',
  question: 'Check if number is prime using conditional statements.',
  mathSolution: 'Prime if no divisor between 2 and sqrt(n) divides it.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    if (n <= 1) {\n        cout << n << " is not prime" << endl;\n    } else if (n == 2) {\n        cout << n << " is prime" << endl;\n    } else if (n % 2 == 0) {\n        cout << n << " is not prime" << endl;\n    } else {\n        bool isPrime = true;\n        for (int i = 3; i <= sqrt(n); i += 2) {\n            if (n % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        \n        if (isPrime) {\n            cout << n << " is prime" << endl;\n        } else {\n            cout << n << " is not prime" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Check divisibility only up to square root for efficiency.'
},
{
  id: 'cpp_conditionals_24',
  topicId: 'cpp_conditionals',
  question: 'Implement calculator using switch statement.',
  mathSolution: 'Switch on operator to perform arithmetic operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    char op;\n    \n    cout << "Enter expression (e.g., 5 + 3): ";\n    cin >> a >> op >> b;\n    \n    switch(op) {\n        case \'+\':\n            cout << a << " + " << b << " = " << a + b << endl;\n            break;\n        case \'-\':\n            cout << a << " - " << b << " = " << a - b << endl;\n            break;\n        case \'*\':\n        case \'x\':\n        case \'X\':\n            cout << a << " * " << b << " = " << a * b << endl;\n            break;\n        case \'/\':\n            if (b != 0) {\n                cout << a << " / " << b << " = " << a / b << endl;\n            } else {\n                cout << "Cannot divide by zero!" << endl;\n            }\n            break;\n        case \'%\':\n            if (b != 0) {\n                cout << int(a) << " % " << int(b) << " = " << int(a) % int(b) << endl;\n            } else {\n                cout << "Cannot modulo by zero!" << endl;\n            }\n            break;\n        default:\n            cout << "Invalid operator" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use multiple case labels for same action (e.g., \'*\', \'x\', \'X\').'
},
{
  id: 'cpp_conditionals_25',
  topicId: 'cpp_conditionals',
  question: 'Use if-else to determine grade from percentage.',
  mathSolution: 'Map percentage ranges to letter grades.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double percentage;\n    cout << "Enter percentage: ";\n    cin >> percentage;\n    \n    char grade;\n    \n    if (percentage >= 90) {\n        grade = \'A\';\n    } else if (percentage >= 80) {\n        grade = \'B\';\n    } else if (percentage >= 70) {\n        grade = \'C\';\n    } else if (percentage >= 60) {\n        grade = \'D\';\n    } else if (percentage >= 50) {\n        grade = \'E\';\n    } else {\n        grade = \'F\';\n    }\n    \n    cout << "Grade: " << grade << endl;\n    \n    // Determine grade point\n    double gpa;\n    switch(grade) {\n        case \'A\': gpa = 4.0; break;\n        case \'B\': gpa = 3.0; break;\n        case \'C\': gpa = 2.0; break;\n        case \'D\': gpa = 1.0; break;\n        case \'E\': gpa = 0.5; break;\n        default: gpa = 0.0;\n    }\n    \n    cout << "GPA: " << gpa << endl;\n    \n    return 0;\n}',
  hint: 'Check highest percentage first for correct grade assignment.'
},
{
  id: 'cpp_conditionals_26',
  topicId: 'cpp_conditionals',
  question: 'Use conditional compilation with #if, #else, #endif.',
  mathSolution: 'Preprocessor directives conditionally include code.',
  codeSolution: '#include <iostream>\n#define DEBUG 1\n#define VERSION 2\n\nusing namespace std;\n\nint main() {\n    #if DEBUG\n        cout << "Debug mode enabled" << endl;\n        cout << "Running diagnostics..." << endl;\n    #else\n        cout << "Release mode" << endl;\n    #endif\n    \n    #if VERSION == 1\n        cout << "Version 1.0 - Basic features" << endl;\n    #elif VERSION == 2\n        cout << "Version 2.0 - Advanced features" << endl;\n    #else\n        cout << "Unknown version" << endl;\n    #endif\n    \n    #ifdef _WIN32\n        cout << "Windows platform" << endl;\n    #elif defined(__linux__)\n        cout << "Linux platform" << endl;\n    #elif defined(__APPLE__)\n        cout << "macOS platform" << endl;\n    #endif\n    \n    return 0;\n}',
  hint: 'Conditional compilation is resolved at compile time, not runtime.'
},
{
  id: 'cpp_conditionals_27',
  topicId: 'cpp_conditionals',
  question: 'Use static_assert for compile-time assertions.',
  mathSolution: 'static_assert checks conditions at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nT divide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \"Type must be arithmetic\");\n    if (b == 0) {\n        throw \"Division by zero\";\n    }\n    return a / b;\n}\n\nint main() {\n    // Compile-time checks\n    static_assert(sizeof(int) >= 4, \"int must be at least 4 bytes\");\n    static_assert(CHAR_BIT == 8, \"Char must be 8 bits\");\n    \n    constexpr int size = 10;\n    int arr[size];\n    static_assert(size > 0, \"Array size must be positive\");\n    \n    cout << "Compile-time checks passed" << endl;\n    \n    // Runtime checks\n    double result = divide(10.0, 2.0);\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'static_assert provides early error detection at compile time.'
},
{
  id: 'cpp_conditionals_28',
  topicId: 'cpp_conditionals',
  question: 'Use if constexpr for compile-time conditionals (C++17).',
  mathSolution: 'if constexpr evaluates condition at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        cout << "Integral type: " << value << endl;\n        return value * 2;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << "Floating point type: " << value << endl;\n        return value * 2.0;\n    } else {\n        cout << "Other type" << endl;\n        return value;\n    }\n}\n\ntemplate<typename T>\nstring typeName() {\n    if constexpr (is_same<T, int>::value) {\n        return "int";\n    } else if constexpr (is_same<T, double>::value) {\n        return "double";\n    } else if constexpr (is_same<T, string>::value) {\n        return "string";\n    } else {\n        return "unknown";\n    }\n}\n\nint main() {\n    cout << process(42) << endl;\n    cout << process(3.14) << endl;\n    cout << process("Hello") << endl;\n    \n    cout << "Type of int: " << typeName<int>() << endl;\n    cout << "Type of double: " << typeName<double>() << endl;\n    \n    return 0;\n}',
  hint: 'if constexpr discards non-matching branches at compile time.'
},
{
  id: 'cpp_conditionals_29',
  topicId: 'cpp_conditionals',
  question: 'Check for palindromic string using conditional statements.',
  mathSolution: 'Compare characters from both ends moving inward.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    // Clean string (remove spaces and convert to lowercase)\n    string cleaned;\n    for (char c : str) {\n        if (isalnum(c)) {\n            cleaned += tolower(c);\n        }\n    }\n    \n    bool isPalindrome = true;\n    int len = cleaned.length();\n    \n    for (int i = 0; i < len / 2; i++) {\n        if (cleaned[i] != cleaned[len - 1 - i]) {\n            isPalindrome = false;\n            break;\n        }\n    }\n    \n    if (isPalindrome) {\n        cout << "\"" << str << "\" is a palindrome" << endl;\n    } else {\n        cout << "\"" << str << "\" is NOT a palindrome" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Palindrome reads same forward and backward ignoring case and spaces.'
},
{
  id: 'cpp_conditionals_30',
  topicId: 'cpp_conditionals',
  question: 'Use nested switch for menu-driven program.',
  mathSolution: 'Outer switch for main menu, inner for sub-menu.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int mainChoice, subChoice;\n    \n    do {\n        cout << "\\n=== Main Menu ===" << endl;\n        cout << "1. File Operations" << endl;\n        cout << "2. Edit Operations" << endl;\n        cout << "3. View Operations" << endl;\n        cout << "4. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> mainChoice;\n        \n        switch(mainChoice) {\n            case 1:\n                cout << "\\n--- File Menu ---" << endl;\n                cout << "1. New" << endl;\n                cout << "2. Open" << endl;\n                cout << "3. Save" << endl;\n                cout << "4. Close" << endl;\n                cout << "Select option: ";\n                cin >> subChoice;\n                \n                switch(subChoice) {\n                    case 1: cout << "Creating new file..." << endl; break;\n                    case 2: cout << "Opening file..." << endl; break;\n                    case 3: cout << "Saving file..." << endl; break;\n                    case 4: cout << "Closing file..." << endl; break;\n                    default: cout << "Invalid sub-option" << endl;\n                }\n                break;\n                \n            case 2:\n                cout << "\\n--- Edit Menu ---" << endl;\n                cout << "1. Cut" << endl;\n                cout << "2. Copy" << endl;\n                cout << "3. Paste" << endl;\n                cout << "4. Undo" << endl;\n                cout << "Select option: ";\n                cin >> subChoice;\n                \n                switch(subChoice) {\n                    case 1: cout << "Cut operation" << endl; break;\n                    case 2: cout << "Copy operation" << endl; break;\n                    case 3: cout << "Paste operation" << endl; break;\n                    case 4: cout << "Undo operation" << endl; break;\n                    default: cout << "Invalid sub-option" << endl;\n                }\n                break;\n                \n            case 3:\n                cout << "Viewing data..." << endl;\n                break;\n                \n            case 4:\n                cout << "Exiting..." << endl;\n                break;\n                \n            default:\n                cout << "Invalid main option" << endl;\n        }\n    } while (mainChoice != 4);\n    \n    return 0;\n}',
  hint: 'Nested switch can create multi-level menu systems.'
},
{
  id: 'cpp_conditionals_31',
  topicId: 'cpp_conditionals',
  question: 'Check if point lies inside circle using conditions.',
  mathSolution: 'Point distance from center <= radius lies inside.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double cx, cy, radius;\n    double px, py;\n    \n    cout << "Enter circle center (x y): ";\n    cin >> cx >> cy;\n    cout << "Enter radius: ";\n    cin >> radius;\n    cout << "Enter point (x y): ";\n    cin >> px >> py;\n    \n    double distance = sqrt(pow(px - cx, 2) + pow(py - cy, 2));\n    \n    if (distance < radius) {\n        cout << "Point lies inside the circle" << endl;\n    } else if (distance == radius) {\n        cout << "Point lies on the circle" << endl;\n    } else {\n        cout << "Point lies outside the circle" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use distance formula sqrt((x2-x1)^2 + (y2-y1)^2).'
},
{
  id: 'cpp_conditionals_32',
  topicId: 'cpp_conditionals',
  question: 'Check if year is a century year using condition.',
  mathSolution: 'Century year ends with 00 (divisible by 100).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cout << "Enter year: \";\n    cin >> year;\n    \n    if (year % 100 == 0) {\n        cout << year << \" is a century year\" << endl;\n        \n        if (year % 400 == 0) {\n            cout << \"Also a leap century year\" << endl;\n        } else {\n            cout << \"Not a leap year\" << endl;\n        }\n    } else {\n        cout << year << \" is not a century year\" << endl;\n        \n        if (year % 4 == 0) {\n            cout << \"But it is a leap year\" << endl;\n        } else {\n            cout << \"Not a leap year\" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Century years are exactly divisible by 100.'
},
{
  id: 'cpp_conditionals_33',
  topicId: 'cpp_conditionals',
  question: 'Use multiple conditions to determine zodiac sign.',
  mathSolution: 'Check month and day ranges for zodiac signs.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int month, day;\n    cout << \"Enter birth month (1-12): \";\n    cin >> month;\n    cout << \"Enter birth day: \";\n    cin >> day;\n    \n    string zodiac;\n    \n    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {\n        zodiac = \"Aries\";\n    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {\n        zodiac = \"Taurus\";\n    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {\n        zodiac = \"Gemini\";\n    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {\n        zodiac = \"Cancer\";\n    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {\n        zodiac = \"Leo\";\n    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {\n        zodiac = \"Virgo\";\n    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {\n        zodiac = \"Libra\";\n    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {\n        zodiac = \"Scorpio\";\n    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {\n        zodiac = \"Sagittarius\";\n    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {\n        zodiac = \"Capricorn\";\n    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {\n        zodiac = \"Aquarius\";\n    } else {\n        zodiac = \"Pisces\";\n    }\n    \n    cout << \"Your zodiac sign is: \" << zodiac << endl;\n    \n    return 0;\n}',
  hint: 'Zodiac signs change around the 19th-23rd of each month.'
},
{
  id: 'cpp_conditionals_34',
  topicId: 'cpp_conditionals',
  question: 'Check if number is armstrong number using conditions.',
  mathSolution: 'Sum of cubes of digits equals number itself.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int num, original, remainder, sum = 0;\n    \n    cout << "Enter a number: \";\n    cin >> num;\n    \n    original = num;\n    int digits = 0;\n    int temp = num;\n    \n    // Count digits\n    while (temp != 0) {\n        digits++;\n        temp /= 10;\n    }\n    \n    temp = num;\n    while (temp != 0) {\n        remainder = temp % 10;\n        sum += pow(remainder, digits);\n        temp /= 10;\n    }\n    \n    if (sum == original) {\n        cout << original << \" is an Armstrong number\" << endl;\n    } else {\n        cout << original << \" is NOT an Armstrong number\" << endl;\n    }\n    \n    return 0;\n}',
  hint: '153 is Armstrong (1^3 + 5^3 + 3^3 = 153).'
},
{
  id: 'cpp_conditionals_35',
  topicId: 'cpp_conditionals',
  question: 'Check if number is perfect number using conditions.',
  mathSolution: 'Sum of proper divisors equals number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num <= 0) {\n        cout << "Perfect numbers are positive" << endl;\n        return 0;\n    }\n    \n    int sum = 0;\n    for (int i = 1; i <= num / 2; i++) {\n        if (num % i == 0) {\n            sum += i;\n        }\n    }\n    \n    if (sum == num) {\n        cout << num << " is a perfect number" << endl;\n        cout << "Divisors: ";\n        for (int i = 1; i <= num / 2; i++) {\n            if (num % i == 0) {\n                cout << i << " ";\n            }\n        }\n        cout << endl;\n    } else {\n        cout << num << " is NOT a perfect number" << endl;\n    }\n    \n    return 0;\n}',
  hint: '6 is perfect (1+2+3=6); 28 is perfect (1+2+4+7+14=28).'
},
{
  id: 'cpp_conditionals_36',
  topicId: 'cpp_conditionals',
  question: 'Use conditional expressions in loops for filtering.',
  mathSolution: 'Combine if statements inside loops for data filtering.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {23, 45, 12, 67, 34, 89, 56, 78, 90, 15};\n    \n    cout << \"Even numbers: \";\n    for (int num : numbers) {\n        if (num % 2 == 0) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    cout << \"Numbers > 50: \";\n    for (int num : numbers) {\n        if (num > 50) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    cout << \"Numbers between 20 and 60: \";\n    for (int num : numbers) {\n        if (num >= 20 && num <= 60) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Loop conditions can filter, transform, or aggregate data.'
},
{
  id: 'cpp_conditionals_37',
  topicId: 'cpp_conditionals',
  question: 'Validate user input with do-while and conditions.',
  mathSolution: 'Loop continues until valid input is provided.',
  codeSolution: '#include <iostream>\n#include <limits>\nusing namespace std;\n\nint main() {\n    int age;\n    char gender;\n    double gpa;\n    \n    // Validate age input\n    do {\n        cout << \"Enter age (1-120): \";\n        cin >> age;\n        if (cin.fail() || age < 1 || age > 120) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n            cout << \"Invalid age. Please try again.\" << endl;\n        }\n    } while (age < 1 || age > 120);\n    \n    // Validate gender\n    do {\n        cout << \"Enter gender (M/F): \";\n        cin >> gender;\n        gender = toupper(gender);\n        if (gender != \'M\' && gender != \'F\') {\n            cout << \"Invalid gender. Please enter M or F.\" << endl;\n        }\n    } while (gender != \'M\' && gender != \'F\');\n    \n    // Validate GPA\n    do {\n        cout << \"Enter GPA (0.0-4.0): \";\n        cin >> gpa;\n        if (cin.fail() || gpa < 0.0 || gpa > 4.0) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n            cout << \"Invalid GPA. Please try again.\" << endl;\n        }\n    } while (gpa < 0.0 || gpa > 4.0);\n    \n    cout << \"\\nValidated input:\" << endl;\n    cout << \"Age: \" << age << endl;\n    cout << \"Gender: \" << gender << endl;\n    cout << \"GPA: \" << gpa << endl;\n    \n    return 0;\n}',
  hint: 'Always validate user input to prevent errors.'
},
{
  id: 'cpp_conditionals_38',
  topicId: 'cpp_conditionals',
  question: 'Use conditions to find roots of quadratic equation.',
  mathSolution: 'Discriminant determines nature of roots.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cout << "Enter coefficients a, b, c: \";\n    cin >> a >> b >> c;\n    \n    if (a == 0) {\n        cout << \"Not a quadratic equation (a = 0)\" << endl;\n        if (b != 0) {\n            double root = -c / b;\n            cout << \"Linear equation root: \" << root << endl;\n        }\n        return 0;\n    }\n    \n    double discriminant = b * b - 4 * a * c;\n    \n    if (discriminant > 0) {\n        double root1 = (-b + sqrt(discriminant)) / (2 * a);\n        double root2 = (-b - sqrt(discriminant)) / (2 * a);\n        cout << \"Two distinct real roots: \" << root1 << \" and \" << root2 << endl;\n    } else if (discriminant == 0) {\n        double root = -b / (2 * a);\n        cout << \"One real root (double root): \" << root << endl;\n    } else {\n        double realPart = -b / (2 * a);\n        double imaginaryPart = sqrt(-discriminant) / (2 * a);\n        cout << \"Complex roots: \" << realPart << \" + \" << imaginaryPart << \"i and \";\n        cout << realPart << \" - \" << imaginaryPart << \"i\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Discriminant = b² - 4ac determines root type.'
},
{
  id: 'cpp_conditionals_39',
  topicId: 'cpp_conditionals',
  question: 'Use condition to check if number is power of two.',
  mathSolution: 'Power of two has exactly one set bit: (n & (n-1)) == 0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int n;\n    cout << "Enter a number: \";\n    cin >> n;\n    \n    if (n == 0) {\n        cout << n << \" is not a power of two\" << endl;\n    } else if ((n & (n - 1)) == 0) {\n        cout << n << \" is a power of two\" << endl;\n        \n        // Calculate exponent\n        int exponent = 0;\n        unsigned int temp = n;\n        while (temp > 1) {\n            temp >>= 1;\n            exponent++;\n        }\n        cout << \"2^\" << exponent << \" = \" << n << endl;\n    } else {\n        cout << n << \" is not a power of two\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Power of two: 1, 2, 4, 8, 16, 32...'
},
{
  id: 'cpp_conditionals_40',
  topicId: 'cpp_conditionals',
  question: 'Use switch with enum class for type safety.',
  mathSolution: 'enum class provides scoped enumerations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Operation { ADD, SUBTRACT, MULTIPLY, DIVIDE };\n\nint main() {\n    double a, b;\n    int opChoice;\n    \n    cout << "Enter two numbers: \";\n    cin >> a >> b;\n    \n    cout << "1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\nChoose: \";\n    cin >> opChoice;\n    \n    Operation op;\n    switch(opChoice) {\n        case 1: op = Operation::ADD; break;\n        case 2: op = Operation::SUBTRACT; break;\n        case 3: op = Operation::MULTIPLY; break;\n        case 4: op = Operation::DIVIDE; break;\n        default:\n            cout << \"Invalid choice\" << endl;\n            return 1;\n    }\n    \n    double result;\n    switch(op) {\n        case Operation::ADD:\n            result = a + b;\n            cout << a << \" + \" << b << \" = \" << result << endl;\n            break;\n        case Operation::SUBTRACT:\n            result = a - b;\n            cout << a << \" - \" << b << \" = \" << result << endl;\n            break;\n        case Operation::MULTIPLY:\n            result = a * b;\n            cout << a << \" * \" << b << \" = \" << result << endl;\n            break;\n        case Operation::DIVIDE:\n            if (b != 0) {\n                result = a / b;\n                cout << a << \" / \" << b << \" = \" << result << endl;\n            } else {\n                cout << \"Cannot divide by zero\" << endl;\n            }\n            break;\n    }\n    \n    return 0;\n}',
  hint: 'enum class prevents implicit conversion to integers.'
},
{
  id: 'cpp_conditionals_41',
  topicId: 'cpp_conditionals',
  question: 'Use condition to check if string contains substring.',
  mathSolution: 'Use find() method to check substring existence.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text, search;\n    \n    cout << "Enter text: \";\n    getline(cin, text);\n    cout << \"Enter search term: \";\n    getline(cin, search);\n    \n    size_t found = text.find(search);\n    \n    if (found != string::npos) {\n        cout << \"Found at position \" << found << endl;\n        \n        // Check multiple occurrences\n        size_t pos = 0;\n        int count = 0;\n        while ((pos = text.find(search, pos)) != string::npos) {\n            count++;\n            pos += search.length();\n        }\n        cout << \"Occurrences: \" << count << endl;\n    } else {\n        cout << \"Not found\" << endl;\n    }\n    \n    // Case-insensitive search\n    string lowerText = text;\n    string lowerSearch = search;\n    for (char& c : lowerText) c = tolower(c);\n    for (char& c : lowerSearch) c = tolower(c);\n    \n    if (lowerText.find(lowerSearch) != string::npos) {\n        cout << \"Found (case-insensitive)\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'string::find() returns npos if substring not found.'
},
{
  id: 'cpp_conditionals_42',
  topicId: 'cpp_conditionals',
  question: 'Use condition to check if number is palindrome.',
  mathSolution: 'Reverse the number and compare with original.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, original, reversed = 0;\n    \n    cout << "Enter a number: \";\n    cin >> num;\n    \n    original = num;\n    \n    // Reverse the number\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    \n    if (original == reversed) {\n        cout << original << \" is a palindrome\" << endl;\n    } else {\n        cout << original << \" is NOT a palindrome\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Palindrome numbers read same forwards and backwards (121, 1331, etc.).'
},
{
  id: 'cpp_conditionals_43',
  topicId: 'cpp_conditionals',
  question: 'Use conditional statements in function return values.',
  mathSolution: 'Return different values based on conditions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint absolute(int x) {\n    return (x < 0) ? -x : x;\n}\n\nint maxValue(int a, int b, int c) {\n    if (a >= b && a >= c) return a;\n    if (b >= a && b >= c) return b;\n    return c;\n}\n\nstring gradeMessage(int score) {\n    if (score >= 90) return \"Excellent!\";\n    if (score >= 80) return \"Good job!\";\n    if (score >= 70) return \"Satisfactory\";\n    if (score >= 60) return \"Passing\";\n    return \"Need improvement\";\n}\n\nint main() {\n    cout << "Absolute of -5: \" << absolute(-5) << endl;\n    cout << \"Max of 5, 12, 8: \" << maxValue(5, 12, 8) << endl;\n    cout << \"Grade 85: \" << gradeMessage(85) << endl;\n    \n    return 0;\n}',
  hint: 'Functions can use conditions to return different values.'
},
{
  "id": "cpp_conditionals_44",
  "topicId": "cpp_conditionals",
  "question": "Use switch with string (requires mapping to integers).",
  "mathSolution": "Convert string to enum or use if-else for string comparisons.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <map>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    map<string, int> commandMap = {\n        {\"start\", 1}, {\"stop\", 2}, {\"pause\", 3}, {\"resume\", 4}, {\"exit\", 5}\n    };\n    \n    string command;\n    cout << \"Enter command (start/stop/pause/resume/exit): \";\n    cin >> command;\n    \n    // Convert to lowercase\n    for (char& c : command) c = tolower(c);\n    \n    // Check if command exists in map to avoid default insertion\n    int cmdValue = commandMap.count(command) ? commandMap[command] : 0;\n    \n    // Using map to convert to integer for switch\n    switch(cmdValue) {\n        case 1:\n            cout << \"Starting...\" << endl;\n            break;\n        case 2:\n            cout << \"Stopping...\" << endl;\n            break;\n        case 3:\n            cout << \"Pausing...\" << endl;\n            break;\n        case 4:\n            cout << \"Resuming...\" << endl;\n            break;\n        case 5:\n            cout << \"Exiting...\" << endl;\n            break;\n        default:\n            cout << \"Unknown command\" << endl;\n    }\n    \n    cout << endl;\n    \n    // Alternative: if-else for string\n    if (command == \"start\") {\n        cout << \"Starting process\" << endl;\n    } else if (command == \"stop\") {\n        cout << \"Stopping process\" << endl;\n    } else if (command == \"pause\") {\n        cout << \"Pausing process\" << endl;\n    } else if (command == \"resume\") {\n        cout << \"Resuming process\" << endl;\n    } else if (command == \"exit\") {\n        cout << \"Exiting process\" << endl;\n    } else {\n        cout << \"Invalid command\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "C++ switch doesn't work directly with strings; use if-else or mapping."
},
{
  id: 'cpp_conditionals_45',
  topicId: 'cpp_conditionals',
  question: 'Use condition to check if array is sorted.',
  mathSolution: 'Check if each element is <= next element.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr = {1, 2, 3, 4, 5};\n    // vector<int> arr = {1, 3, 2, 4, 5};\n    \n    bool ascending = true;\n    bool descending = true;\n    \n    for (size_t i = 1; i < arr.size(); i++) {\n        if (arr[i] < arr[i - 1]) ascending = false;\n        if (arr[i] > arr[i - 1]) descending = false;\n    }\n    \n    if (ascending) {\n        cout << "Array is sorted in ascending order" << endl;\n    } else if (descending) {\n        cout << "Array is sorted in descending order" << endl;\n    } else {\n        cout << "Array is not sorted" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Check both ascending and descending order.'
},
{
  id: 'cpp_conditionals_46',
  topicId: 'cpp_conditionals',
  question: 'Use condition to solve linear equation ax + b = 0.',
  mathSolution: 'Handle cases: a=0, b=0, etc.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cout << "Solve ax + b = 0" << endl;\n    cout << "Enter a and b: ";\n    cin >> a >> b;\n    \n    if (a == 0) {\n        if (b == 0) {\n            cout << "Infinite solutions (identity)" << endl;\n        } else {\n            cout << "No solution (contradiction)" << endl;\n        }\n    } else {\n        double x = -b / a;\n        cout << "Solution: x = " << x << endl;\n        \n        cout << "Verification: " << a << " * (" << x << ") + " << b << " = " << a * x + b << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Linear equation has unique solution when a != 0.'
},
{
  id: 'cpp_conditionals_47',
  topicId: 'cpp_conditionals',
  question: 'Use condition for bonus calculation based on performance.',
  mathSolution: 'Slab-based bonus calculation using if-else.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double sales;\n    double bonus = 0;\n    \n    cout << "Enter sales amount: $\";\n    cin >> sales;\n    \n    if (sales >= 100000) {\n        bonus = sales * 0.15;\n        cout << \"Excellent performance! 15% bonus\" << endl;\n    } else if (sales >= 75000) {\n        bonus = sales * 0.10;\n        cout << \"Great performance! 10% bonus\" << endl;\n    } else if (sales >= 50000) {\n        bonus = sales * 0.07;\n        cout << \"Good performance! 7% bonus\" << endl;\n    } else if (sales >= 25000) {\n        bonus = sales * 0.05;\n        cout << \"Satisfactory performance! 5% bonus\" << endl;\n    } else {\n        cout << \"Needs improvement. No bonus.\" << endl;\n    }\n    \n    if (bonus > 0) {\n        cout << \"Sales: $\" << sales << endl;\n        cout << \"Bonus: $\" << bonus << endl;\n        cout << \"Total: $\" << sales + bonus << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Slab bonus calculation is common in commission structures.'
},
{
  "id": "cpp_conditionals_48",
  "topicId": "cpp_conditionals",
  "question": "Use condition to find day of week for given date (Zeller's congruence).",
  "mathSolution": "Mathematical formula to determine day of week.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int day, month, year;\n    int originalYear, originalMonth;\n    \n    cout << \"Enter date (dd mm yyyy): \";\n    cin >> day >> month >> year;\n    \n    // Store original values for leap year check\n    originalYear = year;\n    originalMonth = month;\n    \n    // Zeller's congruence\n    if (month < 3) {\n        month += 12;\n        year--;\n    }\n    \n    int K = year % 100;\n    int J = year / 100;\n    \n    int h = (day + 13 * (month + 1) / 5 + K + K / 4 + J / 4 + 5 * J) % 7;\n    \n    string days[] = {\"Saturday\", \"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"};\n    \n    cout << \"Day of week: \" << days[h] << endl;\n    \n    // Leap year check using original year\n    bool isLeap = (originalYear % 4 == 0 && originalYear % 100 != 0) || (originalYear % 400 == 0);\n    if (isLeap) {\n        cout << originalYear << \" is a leap year\" << endl;\n    } else {\n        cout << originalYear << \" is not a leap year\" << endl;\n    }\n    \n    // Display the entered date for clarity\n    cout << \"\\nDate: \" << day << \"/\" << originalMonth << \"/\" << originalYear << endl;\n    \n    return 0;\n}",
  "hint": "Zeller's congruence calculates day of week for any date."
},
{
  id: 'cpp_conditionals_49',
  topicId: 'cpp_conditionals',
  question: 'Use condition to determine discount based on purchase amount.',
  mathSolution: 'Multiple condition checks for discount slabs.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double amount, discount = 0;\n    bool member;\n    \n    cout << "Enter purchase amount: $\";\n    cin >> amount;\n    cout << \"Are you a member? (1=Yes, 0=No): \";\n    cin >> member;\n    \n    // Calculate discount percentage\n    if (amount >= 1000) {\n        discount = 0.20;\n    } else if (amount >= 500) {\n        discount = 0.15;\n    } else if (amount >= 200) {\n        discount = 0.10;\n    } else if (amount >= 100) {\n        discount = 0.05;\n    }\n    \n    // Extra discount for members\n    if (member) {\n        discount += 0.05;\n        if (discount > 0.30) discount = 0.30;\n    }\n    \n    double discountAmount = amount * discount;\n    double finalAmount = amount - discountAmount;\n    \n    cout << fixed;\n    cout.precision(2);\n    cout << \"\\nPurchase amount: $\" << amount << endl;\n    cout << \"Discount applied: \" << discount * 100 << \"%\" << endl;\n    cout << \"Discount amount: $\" << discountAmount << endl;\n    cout << \"Final amount: $\" << finalAmount << endl;\n    \n    return 0;\n}',
  hint: 'Combine multiple conditions for tiered discounts.'
},
{
  "id": "cpp_conditionals_50",
  "topicId": "cpp_conditionals",
  "question": "Create complete conditional logic program combining all concepts.",
  "mathSolution": "Use if-else, switch, nested conditions, and validation together.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    cout << \"=== Student Management System ===\" << endl;\n    \n    string name;\n    int age;\n    double marks[5];\n    char grade;\n    \n    // Clear input buffer before getline\n    cin.ignore();\n    \n    // Input with validation\n    cout << \"Enter student name: \";\n    getline(cin, name);\n    \n    do {\n        cout << \"Enter age (5-100): \";\n        cin >> age;\n        if (age < 5 || age > 100) {\n            cout << \"Invalid age! Please enter age between 5 and 100.\" << endl;\n        }\n    } while (age < 5 || age > 100);\n    \n    // Input marks\n    double total = 0;\n    for (int i = 0; i < 5; i++) {\n        do {\n            cout << \"Enter subject \" << i + 1 << \" marks (0-100): \";\n            cin >> marks[i];\n            if (marks[i] < 0 || marks[i] > 100) {\n                cout << \"Invalid marks! Please enter marks between 0 and 100.\" << endl;\n            }\n        } while (marks[i] < 0 || marks[i] > 100);\n        total += marks[i];\n    }\n    \n    double percentage = total / 5;\n    \n    // Determine grade using if-else ladder\n    if (percentage >= 90) {\n        grade = 'A';\n    } else if (percentage >= 80) {\n        grade = 'B';\n    } else if (percentage >= 70) {\n        grade = 'C';\n    } else if (percentage >= 60) {\n        grade = 'D';\n    } else if (percentage >= 50) {\n        grade = 'E';\n    } else {\n        grade = 'F';\n    }\n    \n    // Additional evaluation\n    string performance;\n    char status;\n    \n    if (grade == 'A') {\n        performance = \"Excellent\";\n        status = 'H';\n    } else if (grade == 'B') {\n        performance = \"Very Good\";\n        status = 'G';\n    } else if (grade == 'C') {\n        performance = \"Good\";\n        status = 'S';\n    } else if (grade == 'D') {\n        performance = \"Satisfactory\";\n        status = 'S';\n    } else if (grade == 'E') {\n        performance = \"Pass\";\n        status = 'P';\n    } else {\n        performance = \"Needs Improvement\";\n        status = 'F';\n    }\n    \n    // Display results using switch for status\n    cout << \"\\n=== Student Report ===\" << endl;\n    cout << \"Name: \" << name << endl;\n    cout << \"Age: \" << age << endl;\n    cout << \"Percentage: \" << percentage << \"%\" << endl;\n    cout << \"Grade: \" << grade << endl;\n    cout << \"Performance: \" << performance << endl;\n    \n    switch(status) {\n        case 'H':\n        case 'G':\n        case 'S':\n            cout << \"Status: Promoted to next grade\" << endl;\n            break;\n        case 'P':\n            cout << \"Status: Conditional promotion\" << endl;\n            break;\n        case 'F':\n            cout << \"Status: Requires summer school\" << endl;\n            break;\n        default:\n            cout << \"Status: Unknown\" << endl;\n    }\n    \n    // Check for scholarships using nested conditions\n    cout << \"\\n=== Scholarship Eligibility ===\" << endl;\n    if (status == 'H' || status == 'G') {\n        if (age < 20) {\n            cout << \"FULL SCHOLARSHIP\" << endl;\n        } else {\n            cout << \"PARTIAL SCHOLARSHIP\" << endl;\n        }\n    } else if (status == 'S' && percentage >= 65) {\n        if (age < 20) {\n            cout << \"MERIT SCHOLARSHIP\" << endl;\n        } else {\n            cout << \"No scholarship available for this category\" << endl;\n        }\n    } else {\n        cout << \"NOT ELIGIBLE for scholarship\" << endl;\n    }\n    \n    // Show subject performance\n    cout << \"\\n=== Subject-wise Performance ===\" << endl;\n    for (int i = 0; i < 5; i++) {\n        cout << \"Subject \" << i + 1 << \": \" << marks[i] << \"% - \";\n        if (marks[i] >= 80) {\n            cout << \"Excellent\";\n        } else if (marks[i] >= 60) {\n            cout << \"Good\";\n        } else if (marks[i] >= 40) {\n            cout << \"Average\";\n        } else {\n            cout << \"Needs Improvement\";\n        }\n        cout << endl;\n    }\n    \n    // Check overall standing using ternary operator\n    string standing = (percentage >= 60) ? \"Above Average\" : (percentage >= 40) ? \"Average\" : \"Below Average\";\n    cout << \"\\n=== Overall Standing ===\" << endl;\n    cout << standing << endl;\n    \n    return 0;\n}",
  "hint": "Combine multiple conditional techniques for robust programs."
}
);