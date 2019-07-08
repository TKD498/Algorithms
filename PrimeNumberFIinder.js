  var x = Number(prompt("Pick a number")) // Retrieve a number 
  for(var y = 2; y <= x; y++){
  var array = []; // Place Array here so that it resets every time the loop gets a new number
  if(x % y == 0 && x != y){
    array.push(y) //Push the divisable number into the array so we can check what's in the array later
  }
  if(array.length == 1){
    console.log("Non Prime") // We've found a number divisable by x that has no remainder, therefore its a not a prime number.
    break //Kill the loop, There's no point in moving forward.
  }
  if(x == y && array.length == 0){
    console.log("Prime Number: " + x) // WE'VE FOUND A PRIME NUMBER!!!
  }
}