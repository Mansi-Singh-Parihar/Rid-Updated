QuizData.questions.push(
  // ========== BASIC FOR LOOP (1-10) ==========
  {
    id: 'c_loop_1',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using for loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Initialize i=1, condition i<=10, increment i++'
  },
  {
    id: 'c_loop_2',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 10 to 1 in reverse order using for loop.',
    mathSolution: '10 9 8 7 6 5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=10; i>=1; i--) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use i-- for decrement'
  },
  {
    id: 'c_loop_3',
    topicId: 'c_loop',
    question: 'Write a program to print even numbers from 2 to 20 using for loop.',
    mathSolution: '2 4 6 8 10 12 14 16 18 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=20; i+=2) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Start from 2 and increment by 2'
  },
  {
    id: 'c_loop_4',
    topicId: 'c_loop',
    question: 'Write a program to print odd numbers from 1 to 19 using for loop.',
    mathSolution: '1 3 5 7 9 11 13 15 17 19',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=19; i+=2) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Start with 1 and increment by 2'
  },
  {
    id: 'c_loop_5',
    topicId: 'c_loop',
    question: 'Write a program to print multiplication table of 5 using for loop.',
    mathSolution: '5x1=5, 5x2=10, ..., 5x10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        printf("5 x %d = %d\\n", i, 5*i);\n    }\n    return 0;\n}',
    hint: 'Use 5*i formula in loop'
  },
  {
    id: 'c_loop_6',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of numbers from 1 to 100 using for loop.',
    mathSolution: 'Sum = 5050',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for(int i=1; i<=100; i++) {\n        sum += i;\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Add i to sum variable each iteration'
  },
  {
    id: 'c_loop_7',
    topicId: 'c_loop',
    question: 'Write a program to calculate factorial of 5 using for loop.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int fact = 1;\n    for(int i=1; i<=5; i++) {\n        fact *= i;\n    }\n    printf("Factorial of 5 = %d", fact);\n    return 0;\n}',
    hint: 'Multiply fact by i each iteration'
  },
  {
    id: 'c_loop_8',
    topicId: 'c_loop',
    question: 'Write a program to print Fibonacci series (first 10 terms) using for loop.',
    mathSolution: '0 1 1 2 3 5 8 13 21 34',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    printf("%d %d ", a, b);\n    for(int i=3; i<=10; i++) {\n        c = a + b;\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Each term is sum of previous two terms'
  },
  {
    id: 'c_loop_9',
    topicId: 'c_loop',
    question: 'Write a program to count digits of number 12345 using for loop.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, count = 0;\n    for(; n != 0; n /= 10) {\n        count++;\n    }\n    printf("Digits = %d", count);\n    return 0;\n}',
    hint: 'Divide by 10 repeatedly until zero'
  },
  {
    id: 'c_loop_10',
    topicId: 'c_loop',
    question: 'Write a program to print multiplication table from 1 to 5 using nested loops.',
    mathSolution: '1x1=1 to 5x10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=10; j++) {\n            printf("%d x %d = %d\\t", i, j, i*j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Outer loop for table number, inner for multiplier'
  },

  // ========== WHILE LOOP (11-20) ==========
  {
    id: 'c_loop_11',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using while loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    while(i<=10) {\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}',
    hint: 'Initialize i before loop, increment inside'
  },
  {
    id: 'c_loop_12',
    topicId: 'c_loop',
    question: 'Write a program to reverse number 12345 using while loop.',
    mathSolution: 'Reverse = 54321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, rev = 0;\n    while(n != 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    printf("Reverse = %d", rev);\n    return 0;\n}',
    hint: 'Multiply rev by 10 and add last digit'
  },
  {
    id: 'c_loop_13',
    topicId: 'c_loop',
    question: 'Write a program to check if 121 is palindrome using while loop.',
    mathSolution: '121 is palindrome',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 121, temp, rev = 0;\n    temp = n;\n    while(temp != 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    if(rev == n)\n        printf("%d is palindrome", n);\n    else\n        printf("%d is not palindrome", n);\n    return 0;\n}',
    hint: 'Store original number in temp'
  },
  {
    id: 'c_loop_14',
    topicId: 'c_loop',
    question: 'Write a program to check if 153 is Armstrong number using while loop.',
    mathSolution: '153 is Armstrong number (1³+5³+3³=153)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 153, temp, sum = 0, digit;\n    temp = n;\n    while(temp != 0) {\n        digit = temp % 10;\n        sum += digit * digit * digit;\n        temp /= 10;\n    }\n    if(sum == n)\n        printf("%d is Armstrong number", n);\n    else\n        printf("%d is not Armstrong", n);\n    return 0;\n}',
    hint: 'Cube each digit and add'
  },
  {
    id: 'c_loop_15',
    topicId: 'c_loop',
    question: 'Write a program to check if 17 is prime using while loop.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 17, i = 2, flag = 1;\n    while(i <= n/2) {\n        if(n % i == 0) {\n            flag = 0;\n            break;\n        }\n        i++;\n    }\n    if(flag == 1 && n > 1)\n        printf("%d is prime", n);\n    else\n        printf("%d is not prime", n);\n    return 0;\n}',
    hint: 'Check divisibility from 2 to n/2'
  },

  // ========== DO-WHILE LOOP (16-20) ==========
  {
    id: 'c_loop_16',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using do-while loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    do {\n        printf("%d ", i);\n        i++;\n    } while(i<=10);\n    return 0;\n}',
    hint: 'Executes at least once before checking condition'
  },
  {
    id: 'c_loop_17',
    topicId: 'c_loop',
    question: 'Write a program to print even numbers between 2 and 20 using do-while loop.',
    mathSolution: '2 4 6 8 10 12 14 16 18 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=2;\n    do {\n        printf("%d ", i);\n        i+=2;\n    } while(i<=20);\n    return 0;\n}',
    hint: 'Start from 2 and increment by 2'
  },
  {
    id: 'c_loop_18',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of digits of 12345 using do-while loop.',
    mathSolution: 'Sum of digits = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, sum = 0, digit;\n    do {\n        digit = n % 10;\n        sum += digit;\n        n /= 10;\n    } while(n > 0);\n    printf("Sum of digits = %d", sum);\n    return 0;\n}',
    hint: 'Extract digits using modulo operator'
  },
  {
    id: 'c_loop_19',
    topicId: 'c_loop',
    question: 'Write a program to display menu with options using do-while loop.',
    mathSolution: 'Menu with 3 options, exit on 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int choice = 1;\n    do {\n        printf("\\n1. Say Hello\\n2. Say Hi\\n3. Exit\\n");\n        choice = 3;\n        switch(choice) {\n            case 1: printf("Hello\\n"); break;\n            case 2: printf("Hi\\n"); break;\n            case 3: printf("Goodbye\\n"); break;\n        }\n    } while(choice != 3);\n    return 0;\n}',
    hint: 'Loop continues until exit option selected'
  },
  {
    id: 'c_loop_20',
    topicId: 'c_loop',
    question: 'Write a program to keep asking for positive number using do-while loop.',
    mathSolution: 'Accepts 10 as positive number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -5;\n    do {\n        if(num <= 0) {\n            num = 10;\n        }\n    } while(num <= 0);\n    printf("You entered: %d", num);\n    return 0;\n}',
    hint: 'Loop continues while number is not positive'
  },

  // ========== PATTERN PRINTING (21-30) ==========
  {
    id: 'c_loop_21',
    topicId: 'c_loop',
    question: 'Write a program to print square pattern of stars (5x5).',
    mathSolution: '5 rows, 5 columns of stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Outer loop for rows, inner for columns'
  },
  {
    id: 'c_loop_22',
    topicId: 'c_loop',
    question: 'Write a program to print right-angle triangle pattern (5 rows).',
    mathSolution: '*\\n**\\n***\\n****\\n*****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Inner loop runs i times'
  },
  {
    id: 'c_loop_23',
    topicId: 'c_loop',
    question: 'Write a program to print inverted triangle pattern (5 rows).',
    mathSolution: '*****\\n****\\n***\\n**\\n*',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=5; i>=1; i--) {\n        for(int j=1; j<=i; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Decrease stars in each row'
  },
  {
    id: 'c_loop_24',
    topicId: 'c_loop',
    question: 'Write a program to print pyramid pattern (5 rows).',
    mathSolution: '    *\\n   ***\\n  *****\\n *******\\n*********',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print spaces then stars'
  },
  {
    id: 'c_loop_25',
    topicId: 'c_loop',
    question: 'Write a program to print number pattern: 1, 12, 123, 1234, 12345.',
    mathSolution: '1\\n12\\n123\\n1234\\n12345',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print j in inner loop'
  },
  {
    id: 'c_loop_26',
    topicId: 'c_loop',
    question: 'Write a program to print Floyd\'s triangle (5 rows).',
    mathSolution: '1\\n2 3\\n4 5 6\\n7 8 9 10\\n11 12 13 14 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 1;\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("%d ", num++);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use counter that increments each time'
  },
  {
    id: 'c_loop_27',
    topicId: 'c_loop',
    question: 'Write a program to print hollow square pattern (5x5).',
    mathSolution: '*****\\n*   *\\n*   *\\n*   *\\n*****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            if(i==1 || i==5 || j==1 || j==5)\n                printf("*");\n            else\n                printf(" ");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print stars only on borders'
  },
  {
    id: 'c_loop_28',
    topicId: 'c_loop',
    question: 'Write a program to print alphabet pattern: A, BB, CCC, DDDD, EEEEE.',
    mathSolution: 'A\\nBB\\nCCC\\nDDDD\\nEEEEE',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(char ch=\'A\'; ch<=\'E\'; ch++) {\n        for(int j=1; j<=ch-\'A\'+1; j++) {\n            printf("%c", ch);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print character based on its position'
  },
  {
    id: 'c_loop_29',
    topicId: 'c_loop',
    question: 'Write a program to print number pyramid: 1, 121, 12321, 1234321.',
    mathSolution: '   1\\n  121\\n 12321\\n1234321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int j=1; j<=i; j++) printf("%d", j);\n        for(int j=i-1; j>=1; j--) printf("%d", j);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print increasing then decreasing numbers'
  },
  {
    id: 'c_loop_30',
    topicId: 'c_loop',
    question: 'Write a program to print diamond pattern (4 rows).',
    mathSolution: '   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Upper half\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    // Lower half\n    for(int i=3; i>=1; i--) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Create upper and lower halves separately'
  },

  // ========== ARRAY OPERATIONS (31-40) ==========
  {
    id: 'c_loop_31',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of array elements {1,2,3,4,5}.',
    mathSolution: 'Sum = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = 0;\n    for(int i=0; i<5; i++) {\n        sum += arr[i];\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Array index starts from 0'
  },
  {
    id: 'c_loop_32',
    topicId: 'c_loop',
    question: 'Write a program to find largest element in array {10,45,2,78,34}.',
    mathSolution: 'Maximum = 78',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int max = arr[0];\n    for(int i=1; i<5; i++) {\n        if(arr[i] > max) max = arr[i];\n    }\n    printf("Maximum = %d", max);\n    return 0;\n}',
    hint: 'Assume first element as max, then compare'
  },
  {
    id: 'c_loop_33',
    topicId: 'c_loop',
    question: 'Write a program to find smallest element in array {10,45,2,78,34}.',
    mathSolution: 'Minimum = 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int min = arr[0];\n    for(int i=1; i<5; i++) {\n        if(arr[i] < min) min = arr[i];\n    }\n    printf("Minimum = %d", min);\n    return 0;\n}',
    hint: 'Assume first element as min, then compare'
  },
  {
    id: 'c_loop_34',
    topicId: 'c_loop',
    question: 'Write a program to print array {1,2,3,4,5} in reverse order.',
    mathSolution: '5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    for(int i=4; i>=0; i--) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Start loop from last index'
  },
  {
    id: 'c_loop_35',
    topicId: 'c_loop',
    question: 'Write a program to count even and odd numbers in array {1,2,3,4,5,6}.',
    mathSolution: 'Even: 3, Odd: 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6};\n    int even=0, odd=0;\n    for(int i=0; i<6; i++) {\n        if(arr[i]%2 == 0) even++;\n        else odd++;\n    }\n    printf("Even: %d, Odd: %d", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check even/odd'
  },
  {
    id: 'c_loop_36',
    topicId: 'c_loop',
    question: 'Write a program to search for element 45 in array {10,45,2,78,34}.',
    mathSolution: 'Found at index 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int search = 45, found = 0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] == search) {\n            printf("Found at index %d", i);\n            found = 1;\n            break;\n        }\n    }\n    if(!found) printf("Not found");\n    return 0;\n}',
    hint: 'Compare each element with search value'
  },
  {
    id: 'c_loop_37',
    topicId: 'c_loop',
    question: 'Write a program to bubble sort array {64,34,25,12,22,11,90}.',
    mathSolution: 'Sorted: 11,12,22,25,34,64,90',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    int n=7, temp;\n    for(int i=0; i<n-1; i++) {\n        for(int j=0; j<n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf("Sorted array: ");\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent elements and swap if needed'
  },
  {
    id: 'c_loop_38',
    topicId: 'c_loop',
    question: 'Write a program to add two matrices (2x2).',
    mathSolution: '[[1+5=6, 2+6=8], [3+7=10, 4+8=12]]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n        }\n    }\n    printf("Result:\\n");\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements'
  },
  {
    id: 'c_loop_39',
    topicId: 'c_loop',
    question: 'Write a program to find transpose of matrix [[1,2],[3,4]].',
    mathSolution: '[[1,3],[2,4]]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int t[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            t[j][i] = a[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            printf("%d ", t[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap rows and columns'
  },
  {
    id: 'c_loop_40',
    topicId: 'c_loop',
    question: 'Write a program to find length of string "Hello" without strlen.',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int length = 0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        length++;\n    }\n    printf("Length = %d", length);\n    return 0;\n}',
    hint: 'Count until null character \'\\0\''
  },

  // ========== STRING OPERATIONS (41-50) ==========
  {
    id: 'c_loop_41',
    topicId: 'c_loop',
    question: 'Write a program to reverse string "Hello".',
    mathSolution: 'Reversed: olleH',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    int n = strlen(str);\n    for(int i=0; i<n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-1-i];\n        str[n-1-i] = temp;\n    }\n    printf("Reversed: %s", str);\n    return 0;\n}',
    hint: 'Swap first and last characters'
  },
  {
    id: 'c_loop_42',
    topicId: 'c_loop',
    question: 'Write a program to count vowels in string "Hello World".',
    mathSolution: 'Vowels = 3 (e, o, o)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\')\n            count++;\n    }\n    printf("Vowels = %d", count);\n    return 0;\n}',
    hint: 'Use tolower() to handle uppercase'
  },
  {
    id: 'c_loop_43',
    topicId: 'c_loop',
    question: 'Write a program to check if "madam" is palindrome.',
    mathSolution: 'madam is palindrome',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "madam";\n    int n = strlen(str);\n    int flag = 1;\n    for(int i=0; i<n/2; i++) {\n        if(str[i] != str[n-1-i]) {\n            flag = 0;\n            break;\n        }\n    }\n    if(flag) printf("%s is palindrome", str);\n    else printf("%s is not palindrome", str);\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_loop_44',
    topicId: 'c_loop',
    question: 'Write a program to convert string "hello" to uppercase.',
    mathSolution: 'HELLO',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "hello";\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        if(str[i] >= \'a\' && str[i] <= \'z\')\n            str[i] = str[i] - 32;\n    }\n    printf("%s", str);\n    return 0;\n}',
    hint: 'ASCII difference between uppercase and lowercase is 32'
  },
  {
    id: 'c_loop_45',
    topicId: 'c_loop',
    question: 'Write a program to count consonants in string "Hello World".',
    mathSolution: 'Consonants = 7 (H,l,l,W,r,l,d)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch>=\'a\' && ch<=\'z\') {\n            if(!(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\'))\n                count++;\n        }\n    }\n    printf("Consonants = %d", count);\n    return 0;\n}',
    hint: 'Alphabets that are not vowels'
  },
  {
    id: 'c_loop_46',
    topicId: 'c_loop',
    question: 'Write a program to find GCD of 12 and 18.',
    mathSolution: 'GCD = 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 12, b = 18, gcd;\n    for(int i=1; i<=a && i<=b; i++) {\n        if(a%i==0 && b%i==0) gcd = i;\n    }\n    printf("GCD = %d", gcd);\n    return 0;\n}',
    hint: 'Find largest common divisor'
  },
  {
    id: 'c_loop_47',
    topicId: 'c_loop',
    question: 'Write a program to find LCM of 12 and 18.',
    mathSolution: 'LCM = 36',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 12, b = 18, lcm;\n    lcm = (a > b) ? a : b;\n    while(1) {\n        if(lcm % a == 0 && lcm % b == 0) break;\n        lcm++;\n    }\n    printf("LCM = %d", lcm);\n    return 0;\n}',
    hint: 'Start from larger number and keep increasing'
  },
  {
    id: 'c_loop_48',
    topicId: 'c_loop',
    question: 'Write a program to calculate power 2^5.',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 2, n = 5, result = 1;\n    for(int i=1; i<=n; i++) {\n        result *= x;\n    }\n    printf("%d^%d = %d", x, n, result);\n    return 0;\n}',
    hint: 'Multiply x, n times'
  },
  {
    id: 'c_loop_49',
    topicId: 'c_loop',
    question: 'Write a program to print prime numbers between 1 and 50.',
    mathSolution: '2,3,5,7,11,13,17,19,23,29,31,37,41,43,47',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=50; i++) {\n        int flag = 1;\n        for(int j=2; j<=i/2; j++) {\n            if(i % j == 0) {\n                flag = 0;\n                break;\n            }\n        }\n        if(flag) printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Prime numbers have no divisors except 1 and itself'
  },
  {
    id: 'c_loop_50',
    topicId: 'c_loop',
    question: 'Write a program to convert decimal 10 to binary.',
    mathSolution: 'Binary = 1010',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int decimal = 10, binary = 0, base = 1;\n    while(decimal > 0) {\n        int remainder = decimal % 2;\n        binary += remainder * base;\n        base *= 10;\n        decimal /= 2;\n    }\n    printf("Binary = %d", binary);\n    return 0;\n}',
    hint: 'Divide by 2 and collect remainders in reverse'
  }
);