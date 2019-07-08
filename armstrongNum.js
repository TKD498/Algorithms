let checkNum = Number(prompt("Pick a Number and i will tell you if its an armstrong number")) //153

isArmstrongNumber(checkNum)
function isArmstrongNumber( number ){
    let result = false;

    let orignalNum = number;
    let numOfDigits = number.toString().length;
    let sum = 0;

    while( number > 0){

        let lastDigit = number % 10
        sum += Math.pow( lastDigit, numOfDigits)

        number = Math.floor( number / 10)
    }

    result = sum == orignalNum;
    console.log(result)
}