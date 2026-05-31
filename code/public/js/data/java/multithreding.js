QuizData.questions.push(
  // CREATING THREADS (4)
  {
    id: "thread_1",
    topicId: "multithreading",
    question: "Create thread by extending Thread class.",
    mathSolution: "Override run() method and start thread",
    codeSolution: 'public class Main {\n    static class MyThread extends Thread {\n        public void run() {\n            System.out.println("Thread running: " + Thread.currentThread().getName());\n        }\n    }\n    public static void main(String[] args) {\n        MyThread t1 = new MyThread();\n        MyThread t2 = new MyThread();\n        t1.start();\n        t2.start();\n    }\n}',
    hint: "Extend Thread and override run()",
  },
  {
    id: "thread_2",
    topicId: "multithreading",
    question: "Create thread by implementing Runnable interface.",
    mathSolution: "Implement Runnable and pass to Thread constructor",
    codeSolution: 'public class Main {\n    static class MyRunnable implements Runnable {\n        public void run() {\n            System.out.println("Runnable running: " + Thread.currentThread().getName());\n        }\n    }\n    public static void main(String[] args) {\n        MyRunnable runnable = new MyRunnable();\n        Thread t1 = new Thread(runnable);\n        Thread t2 = new Thread(runnable);\n        t1.start();\n        t2.start();\n    }\n}',
    hint: "Implement Runnable, better for multiple inheritance",
  },
  {
    id: "thread_3",
    topicId: "multithreading",
    question: "Create thread using lambda expression.",
    mathSolution: "Runnable as lambda for concise code",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> System.out.println("Lambda thread: " + Thread.currentThread().getName()));\n        Thread t2 = new Thread(() -> {\n            for(int i=1; i<=5; i++) System.out.println("Count: " + i);\n        });\n        t1.start();\n        t2.start();\n    }\n}',
    hint: "Runnable is functional interface",
  },
  {
    id: "thread_4",
    topicId: "multithreading",
    question: "Set and get thread name and priority.",
    mathSolution: "Use setName(), getName(), setPriority(), getPriority()",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println("Thread executing"));\n        t.setName("Worker-1");\n        t.setPriority(Thread.MAX_PRIORITY);\n        System.out.println("Name: " + t.getName());\n        System.out.println("Priority: " + t.getPriority());\n        System.out.println("ID: " + t.getId());\n        System.out.println("State: " + t.getState());\n        t.start();\n    }\n}',
    hint: "Priority range 1 (MIN) to 10 (MAX)",
  },

  // THREAD STATES AND LIFE CYCLE (3)
  {
    id: "thread_5",
    topicId: "multithreading",
    question: "Check thread states during execution.",
    mathSolution: "getState() returns Thread.State enum",
    codeSolution: 'public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            try { Thread.sleep(1000); } catch(InterruptedException e) {}\n        });\n        System.out.println("Before start: " + t.getState());\n        t.start();\n        System.out.println("After start: " + t.getState());\n        Thread.sleep(500);\n        System.out.println("During sleep: " + t.getState());\n        t.join();\n        System.out.println("After completion: " + t.getState());\n    }\n}',
    hint: "States: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED",
  },
  {
    id: "thread_6",
    topicId: "multithreading",
    question: "Use sleep() to pause thread execution.",
    mathSolution: "Thread.sleep(milliseconds) throws InterruptedException",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {\n            try {\n                System.out.println("Thread started");\n                Thread.sleep(2000);\n                System.out.println("Thread woke up");\n            } catch(InterruptedException e) {\n                System.out.println("Thread interrupted");\n            }\n        });\n        t.start();\n    }\n}',
    hint: "sleep() throws InterruptedException",
  },
  {
    id: "thread_7",
    topicId: "multithreading",
    question: "Use join() to wait for thread completion.",
    mathSolution: "join() waits for thread to die",
    codeSolution: 'public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Thread(() -> {\n            for(int i=1; i<=5; i++) {\n                System.out.println("Thread 1: " + i);\n                try { Thread.sleep(500); } catch(InterruptedException e) {}\n            }\n        });\n        Thread t2 = new Thread(() -> {\n            try {\n                t1.join();\n                System.out.println("Thread 2 starts after t1 completes");\n            } catch(InterruptedException e) {}\n        });\n        t1.start();\n        t2.start();\n        t2.join(); // ensure all output shown\n    }\n}',
    hint: "join() makes one thread wait for another",
  },

  // SYNCHRONIZATION (5)
  {
    id: "thread_8",
    topicId: "multithreading",
    question: "Demonstrate race condition without synchronization.",
    mathSolution: "Multiple threads accessing shared resource",
    codeSolution: 'public class Main {\n    static class Counter { int count = 0; void increment() { count++; } }\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Runnable task = () -> { for(int i=0; i<1000; i++) counter.increment(); };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println("Final count (should be 2000): " + counter.count);\n    }\n}',
    hint: "count++ is not atomic, causes race condition",
  },
  {
    id: "thread_9",
    topicId: "multithreading",
    question: "Use synchronized method to fix race condition.",
    mathSolution: "synchronized keyword ensures mutual exclusion",
    codeSolution: 'public class Main {\n    static class SafeCounter { int count = 0; synchronized void increment() { count++; } }\n    public static void main(String[] args) throws InterruptedException {\n        SafeCounter counter = new SafeCounter();\n        Runnable task = () -> { for(int i=0; i<1000; i++) counter.increment(); };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println("Final count: " + counter.count);\n    }\n}',
    hint: "synchronized ensures only one thread executes method at a time",
  },
  {
    id: "thread_10",
    topicId: "multithreading",
    question: "Use synchronized block for better granularity.",
    mathSolution: "Synchronize only critical section",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        int balance = 1000;\n        void withdraw(int amount) {\n            System.out.println("Checking balance...");\n            synchronized(this) {\n                if(balance >= amount) {\n                    try { Thread.sleep(100); } catch(InterruptedException e) {}\n                    balance -= amount;\n                    System.out.println("Withdrawn: " + amount + ", Balance: " + balance);\n                } else System.out.println("Insufficient balance");\n            }\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        BankAccount acc = new BankAccount();\n        Runnable task = () -> acc.withdraw(800);\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}',
    hint: "synchronized block is more efficient than whole method",
  },
  {
    id: "thread_11",
    topicId: "multithreading",
    question: "Use static synchronization for class-level lock.",
    mathSolution: "Static synchronized locks on Class object",
    codeSolution: 'public class Main {\n    static class Table {\n        static synchronized void printTable(int n) {\n            for(int i=1; i<=5; i++) {\n                System.out.println(n + " * " + i + " = " + (n*i));\n                try { Thread.sleep(400); } catch(Exception e) {}\n            }\n        }\n    }\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> Table.printTable(5));\n        Thread t2 = new Thread(() -> Table.printTable(10));\n        t1.start(); t2.start();\n    }\n}',
    hint: "Static synchronized locks class, not instance",
  },
  {
    id: "thread_12",
    topicId: "multithreading",
    question: "Deadlock situation and prevention.",
    mathSolution: "Two threads waiting for each other's locks",
    codeSolution: 'public class Main {\n    static class Resource { final String name; Resource(String n) { name = n; } }\n    public static void main(String[] args) {\n        Resource r1 = new Resource("Resource1");\n        Resource r2 = new Resource("Resource2");\n        Thread t1 = new Thread(() -> {\n            synchronized(r1) {\n                System.out.println("Thread1 locked r1");\n                try { Thread.sleep(100); } catch(Exception e) {}\n                synchronized(r2) { System.out.println("Thread1 locked r2"); }\n            }\n        });\n        Thread t2 = new Thread(() -> {\n            synchronized(r2) {\n                System.out.println("Thread2 locked r2");\n                try { Thread.sleep(100); } catch(Exception e) {}\n                synchronized(r1) { System.out.println("Thread2 locked r1"); }\n            }\n        });\n        t1.start(); t2.start();\n        System.out.println("Deadlock may occur (run again if not). Prevention: acquire locks in same order.");\n    }\n}',
    hint: "Avoid circular wait or use tryLock with timeout",
  },

  // INTER-THREAD COMMUNICATION (3)
  {
    id: "thread_13",
    topicId: "multithreading",
    question: "Use wait() and notify() for thread communication.",
    mathSolution: "wait() releases lock, notify() wakes waiting thread",
    codeSolution: 'public class Main {\n    static class Message {\n        String msg; boolean hasMessage = false;\n        synchronized void send(String message) throws InterruptedException {\n            while(hasMessage) wait();\n            msg = message; hasMessage = true;\n            System.out.println("Sent: " + message);\n            notify();\n        }\n        synchronized String receive() throws InterruptedException {\n            while(!hasMessage) wait();\n            hasMessage = false;\n            System.out.println("Received: " + msg);\n            notify();\n            return msg;\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Message msg = new Message();\n        Thread sender = new Thread(() -> {\n            String[] msgs = {"Hello", "World", "Done"};\n            for(String m : msgs) {\n                try { msg.send(m); Thread.sleep(1000); } catch(Exception e) {}\n            }\n        });\n        Thread receiver = new Thread(() -> {\n            for(int i=0; i<3; i++) {\n                try { msg.receive(); } catch(Exception e) {}\n            }\n        });\n        sender.start(); receiver.start();\n        sender.join(); receiver.join();\n    }\n}',
    hint: "wait() and notify() must be in synchronized block",
  },
  {
    id: "thread_14",
    topicId: "multithreading",
    question: "Producer-Consumer problem using wait/notify.",
    mathSolution: "Classic synchronization problem",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Buffer {\n        Queue<Integer> queue = new LinkedList<>();\n        int capacity = 5;\n        synchronized void produce(int value) throws InterruptedException {\n            while(queue.size() == capacity) { System.out.println("Buffer full, producer waiting"); wait(); }\n            queue.add(value);\n            System.out.println("Produced: " + value + ", Buffer size: " + queue.size());\n            notify();\n        }\n        synchronized int consume() throws InterruptedException {\n            while(queue.isEmpty()) { System.out.println("Buffer empty, consumer waiting"); wait(); }\n            int val = queue.poll();\n            System.out.println("Consumed: " + val + ", Buffer size: " + queue.size());\n            notify();\n            return val;\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Buffer buffer = new Buffer();\n        Thread producer = new Thread(() -> {\n            int value = 0;\n            while(true) { try { buffer.produce(value++); Thread.sleep(500); } catch(Exception e) { break; } }\n        });\n        Thread consumer = new Thread(() -> {\n            while(true) { try { buffer.consume(); Thread.sleep(1000); } catch(Exception e) { break; } }\n        });\n        producer.start(); consumer.start();\n        Thread.sleep(5000); // let it run for 5 seconds then stop\n        producer.interrupt(); consumer.interrupt();\n    }\n}',
    hint: "Producer generates, consumer processes",
  },
  {
    id: "thread_15",
    topicId: "multithreading",
    question: "Use notifyAll() to wake all waiting threads.",
    mathSolution: "notifyAll() wakes all threads waiting on object",
    codeSolution: 'public class Main {\n    static class SharedResource {\n        boolean ready = false;\n        synchronized void waitForReady() throws InterruptedException {\n            while(!ready) wait();\n            System.out.println(Thread.currentThread().getName() + " proceeding");\n        }\n        synchronized void setReady() { ready = true; System.out.println("Notifying all"); notifyAll(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        SharedResource sr = new SharedResource();\n        for(int i=1; i<=3; i++) {\n            Thread t = new Thread(() -> { try { sr.waitForReady(); } catch(Exception e) {} }, "Thread-" + i);\n            t.start();\n        }\n        Thread.sleep(1000);\n        sr.setReady();\n        Thread.sleep(500); // let them finish\n    }\n}',
    hint: "notifyAll() vs notify()",
  },

  // EXECUTOR FRAMEWORK (4)
  {
    id: "thread_16",
    topicId: "multithreading",
    question: "Create thread pool using ExecutorService.",
    mathSolution: "Executors class provides thread pool implementations",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) {\n        ExecutorService executor = Executors.newFixedThreadPool(3);\n        for(int i=1; i<=5; i++) {\n            final int taskId = i;\n            executor.submit(() -> {\n                System.out.println("Task " + taskId + " running in " + Thread.currentThread().getName());\n                try { Thread.sleep(1000); } catch(Exception e) {}\n            });\n        }\n        executor.shutdown();\n        System.out.println("All tasks submitted");\n    }\n}',
    hint: "Fixed thread pool reuses threads",
  },
  {
    id: "thread_17",
    topicId: "multithreading",
    question: "Get results from threads using Callable and Future.",
    mathSolution: "Callable returns value, Future gets result",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        ExecutorService executor = Executors.newFixedThreadPool(2);\n        Callable<Integer> task = () -> {\n            System.out.println("Computing sum...");\n            Thread.sleep(2000);\n            int sum = 0;\n            for(int i=1; i<=10; i++) sum += i;\n            return sum;\n        };\n        Future<Integer> future = executor.submit(task);\n        System.out.println("Doing other work...");\n        Integer result = future.get();\n        System.out.println("Result: " + result);\n        executor.shutdown();\n    }\n}',
    hint: "Future.get() waits for completion",
  },
  {
    id: "thread_18",
    topicId: "multithreading",
    question: "Use ScheduledExecutorService for periodic tasks.",
    mathSolution: "Schedule tasks to run after delay or periodically",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);\n        scheduler.schedule(() -> System.out.println("Task executed after 2 seconds"), 2, TimeUnit.SECONDS);\n        ScheduledFuture<?> future = scheduler.scheduleAtFixedRate(() ->\n            System.out.println("Periodic task at " + new java.util.Date()), 1, 1, TimeUnit.SECONDS);\n        Thread.sleep(5000);\n        future.cancel(false);\n        scheduler.shutdown();\n    }\n}',
    hint: "scheduleAtFixedRate for periodic execution",
  },
  {
  id: "thread_19",
  topicId: "multithreading",
  question: "Use invokeAll to execute multiple Callables.",
  mathSolution: "invokeAll executes collection of tasks",
  codeSolution: 'import java.util.concurrent.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        ExecutorService executor = Executors.newFixedThreadPool(3);\n        List<Callable<Integer>> tasks = new ArrayList<>();\n        for (int i = 1; i <= 5; i++) {\n            final int n = i;\n            tasks.add(() -> {\n                Thread.sleep(500 * n); // reduced sleep for faster execution\n                return n * n;\n            });\n        }\n        List<Future<Integer>> futures = executor.invokeAll(tasks);\n        for (Future<Integer> f : futures) {\n            System.out.println("Result: " + f.get());\n        }\n        executor.shutdown();\n    }\n}',
  hint: "invokeAll returns when all tasks complete",
},

  // CONCURRENT COLLECTIONS (3)
  {
    id: "thread_20",
    topicId: "multithreading",
    question: "Use ConcurrentHashMap for thread-safe map operations.",
    mathSolution: "ConcurrentHashMap allows concurrent access",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\n        Runnable task = () -> { for(int i=0; i<100; i++) map.merge("count", 1, Integer::sum); };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println("Final count: " + map.get("count"));\n        map.putIfAbsent("key", 100);\n        map.computeIfPresent("key", (k,v) -> v + 50);\n        System.out.println("Computed: " + map.get("key"));\n    }\n}',
    hint: "Better than synchronized HashMap",
  },
  {
    id: "thread_21",
    topicId: "multithreading",
    question: "Use CopyOnWriteArrayList for thread-safe iteration.",
    mathSolution: "CopyOnWriteArrayList creates copy on modification",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();\n        list.add("A"); list.add("B"); list.add("C");\n        Thread modifier = new Thread(() -> {\n            for(int i=0; i<5; i++) { list.add("X"+i); try { Thread.sleep(100); } catch(Exception e) {} }\n        });\n        Thread reader = new Thread(() -> {\n            for(int i=0; i<5; i++) { System.out.println(list); try { Thread.sleep(50); } catch(Exception e) {} }\n        });\n        modifier.start(); reader.start();\n        modifier.join(); reader.join();\n    }\n}',
    hint: "Iterators don't throw ConcurrentModificationException",
  },
  {
    id: "thread_22",
    topicId: "multithreading",
    question: "Use BlockingQueue for producer-consumer.",
    mathSolution: "BlockingQueue handles synchronization automatically",
    codeSolution: 'import java.util.concurrent.*;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);\n        Thread producer = new Thread(() -> {\n            int value = 0;\n            while(true) {\n                try { queue.put(value); System.out.println("Produced: " + value++); Thread.sleep(500); } catch(Exception e) { break; }\n            }\n        });\n        Thread consumer = new Thread(() -> {\n            while(true) {\n                try { int val = queue.take(); System.out.println("Consumed: " + val); Thread.sleep(1000); } catch(Exception e) { break; }\n            }\n        });\n        producer.start(); consumer.start();\n        Thread.sleep(5000);\n        producer.interrupt(); consumer.interrupt();\n    }\n}',
    hint: "put() and take() are blocking methods",
  },

  // THREAD LOCAL AND VOLATILE (2)
  {
  id: "thread_23",
  topicId: "multithreading",
  question: "Use ThreadLocal for thread-specific variables.",
  mathSolution: "Each thread has its own copy",
  codeSolution: 'public class Main {\n    static class UserContext {\n        private static ThreadLocal<String> currentUser = new ThreadLocal<>();\n        static void setUser(String u) { currentUser.set(u); }\n        static String getUser() { return currentUser.get(); }\n        static void clear() { currentUser.remove(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Runnable task = () -> {\n            UserContext.setUser(Thread.currentThread().getName());\n            System.out.println(UserContext.getUser() + " processing");\n            try { Thread.sleep(1000); } catch(Exception e) {}\n            System.out.println(UserContext.getUser() + " done");\n            UserContext.clear();\n        };\n        Thread t1 = new Thread(task, "User1");\n        Thread t2 = new Thread(task, "User2");\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}',
  hint: "Each thread sees its own ThreadLocal value",
},
  {
    id: "thread_24",
    topicId: "multithreading",
    question: "Use volatile for visibility guarantee.",
    mathSolution: "volatile ensures reads/writes go to main memory",
    codeSolution: 'public class Main {\n    static class SharedFlag {\n        volatile boolean flag = true;\n        void start() {\n            Thread worker = new Thread(() -> {\n                System.out.println("Worker started");\n                while(flag) { try { Thread.sleep(500); } catch(Exception e) {} }\n                System.out.println("Worker stopped");\n            });\n            worker.start();\n        }\n        void stop() { flag = false; System.out.println("Stop requested"); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        SharedFlag sf = new SharedFlag();\n        sf.start();\n        Thread.sleep(3000);\n        sf.stop();\n        Thread.sleep(500);\n    }\n}',
    hint: "Prevents thread caching, ensures visibility",
  },

  // LOCKS AND ATOMIC VARIABLES (2)
  {
    id: "thread_25",
    topicId: "multithreading",
    question: "Use ReentrantLock for advanced locking.",
    mathSolution: "ReentrantLock provides more control than synchronized",
    codeSolution: 'import java.util.concurrent.locks.*;\npublic class Main {\n    static class Counter {\n        private int count = 0;\n        private ReentrantLock lock = new ReentrantLock();\n        void increment() {\n            lock.lock();\n            try { count++; System.out.println(Thread.currentThread().getName() + ": " + count); } finally { lock.unlock(); }\n        }\n        void tryIncrement() {\n            if(lock.tryLock()) {\n                try { count++; System.out.println("Lock acquired by " + Thread.currentThread().getName()); } finally { lock.unlock(); }\n            } else System.out.println("Could not acquire lock, doing something else");\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Runnable task = () -> { for(int i=0; i<3; i++) { counter.increment(); try { Thread.sleep(100); } catch(Exception e) {} } };\n        Thread t1 = new Thread(task, "Thread-1");\n        Thread t2 = new Thread(task, "Thread-2");\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        counter.tryIncrement();\n    }\n}',
    hint: "Always unlock in finally block",
  },
  {
    "id": "thread_26",
    "topicId": "multithreading",
    "question": "Use AtomicInteger for lock-free thread-safe counter.",
    "mathSolution": "AtomicInteger provides atomic operations without explicit synchronization.",
    "codeSolution": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n    static class AtomicCounter {\n        private AtomicInteger count = new AtomicInteger(0);\n        public void increment() { count.incrementAndGet(); }\n        public int get() { return count.get(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        AtomicCounter counter = new AtomicCounter();\n        Runnable task = () -> { for(int i=0; i<1000; i++) counter.increment(); };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(\"Final count: \" + counter.get());\n    }\n}",
    "hint": "AtomicInteger methods are atomic and lock-free."
  },
  {
    "id": "thread_27",
    "topicId": "multithreading",
    "question": "Use CountDownLatch to make one thread wait for multiple threads to complete.",
    "mathSolution": "CountDownLatch lets threads wait until a count reaches zero.",
    "codeSolution": "import java.util.concurrent.CountDownLatch;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        int numberOfWorkers = 3;\n        CountDownLatch latch = new CountDownLatch(numberOfWorkers);\n        Runnable worker = () -> {\n            System.out.println(Thread.currentThread().getName() + \" working\");\n            try { Thread.sleep(1000); } catch(InterruptedException e) {}\n            latch.countDown();\n            System.out.println(Thread.currentThread().getName() + \" finished\");\n        };\n        for(int i=0; i<numberOfWorkers; i++) new Thread(worker).start();\n        latch.await();\n        System.out.println(\"All workers completed. Main thread proceeds.\");\n    }\n}",
    "hint": "await() blocks until countDown() reduces count to zero."
  },
  {
    "id": "thread_28",
    "topicId": "multithreading",
    "question": "Use CyclicBarrier to synchronize threads at a common barrier point repeatedly.",
    "mathSolution": "CyclicBarrier allows threads to wait for each other; it can be reused.",
    "codeSolution": "import java.util.concurrent.CyclicBarrier;\npublic class Main {\n    public static void main(String[] args) {\n        int numberOfThreads = 3;\n        CyclicBarrier barrier = new CyclicBarrier(numberOfThreads, () -> System.out.println(\"Barrier reached, all threads proceed\"));\n        Runnable task = () -> {\n            try {\n                System.out.println(Thread.currentThread().getName() + \" waiting at barrier\");\n                barrier.await();\n                System.out.println(Thread.currentThread().getName() + \" passed barrier\");\n            } catch(Exception e) {}\n        };\n        for(int i=0; i<numberOfThreads; i++) new Thread(task).start();\n    }\n}",
    "hint": "await() waits until all parties have called await."
  },
  {
    "id": "thread_29",
    "topicId": "multithreading",
    "question": "Use Semaphore to limit concurrent access to a resource.",
    "mathSolution": "Semaphore controls number of permits for accessing a shared resource.",
    "codeSolution": "import java.util.concurrent.Semaphore;\npublic class Main {\n    static class Resource {\n        private Semaphore semaphore = new Semaphore(2); // max 2 concurrent accesses\n        public void access() {\n            try {\n                semaphore.acquire();\n                System.out.println(Thread.currentThread().getName() + \" accessing resource\");\n                Thread.sleep(1000);\n                semaphore.release();\n                System.out.println(Thread.currentThread().getName() + \" released\");\n            } catch(InterruptedException e) {}\n        }\n    }\n    public static void main(String[] args) {\n        Resource res = new Resource();\n        Runnable task = () -> res.access();\n        for(int i=0; i<5; i++) new Thread(task).start();\n    }\n}",
    "hint": "acquire() blocks until a permit is available; release() returns permit."
  },
  {
    "id": "thread_30",
    "topicId": "multithreading",
    "question": "Use CompletableFuture to run asynchronous tasks and combine results.",
    "mathSolution": "CompletableFuture chains asynchronous computations.",
    "codeSolution": "import java.util.concurrent.CompletableFuture;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {\n            System.out.println(\"Task 1 running\");\n            return 10;\n        }).thenApplyAsync(result -> {\n            System.out.println(\"Task 2 running, result: \" + result);\n            return result * 2;\n        }).thenApplyAsync(result -> {\n            System.out.println(\"Task 3 running, result: \" + result);\n            return result + 5;\n        });\n        System.out.println(\"Final result: \" + future.get());\n    }\n}",
    "hint": "thenApplyAsync chains transformations that run asynchronously."
  },
  {
    "id": "thread_31",
    "topicId": "multithreading",
    "question": "Use Phaser for dynamic thread synchronization (party registration/deregistration).",
    "mathSolution": "Phaser supports variable number of threads that can register and arrive.",
    "codeSolution": "import java.util.concurrent.Phaser;\npublic class Main {\n    public static void main(String[] args) {\n        Phaser phaser = new Phaser(1); // register main thread\n        for(int i=0; i<3; i++) {\n            phaser.register();\n            new Thread(() -> {\n                System.out.println(Thread.currentThread().getName() + \" phase 1\");\n                phaser.arriveAndAwaitAdvance();\n                System.out.println(Thread.currentThread().getName() + \" phase 2\");\n                phaser.arriveAndDeregister();\n            }).start();\n        }\n        phaser.arriveAndAwaitAdvance(); // wait for all to reach phase 1\n        System.out.println(\"All threads completed phase 1\");\n        phaser.arriveAndDeregister(); // main deregister\n    }\n}",
    "hint": "arriveAndAwaitAdvance() waits for all registered parties to arrive."
  },
  {
    "id": "thread_32",
    "topicId": "multithreading",
    "question": "Use Exchanger to swap data between two threads.",
    "mathSolution": "Exchanger allows two threads to exchange objects at a rendezvous point.",
    "codeSolution": "import java.util.concurrent.Exchanger;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Exchanger<String> exchanger = new Exchanger<>();\n        Thread t1 = new Thread(() -> {\n            try {\n                String data = exchanger.exchange(\"Data from T1\");\n                System.out.println(\"T1 received: \" + data);\n            } catch(InterruptedException e) {}\n        });\n        Thread t2 = new Thread(() -> {\n            try {\n                String data = exchanger.exchange(\"Data from T2\");\n                System.out.println(\"T2 received: \" + data);\n            } catch(InterruptedException e) {}\n        });\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}",
    "hint": "exchange() blocks until both threads call it, then swaps objects."
  },
  {
    "id": "thread_33",
    "topicId": "multithreading",
    "question": "Use ForkJoinPool to compute sum of array using RecursiveTask.",
    "mathSolution": "ForkJoinPool divides tasks recursively for parallel processing.",
    "codeSolution": "import java.util.concurrent.RecursiveTask;\nimport java.util.concurrent.ForkJoinPool;\npublic class Main {\n    static class SumTask extends RecursiveTask<Long> {\n        private int[] array;\n        private int start, end;\n        private static final int THRESHOLD = 10;\n        SumTask(int[] array, int start, int end) { this.array = array; this.start = start; this.end = end; }\n        @Override\n        protected Long compute() {\n            if(end - start <= THRESHOLD) {\n                long sum = 0;\n                for(int i=start; i<end; i++) sum += array[i];\n                return sum;\n            }\n            int mid = (start + end) / 2;\n            SumTask left = new SumTask(array, start, mid);\n            SumTask right = new SumTask(array, mid, end);\n            left.fork();\n            long rightResult = right.compute();\n            long leftResult = left.join();\n            return leftResult + rightResult;\n        }\n    }\n    public static void main(String[] args) {\n        int[] array = new int[100];\n        for(int i=0; i<array.length; i++) array[i] = i+1;\n        ForkJoinPool pool = new ForkJoinPool();\n        long sum = pool.invoke(new SumTask(array, 0, array.length));\n        System.out.println(\"Sum: \" + sum);\n    }\n}",
    "hint": "RecursiveTask returns a result; fork() and join() split work."
  },
  {
    "id": "thread_34",
    "topicId": "multithreading",
    "question": "Create a daemon thread that runs in background and terminates when main thread ends.",
    "mathSolution": "Daemon threads do not prevent JVM exit.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread daemon = new Thread(() -> {\n            while(true) {\n                System.out.println(\"Daemon running\");\n                try { Thread.sleep(500); } catch(InterruptedException e) { break; }\n            }\n        });\n        daemon.setDaemon(true);\n        daemon.start();\n        Thread.sleep(2000);\n        System.out.println(\"Main thread ending, daemon will be terminated\");\n    }\n}",
    "hint": "setDaemon(true) must be called before start()."
  },
  {
    "id": "thread_35",
    "topicId": "multithreading",
    "question": "Handle thread interruption properly by catching InterruptedException and preserving interrupted status.",
    "mathSolution": "Thread interruption should be handled gracefully.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread worker = new Thread(() -> {\n            try {\n                for(int i=0; i<10; i++) {\n                    System.out.println(\"Working... \" + i);\n                    Thread.sleep(1000);\n                }\n            } catch(InterruptedException e) {\n                System.out.println(\"Interrupted! Cleaning up...\");\n                Thread.currentThread().interrupt(); // restore interrupted status\n            }\n        });\n        worker.start();\n        Thread.sleep(2500);\n        worker.interrupt();\n        worker.join();\n        System.out.println(\"Worker finished.\");\n    }\n}",
    "hint": "Always re-interrupt after catching InterruptedException."
  },
  {
    "id": "thread_36",
    "topicId": "multithreading",
    "question": "Use LockSupport to park and unpark threads.",
    "mathSolution": "LockSupport provides thread blocking primitives.",
    "codeSolution": "import java.util.concurrent.locks.LockSupport;\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            System.out.println(\"Thread waiting...\");\n            LockSupport.park();\n            System.out.println(\"Thread resumed\");\n        });\n        t.start();\n        Thread.sleep(1000);\n        System.out.println(\"Unparking thread\");\n        LockSupport.unpark(t);\n        t.join();\n    }\n}",
    "hint": "park() blocks until unpark() is called for that thread."
  },
  {
    "id": "thread_37",
    "topicId": "multithreading",
    "question": "Use ReadWriteLock to allow multiple readers but exclusive writer.",
    "mathSolution": "ReadWriteLock improves concurrency when reads are frequent.",
    "codeSolution": "import java.util.concurrent.locks.ReentrantReadWriteLock;\npublic class Main {\n    static class SharedData {\n        private int value = 0;\n        private ReentrantReadWriteLock lock = new ReentrantReadWriteLock();\n        public int read() {\n            lock.readLock().lock();\n            try { return value; } finally { lock.readLock().unlock(); }\n        }\n        public void write(int v) {\n            lock.writeLock().lock();\n            try { value = v; System.out.println(\"Written: \" + v); } finally { lock.writeLock().unlock(); }\n        }\n    }\n    public static void main(String[] args) {\n        SharedData data = new SharedData();\n        Runnable reader = () -> System.out.println(\"Read: \" + data.read());\n        Runnable writer = () -> data.write(42);\n        new Thread(writer).start();\n        for(int i=0; i<3; i++) new Thread(reader).start();\n    }\n}",
    "hint": "Multiple readers can read simultaneously; writer gets exclusive access."
  },
  {
    "id": "thread_38",
    "topicId": "multithreading",
    "question": "Use Condition with ReentrantLock to implement a bounded buffer.",
    "mathSolution": "Condition provides await/signal similar to wait/notify.",
    "codeSolution": "import java.util.LinkedList;\nimport java.util.Queue;\nimport java.util.concurrent.locks.Condition;\nimport java.util.concurrent.locks.ReentrantLock;\npublic class Main {\n    static class BoundedBuffer {\n        private Queue<Integer> queue = new LinkedList<>();\n        private int capacity;\n        private ReentrantLock lock = new ReentrantLock();\n        private Condition notFull = lock.newCondition();\n        private Condition notEmpty = lock.newCondition();\n        BoundedBuffer(int cap) { capacity = cap; }\n        public void put(int value) throws InterruptedException {\n            lock.lock();\n            try {\n                while(queue.size() == capacity) notFull.await();\n                queue.add(value);\n                System.out.println(\"Produced: \" + value);\n                notEmpty.signal();\n            } finally { lock.unlock(); }\n        }\n        public int take() throws InterruptedException {\n            lock.lock();\n            try {\n                while(queue.isEmpty()) notEmpty.await();\n                int value = queue.poll();\n                System.out.println(\"Consumed: \" + value);\n                notFull.signal();\n                return value;\n            } finally { lock.unlock(); }\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        BoundedBuffer buffer = new BoundedBuffer(2);\n        Thread producer = new Thread(() -> {\n            for(int i=0; i<5; i++) { try { buffer.put(i); Thread.sleep(500); } catch(InterruptedException e) {} }\n        });\n        Thread consumer = new Thread(() -> {\n            for(int i=0; i<5; i++) { try { buffer.take(); Thread.sleep(1000); } catch(InterruptedException e) {} }\n        });\n        producer.start(); consumer.start();\n        producer.join(); consumer.join();\n    }\n}",
    "hint": "Condition.await() releases lock; signal() wakes one waiting thread."
  },
  {
    "id": "thread_39",
    "topicId": "multithreading",
    "question": "Use ThreadGroup to manage multiple threads and interrupt all at once.",
    "mathSolution": "ThreadGroup allows bulk operations on a set of threads.",
    "codeSolution": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        ThreadGroup group = new ThreadGroup(\"Workers\");\n        Runnable task = () -> {\n            while(!Thread.currentThread().isInterrupted()) {\n                System.out.println(Thread.currentThread().getName() + \" working\");\n                try { Thread.sleep(500); } catch(InterruptedException e) { break; }\n            }\n            System.out.println(Thread.currentThread().getName() + \" stopped\");\n        };\n        for(int i=0; i<3; i++) new Thread(group, task, \"Worker-\"+i).start();\n        Thread.sleep(2000);\n        group.interrupt();\n    }\n}",
    "hint": "ThreadGroup.interrupt() interrupts all threads in the group."
  },
  {
  "id": "thread_40",
  "topicId": "multithreading",
  "question": "Use ThreadFactory to create custom named threads with daemon flag.",
  "mathSolution": "ThreadFactory centralizes thread creation.",
  "codeSolution": "import java.util.concurrent.ThreadFactory;\npublic class Main {\n    static class CustomThreadFactory implements ThreadFactory {\n        private int counter = 0;\n        public Thread newThread(Runnable r) {\n            Thread t = new Thread(r, \"Custom-\" + (++counter));\n            t.setDaemon(true);\n            return t;\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        CustomThreadFactory factory = new CustomThreadFactory();\n        Runnable task = () -> System.out.println(Thread.currentThread().getName() + \" running\");\n        for(int i=0; i<3; i++) factory.newThread(task).start();\n        // Give daemon threads time to execute before main exits\n        Thread.sleep(100);\n    }\n}",
  "hint": "ThreadFactory can be used with Executors.newFixedThreadPool(int, ThreadFactory)."
}
);