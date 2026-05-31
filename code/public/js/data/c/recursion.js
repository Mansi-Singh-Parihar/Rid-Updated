QuizData.questions.push(
  // ========== BASIC MATHEMATICAL RECURSION (1-10) ==========
  {
    id: 'c_rec_1',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint fact(int n) {\n    if(n <= 1) return 1;\n    return n * fact(n-1);\n}\n\nint main() {\n    int result = fact(5);\n    printf("5! = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_rec_2',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find 6th Fibonacci number.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8 → 6th term is 8',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int result = fib(6);\n    printf("Fibonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_rec_3',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate sum of first 10 natural numbers.',
    mathSolution: 'Sum = 55',
    codeSolution: '#include <stdio.h>\n\nint sumN(int n) {\n    if(n == 0) return 0;\n    return n + sumN(n-1);\n}\n\nint main() {\n    int result = sumN(10);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Add n to sum of n-1 numbers'
  },
  {
    id: 'c_rec_4',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate power 2^5.',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int result = power(2, 5);\n    printf("2^5 = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_rec_5',
    topicId: 'c_recursion',
    question: 'Write a recursive program to sum digits of 12345.',
    mathSolution: '1+2+3+4+5 = 15',
    codeSolution: '#include <stdio.h>\n\nint sumDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    int result = sumDigits(12345);\n    printf("Sum of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_rec_6',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count digits in 12345.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint countDigits(int n) {\n    if(n == 0) return 0;\n    return 1 + countDigits(n / 10);\n}\n\nint main() {\n    int result = countDigits(12345);\n    printf("Digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Count one digit and recurse on rest'
  },
  {
    id: 'c_rec_7',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse number 12345.',
    mathSolution: 'Reverse = 54321',
    codeSolution: '#include <stdio.h>\n\nint reverseNum(int n, int rev) {\n    if(n == 0) return rev;\n    return reverseNum(n / 10, rev * 10 + n % 10);\n}\n\nint main() {\n    int result = reverseNum(12345, 0);\n    printf("Reverse = %d\\n", result);\n    return 0;\n}',
    hint: 'Build reversed number in parameter'
  },
  {
    id: 'c_rec_8',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find GCD of 48 and 18.',
    mathSolution: 'GCD = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int result = gcd(48, 18);\n    printf("GCD = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case when b=0'
  },
  {
    id: 'c_rec_9',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if 17 is prime.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint isPrime(int n, int i) {\n    if(n < 2) return 0;\n    if(i == 1) return 1;\n    if(n % i == 0) return 0;\n    return isPrime(n, i-1);\n}\n\nint main() {\n    int result = isPrime(17, 16);\n    if(result) printf("17 is prime\\n");\n    else printf("17 is not prime\\n");\n    return 0;\n}',
    hint: 'Check divisibility from n/2 down to 2'
  },
  {
    id: 'c_rec_10',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find product of first 5 numbers.',
    mathSolution: '5×4×3×2×1 = 120',
    codeSolution: '#include <stdio.h>\n\nint product(int n) {\n    if(n <= 1) return 1;\n    return n * product(n-1);\n}\n\nint main() {\n    int result = product(5);\n    printf("Product = %d\\n", result);\n    return 0;\n}',
    hint: 'Same as factorial'
  },

  // ========== ARRAY RECURSION (11-20) ==========
  {
    id: 'c_rec_11',
    topicId: 'c_recursion',
    question: 'Write a recursive program to sum array [1,2,3,4,5].',
    mathSolution: 'Sum = 15',
    codeSolution: '#include <stdio.h>\n\nint sumArray(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n-1] + sumArray(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int result = sumArray(arr, 5);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_rec_12',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find maximum in [3,7,2,9,5].',
    mathSolution: 'Maximum = 9',
    codeSolution: '#include <stdio.h>\n\nint maxArray(int arr[], int n) {\n    if(n == 1) return arr[0];\n    int max = maxArray(arr, n-1);\n    return (arr[n-1] > max) ? arr[n-1] : max;\n}\n\nint main() {\n    int arr[] = {3,7,2,9,5};\n    int result = maxArray(arr, 5);\n    printf("Maximum = %d\\n", result);\n    return 0;\n}',
    hint: 'Compare last element with max of rest'
  },
  {
    id: 'c_rec_13',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find minimum in [3,7,2,9,5].',
    mathSolution: 'Minimum = 2',
    codeSolution: '#include <stdio.h>\n\nint minArray(int arr[], int n) {\n    if(n == 1) return arr[0];\n    int min = minArray(arr, n-1);\n    return (arr[n-1] < min) ? arr[n-1] : min;\n}\n\nint main() {\n    int arr[] = {3,7,2,9,5};\n    int result = minArray(arr, 5);\n    printf("Minimum = %d\\n", result);\n    return 0;\n}',
    hint: 'Compare last element with min of rest'
  },
  {
    id: 'c_rec_14',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse array [1,2,3,4,5].',
    mathSolution: 'Reversed: 5,4,3,2,1',
    codeSolution: '#include <stdio.h>\n\nvoid reverseArray(int arr[], int start, int end) {\n    if(start >= end) return;\n    int temp = arr[start];\n    arr[start] = arr[end];\n    arr[end] = temp;\n    reverseArray(arr, start+1, end-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    reverseArray(arr, 0, 4);\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap ends and recurse inward'
  },
  {
    id: 'c_rec_15',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if array is sorted.',
    mathSolution: '[1,3,5,7,9] is sorted',
    codeSolution: '#include <stdio.h>\n\nint isSorted(int arr[], int n) {\n    if(n <= 1) return 1;\n    if(arr[n-1] < arr[n-2]) return 0;\n    return isSorted(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,3,5,7,9};\n    if(isSorted(arr, 5))\n        printf("Array is sorted\\n");\n    else\n        printf("Array is not sorted\\n");\n    return 0;\n}',
    hint: 'Check adjacent elements'
  },
  {
    id: 'c_rec_16',
    topicId: 'c_recursion',
    question: 'Write a recursive program for linear search in [2,4,7,9,3].',
    mathSolution: 'Find 7 at index 2',
    codeSolution: '#include <stdio.h>\n\nint linearSearch(int arr[], int n, int key) {\n    if(n < 0) return -1;\n    if(arr[n-1] == key) return n-1;\n    return linearSearch(arr, n-1, key);\n}\n\nint main() {\n    int arr[] = {2,4,7,9,3};\n    int index = linearSearch(arr, 5, 7);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Search from end backwards'
  },
  {
    id: 'c_rec_17',
    topicId: 'c_recursion',
    question: 'Write a recursive binary search in [1,3,5,8,10,12].',
    mathSolution: 'Find 8 at index 3',
    codeSolution: '#include <stdio.h>\n\nint binarySearch(int arr[], int low, int high, int key) {\n    if(low > high) return -1;\n    int mid = (low + high) / 2;\n    if(arr[mid] == key) return mid;\n    if(arr[mid] > key) return binarySearch(arr, low, mid-1, key);\n    return binarySearch(arr, mid+1, high, key);\n}\n\nint main() {\n    int arr[] = {1,3,5,8,10,12};\n    int index = binarySearch(arr, 0, 5, 8);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide array and search appropriate half'
  },
  {
    id: 'c_rec_18',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count occurrences of 2 in [2,3,2,5,2,7].',
    mathSolution: 'Count = 3',
    codeSolution: '#include <stdio.h>\n\nint countOccur(int arr[], int n, int key) {\n    if(n <= 0) return 0;\n    return (arr[n-1] == key ? 1 : 0) + countOccur(arr, n-1, key);\n}\n\nint main() {\n    int arr[] = {2,3,2,5,2,7};\n    int count = countOccur(arr, 6, 2);\n    printf("Count = %d\\n", count);\n    return 0;\n}',
    hint: 'Add 1 if found, then recurse'
  },
  {
    id: 'c_rec_19',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find string length of "hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint strLen(char *s) {\n    if(*s == \'\\0\') return 0;\n    return 1 + strLen(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    int len = strLen(str);\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Count characters until null'
  },
  {
    id: 'c_rec_20',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse string "hello".',
    mathSolution: 'Reversed: "olleh"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseStr(char *s, int start, int end) {\n    if(start >= end) return;\n    char temp = s[start];\n    s[start] = s[end];\n    s[end] = temp;\n    reverseStr(s, start+1, end-1);\n}\n\nint main() {\n    char str[] = "hello";\n    reverseStr(str, 0, 4);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap ends and recurse'
  },

  // ========== STRING RECURSION (21-30) ==========
  {
    id: 'c_rec_21',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if "madam" is palindrome.',
    mathSolution: '"madam" is palindrome',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint isPalindromeStr(char *s, int start, int end) {\n    if(start >= end) return 1;\n    if(s[start] != s[end]) return 0;\n    return isPalindromeStr(s, start+1, end-1);\n}\n\nint main() {\n    char str[] = "madam";\n    if(isPalindromeStr(str, 0, 4))\n        printf("%s is palindrome\\n", str);\n    else\n        printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare ends and recurse'
  },
  {
    id: 'c_rec_22',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count vowels in "hello".',
    mathSolution: 'Vowels = 2 (e,o)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint countVowels(char *s) {\n    if(*s == \'\\0\') return 0;\n    char c = tolower(*s);\n    int isVowel = (c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\');\n    return isVowel + countVowels(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    int count = countVowels(str);\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Check first char, recurse on rest'
  },
  {
    id: 'c_rec_23',
    topicId: 'c_recursion',
    question: 'Write a recursive program to convert "hello" to uppercase.',
    mathSolution: '"HELLO"',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nvoid toUpper(char *s) {\n    if(*s == \'\\0\') return;\n    *s = toupper(*s);\n    toUpper(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    toUpper(str);\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Process one character at a time'
  },
  {
    id: 'c_rec_24',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print numbers from 1 to 5.',
    mathSolution: '1 2 3 4 5',
    codeSolution: '#include <stdio.h>\n\nvoid print1toN(int n) {\n    if(n == 0) return;\n    print1toN(n-1);\n    printf("%d ", n);\n}\n\nint main() {\n    print1toN(5);\n    return 0;\n}',
    hint: 'Recurse first, then print'
  },
  {
    id: 'c_rec_25',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print numbers from 5 to 1.',
    mathSolution: '5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nvoid printNto1(int n) {\n    if(n == 0) return;\n    printf("%d ", n);\n    printNto1(n-1);\n}\n\nint main() {\n    printNto1(5);\n    return 0;\n}',
    hint: 'Print first, then recurse'
  },
  {
    id: 'c_rec_26',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print triangle of stars (3 rows).',
    mathSolution: '*\\n**\\n***',
    codeSolution: '#include <stdio.h>\n\nvoid triangle(int n) {\n    if(n == 0) return;\n    triangle(n-1);\n    for(int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n}\n\nint main() {\n    triangle(3);\n    return 0;\n}',
    hint: 'Recurse then print row'
  },
  {
    id: 'c_rec_27',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print inverted triangle (3 rows).',
    mathSolution: '***\\n**\\n*',
    codeSolution: '#include <stdio.h>\n\nvoid invTriangle(int n) {\n    if(n == 0) return;\n    for(int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n    invTriangle(n-1);\n}\n\nint main() {\n    invTriangle(3);\n    return 0;\n}',
    hint: 'Print row then recurse'
  },
  {
    id: 'c_rec_28',
    topicId: 'c_recursion',
    question: 'Write a recursive program to convert decimal 13 to binary.',
    mathSolution: '13 = 1101',
    codeSolution: '#include <stdio.h>\n\nvoid decToBin(int n) {\n    if(n == 0) return;\n    decToBin(n / 2);\n    printf("%d", n % 2);\n}\n\nint main() {\n    printf("Binary of 13: ");\n    decToBin(13);\n    return 0;\n}',
    hint: 'Recurse on quotient, print remainder'
  },
  {
    id: 'c_rec_29',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Tower of Hanoi with 3 disks.',
    mathSolution: 'Move 3 disks from A to C using B',
    codeSolution: '#include <stdio.h>\n\nvoid hanoi(int n, char from, char to, char aux) {\n    if(n == 1) {\n        printf("Move disk 1 from %c to %c\\n", from, to);\n        return;\n    }\n    hanoi(n-1, from, aux, to);\n    printf("Move disk %d from %c to %c\\n\", n, from, to);\n    hanoi(n-1, aux, to, from);\n}\n\nint main() {\n    hanoi(3, \'A\', \'C\', \'B\');\n    return 0;\n}',
    hint: 'Move n-1 to aux, then nth, then n-1 to dest'
  },
  {
    id: 'c_rec_30',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count set bits in 13 (1101).',
    mathSolution: '13 has 3 set bits',
    codeSolution: '#include <stdio.h>\n\nint countBits(int n) {\n    if(n == 0) return 0;\n    return (n & 1) + countBits(n >> 1);\n}\n\nint main() {\n    int result = countBits(13);\n    printf("Set bits = %d\\n", result);\n    return 0;\n}',
    hint: 'Check LSB and shift right'
  },

  // ========== DYNAMIC PROGRAMMING RECURSION (31-40) ==========
  {
    id: 'c_rec_31',
    topicId: 'c_recursion',
    question: 'Write a recursive program for combinations C(5,2).',
    mathSolution: 'C(5,2) = 10',
    codeSolution: '#include <stdio.h>\n\nint comb(int n, int r) {\n    if(r == 0 || r == n) return 1;\n    return comb(n-1, r-1) + comb(n-1, r);\n}\n\nint main() {\n    int result = comb(5, 2);\n    printf("C(5,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Pascal\'s triangle identity'
  },
  {
    id: 'c_rec_32',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Josephus problem (n=7, k=3).',
    mathSolution: 'Survivor at position 4',
    codeSolution: '#include <stdio.h>\n\nint josephus(int n, int k) {\n    if(n == 1) return 1;\n    return (josephus(n-1, k) + k - 1) % n + 1;\n}\n\nint main() {\n    int result = josephus(7, 3);\n    printf("Survivor: %d\\n", result);\n    return 0;\n}',
    hint: 'Recursive elimination formula'
  },
  {
    id: 'c_rec_33',
    topicId: 'c_recursion',
    question: 'Write a recursive program for staircase problem (n=5).',
    mathSolution: 'Ways to climb 5 steps (1 or 2 steps) = 8',
    codeSolution: '#include <stdio.h>\n\nint climbWays(int n) {\n    if(n <= 2) return n;\n    return climbWays(n-1) + climbWays(n-2);\n}\n\nint main() {\n    int result = climbWays(5);\n    printf("Ways to climb = %d\\n\", result);\n    return 0;\n}',
    hint: 'Ways(n) = Ways(n-1) + Ways(n-2)'
  },
  {
    id: 'c_rec_34',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count paths in 3x3 grid.',
    mathSolution: 'Paths from (0,0) to (2,2) = 6',
    codeSolution: '#include <stdio.h>\n\nint countPaths(int m, int n) {\n    if(m == 1 || n == 1) return 1;\n    return countPaths(m-1, n) + countPaths(m, n-1);\n}\n\nint main() {\n    int result = countPaths(3, 3);\n    printf("Total paths = %d\\n", result);\n    return 0;\n}',
    hint: 'Move right or down'
  },
  {
    id: 'c_rec_35',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Catalan number C(4).',
    mathSolution: 'Catalan(4) = 14',
    codeSolution: '#include <stdio.h>\n\nint catalan(int n) {\n    if(n <= 1) return 1;\n    int res = 0;\n    for(int i = 0; i < n; i++)\n        res += catalan(i) * catalan(n-1-i);\n    return res;\n}\n\nint main() {\n    int result = catalan(4);\n    printf("Catalan(4) = %d\\n", result);\n    return 0;\n}',
    hint: 'Sum of products of catalan pairs'
  },
  {
    id: 'c_rec_36',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Ackermann function A(1,2).',
    mathSolution: 'A(1,2) = 4',
    codeSolution: '#include <stdio.h>\n\nint ackermann(int m, int n) {\n    if(m == 0) return n + 1;\n    if(n == 0) return ackermann(m-1, 1);\n    return ackermann(m-1, ackermann(m, n-1));\n}\n\nint main() {\n    int result = ackermann(1, 2);\n    printf("A(1,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Well-known recursive function'
  },
  {
    id: 'c_rec_37',
    topicId: 'c_recursion',
    question: 'Write a recursive program for McCarthy 91 function with n=95.',
    mathSolution: 'M(95) = 91',
    codeSolution: '#include <stdio.h>\n\nint mcCarthy(int n) {\n    if(n > 100) return n - 10;\n    return mcCarthy(mcCarthy(n + 11));\n}\n\nint main() {\n    int result = mcCarthy(95);\n    printf("M(95) = %d\\n", result);\n    return 0;\n}',
    hint: 'Famous recursive function'
  },
  {
    id: 'c_rec_38',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Collatz conjecture steps from 6.',
    mathSolution: '6→3→10→5→16→8→4→2→1 = 8 steps',
    codeSolution: '#include <stdio.h>\n\nint collatz(int n) {\n    if(n == 1) return 0;\n    if(n % 2 == 0) return 1 + collatz(n / 2);\n    return 1 + collatz(3 * n + 1);\n}\n\nint main() {\n    int result = collatz(6);\n    printf("Steps = %d\\n", result);\n    return 0;\n}',
    hint: 'Count steps to reach 1'
  },
  {
    id: 'c_rec_39',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Bell numbers B(4).',
    mathSolution: 'B(4) = 15',
    codeSolution: '#include <stdio.h>\n\nint comb(int n, int r) {\n    if(r == 0 || r == n) return 1;\n    return comb(n-1, r-1) + comb(n-1, r);\n}\n\nint bell(int n) {\n    if(n <= 1) return 1;\n    int sum = 0;\n    for(int k = 0; k < n; k++)\n        sum += comb(n-1, k) * bell(k);\n    return sum;\n}\n\nint main() {\n    int result = bell(4);\n    printf("Bell(4) = %d\\n", result);\n    return 0;\n}',
    hint: 'B(n) = sum(C(n-1,k) * B(k))'
  },
  {
    id: 'c_rec_40',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Stirling numbers S(5,2).',
    mathSolution: 'S(5,2) = 15',
    codeSolution: '#include <stdio.h>\n\nint stirling(int n, int k) {\n    if(n == 0 && k == 0) return 1;\n    if(n == 0 || k == 0) return 0;\n    return k * stirling(n-1, k) + stirling(n-1, k-1);\n}\n\nint main() {\n    int result = stirling(5, 2);\n    printf("S(5,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Place nth element in existing set or new set'
  },

  // ========== TREE RECURSION (41-50) ==========
  {
    id: 'c_rec_41',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Fibonacci using tail recursion.',
    mathSolution: 'fib(6) = 8',
    codeSolution: '#include <stdio.h>\n\nint fibTail(int n, int a, int b) {\n    if(n == 0) return a;\n    if(n == 1) return b;\n    return fibTail(n-1, b, a+b);\n}\n\nint main() {\n    int result = fibTail(6, 0, 1);\n    printf("Fibonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Accumulator holds previous two values'
  },
  {
    id: 'c_rec_42',
    topicId: 'c_recursion',
    question: 'Write a recursive program for factorial using tail recursion.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint factTail(int n, int acc) {\n    if(n == 0) return acc;\n    return factTail(n-1, acc * n);\n}\n\nint main() {\n    int result = factTail(5, 1);\n    printf("5! = %d\\n", result);\n    return 0;\n}',
    hint: 'Accumulator holds partial result'
  },
  {
    id: 'c_rec_43',
    topicId: 'c_recursion',
    question: 'Write a recursive program to generate all subsets of {1,2,3}.',
    mathSolution: 'Subsets: {}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}',
    codeSolution: '#include <stdio.h>\n\nvoid subsets(int arr[], int n, int index, int current[], int len) {\n    if(index == n) {\n        printf("{ ");\n        for(int i = 0; i < len; i++)\n            printf("%d ", current[i]);\n        printf("}\\n");\n        return;\n    }\n    subsets(arr, n, index+1, current, len);\n    current[len] = arr[index];\n    subsets(arr, n, index+1, current, len+1);\n}\n\nint main() {\n    int arr[] = {1,2,3};\n    int current[3];\n    subsets(arr, 3, 0, current, 0);\n    return 0;\n}',
    hint: 'Include or exclude each element'
  },
  {
    id: 'c_rec_44',
    topicId: 'c_recursion',
    question: 'Write a recursive program for power using exponentiation by squaring.',
    mathSolution: '2^10 = 1024',
    codeSolution: '#include <stdio.h>\n\nint powerFast(int x, int n) {\n    if(n == 0) return 1;\n    int half = powerFast(x, n/2);\n    if(n % 2 == 0) return half * half;\n    return half * half * x;\n}\n\nint main() {\n    int result = powerFast(2, 10);\n    printf("2^10 = %d\\n", result);\n    return 0;\n}',
    hint: 'Divide exponent by 2 each time'
  },
  {
    id: 'c_rec_45',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find nth term of Lucas sequence.',
    mathSolution: 'Lucas: 2,1,3,4,7,11,18,... 6th term = 18',
    codeSolution: '#include <stdio.h>\n\nint lucas(int n) {\n    if(n == 0) return 2;\n    if(n == 1) return 1;\n    return lucas(n-1) + lucas(n-2);\n}\n\nint main() {\n    int result = lucas(6);\n    printf("Lucas(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Similar to Fibonacci but starting 2,1'
  },
  {
    id: 'c_rec_46',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Pell numbers (P(5)).',
    mathSolution: 'Pell: 0,1,2,5,12,29,... P(5)=29',
    codeSolution: '#include <stdio.h>\n\nint pell(int n) {\n    if(n == 0) return 0;\n    if(n == 1) return 1;\n    return 2 * pell(n-1) + pell(n-2);\n}\n\nint main() {\n    int result = pell(5);\n    printf("Pell(5) = %d\\n", result);\n    return 0;\n}',
    hint: 'P(n) = 2*P(n-1) + P(n-2)'
  },
  {
    id: 'c_rec_47',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Tribonacci numbers (T(6)).',
    mathSolution: 'Tribonacci: 0,0,1,1,2,4,7,... T(6)=7',
    codeSolution: '#include <stdio.h>\n\nint tribonacci(int n) {\n    if(n == 0) return 0;\n    if(n == 1 || n == 2) return 1;\n    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);\n}\n\nint main() {\n    int result = tribonacci(6);\n    printf("Tribonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Sum of previous three terms'
  },
  {
    id: 'c_rec_48',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if number is power of 2.',
    mathSolution: '16 is power of 2',
    codeSolution: '#include <stdio.h>\n\nint isPowerOfTwo(int n) {\n    if(n == 1) return 1;\n    if(n % 2 != 0 || n == 0) return 0;\n    return isPowerOfTwo(n / 2);\n}\n\nint main() {\n    if(isPowerOfTwo(16))\n        printf("16 is power of 2\\n");\n    else\n        printf("16 is not power of 2\\n");\n    return 0;\n}',
    hint: 'Divide by 2 until you reach 1'
  },
  {
    id: 'c_rec_49',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find number of digits in binary representation.',
    mathSolution: '13 in binary (1101) has 4 digits',
    codeSolution: '#include <stdio.h>\n\nint binDigits(int n) {\n    if(n <= 1) return 1;\n    return 1 + binDigits(n / 2);\n}\n\nint main() {\n    int result = binDigits(13);\n    printf("Binary digits of 13 = %d\\n", result);\n    return 0;\n}',
    hint: 'Count until quotient becomes 1'
  },
  {
    id: 'c_rec_50',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find sum of array using divide and conquer.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint sumDC(int arr[], int low, int high) {\n    if(low == high) return arr[low];\n    int mid = (low + high) / 2;\n    return sumDC(arr, low, mid) + sumDC(arr, mid+1, high);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int result = sumDC(arr, 0, 4);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Split array in half and sum recursively'
  }
);