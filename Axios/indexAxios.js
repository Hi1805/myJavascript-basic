var axios = require('axios');
// Axios là một HTTP client dựa được phát triển trên đối tượng Javascript Promise, 
//nó có thể sử dụng trong các ứng dụng font-end Vue.js, React, Angular…
// Sử dụng Axios dễ dàng gửi đi các request HTTP bất đồng bộ đến các REST endpoint và thực hiện các chức năng CRUD.
// axios như request nhưng nó chuyển kết quả thành 1 promise 
// Ex :
axios.get('https://www.facebook.com/ripker1805')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  //https://techblog.vn/axios-la-gi-xay-dung-ung-dung-khai-thac-tin-vnexpressnet-su-dung-vuejs-va-axios