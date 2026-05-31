QuizData.questions.push(
  // ========== BASIC BREAK (1-10) ==========
  {
    id: 'c_break_continue_1',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but break when i equals 5.',
    mathSolution: 'Prints: 1 2 3 4',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i == 5) {\n            break;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use break statement to exit loop when condition is met'
  },
  {
    id: 'c_break_continue_2',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 using while loop but break when i becomes 7.',
    mathSolution: 'Prints: 1 2 3 4 5 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    while(i<=10) {\n        if(i == 7) {\n            break;\n        }\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}',
    hint: 'Break exits the loop immediately'
  },
  {
    id: 'c_break_continue_3',
    topicId: 'c_break_continue',
    question: 'Write a program to find first number divisible by 7 between 1 and 50, then break.',
    mathSolution: 'First number divisible by 7 is 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=50; i++) {\n        if(i % 7 == 0) {\n            printf("First number divisible by 7: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check condition using modulo operator'
  },
  {
    id: 'c_break_continue_4',
    topicId: 'c_break_continue',
    question: 'Write a program to find first prime number greater than 100 and break.',
    mathSolution: 'First prime after 100 is 101',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=101; ; i++) {\n        int flag=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                flag=0;\n                break;\n            }\n        }\n        if(flag) {\n            printf("First prime after 100: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Use nested loops to check primality'
  },
  {
    id: 'c_break_continue_5',
    topicId: 'c_break_continue',
    question: 'Write a program to find first occurrence of number 30 in array and break.',
    mathSolution: 'Array [10,20,30,40,50] → found at index 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int search = 30;\n    int found = -1;\n    for(int i=0; i<5; i++) {\n        if(arr[i] == search) {\n            found = i;\n            break;\n        }\n    }\n    if(found != -1) printf("Found at index %d", found);\n    else printf("Not found");\n    return 0;\n}',
    hint: 'Break loop once element is found'
  },
  {
    id: 'c_break_continue_6',
    topicId: 'c_break_continue',
    question: 'Write a program to find first negative number in array and break.',
    mathSolution: 'Array [5,8,-3,10,2] first negative is -3 at index 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5,8,-3,10,2};\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            printf("First negative: %d at index %d", arr[i], i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check for negative values and break when found'
  },
  {
    id: 'c_break_continue_7',
    topicId: 'c_break_continue',
    question: 'Write a program to find first perfect square greater than 50 and break.',
    mathSolution: 'First perfect square > 50 is 64 (8^2)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        int square = i*i;\n        if(square > 50) {\n            printf("First perfect square > 50: %d", square);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Calculate squares until condition is met'
  },
  {
    id: 'c_break_continue_8',
    topicId: 'c_break_continue',
    question: 'Write a program to find first number divisible by both 3 and 5, then break.',
    mathSolution: 'First number divisible by both 3 and 5 is 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        if(i%3==0 && i%5==0) {\n            printf("First number divisible by 3 and 5: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check both conditions using && operator'
  },
  {
    id: 'c_break_continue_9',
    topicId: 'c_break_continue',
    question: 'Write a program to find first Fibonacci number greater than 1000 and break.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 → 1597',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    while(1) {\n        c = a+b;\n        if(c > 1000) {\n            printf("First Fibonacci > 1000: %d", c);\n            break;\n        }\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Generate Fibonacci numbers until condition met'
  },
  {
    id: 'c_break_continue_10',
    topicId: 'c_break_continue',
    question: 'Write a program to find first Armstrong number between 100 and 500 and break.',
    mathSolution: 'Armstrong numbers: 153, 370, 371, 407 → first is 153',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=100; i<=500; i++) {\n        int num=i, sum=0, temp=i;\n        while(temp>0) {\n            int digit = temp%10;\n            sum += digit*digit*digit;\n            temp /= 10;\n        }\n        if(sum == i) {\n            printf("First Armstrong number: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check Armstrong condition for 3-digit numbers'
  },

  // ========== BASIC CONTINUE (11-20) ==========
  {
    id: 'c_break_continue_11',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but skip printing 5 using continue.',
    mathSolution: 'Prints: 1 2 3 4 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i == 5) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Continue skips the rest of the loop body'
  },
  {
    id: 'c_break_continue_12',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but skip even numbers using continue.',
    mathSolution: 'Prints: 1 3 5 7 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i%2 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use modulo operator to check even numbers'
  },
  {
    id: 'c_break_continue_13',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 20 but skip numbers divisible by 3.',
    mathSolution: 'Prints: 1 2 4 5 7 8 10 11 13 14 16 17 19 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=20; i++) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use modulo operator to check divisibility'
  },
  {
    id: 'c_break_continue_14',
    topicId: 'c_break_continue',
    question: 'Write a program to print all alphabets except vowels using continue.',
    mathSolution: 'Prints: B C D F G H J K L M N P Q R S T V W X Y Z',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    for(char ch=\'A\'; ch<=\'Z\'; ch++) {\n        char lower = tolower(ch);\n        if(lower==\'a\'||lower==\'e\'||lower==\'i\'||lower==\'o\'||lower==\'u\') {\n            continue;\n        }\n        printf("%c ", ch);\n    }\n    return 0;\n}',
    hint: 'Skip vowels using continue'
  },
  {
    id: 'c_break_continue_15',
    topicId: 'c_break_continue',
    question: 'Write a program to calculate sum of positive numbers only (skip negatives).',
    mathSolution: 'Numbers: 5, -2, 3, -1, 4 → sum = 5+3+4 = 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5,-2,3,-1,4};\n    int sum=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            continue;\n        }\n        sum += arr[i];\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Skip negative numbers using continue'
  },
  {
    id: 'c_break_continue_16',
    topicId: 'c_break_continue',
    question: 'Write a program to print all numbers except those ending with 5 from 1 to 50.',
    mathSolution: 'Skip 5,15,25,35,45',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=50; i++) {\n        if(i%10 == 5) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Check last digit using modulo 10'
  },
  {
    id: 'c_break_continue_17',
    topicId: 'c_break_continue',
    question: 'Write a program to print characters of a string skipping digits.',
    mathSolution: 'String "a1b2c3" prints: a b c',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "a1b2c3";\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        if(str[i] >= \'0\' && str[i] <= \'9\') {\n            continue;\n        }\n        printf("%c ", str[i]);\n    }\n    return 0;\n}',
    hint: 'Skip characters that are digits'
  },
  {
    id: 'c_break_continue_18',
    topicId: 'c_break_continue',
    question: 'Write a program to print all even numbers but skip multiples of 10 from 1 to 50.',
    mathSolution: 'Skip 10,20,30,40,50 → prints 2,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38,42,44,46,48',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=50; i+=2) {\n        if(i%10 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Skip if number is divisible by 10'
  },
  {
    id: 'c_break_continue_19',
    topicId: 'c_break_continue',
    question: 'Write a program to calculate average of positive numbers (skip negatives and zeros).',
    mathSolution: 'Numbers: 10,0,-5,20,0,30 → positive: 10,20,30 avg=20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,0,-5,20,0,30};\n    int sum=0, count=0;\n    for(int i=0; i<6; i++) {\n        if(arr[i] <= 0) {\n            continue;\n        }\n        sum += arr[i];\n        count++;\n    }\n    printf("Average = %.2f", (float)sum/count);\n    return 0;\n}',
    hint: 'Skip non-positive numbers using continue'
  },
  {
    id: 'c_break_continue_20',
    topicId: 'c_break_continue',
    question: 'Write a program to print all prime numbers between 1 and 50, skipping non-primes.',
    mathSolution: 'Primes: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=50; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Continue skips non-prime numbers'
  },

  // ========== BREAK IN NESTED LOOPS (21-30) ==========
  {
    id: 'c_break_continue_21',
    topicId: 'c_break_continue',
    question: 'Write a program using nested loops to find first pair that sums to 10 and break both loops.',
    mathSolution: 'Array [1,3,5,7,9] first pair summing to 10: 1 and 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,3,5,7,9};\n    int target=10, found=0;\n    for(int i=0; i<5; i++) {\n        for(int j=i+1; j<5; j++) {\n            if(arr[i] + arr[j] == target) {\n                printf("Pair: %d and %d", arr[i], arr[j]);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_22',
    topicId: 'c_break_continue',
    question: 'Search a 2D matrix for a target value and break both loops when found.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] search 5 → found at [1][1]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int target=5, found=0;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            if(matrix[i][j] == target) {\n                printf("Found at [%d][%d]", i, j);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_23',
    topicId: 'c_break_continue',
    question: 'Find first prime number in a 2D array and break all loops.',
    mathSolution: 'Matrix [[4,6,8],[9,10,11],[12,14,15]] first prime is 11 at [1][2]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{4,6,8},{9,10,11},{12,14,15}};\n    int found=0, prime_val, prime_i, prime_j;\n    for(int i=0; i<3 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            int num=matrix[i][j], is_prime=1;\n            if(num<2) is_prime=0;\n            for(int k=2; k<=num/2; k++) {\n                if(num%k==0) {\n                    is_prime=0;\n                    break;\n                }\n            }\n            if(is_prime) {\n                prime_val=num; prime_i=i; prime_j=j;\n                found=1;\n                break;\n            }\n        }\n    }\n    if(found) printf("Prime found: %d at [%d][%d]", prime_val, prime_i, prime_j);\n    return 0;\n}',
    hint: 'Use condition in outer loop to break'
  },
  {
    id: 'c_break_continue_24',
    topicId: 'c_break_continue',
    question: 'Find common element between two arrays using nested loops, break when found.',
    mathSolution: 'Array1 [2,5,7,9], Array2 [3,6,7,8] first common: 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr1[] = {2,5,7,9};\n    int arr2[] = {3,6,7,8};\n    int found=0;\n    for(int i=0; i<4; i++) {\n        for(int j=0; j<4; j++) {\n            if(arr1[i] == arr2[j]) {\n                printf("Common element: %d", arr1[i]);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Break both loops when common element found'
  },
  {
    id: 'c_break_continue_25',
    topicId: 'c_break_continue',
    question: 'Find first row in matrix with all positive numbers and break.',
    mathSolution: 'Matrix [[-1,2,3],[4,5,6],[-7,8,9]] first all-positive row: row1 [4,5,6]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{-1,2,3},{4,5,6},{-7,8,9}};\n    int found_row = -1;\n    for(int i=0; i<3; i++) {\n        int all_positive = 1;\n        for(int j=0; j<3; j++) {\n            if(matrix[i][j] < 0) {\n                all_positive = 0;\n                break;\n            }\n        }\n        if(all_positive) {\n            found_row = i;\n            break;\n        }\n    }\n    if(found_row != -1) printf("First all-positive row: %d", found_row);\n    return 0;\n}',
    hint: 'Break inner loop on negative, break outer on all-positive'
  },
  {
    id: 'c_break_continue_26',
    topicId: 'c_break_continue',
    question: 'Find first column with sum greater than 50 and break.',
    mathSolution: 'Matrix [[10,20,30],[40,5,15],[5,10,20]] col0 sum=55 → break',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{10,20,30},{40,5,15},{5,10,20}};\n    for(int j=0; j<3; j++) {\n        int sum=0;\n        for(int i=0; i<3; i++) {\n            sum += matrix[i][j];\n        }\n        if(sum > 50) {\n            printf("Column %d sum = %d", j, sum);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Calculate column sums, break when condition met'
  },
  {
    id: 'c_break_continue_27',
    topicId: 'c_break_continue',
    question: 'Find first number that is power of 2 in a 2D array and break.',
    mathSolution: 'Matrix [[3,6,9],[8,12,16],[5,10,20]] first power of 2: 8',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{3,6,9},{8,12,16},{5,10,20}};\n    int found=0, power_val;\n    for(int i=0; i<3 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            int num = matrix[i][j];\n            int is_power = (num && !(num & (num-1)));\n            if(is_power) {\n                power_val = num;\n                found=1;\n                break;\n            }\n        }\n    }\n    printf("First power of 2: %d", power_val);\n    return 0;\n}',
    hint: 'Use bitwise operation to check power of 2'
  },
  {
    id: 'c_break_continue_28',
    topicId: 'c_break_continue',
    question: 'Find first element that is greater than sum of all previous elements and break.',
    mathSolution: 'Array [2,3,8,4,18] → 18 > 2+3+8+4=17',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2,3,8,4,18};\n    int sum=0, found=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] > sum) {\n            printf("Element %d at index %d > sum %d", arr[i], i, sum);\n            found=1;\n            break;\n        }\n        sum += arr[i];\n    }\n    if(!found) printf("No such element");\n    return 0;\n}',
    hint: 'Compare current element with running sum'
  },
  {
    id: 'c_break_continue_29',
    topicId: 'c_break_continue',
    question: 'Find first row that contains a palindrome number and break.',
    mathSolution: 'Matrix [[123,456],[121,789],[555,222]] first palindrome row: row1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][2] = {{123,456},{121,789},{555,222}};\n    int found_row = -1;\n    for(int i=0; i<3; i++) {\n        int has_palindrome = 0;\n        for(int j=0; j<2; j++) {\n            int num = matrix[i][j], rev=0, temp=num;\n            while(temp>0) {\n                rev = rev*10 + temp%10;\n                temp/=10;\n            }\n            if(rev == num) {\n                has_palindrome = 1;\n                break;\n            }\n        }\n        if(has_palindrome) {\n            found_row = i;\n            break;\n        }\n    }\n    printf("First row with palindrome: %d", found_row);\n    return 0;\n}',
    hint: 'Check each number for palindrome property'
  },
  {
    id: 'c_break_continue_30',
    topicId: 'c_break_continue',
    question: 'Find first number that appears in both 2D matrix and 1D array, break all loops.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6]], target [7,8,5,9] → found 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    int target[] = {7,8,5,9};\n    int found=0, found_val;\n    for(int i=0; i<2 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            for(int k=0; k<4; k++) {\n                if(matrix[i][j] == target[k]) {\n                    found_val = matrix[i][j];\n                    found=1;\n                    break;\n                }\n            }\n            if(found) break;\n        }\n    }\n    if(found) printf("Found common value: %d", found_val);\n    return 0;\n}',
    hint: 'Use multiple flags to break all loops'
  },

  // ========== CONTINUE IN NESTED LOOPS (31-40) ==========
  {
    id: 'c_break_continue_31',
    topicId: 'c_break_continue',
    question: 'Use continue in nested loops to skip even numbers in inner loop.',
    mathSolution: 'Print all pairs (i,j) where j is odd from 1-3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=3; i++) {\n        for(int j=1; j<=3; j++) {\n            if(j%2 == 0) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Continue only affects inner loop'
  },
  {
    id: 'c_break_continue_32',
    topicId: 'c_break_continue',
    question: 'Print multiplication table but skip diagonal elements where i == j using continue.',
    mathSolution: 'Skip elements where row equals column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            if(i == j) {\n                continue;\n            }\n            printf("%d×%d=%-4d", i, j, i*j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Continue skips diagonal elements'
  },
  {
    id: 'c_break_continue_33',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i+j is not divisible by 3 using continue.',
    mathSolution: 'Skip pairs where i+j is divisible by 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4; j++) {\n            if((i+j) % 3 == 0) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Check condition and continue if true'
  },
  {
    id: 'c_break_continue_34',
    topicId: 'c_break_continue',
    question: 'Print all combinations of two dice rolls that sum to more than 7, skipping those ≤7.',
    mathSolution: 'Dice rolls (1-6) with sum > 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=6; i++) {\n        for(int j=1; j<=6; j++) {\n            if(i+j <= 7) {\n                continue;\n            }\n            printf("(%d,%d)=%d ", i, j, i+j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use continue to skip small sums'
  },
  {
    id: 'c_break_continue_35',
    topicId: 'c_break_continue',
    question: 'Print matrix elements but skip elements in even rows using continue.',
    mathSolution: 'Matrix 3x3: print only rows 1 and 3 (0-indexed: rows 0,2)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for(int i=0; i<3; i++) {\n        if(i%2 != 0) {\n            continue;\n        }\n        for(int j=0; j<3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Skip entire rows using continue'
  },
  {
    id: 'c_break_continue_36',
    topicId: 'c_break_continue',
    question: 'Print all prime numbers from a 2D matrix, skipping non-primes.',
    mathSolution: 'Matrix [[4,7,9],[2,8,11],[13,15,17]] → primes: 7,2,11,13,17',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{4,7,9},{2,8,11},{13,15,17}};\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            int num = matrix[i][j], is_prime=1;\n            if(num < 2) { continue; }\n            for(int k=2; k<=num/2; k++) {\n                if(num%k == 0) {\n                    is_prime=0;\n                    break;\n                }\n            }\n            if(!is_prime) {\n                continue;\n            }\n            printf("%d ", num);\n        }\n    }\n    return 0;\n}',
    hint: 'Use continue to skip non-prime numbers'
  },
  {
    id: 'c_break_continue_37',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i and j are from 1-6 and i != j, skipping when i==j.',
    mathSolution: 'All dice roll pairs except doubles',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=6; i++) {\n        for(int j=1; j<=6; j++) {\n            if(i == j) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Skip when both dice show same number'
  },
  {
    id: 'c_break_continue_38',
    topicId: 'c_break_continue',
    question: 'Print all numbers from 1-100 that are divisible by 4 or 6, skipping those divisible by both.',
    mathSolution: 'Divisible by 4 or 6 but not by both (so skip 12,24,36,48,60,72,84,96)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=100; i++) {\n        if(i%4==0 && i%6==0) {\n            continue;\n        }\n        if(i%4==0 || i%6==0) {\n            printf("%d ", i);\n        }\n    }\n    return 0;\n}',
    hint: 'Skip numbers divisible by both 4 and 6'
  },
  {
    id: 'c_break_continue_39',
    topicId: 'c_break_continue',
    question: 'Print all leap years from 2000-2100, skipping centuries not divisible by 400.',
    mathSolution: 'Leap years: 2000,2004,2008,...2096, skip 2100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int year=2000; year<=2100; year++) {\n        if(year%100==0 && year%400!=0) {\n            continue;\n        }\n        if(year%4==0) {\n            printf("%d ", year);\n        }\n    }\n    return 0;\n}',
    hint: 'Skip century years not divisible by 400'
  },
  {
    id: 'c_break_continue_40',
    topicId: 'c_break_continue',
    question: 'Print all combinations of three numbers from 1-5 that form a triangle, skipping invalid combinations.',
    mathSolution: 'Triangle inequality: a+b>c, b+c>a, a+c>b',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=i; j<=5; j++) {\n            for(int k=j; k<=5; k++) {\n                if(i+j<=k || j+k<=i || i+k<=j) {\n                    continue;\n                }\n                printf("(%d,%d,%d) ", i, j, k);\n            }\n        }\n    }\n    return 0;\n}',
    hint: 'Skip combinations that don\'t satisfy triangle inequality'
  },

  // ========== BREAK AND CONTINUE TOGETHER (41-50) ==========
  {
    id: 'c_break_continue_41',
    topicId: 'c_break_continue',
    question: 'Find first 5 prime numbers using continue and break appropriately.',
    mathSolution: 'First 5 primes: 2,3,5,7,11',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=2; count<5; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips non-primes, outer loop breaks when count reaches 5'
  },
  {
    id: 'c_break_continue_42',
    topicId: 'c_break_continue',
    question: 'Process array elements but skip negatives and stop if sum exceeds 100.',
    mathSolution: 'Array [50,30,-10,40,20] → sums 50,80 then stops at 40 (120>100)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {50,30,-10,40,20};\n    int sum=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            continue;\n        }\n        sum += arr[i];\n        if(sum > 100) {\n            printf("Sum exceeded 100 at index %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Use continue to skip negatives, break when sum > 100'
  },
  {
    id: 'c_break_continue_43',
    topicId: 'c_break_continue',
    question: 'Find first number that is both prime and palindrome between 1-200, using break and continue.',
    mathSolution: 'First prime palindrome: 2,3,5,7,11 → 11 is first',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=200; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        int num=i, rev=0, temp=i;\n        while(temp>0) {\n            rev = rev*10 + temp%10;\n            temp/=10;\n        }\n        if(rev == i) {\n            printf("First prime palindrome: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if not prime, break when found prime palindrome'
  },
  {
    id: 'c_break_continue_44',
    topicId: 'c_break_continue',
    question: 'Process string, skip spaces, break if vowel encountered.',
    mathSolution: 'String "Hello World" processes: H l l (stops at e)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch == \' \') {\n            continue;\n        }\n        if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\') {\n            printf("\\nVowel %c encountered, stopping", str[i]);\n            break;\n        }\n        printf("%c", str[i]);\n    }\n    return 0;\n}',
    hint: 'Skip spaces with continue, break on vowels'
  },
  {
    id: 'c_break_continue_45',
    topicId: 'c_break_continue',
    question: 'Generate Fibonacci series, skip numbers divisible by 3, stop when number exceeds 100.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144 → skip 3,21,144, stop at 144',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    printf("%d %d ", a, b);\n    while(1) {\n        c = a+b;\n        if(c > 100) {\n            printf("\\nExceeded 100, stopping");\n            break;\n        }\n        if(c%3 == 0) {\n            a = b;\n            b = c;\n            continue;\n        }\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when >100'
  },
  {
    id: 'c_break_continue_46',
    topicId: 'c_break_continue',
    question: 'Find first 10 numbers divisible by 7 but not by 3, using continue and break.',
    mathSolution: 'Numbers: 7,14,28,35,49,56,70,77,91,98',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=7; count<10; i+=7) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when count reaches 10'
  },
  {
    id: 'c_break_continue_47',
    topicId: 'c_break_continue',
    question: 'Find first number that is divisible by sum of its digits, skip numbers with zero digit.',
    mathSolution: 'Numbers: 10 has zero digit skip, 11 not divisible, 12 divisible → 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=10; ; i++) {\n        int num=i, sum=0, has_zero=0;\n        while(num>0) {\n            int digit = num%10;\n            if(digit == 0) {\n                has_zero=1;\n                break;\n            }\n            sum += digit;\n            num/=10;\n        }\n        if(has_zero) {\n            continue;\n        }\n        if(i % sum == 0) {\n            printf("First number: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if number has zero digit, break when condition met'
  },
  {
    id: 'c_break_continue_48',
    topicId: 'c_break_continue',
    question: 'Find first 10 numbers divisible by 7 but not by 3, using continue and break.',
    mathSolution: 'Numbers: 7,14,28,35,49,56,70,77,91,98',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=7; count<10; i+=7) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when count reaches 10'
  },
  {
    id: 'c_break_continue_49',
    topicId: 'c_break_continue',
    question: 'Count characters in string excluding spaces, stop if punctuation found.',
    mathSolution: 'String "Hello, World" → counts H e l l o (stops at comma)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello, World";\n    int count=0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        if(str[i] == \' \') {\n            continue;\n        }\n        if(ispunct(str[i])) {\n            printf("\\nPunctuation found, stopping");\n            break;\n        }\n        count++;\n    }\n    printf("\\nCharacters count: %d", count);\n    return 0;\n}',
    hint: 'Continue skips spaces, break on punctuation'
  },
  {
    id: 'c_break_continue_50',
    topicId: 'c_break_continue',
    question: 'Find first number that is perfect square and also divisible by 7, using break and continue.',
    mathSolution: 'Numbers: 49 is 7² and divisible by 7',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        int root = sqrt(i);\n        if(root*root != i) {\n            continue;\n        }\n        if(i % 7 == 0) {\n            printf("First perfect square divisible by 7: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if not perfect square, break when divisible by 7'
  }
);