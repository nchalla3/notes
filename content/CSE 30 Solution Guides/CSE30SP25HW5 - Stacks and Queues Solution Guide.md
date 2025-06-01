---
publish: "false"
---
## Stacks
A stack is a data structure with two operations:
- `push()`: add an element to the top of the stack
- `pop()`: remove (and return) the top element of the stack
### Question 1: Undo Function
```
class UndoStack:
    """ Represent a stack of commands for implementing undo functionality """
    def __init__(self):
        self.stack = []

    def add(self, command):
        """ Add a command to the top of the stack """
        self.stack.append(command)
        # The append method in a stack adds an element to the top.
        # Stacks follow LIFO (Last In First Out).

    def undo(self):
        """ Remove and return the command at the top of the stack """
        if self.stack:
            return self.stack.pop()
        else:
            return None
        # Returns the last element added using pop (LIFO behavior).

    def view_stack(self):
        """ Print the commands in the stack, with each command on a new line """
        while self.stack:
            print(self.stack.pop())
        # Iterates through the stack and prints until it's empty.
```
## Queues
A queue is a data structure with two operations:
- `add()`: add an element to the end of the queue
- `get()`: remove (and return) the element from the front of the queue
### Question 2: Printer Queue
```
class PrinterQueue:
    """ Represent a queue of print jobs at a printer """

    def __init__(self):
        self.queue = []

    def add_job(self, job):
        """ Add a print job to the end of the queue """
        self.queue.append(job)
        # Uses append to add to end (FIFO).

    def get_job(self):
        """ Remove and return the job at the front of the queue for printing """
        if self.queue:
            return self.queue.pop(0)
        else:
            return None
        # pop(0) removes and returns the first item (FIFO).

    def view_queue(self):
        """ Print the jobs in the queue, with each one on a new line """
        while self.queue:
            print(self.get_job())
```
## Priority Queue

### Question 3: Priority Queue Implementation
```
def add_element(self, element, priority):
    """ Add an element with a priority to the queue """
    self.queue.append((element, priority))

def peek(self):
    """ Return element with the highest priority without removing it """
    if not self.queue:
        return None
    highPriority = min(item[1] for item in self.queue)
    for item in self.queue:
        if item[1] == highPriority:
            return item[0]

def get(self):
    """ Removes and returns the element with the highest priority in the queue """
    if not self.queue:
        return None
    highPriority = min(item[1] for item in self.queue)
    index = 0
    for i in range(len(self.queue)):
        if self.queue[i][1] == highPriority:
            index = i
            break
    return self.queue.pop(index)[0]
def count(self, priority):
	""" Return the number of elements in the queue that have the specified                 priority """
    count = 0
    for item in self.queue:
        if item[1] == priority:
            count += 1
    return count
```