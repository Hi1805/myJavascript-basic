function Fraction(a,b){
	this.numerator = a;
	this.denominator = b;
	
}
var a = new Fraction(3,4);
var b = new Fraction(1,2);
Fraction.prototype.output = function() {
	console.log();
};
Fraction.prototype.add =function(pc1){
	 	numerator = this.numerator*pc1.denominator;+pc1.numerator*this.denominator;
		denominator = this.denominator*pc1.denominator;
    	var f2  = new Fraction(numerator,denominator);
		return f2;
	}
var a = new Fraction(1,2);
a.output();
