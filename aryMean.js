//Write a program to find Median of the given Array?
const nums = [2,78,3,456,7,7,4,3,4,9];
const len = array.length
let median = 0;

if(len % 2 == 0){
    let evenAryMedian = 0;
    let temp = 0;
    temp = len / 2;
    evenAryMedian = array[temp - 1] + array[temp]
    median = evenAryMedian / 2
} else{
    let oddAryMedian = 0;
    oddAryMedian = len / 2;
    oddAryMedian -= 0.5;
    median = array[oddAryMedian]
}

console.log(median)

