// // var blog = {
// //     domain : 'vi du',
// //     author : "huydeptrai",
// //     showWebsite : function (callbackFunction){
// //         callbackFunction();
// //     },
// //     render : function(){
// //         this.showWebsite(function(){
// //             console.log(this); // this nay la cua windown
// //             console.log(this.domain); // undefined
// //             console.log(this.author); //undefined
// //         });
// //     }
// // };
 
// // //blog.render();
// // // Cách giải quyết :
// // var blog = {
// //     domain : "vidu",
// //     author : "huydeptrai",
// //     showWebsite : function (callbackFunction){
// //         callbackFunction();
// //     },
// //     render : function(){
// //         var this2 = this;// à có nghĩa seft chính là bog
// //         this.showWebsite(function(){
// //             console.log(this2); // là đối tượng this
// //             console.log(this2.domain); // ok
// //             console.log(this2.author); /// ok
// //         });
// //     }
// // };
 
// // //blog.render();


// // //
// // var blog = {
// //      domain : "vidu",
// //     author : "huydeptrai",
// //     showWebsite : function (callbackFunction){
// //         callbackFunction();
// //     },
// //     render : function(){
// //         this.showWebsite(function(){
// //             console.log(this); // là đối tượng this
// //             console.log(this.domain); // ok
// //             console.log(this.author); /// ok
// //         }.bind(this));
// //     }
// // };
 
// // //blog.render();

// // // 
// function Example(){
//     this.value = 10;
//     this.show =  function (callback){
//         callback();
//     },
//    this.test = function(callback){
//        callback(callback);
//    }
// }
// function km(){
//     console.log(this.value);
// }
// // x = new Example();
// //x.test(km);
// var y = km.bind(new Example);
// y();
// var person = {
//     name : 'huy',
//     age : '100',
//     show : function(callback){
//         callback()
//     }
// }
// var person2 = {
//     name : 'huydeptrai',
//     age : '10000'
// }
// function show2(){
//     console.log(this.name);
//     console.log(this.age);
// }
//  show2.bind(person)();
// // huy ,100
// // var y = show2.bind(person2);
// // y();// huy,100000
// // person.show(show2)//undefined, undefined
// // person.show(show2.bind(person));

var Example = {
    ex1 : 'huy',
    ex2 : 'ex2',
    show : function(x,y){
        console.log(x,this.ex1);
        console.log(y);
    }
};
var Example2 ={
    name : '1232',
    age : 10
};
Example.show.bind(Example,3)(5);