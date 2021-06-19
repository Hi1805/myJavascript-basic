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
// co(function*(){
// 	var data1 = yield readFilePromise("./data1.txt");
// 	var data2= yield readFilePromise("./data2.txt");
// 	console.log(data1,data2);
// });

// co(function*(){
// 	var data1 = yield readFilePromise("./data1.txt");
// 	var data2= yield readFilePromise("./data2.txt");
// 	return [data1,data2];
// })//tra ve mot mang Promise
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// ngan gon hon:

co(function*(){
	array = yield [
	readFilePromise("./data1.txt"),
	readFilePromise("./data2.txt")
	];
	return array;
})//tra ve mot mang Promise
.then(res=>console.log(res))
.catch(err=>console.log(err));
//// ==> ngan gon hon nua
var readFiles =  co.wrap(function*(files){
	var values = yield files.map((file)=>{
		return readFilePromise(file);
	});
	return values;
})
function readFiles(files){
	return yield files.a
}

readFiles(["./data1.txt","./data2.txt"])
.then((values)=>console.log(values));
