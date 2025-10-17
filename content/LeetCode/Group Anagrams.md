---
publish: "true"
---
### Takeaways:
- Dictionary keys can be many different data types - holding a unique list of letter frequency is a clever, optimal solution to this problem
- Using a tuple to represent these values allows for a time complexity of O (m * n) where m is the number of strings and m is the average length of each string
- A less optimal, simpler solution is to sort the strings (Timsort or Powersort, depending on which version of Python you're using) and then compare from there

```python
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

### Another Stab at Group Anagrams
1. Initialize an empty list, to hold each string's sorted form
2. Sort each string and join the list of sorted characters into a single sorted string for each term*
3. Initialize a dictionary where each key is the sorted characters, and each value is a list of the corresponding term from strs
4. If a given sorted string is already present in the dictionary, add to the corresponding list
5. Else, add a key value pair of the sorted string and its corresponding term in str
6. Return the values of the dictionary as a list

 *The sorted macro in Python when fed a string will return a list with each character. For example, sorted("car") would return a list ["a", "c", r"]

- This has a time complexity of O(nk log (n)), where n is the number of strings, and k is the average length of each string. This is not the most efficient solution (maximally efficient solution shown above)

```python
class Solution(object):
    def groupAnagrams(self, strs):
        sortedStrs = []
        for i in range(0,len(strs)):
            sortedStrs.append(''.join(sorted(strs[i])))
        sortedDict = {}
        for i in range(len(sortedStrs)):
            if sortedStrs[i] in sortedDict:
                sortedDict[sortedStrs[i]].append(strs[i])
            else:
                sortedDict[sortedStrs[i]] = [strs[i]]
        
        return list(sortedDict.values())
```