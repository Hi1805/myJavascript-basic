// Cú pháp 
// new Date();
// new Date(value); value : Giá trị số nguyên đại diện cho số mili giây kể từ 01/01/1970-00:00:00 UTC.
// new Date(dateString);
// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
var now = Date.now();
console.log(now)// trả về thời gian kể từ ngày 1/1/1970 năm nhuận được bỏ qua 
console.log((new Date).getDate());// lấy ngày hôm nay
console.log((new Date).getFullYear());// lấy năm
console.log((new Date).getTimezoneOffset());//Trả về phần bù múi giờ tính bằng phút cho miền địa phương hiện tại.
console.log((new Date).getDay());// trả về thứ
///https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Date


/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    // Write code here...
    var day=new Date(dateString);
    if(day.getDay()==0 || day.getDay()==6)
      return true;
    else return false;
  }
  /**
   * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
   */
   
  var fromDate = new Date('2019/10/17');
  var toDate = new Date('2019/10/21');
   
  function diff(fromDate, toDate) {
    // Write code here...
    return (toDate.getTime()-fromDate.getTime())/(60*60*1000*24);
  }
  
  
  /**
   * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
   * cách ngày được truyền vào n ngày
   */
  
  var date = new Date("06/10/2019")
  
  function subtractDays(date, n) {
    // Write code here...
    return date.getTime()-n*24*60*60*1000;
  }
  /**
   * Tính số ms chênh lệch giữa date b và date a
   diffMs("02/10/2019", "10/10/2019")
   */
  
  function diffMs(a, b) {
   // viết code ở đây
   return (new Date(b)).getTime()-(new Date(a)).getTime();
  }