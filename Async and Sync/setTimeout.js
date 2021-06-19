/**Bai 1 : 
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
//Bai 2
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
//
//bai 2 :// ở dưới là các hàm khuôn mẫu , còn tham số truyền vào các em đọc đề rồi tự cho nghe :v
function doAfter(callback,x) {//  theo đề bài thì hàm doAfter có bao nhiêu đối số ?, là gì em ? 2 đố số là gì với gì em
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            callback();
           // resolve();// trả kết quả đúng , đúng không ?
        }, x);
        resolve();
     })
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}
// để a làm rồi a giải thích được -_-
// bản chất của hàm then là em truyền 1 callback và trả về 1 promise
doAfter(sayHello, 5000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye