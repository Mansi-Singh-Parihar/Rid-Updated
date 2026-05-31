QuizData.questions.push(
  {
    id: "py_oop_1",
    topicId: "py_oop",
    question:
      'Create an empty class named "Car" with no attributes or methods.',
    mathSolution:
      "Use class keyword followed by class name and pass statement.",
    codeSolution: "class Car:\n    pass",
    hint: "Use `class ClassName: pass`",
  },
  {
    id: "py_oop_2",
    topicId: "py_oop",
    question:
      'Create a class "Student" with an __init__ method that initializes name and age attributes.',
    mathSolution: "__init__ method runs when object is created.",
    codeSolution:
      "class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
    hint: "Use `def __init__(self, params):`",
  },
  {
    id: "py_oop_3",
    topicId: "py_oop",
    question:
      'Create an object of class "Student" with name "John" and age 20, then print the name.',
    mathSolution: "Object is created by calling class name like a function.",
    codeSolution:
      'class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ns1 = Student("John", 20)\nprint(s1.name)  # John',
    hint: "Use `object_name = ClassName(parameters)`",
  },
  {
    id: "py_oop_4",
    topicId: "py_oop",
    question:
      'Create a class "Rectangle" with attributes length and width, and a method area() that returns the area.',
    mathSolution: "Area = length × width.",
    codeSolution:
      "class Rectangle:\n    def __init__(self, length, width):\n        self.length = length\n        self.width = width\n    \n    def area(self):\n        return self.length * self.width\n\nrect = Rectangle(5, 3)\nprint(rect.area())  # 15",
    hint: "Define method with `def method_name(self):`",
  },
  {
    id: "py_oop_5",
    topicId: "py_oop",
    question:
      "Add a perimeter method to Rectangle class that returns the perimeter.",
    mathSolution: "Perimeter = 2 × (length + width).",
    codeSolution:
      "class Rectangle:\n    def __init__(self, length, width):\n        self.length = length\n        self.width = width\n    \n    def area(self):\n        return self.length * self.width\n    \n    def perimeter(self):\n        return 2 * (self.length + self.width)\n\nrect = Rectangle(5, 3)\nprint(rect.perimeter())  # 16",
    hint: "Use formula `2 * (length + width)`",
  },
  {
    id: "py_oop_6",
    topicId: "py_oop",
    question:
      'Create a class "Circle" with attribute radius, and methods area() and circumference().',
    mathSolution: "Area = πr², Circumference = 2πr.",
    codeSolution:
      "import math\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return math.pi * self.radius ** 2\n    \n    def circumference(self):\n        return 2 * math.pi * self.radius\n\nc = Circle(5)\nprint(c.area())  # 78.53981633974483\nprint(c.circumference())  # 31.41592653589793",
    hint: "Use `import math` and `math.pi`",
  },
  {
    id: "py_oop_7",
    topicId: "py_oop",
    question:
      'Create a class "BankAccount" with attributes account_number and balance, and methods deposit() and withdraw().',
    mathSolution:
      "Deposit adds money, withdraw subtracts if sufficient balance.",
    codeSolution:
      'class BankAccount:\n    def __init__(self, account_number, balance=0):\n        self.account_number = account_number\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return f"Deposited {amount}. New balance: {self.balance}"\n    \n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            return f"Withdrew {amount}. New balance: {self.balance}"\n        else:\n            return "Insufficient funds"\n\nacc = BankAccount("12345", 1000)\nprint(acc.deposit(500))  # Deposited 500. New balance: 1500\nprint(acc.withdraw(200))  # Withdrew 200. New balance: 1300',
    hint: "Check balance before withdraw",
  },
  {
    id: "py_oop_8",
    topicId: "py_oop",
    question:
      'Create a class variable "count" in class "Employee" that tracks number of employees created.',
    mathSolution: "Class variables are shared across all instances.",
    codeSolution:
      'class Employee:\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name\n        Employee.count += 1\n\nemp1 = Employee("Alice")\nemp2 = Employee("Bob")\nprint(Employee.count)  # 2',
    hint: "Increment class variable in __init__",
  },
  {
    id: "py_oop_9",
    topicId: "py_oop",
    question:
      'Create a class variable "pi" in class "MathConstants" and access it without creating an object.',
    mathSolution: "Class variables can be accessed using class name.",
    codeSolution:
      "class MathConstants:\n    pi = 3.14159\n\nprint(MathConstants.pi)  # 3.14159",
    hint: "Use `ClassName.variable_name`",
  },
  {
    id: "py_oop_10",
    topicId: "py_oop",
    question:
      'Create a class "Person" with __init__ method and a __str__ method that returns a formatted string.',
    mathSolution: "__str__ defines string representation of object.",
    codeSolution:
      'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def __str__(self):\n        return f"Person(name={self.name}, age={self.age})"\n\np = Person("Alice", 25)\nprint(p)  # Person(name=Alice, age=25)',
    hint: "Use `def __str__(self):`",
  },
  {
    id: "py_oop_11",
    topicId: "py_oop",
    question:
      'Create a class "Book" with attributes title, author, and price, and a method discount() that applies 10% discount.',
    mathSolution: "Discounted price = price × 0.9.",
    codeSolution:
      'class Book:\n    def __init__(self, title, author, price):\n        self.title = title\n        self.author = author\n        self.price = price\n    \n    def discount(self):\n        return self.price * 0.9\n\nb = Book("Python 101", "John Doe", 100)\nprint(b.discount())  # 90.0',
    hint: "Return `self.price * 0.9`",
  },
  {
    id: "py_oop_12",
    topicId: "py_oop",
    question:
      'Create a simple inheritance where class "Dog" inherits from class "Animal".',
    mathSolution: "Use class Child(Parent): syntax.",
    codeSolution:
      'class Animal:\n    def speak(self):\n        return "Animal speaks"\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nprint(d.speak())  # Animal speaks',
    hint: "Use `class Dog(Animal):`",
  },
  {
    id: "py_oop_13",
    topicId: "py_oop",
    question:
      'Override speak() method in Dog class to return "Woof!" instead of parent\'s "Animal speaks".',
    mathSolution: "Override by defining same method name in child class.",
    codeSolution:
      'class Animal:\n    def speak(self):\n        return "Animal speaks"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nd = Dog()\nprint(d.speak())  # Woof!',
    hint: "Redefine method in child class",
  },
  {
    id: "py_oop_14",
    topicId: "py_oop",
    question:
      "Use super() to call parent class __init__ method in child class.",
    mathSolution: "super().__init__() calls parent constructor.",
    codeSolution:
      'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog("Max", "Golden Retriever")\nprint(d.name)  # Max\nprint(d.breed)  # Golden Retriever',
    hint: "Use `super().__init__(params)`",
  },
  {
    id: "py_oop_15",
    topicId: "py_oop",
    question:
      'Create a class "Vehicle" with method start(), and class "Car" inheriting from Vehicle that adds method honk().',
    mathSolution: "Child class inherits parent methods and can add new ones.",
    codeSolution:
      'class Vehicle:\n    def start(self):\n        return "Vehicle starting..."\n\nclass Car(Vehicle):\n    def honk(self):\n        return "Beep beep!"\n\nc = Car()\nprint(c.start())  # Vehicle starting...\nprint(c.honk())   # Beep beep!',
    hint: "Child class automatically gets parent methods",
  },
  {
    id: "py_oop_16",
    topicId: "py_oop",
    question:
      'Demonstrate multiple inheritance: class "Child" inherits from "Father" and "Mother".',
    mathSolution: "Use class Child(Father, Mother): syntax.",
    codeSolution:
      'class Father:\n    def father_method(self):\n        return "Father"\n\nclass Mother:\n    def mother_method(self):\n        return "Mother"\n\nclass Child(Father, Mother):\n    pass\n\nc = Child()\nprint(c.father_method())  # Father\nprint(c.mother_method())  # Mother',
    hint: "Use `class Child(Parent1, Parent2):`",
  },
  {
    id: "py_oop_17",
    topicId: "py_oop",
    question:
      'Create a class "Temperature" with property celsius, and getter/setter for fahrenheit.',
    mathSolution:
      "Use @property decorator for getter, @attr.setter for setter.",
    codeSolution:
      "class Temperature:\n    def __init__(self, celsius=0):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return (self._celsius * 9/5) + 32\n    \n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._celsius = (value - 32) * 5/9\n\ntemp = Temperature(25)\nprint(temp.fahrenheit)  # 77.0\ntemp.fahrenheit = 86\nprint(temp.celsius)  # 30.0",
    hint: "Use `@property` and `@attribute.setter`",
  },
  {
    id: "py_oop_18",
    topicId: "py_oop",
    question:
      'Create a private attribute "__salary" in class "Employee" with getter and setter methods.',
    mathSolution: "Double underscore makes attribute name mangled (private).",
    codeSolution:
      'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.__salary = salary\n    \n    def get_salary(self):\n        return self.__salary\n    \n    def set_salary(self, salary):\n        if salary > 0:\n            self.__salary = salary\n        else:\n            print("Invalid salary")\n\nemp = Employee("John", 50000)\nprint(emp.get_salary())  # 50000\nemp.set_salary(60000)\nprint(emp.get_salary())  # 60000',
    hint: "Use `__attribute` for private attributes",
  },
  {
    id: "py_oop_19",
    topicId: "py_oop",
    question:
      "Create a class method using @classmethod decorator that returns class name.",
    mathSolution: "Class method receives class as first parameter (cls).",
    codeSolution:
      "class MyClass:\n    @classmethod\n    def get_class_name(cls):\n        return cls.__name__\n\nprint(MyClass.get_class_name())  # MyClass",
    hint: "Use `@classmethod` and `cls` parameter",
  },
  {
    id: "py_oop_20",
    topicId: "py_oop",
    question:
      "Create a static method using @staticmethod decorator that adds two numbers.",
    mathSolution: "Static method doesn't receive self or cls.",
    codeSolution:
      "class Calculator:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Calculator.add(5, 3))  # 8",
    hint: "Use `@staticmethod` decorator",
  },
  {
    id: "py_oop_21",
    topicId: "py_oop",
    question:
      'Create a class "Stack" with methods push(), pop(), and is_empty().',
    mathSolution: "Use list to implement stack (LIFO).",
    codeSolution:
      "class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\ns = Stack()\ns.push(1)\ns.push(2)\nprint(s.pop())  # 2\nprint(s.is_empty())  # False",
    hint: "Use list append() and pop()",
  },
  {
    id: "py_oop_22",
    topicId: "py_oop",
    question:
      'Create a class "Car" with instance attributes brand, model, and class attribute wheels=4.',
    mathSolution:
      "Class attributes are shared, instance attributes are unique.",
    codeSolution:
      'class Car:\n    wheels = 4\n    \n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model\n\nc1 = Car("Toyota", "Camry")\nc2 = Car("Honda", "Civic")\nprint(c1.wheels)  # 4\nprint(c2.wheels)  # 4\nprint(Car.wheels)  # 4',
    hint: "Define class variable outside __init__",
  },
  {
    id: "py_oop_23",
    topicId: "py_oop",
    question:
      'Add __add__ magic method to class "Vector" to add two vectors (x, y).',
    mathSolution: "__add__ defines behavior for + operator.",
    codeSolution:
      'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n\nv1 = Vector(2, 3)\nv2 = Vector(4, 5)\nv3 = v1 + v2\nprint(v3)  # Vector(6, 8)',
    hint: "Define `def __add__(self, other):`",
  },
  {
    id: "py_oop_24",
    topicId: "py_oop",
    question:
      'Add __len__ method to class "BookCollection" that returns number of books.',
    mathSolution: "__len__ defines behavior for len() function.",
    codeSolution:
      'class BookCollection:\n    def __init__(self, books):\n        self.books = books\n    \n    def __len__(self):\n        return len(self.books)\n\ncollection = BookCollection(["Book1", "Book2", "Book3"])\nprint(len(collection))  # 3',
    hint: "Return length of internal collection",
  },
  {
    id: "py_oop_25",
    topicId: "py_oop",
    question:
      'Add __eq__ method to class "Point" to compare two points for equality.',
    mathSolution: "__eq__ defines behavior for == operator.",
    codeSolution:
      "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\np1 = Point(1, 2)\np2 = Point(1, 2)\np3 = Point(3, 4)\nprint(p1 == p2)  # True\nprint(p1 == p3)  # False",
    hint: "Return comparison of attributes",
  },
  {
    id: "py_oop_26",
    topicId: "py_oop",
    question:
      'Create an abstract class "Shape" with abstract method area(), then implement in class "Square".',
    mathSolution: "Use ABC and abstractmethod from abc module.",
    codeSolution:
      "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    \n    def area(self):\n        return self.side ** 2\n\ns = Square(5)\nprint(s.area())  # 25",
    hint: "Import `ABC` and `abstractmethod`",
  },
  {
    id: "py_oop_27",
    topicId: "py_oop",
    question:
      'Create a class "Logger" that uses __new__ method to implement Singleton pattern.',
    mathSolution:
      "__new__ controls instance creation, return same instance each time.",
    codeSolution:
      'class Logger:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def log(self, message):\n        print(f"LOG: {message}")\n\nl1 = Logger()\nl2 = Logger()\nprint(l1 is l2)  # True',
    hint: "Store instance in class variable",
  },
  {
    id: "py_oop_28",
    topicId: "py_oop",
    question:
      "Use __call__ magic method to make a class instance callable like a function.",
    mathSolution: "__call__ allows object to be called as function.",
    codeSolution:
      "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    \n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)\nprint(double(5))  # 10\nprint(double(10))  # 20",
    hint: "Define `def __call__(self, params):`",
  },
  {
    id: "py_oop_29",
    topicId: "py_oop",
    question:
      'Create a class "Employee" with a destructor __del__ that prints message when object is deleted.',
    mathSolution: "__del__ is called when object is garbage collected.",
    codeSolution:
      'class Employee:\n    def __init__(self, name):\n        self.name = name\n        print(f"Employee {name} created")\n    \n    def __del__(self):\n        print(f"Employee {self.name} deleted")\n\nemp = Employee("John")\ndel emp  # Employee John deleted',
    hint: "Define `def __del__(self):`",
  },
  {
    id: "py_oop_30",
    topicId: "py_oop",
    question:
      'Create a class "Time" with hours and minutes, and implement __add__ to add two Time objects.',
    mathSolution: "Handle minutes overflow (60 minutes = 1 hour).",
    codeSolution:
      'class Time:\n    def __init__(self, hours, minutes):\n        self.hours = hours\n        self.minutes = minutes\n    \n    def __add__(self, other):\n        total_minutes = self.minutes + other.minutes\n        total_hours = self.hours + other.hours + total_minutes // 60\n        total_minutes = total_minutes % 60\n        return Time(total_hours, total_minutes)\n    \n    def __str__(self):\n        return f"{self.hours}:{self.minutes:02d}"\n\nt1 = Time(2, 45)\nt2 = Time(1, 30)\nprint(t1 + t2)  # 4:15',
    hint: "Use `// 60` and `% 60` for carryover",
  },
  {
    id: "py_oop_31",
    topicId: "py_oop",
    question:
      'Create a class "BankAccount" with __str__, __repr__, and __len__ (balance in thousands).',
    mathSolution: "__repr__ is for developers, __str__ for users.",
    codeSolution:
      'class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n    \n    def __str__(self):\n        return f"Account of {self.owner} with balance ${self.balance}"\n    \n    def __repr__(self):\n        return f"BankAccount(\'{self.owner}\', {self.balance})"\n    \n    def __len__(self):\n        return self.balance // 1000\n\nacc = BankAccount("Alice", 5000)\nprint(str(acc))  # Account of Alice with balance $5000\nprint(repr(acc))  # BankAccount(\'Alice\', 5000)\nprint(len(acc))  # 5',
    hint: "Define all three magic methods",
  },
  {
    id: "py_oop_32",
    topicId: "py_oop",
    question:
      'Create a class "Playlist" that supports iteration by implementing __iter__ and __next__.',
    mathSolution: "Make class iterable by implementing iterator protocol.",
    codeSolution:
      'class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n        self._index = 0\n    \n    def __iter__(self):\n        self._index = 0\n        return self\n    \n    def __next__(self):\n        if self._index < len(self.songs):\n            song = self.songs[self._index]\n            self._index += 1\n            return song\n        raise StopIteration\n\nplaylist = Playlist(["Song1", "Song2", "Song3"])\nfor song in playlist:\n    print(song)',
    hint: "Implement both __iter__ and __next__",
  },
  {
    id: "py_oop_33",
    topicId: "py_oop",
    question:
      'Use @property decorator to create read-only attribute "area" in class "Circle".',
    mathSolution: "Property without setter creates read-only attribute.",
    codeSolution:
      "import math\n\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @property\n    def area(self):\n        return math.pi * self._radius ** 2\n\nc = Circle(5)\nprint(c.area)  # 78.53981633974483\n# c.area = 100  # AttributeError: can't set attribute",
    hint: "Define property without setter",
  },
  {
    id: "py_oop_34",
    topicId: "py_oop",
    question:
      'Create a class "StringManipulator" that overloads the * operator to repeat string n times.',
    mathSolution: "Implement __mul__ method.",
    codeSolution:
      'class StringManipulator:\n    def __init__(self, text):\n        self.text = text\n    \n    def __mul__(self, n):\n        return StringManipulator(self.text * n)\n    \n    def __str__(self):\n        return self.text\n\ns = StringManipulator("Hi")\nresult = s * 3\nprint(result)  # HiHiHi',
    hint: "Define `def __mul__(self, n):`",
  },
  {
    id: "py_oop_35",
    topicId: "py_oop",
    question:
      "Create a class hierarchy: Animal (parent) -> Mammal -> Dog, demonstrating multi-level inheritance.",
    mathSolution: "Chain inheritance Animal → Mammal → Dog.",
    codeSolution:
      'class Animal:\n    def breathe(self):\n        return "Breathing"\n\nclass Mammal(Animal):\n    def feed_milk(self):\n        return "Feeding milk"\n\nclass Dog(Mammal):\n    def bark(self):\n        return "Woof!"\n\nd = Dog()\nprint(d.breathe())  # Breathing\nprint(d.feed_milk())  # Feeding milk\nprint(d.bark())  # Woof!',
    hint: "Define class Dog(Mammal) and Mammal(Animal)",
  },
  {
    id: "py_oop_36",
    topicId: "py_oop",
    question:
      "Use method resolution order (MRO) to understand which method is called in multiple inheritance.",
    mathSolution: "Python uses C3 linearization for MRO.",
    codeSolution:
      'class A:\n    def method(self):\n        return "A"\n\nclass B(A):\n    def method(self):\n        return "B"\n\nclass C(A):\n    def method(self):\n        return "C"\n\nclass D(B, C):\n    pass\n\nd = D()\nprint(d.method())  # B (MRO: D -> B -> C -> A)\nprint(D.__mro__)',
    hint: "Use `ClassName.__mro__` to see order",
  },
  {
    id: "py_oop_37",
    topicId: "py_oop",
    question:
      'Create a class "Product" with validation in setter: price cannot be negative.',
    mathSolution: "Use property setter with validation.",
    codeSolution:
      'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    \n    @property\n    def price(self):\n        return self._price\n    \n    @price.setter\n    def price(self, value):\n        if value < 0:\n            raise ValueError("Price cannot be negative")\n        self._price = value\n\np = Product("Laptop", 1000)\np.price = 1200\n# p.price = -500  # ValueError',
    hint: "Raise ValueError for invalid values",
  },
  {
    id: "py_oop_38",
    topicId: "py_oop",
    question:
      'Create a class "Counter" with __iadd__ method to support += operator.',
    mathSolution: "__iadd__ defines in-place addition.",
    codeSolution:
      'class Counter:\n    def __init__(self, value=0):\n        self.value = value\n    \n    def __iadd__(self, other):\n        self.value += other\n        return self\n    \n    def __str__(self):\n        return f"Counter({self.value})"\n\nc = Counter(5)\nc += 3\nprint(c)  # Counter(8)',
    hint: "Define `def __iadd__(self, other):`",
  },
  {
    id: "py_oop_39",
    topicId: "py_oop",
    question:
      'Create a class "DatabaseConnection" that uses __enter__ and __exit__ for context manager.',
    mathSolution: 'Context manager protocol enables "with" statement.',
    codeSolution:
      'class DatabaseConnection:\n    def __enter__(self):\n        print("Connecting to database...")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Closing database connection...")\n    \n    def query(self, sql):\n        print(f"Executing: {sql}")\n\nwith DatabaseConnection() as db:\n    db.query("SELECT * FROM users")',
    hint: "Implement __enter__ and __exit__",
  },
  {
    id: "py_oop_40",
    topicId: "py_oop",
    question:
      "Demonstrate method overloading using default arguments (Python doesn't support traditional overloading).",
    mathSolution: "Use default parameters or *args to simulate overloading.",
    codeSolution:
      "class Math:\n    def add(self, a, b, c=0):\n        return a + b + c\n\nm = Math()\nprint(m.add(5, 3))  # 8 (2 arguments)\nprint(m.add(5, 3, 2))  # 10 (3 arguments)",
    hint: "Use default parameters with value 0 or None",
  },
  {
    id: "py_oop_41",
    topicId: "py_oop",
    question:
      'Create a class "LazyProperty" that computes property only once using caching.',
    mathSolution: "Use internal attribute to cache computed value.",
    codeSolution:
      'class DataProcessor:\n    def __init__(self, data):\n        self.data = data\n        self._processed = None\n    \n    @property\n    def processed(self):\n        if self._processed is None:\n            print("Processing data...")\n            self._processed = sum(self.data)\n        return self._processed\n\ndp = DataProcessor([1, 2, 3, 4, 5])\nprint(dp.processed)  # Processing data... 15\nprint(dp.processed)  # 15 (cached, no processing)',
    hint: "Check if attribute exists before computing",
  },
  {
    id: "py_oop_42",
    topicId: "py_oop",
    question:
      'Create a class "Vector3D" with __sub__ method for vector subtraction.',
    mathSolution: "Implement __sub__ similar to __add__.",
    codeSolution:
      'class Vector3D:\n    def __init__(self, x, y, z):\n        self.x = x\n        self.y = y\n        self.z = z\n    \n    def __sub__(self, other):\n        return Vector3D(self.x - other.x, self.y - other.y, self.z - other.z)\n    \n    def __str__(self):\n        return f"Vector3D({self.x}, {self.y}, {self.z})"\n\nv1 = Vector3D(5, 6, 7)\nv2 = Vector3D(2, 3, 4)\nprint(v1 - v2)  # Vector3D(3, 3, 3)',
    hint: "Return new object with subtracted components",
  },
  {
    id: "py_oop_43",
    topicId: "py_oop",
    question:
      'Use __slots__ in class "Point" to reduce memory usage and prevent dynamic attributes.',
    mathSolution: "__slots__ restricts attributes to predefined list.",
    codeSolution:
      "class Point:\n    __slots__ = [\"x\", \"y\"]\n    \n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(1, 2)\nprint(p.x, p.y)  # 1 2\n# p.z = 3  # AttributeError: 'Point' object has no attribute 'z'",
    hint: "Define `__slots__ = [list of attributes]`",
  },
  {
    id: "py_oop_44",
    topicId: "py_oop",
    question:
      'Create a class "Fraction" with numerator and denominator, implement __mul__ for multiplication.',
    mathSolution: "Multiply numerators and denominators.",
    codeSolution:
      'class Fraction:\n    def __init__(self, num, den):\n        self.num = num\n        self.den = den\n    \n    def __mul__(self, other):\n        return Fraction(self.num * other.num, self.den * other.den)\n    \n    def __str__(self):\n        return f"{self.num}/{self.den}"\n\nf1 = Fraction(2, 3)\nf2 = Fraction(3, 4)\nprint(f1 * f2)  # 6/12',
    hint: "Multiply numerator×numerator, denominator×denominator",
  },
  {
    id: "py_oop_45",
    topicId: "py_oop",
    question:
      'Create a class "Student" with class method from_string() that creates student from "name-age" format.',
    mathSolution: "Class method as alternative constructor.",
    codeSolution:
      'class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    @classmethod\n    def from_string(cls, data):\n        name, age = data.split("-")\n        return cls(name, int(age))\n    \n    def __str__(self):\n        return f"{self.name} ({self.age})"\n\ns = Student.from_string("John-20")\nprint(s)  # John (20)',
    hint: "Split string and return cls()",
  },
  {
    id: "py_oop_46",
    topicId: "py_oop",
    question:
      "Demonstrate diamond problem in multiple inheritance and how MRO resolves it.",
    mathSolution: "Diamond: A → B, A → C, B,C → D. MRO determines resolution.",
    codeSolution:
      'class A:\n    def method(self):\n        return "A"\n\nclass B(A):\n    def method(self):\n        return "B"\n\nclass C(A):\n    def method(self):\n        return "C"\n\nclass D(B, C):\n    pass\n\nd = D()\nprint(d.method())  # B (MRO: D -> B -> C -> A)\nprint(D.__mro__)',
    hint: "Check `ClassName.__mro__` for resolution order",
  },
  {
    id: "py_oop_47",
    topicId: "py_oop",
    question:
      'Create a class "Cache" with __getitem__, __setitem__, and __delitem__ to behave like dictionary.',
    mathSolution: "Implement mapping protocol methods.",
    codeSolution:
      'class Cache:\n    def __init__(self):\n        self._data = {}\n    \n    def __getitem__(self, key):\n        return self._data[key]\n    \n    def __setitem__(self, key, value):\n        self._data[key] = value\n    \n    def __delitem__(self, key):\n        del self._data[key]\n    \n    def __len__(self):\n        return len(self._data)\n\ncache = Cache()\ncache["key1"] = "value1"\nprint(cache["key1"])  # value1\nprint(len(cache))  # 1\ndel cache["key1"]',
    hint: "Implement __getitem__, __setitem__, __delitem__",
  },
  {
    id: "py_oop_48",
    topicId: "py_oop",
    question:
      'Create a base class "Polygon" and derived classes "Triangle", "Rectangle" with area calculation.',
    mathSolution: "Polymorphism: each subclass implements area differently.",
    codeSolution:
      "class Polygon:\n    def area(self):\n        pass\n\nclass Triangle(Polygon):\n    def __init__(self, base, height):\n        self.base = base\n        self.height = height\n    \n    def area(self):\n        return 0.5 * self.base * self.height\n\nclass Rectangle(Polygon):\n    def __init__(self, length, width):\n        self.length = length\n        self.width = width\n    \n    def area(self):\n        return self.length * self.width\n\nshapes = [Triangle(10, 5), Rectangle(4, 6)]\nfor shape in shapes:\n    print(shape.area())  # 25.0, 24",
    hint: "Override area() in each subclass",
  },
  {
    id: "py_oop_49",
    topicId: "py_oop",
    question:
      'Create a class "Person" with __lt__ method to compare by age, enabling sorting.',
    mathSolution: "__lt__ defines behavior for < operator.",
    codeSolution:
      'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def __lt__(self, other):\n        return self.age < other.age\n    \n    def __str__(self):\n        return f"{self.name} ({self.age})"\n\npeople = [Person("Alice", 30), Person("Bob", 25), Person("Charlie", 35)]\npeople.sort()\nfor p in people:\n    print(p)  # Bob (25), Alice (30), Charlie (35)',
    hint: "Define __lt__ for custom comparison",
  },
  {
    id: "py_oop_50",
    topicId: "py_oop",
    question:
      'Create a class "EventEmitter" with methods on(), emit(), and off() for event handling.',
    mathSolution: "Store callbacks in dictionary keyed by event name.",
    codeSolution:
      'class EventEmitter:\n    def __init__(self):\n        self._events = {}\n    \n    def on(self, event, callback):\n        if event not in self._events:\n            self._events[event] = []\n        self._events[event].append(callback)\n    \n    def emit(self, event, *args, **kwargs):\n        if event in self._events:\n            for callback in self._events[event]:\n                callback(*args, **kwargs)\n    \n    def off(self, event, callback=None):\n        if event in self._events:\n            if callback is None:\n                del self._events[event]\n            else:\n                self._events[event].remove(callback)\n\ndef on_click():\n    print("Button clicked!")\n\nemitter = EventEmitter()\nemitter.on("click", on_click)\nemitter.emit("click")  # Button clicked!',
    hint: "Use dictionary with event names as keys",
  },
);
