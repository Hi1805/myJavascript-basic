class Promise1{
	constructor(callback){
		this.promiseStatus = "Pending" ;
		this.promiseValue  ;
		callback(this.resolve1.bind(this),this.reject1.bind(this));
	}
	resolve1(value){
		this.promiseStatus="resolved";
		this.promiseValue=value;
		return this;
	}	
	reject1(value){
		this.promiseStatus="reject";
		this.promiseValue = value;
		return this;
	}
	then1(callback){
		if(this.promiseStatus=="resolved") 
			return callback.bind(this)(this.promiseValue);

	}
	catch1(callback){
		if(this.promiseStatus=="reject") 
			return callback.bind(this)(this.promiseValue);
	
	}
}
 var add=function(a,b){
 	var pr = new Promise1(function(res,rej){
			if(typeof a!='number' || typeof b!='number')
				return rej("khong phai so");
			return res(a+b);
 	})
 return pr;

}
var minus=function(a,b){
 	return pr = new Promise1(function(res,rej){
 		if(typeof a!='number' || typeof b!='number')
 			return rej("khong phai so");
 		res(a+b);
 	});
 }
var add2=function(a,b){
	var pr = new Promise(function(res,rej){
		if(typeof a!='number' || typeof b!='number')
			return rej("khong phai so");
		return res(a+b);
	});
	return pr;

}
//add2 la cua new PRomise
console.log("Cua Promise binh thuong ")
add2(3,4).then(x=>add2(x,3)).then(x=>console.log(x)).catch(err=>err);
// console.log(x);
setTimeout(()=>{
	console.log("Minh Tao");
},3);
//cai cua co
add(3,4).then1(x=>add(x,3)
.then1(x=>add(3,4)).then1(x=>console.log(x))).catch1(err=>console.log(err));
