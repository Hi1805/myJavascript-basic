sum = (a,b)=>{
    return a+b;
}
sum2 = (a,b)=>a+b;
// sum(3,3)
//
// Object
// var dog = {
//     name :'gau gau',
//     test :function(){
//        function show(){
//            console.log(this.name);
//        }
//        show.bind(this)();
//     }
// }
// dog.test();
//ArrowFunction 
var dog = {
    name :'gau gau',
    test :function(){
       show = ()=>{
           console.log(this.name);
       }
       show();
    }
}
dog.test();// se ra gau gau , arrowFunction khong can bind, this nó sễ lấy đối tượng gần nhất
var dog = {
    name :'gau gau',
    test :function(){
       show = ()=>{
           name : 'meo meo ',
           show2 = ()=>{
               console.log(this.name);
           }
           show2();
       }
       show();
    }
}
dog.test();
// khong nen dung ArrowFunction lam methods object
// phai dinh nghia no truoc khi su dung
//
// Cú pháp
// Arrow function thường ngắn gọn hơn function
// Arrow function không bind this
// Arrow function không bind arguments
// Arrow function không phù hợp làm method cho object
// Arrow function không thể sử dụng làm hàm constructor
// Arrow function không có thuộc tính prototype
// Arrow function không được hoisted