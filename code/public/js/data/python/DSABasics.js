QuizData.questions.push(
  {
    id: "py_dsa_1",
    topicId: "py_dsa",
    question:
      "Write a function to reverse a list [1, 2, 3, 4, 5] without using built-in reverse() method.",
    mathSolution:
      "Use two-pointer approach: swap first and last elements moving towards center.",
    codeSolution:
      "def reverse_list(arr):\n    left, right = 0, len(arr)-1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr\n\nprint(reverse_list([1, 2, 3, 4, 5]))  # [5, 4, 3, 2, 1]",
    hint: "Use two pointers: one at start, one at end",
  },
  {
    id: "py_dsa_2",
    topicId: "py_dsa",
    question:
      "Find the maximum element in a list [3, 7, 2, 9, 1, 8] without using max() function.",
    mathSolution:
      "Initialize max with first element, iterate and update if larger element found.",
    codeSolution:
      "def find_max(arr):\n    if not arr:\n        return None\n    max_val = arr[0]\n    for num in arr:\n        if num > max_val:\n            max_val = num\n    return max_val\n\nprint(find_max([3, 7, 2, 9, 1, 8]))  # 9",
    hint: "Start with first element, compare with each element",
  },
  {
    id: "py_dsa_3",
    topicId: "py_dsa",
    question: "Find the minimum element in a list and its index.",
    mathSolution: "Track both minimum value and its position while iterating.",
    codeSolution:
      "def find_min_with_index(arr):\n    if not arr:\n        return None, None\n    min_val = arr[0]\n    min_idx = 0\n    for i in range(1, len(arr)):\n        if arr[i] < min_val:\n            min_val = arr[i]\n            min_idx = i\n    return min_val, min_idx\n\nprint(find_min_with_index([3, 7, 2, 9, 1, 8]))  # (1, 4)",
    hint: "Maintain both min value and its index",
  },
  {
    id: "py_dsa_4",
    topicId: "py_dsa",
    question: "Check if a list is sorted in ascending order.",
    mathSolution:
      "Compare each element with next element, if any is greater return False.",
    codeSolution:
      "def is_sorted(arr):\n    for i in range(len(arr)-1):\n        if arr[i] > arr[i+1]:\n            return False\n    return True\n\nprint(is_sorted([1, 2, 3, 4, 5]))  # True\nprint(is_sorted([1, 3, 2, 4, 5]))  # False",
    hint: "Check if arr[i] > arr[i+1] for any i",
  },
  {
    id: "py_dsa_5",
    topicId: "py_dsa",
    question:
      "Count the frequency of each element in a list [1, 2, 2, 3, 3, 3, 4].",
    mathSolution: "Use dictionary to store element-count pairs.",
    codeSolution:
      "def count_frequency(arr):\n    freq = {}\n    for num in arr:\n        freq[num] = freq.get(num, 0) + 1\n    return freq\n\nprint(count_frequency([1, 2, 2, 3, 3, 3, 4]))  # {1:1, 2:2, 3:3, 4:1}",
    hint: "Use dictionary with `.get(key, default)`",
  },
  {
    id: "py_dsa_6",
    topicId: "py_dsa",
    question:
      "Remove duplicates from a list [1, 2, 2, 3, 4, 4, 4, 5] preserving order.",
    mathSolution: "Use set to track seen elements while maintaining order.",
    codeSolution:
      "def remove_duplicates_preserve_order(arr):\n    seen = set()\n    result = []\n    for item in arr:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\nprint(remove_duplicates_preserve_order([1, 2, 2, 3, 4, 4, 4, 5]))  # [1, 2, 3, 4, 5]",
    hint: "Use a set to track seen elements",
  },
  {
    id: "py_dsa_7",
    topicId: "py_dsa",
    question:
      "Find the second largest element in a list [10, 5, 8, 20, 15, 20].",
    mathSolution: "Track largest and second largest while iterating.",
    codeSolution:
      'def second_largest(arr):\n    if len(arr) < 2:\n        return None\n    first = second = float("-inf")\n    for num in arr:\n        if num > first:\n            second = first\n            first = num\n        elif num > second and num != first:\n            second = num\n    return second if second != float("-inf") else None\n\nprint(second_largest([10, 5, 8, 20, 15, 20]))  # 15',
    hint: "Track both largest and second largest",
  },
  {
    id: "py_dsa_8",
    topicId: "py_dsa",
    question:
      "Move all zeros to the end of list [0, 1, 0, 3, 12, 0, 5] while maintaining order of non-zero elements.",
    mathSolution:
      "Use two-pointer: one for non-zero position, iterate and swap.",
    codeSolution:
      "def move_zeros_to_end(arr):\n    non_zero_idx = 0\n    for i in range(len(arr)):\n        if arr[i] != 0:\n            arr[non_zero_idx], arr[i] = arr[i], arr[non_zero_idx]\n            non_zero_idx += 1\n    return arr\n\nprint(move_zeros_to_end([0, 1, 0, 3, 12, 0, 5]))  # [1, 3, 12, 5, 0, 0, 0]",
    hint: "Swap elements when non-zero found",
  },
  {
    id: "py_dsa_9",
    topicId: "py_dsa",
    question:
      "Find the intersection of two lists [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7].",
    mathSolution: "Convert one list to set and check membership.",
    codeSolution:
      "def intersection(list1, list2):\n    set1 = set(list1)\n    return [item for item in list2 if item in set1]\n\nprint(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))  # [3, 4, 5]",
    hint: "Convert one list to set for O(1) lookup",
  },
  {
    id: "py_dsa_10",
    topicId: "py_dsa",
    question: "Find the union of two lists without duplicates.",
    mathSolution: "Convert both to sets and combine.",
    codeSolution:
      "def union(list1, list2):\n    return list(set(list1) | set(list2))\n\nprint(union([1, 2, 3, 4], [3, 4, 5, 6]))  # [1, 2, 3, 4, 5, 6]",
    hint: "Use set union operator `|`",
  },
  {
    id: "py_dsa_11",
    topicId: "py_dsa",
    question:
      "Implement binary search to find element 7 in sorted list [1, 3, 5, 7, 9, 11, 13].",
    mathSolution: "Repeatedly divide search interval in half.",
    codeSolution:
      "def binary_search(arr, target):\n    left, right = 0, len(arr)-1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9, 11, 13], 7))  # 3",
    hint: "Find middle, compare, eliminate half",
  },
  {
    id: "py_dsa_12",
    topicId: "py_dsa",
    question:
      "Implement linear search to find element 10 in list [5, 8, 10, 15, 20].",
    mathSolution: "Iterate through list and compare each element.",
    codeSolution:
      "def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1\n\nprint(linear_search([5, 8, 10, 15, 20], 10))  # 2",
    hint: "Use enumerate() to get index while iterating",
  },
  {
    id: "py_dsa_13",
    topicId: "py_dsa",
    question: "Implement bubble sort on list [64, 34, 25, 12, 22, 11, 90].",
    mathSolution: "Repeatedly swap adjacent elements if out of order.",
    codeSolution:
      "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(n-1-i):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))  # [11, 12, 22, 25, 34, 64, 90]",
    hint: "Nested loops: outer for passes, inner for comparisons",
  },
  {
    id: "py_dsa_14",
    topicId: "py_dsa",
    question: "Implement selection sort on list [64, 25, 12, 22, 11].",
    mathSolution: "Find minimum and place at beginning repeatedly.",
    codeSolution:
      "def selection_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nprint(selection_sort([64, 25, 12, 22, 11]))  # [11, 12, 22, 25, 64]",
    hint: "Find minimum in unsorted portion, swap with first unsorted",
  },
  {
    id: "py_dsa_15",
    topicId: "py_dsa",
    question: "Implement insertion sort on list [12, 11, 13, 5, 6].",
    mathSolution: "Build sorted array one element at a time.",
    codeSolution:
      "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i-1\n        while j >= 0 and arr[j] > key:\n            arr[j+1] = arr[j]\n            j -= 1\n        arr[j+1] = key\n    return arr\n\nprint(insertion_sort([12, 11, 13, 5, 6]))  # [5, 6, 11, 12, 13]",
    hint: "Insert each element into correct position",
  },
  {
    id: "py_dsa_16",
    topicId: "py_dsa",
    question: "Find the sum of all elements in a list using recursion.",
    mathSolution: "Base case: empty list sum=0, recursive: first + sum(rest).",
    codeSolution:
      "def recursive_sum(arr):\n    if not arr:\n        return 0\n    return arr[0] + recursive_sum(arr[1:])\n\nprint(recursive_sum([1, 2, 3, 4, 5]))  # 15",
    hint: "Base case: empty list returns 0",
  },
  {
    id: "py_dsa_17",
    topicId: "py_dsa",
    question: "Calculate factorial of a number using recursion.",
    mathSolution: "Base case: 0! = 1, recursive: n! = n * (n-1)!",
    codeSolution:
      "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\nprint(factorial(5))  # 120",
    hint: "Return 1 for n=0 or n=1",
  },
  {
    id: "py_dsa_18",
    topicId: "py_dsa",
    question: "Find the nth Fibonacci number using recursion.",
    mathSolution: "Base cases: F(0)=0, F(1)=1, recursive: F(n)=F(n-1)+F(n-2).",
    codeSolution:
      "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # 8 (0,1,1,2,3,5,8)",
    hint: "Base cases: 0 and 1",
  },
  {
    id: "py_dsa_19",
    topicId: "py_dsa",
    question:
      "Implement a stack using list with push, pop, and peek operations.",
    mathSolution:
      "Use list append() for push, pop() for pop, indexing for peek.",
    codeSolution:
      "class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def peek(self):\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\ns = Stack()\ns.push(1)\ns.push(2)\nprint(s.pop())  # 2\nprint(s.peek())  # 1",
    hint: "Use list methods: append(), pop(), indexing",
  },
  {
    id: "py_dsa_20",
    topicId: "py_dsa",
    question:
      "Implement a queue using list with enqueue and dequeue operations.",
    mathSolution: "Use append() for enqueue, pop(0) for dequeue.",
    codeSolution:
      "class Queue:\n    def __init__(self):\n        self.items = []\n    \n    def enqueue(self, item):\n        self.items.append(item)\n    \n    def dequeue(self):\n        if not self.is_empty():\n            return self.items.pop(0)\n        return None\n    \n    def front(self):\n        if not self.is_empty():\n            return self.items[0]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\nq = Queue()\nq.enqueue(1)\nq.enqueue(2)\nprint(q.dequeue())  # 1\nprint(q.front())  # 2",
    hint: "Use pop(0) for dequeue, but it's O(n)",
  },
  {
    id: "py_dsa_21",
    topicId: "py_dsa",
    question: 'Check if a string is palindrome using stack: "racecar".',
    mathSolution: "Push all chars to stack, pop and compare with original.",
    codeSolution:
      'def is_palindrome_stack(s):\n    stack = []\n    for char in s:\n        stack.append(char)\n    for char in s:\n        if char != stack.pop():\n            return False\n    return True\n\nprint(is_palindrome_stack("racecar"))  # True\nprint(is_palindrome_stack("hello"))  # False',
    hint: "Push all chars, pop and compare with original string",
  },
  {
    id: "py_dsa_22",
    topicId: "py_dsa",
    question:
      "Implement a simple Node class and LinkedList class with append method.",
    mathSolution: "Node has data and next pointer. LinkedList tracks head.",
    codeSolution:
      "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n    \n    def append(self, data):\n        new_node = Node(data)\n        if not self.head:\n            self.head = new_node\n            return\n        current = self.head\n        while current.next:\n            current = current.next\n        current.next = new_node\n    \n    def display(self):\n        result = []\n        current = self.head\n        while current:\n            result.append(current.data)\n            current = current.next\n        return result\n\nll = LinkedList()\nll.append(1)\nll.append(2)\nll.append(3)\nprint(ll.display())  # [1, 2, 3]",
    hint: "Node has data and next attribute",
  },
  {
    id: "py_dsa_23",
    topicId: "py_dsa",
    question: "Find the length of a linked list.",
    mathSolution: "Traverse list, count nodes until None.",
    codeSolution:
      "def length(head):\n    count = 0\n    current = head\n    while current:\n        count += 1\n        current = current.next\n    return count\n\n# Using previous LinkedList class\nll = LinkedList()\nll.append(1)\nll.append(2)\nll.append(3)\nprint(length(ll.head))  # 3",
    hint: "Traverse and count nodes",
  },
  {
    id: "py_dsa_24",
    topicId: "py_dsa",
    question: "Implement binary search recursively.",
    mathSolution: "Divide array, search left or right half recursively.",
    codeSolution:
      "def binary_search_recursive(arr, target, left, right):\n    if left > right:\n        return -1\n    mid = (left + right) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        return binary_search_recursive(arr, target, mid+1, right)\n    else:\n        return binary_search_recursive(arr, target, left, mid-1)\n\narr = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search_recursive(arr, 7, 0, len(arr)-1))  # 3",
    hint: "Base case: left > right, recursive: search half",
  },
  {
    id: "py_dsa_25",
    topicId: "py_dsa",
    question: 'Find the first non-repeating character in string "swiss".',
    mathSolution: "Count frequencies, find first with count=1.",
    codeSolution:
      'def first_non_repeating(s):\n    freq = {}\n    for char in s:\n        freq[char] = freq.get(char, 0) + 1\n    for char in s:\n        if freq[char] == 1:\n            return char\n    return None\n\nprint(first_non_repeating("swiss"))  # "w"',
    hint: "Count frequencies first, then find first with count 1",
  },
  {
    id: "py_dsa_26",
    topicId: "py_dsa",
    question: 'Check if two strings are anagrams: "listen" and "silent".',
    mathSolution: "Sort both strings and compare, or use character counts.",
    codeSolution:
      'def are_anagrams(s1, s2):\n    if len(s1) != len(s2):\n        return False\n    return sorted(s1) == sorted(s2)\n\nprint(are_anagrams("listen", "silent"))  # True\nprint(are_anagrams("hello", "world"))  # False',
    hint: "Sorted strings should be equal",
  },
  {
    id: "py_dsa_27",
    topicId: "py_dsa",
    question:
      "Find the majority element (appears > n/2 times) in list [3, 3, 4, 2, 3, 3, 3].",
    mathSolution: "Use Boyer-Moore majority vote algorithm.",
    codeSolution:
      "def majority_element(arr):\n    candidate = None\n    count = 0\n    for num in arr:\n        if count == 0:\n            candidate = num\n        count += (1 if num == candidate else -1)\n    return candidate\n\nprint(majority_element([3, 3, 4, 2, 3, 3, 3]))  # 3",
    hint: "Cancel pairs of different elements, remaining is candidate",
  },
  {
    id: "py_dsa_28",
    topicId: "py_dsa",
    question: "Rotate array [1, 2, 3, 4, 5, 6, 7] to the right by 3 steps.",
    mathSolution: "Reverse whole, reverse first k, reverse remaining.",
    codeSolution:
      "def rotate_right(arr, k):\n    n = len(arr)\n    k = k % n\n    if k == 0:\n        return arr\n    arr.reverse()\n    arr[:k] = reversed(arr[:k])\n    arr[k:] = reversed(arr[k:])\n    return arr\n\nprint(rotate_right([1, 2, 3, 4, 5, 6, 7], 3))  # [5, 6, 7, 1, 2, 3, 4]",
    hint: "Three-reversal technique: reverse whole, then parts",
  },
  {
    id: "py_dsa_29",
    topicId: "py_dsa",
    question:
      "Find the missing number in list [0, 1, 2, 3, 4, 6, 7, 8, 9] (numbers 0-9).",
    mathSolution: "Sum of 0 to n = n*(n+1)//2, subtract actual sum.",
    codeSolution:
      "def missing_number(arr):\n    n = len(arr)\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(arr)\n    return expected_sum - actual_sum\n\nprint(missing_number([0, 1, 2, 3, 4, 6, 7, 8, 9]))  # 5",
    hint: "Expected sum minus actual sum gives missing number",
  },
  {
    id: "py_dsa_30",
    topicId: "py_dsa",
    question:
      "Find all pairs in list that sum to target value 8: [2, 4, 3, 5, 6, -2, 9, 1].",
    mathSolution: "Use set to track seen numbers.",
    codeSolution:
      "def find_pairs_with_sum(arr, target):\n    seen = set()\n    pairs = []\n    for num in arr:\n        complement = target - num\n        if complement in seen:\n            pairs.append((complement, num))\n        seen.add(num)\n    return pairs\n\nprint(find_pairs_with_sum([2, 4, 3, 5, 6, -2, 9, 1], 8))  # [(2, 6), (4, 4), (3, 5), (9, -1)]",
    hint: "Check if complement already seen",
  },
  {
    id: "py_dsa_31",
    topicId: "py_dsa",
    question:
      "Find the longest consecutive subsequence in [100, 4, 200, 1, 3, 2].",
    mathSolution: "Use set for O(1) lookup, find sequence starts.",
    codeSolution:
      "def longest_consecutive(arr):\n    num_set = set(arr)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            length = 1\n            while num + length in num_set:\n                length += 1\n            longest = max(longest, length)\n    return longest\n\nprint(longest_consecutive([100, 4, 200, 1, 3, 2]))  # 4 (1,2,3,4)",
    hint: "Find sequence start (num-1 not in set)",
  },
  {
    id: "py_dsa_32",
    topicId: "py_dsa",
    question: "Implement merge sort on list [38, 27, 43, 3, 9, 82, 10].",
    mathSolution:
      "Divide array into halves, sort recursively, merge sorted halves.",
    codeSolution:
      "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))  # [3, 9, 10, 27, 38, 43, 82]",
    hint: "Divide and conquer: split, sort, merge",
  },
  {
    id: "py_dsa_33",
    topicId: "py_dsa",
    question: "Implement quick sort on list [10, 7, 8, 9, 1, 5].",
    mathSolution: "Choose pivot, partition, recursively sort sub-arrays.",
    codeSolution:
      "def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr)//2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + middle + quick_sort(right)\n\nprint(quick_sort([10, 7, 8, 9, 1, 5]))  # [1, 5, 7, 8, 9, 10]",
    hint: "Elements less than pivot, equal, greater than pivot",
  },
  {
    id: "py_dsa_34",
    topicId: "py_dsa",
    question:
      "Implement DFS (Depth First Search) traversal on a graph using adjacency list.",
    mathSolution:
      "Use recursion or stack to visit nodes deeply before backing up.",
    codeSolution:
      'def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    print(start, end=" ")\n    for neighbor in graph[start]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited\n\ngraph = {\n    0: [1, 2],\n    1: [2],\n    2: [0, 3],\n    3: [3]\n}\nprint("DFS: ", end="")\ndfs(graph, 0)  # 0 1 2 3',
    hint: "Track visited nodes, recurse on unvisited neighbors",
  },
  {
    id: "py_dsa_35",
    topicId: "py_dsa",
    question: "Implement BFS (Breadth First Search) traversal on a graph.",
    mathSolution: "Use queue, visit level by level.",
    codeSolution:
      'from collections import deque\n\ndef bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    while queue:\n        vertex = queue.popleft()\n        print(vertex, end=" ")\n        for neighbor in graph[vertex]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n\ngraph = {\n    0: [1, 2],\n    1: [2],\n    2: [0, 3],\n    3: [3]\n}\nprint("BFS: ", end="")\nbfs(graph, 0)  # 0 1 2 3',
    hint: "Use deque for queue, mark visited when enqueuing",
  },
  {
    id: "py_dsa_36",
    topicId: "py_dsa",
    question:
      "Detect cycle in a linked list using Floyd's cycle detection algorithm.",
    mathSolution: "Use slow and fast pointers, if they meet, cycle exists.",
    codeSolution:
      "def has_cycle(head):\n    if not head:\n        return False\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False\n\n# Creating list with cycle\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nnodes = [Node(i) for i in range(5)]\nfor i in range(4):\n    nodes[i].next = nodes[i+1]\nnodes[4].next = nodes[2]  # Create cycle\nprint(has_cycle(nodes[0]))  # True",
    hint: "Slow moves 1 step, fast moves 2 steps",
  },
  {
    id: "py_dsa_37",
    topicId: "py_dsa",
    question: "Find the middle of a linked list in one pass.",
    mathSolution:
      "Use slow and fast pointers, fast reaches end when slow is at middle.",
    codeSolution:
      "def find_middle(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow.val if slow else None\n\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\nhead.next.next.next = Node(4)\nhead.next.next.next.next = Node(5)\nprint(find_middle(head))  # 3",
    hint: "Slow moves 1, fast moves 2 steps",
  },
  {
    id: "py_dsa_38",
    topicId: "py_dsa",
    question: "Implement a hash table with basic put and get operations.",
    mathSolution: "Use array of lists for chaining collision resolution.",
    codeSolution:
      'class HashTable:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    \n    def _hash(self, key):\n        return hash(key) % self.size\n    \n    def put(self, key, value):\n        index = self._hash(key)\n        for i, (k, v) in enumerate(self.table[index]):\n            if k == key:\n                self.table[index][i] = (key, value)\n                return\n        self.table[index].append((key, value))\n    \n    def get(self, key):\n        index = self._hash(key)\n        for k, v in self.table[index]:\n            if k == key:\n                return v\n        return None\n\nht = HashTable()\nht.put("name", "Alice")\nht.put("age", 25)\nprint(ht.get("name"))  # Alice\nprint(ht.get("age"))   # 25',
    hint: "Use modulo for hash function, chaining for collisions",
  },
  {
    id: "py_dsa_39",
    topicId: "py_dsa",
    question:
      "Find the maximum subarray sum (Kadane's algorithm) in [-2, 1, -3, 4, -1, 2, 1, -5, 4].",
    mathSolution:
      "Track current sum and max sum, reset if current becomes negative.",
    codeSolution:
      "def max_subarray_sum(arr):\n    max_current = max_global = arr[0]\n    for num in arr[1:]:\n        max_current = max(num, max_current + num)\n        max_global = max(max_global, max_current)\n    return max_global\n\nprint(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6 (4,-1,2,1)",
    hint: "Either start new subarray or extend existing",
  },
  {
    id: "py_dsa_40",
    topicId: "py_dsa",
    question: "Find the intersection point of two linked lists.",
    mathSolution: "Find lengths, advance longer list, then traverse together.",
    codeSolution:
      "def get_intersection(head1, head2):\n    len1 = get_length(head1)\n    len2 = get_length(head2)\n    while len1 > len2:\n        head1 = head1.next\n        len1 -= 1\n    while len2 > len1:\n        head2 = head2.next\n        len2 -= 1\n    while head1 and head2:\n        if head1 == head2:\n            return head1\n        head1 = head1.next\n        head2 = head2.next\n    return None\n\ndef get_length(head):\n    length = 0\n    while head:\n        length += 1\n        head = head.next\n    return length\n\n# Create intersecting lists\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\ncommon = Node(7)\ncommon.next = Node(8)\ncommon.next.next = Node(9)\n\nhead1 = Node(1)\nhead1.next = Node(2)\nhead1.next.next = common\n\nhead2 = Node(3)\nhead2.next = common\n\nintersection = get_intersection(head1, head2)\nprint(intersection.val if intersection else None)  # 7",
    hint: "Equalize lengths, then find common node",
  },
  {
    id: "py_dsa_41",
    topicId: "py_dsa",
    question: "Implement a priority queue using heapq (min-heap).",
    mathSolution: "Use heapq for heappush and heappop operations.",
    codeSolution:
      'import heapq\n\nclass PriorityQueue:\n    def __init__(self):\n        self.heap = []\n    \n    def push(self, priority, item):\n        heapq.heappush(self.heap, (priority, item))\n    \n    def pop(self):\n        if self.heap:\n            return heapq.heappop(self.heap)[1]\n        return None\n    \n    def is_empty(self):\n        return len(self.heap) == 0\n\npq = PriorityQueue()\npq.push(3, "low priority")\npq.push(1, "high priority")\npq.push(2, "medium priority")\nprint(pq.pop())  # "high priority"\nprint(pq.pop())  # "medium priority"',
    hint: "Heapq maintains smallest priority at top",
  },
  {
    id: "py_dsa_42",
    topicId: "py_dsa",
    question: "Find the k largest elements in list [3, 2, 1, 5, 6, 4] for k=2.",
    mathSolution: "Use min-heap of size k, or sorting, or quickselect.",
    codeSolution:
      "import heapq\n\ndef k_largest_elements(arr, k):\n    if k <= 0:\n        return []\n    heap = arr[:k]\n    heapq.heapify(heap)\n    for num in arr[k:]:\n        if num > heap[0]:\n            heapq.heapreplace(heap, num)\n    return heap\n\nprint(k_largest_elements([3, 2, 1, 5, 6, 4], 2))  # [5, 6] or [6, 5]",
    hint: "Maintain min-heap of k largest elements",
  },
  {
    id: "py_dsa_43",
    topicId: "py_dsa",
    question:
      'Implement a trie (prefix tree) for words ["apple", "app", "apricot", "banana"].',
    mathSolution: "Each node has children dict and end-of-word flag.",
    codeSolution:
      'class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    \n    def insert(self, word):\n        node = self.root\n        for char in word:\n            if char not in node.children:\n                node.children[char] = TrieNode()\n            node = node.children[char]\n        node.is_end = True\n    \n    def search(self, word):\n        node = self.root\n        for char in word:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return node.is_end\n    \n    def starts_with(self, prefix):\n        node = self.root\n        for char in prefix:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return True\n\ntrie = Trie()\ntrie.insert("apple")\ntrie.insert("app")\nprint(trie.search("apple"))  # True\nprint(trie.search("app"))    # True\nprint(trie.starts_with("ap")) # True',
    hint: "Each node: dict of children, boolean for word end",
  },
  {
    id: "py_dsa_44",
    topicId: "py_dsa",
    question: 'Find the longest common prefix in ["flower","flow","flight"].',
    mathSolution: "Compare characters of first string with others.",
    codeSolution:
      'def longest_common_prefix(strs):\n    if not strs:\n        return ""\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix:\n                return ""\n    return prefix\n\nprint(longest_common_prefix(["flower", "flow", "flight"]))  # "fl"',
    hint: "Reduce prefix until it matches all strings",
  },
  {
    id: "py_dsa_45",
    topicId: "py_dsa",
    question: 'Validate parentheses string "{[()]}" is balanced.',
    mathSolution: "Use stack, push opening, pop on closing, check match.",
    codeSolution:
      'def is_valid_parentheses(s):\n    mapping = {")": "(", "]": "[", "}": "{"}\n    stack = []\n    for char in s:\n        if char in mapping:\n            if not stack or stack.pop() != mapping[char]:\n                return False\n        else:\n            stack.append(char)\n    return not stack\n\nprint(is_valid_parentheses("{[()]}"))  # True\nprint(is_valid_parentheses("{[(])}"))  # False',
    hint: "Push opening, pop and match closing brackets",
  },
  {
    id: "py_dsa_46",
    topicId: "py_dsa",
    question: "Generate all subsets (power set) of [1, 2, 3].",
    mathSolution:
      "Use bit manipulation or recursion, each element either included or not.",
    codeSolution:
      "def subsets(nums):\n    result = [[]]\n    for num in nums:\n        result += [subset + [num] for subset in result]\n    return result\n\nprint(subsets([1, 2, 3]))  # [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]",
    hint: "Start with empty subset, add each element to existing subsets",
  },
  {
    id: "py_dsa_47",
    topicId: "py_dsa",
    question: "Find the minimum in rotated sorted array [4, 5, 6, 7, 0, 1, 2].",
    mathSolution: "Modified binary search, find pivot where order breaks.",
    codeSolution:
      "def find_min_rotated(arr):\n    left, right = 0, len(arr)-1\n    while left < right:\n        mid = (left + right) // 2\n        if arr[mid] > arr[right]:\n            left = mid + 1\n        else:\n            right = mid\n    return arr[left]\n\nprint(find_min_rotated([4, 5, 6, 7, 0, 1, 2]))  # 0",
    hint: "Compare mid with right to determine which half is unsorted",
  },
  {
    id: "py_dsa_48",
    topicId: "py_dsa",
    question:
      "Implement Dijkstra's algorithm for shortest path in weighted graph.",
    mathSolution:
      "Use priority queue to always explore smallest distance node.",
    codeSolution:
      'import heapq\n\ndef dijkstra(graph, start):\n    distances = {node: float("inf") for node in graph}\n    distances[start] = 0\n    pq = [(0, start)]\n    while pq:\n        current_dist, current = heapq.heappop(pq)\n        if current_dist > distances[current]:\n            continue\n        for neighbor, weight in graph[current]:\n            distance = current_dist + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(pq, (distance, neighbor))\n    return distances\n\ngraph = {\n    0: [(1, 4), (2, 2)],\n    1: [(2, 1), (3, 5)],\n    2: [(3, 8)],\n    3: []\n}\nprint(dijkstra(graph, 0))  # {0:0, 1:4, 2:2, 3:9}',
    hint: "Use heapq for priority queue, track shortest distances",
  },
  {
    id: "py_dsa_49",
    topicId: "py_dsa",
    question:
      "Implement a dynamic array (resizing list) with append and get operations.",
    mathSolution:
      "When capacity reached, create new larger array and copy elements.",
    codeSolution:
      'class DynamicArray:\n    def __init__(self, capacity=4):\n        self.capacity = capacity\n        self.arr = [None] * capacity\n        self.size = 0\n    \n    def append(self, value):\n        if self.size == self.capacity:\n            self._resize(self.capacity * 2)\n        self.arr[self.size] = value\n        self.size += 1\n    \n    def _resize(self, new_capacity):\n        new_arr = [None] * new_capacity\n        for i in range(self.size):\n            new_arr[i] = self.arr[i]\n        self.arr = new_arr\n        self.capacity = new_capacity\n    \n    def get(self, index):\n        if 0 <= index < self.size:\n            return self.arr[index]\n        raise IndexError("Index out of range")\n    \n    def __len__(self):\n        return self.size\n\nda = DynamicArray(2)\nda.append(1)\nda.append(2)\nda.append(3)  # Triggers resize\nprint(da.get(2))  # 3\nprint(len(da))  # 3',
    hint: "Double capacity when full, copy elements",
  },
  {
    id: "py_dsa_50",
    topicId: "py_dsa",
    question:
      'Solve the "Two Sum" problem: return indices of two numbers that add to target.',
    mathSolution: "Use hash map to store complement and index.",
    codeSolution:
      "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))  # [0, 1]\nprint(two_sum([3, 2, 4], 6))      # [1, 2]",
    hint: "Store each number and its index, check for complement",
  },
);
