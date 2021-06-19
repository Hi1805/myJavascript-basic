var kb = require('readLine-sync');
class  Date {
	constructor(day,month,year){
	this.day  =	day;
	this.month = month;
	this.year = year;
	}
	createDate(){
	this.day  = kb.question("Please Enter day ");
	this.month = kb.question("Please enter month ");
	this.year = kb.question("Please Enter year ");
	}
	showDate(){
		console.log("day "+this.day);
		console.log('month '+this.month);
		console.log("year "+this.year);
	}
};
module.exports = Date;
