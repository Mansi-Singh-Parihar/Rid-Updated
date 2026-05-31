QuizData.questions.push(
{
  id: 'cpp_dsa_1',
  topicId: 'cpp_dsa',
  question: 'Implement a stack using array with push, pop, and peek operations.',
  mathSolution: 'Stack follows LIFO (Last In First Out) principle.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Stack {\nprivate:\n    int* arr;\n    int top;\n    int capacity;\n    \npublic:\n    Stack(int size) {\n        arr = new int[size];\n        capacity = size;\n        top = -1;\n    }\n    \n    void push(int x) {\n        if (top == capacity - 1) {\n            cout << "Stack Overflow\\n";\n            return;\n        }\n        arr[++top] = x;\n    }\n    \n    int pop() {\n        if (top == -1) {\n            cout << "Stack Underflow\\n";\n            return -1;\n        }\n        return arr[top--];\n    }\n    \n    int peek() {\n        if (top == -1) return -1;\n        return arr[top];\n    }\n    \n    bool isEmpty() { return top == -1; }\n    \n    ~Stack() { delete[] arr; }\n};\n\nint main() {\n    Stack s(5);\n    s.push(10);\n    s.push(20);\n    s.push(30);\n    cout << s.pop() << endl;\n    cout << s.peek() << endl;\n    return 0;\n}',
  hint: 'Stack uses single pointer (top) to track elements.'
},
{
  id: 'cpp_dsa_2',
  topicId: 'cpp_dsa',
  question: 'Implement a queue using array with enqueue and dequeue operations.',
  mathSolution: 'Queue follows FIFO (First In First Out) principle.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Queue {\nprivate:\n    int* arr;\n    int front, rear, capacity;\n    \npublic:\n    Queue(int size) {\n        arr = new int[size];\n        capacity = size;\n        front = 0;\n        rear = -1;\n    }\n    \n    void enqueue(int x) {\n        if (rear == capacity - 1) {\n            cout << "Queue Overflow\\n";\n            return;\n        }\n        arr[++rear] = x;\n    }\n    \n    int dequeue() {\n        if (front > rear) {\n            cout << "Queue Underflow\\n";\n            return -1;\n        }\n        return arr[front++];\n    }\n    \n    int peek() {\n        if (front > rear) return -1;\n        return arr[front];\n    }\n    \n    bool isEmpty() { return front > rear; }\n    \n    ~Queue() { delete[] arr; }\n};\n\nint main() {\n    Queue q(5);\n    q.enqueue(10);\n    q.enqueue(20);\n    q.enqueue(30);\n    cout << q.dequeue() << endl;\n    cout << q.peek() << endl;\n    return 0;\n}',
  hint: 'Queue uses two pointers (front and rear) for operations.'
},
{
  id: 'cpp_dsa_3',
  topicId: 'cpp_dsa',
  question: 'Implement a singly linked list node and basic operations.',
  mathSolution: 'Linked list consists of nodes with data and next pointer.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\nclass LinkedList {\nprivate:\n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void insertAtBeginning(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    void insertAtEnd(int val) {\n        Node* newNode = new Node(val);\n        if (!head) {\n            head = newNode;\n            return;\n        }\n        Node* temp = head;\n        while (temp->next) temp = temp->next;\n        temp->next = newNode;\n    }\n    \n    void deleteNode(int val) {\n        if (!head) return;\n        if (head->data == val) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n            return;\n        }\n        Node* temp = head;\n        while (temp->next && temp->next->data != val) {\n            temp = temp->next;\n        }\n        if (temp->next) {\n            Node* toDelete = temp->next;\n            temp->next = temp->next->next;\n            delete toDelete;\n        }\n    }\n    \n    void display() {\n        Node* temp = head;\n        while (temp) {\n            cout << temp->data << " -> ";\n            temp = temp->next;\n        }\n        cout << "NULL\\n";\n    }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.insertAtBeginning(10);\n    list.insertAtEnd(20);\n    list.insertAtBeginning(5);\n    list.display();\n    list.deleteNode(10);\n    list.display();\n    return 0;\n}',
  hint: 'Singly linked list has O(1) insertion at head, O(n) at tail.'
},
{
  id: 'cpp_dsa_4',
  topicId: 'cpp_dsa',
  question: 'Implement binary search on sorted array.',
  mathSolution: 'Divide and conquer: compare with middle element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint binarySearch(int arr[], int left, int right, int target) {\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9, 11, 13};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target = 7;\n    int result = binarySearch(arr, 0, n - 1, target);\n    if (result != -1)\n        cout << "Found at index: " << result << endl;\n    else\n        cout << "Not found" << endl;\n    return 0;\n}',
  hint: 'Binary search requires sorted array, O(log n) time.'
},
{
  id: 'cpp_dsa_5',
  topicId: 'cpp_dsa',
  question: 'Implement bubble sort algorithm.',
  mathSolution: 'Repeatedly swap adjacent elements if in wrong order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    bubbleSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Bubble sort O(n²) time, O(1) space; stable sort.'
},
{
  id: 'cpp_dsa_6',
  topicId: 'cpp_dsa',
  question: 'Implement selection sort algorithm.',
  mathSolution: 'Select minimum element and place at beginning.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        if (minIdx != i) swap(arr[i], arr[minIdx]);\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    selectionSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Selection sort O(n²) time, O(1) space; not stable.'
},
{
  id: 'cpp_dsa_7',
  topicId: 'cpp_dsa',
  question: 'Implement insertion sort algorithm.',
  mathSolution: 'Build sorted array by inserting elements in correct position.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    insertionSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Insertion sort O(n²) worst, O(n) best; good for small arrays.'
},
{
  id: 'cpp_dsa_8',
  topicId: 'cpp_dsa',
  question: 'Implement merge sort algorithm.',
  mathSolution: 'Divide array, sort recursively, merge results.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid merge(int arr[], int left, int mid, int right) {\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n    int* L = new int[n1];\n    int* R = new int[n2];\n    \n    for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n    \n    int i = 0, j = 0, k = left;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n    \n    delete[] L;\n    delete[] R;\n}\n\nvoid mergeSort(int arr[], int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nint main() {\n    int arr[] = {38, 27, 43, 3, 9, 82, 10};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    mergeSort(arr, 0, n - 1);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Merge sort O(n log n) time, O(n) space; stable sort.'
},
{
  id: 'cpp_dsa_9',
  topicId: 'cpp_dsa',
  question: 'Implement quick sort algorithm.',
  mathSolution: 'Choose pivot, partition, recursively sort partitions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (arr[j] <= pivot) {\n            i++;\n            swap(arr[i], arr[j]);\n        }\n    }\n    swap(arr[i + 1], arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint main() {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    quickSort(arr, 0, n - 1);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Quick sort average O(n log n), worst O(n²), in-place.'
},
{
  id: 'cpp_dsa_10',
  topicId: 'cpp_dsa',
  question: 'Implement linear search algorithm.',
  mathSolution: 'Check each element sequentially until found.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {5, 3, 8, 4, 2};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target = 8;\n    int result = linearSearch(arr, n, target);\n    if (result != -1)\n        cout << "Found at index: " << result << endl;\n    else\n        cout << "Not found" << endl;\n    return 0;\n}',
  hint: 'Linear search O(n) time; works on unsorted arrays.'
},
{
  id: 'cpp_dsa_11',
  topicId: 'cpp_dsa',
  question: 'Implement two sum problem using hash map.',
  mathSolution: 'Use hash map to store complements for O(n) solution.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (map.find(complement) != map.end()) {\n            return {map[complement], i};\n        }\n        map[nums[i]] = i;\n    }\n    return {};\n}\n\nint main() {\n    vector<int> nums = {2, 7, 11, 15};\n    int target = 9;\n    vector<int> result = twoSum(nums, target);\n    cout << result[0] << ", " << result[1] << endl;\n    return 0;\n}',
  hint: 'Hash map provides O(n) solution instead of O(n²) brute force.'
},
{
  id: 'cpp_dsa_12',
  topicId: 'cpp_dsa',
  question: 'Implement Kadane\'s algorithm for maximum subarray sum.',
  mathSolution: 'Keep running sum, reset if negative, track maximum.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint maxSubarraySum(int arr[], int n) {\n    int maxSoFar = INT_MIN;\n    int maxEndingHere = 0;\n    \n    for (int i = 0; i < n; i++) {\n        maxEndingHere = max(arr[i], maxEndingHere + arr[i]);\n        maxSoFar = max(maxSoFar, maxEndingHere);\n    }\n    return maxSoFar;\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int maxSum = maxSubarraySum(arr, n);\n    cout << "Maximum subarray sum: " << maxSum << endl;\n    return 0;\n}',
  hint: 'Kadane\'s algorithm runs in O(n) time.'
},
{
  id: 'cpp_dsa_13',
  topicId: 'cpp_dsa',
  question: 'Check if string is palindrome using two pointers.',
  mathSolution: 'Compare characters from both ends moving inward.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    int left = 0, right = s.length() - 1;\n    while (left < right) {\n        while (left < right && !isalnum(s[left])) left++;\n        while (left < right && !isalnum(s[right])) right--;\n        if (tolower(s[left]) != tolower(s[right])) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    string test = "A man, a plan, a canal: Panama";\n    cout << (isPalindrome(test) ? "Palindrome" : "Not palindrome") << endl;\n    return 0;\n}',
  hint: 'Two-pointer technique O(n) time, O(1) space.'
},
{
  "id": "cpp_dsa_14",
  "topicId": "cpp_dsa",
  "question": "Find first non-repeating character in string.",
  "mathSolution": "Use hash map to count frequencies, then find first with count 1.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nchar firstNonRepeating(const string& s) {\n    unordered_map<char, int> freq;\n    for (char c : s) freq[c]++;\n    for (char c : s) {\n        if (freq[c] == 1) return c;\n    }\n    return '\\0';\n}\n\nint main() {\n    string s = \"swiss\";\n    char result = firstNonRepeating(s);\n    if (result != '\\0')\n        cout << \"First non-repeating: \" << result << endl;\n    else\n        cout << \"None found\" << endl;\n    return 0;\n}",
  "hint": "Two passes O(n) time, O(1) space (for ASCII)."
},
{
  id: 'cpp_dsa_15',
  topicId: 'cpp_dsa',
  question: 'Implement binary tree node and inorder traversal.',
  mathSolution: 'Traverse left, visit node, traverse right.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nvoid inorder(TreeNode* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->val << " ";\n    inorder(root->right);\n}\n\nint main() {\n    TreeNode* root = new TreeNode(2);\n    root->left = new TreeNode(1);\n    root->right = new TreeNode(3);\n    inorder(root);\n    cout << endl;\n    return 0;\n}',
  hint: 'Inorder traversal on BST gives sorted order.'
},
{
  id: 'cpp_dsa_16',
  topicId: 'cpp_dsa',
  question: 'Implement binary search tree insertion.',
  mathSolution: 'Insert at correct position: left if smaller, right if larger.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int val) {\n    if (!root) return new Node(val);\n    if (val < root->data) root->left = insert(root->left, val);\n    else if (val > root->data) root->right = insert(root->right, val);\n    return root;\n}\n\nvoid inorder(Node* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->data << " ";\n    inorder(root->right);\n}\n\nint main() {\n    Node* root = nullptr;\n    root = insert(root, 5);\n    insert(root, 3);\n    insert(root, 7);\n    insert(root, 2);\n    insert(root, 4);\n    inorder(root);\n    cout << endl;\n    return 0;\n}',
  hint: 'BST property: left < root < right.'
},
{
  id: 'cpp_dsa_17',
  topicId: 'cpp_dsa',
  question: 'Implement binary search tree search operation.',
  mathSolution: 'Recursively search left or right based on value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(nullptr), right(nullptr) {}\n};\n\nbool search(Node* root, int target) {\n    if (!root) return false;\n    if (root->data == target) return true;\n    if (target < root->data) return search(root->left, target);\n    return search(root->right, target);\n}\n\nint main() {\n    Node* root = new Node(5);\n    root->left = new Node(3);\n    root->right = new Node(7);\n    \n    cout << search(root, 3) << endl;\n    cout << search(root, 9) << endl;\n    return 0;\n}',
  hint: 'BST search average O(log n), worst O(n).'
},
{
  id: 'cpp_dsa_18',
  topicId: 'cpp_dsa',
  question: 'Implement depth-first search (DFS) on graph.',
  mathSolution: 'Visit node, then recursively visit all unvisited neighbors.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nvoid dfs(vector<vector<int>>& graph, int start) {\n    vector<bool> visited(graph.size(), false);\n    stack<int> st;\n    st.push(start);\n    \n    while (!st.empty()) {\n        int node = st.top();\n        st.pop();\n        if (!visited[node]) {\n            visited[node] = true;\n            cout << node << " ";\n            for (int neighbor : graph[node]) {\n                if (!visited[neighbor]) st.push(neighbor);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {1, 2},    // 0\n        {0, 3},    // 1\n        {0, 3},    // 2\n        {1, 2}     // 3\n    };\n    dfs(graph, 0);\n    cout << endl;\n    return 0;\n}',
  hint: 'DFS uses stack (explicit or recursion).'
},
{
  id: 'cpp_dsa_19',
  topicId: 'cpp_dsa',
  question: 'Implement breadth-first search (BFS) on graph.',
  mathSolution: 'Use queue to visit nodes level by level.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvoid bfs(vector<vector<int>>& graph, int start) {\n    vector<bool> visited(graph.size(), false);\n    queue<int> q;\n    q.push(start);\n    visited[start] = true;\n    \n    while (!q.empty()) {\n        int node = q.front();\n        q.pop();\n        cout << node << " ";\n        for (int neighbor : graph[node]) {\n            if (!visited[neighbor]) {\n                visited[neighbor] = true;\n                q.push(neighbor);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {1, 2},\n        {0, 3},\n        {0, 3},\n        {1, 2}\n    };\n    bfs(graph, 0);\n    cout << endl;\n    return 0;\n}',
  hint: 'BFS uses queue, finds shortest path in unweighted graph.'
},
{
  id: 'cpp_dsa_20',
  topicId: 'cpp_dsa',
  question: 'Find missing number in array from 1 to n.',
  mathSolution: 'Sum formula: expected sum minus actual sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint missingNumber(int arr[], int n) {\n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    for (int i = 0; i < n - 1; i++) {\n        actualSum += arr[i];\n    }\n    return expectedSum - actualSum;\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 5, 6};\n    int n = 6;\n    cout << "Missing: " << missingNumber(arr, n) << endl;\n    return 0;\n}',
  hint: 'O(n) time, O(1) space using sum formula.'
},
{
  id: 'cpp_dsa_21',
  topicId: 'cpp_dsa',
  question: 'Find duplicate number in array (one duplicate).',
  mathSolution: 'Use Floyd\'s cycle detection (tortoise and hare).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findDuplicate(vector<int>& nums) {\n    int slow = nums[0];\n    int fast = nums[0];\n    do {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n    } while (slow != fast);\n    \n    slow = nums[0];\n    while (slow != fast) {\n        slow = nums[slow];\n        fast = nums[fast];\n    }\n    return slow;\n}\n\nint main() {\n    vector<int> nums = {1, 3, 4, 2, 2};\n    cout << "Duplicate: " << findDuplicate(nums) << endl;\n    return 0;\n}',
  hint: 'Floyd\'s algorithm uses O(1) extra space.'
},
{
  id: 'cpp_dsa_22',
  topicId: 'cpp_dsa',
  question: 'Rotate array by k positions to the right.',
  mathSolution: 'Reverse entire array, then reverse first k, then reverse rest.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nvoid rotate(int arr[], int n, int k) {\n    k %= n;\n    reverse(arr, arr + n);\n    reverse(arr, arr + k);\n    reverse(arr + k, arr + n);\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int k = 3;\n    rotate(arr, n, k);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Three-reversal approach uses O(1) extra space.'
},
{
  id: 'cpp_dsa_23',
  topicId: 'cpp_dsa',
  question: 'Implement min-heap (priority queue) using array.',
  mathSolution: 'Heap property: parent <= children; bubble up/down on insert/delete.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass MinHeap {\nprivate:\n    vector<int> heap;\n    \n    void heapifyUp(int idx) {\n        while (idx > 0) {\n            int parent = (idx - 1) / 2;\n            if (heap[parent] <= heap[idx]) break;\n            swap(heap[parent], heap[idx]);\n            idx = parent;\n        }\n    }\n    \n    void heapifyDown(int idx) {\n        int size = heap.size();\n        while (true) {\n            int left = 2 * idx + 1;\n            int right = 2 * idx + 2;\n            int smallest = idx;\n            if (left < size && heap[left] < heap[smallest]) smallest = left;\n            if (right < size && heap[right] < heap[smallest]) smallest = right;\n            if (smallest == idx) break;\n            swap(heap[idx], heap[smallest]);\n            idx = smallest;\n        }\n    }\n    \npublic:\n    void push(int val) {\n        heap.push_back(val);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    int pop() {\n        if (heap.empty()) return -1;\n        int root = heap[0];\n        heap[0] = heap.back();\n        heap.pop_back();\n        if (!heap.empty()) heapifyDown(0);\n        return root;\n    }\n    \n    int top() { return heap.empty() ? -1 : heap[0]; }\n    bool empty() { return heap.empty(); }\n};\n\nint main() {\n    MinHeap h;\n    h.push(5);\n    h.push(3);\n    h.push(8);\n    h.push(1);\n    cout << h.pop() << endl;\n    cout << h.pop() << endl;\n    return 0;\n}',
  hint: 'Heap operations: push and pop O(log n).'
},
{
  id: 'cpp_dsa_24',
  topicId: 'cpp_dsa',
  question: 'Find the kth largest element in array (quick select).',
  mathSolution: 'Quick select partitions and recurses on one side.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint quickSelect(vector<int>& nums, int left, int right, int k) {\n    int pivot = nums[right];\n    int i = left;\n    for (int j = left; j < right; j++) {\n        if (nums[j] <= pivot) {\n            swap(nums[i], nums[j]);\n            i++;\n        }\n    }\n    swap(nums[i], nums[right]);\n    \n    if (i == k) return nums[i];\n    else if (i < k) return quickSelect(nums, i + 1, right, k);\n    else return quickSelect(nums, left, i - 1, k);\n}\n\nint findKthLargest(vector<int>& nums, int k) {\n    int n = nums.size();\n    return quickSelect(nums, 0, n - 1, n - k);\n}\n\nint main() {\n    vector<int> nums = {3, 2, 1, 5, 6, 4};\n    int k = 2;\n    cout << findKthLargest(nums, k) << endl;\n    return 0;\n}',
  hint: 'Quick select averages O(n) time, worst O(n²).'
},
{
  "id": "cpp_dsa_25",
  "topicId": "cpp_dsa",
  "question": "Implement valid parentheses checker using stack.",
  "mathSolution": "Push opening brackets, pop when closing matches top.",
  "codeSolution": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isValid(const string& s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            st.push(c);\n        } else {\n            if (st.empty()) return false;\n            if ((c == ')' && st.top() != '(') ||\n                (c == '}' && st.top() != '{') ||\n                (c == ']' && st.top() != '[')) {\n                return false;\n            }\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"()[]{} : \" << isValid(\"()[]{}\") << endl;\n    cout << \"([)] : \" << isValid(\"([)]\") << endl;\n    cout << \"{[]} : \" << isValid(\"{[]}\") << endl;\n    return 0;\n}",
  "hint": "Stack ensures correct order of closing brackets."
},
{
  id: 'cpp_dsa_26',
  topicId: 'cpp_dsa',
  question: 'Implement queue using two stacks.',
  mathSolution: 'One stack for enqueue, one for dequeue; move when dequeue stack empty.',
  codeSolution: '#include <iostream>\n#include <stack>\nusing namespace std;\n\nclass MyQueue {\nprivate:\n    stack<int> s1, s2;\n    \npublic:\n    void push(int x) { s1.push(x); }\n    \n    int pop() {\n        if (s2.empty()) {\n            while (!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        int val = s2.top();\n        s2.pop();\n        return val;\n    }\n    \n    int peek() {\n        if (s2.empty()) {\n            while (!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        return s2.top();\n    }\n    \n    bool empty() { return s1.empty() && s2.empty(); }\n};\n\nint main() {\n    MyQueue q;\n    q.push(1);\n    q.push(2);\n    cout << q.peek() << endl;\n    cout << q.pop() << endl;\n    cout << q.empty() << endl;\n    return 0;\n}',
  hint: 'Amortized O(1) for each operation.'
},
{
  id: 'cpp_dsa_27',
  topicId: 'cpp_dsa',
  question: 'Generate all fibonacci numbers up to n (DP approach).',
  mathSolution: 'Use array to store previous two or two variables.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n\nint main() {\n    cout << "F(10) = " << fibonacci(10) << endl;\n    return 0;\n}',
  hint: 'DP avoids exponential recursion; O(n) time, O(1) space.'
},
{
  id: 'cpp_dsa_28',
  topicId: 'cpp_dsa',
  question: 'Implement longest common prefix among strings.',
  mathSolution: 'Compare characters of first string with all others until mismatch.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstring longestCommonPrefix(vector<string>& strs) {\n    if (strs.empty()) return "";\n    string prefix = strs[0];\n    for (int i = 1; i < strs.size(); i++) {\n        while (strs[i].find(prefix) != 0) {\n            prefix = prefix.substr(0, prefix.length() - 1);\n            if (prefix.empty()) return "";\n        }\n    }\n    return prefix;\n}\n\nint main() {\n    vector<string> strs = {"flower", "flow", "flight"};\n    cout << longestCommonPrefix(strs) << endl;\n    return 0;\n}',
  hint: 'Reduce prefix length until all strings start with it.'
},
{
  "id": "cpp_dsa_29",
  "topicId": "cpp_dsa",
  "question": "Implement anagram check using character count.",
  "mathSolution": "Count characters in both strings and compare.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isAnagram(const string& s, const string& t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (char c : s) count[c - 'a']++;\n    for (char c : t) count[c - 'a']--;\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"listen & silent: \" << isAnagram(\"listen\", \"silent\") << endl;\n    cout << \"hello & world: \" << isAnagram(\"hello\", \"world\") << endl;\n    cout << \"anagram & nagaram: \" << isAnagram(\"anagram\", \"nagaram\") << endl;\n    return 0;\n}",
  "hint": "O(n) time, O(1) space (limited character set)."
},
{
  id: 'cpp_dsa_30',
  topicId: 'cpp_dsa',
  question: 'Implement sliding window maximum (max in each window of size k).',
  mathSolution: 'Use deque to maintain indices of potential maximums.',
  codeSolution: '#include <iostream>\n#include <deque>\n#include <vector>\nusing namespace std;\n\nvector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    vector<int> result;\n    deque<int> dq;\n    for (int i = 0; i < nums.size(); i++) {\n        while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();\n        dq.push_back(i);\n        if (dq.front() == i - k) dq.pop_front();\n        if (i >= k - 1) result.push_back(nums[dq.front()]);\n    }\n    return result;\n}\n\nint main() {\n    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};\n    int k = 3;\n    vector<int> result = maxSlidingWindow(nums, k);\n    for (int x : result) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Deque maintains indices in decreasing order of values.'
},
{
  id: 'cpp_dsa_31',
  topicId: 'cpp_dsa',
  question: 'Implement longest palindromic substring (expand around center).',
  mathSolution: 'Expand from each center (odd and even length).',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring longestPalindrome(string s) {\n    if (s.empty()) return "";\n    int start = 0, maxLen = 1;\n    \n    auto expand = [&](int left, int right) {\n        while (left >= 0 && right < s.length() && s[left] == s[right]) {\n            left--;\n            right++;\n        }\n        int len = right - left - 1;\n        if (len > maxLen) {\n            maxLen = len;\n            start = left + 1;\n        }\n    };\n    \n    for (int i = 0; i < s.length(); i++) {\n        expand(i, i);\n        expand(i, i + 1);\n    }\n    return s.substr(start, maxLen);\n}\n\nint main() {\n    cout << longestPalindrome("babad") << endl;\n    return 0;\n}',
  hint: 'O(n²) time, O(1) space expand around center.'
},
{
  id: 'cpp_dsa_32',
  topicId: 'cpp_dsa',
  question: 'Implement climbing stairs problem (DP).',
  mathSolution: 'Ways to reach step n = ways(n-1) + ways(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev1 = 1, prev2 = 2;\n    for (int i = 3; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev1 = prev2;\n        prev2 = curr;\n    }\n    return prev2;\n}\n\nint main() {\n    cout << climbStairs(3) << endl;\n    cout << climbStairs(4) << endl;\n    return 0;\n}',
  hint: 'Fibonacci-style DP with O(1) space.'
},
{
  id: 'cpp_dsa_33',
  topicId: 'cpp_dsa',
  question: 'Implement house robber problem (max sum without adjacent).',
  mathSolution: 'DP: max of rob current + rob(n-2) or rob(n-1).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint rob(vector<int>& nums) {\n    if (nums.empty()) return 0;\n    if (nums.size() == 1) return nums[0];\n    int prev2 = nums[0];\n    int prev1 = max(nums[0], nums[1]);\n    for (int i = 2; i < nums.size(); i++) {\n        int curr = max(prev1, prev2 + nums[i]);\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n\nint main() {\n    vector<int> nums = {1, 2, 3, 1};\n    cout << rob(nums) << endl;\n    return 0;\n}',
  hint: 'DP with O(1) space: either take current or skip.'
},
{
  id: 'cpp_dsa_34',
  topicId: 'cpp_dsa',
  question: 'Implement coin change problem (minimum coins needed).',
  mathSolution: 'DP array where dp[i] = min coins to make amount i.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, INT_MAX);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (coin <= i && dp[i - coin] != INT_MAX) {\n                dp[i] = min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    return dp[amount] == INT_MAX ? -1 : dp[amount];\n}\n\nint main() {\n    vector<int> coins = {1, 2, 5};\n    int amount = 11;\n    cout << coinChange(coins, amount) << endl;\n    return 0;\n}',
  hint: 'Unbounded knapsack DP: O(amount * coins) time.'
},
{
  id: 'cpp_dsa_35',
  topicId: 'cpp_dsa',
  question: 'Implement longest increasing subsequence length.',
  mathSolution: 'DP: LIS ending at i = 1 + max(LIS ending at previous smaller).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLIS(vector<int>& nums) {\n    vector<int> dp(nums.size(), 1);\n    for (int i = 1; i < nums.size(); i++) {\n        for (int j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) {\n                dp[i] = max(dp[i], dp[j] + 1);\n            }\n        }\n    }\n    return *max_element(dp.begin(), dp.end());\n}\n\nint main() {\n    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};\n    cout << lengthOfLIS(nums) << endl;\n    return 0;\n}',
  hint: 'O(n²) DP; O(n log n) with patience sorting.'
},
{
  id: 'cpp_dsa_36',
  topicId: 'cpp_dsa',
  question: 'Implement edit distance (Levenshtein distance).',
  mathSolution: 'DP: dp[i][j] = min(insert, delete, replace).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint minDistance(string word1, string word2) {\n    int m = word1.length(), n = word2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    \n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1[i - 1] == word2[j - 1]) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else {\n                dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});\n            }\n        }\n    }\n    return dp[m][n];\n}\n\nint main() {\n    cout << minDistance("horse", "ros") << endl;\n    return 0;\n}',
  hint: 'DP: replace, insert, delete operations.'
},
{
  id: 'cpp_dsa_37',
  topicId: 'cpp_dsa',
  question: 'Implement topological sort for DAG (Kahn\'s algorithm).',
  mathSolution: 'Count in-degrees, queue nodes with 0 in-degree.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> topologicalSort(int n, vector<vector<int>>& edges) {\n    vector<vector<int>> adj(n);\n    vector<int> inDegree(n, 0);\n    for (auto& edge : edges) {\n        adj[edge[0]].push_back(edge[1]);\n        inDegree[edge[1]]++;\n    }\n    \n    queue<int> q;\n    for (int i = 0; i < n; i++) {\n        if (inDegree[i] == 0) q.push(i);\n    }\n    \n    vector<int> result;\n    while (!q.empty()) {\n        int u = q.front();\n        q.pop();\n        result.push_back(u);\n        for (int v : adj[u]) {\n            inDegree[v]--;\n            if (inDegree[v] == 0) q.push(v);\n        }\n    }\n    return result.size() == n ? result : vector<int>();\n}\n\nint main() {\n    vector<vector<int>> edges = {{5,2}, {5,0}, {4,0}, {4,1}, {2,3}, {3,1}};\n    vector<int> order = topologicalSort(6, edges);\n    for (int x : order) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Kahn\'s algorithm uses BFS with in-degree counting.'
},
{
  id: 'cpp_dsa_38',
  topicId: 'cpp_dsa',
  question: 'Implement Dijkstra\'s shortest path algorithm.',
  mathSolution: 'Use priority queue, relax edges, track shortest distances.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\n#include <climits>\nusing namespace std;\n\nvector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int start) {\n    int n = graph.size();\n    vector<int> dist(n, INT_MAX);\n    dist[start] = 0;\n    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n    pq.push({0, start});\n    \n    while (!pq.empty()) {\n        int d = pq.top().first;\n        int u = pq.top().second;\n        pq.pop();\n        if (d > dist[u]) continue;\n        for (auto& edge : graph[u]) {\n            int v = edge.first;\n            int w = edge.second;\n            if (dist[u] + w < dist[v]) {\n                dist[v] = dist[u] + w;\n                pq.push({dist[v], v});\n            }\n        }\n    }\n    return dist;\n}\n\nint main() {\n    vector<vector<pair<int, int>>> graph(5);\n    graph[0] = {{1, 4}, {2, 2}};\n    graph[1] = {{0, 4}, {2, 1}, {3, 5}};\n    graph[2] = {{0, 2}, {1, 1}, {3, 8}, {4, 10}};\n    graph[3] = {{1, 5}, {2, 8}, {4, 2}};\n    graph[4] = {{2, 10}, {3, 2}};\n    \n    vector<int> dist = dijkstra(graph, 0);\n    for (int i = 0; i < dist.size(); i++) {\n        cout << "0 -> " << i << ": " << dist[i] << endl;\n    }\n    return 0;\n}',
  hint: 'Dijkstra uses priority queue; O((V+E) log V) time.'
},
{
  id: 'cpp_dsa_39',
  topicId: 'cpp_dsa',
  question: 'Implement Floyd-Warshall algorithm (all-pairs shortest paths).',
  mathSolution: 'DP: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nvoid floydWarshall(vector<vector<int>>& graph) {\n    int n = graph.size();\n    vector<vector<int>> dist = graph;\n    \n    for (int k = 0; k < n; k++) {\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX &&\n                    dist[i][k] + dist[k][j] < dist[i][j]) {\n                    dist[i][j] = dist[i][k] + dist[k][j];\n                }\n            }\n        }\n    }\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (dist[i][j] == INT_MAX) cout << \"INF \";\n            else cout << dist[i][j] << \" \";\n        }\n        cout << endl;\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {0, 3, INT_MAX, 5},\n        {2, 0, INT_MAX, 4},\n        {INT_MAX, 1, 0, INT_MAX},\n        {INT_MAX, INT_MAX, 2, 0}\n    };\n    floydWarshall(graph);\n    return 0;\n}',
  hint: 'Floyd-Warshall O(V³) time, works with negative edges (no cycles).'
},
{
  id: 'cpp_dsa_40',
  topicId: 'cpp_dsa',
  question: 'Implement union-find (disjoint set) data structure.',
  mathSolution: 'Each element has parent; union by rank, find with path compression.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass UnionFind {\nprivate:\n    vector<int> parent, rank;\n    \npublic:\n    UnionFind(int n) {\n        parent.resize(n);\n        rank.resize(n, 0);\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n    \n    int find(int x) {\n        if (parent[x] != x) parent[x] = find(parent[x]);\n        return parent[x];\n    }\n    \n    bool unite(int x, int y) {\n        int rootX = find(x);\n        int rootY = find(y);\n        if (rootX == rootY) return false;\n        if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;\n        else if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;\n        else {\n            parent[rootY] = rootX;\n            rank[rootX]++;\n        }\n        return true;\n    }\n    \n    bool connected(int x, int y) { return find(x) == find(y); }\n};\n\nint main() {\n    UnionFind uf(5);\n    uf.unite(0, 1);\n    uf.unite(1, 2);\n    cout << uf.connected(0, 2) << endl;\n    cout << uf.connected(0, 3) << endl;\n    return 0;\n}',
  hint: 'Union-Find: nearly O(1) amortized time with path compression.'
},
{
  id: 'cpp_dsa_41',
  topicId: 'cpp_dsa',
  question: 'Implement segment tree for range sum queries and point updates.',
  mathSolution: 'Binary tree stores sums; query and update in O(log n).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass SegmentTree {\nprivate:\n    vector<int> tree;\n    int n;\n    \n    void build(vector<int>& arr, int node, int start, int end) {\n        if (start == end) tree[node] = arr[start];\n        else {\n            int mid = (start + end) / 2;\n            build(arr, 2 * node + 1, start, mid);\n            build(arr, 2 * node + 2, mid + 1, end);\n            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n        }\n    }\n    \n    void update(int node, int start, int end, int idx, int val) {\n        if (start == end) tree[node] = val;\n        else {\n            int mid = (start + end) / 2;\n            if (idx <= mid) update(2 * node + 1, start, mid, idx, val);\n            else update(2 * node + 2, mid + 1, end, idx, val);\n            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n        }\n    }\n    \n    int query(int node, int start, int end, int l, int r) {\n        if (r < start || l > end) return 0;\n        if (l <= start && end <= r) return tree[node];\n        int mid = (start + end) / 2;\n        return query(2 * node + 1, start, mid, l, r) +\n               query(2 * node + 2, mid + 1, end, l, r);\n    }\n    \npublic:\n    SegmentTree(vector<int>& arr) {\n        n = arr.size();\n        tree.resize(4 * n);\n        build(arr, 0, 0, n - 1);\n    }\n    \n    void update(int idx, int val) { update(0, 0, n - 1, idx, val); }\n    int query(int l, int r) { return query(0, 0, n - 1, l, r); }\n};\n\nint main() {\n    vector<int> arr = {1, 3, 5, 7, 9, 11};\n    SegmentTree st(arr);\n    cout << st.query(1, 3) << endl;\n    st.update(2, 10);\n    cout << st.query(1, 3) << endl;\n    return 0;\n}',
  hint: 'Segment tree supports range queries and point updates in O(log n).'
},
{
  id: 'cpp_dsa_42',
  topicId: 'cpp_dsa',
  question: 'Implement trie (prefix tree) for word storage and search.',
  mathSolution: 'Each node has children map and boolean for end of word.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nclass TrieNode {\npublic:\n    unordered_map<char, TrieNode*> children;\n    bool isEnd;\n    TrieNode() : isEnd(false) {}\n};\n\nclass Trie {\nprivate:\n    TrieNode* root;\n    \npublic:\n    Trie() { root = new TrieNode(); }\n    \n    void insert(string word) {\n        TrieNode* node = root;\n        for (char c : word) {\n            if (node->children.find(c) == node->children.end()) {\n                node->children[c] = new TrieNode();\n            }\n            node = node->children[c];\n        }\n        node->isEnd = true;\n    }\n    \n    bool search(string word) {\n        TrieNode* node = root;\n        for (char c : word) {\n            if (node->children.find(c) == node->children.end()) return false;\n            node = node->children[c];\n        }\n        return node->isEnd;\n    }\n    \n    bool startsWith(string prefix) {\n        TrieNode* node = root;\n        for (char c : prefix) {\n            if (node->children.find(c) == node->children.end()) return false;\n            node = node->children[c];\n        }\n        return true;\n    }\n};\n\nint main() {\n    Trie trie;\n    trie.insert("apple");\n    cout << trie.search("apple") << endl;\n    cout << trie.search("app") << endl;\n    cout << trie.startsWith("app") << endl;\n    return 0;\n}',
  hint: 'Trie operations O(L) where L is string length.'
},
{
  id: 'cpp_dsa_43',
  topicId: 'cpp_dsa',
  question: 'Detect cycle in linked list (Floyd\'s cycle detection).',
  mathSolution: 'Use slow and fast pointers; if they meet, cycle exists.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nbool hasCycle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = head->next;\n    cout << hasCycle(head) << endl;\n    return 0;\n}',
  hint: 'Floyd\'s algorithm uses O(1) extra space.'
},
{
  id: 'cpp_dsa_44',
  topicId: 'cpp_dsa',
  question: 'Reverse a linked list (iterative and recursive).',
  mathSolution: 'Iterative: use prev, current, next pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* reverseIterative(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr) {\n        ListNode* next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}\n\nListNode* reverseRecursive(ListNode* head) {\n    if (!head || !head->next) return head;\n    ListNode* newHead = reverseRecursive(head->next);\n    head->next->next = head;\n    head->next = nullptr;\n    return newHead;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = new ListNode(4);\n    \n    head = reverseIterative(head);\n    ListNode* temp = head;\n    while (temp) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Iterative uses O(1) space, recursive uses O(n) stack space.'
},
{
  id: 'cpp_dsa_45',
  topicId: 'cpp_dsa',
  question: 'Find the middle of linked list (slow-fast pointer).',
  mathSolution: 'Slow moves one step, fast moves two steps.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* findMiddle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = new ListNode(4);\n    head->next->next->next->next = new ListNode(5);\n    \n    ListNode* mid = findMiddle(head);\n    cout << mid->val << endl;\n    return 0;\n}',
  hint: 'Slow-fast pointer finds middle in one pass.'
},
{
  id: 'cpp_dsa_46',
  topicId: 'cpp_dsa',
  question: 'Implement circular queue using array.',
  mathSolution: 'Use modulo to wrap around indices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CircularQueue {\nprivate:\n    int* arr;\n    int front, rear, capacity;\n    \npublic:\n    CircularQueue(int size) {\n        capacity = size;\n        arr = new int[capacity];\n        front = -1;\n        rear = -1;\n    }\n    \n    bool enqueue(int x) {\n        if ((front == 0 && rear == capacity - 1) || (rear == (front - 1) % capacity)) {\n            return false;\n        }\n        if (front == -1) front = rear = 0;\n        else if (rear == capacity - 1 && front != 0) rear = 0;\n        else rear++;\n        arr[rear] = x;\n        return true;\n    }\n    \n    int dequeue() {\n        if (front == -1) return -1;\n        int data = arr[front];\n        if (front == rear) front = rear = -1;\n        else if (front == capacity - 1) front = 0;\n        else front++;\n        return data;\n    }\n    \n    int peek() {\n        if (front == -1) return -1;\n        return arr[front];\n    }\n    \n    bool isEmpty() { return front == -1; }\n    bool isFull() { return (front == 0 && rear == capacity - 1) || (rear == (front - 1) % capacity); }\n    \n    ~CircularQueue() { delete[] arr; }\n};\n\nint main() {\n    CircularQueue q(5);\n    q.enqueue(10);\n    q.enqueue(20);\n    q.enqueue(30);\n    cout << q.dequeue() << endl;\n    cout << q.peek() << endl;\n    return 0;\n}',
  hint: 'Circular queue reuses space efficiently.'
},
{
  id: 'cpp_dsa_47',
  topicId: 'cpp_dsa',
  question: 'Implement doubly linked list with forward/backward traversal.',
  mathSolution: 'Each node has prev and next pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* prev;\n    Node* next;\n    Node(int val) : data(val), prev(nullptr), next(nullptr) {}\n};\n\nclass DoublyLinkedList {\nprivate:\n    Node* head;\n    Node* tail;\n    \npublic:\n    DoublyLinkedList() : head(nullptr), tail(nullptr) {}\n    \n    void pushBack(int val) {\n        Node* newNode = new Node(val);\n        if (!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            newNode->prev = tail;\n            tail = newNode;\n        }\n    }\n    \n    void pushFront(int val) {\n        Node* newNode = new Node(val);\n        if (!head) head = tail = newNode;\n        else {\n            newNode->next = head;\n            head->prev = newNode;\n            head = newNode;\n        }\n    }\n    \n    void printForward() {\n        Node* temp = head;\n        while (temp) {\n            cout << temp->data << \" <-> \";\n            temp = temp->next;\n        }\n        cout << "NULL\\n";\n    }\n    \n    void printBackward() {\n        Node* temp = tail;\n        while (temp) {\n            cout << temp->data << \" <-> \";\n            temp = temp->prev;\n        }\n        cout << "NULL\\n";\n    }\n    \n    ~DoublyLinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    DoublyLinkedList dll;\n    dll.pushBack(10);\n    dll.pushBack(20);\n    dll.pushFront(5);\n    dll.printForward();\n    dll.printBackward();\n    return 0;\n}',
  hint: 'Doubly linked list allows bidirectional traversal.'
},
{
  id: 'cpp_dsa_48',
  topicId: 'cpp_dsa',
  question: 'Implement hash table with separate chaining.',
  mathSolution: 'Use array of lists for collision handling.',
  codeSolution: '#include <iostream>\n#include <list>\n#include <vector>\nusing namespace std;\n\nclass HashTable {\nprivate:\n    vector<list<pair<int, string>>> table;\n    int size;\n    \n    int hash(int key) { return key % size; }\n    \npublic:\n    HashTable(int s) : size(s) { table.resize(size); }\n    \n    void insert(int key, string value) {\n        int index = hash(key);\n        for (auto& p : table[index]) {\n            if (p.first == key) {\n                p.second = value;\n                return;\n            }\n        }\n        table[index].push_back({key, value});\n    }\n    \n    string get(int key) {\n        int index = hash(key);\n        for (auto& p : table[index]) {\n            if (p.first == key) return p.second;\n        }\n        return \"\";\n    }\n    \n    void remove(int key) {\n        int index = hash(key);\n        table[index].remove_if([key](const pair<int, string>& p) {\n            return p.first == key;\n        });\n    }\n};\n\nint main() {\n    HashTable ht(10);\n    ht.insert(1, \"Apple\");\n    ht.insert(2, \"Banana\");\n    ht.insert(11, \"Cherry\");\n    cout << ht.get(1) << endl;\n    cout << ht.get(11) << endl;\n    ht.remove(2);\n    return 0;\n}',
  hint: 'Separate chaining handles collisions with linked lists.'
},
{
  id: 'cpp_dsa_49',
  topicId: 'cpp_dsa',
  question: 'Implement counting sort for small integer range.',
  mathSolution: 'Count frequencies, then reconstruct sorted array.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid countingSort(vector<int>& arr) {\n    if (arr.empty()) return;\n    int maxVal = *max_element(arr.begin(), arr.end());\n    vector<int> count(maxVal + 1, 0);\n    for (int x : arr) count[x]++;\n    int index = 0;\n    for (int i = 0; i <= maxVal; i++) {\n        while (count[i]-- > 0) arr[index++] = i;\n    }\n}\n\nint main() {\n    vector<int> arr = {4, 2, 2, 8, 3, 3, 1};\n    countingSort(arr);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Counting sort O(n + k) time, O(k) space; good for small range.'
},
{
  id: 'cpp_dsa_50',
  topicId: 'cpp_dsa',
  question: 'Comprehensive DSA demonstration combining multiple data structures.',
  mathSolution: 'Showcase stack, queue, linked list, sorting, searching.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\nint main() {\n    cout << "=== DSA Basics Demonstration ===" << endl << endl;\n    \n    // 1. Stack\n    cout << "1. Stack (LIFO):" << endl;\n    stack<int> st;\n    st.push(10); st.push(20); st.push(30);\n    while (!st.empty()) {\n        cout << st.top() << " ";\n        st.pop();\n    }\n    cout << endl << endl;\n    \n    // 2. Queue (FIFO)\n    cout << "2. Queue (FIFO):" << endl;\n    queue<int> q;\n    q.push(10); q.push(20); q.push(30);\n    while (!q.empty()) {\n        cout << q.front() << " ";\n        q.pop();\n    }\n    cout << endl << endl;\n    \n    // 3. Sorting\n    cout << "3. Sorting:" << endl;\n    vector<int> arr = {5, 2, 8, 1, 9, 3};\n    sort(arr.begin(), arr.end());\n    cout << "Sorted: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl << endl;\n    \n    // 4. Binary Search\n    cout << "4. Binary Search:" << endl;\n    int target = 5;\n    bool found = binary_search(arr.begin(), arr.end(), target);\n    cout << target << " found: " << boolalpha << found << endl << endl;\n    \n    // 5. Binary Tree (simple)\n    cout << "5. Binary Tree Inorder:" << endl;\n    struct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} };\n    TreeNode* root = new TreeNode(2);\n    root->left = new TreeNode(1);\n    root->right = new TreeNode(3);\n    \n    function<void(TreeNode*)> inorder = [&](TreeNode* node) {\n        if (!node) return;\n        inorder(node->left);\n        cout << node->val << " ";\n        inorder(node->right);\n    };\n    inorder(root);\n    cout << endl << endl;\n    \n    // 6. Priority Queue\n    cout << "6. Priority Queue (Max-Heap):" << endl;\n    priority_queue<int> pq;\n    pq.push(5); pq.push(1); pq.push(9); pq.push(3);\n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl << endl;\n    \n    // 7. Linked List (simple)\n    cout << "7. Linked List:" << endl;\n    struct ListNode { int val; ListNode* next; ListNode(int x) : val(x), next(nullptr) {} };\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    ListNode* temp = head;\n    while (temp) {\n        cout << temp->val << " -> ";\n        temp = temp->next;\n    }\n    cout << "NULL" << endl << endl;\n    \n    // 8. Set\n    cout << "8. Set (Unique Sorted Elements):" << endl;\n    set<int> s = {5, 2, 8, 2, 1, 9, 3};\n    for (int x : s) cout << x << " ";\n    cout << endl << endl;\n    \n    // 9. Map\n    cout << "9. Map (Key-Value Pairs):" << endl;\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 35}};\n    for (auto& [name, age] : ages) {\n        cout << name << ": " << age << endl;\n    }\n    \n    cout << endl << "=== All DSA concepts demonstrated ===" << endl;\n    \n    delete root->left;\n    delete root->right;\n    delete root;\n    delete head->next->next;\n    delete head->next;\n    delete head;\n    \n    return 0;\n}',
  hint: 'This comprehensive demo covers stacks, queues, sorting, searching, trees, linked lists, sets, and maps.'
}
);
