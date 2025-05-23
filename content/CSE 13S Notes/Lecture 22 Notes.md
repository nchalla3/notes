---
title: Automatic Vars in Makefiles, Unbuffered File I-O
publish: "true"
tags:
  - Lecture-Notes
  - Draft
---
## Automatic Variables in Makefiles

### Purpose
**Avoid code duplication** and simplify rules in Makefiles.

### Manual Compilation Example
```make
CC = clang
CFLAGS = -g

sorting.o: sorting.c
    $(CC) $(CFLAGS) -c sorting.c

insert.o: insert.c
    $(CC) $(CFLAGS) -c insert.c
```
#### What does this program do?
* It declares a variable **(CC)** that holds the compile and link (clang) method
* It declares a variable **(CFLAGS)** that holds the suffix for compiling with debugger
* sorting.o: sorting.c sets a target rule, telling the makefile that the **object file** sorting.o should be created from the **source file** sorting.c
This is tedious, and can easily be automated. 

### Wildcards
```
%.o: %.c
	$(CC) $(CFLAGS) $< -o $@
```
* **%**: wildcard for filename matching
	* you can also use a variable instead of % 
- **$<**: first dependency (the file after the colon)
- $@: target (left of the colon)
- $^: if you have multiple dependencies, this symbol refers to all dependencies

## Unbuffered File I/O in C

#### Buffered I/O:
* fopen()
* fscanf()
* fclose()
#### Unbuffered I/O:
* open()
* read()
* close() -> this is used in CSE 130, not in this class

#### System Call Functions

##### open()
```
int fd = open(const char *name, int flags);
```
- name: filename
- flags: O_RDONLY, O_WRONLY, O_RDWR
- returns: file descriptor, -1 (error case)

##### read()
```
ssize_T res = read(int fd, void *buf, size_t n);
```
- fd: file descriptor from open
- buf: buffer to receive bytes
- n: number of bytes to read
- returns:
	- res
		- not 0 or -1: number of bytes actually read
		- 0: EOF
		- -1: error
##### close()
```
int res = close(int fd);
```
- fd: file descriptor from open
- returns: 
	- 0 (successfully closed)
	- -1 (error)
#### Handling File Larger Than Buffer
- Use a loop to repeatedly read characters
```
char buffer[16];
ssize_t result = read(fd, buffer, sizeof(buffer));
```
- If `read()` returns fewer bytes than requested:
	- Continue reading w/remaining buffer space
	- Recalculate n as space remains
#### Template Code for Unbuffered I/O
```
int main (int argc, char **argv) {
    // Check argc
    int fd = open(argv[1], O_RDONLY);
    // Check fd
    char buffer[16];
    int n = sizeof(buffer);
    // read() should be in a loop
    ssize_t result = read(fd, buffer, n);
    result = close(fd);
    return 0;
}
```
