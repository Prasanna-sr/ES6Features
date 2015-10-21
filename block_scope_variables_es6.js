"use strict";
/*
 * Block scope
 */

//ES6
//module1
{
    let a = 1;
    for (let i = 0; i < 5; i++) {
        let temp = 0;
        temp = temp + i;
    }

}

//module2
//module2 requires module1

//a, temp not available
console.log(temp);
console.log(a);

