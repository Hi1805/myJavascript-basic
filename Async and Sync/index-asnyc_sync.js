function truoc(){
	setTimeout(function(){
		console.log("task1")
	},2000);
}
function sau(){
	setTimeout(function(){
		console.log("task2");
	},2000);
}
function task3(){
	setTimeout(function(){
		console.log("task3");
	},2000);
}
function chay(callback1, cacllback2,cacllback3){
	setTimeout(function(){
		callback1();
		cacllback2();
		cacllback3();
	},3000);
}
console.log("task4");
//ket qua : task 4 -taks1  - task2 - task3
/*NOTE : SETTIMEOUT LA ham bat dong bo, thu chay cua javascript la chay ham dong bo , truoc bat dong bo
==> Neu tat ca la ham bat dong bo , thi uu tien cai nao co giay nho nhat chay, nếu dây bằng nhau thì chạy 
như đồng bộ .
--> Javascript là đông bộ nhưng có xử lý bất đồng bộ
======> Bất Động Bộ(async) là  trong khi làm việc gì đó, thì we chúng ta làm việc khác , nếu việc thứ 2 kết thúc trước thì
nó thể cho ra kết quả ra kết quả trước thứ nhất , giống như task3 chạy trước
===> hàm bất động bộ sẽ có một tham số làm hàm callback, callback sẽ chứa đụng kết quả
*/

// console.time('tru');
// function tru(a,b){
//  	return a-b;
//  }
// //console.timeEnd('tru');// label phai giong time
// console.time();
// console.timeLog();
// console.timeEnd();
