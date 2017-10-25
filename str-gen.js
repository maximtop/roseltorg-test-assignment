const make = (prefix) => {
  let counter = 0;
  return () => `${prefix}_${++counter}`;
}



var foo = make('A')
var bar = make('B')
console.log(foo()) // -> A_1
console.log(bar()) // -> B_1
console.log(foo()) // -> A_2
console.log(foo()) // -> A_3
console.log(bar()) // -> B_2

export default make;
