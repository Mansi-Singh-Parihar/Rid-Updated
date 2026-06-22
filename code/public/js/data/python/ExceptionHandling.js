QuizData.questions.push(
{
  id: 'py_ex_1',
  topicId: 'py_exceptional_handling',
  question: 'Write a program to handle division by zero using try-except block.',
  mathSolution: 'Use try-except to catch ZeroDivisionError when performing division.',
  codeSolution: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        return "Error: Division by zero is not allowed"\n\n# Test cases\nprint(safe_divide(10, 2))   # Output: 5.0\nprint(safe_divide(10, 0))   # Output: Error: Division by zero is not allowed',
  hint: 'Place the division operation in try block and catch ZeroDivisionError.'
},
{
  id: 'py_ex_2',
  topicId: 'py_exceptional_handling',
  question: 'Handle multiple exceptions (ValueError and ZeroDivisionError) when taking user input for division.',
  mathSolution: 'Use multiple except blocks to handle different types of errors separately.',
  codeSolution: 'def divide_numbers(num1, num2):\n    try:\n        result = num1 / num2\n        return f"Result: {result}"\n    except ValueError:\n        return "Error: Please enter valid integers"\n    except ZeroDivisionError:\n        return "Error: Denominator cannot be zero"\n\n# Test cases\nprint(divide_numbers(10, 2))    # Output: Result: 5.0\nprint(divide_numbers(10, 0))    # Output: Error: Denominator cannot be zero',
  hint: 'Catch ValueError for invalid integer conversion and ZeroDivisionError for division by zero.'
},
{
  id: 'py_ex_3',
  topicId: 'py_exceptional_handling',
  question: 'Use else clause with try-except to execute code when no exception occurs.',
  mathSolution: 'The else block runs only if try block completes without any exception.',
  codeSolution: 'def read_file_safe(filename):\n    try:\n        file = open(filename, "r")\n    except FileNotFoundError:\n        return "File not found!"\n    else:\n        content = file.read()\n        file.close()\n        return content\n\n# Test cases\nprint(read_file_safe("existing.txt"))  # Will read if file exists\nprint(read_file_safe("nonexistent.txt"))  # Output: File not found!',
  hint: 'Else block executes only when try block succeeds without exceptions.'
},
{
  id: 'py_ex_4',
  topicId: 'py_exceptional_handling',
  question: 'Implement finally clause to ensure file is closed regardless of exceptions.',
  mathSolution: 'Finally block always executes, whether exception occurs or not.',
  codeSolution: 'def process_file(filename):\n    file = None\n    try:\n        file = open(filename, "r")\n        data = file.read()\n        return data\n    except FileNotFoundError:\n        return "File not found"\n    finally:\n        if file:\n            file.close()\n            print("File closed")\n\n# Test cases\nprint(process_file("test.txt"))  # Will try to read file\nprint(process_file("nonexistent.txt"))  # Output: File not found\n# Always prints "File closed"',
  hint: 'Finally block is used for cleanup operations that must always execute.'
},
{
  id: 'py_ex_5',
  topicId: 'py_exceptional_handling',
  question: 'Raise a custom exception when age is negative.',
  mathSolution: 'Use raise statement to manually trigger an exception when condition is met.',
  codeSolution: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return f"Age set to {age}"\n\n# Test cases\ntry:\n    print(set_age(25))   # Output: Age set to 25\n    print(set_age(-5))   # Raises ValueError\nexcept ValueError as e:\n    print(f"Error: {e}")  # Output: Error: Age cannot be negative',
  hint: 'Use raise keyword followed by the exception class and error message.'
},
{
  id: 'py_ex_6',
  topicId: 'py_exceptional_handling',
  question: 'Create a custom exception class called InsufficientFundsError for a bank account.',
  mathSolution: 'Define a new exception class by inheriting from Exception base class.',
  codeSolution: 'class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Insufficient funds: balance {balance}, attempted withdrawal {amount}")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\n# Test cases\ntry:\n    print(withdraw(100, 50))   # Output: 50\n    print(withdraw(100, 150))  # Raises InsufficientFundsError\nexcept InsufficientFundsError as e:\n    print(f"Error: {e}")  # Output: Error: Insufficient funds: balance 100, attempted withdrawal 150',
  hint: 'Create a class that inherits from Exception and customize the __init__ method.'
},
{
  id: 'py_ex_7',
  topicId: 'py_exceptional_handling',
  question: 'Handle FileNotFoundError when trying to open a non-existent file.',
  mathSolution: 'Catch specific file-related exceptions when working with file operations.',
  codeSolution: 'def read_file_content(filename):\n    try:\n        with open(filename, "r") as file:\n            return file.read()\n    except FileNotFoundError:\n        return f"File {filename} does not exist"\n    except PermissionError:\n        return f"Permission denied to read {filename}"\n\n# Test cases\nprint(read_file_content("test.txt"))  # Will read if exists\nprint(read_file_content("missing.txt"))  # Output: File missing.txt does not exist',
  hint: 'Use with statement for automatic file handling and catch specific file exceptions.'
},
{
  id: 'py_ex_8',
  topicId: 'py_exceptional_handling',
  question: 'Handle KeyboardInterrupt to gracefully exit a program.',
  mathSolution: 'Catch KeyboardInterrupt (Ctrl+C) to perform cleanup before exiting.',
  codeSolution: 'def long_running_process():\n    import time\n    count = 0\n    try:\n        while count < 5:  # Limit to 5 iterations for demo\n            print(f"Processing... iteration {count + 1}")\n            time.sleep(1)\n            count += 1\n    except KeyboardInterrupt:\n        print("\\nProcess interrupted by user. Cleaning up...")\n    print("Process completed")\n\n# Test case\nlong_running_process()  # Press Ctrl+C during execution to see interrupt handling',
  hint: 'KeyboardInterrupt is raised when user presses Ctrl+C.'
},
{
  id: 'py_ex_9',
  topicId: 'py_exceptional_handling',
  question: 'Handle IndexError when accessing list elements beyond its range.',
  mathSolution: 'Catch IndexError when trying to access invalid list indices.',
  codeSolution: 'def safe_list_access(lst, index):\n    try:\n        return lst[index]\n    except IndexError:\n        return f"Index {index} is out of range. List length is {len(lst)}"\n\n# Test cases\nmy_list = [10, 20, 30, 40, 50]\nprint(safe_list_access(my_list, 2))   # Output: 30\nprint(safe_list_access(my_list, 10))  # Output: Index 10 is out of range. List length is 5',
  hint: 'IndexError occurs when trying to access an index that doesn\'t exist in the list.'
},
{
  id: 'py_ex_10',
  topicId: 'py_exceptional_handling',
  question: 'Handle KeyError when accessing missing dictionary keys.',
  mathSolution: 'Use try-except to catch KeyError or use get() method as alternative.',
  codeSolution: 'def get_dict_value(data, key):\n    try:\n        return data[key]\n    except KeyError:\n        return f"Key {key} not found in dictionary"\n\n# Test cases\nmy_dict = {"name": "Alice", "age": 25}\nprint(get_dict_value(my_dict, "name"))  # Output: Alice\nprint(get_dict_value(my_dict, "city"))  # Output: Key city not found in dictionary',
  hint: 'KeyError occurs when accessing a non-existent key in a dictionary.'
},
{
  id: 'py_ex_11',
  topicId: 'py_exceptional_handling',
  question: 'Use assert statement to validate function parameters.',
  mathSolution: 'Assertions are used for debugging and testing conditions that should never happen.',
  codeSolution: 'def calculate_bmi(weight, height):\n    assert weight > 0, "Weight must be positive"\n    assert height > 0, "Height must be positive"\n    return weight / (height ** 2)\n\n# Test cases\ntry:\n    print(calculate_bmi(70, 1.75))  # Output: 22.857...\n    print(calculate_bmi(-70, 1.75)) # Raises AssertionError\nexcept AssertionError as e:\n    print(f"Assertion failed: {e}")  # Output: Assertion failed: Weight must be positive',
  hint: 'Assert raises AssertionError if condition is False. Can be disabled with -O flag.'
},
{
  id: 'py_ex_12',
  topicId: 'py_exceptional_handling',
  question: 'Implement a retry mechanism for operations that might fail temporarily.',
  mathSolution: 'Use a loop with try-except to retry failed operations multiple times.',
  codeSolution: 'def retry_operation(func, max_retries=3):\n    for attempt in range(max_retries):\n        try:\n            return func()\n        except Exception as e:\n            print(f"Attempt {attempt + 1} failed: {e}")\n            if attempt == max_retries - 1:\n                return "Operation failed after all retries"\n            print("Retrying...")\n    return None\n\n# Test cases\nattempt_count = 0\ndef unstable_operation():\n    global attempt_count\n    attempt_count += 1\n    if attempt_count < 2:\n        raise ValueError("Temporary failure")\n    return "Success"\n\nprint(retry_operation(unstable_operation))  # Output: Success (after retry)',
  hint: 'Wrap the operation in a loop and catch exceptions to retry.'
},
{
  id: 'py_ex_13',
  topicId: 'py_exceptional_handling',
  question: 'Handle multiple exceptions in a single except block using tuples.',
  mathSolution: 'Group multiple exception types in a tuple to handle them similarly.',
  codeSolution: 'def process_data(data):\n    try:\n        num = int(data)\n        result = 100 / num\n        return result\n    except (ValueError, ZeroDivisionError) as e:\n        return f"Error: {type(e).__name__} - {e}"\n\n# Test cases\nprint(process_data("10"))     # Output: 10.0\nprint(process_data("abc"))    # Output: Error: ValueError - invalid literal for int()\nprint(process_data("0"))      # Output: Error: ZeroDivisionError - division by zero',
  hint: 'Use parentheses to create a tuple of exception types in a single except block.'
},
{
  id: 'py_ex_14',
  topicId: 'py_exceptional_handling',
  question: 'Use exception chaining to preserve original exception context.',
  mathSolution: 'Use "from" keyword to chain exceptions, preserving the original error context.',
  codeSolution: 'def convert_and_process(data):\n    try:\n        num = int(data)\n        return num * 2\n    except ValueError as e:\n        raise TypeError(f"Invalid data type provided: {data}") from e\n\n# Test cases\ntry:\n    print(convert_and_process("123"))  # Output: 246\n    print(convert_and_process("abc"))  # Raises TypeError\nexcept TypeError as e:\n    print(f"Error: {e}")\n    print(f"Original cause: {e.__cause__}")',
  hint: 'Exception chaining helps track the root cause of an error.'
},
{
  id: 'py_ex_15',
  topicId: 'py_exceptional_handling',
  question: 'Handle TypeError when performing operations on incompatible types.',
  mathSolution: 'Catch TypeError when operations are performed on unsupported data types.',
  codeSolution: 'def add_numbers(a, b):\n    try:\n        return a + b\n    except TypeError:\n        return f"Error: Cannot add {type(a).__name__} and {type(b).__name__}"\n\n# Test cases\nprint(add_numbers(5, 3))        # Output: 8\nprint(add_numbers("Hello", "World"))  # Output: HelloWorld\nprint(add_numbers(5, "10"))     # Output: Error: Cannot add int and str',
  hint: 'TypeError occurs when an operation is applied to an object of inappropriate type.'
},
{
  id: 'py_ex_16',
  topicId: 'py_exceptional_handling',
  question: 'Implement a context manager using try-except-finally for resource management.',
  mathSolution: 'Use try-finally to ensure resources are released even if errors occur.',
  codeSolution: 'class DatabaseConnection:\n    def __enter__(self):\n        print("Connecting to database")\n        self.connected = True\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Closing database connection")\n        self.connected = False\n        if exc_type:\n            print(f"Error occurred: {exc_val}")\n        return False  # Don\'t suppress exceptions\n    \n    def query(self, sql):\n        if not self.connected:\n            raise ConnectionError("Not connected to database")\n        return f"Executing: {sql}"\n\n# Test case\nwith DatabaseConnection() as db:\n    result = db.query("SELECT * FROM users")\n    print(result)',
  hint: 'Context managers use __enter__ and __exit__ methods for automatic resource cleanup.'
},
{
  id: 'py_ex_17',
  topicId: 'py_exceptional_handling',
  question: 'Handle AttributeError when accessing non-existent object attributes.',
  mathSolution: 'Catch AttributeError when trying to access attributes that don\'t exist.',
  codeSolution: 'def safe_getattr(obj, attr_name):\n    try:\n        return getattr(obj, attr_name)\n    except AttributeError:\n        return f"Object has no attribute {attr_name}"\n\n# Test cases\nclass Person:\n    name = "Alice"\n\np = Person()\nprint(safe_getattr(p, "name"))   # Output: Alice\nprint(safe_getattr(p, "age"))    # Output: Object has no attribute age',
  hint: 'AttributeError occurs when accessing an attribute that doesn\'t exist on an object.'
},
{
  id: 'py_ex_18',
  topicId: 'py_exceptional_handling',
  question: 'Handle ImportError when modules are not available.',
  mathSolution: 'Use try-except to gracefully handle missing optional dependencies.',
  codeSolution: 'try:\n    import numpy as np\n    HAS_NUMPY = True\n    print("NumPy available")\nexcept ImportError:\n    HAS_NUMPY = False\n    print("NumPy not available. Using fallback implementation.")\n\n# Demonstrate usage\nif HAS_NUMPY:\n    print("Using NumPy for calculations")\nelse:\n    print("Using standard Python for calculations")',
  hint: 'ImportError is raised when an imported module cannot be found.'
},
{
  id: 'py_ex_19',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that validates email and raises appropriate exceptions.',
  mathSolution: 'Raise different exception types based on validation failures.',
  codeSolution: 'def validate_email(email):\n    if not isinstance(email, str):\n        raise TypeError("Email must be a string")\n    if "@" not in email:\n        raise ValueError("Email must contain @")\n    if len(email) < 5:\n        raise ValueError("Email too short")\n    return True\n\n# Test cases\ntry:\n    print(validate_email("john@example.com"))  # Output: True\n    print(validate_email("invalid"))  # Raises ValueError\nexcept ValueError as e:\n    print(f"Validation error: {e}")\ntry:\n    validate_email(123)  # Raises TypeError\nexcept TypeError as e:\n    print(f"Type error: {e}")',
  hint: 'Use different exception types for different validation failures.'
},
{
  id: 'py_ex_20',
  topicId: 'py_exceptional_handling',
  question: 'Handle StopIteration exception in custom iterator.',
  mathSolution: 'StopIteration signals the end of iteration and should be handled appropriately.',
  codeSolution: 'class CountDown:\n    def __init__(self, start):\n        self.current = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        self.current -= 1\n        return self.current + 1\n\n# Test case\ncounter = CountDown(3)\nprint("Countdown:")\ntry:\n    while True:\n        print(next(counter))\nexcept StopIteration:\n    print("Countdown finished")\n# Output: 3, 2, 1, Countdown finished',
  hint: 'StopIteration is used to signal that an iterator has no more items.'
},
{
  id: 'py_ex_21',
  topicId: 'py_exceptional_handling',
  question: 'Handle OverflowError for mathematical calculations exceeding limits.',
  mathSolution: 'Catch OverflowError when calculations produce numbers too large for representation.',
  codeSolution: 'def calculate_factorial(n):\n    try:\n        result = 1\n        for i in range(1, n + 1):\n            result *= i\n        return result\n    except OverflowError:\n        return f"Factorial of {n} is too large to compute"\n\n# Test cases\nprint(calculate_factorial(5))    # Output: 120\nprint(calculate_factorial(1000)) # Output: Very large number (works in Python)',
  hint: 'OverflowError occurs when a calculation exceeds the maximum limit for a numeric type.'
},
{
  id: 'py_ex_22',
  topicId: 'py_exceptional_handling',
  question: 'Implement logging of exceptions with traceback information.',
  mathSolution: 'Use logging module to record exception details including stack trace.',
  codeSolution: 'import logging\nimport traceback\nimport sys\n\n# Configure logging to show output\nlogging.basicConfig(level=logging.ERROR, stream=sys.stdout)\n\ndef log_exceptions(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as e:\n            error_msg = f"Exception in {func.__name__}: {e}\\n{traceback.format_exc()}"\n            logging.error(error_msg)\n            return f"Error occurred: {e}"\n    return wrapper\n\n@log_exceptions\ndef risky_operation():\n    return 1 / 0\n\n# Test case\nresult = risky_operation()\nprint(result)  # Output: Error occurred: division by zero',
  hint: 'Use traceback.format_exc() to get the full stack trace as a string.'
},
{
  id: 'py_ex_23',
  topicId: 'py_exceptional_handling',
  question: 'Handle RecursionError for deep or infinite recursion.',
  mathSolution: 'Catch RecursionError when recursion depth exceeds Python\'s limit.',
  codeSolution: 'def recursive_function(n):\n    try:\n        if n <= 1:\n            return 1\n        return n * recursive_function(n - 1)\n    except RecursionError:\n        return "Recursion depth exceeded. Consider using iteration."\n\n# Test cases\nprint(recursive_function(5))   # Output: 120\nprint(recursive_function(2000))  # Output: Recursion depth exceeded...',
  hint: 'Python has a default recursion limit (usually 1000) to prevent stack overflow.'
},
{
  id: 'py_ex_24',
  topicId: 'py_exceptional_handling',
  question: 'Create a safe calculator that handles all mathematical errors.',
  mathSolution: 'Handle various math-related exceptions including ZeroDivisionError, OverflowError, etc.',
  codeSolution: 'import math\n\ndef safe_calculator(operation, a, b=None):\n    try:\n        if operation == "divide":\n            return a / b\n        elif operation == "sqrt":\n            if a < 0:\n                raise ValueError("Cannot calculate square root of negative number")\n            return math.sqrt(a)\n        elif operation == "log":\n            if a <= 0:\n                raise ValueError("Logarithm argument must be positive")\n            return math.log(a)\n        elif operation == "power":\n            return a ** b\n    except ZeroDivisionError:\n        return "Error: Division by zero"\n    except ValueError as e:\n        return f"Error: {e}"\n    except OverflowError:\n        return "Error: Result too large"\n\n# Test cases\nprint(safe_calculator("divide", 10, 2))   # Output: 5.0\nprint(safe_calculator("divide", 10, 0))   # Output: Error: Division by zero\nprint(safe_calculator("sqrt", 16))        # Output: 4.0\nprint(safe_calculator("sqrt", -4))        # Output: Error: Cannot calculate square root of negative number',
  hint: 'Different math operations can raise different types of exceptions.'
},
{
  id: 'py_ex_25',
  topicId: 'py_exceptional_handling',
  question: 'Handle UnicodeError when dealing with text encoding/decoding.',
  mathSolution: 'Catch UnicodeError when text cannot be encoded or decoded properly.',
  codeSolution: 'def safe_encode(text, encoding="utf-8"):\n    try:\n        return text.encode(encoding)\n    except UnicodeEncodeError as e:\n        return f"Cannot encode: {e}"\n\ndef safe_decode(bytes_data, encoding="utf-8"):\n    try:\n        return bytes_data.decode(encoding)\n    except UnicodeDecodeError as e:\n        return f"Cannot decode: {e}"\n\n# Test cases\nprint(safe_encode("Hello"))  # Output: b\'Hello\'\nprint(safe_decode(b\'Hello\'))  # Output: Hello\nprint(safe_encode("😊"))  # Works fine with UTF-8',
  hint: 'UnicodeError (and its subclasses UnicodeEncodeError/UnicodeDecodeError) occur during text encoding/decoding.'
},
{
  id: 'py_ex_26',
  topicId: 'py_exceptional_handling',
  question: 'Implement a timeout mechanism using exception handling.',
  mathSolution: 'Use signal module with exception handling to implement timeouts.',
  codeSolution: 'import time\nimport functools\n\nclass TimeoutError(Exception):\n    pass\n\ndef run_with_timeout(timeout_seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            start = time.time()\n            result = func(*args, **kwargs)\n            if time.time() - start > timeout_seconds:\n                return "Operation timed out"\n            return result\n        return wrapper\n    return decorator\n\n# Test case\n@run_with_timeout(timeout_seconds=2)\ndef slow_operation():\n    time.sleep(3)\n    return "Completed"\n\nprint(slow_operation())',
  hint: 'Decorator must return another function to accept func properly.'
},
{
  id: 'py_ex_27',
  topicId: 'py_exceptional_handling',
  question: 'Handle MemoryError when operations exceed available memory.',
  mathSolution: 'Catch MemoryError when Python runs out of memory.',
  codeSolution: 'def create_large_list(size):\n    try:\n        return [0] * size\n    except MemoryError:\n        return f"Cannot create list of size {size}: insufficient memory"\n\n# Test cases\nprint(len(create_large_list(1000)))  # Output: 1000\n# Uncomment below to test memory error (may crash system)\n# print(create_large_list(10**10))  # May cause MemoryError',
  hint: 'MemoryError occurs when an operation runs out of memory.'
},
{
  id: 'py_ex_28',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that safely converts string to number with error handling.',
  mathSolution: 'Handle multiple conversion errors and provide meaningful messages.',
  codeSolution: 'def safe_convert_to_number(value):\n    try:\n        return int(value)\n    except ValueError:\n        try:\n            return float(value)\n        except ValueError:\n            return f"Cannot convert {value} to a number"\n        except TypeError:\n            return f"Invalid type: {type(value).__name__}"\n\n# Test cases\nprint(safe_convert_to_number("123"))    # Output: 123\nprint(safe_convert_to_number("45.67"))  # Output: 45.67\nprint(safe_convert_to_number("abc"))    # Output: Cannot convert abc to a number',
  hint: 'Nested try-except blocks can handle different conversion attempts.'
},
{
  id: 'py_ex_29',
  topicId: 'py_exceptional_handling',
  question: 'Handle PermissionError when accessing files without proper permissions.',
  mathSolution: 'Catch PermissionError when file operations are not allowed.',
  codeSolution: 'def write_to_file(filename, content):\n    try:\n        # Simulate file write operation\n        # In a real environment, this would be: with open(filename, "w") as file:\n        if filename == "/protected/file.txt":\n            raise PermissionError("Permission denied")\n        elif filename == "/dev/null":\n            raise IsADirectoryError("Is a directory")\n        else:\n            return f"Successfully wrote to {filename}"\n    except PermissionError:\n        return f"No permission to write to {filename}"\n    except IsADirectoryError:\n        return f"{filename} is a directory, not a file"\n\n# Test cases\nprint(write_to_file("user_file.txt", "Hello World"))  # Output: Successfully wrote to user_file.txt\nprint(write_to_file("/protected/file.txt", "Secret"))  # Output: No permission to write to /protected/file.txt\nprint(write_to_file("/dev/null", "Data"))  # Output: /dev/null is a directory, not a file',
  hint: 'PermissionError occurs when you don\'t have the required permissions for an operation. This example demonstrates exception handling without actual file operations.'
},
{
  id: 'py_ex_30',
  topicId: 'py_exceptional_handling',
  question: 'Implement a retry decorator with exponential backoff.',
  mathSolution: 'Use a decorator that retries failed operations with increasing delays.',
  codeSolution: 'import time\n\ndef retry_with_backoff(max_retries=3, initial_delay=1):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            delay = initial_delay\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        return f"Failed after {max_retries} attempts: {e}"\n                    print(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")\n                    time.sleep(delay)\n                    delay *= 2  # Exponential backoff\n            return None\n        return wrapper\n    return decorator\n\n# Test case\n@retry_with_backoff(max_retries=3, initial_delay=0.5)\ndef unstable_network_call():\n    import random\n    if random.random() < 0.7:\n        raise ConnectionError("Network timeout")\n    return "Success"\n\nprint(unstable_network_call())  # May succeed or show retry attempts',
  hint: 'Exponential backoff increases delay between retries to avoid overwhelming services.'
},
{
  id: 'py_ex_31',
  topicId: 'py_exceptional_handling',
  question: 'Handle ConnectionError for network operations.',
  mathSolution: 'Catch network-related errors when making HTTP requests.',
  codeSolution: 'import urllib.request\nimport urllib.error\n\ndef fetch_url(url):\n    try:\n        response = urllib.request.urlopen(url, timeout=5)\n        content = response.read().decode(\'utf-8\')\n        return f"Success: {len(content)} bytes retrieved"\n    except urllib.error.URLError as e:\n        if "timed out" in str(e).lower():\n            return f"Request to {url} timed out"\n        else:\n            return f"Failed to connect to {url}: {e.reason}"\n    except ConnectionError:\n        return f"Connection error to {url}"\n    except Exception as e:\n        return f"Error: {type(e).__name__} - {e}"\n\n# Test cases with mock/simulated responses\ndef test_fetch_url():\n    # Test with an invalid URL (will show connection error)\n    print(fetch_url("https://nonexistent-domain-xyz123.com"))\n    \n    # Test with invalid URL format\n    print(fetch_url("not_a_valid_url"))\n    \n    print("Network error handling demonstration completed")\n\ntest_fetch_url()',
  hint: 'ConnectionError occurs when network operations fail. Use urllib which is built into Python.'
},
{
  id: 'py_ex_32',
  topicId: 'py_exceptional_handling',
  question: 'Create a safe dictionary access with nested key handling.',
  mathSolution: 'Handle KeyError at multiple levels when accessing nested dictionaries.',
  codeSolution: 'def safe_nested_get(data, default=None, *keys):\n    current = data\n    for key in keys:\n        try:\n            current = current[key]\n        except (KeyError, TypeError, IndexError):\n            return default\n    return current\n\n# Test cases\nuser_data = {"user": {"profile": {"name": "John", "age": 30}}}\nprint(safe_nested_get(user_data, "Unknown", "user", "profile", "name"))  # Output: John\nprint(safe_nested_get(user_data, "Unknown", "user", "profile", "city"))   # Output: Unknown\nprint(safe_nested_get(user_data, "Unknown", "user", "address", "street"))  # Output: Unknown',
  hint: 'Handle multiple exception types when navigating through nested structures.'
},
{
  id: 'py_ex_33',
  topicId: 'py_exceptional_handling',
  question: 'Handle SystemExit and KeyboardInterrupt gracefully.',
  mathSolution: 'Catch system-level exceptions to perform cleanup before exiting.',
  codeSolution: 'def main_loop():\n    count = 0\n    try:\n        while count < 10:\n            count += 1\n            print(f"Running iteration {count}")\n            if count == 5:\n                import sys\n                sys.exit(0)  # Simulate system exit\n    except KeyboardInterrupt:\n        print("\\nReceived interrupt signal. Cleaning up...")\n    except SystemExit:\n        print("System exit requested. Performing cleanup...")\n    finally:\n        print("Cleanup completed. Goodbye!")\n\n# Test case\nprint("Starting main loop...")\nmain_loop()',
  hint: 'SystemExit is raised by sys.exit(), KeyboardInterrupt by Ctrl+C.'
},
{
  id: 'py_ex_34',
  topicId: 'py_exceptional_handling',
  question: 'Implement a circuit breaker pattern for fault-tolerant systems.',
  mathSolution: 'Track failures and temporarily disable operations after threshold.',
  codeSolution: 'import time\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, timeout=5):\n        self.failure_threshold = failure_threshold\n        self.timeout = timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN\n    \n    def execute(self, func, *args, **kwargs):\n        if self.state == "OPEN":\n            if time.time() - self.last_failure_time > self.timeout:\n                self.state = "HALF_OPEN"\n            else:\n                return "Circuit breaker is OPEN - operation blocked"\n        \n        try:\n            result = func(*args, **kwargs)\n            if self.state == "HALF_OPEN":\n                self.state = "CLOSED"\n                self.failure_count = 0\n                print("Circuit breaker closed -恢复正常")\n            return result\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = time.time()\n            if self.failure_count >= self.failure_threshold:\n                self.state = "OPEN"\n                print(f"Circuit breaker OPEN after {self.failure_count} failures")\n            return f"Operation failed: {e}"\n\n# Test cases\ncb = CircuitBreaker(failure_threshold=2, timeout=3)\n\nfailing_func = lambda: (_ for _ in ()).throw(Exception("Service unavailable"))\nprint(cb.execute(lambda: "Success"))  # Output: Success\nprint(cb.execute(failing_func))  # Output: Operation failed\nprint(cb.execute(failing_func))  # Output: Circuit breaker OPEN\nprint(cb.execute(lambda: "Success"))  # Output: Circuit breaker is OPEN',
  hint: 'Circuit breaker prevents repeated calls to failing services.'
},
{
  id: 'py_ex_35',
  topicId: 'py_exceptional_handling',
  question: 'Handle JSON decode errors gracefully.',
  mathSolution: 'Catch JSONDecodeError when parsing invalid JSON data.',
  codeSolution: 'import json\n\ndef safe_json_parse(json_string):\n    try:\n        return json.loads(json_string)\n    except json.JSONDecodeError as e:\n        return f"Invalid JSON: {e.msg} at position {e.pos}"\n    except TypeError as e:\n        return f"Expected string, got {type(json_string).__name__}"\n\n# Test cases\nprint(safe_json_parse(\'{"name": "Alice", "age": 25}\'))  # Output: {\'name\': \'Alice\', \'age\': 25}\nprint(safe_json_parse(\'{"name": "Alice"\'))  # Output: Invalid JSON: Expecting value at position 15\nprint(safe_json_parse(123))  # Output: Expected string, got int',
  hint: 'JSONDecodeError provides detailed information about parsing failures.'
},
{
  id: 'py_ex_36',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that validates and converts date strings.',
  mathSolution: 'Handle ValueError when parsing invalid date formats.',
  codeSolution: 'from datetime import datetime\n\ndef parse_date(date_string, format="%Y-%m-%d"):\n    try:\n        return datetime.strptime(date_string, format)\n    except ValueError as e:\n        return f"Invalid date format: {e}"\n    except TypeError:\n        return f"Expected string, got {type(date_string).__name__}"\n\n# Test cases\nprint(parse_date("2024-01-15"))  # Output: 2024-01-15 00:00:00\nprint(parse_date("15/01/2024", "%d/%m/%Y"))  # Output: 2024-01-15 00:00:00\nprint(parse_date("invalid-date"))  # Output: Invalid date format: ...',
  hint: 'datetime.strptime raises ValueError for invalid date strings.'
},
{
  id: 'py_ex_37',
  topicId: 'py_exceptional_handling',
  question: 'Handle ArithmeticError for mathematical operation failures.',
  mathSolution: 'ArithmeticError is the base class for various math-related exceptions.',
  codeSolution: 'def safe_math_operation(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except ArithmeticError as e:\n            return f"Mathematical error: {e}"\n    return wrapper\n\n@safe_math_operation\ndef divide(a, b):\n    return a / b\n\n@safe_math_operation\ndef large_power(base, exp):\n    return base ** exp\n\n# Test cases\nprint(divide(10, 2))   # Output: 5.0\nprint(divide(10, 0))   # Output: Mathematical error: division by zero\nprint(large_power(2, 1000))  # Output: Very large number (works)',
  hint: 'ArithmeticError includes ZeroDivisionError, OverflowError, and FloatingPointError.'
},
{
  id: 'py_ex_38',
  topicId: 'py_exceptional_handling',
  question: 'Implement a fallback mechanism when primary operation fails.',
  mathSolution: 'Use try-except to fall back to alternative methods.',
  codeSolution: 'def read_data_with_fallback(primary_file, backup_file):\n    try:\n        with open(primary_file, "r") as f:\n            return f.read()\n    except FileNotFoundError:\n        print(f"Primary file {primary_file} not found. Trying backup...")\n        try:\n            with open(backup_file, "r") as f:\n                return f.read()\n        except FileNotFoundError:\n            return "No data sources available"\n    except PermissionError:\n        return f"No permission to read {primary_file}"\n\n# Test cases\nprint(read_data_with_fallback("primary.txt", "backup.txt"))  # Tries both files\n# Create test files to see fallback in action',
  hint: 'Nested try-except blocks provide multiple fallback levels.'
},
{
  id: 'py_ex_39',
  topicId: 'py_exceptional_handling',
  question: 'Handle EOFError when reading beyond file end.',
  mathSolution: 'Catch EOFError when input operations reach end of file unexpectedly.',
  codeSolution: 'from io import StringIO\n\ndef safe_read_lines(file_obj):\n    lines = []\n    try:\n        while True:\n            line = file_obj.readline()\n            if not line:\n                break\n            lines.append(line.strip())\n    except EOFError:\n        print("Reached end of file")\n    return lines\n\n# Test case 1: Using StringIO instead of actual file (no file system needed)\nprint("Test Case 1 - Normal reading:")\ndata = "Line 1\\nLine 2\\nLine 3"\nfile_obj = StringIO(data)\nresult = safe_read_lines(file_obj)\nprint(result)  # Output: ["Line 1", "Line 2", "Line 3"]\n\n# Test case 2: Simulating EOFError\nprint("\\nTest Case 2 - Simulating EOFError:")\nclass EOFGenerator:\n    def __init__(self):\n        self.calls = 0\n    \n    def readline(self):\n        self.calls += 1\n        if self.calls == 1:\n            return "First line\\n"\n        elif self.calls == 2:\n            return "Second line\\n"\n        else:\n            raise EOFError("End of file reached")\n\nmock_file = EOFGenerator()\nresult2 = safe_read_lines(mock_file)\nprint(f"Lines read before EOFError: {result2}")  # Output: ["First line", "Second line"]\n\n# Test case 3: Empty content\nprint("\\nTest Case 3 - Empty content:")\nempty_file = StringIO("")\nresult3 = safe_read_lines(empty_file)\nprint(result3)  # Output: []',
  hint: 'EOFError occurs when input functions hit end-of-file unexpectedly. Use StringIO to simulate file operations without actual file system access.'
},
{
  id: 'py_ex_40',
  topicId: 'py_exceptional_handling',
  question: 'Create a context manager that handles exceptions and rolls back changes.',
  mathSolution: 'Use context manager with exception handling to implement transaction-like behavior.',
  codeSolution: 'class Transaction:\n    def __init__(self):\n        self.changes = []\n        self.committed = False\n    \n    def __enter__(self):\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type is not None:\n            print(f"Error occurred: {exc_val}. Rolling back changes...")\n            self.rollback()\n        else:\n            self.commit()\n        return False  # Don\'t suppress exceptions\n    \n    def add_change(self, change):\n        self.changes.append(change)\n    \n    def commit(self):\n        print(f"Committing changes: {self.changes}")\n        self.committed = True\n    \n    def rollback(self):\n        print(f"Rolling back changes: {self.changes}")\n        self.changes = []\n\n# Test cases\nprint("Successful transaction:")\nwith Transaction() as t:\n    t.add_change("Update user profile")\n    t.add_change("Add to log")\n    print("Transaction completed without errors")\n\nprint("\\nFailed transaction:")\ntry:\n    with Transaction() as t:\n        t.add_change("Update database")\n        t.add_change("Send email")\n        raise ValueError("Something went wrong")\nexcept ValueError:\n    print("Handled exception outside context")',
  hint: 'Context managers can automatically handle cleanup and rollback on exceptions.'
},
{
  id: 'py_ex_41',
  topicId: 'py_exceptional_handling',
  question: 'Handle NotImplementedError for abstract methods.',
  mathSolution: 'Raise NotImplementedError in base class methods that should be overridden.',
  codeSolution: 'class Shape:\n    def area(self):\n        raise NotImplementedError("Subclasses must implement area()")\n    \n    def perimeter(self):\n        raise NotImplementedError("Subclasses must implement perimeter()")\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14 * self.radius ** 2\n    \n    # perimeter not implemented\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\n# Test cases\ncircle = Circle(5)\nprint(f"Circle area: {circle.area()}")  # Output: Circle area: 78.5\ntry:\n    print(circle.perimeter())  # Raises NotImplementedError\nexcept NotImplementedError as e:\n    print(f"Error: {e}")  # Output: Error: Subclasses must implement perimeter()\n\nrectangle = Rectangle(4, 6)\nprint(f"Rectangle area: {rectangle.area()}")  # Output: Rectangle area: 24\nprint(f"Rectangle perimeter: {rectangle.perimeter()}")  # Output: Rectangle perimeter: 20',
  hint: 'NotImplementedError indicates that a method needs to be implemented in a subclass.'
},
{
  id: 'py_ex_42',
  topicId: 'py_exceptional_handling',
  question: 'Handle OSError and its subclasses for system-related errors.',
  mathSolution: 'Catch OSError for various operating system related failures.',
  codeSolution: 'def safe_file_operation(filename):\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except OSError as e:\n        error_messages = {\n            "FileNotFoundError": "File not found",\n            "PermissionError": "Permission denied",\n            "IsADirectoryError": "Path is a directory",\n        }\n        error_type = type(e).__name__\n        return f"{error_messages.get(error_type, str(e))}: {filename}"\n\n# Test cases\nprint(safe_file_operation("nonexistent.txt"))  # Output: File not found: nonexistent.txt\nprint(safe_file_operation("."))  # Output: Path is a directory: .',
  hint: 'OSError is the parent class for many file and system-related exceptions.'
},
{
  id: 'py_ex_43',
  topicId: 'py_exceptional_handling',
  question: 'Create a rate limiter that handles too many requests.',
  mathSolution: 'Use exception handling to enforce rate limits.',
  codeSolution: 'import time\n\nclass RateLimitExceeded(Exception):\n    pass\n\nclass RateLimiter:\n    def __init__(self, max_calls, period):\n        self.max_calls = max_calls\n        self.period = period\n        self.calls = []\n    \n    def __call__(self, func):\n        def wrapper(*args, **kwargs):\n            now = time.time()\n            # Remove old calls\n            self.calls = [call for call in self.calls if now - call < self.period]\n            \n            if len(self.calls) >= self.max_calls:\n                raise RateLimitExceeded(f"Rate limit exceeded. Max {self.max_calls} calls per {self.period} seconds")\n            \n            self.calls.append(now)\n            return func(*args, **kwargs)\n        return wrapper\n\n@RateLimiter(max_calls=2, period=5)\ndef api_call():\n    return "API response"\n\n# Test cases\nprint(api_call())  # Output: API response\nprint(api_call())  # Output: API response\ntry:\n    print(api_call())  # Raises RateLimitExceeded\nexcept RateLimitExceeded as e:\n    print(f"Error: {e}")  # Output: Error: Rate limit exceeded...',
  hint: 'Rate limiting prevents excessive API calls by raising exceptions when limits exceeded.'
},
{
  id: 'py_ex_44',
  topicId: 'py_exceptional_handling',
  question: 'Handle BufferError when buffer operations fail.',
  mathSolution: 'Catch BufferError when working with buffer protocols fails.',
  codeSolution: 'def process_buffer(data):\n    try:\n        # Create a memoryview\n        view = memoryview(data)\n        # Try to modify buffer\n        view[0] = 0\n        return bytes(view)\n    except BufferError as e:\n        return f"Buffer operation failed: {e}"\n    except TypeError as e:\n        return f"Cannot create buffer from {type(data).__name__}: {e}"\n\n# Test cases\nbyte_data = bytearray([1, 2, 3, 4, 5])\nprint(process_buffer(byte_data))  # Output: bytearray(b\'\\x00\\x02\\x03\\x04\\x05\')\nprint(process_buffer("string"))  # Output: Cannot create buffer from str: cannot modify read-only buffer',
  hint: 'BufferError occurs when buffer operations cannot be performed.'
},
{
  id: 'py_ex_45',
  topicId: 'py_exceptional_handling',
  question: 'Implement a validation chain that collects all errors.',
  mathSolution: 'Collect multiple validation errors instead of raising first one.',
  codeSolution: 'class ValidationError(Exception):\n    def __init__(self, errors):\n        self.errors = errors\n        super().__init__(f"Validation failed: {len(errors)} errors")\n\ndef validate_user_data(data):\n    errors = []\n    \n    # Validate name\n    if "name" not in data:\n        errors.append("Name is required")\n    elif len(data["name"]) < 2:\n        errors.append("Name must be at least 2 characters")\n    \n    # Validate age\n    if "age" not in data:\n        errors.append("Age is required")\n    else:\n        try:\n            age = int(data["age"])\n            if age < 0 or age > 150:\n                errors.append("Age must be between 0 and 150")\n        except ValueError:\n            errors.append("Age must be a number")\n    \n    # Validate email\n    if "email" in data and "@" not in data["email"]:\n        errors.append("Invalid email format")\n    \n    if errors:\n        raise ValidationError(errors)\n    return "Validation successful"\n\n# Test cases\ntry:\n    print(validate_user_data({"name": "A", "age": "abc"}))\nexcept ValidationError as e:\n    print(f"Error: {e}")\n    for error in e.errors:\n        print(f"  - {error}")\n\n# Output will show all validation errors collected',
  hint: 'Collect all errors in a list and raise a single exception with all errors.'
},
{
  id: 'py_ex_46',
  topicId: 'py_exceptional_handling',
  question: 'Handle LookupError for collection access failures.',
  mathSolution: 'LookupError is the base class for IndexError and KeyError.',
  codeSolution: 'def safe_collection_access(collection, key_or_index):\n    try:\n        return collection[key_or_index]\n    except LookupError as e:\n        if isinstance(e, IndexError):\n            return f"Index {key_or_index} out of range"\n        elif isinstance(e, KeyError):\n            return f"Key {key_or_index} not found"\n        else:\n            return f"Lookup error: {e}"\n\n# Test cases\nmy_list = [10, 20, 30, 40, 50]\nmy_dict = {"a": 1, "b": 2, "c": 3}\n\nprint(safe_collection_access(my_list, 2))   # Output: 30\nprint(safe_collection_access(my_list, 10))  # Output: Index 10 out of range\nprint(safe_collection_access(my_dict, "b")) # Output: 2\nprint(safe_collection_access(my_dict, "z")) # Output: Key z not found',
  hint: 'LookupError handles both invalid indices and missing keys.'
},
{
  id: 'py_ex_47',
  topicId: 'py_exceptional_handling',
  question: 'Create a graceful shutdown handler for long-running processes.',
  mathSolution: 'Handle various signals and exceptions to shutdown gracefully.',
  codeSolution: 'import signal\nimport sys\nimport time\n\nclass GracefulShutdown:\n    def __init__(self):\n        self.shutdown_requested = False\n    \n    def setup_handlers(self):\n        signal.signal(signal.SIGINT, self.handle_shutdown)\n        signal.signal(signal.SIGTERM, self.handle_shutdown)\n    \n    def handle_shutdown(self, signum, frame):\n        print(f"\\nReceived shutdown signal {signum}")\n        self.shutdown_requested = True\n    \n    def run(self, main_func, max_iterations=5):\n        self.setup_handlers()\n        iteration = 0\n        try:\n            while not self.shutdown_requested and iteration < max_iterations:\n                iteration += 1\n                print(f"Working... iteration {iteration}")\n                main_func()\n                time.sleep(1)\n        except Exception as e:\n            print(f"Error during execution: {e}")\n        finally:\n            print("Performing cleanup...")\n            print("Shutdown complete")\n\n# Test case\ndef main_work():\n    print("Processing data...")\n\nshutdown_handler = GracefulShutdown()\nshutdown_handler.run(main_work)\nprint("Program completed normally")',
  hint: 'Handle signals to allow graceful shutdown on Ctrl+C or termination.'
},
{
  id: 'py_ex_48',
  topicId: 'py_exceptional_handling',
  question: 'Handle FloatingPointError for floating-point operation failures.',
  mathSolution: 'Catch FloatingPointError when floating-point calculations produce errors.',
  codeSolution: 'import math\n\ndef safe_floating_operation(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except FloatingPointError as e:\n            return f"Floating point error: {e}"\n        except OverflowError:\n            return "Result too large"\n        except ZeroDivisionError:\n            return "Division by zero"\n    return wrapper\n\n@safe_floating_operation\ndef compute_reciprocal(x):\n    return 1.0 / x\n\n@safe_floating_operation\ndef compute_log(x):\n    if x <= 0:\n        raise ValueError("Cannot compute log of non-positive number")\n    return math.log(x)\n\n# Test cases\nprint(compute_reciprocal(2))   # Output: 0.5\nprint(compute_reciprocal(0))   # Output: Division by zero\nprint(compute_log(10))         # Output: 2.302585092994046\n\ntry:\n    print(compute_log(-5))      # Raises ValueError\nexcept ValueError as e:\n    print(f"Error: {e}")',
  hint: 'FloatingPointError occurs when floating-point operations fail (rare in standard Python).'
},
{
  id: 'py_ex_49',
  topicId: 'py_exceptional_handling',
  question: 'Handle BrokenPipeError when writing to closed pipes.',
  mathSolution: 'Catch BrokenPipeError when communication with subprocess fails.',
  codeSolution: 'import subprocess\n\ndef communicate_with_process(command, input_data):\n    try:\n        process = subprocess.Popen(\n            command,\n            stdin=subprocess.PIPE,\n            stdout=subprocess.PIPE,\n            stderr=subprocess.PIPE,\n            text=True\n        )\n        stdout, stderr = process.communicate(input=input_data, timeout=5)\n        return stdout if stdout else "No output"\n    except BrokenPipeError:\n        return "Pipe broken: process may have crashed"\n    except subprocess.TimeoutExpired:\n        process.kill()\n        return "Process timed out"\n    except subprocess.CalledProcessError as e:\n        return f"Process failed with error: {e}"\n    except FileNotFoundError:\n        return "Command not found"\n\n# Test cases\nprint(communicate_with_process(["echo", "Hello"], None))  # Output: Hello\nprint(communicate_with_process(["nonexistentcommand"], None))  # Output: Command not found',
  hint: 'BrokenPipeError occurs when writing to a pipe that has been closed.'
},
{
  id: 'py_ex_50',
  topicId: 'py_exceptional_handling',
  question: 'Create a comprehensive error handling system with custom error types.',
  mathSolution: 'Design a hierarchy of custom exceptions for different error categories.',
  codeSolution: 'class ApplicationError(Exception):\n    """Base class for application exceptions"""\n    def __init__(self, message, code=None):\n        self.message = message\n        self.code = code\n        super().__init__(message)\n\nclass ValidationError(ApplicationError):\n    """Raised when data validation fails"""\n    def __init__(self, message, field=None, code="VALIDATION_ERROR"):\n        self.field = field\n        super().__init__(message, code)\n\nclass DatabaseError(ApplicationError):\n    """Raised when database operations fail"""\n    def __init__(self, message, query=None, code="DB_ERROR"):\n        self.query = query\n        super().__init__(message, code)\n\nclass AuthenticationError(ApplicationError):\n    """Raised when authentication fails"""\n    def __init__(self, message, user=None, code="AUTH_ERROR"):\n        self.user = user\n        super().__init__(message, code)\n\n# Usage example\ndef process_user_registration(user_data):\n    try:\n        # Validate data\n        if "email" not in user_data:\n            raise ValidationError("Email is required", field="email")\n        \n        if "username" not in user_data:\n            raise ValidationError("Username is required", field="username")\n        \n        # Check authentication\n        if not user_data.get("authenticated", False):\n            raise AuthenticationError("User not authenticated", user=user_data.get("username"))\n        \n             \n    except ApplicationError as e:\n        # Build error response with all details\n        error_response = {\n            "error": e.message,\n            "code": e.code,\n            "type": type(e).__name__\n        }\n        # Add specific fields based on error type\n        if isinstance(e, ValidationError) and e.field:\n            error_response["field"] = e.field\n        if isinstance(e, DatabaseError) and e.query:\n            error_response["query"] = e.query\n        if isinstance(e, AuthenticationError) and e.user:\n            error_response["user"] = e.user\n        \n        return error_response\n\n# Test cases\nprint(process_user_registration({"authenticated": True}))  # Validation error - missing email\nprint(process_user_registration({"email": "test@test.com", "authenticated": True}))  # Validation error - missing username\nprint(process_user_registration({"email": "test@test.com", "username": "john", "authenticated": True}))  # Success',
  hint: 'Create a hierarchy of custom exceptions for better error handling and debugging.'
}
);