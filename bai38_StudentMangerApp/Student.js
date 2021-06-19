var fs = require('fs');
var kb= require('readLine-sync');
var std = require('./Students')
var students = [];
function showAllStudents(name){
	var data = fs.readFileSync("./"+name+".json",{encoding: "utf8"});
	students =JSON.parse(data);
	console.log(students);
}
function writeFile(students,nameFile){
	fs.writeFileSync("./"+nameFile+".json",JSON.stringify(students));
}
function createStudent(nameFile) {
	var number  = kb.question("Please Enter Number ");
	for(var i = 0;i<number;i++){
		console.log("Enter students["+i+"]" );
		student = new std();
		student.name = kb.question("Please Enter name ");
		student.age = parseInt(kb.question("Please Enter age "));
		student.isAlive = Boolean((Number(kb.question("Please Enter isAlive 1:/true ===== <>:/false "))));
		students.push(student);
	}
	writeFile(students,nameFile);
}
function sortAcording(){
	return students.sort((x,y)=>x.age - y.age);
}
function maxAge(){
	var max = 0;
	for(var s of students){
		if(max<s.age)
			max = s.age;
	}
	return max ;
}
function menuFunction(){
	var number = kb.question("1./Sort Acording === 2/ Max Age  === 3:/Return ===<> Exit " )
	switch(number){
		case "1":
			console.log(sortAcording());
			break;
		case "2":
			console.log(maxAge());
			break;
		case "3": main();
		default : process.exit(10);
	}
}
function main(){
	var number = kb.question("1/Open File  === 2/Create File ==== <>/Exit ");
	switch(number){
		case "1" :
			var input = kb.question("Please Enter name  File: ");
			showAllStudents(input);
			break;
		case "2" :
			var input = kb.question("Please Enter name File : ");
			createStudent(input);
			break;
		default : process.exit(10);
	}
	menuFunction();
}
main();