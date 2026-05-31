QuizData.questions.push(
  // BASIC GENERICS (4)
  {
    id: "generics_1",
    topicId: "generics",
    question: "Create a simple generic class with type parameter T.",
    mathSolution: "Generic class uses type parameter in angle brackets",
    codeSolution: 'public class Main {\n    static class Box<T> {\n        private T content;\n        public void set(T content) { this.content = content; }\n        public T get() { return content; }\n    }\n    public static void main(String[] args) {\n        Box<String> stringBox = new Box<>();\n        stringBox.set("Hello Generics");\n        System.out.println(stringBox.get());\n        Box<Integer> intBox = new Box<>();\n        intBox.set(42);\n        System.out.println(intBox.get());\n    }\n}',
    hint: "Type parameter T is placeholder for actual type",
  },
  {
    id: "generics_2",
    topicId: "generics",
    question: "Generic class with multiple type parameters.",
    mathSolution: "Multiple type parameters separated by commas",
    codeSolution: 'public class Main {\n    static class Pair<K, V> {\n        private K key;\n        private V value;\n        public Pair(K key, V value) { this.key = key; this.value = value; }\n        public K getKey() { return key; }\n        public V getValue() { return value; }\n    }\n    public static void main(String[] args) {\n        Pair<String, Integer> person = new Pair<>("Alice", 25);\n        System.out.println(person.getKey() + " is " + person.getValue() + " years old");\n        Pair<Integer, String> idToName = new Pair<>(101, "Bob");\n        System.out.println("ID: " + idToName.getKey() + " -> " + idToName.getValue());\n    }\n}',
    hint: "Can have multiple type parameters like <K, V, T>",
  },
  {
    id: "generics_3",
    topicId: "generics",
    question: "Generic method in non-generic class.",
    mathSolution: "Generic methods have type parameter before return type",
    codeSolution: 'public class Main {\n    static class Utilities {\n        public static <T> void printArray(T[] array) {\n            for(T element : array) System.out.print(element + " ");\n            System.out.println();\n        }\n        public static <T> T getLast(T[] array) {\n            if(array.length == 0) return null;\n            return array[array.length - 1];\n        }\n    }\n    public static void main(String[] args) {\n        String[] names = {"Alice", "Bob", "Charlie"};\n        Integer[] numbers = {1, 2, 3, 4, 5};\n        Utilities.printArray(names);\n        Utilities.printArray(numbers);\n        System.out.println("Last name: " + Utilities.getLast(names));\n        System.out.println("Last number: " + Utilities.getLast(numbers));\n    }\n}',
    hint: "Generic methods work with any type",
  },
  {
    id: "generics_4",
    topicId: "generics",
    question: "Generic constructor in generic and non-generic classes.",
    mathSolution: "Constructors can also be generic",
    codeSolution: 'public class Main {\n    static class GenericConstructor {\n        private double value;\n        public <T extends Number> GenericConstructor(T num) { value = num.doubleValue(); }\n        void display() { System.out.println("Value: " + value); }\n    }\n    public static void main(String[] args) {\n        GenericConstructor gc1 = new GenericConstructor(10);\n        gc1.display();\n        GenericConstructor gc2 = new GenericConstructor(3.14);\n        gc2.display();\n    }\n}',
    hint: "Constructors can have their own type parameters",
  },

  // BOUNDED TYPE PARAMETERS (4)
  {
    id: "generics_5",
    topicId: "generics",
    question: "Bounded type parameter with extends.",
    mathSolution: "<T extends Number> restricts T to Number subclasses",
    codeSolution: 'public class Main {\n    static class NumericBox<T extends Number> {\n        private T number;\n        public NumericBox(T number) { this.number = number; }\n        public double doubleValue() { return number.doubleValue(); }\n        public int intValue() { return number.intValue(); }\n    }\n    public static void main(String[] args) {\n        NumericBox<Integer> intBox = new NumericBox<>(10);\n        NumericBox<Double> doubleBox = new NumericBox<>(5.5);\n        System.out.println("Int as double: " + intBox.doubleValue());\n        System.out.println("Double as int: " + doubleBox.intValue());\n    }\n}',
    hint: "extends bounds type to subclasses of specified class",
  },
  {
    id: "generics_6",
    topicId: "generics",
    question: "Bounded type parameter with interface.",
    mathSolution: "<T extends Comparable<T>> ensures T implements Comparable",
    codeSolution: 'public class Main {\n    static class MaxFinder {\n        public static <T extends Comparable<T>> T findMax(T a, T b, T c) {\n            T max = a;\n            if(b.compareTo(max) > 0) max = b;\n            if(c.compareTo(max) > 0) max = c;\n            return max;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Max of 10,20,15: " + MaxFinder.findMax(10,20,15));\n        System.out.println("Max of 5.5,2.2,7.7: " + MaxFinder.findMax(5.5,2.2,7.7));\n        System.out.println("Max of \'apple\',\'banana\',\'cherry\': " + MaxFinder.findMax("apple","banana","cherry"));\n    }\n}',
    hint: "extends can be class or interface, or both with &",
  },
  {
    id: "generics_7",
    topicId: "generics",
    question: "Multiple bounds with &.",
    mathSolution: "<T extends ClassA & InterfaceB & InterfaceC>",
    codeSolution: 'public class Main {\n    interface Drawable { void draw(); }\n    interface Colorable { String getColor(); }\n    static class Shape { protected String name; Shape(String n) { name = n; } }\n    static class Circle extends Shape implements Drawable, Colorable {\n        private String color;\n        Circle(String name, String color) { super(name); this.color = color; }\n        public void draw() { System.out.println("Drawing " + color + " circle"); }\n        public String getColor() { return color; }\n    }\n    static class Processor {\n        public static <T extends Shape & Drawable & Colorable> void process(T item) {\n            System.out.println("Processing: " + item.name);\n            item.draw();\n            System.out.println("Color: " + item.getColor());\n        }\n    }\n    public static void main(String[] args) {\n        Circle circle = new Circle("MyCircle", "Red");\n        Processor.process(circle);\n    }\n}',
    hint: "First bound must be class (if any), then interfaces",
  },
  {
    id: "generics_8",
    topicId: "generics",
    question: "Generic method with bounded wildcard.",
    mathSolution: "Wildcard ? with extends for upper bound",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class NumberProcessor {\n        public static double sumOfList(List<? extends Number> list) {\n            double sum = 0;\n            for(Number n : list) sum += n.doubleValue();\n            return sum;\n        }\n        public static void printNumbers(List<? extends Number> list) {\n            for(Number n : list) System.out.print(n + " ");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1,2,3,4,5);\n        List<Double> doubles = Arrays.asList(1.1,2.2,3.3);\n        System.out.println("Sum of ints: " + NumberProcessor.sumOfList(ints));\n        System.out.println("Sum of doubles: " + NumberProcessor.sumOfList(doubles));\n        NumberProcessor.printNumbers(ints);\n        NumberProcessor.printNumbers(doubles);\n    }\n}',
    hint: "Upper bounded wildcard for reading",
  },

  // WILDCARDS (4)
  {
    id: "generics_9",
    topicId: "generics",
    question: "Unbounded wildcard - <?>.",
    mathSolution: "Unbounded wildcard for any type",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class WildcardDemo {\n        public static void printList(List<?> list) {\n            for(Object obj : list) System.out.print(obj + " ");\n            System.out.println();\n        }\n        public static int getListSize(List<?> list) { return list.size(); }\n    }\n    public static void main(String[] args) {\n        List<Integer> intList = Arrays.asList(1,2,3);\n        List<String> strList = Arrays.asList("A","B","C");\n        List<Double> dblList = Arrays.asList(1.1,2.2,3.3);\n        WildcardDemo.printList(intList);\n        WildcardDemo.printList(strList);\n        WildcardDemo.printList(dblList);\n        System.out.println("Size: " + WildcardDemo.getListSize(strList));\n    }\n}',
    hint: "<?> means any type, useful for read-only operations",
  },
  {
    id: "generics_10",
    topicId: "generics",
    question: "Lower bounded wildcard - <? super T>.",
    mathSolution: "Lower bound allows writing to collection",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class LowerBoundDemo {\n        public static void addNumbers(List<? super Integer> list) {\n            for(int i=1; i<=5; i++) list.add(i);\n        }\n    }\n    public static void main(String[] args) {\n        List<Number> numList = new ArrayList<>();\n        List<Object> objList = new ArrayList<>();\n        List<Integer> intList = new ArrayList<>();\n        LowerBoundDemo.addNumbers(numList);\n        LowerBoundDemo.addNumbers(objList);\n        LowerBoundDemo.addNumbers(intList);\n        System.out.println("Number list: " + numList);\n        System.out.println("Object list: " + objList);\n        System.out.println("Integer list: " + intList);\n    }\n}',
    hint: "Lower bounded wildcard for writing (add operation)",
  },
  {
    id: "generics_11",
    topicId: "generics",
    question: "Wildcard guidelines - PECS (Producer Extends, Consumer Super).",
    mathSolution: "Use extends for read, super for write",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class PecsDemo {\n        public static double sum(Collection<? extends Number> producer) {\n            double total = 0;\n            for(Number n : producer) total += n.doubleValue();\n            return total;\n        }\n        public static void addIntegers(Collection<? super Integer> consumer) {\n            for(int i=1; i<=5; i++) consumer.add(i);\n        }\n        public static <T> void swap(List<T> list, int i, int j) {\n            T temp = list.get(i);\n            list.set(i, list.get(j));\n            list.set(j, temp);\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1,2,3,4,5);\n        List<Double> doubles = Arrays.asList(1.1,2.2,3.3);\n        System.out.println("Sum ints: " + PecsDemo.sum(ints));\n        System.out.println("Sum doubles: " + PecsDemo.sum(doubles));\n        List<Number> numbers = new ArrayList<>();\n        List<Object> objects = new ArrayList<>();\n        PecsDemo.addIntegers(numbers);\n        PecsDemo.addIntegers(objects);\n        System.out.println("Numbers: " + numbers);\n        System.out.println("Objects: " + objects);\n        List<String> names = Arrays.asList("A","B","C","D");\n        PecsDemo.swap(names,1,2);\n        System.out.println("Swapped: " + names);\n    }\n}',
    hint: "PECS: Producer Extends, Consumer Super",
  },
  {
    id: "generics_12",
    topicId: "generics",
    question: "Wildcard capture and helper methods.",
    mathSolution: "Helper methods to capture wildcard for operations",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class WildcardCapture {\n        public static void swap(List<?> list, int i, int j) { swapHelper(list, i, j); }\n        private static <T> void swapHelper(List<T> list, int i, int j) {\n            T temp = list.get(i);\n            list.set(i, list.get(j));\n            list.set(j, temp);\n        }\n        public static void reverse(List<?> list) { reverseHelper(list); }\n        private static <T> void reverseHelper(List<T> list) {\n            int size = list.size();\n            for(int i=0; i<size/2; i++) {\n                T temp = list.get(i);\n                list.set(i, list.get(size-1-i));\n                list.set(size-1-i, temp);\n            }\n        }\n    }\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>(Arrays.asList("A","B","C","D"));\n        System.out.println("Original: " + names);\n        WildcardCapture.swap(names,1,2);\n        System.out.println("After swap: " + names);\n        WildcardCapture.reverse(names);\n        System.out.println("After reverse: " + names);\n        List<Integer> nums = new ArrayList<>(Arrays.asList(1,2,3,4,5));\n        WildcardCapture.reverse(nums);\n        System.out.println("Reversed nums: " + nums);\n    }\n}',
    hint: "Helper methods capture wildcard as named type parameter",
  },

  // GENERIC COLLECTIONS (3)
  {
  id: "generics_13",
  topicId: "generics",
  question: "Generic List with type safety.",
  mathSolution: "Type-safe collections using generics",
  codeSolution: 'import java.util.*;\npublic class Main {\n    static class CollectionUtils {\n        @SafeVarargs\n        public static <T> void addAll(List<T> list, T... items) {\n            for(T item : items) list.add(item);\n        }\n        public static <T> List<T> reverse(List<T> list) {\n            List<T> result = new ArrayList<>();\n            for(int i=list.size()-1; i>=0; i--) result.add(list.get(i));\n            return result;\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = new ArrayList<>();\n        CollectionUtils.addAll(numbers, 1,2,3,4,5);\n        System.out.println("Numbers: " + numbers);\n        List<Integer> reversed = CollectionUtils.reverse(numbers);\n        System.out.println("Reversed: " + reversed);\n        List<String> colors = new ArrayList<>();\n        CollectionUtils.addAll(colors, "Red","Green","Blue");\n        System.out.println("Colors: " + colors);\n    }\n}',
  hint: "Generics provide compile-time type safety for collections",
},
  {
    id: "generics_14",
    topicId: "generics",
    question: "Generic Map with key-value pairs.",
    mathSolution: "HashMap with generic key and value types",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class MapUtils {\n        public static <K, V> void printMap(Map<K, V> map) {\n            for(Map.Entry<K, V> entry : map.entrySet())\n                System.out.println(entry.getKey() + " -> " + entry.getValue());\n        }\n    }\n    public static void main(String[] args) {\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("Alice",25); ages.put("Bob",30); ages.put("Charlie",28);\n        MapUtils.printMap(ages);\n        Map<Integer, String> idToName = new HashMap<>();\n        idToName.put(101,"John"); idToName.put(102,"Jane");\n        MapUtils.printMap(idToName);\n        Map<String, List<Integer>> studentGrades = new HashMap<>();\n        studentGrades.put("Alice", Arrays.asList(85,90,95));\n        studentGrades.put("Bob", Arrays.asList(75,80,85));\n        for(Map.Entry<String, List<Integer>> entry : studentGrades.entrySet())\n            System.out.println(entry.getKey() + " grades: " + entry.getValue());\n    }\n}',
    hint: "Maps can have generic key and value types",
  },
  {
    id: "generics_15",
    topicId: "generics",
    question: "Generic Comparator for sorting.",
    mathSolution: "Generic Comparator with type parameter",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public String toString() { return name + "(" + age + ")"; }\n    }\n    static class AgeComparator implements Comparator<Person> {\n        public int compare(Person p1, Person p2) { return Integer.compare(p1.age, p2.age); }\n    }\n    static class NameComparator implements Comparator<Person> {\n        public int compare(Person p1, Person p2) { return p1.name.compareTo(p2.name); }\n    }\n    public static void main(String[] args) {\n        List<Person> people = Arrays.asList(\n            new Person("Charlie",30), new Person("Alice",25), new Person("Bob",28));\n        System.out.println("Original: " + people);\n        Collections.sort(people, new AgeComparator());\n        System.out.println("By age: " + people);\n        Collections.sort(people, new NameComparator());\n        System.out.println("By name: " + people);\n    }\n}',
    hint: "Comparators can be generic for type safety",
  },

  // GENERIC INHERITANCE (3)
  {
    id: "generics_16",
    topicId: "generics",
    question: "Generic class inheritance.",
    mathSolution: "Subclasses can specify or extend type parameters",
    codeSolution: 'public class Main {\n    static class GenericParent<T> {\n        private T data;\n        public GenericParent(T data) { this.data = data; }\n        public T getData() { return data; }\n    }\n    static class GenericChild<T> extends GenericParent<T> {\n        public GenericChild(T data) { super(data); }\n        public void print() { System.out.println("Data: " + getData()); }\n    }\n    static class StringChild extends GenericParent<String> {\n        public StringChild(String data) { super(data); }\n        public void printUpper() { System.out.println(getData().toUpperCase()); }\n    }\n    public static void main(String[] args) {\n        GenericChild<Integer> child = new GenericChild<>(100);\n        child.print();\n        StringChild strChild = new StringChild("hello");\n        strChild.printUpper();\n    }\n}',
    hint: "Subclasses can inherit, specify, or extend generic parameters",
  },
  {
    id: "generics_17",
    topicId: "generics",
    question: "Generic interfaces and implementation.",
    mathSolution: "Interfaces can be generic and implemented in various ways",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Repository<T> {\n        void save(T item);\n        T findById(int id);\n        List<T> findAll();\n        void delete(int id);\n    }\n    static class InMemoryRepository<T> implements Repository<T> {\n        private Map<Integer, T> data = new HashMap<>();\n        private int nextId = 1;\n        public void save(T item) { data.put(nextId++, item); }\n        public T findById(int id) { return data.get(id); }\n        public List<T> findAll() { return new ArrayList<>(data.values()); }\n        public void delete(int id) { data.remove(id); }\n    }\n    public static void main(String[] args) {\n        Repository<Integer> intRepo = new InMemoryRepository<>();\n        intRepo.save(100); intRepo.save(200);\n        System.out.println("Int repo: " + intRepo.findAll());\n        Repository<String> strRepo = new InMemoryRepository<>();\n        strRepo.save("Hello"); strRepo.save("World");\n        System.out.println("String repo: " + strRepo.findAll());\n    }\n}',
    hint: "Interfaces can be generic, implementations have options",
  },
  {
  id: "generics_18",
  topicId: "generics",
  question: "Raw types and type erasure.",
  mathSolution: "Type erasure removes generic type information at runtime",
  codeSolution: 'import java.util.*;\npublic class Main {\n    @SuppressWarnings("unchecked")\n    public static void main(String[] args) {\n        List<String> strings = new ArrayList<>();\n        List<Integer> integers = new ArrayList<>();\n        System.out.println(strings.getClass() == integers.getClass()); // true\n        List rawList = new ArrayList();\n        rawList.add("Hello");\n        rawList.add(123);\n        System.out.println("Raw list: " + rawList);\n        System.out.println("Type erasure removes generic type info at runtime");\n    }\n}',
  hint: "Type erasure removes generics at runtime for backward compatibility",
},

  // ADVANCED GENERICS (4)
  {
    id: "generics_19",
    topicId: "generics",
    question: "Generic type inference with diamond operator.",
    mathSolution: "Diamond operator <> infers type from context",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class InferenceDemo {\n        public static <T> List<T> emptyList() { return new ArrayList<>(); }\n        public static <T> T identity(T value) { return value; }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = InferenceDemo.emptyList();\n        ints.add(10); ints.add(20);\n        String s = InferenceDemo.identity("Hello");\n        Integer i = InferenceDemo.identity(100);\n        System.out.println("List: " + ints);\n        System.out.println("String: " + s);\n        System.out.println("Integer: " + i);\n    }\n}',
    hint: "Diamond operator and type inference reduce boilerplate",
  },
  {
    id: "generics_20",
    topicId: "generics",
    question: "Recursive type bound (self-referential generics).",
    mathSolution: "<T extends Comparable<T>> is recursive type bound",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class MaxFinder {\n        public static <T extends Comparable<T>> T max(Collection<T> collection) {\n            Iterator<T> it = collection.iterator();\n            if(!it.hasNext()) return null;\n            T max = it.next();\n            while(it.hasNext()) {\n                T current = it.next();\n                if(current.compareTo(max) > 0) max = current;\n            }\n            return max;\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(10,25,5,30,15);\n        System.out.println("Max int: " + MaxFinder.max(nums));\n        List<String> strs = Arrays.asList("apple","banana","cherry");\n        System.out.println("Max string: " + MaxFinder.max(strs));\n    }\n}',
    hint: "Recursive bounds ensure type implements Comparable of itself",
  },
  {
    id: "generics_21",
    topicId: "generics",
    question: "Generic array creation workaround.",
    mathSolution: "Cannot create generic arrays directly, use workarounds",
    codeSolution: 'import java.lang.reflect.Array;\nimport java.util.*;\npublic class Main {\n    @SuppressWarnings("unchecked")\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        return (T[]) Array.newInstance(clazz, size);\n    }\n    public static void main(String[] args) {\n        String[] strArray = createArray(String.class, 5);\n        strArray[0] = "Hello";\n        strArray[1] = "World";\n        System.out.println(Arrays.toString(strArray));\n        Integer[] intArray = createArray(Integer.class, 3);\n        intArray[0] = 10;\n        intArray[1] = 20;\n        System.out.println(Arrays.toString(intArray));\n    }\n}',
    hint: "Java doesn't support generic array creation due to type erasure",
  },
  {
    id: "generics_22",
    topicId: "generics",
    question: "Type tokens for runtime generic type information.",
    mathSolution: "Use Class<T> as runtime type token",
    codeSolution: 'import java.lang.reflect.*;\nimport java.util.*;\npublic class Main {\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        @SuppressWarnings("unchecked")\n        T[] array = (T[]) Array.newInstance(clazz, size);\n        return array;\n    }\n    abstract static class TypeReference<T> {\n        private final Type type;\n        protected TypeReference() {\n            Type superClass = getClass().getGenericSuperclass();\n            if(superClass instanceof ParameterizedType)\n                type = ((ParameterizedType) superClass).getActualTypeArguments()[0];\n            else throw new RuntimeException("Invalid");\n        }\n        public Type getType() { return type; }\n    }\n    public static void main(String[] args) {\n        String[] strArray = createArray(String.class, 3);\n        strArray[0] = "Java";\n        System.out.println(Arrays.toString(strArray));\n        TypeReference<List<String>> ref = new TypeReference<List<String>>() {};\n        System.out.println("Type: " + ref.getType());\n    }\n}',
    hint: "Class<T> and TypeReference preserve type info at runtime",
  },

  // GENERICS EXCEPTIONS AND LIMITATIONS (3)
  {
    id: "generics_23",
    topicId: "generics",
    question: "Cannot create instances of type parameters.",
    mathSolution: "Type parameters cannot be instantiated directly",
    codeSolution: 'import java.lang.reflect.Array;\npublic class Main {\n    static class GenericClass<T> {\n        private Class<T> type;\n        public GenericClass(Class<T> type) { this.type = type; }\n        public T createInstance() throws Exception { return type.getDeclaredConstructor().newInstance(); }\n        public boolean isInstance(Object obj) { return type.isInstance(obj); }\n    }\n    public static void main(String[] args) throws Exception {\n        GenericClass<String> gc = new GenericClass<>(String.class);\n        String str = gc.createInstance();\n        System.out.println("Created: " + str);\n        System.out.println("Is instance of String? " + gc.isInstance("Hello"));\n        System.out.println("Is instance of Integer? " + gc.isInstance(123));\n    }\n}',
    hint: "Type erasure prevents instantiation of type parameters",
  },
  {
    id: "generics_24",
    topicId: "generics",
    question: "Cannot overload methods with same erasure.",
    mathSolution: "Method overloading conflicts after type erasure",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class ErasureConflict {\n        public void processStrings(List<String> list) { System.out.println("Processing strings"); }\n        public void processIntegers(List<Integer> list) { System.out.println("Processing integers"); }\n        public void process(List<?> list) { System.out.println("Processing any list"); }\n    }\n    public static void main(String[] args) {\n        ErasureConflict ec = new ErasureConflict();\n        ec.processStrings(Arrays.asList("A","B"));\n        ec.processIntegers(Arrays.asList(1,2));\n        ec.process(Arrays.asList(1,2,3));\n        System.out.println("After type erasure, List<String> and List<Integer> become List, so overloading fails. Use different names.");\n    }\n}',
    hint: "After type erasure, List<String> and List<Integer> both become List",
  },
  {
    id: "generics_25",
    topicId: "generics",
    question: "Cannot catch or throw generic exceptions.",
    mathSolution: "Exception classes cannot be generic",
    codeSolution: 'public class Main {\n    static class ExceptionDemo {\n        public <T extends Exception> void methodThatThrows(T exception) throws T {\n            throw exception;\n        }\n        public <T extends Throwable> void throwAsUnchecked(Throwable t) throws T {\n            @SuppressWarnings("unchecked")\n            T exception = (T) t;\n            throw exception;\n        }\n    }\n    public static void main(String[] args) {\n        ExceptionDemo demo = new ExceptionDemo();\n        try {\n            demo.methodThatThrows(new IllegalArgumentException("Error"));\n        } catch(IllegalArgumentException e) {\n            System.out.println("Caught: " + e.getMessage());\n        }\n        System.out.println("Generic exception classes not allowed; cannot catch T.");\n    }\n}',
    hint: "Java doesn't support generic exception classes or catching",
  },
  {
    "id": "generics_26",
    "topicId": "generics",
    "question": "Create a generic method that accepts a List and returns a Set of the same element type, removing duplicates.",
    "mathSolution": "Use HashSet to collect unique elements from the list.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> Set<T> toSet(List<T> list) {\n        return new HashSet<>(list);\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5);\n        Set<Integer> unique = toSet(numbers);\n        System.out.println(\"Unique numbers: \" + unique);\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\");\n        Set<String> uniqueWords = toSet(words);\n        System.out.println(\"Unique words: \" + uniqueWords);\n    }\n}",
    "hint": "Use HashSet constructor that accepts Collection."
  },
  {
    "id": "generics_27",
    "topicId": "generics",
    "question": "Write a generic method that returns the last element of any non-empty array, or null if empty.",
    "mathSolution": "Check array length and return last element.",
    "codeSolution": "public class Main {\n    public static <T> T lastElement(T[] array) {\n        return array == null || array.length == 0 ? null : array[array.length - 1];\n    }\n    public static void main(String[] args) {\n        String[] strs = {\"Java\", \"Python\", \"C++\"};\n        System.out.println(\"Last: \" + lastElement(strs));\n        Integer[] ints = {10, 20, 30};\n        System.out.println(\"Last: \" + lastElement(ints));\n        Double[] empty = new Double[0];\n        System.out.println(\"Last of empty: \" + lastElement(empty));\n    }\n}",
    "hint": "Return type T, handle null/empty case."
  },
  {
    "id": "generics_28",
    "topicId": "generics",
    "question": "Implement a generic interface Processor<T> with a method process(T input). Provide two implementations: StringProcessor and IntegerProcessor.",
    "mathSolution": "Interface defines contract; concrete classes implement with specific types.",
    "codeSolution": "public class Main {\n    interface Processor<T> {\n        void process(T input);\n    }\n    static class StringProcessor implements Processor<String> {\n        public void process(String input) {\n            System.out.println(\"Processing string: \" + input.toUpperCase());\n        }\n    }\n    static class IntegerProcessor implements Processor<Integer> {\n        public void process(Integer input) {\n            System.out.println(\"Processing integer: \" + (input * input));\n        }\n    }\n    public static void main(String[] args) {\n        Processor<String> sp = new StringProcessor();\n        sp.process(\"hello\");\n        Processor<Integer> ip = new IntegerProcessor();\n        ip.process(7);\n    }\n}",
    "hint": "Implement interface with concrete type parameters."
  },
  {
  "id": "generics_29",
  "topicId": "generics",
  "question": "Create a generic class Pair<T, U> that holds two values of possibly different types. Add methods to swap the values (only if types are the same).",
  "mathSolution": "Swap method should only be available when types are identical.",
  "codeSolution": "public class Main {\n    static class Pair<T, U> {\n        T first;\n        U second;\n        Pair(T first, U second) { this.first = first; this.second = second; }\n        @SuppressWarnings(\"unchecked\")\n        public void swap() {\n            if (first.getClass().equals(second.getClass())) {\n                T temp = first;\n                first = (T) second;\n                second = (U) temp;\n                System.out.println(\"Swapped inside Pair\");\n            } else {\n                System.out.println(\"Cannot swap different types\");\n            }\n        }\n        public String toString() { return \"(\" + first + \", \" + second + \")\"; }\n    }\n    public static void main(String[] args) {\n        Pair<String, String> p1 = new Pair<>(\"A\", \"B\");\n        System.out.println(\"Before: \" + p1);\n        p1.swap();\n        System.out.println(\"After: \" + p1);\n        Pair<Integer, String> p2 = new Pair<>(10, \"ten\");\n        p2.swap();\n        System.out.println(p2);\n    }\n}",
  "hint": "Use getClass() to compare runtime types for conditional swap and @SuppressWarnings for unchecked cast."
},
  {
    "id": "generics_30",
    "topicId": "generics",
    "question": "Write a generic method that takes a List<? extends Number> and returns the average value as double.",
    "mathSolution": "Iterate and sum numbers using doubleValue().",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static double average(List<? extends Number> numbers) {\n        if (numbers.isEmpty()) return 0.0;\n        double sum = 0.0;\n        for (Number n : numbers) sum += n.doubleValue();\n        return sum / numbers.size();\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(10, 20, 30);\n        System.out.println(\"Average: \" + average(ints));\n        List<Double> doubles = Arrays.asList(2.5, 3.5, 4.0);\n        System.out.println(\"Average: \" + average(doubles));\n    }\n}",
    "hint": "Use <? extends Number> to accept any Number subclass."
  },
  {
    "id": "generics_31",
    "topicId": "generics",
    "question": "Create a generic cache class that stores key-value pairs with expiration time (simulated by timestamp). Add a method to clean expired entries.",
    "mathSolution": "Store value with timestamp; check on access and during cleanup.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class TimedValue<V> {\n        V value;\n        long timestamp;\n        TimedValue(V value) { this.value = value; this.timestamp = System.currentTimeMillis(); }\n    }\n    static class Cache<K, V> {\n        private Map<K, TimedValue<V>> map = new HashMap<>();\n        private long ttlMillis;\n        Cache(long ttlMillis) { this.ttlMillis = ttlMillis; }\n        public void put(K key, V value) {\n            map.put(key, new TimedValue<>(value));\n        }\n        public V get(K key) {\n            TimedValue<V> tv = map.get(key);\n            if (tv == null) return null;\n            if (System.currentTimeMillis() - tv.timestamp > ttlMillis) {\n                map.remove(key);\n                return null;\n            }\n            return tv.value;\n        }\n        public void clean() {\n            map.entrySet().removeIf(entry -> System.currentTimeMillis() - entry.getValue().timestamp > ttlMillis);\n        }\n        public int size() { return map.size(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Cache<String, Integer> cache = new Cache<>(2000);\n        cache.put(\"a\", 1);\n        Thread.sleep(1000);\n        System.out.println(\"Get a: \" + cache.get(\"a\"));\n        Thread.sleep(1500);\n        System.out.println(\"Get a after expiration: \" + cache.get(\"a\"));\n        cache.put(\"b\", 2);\n        cache.clean();\n        System.out.println(\"Cache size after clean: \" + cache.size());\n    }\n}",
    "hint": "Use timestamp and ttl to manage expiration."
  },
  {
    "id": "generics_32",
    "topicId": "generics",
    "question": "Implement a generic method that copies elements from a source list to a destination list, but only if the destination is a supertype of the source element type.",
    "mathSolution": "Use wildcard with super to allow writing.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> void copy(List<? extends T> src, List<? super T> dest) {\n        dest.addAll(src);\n    }\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3);\n        List<Number> dest = new ArrayList<>();\n        copy(src, dest);\n        System.out.println(\"Destination: \" + dest);\n        List<Object> objDest = new ArrayList<>();\n        copy(src, objDest);\n        System.out.println(\"Object destination: \" + objDest);\n    }\n}",
    "hint": "Producer extends, consumer super (PECS)."
  },
  {
    "id": "generics_33",
    "topicId": "generics",
    "question": "Create a generic class Box<T> with a static method that returns a Box of the same type parameter, but the static method cannot use T directly. Use a separate generic method.",
    "mathSolution": "Static methods have their own type parameters independent of class T.",
    "codeSolution": "public class Main {\n    static class Box<T> {\n        private T item;\n        public void set(T item) { this.item = item; }\n        public T get() { return item; }\n        public static <U> Box<U> empty() {\n            return new Box<>();\n        }\n    }\n    public static void main(String[] args) {\n        Box<String> stringBox = Box.empty();\n        stringBox.set(\"Hello\");\n        System.out.println(stringBox.get());\n        Box<Integer> intBox = Box.empty();\n        intBox.set(42);\n        System.out.println(intBox.get());\n    }\n}",
    "hint": "Static generic methods use their own type parameters."
  },
  {
    "id": "generics_34",
    "topicId": "generics",
    "question": "Write a generic method that returns the maximum element from a collection, using a custom Comparator.",
    "mathSolution": "Use Collections.max with Comparator.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> T max(Collection<T> coll, Comparator<? super T> comp) {\n        if (coll.isEmpty()) return null;\n        T max = null;\n        for (T t : coll) {\n            if (max == null || comp.compare(t, max) > 0) max = t;\n        }\n        return max;\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        String longest = max(names, Comparator.comparingInt(String::length));\n        System.out.println(\"Longest name: \" + longest);\n        List<Integer> numbers = Arrays.asList(5, 2, 8, 1);\n        Integer maxNum = max(numbers, Comparator.naturalOrder());\n        System.out.println(\"Maximum number: \" + maxNum);\n    }\n}",
    "hint": "Use Comparator<? super T> for flexibility."
  },
   {
    "id": "generics_35",
    "topicId": "generics",
    "question": "Create a generic tuple class Tuple2<A, B> with two fields. Add a method to convert to a list.",
    "mathSolution": "Store fields; toList returns List<Object> with both values.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Tuple2<A, B> {\n        public final A first;\n        public final B second;\n        Tuple2(A first, B second) { this.first = first; this.second = second; }\n        public List<Object> toList() {\n            return Arrays.asList(first, second);\n        }\n        public String toString() { return \"(\" + first + \", \" + second + \")\"; }\n    }\n    public static void main(String[] args) {\n        Tuple2<String, Integer> tuple = new Tuple2<>(\"Age\", 25);\n        System.out.println(\"Tuple: \" + tuple);\n        System.out.println(\"As list: \" + tuple.toList());\n    }\n}",
    "hint": "Use public final fields or getters for immutable tuple."
  },
  {
    "id": "generics_36",
    "topicId": "generics",
    "question": "Implement a generic method that takes a list and a predicate (function from T to boolean) and returns a new list with elements that satisfy the predicate.",
    "mathSolution": "Use generic functional interface Predicate.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Predicate;\npublic class Main {\n    public static <T> List<T> filter(List<T> list, Predicate<? super T> predicate) {\n        List<T> result = new ArrayList<>();\n        for (T item : list) {\n            if (predicate.test(item)) result.add(item);\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);\n        List<Integer> evens = filter(numbers, n -> n % 2 == 0);\n        System.out.println(\"Even numbers: \" + evens);\n        List<String> words = Arrays.asList(\"cat\", \"elephant\", \"dog\", \"hippopotamus\");\n        List<String> longWords = filter(words, s -> s.length() > 4);\n        System.out.println(\"Long words: \" + longWords);\n    }\n}",
    "hint": "Use Predicate from java.util.function."
  },
  {
    "id": "generics_37",
    "topicId": "generics",
    "question": "Create a generic interface Transformer<T, R> with a method transform(T input) returning R. Implement for String to Integer (length) and Integer to String (description).",
    "mathSolution": "Functional transformation between types.",
    "codeSolution": "public class Main {\n    interface Transformer<T, R> {\n        R transform(T input);\n    }\n    public static void main(String[] args) {\n        Transformer<String, Integer> lengthTransformer = s -> s.length();\n        System.out.println(\"Length of 'Java': \" + lengthTransformer.transform(\"Java\"));\n        Transformer<Integer, String> descTransformer = n -> \"Number: \" + n;\n        System.out.println(descTransformer.transform(42));\n    }\n}",
    "hint": "Generic interface can transform any T to any R."
  },
  {
    "id": "generics_38",
    "topicId": "generics",
    "question": "Write a generic method that safely casts a list of one type to another, throwing ClassCastException if elements are not of the target type.",
    "mathSolution": "Iterate and check each element's type.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    @SuppressWarnings(\"unchecked\")\n    public static <T> List<T> castList(List<?> list, Class<T> clazz) {\n        for (Object obj : list) {\n            if (!clazz.isInstance(obj)) {\n                throw new ClassCastException(\"Element \" + obj + \" is not of type \" + clazz.getSimpleName());\n            }\n        }\n        return (List<T>) list;\n    }\n    public static void main(String[] args) {\n        List<Object> mixed = Arrays.asList(\"Hello\", \"World\");\n        List<String> strings = castList(mixed, String.class);\n        System.out.println(\"Cast successful: \" + strings);\n        try {\n            List<Object> mixed2 = Arrays.asList(\"Hello\", 123);\n            List<String> fail = castList(mixed2, String.class);\n        } catch(ClassCastException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use Class.isInstance() for runtime type checking."
  },
  {
    "id": "generics_39",
    "topicId": "generics",
    "question": "Create a generic builder class for constructing immutable objects (e.g., a Person with name and age). Use generics to enforce type safety during chaining.",
    "mathSolution": "Builder with generic self-type for fluent API.",
    "codeSolution": "public class Main {\n    static class Person {\n        private final String name;\n        private final int age;\n        private Person(Builder<?> builder) { this.name = builder.name; this.age = builder.age; }\n        public String toString() { return name + \" (\" + age + \")\"; }\n        public static Builder<?> builder() { return new Builder<>(); }\n        static class Builder<T extends Builder<T>> {\n            private String name;\n            private int age;\n            @SuppressWarnings(\"unchecked\")\n            public T name(String name) { this.name = name; return (T) this; }\n            @SuppressWarnings(\"unchecked\")\n            public T age(int age) { this.age = age; return (T) this; }\n            public Person build() { return new Person(this); }\n        }\n    }\n    public static void main(String[] args) {\n        Person p = Person.builder().name(\"Alice\").age(30).build();\n        System.out.println(p);\n    }\n}",
    "hint": "Use recursive generic bound for fluent builder."
  },
  {
    "id": "generics_40",
    "topicId": "generics",
    "question": "Implement a generic method that returns the common prefix of two lists, i.e., a list of elements that are equal up to the shorter length.",
    "mathSolution": "Compare elements pairwise until mismatch.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> List<T> commonPrefix(List<T> list1, List<T> list2) {\n        List<T> result = new ArrayList<>();\n        int minSize = Math.min(list1.size(), list2.size());\n        for (int i = 0; i < minSize; i++) {\n            if (list1.get(i).equals(list2.get(i))) {\n                result.add(list1.get(i));\n            } else {\n                break;\n            }\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> a = Arrays.asList(1,2,3,4,5);\n        List<Integer> b = Arrays.asList(1,2,3,0,9);\n        System.out.println(\"Common prefix: \" + commonPrefix(a, b));\n        List<String> s1 = Arrays.asList(\"a\",\"b\",\"c\");\n        List<String> s2 = Arrays.asList(\"a\",\"b\",\"d\");\n        System.out.println(\"Common prefix: \" + commonPrefix(s1, s2));\n    }\n}",
    "hint": "Use equals() to compare elements for equality."
  }
);