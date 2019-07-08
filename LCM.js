//Write a program given an array of ‘N’ numbers, find LCM of it.
let max = 1;
let nums = [2, 7, 6, 4]
let multiples = [];
let LCM = 0;
let valad = false;

for(let i = 0; i < nums.length; i++){
    max *= nums[i]
}

for(let x = 0; x < nums.length; x++){
    for(let y = 1; y < max; y++){
        multiples.push(nums[x] * y)
    }
}

for(var x = 0; x < multiples.length; x++){//finding divisble numbers 
    if(valad){
        break
    }
    let temp = 0;
    for(let y = 0; y < multiples.length; y++){ 
        if(multiples[x] == multiples[y]){
            temp += 1
        } if(temp == nums.length){
            LCM = multiples[x]
            valad = true
            break
        }
}
}

console.log(LCM)
