var base = Number(prompt("Pick a base number in relation to an exponent")) //3
var exponent = Number(prompt("Pick a exponent number")) //5
var loop = 1;
var result = base;
powerOf(base, exponent)
function powerOf(base, exponent){
	if(loop == exponent){ //Checking if the number is to the power of 1
		console.log(result) //If so print base
	} else if(exponent == 1){
		console.log(base)
	} else if(exponent == 0){ //Checking if the number is to the power of 0
		console.log(1) //If so then print 1
	} else{
		result = result * base //4 = 4 * 4, 16 = 16 4
		loop++ //adding to loop so the recursion ends
		powerOf(base, exponent) //starting the function again
	}
}