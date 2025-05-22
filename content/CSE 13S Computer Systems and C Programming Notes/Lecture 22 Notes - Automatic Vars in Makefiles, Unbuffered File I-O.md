---
title: Lecture 22 Notes - Automatic Vars in Makefiles, Unbuffered File I-O
publish: "false"
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

