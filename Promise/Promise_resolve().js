// const p = Promise.resolve(12)
//   .then(result => console.log(result)) // 12
//   .then(res => Promise.reject(new Error('Dừng lại nhanh')))
//   .then(() => 'Cười thêm phát nữa là tym anh đứt phanh')
 // .catch(err => console.error(err)) // Error: Dừng lại nhanh 
 // console.log(p);
 let nhan = (a,b)=>{
 	if(typeof a!= 'number'||typeof b!= 'number')
 			return Promise.reject(new Error("This is not number")+' ');
	return  Promise.resolve(a*b);
};
var  c = nhan(3,'5').then((a)=>console.log(a),err=>console.log(err)+' ');
// console.log(c);
// setTimeout(()=>console.log(c),3000)

var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
// giải quyết 1 mảng 
//===================================================================
let nhan2 = (a,b)=>{
	return new Promise((resolve,reject)=>{
		if(typeof a!= 'number'||typeof b!= 'number')
			return reject(new Error("This is not number")+' ');
		resolve(a*b);
	});
}
nhan2(3,4).then(res=>console.log(res),err=>console.log(err));
