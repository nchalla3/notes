### Takeaways:
- Automatic pass/fail cases
	- If the lengths aren't equal, they can't be anagrams
	- If the strings are identical, they must be anagrams
- Progressively optimized solution
	- Could parse each character of each string and verify that they are all the same, but this is slow and inefficient
	- Could use the sort method O(n log n), but hash map is faster O(n)
![[Valid Anagram.pdf]]