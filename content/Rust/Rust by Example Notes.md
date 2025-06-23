---
publish: "true"
---
##### Hello World:
```
fn main() {

println!("Hello World!"); // outputs Hello World!

}
```

- println!() is a macro that prints the passed parameter with a newline
- format! is a macro that writes formatted text to a string
- {} is a positional parameter which can be used in formatted strings
Ex: 
```
fn main() {

let people = "Rustaceans";
println!("Hello {people}!");       // outputs Hello Rustaceans!

}
```

```
let logical: bool = true;
```
In the above code, the:
- **let** keyword binds a value to a variable
- **logical** is the variable name
- **bool** is the type of the variable
- **true** is the value of the variable

##### Type Inference in Rust
- Rust infers the most specific type for your variable depending on its value
- Ex:
```
let x = 42;       // Rust infers: x: i32
let name = "Joe"; // Rust infers: name: &str
let pi = 3.14;     // Rust infers: pi: f64
```
- Types flow from right to left
- If Rust can't figure out the type (with more abstract/complex data types), you need to annotate
	- This can occur with empty datasets or ambiguous outputs