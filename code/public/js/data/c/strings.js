QuizData.questions.push(
  // ========== STRING BASICS (1-10) ==========
  {
    id: 'c_str_01',
    topicId: 'c_strings',
    question: 'Write a program to declare and print a string "Hello".',
    mathSolution: 'Array needs 6 characters (5 letters + null terminator)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'Don\'t forget space for null character \\0'
  },
  {
    id: 'c_str_02',
    topicId: 'c_strings',
    question: 'Write a program to print string "World" using pointer.',
    mathSolution: 'Pointer points to string literal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "World";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'String literals are arrays of characters'
  },
  {
    id: 'c_str_03',
    topicId: 'c_strings',
    question: 'Write a program to find length of "Hello" using strlen.',
    mathSolution: 'Length is 5 (excludes null terminator)',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int len = strlen("Hello");\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'strlen returns number of characters before \\0'
  },
  {
    id: 'c_str_04',
    topicId: 'c_strings',
    question: 'Write a program to manually calculate length of "Hello".',
    mathSolution: 'Iterate until null terminator found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = 0;\n    while(str[len] != \'\\0\') {\n        len++;\n    }\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Stop when character is \\0'
  },
  {
    id: 'c_str_05',
    topicId: 'c_strings',
    question: 'Write a program to copy string "Hello" to another using strcpy.',
    mathSolution: 'Copies including null terminator',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    strcpy(dest, src);\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Ensure destination has enough space'
  },
  {
    id: 'c_str_06',
    topicId: 'c_strings',
    question: 'Write a program to manually copy string "Hello".',
    mathSolution: 'Copy character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    int i = 0;\n    while((dest[i] = src[i]) != \'\\0\') {\n        i++;\n    }\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy character by character until null'
  },
  {
    id: 'c_str_07',
    topicId: 'c_strings',
    question: 'Write a program to concatenate "Hello " and "World" using strcat.',
    mathSolution: 'Appends second string to first',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    strcat(str1, str2);\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Destination must have enough space'
  },
  {
    id: 'c_str_08',
    topicId: 'c_strings',
    question: 'Write a program to manually concatenate "Hello " and "World".',
    mathSolution: 'Find end of first, then copy second',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    int i = 0, j = 0;\n    while(str1[i] != \'\\0\') i++;\n    while((str1[i++] = str2[j++]) != \'\\0\');\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'First find null of dest, then copy src'
  },
  {
    id: 'c_str_09',
    topicId: 'c_strings',
    question: 'Write a program to compare "Hello" and "Hello" using strcmp.',
    mathSolution: 'Returns 0 if equal',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    if(strcmp(str1, str2) == 0)\n        printf("Strings are equal\\n");\n    else\n        printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'strcmp returns 0 for equality'
  },
  {
    id: 'c_str_10',
    topicId: 'c_strings',
    question: 'Write a program to manually compare "Hello" and "Hello".',
    mathSolution: 'Compare character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    int i = 0, equal = 1;\n    while(str1[i] != \'\\0\' || str2[i] != \'\\0\') {\n        if(str1[i] != str2[i]) {\n            equal = 0;\n            break;\n        }\n        i++;\n    }\n    if(equal) printf("Strings are equal\\n");\n    else printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'Compare char by char until mismatch'
  },

  // ========== STRING SEARCHING AND CONVERSION (11-20) ==========
  {
    id: 'c_str_11',
    topicId: 'c_strings',
    question: 'Write a program to find first occurrence of \'l\' in "Hello".',
    mathSolution: 'Search linearly for character',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    char *pos = strchr(str, \'l\');\n    if(pos != NULL)\n        printf("First \'l\' at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strchr returns pointer to first match'
  },
  {
    id: 'c_str_12',
    topicId: 'c_strings',
    question: 'Write a program to find last occurrence of \'l\' in "Hello".',
    mathSolution: 'Search from end backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    char *pos = strrchr(str, \'l\');\n    if(pos != NULL)\n        printf("Last \'l\' at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strrchr finds last occurrence'
  },
  {
    id: 'c_str_13',
    topicId: 'c_strings',
    question: 'Write a program to find substring "World" in "Hello World".',
    mathSolution: 'Search for substring pattern',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    char *pos = strstr(str, "World");\n    if(pos != NULL)\n        printf("Found at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strstr returns pointer to start of match'
  },
  {
    id: 'c_str_14',
    topicId: 'c_strings',
    question: 'Write a program to convert "hello" to uppercase.',
    mathSolution: 'Loop through and convert each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    for(int i = 0; str[i]; i++) {\n        str[i] = toupper(str[i]);\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Use toupper() function from ctype.h'
  },
  {
    id: 'c_str_15',
    topicId: 'c_strings',
    question: 'Write a program to convert "HELLO" to lowercase.',
    mathSolution: 'Loop through and convert each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "HELLO";\n    for(int i = 0; str[i]; i++) {\n        str[i] = tolower(str[i]);\n    }\n    printf("Lowercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Use tolower() function from ctype.h'
  },
  {
    id: 'c_str_16',
    topicId: 'c_strings',
    question: 'Write a program to reverse string "Hello".',
    mathSolution: 'Swap first with last, move inward',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = strlen(str);\n    for(int i = 0, j = len-1; i < j; i++, j--) {\n        char temp = str[i];\n        str[i] = str[j];\n        str[j] = temp;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from ends'
  },
  {
    id: 'c_str_17',
    topicId: 'c_strings',
    question: 'Write a program to count vowels in "Hello World".',
    mathSolution: 'Count vowels using vowel check',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i = 0; str[i]; i++) {\n        char ch = tolower(str[i]);\n        if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\')\n            count++;\n    }\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Check each character for vowels'
  },
  {
    id: 'c_str_18',
    topicId: 'c_strings',
    question: 'Write a program to count consonants in "Hello World".',
    mathSolution: 'Count alphabets that are not vowels',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i = 0; str[i]; i++) {\n        char ch = tolower(str[i]);\n        if(isalpha(ch)) {\n            if(!(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\'))\n                count++;\n        }\n    }\n    printf("Consonants = %d\\n", count);\n    return 0;\n}',
    hint: 'Alphabets that are not vowels'
  },
  {
    id: 'c_str_19',
    topicId: 'c_strings',
    question: 'Write a program to check if "madam" is palindrome.',
    mathSolution: 'Compare first with last, etc',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "madam";\n    int len = strlen(str);\n    int is_palindrome = 1;\n    for(int i = 0, j = len-1; i < j; i++, j--) {\n        if(str[i] != str[j]) {\n            is_palindrome = 0;\n            break;\n        }\n    }\n    if(is_palindrome) printf("%s is palindrome\\n", str);\n    else printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from both ends'
  },
  {
    id: 'c_str_20',
    topicId: 'c_strings',
    question: 'Write a program to split "Hello World from C" into words using strtok.',
    mathSolution: 'Tokenize based on spaces',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    char *token = strtok(str, " ");\n    while(token != NULL) {\n        printf("%s\\n", token);\n        token = strtok(NULL, " ");\n    }\n    return 0;\n}',
    hint: 'First call with string, subsequent with NULL'
  },

  // ========== STRING VALIDATION (21-30) ==========
  {
    id: 'c_str_21',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello123" contains only alphabets.',
    mathSolution: 'Use isalpha for each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello123";\n    int only_alpha = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isalpha(str[i])) {\n            only_alpha = 0;\n            break;\n        }\n    }\n    if(only_alpha) printf("Only alphabets\\n");\n    else printf("Contains non-alphabets\\n");\n    return 0;\n}',
    hint: 'isalpha returns non-zero for letters'
  },
  {
    id: 'c_str_22',
    topicId: 'c_strings',
    question: 'Write a program to check if string "12345" contains only digits.',
    mathSolution: 'Use isdigit for each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "12345";\n    int only_digits = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isdigit(str[i])) {\n            only_digits = 0;\n            break;\n        }\n    }\n    if(only_digits) printf("Only digits\\n");\n    else printf("Contains non-digits\\n");\n    return 0;\n}',
    hint: 'isdigit returns non-zero for 0-9'
  },
  {
    id: 'c_str_23',
    topicId: 'c_strings',
    question: 'Write a program to check if string "HELLO" contains only uppercase letters.',
    mathSolution: 'Check using isupper for each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "HELLO";\n    int all_upper = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isupper(str[i])) {\n            all_upper = 0;\n            break;\n        }\n    }\n    if(all_upper) printf("All uppercase\\n");\n    else printf("Not all uppercase\\n");\n    return 0;\n}',
    hint: 'isupper returns non-zero for uppercase'
  },
  {
    id: 'c_str_24',
    topicId: 'c_strings',
    question: 'Write a program to check if string "hello" contains only lowercase letters.',
    mathSolution: 'Check using islower for each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    int all_lower = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!islower(str[i])) {\n            all_lower = 0;\n            break;\n        }\n    }\n    if(all_lower) printf("All lowercase\\n");\n    else printf("Not all lowercase\\n");\n    return 0;\n}',
    hint: 'islower returns non-zero for lowercase'
  },
  {
    id: 'c_str_25',
    topicId: 'c_strings',
    question: 'Write a program to replace all spaces with underscores in "Hello World".',
    mathSolution: 'Replace character if space found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i = 0; str[i]; i++) {\n        if(str[i] == \' \') {\n            str[i] = \'_\';\n        }\n    }\n    printf("Modified: %s\\n", str);\n    return 0;\n}',
    hint: 'Replace space with underscore'
  },
  {
    id: 'c_str_26',
    topicId: 'c_strings',
    question: 'Write a program to remove all spaces from "Hello World".',
    mathSolution: 'Shift characters left when space found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int j = 0;\n    for(int i = 0; str[i]; i++) {\n        if(str[i] != \' \') {\n            str[j++] = str[i];\n        }\n    }\n    str[j] = \'\\0\';\n    printf("Without spaces: %s\\n", str);\n    return 0;\n}',
    hint: 'Use two indices - read and write'
  },
  {
    id: 'c_str_27',
    topicId: 'c_strings',
    question: 'Write a program to count words in "Hello World from C".',
    mathSolution: 'Count transitions from space to non-space',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    int count = 0, in_word = 0;\n    for(int i = 0; str[i]; i++) {\n        if(!isspace(str[i])) {\n            if(!in_word) {\n                count++;\n                in_word = 1;\n            }\n        } else {\n            in_word = 0;\n        }\n    }\n    printf("Word count = %d\\n", count);\n    return 0;\n}',
    hint: 'Count when entering a word'
  },
  {
    id: 'c_str_28',
    topicId: 'c_strings',
    question: 'Write a program to convert string "123" to integer using atoi.',
    mathSolution: 'Convert numeric string to integer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char str[] = "123";\n    int num = atoi(str);\n    printf("Integer: %d\\n", num);\n    return 0;\n}',
    hint: 'atoi returns 0 if conversion fails'
  },
  {
    id: 'c_str_29',
    topicId: 'c_strings',
    question: 'Write a program to convert integer 456 to string using sprintf.',
    mathSolution: 'Format integer into string',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 456;\n    char str[20];\n    sprintf(str, "%d", num);\n    printf("String: %s\\n", str);\n    return 0;\n}',
    hint: 'Ensure buffer is large enough'
  },
  {
    id: 'c_str_30',
    topicId: 'c_strings',
    question: 'Write a program to convert float 3.14159 to string with 2 decimal places.',
    mathSolution: 'Use sprintf with format specifier',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float pi = 3.14159;\n    char str[20];\n    sprintf(str, "%.2f", pi);\n    printf("String: %s\\n", str);\n    return 0;\n}',
    hint: '%.2f shows 2 decimal places'
  },

  // ========== STRING ADVANCED OPERATIONS (31-40) ==========
  {
    id: 'c_str_31',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello" starts with "He".',
    mathSolution: 'Compare first n characters',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    if(strncmp(str, "He", 2) == 0)\n        printf("Starts with \\"He\\"\\n");\n    else\n        printf("Does not start with \\"He\\"\\n");\n    return 0;\n}',
    hint: 'strncmp compares first n characters'
  },
  {
    id: 'c_str_32',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello World" ends with "World".',
    mathSolution: 'Compare from end backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    int len = strlen(str);\n    if(len >= 5 && strcmp(str + len - 5, "World") == 0)\n        printf("Ends with \\"World\\"\\n");\n    else\n        printf("Does not end with \\"World\\"\\n");\n    return 0;\n}',
    hint: 'Move pointer to possible start of suffix'
  },
  {
    id: 'c_str_33',
    topicId: 'c_strings',
    question: 'Write a program to create array of strings and print them.',
    mathSolution: 'Array of pointers to strings',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *colors[] = {"Red", "Green", "Blue"};\n    for(int i = 0; i < 3; i++) {\n        printf("%s\\n", colors[i]);\n    }\n    return 0;\n}',
    hint: 'Strings may be in read-only memory'
  },
  {
    id: 'c_str_34',
    topicId: 'c_strings',
    question: 'Write a program to find longest string in array {"Apple","Banana","Cherry"}.',
    mathSolution: 'Iterate and track maximum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Cherry"};\n    int max_len = strlen(fruits[0]);\n    int max_index = 0;\n    for(int i = 1; i < 3; i++) {\n        int len = strlen(fruits[i]);\n        if(len > max_len) {\n            max_len = len;\n            max_index = i;\n        }\n    }\n    printf("Longest: %s (length %d)\\n", fruits[max_index], max_len);\n    return 0;\n}',
    hint: 'Track both maximum length and index'
  },
 {
    id: 'c_str_35',
    topicId: 'c_strings',
    question: 'Write a program to find most frequent character in "Hello World".',
    mathSolution: 'Count all characters, find max',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int freq[256] = {0};\n    int i, max = 0;\n    char result;\n    \n    for(i = 0; str[i]; i++) {\n        freq[str[i]]++;\n    }\n    \n    for(i = 0; i < 256; i++) {\n        if(freq[i] > max) {\n            max = freq[i];\n            result = i;\n        }\n    }\n    \n    printf("Character \'%c\' appears %d times (most frequent)\\n", result, max);\n    return 0;\n}',
    hint: 'Use character as array index'
},
  {
    id: 'c_str_36',
    topicId: 'c_strings',
    question: 'Write a program to check if "listen" and "silent" are anagrams.',
    mathSolution: 'Count characters and compare',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[] = "listen";\n    char str2[] = "silent";\n    int count[256] = {0};\n    int anagram = 1;\n    for(int i = 0; str1[i]; i++) count[(unsigned char)str1[i]]++;\n    for(int i = 0; str2[i]; i++) count[(unsigned char)str2[i]]--;\n    for(int i = 0; i < 256; i++) {\n        if(count[i] != 0) {\n            anagram = 0;\n            break;\n        }\n    }\n    if(anagram) printf("Anagrams\\n");\n    else printf("Not anagrams\\n");\n    return 0;\n}',
    hint: 'Count characters, then subtract'
  },
  {
    id: 'c_str_37',
    topicId: 'c_strings',
    question: 'Write a program to toggle case of "Hello World".',
    mathSolution: 'Uppercase to lowercase and vice versa',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i = 0; str[i]; i++) {\n        if(isupper(str[i]))\n            str[i] = tolower(str[i]);\n        else if(islower(str[i]))\n            str[i] = toupper(str[i]);\n    }\n    printf("Toggled: %s\\n", str);\n    return 0;\n}',
    hint: 'Check case before converting'
  },
  {
    id: 'c_str_38',
    topicId: 'c_strings',
    question: 'Write a program to compress consecutive spaces in "Hello   World" to single space.',
    mathSolution: 'Skip multiple spaces while copying',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello   World";\n    char result[100];\n    int j = 0;\n    for(int i = 0; str[i]; i++) {\n        if(!isspace(str[i]) || (j > 0 && !isspace(result[j-1]))) {\n            result[j++] = str[i];\n        }\n    }\n    result[j] = \'\\0\';\n    printf("Compressed: %s\\n", result);\n    return 0;\n}',
    hint: 'Keep track of last character written'
  },
  {
    id: 'c_str_39',
    topicId: 'c_strings',
    question: 'Write a program to extract first word from "Hello World".',
    mathSolution: 'Copy until space encountered',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    char word[50];\n    int i = 0;\n    while(str[i] != \' \' && str[i] != \'\\0\') {\n        word[i] = str[i];\n        i++;\n    }\n    word[i] = \'\\0\';\n    printf("First word: %s\\n", word);\n    return 0;\n}',
    hint: 'Copy until space or end of string'
  },
  {
    id: 'c_str_40',
    topicId: 'c_strings',
    question: 'Write a program to remove trailing newline from string "Hello\\n".',
    mathSolution: 'Find newline and replace with null',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello\\n";\n    str[strcspn(str, "\\n")] = \'\\0\';\n    printf("After removing newline: %s\\n", str);\n    return 0;\n}',
    hint: 'strcspn finds first occurrence of character'
  },

  // ========== POINTERS WITH STRINGS (41-50) ==========
  {
    id: 'c_str_41',
    topicId: 'c_strings',
    question: 'Write a program to convert string to uppercase using pointers.',
    mathSolution: 'Use pointer to traverse string',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    char *ptr = str;\n    while(*ptr) {\n        *ptr = toupper(*ptr);\n        ptr++;\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Dereference pointer to modify characters'
  },
  {
    id: 'c_str_42',
    topicId: 'c_strings',
    question: 'Write a program to find length of string using pointers.',
    mathSolution: 'Increment pointer until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    char *ptr = str;\n    int len = 0;\n    while(*ptr) {\n        len++;\n        ptr++;\n    }\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Move pointer until null terminator'
  },
  {
    id: 'c_str_43',
    topicId: 'c_strings',
    question: 'Write a program to copy string using pointers.',
    mathSolution: 'Copy character by character using pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    char *s = src;\n    char *d = dest;\n    while(*s) {\n        *d = *s;\n        s++;\n        d++;\n    }\n    *d = \'\\0\';\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Use two pointers - source and destination'
  },
  {
    id: 'c_str_44',
    topicId: 'c_strings',
    question: 'Write a program to compare strings using pointers.',
    mathSolution: 'Compare characters using pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    char *s1 = str1;\n    char *s2 = str2;\n    int equal = 1;\n    while(*s1 || *s2) {\n        if(*s1 != *s2) {\n            equal = 0;\n            break;\n        }\n        s1++;\n        s2++;\n    }\n    if(equal) printf("Strings are equal\\n");\n    else printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'Compare character by character using pointers'
  },
  {
    id: 'c_str_45',
    topicId: 'c_strings',
    question: 'Write a program to concatenate strings using pointers.',
    mathSolution: 'Find end of first, then copy second using pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    char *ptr = str1;\n    char *src = str2;\n    while(*ptr) ptr++;\n    while((*ptr++ = *src++));\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Move pointer to end of first string'
  },
  {
    id: 'c_str_46',
    topicId: 'c_strings',
    question: 'Write a program to generate all substrings of "abc".',
    mathSolution: 'Nested loops for start and end positions',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "abc";\n    int len = strlen(str);\n    printf("All substrings:\\n");\n    for(int i = 0; i < len; i++) {\n        for(int j = i; j < len; j++) {\n            for(int k = i; k <= j; k++) {\n                printf("%c", str[k]);\n            }\n            printf("\\n");\n        }\n    }\n    return 0;\n}',
    hint: 'Number of substrings = n*(n+1)/2'
  },
  {
    id: 'c_str_47',
    topicId: 'c_strings',
    question: 'Write a program to convert string to uppercase using for loop.',
    mathSolution: 'Iterate through string and convert each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello world";\n    for(int i = 0; str[i]; i++) {\n        str[i] = toupper(str[i]);\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Use toupper() for each character'
  },
  {
    id: 'c_str_48',
    topicId: 'c_strings',
    question: 'Write a program to check if string "HELLO" contains only uppercase letters.',
    mathSolution: 'Check using isupper for each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "HELLO";\n    int all_upper = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isupper(str[i])) {\n            all_upper = 0;\n            break;\n        }\n    }\n    if(all_upper) printf("All uppercase\\n");\n    else printf("Not all uppercase\\n");\n    return 0;\n}',
    hint: 'isupper returns non-zero for uppercase characters'
  },
  {
    id: 'c_str_49',
    topicId: 'c_strings',
    question: 'Write a program to replace all spaces with underscores in "Hello World from C".',
    mathSolution: 'Replace each space character with underscore',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    for(int i = 0; str[i]; i++) {\n        if(str[i] == \' \') {\n            str[i] = \'_\';\n        }\n    }\n    printf("Modified: %s\\n", str);\n    return 0;\n}',
    hint: 'Replace character if space found'
  },
  {
    id: 'c_str_50',
    topicId: 'c_strings',
    question: 'Write a program to generate all substrings of "abc".',
    mathSolution: 'Generate all possible combinations of characters',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "abc";\n    int len = strlen(str);\n    printf("All substrings:\\n");\n    for(int i = 0; i < len; i++) {\n        for(int j = i; j < len; j++) {\n            for(int k = i; k <= j; k++) {\n                printf("%c", str[k]);\n            }\n            printf("\\n");\n        }\n    }\n    return 0;\n}',
    hint: 'Number of substrings = n*(n+1)/2'
  }
);