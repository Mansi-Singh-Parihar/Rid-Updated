QuizData.questions.push(
  // ========== BASIC MAIN & ARGUMENT ACCESS (1-10) ==========
  {
    id: 'c_command_line_1',
    topicId: 'c_command_line',
    question: 'Write a program to print the program name from command line arguments.',
    mathSolution: 'argv[0] contains the program name',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./myprogram", "hello", "world"};\n    printf("Program name: %s\\n", args[0]);\n    return 0;\n}',
    hint: 'argv[0] always exists'
  },
  {
    id: 'c_command_line_2',
    topicId: 'c_command_line',
    question: 'Write a program to print all command line arguments.',
    mathSolution: 'Loop through argv array and print each argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "cherry"};\n    int count = 4;\n    for(int i = 0; i < count; i++) {\n        printf("Argument %d: %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argc is number of arguments'
  },
  {
    id: 'c_command_line_3',
    topicId: 'c_command_line',
    question: 'Write a program to count number of arguments (excluding program name).',
    mathSolution: 'argc - 1 gives argument count',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "arg1", "arg2", "arg3"};\n    int count = 4;\n    printf("Number of arguments: %d\\n", count - 1);\n    return 0;\n}',
    hint: 'Subtract program name'
  },
  {
    id: 'c_command_line_4',
    topicId: 'c_command_line',
    question: 'Write a program to check if no additional arguments are provided.',
    mathSolution: 'argc == 1 means no extra arguments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program"};\n    int count = 1;\n    if(count == 1) {\n        printf("No additional arguments\\n");\n    } else {\n        printf("Has %d additional arguments\\n", count - 1);\n    }\n    return 0;\n}',
    hint: 'Program name counts as arg'
  },
  {
    id: 'c_command_line_5',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argc and argv usage.',
    mathSolution: 'Print argc count and first argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second"};\n    int count = 3;\n    printf("argc = %d\\n", count);\n    if(count > 1) {\n        printf("First argument: %s\\n", args[1]);\n    }\n    return 0;\n}',
    hint: 'argv[1] is first argument'
  },
  {
    id: 'c_command_line_6',
    topicId: 'c_command_line',
    question: 'Write a program to print the last argument if exists.',
    mathSolution: 'argv[argc-1] is last argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "middle", "last"};\n    int count = 4;\n    if(count > 1) {\n        printf("Last argument: %s\\n", args[count-1]);\n    } else {\n        printf("No arguments\\n");\n    }\n    return 0;\n}',
    hint: 'Indices from 0 to argc-1'
  },
  {
    id: 'c_command_line_7',
    topicId: 'c_command_line',
    question: 'Write a program that demonstrates command line arguments length.',
    mathSolution: 'Print each argument and its length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world"};\n    int count = 3;\n    for(int i = 0; i < count; i++) {\n        printf("Arg %d: %s (length %lu)\\n", i, args[i], strlen(args[i]));\n    }\n    return 0;\n}',
    hint: 'Use strlen to get length'
  },
  {
    id: 'c_command_line_8',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to integer using atoi.',
    mathSolution: 'Use atoi() for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "42"};\n    int count = 2;\n    if(count > 1) {\n        int num = atoi(args[1]);\n        printf("Converted integer: %d\\n", num);\n    } else {\n        printf("No argument provided\\n");\n    }\n    return 0;\n}',
    hint: 'atoi returns 0 if conversion fails'
  },
  {
    id: 'c_command_line_9',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to float using atof.',
    mathSolution: 'Use atof() for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "3.14159"};\n    int count = 2;\n    if(count > 1) {\n        float num = atof(args[1]);\n        printf("Converted float: %.2f\\n", num);\n    } else {\n        printf("No argument provided\\n");\n    }\n    return 0;\n}',
    hint: 'atof returns 0.0 on error'
  },
  {
    id: 'c_command_line_10',
    topicId: 'c_command_line',
    question: 'Write a program to check for help option and display usage.',
    mathSolution: 'Compare argument with "-h" or "--help"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "--help"};\n    int count = 2;\n    if(count > 1 && (strcmp(args[1], "-h") == 0 || strcmp(args[1], "--help") == 0)) {\n        printf("Usage: program [options]\\n");\n        printf("  -h, --help  Show this help\\n");\n    } else {\n        printf("Run with -h for help\\n");\n    }\n    return 0;\n}',
    hint: 'Common convention for help'
  },

  // ========== NUMERIC ARGUMENT PROCESSING (11-20) ==========
  {
    id: 'c_command_line_11',
    topicId: 'c_command_line',
    question: 'Write a program to sum all numeric command line arguments.',
    mathSolution: 'Convert and accumulate using atoi',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "10", "20", "30", "40"};\n    int count = 5;\n    int sum = 0;\n    for(int i = 1; i < count; i++) {\n        sum += atoi(args[i]);\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Initialize sum to 0'
  },
  {
    id: 'c_command_line_12',
    topicId: 'c_command_line',
    question: 'Write a program to calculate average of numeric arguments.',
    mathSolution: 'Sum divided by count',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "10", "20", "30", "40", "50"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double sum = 0;\n    for(int i = 1; i < count; i++) {\n        sum += atof(args[i]);\n    }\n    printf("Average = %.2f\\n", sum / (count - 1));\n    return 0;\n}',
    hint: 'Use atof for floating point'
  },
  {
    id: 'c_command_line_13',
    topicId: 'c_command_line',
    question: 'Write a program to find maximum of numeric arguments.',
    mathSolution: 'Track largest value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "45", "12", "78", "34", "56"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double max = atof(args[1]);\n    for(int i = 2; i < count; i++) {\n        double val = atof(args[i]);\n        if(val > max) max = val;\n    }\n    printf("Maximum = %.2f\\n", max);\n    return 0;\n}',
    hint: 'Initialize max with first argument'
  },
  {
    id: 'c_command_line_14',
    topicId: 'c_command_line',
    question: 'Write a program to find minimum of numeric arguments.',
    mathSolution: 'Track smallest value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "45", "12", "78", "34", "56"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double min = atof(args[1]);\n    for(int i = 2; i < count; i++) {\n        double val = atof(args[i]);\n        if(val < min) min = val;\n    }\n    printf("Minimum = %.2f\\n", min);\n    return 0;\n}',
    hint: 'Initialize min with first argument'
  },
  {
    id: 'c_command_line_15',
    topicId: 'c_command_line',
    question: 'Write a program to check if first argument is even or odd.',
    mathSolution: 'Use modulo operator',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "17"};\n    int count = 2;\n    if(count < 2) {\n        printf("No argument provided\\n");\n        return 0;\n    }\n    int num = atoi(args[1]);\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
    hint: 'Even numbers divisible by 2'
  },
  {
    id: 'c_command_line_16',
    topicId: 'c_command_line',
    question: 'Write a program to check if argument is within range 1-100.',
    mathSolution: 'Compare with boundaries',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "75"};\n    int count = 2;\n    if(count < 2) {\n        printf("No argument provided\\n");\n        return 0;\n    }\n    int num = atoi(args[1]);\n    if(num >= 1 && num <= 100) {\n        printf("%d is in range 1-100\\n", num);\n    } else {\n        printf("%d is out of range 1-100\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND operator'
  },
  {
    id: 'c_command_line_17',
    topicId: 'c_command_line',
    question: 'Write a program to find product of numeric arguments.',
    mathSolution: 'Multiply all values',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "2", "3", "4", "5"};\n    int count = 5;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    long product = 1;\n    for(int i = 1; i < count; i++) {\n        product *= atol(args[i]);\n    }\n    printf("Product = %ld\\n", product);\n    return 0;\n}',
    hint: 'Initialize product to 1'
  },
  {
    id: 'c_command_line_18',
    topicId: 'c_command_line',
    question: 'Write a program to sort numeric arguments in ascending order.',
    mathSolution: 'Collect numbers, sort, print',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint compare(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    char *args[] = {"./program", "64", "25", "12", "22", "11"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    int n = count - 1;\n    int nums[n];\n    for(int i = 0; i < n; i++) {\n        nums[i] = atoi(args[i+1]);\n    }\n    qsort(nums, n, sizeof(int), compare);\n    printf("Sorted: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", nums[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use qsort for sorting'
  },
  {
    id: 'c_command_line_19',
    topicId: 'c_command_line',
    question: 'Write a program to reverse the order of arguments displayed.',
    mathSolution: 'Print arguments from last to first',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second", "third", "fourth"};\n    int count = 5;\n    printf("Arguments in reverse: ");\n    for(int i = count - 1; i >= 1; i--) {\n        printf("%s ", args[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Start from last index'
  },
  {
    id: 'c_command_line_20',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argument index and value.',
    mathSolution: 'Display each argument with its index',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "cherry"};\n    int count = 4;\n    for(int i = 0; i < count; i++) {\n        printf("Index %d: %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'Loop through all arguments'
  },

  // ========== STRING ARGUMENT PROCESSING (21-30) ==========
  {
    id: 'c_command_line_21',
    topicId: 'c_command_line',
    question: 'Write a program to concatenate all arguments into one string.',
    mathSolution: 'Join args with spaces',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "Hello", "World", "from", "C"};\n    int count = 5;\n    char result[256] = "";\n    for(int i = 1; i < count; i++) {\n        strcat(result, args[i]);\n        if(i < count - 1) strcat(result, " ");\n    }\n    printf("Concatenated: %s\\n", result);\n    return 0;\n}',
    hint: 'Watch buffer size'
  },
  {
    id: 'c_command_line_22',
    topicId: 'c_command_line',
    question: 'Write a program to find longest argument string.',
    mathSolution: 'Track argument with maximum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "grapefruit", "kiwi"};\n    int count = 5;\n    if(count < 2) {\n        printf("No arguments\\n");\n        return 0;\n    }\n    int max_len = strlen(args[1]);\n    char *longest = args[1];\n    for(int i = 2; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len > max_len) {\n            max_len = len;\n            longest = args[i];\n        }\n    }\n    printf("Longest: %s (length %d)\\n\", longest, max_len);\n    return 0;\n}',
    hint: 'Use strlen for length'
  },
  {
    id: 'c_command_line_23',
    topicId: 'c_command_line',
    question: 'Write a program to find shortest argument string.',
    mathSolution: 'Track argument with minimum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "kiwi", "grapefruit"};\n    int count = 5;\n    if(count < 2) {\n        printf("No arguments\\n");\n        return 0;\n    }\n    int min_len = strlen(args[1]);\n    char *shortest = args[1];\n    for(int i = 2; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len < min_len) {\n            min_len = len;\n            shortest = args[i];\n        }\n    }\n    printf("Shortest: %s (length %d)\\n\", shortest, min_len);\n    return 0;\n}',
    hint: 'Initialize with first argument'
  },
 {
    id: 'c_command_line_24',
    topicId: 'c_command_line',
    question: 'Write a program to count arguments starting with a specific letter.',
    mathSolution: 'Check first character of each argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *words[] = {"apple", "banana", "apricot", "grape", "avocado"};\n    char letter = \'a\';\n    int count = 0;\n    for(int i = 0; i < 5; i++) {\n        if(words[i][0] == letter) count++;\n    }\n    printf("Words starting with \'%c\': %d\\n", letter, count);\n    return 0;\n}',
    hint: 'Check first character of each word'
},
  {
    id: 'c_command_line_25',
    topicId: 'c_command_line',
    question: 'Write a program to remove duplicates from arguments.',
    mathSolution: 'Print only unique arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "apple", "grape", "banana"};\n    int count = 6;\n    printf("Unique arguments: ");\n    for(int i = 1; i < count; i++) {\n        int seen = 0;\n        for(int j = 1; j < i; j++) {\n            if(strcmp(args[i], args[j]) == 0) {\n                seen = 1;\n                break;\n            }\n        }\n        if(!seen) {\n            printf("%s ", args[i]);\n        }\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Compare with previous arguments'
  },
  {
    id: 'c_command_line_26',
    topicId: 'c_command_line',
    question: 'Write a program to print arguments that are numeric (only digits).',
    mathSolution: 'Check if all characters are digits',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *args[] = {"./program", "123", "abc", "456", "hello", "789"};\n    int count = 6;\n    printf("Numeric arguments: ");\n    for(int i = 1; i < count; i++) {\n        int is_num = 1;\n        for(int j = 0; args[i][j]; j++) {\n            if(!isdigit(args[i][j])) {\n                is_num = 0;\n                break;\n            }\n        }\n        if(is_num) printf("%s ", args[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use isdigit() for each character'
  },
  {
    id: 'c_command_line_27',
    topicId: 'c_command_line',
    question: 'Write a program to filter arguments containing a specific pattern.',
    mathSolution: 'Print arguments containing substring',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "abc", "hello", "abcd", "world", "bcd"};\n    int count = 6;\n    char *pattern = "bc";\n    printf("Pattern: %s\\n\", pattern);\n    printf(\"Matching: \");\n    for(int i = 1; i < count; i++) {\n        if(strstr(args[i], pattern) != NULL) {\n            printf(\"%s \", args[i]);\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Use strstr() to find substring'
  },
  {
    id: 'c_command_line_28',
    topicId: 'c_command_line',
    question: 'Write a program to check if a filename ends with ".txt".',
    mathSolution: 'Compare last 4 characters',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "document.txt", "image.jpg", "data.txt", "report.pdf"};\n    int count = 5;\n    for(int i = 1; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len >= 4 && strcmp(args[i] + len - 4, ".txt") == 0) {\n            printf("%s is a text file\\n\", args[i]);\n        }\n    }\n    return 0;\n}',
    hint: 'Compare end of string'
  },
  {
    id: 'c_command_line_29',
    topicId: 'c_command_line',
    question: 'Write a program to convert arguments to uppercase.',
    mathSolution: 'Use toupper() on each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world", "test"};\n    int count = 4;\n    printf("Uppercase arguments: \");\n    for(int i = 1; i < count; i++) {\n        for(int j = 0; args[i][j]; j++) {\n            putchar(toupper(args[i][j]));\n        }\n        printf(\" \");\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Loop through each character'
  },
  {
    id: 'c_command_line_30',
    topicId: 'c_command_line',
    question: 'Write a program to sort arguments alphabetically.',
    mathSolution: 'Use qsort with strcmp',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint compare(const void *a, const void *b) {\n    return strcmp(*(const char**)a, *(const char**)b);\n}\n\nint main() {\n    char *args[] = {"./program", "banana", "apple", "cherry", "date"};\n    int count = 5;\n    qsort(args + 1, count - 1, sizeof(char*), compare);\n    printf("Sorted arguments: \");\n    for(int i = 1; i < count; i++) {\n        printf("%s \", args[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Sort pointers to strings'
  },

  // ========== FLAG AND OPTION PARSING (31-40) ==========
  {
    id: 'c_command_line_31',
    topicId: 'c_command_line',
    question: 'Write a program to detect verbose flag in arguments.',
    mathSolution: 'Search for -v or --verbose flag',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "-v", "input.txt"};\n    int count = 3;\n    int verbose = 0;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], "-v") == 0 || strcmp(args[i], "--verbose") == 0) {\n            verbose = 1;\n        }\n    }\n    if(verbose) {\n        printf("Verbose mode ON\\n\");\n    } else {\n        printf(\"Verbose mode OFF\\n\");\n    }\n    return 0;\n}',
    hint: 'Check each argument for flag'
  },
 {
    id: 'c_command_line_32',
    topicId: 'c_command_line',
    question: 'Write a program to parse key=value arguments.',
    mathSolution: 'Split on = character',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "name=John";\n    char *delim = strchr(str, \'=\');\n    if(delim) {\n        *delim = \'\\0\';\n        printf("Key: %s\\n", str);\n        printf("Value: %s\\n", delim + 1);\n    }\n    return 0;\n}',
    hint: 'Format: key=value'
},
  {
    id: 'c_command_line_33',
    topicId: 'c_command_line',
    question: 'Write a program to handle combined short options (-abc).',
    mathSolution: 'Parse each character after hyphen',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "-abc"};\n    int count = 2;\n    int a_flag = 0, b_flag = 0, c_flag = 0;\n    for(int i = 1; i < count; i++) {\n        if(args[i][0] == \'-\' && args[i][1] != \'-\') {\n            for(int j = 1; args[i][j]; j++) {\n                if(args[i][j] == \'a\') a_flag = 1;\n                if(args[i][j] == \'b\') b_flag = 1;\n                if(args[i][j] == \'c\') c_flag = 1;\n            }\n        }\n    }\n    printf("Flags -a: %d, -b: %d, -c: %d\\n\", a_flag, b_flag, c_flag);\n    return 0;\n}',
    hint: 'Loop through each character after hyphen'
  },
  {
    id: 'c_command_line_34',
    topicId: 'c_command_line',
    question: 'Write a program to set debug level with -d option.',
    mathSolution: 'Parse -d value from arguments',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "-d", "3"};\n    int count = 3;\n    int debug = 0;\n    for(int i = 1; i < count - 1; i++) {\n        if(strcmp(args[i], "-d") == 0) {\n            debug = atoi(args[i+1]);\n        }\n    }\n    printf("Debug level: %d\\n\", debug);\n    return 0;\n}',
    hint: 'Level increases verbosity'
  },
{
    id: 'c_command_line_35',
    topicId: 'c_command_line',
    question: 'Write a program to parse --long-option=value format.',
    mathSolution: 'Split on = character for long options',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char option[] = "--output=result.txt";\n    char *delim = strchr(option, \'=\');\n    if(delim) {\n        *delim = \'\\0\';\n        printf("Option: %s\\n", option);\n        printf("Value: %s\\n", delim + 1);\n    }\n    return 0;\n}',
    hint: 'Format: --option=value'
},
  {
    id: 'c_command_line_36',
    topicId: 'c_command_line',
    question: 'Write a program to check for --help and show usage.',
    mathSolution: 'Display help message if --help present',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "--help"};\n    int count = 2;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], \"--help") == 0) {\n            printf("Usage: program [options]\\n\");\n            printf(\"Options:\\n\");\n            printf(\"  --help    Show this help\\n\");\n            printf(\"  --version Show version\\n\");\n            return 0;\n        }\n        if(strcmp(args[i], \"--version") == 0) {\n            printf(\"Version 1.0\\n\");\n            return 0;\n        }\n    }\n    printf(\"Run with --help for usage\\n\");\n    return 0;\n}',
    hint: 'Check for help flag first'
  },
  {
    id: 'c_command_line_37',
    topicId: 'c_command_line',
    question: 'Write a program to process hostname and port from command line.',
    mathSolution: 'First argument host, second port',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "localhost", "8080"};\n    int count = 3;\n    if(count != 3) {\n        printf("Usage: %s <host> <port>\\n\", args[0]);\n        return 0;\n    }\n    char *host = args[1];\n    int port = atoi(args[2]);\n    printf("Connect to %s on port %d\\n\", host, port);\n    return 0;\n}',
    hint: 'Port must be number'
  },
  {
    id: 'c_command_line_38',
    topicId: 'c_command_line',
    question: 'Write a program to handle optional port with default value.',
    mathSolution: 'Use default if no port specified',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char host[] = "localhost";\n    int port = 8080;\n    printf("Connecting to %s on port %d\\n", host, port);\n    return 0;\n}',
    hint: 'Default port if not specified'
},
 {
    id: 'c_command_line_39',
    topicId: 'c_command_line',
    question: 'Write a program to validate argument count and show usage message.',
    mathSolution: 'Check argc and display proper usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "input.txt", "output.txt"};\n    int count = 3;\n    if(count != 3) {\n        printf("Error: Need 2 arguments\\n");\n        printf("Usage: program <input> <output>\\n");\n        return 1;\n    }\n    printf("Input: %s, Output: %s\\n", args[1], args[2]);\n    return 0;\n}',
    hint: 'Return non-zero on error'
},
  {
    id: 'c_command_line_40',
    topicId: 'c_command_line',
    question: 'Write a program to display program usage and version.',
    mathSolution: 'Show help and version information',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program: Command Line Demo\\n\");\n    printf(\"Version: 1.0\\n\");\n    printf(\"Usage: program [options] [arguments]\\n\");\n    printf(\"Options:\\n\");\n    printf(\"  -h, --help    Show this help\\n\");\n    printf(\"  -v, --verbose  Enable verbose output\\n\");\n    return 0;\n}',
    hint: 'Display version information'
  },

  // ========== SIMULATION AND DEMONSTRATION (41-50) ==========
  {
    id: 'c_command_line_41',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate basic command line argument parsing.',
    mathSolution: 'Print all arguments with their indices',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "arg1", "arg2", "arg3"};\n    int count = 4;\n    printf("Demonstration of command line arguments:\\n\");\n    printf(\"Total arguments: %d\\n\", count);\n    for(int i = 0; i < count; i++) {\n        printf(\"Argument %d: %s\\n\", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argc counts program name'
  },
  {
    id: 'c_command_line_42',
    topicId: 'c_command_line',
    question: 'Write a program to show different ways to access command line arguments.',
    mathSolution: 'Demonstrate argv indexing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second", "third"};\n    int count = 4;\n    printf("Program: %s\\n\", args[0]);\n    if(count > 1) printf(\"First arg: %s\\n\", args[1]);\n    if(count > 2) printf(\"Second arg: %s\\n\", args[2]);\n    if(count > 3) printf(\"Third arg: %s\\n\", args[3]);\n    return 0;\n}',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_command_line_43',
    topicId: 'c_command_line',
    question: 'Write a program to simulate command line argument count.',
    mathSolution: 'Create simulated arguments array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *simulated_args[] = {"program", "arg1", "arg2", "arg3"};\n    int sim_argc = 4;\n    printf("Simulated argc = %d\\n\", sim_argc);\n    for(int i = 0; i < sim_argc; i++) {\n        printf(\"argv[%d] = %s\\n\", i, simulated_args[i]);\n    }\n    return 0;\n}',
    hint: 'Simulate when no real args'
  },
  {
    id: 'c_command_line_44',
    topicId: 'c_command_line',
    question: 'Write a program to count number of characters in all arguments.',
    mathSolution: 'Sum of lengths of all arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world", "test"};\n    int count = 4;\n    int total = 0;\n    for(int i = 1; i < count; i++) {\n        total += strlen(args[i]);\n    }\n    printf("Total characters in arguments: %d\\n\", total);\n    return 0;\n}',
    hint: 'Use strlen for each argument'
  },
  {
    id: 'c_command_line_45',
    topicId: 'c_command_line',
    question: 'Write a program to create a simple command line argument processor.',
    mathSolution: 'Parse and process arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"program", "-o", "output.txt", "input.txt"};\n    int count = 4;\n    char *input = NULL, *output = NULL;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], "-o") == 0 && i+1 < count) {\n            output = args[++i];\n        } else {\n            input = args[i];\n        }\n    }\n    printf("Input file: %s\\n\", input ? input : \"none\");\n    printf(\"Output file: %s\\n\", output ? output : \"none\");\n    return 0;\n}',
    hint: 'Process flags and arguments'
  },
  {
    id: 'c_command_line_46',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate command line argument preservation.',
    mathSolution: 'Store arguments in array for later use',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"prog", "-f", "file.txt", "-v"};\n    int count = 4;\n    char *stored[10];\n    for(int i = 0; i < count; i++) {\n        stored[i] = args[i];\n    }\n    printf("Stored arguments: \");\n    for(int i = 0; i < count; i++) {\n        printf("%s \", stored[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Store for later processing'
  },
  {
    id: 'c_command_line_47',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to long integer.',
    mathSolution: 'Use atol for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "123456789"};\n    int count = 2;\n    if(count > 1) {\n        long num = atol(args[1]);\n        printf("Long integer: %ld\\n\", num);\n    } else {\n        printf("No argument provided\\n\");\n    }\n    return 0;\n}',
    hint: 'atol converts string to long'
  },
  {
    id: 'c_command_line_48',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argument validation.',
    mathSolution: 'Check if argument is valid number',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *arg = "12345";\n    int valid = 1;\n    for(int i = 0; arg[i]; i++) {\n        if(!isdigit(arg[i])) {\n            valid = 0;\n            break;\n        }\n    }\n    if(valid) {\n        printf("Valid number: %s\\n\", arg);\n    } else {\n        printf(\"Invalid number: %s\\n\", arg);\n    }\n    return 0;\n}',
    hint: 'Validate before conversion'
  },
  {
    id: 'c_command_line_49',
    topicId: 'c_command_line',
    question: 'Write a program to display formatted command line arguments.',
    mathSolution: 'Format arguments with labels',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"program", "--input=data.txt", "--verbose"};\n    int count = 3;\n    printf("Command line arguments:\\n\");\n    printf("  argv[0]: %s (program name)\\n\", args[0]);\n    for(int i = 1; i < count; i++) {\n        printf(\"  argv[%d]: %s\\n\", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'Format output nicely'
  },
  {
    id: 'c_command_line_50',
    topicId: 'c_command_line',
    question: 'Write a program to simulate complete command line argument handling.',
    mathSolution: 'Process all arguments with flags',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *argv[] = {"prog", "-v", "--name=test", "file.txt"};\n    int argc = 4;\n    int verbose = 0;\n    char *name = NULL;\n    char *file = NULL;\n    for(int i = 1; i < argc; i++) {\n        if(strcmp(argv[i], "-v") == 0) {\n            verbose = 1;\n        } else if(strncmp(argv[i], "--name=", 7) == 0) {\n            name = argv[i] + 7;\n        } else {\n            file = argv[i];\n        }\n    }\n    printf("Verbose: %d\\n\", verbose);\n    printf(\"Name: %s\\n\", name ? name : \"default\");\n    printf(\"File: %s\\n\", file ? file : \"none\");\n    return 0;\n}',
    hint: 'Complete argument processing'
  }
);