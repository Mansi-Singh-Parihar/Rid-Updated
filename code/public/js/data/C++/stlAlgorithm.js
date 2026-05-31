QuizData.questions.push(
{
  id: 'cpp_stl_algorithms_1',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::sort to sort a vector of integers in ascending order.',
  mathSolution: 'sort rearranges elements in non-decreasing order.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3, 7};\n    sort(v.begin(), v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'sort requires random access iterators (vector, array, deque).'
},
{
  id: 'cpp_stl_algorithms_2',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::sort with custom comparator for descending order.',
  mathSolution: 'Comparator defines custom sorting criteria.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3, 7};\n    sort(v.begin(), v.end(), greater<int>());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'greater<int>() sorts in descending order.'
},
{
  id: 'cpp_stl_algorithms_3',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::stable_sort to preserve relative order of equal elements.',
  mathSolution: 'stable_sort maintains original order of equal elements.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<pair<string, int>> people = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 25}};\n    \n    stable_sort(people.begin(), people.end(), \n                [](const auto& a, const auto& b) {\n                    return a.second < b.second;\n                });\n    \n    for (const auto& [name, age] : people) {\n        cout << name << ": " << age << endl;\n    }\n    return 0;\n}',
  hint: 'stable_sort preserves order of equivalent elements.'
},
{
  id: 'cpp_stl_algorithms_4',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::find to search for an element in a container.',
  mathSolution: 'find returns iterator to first matching element.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    auto it = find(v.begin(), v.end(), 30);\n    \n    if (it != v.end()) {\n        cout << "Found at index: " << distance(v.begin(), it) << endl;\n    } else {\n        cout << "Not found" << endl;\n    }\n    return 0;\n}',
  hint: 'find returns end() if element not found.'
},
{
  id: 'cpp_stl_algorithms_5',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::find_if to search based on condition.',
  mathSolution: 'find_if returns first element satisfying predicate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 25; });\n    \n    if (it != v.end()) {\n        cout << "First element > 25: " << *it << endl;\n    }\n    return 0;\n}',
  hint: 'find_if uses predicate for custom search logic.'
},
{
  id: 'cpp_stl_algorithms_6',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::count to count occurrences of a value.',
  mathSolution: 'count returns number of matching elements.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 2, 4, 2, 5};\n    int cnt = count(v.begin(), v.end(), 2);\n    cout << "Number of 2s: " << cnt << endl;\n    return 0;\n}',
  hint: 'count returns count of elements equal to value.'
},
{
  id: 'cpp_stl_algorithms_7',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::count_if to count based on condition.',
  mathSolution: 'count_if returns number of elements satisfying predicate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int cnt = count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });\n    cout << "Even numbers count: " << cnt << endl;\n    return 0;\n}',
  hint: 'count_if counts elements satisfying condition.'
},
{
  id: 'cpp_stl_algorithms_8',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::copy to copy elements between containers.',
  mathSolution: 'copy copies range from source to destination.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <iterator>\nusing namespace std;\n\nint main() {\n    vector<int> src = {1, 2, 3, 4, 5};\n    vector<int> dest(src.size());\n    \n    copy(src.begin(), src.end(), dest.begin());\n    \n    for (int x : dest) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'copy requires destination to have enough space.'
},
{
  id: 'cpp_stl_algorithms_9',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::copy_if to copy elements satisfying condition.',
  mathSolution: 'copy_if copies only elements that meet predicate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> src = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    vector<int> even;\n    \n    copy_if(src.begin(), src.end(), back_inserter(even),\n            [](int x) { return x % 2 == 0; });\n    \n    for (int x : even) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'back_inserter automatically expands destination.'
},
{
  id: 'cpp_stl_algorithms_10',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::move to transfer ownership of elements.',
  mathSolution: 'move transfers resources, leaving source in valid state.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> src = {"apple", "banana", "cherry"};\n    vector<string> dest(src.size());\n    \n    move(src.begin(), src.end(), dest.begin());\n    \n    cout << "Source size: " << src.size() << endl;\n    cout << "Destination: ";\n    for (const auto& s : dest) cout << s << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'move transfers, leaving source in unspecified but valid state.'
},
{
  id: 'cpp_stl_algorithms_11',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::transform to apply function to each element.',
  mathSolution: 'transform applies unary or binary operation.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * x; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'transform can modify elements in place or output to new range.'
},
{
  id: 'cpp_stl_algorithms_12',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::transform with two input ranges.',
  mathSolution: 'transform combines two ranges element-wise.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4};\n    vector<int> b = {5, 6, 7, 8};\n    vector<int> result(a.size());\n    \n    transform(a.begin(), a.end(), b.begin(), result.begin(),\n              [](int x, int y) { return x + y; });\n    \n    for (int x : result) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'binary transform combines two ranges with binary operation.'
},
{
  id: 'cpp_stl_algorithms_13',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::reverse to reverse order of elements.',
  mathSolution: 'reverse reverses range in place.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    reverse(v.begin(), v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'reverse operates in place, O(n) complexity.'
},
{
  id: 'cpp_stl_algorithms_14',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::rotate to rotate elements in a range.',
  mathSolution: 'rotate moves middle element to beginning.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    rotate(v.begin(), v.begin() + 2, v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'rotate swaps elements around the middle iterator.'
},
{
  id: 'cpp_stl_algorithms_15',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::unique to remove consecutive duplicates.',
  mathSolution: 'unique removes consecutive duplicates, returns new end.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 1, 2, 2, 3, 3, 4, 5, 5};\n    auto it = unique(v.begin(), v.end());\n    v.erase(it, v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'unique only removes consecutive duplicates; sort first if needed.'
},
{
  id: 'cpp_stl_algorithms_16',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::remove and erase to remove elements by value.',
  mathSolution: 'remove shifts elements, erase removes from container.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 3, 6};\n    v.erase(remove(v.begin(), v.end(), 3), v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'remove-erase idiom is standard for removing elements from container.'
},
{
  id: 'cpp_stl_algorithms_17',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::remove_if to remove elements satisfying condition.',
  mathSolution: 'remove_if removes elements based on predicate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    v.erase(remove_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; }), v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'remove_if removes elements satisfying predicate.'
},
{
  id: 'cpp_stl_algorithms_18',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::replace to replace occurrences of a value.',
  mathSolution: 'replace substitutes old value with new value.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 2, 4, 2, 5};\n    replace(v.begin(), v.end(), 2, 99);\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'replace changes all occurrences of a value in place.'
},
{
  id: 'cpp_stl_algorithms_19',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::replace_if to replace based on condition.',
  mathSolution: 'replace_if replaces elements satisfying predicate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    replace_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; }, 0);\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'replace_if replaces elements that meet condition.'
},
{
  id: 'cpp_stl_algorithms_20',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::fill to set all elements to a value.',
  mathSolution: 'fill assigns same value to all elements in range.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v(10);\n    fill(v.begin(), v.end(), 42);\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'fill is efficient for setting all elements to same value.'
},
{
  id: 'cpp_stl_algorithms_21',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::generate to fill with generated values.',
  mathSolution: 'generate assigns values from function object.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <random>\nusing namespace std;\n\nint main() {\n    vector<int> v(10);\n    int n = 1;\n    generate(v.begin(), v.end(), [&n]() { return n++; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'generate uses callable to produce values.'
},
{
  id: 'cpp_stl_algorithms_22',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::iota to fill with sequential values.',
  mathSolution: 'iota assigns incrementing values starting from given value.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v(10);\n    iota(v.begin(), v.end(), 1);\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'iota fills with sequential integers.'
},
{
  id: 'cpp_stl_algorithms_23',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::for_each to apply function to each element.',
  mathSolution: 'for_each applies function to all elements.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    for_each(v.begin(), v.end(), [](int& x) { x *= 2; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'for_each is similar to range-based for but with algorithm benefits.'
},
{
  id: 'cpp_stl_algorithms_24',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::accumulate to sum elements.',
  mathSolution: 'accumulate computes sum (or other operation).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int sum = accumulate(v.begin(), v.end(), 0);\n    cout << "Sum: " << sum << endl;\n    return 0;\n}',
  hint: 'accumulate initializes with given initial value.'
},
{
  id: 'cpp_stl_algorithms_25',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::accumulate with custom binary operation.',
  mathSolution: 'accumulate can compute product, min, max, etc.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int product = accumulate(v.begin(), v.end(), 1, multiplies<int>());\n    cout << "Product: " << product << endl;\n    return 0;\n}',
  hint: 'custom binary operation allows product, concatenation, etc.'
},
{
  id: 'cpp_stl_algorithms_26',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::inner_product to compute dot product.',
  mathSolution: 'inner_product computes sum of element-wise products.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4};\n    vector<int> b = {5, 6, 7, 8};\n    int dot = inner_product(a.begin(), a.end(), b.begin(), 0);\n    cout << "Dot product: " << dot << endl;\n    return 0;\n}',
  hint: 'inner_product computes sum of a[i] * b[i].'
},
{
  id: 'cpp_stl_algorithms_27',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::partial_sum to compute cumulative sum.',
  mathSolution: 'partial_sum stores running total in output.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    vector<int> ps(v.size());\n    partial_sum(v.begin(), v.end(), ps.begin());\n    \n    for (int x : ps) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'partial_sum computes prefix sums.'
},
{
  id: 'cpp_stl_algorithms_28',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::adjacent_difference to compute differences.',
  mathSolution: 'adjacent_difference computes differences between consecutive elements.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 3, 6, 10, 15};\n    vector<int> diff(v.size());\n    adjacent_difference(v.begin(), v.end(), diff.begin());\n    \n    for (int x : diff) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'adjacent_difference returns differences; first element is unchanged.'
},
{
  id: 'cpp_stl_algorithms_29',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::reduce for parallel accumulation (C++17).',
  mathSolution: 'reduce enables parallel computation.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\n#include <execution>\nusing namespace std;\n\nint main() {\n    vector<int> v(1000000, 1);\n    int sum = reduce(execution::par, v.begin(), v.end(), 0);\n    cout << "Sum: " << sum << endl;\n    return 0;\n}',
  hint: 'reduce with execution::par enables parallel execution.'
},
{
  id: 'cpp_stl_algorithms_30',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::min_element to find smallest element.',
  mathSolution: 'min_element returns iterator to smallest element.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    auto it = min_element(v.begin(), v.end());\n    cout << "Min element: " << *it << endl;\n    return 0;\n}',
  hint: 'min_element returns iterator, not value.'
},
{
  id: 'cpp_stl_algorithms_31',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::max_element to find largest element.',
  mathSolution: 'max_element returns iterator to largest element.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    auto it = max_element(v.begin(), v.end());\n    cout << "Max element: " << *it << endl;\n    return 0;\n}',
  hint: 'max_element finds maximum value in range.'
},
{
  id: 'cpp_stl_algorithms_32',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::minmax_element to find both min and max.',
  mathSolution: 'minmax_element returns pair of iterators to min and max.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    auto [min_it, max_it] = minmax_element(v.begin(), v.end());\n    cout << "Min: " << *min_it << ", Max: " << *max_it << endl;\n    return 0;\n}',
  hint: 'minmax_element finds both min and max in one pass.'
},
{
  id: 'cpp_stl_algorithms_33',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::binary_search to check if element exists.',
  mathSolution: 'binary_search returns bool for sorted range.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n    bool found = binary_search(v.begin(), v.end(), 5);\n    cout << "5 found: " << boolalpha << found << endl;\n    return 0;\n}',
  hint: 'binary_search requires sorted range.'
},
{
  id: 'cpp_stl_algorithms_34',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::lower_bound to find first element >= value.',
  mathSolution: 'lower_bound returns first position where value can be inserted.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 4, 4, 5, 6, 8};\n    auto it = lower_bound(v.begin(), v.end(), 4);\n    cout << "First >= 4 at index: " << distance(v.begin(), it) << endl;\n    return 0;\n}',
  hint: 'lower_bound uses binary search on sorted range.'
},
{
  id: 'cpp_stl_algorithms_35',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::upper_bound to find first element > value.',
  mathSolution: 'upper_bound returns first position where value > searched.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 4, 4, 5, 6, 8};\n    auto it = upper_bound(v.begin(), v.end(), 4);\n    cout << "First > 4 at index: " << distance(v.begin(), it) << endl;\n    return 0;\n}',
  hint: 'upper_bound finds first element greater than value.'
},
{
  id: 'cpp_stl_algorithms_36',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::equal_range to find range of equal elements.',
  mathSolution: 'equal_range returns pair of lower_bound and upper_bound.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 4, 4, 4, 5, 6, 8};\n    auto [lower, upper] = equal_range(v.begin(), v.end(), 4);\n    cout << "Range of 4: [" << distance(v.begin(), lower) \n         << ", " << distance(v.begin(), upper) << ")" << endl;\n    return 0;\n}',
  hint: 'equal_range gives range of elements equal to value.'
},
{
  id: 'cpp_stl_algorithms_37',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::merge to merge two sorted ranges.',
  mathSolution: 'merge combines two sorted ranges into one sorted range.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 3, 5, 7};\n    vector<int> b = {2, 4, 6, 8};\n    vector<int> c(a.size() + b.size());\n    \n    merge(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    \n    for (int x : c) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'merge requires both input ranges to be sorted.'
},
{
  id: 'cpp_stl_algorithms_38',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::inplace_merge to merge two consecutive sorted ranges.',
  mathSolution: 'inplace_merge merges two halves in place.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 3, 5, 2, 4, 6};\n    inplace_merge(v.begin(), v.begin() + 3, v.end());\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'inplace_merge merges two consecutive sorted subranges.'
},
{
  id: 'cpp_stl_algorithms_39',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::set_union to compute union of two sorted ranges.',
  mathSolution: 'set_union produces union of two sorted sets.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4, 5};\n    vector<int> b = {3, 4, 5, 6, 7};\n    vector<int> c(a.size() + b.size());\n    \n    auto it = set_union(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    c.resize(it - c.begin());\n    \n    for (int x : c) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'set_union computes union of sorted ranges.'
},
{
  id: 'cpp_stl_algorithms_40',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::set_intersection to compute intersection.',
  mathSolution: 'set_intersection produces elements in both ranges.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4, 5};\n    vector<int> b = {3, 4, 5, 6, 7};\n    vector<int> c(min(a.size(), b.size()));\n    \n    auto it = set_intersection(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    c.resize(it - c.begin());\n    \n    for (int x : c) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'set_intersection finds common elements.'
},
{
  id: 'cpp_stl_algorithms_41',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::set_difference to compute difference.',
  mathSolution: 'set_difference produces elements in first but not second.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4, 5};\n    vector<int> b = {3, 4, 5, 6, 7};\n    vector<int> c(a.size());\n    \n    auto it = set_difference(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    c.resize(it - c.begin());\n    \n    for (int x : c) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'set_difference finds elements in A not in B.'
},
{
  id: 'cpp_stl_algorithms_42',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::set_symmetric_difference for symmetric difference.',
  mathSolution: 'symmetric_difference produces elements in either but not both.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4, 5};\n    vector<int> b = {3, 4, 5, 6, 7};\n    vector<int> c(a.size() + b.size());\n    \n    auto it = set_symmetric_difference(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    c.resize(it - c.begin());\n    \n    for (int x : c) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'symmetric_difference excludes common elements.'
},
{
  id: 'cpp_stl_algorithms_43',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::includes to check if one range contains another.',
  mathSolution: 'includes returns true if every element of second range is in first.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> a = {1, 2, 3, 4, 5, 6, 7};\n    vector<int> b = {2, 4, 6};\n    \n    bool result = includes(a.begin(), a.end(), b.begin(), b.end());\n    cout << "A includes B: " << boolalpha << result << endl;\n    return 0;\n}',
  hint: 'includes checks if all elements of second range are in first.'
},
{
  id: 'cpp_stl_algorithms_44',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::next_permutation to generate permutations.',
  mathSolution: 'next_permutation generates lexicographically next permutation.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3};\n    \n    do {\n        for (int x : v) cout << x << " ";\n        cout << endl;\n    } while (next_permutation(v.begin(), v.end()));\n    \n    return 0;\n}',
  hint: 'next_permutation generates permutations in lexicographic order.'
},
{
  id: 'cpp_stl_algorithms_45',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::prev_permutation for previous permutation.',
  mathSolution: 'prev_permutation generates lexicographically previous permutation.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 2, 1};\n    \n    do {\n        for (int x : v) cout << x << " ";\n        cout << endl;\n    } while (prev_permutation(v.begin(), v.end()));\n    \n    return 0;\n}',
  hint: 'prev_permutation generates permutations in reverse order.'
},
{
  id: 'cpp_stl_algorithms_46',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::shuffle to randomly shuffle elements.',
  mathSolution: 'shuffle randomizes order of elements.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <random>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    random_device rd;\n    mt19937 g(rd());\n    \n    shuffle(v.begin(), v.end(), g);\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'shuffle requires random number generator.'
},
{
  id: 'cpp_stl_algorithms_47',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::sample to randomly sample elements.',
  mathSolution: 'sample selects random sample from range.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <random>\nusing namespace std;\n\nint main() {\n    vector<int> population = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    vector<int> sample(5);\n    random_device rd;\n    mt19937 g(rd());\n    \n    sample(population.begin(), population.end(), sample.begin(), 5, g);\n    \n    for (int x : sample) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'sample selects n random elements without replacement.'
},
{
  id: 'cpp_stl_algorithms_48',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::nth_element for partial sorting.',
  mathSolution: 'nth_element places nth element in correct position.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {7, 2, 9, 1, 5, 8, 3, 6, 4};\n    nth_element(v.begin(), v.begin() + 4, v.end());\n    \n    cout << "5th smallest: " << v[4] << endl;\n    return 0;\n}',
  hint: 'nth_element partially sorts for nth element.'
},
{
  id: 'cpp_stl_algorithms_49',
  topicId: 'cpp_stl_algorithms',
  question: 'Use std::partition to separate elements based on condition.',
  mathSolution: 'partition rearranges elements satisfying predicate first.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    auto it = partition(v.begin(), v.end(), [](int x) { return x % 2 == 0; });\n    \n    cout << "Even numbers: ";\n    for (auto i = v.begin(); i != it; i++) cout << *i << " ";\n    cout << endl;\n    \n    cout << "Odd numbers: ";\n    for (auto i = it; i != v.end(); i++) cout << *i << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'partition places true elements before false.'
},
{
  id: 'cpp_stl_algorithms_50',
  topicId: 'cpp_stl_algorithms',
  question: 'Create comprehensive STL algorithms demonstration.',
  mathSolution: 'Combine multiple algorithms in one program.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <random>\nusing namespace std;\n\nint main() {\n    cout << "=== STL Algorithms Demonstration ===\\n\\n";\n    \n    vector<int> v = {5, 2, 8, 1, 9, 3, 7, 4, 6, 10};\n    \n    // 1. Sorting\n    cout << "1. Sorting:\\n";\n    cout << "   Original: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    sort(v.begin(), v.end());\n    cout << "   Sorted: ";\n    for (int x : v) cout << x << " ";\n    cout << endl;\n    \n    // 2. Searching\n    cout << "\\n2. Searching:\\n";\n    auto it = find(v.begin(), v.end(), 5);\n    if (it != v.end()) {\n        cout << "   Found 5 at index " << distance(v.begin(), it) << endl;\n    }\n    \n    // 3. Counting\n    cout << "\\n3. Counting:\\n";\n    int cnt = count_if(v.begin(), v.end(), [](int x) { return x > 5; });\n    cout << "   Numbers > 5: " << cnt << endl;\n    \n    // 4. Transformation\n    cout << "\\n4. Transformation:\\n";\n    vector<int> squared(v.size());\n    transform(v.begin(), v.end(), squared.begin(), [](int x) { return x * x; });\n    cout << "   Squared: ";\n    for (int x : squared) cout << x << " ";\n    cout << endl;\n    \n    // 5. Removal\n    cout << "\\n5. Removal:\\n";\n    vector<int> copy = v;\n    copy.erase(remove_if(copy.begin(), copy.end(), [](int x) { return x % 2 == 0; }), copy.end());\n    cout << "   After removing evens: ";\n    for (int x : copy) cout << x << " ";\n    cout << endl;\n    \n    // 6. Accumulation\n    cout << "\\n6. Accumulation:\\n";\n    int sum = accumulate(v.begin(), v.end(), 0);\n    int product = accumulate(v.begin(), v.end(), 1, multiplies<int>());\n    cout << "   Sum: " << sum << ", Product: " << product << endl;\n    \n    // 7. Min/Max\n    cout << "\\n7. Min/Max:\\n";\n    auto [minIt, maxIt] = minmax_element(v.begin(), v.end());\n    cout << "   Min: " << *minIt << ", Max: " << *maxIt << endl;\n    \n    // 8. Binary search\n    cout << "\\n8. Binary Search:\\n";\n    if (binary_search(v.begin(), v.end(), 7)) {\n        cout << "   7 found in array" << endl;\n    }\n    \n    // 9. Permutations\n    cout << "\\n9. Permutation:\\n";\n    vector<int> perm = {1, 2, 3};\n    cout << "   Permutations of {1,2,3}:\\n";\n    do {\n        cout << "     ";\n        for (int x : perm) cout << x << " ";\n        cout << endl;\n    } while (next_permutation(perm.begin(), perm.end()));\n    \n    // 10. Set operations\n    cout << "\\n10. Set Operations:\\n";\n    vector<int> a = {1, 2, 3, 4, 5};\n    vector<int> b = {4, 5, 6, 7, 8};\n    vector<int> c(a.size() + b.size());\n    \n    auto last = set_union(a.begin(), a.end(), b.begin(), b.end(), c.begin());\n    c.resize(last - c.begin());\n    cout << "   Union: ";\n    for (int x : c) cout << x << " ";\n    cout << endl;\n    \n    cout << "\\n=== All algorithms demonstrated ===\\n";\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of STL algorithms.'
}
);
