/**
 * Block scoped functions
 **/
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

console.log(increment());