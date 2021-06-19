let a = 3,c = 3;
console.log(a===c);// true

let obj1 = {a:3},obj2 = {a:3};
console.log(obj1 ===obj2);//false

let b = c;
b=2 ;
console.log(b===c);//false

let obj3 = obj2;
obj3.a = 5;
console.log(obj3 ===obj2);//true
//obj3 thay doi thi obj2 cung thay doi
const obj4 = obj2;
function ex(){
    obj4.b = 5;
    console.log(obj4===obj2);
}
ex();//true