QuizData.questions.push(
{
  id: 'py_mod_1',
  topicId: 'py_modules_packages',
  question: 'Import the math module and calculate the square root of 25.',
  mathSolution: 'Use import math then math.sqrt() function.',
  codeSolution: 'import math\nresult = math.sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'math.sqrt() returns floating point square root.'
},
{
  id: 'py_mod_2',
  topicId: 'py_modules_packages',
  question: 'Import only the sqrt function from math module.',
  mathSolution: 'Use from math import sqrt to import specific function.',
  codeSolution: 'from math import sqrt\nresult = sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'This allows using sqrt() directly without math prefix.'
},
{
  id: 'py_mod_3',
  topicId: 'py_modules_packages',
  question: 'Import math module with alias m and calculate pi value.',
  mathSolution: 'Use import math as m to create alias.',
  codeSolution: 'import math as m\nprint(m.pi)  # Output: 3.141592653589793',
  hint: 'Alias makes code shorter when module name is long.'
},
{
  id: 'py_mod_4',
  topicId: 'py_modules_packages',
  question: 'Use random module to generate a random integer between 1 and 10.',
  mathSolution: 'random.randint(a, b) returns random integer N such that a <= N <= b.',
  codeSolution: 'import random\nnum = random.randint(1, 10)\nprint(num)  # Random number between 1 and 10',
  hint: 'randint is inclusive of both endpoints.'
},
{
  id: 'py_mod_5',
  topicId: 'py_modules_packages',
  question: 'Use datetime module to get current date and time.',
  mathSolution: 'datetime.datetime.now() returns current date and time.',
  codeSolution: 'import datetime\nnow = datetime.datetime.now()\nprint(now)  # Output: YYYY-MM-DD HH:MM:SS.microseconds',
  hint: 'Use strftime() to format date in custom format.'
},
{
  id: 'py_mod_6',
  topicId: 'py_modules_packages',
  question: 'Create a custom module named mymath.py with add and subtract functions.',
  mathSolution: 'Create separate file with functions, then import.',
  codeSolution: '# Method 1: Simulate module using SimpleNamespace\nfrom types import SimpleNamespace\n\n# Create a module simulation\nmymath = SimpleNamespace()\n\n# Add functions to the module\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\nmymath.add = add\nmymath.subtract = subtract\n\n# Test the module\nprint("=== Custom Module Demo ===\\n")\nprint(f"add(10, 5) = {mymath.add(10, 5)}")      # Output: 15\nprint(f"subtract(10, 5) = {mymath.subtract(10, 5)}") # Output: 5\n\n# Method 2: Using a class as module alternative\nprint("\\n--- Alternative Method ---\\n")\n\nclass MyMath:\n    @staticmethod\n    def add(a, b):\n        return a + b\n    \n    @staticmethod\n    def subtract(a, b):\n        return a - b\n\nprint(f"add(20, 8) = {MyMath.add(20, 8)}")\nprint(f"subtract(20, 8) = {MyMath.subtract(20, 8)}")',
  hint: 'Module file must be in same directory or Python path. In single-file environment, use SimpleNamespace or class to simulate module.'
},
{
  id: 'py_mod_7',
  topicId: 'py_modules_packages',
  question: 'Use os module to get current working directory.',
  mathSolution: 'os.getcwd() returns current working directory path.',
  codeSolution: 'import os\ncwd = os.getcwd()\nprint(f"Current directory: {cwd}")',
  hint: 'os module provides operating system dependent functionality.'
},
{
  id: 'py_mod_8',
  topicId: 'py_modules_packages',
  question: 'Use sys module to get Python version and platform information.',
  mathSolution: 'sys.version gives Python version, sys.platform gives OS.',
  codeSolution: 'import sys\nprint(f"Python version: {sys.version}")\nprint(f"Platform: {sys.platform}")',
  hint: 'sys module provides access to interpreter variables.'
},
{
  id: 'py_mod_9',
  topicId: 'py_modules_packages',
  question: 'Use json module to convert Python dict to JSON string.',
  mathSolution: 'json.dumps() serializes Python object to JSON string.',
  codeSolution: 'import json\ndata = {"name": "Alice", "age": 25, "city": "New York"}\njson_str = json.dumps(data, indent=2)\nprint(json_str)',
  hint: 'indent parameter makes JSON human-readable.'
},
{
  id: 'py_mod_10',
  topicId: 'py_modules_packages',
  question: 'Use json module to parse JSON string into Python dict.',
  mathSolution: 'json.loads() parses JSON string to Python object.',
  codeSolution: 'import json\njson_str = \'{"name": "Bob", "age": 30, "city": "London"}\'\ndata = json.loads(json_str)\nprint(data["name"])  # Output: Bob\nprint(type(data))    # Output: <class \'dict\'>',
  hint: 'JSON keys become dictionary keys.'
},
{
  id: 'py_mod_11',
  topicId: 'py_modules_packages',
  question: 'Use re module to check if a string matches a pattern.',
  mathSolution: 're.match() checks if pattern matches at beginning of string.',
  codeSolution: 'import re\npattern = r"^[A-Z][a-z]*$"\ntext = "Hello"\nif re.match(pattern, text):\n    print("Valid: Starts with capital, followed by lowercase")\nelse:\n    print("Invalid")',
  hint: 'r before string denotes raw string (backslashes not escaped).'
},
{
  id: 'py_mod_12',
  topicId: 'py_modules_packages',
  question: 'Use re module to find all email addresses in a text.',
  mathSolution: 're.findall() returns all non-overlapping matches.',
  codeSolution: 'import re\ntext = "Contact us at info@example.com or support@test.org"\nemails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)\nprint(emails)  # Output: ["info@example.com", "support@test.org"]',
  hint: 'Regular expression pattern matches email format.'
},
{
  id: 'py_mod_13',
  topicId: 'py_modules_packages',
  question: 'Use collections.Counter to count elements in a list.',
  mathSolution: 'Counter creates dictionary of element frequencies.',
  codeSolution: 'from collections import Counter\nitems = ["apple", "banana", "apple", "orange", "banana", "apple"]\ncounts = Counter(items)\nprint(counts)  # Output: Counter({"apple": 3, "banana": 2, "orange": 1})',
  hint: 'most_common() returns elements sorted by frequency.'
},
{
  id: 'py_mod_14',
  topicId: 'py_modules_packages',
  question: 'Use collections.defaultdict to create dictionary with default value.',
  mathSolution: 'defaultdict provides default value for missing keys.',
  codeSolution: 'from collections import defaultdict\n# Default value for missing keys is 0\nword_count = defaultdict(int)\nwords = ["apple", "banana", "apple"]\nfor word in words:\n    word_count[word] += 1\nprint(dict(word_count))  # Output: {"apple": 2, "banana": 1}',
  hint: 'int() returns 0, list() returns empty list, etc.'
},
{
  id: 'py_mod_15',
  topicId: 'py_modules_packages',
  question: 'Use collections.deque for efficient queue operations.',
  mathSolution: 'deque supports O(1) append and pop from both ends.',
  codeSolution: 'from collections import deque\nqueue = deque(["first", "second", "third"])\nqueue.append("fourth")      # Add to right end\nqueue.appendleft("zeroth")  # Add to left end\nprint(queue.popleft())       # Remove from left: "zeroth"\nprint(queue.pop())           # Remove from right: "fourth"',
  hint: 'deque is faster than list for insert/pop at beginning.'
},
{
  id: 'py_mod_16',
  topicId: 'py_modules_packages',
  question: 'Use itertools.permutations to generate all permutations of a list.',
  mathSolution: 'permutations returns all possible ordered arrangements.',
  codeSolution: 'from itertools import permutations\nitems = [1, 2, 3]\nperms = list(permutations(items, 2))\nprint(perms)  # Output: [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]',
  hint: 'Second argument specifies length of permutations.'
},
{
  id: 'py_mod_17',
  topicId: 'py_modules_packages',
  question: 'Use itertools.combinations to generate all combinations of a list.',
  mathSolution: 'combinations returns all possible unordered selections.',
  codeSolution: 'from itertools import combinations\nitems = [1, 2, 3, 4]\ncombs = list(combinations(items, 2))\nprint(combs)  # Output: [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]',
  hint: 'Order doesn\'t matter in combinations.'
},
{
  id: 'py_mod_18',
  topicId: 'py_modules_packages',
  question: 'Use itertools.product to generate Cartesian product of iterables.',
  mathSolution: 'product returns all possible ordered pairs from multiple iterables.',
  codeSolution: 'from itertools import product\ncolors = ["red", "green"]\nsizes = ["S", "M", "L"]\nproducts = list(product(colors, sizes))\nprint(products)  # Output: [("red","S"), ("red","M"), ("red","L"), ("green","S"), ("green","M"), ("green","L")]',
  hint: 'repeat parameter allows product with same iterable.'
},
{
  id: 'py_mod_19',
  topicId: 'py_modules_packages',
  question: 'Use itertools.cycle to cycle through elements infinitely.',
  mathSolution: 'cycle creates infinite iterator that repeats the iterable.',
  codeSolution: 'from itertools import cycle\ncolors = cycle(["red", "green", "blue"])\nfor i, color in enumerate(colors):\n    print(color)\n    if i == 5:  # Stop after 6 items\n        break\n# Output: red, green, blue, red, green, blue',
  hint: 'Be careful with infinite iterators - always have break condition.'
},
{
  id: 'py_mod_20',
  topicId: 'py_modules_packages',
  question: 'Use itertools.groupby to group adjacent elements.',
  mathSolution: 'groupby groups consecutive elements with same key.',
  codeSolution: 'from itertools import groupby\ndata = [1, 1, 2, 2, 2, 3, 3, 1, 1]\nfor key, group in groupby(data):\n    print(f"{key}: {list(group)}")\n# Output:\n# 1: [1, 1]\n# 2: [2, 2, 2]\n# 3: [3, 3]\n# 1: [1, 1]',
  hint: 'groupby only groups consecutive identical elements.'
},
{
  id: 'py_mod_21',
  topicId: 'py_modules_packages',
  question: 'Use functools.reduce to compute product of all numbers in a list.',
  mathSolution: 'reduce cumulatively applies function to pairs of elements.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce is in functools module (not built-in).'
},
{
  id: 'py_mod_22',
  topicId: 'py_modules_packages',
  question: 'Use functools.partial to create a function with fixed arguments.',
  mathSolution: 'partial binds values to some arguments of a function.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # Output: 25\nprint(cube(5))    # Output: 125',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_mod_23',
  topicId: 'py_modules_packages',
  question: 'Use functools.lru_cache to memoize Fibonacci function.',
  mathSolution: 'lru_cache caches results to avoid redundant computation.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # Fast even for large n',
  hint: 'lru_cache stores function results in a cache.'
},
{
  id: 'py_mod_19',
  topicId: 'py_modules_packages',
  question: 'Use itertools.cycle to cycle through elements infinitely.',
  mathSolution: 'cycle creates infinite iterator that repeats the iterable.',
  codeSolution: 'from itertools import cycle\ncolors = cycle(["red", "green", "blue"])\nfor i, color in enumerate(colors):\n    print(color)\n    if i == 5:  # Stop after 6 items\n        break\n# Output: red, green, blue, red, green, blue',
  hint: 'Be careful with infinite iterators - always have break condition.'
},
{
  id: 'py_mod_25',
  topicId: 'py_modules_packages',
  question: 'Use argparse module to parse command line arguments.',
  mathSolution: 'argparse creates command-line interfaces with argument parsing.',
  codeSolution: 'import argparse\n\nprint("=== Argparse Module Demonstration ===\\n")\n\n# Method 1: Simulating command line arguments\nprint("Method 1: Using parse_args() with simulated arguments\\n")\n\nparser = argparse.ArgumentParser(description="Process some integers.")\nparser.add_argument("numbers", metavar="N", type=int, nargs="+", help="an integer for the accumulator")\nparser.add_argument("--sum", dest="accumulate", action="store_const", const=sum, default=max, help="sum the integers (default: find the max)")\n\n# Simulate command line arguments\nprint("Simulating: python program.py 1 2 3 4 --sum")\nargs = parser.parse_args(["1", "2", "3", "4", "--sum"])\nprint(f"Result with --sum: {args.accumulate(args.numbers)}")\n\n# Simulate without --sum\nprint("\\nSimulating: python program.py 1 2 3 4")\nargs = parser.parse_args(["1", "2", "3", "4"])\nprint(f"Result without --sum (default max): {args.accumulate(args.numbers)}\")\n\n# Method 2: Show the help text\nprint("\\nMethod 2: Help text (use --help to see)\")\nprint(\"=\" * 50)\nparser.print_help()\n\nprint("\\n\\n=== How to use in real command line ===\")\nprint("python myprogram.py 1 2 3 4 --sum    # Output: 10\")\nprint(\"python myprogram.py 1 2 3 4         # Output: 4 (max)\")\nprint(\"python myprogram.py --help          # Shows help\")',
  hint: 'Run with --help to see automatically generated help. This demo simulates command line arguments.'
},
{
  id: 'py_mod_26',
  topicId: 'py_modules_packages',
  question: 'Use logging module to log messages with different severity levels.',
  mathSolution: 'logging provides flexible logging system.',
  codeSolution: 'import logging\n\nprint("=== Logging Module Tutorial ===\\n")\n\n# Configure logging\nlogging.basicConfig(\n    level=logging.INFO,\n    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",\n    datefmt="%H:%M:%S"\n)\n\nprint("Log messages being generated:\\n\")\n\n# Log different levels\nlogging.info("Application started\")\nlogging.warning("Low disk space warning\")\nlogging.error("Failed to connect to database\")\n\nprint(\"\\nOnly INFO, WARNING, and ERROR appear because level=INFO\")\nprint(\"DEBUG messages are ignored at this level\\n\")\n\nprint("To see DEBUG messages, change level=logging.DEBUG\")\nprint("Example: logging.basicConfig(level=logging.DEBUG)\")\n\nprint("\\n--- Log Format Components ---\")\nprint("%(asctime)s - Timestamp\")\nprint(\"%(name)s - Logger name\")\nprint(\"%(levelname)s - Severity level\")\nprint(\"%(message)s - The log message\")',
  hint: 'Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.'
},
{
  id: 'py_mod_27',
  topicId: 'py_modules_packages',
  question: 'Use subprocess module to run system commands.',
  mathSolution: 'subprocess.run() executes command and returns result.',
  codeSolution: 'import subprocess\n\n# Run command and capture output\nresult = subprocess.run(["echo", "Hello World"], capture_output=True, text=True)\nprint(result.stdout)  # Output: Hello World\n\n# Check return code\nresult = subprocess.run(["ls", "nonexistent"], capture_output=True, text=True)\nprint(f"Return code: {result.returncode}")  # Non-zero for error',
  hint: 'capture_output=True captures stdout and stderr.'
},
{
  id: 'py_mod_28',
  topicId: 'py_modules_packages',
  question: 'Use pathlib module for path manipulation.',
  mathSolution: 'pathlib provides object-oriented filesystem paths.',
  codeSolution: 'from pathlib import Path\n\n# Create Path object\npath = Path("/home/user/documents/file.txt")\n\nprint(path.name)        # Output: file.txt\nprint(path.stem)        # Output: file\nprint(path.suffix)      # Output: .txt\nprint(path.parent)      # Output: /home/user/documents\nprint(path.exists())    # Check if file exists',
  hint: 'Path objects work across different operating systems.'
},
{
  id: 'py_mod_29',
  topicId: 'py_modules_packages',
  question: 'Use shutil module for high-level file operations.',
  mathSolution: 'shutil provides functions for copying, moving, and deleting files.',
  codeSolution: 'import shutil\n\nprint("=== Shutil Module Tutorial ===\\n")\n\nprint("What is shutil?\")\nprint("shutil (shell utility) provides high-level file operations.\\n\")\n\nprint("Common shutil functions and their usage:\\n\")\n\n# Function 1: copy\ndef demo_copy():\n    print("1. shutil.copy(source, destination)\")\n    print("   Purpose: Copy file from source to destination\")\n    print("   Example: shutil.copy(\\"report.pdf\\", \\"backup/report.pdf\\")\")\n    print("   Result: File copied successfully\\n\")\n    return "Copied"\n\n# Function 2: copytree\ndef demo_copytree():\n    print("2. shutil.copytree(src, dst)\")\n    print(\"   Purpose: Recursively copy entire directory tree\")\n    print(\"   Example: shutil.copytree(\\"project/\\", \\"backup/project/\\")\")\n    print(\"   Result: All files and subdirectories copied\\n\")\n    return "Copied tree"\n\n# Function 3: move\ndef demo_move():\n    print("3. shutil.move(src, dst)\")\n    print(\"   Purpose: Move or rename file/directory\")\n    print(\"   Example: shutil.move(\\"old_name.txt\\", \\"new_name.txt\\")\")\n    print(\"   Result: File moved/renamed\\n\")\n    return "Moved"\n\n# Function 4: rmtree\ndef demo_rmtree():\n    print("4. shutil.rmtree(path)\")\n    print(\"   Purpose: Delete entire directory tree\")\n    print(\"   Example: shutil.rmtree(\\"temp_folder\\")\")\n    print(\"   Result: Directory and all contents removed\\n\")\n    return "Removed"\n\n# Function 5: disk_usage\ndef demo_disk_usage():\n    print(\"5. shutil.disk_usage(path)\")\n    print(\"   Purpose: Get disk usage statistics\")\n    print(\"   Example: usage = shutil.disk_usage(\\"/\\")\")\n    print(\"   Returns: (total, used, free) bytes\\n\")\n    return "Usage info"\n\n# Run demonstrations\ndemo_copy()\ndemo_copytree()\ndemo_move()\ndemo_rmtree()\ndemo_disk_usage()\n\nprint("=== Real World Example ===\")\nprint(\"\"\"\nimport shutil\n\n# Backup a file\nshutil.copy2(\"important.txt\", \"important_backup.txt\")\n\n# Archive a project\nshutil.make_archive(\"project_backup\", \"zip\", \"project_folder\")\n\n# Find executable\npython_path = shutil.which(\"python\")\nprint(f\"Python location: {python_path}\")\n\"\"\")',
  hint: 'shutil operations are more powerful than basic os functions.'
},
{
  id: 'py_mod_30',
  topicId: 'py_modules_packages',
  question: 'Use glob module to find files matching pattern.',
  mathSolution: 'glob returns list of paths matching Unix-style pattern.',
  codeSolution: 'import glob\n\n# Find all .txt files\ntext_files = glob.glob("*.txt")\nprint(text_files)  # List of .txt files in current directory\n\n# Recursive search\nall_py = glob.glob("**/*.py", recursive=True)\nprint(all_py)  # All Python files in subdirectories',
  hint: '** matches any number of subdirectories.'
},
{
  id: 'py_mod_31',
  topicId: 'py_modules_packages',
  question: 'Use pickle module to serialize and deserialize Python objects.',
  mathSolution: 'pickle converts Python objects to byte streams and back.',
  codeSolution: 'import pickle\n\ndata = {"name": "Alice", "scores": [85, 90, 78], "active": True}\n\n# Serialize to file\nwith open("data.pkl", "wb") as f:\n    pickle.dump(data, f)\n\n# Deserialize from file\nwith open("data.pkl", "rb") as f:\n    loaded_data = pickle.load(f)\n\nprint(loaded_data)  # Original dictionary restored',
  hint: 'Always use binary mode ("wb"/"rb") for pickle files.'
},
{
  id: 'py_mod_32',
  topicId: 'py_modules_packages',
  question: 'Use csv module to read and write CSV files.',
  mathSolution: 'csv module handles comma-separated value files.',
  codeSolution: 'import csv\n\n# Writing CSV\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age", "City"])\n    writer.writerow(["Alice", 25, "New York"])\n    writer.writerow(["Bob", 30, "London"])\n\n# Reading CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)',
  hint: 'newline="" prevents extra blank lines on Windows.'
},
{
  id: 'py_mod_33',
  topicId: 'py_modules_packages',
  question: 'Use time module for timing code execution.',
  mathSolution: 'time.time() returns current time in seconds.',
  codeSolution: 'import time\n\nstart = time.time()\n\n# Simulate work\ntime.sleep(2)\n\nend = time.time()\nprint(f"Execution time: {end - start:.2f} seconds")\n\n# Get formatted local time\nprint(time.strftime("%Y-%m-%d %H:%M:%S"))',
  hint: 'time.perf_counter() is more accurate for benchmarking.'
},
{
  id: 'py_mod_34',
  topicId: 'py_modules_packages',
  question: 'Use threading module to run functions concurrently.',
  mathSolution: 'Thread allows multiple operations to run in parallel.',
  codeSolution: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        print(f"Number: {i}")\n        time.sleep(1)\n\ndef print_letters():\n    for letter in "ABCDE":\n        print(f"Letter: {letter}")\n        time.sleep(1)\n\n# Create threads\nt1 = threading.Thread(target=print_numbers)\nt2 = threading.Thread(target=print_letters)\n\n# Start threads\nt1.start()\nt2.start()\n\n# Wait for completion\nt1.join()\nt2.join()\nprint("Both threads completed")',
  hint: 'join() waits for thread to finish.'
},
{
  id: 'py_mod_35',
  topicId: 'py_modules_packages',
  question: 'Use multiprocessing module for parallel processing.',
  mathSolution: 'Process runs in separate memory space for true parallelism.',
  codeSolution: 'import multiprocessing\n\ndef square(n):\n    return n * n\n\nif __name__ == "__main__":\n    numbers = [1, 2, 3, 4, 5]\n    with multiprocessing.Pool(processes=3) as pool:\n        results = pool.map(square, numbers)\n    print(results)  # Output: [1, 4, 9, 16, 25]',
  hint: 'Protect entry point with if __name__ == "__main__" on Windows.'
},
{
  id: 'py_mod_36',
  topicId: 'py_modules_packages',
  question: 'Use queue module for thread-safe communication.',
  mathSolution: 'Queue provides safe exchange of data between threads.',
  codeSolution: 'import threading\nimport queue\nimport time\n\ndef producer(q):\n    for i in range(5):\n        q.put(f"Item {i}")\n        print(f"Produced: Item {i}")\n        time.sleep(1)\n\ndef consumer(q):\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Consumed: {item}")\n        q.task_done()\n\nq = queue.Queue()\nt1 = threading.Thread(target=producer, args=(q,))\nt2 = threading.Thread(target=consumer, args=(q,))\n\nt1.start()\nt2.start()\n\nt1.join()\nq.put(None)  # Signal consumer to stop\nt2.join()',
  hint: 'Queue handles synchronization automatically.'
},
{
  id: 'py_mod_37',
  topicId: 'py_modules_packages',
  question: 'Use urllib.request to fetch data from a URL.',
  mathSolution: 'urllib.request can download web content.',
  codeSolution: 'import urllib.request\n\nurl = "https://api.github.com"\ntry:\n    response = urllib.request.urlopen(url)\n    data = response.read()\n    print(f"Status: {response.status}")\n    print(f"Data length: {len(data)} bytes")\nexcept urllib.error.URLError as e:\n    print(f"Error: {e.reason}")',
  hint: 'response.read() returns bytes, decode() to get string.'
},
{
  id: 'py_mod_38',
  topicId: 'py_modules_packages',
  question: 'Use smtplib to send email via SMTP.',
  mathSolution: 'smtplib handles SMTP protocol for sending emails.',
  codeSolution: 'import smtplib\nfrom email.message import EmailMessage\n\nmsg = EmailMessage()\nmsg.set_content("This is a test email.")\nmsg["Subject"] = "Test from Python"\nmsg["From"] = "sender@example.com"\nmsg["To"] = "receiver@example.com"\n\ntry:\n    server = smtplib.SMTP("smtp.gmail.com", 587)\n    server.starttls()\n    server.login("username", "password")\n    server.send_message(msg)\n    server.quit()\n    print("Email sent")\nexcept Exception as e:\n    print(f"Error: {e}")',
  hint: 'Use app passwords for Gmail with 2-factor authentication.'
},
{
  id: 'py_mod_39',
  topicId: 'py_modules_packages',
  question: 'Use sqlite3 module to create and query a database.',
  mathSolution: 'sqlite3 provides built-in SQL database functionality.',
  codeSolution: 'import sqlite3\n\n# Connect to database (creates if not exists)\nconn = sqlite3.connect("example.db")\ncursor = conn.cursor()\n\n# Create table\ncursor.execute("""CREATE TABLE IF NOT EXISTS users\n                  (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)""")\n\n# Insert data\ncursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))\n\n# Query data\ncursor.execute("SELECT * FROM users")\nrows = cursor.fetchall()\nfor row in rows:\n    print(row)\n\n# Commit and close\nconn.commit()\nconn.close()',
  hint: 'Use parameterized queries to prevent SQL injection.'
},
{
  id: 'py_mod_43',
  topicId: 'py_modules_packages',
  question: 'Use zipfile module to create and extract ZIP archives.',
  mathSolution: 'zipfile provides tools for working with ZIP files.',
  codeSolution: 'import zipfile\nfrom io import BytesIO\n\nprint("=== Zipfile Module Demo ===\\n")\n\n# Create ZIP in memory\nzip_buffer = BytesIO()\nwith zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zipf:\n    zipf.writestr("file1.txt", "Content of file 1")\n    zipf.writestr("file2.txt", "Content of file 2")\n    zipf.writestr("file3.txt", "Content of file 3")\n\nprint("ZIP archive created in memory")\n\n# Read from the ZIP\nzip_buffer.seek(0)\nwith zipfile.ZipFile(zip_buffer, "r") as zipf:\n    print(f"Files in archive: {zipf.namelist()}")\n    for filename in zipf.namelist():\n        content = zipf.read(filename).decode()\n        print(f"  {filename}: {content}")\n        info = zipf.getinfo(filename)\n        print(f"    Size: {info.file_size} bytes")',
  hint: 'Use ZIP_DEFLATED for compression (requires zlib). This example uses BytesIO to work without real files.'
},
{
  id: 'py_mod_44',
  topicId: 'py_modules_packages',
  question: 'Use tarfile module to work with tar archives.',
  mathSolution: 'tarfile handles .tar, .tar.gz, .tar.bz2 files.',
  codeSolution: 'import tarfile\nfrom io import BytesIO\n\nprint("=== Tarfile Module Demo ===\\n")\n\n# Create TAR in memory\ntar_buffer = BytesIO()\nwith tarfile.open(fileobj=tar_buffer, mode="w:gz") as tar:\n    # Add files from strings\n    import io\n    file1 = io.BytesIO(b"Content of file 1")\n    file1.name = "file1.txt"\n    tarinfo = tarfile.TarInfo(name="file1.txt")\n    tarinfo.size = len(file1.getvalue())\n    file1.seek(0)\n    tar.addfile(tarinfo, file1)\n    \n    file2 = io.BytesIO(b"Content of file 2")\n    file2.name = "file2.txt"\n    tarinfo = tarfile.TarInfo(name="file2.txt")\n    tarinfo.size = len(file2.getvalue())\n    file2.seek(0)\n    tar.addfile(tarinfo, file2)\n\nprint("TAR archive created in memory\\n")\n\n# Read from the TAR\ntar_buffer.seek(0)\nwith tarfile.open(fileobj=tar_buffer, mode="r:gz") as tar:\n    print("Files in archive:")\n    for member in tar.getmembers():\n        print(f"  {member.name} ({member.size} bytes)")',
  hint: 'Mode: w:gz for gzip compression, w:bz2 for bzip2. This example uses BytesIO to work without real files.'
},
{
  id: 'py_mod_45',
  topicId: 'py_modules_packages',
  question: 'Use tempfile module to create temporary files and directories.',
  mathSolution: 'tempfile creates files that are automatically deleted.',
  codeSolution: 'import tempfile\nimport os\n\nprint("=== Tempfile Module Demo ===\\n")\n\nprint("Demonstrating tempfile functionality:\\n")\n\n# Simulated TemporaryFile\nprint("1. TemporaryFile (in-memory simulation):\")\nwith tempfile.SpooledTemporaryFile(mode="w+", max_size=1000) as temp:\n    temp.write("Temporary data written to file\")\n    temp.seek(0)\n    print(f"   Read back: {temp.read()}\")\n\n# NamedTemporaryFile\nprint("\\n2. NamedTemporaryFile:\")\nwith tempfile.NamedTemporaryFile(mode="w+", delete=True) as temp:\n    print(f"   Temp file name: {temp.name}\")\n    temp.write("Sample data\")\n    temp.flush()\n    print(f"   Data written to named temporary file\")\n\n# TemporaryDirectory\nprint("\\n3. TemporaryDirectory:\")\nwith tempfile.TemporaryDirectory() as temp_dir:\n    print(f"   Temp directory: {temp_dir}\")\n    file_path = os.path.join(temp_dir, \"test.txt\")\n    print(f\"   Created: {file_path}\")\n    with open(file_path, \"w\") as f:\n        f.write(\"Hello World\")\n    print(\"   File created and written\")\n    print(\"   Directory and contents will be deleted automatically\")\n\nprint(\"\\n=== Benefits of tempfile ===\")\nprint(\"- Automatic cleanup\")\nprint(\"- Secure (random names)\")\nprint(\"- Cross-platform\")',
  hint: 'Files are automatically cleaned up when closed.'
},
{
  id: 'py_mod_46',
  topicId: 'py_modules_packages',
  question: 'Use contextlib module to create context managers.',
  mathSolution: 'contextlib provides utilities for working with context managers.',
  codeSolution: 'from contextlib import contextmanager\nimport time\n\nprint("=== Contextlib Module Demo ===\\n")\n\n# Example 1: Timer context manager\n@contextmanager\ndef timer(name):\n    print(f"Starting {name}...\")\n    start = time.time()\n    try:\n        yield\n    finally:\n        elapsed = time.time() - start\n        print(f"{name} took {elapsed:.4f} seconds\\n\")\n\nprint("1. Timer context manager:\")\nwith timer("Sleep operation"):\n    time.sleep(1)\n\n# Example 2: Redirect output context manager\nfrom contextlib import redirect_stdout\nimport io\n\nprint("2. Redirect output context manager:\")\nf = io.StringIO()\nwith redirect_stdout(f):\n    print("This text goes to the buffer\")\n    print("Instead of the console\")\n\noutput = f.getvalue()\nprint(f"Captured output: {output.strip()}\")\n\n# Example 3: Suppress exceptions\nfrom contextlib import suppress\n\nprint("\\n3. Suppress exceptions:\")\nwith suppress(ValueError):\n    result = int("not a number\")\n    print(\"This line won\'t execute\")\nprint("Exception was suppressed\\n\")\n\n# Example 4: ExitStack for multiple resources\nfrom contextlib import ExitStack\n\nprint(\"4. ExitStack for multiple resources:\")\nwith ExitStack() as stack:\n    files = []\n    for i in range(3):\n        f = stack.enter_context(open(\"temp.txt\", \"w\"))\n        f.write(f\"File {i}\")\n        files.append(f)\n    print(f\"Managed {len(files)} files, all will auto-close\")',
  hint: 'contextmanager turns generator into context manager.'
},
{
  id: 'py_mod_47',
  topicId: 'py_modules_packages',
  question: 'Use importlib to import modules dynamically.',
  mathSolution: 'importlib allows programmatic module loading.',
  codeSolution: 'import importlib\nimport math\n\nprint("=== Importlib Module Demo ===\\n")\n\n# Example 1: Import module by name string\nprint("1. Dynamically importing module:\")\nmodule_name = "math"\nmath_module = importlib.import_module(module_name)\nprint(f"   Imported {module_name}.sqrt(25) = {math_module.sqrt(25)}\")\n\n# Example 2: Check if module exists before importing\nprint("\\n2. Check module existence:\")\nimport importlib.util\n\nmodules_to_check = ["math", "numpy", "json", "requests"]\nfor mod_name in modules_to_check:\n    spec = importlib.util.find_spec(mod_name)\n    if spec is not None:\n        print(f"   ✓ {mod_name} is installed\")\n    else:\n        print(f"   ✗ {mod_name} is not installed\")\n\n# Example 3: Reload a module\nprint("\\n3. Reloading a module:\")\nimport sys\n# Create a simple module dynamically\nsimple_module = importlib.util.module_from_spec(importlib.machinery.ModuleSpec("simple", None))\nsys.modules["simple"] = simple_module\nsimple_module.value = 10\nprint(f"   Initial value: {simple_module.value}\")\n\n# Reload would update the module (but we need a real module for reload)\nprint("   Note: reload() works on previously imported modules\")\n\nprint("\\n=== Common uses of importlib ===\")\nprint("- Plugin systems\")\nprint("- Dynamic configuration loading\")\nprint("- Module hot-reloading during development\")',
  hint: 'Useful for plugins and dynamic code loading.'
},
{
  id: 'py_mod_48',
  topicId: 'py_modules_packages',
  question: 'Use pkgutil to discover and work with packages.',
  mathSolution: 'pkgutil provides utilities for package discovery.',
  codeSolution: 'import pkgutil\n\nprint("=== Pkgutil - Package Discovery Tool ===\\n\")\n\nprint("What pkgutil can do:\")\nprint("1. List all installed packages\\n\")\n\nprint("Available packages on this system:\")\nprint("-" * 30)\nfor i, (_, name, ispkg) in enumerate(pkgutil.iter_modules()[:8], 1):\n    print(f"{i}. {name}\")\n\nprint("\\n2. Check if a package exists\\n\")\n\ndef package_exists(name):\n    for _, pkg_name, _ in pkgutil.iter_modules():\n        if pkg_name == name:\n            return True\n    return False\n\ntest_packages = ["math", "random", "json", "requests\"]\nfor pkg in test_packages:\n    if package_exists(pkg):\n        print(f"✓ {pkg} is installed\")\n    else:\n        print(f"✗ {pkg} is not installed\")\n\nprint("\\nUse pkgutil when you need to:\")\nprint("- Discover available plugins\")\nprint("- Find all packages in a directory\")\nprint("- Work with dynamic imports\")',
  hint: 'get_data() works even for modules in ZIP files.'
},
{
  id: 'py_mod_49',
  topicId: 'py_modules_packages',
  question: 'Create an __init__.py file to define package exports.',
  mathSolution: '__init__.py controls what gets imported from package.',
  codeSolution: 'print("=== __init__.py Package Structure ===\\n\")\n\nprint("What is __init__.py?\")\nprint("It\'s a special file that makes a directory a Python package.\\n\")\n\nprint("Example package structure:\")\nprint(\"\"\"\nmypackage/\n    __init__.py\n    module1.py\n    module2.py\n\"\"\")\n\nprint("Example __init__.py content:\")\nprint(\"\"\"\n# mypackage/__init__.py\n\"\"\"My package documentation.\"\"\"\n\n# Control what gets imported with *\n__all__ = [\"public_function\", \"PublicClass\"]\n\n# Import commonly used modules\nfrom .module2 import public_function, PublicClass\n\n# Package-level initialization\nprint(\"Initializing mypackage\")\n\n# Define package version\n__version__ = \"1.0.0\"\n\"\"\")\n\nprint("\\nHow to use the package:\")\nprint(\"\"\"\n# main.py\nimport mypackage\n\nprint(mypackage.__version__)      # Access package version\nprint(mypackage.PublicClass())    # Use imported class\nmypackage.public_function()       # Use imported function\n\"\"\")\n\nprint("\\n=== Key Features of __init__.py ===\")\nprint(\"1. Makes directory a Python package\")\nprint(\"2. Controls package imports\")\nprint(\"3. Runs package initialization\")\nprint(\"4. Defines package __all__ variable\")\nprint(\"5. Can be empty (just to indicate package)\")',
  hint: '__init__.py runs when package is first imported.'
},
{
  id: 'py_mod_50',
  topicId: 'py_modules_packages',
  question: 'Use pip programmatically to install packages.',
  mathSolution: 'Use subprocess or pip module to install packages.',
  codeSolution: 'import subprocess\nimport sys\nimport importlib.util\n\nprint("=== Pip Programmatic Usage Demo ===\\n\")\n\nprint("1. Checking if packages are installed:\")\n\ndef is_package_installed(package_name):\n    \"\"\"Check if a package is installed\"\"\"\n    spec = importlib.util.find_spec(package_name)\n    return spec is not None\n\npackages_to_check = [\"requests\", \"numpy\", \"pandas\"]\nfor package in packages_to_check:\n    installed = is_package_installed(package)\n    status = "✓ installed" if installed else "✗ not installed"\n    print(f"   {package}: {status}\")\n\nprint("\\n2. Installing packages programmatically:\")\nprint(\"\"\"\n   # Using subprocess (recommended)\n   subprocess.check_call([sys.executable, \"-m\", \"pip\", \"install\", \"package_name\"])\n   \n   # For multiple packages\n   subprocess.check_call([sys.executable, \"-m\", \"pip\", \"install\", \"pkg1\", \"pkg2\"])\n   \n   # Upgrade a package\n   subprocess.check_call([sys.executable, \"-m\", \"pip\", \"install\", \"--upgrade\", \"package_name\"])\n\"\"\")\n\nprint("3. Uninstalling packages:\")\nprint(\"\"\"\n   subprocess.check_call([sys.executable, \"-m\", \"pip\", \"uninstall\", \"-y\", \"package_name\"])\n\"\"\")\n\nprint("4. Listing installed packages:\")\nprint(\"\"\"\n   result = subprocess.run([sys.executable, \"-m\", \"pip\", \"list\"], \n                           capture_output=True, text=True)\n   print(result.stdout)\n\"\"\")\n\nprint("\\n=== Important Notes ===\")\nprint("- Use sys.executable for current Python interpreter\")\nprint("- subprocess is more reliable than pip module directly\")\nprint("- -y flag for automatic yes in uninstall\")\nprint("- May require admin/sudo permissions for system installs\")',
  hint: 'Using subprocess is more reliable than pip module directly.'
}
);
