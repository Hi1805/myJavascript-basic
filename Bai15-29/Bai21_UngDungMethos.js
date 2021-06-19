var listProducts = [
 {id: 1, categoryId: 1, name: 'Tivi'},
 {id: 2, categoryId: 1, name: 'Tủ lạnh'},
 {id: 3, categoryId: 3, name: 'Ghế sofa'},
 {id: 4, categoryId: 1, name: 'Máy giặt'},
 {id: 5, categoryId: 2, name: 'Chén bát'},
 {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
 {id: 7, categoryId: 3, name: 'Cửa kính'},
 {id: 8, categoryId: 1, name: 'Điều hoà'},
 {id: 9, categoryId: 3, name: 'Bàn tròn'},
 {id: 10, categoryId: 2, name: 'Lò vi sóng'},
]

function filterProductsByCategoryId(products, categoryId) {
  // your code here! 
  return products.filter(x=>x.categoryId===categoryId);
}
-----
/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

var array = [1,1,1,2,3,5,1];
function removeDuplicate(array) {
    return array.filter(function(item, index){
      if(array.indexOf(item) === index)
        return true;
})}
console.log(removeDuplicate(array));
console.log(array.indexOf(2));
======reduce phần 2
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

-
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce((newObject, key) => {
   if (newObject[key]) 
      key = newObject[key]++;
   else newObject[key] = 1;
   return newObject
 },{});
}

======sort
// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  // Write code here...
 return arr.sort((a,b)=>a-b);
}
------
//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
 
  // Write code here...
  return arr.sort((a,b)=>b-a);
}
------------
// Sort an array from shortest string to longest

function lengthSort(arr) {
  // Write code here...
  return arr.sort((a,b)=>{ 
     return a.length-b.length;
  });
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length
-----------
// Sort an array alphabetically

function alphabetical(arr) {
  // Write code here...
  return arr.sort((a,b)=>{ 
      for (var i=0;;i++)
      {
          if(!a.charCodeAt(i).isNaN)
          {
              if(!b.charCodeAt(i).isNaN)
              {
                  if(a.charCodeAt(i)-b.charCodeAt(i)==0)
                    continue;
                  return a.charCodeAt(i)-b.charCodeAt(i);
              }
              else break;
          }
          else break;
      }
  });
}
//alphabetical(["cat", "dog", "bird", "fish", "buffalo", "rabbit", "mouse", "turtle"])
//
//[ 'bird', 'buffalo', 'cat', 'dog', 'fish', 'mouse', 'rabbit', 'turtle' ]
-------------
// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  // Write code here...
  return arr.sort((a,b)=>{ 
     return a.age-b.age; 
  });
}
//byAge(arr)
//
//[{ name: 'Misunderstood Observer', age: 2 }, { name: 'Quiet Samurai', age: 22 }, 
//{ name: 'Unlucky Swami', age: 77 }, { name: 'Arrogant Ambassador', age: 100 }]
-------------
/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  var kq=students.sort((a,b)=>{ 
     return b.score-a.score; 
  }).slice(0,3);
  return kq.reduce((a,b)=>{
      return a.concat(b.name);
  },[]);
}
//getTopStudents(students) //["C", "A", "E"]