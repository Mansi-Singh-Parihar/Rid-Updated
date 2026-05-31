QuizData.questions.push(
  // STREAM CREATION (4)
  {
    id: "stream_1",
    topicId: "stream",
    question: "Create stream from different sources.",
    mathSolution: "Streams can be created from collections, arrays, or values",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("Apple", "Banana", "Orange");\n        Stream<String> streamFromList = list.stream();\n        String[] array = {"Red", "Green", "Blue"};\n        Stream<String> streamFromArray = Arrays.stream(array);\n        Stream<Integer> streamFromValues = Stream.of(1, 2, 3, 4, 5);\n        IntStream intStream = IntStream.range(1, 10);\n        IntStream intStreamClosed = IntStream.rangeClosed(1, 10);\n        Stream<String> streamFromBuilder = Stream.<String>builder().add("One").add("Two").add("Three").build();\n        Stream<Double> randomStream = Stream.generate(Math::random).limit(5);\n        Stream<Integer> iterateStream = Stream.iterate(0, n -> n + 2).limit(5);\n        System.out.println("From list: " + streamFromList.collect(Collectors.toList()));\n        System.out.println("From array: " + streamFromArray.collect(Collectors.toList()));\n        System.out.println("From values: " + streamFromValues.collect(Collectors.toList()));\n        System.out.println("Int range: " + intStream.boxed().collect(Collectors.toList()));\n        System.out.println("From builder: " + streamFromBuilder.collect(Collectors.toList()));\n        System.out.println("Random: " + randomStream.collect(Collectors.toList()));\n        System.out.println("Iterate: " + iterateStream.collect(Collectors.toList()));\n    }\n}',
    hint: "Stream.of(), Arrays.stream(), collection.stream()",
  },
  {
    id: "stream_2",
    topicId: "stream",
    question: "Convert stream back to collection.",
    mathSolution: "Use collectors to convert stream to collections",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n        List<String> listResult = names.stream().filter(name -> name.length() > 3).collect(Collectors.toList());\n        System.out.println("List: " + listResult);\n        Set<String> setResult = names.stream().filter(name -> name.startsWith("A") || name.startsWith("C")).collect(Collectors.toSet());\n        System.out.println("Set: " + setResult);\n        TreeSet<String> treeSet = names.stream().collect(Collectors.toCollection(TreeSet::new));\n        System.out.println("TreeSet: " + treeSet);\n        Map<String, Integer> mapResult = names.stream().collect(Collectors.toMap(name -> name, name -> name.length(), (v1, v2) -> v1));\n        System.out.println("Map: " + mapResult);\n        String[] arrayResult = names.stream().filter(name -> name.contains("a")).toArray(String[]::new);\n        System.out.println("Array: " + Arrays.toString(arrayResult));\n    }\n}',
    hint: "collect(Collectors.toList()), toSet(), toMap(), toArray()",
  },
  {
    id: "stream_3",
    topicId: "stream",
    question: "Primitive streams (IntStream, LongStream, DoubleStream).",
    mathSolution: "Specialized streams for primitive types to avoid boxing",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        IntStream intStream = IntStream.of(1, 2, 3, 4, 5);\n        int sum = intStream.sum();\n        System.out.println("Sum: " + sum);\n        intStream = IntStream.range(1, 6);\n        System.out.println("Range: " + Arrays.toString(intStream.toArray()));\n        intStream = IntStream.rangeClosed(1, 5);\n        System.out.println("Range closed: " + Arrays.toString(intStream.toArray()));\n        IntSummaryStatistics stats = IntStream.of(10, 20, 30, 40, 50).summaryStatistics();\n        System.out.println("Stats: count=" + stats.getCount() + ", sum=" + stats.getSum() + ", min=" + stats.getMin() + ", max=" + stats.getMax() + ", average=" + stats.getAverage());\n        DoubleStream doubleStream = DoubleStream.of(1.1, 2.2, 3.3, 4.4, 5.5);\n        double average = doubleStream.average().orElse(0);\n        System.out.println("Average: " + average);\n        LongStream longStream = LongStream.range(1L, 10L);\n        long count = longStream.count();\n        System.out.println("Count: " + count);\n        Stream<Integer> boxedStream = IntStream.range(1, 6).boxed();\n        IntStream unboxedStream = boxedStream.mapToInt(Integer::intValue);\n        List<String> numbers = Arrays.asList("1", "2", "3", "4", "5");\n        int total = numbers.stream().mapToInt(Integer::parseInt).sum();\n        System.out.println("Total: " + total);\n    }\n}',
    hint: "Use primitive streams for better performance with numbers",
  },
  {
    id: "stream_4",
    topicId: "stream",
    question: "Infinite streams with generate and iterate.",
    mathSolution: "Generate infinite streams with limit()",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream<Double> randomStream = Stream.generate(Math::random).limit(5);\n        System.out.println("5 random numbers: " + randomStream.collect(Collectors.toList()));\n        Stream<Integer> constantStream = Stream.generate(() -> 42).limit(3);\n        System.out.println("Constant 42s: " + constantStream.collect(Collectors.toList()));\n        Stream<Integer> evenNumbers = Stream.iterate(0, n -> n + 2).limit(6);\n        System.out.println("First 6 even numbers: " + evenNumbers.collect(Collectors.toList()));\n        Stream<Integer> powersOfTwo = Stream.iterate(1, n -> n * 2).limit(5);\n        System.out.println("First 5 powers of 2: " + powersOfTwo.collect(Collectors.toList()));\n        Stream<Integer> numbersUntil10 = Stream.iterate(1, n -> n < 10, n -> n + 2);\n        System.out.println("Odd numbers < 10: " + numbersUntil10.collect(Collectors.toList()));\n        Stream<int[]> fibonacci = Stream.iterate(new int[]{0, 1}, f -> new int[]{f[1], f[0] + f[1]}).limit(8);\n        fibonacci.forEach(f -> System.out.print(f[0] + " "));\n        System.out.println();\n        Random random = new Random();\n        Stream<Integer> randomInts = Stream.generate(() -> random.nextInt(100)).limit(6);\n        System.out.println("6 random ints 0-99: " + randomInts.collect(Collectors.toList()));\n    }\n}',
    hint: "Use limit() to cap infinite streams",
  },

  // INTERMEDIATE OPERATIONS (5)
  {
    id: "stream_5",
    topicId: "stream",
    question: "Filter elements using predicate.",
    mathSolution: "filter() keeps elements that satisfy predicate",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println("Even numbers: " + evens);\n        List<Integer> greaterThan5 = numbers.stream().filter(n -> n > 5).collect(Collectors.toList());\n        System.out.println("Greater than 5: " + greaterThan5);\n        List<Integer> between3And8 = numbers.stream().filter(n -> n > 3).filter(n -> n < 8).collect(Collectors.toList());\n        System.out.println("Between 3 and 8: " + between3And8);\n        List<String> names = Arrays.asList("Alice", "Bob", "Anna", "Charlie", "Amanda", "Alex");\n        List<String> startsWithA = names.stream().filter(name -> name.startsWith("A")).collect(Collectors.toList());\n        System.out.println("Names starting with A: " + startsWithA);\n        List<String> longNames = names.stream().filter(name -> name.length() > 4).collect(Collectors.toList());\n        System.out.println("Names longer than 4: " + longNames);\n        List<String> aNamesLong = names.stream().filter(name -> name.startsWith("A") && name.length() > 4).collect(Collectors.toList());\n        System.out.println("A-names longer than 4: " + aNamesLong);\n    }\n}',
    hint: "filter() is lazy and returns new stream",
  },
  {
    id: "stream_6",
    topicId: "stream",
    question: "Transform elements using map().",
    mathSolution: "map() applies function to each element",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("alice", "bob", "charlie", "david");\n        List<String> upperCase = names.stream().map(String::toUpperCase).collect(Collectors.toList());\n        System.out.println("Uppercase: " + upperCase);\n        List<Integer> lengths = names.stream().map(String::length).collect(Collectors.toList());\n        System.out.println("Lengths: " + lengths);\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        List<Integer> squares = numbers.stream().map(n -> n * n).collect(Collectors.toList());\n        System.out.println("Squares: " + squares);\n        List<Double> cubes = numbers.stream().map(n -> Math.pow(n, 3)).collect(Collectors.toList());\n        System.out.println("Cubes: " + cubes);\n        class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n        List<Person> people = names.stream().map(name -> new Person(name, name.length() * 5)).collect(Collectors.toList());\n        System.out.println("People: " + people);\n        List<String> result = numbers.stream().map(n -> n * 2).map(n -> "Number: " + n).collect(Collectors.toList());\n        System.out.println("Mapped twice: " + result);\n    }\n}',
    hint: "map() transforms each element to something else",
  },
  {
    id: "stream_7",
    topicId: "stream",
    question: "Flatten nested collections with flatMap().",
    mathSolution: "flatMap() flattens multiple streams into one",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<List<Integer>> nestedNumbers = Arrays.asList(Arrays.asList(1,2,3), Arrays.asList(4,5,6), Arrays.asList(7,8,9));\n        System.out.println("Nested: " + nestedNumbers);\n        List<Integer> flattened = nestedNumbers.stream().flatMap(list -> list.stream()).collect(Collectors.toList());\n        System.out.println("Flattened: " + flattened);\n        List<String> sentences = Arrays.asList("Hello world", "Java streams are powerful", "flatMap is useful");\n        List<String> words = sentences.stream().flatMap(sentence -> Arrays.stream(sentence.split(" "))).collect(Collectors.toList());\n        System.out.println("Words: " + words);\n        List<String> words2 = Arrays.asList("Hello", "World");\n        List<Character> characters = words2.stream().flatMap(word -> word.chars().mapToObj(c -> (char) c)).distinct().collect(Collectors.toList());\n        System.out.println("Unique characters: " + characters);\n        List<Optional<String>> optionals = Arrays.asList(Optional.of("Hello"), Optional.empty(), Optional.of("World"));\n        List<String> values = optionals.stream().flatMap(Optional::stream).collect(Collectors.toList());\n        System.out.println("Present values: " + values);\n        int[][] array2D = {{1,2},{3,4},{5,6}};\n        List<Integer> flattenedArray = Arrays.stream(array2D).flatMapToInt(Arrays::stream).boxed().collect(Collectors.toList());\n        System.out.println("Flattened 2D array: " + flattenedArray);\n    }\n}',
    hint: "flatMap() is map() + flattening",
  },
  {
    id: "stream_8",
    topicId: "stream",
    question: "Remove duplicates with distinct().",
    mathSolution: "distinct() returns stream with unique elements",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public boolean equals(Object o) { if(this==o) return true; if(!(o instanceof Person)) return false; Person p = (Person)o; return age==p.age && Objects.equals(name,p.name); }\n        public int hashCode() { return Objects.hash(name, age); }\n        public String toString() { return name + "(" + age + ")"; }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,2,4,1,5,3,6,4);\n        System.out.println("Original: " + numbers);\n        List<Integer> distinct = numbers.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct: " + distinct);\n        List<String> names = Arrays.asList("Alice","Bob","Alice","Charlie","Bob","David");\n        System.out.println("Original names: " + names);\n        List<String> distinctNames = names.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct names: " + distinctNames);\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Alice",25), new Person("Charlie",35), new Person("Bob",30));\n        List<Person> distinctPeople = people.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct people: " + distinctPeople);\n    }\n}',
    hint: "distinct() uses equals() for comparison",
  },
  {
  id: "stream_9",
  topicId: "stream",
  question: "Sort elements using sorted().",
  mathSolution: "sorted() sorts elements naturally or with comparator",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        List<Integer> sorted = numbers.stream().sorted().collect(Collectors.toList());\n        System.out.println("Sorted ascending: " + sorted);\n        List<Integer> reverseSorted = numbers.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());\n        System.out.println("Sorted descending: " + reverseSorted);\n        List<String> names = Arrays.asList("Charlie","Alice","Bob","David");\n        List<String> sortedNames = names.stream().sorted().collect(Collectors.toList());\n        System.out.println("Sorted names: " + sortedNames);\n        List<String> sortedByLength = names.stream().sorted(Comparator.comparing(String::length)).collect(Collectors.toList());\n        System.out.println("Sorted by length: " + sortedByLength);\n        List<String> sortedByLengthThenAlpha = names.stream().sorted(Comparator.comparing(String::length).thenComparing(Comparator.naturalOrder())).collect(Collectors.toList());\n        System.out.println("By length then alpha: " + sortedByLengthThenAlpha);\n        List<Person> people = Arrays.asList(new Person("Alice",30), new Person("Bob",25), new Person("Charlie",35), new Person("David",25));\n        List<Person> sortedPeople = people.stream().sorted(Comparator.comparingInt((Person p) -> p.age).thenComparing((Person p) -> p.name)).collect(Collectors.toList());\n        System.out.println("Sorted people: " + sortedPeople);\n    }\n}',
  hint: "sorted() with Comparator for custom sorting",
},

  // TERMINAL OPERATIONS (5)
  {
    id: "stream_10",
    topicId: "stream",
    question: "Reduce stream to single value with reduce().",
    mathSolution: "reduce() combines elements using binary operator",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        int sum = numbers.stream().reduce(0, (a,b) -> a+b);\n        System.out.println("Sum: " + sum);\n        int sum2 = numbers.stream().reduce(0, Integer::sum);\n        System.out.println("Sum (method ref): " + sum2);\n        int product = numbers.stream().reduce(1, (a,b) -> a*b);\n        System.out.println("Product: " + product);\n        int max = numbers.stream().reduce(Integer.MIN_VALUE, (a,b) -> a>b ? a : b);\n        System.out.println("Max: " + max);\n        int min = numbers.stream().reduce(Integer.MAX_VALUE, (a,b) -> a<b ? a : b);\n        System.out.println("Min: " + min);\n        Optional<Integer> sumOptional = numbers.stream().reduce((a,b) -> a+b);\n        sumOptional.ifPresent(s -> System.out.println("Sum optional: " + s));\n        List<String> words = Arrays.asList("Hello"," ","World","!");\n        String sentence = words.stream().reduce("", (a,b) -> a+b);\n        System.out.println("Concatenated: " + sentence);\n        List<String> names = Arrays.asList("Alice","Bob","Christopher","David");\n        Optional<String> longest = names.stream().reduce((a,b) -> a.length() > b.length() ? a : b);\n        longest.ifPresent(s -> System.out.println("Longest name: " + s));\n        long count = numbers.stream().reduce(0, (cnt,n) -> cnt+1, (c1,c2) -> c1+c2);\n        System.out.println("Count: " + count);\n    }\n}',
    hint: "reduce() with identity for empty stream, without for non-empty",
  },
  {
    id: "stream_11",
    topicId: "stream",
    question: "Collect elements with collect() and Collectors.",
    mathSolution: "collect() is mutable reduction operation",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David","Anna");\n        String joined = names.stream().collect(Collectors.joining(", "));\n        System.out.println("Joined: " + joined);\n        String joinedWithPrefix = names.stream().collect(Collectors.joining(", ", "[", "]"));\n        System.out.println("Joined with brackets: " + joinedWithPrefix);\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        Double average = numbers.stream().collect(Collectors.averagingInt(Integer::intValue));\n        System.out.println("Average: " + average);\n        Integer sum = numbers.stream().collect(Collectors.summingInt(Integer::intValue));\n        System.out.println("Sum: " + sum);\n        IntSummaryStatistics stats = numbers.stream().collect(Collectors.summarizingInt(Integer::intValue));\n        System.out.println("Stats: " + stats);\n        Map<Boolean, List<String>> partitioned = names.stream().collect(Collectors.partitioningBy(name -> name.startsWith("A")));\n        System.out.println("Starts with A: " + partitioned.get(true));\n        System.out.println("Doesn\'t start with A: " + partitioned.get(false));\n        Map<Integer, List<String>> byLength = names.stream().collect(Collectors.groupingBy(String::length));\n        System.out.println("Grouped by length: " + byLength);\n        Map<Integer, Long> countByLength = names.stream().collect(Collectors.groupingBy(String::length, Collectors.counting()));\n        System.out.println("Count by length: " + countByLength);\n    }\n}',
    hint: "Collectors provides many useful reduction operations",
  },
  {
    id: "stream_12",
    topicId: "stream",
    question: "Match operations - anyMatch, allMatch, noneMatch.",
    mathSolution: "Match operations return boolean based on predicate",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        boolean anyEven = numbers.stream().anyMatch(n -> n%2==0);\n        System.out.println("Any even? " + anyEven);\n        boolean anyGreaterThan10 = numbers.stream().anyMatch(n -> n>10);\n        System.out.println("Any > 10? " + anyGreaterThan10);\n        boolean allPositive = numbers.stream().allMatch(n -> n>0);\n        System.out.println("All positive? " + allPositive);\n        boolean allEven = numbers.stream().allMatch(n -> n%2==0);\n        System.out.println("All even? " + allEven);\n        boolean noneNegative = numbers.stream().noneMatch(n -> n<0);\n        System.out.println("None negative? " + noneNegative);\n        boolean noneGreaterThan5 = numbers.stream().noneMatch(n -> n>5);\n        System.out.println("None > 5? " + noneGreaterThan5);\n        List<String> names = Arrays.asList("Alice","Bob","Charlie",null,"David");\n        boolean anyNull = names.stream().anyMatch(Objects::isNull);\n        System.out.println("Any null? " + anyNull);\n        boolean allNonNull = names.stream().filter(Objects::nonNull).allMatch(name -> name.length()>2);\n        System.out.println("All non-null length > 2? " + allNonNull);\n        List<Integer> bigList = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        boolean found = bigList.stream().peek(n -> System.out.println("Checking: " + n)).anyMatch(n -> n>5);\n        System.out.println("Found > 5: " + found);\n    }\n}',
    hint: "Match operations are short-circuiting",
  },
  {
    id: "stream_13",
    topicId: "stream",
    question: "Find operations - findFirst, findAny.",
    mathSolution: "Find returns Optional of first or any element",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        Optional<Integer> first = numbers.stream().filter(n -> n>5).findFirst();\n        first.ifPresent(n -> System.out.println("First > 5: " + n));\n        Optional<Integer> firstParallel = numbers.parallelStream().filter(n -> n>5).findFirst();\n        firstParallel.ifPresent(n -> System.out.println("First > 5 (parallel): " + n));\n        Optional<Integer> any = numbers.stream().filter(n -> n>5).findAny();\n        any.ifPresent(n -> System.out.println("Any > 5: " + n));\n        Optional<Integer> anyParallel = numbers.parallelStream().filter(n -> n%2==0).findAny();\n        anyParallel.ifPresent(n -> System.out.println("Any even (parallel): " + n));\n        Optional<Integer> notFound = numbers.stream().filter(n -> n>100).findFirst();\n        System.out.println("Found > 100? " + notFound.isPresent());\n        int result = numbers.stream().filter(n -> n>100).findFirst().orElse(0);\n        System.out.println("Result with default: " + result);\n        try {\n            int value = numbers.stream().filter(n -> n>100).findFirst().orElseThrow(NoSuchElementException::new);\n        } catch(NoSuchElementException e) {\n            System.out.println("Exception thrown as expected");\n        }\n    }\n}',
    hint: "findFirst for first element, findAny for parallel-friendly",
  },
  {
    id: "stream_14",
    topicId: "stream",
    question: "Count, min, max operations.",
    mathSolution: "count returns long, min/max return Optional",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        long count = numbers.stream().count();\n        System.out.println("Count: " + count);\n        long evenCount = numbers.stream().filter(n -> n%2==0).count();\n        System.out.println("Even count: " + evenCount);\n        Optional<Integer> min = numbers.stream().min(Integer::compareTo);\n        min.ifPresent(n -> System.out.println("Min: " + n));\n        Optional<Integer> max = numbers.stream().max(Integer::compareTo);\n        max.ifPresent(n -> System.out.println("Max: " + n));\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David");\n        Optional<String> shortest = names.stream().min(Comparator.comparing(String::length));\n        shortest.ifPresent(s -> System.out.println("Shortest name: " + s));\n        Optional<String> longest = names.stream().max(Comparator.comparing(String::length));\n        longest.ifPresent(s -> System.out.println("Longest name: " + s));\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Charlie",22), new Person("David",35));\n        Optional<Person> youngest = people.stream().min(Comparator.comparingInt(p -> p.age));\n        youngest.ifPresent(p -> System.out.println("Youngest: " + p));\n        Optional<Person> oldest = people.stream().max(Comparator.comparingInt(p -> p.age));\n        oldest.ifPresent(p -> System.out.println("Oldest: " + p));\n    }\n}',
    hint: "min() and max() need Comparator",
  },

  // ADVANCED STREAM OPERATIONS (5)
  {
    id: "stream_15",
    topicId: "stream",
    question: "Grouping and partitioning collectors.",
    mathSolution: "groupingBy for multiple groups, partitioningBy for two groups",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee { String name; String dept; double salary; int age; Employee(String n, String d, double s, int a) { name=n; dept=d; salary=s; age=a; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice","IT",75000,25), new Employee("Bob","HR",65000,30), new Employee("Charlie","IT",85000,28),\n            new Employee("David","Finance",70000,35), new Employee("Eve","HR",60000,22), new Employee("Frank","IT",80000,32));\n        Map<String, List<Employee>> byDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept));\n        System.out.println("By department: " + byDept);\n        Map<String, Long> countByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.counting()));\n        System.out.println("Count by dept: " + countByDept);\n        Map<String, Double> salaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.summingDouble(e -> e.salary)));\n        System.out.println("Salary by dept: " + salaryByDept);\n        Map<String, Double> avgSalaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.averagingDouble(e -> e.salary)));\n        System.out.println("Avg salary by dept: " + avgSalaryByDept);\n        Map<String, List<String>> namesByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.mapping(e -> e.name, Collectors.toList())));\n        System.out.println("Names by dept: " + namesByDept);\n        Map<Boolean, List<Employee>> bySalary = employees.stream().collect(Collectors.partitioningBy(e -> e.salary > 70000));\n        System.out.println("High salary: " + bySalary.get(true));\n        System.out.println("Low salary: " + bySalary.get(false));\n        Map<String, Map<String, List<Employee>>> byDeptAndAge = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.groupingBy(e -> e.age > 30 ? "Senior" : "Junior")));\n        System.out.println("By dept and level: " + byDeptAndAge);\n    }\n}',
    hint: "groupingBy can have downstream collectors",
  },
  {
  id: "stream_16",
  topicId: "stream",
  question: "Parallel streams for performance.",
  mathSolution: "parallelStream() for concurrent processing",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        long start = System.currentTimeMillis();\n        long sumSeq = numbers.stream().mapToLong(Integer::longValue).sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Sequential sum: " + sumSeq + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumPar = numbers.parallelStream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Parallel sum: " + sumPar + ", time: " + (end-start) + "ms");\n        Stream<Integer> seqStream = numbers.stream();\n        Stream<Integer> parStream = numbers.parallelStream();\n        System.out.println("Sequential is parallel? " + seqStream.isParallel());\n        System.out.println("Parallel is parallel? " + parStream.isParallel());\n        List<Integer> result = numbers.stream().parallel().filter(n -> n%1000==0).sequential().limit(5).collect(Collectors.toList());\n        System.out.println("Result: " + result);\n        System.out.println("\\nParallel forEach (unordered):");\n        IntStream.range(1,10).parallel().forEach(n -> System.out.print(n + " "));\n        System.out.println("\\n\\nParallel forEachOrdered (preserves order):");\n        IntStream.range(1,10).parallel().forEachOrdered(n -> System.out.print(n + " "));\n        List<Integer> smallList = Arrays.asList(1,2,3,4,5);\n        System.out.println("\\n\\nSmall list parallel overhead:");\n        smallList.parallelStream().forEach(n -> System.out.println(Thread.currentThread().getName() + ": " + n));\n    }\n}',
  hint: "parallel() for large datasets, sequential() for ordered operations",
},
  {
    id: "stream_17",
    topicId: "stream",
    question: "Stream debugging with peek().",
    mathSolution: "peek() allows viewing elements without modifying",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name=n; age=a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> result = numbers.stream()\n            .peek(n -> System.out.println("Original: " + n))\n            .filter(n -> n%2==0)\n            .peek(n -> System.out.println("After filter: " + n))\n            .map(n -> n*2)\n            .peek(n -> System.out.println("After map: " + n))\n            .limit(3)\n            .peek(n -> System.out.println("After limit: " + n))\n            .collect(Collectors.toList());\n        System.out.println("Final result: " + result);\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Charlie",28));\n        List<String> names = people.stream()\n            .peek(p -> System.out.println("Processing: " + p))\n            .filter(p -> p.age > 25)\n            .peek(p -> System.out.println("After filter: " + p))\n            .map(p -> p.name)\n            .peek(name -> System.out.println("After map: " + name))\n            .collect(Collectors.toList());\n        System.out.println("Names: " + names);\n        long count = numbers.stream().peek(System.out::println).count();\n        System.out.println("Count: " + count);\n        System.out.println("\\nParallel peek:");\n        numbers.parallelStream().peek(n -> System.out.println(Thread.currentThread().getName() + ": " + n)).forEach(n -> {});\n    }\n}',
    hint: "peek() is mainly for debugging, not for production logic",
  },
  {
    id: "stream_18",
    topicId: "stream",
    question: "Custom collectors.",
    mathSolution: "Collector.of() for custom reduction operations",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\nimport java.util.concurrent.ConcurrentHashMap;\npublic class Main {\n    static class CustomCollectors {\n        public static <T> Collector<T, ?, Map<String, Object>> statistics(java.util.function.Function<T, Integer> mapper) {\n            return Collector.of(\n                () -> new int[4],\n                (acc, el) -> { int v = mapper.apply(el); acc[0] += v; acc[1]++; if(acc[2]==0) acc[2]=v; else if(v<acc[2]) acc[2]=v; if(acc[3]==0) acc[3]=v; else if(v>acc[3]) acc[3]=v; },\n                (a,b) -> { a[0]+=b[0]; a[1]+=b[1]; a[2]=Math.min(a[2],b[2]); a[3]=Math.max(a[3],b[3]); return a; },\n                acc -> { Map<String,Object> m = new HashMap<>(); m.put("sum",acc[0]); m.put("count",acc[1]); m.put("min",acc[2]); m.put("max",acc[3]); m.put("average",acc[1]>0 ? (double)acc[0]/acc[1] : 0); return m; }\n            );\n        }\n        public static <T,K,V> Collector<T,?,ConcurrentHashMap<K,V>> toConcurrentMap(java.util.function.Function<T,K> keyMapper, java.util.function.Function<T,V> valueMapper) {\n            return Collector.of(ConcurrentHashMap::new, (map,el) -> map.put(keyMapper.apply(el), valueMapper.apply(el)), (m1,m2) -> { m1.putAll(m2); return m1; }, Collector.Characteristics.CONCURRENT);\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        Map<String,Object> stats = numbers.stream().collect(CustomCollectors.statistics(n -> n));\n        System.out.println("Statistics: " + stats);\n        ConcurrentHashMap<String,Integer> map = numbers.stream().collect(CustomCollectors.toConcurrentMap(n -> "Number_"+n, n -> n*n));\n        System.out.println("Concurrent map: " + map);\n        Map<Boolean,List<Integer>> partitioned = numbers.stream().collect(Collectors.partitioningBy(n -> n%2==0));\n        System.out.println("Even: " + partitioned.get(true));\n        System.out.println("Odd: " + partitioned.get(false));\n    }\n}',
    hint: "Custom collectors for specialized reduction operations",
  },
  {
    id: "stream_19",
    topicId: "stream",
    question: "Stream of primitives vs boxed streams.",
    mathSolution: "Primitive streams avoid boxing overhead",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        IntStream intStream = IntStream.rangeClosed(1,10);\n        int sum = intStream.sum();\n        System.out.println("Sum: " + sum);\n        intStream = IntStream.rangeClosed(1,10);\n        double avg = intStream.average().orElse(0);\n        System.out.println("Average: " + avg);\n        intStream = IntStream.rangeClosed(1,10);\n        OptionalInt min = intStream.min();\n        min.ifPresent(m -> System.out.println("Min: " + m));\n        Stream<Integer> boxedStream = IntStream.rangeClosed(1,5).boxed();\n        List<Integer> boxedList = boxedStream.collect(Collectors.toList());\n        System.out.println("Boxed: " + boxedList);\n        List<String> numbers = Arrays.asList("1","2","3","4","5");\n        int total = numbers.stream().mapToInt(Integer::parseInt).sum();\n        System.out.println("Total: " + total);\n        int size = 10_000_000;\n        long start = System.currentTimeMillis();\n        long sumPrimitive = IntStream.rangeClosed(1,size).asLongStream().sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Primitive sum: " + sumPrimitive + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumBoxed = IntStream.rangeClosed(1,size).boxed().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Boxed sum: " + sumBoxed + ", time: " + (end-start) + "ms");\n        int[] intArray = {1,2,3,4,5};\n        IntStream arrayStream = Arrays.stream(intArray);\n        DoubleStream doubleStream = DoubleStream.of(1.1,2.2,3.3,4.4,5.5);\n        double product = doubleStream.reduce(1.0, (a,b) -> a*b);\n        System.out.println("Product: " + product);\n    }\n}',
    hint: "Use primitive streams for numeric operations for better performance",
  },

  // REAL-WORLD SCENARIOS (4)
  {
    id: "stream_20",
    topicId: "stream",
    question: "Process employee data with streams.",
    mathSolution: "Real-world data processing with streams",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee { String name; String dept; double salary; int age; String gender; Employee(String n, String d, double s, int a, String g) { name=n; dept=d; salary=s; age=a; gender=g; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice","IT",75000,25,"F"), new Employee("Bob","IT",85000,32,"M"), new Employee("Charlie","HR",65000,28,"M"),\n            new Employee("Diana","HR",70000,35,"F"), new Employee("Eve","Finance",90000,42,"F"), new Employee("Frank","Finance",80000,38,"M"),\n            new Employee("Grace","IT",95000,29,"F"), new Employee("Henry","HR",60000,24,"M"));\n        Map<String,Double> avgSalaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.averagingDouble(e -> e.salary)));\n        System.out.println("Average salary by department: " + avgSalaryByDept);\n        Map<String, Optional<Employee>> highestPaidByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.maxBy(Comparator.comparingDouble(e -> e.salary))));\n        System.out.println("\\nHighest paid by department:");\n        highestPaidByDept.forEach((dept, emp) -> System.out.println(dept + ": " + emp.orElse(null)));\n        Map<String,Double> totalSalaryByGender = employees.stream().collect(Collectors.groupingBy(e -> e.gender, Collectors.summingDouble(e -> e.salary)));\n        System.out.println("\\nTotal salary by gender: " + totalSalaryByGender);\n        Double avgOverall = employees.stream().mapToDouble(e -> e.salary).average().orElse(0);\n        List<Employee> aboveAvg = employees.stream().filter(e -> e.salary > avgOverall).collect(Collectors.toList());\n        System.out.println("\\nAbove average salary (" + avgOverall + "): " + aboveAvg);\n        Map<String, DoubleSummaryStatistics> deptStats = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.summarizingDouble(e -> e.salary)));\n        System.out.println("\\nDepartment statistics:");\n        deptStats.forEach((dept, stats) -> System.out.println(dept + ": count=" + stats.getCount() + ", avg=" + stats.getAverage() + ", max=" + stats.getMax()));\n        List<String> namesByAge = employees.stream().sorted(Comparator.comparingInt(e -> e.age)).map(e -> e.name).collect(Collectors.toList());\n        System.out.println("\\nEmployees by age: " + namesByAge);\n    }\n}',
    hint: "Streams excel at data processing tasks",
  },
  {
  id: "stream_21",
  topicId: "stream",
  question: "Process sales data with streams.",
  mathSolution: "Analyze sales transactions using streams",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\nimport java.time.*;\npublic class Main {\n    static class Sale { String product; String category; double amount; LocalDate date; String region; Sale(String p, String c, double a, LocalDate d, String r) { product=p; category=c; amount=a; date=d; region=r; } public String toString() { return product + "($" + amount + ")"; } }\n    public static void main(String[] args) {\n        List<Sale> sales = Arrays.asList(\n            new Sale("Laptop","Electronics",1200,LocalDate.of(2024,1,15),"North"),\n            new Sale("Mouse","Electronics",25,LocalDate.of(2024,1,16),"South"),\n            new Sale("Desk","Furniture",350,LocalDate.of(2024,1,17),"North"),\n            new Sale("Chair","Furniture",150,LocalDate.of(2024,1,18),"West"),\n            new Sale("Phone","Electronics",800,LocalDate.of(2024,1,19),"South"),\n            new Sale("Tablet","Electronics",500,LocalDate.of(2024,1,20),"North"),\n            new Sale("Monitor","Electronics",300,LocalDate.of(2024,1,21),"East"),\n            new Sale("Bookshelf","Furniture",200,LocalDate.of(2024,1,22),"West"));\n        Map<String,Double> salesByCategory = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.category, Collectors.summingDouble(s -> s.amount)));\n        System.out.println("Sales by category: " + salesByCategory);\n        List<String> topProducts = sales.stream().sorted(Comparator.comparingDouble((Sale s) -> s.amount).reversed()).limit(3).map(s -> s.product + "($" + s.amount + ")").collect(Collectors.toList());\n        System.out.println("\\nTop 3 products: " + topProducts);\n        Map<String,Double> avgByRegion = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.region, Collectors.averagingDouble(s -> s.amount)));\n        System.out.println("\\nAverage by region: " + avgByRegion);\n        Map<YearMonth,Double> salesByMonth = sales.stream().collect(Collectors.groupingBy((Sale s) -> YearMonth.from(s.date), Collectors.summingDouble(s -> s.amount)));\n        System.out.println("\\nSales by month: " + salesByMonth);\n        Double avgSale = sales.stream().mapToDouble(s -> s.amount).average().orElse(0);\n        List<String> highValueProducts = sales.stream().filter(s -> s.amount > avgSale).map(s -> s.product).distinct().collect(Collectors.toList());\n        System.out.println("\\nHigh value products (>$" + avgSale + "): " + highValueProducts);\n        Map.Entry<String,Double> topCategory = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.category, Collectors.summingDouble(s -> s.amount))).entrySet().stream().max(Map.Entry.comparingByValue()).orElse(null);\n        System.out.println("\\nTop category: " + topCategory);\n    }\n}',
  hint: "Streams are perfect for business data analysis",
},
  {
  id: "stream_22",
  topicId: "stream",
  question: "Process log files with streams.",
  mathSolution: "Parse and analyze log entries using streams",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class LogEntry { String timestamp; String level; String component; String message; int responseTime; LogEntry(String t, String l, String c, String m, int rt) { timestamp=t; level=l; component=c; message=m; responseTime=rt; } public String toString() { return timestamp + " [" + level + "] " + component + ": " + message; } }\n    public static void main(String[] args) {\n        List<LogEntry> logs = Arrays.asList(\n            new LogEntry("2024-01-15 10:23:45","INFO","AuthService","User login successful",120),\n            new LogEntry("2024-01-15 10:24:12","ERROR","DBService","Connection timeout",5000),\n            new LogEntry("2024-01-15 10:24:45","WARN","CacheService","Cache miss rate high",45),\n            new LogEntry("2024-01-15 10:25:03","INFO","AuthService","Token refreshed",30),\n            new LogEntry("2024-01-15 10:25:30","ERROR","APIService","External API timeout",8000),\n            new LogEntry("2024-01-15 10:26:15","INFO","DBService","Query executed",150),\n            new LogEntry("2024-01-15 10:26:45","ERROR","AuthService","Invalid token",25),\n            new LogEntry("2024-01-15 10:27:10","WARN","APIService","Rate limit approaching",60));\n        Map<String,Long> logCountByLevel = logs.stream().collect(Collectors.groupingBy(log -> log.level, Collectors.counting()));\n        System.out.println("Log counts by level: " + logCountByLevel);\n        List<LogEntry> errors = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.toList());\n        System.out.println("\\nErrors:");\n        errors.forEach(System.out::println);\n        Map<String,Double> avgTimeByComponent = logs.stream().collect(Collectors.groupingBy(log -> log.component, Collectors.averagingInt(log -> log.responseTime)));\n        System.out.println("\\nAverage response time by component: " + avgTimeByComponent);\n        List<LogEntry> slowRequests = logs.stream().filter(log -> log.responseTime > 1000).sorted(Comparator.comparingInt((LogEntry log) -> log.responseTime).reversed()).collect(Collectors.toList());\n        System.out.println("\\nSlow requests:");\n        slowRequests.forEach(System.out::println);\n        Map<String,Long> errorMessages = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.groupingBy(log -> log.message, Collectors.counting()));\n        System.out.println("\\nError messages frequency: " + errorMessages);\n        Map<String,Long> errorsByHour = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.groupingBy(log -> log.timestamp.substring(11,13), Collectors.counting()));\n        System.out.println("\\nErrors by hour: " + errorsByHour);\n        Set<String> componentsWithErrors = logs.stream().filter(log -> log.level.equals("ERROR")).map(log -> log.component).collect(Collectors.toSet());\n        System.out.println("\\nComponents with errors: " + componentsWithErrors);\n    }\n}',
  hint: "Streams help analyze log data efficiently",
},
  {
    id: "stream_23",
    topicId: "stream",
    question: "Process student grades with streams.",
    mathSolution: "Calculate statistics and rankings from student data",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Student { String name; int grade; List<Integer> scores; String major; Student(String n, int g, List<Integer> s, String m) { name=n; grade=g; scores=s; major=m; } double getAverage() { return scores.stream().mapToInt(Integer::intValue).average().orElse(0); } public String toString() { return name + " (" + major + ")"; } }\n    public static void main(String[] args) {\n        List<Student> students = Arrays.asList(\n            new Student("Alice",10,Arrays.asList(85,90,92,88,95),"Science"),\n            new Student("Bob",11,Arrays.asList(75,80,78,82,85),"Arts"),\n            new Student("Charlie",10,Arrays.asList(92,88,94,90,96),"Science"),\n            new Student("Diana",12,Arrays.asList(88,85,90,87,92),"Math"),\n            new Student("Eve",11,Arrays.asList(95,92,98,94,97),"Science"),\n            new Student("Frank",10,Arrays.asList(70,75,72,68,74),"Arts"),\n            new Student("Grace",12,Arrays.asList(89,92,87,91,90),"Math"));\n        Map<String,Double> studentAverages = students.stream().collect(Collectors.toMap(s -> s.name, Student::getAverage));\n        System.out.println("Student averages: " + studentAverages);\n        List<Student> topStudents = students.stream().sorted(Comparator.comparingDouble(Student::getAverage).reversed()).limit(3).collect(Collectors.toList());\n        System.out.println("\\nTop 3 students: " + topStudents);\n        Map<Integer,Double> avgByGrade = students.stream().collect(Collectors.groupingBy(s -> s.grade, Collectors.averagingDouble(Student::getAverage)));\n        System.out.println("\\nAverage by grade: " + avgByGrade);\n        Map<String,Double> avgByMajor = students.stream().collect(Collectors.groupingBy(s -> s.major, Collectors.averagingDouble(Student::getAverage)));\n        System.out.println("\\nAverage by major: " + avgByMajor);\n        List<String> honorRoll = students.stream().filter(s -> s.getAverage() >= 90).map(s -> s.name).collect(Collectors.toList());\n        System.out.println("\\nHonor roll (avg >= 90): " + honorRoll);\n        Map<String,Integer> highestScore = students.stream().collect(Collectors.toMap(s -> s.name, s -> s.scores.stream().max(Integer::compareTo).orElse(0)));\n        System.out.println("\\nHighest score by student: " + highestScore);\n        Map<Integer,Long> gradeDistribution = students.stream().collect(Collectors.groupingBy(s -> s.grade, Collectors.counting()));\n        System.out.println("\\nGrade distribution: " + gradeDistribution);\n        Map<String,Boolean> improved = students.stream().collect(Collectors.toMap(s -> s.name, s -> s.scores.get(s.scores.size()-1) > s.scores.get(0)));\n        System.out.println("\\nImproved from first to last: " + improved);\n    }\n}',
    hint: "Streams make educational data analysis straightforward",
  },

  // STREAM PITFALLS AND BEST PRACTICES (2)
  {
  id: "stream_24",
  topicId: "stream",
  question: "Stream cannot be reused after terminal operation.",
  mathSolution: "Streams are single-use, need to recreate",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        Stream<Integer> stream = numbers.stream();\n        long count = stream.count();\n        System.out.println("Count: " + count);\n        try {\n            stream.forEach(System.out::println);\n        } catch(IllegalStateException e) {\n            System.out.println("Error: " + e);\n        }\n        System.out.println("Creating new streams each time works:");\n        numbers.stream().forEach(n -> System.out.print(n + " "));\n        System.out.println();\n        int sum = numbers.stream().mapToInt(Integer::intValue).sum();\n        System.out.println("Sum: " + sum);\n        System.out.println("Always create fresh stream, do not store in field.");\n        Stream<Integer> lazyStream = numbers.stream().filter(n -> {\n            System.out.println("Filtering: " + n);\n            return n % 2 == 0;\n        });\n        System.out.println("Stream created, no filtering yet");\n        lazyStream.forEach(System.out::println);\n    }\n}',
  hint: "Streams are single-use; recreate or use supplier",
},
  {
  id: "stream_25",
  topicId: "stream",
  question: "Stream performance considerations and best practices.",
  mathSolution: "Choose right stream operations for optimal performance",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        long start = System.currentTimeMillis();\n        int sum1 = numbers.stream().mapToInt(Integer::intValue).sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Boxed sum: " + sum1 + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        int sum2 = IntStream.rangeClosed(1, 1_000_000).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Primitive sum: " + sum2 + ", time: " + (end-start) + "ms");\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David","Eve");\n        List<Integer> lengths1 = names.stream().map(String::length).filter(len -> len>3).collect(Collectors.toList());\n        List<Integer> lengths2 = names.stream().filter(name -> name.length()>3).map(String::length).collect(Collectors.toList());\n        System.out.println("Efficiency: filter before map reduces operations.");\n        List<Double> random1 = Stream.generate(Math::random).limit(5).collect(Collectors.toList());\n        boolean found = numbers.stream().anyMatch(n -> n>999_999);\n        List<Integer> largeList = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        start = System.currentTimeMillis();\n        long sumSeq = largeList.stream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Sequential: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumPar = largeList.parallelStream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Parallel: " + (end-start) + "ms");\n        List<Integer> sideEffect = new ArrayList<>();\n        numbers.stream().limit(100).forEach(sideEffect::add);\n        List<Integer> better = numbers.stream().limit(100).collect(Collectors.toList());\n        List<String> upper1 = names.stream().map(s -> s.toUpperCase()).collect(Collectors.toList());\n        List<String> upper2 = names.stream().map(String::toUpperCase).collect(Collectors.toList());\n        System.out.println("Use method references for readability.");\n    }\n}',
  hint: "Order operations wisely, use primitive streams, consider parallel for large data",
},
{
    "id": "stream_26",
    "topicId": "stream",
    "question": "Use Stream.iterate with a predicate (Java 9+) to generate numbers from 0 to 10 inclusive, stopping when condition fails. Print the numbers.",
    "mathSolution": "Stream.iterate(seed, hasNext, next) generates elements until predicate fails.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream.iterate(0, n -> n <= 10, n -> n + 1)\n              .forEach(System.out::println);\n    }\n}",
    "hint": "Stream.iterate(seed, predicate, next) creates finite stream."
  },
  {
    "id": "stream_27",
    "topicId": "stream",
    "question": "Use takeWhile and dropWhile (Java 9+) to take numbers less than 5 and then drop numbers less than 8 from a sorted list. Print results.",
    "mathSolution": "takeWhile takes elements while predicate true; dropWhile drops while true.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> taken = numbers.stream().takeWhile(n -> n < 5).collect(Collectors.toList());\n        List<Integer> dropped = numbers.stream().dropWhile(n -> n < 8).collect(Collectors.toList());\n        System.out.println(\"Taken (<5): \" + taken);\n        System.out.println(\"Dropped (<8): \" + dropped);\n    }\n}",
    "hint": "takeWhile and dropWhile are short-circuiting for ordered streams."
  },
  {
    "id": "stream_28",
    "topicId": "stream",
    "question": "Use Stream.concat to merge two streams of strings, then collect into a list. Print merged list.",
    "mathSolution": "Stream.concat merges two streams in order.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream<String> stream1 = Stream.of(\"A\", \"B\", \"C\");\n        Stream<String> stream2 = Stream.of(\"D\", \"E\", \"F\");\n        List<String> merged = Stream.concat(stream1, stream2).collect(Collectors.toList());\n        System.out.println(\"Merged: \" + merged);\n    }\n}",
    "hint": "concat creates a lazy concatenated stream."
  },
  {
    "id": "stream_29",
    "topicId": "stream",
    "question": "Use Stream.ofNullable (Java 9+) to create a stream from a possibly null list. If list is null, return empty stream; else stream its elements.",
    "mathSolution": "ofNullable returns empty stream if argument is null.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = null;\n        long count = Stream.ofNullable(list).flatMap(Collection::stream).count();\n        System.out.println(\"Count of elements from null list: \" + count);\n        list = Arrays.asList(\"X\", \"Y\", \"Z\");\n        count = Stream.ofNullable(list).flatMap(Collection::stream).count();\n        System.out.println(\"Count of elements from non-null list: \" + count);\n    }\n}",
    "hint": "ofNullable avoids null pointer exceptions."
  },
  {
    "id": "stream_30",
    "topicId": "stream",
    "question": "Use IntStream.range to generate numbers 1 to 10, box them to Integer, and collect into a list. Print the list.",
    "mathSolution": "range(start, endExclusive) generates primitive ints; boxed() converts to Stream<Integer>.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.range(1, 11).boxed().collect(Collectors.toList());\n        System.out.println(\"Numbers 1 to 10: \" + numbers);\n    }\n}",
    "hint": "Use boxed() to convert IntStream to Stream<Integer>."
  },
  {
    "id": "stream_31",
    "topicId": "stream",
    "question": "Use collect(Supplier, accumulator, combiner) to create a LinkedList from a stream of integers. Print the list.",
    "mathSolution": "Custom collector: supplier creates LinkedList, accumulator adds, combiner merges.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        LinkedList<Integer> list = Stream.of(5, 1, 9, 3, 7)\n            .collect(LinkedList::new, LinkedList::add, LinkedList::addAll);\n        System.out.println(\"LinkedList: \" + list);\n    }\n}",
    "hint": "Three-arg collect allows custom collection logic."
  },
  {
    "id": "stream_32",
    "topicId": "stream",
    "question": "Use DoubleStream to calculate the product of numbers 1.0 to 5.0 using reduce. Print the product.",
    "mathSolution": "reduce(identity, binaryOperator) combines elements.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        double product = DoubleStream.of(1.0, 2.0, 3.0, 4.0, 5.0)\n            .reduce(1.0, (a, b) -> a * b);\n        System.out.println(\"Product: \" + product);\n    }\n}",
    "hint": "DoubleStream.reduce with multiplication."
  },
  {
    "id": "stream_33",
    "topicId": "stream",
    "question": "Use Collectors.mapping to transform each string to its length and collect into a set. Print the set of lengths.",
    "mathSolution": "mapping applies a function before downstream collector.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"date\");\n        Set<Integer> lengths = words.stream()\n            .collect(Collectors.mapping(String::length, Collectors.toSet()));\n        System.out.println(\"Lengths: \" + lengths);\n    }\n}",
    "hint": "mapping is often used with groupingBy."
  },
  {
    "id": "stream_34",
    "topicId": "stream",
    "question": "Use flatMap to convert a list of sentences into a list of words (split by spaces). Print all words.",
    "mathSolution": "flatMap flattens Stream<String[]> into Stream<String>.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> sentences = Arrays.asList(\"Hello world\", \"Java streams\", \"flatMap example\");\n        List<String> words = sentences.stream()\n            .flatMap(s -> Arrays.stream(s.split(\" \")))\n            .collect(Collectors.toList());\n        System.out.println(\"Words: \" + words);\n    }\n}",
    "hint": "split returns array; Arrays.stream converts to stream."
  },
  {
    "id": "stream_35",
    "topicId": "stream",
    "question": "Find the first number greater than 10 in a list using filter and findFirst. If present, print; else print 'not found'.",
    "mathSolution": "filter(predicate).findFirst() returns Optional.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5, 8, 12, 3, 15);\n        numbers.stream()\n            .filter(n -> n > 10)\n            .findFirst()\n            .ifPresentOrElse(\n                n -> System.out.println(\"First >10: \" + n),\n                () -> System.out.println(\"Not found\")\n            );\n    }\n}",
    "hint": "ifPresentOrElse handles presence and absence."
  },
  {
    "id": "stream_36",
    "topicId": "stream",
    "question": "Check if all employee names are uppercase using allMatch on a list of strings. Print result.",
    "mathSolution": "allMatch checks if every element satisfies predicate.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"ALICE\", \"BOB\", \"CHARLIE\");\n        boolean allUpper = names.stream().allMatch(s -> s.equals(s.toUpperCase()));\n        System.out.println(\"All uppercase? \" + allUpper);\n        names = Arrays.asList(\"Alice\", \"BOB\", \"CHARLIE\");\n        allUpper = names.stream().allMatch(s -> s.equals(s.toUpperCase()));\n        System.out.println(\"All uppercase? \" + allUpper);\n    }\n}",
    "hint": "allMatch is short-circuiting."
  },
  {
    "id": "stream_37",
    "topicId": "stream",
    "question": "Generate the first 10 multiples of 3 using Stream.iterate and limit. Print them.",
    "mathSolution": "iterate with seed and unary operator, then limit.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream.iterate(3, n -> n + 3)\n              .limit(10)\n              .forEach(System.out::println);\n    }\n}",
    "hint": "Use limit to make infinite stream finite."
  },
  {
    "id": "stream_38",
    "topicId": "stream",
    "question": "Group a list of employees by department and then by city using two-level groupingBy. Print the result.",
    "mathSolution": "groupingBy with downstream groupingBy.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee {\n        String name; String dept; String city;\n        Employee(String n, String d, String c) { name=n; dept=d; city=c; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee(\"Alice\", \"IT\", \"NYC\"),\n            new Employee(\"Bob\", \"HR\", \"LA\"),\n            new Employee(\"Charlie\", \"IT\", \"NYC\"),\n            new Employee(\"David\", \"HR\", \"NYC\"),\n            new Employee(\"Eve\", \"IT\", \"LA\")\n        );\n        Map<String, Map<String, List<Employee>>> grouped = employees.stream()\n            .collect(Collectors.groupingBy(e -> e.dept,\n                     Collectors.groupingBy(e -> e.city)));\n        System.out.println(\"Grouped by dept then city: \" + grouped);\n    }\n}",
    "hint": "Nested groupingBy creates multi-level map."
  },
  {
    "id": "stream_39",
    "topicId": "stream",
    "question": "Find the employee with the highest salary using max with Comparator.comparingDouble. Print the employee name.",
    "mathSolution": "max returns Optional; use get() after checking presence.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Employee {\n        String name; double salary;\n        Employee(String n, double s) { name=n; salary=s; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee(\"Alice\", 75000),\n            new Employee(\"Bob\", 82000),\n            new Employee(\"Charlie\", 70000)\n        );\n        Employee highest = employees.stream()\n            .max(Comparator.comparingDouble(e -> e.salary))\n            .orElse(null);\n        System.out.println(\"Highest paid: \" + highest);\n    }\n}",
    "hint": "max returns Optional; handle with orElse."
  },
  {
    "id": "stream_40",
    "topicId": "stream",
    "question": "Compute the sum of squares of all even numbers from 1 to 10 using mapToInt and sum.",
    "mathSolution": "filter even, map to square, sum.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        int sumSquares = IntStream.rangeClosed(1, 10)\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .sum();\n        System.out.println(\"Sum of squares of evens: \" + sumSquares);\n    }\n}",
    "hint": "IntStream.sum() is a terminal operation."
  }
);