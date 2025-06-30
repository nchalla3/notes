---
publish: "true"
---
### Takeaways:
- Dictionary keys can be many different data types - holding a unique list of letter frequency is a clever, optimal solution to this problem
- Using a tuple to represent these values allows for a time complexity of O (m * n) where m is the number of strings and m is the average length of each string
- A less optimal, simpler solution is to sort the strings (Timsort or Powersort, depending on which version of Python you're using) and then compare from there

```
from collections import defaultdict

def groupAnagrams(strs):
    anagram_groups = defaultdict(list)

    for word in strs:
        # Sort the word to get the key
        sorted_word = ''.join(sorted(word))
        anagram_groups[sorted_word].append(word)

    return list(anagram_groups.values())
```
![[Multiple Anagrams.pdf]]