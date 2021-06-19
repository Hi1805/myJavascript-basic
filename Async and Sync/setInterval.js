//let timerId= setInterval(() => console.log('Hello'), 3000);
// function example(x){
//    var abc =  setInterval(()=>{
//         x++;
//         console.log(x);
//         if(x===5){
//             clearInterval(abc);
//             console.log("happy new year");
//         }
//      },1000)
// }
// example(0);
// while(true)
// 2 đứa em làm  5 giây đếm ngược ra happy new year đi
 function say(){
     console.log("hello");
 }
 function run(callback,x){
     var count = 0;
     let interval = setInterval(()=>{
         callback();
         count ++;
         if(count ===5){ 
             clearInterval(interval);
            console.log('success');
        }
 },x);
}
run(say,1000);