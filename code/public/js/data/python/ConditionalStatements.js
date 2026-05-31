QuizData.questions.push(
{
  id: 'py_cond_1',
  topicId: 'py_cond',
  question: 'Write an if statement that prints "Adult" if age >= 18.',
  mathSolution: 'Check if age is greater than or equal to 18.',
  codeSolution: 'age = 20\nif age >= 18:\n    print("Adult")',
  hint: 'Use simple if condition'
},
{
  id: 'py_cond_2',
  topicId: 'py_cond',
  question: 'Write if-else statement for Even or Odd.',
  mathSolution: 'Check remainder using % operator.',
  codeSolution: 'num = 7\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
  hint: 'Use modulo operator'
},
{
  id: 'py_cond_3',
  topicId: 'py_cond',
  question: 'Check Positive, Negative or Zero.',
  mathSolution: 'Compare with zero.',
  codeSolution: 'num = -5\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")',
  hint: 'Use elif'
},
{
  id: 'py_cond_4',
  topicId: 'py_cond',
  question: 'Nested if check positive even.',
  mathSolution: 'Check positivity then even.',
  codeSolution: 'num = 12\nif num > 0:\n    if num % 2 == 0:\n        print("Positive even")',
  hint: 'Nested condition'
},
{
  id: 'py_cond_5',
  topicId: 'py_cond',
  question: 'Ternary operator pass/fail.',
  mathSolution: 'One-line condition.',
  codeSolution: 'marks = 45\nresult = "Pass" if marks >= 33 else "Fail"\nprint(result)',
  hint: 'ternary operator'
},
{
  id: 'py_cond_6',
  topicId: 'py_cond',
  question: 'Leap year check.',
  mathSolution: 'Divisible by 4, not 100 unless 400.',
  codeSolution: 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print("Leap year")\nelse:\n    print("Not leap year")',
  hint: 'standard rule'
},
{
  id: 'py_cond_7',
  topicId: 'py_cond',
  question: 'Vowel check.',
  mathSolution: 'Check membership.',
  codeSolution: 'ch = "e"\nif ch in "aeiouAEIOU":\n    print("Vowel")\nelse:\n    print("Consonant")',
  hint: 'in operator'
},
{
  id: 'py_cond_8',
  topicId: 'py_cond',
  question: 'Largest of three numbers.',
  mathSolution: 'Compare all values.',
  codeSolution: 'a, b, c = 10, 25, 15\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)',
  hint: 'comparison'
},
{
  id: 'py_cond_9',
  topicId: 'py_cond',
  question: 'Empty string check.',
  mathSolution: 'Falsy value.',
  codeSolution: 's = ""\nif s:\n    print("Not empty")\nelse:\n    print("Empty")',
  hint: 'if s'
},
{
  id: 'py_cond_10',
  topicId: 'py_cond',
  question: 'Empty list check.',
  mathSolution: 'Falsy list.',
  codeSolution: 'lst = []\nif lst:\n    print("Not empty")\nelse:\n    print("Empty")',
  hint: 'if lst'
},
{
  id: 'py_cond_11',
  topicId: 'py_cond',
  question: 'Grade system.',
  mathSolution: 'Range-based grading.',
  codeSolution: 'marks = 85\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 60:\n    print("C")\nelif marks >= 45:\n    print("D")\nelse:\n    print("F")',
  hint: 'descending order'
},
{
  id: 'py_cond_12',
  topicId: 'py_cond',
  question: 'Divisible by 3 and 5.',
  mathSolution: 'AND condition.',
  codeSolution: 'num = 15\nif num % 3 == 0 and num % 5 == 0:\n    print("Yes")',
  hint: 'and operator'
},
{
  id: 'py_cond_13',
  topicId: 'py_cond',
  question: 'Range 1-100.',
  mathSolution: 'Chained comparison.',
  codeSolution: 'num = 50\nif 1 <= num <= 100:\n    print("In range")',
  hint: 'chained comparison'
},
{
  id: 'py_cond_14',
  topicId: 'py_cond',
  question: 'Starts with letter.',
  mathSolution: 'Check first char.',
  codeSolution: 's = "Python"\nif s[0] == "P":\n    print("Yes")',
  hint: 'index 0'
},
{
  id: 'py_cond_15',
  topicId: 'py_cond',
  question: 'Case insensitive compare.',
  mathSolution: 'Lowercase conversion.',
  codeSolution: 's1 = "Hello"\ns2 = "hello"\nif s1.lower() == s2.lower():\n    print("Same")',
  hint: 'lower()'
},
{
  id: 'py_cond_16',
  topicId: 'py_cond',
  question: 'Perfect square.',
  mathSolution: 'sqrt check.',
  codeSolution: 'import math\nnum = 16\nroot = int(math.sqrt(num))\nif root * root == num:\n    print("Perfect square")',
  hint: 'integer sqrt'
},
{
  id: 'py_cond_17',
  topicId: 'py_cond',
  question: 'Century year.',
  mathSolution: 'Divisible by 100.',
  codeSolution: 'year = 1900\nif year % 100 == 0:\n    print("Century year")',
  hint: '%100'
},
{
  id: 'py_cond_18',
  topicId: 'py_cond',
  question: 'Triangle validity.',
  mathSolution: 'Triangle inequality.',
  codeSolution: 'a, b, c = 3, 4, 5\nif a+b>c and b+c>a and a+c>b:\n    print("Valid triangle")',
  hint: 'triangle rule'
},
{
  id: 'py_cond_19',
  topicId: 'py_cond',
  question: 'Prime check.',
  mathSolution: 'Check divisors.',
  codeSolution: 'n = 17\nif n > 1:\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            print("Not prime")\n            break\n    else:\n        print("Prime")\nelse:\n    print("Not prime")',
  hint: 'loop method'
},
{
  id: 'py_cond_20',
  topicId: 'py_cond',
  question: 'Digit check.',
  mathSolution: 'isdigit().',
  codeSolution: 'ch = "7"\nprint(ch.isdigit())',
  hint: 'isdigit'
},
{
  id: 'py_cond_21',
  topicId: 'py_cond',
  question: 'Upper/lower check.',
  mathSolution: 'isupper/islower.',
  codeSolution: 'ch = "A"\nif ch.isupper():\n    print("Upper")\nelif ch.islower():\n    print("Lower")',
  hint: 'string methods'
},
{
  id: 'py_cond_22',
  topicId: 'py_cond',
  question: 'Login system.',
  mathSolution: 'Check credentials.',
  codeSolution: 'u = "admin"\np = "1234"\nif u=="admin" and p=="1234":\n    print("Login successful")\nelse:\n    print("Login failed")',
  hint: 'and operator'
},
{
  id: 'py_cond_23',
  topicId: 'py_cond',
  question: 'Check if a number is a multiple of 7 or 11.',
  mathSolution: 'Use `or` operator.',
  codeSolution: 'num = 14\nif num % 7 == 0 or num % 11 == 0:\n    print("Multiple of 7 or 11")\nelse:\n    print("Not multiple")',
  hint: 'Use `%` with `or`.'
},
{
  id: 'py_cond_24',
  topicId: 'py_cond',
  question: 'Check if a string is palindrome using if.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 's = "madam"\nif s == s[::-1]:\n    print("Palindrome")\nelse:\n    print("Not palindrome")',
  hint: 'Use slicing `[::-1]` to reverse.'
},
{
  id: 'py_cond_25',
  topicId: 'py_cond',
  question: 'Check if a number is positive and even using nested if.',
  mathSolution: 'First check positive, then even.',
  codeSolution: 'num = 8\nif num > 0:\n    if num % 2 == 0:\n        print("Positive even")\n    else:\n        print("Positive but odd")\nelse:\n    print("Not positive")',
  hint: 'Nest conditions.'
},
{
  id: 'py_cond_26',
  topicId: 'py_cond',
  question: 'Check if a number is Armstrong number (3 digits).',
  mathSolution: 'Cube each digit and sum.',
  codeSolution: 'num = 153\nsum_of_cubes = sum(int(d)**3 for d in str(num))\nif sum_of_cubes == num:\n    print("Armstrong")\nelse:\n    print("Not Armstrong")',
  hint: 'Extract digits and cube them.'
},
{
  id: 'py_cond_27',
  topicId: 'py_cond',
  question: 'Check if a year is a millennium year.',
  mathSolution: 'Check divisible by 1000.',
  codeSolution: 'year = 2000\nif year % 1000 == 0:\n    print("Millennium year")\nelse:\n    print("Not millennium year")',
  hint: 'Use `% 1000 == 0`.'
},
{
  id: 'py_cond_28',
  topicId: 'py_cond',
  question: 'Check if a number is palindrome.',
  mathSolution: 'Compare with reverse.',
  codeSolution: 'num = 121\nif str(num) == str(num)[::-1]:\n    print("Palindrome")\nelse:\n    print("Not palindrome")',
  hint: 'Convert to string.'
},
{
  id: 'py_cond_29',
  topicId: 'py_cond',
  question: 'Check triangle type.',
  mathSolution: 'Compare sides.',
  codeSolution: 'a, b, c = 5, 5, 5\nif a == b == c:\n    print("Equilateral")\nelif a == b or b == c or a == c:\n    print("Isosceles")\nelse:\n    print("Scalene")',
  hint: 'Compare all sides.'
},
{
  id: 'py_cond_30',
  topicId: 'py_cond',
  question: 'Check positive and <=100.',
  mathSolution: 'Combine conditions.',
  codeSolution: 'num = 50\nif 0 < num <= 100:\n    print("Valid")\nelse:\n    print("Invalid")',
  hint: 'Use chained comparison.'
},
{
  id: 'py_cond_31',
  topicId: 'py_cond',
  question: 'Check alphabet.',
  mathSolution: 'Use isalpha().',
  codeSolution: 'ch = "Z"\nif ch.isalpha():\n    print("Alphabet")\nelse:\n    print("Not alphabet")',
  hint: 'Use isalpha().'
},
{
  id: 'py_cond_32',
  topicId: 'py_cond',
  question: 'Check range condition.',
  mathSolution: 'Use OR between ranges.',
  codeSolution: 'num = 15\nif (10 <= num <= 20) or (30 <= num <= 40):\n    print("Valid range")\nelse:\n    print("Invalid")',
  hint: 'Use OR.'
},
{
  id: 'py_cond_33',
  topicId: 'py_cond',
  question: 'Check only spaces.',
  mathSolution: 'Use isspace().',
  codeSolution: 's = "   "\nif s.isspace():\n    print("Only spaces")\nelse:\n    print("Other chars")',
  hint: 'Use isspace().'
},
{
  id: 'py_cond_34',
  topicId: 'py_cond',
  question: 'Perfect number check.',
  mathSolution: 'Sum divisors.',
  codeSolution: 'num = 6\nif sum(i for i in range(1, num) if num % i == 0) == num:\n    print("Perfect")\nelse:\n    print("Not perfect")',
  hint: 'Sum divisors.'
},
{
  id: 'py_cond_35',
  topicId: 'py_cond',
  question: 'Strong number check.',
  mathSolution: 'Sum factorial digits.',
  codeSolution: 'import math\nnum = 145\nif sum(math.factorial(int(d)) for d in str(num)) == num:\n    print("Strong number")\nelse:\n    print("Not strong")',
  hint: 'Use factorial.'
},
{
  id: 'py_cond_36',
  topicId: 'py_cond',
  question: 'Harshad number.',
  mathSolution: 'Divisible by digit sum.',
  codeSolution: 'num = 18\nd = sum(int(i) for i in str(num))\nif num % d == 0:\n    print("Harshad")\nelse:\n    print("Not Harshad")',
  hint: 'Sum digits.'
},
{
  id: 'py_cond_37',
  topicId: 'py_cond',
  question: 'Duck number.',
  mathSolution: 'Contains 0 but not starting with 0.',
  codeSolution: 'num = "102"\nif "0" in num and num[0] != "0":\n    print("Duck")\nelse:\n    print("Not duck")',
  hint: 'Check zero.'
},
{
  id: 'py_cond_38',
  topicId: 'py_cond',
  question: 'Spy number.',
  mathSolution: 'Sum = product.',
  codeSolution: 'import math\nnum = 123\nd = [int(i) for i in str(num)]\nproduct = 1\nfor x in d:\n    product *= x\nif sum(d) == product:\n    print("Spy")\nelse:\n    print("Not spy")',
  hint: 'Compute product manually.'
},
{
  id: 'py_cond_39',
  topicId: 'py_cond',
  question: 'Neon number.',
  mathSolution: 'Square digit sum.',
  codeSolution: 'num = 9\nsq = num**2\nif sum(int(i) for i in str(sq)) == num:\n    print("Neon")\nelse:\n    print("Not neon")',
  hint: 'Square then sum.'
},
{
  id: 'py_cond_40',
  topicId: 'py_cond',
  question: 'Buzz number.',
  mathSolution: 'Ends with 7 or divisible by 7.',
  codeSolution: 'num = 14\nif num % 7 == 0 or num % 10 == 7:\n    print("Buzz")\nelse:\n    print("Not buzz")',
  hint: 'Check 7 condition.'
},
{
  id: 'py_cond_41',
  topicId: 'py_cond',
  question: 'Check sorted list.',
  mathSolution: 'Compare adjacent.',
  codeSolution: 'lst = [1,2,3]\nif all(lst[i] <= lst[i+1] for i in range(len(lst)-1)):\n    print("Sorted")\nelse:\n    print("Not sorted")',
  hint: 'Use all().'
},
{
  id: 'py_cond_42',
  topicId: 'py_cond',
  question: 'Sunny number.',
  mathSolution: 'n+1 is perfect square.',
  codeSolution: 'import math\nnum = 8\nif math.isqrt(num+1)**2 == num+1:\n    print("Sunny")\nelse:\n    print("Not sunny")',
  hint: 'Check sqrt.'
},
{
  id: 'py_cond_43',
  topicId: 'py_cond',
  question: 'Fascinating number.',
  mathSolution: 'Concatenate and check digits.',
  codeSolution: 'num = 192\ns = str(num)+str(num*2)+str(num*3)\nif sorted(s) == list("123456789"):\n    print("Fascinating")\nelse:\n    print("Not fascinating")',
  hint: 'Check 1-9.'
},
{
  id: 'py_cond_44',
  topicId: 'py_cond',
  question: 'Disarium number.',
  mathSolution: 'Power by position.',
  codeSolution: 'num = 89\nif sum(int(d)**(i+1) for i,d in enumerate(str(num))) == num:\n    print("Disarium")\nelse:\n    print("Not disarium")',
  hint: 'Position matters.'
},
{
  id: 'py_cond_45',
  topicId: 'py_cond',
  question: 'Automorphic number.',
  mathSolution: 'Square ends with number.',
  codeSolution: 'num = 25\nif str(num**2).endswith(str(num)):\n    print("Automorphic")\nelse:\n    print("Not automorphic")',
  hint: 'Use endswith.'
},
{
  id: 'py_cond_46',
  topicId: 'py_cond',
  question: 'Valid identifier.',
  mathSolution: 'Use isidentifier().',
  codeSolution: 's = "_valid1"\nif s.isidentifier():\n    print("Valid")\nelse:\n    print("Invalid")',
  hint: 'Built-in check.'
},
{
  id: 'py_cond_47',
  topicId: 'py_cond',
  question: 'Pythagorean triplet.',
  mathSolution: 'a²+b²=c²',
  codeSolution: 'a,b,c=3,4,5\nx=sorted([a,b,c])\nif x[0]**2+x[1]**2==x[2]**2:\n    print("Triplet")\nelse:\n    print("Not triplet")',
  hint: 'Sort first.'
},
{
  id: 'py_cond_48',
  topicId: 'py_cond',
  question: 'Century leap year.',
  mathSolution: 'Divisible by 400.',
  codeSolution: 'year=2000\nif year%400==0:\n    print("Century leap")\nelse:\n    print("Not")',
  hint: '400 rule.'
},
{
  id: 'py_cond_49',
  topicId: 'py_cond',
  question: 'Magic number.',
  mathSolution: 'Reduce to 1 digit.',
  codeSolution: 'num=19\nwhile num>9:\n    num=sum(int(i) for i in str(num))\nif num==1:\n    print("Magic")\nelse:\n    print("Not magic")',
  hint: 'Repeat sum.'
},
{
  id: 'py_cond_50',
  topicId: 'py_cond',
  question: 'Pronic number.',
  mathSolution: 'n=k(k+1)',
  codeSolution: 'num=30\nfor i in range(num):\n    if i*(i+1)==num:\n        print("Pronic")\n        break\nelse:\n    print("Not pronic")',
  hint: 'Check consecutive product.'
}
);