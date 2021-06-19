function sum(a){
    console.log(arguments);
    var x = Array.from(arguments);
    console.log(a);
    console.log(x);
}  
sum(1,2,3);
//arguments la tat ca doi so truyen vao
function sum2(...string){//rest
    console.log(string);//mang
    console.log(arguments);//doi tuong
}
sum2(1,2,3,4);
//parameters
function parameters(name = 'huy'){
    this.name = name;
    console.log(name);
}
parameters('name');
//Enhance literal
const name = 'oggy';
var myDog = {
    show(){
        console.log("gau gau");
    }
    ,name,
}
console.log(myDog);
//path
//Spread
const a = [5,6,7];
const array = [1, ...a ,6];
console.log(array);