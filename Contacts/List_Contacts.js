var fs= require('fs');
var readLineSync= require('readLine-sync');
var Contact= require('./contact');
var contacts=[];
function menu(){
	console.log('1. show all contacts in file \n2. input contacts\n3. edit data\n4. delete contact\n5.'
	+' find contact\n6. save \n7. exit ');
}
// doc tu file ra
function readFile(){
	let contactsString= '';
	contactsString = fs.readFileSync('danhba.json', 'utf8');
	contacts= JSON.parse(contactsString);
	return contacts;
}

// tao 1 contact 
function create(){
	let name= readLineSync.question('name of contact: ');
	let phone= readLineSync.question('phone number: ');
	let age= readLineSync.question('age: ');
	let contact= new Contact(name,phone,age);
	return contact;
}
// them cac phan tu contact vao array contacts
function input(){
	console.log('*********************');
	// so luong contact muon nhap vao
	var number= readLineSync.question('enter number contacts: ');
	for(var i=0;i<number;i++){
		let contact= create();
		contacts.push(contact);
	}
	output();
//	writeFile();
	return contacts;
}

// xuat ra cac contact trong mang
function output(){
	console.log('contacts');  
	console.log(contacts);
}

function showInFile(){
	readFile();
	output();
}

// luu contacts vao file
function writeFile(){
	let contactsString= JSON.stringify(contacts);
	console.log(contactsString);
	fs.writeFileSync('danhba.json',contactsString);
	console.log('wrote to file');
}

// sua doi 1 contact (tim theo ten)
function edit(key,value, newValue){
	var editContacts= contacts.map(x=>{
		for(var key1 in x){
			if(key1===key&& x[key]=== value)
				return x=create();
			else return x;
		}
	});
	console.log(editContacts);
	contacts= editContacts;
	return contacts;
}

// hàm sort
function sort (key){
	return contacts.sort((a,b)=>{
		return a[key]- b[key];
	});
}

// xoa contact 
function deleteContact(key, value){

	for(var i=0 ; i<contacts.length; i++){
		if(contacts[i][key]=== value){
			contacts.splice(i,1);
		}
	}
	console.log(contacts);
	return contacts;
}

// tìm contact theo key
//function find(key,value){
	// var findContacts= contacts.filter(x=>{
	// 	for(var key1 in x){
	// 		if(key1===key)
	// 			return x[key].toString().toLowerCase()=== value.toString().toLowerCase();
	// 	}
	// });
	// console.log(findContacts);
	// return findContacts;
//}
function find(key,value){
	let arr= Object.keys(contacts[0]);// trar ve mang chuwa cac thuoc tinhs cua object
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		if(arr.indexOf(key)===-1) return reject(new Error('key not exist'));
		return resolve( contacts.filter(x=>{
					return x[key].toString().toLowerCase()=== value.toString().toLowerCase();
	 		}) );
		},0);
	});
};	

	

function main(){
	menu();
	var choose= readLineSync.question('your choose: ');
	switch(choose){
		case '1':
			showInFile();
			main();
			break;
		case '2':
			input();
			main();
			break;
		case '3':
			edit('name','hoa');
			main();
			break;
		case '4':
			deleteContact();
			main();
			break;
		case '5':
			let a=find('sex', 20).then(res=> console.log(res))
			.catch(er=>console.log(er+''));
		//	main();
			break;
		case '6':
			writeFile();
			main();
			break;
		case '7':
			break;
	}
}
readFile();
main();