var a; // declaring
a = 2; // assigning value

var a = 4; // var supports re-assignment

// "let" variables may be re-assigned
// but they can't be re-declared
let b = true;
b = false;

// "const" variables can't be re-declared nor re-assigned
// but if it contains a composite value like an object
// or an array, we may mutate it
const c = {};
c.prop = 'nice';

// THE VALUES OF EXPRESSIONS
// an expression is a thing which might be 
// evaluated down to a value


console.log('hello');