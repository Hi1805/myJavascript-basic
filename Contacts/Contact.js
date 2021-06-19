var kb = require('readLine-sync');
function Contact() {
	this.name;
	this.phoneNumber;
}
Contact.prototype.input = function() {
	this.name = kb.question("Please Enter Name ");
	this.phoneNumber = kb.question("Please Enter Phone Number  ");
	return Contact;
};
Contact.prototype.output = function() {
	console.log("name "+this.name+"\n"+"Phone Number"+this.phoneNumber);
};
Contact.prototype.getName = function() {
	return this.name;
};
Contact.prototype.setName = function(name) {
	this.name = name!=='number'?name:"No Name ";
}
Contact.prototype.getPhoneNumber = function() {
	return this.phoneNumber;
};
Contact.prototype.setName = function(phoneNumber) {
	this.phoneNumber = phoneNumber==='number'?phoneNumber:0;
}
module.exports=Contact;

