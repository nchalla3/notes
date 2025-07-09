### Takeaways:
- Use Two Pointers when you're traversing a data structure optimally
- iterate both continuously in a loop
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