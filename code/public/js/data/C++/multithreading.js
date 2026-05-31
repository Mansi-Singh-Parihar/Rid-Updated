QuizData.questions.push(
{
  id: 'cpp_multithreading_1',
  topicId: 'cpp_multithreading',
  question: 'Create and join a simple thread using std::thread.',
  mathSolution: 'std::thread creates new thread of execution.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid threadFunction() {\n    cout << "Thread is running" << endl;\n}\n\nint main() {\n    thread t(threadFunction);\n    t.join();\n    cout << "Main thread finished" << endl;\n    return 0;\n}',
  hint: 'Use join() to wait for thread completion.'
},
{
  id: 'cpp_multithreading_2',
  topicId: 'cpp_multithreading',
  question: 'Pass arguments to thread function.',
  mathSolution: 'Arguments are passed to thread constructor.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <string>\nusing namespace std;\n\nvoid printMessage(const string& msg, int count) {\n    for (int i = 0; i < count; i++) {\n        cout << msg << " " << i << endl;\n    }\n}\n\nint main() {\n    thread t(printMessage, "Hello", 5);\n    t.join();\n    return 0;\n}',
  hint: 'Thread constructor accepts function and its arguments.'
},
{
  id: 'cpp_multithreading_3',
  topicId: 'cpp_multithreading',
  question: 'Pass arguments by reference to thread function.',
  mathSolution: 'Use ref() wrapper to pass by reference.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid increment(int& count) {\n    for (int i = 0; i < 1000; i++) {\n        count++;\n    }\n}\n\nint main() {\n    int counter = 0;\n    thread t(increment, ref(counter));\n    t.join();\n    cout << "Counter: " << counter << endl;\n    return 0;\n}',
  hint: 'Use std::ref() to pass references to threads.'
},
{
  id: 'cpp_multithreading_4',
  topicId: 'cpp_multithreading',
  question: 'Use lambda expression as thread function.',
  mathSolution: 'Lambda can capture local variables.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    int value = 42;\n    \n    thread t([&value]() {\n        cout << "Thread captured value: " << value << endl;\n        value = 100;\n    });\n    t.join();\n    \n    cout << "Modified value: " << value << endl;\n    return 0;\n}',
  hint: 'Lambdas provide convenient thread functions with capture.'
},
{
  id: 'cpp_multithreading_5',
  topicId: 'cpp_multithreading',
  question: 'Detach a thread to run independently.',
  mathSolution: 'detach() allows thread to run independently.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <chrono>\nusing namespace std;\n\nvoid independentTask() {\n    this_thread::sleep_for(chrono::seconds(1));\n    cout << "Independent thread finished" << endl;\n}\n\nint main() {\n    thread t(independentTask);\n    t.detach();\n    cout << "Main thread continues" << endl;\n    this_thread::sleep_for(chrono::seconds(2));\n    return 0;\n}',
  hint: 'detach() makes thread run independently; cannot be joined later.'
},
{
  id: 'cpp_multithreading_6',
  topicId: 'cpp_multithreading',
  question: 'Check if thread is joinable before joining.',
  mathSolution: 'joinable() checks if thread can be joined.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid work() {\n    cout << "Working..." << endl;\n}\n\nint main() {\n    thread t(work);\n    \n    if (t.joinable()) {\n        cout << "Thread is joinable" << endl;\n        t.join();\n    }\n    \n    if (!t.joinable()) {\n        cout << "Thread is not joinable" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Always check joinable() before calling join().'
},
{
  id: 'cpp_multithreading_7',
  topicId: 'cpp_multithreading',
  question: 'Get thread ID using get_id().',
  mathSolution: 'Each thread has unique identifier.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid printID() {\n    cout << "Thread ID: " << this_thread::get_id() << endl;\n}\n\nint main() {\n    cout << "Main thread ID: " << this_thread::get_id() << endl;\n    \n    thread t1(printID);\n    thread t2(printID);\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'get_id() returns unique identifier for each thread.'
},
{
  id: 'cpp_multithreading_8',
  topicId: 'cpp_multithreading',
  question: 'Use mutex to protect shared data from race conditions.',
  mathSolution: 'mutex ensures exclusive access to critical section.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx;\nint sharedCounter = 0;\n\nvoid increment() {\n    for (int i = 0; i < 100000; i++) {\n        mtx.lock();\n        sharedCounter++;\n        mtx.unlock();\n    }\n}\n\nint main() {\n    thread t1(increment);\n    thread t2(increment);\n    \n    t1.join();\n    t2.join();\n    \n    cout << "Final counter: " << sharedCounter << endl;\n    return 0;\n}',
  hint: 'mutex prevents data races by serializing access.'
},
{
  id: 'cpp_multithreading_9',
  topicId: 'cpp_multithreading',
  question: 'Use lock_guard for RAII mutex management.',
  mathSolution: 'lock_guard automatically releases mutex.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx;\nint counter = 0;\n\nvoid increment() {\n    for (int i = 0; i < 100000; i++) {\n        lock_guard<mutex> lock(mtx);\n        counter++;\n    }\n}\n\nint main() {\n    thread t1(increment);\n    thread t2(increment);\n    \n    t1.join();\n    t2.join();\n    \n    cout << "Counter: " << counter << endl;\n    return 0;\n}',
  hint: 'lock_guard provides exception-safe mutex management.'
},
{
  id: 'cpp_multithreading_10',
  topicId: 'cpp_multithreading',
  question: 'Use unique_lock for flexible mutex ownership.',
  mathSolution: 'unique_lock allows deferred locking and unlocking.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx;\n\nvoid flexibleLock() {\n    unique_lock<mutex> lock(mtx, defer_lock);\n    // Do some work without lock\n    cout << "Preparing...\\n";\n    \n    lock.lock();\n    cout << "Critical section\\n";\n    lock.unlock();\n    \n    cout << "Cleanup\\n";\n}\n\nint main() {\n    thread t(flexibleLock);\n    t.join();\n    return 0;\n}',
  hint: 'unique_lock provides more flexibility than lock_guard.'
},
{
  id: 'cpp_multithreading_11',
  topicId: 'cpp_multithreading',
  question: 'Use std::atomic for lock-free thread-safe operations.',
  mathSolution: 'atomic operations are indivisible without mutex.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <atomic>\nusing namespace std;\n\natomic<int> counter(0);\n\nvoid increment() {\n    for (int i = 0; i < 100000; i++) {\n        counter++;\n    }\n}\n\nint main() {\n    thread t1(increment);\n    thread t2(increment);\n    \n    t1.join();\n    t2.join();\n    \n    cout << "Final counter: " << counter << endl;\n    return 0;\n}',
  hint: 'std::atomic provides lock-free thread-safe operations.'
},
{
  id: 'cpp_multithreading_12',
  topicId: 'cpp_multithreading',
  question: 'Use std::async for asynchronous task execution.',
  mathSolution: 'async runs function asynchronously, returns future.',
  codeSolution: '#include <iostream>\n#include <future>\nusing namespace std;\n\nint computeSquare(int x) {\n    return x * x;\n}\n\nint main() {\n    future<int> result = async(launch::async, computeSquare, 5);\n    \n    cout << "Computing...\\n";\n    int value = result.get();\n    cout << "Result: " << value << endl;\n    \n    return 0;\n}',
  hint: 'std::async simplifies concurrent task execution.'
},
{
  id: 'cpp_multithreading_13',
  topicId: 'cpp_multithreading',
  question: 'Use std::future and std::promise for communication.',
  mathSolution: 'promise sets value, future retrieves it.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <future>\nusing namespace std;\n\nvoid producer(promise<int>&& prom) {\n    this_thread::sleep_for(chrono::seconds(1));\n    prom.set_value(42);\n}\n\nint main() {\n    promise<int> prom;\n    future<int> fut = prom.get_future();\n    \n    thread t(producer, move(prom));\n    \n    cout << "Waiting for value...\\n";\n    int value = fut.get();\n    cout << "Received: " << value << endl;\n    \n    t.join();\n    return 0;\n}',
  hint: 'promise/future provide one-time communication between threads.'
},
{
  id: 'cpp_multithreading_14',
  topicId: 'cpp_multithreading',
  question: 'Use std::packaged_task to package callable for async execution.',
  mathSolution: 'packaged_task wraps callable for future retrieval.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <thread>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    packaged_task<int(int, int)> task(add);\n    future<int> result = task.get_future();\n    \n    thread t(move(task), 10, 20);\n    \n    cout << "Result: " << result.get() << endl;\n    t.join();\n    \n    return 0;\n}',
  hint: 'packaged_task connects callable objects to futures.'
},
{
  id: 'cpp_multithreading_15',
  topicId: 'cpp_multithreading',
  question: 'Use condition_variable for thread synchronization.',
  mathSolution: 'condition_variable allows threads to wait for events.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nusing namespace std;\n\nmutex mtx;\ncondition_variable cv;\nbool ready = false;\n\nvoid worker() {\n    unique_lock<mutex> lock(mtx);\n    cv.wait(lock, []{ return ready; });\n    cout << "Worker thread proceed" << endl;\n}\n\nint main() {\n    thread t(worker);\n    \n    this_thread::sleep_for(chrono::seconds(1));\n    {\n        lock_guard<mutex> lock(mtx);\n        ready = true;\n    }\n    cv.notify_one();\n    \n    t.join();\n    return 0;\n}',
  hint: 'condition_variable enables event-driven thread synchronization.'
},
{
  id: 'cpp_multithreading_16',
  topicId: 'cpp_multithreading',
  question: 'Implement producer-consumer pattern using condition_variable.',
  mathSolution: 'Producer adds items, consumer waits for items.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <queue>\nusing namespace std;\n\nqueue<int> buffer;\nmutex mtx;\ncondition_variable cv;\nconst int MAX_SIZE = 10;\n\nvoid producer() {\n    for (int i = 0; i < 20; i++) {\n        unique_lock<mutex> lock(mtx);\n        cv.wait(lock, []{ return buffer.size() < MAX_SIZE; });\n        buffer.push(i);\n        cout << "Produced: " << i << ", Buffer size: " << buffer.size() << endl;\n        cv.notify_all();\n    }\n}\n\nvoid consumer() {\n    for (int i = 0; i < 20; i++) {\n        unique_lock<mutex> lock(mtx);\n        cv.wait(lock, []{ return !buffer.empty(); });\n        int value = buffer.front();\n        buffer.pop();\n        cout << "Consumed: " << value << ", Buffer size: " << buffer.size() << endl;\n        cv.notify_all();\n    }\n}\n\nint main() {\n    thread t1(producer);\n    thread t2(consumer);\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'Producer-consumer pattern uses condition variables for synchronization.'
},
{
  id: 'cpp_multithreading_17',
  topicId: 'cpp_multithreading',
  question: 'Use std::shared_mutex for reader-writer lock.',
  mathSolution: 'Multiple readers allowed, exclusive writer.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <shared_mutex>\n#include <vector>\nusing namespace std;\n\nshared_mutex rwMutex;\nint sharedData = 0;\n\nvoid reader(int id) {\n    shared_lock<shared_mutex> lock(rwMutex);\n    cout << "Reader " << id << " sees: " << sharedData << endl;\n}\n\nvoid writer(int id) {\n    unique_lock<shared_mutex> lock(rwMutex);\n    sharedData++;\n    cout << "Writer " << id << " updated to: " << sharedData << endl;\n}\n\nint main() {\n    vector<thread> threads;\n    \n    for (int i = 0; i < 3; i++) {\n        threads.emplace_back(reader, i);\n    }\n    threads.emplace_back(writer, 0);\n    for (int i = 3; i < 6; i++) {\n        threads.emplace_back(reader, i);\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    return 0;\n}',
  hint: 'shared_mutex allows concurrent reads, exclusive writes.'
},
{
  id: 'cpp_multithreading_18',
  topicId: 'cpp_multithreading',
  question: 'Use std::call_once for one-time initialization.',
  mathSolution: 'call_once ensures function executes once across threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nonce_flag flag;\n\nvoid initialize() {\n    cout << "Initialization performed" << endl;\n}\n\nvoid threadFunction() {\n    call_once(flag, initialize);\n    cout << "Thread " << this_thread::get_id() << " running" << endl;\n}\n\nint main() {\n    thread t1(threadFunction);\n    thread t2(threadFunction);\n    thread t3(threadFunction);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    return 0;\n}',
  hint: 'call_once guarantees single execution even with multiple threads.'
},
{
  id: 'cpp_multithreading_19',
  topicId: 'cpp_multithreading',
  question: 'Use recursive_mutex for nested locking.',
  mathSolution: 'recursive_mutex allows same thread to lock multiple times.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nrecursive_mutex rmtx;\n\nvoid recursiveFunction(int depth) {\n    if (depth <= 0) return;\n    \n    rmtx.lock();\n    cout << "Locked at depth " << depth << endl;\n    recursiveFunction(depth - 1);\n    rmtx.unlock();\n}\n\nint main() {\n    thread t(recursiveFunction, 5);\n    t.join();\n    return 0;\n}',
  hint: 'recursive_mutex allows same thread to lock recursively.'
},
{
  id: 'cpp_multithreading_20',
  topicId: 'cpp_multithreading',
  question: 'Use timed_mutex for timed locking attempts.',
  mathSolution: 'timed_mutex provides try_lock_for and try_lock_until.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <chrono>\nusing namespace std;\n\ntimed_mutex tmtx;\n\nvoid attemptLock(int id) {\n    if (tmtx.try_lock_for(chrono::milliseconds(100))) {\n        cout << "Thread " << id << " acquired lock" << endl;\n        this_thread::sleep_for(chrono::milliseconds(200));\n        tmtx.unlock();\n    } else {\n        cout << "Thread " << id << " timeout" << endl;\n    }\n}\n\nint main() {\n    thread t1(attemptLock, 1);\n    thread t2(attemptLock, 2);\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'timed_mutex prevents indefinite waiting for lock.'
},
{
  "id": "cpp_multithreading_21",
  "topicId": "cpp_multithreading",
  "question": "Use std::this_thread::sleep_for to pause thread.",
  "mathSolution": "sleep_for suspends thread for specified duration.",
  "codeSolution": "#include <iostream>\n#include <thread>\n#include <chrono>\nusing namespace std;\n\nint main() {\n    cout << \"Starting timer...\" << endl;\n    \n    for (int i = 5; i > 0; i--) {\n        cout << i << \"...\" << endl;\n        this_thread::sleep_for(chrono::seconds(1));\n    }\n    \n    cout << \"Time's up!\" << endl;\n    return 0;\n}",
  "hint": "sleep_for suspends current thread for specified duration."
},
{
  id: 'cpp_multithreading_22',
  topicId: 'cpp_multithreading',
  question: 'Use std::this_thread::yield to yield CPU time.',
  mathSolution: 'yield hints scheduler to run other threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <atomic>\nusing namespace std;\n\natomic<bool> flag(false);\n\nvoid waitingThread() {\n    while (!flag) {\n        this_thread::yield();\n    }\n    cout << "Flag detected!" << endl;\n}\n\nint main() {\n    thread t(waitingThread);\n    \n    this_thread::sleep_for(chrono::seconds(1));\n    flag = true;\n    \n    t.join();\n    return 0;\n}',
  hint: 'yield() allows other threads to run in busy-wait loops.'
},
{
  id: 'cpp_multithreading_23',
  topicId: 'cpp_multithreading',
  question: 'Use std::hardware_concurrency to get CPU cores.',
  mathSolution: 'hardware_concurrency returns number of concurrent threads supported.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    unsigned int cores = thread::hardware_concurrency();\n    cout << "Number of CPU cores: " << cores << endl;\n    \n    if (cores > 0) {\n        cout << "Optimal thread count: " << cores << endl;\n    }\n    \n    return 0;\n}',
  hint: 'hardware_concurrency helps determine optimal thread count.'
},
{
  id: 'cpp_multithreading_24',
  topicId: 'cpp_multithreading',
  question: 'Use std::async with launch policies.',
  mathSolution: 'launch::async ensures new thread, launch::deferred lazy evaluation.',
  codeSolution: '#include <iostream>\n#include <future>\nusing namespace std;\n\nint compute(int x) {\n    cout << "Computing..." << endl;\n    return x * x;\n}\n\nint main() {\n    // Asynchronous (new thread)\n    future<int> asyncResult = async(launch::async, compute, 5);\n    \n    // Deferred (lazy evaluation)\n    future<int> deferredResult = async(launch::deferred, compute, 10);\n    \n    cout << "Async result: " << asyncResult.get() << endl;\n    cout << "Deferred result: " << deferredResult.get() << endl;\n    \n    return 0;\n}',
  hint: 'launch policies control when/where task executes.'
},
{
  id: 'cpp_multithreading_25',
  topicId: 'cpp_multithreading',
  question: 'Use std::future with std::async for multiple tasks.',
  mathSolution: 'Multiple async tasks run concurrently.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <vector>\nusing namespace std;\n\nint computeSquare(int x) {\n    this_thread::sleep_for(chrono::milliseconds(100));\n    return x * x;\n}\n\nint main() {\n    vector<future<int>> futures;\n    \n    for (int i = 1; i <= 10; i++) {\n        futures.push_back(async(launch::async, computeSquare, i));\n    }\n    \n    for (auto& f : futures) {\n        cout << f.get() << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Multiple async tasks execute concurrently for parallelism.'
},
{
  id: 'cpp_multithreading_26',
  topicId: 'cpp_multithreading',
  question: 'Use std::future::wait_for to check if result is ready.',
  mathSolution: 'wait_for returns future_status indicating readiness.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <chrono>\nusing namespace std;\n\nint slowCompute() {\n    this_thread::sleep_for(chrono::seconds(2));\n    return 42;\n}\n\nint main() {\n    future<int> result = async(launch::async, slowCompute);\n    \n    while (result.wait_for(chrono::milliseconds(500)) != future_status::ready) {\n        cout << "Still waiting..." << endl;\n    }\n    \n    cout << "Result: " << result.get() << endl;\n    \n    return 0;\n}',
  hint: 'wait_for checks if future is ready without blocking indefinitely.'
},
{
  id: 'cpp_multithreading_27',
  topicId: 'cpp_multithreading',
  question: 'Use std::shared_future for multiple consumers.',
  mathSolution: 'shared_future allows multiple threads to wait for same result.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <thread>\n#include <vector>\nusing namespace std;\n\nint computeValue() {\n    this_thread::sleep_for(chrono::seconds(1));\n    return 100;\n}\n\nint main() {\n    shared_future<int> sharedResult = async(launch::async, computeValue);\n    \n    vector<thread> consumers;\n    for (int i = 0; i < 5; i++) {\n        consumers.emplace_back([sharedResult]() {\n            cout << "Thread " << this_thread::get_id() << " got: " << sharedResult.get() << endl;\n        });\n    }\n    \n    for (auto& t : consumers) t.join();\n    \n    return 0;\n}',
  hint: 'shared_future allows multiple threads to access same result.'
},
{
  id: 'cpp_multithreading_28',
  topicId: 'cpp_multithreading',
  question: 'Implement thread pool using std::thread and queue.',
  mathSolution: 'Thread pool reuses threads for multiple tasks.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <queue>\n#include <functional>\n#include <mutex>\n#include <condition_variable>\n#include <vector>\nusing namespace std;\n\nclass ThreadPool {\nprivate:\n    vector<thread> workers;\n    queue<function<void()>> tasks;\n    mutex queueMutex;\n    condition_variable cv;\n    bool stop;\n    \npublic:\n    ThreadPool(size_t numThreads) : stop(false) {\n        for (size_t i = 0; i < numThreads; i++) {\n            workers.emplace_back([this] {\n                while (true) {\n                    function<void()> task;\n                    {\n                        unique_lock<mutex> lock(queueMutex);\n                        cv.wait(lock, [this] { return stop || !tasks.empty(); });\n                        if (stop && tasks.empty()) return;\n                        task = move(tasks.front());\n                        tasks.pop();\n                    }\n                    task();\n                }\n            });\n        }\n    }\n    \n    template<typename F>\n    void enqueue(F&& f) {\n        {\n            lock_guard<mutex> lock(queueMutex);\n            tasks.emplace(forward<F>(f));\n        }\n        cv.notify_one();\n    }\n    \n    ~ThreadPool() {\n        {\n            lock_guard<mutex> lock(queueMutex);\n            stop = true;\n        }\n        cv.notify_all();\n        for (auto& worker : workers) {\n            worker.join();\n        }\n    }\n};\n\nint main() {\n    ThreadPool pool(4);\n    \n    for (int i = 0; i < 10; i++) {\n        pool.enqueue([i]() {\n            cout << "Task " << i << " executed by thread " << this_thread::get_id() << endl;\n            this_thread::sleep_for(chrono::milliseconds(100));\n        });\n    }\n    \n    this_thread::sleep_for(chrono::seconds(2));\n    return 0;\n}',
  hint: 'Thread pool reuses threads to reduce creation overhead.'
},
{
  id: 'cpp_multithreading_29',
  topicId: 'cpp_multithreading',
  question: 'Implement parallel accumulation using multiple threads.',
  mathSolution: 'Divide array into chunks, sum in parallel.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nvoid partialSum(const vector<int>& data, int start, int end, long long& result, mutex& mtx) {\n    long long sum = 0;\n    for (int i = start; i < end; i++) {\n        sum += data[i];\n    }\n    lock_guard<mutex> lock(mtx);\n    result += sum;\n}\n\nint main() {\n    vector<int> data(1000000, 1); // Array of 1 million ones\n    int numThreads = 4;\n    vector<thread> threads;\n    long long total = 0;\n    mutex mtx;\n    \n    int chunkSize = data.size() / numThreads;\n    \n    for (int i = 0; i < numThreads; i++) {\n        int start = i * chunkSize;\n        int end = (i == numThreads - 1) ? data.size() : start + chunkSize;\n        threads.emplace_back(partialSum, ref(data), start, end, ref(total), ref(mtx));\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    cout << "Total sum: " << total << endl;\n    \n    return 0;\n}',
  hint: 'Parallel accumulation speeds up large data processing.'
},
{
  id: 'cpp_multithreading_30',
  topicId: 'cpp_multithreading',
  question: 'Use std::async for parallel sorting.',
  mathSolution: 'Merge sort using async for parallel processing.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <future>\nusing namespace std;\n\nvoid merge(vector<int>& arr, int left, int mid, int right) {\n    vector<int> temp(right - left + 1);\n    int i = left, j = mid + 1, k = 0;\n    \n    while (i <= mid && j <= right) {\n        if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n        else temp[k++] = arr[j++];\n    }\n    \n    while (i <= mid) temp[k++] = arr[i++];\n    while (j <= right) temp[k++] = arr[j++];\n    \n    for (int i = 0; i < temp.size(); i++) {\n        arr[left + i] = temp[i];\n    }\n}\n\nvoid parallelMergeSort(vector<int>& arr, int left, int right, int depth = 0) {\n    if (left >= right) return;\n    \n    int mid = left + (right - left) / 2;\n    \n    if (depth < 2) { // Use parallelism for first 2 levels\n        auto future1 = async(launch::async, parallelMergeSort, ref(arr), left, mid, depth + 1);\n        auto future2 = async(launch::async, parallelMergeSort, ref(arr), mid + 1, right, depth + 1);\n        future1.get();\n        future2.get();\n    } else {\n        parallelMergeSort(arr, left, mid, depth + 1);\n        parallelMergeSort(arr, mid + 1, right, depth + 1);\n    }\n    \n    merge(arr, left, mid, right);\n}\n\nint main() {\n    vector<int> arr = {5, 2, 8, 1, 9, 3, 7, 4, 6, 0};\n    \n    cout << "Original: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    parallelMergeSort(arr, 0, arr.size() - 1);\n    \n    cout << "Sorted: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Parallel sorting improves performance on multi-core systems.'
},
{
  id: 'cpp_multithreading_31',
  topicId: 'cpp_multithreading',
  question: 'Use std::atomic_flag for spinlock implementation.',
  mathSolution: 'atomic_flag provides test-and-set primitive.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <atomic>\n#include <vector>\nusing namespace std;\n\nclass Spinlock {\nprivate:\n    atomic_flag flag = ATOMIC_FLAG_INIT;\n    \npublic:\n    void lock() {\n        while (flag.test_and_set(memory_order_acquire)) {\n            this_thread::yield();\n        }\n    }\n    \n    void unlock() {\n        flag.clear(memory_order_release);\n    }\n};\n\nSpinlock spinlock;\nint counter = 0;\n\nvoid increment() {\n    for (int i = 0; i < 100000; i++) {\n        spinlock.lock();\n        counter++;\n        spinlock.unlock();\n    }\n}\n\nint main() {\n    thread t1(increment);\n    thread t2(increment);\n    \n    t1.join();\n    t2.join();\n    \n    cout << "Counter: " << counter << endl;\n    \n    return 0;\n}',
  hint: 'Spinlock uses busy-waiting for short critical sections.'
},
{
  id: 'cpp_multithreading_32',
  topicId: 'cpp_multithreading',
  question: 'Use std::atomic for lock-free stack.',
  mathSolution: 'Compare-and-swap for concurrent push/pop.',
  codeSolution: '#include <iostream>\n#include <atomic>\n#include <thread>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nclass LockFreeStack {\nprivate:\n    struct Node {\n        T data;\n        Node* next;\n        Node(const T& d) : data(d), next(nullptr) {}\n    };\n    \n    atomic<Node*> head;\n    \npublic:\n    void push(const T& value) {\n        Node* newNode = new Node(value);\n        newNode->next = head.load();\n        while (!head.compare_exchange_weak(newNode->next, newNode));\n    }\n    \n    bool pop(T& result) {\n        Node* oldHead = head.load();\n        while (oldHead && !head.compare_exchange_weak(oldHead, oldHead->next));\n        \n        if (oldHead) {\n            result = oldHead->data;\n            delete oldHead;\n            return true;\n        }\n        return false;\n    }\n};\n\nint main() {\n    LockFreeStack<int> stack;\n    vector<thread> threads;\n    \n    for (int i = 0; i < 10; i++) {\n        threads.emplace_back([&stack, i]() {\n            stack.push(i);\n        });\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    int value;\n    while (stack.pop(value)) {\n        cout << value << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lock-free structures use atomic operations to avoid mutex.'
},
{
  id: 'cpp_multithreading_33',
  topicId: 'cpp_multithreading',
  question: 'Use std::barrier for thread synchronization (C++20).',
  mathSolution: 'barrier synchronizes multiple threads at a point.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <barrier>\n#include <vector>\nusing namespace std;\n\nvoid worker(int id, barrier& syncPoint) {\n    cout << "Thread " << id << " phase 1" << endl;\n    syncPoint.arrive_and_wait();\n    cout << "Thread " << id << " phase 2" << endl;\n    syncPoint.arrive_and_wait();\n    cout << "Thread " << id << " phase 3" << endl;\n}\n\nint main() {\n    const int numThreads = 4;\n    barrier syncPoint(numThreads);\n    vector<thread> threads;\n    \n    for (int i = 0; i < numThreads; i++) {\n        threads.emplace_back(worker, i, ref(syncPoint));\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    return 0;\n}',
  hint: 'barrier synchronizes threads at specific points in execution.'
},
{
  id: 'cpp_multithreading_34',
  topicId: 'cpp_multithreading',
  question: 'Use std::latch for single-use synchronization (C++20).',
  mathSolution: 'latch counts down once, releasing waiting threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <latch>\n#include <vector>\nusing namespace std;\n\nlatch startLatch(1);\n\nvoid worker(int id) {\n    cout << "Thread " << id << " waiting at latch" << endl;\n    startLatch.wait();\n    cout << "Thread " << id << " started" << endl;\n}\n\nint main() {\n    vector<thread> threads;\n    \n    for (int i = 0; i < 5; i++) {\n        threads.emplace_back(worker, i);\n    }\n    \n    this_thread::sleep_for(chrono::seconds(1));\n    cout << "Releasing latch..." << endl;\n    startLatch.count_down();\n    \n    for (auto& t : threads) t.join();\n    \n    return 0;\n}',
  hint: 'latch is a single-use countdown synchronization primitive.'
},
{
  id: 'cpp_multithreading_35',
  topicId: 'cpp_multithreading',
  question: 'Use std::counting_semaphore for resource management (C++20).',
  mathSolution: 'semaphore limits concurrent access to resources.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <semaphore>\n#include <vector>\nusing namespace std;\n\ncounting_semaphore<3> sem(3); // Max 3 concurrent accesses\n\nvoid accessResource(int id) {\n    sem.acquire();\n    cout << "Thread " << id << " accessing resource" << endl;\n    this_thread::sleep_for(chrono::milliseconds(500));\n    cout << "Thread " << id << " releasing resource" << endl;\n    sem.release();\n}\n\nint main() {\n    vector<thread> threads;\n    \n    for (int i = 0; i < 10; i++) {\n        threads.emplace_back(accessResource, i);\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    return 0;\n}',
  hint: 'Semaphore limits number of threads accessing a resource.'
},
{
  id: 'cpp_multithreading_36',
  topicId: 'cpp_multithreading',
  question: 'Use std::jthread with automatic joining (C++20).',
  mathSolution: 'jthread automatically joins on destruction.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid task() {\n    cout << "Thread running" << endl;\n    this_thread::sleep_for(chrono::seconds(1));\n}\n\nint main() {\n    jthread t1(task);\n    jthread t2(task);\n    jthread t3(task);\n    \n    cout << "Main thread finishing" << endl;\n    // No need to call join() - jthread does it automatically\n    return 0;\n}',
  hint: 'jthread automatically joins, preventing resource leaks.'
},
{
  id: 'cpp_multithreading_37',
  topicId: 'cpp_multithreading',
  question: 'Use std::stop_token for cooperative thread cancellation (C++20).',
  mathSolution: 'stop_token signals threads to stop execution.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <chrono>\nusing namespace std;\n\nvoid backgroundTask(stop_token stoken) {\n    while (!stoken.stop_requested()) {\n        cout << "Working..." << endl;\n        this_thread::sleep_for(chrono::milliseconds(500));\n    }\n    cout << "Thread stopped" << endl;\n}\n\nint main() {\n    jthread worker(backgroundTask);\n    \n    this_thread::sleep_for(chrono::seconds(2));\n    worker.request_stop();\n    \n    return 0;\n}',
  hint: 'stop_token enables cooperative thread cancellation.'
},
{
  id: 'cpp_multithreading_38',
  topicId: 'cpp_multithreading',
  question: 'Use std::scoped_lock for multiple mutexes (C++17).',
  mathSolution: 'scoped_lock locks multiple mutexes without deadlock.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx1, mtx2;\n\nvoid thread1() {\n    scoped_lock lock(mtx1, mtx2);\n    cout << "Thread 1 acquired both locks" << endl;\n    this_thread::sleep_for(chrono::milliseconds(100));\n}\n\nvoid thread2() {\n    scoped_lock lock(mtx1, mtx2);\n    cout << "Thread 2 acquired both locks" << endl;\n}\n\nint main() {\n    thread t1(thread1);\n    thread t2(thread2);\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'scoped_lock prevents deadlock when locking multiple mutexes.'
},
{
  id: 'cpp_multithreading_39',
  topicId: 'cpp_multithreading',
  question: 'Use std::notify_all_at_thread_exit for safe notification.',
  mathSolution: 'Notifies condition variable when thread exits.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nusing namespace std;\n\nmutex mtx;\ncondition_variable cv;\nbool done = false;\n\nvoid worker() {\n    unique_lock<mutex> lock(mtx);\n    // Do work\n    cout << "Worker completing..." << endl;\n    notify_all_at_thread_exit(cv, move(lock));\n}\n\nint main() {\n    thread t(worker);\n    \n    {\n        unique_lock<mutex> lock(mtx);\n        cv.wait(lock, []{ return done; });\n    }\n    \n    cout << "Worker finished" << endl;\n    t.join();\n    \n    return 0;\n}',
  hint: 'notify_all_at_thread_exit ensures notification after thread-local cleanup.'
},
{
  id: 'cpp_multithreading_40',
  topicId: 'cpp_multithreading',
  question: 'Implement parallel matrix multiplication using threads.',
  mathSolution: 'Divide output matrix rows among threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <vector>\nusing namespace std;\n\nconst int N = 100;\nint A[N][N], B[N][N], C[N][N];\n\nvoid multiplyRow(int row, int startCol, int endCol) {\n    for (int j = startCol; j < endCol; j++) {\n        C[row][j] = 0;\n        for (int k = 0; k < N; k++) {\n            C[row][j] += A[row][k] * B[k][j];\n        }\n    }\n}\n\nint main() {\n    // Initialize matrices\n    for (int i = 0; i < N; i++) {\n        for (int j = 0; j < N; j++) {\n            A[i][j] = i + j;\n            B[i][j] = i - j;\n        }\n    }\n    \n    int numThreads = thread::hardware_concurrency();\n    vector<thread> threads;\n    \n    // Each thread handles one row\n    for (int i = 0; i < N; i++) {\n        threads.emplace_back(multiplyRow, i, 0, N);\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    cout << "Matrix multiplication completed" << endl;\n    cout << "C[0][0] = " << C[0][0] << endl;\n    \n    return 0;\n}',
  hint: 'Parallel matrix multiplication scales with number of cores.'
},
{
  id: 'cpp_multithreading_41',
  topicId: 'cpp_multithreading',
  question: 'Use std::future and exceptions in async tasks.',
  mathSolution: 'Exceptions in async are propagated through future.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <stdexcept>\nusing namespace std;\n\nint riskyOperation(int x) {\n    if (x < 0) {\n        throw runtime_error("Negative input not allowed");\n    }\n    return x * x;\n}\n\nint main() {\n    future<int> result = async(launch::async, riskyOperation, -5);\n    \n    try {\n        int value = result.get();\n        cout << "Result: " << value << endl;\n    } catch (const exception& e) {\n        cout << "Exception caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Exceptions in async tasks are stored and rethrown on get().'
},
{
  id: 'cpp_multithreading_42',
  topicId: 'cpp_multithreading',
  question: 'Use std::future::share() to create shared_future.',
  mathSolution: 'share() converts future to shared_future.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <thread>\nusing namespace std;\n\nint compute() {\n    this_thread::sleep_for(chrono::seconds(1));\n    return 42;\n}\n\nint main() {\n    future<int> fut = async(launch::async, compute);\n    shared_future<int> sharedFut = fut.share();\n    \n    auto consumer = [sharedFut]() {\n        cout << "Thread " << this_thread::get_id() << " got: " << sharedFut.get() << endl;\n    };\n    \n    thread t1(consumer);\n    thread t2(consumer);\n    thread t3(consumer);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    return 0;\n}',
  hint: 'share() creates shared_future for multiple consumers.'
},
{
  id: 'cpp_multithreading_43',
  topicId: 'cpp_multithreading',
  question: 'Use std::future::wait_until for time-bound waiting.',
  mathSolution: 'wait_until waits until specified time point.',
  codeSolution: '#include <iostream>\n#include <future>\n#include <chrono>\nusing namespace std;\n\nint main() {\n    future<int> result = async(launch::async, []() {\n        this_thread::sleep_for(chrono::seconds(3));\n        return 100;\n    });\n    \n    auto timeout = chrono::system_clock::now() + chrono::seconds(2);\n    \n    if (result.wait_until(timeout) == future_status::ready) {\n        cout << "Result: " << result.get() << endl;\n    } else {\n        cout << "Timeout occurred" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'wait_until sets absolute timeout for future waiting.'
},
{
  id: 'cpp_multithreading_44',
  topicId: 'cpp_multithreading',
  question: 'Use std::future::then for continuations (experimental).',
  mathSolution: 'then attaches continuation to future.',
  codeSolution: '#include <iostream>\n#include <future>\nusing namespace std;\n\nint main() {\n    future<int> fut = async(launch::async, []() { return 10; });\n    \n    // Note: then is not standard yet, but available in some implementations\n    // auto result = fut.then([](future<int> f) {\n    //     return f.get() * 2;\n    // });\n    \n    // Workaround: use async\n    auto result = async(launch::async, [fut = move(fut)]() mutable {\n        return fut.get() * 2;\n    });\n    \n    cout << result.get() << endl;\n    \n    return 0;\n}',
  hint: 'then allows chaining asynchronous operations.'
},
{
  id: 'cpp_multithreading_45',
  topicId: 'cpp_multithreading',
  question: 'Implement parallel for loop using threads.',
  mathSolution: 'Divide loop iterations among threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <vector>\n#include <algorithm>\n#include <numeric>\nusing namespace std;\n\ntemplate<typename Iterator, typename Function>\nvoid parallelFor(Iterator begin, Iterator end, Function func) {\n    size_t size = distance(begin, end);\n    size_t numThreads = thread::hardware_concurrency();\n    size_t chunkSize = size / numThreads;\n    \n    vector<thread> threads;\n    for (size_t i = 0; i < numThreads; i++) {\n        auto start = next(begin, i * chunkSize);\n        auto end_iter = (i == numThreads - 1) ? end : next(start, chunkSize);\n        \n        threads.emplace_back([start, end_iter, &func]() {\n            for (auto it = start; it != end_iter; ++it) {\n                func(*it);\n            }\n        });\n    }\n    \n    for (auto& t : threads) t.join();\n}\n\nint main() {\n    vector<int> data(1000000);\n    iota(data.begin(), data.end(), 1);\n    \n    parallelFor(data.begin(), data.end(), [](int& x) {\n        x = x * x;\n    });\n    \n    cout << "First 10: \";\n    for (int i = 0; i < 10; i++) {\n        cout << data[i] << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Parallel for improves performance of independent iterations.'
},
{
  id: 'cpp_multithreading_46',
  topicId: 'cpp_multithreading',
  question: 'Use std::async vs std::thread comparison.',
  mathSolution: 'async manages threads automatically, thread requires manual management.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <future>\n#include <chrono>\nusing namespace std;\n\nvoid doWork(int id) {\n    this_thread::sleep_for(chrono::milliseconds(100));\n    cout << "Work " << id << " done\\n";\n}\n\nint main() {\n    // Using thread (manual management)\n    thread t1(doWork, 1);\n    thread t2(doWork, 2);\n    t1.join();\n    t2.join();\n    \n    // Using async (automatic management)\n    auto f1 = async(launch::async, doWork, 3);\n    auto f2 = async(launch::async, doWork, 4);\n    f1.get();\n    f2.get();\n    \n    // async returns future that can be used for result\n    auto result = async(launch::async, []() { return 42; });\n    cout << "Result: " << result.get() << endl;\n    \n    return 0;\n}',
  hint: 'async simplifies thread management, thread offers more control.'
},
{
  id: 'cpp_multithreading_47',
  topicId: 'cpp_multithreading',
  question: 'Debug multithreading using thread names.',
  mathSolution: 'Name threads for easier debugging.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <string>\n#ifdef __linux__\n#include <sys/prctl.h>\n#endif\nusing namespace std;\n\nvoid setThreadName(const string& name) {\n#ifdef __linux__\n    prctl(PR_SET_NAME, name.c_str());\n#endif\n}\n\nvoid worker1() {\n    setThreadName("Worker1");\n    for (int i = 0; i < 3; i++) {\n        cout << "Worker1: iteration " << i << endl;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n}\n\nvoid worker2() {\n    setThreadName("Worker2");\n    for (int i = 0; i < 3; i++) {\n        cout << "Worker2: iteration " << i << endl;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n}\n\nint main() {\n    thread t1(worker1);\n    thread t2(worker2);\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'Thread naming helps in debugging and profiling tools.'
},
{
  id: 'cpp_multithreading_48',
  topicId: 'cpp_multithreading',
  question: 'Measure thread execution time.',
  mathSolution: 'Use chrono to measure thread execution duration.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <chrono>\n#include <future>\nusing namespace std;\n\ndouble measureTime(auto&& func) {\n    auto start = chrono::high_resolution_clock::now();\n    func();\n    auto end = chrono::high_resolution_clock::now();\n    return chrono::duration_cast<chrono::microseconds>(end - start).count() / 1000.0;\n}\n\nint main() {\n    auto duration = measureTime([]() {\n        thread t([]() {\n            this_thread::sleep_for(chrono::milliseconds(100));\n        });\n        t.join();\n    });\n    \n    cout << "Thread execution time: " << duration << " ms" << endl;\n    \n    auto asyncDuration = measureTime([]() {\n        auto fut = async(launch::async, []() {\n            this_thread::sleep_for(chrono::milliseconds(100));\n        });\n        fut.wait();\n    });\n    \n    cout << "Async execution time: " << asyncDuration << " ms" << endl;\n    \n    return 0;\n}',
  hint: 'Timing helps optimize multithreaded performance.'
},
{
  id: 'cpp_multithreading_49',
  topicId: 'cpp_multithreading',
  question: 'Implement deadlock detection simulation.',
  mathSolution: 'Two threads locking mutexes in opposite order.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <chrono>\nusing namespace std;\n\nmutex mtxA, mtxB;\n\nvoid thread1() {\n    lock_guard<mutex> lockA(mtxA);\n    cout << \"Thread1 acquired A\" << endl;\n    this_thread::sleep_for(chrono::milliseconds(100));\n    \n    lock_guard<mutex> lockB(mtxB);\n    cout << \"Thread1 acquired B\" << endl;\n}\n\nvoid thread2() {\n    lock_guard<mutex> lockB(mtxB);\n    cout << \"Thread2 acquired B\" << endl;\n    this_thread::sleep_for(chrono::milliseconds(100));\n    \n    lock_guard<mutex> lockA(mtxA);\n    cout << \"Thread2 acquired A\" << endl;\n}\n\nint main() {\n    thread t1(thread1);\n    thread t2(thread2);\n    \n    // Without proper order, this may deadlock\n    // Solution: Always lock mutexes in same order\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'Lock mutexes in consistent order to prevent deadlocks.'
},
{
  id: 'cpp_multithreading_50',
  topicId: 'cpp_multithreading',
  question: 'Create comprehensive multithreading demonstration.',
  mathSolution: 'Combine multiple threading concepts in one program.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <queue>\n#include <future>\n#include <atomic>\n#include <chrono>\nusing namespace std;\n\nclass ThreadDemo {\nprivate:\n    mutex mtx;\n    condition_variable cv;\n    queue<int> tasks;\n    atomic<bool> running{true};\n    \npublic:\n    void producer() {\n        for (int i = 0; i < 10; i++) {\n            {\n                lock_guard<mutex> lock(mtx);\n                tasks.push(i);\n                cout << "Produced: " << i << endl;\n            }\n            cv.notify_one();\n            this_thread::sleep_for(chrono::milliseconds(100));\n        }\n        running = false;\n        cv.notify_all();\n    }\n    \n    void consumer(int id) {\n        while (running || !tasks.empty()) {\n            unique_lock<mutex> lock(mtx);\n            cv.wait(lock, [this] { return !tasks.empty() || !running; });\n            \n            if (!tasks.empty()) {\n                int task = tasks.front();\n                tasks.pop();\n                lock.unlock();\n                cout << "Consumer " << id << " processed: " << task << endl;\n                this_thread::sleep_for(chrono::milliseconds(50));\n            }\n        }\n    }\n};\n\nint main() {\n    cout << "=== Multithreading Demonstration ===\\n\\n";\n    \n    // 1. Basic thread\n    cout << "1. Basic thread:\\n";\n    thread t1([]() { cout << "  Thread running\\n"; });\n    t1.join();\n    \n    // 2. Mutex protection\n    cout << "\\n2. Mutex protection:\\n";\n    int counter = 0;\n    mutex counterMtx;\n    auto increment = [&counter, &counterMtx]() {\n        for (int i = 0; i < 1000; i++) {\n            lock_guard<mutex> lock(counterMtx);\n            counter++;\n        }\n    };\n    thread t2(increment);\n    thread t3(increment);\n    t2.join();\n    t3.join();\n    cout << "  Protected counter: " << counter << endl;\n    \n    // 3. Atomic operations\n    cout << "\\n3. Atomic operations:\\n";\n    atomic<int> atomicCounter(0);\n    auto atomicIncrement = [&atomicCounter]() {\n        for (int i = 0; i < 1000; i++) atomicCounter++;\n    };\n    thread t4(atomicIncrement);\n    thread t5(atomicIncrement);\n    t4.join();\n    t5.join();\n    cout << "  Atomic counter: " << atomicCounter << endl;\n    \n    // 4. Producer-consumer\n    cout << "\\n4. Producer-Consumer pattern:\\n";\n    ThreadDemo demo;\n    thread prod(&ThreadDemo::producer, &demo);\n    thread cons1(&ThreadDemo::consumer, &demo, 1);\n    thread cons2(&ThreadDemo::consumer, &demo, 2);\n    \n    prod.join();\n    cons1.join();\n    cons2.join();\n    \n    // 5. Async/Future\n    cout << "\\n5. Async/Future:\\n";\n    auto asyncTask = async(launch::async, []() {\n        this_thread::sleep_for(chrono::milliseconds(100));\n        return 42;\n    });\n    cout << "  Async result: " << asyncTask.get() << endl;\n    \n    cout << "\\n=== All threading concepts demonstrated ===\\n";\n    \n    return 0;\n}',
  hint: 'Comprehensive demonstration of multithreading concepts.'
}
);
