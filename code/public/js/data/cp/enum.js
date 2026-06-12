QuizData.questions.push(
  // ========== BASIC ENUM DECLARATION (1-10) ==========
  {
    id: 'c_enum_1',
    topicId: 'c_enum',
    question: 'Write a program to declare enum for days of week and print values.',
    mathSolution: 'Enum with 7 constants: Sunday to Saturday (0-6)',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };\n\nint main() {\n    printf("Sunday = %d\\n", Sunday);\n    printf("Monday = %d\\n", Monday);\n    printf("Tuesday = %d\\n", Tuesday);\n    printf("Wednesday = %d\\n", Wednesday);\n    printf("Thursday = %d\\n", Thursday);\n    printf("Friday = %d\\n", Friday);\n    printf("Saturday = %d\\n", Saturday);\n    return 0;\n}',
    hint: 'Use enum keyword followed by tag and members in braces'
  },
  {
    id: 'c_enum_2',
    topicId: 'c_enum',
    question: 'Write a program to declare enum variable and assign value.',
    mathSolution: 'Create enum variable and set to Wednesday',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };\n\nint main() {\n    enum Weekday today = Wednesday;\n    printf("Today = %d\\n", today);\n    return 0;\n}',
    hint: 'Use enum tag followed by variable name'
  },
  {
    id: 'c_enum_3',
    topicId: 'c_enum',
    question: 'Write a program to use enum in switch statement.',
    mathSolution: 'Switch based on day of week',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };\n\nint main() {\n    enum Weekday day = Wednesday;\n    switch(day) {\n        case Monday: printf("Start of work week\\n"); break;\n        case Wednesday: printf("Mid week\\n"); break;\n        case Friday: printf("TGIF\\n"); break;\n        case Sunday: printf("Weekend\\n"); break;\n        default: printf("Another day\\n"); break;\n    }\n    return 0;\n}',
    hint: 'Cases use enum constants'
  },
  {
    id: 'c_enum_4',
    topicId: 'c_enum',
    question: 'Write a program to create enum with custom values.',
    mathSolution: 'Assign specific values to enum constants',
    codeSolution: '#include <stdio.h>\n\nenum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 };\n\nint main() {\n    printf("OK = %d\\n", OK);\n    printf("Not Found = %d\\n", NotFound);\n    printf("Server Error = %d\\n", ServerError);\n    return 0;\n}',
    hint: 'Assign any integer values to constants'
  },
  {
    id: 'c_enum_5',
    topicId: 'c_enum',
    question: 'Write a program to use typedef with enum.',
    mathSolution: 'Create type alias for enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { Red, Green, Blue } Color;\n\nint main() {\n    Color c = Green;\n    printf("Green = %d\\n", c);\n    return 0;\n}',
    hint: 'Now can use Color as type without enum keyword'
  },
  {
    id: 'c_enum_6',
    topicId: 'c_enum',
    question: 'Write a program to use enum in function parameter.',
    mathSolution: 'Pass enum to function',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LOW, MEDIUM, HIGH } Level;\n\nvoid printLevel(Level l) {\n    switch(l) {\n        case LOW: printf("Low\\n"); break;\n        case MEDIUM: printf("Medium\\n"); break;\n        case HIGH: printf("High\\n"); break;\n    }\n}\n\nint main() {\n    printLevel(MEDIUM);\n    return 0;\n}',
    hint: 'Enum as parameter type'
  },
  {
    id: 'c_enum_7',
    topicId: 'c_enum',
    question: 'Write a program to return enum from function.',
    mathSolution: 'Function returns enum value',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SMALL, MEDIUM, LARGE } Size;\n\nSize getSize(int value) {\n    if(value < 10) return SMALL;\n    if(value < 100) return MEDIUM;\n    return LARGE;\n}\n\nint main() {\n    Size s = getSize(50);\n    printf("Size = %d\\n", s);\n    return 0;\n}',
    hint: 'Return enum constant from function'
  },
  {
    id: 'c_enum_8',
    topicId: 'c_enum',
    question: 'Write a program to use enum as array indices.',
    mathSolution: 'Array indexed by enum',
    codeSolution: '#include <stdio.h>\n\nenum Month { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC };\n\nint main() {\n    int days[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\n    printf("January has %d days\\n", days[JAN]);\n    printf("March has %d days\\n", days[MAR]);\n    printf("October has %d days\\n", days[OCT]);\n    return 0;\n}',
    hint: 'Enum constants as indices (must be sequential)'
  },
  {
    id: 'c_enum_9',
    topicId: 'c_enum',
    question: 'Write a program to create anonymous enum for constants.',
    mathSolution: 'Enum without tag for constants',
    codeSolution: '#include <stdio.h>\n\nenum { MAX_USERS = 100, BUFFER_SIZE = 1024, TIMEOUT = 30 };\n\nint main() {\n    printf("Max Users = %d\\n", MAX_USERS);\n    printf("Buffer Size = %d\\n", BUFFER_SIZE);\n    printf("Timeout = %d seconds\\n", TIMEOUT);\n    return 0;\n}',
    hint: 'Alternative to #define for integer constants'
  },
  {
    id: 'c_enum_10',
    topicId: 'c_enum',
    question: 'Write a program to find size of enum.',
    mathSolution: 'Size of enum variable',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { A, B, C } MyEnum;\n\nint main() {\n    printf("Size of enum = %zu bytes\\n", sizeof(MyEnum));\n    return 0;\n}',
    hint: 'Enum size is typically 4 bytes (like int)'
  },

  // ========== ENUM WITH BIT FLAGS (11-20) ==========
  {
    id: 'c_enum_11',
    topicId: 'c_enum',
    question: 'Write a program to use enum for bit flags.',
    mathSolution: 'Powers of 2 for bit flags',
    codeSolution: '#include <stdio.h>\n\nenum Permissions { READ = 1, WRITE = 2, EXECUTE = 4 };\n\nint main() {\n    int perms = READ | WRITE;\n    if(perms & READ) printf("Read permission granted\\n");\n    if(perms & WRITE) printf("Write permission granted\\n");\n    if(perms & EXECUTE) printf("Execute permission granted\\n");\n    return 0;\n}',
    hint: 'Use powers of 2 for bit flags'
  },
  {
    id: 'c_enum_12',
    topicId: 'c_enum',
    question: 'Write a program to combine and test bit flags.',
    mathSolution: 'Combine flags with OR, test with AND',
    codeSolution: '#include <stdio.h>\n\nenum Options { OPT_A = 1, OPT_B = 2, OPT_C = 4, OPT_D = 8 };\n\nint main() {\n    int flags = OPT_A | OPT_C;\n    printf("Flags: A=%d, B=%d, C=%d, D=%d\\n",\n           (flags & OPT_A) ? 1 : 0,\n           (flags & OPT_B) ? 1 : 0,\n           (flags & OPT_C) ? 1 : 0,\n           (flags & OPT_D) ? 1 : 0);\n    return 0;\n}',
    hint: 'Bitwise AND to test, OR to combine'
  },
  {
    id: 'c_enum_13',
    topicId: 'c_enum',
    question: 'Write a program to add and remove bit flags.',
    mathSolution: 'Set and clear bits using OR and AND NOT',
    codeSolution: '#include <stdio.h>\n\nenum Flags { FLAG1 = 1, FLAG2 = 2, FLAG3 = 4, FLAG4 = 8 };\n\nint main() {\n    int flags = 0;\n    flags |= FLAG2;\n    flags |= FLAG4;\n    printf("After adding: %d\\n", flags);\n    flags &= ~FLAG2;\n    printf("After removing FLAG2: %d\\n\", flags);\n    return 0;\n}',
    hint: 'Use |= to add, &= ~ to remove'
  },
  {
    id: 'c_enum_14',
    topicId: 'c_enum',
    question: 'Write a program to create enum for error codes.',
    mathSolution: 'Error codes with specific values',
    codeSolution: '#include <stdio.h>\n\nenum ErrorCode { SUCCESS = 0, ERR_NULL = -1, ERR_MEM = -2, ERR_IO = -3 };\n\nint main() {\n    printf("SUCCESS = %d\\n", SUCCESS);\n    printf("ERR_NULL = %d\\n", ERR_NULL);\n    printf("ERR_MEM = %d\\n", ERR_MEM);\n    printf("ERR_IO = %d\\n", ERR_IO);\n    return 0;\n}',
    hint: 'Error codes can be negative'
  },
  {
    id: 'c_enum_15',
    topicId: 'c_enum',
    question: 'Write a program to use enum for state machine (traffic light).',
    mathSolution: 'Traffic light states',
    codeSolution: '#include <stdio.h>\n\nenum TrafficLight { RED, YELLOW, GREEN };\n\nint main() {\n    enum TrafficLight state = RED;\n    printf("Initial state: %d (RED)\\n\", state);\n    state = GREEN;\n    printf(\"After change: %d (GREEN)\\n\", state);\n    state = YELLOW;\n    printf(\"After change: %d (YELLOW)\\n\", state);\n    return 0;\n}',
    hint: 'States as enum constants'
  },
  {
    id: 'c_enum_16',
    topicId: 'c_enum',
    question: 'Write a program to loop through enum values.',
    mathSolution: 'Iterate from first to last enum constant',
    codeSolution: '#include <stdio.h>\n\nenum Color { Red, Green, Blue, Yellow, Purple };\n\nint main() {\n    for(enum Color c = Red; c <= Purple; c++) {\n        printf("Color value: %d\\n", c);\n    }\n    return 0;\n}',
    hint: 'Assumes sequential values from 0 to n-1'
  },
  {
    id: 'c_enum_17',
    topicId: 'c_enum',
    question: 'Write a program to map enum to string names.',
    mathSolution: 'Array of strings for enum names',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { MON, TUE, WED, THU, FRI, SAT, SUN } Weekday;\n\nint main() {\n    const char *names[] = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};\n    for(Weekday d = MON; d <= SUN; d++) {\n        printf("%d = %s\\n", d, names[d]);\n    }\n    return 0;\n}',
    hint: 'Lookup table for string names'
  },
  {
    id: 'c_enum_18',
    topicId: 'c_enum',
    question: 'Write a program to use enum in structure.',
    mathSolution: 'Struct with enum field',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { IDLE, RUNNING, STOPPED } State;\n\nstruct Process {\n    int pid;\n    State status;\n};\n\nint main() {\n    struct Process p = {1234, RUNNING};\n    printf("Process %d status = %d\\n\", p.pid, p.status);\n    return 0;\n}',
    hint: 'Struct member can be enum type'
  },
  {
    id: 'c_enum_19',
    topicId: 'c_enum',
    question: 'Write a program to create array of enums.',
    mathSolution: 'Array storing enum values',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SMALL, MEDIUM, LARGE } Size;\n\nint main() {\n    Size sizes[] = {SMALL, LARGE, MEDIUM, SMALL, LARGE};\n    for(int i = 0; i < 5; i++) {\n        printf("sizes[%d] = %d\\n\", i, sizes[i]);\n    }\n    return 0;\n}',
    hint: 'Array of enum type'
  },
  {
    id: 'c_enum_20',
    topicId: 'c_enum',
    question: 'Write a program to compare enum with integer.',
    mathSolution: 'Enum can be compared with int',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { ZERO, ONE, TWO } Number;\n\nint main() {\n    Number n = ONE;\n    if(n == 1) {\n        printf("Enum ONE equals integer 1\\n");\n    }\n    return 0;\n}',
    hint: 'Enums are integers internally'
  },

  // ========== ENUM FOR MENU SYSTEMS (21-30) ==========
  {
    id: 'c_enum_21',
    topicId: 'c_enum',
    question: 'Write a program to use enum for menu options.',
    mathSolution: 'Menu choices as enum',
    codeSolution: '#include <stdio.h>\n\nenum Menu { NEW, OPEN, SAVE, EXIT };\n\nint main() {\n    int choice = SAVE;\n    switch(choice) {\n        case NEW: printf("New file\\n"); break;\n        case OPEN: printf("Open file\\n"); break;\n        case SAVE: printf("Save file\\n"); break;\n        case EXIT: printf("Exit\\n"); break;\n        default: printf("Invalid choice\\n");\n    }\n    return 0;\n}',
    hint: 'Menu options as enum constants'
  },
  {
    id: 'c_enum_22',
    topicId: 'c_enum',
    question: 'Write a program to use enum for priority levels.',
    mathSolution: 'Priority constants',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LOW, NORMAL, HIGH, URGENT } Priority;\n\nint main() {\n    Priority tasks[] = {HIGH, LOW, URGENT, NORMAL};\n    for(int i = 0; i < 4; i++) {\n        printf("Task %d priority = %d\\n\", i+1, tasks[i]);\n    }\n    return 0;\n}',
    hint: 'Different priority levels'
  },
  {
    id: 'c_enum_23',
    topicId: 'c_enum',
    question: 'Write a program to use enum for direction.',
    mathSolution: 'Cardinal directions',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NORTH, SOUTH, EAST, WEST } Direction;\n\nint main() {\n    Direction d = EAST;\n    printf("Direction = %d\\n", d);\n    if(d == EAST) printf("Moving East\\n");\n    return 0;\n}',
    hint: 'Four cardinal directions'
  },
  {
    id: 'c_enum_24',
    topicId: 'c_enum',
    question: 'Write a program to use enum for log levels.',
    mathSolution: 'Logging severity levels',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { DEBUG, INFO, WARN, ERROR, FATAL } LogLevel;\n\nint main() {\n    LogLevel level = ERROR;\n    printf("Log level = %d\\n", level);\n    if(level >= ERROR) {\n        printf("This is an error message\\n");\n    }\n    return 0;\n}',
    hint: 'Log levels as enum constants'
  },
  {
    id: 'c_enum_25',
    topicId: 'c_enum',
    question: 'Write a program to use enum for boolean values.',
    mathSolution: 'Boolean as enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { FALSE, TRUE } Bool;\n\nint main() {\n    Bool isReady = TRUE;\n    if(isReady) {\n        printf("Ready!\\n");\n    }\n    return 0;\n}',
    hint: 'FALSE=0, TRUE=1 by default'
  },
  {
    id: 'c_enum_26',
    topicId: 'c_enum',
    question: 'Write a program to use enum for months.',
    mathSolution: 'Month names as enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { JAN=1, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } Month;\n\nint main() {\n    Month m = MAR;\n    printf("March is month %d\\n\", m);\n    return 0;\n}',
    hint: 'Months with custom starting value'
  },
  {
    id: 'c_enum_27',
    topicId: 'c_enum',
    question: 'Write a program to use enum for file modes.',
    mathSolution: 'File open modes',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { READ, WRITE, READ_WRITE, APPEND } FileMode;\n\nint main() {\n    FileMode mode = READ_WRITE;\n    printf("File mode = %d\\n", mode);\n    return 0;\n}',
    hint: 'File access modes'
  },
  {
    id: 'c_enum_28',
    topicId: 'c_enum',
    question: 'Write a program to use enum for data types.',
    mathSolution: 'Data type identifiers',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { TYPE_INT, TYPE_FLOAT, TYPE_STRING, TYPE_BOOL } DataType;\n\nint main() {\n    DataType types[] = {TYPE_INT, TYPE_STRING, TYPE_FLOAT, TYPE_BOOL};\n    for(int i = 0; i < 4; i++) {\n        printf("Type %d = %d\\n\", i+1, types[i]);\n    }\n    return 0;\n}',
    hint: 'Type identifiers for variant data'
  },
  {
    id: 'c_enum_29',
    topicId: 'c_enum',
    question: 'Write a program to create enum with duplicate values.',
    mathSolution: 'Different names same value',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS = 0, OK = 0, ERROR = -1, FAIL = -1 } Result;\n\nint main() {\n    printf("SUCCESS = %d, OK = %d\\n", SUCCESS, OK);\n    printf("ERROR = %d, FAIL = %d\\n", ERROR, FAIL);\n    return 0;\n}',
    hint: 'Enums can have duplicate values'
  },
  {
    id: 'c_enum_30',
    topicId: 'c_enum',
    question: 'Write a program to use enum pointer.',
    mathSolution: 'Pointer to enum variable',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { RED, GREEN, BLUE } Color;\n\nint main() {\n    Color c = GREEN;\n    Color *ptr = &c;\n    printf("Original: %d\\n", c);\n    *ptr = BLUE;\n    printf("After pointer: %d\\n", c);\n    return 0;\n}',
    hint: 'Pointers work with enums like with int'
  },

  // ========== ENUM IN DATA STRUCTURES (31-40) ==========
  {
    id: 'c_enum_31',
    topicId: 'c_enum',
    question: 'Write a program to use enum for task status.',
    mathSolution: 'Task status tracking',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { PENDING, IN_PROGRESS, COMPLETED, CANCELLED } TaskStatus;\n\nstruct Task {\n    int id;\n    TaskStatus status;\n};\n\nint main() {\n    struct Task t = {101, IN_PROGRESS};\n    printf("Task %d status = %d\\n\", t.id, t.status);\n    return 0;\n}',
    hint: 'Status as enum in struct'
  },
  {
    id: 'c_enum_32',
    topicId: 'c_enum',
    question: 'Write a program to use enum for player states in game.',
    mathSolution: 'Game character states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { IDLE, WALKING, RUNNING, JUMPING, ATTACKING } PlayerState;\n\nint main() {\n    PlayerState state = IDLE;\n    printf("Initial state: %d (IDLE)\\n\", state);\n    state = RUNNING;\n    printf(\"After action: %d (RUNNING)\\n\", state);\n    return 0;\n}',
    hint: 'Player states as enum'
  },
  {
    id: 'c_enum_33',
    topicId: 'c_enum',
    question: 'Write a program to use enum for HTTP methods.',
    mathSolution: 'REST API methods',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { GET, POST, PUT, DELETE, PATCH } HttpMethod;\n\nint main() {\n    HttpMethod method = POST;\n    printf("HTTP Method = %d (POST)\\n\", method);\n    return 0;\n}',
    hint: 'HTTP verbs as enum'
  },
  {
    id: 'c_enum_34',
    topicId: 'c_enum',
    question: 'Write a program to use enum for sorting order.',
    mathSolution: 'Ascending or descending',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { ASCENDING, DESCENDING } SortOrder;\n\nint main() {\n    SortOrder order = DESCENDING;\n    if(order == ASCENDING)\n        printf("Sorting ascending\\n");\n    else\n        printf("Sorting descending\\n");\n    return 0;\n}',
    hint: 'Sort direction enum'
  },
  {
    id: 'c_enum_35',
    topicId: 'c_enum',
    question: 'Write a program to use enum for CPU states.',
    mathSolution: 'Processor states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { HALTED, RUNNING, SLEEPING, INTERRUPT } CPUState;\n\nint main() {\n    CPUState state = RUNNING;\n    printf("CPU State = %d\\n", state);\n    return 0;\n}',
    hint: 'CPU state machine'
  },
  {
    id: 'c_enum_36',
    topicId: 'c_enum',
    question: 'Write a program to use enum for connection types.',
    mathSolution: 'Network connection types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { WIFI, ETHERNET, CELLULAR, BLUETOOTH } ConnectionType;\n\nint main() {\n    ConnectionType conn = WIFI;\n    printf("Connection = %d (WIFI)\\n\", conn);\n    return 0;\n}',
    hint: 'Different connection technologies'
  },
  {
    id: 'c_enum_37',
    topicId: 'c_enum',
    question: 'Write a program to use enum for encryption algorithms.',
    mathSolution: 'Cipher types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { AES_128, AES_256, DES, RC4 } Cipher;\n\nint main() {\n    Cipher c = AES_256;\n    printf("Cipher = %d (AES-256)\\n\", c);\n    return 0;\n}',
    hint: 'Encryption algorithm enum'
  },
  {
    id: 'c_enum_38',
    topicId: 'c_enum',
    question: 'Write a program to use enum for file types.',
    mathSolution: 'File type identifiers',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { REGULAR, DIRECTORY, SYMLINK, SOCKET, PIPE } FileType;\n\nint main() {\n    FileType ft = DIRECTORY;\n    printf("File type = %d\\n", ft);\n    return 0;\n}',
    hint: 'Unix file types'
  },
  {
    id: 'c_enum_39',
    topicId: 'c_enum',
    question: 'Write a program to use enum for window states.',
    mathSolution: 'GUI window states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NORMAL, MINIMIZED, MAXIMIZED, FULLSCREEN } WindowState;\n\nint main() {\n    WindowState ws = MAXIMIZED;\n    printf("Window state = %d\\n\", ws);\n    return 0;\n}',
    hint: 'Window display states'
  },
  {
    id: 'c_enum_40',
    topicId: 'c_enum',
    question: 'Write a program to use enum for alignment options.',
    mathSolution: 'Text alignment',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LEFT, CENTER, RIGHT, JUSTIFY } Alignment;\n\nint main() {\n    Alignment align = CENTER;\n    printf("Alignment = %d\\n", align);\n    return 0;\n}',
    hint: 'Text alignment constants'
  },

  // ========== ENUM FOR GAME AND GRAPHICS (41-50) ==========
  {
    id: 'c_enum_41',
    topicId: 'c_enum',
    question: 'Write a program to use enum for difficulty levels.',
    mathSolution: 'Game difficulty settings',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { EASY, NORMAL, HARD, EXPERT } Difficulty;\n\nint main() {\n    Difficulty diff = HARD;\n    printf("Difficulty = %d\\n", diff);\n    return 0;\n}',
    hint: 'Difficulty levels'
  },
  {
    id: 'c_enum_42',
    topicId: 'c_enum',
    question: 'Write a program to use enum for shape types.',
    mathSolution: 'Geometric shapes',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { CIRCLE, SQUARE, TRIANGLE, RECTANGLE } Shape;\n\nint main() {\n    Shape s = CIRCLE;\n    printf("Shape = %d\\n", s);\n    return 0;\n}',
    hint: 'Shape identifiers'
  },
  {
    id: 'c_enum_43',
    topicId: 'c_enum',
    question: 'Write a program to use enum for audio formats.',
    mathSolution: 'Audio codec types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { MP3, WAV, FLAC, AAC, OGG } AudioFormat;\n\nint main() {\n    AudioFormat af = FLAC;\n    printf("Audio format = %d\\n\", af);\n    return 0;\n}',
    hint: 'Audio compression formats'
  },
  {
    id: 'c_enum_44',
    topicId: 'c_enum',
    question: 'Write a program to use enum for video resolutions.',
    mathSolution: 'Display resolutions',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SD, HD, FULL_HD, QHD, UHD_4K } Resolution;\n\nint main() {\n    Resolution res = FULL_HD;\n    printf("Resolution = %d\\n", res);\n    return 0;\n}',
    hint: 'Video quality levels'
  },
  {
    id: 'c_enum_45',
    topicId: 'c_enum',
    question: 'Write a program to use enum for input devices.',
    mathSolution: 'Peripheral types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { KEYBOARD, MOUSE, TOUCH, JOYSTICK, GAMEPAD } InputDevice;\n\nint main() {\n    InputDevice dev = MOUSE;\n    printf("Input device = %d\\n\", dev);\n    return 0;\n}',
    hint: 'Input device identifiers'
  },
  {
    id: 'c_enum_46',
    topicId: 'c_enum',
    question: 'Write a program to use enum for texture filtering.',
    mathSolution: '3D texture filter types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NEAREST, LINEAR, BILINEAR, TRILINEAR, ANISOTROPIC } Filter;\n\nint main() {\n    Filter f = LINEAR;\n    printf("Filter = %d\\n", f);\n    return 0;\n}',
    hint: 'Texture filtering modes'
  },
  {
    id: 'c_enum_47',
    topicId: 'c_enum',
    question: 'Write a program to use enum for blending modes.',
    mathSolution: 'Graphics blend modes',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NORMAL_BLEND, ADDITIVE, MULTIPLY, SCREEN } BlendMode;\n\nint main() {\n    BlendMode bm = ADDITIVE;\n    printf("Blend mode = %d\\n\", bm);\n    return 0;\n}',
    hint: 'Blending operations'
  },
  {
    id: 'c_enum_48',
    topicId: 'c_enum',
    question: 'Write a program to use enum for weather conditions.',
    mathSolution: 'Weather types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUNNY, CLOUDY, RAINY, SNOWY, FOGGY, STORMY } Weather;\n\nint main() {\n    Weather w = SUNNY;\n    printf("Weather = %d\\n", w);\n    return 0;\n}',
    hint: 'Weather condition enum'
  },
  {
    id: 'c_enum_49',
    topicId: 'c_enum',
    question: 'Write a program to use enum for payment methods.',
    mathSolution: 'Payment types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { CASH, CREDIT_CARD, DEBIT_CARD, PAYPAL, CRYPTO } PaymentMethod;\n\nint main() {\n    PaymentMethod pm = CREDIT_CARD;\n    printf("Payment method = %d\\n\", pm);\n    return 0;\n}',
    hint: 'Payment method identifiers'
  },
  {
    id: 'c_enum_50',
    topicId: 'c_enum',
    question: 'Write a program to use enum for blood types.',
    mathSolution: 'Blood group types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { A_POS, A_NEG, B_POS, B_NEG, O_POS, O_NEG, AB_POS, AB_NEG } BloodType;\n\nint main() {\n    BloodType bt = O_POS;\n    printf("Blood type = %d\\n\", bt);\n    return 0;\n}',
    hint: 'Blood group enum'
  }
);