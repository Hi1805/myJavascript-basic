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
	then1(callback){ x=>console.log(x);
		if(this.promiseStatus=="resolved") {
			var check = callback.bind(this)(this.promiseValue);
			this.promiseValue = typeof check =='object' ?  check.promiseValue : check;
			}
		return this;
	}
	catch1(callback){
		if(this.promiseStatus=="reject") 
			this.promiseValue =  callback.bind(this)(this.promiseValue);
		return this;
	}
}
 var add=function(a,b){
 	var pr = new Promise1(function(res,rej){
			if(typeof a!='number' || typeof b!='number')
				return rej('khong phai so');
				res(a+b);
 	})
 return pr;

let add2 = function(a,b){
	new Promise(function(res,rej){
			if(typeof a!='number' || typeof b!='number')
				return rej('khong phai so');
		res(a+b);
 	})
}

let x = add2(3,4).then(x=>x);
console.log(x);