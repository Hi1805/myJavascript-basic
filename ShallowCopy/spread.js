const array = [1,2,3,4,5,6];
const array2 = [0,1,2];
function sumSimple(a,b){
    return a +b;
}
//console.log(sumSimple(...array));// no chi tinh duoc 2 so dau tien
function sum(...a){
    return a.reduce((x,y)=>x+y);
}
//console.log(sum(...array));// neu sum(array) ra mang ...array trai cac phan tu
//==============================================
// var array3 = [...array];
// console.log(array3);//[ 1, 2, 3, 4, 5, 6 ]
// array3.push('e');
// console.log(array3);
// console.log(array);
// array3 = array;
// array3.push('e');
// console.log(array3);
// console.log(array);// gia tri array de thay doi [
//    [ 1, 2, 3,   4,
//     5, 6, 'e'
//   ]

// tuong tu voi Object
const myDog={
    name :'Oggy',
    age : 100
}
var Dog2 = {
    ...myDog,
    isAlive:true
}
//console.log(Dog2);
//=========
var data ='D:/dsad/sadsa/dsa/dsadsa/dsa/anh.jpg'.split('.');
console.log(`${data[0]}`);
var x= 'truong thanh huy'.lastIndexOf('1');
console.log(x);
var library = {
  book: book,
  user: user,
  history: history
}
var book = [
  {
  id: 'LT01',
  name: 'Lập trình Javascript cơ bản',
  price: 12000
  },
  {
    id: 'LT02',
    name: 'Lập trình web cơ bản',
    price: 59000
  }
]

var user = {
  id: 'us01',
  name: 'Cường',
  books: book.id,
  borowday: '21/10/2018',
  returnday: '22/11/2018'
}
var history = {
  id: user.id,
  borowtime: user.borowday,
  returntime: user.returnday
}