QuizData.questions.push(
{
  id: 'cpp_strings_1',
  topicId: 'cpp_strings',
  question: 'Declare and initialize a string using std::string.',
  mathSolution: 'string is a class that manages character sequences.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello World";\n    string str2("C++ Strings");\n    string str3 = str1;\n    \n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    cout << "str3: " << str3 << endl;\n    \n    return 0;\n}',
  hint: '#include <string> is required for std::string class.'
},
{
  id: 'cpp_strings_2',
  topicId: 'cpp_strings',
  question: 'Get string length using length() or size() method.',
  mathSolution: 'length() and size() return number of characters in string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++ Programming";\n    \n    cout << "String: " << str << endl;\n    cout << "Length (length()): " << str.length() << endl;\n    cout << "Size (size()): " << str.size() << endl;\n    cout << "Empty? " << (str.empty() ? "Yes" : "No") << endl;\n    \n    string emptyStr;\n    cout << "Empty string length: " << emptyStr.length() << endl;\n    \n    return 0;\n}',
  hint: 'length() and size() are synonyms; both return the same value.'
},
{
  "id": "cpp_strings_3",
  "topicId": "cpp_strings",
  "question": "Access and modify characters in string using [] operator.",
  "mathSolution": "Characters can be accessed by index (0-based).",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    string str = \"Hello\";\n    \n    cout << \"Original: \" << str << endl;\n    cout << \"First character: \" << str[0] << endl;\n    cout << \"Last character: \" << str[str.length() - 1] << endl;\n    \n    str[0] = 'J';\n    str[4] = 'y';\n    cout << \"Modified: \" << str << endl;  // Jelly\n    \n    // Using at() method (bounds checking)\n    try {\n        cout << str.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << \"Out of range: \" << e.what() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "[] operator is faster but does not check bounds; at() checks bounds and throws exception."
},
{
  "id": "cpp_strings_4",
  "topicId": "cpp_strings",
  "question": "Concatenate strings using + operator.",
  "mathSolution": "'+' operator joins two strings, '+=' appends.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string firstName = \"John\";\n    string lastName = \"Doe\";\n    string fullName = firstName + \" \" + lastName;\n    \n    cout << \"Full name: \" << fullName << endl;\n    \n    string greeting = \"Hello\";\n    greeting += \" \";\n    greeting += firstName;\n    greeting += \"!\";\n    \n    cout << \"Greeting: \" << greeting << endl;\n    \n    // Appending characters\n    string text = \"ABC\";\n    text += 'D';\n    text += 'E';\n    cout << \"Appended: \" << text << endl;\n    \n    return 0;\n}",
  "hint": "+ operator creates new string; += modifies existing string."
},
{
  "id": "cpp_strings_5",
  "topicId": "cpp_strings",
  "question": "Use append() method to add content to string.",
  "mathSolution": "append() adds characters, strings, or substrings.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Hello\";\n    \n    // Append string\n    str.append(\" World\");\n    cout << str << endl;\n    \n    // Append part of string\n    string text = \" Programming is fun\";\n    str.append(text, 1, 12);  // Append \"Programming\" (start from index 1, length 12)\n    cout << str << endl;\n    \n    // Append characters (repeating)\n    str.append(3, '!');\n    cout << str << endl;\n    \n    // Append using iterators\n    string extra = \" Welcome\";\n    str.append(extra.begin(), extra.end());\n    cout << str << endl;\n    \n    return 0;\n}",
  "hint": "append() has multiple overloads for different use cases."
},
{
  id: 'cpp_strings_6',
  topicId: 'cpp_strings',
  question: 'Extract substring using substr() method.',
  mathSolution: 'substr(pos, count) returns substring starting at pos with count characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World Programming";\n    \n    string part1 = str.substr(0, 5);     // "Hello"\n    string part2 = str.substr(6, 5);     // "World"\n    string part3 = str.substr(12);       // "Programming" (from pos to end)\n    \n    cout << "Original: " << str << endl;\n    cout << "Substring 0-5: " << part1 << endl;\n    cout << "Substring 6-11: " << part2 << endl;\n    cout << "Substring from 12: " << part3 << endl;\n    \n    // Last word\n    size_t lastSpace = str.find_last_of(\' \');\n    string lastWord = str.substr(lastSpace + 1);\n    cout << "Last word: " << lastWord << endl;\n    \n    return 0;\n}',
  hint: 'If count is omitted, substr goes till end of string.'
},
{
  id: 'cpp_strings_7',
  topicId: 'cpp_strings',
  question: 'Find substring position using find() method.',
  mathSolution: 'find() returns index of first occurrence, string::npos if not found.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World, Welcome to C++ World";\n    \n    // Find first occurrence\n    size_t pos = str.find("World");\n    if (pos != string::npos) {\n        cout << "\'World\' found at position: " << pos << endl;\n    }\n    \n    // Find from specific position\n    pos = str.find("World", pos + 1);\n    if (pos != string::npos) {\n        cout << "Second \'World\' found at: " << pos << endl;\n    }\n    \n    // Find character\n    pos = str.find(\'W\');\n    cout << "First \'W\' found at: " << pos << endl;\n    \n    // Find not found case\n    if (str.find("Python") == string::npos) {\n        cout << "\'Python\' not found\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Always compare result with string::npos to check if found.'
},
{
  id: 'cpp_strings_8',
  topicId: 'cpp_strings',
  question: 'Use rfind() to find from the end of string.',
  mathSolution: 'rfind() searches backward for last occurrence.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World, Welcome to World of C++";\n    \n    // Find last occurrence\n    size_t pos = str.rfind("World");\n    cout << "Last \'World\' at: " << pos << endl;\n    \n    // Find last occurrence of character\n    pos = str.rfind(\'o\');\n    cout << "Last \'o\' at: " << pos << endl;\n    \n    // Find from specific position (search backward)\n    pos = str.rfind("World", 20);\n    cout << "\'World\' searching backward from 20: " << pos << endl;\n    \n    // Find last occurrence of any character\n    pos = str.find_last_of("aeiou");\n    cout << "Last vowel at: " << pos << endl;\n    \n    return 0;\n}',
  hint: 'rfind searches from the end towards the beginning.'
},
{
  id: 'cpp_strings_9',
  topicId: 'cpp_strings',
  question: 'Find first/last occurrence of any character using find_first_of() and find_last_of().',
  mathSolution: 'find_first_of finds first occurrence of any character in set.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello 123 World 456!";\n    \n    // Find first digit\n    size_t pos = str.find_first_of("0123456789");\n    if (pos != string::npos) {\n        cout << "First digit at: " << pos << " is \'" << str[pos] << "\'\\n";\n    }\n    \n    // Find first vowel\n    pos = str.find_first_of("aeiouAEIOU");\n    cout << "First vowel at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    // Find first punctuation\n    pos = str.find_first_of("!@#$%^&*()");\n    cout << "First punctuation at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    // Find last vowel (using find_last_of)\n    pos = str.find_last_of("aeiouAEIOU");\n    cout << "Last vowel at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    return 0;\n}',
  hint: 'find_first_of finds any character from the set, not the entire substring.'
},
{
  id: 'cpp_strings_10',
  topicId: 'cpp_strings',
  question: 'Find first/last character NOT in set using find_first_not_of() and find_last_not_of().',
  mathSolution: 'find_first_not_of finds first character not in given set.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "   Hello World   ";\n    \n    // Find first non-space\n    size_t pos = str.find_first_not_of(\' \');\n    cout << "First non-space at: " << pos << " (\'" << str[pos] << "\')\\n";\n    \n    // Find last non-space\n    pos = str.find_last_not_of(\' \');\n    cout << "Last non-space at: " << pos << " (\'" << str[pos] << "\')\\n";\n    \n    string digits = "123abc456";\n    // Find first non-digit\n    pos = digits.find_first_not_of("0123456789");\n    cout << "First non-digit at: " << pos << " (\'" << digits[pos] << "\')\\n";\n    \n    string vowels = "bcdfg";\n    // Find first vowel (non-consonant)\n    pos = vowels.find_first_not_of("bcdfghjklmnpqrstvwxyz");\n    if (pos != string::npos) {\n        cout << "First vowel at: " << pos << " (\'" << vowels[pos] << "\')\\n";\n    }\n    \n    return 0;\n}',
  hint: 'These methods are useful for trimming whitespace.'
},
{
  id: 'cpp_strings_11',
  topicId: 'cpp_strings',
  question: 'Insert characters into string using insert() method.',
  mathSolution: 'insert() adds content at specified position.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World";\n    \n    // Insert string\n    str.insert(5, " Beautiful");\n    cout << "After insert: " << str << endl;\n    \n    // Insert character\n    str.insert(0, 3, \'*\');\n    cout << "After insert chars: " << str << endl;\n    \n    // Insert using iterator\n    str.insert(str.begin() + 4, \'#\');\n    cout << "After iterator insert: " << str << endl;\n    \n    // Insert substring\n    string sub = "C++ "; \n    str.insert(6, sub, 0, 3);\n    cout << "After substring insert: " << str << endl;\n    \n    return 0;\n}',
  hint: 'insert() modifies the original string.'
},
{
  id: 'cpp_strings_12',
  topicId: 'cpp_strings',
  question: 'Replace part of string using replace() method.',
  mathSolution: 'replace() substitutes characters with new content.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World Programming";\n    \n    // Replace "World" with "C++"\n    str.replace(6, 5, "C++");\n    cout << str << endl;  // "Hello C++ Programming"\n    \n    // Replace with substring\n    string replacement = "Amazing C++";\n    str.replace(6, 3, replacement, 8, 3);  // Replace "C++" with "C++" from replacement\n    cout << str << endl;\n    \n    // Replace with characters\n    str.replace(6, 3, 3, \'!\');\n    cout << str << endl;\n    \n    // Replace using iterators\n    str.replace(str.begin(), str.begin() + 5, "Hi");\n    cout << str << endl;\n    \n    return 0;\n}',
  hint: 'replace() has multiple overloads for different content types.'
},
{
  id: 'cpp_strings_13',
  topicId: 'cpp_strings',
  question: 'Erase characters from string using erase() method.',
  mathSolution: 'erase() removes characters from string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello Beautiful World";\n    \n    // Erase from position 6, length 10\n    str.erase(6, 10);\n    cout << "After erase: " << str << endl;  // "Hello World"\n    \n    // Erase single character by position\n    str.erase(5, 1);  // Remove space\n    cout << "After removing space: " << str << endl;  // "HelloWorld"\n    \n    // Erase single character using iterator\n    str.erase(str.begin());\n    cout << "After erasing first char: " << str << endl;\n    \n    // Erase range using iterators\n    str.erase(str.begin(), str.begin() + 3);\n    cout << "After erasing range: " << str << endl;\n    \n    // Clear entire string\n    str.clear();\n    cout << "After clear, empty? " << (str.empty() ? "Yes" : "No") << endl;\n    \n    return 0;\n}',
  hint: 'erase() modifies the original string in place.'
},
{
  id: 'cpp_strings_14',
  topicId: 'cpp_strings',
  question: 'Compare strings using compare() method.',
  mathSolution: 'compare() returns 0 if equal, negative if less, positive if greater.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Apple";\n    string str2 = "Banana";\n    string str3 = "Apple";\n    \n    int result = str1.compare(str2);\n    if (result < 0) {\n        cout << str1 << " comes before " << str2 << endl;\n    } else if (result > 0) {\n        cout << str1 << " comes after " << str2 << endl;\n    } else {\n        cout << str1 << " equals " << str2 << endl;\n    }\n    \n    cout << "Apple compared to Apple: " << str1.compare(str3) << endl;\n    \n    // Compare substrings\n    string text = "Hello World";\n    int cmp = text.compare(0, 5, "Hello");\n    cout << "First 5 chars compare to \'Hello\': " << cmp << endl;\n    \n    // Comparison operators (easier to use)\n    if (str1 == str3) {\n        cout << str1 << " equals " << str3 << " using == operator" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Operator== and != are easier for equality checks; compare() for ordering.'
},
{
  id: 'cpp_strings_15',
  topicId: 'cpp_strings',
  question: 'Convert string to uppercase/lowercase.',
  mathSolution: 'Use transform() with toupper/tolower or loop through string.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++ World";\n    \n    // Convert to uppercase\n    string upper = str;\n    for (char &c : upper) {\n        c = toupper(c);\n    }\n    cout << "Uppercase: " << upper << endl;\n    \n    // Convert to lowercase using transform\n    string lower = str;\n    transform(lower.begin(), lower.end(), lower.begin(), ::tolower);\n    cout << "Lowercase: " << lower << endl;\n    \n    // Alternative using transform\n    string result = str;\n    transform(result.begin(), result.end(), result.begin(), [](unsigned char c) {\n        return toupper(c);\n    });\n    cout << "Using lambda: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Include <algorithm> and <cctype> headers for transform and toupper/tolower.'
},
{
  id: 'cpp_strings_16',
  topicId: 'cpp_strings',
  question: 'Reverse a string using reverse() algorithm.',
  mathSolution: 'reverse() from <algorithm> reverses the string in place.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string str = "Hello World";\n    \n    cout << "Original: " << str << endl;\n    \n    reverse(str.begin(), str.end());\n    cout << "Reversed: " << str << endl;\n    \n    // Check palindrome\n    string palindrome = "racecar";\n    string temp = palindrome;\n    reverse(temp.begin(), temp.end());\n    \n    if (palindrome == temp) {\n        cout << palindrome << " is a palindrome" << endl;\n    }\n    \n    // Reverse part of string\n    string text = "ABCDEFG";\n    reverse(text.begin() + 2, text.end() - 1);\n    cout << "Partial reverse: " << text << endl;\n    \n    return 0;\n}',
  hint: 'reverse() requires #include <algorithm>.'
},
{
  id: 'cpp_strings_17',
  topicId: 'cpp_strings',
  question: 'Convert string to C-style string using c_str().',
  mathSolution: 'c_str() returns const char* for C-string compatibility.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++";\n    \n    // Get C-style string\n    const char* cstr = str.c_str();\n    cout << "C-string: " << cstr << endl;\n    cout << "Length: " << strlen(cstr) << endl;\n    \n    // Using data() (C++11)\n    const char* data = str.data();\n    cout << "Data: " << data << endl;\n    \n    // Copy to character array\n    char buffer[20];\n    str.copy(buffer, 5, 0);\n    buffer[5] = \'\\0\';\n    cout << "Copied: " << buffer << endl;\n    \n    // When using C functions\n    // printf("Using printf: %s\\n", str.c_str());\n    \n    return 0;\n}',
  hint: 'c_str() is useful for functions expecting const char* (like printf).'
},
{
  id: 'cpp_strings_18',
  topicId: 'cpp_strings',
  question: 'Check if string is empty using empty() method.',
  mathSolution: 'empty() returns true if length() == 0.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "";\n    string str2 = "Hello";\n    \n    if (str1.empty()) {\n        cout << "str1 is empty" << endl;\n    }\n    \n    if (!str2.empty()) {\n        cout << "str2 is not empty, length: " << str2.length() << endl;\n    }\n    \n    // Using size() comparison\n    if (str1.size() == 0) {\n        cout << "str1 size is zero" << endl;\n    }\n    \n    // Clearing string makes it empty\n    string text = "Something";\n    cout << "Before clear, empty? " << (text.empty() ? "Yes" : "No") << endl;\n    text.clear();\n    cout << "After clear, empty? " << (text.empty() ? "Yes" : "No") << endl;\n    \n    return 0;\n}',
  hint: 'Always check empty() before accessing characters to avoid undefined behavior.'
},
{
  id: 'cpp_strings_19',
  topicId: 'cpp_strings',
  question: 'Reserve and resize string capacity.',
  mathSolution: 'reserve() pre-allocates memory; resize() changes string size.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    \n    cout << "Initial capacity: " << str.capacity() << endl;\n    \n    str.reserve(100);\n    cout << "After reserving 100: " << str.capacity() << endl;\n    \n    str = "Hello";\n    cout << "String: " << str << ", size: " << str.size() << ", capacity: " << str.capacity() << endl;\n    \n    // Resize to smaller\n    str.resize(3);\n    cout << "After resize to 3: " << str << endl;\n    \n    // Resize to larger (fills with character)\n    str.resize(10, \'*\');\n    cout << "After resize to 10: " << str << endl;\n    \n    // Shrink to fit\n    str.shrink_to_fit();\n    cout << "After shrink_to_fit, capacity: " << str.capacity() << endl;\n    \n    return 0;\n}',
  hint: 'reserve() reduces reallocation; shrink_to_fit() reduces memory usage.'
},
{
  id: 'cpp_strings_20',
  topicId: 'cpp_strings',
  question: 'Swap two strings using swap() method.',
  mathSolution: 'swap() exchanges content of two strings efficiently.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "First";\n    string str2 = "Second";\n    \n    cout << "Before swap:\\n";\n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    \n    str1.swap(str2);\n    \n    cout << "\\nAfter swap:\\n";\n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    \n    // Using standard swap algorithm\n    string a = "Alpha";\n    string b = "Beta";\n    swap(a, b);\n    cout << "\\nAfter std::swap: a=" << a << ", b=" << b << endl;\n    \n    return 0;\n}',
  hint: 'swap() is efficient as it only exchanges pointers, not characters.'
},
{
  id: 'cpp_strings_21',
  topicId: 'cpp_strings',
  question: 'Convert between string and number (stoi, to_string).',
  mathSolution: 'stoi() converts string to int; to_string() converts number to string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // String to number conversions\n    string numStr = "12345";\n    int num = stoi(numStr);\n    long lnum = stol("1234567890");\n    long long llnum = stoll("123456789012345");\n    double dnum = stod("3.14159");\n    float fnum = stof("2.71828");\n    \n    cout << "stoi: " << num << endl;\n    cout << "stol: " << lnum << endl;\n    cout << "stod: " << dnum << endl;\n    \n    // Number to string conversions\n    string intStr = to_string(42);\n    string doubleStr = to_string(3.14159);\n    \n    cout << "to_string(42): \"" << intStr << "\"" << endl;\n    cout << "to_string(3.14159): \"" << doubleStr << "\"" << endl;\n    \n    // Handling invalid conversions\n    try {\n        int invalid = stoi("abc123");\n    } catch (const invalid_argument& e) {\n        cout << "Invalid conversion: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'stoi throws invalid_argument for non-numeric strings.'
},
{
  id: 'cpp_strings_22',
  topicId: 'cpp_strings',
  question: 'Trim whitespace from beginning and end of string.',
  mathSolution: 'Use find_first_not_of and find_last_not_of to find trim positions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring trim(const string& str) {\n    size_t first = str.find_first_not_of(" \\t\\n\\r");\n    if (first == string::npos) return "";\n    size_t last = str.find_last_not_of(" \\t\\n\\r");\n    return str.substr(first, last - first + 1);\n}\n\nstring ltrim(const string& str) {\n    size_t first = str.find_first_not_of(" \\t\\n\\r");\n    if (first == string::npos) return "";\n    return str.substr(first);\n}\n\nstring rtrim(const string& str) {\n    size_t last = str.find_last_not_of(" \\t\\n\\r");\n    if (last == string::npos) return "";\n    return str.substr(0, last + 1);\n}\n\nint main() {\n    string str = "   Hello World   ";\n    \n    cout << "Original: \'" << str << "\'" << endl;\n    cout << "After ltrim: \'" << ltrim(str) << "\'" << endl;\n    cout << "After rtrim: \'" << rtrim(str) << "\'" << endl;\n    cout << "After trim: \'" << trim(str) << "\'" << endl;\n    \n    return 0;\n}',
  hint: 'Trim functions are important for processing user input.'
},
{
  id: 'cpp_strings_23',
  topicId: 'cpp_strings',
  question: 'Split string by delimiter.',
  mathSolution: 'Use find() and substr() to extract substrings.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<string> split(const string& str, char delimiter) {\n    vector<string> tokens;\n    size_t start = 0;\n    size_t end = str.find(delimiter);\n    \n    while (end != string::npos) {\n        tokens.push_back(str.substr(start, end - start));\n        start = end + 1;\n        end = str.find(delimiter, start);\n    }\n    tokens.push_back(str.substr(start));\n    \n    return tokens;\n}\n\nint main() {\n    string str = "apple,banana,orange,grape";\n    \n    vector<string> fruits = split(str, \',\');\n    \n    cout << "Splitting \'" << str << "\':\\n";\n    for (const auto& fruit : fruits) {\n        cout << "  " << fruit << endl;\n    }\n    \n    // CSV parsing\n    string csv = "John,Doe,30,Engineer";\n    vector<string> fields = split(csv, \',\');\n    \n    cout << "\\nCSV fields:\\n";\n    for (const auto& field : fields) {\n        cout << "  " << field << endl;\n    }\n    \n    return 0;\n}',
  hint: 'split() returns vector of substrings separated by delimiter.'
},
{
  id: 'cpp_strings_24',
  topicId: 'cpp_strings',
  question: 'Count occurrences of character in string.',
  mathSolution: 'Iterate through string and count matches.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint countChar(const string& str, char ch) {\n    int count = 0;\n    for (char c : str) {\n        if (c == ch) count++;\n    }\n    return count;\n}\n\nint main() {\n    string text = "Hello World Programming";\n    \n    cout << "Text: " << text << endl;\n    cout << "Count of \'o\': " << countChar(text, \'o\') << endl;\n    cout << "Count of \'l\': " << countChar(text, \'l\') << endl;\n    cout << "Count of \' \' (space): " << countChar(text, \' \') << endl;\n    \n    // Using algorithm\n    int count = count(text.begin(), text.end(), \'o\');\n    cout << "Using count algorithm: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Use std::count from <algorithm> for concise counting.'
},
{
  id: 'cpp_strings_25',
  topicId: 'cpp_strings',
  question: 'Check if string starts with given prefix.',
  mathSolution: 'Use compare() or substr() and compare.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool startsWith(const string& str, const string& prefix) {\n    if (prefix.length() > str.length()) return false;\n    return str.compare(0, prefix.length(), prefix) == 0;\n}\n\nbool endsWith(const string& str, const string& suffix) {\n    if (suffix.length() > str.length()) return false;\n    return str.compare(str.length() - suffix.length(), suffix.length(), suffix) == 0;\n}\n\nint main() {\n    string filename = "document.pdf";\n    \n    if (startsWith(filename, "doc")) {\n        cout << filename << " starts with \'doc\'" << endl;\n    }\n    \n    if (endsWith(filename, ".pdf")) {\n        cout << filename << " is a PDF file" << endl;\n    }\n    \n    string url = "https://example.com";\n    if (startsWith(url, "https://")) {\n        cout << "Secure connection" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'C++20 introduces starts_with() and ends_with() methods.'
},
{
  id: 'cpp_strings_26',
  topicId: 'cpp_strings',
  question: 'Replace all occurrences of substring in string.',
  mathSolution: 'Use find() in loop to replace all occurrences.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring replaceAll(string str, const string& from, const string& to) {\n    size_t pos = 0;\n    while ((pos = str.find(from, pos)) != string::npos) {\n        str.replace(pos, from.length(), to);\n        pos += to.length();\n    }\n    return str;\n}\n\nint main() {\n    string text = "The quick brown fox jumps over the lazy dog. The fox is fast.";\n    \n    cout << "Original: " << text << endl;\n    \n    string modified = replaceAll(text, "fox", "cat");\n    cout << "After replace: " << modified << endl;\n    \n    string code = "var x = 10; var y = 20; var z = x + y;";\n    string modern = replaceAll(code, "var", "let");\n    cout << "Code replace: " << modern << endl;\n    \n    return 0;\n}',
  hint: 'Be careful with overlapping replacements; adjust position accordingly.'
},
{
  id: 'cpp_strings_27',
  topicId: 'cpp_strings',
  question: 'Check if string is palindrome.',
  mathSolution: 'Compare original string with its reverse.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nbool isPalindrome(const string& str) {\n    int left = 0, right = str.length() - 1;\n    while (left < right) {\n        if (tolower(str[left]) != tolower(str[right])) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}\n\nbool isPalindromeIgnoreNonAlpha(const string& str) {\n    int left = 0, right = str.length() - 1;\n    while (left < right) {\n        while (left < right && !isalnum(str[left])) left++;\n        while (left < right && !isalnum(str[right])) right--;\n        if (tolower(str[left]) != tolower(str[right])) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    string words[] = {"racecar", "hello", "A man, a plan, a canal: Panama", "Was it a car or a cat I saw?"};\n    \n    for (const auto& word : words) {\n        cout << "\\"" << word << "\\" ";\n        if (isPalindromeIgnoreNonAlpha(word)) {\n            cout << "is a palindrome" << endl;\n        } else {\n            cout << "is NOT a palindrome" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Handle case-insensitivity and ignore non-alphanumeric characters.'
},
{
  id: 'cpp_strings_28',
  topicId: 'cpp_strings',
  question: 'Count words in a string.',
  mathSolution: 'Count transitions from space to non-space.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint countWords(const string& str) {\n    if (str.empty()) return 0;\n    \n    int count = 0;\n    bool inWord = false;\n    \n    for (char c : str) {\n        if (isspace(c)) {\n            inWord = false;\n        } else {\n            if (!inWord) {\n                count++;\n                inWord = true;\n            }\n        }\n    }\n    return count;\n}\n\nint main() {\n    string sentences[] = {\n        "Hello World",\n        "  This   is   a   test  ",\n        "OneWord",\n        "",\n        "C++ programming is fun!"\n    };\n    \n    for (const auto& sentence : sentences) {\n        cout << "\\"" << sentence << "\\" has " << countWords(sentence) << " words" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Count transitions from whitespace to non-whitespace.'
},
{
  id: 'cpp_strings_29',
  topicId: 'cpp_strings',
  question: 'Find longest word in a string.',
  mathSolution: 'Split string and track maximum length word.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nstring longestWord(const string& str) {\n    stringstream ss(str);\n    string word, longest;\n    \n    while (ss >> word) {\n        if (word.length() > longest.length()) {\n            longest = word;\n        }\n    }\n    return longest;\n}\n\nint main() {\n    string text = "The quick brown fox jumps over the lazy dog";\n    \n    string longest = longestWord(text);\n    cout << "Text: " << text << endl;\n    cout << "Longest word: \'" << longest << "\' (length: " << longest.length() << ")" << endl;\n    \n    string sentence = "C++ programming is an amazing skill";\n    cout << "\\nLongest in \'" << sentence << "\': \'" << longestWord(sentence) << "\'" << endl;\n    \n    return 0;\n}',
  hint: 'Use stringstream to easily split string by spaces.'
},
{
  id: 'cpp_strings_30',
  topicId: 'cpp_strings',
  question: 'Remove duplicate characters from string.',
  mathSolution: 'Use boolean array to track seen characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nstring removeDuplicates(const string& str) {\n    bool seen[256] = {false};\n    string result;\n    \n    for (char c : str) {\n        if (!seen[c]) {\n            seen[c] = true;\n            result += c;\n        }\n    }\n    return result;\n}\n\nint main() {\n    string test = "hello world programming";\n    \n    cout << "Original: " << test << endl;\n    cout << "Without duplicates: " << removeDuplicates(test) << endl;\n    \n    string test2 = "abracadabra";\n    cout << "\\nOriginal: " << test2 << endl;\n    cout << "Without duplicates: " << removeDuplicates(test2) << endl;\n    \n    return 0;\n}',
  hint: 'Use boolean array of size 256 for ASCII characters.'
},
{
  id: 'cpp_strings_31',
  topicId: 'cpp_strings',
  question: 'Check if two strings are anagrams.',
  mathSolution: 'Sort both strings or use frequency array.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool areAnagrams(string str1, string str2) {\n    if (str1.length() != str2.length()) return false;\n    \n    int freq[256] = {0};\n    \n    for (char c : str1) freq[c]++;\n    for (char c : str2) freq[c]--;\n    \n    for (int i = 0; i < 256; i++) {\n        if (freq[i] != 0) return false;\n    }\n    return true;\n}\n\nbool areAnagramsSort(string str1, string str2) {\n    if (str1.length() != str2.length()) return false;\n    sort(str1.begin(), str1.end());\n    sort(str2.begin(), str2.end());\n    return str1 == str2;\n}\n\nint main() {\n    string pairs[][2] = {{"listen", "silent"}, {"hello", "world"}, {"anagram", "nagaram"}};\n    \n    for (auto& pair : pairs) {\n        cout << pair[0] << " and " << pair[1];\n        if (areAnagrams(pair[0], pair[1])) {\n            cout << " are anagrams" << endl;\n        } else {\n            cout << " are NOT anagrams" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Anagrams have same characters with same frequencies.'
},
{
  id: 'cpp_strings_32',
  topicId: 'cpp_strings',
  question: 'Find first non-repeating character in string.',
  mathSolution: 'Use frequency array, then find first with count 1.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nchar firstNonRepeating(const string& str) {\n    int freq[256] = {0};\n    \n    for (char c : str) freq[c]++;\n    \n    for (char c : str) {\n        if (freq[c] == 1) return c;\n    }\n    return \'\\0\';\n}\n\nint main() {\n    string tests[] = {"swiss", "hello", "aabbcc", "racecar"};\n    \n    for (const auto& test : tests) {\n        char result = firstNonRepeating(test);\n        cout << "String: \\"" << test << "\\"\\n";\n        if (result != \'\\0\') {\n            cout << "First non-repeating character: \'" << result << "\'\\n";\n        } else {\n            cout << "No non-repeating character found\\n";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'First pass counts, second pass finds first with count 1.'
},
{
  id: 'cpp_strings_33',
  topicId: 'cpp_strings',
  question: 'Find the most frequent character in string.',
  mathSolution: 'Use frequency array and track maximum.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <climits>\nusing namespace std;\n\npair<char, int> mostFrequent(const string& str) {\n    int freq[256] = {0};\n    \n    for (char c : str) {\n        freq[c]++;\n    }\n    \n    char maxChar = \'\\0\';\n    int maxCount = 0;\n    \n    for (int i = 0; i < 256; i++) {\n        if (freq[i] > maxCount) {\n            maxCount = freq[i];\n            maxChar = static_cast<char>(i);\n        }\n    }\n    \n    return {maxChar, maxCount};\n}\n\nint main() {\n    string text = "Hello World Programming";\n    \n    auto [character, count] = mostFrequent(text);\n    \n    cout << "String: \\"" << text << "\\"\\n";\n    cout << "Most frequent character: \'" << character << "\' (" << count << " times)\\n";\n    \n    string test2 = "abracadabra";\n    auto [ch, cnt] = mostFrequent(test2);\n    cout << "\\nString: \\"" << test2 << "\\"\\n";\n    cout << "Most frequent: \'" << ch << "\' (" << cnt << " times)\\n";\n    \n    return 0;\n}',
  hint: 'Track both character and its count during frequency analysis.'
},
{
  id: 'cpp_strings_34',
  topicId: 'cpp_strings',
  question: 'Convert string to title case (capitalize first letter of each word).',
  mathSolution: 'Capitalize first character of each word.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nstring toTitleCase(string str) {\n    bool newWord = true;\n    \n    for (char &c : str) {\n        if (isspace(c)) {\n            newWord = true;\n        } else if (newWord) {\n            c = toupper(c);\n            newWord = false;\n        } else {\n            c = tolower(c);\n        }\n    }\n    return str;\n}\n\nint main() {\n    string sentences[] = {\n        "hello world",\n        "c++ PROGRAMMING is FUN",\n        "the quick brown fox",\n        "JAVASCRIPT and C++"\n    };\n    \n    for (const auto& sentence : sentences) {\n        cout << "Original: " << sentence << endl;\n        cout << "Title case: " << toTitleCase(sentence) << endl << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Track word boundaries using isspace() to detect new words.'
},
{
  id: 'cpp_strings_35',
  topicId: 'cpp_strings',
  question: 'Toggle case of each character (upper to lower and vice versa).',
  mathSolution: 'Use isupper/islower to determine and toggle.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nstring toggleCase(string str) {\n    for (char &c : str) {\n        if (isupper(c)) {\n            c = tolower(c);\n        } else if (islower(c)) {\n            c = toupper(c);\n        }\n    }\n    return str;\n}\n\nint main() {\n    string text = "Hello World! C++ Programming IS Fun.";\n    \n    cout << "Original: " << text << endl;\n    cout << "Toggled: " << toggleCase(text) << endl;\n    \n    string test2 = "AbCdEfG";\n    cout << "\\nOriginal: " << test2 << endl;\n    cout << "Toggled: " << toggleCase(test2) << endl;\n    \n    return 0;\n}',
  hint: 'Use isupper/islower to check case, then convert accordingly.'
},
{
  id: 'cpp_strings_36',
  topicId: 'cpp_strings',
  question: 'Check if string contains only digits.',
  mathSolution: 'Use isdigit() on each character.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isDigitsOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isdigit(c)) return false;\n    }\n    return true;\n}\n\nbool isAlphaOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isalpha(c)) return false;\n    }\n    return true;\n}\n\nbool isAlnumOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isalnum(c)) return false;\n    }\n    return true;\n}\n\nint main() {\n    string tests[] = {"12345", "12a45", "Hello", "Hello123", "", "   "};\n    \n    for (const auto& test : tests) {\n        cout << "\\"" << test << "\\": ";\n        cout << "digits only? " << (isDigitsOnly(test) ? "Yes" : "No");\n        cout << ", alpha only? " << (isAlphaOnly(test) ? "Yes" : "No");\n        cout << ", alnum only? " << (isAlnumOnly(test) ? "Yes" : "No");\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'cctype functions help validate character types.'
},
{
  id: 'cpp_strings_37',
  topicId: 'cpp_strings',
  question: 'Count vowels and consonants in string.',
  mathSolution: 'Check each character against vowel set.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return (c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\');\n}\n\nvoid countVowelsConsonants(const string& str, int& vowels, int& consonants) {\n    vowels = 0;\n    consonants = 0;\n    \n    for (char c : str) {\n        if (isalpha(c)) {\n            if (isVowel(c)) {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        }\n    }\n}\n\nint main() {\n    string text = "Hello World! C++ Programming is Awesome.";\n    \n    int vowels, consonants;\n    countVowelsConsonants(text, vowels, consonants);\n    \n    cout << "Text: " << text << endl;\n    cout << "Vowels: " << vowels << endl;\n    cout << "Consonants: " << consonants << endl;\n    cout << "Total letters: " << vowels + consonants << endl;\n    \n    return 0;\n}',
  hint: 'Only count alphabetic characters, ignore punctuation and spaces.'
},
{
  id: 'cpp_strings_38',
  topicId: 'cpp_strings',
  question: 'Find all occurrences of substring and their positions.',
  mathSolution: 'Use find() in loop to collect positions.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<size_t> findAllOccurrences(const string& str, const string& sub) {\n    vector<size_t> positions;\n    size_t pos = 0;\n    \n    while ((pos = str.find(sub, pos)) != string::npos) {\n        positions.push_back(pos);\n        pos += sub.length();\n    }\n    return positions;\n}\n\nint main() {\n    string text = "the cat in the hat sat on the mat";\n    string search = "the";\n    \n    vector<size_t> positions = findAllOccurrences(text, search);\n    \n    cout << "Text: \\"" << text << "\\"\\n";\n    cout << "Searching for: \\"" << search << "\\"\\n";\n    cout << "Found at positions: ";\n    for (size_t pos : positions) {\n        cout << pos << " ";\n    }\n    cout << "\\nTotal occurrences: " << positions.size() << endl;\n    \n    // Show context for each occurrence\n    cout << "\\nContext around matches:\\n";\n    for (size_t pos : positions) {\n        size_t start = (pos > 10) ? pos - 10 : 0;\n        size_t len = min(30, text.length() - start);\n        cout << "  ..." << text.substr(start, len) << "..." << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Store results in vector for further processing.'
},
{
  id: 'cpp_strings_39',
  topicId: 'cpp_strings',
  question: 'Implement string compression using run-length encoding.',
  mathSolution: 'Count consecutive identical characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring compressString(const string& str) {\n    if (str.empty()) return "";\n    \n    string compressed;\n    int count = 1;\n    \n    for (size_t i = 1; i <= str.length(); i++) {\n        if (i < str.length() && str[i] == str[i - 1]) {\n            count++;\n        } else {\n            compressed += str[i - 1];\n            if (count > 1) {\n                compressed += to_string(count);\n            }\n            count = 1;\n        }\n    }\n    \n    return compressed;\n}\n\nint main() {\n    string tests[] = {"aaabbcccc", "abcd", "aabbbcccaaa", "wwwwaaadexxxxxx"};\n    \n    for (const auto& test : tests) {\n        string compressed = compressString(test);\n        cout << "Original: " << test << endl;\n        cout << "Compressed: " << compressed << endl;\n        cout << "Compression ratio: " << (double)compressed.length() / test.length() << endl;\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Run-length encoding is useful for repetitive data.'
},
{
  id: 'cpp_strings_40',
  topicId: 'cpp_strings',
  question: 'Decompress run-length encoded string.',
  mathSolution: 'Read character and following number count.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\n// Forward declaration of compressString (if needed, but typically defined elsewhere)\n// string compressString(const string& str);\n\nstring decompressString(const string& compressed) {\n    string decompressed;\n    \n    for (size_t i = 0; i < compressed.length(); i++) {\n        char c = compressed[i];\n        \n        if (i + 1 < compressed.length() && isdigit(compressed[i + 1])) {\n            int count = compressed[i + 1] - \'0\';\n            decompressed.append(count, c);\n            i++;  // Skip the digit\n        } else {\n            decompressed += c;\n        }\n    }\n    return decompressed;\n}\n\n// Example compressString for completeness\nstring compressStringExample(const string& str) {\n    if (str.empty()) return "";\n    string compressed;\n    int count = 1;\n    for (size_t i = 1; i <= str.length(); i++) {\n        if (i < str.length() && str[i] == str[i - 1]) count++;\n        else {\n            compressed += str[i - 1];\n            if (count > 1) compressed += to_string(count);\n            count = 1;\n        }\n    }\n    return compressed;\n}\n\nint main() {\n    string tests[] = {"a3b2c4", "a1b1c1d1", "w4a3d1e1x6", "abc3"};\n    \n    for (const auto& compressed : tests) {\n        string decompressed = decompressString(compressed);\n        cout << "Compressed: " << compressed << endl;\n        cout << "Decompressed: " << decompressed << endl;\n        \n        // Re-compress to verify\n        string recompressed = compressStringExample(decompressed);\n        cout << "Re-compressed: " << recompressed << endl;\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Assume count is single digit for simplicity; multi-digit requires parsing.'
},
{
  id: 'cpp_strings_41',
  topicId: 'cpp_strings',
  question: 'Find the longest common prefix among strings.',
  mathSolution: 'Compare characters across strings until mismatch.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstring longestCommonPrefix(const vector<string>& strs) {\n    if (strs.empty()) return "";\n    \n    for (size_t i = 0; i < strs[0].length(); i++) {\n        char current = strs[0][i];\n        for (size_t j = 1; j < strs.size(); j++) {\n            if (i >= strs[j].length() || strs[j][i] != current) {\n                return strs[0].substr(0, i);\n            }\n        }\n    }\n    return strs[0];\n}\n\nint main() {\n    vector<vector<string>> testCases = {\n        {"flower", "flow", "flight"},\n        {"dog", "racecar", "car"},\n        {"apple", "apricot", "april"},\n        {"prefix", "pre", "premier"}\n    };\n    \n    for (const auto& strs : testCases) {\n        cout << "Strings: ";\n        for (const auto& s : strs) cout << s << " ";\n        cout << endl;\n        cout << "Longest common prefix: " << longestCommonPrefix(strs) << endl << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Compare each character position across all strings.'
},
{
  id: 'cpp_strings_42',
  topicId: 'cpp_strings',
  question: 'Find the longest palindromic substring.',
  mathSolution: 'Expand around center for odd and even length palindromes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring longestPalindrome(const string& s) {\n    if (s.empty()) return "";\n    \n    int start = 0, maxLen = 1;\n    \n    auto expandAroundCenter = [&](int left, int right) {\n        while (left >= 0 && right < s.length() && s[left] == s[right]) {\n            left--;\n            right++;\n        }\n        int len = right - left - 1;\n        if (len > maxLen) {\n            maxLen = len;\n            start = left + 1;\n        }\n    };\n    \n    for (int i = 0; i < s.length(); i++) {\n        expandAroundCenter(i, i);     // Odd length\n        expandAroundCenter(i, i + 1); // Even length\n    }\n    \n    return s.substr(start, maxLen);\n}\n\nint main() {\n    string tests[] = {"babad", "cbbd", "a", "ac", "racecar", "abcdef"};\n    \n    for (const auto& test : tests) {\n        string palindrome = longestPalindrome(test);\n        cout << "String: \\"" << test << "\\"\\n";\n        cout << "Longest palindrome: \\"" << palindrome << "\\" (length: " << palindrome.length() << ")\\n\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Expand from each character and between characters for even length.'
},
{
  id: 'cpp_strings_43',
  topicId: 'cpp_strings',
  question: 'Check if string is a valid parentheses sequence.',
  mathSolution: 'Use stack to track opening brackets.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nbool isValidParentheses(const string& s) {\n    stack<char> st;\n    \n    for (char c : s) {\n        if (c == \'(\' || c == \'{\' || c == \'[\') {\n            st.push(c);\n        } else {\n            if (st.empty()) return false;\n            \n            char top = st.top();\n            if ((c == \')\' && top != \'(\') ||\n                (c == \'}\' && top != \'{\') ||\n                (c == \']\' && top != \'[\')) {\n                return false;\n            }\n            st.pop();\n        }\n    }\n    \n    return st.empty();\n}\n\nint main() {\n    string tests[] = {"()", "()[]{}", "(]", "([)]", "{[]}", "((()))", "((()"};\n    \n    for (const auto& test : tests) {\n        cout << "\"" << test << "\": ";\n        if (isValidParentheses(test)) {\n            cout << "Valid" << endl;\n        } else {\n            cout << "Invalid" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Stack ensures proper nesting of parentheses.'
},
{
  id: 'cpp_strings_44',
  topicId: 'cpp_strings',
  question: 'Implement string rotation check (if one string is rotation of another).',
  mathSolution: 'Check if string is substring of concatenated string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool areRotations(const string& str1, const string& str2) {\n    if (str1.length() != str2.length()) return false;\n    if (str1.empty()) return true;\n    \n    string concatenated = str1 + str1;\n    return concatenated.find(str2) != string::npos;\n}\n\nint main() {\n    pair<string, string> tests[] = {\n        {"abcd", "cdab"},\n        {"abcde", "cdeab"},\n        {"hello", "llohe"},\n        {"hello", "world"},\n        {"abca", "caab"},\n        {"", ""}\n    };\n    \n    for (const auto& [str1, str2] : tests) {\n        cout << str1 << " and " << str2 << " are ";\n        if (areRotations(str1, str2)) {\n            cout << "rotations" << endl;\n        } else {\n            cout << "NOT rotations" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'A rotation of s is a substring of s+s.'
},
{
  id: 'cpp_strings_45',
  topicId: 'cpp_strings',
  question: 'Remove all spaces from string.',
  mathSolution: 'Use erase-remove idiom or loop to copy non-space chars.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nstring removeSpaces(string str) {\n    str.erase(remove(str.begin(), str.end(), \' \'), str.end());\n    return str;\n}\n\nstring removeAllWhitespace(string str) {\n    str.erase(remove_if(str.begin(), str.end(), ::isspace), str.end());\n    return str;\n}\n\nint main() {\n    string text = "  Hello   World  C++  Programming  ";\n    \n    cout << "Original: \\"" << text << "\\"" << endl;\n    cout << "After removing spaces: \\"" << removeSpaces(text) << "\\"" << endl;\n    \n    string text2 = " Hello\\tWorld\\nC++\\rProgramming ";\n    cout << "\\nOriginal: \\"" << text2 << "\\"" << endl;\n    cout << "After removing all whitespace: \\"" << removeAllWhitespace(text2) << "\\"" << endl;\n    \n    return 0;\n}',
  hint: 'Use erase-remove idiom for efficient in-place removal.'
},
{
  id: 'cpp_strings_46',
  topicId: 'cpp_strings',
  question: 'Check if string contains only unique characters.',
  mathSolution: 'Use set or boolean array to track seen characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nbool hasAllUniqueChars(const string& str) {\n    if (str.length() > 256) return false;\n    \n    bool seen[256] = {false};\n    \n    for (char c : str) {\n        if (seen[c]) return false;\n        seen[c] = true;\n    }\n    return true;\n}\n\nint main() {\n    string tests[] = {"abcde", "hello", "world", "abcdefghijklmnopqrstuvwxyz", "AaBbCc"};\n    \n    for (const auto& test : tests) {\n        cout << "\\"" << test << "\\" ";\n        if (hasAllUniqueChars(test)) {\n            cout << "has all unique characters" << endl;\n        } else {\n            cout << "has duplicate characters" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'ASCII has 256 characters; longer strings must have duplicates.'
},
{
  id: 'cpp_strings_47',
  topicId: 'cpp_strings',
  question: 'Find the longest substring without repeating characters.',
  mathSolution: 'Use sliding window with hash map to track character positions.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLongestSubstring(const string& s) {\n    unordered_map<char, int> lastIndex;\n    int maxLen = 0;\n    int start = 0;\n    \n    for (int end = 0; end < s.length(); end++) {\n        char c = s[end];\n        if (lastIndex.find(c) != lastIndex.end() && lastIndex[c] >= start) {\n            start = lastIndex[c] + 1;\n        }\n        lastIndex[c] = end;\n        maxLen = max(maxLen, end - start + 1);\n    }\n    return maxLen;\n}\n\nint main() {\n    string tests[] = {"abcabcbb", "bbbbb", "pwwkew", "", "abcdefgh", "dvdf"};\n    \n    for (const auto& test : tests) {\n        int len = lengthOfLongestSubstring(test);\n        cout << "Input: \\"" << test << "\\" => " << len << "\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Sliding window expands and shrinks to maintain unique characters.'
},
{
  id: 'cpp_strings_48',
  topicId: 'cpp_strings',
  question: 'Convert string to integer (atoi implementation).',
  mathSolution: 'Handle leading spaces, sign, overflow, and non-digit characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <climits>\n#include <cctype>\nusing namespace std;\n\nint myAtoi(const string& str) {\n    int i = 0;\n    int n = str.length();\n    \n    // Skip leading whitespace\n    while (i < n && isspace(str[i])) i++;\n    \n    // Check sign\n    int sign = 1;\n    if (i < n && (str[i] == \'+\' || str[i] == \'-\')) {\n        if (str[i] == \'-\') sign = -1;\n        i++;\n    }\n    \n    // Convert digits\n    long long result = 0;\n    while (i < n && isdigit(str[i])) {\n        result = result * 10 + (str[i] - \'0\');\n        \n        // Check overflow\n        if (result * sign > INT_MAX) return INT_MAX;\n        if (result * sign < INT_MIN) return INT_MIN;\n        \n        i++;\n    }\n    \n    return result * sign;\n}\n\nint main() {\n    string tests[] = {"42", "   -42", "4193 with words", "words and 987", "-91283472332", "+123", "", "    "};\n    \n    for (const auto& test : tests) {\n        int result = myAtoi(test);\n        cout << "\\"" << test << "\\" => " << result << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Handle overflow using long long and check against INT_MAX/INT_MIN.'
},
{
  id: 'cpp_strings_49',
  topicId: 'cpp_strings',
  question: 'Implement wildcard pattern matching with \'*\' and \'?\'.',
  mathSolution: 'Use two-pointer technique or dynamic programming.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isMatch(const string& str, const string& pattern) {\n    int s = 0, p = 0;\n    int starIndex = -1, matchIndex = 0;\n    \n    while (s < str.length()) {\n        if (p < pattern.length() && (pattern[p] == \'?\' || pattern[p] == str[s])) {\n            s++;\n            p++;\n        } else if (p < pattern.length() && pattern[p] == \'*\') {\n            starIndex = p;\n            matchIndex = s;\n            p++;\n        } else if (starIndex != -1) {\n            p = starIndex + 1;\n            matchIndex++;\n            s = matchIndex;\n        } else {\n            return false;\n        }\n    }\n    \n    while (p < pattern.length() && pattern[p] == \'*\') p++;\n    return p == pattern.length();\n}\n\nint main() {\n    pair<string, string> tests[] = {\n        {"aa", "a"}, {"aa", "*"}, {"cb", "?a"}, {"adceb", "*a*b"},\n        {"acdcb", "a*c?b"}, {"mississippi", "m*?si*"}\n    };\n    \n    for (const auto& [str, pattern] : tests) {\n        cout << "String: \\"" << str << "\\", Pattern: \\"" << pattern << "\\" => ";\n        if (isMatch(str, pattern)) {\n            cout << "Match" << endl;\n        } else {\n            cout << "No match" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: '* matches zero or more characters; ? matches exactly one character.'
},
{
  id: 'cpp_strings_50',
  topicId: 'cpp_strings',
  question: 'Complete string manipulation program combining multiple operations.',
  mathSolution: 'Demonstrate various string operations in a single program.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <cctype>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    cout << "=== String Manipulation Toolkit ===\\n\\n";\n    \n    string text;\n    cout << "Enter a string: ";\n    getline(cin, text);\n    \n    // 1. Basic info\n    cout << "\\n--- Basic Information ---\\n";\n    cout << "Original: \"" << text << "\"\\n";\n    cout << "Length: " << text.length() << " characters\\n";\n    cout << "Empty? " << (text.empty() ? "Yes" : "No") << "\\n";\n    \n    // 2. Case conversion\n    string upper = text;\n    string lower = text;\n    transform(upper.begin(), upper.end(), upper.begin(), ::toupper);\n    transform(lower.begin(), lower.end(), lower.begin(), ::tolower);\n    cout << "\\n--- Case Conversion ---\\n";\n    cout << "Uppercase: " << upper << "\\n";\n    cout << "Lowercase: " << lower << "\\n";\n    \n    // 3. Reverse\n    string reversed = text;\n    reverse(reversed.begin(), reversed.end());\n    cout << "\\n--- Reverse ---\\n";\n    cout << "Reversed: " << reversed << "\\n";\n    \n    // 4. Character counts\n    int letters = 0, digits = 0, spaces = 0, punctuation = 0;\n    for (char c : text) {\n        if (isalpha(c)) letters++;\n        else if (isdigit(c)) digits++;\n        else if (isspace(c)) spaces++;\n        else punctuation++;\n    }\n    cout << "\\n--- Character Counts ---\\n";\n    cout << "Letters: " << letters << "\\n";\n    cout << "Digits: " << digits << "\\n";\n    cout << "Spaces: " << spaces << "\\n";\n    cout << "Punctuation/Special: " << punctuation << "\\n";\n    \n    // 5. Word count\n    int words = 0;\n    bool inWord = false;\n    for (char c : text) {\n        if (isspace(c)) inWord = false;\n        else if (!inWord) { words++; inWord = true; }\n    }\n    cout << "\\n--- Statistics ---\\n";\n    cout << "Words: " << words << "\\n";\n    \n    // 6. Remove duplicates\n    bool seen[256] = {false};\n    string unique;\n    for (char c : text) {\n        if (!seen[c]) {\n            seen[c] = true;\n            unique += c;\n        }\n    }\n    cout << "Unique characters: \"" << unique << "\"\\n";\n    \n    // 7. Palindrome check\n    string clean;\n    for (char c : text) {\n        if (isalnum(c)) clean += tolower(c);\n    }\n    string revClean = clean;\n    reverse(revClean.begin(), revClean.end());\n    cout << "Is palindrome? " << (clean == revClean ? "Yes" : "No") << "\\n";\n    \n    // 8. Substring search\n    string search;\n    cout << "\\n--- Search ---\\n";\n    cout << "Enter substring to search: ";\n    getline(cin, search);\n    \n    size_t pos = text.find(search);\n    if (pos != string::npos) {\n        cout << "Found at position " << pos << "\\n";\n        \n        // Find all occurrences\n        vector<size_t> positions;\n        size_t current = 0;\n        while ((current = text.find(search, current)) != string::npos) {\n            positions.push_back(current);\n            current += search.length();\n        }\n        if (positions.size() > 1) {\n            cout << "Found " << positions.size() << " occurrences at: ";\n            for (size_t p : positions) cout << p << " ";\n            cout << "\\n";\n        }\n    } else {\n        cout << "Not found\\n";\n    }\n    \n    // 9. Replacement\n    string from, to;\n    cout << "\\n--- Replace ---\\n";\n    cout << "Replace what? ";\n    getline(cin, from);\n    cout << "Replace with? ";\n    getline(cin, to);\n    \n    string replaced = text;\n    size_t start = 0;\n    while ((start = replaced.find(from, start)) != string::npos) {\n        replaced.replace(start, from.length(), to);\n        start += to.length();\n    }\n    cout << "Result: " << replaced << "\\n";\n    \n    // 10. Split by delimiter\n    char delim;\n    cout << "\\n--- Split ---\\n";\n    cout << "Enter delimiter character: ";\n    cin >> delim;\n    cin.ignore(); // Ignore newline after reading delimiter\n    \n    vector<string> tokens;\n    stringstream ss(text);\n    string token;\n    while (getline(ss, token, delim)) {\n        tokens.push_back(token);\n    }\n    cout << "Split into " << tokens.size() << " parts:\\n";\n    for (size_t i = 0; i < tokens.size(); i++) {\n        cout << "  " << i << ": \"" << tokens[i] << "\"\\n";\n    }\n    \n    cout << "\\n=== End of Demonstration ===\\n";\n    \n    return 0;\n}',
  hint: 'This comprehensive example shows many string operations in one program.'
}
);