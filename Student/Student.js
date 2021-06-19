var Date = require("./Date");
var Address = require("./address");
var kb = require('readLine-sync');
class Student{
	address = new Address();
	date = new Date();
	constructor(name,sex,phoneNumber,address,score,date){
		this.name = name;
		this.sex = sex;
		this.phoneNumber = phoneNumber;
		this.address= address;
		this.score = score;
		this.date= date;
	}
	createStudent(){
		this.name = kb.question("Please Enter name ");
		this.sex = kb.question("Please Enter sex ");
		this.phoneNumber = Number(kb.question("Please Enter PhoneNumber "));
		this.address.createAddress();
		this.score = Number(kb.question("Please Enter score "));
		this.date.createDate();
	}
	showStudent(){
		console.log("name "+this.name);
		console.log("sex  "+this.sex);
		console.log("PhoneNumber  "+this.phoneNumber);
		this.address.ShowAddress();
		console.log("Score "+this.score);
		this.date.showDate();
	}
}
module.exports = Student;