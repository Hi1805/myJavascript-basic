var fs = require('fs');
var song1 = fs.readFile("./song1.txt",'utf8',function(err,song1){
	if(err){
		//throw err;
		console.log(new Error("ban bi loi, doc file khong duoc"));
	}
	else 
		console.log("bai hat 1"+song1);
	console.log("===============");
});
//console.log(song1);
var song2 = fs.readFile("./song2.txt",'utf8',function(err,song1){
	if(err){
		//throw err;
		console.log(new Error("ban bi loi, doc file khong duoc"));
	}
	else 
		console.log("bai hat 2"+song1);
	console.log("===============");
});
var song3 = fs.readFile("./song3.txt",'utf8',function(err,song1){
	if(err){
		//throw err;
		console.log(new Error("ban bi loi, doc file khong duoc"));
	}
	else 
		console.log("bai hat 3"+song1);
	console.log("===============");
});
// hàm fs.readFile() === > bất động bộ
// nếu Viết như trên thì viết quá dài ta có thể viết lại như sau 

//=====================
var song1 = fs.readFile("./song1.txt",'utf8',function(err,song1){
	console.log("bai hat 1 "+song1);
	fs.readFile("./song4.txt",'utf8',function(err,song2){
		console.log("bai hat 2 "+song2);
		fs.readFile("./song3.txt",'utf8',function(err,song3){
			console.log("bai hat 3 "+song3);
		});
	});
});// Callback hell 
// ===>// Tha thấy nếu chúng ta viết cỡ 1000 bài hát thì mỗi lần lỗi chúng ta khó để sửa lỗi chúng , dẫn đến khó bảo trì .. 
// <======> Sinh ra Promise;
// Promise là 1 đối tượng bao hàm một hàm chứa các đoạn code bất đồng bộ, hàm này chứa 2 tham số là 2 hàm callback 
// để giải quyết sau khi mã đồng bộ thực thành công(reslove) hay thất bại(reject);
// chính là 2 phương thức thành công hay thất bại
//

// let y =add("3",4).then1(x=>add(x,4)).then1(x=>'ket qua '+ x).catch1(err=>'loi roi'+err);
// console.log(y);	
// function Promise1(callback){
// 	this.promiseStatus ;
// 	this.promiseValue;
// 	callback(this.resolve.bind(this),this.reject.bind(this));
// }
// Promise1.prototype.resolve = function(value){
// 	this.promiseValue = value;
// 	this.promiseStatus ="resolve";
// 	return this;
// }
// Promise1.prototype.reject = function(value){
// 	this.promiseValue = value;
// 	this.promiseStatus = "reject";
// 	return this;
// }
// Promise1.prototype.then = function(callback){
// 	if(this.promiseStatus == "resolve"){
// 		var check = callback.bind(this)(this.promiseValue);
// 			if(typeof check == 'object'){
// 				this.promiseValue =  check.promiseValue;
// 				this.promiseStatus = check.promiseStatus;
// 			}
// 			else{
// 				this.promiseValue =check;
// 			}
// 	}
// 	return this;
// }
// Promise1.prototype.catch = function(callback){
// 	if(this.promiseStatus=="reject")
// 		this.promiseStatus = callback.bind(this)(this.promiseValue);
// 	return this;
// }

// var add=function(a,b){
// 	 	return new Promise1(function(res,rej){
// 				if(typeof a!='number' || typeof b!='number')
// 					return rej('khong phai so');
// 				res(a+b);

// 	 	})
	 
// }
// let x = add(3,4).then(x=>add(x,3)).then(x=>3+x).then(x=>console.log(x));

// var add2  =function(a,b){
// 	if(typeof a!='number' || typeof b!='number')
// 		return Promise.reject('khong phai so');
// 	return Promise.s