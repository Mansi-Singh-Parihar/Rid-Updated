QuizData.questions.push(
  // ========== BASIC FUNCTIONS (1-10) ==========
  {
    id: 'c_func_001',
    topicId: 'c_functions',
    question: 'Write a program with a function to add two integers and display result.',
    mathSolution: 'Add 10 and 20 = 30',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(10, 20);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Function returns int, takes two int parameters'
  },
  {
    id: 'c_func_002',
    topicId: 'c_functions',
    question: 'Write a program with a void function that prints "Hello World".',
    mathSolution: 'Print greeting message',
    codeSolution: '#include <stdio.h>\n\nvoid greet(void) {\n    printf("Hello World\\n");\n}\n\nint main() {\n    greet();\n    return 0;\n}',
    hint: 'void return type means no return value'
  },
  {
    id: 'c_func_003',
    topicId: 'c_functions',
    question: 'Write a program with a function to find maximum of two numbers.',
    mathSolution: 'Max of 15 and 25 is 25',
    codeSolution: '#include <stdio.h>\n\nint max(int x, int y) {\n    return (x > y) ? x : y;\n}\n\nint main() {\n    int result = max(15, 25);\n    printf("Maximum = %d\\n", result);\n    return 0;\n}',
    hint: 'Use conditional operator or if-else'
  },
  {
    id: 'c_func_004',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate area of circle given radius 5.',
    mathSolution: 'Area = π × 5² = 78.54',
    codeSolution: '#include <stdio.h>\n\nfloat areaCircle(float r) {\n    return 3.14159 * r * r;\n}\n\nint main() {\n    float area = areaCircle(5);\n    printf("Area = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Use float parameters and return type'
  },
  {
    id: 'c_func_005',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if character \'a\' is vowel.',
    mathSolution: '\'a\' is a vowel',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint isVowel(char c) {\n    c = tolower(c);\n    return (c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\');\n}\n\nint main() {\n    char ch = \'a\';\n    if(isVowel(ch))\n        printf("%c is a vowel\\n", ch);\n    else\n        printf("%c is a consonant\\n", ch);\n    return 0;\n}',
    hint: 'Check against set of vowels'
  },
  {
    id: 'c_func_006',
    topicId: 'c_functions',
    question: 'Write a program with a function to convert 25°C to Fahrenheit.',
    mathSolution: '25°C = 77°F',
    codeSolution: '#include <stdio.h>\n\nfloat celsiusToFahrenheit(float c) {\n    return (c * 9/5) + 32;\n}\n\nint main() {\n    float f = celsiusToFahrenheit(25);\n    printf("25°C = %.2f°F\\n", f);\n    return 0;\n}',
    hint: 'Apply conversion formula F = (C × 9/5) + 32'
  },
  {
    id: 'c_func_007',
    topicId: 'c_functions',
    question: 'Write a program with a function to find sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint arraySum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++)\n        sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = arraySum(arr, 5);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Pass array and its size'
  },
  {
    id: 'c_func_008',
    topicId: 'c_functions',
    question: 'Write a program with a function to find average of array elements.',
    mathSolution: 'Average of [10,20,30,40,50] = 30',
    codeSolution: '#include <stdio.h>\n\nfloat arrayAvg(int arr[], int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++)\n        sum += arr[i];\n    return (float)sum / n;\n}\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    float avg = arrayAvg(arr, 5);\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float for division'
  },
  {
    id: 'c_func_009',
    topicId: 'c_functions',
    question: 'Write a program with a recursive function to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int result = factorial(5);\n    printf("5! = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_func_010',
    topicId: 'c_functions',
    question: 'Write a program with a recursive function to find 6th Fibonacci number.',
    mathSolution: 'Fib(6) = 8 (0,1,1,2,3,5,8)',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int result = fib(6);\n    printf("Fibonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },

  // ========== RECURSIVE FUNCTIONS (11-20) ==========
  {
    id: 'c_func_011',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to calculate power 2^5.',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int result = power(2, 5);\n    printf("2^5 = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_func_012',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find sum of digits of 123.',
    mathSolution: '1+2+3 = 6',
    codeSolution: '#include <stdio.h>\n\nint sumDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    int result = sumDigits(123);\n    printf("Sum of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_func_013',
    topicId: 'c_functions',
    question: 'Write a program with a function to find length of string "Hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint stringLength(char str[]) {\n    int len = 0;\n    while(str[len] != \'\\0\')\n        len++;\n    return len;\n}\n\nint main() {\n    char str[] = "Hello";\n    int len = stringLength(str);\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Loop until null terminator'
  },
  {
    id: 'c_func_014',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 17 is prime.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint isPrime(int n) {\n    if(n < 2) return 0;\n    for(int i = 2; i <= n/2; i++)\n        if(n % i == 0) return 0;\n    return 1;\n}\n\nint main() {\n    int n = 17;\n    if(isPrime(n))\n        printf("%d is prime\\n", n);\n    else\n        printf("%d is not prime\\n", n);\n    return 0;\n}',
    hint: 'Check divisibility up to n/2'
  },
  {
    id: 'c_func_015',
    topicId: 'c_functions',
    question: 'Write a program with a function to find GCD of 48 and 18.',
    mathSolution: 'GCD = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int result = gcd(48, 18);\n    printf("GCD = %d\\n", result);\n    return 0;\n}',
    hint: 'Euclidean algorithm: gcd(a,b) = gcd(b, a%b)'
  },
  {
    id: 'c_func_016',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 121 is palindrome.',
    mathSolution: '121 is palindrome',
    codeSolution: '#include <stdio.h>\n\nint isPalindrome(int n) {\n    int rev = 0, orig = n;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev == orig;\n}\n\nint main() {\n    int n = 121;\n    if(isPalindrome(n))\n        printf("%d is palindrome\\n", n);\n    else\n        printf("%d is not palindrome\\n", n);\n    return 0;\n}',
    hint: 'Reverse number and compare with original'
  },
  {
    id: 'c_func_017',
    topicId: 'c_functions',
    question: 'Write a program with a function to swap two numbers using pointers.',
    mathSolution: 'Swap a=10, b=20 to a=20, b=10',
    codeSolution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int a = 10, b = 20;\n    printf("Before: a=%d, b=%d\\n", a, b);\n    swap(&a, &b);\n    printf("After: a=%d, b=%d\\n", a, b);\n    return 0;\n}',
    hint: 'Use pointers to modify original values'
  },
  {
    id: 'c_func_018',
    topicId: 'c_functions',
    question: 'Write a program with a function to increment a number using pointer.',
    mathSolution: 'Increment 5 to 6',
    codeSolution: '#include <stdio.h>\n\nvoid increment(int *p) {\n    (*p)++;\n}\n\nint main() {\n    int x = 5;\n    printf("Before: %d\\n", x);\n    increment(&x);\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Dereference pointer to modify value'
  },
  {
    id: 'c_func_019',
    topicId: 'c_functions',
    question: 'Write a program with a function that counts how many times it was called.',
    mathSolution: 'First call returns 1, second returns 2',
    codeSolution: '#include <stdio.h>\n\nint countCalls(void) {\n    static int count = 0;\n    return ++count;\n}\n\nint main() {\n    printf("Call 1: %d\\n", countCalls());\n    printf("Call 2: %d\\n", countCalls());\n    printf("Call 3: %d\\n", countCalls());\n    return 0;\n}',
    hint: 'Static retains value between calls'
  },
  {
    id: 'c_func_020',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 2024 is leap year.',
    mathSolution: '2024 is leap year',
    codeSolution: '#include <stdio.h>\n\nint isLeap(int year) {\n    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n}\n\nint main() {\n    int year = 2024;\n    if(isLeap(year))\n        printf("%d is a leap year\\n", year);\n    else\n        printf("%d is not a leap year\\n", year);\n    return 0;\n}',
    hint: 'Leap year rules: divisible by 4, not by 100 unless by 400'
  },

  // ========== ARRAY AND STRING FUNCTIONS (21-30) ==========
  {
    id: 'c_func_021',
    topicId: 'c_functions',
    question: 'Write a program with a function to reverse an array.',
    mathSolution: 'Reverse [1,2,3,4,5] to [5,4,3,2,1]',
    codeSolution: '#include <stdio.h>\n\nvoid reverseArray(int arr[], int n) {\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    reverseArray(arr, 5);\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap elements from ends'
  },
  {
    id: 'c_func_022',
    topicId: 'c_functions',
    question: 'Write a program with a function to copy string "Hello".',
    mathSolution: 'Copy "Hello" to destination',
    codeSolution: '#include <stdio.h>\n\nvoid stringCopy(char dest[], char src[]) {\n    int i = 0;\n    while(src[i] != \'\\0\') {\n        dest[i] = src[i];\n        i++;\n    }\n    dest[i] = \'\\0\';\n}\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    stringCopy(dest, src);\n    printf("Copied string: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy until null terminator'
  },
  {
    id: 'c_func_023',
    topicId: 'c_functions',
    question: 'Write a program with a function to concatenate "Hello " and "World".',
    mathSolution: 'Result: "Hello World"',
    codeSolution: '#include <stdio.h>\n\nvoid stringConcat(char dest[], char src[]) {\n    int i = 0, j = 0;\n    while(dest[i] != \'\\0\') i++;\n    while(src[j] != \'\\0\') dest[i++] = src[j++];\n    dest[i] = \'\\0\';\n}\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    stringConcat(str1, str2);\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Find end of first string, then copy second'
  },
  {
    id: 'c_func_024',
    topicId: 'c_functions',
    question: 'Write a program with a function to reverse string "Hello".',
    mathSolution: 'Reverse: "olleH"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char str[]) {\n    int n = strlen(str);\n    for(int i = 0; i < n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-1-i];\n        str[n-1-i] = temp;\n    }\n}\n\nint main() {\n    char str[] = "Hello";\n    reverseString(str);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from ends'
  },
  {
    id: 'c_func_025',
    topicId: 'c_functions',
    question: 'Write a program with a function to count vowels in "Hello World".',
    mathSolution: 'Vowels = 3 (e,o,o)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint countVowels(char str[]) {\n    int count = 0;\n    for(int i = 0; str[i] != \'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\')\n            count++;\n    }\n    return count;\n}\n\nint main() {\n    char str[] = "Hello World";\n    int vowels = countVowels(str);\n    printf("Vowels = %d\\n", vowels);\n    return 0;\n}',
    hint: 'Check each character if it is a vowel'
  },
  {
    id: 'c_func_026',
    topicId: 'c_functions',
    question: 'Write a program with a function to convert "hello" to uppercase.',
    mathSolution: 'HELLO',
    codeSolution: '#include <stdio.h>\n\nvoid toUpper(char str[]) {\n    for(int i = 0; str[i] != \'\\0\'; i++) {\n        if(str[i] >= \'a\' && str[i] <= \'z\')\n            str[i] = str[i] - 32;\n    }\n}\n\nint main() {\n    char str[] = "hello";\n    toUpper(str);\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Subtract 32 from lowercase ASCII to get uppercase'
  },
  {
    id: 'c_func_027',
    topicId: 'c_functions',
    question: 'Write a program with a function to find maximum element in array.',
    mathSolution: 'Max of [23,45,12,67,34] = 67',
    codeSolution: '#include <stdio.h>\n\nint findMax(int arr[], int n) {\n    int max = arr[0];\n    for(int i = 1; i < n; i++)\n        if(arr[i] > max) max = arr[i];\n    return max;\n}\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int max = findMax(arr, 5);\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare each element with current max'
  },
  {
    id: 'c_func_028',
    topicId: 'c_functions',
    question: 'Write a program with a function to find minimum element in array.',
    mathSolution: 'Min of [23,45,12,67,34] = 12',
    codeSolution: '#include <stdio.h>\n\nint findMin(int arr[], int n) {\n    int min = arr[0];\n    for(int i = 1; i < n; i++)\n        if(arr[i] < min) min = arr[i];\n    return min;\n}\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int min = findMin(arr, 5);\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_func_029',
    topicId: 'c_functions',
    question: 'Write a program with a function for binary search in sorted array.',
    mathSolution: 'Search 23 in [10,23,45,70,90] found at index 1',
    codeSolution: '#include <stdio.h>\n\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n-1;\n    while(low <= high) {\n        int mid = (low + high) / 2;\n        if(arr[mid] == key) return mid;\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {10,23,45,70,90};\n    int index = binarySearch(arr, 5, 23);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer approach'
  },
  {
    id: 'c_func_030',
    topicId: 'c_functions',
    question: 'Write a program with a function for bubble sort.',
    mathSolution: 'Sort [64,34,25,12,22,11,90]',
    codeSolution: '#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++)\n        for(int j = 0; j < n-1-i; j++)\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    bubbleSort(arr, 7);\n    printf("Sorted array: ");\n    for(int i = 0; i < 7; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent and swap if out of order'
  },

  // ========== BIT AND MATH FUNCTIONS (31-40) ==========
  {
    id: 'c_func_031',
    topicId: 'c_functions',
    question: 'Write a program with a function to count set bits in 13 (binary 1101).',
    mathSolution: '13 has 3 set bits',
    codeSolution: '#include <stdio.h>\n\nint countSetBits(int n) {\n    int count = 0;\n    while(n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    return count;\n}\n\nint main() {\n    int result = countSetBits(13);\n    printf("Set bits = %d\\n", result);\n    return 0;\n}',
    hint: 'Check LSB and shift right'
  },
  {
    id: 'c_func_032',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 16 is power of 2.',
    mathSolution: '16 is power of 2',
    codeSolution: '#include <stdio.h>\n\nint isPowerOfTwo(int n) {\n    return n && !(n & (n-1));\n}\n\nint main() {\n    int n = 16;\n    if(isPowerOfTwo(n))\n        printf("%d is power of 2\\n", n);\n    else\n        printf("%d is not power of 2\\n", n);\n    return 0;\n}',
    hint: 'Power of 2 has exactly one set bit'
  },
  {
    id: 'c_func_033',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate LCM of 12 and 18.',
    mathSolution: 'LCM = 36',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}\n\nint main() {\n    int result = lcm(12, 18);\n    printf("LCM = %d\\n", result);\n    return 0;\n}',
    hint: 'LCM(a,b) = (a*b)/GCD(a,b)'
  },
  {
    id: 'c_func_034',
    topicId: 'c_functions',
    question: 'Write a program with a function to count digits in 12345.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint countDigits(int n) {\n    int count = 0;\n    while(n != 0) {\n        count++;\n        n /= 10;\n    }\n    return count;\n}\n\nint main() {\n    int result = countDigits(12345);\n    printf("Digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Divide by 10 until zero'
  },
  {
    id: 'c_func_035',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate cube of a number.',
    mathSolution: 'Cube of 5 = 125',
    codeSolution: '#include <stdio.h>\n\nint cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    int result = cube(5);\n    printf("5³ = %d\\n", result);\n    return 0;\n}',
    hint: 'Multiply number by itself three times'
  },
  {
    id: 'c_func_036',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate simple interest.',
    mathSolution: 'P=1000, R=5, T=2 years = 100 interest',
    codeSolution: '#include <stdio.h>\n\nfloat simpleInterest(float p, float r, float t) {\n    return (p * r * t) / 100;\n}\n\nint main() {\n    float si = simpleInterest(1000, 5, 2);\n    printf("Simple Interest = %.2f\\n", si);\n    return 0;\n}',
    hint: 'Formula: SI = (P × R × T)/100'
  },
  {
    id: 'c_func_037',
    topicId: 'c_functions',
    question: 'Write a program with a function to find sum of first 10 natural numbers.',
    mathSolution: 'Sum = 55',
    codeSolution: '#include <stdio.h>\n\nint sumNatural(int n) {\n    return n * (n + 1) / 2;\n}\n\nint main() {\n    int sum = sumNatural(10);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Formula: n(n+1)/2'
  },
  {
    id: 'c_func_038',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if number is even.',
    mathSolution: '10 is even',
    codeSolution: '#include <stdio.h>\n\nint isEven(int n) {\n    return n % 2 == 0;\n}\n\nint main() {\n    int n = 10;\n    if(isEven(n))\n        printf("%d is even\\n", n);\n    else\n        printf("%d is odd\\n", n);\n    return 0;\n}',
    hint: 'Use modulo operator'
  },
  {
    id: 'c_func_039',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate perimeter of rectangle.',
    mathSolution: 'Length=10, Width=5, Perimeter=30',
    codeSolution: '#include <stdio.h>\n\nint perimeter(int l, int w) {\n    return 2 * (l + w);\n}\n\nint main() {\n    int peri = perimeter(10, 5);\n    printf("Perimeter = %d\\n", peri);\n    return 0;\n}',
    hint: 'Perimeter = 2 × (length + width)'
  },
  {
    id: 'c_func_040',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate volume of cube.',
    mathSolution: 'Side=4, Volume=64',
    codeSolution: '#include <stdio.h>\n\nint volumeCube(int side) {\n    return side * side * side;\n}\n\nint main() {\n    int vol = volumeCube(4);\n    printf("Volume = %d\\n", vol);\n    return 0;\n}',
    hint: 'Volume = side³'
  },

  // ========== ADVANCED RECURSIVE FUNCTIONS (41-50) ==========
  {
    id: 'c_func_041',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find sum of array.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint arraySumRecur(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n-1] + arraySumRecur(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = arraySumRecur(arr, 5);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_func_042',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find nth term of Fibonacci.',
    mathSolution: '7th Fibonacci = 13 (0,1,1,2,3,5,8,13)',
    codeSolution: '#include <stdio.h>\n\nint fibRecur(int n) {\n    if(n <= 1) return n;\n    return fibRecur(n-1) + fibRecur(n-2);\n}\n\nint main() {\n    int result = fibRecur(7);\n    printf("Fibonacci(7) = %d\\n", result);\n    return 0;\n}',
    hint: 'Recursive with base cases'
  },
  {
    id: 'c_func_043',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find product of digits of 234.',
    mathSolution: '2×3×4 = 24',
    codeSolution: '#include <stdio.h>\n\nint productDigits(int n) {\n    if(n == 0) return 1;\n    return (n % 10) * productDigits(n / 10);\n}\n\nint main() {\n    int result = productDigits(234);\n    printf("Product of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Multiply last digit with product of rest'
  },
  {
    id: 'c_func_044',
    topicId: 'c_functions',
    question: 'Write a program with function to return multiple values using pointers.',
    mathSolution: 'Find quotient and remainder of 17/5',
    codeSolution: '#include <stdio.h>\n\nvoid divide(int a, int b, int *q, int *r) {\n    *q = a / b;\n    *r = a % b;\n}\n\nint main() {\n    int q, r;\n    divide(17, 5, &q, &r);\n    printf("Quotient = %d, Remainder = %d\\n", q, r);\n    return 0;\n}',
    hint: 'Use pointers for multiple outputs'
  },
  {
    id: 'c_func_045',
    topicId: 'c_functions',
    question: 'Write a program with function to find second largest in array.',
    mathSolution: 'Second largest in [10,45,2,78,34] = 45',
    codeSolution: '#include <stdio.h>\n\nint secondLargest(int arr[], int n) {\n    int first = arr[0], second = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > first) {\n            second = first;\n            first = arr[i];\n        }\n        else if(arr[i] > second && arr[i] != first)\n            second = arr[i];\n    }\n    return second;\n}\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int result = secondLargest(arr, 5);\n    printf("Second largest = %d\\n", result);\n    return 0;\n}',
    hint: 'Keep track of both largest and second largest'
  },
  {
    id: 'c_func_046',
    topicId: 'c_functions',
    question: 'Write a program with function to remove duplicates from sorted array.',
    mathSolution: '[1,1,2,2,3,4,4] -> [1,2,3,4]',
    codeSolution: '#include <stdio.h>\n\nint removeDuplicates(int arr[], int n) {\n    if(n == 0) return 0;\n    int j = 0;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] != arr[j]) {\n            j++;\n            arr[j] = arr[i];\n        }\n    }\n    return j + 1;\n}\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int newSize = removeDuplicates(arr, 7);\n    printf("Array after removing duplicates: ");\n    for(int i = 0; i < newSize; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Use two pointers technique'
  },
  {
    id: 'c_func_047',
    topicId: 'c_functions',
    question: 'Write a program with function to check if string "madam" is palindrome.',
    mathSolution: '"madam" is palindrome',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint isStrPalindrome(char str[]) {\n    int n = strlen(str);\n    for(int i = 0; i < n/2; i++)\n        if(str[i] != str[n-1-i])\n            return 0;\n    return 1;\n}\n\nint main() {\n    char str[] = "madam";\n    if(isStrPalindrome(str))\n        printf("%s is palindrome\\n", str);\n    else\n        printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_func_048',
    topicId: 'c_functions',
    question: 'Write a program with function to convert binary "1010" to decimal.',
    mathSolution: '1010 binary = 10 decimal',
    codeSolution: '#include <stdio.h>\n\nint binToDec(char bin[]) {\n    int val = 0;\n    for(int i = 0; bin[i] != \'\\0\'; i++)\n        val = val * 2 + (bin[i] - \'0\');\n    return val;\n}\n\nint main() {\n    char bin[] = "1010";\n    int dec = binToDec(bin);\n    printf("Binary %s = Decimal %d\\n", bin, dec);\n    return 0;\n}',
    hint: 'Process each digit: val = val×2 + digit'
  },
  {
    id: 'c_func_049',
    topicId: 'c_functions',
    question: 'Write a program with function to find median of sorted array.',
    mathSolution: 'Median of [1,2,3,4,5] = 3',
    codeSolution: '#include <stdio.h>\n\nfloat median(int arr[], int n) {\n    if(n % 2 == 1)\n        return arr[n/2];\n    else\n        return (arr[n/2 - 1] + arr[n/2]) / 2.0;\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    float med = median(arr, 5);\n    printf("Median = %.1f\\n", med);\n    return 0;\n}',
    hint: 'Middle element for odd, average of two middles for even'
  },
  {
    id: 'c_func_050',
    topicId: 'c_functions',
    question: 'Write a program with function to find all factors of 12.',
    mathSolution: 'Factors of 12: 1,2,3,4,6,12',
    codeSolution: '#include <stdio.h>\n\nvoid printFactors(int n) {\n    for(int i = 1; i <= n; i++)\n        if(n % i == 0)\n            printf("%d ", i);\n    printf("\\n");\n}\n\nint main() {\n    printf("Factors of 12: ");\n    printFactors(12);\n    return 0;\n}',
    hint: 'Check numbers that divide n completely'
  }
);