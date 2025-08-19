---
publish: "true"
---
### Ownership
- Every value in Rust has a single **owner**
- When the owner leaves project scope, the value is freed (like the malloc -> free properties in C)
- Ownership can be **moved** (by transferring to another variable) or **borrowed** (temporarily accessed by a reference)
##### Example:
```rust
let s = String::from("hello");
let t = s; // ownership moved from s to t
// s can’t be used anymore
```
### Borrowing
- Instead of transferring **ownership**, you can **borrow** a value
	- **Immutable borrow (`&T`)** → You can read the value but not modify it.
	- **Mutable borrow (`&mut T`)** → You can modify the value, but only if no one else is borrowing it.
- Rules:
	1. A value can have any number of immutable borrows or exactly one mutable borrow, but neither simultaneously
	2. A borrow can't outlive its value

##### Example:
```rust
let mut x = 5;

// Multiple immutable borrows are fine
let r1 = &x;
let r2 = &x;
println!("{}, {}", r1, r2);

// Only one mutable borrow allowed
let r3 = &mut x;
let r4 = &mut x; // this would cause an error bc of two mutable borrows simultaneously

```

### Lifetimes
- Every reference has a **lifetime** (the scope of which the reference is valid)
- The borrow checker ensures lifetimes line up so references can't outlive their pointed data
##### Example:
```rust
let r;
{
    let x = 5;
    r = &x; 
}
println!("{}", r);
// x only exists inside the block and r exists outside, so r cannot be assigned a pointer to the value of x
```