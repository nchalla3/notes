---
publish: "true"
---
### Takeaways:
- Automatic pass/fail cases
	- If the lengths aren't equal, they can't be anagrams
	- If the strings are identical, they must be anagrams
- Progressively optimized solution
	- Could parse each character of each string and verify that they are all the same, but this is slow and inefficient
	- Could use the sort method O(n log n), but hash map is faster O(n)

### Simple Solution:
- This solution requires a binary sort of the characters in `s` and `t`
- Consequently, this solution isn't the most efficient with a time complexity of `O(n log(n) + m log(m))`
```python
def isAnagram(self, s: str, t: str) -> bool:
	if sorted(s) == sorted(t):
		return True
	else:
		return False
		
```

### Optimal Solution:
It's possible to solve this problem in `O(n)` time
##### Algorithm:
1. Flag for early exits with checks for length equality and string congruency
2. Map the frequency of each character in `s` to its corresponding alphabetical value (Hashmap lookups are an `O(1)` operation)
3. Parse the characters in `t`
	1. If there's a character in t that isn't in the s map, return `False`
        
    2. Subtract the encountered characters from the s map
        
    3. If the number of mapped characters < 0, return `False`
        
4. Return `True`

```python
def isAnagram(self, s: str, t: str) -> bool:
	if len(s) != len(t):
		return False
	if s == t:
		return True
	s_map = {}
	for c in s:
		if c in s_map:
			s_map[c] += 1
		else:
			s_map[c] = 1
	for c in t:
		if c in s_map:
			s_map[c] -= 1
			if s_map[c] < 0:
				return False
		else:
			return False
	return True
	
```

![[Valid Anagram.pdf]]