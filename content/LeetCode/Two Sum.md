---
publish: "true"
---
```rust
fn(main)

```
### Takeaways:
- HashMaps for Lookup
	- O(1) time complexity because it's a real-time operation
- Single-Pass Iteration/Prefix-Sum
- Important to follow the process:
	1. Think about the problem (15-20s)
	2. Ask any immediate clarifying questions
	3. Write out test cases (these should encompass best-case, average-case, worst-case)
	4. If you think of any more questions refer to Step 2
	5. Write out algorithm
	6. Write out pseudocode (optional)
	7. Write code
	8. Optimize if possible
- Hash Map/Frequency Counter
![[Two Sum.pdf]]
### O(n) Solution
```python
class Solution(object):

    def twoSum(self, nums, target):
        empty_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in empty_map:
                return [empty_map[complement], i]
            empty_map[num] = i
```
### Algorithm:
1. Initialize an empty `hashmap`
2. Iterate through the list of nums using `enumerate`
	- This allows for tracking of the current number (`num`) alongside the index of the current number (`i`)
3. Instantiate a variable `complement` and set it equal to `target` - `num` 
4. If this complement is in the **hashmap** (not nums), return the index of `complement` and `i` 

### Test Case:
- Let's take an example where `nums = [1, 2, 4, 6]` and `target = 10`
1. `i = 0` and `num = 1`
	1. `complement = 10 - 1 = 9` 
	2. 9 **isn't** in the hashmap as the hashmap is initialized empty, so it gets added to `empty_map` as `{ 1 : 0 }`
 2. `i = 1` and `num = 2`
	 1. `complement = 10 - 2 = 8`
	 2. 8 **isn't** in the hashmap, so it gets added to `empty_map` as `{ 2 : 1}`
3. `i = 2` and `num = 4`
	 1. `complement = 10 - 4 = 6`
	 2. 6 **isn't** in the hashmap, so it gets added to `empty_map` as `{ 4 : 2}`
4. `i = 6` and `num = 3`
	 1. `complement = 10 - 6 = 4`
	 2. 4 **is** in the hashmap, so it returns `empty_map[4]`, which is 2, and `i`, which is 3, revealing the answer of `[2,3]`
