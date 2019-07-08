//Fibonacci Recursion
var fibNum = Number(prompt("Pick the number for fibonacci"));
var array = [0,1];
var pushNum = 0;
var i = 2;
fib(fibNum)
function fib(z){
	if(i == z || z == 1 || z == 2){ //checking if there is a need to continue the 
		console.log(array)			//function, as well as acting as a stopping point
	} else {
		pushNum = array[i-1]+array[i-2] //decides what nums to push into array
		array.push(pushNum)			    //pushes fibonacci number
		i++								//Adds 1 to i to make sure the recursion ends
		fib(fibNum)						//Calls the function again
	}
}