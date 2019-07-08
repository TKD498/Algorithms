let num = Number(prompt("Pick a number and i'll tell you if its perfect"));
let sum = 0;

for(var i = 0; i < num; i++){
    if(num % i == 0){
     sum += i
    }
}

if(sum == num){
    console.log(`${num} is a perfect number!`)
} else {
    console.log(`${num} isn 't a perfect number :(`)
}