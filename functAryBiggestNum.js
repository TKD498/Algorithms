//Write a program to find the maximum number in an array using function
let nums = [26, 50, 4, 4232, 23, 67, 89, 5000000]
 
biggestNum(nums)
function biggestNum(array){
    let biggestNum = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > biggestNum ){
            biggestNum = array[i]
        }
    }
    console.log(biggestNum)
}