QuizData.questions.push(
  // ========== BASIC TYPEDEF - SIMPLE TYPE ALIASES (1-10) ==========
  {
    id: 'c_typedef_01',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for int as INTEGER and use it.',
    mathSolution: 'INTEGER becomes alias for int',
    codeSolution: '#include <stdio.h>\n\ntypedef int INTEGER;\n\nint main() {\n    INTEGER count = 42;\n    printf("Count = %d\\n", count);\n    return 0;\n}',
    hint: 'Now INTEGER can be used like int'
  },
  {
    id: 'c_typedef_02',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for unsigned char as BYTE.',
    mathSolution: 'BYTE represents 8-bit unsigned value',
    codeSolution: '#include <stdio.h>\n\ntypedef unsigned char BYTE;\n\nint main() {\n    BYTE data = 255;\n    printf("BYTE value = %u\\n", data);\n    return 0;\n}',
    hint: 'Common in systems programming'
  },
  {
    id: 'c_typedef_03',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for float as REAL.',
    mathSolution: 'REAL becomes floating-point type',
    codeSolution: '#include <stdio.h>\n\ntypedef float REAL;\n\nint main() {\n    REAL pi = 3.14159f;\n    printf("PI = %.5f\\n", pi);\n    return 0;\n}',
    hint: 'Useful for precision changes later'
  },
  {
    id: 'c_typedef_04',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for long long as int64.',
    mathSolution: 'Platform-independent 64-bit type',
    codeSolution: '#include <stdio.h>\n\ntypedef long long int64;\n\nint main() {\n    int64 big = 123456789012345LL;\n    printf("64-bit value = %lld\\n", big);\n    return 0;\n}',
    hint: 'Ensures 64 bits across platforms'
  },
  {
    id: 'c_typedef_05',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to int.',
    mathSolution: 'PINT is alias for int*',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n\nint main() {\n    int x = 100;\n    PINT ptr = &x;\n    printf("Value = %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Pointer type alias'
  },
  {
    id: 'c_typedef_06',
    topicId: 'c_typedef',
    question: 'Write a program to declare multiple pointers using typedef.',
    mathSolution: 'Avoids * confusion with multiple declarations',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n\nint main() {\n    int a = 10, b = 20;\n    PINT p1 = &a, p2 = &b;\n    printf("p1 = %d, p2 = %d\\n", *p1, *p2);\n    return 0;\n}',
    hint: 'Without typedef, int* p1, p2 makes p2 int'
  },
  {
    id: 'c_typedef_07',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for void pointer.',
    mathSolution: 'Can point to any type',
    codeSolution: '#include <stdio.h>\n\ntypedef void* PVOID;\n\nint main() {\n    int x = 42;\n    PVOID ptr = &x;\n    printf("Value = %d\\n", *(int*)ptr);\n    return 0;\n}',
    hint: 'Common in Windows API'
  },
  {
    id: 'c_typedef_08',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for array of 5 ints.',
    mathSolution: 'ARRAY5 becomes type int[5]',
    codeSolution: '#include <stdio.h>\n\ntypedef int ARRAY5[5];\n\nint main() {\n    ARRAY5 arr = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Now declare arrays easily'
  },
  {
    id: 'c_typedef_09',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for string (char array of size 50).',
    mathSolution: 'String type of fixed size',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef char STRING[50];\n\nint main() {\n    STRING name = "John Doe";\n    printf("Name = %s\\n", name);\n    return 0;\n}',
    hint: 'STRING becomes fixed-size string'
  },
  {
    id: 'c_typedef_10',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for structure Student.',
    mathSolution: 'Alias for struct Student',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct Student {\n    char name[50];\n    int age;\n} Student;\n\nint main() {\n    Student s1 = {"Alice", 20};\n    printf("Name: %s, Age: %d\\n", s1.name, s1.age);\n    return 0;\n}',
    hint: 'Now use Student without struct keyword'
  },

  // ========== TYPEDEF WITH STRUCTURES (11-20) ==========
  {
    id: 'c_typedef_11',
    topicId: 'c_typedef',
    question: 'Write a program with anonymous structure using typedef.',
    mathSolution: 'Structure without tag name',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    char name[50];\n    int age;\n} Student;\n\nint main() {\n    Student s = {"Bob\", 22};\n    printf(\"Name: %s, Age: %d\\n\", s.name, s.age);\n    return 0;\n}',
    hint: 'Tag name optional with typedef'
  },
  {
    id: 'c_typedef_12',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to structure.',
    mathSolution: 'PStudent is struct Student*',
    codeSolution: '#include <stdio.h>\n\ntypedef struct Student {\n    char name[50];\n    int age;\n} Student, *PStudent;\n\nint main() {\n    Student s = {"Charlie", 25};\n    PStudent ptr = &s;\n    printf("Name: %s, Age: %d\\n", ptr->name, ptr->age);\n    return 0;\n}',
    hint: 'Useful for linked lists'
  },
  {
    id: 'c_typedef_13',
    topicId: 'c_typedef',
    question: 'Write a program to create self-referential structure with typedef.',
    mathSolution: 'Linked list node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nint main() {\n    Node n1 = {10, NULL};\n    Node n2 = {20, &n1};\n    printf("n2.data = %d, n2.next->data = %d\\n", n2.data, n2.next->data);\n    return 0;\n}',
    hint: 'Need struct keyword for self-reference'
  },
  {
    id: 'c_typedef_14',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for union.',
    mathSolution: 'Alias for union Data',
    codeSolution: '#include <stdio.h>\n\ntypedef union {\n    int i;\n    float f;\n} Value;\n\nint main() {\n    Value v;\n    v.i = 42;\n    printf("Integer: %d\\n", v.i);\n    v.f = 3.14f;\n    printf("Float: %.2f\\n\", v.f);\n    return 0;\n}',
    hint: 'Now use Value without union keyword'
  },
  {
    id: 'c_typedef_15',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for enum.',
    mathSolution: 'Alias for enum Color',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { RED, GREEN, BLUE } Color;\n\nint main() {\n    Color c = GREEN;\n    printf("Color = %d\\n\", c);\n    return 0;\n}',
    hint: 'Now use Color as type'
  },
  {
    id: 'c_typedef_16',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for enum with custom values.',
    mathSolution: 'Assign custom values to enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS = 0, ERROR = -1, TIMEOUT = 1 } Status;\n\nint main() {\n    Status s = SUCCESS;\n    printf("Status = %d\\n\", s);\n    return 0;\n}',
    hint: 'Status codes'
  },
  {
    id: 'c_typedef_17',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for function pointer.',
    mathSolution: 'Alias for function taking int, returning int',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*FuncPtr)(int);\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    FuncPtr f = square;\n    int result = f(5);\n    printf("Square = %d\\n\", result);\n    return 0;\n}',
    hint: 'Simplifies complex declarations'
  },
  {
    id: 'c_typedef_18',
    topicId: 'c_typedef',
    question: 'Write a program to create array of function pointers using typedef.',
    mathSolution: 'Array of functions with same signature',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*MathOp)(int, int);\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    MathOp ops[] = {add, sub, mul};\n    int a = 10, b = 5;\n    for(int i = 0; i < 3; i++) {\n        printf("Result %d = %d\\n\", i, ops[i](a, b));\n    }\n    return 0;\n}',
    hint: 'Useful for jump tables'
  },
  {
    id: 'c_typedef_19',
    topicId: 'c_typedef',
    question: 'Write a program to create fixed-size integer types using typedef.',
    mathSolution: 'Platform-independent sizes',
    codeSolution: '#include <stdio.h>\n\ntypedef signed char int8;\ntypedef unsigned char uint8;\ntypedef short int16;\ntypedef unsigned short uint16;\ntypedef int int32;\ntypedef unsigned int uint32;\n\nint main() {\n    printf("int8 size: %zu\\n\", sizeof(int8));\n    printf(\"int16 size: %zu\\n\", sizeof(int16));\n    printf(\"int32 size: %zu\\n\", sizeof(int32));\n    return 0;\n}',
    hint: 'Ensure size across platforms'
  },
  {
    id: 'c_typedef_20',
    topicId: 'c_typedef',
    question: 'Write a program to simplify complex pointer declaration using typedef.',
    mathSolution: 'Pointer to array of 5 ints',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*ArrayPtr)[5];\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    ArrayPtr p = &arr;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", (*p)[i]);\n    }\n    return 0;\n}',
    hint: 'Without typedef: int (*p)[10]'
  },

  // ========== TYPEDEF FOR POINTERS AND ARRAYS (21-30) ==========
  {
    id: 'c_typedef_21',
    topicId: 'c_typedef',
    question: 'Write a program to use typedef for const pointer.',
    mathSolution: 'Pointer that cannot be changed',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\ntypedef PINT const CPINT;\n\nint main() {\n    int x = 10, y = 20;\n    CPINT ptr = &x;\n    *ptr = 15;\n    printf("x = %d\\n\", x);\n    // ptr = &y; // Error - pointer is const\n    return 0;\n}',
    hint: 'const after * means pointer constant'
  },
  {
    id: 'c_typedef_22',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to constant.',
    mathSolution: 'Cannot modify pointed value',
    codeSolution: '#include <stdio.h>\n\ntypedef const int* PCINT;\n\nint main() {\n    int x = 10;\n    PCINT ptr = &x;\n    printf("Value = %d\\n\", *ptr);\n    // *ptr = 20; // Error - cannot modify const\n    return 0;\n}',
    hint: 'const before * means data constant'
  },
  {
    id: 'c_typedef_23',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for 2D array.',
    mathSolution: 'Matrix type alias',
    codeSolution: '#include <stdio.h>\n\ntypedef int MATRIX[3][3];\n\nint main() {\n    MATRIX mat = {{1,2,3},{4,5,6},{7,8,9}};\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n\");\n    }\n    return 0;\n}',
    hint: 'Useful for mathematical operations'
  },
  {
    id: 'c_typedef_24',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for callback function.',
    mathSolution: 'Common in event-driven programming',
    codeSolution: '#include <stdio.h>\n\ntypedef void (*EventHandler)(int);\n\nvoid onEvent(int eventId) {\n    printf("Event %d triggered\\n\", eventId);\n}\n\nint main() {\n    EventHandler handler = onEvent;\n    handler(100);\n    return 0;\n}',
    hint: 'Used in GUI libraries'
  },
  {
    id: 'c_typedef_25',
    topicId: 'c_typedef',
    question: 'Write a program to compare typedef and #define for pointers.',
    mathSolution: 'typedef handles multiple declarations correctly',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n#define INT_PTR int*\n\nint main() {\n    PINT p1, p2;\n    INT_PTR p3, p4;\n    int x = 10, y = 20;\n    p1 = &x; p2 = &y;\n    p3 = &x; // p4 is int, not pointer!\n    printf("p1=%d, p2=%d, p3=%d\\n\", *p1, *p2, *p3);\n    printf(\"sizeof(p1)=%zu, sizeof(p3)=%zu\\n\", sizeof(p1), sizeof(p3));\n    return 0;\n}',
    hint: 'typedef is better for pointers'
  },
  {
    id: 'c_typedef_26',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for complex number.',
    mathSolution: 'Structure for complex math',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    double real;\n    double imag;\n} Complex;\n\nint main() {\n    Complex c = {3.0, 4.0};\n    printf("Complex: %.1f + %.1fi\\n\", c.real, c.imag);\n    return 0;\n}',
    hint: 'Now use Complex as type'
  },
  {
    id: 'c_typedef_27',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for RGB color.',
    mathSolution: '24-bit color representation',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    unsigned char r, g, b;\n} RGB;\n\nint main() {\n    RGB red = {255, 0, 0};\n    printf("Red: (%d, %d, %d)\\n\", red.r, red.g, red.b);\n    return 0;\n}',
    hint: 'No alpha channel'
  },
  {
    id: 'c_typedef_28',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for linked list node.',
    mathSolution: 'Self-referential structure',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nint main() {\n    Node* head = (Node*)malloc(sizeof(Node));\n    head->data = 10;\n    head->next = NULL;\n    printf("Node data = %d\\n\", head->data);\n    free(head);\n    return 0;\n}',
    hint: 'Common data structure'
  },
  {
    id: 'c_typedef_29',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for binary tree node.',
    mathSolution: 'Binary tree node type',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode *left, *right;\n} TreeNode;\n\nint main() {\n    TreeNode n1 = {10, NULL, NULL};\n    TreeNode n2 = {20, NULL, NULL};\n    TreeNode* root = (TreeNode*)malloc(sizeof(TreeNode));\n    root->data = 5;\n    root->left = &n1;\n    root->right = &n2;\n    printf("Root = %d, Left = %d, Right = %d\\n\", root->data, root->left->data, root->right->data);\n    free(root);\n    return 0;\n}',
    hint: 'Binary tree structure'
  },
  {
    id: 'c_typedef_30',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for file handle simulation.',
    mathSolution: 'Opaque file type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    const char* filename;\n    int position;\n} FileHandle;\n\nint main() {\n    FileHandle fp = {"data.txt", 0};\n    printf("File: %s, Position: %d\\n\", fp.filename, fp.position);\n    return 0;\n}',
    hint: 'FILE is opaque type in stdio.h'
  },

  // ========== ADVANCED TYPEDEF APPLICATIONS (31-40) ==========
  {
    id: 'c_typedef_31',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for generic comparator.',
    mathSolution: 'Comparator for any type',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*Comparator)(const void*, const void*);\n\nint compareInt(const void* a, const void* b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9};\n    Comparator cmp = compareInt;\n    if(cmp(&arr[0], &arr[1]) < 0)\n        printf("%d is less than %d\\n\", arr[0], arr[1]);\n    else\n        printf(\"%d is greater than %d\\n\", arr[0], arr[1]);\n    return 0;\n}',
    hint: 'Used in qsort'
  },
  {
    id: 'c_typedef_32',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for bit field structure.',
    mathSolution: 'Packed flags type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    unsigned int flag1:1;\n    unsigned int flag2:1;\n    unsigned int flag3:1;\n    unsigned int flag4:1;\n} Flags;\n\nint main() {\n    Flags f = {1, 0, 1, 0};\n    printf("Flags: %d%d%d%d\\n\", f.flag1, f.flag2, f.flag3, f.flag4);\n    printf(\"Size: %zu bytes\\n\", sizeof(Flags));\n    return 0;\n}',
    hint: 'Efficient boolean storage'
  },
  {
    id: 'c_typedef_33',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for configuration structure.',
    mathSolution: 'Program settings',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int width;\n    int height;\n    int fullscreen;\n    char title[50];\n} Config;\n\nint main() {\n    Config cfg = {1024, 768, 0, "MyApp"};\n    printf("Config: %dx%d, Fullscreen=%d, Title=%s\\n\", cfg.width, cfg.height, cfg.fullscreen, cfg.title);\n    return 0;\n}',
    hint: 'Application configuration'
  },
  {
    id: 'c_typedef_34',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for error code.',
    mathSolution: 'Standard error type',
    codeSolution: '#include <stdio.h>\n\ntypedef int error_t;\n\nint main() {\n    error_t status = 0;\n    printf("Error code = %d\\n\", status);\n    return 0;\n}',
    hint: 'Return status from functions'
  },
  {
    id: 'c_typedef_35',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for distance.',
    mathSolution: 'Clear intent in code',
    codeSolution: '#include <stdio.h>\n\ntypedef double Distance;\n\nint main() {\n    Distance meters = 100.5;\n    Distance kilometers = 0.1005;\n    printf("Distance: %.2f meters, %.4f km\\n\", meters, kilometers);\n    return 0;\n}',
    hint: 'Meters, kilometers etc'
  },
  {
    id: 'c_typedef_36',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for percentage.',
    mathSolution: '0-100 range',
    codeSolution: '#include <stdio.h>\n\ntypedef float Percentage;\n\nint main() {\n    Percentage score = 85.5;\n    printf("Score = %.1f%%\\n\", score);\n    return 0;\n}',
    hint: 'Or int for integer percent'
  },
  {
    id: 'c_typedef_37',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for index/count.',
    mathSolution: 'Array indices and sizes',
    codeSolution: '#include <stdio.h>\n\ntypedef size_t index_t;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    for(index_t i = 0; i < 5; i++) {\n        printf("arr[%zu] = %d\\n\", i, arr[i]);\n    }\n    return 0;\n}',
    hint: 'Unsigned for non-negative'
  },
  {
    id: 'c_typedef_38',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for PID (process ID).',
    mathSolution: 'Process identifier type',
    codeSolution: '#include <stdio.h>\n\ntypedef int pid_t;\n\nint main() {\n    pid_t processId = 12345;\n    printf("Process ID = %d\\n\", processId);\n    return 0;\n}',
    hint: 'From unistd.h'
  },
  {
    id: 'c_typedef_39',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for temperature.',
    mathSolution: 'Temperature values',
    codeSolution: '#include <stdio.h>\n\ntypedef float Temperature;\n\nint main() {\n    Temperature celsius = 25.5;\n    Temperature fahrenheit = (celsius * 9/5) + 32;\n    printf("Celsius: %.1f, Fahrenheit: %.1f\\n\", celsius, fahrenheit);\n    return 0;\n}',
    hint: 'Celsius or Fahrenheit'
  },
  {
    id: 'c_typedef_40',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for IPv4 address.',
    mathSolution: '32-bit IP address',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\ntypedef uint32_t ipv4_addr_t;\n\nint main() {\n    ipv4_addr_t ip = 0xC0A80101; // 192.168.1.1\n    printf("IP Address: %d.%d.%d.%d\\n\",\n           (ip >> 24) & 0xFF,\n           (ip >> 16) & 0xFF,\n           (ip >> 8) & 0xFF,\n           ip & 0xFF);\n    return 0;\n}',
    hint: 'Or struct with octets'
  },

  // ========== TYPEDEF FOR DATA STRUCTURES (41-50) ==========
  {
    id: 'c_typedef_41',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for point structure.',
    mathSolution: '2D point type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point p1 = {10, 20};\n    Point p2 = {30, 40};\n    printf("Point1: (%d,%d), Point2: (%d,%d)\\n\", p1.x, p1.y, p2.x, p2.y);\n    return 0;\n}',
    hint: 'Common geometric type'
  },
  {
    id: 'c_typedef_42',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for rectangle.',
    mathSolution: 'Rectangle using points',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\ntypedef struct {\n    Point topLeft;\n    Point bottomRight;\n} Rectangle;\n\nint main() {\n    Rectangle rect = {{0, 0}, {100, 50}};\n    printf("Rectangle: (%d,%d) to (%d,%d)\\n\",\n           rect.topLeft.x, rect.topLeft.y,\n           rect.bottomRight.x, rect.bottomRight.y);\n    return 0;\n}',
    hint: 'Hierarchical types'
  },
  {
    id: 'c_typedef_43',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for circle.',
    mathSolution: 'Circle with center and radius',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\ntypedef struct {\n    Point center;\n    int radius;\n} Circle;\n\nint main() {\n    Circle c = {{10, 10}, 5};\n    printf("Circle center=(%d,%d), radius=%d\\n\", c.center.x, c.center.y, c.radius);\n    return 0;\n}',
    hint: 'Geometric shape'
  },
  {
    id: 'c_typedef_44',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for date.',
    mathSolution: 'Date representation',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int day;\n    int month;\n    int year;\n} Date;\n\nint main() {\n    Date today = {28, 4, 2026};\n    printf("Date: %d/%d/%d\\n\", today.day, today.month, today.year);\n    return 0;\n}',
    hint: 'Calendar date'
  },
  {
    id: 'c_typedef_45',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for time.',
    mathSolution: 'Time representation',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int hour;\n    int minute;\n    int second;\n} Time;\n\nint main() {\n    Time now = {14, 30, 45};\n    printf("Time: %02d:%02d:%02d\\n\", now.hour, now.minute, now.second);\n    return 0;\n}',
    hint: 'Clock time'
  },
  {
    id: 'c_typedef_46',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for student record.',
    mathSolution: 'Student information',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int rollNo;\n    char name[50];\n    float marks;\n} Student;\n\nint main() {\n    Student s = {101, "John Doe", 85.5};\n    printf("Roll: %d, Name: %s, Marks: %.1f\\n\", s.rollNo, s.name, s.marks);\n    return 0;\n}',
    hint: 'Student record structure'
  },
  {
    id: 'c_typedef_47',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for employee record.',
    mathSolution: 'Employee information',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int id;\n    char name[50];\n    char department[30];\n    float salary;\n} Employee;\n\nint main() {\n    Employee emp = {1001, "Alice Smith", "Engineering", 75000.0};\n    printf("ID: %d, Name: %s, Dept: %s, Salary: %.0f\\n\",\n           emp.id, emp.name, emp.department, emp.salary);\n    return 0;\n}',
    hint: 'Employee record'
  },
  {
    id: 'c_typedef_48',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for bank account.',
    mathSolution: 'Account information',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int accountNo;\n    char holderName[50];\n    double balance;\n} Account;\n\nint main() {\n    Account acc = {123456, "Robert Johnson", 5000.50};\n    printf("Account: %d, Holder: %s, Balance: $%.2f\\n\",\n           acc.accountNo, acc.holderName, acc.balance);\n    return 0;\n}',
    hint: 'Bank account type'
  },
  {
    id: 'c_typedef_49',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for vector (mathematical).',
    mathSolution: '3D vector type',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\ntypedef struct {\n    double x;\n    double y;\n    double z;\n} Vector;\n\ndouble magnitude(Vector v) {\n    return sqrt(v.x * v.x + v.y * v.y + v.z * v.z);\n}\n\nint main() {\n    Vector v = {3.0, 4.0, 0.0};\n    printf("Vector: (%.1f, %.1f, %.1f)\\n\", v.x, v.y, v.z);\n    printf(\"Magnitude: %.1f\\n\", magnitude(v));\n    return 0;\n}',
    hint: '3D vector for math operations'
  },
  {
    id: 'c_typedef_50',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for matrix.',
    mathSolution: '3x3 matrix type',
    codeSolution: '#include <stdio.h>\n\ntypedef int Matrix[3][3];\n\nvoid printMatrix(Matrix m) {\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", m[i][j]);\n        }\n        printf("\\n\");\n    }\n}\n\nint main() {\n    Matrix mat = {{1,2,3},{4,5,6},{7,8,9}};\n    printMatrix(mat);\n    return 0;\n}',
    hint: 'Matrix operations'
  }
);