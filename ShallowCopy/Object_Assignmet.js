const Obj1 = {
    name : 'huy',
    age : 20,
    major :'SoftWare engineer'
}
const Obj={
    name : 'nam',
    age : 21,
    major :'IT'
}
// var Obj2 = Object.assign({},Obj1);
// Obj2.sex  = 'female';
//console.log({Obj1,Obj2})
// Obj2 = Obj1;
// Obj2.sex  = 'female';
// console.log(Obj2);
// console.log(Obj1);//obj1 bi thay doi , tuong tu nhu Spread
//==============1 - sao chép các giá trị từ một đối tượng khác ===================
// var newObject = Object.assign(Obj1,Obj);
// console.log(newObject);
// // no chi lay Obj
// console.log(Obj1);//ta thay Obj1 va object co key giong nhau nen no lay Obj { name: 'nam', age: 21, major: 'IT' }
var myDog ={
    speak :'gau gau',
    name :'nana'
}
Object.assign(Obj1,myDog);
//console.log(Obj1);//{ name: 'nana', age: 20, major: 'SoftWare engineer', speak: 'gau gau' }

// ====Dùng để merge duplicate properties trong object:
// var sum =  Object.assign([],myDog,Obj1);
// console.log(sum);//[ speak: 'gau gau', name: 'nana', age: 20, major: 'SoftWare engineer' ]
// var sum =  Object.assign({},myDog,Obj1);
// console.log(sum);//{ speak: 'gau gau', name: 'nana', age: 20, major: 'SoftWare engineer' }


//4 
// var newObject2 = Object.assign(Obj1,Obj,myDog);// name: 'nana', age: 21, major: 'IT', speak: 'gau gau' }
// console.log({newObject2,Obj1});
// /*{
//     newObject2: { name: 'nana', age: 21, major: 'IT', speak: 'gau gau' },
//     Obj1: { name: 'nana', age: 21, major: 'IT', speak: 'gau gau' }
//   }
// */
let a = Object.assign({foo:0}, {bar: 1}, {baz: 2});
console.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
console.log(b);
// {foo: 2}

// Clone an object
let obj = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj);
console.log(clone);


//Gia lap 

Object.prototype.assign2 = function() {
	let arr  = Array.from(arguments);

};


