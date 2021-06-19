var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
function totalVoters(arr){
  return  arr.reduce(function(currentVoted,voter){
        
           return currentVoted+Number(voter.voted);

    },0);
}

 console.log(totalVoters(voters))
 console.log(Number(voters[0].voted));

var wishlist = [{
    title: "Tesla Model S",
    price: 90000
  },
  {
    title: "4 carat diamond ring",
    price: 45000
  },
  {
    title: "Fancy hacky Sack",
    price: 5
  },
  {
    title: "Gold fidgit spinner",
    price: 2000
  },
  {
    title: "A second Tesla Model S",
    price: 90000
  }
];

function arrayTitle(wishlist) {
  arr = wishlist.reduce(function(x, y) {
        if(wishlist[wishlist.length-1] ===y){
          return x+y.title;
        }
         return x + y.title + ',';
}, '');
  var a = arr.split(",");
return a;
}
console.log(arrayTitle(wishlist));


// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };
0
// function getObjectKey(obj, keys) {
//   if (typeof keys === 'undefined')
//     var arr = [];
//   else
//     arr = keys;
//   for (var k in obj) {
//     arr.push(k);
//     if (typeof obj[k] === 'object')
//       getObjectKey(obj[k], arr);
//   }
//   return arr;
// }

Array.prototype.reduce2= function(callback) {
  var result = 0;
    for(var i = 0;i<this.length;i++)
      result = callback(this[i],this[i+1]);
};
function callback(x,y){
  return x+y;
}
