---
publish: "true"
title: Combinatorics With Repetition
---
# Cheat Sheet

| Type           | Repetition Allowed? | Formula                          |
| -------------- | ------------------- | -------------------------------- |
| r-permutations | No                  | $$\frac{n!}{(n-r)!}$$            |
| r-combinations | No                  | $$\frac{n!}{r!(n-r)!}$$          |
| r-permutations | Yes                 | $$n^r$$                          |
| r-combinations | Yes                 | $$\frac{(n + r - 1)}{r!(n-1)!}$$ |

**Generalized Pigeonhole Principle**: If you want to sort *n* objects into *k* bins, at least one of the bins will contain *n*/*k* objects

**Permutations**: # of ways to pick *k* objects from *n* objects when order matters

**Combinations:** # of ways to pick *k* objects from *n* objects when order doesn't matter

**n^k**: Number of ways to pick an object with replacement when order doesn't matter

#### Combinations with Repetition:
Example> Suppose that a bakery has 4 different kinds of donuts. How many ways can I select 6 donuts.

Since order doesn't matter, we want combinations

Theorem: $$
C(n + r - 1, r) = \binom{9}{6} = \frac{9!}{(9 - 6)! \cdot 6!} = \frac{9 \cdot 8 \cdot 7}{3 \cdot 2 \cdot 1} = 84
$$
#### Balls and Bins
How many ways are there for eight students and five professors to be alternated?

Solution:
- Imagine there are six bins around the five professors
- No professor stands next to another professor, so the 4 bins in between each have one student
- How many ways are there to add the r = (8-4) = 4 remaining students in the n = 6 bins. There are $$C(n+4-1, n-1) = C(6+4-1, 5) = C(9, 5)$$
- How many ways to place the professors in their slots? 5! How many ways to place the students in their slots? 8!
- By product rule: C(9, 5)8!5! = 9!8!/4!

##### Example 2:
How many solutions does the equation x1 + x2 + x3 = 11 have where x1, x2, and x3 are all non-negative integers

Solution:
- Think of each x1, x2 and x3 as the bins into which we sort 11 items
- REFER TO SLIDES

##### Example 3:
How many solutions does the equation x1 + x2 + x3 = 11 have where x1, x2, x3 are all non-negative integers that satisfy x1 >= 1, x2 >=2, x3 >=3
- 3 bins of x1, x2, x3
	- Put 1 ball in x1
	- Put 2 balls in x2
	- Put 3 balls in x3
- r = 11 (total) -6 (1 + 2 + 3) = 5
- n = 3 (num of boxes)
- C(n+r-1, 5)
- C(7, 5) = 21