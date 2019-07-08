//Write a program to find GCD of the array elements given an array of numbers.

let nums = [36, 18, 24, 30]; // list of numbers
let results = [] //placement for divisible number
let lowestNum = nums[0]; //setting default value for variable
let GCD = 0; //setting default value for variable
let choosing = []

for(let i = 0; i < nums.length; i++){ //finding lowest number in array
    if(nums[i] < lowestNum){ //this will tell us the higest number we can go  
        lowestNum = nums[i] //when finding the GCD
    };
};

for(var x = 0; x < nums.length; x++){//finding divisble numbers 
    for(let y = 2; y <= lowestNum; y++){ 
        if(nums[x] % y == 0){
            results.push(y)
        }
}
}

for(let x = 0; x < results.length; x++){
    let temp = 0;
    for(let y = 0; y < results.length; y++){
        if(results[x] == results[y]){
            temp += 1
        }
        if(temp == nums.length){
            choosing.push(results[x])
            break
        }
    }
}

for(let x = 0; x < choosing.length; x++){
    if(choosing[x] > GCD){
        GCD = choosing[x]
    }
}

console.log(GCD)//WE'VE FOUND THE GDC!!!!!!!! LETS GOOO!!