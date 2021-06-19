var math = {
  add: function(a, b) {
    return a + b;
  },
  multiply:function(a,b){
  	return a*b;
  },
  sum : function(array){
  	return array.reduce((x,y)=>x+y);
  }
}
console.log(math.sum([1,2,3,4,5]));
module.exports = math;