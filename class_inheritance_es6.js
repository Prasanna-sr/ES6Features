"use strict";


class Square {
	constructor (side) {
		this.side = side;
	}
	calculateArea() {
		return this.side * this.side;
	}
}


class Shape extends Square {
    constructor (x, y) {
    	super(x);
        this.x = x;
        this.y = y;
    }
    //public/prototype methods
    swap () {
    	let tempX = this.x;
        this.x = this.y;
        this.y = tempX;
    }
    sayName() {
    	return "shape";
    	//console.log(toString());
    }
    static toString(x, y) {
    	return "x : " + x + ", y : " + y;
    }
}

let shape = new Shape(4, 3);
console.log(shape.calculateArea());