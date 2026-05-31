QuizData.questions.push(
    // ============ LEVEL 1: BASIC FILE READING (1-15) ============
    {
      id: 'cs_file_1',
      topicId: 'cs_file',
      question: 'Write code to read all text from a file "input.txt" using File.ReadAllText().',
      mathSolution: 'Read the entire contents of a text file into a single string variable.',
      codeSolution: 'string content = File.ReadAllText(@"C:\input.txt");',
      hint: 'File.ReadAllText reads entire file as string'
    },
    {
      id: 'cs_file_2',
      topicId: 'cs_file',
      question: 'Write code to read all lines from a file into a string array.',
      mathSolution: 'Read a text file and store each line as a separate element in a string array.',
      codeSolution: 'string[] lines = File.ReadAllLines(@"C:\input.txt");',
      hint: 'File.ReadAllLines returns array of lines'
    },
    {
      id: 'cs_file_3',
      topicId: 'cs_file',
      question: 'Write code to write text "Hello World" to a file using File.WriteAllText().',
      mathSolution: 'Create or overwrite a file with the text "Hello World" as its entire content.',
      codeSolution: 'File.WriteAllText(@"C:\output.txt", "Hello World");',
      hint: 'File.WriteAllText creates/overwrites file'
    },
    {
      id: 'cs_file_4',
      topicId: 'cs_file',
      question: 'Write code to write array of lines to a file.',
      mathSolution: 'Write multiple lines to a file, with each array element becoming a separate line.',
      codeSolution: 'string[] lines = { "Line1", "Line2", "Line3" };\nFile.WriteAllLines(@"C:\output.txt", lines);',
      hint: 'File.WriteAllLines writes each element as line'
    },
    {
      id: 'cs_file_5',
      topicId: 'cs_file',
      question: 'Write code to append text "New line" to an existing file.',
      mathSolution: 'Add the text "New line" to the end of an existing file without overwriting its current content.',
      codeSolution: 'File.AppendAllText(@"C:\log.txt", "New line" + Environment.NewLine);',
      hint: 'File.AppendAllText adds to end of file'
    },
    {
      id: 'cs_file_6',
      topicId: 'cs_file',
      question: 'Write code to append array of lines to a file.',
      mathSolution: 'Add multiple lines to the end of an existing file.',
      codeSolution: 'string[] lines = { "Error1", "Error2" };\nFile.AppendAllLines(@"C:\log.txt", lines);',
      hint: 'File.AppendAllLines adds multiple lines'
    },
    {
      id: 'cs_file_7',
      topicId: 'cs_file',
      question: 'Write code to check if a file exists before reading.',
      mathSolution: 'Verify that a file exists at the specified path before attempting to read it.',
      codeSolution: 'string path = @"C:\input.txt";\nif(File.Exists(path)) {\n    string content = File.ReadAllText(path);\n}',
      hint: 'File.Exists returns bool'
    },
    {
      id: 'cs_file_8',
      topicId: 'cs_file',
      question: 'Write code to copy a file from source to destination.',
      mathSolution: 'Duplicate a file from one location to another.',
      codeSolution: 'File.Copy(@"C:\source.txt", @"C:\dest.txt");',
      hint: 'File.Copy duplicates file'
    },
    {
      id: 'cs_file_9',
      topicId: 'cs_file',
      question: 'Write code to move a file to new location.',
      mathSolution: 'Move or rename a file from its current location to a new one.',
      codeSolution: 'File.Move(@"C:\source.txt", @"C:\newfolder\source.txt");',
      hint: 'File.Move also renames'
    },
    {
      id: 'cs_file_10',
      topicId: 'cs_file',
      question: 'Write code to delete a file.',
      mathSolution: 'Permanently remove a file from the file system.',
      codeSolution: 'File.Delete(@"C:\temp.txt");',
      hint: 'File.Delete removes file permanently'
    },
    {
      id: 'cs_file_11',
      topicId: 'cs_file',
      question: 'Write code to get file information (size, creation time) using FileInfo.',
      mathSolution: 'Retrieve metadata about a file such as its size in bytes and when it was created.',
      codeSolution: 'FileInfo fi = new FileInfo(@"C:\test.txt");\nlong size = fi.Length;\nDateTime created = fi.CreationTime;',
      hint: 'FileInfo provides metadata'
    },
    {
      id: 'cs_file_12',
      topicId: 'cs_file',
      question: 'Write code to read file as byte array.',
      mathSolution: 'Read a binary file (like an image) into a byte array for processing.',
      codeSolution: 'byte[] bytes = File.ReadAllBytes(@"C:\image.jpg");',
      hint: 'ReadAllBytes for binary files'
    },
    {
      id: 'cs_file_13',
      topicId: 'cs_file',
      question: 'Write code to write byte array to file.',
      mathSolution: 'Write binary data (like the bytes representing "Hello") to a file.',
      codeSolution: 'byte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };\nFile.WriteAllBytes(@"C:\output.bin", data);',
      hint: 'WriteAllBytes for binary output'
    },
    {
      id: 'cs_file_14',
      topicId: 'cs_file',
      question: 'Write code to get file attributes.',
      mathSolution: 'Check file properties like whether it is read-only using the FileAttributes enum.',
      codeSolution: 'FileAttributes attrs = File.GetAttributes(@"C:\test.txt");\nbool isReadOnly = (attrs & FileAttributes.ReadOnly) != 0;',
      hint: 'FileAttributes enum for properties'
    },
    {
      id: 'cs_file_15',
      topicId: 'cs_file',
      question: 'Write code to set file to read-only.',
      mathSolution: 'Change a file\'s attributes to make it read-only, preventing modifications.',
      codeSolution: 'File.SetAttributes(@"C:\test.txt", FileAttributes.ReadOnly);',
      hint: 'SetAttributes modifies file flags'
    },

    // ============ LEVEL 2: STREAMREADER/STREAMWRITER (16-30) ============
    {
      id: 'cs_file_16',
      topicId: 'cs_file',
      question: 'Write code to read file line by line using StreamReader.',
      mathSolution: 'Read a file efficiently line by line without loading the entire file into memory.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    string line;\n    while ((line = sr.ReadLine()) != null) {\n        Console.WriteLine(line);\n    }\n}',
      hint: 'ReadLine returns null at end'
    },
    {
      id: 'cs_file_17',
      topicId: 'cs_file',
      question: 'Write code to write lines using StreamWriter.',
      mathSolution: 'Write multiple lines to a file using StreamWriter, which is efficient for sequential writing.',
      codeSolution: 'using (StreamWriter sw = new StreamWriter(@"C:\output.txt")) {\n    sw.WriteLine("First line");\n    sw.WriteLine("Second line");\n}',
      hint: 'using ensures proper disposal'
    },
    {
      id: 'cs_file_18',
      topicId: 'cs_file',
      question: 'Write code to append to file using StreamWriter with append parameter.',
      mathSolution: 'Add a timestamped log entry to the end of an existing file without overwriting.',
      codeSolution: 'using (StreamWriter sw = new StreamWriter(@"C:\log.txt", true)) {\n    sw.WriteLine(DateTime.Now + ": Log entry");\n}',
      hint: 'true parameter enables append'
    },
    {
      id: 'cs_file_19',
      topicId: 'cs_file',
      question: 'Write code to read file character by character using StreamReader.',
      mathSolution: 'Process a file one character at a time, which is useful for parsing or analysis.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    int character;\n    while ((character = sr.Read()) != -1) {\n        Console.Write((char)character);\n    }\n}',
      hint: 'Read() returns -1 at end'
    },
    {
      id: 'cs_file_20',
      topicId: 'cs_file',
      question: 'Write code to peek at next character without consuming it.',
      mathSolution: 'Look at the next character in a file without advancing the read position.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    int nextChar = sr.Peek();\n    if(nextChar != -1) {\n        Console.WriteLine("Next char: " + (char)nextChar);\n    }\n}',
      hint: 'Peek doesn\'t advance position'
    },
    {
      id: 'cs_file_21',
      topicId: 'cs_file',
      question: 'Write code to read exactly N characters from file.',
      mathSolution: 'Read exactly 10 characters from a file into a buffer, handling partial reads.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    char[] buffer = new char[10];\n    int charsRead = sr.ReadBlock(buffer, 0, 10);\n    string result = new string(buffer, 0, charsRead);\n}',
      hint: 'ReadBlock reads specified count'
    },
    {
      id: 'cs_file_22',
      topicId: 'cs_file',
      question: 'Write code to read file to end using ReadToEnd().',
      mathSolution: 'Read the entire remaining content of a file from the current position to the end.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    string content = sr.ReadToEnd();\n}',
      hint: 'ReadToEnd reads entire content'
    },
    {
      id: 'cs_file_23',
      topicId: 'cs_file',
      question: 'Write code to write formatted string using StreamWriter.',
      mathSolution: 'Write a formatted string with placeholders that get replaced with variable values.',
      codeSolution: 'using (StreamWriter sw = new StreamWriter(@"C:\output.txt")) {\n    string name = "John";\n    int age = 30;\n    sw.Write("Name: {0}, Age: {1}", name, age);\n}',
      hint: 'Write supports formatting'
    },
    {
      id: 'cs_file_24',
      topicId: 'cs_file',
      question: 'Write code to set StreamWriter encoding to UTF-8.',
      mathSolution: 'Write Unicode text (like Chinese characters) to a file using UTF-8 encoding.',
      codeSolution: 'using (StreamWriter sw = new StreamWriter(@"C:\output.txt", false, Encoding.UTF8)) {\n    sw.WriteLine("Unicode text: 你好");\n}',
      hint: 'Specify encoding in constructor'
    },
    {
      id: 'cs_file_25',
      topicId: 'cs_file',
      question: 'Write code to read file with specific encoding (UTF-8).',
      mathSolution: 'Read a file containing Unicode text using the correct UTF-8 encoding.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\input.txt", Encoding.UTF8)) {\n    string content = sr.ReadToEnd();\n}',
      hint: 'Encoding parameter handles special characters'
    },
    {
      id: 'cs_file_26',
      topicId: 'cs_file',
      question: 'Write code to copy file using StreamReader and StreamWriter.',
      mathSolution: 'Copy a file line by line using separate reader and writer streams.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\source.txt"))\nusing (StreamWriter sw = new StreamWriter(@"C:\dest.txt")) {\n    string line;\n    while ((line = sr.ReadLine()) != null) {\n        sw.WriteLine(line);\n    }\n}',
      hint: 'Nested using statements'
    },
    {
      id: 'cs_file_27',
      topicId: 'cs_file',
      question: 'Write code to read first 5 lines of a large file efficiently.',
      mathSolution: 'Read only the first 5 lines of a large file without loading the entire file into memory.',
      codeSolution: 'using (StreamReader sr = new StreamReader(@"C:\large.txt")) {\n    for(int i = 0; i < 5; i++) {\n        string line = sr.ReadLine();\n        if(line == null) break;\n        Console.WriteLine(line);\n    }\n}',
      hint: 'StreamReader reads line by line'
    },
    {
      id: 'cs_file_28',
      topicId: 'cs_file',
      question: 'Write code to count lines in a file without loading entire file.',
      mathSolution: 'Count the total number of lines in a file efficiently by reading line by line.',
      codeSolution: 'int lineCount = 0;\nusing (StreamReader sr = new StreamReader(@"C:\input.txt")) {\n    while (sr.ReadLine() != null) lineCount++;\n}\nConsole.WriteLine(lineCount);',
      hint: 'Count lines efficiently'
    },
    {
      id: 'cs_file_29',
      topicId: 'cs_file',
      question: 'Write code to search for a string in a file line by line.',
      mathSolution: 'Search a log file for lines containing "error" and display them with line numbers.',
      codeSolution: 'string searchTerm = "error";\nusing (StreamReader sr = new StreamReader(@"C:\log.txt")) {\n    string line;\n    int lineNum = 1;\n    while ((line = sr.ReadLine()) != null) {\n        if(line.Contains(searchTerm))\n            Console.WriteLine($"Line {lineNum}: {line}");\n        lineNum++;\n    }\n}',
      hint: 'Line-by-line search'
    },
    {
      id: 'cs_file_30',
      topicId: 'cs_file',
      question: 'Write code to read file from specific position using Seek.',
      mathSolution: 'Skip the first 100 bytes of a file and then start reading from that position.',
      codeSolution: 'using (FileStream fs = new FileStream(@"C:\data.txt", FileMode.Open))\nusing (StreamReader sr = new StreamReader(fs)) {\n    fs.Seek(100, SeekOrigin.Begin);\n    string line = sr.ReadLine();\n}',
      hint: 'Seek moves file pointer'
    },

    // ============ LEVEL 3: FILESTREAM & BINARY I/O (31-40) ============
    {
      id: 'cs_file_31',
      topicId: 'cs_file',
      question: 'Write code to open FileStream for reading.',
      mathSolution: 'Open a binary file for low-level reading into a byte buffer.',
      codeSolution: 'using (FileStream fs = new FileStream(@"C:\data.bin", FileMode.Open, FileAccess.Read)) {\n    byte[] buffer = new byte[1024];\n    int bytesRead = fs.Read(buffer, 0, buffer.Length);\n}',
      hint: 'FileStream for low-level access'
    },
    {
      id: 'cs_file_32',
      topicId: 'cs_file',
      question: 'Write code to write binary data using FileStream.',
      mathSolution: 'Write a byte array containing four bytes (0x01, 0x02, 0x03, 0x04) to a binary file.',
      codeSolution: 'byte[] data = { 0x01, 0x02, 0x03, 0x04 };\nusing (FileStream fs = new FileStream(@"C:\output.bin", FileMode.Create)) {\n    fs.Write(data, 0, data.Length);\n}',
      hint: 'Write byte array to file'
    },
    {
      id: 'cs_file_33',
      topicId: 'cs_file',
      question: 'Write code to use BinaryWriter to write primitive types.',
      mathSolution: 'Write different data types (int, double, string) to a binary file in a compact format.',
      codeSolution: 'using (BinaryWriter bw = new BinaryWriter(File.Open(@"C:\data.bin", FileMode.Create))) {\n    bw.Write(42); // int\n    bw.Write(3.14); // double\n    bw.Write("Hello"); // string\n}',
      hint: 'BinaryWriter handles primitive types'
    },
    {
      id: 'cs_file_34',
      topicId: 'cs_file',
      question: 'Write code to use BinaryReader to read primitive types.',
      mathSolution: 'Read back the int, double, and string values from a binary file in the same order they were written.',
      codeSolution: 'using (BinaryReader br = new BinaryReader(File.Open(@"C:\data.bin", FileMode.Open))) {\n    int num = br.ReadInt32();\n    double d = br.ReadDouble();\n    string s = br.ReadString();\n}',
      hint: 'Read in same order as written'
    },
    {
      id: 'cs_file_35',
      topicId: 'cs_file',
      question: 'Write code to copy file using FileStream with buffer.',
      mathSolution: 'Copy a large file efficiently using an 8KB buffer to minimize memory usage.',
      codeSolution: 'using (FileStream source = new FileStream(@"C:\source.bin", FileMode.Open))\nusing (FileStream dest = new FileStream(@"C:\dest.bin", FileMode.Create)) {\n    byte[] buffer = new byte[8192];\n    int bytesRead;\n    while ((bytesRead = source.Read(buffer, 0, buffer.Length)) > 0) {\n        dest.Write(buffer, 0, bytesRead);\n    }\n}',
      hint: 'Buffered copy for large files'
    },
    {
      id: 'cs_file_36',
      topicId: 'cs_file',
      question: 'Write code to read file in reverse order (last line first).',
      mathSolution: 'Read all lines of a file and display them in reverse order (from last to first).',
      codeSolution: 'using (FileStream fs = new FileStream(@"C:\input.txt", FileMode.Open, FileAccess.Read))\nusing (StreamReader sr = new StreamReader(fs)) {\n    fs.Seek(0, SeekOrigin.End);\n    // This is complex - simpler to read all and reverse\n    string[] lines = File.ReadAllLines(@"C:\input.txt");\n    Array.Reverse(lines);\n}',
      hint: 'Simpler to read all and reverse'
    },
    {
      id: 'cs_file_37',
      topicId: 'cs_file',
      question: 'Write code to lock a file for exclusive write access.',
      mathSolution: 'Open a file with exclusive access so no other processes can read or write it while locked.',
      codeSolution: 'using (FileStream fs = new FileStream(@"C:\data.txt", FileMode.OpenOrCreate, FileAccess.Write, FileShare.None)) {\n    // Exclusive access\n    using (StreamWriter sw = new StreamWriter(fs)) {\n        sw.WriteLine("Writing exclusively");\n    }\n}',
      hint: 'FileShare.None prevents other access'
    },
    {
      id: 'cs_file_38',
      topicId: 'cs_file',
      question: 'Write code to read file asynchronously using FileStream.',
      mathSolution: 'Read a large file asynchronously to avoid blocking the main thread.',
      codeSolution: 'using (FileStream fs = new FileStream(@"C:\large.txt", FileMode.Open, FileAccess.Read, FileShare.Read, 4096, true)) {\n    byte[] buffer = new byte[4096];\n    int bytesRead = await fs.ReadAsync(buffer, 0, buffer.Length);\n    string content = Encoding.UTF8.GetString(buffer, 0, bytesRead);\n}',
      hint: 'UseAsync flag enables async'
    },
    {
      id: 'cs_file_39',
      topicId: 'cs_file',
      question: 'Write code to write asynchronously using FileStream.',
      mathSolution: 'Write text to a file asynchronously, allowing other operations to continue while writing.',
      codeSolution: 'string text = "Hello Async World";\nbyte[] data = Encoding.UTF8.GetBytes(text);\nusing (FileStream fs = new FileStream(@"C:\output.txt", FileMode.Create, FileAccess.Write, FileShare.None, 4096, true)) {\n    await fs.WriteAsync(data, 0, data.Length);\n}',
      hint: 'WriteAsync for non-blocking writes'
    },
    {
      id: 'cs_file_40',
      topicId: 'cs_file',
      question: 'Write code to use MemoryMappedFile for large file access.',
      mathSolution: 'Map a large file into memory for fast random access without loading the entire file.',
      codeSolution: 'using (var mmf = MemoryMappedFile.CreateFromFile(@"C:\large.dat", FileMode.Open))\nusing (var accessor = mmf.CreateViewAccessor()) {\n    int value = accessor.ReadInt32(0); // read at offset 0\n    accessor.Write(4, 42); // write at offset 4\n}',
      hint: 'Memory-mapped files for large data'
    },

    // ============ LEVEL 4: DIRECTORY OPERATIONS (41-50) ============
    {
      id: 'cs_file_41',
      topicId: 'cs_file',
      question: 'Write code to create a new directory.',
      mathSolution: 'Create a new folder named "NewFolder" at the specified path.',
      codeSolution: 'Directory.CreateDirectory(@"C:\NewFolder");',
      hint: 'CreateDirectory creates path'
    },
    {
      id: 'cs_file_42',
      topicId: 'cs_file',
      question: 'Write code to check if directory exists.',
      mathSolution: 'Verify whether a directory exists at the given path before attempting to access it.',
      codeSolution: 'if(Directory.Exists(@"C:\MyFolder")) {\n    Console.WriteLine("Directory exists");\n}',
      hint: 'Directory.Exists returns bool'
    },
    {
      id: 'cs_file_43',
      topicId: 'cs_file',
      question: 'Write code to get all files in a directory.',
      mathSolution: 'Retrieve the full paths of all files contained in a directory.',
      codeSolution: 'string[] files = Directory.GetFiles(@"C:\MyFolder");\nforeach(string file in files) {\n    Console.WriteLine(file);\n}',
      hint: 'GetFiles returns full paths'
    },
    {
      id: 'cs_file_44',
      topicId: 'cs_file',
      question: 'Write code to get all .txt files in directory with search pattern.',
      mathSolution: 'Find all text files (.txt extension) within a specific directory.',
      codeSolution: 'string[] txtFiles = Directory.GetFiles(@"C:\MyFolder", "*.txt");',
      hint: 'Pattern filters files'
    },
    {
      id: 'cs_file_45',
      topicId: 'cs_file',
      question: 'Write code to get all subdirectories recursively.',
      mathSolution: 'Get all subdirectories within a folder, including nested folders at any depth.',
      codeSolution: 'string[] allDirs = Directory.GetDirectories(@"C:\MyFolder", "*", SearchOption.AllDirectories);',
      hint: 'AllDirectories searches recursively'
    },
    {
      id: 'cs_file_46',
      topicId: 'cs_file',
      question: 'Write code to delete directory with all contents.',
      mathSolution: 'Delete a directory and all files and subdirectories it contains (recursive delete).',
      codeSolution: 'Directory.Delete(@"C:\MyFolder", true); // true = recursive',
      hint: 'Recursive delete removes all files'
    },
    {
      id: 'cs_file_47',
      topicId: 'cs_file',
      question: 'Write code to move directory to new location.',
      mathSolution: 'Move or rename a directory to a different location in the file system.',
      codeSolution: 'Directory.Move(@"C:\MyFolder", @"C:\NewLocation\MyFolder");',
      hint: 'Move changes directory location'
    },
    {
      id: 'cs_file_48',
      topicId: 'cs_file',
      question: 'Write code to get directory information using DirectoryInfo.',
      mathSolution: 'Retrieve metadata about a directory such as its creation time and contained files.',
      codeSolution: 'DirectoryInfo di = new DirectoryInfo(@"C:\MyFolder");\nDateTime created = di.CreationTime;\nbool exists = di.Exists;\nvar files = di.GetFiles();',
      hint: 'DirectoryInfo provides metadata'
    },
    {
      id: 'cs_file_49',
      topicId: 'cs_file',
      question: 'Write code to enumerate files recursively with LINQ.',
      mathSolution: 'Find all files larger than 1KB in a directory tree using LINQ for filtering.',
      codeSolution: 'var allFiles = Directory.EnumerateFiles(@"C:\MyFolder", "*.*", SearchOption.AllDirectories)\n    .Where(f => new FileInfo(f).Length > 1024);',
      hint: 'EnumerateFiles for streaming'
    },
    {
      id: 'cs_file_50',
      topicId: 'cs_file',
      question: 'Write code to watch a directory for file changes using FileSystemWatcher.',
      mathSolution: 'Monitor a folder for file creation and changes, reacting to events in real-time.',
      codeSolution: 'using (FileSystemWatcher watcher = new FileSystemWatcher()) {\n    watcher.Path = @"C:\WatchFolder";\n    watcher.NotifyFilter = NotifyFilters.LastWrite | NotifyFilters.FileName;\n    watcher.Filter = "*.txt";\n    watcher.Created += (s, e) => Console.WriteLine($"File created: {e.Name}");\n    watcher.Changed += (s, e) => Console.WriteLine($"File changed: {e.Name}");\n    watcher.EnableRaisingEvents = true;\n    Console.WriteLine("Press Enter to exit");\n    Console.ReadLine();\n}',
      hint: 'FileSystemWatcher monitors changes'
    }
);