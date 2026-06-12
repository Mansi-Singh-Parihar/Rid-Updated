QuizData.questions.push(
  // ========== BASIC IF STATEMENT (1-10) ==========
  {
    id: 'c_conditional_001',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive using if statement.',
    mathSolution: 'Positive number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 15;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if statement to execute code when condition is true'
  },
  {
    id: 'c_conditional_002',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even using if statement.',
    mathSolution: 'Even number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 8;\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use modulus operator % to check divisibility by 2'
  },
  {
    id: 'c_conditional_003',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is uppercase using if statement.',
    mathSolution: 'Uppercase check with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'G\';\n    if(ch >= \'A\' && ch <= \'Z\') {\n        printf("%c is uppercase\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between A and Z'
  },
  {
    id: 'c_conditional_004',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is multiple of 5 using if statement.',
    mathSolution: 'Multiple of 5 check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 25;\n    if(num % 5 == 0) {\n        printf("%d is a multiple of 5\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 5 == 0'
  },
  {
    id: 'c_conditional_005',
    topicId: 'c_conditional',
    question: 'Write a program to check if a year is a century year using if statement.',
    mathSolution: 'Century year check with fixed year',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 1900;\n    if(year % 100 == 0) {\n        printf("%d is a century year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Century years are divisible by 100'
  },
  {
    id: 'c_conditional_006',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is between 10 and 20 using if statement.',
    mathSolution: 'Range check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 15;\n    if(num >= 10 && num <= 20) {\n        printf("%d is between 10 and 20\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND (&&) to check both conditions'
  },
  {
    id: 'c_conditional_007',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is vowel using if statement.',
    mathSolution: 'Vowel check with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'e\';\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n        printf("%c is a vowel\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_conditional_008',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by both 3 and 4 using if statement.',
    mathSolution: 'Divisible by 3 and 4 with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 12;\n    if(num % 3 == 0 && num % 4 == 0) {\n        printf("%d is divisible by both 3 and 4\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND to combine conditions'
  },
  {
    id: 'c_conditional_009',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even or odd using if-else.',
    mathSolution: 'Even or odd with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 7;\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if-else for two-way decisions'
  },
  {
    id: 'c_conditional_010',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive or negative using if-else.',
    mathSolution: 'Positive or negative with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -5;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else {\n        printf("%d is negative\\n", num);\n    }\n    return 0;\n}',
    hint: 'Compare with zero for positive/negative'
  },

  // ========== IF-ELSE STATEMENT (11-20) ==========
  {
    id: 'c_conditional_011',
    topicId: 'c_conditional',
    question: 'Write a program to find the larger of two numbers using if-else.',
    mathSolution: 'Maximum of two with fixed values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40;\n    if(a > b) {\n        printf("%d is larger\\n", a);\n    } else {\n        printf("%d is larger\\n", b);\n    }\n    return 0;\n}',
    hint: 'Compare a and b using > operator'
  },
  {
    id: 'c_conditional_012',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is alphabet or not using if-else.',
    mathSolution: 'Alphabet or not with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'9\';\n    if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        printf("%c is an alphabet\\n", ch);\n    } else {\n        printf("%c is not an alphabet\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is in lowercase or uppercase range'
  },
  {
    id: 'c_conditional_013',
    topicId: 'c_conditional',
    question: 'Write a program to check leap year using if-else.',
    mathSolution: 'Leap year check with fixed year',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 2024;\n    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Leap year: divisible by 4 but not by 100, or divisible by 400'
  },
  {
    id: 'c_conditional_014',
    topicId: 'c_conditional',
    question: 'Write a program to check voting eligibility using if-else.',
    mathSolution: 'Voting eligibility with fixed age',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    if(age >= 18) {\n        printf("You are eligible to vote\\n");\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("Wait for %d more years\\n", 18 - age);\n    }\n    return 0;\n}',
    hint: 'Check if age is 18 or above'
  },
  {
    id: 'c_conditional_015',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by 7 or not using if-else.',
    mathSolution: 'Divisible by 7 with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 49;\n    if(num % 7 == 0) {\n        printf("%d is divisible by 7\\n", num);\n    } else {\n        printf("%d is not divisible by 7\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 7 == 0'
  },
  {
    id: 'c_conditional_016',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is a single digit number using if-else.',
    mathSolution: 'Single digit check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 5;\n    if(num >= -9 && num <= 9) {\n        printf("%d is a single digit number\\n", num);\n    } else {\n        printf("%d is not a single digit number\\n", num);\n    }\n    return 0;\n}',
    hint: 'Single digit numbers are between -9 and 9'
  },
  {
    id: 'c_conditional_017',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is digit or not using if-else.',
    mathSolution: 'Digit or not with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'5\';\n    if(ch >= \'0\' && ch <= \'9\') {\n        printf("%c is a digit\\n", ch);\n    } else {\n        printf("%c is not a digit\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between 0 and 9'
  },
  {
    id: 'c_conditional_018',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value of a number using if-else.',
    mathSolution: 'Absolute value with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -10, abs;\n    if(num < 0) {\n        abs = -num;\n    } else {\n        abs = num;\n    }\n    printf("Absolute value of %d is %d\\n", num, abs);\n    return 0;\n}',
    hint: 'If negative, make positive; otherwise keep as is'
  },
  {
    id: 'c_conditional_019',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using if-else if.',
    mathSolution: 'Positive, negative, or zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 0;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    return 0;\n}',
    hint: 'Use if-else if-else for multiple conditions'
  },
  {
    id: 'c_conditional_020',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using if-else.',
    mathSolution: 'Maximum of three with fixed values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32;\n    if(a >= b && a >= c) {\n        printf("%d is largest\\n", a);\n    } else if(b >= a && b >= c) {\n        printf("%d is largest\\n", b);\n    } else {\n        printf("%d is largest\\n", c);\n    }\n    return 0;\n}',
    hint: 'Compare each number with the others'
  },

  // ========== NESTED IF-ELSE (21-30) ==========
  {
    id: 'c_conditional_021',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested if-else.',
    mathSolution: 'Maximum using nested if',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32;\n    if(a > b) {\n        if(a > c) {\n            printf("%d is largest\\n", a);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    } else {\n        if(b > c) {\n            printf("%d is largest\\n", b);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    }\n    return 0;\n}',
    hint: 'Compare a and b, then compare winner with c'
  },
  {
    id: 'c_conditional_022',
    topicId: 'c_conditional',
    question: 'Write a program to determine grade based on marks using nested if-else.',
    mathSolution: 'Grade determination with fixed marks',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks = 85;\n    if(marks >= 0 && marks <= 100) {\n        if(marks >= 90) {\n            printf("Grade A\\n");\n        } else if(marks >= 80) {\n            printf("Grade B\\n");\n        } else if(marks >= 70) {\n            printf("Grade C\\n");\n        } else if(marks >= 60) {\n            printf("Grade D\\n");\n        } else {\n            printf("Grade F\\n");\n        }\n    } else {\n        printf("Invalid marks\\n");\n    }\n    return 0;\n}',
    hint: 'First check validity, then assign grade'
  },
  {
    id: 'c_conditional_023',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of triangle based on sides using nested if-else.',
    mathSolution: 'Triangle type with fixed sides',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5, c = 5;\n    if(a + b > c && a + c > b && b + c > a) {\n        if(a == b && b == c) {\n            printf("Equilateral triangle\\n");\n        } else if(a == b || b == c || a == c) {\n            printf("Isosceles triangle\\n");\n        } else {\n            printf("Scalene triangle\\n");\n        }\n    } else {\n        printf("Not a valid triangle\\n");\n    }\n    return 0;\n}',
    hint: 'Check triangle inequality first, then classify by sides'
  },
  {
    id: 'c_conditional_024',
    topicId: 'c_conditional',
    question: 'Write a program to determine the quadrant of a point using nested if-else.',
    mathSolution: 'Quadrant of point with fixed coordinates',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 5, y = -3;\n    if(x == 0 && y == 0) {\n        printf("Origin\\n");\n    } else if(x == 0) {\n        printf("On Y-axis\\n");\n    } else if(y == 0) {\n        printf("On X-axis\\n");\n    } else {\n        if(x > 0 && y > 0) printf("Quadrant I\\n");\n        else if(x < 0 && y > 0) printf("Quadrant II\\n");\n        else if(x < 0 && y < 0) printf("Quadrant III\\n");\n        else printf("Quadrant IV\\n");\n    }\n    return 0;\n}',
    hint: 'Check axes first, then quadrants based on signs'
  },
  {
    id: 'c_conditional_025',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of angle using nested if-else.',
    mathSolution: 'Angle type with fixed angle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int angle = 120;\n    if(angle > 0 && angle < 360) {\n        if(angle < 90) printf("Acute angle\\n");\n        else if(angle == 90) printf("Right angle\\n");\n        else if(angle < 180) printf("Obtuse angle\\n");\n        else if(angle == 180) printf("Straight angle\\n");\n        else printf("Reflex angle\\n");\n    } else {\n        printf("Invalid angle\\n");\n    }\n    return 0;\n}',
    hint: 'Classify based on measure: acute(<90), right(90), obtuse(<180), straight(180), reflex(>180)'
  },
  {
    id: 'c_conditional_026',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is prime using if-else.',
    mathSolution: 'Prime number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 17, i, isPrime = 1;\n    if(num <= 1) {\n        isPrime = 0;\n    } else {\n        for(i = 2; i <= num/2; i++) {\n            if(num % i == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n    }\n    if(isPrime) printf("%d is prime\\n", num);\n    else printf("%d is not prime\\n", num);\n    return 0;\n}',
    hint: 'Check divisibility from 2 to num/2'
  },
  {
    id: 'c_conditional_027',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is palindrome using if-else.',
    mathSolution: 'Palindrome number with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 121, reversed = 0, remainder, original;\n    original = num;\n    while(num > 0) {\n        remainder = num % 10;\n        reversed = reversed * 10 + remainder;\n        num /= 10;\n    }\n    if(original == reversed)\n        printf("%d is a palindrome\\n", original);\n    else\n        printf("%d is not a palindrome\\n", original);\n    return 0;\n}',
    hint: 'Reverse the number and compare with original'
  },
  {
    id: 'c_conditional_028',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest digit in a number.',
    mathSolution: 'Largest digit with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 3948, largest = 0, digit;\n    int temp = num;\n    while(temp > 0) {\n        digit = temp % 10;\n        if(digit > largest) {\n            largest = digit;\n        }\n        temp /= 10;\n    }\n    printf("Largest digit in %d is %d\\n", num, largest);\n    return 0;\n}',
    hint: 'Extract digits and keep track of maximum'
  },
  {
    id: 'c_conditional_029',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is Armstrong number.',
    mathSolution: 'Armstrong number with fixed value',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int num = 153, sum = 0, temp, remainder, n = 0;\n    temp = num;\n    while(temp != 0) {\n        temp /= 10;\n        n++;\n    }\n    temp = num;\n    while(temp != 0) {\n        remainder = temp % 10;\n        sum += pow(remainder, n);\n        temp /= 10;\n    }\n    if(sum == num)\n        printf("%d is an Armstrong number\\n", num);\n    else\n        printf("%d is not an Armstrong number\\n", num);\n    return 0;\n}',
    hint: 'Sum of digits raised to power of number of digits equals the number'
  },
  {
    id: 'c_conditional_030',
    topicId: 'c_conditional',
    question: 'Write a program to find factorial of a number using if-else.',
    mathSolution: 'Factorial with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 5, fact = 1;\n    for(int i = 1; i <= num; i++) {\n        fact *= i;\n    }\n    printf("Factorial of %d = %d\\n", num, fact);\n    return 0;\n}',
    hint: 'Multiply numbers from 1 to n'
  },

  // ========== CONDITIONAL OPERATOR (TERNARY) (31-40) ==========
  {
    id: 'c_conditional_031',
    topicId: 'c_conditional',
    question: 'Write a program to find larger of two numbers using conditional operator.',
    mathSolution: 'Maximum with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40, max;\n    max = (a > b) ? a : b;\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Ternary: condition ? value_if_true : value_if_false'
  },
  {
    id: 'c_conditional_032',
    topicId: 'c_conditional',
    question: 'Write a program to check even or odd using conditional operator.',
    mathSolution: 'Even/odd with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 7;\n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    return 0;\n}',
    hint: 'Use ternary directly in printf'
  },
  {
    id: 'c_conditional_033',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value using conditional operator.',
    mathSolution: 'Absolute value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -15, abs;\n    abs = (num < 0) ? -num : num;\n    printf("Absolute value = %d\\n", abs);\n    return 0;\n}',
    hint: 'abs = (num < 0) ? -num : num'
  },
  {
    id: 'c_conditional_034',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested conditional operator.',
    mathSolution: 'Maximum of three',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32, max;\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Nested ternary operators can find maximum of three'
  },
  {
    id: 'c_conditional_035',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using conditional operator.',
    mathSolution: 'Sign with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -7;\n    printf("%d is %s\\n", num,\n           (num > 0) ? "positive" :\n           (num < 0) ? "negative" : "zero");\n    return 0;\n}',
    hint: 'Nested ternaries handle multiple conditions'
  },
  {
    id: 'c_conditional_036',
    topicId: 'c_conditional',
    question: 'Write a program to find the minimum of two numbers using conditional operator.',
    mathSolution: 'Minimum of two',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40, min;\n    min = (a < b) ? a : b;\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Use (<) instead of (>) for minimum'
  },
  {
    id: 'c_conditional_037',
    topicId: 'c_conditional',
    question: 'Write a program to check if a year is leap year using conditional operator.',
    mathSolution: 'Leap year with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 2024;\n    printf("%d is %s\\n", year,\n           ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? "a leap year" : "not a leap year");\n    return 0;\n}',
    hint: 'Leap year condition with ternary'
  },
  {
    id: 'c_conditional_038',
    topicId: 'c_conditional',
    question: 'Write a program to find the smaller of two numbers using conditional operator.',
    mathSolution: 'Smaller of two',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 35, b = 22;\n    printf("%d is smaller\\n", (a < b) ? a : b);\n    return 0;\n}',
    hint: 'Directly print the result of conditional operator'
  },
  {
    id: 'c_conditional_039',
    topicId: 'c_conditional',
    question: 'Write a program to check voting eligibility using conditional operator.',
    mathSolution: 'Voting eligibility with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    printf("You are %s\\n", (age >= 18) ? "eligible to vote" : "not eligible to vote");\n    return 0;\n}',
    hint: 'Use ternary for conditional strings'
  },
  {
    id: 'c_conditional_040',
    topicId: 'c_conditional',
    question: 'Write a program to find the square root or square based on condition using conditional operator.',
    mathSolution: 'Square or square root',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int choice = 1, num = 9;\n    printf("Result: %f\\n", (choice == 1) ? sqrt(num) : (double)(num * num));\n    return 0;\n}',
    hint: 'Use conditional to choose between operations'
  },

  // ========== SWITCH STATEMENT (41-50) ==========
  {
    id: 'c_conditional_041',
    topicId: 'c_conditional',
    question: 'Write a program to display day of week using switch statement with fixed day.',
    mathSolution: 'Day of week',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int day = 3;\n    switch(day) {\n        case 1: printf("Monday\\n"); break;\n        case 2: printf("Tuesday\\n"); break;\n        case 3: printf("Wednesday\\n"); break;\n        case 4: printf("Thursday\\n"); break;\n        case 5: printf("Friday\\n"); break;\n        case 6: printf("Saturday\\n"); break;\n        case 7: printf("Sunday\\n"); break;\n        default: printf("Invalid day\\n");\n    }\n    return 0;\n}',
    hint: 'switch selects one of many code blocks based on value'
  },
  {
    id: 'c_conditional_042',
    topicId: 'c_conditional',
    question: 'Write a program to create a simple calculator using switch with fixed values.',
    mathSolution: 'Simple calculator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char op = \'+\';\n    float a = 10, b = 5;\n    switch(op) {\n        case \'+\': printf("%.0f + %.0f = %.0f\\n", a, b, a+b); break;\n        case \'-\': printf("%.0f - %.0f = %.0f\\n", a, b, a-b); break;\n        case \'*\': printf("%.0f * %.0f = %.0f\\n", a, b, a*b); break;\n        case \'/\': \n            if(b != 0) printf("%.0f / %.0f = %.2f\\n", a, b, a/b);\n            else printf("Division by zero\\n");\n            break;\n        default: printf("Invalid operator\\n");\n    }\n    return 0;\n}',
    hint: 'switch works with character constants for operators'
  },
  {
    id: 'c_conditional_043',
    topicId: 'c_conditional',
    question: 'Write a program to display month name using switch with fixed month.',
    mathSolution: 'Month name',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month = 6;\n    switch(month) {\n        case 1: printf("January\\n"); break;\n        case 2: printf("February\\n"); break;\n        case 3: printf("March\\n"); break;\n        case 4: printf("April\\n"); break;\n        case 5: printf("May\\n"); break;\n        case 6: printf("June\\n"); break;\n        case 7: printf("July\\n"); break;\n        case 8: printf("August\\n"); break;\n        case 9: printf("September\\n"); break;\n        case 10: printf("October\\n"); break;\n        case 11: printf("November\\n"); break;\n        case 12: printf("December\\n"); break;\n        default: printf("Invalid month\\n");\n    }\n    return 0;\n}',
    hint: 'Each case corresponds to a month'
  },
  {
    id: 'c_conditional_044',
    topicId: 'c_conditional',
    question: 'Write a program to display number of days in a month using switch with fixed month.',
    mathSolution: 'Days in month',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month = 2, days;\n    switch(month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            days = 31; break;\n        case 4: case 6: case 9: case 11:\n            days = 30; break;\n        case 2:\n            days = 28; break;\n        default:\n            printf("Invalid month\\n");\n            return 1;\n    }\n    printf("Days: %d\\n", days);\n    return 0;\n}',
    hint: 'Multiple case labels can share same code block'
  },
  {
    id: 'c_conditional_045',
    topicId: 'c_conditional',
    question: 'Write a program to convert digit to word using switch with fixed digit.',
    mathSolution: 'Digit to word',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int digit = 7;\n    switch(digit) {\n        case 0: printf("Zero\\n"); break;\n        case 1: printf("One\\n"); break;\n        case 2: printf("Two\\n"); break;\n        case 3: printf("Three\\n"); break;\n        case 4: printf("Four\\n"); break;\n        case 5: printf("Five\\n"); break;\n        case 6: printf("Six\\n"); break;\n        case 7: printf("Seven\\n"); break;\n        case 8: printf("Eight\\n"); break;\n        case 9: printf("Nine\\n"); break;\n        default: printf("Not a digit\\n");\n    }\n    return 0;\n}',
    hint: 'switch maps numeric values to strings'
  },
  {
    id: 'c_conditional_046',
    topicId: 'c_conditional',
    question: 'Write a program to check vowel or consonant using switch with fixed character.',
    mathSolution: 'Vowel/consonant',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'u\';\n    switch(ch) {\n        case \'a\': case \'e\': case \'i\': case \'o\': case \'u\':\n        case \'A\': case \'E\': case \'I\': case \'O\': case \'U\':\n            printf("%c is a vowel\\n", ch);\n            break;\n        default:\n            if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\'))\n                printf("%c is a consonant\\n", ch);\n            else\n                printf("%c is not an alphabet\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Multiple case labels for all vowels'
  },
  {
    id: 'c_conditional_047',
    topicId: 'c_conditional',
    question: 'Write a program to display season based on month using switch with fixed month.',
    mathSolution: 'Season',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month = 7;\n    switch(month) {\n        case 12: case 1: case 2:\n            printf("Winter\\n"); break;\n        case 3: case 4: case 5:\n            printf("Spring\\n"); break;\n        case 6: case 7: case 8:\n            printf("Summer\\n"); break;\n        case 9: case 10: case 11:\n            printf("Autumn\\n"); break;\n        default:\n            printf("Invalid month\\n");\n    }\n    return 0;\n}',
    hint: 'Group consecutive months into seasons'
  },
  {
    id: 'c_conditional_048',
    topicId: 'c_conditional',
    question: 'Write a program to display traffic light message using switch with fixed color.',
    mathSolution: 'Traffic light',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char color = \'G\';\n    switch(color) {\n        case \'R\': case \'r\':\n            printf("STOP! Red light\\n"); break;\n        case \'Y\': case \'y\':\n            printf("READY! Yellow light\\n"); break;\n        case \'G\': case \'g\':\n            printf("GO! Green light\\n"); break;\n        default:\n            printf("Invalid color\\n");\n    }\n    return 0;\n}',
    hint: 'Handle both uppercase and lowercase inputs'
  },
  {
    id: 'c_conditional_049',
    topicId: 'c_conditional',
    question: 'Write a program to determine grade using switch with fixed marks.',
    mathSolution: 'Grade with switch',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks = 85;\n    if(marks < 0 || marks > 100) {\n        printf("Invalid marks\\n");\n        return 1;\n    }\n    switch(marks / 10) {\n        case 10: case 9: printf("Grade A\\n"); break;\n        case 8: printf("Grade B\\n"); break;\n        case 7: printf("Grade C\\n"); break;\n        case 6: printf("Grade D\\n"); break;\n        default: printf("Grade F\\n");\n    }\n    return 0;\n}',
    hint: 'Use integer division to group marks into ranges'
  },
  {
    id: 'c_conditional_050',
    topicId: 'c_conditional',
    question: 'Write a program to simulate a simple ATM using switch with fixed choice.',
    mathSolution: 'ATM simulation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int choice = 2;\n    float balance = 5000, amount = 1000;\n    switch(choice) {\n        case 1:\n            printf("Balance: Rs. %.2f\\n", balance);\n            break;\n        case 2:\n            if(amount > 0 && amount <= balance) {\n                balance -= amount;\n                printf("Withdrawn Rs. %.2f\\n", amount);\n                printf("New balance: Rs. %.2f\\n", balance);\n            } else {\n                printf("Invalid withdrawal\\n");\n            }\n            break;\n        case 3:\n            printf("Deposit Rs. %.2f\\n", amount);\n            balance += amount;\n            printf("New balance: Rs. %.2f\\n", balance);\n            break;\n        default:\n            printf("Invalid choice\\n");\n    }\n    return 0;\n}',
    hint: 'Use switch for menu-driven operations'
  }
);