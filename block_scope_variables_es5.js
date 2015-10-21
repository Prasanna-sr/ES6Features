"use strict";
/*
* Block scope
*/

//ES5
//module1
(function() {
    for (var i = 0; i < 5; i++) {
        var temp = 0;
        temp = temp + i;
    }
})();

//module2
//module2 requires module1
//temp not available
console.log(temp);



