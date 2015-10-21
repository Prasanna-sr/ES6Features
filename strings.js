"use strict";
let employee = { name: "Foo" , age: 21}

let message = `Name is ${employee.name} and
i m ${employee.age} years old`

//Name is Foo and
//i m 21 years old

String.raw`${message}`