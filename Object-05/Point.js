function Point(a,b){
	this.x = a;
	this.y = b;
}
Point.prototype.output = function() {
	console.log(this.x +"/"+this.y);
};
var a = new Point(3,4);
a.output();
