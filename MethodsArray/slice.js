var array = [1,2,3,4,5,6,7];
var x = array.slice();
console.log(x);
let y = array.slice(2);
console.log(y);//[ 3, 4, 5, 6, 7 ]
let z = array.slice(0,5);//[ 1, 2, 3, 4, 5 ]
console.log(z);