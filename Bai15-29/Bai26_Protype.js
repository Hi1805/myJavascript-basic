
function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function() {
  console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);
console.log(mrThinh.sing === mrDung.sing);
