QuizData.questions.push(
{
  id: 'cpp_loops_1',
  topicId: 'cpp_loops',
  question: 'Use for loop to print numbers from 1 to 10.',
  mathSolution: 'For loop with initialization, condition, and increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'For loop syntax: for(init; condition; increment) { }'
},
{
  id: 'cpp_loops_2',
  topicId: 'cpp_loops',
  question: 'Use for loop to print numbers from 10 down to 1.',
  mathSolution: 'Decrement loop counter instead of increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 10; i >= 1; i--) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Use i-- for descending loops.'
},
{
  id: 'cpp_loops_3',
  topicId: 'cpp_loops',
  question: 'Use while loop to calculate sum of first n natural numbers.',
  mathSolution: 'Initialize sum=0, loop i=1 to n, add to sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0, i = 1;\n    cout << "Enter n: ";\n    cin >> n;\n    \n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n    \n    cout << "Sum of first " << n << " numbers: " << sum << endl;\n    return 0;\n}',
  hint: 'While loop continues while condition is true.'
},
{
  id: 'cpp_loops_4',
  topicId: 'cpp_loops',
  question: 'Use do-while loop to ensure loop executes at least once.',
  mathSolution: 'do-while executes body then checks condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    \n    do {\n        cout << "Enter a positive number: ";\n        cin >> num;\n        if (num <= 0) {\n            cout << "Invalid input! Try again." << endl;\n        }\n    } while (num <= 0);\n    \n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'do-while guarantees at least one iteration.'
},
{
  id: 'cpp_loops_5',
  topicId: 'cpp_loops',
  question: 'Print multiplication table of a number using for loop.',
  mathSolution: 'Loop from 1 to 10, multiply number by counter.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    for (int i = 1; i <= 10; i++) {\n        cout << num << " x " << setw(2) << i << " = " << num * i << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use setw for formatted output alignment.'
},
{
  "id": "cpp_loops_6",
  "topicId": "cpp_loops",
  "question": "Calculate factorial using for loop.",
  "mathSolution": "factorial = n * (n-1) * ... * 1",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    long long factorial = 1;\n    \n    cout << \"Enter a number: \";\n    cin >> n;\n    \n    if (n < 0) {\n        cout << \"Factorial of negative number doesn't exist\" << endl;\n        return 0;\n    }\n    \n    for (int i = 1; i <= n; i++) {\n        factorial *= i;\n    }\n    \n    cout << n << \"! = \" << factorial << endl;\n    \n    return 0;\n}",
  "hint": "Use long long for larger factorial values."
},
{
  id: 'cpp_loops_7',
  topicId: 'cpp_loops',
  question: 'Print Fibonacci series up to n terms.',
  mathSolution: 'Each term is sum of previous two: F(n)=F(n-1)+F(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, first = 0, second = 1, next;\n    \n    cout << "Enter number of terms: ";\n    cin >> n;\n    \n    cout << "Fibonacci series: ";\n    \n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            cout << first << " ";\n            continue;\n        }\n        if (i == 2) {\n            cout << second << " ";\n            continue;\n        }\n        next = first + second;\n        first = second;\n        second = next;\n        cout << next << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...'
},
{
  id: 'cpp_loops_8',
  topicId: 'cpp_loops',
  question: 'Check if a number is prime using for loop.',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    bool isPrime = true;\n    \n    cout << "Enter a number: ";\n    cin >> n;\n    \n    if (n <= 1) {\n        isPrime = false;\n    } else {\n        for (int i = 2; i <= sqrt(n); i++) {\n            if (n % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n    }\n    \n    if (isPrime) {\n        cout << n << " is prime" << endl;\n    } else {\n        cout << n << " is not prime" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Only need to check up to sqrt(n) for efficiency.'
},
{
  id: 'cpp_loops_9',
  topicId: 'cpp_loops',
  question: 'Print all prime numbers between 1 and n using nested loops.',
  mathSolution: 'Outer loop for numbers, inner loop for primality test.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter limit: ";\n    cin >> n;\n    \n    cout << "Prime numbers between 1 and " << n << ":\\n";\n    \n    for (int i = 2; i <= n; i++) {\n        bool isPrime = true;\n        for (int j = 2; j <= sqrt(i); j++) {\n            if (i % j == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        if (isPrime) {\n            cout << i << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Nested loops are used for multi-level iterations.'
},
{
  id: 'cpp_loops_10',
  topicId: 'cpp_loops',
  question: 'Reverse a number using while loop.',
  mathSolution: 'Extract digits using % and build reversed number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, reversed = 0, remainder;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int original = num;\n    \n    while (num != 0) {\n        remainder = num % 10;\n        reversed = reversed * 10 + remainder;\n        num /= 10;\n    }\n    \n    cout << "Reversed number: " << reversed << endl;\n    \n    return 0;\n}',
  hint: 'Use % 10 to get last digit, / 10 to remove it.'
},
{
  id: 'cpp_loops_11',
  topicId: 'cpp_loops',
  question: 'Count digits in a number using while loop.',
  mathSolution: 'Divide by 10 until number becomes 0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, count = 0;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int temp = num;\n    \n    if (temp == 0) {\n        count = 1;\n    } else {\n        while (temp != 0) {\n            temp /= 10;\n            count++;\n        }\n    }\n    \n    cout << "Number of digits: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Handle zero separately as it has 1 digit.'
},
{
  id: 'cpp_loops_12',
  topicId: 'cpp_loops',
  question: 'Calculate sum of digits using while loop.',
  mathSolution: 'Add last digit, then remove it.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, sum = 0;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int temp = abs(num);\n    \n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    \n    cout << "Sum of digits: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use abs() to handle negative numbers.'
},
{
  id: 'cpp_loops_13',
  topicId: 'cpp_loops',
  question: 'Find GCD of two numbers using Euclidean algorithm (loop).',
  mathSolution: 'GCD(a,b) = GCD(b, a%b) until b=0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    int num1 = a, num2 = b;\n    \n    while (num2 != 0) {\n        int temp = num2;\n        num2 = num1 % num2;\n        num1 = temp;\n    }\n    \n    cout << "GCD of " << a << " and " << b << " is: " << num1 << endl;\n    \n    return 0;\n}',
  hint: 'Euclidean algorithm is efficient for GCD calculation.'
},
{
  id: 'cpp_loops_14',
  topicId: 'cpp_loops',
  question: 'Find LCM of two numbers using loop.',
  mathSolution: 'LCM = (a * b) / GCD(a, b).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    int num1 = a, num2 = b, gcd;\n    \n    while (num2 != 0) {\n        int temp = num2;\n        num2 = num1 % num2;\n        num1 = temp;\n    }\n    gcd = num1;\n    \n    int lcm = (a * b) / gcd;\n    \n    cout << "LCM of " << a << " and " << b << " is: " << lcm << endl;\n    \n    return 0;\n}',
  hint: 'LCM * GCD = a * b'
},
{
  id: 'cpp_loops_15',
  topicId: 'cpp_loops',
  question: 'Generate multiplication table using nested loops.',
  mathSolution: 'Outer loop for rows, inner loop for columns.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << "Multiplication Table (1-10):\\n\\n";\n    \n    // Print header\n    cout << "    ";\n    for (int i = 1; i <= 10; i++) {\n        cout << setw(4) << i;\n    }\n    cout << endl;\n    \n    for (int i = 1; i <= 10; i++) {\n        cout << setw(4) << i << " ";  // Row label\n        for (int j = 1; j <= 10; j++) {\n            cout << setw(4) << i * j;\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Nested loops create 2D patterns and tables.'
},
{
  id: 'cpp_loops_16',
  topicId: 'cpp_loops',
  question: 'Print right-angled triangle star pattern.',
  mathSolution: 'Row i has i stars.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Number of stars equals row number.'
},
{
  id: 'cpp_loops_17',
  topicId: 'cpp_loops',
  question: 'Print pyramid star pattern.',
  mathSolution: 'Spaces decrease, stars increase as row increases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        // Print spaces\n        for (int j = 1; j <= rows - i; j++) {\n            cout << " ";\n        }\n        // Print stars\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Stars count: 2*i - 1, spaces: rows - i.'
},
{
  id: 'cpp_loops_18',
  topicId: 'cpp_loops',
  question: 'Print Floyd\'s triangle (sequential numbers).',
  mathSolution: 'Use counter that increments each print.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int rows, num = 1;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << setw(3) << num++;\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Floyd\'s triangle has consecutive natural numbers.'
},
{
  id: 'cpp_loops_19',
  topicId: 'cpp_loops',
  question: 'Print Pascal\'s triangle using nested loops.',
  mathSolution: 'Use combinations formula: C(n,k) = C(n,k-1) * (n-k+1)/k.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 0; i < rows; i++) {\n        // Print spaces\n        for (int j = 0; j < rows - i - 1; j++) {\n            cout << " ";\n        }\n        \n        int coeff = 1;\n        for (int j = 0; j <= i; j++) {\n            cout << coeff << " ";\n            coeff = coeff * (i - j) / (j + 1);\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Pascal\'s triangle: each number is sum of two above.'
},
{
  id: 'cpp_loops_20',
  topicId: 'cpp_loops',
  question: 'Find largest element in array using loop.',
  mathSolution: 'Initialize max with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 12, 3, 25, 8, 19, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int max = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    \n    cout << "Largest element: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Initialize max with first array element.'
},
{
  id: 'cpp_loops_21',
  topicId: 'cpp_loops',
  question: 'Sort array in ascending order using bubble sort (loop).',
  mathSolution: 'Bubble up largest element to end in each pass.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    // Bubble sort\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    \n    cout << "Sorted array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Bubble sort repeatedly steps through list, swapping adjacent elements.'
},
{
  id: 'cpp_loops_22',
  topicId: 'cpp_loops',
  question: 'Implement binary search using loop.',
  mathSolution: 'Divide search interval in half repeatedly.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target;\n    \n    cout << "Enter target: ";\n    cin >> target;\n    \n    int left = 0, right = n - 1;\n    int position = -1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            position = mid;\n            break;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    \n    if (position != -1) {\n        cout << "Found at index: " << position << endl;\n    } else {\n        cout << "Not found" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Binary search requires sorted array.'
},
{
  id: 'cpp_loops_23',
  topicId: 'cpp_loops',
  question: 'Use break statement to exit loop early.',
  mathSolution: 'break terminates the loop immediately.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 5) {\n            cout << "Breaking at i = " << i << endl;\n            break;\n        }\n        cout << i << " ";\n    }\n    cout << "\\nLoop ended" << endl;\n    \n    return 0;\n}',
  hint: 'break is useful when condition is met early.'
},
{
  id: 'cpp_loops_24',
  topicId: 'cpp_loops',
  question: 'Use continue statement to skip iteration.',
  mathSolution: 'continue skips rest of current iteration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            continue;  // Skip even numbers\n        }\n        cout << i << " ";\n    }\n    cout << "\\n(Only odd numbers printed)" << endl;\n    \n    return 0;\n}',
  hint: 'continue moves to next iteration.'
},
{
  id: 'cpp_loops_25',
  topicId: 'cpp_loops',
  question: 'Use infinite loop with break condition.',
  mathSolution: 'Loop untli condition met, then break.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    int sum = 0;\n    \n    cout << "Enter numbers to sum (0 to stop):\\n";\n    \n    while (true) {\n        cin >> num;\n        if (num == 0) break;\n        sum += num;\n    }\n    \n    cout << "Sum: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use while(true) with break for "loop until condition".'
},
{
  id: 'cpp_loops_26',
  topicId: 'cpp_loops',
  question: 'Sum of array elements using range-based for loop (C++11).',
  mathSolution: 'Range-based for simplifies array iteration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    \n    for (int x : arr) {\n        sum += x;\n    }\n    \n    cout << "Sum: " << sum << endl;\n    \n    // Modifying elements\n    for (int &x : arr) {\n        x *= 2;\n    }\n    \n    cout << "Doubled: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use & for reference to modify elements in range-based loop.'
},
{
  id: 'cpp_loops_27',
  topicId: 'cpp_loops',
  question: 'Print diamond pattern using nested loops.',
  mathSolution: 'Continue increasing then decreasing pattern.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter size: ";\n    cin >> n;\n    \n    // Upper half\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << " ";\n        }\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    // Lower half\n    for (int i = n - 1; i >= 1; i--) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << " ";\n        }\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Diamond pattern combines pyramid and inverted pyramid.'
},
{
  id: 'cpp_loops_28',
  topicId: 'cpp_loops',
  question: 'Find factors of a number using for loop.',
  mathSolution: 'Check divisibility from 1 to n.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    cout << "Factors of " << n << ": ";\n    \n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            cout << i << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Factors are numbers that divide n evenly.'
},
{
  id: 'cpp_loops_29',
  topicId: 'cpp_loops',
  question: 'Check if number is perfect number using loop.',
  mathSolution: 'Sum of proper divisors equals the number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    for (int i = 1; i <= n / 2; i++) {\n        if (n % i == 0) {\n            sum += i;\n        }\n    }\n    \n    if (sum == n && n > 0) {\n        cout << n << " is a perfect number" << endl;\n    } else {\n        cout << n << " is not a perfect number" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Perfect numbers: 6, 28, 496, 8128...'
},
{
  id: 'cpp_loops_30',
  topicId: 'cpp_loops',
  question: 'Find Armstrong numbers between 1 and n using loop.',
  mathSolution: 'Sum of digits raised to power of digit count equals number.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter limit: ";\n    cin >> n;\n    \n    cout << "Armstrong numbers between 1 and " << n << ":\\n";\n    \n    for (int i = 1; i <= n; i++) {\n        int num = i;\n        int digits = 0;\n        int temp = num;\n        \n        // Count digits\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        \n        temp = num;\n        int sum = 0;\n        while (temp != 0) {\n            int digit = temp % 10;\n            sum += pow(digit, digits);\n            temp /= 10;\n        }\n        \n        if (sum == num) {\n            cout << num << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: '153 is Armstrong: 1³ + 5³ + 3³ = 153.'
},
{
  id: 'cpp_loops_31',
  topicId: 'cpp_loops',
  question: 'Convert decimal to binary using loop.',
  mathSolution: 'Store remainders in reverse order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    long long binary = 0, place = 1;\n    \n    cout << "Enter decimal number: ";\n    cin >> n;\n    \n    int temp = n;\n    \n    while (temp > 0) {\n        int rem = temp % 2;\n        binary += rem * place;\n        place *= 10;\n        temp /= 2;\n    }\n    \n    cout << n << " in binary = " << binary << endl;\n    \n    return 0;\n}',
  hint: 'Binary digits are remainders when dividing by 2.'
},
{
  id: 'cpp_loops_32',
  topicId: 'cpp_loops',
  question: 'Reverse a string using loop.',
  mathSolution: 'Swap characters from start and end.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    int n = str.length();\n    \n    for (int i = 0; i < n / 2; i++) {\n        char temp = str[i];\n        str[i] = str[n - 1 - i];\n        str[n - 1 - i] = temp;\n    }\n    \n    cout << "Reversed string: " << str << endl;\n    \n    return 0;\n}',
  hint: 'Swap characters from both ends moving inward.'
},
{
  id: 'cpp_loops_33',
  topicId: 'cpp_loops',
  question: 'Count frequency of each character in string using loop.',
  mathSolution: 'Use array of size 256 to store ASCII counts.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    int freq[256] = {0};\n    \n    for (char c : str) {\n        freq[c]++;\n    }\n    \n    cout << "Character frequencies:\\n";\n    for (int i = 0; i < 256; i++) {\n        if (freq[i] > 0 && isprint(i)) {\n            cout << (char)i << ": " << freq[i] << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Use ASCII values as array indices for frequency.'
},
{
  id: 'cpp_loops_34',
  topicId: 'cpp_loops',
  question: 'Remove duplicates from sorted array using loop.',
  mathSolution: 'Shift unique elements forward.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int uniqueCount = 0;\n    \n    for (int i = 0; i < n; i++) {\n        if (i == 0 || arr[i] != arr[i - 1]) {\n            arr[uniqueCount++] = arr[i];\n        }\n    }\n    \n    cout << "Array after removing duplicates: ";\n    for (int i = 0; i < uniqueCount; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, compare with previous element.'
},
{
  id: 'cpp_loops_35',
  topicId: 'cpp_loops',
  question: 'Find second largest element using loop.',
  mathSolution: 'Track both largest and second largest.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MIN, second = INT_MIN;\n    \n    for (int i = 0; i < n; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    if (second == INT_MIN) {\n        cout << "No second largest element" << endl;\n    } else {\n        cout << "Second largest: " << second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Track both max and second max during single pass.'
},
{
  id: 'cpp_loops_36',
  topicId: 'cpp_loops',
  question: 'Print all divisors of a number efficiently.',
  mathSolution: 'Iterate up to sqrt(n), pair divisors.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    cout << "Divisors of " << n << ": ";\n    \n    for (int i = 1; i <= sqrt(n); i++) {\n        if (n % i == 0) {\n            cout << i << " ";\n            if (i != n / i) {\n                cout << n / i << " ";\n            }\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Divisors come in pairs: i and n/i.'
},
{
  "id": "cpp_loops_37",
  "topicId": "cpp_loops",
  "question": "Find number of vowels and consonants using loop.",
  "mathSolution": "Count vowels separately, rest are consonants.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << \"Enter a string: \";\n    getline(cin, str);\n    \n    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0;\n    \n    for (char c : str) {\n        if (isalpha(c)) {\n            char lower = tolower(c);\n            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        } else if (isdigit(c)) {\n            digits++;\n        } else if (isspace(c)) {\n            spaces++;\n        } else {\n            special++;\n        }\n    }\n    \n    cout << \"Vowels: \" << vowels << endl;\n    cout << \"Consonants: \" << consonants << endl;\n    cout << \"Digits: \" << digits << endl;\n    cout << \"Spaces: \" << spaces << endl;\n    cout << \"Special characters: \" << special << endl;\n    \n    return 0;\n}",
  "hint": "Use <cctype> functions like isalpha, isdigit, isspace."
},
{
  id: 'cpp_loops_38',
  topicId: 'cpp_loops',
  question: 'Merge two sorted arrays using loop.',
  mathSolution: 'Compare elements and add smaller to result.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 3, 5, 7};\n    int arr2[] = {2, 4, 6, 8, 10};\n    int n1 = sizeof(arr1) / sizeof(arr1[0]);\n    int n2 = sizeof(arr2) / sizeof(arr2[0]);\n    vector<int> merged(n1 + n2);\n    \n    int i = 0, j = 0, k = 0;\n    \n    while (i < n1 && j < n2) {\n        if (arr1[i] <= arr2[j]) {\n            merged[k++] = arr1[i++];\n        } else {\n            merged[k++] = arr2[j++];\n        }\n    }\n    \n    while (i < n1) {\n        merged[k++] = arr1[i++];\n    }\n    \n    while (j < n2) {\n        merged[k++] = arr2[j++];\n    }\n    \n    cout << "Merged array: ";\n    for (int x : merged) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Merge is like zipping two sorted lists.'
},
{
  id: 'cpp_loops_39',
  topicId: 'cpp_loops',
  question: 'Check if array is palindrome using loop.',
  mathSolution: 'Compare elements from both ends.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    bool isPalindrome = true;\n    \n    for (int i = 0; i < n / 2; i++) {\n        if (arr[i] != arr[n - 1 - i]) {\n            isPalindrome = false;\n            break;\n        }\n    }\n    \n    if (isPalindrome) {\n        cout << "Array is palindrome" << endl;\n    } else {\n        cout << "Array is not palindrome" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Palindrome reads same forward and backward.'
},
{
  id: 'cpp_loops_40',
  topicId: 'cpp_loops',
  question: 'Rotate array left by k positions using loop.',
  mathSolution: 'Shift elements left and handle wrap-around.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int k;\n    \n    cout << "Enter rotation count: ";\n    cin >> k;\n    \n    k = k % n;  // Handle rotation > n\n    \n    // Rotate left by k\n    for (int i = 0; i < k; i++) {\n        int first = arr[0];\n        for (int j = 0; j < n - 1; j++) {\n            arr[j] = arr[j + 1];\n        }\n        arr[n - 1] = first;\n    }\n    \n    cout << "Rotated array: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use modulo to handle k > n efficiently.'
},
{
  id: 'cpp_loops_41',
  topicId: 'cpp_loops',
  question: 'Find the frequency of each element in array (not sorted).',
  mathSolution: 'Use nested loops to count occurrences.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 1, 4, 2, 5, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    vector<bool> visited(n, false);\n    \n    for (int i = 0; i < n; i++) {\n        if (visited[i]) continue;\n        \n        int count = 1;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[i] == arr[j]) {\n                count++;\n                visited[j] = true;\n            }\n        }\n        cout << arr[i] << " appears " << count << " times" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use visited array to avoid recounting elements.'
},
{
  id: 'cpp_loops_42',
  topicId: 'cpp_loops',
  question: 'Move all zeros to end of array using loop.',
  mathSolution: 'Track non-zero position and shift zeros.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12, 0, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int nonZeroIndex = 0;\n    \n    // Move non-zero elements to front\n    for (int i = 0; i < n; i++) {\n        if (arr[i] != 0) {\n            arr[nonZeroIndex++] = arr[i];\n        }\n    }\n    \n    // Fill remaining positions with zeros\n    while (nonZeroIndex < n) {\n        arr[nonZeroIndex++] = 0;\n    }\n    \n    cout << "Array after moving zeros: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use two-pointer technique for in-place operation.'
},
{
  "id": "cpp_loops_43",
  "topicId": "cpp_loops",
  "question": "Print all subarrays of an array using nested loops.",
  "mathSolution": "Pick start and end indices, print subarray.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << \"All subarrays:\" << endl;\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = i; j < n; j++) {\n            cout << \"[ \";\n            for (int k = i; k <= j; k++) {\n                cout << arr[k] << \" \";\n            }\n            cout << \"]\" << endl;\n        }\n    }\n    \n    return 0;\n}",
  "hint": "Subarrays are contiguous sequences of the array."
},
{
  id: 'cpp_loops_44',
  topicId: 'cpp_loops',
  question: 'Find maximum subarray sum using Kadane\'s algorithm (loop).',
  mathSolution: 'Keep running sum, reset if negative.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int maxSoFar = INT_MIN;\n    int maxEndingHere = 0;\n    int start = 0, end = 0, tempStart = 0;\n    \n    for (int i = 0; i < n; i++) {\n        maxEndingHere += arr[i];\n        \n        if (maxEndingHere > maxSoFar) {\n            maxSoFar = maxEndingHere;\n            start = tempStart;\n            end = i;\n        }\n        \n        if (maxEndingHere < 0) {\n            maxEndingHere = 0;\n            tempStart = i + 1;\n        }\n    }\n    \n    cout << "Maximum subarray sum: " << maxSoFar << endl;\n    cout << "Subarray: [" << start << ", " << end << "]" << endl;\n    \n    return 0;\n}',
  hint: 'Kadane\'s algorithm runs in O(n).'
},
{
  id: 'cpp_loops_45',
  topicId: 'cpp_loops',
  question: 'Print spiral matrix using nested loops.',
  mathSolution: 'Traverse boundaries: left to right, top to bottom, etc.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[4][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12},\n        {13, 14, 15, 16}\n    };\n    \n    int top = 0, bottom = 3, left = 0, right = 3;\n    \n    cout << "Spiral order: \";\n    \n    while (top <= bottom && left <= right) {\n        // Print top row\n        for (int i = left; i <= right; i++) {\n            cout << matrix[top][i] << \" \";\n        }\n        top++;\n        \n        // Print right column\n        for (int i = top; i <= bottom; i++) {\n            cout << matrix[i][right] << \" \";\n        }\n        right--;\n        \n        // Print bottom row\n        if (top <= bottom) {\n            for (int i = right; i >= left; i--) {\n                cout << matrix[bottom][i] << \" \";\n            }\n            bottom--;\n        }\n        \n        // Print left column\n        if (left <= right) {\n            for (int i = bottom; i >= top; i--) {\n                cout << matrix[i][left] << \" \";\n            }\n            left++;\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Spiral traversal shrinks boundaries each iteration.'
},
{
  id: 'cpp_loops_46',
  topicId: 'cpp_loops',
  question: 'Transpose a matrix using nested loops.',
  mathSolution: 'Swap arr[i][j] with arr[j][i] for i < j.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    cout << "Original matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Transpose\n    for (int i = 0; i < 3; i++) {\n        for (int j = i + 1; j < 3; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = temp;\n        }\n    }\n    \n    cout << "\\nTransposed matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Transpose swaps rows with columns.'
},
{
  id: 'cpp_loops_47',
  topicId: 'cpp_loops',
  question: 'Implement linear search using loop.',
  mathSolution: 'Iterate through array, compare each element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {3, 7, 2, 9, 5, 1, 8};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target;\n    \n    cout << "Enter target: ";\n    cin >> target;\n    \n    int position = -1;\n    \n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) {\n            position = i;\n            break;\n        }\n    }\n    \n    if (position != -1) {\n        cout << "Found at index: " << position << endl;\n    } else {\n        cout << "Not found" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Linear search works on unsorted arrays, O(n) time.'
},
{
  id: 'cpp_loops_48',
  topicId: 'cpp_loops',
  question: 'Find intersection of two arrays using nested loops.',
  mathSolution: 'Compare each element of first with second.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int n1 = sizeof(arr1) / sizeof(arr1[0]);\n    int n2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    vector<int> intersection;\n    \n    for (int i = 0; i < n1; i++) {\n        for (int j = 0; j < n2; j++) {\n            if (arr1[i] == arr2[j]) {\n                // Check if already added\n                bool alreadyExists = false;\n                for (int k = 0; k < intersection.size(); k++) {\n                    if (intersection[k] == arr1[i]) {\n                        alreadyExists = true;\n                        break;\n                    }\n                }\n                if (!alreadyExists) {\n                    intersection.push_back(arr1[i]);\n                }\n                break;\n            }\n        }\n    }\n    \n    cout << "Intersection: \";\n    for (int x : intersection) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Intersection contains elements present in both arrays.'
},
{
  id: 'cpp_loops_49',
  topicId: 'cpp_loops',
  question: 'Print Pascal\'s triangle using combination formula (nested loops).',
  mathSolution: 'C(n,k) = n! / (k! * (n-k)!).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    int fact = 1;\n    for (int i = 1; i <= n; i++) fact *= i;\n    return fact;\n}\n\nint combination(int n, int r) {\n    return factorial(n) / (factorial(r) * factorial(n - r));\n}\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 0; i < rows; i++) {\n        // Print spaces\n        for (int j = 0; j < rows - i - 1; j++) {\n            cout << " ";\n        }\n        // Print numbers\n        for (int j = 0; j <= i; j++) {\n            cout << combination(i, j) << " ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Each number is sum of two numbers above it.'
},
{
  id: 'cpp_loops_50',
  topicId: 'cpp_loops',
  question: 'Create complete loop demonstration program with multiple patterns.',
  mathSolution: 'Combine various loop techniques in one program.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << "=== Loop Demo Program ===\\n\\n";\n    \n    // 1. Basic for loop\n    cout << "1. Numbers 1 to 10: ";\n    for (int i = 1; i <= 10; i++) {\n        cout << i << " ";\n    }\n    cout << "\\n\\n";\n    \n    // 2. While loop sum\n    int sum = 0, i = 1;\n    while (i <= 10) {\n        sum += i++;\n    }\n    cout << "2. Sum of 1 to 10: " << sum << "\\n\\n";\n    \n    // 3. Do-while input validation\n    int num;\n    do {\n        cout << "3. Enter a number between 1-10: ";\n        cin >> num;\n        if (num < 1 || num > 10) {\n            cout << "   Invalid! Try again.\\n";\n        }\n    } while (num < 1 || num > 10);\n    cout << "   You entered: " << num << "\\n\\n";\n    \n    // 4. Nested loop - multiplication table\n    cout << "4. Multiplication table (5x5):\\n";\n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= 5; j++) {\n            cout << setw(4) << i * j;\n        }\n        cout << endl;\n    }\n    cout << endl;\n    \n    // 5. Range-based for loop\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    cout << "5. Range-based loop: ";\n    for (int x : numbers) {\n        cout << x << " ";\n    }\n    cout << "\\n\\n";\n    \n    // 6. Pattern printing\n    cout << "6. Star pattern:\\n";\n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    cout << endl;\n    \n    // 7. break and continue demo\n    cout << "7. Break and continue:\\n";\n    for (int i = 1; i <= 10; i++) {\n        if (i % 3 == 0) continue;  // Skip multiples of 3\n        if (i > 8) break;           // Stop at 9\n        cout << i << " ";\n    }\n    cout << "\\n\\n";\n    \n    // 8. Fibonacci series\n    int a = 0, b = 1, c;\n    cout << "8. Fibonacci (first 10): ";\n    for (int i = 1; i <= 10; i++) {\n        cout << a << " ";\n        c = a + b;\n        a = b;\n        b = c;\n    }\n    cout << "\\n\\n";\n    \n    // 9. Factorial\n    int fact = 1;\n    for (int i = 1; i <= 5; i++) fact *= i;\n    cout << "9. Factorial of 5: " << fact << "\\n\\n";\n    \n    // 10. Prime numbers\n    cout << "10. Prime numbers up to 30: ";\n    for (int n = 2; n <= 30; n++) {\n        bool isPrime = true;\n        for (int divisor = 2; divisor * divisor <= n; divisor++) {\n            if (n % divisor == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        if (isPrime) cout << n << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Combines all loop concepts in comprehensive example.'
}
);