/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */
 array  = [1,2,3,4,50];
function findDivisibleNum(array, x) {
  return array.find(function(y) {
    if (y % x === 0)
      return y;
  })
}
// function find(key,value) {
//   return Contacts.reduce((array,obj)=>{
//   		 if(obj[key]===value)
//   		 	array.push(obj);
//   		 else
//   		 	return "key not exist";
//   		return array;

// },[])
// }
Array.prototype.find2 = function(callback) {
	for(var i = 0;i<this.length;i++)
		if(callback(this[i],i,this))
			return this[i];
};
console.log(array.find2((x)=>{
	return x>2;
}))
console.log(array.find((x)=>{
	return x>2;
}))