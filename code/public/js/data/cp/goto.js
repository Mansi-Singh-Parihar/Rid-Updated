QuizData.questions.push(
  // ========== BASIC GOTO (1-10) ==========
  {
    id: 'c_goto_001',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 5 without using any loop.',
    mathSolution: 'Print sequence: 1 2 3 4 5 using jumps',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i <= 5) {\n        printf("%d ", i);\n        i++;\n        goto start;\n    }\n    return 0;\n}',
    hint: 'Create a loop using goto and a label'
  },
  {
    id: 'c_goto_002',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 10 but skip printing number 5.',
    mathSolution: 'Print: 1 2 3 4 6 7 8 9 10 (skip 5)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 10) goto end;\n    if(i == 5) {\n        i++;\n        goto start;\n    }\n    printf("%d ", i);\n    i++;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Use goto to skip the iteration when i equals 5'
  },
  {
    id: 'c_goto_003',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 5, fact = 1, i = 1;\n    loop:\n    if(i > n) goto end;\n    fact *= i;\n    i++;\n    goto loop;\n    end:\n    printf("Factorial of %d = %d\\n", n, fact);\n    return 0;\n}',
    hint: 'Multiply fact by i repeatedly until i reaches n'
  },
  {
    id: 'c_goto_004',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the sum of first 10 natural numbers.',
    mathSolution: 'Sum = 1+2+...+10 = 55',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, sum = 0;\n    start:\n    if(i > 10) goto end;\n    sum += i;\n    i++;\n    goto start;\n    end:\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate sum in a loop using goto'
  },
  {
    id: 'c_goto_005',
    topicId: 'c_goto',
    question: 'Write a program using goto to print even numbers from 2 to 10.',
    mathSolution: 'Even numbers: 2 4 6 8 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 2;\n    start:\n    if(i > 10) goto end;\n    printf("%d ", i);\n    i += 2;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Increment by 2 instead of 1 to get even numbers'
  },
  {
    id: 'c_goto_006',
    topicId: 'c_goto',
    question: 'Write a program using goto to print odd numbers from 1 to 9.',
    mathSolution: 'Odd numbers: 1 3 5 7 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 9) goto end;\n    printf("%d ", i);\n    i += 2;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Start at 1 and increment by 2'
  },
  {
    id: 'c_goto_007',
    topicId: 'c_goto',
    question: 'Write a program using goto to countdown from 10 to 1.',
    mathSolution: 'Countdown: 10 9 8 7 6 5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 10;\n    start:\n    if(i < 1) goto end;\n    printf("%d ", i);\n    i--;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Decrement instead of increment'
  },
  {
    id: 'c_goto_008',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the multiplication table of 5.',
    mathSolution: '5×1=5, 5×2=10, ..., 5×10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 10) goto end;\n    printf("5 x %d = %d\\n", i, 5 * i);\n    i++;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Multiply 5 with loop counter'
  },
  {
    id: 'c_goto_009',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sum of digits of 123.',
    mathSolution: '1+2+3 = 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, sum = 0;\n    start:\n    if(num == 0) goto end;\n    sum += num % 10;\n    num /= 10;\n    goto start;\n    end:\n    printf("Sum of digits = %d\\n", sum);\n    return 0;\n}',
    hint: 'Extract digits using modulo 10 and divide by 10'
  },
  {
    id: 'c_goto_010',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse number 123.',
    mathSolution: 'Reverse of 123 is 321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, rev = 0;\n    start:\n    if(num == 0) goto end;\n    rev = rev * 10 + (num % 10);\n    num /= 10;\n    goto start;\n    end:\n    printf("Reverse = %d\\n", rev);\n    return 0;\n}',
    hint: 'Build reversed number digit by digit'
  },

  // ========== ERROR HANDLING WITH GOTO (11-20) ==========
  {
    id: 'c_goto_011',
    topicId: 'c_goto',
    question: 'Write a program using goto to validate age (must be 18-100).',
    mathSolution: 'Check if age 25 is valid',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    if(age < 18) goto too_young;\n    if(age > 100) goto too_old;\n    printf("Age %d is valid\\n", age);\n    goto end;\n    too_young:\n    printf("Age %d is too young\\n", age);\n    goto end;\n    too_old:\n    printf("Age %d is too old\\n", age);\n    end:\n    return 0;\n}',
    hint: 'Jump to different error labels based on condition'
  },
  {
    id: 'c_goto_012',
    topicId: 'c_goto',
    question: 'Write a program with validation for username and password using goto.',
    mathSolution: 'Check if credentials match',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char username[] = "admin";\n    char password[] = "secret";\n    if(strcmp(username, "admin") != 0) goto user_error;\n    if(strcmp(password, "secret") != 0) goto pass_error;\n    printf("Login successful\\n");\n    goto end;\n    user_error:\n    printf("Invalid username\\n");\n    goto end;\n    pass_error:\n    printf("Invalid password\\n");\n    end:\n    return 0;\n}',
    hint: 'Different labels for different error conditions'
  },
  {
    id: 'c_goto_013',
    topicId: 'c_goto',
    question: 'Write a program that validates multiple fields using goto for error handling.',
    mathSolution: 'Validate name, age, and email',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char name[] = "John\";\n    int age = 25;\n    char email[] = "john@example.com";\n    if(strlen(name) < 2) goto name_error;\n    if(age < 18 || age > 100) goto age_error;\n    if(strchr(email, \'@\') == NULL) goto email_error;\n    printf("All fields valid\\n");\n    goto end;\n    name_error:\n    printf("Name too short\\n\");\n    goto end;\n    age_error:\n    printf("Invalid age\\n\");\n    goto end;\n    email_error:\n    printf("Invalid email\\n\");\n    end:\n    return 0;\n}',
    hint: 'Each validation failure jumps to specific error handler'
  },
  {
    id: 'c_goto_014',
    topicId: 'c_goto',
    question: 'Write a program that uses goto for retry on invalid input.',
    mathSolution: 'Keep asking until valid input 5 is entered',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    input:\n    if(num == 5) goto valid;\n    num = 5;\n    goto input;\n    valid:\n    printf("Valid input: %d\\n", num);\n    return 0;\n}',
    hint: 'Jump back to input label when validation fails'
  },
  {
    id: 'c_goto_015',
    topicId: 'c_goto',
    question: 'Write a program using goto for division by zero error handling.',
    mathSolution: 'Check denominator before division',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 0, result;\n    if(b == 0) goto error;\n    result = a / b;\n    printf("Result = %d\\n", result);\n    goto end;\n    error:\n    printf("Error: Division by zero\\n");\n    end:\n    return 0;\n}',
    hint: 'Jump to error label if denominator is zero'
  },
  {
    id: 'c_goto_016',
    topicId: 'c_goto',
    question: 'Write a program using goto to check array bounds before access.',
    mathSolution: 'Access array at index 5 (valid) or 10 (invalid)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int index = 3;\n    if(index < 0) goto underflow;\n    if(index >= 5) goto overflow;\n    printf("Value at index %d: %d\\n", index, arr[index]);\n    goto end;\n    underflow:\n    printf("Index underflow\\n");\n    goto end;\n    overflow:\n    printf("Index overflow\\n");\n    end:\n    return 0;\n}',
    hint: 'Check bounds before accessing array'
  },
  {
    id: 'c_goto_017',
    topicId: 'c_goto',
    question: 'Write a program using goto for null pointer error handling.',
    mathSolution: 'Check if pointer is NULL before dereferencing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *ptr = NULL;\n    int value = 42;\n    if(ptr == NULL) goto null_error;\n    value = *ptr;\n    printf("Value = %d\\n", value);\n    goto end;\n    null_error:\n    printf("Error: Null pointer dereference\\n");\n    end:\n    return 0;\n}',
    hint: 'Check for NULL before using pointer'
  },
  {
    id: 'c_goto_018',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if a number is within range.',
    mathSolution: 'Check if 75 is between 0 and 100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if(score < 0) goto below;\n    if(score > 100) goto above;\n    printf("Score %d is valid\\n", score);\n    goto end;\n    below:\n    printf("Score below range\\n");\n    goto end;\n    above:\n    printf("Score above range\\n");\n    end:\n    return 0;\n}',
    hint: 'Check both lower and upper bounds'
  },
  {
    id: 'c_goto_019',
    topicId: 'c_goto',
    question: 'Write a program using goto for error handling in PIN verification.',
    mathSolution: 'Check if PIN 1234 is correct',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int pin = 1234;\n    int entered = 1111;\n    if(entered != pin) goto wrong_pin;\n    printf("PIN accepted\\n");\n    goto end;\n    wrong_pin:\n    printf("Wrong PIN\\n");\n    end:\n    return 0;\n}',
    hint: 'Jump to error label if PIN doesn\'t match'
  },
  {
    id: 'c_goto_020',
    topicId: 'c_goto',
    question: 'Write a program using goto for file open error simulation.',
    mathSolution: 'Simulate file open check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int file_opened = 0;\n    file_opened = 1;\n    if(!file_opened) goto file_error;\n    printf("File opened successfully\\n");\n    goto end;\n    file_error:\n    printf("Error: Cannot open file\\n");\n    end:\n    return 0;\n}',
    hint: 'Check file pointer and jump on error'
  },

  // ========== GOTO WITH ARRAYS (21-30) ==========
  {
    id: 'c_goto_021',
    topicId: 'c_goto',
    question: 'Write a program using goto to find maximum element in array.',
    mathSolution: 'Max of [23,45,12,67,34] = 67',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, max = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] > max) max = arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare each element with current max'
  },
  {
    id: 'c_goto_022',
    topicId: 'c_goto',
    question: 'Write a program using goto to find minimum element in array.',
    mathSolution: 'Min of [23,45,12,67,34] = 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, min = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] < min) min = arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_goto_023',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, sum = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    sum += arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate each element into sum'
  },
  {
    id: 'c_goto_024',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate average of array elements.',
    mathSolution: 'Average of [10,20,30,40,50] = 30',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, sum = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    sum += arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Average = %.2f\\n", (float)sum / n);\n    return 0;\n}',
    hint: 'Calculate sum first, then divide by count'
  },
  {
    id: 'c_goto_025',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse an array.',
    mathSolution: 'Reverse [1,2,3,4,5] → [5,4,3,2,1]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, i = 0, temp;\n    loop:\n    if(i >= n/2) goto print;\n    temp = arr[i];\n    arr[i] = arr[n-1-i];\n    arr[n-1-i] = temp;\n    i++;\n    goto loop;\n    print:\n    printf("Reversed array: ");\n    for(i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_goto_026',
    topicId: 'c_goto',
    question: 'Write a program using goto to count even and odd numbers in array.',
    mathSolution: 'Evens and odds in [1,2,3,4,5,6]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6};\n    int n = 6, even = 0, odd = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] % 2 == 0) even++;\n    else odd++;\n    i++;\n    goto loop;\n    end:\n    printf("Even: %d, Odd: %d\\n", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check parity'
  },
  {
    id: 'c_goto_027',
    topicId: 'c_goto',
    question: 'Write a program using goto for linear search in array.',
    mathSolution: 'Search for 30 in [10,20,30,40,50]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, key = 30, i = 0;\n    loop:\n    if(i >= n) goto not_found;\n    if(arr[i] == key) goto found;\n    i++;\n    goto loop;\n    found:\n    printf("%d found at index %d\\n", key, i);\n    goto end;\n    not_found:\n    printf("%d not found\\n", key);\n    end:\n    return 0;\n}',
    hint: 'Compare each element with key until found'
  },
  {
    id: 'c_goto_028',
    topicId: 'c_goto',
    question: 'Write a program using goto to count occurrences of an element in array.',
    mathSolution: 'Count how many times 20 appears in [10,20,30,20,40]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,20,40};\n    int n = 5, key = 20, count = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] == key) count++;\n    i++;\n    goto loop;\n    end:\n    printf("%d appears %d times\\n", key, count);\n    return 0;\n}',
    hint: 'Increment counter when element matches'
  },
  {
    id: 'c_goto_029',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy one array to another.',
    mathSolution: 'Copy source to destination array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int source[] = {10,20,30,40,50};\n    int dest[5];\n    int n = 5, i = 0;\n    loop:\n    if(i >= n) goto print;\n    dest[i] = source[i];\n    i++;\n    goto loop;\n    print:\n    printf("Destination array: ");\n    for(i = 0; i < n; i++) printf("%d ", dest[i]);\n    return 0;\n}',
    hint: 'Assign each element from source to destination'
  },
  {
    id: 'c_goto_030',
    topicId: 'c_goto',
    question: 'Write a program using goto to find second largest element in array.',
    mathSolution: 'Second largest in [10,45,2,78,34] = 45',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int n = 5, largest = arr[0], second = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] > largest) {\n        second = largest;\n        largest = arr[i];\n    } else if(arr[i] > second && arr[i] != largest) {\n        second = arr[i];\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Second largest = %d\\n", second);\n    return 0;\n}',
    hint: 'Keep track of both largest and second largest'
  },

  // ========== STRING OPERATIONS WITH GOTO (31-40) ==========
  {
    id: 'c_goto_031',
    topicId: 'c_goto',
    question: 'Write a program using goto to find length of string "Hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = 0;\n    loop:\n    if(str[len] == \'\\0\') goto end;\n    len++;\n    goto loop;\n    end:\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Count characters until null terminator'
  },
  {
    id: 'c_goto_032',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy string "Hello".',
    mathSolution: 'Copy "Hello" to destination',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    int i = 0;\n    loop:\n    dest[i] = src[i];\n    if(src[i] == \'\\0\') goto print;\n    i++;\n    goto loop;\n    print:\n    printf("Copied string: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy characters including null terminator'
  },
  {
    id: 'c_goto_033',
    topicId: 'c_goto',
    question: 'Write a program using goto to concatenate "Hello " and "World".',
    mathSolution: 'Result: "Hello World"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    int i = 0, j = 0;\n    find_end:\n    if(str1[i] == \'\\0\') goto copy;\n    i++;\n    goto find_end;\n    copy:\n    str1[i] = str2[j];\n    if(str2[j] == \'\\0\') goto print;\n    i++;\n    j++;\n    goto copy;\n    print:\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Find end of first string, then copy second'
  },
  {
    id: 'c_goto_034',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse string "Hello".',
    mathSolution: 'Reverse: "olleH"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int i = 0, j = 0;\n    char temp;\n    find_len:\n    if(str[j] == \'\\0\') goto reverse;\n    j++;\n    goto find_len;\n    reverse:\n    j--;\n    rev_loop:\n    if(i >= j) goto print;\n    temp = str[i];\n    str[i] = str[j];\n    str[j] = temp;\n    i++;\n    j--;\n    goto rev_loop;\n    print:\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from both ends'
  },
  {
    id: 'c_goto_035',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if "madam" is palindrome.',
    mathSolution: 'madam is palindrome',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "madam";\n    int i = 0, j = 0;\n    find_len:\n    if(str[j] == \'\\0\') goto check;\n    j++;\n    goto find_len;\n    check:\n    j--;\n    check_loop:\n    if(i >= j) goto palindrome;\n    if(str[i] != str[j]) goto not_palindrome;\n    i++;\n    j--;\n    goto check_loop;\n    palindrome:\n    printf("%s is palindrome\\n\", str);\n    goto end;\n    not_palindrome:\n    printf("%s is not palindrome\\n\", str);\n    end:\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_goto_036',
    topicId: 'c_goto',
    question: 'Write a program using goto to count vowels in "Hello World".',
    mathSolution: 'Vowels = 3 (e,o,o)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, vowels = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] == \'a\'||str[i]==\'e\'||str[i]==\'i\'||str[i]==\'o\'||str[i]==\'u\'||\n       str[i] == \'A\'||str[i]==\'E\'||str[i]==\'I\'||str[i]==\'O\'||str[i]==\'U\') {\n        vowels++;\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Vowels = %d\\n", vowels);\n    return 0;\n}',
    hint: 'Check each character if it is a vowel'
  },
  {
    id: 'c_goto_037',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert "hello" to uppercase.',
    mathSolution: 'HELLO',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "hello";\n    int i = 0;\n    loop:\n    if(str[i] == \'\\0\') goto print;\n    if(str[i] >= \'a\' && str[i] <= \'z\') {\n        str[i] = str[i] - 32;\n    }\n    i++;\n    goto loop;\n    print:\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Subtract 32 from lowercase ASCII to get uppercase'
  },
  {
    id: 'c_goto_038',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert "HELLO" to lowercase.',
    mathSolution: 'hello',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "HELLO";\n    int i = 0;\n    loop:\n    if(str[i] == \'\\0\') goto print;\n    if(str[i] >= \'A\' && str[i] <= \'Z\') {\n        str[i] = str[i] + 32;\n    }\n    i++;\n    goto loop;\n    print:\n    printf("Lowercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Add 32 to uppercase ASCII to get lowercase'
  },
  {
    id: 'c_goto_039',
    topicId: 'c_goto',
    question: 'Write a program using goto to remove spaces from "Hello World".',
    mathSolution: 'HelloWorld',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, j = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] != \' \') {\n        str[j] = str[i];\n        j++;\n    }\n    i++;\n    goto loop;\n    end:\n    str[j] = \'\\0\';\n    printf("Without spaces: %s\\n", str);\n    return 0;\n}',
    hint: 'Use two indices - one for reading, one for writing'
  },
  {
    id: 'c_goto_040',
    topicId: 'c_goto',
    question: 'Write a program using goto to count words in "Hello World from C".',
    mathSolution: 'Word count = 4',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    int i = 0, words = 0, in_word = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] != \' \') {\n        if(!in_word) {\n            words++;\n            in_word = 1;\n        }\n    } else {\n        in_word = 0;\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Word count = %d\\n", words);\n    return 0;\n}',
    hint: 'Count transitions from space to non-space'
  },

  // ========== PATTERN PRINTING WITH GOTO (41-50) ==========
  {
    id: 'c_goto_041',
    topicId: 'c_goto',
    question: 'Write a program using goto to print right triangle pattern of stars (4 rows).',
    mathSolution: '*\\n**\\n***\\n****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    inner:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Outer loop for rows, inner for columns'
  },
  {
    id: 'c_goto_042',
    topicId: 'c_goto',
    question: 'Write a program using goto to print inverted triangle pattern (4 rows).',
    mathSolution: '****\\n***\\n**\\n*',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 4, j;\n    outer:\n    if(i < 1) goto end;\n    j = 1;\n    inner:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i--;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Start with max stars and decrease each row'
  },
  {
    id: 'c_goto_043',
    topicId: 'c_goto',
    question: 'Write a program using goto to print number pattern: 1, 12, 123, 1234.',
    mathSolution: '1\\n12\\n123\\n1234',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    inner:\n    if(j <= i) {\n        printf("%d", j);\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Print numbers from 1 to row number'
  },
  {
    id: 'c_goto_044',
    topicId: 'c_goto',
    question: 'Write a program using goto to print Floyd\'s triangle (4 rows).',
    mathSolution: '1\\n2 3\\n4 5 6\\n7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, num = 1;\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    inner:\n    if(j <= i) {\n        printf("%d ", num);\n        num++;\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Keep a counter that increments for each number'
  },
  {
    id: 'c_goto_045',
    topicId: 'c_goto',
    question: 'Write a program using goto to print pyramid pattern (4 rows).',
    mathSolution: '   *\\n  ***\\n *****\\n*******',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, k;\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    spaces:\n    if(j <= 4-i) {\n        printf(" ");\n        j++;\n        goto spaces;\n    }\n    k = 1;\n    stars:\n    if(k <= 2*i-1) {\n        printf("*");\n        k++;\n        goto stars;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Print spaces then stars in each row'
  },
  {
    id: 'c_goto_046',
    topicId: 'c_goto',
    question: 'Write a program using goto to print hollow square pattern (4x4).',
    mathSolution: '****\\n*  *\\n*  *\\n****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    inner:\n    if(j <= 4) {\n        if(i == 1 || i == 4 || j == 1 || j == 4)\n            printf("*");\n        else\n            printf(" ");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Print star only on boundaries'
  },
  {
    id: 'c_goto_047',
    topicId: 'c_goto',
    question: 'Write a program using goto to print cross pattern (5x5).',
    mathSolution: '*   *\\n * * \\n  *  \\n * * \\n*   *',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    outer:\n    if(i > 5) goto end;\n    j = 1;\n    inner:\n    if(j <= 5) {\n        if(i == j || i + j == 6)\n            printf("*");\n        else\n            printf(" ");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Print star on main diagonal and anti-diagonal'
  },
  {
    id: 'c_goto_048',
    topicId: 'c_goto',
    question: 'Write a program using goto to print diamond pattern (3 rows).',
    mathSolution: '  *\\n ***\\n*****\\n ***\\n  *',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, k;\n    // Upper half\n    upper:\n    if(i > 3) goto lower;\n    j = 1;\n    spaces_up:\n    if(j <= 3-i) {\n        printf(" ");\n        j++;\n        goto spaces_up;\n    }\n    k = 1;\n    stars_up:\n    if(k <= 2*i-1) {\n        printf("*");\n        k++;\n        goto stars_up;\n    }\n    printf("\\n");\n    i++;\n    goto upper;\n    // Lower half\n    lower:\n    i = 2;\n    lower_outer:\n    if(i < 1) goto end;\n    j = 1;\n    spaces_low:\n    if(j <= 3-i) {\n        printf(" ");\n        j++;\n        goto spaces_low;\n    }\n    k = 1;\n    stars_low:\n    if(k <= 2*i-1) {\n        printf("*");\n        k++;\n        goto stars_low;\n    }\n    printf("\\n");\n    i--;\n    goto lower_outer;\n    end:\n    return 0;\n}',
    hint: 'Upper half increasing, lower half decreasing'
  },
  {
    id: 'c_goto_049',
    topicId: 'c_goto',
    question: 'Write a program using goto to print multiplication table pattern.',
    mathSolution: '1x1=1 1x2=2 ... 3x3=9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    outer:\n    if(i > 3) goto end;\n    j = 1;\n    inner:\n    if(j > 3) goto next_row;\n    printf("%dx%d=%-3d ", i, j, i*j);\n    j++;\n    goto inner;\n    next_row:\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Nested loops print multiplication table'
  },
  {
    id: 'c_goto_050',
    topicId: 'c_goto',
    question: 'Write a program using goto to print pattern: A, BC, DEF, GHIJ.',
    mathSolution: 'A\\nBC\\nDEF\\nGHIJ',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    char ch = \'A\';\n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    inner:\n    if(j > i) goto next_row;\n    printf("%c", ch);\n    ch++;\n    j++;\n    goto inner;\n    next_row:\n    printf("\\n");\n    i++;\n    goto outer;\n    end:\n    return 0;\n}',
    hint: 'Keep incrementing character for each position'
  }
);