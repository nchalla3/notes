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
* It declares a variable (CC) that holds the compile and link (clang) method
This is tedious, and can easily be automated. 