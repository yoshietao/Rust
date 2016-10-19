initSidebarItems({"enum":[["LocalKeyState","Indicator of the state of a thread local storage key."]],"fn":[["current","Gets a handle to the thread that invokes it."],["panicking","Determines whether the current thread is unwinding because of panic."],["park","Blocks unless or until the current thread's token is made available."],["park_timeout","Blocks unless or until the current thread's token is made available or the specified duration has been reached (may wake spuriously)."],["park_timeout_ms","Use [park_timeout]."],["sleep","Puts the current thread to sleep for the specified amount of time."],["sleep_ms","Puts the current thread to sleep for the specified amount of time."],["spawn","Spawns a new thread, returning a `JoinHandle` for it."],["yield_now","Cooperatively gives up a timeslice to the OS scheduler."]],"struct":[["Builder","Thread configuration. Provides detailed control over the properties and behavior of new threads."],["JoinHandle","An owned permission to join on a thread (block on its termination)."],["LocalKey","A thread local storage key which owns its contents."],["Thread","A handle to a thread."]],"type":[["Result","Indicates the manner in which a thread exited."]]});