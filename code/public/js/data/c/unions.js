QuizData.questions.push(
  // ========== UNION BASICS (1-10) ==========
  {
    id: 'c_union_01',
    topicId: 'c_unions',
    question: 'Write a program to declare a union with int and float members and show the size.',
    mathSolution: 'All members share same memory location, size equals largest member',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    printf("Size of union: %zu bytes\\n", sizeof(d));\n    printf("Size of int: %zu, Size of float: %zu\\n", sizeof(int), sizeof(float));\n    return 0;\n}',
    hint: 'Union size equals largest member size'
  },
  {
    id: 'c_union_02',
    topicId: 'c_unions',
    question: 'Write a program to create union variable and access integer member.',
    mathSolution: 'Store integer in union and display',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Integer value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Use dot operator to access members'
  },
  {
    id: 'c_union_03',
    topicId: 'c_unions',
    question: 'Write a program to store and retrieve float value from union.',
    mathSolution: 'Store float and display',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.f = 3.14159f;\n    printf("Float value: %.5f\\n", d.f);\n    return 0;\n}',
    hint: 'Union can store different types at different times'
  },
  {
    id: 'c_union_04',
    topicId: 'c_unions',
    question: 'Write a program to show that union shares memory between members.',
    mathSolution: 'Store int, then float overwrites',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Integer: %d\\n", d.i);\n    d.f = 3.14f;\n    printf("Float: %.2f\\n", d.f);\n    printf("Integer after float overwrite: %d (garbage)\\n", d.i);\n    return 0;\n}',
    hint: 'Writing one member affects the other'
  },
  {
    id: 'c_union_05',
    topicId: 'c_unions',
    question: 'Write a program to compare struct and union memory usage.',
    mathSolution: 'Struct uses sum of members, union uses max',
    codeSolution: '#include <stdio.h>\n\nstruct StructData {\n    int i;\n    float f;\n    char c;\n};\n\nunion UnionData {\n    int i;\n    float f;\n    char c;\n};\n\nint main() {\n    printf("Size of struct: %zu bytes\\n", sizeof(struct StructData));\n    printf("Size of union: %zu bytes\\n", sizeof(union UnionData));\n    return 0;\n}',
    hint: 'Union saves memory compared to struct'
  },
  {
    id: 'c_union_06',
    topicId: 'c_unions',
    question: 'Write a program to create typedef for union.',
    mathSolution: 'Use typedef for easier syntax',
    codeSolution: '#include <stdio.h>\n\ntypedef union {\n    int i;\n    float f;\n} Data;\n\nint main() {\n    Data d;\n    d.i = 100;\n    printf("Value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'typedef creates alias for union'
  },
  {
    id: 'c_union_07',
    topicId: 'c_unions',
    question: 'Write a program to initialize union with first member.',
    mathSolution: 'Only first member can be initialized directly',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d = {42};\n    printf("Initialized integer: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Initialization sets first member'
  },
  {
    id: 'c_union_08',
    topicId: 'c_unions',
    question: 'Write a program to initialize union using designated initializer (C99).',
    mathSolution: 'Specify which member to initialize',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d = {.f = 3.14159f};\n    printf("Initialized float: %.5f\\n", d.f);\n    return 0;\n}',
    hint: 'Designated initializers specify member name'
  },
  {
    id: 'c_union_09',
    topicId: 'c_unions',
    question: 'Write a program to create union with array and structure members.',
    mathSolution: 'Union can contain complex types',
    codeSolution: '#include <stdio.h>\n\nunion Mixed {\n    int arr[4];\n    struct {\n        int a;\n        int b;\n        int c;\n        int d;\n    };\n};\n\nint main() {\n    union Mixed u;\n    u.arr[0] = 10;\n    u.arr[1] = 20;\n    u.arr[2] = 30;\n    u.arr[3] = 40;\n    printf("a=%d, b=%d, c=%d, d=%d\\n", u.a, u.b, u.c, u.d);\n    return 0;\n}',
    hint: 'Array and structure share same memory'
  },
  {
    id: 'c_union_10',
    topicId: 'c_unions',
    question: 'Write a program to embed union inside structure.',
    mathSolution: 'Structure containing union for variant data',
    codeSolution: '#include <stdio.h>\n\nstruct Variant {\n    int type;\n    union {\n        int i;\n        float f;\n        char c;\n    } data;\n};\n\nint main() {\n    struct Variant v;\n    v.type = 1;\n    v.data.i = 42;\n    printf("Type: %d, Value: %d\\n", v.type, v.data.i);\n    return 0;\n}',
    hint: 'Structure member dot then union dot'
  },

  // ========== TYPE PUNNING AND BYTE ACCESS (11-20) ==========
  {
    id: 'c_union_11',
    topicId: 'c_unions',
    question: 'Write a program to check system endianness using union.',
    mathSolution: 'Store int, check first byte',
    codeSolution: '#include <stdio.h>\n\nunion Endian {\n    int i;\n    char c[4];\n};\n\nint main() {\n    union Endian u;\n    u.i = 1;\n    if(u.c[0] == 1)\n        printf("Little Endian\\n");\n    else\n        printf("Big Endian\\n");\n    return 0;\n}',
    hint: 'First byte (LSB) tells endianness'
  },
  {
    id: 'c_union_12',
    topicId: 'c_unions',
    question: 'Write a program to split 32-bit integer into bytes using union.',
    mathSolution: 'Union with int and byte array',
    codeSolution: '#include <stdio.h>\n\nunion IntBytes {\n    unsigned int i;\n    unsigned char bytes[4];\n};\n\nint main() {\n    union IntBytes u;\n    u.i = 0x12345678;\n    printf("Integer: 0x%x\\n", u.i);\n    printf("Bytes: %02x %02x %02x %02x\\n", u.bytes[0], u.bytes[1], u.bytes[2], u.bytes[3]);\n    return 0;\n}',
    hint: 'Bytes appear in memory order'
  },
  {
    id: 'c_union_13',
    topicId: 'c_unions',
    question: 'Write a program to get IEEE representation of float using union.',
    mathSolution: 'Store float, read as int',
    codeSolution: '#include <stdio.h>\n\nunion FloatBits {\n    float f;\n    unsigned int i;\n};\n\nint main() {\n    union FloatBits u;\n    u.f = 3.14159f;\n    printf("Float: %f\\n", u.f);\n    printf("Hex representation: 0x%08x\\n", u.i);\n    return 0;\n}',
    hint: 'Same bits interpreted differently'
  },
  {
    id: 'c_union_14',
    topicId: 'c_unions',
    question: 'Write a program to store and retrieve string in union.',
    mathSolution: 'Union with character array',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nunion StringUnion {\n    char str[20];\n    int i;\n};\n\nint main() {\n    union StringUnion u;\n    strcpy(u.str, "Hello\");\n    printf("String: %s\\n\", u.str);\n    return 0;\n}',
    hint: 'Character array holds string'
  },
  {
    id: 'c_union_15',
    topicId: 'c_unions',
    question: 'Write a program to create union with pointer members.',
    mathSolution: 'Store different pointer types',
    codeSolution: '#include <stdio.h>\n\nunion Pointers {\n    int *ip;\n    float *fp;\n    char *cp;\n};\n\nint main() {\n    union Pointers p;\n    int x = 10;\n    p.ip = &x;\n    printf("Value via int pointer: %d\\n", *p.ip);\n    return 0;\n}',
    hint: 'Pointers stored in union share memory'
  },
  {
    id: 'c_union_16',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for RGB color manipulation.',
    mathSolution: 'Access as int or separate channels',
    codeSolution: '#include <stdio.h>\n\nunion Color {\n    unsigned int rgba;\n    struct {\n        unsigned char r;\n        unsigned char g;\n        unsigned char b;\n        unsigned char a;\n    } channels;\n};\n\nint main() {\n    union Color c;\n    c.channels.r = 255;\n    c.channels.g = 128;\n    c.channels.b = 64;\n    c.channels.a = 255;\n    printf("RGBA: #%02x%02x%02x%02x\\n", c.channels.r, c.channels.g, c.channels.b, c.channels.a);\n    return 0;\n}',
    hint: 'Union allows different views of same data'
  },
  {
    id: 'c_union_17',
    topicId: 'c_unions',
    question: 'Write a program to handle different sensor readings using union.',
    mathSolution: 'Variant union for different sensor types',
    codeSolution: '#include <stdio.h>\n\nstruct SensorReading {\n    int sensor_type;\n    union {\n        int int_value;\n        float float_value;\n    } data;\n};\n\nint main() {\n    struct SensorReading s1 = {1, .data.int_value = 42};\n    struct SensorReading s2 = {2, .data.float_value = 3.14f};\n    printf("Sensor1 (type %d): %d\\n", s1.sensor_type, s1.data.int_value);\n    printf("Sensor2 (type %d): %.2f\\n", s2.sensor_type, s2.data.float_value);\n    return 0;\n}',
    hint: 'Sensor type determines which union member to use'
  },
  {
    id: 'c_union_18',
    topicId: 'c_unions',
    question: 'Write a program to create array of unions.',
    mathSolution: 'Each array element is a union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data arr[3];\n    arr[0].i = 10;\n    arr[1].f = 20.5f;\n    arr[2].i = 30;\n    printf("arr[0]: %d\\n", arr[0].i);\n    printf("arr[1]: %.1f\\n", arr[1].f);\n    printf("arr[2]: %d\\n", arr[2].i);\n    return 0;\n}',
    hint: 'Array of unions, each holds its own value'
  },
  {
    id: 'c_union_19',
    topicId: 'c_unions',
    question: 'Write a program to use pointer to union.',
    mathSolution: 'Pointer can access union members',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    union Data *ptr = &d;\n    ptr->i = 100;\n    printf("Value via pointer: %d\\n", ptr->i);\n    return 0;\n}',
    hint: 'Arrow operator for pointer access'
  },
  {
    id: 'c_union_20',
    topicId: 'c_unions',
    question: 'Write a program to dynamically allocate union.',
    mathSolution: 'Use malloc to allocate union on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data *ptr = (union Data*)malloc(sizeof(union Data));\n    if(ptr != NULL) {\n        ptr->i = 42;\n        printf("Dynamically allocated union value: %d\\n", ptr->i);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'Always check malloc return value'
  },

  // ========== TAGGED UNIONS (21-30) ==========
  {
    id: 'c_union_21',
    topicId: 'c_unions',
    question: 'Write a program to create tagged union (discriminated union).',
    mathSolution: 'Enum tag tracks active union member',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nint main() {\n    struct TaggedUnion v1 = {INT_TYPE, .data.int_val = 42};\n    struct TaggedUnion v2 = {FLOAT_TYPE, .data.float_val = 3.14f};\n    printf("v1: type=int, value=%d\\n", v1.data.int_val);\n    printf("v2: type=float, value=%.2f\\n", v2.data.float_val);\n    return 0;\n}',
    hint: 'Tag tells which union member is active'
  },
  {
    id: 'c_union_22',
    topicId: 'c_unions',
    question: 'Write a program to process tagged union safely.',
    mathSolution: 'Switch on tag before accessing',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nvoid printValue(struct TaggedUnion v) {\n    switch(v.tag) {\n        case INT_TYPE:\n            printf("Integer: %d\\n", v.data.int_val);\n            break;\n        case FLOAT_TYPE:\n            printf("Float: %.2f\\n", v.data.float_val);\n            break;\n    }\n}\n\nint main() {\n    struct TaggedUnion v = {INT_TYPE, .data.int_val = 100};\n    printValue(v);\n    return 0;\n}',
    hint: 'Always check tag before using union member'
  },
  {
    id: 'c_union_23',
    topicId: 'c_unions',
    question: 'Write a program to create array of tagged unions.',
    mathSolution: 'Each array element has its own tag',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nint main() {\n    struct TaggedUnion arr[3];\n    arr[0].tag = INT_TYPE;\n    arr[0].data.int_val = 10;\n    arr[1].tag = FLOAT_TYPE;\n    arr[1].data.float_val = 20.5f;\n    arr[2].tag = INT_TYPE;\n    arr[2].data.int_val = 30;\n    for(int i = 0; i < 3; i++) {\n        if(arr[i].tag == INT_TYPE)\n            printf("arr[%d]: int %d\\n\", i, arr[i].data.int_val);\n        else\n            printf(\"arr[%d]: float %.1f\\n\", i, arr[i].data.float_val);\n    }\n    return 0;\n}',
    hint: 'Each element can have different active member'
  },
  {
    id: 'c_union_24',
    topicId: 'c_unions',
    question: 'Write a program to create union with bit fields for flag manipulation.',
    mathSolution: 'Access individual bits via structure',
    codeSolution: '#include <stdio.h>\n\nunion Flags {\n    unsigned int value;\n    struct {\n        unsigned int flag1:1;\n        unsigned int flag2:1;\n        unsigned int flag3:1;\n        unsigned int flag4:1;\n    } bits;\n};\n\nint main() {\n    union Flags f;\n    f.value = 0;\n    f.bits.flag1 = 1;\n    f.bits.flag3 = 1;\n    printf("Value: %u (binary: ", f.value);\n    for(int i = 3; i >= 0; i--)\n        printf("%d\", (f.value >> i) & 1);\n    printf(")\\n\");\n    return 0;\n}',
    hint: 'Bit fields allow easy flag manipulation'
  },
  {
    id: 'c_union_25',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for IP address representation.',
    mathSolution: 'Access as 32-bit integer or 4 bytes',
    codeSolution: '#include <stdio.h>\n\nunion IPAddress {\n    unsigned int addr;\n    unsigned char octets[4];\n};\n\nint main() {\n    union IPAddress ip;\n    ip.octets[0] = 192;\n    ip.octets[1] = 168;\n    ip.octets[2] = 1;\n    ip.octets[3] = 1;\n    printf("IP Address: %d.%d.%d.%d\\n\", ip.octets[0], ip.octets[1], ip.octets[2], ip.octets[3]);\n    printf("As integer: %u\\n\", ip.addr);\n    return 0;\n}',
    hint: 'Different views of same 32-bit value'
  },
  {
    id: 'c_union_26',
    topicId: 'c_unions',
    question: 'Write a program to pass union to function by value.',
    mathSolution: 'Union copied to function',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nvoid printInt(union Data d) {\n    printf("Value: %d\\n", d.i);\n}\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printInt(d);\n    return 0;\n}',
    hint: 'Function receives copy of union'
  },
  {
    id: 'c_union_27',
    topicId: 'c_unions',
    question: 'Write a program to pass union to function by pointer.',
    mathSolution: 'Modify original union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nvoid modify(union Data *ptr) {\n    ptr->i = 100;\n}\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Before: %d\\n", d.i);\n    modify(&d);\n    printf("After: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Pointer allows modifying original'
  },
  {
    id: 'c_union_28',
    topicId: 'c_unions',
    question: 'Write a program to return union from function.',
    mathSolution: 'Function returns union by value',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nunion Data createInt(int val) {\n    union Data d;\n    d.i = val;\n    return d;\n}\n\nint main() {\n    union Data d = createInt(42);\n    printf("Returned value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Return union just like other types'
  },
  {
    id: 'c_union_29',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate nested union.',
    mathSolution: 'Union inside another union',
    codeSolution: '#include <stdio.h>\n\nunion Outer {\n    int type;\n    union {\n        int i;\n        float f;\n    } inner;\n};\n\nint main() {\n    union Outer u;\n    u.inner.i = 42;\n    printf("Inner integer: %d\\n", u.inner.i);\n    return 0;\n}',
    hint: 'Nested unions have multiple levels'
  },
  {
    id: 'c_union_30',
    topicId: 'c_unions',
    question: 'Write a program to use union for mathematical vector representation.',
    mathSolution: 'Access as array or components',
    codeSolution: '#include <stdio.h>\n\nunion Vector {\n    float v[4];\n    struct {\n        float x, y, z, w;\n    };\n};\n\nint main() {\n    union Vector vec;\n    vec.x = 1.0f;\n    vec.y = 2.0f;\n    vec.z = 3.0f;\n    vec.w = 4.0f;\n    printf("Vector components: (%.1f, %.1f, %.1f, %.1f)\\n\", vec.x, vec.y, vec.z, vec.w);\n    printf("As array: [%.1f, %.1f, %.1f, %.1f]\\n\", vec.v[0], vec.v[1], vec.v[2], vec.v[3]);\n    return 0;\n}',
    hint: 'Same data, different access methods'
  },

  // ========== ADVANCED UNION APPLICATIONS (31-40) ==========
  {
    id: 'c_union_31',
    topicId: 'c_unions',
    question: 'Write a program to use union for packet header parsing.',
    mathSolution: 'Different protocol views',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nunion PacketHeader {\n    uint32_t raw;\n    struct {\n        uint8_t version;\n        uint8_t type;\n        uint16_t length;\n    } fields;\n};\n\nint main() {\n    union PacketHeader ph;\n    ph.fields.version = 4;\n    ph.fields.type = 6;\n    ph.fields.length = 1500;\n    printf("Raw header: 0x%08x\\n\", ph.raw);\n    printf("Version: %d, Type: %d, Length: %d\\n\", ph.fields.version, ph.fields.type, ph.fields.length);\n    return 0;\n}',
    hint: 'Different interpretations of same data'
  },
  {
    id: 'c_union_32',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate const union.',
    mathSolution: 'Union cannot be modified',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    const union Data d = {42};\n    printf("Const union value: %d\\n", d.i);\n    // d.i = 100; // Error: can\'t modify const union\n    return 0;\n}',
    hint: 'const applies to entire union'
},
 
  {
    id: 'c_union_33',
    topicId: 'c_unions',
    question: 'Write a program to create union for error return values.',
    mathSolution: 'Return success or error info',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nunion Result {\n    int value;\n    struct {\n        int error_code;\n        char error_msg[50];\n    } error;\n};\n\nint main() {\n    union Result r;\n    r.error.error_code = 404;\n    strcpy(r.error.error_msg, "Not Found\");\n    printf(\"Error code: %d, Message: %s\\n\", r.error.error_code, r.error.error_msg);\n    return 0;\n}',
    hint: 'Union can represent either success value or error info'
  },
  {
    id: 'c_union_34',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union alignment and packing.',
    mathSolution: 'Size may include padding for alignment',
    codeSolution: '#include <stdio.h>\n\nunion Mixed {\n    char c;\n    int i;\n    double d;\n};\n\nint main() {\n    printf("Size of union: %zu bytes\\n\", sizeof(union Mixed));\n    printf(\"Alignment: at least %zu\\n\", __alignof__(union Mixed));\n    return 0;\n}',
    hint: 'Union uses largest alignment requirement'
  },
  {
    id: 'c_union_35',
    topicId: 'c_unions',
    question: 'Write a program to use union for JSON value representation.',
    mathSolution: 'Variant type for JSON values',
    codeSolution: '#include <stdio.h>\n\nenum JSONType { JSON_NULL, JSON_INT, JSON_FLOAT, JSON_BOOL, JSON_STRING };\n\nstruct JSONValue {\n    enum JSONType type;\n    union {\n        int int_val;\n        float float_val;\n        int bool_val;\n        char *str_val;\n    } data;\n};\n\nint main() {\n    struct JSONValue v = {JSON_INT, .data.int_val = 42};\n    printf("JSON value: \");\n    if(v.type == JSON_INT) printf(\"%d\", v.data.int_val);\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Union enables variant data types'
  },
  {
    id: 'c_union_36',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for double exponent extraction.',
    mathSolution: 'Access double bits via union',
    codeSolution: '#include <stdio.h>\n\nunion DoubleBits {\n    double d;\n    struct {\n        unsigned long long mantissa:52;\n        unsigned int exponent:11;\n        unsigned int sign:1;\n    } bits;\n};\n\nint main() {\n    union DoubleBits u;\n    u.d = 3.141592653589793;\n    printf("Double: %f\\n\", u.d);\n    printf(\"Sign: %u, Exponent: %u, Mantissa: %llx\\n\", u.bits.sign, u.bits.exponent, u.bits.mantissa);\n    return 0;\n}',
    hint: 'Extract IEEE 754 components'
  },
  {
    id: 'c_union_37',
    topicId: 'c_unions',
    question: 'Write a program to use union for fast inverse square root approximation.',
    mathSolution: 'Bit manipulation trick',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nfloat fastInvSqrt(float number) {\n    union { float f; int i; } u;\n    u.f = number;\n    u.i = 0x5f3759df - (u.i >> 1);\n    return u.f * (1.5f - 0.5f * number * u.f * u.f);\n}\n\nint main() {\n    float x = 4.0f;\n    printf("Fast inverse sqrt of %.1f: %.6f\\n\", x, fastInvSqrt(x));\n    printf(\"Actual 1/sqrt: %.6f\\n\", 1.0f/sqrt(x));\n    return 0;\n}',
    hint: 'Quake III fast inverse square root algorithm'
  },
  {
    id: 'c_union_38',
    topicId: 'c_unions',
    question: 'Write a program to use union for 3D coordinate transformation.',
    mathSolution: 'Same memory as array or components',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nunion Point3D {\n    float coords[3];\n    struct { float x, y, z; };\n};\n\nfloat magnitude(union Point3D p) {\n    return sqrt(p.x * p.x + p.y * p.y + p.z * p.z);\n}\n\nint main() {\n    union Point3D pt;\n    pt.coords[0] = 3.0f;\n    pt.coords[1] = 4.0f;\n    pt.coords[2] = 0.0f;\n    printf("Point: (%.1f, %.1f, %.1f)\\n\", pt.x, pt.y, pt.z);\n    printf(\"Magnitude: %.1f\\n\", magnitude(pt));\n    return 0;\n}',
    hint: 'Flexible access to coordinates'
  },
  {
    id: 'c_union_39',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for configuration parameters.',
    mathSolution: 'Different config value types in one struct',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct ConfigParam {\n    char name[20];\n    enum { CONF_INT, CONF_FLOAT, CONF_STRING } type;\n    union {\n        int int_val;\n        float float_val;\n        char str_val[50];\n    } value;\n};\n\nint main() {\n    struct ConfigParam params[2];\n    strcpy(params[0].name, "max_users");\n    params[0].type = CONF_INT;\n    params[0].value.int_val = 100;\n    strcpy(params[1].name, "server_name");\n    params[1].type = CONF_STRING;\n    strcpy(params[1].value.str_val, "myserver\");\n    for(int i = 0; i < 2; i++) {\n        printf(\"%s = \", params[i].name);\n        if(params[i].type == CONF_INT)\n            printf(\"%d\\n\", params[i].value.int_val);\n        else if(params[i].type == CONF_STRING)\n            printf(\"%s\\n\", params[i].value.str_val);\n    }\n    return 0;\n}',
    hint: 'Configuration values can have different types'
  },
  {
    id: 'c_union_40',
    topicId: 'c_unions',
    question: 'Write a program to create array of pointers to unions.',
    mathSolution: 'Each pointer can point to different union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data u1, u2, u3;\n    u1.i = 10;\n    u2.f = 20.5f;\n    u3.i = 30;\n    union Data *ptrs[] = {&u1, &u2, &u3};\n    printf("Values via pointer array: \");\n    printf(\"%d \", ptrs[0]->i);\n    printf(\"%.1f \", ptrs[1]->f);\n    printf(\"%d\\n\", ptrs[2]->i);\n    return 0;\n}',
    hint: 'Array stores addresses of unions'
  },

  // ========== PRACTICAL APPLICATIONS (41-50) ==========
  {
    id: 'c_union_41',
    topicId: 'c_unions',
    question: 'Write a program to use union for event handling in GUI systems.',
    mathSolution: 'Different event types share union data',
    codeSolution: '#include <stdio.h>\n\nenum EventType { MOUSE_EVENT, KEYBOARD_EVENT, RESIZE_EVENT };\n\nstruct Event {\n    enum EventType type;\n    union {\n        struct { int x; int y; } mouse;\n        struct { int key; } keyboard;\n        struct { int width; int height; } resize;\n    } data;\n};\n\nint main() {\n    struct Event e = {MOUSE_EVENT, .data.mouse = {100, 200}};\n    if(e.type == MOUSE_EVENT)\n        printf("Mouse event at (%d, %d)\\n\", e.data.mouse.x, e.data.mouse.y);\n    return 0;\n}',
    hint: 'Union saves memory for mutually exclusive event data'
  },
  {
    id: 'c_union_42',
    topicId: 'c_unions',
    question: 'Write a program to use union for database field values.',
    mathSolution: 'Different SQL column types share storage',
    codeSolution: '#include <stdio.h>\n\nenum FieldType { TYPE_INT, TYPE_FLOAT, TYPE_TEXT };\n\nstruct Field {\n    enum FieldType type;\n    union {\n        int int_val;\n        float float_val;\n        char *text_val;\n    } data;\n};\n\nint main() {\n    struct Field f = {TYPE_INT, .data.int_val = 42};\n    printf("Field type: %d, value: %d\\n\", f.type, f.data.int_val);\n    return 0;\n}',
    hint: 'Databases store different types in same column space'
  },
  {
    id: 'c_union_43',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for byte swapping (endian conversion).',
    mathSolution: 'Swap bytes using union',
    codeSolution: '#include <stdio.h>\n\nunion Word {\n    unsigned short word;\n    unsigned char bytes[2];\n};\n\nunsigned short swapBytes(unsigned short val) {\n    union Word w;\n    w.word = val;\n    unsigned char temp = w.bytes[0];\n    w.bytes[0] = w.bytes[1];\n    w.bytes[1] = temp;\n    return w.word;\n}\n\nint main() {\n    unsigned short val = 0x1234;\n    printf("Original: 0x%04x\\n\", val);\n    printf("Swapped: 0x%04x\\n\", swapBytes(val));\n    return 0;\n}',
    hint: 'Union simplifies byte order conversion'
  },
  {
    id: 'c_union_44',
    topicId: 'c_unions',
    question: 'Write a program to create union for network byte order conversion.',
    mathSolution: 'Convert host to network byte order',
    codeSolution: '#include <stdio.h>\n\nunion LongBytes {\n    unsigned long value;\n    unsigned char bytes[4];\n};\n\nvoid toNetworkOrder(unsigned long *val) {\n    union LongBytes u;\n    u.value = *val;\n    if(u.bytes[0] != 0) return;\n    unsigned char temp = u.bytes[0];\n    u.bytes[0] = u.bytes[3];\n    u.bytes[3] = temp;\n    temp = u.bytes[1];\n    u.bytes[1] = u.bytes[2];\n    u.bytes[2] = temp;\n    *val = u.value;\n}\n\nint main() {\n    unsigned long host = 0x12345678;\n    printf("Host order: 0x%08lx\\n\", host);\n    toNetworkOrder(&host);\n    printf(\"Network order: 0x%08lx\\n\", host);\n    return 0;\n}',
    hint: 'Convert endianness for network communication'
  },
  {
    id: 'c_union_45',
    topicId: 'c_unions',
    question: 'Write a program to use union for employee record (different employee types).',
    mathSolution: 'Union for manager and worker data',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nenum EmpType { MANAGER, WORKER };\n\nstruct Employee {\n    char name[30];\n    enum EmpType type;\n    union {\n        float bonus;\n        int hourly_rate;\n    } salary;\n};\n\nint main() {\n    struct Employee e1 = {\"Alice\", MANAGER, .salary.bonus = 10000.0f};\n    struct Employee e2 = {\"Bob\", WORKER, .salary.hourly_rate = 25};\n    printf("%s (Manager): bonus = %.2f\\n\", e1.name, e1.salary.bonus);\n    printf(\"%s (Worker): hourly rate = %d\\n\", e2.name, e2.salary.hourly_rate);\n    return 0;\n}',
    hint: 'Different employee types have different pay structures'
  },
  {
    id: 'c_union_46',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for shape area calculation.',
    mathSolution: 'Different shapes share union for dimensions',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nenum ShapeType { CIRCLE, RECTANGLE, TRIANGLE };\n\nstruct Shape {\n    enum ShapeType type;\n    union {\n        float radius;\n        struct { float width, height; } rect;\n        struct { float base, height; } triangle;\n    } dimensions;\n};\n\nfloat area(struct Shape s) {\n    switch(s.type) {\n        case CIRCLE: return 3.14159f * s.dimensions.radius * s.dimensions.radius;\n        case RECTANGLE: return s.dimensions.rect.width * s.dimensions.rect.height;\n        case TRIANGLE: return 0.5f * s.dimensions.triangle.base * s.dimensions.triangle.height;\n    }\n    return 0;\n}\n\nint main() {\n    struct Shape shapes[3] = {\n        {CIRCLE, .dimensions.radius = 5.0f},\n        {RECTANGLE, .dimensions.rect = {4.0f, 6.0f}},\n        {TRIANGLE, .dimensions.triangle = {3.0f, 4.0f}}\n    };\n    for(int i = 0; i < 3; i++) {\n        printf("Shape %d area: %.2f\\n\", i+1, area(shapes[i]));\n    }\n    return 0;\n}',
    hint: 'Union stores different shape dimensions'
  },
  {
    id: 'c_union_47',
    topicId: 'c_unions',
    question: 'Write a program to use union for messaging system.',
    mathSolution: 'Different message types share union',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nenum MsgType { TEXT, IMAGE, VIDEO };\n\nstruct Message {\n    enum MsgType type;\n    union {\n        char text[200];\n        char image_path[100];\n        char video_path[100];\n    } content;\n};\n\nint main() {\n    struct Message msg = {TEXT, .content.text = "Hello World\"};\n    printf(\"Message type: \");\n    if(msg.type == TEXT) printf(\"Text: %s\\n\", msg.content.text);\n    return 0;\n}',
    hint: 'Different message types have different content'
  },
  {
    id: 'c_union_48',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for register access in embedded systems.',
    mathSolution: 'Access register as whole or individual bits',
    codeSolution: '#include <stdio.h>\n\nunion Register {\n    unsigned char value;\n    struct {\n        unsigned char bit0:1;\n        unsigned char bit1:1;\n        unsigned char bit2:1;\n        unsigned char bit3:1;\n        unsigned char bit4:1;\n        unsigned char bit5:1;\n        unsigned char bit6:1;\n        unsigned char bit7:1;\n    } bits;\n};\n\nint main() {\n    union Register reg;\n    reg.value = 0;\n    reg.bits.bit2 = 1;\n    reg.bits.bit5 = 1;\n    printf("Register value: 0x%02x\\n\", reg.value);\n    printf(\"Individual bits: \");\n    for(int i = 7; i >= 0; i--)\n        printf(\"%d\", (reg.value >> i) & 1);\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Union allows accessing register as byte or bits'
  },
  {
    id: 'c_union_49',
    topicId: 'c_unions',
    question: 'Write a program to use union for memory-efficient linked list node.',
    mathSolution: 'Node can be internal or leaf sharing memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nenum NodeType { INTERNAL, LEAF };\n\nstruct Node {\n    enum NodeType type;\n    union {\n        struct {\n            struct Node *left;\n            struct Node *right;\n        } internal;\n        int value;\n    } data;\n};\n\nint main() {\n    struct Node leaf = {LEAF, .data.value = 42};\n    printf(\"Leaf node value: %d\\n\", leaf.data.value);\n    return 0;\n}',
    hint: 'Union saves memory in tree structures'
  },
  {
    id: 'c_union_50',
    topicId: 'c_unions',
    question: 'Write a program to use union for polymorphic function call simulation.',
    mathSolution: 'Function pointers in union',
    codeSolution: '#include <stdio.h>\n\nvoid printInt(int x) { printf("Integer: %d\\n\", x); }\nvoid printFloat(double x) { printf(\"Float: %.2f\\n\", x); }\n\nunion Printer {\n    void (*intPrinter)(int);\n    void (*floatPrinter)(double);\n};\n\nint main() {\n    union Printer p;\n    p.intPrinter = printInt;\n    p.intPrinter(42);\n    p.floatPrinter = printFloat;\n    p.floatPrinter(3.14159);\n    return 0;\n}',
    hint: 'Union stores different function pointer types'
  }
);