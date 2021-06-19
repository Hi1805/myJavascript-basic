
//1 :
console.log("hello");
function Student(name, age){
	this.name = name;
	this.age = age;
}
function showInfo(obj){
	return  obj;
}
var a = Student("huy",1);
console.log(showInfo(a));







/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
  // chỉ viết code ở dưới dòng này.

      delete student[key];
  return student;
}
//---------------
/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
  // viết code ở đây
  var count =0;
  for(var key in obj)
   count ++;
   return count;
}
//----------------
/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
  // Your code here
  this.color=color;
  this.shape=shape;
  this.fill=fill;
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
//=========prototype
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
  // Viết code ở đây
  this.diemToan=diemToan;
  this.diemLy=diemLy;
  this.diemHoa=diemHoa;
}

Student.prototype.average = function() {
  // Viết code ở đây
  return Math.round((this.diemToan+this.diemLy+this.diemHoa)/3);
  
}

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
