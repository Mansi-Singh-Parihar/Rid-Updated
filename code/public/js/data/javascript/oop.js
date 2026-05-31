QuizData.questions.push(
{
  id: 'js_oop_1',
  topicId: 'js_oop',
  question: 'Create a class with constructor to initialize properties.',
  mathSolution: 'Use class keyword with constructor method.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nconst john = new Person("John", 30);\nconsole.log(john.name);  // John\nconsole.log(john.age);   // 30',
  hint: 'Constructor runs automatically when creating new instance.'
},
{
  id: 'js_oop_2',
  topicId: 'js_oop',
  question: 'Add method to class using prototype or class syntax.',
  mathSolution: 'Methods defined inside class are added to prototype.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n    \n    birthday() {\n        this.age++;\n        return this.age;\n    }\n}\n\nconst john = new Person("John", 30);\nconsole.log(john.greet());     // Hello, my name is John\nconsole.log(john.birthday());  // 31',
  hint: 'Class methods are shared across all instances via prototype.'
},
{
  id: 'js_oop_3',
  topicId: 'js_oop',
  question: 'Use static methods that belong to class, not instances.',
  mathSolution: 'Static keyword creates class-level methods.',
  codeSolution: 'class MathUtils {\n    static add(a, b) {\n        return a + b;\n    }\n    \n    static multiply(a, b) {\n        return a * b;\n    }\n    \n    static PI = 3.14159;\n}\n\nconsole.log(MathUtils.add(5, 3));      // 8\nconsole.log(MathUtils.multiply(4, 2)); // 8\nconsole.log(MathUtils.PI);             // 3.14159\n\n// const utils = new MathUtils();\n// utils.add(5, 3);  // TypeError: utils.add is not a function',
  hint: 'Static methods are called on class, not instances.'
},
{
  id: 'js_oop_4',
  topicId: 'js_oop',
  question: 'Use static properties (class fields).',
  mathSolution: 'Static fields belong to class itself.',
  codeSolution: 'class Counter {\n    static count = 0;\n    \n    static increment() {\n        this.count++;\n        return this.count;\n    }\n    \n    static getCount() {\n        return this.count;\n    }\n}\n\nconsole.log(Counter.count);        // 0\nCounter.increment();\nCounter.increment();\nconsole.log(Counter.getCount());   // 2\nconsole.log(Counter.count);        // 2',
  hint: 'Static properties track class-level state.'
},
{
  id: 'js_oop_5',
  topicId: 'js_oop',
  question: 'Create inheritance using extends keyword.',
  mathSolution: 'Child class extends parent class with super().',
  codeSolution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    speak() {\n        return `${this.name} makes a sound`;\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);  // Call parent constructor\n        this.breed = breed;\n    }\n    \n    speak() {\n        return `${this.name} barks loudly!`;\n    }\n    \n    getBreed() {\n        return this.breed;\n    }\n}\n\nconst rex = new Dog("Rex", "German Shepherd");\nconsole.log(rex.speak());     // Rex barks loudly!\nconsole.log(rex.getBreed());  // German Shepherd',
  hint: 'super() must be called before using `this` in child constructor.'
},
{
  id: 'js_oop_6',
  topicId: 'js_oop',
  question: 'Use super to call parent class methods.',
  mathSolution: 'super.methodName() calls parent implementation.',
  codeSolution: 'class Vehicle {\n    constructor(brand) {\n        this.brand = brand;\n    }\n    \n    info() {\n        return `Brand: ${this.brand}`;\n    }\n}\n\nclass Car extends Vehicle {\n    constructor(brand, model) {\n        super(brand);\n        this.model = model;\n    }\n    \n    info() {\n        return `${super.info()}, Model: ${this.model}`;\n    }\n}\n\nconst tesla = new Car("Tesla", "Model 3");\nconsole.log(tesla.info());  // Brand: Tesla, Model: Model 3',
  hint: 'super.method() calls parent method even if overridden.'
},
{
  id: 'js_oop_7',
  topicId: 'js_oop',
  question: 'Create getters and setters for computed properties.',
  mathSolution: 'Use get and set keywords.',
  codeSolution: 'class Rectangle {\n    constructor(width, height) {\n        this._width = width;\n        this._height = height;\n    }\n    \n    get area() {\n        return this._width * this._height;\n    }\n    \n    get perimeter() {\n        return 2 * (this._width + this._height);\n    }\n    \n    set width(value) {\n        if (value > 0) this._width = value;\n        else throw new Error("Width must be positive");\n    }\n    \n    set height(value) {\n        if (value > 0) this._height = value;\n        else throw new Error("Height must be positive");\n    }\n    \n    get width() {\n        return this._width;\n    }\n    \n    get height() {\n        return this._height;\n    }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);       // 50\nconsole.log(rect.perimeter);  // 30\nrect.width = 8;\nconsole.log(rect.area);       // 80',
  hint: 'Getters/setters allow computed properties and validation.'
},
{
  id: 'js_oop_8',
  topicId: 'js_oop',
  question: 'Create private fields using # (hash) syntax.',
  mathSolution: 'Private fields are accessible only within class.',
  codeSolution: 'class BankAccount {\n    #balance = 0;\n    #accountNumber;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.#accountNumber = accountNumber;\n        this.#balance = initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    withdraw(amount) {\n        if (amount > 0 && amount <= this.#balance) {\n            this.#balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}\n\nconst account = new BankAccount("12345", 1000);\nconsole.log(account.getBalance());  // 1000\n// console.log(account.#balance);   // SyntaxError: Private field\naccount.deposit(500);\nconsole.log(account.getBalance());  // 1500',
  hint: 'Private fields (start with #) are truly private in JavaScript.'
},
{
  id: 'js_oop_9',
  topicId: 'js_oop',
  question: 'Create private methods using # syntax.',
  mathSolution: 'Private methods can only be called within class.',
  codeSolution: 'class User {\n    #password;\n    \n    constructor(username, password) {\n        this.username = username;\n        this.#password = password;\n    }\n    \n    #encryptPassword() {\n        // Simulate encryption\n        return this.#password.split("").reverse().join("");\n    }\n    \n    verifyPassword(inputPassword) {\n        return this.#encryptPassword() === inputPassword.split("").reverse().join("");\n    }\n    \n    #validateUsername() {\n        return this.username.length >= 3;\n    }\n    \n    isValid() {\n        return this.#validateUsername();\n    }\n}\n\nconst user = new User("john", "secret123");\nconsole.log(user.verifyPassword("secret123"));  // true\nconsole.log(user.isValid());  // true\n// user.#encryptPassword();   // SyntaxError',
  hint: 'Private methods improve encapsulation and hide implementation.'
},
{
  id: 'js_oop_10',
  topicId: 'js_oop',
  question: 'Use instanceof operator to check object type.',
  mathSolution: 'instanceof checks if object is instance of class.',
  codeSolution: 'class Animal {}\nclass Dog extends Animal {}\nclass Cat extends Animal {}\n\nconst rex = new Dog();\nconst whiskers = new Cat();\n\nconsole.log(rex instanceof Dog);     // true\nconsole.log(rex instanceof Animal);  // true\nconsole.log(rex instanceof Cat);     // false\nconsole.log(whiskers instanceof Cat); // true\n\n// Works with built-in types\nconsole.log([] instanceof Array);    // true\nconsole.log({} instanceof Object);   // true',
  hint: 'instanceof checks entire prototype chain.'
},
{
  id: 'js_oop_11',
  topicId: 'js_oop',
  question: 'Check property existence using in and hasOwnProperty.',
  mathSolution: 'in checks prototype chain, hasOwnProperty checks own.',
  codeSolution: 'class Parent {\n    parentProp = "parent";\n}\n\nclass Child extends Parent {\n    childProp = "child";\n}\n\nconst obj = new Child();\n\nconsole.log("childProp" in obj);   // true\nconsole.log("parentProp" in obj);  // true\nconsole.log("toString" in obj);    // true (inherited)\n\nconsole.log(obj.hasOwnProperty("childProp"));   // true\nconsole.log(obj.hasOwnProperty("parentProp"));  // false (inherited)\nconsole.log(obj.hasOwnProperty("toString"));    // false (inherited)',
  hint: 'hasOwnProperty ignores inherited properties.'
},
{
  id: 'js_oop_12',
  topicId: 'js_oop',
  question: 'Create abstract class pattern (simulate abstraction).',
  mathSolution: 'Throw error in base class methods to enforce override.',
  codeSolution: 'class Shape {\n    constructor() {\n        if (this.constructor === Shape) {\n            throw new Error("Cannot instantiate abstract class");\n        }\n    }\n    \n    area() {\n        throw new Error("Abstract method area() must be implemented");\n    }\n    \n    perimeter() {\n        throw new Error("Abstract method perimeter() must be implemented");\n    }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n    \n    area() {\n        return Math.PI * this.radius ** 2;\n    }\n    \n    perimeter() {\n        return 2 * Math.PI * this.radius;\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n    \n    area() {\n        return this.width * this.height;\n    }\n    \n    perimeter() {\n        return 2 * (this.width + this.height);\n    }\n}\n\n// const shape = new Shape();  // Error\nconst circle = new Circle(5);\nconsole.log(circle.area());  // 78.54',
  hint: 'Abstract classes define interface that child classes must implement.'
},
{
  id: 'js_oop_13',
  topicId: 'js_oop',
  question: 'Create singleton pattern using class.',
  mathSolution: 'Private constructor with static getInstance method.',
  codeSolution: 'class DatabaseConnection {\n    static #instance = null;\n    #connected = false;\n    \n    constructor() {\n        if (DatabaseConnection.#instance) {\n            throw new Error("Use DatabaseConnection.getInstance()");\n        }\n        DatabaseConnection.#instance = this;\n    }\n    \n    static getInstance() {\n        if (!DatabaseConnection.#instance) {\n            DatabaseConnection.#instance = new DatabaseConnection();\n        }\n        return DatabaseConnection.#instance;\n    }\n    \n    connect() {\n        if (!this.#connected) {\n            console.log("Connecting to database...");\n            this.#connected = true;\n        }\n        return this;\n    }\n    \n    query(sql) {\n        if (!this.#connected) {\n            throw new Error("Not connected to database");\n        }\n        console.log(`Executing: ${sql}`);\n        return `Result of ${sql}`;\n    }\n}\n\nconst db1 = DatabaseConnection.getInstance();\nconst db2 = DatabaseConnection.getInstance();\nconsole.log(db1 === db2);  // true\n\ndb1.connect();\nconsole.log(db1.query("SELECT * FROM users"));\n// const db3 = new DatabaseConnection(); // Error',
  hint: 'Singleton ensures only one instance of a class exists.'
},
{
  id: 'js_oop_14',
  topicId: 'js_oop',
  question: 'Use factory method pattern in classes.',
  mathSolution: 'Static method creates and returns appropriate instance.',
  codeSolution: 'class Vehicle {\n    constructor(type, brand) {\n        this.type = type;\n        this.brand = brand;\n    }\n    \n    static createCar(brand, model) {\n        return new Car(brand, model);\n    }\n    \n    static createMotorcycle(brand, cc) {\n        return new Motorcycle(brand, cc);\n    }\n}\n\nclass Car extends Vehicle {\n    constructor(brand, model) {\n        super("car", brand);\n        this.model = model;\n    }\n    \n    info() {\n        return `${this.brand} ${this.model} (car)`;\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    constructor(brand, cc) {\n        super("motorcycle", brand);\n        this.cc = cc;\n    }\n    \n    info() {\n        return `${this.brand} ${this.cc}cc (motorcycle)`;\n    }\n}\n\nconst car = Vehicle.createCar("Tesla", "Model 3");\nconst bike = Vehicle.createMotorcycle("Yamaha", 600);\nconsole.log(car.info());   // Tesla Model 3 (car)\nconsole.log(bike.info());  // Yamaha 600cc (motorcycle)',
  hint: 'Factory method abstracts object creation logic.'
},
{
  id: 'js_oop_15',
  topicId: 'js_oop',
  question: 'Use mixins to compose multiple behaviors.',
  mathSolution: 'Copy methods from multiple source objects.',
  codeSolution: 'const Flyable = {\n    fly() {\n        return `${this.name} is flying!`;\n    },\n    land() {\n        return `${this.name} landed.`;\n    }\n};\n\nconst Swimmable = {\n    swim() {\n        return `${this.name} is swimming!`;\n    },\n    dive() {\n        return `${this.name} dove underwater.`;\n    }\n};\n\nclass Animal {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nclass Duck extends Animal {}\nclass Penguin extends Animal {}\n\n// Apply mixins\nObject.assign(Duck.prototype, Flyable, Swimmable);\nObject.assign(Penguin.prototype, Swimmable);\n\nconst donald = new Duck("Donald");\nconsole.log(donald.fly());   // Donald is flying!\nconsole.log(donald.swim());  // Donald is swimming!\n\nconst pengy = new Penguin("Pengy");\nconsole.log(pengy.swim());   // Pengy is swimming!\n// pengy.fly(); // Error: not a function',
  hint: 'Mixins allow sharing behavior across unrelated classes.'
},
{
  id: 'js_oop_16',
  topicId: 'js_oop',
  question: 'Create method chaining by returning this.',
  mathSolution: 'Return this from methods for fluent interface.',
  codeSolution: 'class QueryBuilder {\n    constructor() {\n        this.query = { select: [], from: "", where: [] };\n    }\n    \n    select(...fields) {\n        this.query.select = fields;\n        return this;\n    }\n    \n    from(table) {\n        this.query.from = table;\n        return this;\n    }\n    \n    where(condition) {\n        this.query.where.push(condition);\n        return this;\n    }\n    \n    build() {\n        let sql = `SELECT ${this.query.select.join(", ") || "*"} FROM ${this.query.from}`;\n        if (this.query.where.length) {\n            sql += ` WHERE ${this.query.where.join(" AND ")}`;\n        }\n        return sql;\n    }\n}\n\nconst query = new QueryBuilder()\n    .select("name", "age", "email")\n    .from("users")\n    .where("age > 18")\n    .where("active = true")\n    .build();\n\nconsole.log(query);\n// SELECT name, age, email FROM users WHERE age > 18 AND active = true',
  hint: 'Method chaining creates fluent and readable APIs.'
},
{
  id: 'js_oop_17',
  topicId: 'js_oop',
  question: 'Use instanceof with custom classes.',
  mathSolution: 'instanceof checks prototype inheritance chain.',
  codeSolution: 'class Vehicle {}\nclass Car extends Vehicle {}\nclass SportsCar extends Car {}\n\nconst ferrari = new SportsCar();\n\nconsole.log(ferrari instanceof SportsCar);  // true\nconsole.log(ferrari instanceof Car);        // true\nconsole.log(ferrari instanceof Vehicle);    // true\nconsole.log(ferrari instanceof Object);     // true\n\n// Using constructor property\nconsole.log(ferrari.constructor === SportsCar);  // true\nconsole.log(ferrari.constructor === Car);        // false',
  hint: 'instanceof walks up the entire prototype chain.'
},
{
  id: 'js_oop_18',
  topicId: 'js_oop',
  question: 'Create deep copy of class instance.',
  mathSolution: 'Implement clone method for deep copying.',
  codeSolution: 'class Address {\n    constructor(street, city, zip) {\n        this.street = street;\n        this.city = city;\n        this.zip = zip;\n    }\n    \n    clone() {\n        return new Address(this.street, this.city, this.zip);\n    }\n}\n\nclass Person {\n    constructor(name, age, address) {\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n    \n    clone() {\n        const addressClone = this.address.clone();\n        return new Person(this.name, this.age, addressClone);\n    }\n}\n\nconst address = new Address("123 Main St", "NYC", "10001");\nconst john = new Person("John", 30, address);\nconst johnClone = john.clone();\n\njohnClone.name = "Johnny";\njohnClone.address.city = "Boston";\n\nconsole.log(john.address.city);      // NYC (unchanged)\nconsole.log(johnClone.address.city); // Boston\nconsole.log(johnClone.name);         // Johnny',
  hint: 'Clone method creates new independent instance.'
},
{
  id: 'js_oop_19',
  topicId: 'js_oop',
  question: 'Use built-in mixin with Object.assign for multiple inheritance.',
  mathSolution: 'Object.assign copies properties to prototype.',
  codeSolution: 'const TimestampMixin = {\n    getTimestamp() {\n        return this.createdAt || new Date();\n    },\n    setTimestamp() {\n        this.createdAt = new Date();\n    }\n};\n\nconst SerializableMixin = {\n    toJSON() {\n        return JSON.stringify(this);\n    },\n    fromJSON(json) {\n        return JSON.parse(json);\n    }\n};\n\nclass Document {\n    constructor(title, content) {\n        this.title = title;\n        this.content = content;\n    }\n}\n\nObject.assign(Document.prototype, TimestampMixin, SerializableMixin);\n\nconst doc = new Document("My Doc", "Hello World");\ndoc.setTimestamp();\nconsole.log(doc.getTimestamp());  // Current date\nconsole.log(doc.toJSON());        // JSON string',
  hint: 'Mixins provide flexible code reuse across class hierarchies.'
},
{
  id: 'js_oop_20',
  topicId: 'js_oop',
  question: 'Create observer (event emitter) class.',
  mathSolution: 'Maintain listener list and notify on events.',
  codeSolution: 'class EventEmitter {\n    constructor() {\n        this.events = {};\n    }\n    \n    on(event, listener) {\n        if (!this.events[event]) {\n            this.events[event] = [];\n        }\n        this.events[event].push(listener);\n        return () => this.off(event, listener);\n    }\n    \n    off(event, listener) {\n        if (!this.events[event]) return;\n        const index = this.events[event].indexOf(listener);\n        if (index !== -1) this.events[event].splice(index, 1);\n    }\n    \n    emit(event, data) {\n        if (!this.events[event]) return;\n        this.events[event].forEach(listener => {\n            listener(data);\n        });\n    }\n    \n    once(event, listener) {\n        const wrapper = (data) => {\n            listener(data);\n            this.off(event, wrapper);\n        };\n        this.on(event, wrapper);\n    }\n}\n\nclass User extends EventEmitter {\n    constructor(name) {\n        super();\n        this.name = name;\n        this.status = "offline";\n    }\n    \n    login() {\n        this.status = "online";\n        this.emit("login", { user: this.name, time: Date.now() });\n    }\n    \n    logout() {\n        this.status = "offline";\n        this.emit("logout", { user: this.name });\n    }\n}\n\nconst user = new User("John");\nuser.on("login", (data) => {\n    console.log(`${data.user} logged in`);\n});\nuser.on("logout", (data) => {\n    console.log(`${data.user} logged out`);\n});\nuser.login();   // John logged in\nuser.logout();  // John logged out',
  hint: 'Observer pattern enables event-driven architecture.'
},
{
  id: 'js_oop_21',
  topicId: 'js_oop',
  question: 'Create builder pattern for object construction.',
  mathSolution: 'Builder class constructs complex objects step by step.',
  codeSolution: 'class Computer {\n    constructor() {\n        this.cpu = null;\n        this.ram = null;\n        this.storage = null;\n        this.gpu = null;\n    }\n}\n\nclass ComputerBuilder {\n    constructor() {\n        this.computer = new Computer();\n    }\n    \n    setCPU(cpu) {\n        this.computer.cpu = cpu;\n        return this;\n    }\n    \n    setRAM(ram) {\n        this.computer.ram = ram;\n        return this;\n    }\n    \n    setStorage(storage) {\n        this.computer.storage = storage;\n        return this;\n    }\n    \n    setGPU(gpu) {\n        this.computer.gpu = gpu;\n        return this;\n    }\n    \n    build() {\n        return this.computer;\n    }\n}\n\nconst gamingPC = new ComputerBuilder()\n    .setCPU("Intel i9")\n    .setRAM("32GB")\n    .setStorage("1TB SSD")\n    .setGPU("RTX 4080")\n    .build();\n\nconst officePC = new ComputerBuilder()\n    .setCPU("Intel i5")\n    .setRAM("16GB")\n    .setStorage("512GB SSD")\n    .build();\n\nconsole.log(gamingPC);\nconsole.log(officePC);',
  hint: 'Builder pattern simplifies creation of complex objects.'
},
{
  id: 'js_oop_22',
  topicId: 'js_oop',
  question: 'Create prototype pattern for object cloning.',
  mathSolution: 'Implement prototypal inheritance for cloning.',
  codeSolution: 'const carPrototype = {\n    init(make, model, year) {\n        this.make = make;\n        this.model = model;\n        this.year = year;\n        return this;\n    },\n    \n    clone() {\n        return Object.create(Object.getPrototypeOf(this), \n            Object.getOwnPropertyDescriptors(this));\n    },\n    \n    display() {\n        return `${this.make} ${this.model} (${this.year})`;\n    }\n};\n\nconst car1 = Object.create(carPrototype).init("Toyota", "Camry", 2022);\nconst car2 = car1.clone();\ncar2.init("Honda", "Civic", 2023);\n\nconsole.log(car1.display());  // Toyota Camry (2022)\nconsole.log(car2.display());  // Honda Civic (2023)\n\n// Class-based prototype\nclass PrototypeShape {\n    constructor(color, x, y) {\n        this.color = color;\n        this.position = { x, y };\n    }\n    \n    clone() {\n        // Deep clone using structured clone\n        return structuredClone(this);\n    }\n}\n\nconst rect = new PrototypeShape("red", 10, 20);\nconst rectClone = rect.clone();\nrectClone.position.x = 30;\nconsole.log(rect.position.x);      // 10 (unchanged)\nconsole.log(rectClone.position.x); // 30',
  hint: 'Prototype pattern creates new objects by copying existing ones.'
},
{
  id: 'js_oop_23',
  topicId: 'js_oop',
  question: 'Create decorator pattern to add behavior dynamically.',
  mathSolution: 'Wrapper class adds functionality to existing objects.',
  codeSolution: 'class Coffee {\n    cost() {\n        return 5;\n    }\n    \n    description() {\n        return "Simple coffee";\n    }\n}\n\nclass MilkDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 2;\n    }\n    \n    description() {\n        return this.coffee.description() + " with milk";\n    }\n}\n\nclass SugarDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 1;\n    }\n    \n    description() {\n        return this.coffee.description() + " with sugar";\n    }\n}\n\nclass WhippedCreamDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 3;\n    }\n    \n    description() {\n        return this.coffee.description() + " with whipped cream";\n    }\n}\n\nlet myCoffee = new Coffee();\nmyCoffee = new MilkDecorator(myCoffee);\nmyCoffee = new SugarDecorator(myCoffee);\nmyCoffee = new WhippedCreamDecorator(myCoffee);\n\nconsole.log(myCoffee.description());  // Simple coffee with milk with sugar with whipped cream\nconsole.log(myCoffee.cost());         // 11',
  hint: 'Decorators add responsibilities without modifying original class.'
},
{
  id: 'js_oop_24',
  topicId: 'js_oop',
  question: 'Create strategy pattern for interchangeable algorithms.',
  mathSolution: 'Encapsulate algorithms in separate classes.',
  codeSolution: 'class PaymentStrategy {\n    pay(amount) {\n        throw new Error("pay method must be implemented");\n    }\n}\n\nclass CreditCardPayment extends PaymentStrategy {\n    constructor(cardNumber, cvv) {\n        super();\n        this.cardNumber = cardNumber;\n        this.cvv = cvv;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`);\n        return true;\n    }\n}\n\nclass PayPalPayment extends PaymentStrategy {\n    constructor(email) {\n        super();\n        this.email = email;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using PayPal account ${this.email}`);\n        return true;\n    }\n}\n\nclass CryptoPayment extends PaymentStrategy {\n    constructor(walletAddress) {\n        super();\n        this.walletAddress = walletAddress;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using Crypto wallet ${this.walletAddress.slice(0, 6)}...`);\n        return true;\n    }\n}\n\nclass ShoppingCart {\n    constructor() {\n        this.items = [];\n        this.paymentStrategy = null;\n    }\n    \n    addItem(item, price) {\n        this.items.push({ item, price });\n    }\n    \n    setPaymentStrategy(strategy) {\n        this.paymentStrategy = strategy;\n    }\n    \n    checkout() {\n        const total = this.items.reduce((sum, item) => sum + item.price, 0);\n        if (!this.paymentStrategy) {\n            throw new Error("No payment strategy set");\n        }\n        return this.paymentStrategy.pay(total);\n    }\n}\n\nconst cart = new ShoppingCart();\ncart.addItem("Laptop", 1000);\ncart.addItem("Mouse", 50);\n\ncart.setPaymentStrategy(new CreditCardPayment("1234567890123456", "123"));\ncart.checkout();  // Paid $1050 using Credit Card\n\ncart.setPaymentStrategy(new PayPalPayment("user@example.com"));\ncart.checkout();  // Paid $1050 using PayPal',
  hint: 'Strategy pattern allows runtime algorithm changes.'
},
{
  id: 'js_oop_25',
  topicId: 'js_oop',
  question: 'Create adapter pattern for incompatible interfaces.',
  mathSolution: 'Adapter class converts one interface to another.',
  codeSolution: '// Old system\nclass OldLogger {\n    logMessage(msg) {\n        console.log(`[OLD] ${msg}`);\n    }\n}\n\n// New system expects different interface\nclass NewSystem {\n    constructor(logger) {\n        this.logger = logger;\n    }\n    \n    process() {\n        this.logger.log("Processing data...", "INFO");\n        this.logger.log("Data processed", "SUCCESS");\n    }\n}\n\n// Adapter\nclass LoggerAdapter {\n    constructor(oldLogger) {\n        this.oldLogger = oldLogger;\n    }\n    \n    log(message, level) {\n        const formatted = `[${level}] ${message}`;\n        this.oldLogger.logMessage(formatted);\n    }\n}\n\nconst oldLogger = new OldLogger();\nconst adapter = new LoggerAdapter(oldLogger);\nconst system = new NewSystem(adapter);\nsystem.process();\n// [OLD] [INFO] Processing data...\n// [OLD] [SUCCESS] Data processed',
  hint: 'Adapter pattern lets incompatible interfaces work together.'
},
{
  id: 'js_oop_26',
  topicId: 'js_oop',
  question: 'Create facade pattern for complex subsystem.',
  mathSolution: 'Facade provides simplified interface to complex system.',
  codeSolution: 'class CPU {\n    start() { console.log("CPU starting..."); }\n    execute() { console.log("CPU executing instructions"); }\n}\n\nclass Memory {\n    load(address, data) { console.log(`Loading ${data} to address ${address}`); }\n}\n\nclass HardDrive {\n    read(sector) { console.log(`Reading sector ${sector}`); return "data"; }\n}\n\n// Facade\nclass ComputerFacade {\n    constructor() {\n        this.cpu = new CPU();\n        this.memory = new Memory();\n        this.hardDrive = new HardDrive();\n    }\n    \n    startComputer() {\n        console.log("Starting computer...");\n        this.cpu.start();\n        this.memory.load(0, "OS");\n        this.hardDrive.read(0);\n        this.cpu.execute();\n        console.log("Computer ready!");\n    }\n}\n\n// Simple API for client\nconst computer = new ComputerFacade();\ncomputer.startComputer();\n// Starting computer...\n// CPU starting...\n// Loading OS to address 0\n// Reading sector 0\n// CPU executing instructions\n// Computer ready!',
  hint: 'Facade hides subsystem complexity from clients.'
},
{
  id: 'js_oop_27',
  topicId: 'js_oop',
  question: 'Create proxy pattern for lazy initialization.',
  mathSolution: 'Proxy controls access to expensive objects.',
  codeSolution: 'class ExpensiveImage {\n    constructor(filename) {\n        this.filename = filename;\n        this.loadFromDisk();\n    }\n    \n    loadFromDisk() {\n        console.log(`Loading ${this.filename} from disk...`);\n        // Simulate expensive operation\n        this.imageData = `Image data for ${this.filename}`;\n    }\n    \n    display() {\n        console.log(`Displaying ${this.filename}`);\n        return this.imageData;\n    }\n}\n\n// Proxy for lazy loading\nclass ImageProxy {\n    constructor(filename) {\n        this.filename = filename;\n        this.realImage = null;\n    }\n    \n    display() {\n        if (!this.realImage) {\n            this.realImage = new ExpensiveImage(this.filename);\n        }\n        return this.realImage.display();\n    }\n}\n\n// Usage\nconst image1 = new ImageProxy("photo1.jpg");\nconst image2 = new ImageProxy("photo2.jpg");\n\n// Image only loaded when needed\nimage1.display();  // Loads and displays\nimage1.display();  // Only displays (already loaded)\nimage2.display();  // Loads and displays',
  hint: 'Virtual proxy delays expensive operations until needed.'
},
{
  id: 'js_oop_28',
  topicId: 'js_oop',
  question: 'Create command pattern for undo/redo operations.',
  mathSolution: 'Command objects encapsulate actions with undo/redo.',
  codeSolution: 'class Calculator {\n    constructor() {\n        this.value = 0;\n        this.history = [];\n        this.redoStack = [];\n    }\n    \n    execute(command) {\n        command.execute();\n        this.history.push(command);\n        this.redoStack = [];\n    }\n    \n    undo() {\n        const command = this.history.pop();\n        if (command) {\n            command.undo();\n            this.redoStack.push(command);\n        }\n    }\n    \n    redo() {\n        const command = this.redoStack.pop();\n        if (command) {\n            command.execute();\n            this.history.push(command);\n        }\n    }\n    \n    getValue() {\n        return this.value;\n    }\n}\n\nclass AddCommand {\n    constructor(calculator, value) {\n        this.calculator = calculator;\n        this.value = value;\n    }\n    \n    execute() {\n        this.calculator.value += this.value;\n    }\n    \n    undo() {\n        this.calculator.value -= this.value;\n    }\n}\n\nclass SubtractCommand {\n    constructor(calculator, value) {\n        this.calculator = calculator;\n        this.value = value;\n    }\n    \n    execute() {\n        this.calculator.value -= this.value;\n    }\n    \n    undo() {\n        this.calculator.value += this.value;\n    }\n}\n\nconst calc = new Calculator();\ncalc.execute(new AddCommand(calc, 10));\ncalc.execute(new AddCommand(calc, 5));\ncalc.execute(new SubtractCommand(calc, 3));\nconsole.log(calc.getValue());  // 12\ncalc.undo();\nconsole.log(calc.getValue());  // 15\ncalc.undo();\nconsole.log(calc.getValue());  // 10\ncalc.redo();\nconsole.log(calc.getValue());  // 15',
  hint: 'Command pattern enables undo/redo and operation queuing.'
},
{
  id: 'js_oop_29',
  topicId: 'js_oop',
  question: 'Create chain of responsibility pattern.',
  mathSolution: 'Chain handlers that process request or pass to next.',
  codeSolution: 'class Logger {\n    constructor(level) {\n        this.level = level;\n        this.next = null;\n    }\n    \n    setNext(logger) {\n        this.next = logger;\n        return logger;\n    }\n    \n    log(level, message) {\n        if (this.level <= level) {\n            this.write(message);\n        }\n        if (this.next) {\n            this.next.log(level, message);\n        }\n    }\n    \n    write(message) {\n        // Override in subclasses\n    }\n}\n\nclass ConsoleLogger extends Logger {\n    write(message) {\n        console.log(`[CONSOLE] ${message}`);\n    }\n}\n\nclass FileLogger extends Logger {\n    write(message) {\n        console.log(`[FILE] ${message} (written to file)`);\n    }\n}\n\nclass ErrorLogger extends Logger {\n    write(message) {\n        console.error(`[ERROR] ${message}`);\n    }\n}\n\n// Build chain\nconst consoleLogger = new ConsoleLogger(1);\nconst fileLogger = new FileLogger(2);\nconst errorLogger = new ErrorLogger(3);\n\nconsoleLogger.setNext(fileLogger).setNext(errorLogger);\n\nconsoleLogger.log(1, "Info message");\nconsoleLogger.log(2, "Warning message");\nconsoleLogger.log(3, "Error message");',
  hint: 'Chain of responsibility decouples sender from receiver.'
},
{
  id: 'js_oop_30',
  topicId: 'js_oop',
  question: 'Create iterator pattern for custom collection.',
  mathSolution: 'Implement Symbol.iterator for custom iteration.',
  codeSolution: 'class CustomCollection {\n    constructor() {\n        this.items = [];\n    }\n    \n    add(item) {\n        this.items.push(item);\n    }\n    \n    [Symbol.iterator]() {\n        let index = 0;\n        const items = this.items;\n        \n        return {\n            next() {\n                if (index < items.length) {\n                    return { value: items[index++], done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n    \n    // Reverse iterator\n    reverse() {\n        let index = this.items.length - 1;\n        const items = this.items;\n        \n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                if (index >= 0) {\n                    return { value: items[index--], done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n}\n\nconst collection = new CustomCollection();\ncollection.add("A");\ncollection.add("B");\ncollection.add("C");\n\nfor (const item of collection) {\n    console.log(item);  // A, B, C\n}\n\nfor (const item of collection.reverse()) {\n    console.log(item);  // C, B, A\n}',
  hint: 'Iterators enable for...of loops on custom objects.'
},
{
  id: 'js_oop_31',
  topicId: 'js_oop',
  question: 'Create state pattern for object behavior changing with state.',
  mathSolution: 'State objects encapsulate behavior for each state.',
  codeSolution: 'class TrafficLight {\n    constructor() {\n        this.state = new RedState(this);\n    }\n    \n    setState(state) {\n        this.state = state;\n    }\n    \n    change() {\n        this.state.change();\n    }\n    \n    getColor() {\n        return this.state.getColor();\n    }\n}\n\nclass RedState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Red -> Green");\n        this.light.setState(new GreenState(this.light));\n    }\n    \n    getColor() {\n        return "Red";\n    }\n}\n\nclass GreenState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Green -> Yellow");\n        this.light.setState(new YellowState(this.light));\n    }\n    \n    getColor() {\n        return "Green";\n    }\n}\n\nclass YellowState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Yellow -> Red");\n        this.light.setState(new RedState(this.light));\n    }\n    \n    getColor() {\n        return "Yellow";\n    }\n}\n\nconst light = new TrafficLight();\nconsole.log(light.getColor());  // Red\nlight.change();  // Red -> Green\nconsole.log(light.getColor());  // Green\nlight.change();  // Green -> Yellow\nlight.change();  // Yellow -> Red',
  hint: 'State pattern allows object to change behavior when internal state changes.'
},
{
  id: 'js_oop_32',
  topicId: 'js_oop',
  question: 'Create template method pattern.',
  mathSolution: 'Base class defines skeleton, subclasses implement steps.',
  codeSolution: 'class DataProcessor {\n    // Template method\n    process() {\n        this.loadData();\n        this.processData();\n        this.saveData();\n        this.cleanup();\n    }\n    \n    loadData() {\n        throw new Error("loadData must be implemented");\n    }\n    \n    processData() {\n        throw new Error("processData must be implemented");\n    }\n    \n    saveData() {\n        console.log("Saving data (default implementation)");\n    }\n    \n    cleanup() {\n        console.log("Cleaning up resources");\n    }\n}\n\nclass CSVProcessor extends DataProcessor {\n    loadData() {\n        console.log("Loading CSV file...");\n        this.data = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];\n    }\n    \n    processData() {\n        console.log("Processing CSV data...");\n        this.data = this.data.map(row => ({ ...row, processed: true }));\n    }\n    \n    saveData() {\n        console.log("Saving processed CSV data to database");\n    }\n}\n\nclass JSONProcessor extends DataProcessor {\n    loadData() {\n        console.log("Loading JSON from API...");\n        this.data = { users: [{ id: 1 }, { id: 2 }] };\n    }\n    \n    processData() {\n        console.log("Processing JSON data...");\n        this.data.users = this.data.users.map(u => ({ ...u, validated: true }));\n    }\n    \n    saveData() {\n        console.log("Saving JSON data to cache");\n    }\n}\n\nconst csvProcessor = new CSVProcessor();\ncsvProcessor.process();\n\nconst jsonProcessor = new JSONProcessor();\njsonProcessor.process();',
  hint: 'Template method defines algorithm structure, subclasses implement steps.'
},
{
  id: 'js_oop_33',
  topicId: 'js_oop',
  question: 'Create visitor pattern for double dispatch.',
  mathSolution: 'Visitor adds operations without modifying object structure.',
  codeSolution: 'class Shape {\n    accept(visitor) {\n        throw new Error("accept must be implemented");\n    }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n    \n    accept(visitor) {\n        visitor.visitCircle(this);\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n    \n    accept(visitor) {\n        visitor.visitRectangle(this);\n    }\n}\n\nclass AreaVisitor {\n    visitCircle(circle) {\n        const area = Math.PI * circle.radius ** 2;\n        console.log(`Circle area: ${area.toFixed(2)}`);\n    }\n    \n    visitRectangle(rect) {\n        const area = rect.width * rect.height;\n        console.log(`Rectangle area: ${area}`);\n    }\n}\n\nclass PerimeterVisitor {\n    visitCircle(circle) {\n        const perimeter = 2 * Math.PI * circle.radius;\n        console.log(`Circle perimeter: ${perimeter.toFixed(2)}`);\n    }\n    \n    visitRectangle(rect) {\n        const perimeter = 2 * (rect.width + rect.height);\n        console.log(`Rectangle perimeter: ${perimeter}`);\n    }\n}\n\nconst shapes = [new Circle(5), new Rectangle(4, 6)];\nconst areaVisitor = new AreaVisitor();\nconst perimeterVisitor = new PerimeterVisitor();\n\nshapes.forEach(shape => shape.accept(areaVisitor));\nshapes.forEach(shape => shape.accept(perimeterVisitor));',
  hint: 'Visitor pattern adds operations to objects without changing them.'
},
{
  id: 'js_oop_34',
  topicId: 'js_oop',
  question: 'Use Object.freeze() to create immutable objects.',
  mathSolution: 'Freeze prevents property changes, additions, deletions.',
  codeSolution: 'class ImmutableConfig {\n    constructor(config) {\n        Object.assign(this, config);\n        Object.freeze(this);\n        Object.freeze(this.settings);  // Deep freeze nested\n    }\n    \n    update(key, value) {\n        // Immutable: returns new instance instead of modifying\n        const newConfig = { ...this, [key]: value };\n        return new ImmutableConfig(newConfig);\n    }\n}\n\nconst config = new ImmutableConfig({ apiUrl: "https://api.com", timeout: 5000 });\nconsole.log(config.apiUrl);  // https://api.com\n\n// config.apiUrl = "new-url";  // TypeError in strict mode\n// config.newProp = "test";    // TypeError\n\nconst updatedConfig = config.update("timeout", 10000);\nconsole.log(updatedConfig.timeout);  // 10000\nconsole.log(config.timeout);          // 5000 (unchanged)',
  hint: 'Immutability prevents side effects and bugs.'
},
{
  id: 'js_oop_35',
  topicId: 'js_oop',
  question: 'Create value object pattern.',
  mathSolution: 'Value objects are immutable and compared by value.',
  codeSolution: 'class Money {\n    constructor(amount, currency) {\n        this.amount = amount;\n        this.currency = currency;\n        Object.freeze(this);\n    }\n    \n    add(other) {\n        if (this.currency !== other.currency) {\n            throw new Error("Cannot add different currencies");\n        }\n        return new Money(this.amount + other.amount, this.currency);\n    }\n    \n    equals(other) {\n        return other && \n               this.amount === other.amount && \n               this.currency === other.currency;\n    }\n    \n    toString() {\n        return `${this.currency} ${this.amount.toFixed(2)}`;\n    }\n}\n\nclass Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n        Object.freeze(this);\n    }\n    \n    distanceTo(other) {\n        const dx = this.x - other.x;\n        const dy = this.y - other.y;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n    \n    translate(dx, dy) {\n        return new Point(this.x + dx, this.y + dy);\n    }\n    \n    equals(other) {\n        return other && this.x === other.x && this.y === other.y;\n    }\n}\n\nconst money1 = new Money(100, "USD");\nconst money2 = new Money(50, "USD");\nconst total = money1.add(money2);\nconsole.log(total.toString());  // USD 150.00\nconsole.log(money1.equals(money2));  // false\n\nconst p1 = new Point(0, 0);\nconst p2 = new Point(3, 4);\nconsole.log(p1.distanceTo(p2));  // 5',
  hint: 'Value objects are immutable and compared by properties, not identity.'
},
{
  id: 'js_oop_36',
  topicId: 'js_oop',
  question: 'Create factory pattern for object creation.',
  mathSolution: 'Factory methods centralize object creation logic.',
  codeSolution: 'class User {\n    constructor(type, name, permissions) {\n        this.type = type;\n        this.name = name;\n        this.permissions = permissions;\n    }\n    \n    describe() {\n        return `${this.name} (${this.type}) - Permissions: ${this.permissions.join(", ")}`;\n    }\n}\n\nclass UserFactory {\n    static createAdmin(name) {\n        return new User("admin", name, ["read", "write", "delete", "manage_users"]);\n    }\n    \n    static createEditor(name) {\n        return new User("editor", name, ["read", "write"]);\n    }\n    \n    static createViewer(name) {\n        return new User("viewer", name, ["read"]);\n    }\n    \n    static createGuest() {\n        return new User("guest", "Guest", ["read_only"]);\n    }\n}\n\nconst admin = UserFactory.createAdmin("Alice");\nconst editor = UserFactory.createEditor("Bob");\nconst viewer = UserFactory.createViewer("Charlie");\n\nconsole.log(admin.describe());\nconsole.log(editor.describe());\nconsole.log(viewer.describe());',
  hint: 'Factory pattern centralizes and simplifies object creation.'
},
{
  id: 'js_oop_37',
  topicId: 'js_oop',
  question: 'Use composition over inheritance.',
  mathSolution: 'Compose objects with behaviors rather than inheriting.',
  codeSolution: '// Behaviors\nconst FlyBehavior = {\n    fly() {\n        return `${this.name} is flying!`;\n    }\n};\n\nconst SwimBehavior = {\n    swim() {\n        return `${this.name} is swimming!`;\n    }\n};\n\nconst WalkBehavior = {\n    walk() {\n        return `${this.name} is walking!`;\n    }\n};\n\nconst QuackBehavior = {\n    quack() {\n        return `${this.name} says Quack!`;\n    }\n};\n\n// Composition\nclass Animal {\n    constructor(name) {\n        this.name = name;\n        this.behaviors = [];\n    }\n    \n    addBehavior(behavior) {\n        Object.assign(this, behavior);\n        this.behaviors.push(behavior);\n    }\n    \n    performActions() {\n        return this.behaviors.map(behavior => {\n            const action = Object.keys(behavior)[0];\n            return this[action]();\n        });\n    }\n}\n\nclass Duck extends Animal {\n    constructor(name) {\n        super(name);\n        this.addBehavior(WalkBehavior);\n        this.addBehavior(SwimBehavior);\n        this.addBehavior(QuackBehavior);\n        this.addBehavior(FlyBehavior);\n    }\n}\n\nclass Penguin extends Animal {\n    constructor(name) {\n        super(name);\n        this.addBehavior(WalkBehavior);\n        this.addBehavior(SwimBehavior);\n        // No FlyBehavior for penguins\n    }\n}\n\nconst duck = new Duck("Donald");\nconsole.log(duck.fly());    // Donald is flying!\nconsole.log(duck.swim());   // Donald is swimming!\nconsole.log(duck.quack());  // Donald says Quack!\n\nconst penguin = new Penguin("Pingu");\nconsole.log(penguin.walk()); // Pingu is walking!\nconsole.log(penguin.swim()); // Pingu is swimming!\n// penguin.fly(); // Error: not a function',
  hint: 'Composition provides more flexibility than inheritance.'
},
{
  id: 'js_oop_38',
  topicId: 'js_oop',
  question: 'Use dependency injection for loose coupling.',
  mathSolution: 'Inject dependencies rather than creating internally.',
  codeSolution: 'class Database {\n    query(sql) {\n        console.log(`Executing: ${sql}`);\n        return [{ id: 1, name: "John" }];\n    }\n}\n\nclass Logger {\n    log(message) {\n        console.log(`[LOG] ${message}`);\n    }\n}\n\nclass UserService {\n    constructor(database, logger) {\n        this.database = database;\n        this.logger = logger;\n    }\n    \n    async getUsers() {\n        this.logger.log("Fetching users");\n        const users = this.database.query("SELECT * FROM users");\n        this.logger.log(`Found ${users.length} users`);\n        return users;\n    }\n}\n\n// Manual DI\nconst db = new Database();\nconst logger = new Logger();\nconst userService = new UserService(db, logger);\n\nuserService.getUsers();\n\n// DI Container (simple)\nclass Container {\n    constructor() {\n        this.services = {};\n    }\n    \n    register(name, service, dependencies = []) {\n        this.services[name] = { service, dependencies, instance: null };\n    }\n    \n    get(name) {\n        const entry = this.services[name];\n        if (entry.instance) return entry.instance;\n        \n        const dependencies = entry.dependencies.map(dep => this.get(dep));\n        entry.instance = new entry.service(...dependencies);\n        return entry.instance;\n    }\n}\n\nconst container = new Container();\ncontainer.register("database", Database);\ncontainer.register("logger", Logger);\ncontainer.register("userService", UserService, ["database", "logger"]);\n\nconst userServiceDI = container.get("userService");\nuserServiceDI.getUsers();',
  hint: 'Dependency injection makes code more testable and flexible.'
},
{
  id: 'js_oop_39',
  topicId: 'js_oop',
  question: 'Create class with private static fields.',
  mathSolution: 'Static private fields shared across all instances.',
  codeSolution: 'class Bank {\n    static #totalDeposits = 0;\n    static #totalWithdrawals = 0;\n    #balance = 0;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.accountNumber = accountNumber;\n        this.#balance = initialBalance;\n        Bank.#totalDeposits += initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n            Bank.#totalDeposits += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    withdraw(amount) {\n        if (amount > 0 && amount <= this.#balance) {\n            this.#balance -= amount;\n            Bank.#totalWithdrawals += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n    \n    static getTotalDeposits() {\n        return Bank.#totalDeposits;\n    }\n    \n    static getTotalWithdrawals() {\n        return Bank.#totalWithdrawals;\n    }\n    \n    static getNetFlow() {\n        return Bank.#totalDeposits - Bank.#totalWithdrawals;\n    }\n}\n\nconst acc1 = new Bank("A001", 1000);\nconst acc2 = new Bank("A002", 500);\n\nacc1.deposit(500);\nacc2.deposit(300);\nacc1.withdraw(200);\n\nconsole.log(Bank.getTotalDeposits());   // 1000+500+500+300 = 2300\nconsole.log(Bank.getTotalWithdrawals()); // 200\nconsole.log(Bank.getNetFlow());          // 2100',
  hint: 'Static private fields maintain shared state across instances.'
},
{
  id: 'js_oop_40',
  topicId: 'js_oop',
  question: 'Create class with computed property names.',
  mathSolution: 'Use computed property names for dynamic methods.',
  codeSolution: 'class DynamicAPI {\n    constructor(prefix) {\n        this.prefix = prefix;\n    }\n    \n    [`${prefix}Get`]() {\n        return `${this.prefix} GET request`;\n    }\n    \n    [`${prefix}Post`](data) {\n        return `${this.prefix} POST: ${JSON.stringify(data)}`;\n    }\n    \n    [`${prefix}Delete`](id) {\n        return `${this.prefix} DELETE ${id}`;\n    }\n}\n\nclass EventManager {\n    constructor() {\n        this.events = {};\n    }\n    \n    addEvent(name, handler) {\n        this.events[name] = handler;\n        this[`on${name}`] = (data) => {\n            console.log(`Event: ${name}`);\n            return handler(data);\n        };\n    }\n}\n\nconst api = new DynamicAPI("user");\nconsole.log(api.userGet());      // user GET request\nconsole.log(api.userPost({ id: 1 }));  // user POST: {"id":1}\nconsole.log(api.userDelete(5));  // user DELETE 5\n\nconst manager = new EventManager();\nmanager.addEvent("click", (data) => `Clicked at ${data.x}, ${data.y}`);\nmanager.addEvent("hover", (data) => `Hover over ${data.element}`);\n\nconsole.log(manager.onclick({ x: 100, y: 200 }));\nconsole.log(manager.onhover({ element: "button" }));',
  hint: 'Computed property names enable dynamic method generation.'
},
{
  id: 'js_oop_41',
  topicId: 'js_oop',
  question: 'Create class with weak reference to avoid memory leaks.',
  mathSolution: 'Use WeakMap or WeakSet for metadata.',
  codeSolution: 'class CacheManager {\n    static #cache = new WeakMap();\n    static #count = 0;\n    \n    static set(obj, metadata) {\n        this.#cache.set(obj, { metadata, timestamp: Date.now() });\n        this.#count++;\n    }\n    \n    static get(obj) {\n        const entry = this.#cache.get(obj);\n        return entry ? entry.metadata : null;\n    }\n    \n    static getAge(obj) {\n        const entry = this.#cache.get(obj);\n        return entry ? Date.now() - entry.timestamp : null;\n    }\n    \n    static size() {\n        return this.#count;\n    }\n}\n\nlet user1 = { id: 1, name: "John" };\nlet user2 = { id: 2, name: "Jane" };\n\nCacheManager.set(user1, { role: "admin", lastLogin: Date.now() });\nCacheManager.set(user2, { role: "user", lastLogin: Date.now() });\n\nconsole.log(CacheManager.get(user1));  // { role: "admin", ... }\nconsole.log(CacheManager.size());      // 2\n\n// When user1 is garbage collected, entry automatically removed\nuser1 = null;\n// After GC, CacheManager.size() would decrease',
  hint: 'Weak references prevent memory leaks in caches and listeners.'
},
{
  id: 'js_oop_42',
  topicId: 'js_oop',
  question: 'Create class with Symbol.species for custom constructor in derived classes.',
  mathSolution: 'Species pattern controls returned instance type.',
  codeSolution: 'class MyArray extends Array {\n    static get [Symbol.species]() {\n        return Array;  // Return plain Array instead of MyArray\n    }\n    \n    // Custom method\n    first() {\n        return this[0];\n    }\n}\n\nclass MyArray2 extends Array {\n    static get [Symbol.species]() {\n        return this;  // Return derived class instance\n    }\n}\n\nconst arr = new MyArray(1, 2, 3);\nconsole.log(arr.first());  // 1\nconsole.log(arr instanceof MyArray);  // true\n\nconst mapped = arr.map(x => x * 2);\nconsole.log(mapped instanceof MyArray);  // false (Array)\nconsole.log(mapped instanceof Array);    // true\n\nconst arr2 = new MyArray2(1, 2, 3);\nconst mapped2 = arr2.map(x => x * 2);\nconsole.log(mapped2 instanceof MyArray2);  // true',
  hint: 'Symbol.species controls what constructor is used in derived methods.'
},
{
  id: 'js_oop_43',
  topicId: 'js_oop',
  question: 'Use new.target to detect constructor calls.',
  mathSolution: 'new.target indicates how constructor was called.',
  codeSolution: 'class Shape {\n    constructor() {\n        if (new.target === Shape) {\n            throw new Error("Cannot instantiate abstract class");\n        }\n        console.log(`Creating instance of ${new.target.name}`);\n    }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n}\n\n// const shape = new Shape();  // Error\nconst circle = new Circle(5);    // Creating instance of Circle\nconst rect = new Rectangle(10, 20);  // Creating instance of Rectangle\n\n// Pattern for singleton with new.target\nclass Singleton {\n    static #instance = null;\n    \n    constructor() {\n        if (new.target === Singleton && Singleton.#instance) {\n            return Singleton.#instance;\n        }\n        if (new.target !== Singleton) {\n            return new.target.#instance;\n        }\n        Singleton.#instance = this;\n    }\n}',
  hint: 'new.target determines the constructor that was directly called.'
},
{
  id: 'js_oop_44',
  topicId: 'js_oop',
  question: 'Create class with initializer blocks and private fields.',
  mathSolution: 'Class fields and initialization blocks.',
  codeSolution: 'class User {\n    // Public fields\n    name;\n    email;\n    \n    // Private fields\n    #password;\n    #loginAttempts = 0;\n    \n    // Initialization block (runs before constructor)\n    {\n        console.log(`Creating new user instance`);\n        this.createdAt = new Date();\n    }\n    \n    // Static initialization block\n    static {\n        console.log("User class initialized");\n        this.DEFAULT_ROLE = "user";\n        this.MAX_LOGIN_ATTEMPTS = 5;\n    }\n    \n    constructor(name, email, password) {\n        this.name = name;\n        this.email = email;\n        this.#password = password;\n        this.role = User.DEFAULT_ROLE;\n    }\n    \n    login(password) {\n        if (this.#loginAttempts >= User.MAX_LOGIN_ATTEMPTS) {\n            throw new Error("Account locked");\n        }\n        \n        if (this.#password === password) {\n            this.#loginAttempts = 0;\n            return true;\n        }\n        \n        this.#loginAttempts++;\n        return false;\n    }\n}\n\n// Static initializer runs once\nconsole.log(User.DEFAULT_ROLE);  // user\n\nconst user = new User("John", "john@example.com", "secret");\nconsole.log(user.createdAt);  // Date object\nconsole.log(user.name);       // John',
  hint: 'Initialization blocks run before constructors.'
},
{
  id: 'js_oop_45',
  topicId: 'js_oop',
  question: 'Create object using Object.create() for prototypal inheritance.',
  mathSolution: 'Object.create sets prototype of new object.',
  codeSolution: 'const animal = {\n    init(name) {\n        this.name = name;\n        return this;\n    },\n    speak() {\n        console.log(`${this.name} makes a sound`);\n    },\n    move(distance) {\n        console.log(`${this.name} moved ${distance}m`);\n    }\n};\n\nconst dog = Object.create(animal);\ndog.init("Rex");\ndog.speak = function() {\n    console.log(`${this.name} barks!`);\n};\ndog.bark = function() {\n    console.log(`${this.name} says Woof!`);\n};\n\ndog.speak();  // Rex barks!\ndog.move(10); // Rex moved 10m\ndog.bark();   // Rex says Woof!\n\n// Factory pattern with Object.create\nfunction createPerson(name, age) {\n    const proto = {\n        greet() {\n            return `Hello, I\'m ${this.name}`;\n        },\n        birthday() {\n            this.age++;\n            return this.age;\n        }\n    };\n    \n    return Object.create(proto, {\n        name: { value: name, writable: true, enumerable: true },\n        age: { value: age, writable: true, enumerable: true }\n    });\n}\n\nconst alice = createPerson("Alice", 30);\nconsole.log(alice.greet());  // Hello, I\'m Alice\nconsole.log(alice.birthday()); // 31',
  hint: 'Object.create provides powerful prototypal inheritance pattern.'
},
{
  id: 'js_oop_46',
  topicId: 'js_oop',
  question: 'Use Reflect API for meta-programming in classes.',
  mathSolution: 'Reflect provides methods for interceptable operations.',
  codeSolution: 'class ValidatedObject {\n    constructor(schema) {\n        this.schema = schema;\n        this.data = {};\n        \n        return new Proxy(this, {\n            set(target, prop, value) {\n                if (target.schema[prop] && typeof value !== target.schema[prop]) {\n                    throw new TypeError(`${prop} must be ${target.schema[prop]}`);\n                }\n                return Reflect.set(target.data, prop, value);\n            },\n            get(target, prop) {\n                if (prop in target) {\n                    return Reflect.get(target, prop);\n                }\n                return Reflect.get(target.data, prop);\n            },\n            has(target, prop) {\n                return Reflect.has(target.data, prop);\n            },\n            ownKeys(target) {\n                return Reflect.ownKeys(target.data);\n            }\n        });\n    }\n}\n\nconst user = new ValidatedObject({\n    name: "string",\n    age: "number",\n    email: "string"\n});\n\nuser.name = "John";\nuser.age = 30;\n// user.age = "thirty";  // TypeError\n\nconsole.log(user.name);  // John\nconsole.log("age" in user);  // true\nconsole.log(Object.keys(user));  // ["name", "age"]',
  hint: 'Reflect and Proxy enable powerful metaprogramming.'
},
{
  id: 'js_oop_47',
  topicId: 'js_oop',
  question: 'Create class with Symbol.hasInstance for custom instanceof.',
  mathSolution: 'Symbol.hasInstance customizes instanceof behavior.',
  codeSolution: 'class Range {\n    constructor(start, end) {\n        this.start = start;\n        this.end = end;\n    }\n    \n    static [Symbol.hasInstance](instance) {\n        return instance >= this.start && instance <= this.end;\n    }\n    \n    // Make instances iterable\n    [Symbol.iterator]() {\n        let current = this.start;\n        const end = this.end;\n        \n        return {\n            next() {\n                if (current <= end) {\n                    return { value: current++, done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n}\n\nclass EvenNumbers {\n    static [Symbol.hasInstance](instance) {\n        return typeof instance === "number" && instance % 2 === 0;\n    }\n}\n\nconsole.log(5 instanceof Range);  // false\nconsole.log(15 instanceof Range); // true\nconsole.log(10 instanceof EvenNumbers);  // true\nconsole.log(7 instanceof EvenNumbers);   // false\n\n// Using iterable\nconst range = new Range(1, 5);\nfor (const num of range) {\n    console.log(num);  // 1, 2, 3, 4, 5\n}',
  hint: 'Symbol.hasInstance customizes the instanceof operator.'
},
{
  id: 'js_oop_48',
  topicId: 'js_oop',
  question: 'Use Object.setPrototypeOf for dynamic prototype changes.',
  mathSolution: 'Change object\'s prototype dynamically (use with caution).',
  codeSolution: 'class Animal {\n    speak() {\n        return "Animal sound";\n    }\n}\n\nclass Dog {\n    speak() {\n        return "Woof!";\n    }\n    \n    bark() {\n        return "Bark bark!";\n    }\n}\n\nclass Cat {\n    speak() {\n        return "Meow!";\n    }\n    \n    purr() {\n        return "Purrr...";\n    }\n}\n\nconst creature = new Animal();\nconsole.log(creature.speak());  // Animal sound\n\n// Change prototype dynamically\nObject.setPrototypeOf(creature, Dog.prototype);\nconsole.log(creature.speak());  // Woof!\nconsole.log(creature.bark());   // Bark bark!\n\nObject.setPrototypeOf(creature, Cat.prototype);\nconsole.log(creature.speak());  // Meow!\nconsole.log(creature.purr());   // Purrr...\n\n// Performance note: setPrototypeOf is slow, use with care\n// Prefer Object.create or class inheritance when possible',
  hint: 'setPrototypeOf changes an object\'s prototype at runtime.'
},
{
  id: 'js_oop_49',
  topicId: 'js_oop',
  question: 'Create class with Symbol.toPrimitive for type conversion.',
  mathSolution: 'Customize conversion to primitive values.',
  codeSolution: 'class Temperature {\n    constructor(celsius) {\n        this.celsius = celsius;\n    }\n    \n    get fahrenheit() {\n        return this.celsius * 9/5 + 32;\n    }\n    \n    get kelvin() {\n        return this.celsius + 273.15;\n    }\n    \n    [Symbol.toPrimitive](hint) {\n        switch (hint) {\n            case "string":\n                return `${this.celsius}°C`;\n            case "number":\n                return this.celsius;\n            case "default":\n                return this.celsius;\n        }\n    }\n}\n\nclass MoneyAmount {\n    constructor(amount, currency = "USD") {\n        this.amount = amount;\n        this.currency = currency;\n    }\n    \n    [Symbol.toPrimitive](hint) {\n        if (hint === "string") {\n            return `${this.currency} ${this.amount}`;\n        }\n        if (hint === "number") {\n            return this.amount;\n        }\n        return this.amount;\n    }\n    \n    add(other) {\n        return new MoneyAmount(this.amount + other.amount, this.currency);\n    }\n}\n\nconst temp = new Temperature(25);\nconsole.log(String(temp));     // 25°C\nconsole.log(temp + 10);        // 35\nconsole.log(temp * 2);         // 50\n\nconst money = new MoneyAmount(100);\nconsole.log(String(money));    // USD 100\nconsole.log(money + 50);       // 150\n\nconst money2 = new MoneyAmount(200);\nconsole.log(money.add(money2).amount);  // 300',
  hint: 'Symbol.toPrimitive controls conversion to primitives.'
},
{
  id: 'js_oop_50',
  topicId: 'js_oop',
  question: 'Build complete ORM-like model system with relationships.',
  mathSolution: 'Full-featured model system with relationships and validation.',
  codeSolution: 'class Model {\n    static #instances = new Map();\n    \n    constructor(data = {}) {\n        this._data = {};\n        this._original = {};\n        this._errors = {};\n        this.load(data);\n        this.constructor.#instances.set(this.id, this);\n    }\n    \n    static get table() {\n        return this.name.toLowerCase() + "s";\n    }\n    \n    static get fields() {\n        return {};\n    }\n    \n    static get belongsTo() {\n        return {};\n    }\n    \n    static get hasMany() {\n        return {};\n    }\n    \n    load(data) {\n        for (const [key, config] of Object.entries(this.constructor.fields)) {\n            if (data[key] !== undefined) {\n                this._data[key] = data[key];\n                this._original[key] = data[key];\n            } else if (config.default !== undefined) {\n                this._data[key] = config.default;\n            }\n        }\n        \n        if (!this.id) {\n            this._data.id = Date.now();\n        }\n    }\n    \n    validate() {\n        this._errors = {};\n        let isValid = true;\n        \n        for (const [key, config] of Object.entries(this.constructor.fields)) {\n            const value = this._data[key];\n            \n            if (config.required && (value === undefined || value === null || value === "")) {\n                this._errors[key] = `${key} is required`;\n                isValid = false;\n            }\n            \n            if (config.validate && !config.validate(value)) {\n                this._errors[key] = config.message || `Invalid ${key}`;\n                isValid = false;\n            }\n        }\n        \n        return isValid;\n    }\n    \n    async save() {\n        if (!this.validate()) {\n            throw new Error(`Validation failed: ${JSON.stringify(this._errors)}`);\n        }\n        \n        console.log(`Saving ${this.constructor.table}:`, this._data);\n        this._original = { ...this._data };\n        return true;\n    }\n    \n    async delete() {\n        console.log(`Deleting ${this.constructor.table} with id ${this.id}`);\n        this.constructor.#instances.delete(this.id);\n        return true;\n    }\n    \n    static find(id) {\n        return this.#instances.get(id);\n    }\n    \n    static findAll() {\n        return Array.from(this.#instances.values()).filter(i => i instanceof this);\n    }\n    \n    getRelation(name) {\n        const relation = this.constructor.hasMany[name];\n        if (relation) {\n            const RelatedClass = relation.model;\n            return RelatedClass.findAll().filter(related => related[relation.foreignKey] === this.id);\n        }\n        \n        const belongsToRel = this.constructor.belongsTo[name];\n        if (belongsToRel) {\n            const RelatedClass = belongsToRel.model;\n            return RelatedClass.find(this._data[belongsToRel.foreignKey]);\n        }\n        \n        return null;\n    }\n    \n    get(key) {\n        return this._data[key];\n    }\n    \n    set(key, value) {\n        this._data[key] = value;\n    }\n    \n    toJSON() {\n        return { ...this._data };\n    }\n}\n\n// Define models\nclass User extends Model {\n    static get fields() {\n        return {\n            id: { type: "number" },\n            name: { required: true, validate: (v) => v.length >= 2, message: "Name too short" },\n            email: { required: true, validate: (v) => v.includes("@"), message: "Invalid email" },\n            age: { default: 0, validate: (v) => v >= 0 && v <= 150 }\n        };\n    }\n    \n    static get hasMany() {\n        return {\n            posts: { model: Post, foreignKey: "userId" }\n        };\n    }\n}\n\nclass Post extends Model {\n    static get fields() {\n        return {\n            id: { type: "number" },\n            title: { required: true },\n            content: { required: true },\n            userId: { required: true }\n        };\n    }\n    \n    static get belongsTo() {\n        return {\n            author: { model: User, foreignKey: "userId" }\n        };\n    }\n}\n\n// Usage\nconst john = new User({ name: "John Doe", email: "john@example.com", age: 30 });\nconst jane = new User({ name: "Jane", email: "jane@example.com", age: 25 });\n\nconst post1 = new Post({ title: "First Post", content: "Hello World", userId: john.id });\nconst post2 = new Post({ title: "Second Post", content: "Another one", userId: john.id });\n\nawait john.save();\nawait jane.save();\nawait post1.save();\nawait post2.save();\n\n// Relationships\nconst johnsPosts = john.getRelation("posts");\nconsole.log(`John has ${johnsPosts.length} posts`);  // 2\n\nconst postAuthor = post1.getRelation("author");\nconsole.log(`Post author: ${postAuthor.get("name")}`);  // John Doe\n\n// Find all users\nconsole.log(User.findAll().length);  // 2',
  hint: 'Complete ORM-like system demonstrates advanced OOP concepts.'
}
);