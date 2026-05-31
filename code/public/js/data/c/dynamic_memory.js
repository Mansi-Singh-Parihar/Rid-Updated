QuizData.questions.push(
  // ========== BASIC MALLOC (1-10) ==========
  {
    id: 'c_dyn_1',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a single integer using malloc and store value.',
    mathSolution: 'Dynamically allocate memory for one int and assign value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    if(ptr != NULL) {\n        *ptr = 42;\n        printf("Value = %d\\n", *ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'malloc returns void*, cast to int*'
  },
  {
    id: 'c_dyn_2',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate array of 5 integers using malloc and initialize.',
    mathSolution: 'Create dynamic array of 5 ints',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < 5; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for(int i = 0; i < 5; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Multiply size by number of elements'
  },
  {
    id: 'c_dyn_3',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a float using malloc.',
    mathSolution: 'Dynamic memory for float',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    float *fptr = (float*)malloc(sizeof(float));\n    if(fptr != NULL) {\n        *fptr = 3.14159f;\n        printf("Float value = %.5f\\n", *fptr);\n        free(fptr);\n    }\n    return 0;\n}',
    hint: 'sizeof(float) gives size of float'
  },
  {
    id: 'c_dyn_4',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a character using malloc.',
    mathSolution: 'Dynamic memory for char',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *cptr = (char*)malloc(sizeof(char));\n    if(cptr != NULL) {\n        *cptr = \'A\';\n        printf("Character = %c\\n", *cptr);\n        free(cptr);\n    }\n    return 0;\n}',
    hint: 'sizeof(char) is 1 byte'
  },
  {
    id: 'c_dyn_5',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate and zero-initialize array of 10 ints using calloc.',
    mathSolution: 'Dynamic array initialized to 0',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)calloc(10, sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < 10; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'calloc takes count and size, initializes to zero'
  },
  {
    id: 'c_dyn_6',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to compare malloc and calloc for array allocation.',
    mathSolution: 'calloc initializes to zero, malloc doesn\'t',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *marr = (int*)malloc(5 * sizeof(int));\n    int *carr = (int*)calloc(5, sizeof(int));\n    printf("malloc: ");\n    for(int i = 0; i < 5; i++) printf("%d ", marr[i]);\n    printf("\\ncalloc: ");\n    for(int i = 0; i < 5; i++) printf("%d ", carr[i]);\n    free(marr);\n    free(carr);\n    return 0;\n}',
    hint: 'calloc ensures all bits zero'
  },
  {
    id: 'c_dyn_7',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to resize dynamic array from 5 to 10 integers using realloc.',
    mathSolution: 'Expand array to hold 10 ints',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    for(int i = 0; i < 5; i++) arr[i] = i * 10;\n    arr = (int*)realloc(arr, 10 * sizeof(int));\n    for(int i = 5; i < 10; i++) arr[i] = i * 10;\n    for(int i = 0; i < 10; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'realloc preserves existing data'
  },
  {
    id: 'c_dyn_8',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to shrink dynamic array from 10 to 5 integers using realloc.',
    mathSolution: 'Reduce array size',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(10 * sizeof(int));\n    for(int i = 0; i < 10; i++) arr[i] = i * 10;\n    arr = (int*)realloc(arr, 5 * sizeof(int));\n    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Data beyond new size may be lost'
  },
  {
    id: 'c_dyn_9',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to handle realloc failure (return NULL).',
    mathSolution: 'Check if realloc succeeded',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    int *newarr = (int*)realloc(arr, 1000000 * sizeof(int));\n    if(newarr == NULL) {\n        printf("Reallocation failed\\n");\n        free(arr);\n    } else {\n        arr = newarr;\n        printf("Reallocation successful\\n");\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Always check return value of realloc'
  },
  {
    id: 'c_dyn_10',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to free dynamically allocated memory and set pointer to NULL.',
    mathSolution: 'Avoid dangling pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value before free: %d\\n", *ptr);\n    free(ptr);\n    ptr = NULL;\n    if(ptr == NULL) printf("Pointer set to NULL\\n");\n    return 0;\n}',
    hint: 'Set to NULL after free to prevent accidental reuse'
  },

  // ========== DYNAMIC ARRAYS (11-20) ==========
  {
    id: 'c_dyn_11',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic array of user-specified size.',
    mathSolution: 'Allocate based on runtime input',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        arr[i] = i * 10;\n    }\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'Size determined at runtime'
  },
  {
    id: 'c_dyn_12',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to calculate sum of elements in dynamic array.',
    mathSolution: 'Sum of elements in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    int sum = 0;\n    for(int i = 0; i < n; i++) {\n        arr[i] = i + 1;\n        sum += arr[i];\n    }\n    printf("Sum = %d\\n", sum);\n    free(arr);\n    return 0;\n}',
    hint: 'Same as static array access'
  },
  {
    id: 'c_dyn_13',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to find largest element in dynamic array.',
    mathSolution: 'Find maximum in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int n = 5;\n    int *dynArr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) dynArr[i] = arr[i];\n    int max = dynArr[0];\n    for(int i = 1; i < n; i++) {\n        if(dynArr[i] > max) max = dynArr[i];\n    }\n    printf("Largest = %d\\n", max);\n    free(dynArr);\n    return 0;\n}',
    hint: 'Access like static array'
  },
  {
    id: 'c_dyn_14',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to reverse dynamic array.',
    mathSolution: 'Reverse elements in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    printf("\\nReversed: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Swap elements from ends'
  },
  {
    id: 'c_dyn_15',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for string of length 100 and store text.',
    mathSolution: 'Dynamic char array for string',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *str = (char*)malloc(100 * sizeof(char));\n    if(str != NULL) {\n        strcpy(str, "Hello Dynamic World\");\n        printf(\"String: %s\\n\", str);\n        free(str);\n    }\n    return 0;\n}',
    hint: '100 chars = 99 characters + null terminator'
  },
  {
    id: 'c_dyn_16',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create duplicate of a string using dynamic memory.',
    mathSolution: 'strdup implementation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *original = "Hello\";\n    char *dup = (char*)malloc(strlen(original) + 1);\n    if(dup != NULL) {\n        strcpy(dup, original);\n        printf(\"Original: %s\\n\", original);\n        printf(\"Duplicate: %s\\n\", dup);\n        free(dup);\n    }\n    return 0;\n}',
    hint: 'Allocate space for string + null terminator'
  },
  {
    id: 'c_dyn_17',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to concatenate two strings into new dynamic string.',
    mathSolution: 'Combine str1 and str2 in new memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *s1 = "Hello \";\n    char *s2 = \"World\";\n    char *result = (char*)malloc(strlen(s1) + strlen(s2) + 1);\n    if(result != NULL) {\n        strcpy(result, s1);\n        strcat(result, s2);\n        printf("Concatenated: %s\\n\", result);\n        free(result);\n    }\n    return 0;\n}',
    hint: 'Allocate enough for both strings + null'
  },
  {
    id: 'c_dyn_18',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix with rows and cols',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n\");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Allocate rows, then each row'
  },
  {
    id: 'c_dyn_19',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to free dynamically allocated 2D array.',
    mathSolution: 'Free each row then rows array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(3 * sizeof(int));\n    }\n    printf("Memory allocated\\n\");\n    for(int i = 0; i < rows; i++) {\n        free(mat[i]);\n    }\n    free(mat);\n    printf(\"Memory freed\\n\");\n    return 0;\n}',
    hint: 'Free in reverse order of allocation'
  },
  {
    id: 'c_dyn_20',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a structure dynamically.',
    mathSolution: 'Create struct on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student *s = (struct Student*)malloc(sizeof(struct Student));\n    if(s != NULL) {\n        strcpy(s->name, "Alice\");\n        s->age = 20;\n        printf(\"Name: %s, Age: %d\\n\", s->name, s->age);\n        free(s);\n    }\n    return 0;\n}',
    hint: 'sizeof(struct) includes all members'
  },

  // ========== DYNAMIC STRUCTURES (21-30) ==========
  {
    id: 'c_dyn_21',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate array of structures dynamically.',
    mathSolution: 'Array of structs on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    int n = 3;\n    struct Point *points = (struct Point*)malloc(n * sizeof(struct Point));\n    for(int i = 0; i < n; i++) {\n        points[i].x = i * 10;\n        points[i].y = i * 20;\n    }\n    for(int i = 0; i < n; i++) {\n        printf("Point %d: (%d, %d)\\n\", i, points[i].x, points[i].y);\n    }\n    free(points);\n    return 0;\n}',
    hint: 'Allocate continuous memory for n structs'
  },
  {
    id: 'c_dyn_22',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create linked list node dynamically.',
    mathSolution: 'Node for linked list',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 10;\n    head->next = NULL;\n    printf("Node created with data = %d\\n\", head->data);\n    free(head);\n    return 0;\n}',
    hint: 'Allocate node and initialize'
  },
  {
    id: 'c_dyn_23',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create linked list with 3 nodes dynamically.',
    mathSolution: 'Build simple linked list',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = (struct Node*)malloc(sizeof(struct Node));\n    struct Node *second = (struct Node*)malloc(sizeof(struct Node));\n    struct Node *third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 10; head->next = second;\n    second->data = 20; second->next = third;\n    third->data = 30; third->next = NULL;\n    struct Node *curr = head;\n    while(curr != NULL) {\n        printf("%d \", curr->data);\n        curr = curr->next;\n    }\n    free(head); free(second); free(third);\n    return 0;\n}',
    hint: 'Each node allocated separately'
  },
  {
    id: 'c_dyn_24',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic stack using realloc.',
    mathSolution: 'Stack that grows as needed',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *data;\n    int top;\n    int capacity;\n} Stack;\n\nint main() {\n    Stack s;\n    s.capacity = 2;\n    s.top = 0;\n    s.data = (int*)malloc(s.capacity * sizeof(int));\n    for(int val = 10; val <= 50; val += 10) {\n        if(s.top >= s.capacity) {\n            s.capacity *= 2;\n            s.data = (int*)realloc(s.data, s.capacity * sizeof(int));\n        }\n        s.data[s.top++] = val;\n    }\n    for(int i = 0; i < s.top; i++) {\n        printf("%d \", s.data[i]);\n    }\n    free(s.data);\n    return 0;\n}',
    hint: 'Double capacity when full'
  },
  {
    id: 'c_dyn_25',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement dynamic vector (array list).',
    mathSolution: 'C version of C++ vector',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *items;\n    int count;\n    int capacity;\n} Vector;\n\nint main() {\n    Vector v;\n    v.capacity = 2;\n    v.count = 0;\n    v.items = (int*)malloc(v.capacity * sizeof(int));\n    for(int i = 1; i <= 5; i++) {\n        if(v.count >= v.capacity) {\n            v.capacity *= 2;\n            v.items = (int*)realloc(v.items, v.capacity * sizeof(int));\n        }\n        v.items[v.count++] = i * 10;\n    }\n    for(int i = 0; i < v.count; i++) {\n        printf("%d \", v.items[i]);\n    }\n    free(v.items);\n    return 0;\n}',
    hint: 'Amortized constant time insertion'
  },
  {
    id: 'c_dyn_26',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for flexible array member in structure.',
    mathSolution: 'Struct with variable-size array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int len;\n    int data[];\n} FlexArray;\n\nint main() {\n    int n = 5;\n    FlexArray *fa = (FlexArray*)malloc(sizeof(FlexArray) + n * sizeof(int));\n    fa->len = n;\n    for(int i = 0; i < n; i++) {\n        fa->data[i] = (i + 1) * 10;\n    }\n    for(int i = 0; i < fa->len; i++) {\n        printf("%d \", fa->data[i]);\n    }\n    free(fa);\n    return 0;\n}',
    hint: 'Last member with empty brackets'
  },
  {
    id: 'c_dyn_27',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to copy memory using memcpy with dynamic arrays.',
    mathSolution: 'Copy src to dest',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *src = (int*)malloc(n * sizeof(int));\n    int *dest = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) src[i] = i * 10;\n    memcpy(dest, src, n * sizeof(int));\n    printf("Copied array: \");\n    for(int i = 0; i < n; i++) printf(\"%d \", dest[i]);\n    free(src); free(dest);\n    return 0;\n}',
    hint: 'memcpy needs size in bytes'
  },
  {
    id: 'c_dyn_28',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to set all bytes to zero using memset on dynamic array.',
    mathSolution: 'Initialize dynamic memory to 0',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    memset(arr, 0, n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        printf("%d \", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'memset sets each byte to value'
  },
  {
    id: 'c_dyn_29',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to compare two dynamic arrays using memcmp.',
    mathSolution: 'Check if arrays equal',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *arr1 = (int*)malloc(n * sizeof(int));\n    int *arr2 = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        arr1[i] = i * 10;\n        arr2[i] = i * 10;\n    }\n    if(memcmp(arr1, arr2, n * sizeof(int)) == 0) {\n        printf("Arrays are equal\\n");\n    } else {\n        printf("Arrays are different\\n");\n    }\n    free(arr1); free(arr2);\n    return 0;\n}',
    hint: 'memcmp returns 0 if equal'
  },
  {
    id: 'c_dyn_30',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to detect memory leak in simple code.',
    mathSolution: 'Identify lost pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 42;\n    printf("Allocated memory at %p\\n\", (void*)ptr);\n    // Missing free() - memory leak\n    printf(\"Value = %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Overwriting pointer without free causes leak'
  },

  // ========== ADVANCED ALLOCATION (31-40) ==========
  {
    id: 'c_dyn_31',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create jagged array (rows of different sizes).',
    mathSolution: 'Each row can have different columns',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3;\n    int *sizes = (int*)malloc(rows * sizeof(int));\n    sizes[0] = 2; sizes[1] = 4; sizes[2] = 3;\n    int **jagged = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        jagged[i] = (int*)malloc(sizes[i] * sizeof(int));\n        for(int j = 0; j < sizes[i]; j++) {\n            jagged[i][j] = i * 10 + j;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < sizes[i]; j++) {\n            printf("%d \", jagged[i][j]);\n        }\n        printf(\"\\n\");\n        free(jagged[i]);\n    }\n    free(jagged);\n    free(sizes);\n    return 0;\n}',
    hint: 'Different column sizes per row'
  },
  {
    id: 'c_dyn_32',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to use aligned_alloc for aligned memory (16-byte).',
    mathSolution: 'Memory aligned to specific boundary',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)aligned_alloc(16, 1024);\n    if(ptr != NULL) {\n        printf("Aligned memory allocated\\n\");\n        printf(\"Address: %p\\n\", (void*)ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'Useful for SIMD instructions'
  },
  {
    id: 'c_dyn_33',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create 3D dynamic array.',
    mathSolution: 'Dynamic cube',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int x = 2, y = 2, z = 2;\n    int ***cube = (int***)malloc(x * sizeof(int**));\n    for(int i = 0; i < x; i++) {\n        cube[i] = (int**)malloc(y * sizeof(int*));\n        for(int j = 0; j < y; j++) {\n            cube[i][j] = (int*)malloc(z * sizeof(int));\n            for(int k = 0; k < z; k++) {\n                cube[i][j][k] = i * 100 + j * 10 + k;\n            }\n        }\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            for(int k = 0; k < z; k++) {\n                printf("%d \", cube[i][j][k]);\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            free(cube[i][j]);\n        }\n        free(cube[i]);\n    }\n    free(cube);\n    return 0;\n}',
    hint: 'Three levels of allocation'
  },
  {
    id: 'c_dyn_34',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate contiguous 2D array with one malloc.',
    mathSolution: 'Flattened 2D array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int *mat = (int*)malloc(rows * cols * sizeof(int));\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            mat[i * cols + j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d \", mat[i * cols + j]);\n        }\n        printf(\"\\n\");\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Access as mat[i*cols + j]'
  },
  {
    id: 'c_dyn_35',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic array and bubble sort it.',
    mathSolution: 'Sort dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 6;\n    int *arr = (int*)malloc(n * sizeof(int));\n    int temp[] = {64, 34, 25, 12, 22, 90};\n    for(int i = 0; i < n; i++) arr[i] = temp[i];\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                int t = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = t;\n            }\n        }\n    }\n    printf("Sorted array: \");\n    for(int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Sorting works same as static array'
  },
  {
    id: 'c_dyn_36',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement dynamic queue using circular buffer.',
    mathSolution: 'Queue with dynamic resizing',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *data;\n    int head, tail, size, capacity;\n} Queue;\n\nint main() {\n    Queue q;\n    q.capacity = 2;\n    q.size = 0;\n    q.head = 0;\n    q.tail = 0;\n    q.data = (int*)malloc(q.capacity * sizeof(int));\n    for(int val = 10; val <= 30; val += 10) {\n        if(q.size >= q.capacity) {\n            q.capacity *= 2;\n            q.data = (int*)realloc(q.data, q.capacity * sizeof(int));\n        }\n        q.data[q.tail] = val;\n        q.tail = (q.tail + 1) % q.capacity;\n        q.size++;\n    }\n    printf("Queue elements: \");\n    for(int i = 0; i < q.size; i++) {\n        printf("%d \", q.data[(q.head + i) % q.capacity]);\n    }\n    free(q.data);\n    return 0;\n}',
    hint: 'Resize when full'
  },
  {
    id: 'c_dyn_37',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to read entire file into dynamically allocated buffer.',
    mathSolution: 'Load file content into memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fp = fopen(__FILE__, "r\");\n    if(fp != NULL) {\n        fseek(fp, 0, SEEK_END);\n        long size = ftell(fp);\n        rewind(fp);\n        char *buffer = (char*)malloc(size + 1);\n        if(buffer != NULL) {\n            fread(buffer, 1, size, fp);\n            buffer[size] = \'\\0\';\n            printf(\"File size: %ld bytes\\n\", size);\n            free(buffer);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Get file size first, then allocate'
  },
  {
    id: 'c_dyn_38',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement simple memory pool allocator.',
    mathSolution: 'Pre-allocate and manage blocks',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nchar pool[10000];\nint used = 0;\n\nvoid* myalloc(size_t s) {\n    if(used + s > 10000) return NULL;\n    void *p = pool + used;\n    used += s;\n    return p;\n}\n\nint main() {\n    int *p1 = (int*)myalloc(sizeof(int));\n    int *p2 = (int*)myalloc(sizeof(int));\n    *p1 = 42;\n    *p2 = 100;\n    printf("p1 = %d, p2 = %d\\n\", *p1, *p2);\n    printf(\"Used memory: %d bytes\\n\", used);\n    return 0;\n}',
    hint: 'Linear allocator (no free)'
  },
  {
    id: 'c_dyn_39',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to fix memory leak by freeing before reassignment.',
    mathSolution: 'Free before overwriting pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 10;\n    printf("First allocation: %d\\n\", *ptr);\n    free(ptr);\n    ptr = (int*)malloc(sizeof(int));\n    *ptr = 20;\n    printf(\"Second allocation: %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Free old memory before new allocation'
  },
  {
    id: 'c_dyn_40',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to avoid use-after-free by setting pointer to NULL.',
    mathSolution: 'Set to NULL after free',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value: %d\\n\", *ptr);\n    free(ptr);\n    ptr = NULL;\n    if(ptr == NULL) {\n        printf("Pointer is NULL, safe to reuse\\n\");\n    }\n    ptr = (int*)malloc(sizeof(int));\n    *ptr = 200;\n    printf(\"New value: %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Prevents accidental reuse of freed memory'
  },

  // ========== PRACTICAL APPLICATIONS (41-50) ==========
  {
    id: 'c_dyn_41',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for array of function pointers.',
    mathSolution: 'Dynamic array of function pointers',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int n = 3;\n    int (**funcs)(int, int) = (int(**)(int,int))malloc(n * sizeof(int(*)(int,int)));\n    funcs[0] = add;\n    funcs[1] = sub;\n    funcs[2] = mul;\n    for(int i = 0; i < n; i++) {\n        printf("Result %d = %d\\n\", i, funcs[i](10, 5));\n    }\n    free(funcs);\n    return 0;\n}',
    hint: 'Function pointer syntax'
  },
  {
    id: 'c_dyn_42',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic hash table with separate chaining.',
    mathSolution: 'Array of linked lists',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key;\n    int value;\n    struct Node *next;\n} Node;\n\nint main() {\n    int size = 10;\n    Node **table = (Node**)calloc(size, sizeof(Node*));\n    printf("Hash table with %d buckets created\\n\", size);\n    free(table);\n    return 0;\n}',
    hint: 'Array of pointers to linked lists'
  },
  {
    id: 'c_dyn_43',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to free entire binary tree recursively.',
    mathSolution: 'Post-order deletion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode *left, *right;\n} TreeNode;\n\nvoid freeTree(TreeNode *root) {\n    if(!root) return;\n    freeTree(root->left);\n    freeTree(root->right);\n    free(root);\n}\n\nint main() {\n    TreeNode *root = (TreeNode*)malloc(sizeof(TreeNode));\n    root->left = (TreeNode*)malloc(sizeof(TreeNode));\n    root->right = (TreeNode*)malloc(sizeof(TreeNode));\n    root->left->left = root->left->right = NULL;\n    root->right->left = root->right->right = NULL;\n    printf("Tree allocated\\n\");\n    freeTree(root);\n    printf(\"Tree freed\\n\");\n    return 0;\n}',
    hint: 'Free children first, then root'
  },
  {
    id: 'c_dyn_44',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement simple reference counting.',
    mathSolution: 'Manual memory management with count',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int refs;\n    int data;\n} RefCounted;\n\nRefCounted* create(int data) {\n    RefCounted *p = (RefCounted*)malloc(sizeof(RefCounted));\n    p->refs = 1;\n    p->data = data;\n    return p;\n}\n\nvoid retain(RefCounted *p) {\n    p->refs++;\n}\n\nvoid release(RefCounted *p) {\n    if(--p->refs == 0) {\n        printf("Freeing memory\\n\");\n        free(p);\n    }\n}\n\nint main() {\n    RefCounted *obj = create(42);\n    printf(\"Ref count: %d\\n\", obj->refs);\n    retain(obj);\n    printf(\"After retain: %d\\n\", obj->refs);\n    release(obj);\n    printf(\"After release: \");\n    release(obj);\n    return 0;\n}',
    hint: 'Increment/decrement ref count'
  },
  {
    id: 'c_dyn_45',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate triangular matrix (only half needed).',
    mathSolution: 'Only allocate needed elements',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 4;\n    int *tri = (int*)malloc(n * (n + 1) / 2 * sizeof(int));\n    int idx = 0;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j <= i; j++) {\n            tri[idx++] = i * 10 + j;\n        }\n    }\n    idx = 0;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j <= i; j++) {\n            printf("%d \", tri[idx++]);\n        }\n        printf(\"\\n\");\n    }\n    free(tri);\n    return 0;\n}',
    hint: 'Index calculation for triangular matrix'
  },
  {
    id: 'c_dyn_46',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate structure with dynamic string member.',
    mathSolution: 'Struct with pointer to dynamic memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct {\n    char *name;\n    int age;\n} Person;\n\nint main() {\n    Person *p = (Person*)malloc(sizeof(Person));\n    p->name = (char*)malloc(50 * sizeof(char));\n    strcpy(p->name, "John Doe\");\n    p->age = 30;\n    printf(\"Name: %s, Age: %d\\n\", p->name, p->age);\n    free(p->name);\n    free(p);\n    return 0;\n}',
    hint: 'Allocate struct then allocate for pointer'
  },
  {
    id: 'c_dyn_47',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for sparse matrix (COO format).',
    mathSolution: 'Store non-zero elements only',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int row;\n    int col;\n    int value;\n} SparseElement;\n\nint main() {\n    int nnz = 3;\n    SparseElement *sparse = (SparseElement*)malloc(nnz * sizeof(SparseElement));\n    sparse[0].row = 0; sparse[0].col = 0; sparse[0].value = 5;\n    sparse[1].row = 1; sparse[1].col = 2; sparse[1].value = 8;\n    sparse[2].row = 2; sparse[2].col = 1; sparse[2].value = 3;\n    for(int i = 0; i < nnz; i++) {\n        printf("(%d,%d) = %d\\n\", sparse[i].row, sparse[i].col, sparse[i].value);\n    }\n    free(sparse);\n    return 0;\n}',
    hint: 'Coordinate list (COO) format for sparse matrix'
  },
  {
    id: 'c_dyn_48',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement arena allocator (region-based).',
    mathSolution: 'Allocate from large region',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    char *start;\n    size_t size;\n    size_t used;\n} Arena;\n\nArena createArena(size_t size) {\n    Arena a;\n    a.start = (char*)malloc(size);\n    a.size = size;\n    a.used = 0;\n    return a;\n}\n\nvoid* arenaAlloc(Arena *a, size_t s) {\n    if(a->used + s > a->size) return NULL;\n    void *p = a->start + a->used;\n    a->used += s;\n    return p;\n}\n\nint main() {\n    Arena arena = createArena(1024);\n    int *p1 = (int*)arenaAlloc(&arena, sizeof(int));\n    int *p2 = (int*)arenaAlloc(&arena, sizeof(int));\n    *p1 = 42;\n    *p2 = 100;\n    printf("p1 = %d, p2 = %d\\n\", *p1, *p2);\n    printf(\"Used: %zu bytes\\n\", arena.used);\n    free(arena.start);\n    return 0;\n}',
    hint: 'Bump pointer allocator'
  },
  {
    id: 'c_dyn_49',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to split string into dynamic array of substrings.',
    mathSolution: 'Tokenize string into dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char input[] = "Hello World from C\";\n    char **tokens = NULL;\n    int count = 0;\n    char *token = strtok(input, \" \");\n    while(token != NULL) {\n        tokens = (char**)realloc(tokens, (count + 1) * sizeof(char*));\n        tokens[count] = (char*)malloc(strlen(token) + 1);\n        strcpy(tokens[count], token);\n        count++;\n        token = strtok(NULL, \" \");\n    }\n    for(int i = 0; i < count; i++) {\n        printf("Token %d: %s\\n\", i, tokens[i]);\n        free(tokens[i]);\n    }\n    free(tokens);\n    return 0;\n}',
    hint: 'Use strtok and dynamic arrays'
  },
  {
    id: 'c_dyn_50',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate and free 3D array with proper cleanup.',
    mathSolution: 'Complete 3D allocation and deallocation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int x = 2, y = 2, z = 2;\n    int ***arr = (int***)malloc(x * sizeof(int**));\n    for(int i = 0; i < x; i++) {\n        arr[i] = (int**)malloc(y * sizeof(int*));\n        for(int j = 0; j < y; j++) {\n            arr[i][j] = (int*)malloc(z * sizeof(int));\n            for(int k = 0; k < z; k++) {\n                arr[i][j][k] = i * 100 + j * 10 + k;\n            }\n        }\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            for(int k = 0; k < z; k++) {\n                printf("arr[%d][%d][%d] = %d\\n\", i, j, k, arr[i][j][k]);\n            }\n        }\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            free(arr[i][j]);\n        }\n        free(arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'Free in reverse order of allocation'
  }
);