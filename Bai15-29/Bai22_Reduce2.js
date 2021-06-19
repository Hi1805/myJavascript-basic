
Array.prototype.reduce2 = function(callback,z) {
 		var result = z||this[0];
 		 for(var i = 0;i<this.length;){
 			// if(result === z){
 		 // 		result = callback(result,this[i]);
 		 // 	}
 		 // 	else{
 		 // 		if(i+1===this.length)
 		 // 			break;
 		 // 		else{
 		 // 			result = callback(result,this[i+1]);
 		 // 			i++;
 		 // 		}
 		 // 		}
 		 result = 
 			}
 return result;
};
var sum = [5,1,2,3].reduce2((x,y)=> {
	console.log(y);
  return x + y;
},5);
console.log("================");
var sum2 = [5, 1, 2, 3].reduce((x,y)=> {
	console.log(y);
  return x + y;
},5);
console.log(sum);
console.log("qua roi");
console.log(sum2);


