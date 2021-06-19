
let cong = (a,b)=>{
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			if( typeof a != 'number'|| typeof b !='number')
			return reject(new Error("this is not number cong ")+' ');
		return resolve(a+b);
	},0)
		
	})
}
let nhan = (a,b)=>{
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			if( typeof a != 'number'|| typeof b !='number')
			return reject(new Error("this is not number nhan ")+' ');
		return resolve(a*b);
	},0)
	})
} 
// Promise.all([nhan(3,4),cong(3,4)])// PROMISE1
// .then(result=>console.log(result))
// .catch(err=>console.log(err) + ' ');
// [12,7]
// //=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Promise.all([nhan(3,'4'),cong(3,'4')])//PROMISE2
// .then(result=>console.log(result))
// .catch(err=>console.log(err) + ' ');
// //=> this is not number cong 
// //NOTE : Cai nao chay truoc thi lay loi cai do

//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Promise.all([nhan(3,'4'),cong(3,4)])//PROMISE3
// .then(result=>console.log(result))
// .catch(err=>console.log(err) + ' ');
// //In ra loi cua ham cong

// Promise.all([nhan(3,'4'),cong(3,'4')])//PROMISE2
// .then(result=>console.log(result))
// .catch(err=>console.log(err) + ' ');
// //NOTE : THU TU CHAY LA PROMISE2,PROMISE3,PROMISE1(THEO GIAY 3,3,7);


Promise.race([nhan(3,4),cong(3,4)])
.then(result=>console.log(result))
.catch(err=>console.log(err) + ' ');
/// ket qua : 7
// vi cong() chay truoc 
//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Promise.race([nhan(3,'3'),cong(3,'3')])
.then(result=>console.log(result))
.catch(err=>console.log(err)+ ' ');
// tra ve this is not number cong , cong chay truoc 
//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Promise.race([nhan(3,3),cong(3,'3')])
.then(result=>console.log(result))
.catch(err=>console.log(err)+ ' ');
// tra ve this is not number cong
//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Promise.race([nhan(3,'3'),cong(3,3)])
.then(result=>console.log(result))
.catch(err=>console.log(err)+ ' ');
// ket qua la 6

// //NOTE : ham race thi no tra ve promise cua ham nao chay truoc

