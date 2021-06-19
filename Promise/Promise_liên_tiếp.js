// 3*4*5;
let nhan = (a,b)=>{
	return new Promise((resolve , reject)=>{
		if( typeof a != 'number'|| typeof b !='number')
			return reject(new Error("this is not number")+' ');
		return resolve(a*b);
	})
} 
// giả sử mình muốn nhân 3 số 
// nhan(3,4).then(res =>nhan(res,5),err => console.log(err + ' ')).then(result=>console.log(result),err=>console.log("Loi roi"+' '));
// // có nghĩa ở hàm res => nhan(res,5) trả về promise nên ta phải then tiếp
// nhan(3,'4').then(res =>nhan(res,5),err => console.log(err + ' ')).then(result=>console.log(result),err=>console.log("Loi "+' '));
// // ket qua se undefinded boi vi res  = undefinded , ham error nó sẽ chạy trong nhan(res,5);
// // ta thấy 2 hàm err lặp lại và kết quả nó vẫn làn undefinded thấy nó lặp lại , ta có thể viết lại bằng cách catch() bắt lỗi
// nhan(3,4).then(res=>nhan(res,5))
// .then(results =>console.log(results))
// .catch(err => console.log("loi roi"));
//<=============================================================>
// let  a =nhan(3,4);
// console.log(a);
// setTimeout(()=>console.log(a),2000);
// // , ==> PromiseValue = 12, khi chạy thì mặc định PromiseValue = undefined;
//=================================
// let  b =nhan('3',4);
// console.log(b);
// // ket qua se la promise{reject : error : this is not number}
//<================================>>
// let c = nhan(3,4).then(res =>console.log(res),err=>console.log(err + ' '));
// console.log(c);
// //Promise { <pending> } <có nghĩa đang xử lý > , promiseValue = undefined 
// //12 ==> console.log(res) 
// setTimeout(()=>console.log(c),2000);
// Promise{<pending>} , promiseValue  =undefinded 
// bởi vì hàm res trả về console.log
//>===================================<
//  let c = nhan(3,5).then(res =>"ket qua " + res,err=>console.log(err + ' '));
// 	console.log(c); 
// //Promise { <pending> } <có nghĩa đang xử lý > , promiseValue = undefined 
// // console.log(res) 
// setTimeout(()=>console.log(c),2000);
// tra ve prommise{ "ket qua la 15}
//========================================================
let c = nhan(3,'4').then(res =>"ket qua " + res,err=>(err + ' '));
	console.log(c); 
//Promise { <pending> } <có nghĩa đang xử lý > , promiseValue = undefined 
setTimeout(()=>console.log(c),2000);
// promiseValue = err;

