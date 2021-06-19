// console.time('time');
// setTimeout(()=>{
// 	console.time('time2');
// 	console.log('Da xong coffe');
// 	console.timeEnd('time2');
// },5000);
// console.time('thay ao quan');
// console.log("thay ao quan");
// console.timeEnd('thay ao quan');
// console.time('xep ra giuong');
// console.log("Xep ra giuong");
// console.timeEnd('xep ra giuong');
// console.timeEnd('time');
function vidu1(){
	console.log(1);
}
 
function vidu2(){
  vidu1();
  console.log(2);
}
 
function vidu3(){
  vidu2();
  console.log(3);
  console.log("HELLO");
}
 
vidu3();// ta thấy khi gọi hàm vidu3 >vidu2>vidu1 
// nhung khi thuc hien chuc nang no se thuc hien nguoc lai  vidu1 , vidu2,vidu3 
// vay trong khi cho hello xuat hien thi da thuc  1,2
function run(){
	setTimeout(() => {
		console.log("run");
	}, 3000);
}
console.log("Start : ");
run();
console.log("End");


