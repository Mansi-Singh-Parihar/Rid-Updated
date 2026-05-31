QuizData.questions.push(
    // ============ LEVEL 1: CONSOLE OUTPUT BASICS (1-15) ============
    {
      id: 'go_input_output_1',
      topicId: 'go_input_output',
      question: 'Write code to print "Hello World" to the console.',
      mathSolution: 'Display the text "Hello World" on the console screen.',
      codeSolution: 'fmt.Println("Hello World")',
      hint: 'Use fmt.Println()'
    },
    {
      id: 'go_input_output_2',
      topicId: 'go_input_output',
      question: 'Write code to print your name "John" to the console.',
      mathSolution: 'Display the text "John" on the console screen.',
      codeSolution: 'fmt.Println("John")',
      hint: 'Pass string to Println'
    },
    {
      id: 'go_input_output_3',
      topicId: 'go_input_output',
      question: 'Write code to print number 42 to the console.',
      mathSolution: 'Display the number 42 on the console screen.',
      codeSolution: 'fmt.Println(42)',
      hint: 'Println works with numbers'
    },
    {
      id: 'go_input_output_4',
      topicId: 'go_input_output',
      question: 'Write code to print multiple items on same line using fmt.Print().',
      mathSolution: 'Print "Hello " and then "World" on the same line without a line break between them.',
      codeSolution: 'fmt.Print("Hello ")\nfmt.Print("World")',
      hint: 'Print() stays on same line'
    },
    {
      id: 'go_input_output_5',
      topicId: 'go_input_output',
      question: 'Write code to print an empty blank line.',
      mathSolution: 'Output a blank line to the console, moving the cursor to the next line.',
      codeSolution: 'fmt.Println()',
      hint: 'Println() with no args prints blank line'
    },
    {
      id: 'go_input_output_6',
      topicId: 'go_input_output',
      question: 'Write code to print the value of variable age:=25.',
      mathSolution: 'Display the value stored in the age variable (25) on the console.',
      codeSolution: 'age := 25\nfmt.Println(age)',
      hint: 'Pass variable to Println'
    },
    {
      id: 'go_input_output_7',
      topicId: 'go_input_output',
      question: 'Write code to print using concatenation: "Age: " + strconv.Itoa(age).',
      mathSolution: 'Combine the text "Age: " with the numeric value 25 to display "Age: 25".',
      codeSolution: 'age := 25\nfmt.Println("Age: " + strconv.Itoa(age))',
      hint: 'Use strconv.Itoa() to convert int to string'
    },
    {
      id: 'go_input_output_8',
      topicId: 'go_input_output',
      question: 'Write code to print using fmt.Printf() with format specifier.',
      mathSolution: 'Use %v format specifier to insert the age value into the string: "Age: 25".',
      codeSolution: 'age := 25\nfmt.Printf("Age: %v", age)',
      hint: 'Use %v for default formatting'
    },
    {
      id: 'go_input_output_9',
      topicId: 'go_input_output',
      question: 'Write code to print using fmt.Printf() with multiple values.',
      mathSolution: 'Replace %v with name "John" and %v with age 25 to display "John is 25 years old".',
      codeSolution: 'name := "John"\nage := 25\nfmt.Printf("%v is %v years old", name, age)',
      hint: 'Multiple %v placeholders'
    },
    {
      id: 'go_input_output_10',
      topicId: 'go_input_output',
      question: 'Write code to print a number with 2 decimal places using fmt.Printf().',
      mathSolution: 'Format 19.99 to display as "Price: 19.99" with exactly two decimal places.',
      codeSolution: 'price := 19.99\nfmt.Printf("Price: %.2f", price)',
      hint: '%.2f formats float with 2 decimal places'
    },
    {
      id: 'go_input_output_11',
      topicId: 'go_input_output',
      question: 'Write code to print a number with width (right-aligned).',
      mathSolution: 'Print the number 42 right-aligned in a field of 10 characters: "        42".',
      codeSolution: 'num := 42\nfmt.Printf("Number: %10d", num)',
      hint: '%10d uses 10 characters width'
    },
    {
      id: 'go_input_output_12',
      topicId: 'go_input_output',
      question: 'Write code to print a number with left alignment.',
      mathSolution: 'Print the number 42 left-aligned in a field of 10 characters: "42        ".',
      codeSolution: 'num := 42\nfmt.Printf("Number: %-10d", num)',
      hint: '%-10d left-aligns'
    },
    {
      id: 'go_input_output_13',
      topicId: 'go_input_output',
      question: 'Write code to print a number in hexadecimal.',
      mathSolution: 'Convert 255 to hexadecimal, which is "ff".',
      codeSolution: 'num := 255\nfmt.Printf("Hex: %x", num)',
      hint: '%x formats as hexadecimal'
    },
    {
      id: 'go_input_output_14',
      topicId: 'go_input_output',
      question: 'Write code to print a number in binary.',
      mathSolution: 'Convert 42 to binary, which is "101010".',
      codeSolution: 'num := 42\nfmt.Printf("Binary: %b", num)',
      hint: '%b formats as binary'
    },
    {
      id: 'go_input_output_15',
      topicId: 'go_input_output',
      question: 'Write code to print a table with columns aligned.',
      mathSolution: 'Print a two-column table with "Name" left-aligned in 10 spaces and "Age" right-aligned in 5 spaces.',
      codeSolution: 'fmt.Printf("%-10s %5s\n", "Name", "Age")\nfmt.Printf("%-10s %5d\n", "John", 25)',
      hint: '%-10s for left-aligned string, %5d for right-aligned int'
    },

    // ============ LEVEL 2: CONSOLE INPUT BASICS (16-30) ============
    {
      id: 'go_input_output_16',
      topicId: 'go_input_output',
      question: 'Write code to read a line of text from user using bufio.NewScanner().',
      mathSolution: 'Read whatever the user types until they press Enter, and store it as a string.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\ninput := scanner.Text()',
      hint: 'scanner.Text() returns the input string'
    },
    {
      id: 'go_input_output_17',
      topicId: 'go_input_output',
      question: 'Write code to prompt user for name and read it using fmt.Scanln().',
      mathSolution: 'Ask the user to enter their name, then read and store their response.',
      codeSolution: 'var name string\nfmt.Print("Enter your name: ")\nfmt.Scanln(&name)',
      hint: 'Use Scanln with &variable'
    },
    {
      id: 'go_input_output_18',
      topicId: 'go_input_output',
      question: 'Write code to read an integer from user using fmt.Scanf().',
      mathSolution: 'Read user input as an integer value.',
      codeSolution: 'var age int\nfmt.Print("Enter age: ")\nfmt.Scanf("%d", &age)',
      hint: 'Use %d format specifier for integer'
    },
    {
      id: 'go_input_output_19',
      topicId: 'go_input_output',
      question: 'Write code to read a float from user using fmt.Scan().',
      mathSolution: 'Read a decimal number from the user.',
      codeSolution: 'var price float64\nfmt.Print("Enter price: ")\nfmt.Scan(&price)',
      hint: 'Scan automatically parses float'
    },
    {
      id: 'go_input_output_20',
      topicId: 'go_input_output',
      question: 'Write code to read multiple values in one line.',
      mathSolution: 'Read name and age in a single line separated by space.',
      codeSolution: 'var name string\nvar age int\nfmt.Scan(&name, &age)',
      hint: 'Scan reads space-separated values'
    },
    {
      id: 'go_input_output_21',
      topicId: 'go_input_output',
      question: 'Write code to read integer with error handling.',
      mathSolution: 'Attempt to parse user input as an integer and handle if it fails.',
      codeSolution: 'var age int\n_, err := fmt.Scan(&age)\nif err != nil {\n    fmt.Println("Invalid input")\n}',
      hint: 'Check error returned by Scan'
    },
    {
      id: 'go_input_output_22',
      topicId: 'go_input_output',
      question: 'Write code to read integer with validation (loop until valid).',
      mathSolution: 'Keep asking the user for a number until they provide a valid integer.',
      codeSolution: 'var age int\nfor {\n    fmt.Print("Enter age: ")\n    _, err := fmt.Scan(&age)\n    if err == nil {\n        break\n    }\n    fmt.Scanln() // clear buffer\n}',
      hint: 'Loop until valid input'
    },
    {
      id: 'go_input_output_23',
      topicId: 'go_input_output',
      question: 'Write code to read a single character from user.',
      mathSolution: 'Read a single key press and display which key was pressed.',
      codeSolution: 'var b [1]byte\nos.Stdin.Read(b[:])\nch := b[0]\nfmt.Printf("You pressed: %c", ch)',
      hint: 'Read reads raw bytes from stdin'
    },
    {
      id: 'go_input_output_24',
      topicId: 'go_input_output',
      question: 'Write code to read a line and convert to uppercase.',
      mathSolution: 'Read user input and convert it to all capital letters.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\ninput := scanner.Text()\nupper := strings.ToUpper(input)\nfmt.Println(upper)',
      hint: 'Use strings.ToUpper()'
    },
    {
      id: 'go_input_output_25',
      topicId: 'go_input_output',
      question: 'Write code to read two numbers and print their sum.',
      mathSolution: 'Read two integers from the user and display their sum (e.g., 5 + 3 = 8).',
      codeSolution: 'var a, b int\nfmt.Print("Enter two numbers: ")\nfmt.Scan(&a, &b)\nfmt.Printf("Sum: %d", a+b)',
      hint: 'Add after scanning'
    },
    {
      id: 'go_input_output_26',
      topicId: 'go_input_output',
      question: 'Write code to read a sentence and count words.',
      mathSolution: 'Read a sentence and count how many words it contains by splitting on spaces.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\nsentence := scanner.Text()\nwords := strings.Fields(sentence)\nfmt.Printf("Words: %d", len(words))',
      hint: 'strings.Fields() splits by whitespace'
    },
    {
      id: 'go_input_output_27',
      topicId: 'go_input_output',
      question: 'Write code to read full name with spaces using bufio.',
      mathSolution: 'Read a line that may contain spaces (full name).',
      codeSolution: 'reader := bufio.NewReader(os.Stdin)\nfmt.Print("Enter full name: ")\nname, _ := reader.ReadString(\'\\n\')\nname = strings.TrimSpace(name)',
      hint: 'ReadString reads until newline'
    },
    {
      id: 'go_input_output_28',
      topicId: 'go_input_output',
      question: 'Write code to read until specific delimiter.',
      mathSolution: 'Read input until user presses Enter key.',
      codeSolution: 'reader := bufio.NewReader(os.Stdin)\ninput, _ := reader.ReadString(\'\\n\')',
      hint: 'ReadString(\'\\n\') reads until Enter'
    },
    {
      id: 'go_input_output_29',
      topicId: 'go_input_output',
      question: 'Write code to check if input is empty.',
      mathSolution: 'Read input and check if user pressed Enter without typing anything.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\ninput := scanner.Text()\nif input == "" {\n    fmt.Println("Empty input")\n}',
      hint: 'Compare with empty string'
    },
    {
      id: 'go_input_output_30',
      topicId: 'go_input_output',
      question: 'Write code to read input and trim whitespace.',
      mathSolution: 'Remove extra spaces from beginning and end of user input.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\ninput := strings.TrimSpace(scanner.Text())',
      hint: 'strings.TrimSpace() removes whitespace'
    },

    // ============ LEVEL 3: FORMATTED OUTPUT (31-45) ============
    {
      id: 'go_input_output_31',
      topicId: 'go_input_output',
      question: 'Write code to print current date in YYYY-MM-DD format.',
      mathSolution: 'Display today\'s date in format like "2024-01-15".',
      codeSolution: 't := time.Now()\nfmt.Printf("%d-%02d-%02d", t.Year(), t.Month(), t.Day())',
      hint: 'Use time.Now() and format manually'
    },
    {
      id: 'go_input_output_32',
      topicId: 'go_input_output',
      question: 'Write code to print current time in HH:MM:SS format.',
      mathSolution: 'Display the current time in 24-hour format with hours, minutes, seconds.',
      codeSolution: 't := time.Now()\nfmt.Printf("%02d:%02d:%02d", t.Hour(), t.Minute(), t.Second())',
      hint: 'Use Hour(), Minute(), Second() methods'
    },
    {
      id: 'go_input_output_33',
      topicId: 'go_input_output',
      question: 'Write code to print date using time.Format() method.',
      mathSolution: 'Display today\'s date in "2006-01-02" format using Go\'s reference time.',
      codeSolution: 'fmt.Println(time.Now().Format("2006-01-02"))',
      hint: 'Go uses reference time "2006-01-02 15:04:05"'
    },
    {
      id: 'go_input_output_34',
      topicId: 'go_input_output',
      question: 'Write code to print time in 12-hour format with AM/PM.',
      mathSolution: 'Display current time like "03:04:05 PM".',
      codeSolution: 'fmt.Println(time.Now().Format("03:04:05 PM"))',
      hint: '03 is 12-hour format, PM shows AM/PM'
    },
    {
      id: 'go_input_output_35',
      topicId: 'go_input_output',
      question: 'Write code to print full weekday name.',
      mathSolution: 'Display today\'s weekday name like "Monday".',
      codeSolution: 'fmt.Println(time.Now().Weekday())',
      hint: 'Weekday() returns the day name'
    },
    {
      id: 'go_input_output_36',
      topicId: 'go_input_output',
      question: 'Write code to print a number as percentage.',
      mathSolution: 'Format 0.15 as "15.00%" (percentage with two decimal places).',
      codeSolution: 'rate := 0.15\nfmt.Printf("Rate: %.2f%%", rate*100)',
      hint: 'Multiply by 100 and add %%'
    },
    {
      id: 'go_input_output_37',
      topicId: 'go_input_output',
      question: 'Write code to print a number in scientific notation.',
      mathSolution: 'Display 1234567.89 as "1.23e+06" (scientific notation with 2 decimal places).',
      codeSolution: 'large := 1234567.89\nfmt.Printf("Number: %.2e", large)',
      hint: '%e formats as scientific notation'
    },
    {
      id: 'go_input_output_38',
      topicId: 'go_input_output',
      question: 'Write code to print using fmt.Sprintf() to create string first.',
      mathSolution: 'Create a formatted string first, then output it to the console.',
      codeSolution: 'name := "John"\nage := 25\nmessage := fmt.Sprintf("%s is %d years old", name, age)\nfmt.Println(message)',
      hint: 'Sprintf returns formatted string'
    },
    {
      id: 'go_input_output_39',
      topicId: 'go_input_output',
      question: 'Write code to print a table of squares for numbers 1-5.',
      mathSolution: 'Create a formatted table showing numbers 1-5 and their squares (1,4,9,16,25).',
      codeSolution: 'fmt.Printf("%-6s %-10s\n", "Number", "Square")\nfor i := 1; i <= 5; i++ {\n    fmt.Printf("%-6d %-10d\n", i, i*i)\n}',
      hint: 'Use formatted columns with %-6d'
    },
    {
      id: 'go_input_output_40',
      topicId: 'go_input_output',
      question: 'Write code to print a progress bar (simple version).',
      mathSolution: 'Display a progress bar that fills from 0% to 100% over time.',
      codeSolution: 'for i := 0; i <= 10; i++ {\n    fmt.Printf("\\rProgress: %d%% [%s%s]", i*10, strings.Repeat("#", i), strings.Repeat("-", 10-i))\n    time.Sleep(200 * time.Millisecond)\n}',
      hint: '\\r returns cursor to start of line'
    },
    {
      id: 'go_input_output_41',
      topicId: 'go_input_output',
      question: 'Write code to print with colors using ANSI codes.',
      mathSolution: 'Change the text color to red before printing an error message.',
      codeSolution: 'fmt.Println("\\033[31mError message\\033[0m")',
      hint: 'ANSI codes: \\033[31m for red, \\033[0m to reset'
    },
    {
      id: 'go_input_output_42',
      topicId: 'go_input_output',
      question: 'Write code to print with yellow background.',
      mathSolution: 'Print a warning message with yellow background and black text.',
      codeSolution: 'fmt.Println("\\033[43;30mWarning\\033[0m")',
      hint: '43 is yellow background, 30 is black text'
    },
    {
      id: 'go_input_output_43',
      topicId: 'go_input_output',
      question: 'Write code to print a boolean value.',
      mathSolution: 'Print true or false to the console.',
      codeSolution: 'isValid := true\nfmt.Println(isValid)',
      hint: 'Println works with bool directly'
    },
    {
      id: 'go_input_output_44',
      topicId: 'go_input_output',
      question: 'Write code to print type of variable using %T.',
      mathSolution: 'Display the data type of a variable using format specifier.',
      codeSolution: 'value := 42\nfmt.Printf("Type: %T", value)',
      hint: '%T prints the type of the value'
    },
    {
      id: 'go_input_output_45',
      topicId: 'go_input_output',
      question: 'Write code to print memory address using %p.',
      mathSolution: 'Display the memory address of a variable.',
      codeSolution: 'value := 42\nfmt.Printf("Address: %p", &value)',
      hint: '%p prints pointer address'
    },

    // ============ LEVEL 4: FILE OUTPUT (46-60) ============
    {
      id: 'go_input_output_46',
      topicId: 'go_input_output',
      question: 'Write code to write text to a file using os.WriteFile().',
      mathSolution: 'Create or overwrite a file named "output.txt" with the text "Hello World".',
      codeSolution: 'content := []byte("Hello World")\nerr := os.WriteFile("output.txt", content, 0644)',
      hint: 'os.WriteFile(path, data, perm)'
    },
    {
      id: 'go_input_output_47',
      topicId: 'go_input_output',
      question: 'Write code to append text to a file using os.OpenFile().',
      mathSolution: 'Add a new line to an existing log file without overwriting previous content.',
      codeSolution: 'f, err := os.OpenFile("log.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)\nif err == nil {\n    defer f.Close()\n    f.WriteString("New line\\n")\n}',
      hint: 'Use os.O_APPEND flag'
    },
    {
      id: 'go_input_output_48',
      topicId: 'go_input_output',
      question: 'Write code to write multiple lines to a file.',
      mathSolution: 'Create a file with three lines of text: "Line 1", "Line 2", "Line 3".',
      codeSolution: 'lines := []string{"Line 1", "Line 2", "Line 3"}\ncontent := strings.Join(lines, "\\n")\nos.WriteFile("output.txt", []byte(content), 0644)',
      hint: 'Join lines with newline character'
    },
    {
      id: 'go_input_output_49',
      topicId: 'go_input_output',
      question: 'Write code to write to file using bufio.Writer.',
      mathSolution: 'Use buffered writer for efficient writing to a file.',
      codeSolution: 'f, _ := os.Create("file.txt")\ndefer f.Close()\nwriter := bufio.NewWriter(f)\nwriter.WriteString("Hello\\n")\nwriter.WriteString("World\\n")\nwriter.Flush()',
      hint: 'Flush() ensures data is written'
    },
    {
      id: 'go_input_output_50',
      topicId: 'go_input_output',
      question: 'Write code to write formatted data to CSV file.',
      mathSolution: 'Create a CSV file with header and data rows, using commas as separators.',
      codeSolution: 'f, _ := os.Create("data.csv")\ndefer f.Close()\nwriter := bufio.NewWriter(f)\nwriter.WriteString("Name,Age,City\\n")\nwriter.WriteString("John,25,New York\\n")\nwriter.WriteString("Jane,30,Boston\\n")\nwriter.Flush()',
      hint: 'CSV uses commas as separators'
    },
    {
      id: 'go_input_output_51',
      topicId: 'go_input_output',
      question: 'Write code to check if file exists before writing.',
      mathSolution: 'Check if a file exists and warn the user before overwriting it.',
      codeSolution: 'path := "data.txt"\nif _, err := os.Stat(path); err == nil {\n    fmt.Println("File exists, overwriting...")\n}\nos.WriteFile(path, []byte("New content"), 0644)',
      hint: 'os.Stat() returns error if file not exists'
    },
    {
      id: 'go_input_output_52',
      topicId: 'go_input_output',
      question: 'Write code to create a directory if it doesn\'t exist.',
      mathSolution: 'Create a "logs" folder if it doesn\'t exist, then write a log file inside it.',
      codeSolution: 'dir := "logs"\nif _, err := os.Stat(dir); os.IsNotExist(err) {\n    os.Mkdir(dir, 0755)\n}\nos.WriteFile(filepath.Join(dir, "log.txt"), []byte("Content"), 0644)',
      hint: 'os.Mkdir() creates directory'
    },
    {
      id: 'go_input_output_53',
      topicId: 'go_input_output',
      question: 'Write code to write JSON data to file.',
      mathSolution: 'Convert a struct to JSON and save to file.',
      codeSolution: 'type Person struct { Name string; Age int }\np := Person{Name: "John", Age: 25}\ndata, _ := json.Marshal(p)\nos.WriteFile("person.json", data, 0644)',
      hint: 'json.Marshal() converts to JSON'
    },
    {
      id: 'go_input_output_54',
      topicId: 'go_input_output',
      question: 'Write code to write an array of integers to file.',
      mathSolution: 'Convert an array of integers to a string and save to file.',
      codeSolution: 'numbers := []int{1, 2, 3, 4, 5}\nstr := fmt.Sprint(numbers)\nos.WriteFile("numbers.txt", []byte(str), 0644)',
      hint: 'fmt.Sprint() converts slice to string'
    },
    {
      id: 'go_input_output_55',
      topicId: 'go_input_output',
      question: 'Write code to write bytes directly to file.',
      mathSolution: 'Write raw byte data to a binary file.',
      codeSolution: 'data := []byte{0x48, 0x65, 0x6C, 0x6C, 0x6F}\nos.WriteFile("binary.dat", data, 0644)',
      hint: 'WriteFile accepts byte slices'
    },

    // ============ LEVEL 5: FILE INPUT (56-70) ============
    {
      id: 'go_input_output_56',
      topicId: 'go_input_output',
      question: 'Write code to read all text from a file using os.ReadFile().',
      mathSolution: 'Read the entire contents of a file into a byte slice and display it.',
      codeSolution: 'data, err := os.ReadFile("input.txt")\nif err == nil {\n    fmt.Println(string(data))\n}',
      hint: 'ReadFile returns byte slice'
    },
    {
      id: 'go_input_output_57',
      topicId: 'go_input_output',
      question: 'Write code to read all lines from a file into a slice.',
      mathSolution: 'Read each line of a file into a string slice and display them.',
      codeSolution: 'data, _ := os.ReadFile("input.txt")\nlines := strings.Split(string(data), "\\n")\nfor _, line := range lines {\n    fmt.Println(line)\n}',
      hint: 'Split by newline to get lines'
    },
    {
      id: 'go_input_output_58',
      topicId: 'go_input_output',
      question: 'Write code to read file line by line using bufio.Scanner.',
      mathSolution: 'Efficiently read a file line by line without loading entire file into memory.',
      codeSolution: 'f, _ := os.Open("input.txt")\ndefer f.Close()\nscanner := bufio.NewScanner(f)\nfor scanner.Scan() {\n    fmt.Println(scanner.Text())\n}',
      hint: 'Scanner reads line by line'
    },
    {
      id: 'go_input_output_59',
      topicId: 'go_input_output',
      question: 'Write code to check if file exists before reading.',
      mathSolution: 'Verify a file exists before attempting to read it, showing an error message if not.',
      codeSolution: 'path := "data.txt"\nif _, err := os.Stat(path); os.IsNotExist(err) {\n    fmt.Println("File not found")\n} else {\n    data, _ := os.ReadFile(path)\n    fmt.Println(string(data))\n}',
      hint: 'Always check existence before reading'
    },
    {
      id: 'go_input_output_60',
      topicId: 'go_input_output',
      question: 'Write code to read CSV file and parse each line.',
      mathSolution: 'Read a CSV file, skip the header, and parse each data row into fields.',
      codeSolution: 'data, _ := os.ReadFile("data.csv")\nlines := strings.Split(string(data), "\\n")\nfor i := 1; i < len(lines); i++ {\n    fields := strings.Split(lines[i], ",")\n    if len(fields) >= 2 {\n        fmt.Printf("Name: %s, Age: %s\\n", fields[0], fields[1])\n    }\n}',
      hint: 'Split by comma to parse CSV'
    },
    {
      id: 'go_input_output_61',
      topicId: 'go_input_output',
      question: 'Write code to read file with buffered reader.',
      mathSolution: 'Use bufio.Reader to read file in chunks.',
      codeSolution: 'f, _ := os.Open("input.txt")\ndefer f.Close()\nreader := bufio.NewReader(f)\nfor {\n    line, err := reader.ReadString(\'\\n\')\n    if err != nil {\n        break\n    }\n    fmt.Print(line)\n}',
      hint: 'ReadString reads until delimiter'
    },
    {
      id: 'go_input_output_62',
      topicId: 'go_input_output',
      question: 'Write code to read numbers from file and calculate sum.',
      mathSolution: 'Read a file containing one number per line and calculate their total sum.',
      codeSolution: 'data, _ := os.ReadFile("numbers.txt")\nlines := strings.Split(string(data), "\\n")\nsum := 0\nfor _, line := range lines {\n    var num int\n    fmt.Sscanf(line, "%d", &num)\n    sum += num\n}\nfmt.Printf("Sum: %d", sum)',
      hint: 'Use Sscanf to parse each line'
    },
    {
      id: 'go_input_output_63',
      topicId: 'go_input_output',
      question: 'Write code to read file with error handling.',
      mathSolution: 'Safely attempt to read a file, handling common errors like file not found.',
      codeSolution: 'data, err := os.ReadFile("missing.txt")\nif err != nil {\n    if os.IsNotExist(err) {\n        fmt.Println("File not found")\n    } else {\n        fmt.Printf("Error: %v", err)\n    }\n} else {\n    fmt.Println(string(data))\n}',
      hint: 'Check error types with os.IsNotExist()'
    },
    {
      id: 'go_input_output_64',
      topicId: 'go_input_output',
      question: 'Write code to read file and count lines.',
      mathSolution: 'Count the total number of lines in a file.',
      codeSolution: 'data, _ := os.ReadFile("input.txt")\nlines := strings.Split(string(data), "\\n")\nfmt.Printf("Lines: %d", len(lines))',
      hint: 'Split by newline and count'
    },
    {
      id: 'go_input_output_65',
      topicId: 'go_input_output',
      question: 'Write code to read file and find longest line.',
      mathSolution: 'Find the longest line in a file by comparing line lengths.',
      codeSolution: 'data, _ := os.ReadFile("input.txt")\nlines := strings.Split(string(data), "\\n")\nlongest := ""\nfor _, line := range lines {\n    if len(line) > len(longest) {\n        longest = line\n    }\n}\nfmt.Printf("Longest: %s", longest)',
      hint: 'Compare line lengths'
    },

    // ============ LEVEL 6: FILE INFO & OPERATIONS (66-80) ============
    {
      id: 'go_input_output_66',
      topicId: 'go_input_output',
      question: 'Write code to get file information (size, modification time).',
      mathSolution: 'Retrieve and display metadata about a file: size in bytes and last modified time.',
      codeSolution: 'info, err := os.Stat("input.txt")\nif err == nil {\n    fmt.Printf("Size: %d bytes\\n", info.Size())\n    fmt.Printf("Modified: %v\\n", info.ModTime())\n}',
      hint: 'os.Stat() returns FileInfo'
    },
    {
      id: 'go_input_output_67',
      topicId: 'go_input_output',
      question: 'Write code to check if path is a file or directory.',
      mathSolution: 'Determine whether a given path points to a file or a directory.',
      codeSolution: 'info, _ := os.Stat("path")\nif info.IsDir() {\n    fmt.Println("It\'s a directory")\n} else {\n    fmt.Println("It\'s a file")\n}',
      hint: 'IsDir() returns true for directories'
    },
    {
      id: 'go_input_output_68',
      topicId: 'go_input_output',
      question: 'Write code to copy a file from source to destination.',
      mathSolution: 'Make a copy of a file by reading source and writing to destination.',
      codeSolution: 'source, _ := os.ReadFile("source.txt")\nos.WriteFile("destination.txt", source, 0644)',
      hint: 'Read source, write to destination'
    },
    {
      id: 'go_input_output_69',
      topicId: 'go_input_output',
      question: 'Write code to move (rename) a file.',
      mathSolution: 'Move a file to a different location or rename it.',
      codeSolution: 'err := os.Rename("source.txt", "backup/source.txt")',
      hint: 'os.Rename() moves or renames'
    },
    {
      id: 'go_input_output_70',
      topicId: 'go_input_output',
      question: 'Write code to delete a file if it exists.',
      mathSolution: 'Safely delete a file only if it exists, avoiding errors if it doesn\'t.',
      codeSolution: 'if _, err := os.Stat("temp.txt"); err == nil {\n    os.Remove("temp.txt")\n}',
      hint: 'Check existence before delete'
    },
    {
      id: 'go_input_output_71',
      topicId: 'go_input_output',
      question: 'Write code to get all files in a directory.',
      mathSolution: 'List all files in a directory, displaying their names.',
      codeSolution: 'files, _ := os.ReadDir(".")\nfor _, file := range files {\n    if !file.IsDir() {\n        fmt.Println(file.Name())\n    }\n}',
      hint: 'os.ReadDir() returns directory entries'
    },
    {
      id: 'go_input_output_72',
      topicId: 'go_input_output',
      question: 'Write code to get files with specific pattern (*.txt).',
      mathSolution: 'Find only text files (.txt extension) in a directory.',
      codeSolution: 'files, _ := filepath.Glob("*.txt")\nfor _, file := range files {\n    fmt.Println(file)\n}',
      hint: 'filepath.Glob() matches patterns'
    },
    {
      id: 'go_input_output_73',
      topicId: 'go_input_output',
      question: 'Write code to walk through directories recursively.',
      mathSolution: 'Find all files in a folder and all its subfolders.',
      codeSolution: 'filepath.Walk(".", func(path string, info os.FileInfo, err error) error {\n    if !info.IsDir() {\n        fmt.Println(path)\n    }\n    return nil\n})',
      hint: 'filepath.Walk() traverses recursively'
    },
    {
      id: 'go_input_output_74',
      topicId: 'go_input_output',
      question: 'Write code to get file name without path.',
      mathSolution: 'Extract just the filename from a full path.',
      codeSolution: 'fullPath := "/home/user/file.txt"\nfileName := filepath.Base(fullPath)',
      hint: 'filepath.Base() returns filename'
    },
    {
      id: 'go_input_output_75',
      topicId: 'go_input_output',
      question: 'Write code to get file extension from path.',
      mathSolution: 'Extract the extension (like ".pdf") from a filename.',
      codeSolution: 'path := "document.pdf"\nextension := filepath.Ext(path) // ".pdf"',
      hint: 'filepath.Ext() returns extension'
    },
    {
      id: 'go_input_output_76',
      topicId: 'go_input_output',
      question: 'Write code to join paths safely using filepath.Join.',
      mathSolution: 'Combine a folder path and filename in a way that handles path separators correctly.',
      codeSolution: 'folder := "/home/user"\nfile := "data.txt"\nfullPath := filepath.Join(folder, file)',
      hint: 'filepath.Join() handles separators'
    },
    {
      id: 'go_input_output_77',
      topicId: 'go_input_output',
      question: 'Write code to get absolute path of a file.',
      mathSolution: 'Convert a relative path to its absolute form.',
      codeSolution: 'abs, _ := filepath.Abs("file.txt")\nfmt.Println(abs)',
      hint: 'filepath.Abs() returns absolute path'
    },
    {
      id: 'go_input_output_78',
      topicId: 'go_input_output',
      question: 'Write code to get temporary directory path.',
      mathSolution: 'Get the system temporary directory path.',
      codeSolution: 'tempDir := os.TempDir()\nfmt.Println(tempDir)',
      hint: 'os.TempDir() returns temp directory'
    },
    {
      id: 'go_input_output_79',
      topicId: 'go_input_output',
      question: 'Write code to create a temporary file.',
      mathSolution: 'Create a temporary file in the system temp directory.',
      codeSolution: 'f, _ := os.CreateTemp("", "prefix-*.txt")\ndefer os.Remove(f.Name())\nf.WriteString("temp data")',
      hint: 'os.CreateTemp() creates temp file'
    },
    {
      id: 'go_input_output_80',
      topicId: 'go_input_output',
      question: 'Write code to read file as byte slice.',
      mathSolution: 'Read an image file as a byte slice to get its raw binary data.',
      codeSolution: 'data, _ := os.ReadFile("image.jpg")\nfmt.Printf("File size: %d bytes", len(data))',
      hint: 'ReadFile returns byte slice'
    },

    // ============ LEVEL 7: ADVANCED I/O (81-100) ============
    {
      id: 'go_input_output_81',
      topicId: 'go_input_output',
      question: 'Write code to use io.Copy to copy between streams.',
      mathSolution: 'Copy data from a file to standard output efficiently.',
      codeSolution: 'f, _ := os.Open("input.txt")\ndefer f.Close()\nio.Copy(os.Stdout, f)',
      hint: 'io.Copy() copies between Reader and Writer'
    },
    {
      id: 'go_input_output_82',
      topicId: 'go_input_output',
      question: 'Write code to read from standard input using bufio.Scanner.',
      mathSolution: 'Read multiple lines from user until EOF.',
      codeSolution: 'scanner := bufio.NewScanner(os.Stdin)\nfor scanner.Scan() {\n    fmt.Println("You said:", scanner.Text())\n}',
      hint: 'Scanner reads until Ctrl+D/Ctrl+Z'
    },
    {
      id: 'go_input_output_83',
      topicId: 'go_input_output',
      question: 'Write code to write to multiple writers using io.MultiWriter.',
      mathSolution: 'Write the same data to both console and a file simultaneously.',
      codeSolution: 'f, _ := os.Create("log.txt")\ndefer f.Close()\nmw := io.MultiWriter(os.Stdout, f)\nfmt.Fprintln(mw, "This goes to both")',
      hint: 'MultiWriter writes to multiple destinations'
    },
    {
      id: 'go_input_output_84',
      topicId: 'go_input_output',
      question: 'Write code to read large file efficiently using buffer.',
      mathSolution: 'Read a large file in chunks using a buffer to minimize memory usage.',
      codeSolution: 'f, _ := os.Open("large.txt")\ndefer f.Close()\nbuffer := make([]byte, 4096)\nfor {\n    n, err := f.Read(buffer)\n    if err != nil {\n        break\n    }\n    fmt.Print(string(buffer[:n]))\n}',
      hint: 'Use buffer for large files'
    },
    {
      id: 'go_input_output_85',
      topicId: 'go_input_output',
      question: 'Write code to use io.TeeReader to read and write simultaneously.',
      mathSolution: 'Read from a reader while simultaneously writing to another writer.',
      codeSolution: 'f, _ := os.Open("input.txt")\ndefer f.Close()\ntee := io.TeeReader(f, os.Stdout)\nio.ReadAll(tee)',
      hint: 'TeeReader copies as it reads'
    },
    {
      id: 'go_input_output_86',
      topicId: 'go_input_output',
      question: 'Write code to compress data using gzip.',
      mathSolution: 'Compress data using GZip compression before writing to file.',
      codeSolution: 'f, _ := os.Create("data.gz")\ndefer f.Close()\ngz := gzip.NewWriter(f)\ndefer gz.Close()\ngz.Write([]byte("Hello World"))',
      hint: 'gzip.NewWriter() creates compressor'
    },
    {
      id: 'go_input_output_87',
      topicId: 'go_input_output',
      question: 'Write code to decompress gzip file.',
      mathSolution: 'Read and decompress a gzip compressed file.',
      codeSolution: 'f, _ := os.Open("data.gz")\ndefer f.Close()\ngz, _ := gzip.NewReader(f)\ndefer gz.Close()\ndata, _ := io.ReadAll(gz)\nfmt.Println(string(data))',
      hint: 'gzip.NewReader() creates decompressor'
    },
    {
      id: 'go_input_output_88',
      topicId: 'go_input_output',
      question: 'Write code to use bytes.Buffer for in-memory operations.',
      mathSolution: 'Create an in-memory buffer and write data to it without creating files.',
      codeSolution: 'var buf bytes.Buffer\nbuf.WriteString("Hello ")\nbuf.WriteString("World")\nfmt.Println(buf.String())',
      hint: 'bytes.Buffer works like in-memory file'
    },
    {
      id: 'go_input_output_89',
      topicId: 'go_input_output',
      question: 'Write code to read CSV using encoding/csv package.',
      mathSolution: 'Parse CSV file properly handling quoted fields and commas.',
      codeSolution: 'f, _ := os.Open("data.csv")\ndefer f.Close()\nreader := csv.NewReader(f)\nrecords, _ := reader.ReadAll()\nfor _, row := range records {\n    fmt.Printf("Name: %s, Age: %s\\n", row[0], row[1])\n}',
      hint: 'csv.Reader handles CSV properly'
    },
    {
      id: 'go_input_output_90',
      topicId: 'go_input_output',
      question: 'Write code to write CSV using encoding/csv package.',
      mathSolution: 'Write structured data to CSV file with proper escaping.',
      codeSolution: 'f, _ := os.Create("output.csv")\ndefer f.Close()\nwriter := csv.NewWriter(f)\nwriter.Write([]string{"Name", "Age", "City"})\nwriter.Write([]string{"John", "25", "New York"})\nwriter.Flush()',
      hint: 'csv.Writer writes CSV format'
    },
    {
      id: 'go_input_output_91',
      topicId: 'go_input_output',
      question: 'Write code to read JSON file and decode into struct.',
      mathSolution: 'Parse JSON file into a Go struct.',
      codeSolution: 'type Person struct { Name string; Age int }\ndata, _ := os.ReadFile("person.json")\nvar p Person\njson.Unmarshal(data, &p)\nfmt.Printf("%s is %d years old", p.Name, p.Age)',
      hint: 'json.Unmarshal() decodes JSON'
    },
    {
      id: 'go_input_output_92',
      topicId: 'go_input_output',
      question: 'Write code to write struct as JSON with indentation.',
      mathSolution: 'Convert a struct to formatted JSON and save to file.',
      codeSolution: 'type Person struct { Name string; Age int }\np := Person{Name: "John", Age: 25}\ndata, _ := json.MarshalIndent(p, "", "  ")\nos.WriteFile("person.json", data, 0644)',
      hint: 'MarshalIndent creates pretty JSON'
    },
    {
      id: 'go_input_output_93',
      topicId: 'go_input_output',
      question: 'Write code to read file asynchronously using goroutines.',
      mathSolution: 'Read a file in background while main program continues.',
      codeSolution: 'go func() {\n    data, _ := os.ReadFile("input.txt")\n    fmt.Println(string(data))\n}()\ntime.Sleep(100 * time.Millisecond)',
      hint: 'Use goroutine for async reading'
    },
    {
      id: 'go_input_output_94',
      topicId: 'go_input_output',
      question: 'Write code to use channels for file processing.',
      mathSolution: 'Read file lines and send them through a channel for processing.',
      codeSolution: 'ch := make(chan string)\ngo func() {\n    data, _ := os.ReadFile("input.txt")\n    lines := strings.Split(string(data), "\\n")\n    for _, line := range lines {\n        ch <- line\n    }\n    close(ch)\n}()\nfor line := range ch {\n    fmt.Println(line)\n}',
      hint: 'Channels communicate between goroutines'
    },
    {
      id: 'go_input_output_95',
      topicId: 'go_input_output',
      question: 'Write code to limit read speed (throttle).',
      mathSolution: 'Read data at a limited rate (e.g., 1KB per second).',
      codeSolution: 'f, _ := os.Open("large.txt")\ndefer f.Close()\nbuf := make([]byte, 1024)\nfor {\n    n, err := f.Read(buf)\n    if err != nil {\n        break\n    }\n    fmt.Print(string(buf[:n]))\n    time.Sleep(1 * time.Second)\n}',
      hint: 'Sleep between reads to throttle'
    },
    {
      id: 'go_input_output_96',
      topicId: 'go_input_output',
      question: 'Write code to read file in reverse order.',
      mathSolution: 'Read a file line by line from bottom to top.',
      codeSolution: 'data, _ := os.ReadFile("input.txt")\nlines := strings.Split(string(data), "\\n")\nfor i := len(lines) - 1; i >= 0; i-- {\n    fmt.Println(lines[i])\n}',
      hint: 'Reverse the slice after reading'
    },
    {
      id: 'go_input_output_97',
      topicId: 'go_input_output',
      question: 'Write code to tail -f like functionality.',
      mathSolution: 'Monitor a file for new lines and print them as they are added.',
      codeSolution: 'f, _ := os.Open("log.txt")\nf.Seek(0, 2) // go to end\nfor {\n    buf := make([]byte, 1024)\n    n, _ := f.Read(buf)\n    if n > 0 {\n        fmt.Print(string(buf[:n]))\n    }\n    time.Sleep(100 * time.Millisecond)\n}',
      hint: 'Seek to end and keep reading'
    },
    {
      id: 'go_input_output_98',
      topicId: 'go_input_output',
      question: 'Write code to read from multiple files concurrently.',
      mathSolution: 'Read several files at the same time using goroutines.',
      codeSolution: 'files := []string{"file1.txt", "file2.txt", "file3.txt"}\nfor _, file := range files {\n    go func(f string) {\n        data, _ := os.ReadFile(f)\n        fmt.Printf("%s: %s\\n", f, string(data))\n    }(file)\n}\ntime.Sleep(1 * time.Second)',
      hint: 'Launch goroutine for each file'
    },
    {
      id: 'go_input_output_99',
      topicId: 'go_input_output',
      question: 'Write code to use sync.Pool for buffer reuse.',
      mathSolution: 'Reuse byte buffers to reduce memory allocations when reading files.',
      codeSolution: 'var bufferPool = sync.Pool{\n    New: func() interface{} { return make([]byte, 4096) },\n}\nf, _ := os.Open("large.txt")\ndefer f.Close()\nbuf := bufferPool.Get().([]byte)\ndefer bufferPool.Put(buf)\nf.Read(buf)',
      hint: 'sync.Pool reuses allocations'
    },
    {
      id: 'go_input_output_100',
      topicId: 'go_input_output',
      question: 'Write code to create a pipe for inter-process communication.',
      mathSolution: 'Create a pipe to pass data between goroutines.',
      codeSolution: 'r, w := io.Pipe()\ngo func() {\n    w.Write([]byte("Hello from writer"))\n    w.Close()\n}()\ndata, _ := io.ReadAll(r)\nfmt.Println(string(data))',
      hint: 'io.Pipe() creates synchronous in-memory pipe'
    }
);