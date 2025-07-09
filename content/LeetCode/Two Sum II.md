---
publish: "true"
---
> [!idea] Note:
> This page includes notes on the Two Pointers LeetCode Pattern, alongside my solution to Two Sum II
### Takeaways:
- Use Two Pointers when you're traversing a data structure optimally
- iterate both continuously in a loop
- In this case, each pointer closes the gap until the correct sum is reached
- I managed to find this solution on my first try! LeetCode pattern practice might be more effective than an approach through pure data structures; I think ultimately a combination of both is optimal
### Test Cases:
- `[1, 3, 7, 12]`, `target = 15`; return `[2, 4]`
- `[1,3]`, `target = 4`, return `[1, 2]`
- `[-11, -4, 1, 3, 6]`, `target = 1`, return `[2, 5]`
### Algorithm: 
1. If the length of the numbers  == 2, return  [1, 2]
2. Set the left pointer to index 0 and the right pointer to the length of `numbers` - 1
3. Check the sum of the two elements at these indices. If it is greater than target, move the RHP to the left (decrement by 1)
4. If the sum is less than target, move the LHP to the right (increment by 1)
5. Add 1 to both indices and return
### O(n) Solution
```python
 def twoSum(self, numbers, target):
        if len(numbers) == 2:
            return [1, 2]
        LHP = 0
        RHP = len(numbers) - 1
        currSum = numbers[LHP] + numbers[RHP]
        while currSum != target:
            if currSum > target:
                RHP -= 1
            if currSum < target:
                LHP += 1
            currSum = numbers[LHP] + numbers[RHP]
        
        return [LHP+1, RHP+1]
```
![[Two Pointers.pdf]]