QuizData.questions.push(
{
  id: 'cpp_filehandling_1',
  topicId: 'cpp_filehandling',
  question: 'Write to a file using ofstream (output file stream).',
  mathSolution: 'ofstream creates/opens file for writing.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream outFile("test.txt");\n    if (outFile.is_open()) {\n        outFile << "Hello, World!" << endl;\n        outFile << "This is line 2" << endl;\n        outFile.close();\n        cout << "File written successfully" << endl;\n    } else {\n        cout << "Unable to open file" << endl;\n    }\n    return 0;\n}',
  hint: 'Use ofstream for writing to files, is_open() to check if file opened successfully.'
},
{
  id: 'cpp_filehandling_2',
  topicId: 'cpp_filehandling',
  question: 'Read from a file using ifstream (input file stream).',
  mathSolution: 'ifstream opens file for reading, getline reads line by line.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream inFile("test.txt");\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    while (getline(inFile, line)) {\n        cout << line << endl;\n    }\n    \n    inFile.close();\n    return 0;\n}',
  hint: 'ifstream is for reading from files, getline() reads entire lines.'
},
{
  id: 'cpp_filehandling_3',
  topicId: 'cpp_filehandling',
  question: 'Use fstream for both reading and writing (append mode).',
  mathSolution: 'fstream with ios::app opens file for appending.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    fstream file("test.txt", ios::app | ios::out);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    file << "Appending new line" << endl;\n    file << "Another appended line" << endl;\n    file.close();\n    \n    // Read back the file\n    ifstream inFile("test.txt");\n    string line;\n    while (getline(inFile, line)) {\n        cout << line << endl;\n    }\n    inFile.close();\n    \n    return 0;\n}',
  hint: 'Use ios::app to append to existing file, ios::trunc to overwrite.'
},
{
  id: 'cpp_filehandling_4',
  topicId: 'cpp_filehandling',
  question: 'Read and write binary files using read() and write().',
  mathSolution: 'write() writes binary data, read() reads binary data.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstring>\nusing namespace std;\n\nstruct Student {\n    int id;\n    char name[50];\n    double gpa;\n};\n\nint main() {\n    Student students[] = {\n        {1, "John Doe", 3.8},\n        {2, "Jane Smith", 3.9},\n        {3, "Bob Johnson", 3.5}\n    };\n    \n    // Write binary file\n    ofstream outFile("students.bin", ios::binary);\n    if (!outFile) {\n        cout << "Cannot create file" << endl;\n        return 1;\n    }\n    \n    outFile.write(reinterpret_cast<char*>(students), sizeof(students));\n    outFile.close();\n    \n    // Read binary file\n    ifstream inFile("students.bin", ios::binary);\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    Student readStudents[3];\n    inFile.read(reinterpret_cast<char*>(readStudents), sizeof(readStudents));\n    inFile.close();\n    \n    for (int i = 0; i < 3; i++) {\n        cout << "ID: " << readStudents[i].id \n             << ", Name: " << readStudents[i].name \n             << ", GPA: " << readStudents[i].gpa << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use ios::binary mode for binary file operations, reinterpret_cast for type conversion.'
},
{
  "id": "cpp_filehandling_5",
  "topicId": "cpp_filehandling",
  "question": "Check if file exists before opening.",
  "mathSolution": "Use ifstream or access() to check file existence.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nbool fileExists(const string& filename) {\n    ifstream file(filename);\n    return file.good();\n}\n\nint main() {\n    string filename = \"test.txt\";\n    \n    if (fileExists(filename)) {\n        cout << \"File '\" << filename << \"' exists\" << endl;\n        ifstream inFile(filename);\n        string content;\n        while (getline(inFile, content)) {\n            cout << content << endl;\n        }\n        inFile.close();\n    } else {\n        cout << \"File '\" << filename << \"' does not exist\" << endl;\n        // Create the file\n        ofstream outFile(filename);\n        outFile << \"New file created\" << endl;\n        outFile.close();\n    }\n    \n    return 0;\n}",
  "hint": "file.good() returns true if file exists and can be opened."
},
{
  id: 'cpp_filehandling_6',
  topicId: 'cpp_filehandling',
  question: 'Get file size using seekg and tellg.',
  mathSolution: 'seekg moves to end, tellg returns position (file size).',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt", ios::binary | ios::ate);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    streamsize size = file.tellg();\n    cout << "File size: " << size << " bytes" << endl;\n    \n    file.seekg(0, ios::beg);\n    char* buffer = new char[size + 1];\n    file.read(buffer, size);\n    buffer[size] = \'\\0\';\n    \n    cout << "File content:\\n" << buffer << endl;\n    \n    delete[] buffer;\n    file.close();\n    \n    return 0;\n}',
  hint: 'ios::ate positions at end, tellg() returns current position (size).'
},
{
  id: 'cpp_filehandling_7',
  topicId: 'cpp_filehandling',
  question: 'Copy one file to another character by character.',
  mathSolution: 'Read character from source, write to destination.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string sourceFile = "source.txt";\n    string destFile = "destination.txt";\n    \n    ifstream source(sourceFile);\n    if (!source) {\n        cout << "Cannot open source file" << endl;\n        return 1;\n    }\n    \n    ofstream dest(destFile);\n    if (!dest) {\n        cout << "Cannot create destination file" << endl;\n        return 1;\n    }\n    \n    char ch;\n    while (source.get(ch)) {\n        dest.put(ch);\n    }\n    \n    source.close();\n    dest.close();\n    \n    cout << "File copied successfully" << endl;\n    \n    return 0;\n}',
  hint: 'source.get(ch) reads one character, dest.put(ch) writes one character.'
},
{
  id: 'cpp_filehandling_8',
  topicId: 'cpp_filehandling',
  question: 'Copy file using buffer for better performance.',
  mathSolution: 'Read/write chunks of data instead of one byte at a time.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    const size_t BUFFER_SIZE = 4096;\n    char buffer[BUFFER_SIZE];\n    \n    ifstream source("source.txt", ios::binary);\n    ofstream dest("destination.txt", ios::binary);\n    \n    if (!source || !dest) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    while (source.read(buffer, BUFFER_SIZE)) {\n        dest.write(buffer, source.gcount());\n    }\n    \n    // Write remaining bytes\n    dest.write(buffer, source.gcount());\n    \n    source.close();\n    dest.close();\n    \n    cout << "File copied with buffer" << endl;\n    \n    return 0;\n}',
  hint: 'Use buffer for faster file operations, gcount() returns bytes read.'
},
{
  id: 'cpp_filehandling_9',
  topicId: 'cpp_filehandling',
  question: 'Count lines in a file.',
  mathSolution: 'Use getline() in loop and count iterations.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int lineCount = 0;\n    string line;\n    \n    while (getline(file, line)) {\n        lineCount++;\n    }\n    \n    file.close();\n    \n    cout << "Number of lines: " << lineCount << endl;\n    \n    return 0;\n}',
  hint: 'getline() returns false when EOF is reached, counting lines in process.'
},
{
  id: 'cpp_filehandling_10',
  topicId: 'cpp_filehandling',
  question: 'Count words in a file.',
  mathSolution: 'Read file and count spaces, punctuation, and newlines.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int wordCount = 0;\n    string line;\n    \n    while (getline(file, line)) {\n        stringstream ss(line);\n        string word;\n        while (ss >> word) {\n            wordCount++;\n        }\n    }\n    \n    file.close();\n    \n    cout << "Number of words: " << wordCount << endl;\n    \n    return 0;\n}',
  hint: 'Use stringstream to parse words from each line.'
},
{
  id: 'cpp_filehandling_11',
  topicId: 'cpp_filehandling',
  question: 'Count characters in a file (including spaces).',
  mathSolution: 'Read file character by character and count.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int charCount = 0;\n    char ch;\n    \n    while (file.get(ch)) {\n        charCount++;\n    }\n    \n    file.close();\n    \n    cout << "Number of characters: " << charCount << endl;\n    \n    return 0;\n}',
  hint: 'file.get(ch) reads each character including whitespace and newlines.'
},
{
  id: 'cpp_filehandling_12',
  topicId: 'cpp_filehandling',
  question: 'Search for a specific word in a file.',
  mathSolution: 'Read file line by line and use find() to locate word.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string filename, searchWord;\n    cout << "Enter filename: ";\n    cin >> filename;\n    cout << "Enter word to search: ";\n    cin >> searchWord;\n    \n    ifstream file(filename);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    bool found = false;\n    \n    while (getline(file, line)) {\n        lineNum++;\n        if (line.find(searchWord) != string::npos) {\n            cout << "Found at line " << lineNum << ": " << line << endl;\n            found = true;\n        }\n    }\n    \n    if (!found) {\n        cout << "Word not found" << endl;\n    }\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'string::find() returns npos if substring not found.'
},
{
  id: 'cpp_filehandling_13',
  topicId: 'cpp_filehandling',
  question: 'Replace text in a file.',
  mathSolution: 'Read entire file, replace content, write back.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string filename, search, replace;\n    cout << "Enter filename: ";\n    cin >> filename;\n    cout << "Enter text to replace: ";\n    cin >> search;\n    cout << "Enter replacement text: ";\n    cin >> replace;\n    \n    ifstream inFile(filename);\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string content;\n    string line;\n    while (getline(inFile, line)) {\n        size_t pos = 0;\n        while ((pos = line.find(search, pos)) != string::npos) {\n            line.replace(pos, search.length(), replace);\n            pos += replace.length();\n        }\n        content += line + "\\n";\n    }\n    inFile.close();\n    \n    ofstream outFile(filename);\n    outFile << content;\n    outFile.close();\n    \n    cout << "Text replaced successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Use string::replace() to replace text in memory before writing back.'
},
{
  id: 'cpp_filehandling_14',
  topicId: 'cpp_filehandling',
  question: 'Append to a file without overwriting existing content.',
  mathSolution: 'Open file in append mode using ios::app.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <ctime>\nusing namespace std;\n\nint main() {\n    ofstream file("log.txt", ios::app);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    time_t now = time(nullptr);\n    file << "New log entry at " << ctime(&now);\n    file << "Another log message" << endl;\n    file.close();\n    \n    cout << "Data appended successfully" << endl;\n    \n    return 0;\n}',
  hint: 'ios::app opens file in append mode, writes at end of file.'
},
{
  id: 'cpp_filehandling_15',
  topicId: 'cpp_filehandling',
  question: 'Read CSV file and parse data.',
  mathSolution: 'Split each line by comma to extract fields.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream file("data.csv");\n    if (!file) {\n        cout << "Cannot open CSV file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int rowNum = 0;\n    \n    while (getline(file, line)) {\n        stringstream ss(line);\n        string field;\n        vector<string> fields;\n        \n        while (getline(ss, field, \',\')) {\n            fields.push_back(field);\n        }\n        \n        cout << "Row " << ++rowNum << ": ";\n        for (const auto& f : fields) {\n            cout << f << " | ";\n        }\n        cout << endl;\n    }\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'Use getline with delimiter \',\' to parse CSV fields.'
},
{
  id: 'cpp_filehandling_16',
  topicId: 'cpp_filehandling',
  question: 'Write CSV file from data structures.',
  mathSolution: 'Write data with comma separators.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n    double salary;\n};\n\nint main() {\n    vector<Person> people = {\n        {"Alice", 25, 50000},\n        {"Bob", 30, 60000},\n        {"Charlie", 35, 70000}\n    };\n    \n    ofstream file("output.csv");\n    if (!file) {\n        cout << "Cannot create file" << endl;\n        return 1;\n    }\n    \n    // Write header\n    file << "Name,Age,Salary\\n";\n    \n    // Write data\n    for (const auto& p : people) {\n        file << p.name << "," << p.age << "," << p.salary << "\\n";\n    }\n    \n    file.close();\n    \n    cout << "CSV file written successfully" << endl;\n    \n    return 0;\n}',
  hint: 'CSV format uses commas to separate fields, newlines for rows.'
},
{
  id: 'cpp_filehandling_17',
  topicId: 'cpp_filehandling',
  question: 'Read and write JSON-like data using custom format.',
  mathSolution: 'Write key-value pairs, parse using delimiters.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, string> data;\n    data["name"] = "John Doe";\n    data["age"] = "30";\n    data["city"] = "New York";\n    data["occupation"] = "Engineer";\n    \n    // Write custom format file\n    ofstream outFile("data.cfg");\n    for (const auto& pair : data) {\n        outFile << pair.first << "=" << pair.second << "\\n";\n    }\n    outFile.close();\n    \n    // Read custom format file\n    ifstream inFile("data.cfg");\n    map<string, string> readData;\n    string line;\n    \n    while (getline(inFile, line)) {\n        size_t pos = line.find(\'=\');\n        if (pos != string::npos) {\n            string key = line.substr(0, pos);\n            string value = line.substr(pos + 1);\n            readData[key] = value;\n        }\n    }\n    inFile.close();\n    \n    // Display read data\n    for (const auto& pair : readData) {\n        cout << pair.first << ": " << pair.second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Custom format like key=value is easy to parse and human-readable.'
},
{
  id: 'cpp_filehandling_18',
  topicId: 'cpp_filehandling',
  question: 'Use temporary files for intermediate data.',
  mathSolution: 'Create temporary file, write data, read later.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstdlib>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    // Create temporary file\n    char tempFileName[] = "tempXXXXXX";\n    int fd = mkstemp(tempFileName);\n    \n    if (fd == -1) {\n        cout << "Cannot create temp file" << endl;\n        return 1;\n    }\n    \n    ofstream tempFile(tempFileName);\n    tempFile << "Temporary data line 1\\n";\n    tempFile << "Temporary data line 2\\n";\n    tempFile.close();\n    \n    cout << "Temporary file created: " << tempFileName << endl;\n    \n    // Read and process temporary file\n    ifstream inFile(tempFileName);\n    string line;\n    while (getline(inFile, line)) {\n        cout << "Processing: " << line << endl;\n    }\n    inFile.close();\n    \n    // Delete temporary file\n    remove(tempFileName);\n    cout << "Temporary file deleted" << endl;\n    \n    return 0;\n}',
  hint: 'mkstemp() creates unique temporary file name, remove() deletes file.'
},
{
  id: 'cpp_filehandling_19',
  topicId: 'cpp_filehandling',
  question: 'Handle large files using seekg and read chunks.',
  mathSolution: 'Read file in chunks to avoid memory issues.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    const size_t CHUNK_SIZE = 1024;\n    char buffer[CHUNK_SIZE];\n    \n    ifstream file("largefile.txt", ios::binary);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    // Get file size\n    file.seekg(0, ios::end);\n    streamsize fileSize = file.tellg();\n    file.seekg(0, ios::beg);\n    \n    cout << "File size: " << fileSize << " bytes" << endl;\n    cout << "Processing in chunks of " << CHUNK_SIZE << " bytes" << endl;\n    \n    streamsize totalRead = 0;\n    while (file.read(buffer, CHUNK_SIZE)) {\n        totalRead += CHUNK_SIZE;\n        cout << "Read chunk: " << totalRead << "/" << fileSize << " bytes\\r";\n        // Process buffer here\n    }\n    \n    // Process remaining bytes\n    totalRead += file.gcount();\n    cout << "\\nTotal bytes read: " << totalRead << endl;\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'Processing large files in chunks prevents memory overflow.'
},
{
  id: 'cpp_filehandling_20',
  topicId: 'cpp_filehandling',
  question: 'Read file backwards (last line first).',
  mathSolution: 'Read entire file into vector, then iterate backwards.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    vector<string> lines;\n    string line;\n    \n    while (getline(file, line)) {\n        lines.push_back(line);\n    }\n    file.close();\n    \n    cout << "File content in reverse order:\\n";\n    for (int i = lines.size() - 1; i >= 0; i--) {\n        cout << lines[i] << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Store lines in vector, then reverse iteration for backward reading.'
},
{
  id: 'cpp_filehandling_21',
  topicId: 'cpp_filehandling',
  question: 'Read file and remove blank lines.',
  mathSolution: 'Skip lines that are empty or contain only whitespace.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isBlankLine(const string& line) {\n    for (char c : line) {\n        if (!isspace(c)) return false;\n    }\n    return true;\n}\n\nint main() {\n    ifstream inFile("input.txt");\n    ofstream outFile("output.txt");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    int removedCount = 0;\n    \n    while (getline(inFile, line)) {\n        lineNum++;\n        if (isBlankLine(line)) {\n            removedCount++;\n            cout << "Removed blank line " << lineNum << endl;\n        } else {\n            outFile << line << endl;\n        }\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Removed " << removedCount << " blank lines" << endl;\n    \n    return 0;\n}',
  hint: 'Check if line contains only whitespace characters to identify blank lines.'
},
{
  id: 'cpp_filehandling_22',
  topicId: 'cpp_filehandling',
  question: 'Add line numbers to file.',
  mathSolution: 'Prepend each line with its line number.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    ofstream outFile("numbered.txt");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    \n    while (getline(inFile, line)) {\n        outFile << setw(4) << ++lineNum << ": " << line << endl;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Line numbers added successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Use setw() to align line numbers for better readability.'
},
{
  id: 'cpp_filehandling_23',
  topicId: 'cpp_filehandling',
  question: 'Sort lines in a file alphabetically.',
  mathSolution: 'Read lines into vector, sort, write back.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    if (!inFile) {\n        cout << "Cannot open input file" << endl;\n        return 1;\n    }\n    \n    vector<string> lines;\n    string line;\n    \n    while (getline(inFile, line)) {\n        lines.push_back(line);\n    }\n    inFile.close();\n    \n    sort(lines.begin(), lines.end());\n    \n    ofstream outFile("sorted.txt");\n    if (!outFile) {\n        cout << "Cannot create output file" << endl;\n        return 1;\n    }\n    \n    for (const auto& l : lines) {\n        outFile << l << endl;\n    }\n    outFile.close();\n    \n    cout << "Lines sorted alphabetically" << endl;\n    \n    return 0;\n}',
  hint: 'Use vector to store lines, sort() for alphabetical ordering.'
},
{
  id: 'cpp_filehandling_24',
  topicId: 'cpp_filehandling',
  question: 'Remove duplicates from file.',
  mathSolution: 'Use set to store unique lines.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <set>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    if (!inFile) {\n        cout << "Cannot open input file" << endl;\n        return 1;\n    }\n    \n    set<string> uniqueLines;\n    string line;\n    \n    while (getline(inFile, line)) {\n        uniqueLines.insert(line);\n    }\n    inFile.close();\n    \n    ofstream outFile("unique.txt");\n    if (!outFile) {\n        cout << "Cannot create output file" << endl;\n        return 1;\n    }\n    \n    for (const auto& l : uniqueLines) {\n        outFile << l << endl;\n    }\n    outFile.close();\n    \n    cout << "Duplicates removed, unique lines: " << uniqueLines.size() << endl;\n    \n    return 0;\n}',
  hint: 'std::set automatically stores unique elements in sorted order.'
},
{
  id: 'cpp_filehandling_25',
  topicId: 'cpp_filehandling',
  question: 'Split large file into multiple smaller files.',
  mathSolution: 'Read file and write chunks to separate files.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    const size_t LINES_PER_FILE = 100;\n    \n    ifstream inFile("large.txt");\n    if (!inFile) {\n        cout << "Cannot open large file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int fileCount = 0;\n    int lineCount = 0;\n    ofstream outFile;\n    \n    while (getline(inFile, line)) {\n        if (lineCount == 0) {\n            if (outFile.is_open()) outFile.close();\n            string filename = "part_" + to_string(++fileCount) + ".txt";\n            outFile.open(filename);\n            if (!outFile) {\n                cout << "Cannot create file: " << filename << endl;\n                return 1;\n            }\n        }\n        \n        outFile << line << endl;\n        lineCount++;\n        \n        if (lineCount >= LINES_PER_FILE) {\n            lineCount = 0;\n        }\n    }\n    \n    if (outFile.is_open()) outFile.close();\n    inFile.close();\n    \n    cout << "Split into " << fileCount << " files" << endl;\n    \n    return 0;\n}',
  hint: 'Split large files into smaller chunks for easier processing.'
},
{
  id: 'cpp_filehandling_26',
  topicId: 'cpp_filehandling',
  question: 'Merge multiple files into one.',
  mathSolution: 'Read each file and append to output file.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> inputFiles = {"file1.txt", "file2.txt", "file3.txt"};\n    ofstream outFile("merged.txt");\n    \n    if (!outFile) {\n        cout << "Cannot create merged file" << endl;\n        return 1;\n    }\n    \n    for (const auto& filename : inputFiles) {\n        ifstream inFile(filename);\n        if (!inFile) {\n            cout << "Warning: Cannot open " << filename << endl;\n            continue;\n        }\n        \n        string line;\n        outFile << "--- " << filename << " ---\\n";\n        while (getline(inFile, line)) {\n            outFile << line << endl;\n        }\n        outFile << endl;\n        inFile.close();\n    }\n    \n    outFile.close();\n    \n    cout << "Files merged successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Add separators between files for clarity in merged output.'
},
{
  id: 'cpp_filehandling_27',
  topicId: 'cpp_filehandling',
  question: 'Compress file using simple run-length encoding.',
  mathSolution: 'Count consecutive identical characters, store count and char.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nvoid compress(const string& inputFile, const string& outputFile) {\n    ifstream inFile(inputFile);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    char ch, prev = 0;\n    int count = 0;\n    \n    while (inFile.get(ch)) {\n        if (ch == prev) {\n            count++;\n        } else {\n            if (count > 0) {\n                outFile << count << prev;\n            }\n            prev = ch;\n            count = 1;\n        }\n    }\n    \n    if (count > 0) {\n        outFile << count << prev;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File compressed" << endl;\n}\n\nint main() {\n    compress("input.txt", "compressed.rle");\n    return 0;\n}',
  hint: 'RLE is simple but effective for repetitive data.'
},
{
  id: 'cpp_filehandling_28',
  topicId: 'cpp_filehandling',
  question: 'Decompress run-length encoded file.',
  mathSolution: 'Read count and character, expand by count.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nvoid decompress(const string& inputFile, const string& outputFile) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    int count;\n    char ch;\n    \n    while (inFile >> count >> ch) {\n        for (int i = 0; i < count; i++) {\n            outFile << ch;\n        }\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File decompressed" << endl;\n}\n\nint main() {\n    decompress("compressed.rle", "decompressed.txt");\n    return 0;\n}',
  hint: 'RLE decompression expands count-char pairs to original data.'
},
{
  id: 'cpp_filehandling_29',
  topicId: 'cpp_filehandling',
  question: 'Encrypt file using simple XOR cipher.',
  mathSolution: 'XOR each byte with key for encryption/decryption.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nvoid xorFile(const string& inputFile, const string& outputFile, char key) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    char ch;\n    while (inFile.get(ch)) {\n        ch ^= key;\n        outFile.put(ch);\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File processed with XOR cipher" << endl;\n}\n\nint main() {\n    char key = \'K\';\n    \n    // Encrypt\n    xorFile("plain.txt", "encrypted.dat", key);\n    \n    // Decrypt (same operation)\n    xorFile("encrypted.dat", "decrypted.txt", key);\n    \n    return 0;\n}',
  hint: 'XOR encryption is symmetric: applying twice restores original.'
},
{
  id: 'cpp_filehandling_30',
  topicId: 'cpp_filehandling',
  question: 'Calculate checksum of file for integrity verification.',
  mathSolution: 'Sum all bytes or use XOR for simple checksum.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nunsigned long computeChecksum(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 0;\n    }\n    \n    unsigned long checksum = 0;\n    char ch;\n    \n    while (file.get(ch)) {\n        checksum += static_cast<unsigned char>(ch);\n    }\n    \n    file.close();\n    return checksum;\n}\n\nint main() {\n    string filename = "test.txt";\n    unsigned long checksum = computeChecksum(filename);\n    \n    cout << "Checksum of \'" << filename << "\': " << checksum << endl;\n    \n    return 0;\n}',
  hint: 'Checksum helps verify data integrity after transfer.'
},
{
  id: 'cpp_filehandling_31',
  topicId: 'cpp_filehandling',
  question: 'Compare two files for equality.',
  mathSolution: 'Read both files byte by byte and compare.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nbool compareFiles(const string& file1, const string& file2) {\n    ifstream f1(file1, ios::binary);\n    ifstream f2(file2, ios::binary);\n    \n    if (!f1 || !f2) {\n        cout << "Cannot open files" << endl;\n        return false;\n    }\n    \n    char ch1, ch2;\n    while (f1.get(ch1) && f2.get(ch2)) {\n        if (ch1 != ch2) return false;\n    }\n    \n    // Both should be at EOF if files are equal\n    return f1.eof() && f2.eof();\n}\n\nint main() {\n    string file1 = "original.txt";\n    string file2 = "copy.txt";\n    \n    if (compareFiles(file1, file2)) {\n        cout << "Files are identical" << endl;\n    } else {\n        cout << "Files are different" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Compare byte by byte for accurate file comparison.'
},
{
  id: 'cpp_filehandling_32',
  topicId: 'cpp_filehandling',
  question: 'Find and replace text in large file without loading entirely.',
  mathSolution: 'Process file in chunks, write to temporary file.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nvoid findReplace(const string& filename, const string& search, const string& replace) {\n    ifstream inFile(filename);\n    ofstream outFile(filename + ".tmp");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    string line;\n    while (getline(inFile, line)) {\n        size_t pos = 0;\n        while ((pos = line.find(search, pos)) != string::npos) {\n            line.replace(pos, search.length(), replace);\n            pos += replace.length();\n        }\n        outFile << line << endl;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    remove(filename.c_str());\n    rename((filename + ".tmp").c_str(), filename.c_str());\n    \n    cout << "Find and replace completed" << endl;\n}\n\nint main() {\n    findReplace("document.txt", "old", "new");\n    return 0;\n}',
  hint: 'Use temporary file to avoid data loss during replacement.'
},
{
  id: 'cpp_filehandling_33',
  topicId: 'cpp_filehandling',
  question: 'Extract specific columns from CSV file.',
  mathSolution: 'Parse CSV and extract desired column indices.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream inFile("data.csv");\n    ofstream outFile("extracted.csv");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<int> columnsToExtract = {0, 2, 3}; // Extract columns 1,3,4\n    string line;\n    \n    while (getline(inFile, line)) {\n        stringstream ss(line);\n        string field;\n        vector<string> fields;\n        \n        while (getline(ss, field, \',\')) {\n            fields.push_back(field);\n        }\n        \n        for (size_t i = 0; i < columnsToExtract.size(); i++) {\n            int col = columnsToExtract[i];\n            if (col < (int)fields.size()) {\n                outFile << fields[col];\n                if (i < columnsToExtract.size() - 1) outFile << \',\';\n            }\n        }\n        outFile << "\\n";\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Columns extracted successfully" << endl;\n    \n    return 0;\n}',
  hint: 'CSV extraction selects specific columns while preserving row structure.'
},
{
  id: 'cpp_filehandling_34',
  topicId: 'cpp_filehandling',
  question: 'Implement simple database with file storage.',
  mathSolution: 'Store records in binary file with header for indexing.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <cstring>\nusing namespace std;\n\nstruct Record {\n    int id;\n    char name[50];\n    double value;\n};\n\nclass SimpleDB {\nprivate:\n    string filename;\n    \npublic:\n    SimpleDB(const string& f) : filename(f) {}\n    \n    void addRecord(const Record& record) {\n        ofstream file(filename, ios::binary | ios::app);\n        if (!file) {\n            cout << "Cannot open database" << endl;\n            return;\n        }\n        file.write(reinterpret_cast<const char*>(&record), sizeof(Record));\n        file.close();\n    }\n    \n    vector<Record> getAllRecords() {\n        vector<Record> records;\n        ifstream file(filename, ios::binary);\n        if (!file) return records;\n        \n        Record record;\n        while (file.read(reinterpret_cast<char*>(&record), sizeof(Record))) {\n            records.push_back(record);\n        }\n        file.close();\n        return records;\n    }\n    \n    Record* findRecord(int id) {\n        ifstream file(filename, ios::binary);\n        if (!file) return nullptr;\n        \n        Record record;\n        while (file.read(reinterpret_cast<char*>(&record), sizeof(Record))) {\n            if (record.id == id) {\n                file.close();\n                return new Record(record);\n            }\n        }\n        file.close();\n        return nullptr;\n    }\n};\n\nint main() {\n    SimpleDB db("data.db");\n    \n    // Add records\n    Record r1 = {1, "Item1", 10.5};\n    Record r2 = {2, "Item2", 20.3};\n    Record r3 = {3, "Item3", 30.7};\n    db.addRecord(r1);\n    db.addRecord(r2);\n    db.addRecord(r3);\n    \n    // Find record\n    Record* found = db.findRecord(2);\n    if (found) {\n        cout << "Found: ID=" << found->id << ", Name=" << found->name \n             << ", Value=" << found->value << endl;\n        delete found;\n    }\n    \n    // List all records\n    auto records = db.getAllRecords();\n    cout << "All records:" << endl;\n    for (const auto& r : records) {\n        cout << r.id << ": " << r.name << " = " << r.value << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Binary file storage is efficient for structured data.'
},
{
  id: 'cpp_filehandling_35',
  topicId: 'cpp_filehandling',
  question: 'Implement file versioning system.',
  mathSolution: 'Create numbered backups when file is modified.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <filesystem>\nusing namespace std;\nnamespace fs = filesystem;\n\nvoid backupFile(const string& filename) {\n    int version = 1;\n    string backupName;\n    \n    do {\n        backupName = filename + ".v" + to_string(version);\n        version++;\n    } while (fs::exists(backupName));\n    \n    fs::copy(filename, backupName);\n    cout << "Backup created: " << backupName << endl;\n}\n\nint main() {\n    string filename = "document.txt";\n    \n    // Simulate file modifications\n    backupFile(filename);\n    \n    ofstream file(filename, ios::app);\n    file << "New content added\\n";\n    file.close();\n    \n    backupFile(filename);\n    \n    return 0;\n}',
  hint: 'File versioning preserves history for rollback.'
},
{
  id: 'cpp_filehandling_36',
  topicId: 'cpp_filehandling',
  question: 'Monitor file for changes (last modification time).',
  mathSolution: 'Check file modification time periodically.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <chrono>\n#include <thread>\n#include <filesystem>\n#include <ctime>\nusing namespace std;\nnamespace fs = filesystem;\n\nauto getLastModified(const string& filename) {\n    return fs::last_write_time(filename);\n}\n\nint main() {\n    string filename = "monitor.txt";\n    \n    // Create file if not exists\n    ofstream(filename).close();\n    \n    auto lastMod = getLastModified(filename);\n    cout << "Monitoring file: " << filename << endl;\n    \n    while (true) {\n        this_thread::sleep_for(chrono::seconds(1));\n        \n        auto currentMod = getLastModified(filename);\n        if (currentMod != lastMod) {\n            time_t t = fs::file_time_type::clock::to_time_t(currentMod);\n            cout << "File changed at: " << ctime(&t);\n            ifstream file(filename);\n            string content;\n            while (getline(file, content)) {\n                cout << "New content: " << content << endl;\n            }\n            file.close();\n            lastMod = currentMod;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'File monitoring detects changes for automatic processing.'
},
{
  id: 'cpp_filehandling_37',
  topicId: 'cpp_filehandling',
  question: 'Parse log file and extract errors.',
  mathSolution: 'Search for lines containing error keywords.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream logFile("application.log");\n    ofstream errorFile("errors.log");\n    \n    if (!logFile || !errorFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<string> errorKeywords = {"ERROR", "FATAL", "EXCEPTION", "CRITICAL"};\n    string line;\n    int errorCount = 0;\n    \n    while (getline(logFile, line)) {\n        bool isError = false;\n        for (const auto& keyword : errorKeywords) {\n            if (line.find(keyword) != string::npos) {\n                isError = true;\n                break;\n            }\n        }\n        \n        if (isError) {\n            errorFile << line << endl;\n            errorCount++;\n        }\n    }\n    \n    logFile.close();\n    errorFile.close();\n    \n    cout << "Found " << errorCount << " error lines" << endl;\n    \n    return 0;\n}',
  hint: 'Log parsing helps in debugging and monitoring applications.'
},
{
  id: 'cpp_filehandling_38',
  topicId: 'cpp_filehandling',
  question: 'Generate HTML report from data file.',
  mathSolution: 'Read data and format as HTML table.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream dataFile("data.csv");\n    ofstream htmlFile("report.html");\n    \n    if (!dataFile || !htmlFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    htmlFile << "<html>\\n<head><title>Data Report</title></head>\\n<body>\\n";\n    htmlFile << "<h1>Data Report</h1>\\n<table border=\'1\'>\\n";\n    \n    string line;\n    int rowNum = 0;\n    \n    while (getline(dataFile, line)) {\n        htmlFile << "<tr>\\n";\n        stringstream ss(line);\n        string field;\n        \n        while (getline(ss, field, \',\')) {\n            if (rowNum == 0) {\n                htmlFile << "<th>" << field << "</th>\\n";\n            } else {\n                htmlFile << "<td>" << field << "</td>\\n";\n            }\n        }\n        htmlFile << "</tr>\\n";\n        rowNum++;\n    }\n    \n    htmlFile << "</table>\\n</body>\\n</html>";\n    \n    dataFile.close();\n    htmlFile.close();\n    \n    cout << "HTML report generated" << endl;\n    \n    return 0;\n}',
  hint: 'HTML generation creates human-readable reports from data.'
},
{
  id: 'cpp_filehandling_39',
  topicId: 'cpp_filehandling',
  question: 'Read configuration file with key-value pairs.',
  mathSolution: 'Parse lines with format key=value.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, string> config;\n    \n    ifstream configFile("config.ini");\n    if (!configFile) {\n        cout << "Creating default config file" << endl;\n        ofstream outFile("config.ini");\n        outFile << "host=localhost\\n";\n        outFile << "port=8080\\n";\n        outFile << "debug=true\\n";\n        outFile.close();\n        configFile.open("config.ini");\n    }\n    \n    string line;\n    while (getline(configFile, line)) {\n        size_t pos = line.find(\'=\');\n        if (pos != string::npos) {\n            string key = line.substr(0, pos);\n            string value = line.substr(pos + 1);\n            config[key] = value;\n        }\n    }\n    configFile.close();\n    \n    // Display configuration\n    cout << "Configuration:" << endl;\n    for (const auto& pair : config) {\n        cout << pair.first << " = " << pair.second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Configuration files allow easy application parameter adjustment.'
},
{
  id: 'cpp_filehandling_40',
  topicId: 'cpp_filehandling',
  question: 'Implement file locking for concurrent access.',
  mathSolution: 'Use flock or lockf for advisory file locking.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <thread>\n#include <mutex>\n#include <chrono>\n#include <string>\nusing namespace std;\n\nclass FileLocker {\nprivate:\n    mutex mtx;\n    \npublic:\n    void writeData(const string& filename, const string& data) {\n        lock_guard<mutex> lock(mtx);\n        ofstream file(filename, ios::app);\n        if (!file) {\n            cout << "Cannot open file" << endl;\n            return;\n        }\n        file << data << endl;\n        file.close();\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n};\n\nvoid writer(FileLocker& locker, int id) {\n    for (int i = 0; i < 5; i++) {\n        locker.writeData("shared.txt", "Thread " + to_string(id) + ": message " + to_string(i));\n    }\n}\n\nint main() {\n    FileLocker locker;\n    \n    thread t1(writer, ref(locker), 1);\n    thread t2(writer, ref(locker), 2);\n    thread t3(writer, ref(locker), 3);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    cout << "All threads completed" << endl;\n    \n    return 0;\n}',
  hint: 'File locking prevents data corruption in concurrent writes.'
},
{
  id: 'cpp_filehandling_41',
  topicId: 'cpp_filehandling',
  question: 'Implement simple text indexer for fast search.',
  mathSolution: 'Build map of words to line numbers.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\n#include <set>\n#include <sstream>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    map<string, set<int>> wordIndex;\n    \n    ifstream file("document.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    \n    while (getline(file, line)) {\n        lineNum++;\n        stringstream ss(line);\n        string word;\n        \n        while (ss >> word) {\n            // Remove punctuation\n            word.erase(remove_if(word.begin(), word.end(), ::ispunct), word.end());\n            transform(word.begin(), word.end(), word.begin(), ::tolower);\n            wordIndex[word].insert(lineNum);\n        }\n    }\n    file.close();\n    \n    // Search\n    string searchWord;\n    cout << "Enter word to search: ";\n    cin >> searchWord;\n    transform(searchWord.begin(), searchWord.end(), searchWord.begin(), ::tolower);\n    \n    if (wordIndex.find(searchWord) != wordIndex.end()) {\n        cout << "Found at lines: ";\n        for (int line : wordIndex[searchWord]) {\n            cout << line << " ";\n        }\n        cout << endl;\n    } else {\n        cout << "Word not found" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Indexer speeds up text search by pre-processing word locations.'
},
{
  id: 'cpp_filehandling_42',
  topicId: 'cpp_filehandling',
  question: 'Implement simple archive (tar-like) file format.',
  mathSolution: 'Store multiple files with headers in single archive.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <cstring>\nusing namespace std;\n\nstruct FileHeader {\n    char name[100];\n    size_t size;\n};\n\nvoid createArchive(const string& archiveName, const vector<string>& files) {\n    ofstream archive(archiveName, ios::binary);\n    \n    for (const auto& filename : files) {\n        ifstream inFile(filename, ios::binary);\n        if (!inFile) {\n            cout << "Cannot open " << filename << endl;\n            continue;\n        }\n        \n        // Get file size\n        inFile.seekg(0, ios::end);\n        size_t size = inFile.tellg();\n        inFile.seekg(0, ios::beg);\n        \n        // Write header\n        FileHeader header;\n        strncpy(header.name, filename.c_str(), 99);\n        header.name[99] = \'\\0\';\n        header.size = size;\n        archive.write(reinterpret_cast<char*>(&header), sizeof(header));\n        \n        // Write file content\n        char* buffer = new char[size];\n        inFile.read(buffer, size);\n        archive.write(buffer, size);\n        delete[] buffer;\n        inFile.close();\n        cout << "Added: " << filename << " (" << size << " bytes)" << endl;\n    }\n    archive.close();\n}\n\nvoid extractArchive(const string& archiveName) {\n    ifstream archive(archiveName, ios::binary);\n    \n    FileHeader header;\n    while (archive.read(reinterpret_cast<char*>(&header), sizeof(header))) {\n        char* buffer = new char[header.size];\n        archive.read(buffer, header.size);\n        \n        ofstream outFile(header.name, ios::binary);\n        outFile.write(buffer, header.size);\n        outFile.close();\n        delete[] buffer;\n        cout << "Extracted: " << header.name << endl;\n    }\n    archive.close();\n}\n\nint main() {\n    vector<string> files = {"file1.txt", "file2.txt", "file3.txt"};\n    createArchive("data.arc", files);\n    extractArchive("data.arc");\n    \n    return 0;\n}',
  hint: 'Archiving combines multiple files into one for easier distribution.'
},
{
  "id": "cpp_filehandling_43",
  "topicId": "cpp_filehandling",
  "question": "Read file in reverse order (efficient for large files).",
  "mathSolution": "Use seekg to read from end backwards.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid readFileReverse(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << \"Cannot open file: \" << filename << endl;\n        return;\n    }\n    \n    file.seekg(0, ios::end);\n    streampos fileSize = file.tellg();\n    \n    if (fileSize <= 0) {\n        cout << \"File is empty\" << endl;\n        file.close();\n        return;\n    }\n    \n    vector<char> buffer;\n    buffer.reserve(1024);\n    \n    for (streampos pos = fileSize - 1; pos >= 0; pos--) {\n        file.seekg(pos);\n        char ch;\n        file.get(ch);\n        buffer.push_back(ch);\n        \n        if (ch == '\\n' || pos == 0) {\n            reverse(buffer.begin(), buffer.end());\n            cout.write(buffer.data(), buffer.size());\n            buffer.clear();\n        }\n    }\n    file.close();\n}\n\nint main() {\n    ofstream sample(\"test.txt\");\n    if (sample) {\n        sample << \"Line 1: Hello World\\n\";\n        sample << \"Line 2: This is a test\\n\";\n        sample << \"Line 3: Reverse order\\n\";\n        sample << \"Line 4: File reading\\n\";\n        sample << \"Line 5: The end\\n\";\n        sample.close();\n        cout << \"Sample file created: test.txt\\n\\n\";\n    }\n    \n    cout << \"=== Reading file in reverse order ===\\n\";\n    readFileReverse(\"test.txt\");\n    \n    return 0;\n}",
  "hint": "Reverse reading is memory-efficient for large files."
},
{
  id: 'cpp_filehandling_44',
  topicId: 'cpp_filehandling',
  question: 'Implement simple file encryption with password.',
  mathSolution: 'Use password-derived key for XOR encryption.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nstring generateKey(const string& password, size_t size) {\n    string key;\n    while (key.size() < size) {\n        key += password;\n    }\n    key.resize(size);\n    return key;\n}\n\nvoid encryptDecrypt(const string& inputFile, const string& outputFile, const string& password) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    inFile.seekg(0, ios::end);\n    size_t size = inFile.tellg();\n    inFile.seekg(0, ios::beg);\n    \n    string key = generateKey(password, size);\n    \n    char* buffer = new char[size];\n    inFile.read(buffer, size);\n    \n    for (size_t i = 0; i < size; i++) {\n        buffer[i] ^= key[i];\n    }\n    \n    outFile.write(buffer, size);\n    \n    delete[] buffer;\n    inFile.close();\n    outFile.close();\n    \n    cout << "Operation completed" << endl;\n}\n\nint main() {\n    string password;\n    cout << "Enter password: ";\n    getline(cin, password);\n    \n    encryptDecrypt("plain.txt", "encrypted.enc", password);\n    encryptDecrypt("encrypted.enc", "decrypted.txt", password);\n    \n    return 0;\n}',
  hint: 'Password-based encryption provides basic file security.'
},
{
  id: 'cpp_filehandling_45',
  topicId: 'cpp_filehandling',
  question: 'Implement file shredder (secure deletion).',
  mathSolution: 'Overwrite file multiple times before deletion.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <random>\n#include <cstdio>\nusing namespace std;\n\nvoid shredFile(const string& filename, int passes = 3) {\n    // Get file size\n    ifstream inFile(filename, ios::binary);\n    if (!inFile) {\n        cout << "File not found" << endl;\n        return;\n    }\n    \n    inFile.seekg(0, ios::end);\n    streamsize size = inFile.tellg();\n    inFile.close();\n    \n    random_device rd;\n    mt19937 gen(rd());\n    uniform_int_distribution<> dis(0, 255);\n    \n    for (int pass = 0; pass < passes; pass++) {\n        ofstream outFile(filename, ios::binary);\n        if (!outFile) {\n            cout << "Cannot open file for writing" << endl;\n            return;\n        }\n        \n        for (streamsize i = 0; i < size; i++) {\n            char byte = static_cast<char>(dis(gen));\n            outFile.put(byte);\n        }\n        outFile.close();\n        cout << "Pass " << pass + 1 << " completed" << endl;\n    }\n    \n    // Delete the file\n    if (remove(filename.c_str()) == 0) {\n        cout << "File securely deleted" << endl;\n    } else {\n        cout << "Failed to delete file" << endl;\n    }\n}\n\nint main() {\n    string filename;\n    cout << "Enter file to shred: ";\n    cin >> filename;\n    \n    shredFile(filename, 5);\n    \n    return 0;\n}',
  hint: 'Overwriting prevents data recovery from deleted files.'
},
{
  id: 'cpp_filehandling_46',
  topicId: 'cpp_filehandling',
  question: 'Implement simple diff tool to compare files.',
  mathSolution: 'Use longest common subsequence algorithm.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<string> readLines(const string& filename) {\n    vector<string> lines;\n    ifstream file(filename);\n    string line;\n    while (getline(file, line)) {\n        lines.push_back(line);\n    }\n    return lines;\n}\n\nvoid printDiff(const vector<string>& file1, const vector<string>& file2) {\n    size_t i = 0, j = 0;\n    \n    while (i < file1.size() && j < file2.size()) {\n        if (file1[i] == file2[j]) {\n            cout << "  " << file1[i] << endl;\n            i++; j++;\n        } else {\n            if (i + 1 < file1.size() && file1[i + 1] == file2[j]) {\n                cout << "- " << file1[i] << endl;\n                i++;\n            } else if (j + 1 < file2.size() && file1[i] == file2[j + 1]) {\n                cout << "+ " << file2[j] << endl;\n                j++;\n            } else {\n                cout << "- " << file1[i] << endl;\n                cout << "+ " << file2[j] << endl;\n                i++; j++;\n            }\n        }\n    }\n    \n    while (i < file1.size()) {\n        cout << "- " << file1[i++] << endl;\n    }\n    \n    while (j < file2.size()) {\n        cout << "+ " << file2[j++] << endl;\n    }\n}\n\nint main() {\n    vector<string> file1 = readLines("old.txt");\n    vector<string> file2 = readLines("new.txt");\n    \n    cout << "Differences:" << endl;\n    printDiff(file1, file2);\n    \n    return 0;\n}',
  hint: 'Diff shows changes between files: - removed, + added.'
},
{
  id: 'cpp_filehandling_47',
  topicId: 'cpp_filehandling',
  question: 'Implement file watcher that triggers action on change.',
  mathSolution: 'Monitor file modification time and execute callback.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <thread>\n#include <chrono>\n#include <functional>\n#include <filesystem>\n#include <string>\n#include <ctime>\nusing namespace std;\nnamespace fs = filesystem;\n\nclass FileWatcher {\nprivate:\n    string filename;\n    fs::file_time_type lastWriteTime;\n    function<void()> callback;\n    bool running;\n    \npublic:\n    FileWatcher(const string& file, function<void()> cb) \n        : filename(file), callback(cb), running(true) {\n        if (fs::exists(filename)) {\n            lastWriteTime = fs::last_write_time(filename);\n        }\n    }\n    \n    void start() {\n        while (running) {\n            this_thread::sleep_for(chrono::seconds(1));\n            if (fs::exists(filename)) {\n                auto currentTime = fs::last_write_time(filename);\n                if (currentTime != lastWriteTime) {\n                    lastWriteTime = currentTime;\n                    callback();\n                }\n            }\n        }\n    }\n    \n    void stop() { running = false; }\n};\n\nint main() {\n    FileWatcher watcher("data.txt", []() {\n        time_t now = time(nullptr);\n        cout << "File changed at " << ctime(&now);\n        ifstream file("data.txt");\n        string content;\n        if (getline(file, content)) {\n            cout << "New content: " << content << endl;\n        }\n        file.close();\n    });\n    \n    cout << "Watching file for changes..." << endl;\n    \n    // Run for 10 seconds then exit (for demo)\n    thread watcherThread([&watcher]() { watcher.start(); });\n    this_thread::sleep_for(chrono::seconds(10));\n    watcher.stop();\n    watcherThread.join();\n    \n    return 0;\n}',
  hint: 'File watcher enables reactive programming on file changes.'
},
{
  id: 'cpp_filehandling_48',
  topicId: 'cpp_filehandling',
  question: 'Implement CSV to JSON converter.',
  mathSolution: 'Parse CSV and output JSON format.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Create sample CSV file for demonstration\n    ofstream sampleCSV("data.csv");\n    if (sampleCSV) {\n        sampleCSV << "name,age,city\\n";\n        sampleCSV << "John Doe,30,New York\\n";\n        sampleCSV << "Jane Smith,25,Los Angeles\\n";\n        sampleCSV << "Bob Johnson,35,Chicago\\n";\n        sampleCSV.close();\n        cout << "Sample CSV file created: data.csv\\n\\n";\n    }\n    \n    ifstream csvFile("data.csv");\n    ofstream jsonFile("data.json");\n    \n    if (!csvFile || !jsonFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<string> headers;\n    string line;\n    \n    // Read headers\n    getline(csvFile, line);\n    stringstream ss(line);\n    string field;\n    while (getline(ss, field, \',\')) {\n        headers.push_back(field);\n    }\n    \n    jsonFile << "[\\n";\n    int rowCount = 0;\n    \n    while (getline(csvFile, line)) {\n        stringstream ss2(line);\n        vector<string> values;\n        \n        while (getline(ss2, field, \',\')) {\n            values.push_back(field);\n        }\n        \n        if (rowCount > 0) jsonFile << ",\\n";\n        jsonFile << "  {\\n";\n        for (size_t i = 0; i < headers.size(); i++) {\n            jsonFile << "    \\"" << headers[i] << "\\": \\"";\n            string val = (i < values.size()) ? values[i] : "";\n            // Escape double quotes in values\n            for (char c : val) {\n                if (c == \'"\') jsonFile << "\\\\\\"";\n                else jsonFile << c;\n            }\n            jsonFile << "\\"";\n            if (i < headers.size() - 1) jsonFile << ",";\n            jsonFile << "\\n";\n        }\n        jsonFile << "  }";\n        rowCount++;\n    }\n    \n    jsonFile << "\\n]\\n";\n    \n    csvFile.close();\n    jsonFile.close();\n    \n    cout << "CSV to JSON conversion complete: data.json" << endl;\n    \n    // Display the generated JSON\n    ifstream jsonOutput("data.json");\n    if (jsonOutput) {\n        cout << "\\nGenerated JSON content:\\n";\n        string jsonLine;\n        while (getline(jsonOutput, jsonLine)) {\n            cout << jsonLine << endl;\n        }\n        jsonOutput.close();\n    }\n    \n    return 0;\n}',
  hint: 'JSON format is widely used for web APIs and data exchange.'
},
{
  id: 'cpp_filehandling_49',
  topicId: 'cpp_filehandling',
  question: 'Implement binary file to hex dump converter.',
  mathSolution: 'Read bytes and display hexadecimal representation.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <iomanip>\n#include <cctype>\n#include <string>\nusing namespace std;\n\nvoid hexDump(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << "Cannot open file: " << filename << endl;\n        return;\n    }\n    \n    const int BYTES_PER_LINE = 16;\n    unsigned char buffer[BYTES_PER_LINE];\n    int offset = 0;\n    \n    cout << hex << uppercase;\n    \n    while (file.read(reinterpret_cast<char*>(buffer), BYTES_PER_LINE) || file.gcount() > 0) {\n        int bytesRead = static_cast<int>(file.gcount());\n        \n        cout << setw(8) << setfill(\'0\') << offset << ": ";\n        \n        // Print hex\n        for (int i = 0; i < BYTES_PER_LINE; i++) {\n            if (i < bytesRead) {\n                cout << setw(2) << setfill(\'0\') << static_cast<int>(buffer[i]) << " ";\n            } else {\n                cout << "   ";\n            }\n            if (i == 7) cout << " ";\n        }\n        \n        cout << " |";\n        \n        // Print ASCII\n        for (int i = 0; i < bytesRead; i++) {\n            char c = static_cast<char>(buffer[i]);\n            cout << (isprint(static_cast<unsigned char>(c)) ? c : \'.\');\n        }\n        \n        cout << "|" << endl;\n        offset += BYTES_PER_LINE;\n    }\n    \n    file.close();\n}\n\nint main() {\n    // Create a sample binary file for demonstration\n    ofstream sample("binary.dat", ios::binary);\n    if (sample) {\n        const char* testData = "Hello World!\\x00\\x01\\x02\\x03\\xFFBinary Data";\n        sample.write(testData, 32);\n        sample.close();\n        cout << "Sample binary file created: binary.dat\\n\\n";\n    }\n    \n    hexDump("binary.dat");\n    return 0;\n}',
  hint: 'Hex dump helps analyze binary file contents.'
},
{
  id: 'cpp_filehandling_50',
  topicId: 'cpp_filehandling',
  question: 'Create comprehensive file handling demonstration program.',
  mathSolution: 'Combine multiple file operations in one example.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <filesystem>\nusing namespace std;\nnamespace fs = filesystem;\n\nclass FileManager {\nprivate:\n    string currentDir;\n    \npublic:\n    FileManager() : currentDir(fs::current_path().string()) {}\n    \n    void createFile(const string& name) {\n        ofstream file(name);\n        if (file) {\n            cout << "File created: " << name << endl;\n            file.close();\n        } else {\n            cout << "Failed to create file" << endl;\n        }\n    }\n    \n    void writeFile(const string& name, const string& content) {\n        ofstream file(name, ios::app);\n        if (file) {\n            file << content << endl;\n            cout << "Data written to " << name << endl;\n            file.close();\n        }\n    }\n    \n    void readFile(const string& name) {\n        ifstream file(name);\n        if (file) {\n            string line;\n            cout << "Content of " << name << ":\\n";\n            while (getline(file, line)) {\n                cout << line << endl;\n            }\n            file.close();\n        } else {\n            cout << "Cannot read file" << endl;\n        }\n    }\n    \n    void copyFile(const string& src, const string& dest) {\n        ifstream source(src, ios::binary);\n        ofstream destination(dest, ios::binary);\n        \n        if (source && destination) {\n            destination << source.rdbuf();\n            cout << "File copied: " << src << " -> " << dest << endl;\n        } else {\n            cout << "Copy failed" << endl;\n        }\n    }\n    \n    void moveFile(const string& src, const string& dest) {\n        fs::rename(src, dest);\n        cout << "File moved: " << src << " -> " << dest << endl;\n    }\n    \n    void deleteFile(const string& name) {\n        if (fs::remove(name)) {\n            cout << "File deleted: " << name << endl;\n        } else {\n            cout << "Cannot delete file" << endl;\n        }\n    }\n    \n    void listDirectory() {\n        cout << "Directory listing of \\"" << currentDir << "\\":\\n";\n        for (const auto& entry : fs::directory_iterator(currentDir)) {\n            cout << "  " << entry.path().filename().string()\n                 << (fs::is_directory(entry) ? "/" : "") << endl;\n        }\n    }\n    \n    void fileInfo(const string& name) {\n        if (fs::exists(name)) {\n            auto size = fs::file_size(name);\n            cout << "File: " << name << endl;\n            cout << "  Size: " << size << " bytes" << endl;\n            cout << "  Exists: Yes" << endl;\n        } else {\n            cout << "File not found: " << name << endl;\n        }\n    }\n};\n\nint main() {\n    cout << "=== File Handling Demonstration ===\\n\\n";\n    \n    FileManager fm;\n    \n    // Create and write files\n    fm.createFile("test1.txt");\n    fm.writeFile("test1.txt", "Hello, this is line 1");\n    fm.writeFile("test1.txt", "This is line 2");\n    fm.writeFile("test1.txt", "This is line 3");\n    \n    fm.createFile("test2.txt");\n    fm.writeFile("test2.txt", "Content for second file");\n    \n    // Read files\n    fm.readFile("test1.txt");\n    cout << endl;\n    \n    // File information\n    fm.fileInfo("test1.txt");\n    cout << endl;\n    \n    // Copy file\n    fm.copyFile("test1.txt", "test1_copy.txt");\n    cout << endl;\n    \n    // List directory\n    fm.listDirectory();\n    cout << endl;\n    \n    // Move file\n    fm.moveFile("test2.txt", "moved.txt");\n    fm.readFile("moved.txt");\n    cout << endl;\n    \n    // Delete files\n    fm.deleteFile("test1.txt");\n    fm.deleteFile("test1_copy.txt");\n    fm.deleteFile("moved.txt");\n    \n    cout << "\\n=== File Operations Completed ===\\n";\n    \n    return 0;\n}',
  hint: 'This demo covers file creation, writing, reading, copying, moving, deletion, and directory listing.'
}
);