var myDog={
	name : "oggy",
	age : 2,
	isAlive : true
}
console.log(myDog);
var ex = JSON.stringify(myDog);// String
console.log(ex);
var ex2 = JSON.parse(ex);// chuyen String qua doi tuong
console.log(ex2);

var fs = require('fs');
var data =JSON.parse(fs.readFileSync("./Data.json",{encoding :'utf8'}));
members=[
  "toi sinh vien duy tan",
  "sinh nam 2001"
]
data.members= members;
fs.writeFileSync('./Data.json',JSON.stringify(data));