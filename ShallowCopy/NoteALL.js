// vidu 
let obj1 = {
    a: 1,
    b:2,
    x:{ y : 5}
}
let obj2 = {
    ...obj1
}
obj1.x.y = 10;
console.log({obj1,obj2});
// ta thay 2 cai dieu thay doi 
var test = JSON.parse(JSON.stringify(obj1));//Deep Coppy
console.log(test);