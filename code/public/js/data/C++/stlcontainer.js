QuizData.questions.push(
{
  id: 'cpp_stl_containers_1',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector to store and access elements.',
  mathSolution: 'vector is dynamic array with random access.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40, 50};\n    \n    numbers.push_back(60);\n    numbers.push_back(70);\n    \n    cout << "First element: " << numbers[0] << endl;\n    cout << "Last element: " << numbers.back() << endl;\n    cout << "Size: " << numbers.size() << endl;\n    \n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'vector provides dynamic array functionality with O(1) amortized push_back.'
},
{
  id: 'cpp_stl_containers_2',
  topicId: 'cpp_stl_containers',
  question: 'Use std::list for efficient insertion at any position.',
  mathSolution: 'list is doubly-linked list with O(1) insertion/removal.',
  codeSolution: '#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> numbers = {10, 20, 30, 40, 50};\n    \n    numbers.push_front(5);\n    numbers.push_back(55);\n    \n    auto it = numbers.begin();\n    advance(it, 3);\n    numbers.insert(it, 25);\n    \n    cout << "List elements: ";\n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "First element: " << numbers.front() << endl;\n    cout << "Last element: " << numbers.back() << endl;\n    \n    return 0;\n}',
  hint: 'list provides constant time insertion/deletion anywhere, but no random access.'
},
{
  id: 'cpp_stl_containers_3',
  topicId: 'cpp_stl_containers',
  question: 'Use std::deque for double-ended queue operations.',
  mathSolution: 'deque allows O(1) push/pop at both ends.',
  codeSolution: '#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<int> dq;\n    \n    dq.push_back(10);\n    dq.push_back(20);\n    dq.push_front(5);\n    dq.push_front(1);\n    \n    cout << "Deque elements: ";\n    for (int n : dq) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "Front: " << dq.front() << endl;\n    cout << "Back: " << dq.back() << endl;\n    \n    dq.pop_front();\n    dq.pop_back();\n    \n    cout << "After pop: ";\n    for (int n : dq) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'deque is ideal for queues and double-ended operations.'
},
{
  id: 'cpp_stl_containers_4',
  topicId: 'cpp_stl_containers',
  question: 'Use std::array for fixed-size array.',
  mathSolution: 'array wraps C-style array with STL interface.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\nint main() {\n    array<int, 5> arr = {10, 20, 30, 40, 50};\n    \n    cout << "Size: " << arr.size() << endl;\n    cout << "First: " << arr.front() << endl;\n    cout << "Last: " << arr.back() << endl;\n    cout << "Element at index 2: " << arr.at(2) << endl;\n    \n    arr.fill(0);\n    cout << "After fill: ";\n    for (int n : arr) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'array has fixed size known at compile time, with bounds checking via at().'
},
{
  id: 'cpp_stl_containers_5',
  topicId: 'cpp_stl_containers',
  question: 'Use std::stack for LIFO operations.',
  mathSolution: 'stack is container adapter providing LIFO access.',
  codeSolution: '#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> s;\n    \n    s.push(10);\n    s.push(20);\n    s.push(30);\n    \n    cout << "Top: " << s.top() << endl;\n    cout << "Size: " << s.size() << endl;\n    \n    while (!s.empty()) {\n        cout << s.top() << " ";\n        s.pop();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'stack provides LIFO (Last-In-First-Out) access.'
},
{
  id: 'cpp_stl_containers_6',
  topicId: 'cpp_stl_containers',
  question: 'Use std::queue for FIFO operations.',
  mathSolution: 'queue provides FIFO (First-In-First-Out) access.',
  codeSolution: '#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    \n    q.push(10);\n    q.push(20);\n    q.push(30);\n    \n    cout << "Front: " << q.front() << endl;\n    cout << "Back: " << q.back() << endl;\n    cout << "Size: " << q.size() << endl;\n    \n    while (!q.empty()) {\n        cout << q.front() << " ";\n        q.pop();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'queue provides FIFO (First-In-First-Out) access.'
},
{
  id: 'cpp_stl_containers_7',
  topicId: 'cpp_stl_containers',
  question: 'Use std::priority_queue for heap-based priority queue.',
  mathSolution: 'priority_queue gives largest element first by default.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint main() {\n    priority_queue<int> pq;\n    \n    pq.push(30);\n    pq.push(10);\n    pq.push(50);\n    pq.push(20);\n    pq.push(40);\n    \n    cout << "Elements in priority order: ";\n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl;\n    \n    // Min-heap\n    priority_queue<int, vector<int>, greater<int>> minHeap;\n    minHeap.push(30);\n    minHeap.push(10);\n    minHeap.push(50);\n    \n    cout << "Min-heap: ";\n    while (!minHeap.empty()) {\n        cout << minHeap.top() << " ";\n        minHeap.pop();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'priority_queue is a max-heap by default; use greater<int> for min-heap.'
},
{
  id: 'cpp_stl_containers_8',
  topicId: 'cpp_stl_containers',
  question: 'Use std::set for sorted unique elements.',
  mathSolution: 'set stores unique elements in sorted order (typically RB-tree).',
  codeSolution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s;\n    \n    s.insert(30);\n    s.insert(10);\n    s.insert(50);\n    s.insert(20);\n    s.insert(40);\n    s.insert(30);  // Duplicate ignored\n    \n    cout << "Set elements (sorted unique): ";\n    for (int n : s) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "Size: " << s.size() << endl;\n    \n    if (s.find(20) != s.end()) {\n        cout << "20 found in set" << endl;\n    }\n    \n    s.erase(30);\n    cout << "After erasing 30: ";\n    for (int n : s) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'set maintains sorted unique elements with O(log n) operations.'
},
{
  "id": "cpp_stl_containers_9",
  "topicId": "cpp_stl_containers",
  "question": "Use std::map for key-value pairs (ordered).",
  "mathSolution": "map stores key-value pairs sorted by key.",
  "codeSolution": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> ages;\n    \n    ages[\"Alice\"] = 25;\n    ages[\"Bob\"] = 30;\n    ages[\"Charlie\"] = 35;\n    ages[\"David\"] = 28;\n    \n    cout << \"Map elements (sorted by key):\\n\";\n    for (const auto& pair : ages) {\n        cout << pair.first << \": \" << pair.second << endl;\n    }\n    \n    cout << \"Bob's age: \" << ages[\"Bob\"] << endl;\n    \n    if (ages.find(\"Eve\") == ages.end()) {\n        cout << \"Eve not found\" << endl;\n    }\n    \n    ages.insert({\"Eve\", 22});\n    cout << \"After insert, size: \" << ages.size() << endl;\n    \n    return 0;\n}",
  "hint": "map maintains keys in sorted order with O(log n) access."
},
{
  id: 'cpp_stl_containers_10',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_set for hash-based unique elements.',
  mathSolution: 'unordered_set provides O(1) average-time operations.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    unordered_set<int> us;\n    \n    us.insert(30);\n    us.insert(10);\n    us.insert(50);\n    us.insert(20);\n    us.insert(40);\n    us.insert(30);  // Duplicate ignored\n    \n    cout << "Unordered set elements: ";\n    for (int n : us) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "Size: " << us.size() << endl;\n    cout << "Load factor: " << us.load_factor() << endl;\n    \n    if (us.find(20) != us.end()) {\n        cout << "20 found" << endl;\n    }\n    \n    us.erase(30);\n    cout << "After erase, size: " << us.size() << endl;\n    \n    return 0;\n}',
  hint: 'unordered_set uses hashing for O(1) average-time operations.'
},
{
  "id": "cpp_stl_containers_11",
  "topicId": "cpp_stl_containers",
  "question": "Use std::unordered_map for hash-based key-value pairs.",
  "mathSolution": "unordered_map provides O(1) average-time access.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    unordered_map<string, int> umap;\n    \n    umap[\"Alice\"] = 25;\n    umap[\"Bob\"] = 30;\n    umap[\"Charlie\"] = 35;\n    \n    cout << \"Unordered map elements:\\n\";\n    for (const auto& pair : umap) {\n        cout << pair.first << \": \" << pair.second << endl;\n    }\n    \n    cout << \"Alice's age: \" << umap[\"Alice\"] << endl;\n    \n    if (umap.find(\"Bob\") != umap.end()) {\n        cout << \"Bob found\" << endl;\n    }\n    \n    cout << \"Size: \" << umap.size() << endl;\n    cout << \"Bucket count: \" << umap.bucket_count() << endl;\n    \n    return 0;\n}",
  "hint": "unordered_map offers fast key-value lookup using hashing."
},
{
  id: 'cpp_stl_containers_12',
  topicId: 'cpp_stl_containers',
  question: 'Use std::multiset for sorted non-unique elements.',
  mathSolution: 'multiset allows duplicate elements in sorted order.',
  codeSolution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    multiset<int> ms;\n    \n    ms.insert(30);\n    ms.insert(10);\n    ms.insert(30);\n    ms.insert(20);\n    ms.insert(30);\n    ms.insert(40);\n    \n    cout << "Multiset elements: ";\n    for (int n : ms) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "Count of 30: " << ms.count(30) << endl;\n    \n    auto range = ms.equal_range(30);\n    cout << "Range of 30: ";\n    for (auto it = range.first; it != range.second; ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    ms.erase(ms.find(30));  // Erase one occurrence\n    cout << "After erasing one 30: ";\n    for (int n : ms) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'multiset allows duplicates while maintaining sort order.'
},
{
  id: 'cpp_stl_containers_13',
  topicId: 'cpp_stl_containers',
  question: 'Use std::multimap for duplicate-key key-value pairs.',
  mathSolution: 'multimap allows multiple values for same key.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    multimap<string, int> mmap;\n    \n    mmap.insert({"Alice", 25});\n    mmap.insert({"Bob", 30});\n    mmap.insert({"Alice", 26});\n    mmap.insert({"Bob", 31});\n    mmap.insert({"Alice", 27});\n    \n    cout << "Multimap elements:\\n";\n    for (const auto& [name, age] : mmap) {\n        cout << name << ": " << age << endl;\n    }\n    \n    cout << "All ages for Alice:\\n";\n    auto range = mmap.equal_range("Alice");\n    for (auto it = range.first; it != range.second; ++it) {\n        cout << it->second << " ";\n    }\n    cout << endl;\n    \n    cout << "Count of Alice: " << mmap.count("Alice") << endl;\n    \n    return 0;\n}',
  hint: 'multimap allows duplicate keys while maintaining sorted order.'
},
{
  id: 'cpp_stl_containers_14',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_multiset for hash-based duplicates.',
  mathSolution: 'unordered_multiset allows duplicates with hashing.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    unordered_multiset<int> ums;\n    \n    ums.insert(10);\n    ums.insert(20);\n    ums.insert(10);\n    ums.insert(30);\n    ums.insert(20);\n    ums.insert(10);\n    \n    cout << "Unordered multiset elements: ";\n    for (int n : ums) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    cout << "Count of 10: " << ums.count(10) << endl;\n    \n    auto range = ums.equal_range(10);\n    cout << "Range of 10: ";\n    for (auto it = range.first; it != range.second; ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    ums.erase(ums.find(10));  // Erase one occurrence\n    cout << "Count of 10 after erase one: " << ums.count(10) << endl;\n    \n    return 0;\n}',
  hint: 'unordered_multiset provides O(1) average-time operations with duplicates.'
},
{
  id: 'cpp_stl_containers_15',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_multimap for hash-based key-value with duplicates.',
  mathSolution: 'unordered_multimap allows duplicate keys with hashing.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    unordered_multimap<string, int> ummap;\n    \n    ummap.insert({"Alice", 25});\n    ummap.insert({"Bob", 30});\n    ummap.insert({"Alice", 26});\n    ummap.insert({"Bob", 31});\n    ummap.insert({"Alice", 27});\n    \n    cout << "Unordered multimap elements:\\n";\n    for (const auto& [name, age] : ummap) {\n        cout << name << ": " << age << endl;\n    }\n    \n    cout << "All ages for Alice:\\n";\n    auto range = ummap.equal_range("Alice");\n    for (auto it = range.first; it != range.second; ++it) {\n        cout << it->second << " ";\n    }\n    cout << endl;\n    \n    cout << "Count of Alice: " << ummap.count("Alice") << endl;\n    \n    return 0;\n}',
  hint: 'unordered_multimap allows duplicate keys with hash-based access.'
},
{
  id: 'cpp_stl_containers_16',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with reserve and capacity for optimization.',
  mathSolution: 'reserve pre-allocates memory to avoid reallocations.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    \n    cout << "Initial size: " << v.size() << ", capacity: " << v.capacity() << endl;\n    \n    v.reserve(100);\n    cout << "After reserve(100): capacity: " << v.capacity() << endl;\n    \n    for (int i = 0; i < 100; i++) {\n        v.push_back(i);\n    }\n    \n    cout << "After 100 pushes, size: " << v.size() << ", capacity: " << v.capacity() << endl;\n    \n    v.shrink_to_fit();\n    cout << "After shrink_to_fit, capacity: " << v.capacity() << endl;\n    \n    return 0;\n}',
  hint: 'reserve() pre-allocates capacity, shrink_to_fit() reduces memory usage.'
},
{
  id: 'cpp_stl_containers_17',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with emplace_back for in-place construction.',
  mathSolution: 'emplace_back constructs element in place, avoiding copy.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n    Person(string n, int a) : name(n), age(a) {\n        cout << "Person constructed: " << name << endl;\n    }\n};\n\nint main() {\n    vector<Person> people;\n    \n    cout << "Using push_back (copies):" << endl;\n    people.push_back(Person("Alice", 25));\n    \n    cout << "\\nUsing emplace_back (constructs in place):" << endl;\n    people.emplace_back("Bob", 30);\n    people.emplace_back("Charlie", 35);\n    \n    cout << "\\nPeople list:" << endl;\n    for (const auto& p : people) {\n        cout << p.name << ": " << p.age << endl;\n    }\n    \n    return 0;\n}',
  hint: 'emplace_back forwards arguments to constructor, avoiding temporary objects.'
},
{
  id: 'cpp_stl_containers_18',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with insert and erase operations.',
  mathSolution: 'insert adds elements at position, erase removes elements.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    \n    cout << "Original: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    v.insert(v.begin() + 2, 99);\n    cout << "After insert at position 2: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    v.erase(v.begin() + 4);\n    cout << "After erase at position 4: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    v.erase(v.begin(), v.begin() + 2);\n    cout << "After erasing first 2 elements: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'insert and erase shift elements, O(n) for vector.'
},
{
  id: 'cpp_stl_containers_19',
  topicId: 'cpp_stl_containers',
  question: 'Use std::list with splice to move elements between lists.',
  mathSolution: 'splice transfers elements from one list to another.',
  codeSolution: '#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> list1 = {1, 2, 3, 4, 5};\n    list<int> list2 = {6, 7, 8, 9, 10};\n    \n    cout << "list1: ";\n    for (int x : list1) cout << x << " ";\n    cout << endl;\n    \n    cout << "list2: ";\n    for (int x : list2) cout << x << " ";\n    cout << endl;\n    \n    auto it = list1.begin();\n    advance(it, 2);\n    list1.splice(it, list2);\n    \n    cout << "After splicing list2 into list1 at position 2:\\n";\n    cout << "list1: ";\n    for (int x : list1) cout << x << " ";\n    cout << endl;\n    cout << "list2 (empty): " << list2.size() << endl;\n    \n    return 0;\n}',
  hint: 'splice transfers elements without copying, O(1) for list.'
},
{
  id: 'cpp_stl_containers_20',
  topicId: 'cpp_stl_containers',
  question: 'Use std::list with remove_if to conditionally remove elements.',
  mathSolution: 'remove_if removes elements satisfying predicate.',
  codeSolution: '#include <iostream>\n#include <list>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    list<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    cout << "Original: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    numbers.remove_if([](int n) { return n % 2 == 0; });\n    \n    cout << "After removing evens: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    numbers.remove_if([](int n) { return n < 5; });\n    \n    cout << "After removing numbers < 5: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'list::remove_if is efficient O(n), unlike std::remove_if which needs erase.'
},
{
  id: 'cpp_stl_containers_21',
  topicId: 'cpp_stl_containers',
  question: 'Use std::set with custom comparator for reverse order.',
  mathSolution: 'set can use custom comparator for ordering.',
  codeSolution: '#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Default ascending order\n    set<int> asc = {5, 2, 8, 1, 9};\n    cout << "Ascending: ";\n    for (int n : asc) cout << n << " ";\n    cout << endl;\n    \n    // Descending order\n    set<int, greater<int>> desc = {5, 2, 8, 1, 9};\n    cout << "Descending: ";\n    for (int n : desc) cout << n << " ";\n    cout << endl;\n    \n    // Custom comparator for strings by length\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    set<string, decltype(cmp)> byLength(cmp);\n    \n    byLength.insert("apple");\n    byLength.insert("banana");\n    byLength.insert("kiwi");\n    byLength.insert("strawberry");\n    \n    cout << "Strings by length: ";\n    for (const auto& s : byLength) {\n        cout << s << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Custom comparators allow different ordering strategies for associative containers.'
},
{
  id: 'cpp_stl_containers_22',
  topicId: 'cpp_stl_containers',
  question: 'Use std::map with custom comparator for non-default ordering.',
  mathSolution: 'map comparator defines key ordering.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Default ascending by key\n    map<string, int> defaultMap;\n    defaultMap[\"apple\"] = 1;\n    defaultMap[\"banana\"] = 2;\n    defaultMap[\"cherry\"] = 3;\n    \n    cout << "Default order: \";\n    for (const auto& [key, val] : defaultMap) {\n        cout << key << \" \";\n    }\n    cout << endl;\n    \n    // Descending order\n    map<string, int, greater<string>> descMap;\n    descMap[\"apple\"] = 1;\n    descMap[\"banana\"] = 2;\n    descMap[\"cherry\"] = 3;\n    \n    cout << \"Descending order: \";\n    for (const auto& [key, val] : descMap) {\n        cout << key << \" \";\n    }\n    cout << endl;\n    \n    // Custom comparator by string length\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    map<string, int, decltype(cmp)> lengthMap(cmp);\n    lengthMap[\"cat\"] = 1;\n    lengthMap[\"rabbit\"] = 2;\n    lengthMap[\"elephant\"] = 3;\n    \n    cout << \"Ordered by length: \";\n    for (const auto& [key, val] : lengthMap) {\n        cout << key << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Custom comparators in map control key ordering.'
},
{
  id: 'cpp_stl_containers_23',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_set with custom hash function.',
  mathSolution: 'Custom hash function enables hashing of user-defined types.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n    \n    bool operator==(const Person& other) const {\n        return name == other.name && age == other.age;\n    }\n};\n\nstruct PersonHash {\n    size_t operator()(const Person& p) const {\n        return hash<string>()(p.name) ^ (hash<int>()(p.age) << 1);\n    }\n};\n\nint main() {\n    unordered_set<Person, PersonHash> people;\n    \n    people.insert({\"Alice\", 25});\n    people.insert({\"Bob\", 30});\n    people.insert({\"Alice\", 25});  // Duplicate\n    \n    cout << \"Number of people: \" << people.size() << endl;\n    \n    for (const auto& p : people) {\n        cout << p.name << \": \" << p.age << endl;\n    }\n    \n    // Using built-in hash for strings\n    unordered_set<string> words = {\"apple\", \"banana\", \"cherry\"};\n    cout << \"Words: \";\n    for (const auto& w : words) cout << w << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Custom hash functions enable custom types in unordered containers.'
},
{
  id: 'cpp_stl_containers_24',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_map with custom hash and equality.',
  mathSolution: 'Custom hash enables complex keys in unordered_map.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nstruct Point {\n    int x, y;\n    \n    bool operator==(const Point& other) const {\n        return x == other.x && y == other.y;\n    }\n};\n\nstruct PointHash {\n    size_t operator()(const Point& p) const {\n        return hash<int>()(p.x) ^ (hash<int>()(p.y) << 1);\n    }\n};\n\nint main() {\n    unordered_map<Point, string, PointHash> points;\n    \n    points[{0, 0}] = \"Origin\";\n    points[{1, 0}] = \"X-axis\";\n    points[{0, 1}] = \"Y-axis\";\n    points[{1, 1}] = \"Unit point\";\n    \n    for (const auto& [point, name] : points) {\n        cout << \"(\" << point.x << \",\" << point.y << \"): \" << name << endl;\n    }\n    \n    // Using custom hash function\n    unordered_map<string, int> wordCount;\n    wordCount[\"hello\"]++;\n    wordCount[\"world\"]++;\n    wordCount[\"hello\"]++;\n    \n    cout << \"Word counts: \";\n    for (const auto& [word, count] : wordCount) {\n        cout << word << \":\" << count << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Custom hash and equality enable complex keys in unordered containers.'
},
{
  id: 'cpp_stl_containers_25',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with data() for C-style array access.',
  mathSolution: 'data() returns pointer to underlying array.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    \n    // Access raw array\n    int* raw = v.data();\n    cout << \"First element via raw pointer: \" << *raw << endl;\n    \n    // Use with C functions\n    sort(raw, raw + v.size());\n    cout << \"Sorted: \";\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    \n    // Modify through pointer\n    raw[2] = 99;\n    cout << \"After modification: \";\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    \n    // Use with algorithms expecting pointers\n    int sum = accumulate(raw, raw + v.size(), 0);\n    cout << \"Sum: \" << sum << endl;\n    \n    return 0;\n}',
  hint: 'data() provides direct access to underlying contiguous memory.'
},
{
  id: 'cpp_stl_containers_26',
  topicId: 'cpp_stl_containers',
  question: 'Use std::array as function parameter with size safety.',
  mathSolution: 'array preserves size information when passed to functions.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\ntemplate<size_t N>\nvoid printArray(const array<int, N>& arr) {\n    cout << \"Array size: \" << N << \", elements: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n}\n\ntemplate<size_t N>\nvoid doubleArray(array<int, N>& arr) {\n    for (int& x : arr) x *= 2;\n}\n\nint main() {\n    array<int, 5> arr1 = {1, 2, 3, 4, 5};\n    array<int, 3> arr2 = {10, 20, 30};\n    \n    printArray(arr1);\n    printArray(arr2);\n    \n    doubleArray(arr1);\n    printArray(arr1);\n    \n    // Compare arrays\n    if (arr1 > arr2) {\n        cout << \"arr1 is lexicographically greater\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'array maintains size information, unlike C-style arrays.'
},
{
  id: 'cpp_stl_containers_27',
  topicId: 'cpp_stl_containers',
  question: 'Use std::tuple to group heterogeneous values.',
  mathSolution: 'tuple stores multiple values of different types.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\nint main() {\n    tuple<int, double, string> t1(42, 3.14, \"Hello\");\n    auto t2 = make_tuple(100, 2.718, \"World\");\n    \n    cout << \"t1 elements: \";\n    cout << get<0>(t1) << \", \" << get<1>(t1) << \", \" << get<2>(t1) << endl;\n    \n    get<1>(t1) = 2.71828;\n    cout << \"Modified t1: \" << get<1>(t1) << endl;\n    \n    // Structured binding (C++17)\n    auto [num, pi, msg] = t2;\n    cout << \"Unpacked t2: \" << num << \", \" << pi << \", \" << msg << endl;\n    \n    cout << \"Tuple size: \" << tuple_size<decltype(t1)>::value << endl;\n    \n    // Concatenate tuples\n    auto t3 = tuple_cat(t1, t2);\n    cout << \"Concatenated size: \" << tuple_size<decltype(t3)>::value << endl;\n    \n    return 0;\n}',
  hint: 'tuple groups heterogeneous values, similar to std::pair for more than 2 elements.'
},
{
  id: 'cpp_stl_containers_28',
  topicId: 'cpp_stl_containers',
  question: 'Use std::pair for key-value pairs.',
  mathSolution: 'pair stores two values of possibly different types.',
  codeSolution: '#include <iostream>\n#include <utility>\n#include <string>\nusing namespace std;\n\nint main() {\n    pair<int, string> p1(1, \"Apple\");\n    pair<int, string> p2 = {2, \"Banana\"};\n    auto p3 = make_pair(3, \"Cherry\");\n    \n    cout << \"p1: \" << p1.first << \", \" << p1.second << endl;\n    cout << \"p2: \" << p2.first << \", \" << p2.second << endl;\n    cout << \"p3: \" << p3.first << \", \" << p3.second << endl;\n    \n    // Comparison operators\n    if (p1 < p2) {\n        cout << \"p1 comes before p2\" << endl;\n    }\n    \n    // Structured binding\n    auto [id, name] = p3;\n    cout << \"Unpacked: \" << id << \": \" << name << endl;\n    \n    return 0;\n}',
  hint: 'pair is fundamental for map and other associative container elements.'
},
{
  id: 'cpp_stl_containers_29',
  topicId: 'cpp_stl_containers',
  question: 'Use std::optional for optional values.',
  mathSolution: 'optional represents value that may or may not exist.',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\n#include <vector>\nusing namespace std;\n\noptional<int> findValue(const vector<int>& vec, int target) {\n    for (int val : vec) {\n        if (val == target) return val;\n    }\n    return nullopt;\n}\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40, 50};\n    \n    auto found = findValue(numbers, 30);\n    if (found.has_value()) {\n        cout << \"Found: \" << found.value() << endl;\n    }\n    \n    auto notFound = findValue(numbers, 99);\n    cout << \"Value or default: \" << notFound.value_or(-1) << endl;\n    \n    // Optional with transformation\n    optional<string> maybeName = \"Alice\";\n    if (maybeName) {\n        cout << \"Name length: \" << maybeName->length() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'optional provides type-safe optional values, avoiding sentinel values.'
},
{
  id: 'cpp_stl_containers_30',
  topicId: 'cpp_stl_containers',
  question: 'Use std::variant for type-safe union.',
  mathSolution: 'variant holds one of several possible types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    data = 42;\n    cout << \"Holds int: \" << get<int>(data) << endl;\n    \n    data = 3.14;\n    cout << \"Holds double: \" << get<double>(data) << endl;\n    \n    data = \"Hello\";\n    cout << \"Holds string: \" << get<string>(data) << endl;\n    \n    // Type checking\n    if (holds_alternative<string>(data)) {\n        cout << \"Currently holds a string\" << endl;\n    }\n    \n    // Visitor pattern\n    auto visitor = [](auto&& arg) {\n        cout << \"Visitor: \" << arg << endl;\n    };\n    visit(visitor, data);\n    \n    // Get with default\n    string* str = get_if<string>(&data);\n    if (str) cout << \"String value: \" << *str << endl;\n    \n    return 0;\n}',
  hint: 'variant provides type-safe unions for C++17 and later.'
},
{
  id: 'cpp_stl_containers_31',
  topicId: 'cpp_stl_containers',
  question: 'Use std::any for type-erased value storage.',
  mathSolution: 'any can store any copyable type.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    value = 42;\n    cout << \"Integer: \" << any_cast<int>(value) << endl;\n    \n    value = 3.14;\n    cout << \"Double: \" << any_cast<double>(value) << endl;\n    \n    value = string(\"Hello\");\n    cout << \"String: \" << any_cast<string>(value) << endl;\n    \n    // Type checking\n    if (value.type() == typeid(string)) {\n        cout << \"Contains string\" << endl;\n    }\n    \n    // Safe access\n    if (auto ptr = any_cast<string>(&value)) {\n        cout << \"Safe access: \" << *ptr << endl;\n    }\n    \n    value.reset();\n    cout << \"Has value: \" << value.has_value() << endl;\n    \n    return 0;\n}',
  hint: 'any provides type-erased storage for any copyable type.'
},
{
  id: 'cpp_stl_containers_32',
  topicId: 'cpp_stl_containers',
  question: 'Use std::initializer_list for initializer list constructors.',
  mathSolution: 'initializer_list allows initializing containers with brace lists.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <initializer_list>\nusing namespace std;\n\nclass Container {\nprivate:\n    vector<int> data;\npublic:\n    Container(initializer_list<int> list) : data(list) {}\n    \n    void display() {\n        for (int x : data) cout << x << \" \";\n        cout << endl;\n    }\n};\n\nvoid printNumbers(initializer_list<int> nums) {\n    cout << \"Numbers: \";\n    for (int n : nums) cout << n << \" \";\n    cout << endl;\n}\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};  // Uses initializer_list\n    Container c = {10, 20, 30, 40, 50};\n    \n    c.display();\n    printNumbers({1, 2, 3});\n    printNumbers({10, 20, 30, 40, 50});\n    \n    // Aggregate initialization\n    int arr[] = {1, 2, 3, 4, 5};\n    \n    return 0;\n}',
  hint: 'initializer_list enables uniform initialization syntax.'
},
{
  id: 'cpp_stl_containers_33',
  topicId: 'cpp_stl_containers',
  question: 'Use std::span for non-owning view of contiguous data (C++20).',
  mathSolution: 'span provides view over contiguous sequence.',
  codeSolution: '#include <iostream>\n#include <span>\n#include <vector>\nusing namespace std;\n\nvoid process(span<int> data) {\n    cout << \"Processing \" << data.size() << \" elements: \";\n    for (int& x : data) {\n        x *= 2;\n        cout << x << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    vector<int> vec = {6, 7, 8, 9, 10};\n    \n    process(arr);\n    process(vec);\n    \n    // Subspan\n    span<int> full(arr);\n    span<int> sub = full.subspan(1, 3);\n    cout << \"Subspan: \";\n    for (int x : sub) cout << x << \" \";\n    cout << endl;\n    \n    // Dynamic and static extent\n    span<int, 5> staticSpan(arr);\n    cout << \"Static span size: \" << staticSpan.size() << endl;\n    \n    return 0;\n}',
  hint: 'span provides a non-owning view, useful for function parameters.'
},
{
  "id": "cpp_stl_containers_34",
  "topicId": "cpp_stl_containers",
  "question": "Use std::string as a container of characters.",
  "mathSolution": "string provides character container with string operations.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string str = \"Hello World\";\n    \n    cout << \"String: \" << str << endl;\n    cout << \"Length: \" << str.length() << endl;\n    cout << \"First char: \" << str[0] << endl;\n    cout << \"Last char: \" << str.back() << endl;\n    \n    str.push_back('!');\n    cout << \"After push: \" << str << endl;\n    \n    str += \" Welcome\";\n    cout << \"After append: \" << str << endl;\n    \n    // String as container\n    sort(str.begin(), str.end());\n    cout << \"Sorted: \" << str << endl;\n    \n    // Finding substring\n    size_t pos = str.find(\"World\");\n    if (pos != string::npos) {\n        cout << \"Found at position \" << pos << endl;\n    }\n    \n    return 0;\n}",
  "hint": "string is a specialized container for characters with string-specific operations."
},
{
  id: 'cpp_stl_containers_35',
  topicId: 'cpp_stl_containers',
  question: 'Use container adapters with underlying container specification.',
  mathSolution: 'Container adapters can use different underlying containers.',
  codeSolution: '#include <iostream>\n#include <stack>\n#include <queue>\n#include <vector>\n#include <list>\nusing namespace std;\n\nint main() {\n    // Stack using vector\n    stack<int, vector<int>> vecStack;\n    vecStack.push(10);\n    vecStack.push(20);\n    cout << \"Stack using vector top: \" << vecStack.top() << endl;\n    \n    // Stack using deque (default)\n    stack<int> defaultStack;\n    defaultStack.push(30);\n    cout << \"Default stack top: \" << defaultStack.top() << endl;\n    \n    // Queue using list\n    queue<int, list<int>> listQueue;\n    listQueue.push(1);\n    listQueue.push(2);\n    cout << \"Queue using list front: \" << listQueue.front() << endl;\n    \n    // Priority queue using vector (default)\n    priority_queue<int> pq;\n    pq.push(5);\n    pq.push(1);\n    pq.push(9);\n    cout << \"Priority queue top: \" << pq.top() << endl;\n    \n    return 0;\n}',
  hint: 'Container adapters can use different underlying containers for performance tuning.'
},
{
  id: 'cpp_stl_containers_36',
  topicId: 'cpp_stl_containers',
  question: 'Use std::bitset for fixed-size bit manipulation.',
  mathSolution: 'bitset provides efficient bit operations.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nint main() {\n    bitset<8> b1(0b10101010);\n    bitset<8> b2(string(\"11001100\"));\n    \n    cout << \"b1: \" << b1 << endl;\n    cout << \"b2: \" << b2 << endl;\n    \n    cout << \"b1 & b2: \" << (b1 & b2) << endl;\n    cout << \"b1 | b2: \" << (b1 | b2) << endl;\n    cout << \"b1 ^ b2: \" << (b1 ^ b2) << endl;\n    cout << \"~b1: \" << (~b1) << endl;\n    \n    cout << \"b1[0]: \" << b1[0] << endl;\n    cout << \"b1 count: \" << b1.count() << endl;\n    cout << \"b1 size: \" << b1.size() << endl;\n    cout << \"b1 any: \" << b1.any() << endl;\n    cout << \"b1 none: \" << b1.none() << endl;\n    \n    b1.set(3);\n    b1.reset(2);\n    b1.flip(0);\n    cout << \"After modifications: \" << b1 << endl;\n    \n    return 0;\n}',
  hint: 'bitset is efficient for fixed-size bit sets with compile-time size.'
},
{
  id: 'cpp_stl_containers_37',
  topicId: 'cpp_stl_containers',
  question: 'Use std::forward_list for singly-linked list.',
  mathSolution: 'forward_list is singly-linked list with minimal overhead.',
  codeSolution: '#include <iostream>\n#include <forward_list>\nusing namespace std;\n\nint main() {\n    forward_list<int> fl = {1, 2, 3, 4, 5};\n    \n    fl.push_front(0);\n    cout << \"After push_front: \";\n    for (int n : fl) cout << n << \" \";\n    cout << endl;\n    \n    auto it = fl.before_begin();\n    advance(it, 2);\n    fl.insert_after(it, 99);\n    \n    cout << \"After insert_after: \";\n    for (int n : fl) cout << n << \" \";\n    cout << endl;\n    \n    fl.remove_if([](int n) { return n % 2 == 0; });\n    \n    cout << \"After removing evens: \";\n    for (int n : fl) cout << n << \" \";\n    cout << endl;\n    \n    fl.reverse();\n    cout << \"Reversed: \";\n    for (int n : fl) cout << n << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'forward_list has minimal overhead but only forward iteration.'
},
{
  id: 'cpp_stl_containers_38',
  topicId: 'cpp_stl_containers',
  question: 'Use std::deque for efficient insertion at both ends.',
  mathSolution: 'deque allows O(1) push/pop at both ends and random access.',
  codeSolution: '#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<int> dq;\n    \n    // Add elements at both ends\n    for (int i = 1; i <= 5; i++) {\n        dq.push_back(i * 10);\n        dq.push_front(i);\n    }\n    \n    cout << \"Deque elements: \";\n    for (int n : dq) cout << n << \" \";\n    cout << endl;\n    \n    cout << \"Front: \" << dq.front() << \", Back: \" << dq.back() << endl;\n    \n    // Random access\n    cout << \"Element at index 3: \" << dq[3] << endl;\n    \n    dq.pop_front();\n    dq.pop_back();\n    \n    cout << \"After pop front and back: \";\n    for (int n : dq) cout << n << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'deque provides efficient insertion/deletion at both ends.'
},
{
  id: 'cpp_stl_containers_39',
  topicId: 'cpp_stl_containers',
  question: 'Use std::set lower_bound and upper_bound for range queries.',
  mathSolution: 'lower_bound/upper_bound find range of values in sorted container.',
  codeSolution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s = {10, 20, 30, 40, 50, 60, 70, 80, 90};\n    \n    cout << \"Set elements: \";\n    for (int n : s) cout << n << \" \";\n    cout << endl;\n    \n    auto low = s.lower_bound(35);\n    auto up = s.upper_bound(65);\n    \n    cout << \"Elements between 35 and 65: \";\n    for (auto it = low; it != up; ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n    \n    // Using equal_range\n    auto range = s.equal_range(40);\n    cout << \"Equal range of 40: \";\n    for (auto it = range.first; it != range.second; ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'lower_bound/upper_bound find range of values in sorted associative containers.'
},
{
  id: 'cpp_stl_containers_40',
  topicId: 'cpp_stl_containers',
  question: 'Use std::map with try_emplace for efficient insertion.',
  mathSolution: 'try_emplace avoids unnecessary construction of keys.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> ages;\n    \n    // Insert with try_emplace (C++17)\n    auto [it1, inserted1] = ages.try_emplace(\"Alice\", 25);\n    cout << \"Alice inserted: \" << inserted1 << endl;\n    \n    auto [it2, inserted2] = ages.try_emplace(\"Alice\", 30);\n    cout << \"Alice inserted again: \" << inserted2 << endl;\n    \n    // insert vs try_emplace\n    ages.insert({\"Bob\", 30});\n    ages.emplace(\"Charlie\", 35);\n    \n    cout << \"Map contents:\" << endl;\n    for (const auto& [name, age] : ages) {\n        cout << name << \": \" << age << endl;\n    }\n    \n    return 0;\n}',
  hint: 'try_emplace avoids unnecessary key construction when key already exists.'
},
{
  id: 'cpp_stl_containers_41',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with emplace for in-place insertion.',
  mathSolution: 'emplace constructs element directly at position.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Product {\n    string name;\n    double price;\n    int quantity;\n    \n    Product(string n, double p, int q) : name(n), price(p), quantity(q) {\n        cout << \"Constructing \" << name << endl;\n    }\n};\n\nint main() {\n    vector<Product> products;\n    \n    cout << \"Using push_back (copy):\" << endl;\n    products.push_back(Product(\"Laptop\", 999.99, 10));\n    \n    cout << \"\\nUsing emplace_back (in-place):\" << endl;\n    products.emplace_back(\"Mouse\", 29.99, 50);\n    products.emplace_back(\"Keyboard\", 79.99, 30);\n    \n    cout << \"\\nUsing emplace at position:\" << endl;\n    auto it = products.begin() + 1;\n    products.emplace(it, \"Monitor\", 299.99, 20);\n    \n    cout << \"\\nProducts list:\" << endl;\n    for (const auto& p : products) {\n        cout << p.name << \": $\" << p.price << \" (x\" << p.quantity << \")\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'emplace constructs elements in place, avoiding temporary objects.'
},
{
  id: 'cpp_stl_containers_42',
  topicId: 'cpp_stl_containers',
  question: 'Use std::priority_queue with custom comparator.',
  mathSolution: 'priority_queue comparator defines ordering of elements.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nstruct Task {\n    int priority;\n    string name;\n    \n    // For min-heap, we need greater comparison\n    bool operator>(const Task& other) const {\n        return priority > other.priority;\n    }\n};\n\nstruct CompareTask {\n    bool operator()(const Task& a, const Task& b) {\n        return a.priority < b.priority;  // Max-heap by priority\n    }\n};\n\nint main() {\n    // Max-heap using custom comparator\n    priority_queue<Task, vector<Task>, CompareTask> maxHeap;\n    maxHeap.push({5, \"Low priority\"});\n    maxHeap.push({10, \"High priority\"});\n    maxHeap.push({1, \"Lowest\"});\n    \n    cout << \"Max-heap by priority:\" << endl;\n    while (!maxHeap.empty()) {\n        Task t = maxHeap.top();\n        cout << t.priority << \": \" << t.name << endl;\n        maxHeap.pop();\n    }\n    \n    // Min-heap using greater\n    priority_queue<Task, vector<Task>, greater<Task>> minHeap;\n    minHeap.push({5, \"Medium\"});\n    minHeap.push({10, \"High\"});\n    minHeap.push({1, \"Low\"});\n    \n    cout << \"\\nMin-heap by priority:\" << endl;\n    while (!minHeap.empty()) {\n        Task t = minHeap.top();\n        cout << t.priority << \": \" << t.name << endl;\n        minHeap.pop();\n    }\n    \n    return 0;\n}',
  hint: 'Custom comparator in priority_queue defines element ordering.'
},
{
  id: 'cpp_stl_containers_43',
  topicId: 'cpp_stl_containers',
  question: 'Use std::list with unique to remove consecutive duplicates.',
  mathSolution: 'unique removes consecutive duplicate elements.',
  codeSolution: '#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> numbers = {1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6};\n    \n    cout << \"Original: \";\n    for (int n : numbers) cout << n << \" \";\n    cout << endl;\n    \n    numbers.unique();\n    cout << \"After unique: \";\n    for (int n : numbers) cout << n << \" \";\n    cout << endl;\n    \n    // Custom comparator for approximate equality\n    list<double> decimals = {1.1, 1.15, 1.2, 2.1, 2.18, 2.22, 3.0};\n    cout << \"Decimals: \";\n    for (double d : decimals) cout << d << \" \";\n    cout << endl;\n    \n    decimals.unique([](double a, double b) {\n        return abs(a - b) < 0.1;\n    });\n    \n    cout << \"After custom unique: \";\n    for (double d : decimals) cout << d << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'list::unique removes only consecutive duplicates.'
},
{
  id: 'cpp_stl_containers_44',
  topicId: 'cpp_stl_containers',
  question: 'Use std::list with sort and merge for ordered lists.',
  mathSolution: 'merge combines two sorted lists into one sorted list.',
  codeSolution: '#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> list1 = {1, 3, 5, 7, 9};\n    list<int> list2 = {2, 4, 6, 8, 10};\n    \n    cout << \"List1: \";\n    for (int n : list1) cout << n << \" \";\n    cout << endl;\n    \n    cout << \"List2: \";\n    for (int n : list2) cout << n << \" \";\n    cout << endl;\n    \n    list1.merge(list2);\n    \n    cout << \"After merge: \";\n    for (int n : list1) cout << n << \" \";\n    cout << endl;\n    cout << \"List2 size: \" << list2.size() << endl;\n    \n    // Sorting and merging\n    list<int> list3 = {5, 2, 8, 1, 9};\n    list3.sort();\n    \n    list<int> list4 = {3, 6, 4, 7};\n    list4.sort();\n    \n    list3.merge(list4);\n    cout << \"Merged sorted lists: \";\n    for (int n : list3) cout << n << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'list::merge merges two sorted lists in linear time.'
},
{
  id: 'cpp_stl_containers_45',
  topicId: 'cpp_stl_containers',
  question: 'Use std::set with extract for node manipulation (C++17).',
  mathSolution: 'extract transfers node ownership without copying.',
  codeSolution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s1 = {1, 2, 3, 4, 5};\n    set<int> s2 = {6, 7, 8, 9, 10};\n    \n    cout << \"s1: \";\n    for (int n : s1) cout << n << \" \";\n    cout << endl;\n    \n    cout << \"s2: \";\n    for (int n : s2) cout << n << \" \";\n    cout << endl;\n    \n    // Extract node from s1 and insert into s2\n    auto node = s1.extract(3);\n    if (node) {\n        s2.insert(move(node));\n    }\n    \n    cout << \"After extract and insert:\\n\";\n    cout << \"s1: \";\n    for (int n : s1) cout << n << \" \";\n    cout << endl;\n    \n    cout << \"s2: \";\n    for (int n : s2) cout << n << \" \";\n    cout << endl;\n    \n    // Modify key using extract\n    auto node2 = s2.extract(8);\n    if (node2) {\n        node2.value() = 100;\n        s2.insert(move(node2));\n    }\n    \n    cout << \"After modifying key: \";\n    for (int n : s2) cout << n << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'extract allows moving nodes between containers without copying.'
},
{
  id: 'cpp_stl_containers_46',
  topicId: 'cpp_stl_containers',
  question: 'Use std::map with extract to change keys without reallocation.',
  mathSolution: 'extract enables key modification without reallocation.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 35}};\n    \n    cout << \"Original map:\" << endl;\n    for (const auto& [name, age] : ages) {\n        cout << name << \": \" << age << endl;\n    }\n    \n    // Extract and modify key\n    auto node = ages.extract(\"Bob\");\n    if (node) {\n        node.key() = \"Robert\";\n        ages.insert(move(node));\n    }\n    \n    cout << \"\\nAfter modifying key:\" << endl;\n    for (const auto& [name, age] : ages) {\n        cout << name << \": \" << age << endl;\n    }\n    \n    // Extract and move between maps\n    map<string, int> otherMap;\n    auto node2 = ages.extract(\"Alice\");\n    otherMap.insert(move(node2));\n    \n    cout << \"\\nAfter moving Alice to otherMap:\" << endl;\n    cout << \"Original map size: \" << ages.size() << endl;\n    cout << \"Other map: \";\n    for (const auto& [name, age] : otherMap) {\n        cout << name << \":\" << age << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'extract allows efficient key modification and node transfer between maps.'
},
{
  id: 'cpp_stl_containers_47',
  topicId: 'cpp_stl_containers',
  question: 'Use std::vector with shrink_to_fit to reduce memory usage.',
  mathSolution: 'shrink_to_fit reduces capacity to fit size.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    \n    cout << "Initial capacity: \" << v.capacity() << endl;\n    \n    // Add many elements\n    for (int i = 0; i < 1000; i++) {\n        v.push_back(i);\n    }\n    \n    cout << \"After 1000 pushes: size=\" << v.size() << \", capacity=\" << v.capacity() << endl;\n    \n    // Remove many elements\n    v.erase(v.begin() + 100, v.end());\n    \n    cout << \"After erase: size=\" << v.size() << \", capacity=\" << v.capacity() << endl;\n    \n    v.shrink_to_fit();\n    cout << \"After shrink_to_fit: size=\" << v.size() << \", capacity=\" << v.capacity() << endl;\n    \n    // Clear and shrink\n    v.clear();\n    cout << \"After clear: size=\" << v.size() << \", capacity=\" << v.capacity() << endl;\n    \n    v.shrink_to_fit();\n    cout << \"After shrink after clear: capacity=\" << v.capacity() << endl;\n    \n    return 0;\n}',
  hint: 'shrink_to_fit reduces memory consumption but may cause reallocation.'
},
{
  id: 'cpp_stl_containers_48',
  topicId: 'cpp_stl_containers',
  question: 'Use std::set with lower_bound for efficient search.',
  mathSolution: 'lower_bound returns first element not less than key.',
  codeSolution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s = {10, 20, 30, 40, 50, 60, 70};\n    \n    cout << \"Set elements: \";\n    for (int n : s) cout << n << \" \";\n    cout << endl;\n    \n    // Find first element >= 25\n    auto it = s.lower_bound(25);\n    if (it != s.end()) {\n        cout << \"First element >= 25: \" << *it << endl;\n    }\n    \n    // Find first element <= 45\n    it = s.upper_bound(45);\n    if (it != s.begin()) {\n        --it;\n        cout << \"Last element <= 45: \" << *it << endl;\n    }\n    \n    // Range between 25 and 55\n    auto low = s.lower_bound(25);\n    auto high = s.upper_bound(55);\n    \n    cout << \"Elements between 25 and 55: \";\n    for (auto it2 = low; it2 != high; ++it2) {\n        cout << *it2 << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'lower_bound/upper_bound are efficient O(log n) for associative containers.'
},
{
  id: 'cpp_stl_containers_49',
  topicId: 'cpp_stl_containers',
  question: 'Use std::unordered_map with reserve to pre-allocate buckets.',
  mathSolution: 'reserve pre-allocates buckets to avoid rehashing.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    unordered_map<string, int> umap;\n    \n    cout << \"Initial bucket count: \" << umap.bucket_count() << endl;\n    cout << \"Max load factor: \" << umap.max_load_factor() << endl;\n    \n    // Reserve space for 1000 elements\n    umap.reserve(1000);\n    cout << \"After reserve(1000): bucket count = \" << umap.bucket_count() << endl;\n    \n    // Insert many elements\n    for (int i = 0; i < 1000; i++) {\n        umap[\"key\" + to_string(i)] = i;\n    }\n    \n    cout << \"After insert: bucket count = \" << umap.bucket_count() << endl;\n    cout << \"Load factor: \" << umap.load_factor() << endl;\n    \n    // Rehash to change bucket count\n    umap.rehash(2000);\n    cout << \"After rehash(2000): bucket count = \" << umap.bucket_count() << endl;\n    \n    return 0;\n}',
  hint: 'reserve pre-allocates buckets to improve performance.'
},
{
  id: 'cpp_stl_containers_50',
  topicId: 'cpp_stl_containers',
  question: 'Create comprehensive STL container demonstration.',
  mathSolution: 'Combine multiple container types with algorithms.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <queue>\n#include <stack>\n#include <algorithm>\n#include <string>\n#include <functional>\nusing namespace std;\n\nint main() {\n    cout << "=== STL Containers Demonstration ===\\n\\n";\n    \n    // 1. vector - dynamic array\n    cout << "1. std::vector:" << endl;\n    vector<int> vec = {5, 2, 8, 1, 9, 3};\n    sort(vec.begin(), vec.end());\n    cout << "   Sorted vector: ";\n    for (int v : vec) cout << v << " ";\n    cout << endl;\n    \n    // 2. list - doubly linked list\n    cout << "\\n2. std::list:" << endl;\n    list<string> names = {"Alice", "Bob", "Charlie"};\n    names.push_front("Zoe");\n    names.push_back("David");\n    cout << "   List: ";\n    for (const auto& n : names) cout << n << " ";\n    cout << endl;\n    \n    // 3. map - key-value pairs\n    cout << "\\n3. std::map:" << endl;\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 35}};\n    for (const auto& [name, age] : ages) {\n        cout << "   " << name << ": " << age << endl;\n    }\n    \n    // 4. set - unique sorted elements\n    cout << "\\n4. std::set:" << endl;\n    set<int> numbers = {5, 2, 8, 2, 1, 8, 9, 3, 5};\n    cout << "   Unique sorted: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    // 5. unordered_map - hash map\n    cout << "\\n5. std::unordered_map:" << endl;\n    unordered_map<string, double> prices = {{\"apple\", 0.99}, {\"banana\", 0.59}, {\"orange\", 0.79}};\n    for (const auto& [item, price] : prices) {\n        cout << "   " << item << ": $" << price << endl;\n    }\n    \n    // 6. stack - LIFO\n    cout << "\\n6. std::stack:" << endl;\n    stack<int> stk;\n    for (int i = 1; i <= 5; i++) stk.push(i);\n    cout << "   Stack top to bottom: ";\n    while (!stk.empty()) {\n        cout << stk.top() << " ";\n        stk.pop();\n    }\n    cout << endl;\n    \n    // 7. queue - FIFO\n    cout << "\\n7. std::queue:" << endl;\n    queue<string> q;\n    q.push("First");\n    q.push("Second");\n    q.push("Third");\n    cout << "   Queue order: ";\n    while (!q.empty()) {\n        cout << q.front() << " ";\n        q.pop();\n    }\n    cout << endl;\n    \n    // 8. priority_queue - heap\n    cout << "\\n8. std::priority_queue:" << endl;\n    priority_queue<int> pq;\n    for (int n : {3, 1, 4, 1, 5, 9}) pq.push(n);\n    cout << "   Priority order: ";\n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl;\n    \n    // 9. Container adapters combination\n    cout << "\\n9. Combining containers:" << endl;\n    vector<int> data = {10, 20, 30, 40, 50};\n    list<int> l(data.begin(), data.end());\n    set<int> s(data.begin(), data.end());\n    \n    // Transform and store\n    vector<int> doubles;\n    transform(data.begin(), data.end(), back_inserter(doubles), \n              [](int x) { return x * 2; });\n    cout << "   Doubled vector: ";\n    for (int x : doubles) cout << x << " ";\n    cout << endl;\n    \n    // 10. Performance comparison\n    cout << "\\n10. Container characteristics:" << endl;\n    cout << "   vector: random access, contiguous memory" << endl;\n    cout << "   list:  O(1) insertion/deletion anywhere" << endl;\n    cout << "   map:   O(log n) sorted key-value" << endl;\n    cout << "   set:   O(log n) sorted unique elements" << endl;\n    cout << "   unordered_map: O(1) average hash-based lookup" << endl;\n    cout << "   stack/queue: adapter pattern for specific access" << endl;\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of STL containers.'
}
);
