"use strict";
//ES6
let no = 1;
let obj = {
    foo: "bar",
    [ "foo_" + no ]: "computed properties"
}

console.log(obj.foo_1);

//ES5

var obj1 = {
    foo: "bar"
}

obj1[ "prop_" + no ] = "computed properties";

