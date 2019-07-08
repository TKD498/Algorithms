//-------------------Vowel&Consonant-Checker-------------------
 var userInput = prompt("Type any letter")
 while (userInput.length >= 2){
 	alert("Do not type more than one character")
 	var userInput = prompt("Type any letter")
 };

 var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

 for(var i = 0; i < vowels.length; i++){
 	if(userInput == vowels[i]){
 	alert("You have typed a Vowel! Good Job!!!!")
 } else if(userInput != vowels[i] && userInput != "y"){
 	alert("You have typed a Consonant! Good Job!!!!")
 } else if(userInput >= 0 || userInput <= 0){
	alert("That is not a letter")
} else {
 	alert("Y is sometimes a consonant and sometimes a vowel")
 }
 	break
 }