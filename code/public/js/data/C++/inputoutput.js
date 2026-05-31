QuizData.questions.push(

{
  id: 'cpp_io_1',
  topicId: 'cpp_io',
  question: 'Write a program that takes a string as input from the user and prints "Hello, [name]!" where [name] is the input string.',
  mathSolution: 'Use cin to read string input, then cout to print the greeting.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    cin >> name;\n    cout << "Hello, " << name << "!" << endl;\n    return 0;\n}',
  hint: 'Use cin >> variable to read input, cout << to print output.'
},
{
  id: 'cpp_io_2',
  topicId: 'cpp_io',
  question: 'Write a program that takes an integer input from the user and prints "You entered: [number]".',
  mathSolution: 'Read integer using cin, then display using cout.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'Declare an int variable, use cin >> to read, cout << to output.'
},
{
  id: 'cpp_io_3',
  topicId: 'cpp_io',
  question: 'Write a program that takes three integers as input (space-separated) and prints their sum.',
  mathSolution: 'Chain cin operators to read three integers (cin >> a >> b >> c), then add them.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    cout << a + b + c << endl;\n    return 0;\n}',
  hint: 'Chain >> operators: cin >> a >> b >> c reads three values at once.'
},
{
  id: 'cpp_io_4',
  topicId: 'cpp_io',
  question: 'Write a program that takes two integers as input and prints them on separate lines using endl.',
  mathSolution: 'Use cin to read two integers, then cout with endl for newlines.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    cout << x << endl;\n    cout << y << endl;\n    return 0;\n}',
  hint: 'endl adds newline and flushes output buffer.'
},
{
  id: 'cpp_io_5',
  topicId: 'cpp_io',
  question: 'Write a program that takes two integers as input and prints them on the same line separated by a space.',
  mathSolution: 'Use cout with space between variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a << " " << b << endl;\n    return 0;\n}',
  hint: 'Use endl for newline at the end of output.'
},
{
  id: 'cpp_io_6',
  topicId: 'cpp_io',
  question: 'Write a program that takes a full name (with spaces) as input and prints "Welcome, [full name]!".',
  mathSolution: 'Use getline(cin, string) to read string with spaces.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fullName;\n    getline(cin, fullName);\n    cout << "Welcome, " << fullName << "!" << endl;\n    return 0;\n}',
  hint: 'cin >> stops at space; getline() reads entire line including spaces.'
},
{
  id: 'cpp_io_7',
  topicId: 'cpp_io',
  question: 'Write a program that first reads an integer (age), then reads a string (name) with spaces, and prints "[name] is [age] years old".',
  mathSolution: 'Use cin.ignore() after reading integer to discard newline before getline().',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int age;\n    string name;\n    cin >> age;\n    cin.ignore();\n    getline(cin, name);\n    cout << name << " is " << age << " years old" << endl;\n    return 0;\n}',
  hint: 'cin leaves newline in buffer; use cin.ignore() before getline().'
},
{
  id: 'cpp_io_8',
  topicId: 'cpp_io',
  question: 'Write a program that reads a number, then ignores the next 100 characters or until newline, then reads a string and prints both.',
  mathSolution: 'Use cin.ignore(100, \'\\n\') to skip unwanted characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int num;\n    string text;\n    cin >> num;\n    cin.ignore(100, \'\\n\');\n    getline(cin, text);\n    cout << num << " - " << text << endl;\n    return 0;\n}',
  hint: 'cin.ignore(n, ch) skips n chars or until delimiter character.'
},
{
  id: 'cpp_io_9',
  topicId: 'cpp_io',
  question: 'Write a program that reads a single character using cin.get() and prints its ASCII value.',
  mathSolution: 'cin.get() reads one character including whitespace; cast to int for ASCII.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    ch = cin.get();\n    cout << int(ch) << endl;\n    return 0;\n}',
  hint: 'cin.get() reads any character. Use int(ch) to get ASCII value.'
},
{
  id: 'cpp_io_10',
  topicId: 'cpp_io',
  question: 'Write a program that reads a line into a C-style character array (max 100 chars) using cin.getline() and prints it.',
  mathSolution: 'cin.getline(char_array, size) reads line into char array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char buffer[100];\n    cin.getline(buffer, 100);\n    cout << buffer << endl;\n    return 0;\n}',
  hint: 'cin.getline() is for C-style strings; buffer must have enough space.'
},
{
  id: 'cpp_io_11',
  topicId: 'cpp_io',
  question: 'Write a program that reads a character and prints it 5 times in a row using cout.put().',
  mathSolution: 'Read char with cin, then use cout.put() in a loop.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ch;\n    for (int i = 0; i < 5; i++) {\n        cout.put(ch);\n    }\n    cout.put(\'\\n\');\n    return 0;\n}',
  hint: 'cout.put() outputs a single character to console.'
},
{
  "id": "cpp_io_12",
  "topicId": "cpp_io",
  "question": "Write a program that reads a string and prints only the first 5 characters using cout.write().",
  "mathSolution": "cout.write(const char*, size) writes fixed number of characters.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    getline(cin, str);\n    if (str.length() >= 5) {\n        cout.write(str.c_str(), 5);\n        cout << endl;\n    } else {\n        cout << str << endl;\n    }\n    return 0;\n}",
  "hint": "cout.write() outputs raw characters. Use str.c_str() to get C-string."
},
{
  id: 'cpp_io_13',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer. If input is invalid, display "Invalid input!", otherwise display the number.',
  mathSolution: 'Check cin.fail() after reading to detect invalid input.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    if (cin.fail()) {\n        cout << "Invalid input!" << endl;\n    } else {\n        cout << num << endl;\n    }\n    return 0;\n}',
  hint: 'cin.fail() returns true if input operation failed (e.g., letter instead of number).'
},
{
  id: 'cpp_io_14',
  topicId: 'cpp_io',
  question: 'Write a program that keeps asking for a positive number until user enters one, then displays the number.',
  mathSolution: 'Use loop with cin.clear() and cin.ignore() to recover from invalid input.',
  codeSolution: '#include <iostream>\n#include <limits>\nusing namespace std;\n\nint main() {\n    int num;\n    while (true) {\n        cin >> num;\n        if (cin.fail()) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n        } else if (num > 0) {\n            cout << num << endl;\n            break;\n        }\n    }\n    return 0;\n}',
  hint: 'cin.clear() clears error flags; cin.ignore() discards bad input.'
},
{
  id: 'cpp_io_15',
  topicId: 'cpp_io',
  question: 'Write a program that reads integers until EOF (Ctrl+D/Ctrl+Z) and prints their sum.',
  mathSolution: 'Use while(cin >> variable) to read until EOF.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, sum = 0;\n    while (cin >> num) {\n        sum += num;\n    }\n    cout << sum << endl;\n    return 0;\n}',
  hint: 'cin >> variable returns false at end-of-file (Ctrl+D/Ctrl+Z).'
},
{
  id: 'cpp_io_16',
  topicId: 'cpp_io',
  question: 'Write a program that reads a boolean value (0 or 1) and prints it as "true" or "false" using boolalpha.',
  mathSolution: 'Use boolalpha manipulator to print true/false instead of 1/0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool flag;\n    cin >> flag;\n    cout << boolalpha << flag << endl;\n    return 0;\n}',
  hint: 'boolalpha makes boolean output readable as true/false.'
},
{
  id: 'cpp_io_17',
  topicId: 'cpp_io',
  question: 'Write a program that reads a hexadecimal number (like FF or 1A) and prints its decimal value.',
  mathSolution: 'Use hex manipulator with cin to read hexadecimal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int hexNum;\n    cin >> hex >> hexNum;\n    cout << dec << hexNum << endl;\n    return 0;\n}',
  hint: 'cin >> hex reads hexadecimal numbers; dec converts back to decimal.'
},
{
  id: 'cpp_io_18',
  topicId: 'cpp_io',
  question: 'Write a program that reads a floating-point number and prints it with exactly 2 decimal places.',
  mathSolution: 'Use fixed and setprecision(2) for decimal precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout << fixed << setprecision(2) << num << endl;\n    return 0;\n}',
  hint: 'fixed makes setprecision set decimal places, not significant digits.'
},
{
  id: 'cpp_io_19',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and prints it right-aligned in a field of width 10 using setw.',
  mathSolution: 'Use setw(10) and right manipulator for right alignment.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    cin >> text;\n    cout << right << setw(10) << text << endl;\n    return 0;\n}',
  hint: 'setw() sets field width; right aligns text within that width.'
},
{
  id: 'cpp_io_20',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer and prints its hexadecimal value in uppercase.',
  mathSolution: 'Use hex and uppercase manipulators for uppercase hex output.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << hex << uppercase << num << endl;\n    return 0;\n}',
  hint: 'hex changes base, uppercase makes hex letters uppercase.'
},
{
  id: 'cpp_io_21',
  topicId: 'cpp_io',
  question: 'Write a program that reads a double and prints it with showpoint to display decimal point even for whole numbers.',
  mathSolution: 'Use showpoint manipulator to force decimal point display.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout << showpoint << num << endl;\n    return 0;\n}',
  hint: 'showpoint ensures decimal point and trailing zeros are displayed.'
},
{
  id: 'cpp_io_22',
  topicId: 'cpp_io',
  question: 'Write a program that reads exactly 10 characters using cin.read() and prints how many bytes were read using cin.gcount().',
  mathSolution: 'cin.read(buffer, size) reads raw binary data; gcount() returns bytes read.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char buffer[100];\n    cin.read(buffer, 10);\n    cout << cin.gcount() << endl;\n    return 0;\n}',
  hint: 'cin.gcount() returns number of characters read by last unformatted input.'
},
{
  "id": "cpp_io_23",
  "topicId": "cpp_io",
  "question": "Write a program that asks the user to enter a sentence, then uses cout.write() to display the first 10 characters of that sentence. If the sentence has fewer than 10 characters, display the entire sentence.",
  "mathSolution": "Read a full line using cin.getline(), calculate the number of characters to write (min of 10 and string length), then use cout.write() with that length.",
  "codeSolution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char sentence[100];\n    \n    cout << \"Enter a sentence: \";\n    cin.getline(sentence, 100);\n    \n    int len = strlen(sentence);\n    int charsToWrite = (len < 10) ? len : 10;\n    \n    cout << \"First \" << charsToWrite << \" characters: \";\n    cout.write(sentence, charsToWrite);\n    cout << endl;\n    \n    return 0;\n}",
  "hint": "Use cin.getline() to read spaces. strlen() from <cstring> gives string length. cout.write(char*, length) writes exact number of characters without needing null terminator."
},
{
  id: 'cpp_io_24',
  topicId: 'cpp_io',
  question: 'Write a program that reads input. If the first character is a digit, read and print the number; otherwise read and print the word.',
  mathSolution: 'Use cin.peek() to look at next character without extracting it.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char ch = cin.peek();\n    if (isdigit(ch)) {\n        int num;\n        cin >> num;\n        cout << num << endl;\n    } else {\n        string word;\n        cin >> word;\n        cout << word << endl;\n    }\n    return 0;\n}',
  hint: 'peek() lets you look at next character without consuming it. Use isdigit() to check if it is a number.'
},
{
  id: 'cpp_io_25',
  topicId: 'cpp_io',
  question: 'Write a program that reads a character, puts it back, then reads a string and prints it.',
  mathSolution: 'cin.putback(ch) puts character back into input buffer.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    char ch;\n    ch = cin.get();\n    cin.putback(ch);\n    string str;\n    cin >> str;\n    cout << str << endl;\n    return 0;\n}',
  hint: 'putback() allows unreading characters to re-parse input.'
},
{
  id: 'cpp_io_26',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and uses flush to immediately output each character with a 100ms delay.',
  mathSolution: 'Use flush to force output buffer write without newline.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    for (char c : text) {\n        cout << c << flush;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'flush forces immediate output of buffered characters.'
},
{
  id: 'cpp_io_27',
  topicId: 'cpp_io',
  question: 'Write a program that uses ws manipulator to skip whitespace before reading a character and prints it.',
  mathSolution: 'ws skips leading whitespace when reading input.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ws;\n    ch = cin.get();\n    cout << ch << endl;\n    return 0;\n}',
  hint: 'ws skips whitespace characters (space, tab, newline).'
},
{
  id: 'cpp_io_28',
  topicId: 'cpp_io',
  question: 'Write a program that reads 3 prices (floating-point numbers), calculates total, and prints total with exactly 2 decimal places.',
  mathSolution: 'Use fixed and setprecision(2) for currency formatting.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double p1, p2, p3;\n    cin >> p1 >> p2 >> p3;\n    double total = p1 + p2 + p3;\n    cout << fixed << setprecision(2) << total << endl;\n    return 0;\n}',
  hint: 'Currency formatting typically uses 2 decimal places with fixed.'
},
{
  id: 'cpp_io_29',
  topicId: 'cpp_io',
  question: 'Write a program that reads name (string), age (int), and GPA (double) and prints them in a formatted table row (name left-aligned width 15, age width 10 right-aligned, GPA width 10 right-aligned with 2 decimals).',
  mathSolution: 'Use setw, left, right, setprecision, fixed together.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    double gpa;\n    cin >> name >> age >> gpa;\n    cout << left << setw(15) << name;\n    cout << right << setw(10) << age;\n    cout << fixed << setprecision(2) << setw(10) << gpa << endl;\n    return 0;\n}',
  hint: 'Use setw() for column width, left/right for alignment, fixed and setprecision for decimals.'
},
{
  id: 'cpp_io_30',
  topicId: 'cpp_io',
  question: 'Write a program that reads multiple lines of input until EOF and prints them with line numbers.',
  mathSolution: 'while(getline(cin, line)) reads until EOF.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    int lineNum = 1;\n    while (getline(cin, line)) {\n        cout << lineNum++ << ": " << line << endl;\n    }\n    return 0;\n}',
  hint: 'getline() returns false on EOF (Ctrl+D/Ctrl+Z), perfect for reading until end.'
},
{
  id: 'cpp_io_31',
  topicId: 'cpp_io',
  question: 'Write a program that reads two integers and uses cerr to output error message if division by zero occurs, otherwise outputs the quotient.',
  mathSolution: 'cerr outputs error messages without buffering.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (b == 0) {\n        cerr << "Error: Division by zero!" << endl;\n    } else {\n        cout << a / b << endl;\n    }\n    return 0;\n}',
  hint: 'cerr is unbuffered and should be used for error messages.'
},
{
  id: 'cpp_io_32',
  topicId: 'cpp_io',
  question: 'Write a program that prompts the user to enter a number n, then uses clog to log "Processing step i" for i from 1 to n.',
  mathSolution: 'clog is buffered like cout but for logging messages.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        clog << "Processing step " << i << endl;\n    }\n    return 0;\n}',
  hint: 'clog uses buffering, making it efficient for many log messages. Use clog for logging messages that you don\'t need to appear immediately.'
},
{
  id: 'cpp_io_33',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer. If input is invalid, clear the error and sync the buffer, then read a character and print it.',
  mathSolution: 'cin.sync() discards unread characters in buffer.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    char ch;\n    cin >> num;\n    if (cin.fail()) {\n        cin.clear();\n        cin.sync();\n    }\n    cin >> ch;\n    cout << ch << endl;\n    return 0;\n}',
  hint: 'cin.sync() clears input buffer; use after clear() to discard bad input.'
},
{
  id: 'cpp_io_34',
  topicId: 'cpp_io',
  question: 'Write a program that unties cin from cout, reads an integer, then reties and prints it.',
  mathSolution: 'cin.tie() ensures cout is flushed before cin reads. Untying can affect prompt display.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin.tie(nullptr);\n    cin >> num;\n    cin.tie(&cout);\n    cout << num << endl;\n    return 0;\n}',
  hint: 'tie() controls stream synchronization; nullptr disables automatic flush.'
},
{
  id: 'cpp_io_35',
  topicId: 'cpp_io',
  question: 'Write a program that reads a double and uses cout.precision() and cout.width() to format output with 3 digits precision and width 10 filled with *.',
  mathSolution: 'Member functions provide alternative to manipulators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout.precision(3);\n    cout.width(10);\n    cout.fill(\'*\');\n    cout << num << endl;\n    return 0;\n}',
  hint: 'Member functions persist until changed, unlike setw().'
},
{
  id: 'cpp_io_36',
  topicId: 'cpp_io',
  question: 'Write a program that reads two hexadecimal numbers and prints their sum in decimal.',
  mathSolution: 'Use hex manipulator with cin to read hexadecimal numbers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> hex >> a >> b;\n    cout << dec << a + b << endl;\n    return 0;\n}',
  hint: 'Use hex with cin to parse hexadecimal input (e.g., FF, 1A).'
},
{
  id: 'cpp_io_37',
  topicId: 'cpp_io',
  question: 'Write a program that reads "true" or "false" as boolean input using boolalpha and prints the opposite value.',
  mathSolution: 'cin >> boolalpha reads "true"/"false" as boolean values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool flag;\n    cin >> boolalpha >> flag;\n    cout << boolalpha << !flag << endl;\n    return 0;\n}',
  hint: 'boolalpha allows reading "true"/"false" strings directly.'
},
{
  id: 'cpp_io_38',
  topicId: 'cpp_io',
  question: 'Write a program that reads a line using getline and then extracts individual words from that line using stringstream, printing each word on a new line.',
  mathSolution: 'Use stringstream to parse space-separated words from a line.',
  codeSolution: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    string word;\n    while (ss >> word) {\n        cout << word << endl;\n    }\n    return 0;\n}',
  hint: 'stringstream allows string to be treated as an input stream.'
},
{
  id: 'cpp_io_39',
  topicId: 'cpp_io',
  question: 'Write a program that reads a CSV line (comma-separated values like: 10,20,30,40) and prints each value on a new line.',
  mathSolution: 'Use getline with delimiter to parse CSV.',
  codeSolution: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    string value;\n    while (getline(ss, value, \',\')) {\n        cout << value << endl;\n    }\n    return 0;\n}',
  hint: 'getline with third parameter (delimiter) parses CSV files.'
},
{
  id: 'cpp_io_40',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and uses unitbuf to flush after every character output, printing each character with a 100ms delay.',
  mathSolution: 'unitbuf flushes after every output operation.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    cout << unitbuf;\n    for (char c : text) {\n        cout << c;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n    cout << nounitbuf << endl;\n    return 0;\n}',
  hint: 'unitbuf ensures output appears immediately after each write.'
},
{
  id: 'cpp_io_41',
  topicId: 'cpp_io',
  question: 'Write a program that catches exceptions when reading integer input. If input fails, print "Input error".',
  mathSolution: 'cin.exceptions() sets which errors throw exceptions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cin.exceptions(ios::failbit);\n    try {\n        int num;\n        cin >> num;\n        cout << num << endl;\n    } catch (const ios::failure&) {\n        cout << "Input error" << endl;\n    }\n    return 0;\n}',
  hint: 'Exceptions can simplify error handling in input scenarios.'
},
{
  id: 'cpp_io_42',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer (year) and prints "Year: YYYY" with zero-padding to 4 digits (e.g., 2024, 0089).',
  mathSolution: 'setw sets minimum field width, setfill sets fill character.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    cout << "Year: " << setw(4) << setfill(\'0\') << year << endl;\n    return 0;\n}',
  hint: 'setw() with setfill(\'0\') can zero-pad numbers.'
},
{
  id: 'cpp_io_43',
  topicId: 'cpp_io',
  question: 'Write a program that reads a quoted string (like "Hello World") using quoted manipulator and prints it without quotes.',
  mathSolution: 'quoted() reads/writes strings with quotes preserving spaces.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    cin >> quoted(text);\n    cout << text << endl;\n    return 0;\n}',
  hint: 'quoted() handles quoted strings with spaces automatically.'
},
{
  id: 'cpp_io_44',
  topicId: 'cpp_io',
  question: 'Write a program that reads two integers and prints their sum.',
  mathSolution: 'Use cin for input, cout for output with simple formatting.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}',
  hint: 'Use cin for input, cout for output.'
},
{
  id: 'cpp_io_45',
  topicId: 'cpp_io',
  question: 'Write a program that reads three numbers and calculates their average, printing it with 2 decimal places using stringstream.',
  mathSolution: 'Use stringstream to build formatted output string.',
  codeSolution: '#include <iostream>\n#include <sstream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cin >> a >> b >> c;\n    double avg = (a + b + c) / 3;\n    stringstream ss;\n    ss << fixed << setprecision(2) << avg;\n    cout << ss.str() << endl;\n    return 0;\n}',
  hint: 'stringstream is useful for building formatted strings.'
},
{
  id: 'cpp_io_46',
  topicId: 'cpp_io',
  question: 'Write a program that reads numbers until EOF and prints the maximum value. (Test with Ctrl+D/Ctrl+Z)',
  mathSolution: 'while(cin >> var) reads until EOF; track maximum.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int num, maxVal = INT_MIN;\n    while (cin >> num) {\n        if (num > maxVal) maxVal = num;\n    }\n    if (maxVal != INT_MIN) cout << maxVal << endl;\n    return 0;\n}',
  hint: 'cin >> var returns false at EOF, great for reading unknown count.'
},
{
  id: 'cpp_io_47',
  topicId: 'cpp_io',
  question: 'Write a program that uses cin.width() to limit input to 5 characters for a C-style string and prints the string.',
  mathSolution: 'width() sets maximum characters to read, preventing buffer overflow.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char buffer[10];\n    cin.width(6);\n    cin >> buffer;\n    cout << buffer << endl;\n    return 0;\n}',
  hint: 'Always set width before reading into fixed-size buffers.'
},
{
  id: 'cpp_io_48',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer, prints it, and checks if cout failed (though it rarely fails for console output).',
  mathSolution: 'cout.fail() indicates if output operation failed.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << num;\n    if (cout.fail()) {\n        cout.clear();\n        cout << "Error" << endl;\n    }\n    return 0;\n}',
  hint: 'Check stream state when output may fail (file, network).'
},
{
  "id": "cpp_io_49",
  "topicId": "cpp_io",
  "question": "Write a program that first reads a single character using cin.get() (which leaves the rest of input in the buffer), then uses cin.readsome() to read and print any remaining input without waiting. Prompt the user to enter a word or phrase, display the first character, and then show the rest using readsome().",
  "mathSolution": "cin.get() reads one character and leaves the newline and remaining input in the buffer. cin.readsome() then non-blockingly reads whatever is left in the buffer without waiting for more input.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char firstChar;\n    char buffer[200];\n    \n    cout << \"Enter a word or phrase: \";\n    \n    // Read first character (leaves rest in buffer including newline)\n    firstChar = cin.get();\n    \n    cout << \"First character: \" << firstChar << endl;\n    \n    // Now read whatever is immediately available without waiting\n    streamsize bytes = cin.readsome(buffer, 199);\n    \n    if (bytes > 0) {\n        buffer[bytes] = '\\0';\n        cout << \"Remaining input: \" << buffer;\n    } else {\n        cout << \"No remaining input.\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "cin.get() reads one character but doesn't remove the newline. cin.readsome() is perfect here because it reads only what's already buffered (the rest of user input) without waiting. If user enters 'Hello World', firstChar = 'H', readsome() gets 'ello World\\n'."
},
{
  id: 'cpp_io_50',
  topicId: 'cpp_io',
  question: 'Write a program that reads a student name (with spaces), age, and GPA, then prints a formatted student record with proper alignment.',
  mathSolution: 'Combine getline() for strings with spaces and cin for numbers.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    double gpa;\n    getline(cin, name);\n    cin >> age;\n    cin >> gpa;\n    cout << fixed << setprecision(2);\n    cout << left << setw(20) << name;\n    cout << right << setw(10) << age << setw(10) << gpa << endl;\n    return 0;\n}',
  hint: 'Combine getline() for strings and cin for numbers. Note: cin leaves newline in buffer.'
}

);