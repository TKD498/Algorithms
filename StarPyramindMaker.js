//-------------------Pyramid-------------------
 var pyramid = []
 var star = '*'
 var userInput = prompt("How big would you like your pyramid to be?")

 while(userInput != Number(userInput)){
 	alert("Sorry but thats not a number")
 	var userInput = prompt("How big would you like your pyramid to be?")
 }

 for(var i = 0; i < userInput; i++){
 	pyramid.push(star)
  console.log(pyramid)
 }