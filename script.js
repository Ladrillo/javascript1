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


// function declaration
function myFunc() {
  return 7;
}

// function invocation
myFunc();

// what is the value of `myFunc`  is function (object)
// what is the value of `myFunc()` whatever the function returns (7)

// FUNCTION DECLARATION
function anotherOne() {
  console.log('hello');
}
// 'anotherOne' value is a function
// 'anotherOne()' value undefined

// FUNCTION EXPRESSION
const funnyFunc = function () {
  return true || false;
};

// `funnyFunc`    // function object
// `funnyFunc()`  // true

const sadFunc = () => {
  console.log('meh');
  console.log('foo');
  // we need a return keyword if we want to return!
};
// `sadFunc`   // function object
// `sadFunc()` // undefined

// no need for function keyword
// no need for curlies and a body
// no need to return keyword
const compact = () => 6;
// `compact`   // function object
// `compact()` // 6
const goo = () => { }
// `goo`    // function object
// `goo()`  // undefined
const meh = () => ({})
// `meh`    // function
// `meh()`  // empty object

// OBJECT
// unordered list of key-value pairs --> dictionary
var obj = {
  name: 'Luke',
  age: 22,
  "the space": 6,
};

var myPropName = 'the space';

// pulling the values of some keys, and shoving
// them inside of variables
var theName = obj.name; // dot notation
var theNameReally = obj["name"]; // silly!
var theSpace = obj['the space']; // not silly at all!
var theSpaceAnotherWay = obj[myPropName]; // same thing

// mini-state machines --> object
var car = {
  odometer: 0,
  drive: function () {
    // returns nothing
    // CAUSE A SIDE EFFECT
    // increase the odometer
    this.odometer += 50;
  }
};
// 100.000 cars

// ARRAYS
// much simpler than objects
var myArr = ['a', 'b'];
var first = myArr[0];
// much more complicated than objects MANY BUIT-IN METHODS
var arr = [];
arr[0] = 'somthing';
arr.push('else'); // PUSH MUTATES
var arrWithMoreStuff = arr.concat('yet'); // CONCAT DOES NOT

// HUGE ARRAY 
// SORTIN BY SOME CRITERIA
// ELIMININATE CERTAIN ELEMENTS
// ADD SOME ELEMENT
let array
let sortedArray // non destructive op on array
let filteredArray // non destructive op on sortedArray
let withExtra // non destructive op on filteredArray

// bad approach
