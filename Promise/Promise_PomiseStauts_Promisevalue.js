// ta có Promise{ [[Promisestatus]] : value , [[promiseValue]] : value}

let nhan = (a,b)=>{
	return new Promise((resolve , reject)=>{
		if( typeof a != 'number'|| typeof b !='number')
			return reject(new Error("this is not number")+' ');
		return resolve(a*b);
	})
} 
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
// let c = nhan(3,'4').then(res =>"ket qua " + res,err=>(err + ' '));
// 	console.log(c); 
// //Promise { <pending> } <có nghĩa đang xử lý > , promiseValue = undefined 
// setTimeout(()=>console.log(c),2000);
// promiseValue = err;
//======================================================
let c = nhan(3,5).then(res =>"ket qua " + res,err=>(err + ' ')).then((b)=>console.log("success"+b));
// thì kết quả sẽ chạy ra suceess 
//console.log(c);///Promise { <pending> }
setTimeout(()=>console.log(c),2000);
// b o day la ket qua + res
// promisevalue == undefined

