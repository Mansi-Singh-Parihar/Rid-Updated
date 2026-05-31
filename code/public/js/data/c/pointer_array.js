QuizData.questions.push(
  // ========== BASIC POINTER-ARRAY RELATIONSHIP (1-10) ==========
  {
    id: 'c_ptrarr_1',
    topicId: 'c_pointer_array',
    question: 'Write a program to show that array name is pointer to first element.',
    mathSolution: 'arr equals &arr[0]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    if(arr == &arr[0])\n        printf("Array name points to first element\\n");\n    else\n        printf("Not equal\\n");\n    printf("Address of arr: %p\\n", (void*)arr);\n    printf("Address of &arr[0]: %p\\n", (void*)&arr[0]);\n    return 0;\n}',
    hint: 'Array name decays to pointer'
  },
  {
    id: 'c_ptrarr_2',
    topicId: 'c_pointer_array',
    question: 'Write a program to print array elements using pointer arithmetic.',
    mathSolution: '*(arr + i) gives arr[i]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    printf("Array elements: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", *(arr + i));\n    }\n    return 0;\n}',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptrarr_3',
    topicId: 'c_pointer_array',
    question: 'Write a program to find address difference between consecutive array elements.',
    mathSolution: '&arr[1] - &arr[0] = 1 (in elements)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    long diff = &arr[1] - &arr[0];\n    printf("Difference between consecutive elements: %ld\\n", diff);\n    printf("Byte difference: %ld\\n", (long)((char*)&arr[1] - (char*)&arr[0]));\n    return 0;\n}',
    hint: 'Pointer difference gives element count'
},
  {
    id: 'c_ptrarr_4',
    topicId: 'c_pointer_array',
    question: 'Write a program to show sizeof(arr) vs sizeof(ptr) difference.',
    mathSolution: 'Array size vs pointer size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10];\n    int *ptr = arr;\n    printf("sizeof(arr): %zu bytes\\n", sizeof(arr));\n    printf("sizeof(ptr): %zu bytes\\n", sizeof(ptr));\n    return 0;\n}',
    hint: 'sizeof(arr) gives total bytes, sizeof(ptr) gives pointer size'
  },
  {
    id: 'c_ptrarr_5',
    topicId: 'c_pointer_array',
    question: 'Write a program to access array in reverse order using pointer.',
    mathSolution: 'Start from last element and decrement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    int *p = arr + n - 1;\n    printf("Array in reverse: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", *p--);\n    }\n    return 0;\n}',
    hint: 'Decrement pointer to go backward'
  },
  {
    id: 'c_ptrarr_6',
    topicId: 'c_pointer_array',
    question: 'Write a program to find middle element using pointer arithmetic.',
    mathSolution: 'arr + n/2 points to middle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5;\n    int *mid = arr + n/2;\n    printf("Middle element: %d\\n", *mid);\n    return 0;\n}',
    hint: 'Add offset to base'
  },
 {
    id: 'c_ptrarr_7',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if pointer is within array bounds.',
    mathSolution: 'Compare with arr and arr+n',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr + 3;\n    int n = 5;\n    if(p >= arr && p < arr + n) {\n        printf("Pointer is within array bounds\\n");\n        printf("Value: %d\\n", *p);\n    }\n    return 0;\n}',
    hint: 'Valid range is [arr, arr+n)'
},
  {
    id: 'c_ptrarr_8',
    topicId: 'c_pointer_array',
    question: 'Write a program to find number of elements between two pointers.',
    mathSolution: 'ptr2 - ptr1 gives element count',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *start = &arr[1];\n    int *end = &arr[4];\n    ptrdiff_t count = end - start;\n    printf("Number of elements: %td\\n", count);\n    return 0;\n}',
    hint: 'Both must point to same array'
  },
  {
    id: 'c_ptrarr_9',
    topicId: 'c_pointer_array',
    question: 'Write a program to compare pointers for relative position.',
    mathSolution: 'p < q means p points to earlier element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = &arr[1];\n    int *q = &arr[3];\n    if(p < q) {\n        printf("p points to earlier element\\n");\n    }\n    return 0;\n}',
    hint: 'Pointer comparison works in same array'
  },
  {
    id: 'c_ptrarr_10',
    topicId: 'c_pointer_array',
    question: 'Write a program to traverse array using pointer.',
    mathSolution: 'Increment pointer until end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr;\n    printf("Array elements: ");\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        printf("%d ", *ptr);\n    }\n    return 0;\n}',
    hint: 'Use pointer as loop variable'
  },

  // ========== ARRAY OF POINTERS (11-20) ==========
  {
    id: 'c_ptrarr_11',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of pointers to integers.',
    mathSolution: 'Each element can point to an int',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    int *ptrArr[3] = {&a, &b, &c};\n    for(int i = 0; i < 3; i++) {\n        printf("Value %d: %d\\n", i, *ptrArr[i]);\n    }\n    return 0;\n}',
    hint: '[] has higher precedence than *'
  },
  {
    id: 'c_ptrarr_12',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Orange", "Mango", "Grape"};\n    for(int i = 0; i < 5; i++) {\n        printf("%s\\n", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptrarr_13',
    topicId: 'c_pointer_array',
    question: 'Write a program to sort array of strings using pointer array.',
    mathSolution: 'Rearrange pointers, not strings',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *fruits[] = {"Banana", "Apple", "Grape", "Mango", "Cherry"};\n    int n = 5;\n    for(int i = 0; i < n-1; i++) {\n        for(int j = i+1; j < n; j++) {\n            if(strcmp(fruits[i], fruits[j]) > 0) {\n                char *temp = fruits[i];\n                fruits[i] = fruits[j];\n                fruits[j] = temp;\n            }\n        }\n    }\n    printf("Sorted strings: ");\n    for(int i = 0; i < n; i++) {\n        printf("%s ", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Swap pointers only'
  },
  {
    id: 'c_ptrarr_14',
    topicId: 'c_pointer_array',
    question: 'Write a program to find longest string in array using pointers.',
    mathSolution: 'Compare string lengths',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *words[] = {"Hello", "Beautiful", "World", "C", "Programming"};\n    int n = 5;\n    char *longest = words[0];\n    for(int i = 1; i < n; i++) {\n        if(strlen(words[i]) > strlen(longest)) {\n            longest = words[i];\n        }\n    }\n    printf("Longest string: %s\\n", longest);\n    return 0;\n}',
    hint: 'Keep pointer to longest'
  },
  {
    id: 'c_ptrarr_15',
    topicId: 'c_pointer_array',
    question: 'Write a program to concatenate all strings in array.',
    mathSolution: 'Join strings into one buffer',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *words[] = {"Hello", " ", "World", " from ", "C"};\n    char result[100] = "";\n    for(int i = 0; i < 5; i++) {\n        strcat(result, words[i]);\n    }\n    printf("Concatenated: %s\\n", result);\n    return 0;\n}',
    hint: 'Use strcat repeatedly'
  },
  {
    id: 'c_ptrarr_16',
    topicId: 'c_pointer_array',
    question: 'Write a program to declare pointer to array of 5 integers.',
    mathSolution: 'Points to entire array, not first element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int (*ptr)[5] = &arr;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", (*ptr)[i]);\n    }\n    return 0;\n}',
    hint: 'Parentheses needed: (*ptr)[5]'
  },
  {
    id: 'c_ptrarr_17',
    topicId: 'c_pointer_array',
    question: 'Write a program to find size of pointer to array vs array.',
    mathSolution: 'sizeof(*ptr) gives array size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10];\n    int (*ptr)[10] = &arr;\n    printf("sizeof(ptr): %zu bytes\\n", sizeof(ptr));\n    printf("sizeof(*ptr): %zu bytes\\n", sizeof(*ptr));\n    return 0;\n}',
    hint: 'ptr size is pointer, *ptr is array'
  },
  {
    id: 'c_ptrarr_18',
    topicId: 'c_pointer_array',
    question: 'Write a program to create jagged array using pointer array.',
    mathSolution: 'Each row can have different size',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *jagged[3];\n    int size[3] = {2, 4, 3};\n    for(int i = 0; i < 3; i++) {\n        jagged[i] = (int*)malloc(size[i] * sizeof(int));\n        for(int j = 0; j < size[i]; j++) {\n            jagged[i][j] = i * 10 + j + 1;\n        }\n    }\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < size[i]; j++) {\n            printf("%d ", jagged[i][j]);\n        }\n        printf("\\n");\n        free(jagged[i]);\n    }\n    return 0;\n}',
    hint: 'Array of pointers, each to different size'
  },
  {
    id: 'c_ptrarr_19',
    topicId: 'c_pointer_array',
    question: 'Write a program to create dynamic 2D array using pointer to pointer.',
    mathSolution: 'Allocate rows, then each row',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Double pointer for dynamic 2D'
  },
  {
    id: 'c_ptrarr_20',
    topicId: 'c_pointer_array',
    question: 'Write a program to pass 2D array to function using pointer to array.',
    mathSolution: 'Pointer to array parameter',
    codeSolution: '#include <stdio.h>\n\nvoid printMatrix(int (*mat)[3], int rows) {\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n}\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    printMatrix(matrix, 2);\n    return 0;\n}',
    hint: 'Column size must be known'
  },

  // ========== 2D ARRAYS AND POINTERS (21-30) ==========
  {
    id: 'c_ptrarr_21',
    topicId: 'c_pointer_array',
    question: 'Write a program to traverse 2D array using row pointer.',
    mathSolution: 'Increment row pointer to move to next row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int (*rowPtr)[3] = mat;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", rowPtr[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Each increment skips one row'
  },
  {
    id: 'c_ptrarr_22',
    topicId: 'c_pointer_array',
    question: 'Write a program to access 2D array using flattened pointer.',
    mathSolution: 'ptr[i*cols + j] equals arr[i][j]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {{1,2,3},{4,5,6}};\n    int *ptr = &mat[0][0];\n    int rows = 2, cols = 3;\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", ptr[i * cols + j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Calculate linear index'
  },
  {
    id: 'c_ptrarr_23',
    topicId: 'c_pointer_array',
    question: 'Write a program to transpose matrix using pointer array.',
    mathSolution: 'Swap rows and columns',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int transpose[3][3];\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            transpose[j][i] = mat[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", transpose[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap elements across diagonal'
  },
  {
    id: 'c_ptrarr_24',
    topicId: 'c_pointer_array',
    question: 'Write a program to multiply two matrices.',
    mathSolution: 'Result[i][j] = sum(A[i][k] * B[k][j])',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int A[2][2] = {{1,2},{3,4}};\n    int B[2][2] = {{5,6},{7,8}};\n    int C[2][2] = {0};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            for(int k = 0; k < 2; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n    printf("Product:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Triple nested loops'
  },
  {
    id: 'c_ptrarr_25',
    topicId: 'c_pointer_array',
    question: 'Write a program to find sum of diagonal elements.',
    mathSolution: 'Elements where i == j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        sum += mat[i][i];\n    }\n    printf("Sum of diagonal: %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have i == j'
  },
  {
    id: 'c_ptrarr_26',
    topicId: 'c_pointer_array',
    question: 'Write a program to create lookup table using array of pointers.',
    mathSolution: 'Pointers to constant strings',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char *months[] = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"};\n    int month = 5;\n    printf("Month %d: %s\\n", month, months[month-1]);\n    return 0;\n}',
    hint: 'Index by month number'
  },
  {
    id: 'c_ptrarr_27',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of function pointers for calculator.',
    mathSolution: 'Multiple functions in array',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int (*ops[])(int, int) = {add, sub, mul};\n    int a = 10, b = 5;\n    for(int i = 0; i < 3; i++) {\n        printf("Result %d: %d\\n", i, ops[i](a, b));\n    }\n    return 0;\n}',
    hint: 'Each element points to function'
  },
  {
    id: 'c_ptrarr_28',
    topicId: 'c_pointer_array',
    question: 'Write a program to pass array of pointers to function.',
    mathSolution: 'Function receives pointer array',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid printStrings(char *arr[], int n) {\n    for(int i = 0; i < n; i++) {\n        printf("%s\\n", arr[i]);\n    }\n}\n\nint main() {\n    char *colors[] = {"Red", "Green", "Blue"};\n    printStrings(colors, 3);\n    return 0;\n}',
    hint: 'Array of string pointers parameter'
  },
  {
    id: 'c_ptrarr_29',
    topicId: 'c_pointer_array',
    question: 'Write a program to store command line arguments simulation.',
    mathSolution: 'argv is array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "Hello", "World", "C"};\n    int argc = 4;\n    for(int i = 0; i < argc; i++) {\n        printf("argv[%d] = %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_ptrarr_30',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of pointers to structures.',
    mathSolution: 'Each element points to struct',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student *students[3];\n    for(int i = 0; i < 3; i++) {\n        students[i] = (struct Student*)malloc(sizeof(struct Student));\n        sprintf(students[i]->name, "Student%d\", i+1);\n        students[i]->age = 20 + i;\n    }\n    for(int i = 0; i < 3; i++) {\n        printf("%s: %d years\\n", students[i]->name, students[i]->age);\n        free(students[i]);\n    }\n    return 0;\n}',
    hint: 'Array of struct pointers'
  },

  // ========== VOID POINTERS AND GENERIC ARRAYS (31-40) ==========
  {
    id: 'c_ptrarr_31',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of void pointers (generic).',
    mathSolution: 'Can point to any type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 42;\n    float f = 3.14;\n    char c = \'A\';\n    void *generic[3] = {&i, &f, &c};\n    printf("Integer: %d\\n", *(int*)generic[0]);\n    printf("Float: %.2f\\n", *(float*)generic[1]);\n    printf("Char: %c\\n", *(char*)generic[2]);\n    return 0;\n}',
    hint: 'Store any address type'
  },
  {
    id: 'c_ptrarr_32',
    topicId: 'c_pointer_array',
    question: 'Write a program to sort integers using pointer array (index sort).',
    mathSolution: 'Sort pointers, leave original',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {45, 12, 78, 23, 56};\n    int n = 5;\n    int *ptrs[5];\n    for(int i = 0; i < n; i++) ptrs[i] = &arr[i];\n    for(int i = 0; i < n-1; i++) {\n        for(int j = i+1; j < n; j++) {\n            if(*ptrs[i] > *ptrs[j]) {\n                int *temp = ptrs[i];\n                ptrs[i] = ptrs[j];\n                ptrs[j] = temp;\n            }\n        }\n    }\n    printf("Sorted order: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", *ptrs[i]);\n    }\n    return 0;\n}',
    hint: 'Indirect sorting'
  },
  {
    id: 'c_ptrarr_33',
    topicId: 'c_pointer_array',
    question: 'Write a program to implement ring buffer using array of pointers.',
    mathSolution: 'Circular buffer of data pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int data[8] = {10,20,30,40,50,60,70,80};\n    int *buffer[5];\n    int head = 0;\n    for(int i = 0; i < 5; i++) {\n        buffer[i] = &data[head];\n        head = (head + 1) % 8;\n    }\n    printf("Ring buffer elements: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", *buffer[i]);\n    }\n    return 0;\n}',
    hint: 'Store pointers to data'
  },
  {
    id: 'c_ptrarr_34',
    topicId: 'c_pointer_array',
    question: 'Write a program to find if array is sorted using pointers.',
    mathSolution: 'Compare consecutive elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5, sorted = 1;\n    for(int *p = arr; p < arr + n - 1; p++) {\n        if(*p > *(p + 1)) {\n            sorted = 0;\n            break;\n        }\n    }\n    if(sorted) printf("Array is sorted\\n");\n    else printf("Array is not sorted\\n");\n    return 0;\n}',
    hint: 'Check adjacent elements'
  },
  {
    id: 'c_ptrarr_35',
    topicId: 'c_pointer_array',
    question: 'Write a program to find second largest element using pointers.',
    mathSolution: 'Track largest and second largest',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 45, 12, 78, 34};\n    int n = 5;\n    int *largest = &arr[0];\n    int *second = &arr[0];\n    for(int *p = arr + 1; p < arr + n; p++) {\n        if(*p > *largest) {\n            second = largest;\n            largest = p;\n        } else if(*p > *second && *p != *largest) {\n            second = p;\n        }\n    }\n    printf("Second largest: %d\\n", *second);\n    return 0;\n}',
    hint: 'Keep track of both'
  },
  {
    id: 'c_ptrarr_36',
    topicId: 'c_pointer_array',
    question: 'Write a program to remove duplicates from sorted array using pointers.',
    mathSolution: 'Shift elements left when duplicate found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int n = 7;\n    int *write = arr;\n    for(int *read = arr + 1; read < arr + n; read++) {\n        if(*read != *write) {\n            write++;\n            *write = *read;\n        }\n    }\n    int newSize = write - arr + 1;\n    printf("Array without duplicates: ");\n    for(int i = 0; i < newSize; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers'
  },
  {
    id: 'c_ptrarr_37',
    topicId: 'c_pointer_array',
    question: 'Write a program to implement linear search using pointer array.',
    mathSolution: 'Compare each element with key',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30;\n    int *found = NULL;\n    for(int *p = arr; p < arr + 5; p++) {\n        if(*p == key) {\n            found = p;\n            break;\n        }\n    }\n    if(found != NULL) {\n        printf("Found %d at index %td\\n", key, found - arr);\n    } else {\n        printf("Not found\\n");\n    }\n    return 0;\n}',
    hint: 'Use pointer to track position'
  },
  {
    id: 'c_ptrarr_38',
    topicId: 'c_pointer_array',
    question: 'Write a program to copy one array to another using pointers.',
    mathSolution: 'Copy element by element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int src[] = {10, 20, 30, 40, 50};\n    int dest[5];\n    int *s = src, *d = dest;\n    for(int i = 0; i < 5; i++) {\n        *d = *s;\n        s++;\n        d++;\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", dest[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers'
  },
  {
    id: 'c_ptrarr_39',
    topicId: 'c_pointer_array',
    question: 'Write a program to find maximum difference between two elements using pointers.',
    mathSolution: 'Track minimum so far and maximum difference',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 7, 9, 5, 1, 3, 5};\n    int n = 7;\n    int *min = arr;\n    int max_diff = arr[1] - arr[0];\n    for(int *p = arr + 1; p < arr + n; p++) {\n        if(*p - *min > max_diff) {\n            max_diff = *p - *min;\n        }\n        if(*p < *min) {\n            min = p;\n        }\n    }\n    printf("Maximum difference: %d\\n", max_diff);\n    return 0;\n}',
    hint: 'Track minimum so far'
  },
  {
    id: 'c_ptrarr_40',
    topicId: 'c_pointer_array',
    question: 'Write a program to move all zeros to end using pointers.',
    mathSolution: 'Shift non-zero elements forward',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12};\n    int n = 5;\n    int *write = arr;\n    for(int *read = arr; read < arr + n; read++) {\n        if(*read != 0) {\n            *write = *read;\n            write++;\n        }\n    }\n    while(write < arr + n) {\n        *write = 0;\n        write++;\n    }\n    printf("Array after moving zeros: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Two-pointer technique'
  },

  // ========== MATRIX OPERATIONS (41-50) ==========
  {
    id: 'c_ptrarr_41',
    topicId: 'c_pointer_array',
    question: 'Write a program to find row with maximum sum using pointer.',
    mathSolution: 'Calculate sum for each row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};\n    int max_sum = 0, max_row = 0;\n    for(int i = 0; i < 3; i++) {\n        int sum = 0;\n        for(int j = 0; j < 4; j++) {\n            sum += mat[i][j];\n        }\n        if(sum > max_sum) {\n            max_sum = sum;\n            max_row = i;\n        }\n    }\n    printf("Row %d has maximum sum = %d\\n", max_row, max_sum);\n    return 0;\n}',
    hint: 'Calculate per row sum'
  },
  {
    id: 'c_ptrarr_42',
    topicId: 'c_pointer_array',
    question: 'Write a program to find column with minimum sum using pointer.',
    mathSolution: 'Calculate sum for each column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int min_sum = 0, min_col = 0;\n    for(int j = 0; j < 3; j++) {\n        int sum = 0;\n        for(int i = 0; i < 3; i++) {\n            sum += mat[i][j];\n        }\n        if(j == 0 || sum < min_sum) {\n            min_sum = sum;\n            min_col = j;\n        }\n    }\n    printf("Column %d has minimum sum = %d\\n", min_col, min_sum);\n    return 0;\n}',
    hint: 'Calculate per column sum'
  },
  {
    id: 'c_ptrarr_43',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is identity matrix.',
    mathSolution: 'Diagonal must be 1, others 0',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,0,0},{0,1,0},{0,0,1}};\n    int is_identity = 1;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            if(i == j && mat[i][j] != 1) is_identity = 0;\n            if(i != j && mat[i][j] != 0) is_identity = 0;\n        }\n    }\n    if(is_identity) printf("Matrix is identity matrix\\n");\n    else printf("Matrix is not identity matrix\\n");\n    return 0;\n}',
    hint: 'Check diagonal and off-diagonal'
  },
  {
    id: 'c_ptrarr_44',
    topicId: 'c_pointer_array',
    question: 'Write a program to find triangular sum (upper and lower).',
    mathSolution: 'Sum of upper and lower triangular separately',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int upper_sum = 0, lower_sum = 0;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            if(j >= i) upper_sum += mat[i][j];\n            if(j <= i) lower_sum += mat[i][j];\n        }\n    }\n    printf("Upper triangular sum: %d\\n", upper_sum);\n    printf("Lower triangular sum: %d\\n", lower_sum);\n    return 0;\n}',
    hint: 'Include diagonal in both'
  },
  {
    id: 'c_ptrarr_45',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is symmetric.',
    mathSolution: 'Matrix should equal its transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{2,4,5},{3,5,6}};\n    int symmetric = 1;\n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            if(mat[i][j] != mat[j][i]) {\n                symmetric = 0;\n                break;\n            }\n        }\n    }\n    if(symmetric) printf("Matrix is symmetric\\n");\n    else printf("Matrix is not symmetric\\n");\n    return 0;\n}',
    hint: 'Compare with transpose'
  },
  {
    id: 'c_ptrarr_46',
    topicId: 'c_pointer_array',
    question: 'Write a program to rotate matrix 90 degrees clockwise.',
    mathSolution: 'Transpose then reverse each row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    // Transpose\n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[j][i];\n            mat[j][i] = temp;\n        }\n    }\n    // Reverse each row\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3/2; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[i][2-j];\n            mat[i][2-j] = temp;\n        }\n    }\n    printf("Rotated matrix:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Transpose then reverse rows'
  },
  {
    id: 'c_ptrarr_47',
    topicId: 'c_pointer_array',
    question: 'Write a program to find saddle point in matrix.',
    mathSolution: 'Element smallest in row and largest in column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int saddle = 0;\n    for(int i = 0; i < 3; i++) {\n        int min_row = mat[i][0], col_index = 0;\n        for(int j = 1; j < 3; j++) {\n            if(mat[i][j] < min_row) {\n                min_row = mat[i][j];\n                col_index = j;\n            }\n        }\n        int max_col = mat[i][col_index];\n        for(int k = 0; k < 3; k++) {\n            if(mat[k][col_index] > max_col) {\n                max_col = mat[k][col_index];\n            }\n        }\n        if(min_row == max_col) {\n            printf("Saddle point: %d at (%d,%d)\\n", min_row, i, col_index);\n            saddle = 1;\n        }\n    }\n    if(!saddle) printf("No saddle point\\n");\n    return 0;\n}',
    hint: 'Find min in row, then max in column'
  },
  {
    id: 'c_ptrarr_48',
    topicId: 'c_pointer_array',
    question: 'Write a program to print matrix in spiral order.',
    mathSolution: 'Maintain boundaries and shrink',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int top = 0, bottom = 2, left = 0, right = 2;\n    printf("Spiral order: ");\n    while(top <= bottom && left <= right) {\n        for(int i = left; i <= right; i++) printf("%d ", mat[top][i]);\n        top++;\n        for(int i = top; i <= bottom; i++) printf("%d ", mat[i][right]);\n        right--;\n        if(top <= bottom) {\n            for(int i = right; i >= left; i--) printf("%d ", mat[bottom][i]);\n            bottom--;\n        }\n        if(left <= right) {\n            for(int i = bottom; i >= top; i--) printf("%d ", mat[i][left]);\n            left++;\n        }\n    }\n    return 0;\n}',
    hint: 'Maintain boundaries'
  },
  {
    id: 'c_ptrarr_49',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is magic square.',
    mathSolution: 'All rows, columns, diagonals sum equal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{2,7,6},{9,5,1},{4,3,8}};\n    int sum = 0, magic = 1;\n    for(int j = 0; j < 3; j++) sum += mat[0][j];\n    for(int i = 1; i < 3; i++) {\n        int row_sum = 0;\n        for(int j = 0; j < 3; j++) row_sum += mat[i][j];\n        if(row_sum != sum) magic = 0;\n    }\n    for(int j = 0; j < 3; j++) {\n        int col_sum = 0;\n        for(int i = 0; i < 3; i++) col_sum += mat[i][j];\n        if(col_sum != sum) magic = 0;\n    }\n    int diag1 = mat[0][0] + mat[1][1] + mat[2][2];\n    int diag2 = mat[0][2] + mat[1][1] + mat[2][0];\n    if(diag1 != sum || diag2 != sum) magic = 0;\n    if(magic) printf("Matrix is magic square\\n");\n    else printf("Matrix is not magic square\\n");\n    return 0;\n}',
    hint: 'Check all sums'
  },
  {
    id: 'c_ptrarr_50',
    topicId: 'c_pointer_array',
    question: 'Write a program to find frequency of each element using pointer array.',
    mathSolution: 'Count occurrences of each value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,2,3,3,3,4};\n    int n = 7;\n    int visited[7] = {0};\n    printf("Element frequencies:\\n");\n    for(int i = 0; i < n; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j = i+1; j < n; j++) {\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = 1;\n            }\n        }\n        printf("%d: %d times\\n", arr[i], count);\n    }\n    return 0;\n}',
    hint: 'Count and display frequencies'
  }
);