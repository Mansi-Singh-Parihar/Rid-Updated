QuizData.questions.push(
{
  id: 'cpp_arrays_1',
  topicId: 'cpp_arrays',
  question: 'Declare and initialize a one-dimensional integer array.',
  mathSolution: 'Array stores multiple elements of same type in contiguous memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    for (int i = 0; i < 5; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use curly braces to initialize array elements.'
},
{
  id: 'cpp_arrays_2',
  topicId: 'cpp_arrays',
  question: 'Access and modify array elements using index.',
  mathSolution: 'Array index starts at 0, last element at size-1.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    \n    cout << "First element: " << arr[0] << endl;\n    cout << "Third element: " << arr[2] << endl;\n    cout << "Last element: " << arr[4] << endl;\n    \n    arr[2] = 30;  // Modify third element\n    cout << "After modification, arr[2] = " << arr[2] << endl;\n    \n    return 0;\n}',
  hint: 'Valid index range: 0 to size-1; accessing out of bounds is undefined behavior.'
},
{
  id: 'cpp_arrays_3',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of all elements in an array using loop.',
  mathSolution: 'Iterate through array and accumulate sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int sum = 0;\n    \n    for (int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    \n    cout << "Sum of array elements: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use sizeof(arr)/sizeof(arr[0]) to get array size.'
},
{
  id: 'cpp_arrays_4',
  topicId: 'cpp_arrays',
  question: 'Find largest element in array.',
  mathSolution: 'Initialize max with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34, 89, 56};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int max = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    \n    cout << "Largest element: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Start max with first element; don\'t assume it\'s 0 (array may have negatives).'
},
{
  id: 'cpp_arrays_5',
  topicId: 'cpp_arrays',
  question: 'Find smallest element in array.',
  mathSolution: 'Initialize min with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34, 89, 56};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int min = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    \n    cout << "Smallest element: " << min << endl;\n    \n    return 0;\n}',
  hint: 'min starts with arr[0] to handle all cases correctly.'
},
{
  id: 'cpp_arrays_6',
  topicId: 'cpp_arrays',
  question: 'Reverse an array in place using two-pointer technique.',
  mathSolution: 'Swap elements from start and end moving inward.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    for (int i = 0; i < size / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[size - 1 - i];\n        arr[size - 1 - i] = temp;\n    }\n    \n    cout << "Reversed array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Only need to iterate up to half of array length.'
},
{
  id: 'cpp_arrays_7',
  topicId: 'cpp_arrays',
  question: 'Copy one array to another using loop.',
  mathSolution: 'Iterate and copy each element to destination array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int source[] = {10, 20, 30, 40, 50};\n    int size = sizeof(source) / sizeof(source[0]);\n    int dest[size];\n    \n    for (int i = 0; i < size; i++) {\n        dest[i] = source[i];\n    }\n    \n    cout << "Source array: ";\n    for (int x : source) cout << x << " ";\n    cout << endl;\n    \n    cout << "Copied array: ";\n    for (int x : dest) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use simple loop for copying; memcpy is faster but less type-safe.'
},
{
  id: 'cpp_arrays_8',
  topicId: 'cpp_arrays',
  question: 'Declare and initialize a 2D array (matrix).',
  mathSolution: '2D array is array of arrays, accessed with two indices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n    \n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 4; j++) {\n            cout << matrix[i][j] << " ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: '2D array syntax: type name[rows][columns];'
},
{
  id: 'cpp_arrays_9',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of all elements in 2D array.',
  mathSolution: 'Use nested loops to access each element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    int sum = 0;\n    \n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    \n    cout << "Sum of all elements: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use nested loops for 2D array traversal.'
},
{
  id: 'cpp_arrays_10',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of diagonal elements of a square matrix.',
  mathSolution: 'For square matrix, diagonal indices satisfy i == j.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    int primaryDiagonal = 0, secondaryDiagonal = 0;\n    \n    for (int i = 0; i < 3; i++) {\n        primaryDiagonal += matrix[i][i];\n        secondaryDiagonal += matrix[i][2 - i];\n    }\n    \n    cout << "Primary diagonal sum: " << primaryDiagonal << endl;\n    cout << "Secondary diagonal sum: " << secondaryDiagonal << endl;\n    \n    return 0;\n}',
  hint: 'Primary diagonal: i==j; Secondary diagonal: i+j == size-1.'
},
{
  id: 'cpp_arrays_11',
  topicId: 'cpp_arrays',
  question: 'Find smallest and second smallest element in array.',
  mathSolution: 'Track both min and second min during single pass.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 13, 1, 10, 34, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MAX, second = INT_MAX;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] < first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] < second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    cout << "Smallest: " << first << endl;\n    cout << "Second smallest: " << second << endl;\n    \n    return 0;\n}',
  hint: 'Handle duplicates by checking arr[i] != first.'
},
{
  id: 'cpp_arrays_12',
  topicId: 'cpp_arrays',
  question: 'Find frequency of each element in array.',
  mathSolution: 'Use visited array to track counted elements.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 1, 4, 2, 5, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    vector<bool> visited(size, false);\n    \n    for (int i = 0; i < size; i++) {\n        if (visited[i]) continue;\n        \n        int count = 1;\n        for (int j = i + 1; j < size; j++) {\n            if (arr[i] == arr[j]) {\n                count++;\n                visited[j] = true;\n            }\n        }\n        cout << arr[i] << " appears " << count << " times" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use boolean visited array to avoid recounting.'
},
{
  id: 'cpp_arrays_13',
  topicId: 'cpp_arrays',
  question: 'Remove duplicates from sorted array.',
  mathSolution: 'Shift unique elements to front and track count.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 1, 2, 2, 3, 4, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int uniqueCount = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (i == 0 || arr[i] != arr[i - 1]) {\n            arr[uniqueCount++] = arr[i];\n        }\n    }\n    \n    cout << "Array after removing duplicates: ";\n    for (int i = 0; i < uniqueCount; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, duplicates are adjacent.'
},
{
  id: 'cpp_arrays_14',
  topicId: 'cpp_arrays',
  question: 'Rotate array to the left by k positions.',
  mathSolution: 'Use reversal algorithm or shift elements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid reverse(int arr[], int start, int end) {\n    while (start < end) {\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 3;\n    \n    k = k % size;  // Handle k > size\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    reverse(arr, 0, k - 1);\n    reverse(arr, k, size - 1);\n    reverse(arr, 0, size - 1);\n    \n    cout << "Rotated left by " << k << ": ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Three-reversal algorithm gives O(n) time, O(1) space.'
},
{
  id: 'cpp_arrays_15',
  topicId: 'cpp_arrays',
  question: 'Find missing number in array containing 1 to n.',
  mathSolution: 'Sum formula: expected sum - actual sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 4, 5, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int n = size + 1;  // Since one number is missing\n    \n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    \n    for (int i = 0; i < size; i++) {\n        actualSum += arr[i];\n    }\n    \n    int missing = expectedSum - actualSum;\n    cout << "Missing number: " << missing << endl;\n    \n    return 0;\n}',
  hint: 'Works for numbers from 1 to n with exactly one missing.'
},
{
  id: 'cpp_arrays_16',
  topicId: 'cpp_arrays',
  question: 'Find duplicate number in array (one duplicate).',
  mathSolution: 'Use XOR (a^a=0) or visited array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 3, 4, 2, 2};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Using XOR (for numbers 1 to n with one duplicate)\n    int xor1 = 0, xor2 = 0;\n    \n    for (int i = 0; i < size; i++) {\n        xor1 ^= arr[i];\n    }\n    \n    for (int i = 1; i <= size - 1; i++) {\n        xor2 ^= i;\n    }\n    \n    int duplicate = xor1 ^ xor2;\n    cout << \"Duplicate number: \" << duplicate << endl;\n    \n    return 0;\n}',
  hint: 'XOR of all numbers XOR XOR of 1..n gives duplicate.'
},
{
  id: 'cpp_arrays_17',
  topicId: 'cpp_arrays',
  question: 'Move all zeros to end of array preserving order of non-zero elements.',
  mathSolution: 'Track position for next non-zero element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12, 0, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int nonZeroIndex = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] != 0) {\n            arr[nonZeroIndex++] = arr[i];\n        }\n    }\n    \n    while (nonZeroIndex < size) {\n        arr[nonZeroIndex++] = 0;\n    }\n    \n    cout << \"After moving zeros: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Two-pointer approach writes non-zero elements to front.'
},
{
  id: 'cpp_arrays_18',
  topicId: 'cpp_arrays',
  question: 'Check if array is sorted in ascending order.',
  mathSolution: 'Check if each element is <= next element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    bool isSorted = true;\n    \n    for (int i = 0; i < size - 1; i++) {\n        if (arr[i] > arr[i + 1]) {\n            isSorted = false;\n            break;\n        }\n    }\n    \n    if (isSorted) {\n        cout << "Array is sorted in ascending order" << endl;\n    } else {\n        cout << "Array is NOT sorted" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Only need to check adjacent elements.'
},
{
  id: 'cpp_arrays_19',
  topicId: 'cpp_arrays',
  question: 'Find the second largest element in array.',
  mathSolution: 'Track largest and second largest in single pass.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MIN, second = INT_MIN;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    cout << "Largest: " << first << endl;\n    cout << "Second largest: " << second << endl;\n    \n    return 0;\n}',
  hint: 'Initialize with INT_MIN to handle negative numbers.'
},
{
  id: 'cpp_arrays_20',
  topicId: 'cpp_arrays',
  question: 'Find all pairs in array that sum to given target.',
  mathSolution: 'Use nested loops to check all pairs.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 7, 11, 15, 3, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 9;\n    \n    cout << \"Pairs that sum to \" << target << \":\\n\";\n    \n    for (int i = 0; i < size - 1; i++) {\n        for (int j = i + 1; j < size; j++) {\n            if (arr[i] + arr[j] == target) {\n                cout << \"(\" << arr[i] << \", \" << arr[j] << \")\" << endl;\n            }\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Brute force O(n²); can be optimized with hash map to O(n).'
},
{
  id: 'cpp_arrays_21',
  topicId: 'cpp_arrays',
  question: 'Find intersection of two arrays (common elements).',
  mathSolution: 'Compare elements from both arrays.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int size1 = sizeof(arr1) / sizeof(arr1[0]);\n    int size2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    vector<int> intersection;\n    \n    for (int i = 0; i < size1; i++) {\n        for (int j = 0; j < size2; j++) {\n            if (arr1[i] == arr2[j]) {\n                // Check if already in result\n                bool exists = false;\n                for (int k = 0; k < intersection.size(); k++) {\n                    if (intersection[k] == arr1[i]) {\n                        exists = true;\n                        break;\n                    }\n                }\n                if (!exists) {\n                    intersection.push_back(arr1[i]);\n                }\n                break;\n            }\n        }\n    }\n    \n    cout << \"Intersection: \";\n    for (int x : intersection) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, use two-pointer technique O(n).'
},
{
  id: 'cpp_arrays_22',
  topicId: 'cpp_arrays',
  question: 'Find union of two arrays (all unique elements from both).',
  mathSolution: 'Combine arrays and remove duplicates.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int size1 = sizeof(arr1) / sizeof(arr1[0]);\n    int size2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    vector<int> unionArr;\n    \n    // Add all from first array\n    for (int i = 0; i < size1; i++) {\n        unionArr.push_back(arr1[i]);\n    }\n    \n    // Add from second if not already present\n    for (int i = 0; i < size2; i++) {\n        bool found = false;\n        for (int j = 0; j < unionArr.size(); j++) {\n            if (unionArr[j] == arr2[i]) {\n                found = true;\n                break;\n            }\n        }\n        if (!found) {\n            unionArr.push_back(arr2[i]);\n        }\n    }\n    \n    cout << \"Union: \";\n    for (int x : unionArr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Union contains all unique elements from both arrays.'
},
{
  id: 'cpp_arrays_23',
  topicId: 'cpp_arrays',
  question: 'Find kth largest element in array (using selection algorithm).',
  mathSolution: 'Partial sorting or quick select.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {3, 2, 1, 5, 6, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 2;\n    \n    // Sort in descending order\n    sort(arr, arr + size, greater<int>());\n    \n    cout << k << "th largest element: " << arr[k - 1] << endl;\n    \n    // Without full sort (using nth_element)\n    int arr2[] = {3, 2, 1, 5, 6, 4};\n    nth_element(arr2, arr2 + k - 1, arr2 + size, greater<int>());\n    cout << "Kth largest (nth_element): " << arr2[k - 1] << endl;\n    \n    return 0;\n}',
  hint: 'nth_element gives O(n) average time for kth element.'
},
{
  id: 'cpp_arrays_24',
  topicId: 'cpp_arrays',
  question: 'Find all leaders in array (element greater than all elements to its right).',
  mathSolution: 'Traverse from right, track current maximum.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {16, 17, 4, 3, 5, 2};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    vector<int> leaders;\n    int maxFromRight = arr[size - 1];\n    leaders.push_back(maxFromRight);\n    \n    for (int i = size - 2; i >= 0; i--) {\n        if (arr[i] >= maxFromRight) {\n            maxFromRight = arr[i];\n            leaders.push_back(maxFromRight);\n        }\n    }\n    \n    cout << \"Leaders: \";\n    for (int i = leaders.size() - 1; i >= 0; i--) {\n        cout << leaders[i] << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Rightmost element is always a leader.'
},
{
  id: 'cpp_arrays_25',
  topicId: 'cpp_arrays',
  question: 'Compute prefix sum array (running sum).',
  mathSolution: 'prefix[i] = prefix[i-1] + arr[i].',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int prefix[size];\n    \n    prefix[0] = arr[0];\n    for (int i = 1; i < size; i++) {\n        prefix[i] = prefix[i - 1] + arr[i];\n    }\n    \n    cout << "Original array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    cout << \"Prefix sum array: \";\n    for (int x : prefix) cout << x << \" \";\n    cout << endl;\n    \n    // Range sum query: sum from l to r = prefix[r] - prefix[l-1]\n    int l = 1, r = 3;\n    int sum = prefix[r] - (l > 0 ? prefix[l - 1] : 0);\n    cout << \"Sum from index \" << l << \" to \" << r << \": \" << sum << endl;\n    \n    return 0;\n}',
  hint: 'Prefix sums enable O(1) range sum queries.'
},
{
  id: 'cpp_arrays_26',
  topicId: 'cpp_arrays',
  question: 'Find maximum difference between two elements (largest element - smallest).',
  mathSolution: 'Track minimum so far and max difference.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 3, 10, 6, 4, 8, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int maxDiff = arr[1] - arr[0];\n    int minElement = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] - minElement > maxDiff) {\n            maxDiff = arr[i] - minElement;\n        }\n        if (arr[i] < minElement) {\n            minElement = arr[i];\n        }\n    }\n    \n    cout << \"Maximum difference: \" << maxDiff << endl;\n    \n    return 0;\n}',
  hint: 'Max difference requires larger element after smaller element.'
},
{
  id: 'cpp_arrays_27',
  topicId: 'cpp_arrays',
  question: 'Product of array except self (without division).',
  mathSolution: 'Use left product array and right product array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int result[size];\n    \n    // Left products\n    int left[size];\n    left[0] = 1;\n    for (int i = 1; i < size; i++) {\n        left[i] = left[i - 1] * arr[i - 1];\n    }\n    \n    // Right products\n    int right[size];\n    right[size - 1] = 1;\n    for (int i = size - 2; i >= 0; i--) {\n        right[i] = right[i + 1] * arr[i + 1];\n    }\n    \n    // Result = left * right\n    for (int i = 0; i < size; i++) {\n        result[i] = left[i] * right[i];\n    }\n    \n    cout << \"Product except self: \";\n    for (int x : result) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Space-optimized version uses single array for output.'
},
{
  id: 'cpp_arrays_28',
  topicId: 'cpp_arrays',
  question: 'Find subarray with given sum (positive numbers).',
  mathSolution: 'Use sliding window technique.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 4, 20, 3, 10, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 33;\n    \n    int start = 0, currentSum = 0;\n    bool found = false;\n    \n    for (int end = 0; end < size; end++) {\n        currentSum += arr[end];\n        \n        while (currentSum > target && start < end) {\n            currentSum -= arr[start];\n            start++;\n        }\n        \n        if (currentSum == target) {\n            cout << \"Subarray found from index \" << start << \" to \" << end << endl;\n            found = true;\n            break;\n        }\n    }\n    \n    if (!found) {\n        cout << \"No subarray with given sum\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Sliding window works for arrays with positive numbers.'
},
{
  id: 'cpp_arrays_29',
  topicId: 'cpp_arrays',
  question: 'Find maximum sum of subarray of size k (sliding window).',
  mathSolution: 'Compute sum of first window, then slide.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 4;\n    \n    if (k > size) {\n        cout << \"Invalid window size\" << endl;\n        return 0;\n    }\n    \n    int windowSum = 0;\n    for (int i = 0; i < k; i++) {\n        windowSum += arr[i];\n    }\n    \n    int maxSum = windowSum;\n    \n    for (int i = k; i < size; i++) {\n        windowSum = windowSum - arr[i - k] + arr[i];\n        if (windowSum > maxSum) {\n            maxSum = windowSum;\n        }\n    }\n    \n    cout << \"Maximum sum of subarray of size \" << k << \": \" << maxSum << endl;\n    \n    return 0;\n}',
  hint: 'Sliding window gives O(n) time instead of O(n*k).'
},
{
  id: 'cpp_arrays_30',
  topicId: 'cpp_arrays',
  question: 'Given an array, rearrange it so that arr[i] = i for valid indices, else -1.',
  mathSolution: 'Swap elements to correct positions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] >= 0 && arr[i] != i) {\n            // Swap to correct position\n            int temp = arr[arr[i]];\n            arr[arr[i]] = arr[i];\n            arr[i] = temp;\n        }\n    }\n    \n    // Fill remaining with -1\n    for (int i = 0; i < size; i++) {\n        if (arr[i] != i) {\n            arr[i] = -1;\n        }\n    }\n    \n    cout << \"Rearranged array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Place elements at their correct index positions.'
},
{
  id: 'cpp_arrays_31',
  topicId: 'cpp_arrays',
  question: 'Find majority element (element appearing more than n/2 times).',
  mathSolution: 'Moore\'s voting algorithm.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {3, 3, 4, 2, 4, 4, 2, 4, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Find candidate\n    int candidate = arr[0];\n    int count = 1;\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] == candidate) {\n            count++;\n        } else {\n            count--;\n            if (count == 0) {\n                candidate = arr[i];\n                count = 1;\n            }\n        }\n    }\n    \n    // Verify candidate\n    count = 0;\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == candidate) count++;\n    }\n    \n    if (count > size / 2) {\n        cout << \"Majority element: \" << candidate << endl;\n    } else {\n        cout << \"No majority element\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Moore\'s voting algorithm runs in O(n) time, O(1) space.'
},
{
  id: 'cpp_arrays_32',
  topicId: 'cpp_arrays',
  question: 'Find the equilibrium index (where sum left = sum right).',
  mathSolution: 'Compute total sum, then iterate left sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {-7, 1, 5, 2, -4, 3, 0};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int totalSum = 0;\n    for (int i = 0; i < size; i++) {\n        totalSum += arr[i];\n    }\n    \n    int leftSum = 0;\n    bool found = false;\n    \n    for (int i = 0; i < size; i++) {\n        totalSum -= arr[i];\n        \n        if (leftSum == totalSum) {\n            cout << \"Equilibrium index: \" << i << endl;\n            found = true;\n        }\n        \n        leftSum += arr[i];\n    }\n    \n    if (!found) {\n        cout << \"No equilibrium index found\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Equilibrium index has left sum = right sum.'
},
{
  id: 'cpp_arrays_33',
  topicId: 'cpp_arrays',
  question: 'Segregate 0s and 1s in array.',
  mathSolution: 'Use two-pointer technique.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, 1, 0, 1, 0, 0, 1, 1, 1, 0};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int left = 0, right = size - 1;\n    \n    while (left < right) {\n        while (arr[left] == 0 && left < right) left++;\n        while (arr[right] == 1 && left < right) right--;\n        \n        if (left < right) {\n            arr[left] = 0;\n            arr[right] = 1;\n            left++;\n            right--;\n        }\n    }\n    \n    cout << \"Segregated array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Segregate 0s on left, 1s on right.'
},
{
  id: 'cpp_arrays_34',
  topicId: 'cpp_arrays',
  question: 'Find the triplet that sums to zero.',
  mathSolution: 'Sort array, then use two-pointer for each element.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, -1, 2, -3, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    sort(arr, arr + size);\n    \n    bool found = false;\n    \n    for (int i = 0; i < size - 2; i++) {\n        int left = i + 1;\n        int right = size - 1;\n        \n        while (left < right) {\n            int sum = arr[i] + arr[left] + arr[right];\n            \n            if (sum == 0) {\n                cout << \"Triplet: \" << arr[i] << \", \" << arr[left] << \", \" << arr[right] << endl;\n                found = true;\n                left++;\n                right--;\n            } else if (sum < 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    \n    if (!found) {\n        cout << \"No triplet sums to zero\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Sorting enables O(n²) solution instead of O(n³).'
},
{
  id: 'cpp_arrays_35',
  topicId: 'cpp_arrays',
  question: 'Find the first repeating element in array.',
  mathSolution: 'Use nested loops or hash map.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 5, 3, 4, 3, 5, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Using hash set to track seen elements\n    unordered_set<int> seen;\n    int firstRepeating = -1;\n    \n    for (int i = size - 1; i >= 0; i--) {\n        if (seen.find(arr[i]) != seen.end()) {\n            firstRepeating = arr[i];\n        } else {\n            seen.insert(arr[i]);\n        }\n    }\n    \n    if (firstRepeating != -1) {\n        cout << \"First repeating element: \" << firstRepeating << endl;\n    } else {\n        cout << \"No repeating element found\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Traverse from right to find first element that repeats.'
},
{
  id: 'cpp_arrays_36',
  topicId: 'cpp_arrays',
  question: 'Transpose a matrix (convert rows to columns).',
  mathSolution: 'Swap arr[i][j] with arr[j][i] for i < j.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    cout << \"Original matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Transpose\n    for (int i = 0; i < 3; i++) {\n        for (int j = i + 1; j < 3; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = temp;\n        }\n    }\n    \n    cout << \"\\nTransposed matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'For square matrix, swap elements above diagonal with below.'
},
{
  id: 'cpp_arrays_37',
  topicId: 'cpp_arrays',
  question: 'Multiply two matrices.',
  mathSolution: 'Result[i][j] = sum over k (A[i][k] * B[k][j]).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};\n    int result[2][2] = {0};\n    \n    // Matrix multiplication\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            for (int k = 0; k < 3; k++) {\n                result[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n    \n    cout << \"Product matrix:\\n\";\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            cout << result[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Matrix multiplication: columns of first must equal rows of second.'
},
{
  id: 'cpp_arrays_38',
  topicId: 'cpp_arrays',
  question: 'Determine if two 2D arrays are equal.',
  mathSolution: 'Compare each element of both matrices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nbool areEqual(int A[3][3], int B[3][3]) {\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            if (A[i][j] != B[i][j]) return false;\n        }\n    }\n    return true;\n}\n\nint main() {\n    int A[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int B[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int C[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 0}};\n    \n    if (areEqual(A, B)) {\n        cout << \"A and B are equal\" << endl;\n    } else {\n        cout << \"A and B are not equal\" << endl;\n    }\n    \n    if (areEqual(A, C)) {\n        cout << \"A and C are equal\" << endl;\n    } else {\n        cout << \"A and C are not equal\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Matrices are equal if all corresponding elements are equal.'
},
{
  id: 'cpp_arrays_39',
  topicId: 'cpp_arrays',
  question: 'Create a jagged array (array of arrays with different sizes) using dynamic allocation.',
  mathSolution: 'Allocate array of pointers, then allocate each row.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows = 3;\n    int* jagged[3];\n    int sizes[3] = {2, 3, 4};\n    \n    // Allocate memory\n    for (int i = 0; i < rows; i++) {\n        jagged[i] = new int[sizes[i]];\n        for (int j = 0; j < sizes[i]; j++) {\n            jagged[i][j] = i * 10 + j;\n        }\n    }\n    \n    // Print jagged array\n    for (int i = 0; i < rows; i++) {\n        cout << \"Row \" << i << \" (size \" << sizes[i] << \"): \";\n        for (int j = 0; j < sizes[i]; j++) {\n            cout << jagged[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Free memory\n    for (int i = 0; i < rows; i++) {\n        delete[] jagged[i];\n    }\n    \n    return 0;\n}',
  hint: 'Jagged arrays require dynamic memory allocation for each row.'
},
{
  id: 'cpp_arrays_40',
  topicId: 'cpp_arrays',
  question: 'Find the difference between maximum and minimum element in array.',
  mathSolution: 'Find max and min, then subtract.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 3, 45, 7, 89, 23, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int maxVal = INT_MIN, minVal = INT_MAX;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] > maxVal) maxVal = arr[i];\n        if (arr[i] < minVal) minVal = arr[i];\n    }\n    \n    int difference = maxVal - minVal;\n    \n    cout << \"Maximum: \" << maxVal << endl;\n    cout << \"Minimum: \" << minVal << endl;\n    cout << \"Difference: \" << difference << endl;\n    \n    return 0;\n}',
  hint: 'Range = max - min.'
},
{
  id: 'cpp_arrays_41',
  topicId: 'cpp_arrays',
  question: 'Insert element at specific position in array.',
  mathSolution: 'Shift elements to right, then insert at position.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[10] = {1, 2, 3, 4, 5};\n    int size = 5;\n    int pos, element;\n    \n    cout << \"Original array: \";\n    for (int i = 0; i < size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    \n    cout << \"Enter position (0-\" << size << \") and element: \";\n    cin >> pos >> element;\n    \n    if (pos < 0 || pos > size) {\n        cout << \"Invalid position\" << endl;\n        return 0;\n    }\n    \n    // Shift elements to the right\n    for (int i = size; i > pos; i--) {\n        arr[i] = arr[i - 1];\n    }\n    \n    arr[pos] = element;\n    size++;\n    \n    cout << \"Array after insertion: \";\n    for (int i = 0; i < size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Array insertion shifts elements, O(n) time.'
},
{
  id: 'cpp_arrays_42',
  topicId: 'cpp_arrays',
  question: 'Delete element from array at given position.',
  mathSolution: 'Shift elements to left, then reduce size.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[10] = {10, 20, 30, 40, 50};\n    int size = 5;\n    int pos;\n    \n    cout << \"Original array: \";\n    for (int i = 0; i < size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    \n    cout << \"Enter position to delete (0-\" << size - 1 << \"): \";\n    cin >> pos;\n    \n    if (pos < 0 || pos >= size) {\n        cout << \"Invalid position\" << endl;\n        return 0;\n    }\n    \n    // Shift elements to the left\n    for (int i = pos; i < size - 1; i++) {\n        arr[i] = arr[i + 1];\n    }\n    size--;\n    \n    cout << \"Array after deletion: \";\n    for (int i = 0; i < size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Array deletion shifts elements, O(n) time.'
},
{
  id: 'cpp_arrays_43',
  topicId: 'cpp_arrays',
  question: 'Find median of sorted array.',
  mathSolution: 'If odd length, middle element; if even, average of two middle.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {1, 2, 3, 4, 5, 6};\n    int size1 = sizeof(arr1) / sizeof(arr1[0]);\n    int size2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    // For odd length array\n    if (size1 % 2 == 1) {\n        double median = arr1[size1 / 2];\n        cout << \"Median of odd array: \" << median << endl;\n    }\n    \n    // For even length array\n    if (size2 % 2 == 0) {\n        double median = (arr2[size2 / 2 - 1] + arr2[size2 / 2]) / 2.0;\n        cout << \"Median of even array: \" << median << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Array must be sorted to find median.'
},
{
  id: 'cpp_arrays_44',
  topicId: 'cpp_arrays',
  question: 'Find median of two sorted arrays.',
  mathSolution: 'Use binary search on smaller array for partition.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\ndouble findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    if (nums1.size() > nums2.size()) {\n        return findMedianSortedArrays(nums2, nums1);\n    }\n    \n    int m = nums1.size(), n = nums2.size();\n    int left = 0, right = m;\n    \n    while (left <= right) {\n        int partition1 = (left + right) / 2;\n        int partition2 = (m + n + 1) / 2 - partition1;\n        \n        int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];\n        int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];\n        int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];\n        int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];\n        \n        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n            if ((m + n) % 2 == 0) {\n                return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;\n            } else {\n                return max(maxLeft1, maxLeft2);\n            }\n        } else if (maxLeft1 > minRight2) {\n            right = partition1 - 1;\n        } else {\n            left = partition1 + 1;\n        }\n    }\n    return 0.0;\n}\n\nint main() {\n    vector<int> nums1 = {1, 3};\n    vector<int> nums2 = {2};\n    \n    cout << \"Median: \" << findMedianSortedArrays(nums1, nums2) << endl;\n    \n    return 0;\n}',
  hint: 'Binary search on smaller array for O(log(min(m,n))) time.'
},
{
  id: 'cpp_arrays_45',
  topicId: 'cpp_arrays',
  question: 'Find the longest consecutive subsequence in unsorted array.',
  mathSolution: 'Use hash set for O(n) time.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {100, 4, 200, 1, 3, 2};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    unordered_set<int> elements(arr, arr + size);\n    int longestStreak = 0;\n    \n    for (int num : elements) {\n        if (elements.find(num - 1) == elements.end()) {\n            int currentNum = num;\n            int currentStreak = 1;\n            \n            while (elements.find(currentNum + 1) != elements.end()) {\n                currentNum++;\n                currentStreak++;\n            }\n            \n            longestStreak = max(longestStreak, currentStreak);\n        }\n    }\n    \n    cout << \"Longest consecutive subsequence length: \" << longestStreak << endl;\n    \n    return 0;\n}',
  hint: 'Only start counting from numbers that have no predecessor.'
},
{
  id: 'cpp_arrays_46',
  topicId: 'cpp_arrays',
  question: 'Find all pairs with given sum in sorted array (two-pointer).',
  mathSolution: 'Use two pointers (start and end) for O(n) time.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 10;\n    \n    int left = 0, right = size - 1;\n    \n    cout << \"Pairs with sum \" << target << \":\\n\";\n    \n    while (left < right) {\n        int sum = arr[left] + arr[right];\n        \n        if (sum == target) {\n            cout << \"(\" << arr[left] << \", \" << arr[right] << \")\" << endl;\n            left++;\n            right--;\n        } else if (sum < target) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Two-pointer technique works on sorted arrays.'
},
{
  id: 'cpp_arrays_47',
  topicId: 'cpp_arrays',
  question: 'Find the next greater element for each element in array.',
  mathSolution: 'Use stack to find next greater element.',
  codeSolution: '#include <iostream>\n#include <stack>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {4, 5, 2, 25, 10, 12};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    vector<int> result(size, -1);\n    \n    stack<int> st;  // Stores indices\n    \n    for (int i = 0; i < size; i++) {\n        while (!st.empty() && arr[st.top()] < arr[i]) {\n            result[st.top()] = arr[i];\n            st.pop();\n        }\n        st.push(i);\n    }\n    \n    cout << \"Next greater element:\\n\";\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << \" -> \" << result[i] << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use stack to track elements waiting for next greater.'
},
{
  id: 'cpp_arrays_48',
  topicId: 'cpp_arrays',
  question: 'Find the closest sum to target in array (triplet).',
  mathSolution: 'Sort array, use two-pointer for each element.',
  codeSolution: '#include <iostream>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {-1, 2, 1, -4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 1;\n    \n    sort(arr, arr + size);\n    int closestSum = arr[0] + arr[1] + arr[2];\n    \n    for (int i = 0; i < size - 2; i++) {\n        int left = i + 1;\n        int right = size - 1;\n        \n        while (left < right) {\n            int sum = arr[i] + arr[left] + arr[right];\n            \n            if (abs(sum - target) < abs(closestSum - target)) {\n                closestSum = sum;\n            }\n            \n            if (sum < target) {\n                left++;\n            } else if (sum > target) {\n                right--;\n            } else {\n                cout << \"Exact match: \" << sum << endl;\n                return 0;\n            }\n        }\n    }\n    \n    cout << \"Closest sum: \" << closestSum << endl;\n    \n    return 0;\n}',
  hint: 'Sorting allows O(n²) solution for triplet sum closest to target.'
},
{
  id: 'cpp_arrays_49',
  topicId: 'cpp_arrays',
  question: 'Find the number of inversions in array (pairs i<j with arr[i]>arr[j]).',
  mathSolution: 'Use merge sort to count inversions efficiently.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nlong long mergeAndCount(int arr[], int temp[], int left, int mid, int right) {\n    int i = left, j = mid + 1, k = left;\n    long long invCount = 0;\n    \n    while (i <= mid && j <= right) {\n        if (arr[i] <= arr[j]) {\n            temp[k++] = arr[i++];\n        } else {\n            temp[k++] = arr[j++];\n            invCount += (mid - i + 1);\n        }\n    }\n    \n    while (i <= mid) temp[k++] = arr[i++];\n    while (j <= right) temp[k++] = arr[j++];\n    for (i = left; i <= right; i++) arr[i] = temp[i];\n    \n    return invCount;\n}\n\nlong long mergeSortAndCount(int arr[], int temp[], int left, int right) {\n    long long invCount = 0;\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        invCount += mergeSortAndCount(arr, temp, left, mid);\n        invCount += mergeSortAndCount(arr, temp, mid + 1, right);\n        invCount += mergeAndCount(arr, temp, left, mid, right);\n    }\n    return invCount;\n}\n\nint main() {\n    int arr[] = {8, 4, 2, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int temp[size];\n    \n    long long inversions = mergeSortAndCount(arr, temp, 0, size - 1);\n    \n    cout << \"Number of inversions: \" << inversions << endl;\n    \n    return 0;\n}',
  hint: 'Inversions count measures how far array is from sorted.'
},
{
  id: 'cpp_arrays_50',
  topicId: 'cpp_arrays',
  question: 'Complete array demonstration program combining multiple concepts.',
  mathSolution: 'Showcase array operations: traversal, modification, searching, sorting.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\n// Function to print array\nvoid printArray(int arr[], int size, const string& msg) {\n    cout << msg << \": [\";\n    for (int i = 0; i < size; i++) {\n        cout << arr[i];\n        if (i < size - 1) cout << \", \";\n    }\n    cout << \"]\\n\";\n}\n\nint main() {\n    cout << \"=== Array Operations Demonstration ===\\n\";\n    \n    // 1. Declaration and initialization\n    int arr[8] = {64, 34, 25, 12, 22, 11, 90, 45};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    printArray(arr, size, \"Original array\");\n    \n    // 2. Sum and average\n    int sum = 0;\n    for (int x : arr) sum += x;\n    cout << \"Sum: \" << sum << \", Average: \" << (double)sum / size << \"\\n\";\n    \n    // 3. Find min and max\n    int minVal = arr[0], maxVal = arr[0], minIndex = 0, maxIndex = 0;\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < minVal) { minVal = arr[i]; minIndex = i; }\n        if (arr[i] > maxVal) { maxVal = arr[i]; maxIndex = i; }\n    }\n    cout << \"Min: \" << minVal << \" at index \" << minIndex << \"\\n\";\n    cout << \"Max: \" << maxVal << \" at index \" << maxIndex << \"\\n\";\n    \n    // 4. Search (linear)\n    int target = 22;\n    int foundIndex = -1;\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) { foundIndex = i; break; }\n    }\n    cout << \"Element \" << target << \" found at index \" << foundIndex << \"\\n\";\n    \n    // 5. Reverse array\n    for (int i = 0; i < size / 2; i++) {\n        swap(arr[i], arr[size - 1 - i]);\n    }\n    printArray(arr, size, \"Reversed array\");\n    \n    // 6. Sort array (using STL)\n    sort(arr, arr + size);\n    printArray(arr, size, \"Sorted array\");\n    \n    // 7. Binary search (on sorted array)\n    target = 34;\n    int left = 0, right = size - 1;\n    int binaryIndex = -1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) { binaryIndex = mid; break; }\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    cout << \"Binary search for \" << target << \": \" << (binaryIndex != -1 ? \"Found\" : \"Not found\") << \"\\n\";\n    \n    // 8. 2D array example\n    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    cout << \"\\n2D Array (3x3 matrix):\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // 9. Diagonal sum\n    int diagSum = 0;\n    for (int i = 0; i < 3; i++) diagSum += matrix[i][i];\n    cout << \"Primary diagonal sum: \" << diagSum << endl;\n    \n    return 0;\n}',
  hint: 'This comprehensive demo covers array creation, traversal, modification, searching, sorting, and 2D arrays.'
}
);