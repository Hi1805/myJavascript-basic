/* Arr.map()

--> Cu Phap :
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Trả về element mới cho new_array
}[, thisArg])

callback
Hàm để tạo ra phần tử cho mảng mới, nhận vào ba tham số:
 
currentValue
Giá trị của phần tử trong mảng đang được xử lý
indexOptional
Index của phần tử trong mảng đang được xử lý
arrayOptional
Mảng đang được gọi với map
thisArgOptional
Giá trị gán cho từ khóa this bên trong callback.
 */
 Array.prototype.map2 = function(callback) {
 	var  length = this.length;
 	var out = [];
 	for(var i = 0;i<length;i++){
 		out.push(callback(this[i],i,this));
 	}
 	return out;
 };
 var  a = [1,2,3,4];
 var b = a.map2((x)=>{
	return x*2;
});
 console.log(b);
// b=a.map(x=>x*2);// x la gia tri cua mag
// console.log(b);
// // hoac viet 1 ham
// c=a.map(function(x){
// 	return x*2;
// });
// console.log(c);
// // hoac la viet gian tiep
// function double(x){
// 	return x*2;
// }
// d = a.map(double);
// console.log(d);
