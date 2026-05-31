QuizData.questions.push(
  {
    id: 'py_loop_1',
    topicId: 'py_loop',
    question: 'Write a for loop that prints numbers 0 to 4.',
    mathSolution: 'Loop runs 5 times with range(5)',
    codeSolution: 'for i in range(5):\n    print(i)  # 0 1 2 3 4',
    hint: 'Use `range(5)` to generate numbers 0 through 4.'
  },
  {
    id: 'py_loop_2',
    topicId: 'py_loop',
    question: 'Write a for loop to print each character of the string "Python".',
    mathSolution: 'Prints each character on a new line: P, y, t, h, o, n',
    codeSolution: 'for ch in "Python":\n    print(ch)',
    hint: 'Strings are iterable; you can loop directly over them.'
  },
  {
    id: 'py_loop_3',
    topicId: 'py_loop',
    question: 'Write a while loop that prints numbers 1 to 5.',
    mathSolution: 'Starts at 1, increments until 5',
    codeSolution: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1  # 1 2 3 4 5',
    hint: 'Initialize a counter before the loop and increment it inside.'
  },
  {
    id: 'py_loop_4',
    topicId: 'py_loop',
    question: 'Write a for loop to compute the sum of all elements in the list [2, 4, 6, 8, 10].',
    mathSolution: 'Sum = 30',
    codeSolution: 'numbers = [2, 4, 6, 8, 10]\ntotal = 0\nfor num in numbers:\n    total += num\nprint(total)  # 30',
    hint: 'Use an accumulator variable to keep a running total.'
  },
  {
    id: 'py_loop_5',
    topicId: 'py_loop',
    question: 'Write a while loop to calculate the factorial of a number n (assume n = 5).',
    mathSolution: 'Factorial of 5 = 120',
    codeSolution: 'n = 5\nfactorial = 1\ni = 1\nwhile i <= n:\n    factorial *= i\n    i += 1\nprint(factorial)  # 120',
    hint: 'Multiply the accumulator by the counter each iteration.'
  },
  {
    id: 'py_loop_6',
    topicId: 'py_loop',
    question: 'Write nested for loops to print a multiplication table for numbers 1 to 3.',
    mathSolution: 'Prints multiplication pairs 1–3',
    codeSolution: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i*j}")',
    hint: 'Outer loop selects first number, inner loop second.'
  },
  {
    id: 'py_loop_7',
    topicId: 'py_loop',
    question: 'Use enumerate to print index and value of ["a","b","c"].',
    mathSolution: '0 a, 1 b, 2 c',
    codeSolution: 'items = ["a", "b", "c"]\nfor idx, val in enumerate(items):\n    print(idx, val)',
    hint: '`enumerate()` gives index + value.'
  },
  {
    id: 'py_loop_8',
    topicId: 'py_loop',
    question: 'Break loop when it reaches 5.',
    mathSolution: 'Prints 0–4',
    codeSolution: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0 1 2 3 4',
    hint: '`break` exits loop immediately.'
  },
  {
    id: 'py_loop_9',
    topicId: 'py_loop',
    question: 'Print odd numbers 1–10 using continue.',
    mathSolution: '1 3 5 7 9',
    codeSolution: 'for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)',
    hint: '`continue` skips iteration.'
  },
  {
    id: 'py_loop_10',
    topicId: 'py_loop',
    question: 'For loop with else.',
    mathSolution: '1 2 3 then Done',
    codeSolution: 'for i in range(1, 4):\n    print(i)\nelse:\n    print("Done")',
    hint: 'else runs if no break occurs.'
  },

  {
    id: 'py_loop_11',
    topicId: 'py_loop',
    question: 'Infinite loop until "quit".',
    mathSolution: 'Stops on quit',
    codeSolution: 'while True:\n    user_input = input("Enter: ")\n    if user_input == "quit":\n        break',
    hint: 'Use while True + break.'
  },

  {
    id: 'py_loop_12',
    topicId: 'py_loop',
    question: 'Print dictionary keys.',
    mathSolution: 'name, age',
    codeSolution: 'person = {"name": "Alice", "age": 25}\nfor key in person:\n    print(key)',
    hint: 'Default iteration gives keys.'
  },

  {
    id: 'py_loop_13',
    topicId: 'py_loop',
    question: 'Print dictionary values.',
    mathSolution: '10 20',
    codeSolution: 'd = {"x": 10, "y": 20}\nfor val in d.values():\n    print(val)',
    hint: '.values() returns values.'
  },

  {
    id: 'py_loop_14',
    topicId: 'py_loop',
    question: 'Print key-value pairs.',
    mathSolution: 'a:1 b:2',
    codeSolution: 'd = {"a": 1, "b": 2}\nfor k, v in d.items():\n    print(f"{k}: {v}")',
    hint: '.items() returns pairs.'
  },

  {
    id: 'py_loop_15',
    topicId: 'py_loop',
    question: 'Even numbers 2–8 using step.',
    mathSolution: '2 4 6 8',
    codeSolution: 'for i in range(2, 10, 2):\n    print(i)',
    hint: 'Use step in range.'
  },

  {
    id: 'py_loop_16',
    topicId: 'py_loop',
    question: 'Count down 5 to 1.',
    mathSolution: '5 4 3 2 1',
    codeSolution: 'for i in range(5, 0, -1):\n    print(i)',
    hint: 'Negative step.'
  },

  {
    id: 'py_loop_17',
    topicId: 'py_loop',
    question: 'Double list values.',
    mathSolution: '[2,4,6]',
    codeSolution: 'nums = [1,2,3]\nfor i in range(len(nums)):\n    nums[i] *= 2\nprint(nums)',
    hint: 'Modify by index.'
  },

 {
  id: 'py_loop_18',
  topicId: 'py_loop',
  question: 'Convert to list comprehension.',
  mathSolution: '[0,1,4,9,16]',
  codeSolution: 'result = [i**2 for i in range(5)]\nprint(result)  # Output: [0, 1, 4, 9, 16]',
  hint: 'Compact loop form.'
},

  {
    id: 'py_loop_19',
    topicId: 'py_loop',
    question: 'Pass statement loop.',
    mathSolution: 'No output',
    codeSolution: 'for i in range(3):\n    pass',
    hint: 'pass does nothing.'
  },

  {
    id: 'py_loop_20',
    topicId: 'py_loop',
    question: 'Use zip.',
    mathSolution: '(1,a) (2,b)',
    codeSolution: 'nums = [1,2]\nletters = ["a","b"]\nfor n,l in zip(nums, letters):\n    print(n,l)',
    hint: 'zip pairs lists.'
  },
  {
  id: 'py_loop_21',
  topicId: 'py_loop',
  question: 'Write a while loop that repeatedly asks the user for a number and stops when they enter 0.',
  mathSolution: 'Keeps asking until 0 is entered',
  codeSolution: 'num = int(input("Enter a number (0 to stop): "))\nwhile num != 0:\n    num = int(input("Enter another: "))\nprint("Stopped")  # Output: Stopped when user enters 0',
  hint: 'Get input first, then loop while the condition holds.'
},
  {
    id: 'py_loop_22',
    topicId: 'py_loop',
    question: 'Write a for loop to find the maximum value in the list [4, 7, 1, 9, 3] without using max().',
    mathSolution: 'Maximum is 9',
    codeSolution: 'numbers = [4, 7, 1, 9, 3]\nmax_val = numbers[0]\nfor num in numbers:\n    if num > max_val:\n        max_val = num\nprint(max_val)  # 9',
    hint: 'Initialize with first element and update if larger found.'
  },
  {
    id: 'py_loop_23',
    topicId: 'py_loop',
    question: 'Write a for loop to check if all numbers in [2, 4, 6, 8] are even.',
    mathSolution: 'Returns True (all even)',
    codeSolution: 'nums = [2, 4, 6, 8]\nall_even = True\nfor n in nums:\n    if n % 2 != 0:\n        all_even = False\n        break\nprint(all_even)  # True',
    hint: 'Assume True until a violation is found.'
  },
  {
    id: 'py_loop_24',
    topicId: 'py_loop',
    question: 'Print a right-angled triangle of stars with 4 rows.',
    mathSolution: '* ** *** ****',
    codeSolution: 'for i in range(1, 5):\n    print("*" * i)',
    hint: 'Use string multiplication.'
  },
  {
    id: 'py_loop_25',
    topicId: 'py_loop',
    question: 'Remove all even numbers from [1,2,3,4,5] while iterating.',
    mathSolution: '[1,3,5]',
    codeSolution: 'nums = [1,2,3,4,5]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)  # [1,3,5]',
    hint: 'Iterate over a copy of list.'
  },
  {
    id: 'py_loop_26',
    topicId: 'py_loop',
    question: 'While loop with else countdown 3 to 1.',
    mathSolution: '3 2 1 Blast off!',
    codeSolution: 'i = 3\nwhile i > 0:\n    print(i)\n    i -= 1\nelse:\n    print("Blast off!")',
    hint: 'else runs when loop ends normally.'
  },
  {
    id: 'py_loop_27',
    topicId: 'py_loop',
    question: 'Nested loops break when i == j.',
    mathSolution: 'Breaks inner loop at diagonal',
    codeSolution: 'for i in range(1,4):\n    for j in range(1,4):\n        print(i, j)\n        if i == j:\n            break',
    hint: 'break affects only inner loop.'
  },
  {
    id: 'py_loop_28',
    topicId: 'py_loop',
    question: 'Reverse string "Hello" using loop.',
    mathSolution: 'o l l e H',
    codeSolution: 's = "Hello"\nfor ch in s[::-1]:\n    print(ch)',
    hint: 'Use slicing reverse.'
  },
  {
    id: 'py_loop_29',
    topicId: 'py_loop',
    question: 'Count vowels in "Beautiful".',
    mathSolution: '5 vowels',
    codeSolution: 's = "Beautiful"\nvowels = "aeiouAEIOU"\ncount = 0\nfor ch in s:\n    if ch in vowels:\n        count += 1\nprint(count)  # 5',
    hint: 'Use membership check.'
  },
  {
    id: 'py_loop_30',
    topicId: 'py_loop',
    question: 'Reverse digits of 12345 using while loop.',
    mathSolution: '54321',
    codeSolution: 'n = 12345\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)',
    hint: 'Extract last digit repeatedly.'
  },
  {
    id: 'py_loop_31',
    topicId: 'py_loop',
    question: 'First 5 Fibonacci numbers.',
    mathSolution: '0 1 1 2 3',
    codeSolution: 'a, b = 0, 1\nfor _ in range(5):\n    print(a)\n    a, b = b, a + b',
    hint: 'Use tuple swapping.'
  },
  {
    id: 'py_loop_32',
    topicId: 'py_loop',
    question: 'Even numbers 10 to 2.',
    mathSolution: '10 8 6 4 2',
    codeSolution: 'for i in range(10, 1, -2):\n    print(i)',
    hint: 'Use negative step.'
  },
  {
    id: 'py_loop_33',
    topicId: 'py_loop',
    question: 'Unpack tuples from list.',
    mathSolution: '1 one, 2 two',
    codeSolution: 'pairs = [(1,"one"), (2,"two")]\nfor num, word in pairs:\n    print(num, word)',
    hint: 'Tuple unpacking in loop.'
  },
  {
    id: 'py_loop_34',
    topicId: 'py_loop',
    question: 'Iterate over set {3,1,4,2}.',
    mathSolution: 'Unordered output',
    codeSolution: 's = {3,1,4,2}\nfor val in s:\n    print(val)',
    hint: 'Set order not guaranteed.'
  },
  {
    id: 'py_loop_35',
    topicId: 'py_loop',
    question: 'Extract uppercase letters from string.',
    mathSolution: 'HW',
    codeSolution: 's = "Hello World!"\nresult = ""\nfor ch in s:\n    if ch.isupper():\n        result += ch\nprint(result)  # HW',
    hint: 'Check isupper().'
  },
  {
    id: 'py_loop_36',
    topicId: 'py_loop',
    question: 'Sum 2x3 matrix.',
    mathSolution: '21',
    codeSolution: 'matrix = [[1,2,3],[4,5,6]]\ntotal = 0\nfor row in matrix:\n    for val in row:\n        total += val\nprint(total)',
    hint: 'Nested iteration.'
  },
  {
    id: 'py_loop_37',
    topicId: 'py_loop',
    question: 'Flatten nested list.',
    mathSolution: '[1,2,3,4,5,6]',
    codeSolution: 'nested = [[1,2],[3,4,5],[6]]\nflat = []\nfor sub in nested:\n    for x in sub:\n        flat.append(x)\nprint(flat)',
    hint: 'Append inner items.'
  },
  {
    id: 'py_loop_38',
    topicId: 'py_loop',
    question: 'Countdown 5 to Go.',
    mathSolution: '5 4 3 2 1 Go!',
    codeSolution: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Go!")',
    hint: 'Decrement loop.'
  },
  {
    id: 'py_loop_39',
    topicId: 'py_loop',
    question: 'Prime check using for-else.',
    mathSolution: 'Prime',
    codeSolution: 'num = 7\nfor i in range(2, num):\n    if num % i == 0:\n        print("Not prime")\n        break\nelse:\n    print("Prime")',
    hint: 'else runs if no break.'
  },
  {
    id: 'py_loop_40',
    topicId: 'py_loop',
    question: 'Find common elements.',
    mathSolution: '[3,4]',
    codeSolution: 'a = [1,2,3,4]\nb = [3,4,5,6]\ncommon = []\nfor x in a:\n    if x in b:\n        common.append(x)\nprint(common)',
    hint: 'Membership test.'
  },

  {
    id: 'py_loop_41',
    topicId: 'py_loop',
    question: 'Palindrome check radar.',
    mathSolution: 'True',
    codeSolution: 's = "radar"\nis_pal = True\nfor i in range(len(s)//2):\n    if s[i] != s[-(i+1)]:\n        is_pal = False\n        break\nprint(is_pal)',
    hint: 'Compare mirrored indices.'
  },
  {
    id: 'py_loop_42',
    topicId: 'py_loop',
    question: 'Linear search for 5.',
    mathSolution: 'Index 2',
    codeSolution: 'nums = [2,4,5,8]\ntarget = 5\nindex = -1\nfor i in range(len(nums)):\n    if nums[i] == target:\n        index = i\n        break\nprint(index)',
    hint: 'Stop when found.'
  },
  {
    id: 'py_loop_43',
    topicId: 'py_loop',
    question: 'Average of list.',
    mathSolution: '25',
    codeSolution: 'nums = [10,20,30,40]\nprint(sum(nums)/len(nums))',
    hint: 'Sum / length.'
  },
  {
    id: 'py_loop_44',
    topicId: 'py_loop',
    question: 'ASCII values.',
    mathSolution: '65 66 67',
    codeSolution: 'for ch in "ABC":\n    print(ord(ch))',
    hint: 'Use ord().'
  },
  {
    id: 'py_loop_45',
    topicId: 'py_loop',
    question: 'Positive number loop.',
    mathSolution: 'Stops on positive input',
    codeSolution: 'num = int(input())\nwhile num <= 0:\n    num = int(input())',
    hint: 'Validation loop.'
  },
  {
    id: 'py_loop_46',
    topicId: 'py_loop',
    question: 'Reverse list using reversed().',
    mathSolution: '3 2 1',
    codeSolution: 'for x in reversed([1,2,3]):\n    print(x)',
    hint: 'Use reversed().'
  },
  {
    id: 'py_loop_47',
    topicId: 'py_loop',
    question: 'Sorted dictionary keys.',
    mathSolution: 'a b c',
    codeSolution: 'd = {"b":2,"a":1,"c":3}\nfor k in sorted(d):\n    print(k)',
    hint: 'sorted keys.'
  },
  {
    id: 'py_loop_48',
    topicId: 'py_loop',
    question: 'Second largest number.',
    mathSolution: '7',
    codeSolution: 'nums = [5,1,9,3,7]\nl1 = l2 = float("-inf")\nfor n in nums:\n    if n > l1:\n        l2 = l1\n        l1 = n\n    elif n > l2:\n        l2 = n\nprint(l2)',
    hint: 'Track top two.'
  },
  {
    id: 'py_loop_49',
    topicId: 'py_loop',
    question: 'Create dictionary from lists.',
    mathSolution: '{"name":"Bob","age":30}',
    codeSolution: 'keys = ["name","age"]\nvals = ["Bob",30]\nd = {}\nfor i in range(len(keys)):\n    d[keys[i]] = vals[i]\nprint(d)',
    hint: 'Index mapping.'
  },
  {
    id: 'py_loop_50',
    topicId: 'py_loop',
    question: 'Bubble sort.',
    mathSolution: '[1,2,3,4]',
    codeSolution: 'arr = [4,2,1,3]\nfor i in range(len(arr)):\n    for j in range(len(arr)-1):\n        if arr[j] > arr[j+1]:\n            arr[j], arr[j+1] = arr[j+1], arr[j]\nprint(arr)',
    hint: 'Swap adjacent elements.'
  }
);