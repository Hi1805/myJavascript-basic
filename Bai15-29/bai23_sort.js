var arr = [9,4,5,6,7];
var arr2 = [1,2,0,1,5];
var i =0;
var b = arr.sort(function(a,b){
	console.log(a);
	console.log(b);
	console.log("-----");
	return 0;
})
//console.log(arr);
// i =0
// a = a[i+1]=4, b= a[i]=9
//vi a-b<0 , i =1 ,swap(a[i],a[i+1] b = a=4;a=[i+1]==5;
// vi a - b>0 suy a  = 5, b = a[0]=9, 
// vi a - b <0 i =2 suy ra b=9,a=[i+1]=6
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
     return b.score-a.score; // sap xep giam dan.
  }).slice(0,3);// lay tu vi tri khogn den vi tri 3
  return kq.reduce((a,b)=>{
      return a.concat(b.name);
  },[]);
}
