QuizData.questions.push(
  // ========== ARRAY OPERATIONS (1-10) ==========
  {
    id: 'c_dsa_1',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert an element at a given position in an array.',
    mathSolution: 'Insert element at index 2, shift elements right',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {10, 20, 30, 40, 50};\n    int n = 5, pos = 2, val = 25;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = n; i > pos; i--)\n        arr[i] = arr[i-1];\n    arr[pos] = val;\n    n++;\n    \n    printf("\\nAfter insertion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements from end to pos'
  },
  {
    id: 'c_dsa_2',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete an element from a given position in an array.',
    mathSolution: 'Delete element at index 2, shift elements left',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, pos = 2;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = pos; i < n-1; i++)\n        arr[i] = arr[i+1];\n    n--;\n    \n    printf("\\nAfter deletion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements from pos+1 to left'
  },
  {
    id: 'c_dsa_3',
    topicId: 'c_dsa_basic',
    question: 'Write a program to search for an element in an array (linear search).',
    mathSolution: 'Search for 30 in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30, found = -1;\n    \n    for(int i = 0; i < 5; i++) {\n        if(arr[i] == key) {\n            found = i;\n            break;\n        }\n    }\n    \n    if(found != -1)\n        printf("Element %d found at index %d\\n", key, found);\n    else\n        printf("Element not found\\n");\n    return 0;\n}',
    hint: 'Check each element sequentially'
  },
  {
    id: 'c_dsa_4',
    topicId: 'c_dsa_basic',
    question: 'Write a program to reverse an array.',
    mathSolution: 'Reverse order of elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    \n    printf("\\nReversed: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_dsa_5',
    topicId: 'c_dsa_basic',
    question: 'Write a program to left rotate an array by one position.',
    mathSolution: 'Move first element to end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, first = arr[0];\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++)\n        arr[i] = arr[i+1];\n    arr[n-1] = first;\n    \n    printf("\\nAfter left rotate: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Store first, shift left, put first at end'
  },
  {
    id: 'c_dsa_6',
    topicId: 'c_dsa_basic',
    question: 'Write a program to right rotate an array by one position.',
    mathSolution: 'Move last element to front',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, last = arr[n-1];\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = n-1; i > 0; i--)\n        arr[i] = arr[i-1];\n    arr[0] = last;\n    \n    printf("\\nAfter right rotate: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Store last, shift right, put last at front'
  },
  {
    id: 'c_dsa_7',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the frequency of each element in an array.',
    mathSolution: 'Count occurrences of each element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 2, 3, 3, 3, 4};\n    int n = 7;\n    int visited[7] = {0};\n    \n    for(int i = 0; i < n; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j = i+1; j < n; j++) {\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = 1;\n            }\n        }\n        printf("%d appears %d times\\n", arr[i], count);\n    }\n    return 0;\n}',
    hint: 'Mark visited elements to avoid counting twice'
  },
  {
    id: 'c_dsa_8',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the maximum subarray sum (Kadane\'s algorithm).',
    mathSolution: 'Maximum sum contiguous subarray',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    int n = 9;\n    int max_so_far = arr[0], max_ending_here = arr[0];\n    \n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max_ending_here + arr[i])\n            max_ending_here = arr[i];\n        else\n            max_ending_here = max_ending_here + arr[i];\n        \n        if(max_ending_here > max_so_far)\n            max_so_far = max_ending_here;\n    }\n    printf("Maximum subarray sum = %d\\n", max_so_far);\n    return 0;\n}',
    hint: 'Decide whether to extend or start new subarray'
  },
  {
    id: 'c_dsa_9',
    topicId: 'c_dsa_basic',
    question: 'Write a program to remove duplicates from a sorted array.',
    mathSolution: 'Keep only unique elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 1, 2, 2, 3, 4, 4};\n    int n = 7, j = 0;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 1; i < n; i++) {\n        if(arr[i] != arr[j]) {\n            j++;\n            arr[j] = arr[i];\n        }\n    }\n    n = j + 1;\n    \n    printf("\\nAfter removal: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Use two pointers - one for unique, one for scanning'
  },
  {
    id: 'c_dsa_10',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the first duplicate element in an array.',
    mathSolution: 'Return first element that appears twice',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 5, 1};\n    int n = 7;\n    int freq[100] = {0};\n    int duplicate = -1;\n    \n    for(int i = 0; i < n; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] == 2) {\n            duplicate = arr[i];\n            break;\n        }\n    }\n    \n    if(duplicate != -1)\n        printf("First duplicate: %d\\n", duplicate);\n    else\n        printf("No duplicate found\\n");\n    return 0;\n}',
    hint: 'Track counts, return when count becomes 2'
  },

  // ========== MATRIX OPERATIONS (11-15) ==========
  {
    id: 'c_dsa_11',
    topicId: 'c_dsa_basic',
    question: 'Write a program to add two matrices.',
    mathSolution: 'Element-wise addition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    \n    printf("Result of addition:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements using nested loops'
  },
  {
    id: 'c_dsa_12',
    topicId: 'c_dsa_basic',
    question: 'Write a program to multiply two matrices.',
    mathSolution: 'Matrix multiplication',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2] = {0};\n    \n    for(int i = 0; i < 2; i++)\n        for(int j = 0; j < 2; j++)\n            for(int k = 0; k < 2; k++)\n                c[i][j] += a[i][k] * b[k][j];\n    \n    printf("Product:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++)\n            printf("%d ", c[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Triple nested loops: rows of a, cols of b, inner product'
  },
  {
    id: 'c_dsa_13',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find transpose of a matrix.',
    mathSolution: 'Rows become columns',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {{1,2,3},{4,5,6}};\n    int trans[3][2];\n    \n    printf("Original matrix:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++)\n            printf("%d ", mat[i][j]);\n        printf("\\n");\n    }\n    \n    for(int i = 0; i < 2; i++)\n        for(int j = 0; j < 3; j++)\n            trans[j][i] = mat[i][j];\n    \n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 2; j++)\n            printf("%d ", trans[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap indices i and j'
  },
  {
    id: 'c_dsa_14',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find sum of diagonal elements of a square matrix.',
    mathSolution: 'Sum of elements where i == j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    \n    for(int i = 0; i < 3; i++)\n        sum += mat[i][i];\n    \n    printf("Sum of diagonal = %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have row index equal to column index'
  },
  {
    id: 'c_dsa_15',
    topicId: 'c_dsa_basic',
    question: 'Write a program to check if a matrix is symmetric.',
    mathSolution: 'Matrix equals its transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{2,4,5},{3,5,6}};\n    int symmetric = 1;\n    \n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            if(mat[i][j] != mat[j][i]) {\n                symmetric = 0;\n                break;\n            }\n        }\n    }\n    \n    if(symmetric)\n        printf("Matrix is symmetric\\n");\n    else\n        printf("Matrix is not symmetric\\n");\n    return 0;\n}',
    hint: 'Compare with transpose'
  },

  // ========== SORTING ALGORITHMS (16-20) ==========
  {
    id: 'c_dsa_16',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement bubble sort.',
    mathSolution: 'Sort array using bubble sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = 7, temp;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    \n    printf("\\nSorted array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent and swap if needed'
  },
  {
    id: 'c_dsa_17',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement selection sort.',
    mathSolution: 'Sort array using selection sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5, min_idx, temp;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++) {\n        min_idx = i;\n        for(int j = i+1; j < n; j++) {\n            if(arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        temp = arr[i];\n        arr[i] = arr[min_idx];\n        arr[min_idx] = temp;\n    }\n    \n    printf("\\nSorted: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Find minimum and place at beginning'
  },
  {
    id: 'c_dsa_18',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement insertion sort.',
    mathSolution: 'Sort array using insertion sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = 5, key, j;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 1; i < n; i++) {\n        key = arr[i];\n        j = i-1;\n        while(j >= 0 && arr[j] > key) {\n            arr[j+1] = arr[j];\n            j--;\n        }\n        arr[j+1] = key;\n    }\n    \n    printf("\\nSorted: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Insert element in sorted portion'
  },
  {
    id: 'c_dsa_19',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement binary search on a sorted array.',
    mathSolution: 'Search for element using binary search',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30, low = 0, high = 4, mid;\n    int found = -1;\n    \n    while(low <= high) {\n        mid = (low + high) / 2;\n        if(arr[mid] == key) {\n            found = mid;\n            break;\n        }\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    \n    if(found != -1)\n        printf("Element %d found at index %d\\n", key, found);\n    else\n        printf("Element not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer on sorted array'
  },
  {
    id: 'c_dsa_20',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find a pair with given sum in sorted array.',
    mathSolution: 'Use two-pointer technique',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int target = 70, left = 0, right = 4;\n    int found = 0;\n    \n    while(left < right) {\n        int sum = arr[left] + arr[right];\n        if(sum == target) {\n            found = 1;\n            printf("Pair found: %d + %d = %d\\n\", arr[left], arr[right], target);\n            break;\n        }\n        if(sum < target) left++;\n        else right--;\n    }\n    \n    if(!found) printf("No pair found\\n\");\n    return 0;\n}',
    hint: 'Move left and right pointers based on sum'
  },

  // ========== STACK OPERATIONS (21-25) ==========
  {
    id: 'c_dsa_21',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement stack using array with push and pop operations.',
    mathSolution: 'LIFO data structure',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if(top >= MAX-1) printf("Stack Overflow\\n");\n    else stack[++top] = val;\n}\n\nint pop() {\n    if(top < 0) { printf("Stack Underflow\\n"); return -1; }\n    return stack[top--];\n}\n\nint main() {\n    push(10); push(20); push(30);\n    printf("Popped: %d\\n\", pop());\n    printf(\"Popped: %d\\n\", pop());\n    return 0;\n}',
    hint: 'Push increments top, pop decrements top'
  },
  {
    id: 'c_dsa_22',
    topicId: 'c_dsa_basic',
    question: 'Write a program to check if parentheses are balanced using stack.',
    mathSolution: 'Verify matching brackets',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char expr[] = "{[()]}\";\n    char stack[100];\n    int top = -1;\n    int balanced = 1;\n    \n    for(int i = 0; expr[i]; i++) {\n        char c = expr[i];\n        if(c == \'(\' || c == \'{\' || c == \'[\')\n            stack[++top] = c;\n        else if(c == \')\') {\n            if(top < 0 || stack[top--] != \'(\') { balanced = 0; break; }\n        } else if(c == \'}\') {\n            if(top < 0 || stack[top--] != \'{\') { balanced = 0; break; }\n        } else if(c == \']\') {\n            if(top < 0 || stack[top--] != \'[\') { balanced = 0; break; }\n        }\n    }\n    \n    if(balanced && top == -1)\n        printf("Balanced\\n\");\n    else\n        printf(\"Not Balanced\\n\");\n    return 0;\n}',
    hint: 'Push opening brackets, pop and match closing'
  },
  {
    id: 'c_dsa_23',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement queue using array with enqueue and dequeue.',
    mathSolution: 'FIFO data structure',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint queue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if(rear >= MAX-1) printf("Queue Full\\n\");\n    else {\n        if(front == -1) front = 0;\n        queue[++rear] = val;\n    }\n}\n\nint dequeue() {\n    if(front == -1 || front > rear) { printf("Queue Empty\\n\"); return -1; }\n    int val = queue[front++];\n    if(front > rear) front = rear = -1;\n    return val;\n}\n\nint main() {\n    enqueue(10); enqueue(20); enqueue(30);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    printf(\"Dequeued: %d\\n\", dequeue());\n    return 0;\n}',
    hint: 'Add at rear, remove from front'
  },
  {
    id: 'c_dsa_24',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement circular queue using array.',
    mathSolution: 'Reuse empty spaces',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint cqueue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if((rear+1) % MAX == front) printf("Queue Full\\n\");\n    else {\n        if(front == -1) front = 0;\n        rear = (rear + 1) % MAX;\n        cqueue[rear] = val;\n    }\n}\n\nint dequeue() {\n    if(front == -1) { printf(\"Queue Empty\\n\"); return -1; }\n    int val = cqueue[front];\n    if(front == rear) front = rear = -1;\n    else front = (front + 1) % MAX;\n    return val;\n}\n\nint main() {\n    enqueue(10); enqueue(20); enqueue(30); enqueue(40); enqueue(50);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    enqueue(60);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    return 0;\n}',
    hint: 'Use modulo for wrap-around'
  },
  {
    id: 'c_dsa_25',
    topicId: 'c_dsa_basic',
    question: 'Write a program to evaluate postfix expression using stack.',
    mathSolution: 'Evaluate expression like "23+5*"',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char expr[] = "23+5*\";\n    int stack[100], top = -1;\n    \n    for(int i = 0; expr[i]; i++) {\n        if(isdigit(expr[i]))\n            stack[++top] = expr[i] - \'0\';\n        else {\n            int b = stack[top--];\n            int a = stack[top--];\n            if(expr[i] == \'+\') stack[++top] = a + b;\n            else if(expr[i] == \'-\') stack[++top] = a - b;\n            else if(expr[i] == \'*\') stack[++top] = a * b;\n            else if(expr[i] == \'/\') stack[++top] = a / b;\n        }\n    }\n    printf("Result = %d\\n\", stack[top]);\n    return 0;\n}',
    hint: 'Push numbers, apply operators to top two'
  },

  // ========== RECURSION (26-30) ==========
  {
    id: 'c_dsa_26',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to calculate factorial of a number.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int n = 5;\n    printf("%d! = %d\\n\", n, factorial(n));\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_dsa_27',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to find nth Fibonacci number.',
    mathSolution: 'Fibonacci(6) = 8',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int n = 6;\n    printf("Fibonacci(%d) = %d\\n\", n, fib(n));\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_dsa_28',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to calculate power (x^n).',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int x = 2, n = 5;\n    printf("%d^%d = %d\\n\", x, n, power(x, n));\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_dsa_29',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to find GCD of two numbers.',
    mathSolution: 'GCD(48, 18) = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int a = 48, b = 18;\n    printf("GCD(%d, %d) = %d\\n\", a, b, gcd(a, b));\n    return 0;\n}',
    hint: 'Base case: b=0 returns a'
  },
  {
    id: 'c_dsa_30',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to reverse a string.',
    mathSolution: 'Reverse "hello" to "olleh"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverse(char *str, int start, int end) {\n    if(start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    reverse(str, start+1, end-1);\n}\n\nint main() {\n    char str[] = "hello\";\n    printf(\"Original: %s\\n\", str);\n    reverse(str, 0, strlen(str)-1);\n    printf(\"Reversed: %s\\n\", str);\n    return 0;\n}',
    hint: 'Swap first and last, recurse on middle'
  },

  // ========== LINKED LIST (31-35) ==========
  {
    id: 'c_dsa_31',
    topicId: 'c_dsa_basic',
    question: 'Write a program to create a linked list node and insert at beginning.',
    mathSolution: 'Add node as new head',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = 10;\n    newNode->next = head;\n    head = newNode;\n    \n    newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = 20;\n    newNode->next = head;\n    head = newNode;\n    \n    printf("Linked list: \");\n    struct Node* curr = head;\n    while(curr) {\n        printf(\"%d \", curr->data);\n        curr = curr->next;\n    }\n    free(head->next);\n    free(head);\n    return 0;\n}',
    hint: 'New node points to old head'
  },
  {
    id: 'c_dsa_32',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert a node at the end of a linked list.',
    mathSolution: 'Add node after last node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 30; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Linked list: \");\n    struct Node* curr = head;\n    while(curr) {\n        printf(\"%d \", curr->data);\n        curr = curr->next;\n    }\n    \n    while(head) {\n        struct Node* temp = head;\n        head = head->next;\n        free(temp);\n    }\n    return 0;\n}',
    hint: 'Traverse to last node, then link'
  },
  {
    id: 'c_dsa_33',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete a node from the beginning of a linked list.',
    mathSolution: 'Remove first node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 30; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Before deletion: \");\n    struct Node* curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    struct Node* temp = head;\n    head = head->next;\n    free(temp);\n    \n    printf(\"\\nAfter deletion: \");\n    curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    while(head) { temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Move head to next node, free old head'
  },
  {
    id: 'c_dsa_34',
    topicId: 'c_dsa_basic',
    question: 'Write a program to reverse a linked list.',
    mathSolution: 'Reverse links between nodes',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 40; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Original: \");\n    struct Node* curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    struct Node *prev = NULL, *current = head, *next = NULL;\n    while(current) {\n        next = current->next;\n        current->next = prev;\n        prev = current;\n        current = next;\n    }\n    head = prev;\n    \n    printf(\"\\nReversed: \");\n    curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    while(head) { struct Node* temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Three pointers: prev, curr, next'
  },
  {
    id: 'c_dsa_35',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the middle node of a linked list.',
    mathSolution: 'Use slow and fast pointers',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 50; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    struct Node *slow = head, *fast = head;\n    while(fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    \n    printf("Middle node data: %d\\n\", slow->data);\n    \n    while(head) { struct Node* temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Slow moves one, fast moves two'
  },

  // ========== TREE TRAVERSALS (36-40) ==========
  {
    id: 'c_dsa_36',
    topicId: 'c_dsa_basic',
    question: 'Write a program to create a binary tree and perform inorder traversal.',
    mathSolution: 'Left -> Root -> Right',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Inorder traversal: \");\n    inorder(root);\n    return 0;\n}',
    hint: 'Recursively traverse left, then root, then right'
  },
  {
    id: 'c_dsa_37',
    topicId: 'c_dsa_basic',
    question: 'Write a program for preorder traversal of binary tree.',
    mathSolution: 'Root -> Left -> Right',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid preorder(struct TreeNode* root) {\n    if(root) {\n        printf("%d \", root->data);\n        preorder(root->left);\n        preorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Preorder traversal: \");\n    preorder(root);\n    return 0;\n}',
    hint: 'Process root first, then children'
  },
  {
    id: 'c_dsa_38',
    topicId: 'c_dsa_basic',
    question: 'Write a program for postorder traversal of binary tree.',
    mathSolution: 'Left -> Right -> Root',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid postorder(struct TreeNode* root) {\n    if(root) {\n        postorder(root->left);\n        postorder(root->right);\n        printf("%d \", root->data);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Postorder traversal: \");\n    postorder(root);\n    return 0;\n}',
    hint: 'Process children first, then root'
  },
  {
    id: 'c_dsa_39',
    topicId: 'c_dsa_basic',
    question: 'Write a program to count the number of nodes in a binary tree.',
    mathSolution: 'Total number of nodes',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nint countNodes(struct TreeNode* root) {\n    if(!root) return 0;\n    return 1 + countNodes(root->left) + countNodes(root->right);\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    \n    printf("Number of nodes: %d\\n\", countNodes(root));\n    return 0;\n}',
    hint: 'Count root plus nodes in left and right subtrees'
  },
  {
    id: 'c_dsa_40',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the height of a binary tree.',
    mathSolution: 'Maximum depth',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nint height(struct TreeNode* root) {\n    if(!root) return 0;\n    int leftH = height(root->left);\n    int rightH = height(root->right);\n    return 1 + (leftH > rightH ? leftH : rightH);\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->left->left = createNode(5);\n    \n    printf("Height of tree: %d\\n\", height(root));\n    return 0;\n}',
    hint: 'Height = 1 + max(left height, right height)'
  },

  // ========== BINARY SEARCH TREE (41-45) ==========
  {
    id: 'c_dsa_41',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert a node in Binary Search Tree.',
    mathSolution: 'Maintain BST property',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data)\n        root->left = insert(root->left, data);\n    else if(data > root->data)\n        root->right = insert(root->right, data);\n    return root;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++)\n        root = insert(root, values[i]);\n    \n    printf("Inorder of BST: \");\n    inorder(root);\n    return 0;\n}',
    hint: 'Recursively find correct position'
  },
  {
    id: 'c_dsa_42',
    topicId: 'c_dsa_basic',
    question: 'Write a program to search for a key in Binary Search Tree.',
    mathSolution: 'Find node with given key',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* search(struct TreeNode* root, int key) {\n    if(!root || root->data == key) return root;\n    if(key < root->data) return search(root->left, key);\n    return search(root->right, key);\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    int key = 60;\n    struct TreeNode* found = search(root, key);\n    if(found) printf("Found %d in BST\\n\", key);\n    else printf(\"%d not found\\n\", key);\n    return 0;\n}',
    hint: 'Compare and go left or right'
  },
  {
    id: 'c_dsa_43',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the minimum value node in BST.',
    mathSolution: 'Leftmost node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMin(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->left) curr = curr->left;\n    return curr;\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    struct TreeNode* min = findMin(root);\n    printf("Minimum value in BST: %d\\n\", min->data);\n    return 0;\n}',
    hint: 'Keep going left until NULL'
  },
  {
    id: 'c_dsa_44',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the maximum value node in BST.',
    mathSolution: 'Rightmost node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMax(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->right) curr = curr->right;\n    return curr;\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    struct TreeNode* max = findMax(root);\n    printf("Maximum value in BST: %d\\n\", max->data);\n    return 0;\n}',
    hint: 'Keep going right until NULL'
  },
  {
    id: 'c_dsa_45',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete a node from Binary Search Tree.',
    mathSolution: 'Handle three cases (0, 1, or 2 children)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMin(struct TreeNode* root) {\n    while(root && root->left) root = root->left;\n    return root;\n}\n\nstruct TreeNode* deleteNode(struct TreeNode* root, int key) {\n    if(!root) return root;\n    if(key < root->data) root->left = deleteNode(root->left, key);\n    else if(key > root->data) root->right = deleteNode(root->right, key);\n    else {\n        if(!root->left) {\n            struct TreeNode* temp = root->right;\n            free(root);\n            return temp;\n        } else if(!root->right) {\n            struct TreeNode* temp = root->left;\n            free(root);\n            return temp;\n        }\n        struct TreeNode* temp = findMin(root->right);\n        root->data = temp->data;\n        root->right = deleteNode(root->right, temp->data);\n    }\n    return root;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    printf("Before deletion: \");\n    inorder(root);\n    \n    root = deleteNode(root, 70);\n    \n    printf("\\nAfter deleting 70: \");\n    inorder(root);\n    return 0;\n}',
    hint: '0, 1, or 2 children cases'
  },

  // ========== GRAPH BASICS (46-50) ==========
  {
    id: 'c_dsa_46',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement graph using adjacency matrix.',
    mathSolution: '2D array for edges',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint main() {\n    int graph[V][V] = {0};\n    \n    graph[0][1] = 1;\n    graph[0][2] = 1;\n    graph[1][2] = 1;\n    graph[2][0] = 1;\n    graph[2][3] = 1;\n    graph[3][3] = 1;\n    \n    printf("Adjacency Matrix:\\n");\n    for(int i = 0; i < V; i++) {\n        for(int j = 0; j < V; j++)\n            printf("%d ", graph[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Set graph[u][v] = 1 for edge'
  },
  {
    id: 'c_dsa_47',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement BFS traversal on graph.',
    mathSolution: 'Level order traversal',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint main() {\n    int graph[V][V] = {{0,1,1,0},{1,0,1,0},{1,1,0,1},{0,0,1,0}};\n    int visited[V] = {0};\n    int queue[V], front = 0, rear = 0;\n    int start = 0;\n    \n    visited[start] = 1;\n    queue[rear++] = start;\n    \n    printf("BFS Traversal: ");\n    while(front < rear) {\n        int u = queue[front++];\n        printf("%d ", u);\n        for(int v = 0; v < V; v++) {\n            if(graph[u][v] && !visited[v]) {\n                visited[v] = 1;\n                queue[rear++] = v;\n            }\n        }\n    }\n    return 0;\n}',
    hint: 'Use queue, mark visited when enqueued'
  },
  {
    id: 'c_dsa_48',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement DFS traversal on graph.',
    mathSolution: 'Depth first traversal',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nvoid DFS(int graph[V][V], int u, int visited[]) {\n    visited[u] = 1;\n    printf("%d ", u);\n    for(int v = 0; v < V; v++) {\n        if(graph[u][v] && !visited[v])\n            DFS(graph, v, visited);\n    }\n}\n\nint main() {\n    int graph[V][V] = {{0,1,1,0},{1,0,1,0},{1,1,0,1},{0,0,1,0}};\n    int visited[V] = {0};\n    \n    printf("DFS Traversal: ");\n    DFS(graph, 0, visited);\n    return 0;\n}',
    hint: 'Recursively visit unvisited neighbors'
  },
  {
    id: 'c_dsa_49',
    topicId: 'c_dsa_basic',
    question: 'Write a program to detect cycle in a directed graph using DFS.',
    mathSolution: 'Check for back edges',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint hasCycleDFS(int graph[V][V], int u, int visited[], int recStack[]) {\n    visited[u] = 1;\n    recStack[u] = 1;\n    \n    for(int v = 0; v < V; v++) {\n        if(graph[u][v]) {\n            if(!visited[v]) {\n                if(hasCycleDFS(graph, v, visited, recStack))\n                    return 1;\n            } else if(recStack[v])\n                return 1;\n        }\n    }\n    recStack[u] = 0;\n    return 0;\n}\n\nint main() {\n    int graph[V][V] = {{0,1,0,0},{0,0,1,0},{1,0,0,1},{0,0,0,0}};\n    int visited[V] = {0};\n    int recStack[V] = {0};\n    \n    for(int i = 0; i < V; i++) {\n        if(!visited[i]) {\n            if(hasCycleDFS(graph, i, visited, recStack)) {\n                printf("Cycle detected\\n\");\n                return 0;\n            }\n        }\n    }\n    printf(\"No cycle detected\\n\");\n    return 0;\n}',
    hint: 'Track recursion stack to detect cycles'
  },
  {
    id: 'c_dsa_50',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the number of connected components in an undirected graph.',
    mathSolution: 'Count components using DFS',
    codeSolution: '#include <stdio.h>\n#define V 5\n\nvoid DFS(int graph[V][V], int u, int visited[]) {\n    visited[u] = 1;\n    for(int v = 0; v < V; v++) {\n        if(graph[u][v] && !visited[v])\n            DFS(graph, v, visited);\n    }\n}\n\nint main() {\n    int graph[V][V] = {{0,1,0,0,0},{1,0,0,0,0},{0,0,0,1,0},{0,0,1,0,0},{0,0,0,0,0}};\n    int visited[V] = {0};\n    int components = 0;\n    \n    for(int i = 0; i < V; i++) {\n        if(!visited[i]) {\n            components++;\n            DFS(graph, i, visited);\n        }\n    }\n    printf("Number of connected components: %d\\n\", components);\n    return 0;\n}',
    hint: 'Each DFS call finds one component'
  }
);