//-------------------Leap-Year-Check-------------------
 var year = prompt("What year is it?")
 if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
 	alert("This year is a leap year according to the Gregorian calendar")
 } else{
 	alert("This year unfortunatly is not a leap year")
 }
