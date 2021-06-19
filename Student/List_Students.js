var student = require("./Student");
var kb = require('readLine-sync');
var date = require("./Date");
var address = require("./address");
var ListStudents = [];
var number;
function createListStudents() {
 	number = kb.question("Please Number of Student ");
	for(var i = 0;i<number;i++){
		console.log("Please Enter Student "+(i+1) );
		console.log("=========================");
		ListStudents[i] = new student();
		ListStudents[i].createStudent();
	}
}
function showALLStudents(){
	for(var i of ListStudents){
		console.log("==========================");
			i.showStudent();
	}
	}
function find(key,value){
	return ListStudents.filter(x=>{
			return  String(x[key]).toLowerCase()=== String(value).toLowerCase();
	});
}
function findListStudent(name){
	for(x of ListStudents){
		for(key in x){
			console.log(key);
		}
	}
}
createListStudents();
showALLStudents();

