/**
* Arrow functions
**/

var no = [10, 20, 30, 40];

//ES5
no.map(function(item) {
	return item = item + 1;
});

no.map(function(item, i) {
	return item + " " + i;
});

no.map(function(item, i) {
	if(item%10 === 0) {
		return item/10;	
	}
});

//ES6
var no1 = no.map(v => v + 1)

var no2  = no.map((v, i) => v + "," +  i)

var no3 = no.map(v => {
	if(v%10 === 0) {
		return v/10;	
	}
})

console.log(no1);
console.log(no2);
console.log(no3);
