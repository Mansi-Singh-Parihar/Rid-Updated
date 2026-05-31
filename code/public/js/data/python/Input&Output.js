QuizData.questions.push(
{
  id: 'py_io_1',
  topicId: 'py_input_output',
  question: 'Write a program that takes user\'s name as input and prints a greeting message.',
  mathSolution: 'Use input() to get user input and print() with formatted string to display output.',
  codeSolution: 'name = input("Enter your name: ")\nprint(f"Hello, {name}! Welcome to Python programming.")',
  hint: 'Use f-strings (prefix with f) to insert variables inside strings.'
},
{
  id: 'py_io_2',
  topicId: 'py_input_output',
  question: 'Take two numbers as input from user and print their sum.',
  mathSolution: 'Convert input strings to integers using int() before addition.',
  codeSolution: 'num1 = int(input("Enter first number: "))\nnum2 = int(input("Enter second number: "))\nsum_result = num1 + num2\nprint(f"The sum of {num1} and {num2} is {sum_result}")',
  hint: 'Remember to convert input strings to numbers before arithmetic.'
},
{
  id: 'py_io_3',
  topicId: 'py_input_output',
  question: 'Read a float number from user and print its square root.',
  mathSolution: 'Use math.sqrt() after converting input to float.',
  codeSolution: 'import math\n\nnum = float(input("Enter a number: "))\nif num >= 0:\n    sqrt_num = math.sqrt(num)\n    print(f"Square root of {num} is {sqrt_num:.2f}")\nelse:\n    print("Cannot calculate square root of negative number")',
  hint: 'math.sqrt() requires non-negative numbers.'
},
{
  id: 'py_io_4',
  topicId: 'py_input_output',
  question: 'Take multiple inputs in a single line separated by spaces and print their sum.',
  mathSolution: 'Use split() to separate inputs and map() to convert to integers.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\ntotal = sum(numbers)\nprint(f"Sum of {numbers} is {total}")',
  hint: 'split() without arguments splits on whitespace.'
},
{
  id: 'py_io_5',
  topicId: 'py_input_output',
  question: 'Read a sentence and count the number of words in it.',
  mathSolution: 'Split the sentence and count the resulting list length.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nword_count = len(words)\nprint(f"Number of words: {word_count}")',
  hint: 'split() without arguments splits on whitespace and handles multiple spaces.'
},
{
  id: 'py_io_6',
  topicId: 'py_input_output',
  question: 'Take a list of integers as input and print them in reverse order.',
  mathSolution: 'Use slicing [::-1] to reverse the list.',
  codeSolution: 'numbers = input("Enter numbers separated by commas: ").split(",")\nnumbers = [int(x.strip()) for x in numbers]\nreversed_numbers = numbers[::-1]\nprint(f"Original: {numbers}")\nprint(f"Reversed: {reversed_numbers}")',
  hint: 'strip() removes extra whitespace after splitting.'
},
{
  id: 'py_io_7',
  topicId: 'py_input_output',
  question: 'Read a multiline input until user enters an empty line.',
  mathSolution: 'Use a loop to collect lines until empty input.',
  codeSolution: 'print("Enter multiple lines (empty line to stop):")\nlines = []\nwhile True:\n    line = input()\n    if line == "":\n        break\n    lines.append(line)\n\nprint("\\nYou entered:")\nfor i, line in enumerate(lines, 1):\n    print(f"{i}: {line}")',
  hint: 'Check for empty string to break the input loop.'
},
{
 
  id: 'py_io_8',
  topicId: 'py_input_output',
  question: 'Take a character as input and print its ASCII value.',
  mathSolution: 'Use ord() function to convert a single character into its ASCII (Unicode code point) value.',
  codeSolution: 'char = input("Enter a character: ")\n\nif len(char) == 1:\n    ascii_value = ord(char)\n    print(f"ASCII value of {char} is {ascii_value}")\nelse:\n    print("Error: Please enter only one character")',
  hint: 'ord() returns the Unicode (ASCII for basic characters) value of a character.'
},
{
  id: 'py_io_9',
  topicId: 'py_input_output',
  question: 'Read an integer and print its binary, octal, and hexadecimal representations.',
  mathSolution: 'Use bin(), oct(), and hex() built-in functions.',
  codeSolution: 'num = int(input("Enter an integer: "))\nprint(f"Decimal: {num}")\nprint(f"Binary: {bin(num)}")\nprint(f"Octal: {oct(num)}")\nprint(f"Hexadecimal: {hex(num)}")',
  hint: 'These functions return strings with prefixes 0b, 0o, 0x.'
},
{
  id: 'py_io_10',
  topicId: 'py_input_output',
  question: 'Read a string and print it in uppercase, lowercase, and title case.',
  mathSolution: 'Use string methods upper(), lower(), and title().',
  codeSolution: 'text = input("Enter a string: ")\nprint(f"Uppercase: {text.upper()}")\nprint(f"Lowercase: {text.lower()}")\nprint(f"Title case: {text.title()}")',
  hint: 'title() capitalizes first letter of each word.'
},
{
  id: 'py_io_11',
  topicId: 'py_input_output',
  question: 'Take a number and print its multiplication table up to 10.',
  mathSolution: 'Use a for loop to generate and print the table.',
  codeSolution: 'num = int(input("Enter a number: "))\nprint(f"Multiplication table of {num}:")\nfor i in range(1, 11):\n    print(f"{num} x {i} = {num * i}")',
  hint: 'Use f-strings for clean formatted output.'
},
{
  id: 'py_io_12',
  topicId: 'py_input_output',
  question: 'Read a string and count vowels and consonants in it.',
  mathSolution: 'Iterate through characters and check if they are vowels.',
  codeSolution: 'text = input("Enter a string: ").lower()\nvowels = "aeiou"\nvowel_count = 0\nconsonant_count = 0\n\nfor char in text:\n    if char.isalpha():\n        if char in vowels:\n            vowel_count += 1\n        else:\n            consonant_count += 1\n\nprint(f"Vowels: {vowel_count}")\nprint(f"Consonants: {consonant_count}")',
  hint: 'Use isalpha() to check if character is a letter.'
},
{
  id: 'py_io_13',
  topicId: 'py_input_output',
  question: 'Take three numbers as input and find the largest among them.',
  mathSolution: 'Use max() function or nested if-else comparisons.',
  codeSolution: 'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\nc = float(input("Enter third number: "))\n\nlargest = max(a, b, c)\nprint(f"The largest number is {largest}")',
  hint: 'max() can take multiple arguments or a list.'
},
{
  id: 'py_io_14',
  topicId: 'py_input_output',
  question: 'Read a string and check if it is a palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'text = input("Enter a string: ")\n# Remove spaces and convert to lowercase for accurate check\ncleaned = text.replace(" ", "").lower()\nif cleaned == cleaned[::-1]:\n    print(f"{text} is a palindrome")\nelse:\n    print(f"{text} is not a palindrome")',
  hint: 'Use slicing [::-1] to reverse a string.'
},
{
  id: 'py_io_15',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and print only the even numbers.',
  mathSolution: 'Use list comprehension with modulo operator for filtering.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nevens = [x for x in numbers if x % 2 == 0]\nprint(f"Even numbers: {evens}")',
  hint: 'x % 2 == 0 checks if number is even.'
},
{
  id: 'py_io_16',
  topicId: 'py_input_output',
  question: 'Read a string and print it in a pattern (right-aligned in width 50).',
  mathSolution: 'Use string formatting with width specifier.',
  codeSolution: 'text = input("Enter a string: ")\nwidth = 50\nprint(f"Right-aligned in {width} characters:")\nprint(f"{text:>{width}}")',
  hint: '>{width} right-aligns string in given width.'
},
{
  id: 'py_io_17',
  topicId: 'py_input_output',
  question: 'Take a date in DD/MM/YYYY format and print it in YYYY-MM-DD format.',
  mathSolution: 'Split the string and rearrange components.',
  codeSolution: 'date_str = input("Enter date (DD/MM/YYYY): ")\nday, month, year = date_str.split("/")\nformatted = f"{year}-{month.zfill(2)}-{day.zfill(2)}"\nprint(f"Formatted date: {formatted}")',
  hint: 'zfill() adds leading zeros to ensure two digits.'
},
{
  id: 'py_io_18',
  topicId: 'py_input_output',
  question: 'Read a sentence and print each word on a new line.',
  mathSolution: 'Split the sentence and iterate through words.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nprint("Words in the sentence:")\nfor word in words:\n    print(word)',
  hint: 'split() without arguments splits on whitespace.'
},
{
  id: 'py_io_19',
  topicId: 'py_input_output',
  question: 'Take two numbers and perform all arithmetic operations on them.',
  mathSolution: 'Perform addition, subtraction, multiplication, division, etc.',
  codeSolution: 'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\n\nprint(f"{a} + {b} = {a + b}")\nprint(f"{a} - {b} = {a - b}")\nprint(f"{a} * {b} = {a * b}")\nif b != 0:\n    print(f"{a} / {b} = {a / b}")\n    print(f"{a} // {b} = {a // b}")\n    print(f"{a} % {b} = {a % b}")\nelse:\n    print("Division by zero is undefined")',
  hint: 'Check for division by zero before performing division.'
},
{
  id: 'py_io_20',
  topicId: 'py_input_output',
  question: 'Read a string and count the frequency of each character.',
  mathSolution: 'Use a dictionary to store character counts.',
  codeSolution: 'text = input("Enter a string: ")\nfreq = {}\nfor char in text:\n    if char in freq:\n        freq[char] += 1\n    else:\n        freq[char] = 1\n\nprint("Character frequencies:")\nfor char, count in freq.items():\n    print(f"\'{char}\': {count}")',
  hint: 'Collections.Counter can also be used for this purpose.'
},
{
  id: 'py_io_21',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and calculate their average.',
  mathSolution: 'Sum all numbers and divide by count.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [float(x) for x in numbers]\naverage = sum(numbers) / len(numbers)\nprint(f"Numbers: {numbers}")\nprint(f"Average: {average:.2f}")',
  hint: 'Use float() to handle decimal numbers.'
},
{
  id: 'py_io_22',
  topicId: 'py_input_output',
  question: 'Take a string and print it without vowels.',
  mathSolution: 'Filter out vowels using list comprehension.',
  codeSolution: 'text = input("Enter a string: ")\nvowels = "aeiouAEIOU"\nwithout_vowels = "".join([char for char in text if char not in vowels])\nprint(f"String without vowels: {without_vowels}")',
  hint: 'Use in operator to check membership in vowels string.'
},
{
  id: 'py_io_23',
  topicId: 'py_input_output',
  question: 'Read a number and check if it is prime.',
  mathSolution: 'Check divisibility from 2 to square root of the number.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num <= 1:\n    print(f"{num} is not prime")\nelse:\n    is_prime = True\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(f"{num} is prime")\n    else:\n        print(f"{num} is not prime")',
  hint: 'Only need to check divisors up to square root.'
},
{
  id: 'py_io_24',
  topicId: 'py_input_output',
  question: 'Take a string and print its reverse without using slicing.',
  mathSolution: 'Iterate through string backwards using loop.',
  codeSolution: 'text = input("Enter a string: ")\nreversed_text = ""\nfor char in text:\n    reversed_text = char + reversed_text\nprint(f"Reversed: {reversed_text}")',
  hint: 'Build reversed string by prepending each character.'
},
{
  id: 'py_io_25',
  topicId: 'py_input_output',
  question: 'Read a sentence and find the longest word.',
  mathSolution: 'Split into words and compare lengths.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nif words:\n    longest = max(words, key=len)\n    print(f"Longest word: {longest}")\n    print(f"Length: {len(longest)}")\nelse:\n    print("No words found")',
  hint: 'max() with key=len finds the longest string.'
},
{
  id: 'py_io_26',
  topicId: 'py_input_output',
  question: 'Take two strings and check if they are anagrams.',
  mathSolution: 'Sort both strings and compare.',
  codeSolution: 'str1 = input("Enter first string: ").replace(" ", "").lower()\nstr2 = input("Enter second string: ").replace(" ", "").lower()\n\nif sorted(str1) == sorted(str2):\n    print("The strings are anagrams")\nelse:\n    print("The strings are not anagrams")',
  hint: 'Remove spaces and convert to lowercase for accurate comparison.'
},
{
  id: 'py_io_27',
  topicId: 'py_input_output',
  question: 'Read a number and print its factorial.',
  mathSolution: 'Use iterative multiplication or recursion.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num < 0:\n    print("Factorial is not defined for negative numbers")\nelse:\n    factorial = 1\n    for i in range(1, num + 1):\n        factorial *= i\n    print(f"{num}! = {factorial}")',
  hint: '0! = 1 by definition.'
},
{
  id: 'py_io_28',
  topicId: 'py_input_output',
  question: 'Take a string and remove duplicate characters.',
  mathSolution: 'Use a set to track seen characters and a list to maintain order of first occurrences.',
  codeSolution: 'text = input("Enter a string: ")\n\nif not text:\n    print("Error: Empty string")\nelse:\n    seen = set()\n    result = []\n\n    for char in text:\n        if char not in seen:\n            seen.add(char)\n            result.append(char)\n\n    print("String with duplicates removed:", "".join(result))',
  hint: 'Use a set to track already seen characters while preserving order using a list.'
},
{
  id: 'py_io_29',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and find the second largest number.',
  mathSolution: 'Sort the list and get second element from end, or find manually.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nif len(numbers) < 2:\n    print("Need at least 2 numbers")\nelse:\n    unique_nums = sorted(set(numbers))\n    if len(unique_nums) >= 2:\n        second_largest = unique_nums[-2]\n        print(f"Second largest: {second_largest}")\n    else:\n        print("All numbers are equal")',
  hint: 'Use set() to handle duplicates.'
},
{
  id: 'py_io_30',
  topicId: 'py_input_output',
  question: 'Take a string and convert it to pig latin (move first letter to end and add "ay").',
  mathSolution: 'Split into words and transform each word.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\npig_latin_words = []\n\nfor word in words:\n    if word:\n        pig_word = word[1:] + word[0] + "ay"\n        pig_latin_words.append(pig_word)\n\npig_latin = " ".join(pig_latin_words)\nprint(f"Pig Latin: {pig_latin}")',
  hint: 'word[0] is first character, word[1:] is rest of word.'
},
{
  id: 'py_io_31',
  topicId: 'py_input_output',
  question: 'Read a string and print it in a zigzag pattern (alternating uppercase/lowercase).',
  mathSolution: 'Use enumerate to track index and toggle case.',
  codeSolution: 'text = input("Enter a string: ")\nresult = []\nfor i, char in enumerate(text):\n    if i % 2 == 0:\n        result.append(char.upper())\n    else:\n        result.append(char.lower())\nprint("Zigzag pattern:", "".join(result))',
  hint: 'Even indices become uppercase, odd become lowercase.'
},
{
  id: 'py_io_32',
  topicId: 'py_input_output',
  question: 'Take a number and print its digits in reverse order.',
  mathSolution: 'Convert to string and reverse, or use modulo arithmetic.',
  codeSolution: 'num = input("Enter a number: ")\nreversed_digits = num[::-1]\nprint(f"Digits reversed: {reversed_digits}")',
  hint: 'Treat number as string for easy reversal.'
},
{
  id: 'py_io_33',
  topicId: 'py_input_output',
  question: 'Read a list of names and sort them alphabetically.',
  mathSolution: 'Use sorted() function to sort the list.',
  codeSolution: 'names_input = input("Enter names separated by commas: ")\nnames = [name.strip() for name in names_input.split(",")]\nsorted_names = sorted(names)\nprint("Sorted names:")\nfor name in sorted_names:\n    print(f"  {name}")',
  hint: 'strip() removes extra whitespace around names.'
},
{
  id: 'py_io_34',
  topicId: 'py_input_output',
  question: 'Take a string and count the number of digits, letters, and special characters.',
  mathSolution: 'Use isdigit(), isalpha() to categorize characters.',
  codeSolution: 'text = input("Enter a string: ")\ndigits = letters = special = 0\n\nfor char in text:\n    if char.isdigit():\n        digits += 1\n    elif char.isalpha():\n        letters += 1\n    else:\n        special += 1\n\nprint(f"Digits: {digits}")\nprint(f"Letters: {letters}")\nprint(f"Special characters: {special}")',
  hint: 'Characters that are neither digit nor letter are special.'
},
{
  id: 'py_io_35',
  topicId: 'py_input_output',
  question: 'Read a sentence and capitalize the first letter of each word.',
  mathSolution: 'Use title() method or manual capitalization.',
  codeSolution: 'sentence = input("Enter a sentence: ")\ncapitalized = sentence.title()\nprint(f"Capitalized: {capitalized}")',
  hint: 'title() capitalizes first letter of each word.'
},
{
  id: 'py_io_36',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and remove duplicates while preserving order.',
  mathSolution: 'Use a set to track seen numbers and list for result.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nseen = set()\nunique = []\nfor num in numbers:\n    if num not in seen:\n        seen.add(num)\n        unique.append(num)\nprint(f"Original: {numbers}")\nprint(f"Unique: {unique}")',
  hint: 'Set provides O(1) lookup for duplicates.'
},
{
  id: 'py_io_37',
  topicId: 'py_input_output',
  question: 'Read a string and check if it contains only digits.',
  mathSolution: 'Use isdigit() method to check all characters.',
  codeSolution: 'text = input("Enter a string: ")\nif text.isdigit():\n    print("The string contains only digits")\nelse:\n    print("The string contains non-digit characters")',
  hint: 'isdigit() returns True if all characters are digits.'
},
{
  id: 'py_io_38',
  topicId: 'py_input_output',
  question: 'Take a string and print it centered in a width of 50 with * padding.',
  mathSolution: 'Use center() method with fill character.',
  codeSolution: 'text = input("Enter a string: ")\ncentered = text.center(50, "*")\nprint(centered)',
  hint: 'center(width, fillchar) centers string with given fill character.'
},
{
  id: 'py_io_39',
  topicId: 'py_input_output',
  question: 'Read a number and print all its factors.',
  mathSolution: 'Check all numbers from 1 to n that divide n evenly.',
  codeSolution: 'num = int(input("Enter a number: "))\nfactors = []\nfor i in range(1, num + 1):\n    if num % i == 0:\n        factors.append(i)\nprint(f"Factors of {num}: {factors}")',
  hint: 'A factor divides the number without remainder.'
},
{
  id: 'py_io_40',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and find the median.',
  mathSolution: 'Sort the list and find middle element(s).',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [float(x) for x in numbers]\nsorted_nums = sorted(numbers)\nn = len(sorted_nums)\nif n % 2 == 1:\n    median = sorted_nums[n // 2]\nelse:\n    median = (sorted_nums[n // 2 - 1] + sorted_nums[n // 2]) / 2\nprint(f"Median: {median}")',
  hint: 'For even count, median is average of two middle numbers.'
},
{
  id: 'py_io_41',
  topicId: 'py_input_output',
  question: 'Read a string and print the most frequent character.',
  mathSolution: 'Count frequencies and find maximum.',
  codeSolution: 'text = input("Enter a string: ")\nfreq = {}\nfor char in text:\n    freq[char] = freq.get(char, 0) + 1\n\nmax_char = max(freq, key=freq.get)\nmax_count = freq[max_char]\nprint(f"Most frequent character: {max_char} (appears {max_count} times)")',
  hint: 'max() with key=freq.get finds key with maximum value.'
},
{
  id: 'py_io_42',
  topicId: 'py_input_output',
  question: 'Take a number and print its binary representation without using bin().',
  mathSolution: 'Repeatedly divide by 2 and collect remainders.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num == 0:\n    binary = "0"\nelse:\n    binary = ""\n    n = num\n    while n > 0:\n        binary = str(n % 2) + binary\n        n = n // 2\nprint(f"Binary of {num} is {binary}")',
  hint: 'Collect remainders from last to first.'
},
{
  id: 'py_io_43',
  topicId: 'py_input_output',
  question: 'Read a string and check if it is a valid email address (simple check).',
  mathSolution: 'Check for @ and . after @ with basic conditions.',
  codeSolution: 'email = input("Enter an email address: ")\nif "@" in email and "." in email.split("@")[-1]:\n    print(f"{email} appears to be valid")\nelse:\n    print(f"{email} is not a valid email")',
  hint: 'Basic validation: must contain @ and a dot after @.'
},
{
  id: 'py_io_44',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and print the cumulative sum.',
  mathSolution: 'Keep running total and print each step.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\ncumulative = []\ntotal = 0\nfor num in numbers:\n    total += num\n    cumulative.append(total)\nprint(f"Original: {numbers}")\nprint(f"Cumulative sum: {cumulative}")',
  hint: 'Each element in cumulative sum is sum of all previous elements.'
},
{
  id: 'py_io_45',
  topicId: 'py_input_output',
  question: 'Read a sentence and replace all spaces with underscores.',
  mathSolution: 'Use replace() method to substitute characters.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nmodified = sentence.replace(" ", "_")\nprint(f"Modified: {modified}")',
  hint: 'replace(old, new) replaces all occurrences.'
},
{
  id: 'py_io_46',
  topicId: 'py_input_output',
  question: 'Take a string and print it in reverse word order.',
  mathSolution: 'Split into words, reverse the list, and join.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nreversed_words = words[::-1]\nreversed_sentence = " ".join(reversed_words)\nprint(f"Reversed words: {reversed_sentence}")',
  hint: 'This reverses word order, not characters within words.'
},
{
  id: 'py_io_47',
  topicId: 'py_input_output',
  question: 'Read a number and check if it is a perfect number (sum of factors equals number).',
  mathSolution: 'Find all proper factors and sum them.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num <= 1:\n    print(f"{num} is not a perfect number")\nelse:\n    factors = []\n    for i in range(1, num):\n        if num % i == 0:\n            factors.append(i)\n    if sum(factors) == num:\n        print(f"{num} is a perfect number (factors: {factors})")\n    else:\n        print(f"{num} is not a perfect number")',
  hint: 'Perfect numbers like 6 = 1+2+3, 28 = 1+2+4+7+14.'
},
{
  id: 'py_io_48',
  topicId: 'py_input_output',
  question: 'Take a string and print it in a diamond pattern.',
  mathSolution: 'Print increasing then decreasing number of characters.',
  codeSolution: 'text = input("Enter a string: ")\nn = len(text)\nprint("Diamond pattern:")\nfor i in range(1, n+1):\n    print(text[:i].center(n*2))\nfor i in range(n-1, 0, -1):\n    print(text[:i].center(n*2))',
  hint: 'center() with width 2n creates symmetric pattern.'
},
{
  id: 'py_io_49',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and find the mode (most frequent value).',
  mathSolution: 'Count frequencies and find maximum count.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nfreq = {}\nfor num in numbers:\n    freq[num] = freq.get(num, 0) + 1\n\nmax_count = max(freq.values())\nmodes = [num for num, count in freq.items() if count == max_count]\n\nif len(modes) == 1:\n    print(f"Mode: {modes[0]} (appears {max_count} times)")\nelse:\n    print(f"Modes: {modes} (each appears {max_count} times)")',
  hint: 'There can be multiple modes if frequencies tie.'
},
{
  id: 'py_io_50',
  topicId: 'py_input_output',
  question: 'Take a string and implement a simple Caesar cipher (shift each letter by 3).',
  mathSolution: 'Shift each letter by fixed amount, wrap around alphabet.',
  codeSolution: 'text = input("Enter a string: ")\nshift = 3\nresult = []\n\nfor char in text:\n    if char.isalpha():\n        ascii_offset = 65 if char.isupper() else 97\n        shifted = (ord(char) - ascii_offset + shift) % 26 + ascii_offset\n        result.append(chr(shifted))\n    else:\n        result.append(char)\n\nencrypted = "".join(result)\nprint(f"Original: {text}")\nprint(f"Encrypted (shift {shift}): {encrypted}")',
  hint: 'Use modulo 26 to wrap around alphabet.'
}
);