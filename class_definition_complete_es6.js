"use strict";
module.exports = _Shape;

function _Shape() {
    //private properties and function
    let count = 0;
    function privateFn() {}
    //class
    let Shape = class {
        constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            //public/prototype methods
        swap() {
            let tempX = this.x;
            this.x = this.y;
            this.y = tempX;
        }
        sayName() {
                return "shape";
            }
            //static methods
        static toString(x, y) {
            return "x : " + x + ", y : " + y;
        }
    }

    return Shape;
}

let Shape = _Shape();
let shape = new Shape(4, 3);
//class methods
shape.swap();
console.log(shape.x + ", " + shape.y);
shape.sayName();

//static methods
console.log(Shape.toString(5, 4));
