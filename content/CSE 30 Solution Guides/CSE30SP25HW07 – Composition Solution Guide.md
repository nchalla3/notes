## Node and LinkedLists
```
class Node:
    """ Represent a node in a linked list """

    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next
```

The `Node` class represents an element in a linked list, with two attributes:
- `value`: the data stored in the node
- `next`: a reference to the next node

![[Pasted image 20250531135018.png]]
Image Citation: *Basic Terminologies of a LinkedList*, GeeksForGeeks

```
class LinkedList:
    """ Represents a linked list """
    def __init__(self, head=None):
        self.head = head
```
The `LinkedList` class uses **composition** to organize `Node` objects.

### Question 1: Check if Empty
Write the method `is_empty()` that returns `True` if the list is empty (`head` is `None`), `False` otherwise

```
def is_empty(self):
    """ Return True if the list is empty, False otherwise """
    return self.head is None
```
This function returns a boolean expression, utilizing the Python `is` operator to check if there is no head at the front of the list (which would mean it's empty)
### Question 2: Add to Front
Write a method `add_front(self, value)` that creates a new node with the given value and adds it to the front of the list.
```
def add_front(self, value):
    """ Add a new node with the given value to the front of the list """
    new_node = Node(value, self.head)
    self.head = new_node
```
Node insertion is easy in LinkedLists compared to other data structures as we simply assign the Node a value, and in this case assign this new node as the head of the LinkedList, thereby inserting it at the front of the list
## Question 3: Add to Back
Write a method `add_back(self, value)` that adds a node to the end of the list.
```
def add_back(self, value):
    """ Add a new node with the given value to the end of the list """
    new_node = Node(value)
    if self.head is None:
        self.head = new_node
    else:
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
```
Here, we create the new node and assign it a value, like before. If the LinkedList is empty, then we simply add the node because the front and back are the same! If not, we bump each node up on the list until there isn't a non-null node next value, and we add the new node at the back of the LinkedList
## Question 4: Count Nodes
Write a method `count_nodes(self)` that returns the total number of nodes in the list.
```
def count_nodes(self):
    """ Return the total number of nodes in the list """
    count = 0
    current = self.head
    while current:
        count += 1
        current = current.next
    return count
```
This function traverses the LinkedList and increments a count variable, terminating the loop once there is no longer a node linked to the next property of a node.
## Question 5: Print List
Write a method `print_list(self)` that prints the elements of the list in order.
```
def print_list(self):
    """ Print all values in the list separated by spaces """
    current = self.head
    while current:
        print(current.value, end=" ")
        current = current.next
    print()
```
This function traverses the LinkedList that iterates through each node and print its values, using similar logic to the previous question

## Question 6: Search Value
Write a method `search(self, value)` that returns `True` if the value exists in the list, `False` otherwise.
```
def search(self, value):
    """ Return True if value exists in the list, False otherwise """
    current = self.head
    while current:
        if current.value == value:
            return True
        current = current.next
    return False
```
This function uses a linear search to determine if a value exists in the list, and returns either True or False

## Question 7: Delete Value
Write a method `delete(self, value)` that deletes the first node with the given value.
```
def delete(self, value):
    """ Delete the first occurrence of value from the list """
    current = self.head
    previous = None
    while current:
        if current.value == value:
            if previous:
                previous.next = current.next
            else:
                self.head = current.next
            return True
        previous = current
        current = current.next
    return False
```
This function maintains a pointer to allow the re-linking of nodes if a match of the first value has been found. If so, the pointer is linked to the subsequent node, and if the desired target is the head value, head is updated with the previous node.