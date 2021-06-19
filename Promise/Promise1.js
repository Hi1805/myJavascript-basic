// cú pháp là new Promise(resolve,reject)
// resolve,reject được chạy ngay khi promise gọi  tới,
// tức là chạy nó còn được chạy trước cả hàm khởi tạo trả ra kết quả của Promise 
let add  =(a,b)=>{
	return new Promise((resolve, reject)=>{
		 setTimeout(()=>{
		if(typeof a != 'number'|| typeof b !='number' )
			return reject(new Error("this is not number"));
		resolve(a+b);
		//console.log(resolve("huy")); undefined
		 },1000);
		
	});
}
//add(3,6).then(msg=>console.log(msg),err =>console.log(err));
//setTimeout(()=>console.log(add(3,6)),2000);
//console.log(add(3,6).then(msg=>console.log(msg),err =>console.log(err)));
//add(3,6).then(msg=>msg,err =>err);
//in ra Promise {Pending}, and ket qua 9
// trong then(callback1, callback2);
// callback1 : tra ve resolve --> thanh cong
// callback2 : tra ve reject --> that bai
// ham add() tra ve mot doi tuong promise
//console.log(add(3,4));// Promise {Pending} //pending: Trạng thái chờ xử lý kết thúc.
// Trạng thái này chính là trạng thái ban đầu của Promise, nó thể hiện rằng thao tác xử lý của ta chưa kết thúc.
let fs = require('fs');
let read = (nameFile)=>{
	return new Promise((res, rej)=>{
		fs.readFile("./"+nameFile+".txt",'utf8',(err,data)=>{
			if(err) return rej(new Error("File not Found"));
			res(data);
		});
	});
}
//read("ex").then(data=>console.log(data),err=>console.log(err+''));
let nhan = (a,b)=>{
	return new Promise((resolve, reject)=>{
		if(typeof a != 'number'|| typeof b !='number' )
			return reject(new Error("this is not number"));
		resolve(a*b);
	});
}
