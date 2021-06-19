var fs = require('fs');
var kb = require('readline-sync');
var contacts =[];
function  input() {
	contact= {};
	var name = kb.question("Please Enter Name ");
	var phoneNumber  = kb.question("Please Enter  phoneNumber ");
	contact.name = name;
	contact.phoneNumber = Number(phoneNumber);
	return contact;
}
function createContacts(){
	var number = kb.question("Please Number of contact ");
	for(var i = 0;i<number;i++){
		console.log("Please Enter contact "+(i+1) );
		contacts.push(input());
	}
}
function output(){
	console.log("=============================");
	for(var contact of contacts)
		console.log("Name : "+contact.name,"Phone Number :" +contact.phoneNumber);
}
function fixContacts(){
	var index = kb.question("Please index : ");
	var name = kb.question("Please Enter name , You want to fix ");
	contacts[index].name = name;
	var phoneNumber = kb.question("Please Enter phoneNumber , you want to fix");
	contacts[index].phoneNumber = Number(phoneNumber);
	output();
}
function findContacts(name){

	return contacts.filter(x=>x.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')===name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
}
function main(){
	createContacts();
	output();
	 //fixContacts();
	var name = kb.question("Please enter Name ");

	console.log(findContacts(name));
}	
//main();
console.log("thành huy".normalize('NFD'));