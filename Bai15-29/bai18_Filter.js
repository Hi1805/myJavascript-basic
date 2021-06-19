// var arr = [0,0,0,0,5,6];
// var a = arr.filter(function(x){// kiem tra lan luot cac so trong mang ! 
// 		return x;
// })
// console.log(a);
// var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
// Tham số
// callback
// Đây là hàm thử, dùng để kiểm tra từng phần tử của mảng.  Trả về true để giữ lại phần tử, hoặc false để loại nó ra. Nó được gọi với ba tham số:
// element
// Phần tử đang được xử lý trong mảng.
// indexOptional
// Chỉ mục (index) của phần tử đang được xử lý.
// arrayOptional
// Mảng nguồn mà hàm filter đang xử lý.
// thisArg Optional
// Không bắt buộc. Giá trị của this bên trong hàm callback.
//var b = arr.filter((item,index) )
var arr2 =[1,2,3,5,6];
Array.prototype.filter2 = function(callback) {
	var newArray = [];
	for(var i =0;i<this.length;i++)
		if(callback(this[i],i,this))
			newArray.push(this[i]);
	return newArray;
}
var b = arr2.filter2((x,y,a)=>{
	return x>1;
});
console.log(b);