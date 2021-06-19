var fruits = ['Apple', 'Banana'];
console.log(fruits.length);// so phan tu cua mang
fruits.forEach(function(item, index, array) { // Lap Qua 1 mang 
  console.log(item, index);
});
// Apple 0
// Banana 1
var newLength = fruits.push('Orange'); // them phan tu vao cuoi mang
// ["Apple", "Banana", "Orange"]-- log(fruits);

console.log(newLength);// so phan tu moi cua mang = 3
//
var first = fruits.shift(); // xoá bỏ Apple từ vị trí đầu
// ["Banana"];


var last = fruits.pop(); // xoá bỏ Orange (từ vị trí cuối)
// ["Apple", "Banana"];


var newLength = fruits.unshift('Strawberry') // thêm vào vị trí đầu
// ["Strawberry", "Banana"];

//tim chi muc cua 1 phan tu trong mang
fruits.push('Mango');// them 1 phan tu bao cuoi mang
// ["Strawberry", "Banana", "Mango"]
var pos = fruits.indexOf('Banana');// pos = 1;
console.log(fruits);
var removedItem = fruits.splice(1/*vi tri xoa- Start */, 1/*so phan tu muon xoa - Deletecount*/); // đây là cách để xoá bỏ một phần tử                                       
// ["Strawberry", "Mango"]
console.log(fruits);
//Nếu deleteCount bị bỏ qua hoặc có giá trị lớn hơn hoặc bằng array.length - start (nếu giá trị lớn hơn số phần tử còn lại của mảng, 
//bắt đầu từ  start), 
//thì tất cả các phần tử từ vị trí start đến cuối mảng sẽ bị xóa bỏ.
// Chen phan tu vao vi tri bat ki
// vi du : 
//var removedItem = fruits.splice(0, 2);
//console.log(fruits);
// vi so phan tu cua mang phan 2 , 2-0 <2 nen tat ca tu vi tri 0 --2 se bi xoa nen ket qua la Rong


//array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) // cu phap

 var addItem = fruits.splice(2,0,'Watermelon');// them 1 phan tu vao vi tri bat ki
 console.log(fruits);
//[ 'Strawberry', 'Mango', 'Watermelon' ]

var shallowCopy = fruits.slice(); // đây là cách để tạo một bản sao