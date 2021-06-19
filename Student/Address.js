var kb = require('readLine-sync');
class Address{
	constructor(street,district,city){
		this.street = street;
		this.district = district;
		this.city = city;
	}
	createAddress(){
		this.street = kb.question("Please Enter street ");
		this.district = kb.question("Please Enter district ");
		this.city = kb.question("Please Enter city  ");
	}
	ShowAddress(){
		console.log("street : "+this.street);
		console.log("district : "+this.district);
		console.log("City : "+this.city);
	}
}
module.exports = Address;