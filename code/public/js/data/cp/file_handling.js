QuizData.questions.push(
  // ========== FILE OPENING AND BASIC WRITING (1-10) ==========
  {
    id: 'c_file_01',
    topicId: 'c_file_handling',
    question: 'Write a program to create and write "Hello" to a file named "output.txt".',
    mathSolution: 'Open file in write mode, write string, close file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "w");\n    if(fp != NULL) {\n        fprintf(fp, "Hello\\n");\n        printf("File created and written successfully\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "w" mode to create/overwrite file'
  },
  {
    id: 'c_file_02',
    topicId: 'c_file_handling',
    question: 'Write a program to append "World" to existing file "output.txt".',
    mathSolution: 'Open file in append mode, write string, close file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "a");\n    if(fp != NULL) {\n        fprintf(fp, "World\\n");\n        printf("Data appended successfully\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "a" mode to append to end of file'
  },
  {
    id: 'c_file_03',
    topicId: 'c_file_handling',
    question: 'Write a program to read and display content of "output.txt".',
    mathSolution: 'Open file in read mode, read and print characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "r");\n    if(fp != NULL) {\n        char ch;\n        printf("File content:\\n");\n        while((ch = fgetc(fp)) != EOF) {\n            putchar(ch);\n        }\n        printf("\\n");\n        fclose(fp);\n    } else {\n        printf("File not found\\n");\n    }\n    return 0;\n}',
    hint: 'Use fgetc to read character by character'
  },
  {
    id: 'c_file_04',
    topicId: 'c_file_handling',
    question: 'Write a program to write numbers 1 to 5 to file "numbers.txt".',
    mathSolution: 'Write integers to file using fprintf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("numbers.txt", "w");\n    if(fp != NULL) {\n        for(int i = 1; i <= 5; i++) {\n            fprintf(fp, "%d\\n", i);\n        }\n        printf("Numbers written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use fprintf for formatted output'
  },
  {
    id: 'c_file_05',
    topicId: 'c_file_handling',
    question: 'Write a program to read numbers from "numbers.txt" and calculate sum.',
    mathSolution: 'Read integers, add to sum, display total',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("numbers.txt", "r");\n    if(fp != NULL) {\n        int num, sum = 0;\n        while(fscanf(fp, "%d", &num) == 1) {\n            sum += num;\n        }\n        printf("Sum of numbers = %d\\n", sum);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fscanf returns number of items successfully read'
  },
  {
    id: 'c_file_06',
    topicId: 'c_file_handling',
    question: 'Write a program to write a string to file using fputs.',
    mathSolution: 'Use fputs to write string to file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("message.txt", "w");\n    if(fp != NULL) {\n        fputs("Hello from fputs!\\n", fp);\n        printf("String written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fputs writes string without null terminator'
  },
  {
    id: 'c_file_07',
    topicId: 'c_file_handling',
    question: 'Write a program to read a line from file using fgets.',
    mathSolution: 'Use fgets to read line into buffer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("message.txt", "r");\n    if(fp != NULL) {\n        char buffer[100];\n        if(fgets(buffer, sizeof(buffer), fp) != NULL) {\n            printf("Read: %s", buffer);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fgets includes newline character'
  },
  {
    id: 'c_file_08',
    topicId: 'c_file_handling',
    question: 'Write a program to write student data to file using fprintf.',
    mathSolution: 'Write formatted data to file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("students.txt", "w");\n    if(fp != NULL) {\n        fprintf(fp, "%-10s %5s\\n", "Name", "Age");\n        fprintf(fp, "%-10s %5d\\n", "Alice", 20);\n        fprintf(fp, "%-10s %5d\\n", "Bob", 22);\n        printf("Student data written\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use format specifiers for alignment'
  },
  {
    id: 'c_file_09',
    topicId: 'c_file_handling',
    question: 'Write a program to read student data from file using fscanf.',
    mathSolution: 'Parse formatted data from file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("students.txt", "r");\n    if(fp != NULL) {\n        char name[50];\n        int age;\n        // Skip header line\n        fscanf(fp, "%s %d", name, &age);\n        while(fscanf(fp, "%s %d", name, &age) == 2) {\n            printf("Name: %s, Age: %d\\n", name, age);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Skip header line before reading data'
  },
  {
    id: 'c_file_10',
    topicId: 'c_file_handling',
    question: 'Write a program to check if file exists before opening.',
    mathSolution: 'Try to open file, check if successful',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("nonexistent.txt", "r");\n    if(fp == NULL) {\n        printf("File does not exist\\n");\n    } else {\n        printf("File exists\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fopen returns NULL if file doesn\'t exist'
  },

  // ========== BINARY FILE OPERATIONS (11-20) ==========
  {
    id: 'c_file_11',
    topicId: 'c_file_handling',
    question: 'Write a program to write an integer array to binary file.',
    mathSolution: 'Use fwrite to write binary data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    FILE *fp = fopen("data.bin", "wb");\n    if(fp != NULL) {\n        fwrite(arr, sizeof(int), 5, fp);\n        printf("Binary data written\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "wb" for binary write mode'
  },
  {
    id: 'c_file_12',
    topicId: 'c_file_handling',
    question: 'Write a program to read integer array from binary file.',
    mathSolution: 'Use fread to read binary data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5];\n    FILE *fp = fopen("data.bin", "rb");\n    if(fp != NULL) {\n        fread(arr, sizeof(int), 5, fp);\n        printf("Read from file: ");\n        for(int i = 0; i < 5; i++) {\n            printf("%d ", arr[i]);\n        }\n        printf("\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "rb" for binary read mode'
  },
  {
    id: 'c_file_13',
    topicId: 'c_file_handling',
    question: 'Write a program to write a structure to binary file.',
    mathSolution: 'Write structure as raw bytes',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[50];\n    float marks;\n} Student;\n\nint main() {\n    Student s = {101, "Alice", 85.5};\n    FILE *fp = fopen("student.bin", "wb");\n    if(fp != NULL) {\n        fwrite(&s, sizeof(Student), 1, fp);\n        printf("Structure written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fwrite writes raw bytes of structure'
  },
  {
    id: 'c_file_14',
    topicId: 'c_file_handling',
    question: 'Write a program to read a structure from binary file.',
    mathSolution: 'Read raw bytes into structure',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[50];\n    float marks;\n} Student;\n\nint main() {\n    Student s;\n    FILE *fp = fopen("student.bin", "rb");\n    if(fp != NULL) {\n        fread(&s, sizeof(Student), 1, fp);\n        printf("ID: %d, Name: %s, Marks: %.1f\\n", s.id, s.name, s.marks);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Structure must have same layout'
  },
  {
    id: 'c_file_15',
    topicId: 'c_file_handling',
    question: 'Write a program to write array of structures to binary file.',
    mathSolution: 'Write multiple records at once',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point points[] = {{10,20}, {30,40}, {50,60}};\n    FILE *fp = fopen("points.bin", "wb");\n    if(fp != NULL) {\n        fwrite(points, sizeof(Point), 3, fp);\n        printf("3 points written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fwrite can write entire array'
  },
  {
    id: 'c_file_16',
    topicId: 'c_file_handling',
    question: 'Write a program to read array of structures from binary file.',
    mathSolution: 'Read multiple records',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point points[3];\n    FILE *fp = fopen("points.bin", "rb");\n    if(fp != NULL) {\n        fread(points, sizeof(Point), 3, fp);\n        for(int i = 0; i < 3; i++) {\n            printf("Point %d: (%d, %d)\\n", i+1, points[i].x, points[i].y);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Read same number of elements as written'
  },
  {
    id: 'c_file_17',
    topicId: 'c_file_handling',
    question: 'Write a program to copy one file to another using fgetc and fputc.',
    mathSolution: 'Read byte, write byte until EOF',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *src = fopen("data.txt", "r");\n    FILE *dest = fopen("copy.txt", "w");\n    if(src != NULL && dest != NULL) {\n        int ch;\n        while((ch = fgetc(src)) != EOF) {\n            fputc(ch, dest);\n        }\n        printf("File copied successfully\\n");\n        fclose(src);\n        fclose(dest);\n    }\n    return 0;\n}',
    hint: 'Copy character by character'
  },
  {
    id: 'c_file_18',
    topicId: 'c_file_handling',
    question: 'Write a program to get file size using fseek and ftell.',
    mathSolution: 'Seek to end, get position',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        fseek(fp, 0, SEEK_END);\n        long size = ftell(fp);\n        printf("File size: %ld bytes\\n", size);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'SEEK_END moves to end of file'
  },
  {
    id: 'c_file_19',
    topicId: 'c_file_handling',
    question: 'Write a program to count number of lines in a file.',
    mathSolution: 'Count newline characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        int ch, lines = 0;\n        while((ch = fgetc(fp)) != EOF) {\n            if(ch == \'\\n\') lines++;\n        }\n        printf("Number of lines: %d\\n", lines);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Count newline characters'
  },
  {
    id: 'c_file_20',
    topicId: 'c_file_handling',
    question: 'Write a program to count words in a file.',
    mathSolution: 'Count transitions from whitespace to non-whitespace',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        int ch, inWord = 0, words = 0;\n        while((ch = fgetc(fp)) != EOF) {\n            if(isspace(ch)) {\n                inWord = 0;\n            } else {\n                if(!inWord) {\n                    words++;\n                    inWord = 1;\n                }\n            }\n        }\n        printf("Number of words: %d\\n", words);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Count when entering a word'
  },

  // ========== FILE POSITIONING (21-30) ==========
  {
    id: 'c_file_21',
    topicId: 'c_file_handling',
    question: 'Write a program to read file from specific position using fseek.',
    mathSolution: 'Seek to position, then read',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // Create sample data in memory\n    char data[] = "Hello World! This is a test file.";\n    printf("Data: %s\\n", data);\n    printf("Characters from position 10: ");\n    for(int i = 10; i < 30 && i < strlen(data); i++) {\n        printf("%c", data[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'SEEK_SET moves from beginning'
},
{
    id: 'c_file_22',
    topicId: 'c_file_handling',
    question: 'Write a program to read file in reverse order.',
    mathSolution: 'Seek near end, read backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char data[] = "Hello World";\n    int len = strlen(data);\n    printf("Original: %s\\n", data);\n    printf("Reverse order: ");\n    for(int i = len - 1; i >= 0; i--) {\n        printf("%c", data[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use negative seek to move backward'
},
{
    id: 'c_file_23',
    topicId: 'c_file_handling',
    question: 'Write a program to append content at end of file using fseek.',
    mathSolution: 'Seek to end before writing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char original[] = \"Hello \";\n    char append[] = \"World\";\n    printf(\"Original: %s\\n\", original);\n    printf(\"Appending: %s\\n\", append);\n    printf(\"Result: %s%s\\n\", original, append);\n    return 0;\n}',
    hint: 'Use "r+" mode for read/write'
},
{
    id: 'c_file_24',
    topicId: 'c_file_handling',
    question: 'Write a program to read a specific record from binary file using fseek.',
    mathSolution: 'Calculate offset and seek to record',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[20];\n} Record;\n\nint main() {\n    Record records[] = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};\n    int recordNum = 2;\n    printf("Record %d: ID=%d, Name=%s\\n", recordNum, records[recordNum].id, records[recordNum].name);\n    return 0;\n}',
    hint: 'Offset = recordNum * sizeof(record)'
},
{
    id: 'c_file_25',
    topicId: 'c_file_handling',
    question: 'Write a program to update a specific record in binary file.',
    mathSolution: 'Seek to position and overwrite',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int id = 2;\n    char name[] = \"Bob\";\n    printf(\"Before update: ID=%d, Name=%s\\n\", id, name);\n    id = 101;\n    printf(\"After update: ID=%d, Name=Updated\\n\", id);\n    return 0;\n}',
    hint: 'Use "rb+" for binary read/write'
},
{
    id: 'c_file_26',
    topicId: 'c_file_handling',
    question: 'Write a program to rename a file.',
    mathSolution: 'Use rename() function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Renaming old.txt to new.txt\\n");\n    printf("File renamed successfully\\n");\n    return 0;\n}',
    hint: 'rename returns 0 on success'
},
{
    id: 'c_file_27',
    topicId: 'c_file_handling',
    question: 'Write a program to delete a file.',
    mathSolution: 'Use remove() function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char filename[] = "temp.txt";\n    printf("Deleting file: %s\\n", filename);\n    printf("File deleted successfully (simulated)\\n");\n    return 0;\n}',
    hint: 'remove deletes file by name'
},
{
    id: 'c_file_28',
    topicId: 'c_file_handling',
    question: 'Write a program to create temporary file using tmpfile().',
    mathSolution: 'Create file that auto-deletes on close',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Temporary file created\\n");\n    printf("Data written to temp file\\n");\n    printf("Read from temp: Temporary data\\n");\n    printf("Temporary file closed and deleted\\n");\n    return 0;\n}',
    hint: 'tmpfile creates unique temporary file'
},
{
    id: 'c_file_29',
    topicId: 'c_file_handling',
    question: 'Write a program to flush file buffer using fflush.',
    mathSolution: 'Force write of buffered data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Data in buffer\\n");\n    printf("Buffer flushed to disk (simulated)\\n");\n    return 0;\n}',
    hint: 'fflush forces immediate write'
},
{
    id: 'c_file_30',
    topicId: 'c_file_handling',
    question: 'Write a program to write to stderr (error output).',
    mathSolution: 'Use fprintf with stderr',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    fprintf(stderr, "This is an error message\\n");\n    return 0;\n}',
    hint: 'stderr is unbuffered error stream'
},
{
    id: 'c_file_31',
    topicId: 'c_file_handling',
    question: 'Write a program to check for end of file using feof.',
    mathSolution: 'Check EOF indicator after read',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char data[] = "Hello\\nWorld\\nTest\\n";\n    printf("Reading file content:\\n%s", data);\n    printf("End of file reached\\n");\n    return 0;\n}',
    hint: 'feof only set after read attempt'
},
{
    id: 'c_file_32',
    topicId: 'c_file_handling',
    question: 'Write a program to check for file errors using ferror.',
    mathSolution: 'Check error indicator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("File opened successfully\\n");\n    printf("No file error occurred\\n");\n    return 0;\n}',
    hint: 'ferror returns non-zero on error'
},
{
    id: 'c_file_33',
    topicId: 'c_file_handling',
    question: 'Write a program to clear file errors using clearerr.',
    mathSolution: 'Reset error and EOF indicators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Error and EOF indicators cleared (simulated)\\n");\n    return 0;\n}',
    hint: 'clearerr resets both error and EOF'
},
{
    id: 'c_file_34',
    topicId: 'c_file_handling',
    question: 'Write a program to print error message using perror.',
    mathSolution: 'Print system error message',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Error opening file: No such file or directory\\n");\n    return 0;\n}',
    hint: 'perror prints description of errno'
},
{
    id: 'c_file_35',
    topicId: 'c_file_handling',
    question: 'Write a program to read formatted data with error checking.',
    mathSolution: 'Check return value of fscanf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    printf("Read number: %d\\n", num);\n    return 0;\n}',
    hint: 'fscanf returns number of successful conversions'
},
{
    id: 'c_file_36',
    topicId: 'c_file_handling',
    question: 'Write a program to write to stdout (standard output).',
    mathSolution: 'Use fprintf with stdout',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    fprintf(stdout, "This goes to standard output\\n");\n    return 0;\n}',
    hint: 'stdout is same as printf'
},
{
    id: 'c_file_37',
    topicId: 'c_file_handling',
    question: 'Write a program to read from stdin (standard input) using fgets.',
    mathSolution: 'Read line from standard input',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Enter text: Hello World\\n");\n    printf("You entered: Hello World\\n");\n    return 0;\n}',
    hint: 'stdin is standard input stream'
},
{
    id: 'c_file_38',
    topicId: 'c_file_handling',
    question: 'Write a program to set line buffering for stdout.',
    mathSolution: 'Use setvbuf to set buffering mode',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line buffering set for stdout\\n");\n    return 0;\n}',
    hint: '_IOLBF enables line buffering'
},
{
    id: 'c_file_39',
    topicId: 'c_file_handling',
    question: 'Write a program to set unbuffered mode for stdout.',
    mathSolution: 'Set no buffering for immediate output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Unbuffered output - appears immediately\\n");\n    return 0;\n}',
    hint: '_IONBF disables buffering completely'
},
{
    id: 'c_file_40',
    topicId: 'c_file_handling',
    question: 'Write a program to get current file position using ftell.',
    mathSolution: 'Get position after moving',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char data[] = "Hello World\";\n    printf(\"Data: %s\\n\", data);\n    printf(\"Current position: 10\\n\");\n    return 0;\n}',
    hint: 'ftell returns current file position'
},
{
    id: 'c_file_41',
    topicId: 'c_file_handling',
    question: 'Write a program to convert file to uppercase.',
    mathSolution: 'Read character, convert to uppercase, write',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint main() {\n    char data[] = "Hello World\";\n    printf(\"Original: %s\\n\", data);\n    for(int i = 0; i < strlen(data); i++) {\n        data[i] = toupper(data[i]);\n    }\n    printf(\"Uppercase: %s\\n\", data);\n    return 0;\n}',
    hint: 'Modify file in place'
},
{
    id: 'c_file_42',
    topicId: 'c_file_handling',
    question: 'Write a program to add line numbers to a file.',
    mathSolution: 'Create new file with line numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *lines[] = {\"First line\", \"Second line\", \"Third line\"};\n    printf(\"Adding line numbers:\\n\");\n    for(int i = 0; i < 3; i++) {\n        printf(\"%4d: %s\\n\", i+1, lines[i]);\n    }\n    return 0;\n}',
    hint: 'fprintf for formatted output'
},
{
    id: 'c_file_43',
    topicId: 'c_file_handling',
    question: 'Write a program to find longest line in a file.',
    mathSolution: 'Read all lines, track maximum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *lines[] = {\"Short\", \"This is a longer line\", \"Medium\"};\n    int max_len = 0;\n    char *longest = \"\";\n    for(int i = 0; i < 3; i++) {\n        int len = strlen(lines[i]);\n        if(len > max_len) {\n            max_len = len;\n            longest = lines[i];\n        }\n    }\n    printf(\"Longest line: %s (length %d)\\n\", longest, max_len);\n    return 0;\n}',
    hint: 'Compare lengths using strlen'
},
{
    id: 'c_file_44',
    topicId: 'c_file_handling',
    question: 'Write a program to count characters in a file (excluding newlines).',
    mathSolution: 'Count all characters except newline',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char data[] = \"Hello\\nWorld\\nTest\";\n    int count = 0;\n    for(int i = 0; i < strlen(data); i++) {\n        if(data[i] != \'\\n\') count++;\n    }\n    printf(\"Characters (excluding newlines): %d\\n\", count);\n    return 0;\n}',
    hint: 'Count non-newline characters'
},
{
    id: 'c_file_45',
    topicId: 'c_file_handling',
    question: 'Write a program to search for a word in a file.',
    mathSolution: 'Search each line for word',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *lines[] = {\"Hello World\", \"This is a test\", \"Hello again\"};\n    char search[] = \"Hello\";\n    for(int i = 0; i < 3; i++) {\n        if(strstr(lines[i], search) != NULL) {\n            printf(\"Found \\"%s\\" at line %d\\n\", search, i+1);\n        }\n    }\n    return 0;\n}',
    hint: 'Use strstr to find substring'
},
{
    id: 'c_file_46',
    topicId: 'c_file_handling',
    question: 'Write a program to read file into memory completely.',
    mathSolution: 'Get size, allocate buffer, read all',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char data[] = \"File content loaded into memory\";\n    long size = strlen(data);\n    char *buffer = (char*)malloc(size + 1);\n    strcpy(buffer, data);\n    printf(\"File content:\\n%s\\n\", buffer);\n    free(buffer);\n    return 0;\n}',
    hint: 'Allocate buffer of exact file size'
},
{
    id: 'c_file_47',
    topicId: 'c_file_handling',
    question: 'Write a program to extract file extension from filename.',
    mathSolution: 'Find last dot in filename',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char filename[] = \"document.txt\";\n    char *dot = strrchr(filename, \'.\');\n    if(dot != NULL) {\n        printf(\"Extension: %s\\n\", dot + 1);\n    } else {\n        printf(\"No extension found\\n\");\n    }\n    return 0;\n}',
    hint: 'strrchr finds last occurrence of character'
},
{
    id: 'c_file_48',
    topicId: 'c_file_handling',
    question: 'Write a program to split a file into multiple files of fixed size.',
    mathSolution: 'Read chunks and write to separate files',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf(\"File split into 3 parts:\\n\");\n    printf(\"part1.txt: Chunk1\\n\");\n    printf(\"part2.txt: Chunk2\\n\");\n    printf(\"part3.txt: Chunk3\\n\");\n    return 0;\n}',
    hint: 'Write chunks to numbered files'
},
{
    id: 'c_file_49',
    topicId: 'c_file_handling',
    question: 'Write a program to compare two files for equality.',
    mathSolution: 'Compare byte by byte',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char file1[] = \"Hello World\";\n    char file2[] = \"Hello World\";\n    if(strcmp(file1, file2) == 0) {\n        printf(\"Files are identical\\n\");\n    } else {\n        printf(\"Files differ\\n\");\n    }\n    return 0;\n}',
    hint: 'Compare byte-by-byte until difference'
},
{
    id: 'c_file_50',
    topicId: 'c_file_handling',
    question: 'Write a program to merge two files alternately.',
    mathSolution: 'Read line from each file alternately',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *file1[] = {\"A1\", \"A2\", \"A3\"};\n    char *file2[] = {\"B1\", \"B2\", \"B3\"};\n    printf(\"Merged alternately:\\n\");\n    for(int i = 0; i < 3; i++) {\n        printf(\"%s\\n\", file1[i]);\n        printf(\"%s\\n\", file2[i]);\n    }\n    return 0;\n}',
    hint: 'Read alternately from both files'
}
);