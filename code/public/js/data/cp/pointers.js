QuizData.questions.push(
  // ========== BASIC POINTER CONCEPTS (1-10) ==========
  {
    id: 'c_ptr_1',
    topicId: 'c_pointers',
    question: 'Write a program to declare an integer pointer and store address of a variable.',
    mathSolution: 'Pointer stores address of variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    printf("Value of x: %d\\n", x);\n    printf("Address of x: %p\\n", (void*)ptr);\n    return 0;\n}',
    hint: 'Use & to get address, * to declare pointer'
  },
  {
    id: 'c_ptr_2',
    topicId: 'c_pointers',
    question: 'Write a program to print value using pointer dereferencing.',
    mathSolution: 'Dereference pointer to get value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 25;\n    int *ptr = &x;\n    printf("Value using pointer: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Use * operator to dereference'
  },
  {
    id: 'c_ptr_3',
    topicId: 'c_pointers',
    question: 'Write a program to change value of variable using pointer.',
    mathSolution: 'Modify value through pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    printf("Before: %d\\n", x);\n    *ptr = 20;\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Assign to dereferenced pointer'
  },
  {
    id: 'c_ptr_4',
    topicId: 'c_pointers',
    question: 'Write a program to print address stored in pointer.',
    mathSolution: 'Display pointer value (address)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("Pointer address: %p\\n", (void*)ptr);\n    return 0;\n}',
    hint: 'Use %p format specifier'
  },
  {
    id: 'c_ptr_5',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate pointer arithmetic (increment).',
    mathSolution: 'ptr++ moves to next integer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf("First element: %d\\n", *ptr);\n    ptr++;\n    printf("Second element: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Pointer arithmetic depends on type size'
  },
  {
    id: 'c_ptr_6',
    topicId: 'c_pointers',
    question: 'Write a program to access array elements using pointer.',
    mathSolution: '*(arr+i) equals arr[i]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5, 10, 15, 20, 25};\n    int *ptr = arr;\n    for(int i = 0; i < 5; i++) {\n        printf("arr[%d] = %d\\n", i, *(ptr + i));\n    }\n    return 0;\n}',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptr_7',
    topicId: 'c_pointers',
    question: 'Write a program to traverse array using pointer.',
    mathSolution: 'Increment pointer until end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr;\n    printf("Array elements: ");\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        printf("%d ", *ptr);\n    }\n    return 0;\n}',
    hint: 'Use pointer as loop variable'
  },
  {
    id: 'c_ptr_8',
    topicId: 'c_pointers',
    question: 'Write a program to find sum of array using pointer.',
    mathSolution: 'Add all elements via pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    int *ptr;\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        sum += *ptr;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate values through pointer'
  },
  {
    id: 'c_ptr_9',
    topicId: 'c_pointers',
    question: 'Write a program to find largest element using pointer.',
    mathSolution: 'Compare elements using pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int max = *arr;\n    int *ptr;\n    for(ptr = arr + 1; ptr < arr + 5; ptr++) {\n        if(*ptr > max) max = *ptr;\n    }\n    printf("Largest = %d\\n", max);\n    return 0;\n}',
    hint: 'Assume first as max, then compare'
  },
  {
    id: 'c_ptr_10',
    topicId: 'c_pointers',
    question: 'Write a program to copy array using pointers.',
    mathSolution: 'Copy elements using pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int src[] = {1, 2, 3, 4, 5};\n    int dest[5];\n    int *s = src, *d = dest;\n    for(int i = 0; i < 5; i++) {\n        *d++ = *s++;\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", dest[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers - source and destination'
  },

  // ========== POINTERS AND STRINGS (11-20) ==========
  {
    id: 'c_ptr_11',
    topicId: 'c_pointers',
    question: 'Write a program to declare pointer to string and print it.',
    mathSolution: 'Pointer to string literal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello World";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'String literal is array of chars'
  },
  {
    id: 'c_ptr_12',
    topicId: 'c_pointers',
    question: 'Write a program to print string character by character using pointer.',
    mathSolution: 'Traverse char by char until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello";\n    char *ptr = str;\n    while(*ptr != \'\\0\') {\n        printf("%c ", *ptr);\n        ptr++;\n    }\n    return 0;\n}',
    hint: 'Stop at null terminator'
  },
  {
    id: 'c_ptr_13',
    topicId: 'c_pointers',
    question: 'Write a program to find string length using pointer.',
    mathSolution: 'Count chars until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello";\n    char *ptr = str;\n    int len = 0;\n    while(*ptr != \'\\0\') {\n        len++;\n        ptr++;\n    }\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Increment pointer and count'
  },
  {
    id: 'c_ptr_14',
    topicId: 'c_pointers',
    question: 'Write a program to copy string using pointers.',
    mathSolution: 'Copy char by char until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    char *s = src;\n    char *d = dest;\n    while(*s != \'\\0\') {\n        *d = *s;\n        s++;\n        d++;\n    }\n    *d = \'\\0\';\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Dereference and assign, then increment'
  },
  {
    id: 'c_ptr_15',
    topicId: 'c_pointers',
    question: 'Write a program to reverse string using pointers.',
    mathSolution: 'Swap characters from ends',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = strlen(str);\n    char *start = str;\n    char *end = str + len - 1;\n    while(start < end) {\n        char temp = *start;\n        *start = *end;\n        *end = temp;\n        start++;\n        end--;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Two pointers moving inward'
  },
  {
    id: 'c_ptr_16',
    topicId: 'c_pointers',
    question: 'Write a program to convert string to uppercase using pointers.',
    mathSolution: 'Use pointer to modify string',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    char *ptr = str;\n    while(*ptr) {\n        *ptr = toupper(*ptr);\n        ptr++;\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Dereference pointer to modify characters'
  },
  {
    id: 'c_ptr_17',
    topicId: 'c_pointers',
    question: 'Write a program to count vowels in string using pointers.',
    mathSolution: 'Check each character for vowels',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    char *ptr = str;\n    int count = 0;\n    while(*ptr) {\n        char ch = tolower(*ptr);\n        if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\')\n            count++;\n        ptr++;\n    }\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Use pointer to traverse string'
  },
  {
    id: 'c_ptr_18',
    topicId: 'c_pointers',
    question: 'Write a program to check if string is palindrome using pointers.',
    mathSolution: 'Compare from both ends',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "madam";\n    int len = strlen(str);\n    char *start = str;\n    char *end = str + len - 1;\n    int is_palindrome = 1;\n    while(start < end) {\n        if(*start != *end) {\n            is_palindrome = 0;\n            break;\n        }\n        start++;\n        end--;\n    }\n    if(is_palindrome) printf("%s is palindrome\\n", str);\n    else printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from both ends'
  },
  {
    id: 'c_ptr_19',
    topicId: 'c_pointers',
    question: 'Write a program to concatenate strings using pointers.',
    mathSolution: 'Find end of first, then copy second',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    char *ptr = str1;\n    char *src = str2;\n    while(*ptr) ptr++;\n    while((*ptr++ = *src++));\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Move pointer to end of first string'
  },
  {
    id: 'c_ptr_20',
    topicId: 'c_pointers',
    question: 'Write a program to compare strings using pointers.',
    mathSolution: 'Compare character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    char *s1 = str1;\n    char *s2 = str2;\n    int equal = 1;\n    while(*s1 || *s2) {\n        if(*s1 != *s2) {\n            equal = 0;\n            break;\n        }\n        s1++;\n        s2++;\n    }\n    if(equal) printf("Strings are equal\\n");\n    else printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'Compare character by character using pointers'
  },

  // ========== POINTER TO POINTER (21-30) ==========
  {
    id: 'c_ptr_21',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate double pointer (pointer to pointer).',
    mathSolution: 'Double pointer stores address of another pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    int **pptr = &ptr;\n    printf("Value of x: %d\\n", x);\n    printf("Using ptr: %d\\n", *ptr);\n    printf("Using pptr: %d\\n", **pptr);\n    return 0;\n}',
    hint: 'Use two asterisks for double pointer'
  },
  {
    id: 'c_ptr_22',
    topicId: 'c_pointers',
    question: 'Write a program to modify value using double pointer.',
    mathSolution: 'Change value through double pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    int **pptr = &ptr;\n    printf("Before: %d\\n", x);\n    **pptr = 50;\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Dereference twice to access value'
  },
  {
    id: 'c_ptr_23',
    topicId: 'c_pointers',
    question: 'Write a program to swap two numbers using pointers.',
    mathSolution: 'Exchange values via pointers',
    codeSolution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
    hint: 'Pass addresses to function'
  },
  {
    id: 'c_ptr_24',
    topicId: 'c_pointers',
    question: 'Write a program to increment variable using pointer in function.',
    mathSolution: 'Modify original variable',
    codeSolution: '#include <stdio.h>\n\nvoid increment(int *p) {\n    (*p)++;\n}\n\nint main() {\n    int x = 5;\n    printf("Before: %d\\n", x);\n    increment(&x);\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Function receives address'
  },
  {
    id: 'c_ptr_25',
    topicId: 'c_pointers',
    question: 'Write a program to return pointer from function.',
    mathSolution: 'Function returns address',
    codeSolution: '#include <stdio.h>\n\nint* findMax(int *arr, int n) {\n    int *max = arr;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > *max) max = &arr[i];\n    }\n    return max;\n}\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int *maxPtr = findMax(arr, 5);\n    printf("Maximum value: %d\\n", *maxPtr);\n    return 0;\n}',
    hint: 'Return address of element'
  },
  {
    id: 'c_ptr_26',
    topicId: 'c_pointers',
    question: 'Write a program to create array of pointers to integers.',
    mathSolution: 'Array storing addresses',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    int *ptrs[] = {&a, &b, &c};\n    for(int i = 0; i < 3; i++) {\n        printf("Value %d: %d\\n", i, *ptrs[i]);\n    }\n    return 0;\n}',
    hint: 'Each element holds address'
  },
  {
    id: 'c_ptr_27',
    topicId: 'c_pointers',
    question: 'Write a program to create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Orange"};\n    for(int i = 0; i < 3; i++) {\n        printf("%s\\n", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptr_28',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate NULL pointer.',
    mathSolution: 'Pointer that points to nothing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *ptr = NULL;\n    if(ptr == NULL) {\n        printf("Pointer is NULL\\n");\n    }\n    return 0;\n}',
    hint: 'NULL pointer points to nothing'
  },
  {
    id: 'c_ptr_29',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate void pointer.',
    mathSolution: 'Generic pointer that can hold any address',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    float y = 3.14;\n    void *ptr;\n    ptr = &x;\n    printf("Integer value: %d\\n", *(int*)ptr);\n    ptr = &y;\n    printf("Float value: %.2f\\n", *(float*)ptr);\n    return 0;\n}',
    hint: 'Cast before dereferencing'
  },
  {
    id: 'c_ptr_30',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate const pointer.',
    mathSolution: 'Pointer cannot change where it points',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    int *const ptr = &x;\n    *ptr = 15;\n    printf("x = %d\\n", x);\n    // ptr = &y; // ERROR - pointer is constant\n    return 0;\n}',
    hint: 'int* const means pointer is constant'
  },

  // ========== DYNAMIC MEMORY ALLOCATION (31-40) ==========
  {
    id: 'c_ptr_31',
    topicId: 'c_pointers',
    question: 'Write a program to allocate memory for one integer using malloc.',
    mathSolution: 'Dynamic memory allocation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    if(ptr != NULL) {\n        *ptr = 42;\n        printf("Value: %d\\n", *ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'malloc returns void*, cast to needed type'
  },
  {
    id: 'c_ptr_32',
    topicId: 'c_pointers',
    question: 'Write a program to dynamically allocate array using malloc.',
    mathSolution: 'Array on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < n; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for(int i = 0; i < n; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Multiply by number of elements'
  },
  {
    id: 'c_ptr_33',
    topicId: 'c_pointers',
    question: 'Write a program to allocate and initialize to zero using calloc.',
    mathSolution: 'Zero-initialized memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)calloc(n, sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < n; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'calloc takes count and size'
  },
  {
    id: 'c_ptr_34',
    topicId: 'c_pointers',
    question: 'Write a program to resize memory using realloc.',
    mathSolution: 'Change size of memory block',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(3 * sizeof(int));\n    arr[0] = 10; arr[1] = 20; arr[2] = 30;\n    arr = (int*)realloc(arr, 5 * sizeof(int));\n    arr[3] = 40; arr[4] = 50;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'May move to new location'
  },
  {
    id: 'c_ptr_35',
    topicId: 'c_pointers',
    question: 'Write a program to free dynamically allocated memory.',
    mathSolution: 'Prevent memory leak',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value: %d\\n", *ptr);\n    free(ptr);\n    printf("Memory freed\\n");\n    return 0;\n}',
    hint: 'Always free what you malloc'
  },
  {
    id: 'c_ptr_36',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate dangling pointer.',
    mathSolution: 'Pointer to freed memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 42;\n    free(ptr);\n    ptr = NULL;\n    printf("Pointer set to NULL after free\\n");\n    return 0;\n}',
    hint: 'Set to NULL after free'
  },
  {
    id: 'c_ptr_37',
    topicId: 'c_pointers',
    question: 'Write a program to create 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix allocation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'First allocate rows, then each row'
  },
  {
    id: 'c_ptr_38',
    topicId: 'c_pointers',
    question: 'Write a program to calculate sum using pointer to function.',
    mathSolution: 'Function pointer callback',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int (*funcPtr)(int, int) = add;\n    int result = funcPtr(10, 20);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Function name decays to pointer'
  },
  {
    id: 'c_ptr_39',
    topicId: 'c_pointers',
    question: 'Write a program to create array of function pointers.',
    mathSolution: 'Multiple functions in array',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int (*ops[])(int, int) = {add, sub, mul};\n    int a = 10, b = 5;\n    printf("Add: %d\\n", ops[0](a, b));\n    printf("Sub: %d\\n", ops[1](a, b));\n    printf("Mul: %d\\n", ops[2](a, b));\n    return 0;\n}',
    hint: 'Array of function pointers'
  },
  {
    id: 'c_ptr_40',
    topicId: 'c_pointers',
    question: 'Write a program to pass function pointer as parameter.',
    mathSolution: 'Callback function',
    codeSolution: '#include <stdio.h>\n\nvoid process(int *arr, int n, int (*func)(int)) {\n    for(int i = 0; i < n; i++) {\n        arr[i] = func(arr[i]);\n    }\n}\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    process(arr, 5, square);\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Function pointer as parameter'
  },

  // ========== POINTERS TO STRUCTURES (41-50) ==========
  {
    id: 'c_ptr_41',
    topicId: 'c_pointers',
    question: 'Write a program to declare pointer to structure.',
    mathSolution: 'Pointer to struct variable',
    codeSolution: '#include <stdio.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student s1 = {"John", 20};\n    struct Student *ptr = &s1;\n    printf("Name: %s, Age: %d\\n", ptr->name, ptr->age);\n    return 0;\n}',
    hint: 'Use arrow operator ->'
  },
  {
    id: 'c_ptr_42',
    topicId: 'c_pointers',
    question: 'Write a program to allocate structure dynamically.',
    mathSolution: 'Create struct on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student *s = (struct Student*)malloc(sizeof(struct Student));\n    if(s != NULL) {\n        strcpy(s->name, "Alice");\n        s->age = 22;\n        printf("Name: %s, Age: %d\\n", s->name, s->age);\n        free(s);\n    }\n    return 0;\n}',
    hint: 'sizeof(struct) includes all members'
  },
  {
    id: 'c_ptr_43',
    topicId: 'c_pointers',
    question: 'Write a program to create linked list node using pointer.',
    mathSolution: 'Self-referential structure',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = NULL;\n    struct Node *first = (struct Node*)malloc(sizeof(struct Node));\n    first->data = 10;\n    first->next = NULL;\n    head = first;\n    printf("Node data: %d\\n", head->data);\n    free(first);\n    return 0;\n}',
    hint: 'Node has data and next pointer'
  },
  {
    id: 'c_ptr_44',
    topicId: 'c_pointers',
    question: 'Write a program to traverse linked list using pointers.',
    mathSolution: 'Move through list via next pointers',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = NULL;\n    struct Node *second = NULL;\n    struct Node *third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 10; head->next = second;\n    second->data = 20; second->next = third;\n    third->data = 30; third->next = NULL;\n    struct Node *curr = head;\n    while(curr != NULL) {\n        printf("%d ", curr->data);\n        curr = curr->next;\n    }\n    free(head); free(second); free(third);\n    return 0;\n}',
    hint: 'Follow next until NULL'
  },
  {
    id: 'c_ptr_45',
    topicId: 'c_pointers',
    question: 'Write a program to count nodes in linked list using pointer.',
    mathSolution: 'Traverse and count',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = NULL;\n    struct Node *n1 = (struct Node*)malloc(sizeof(struct Node));\n    struct Node *n2 = (struct Node*)malloc(sizeof(struct Node));\n    n1->data = 10; n1->next = n2;\n    n2->data = 20; n2->next = NULL;\n    head = n1;\n    int count = 0;\n    struct Node *curr = head;\n    while(curr != NULL) {\n        count++;\n        curr = curr->next;\n    }\n    printf("Number of nodes: %d\\n", count);\n    free(n1); free(n2);\n    return 0;\n}',
    hint: 'Count as you traverse'
  },
  {
    id: 'c_ptr_46',
    topicId: 'c_pointers',
    question: 'Write a program to modify structure member using pointer.',
    mathSolution: 'Use arrow operator to modify',
    codeSolution: '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    struct Point p = {5, 10};\n    struct Point *ptr = &p;\n    printf("Before: x=%d, y=%d\\n", p.x, p.y);\n    ptr->x = 15;\n    ptr->y = 20;\n    printf("After: x=%d, y=%d\\n", p.x, p.y);\n    return 0;\n}',
    hint: 'ptr->member = value'
  },
  {
    id: 'c_ptr_47',
    topicId: 'c_pointers',
    question: 'Write a program to check system endianness using pointer.',
    mathSolution: 'Test first byte of integer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 1;\n    char *c = (char*)&x;\n    if(*c) {\n        printf("Little Endian\\n");\n    } else {\n        printf("Big Endian\\n");\n    }\n    return 0;\n}',
    hint: 'First byte tells endianness'
  },
  {
    id: 'c_ptr_48',
    topicId: 'c_pointers',
    question: 'Write a program to find size of pointer.',
    mathSolution: 'Pointers have fixed size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *intPtr;\n    char *charPtr;\n    float *floatPtr;\n    printf("Size of int pointer: %zu bytes\\n", sizeof(intPtr));\n    printf("Size of char pointer: %zu bytes\\n", sizeof(charPtr));\n    printf("Size of float pointer: %zu bytes\\n", sizeof(floatPtr));\n    return 0;\n}',
    hint: 'All pointers have same size'
  },
  {
    id: 'c_ptr_49',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate pointer to array vs array of pointers.',
    mathSolution: 'Distinguish between types',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1,2,3,4,5};\n    int (*ptrToArr)[5] = &arr;\n    int *arrOfPtrs[5];\n    for(int i = 0; i < 5; i++) {\n        arrOfPtrs[i] = &arr[i];\n    }\n    printf("Pointer to array: first element %d\\n", (*ptrToArr)[0]);\n    printf("Array of pointers: first element %d\\n", *arrOfPtrs[0]);\n    return 0;\n}',
    hint: 'int (*p)[5] vs int *p[5]'
  },
  {
    id: 'c_ptr_50',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate pointer arithmetic on different types.',
    mathSolution: 'Pointer increment moves by type size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    char str[] = "ABC";\n    int *intPtr = arr;\n    char *charPtr = str;\n    printf("Before increment - intPtr: %p, charPtr: %p\\n", (void*)intPtr, (void*)charPtr);\n    intPtr++;\n    charPtr++;\n    printf("After increment - intPtr: %p, charPtr: %p\\n", (void*)intPtr, (void*)charPtr);\n    return 0;\n}',
    hint: 'int* moves by 4 bytes, char* by 1 byte'
  }
);