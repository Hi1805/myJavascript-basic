var co = require('co');
var fs = require('fs');
function readFilePromise(name){
	return new Promise((resolve,reject)=>{
		return fs.readFile(name,'utf8',(err,data)=>{
			if(err)
				return reject(new Error("File not Found"));
			return resolve(data)
		});
	});
}
async function run(){
  var  data1 = await readFilePromise('./data1.txt');
  var  data2 = await readFilePromise('./data2.txt');
  console.log(data1);
  return [data1,data2];
}
//run().then(x=>console.log(x));
//console.log(run());
async function readFiles(files){// tra ve 1 object Promise
	var newArray = [];
	for (var i  of files) {
		newArray.push(await readFilePromise(i));
	}
	return newArray;
}
async function readFile2(files){////tra ve 1 mang promise
	var newArray = [];
	var a = await files.map((x)=>{
		var x =  readFilePromise(x);
		return  x;
	}) // a sẽ trả về 1 mảng chứa các đối tượng promise
	// mình cần ở đây trả mảng chứa 2 chuôi
	console.log(typeof a);
	return a;
}//Async/await là khái niệm được xây dựng ở tầng trên promise. Do đó nó không thể sử dụng với callback thuần.


readFile2(['./data1.txt','./data2.txt']);