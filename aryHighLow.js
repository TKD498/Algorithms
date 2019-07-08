const nums = [50, 20, 30, 60, 10];
let lowest = nums[0];
let highest = nums[0];

for(let i = 0; i < nums.length; i++){
     if(nums[i] > highest){
        highest = nums[i]
     }
     if(nums[i] < lowest){
        lowest = nums[i]
     }
}

console.log(`The Biggest, Badest and Strongest Number is : ${highest}`)
console.log(`The Smallest and Weakest Number is : ${lowest}`)