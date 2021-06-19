function add(a,b){// fn1 
    if(typeof a !=='number'||typeof b !=='number')
        return Promise.reject(new Error("this is not number")+' ');
    else
        return Promise.resolve(a+b);
}// return nay chi la tra ve resolve trong promise;
//add(3,5).then(x=>console.log(x));  ;

//===============================================
//add3();
 // vay gio muon add +3 ,5,6, thi phai lam sao
 // khi chua biet Ansync , await
 //add(3,4).then(x=>add(x,3)).then(x=>add(x,5));//.... nếu cộng rất nhiều số, và tham số truyền ở add() lần là định nghĩa sẵn
 // rồi mình lại dùng lại 1 promise, có nghĩa promise chồng promise sẽ được gọi rất nhiều lần 
 // sẽ mất thời gian sẽ không tối ưu
 // khắc phục cái này người ta sinh ra  Async/Await
async function add4(a,b,c){
    try {
        let x = await add(a,b)+c;
        return x;
    } catch (error) {
        return Promise.reject(err);
    }
}
//add("3",4,5).then(x=>console.log(x)).catch(err=>console.log(err));
// Vậy truyền vào không phải 1 số thì sao
// thi let sẽ bằng undfined;
// x  = await add(a,b);=> thì nó trả về giá trị PromiseValue;


//================================NOTE : ==================================
// hàm async khi return luôn trả về 1 promise, nếu ta return 1 giá trị thì giá trị đó sẽ được truyền vào resolve

// function add(a,b){// fn1 
//     if(typeof a !=='number'||typeof b !=='number')
//         return Promise.reject(new Error("this is not number")+' ');
//     else
//         return Promise.resolve(a+b);
// }

add(3,5).then(x=>add(x,3)).then(x=>add(x,6));
async function add2(){
    
    return Promise.reject("huy");// resolve
}
// 
function add2(){
    return Promise.resolve("huy");
}
add2().then