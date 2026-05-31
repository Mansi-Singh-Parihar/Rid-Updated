QuizData.questions.push(
{
  id: 'js_strings_1',
  topicId: 'js_strings',
  question: 'Create a string using single quotes.',
  mathSolution: 'Use single quotes to define string literal.',
  codeSolution: 'const message = \'Hello World\';\nconsole.log(message);  // Hello World',
  hint: 'Strings can use single quotes (\').'
},
{
  id: 'js_strings_2',
  topicId: 'js_strings',
  question: 'Create a string using double quotes.',
  mathSolution: 'Use double quotes to define string literal.',
  codeSolution: 'const message = "Hello World";\nconsole.log(message);  // Hello World',
  hint: 'Strings can use double quotes (").'
},
{
  id: 'js_strings_3',
  topicId: 'js_strings',
  question: 'Create a string using backticks (template literals).',
  mathSolution: 'Use backticks for template literals.',
  codeSolution: 'const message = `Hello World`;\nconsole.log(message);  // Hello World',
  hint: 'Template literals use backticks (`).'
},
{
  id: 'js_strings_4',
  topicId: 'js_strings',
  question: 'Get length of a string using length property.',
  mathSolution: 'length property returns number of characters.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.length);  // 10',
  hint: 'Use `string.length` property.'
},
{
  id: 'js_strings_5',
  topicId: 'js_strings',
  question: 'Access character at specific index using bracket notation.',
  mathSolution: 'Use [index] to access character (0-indexed).',
  codeSolution: 'const str = "Hello";\nconsole.log(str[0]);  // H\nconsole.log(str[4]);  // o',
  hint: 'Strings are zero-indexed like arrays.'
},
{
  id: 'js_strings_6',
  topicId: 'js_strings',
  question: 'Access character using charAt() method.',
  mathSolution: 'charAt() returns character at specified index.',
  codeSolution: 'const str = "Hello";\nconsole.log(str.charAt(1));  // e\nconsole.log(str.charAt(10)); // "" (empty string)',
  hint: '`charAt()` returns empty string for invalid index.'
},
{
  id: 'js_strings_7',
  topicId: 'js_strings',
  question: 'Convert string to uppercase using toUpperCase() method.',
  mathSolution: 'toUpperCase() returns new uppercase string.',
  codeSolution: 'const str = "Hello World";\nconst upper = str.toUpperCase();\nconsole.log(upper);  // HELLO WORLD',
  hint: '`toUpperCase()` doesn\'t modify original string.'
},
{
  id: 'js_strings_8',
  topicId: 'js_strings',
  question: 'Convert string to lowercase using toLowerCase() method.',
  mathSolution: 'toLowerCase() returns new lowercase string.',
  codeSolution: 'const str = "HELLO WORLD";\nconst lower = str.toLowerCase();\nconsole.log(lower);  // hello world',
  hint: '`toLowerCase()` returns new string.'
},
{
  id: 'js_strings_9',
  topicId: 'js_strings',
  question: 'Concatenate strings using + operator.',
  mathSolution: '+ operator joins strings together.',
  codeSolution: 'const firstName = "John";\nconst lastName = "Doe";\nconst fullName = firstName + " " + lastName;\nconsole.log(fullName);  // John Doe',
  hint: 'Use `+` to combine strings.'
},
{
  id: 'js_strings_10',
  topicId: 'js_strings',
  question: 'Concatenate strings using concat() method.',
  mathSolution: 'concat() joins strings and returns new string.',
  codeSolution: 'const str1 = "Hello";\nconst str2 = "World";\nconst result = str1.concat(" ", str2);\nconsole.log(result);  // Hello World',
  hint: '`concat()` can take multiple arguments.'
},
{
  id: 'js_strings_11',
  topicId: 'js_strings',
  question: 'Use template literals for string interpolation.',
  mathSolution: 'Embed expressions using ${} in backticks.',
  codeSolution: 'const name = "Alice";\nconst age = 25;\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);  // My name is Alice and I am 25 years old.',
  hint: 'Use `${variable}` inside backticks.'
},
{
  id: 'js_strings_12',
  topicId: 'js_strings',
  question: 'Use template literals for multi-line strings.',
  mathSolution: 'Backticks preserve line breaks.',
  codeSolution: 'const multiLine = `This is line 1\nThis is line 2\nThis is line 3`;\nconsole.log(multiLine);\n// This is line 1\n// This is line 2\n// This is line 3',
  hint: 'Line breaks are preserved in template literals.'
},
{
  id: 'js_strings_13',
  topicId: 'js_strings',
  question: 'Find index of substring using indexOf() method.',
  mathSolution: 'indexOf() returns first occurrence index or -1.',
  codeSolution: 'const str = "Hello World Hello";\nconsole.log(str.indexOf("World"));  // 6\nconsole.log(str.indexOf("xyz"));    // -1',
  hint: '`indexOf()` returns -1 if not found.'
},
{
  id: 'js_strings_14',
  topicId: 'js_strings',
  question: 'Find last index of substring using lastIndexOf() method.',
  mathSolution: 'lastIndexOf() returns last occurrence index.',
  codeSolution: 'const str = "Hello World Hello";\nconsole.log(str.lastIndexOf("Hello"));  // 12\nconsole.log(str.lastIndexOf("World"));  // 6',
  hint: '`lastIndexOf()` searches from end.'
},
{
  id: 'js_strings_15',
  topicId: 'js_strings',
  question: 'Check if string includes substring using includes() method.',
  mathSolution: 'includes() returns true/false.',
  codeSolution: 'const str = "JavaScript is awesome";\nconsole.log(str.includes("Script"));  // true\nconsole.log(str.includes("Python"));  // false',
  hint: '`includes()` returns boolean.'
},
{
  id: 'js_strings_16',
  topicId: 'js_strings',
  question: 'Check if string starts with substring using startsWith() method.',
  mathSolution: 'startsWith() checks beginning of string.',
  codeSolution: 'const str = "Hello World";\nconsole.log(str.startsWith("Hello"));  // true\nconsole.log(str.startsWith("World"));  // false',
  hint: '`startsWith()` checks the beginning.'
},
{
  id: 'js_strings_17',
  topicId: 'js_strings',
  question: 'Check if string ends with substring using endsWith() method.',
  mathSolution: 'endsWith() checks end of string.',
  codeSolution: 'const str = "Hello World";\nconsole.log(str.endsWith("World"));  // true\nconsole.log(str.endsWith("Hello"));  // false',
  hint: '`endsWith()` checks the ending.'
},
{
  id: 'js_strings_18',
  topicId: 'js_strings',
  question: 'Extract substring using slice() method.',
  mathSolution: 'slice(start, end) returns substring (end not included).',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.slice(0, 4));   // Java\nconsole.log(str.slice(4));      // Script\nconsole.log(str.slice(-6));     // Script (negative index)',
  hint: '`slice()` supports negative indexes.'
},
{
  id: 'js_strings_19',
  topicId: 'js_strings',
  question: 'Extract substring using substring() method.',
  mathSolution: 'substring(start, end) similar to slice but no negatives.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.substring(0, 4));   // Java\nconsole.log(str.substring(4));      // Script\nconsole.log(str.substring(4, 0));   // Java (swaps indexes)',
  hint: '`substring()` swaps if start > end.'
},
{
  id: 'js_strings_20',
  topicId: 'js_strings',
  question: 'Extract substring using substr() method (deprecated but still used).',
  mathSolution: 'substr(start, length) extracts based on length.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.substr(4, 6));   // Script\nconsole.log(str.substr(-6, 6));  // Script (negative start)',
  hint: '`substr()` takes length, not end index.'
},
{
  id: 'js_strings_21',
  topicId: 'js_strings',
  question: 'Split string into array using split() method.',
  mathSolution: 'split(separator) divides string into array.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]\nconst chars = "hello".split("");\nconsole.log(chars);   // ["h","e","l","l","o"]',
  hint: '`split()` converts string to array.'
},
{
  id: 'js_strings_22',
  topicId: 'js_strings',
  question: 'Replace first occurrence using replace() method.',
  mathSolution: 'replace(search, replacement) replaces first match.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replace("Hello", "Hi");\nconsole.log(replaced);  // Hi World Hello',
  hint: '`replace()` only replaces first match by default.'
},
{
  id: 'js_strings_23',
  topicId: 'js_strings',
  question: 'Replace all occurrences using replaceAll() method.',
  mathSolution: 'replaceAll() replaces all matches.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replaceAll("Hello", "Hi");\nconsole.log(replaced);  // Hi World Hi',
  hint: '`replaceAll()` replaces every occurrence.'
},
{
  id: 'js_strings_24',
  topicId: 'js_strings',
  question: 'Replace using regular expression with global flag.',
  mathSolution: 'Use /pattern/g in replace() for all matches.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replace(/Hello/g, "Hi");\nconsole.log(replaced);  // Hi World Hi',
  hint: 'Use `/pattern/g` for global replacement.'
},
{
  id: 'js_strings_25',
  topicId: 'js_strings',
  question: 'Remove whitespace from both ends using trim() method.',
  mathSolution: 'trim() removes leading/trailing whitespace.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trim();\nconsole.log(trimmed);  // "Hello World"',
  hint: '`trim()` removes spaces, tabs, newlines.'
},
{
  id: 'js_strings_26',
  topicId: 'js_strings',
  question: 'Remove whitespace from start using trimStart() method.',
  mathSolution: 'trimStart() removes leading whitespace only.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trimStart();\nconsole.log(trimmed);  // "Hello World  "',
  hint: '`trimStart()` removes only leading spaces.'
},
{
  id: 'js_strings_27',
  topicId: 'js_strings',
  question: 'Remove whitespace from end using trimEnd() method.',
  mathSolution: 'trimEnd() removes trailing whitespace only.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trimEnd();\nconsole.log(trimmed);  // "  Hello World"',
  hint: '`trimEnd()` removes only trailing spaces.'
},
{
  id: 'js_strings_28',
  topicId: 'js_strings',
  question: 'Repeat string multiple times using repeat() method.',
  mathSolution: 'repeat(count) returns string repeated count times.',
  codeSolution: 'const str = "Ha";\nconsole.log(str.repeat(3));  // HaHaHa\nconsole.log("=".repeat(10)); // ==========',
  hint: '`repeat()` multiplies the string.'
},
{
  id: 'js_strings_29',
  topicId: 'js_strings',
  question: 'Pad string to certain length from start using padStart().',
  mathSolution: 'padStart(targetLength, padString) pads at beginning.',
  codeSolution: 'const str = "5";\nconsole.log(str.padStart(3, "0"));  // "005"\nconsole.log("123".padStart(5, "*")); // "**123"',
  hint: '`padStart()` adds characters to the left.'
},
{
  id: 'js_strings_30',
  topicId: 'js_strings',
  question: 'Pad string to certain length from end using padEnd().',
  mathSolution: 'padEnd(targetLength, padString) pads at end.',
  codeSolution: 'const str = "5";\nconsole.log(str.padEnd(3, "0"));  // "500"\nconsole.log("123".padEnd(5, "*")); // "123**"',
  hint: '`padEnd()` adds characters to the right.'
},
{
  id: 'js_strings_31',
  topicId: 'js_strings',
  question: 'Extract character code using charCodeAt() method.',
  mathSolution: 'charCodeAt() returns Unicode of character.',
  codeSolution: 'const str = "ABC";\nconsole.log(str.charCodeAt(0));  // 65 (A)\nconsole.log(str.charCodeAt(1));  // 66 (B)\nconsole.log(str.charCodeAt(2));  // 67 (C)',
  hint: '`charCodeAt()` returns UTF-16 code unit.'
},
{
  id: 'js_strings_32',
  topicId: 'js_strings',
  question: 'Create character from Unicode using fromCharCode() method.',
  mathSolution: 'String.fromCharCode() converts code to character.',
  codeSolution: 'console.log(String.fromCharCode(65));   // A\nconsole.log(String.fromCharCode(66, 67)); // BC\nconst word = String.fromCharCode(72, 101, 108, 108, 111);\nconsole.log(word);  // Hello',
  hint: '`String.fromCharCode()` is a static method.'
},
{
  id: 'js_strings_33',
  topicId: 'js_strings',
  question: 'Check if string contains only whitespace using trim().',
  mathSolution: 'Check if trimmed string is empty.',
  codeSolution: 'function isBlank(str) {\n    return str.trim() === "";\n}\nconsole.log(isBlank("   "));   // true\nconsole.log(isBlank("Hello")); // false',
  hint: '`trim().length === 0` checks for only spaces.'
},
{
  id: 'js_strings_34',
  topicId: 'js_strings',
  question: 'Reverse a string using split(), reverse(), join().',
  mathSolution: 'Convert to array, reverse, join back.',
  codeSolution: 'const str = "hello";\nconst reversed = str.split("").reverse().join("");\nconsole.log(reversed);  // "olleh"',
  hint: '`split("")` → array → `reverse()` → `join("")`'
},
{
  id: 'js_strings_35',
  topicId: 'js_strings',
  question: 'Check if string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'function isPalindrome(str) {\n    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n    return cleaned === cleaned.split("").reverse().join("");\n}\nconsole.log(isPalindrome("racecar"));  // true\nconsole.log(isPalindrome("hello"));    // false',
  hint: 'Remove non-alphanumeric characters and compare.'
},
{
  id: 'js_strings_36',
  topicId: 'js_strings',
  question: 'Count occurrences of substring in string.',
  mathSolution: 'Use split() or indexOf in loop.',
  codeSolution: 'function countOccurrences(str, sub) {\n    return str.split(sub).length - 1;\n}\nconsole.log(countOccurrences("hello hello hello", "hello"));  // 3\nconsole.log(countOccurrences("mississippi", "ss"));  // 2',
  hint: '`split(sub).length - 1` counts occurrences.'
},
{
  id: 'js_strings_37',
  topicId: 'js_strings',
  question: 'Capitalize first letter of string.',
  mathSolution: 'Extract first char, uppercase, then add rest.',
  codeSolution: 'function capitalize(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();\n}\nconsole.log(capitalize("hello"));   // Hello\nconsole.log(capitalize("WORLD"));   // World',
  hint: 'Use `charAt(0).toUpperCase() + slice(1).toLowerCase()`.'
},
{
  id: 'js_strings_38',
  topicId: 'js_strings',
  question: 'Capitalize first letter of each word in string.',
  mathSolution: 'Split into words, capitalize each, join back.',
  codeSolution: 'function capitalizeWords(str) {\n    return str.split(" ").map(word => \n        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()\n    ).join(" ");\n}\nconsole.log(capitalizeWords("hello world javascript"));  // Hello World Javascript',
  hint: 'Split by space, map capitalize, join.'
},
{
  id: 'js_strings_39',
  topicId: 'js_strings',
  question: 'Count vowels in a string.',
  mathSolution: 'Check each character against vowel set.',
  codeSolution: 'function countVowels(str) {\n    const vowels = "aeiouAEIOU";\n    let count = 0;\n    for (let char of str) {\n        if (vowels.includes(char)) count++;\n    }\n    return count;\n}\nconsole.log(countVowels("Hello World"));  // 3 (e, o, o)\nconsole.log(countVowels("JavaScript"));   // 3 (a, a, i)',
  hint: 'Use `includes()` to check for vowels.'
},
{
  id: 'js_strings_40',
  topicId: 'js_strings',
  question: 'Remove all spaces from string.',
  mathSolution: 'Use replaceAll() or split/join.',
  codeSolution: 'const str = "Hello World JavaScript";\nconst noSpaces = str.replaceAll(" ", "");\nconsole.log(noSpaces);  // HelloWorldJavaScript\n\n// Using split/join\nconst noSpaces2 = str.split(" ").join("");\nconsole.log(noSpaces2);  // HelloWorldJavaScript',
  hint: '`replaceAll(" ", "")` removes all spaces.'
},
{
  id: 'js_strings_41',
  topicId: 'js_strings',
  question: 'Truncate string to certain length with ellipsis.',
  mathSolution: 'Slice string and add "..." if too long.',
  codeSolution: 'function truncate(str, maxLength) {\n    if (str.length <= maxLength) return str;\n    return str.slice(0, maxLength) + "...";\n}\nconsole.log(truncate("JavaScript is awesome", 10));  // JavaScript...',
  hint: 'Check length before truncating.'
},
{
  id: 'js_strings_42',
  topicId: 'js_strings',
  question: 'Escape quotes in string using backslash.',
  mathSolution: 'Use \\" to escape double quotes, \\\' for single quotes.',
  codeSolution: 'const double = "She said, \\"Hello\\"";\nconst single = \'It\\\'s a beautiful day\';\nconsole.log(double);  // She said, "Hello"\nconsole.log(single);  // It\'s a beautiful day',
  hint: 'Use backslash (\\) to escape quotes.'
},
{
  id: 'js_strings_43',
  topicId: 'js_strings',
  question: 'Use escape sequences in strings.',
  mathSolution: '\\n newline, \\t tab, \\\\ backslash.',
  codeSolution: 'const str = "Line1\\nLine2\\tTabbed\\nBackslash: \\\\";\nconsole.log(str);\n// Line1\n// Line2    Tabbed\n// Backslash: \\',
  hint: 'Common escapes: \\n, \\t, \\\\, \\", \\\''
},
{
  id: 'js_strings_44',
  topicId: 'js_strings',
  question: 'Compare strings ignoring case.',
  mathSolution: 'Convert both to same case before comparison.',
  codeSolution: 'function equalsIgnoreCase(str1, str2) {\n    return str1.toLowerCase() === str2.toLowerCase();\n}\nconsole.log(equalsIgnoreCase("Hello", "HELLO"));  // true\nconsole.log(equalsIgnoreCase("Hello", "World"));  // false',
  hint: 'Use `toLowerCase()` or `toUpperCase()` for case-insensitive comparison.'
},
{
  id: 'js_strings_45',
  topicId: 'js_strings',
  question: 'Extract all digits from string using regular expression.',
  mathSolution: 'Use match() with \\d+ regex to find digits.',
  codeSolution: 'const str = "Order 123, price $45.67";\nconst digits = str.match(/\\d+/g);\nconsole.log(digits);  // ["123", "45", "67"]\nconst allDigits = str.match(/\\d/g);\nconsole.log(allDigits);  // ["1","2","3","4","5","6","7"]',
  hint: '`/\\d+/g` matches sequences of digits.'
},
{
  id: 'js_strings_46',
  topicId: 'js_strings',
  question: 'Extract all words from string using regular expression.',
  mathSolution: 'Use match() with \\w+ regex to find words.',
  codeSolution: 'const str = "Hello world! JavaScript is awesome.";\nconst words = str.match(/\\w+/g);\nconsole.log(words);  // ["Hello", "world", "JavaScript", "is", "awesome"]',
  hint: '`/\\w+/g` matches word characters (letters, numbers, underscore).'
},
{
  id: 'js_strings_47',
  topicId: 'js_strings',
  question: 'Check if string is valid email format using regex.',
  mathSolution: 'Simple email regex pattern.',
  codeSolution: 'function isValidEmail(email) {\n    const regex = /^[^\\s@]+@([^\\s@]+\\.)+[^\\s@]+$/;\n    return regex.test(email);\n}\nconsole.log(isValidEmail("user@example.com"));     // true\nconsole.log(isValidEmail("invalid-email"));        // false\nconsole.log(isValidEmail("user@.com"));            // false',
  hint: 'Email regex: `/[^@]+@[^@]+\\.[^@]+/`'
},
{
  id: 'js_strings_48',
  topicId: 'js_strings',
  question: 'Convert string to title case (each word capitalized).',
  mathSolution: 'Split, capitalize each word, join.',
  codeSolution: 'function toTitleCase(str) {\n    return str.toLowerCase().split(" ").map(word => \n        word.charAt(0).toUpperCase() + word.slice(1)\n    ).join(" ");\n}\nconsole.log(toTitleCase("hello world javascript"));  // Hello World Javascript\nconsole.log(toTitleCase("JAVASCRIPT IS FUN"));      // Javascript Is Fun',
  hint: 'Convert to lowercase first, then capitalize.'
},
{
  id: 'js_strings_49',
  topicId: 'js_strings',
  question: 'Convert string to camelCase.',
  mathSolution: 'Remove spaces, capitalize words after first.',
  codeSolution: 'function toCamelCase(str) {\n    return str.toLowerCase().split(" ").map((word, index) => \n        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)\n    ).join("");\n}\nconsole.log(toCamelCase("hello world javascript"));  // helloWorldJavascript\nconsole.log(toCamelCase("convert to camel case"));   // convertToCamelCase',
  hint: 'First word lowercase, rest capitalized.'
},
{
  id: 'js_strings_50',
  topicId: 'js_strings',
  question: 'Create string from ASCII codes using fromCharCode() with spread.',
  mathSolution: 'Use spread operator with array of codes.',
  codeSolution: 'const asciiCodes = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];\nconst message = String.fromCharCode(...asciiCodes);\nconsole.log(message);  // Hello World\n\n// Generate alphabet\nconst alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join("");\nconsole.log(alphabet);  // ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  hint: 'Spread array of codes into `fromCharCode()`.'
}
);