//Fibonacci Iteration
var fibNum = Number(prompt("Pick the number for fibonacci"));
var array = [0,1];
var pushNum = 0;
for(var i = 2; i < fibNum; i++){ //Loop will end once i is less than fibNum
	if(fibNum == 1 || fibNum == 2){//Checking if we should continue the loop
		console.log(array)
	} else {
		pushNum = array[i-1]+array[i-2]//Finding fibonacci numbers
		array.push(pushNum) //Pushing fibbonacci numbers into array
	}
};
console.log(array)
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

//Factorial Iteration
var facNum = Number(prompt("Pick a number any number")); //factorial number
var temp = 1; //Temp variable
for(var i = 1; i <= facNum; i++){
	temp = temp * i // will update a everytime
}
console.log(temp) // prints the value of factor on the top, the value factor never changes

//Factorial Recursion
var facNum = Number(prompt("Pick an epic number"))
var temp = 1
var i = 1

factorial(facNum)
function factorial(){
	if(i == facNum){
		console.log(temp)
	} else{
		temp = temp * i;
		i++
		factorial(facNum)
	}
}















