QuizData.questions.push(
{
  id: 'js_recursion_1',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate factorial of n (n!).',
  mathSolution: 'Base case: n <= 1 returns 1; Recursive case: n * factorial(n-1).',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5));  // 120\nconsole.log(factorial(0));  // 1\nconsole.log(factorial(3));  // 6',
  hint: 'Base case stops recursion; recursive case calls itself with smaller value.'
},
{
  id: 'js_recursion_2',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate sum of numbers from 1 to n.',
  mathSolution: 'Base case: n === 1 returns 1; Recursive: n + sum(n-1).',
  codeSolution: 'function sumToN(n) {\n    if (n === 1) return 1;\n    return n + sumToN(n - 1);\n}\nconsole.log(sumToN(5));  // 15 (1+2+3+4+5)\nconsole.log(sumToN(10)); // 55',
  hint: 'Sum of first n natural numbers = n + sum of first (n-1) numbers.'
},
{
  id: 'js_recursion_3',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate nth Fibonacci number.',
  mathSolution: 'Base: F(0)=0, F(1)=1; Recursive: F(n)=F(n-1)+F(n-2).',
  codeSolution: 'function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\nconsole.log(fibonacci(0)); // 0\nconsole.log(fibonacci(1)); // 1\nconsole.log(fibonacci(7)); // 13\n// Note: Exponential time complexity, inefficient for large n',
  hint: 'Fibonacci sequence: 0,1,1,2,3,5,8,13,21...'
},
{
  id: 'js_recursion_4',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate power (exponentiation).',
  mathSolution: 'Base: exponent === 0 returns 1; Recursive: base * pow(base, exponent-1).',
  codeSolution: 'function power(base, exponent) {\n    if (exponent === 0) return 1;\n    return base * power(base, exponent - 1);\n}\nconsole.log(power(2, 3));  // 8\nconsole.log(power(5, 0));  // 1\nconsole.log(power(3, 4));  // 81',
  hint: 'x^n = x * x^(n-1), with base case x^0 = 1.'
},
{
  id: 'js_recursion_5',
  topicId: 'js_recursion',
  question: 'Optimize power function using exponentiation by squaring.',
  mathSolution: 'Even exponent: pow(base, exponent/2)^2; Odd: base * pow(base, exponent-1).',
  codeSolution: 'function powerOptimized(base, exponent) {\n    if (exponent === 0) return 1;\n    if (exponent % 2 === 0) {\n        const half = powerOptimized(base, exponent / 2);\n        return half * half;\n    } else {\n        return base * powerOptimized(base, exponent - 1);\n    }\n}\nconsole.log(powerOptimized(2, 10));  // 1024\nconsole.log(powerOptimized(3, 4));   // 81',
  hint: 'Exponentiation by squaring reduces O(n) to O(log n) operations.'
},
{
  id: 'js_recursion_6',
  topicId: 'js_recursion',
  question: 'Write a recursive function to reverse a string.',
  mathSolution: 'Base: empty string returns empty; Recursive: last char + reverse(rest).',
  codeSolution: 'function reverseString(str) {\n    if (str === "") return "";\n    return reverseString(str.slice(1)) + str[0];\n}\nconsole.log(reverseString("hello"));  // "olleh"\nconsole.log(reverseString("racecar")); // "racecar"\nconsole.log(reverseString("abc"));    // "cba"',
  hint: 'Reverse = reverse(substring) + first character.'
},
{
  id: 'js_recursion_7',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if a string is palindrome.',
  mathSolution: 'Base: length <= 1 returns true; Check first/last chars and recurse on inner.',
  codeSolution: 'function isPalindrome(str) {\n    if (str.length <= 1) return true;\n    if (str[0] !== str[str.length - 1]) return false;\n    return isPalindrome(str.slice(1, -1));\n}\nconsole.log(isPalindrome("racecar"));  // true\nconsole.log(isPalindrome("hello"));    // false\nconsole.log(isPalindrome("a"));        // true',
  hint: 'Palindrome if first==last AND inner substring is palindrome.'
},
{
  id: 'js_recursion_8',
  topicId: 'js_recursion',
  question: 'Write a recursive function to flatten a nested array.',
  mathSolution: 'Base: non-array returns element; Recursive: concat flatten of each element.',
  codeSolution: 'function flatten(arr) {\n    let result = [];\n    for (let i = 0; i < arr.length; i++) {\n        if (Array.isArray(arr[i])) {\n            result = result.concat(flatten(arr[i]));\n        } else {\n            result.push(arr[i]);\n        }\n    }\n    return result;\n}\nconsole.log(flatten([1, [2, [3, 4], 5], 6]));  // [1,2,3,4,5,6]',
  hint: 'If element is array, flatten it; else add to result.'
},
{
  id: 'js_recursion_9',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute greatest common divisor (GCD).',
  mathSolution: 'Euclidean algorithm: GCD(a,b) = GCD(b, a % b); Base: b === 0 returns a.',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\nconsole.log(gcd(48, 18));  // 6\nconsole.log(gcd(100, 35)); // 5\nconsole.log(gcd(17, 13));  // 1',
  hint: 'Euclidean algorithm: GCD(a,b) = GCD(b, a mod b) until b=0.'
},
{
  id: 'js_recursion_10',
  topicId: 'js_recursion',
  question: 'Write a recursive function to count digits in a number.',
  mathSolution: 'Base: number < 10 returns 1; Recursive: 1 + countDigits(Math.floor(n/10)).',
  codeSolution: 'function countDigits(n) {\n    n = Math.abs(n);\n    if (n < 10) return 1;\n    return 1 + countDigits(Math.floor(n / 10));\n}\nconsole.log(countDigits(12345));  // 5\nconsole.log(countDigits(7));      // 1\nconsole.log(countDigits(-987));   // 3',
  hint: 'Digits = 1 + digits in number/10 until single digit.'
},
{
  id: 'js_recursion_11',
  topicId: 'js_recursion',
  question: 'Write a recursive function to sum digits of a number.',
  mathSolution: 'Base: n < 10 returns n; Recursive: n%10 + sumDigits(Math.floor(n/10)).',
  codeSolution: 'function sumDigits(n) {\n    n = Math.abs(n);\n    if (n < 10) return n;\n    return (n % 10) + sumDigits(Math.floor(n / 10));\n}\nconsole.log(sumDigits(123));   // 6\nconsole.log(sumDigits(4567));  // 22\nconsole.log(sumDigits(9));     // 9',
  hint: 'Sum digits = last digit + sum of remaining digits.'
},
{
  id: 'js_recursion_12',
  topicId: 'js_recursion',
  question: 'Write a recursive function to find the maximum value in an array.',
  mathSolution: 'Base: array length 1 returns that element; Compare first with max of rest.',
  codeSolution: 'function findMax(arr) {\n    if (arr.length === 1) return arr[0];\n    const maxOfRest = findMax(arr.slice(1));\n    return arr[0] > maxOfRest ? arr[0] : maxOfRest;\n}\nconsole.log(findMax([3, 7, 2, 9, 5]));  // 9\nconsole.log(findMax([-1, -5, -3]));     // -1',
  hint: 'Max = max(first element, max of remaining elements).'
},
{
  id: 'js_recursion_13',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if array is sorted.',
  mathSolution: 'Base: length <= 1 returns true; Check first <= second and recurse on rest.',
  codeSolution: 'function isSorted(arr) {\n    if (arr.length <= 1) return true;\n    if (arr[0] > arr[1]) return false;\n    return isSorted(arr.slice(1));\n}\nconsole.log(isSorted([1, 2, 3, 4, 5]));  // true\nconsole.log(isSorted([1, 3, 2, 4]));    // false\nconsole.log(isSorted([5]));              // true',
  hint: 'Array sorted if first <= second AND rest is sorted.'
},
{
  id: 'js_recursion_14',
  topicId: 'js_recursion',
  question: 'Write a recursive function for binary search.',
  mathSolution: 'Base: low > high returns -1; Compare mid with target, recurse left or right.',
  codeSolution: 'function binarySearch(arr, target, low = 0, high = arr.length - 1) {\n    if (low > high) return -1;\n    const mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);\n    return binarySearch(arr, target, mid + 1, high);\n}\nconst arr = [1, 3, 5, 7, 9, 11];\nconsole.log(binarySearch(arr, 7));   // 3\nconsole.log(binarySearch(arr, 4));   // -1',
  hint: 'Binary search divides problem in half at each step.'
},
{
  id: 'js_recursion_15',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all subsets of an array.',
  mathSolution: 'Base: empty array returns [[]]; Recursively add/subtract first element.',
  codeSolution: 'function subsets(arr) {\n    if (arr.length === 0) return [[]];\n    const first = arr[0];\n    const restSubsets = subsets(arr.slice(1));\n    const withFirst = restSubsets.map(subset => [first, ...subset]);\n    return [...restSubsets, ...withFirst];\n}\nconsole.log(subsets([1, 2, 3]));\n// [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]',
  hint: 'Subsets = subsets without first element + subsets with first element.'
},
{
  id: 'js_recursion_16',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all permutations of a string.',
  mathSolution: 'Base: length 1 returns [char]; Insert char at all positions of each permutation.',
  codeSolution: 'function permutations(str) {\n    if (str.length === 1) return [str];\n    const result = [];\n    for (let i = 0; i < str.length; i++) {\n        const char = str[i];\n        const remaining = str.slice(0, i) + str.slice(i + 1);\n        const perms = permutations(remaining);\n        for (const perm of perms) {\n            result.push(char + perm);\n        }\n    }\n    return result;\n}\nconsole.log(permutations("abc"));\n// ["abc", "acb", "bac", "bca", "cab", "cba"]',
  hint: 'Permutations = each character + permutations of remaining characters.'
},
{
  id: 'js_recursion_17',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Tower of Hanoi (minimum moves).',
  mathSolution: 'Move n-1 disks to auxiliary, move largest, move n-1 to target.',
  codeSolution: 'function towerOfHanoi(n, from, to, auxiliary, moves = []) {\n    if (n === 1) {\n        moves.push(`Move disk 1 from ${from} to ${to}`);\n        return moves;\n    }\n    towerOfHanoi(n - 1, from, auxiliary, to, moves);\n    moves.push(`Move disk ${n} from ${from} to ${to}`);\n    towerOfHanoi(n - 1, auxiliary, to, from, moves);\n    return moves;\n}\nconsole.log(towerOfHanoi(3, "A", "C", "B"));',
  hint: 'Tower of Hanoi requires 2^n - 1 moves for n disks.'
},
{
  id: 'js_recursion_18',
  topicId: 'js_recursion',
  question: 'Write a recursive function to traverse a tree structure (DFS).',
  mathSolution: 'Visit node, then recursively traverse each child.',
  codeSolution: 'const tree = {\n    value: 1,\n    children: [\n        { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },\n        { value: 3, children: [{ value: 6, children: [] }] }\n    ]\n};\n\nfunction dfs(node, result = []) {\n    result.push(node.value);\n    for (const child of node.children) {\n        dfs(child, result);\n    }\n    return result;\n}\nconsole.log(dfs(tree));  // [1, 2, 4, 5, 3, 6]',
  hint: 'Depth-first traversal visits node then children recursively.'
},
{
  id: 'js_recursion_19',
  topicId: 'js_recursion',
  question: 'Write a recursive function to traverse binary tree (in-order).',
  mathSolution: 'Traverse left, visit node, traverse right.',
  codeSolution: 'class TreeNode {\n    constructor(value, left = null, right = null) {\n        this.value = value;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nconst tree2 = new TreeNode(4,\n    new TreeNode(2, new TreeNode(1), new TreeNode(3)),\n    new TreeNode(6, new TreeNode(5), new TreeNode(7))\n);\n\nfunction inorderTraversal(node, result = []) {\n    if (!node) return result;\n    inorderTraversal(node.left, result);\n    result.push(node.value);\n    inorderTraversal(node.right, result);\n    return result;\n}\nconsole.log(inorderTraversal(tree2));  // [1, 2, 3, 4, 5, 6, 7]',
  hint: 'In-order: left, node, right.'
},
{
  id: 'js_recursion_20',
  topicId: 'js_recursion',
  question: 'Write a recursive function for pre-order and post-order traversal.',
  mathSolution: 'Pre: node, left, right; Post: left, right, node.',
  codeSolution: 'function preorderTraversal(node, result = []) {\n    if (!node) return result;\n    result.push(node.value);\n    preorderTraversal(node.left, result);\n    preorderTraversal(node.right, result);\n    return result;\n}\n\nfunction postorderTraversal(node, result = []) {\n    if (!node) return result;\n    postorderTraversal(node.left, result);\n    postorderTraversal(node.right, result);\n    result.push(node.value);\n    return result;\n}\n\nconsole.log(preorderTraversal(tree2));  // [4, 2, 1, 3, 6, 5, 7]\nconsole.log(postorderTraversal(tree2)); // [1, 3, 2, 5, 7, 6, 4]',
  hint: 'Pre-order: root, left, right. Post-order: left, right, root.'
},
{
  id: 'js_recursion_21',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute the depth of a binary tree.',
  mathSolution: 'Base: null returns 0; Depth = 1 + max(depth left, depth right).',
  codeSolution: 'function treeDepth(node) {\n    if (!node) return 0;\n    const leftDepth = treeDepth(node.left);\n    const rightDepth = treeDepth(node.right);\n    return 1 + Math.max(leftDepth, rightDepth);\n}\nconsole.log(treeDepth(tree2));  // 3',
  hint: 'Depth = 1 + max(depth of left, depth of right).'
},
{
  id: 'js_recursion_22',
  topicId: 'js_recursion',
  question: 'Write a recursive function for QuickSort algorithm.',
  mathSolution: 'Pick pivot, partition, recursively sort left and right partitions.',
  codeSolution: 'function quickSort(arr) {\n    if (arr.length <= 1) return arr;\n    const pivot = arr[0];\n    const left = [];\n    const right = [];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] < pivot) left.push(arr[i]);\n        else right.push(arr[i]);\n    }\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\nconsole.log(quickSort([3, 6, 8, 10, 1, 2, 1]));  // [1, 1, 2, 3, 6, 8, 10]',
  hint: 'QuickSort: choose pivot, partition, recursively sort partitions.'
},
{
  id: 'js_recursion_23',
  topicId: 'js_recursion',
  question: 'Write a recursive function for MergeSort algorithm.',
  mathSolution: 'Divide array in half, recursively sort halves, merge results.',
  codeSolution: 'function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n    return merge(left, right);\n}\n\nfunction merge(left, right) {\n    const result = [];\n    let i = 0, j = 0;\n    while (i < left.length && j < right.length) {\n        if (left[i] <= right[j]) result.push(left[i++]);\n        else result.push(right[j++]);\n    }\n    return result.concat(left.slice(i)).concat(right.slice(j));\n}\nconsole.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));\n// [3, 9, 10, 27, 38, 43, 82]',
  hint: 'MergeSort: divide and conquer, merge sorted halves.'
},
{
  id: 'js_recursion_24',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute n-th triangular number.',
  mathSolution: 'Base: n=1 returns 1; Recursive: n + triangular(n-1).',
  codeSolution: 'function triangular(n) {\n    if (n === 1) return 1;\n    return n + triangular(n - 1);\n}\nconsole.log(triangular(5));  // 15 (1+2+3+4+5)\nconsole.log(triangular(10)); // 55',
  hint: 'Triangular number = n + T(n-1), T(1)=1.'
},
{
  id: 'js_recursion_25',
  topicId: 'js_recursion',
  question: 'Write a recursive function for climbing stairs problem (ways to climb n steps).',
  mathSolution: 'Base: n=0 return 1; Recursive: climb(n-1) + climb(n-2).',
  codeSolution: 'function climbStairs(n) {\n    if (n < 0) return 0;\n    if (n === 0) return 1;\n    return climbStairs(n - 1) + climbStairs(n - 2);\n}\nconsole.log(climbStairs(3));  // 3 (1+1+1, 1+2, 2+1)\nconsole.log(climbStairs(4));  // 5',
  hint: 'Ways to climb = ways to climb (n-1) + ways to climb (n-2).'
},
{
  id: 'js_recursion_26',
  topicId: 'js_recursion',
  question: 'Write a recursive function for factorial with memoization (optimized).',
  mathSolution: 'Cache results in object to avoid recomputation.',
  codeSolution: 'const memo = {};\nfunction factorialMemo(n) {\n    if (n <= 1) return 1;\n    if (memo[n]) return memo[n];\n    memo[n] = n * factorialMemo(n - 1);\n    return memo[n];\n}\nconsole.log(factorialMemo(5));   // 120\nconsole.log(factorialMemo(10));  // 3628800\n// fibonacci with memoization\nconst fibMemo = {};\nfunction fibonacciMemo(n) {\n    if (n <= 1) return n;\n    if (fibMemo[n]) return fibMemo[n];\n    fibMemo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);\n    return fibMemo[n];\n}\nconsole.log(fibonacciMemo(40));  // 102334155 (fast!)',
  hint: 'Memoization stores computed results, reducing O(2^n) to O(n).'
},
{
  id: 'js_recursion_27',
  topicId: 'js_recursion',
  question: 'Write a recursive function for n choose k (combinations).',
  mathSolution: 'Base: k=0 or k=n returns 1; Recursive: C(n-1,k-1) + C(n-1,k).',
  codeSolution: 'function combinations(n, k) {\n    if (k === 0 || k === n) return 1;\n    return combinations(n - 1, k - 1) + combinations(n - 1, k);\n}\nconsole.log(combinations(5, 2));  // 10\nconsole.log(combinations(6, 3));  // 20',
  hint: 'Pascal\'s rule: C(n,k) = C(n-1,k-1) + C(n-1,k).'
},
{
  id: 'js_recursion_28',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute string length.',
  mathSolution: 'Base: empty string returns 0; Recursive: 1 + length of rest.',
  codeSolution: 'function stringLength(str) {\n    if (str === "") return 0;\n    return 1 + stringLength(str.slice(1));\n}\nconsole.log(stringLength("hello"));   // 5\nconsole.log(stringLength("abcde"));   // 5',
  hint: 'Length = 1 + length of string without first character.'
},
{
  id: 'js_recursion_29',
  topicId: 'js_recursion',
  question: 'Write a recursive function to remove duplicates from sorted array.',
  mathSolution: 'Base: empty or single element returns array; Compare and recurse.',
  codeSolution: 'function removeDuplicates(arr) {\n    if (arr.length <= 1) return arr;\n    if (arr[0] === arr[1]) return removeDuplicates(arr.slice(1));\n    return [arr[0], ...removeDuplicates(arr.slice(1))];\n}\nconsole.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));\n// [1, 2, 3, 4, 5]',
  hint: 'Skip duplicates, keep first occurrence of each number.'
},
{
  id: 'js_recursion_30',
  topicId: 'js_recursion',
  question: 'Write a recursive function for linear search.',
  mathSolution: 'Base: index >= length returns -1; Check current or recurse.',
  codeSolution: 'function linearSearch(arr, target, index = 0) {\n    if (index >= arr.length) return -1;\n    if (arr[index] === target) return index;\n    return linearSearch(arr, target, index + 1);\n}\nconsole.log(linearSearch([3, 7, 2, 9, 5], 7));  // 1\nconsole.log(linearSearch([3, 7, 2, 9, 5], 4));  // -1',
  hint: 'Check current index, if not found search remaining array.'
},
{
  id: 'js_recursion_31',
  topicId: 'js_recursion',
  question: 'Write a recursive function for exponential search (pow).',
  mathSolution: 'Base: exponent 0 returns 1; even/odd optimization.',
  codeSolution: 'function pow(base, exponent) {\n    if (exponent === 0) return 1;\n    if (exponent < 0) return 1 / pow(base, -exponent);\n    if (exponent % 2 === 0) {\n        const half = pow(base, exponent / 2);\n        return half * half;\n    }\n    return base * pow(base, exponent - 1);\n}\nconsole.log(pow(2, 10));   // 1024\nconsole.log(pow(5, -2));   // 0.04\nconsole.log(pow(3, 4));    // 81',
  hint: 'Handle negative exponents with reciprocal.'
},
{
  id: 'js_recursion_32',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute product of arrays elements.',
  mathSolution: 'Base: empty array returns 1; Recursive: first * product(rest).',
  codeSolution: 'function product(arr) {\n    if (arr.length === 0) return 1;\n    return arr[0] * product(arr.slice(1));\n}\nconsole.log(product([2, 3, 4]));   // 24\nconsole.log(product([1, 2, 3]));   // 6',
  hint: 'Product = first element * product of remaining elements.'
},
{
  id: 'js_recursion_33',
  topicId: 'js_recursion',
  question: 'Write a recursive function to find all occurrences of a value.',
  mathSolution: 'Use index parameter to collect positions.',
  codeSolution: 'function findAll(arr, target, index = 0, result = []) {\n    if (index >= arr.length) return result;\n    if (arr[index] === target) result.push(index);\n    return findAll(arr, target, index + 1, result);\n}\nconsole.log(findAll([1, 2, 3, 2, 4, 2, 5], 2));  // [1, 3, 5]',
  hint: 'Pass result array through recursion to collect indices.'
},
{
  id: 'js_recursion_34',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if number is prime.',
  mathSolution: 'Check divisors from 2 to sqrt(n) recursively.',
  codeSolution: 'function isPrime(n, divisor = 2) {\n    if (n <= 1) return false;\n    if (divisor * divisor > n) return true;\n    if (n % divisor === 0) return false;\n    return isPrime(n, divisor + 1);\n}\nconsole.log(isPrime(17));   // true\nconsole.log(isPrime(15));   // false\nconsole.log(isPrime(2));    // true',
  hint: 'Check divisibility from 2 to sqrt(n).'
},
{
  id: 'js_recursion_35',
  topicId: 'js_recursion',
  question: 'Write a recursive function to convert decimal to binary.',
  mathSolution: 'Base: n < 2 returns string of n; Recursive: convert(n/2) + (n%2).',
  codeSolution: 'function decimalToBinary(n) {\n    if (n === 0) return "0";\n    if (n === 1) return "1";\n    return decimalToBinary(Math.floor(n / 2)) + (n % 2);\n}\nconsole.log(decimalToBinary(10));  // "1010"\nconsole.log(decimalToBinary(42));  // "101010"',
  hint: 'Binary = binary of n/2 + (n % 2).'
},
{
  id: 'js_recursion_36',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute greatest common divisor (GCD) of multiple numbers.',
  mathSolution: 'GCD(a,b,c) = GCD(GCD(a,b), c).',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\n\nfunction gcdMultiple(arr) {\n    if (arr.length === 1) return arr[0];\n    return gcd(arr[0], gcdMultiple(arr.slice(1)));\n}\nconsole.log(gcdMultiple([48, 18, 24]));  // 6\nconsole.log(gcdMultiple([100, 35, 15])); // 5',
  hint: 'GCD of multiple numbers = GCD(GCD(a,b), c).'
},
{
  id: 'js_recursion_37',
  topicId: 'js_recursion',
  question: 'Write a recursive function for least common multiple (LCM).',
  mathSolution: 'LCM(a,b) = a * b / GCD(a,b).',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\n\nfunction lcm(a, b) {\n    return (a * b) / gcd(a, b);\n}\n\nfunction lcmMultiple(arr) {\n    if (arr.length === 1) return arr[0];\n    return lcm(arr[0], lcmMultiple(arr.slice(1)));\n}\nconsole.log(lcmMultiple([4, 6, 8]));   // 24\nconsole.log(lcmMultiple([2, 3, 5]));   // 30',
  hint: 'LCM = product / GCD.'
},
{
  id: 'js_recursion_38',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all substrings of a string.',
  mathSolution: 'Take all substrings starting at each position and recurse on rest.',
  codeSolution: 'function substrings(str) {\n    if (str.length === 0) return [];\n    const result = [];\n    for (let i = 0; i < str.length; i++) {\n        result.push(str.slice(0, i + 1));\n    }\n    return [...result, ...substrings(str.slice(1))];\n}\nconsole.log(substrings("abc"));\n// ["a", "ab", "abc", "b", "bc", "c"]',
  hint: 'Substrings = prefixes + substrings of string without first char.'
},
{
  id: 'js_recursion_39',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Josephus problem.',
  mathSolution: 'J(n,k) = (J(n-1,k) + k-1) % n + 1 with base J(1,k)=1.',
  codeSolution: 'function josephus(n, k) {\n    if (n === 1) return 1;\n    return (josephus(n - 1, k) + k - 1) % n + 1;\n}\nconsole.log(josephus(7, 3));  // 4\nconsole.log(josephus(41, 3)); // 31 (famous problem)',
  hint: 'Josephus recurrence: (J(n-1,k)+k-1) % n + 1.'
},
{
  id: 'js_recursion_40',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Ackermann function.',
  mathSolution: 'A(0,m)=m+1; A(n,0)=A(n-1,1); A(n,m)=A(n-1,A(n,m-1)).',
  codeSolution: 'function ackermann(m, n) {\n    if (m === 0) return n + 1;\n    if (n === 0) return ackermann(m - 1, 1);\n    return ackermann(m - 1, ackermann(m, n - 1));\n}\nconsole.log(ackermann(0, 5));   // 6\nconsole.log(ackermann(1, 3));   // 5\nconsole.log(ackermann(2, 4));   // 11\n// ackermann(3, 4) grows very large quickly',
  hint: 'Ackermann function grows extremely fast; good for recursion depth testing.'
},
{
  id: 'js_recursion_41',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute the number of binary strings without consecutive zeros.',
  mathSolution: 'Count strings ending with 0 and 1 recursively.',
  codeSolution: 'function countBinaryStrings(n) {\n    if (n === 1) return 2;\n    if (n === 2) return 3;\n    return countBinaryStrings(n - 1) + countBinaryStrings(n - 2);\n}\nconsole.log(countBinaryStrings(3));  // 5 (010,011,101,110,111? Actually 5)\nconsole.log(countBinaryStrings(4));  // 8,\n// This follows Fibonacci pattern',
  hint: 'Number of binary strings without "00" = F(n+2).'
},
{
  id: 'js_recursion_42',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Catalan numbers.',
  mathSolution: 'C(0)=1; C(n)=sum(C(i)*C(n-1-i) for i=0 to n-1).',
  codeSolution: 'function catalan(n) {\n    if (n === 0) return 1;\n    let sum = 0;\n    for (let i = 0; i < n; i++) {\n        sum += catalan(i) * catalan(n - 1 - i);\n    }\n    return sum;\n}\nconsole.log(catalan(0));  // 1\nconsole.log(catalan(1));  // 1\nconsole.log(catalan(2));  // 2\nconsole.log(catalan(3));  // 5\nconsole.log(catalan(4));  // 14',
  hint: 'Catalan numbers count many combinatorial structures.'
},
{
  id: 'js_recursion_43',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if two strings are anagrams.',
  mathSolution: 'Anagrams if after sorting (or character count) they match.',
  codeSolution: 'function isAnagram(str1, str2) {\n    if (str1.length !== str2.length) return false;\n    if (str1.length === 0) return true;\n    const char = str1[0];\n    const index = str2.indexOf(char);\n    if (index === -1) return false;\n    return isAnagram(str1.slice(1), str2.slice(0, index) + str2.slice(index + 1));\n}\nconsole.log(isAnagram("listen", "silent"));  // true\nconsole.log(isAnagram("hello", "world"));    // false',
  hint: 'Remove matching character from both strings and recurse.'
},
{
  id: 'js_recursion_44',
  topicId: 'js_recursion',
  question: 'Write a recursive function to count occurrences of a character in string.',
  mathSolution: 'Base: empty returns 0; Recursive: (first matches ? 1:0) + count(rest).',
  codeSolution: 'function countChar(str, char) {\n    if (str.length === 0) return 0;\n    const match = str[0] === char ? 1 : 0;\n    return match + countChar(str.slice(1), char);\n}\nconsole.log(countChar("hello world", "l"));    // 3\nconsole.log(countChar("mississippi", "s"));   // 4',
  hint: 'Count = (first char matches ? 1:0) + count of remaining chars.'
},
{
  id: 'js_recursion_45',
  topicId: 'js_recursion',
  question: 'Write a recursive function for rope cutting problem (max pieces).',
  mathSolution: 'Try cutting piece of each length and take max.',
  codeSolution: 'function maxRopePieces(n, a, b, c) {\n    if (n === 0) return 0;\n    if (n < 0) return -1;\n    const result = Math.max(\n        maxRopePieces(n - a, a, b, c),\n        maxRopePieces(n - b, a, b, c),\n        maxRopePieces(n - c, a, b, c)\n    );\n    return result === -1 ? -1 : result + 1;\n}\nconsole.log(maxRopePieces(5, 2, 3, 5));  // 2 (2+3 or 5)\nconsole.log(maxRopePieces(23, 11, 9, 12)); // 2',
  hint: 'Max pieces = 1 + max of (n-length) for each possible cut.'
},
{
  id: 'js_recursion_46',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if string is a valid parentheses sequence.',
  mathSolution: 'Track balance; Base: empty string returns true if balance=0.',
  codeSolution: 'function isValidParentheses(str, balance = 0) {\n    if (balance < 0) return false;\n    if (str.length === 0) return balance === 0;\n    const newBalance = str[0] === "(" ? balance + 1 : balance - 1;\n    return isValidParentheses(str.slice(1), newBalance);\n}\nconsole.log(isValidParentheses("(()())"));  // true\nconsole.log(isValidParentheses("(()"));     // false\nconsole.log(isValidParentheses("())("));    // false',
  hint: 'Balance increases on "(", decreases on ")", never negative, ends at 0.'
},
{
  id: 'js_recursion_47',
  topicId: 'js_recursion',
  question: 'Write a recursive function for coin change problem (number of ways).',
  mathSolution: 'Ways = ways using first coin + ways without first coin.',
  codeSolution: 'function coinChange(coins, amount, index = 0) {\n    if (amount === 0) return 1;\n    if (amount < 0 || index >= coins.length) return 0;\n    return coinChange(coins, amount - coins[index], index) + \n           coinChange(coins, amount, index + 1);\n}\nconsole.log(coinChange([1, 2, 5], 5));  // 4 (1+1+1+1+1, 1+1+1+2, 1+2+2, 5)',
  hint: 'Two choices: use current coin or skip to next coin.'
},
{
  id: 'js_recursion_48',
  topicId: 'js_recursion',
  question: 'Write a recursive function for maze solving (path finding).',
  mathSolution: 'Try each direction (up, down, left, right) recursively.',
  codeSolution: 'function solveMaze(maze, x = 0, y = 0, path = []) {\n    if (x === maze.length - 1 && y === maze[0].length - 1) {\n        return [...path, [x, y]];\n    }\n    if (x < 0 || y < 0 || x >= maze.length || y >= maze[0].length) return null;\n    if (maze[x][y] === 1 || maze[x][y] === -1) return null;\n    maze[x][y] = -1; // Mark visited\n    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n    for (const [dx, dy] of directions) {\n        const result = solveMaze(maze, x + dx, y + dy, [...path, [x, y]]);\n        if (result) return result;\n    }\n    return null;\n}\nconst maze = [\n    [0, 0, 0, 1],\n    [1, 1, 0, 1],\n    [0, 0, 0, 0],\n    [0, 1, 1, 0]\n];\nconsole.log(solveMaze(maze));  // Path from (0,0) to (3,3)',
  hint: 'Backtracking: try each direction, mark visited cells.'
},
{
  id: 'js_recursion_49',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Sudoku solver.',
  mathSolution: 'Find empty cell, try numbers 1-9, recursively solve rest.',
  codeSolution: 'function solveSudoku(board) {\n    for (let i = 0; i < 9; i++) {\n        for (let j = 0; j < 9; j++) {\n            if (board[i][j] === 0) {\n                for (let num = 1; num <= 9; num++) {\n                    if (isValid(board, i, j, num)) {\n                        board[i][j] = num;\n                        if (solveSudoku(board)) return true;\n                        board[i][j] = 0;\n                    }\n                }\n                return false;\n            }\n        }\n    }\n    return true;\n}\n\nfunction isValid(board, row, col, num) {\n    for (let i = 0; i < 9; i++) {\n        if (board[row][i] === num) return false;\n        if (board[i][col] === num) return false;\n        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);\n        const boxCol = 3 * Math.floor(col / 3) + (i % 3);\n        if (board[boxRow][boxCol] === num) return false;\n    }\n    return true;\n}\n\nconst sudoku = [\n    [5, 3, 0, 0, 7, 0, 0, 0, 0],\n    [6, 0, 0, 1, 9, 5, 0, 0, 0],\n    [0, 9, 8, 0, 0, 0, 0, 6, 0],\n    // ... rest of board\n];',
  hint: 'Backtracking with constraints checking for Sudoku.'
},
{
  id: 'js_recursion_50',
  topicId: 'js_recursion',
  question: 'Write a recursive function for N-Queens problem.',
  mathSolution: 'Place queen in each row, check conflicts recursively.',
  codeSolution: 'function solveNQueens(n) {\n    const result = [];\n    const board = Array(n).fill().map(() => Array(n).fill("."));\n    \n    function isSafe(row, col) {\n        // Check column\n        for (let i = 0; i < row; i++) {\n            if (board[i][col] === "Q") return false;\n        }\n        // Check diagonal up-left\n        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {\n            if (board[i][j] === "Q") return false;\n        }\n        // Check diagonal up-right\n        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {\n            if (board[i][j] === "Q") return false;\n        }\n        return true;\n    }\n    \n    function backtrack(row) {\n        if (row === n) {\n            result.push(board.map(r => r.join("")));\n            return;\n        }\n        for (let col = 0; col < n; col++) {\n            if (isSafe(row, col)) {\n                board[row][col] = "Q";\n                backtrack(row + 1);\n                board[row][col] = ".";\n            }\n        }\n    }\n    \n    backtrack(0);\n    return result;\n}\nconsole.log(solveNQueens(4));  // 2 solutions for 4x4 board\nconsole.log(solveNQueens(8).length);  // 92 solutions for 8x8',
  hint: 'N-Queens: place one queen per row, check conflicts diagonally and vertically.'
}
);