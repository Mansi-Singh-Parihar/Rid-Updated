QuizData.questions.push(
  // FILE CREATION AND BASIC OPERATIONS (5)
  {
    id: "file_1",
    topicId: "file",
    question: "Create a new file using File class.",
    mathSolution: "Use createNewFile() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        try {\n            if(file.createNewFile()) System.out.println("File created: " + file.getName());\n            else System.out.println("File already exists");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "createNewFile() returns boolean",
  },
  {
    id: "file_2",
    topicId: "file",
    question: "Check if file exists and get file properties.",
    mathSolution: "Use exists(), length(), etc.",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        if(file.exists()) {\n            System.out.println("File name: " + file.getName());\n            System.out.println("Absolute path: " + file.getAbsolutePath());\n            System.out.println("Size: " + file.length() + " bytes");\n            System.out.println("Readable: " + file.canRead());\n            System.out.println("Writable: " + file.canWrite());\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "File class has many property methods",
  },
  {
    id: "file_3",
    topicId: "file",
    question: "Delete a file.",
    mathSolution: "Use delete() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("temp.txt");\n        if(file.delete()) System.out.println("Deleted: " + file.getName());\n        else System.out.println("Delete failed (file may not exist)");\n    }\n}',
    hint: "delete() returns boolean",
  },
  {
    id: "file_4",
    topicId: "file",
    question: "Rename or move a file.",
    mathSolution: "Use renameTo() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File oldFile = new File("old.txt");\n        File newFile = new File("new.txt");\n        if(oldFile.renameTo(newFile)) System.out.println("Renamed successfully");\n        else System.out.println("Rename failed (source may not exist)");\n    }\n}',
    hint: "renameTo() moves/renames file",
  },
  {
    id: "file_5",
    topicId: "file",
    question: "Create directory and nested directories.",
    mathSolution: "Use mkdir() and mkdirs()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File("myFolder");\n        if(dir.mkdir()) System.out.println("Directory created");\n        else System.out.println("Directory already exists or failed");\n        File nested = new File("parent/child/grandchild");\n        if(nested.mkdirs()) System.out.println("Nested directories created");\n        else System.out.println("Nested directories already exist or failed");\n    }\n}',
    hint: "mkdirs() creates all parent directories",
  },

  // FILE WRITING (5)
  {
    id: "file_6",
    topicId: "file",
    question: "Write to file using FileWriter.",
    mathSolution: "FileWriter writes character data",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter("output.txt")) {\n            writer.write("Hello World!\\n");\n            writer.write("Second line");\n            System.out.println("Written successfully");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "FileWriter for text files",
  },
  {
    id: "file_7",
    topicId: "file",
    question: "Write to file using BufferedWriter.",
    mathSolution: "BufferedWriter for better performance",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"))) {\n            writer.write("Buffered writing");\n            writer.newLine();\n            writer.write("Another line");\n            System.out.println("Buffered write complete");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "BufferedWriter has newLine() method",
  },
  {
    id: "file_8",
    topicId: "file",
    question: "Append to existing file.",
    mathSolution: "Use FileWriter with append flag",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter("log.txt", true)) {\n            writer.write("New log entry at " + new java.util.Date() + "\\n");\n            System.out.println("Appended to file");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Pass true as second parameter to append",
  },
  {
    id: "file_9",
    topicId: "file",
    question: "Write to file using PrintWriter.",
    mathSolution: "PrintWriter has print/println methods",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (PrintWriter pw = new PrintWriter(new File("print.txt"))) {\n            pw.println("PrintWriter example");\n            pw.printf("Formatted: %d + %d = %d%n", 5, 3, 5+3);\n            System.out.println("PrintWriter done");\n        } catch(FileNotFoundException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "PrintWriter supports format strings",
  },
  {
    id: "file_10",
    topicId: "file",
    question: "Write binary data using FileOutputStream.",
    mathSolution: "FileOutputStream for bytes",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileOutputStream fos = new FileOutputStream("binary.dat")) {\n            byte[] data = {65, 66, 67, 68, 69};\n            fos.write(data);\n            System.out.println("Binary data written");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "FileOutputStream writes bytes",
  },

  // FILE READING (5) – all corrected to create sample files
  {
    id: "file_11",
    topicId: "file",
    question: "Read file using FileReader.",
    mathSolution: "FileReader reads character by character",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("input.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Hello from sample file\\nSecond line");\n            } catch(IOException e) {}\n        }\n        try (FileReader reader = new FileReader("input.txt")) {\n            int character;\n            while((character = reader.read()) != -1) {\n                System.out.print((char)character);\n            }\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "read() returns -1 at end of file",
  },
  {
    id: "file_12",
    topicId: "file",
    question: "Read file using BufferedReader (line by line).",
    mathSolution: "BufferedReader reads lines efficiently",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("input.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Line 1\\nLine 2\\nLine 3");\n            } catch(IOException e) {}\n        }\n        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {\n            String line;\n            while((line = br.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "readLine() returns null at EOF",
  },
  {
  id: "file_13",
  topicId: "file",
  question: "Read file using Scanner.",
  mathSolution: "Scanner provides parsing methods",
  codeSolution: 'import java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("data.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Apple\\nBanana\\nOrange");\n            } catch(IOException e) {}\n        }\n        try (Scanner scanner = new Scanner(new File("data.txt"))) {\n            while(scanner.hasNextLine()) {\n                System.out.println(scanner.nextLine());\n            }\n        } catch(FileNotFoundException e) {\n            System.out.println("File not found - but we created it, shouldn\'t happen");\n        }\n    }\n}',
  hint: "Scanner has hasNextLine() and nextLine()",
},
  {
    id: "file_14",
    topicId: "file",
    question: "Read binary data using FileInputStream.",
    mathSolution: "FileInputStream reads bytes",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File bin = new File("binary.dat");\n        if(!bin.exists() || bin.length() == 0) {\n            try (FileOutputStream fos = new FileOutputStream(bin)) {\n                byte[] data = {65, 66, 67, 68, 69};\n                fos.write(data);\n            } catch(IOException e) {}\n        }\n        try (FileInputStream fis = new FileInputStream("binary.dat")) {\n            int byteData;\n            while((byteData = fis.read()) != -1) {\n                System.out.print(byteData + " ");\n            }\n            System.out.println();\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "read() returns int from 0-255 or -1",
  },
  {
    id: "file_15",
    topicId: "file",
    question: "Read file into byte array.",
    mathSolution: "Read all bytes at once",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("sample.txt");\n        if(!file.exists()) {\n            try (FileWriter fw = new FileWriter(file)) {\n                fw.write("Hello byte array!");\n            } catch(IOException e) {}\n        }\n        if(file.length() > Integer.MAX_VALUE) return;\n        byte[] fileData = new byte[(int)file.length()];\n        try (FileInputStream fis = new FileInputStream(file)) {\n            int bytesRead = fis.read(fileData);\n            System.out.println("Read " + bytesRead + " bytes");\n            System.out.println(new String(fileData));\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Read entire file into byte array",
  },

  // FILE AND DIRECTORY LISTING (3)
  {
    id: "file_16",
    topicId: "file",
    question: "List all files in a directory.",
    mathSolution: "Use list() or listFiles()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File(".");\n        File[] files = dir.listFiles();\n        if(files != null) {\n            System.out.println("Files in current directory:");\n            for(File f : files) {\n                if(f.isFile()) System.out.println("File: " + f.getName());\n                else if(f.isDirectory()) System.out.println("Dir:  " + f.getName());\n            }\n        }\n    }\n}',
    hint: "listFiles() returns File array",
  },
  {
    id: "file_17",
    topicId: "file",
    question: "Filter files by extension.",
    mathSolution: "Use FilenameFilter",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File(".");\n        String[] txtFiles = dir.list((d, name) -> name.endsWith(".txt"));\n        if(txtFiles != null) {\n            System.out.println("Text files:");\n            for(String f : txtFiles) System.out.println(f);\n        }\n    }\n}',
    hint: "FilenameFilter filters file names (lambda used here)",
  },
  {
    id: "file_18",
    topicId: "file",
    question: "Recursively list all files in subdirectories.",
    mathSolution: "Recursive directory traversal",
    codeSolution: 'import java.io.*;\npublic class Main {\n    static void listFilesRecursive(File dir) {\n        File[] files = dir.listFiles();\n        if(files != null) {\n            for(File f : files) {\n                if(f.isDirectory()) listFilesRecursive(f);\n                else System.out.println(f.getAbsolutePath());\n            }\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Recursive file listing:");\n        listFilesRecursive(new File("."));\n    }\n}',
    hint: "Recursive method for nested directories",
  },

  // FILE STREAMS AND ADVANCED (5) – corrected to create sample files where needed
  {
    id: "file_19",
    topicId: "file",
    question: "Copy file using FileInputStream and FileOutputStream.",
    mathSolution: "Read from source, write to destination",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File src = new File("source.txt");\n        if(!src.exists()) {\n            try (FileWriter fw = new FileWriter(src)) {\n                fw.write("Content to copy.");\n            } catch(IOException e) {}\n        }\n        try (FileInputStream fis = new FileInputStream("source.txt");\n             FileOutputStream fos = new FileOutputStream("copy.txt")) {\n            int b;\n            while((b = fis.read()) != -1) fos.write(b);\n            System.out.println("File copied");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Read and write byte by byte",
  },
  {
    id: "file_20",
    topicId: "file",
    question: "Copy large file using buffer for performance.",
    mathSolution: "Use buffered streams",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Create a small dummy file if large.zip does not exist\n        File large = new File("large.zip");\n        if(!large.exists()) {\n            try (FileOutputStream fos = new FileOutputStream(large)) {\n                byte[] dummy = new byte[100];\n                fos.write(dummy);\n            } catch(IOException e) {}\n        }\n        try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("large.zip"));\n             BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("large_copy.zip"))) {\n            byte[] buffer = new byte[4096];\n            int bytesRead;\n            while((bytesRead = bis.read(buffer)) != -1) {\n                bos.write(buffer, 0, bytesRead);\n            }\n            System.out.println("Large file copied");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Use buffer array for efficiency",
  },
  {
    id: "file_21",
    topicId: "file",
    question: "Read file using try-with-resources.",
    mathSolution: "Automatic resource management",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File f = new File("input.txt");\n        if(!f.exists()) {\n            try (FileWriter fw = new FileWriter(f)) {\n                fw.write("Line one\\nLine two");\n            } catch(IOException e) {}\n        }\n        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {\n            String line;\n            while((line = br.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Resources in try() close automatically",
  },
  {
    id: "file_22",
    topicId: "file",
    question: "Read file using Files class (Java NIO).",
    mathSolution: "Files class utility methods",
    codeSolution: 'import java.nio.file.*;\nimport java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path path = Paths.get("input.txt");\n        try {\n            if(!Files.exists(path)) {\n                Files.write(path, Arrays.asList("First line", "Second line"));\n            }\n            List<String> lines = Files.readAllLines(path);\n            for(String line : lines) System.out.println(line);\n            byte[] data = Files.readAllBytes(path);\n            System.out.println("File size: " + data.length);\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Files.readAllLines() reads all lines",
  },
  {
    id: "file_23",
    topicId: "file",
    question: "Write using Files class (Java NIO).",
    mathSolution: "Files.write() for simple writing",
    codeSolution: 'import java.nio.file.*;\nimport java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            Path path = Paths.get("nio_output.txt");\n            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");\n            Files.write(path, lines);\n            System.out.println("Written using NIO");\n            Files.write(path, "\\nAppended line".getBytes(), StandardOpenOption.APPEND);\n            System.out.println("Appended");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Files.write() with options",
  },

  // FILE PERMISSIONS AND ATTRIBUTES (2)
  {
    id: "file_24",
    topicId: "file",
    question: "Set file permissions (read, write, execute).",
    mathSolution: "Use setReadable(), setWritable(), setExecutable()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("script.sh");\n        if(file.exists()) {\n            file.setReadable(true);\n            file.setWritable(true);\n            file.setExecutable(true);\n            System.out.println("Permissions set: rwx");\n            System.out.println("Read: " + file.canRead());\n            System.out.println("Write: " + file.canWrite());\n            System.out.println("Exec: " + file.canExecute());\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "Set permissions with boolean flags",
  },
  {
    id: "file_25",
    topicId: "file",
    question: "Get file last modified time and set new time.",
    mathSolution: "Use lastModified() and setLastModified()",
    codeSolution: 'import java.io.*;\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        if(file.exists()) {\n            long lastModified = file.lastModified();\n            System.out.println("Last modified: " + new Date(lastModified));\n            boolean success = file.setLastModified(System.currentTimeMillis());\n            if(success) System.out.println("Modified time updated");\n            else System.out.println("Failed to update time");\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "lastModified returns timestamp in milliseconds",
  },
  {
    "id": "file_26",
    "topicId": "file",
    "question": "Write a Serializable object (Person with name and age) to a file using ObjectOutputStream and read it back using ObjectInputStream.",
    "mathSolution": "Serialization allows writing objects to a stream; deserialization reconstructs them.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static class Person implements Serializable {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public String toString() { return name + \" (\" + age + \")\"; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Alice\", 25);\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"person.dat\"));\n             ObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"person.dat\"))) {\n            oos.writeObject(p);\n            Person readPerson = (Person) ois.readObject();\n            System.out.println(\"Read object: \" + readPerson);\n        } catch(IOException | ClassNotFoundException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Implement Serializable interface, use writeObject() and readObject()."
  },
  {
    "id": "file_27",
    "topicId": "file",
    "question": "Use RandomAccessFile to write a string at position 10 and read from position 5.",
    "mathSolution": "RandomAccessFile allows reading/writing at any file pointer position.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (RandomAccessFile raf = new RandomAccessFile(\"random.txt\", \"rw\")) {\n            raf.writeBytes(\"HelloWorld12345\");\n            raf.seek(5);\n            byte[] buffer = new byte[5];\n            raf.read(buffer);\n            System.out.println(\"From position 5: \" + new String(buffer));\n            raf.seek(10);\n            raf.writeBytes(\"JAVA\");\n            raf.seek(0);\n            byte[] all = new byte[(int)raf.length()];\n            raf.read(all);\n            System.out.println(\"Final content: \" + new String(all));\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Use seek() to move file pointer, write() and read() methods."
  },
  {
    "id": "file_28",
    "topicId": "file",
    "question": "Create a temporary file using File.createTempFile() and ensure it is deleted when the JVM exits.",
    "mathSolution": "createTempFile() creates a unique file in default temp directory; deleteOnExit() marks it for deletion.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        File temp = File.createTempFile(\"myprefix\", \".tmp\");\n        temp.deleteOnExit();\n        System.out.println(\"Temp file created: \" + temp.getAbsolutePath());\n        try (FileWriter fw = new FileWriter(temp)) {\n            fw.write(\"Temporary data\");\n        }\n        System.out.println(\"File will be deleted on JVM exit.\");\n    }\n}",
    "hint": "Use createTempFile(prefix, suffix) and deleteOnExit()."
  },
  {
  "id": "file_29",
  "topicId": "file",
  "question": "Check if a given path is a regular file, directory, or symbolic link using Files class (NIO).",
  "mathSolution": "Files.isRegularFile(), isDirectory(), isSymbolicLink() provide type information.",
  "codeSolution": "import java.nio.file.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path p1 = Paths.get(\"test.txt\");\n        Path p2 = Paths.get(\"myFolder\");\n        if (!Files.exists(p1)) Files.createFile(p1);\n        if (!Files.exists(p2)) Files.createDirectory(p2);\n        System.out.println(p1 + \" is regular file: \" + Files.isRegularFile(p1));\n        System.out.println(p1 + \" is directory: \" + Files.isDirectory(p1));\n        System.out.println(p2 + \" is directory: \" + Files.isDirectory(p2));\n    }\n}",
  "hint": "Use Files helper methods for file type checks."
},
  {
    "id": "file_30",
    "topicId": "file",
    "question": "Get the size of a file in a human readable format (e.g., 1.5 MB) using File.length().",
    "mathSolution": "Convert bytes to KB, MB, GB using division and conditional logic.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static String readableSize(long bytes) {\n        if (bytes < 1024) return bytes + \" B\";\n        int exp = (int)(Math.log(bytes) / Math.log(1024));\n        char pre = \"KMGTPE\".charAt(exp-1);\n        return String.format(\"%.1f %sB\", bytes / Math.pow(1024, exp), pre);\n    }\n    public static void main(String[] args) {\n        File f = new File(\"test.txt\");\n        if (!f.exists()) {\n            try { f.createNewFile(); } catch(IOException e) {}\n        }\n        long size = f.length();\n        System.out.println(\"Raw size: \" + size + \" bytes\");\n        System.out.println(\"Readable size: \" + readableSize(size));\n    }\n}",
    "hint": "Use Math.log to determine appropriate unit."
  },
  {
    "id": "file_31",
    "topicId": "file",
    "question": "List all available drives (roots) on the system using File.listRoots().",
    "mathSolution": "listRoots() returns an array of File objects representing root directories.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File[] roots = File.listRoots();\n        System.out.println(\"Available drives:\");\n        for (File root : roots) {\n            System.out.println(root.getAbsolutePath());\n        }\n    }\n}",
    "hint": "File.listRoots() works on Windows and Unix."
  },
  {
    "id": "file_32",
    "topicId": "file",
    "question": "Use FileChannel to copy a file using transferTo method for efficient copying.",
    "mathSolution": "FileChannel.transferTo() copies data directly between channels without user space.",
    "codeSolution": "import java.io.*;\nimport java.nio.channels.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        File src = new File(\"source.txt\");\n        File dest = new File(\"dest.txt\");\n        if (!src.exists()) {\n            try (FileWriter fw = new FileWriter(src)) { fw.write(\"Data for channel copy\"); }\n        }\n        try (FileInputStream fis = new FileInputStream(src);\n             FileOutputStream fos = new FileOutputStream(dest);\n             FileChannel inChannel = fis.getChannel();\n             FileChannel outChannel = fos.getChannel()) {\n            long transferred = inChannel.transferTo(0, inChannel.size(), outChannel);\n            System.out.println(\"Copied \" + transferred + \" bytes using FileChannel.transferTo()\");\n        }\n    }\n}",
    "hint": "Get FileChannel from streams and use transferTo."
  },
  {
    "id": "file_33",
    "topicId": "file",
    "question": "Read a text file line by line using Files.lines() (Stream API) and print each line.",
    "mathSolution": "Files.lines() returns a Stream<String> that can be processed with forEach.",
    "codeSolution": "import java.nio.file.*;\nimport java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path path = Paths.get(\"input.txt\");\n        try {\n            if (!Files.exists(path)) {\n                Files.write(path, \"Line 1\\nLine 2\\nLine 3\".getBytes());\n            }\n            Files.lines(path).forEach(System.out::println);\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Use Files.lines() and close the stream automatically."
  },
  {
  "id": "file_34",
  "topicId": "file",
  "question": "Write multiple lines to a file using Files.write() with an Iterable (e.g., List).",
  "mathSolution": "Files.write(Path, Iterable<? extends CharSequence>, Charset, OpenOption) is convenient.",
  "codeSolution": "import java.nio.file.*;\nimport java.util.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> lines = Arrays.asList(\"First line\", \"Second line\", \"Third line\");\n        Path path = Paths.get(\"lines.txt\");\n        try {\n            Files.write(path, lines);\n            System.out.println(\"Written \" + lines.size() + \" lines.\");\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
  "hint": "Files.write can accept a List of strings."
},
  {
    "id": "file_35",
    "topicId": "file",
    "question": "Check if two files have identical content by reading all bytes and comparing with Arrays.equals.",
    "mathSolution": "Files.readAllBytes() reads entire file; compare byte arrays.",
    "codeSolution": "import java.nio.file.*;\nimport java.util.Arrays;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path f1 = Paths.get(\"file1.txt\");\n        Path f2 = Paths.get(\"file2.txt\");\n        if (!Files.exists(f1)) Files.write(f1, \"Hello\".getBytes());\n        if (!Files.exists(f2)) Files.write(f2, \"Hello\".getBytes());\n        byte[] data1 = Files.readAllBytes(f1);\n        byte[] data2 = Files.readAllBytes(f2);\n        boolean equal = Arrays.equals(data1, data2);\n        System.out.println(\"Files are identical: \" + equal);\n    }\n}",
    "hint": "Use Files.readAllBytes() and Arrays.equals()."
  },
  {
    "id": "file_36",
    "topicId": "file",
    "question": "Move a file from one directory to another using Files.move with StandardCopyOption.REPLACE_EXISTING.",
    "mathSolution": "Files.move requires source and target paths; options control overwriting.",
    "codeSolution": "import java.nio.file.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path source = Paths.get(\"source.txt\");\n        Path target = Paths.get(\"subdir/source.txt\");\n        if (!Files.exists(source)) Files.write(source, \"Move me\".getBytes());\n        if (!Files.exists(Paths.get(\"subdir\"))) Files.createDirectory(Paths.get(\"subdir\"));\n        Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"File moved to: \" + target.toAbsolutePath());\n    }\n}",
    "hint": "Use Files.move() with REPLACE_EXISTING to overwrite."
  },
  {
    "id": "file_37",
    "topicId": "file",
    "question": "Create a symbolic link (if supported) using Files.createSymbolicLink and verify it.",
    "mathSolution": "Symbolic links are created with createSymbolicLink; need to handle UnsupportedOperationException.",
    "codeSolution": "import java.nio.file.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path target = Paths.get(\"test.txt\");\n        Path link = Paths.get(\"link_to_test.txt\");\n        try {\n            if (!Files.exists(target)) Files.createFile(target);\n            Files.createSymbolicLink(link, target);\n            System.out.println(\"Symbolic link created: \" + link);\n            System.out.println(\"Is symbolic link? \" + Files.isSymbolicLink(link));\n        } catch(UnsupportedOperationException e) {\n            System.out.println(\"Symbolic links not supported on this file system\");\n        } catch(Exception e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "createSymbolicLink may throw UnsupportedOperationException on some OS/file systems."
  },
  {
    "id": "file_38",
    "topicId": "file",
    "question": "Read file attributes like creation time, last access time, and last modified time using Files.readAttributes.",
    "mathSolution": "BasicFileAttributes interface provides timestamps.",
    "codeSolution": "import java.nio.file.*;\nimport java.nio.file.attribute.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path path = Paths.get(\"test.txt\");\n        if (!Files.exists(path)) Files.createFile(path);\n        BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);\n        System.out.println(\"Creation time: \" + attrs.creationTime());\n        System.out.println(\"Last access time: \" + attrs.lastAccessTime());\n        System.out.println(\"Last modified time: \" + attrs.lastModifiedTime());\n    }\n}",
    "hint": "Use BasicFileAttributes to get file timestamps."
  },
  {
    "id": "file_39",
    "topicId": "file",
    "question": "Write to a file using FileChannel and ByteBuffer. Use a buffer with capacity 1024.",
    "mathSolution": "ByteBuffer stores data; channel.write() writes from buffer.",
    "codeSolution": "import java.io.*;\nimport java.nio.*;\nimport java.nio.channels.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        try (FileChannel channel = new FileOutputStream(\"nio_buffer.txt\").getChannel()) {\n            ByteBuffer buffer = ByteBuffer.allocate(1024);\n            String data = \"Writing via FileChannel and ByteBuffer\";\n            buffer.put(data.getBytes());\n            buffer.flip();\n            while (buffer.hasRemaining()) channel.write(buffer);\n            System.out.println(\"Data written using FileChannel.\");\n        }\n    }\n}",
    "hint": "Flip buffer after putting data before writing."
  },
  {
  "id": "file_40",
  "topicId": "file",
  "question": "Read from console (System.in) using BufferedReader and write the input to a file until user types 'exit'.",
  "mathSolution": "Use BufferedReader to read lines; break on \"exit\" or end-of-input.",
  "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedReader console = new BufferedReader(new InputStreamReader(System.in));\n             FileWriter fw = new FileWriter(\"console_output.txt\")) {\n            System.out.println(\"Enter text (type 'exit' to finish):\");\n            String line;\n            while ((line = console.readLine()) != null) {\n                if (line.equalsIgnoreCase(\"exit\")) {\n                    break;\n                }\n                fw.write(line + \"\\n\");\n            }\n            System.out.println(\"Input saved to console_output.txt\");\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
  "hint": "Check for null from readLine() to handle EOF gracefully."
}
);