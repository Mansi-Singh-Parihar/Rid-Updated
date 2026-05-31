QuizData.questions.push(
  // ========== ARRAY DECLARATION & BASIC OPERATIONS (1-10) ==========
  {
    id: 'c_arrays_1',
    topicId: 'c_arrays',
    question: 'Write a program to declare an integer array of size 5 and print its elements.',
    mathSolution: 'Array declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Use format: data_type array_name[size];'
  },
  {
    id: 'c_arrays_2',
    topicId: 'c_arrays',
    question: 'Write a program to initialize array with values 1 to 5 and print them.',
    mathSolution: 'Array initialization with values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use curly braces {} to list initial values'
  },
  {
    id: 'c_arrays_3',
    topicId: 'c_arrays',
    question: 'Write a program to access and print the third element of array {10,20,30,40,50}.',
    mathSolution: 'Array indexing (0-based)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    printf("Third element: %d\\n", arr[2]);\n    return 0;\n}',
    hint: 'Array indices start at 0'
  },
  {
    id: 'c_arrays_4',
    topicId: 'c_arrays',
    question: 'Write a program to change the first element of array to 100 and print.',
    mathSolution: 'Array element assignment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    arr[0] = 100;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use array name with index on left side of assignment'
  },
  {
    id: 'c_arrays_5',
    topicId: 'c_arrays',
    question: 'Write a program to find the length of array {2,4,6,8,10}.',
    mathSolution: 'Calculate array length using sizeof',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int length = sizeof(arr) / sizeof(arr[0]);\n    printf("Array length = %d\\n", length);\n    return 0;\n}',
    hint: 'Total size divided by element size'
  },
  {
    id: 'c_arrays_6',
    topicId: 'c_arrays',
    question: 'Write a program to print all elements of array {1,2,3,4,5} using for loop.',
    mathSolution: 'Iterate through array using loop',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Loop from 0 to size-1'
  },
  {
    id: 'c_arrays_7',
    topicId: 'c_arrays',
    question: 'Write a program to initialize a character array with "John" and print it.',
    mathSolution: 'String initialization in C',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char name[] = "John";\n    printf("Name: %s\\n", name);\n    return 0;\n}',
    hint: 'Strings are character arrays with null terminator'
  },
  {
    id: 'c_arrays_8',
    topicId: 'c_arrays',
    question: 'Write a program to declare a 2D integer array with 2 rows and 3 columns and initialize with values.',
    mathSolution: '2D array declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Format: type name[rows][columns]'
  },
  {
    id: 'c_arrays_9',
    topicId: 'c_arrays',
    question: 'Write a program to initialize a 2x3 integer array with all zeros.',
    mathSolution: 'Initialize 2D array to zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {0};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use {0} to initialize all elements to zero'
  },
  {
    id: 'c_arrays_10',
    topicId: 'c_arrays',
    question: 'Write a program to access element at row 1, column 2 of 2D array and print it.',
    mathSolution: '2D array indexing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    printf("Element at [1][2] = %d\\n", matrix[1][2]);\n    return 0;\n}',
    hint: 'Both row and column indices start at 0'
  },

  // ========== ARRAY OPERATIONS (11-20) ==========
  {
    id: 'c_arrays_11',
    topicId: 'c_arrays',
    question: 'Write a program to find sum of all elements in array {1,2,3,4,5}.',
    mathSolution: 'Calculate array sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for(int i = 0; i < 5; i++) {\n        sum += arr[i];\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Initialize sum to 0, add each element'
  },
  {
    id: 'c_arrays_12',
    topicId: 'c_arrays',
    question: 'Write a program to find largest element in array {23,45,12,67,34}.',
    mathSolution: 'Find maximum in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int max = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] > max) max = arr[i];\n    }\n    printf("Largest = %d\\n", max);\n    return 0;\n}',
    hint: 'Assume first element is max, then compare'
  },
  {
    id: 'c_arrays_13',
    topicId: 'c_arrays',
    question: 'Write a program to find smallest element in array {23,45,12,67,34}.',
    mathSolution: 'Find minimum in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int min = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] < min) min = arr[i];\n    }\n    printf("Smallest = %d\\n", min);\n    return 0;\n}',
    hint: 'Assume first element is min, then compare'
  },
  {
    id: 'c_arrays_14',
    topicId: 'c_arrays',
    question: 'Write a program to reverse array {1,2,3,4,5} in-place.',
    mathSolution: 'Reverse array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int temp;\n    for(int i = 0; i < 5/2; i++) {\n        temp = arr[i];\n        arr[i] = arr[4-i];\n        arr[4-i] = temp;\n    }\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_arrays_15',
    topicId: 'c_arrays',
    question: 'Write a program to copy array "source" to "destination".',
    mathSolution: 'Copy array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int source[] = {10,20,30,40,50};\n    int destination[5];\n    for(int i = 0; i < 5; i++) {\n        destination[i] = source[i];\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", destination[i]);\n    }\n    return 0;\n}',
    hint: 'Loop through each element and assign'
  },
  {
    id: 'c_arrays_16',
    topicId: 'c_arrays',
    question: 'Write a program to count elements greater than 10 in array {5,15,8,20,3,12}.',
    mathSolution: 'Count elements satisfying condition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5, 15, 8, 20, 3, 12};\n    int count = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] > 10) count++;\n    }\n    printf("Elements greater than 10: %d\\n", count);\n    return 0;\n}',
    hint: 'Increment count when condition is true'
  },
  {
    id: 'c_arrays_17',
    topicId: 'c_arrays',
    question: 'Write a program to declare array without specifying size using initializer.',
    mathSolution: 'Compiler determines size from initializer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    printf("Size = %d\\n", size);\n    return 0;\n}',
    hint: 'Empty brackets [] lets compiler count elements'
  },
  {
    id: 'c_arrays_18',
    topicId: 'c_arrays',
    question: 'Write a program to calculate average of array {10,20,30,40,50}.',
    mathSolution: 'Calculate average of array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    for(int i = 0; i < 5; i++) {\n        sum += arr[i];\n    }\n    float avg = (float)sum / 5;\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float for decimal result'
  },
  {
    id: 'c_arrays_19',
    topicId: 'c_arrays',
    question: 'Write a program to count even and odd numbers in array {1,2,3,4,5,6}.',
    mathSolution: 'Count even and odd',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6};\n    int even = 0, odd = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] % 2 == 0) even++;\n        else odd++;\n    }\n    printf("Even: %d, Odd: %d\\n", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check even/odd'
  },
  {
    id: 'c_arrays_20',
    topicId: 'c_arrays',
    question: 'Write a program to separate even and odd numbers from array into two arrays.',
    mathSolution: 'Separate even and odd',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6,7,8};\n    int even[10], odd[10];\n    int e=0, o=0;\n    for(int i = 0; i < 8; i++) {\n        if(arr[i] % 2 == 0)\n            even[e++] = arr[i];\n        else\n            odd[o++] = arr[i];\n    }\n    printf("Even: ");\n    for(int i = 0; i < e; i++) printf("%d ", even[i]);\n    printf("\\nOdd: ");\n    for(int i = 0; i < o; i++) printf("%d ", odd[i]);\n    return 0;\n}',
    hint: 'Check arr[i] % 2 to determine even/odd'
  },

  // ========== 2D ARRAY OPERATIONS (21-30) ==========
  {
    id: 'c_arrays_21',
    topicId: 'c_arrays',
    question: 'Write a program to print 2D matrix {{1,2,3},{4,5,6}} in matrix format.',
    mathSolution: 'Print 2D array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use nested loops, print newline after each row'
  },
  {
    id: 'c_arrays_22',
    topicId: 'c_arrays',
    question: 'Write a program to find sum of all elements in 3x3 matrix {{1,2,3},{4,5,6},{7,8,9}}.',
    mathSolution: 'Sum of 2D array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Nested loops to access each element'
  },
  {
    id: 'c_arrays_23',
    topicId: 'c_arrays',
    question: 'Write a program to find transpose of 2x3 matrix {{1,2,3},{4,5,6}}.',
    mathSolution: 'Matrix transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    int transpose[3][2];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            transpose[j][i] = matrix[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", transpose[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap rows and columns: result[j][i] = original[i][j]'
  },
  {
    id: 'c_arrays_24',
    topicId: 'c_arrays',
    question: 'Write a program to add two 2x2 matrices {{1,2},{3,4}} and {{5,6},{7,8}}.',
    mathSolution: 'Matrix addition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n        }\n    }\n    printf("Result:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements'
  },
  {
    id: 'c_arrays_25',
    topicId: 'c_arrays',
    question: 'Write a program to find diagonal sum of 3x3 matrix {{1,2,3},{4,5,6},{7,8,9}}.',
    mathSolution: 'Diagonal sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        sum += matrix[i][i];\n    }\n    printf("Main diagonal sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have i == j'
  },
  {
    id: 'c_arrays_26',
    topicId: 'c_arrays',
    question: 'Write a program to check if two arrays are equal.',
    mathSolution: 'Compare arrays',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr1[] = {1,2,3,4,5};\n    int arr2[] = {1,2,3,4,5};\n    int equal = 1;\n    for(int i = 0; i < 5; i++) {\n        if(arr1[i] != arr2[i]) {\n            equal = 0;\n            break;\n        }\n    }\n    if(equal) printf("Arrays are equal\\n");\n    else printf("Arrays are not equal\\n");\n    return 0;\n}',
    hint: 'Assume equal, set flag to 0 if mismatch found'
  },
  {
    id: 'c_arrays_27',
    topicId: 'c_arrays',
    question: 'Write a program to merge two sorted arrays {1,3,5} and {2,4,6}.',
    mathSolution: 'Merge sorted arrays',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[] = {1,3,5};\n    int b[] = {2,4,6};\n    int c[6];\n    int i=0, j=0, k=0;\n    while(i < 3 && j < 3) {\n        if(a[i] < b[j])\n            c[k++] = a[i++];\n        else\n            c[k++] = b[j++];\n    }\n    while(i < 3) c[k++] = a[i++];\n    while(j < 3) c[k++] = b[j++];\n    printf("Merged array: ");\n    for(i = 0; i < 6; i++) printf("%d ", c[i]);\n    return 0;\n}',
    hint: 'Compare and pick smaller element each time'
  },
  {
    id: 'c_arrays_28',
    topicId: 'c_arrays',
    question: 'Write a program to remove duplicates from sorted array {1,1,2,2,3,4,4}.',
    mathSolution: 'Remove duplicates in-place',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int j = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] != arr[i+1])\n            arr[j++] = arr[i];\n    }\n    arr[j++] = arr[6];\n    printf("After removing duplicates: ");\n    for(int i = 0; i < j; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Keep track of unique elements position'
  },
  {
    id: 'c_arrays_29',
    topicId: 'c_arrays',
    question: 'Write a program to left rotate array {1,2,3,4,5} by one position.',
    mathSolution: 'Rotate array left',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int first = arr[0];\n    for(int i = 0; i < 4; i++) {\n        arr[i] = arr[i+1];\n    }\n    arr[4] = first;\n    printf("After left rotate: ");\n    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Save first element, shift left, place first at end'
  },
  {
    id: 'c_arrays_30',
    topicId: 'c_arrays',
    question: 'Write a program to find second largest element in array {10,45,2,78,34}.',
    mathSolution: 'Find second maximum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int largest = arr[0], second = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] > largest) {\n            second = largest;\n            largest = arr[i];\n        } else if(arr[i] > second && arr[i] != largest) {\n            second = arr[i];\n        }\n    }\n    printf("Second largest = %d\\n", second);\n    return 0;\n}',
    hint: 'Track both largest and second largest'
  },

  // ========== SEARCHING AND SORTING (31-40) ==========
  {
    id: 'c_arrays_31',
    topicId: 'c_arrays',
    question: 'Write a program to implement linear search for 30 in array {10,20,30,40,50}.',
    mathSolution: 'Linear search algorithm',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int key = 30, found = -1;\n    for(int i = 0; i < 5; i++) {\n        if(arr[i] == key) {\n            found = i;\n            break;\n        }\n    }\n    if(found != -1) printf("Found at index %d\\n", found);\n    else printf("Not found\\n");\n    return 0;\n}',
    hint: 'Return index if found, -1 otherwise'
  },
  {
    id: 'c_arrays_32',
    topicId: 'c_arrays',
    question: 'Write a program to implement bubble sort on array {64,34,25,12,22,11,90}.',
    mathSolution: 'Bubble sort implementation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    int n = 7, temp;\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf("Sorted array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent elements and swap if needed'
  },
  {
    id: 'c_arrays_33',
    topicId: 'c_arrays',
    question: 'Write a program to implement binary search on sorted array {10,23,45,70,90}.',
    mathSolution: 'Binary search algorithm',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,23,45,70,90};\n    int key = 45, left = 0, right = 4, mid;\n    while(left <= right) {\n        mid = left + (right - left)/2;\n        if(arr[mid] == key) break;\n        if(arr[mid] < key) left = mid + 1;\n        else right = mid - 1;\n    }\n    if(arr[mid] == key) printf("Found at index %d\\n", mid);\n    else printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer, requires sorted array'
  },
  {
    id: 'c_arrays_34',
    topicId: 'c_arrays',
    question: 'Write a program to insert element 25 at position 2 in array {10,20,30,40}.',
    mathSolution: 'Array insertion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {10,20,30,40};\n    int n = 4, pos = 2, value = 25;\n    for(int i = n; i > pos; i--) {\n        arr[i] = arr[i-1];\n    }\n    arr[pos] = value;\n    n++;\n    printf("After insertion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements right from the end'
  },
  {
    id: 'c_arrays_35',
    topicId: 'c_arrays',
    question: 'Write a program to delete element at position 2 from array {10,20,30,40}.',
    mathSolution: 'Array deletion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40};\n    int n = 4, pos = 2;\n    for(int i = pos; i < n-1; i++) {\n        arr[i] = arr[i+1];\n    }\n    n--;\n    printf("After deletion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements left from position'
  },
  {
    id: 'c_arrays_36',
    topicId: 'c_arrays',
    question: 'Write a program to find missing number in array {1,2,3,5,6} (1-6).',
    mathSolution: 'Find missing number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,5,6};\n    int n = 6;\n    int total = n*(n+1)/2;\n    int sum = 0;\n    for(int i = 0; i < 5; i++) sum += arr[i];\n    printf("Missing number = %d\\n", total - sum);\n    return 0;\n}',
    hint: 'Use sum formula: n(n+1)/2'
  },
  {
    id: 'c_arrays_37',
    topicId: 'c_arrays',
    question: 'Write a program to find first repeating element in array {1,2,3,2,4,5}.',
    mathSolution: 'First repeating element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,2,4,5};\n    int freq[100] = {0};\n    for(int i = 0; i < 6; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] > 1) {\n            printf("First repeating: %d\\n", arr[i]);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Track frequency and check for >1'
  },
  {
    id: 'c_arrays_38',
    topicId: 'c_arrays',
    question: 'Write a program to find maximum product of two integers in array {10,20,30,5,25}.',
    mathSolution: 'Maximum product pair',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,5,25};\n    int max1 = arr[0], max2 = arr[1];\n    for(int i = 2; i < 5; i++) {\n        if(arr[i] > max1) {\n            max2 = max1;\n            max1 = arr[i];\n        } else if(arr[i] > max2) {\n            max2 = arr[i];\n        }\n    }\n    printf("Maximum product = %d\\n\", max1 * max2);\n    return 0;\n}',
    hint: 'Find two largest numbers'
  },
  {
    id: 'c_arrays_39',
    topicId: 'c_arrays',
    question: 'Write a program to move all zeros to end in array {0,1,0,3,12}.',
    mathSolution: 'Move zeros to end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {0,1,0,3,12};\n    int n = 5, nonZero = 0;\n    for(int i = 0; i < n; i++) {\n        if(arr[i] != 0)\n            arr[nonZero++] = arr[i];\n    }\n    while(nonZero < n)\n        arr[nonZero++] = 0;\n    printf("After moving zeros: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift non-zero elements forward'
  },
  {
    id: 'c_arrays_40',
    topicId: 'c_arrays',
    question: 'Write a program to find leaders in array {16,17,4,3,5,2}.',
    mathSolution: 'Leaders in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {16,17,4,3,5,2};\n    int n = 6, max_from_right = arr[n-1];\n    printf("Leaders: %d ", max_from_right);\n    for(int i = n-2; i >= 0; i--) {\n        if(arr[i] > max_from_right) {\n            max_from_right = arr[i];\n            printf("%d ", arr[i]);\n        }\n    }\n    return 0;\n}',
    hint: 'Traverse from right, keep track of maximum'
  },

  // ========== ADVANCED ARRAY PROBLEMS (41-50) ==========
  {
    id: 'c_arrays_41',
    topicId: 'c_arrays',
    question: 'Write a program to find subarray with maximum sum in array {-2,1,-3,4,-1,2,1,-5,4}.',
    mathSolution: 'Maximum subarray sum (Kadane)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {-2,1,-3,4,-1,2,1,-5,4};\n    int n = 9;\n    int max_so_far = arr[0];\n    int max_ending_here = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max_ending_here + arr[i])\n            max_ending_here = arr[i];\n        else\n            max_ending_here = max_ending_here + arr[i];\n        if(max_ending_here > max_so_far)\n            max_so_far = max_ending_here;\n    }\n    printf("Maximum subarray sum = %d\\n", max_so_far);\n    return 0;\n}',
    hint: 'Dynamic programming approach'
  },
  {
    id: 'c_arrays_42',
    topicId: 'c_arrays',
    question: 'Write a program to rotate array {1,2,3,4,5} right by 2 positions.',
    mathSolution: 'Array rotation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, k = 2, temp[5];\n    for(int i = 0; i < n; i++) {\n        temp[(i + k) % n] = arr[i];\n    }\n    for(int i = 0; i < n; i++) arr[i] = temp[i];\n    printf("Rotated array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Use temporary array for rotation'
  },
  {
    id: 'c_arrays_43',
    topicId: 'c_arrays',
    question: 'Write a program to find the majority element (appears > n/2) in array {3,3,4,2,4,4,2,4,4}.',
    mathSolution: 'Moore\'s Voting Algorithm',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {3,3,4,2,4,4,2,4,4};\n    int n = 9, candidate = arr[0], count = 1;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] == candidate) count++;\n        else count--;\n        if(count == 0) {\n            candidate = arr[i];\n            count = 1;\n        }\n    }\n    count = 0;\n    for(int i = 0; i < n; i++) if(arr[i] == candidate) count++;\n    if(count > n/2) printf("Majority element: %d\\n", candidate);\n    else printf("No majority element\\n");\n    return 0;\n}',
    hint: 'Cancel out different elements'
  },
  {
    id: 'c_arrays_44',
    topicId: 'c_arrays',
    question: 'Write a program to find the pair with sum closest to zero in array {1,60,-10,70,-80,85}.',
    mathSolution: 'Sum closest to zero',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int arr[] = {1,60,-10,70,-80,85};\n    int n = 6, min_sum = abs(arr[0] + arr[1]);\n    int p1 = 0, p2 = 1;\n    for(int i = 0; i < n-1; i++) {\n        for(int j = i+1; j < n; j++) {\n            int sum = abs(arr[i] + arr[j]);\n            if(sum < min_sum) {\n                min_sum = sum;\n                p1 = i; p2 = j;\n            }\n        }\n    }\n    printf("Pair: %d and %d (sum = %d)\\n", arr[p1], arr[p2], arr[p1]+arr[p2]);\n    return 0;\n}',
    hint: 'Compare absolute sums'
  },
  {
    id: 'c_arrays_45',
    topicId: 'c_arrays',
    question: 'Write a program to find longest consecutive subsequence in array {1,9,3,10,4,20,2}.',
    mathSolution: 'Longest consecutive sequence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,9,3,10,4,20,2};\n    int n = 7, max_len = 1;\n    // Simple approach - sort first\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    int current = 1;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] == arr[i-1] + 1) current++;\n        else if(arr[i] != arr[i-1]) {\n            if(current > max_len) max_len = current;\n            current = 1;\n        }\n    }\n    if(current > max_len) max_len = current;\n    printf("Longest consecutive length = %d\\n\", max_len);\n    return 0;\n}',
    hint: 'Sort then find consecutive runs'
  },
  {
    id: 'c_arrays_46',
    topicId: 'c_arrays',
    question: 'Write a program to find equilibrium index in array {-7,1,5,2,-4,3,0}.',
    mathSolution: 'Equilibrium index',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {-7,1,5,2,-4,3,0};\n    int n = 7, total = 0, left = 0;\n    for(int i = 0; i < n; i++) total += arr[i];\n    for(int i = 0; i < n; i++) {\n        total -= arr[i];\n        if(left == total) {\n            printf("Equilibrium at index %d\\n", i);\n            break;\n        }\n        left += arr[i];\n    }\n    return 0;\n}',
    hint: 'Maintain left sum and right sum'
  },
  {
    id: 'c_arrays_47',
    topicId: 'c_arrays',
    question: 'Write a program to find intersection of two arrays {1,2,3,4,5} and {3,4,5,6,7}.',
    mathSolution: 'Array intersection',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[] = {1,2,3,4,5};\n    int b[] = {3,4,5,6,7};\n    printf("Intersection: ");\n    for(int i = 0; i < 5; i++) {\n        for(int j = 0; j < 5; j++) {\n            if(a[i] == b[j]) {\n                printf("%d ", a[i]);\n                break;\n            }\n        }\n    }\n    return 0;\n}',
    hint: 'Compare each element of first with second'
  },
  {
    id: 'c_arrays_48',
    topicId: 'c_arrays',
    question: 'Write a program to find the element that appears once when others appear twice in {2,3,2,4,3}.',
    mathSolution: 'Find single element using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2,3,2,4,3};\n    int result = 0;\n    for(int i = 0; i < 5; i++) {\n        result ^= arr[i];\n    }\n    printf("Element appearing once: %d\\n", result);\n    return 0;\n}',
    hint: 'Use XOR: a^a = 0, a^0 = a'
  },
  {
    id: 'c_arrays_49',
    topicId: 'c_arrays',
    question: 'Write a program to find smallest positive missing number in {2,3,-7,6,8,1,-10,15}.',
    mathSolution: 'Smallest positive missing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2,3,-7,6,8,1,-10,15};\n    int present[100] = {0};\n    for(int i = 0; i < 8; i++) {\n        if(arr[i] > 0)\n            present[arr[i]] = 1;\n    }\n    for(int i = 1; i < 100; i++) {\n        if(!present[i]) {\n            printf("Smallest missing positive: %d\\n", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Mark present numbers, find first missing'
  },
  {
    id: 'c_arrays_50',
    topicId: 'c_arrays',
    question: 'Write a program to find next greater element for each element in array {4,5,2,25}.',
    mathSolution: 'Next greater element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {4,5,2,25};\n    for(int i = 0; i < 4; i++) {\n        int next = -1;\n        for(int j = i+1; j < 4; j++) {\n            if(arr[j] > arr[i]) {\n                next = arr[j];\n                break;\n            }\n        }\n        printf("%d -> %d\\n", arr[i], next);\n    }\n    return 0;\n}',
    hint: 'For each element, scan right for greater'
  }
);