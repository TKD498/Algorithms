var Problem2 = 
var userInput = prompt("Pick any Number that comes to mind")

while(userInput != Number(userInput)){
 	alert("Sorry but thats not a number")
 	var userInput = prompt("Pick any Number that comes to mind")
 }
//Positive Even and Odd Loop
if(userInput >= 0){
	for(var i = 0; i < userInput; i++){
		if(i % 2 == 0){
			console.log("Even: " + i)
		}
	}
	for(var i = 0; i < userInput; i++){
		console.log("Odd: " + i)
	}
}
//Negative Even and Odd loop
if(userInput < 0){
	for(var i = 0; i > userInput; i--){
		if(i % 2 == 0){
			console.log("Even: " + i)
		}
	}
	for(var i = 0; i > userInput; i--){
		console.log("Odd: " + i)
	}
}