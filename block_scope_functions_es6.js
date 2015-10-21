/**
 * Block scoped functions
 **/
 "use strict";

//ES5
var count = 0;
if (1) {
    function increment() {
    	count++;
        return count;
    }
    increment();
} else {

}
//increment is not available
console.log(increment());