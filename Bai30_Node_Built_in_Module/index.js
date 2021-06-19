//https://nodejs.org/api/fs.html
var fs = require('fs');
//console.log(fs);// la 1 module
// var text = fs.readFileSync('./text.txt',{encoding:'utf8'});
// console.log(text);

//fs.writeFileSync('./text2',"Huy dep trai");

var text2;
fs.readFile('./text.txt','utf8',function(err,data){
	if(err)
		console.log("File not Found");
	else{
		 console.log(data);
		 text2 = data;
	}
});
text2 = "huy";
 //console.log(text2);
