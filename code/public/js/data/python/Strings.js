QuizData.questions.push(
  {
    id: 'py_str_1',
    topicId: 'py_strings',
    question: 'Write a function to reverse a given string.',
    mathSolution: 'Return the string with characters in reverse order using slicing or loop.',
    codeSolution: 'def reverse_string(s):\n    return s[::-1]\n\n# Test cases\nprint(reverse_string("Hello"))  # Output: olleH\nprint(reverse_string("Python"))  # Output: nohtyP',
    hint: 'Use slicing `s[::-1]` or loop through characters backwards.'
},
{
    id: 'py_str_2',
    topicId: 'py_strings',
    question: 'Check if a given string is a palindrome (reads the same forwards and backwards).',
    mathSolution: 'Compare the string with its reverse.',
    codeSolution: 'def is_palindrome(s):\n    return s == s[::-1]\n\n# Test cases\nprint(is_palindrome("radar"))  # Output: True\nprint(is_palindrome("hello"))  # Output: False',
    hint: 'Reverse the string and compare.'
},
{
    id: 'py_str_3',
    topicId: 'py_strings',
    question: 'Count the number of vowels and consonants in a string (ignore case).',
    mathSolution: 'Iterate through characters, check if letter, classify as vowel/consonant.',
    codeSolution: 'def count_vowels_consonants(s):\n    vowels = set("aeiouAEIOU")\n    v = c = 0\n    for ch in s:\n        if ch.isalpha():\n            if ch in vowels:\n                v += 1\n            else:\n                c += 1\n    return v, c\n\n# Test cases\nv, c = count_vowels_consonants("Hello World")\nprint(f"Vowels: {v}, Consonants: {c}")  # Output: Vowels: 3, Consonants: 7',
    hint: 'Use a set of vowels for quick lookup.'
},
{
    id: 'py_str_4',
    topicId: 'py_strings',
    question: 'Count the occurrences of a specific character in a string.',
    mathSolution: 'Use count() method or loop.',
    codeSolution: 'def count_char(s, char):\n    return s.count(char)\n\n# Test cases\nprint(count_char("Hello World", "l"))  # Output: 3\nprint(count_char("banana", "a"))  # Output: 3',
    hint: '`str.count(char)` returns the number of non-overlapping occurrences.'
},
{
    id: 'py_str_5',
    topicId: 'py_strings',
    question: 'Remove duplicate characters from a string (keep first occurrence).',
    mathSolution: 'Use a set to track seen characters, build new string preserving order.',
    codeSolution: 'def remove_duplicates(s):\n    seen = set()\n    result = []\n    for ch in s:\n        if ch not in seen:\n            seen.add(ch)\n            result.append(ch)\n    return "".join(result)\n\n# Test cases\nprint(remove_duplicates("programming"))  # Output: progamin\nprint(remove_duplicates("hello"))  # Output: helo',
    hint: 'Iterate and add to result only if not seen before.'
},
{
    id: 'py_str_6',
    topicId: 'py_strings',
    question: 'Check if two strings are anagrams (contain same characters in any order).',
    mathSolution: 'Sort both strings and compare, or compare character counts.',
    codeSolution: 'def are_anagrams(s1, s2):\n    return sorted(s1) == sorted(s2)\n\n# Test cases\nprint(are_anagrams("listen", "silent"))  # Output: True\nprint(are_anagrams("hello", "world"))  # Output: False',
    hint: 'After sorting, anagrams become identical.'
},
{
    id: 'py_str_7',
    topicId: 'py_strings',
    question: 'Find the first non-repeating character in a string. Return its index or -1 if none.',
    mathSolution: 'Count frequencies, then scan to find first with count 1.',
    codeSolution: 'def first_unique_char(s):\n    from collections import Counter\n    counts = Counter(s)\n    for i, ch in enumerate(s):\n        if counts[ch] == 1:\n            return i\n    return -1\n\n# Test cases\nprint(first_unique_char("leetcode"))  # Output: 0\nprint(first_unique_char("aabb"))  # Output: -1',
    hint: 'Use Counter from collections to count, then find first with count 1.'
},
{
    id: 'py_str_8',
    topicId: 'py_strings',
    question: 'Find the length of the longest substring without repeating characters.',
    mathSolution: 'Sliding window with a set to track current characters.',
    codeSolution: 'def length_of_longest_substring(s):\n    char_set = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\n# Test cases\nprint(length_of_longest_substring("abcabcbb"))  # Output: 3\nprint(length_of_longest_substring("bbbbb"))  # Output: 1',
    hint: 'Maintain a sliding window and a set of characters in current window.'
},
{
    id: 'py_str_9',
    topicId: 'py_strings',
    question: 'Check if a string contains only digits (0-9).',
    mathSolution: 'Use str.isdigit() method.',
    codeSolution: 'def is_all_digits(s):\n    return s.isdigit()\n\n# Test cases\nprint(is_all_digits("12345"))  # Output: True\nprint(is_all_digits("123a5"))  # Output: False',
    hint: '`str.isdigit()` returns True if all characters are digits.'
},
{
    id: 'py_str_10',
    topicId: 'py_strings',
    question: 'Convert a string to uppercase and lowercase.',
    mathSolution: 'Use upper() and lower() methods.',
    codeSolution: 'def to_upper(s):\n    return s.upper()\n\ndef to_lower(s):\n    return s.lower()\n\n# Test cases\nprint(to_upper("Hello"))  # Output: HELLO\nprint(to_lower("Hello"))  # Output: hello',
    hint: '`s.upper()` and `s.lower()` do the conversion.'
},
{
    id: 'py_str_11',
    topicId: 'py_strings',
    question: 'Capitalize the first letter of each word in a sentence.',
    mathSolution: 'Use title() method or split and capitalize each word.',
    codeSolution: 'def capitalize_words(s):\n    return s.title()\n\n# Test cases\nprint(capitalize_words("hello world python"))  # Output: Hello World Python\nprint(capitalize_words("jAVA is FUN"))  # Output: Java Is Fun',
    hint: '`str.title()` capitalizes first letter of each word.'
},
{
    id: 'py_str_12',
    topicId: 'py_strings',
    question: 'Check if a string starts with a given prefix and ends with a given suffix.',
    mathSolution: 'Use startswith() and endswith() methods.',
    codeSolution: 'def check_prefix_suffix(s, prefix, suffix):\n    return s.startswith(prefix) and s.endswith(suffix)\n\n# Test cases\nprint(check_prefix_suffix("hello world", "hel", "rld"))  # Output: True\nprint(check_prefix_suffix("python", "py", "on"))  # Output: True',
    hint: '`s.startswith(prefix)` and `s.endswith(suffix)`.'
},
{
    id: 'py_str_13',
    topicId: 'py_strings',
    question: 'Find the index of the first occurrence of a substring. Return -1 if not found.',
    mathSolution: 'Use find() method.',
    codeSolution: 'def find_substring(s, sub):\n    return s.find(sub)\n\n# Test cases\nprint(find_substring("hello world", "world"))  # Output: 6\nprint(find_substring("hello", "xyz"))  # Output: -1',
    hint: '`s.find(sub)` returns the lowest index or -1.'
},
{
    id: 'py_str_14',
    topicId: 'py_strings',
    question: 'Replace all occurrences of a substring with another substring.',
    mathSolution: 'Use replace() method.',
    codeSolution: 'def replace_substring(s, old, new):\n    return s.replace(old, new)\n\n# Test cases\nprint(replace_substring("hello world hello", "hello", "hi"))  # Output: hi world hi\nprint(replace_substring("cat and dog", "cat", "bird"))  # Output: bird and dog',
    hint: '`s.replace(old, new)` replaces all occurrences.'
},
{
    id: 'py_str_15',
    topicId: 'py_strings',
    question: 'Split a string by a delimiter and return a list of parts.',
    mathSolution: 'Use split() method.',
    codeSolution: 'def split_string(s, delimiter):\n    return s.split(delimiter)\n\n# Test cases\nprint(split_string("apple,banana,orange", ","))  # Output: ["apple", "banana", "orange"]\nprint(split_string("one two three", " "))  # Output: ["one", "two", "three"]',
    hint: '`s.split(delim)` returns list of substrings.'
},
{
    id: 'py_str_16',
    topicId: 'py_strings',
    question: 'Join a list of strings into one string using a separator.',
    mathSolution: 'Use join() method.',
    codeSolution: 'def join_strings(lst, separator):\n    return separator.join(lst)\n\n# Test cases\nprint(join_strings(["apple", "banana", "orange"], ", "))  # Output: apple, banana, orange\nprint(join_strings(["one", "two", "three"], "-"))  # Output: one-two-three',
    hint: '`separator.join(list)` concatenates list elements.'
},
{
    id: 'py_str_17',
    topicId: 'py_strings',
    question: 'Count the number of words in a sentence (words separated by spaces).',
    mathSolution: 'Split by whitespace and count.',
    codeSolution: 'def count_words(sentence):\n    return len(sentence.split())\n\n# Test cases\nprint(count_words("Hello world Python programming"))  # Output: 4\nprint(count_words("This is a test"))  # Output: 4',
    hint: '`split()` without arguments splits on any whitespace.'
},
{
    id: 'py_str_18',
    topicId: 'py_strings',
    question: 'Remove leading and trailing whitespace from a string.',
    mathSolution: 'Use strip() method.',
    codeSolution: 'def trim_whitespace(s):\n    return s.strip()\n\n# Test cases\nprint(trim_whitespace("  hello  "))  # Output: hello\nprint(trim_whitespace("\\tpython\\n"))  # Output: python',
    hint: '`s.strip()` removes leading/trailing whitespace.'
},
{
    id: 'py_str_19',
    topicId: 'py_strings',
    question: 'Remove all whitespace from a string (including spaces, tabs, newlines).',
    mathSolution: 'Replace spaces or use join of split.',
    codeSolution: 'def remove_all_whitespace(s):\n    return "".join(s.split())\n\n# Test cases\nprint(remove_all_whitespace("hello world\\npython"))  # Output: helloworldpython\nprint(remove_all_whitespace("a b\\tc"))  # Output: abc',
    hint: '`split()` with no args splits on whitespace, then join.'
},
{
    id: 'py_str_20',
    topicId: 'py_strings',
    question: 'Check if a string is a pangram (contains every letter of the alphabet at least once). Ignore case.',
    mathSolution: 'Convert to set of lowercase letters, compare with alphabet set.',
    codeSolution: 'import string\ndef is_pangram(s):\n    return set(c.lower() for c in s if c.isalpha()) == set(string.ascii_lowercase)\n\n# Test cases\nprint(is_pangram("The quick brown fox jumps over the lazy dog"))  # Output: True\nprint(is_pangram("Hello world"))  # Output: False',
    hint: 'Extract all letters, convert to set, compare with set of 26 letters.'
},
{
    id: 'py_str_21',
    topicId: 'py_strings',
    question: 'Check if a string is an isogram (no repeating letters, ignoring case).',
    mathSolution: 'Count letters, ensure all counts are 1.',
    codeSolution: 'def is_isogram(s):\n    letters = [c.lower() for c in s if c.isalpha()]\n    return len(letters) == len(set(letters))\n\n# Test cases\nprint(is_isogram("machine"))  # Output: True\nprint(is_isogram("hello"))  # Output: False',
    hint: 'Remove non‑letters, then check if unique count equals total count.'
},
{
    id: 'py_str_22',
    topicId: 'py_strings',
    question: 'Reverse the order of words in a sentence (e.g., "hello world" → "world hello").',
    mathSolution: 'Split, reverse list, join.',
    codeSolution: 'def reverse_words(sentence):\n    words = sentence.split()\n    return " ".join(reversed(words))\n\n# Test cases\nprint(reverse_words("hello world"))  # Output: world hello\nprint(reverse_words("Python is fun"))  # Output: fun is Python',
    hint: '`split()` gives words, `reversed()` reverses list, then `join()`.'
},
{
    id: 'py_str_23',
    topicId: 'py_strings',
    question: 'Left rotate a string by k positions (e.g., "abcdef", k=2 → "cdefab").',
    mathSolution: 'Use slicing: s[k:] + s[:k].',
    codeSolution: 'def left_rotate(s, k):\n    k %= len(s)\n    return s[k:] + s[:k]\n\n# Test cases\nprint(left_rotate("abcdef", 2))  # Output: cdefab\nprint(left_rotate("hello", 1))  # Output: elloh',
    hint: 'Take remainder to avoid unnecessary rotations.'
},
{
    id: 'py_str_24',
    topicId: 'py_strings',
    question: 'Check if one string is a rotation of another (e.g., "abcde" is rotation of "cdeab").',
    mathSolution: 'Check if len equal and s2 is substring of s1+s1.',
    codeSolution: 'def is_rotation(s1, s2):\n    return len(s1) == len(s2) and s2 in (s1 + s1)\n\n# Test cases\nprint(is_rotation("abcde", "cdeab"))  # Output: True\nprint(is_rotation("abcde", "abced"))  # Output: False',
    hint: 'Concatenate s1 with itself; s2 should appear if it is a rotation.'
},
{
    id: 'py_str_25',
    topicId: 'py_strings',
    question: 'Generate all permutations of a string (assuming all characters are unique).',
    mathSolution: 'Recursive: pick each character and permute the rest.',
    codeSolution: 'def permutations(s):\n    if len(s) <= 1:\n        return [s]\n    perms = []\n    for i, ch in enumerate(s):\n        for perm in permutations(s[:i] + s[i+1:]):\n            perms.append(ch + perm)\n    return perms\n\n# Test cases\nprint(permutations("abc"))  # Output: ["abc", "acb", "bac", "bca", "cab", "cba"]\nprint(len(permutations("abcd")))  # Output: 24',
    hint: 'Use recursion: choose a character, permute the remainder.'
},
{
    id: 'py_str_26',
    topicId: 'py_strings',
    question: 'Generate all substrings of a given string.',
    mathSolution: 'Nested loops for start and end indices.',
    codeSolution: 'def all_substrings(s):\n    substrings = []\n    for i in range(len(s)):\n        for j in range(i+1, len(s)+1):\n            substrings.append(s[i:j])\n    return substrings\n\n# Test cases\nprint(all_substrings("abc"))  # Output: ["a", "ab", "abc", "b", "bc", "c"]\nprint(len(all_substrings("abcd")))  # Output: 10',
    hint: 'Use two loops: start index i, end index j (j > i).'
},
{
    id: 'py_str_27',
    topicId: 'py_strings',
    question: 'Find the longest common prefix among a list of strings.',
    mathSolution: 'Compare characters one by one across all strings.',
    codeSolution: 'def longest_common_prefix(strs):\n    if not strs:\n        return ""\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix:\n                return ""\n    return prefix\n\n# Test cases\nprint(longest_common_prefix(["flower","flow","flight"]))  # Output: "fl"\nprint(longest_common_prefix(["dog","racecar","car"]))  # Output: ""',
    hint: 'Start with first string as prefix, shorten until all start with it.'
},
{
    id: 'py_str_28',
    topicId: 'py_strings',
    question: 'Check if a string is a valid palindrome considering only alphanumeric characters and ignoring case.',
    mathSolution: 'Filter alphanumeric, lower case, then compare with reverse.',
    codeSolution: 'def is_palindrome_alnum(s):\n    filtered = [c.lower() for c in s if c.isalnum()]\n    return filtered == filtered[::-1]\n\n# Test cases\nprint(is_palindrome_alnum("A man, a plan, a canal: Panama"))  # Output: True\nprint(is_palindrome_alnum("race a car"))  # Output: False',
    hint: 'Use `isalnum()` to keep letters/digits, then lower case.'
},
{
    id: 'py_str_29',
    topicId: 'py_strings',
    question: 'Implement the "count and say" sequence: given n, return the nth term (1 → "1", 2 → "11", 3 → "21", etc.).',
    mathSolution: 'Iterate: read off counts of consecutive digits.',
    codeSolution: 'def count_and_say(n):\n    if n == 1:\n        return "1"\n    prev = count_and_say(n-1)\n    result = []\n    count = 1\n    for i in range(1, len(prev)):\n        if prev[i] == prev[i-1]:\n            count += 1\n        else:\n            result.append(str(count) + prev[i-1])\n            count = 1\n    result.append(str(count) + prev[-1])\n    return "".join(result)\n\n# Test cases\nprint(count_and_say(1))  # Output: "1"\nprint(count_and_say(4))  # Output: "1211"',
    hint: 'Recursively build, then count consecutive runs.'
},
{
    id: 'py_str_30',
    topicId: 'py_strings',
    question: 'Implement strStr(): return index of first occurrence of needle in haystack, or -1 if not found.',
    mathSolution: 'Use find() or implement sliding window.',
    codeSolution: 'def str_str(haystack, needle):\n    return haystack.find(needle)\n\n# Test cases\nprint(str_str("hello", "ll"))  # Output: 2\nprint(str_str("aaaaa", "bba"))  # Output: -1',
    hint: '`haystack.find(needle)` does exactly this.'
},
{
    id: 'py_str_31',
    topicId: 'py_strings',
    question: 'Check if two strings are one edit away (insert, delete, replace one character).',
    mathSolution: 'If lengths differ by >1, false; if same, check one difference; if length differ by 1, check insert/delete.',
    codeSolution: 'def one_edit_away(s1, s2):\n    if abs(len(s1)-len(s2)) > 1:\n        return False\n    if len(s1) == len(s2):\n        diffs = sum(c1 != c2 for c1, c2 in zip(s1, s2))\n        return diffs <= 1\n    if len(s1) < len(s2):\n        s1, s2 = s2, s1\n    i = j = 0\n    while i < len(s1) and j < len(s2):\n        if s1[i] != s2[j]:\n            if i != j: return False\n            i += 1\n        else:\n            i += 1\n            j += 1\n    return True\n\n# Test cases\nprint(one_edit_away("pal", "pale"))  # Output: True\nprint(one_edit_away("pale", "bale"))  # Output: True\nprint(one_edit_away("pale", "bake"))  # Output: False',
    hint: 'Handle cases based on length difference.'
},
{
    id: 'py_str_32',
    topicId: 'py_strings',
    question: 'Remove all occurrences of a character from a string.',
    mathSolution: 'Use replace with empty string or list comprehension.',
    codeSolution: 'def remove_char(s, char):\n    return s.replace(char, "")\n\n# Test cases\nprint(remove_char("hello world", "l"))  # Output: heo word\nprint(remove_char("banana", "a"))  # Output: bnn',
    hint: '`s.replace(char, "")` removes all instances.'
},
{
    id: 'py_str_33',
    topicId: 'py_strings',
    question: 'Find all duplicate characters in a string and return them as a set.',
    mathSolution: 'Count frequencies, collect those with count > 1.',
    codeSolution: 'def find_duplicates(s):\n    from collections import Counter\n    counts = Counter(s)\n    return {ch for ch, cnt in counts.items() if cnt > 1}\n\n# Test cases\nprint(find_duplicates("programming"))  # Output: {"r", "g", "m"}\nprint(find_duplicates("hello"))  # Output: {"l"}',
    hint: 'Use Counter and filter.'
},
{
    id: 'py_str_34',
    topicId: 'py_strings',
    question: 'Print all duplicate characters and their counts.',
    mathSolution: 'Count frequencies, print those >1.',
    codeSolution: 'def print_duplicates(s):\n    from collections import Counter\n    counts = Counter(s)\n    for ch, cnt in counts.items():\n        if cnt > 1:\n            print(f"{ch}: {cnt}")\n\n# Test cases\nprint_duplicates("programming")  # Output: r:2, g:2, m:2\nprint_duplicates("hello")  # Output: l:2',
    hint: 'Iterate over Counter items.'
},
{
    id: 'py_str_35',
    topicId: 'py_strings',
    question: 'Find the longest palindromic substring in a given string (naive approach).',
    mathSolution: 'Check all substrings if palindrome, track longest.',
    codeSolution: 'def longest_palindrome(s):\n    longest = ""\n    for i in range(len(s)):\n        for j in range(i, len(s)):\n            sub = s[i:j+1]\n            if sub == sub[::-1] and len(sub) > len(longest):\n                longest = sub\n    return longest\n\n# Test cases\nprint(longest_palindrome("babad"))  # Output: "bab" or "aba"\nprint(longest_palindrome("cbbd"))  # Output: "bb"',
    hint: 'Nested loops for all substrings, check palindrome.'
},
{
    id: 'py_str_36',
    topicId: 'py_strings',
    question: 'Check if parentheses in a string are balanced only and .',
    mathSolution: 'Use a counter: increment for (, decrement for ); if negative, false; at end zero.',
    codeSolution: 'def balanced_parentheses(s):\n    count = 0\n    for ch in s:\n        if ch == "(":\n            count += 1\n        elif ch == ")":\n            count -= 1\n            if count < 0:\n                return False\n    return count == 0\n\n# Test cases\nprint(balanced_parentheses("()()"))  # Output: True\nprint(balanced_parentheses("(()"))  # Output: False',
    hint: 'Track opening parentheses; if count goes negative, unbalanced.'
},
{
    id: 'py_str_37',
    topicId: 'py_strings',
    question: 'Decode a simple run‑length encoded string like "a3b2c4" to "aaabbcccc".',
    mathSolution: 'Iterate: when digit, repeat previous char.',
    codeSolution: 'def decode_string(encoded):\n    result = []\n    i = 0\n    while i < len(encoded):\n        char = encoded[i]\n        i += 1\n        num = ""\n        while i < len(encoded) and encoded[i].isdigit():\n            num += encoded[i]\n            i += 1\n        result.append(char * int(num))\n    return "".join(result)\n\n# Test cases\nprint(decode_string("a3b2c4"))  # Output: aaabbcccc\nprint(decode_string("x1y2z3"))  # Output: xyyzzz',
    hint: 'Read char, then all following digits, repeat char.'
},
{
    id: 'py_str_38',
    topicId: 'py_strings',
    question: 'Run‑length encode a string (e.g., "aaabbcccc" → "a3b2c4").',
    mathSolution: 'Traverse, count consecutive characters, output char+count.',
    codeSolution: 'def encode_string(s):\n    if not s:\n        return ""\n    result = []\n    count = 1\n    for i in range(1, len(s)):\n        if s[i] == s[i-1]:\n            count += 1\n        else:\n            result.append(s[i-1] + str(count))\n            count = 1\n    result.append(s[-1] + str(count))\n    return "".join(result)\n\n# Test cases\nprint(encode_string("aaabbcccc"))  # Output: a3b2c4\nprint(encode_string("abcd"))  # Output: a1b1c1d1',
    hint: 'Count consecutive runs.'
},
{
    id: 'py_str_39',
    topicId: 'py_strings',
    question: 'Compare two version numbers (e.g., "1.2" and "1.10"). Return 1 if v1 > v2, -1 if v1 < v2, 0 if equal.',
    mathSolution: 'Split by . convert to integers, compare component‑wise.',
    codeSolution: 'def compare_version(v1, v2):\n    parts1 = list(map(int, v1.split(".")))\n    parts2 = list(map(int, v2.split(".")))\n    max_len = max(len(parts1), len(parts2))\n    for i in range(max_len):\n        num1 = parts1[i] if i < len(parts1) else 0\n        num2 = parts2[i] if i < len(parts2) else 0\n        if num1 > num2:\n            return 1\n        elif num1 < num2:\n            return -1\n    return 0\n\n# Test cases\nprint(compare_version("1.2", "1.10"))  # Output: -1\nprint(compare_version("2.5", "2.5.0"))  # Output: 0',
    hint: 'Pad missing parts with 0 and compare.'
},
{
    id: 'py_str_40',
    topicId: 'py_strings',
    question: 'Check if a string represents a valid integer (may have leading + or -).',
    mathSolution: 'Try converting to int; catch exception.',
    codeSolution: 'def is_valid_integer(s):\n    try:\n        int(s)\n        return True\n    except ValueError:\n        return False\n\n# Test cases\nprint(is_valid_integer("123"))  # Output: True\nprint(is_valid_integer("-456"))  # Output: True\nprint(is_valid_integer("12.3"))  # Output: False',
    hint: '`int(s)` raises ValueError if not valid integer.'
},
{
    id: 'py_str_41',
    topicId: 'py_strings',
    question: 'Implement atoi: convert string to integer handling leading whitespace, optional sign, and overflow.',
    mathSolution: 'Strip, check sign, read digits, build number with overflow check.',
    codeSolution: 'def my_atoi(s):\n    s = s.strip()\n    if not s:\n        return 0\n    sign = 1\n    if s[0] in "+-":\n        sign = -1 if s[0] == "-" else 1\n        s = s[1:]\n    num = 0\n    for ch in s:\n        if not ch.isdigit():\n            break\n        num = num * 10 + (ord(ch) - ord("0"))\n    num *= sign\n    INT_MIN, INT_MAX = -2**31, 2**31-1\n    if num < INT_MIN:\n        return INT_MIN\n    if num > INT_MAX:\n        return INT_MAX\n    return num\n\n# Test cases\nprint(my_atoi("42"))  # Output: 42\nprint(my_atoi("   -42"))  # Output: -42\nprint(my_atoi("4193 with words"))  # Output: 4193',
    hint: 'Process sign, digits, and handle overflow.'
},
{
    id: 'py_str_42',
    topicId: 'py_strings',
    question: 'Multiply two large numbers given as strings (without using big integers).',
    mathSolution: 'Simulate multiplication digit by digit.',
    codeSolution: 'def multiply_strings(num1, num2):\n    if num1 == "0" or num2 == "0":\n        return "0"\n    res = [0] * (len(num1) + len(num2))\n    for i in range(len(num1)-1, -1, -1):\n        for j in range(len(num2)-1, -1, -1):\n            mul = (ord(num1[i])-48) * (ord(num2[j])-48)\n            p1, p2 = i+j, i+j+1\n            total = mul + res[p2]\n            res[p1] += total // 10\n            res[p2] = total % 10\n    result = "".join(map(str, res)).lstrip("0")\n    return result\n\n# Test cases\nprint(multiply_strings("2", "3"))  # Output: "6"\nprint(multiply_strings("123", "456"))  # Output: "56088"',
    hint: 'Use array to store intermediate results, handle carries.'
},
{
    id: 'py_str_43',
    topicId: 'py_strings',
    question: 'Group anagrams from a list of strings.',
    mathSolution: 'Use a dictionary keyed by sorted string.',
    codeSolution: 'def group_anagrams(strs):\n    from collections import defaultdict\n    groups = defaultdict(list)\n    for s in strs:\n        key = "".join(sorted(s))\n        groups[key].append(s)\n    return list(groups.values())\n\n# Test cases\nprint(group_anagrams(["eat","tea","tan","ate","nat","bat"]))  # Output: [["eat","tea","ate"],["tan","nat"],["bat"]]\nprint(group_anagrams([""]))  # Output: [[""]]',
    hint: 'Sorted string is the same for anagrams.'
},
{
    id: 'py_str_44',
    topicId: 'py_strings',
    question: 'Check if one string is a subsequence of another (e.g., "abc" is subsequence of "ahbgdc").',
    mathSolution: 'Two pointers to match characters in order.',
    codeSolution: 'def is_subsequence(s, t):\n    i = j = 0\n    while i < len(s) and j < len(t):\n        if s[i] == t[j]:\n            i += 1\n        j += 1\n    return i == len(s)\n\n# Test cases\nprint(is_subsequence("abc", "ahbgdc"))  # Output: True\nprint(is_subsequence("axc", "ahbgdc"))  # Output: False',
    hint: 'Move pointer in t until all of s is found.'
},
{
    id: 'py_str_45',
    topicId: 'py_strings',
    question: 'Remove all adjacent duplicates in a string (e.g., "abbaca" → "ca").',
    mathSolution: 'Use a stack; if top equals current, pop, else push.',
    codeSolution: 'def remove_adjacent_duplicates(s):\n    stack = []\n    for ch in s:\n        if stack and stack[-1] == ch:\n            stack.pop()\n        else:\n            stack.append(ch)\n    return "".join(stack)\n\n# Test cases\nprint(remove_adjacent_duplicates("abbaca"))  # Output: ca\nprint(remove_adjacent_duplicates("azxxzy"))  # Output: ay',
    hint: 'Simulate stack, when duplicate found pop.'
},
{
    id: 'py_str_46',
    topicId: 'py_strings',
    question: 'Reverse only the letters in a string, keeping other characters in place (e.g., "a-bC-dEf-gh" → "h-fEd-Cb-a").',
    mathSolution: 'Use two pointers; when both are letters, swap.',
    codeSolution: 'def reverse_only_letters(s):\n    chars = list(s)\n    left, right = 0, len(s)-1\n    while left < right:\n        if not chars[left].isalpha():\n            left += 1\n        elif not chars[right].isalpha():\n            right -= 1\n        else:\n            chars[left], chars[right] = chars[right], chars[left]\n            left += 1\n            right -= 1\n    return "".join(chars)\n\n# Test cases\nprint(reverse_only_letters("a-bC-dEf-gh"))  # Output: "h-fEd-Cb-a"\nprint(reverse_only_letters("ab-cd"))  # Output: "dc-ba"',
    hint: 'Use two‑pointer approach, skip non‑letters.'
},
{
    id: 'py_str_47',
    topicId: 'py_strings',
    question: 'Compress a string by replacing consecutive repeats with character and count (e.g., "aabcccccaaa" → "a2b1c5a3"). If compressed is longer, return original.',
    mathSolution: 'Count runs, build compressed string, compare lengths.',
    codeSolution: 'def compress_string(s):\n    if not s:\n        return s\n    compressed = []\n    count = 1\n    for i in range(1, len(s)):\n        if s[i] == s[i-1]:\n            count += 1\n        else:\n            compressed.append(s[i-1] + str(count))\n            count = 1\n    compressed.append(s[-1] + str(count))\n    compressed = "".join(compressed)\n    return compressed if len(compressed) < len(s) else s\n\n# Test cases\nprint(compress_string("aabcccccaaa"))  # Output: a2b1c5a3\nprint(compress_string("abcde"))  # Output: abcde (compressed would be longer)',
    hint: 'Build compressed, compare lengths.'
},
{
    id: 'py_str_48',
    topicId: 'py_strings',
    question: 'Count binary substrings: group consecutive 0s and 1s, then min of adjacent group sizes.',
    mathSolution: 'Compute runs, then sum min(runs[i], runs[i+1]) over adjacent.',
    codeSolution: 'def count_binary_substrings(s):\n    groups = []\n    count = 1\n    for i in range(1, len(s)):\n        if s[i] == s[i-1]:\n            count += 1\n        else:\n            groups.append(count)\n            count = 1\n    groups.append(count)\n    result = 0\n    for i in range(len(groups)-1):\n        result += min(groups[i], groups[i+1])\n    return result\n\n# Test cases\nprint(count_binary_substrings("00110011"))  # Output: 6\nprint(count_binary_substrings("10101"))  # Output: 4',
    hint: 'Count consecutive runs, then sum mins of adjacent runs.'
},
{
    id: 'py_str_49',
    topicId: 'py_strings',
    question: 'Find all starting indices of anagrams of a pattern in a string.',
    mathSolution: 'Sliding window with frequency counters.',
    codeSolution: 'def find_anagrams(s, p):\n    from collections import Counter\n    p_count = Counter(p)\n    s_count = Counter()\n    result = []\n    for i in range(len(s)):\n        s_count[s[i]] += 1\n        if i >= len(p):\n            if s_count[s[i-len(p)]] == 1:\n                del s_count[s[i-len(p)]]\n            else:\n                s_count[s[i-len(p)]] -= 1\n        if s_count == p_count:\n            result.append(i - len(p) + 1)\n    return result\n\n# Test cases\nprint(find_anagrams("cbaebabacd", "abc"))  # Output: [0, 6]\nprint(find_anagrams("abab", "ab"))  # Output: [0, 1, 2]',
    hint: 'Maintain window of length len(p), compare counters.'
},
{
    id: 'py_str_50',
    topicId: 'py_strings',
    question: 'Given a string, find the length of the longest substring with at most two distinct characters.',
    mathSolution: 'Sliding window with dictionary of character counts.',
    codeSolution: 'def length_of_longest_substring_two_distinct(s):\n    from collections import defaultdict\n    left = max_len = 0\n    char_count = defaultdict(int)\n    for right in range(len(s)):\n        char_count[s[right]] += 1\n        while len(char_count) > 2:\n            char_count[s[left]] -= 1\n            if char_count[s[left]] == 0:\n                del char_count[s[left]]\n            left += 1\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\n# Test cases\nprint(length_of_longest_substring_two_distinct("eceba"))  # Output: 3\nprint(length_of_longest_substring_two_distinct("ccaabbb"))  # Output: 5',
    hint: 'Expand right, shrink left when more than 2 distinct.'
}
);