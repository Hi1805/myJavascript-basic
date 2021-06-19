

// // // function cong(a,b){
// // // 	return a + b;
// // // }
// // // function tru(a,b){
// // // 	return a - b;
// // // }
// // // function nhan(a,b){
// // // 	return a * b;
// // // }
// // // function chia(a,b){
// // // 	return a / b ;
// // // }

// // // function maytinh(a,b,callback){
// // // 	return new Promise((resolve,reject)=>{
// // // 		if(typeof a !='number' || typeof b!=='number')
// // // 			return resject("this is not number");
// // // 		return resolve(callback(a,b));
// // // 	})
	
// // // }
// // // var a = maytinh(100, 20, function(a,b){
// // // 	return maytinh(a+b,10,function(a,b){
// // // 		return maytinh(a*b,5,function(a,b){
// // // 			return a/b;
// // // 		})
// // // 	})
// // // })
// // // function reverse(str) {
// // //   for(var i =str.length-1 ;i>0;i--)
// // //         console.log(str[i]);
// // // }
// // // reverse('thanhuy');

// // /*
// // Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
// // của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

// // Input: 2 chuỗi String
// // Output: True hoặc False

// // ví dụ:

// // Input: abc cba
// // Output: True

// // Input: abx abb
// // Output: False
// // */

// // function rearrangeChar(str1, str2) {
// //     let data1 = str.split('');
// // 	let data2 = str.split('');
// // 	for(var i = 0;i<data2.length;i++)
// // 		if(data1.indexOf(data2[0])===-1)
// // 			return false;
// // 	return true;
// // }
// // var x = [1,2,3,5,6];
// // console.log(x.reduce((a,b)=>b));
// var  a = [1,5,6,7];
// function findMaxIsPrime( number) {
// 	if(number < 0) console.log("phai la so nguyen")
// 	else
// 	{
// 		var rs = 90, n = 7;
// 		if(number == 1) console.log(n);
// 		else 
// 		{
// 			for (var i = 1; i < number; i++ ) {
// 				n = n + rs;
// 				rs = rs*10;
// 			}
// 			console.log(n);
// 		}
		
// 	}
// }
// isPrime = ( number )=>{
// 	if(number < 2 )
// 		return false;
// 	for (var i = 2; i < Math.sqrt(number); i++) {
// 		if(number % i == 0)
// 			return false;
// 	}
// 	return true;
// }
// // numberMaxArrays = ( k, array )=>{
// // 	var b = {};
// // 	let vt = 0,j = 0;
// // 	while(k > 0 ){
// // 		var max = array[0];
// // 		for (var i =1 ; i < array.length ; i++ ) {
// // 			if(max <  array[i]&&  !Object.keys(b).find(x=> x == i ) ){
// // 				max = array[i];
// // 				vt = i;
// // 			}
// // 		}
// // 		b[vt] = max;
// // 		k--;
// // }
	
// // 	console.log(b);
// // }
// // numberMaxArrays(3,a);

// // gia lap ham map 

// Array.prototype.filter2 = function(callback){
// 	var newArr = [];
// 	var index2 = 0;
// 	for (var i = 0; i < this.length; i++) {
// 		if(callback(this[i],i,this)){
// 			newArr[index2] = this[i];
// 			index2++;
// 		}
// 	}
// 	return newArr;
// };
// Array.prototype.map2 = function(callback) {
// 	var newArr = [];
// 	var index2  = 0;
// 	for (var i = 0; i < this.length; i++) {
// 			newArr[index2] = callback(this[i],i,this);
// 			index2++;
// 	}
// 	return newArr;
// };

// console.log(a.map2((x,index )=>{
// 	console.log(index)
// }))


// Array.prototype.reduce2 = function ( callback, t  ){

// 	var res = this[0];
// 	for (var i = 1; i < this.length; i++) {
// 		res = callback(res,this[i]);
// 	}
// 	return res;
// }

// console.log(a.reduce((x,y)=>{

// 	console.log("x = ",x);
// 	console.log("y = ",y);
// 	return {};
// },{}));
// var name = {
// 	0 : 1,
// 	1 : 2
// }

var  a = 500, b = 200, c = 100,a1 = 50,b1 = 20,c1 = 10 , a2 = 5 ,b2 = 2,c3 = 1;
if()
