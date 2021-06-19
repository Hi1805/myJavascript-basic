/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách t, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
// var library={
//     users: users;
//     books : books;
//     history = history;
//}
const {table} = require('table');

var books = [
   story=[
       {id:'s01',name :'conan',price : 15000},
       {id:'s02',name :'cau be rong',price : 20000},
       {id:'s03',name :'doreamon',price : 10000}
   ],
   learningbooks=[
       {id:'l01',name :'reading',price : 50000},
       {id:'l02',name :'reading',price : 40000},
       {id:'l03',name :'reading',price : 150000},
    ]
]
// var users = {
//     Student:[
//         {id : 's01',name:'A',book:books.id}
//     ]
// }
config = {
    columns: {
      0: {
        alignment: 'left',
        width: 10000
      },
      1: {
        alignment: 'center',
        width: 1000000
      },
      2: {
        alignment: 'right',
        width: 1000000
      }
    }
  };
  
  output = table(books, config);
  
  console.log(output);