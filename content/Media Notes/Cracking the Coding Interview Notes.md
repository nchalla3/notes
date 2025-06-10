---
title: Cracking the Coding Interview Notes
publish: "true"
tags:
  - Books
---
### Behind the Scenes
##### Microsoft
> [!tip] **Must-Prep**
> *Why do you want to work for **Microsoft**?*
- Wants smart people who are passionate about technology
- Whiteboard coding
- Starts with short interview w/recruiter 
	- You'll be given a sample question
- During the day, 4-5 interviews w/two different teams
- When interviews are done, might speak w/hiring manager (this is a good sign)
- Decision comes back either same day or within a week

##### Amazon
> [!tip] **Must-Prep**
> *Large scale systems/object-oriented design*
> *Bar-Raiser: brought in from another team to keep the bar high*
- Starts with 1-2 phone screens with a specific team
	- write simple code and read aloud
- From here, 4-5 in-person interviews
	- code on whiteboard
- "Bar-Raiser" interviewer
	- tasked with keeping interview bar high
	- will often be much harder than other interviewers
- Should hear back in a week

##### Google
> [!tip] **Must-Prep**
> *System Design and Memory Limits*
> *Bit Manipulation*
- Communicate proactively
- Touch technical questions on first phone screen
- Afterwards, interview with 4-6 people
- Written feedback submitted to hiring comittee
	- Analytical Ability
	- Coding
	- Experience
	- Communication
##### Apple
> [!tip] **Must-Prep**
> *Read up on the team you're interviewing with and proactively suggest improvements*
> *2-on-1 interviews, show passion for Apple products*
- Begins with recruiter phone screen, followed with technical screens from team members
- Typically 6-8 interviews with members of team for which you're interviewing
- Whiteboard coding
- Lunch interview with potential future manager
- If all goes well, interview with director and then VP of org you're applying to
### The Other Side of the Interview
- Would I have a beer with this guy?
- Do I want to work with this person for an extended period of time?
- Can I depend on you?
- Try to convey: **hiring me will make your life easier**
- Resume screeners care:
	- if you are smart
	- if you can code
### Behaviorals
| Stay @ UCSC              | Project 1 | Project 2 | Project 3 | Project 4 |
| ------------------------ | --------- | --------- | --------- | --------- |
| Most Challenging         |           |           |           |           |
| What You Learned         |           |           |           |           |
| Most Interesting         |           |           |           |           |
| Hardest Bug              |           |           |           |           |
| Enjoyed Most             |           |           |           |           |
| Conflicts with Teammates |           |           |           |           |
- **STARR METHOD:** Situation, Task, Action, Result, Reflection
	- Think about what each story says about you
- Be specific, not arrogant
- Limit details
	- Ex: “By examining the most common user behavior and applying the Rabin-Karp algorithm, I designed a new algorithm to reduce search from O(n) to O(log n) in 90% of cases. I can go into more details if you’d like”
- It ain't over til the interviewer says it's over
**The Technical Interview Algorithm**
1. Ask clarifying questions
	1. Ex: Design an algorithm to sort a list?
		1. What sort of list?
		2. What does the list hold? 
		3. How many values in the list?
2. Design test cases
3. Design an algorithm
4. Write pseudocode (make sure this is explicitly stated)
5. Write code
6. Test code
#### Questions for Interviewers
**Genuine Questions:** (questions you actually want answered)
1. How much of your day do you spend coding?
2. How many meetings do you have every week?
3. What's the distribution of testers: devs: product managers? How do they interact? How does project planning happen?

**Insightful Questions:** (show that you know what you're talking about)

4. When using technology X, how did you handle problem Y?
5. Why did you choose to use this?

**Passion Questions:** (show that you care about technology)

6. I'm very interested in scalability. Did you come in with a background in this, or was it easy to learn on the job?
7. Could you tell me a bit more about technology X? I'm personally not too familiar

#### Pre-Interview: Technical Prep
- Try to solve the problem on your own
	- Think about time and space efficiency
- Practice solving algorithms on paper (no IDEs or computers!)
- Type this solution as is into a computer

##### Must-Know Concepts
| Data Structures    | Algorithms           | Concepts                 |
| ------------------ | -------------------- | ------------------------ |
| Linked Lists       | Breadth First Search | Bit Manipulation         |
| Binary Trees       | Depth First Search   | Singleton Design Pattern |
| Tries              | Binary Search        | Factory Design Pattern   |
| Stacks             | Merge Sort           | Memory (Stack vs Heap)   |
| Queues             | Quick Sort           | Recursion                |
| Vectors/ArrayLists | Tree Insert/Find/etc | Big-O Time               |
| Hash Tables        |                      |                          |
Know How To:
- Implement/use
- Time/space complexity

#### Algorithmic Approaches
1. Examplify
	- Write out specific examples of the problem, and see if you can figure out a general rule
	- Ex: Given a time, calculate the angle between the minute and hour hands
		- Start with an example (say, 3:27P)
		- We can develop a rule with the examples
			- Minute angle: 360 * minutes / 60
			- Hour angle: 360 * (hour % 12) / 12 + 360 * (minutes / 60) * (1/12)
			- Angle between hour and minute (hour angle - minute angle) % 360
		- This reduces down to 30 * hours - 55 * minutes
2. Pattern Matching
	- Ex: A sorted array has been rotated so that the elements might appear in the order 3, 4, 5, 6, 7, 1, 2. How would you find the minimum element?
		- Similar to:
			- Find the minimum element in array
			- Find a particular element in array (binary search)
		- Algorithm:
			- Brute force: iterate through all elements
				- problem? not efficient and doesn't utilize the fact that it's sorted (though rotated)
			- binary search:
				- the array is sorted, but rotated, so it must proceed in an increasing order, then reset and increase again
				- the minimum element is that reset point
				- if you compare the first and middle element, you can determine that the range is still increasing
				- therefore, reset point must be after the 6
				- we can use the principles of binary search to look for ranges where left > right
					- if left < right, range doesn't contain the reset
					- otherwise, it does
3. Simplify & Generalize
	1. Simplify the problem, make algorithm for simplified problem, generalize the problem again
		- Ex: A ransom note can be formed by cutting words out of a magazine to form a new sentence. How would you figure out if a ransom note (string) can be formed from a given magazine (string):?
			- Simplify: imagine that you're cutting characters out to form a ransom note
			- create an array where each spot corresponds to the number of times each char appears
				- go through the magazine to see if we have all of those characters
			- Generalize: instead of creating an array, create a hash table
				- each word maps to the number of times the word appears
4. Base Case and Build
	- Solve the algorithm for a basic case (1 element, n = 1, etc)
	- Then solve for 2, 3......
	- Kind of like proof by induction