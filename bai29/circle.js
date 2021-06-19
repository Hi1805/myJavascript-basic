function Circle(x,y,r){
  this.x = x;
  this.y = y;
  this.radius = r;
}
Circle.prototype.isOverlapped = function(c){
  var d = Math.sqrt(Math.pow(this.x - c.x, 2) + Math.pow(this.y - c.y, 2));
  if (d === this.radius + c.radius) {
    return -1;
  }
  if (d < this.radius + c.radius) {
    return ;
  }
  return 1;
}
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));
module.exports = Circle;