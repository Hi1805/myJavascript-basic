// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str){
    return str.split('').reverse().join('');
}
//reverse(): ham dao nguoc mang
//console.log(reverse('xyz'))

//===Bai2
// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
// function capitalize(str) {
//        return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
// }
// console.log(capitalize('thanh huy'));
//---------------------bài 3
// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
  // viết code ở đây.
  var strArr=filename.split(".");
  return strArr[strArr.length-1];
}
//----------bài 4
// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
    return ((a>b)?a : b ) >c ? ((a>b)?a : b ): c;
}
//console.log(findMax(-5,5,6));
///==================
/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
var arr = [1, -10, 5, 18, -9, 5];
function findMaxDiff(arr) {
    if(arr.length<1)
        return 0;
    var max = Math.abs(arr[0])+Math.abs(arr[1])
    for(var i = 0;i<arr.length-1;i++){
        if(max<Math.abs(arr[i])+Math.abs(arr[i+1]))
          max = Math.abs(arr[i]) + Math.abs(arr[i+1]);
    }
    return max;
    }
//console.log(findMaxDiff(arr)+'  k');
//=========================================
//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================
// var str = 'thanh pho dep trong mo haha';
// function equal_pt(str){
//     let count ={};
//     let count2 = 0;
//     let data = str.split('');
//    for(var i of data){
//     if(i==='p'||i==='t'){
//        count[i]=count[i]+1||1;
//     }
//    }
//   return count.p ===count.t ;
//  }
//  console.log(equal_pt(str));
// console.log(arr.slice(3));
// //==================
/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
arr = [ 1,2,3,4,1,2,2,1];
function findMostFrequent(arr) {
  var array= [];
  // let max = Number.MIN_VALUE;
  let a =arr.reduce((x,y)=>{
    x[y]= x[y]+1||1;
    return x;
  },[]);
  let max = Math.max(...a);
 for(var i = 0;i<a.length;i++){
   if(a[i]==max){
    array.push(i);
   }
 }
return array;
}
console.log(findMostFrequent(arr));
function findMostFrequent(arr) {
  var newArray= [],obj = {};
  let max = Number.MIN_VALUE;
  arr.forEach(element => {
    obj[element] = obj[element]+ 1 ||1;
    if(obj[element])
         max =  obj[element]>max ? obj[element]: max;
    });
  for(let key in obj){
    if(obj[key]==max)
        newArray.push(Number(key));
  }
  return newArray;
}
/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.
    var newArr = [];
    for(i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}