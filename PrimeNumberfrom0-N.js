var i = Number(prompt("Pick a Number"));
for(var x = 0; x <= i; x++){
  for(var y = 2; y <= x; y++){
  var array = [];
  if(x % y == 0 && x != y){
    array.push(y)
  }
  if(array.length == 1){
    console.log("Non Prime") // We've found a number divisable by x that has no remainder, therefore its a not a prime number.
    break
  }
  if(x == y && array.length == 0){
    console.log(x) // WE'VE FOUND A PRIME NUMBER!!!
  }
}
}