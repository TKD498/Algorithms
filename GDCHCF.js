//Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) 
//of two numbers is the largest number that divides both of them using recursion.

let num1 = Number(prompt("Choose a number"));
let num2 = Number(prompt("Choose another number"));
let HCF = 0;
let i = 0;

greatest(num1, num2)
function greatest(x, y){
    if(i == x || i == y){
        alert(`The Greatest Common Divisor is : ${HCF}`);
    } 
    else if(num1 % i == 0 && num2 % i == 0){
        HCF = i;
        i++
        greatest(num1, num2)
    }
    else{
        i++
        greatest(num1, num2)
    }
    }


